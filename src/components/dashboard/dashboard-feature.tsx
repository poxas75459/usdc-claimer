/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "4j2hVXVshNfzshZFzaM5oYWTfonkMepeKgjopQ7LdGrxoTFkWUxVQrNHoZz8hLyhfatZU9u3HU3Vwig7nbarWDAi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2skjtshAXGy4hAvDDWdH86siJwPkqsCmWmxEjHktZDwpKNdQyYNUsxgPcB2rYU2fa8dGhnQjrrYWCSYzrArNZjsN",
  "key1": "5Mcqj1eeQNAr8arW3YgnTdqmCvFx4JiT4LJxr33Z6kn2hiyMnsyHYxck2pBDNzETozvnwQUig3tK2QoWADdvGU83",
  "key2": "64RQeMntJgXkJ31JwFUKveyepTGvASbcBRroU5snEvpZdTNeU2Fonq1AY8EGHVM9wy7q9Uh2S1pNazKFePVr3HXN",
  "key3": "2EqPn9FATy3oSVuY37XLBpwLaPhSKShayeDZm45KFeta5W7zQWYZv5in4HzAwniZRb5iuPXGpFwiY4xtta1zkcPD",
  "key4": "4tYmTdMDUvLMMNsZxkhAXm1hsjQXgVXyHpxbeHcjFa4egUoikMLTrsGUd8mFpjzQkDAkDCJ9BNbj68tZZk4vhtr",
  "key5": "4PABUhDKbzoYSvpwDyy1VY3nYJdzC6YVwQzZpvAREWXuXoD6rJLNvp6aCezY4gm5b5QaGfeyhjJChkYbLvUpZNH8",
  "key6": "2LeHTnvefpWemZtRaydbmnpjFRyZJ7wPazLvTcuoehzSGpw19yJH4i1c8XHtXLf2TNb4vvnPGLdsu1pTT2N7M9eE",
  "key7": "4F1Fg1vu2zyyR69z5XXeKtqqoFVryFEDVzFhEmPFMU1a85DuK6uVzQsoUC1d7rPYgKAWn5DKg36HLoaNy7ZXpbcB",
  "key8": "v6bkKutcyk195zTuarcz1yYqUmzMZSDGEFGrjrMc5yVWYyxUFTamB64JKAeHmZ4fQQHU3LEg8dPSSLgJrSEWRmK",
  "key9": "4KFpg1DerzzSfC9GAkQQVq2tcHZmaCvcHfaZsdHk1VukcYu8PrCYdmEmbWmsRMWFFDbPi6WtVYKgJTDPbdQPvTky",
  "key10": "3SnDiNnTyvh4QDLCfWciJ4DvmgWhFDzVsLywPdyurBuuaQ1AKRpPh7DJLXim1SwWs3tVUWB7DS3fdvSnHjeycDs5",
  "key11": "2DvJFpdAtixEdF3NgLbNY4UpbNnwyrEgoBpyivzDLAxATfAbUKFMrHju7hURjLTQw8GgpXbX9PRrHXG7Xsdwiu1M",
  "key12": "4P959TT3ea4XsYweMzLQMZv2y8Xa2hMAPYkhN97Vhy8XuD6yiGZzdJ181GPzCZYmtrZ59wuyMvDCRaWF5wSXu3yT",
  "key13": "CZNj3Pv7CosLwGxVtkyLJAifDDrHxzfnPH9BxiUx5i9aTgDFUixGHGpGrV9kxUjtPevGYTeKZn5y4nhpV7o9n9x",
  "key14": "3S33yZpqqTh8uq3bgkz3twNpVCeuWxr4TwLvnaYqZh7stxSHyfMZ92peh7ZMti2NPB4KRfmDTtdqKbjMByCZ9oh",
  "key15": "2WqpUQhHtaS4FUYwjYKFNhPWiXsCaybasN76zLfLgggTYS3CXLDxBgEbavP8eXwAGnCWMBFyEocM5xrDTA6go9uu",
  "key16": "36aUQZA9bK9qs54geHbSbG5s14V1raE2Zto5vsBf7fRYj7z29hhyZqmVF11rTxfWLKhbMLVFJ145rmXG2Jx68Atk",
  "key17": "3UnKTTCxU1iksTQdcJ3md3dwvE3hPFj9pVpwAkgYm5WUeQMJajnu5Gw7XQXzTDPtg7TXhzF8uNn6Zqwn5Y2KkvEZ",
  "key18": "44XA4HTwnMK9zWrCgsbW8oeskGPtV7wRYHEdWZvDScfd9zDJ15EtfDRGU6Ny6GbCa7JTqU2zNSzVpRJU5Crohw7w",
  "key19": "3FM8S2GXtiD8xiTg4xwn8gd1bvE85U1vQC5716ufiydMpuDrEeBXy8zKspzRkKWwZRbMUpBZ2pULov6ChwCYbJhz",
  "key20": "48K646fQzcu2bPgnuLu4Jxkde2S16ejg6ue5MGyes36LqLkqwTERbCeLFvcwZuYso3VPMummZC7KxELBYBtuxkxu",
  "key21": "5MmdsDTKf5WELCvWd7kJZXpRMg3bfrbTGjPPy5ADZa4ytAp71NuzTUGYz71BfPQStMFR99YQezJK8ti43oiDzeJb",
  "key22": "Dg4Jasr7MgjWbSqjjGSQkyngL68fU84UzkSUQ5CWYZZCF9Lkm2X2WfKQSxXgpMZidj28NoazVjTuPmkvUwiLspW",
  "key23": "zEbMaBUiM3wmkayt5KgvCJw8AQRNoCJEKKSpjag1FcoAuh8NxkDnJJXvjUtLiW1WSPGFJjoimozm4o8vKJQsLNr",
  "key24": "3i4Lx6PH6DCsSh8i3Z8fTgYJvK8n1uCCFmX7yebyusz8xA29FfdLCrzVnX3mkJ4iSrkh6PVwfk5yiBV1EZbVsZ7r",
  "key25": "2ooJ9nM21Yaw9ncJa4mkyz8PCNFe3A8JFmatWQHGSCNDpzWy5RjBxvcbZM4TuHmk7o1iop36d9GWSo89BDLeo4HN",
  "key26": "2FHY3nnbPDxymHkZo5btrTiHUjQQat9jG7yTtZ6qYBwEndjs9dB8198CZrBMzzfh4xfSaccNMRKnMHFjeVPn6JCT"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};

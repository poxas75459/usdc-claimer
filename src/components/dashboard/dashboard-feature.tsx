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
    "3MGY8f4N1eSoaFFeaQfUch7N5wPXAMnPu2Cg9ZTazV84SfhLMMJb4QLci5owimuvbEfharyhk8QNooh2zW4KM7Vd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZUp9rTNaRGGmWjRwUe8EjhrD2VVVKXiNmHmAT7ghVW1iMKsPvuKXcCn47CVyZE9yhXDFFbxgnVfkRmPU68PgPuT",
  "key1": "5JhN46wA1P32ptoTgAHGKLby7wG9TG84Wjy1jjYkntVGcj3VFqYMD6PTHzM6F6zcg8bysavSJmgiKNonWKPL9wu6",
  "key2": "3cEg1u5CiXLiQRkrT8GkGc2xxeLueDsGuqxvAmCUVCKjcwee3ZdLC1KuPrpWF9HVqBBVbzSmiVtuM3CbiF9Qpfwf",
  "key3": "2Bn4c7HQDRYcdAT2bv21HcbyA56NmmXEubVZPE8LPABzjdMgYwiQZ7TuCj1nLg11eAKt9tTYdpnFoAB5Q5s9PSZ6",
  "key4": "41x2rfX2Bjw3Mt8B9okQQTrNcbSZtsyApESHrRGXXM4HabKujTrt7fnv2J5KPnoJdfcSkxC35CTaSz4tcYwKw5W2",
  "key5": "cXpDeQYv4SjPacSmJr5inoXrkYFskf3riXC6knJy5qZbgXg719Qz3ZiedfZhgvh8uAEMHFbwjp2k4sFa4He6sR1",
  "key6": "2kcZRXtpF4q5gUJ4nNpWj4uMYqE9Le4yr3q9ajKactyPZowVBgNkhWAodTB8Npxyey9YrpAHSHNMdUboru3zk7Tk",
  "key7": "3hoB5QyqMPxeVRVaqokkUyXD413pg44RXDK3xbcxX4vMNGCpDMerBeETb5BAt3nzvjWccf3h5rGGBX7iDLVNeVwJ",
  "key8": "282YSYnir9x4kbN1GtyQXiSwtdsxyt6ddfFVFTEYAfv658gBHSkaxbogb8gzpqdGybmbE34sS51rynZic3hARidb",
  "key9": "2zbbgsBKW4qHxzVKVG7jsErrM9EhLUfSG4EkEcKR5cGKZ3RMqGdaazvgWJ2R9eFfsb8NDTrAtSzfVAMH8SmT6qr6",
  "key10": "49KoMqL7vgyPa3PSa6M75pgm7VKdk5EMrTTGFbkmGithFG52RuetXEhr33MuwMBdDNrM2PzZuwGDhid36irPp8jx",
  "key11": "3qdCEFZzJGaWxLVqaowGK2vCMK2Gutmz6mjA1BQ14tCYYWiE7DpRn5J7xbL6JYLvHvcnSoVqSEdEAfXTjDNgsGjy",
  "key12": "4DzeDW1UtjHUG8bLozUsv8x35TUuTyypvTASDhbHCwBYaD4gw1F88okv8b1qLkDitFcz38nbx3YoPZkMAzoFXrb9",
  "key13": "2HYdmE4jXDXtCWNHtm4HxSaGXj2V38GWt9J9pydWArPKnzNb2CnDpQZyWckyRnmXe3ac1foLYTLCym8TYeQGonmF",
  "key14": "3wYorxwWLdVU68zwerKvv4HvWLCTRz7EUUMYFLfaP3kJTEqcipCCsVNtK3pMCAyFPuTXcK43mc7NbVn8aufLJBBi",
  "key15": "5En8m2SRhSAP2556MvTvoCUFsApAGmyFWBDs6RSureWS7qMkM9UoHhqELd1c2BcjpPZYM1Ad9v2gYY5Qgsn12iJ7",
  "key16": "cx4mLg4NmMswobpLaGGjrBDZzcBUsKRp6NVigo6yeBTgs1MzY2GkXJTazefavT8m33PtD7YiDBycZawCV4z4b63",
  "key17": "2yLwN6CQPfSEnPWPfF7bZDauhohV47mRYxzRN1fSTTrB4bWo7Fdb2YFQ9v3gWYsBBLVTKAjBaLxnouWxdpexpBq1",
  "key18": "2DEuaqAc4sMq2GhX6TfvnKjjiCf7mf8cjfNizMrRW2BagVDMJSs3HHtY2MUvmcAzF2JAKxpFYSY9C3FGoS5RJk71",
  "key19": "2Wixz7yvJPtd8LR2Y8PYRF62G5TMsVkEtDQtKKhjReNVYaA2wRyknd2FrfVSWUkJTvTbk49THrKQcifG8CL1Reyb",
  "key20": "df6dKubDurFT2CWaPVZzHjmsbNy5epkAYsidbidKEDHb3JbkN1tuSrEJ5ByZjKWWc3m5gQFipyu49qWhwum6g2W",
  "key21": "3ztubFtfL5s8yzLiHCHsesAeRpQqmbbGMEFnbpf9vXH1kMmosRNn1jHrmi2BeBLSmspMqy1JogDTziCrncY1no3N",
  "key22": "2vuNQDxx86395gm4G96RSXaAHsfggiZtWH6962u6ALyMRifNmqMzrharmZsHg1aE795wKwwsUHSAadEN4MWMco2j",
  "key23": "4XBwNSHM83eq7YgGfU23GnWopvySjoZUbeSLs4823K5iLmNVV6Y8PjMzaXKXDgsUoPnL1K1D8jNKKCD87UWHvUQk",
  "key24": "5eUQcuCZUJZFBrx5wMDvgXhS8C9XquWAhVwmSfp8s8ypxcxPnvqUopsYwBF2acVYjRqhWyvaDD1YMgc9tVxf1XDN"
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

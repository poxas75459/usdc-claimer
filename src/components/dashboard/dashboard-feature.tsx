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
    "4rKC56vAKCxXciAAddu2aZyDyfe8U78zo9fnDS31NGAtqUnoTKEYwZVPhsatcFskxVMWt8eeBGZbYcdXGwzrGgRg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25qiajjyWJRimQMsRSyNykb1ZVH6LHrzWSgmjb26YGg68z71zR7DqoicP2tTLRnB3zaFzfyXiP945Dxzu7wtLDrk",
  "key1": "3VsA6XiU3aAR4ZfczTj67o9cieaCV1kVrkWtYEtVqXDRjm4f72umrgp7VG6GWGsefQpaREhxRSKgiabSySH3ciX1",
  "key2": "3aq1USCMRWG6S3FhqNJTCqG6QRF2M2VYx7HGKkKzqfwkf7ENY6Cccm4o36xzDqmYmUpUtNemj9AzaiedaW7GCsFn",
  "key3": "JYNPpdmY7N1d4eXJhHHBpK9WADhThjtJyVpPvSD12qboFg7jjP4zBmjztRVbsyMJVk4J44Q5oXbY3wWtAUQKHh7",
  "key4": "25Qo7vn4JBSF6yu3tmS6D8ha1QvdCxxzmJSb3PaVhazX6UG7ErevdEtJjHcTCP23NuHLgUdd3dtLGrroPQ9N73Wy",
  "key5": "65gJjYqoTmiuMsmo4MgKHo7ULYukriNfrrzHYkr7YbhEpCPQQYmgXdomTbjbNd5XS4zUAYxVL5XSpYybuS6xKF9D",
  "key6": "49GJrVVHwrd2kCDEP376djt2n2c6sUZfazVtqAruUcoDokrtsdjMGAfdnrLQoHHr2KJT2nkZ81y72WFEjpbJoqat",
  "key7": "4afGCND3C6auuwTxSgF32Z9ZS5xSshrx5DMtv64FAsv86KpEGLCpEXZXXronQH5frdsN78q7tHpjsReTdVksW8pD",
  "key8": "4ssy1XQWukUUoRxgRDPrVEE1rVRsubfJwkYyiMWwdQkUnZSig5Dto466siAiDuh1daTtC3TmTVc3Fyb4P237czqA",
  "key9": "4hoNLtameukFGqEWQfKaeVQwfGaLZzNM5J1rzo4ue7rgNoiNBpYq1WBqiSvsBKBt3aDsL1Jk7KApv1tHP8dQwQ6m",
  "key10": "iNzJrt895XUJ6s7ex5gebHE2xamqdgEaQGPnvnbNmZSEDJzEmHiiCU2835ebZBD4Sg21DtgKTeToXBxEojspvUZ",
  "key11": "4t5N3rUz7TgobPiEccVtV4RLPEgMrABwgSjJTNEnHDx1moUEDG8BgmZvFUMP7DhJ3DgwJJ76EEVm9oVt7uQy4cDD",
  "key12": "2xc7PeBpHukGKvPhZgoKzXnch7bWwymBVGue24W2eLaLW4na6Ao5dkJr6qW9b4ZNPvQfnXzoEpsekoCSdPrHwizQ",
  "key13": "DZPuf6DzbRSc2xgtVW6cvoS2Rt16DgBA9Ewa9PrnN3hHQQUnB55AfPQ7cRQKLhiHejCGfjq5YH3X6BzJo8S27XL",
  "key14": "63sAxUJfKasCpap8s5gvBuE9w4nQoeAwub31T59NJCd6fTvgVvxbkzMk3FWjRw6hLfDc6pShm5TC3ovc4NXRrzx3",
  "key15": "2tQbVjQVf6PHH1obhHXY7sUszrN4gUhZzzQGHdSuJRKgaYZ4vaLV69pSswnfNEYex3mZUXS337vBHNfszVqhWFBx",
  "key16": "4LdGqoEU9f9dwXxsmEWuafeAyLGTrgwZUwPHCBAhbvT8YoSM6DLEBtzDw8DMpc2RBgoN8JfZBwNRubLH1cJDBW57",
  "key17": "tnWFvzHeSkfcwREijfTeTSoHzLNpmV8dZadt6yvHN1NrH9GvS92idgFg3LCXuWWY4YaoCVqQmfFL3czq1YWZtR8",
  "key18": "JjtvWk6kKKctz5BgLEovyYJHJodVSFTBGfAMVy4nRFbs1PgUANPeX5wpdoK8JC4xyL6zVgAHhm4Dgyx9Nggx6iL",
  "key19": "DEdG3E9uB42wva7QKY57BFdzPo2pF9FwGW2fqpwX98jQpCdjpkQficAsetkVLMmfjaY2JJQyjdGaGGebjucU7KF",
  "key20": "2AAzJ5pnH776r8sCfS89Zr4B9hc7uFCxuy1wE87KJe4EcHQZ66PW4HRcHuA3KrqfzQz9kzXUzcWTcEiL3rBTnT4X",
  "key21": "3c15NfXaoTDz3CTdeRetnTrGpfxZn17ibULhPM6CYnKKjn8h2BiLJB7sFv4B8nr9c6ukG1b9eoMvgjFczvhu92Cq",
  "key22": "3WXNoe9sivXz3C4ULdEF5rPgdAc6zvdGBLHrswcsnqa6bLCAYrY6LLyC2YkpRXz4ud5zGzhgvoWXJztie9SHfeMv",
  "key23": "23eVeC8BNb66xudASCZzb5MWdjSA1mMcfYoXC6m3jhGPwBW1HKwjp3yoxnELQSeW5cEyNk7fr2nX6qRqo5SwnGPh",
  "key24": "5AosGsymMMi9zbNtc6kZLtXtYfYxcPf6uaBWLGe1G27VLbhLknasiGyPjfHM7zGQbrvZGbTo4uyALzpommE6PJor",
  "key25": "48uzhmiugxS1Y6PRXQ1W983bpHqigDkinyTvp83cK5V9pWZo5H4mcvtdG73BVCTZdBeHbgr44NgVhPPZogrEPNBB",
  "key26": "2xFAB2epo7XEbMpXm85GB7djPgNiHo3bNijW3xCtoXEuWvQrKnf3Ts45oLwgxNGauGL8kUJG3nerS1MP6LxsoBGR"
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

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
    "5bPh8jRUSUiSAUn872ZTAhA5k9Q6D4ZeMRPxnUXUzsC4kgRvMSuCzKuojLg6ExAE2uasuo9qYdFFf2yVULdoRWL5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wBkgyp4gMMU2GPWk6aLNgUM3e6AmrPeQFrtKJ8o6G7VFufPhAkpujWJt3cUpCVWxKcFNJ6VCrYeV2Wkmzqu3dfV",
  "key1": "2DvSrgEEQmf5fHdFLh4vRQujg2DGhkQvrAcPXDj5ia1dLRVWFgaruqpbM5zKdMRGz5D5eRBLV7LXdwt3GdD8p7Gx",
  "key2": "Y169sg8ejEFpC5ifC86M25jhEkVayYankFgmurvvpvSAb9BNRdKXXQFc7F3Hn1bCrMFYTG4TVRthSvThWM4QAP5",
  "key3": "T7FpZLu3m8fLN8427uSrqHNunoQRSS5P7jsb7n3obUS9B3TsQazEpUARgwVkhpB6v7iGcqyByhCHugoXaGc8jfG",
  "key4": "4jG9W35gStdp8QtEtM1CorAVFpwZDA83jPnNtH85XKvaTzZffoWE485ka5j8dhYr2tz2Y2JqearJngAaEyYgyodd",
  "key5": "Q6msQogWjmFJGw9qkQ6r75ZnbhuPtFxR5cJoNGNNMk9mUdDbhCxpiDMvRLSPfEmDgh4jADE6NEVhx4edSQVpxxV",
  "key6": "2Z8a9ncyeT1ZBwAP8eZTb8CsUjkybgEtR8SW7okEH8Nt1Tvn1uijde7xmE2yz7GNiCGJsetkMzk2YUkEbTtemNn5",
  "key7": "3atZDhwNaMv5P6FCLidMfpzZwYNXAfLu1WXZahGt3xMWz5AV6QdVmrif6ycqjeekNAJCP5r2U3maGg2XoUEwNXjh",
  "key8": "omcx5hMPuP95L4K1uXxZmThMnSoJGjHuxokd2UsJBU8GePfQhaQj4rQDPbncooMV27urjb2nZani1dGMReLm3xa",
  "key9": "2iXKCovTUHr4QgQRWPUzh7osF2cmjvuvVuWUkFxDLtbv4hkknJQQHCjLY3d1K34dvuG8WNJPgAhk7PbCLSfW89mJ",
  "key10": "3p74ZeqmFBATzmDccV2cJ2dCyDx36EWXjq2XvgspwGkGso8tyaquiFAFas5v52irqrqvu3xgLxFcJoCBxmdqfTLG",
  "key11": "33VoTGZFfsXzLwadoogEfu61hcJ5BfJjNzXPgkouWXVKHb1SfEn1VuZzkR32G6YGUtab6sV3kJ5Zcqkj2LfgJHXt",
  "key12": "4K8uBh45yLRxAKzccqxuNqNcGvPARg2BEnp4CN2EwgA92dkz7ubzGNfpsidkdM1BRsyXjXdPaHAEd7q9aHHWQQrw",
  "key13": "eiafq117DarYDqg8CrMeS2pFCQMLGDD3y5PVDsAPaUhCqxodNAgUi7SVXrTB5eT6wYFBjJ9sTVb1Uf7PYFhjAoa",
  "key14": "Fd3gs5w6vcp5TkqgqUZdquZubajnH21bzjJibJJpSGjKAT6pkjYh6xwBwCvJGvQBVnvd2HaSwDsfEEBvgTZoTkL",
  "key15": "2DqJn5mFuf1c9KCTLF7wFVgXKi6Hoa6n5Ydfa4RzTAtAvPB3Y8p7Tm3budNsgQ1WqgeGrsRGbC3GaDFcw5HwTs5h",
  "key16": "34aspiB7FKhjwtDKaVXA8ErXxrPggqp6dRUwh1fZEBHi83rcmdGPWP4SKWVpfj1D6AGYVmE5HSrCzoWoY2i9DYrU",
  "key17": "4AVAbYvccnfY4zkmggcyKKuoyJeps6dnCVeZTBr1nw3N4mopibN23ohbZRmmrLfYSPTmmXXVXzQn5wPBzKczQ7x1",
  "key18": "kKU4xTqsLTsvp6aAiZALHo6Ei5haSFCMPyqHtoCNYKqBSc3a7EACBwsJhhU4PDNjge24FpL415W5DbJU9APMaBW",
  "key19": "3RWL6WpJxdNyQvxTeJFEMeGcvK5khXh7g9peUQXzLKT8Pnq1XhFbmsSipNnC9QUcwmwWHJhptZkwZ1AW6spooaZh",
  "key20": "eYh9cg1j9HD6Xuev6ZGS2cidkQi2tPrMKw5HPU1uQPjA2xq9FsZBhcUCGmcHtdLRztx7XHa84qaZXca9r5BV4yr",
  "key21": "2EzHFuKDqrWyRn57ipyqUk1mVbs53F8ekFUEty76TjbfvgTUG8Tq5KHqvrztrENYcCQdUXq6s3sYSk2oiFMLQavh",
  "key22": "47agYD1xkg56s7xU1tkHLbPMYFkAG1xJqfSNBBVSi7QdahY5nA6YELtN3scbXtHKqo3N93vmoQycciVeMjSUi4on",
  "key23": "4KT3uDvAQ8DobUM1T93UmL88cFXDSUk2FMn8eohqocj3koygjeiX5LWuRmUR4M8ssFNAERW11v27BGDwqjaR9jyw",
  "key24": "cP77eGFbcFqK5cZ6YNNYiDfQDM5P9MYpAGdn5MQutLyv88imdNgi4nNtRaSumZwbsUV3vEiCTGGyQjh8trEPc2h",
  "key25": "5qnNyfN3pxUPxVPrQbJ9aTJyANpPNcot56qDQH6E6CKdw6kySm2t8oTenXyUotnRuqjoUzpP8WGqNVX4CqzYKCLm",
  "key26": "2TtM6FsLVWucHQ51SHUtCgEjc4MD78KMNqKdFisVQqP4yEYNnYkdxzYcSidQ4HL7TrQPV3LjD2zG5tizg2wpncNc",
  "key27": "3ox3QYn8Derd8GKxnuWYHC4KytruUpMDjnSCJhs9SEUFpLcVuCsSpKquZX6ArrgVunzZitZfiY86vac7kVdr1Wz9",
  "key28": "4s6KWKaCmkjwWxG5zJ9X5CtZWbxWmD7TS1NNZMcpghUjnfm641gNbHKxJc9d8TiUifho77sP9RuN3JXFybEMS6Ax",
  "key29": "4k828hRb7ygpXvzZsd7KHZF1Cy4ZjQVWU5iyh9YMzvquszdisCu1kgX4mA3Vzw5YekYimyTdLYCsJH8saoZXvAoA",
  "key30": "2DMtj4aTJRCtACCxoMiNrJVK6oSH1PyxvrzCasohAPYZWLRBBJW3D2xV72281hEaNWHBA3baa7ws6Zmh4Rv53dpj",
  "key31": "323pu2bqozMSz7J4Pz1qbH5DfK9DJkH1SuhwpKQoZyvws2WkSKUN8r6o1QMRffWMdc3Me4SCZUeiVajS5EAurQvb",
  "key32": "66AeqWZfpEQH1ShNLznc1ey4BGQngzgznK9ecCq36HCoBziZDi3rT7NVqCUkF6WTwjNd7USw1XNCydvKnTG2dVCR",
  "key33": "vMVw3ZDkmVFU1QGr45HrceikvEjVnm3GyPaA4qyKSntk5LQajmExiKxmwS2nayPEqajwiQXp3ss68pFUuFuP6xA",
  "key34": "49XBDJdh3KfV6Lvx7mysD8xDoC4jXV1HnqV5S5uTsa93Pe6hG1QjL58BJtzuWqXvs6Wc3xwsJG2jmMKE1HUtfcGo",
  "key35": "2yps4zchkceicPLhx7AphEFGVpS13QwZrQh6Bt98WDF1BXziWBoxFkQbzWbd5pqaG9aQw84J4c8NPKjFBGS71aGo",
  "key36": "2z9zQWeMpXg2peQtMQXvZcjkCmSKC73usDhjSSkusvuRyo37LQMBFqmPMnMNtMCTgUNkHBAKjoWkvN4e1dV3cpuU",
  "key37": "4KGji3iTDE1bRaA8waYuwQJTJtDQQ8fRWUey9BCKRDGVdW3Hf4z6WmML3H1ssLsgc46WzznbhPd4Nhy5U9F3x77U",
  "key38": "37UgWju4ExauNCeKhUqvSTXzZ1yFsveismNaBLjJac4rZvQEXAhrEQN5f2qQDL57Cuesqp9wWoyEwHhXHvP8aF6V",
  "key39": "5E9uuSGonV1QN4rubLDt6HfDBLEtAz2N9MrC39Arvib8NqKC9CU5KvBkb6A42QsMvw8QiXKR9iZcaCF9CEYHJ6Ps",
  "key40": "3XBSwXDTaHfQop2HeXybjoctMKc1jcoTx9Ysasy7C4qCAqHaa4d8fnE6E5k3kuDnLppVUqeDjDZS9mNr9mPnduwJ",
  "key41": "589eH9f5KQNJVN8ydL4fxeiAZtecb44uFPTLGGeWdpCzEkqzizq6vk3iQXo3V7iF2gmLGj34B8Rh6oXqTNZe6r1b",
  "key42": "2FPMjHMLuNkMg4P2nRNxgXaM6r98rvnx1HZX4vC9AStyJ8ZKdrjaj7RUtHxpUQ2E5Z4Do7jbVxZh24atM7bEvo6H",
  "key43": "5f7Q8bfEYLsR4iWwV2RwxQagcNJLN7Xfc6bfR5HgaJfxmiCsKCc6RF2E9cUN4KPD8CRL2NX9VrEqaH4cQxaqqEBY",
  "key44": "5JwNjHoViNTmUvbQwcK2e7ucXQneZMGfKVw9XABwDpEKJrxepX8cjBT4N4Nb5hcsV9dL4MtgwfkAcMXJZyyvwhGo",
  "key45": "3ofA2nJwZLRhNVrqH9ffSK7c9f7JdEJoQrx4zjBJbiPVjo1e15Ls9eR2psTDe8cUbfzmzjLctox2KpwQuT6CqaP1"
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

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
    "4CqNE4qy4iGrbknyzoBXFVJrtmGGzDwfcZ72WUWM47uVEX9zn4bp3LHCsp69jsnvy57Mh4PsiZuP5LCPxeyytioo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zPx9mkMHfXa5ZXQ6PMmbUoAtQdyR95dyYGmHSiGREJk3AxGm3zXSxxTQPp9GAhYH3SBxrAjetYgkzeXkegM8eki",
  "key1": "BTK7rH7qTvupzuCuLaWZpEiagomnAQdEqrQRmZC8iLBCiDc1tZF1h3PvMoXuJzvTqbFwg8VUVNkqUVxoQJ4Hzqb",
  "key2": "5enRChi8PAcHv1TeobMAzrYHHRdVefFqBMzY7NFs5D4BBCfhU4VXF9ay7LDevcyAwuL6nDsbmWGR8yWo4e7HZ6V7",
  "key3": "4XzckzHgKZ2xq2zvWzPHRT3wjddZqsH1dzT8qW64K4xATH76j8HYbeDZ1pj9DP6NrawL3GdP3EShoQ9exjtQMskP",
  "key4": "zhVLQy9if2bDwxMERLs7z4dyqmWKonkQbPaS5ETHr6YauPKtkGJCCt45JULJDzXAJdPTKPZ9Jq3LY5tYXnHsND1",
  "key5": "5VgnXp3YYNPeiTZDMvnzp3pEQTx8VqNz5WRuWCkbYhkwmDYYb7Zp2UHEC2ig22TM7PxCQX26u22JNjee9f99ScwX",
  "key6": "63Tmbpm3KSj71LrjfxMjeSeoaXKE3uRJP9xhnK626rGjtT9KYDMByGYQHM8XkfyCgLXqrW658zgAppHpjEKsLbST",
  "key7": "5kGQsTSXpmWLQxpyhtTZkUG4nmP9KWzU2Ye9sN4zfgEByE3f9toLLZhVMPQhPxNSnTfo7YKmXdZkqeR16QaQKcd2",
  "key8": "Ycbodciy3Bcp7zt43DsHmB5PKdjVX27H65menhEz78BeRXTzRXUhmB3MEXzP1hJccRj3N2CpsR9P6C9gxjNKscA",
  "key9": "2Jght43LCFWNpv9WS2vHyZFjagvr1JzP8YQax4qw5fTPct2DWC85pxLkVPkvBVCnedG7iYWEYa4KJv97V26ec3Q6",
  "key10": "5Dewh2M4cPtRGcxEoPgGtqkLhet1CK4fUrRytxhmULqi6QQSFiDZyRyNbFAio53tmj6ycAAWqH8YgHgNEZTwmYQe",
  "key11": "5qrTPwtYuX9uKxs3FcJCytN3SfJ4rVG13JaNudBSL7372mwKPQFWuNHKmmK1RKgtx6SoU4tREsZc1FdcTMm6teku",
  "key12": "YFdgWWa1YYnp8mfHTpVghJUh6mmHhch37mZ1VehHf7Rfc8PTcz8bM5wqFAi2v3V7CNY2k484mtw3yPiKApjAMQD",
  "key13": "TFwdqGYtNzzsKzFfyGTAePn49QqvJPiCkZFs2brmiost6FpJmxZ5oZwTqLoVpmnGwLEZtA7twt55tWiaNmUN4GN",
  "key14": "5eD1N37USRSMe3cpLrQXimzeVRVcysE54JfyM4KH8feV3DmWH8PYrijKdiqAvA5NWNtKkqBgtPq7HaBidN6rZtv3",
  "key15": "5wjd9UdcEC2JZxS51Yof9vWveckdw9km5F64jh4vX6eZVkHyknHMjKhkYTjN2uWqewuhM2N3SGuAzC8RzZWMFcGE",
  "key16": "2ZHV48HQDWbX4Ejs8BjMRLZ3pNE4KTd6rw4XVEUcBMnpbhMcihiC5Za5bJoD6cWdJJwCW11N9SbKSaPDFuKKfczb",
  "key17": "3QofYf7SVie5Qb8MLdbWmL6ZWmiBfbxNTSuwgCADScHAVNFsSjb21G2qwvrAEYCGLjhYuyAp4pDqNkCZnv2KuJfm",
  "key18": "CFxSKTJ6fUi668LmmwwyJs7TmVFfutMjRCwNRKPNDS1ACywbP4jGCLmYh7TuiNyfDxLaxddXVioAEUbYpKqhpXK",
  "key19": "54boLk8Ljwsycb3H9cxRvbnHjRpuZMqhLQwFonNyNZdXthcfp6LF8rr85nq7ZV1CPswYmu5FfMFTEhbkkGnDQvDe",
  "key20": "5F7UPK9NDpvjsJFdeYCUyDUi5Lme7TAVch4G2Dkf4R18pbENmLCsQbmT437TK1kQygVVZi5iSoXcZf96NYBsEHfB",
  "key21": "3yPPqZmiksRAGkZU14rYCFnjutfgBGZ9r37v3qnWzV999HKnar6PbLBGUYuyt1fDbYZiATRRphzkxmWbxwuJCe9z",
  "key22": "4C8WTh6Qh6bs2LBHdt9vaQUTNhBAMyaSGGFZMoFkofRdEnRSWN4TwEac3rVFzTzob3MkNvsPjsozM3HYo3rADfAr",
  "key23": "ryymqwdEYHLmcKyxeZVWT5aoeD3XxvhnkEh3yDvNfh49tXDAu43vVdgScLCNsXL2xP1yG7UFiije6CmoVkovcmM",
  "key24": "uhXfiL5DbYFNPiLcu5wtrmNhphKphg6h7nZA5Yi85o4h2XXSq27zK8ZCb29Gx1yWNhDjkcQLVoEKHAFxNbsVhTo",
  "key25": "2X7BR9KEuDpBiv4MhuaStZa14VvfhxHRFxGyjD3EfMNnWcfQF4jyoaKPPPzkKKcpt78M18FgR8dHdDxjjHuSp9md",
  "key26": "2jhQsVwaYw8S8SbyKD378pn4yGhMtdABJ1QarJJCD6vwnXJizacUKoPa6yHSsBeChTFFExi6ggAkQj15qvra39cw",
  "key27": "3c1xfc37zm5UYo7RQY6c5m2WgbN6PxKknbjYim6ZFgUWuMStM9SEreXWDRrvyE79JGjPG7Mg4gwt6Ba3gxsaXjEd",
  "key28": "4o7wX7inHp3au62H7JxRgscbJCE1fttR9cn2Es9Z2rmuhvgGjQTUTfidtB5kQja3t6c6dhnFbc2jDByUeRu6Zatx",
  "key29": "4eD1mt4Pk6aBazPfSsqvZSLagqZTFKYS43hX9ei6EGzm18SU1e8mhTqQAKUT2oWkW3EmqjJmWfL9hqwNgJkH9Rcd",
  "key30": "67YxqWxPkkK3bntRxFyqHaZjP44kyPpK2dfpPAN2VWJRq3NXK88t6Bmg2EcUi1PymRmMQVPvNvdEMZCdcddLhW75"
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

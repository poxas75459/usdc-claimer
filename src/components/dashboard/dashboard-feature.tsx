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
    "3DQ8ffsyGxmahXTcoxrDkEBCBCAaRaM5eddH3znyFVvk2gLgepUsSmVBBqr5Nq4XaMitxtD991BrDnEVau5ZiCwG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p7gtzySYaeCpDB5vDocEUwHmhvo3zfKeQRMUT8xrJXypNhYt6rft7t7vuhYwX9MAFKMohPidiAZnxBESatRWXLZ",
  "key1": "673C44md9pL9rCCa9YaFognccYYuaKukd7L6QnqPrRtiLPbHmY6kKPgPGtK9SeA3n96FbDjpe5Cey2BdUZcJCCzN",
  "key2": "24ro3wBUDEC4SAjqGK9uJBKtgRMS3gkSE8G1fCJXNuAg3GySX7HVK8V2dNZyPjygz846Aw8RWno6QHhpNZy3yub1",
  "key3": "4LVbQFVZkuj4P9ASeC52iwjg6ZNBpgo1qN3JV4BE1vDgRmTyeZbN2ceGMq8Z4BNxs3SSiiFTdzZcc9gSL4rkQD8T",
  "key4": "445EDuZgd1Hhws4jiVk2ARGxivX2a4LQcf6gzpjFdvNTLQaAwfNyKEXmqbtjrpihY2q9ecLaJmG5zqB2rFuLjgVe",
  "key5": "3PXHWBbbtNoWsPTiTYmGqtoV1RECjrtuAEkV6iydiGzyMsc85kZQszZazUkZsNhSWjuAhBdVD8KvMcqf2wpaAjw",
  "key6": "4QNpgDQbK3Q4i5oWuz8wCYmNN75eCza6AuZeMbhX5hXCxhjFQv46kJbTH6jED3XnT6dL4kQmCZRENdUha86eEscx",
  "key7": "aWCrTAcorQMrVCytiUxxX5oimPQyh2XT4ykFrxKh6tag2VYiVqq4h2B1WhvVCBuMA8ZK1R1pAVbwcbF1ZRqBfg3",
  "key8": "414iNqtnUcXig4mRLKUiSdzhx6HanwTFXXQHVjZ5zMjCwAfWxxLW9sZbKsV5yi8dqqCRtsVBmco3ebx8WkNYPs52",
  "key9": "5KaPW1hdhQxGQMVmCRWXMqe5jZZofigsGNBBeBJFmtyLD5vqG4oBFn5nVeAU6P9rAw5PkMTa9H7TRvBKnaBJm7Kf",
  "key10": "5t59hmByMaVHWDfKRt4bHLNHj4pvKHn7sQdA1tFWikaehQSaYNKbNB6rAVRPN85tJzCzXYMTRXAASRHv8zCDMp8A",
  "key11": "4fK9yhovnkk1LHHGfDqeD5zZyY6eFQMX5by7uRDyNxa612DQnMAkQPpSGuXGYk1KzzXBGp46qfsSa3kxcaXhUSWA",
  "key12": "2Qtfg8fUH4hEw69PLMSjX1G7Vwq5R5KTvLkVQykTvU9sPVCpCGsJeiGj32WRW3m4Cq3nF5gJTYqkBmtBH82WUwEm",
  "key13": "5X96VTrj8aTCunUZVdk12xdpdEpYuZE9kao7j1VrKn2UjHdmkHUHNaW9p37fHLXcWaMeXiCmkjfy7Byr4RRHLtLU",
  "key14": "4wiPnnFcFupM45iB7ayBr4Y4NFFYm8UowskP2HchwyXTyU2tGy4DfKSvq4yAByUqfrhx3tG7daWoY2uWGpvTDm3y",
  "key15": "38y15FhFmwWWHmhC8yi9fASuUMAa21mJVQXhyNwycNhuZ9ZY6Zb3T17N8MYXhFQjtDSS8DA323kJhgaWzdvu2yKp",
  "key16": "2SAsrKuesiTwqBL2LtYrAFZW1WCqamRGrBQYaCzSCD4rdxt3Q4NfcRWbaoSFjP9Uj35uFXAQiRVCaMdrmP7j3gKu",
  "key17": "49zKXSfvUMvuRvxpNuSUDcwQ5h9YLr7CD4XRSZvjQNgKqVJZUy2A5PLC2yU8YcGm45rhgBo6xDrDaHE57wmHYijw",
  "key18": "5CbJEh4BEoVmFQfNeXuxVPzrYvpLtzx2JZTNvTbUhxogEKaKoGWuRfVCQiADvYRzGctK3BJJH98JCP1N1PtyT6MW",
  "key19": "4dRUM2Uf9NPCPPCV6tpfJ4tA1zm5rhcxdw5Tg2bofb5xBaNwAi1a3uGLCZfQS89cySMe8UQ6n7DutD8JGGjuT14R",
  "key20": "YrLkefj3DgZrzus8pM5g99N68F2u9VNNmVtq7EA2D2cKCGJf3rwVQ8xZZQFFPHDvMySUhxgDPWfg83sWn45AKum",
  "key21": "2Y2dJzh7KZ9qa3RQQxFDDWVGcVv4AthC9K9UMRikxEYugCcHpACdTCYvjo8ZxGRqbM8QhDSSAG5CHGJx4BvPSxjR",
  "key22": "2gW7q7bGeq45wCdNLuQfpLWRkTjqBYoPVJoxXZh58vEWshF9mwFH5yTC11SM8bth8BKPcFr74K1HHWQhj8MfoebV",
  "key23": "XXqkMVc5mPUr6MBJiujnge7SbkQuQ2VRe5q1Qf2xFyakyD7kunWmfR85vKjN1ZPWNWYQG3aXjEqeeY2mohmx4WS",
  "key24": "2ws5ZTLNG1AWGxpwsGFfxhGfxWL7m8ND9Spxjv7Y5zSZCzj3zqzVpzGzBwoTQiXX4EpU1oBpSiC8oEoXUsf8stvU",
  "key25": "5ZBB1qVMNDhjSkvFfGPMeFE7rJTCgCGwAgxhee7tAmQfqSkbnje7XdGp5KGGUBMjwDRjsZMkdojRECs2NVMo4zNg",
  "key26": "PHTzDDkZcF5ZgEnnkAQJG1qiygCRkCCzfDJXTnPhmfrKw6FgXDSc2wd2ovVKbGD9cuKTUSQXReEiGFioj1YvRaR",
  "key27": "2mzgHvWBhYpb7xvfEpUq5qUp4NAALwTsfNFdNpxU1V2jThLZSf4uWX3nhdXCSL1QeHRAakpXYLkpL4FiDSwTD8Cn",
  "key28": "3eFHsp2B8zcvnTF9Fkbc9pmRRyFCnmD32WPyk3rEbDoZMei1ukkwwG5gH3BpcByC7zetGCqtb1BoWbQ9FCZEo8pL"
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

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
    "2rfAo8xhJ4Kaevv6VFpfXoFETVzZwUxZByfJttQwgmXDQc28hTat44t5faxjTGG6HeJDP2bghDrv6hbavn6LF3vc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MgLAxRwzhBETfC2ygHAkz1pgtZt9c8qnU4L8keBaz7Urp33HarScjcfuuLwWL9cjY2zDC2Afe18MykvoCoi8yZS",
  "key1": "41MXiYnWAVyJSQdABmjmh9QdLosqzrC6k9rArMuXfWqEJzrEUdofV1xz7ucpyJx8KxiwL3LHePNTkyY73yv4QWWS",
  "key2": "56vyGoQPtSxhyVRrKzPVi4TmPUWjeAeVZFwBWpzGV5UjqTqYzjnxckWdQAFoPLdixyi5zpdTymPwt1uuuXPwgD8j",
  "key3": "c89sZcVuUmtuER1WgTJQYSWxK1KDMtw9VEgFd65rjyGayFgRFtQuXkxumEo3HPNcr8kZaKrgatbjkjYFXL4r5Pt",
  "key4": "4VGGtWE22823NWDJCoifV6xmgrdWeEj5R1s88Qgp3Qxnx1uCo7i7vnFBfTqDWhm1GpGZkWd51s9JMhcjmsQrY9wi",
  "key5": "3MYrW9LbmWNKeg7njsHWwZzKmhSLpCEtn7gs3FySVhUhDm98HDH5g5jLVz239QkK7Vi2gr1vYVoZQZMyFNpCi43i",
  "key6": "27HntmDeGi75uZcqD5z4gSAG4PLAHxTxi7BPp9ps8uMHPSuLAnmysLHDpEhadscYt8b8dV81KsEuPVYbi7V9U1kg",
  "key7": "3LwxH4taZkjYW3sPVRhdMS1ToaVnAeMB8ysE6wK5oJA12wHdtXqf2DLPGziovZvCsXtMz51S7JCqKmAFNPtT8Lqj",
  "key8": "eHJ4go3eSgVy42Psv3hPJCHdUPbJvJxxtVPqiHzuo6srLJvvm2DWMmttGbiKdx8wiQRX7q6ibuTJKAh19Hc1htb",
  "key9": "3FVx8A3Kw4Ls5zoTjNqxBFuqVmKLSpHPxHHXsaASAWQeYrLFCw2FyTwk5jxikpRWA6WUJ7CHj2Pt8SmdRsmiuJCY",
  "key10": "5y83LV8uHVfE8n43gCPBoYuuYsE56yCwrF5zZ4N4owUmHzgeuaFcqBAjd6FUuCQMAG3MXg8pHNSyii4wnZWTFnKc",
  "key11": "4rfwBY5HkJLbaAouG18bsA5MsGoLngu4fX5ptGk1T2HRfMnnxTt6YdX2qHaiUSujdWv4UdzpUBW6HYc79CxQZjUC",
  "key12": "58FyB6n969JgpBGJ3Y9fdcNTWav7vnh9hYhLdo28UjhJvBEJqLBGUdubKBpX2XSa2nUCL7xfHpEAyH3rBqDfzEri",
  "key13": "4BMGh3YXd5FaUHG7XitTvUyw6437uXZcC6kdXy7jnpxEkpv5xV9gpWwCrk1qN9urrdMiexXtFhnTf3H7dSCiWKcx",
  "key14": "3K1PoMc17qZSg1VnSfXwcrKBMLCcanpk9JteroDLUcXRzG6t4jPfQCQpfqxBrue6vTpouQfWDnJRN9ACtvpNVGkE",
  "key15": "2CucSxEUpoWrsF2JesCJ2GTzK27qpHCwpt7y5gLwsXDRMd5A4cS3WvZ6YmVdyRwmjkd7MGVJFMG5EceE8jXg5HMn",
  "key16": "9HhV2ipCLV6jqBqcQynYJZYJbyGeyxSfzhKy2SWtQuw3xwxLmQQY5BEaEL7YxduW3Fy4z6bAu1Z8vzEteWpwQ3u",
  "key17": "4o1xMHE4KsR6Uq8sgk7yCwwbjtga7roDwg7gFMkkYyFPTTNAF8gb8W8MTUv5cfYzH6W7eR9uBqzq5BdMf6m5mh2E",
  "key18": "4BCetmSrmAVn2HeKhi3ru93eNyaZCuvJabies2z9MtxLG7tkvUrGBytkgCJk3j9V8fqaEWaB7eK1xxJHRCqLi6VU",
  "key19": "2PGmFJH5zHiDpwcLJ6k7HLGL7o32XCBUTPL3F5zsbQN3mr1ZjAKExbaraad7qZQa8opmBsnZExLbExQs4vmp3Uei",
  "key20": "2c6Tn5CnrUAzYwG5msZHmwEErjbbX8Xy6CFnV5mcy2XSHDh7FkEEFBQCVdo2tieQEaPaaqRqxD5piUfaB7p712Cs",
  "key21": "6qAEGfXFqdHSmqR5iw28fzsZS1YaQRjM73z2gWpnQqAAswacJNaE3pGyiG1xCxTMgon26DCk1a9w9zF58cyHhts",
  "key22": "4asDSFMqZN2cXhxX1Jc7b2Chq65DH33E5f2xcqJt95ZQwi1WKU2qeDmtJBjYrN6tuCNxduNpJteDPiwJeuNi5qc2",
  "key23": "29ctQhP9uk1MAJgBAEErv98in2cJc3SoFtVbywStJDoNJEWLWGx655E7TJ1PRThQ2bEgmrpcqSBhD5zhqbxdQzib",
  "key24": "5An7ZpzWWHgeqH5nho25Df816uayj8MjAc5K2QUt67wwjzBcUG7vdvZQSFP4kvcumxsLiFcVD2asCqfshFKToR84",
  "key25": "3EPhBproaNEHYESsxAPY3Mm4NYEdpUGAi1B16qKN588WLyZvmVM1HeCBskNvo9jh9RWANvxaiqq4FLBotdQ7yoLs",
  "key26": "WLZ4cdg9JvmPdPH1uGoPrXA3Pzwpfd64vKLUgkM5NUSFTZwRnxWNgE4aRwjyKaA5hbCVM7Hxh11P8poYDciimsV",
  "key27": "ifUJS4exw1uSfukBrcx9L3pQ6DdvKaozp9uaxmQEfazX7dSuqS82hHiqHQwyBxmbvshjY1pFEfCmwdmg3WNmkwV",
  "key28": "eePah82m8xqf2tYpi3ADgzSGpGQDhAAhWYQDAf5AGA9bHc8UWDBME2iSE55hnDKbbeFSr14gpqRweJnX2fuSkzo",
  "key29": "2Pw8Uor4kUDqtqx6xsbf95a43j9nK67XBXWKcdc5G3vL8FtZd1fV4gtWRAb37UDH6myR3jQYSn4yTC4i6edDyQww",
  "key30": "2CcghtnxKuYCEmT8sK7jupKTdbzdXd5usjqmafVahN84fzpudiGarAQcdvphVccUCKLGEFHWu3rKeqhqL5mBTovn",
  "key31": "4rd2ZiXJBVznhJcMXrZRqzevwRGnBCXZf3z3VTPfHt1tYjSHpjgYt9Ua66BC6LwaHCs6pFyhJSc14mpgQj17YjvP",
  "key32": "aKYxp5fDET2dC3xQD2ZGsnYxs8uapN8AhQLivT5AukKr2RJsn7rVAiMsU9XRkzRzyEt39xiXKyrgmqn1JTqKcRH",
  "key33": "2jyF6SfQSMSiKtprKkWRWfSLcuG2B6Y3rVhmioGngKnYp8UqnfixXTMKPRF7xHyxSADkiwyReNvXCXzxGvKbMdAP",
  "key34": "48FnhhEmyypkDqVTpDcVTDnZKoEE7UC2xYJAMw5sHJYRroi1g8gWsvgZwgsDdJEGH9xeX31Qe4iHd6mdNQ6Caf68",
  "key35": "4sAwsDuZraaDVrmPR86Wq37rTj7EDTjDCbsCMRrvD472sUKfqSkJy2hMB9cL9tJsprcvW3MvPa9PJiEXjtFyeik",
  "key36": "3RMHwGAxP87J78arxJNkn5sjsqkvtSsVwnqkk3UH3BAKrVfQ93XfE7rLMtKeND1KQsudSV2ZimHoixjJWvRhjssY",
  "key37": "v6sU4z8kaZcoccvr2AnSZrt5BbcBGPARfDihwPd1ShtHapndeMv68GELK8JBqHRhDAhRYzeqWEE55yJL8EnvVFU",
  "key38": "5smWSFumU3xbijVgDLucJghAJuFGKqweeZhvAJMFmrsUYq3FgHUC3TKgE3jJQySpDhYte8VpSr2sbR7iUH8318fv",
  "key39": "4tAY55KfYX3zRDcefMgbQ9ZAHDBWwKW1ZNRJGRKctdJUCsXvcJT8remVVEokimUFNfWVXqfMMuVi5akz23XtNm4g",
  "key40": "4a2sMDveQkAhL4yNxwySKxJn7hdC6GHC8Mo1m84aBCvHvyAe8xHUgcH4YkGQwxx2hR9dBq2HFpu5XPLJGSPyLcEs",
  "key41": "7FNfXfE4mz6bTJswiYA4D1ePqdnmtyGE9AV9XCP8XGFQFLAt4utxahkuEnwaYQmvZg3FrukPL42gks3qewYiZja",
  "key42": "T9NoN3sGszLDWaNKpyRhWoMXqJa3oXcViJvPTHbLgVyNiabsUv5MbaixjBTud4FYGoQ812Gg2UUXhDvNEFLFPHf",
  "key43": "51Ni2hNRRxcyn89y1UVo2k8QyvhCmZeSf2e3CEah5SEJztDbZALU8MifafK5bwCTssKrmrepaqtDwPSP9Q9vNZ5C",
  "key44": "5VNXaxeyPNyH2XFqTiD8V8tL4sUBCucTgpsZjnwRe78Jvfe5j281rGFSiTYGrubpUcGAef9qyLkqFGK7rCGUEQ4j",
  "key45": "2ScRYmTZBJ734pKAA9VAtzEvoMPzDL7dY61ihLyyEm2cdDMeAp9wauHD8ecH2KkEJ2uTwS7NUvEAUqc37MUSDGuE",
  "key46": "63SJcgt4ZVpkj9LD9PFuxjkoxkBkGxc3bxkn4eofZa43sXcztmdb9EU14qBDiw9QJJ9GBf95LQKmZ38svTZaNLLY",
  "key47": "61suPEbmrut59xgTbbqc1QoN8S9RjxY57PWYrEPREwuw1cdk3oCmBxqy4zc6MZUaRr9qXsNYD22mgCyydUAyNbW7"
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

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
    "3t6Dv4cDtiCxNy6RgqVPxe1Y6WZpWV9GTkCUY9LwtzyQPnTs7EYDCYbmjE4jGTJR8U36gNTfD7HnZWXJ4wvrNzkM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SNwBsFvP8jBmnaXNBpvkqUyDCGwQ7V5WM5gDk7oqmaSxPdaVout1zhMSTdpxGdjYb6DMMhwwhCre95cY27q4XHt",
  "key1": "3a6LcNcFSxd9azyHim7X53FonVa3fndhjQdhmA2GyenSmia2DNAQ5wUbE3RbMQryxXyNgKi2ZbZPpP4u3jR3SxmF",
  "key2": "5RqtPYBkXfg6ADB2q11gGJjVzkFN74f4aMGbAzJfzSs7jmS1KWjJff3EHsqErdCRtfUchQhk24bika4FYNZ4rL7T",
  "key3": "hBtssZvy9eWE7TMoZfFacfNetgTVyt7cMnBA8na8uzrBju6NsjLwaJvYyx7qNrYa2GTkNy8ijni81LA1a4EZNM2",
  "key4": "5fMsCG8AeQ5hsS5mWnArsiMayXV34J8E5JGJqtZgewxcyULThJottmD75MdmDpof9ZCWzfp2VGGa71SzMp24yDzE",
  "key5": "4m5MfabzTktBX3BVfDnzPyXG6KoEpgQPXW58322n6XL5mubwQzLdE1LcyjiNiJdJ2fW1jPXvF5QwuqzYC5S5qa1v",
  "key6": "JfJo3wZJpcgrQ47x7yEDK65pfoXGxuTekqBc6fVAgDfaYiQZSGU1sA2dmMSGbicZCarrZ3sRdJDH8vwBe4KCPVR",
  "key7": "CxJWykR5GrYLXGKZYXfD86QeosCW8nYZ316BxB4JWjnqXTrebrQSZWk9JdNsYZ4cbdWqLDaLCw2qFym1iwcAP8E",
  "key8": "2wtMopN5w3xA4TFohp6Pvm8vp28QHgpc9pMJoYewUNnvunat6g3UxW3okZEmNe2mnWaNYm15PHV8pxjDpKeMw5Si",
  "key9": "22XtXcsaaFcTibPbuj8hVoGemKrjiivjTM1SG9wQiDQuewH8vSU35qygHwXoetQ1Z9szJH7CKPN5531vSBjNoBmR",
  "key10": "25bu7AEAprZFtky7uhfmXWu3NQxt1mof8z5ujfRcxvTyJpd4mCvJfVnty1JTYt8vZ5KnVt8QHzhw5VQRxHSa1pUJ",
  "key11": "5csBG8rrTYZPnfkqJwvLeQj6r43opaYsyrpJNTYCWqUkdcSTTgd6xze8DEME4ow4uMsD18LAnZoPtDDaami17wW4",
  "key12": "5hLL2pW7HgpAkgfnA9cxWps3TGauPzwXmvPRW2kZQEB3DqZvzPfXaipPk3iLBQ9vPQ3nwyA7mbNm5XrbqqifDmbY",
  "key13": "F86NKuDRzHXEht87YRCbr4YraHEUDXTvEVdds1pYPjpKmrxGBUaUp45F5sWpEEBxQp8owYw62xVdq78zNuFCskF",
  "key14": "v6XUNhVj6cVpSAanLeMbMSXoNjWA6tHqZYqWWJcUvmGYmiNRQe3rwpcuWDkdHRpVQqS3bzsmfZpbFNe4epqWuiV",
  "key15": "4B7KxCFL6vSz1XamrUzSrvTNb6K82YHgyXG5cKd799u1UqHX9P4trKELNuLkF7fcyqsz6fVfBBCYwuC75qUXL4zW",
  "key16": "BGdFaeBq2FK11zDfd7ZQiXDhr2hUpkPLLp7X3AeJhsUHiaisUphkdqFbgtKgYR3MzWs4LgBg3gMT7RsyVb3bhQc",
  "key17": "5emXBVxxamrqjWfRRunogS1t17hSwR4BYdTuSiyYbyULqnsUtV97fy5mGNuSvZb6qW6jFhzXTr3JzNFr9YAj2Ce1",
  "key18": "5CFMgbUyhX1n3Q1YaoNYisSUAVZ6Goc9gAGBMnemctswfVQkx21RLAL6geABw8Rbs6fbaXAFj9Eiv2anzgLEkB77",
  "key19": "3gdFayyFCNpcxMZ11LWiv44brwSov7sdsJcAKWQDxijkDoiS6CLDvZVZVoubsRWWVHLXFNtuVzmsv7Ceo1djQdA4",
  "key20": "67QToKWwrEdDPEkiCKo8PKhDquaGb2dgtKEcLo4o6uCe8m9YTPQGfVXMD2NdKD7fVoim1TJ1b2YYFTnCvh9SGVNx",
  "key21": "5DojWjgD3hHE21sMwHo4BBcEBHJYY7H3Ku2crDapbuWebk6c4DSu5WK75DNES3wsxqTtY4m5ZggRCKmPYx17ZSDw",
  "key22": "4eqsajbZsjAVYYiRLJarZxd7zwY1VKF1a7Jzd6ywbLGaosp2jSPDo7crWaFVGtenT6PTQfPM2qsK6fh4hiLVqQFu",
  "key23": "4zohodaiwyHyPq2fLRRy785btTGfTggdaQSrV8Mw7nrdhH7qYnE3rYdTm6XMNXDRX6FpDmPEDTmxNq9tsN1iona",
  "key24": "ZQjTtEh9La4a6YaP2pQvCi4YYoyiXw71cpJVVyxyz8ea95u3xXdigpv1mjwdmP1qvudKK3dJLWTVCtQYvudhtUk",
  "key25": "4HmALQVK5DH4t7dj7myojnhmymfQVZpaRZ92eqW1Z8FCRCoUvLqEKHaM1FfN4YiABefjx9LNMzEkiTKPBXCcR2kv",
  "key26": "ysBaq8gUA5o5H47YcCdSGug9sCT4QjnAmFhsQPFA3RePA1WhcdAmQMeqTSUMZCoajYy7pqZNNWSZfWEHwD2WA8V",
  "key27": "5MKgjMZWd4bHPq33cH7rpj4QWRfbxTppfWJV5UgcLpFTsvfvVkPaNwKWTKb2Xk4F7PwXLoWR1P7Bx9wj4wXtHsY1",
  "key28": "3F4HyyDmnc4M9ReKhhuBFK8am5k25PU8fY1ejir5zdW5HvnAo5EhJjoJ8VY4GxgN3oFDzrvEz498nuYibUfyiqAq",
  "key29": "36RjjrjkqhehNbiWsDXMFXRMjw4F1eutPpqLSTWs8a8TLJSGtw2aPcKUjAkhAkDrvZ8SXM3wtZ88qA4d16MRrqF",
  "key30": "oN7TWDrG1dsiSZyMbQKFcUMBzRiMdbLFBzQAKvrjjju8WCDJmZS58YmzEDpNK76ZsofxfBNxyGVjbtYzRtEbty7",
  "key31": "2jaUgV3fW9PeGNj5R7NkWZiLNEWndQdYNwT8Qg2nD5bAGTYfFztQUf6GgeRATFwTbEo3txMZN4Mq8GDaG7B4wDd9",
  "key32": "2gv87Xq8qUtgjztTHjjFpWm3QZoYVNf9A85emeR71r4ojas77rvpb5njuP3V9JtLmNcmjEmg2U2L5WeSFFDXYKSw",
  "key33": "2bjz1LUZtJHVUm2D1jTwTe62pvxevK3CZwbrS6dPgTpQ8XdqSqP9kxZzcEfPBXUouN9eVWS3mYVYEGD85jGUGJrN",
  "key34": "5u9hhncZxgaM3ZcdyZB2W8wm43coPRptGHaKiXSxJipPhapejWXYBn1dUMfCXPZecaqkHEAQCdT7d9qfRRwcmd36",
  "key35": "57cpdk7Do55cM4V6PxkDpKD9kWvS2xSL3dnJKFz9LkazhMLiqk54Bv78Tm2Sf4ihiEzf9pCJzfSJKWSc345bW9Kv",
  "key36": "4Hxu9j4u3QGttv2jM8bqSHwEMXUnw2z2Ja7LdtiZZgwp8DEujDSHLHF4k6jgsfhfo1W6vv3YAsG6SsZBTZabcrYD",
  "key37": "2oBnZdVBJdoUS3Yd5EGoatx1nGEGMBwmvet1P6y6EP7kHhVcuU6nYaciAhrdjcHrnkBBVb2punwLeBbMjwdKrnL1",
  "key38": "4mgmbKubDpnpvNr2v6iQy33JdxbDa3eXHzuUKrVoK8sUawDqVknq9fwtJNttudS3GhioR3HhwcKJbViAgK1NtdJv",
  "key39": "5VmAY5H6Vkg6e6nmbsMHG7UAtFXyY8x44c53mhtZrwoWP68wNsESkZLjjMNeFR35YQz7FW5hzBS4LmTUywKjtRzq",
  "key40": "4gHWQTLwxfw69WVe759SShZgnzjsSke6hhJUexKSYFZ81KoWHqgzP7h7mV8vnYpoLSF5aznVaAbdYxNdRegp7Hub",
  "key41": "NFbuJEmrmBn1vtV8BhRZ5j6pahXPKmBQWtjfAwHvMpDHmJBL3pcQZRaniX4acS6s53e8xwnaShxmheuSN3khDjb",
  "key42": "5NEDx4ocC6hY3rZ3axUKFwj8KT9179ELzhZ5hV2uyH7GCd4CfwXh4esHN3cjtvwDgiH4Cs4e9Tfbun6fkDK1Hqqe"
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

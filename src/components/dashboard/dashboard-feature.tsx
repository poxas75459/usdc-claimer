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
    "2oEpG13AxUyDxfozy1dKamJdeWFRtvbV2cgiZ7Cwjap9Jw7oUMf16vNE5TvB4PmNVU1Ff7uP3YaGPcHNzjFe2LgU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ugwzsvED9wawYfJsKwsjnKhXqg7CmgYHvLecQAFcthVVAc3UsNQbhtuBZSExeqhw6ZXGyDBN7yoHgpQsdAuKWHR",
  "key1": "4YaMRjrZib2kZ1ceY9oKZSjiKMaQT6evt4YsAG6cEjvFF157CL4SeXdxLP7n2TTbfGVeVXGVfUVTH3t9ZWPRhVrL",
  "key2": "4xCZr1SiaaNzP3ELvycRZhgwnRP6A3phhxT4g7kxTxJ3Wr8fdbGz5CQ2o9x8m39EBxcwKv1W3fbxUG5hV52j93it",
  "key3": "2Gw6js7guV18bfxNyC39nvV9gRtMDnjwrxpjDm42LQAhMjbfppa99XVKmXVRvbPbpxrfNJj4tJ38LmSty63a8kHK",
  "key4": "2PkshsdxtsafdurBWC1j8h5FzwiFRy169HjXByFJ9xXLR2RjShqEGb4PKMvhPX9PnV67N56UnDNbdwpH5ezBQHsf",
  "key5": "5RHKpC5V7FtHxpwieZFG3P7aeJvS8Peiu8vF5CHqH6gFns2RG3cxei7NoktzPSPpusT1ctZCSTLRcWMLrUnGAnVj",
  "key6": "3bodgdnMnMG2Gajm8qTnRfajk2NwMzVeKo6ifWYCNVgsnvhyKgVYtPuiSU3P12ZHX7NS21mTqogFnzaCXWn8y9Ps",
  "key7": "3AWWurZPZga8LHVmD7ywC1xex1Ew7vky67UZnHwPHukNjMjmoTSa3DtBWBPs45FiNxWY3HbEAmtn5fpmDpkRiGLK",
  "key8": "4srhRVWrL66Aywj7Mo3541h4njVKmEcbnbegwicdeRz2s9ftSSdaq5EAbQijedMasn79STTVL24ETNH4i3hvpsDq",
  "key9": "5eaoKddjSX7jVCekPc3NhpMcfWzcAL1jfacGNP8q9TUbNC6MVwwf32ppu3LBxcVzHpr7YDGHKGoTWmjfdBpWmvn9",
  "key10": "4WhJZmJtjaFkpES7V2UfXM89tZM6wpB4KZBaabzPdro3GZa1CCrjPF5JapbDNEENaDRJp2y7QKHCjqAMsUbsmjDo",
  "key11": "ZeCinm6qnkAPxDoiW3E5aHNg1ZHV26JCtxGJaVEQUN3ebrWZEU1vgT6TRCzKHgFWz7QYpxBoVK3b7HnzztW1eXD",
  "key12": "3fbvacet9oW2rdWzaXarFiDRegJgCC5Kx33XTGmN2eaSGZu3jtwgEE7eqDzMEXcK15x7wZMEBEmhuBDRfUrW8bSZ",
  "key13": "2r2VuFT7EfyW5A6x9xTR1bY8ehmvoeAycvVVWwtwH1X5tV9qNPoffXUmA7dTmgxbwyFpUWFvFBhLhq4FTQLJzFt3",
  "key14": "2LQMeE2GFLfoGKjpcDBMxjAuzJg8QWKvEjPXGv9WLhTGLMDPMGTQkDS8R78dLxFBvySX6MuYVeL94LdorfHyPp9i",
  "key15": "3XQaLETFjrtf2wDxkJT3Nv1p2Fw2GJ8d9RCvfjPowSh7eZ19cFQ4pZkSYMZP2hDhVCGM53BEmcpapCzGrt3DvQFY",
  "key16": "2Lt2bkwJqNtXyWLEWU7LoJEwk5YaNuTLzCAZvDRQCGGAhyGUixnBMvER77odoksSz9Rfw6h2S7c9h51nPWLDRZuJ",
  "key17": "2s9VVuhXbsoMoDWrz1cLSUqwAYdbtus2Wg5WxnE4YMjBZLFaJ67G8RYHqqgZRnzHZ4qBiVtySzZUaVxAmYLZJmJM",
  "key18": "4A8WLYwCV5mYVXVgCTD5guy9f2Up6czFUwMs2GLTHejm2wWAwuB4uJzNuZhqTWYZ9ERH15kR8DXsJgSwfNvn6ARo",
  "key19": "4QPDx4VJCSnwmMwu7qotcEskwGnPCRc3XNfvdUH7iQaRJDWMf5jEA7zbiTMF7RbH9wkctsd3UvPnj2z2PBgHci6L",
  "key20": "2zKbbQESL6eF4HyxYWFNtNPxkesB7yaq2Q13a3wWhBDSRaqrmqo3Xp1dqhQPCXNuhGFGHAgAxWVmBQNNnEKxosgr",
  "key21": "4KLLjWBu9c7xeFbZcrFxtuQqvHQNmqKkVRoQXyzfHmqzeyozkwxodVLmowEmXJvKQvqNiV5WohVtzLr2ampAd92h",
  "key22": "z8nGa3Q63KLKmjZXhtLiAH7fqKkXuD52EnR6NbKG2PhnNpeRx6CHqaySmwWnsTwPKzNPkdNE3zdmdkGBychLdjN",
  "key23": "2fynbtvXCWAiVq6SQUqQN79VKrZKhqQ514kBokMP2XtLQisSsY2iGfnKshLxjBsuC9kgToJcJHKJeNW5bEaeHYU2",
  "key24": "tTi9pts3wAMN3w479VqEkwGbL4enw9sh1uAAoJrp2YJPDMeE9kBwRnVfkpGA97zJcN7Tn8Evp3Bbq4YuLpzBgLg",
  "key25": "5jpqPMyGYLVXG76zbr7pHUnZTXHZ2Pufgg4A4r375kQdnwF1t754f6ziTrtqhFDpESZcQf1aYAdL1317cmLPF2fD",
  "key26": "2mqSoUKqSmPBsyRDUGXv5ww9sBm1CBYiY57JvVz1f2A8pjSSp82TzGZUfZXKs3V7oa8Vo4LuNUNC5SDHp3dAvw3j",
  "key27": "4P5jh71Hxt7afUNLob7i8gVaEh9CCGkc5S2hJSarwNWiPKcynbFSVBadjjVn6euuMHdnGUhM26afsESua56ttjaG",
  "key28": "4z6V1dgdNpZkbtbKJehrDX9KbT7AdEbDKtCA5nX3TfSUB8fHY7tSftCPxxoTfcUMSRqZFWnFeRgBhz9StDMJvEpi",
  "key29": "4MsrSG2uN5sy8hc3p9Z5ZzYsP6ej2YoRCy37GFMjZsjjQz2WDoLYemS9ehoLRLeiVfHvxyyXbZtXsdMR5DpEbeuL",
  "key30": "MHsjzdnQ8geKzcwivzzwKSJ7oJPcbY3w5mmUWzauhzfqPg4Ygd91FTm6sSgcicQQYBXsWdLcPbAyfdYjyrYrgTH",
  "key31": "3jaki3jcgHT8ski27nyMRAK66vnwxy5N8HrGm7ytX3npgMzjvwbqMqWyztQSo7xscddCVNFxndPqowwN55qfVJEC",
  "key32": "3Xfw7MdmAi7Ur1PgRNeF2LBstz5J77sDGSn4Js5pM1e88rzgFk5iHQ45xP6mFZbfQXyrmCVf3eb6L3vGd54J221W",
  "key33": "2orVBv5ijgUCpqoKRt9cjEKXKjrZUtnQckRMjQNrGHXktbtud2AhbdZ18QuFjsSojQEfNThdwuT4PiWopwN2WEGN",
  "key34": "2BG8f2BK8NvPVmMVyMVbXkC4uonEvAX957r1dn1APf86knPMGBvy6deDKmfnJFrsCESaQ3ktaTErsDfTLHTToQSZ",
  "key35": "2aiLpyHd4RJ6dSfG7DciqoJqmLvfTbDaohjED5HVoWTmJP5qEUabb31gZyWEaK1r4BkYxC6jpfSTvPmqHmxYgnS6",
  "key36": "3hkSgZsfS2kYtHGGFmaS5kRaMXYeG5AJrUmC6BiTamvPk7sZpkT7GQRjggikPLBSaaKfczhrcXfUAepvSekQFNTF",
  "key37": "5euwFrV6j6eojnxj9fXGp8p4i2iRBPAgikwwSfBfo96yMKPzb8B5ZycyhVFCKQpZP7e1dyjwDCdWWbvSXUymNDzY",
  "key38": "kCBst1fNvaojXNT3j56mAHeS8SnBVvMwoN7Dd7TNf37zYk9xEotWKaKEq2dzL5YKKSDSitHaBxskoAc2VEK4q23",
  "key39": "37ZinDKZJ533Pvt3kxKgbcjrhqujN2HWuV46njFqZFgNHEoqAjVsRBFoZLkwFANzM4NXtaauZkghtSzgbhp5at65",
  "key40": "3fZH4W63XVVevYXJoYabGKgdjSDwEssxB51bkSuYHB1nQVkDVnUdqppe2dyD5kfZ2GhMoiun5Cwj3GykT5BH4U6D",
  "key41": "5BNSBdE9wYQY4A5B6bATGUbfcE3m1bx26AudotDnAmZbf2uj2o7ST59SFfyiC9ktJ5gQXwMedVyfePYj3YE4h2WK"
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

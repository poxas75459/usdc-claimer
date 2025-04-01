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
    "54ANKpxT1xdPjbTkgEo2CQeCg8sxWUJd9Pex2SyWPWi3ksKFiinWZRdmNwXjFCH8EzPbAm4b2r2zHDtuj8bavorx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57eqcqubdbjtj6ZXGQq2T5P8iJiCsNkgHBx4NnCAK7Twq1QpwaDdKCbZ26yoRH9gRrfrMZq5Z7mX1MNg38oqsRKB",
  "key1": "z8GximbfprGWAhEVPk1cqNvyk8cuzTMASWSLPjr5WmifbcAeAyv69fe2FjZUJRPa1Wef5KZoWE2UiwxzUd5Ufgi",
  "key2": "2tBELmXLYPgAWg2BttDZKcBfEiPj5hy2M7bpkZsRDLmC9YX3TU8zH1A5TtrsXyp8caGx3EetL5jFvy3HPV2EPRRP",
  "key3": "2SWJh2eMzZhXLHTcaf6XSK5xxrhfEM7h68X2dzoTJNiuaTKJNMHUxLxorg8a6yZtv8GqLvTZYhp6kcmCechP4jbN",
  "key4": "2SexGDH3zumVnRVHcYhRRPhnyCWD1vvVT23EA8jNvE98cVEXP8aUA1uBAWqCHPvg1FWizPB1DttHGmwdUA4wDPqa",
  "key5": "Spgnfezx6XMSDzcKwDoJ9Vfj9JpFKWwE1Y6LhZ1bzH8wk4M63TVoeG9CmxJapF4H7RdzjA3MKCqgyKVD8GKZTka",
  "key6": "5kiNTJ7MdnrmP9TT6RDmXkYhDYEd4Y3BFxtWmPuZcQvx5DWDtEk92ntzy5tYi5ACCornunb36faC17E211PEUrs2",
  "key7": "3J4PXQGXCpqT49Awct1NdarZCTnjXe4JHYeifqAacp99gcty7HmJULvprSn8zhyqvvX4Fr3RAkFxJjS146nsiYHA",
  "key8": "5CZE53MEtvVAJ7B1j4pLxJtRpXvVy9zEUAFWCuvh9HpnHcjDXESxS5YUReCFCuyQxXYKWya8hVBCXdDnpHCT7Yqv",
  "key9": "2vg63Z3bQ5w1R1kb444NbUFNp5xktwMkuHXy75JBCoQnbF9AyMfjed9B6qFcYwqQCuFRe8aQL7pkWX8zkc64R85m",
  "key10": "2UmjBi5Ch7YQRvsBEtpYBMyXG1n7WPFmEz5y9UrRYBKbLG2HoEFPGAtSEcWjzDw1ETVqhm2Y6SGZgJ2ZG7XCgaxc",
  "key11": "2aQkNk3iFuvNqnVmnrdUjtxwDESBzPm51w7GFVG7bx3eZb22EMN3faFgGQTPiLeFrZ3ComeUsqnPvqYvJXBK3oAT",
  "key12": "5pWBi8K3wRY7zY2REt9yvTbaaTE2882Z24Rf23SHxweehasg9mVmdWEcGy5eb5gKLHNaZ8ESW7Ar6ebzh8C9cpQJ",
  "key13": "5NXcKA36VrEVuyTKdpH9GuowmsEopPG2g6SPtu9C7UU2dWwbuEW8casRWqKVUxMjwbRTpo8yq2PwEjEZBvCvECGq",
  "key14": "2qpsk3nkgBTJvNEiiBw2KvW6WeofU62n4qbvCAia7ghXrGUPhTRMdtkue21ftXxgt2wxoShFKJV2sRudXvbNCZ8k",
  "key15": "2PiSfnJTvnLh6F5Brm6ND7k2t1D3SGQNPkQvSsLWRLtqHG6bRtfbf5C4tMcZPBVDCbnzQ5SaPZJDwwEkeZ3XXdbY",
  "key16": "2S1MrAeJnDAvSwE4B8rVp6U8xQd1W556masNnBWoVK3M6C1td5s2fuFwsCtySgb657oQcyz22RVpnZ6yeNAnW6K7",
  "key17": "4vGHerwWoA17dFKKRWdSixNUqDEDzT4wFsLBAPSz6DgJ9NYfD3XbSn8stc1yFR6Lw3C8cUcuFVnKfspctpLJdzVJ",
  "key18": "5S9WitbVheWb5kepAbaUxAMPZqDXqYDStKYBdXcsxoMsgVaDLwfd2DzScMsYRmYFzWLnmHKxqT4tqQVqniZR38kX",
  "key19": "4X13Z8ckFnQRixxmVgc14c3AeSumkojiSUNguF9dSkqVN21L8wLh9sgsJH6GaKBXc8R4yNxKLh2Utf7QNDitsKsz",
  "key20": "2ScxyV6EJPm1TnjrBmz4thjZbbf6r1fH1pETxYRU4rUnnu83gfz91NQEf8YrPB4NLPq82LEsXpvcHN2Majg7SkW5",
  "key21": "3PNXZYvXMyhmEea2BEr8NdW2LdLPbWxPp6c6A985UQgZWjmToqesvBuQfFfdsTphkSdnKSGAabVdERtAhYuoAiRB",
  "key22": "4eobNEwZgFKCiQZa5jvCz8ocrUpZ9oWrdYHG26VSxzsgfL89EwzMd5VLMZCr8MjXeQj51zhqt4rGirCHJbJh3at6",
  "key23": "2mkEaVocXJP2BTfyDERrKiTEcbGHGLS6Q2wedmPNtjSSBwzPzXA7P5mVLdvwBKZaYoAumgUx87PPSypHXRuBCdVg",
  "key24": "cA1dALpufybeQQcGcmPY9G7rfEut98Z4RPLDoZfgKfUTCYfHY1xJKirrJRrVsseBSWAjYgwtV6gp29v7eGNLitx",
  "key25": "3KkTh3SySFus7CQgTtXojfKGue2VRwMNucPwnmEJ6yMmiVmputNU37gaHeYgVW1RFDfSihY9xyUAsy6oeJ2RBFRu",
  "key26": "5Sbg4KWaifi1rTKgtZj4dB8oW97E6TBb22FBtzcMEWFY2F1gXPpRwV2SNf1UVMqj9H2fBhMDLHSrBngdAhpzmxxt",
  "key27": "3YRrNWPRPm3YJebCmLd2g5gkWd3RCMwYS65pmaTyeUf68CSWo8QUVSnye4DtbzYvH5qos4yHqyh4LW8Ez61UPBzg",
  "key28": "ABiHGySGVJ3QGvxayMwxbEPAbeAXaKCEnbPo8GQDs9cZMLNyMVyHPxjwg8Hi1NK9TTpXN7QaiBSsfCN6MGt9ApQ",
  "key29": "5MYShy3Cei9NnWTfpg5Q3dF22pjHh6x8wkTR9knBKwx7UuMcR4FjjoUZiPqyeHVZ9R81v64N7Wf2Q2ELm1r5axVY",
  "key30": "4Wrv52EhYHgtBg7pxQx2deWhq8w27VAWsKGm78DaDrEA861B8VpvBfVFcEaf3QhKtFkddweyNhA8ZT6SsdQtKagz",
  "key31": "3g9fabhaWA7PeVFh9rfzkAFnPtH7WwXDJ4NadAAgvGdtUyo8pfCMzxFeEYKPmvuZjgWPGHFNWdewFNTVfx757g8n",
  "key32": "4XWJBUZzLXHVfSaLzwHEmiLgvz6fykGgqnusayDHUtEwdiVuv5sAvikULvT54PX9J1bAywEmyKtbBR6FBW77MjpQ",
  "key33": "4bfQCYkeMfVFnknpZjyDuk9PgkkctttQJDo5LvLLNkEafmGVAqg2J1xQwcHK2ogJmHFfhAB76kCT8gcLrUF5D6wC",
  "key34": "QjCkcARAurYgeZWRUJCmB8Nvav2aYbaiErpqv3mNhSuN9jN45AS8dXYmT1q7AVh3dbTMhaSTJkCrLfSQhBwzfSC",
  "key35": "2CL5tF72q2S5Gv1TpaaZsMPWHCV7jeAn4DcVfJEFi1CEFXbabtTFyQqkTAjiKZiwDpxZ1BAUW7t2FxuFUc5J8A5P",
  "key36": "5czW6iLX6LVRsRRWhY18yU3wAVoosdcZz6pUaiGi2kM3aGY2AjdB4iFCY2Pu6SPsqZ2BVuuvL9MUhwThecHBNZwf",
  "key37": "3HXkJE1vwhpJEwf12x5VKkLGQ1ysfZoGz2TMukVEBjEQjM9dqhkkYsPisUF9ZMPFciCsvKGu3Q5mFF6n7UrriJik",
  "key38": "5thGXMRierpUPNYT9Hxg5n7cFa4zP9oczxyg9YDGMYB9jXAXJBdb7Y4Eeo8UiX7rDJTwk49cqViQmcEWESn292Gd",
  "key39": "7ajWSpLRaAH9JRtPEo5fzaXgbW7M48VVDev7GPhF4khpMHuj8XLQMehF6Eue6Ssa6nMEJc37AcYtZh2vQhs7PAR"
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

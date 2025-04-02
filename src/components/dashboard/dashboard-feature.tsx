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
    "2vyEziWNauBJECrgLRtwwz89fRVLvqYHRmv32oLiyphk237JgFXZVmFkHdumEUGpbvzuzTN1jJFUkqu9vU94KYmY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yGPUi2rLD7MkjcDHK3b3XfiVqvcdTi2SskNuCYWDwcodT8bVifPs8fdKZuUVuL6fYs8d761WW1dQHXtZQxCEYiD",
  "key1": "5txdEu4dy9YA3NvTMv4hXyNku8Z8Cr763kmexREzsXtcjaHEQaMVjANj94Yy5KEA5AskiXEdFPuy7N7tgfzjzfAW",
  "key2": "fJ81SFzWL8Q3UpDCKWR1bkhCL1RQum2g2z85odUyZttWXmeq2rRXBMt6TKpCn9UvWWfjhiz9Zc1x2AUwERrEdD7",
  "key3": "5RvYZnL88jQzD1bDN89SmVxGTMq4yj8d2UsVpLKt8icDhaci15LrACAk6DHFFMCuprTXeXyY8WLZLh6B12J2fh4m",
  "key4": "3C8QrsAHai51RUKNcfKuZ9nAf9tvCQ9XGY3Du1sGGhDwa4JADBk49QEfXKbiDxGkdrsr4JBFNL4W3ST84sfVoLkW",
  "key5": "2kfsqH5NRDQeH18DNP9s2Xu57aqWvWFueGHy2ppxdGVEHGPaCbSdqpwHv4ncbLb6BRqSkRbo4FvpjFxY58fAJfxh",
  "key6": "3hKSi8sTycHnxQCz7ZmYvgimqR49Xgty1kdSfk7c5wui6o9SWzXPmQvnFbsEykk3J6LLyGXyXVkGqWCTrHaeqUhA",
  "key7": "63nfw6rw9MaxqxJKGzXGpkquFQgAipZuqdWsFyamn7HwyETWZeYR7o4mVzjHc8LdG2sHyJscc9vtAEA48tCjjSvc",
  "key8": "4uGotXZnnaNdpTSov2WiTWEYatLCL3g8DPDWpnXD6cxhtjHimGMsKMc99robdbbzdeCiV9HgC5qY9b8W9ToDBhfQ",
  "key9": "44NWAtzgX9Ed5mYQ9kJetr7YqNkjbkP8iNCED9DrUxFsAbhifPjBs75acTekDoNvies4UuuSLXU2yGwtDBjm5Vjj",
  "key10": "3Z5uDgL8HYybd2fhauarYbuYS2toAKh5qxZJhKzsGYaAauZo5RMFL3aKkNAcSXjUEzGZTVqPbiTaxRxwZ4rPh16r",
  "key11": "uGm2paDnsvqjxH6cTahyHrohJn528A2ft4jTBf3k651kMu9ZeX6Sn26WLZAMGbBxd1hJFA7kmQytfmLYXjD5eyL",
  "key12": "j6zZoceJzVnomacr4NV1a9eBXYdBVMJ3qzNauqWYrT9sW2GWwvm3hFqRkXnKsqSYSUQtEn3z3VYyZGM6WVKCFrn",
  "key13": "3WWqTATifrDMisMNJ4po3YUJ5AmJDJfZw1b16mGbAfRUrSL67MmYYHzb9VNCrzL92ZAyRfuim732zmHgdVPKYYTP",
  "key14": "4rF8sn9s1XEZk13etcLH5m8zae6QbfbjFi5w16gN8ULtPajqt1q9naYvTRbX1ZCfqf1kRpSc8uQMiajAv6wGi8f8",
  "key15": "3nnf9CjuuobnheZeKWv3gYve9qptsE5WAGVdCDNLbWBs9pLVRyLnG1vK9mdeLtKEMZCCD1By1KDgGh4Y68LjJMMj",
  "key16": "2yR7ycabq9bFtehndxQsqzT5KUqtZRtqpK5Y34j4snhmqXmKGZixcbVo8TYTFeM578w1NTytpX4ep3KDw8srC1jv",
  "key17": "xn9iWwNyMAQNLmjh4nwntpGFiHt9RWBNDrQejA1Zc8vXAoeZQeRj45p5f8yMC3S39wP2z85JRd9NMe2LykAzHgB",
  "key18": "4UFvH5sazLjBfy9SdjwEzDBA5E1jTXakvzi4XsQMWwE7VNxgHgrgHKNAwFo44dLZ5fWr3so69tU74fxt9xiNmrcZ",
  "key19": "4HVamwBoExEHnRzBZpnEMyeU79UvsPexAHEeqGLWerGxoGZrmaUfcpdWNdJXLbxkcMwywesYudbdtmMSU2yNFCKw",
  "key20": "kMRwDHi59YCCfoGKyCiqsFJXMmvCHbn1vhiWq32sVCiLdniYK4eKZZeM3es35T46mEini8PXzmaax9pfEA6fttv",
  "key21": "WZu9eToemw5UWzZB215Ff4uKz4PHTevN4A9xwaC2WJzmXYk1JXycQ8t31H6WHK3a6noRJZLWRH6KMZXdXhUZv2U",
  "key22": "rSVpYEEpZQyDh7XD7E7yRsis1RNijmVy4xGKgs9QEd1sWiCDBD2CDhi9xzXiVab6vvBfgFmc8XjFcCDM8D2JZUG",
  "key23": "jGX4quTpVU2qpCgrvpghcgaW51UgapmW2MbzCoXavScv1px8MiZE9hwNQhobANFkw9komrXLMqMhBembMoACqvk",
  "key24": "2kFKARFohxK2yKFqs44jEUNEGxAVXyW4Uj4jx4HX379Xc1vmg1N4RGvcHRrn2y9QDz6btfEQsiVXbosqQfqSgCzH",
  "key25": "36y5DmsV4tSJ3GKhmTp19BgnqBWo91omP75veVebTMgXHBotyME5CwfTXsSLGyu6NpyKkQxUWxRQEcYL4ZpjoW2L",
  "key26": "3hrkQpyPpQnGHCuzqBnbAdVAA2kfQGiqTY64nX2D2uLiUq76dwNV2dVzLzshrbMexaGGBdfRY2SdmmZfwb1aK39u",
  "key27": "3ywdz1PnK7QyRCZ3mMxnzVcpXqVQtscJyvf1a4icCRWJZe1rUp4DtCfwsfyrSh9CUtTSm15JJgVeUF376vhNDazE",
  "key28": "44439HZ9QN2innWWzBxY5LDPirNNdAWRVxqe86i671unNXRichYLY5phw6KLpEC3wizm8qLV9gDAAUuEYXzMHEMg",
  "key29": "2fqbrZFKF8z5WjedF9QmMdqof83k39Z3iPAAWoVHKhh13mrXNKGGPajejJntdu9U7FwGPAvqx4WN1JPeHDZhRCKV",
  "key30": "4AN743JZtF6JHTcwBH6rzKsqJWeLMy5nzX57aRPmK6N8yBHbhApJjwq6rZVRH4Wx3pyPLeJ8cRG4pzF5JTTFzQGi",
  "key31": "6484Ltp383U2hh4o5NJ4ZtAdwnnWWCPV48VN4SroFcz9Psa6XZoJwTA7KoXgSfkfEWmHTA3o9prUCh4GwcQpjUZi",
  "key32": "37MJGpeqGVpNhyfT1DgqjokRZYYE15mDJBo7C6rkUQBDftvmytxZJwQvA4Urp2e3SuZ3g1entnnPUDyEJhf1ssz1",
  "key33": "3KQYqxPjCA7quRyGiXvv9M8mFKVVgQaijy9xUBcmwy2AxXdSbRLwH73heL7KdNTgfxc8UXKdZZVw1krMD1D1ywLN",
  "key34": "3v1haPDrv8z3fXkoMuTpytHiyrA6zdvB2dhTjQm3g3x3DMFtXzrqs9K4AVpaU8RXA5vxWDXejJFPiNYdB87jiHQh",
  "key35": "565j1Xh4qS59KMpAmikaGbNvszvcLapsK1HR3eEzKSzuAm79YdunY5vrGmWVDHf3bRvhqTvwYNQguoJHv3VKaWv4",
  "key36": "hg21sccYMpysw4pLDF3j7JRcvoBm2PEoAJzuLgyMvE3xXteZw3YeisoDeVRwYNt9qPa4mPqe5Y7k28E4obNdz5J",
  "key37": "3LiZEhR1Fff5NgNPQRty1yscThp1d8wrqKZphhEaD2LXPVDgio494gvuZN2uzniL5EoAyrZnTvEnDxYmAheRLVYe",
  "key38": "4qdpj1CnPycpdaKSzvhR2jhSeNyGvPULNa56wfK4rjdH6BxJvhA9skYB1xavresRCTaPjaJ6biXMXjCrpR9YGcgA",
  "key39": "4fPqdFWdyC9VuqtmgNKkN32kL5Sz2twP5jt23BRFAdmvonZN28vLjHh47f9n7V7bR7pQB8mgXCkn82oYUrW4bzpw"
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

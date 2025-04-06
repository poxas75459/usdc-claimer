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
    "5aFShboMYr5zQGXefvZq5XXrCQ6z8acoDekUJfak748Eyj4r5Km81cZXjr3oZvayYwWG2j5LhLCymbnxfm5yVy8J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gB1qCcEpgYaJSuHRTZQhpLHTMUkLHsSgde6z9B4DkrsursBMp1xuaSaCuk4ShFupJnLpcU45LxLHzD3ntip7m77",
  "key1": "61ej5zaxRXJttGfzQz8ZC9cnDBoUbikFuZ3ZgKuLYa1QcpDd17Yhg1VXbkFwmLF9uGnEnFkVRFvKSuai4MGLmEyF",
  "key2": "5uo7PegtF8qUPAwRcSoH7rT6EbXhDpJW7aWcKXVztHpc65Jccp7yPeRMGLoYPFhkaz8sJcmpP9mBynVTgygPyces",
  "key3": "288BzuFiK64WGXA9Coi8fCq4XACeU789PuXapDgH2zmUkr65WUGkWAA8hvnJBqfpp24Xu77km4rR3TuSWWQzPdvE",
  "key4": "3ste5bnMcnXj3jWv613HD7KS44FyFgk7drFbu5ns3cjMNTHn62AZT5Nu1mZv7pTrsjhiGFJ27noyb6PZ8UcEBtCX",
  "key5": "9CzmcC5zvmfUmPb7cm2WZTPzqL2BL1chjqA4qtSFiGvEzDYUGGZDN6mHfRzQWYBB3Vm2QXtv5T32fayFuRthToc",
  "key6": "3Awin5UzerFBaXZL8p7GD2F6tQPv445PZyGpmxER99mqGTCMEneHwNtUurM78xArVzWSrk1XZgfPW2wyuB7rq9fY",
  "key7": "4nLPjkyTysppcHvEfpwNzgZJ3DYS7Dgi9hcBEaaJAPQMJeqyeUpXc5Y4o79bvc95cYig7ZHjG36rTKHPAQzcwfeq",
  "key8": "5PizKUDNsurvp2AHj54Hc5KbRVrPRjDCSGx3VBjnM2nYu1F9bk9eymVCM9Q1DYGMeWuiceSM6CDEvToskdWURGwE",
  "key9": "MuytRUB6PKKvWM794S6LQZ3ryxhDWiEx99KRE4awmWhGUjYuqYDkz1Cj5tXHiy8CtD5pkswPyWWZQqgagWcEKCC",
  "key10": "dqe8XhVPsxE6eM41idH9FEz5WoqYoJM1MEVY8LLj9rSJ4Htxgc5c6AQ7vKkLCVK9vkQfLJ4QsHDh6ZTp6E5V6df",
  "key11": "22Y7hdN2Tx76jwPwLhxozd9ELKcwPV2Hxy9LNXieEwx8XeCZKbtauBvnyvCNWMYwsqnENEkxbTxEaxWe5B24ThmT",
  "key12": "5dqQ4XtGnE8iPbbMwXzJzHEArKpsRqBudcGKa7XjqbUFJerAW4d7K75GevZMWF78dr6ih5wSw7hAZJNpH56EPwLx",
  "key13": "2UYXM8gHU3aR8geTN4EMdNYxm2DdPkiaRqT2UWSpM9fqdXtWNcCPcK8fT3vi3GfmqpHBFNhmhuXR9enAhY4YTUVF",
  "key14": "5SWgSGEzLnay5xmj6jMHCpiZ41mA4xL1v38dbf6LdT5LzeLjRcw13VjuvR1cqZF5KwfTzrFYKdct6MGZK4N4gL5Z",
  "key15": "Nn3VRF1Mi3QcmKkZXuUCUx3eTtHufG7SN1mBAJtMQ68csmsVuMpEeLrh8iy1NXYANcDXSVUHHYaZqNZTsBdXhsv",
  "key16": "5tvqCUvAVxWCT48qJx1aFtZzi88CD8yoF8d2AEdyQrh8pY3pEMDvdEEpVHH1Liam1MtjsATTQzQAna4DfzQn2S4w",
  "key17": "476kzudPXFfBuUZyqtb1DmHMsQRvjZm1rF9bMAQukXDPn5zKbqmRBNQtdBL1vdbhuXoJ2nZeVDpySz39N1iN7vVg",
  "key18": "3LfoLdsBMsqy9JHLCbU5C3jCJLbxVkvtqLwQAwsj1JVy3qm6DYVQQEAAB2SReTNuuiakRWhavgkonGczkBunL8Mb",
  "key19": "481ULPLRtU1MKU2PrqAduYn6Te8nLYrm2AyeqsVjnEnA71vZHFBUt1T1SSL61R1cF3o1K37d2Nqd5UAF44LYsqcK",
  "key20": "duLSuP6iMDab2VQzQy2EaJG2w7AGavuPK8FzkR7a9uKT8BM758pnQ7oQwwK2RXpxLJTvjhJTuDR3TAtLQ82x84q",
  "key21": "DqyugA5375uZVBWucTDezcMiNAkBKzLmUY7Rad9EUSB8xFJCBqoYWn4kvW6MJQZrV5QmAuxQqgKUQV4iChhigZh",
  "key22": "2GATyPuiXEGEkDACqsvk9FCHCj1miE71gEvssWsGz3HZpd88BJWyg5CZKDwNv5XUnBr4cZKHfTixa1LixHWfhnQ4",
  "key23": "27hi89YpvgqyArxtNWphhuyudu3xCUwRYN2NzzygsBJsSyqKk1TAGnPpYvfpGawPhvNhsVfneTmvYJ8tWvqDkbXu",
  "key24": "3Lh3adgAXD3S9kGxf4GdvFF1dRFXWwaLwMwFgZwrY72qukRbQ1zSWaMCcT2fsUboYxjcMHP1ysx8dWxXMuKNY7As",
  "key25": "3LjaREDe9zQhe4wfdMF3PBameEcRspodtr2CkVXicWonooT36DmmCk1ErQs3bjUdgz6oftVz8zeBtZYryQK9SsU4",
  "key26": "3VqXmJZuEQL3tGzsTzwzxe2xg4jBAhT6YLF3ZdQ68WhP31aWMTvCDiEhnBfTgbRjZLcyCoNsAL1GXuW5xupfP4H7",
  "key27": "2uGBT7EQtrTeL4LpA3dQTdLhvLFVgMrhUBWaXCVo9se9JEoRXFsafiYM3mRhSERnDs5idsPLvUjmuJPxoWjqG94x",
  "key28": "4VKhjPz29zvwsnveKAg2RL46RE7bCNfWu5Wv4ECsyED16mVzwkhuPDjx2cGNaGLxB3Poy9ZeXjdszB2afsnFvL99",
  "key29": "5eXaCRspKcDEFWHzKdWkiH7FUhJm4BcKqMiMgScoGGmQ8cwd4fDwMyERLi17CYiowAUqywaaJ28ETgFSUwZYuHZy",
  "key30": "4gzXFEzSULb8ne3DEArHJDJx6nDTVoafdSNwQVAZWGmuqXN47q6XAHEDEs3TNrtymSQsz3G6sk6rghdpupSLimWZ",
  "key31": "4Qmq7UkF3pocZWrJrT2xdvTt6EpnqeeNCBEGstSKgEXZXum5zL4qXXBXtG369SBuVCK2nW1Pqan562P38XoEoQVX",
  "key32": "255CFbntXZGaQSjzoywKLuMCGMgNHYdPFgi2wfNyLr31Vr33AbcNUnfjiGE7QYA3xGXXkEnuejc133oWfYcYKD9N",
  "key33": "38YK7AgTyB7kXY5nNWB5CYAJYnG39XXLBMg1JiSc9j2aLrEcci29XLdVDtYHia48dMXX34cgepKodJzhqpUsCmka",
  "key34": "kM5dpFdKytdnMNsJBQ4jd3RvUwYhXMZecevsL7fs43TBTJbESMKQ6cRVLW9jFGQZiTtjAp5Wqz6tgPx5w9cyeHx",
  "key35": "4bj2GczQWFRQa6RPSP3xwcQm22gaqP5WT9kggqNL4c4azeZuLf2WGzKRdAoBudMpZUoxm9kWhwb8DosxEYfbWTgX",
  "key36": "2ySC61XMteQuBcy3PWzX8ggnutitV5zP9WnYKFggrXerTgFNQqsoEkAHZtHzjw2mgiQCB479UkbP2TWw8jb15evv"
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

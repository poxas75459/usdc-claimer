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
    "5DmYr3mymT3DTR775Doq9SK4dtEmrNwZLfzQupcq1twLPhQzcVioVWoHz1YJSZ5brRfeWSamYD4BPLsodmQ3zXgc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vx74mMazFpUMaB3986nzbDkf58obQ8buWU6RYnwjcrYknJy3iyLmrgemgV7o7XoC8sYLove9CApTxdK2XvE4k6j",
  "key1": "FEXBysKsb9fYTEmh9JgnTJpuyJi76byt2EZsoLMDG9i2Ad537Xsfc4PLNBWTNp8gx2TR4NvTdXpPk75Ge5ahCDZ",
  "key2": "5sHFtWKroejafKJM5xev1r3JnwHzjyWoJfXfFVG4YRiLtkjjk7uYpjeiCXwtnLtK6PbyiBVSDVAgH9CkCET3N9fv",
  "key3": "4aoTKqnYcjJbRrYMVtQSnKuxCwJjS8iLDDMjxCKaX6sYH2TwoeDriYoDbarRgkbVyLnhcDm2dKtLpnduJPMjEq8w",
  "key4": "hYsCo7Nz2cK3bvvfRv123NdE2dX32GocZ4qFFGd5HTmmxbN3ZbVnb14EqLXDAWVwHR1NJ77EmRgmj1BDZPHrSMY",
  "key5": "4bMN4kLJvhcRPvXEVPNh6MaQpf7pYXYEjpgYbnwdGNCeu9cZRmuCo6un2fgbGq9SJe1665aGDTFfNrPH1FEVXePZ",
  "key6": "3nGHxcQWuaY8Tmjo5pBTYq1wX9n3GnKHMGkcL42jUHfFeLamwx5VUW6KuYuT2xkCpqYCgB97tb2zPG9NJCT4Kf98",
  "key7": "2aJeWGDvMZBG1MsgzNj9J2r4ezJeoH2PpLhMVxe3eyueFCAfDa441EmPZ1XaxxzRw5mT9EV1CT9DYcj7WmWdPtu1",
  "key8": "482RRKzmTghuw37p474LqgKZs4gp5x1QvcKQ1bAALb3jGJAVZLhJQUhoiMTZG9ohDy5yU6rBkiA7g3xBoukDVY8k",
  "key9": "4xKnLXqd8AbkYESiGH2Hk8z6M1bxibrV2pbxfk6cE8puMEr2cKJ9hZr3mbyVRQNtn1VCgLaDDL1WEwLjArFd7Xbg",
  "key10": "nzs4BWERHknYuzU3Zrfn936n2RXuSvH8M6KzRewGXvHZqq6m4shnnrjNWBBBM3n17FaYPc86DZjR8RRf2LYQDPW",
  "key11": "554V7n5kKrKFndBZ3VMaSiDf3N1hULqnjh2dTvDHtQNx7FqGs5fbnHtv6pLjcjDeAyEH5StsnTQqC85phoK7Qemu",
  "key12": "zo5FtfAxUTHGnEB9uKArxawQgdC2iBypSBtFEWXALAsRToXiq6y9ZvEiJ4ge26ng4qg4CMwp9BasYZsgPG4VBLJ",
  "key13": "4q3vjwY9oRFsZ66jY3S3UbRsNhSxbzvP6LNN61cuGFVZ8zdiMp9NAYubkwcRYUzSziaGxmQj7pUR6oQpmecoxy6w",
  "key14": "42wKd55sceRKFmWoPGs5XA5F8GCdLUBdFPDY8VtCkFJ8FvNFu2aMHTjGANbr35eHAeoCLPRW7Gw4xrxosmFePZjp",
  "key15": "5PWBMAJzZFaV23PbB8hcGqUNDP9U7hmifNXXXDufugcVweRcNEya4YScXywPTUk4EHZEgmFJcv3mWnjjjAcWnh3w",
  "key16": "4DxCcBRYDLZgML9Q1f7uTyHfsc8TGGXbeKZfR9TNjrVRuMjXSE6Dm7GWUfKXYM9LFDgZrnU353xR6R7uLn27kVLj",
  "key17": "3UpzDHBpSY8ZV7VGUx5gst4SXHqenFjLRKcPRfDQTwWFuteXHECFgcqztn85u8ecDh3C155F56rEY15btRf6eC9c",
  "key18": "54CE1RXuUDsAUN7X5mEbYzfdPm9oamTtPYQaHVrzAPd74ZSKWz1PB8mw5BpDefo2V9ffdz4hiyqLx2f4M14AxH8u",
  "key19": "2JYWyAhBVqAsX5rFjw7VT4YZZ2yCXogq9urGkd2Ft2hhCbR43qxafw8xC794raYbkheQqpxubcLQT5gB55dgRixo",
  "key20": "5FaDh73sURaM8mWFdzg1XPG5AEoHgAXhxRu5P66FXmTki1th7J2N84Aya2kdXHHX1ZGoyeoPHZJ4YA1ZEZojg9ig",
  "key21": "vt1zwGN5Nxj4c8KuHjmszVP61j6nAyZgoXKmCoJ7GTCgwMbdx5fTLeKgbtsqSdWz94bM3SknirNQvRiL9uaDUWC",
  "key22": "2p7WGzqnAjAFB8h6wtrCijZnamEeB5ijRWaUqtmTKjkDHWyM1RuDoSPYk7NWCos1xYMzKYnN5RNUrd4NSBg42xhL",
  "key23": "3vrgcBc48LNbtUHjuuXwomuCUPs1bFMwhfsDVADj43qGofUursYLQSskV3MHyJMnd2omTTQXyfWWxMQ2dbgQqonx",
  "key24": "491Diwo3bKRfhmsQTnJWU1bes56YSFqtgq7Ukn43YybrAq2vhVAieHYKcbFUY6UV5o2anNtvhw5vNdn7agGtT96K",
  "key25": "5Rv9NMKimRNZMPqxwAdiKroZLJei6kwUFWrDd63D5qnG5HAb2ih2NAJuHCXnGZqP52j5JquhXfbvZnvJLMo8YgqP",
  "key26": "3qYhyk83uruFvUKxM5jzpeKpeF2C5DkwaYV8xq7Pv28f4q4fRmR9boEfMuD4cezRScWCn4z8j846vS7JnzKYw1Qo",
  "key27": "Z2zV1NWyjVimTRZTvZ6FTq34UbYtH1Zceuu1W7nWkTcSBPCaWXpSWYkRTyeqPb3MWrnECmDu6cgfdAhSQhUn6LL",
  "key28": "5JFmc8rRn1pDq8uDW4QRsc6FdNedqbh5vrDZFBFjxmHkpcLmDcw8SwqSEeNwHR8YSaW9zJPuWUB3pdgjeBD1PMbo",
  "key29": "2ibvADSvHHcnzoaAU8ESpKQ2GiHuKEqHrWAuy4sLW2ac7r7RaHCYDr7WUTwMRRMu7Jd54hvLrvweRsamWFkc2n9B",
  "key30": "4N8AzVWFfdxXdqB4pWEu3X9p1DDRM9azXgecENVwtLnx4D1PBe7UU4SAvuvG5dwXsPoaNKzRsMBCVVqXzTPkWpij",
  "key31": "tL8QjFGrN8425K2h86SeG6Vr9aREBdd3FHYYz18BqueDLRVd8Zkunsf5fRqZ6gVWNhr2TEajaCYUrmEnXD69gHR",
  "key32": "5Hpi6zjpcaK5fMYQGa8pNiuVRuQPZXDz2iwnoPGuWGUu1ybuDkvJjUbPN77FobxAnTFBqgZvpgjjTLYaGUX3EqsX"
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

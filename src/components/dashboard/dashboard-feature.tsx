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
    "2GyuXmZKsVXEcdft669j1KvLVx2zoD5gB35cBfoNH4qXDJQHNKtDzWskhzh2U7V7ZwJH26eYcRV33ThZF3PPVeCs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22JgdBbjstXCDLsxvdbPhVwE4HoBwxgQjKbpGLKkSX6DJkocQ8NNnR1Sr5ds9aUSJew1jtDAYMgghLmF7ej2uRna",
  "key1": "2LbsKBgzPZdpqo5Ayx1A77EG4sCWdDjFKC4dGjRcGzSf6thoYFaUaY87p9p5RiSFzxXvwCYfgLWLRBdszJYDeNh8",
  "key2": "2gfiQsEMcEyJMvPcNmqHpFvbvpRdeN888mFn4UtLkVrnGkmszFeTthNWzXjMZPD5HPurAyCPgjj7XUzNN9L5PDDX",
  "key3": "sTvNDbY4uTy7bMSD18695UNPDQaThECuuktMFUzSrQsYzML87gEQJ9sVmLJKs1HEcRRosiNSHRP1eN8STUCozG6",
  "key4": "5cz7AExouYsxwMJRff8Hs2xQ5PDoySFtVo3vMhyifX8J3aE8bwks3eybxPdXFhGuP4MkhEZgryCSyBJ9zzcQFu4a",
  "key5": "3w2waFwaXLmUnWwArWDC9EdgT4Py5yrS5VCXkS8RhWVWiJZ8ZiD6YytXeYHmsaTtpad4GFeLJdXbiQNp61YCoFvg",
  "key6": "4agCjwf35haB85Xc2gXKeTtJw86rVc91oy6t2bx4jt5QxSFvVyTpQGgx2ZvWDcjLPxbBa3DB2Eqb8vMRRW565t2d",
  "key7": "2wWTTZdcpvTsbWn7x1waKnwgui4GGnAiY2hLbUnQwCnL4WCXM1dKRPTzSLFwX23ASVoo3Cg1grk8Wj4ePpgRkvKj",
  "key8": "4A8LDZLrbqLgJBFNtuxPxURu3Gr932A4vkNJGiRTuD9Px2ssV9QrYenaEpQ9qWqo4kCWB8FmGDYkDAev4ZwCB6D7",
  "key9": "45PqN3vEDCjQK9gn9zon5EPAzovPx5AK1aKPNpS9TVZeh12a6dwPJNEpeuRkSxpGn9grmv1MNCjwHJqBsa4MEi1j",
  "key10": "4nseuUWhsr9Zcu7KUsfpfKxdpDQMB5ySCFNiPgxkMy3NyEKXHBWFGGqcx1Xr9gXtdFfUqgswKvtWVM1Jxu6UJDpu",
  "key11": "4DehTCK3SxgdLA78CddM4Y45yMBBfwuJeLozkpAriHzXRUZwbbDHkficszg4b5GCYGfTxQkUETCB1xxg823rjTNt",
  "key12": "2PYCKhtRxsunbazKfK1S6yChiBRhWodictB3emjTb7saHtPEsPN8LUE4z1PYduR6ubK1F64QCtb9JfHvTqoZTY6j",
  "key13": "41PvSv5GHGDZFek8SPp7RvnfvGRupoAbMpRsLfiU5Zd6EdrYTYEjcSEfq1S3ydJQw81wrMGJgwdYK1iXuvuJvikD",
  "key14": "51p2Rp5M6Fjwtpaow5d4HAMXsRMd52jw4mjJf2KSxCB9JWpJm7h8qdm2cMt9qTieXx32SvnjQcEjNbnvr2J7zEyU",
  "key15": "3MkYepA73nQvqM3PpKLicrXwJmWArxAjmbqHCJ1EhH2hpdQT22q58ASWeMKEZZnfUQQx2jkb84FDToPRyZBouznp",
  "key16": "5ZVyJPtAc2jK6RxF5dXUiW7s9JXXc4U1wET9xhLBieP1d2427BNkvtXWAYsucpcbWByC9GPpKYttrru1npyrXC41",
  "key17": "5ouZojhzBn9fmedCQqxKJcMsY8rX1p8rqbEaRtDmVsu8aBtiDHD9yWL5EXA4QB2XnZCQ4HxF6CTWgRZB3ovs8BaJ",
  "key18": "66UohXnzNkHkjwUBvyxFRXWTXPMsxXVANVJEbboiiybEeVXAdApdKyR8JMYRS62AucbVtJvyJNNioSzUAxqvTZ2x",
  "key19": "2LNZHfVEBbM3HhLPJGWoSEcZ7WXFSzmQPSSGfYcJe5qUEMZyFgS3YrNLv5wL1V7gC24snwNYtgMvSuwTTmPo6nBQ",
  "key20": "4NfMpdMU3TyYhxyrawjBLFy7AA2zD47gGsxv9w5RENdipZ9SkFpo44mUmgi21MiddF566wvZcGEDHPx1ppNYHUz7",
  "key21": "2WLNBZ3zQmS1Kr9HtEKxK3aCtayGRJQrZcPWcN8Vq9rJwL9DmvdhMZ8pQvUeDsDu35eG2PcLeAyief32tY58Tuir",
  "key22": "3jDmEYzYUiyEF4wFpvbpmM8j9X4rHsFeLU9nXSpv1Sj1VfcvPEVUak1Mc5L1R9LvWHGCxdXDVhYg8fmVAxtu29nV",
  "key23": "2ZDZuqLtf9u12SVjHYjh81QXfSDPuCGGEkiMSoTKGZeMrbt6etgdrTtnNMxFrAW42xmKnSD3onieuG92VivYJdU2",
  "key24": "5fYPfgQzUBRbduEL3o2yoEzU3nPD3g1iKLfST4iTK87JuVxhZ1Kg4xpeZfsG3f116U5bGRjB6oaqXkbn83LRtGjM",
  "key25": "3VJ7qnfg4eZff24MQXjsHFyokdCBhgMpw3cE5FHvSX6U5zZpGBvAu22mPkz3xPAC1FKkZfkB1XdSfSjyFQkPpJYC",
  "key26": "2rzQ3VEyURVWoPomfteP3tigAV7pawxccQASKteWsNxFCMGCygxQtY1UrbYtdbvYFTF4aWGeDYckBhx4KapKttVu",
  "key27": "tsqAhSqvTfrFdngujm1bDMwzwMT396baEWorCbmtL8viG3G1QDfQrHKT8qk5GgjNqU4xk3NMGKrDTRBbTKdd77J",
  "key28": "CkBvVwAKK5otmvJ5UQ3irZaoxUWRYCPce8SruU1NiDW6UKp12VhvNk3iGcrXLAueFNa4bvzTpRS5iJwx3qYwmy9",
  "key29": "4wRTm9wdZiY9w9tPBDQvBweLGecyou6AbBzBBz5TgYL1hxsYrtzdG9nkhJX2FUcJtjTPKheAjQXmQ6GYQw8cSadY",
  "key30": "3TC9aDuFRcCP2CwXa7QX5XFaFD6UmqEPCJB1fKqgir2amPfWyxxEXFWhB97C55kLQ7KvYqKJ75BiwKrgS2wpu4KL",
  "key31": "2YGWAwdgnMhdcbMs96RdimoRH41g6BfviA37pseyTvQEg17Gfx8g54Yr6AkQGxQAoAY83MKmUsGt9mu9Qc77xyQL",
  "key32": "3R3xAEEP9ksjxwLhG74Tk9r1WzZFyXL4rcJYvxskyAG7xumxRFw42o8ZYTanAakUrF2XrRcYfy9HhiVWMdZmVWEH"
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

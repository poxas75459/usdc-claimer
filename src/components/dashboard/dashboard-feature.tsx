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
    "dNYzk3Di8ckX8JWaDKxitjSfLYrdc559gD6T3kwZVP2EguTFYCHqCZxNs8tUyzVC2PPDK5axdboEfSP9R5NqoaW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QinHrat8WjXv4yrQWkPd5BMdP9B4DEJXG4stSUShG77tng6Sry1r7wSMWsU5xC6bKqvnmFuAcRoetCufRtRCwap",
  "key1": "52npbU7cJ3QJQYuxY82SyuKXprEsqCTGWoBMe3z71cNkVyXhaD65WPZgEUg3hoN6QnVWooy13p32q5VU7LGD15hr",
  "key2": "2ueuaJDaH1uEfDfnQnnrQY98P9bdQS9aJzQ4ZFXjxKxV6SZjZuaygvcTdEswiWLH1QxHuoAyyokYVmeKZnCsa9m5",
  "key3": "5B2AGwqyHqPDSQK45KNuaLrbV7Tpj52ParfpDJ2cJQUvrchX1R13Y8KU6Ha6ge9wUuS8vT2WVYT7Ymw9NgXPkGvQ",
  "key4": "2aBu8eL8GHsKMUqzmSfJQ48iPKShJAoZWqAXHj5hFikXKgvREnKZL2r4Rj4RsRzQftky2ZC7JiZ7A9RgwKda5CGF",
  "key5": "3948xGpfAa8xnd8F4iwNs6WZ2G5bDRR9d4oNFK8RJfUF2FW998Q4PiQctvHfuw6XnvtBE2V7XYTM6ZHUSCsLU2VQ",
  "key6": "8QWTBjAHQj6P1St8vebaTQAzcC318oJe5jFM7QRKST7z5hdLR79kFENaL8RWAsapg5yjf3BNC8BK725WQGFnCyh",
  "key7": "4iiyawdCjuVtuXmSdUZBj7R5Rx76iUKMM5pveVNFy9zhwqittd1pg8CbPEuzwZNN8JA1SPq6hCyqyF5c7RVhzgEH",
  "key8": "5bopcJ5goaAbBUWA2CocsPpMzAvj4k3iSzUYYdBrSTAjU9NFiYVECtskT5b3xuL4cuS5KhHoi7U4tanYXyVWmpfB",
  "key9": "22wJg5zKBQivxBCaLYm8aZJKrwCaUc6iB41XsnzGYFHCRCyL8PSZiZD2B1Br2F1GHnbXwPgw63THGKy6eRmZcxMr",
  "key10": "2PKXnmS7u3kFeTLL4avHNCA7pvEE92aMt9gNEGyvE4oqiGeZspxhdksigL4ALBW5zA1ZgLm7jt7f7jokBadhmpao",
  "key11": "2xbv7UT2ChguR7bXYmcFrxk5bANnwiFtiENwhLCpVXxwMbiK2H8RVzTcXW16LTs4o5oxv6u56kkLL6kZZtzajPkh",
  "key12": "5LPHqew1WvL2V9vVXSDAxB9qErxXU5Z1ZBUGFFE1RZtjiczoxodQ46mnJZTQrxQ8CtCvegeP9Ko5JXFwqJB5JLQM",
  "key13": "2nGSzAqvibPdj9WFu98x97aZV4NcjqnmT1kRjYjeLfS9MNkQwTTLQJ97GfbKexApn69UaDDufmMn4x14dmJ6hh17",
  "key14": "NwAPyhxXMYu1tAP9KkCk5QuKGjuncJ3A4Y2U7G3V7XUx3jhreG3pnw7X7tBJm1aof5S7oye1iFYZYTwvsLHCABz",
  "key15": "LVGMFDRzzQBD4GcHuB78StrHxZuSdM2Prr6vcW3TjEDwvDZ25Yoh9YfWYS4Kzcb7orjwbRKckzdisGkrFThKMXC",
  "key16": "3AwVh2JUWEpvMw8rWcXWuRm2JWNi6v9kZHh3Put3Kv3wMZzqU1Lqw5xWNw1p1UUZKzaMvk5Chepgc2WheK7VMMEc",
  "key17": "3WFRWMqiNK8EeFTC7sCJLXX9TgT1dbMPYceXSszkpqAvSgt5Qba5AVKBXkSB1g2ey4B2p9hRVZGYA24Vrdb61AfH",
  "key18": "5rDFdaQMxsYpxeqGvSde2jjZGygeeutLCZJY1nKuADnn75YHPdor7r4h7osP5uuUXb7wQnmpxMcwKxGgUohCYe2T",
  "key19": "3aU2MNhqzajXHWeVawGDJottwtTftcrAZ8B4ry7wHMLYeVytStdiH57DUs9dSpqSz6zrADB5ZH1EfyW4ZppfKREo",
  "key20": "3BbpVzgoyCETGQA8gsQZCXa9xKEZ2LLt1aTRb7kdNTxsWsYUzipzaT3u3ixnnD3kSxEXPtZ5eipL5JirLPZXK1Qs",
  "key21": "57SEmwB4kWJbQKprK4Wc8P1yRR1guiWRfmHRTesDqHhxkh9o7FV5QR4BBmAxZR5stsnBcuMwheTBLd6LwikWUkh1",
  "key22": "peiMpg78HuqKkypp2MZmFinLMc7kGg7hworfxAt64u8Cv9XZoD6F87YMDpYrwts61PqCX1JCztuoTHMGsahHdLh",
  "key23": "AkZQUfZ2MwdRaXUAXnFytiB1WrBUCBz8pBwCevT7v8qcWqnjeFSdANWKVje6ivLPvv9D6HUoU2cWxDhbZ8UAhzt",
  "key24": "2ktXxbz37ShVbv9XxBR2iMXBGC5PKYsHrXx5nU4QTqdSXJsZmre8CbSgJtzH9mQiNcUNEFUXdQC6JJ7ShPa6j2P1",
  "key25": "5vZT3Wgz15qzusgVp3hfP7v7uMAVwUKBNe3Sj7RtvyeRTCk4C9XGs1NtCGjkhfyCJf54dSZ63xXzD9Z4LMqZRdJH",
  "key26": "5PB1DcAA9AtxqRLhqdJguVax74nDJcW4htUBbQEtmuqz55G2F3xsWM1fEH5qJ7UEzk8LqBfvBt4wxSPoRzywoYSz",
  "key27": "5Enb1d8eHy8PjhAPhMTv26Rscid1MZqpcknVvFVDsgehDatkmxaZZkdvS9SGar3D6Ep6MaEQzJVQiubtVJzXwtyY",
  "key28": "4UL7yBugJx4re77jF6DCXBHJdSrGZXJXP7xtYSVNGUBB1KH47oA32L2kmDCBj184DhmJhnAY4b5WeF1n9AJW2B4w"
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

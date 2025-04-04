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
    "BupJLysnqvckGsQafJ7NkopRi9fHXgDNTRWmVEyn5bGcvMoKmC3TdAaXtxeWtDKD7DanifRNtV6fbogqfLNVEVS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55J1eV1wkZHVpdttwjiQULUvvEu2GUxQfM3MocTLtwzeSWM9pryUneNC73J4UonL2Xu3UXyEgnrcLdDnPE8dmeYE",
  "key1": "QA6uZvJQaAcwnYVaVaSHJh8UBzJUAEC9tz6xMNihcwdHQp7QzeihgkmT5fW9nXWHD4VcDt1v1KbLW4ui3k8q5EN",
  "key2": "5LHRsk5cZYygwGLNP9CPkTbEhee7PkGXXbGEtbSX5amLvMKror7EGUAtoHmTAKkoDRM8codoWkyoBCaBKpVJ4Vc8",
  "key3": "47A2x4LF9McsnHyFgpWYzwrnVwHHbR9eSPZkzXnZBKj6ZeejFqJ2xEcueZAcmyAXJzL7gNCvRxXQGS3Js5uNzQ8K",
  "key4": "36NiPaMVFDtAa5rZBFMXjbt9rKJaE3mevw8uZZiC86b4NT7s7TLYVb33A3tsj3ANmKJdRjgTSBtokWnW3n14hgeP",
  "key5": "5igjYnSwZCPhoxZu8gsXDnKwBtuFC4QDFBYLrnReHyGHNuJ2xPQABbTchXXk7wkZ3xmacKLVSkqj7XyAv4gJSbNr",
  "key6": "4CbWGGLsYMdhUT7oJB1qQaouezqBWHy2pPzs54hgz47vuSHXyGwaCzbAiSAfD191FBn18CYFBjg5Cnobp7FcmwTc",
  "key7": "5qzTykXD5ubbKfcuyW6MQVQ4k2c86Vph47riRixu8vEGRTC7m4UkrkA11XnjV24Xnknxef35zQzg9o3j9M12WvjU",
  "key8": "3imwcNzwoGocWWUN17rbcwwYeLg8cMgBL3ns5vhTePKMJpkQRY4D2ZERe7NtNESqDgpK1iUjfGSg5D74N7PawCH2",
  "key9": "4dToBQLtu8TiY3yg6Qc9QthyPNFdrE8jhMf7La95sJoPdCr6KKC7fNeRD9hGxpwCNKByvbDndpT41ZQtZCJXikpi",
  "key10": "2ePD3MRGpJSYBHechduwUuNFVW8F5o4URNv5YZRUC1zmf2xTrKqjuPgJwHpMWJHdZCuyjZ8DLCWtYHAeNuWwwRCu",
  "key11": "3dkjY2RkqpHyqkAGoDdzWDUr2CqwNZbZ8RiYS75rqYnpWzhpeTcC5d8knvMdsWJfMYj4D81nAetTut2R2sUrWHPL",
  "key12": "4r1aGBvrLitaFRrGCU81z9YDHKGibFyFBTnyLShWXNaQkj4kWhtGQZoiLF25tx7arrg1vURQQG1svYrWwGNprvmG",
  "key13": "5bP9jGHaeNXdA9RcvLcYLzLugHzAAcaiaLXBAytmwaQYqxvrS7Ut3xoXzTDVcjyU8BmPUehckoqHXYTznUip3vti",
  "key14": "3G12oXCbRPkaCmhYJKye4ngSiCwBsgpMsPUT3AkTWMFkaA9mM3xdTLvrpvkPBxLxWY4gqdPfhNof8T1bD6AAFsxf",
  "key15": "66geLNXC2kgxdPgFGSjDEH7BKTsFxWwZc4n3DbYsxADjsgBA29iseFXmptvsNQJXZ8J8zX7QF2Wy9gnebgwHXPk8",
  "key16": "4EGeLmR2mY9nuqU6zkhQWfDk6NAYcLCiPSJr4BAYcvtgkpdZi5DfkVff6uHMYw7x8yaLA7asUj5p9aWLPdjAkqGY",
  "key17": "5U9Pr57dJTRSCU5FXuob1MymzAPaQZiLftkD7CLn5Hx8yazjkkowYqiuf9X3n2UDJVGmvKxwJDn4LyUBWth2deRs",
  "key18": "2Q4cVotbPpT9dwgZSvB4w7UbAGHVGbCanFjQaXF9Hvmiv42nT4B5tZwP5L22zu9gaZnmdnFsi4SshnA1d71CpSvT",
  "key19": "4TSHqpG6h6q6eaqKkceosdQnzER2TC6yKdM2yRG35KQiQwFG1CXgDa6VjqNXm6hZDUHkyK6RZV52eucxqwMPhaVR",
  "key20": "2rMBtBew55GkKi6s8EEurMfFNPXut2TUE9bFNEvSXNi7BJ2bnL9AARM7mFLKhEL8s42SyZHD5kGYaBTe2q7qdBew",
  "key21": "PcPNSDdAXknTK8VLoU1nBcTjiBTjErALBETK23MK1VcHLhwg8R2rt82tDjsZALhuLtmtytmnawSkqanwT3TCkve",
  "key22": "3D4HuyBbCTgi3DbSFM4XKhoDD7TexUYVaTH5zA1MD4BikhwnVLSquqGSxffTuNk3s8WddEy7WxPV9guCHR4v3xTr",
  "key23": "EPyshAit5XDFWhmT6XJnr8kSL6Sm2gQeXZRNX4jY1Ppkm5p9qRx8qexBcJqDxn5RntVSr31haRE2WjrUWzmUqFv",
  "key24": "4g2AX34uuiAUj5R1aZWG4i3k4sKMzLLj6AoLQzsznR2Q7wWVgHir4EADdnkAbBjmZrvhSnq9LfSw9jTqA2L6Vapb",
  "key25": "2qKzYF6tmPmrgfJGL4SvYaiV7hTHnzVrcXUqrPF4pRfkA8Gph3DLXmTW1RZPA8TyE3sgg74enAJLjMaDnfSACEsR",
  "key26": "NHfiAPjui85KQaBRspSpfLfAovtwR7gbaMyuoEfwtcpieswKCLADqkaMnwaeRoDB7ASdizvxm4LBn1NmMTABjCA",
  "key27": "58SYEmF5k31JZEDJGcanvm9YAgiYGDxMtiQwAjDswrB1ALQJbDZqAcAKvHBpnnbxgY6Cs794TETfXz5NtxELnUew",
  "key28": "2UDoVUyq9BnLLyLXu5enheg14xDo5GhpviN27wSeXiZSqc2y37ir5ZMGwXGWkkf8E3JVSHjzHruC9Bqm3sqz9sKi",
  "key29": "2QmbiKhe1GqBGCmaSBuhkUJ3cQ3jhJmdSffhCGkBmqsNKLaCtGpiBJX5nuv7LvgcAvxEy9Vx19bryqXjSsiyU4Yz",
  "key30": "42mvKioC15XwoBwwoyqLxUnnXf15cLjwAVjW4T8zdDtSzkax6ZmfU7XssSkdJJVYnxZdqdyLYMkdt78siU5Tm41C",
  "key31": "2juurrbypXfqA9RY76h2PJMXwSzrjH6pyxcof3qrxEEyYZeFpK62GHncBWcj6729QDSCjcx4eno7HYf4gTFgNyKu",
  "key32": "5XKwXxASzsnR7oikf6Ro6U4Bm7Gs2LQ96J4WjtsS5WAeeZA7HojWxcMeQP9MEEG6E5sgghJ3HNoKaVyK9kC8QGdM",
  "key33": "2fTjrNb49gZCni6mtwXYPq43fCvR7nWV4RLtS5cfUgxRae8j5UgiQwFkAWALNAdbtE2sSNj9vpa8pNEZmeo8azKd",
  "key34": "4UmTYH6eU92nXnr9XJ54bUmeN25t2tNdfxkCu3JR9Rm4J6dJaZPjDWLh6ye8kNmbzJDx91zbBcEStXR4AaCAv321",
  "key35": "3TguFTGvyaudREyVKUvkKkQPpWfbMpPgWdMdHu7XCuPef3fYmqswZ9wWLghgFZmAVVD1qk7EbfdSrXsLF5RUHdd3",
  "key36": "2KhQtY4d7r7jHrCKt33vBkCYRsGd5ZzC8rY231Xw1DssrbZodn4df2gKq8zYmhNv2bHgrhcjq44Jc94bLUPYzM6r",
  "key37": "5uobVjcuC1URWWj56CjMw54ibm3oxD9RcEn4p6Z4K8z3VEMF8QCVkpeaY8QRroWM3H3kjCV8FBaEYznMZ8hUDMkU",
  "key38": "3ZzQcU6P5xLjY5xtAqvRT1YZonbhWUFJaTJB2bxWMNe3HoPzG2YrFqqAp6i5aNQWCvFi3cTjerncrXkVFFXnRPnU",
  "key39": "5xAVdxoYQDJtN5cbVTRbnHbyEkWXa5qBpkWhCWbWwT7bPJNaPdbrkjominJg2etaMPLy5X3LuRqmYWLJLFGmJiT9",
  "key40": "5d6K1N7KuYxKrSNyLc9Q7HvVZwuviiqmiiPDwThgiV7KgtdyqnUh4Tf5hxrRzcHGXpohMc4zwgSkQ9FNZDUwErcF",
  "key41": "5YLchcpsF9kx3ztoMazdF7B7Qv636YBABN7WtEzz2P7f8eFo3ARci97LxnhMBbKkEgPxhvrNvLGyLtZpBZBoz3CR",
  "key42": "2g6EgFNKwZmj59z8nwdw1tK1DsGvqZ5HTNn35zaZajbTdNxR2NtjssAp74PfRAAC3q33dmdWhxEKfKrXqU77qvQq",
  "key43": "mAZemiGfM8kaxJJ1pckGEScPF6Ci1eyBC29hsJYzPVSXvQVnBHNRzmS2uUifKaQm6qkcW8H9rPdGFeoWgdgyGTW",
  "key44": "2rfzmXkiwdSNQVxVKjxzemmPJtwi936SjYBmYDRjWYa8Tyvoe7DAu4Cmq49odLfo6KKRS8c4Hh4kNanJ9Tsw8mCL",
  "key45": "8uhzntFttMBpB33sLAF3NmtzoER2biPoFf7WhzbsWxUk6GnzmJutX1RvVpWHi8ndnwwvkPpffApp1Tfdm5AxsWw"
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

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
    "3ZoVQQidZ6dd11S1fVmEsah8CFUjU1mXZzvfLqoCXhfK8DUi218TaeivjEiSgqGKFuqTKPfjwtpsF2XcZubsXFE6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zpyz9Hn6dwH3YjUPBfZofpGTfK4Zg1Sq1TR7vQLjLHMYfFXCTZbc9YEJrBGhAZMBqgoTfg48AaL4wA8ts5Wqnhd",
  "key1": "4d2qTBXeUQmAP3YN9qWQhEprKys9DQUaAPcv4kv3GoHSxpGVRD75zk4KVzBnzszjEeXabmkzGY92b3m4diUHYhU5",
  "key2": "4S5bBTkoRjYEc7c5oCGigxnSndB5VfnnWcVpPwPkgZ3gtZT6GPHfrECR2ENddWa3NND84iNegTM7cgakc66JEMdQ",
  "key3": "2XdqYKfB1m4e7PiVYb71mB5cXQo8bR73SayEBWtWMSnwXR2wymsxWg27jqfe2b5r9CgC9qag9QRfquFGgh4NXR7F",
  "key4": "iULefDvzAEj4Cxfxw5FA3B3TEWBtwZsF7zepo7myoZseeNX74SLWUheozMzhK2gNfGcjgUNFW4DpY6BepACpumS",
  "key5": "5WSbYEVcwqnA4Y1ksftLQk485qT83WRJ1i5GcjA8yy9ppNH4XdkNspZ86kdAAfvDMPdWkYZWnHr4LFinEqF8mLri",
  "key6": "5D331JCYn6zUxUqFp7CUxaiiyYZR91UkD9mWG4hgX8LrDWmo6E3FQp2MbmyF1fX6iWLVV9FUBBJpyh3gvGZksLe5",
  "key7": "5wtHDgoyVJdJuyAqv9925kySVwi4PpVXfkTm6w1RToRgdGxuHkkvHz8A7fSV7fFk9Uucy2c13sm7wR1YZSpLmCvc",
  "key8": "2nXjudmD3dfi3ZwDtWgpgBCCX5QZksJjMyQtBr2YzehGNdoycWVm3DcdjJzVtno4fcWLXyMegJWT1ShVDDLGEjC",
  "key9": "ptpUSu5DhDv7JWziNwNfTSXbNr2jwKsSgfUS6xoRHCGnQw4vtMPgtGTkUDfeWS58vWWBqKhmrgDHR16HzwtQNBd",
  "key10": "2LowrJKLPZ4YVAn3EL9N6fn2porunWcrr2LJ7JfFasqw2cRjVkcc4gj7FYEgYHid57gPt3DiNttw9yJiXhtyrZpa",
  "key11": "3sFM1uYHkSvmHMk56G773Uxrfc2xWEvFJdBnwTHUdk81yHKfvG4QzfP1vPi1KgDBcKsy7C796ic5Fq8A3RTWZtCZ",
  "key12": "3sJMDVGUo5N7QjkthBKVyMSFzXvgCzz9VaEtiDiSbZskBG6vuDVhmx1uHY9Rk5GYU7y2vcgjKLZ6whcSe9agVka8",
  "key13": "2z274PPUzxT1YDr2WpCsLUmb3k5XMgPxk1V6PBVkRC8AuPjMbto6Z1N1jtwHhtTmM71epkB6Qnm4AEC5cR66BxjU",
  "key14": "57k2cEXwNJwHojgQeZnBoyWH76SAtni5W1N8mmowXUuyWswPJYWCwQTb3mi2eEgtxbnoR5ccXzCxGvYodvvPE1NT",
  "key15": "5K7Tr5Qy3cGxqMUGeKFiy3E6UR5hBfCRdxaeQxMN8B8xEP9YCSVALmqxN1573jmwit3iQwJdH31H5D9oy6Q9AxVq",
  "key16": "2TPz8dZH1yCR1XcKz51P6JCjcEwqYFQjTtDsWRg5giSX8cSJQPBmpDdqhnAfYgEF7io3tsc8erfdhmQJDBy2vCQR",
  "key17": "3XkdU9PH88oz8VFPkuoLrYi6vgc3kLD6CmKaqvQXVFhTGepJECTWt54FoiBnszafSPAHAGcfin1hbT52hmNjkXF6",
  "key18": "2tN6rgBt3rt8zEJ6NxpApND2wpLJDihHHhhZQpnqjmoSBLgzREzgwUuqmg6iRn8SST1A2GqsqSxm28xNbbnwrYTo",
  "key19": "4uLV8NBzABD8JjdhkBdGDKD1a3RoAupYcRNPspVX6wMu3jbEHb5MGL7SEQBNoxcRxsMe7EEWwb1FVX3Zvzo7K8Wv",
  "key20": "67HBzAA5JLVtKFuyvjbPKBYhUoSqNF2kN5wqbngrGHf9xrw4nhr3MMNEHL5Vctb1eftaCW9BRQGnAkAWkBo4TXyR",
  "key21": "5NSJeZzWANkUbWfXPaWagNiKF4ZyCY5WxuZ3qFRkhKxSnvKsJEuVGK9ifQnCVtXayjDGMC7Xjmye6B1Cqds6uYAd",
  "key22": "FcLyZNT8WGc7o9KktmnihGm9xu2525CGoAZETB3uYgobq83dVxB9dsaRPoArJXZpfDAv27NHqX2nUWbWy5SMNVt",
  "key23": "2LEcstmALwkYHuUpSRykUco2q3KxN6un6ky4Ebh3Sx1UFEw2kShuwcCHdxAM1Dc9RXY4wqirkAc2kn6du3oha9yc",
  "key24": "XwtSAmrfXTk3wbDXSAHhxSP5KXGebSbJeStVWUJ4UioS8NM2ptvH9TbT5v5tLmGg9EB5gYFmJFS97gitUbV5Zdp",
  "key25": "4YTnGUPUmMNxvHWpgs41QA26DeYsBYi51SRaXVXSdu4qf2j7US5FAjrikXkEVtQ7MXoNnpUiQNtXFQLeWNUAbg18",
  "key26": "5Cqb8XgJ6eohspEfTtxYrYNEfe2g2A3bFfECkvPhz8J2mtF4GgB7Si2qxCMBcHjEbCmAvJN18rSQRKQth6BnE9jn",
  "key27": "42uezyUHgRDXnshNpHfsfN1vWZ3B7TZJ6NJDr6ZDWL191viDmjB9aUd5ARfFpjxUQQzWK8EodqQ7yCfmoMYnSQJ",
  "key28": "X4vYZoqt1dL7QfuVSfihMWM8zQ7LKGrWKiK7oUMgPMyf74qEf4ANm4ZHzf3RrUFPoUbGUjo3AMinpLXMv1wJws2",
  "key29": "3SXdKn6XoUzmRZ1i5TPkijpW1AuocTnVYFgAoWuEcQGgBeBALGiNfpwg31ewouxTnwArR2vDigJppk5qctDrPPqD",
  "key30": "kpwq3ByuGsNpnybPTGvewUy3RcVYfyPzf67ZMRQzQSYxh3KfMogfDgSxY9Czo4kve2SpKtEZEeUbD6KL3KXkYJH",
  "key31": "4nk3fmF5gEbVE7cQPVFMof3Wz4xqGCeQ2YVRv3h44DhSftZszsQrSLmA5bFSqZtvhq7hi8XahQBwvtWAL2opxJHV",
  "key32": "2QtrtLbYcnv4XnAbjf76X2iPdfBDaowhtsG64ApDswJFjuNrnma5KJ5irkRLwekBtbHF2cCRGtQN6CL1sipXTpEb",
  "key33": "2Wjk36LCio1yEQgyvgyye1wv5eJ2SbtiWiR7eUCT9an2Uz4REDkyhTC5U6c5RaeS9sGAKQ2BwNqyYv3pwTrtZq6b",
  "key34": "26fLHDhcaEivGSEqaU5PNerJrFejddevzwWgknUhrHHMxKgGfYADm1AdsuGKGuWGJRGyfhX97qoCXJYcFhh4d6jL",
  "key35": "xB7pLSEZR2wbbiDiCdnLt151iqAhjSSoM4mkUTb3v6RADBCrPctie8C6q9ddWCaUe4xZW4YsZbwkjYB2b3WtbYN",
  "key36": "5aR6fuvktee6mkMGdEC8rxv5j5sRu9pJJnGeafzwN2nNRcGQeLUDwXxGj2AmAG63FM1pKvHKSehAT4BgqoQgbn1U",
  "key37": "JZhTNTUE8HfHNsfpgMXAxmBdCdY2Zk2ixxLzDSEDqFgr72kVt7DkvgoCFCAw2S8RpTe5wct96FfrBjDSepMcAYM",
  "key38": "2jcUR1seQ44Pa2v6ShLQwwNHEYC3f1CBh9yxnVWjazx1cPT9M6wvataca11M1jvjUMHQd5TYWzu94wmrXtXFmHFD",
  "key39": "2cDnPAEcpXwQ9JosokacYoxJkK5hqym6xzte1Sbc5iiiHoUTJvDmERczrGGEvQJdcH5nbM9rsAJy8nPpfTzp7Wb3",
  "key40": "hTK7k1N7A9LDSJzEg6hmQspzR7AGahwDhRJqg7j9ofGFaK4qhKfghDyaTGqJfAPrafSfmrvSewzYJgah1VmZNGw"
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

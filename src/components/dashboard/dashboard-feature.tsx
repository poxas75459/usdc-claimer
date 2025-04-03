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
    "5nYtaFRggsoXASgRLhSYdk9MXqbGUc8QtKVTie2uKoEupW23QStEb7RGdcm45rrYwaTpKXt3c2f5pd6WCdMN9unz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZGGNCgnjpPGdbaAVfiwmdRdxp1RoG25cnE2Wi6XwXU97UYh5yjMmMLHHpdrWLN7iMQ1rjyZ9EtKmgfKMGZXFY37",
  "key1": "2THJuysZ8YMCQGbdKcVCYeaeKVDt9PHnZh1Lr9MsvGezy1ZcK6av8sDnDH2D6ANdmqksmynFDiWtJVoa5SQvzSHm",
  "key2": "2Egs7v4ZZx2FpQzi7izzLWn2Nxh3F1uQW9PyXYohAn23vUrpNEYTs8UE4JVE2iprzeUCgWiXZstjdSahUi8Ra8j6",
  "key3": "BKfw51FPda6wA1vvRsa86UzsWKeDhH8AgxSNkdDvqPr3dV8bRvYt3i3NUdwyDGqtwobBw46xsNZwxRip1HZWJkq",
  "key4": "4V34kYSfgkcKWzaZN9NfzEG3qsMUHgdR9eAthtdkRgnyE5XwsC4cohijXTWnf8a59B5zzL6HYuUCW7xct9X1zJj2",
  "key5": "5G47DNfN91ZazKQyWweUcTPjSKvsX1Qh5Eiuyu1iYbcW3vfka3ksEZXXker2YtE3m6odR17bpTgw9dasVF6UeKgP",
  "key6": "yUsSbacFHr943tx9Tbo4sy6y5F77kddyoq9SEh1X416dCwhNPp3XdpSCFhYRLXDuSWUPZFNmjq6wPSm31W7Ew4t",
  "key7": "3HFPujsvL6hnVwcT3DK9gypzdsqhTd2TrQEr38eVoWJLrYK3xWYJwaz2J5yJpLUHRf5JBfbMpE8F7qYb7ViqrFTL",
  "key8": "4iT832dGzPgQyNmbqXNBegqojuY3stoEqLkEYmvCidXwdeH8NAwiHviu5hkZaw9FCu6ydvtXEiFCzN1XfcUAJ2uX",
  "key9": "3A9QVWjWSmEWsr3gMZoJPZfk5mz3v3QNkbnCfQmGtvRatsoC6yq3yDbteDpQd9sbyRz9p8on1Rn4JyTzt3DAA88p",
  "key10": "4rVD6sXEXcK378DRiCuJHi7y28K1ChEww7VToqFk1gQMjVgMe1uHdau5jRUpBxQJ7q6HC5WmWf8v5UmN7bFz6jst",
  "key11": "2MTwBwacWodHKmUmicAZQCoaKJS9KeuhYPCdNozSxnoP6GN39TEayRMTkjsRc6vznAAn6ZunQ1gQqz9Xbj3XEB5j",
  "key12": "3JeKJtFqdr3ne83sAM2MWvFDFp33T6b6tyMXb7tehozs4n9kCoDgVWugAVTi334WEELNXYdrBeDnVDXuJaZr9p4F",
  "key13": "Do2uD8YYZNSe8AXiRrjrWzCbPiHZWDbwgAHLeeeE74MmiNEm5JukRWKvRTnkyAZyyXXLsTZ4LkV8SURogz7ygNL",
  "key14": "PYKTMkikNaNCdMi2oNDNFU3f1XKajrZicKoVVtTA6NKNCgW1eQxSYPU7iUqG14vzNrWhjktJNcCFqvowmrbM5yC",
  "key15": "23u8SG1YffeZGnBbGoyEEE8hF7AgQReQfe8WjbQZVnk4ML2DDEFXRTumkithGxnmUD7RzZz6KrZxy7HwGwsGjYM9",
  "key16": "5s8YFwaZk3PtceEWTLu3ij6Za9EMKQhQSJ29CDtkrxtcnJg81ovu2krMs7E33fySbCC6EMZuHnTpFFR76ei54fn9",
  "key17": "5Wvchuja5nHbRBvvToR4W8Va6C2RS1nAYAN1YdRTEjykD59hKB2hG1WHRjAV7MSRrg7ZB1CYToJ3AMvSJGz14ipN",
  "key18": "DE8hVKXHo2c2ZCJvpgyNoQm3QBHhJgHs2sHRWajPE141mRqzBm2d6VRrJRwNfb4TX9St1ksLLqrHeibSQGwVciV",
  "key19": "3PRdbW8ZPzG9rxgGgr7H9Mm9AygG7DjAwAyDqBnWpWZ5q3BjxABatfAKArxGstSZfxJeDJoEvHFUU3mbyj79s4fn",
  "key20": "4SXS46aHRRBdW95RewoAPi2zG4cnobgEHaBWqCRPR1Ck5Dkt7cYBcDY78jnMEeTZWARGbojke98aZh8ztwqYjSPQ",
  "key21": "4jtsjofhttZhSVHWuRth88gRokBofTxE25G845n1dJcwqFhVCFcpGwcKxCFEyjDYkHJ63heaLY9Qm2DSrxb9Ayci",
  "key22": "4DDY5eVifdcZF9VanNEzLSLu5jbV4eF8sbz8MAT7JCKSMVtjwx1suky7YJM2yAR7xuJLPk5fgGwRtZhpHLvenkL4",
  "key23": "2wqXJvcoLucEZFk2riRJxE3vdoKkAySgaiibW4SD9M5azACBWjNBwtgMFnuaADqhfUn2mbvUNcuDwNHJfQZq63EM",
  "key24": "2oPQjnpp4MX8PFBSjLkc8a2mYkS31QDNqfsVcnyVwrQi41wM3xUK76P3XTC1LMsXERvToYRwxQ3xeW9T7vG3MvTb"
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

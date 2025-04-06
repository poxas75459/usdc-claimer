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
    "4gLPu3aU7by8UBRiinKvWCgvJ9j6Y3FbYPVMbzB8C64Y2VtbLAq72yk2zmAyNawxeRqukdYNMqcRdkwTrDssD4ph"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vW5o7Lop3tQdGQSpV4uEahJoUaTjHTxYvZUZXu31yixGaoM4uCRdZRcLQgN9xqyf6QgrJ9os6Ltw7grXDhRPLCG",
  "key1": "5C3dmMotwqLneSyet1m7kZobKyg6NCMMviVptaqXN4cvDbX29y47KYv2QJ1oqLLrtdAFjHBfVh6oHYM479WwbLum",
  "key2": "5KADtsYsJUtizJK1CoHdtnghPGtVNeddqcMSZzBuuQQBRHnbdLEjKreZPrgdnpXZ8u7iLedFy8VvdzPivB7iMDAq",
  "key3": "5N2myHLVtZNt7rRewWoyoM4uWGfN39pqaRriCD7JMGLyvoes84rSdvWCUcYiCFc6SmhmMXwZ4viVJLvma1wp3X3N",
  "key4": "5zzmgv84Nx6yv8429YWyHkDkeEZPMmhbmFgh3FkxLF3bGqCYRLRYdxrLUa4y16B7jgug29Sz3vr5aTLZdGYAsh4r",
  "key5": "3vB6oLKHWEideNBggr65bfa97YT5SMUyKUgTdM3uQfNoB8QmWcvYYnYL7pPjqH5fkvnHhYSrikjCdzHxhPaC8xAd",
  "key6": "4yMQHDfhWY1iFbpm5nnf2DeMhgLvdNdrn7nwxkwRERu7DoNrnKiMRriaVruAVdDTVrMYqp64JpgAAhv14GTRnDRW",
  "key7": "34ZmX7AGXCCw8BLa3qxa8XHycnV2LKcxdDd62yyhzBi3g2FeocKLCCd62THmngv3ig4hFaZcA1NMFuvFTbHM9z6R",
  "key8": "3bmTMnbiwfSY83Uyfu4pGK4dMFebfAd5NWHPuJfnNymR2PkEjZcV5v5hhvtwvaV28bfDZMdW2svQXfBFWnf43jNA",
  "key9": "48mFr1ERZTVhXfXFBJKpZUVfYkPsyzjXrpJNf9F57CbSr4LwnRhBuNZLRQs4c6NSvPQ6qugE5Gewr56W4yQgB6aY",
  "key10": "AcpCgsZd8jLe855avTLfe49K6bbcSNW5uzaMkSpKKR7sQjRBnPEFRDx31TMSsx8CrQDw5DeRYozVnUJYvFLTn2v",
  "key11": "5sY1HbXEkmi5zRZpZUgr73YpcWgZjZGv6pxTU5yioL7zs2L7c1nJ6KJm2x1ozc72XRwrQpUx23Qx39ueNRuhASyt",
  "key12": "9nfQe6hAbjbqoxMNZ2mPQdKgmDUJwjqchAmbHPycpuUDMSU9aJycnJgAoZyGLpmmeSAi1gwVPfWQhSoaJN32efa",
  "key13": "9HmPo6AvGRKVkeqxLyUhN22FJW6zzKnjsCZXqnmNS6ay9nkwGdayKCoGYfCambJeGbPyqeXuQ6rG6aWd1ZGUY1k",
  "key14": "4vA7syAT2ZcvxBTp24YTaGG7iptbavjLKcEd93fB9JNZBD4RUBt8SmhZnbEC8omcZjw6SKgxSK9NuvEFdzjQumgJ",
  "key15": "4JkMXbMuTfosVgUGTQbGofQddVWwbcgKrVBHzzjaEqwVzQv1mGP4XvSdRjCcvt9xrrAn87zhWEEjXiLPfpc3qsd2",
  "key16": "4GNGneBknJeevptQ56ZyPvFsceGrSfd7xctd5wnSarybhXphUZ55Ffg4Qthrt55ezTRTxoFrvMUtaYk43sTGkRgy",
  "key17": "3i1Fj4V2HptbefQiyrqFYmUC81qGc5VFxUTrnh2MEDipni8VBfMaoyFCqrsS5vovMz2791uZwErnrYVuyQZVghNh",
  "key18": "62oiLzHwQW5XSJsSWR4rxqi2U4Ki6ddHNjg5UESdbhhy5Fd8knHEHVtpvsbSVF8zbADL5M5yDjUsPHGBuaS1aFRh",
  "key19": "YPcHgfSjcb3ZUUGQrrXo4kXKTxCoz5pYnGBexrVujnYqBiSiGXRFMuNsEJNsEMhTc4isDuu8fGuzwcQXX6wepYo",
  "key20": "2LqzkQ4zzCJHLbZ8irXi7LJV9STUZnMtMSANYkVA4PspjxWcku91he5CksVBiqsfAkv4ZzK19f6Dhw3Bu5hDED8r",
  "key21": "3AP7jUSgeUoCpdwhrE3wmZsLZLyYqc4stn2SHns1FEQJg4h5VvvZb7Qq8idsNMKqkLS5WHyyiSNJ2wTpzEXZAoVQ",
  "key22": "5dzvUREyJomHQ27aAgs6EfD95QpzWJDJwUPL6k7S9jYS3ptD7ze9cjGYeWvLz1jrZ4NLFN5JXSjbgShpaTPozHEv",
  "key23": "4q9VAhefp8B6uByfGJUQo4zus4zjfsZNdJUriCm3Nga9VJCLExskUpRZ8e56m3cLTYYjjYoZaB6JWJ91fkbZr3Xe",
  "key24": "4FH5iDYeBn2UrhVeZE94DJzFAfbuENh8Lzessnnx8C6mdNEXGoxXr3Y4271f12tMFvR5MUDHZsqhjsp88rmq8jN4",
  "key25": "BZfn68v1Uxvb1oScx6Kvsj2AkwQvva28xv6JhJmUQbNgNL3LvbB1UqS1RSXdh1yFhvHysK6BPzVjc7FKoGVBihs",
  "key26": "5uREhoXKXjVwNbp9WWMUt1KNo5KkexWWuK79Pf1MaGVBLE8fHz8h1PqYiz6kLtRad1sbBUAWotUkN1vMk3p5YuhF",
  "key27": "5sbWwxoFeM38s3pS5kCHnjRonhbJMuB98b5b6tfX412GN3gFga2JaFZ9koeznLVhtbVHX7EWW4NzrK86WFBUzehL",
  "key28": "2TBb4RajhggaN4yA8ZGDv28AJz9Uuw2UU9DG5JaFWf8yKDZaC3LJfzhELNqidLHiUBrLRZctKiE6EgEJpFn7MpCj",
  "key29": "3pRw3guS16A53aon7D26MoH7z38ChakK7F3Y7vykwMhywR4FYJFTw5DwYLuyGRjNQsGk9jfX4hECj6ai1yCwFw63",
  "key30": "43CDPe1Shd16XJBG3z3gXjNhc76wLR1gSnM4ofrUrzERmb1ncVeTgFS6i6nDes9qwttHza8PtVKjz9By5Puax7fy",
  "key31": "55DEUTVJVmUamuct42fQLodpTDWefaHPPcdLpKcJ56y9obxcBDz9SE9LyYVJb8zRDSJ6WZQCxUCy7YrGPfc64h6v"
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

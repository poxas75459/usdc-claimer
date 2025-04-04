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
    "4tdfZtRAgQojsCak9qtWzxHTQ2iV179GHqwgScjWymYjJRa31bTrEKPgCUHrWusyLmNdtYspvrMpMfF4k5V5ip71"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wQcQ59BpDDam5KqL28Q5L6zsRL3PP8wBER18Lu2cJHPcywsn8c74mza6mrT6GL6w6LYXrFAett5S4g35CHVkRx7",
  "key1": "4eLvegMpsRfiH6pN6643x46iCuCaPjDKbRitCAozgkBni2X1qRTqQURN559KLsMgW9TDTvckwPQVgPK74ZivE2Wf",
  "key2": "2k1xHXVNce8aYbuArPfd73cSu7BERUYPtW6ScT4po1omz8yPUYvxbbrKtguknzK8cuu2hJB2P7t7HceuY21UPsNp",
  "key3": "36M6jtugWntkP6QEMNpJcBtRXENAA8V1csKdswRwQksnGuY9mFn5Yuimjag1j6pbfBZwqNr9co8hoHnLvoRULk8c",
  "key4": "4APqo7xt7TXWasVK2mv1PD1uruHjrwMkTAxkw9u67E24kQsuCYBRmfYXcYsUxYG8Nv63B5Psx72KJpUwJc8yB4yt",
  "key5": "zFnozNwTP8DcGCN54ADbxxQUbqSX6UHv23xd19A92YzE9yoMW6RExQBnqs8jobZcmx6PWDxGNU2Qb9R4bQriYuv",
  "key6": "3hLasvxZyYPNcHWog4KfshEja1G4B8VA4sJnA4bHQUgbpbpEThe2wqtsvyXeUuWjgxXStkX3HAFcMPpcoiZuQRow",
  "key7": "5cgEW3nxdotYhPeeFwpEhmCMoe2teERU7JvrTVkyojbCMV51bvhG3gSCwePkD5NPuxv5pPeyCykgZBgyMZg8NuHv",
  "key8": "2JLugWvcYhsswQTSGqWrdbQqiZyXTTU6nAjiPBjHFbcZXAA5JSaoYBgnWVo71cWq5LTVb26TTojeNcszkJfAEWiD",
  "key9": "3BuwaXwnc4wrRp44ugS4qZZoYHLfzYVgZeXu7tPcbaWE3xXZ2yGqug6CPhZoAYU3K9eTkJgRUEaBXoDqiNiwzjVr",
  "key10": "4676QMG4gpbf72u52fPeLcCRgcfMtEcpKMTtotNqPvoqWAtp77KrHFjBJDgJU5KirTsp7ovpV21vBgMgX4vEyefh",
  "key11": "2qxH6xmY1HUo9eHPNeAUgjS7Wqmb8HC24vZnuhSBP3D4fn4YQNMcRXptU2KxGxsPE1j3wHF4qqoKf8EvXphBfbaW",
  "key12": "2LbTU9CbyfCrYKrmAt1LsJjCXUkpdRVkiv1ejp1pRXFoXktzWYeD2U3cshmzWXccKTsWgE93dE9HBAS2HdBfJYfm",
  "key13": "2jMwf8eW5xnYGPbWCkiv7nmqyhCFvCUCZ2Afn6WBRwtw7YYmyy59oqsTLxs12FpLvuUtu8yhosDa4UxQYBM4ihv4",
  "key14": "4R1WHPAioknxtLZwxGHCRBxHW5d8zXToAnzDk8L9aWtk5sSkvd38dgDr5pF7pJpuuyqGxeRnRTaZn84XDxoDkak5",
  "key15": "4rW6JuJgwUCtx9T353hSjfQWQTLu4hB6VnEUD196aLgZRpkobrcajXfbxYjQmU6Bc6yCoxqFMuRrcKnkiUgKtbGH",
  "key16": "3GKDZCQCDHfRYFCGuM5nGdj8GBJ837kRwoXrQvHU7Eeo2cxx3jdfp6HePxyaoLGekapmr9Sy3LvKvw4NEpRhDizc",
  "key17": "5ZzL3HdgRfgw8ko5b3Jnppb6VXQ6a7PEVXN9qmSjhdyT8F7Npy8SfgxkoxJFYN8VY9qta2ujuvde1KH1tgAc4Xif",
  "key18": "4UgevBbnVpCNTaPW6WQKharEBPstNQAbcwETaCTCM1em8eVutyKo2cBkpbePxHDGWfkRoLLCGoNFNshnTQwk76tf",
  "key19": "DXmDspKbY1bRHCkANuPmdggWLk8J4KUYA3wnzRoEFQ9aUvDAtWuSH3teojGAtHwFKPumcZ3MUUFBig5CJbUK5Ck",
  "key20": "3KYLTJ7363VemgYakM69NsAvPMTz63ZhM9dcAHpDXm5FaTyKpz6fHYMZ7mRuJFajwHPmP5Q6nFenQziStA6p1TVV",
  "key21": "nBAwCR4T6hCe1hCqsoGjF71teawNgQGJ7u1Bg27DhbU7ssqcqfJtNVScyMzo6w95dKDUEGkrRLYfrDArYP7R877",
  "key22": "5EG2ypo5PDb9EXmkxWM8Lv9Er5yX4yHm5KUkmBk1oYigw7CdhixTLKxfPiezH2WooxHnTek62SnQKt2fGYc54CD9",
  "key23": "dVNYYBjkSqXmQPJ9v4gwtF2aWk95XMyDbD8SV75bXwzCwW3Lgp4J3WH8Z4CnhnXyFmXEwMa9K1vMyQ5zLdqXjq3",
  "key24": "XWxS8KySqyhUZReGCYwKRiYKxaVb9JpXrEw83jNgEactA4VjjcA11TbxcoVJmANm15iW6QjPX36UsU294aDdUmj",
  "key25": "3H4iFHzExDoR67ksoo7w35AMJ2dbfhg3yvFoAbvr2kFv2eyQZC7Aw8WU9MKHnjRPvAVcLMHmgRbGsrX8R7piT2q2",
  "key26": "kHVkyKEXMits3zTYamiHntDdh9Lx8ztX3F9ytoq5gy89PFtfeGKFhXqFCG6fgM6dFdpLTruzAHsZnnQBo7QuDk8",
  "key27": "3suvwwskLyFq76RccSFN8UyiaZgNbpWf3c9ddQwVhdb2f4LpJpdKCeN3br1MfXngY26dTusQBvs5RMWtWzrCRHmL",
  "key28": "5npsjda6QgSebSKrJym2MFRe1fX3664WWoaVVDwvn3EgD2CxzYqjBw2bRa5eEL8PXrNXKnCyHp7xVHNgEhaKfp3s",
  "key29": "3bxbTMgWKEuLBavbbtr8poqRcKc5gebFK5onLrEUtHRULeZeB1h88T46Y6QrsX6VKPXKhVpCVDFrHud92orF4BJf",
  "key30": "3NjLzeQ8MiRXDsZYQG4m4jVGs7oLxMW9HNNTqin7YwHVSZBWLe8XVJAyxPaVFSu2yr6DehrakBJd7XiT5VT6fJUN",
  "key31": "2nLKNdzVQseksW3oHNnV4ijCSmy7JWq7VRnYiMN5PJoBFTb3psWDL6ewoVr8oDfG3iZyepPnTs28i1MojQSUAg9W",
  "key32": "4ES9HDX4da7zvhJxjpHf78AxxZo2C5UiPEpUmkf2JofyepqVaktPHEZz74Rc861LAwmf5GcxdWwTarqis62sidWw",
  "key33": "5ejUHQmLe841UWNmKT9Bh5Aqj98MAMFnq6bNGrBMqZ2CfuWaeEv7CNJMpr3CzgSpEuzg64fH5yEfU7afFUTjH825",
  "key34": "49RADGaHVQ8brifgX4AGSvLCQwf9tmUBiXjHFi5JdYBAhUAr3ZFtgZqHMcXZdSe1N624aArD7VmxwX5q8GAdJwu8",
  "key35": "2VttqqEMyG14XdPoDUupNjonzfXVdThiiCvQ5KagDwHXhK45HmPG11MwyCGAN6tSRq4FdyDKhebVAxxBFnU6Kw9J",
  "key36": "4RYpv1tsAS7MJBWFJNs8yUFoCoCVnbLnjpLbEGHdagzonQfN6PdDTdgr3Y9Kz19WNz2tq7juoTwyiQqU7PZ2bkTK",
  "key37": "34uWBwvsc2FrVYJLMpqabB5VzVAB231SMbGbB4he7xpkEApJuwsJuoGopm9MaSgeM983c1dp9WzQNjZEDTJoEBWb",
  "key38": "3EM2uGnK325KTpXhgyLb7CHT8oSUEcFnJ8qB5jhdSbfXmbn7S7kTPDVaUyK5YDxt6XNPzb51qW1aqce192zi2F8m",
  "key39": "NdJBp5qFkd3qph2CadQtRTztHucJSqKtQ5yww4PwJ1E3bZ5Zx55kKQW4ucyKWsHSKsRazWVUJ736AdFzL2BUuRD",
  "key40": "5SxwNSjkc5xfTfTPQxCEDEs28HSkuzhbbZHzSqoyAFKmQ1Bo9SyoyNhygRE2r3igGywWT7hFpz5SUHh375tD487M",
  "key41": "3xpBgmJmHTobt15hpPZzzTaYXce5hX7LD81ofc4zaKvXHsHkcCv3nEKzbeMeGTgf7Jf3TkwB14LVKNtL2z8N6dTn"
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

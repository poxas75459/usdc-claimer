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
    "Bxbzi9aNi2CwvyQNWrpBb2cee2t1kBqyK2i3JN6fhw4Qw8AWTXVurbLKJLXrVaNUcD4YJY9JT3tHAdwhtv9pZKP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28VzazL7NGChvATJvn5aEeEoCEUhP1KkAhnDk77wv8fTJcFHsmbeuAat58cjP8NVG2yRZFPqECZ7nazbo4LB2CAJ",
  "key1": "4D5p2M7GiwXCoiB9N84eq5uCxrcBHLciak7NsSYCHjifvJ3GGHfeG81ztXEzHJW3QNeccQVH2sViDZXiBNiJ7Czm",
  "key2": "4z1mAYbqDqF2oopUdbQmtrP3m7SVB2FMCXDvvauWW1R3p1Vx2DqMEJp72TyNETpfvQxoU4vcRVndbWHd1BAMLGRj",
  "key3": "3L6GeRAwZYoRQ3rP523J3cfuTFupkTbmKt7TV651mfrbfgLMyU9XMGDy29g9F2zkoqTEJBJD9Y65sZZZUjNj46YP",
  "key4": "UEZLZgUqMZusMT9jFCgJFTvfcZyM1fnu15BVQgRM3E3LKPgLn1npBue3j1KVnJWqL1NpVE5kHF4Edejy4fCc84v",
  "key5": "4WzAfQQNcU8LqHUMBHj9KBf52St5uvQLXkhDEidwZBttmKzDARDZ28SmWocDz9N6cr2pqLCpQMdv3xuoDrJPt8hq",
  "key6": "5joH92X83vZkgWDmXKRuMXYbMFUCeSXC2PgrAwHLU69dsmGKerCPyaLXCWhqGvbwmZZDeCD8dUPgs3B46cWFSQEZ",
  "key7": "4Lp9Jj6M1U5WFbAbzxhQbSBEsHNdEWPvDRtirEogPBfrp24RmYRUvwhmEcggCsWR3oid9fTiBDB11tKZSYVdyug2",
  "key8": "YNpw5y7LzM3hRkVfYFxtUpU16uXr6Dcq5gZ1EKEt9LPa5tZmbB7mLX6jb3mEqKNSNg84KuEpqhTaCJfirErfgTc",
  "key9": "5bFNqR61pfP3KT3aonHxzrWqzQcaUci2t9KFjFvhSq1ZfqPpYkii7Xuiep5HgAreUpAaysqdmFTqxEuDqjqGgg6V",
  "key10": "5qUf34QBJ7SpmXc7KJSvwBxxEEdb7mdyezLCpMzo1dnvkSJGv7f4WC6YqB3bsZqxJXQBzmZdJUScnvEU3N6kVCGt",
  "key11": "2TxkyGLuGsAHgzgBQgUxUVAF5tuRtKWic8Lnqjychm5ALwTX2jN2fAsS4ctC2Q2SNtjj7e5xEVaLHhTh2vTbf9Nw",
  "key12": "5hoQkmcraXBQmLKmXQW68tSoXrkiEDWEEJRaPkm535s2KkYwnNekXQtbxXrvoK9qrum9Cg27GnwRt2dcYqL5hVSV",
  "key13": "2TVJeLvguVigPM5seUoiXpoHuwyUDGo3aWP9ximXpxrMr7fePGrJtsz4DFv3ByeTPcbWD6znzQGgrs43mgbhKFnk",
  "key14": "4YGNgMSyn6PR4NakfYdTEVgUPu4QCd9d6WYXxnPSN1sYPUNpuJuAp4rhFWPkbYcBhWyUmkBAKNvLDD13afp1UWHQ",
  "key15": "usWTS9GQndn8SrfHnkEUL1YQtJFoHmurPYQNVsw3JPRtAJ8rbY8Qjkqok5ah4LEnhe63qFHf1ShY7jP4bXWyCRj",
  "key16": "2hSGGBiZ68HQ1AkX4fHpfAUPx2SGTiK7n8gR35maFKaE2TRfJqwRo3t2DL9AaaXUCJ1ahwdJE7vdTuERfRksVxWr",
  "key17": "4GwzewYFyGNGjehrQ7p8dSenDZn4A34YMvoMUd85Janzpp8q3zRj2YPZwP41P6gJdZXA6weTTKogWYeHL5ufvqq9",
  "key18": "4mXN3or3e6KFV8QjTf2QfsUrcqMAxBvBL9LPSFmMHqouRPWgCDd8SMH6XvUfjXoGb5S7ZmSCYcHXnX6emSKYiAGk",
  "key19": "WR9MN9Mw24k9WDFL4zTa3YmhAyLee6as5AAAkiRGLnPV9YsBs15gHGa4HhavpnYzhmnZF9ohmwfMTeak6zvCCAm",
  "key20": "PbtRah4fB7cQ6jwdkHr6sTKW97SNXZM26cYY9yvxYzjLqy4BSumRycgpUM6UZSggz98NxbChScz9SBtKFaE6rPx",
  "key21": "4VuYaqAF3H4b5T38hRpcgo4ZBUQKzcFzGecM63JZBwiGst4qUKqtLRtWuzznf5RLJ7RuGoMpGkrDDCQ4SVZ53JtK",
  "key22": "a2rWrjjZPvCiR4R5YjTgi8K6FNxyCLcKpdzAiR6JXd5VXdx1upoFSAnoBEEA4LfZWSku6sbjHrcjGmC92FKiisY",
  "key23": "3rHzioBbH2ySUgiK81Jm3C863GUtqExd3ED8AYW8HbQ29wKgFMt6BatYfcjeyrGqhprAauTwHqKVh3H1JUpeSBh4",
  "key24": "2wib81kdTU1iDCYSzMok24Tupt5qzxR5uYFnypWRK3Sz4UCYmSYu4yCUsiSP7H1Wswinh5EUvwLocXHvk3TWomMR",
  "key25": "25Ws44Vm35Qe7dp8tewd4XLoQh5XhTFhcPzZhavmvdLvcPFDU7Yt6VmnchJzgZaPwGMfZsCZM4RJ5jr78frKsFrg",
  "key26": "5PJBmaSJpaRr2y2GtfndE3n7JKAN4DT3DZyXLetej7JKbkSiVc6JrjP2ZzSyLUDJiYYAVoTzvGjzHdK1XQ8WHvfS",
  "key27": "NiARKKS6yc6rBsZmu9yVQQcud5WyoacJZQE324McMRyK9vKrTYuSer9SZkKgBL3zuAzgxpbFnF26m1fYRnF2xKM",
  "key28": "5McKh1Nb1UxcQns1yykddA2fTYqdoRwqAoFBmGkVxkrSJiZ3gB3X2BDB2bJ66kgwjAe9LBuMFmePRAPA19RWeMo8",
  "key29": "4ccD1LMFqceke6a9wRN8mQkHV3ozqc7VL5yvSffWy2MDDR9r2m5SnXJxWopeMzLCAJ1VK5LNPJe9hqEAXbrLbxsC",
  "key30": "3BWQGMaE87NN9wnYH8vkXADiEojo9L88ME3kcLB5DfTCvavfdcbsSsz8hGU2QEgZKFEaJARm3Yn7C7uHkUXJwfT3",
  "key31": "8GkayhRXzNLoTNaywdLv7uRBLB4eCpoVByG3EeHGso4BmAGqoHgjNSvzCqYRHR4BGezvfxWdSKDmJBNguEn1jKW",
  "key32": "46mF7nt8oUV1GNKrqvoDxun1DTcNVMdQr3C78zRc4BDXAFG7SGzM3R7nBcYFPES2tAvuVgGT6WFXgJ6jCi8fMmnt"
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

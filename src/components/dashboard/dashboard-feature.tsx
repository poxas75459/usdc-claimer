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
    "4Vz5utYm5QXrTnaGMNcAfxd6adRMLNZk38sG3KPgWGMkpzsFaaUdmUoKBCysshX4poEY7whczCHHMHjaCNUUtom3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QDN2HSHzMkmuK3JhdH6XYyX8iT8Rs1EGkttaqohSnM6EvPRKf6r3wQ74w77bhEFkUCzGdZkN4bSuPXpPkJNtvUZ",
  "key1": "4MwNWzv1CNnzhyyUKCh9XJPPNxYr3jLVfp11zSTdsEfjiaNgFSsJywq8n4f7WcfmvypMDGMnBHrCXGZKqNZxKCVK",
  "key2": "4TpY2h5naNKF3W6AuSz9HGarZN13EUsRrbdM3yNjTrfrFHykifuT5xuZUYuucM3bH5kSyd4nxjbpAMKMqdGtERwS",
  "key3": "28BZcSyuWLTxP4ppfXLcCg7VwJT68D6veMcBwsCSSkHFcBbDsFKjFjZhZTazf8evDTMvTDxkjP3kJpe4MrvjUWFG",
  "key4": "3kk2dAyYSmLJaS59DpN7fZmEGG152nsEKq8YfHFa7LATxob6VBZkaqivgeMpUBXziM46mbkotD3V9GJFaqqzmU9",
  "key5": "3bxDKoaXFg5X7MLH2nC3utxtt4pf9E5nNWGPr6zgfi1BYb6kvob4M3ZocWd5EQzzsghbHjZw38H1MT7cB6P2DfPy",
  "key6": "3NTF4fXKa2Re29TtDwM7CkZpqiiK5uZCk1aNhvB3bFT4yq5jg6uBPU8ugRpxzwRt7FxnNj5V2eNEAdy7mYCtv2Gn",
  "key7": "3oGziArn4Ysjf4NroPPdy8XG46zit9DKrB5AZ7A7pHwwrw8v4qWbFfP8Sc2gRrADoTf2fastMD6LVTvbEzRVGoTx",
  "key8": "2wjL8KAxeFs8XNkCua8fa6MegkdjNJHn1nv4CfoF7ngTEQwffVmJD2XzpQ73EeMdQA8SKyw66x5h7DL1ZYHXHXgd",
  "key9": "5KXHd56RVJpT3K9bXJnwDENjUMa3ZyzGApjMPRkDpbm6P6kZLofvMxEx1VnLfjmXEYbfQZc4WentnC3gGLUVagmr",
  "key10": "3k9a84hq37C38xkGH3FDSwuygyVxeCigWbaawEmwJfkGHMnaKKrn62mxsWaYiSfCMxiw6gb46D1s4EnGDXGspUTg",
  "key11": "2qku2qNWuictbVjHM3kkb7CoY8R1aLApsaYFhBLpWEGhEkbFXeVT8XEBhJBTVrFqWb3yLRWxAnkLpAsdmr4yptvn",
  "key12": "3iXNPkuUQ6GD6MozMX4fwLex6imbNNNdz2a6ucNSGcJJzfeanqw1jVtvur9YG6uJFiWGLxabkmUGoYG8uyUjiXK3",
  "key13": "gqidQ5z54hWtQRngUEidFWGN3MAxH9yVzqajDa2DNXyPSTE1kGYrwxduUF2fXYhtdQQyDU8qpRZu7xtc3mVt1nY",
  "key14": "VeHa8aba7xvVW39Q5DAbrX3bXkNWRNycfL6RrfPPJCq7d1pHBMyqvCxVkfJZamZRJGRLyW7n7MoSpdzUvsppRUK",
  "key15": "FYuDw5UpVaNr1cZnNoTrCJgWLyJNGSJJewmx7jxGmPvod169Tix27nV4hXtNYLeZbUzQr66jrdaHr3iBNwD4qM6",
  "key16": "51Z3XX9joLXHgfTzVSiY6EUrLSJo9ypbgshm8Bs3DvLqPe85ZnEx7vFKohLunbZmj7yZncHU7rgXJeiNGHfDg73N",
  "key17": "2xnfYC4c79Jpv7RjrF7oGFkq29pYXRxXU4CkGk1sTvQMACaPXy9QAjd28MrVcmoDVizQ4nLB65U5MTo1uXiJRps2",
  "key18": "2W1pEPewrNHafjEQz56dpenKLbR72TKpoFNTJW6Shuk1S7cgiNedZf2gySo5PZyuVWSaV1g282WKJS2hZoc6ETXx",
  "key19": "2Y7Te3weho6kjazx7ELBkqdmsGHJdhXfTYYyYQUPqVDah4WfGizQJDmamSGYCfqaYhDH83S5Z1S7WfSdHuBCfQ3k",
  "key20": "5emmZzuwDtYgmmoY1GmwDCce9yCcoy5ZAcAJrWiNp1Ey2FmEyu6oVSM7h9KRbE2bEAzGoeNNHX1RBq82uuwRLuHQ",
  "key21": "2dnNehqSozeJzTrxD5swpcdaxwuyPEt8n9McsPMEkzjpaVY62ohW1HsRn5qcibvbVVco5r23FK1gEhGjiPtrqH8K",
  "key22": "4UJDTzKmA4cRiDoFPN1aJTFHF366npSMJomvv7TdDHw8oWuA1uGZm8doGDEUnfw16JoFiUnBmw8WaXTeoEDRkBt6",
  "key23": "nGtxeYFG5935u1CX6aXHAYcADg7xmSjxjZ9rXHSBdcrrVaXnbmbthDk8qZB5tECAViUZaaPBRLusDcqz5JSuc27",
  "key24": "3wKUQD1QeJUQSt32cRKYfQRQMKHBA8zi2fYiQDF6kNQwaiA1UVzJB21o8GLqhigs827ZVkAp6naK6mkwvMcpDV4k",
  "key25": "2WkUikuP6SLGhdgjaJd3xQ6sAjF4A9jvgHZriAeScT9PcT3qaMv3P4BB2WhJ9nrqqJu7RvpmbtYUSxVwi31f5jGi",
  "key26": "3vi2fxXaP33e4Lbmy5feHnzuppDKDzUpDmqTpxRvuCkfWKaKKh3XLNpL3oc5SWNo2heBRfvY9vgT9yNePrUd1NM8",
  "key27": "5uPzgmRzgsPrNM1mEMzmUGjbuTjRqnexQXS9JM9bwUuYaASiJgKV5GsoKBG1naKEwwLYidPWBVUMAdDgJdbPPzwQ",
  "key28": "53kyRkifNgvfas6DxqrgT3WKQp9z8EQk3m36WbUgrD373aV4NHp9ujy3zVVFi8W8Kwwj5Hy7YrnTSxXvBAgKtfsx",
  "key29": "4m35trxMozT9AFgh5sdb9mGevWuafuJNL4p1EME12iuLwLSddak5bwBmNj2BQXNPhiguJA9HghoVkAvaBrWSmHF4",
  "key30": "5rSz4AxEM42QjWPncA77n4MWTLjMsK337LKdN2VykiMEXAawHzWrn2mLBKbad2D1oy3xuM7YqA1GXpdRvuTJfeEp",
  "key31": "58QzdpLkH8JAZ5ozR3ghQHotXekY5kSCrCW2PsrZKez5Rmnt91m45dQCKgFUVAt4GqSmjycN5obgK3MUynjsVqNv",
  "key32": "5EP17SFpvfncqKu1ZrRiztg6JDbvHHKNZNCXGxC6KneT8jjLUGDys5xHYgGuuAQEhoMeDdncPPqULpcqSt5PL7bA",
  "key33": "3qj2vyimNNVZiAsaU9uXvsgSiecooxa1esCZE9Un3DXkoQahX6nC2hjaZ9nWYcPQ7wxuCn42oJDXZ9Q7HX9K8yhw",
  "key34": "5TppzokXeLvG7xRfN4oZrtVJro1s6fYDyF7b1y9SHfRWYf9e8PKQFN7SyU1RRbpH92ZHrAAAmYkMj8HfgRbekbo7",
  "key35": "5CtatFQ2kAD2iNPM4eQkTCKH8pbLimZjqBcE1kBTY4znrBKZZzKxHtAWDfPmDVcrC8i5CypLq99RCu1YcywTCSSS",
  "key36": "5TtL4xHDcHHEHxpN4PFNtwUeD3TprkEBEv6VR3e9vHpzY6tHvXrbFurrD3owwy48448FC3DNdYX1pArg7UekMgrX",
  "key37": "bc18zARdfBvxWKWqTP5X6CyM77gP9M6cfPewGMgBa7hn915Q8AJJfWK7syxiErYTjBHHUzZGdimwGvLYVUo5Xtp",
  "key38": "4TJGCYMQ1GJdNin29DzM837XYLp5eezTFqKcfaWLaRw9uHVdhJgCLxPwbMx5Jkq315FNBYWWZFiFB4q6KGitmeZo",
  "key39": "wNyQz6N7NnE8fkhJET9GNbWfYPvPy2atq2ReesuYcEhMArRGXHy55RK94orHPtsk2urbXaTvSDJ7WRaEXvMmNYt",
  "key40": "64DvyxvGb6pAy1szihhTzUwXcmcuKoyMcyteH3jFVHYCFQ5DPYYrz7M3Ly48CkbVAiFaNtaSbanmoEWgKQbbgofe",
  "key41": "4YanZGgvkKvAJd4JpdWJcKJqLEWF1JshZG47xvvK5oyPYy6HN7J5Cb5nNVhiWQjU57jmtBNCifEAFbdYxZxcDps5",
  "key42": "4L2Nk7XEhw2GBRVYkEyQgb8rcjCFcGhLi53T9FbMDHxvCrFntUgho8pvt491tyZiYvU47JXqyfgR168SCVHDrG58",
  "key43": "32i9wVgm9SadY4Xp2u1vGKne4jPq3DBgq6frTLztv7gdvEWXaGJuomSNCq8UPiSuFj4VVCUf3MSEcmBpFQx2Gv5f",
  "key44": "45iT2VDgPs4xvMDKAq1KkoSvwPqQnvsHB4QKKg79NrfKMSnMAV3jkGkL1q4N34Rd5shT9edfQMHVfeJPnCxL277K",
  "key45": "yoAxzU4Yzb9a2sjRKmivo8gZ7x7ayyfVMaKH1WERf5vvTjKFdiT1N8nHhD6KcnCT9nXZ94Z6DQXRGutsmPQi4iS",
  "key46": "5bKgkQcJckviJaogjiRiqkNwvuaXf8XjBzx19cTfy5PXjU9vGT6pwnhSL7d4fStJ5VG1acL7HYUXPaW1v3vvuBJa",
  "key47": "5Q8o62P4rvML822VXKnntxzf2jQuyCBC2E87QfhuNARcsiEdKTNtURyQprTu5bYJmPTPmjxpnqTXX1NF1myhkH86",
  "key48": "5bx4o8WZ8NsPqhtsT73A5y57DW2zDZpwxkU7nX7wVYYQjfGwJa83A38Lp5s84ztjJr57sWHSpDfbSfjhoVRt7Wz8"
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

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
    "DN5Bc5Gf61LtGWFLA1U7yXHCsAxJLoCtcRYwuoMehvjdWRSQHDZPnUsoUirqntMejrRaz2pivqE7wYUSCeYZEWc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EiALVcaqyJG3FxH5XeGhUSWETgqEd5vDnBkScK3xEsuJYsQLMMiktLAGYUxyo5ceRGN4i3B5gP6YoKQykjmEbLZ",
  "key1": "5cMLc9LsgGz5bwtL56GrFD5qFrLwyjP74g4DKTRfmYmAMyU74czB6zHboRQ6VNzo1MENWLKpsD3nfD3h6G15wPCk",
  "key2": "2EhxQrP8p8YFa4NRoKRPaJAPPCsjKXFjyvokNvUM9egEkH1AuLgPPCttXZwKood6g92nkFMCyYLAq2qGAkNzzA7v",
  "key3": "5bZHMJAsnSxGbiEEEsZaodz7UiPgNvfYgC4Ggh5ujvEYjsAFQf7CNmwjkxDxSHWE6rsUHjogn1RFwFNPui9D71ws",
  "key4": "32zZYc6yeHAoZSEUxMkngXfh4Lj1VfHYJy8fdvxFisRix8Lx573isttmabDdViTGLbCmrQFNvntHTAZdeXDiVffP",
  "key5": "3c8aNPUgJroTu5nEhyRsux9nCWhbenDeqtGCKbnkuqapFwEM7SgZdKWahiZRtpB126CyVgbs1gGPvL3wt4MWLfpW",
  "key6": "5vMCzYWmt2CMfKvcX1MfUoJfUzKyVpDLT4skNF6GQfEypfDxn2KMVrtKGz6H6sUXKn8Ympt9oeWP4MhhKxASPpsn",
  "key7": "2sp4gzoTn7rkASZjT9TAgmorz47JTdR413CFNhDGP4XWDfy17nxZJhGLpmWJwaQ9AetYDdWHbXuv5xNCXYuBDwfo",
  "key8": "5z3a6XSq8FWMi2zMNeY8K6WP9Y6xMBWVg7WGEy5drzRwdSRQUANMxYJMya5yi1CBuLWfa5QQRRr9D99kpWcU64QQ",
  "key9": "4vuxfb5mZvJxr44db9dhiJ1wzT6RztpbjM6LpcT5JYFs4MHPshVWriUX4x8kv1WYuw5v7eodV8nAuKNAmjyEShkU",
  "key10": "5UwRLWTyxbPpuCq9yw4fTKviyphFTmCAmFhYAHTSHYczkHdjHPMybL1AeMq8gZmeVPGWWoUJ42EfzNaZzp9yLTwQ",
  "key11": "4zaogYNVvdnrhjGvtLgntX6B8BkLPZhPhgquXMwrgBnPkKk182AREkRzLFL2Px6LTeG4XG8fse4gxG9vKgqQpsSR",
  "key12": "3noSxUuQhqn1G9Z7gTyWGFX9rpsL2gQ6ShMzoFMhLw17Ca6wRtfwDgD1wmBtUE8hTiXfBNSMLeUoVA5B6dzQp7U2",
  "key13": "2VkpRBQejzonGpZm8U77MgBBdTGj1P4jvFUu8HBSwTNYLjKTNWT9gfGxT1kqFiQrLGuwP7jREAgaHhV1j9EmUxnP",
  "key14": "65gQGcBV5KnVZaufwQPmtiaHPY6qNjLHSpLUSt4BdThUzkFjXSeroNyQqGar3LuiZaRiLXTt3faGpuoDWPA3KgV8",
  "key15": "39E6EkqWgYsijEyQjpNb5vJGAoMYE2F1o8aGNyNBNpu7kMMBVysqzfqYyzHSX6G1pArL3yrampAdMvHsAJGshCiQ",
  "key16": "3gyxvBGGuUpZQx6t8BApjPSugZ85AWUqBLV7e5XmUDtP4C5wJPZvm7BS8fWTE8VtYrF8eGitFp19qtEc9ucsSSse",
  "key17": "5P4LcUYtfZdc63zgvsDrgorT3omvqXH258a7hump5bQsSpKkFkJ95SkoWvmoxeyT7BdizuLsG8vWxCD2b3Yt7D3R",
  "key18": "QsREK3nJ5mqCnRPbUBSnwXxYLzdkKuffZ1zBGiiV6dhMVVZpnArfvU5op1j7B15zqnziZo2TCHxxvEUyNHnhRtj",
  "key19": "2J6GGHibKRiv3rz7nQtEzpSJfYmwAaV7JVKC3aP6ynWFxDznLTDxMKWooDNRGh3wvzJQbXHYthKehGSGmigBKAPk",
  "key20": "2D9riMw465EV27hv6iVaHhQKjk5RYDKaNF2hsitybC45YGDuQawDsdy5DWRBqYsgtRiGPjMc2QaJdHPQLATgCeub",
  "key21": "41E2rBFbK9WBASgpQo9pVJVrHsAmY1kiavsDoeopcv6SDqJuy9kNTUknSCYyrPikwQspKh8pvrMBRJj9z6rxJ6nx",
  "key22": "5nyHNqasr3hbVVabbrwXMdueGe7k5dKnxd3Ynx1QVt24iR2wgCFt6bxLHUZDuFrqGkwzcAFgaQTK51rWCEBnNhCj",
  "key23": "cAefV6rRsnq3UQURM12GnBoj4pxTeAw7fhAFYnZJv8XXkMZi8V67ug96YmZ2Qz9K4NV9oKomiRTrEFM3R3NLP5U",
  "key24": "2SYm3XVLynjWqiF2XsFUKpvSMuWBy26gM5GyLMV9fzJJgP1EFG9SVEZRunBVuhNVWndCrBWVPgaCMdNDoV9Nn9cA",
  "key25": "3BjKtsKvHGZbSmwHpPgWoVhKhFJ3ob2XcGZWezt2EE2K8DPMQx6VqyEgynk4Pd7nrfUsrG7qJGmAwzMU8SY1bdoG",
  "key26": "2h17iF1qLLPtosK2fDfaDMeQF7jysFmrVFopFsv3T5D4BdTZ796Lq9dvvpgnsBrJGVktgKvAsCvBe58Xfw7NUtTN",
  "key27": "3p9HpCHzterax5SDzQSLpadNms7WNxq1AcoyNp62ykKqe4CfzgnB5VbuQeWuBuvPgwJ2rok4HY3RxcuiERqEyf8m",
  "key28": "3d4n7xMZcJKGijvS9kK2UBKftq6DBi3U7EGW89TSSCEqty2RxEVA3MN3WC7JgfDmY5R7FtoCkTDJtYz4bCZHpjUG",
  "key29": "9UeL7hXAHmX2u1zDWz2xn7F8oGJKTUrWt4P2gP1rVix4dEsmFqPG3aaWSfQYvLqoL8PWjkU8K8AUQWDCmbuEuj8",
  "key30": "3dNyKnoS6Ed1DAPqkWPpkQyGp14LTt6LA2Zp6MUTd5dQJZbGUJJtoU8aQQRC4jcwYSWsr1dTXRY1i99LGBLbPpsz",
  "key31": "2WJrPUH1CHtG3tNMn6EUBq84EGqjCqRh2G9wqkzB8ifWKfJztsc8wtV5ATBpLWaUYRCHwzibvv5aZPf3tXisJTga",
  "key32": "32yWZ4yYTg955Y2KbAVrkXb5qJr38QDEDSS1hV1cxurCxrpiLStSPKj2oMTWi5DGdCWJgm8qjTnYAJBZri9S1JiR",
  "key33": "3bVPkCuzmW8VD1pxuBRQepmADkXe5rF1YibYhAwGvEZk6jXxYCuKmpBAikc65ykYtmqeS1LKNikUFaBEm4MZDX1J",
  "key34": "4dobEAkEXKNyzrCqJ29zkMPqVrRuNVwRvWVAjWgZqdrZwRbbAEBDmLoFFkV195W6kg15xmBHeoq33DLwGkJqBv5s",
  "key35": "4fyonbym3gaCmVQuhuQj3X7xZcHcBJcsDShKmw1xwEai8cHDFVQCUXyh48noVRjWYp9nZUzX2BzzGZYFqk6MrgcK",
  "key36": "5voeuhiSeVgW38NiV9d52fsvD65jPM9TNv8e2b8WNbtCXrwx9MPPSVJ316fQ5ZsdSktQUHhdRY8JhPta52cMXoix",
  "key37": "4f8HxDBpmZLpAkfV17iehKj5VQrHFSmH81J9dRFPaphHsDt9RjiapDc18aguDAuiyWjbucEzxsLc7aPUwzXm8W3H",
  "key38": "5YqcW7DCqdC4wZbxHtN5wegBZfech1ma6yHPvMsV2YX2yns8XRxVozZLneHRfH8h9iThpFcEZGV8AWtC1juhXgsY",
  "key39": "2NmPG2BmtF9zu3P5XAbRLs8KhypA8ZT6SpAPc1fr4jo5SqZAYtf6CNKHzTp3oDxQUDQgPjsKdf6VCSdQNjvCbqTq",
  "key40": "2tBN9wFQD5pyxkagnwUwXfvLuNQH2ZeFgY8bSPJpRSE76NYAvQhNhCYPMfqFphP1S8Ch2oLbfChAkKkz6NDNVyZM",
  "key41": "3dwmGKQUosiZxjdFW4rmd1LVg3i4rWznmP8N1fpvDLrk1fWxtUbaaQV33ADmrZ5eGt6JQVH6NiCW5nqeB8xNQnJM",
  "key42": "5yT2ukXqCHRCrFPMGHy4wiMpMuTaBzbBtS47uzikudBjohPHDsh57X7FGijzL75rTmRo9jDbRd8vSjdN21s8P15S",
  "key43": "4Wi1Rw6q5CTtNckGtACxi8ogVpn5o5iWdedZZopHvGtumBDr1gDeL8EwrQzeqTmeLhCphYWNCitmKAFAhtjeQMTH",
  "key44": "3kZMkk52SXLGPweT9bFnL8UxY6SC6yRsarnJ1CRWSMwAMEX2tHsQprX4iekmm6qLEfD6igmkeCnm71AGEAB1ardM",
  "key45": "ZLnFq7K8tH7x2vv73bursvsjeyneswb6LdZ4jkUadZyXzR8ZVxAL8E6cQCXzeDt7sL9dZsyuiGhKFfF3xJZnw7F",
  "key46": "2jA5DWmbYdwbbhUMbjFFDnGzC2QXUwhYTDjWuJ2AiLrgCEzuEHP445XbvAV4zT3aRDNPp8zDcXhUQ9YcA7DcUrta",
  "key47": "5mtCKDgjwiWzhatBWPiaW4Lz5Jid197UXutwFVAs8z3KJRBp4PD59gXEyH4f6kwriqaZ8LK9a1JQvgcPdobrXiQ9",
  "key48": "5S4WaGQqbY1ZdUFCkHHugf2s7VD84Kq7dPmDVpwS2PeJEU5gBZxJQRUVWxAs2qfsGJgBFjcjYed41JYukNAjuwXC"
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

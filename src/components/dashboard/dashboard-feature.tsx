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
    "27TBgnGmYcBm1xmSmyLRFhPDNi9pEST8JL5sbdSH8y2kAWFyxKWFESuePsmwm6fu9R5asDSuryS4E2kHapRe9HUs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4P7jB4j5SUu96yfkN4mtuE48K65oFu3zjiuFVTszvPQiP9pAoSwGjZ6CzcV4Azadm6HighaVEDgTVbkA294JEvAi",
  "key1": "4xPKwroCnfyW9nQ266MqSXTEafTzqpnYcweH97FJTLpgesTE7GacPfrz8QE5PpufxYWLRXvta687F5HMD6cxpqAs",
  "key2": "5xxjf3HVgpxMSSf273WNC7jpffynN8ckosd1Dm5HFoMWMkrDHgbjDmJjXtBmw8kQirVrCgj59C5hf9UFBHz7xwSF",
  "key3": "zRRrssYPtYBFsvG5eHvsdoUGEiomXhQYwCHzZXXQuHdpKnQtPS6BWRyXppCvZQ1aDip3q8bszNtccojVtuwWFrA",
  "key4": "2amhVmUoFa4GkrGS1qdUyyqSPqyBETEWUHBGjLxNmEzJq9Rb5jCKKcrjw8CBZxB7KhUyCukp7uJ8AFteHyw21Hca",
  "key5": "5XH3iShC4Nr1N8Xh1aP5faXiTXM1aijkAMKMGJaS2Xtqe65YXAmvgR9CnmuPsh3sGLkqBRtqprNhm3tA52YGeSmk",
  "key6": "4NveH5cTnCPAFqjnxk4ynJpx7jWQBJSDiqGkeAuPG8VhUgtbeWCZKgrCaZh8fGpHHaSbZ1quQmHTQBoZiW4JNbSr",
  "key7": "3jMbY48yUtAN2J9HbTXgJ2CDsMpghaHxMJMfLQhCaBxuaZ43V3PbLoagxDpXxctocV3hwJU43uxsRKViukj5Nsn4",
  "key8": "4jy1MeXfoMDzJPchnwwdmt7vdRoAjpCT7Gf2ubGK8rvHWSnHnhjgK65DsmEhQbeMuzbLw4rc1KqDoUaGq5opW6pf",
  "key9": "2qbzcTiJHBuge4TR14gDv69Gw1iMtFSXCSTfv9brevMFTgKxZ5SaXn7sn1EUhfWaGxYbwzzTq3L6HC8nHMSAD3UJ",
  "key10": "4krbLLCwbUfpcjccscU9ND8z1FBpdaNdDUt4EjFfpmUjBMjQKV8BiBHRjmggsDJFCyW1WKACL1kgCP5QoFjo49A9",
  "key11": "23oKYCxiE1vg8SdzyBdhgrTnkS5HCf9zxMv2HkRErQYUdAwvv3npUSrWPRVEiEV9UYjdCa5r1ZWvZPWMyFdkB5sV",
  "key12": "5CTfL5pvLgrBaAyr9zByo9X1raTpvVLP36yz2bSkJ2sSrH9vGzEKUpwwivoMUds375wphVWqWDL5cRYmuMmbcPP5",
  "key13": "5ks1nUEdVH7MMyjnACXDyygqQNCAyw49V4SGoG69Ke9C7jgqNtpbAgHDmkNqsLi5oFi6VqZnr4JiCRPeQWp9qRgp",
  "key14": "3n7mEXbKnads272djeRmSrbnUeFzfWPwEJNrZ2WcrmiQxf1BMt8vPZjZ26q1kVCdCon89uJbEk2dSYsA8PJwfta8",
  "key15": "3FrU8sRkW5DcBDFVJFw4pFg7W7xq9LuRg6b9Fbc5K6iSMkEVWS75fEfJR9c2G46eQDVqaYFSNStEMeF5tJFCbTce",
  "key16": "4onhNT3S9MhghF13CGXXBmBMANwWXnTuhTJdZ9m7dATHVEtsS3KwaiLoVqmzKnEMvgtmWYiagQWuok4G2xjRTpD2",
  "key17": "yrTYV5sh2LyHvnVYZNLgYnBbfqyA6uAXThu8ohLwLq3TvKkqE5rSW6fv7ZmhwYK9ARD1Vi1EVw4qusT1RCAUJEd",
  "key18": "62frnH6ZrXiwdArPMxwddbPL2kQwxwY6iXbyYFVxktSjpeYUGmueMFFpdCPHA6MfA88jRhjJLpdmu1Dx9EDBRS3r",
  "key19": "M55d4XFofxvUz83Ys1W4rygSJxhytHxAAaW4RmzSzNX1PGeR4XfWKD9mUmUDakEAYQRKXu5e3jCVG93ehwxEdy7",
  "key20": "2W7UeKqjCHiriG4EwxQjC5DWuPXmQa4jHC34EE7rCVku7yRM6gvkonFcZqtVvSH5jTNrzTCtC4S9oq9o2LpMCQtr",
  "key21": "3DVbgoq4xWSdTtD9K4ZPfjsPuCpTMXFRhDdbYQW4VGdustd8KLtu86GWa13TkuAm8hUbsRBqMz58Uroi9SRQycBV",
  "key22": "5WvpiXaXyBqd3KRRUr9JLziuJvp9rCa4yjNghcXTj6W4CNGGT9qnnrCohBRDnj9DPeYX3WpsvH4MLH7h2nV3eokW",
  "key23": "5UMQWA6opzXNgdJK4bkTR9EQzDEjuuwh5vwQApa5HGq6vefRvwP3JHUX9VgWtuCQPykCmVRWpPxkSSUE3Nx4BnGK",
  "key24": "4zyAvsnGi94JMNkEdjJrCn3DKkKmT2rPribcjTvRNEbZrNJiGzunayLqfaL93T46iMaGYnoemFr9tM9AhJEDA2GG",
  "key25": "3pEDQnQKqb1F8FSYne5dw92DZMDxB1WTYVRDL83zpq87iewRbXVTCtwksTWSpb5uXZ8YHJYJwWDLkCrvAfyYiNQn",
  "key26": "63EiF1mtgmigXUmCVQ2Y6pU38WJAN6qmqRtQVhrW4LWmT1dojqWhD9onz1JNmHSCtainq6pLiDKJVEJrGBCDWHJJ",
  "key27": "5o1vSq4PupLVEUcL5uJYeuFmPCEpYpga8FLrgpXyfXpx4ziu5kcwuUYz75CfbHYSAjcKhVdWshhjCyZMkAQFVMFS",
  "key28": "3hT5hHt2Q3QWLqVKGdzTcMUUZ3omGM4ECMg3svJ5JPpsTT4zpxVRHoY9R5tAu3rssfdJSihSqJQ6b3chiePHnpLx",
  "key29": "34qtnHdWUtNaY7YL4j9q5xGB5QfN9ygEqpwRaLXPq4E2b1jJobxABJgD1MyrtyYoqRqwZ58i1R8sMP7saG87nTcp",
  "key30": "66mPLsp3PGcRgSPRoRV9rTw1UEWUwHvXeDHnhPb3dzc3y3auHZmRspiWx3NVKXh3NtGeJWPZYa8kZC7MzrT5z3Bv",
  "key31": "4xJVknY8XeB33hstkDWxxCXqt89jseCcJkowNJon3rfTt1wiCPdboytpxNpQVtGSbdup1gng4oLw451vKGe19UbP",
  "key32": "5Y7siGXVtFH75cHCAiqz9Ygf6rgaAyWvdaoy6sCn2SfXtsyeev4CQPb4qkvyVgTfz2otMhcgH6VrF6kD8otLhBZd",
  "key33": "53XSu3jpywoGPuHzeQrZBbkJcEXNvHjSYbfUtY4wFc1Y9HdbyVFjf3Wjqn56gVf2JdsGP287DhD2VNrVA2GHyAmf",
  "key34": "3TnV3Na8zdaqGKs6MTAMqaPevHqQCNDkE3c9MSUYqeje4CeDA9869CKQoJqyxhHTS7fxkcJyeycS1V4MbX4oFyP9",
  "key35": "xNTfPftyskBW8MFLdYjTRhyRPXsZvAMTbeqEGBeeUvbWz5nXUsGmY5yVgqqbJsrzRpEfjDXuRm9p5zAQ5ugjtMg",
  "key36": "33KaGBcE8E6YmLUgJ3gQ8KwoW8AcaEe5hDn4yXRRrgzQZGfFf8qNabtCX9aeqfa38E2zcTefnGA8r47TaamSJrYa",
  "key37": "5g3WyLBjFjyeukVud8sQC5ytCuZfLG5dX5a5WptrGHyY66P3mj8toJeiDoY9XY8E5Vjp3Lbcbk5S6MkZvWGy3Hv8",
  "key38": "2sbvaMdtPBbQf5dw69D3pH7VTKQaxnsfevN3MYB76TFx8HxUnS2T1bEHxZmNF7hsAhiHVa9kuPrVBydBnpWVd95T",
  "key39": "56JyRYsPWsrqUZ2EPBaVWzpr3K3VPsBntPf2gq4rSfyXnEco6G8RBWZ2Csb6vc3VZQ6wfh8kpE57METwB88ptLth",
  "key40": "4FxLbPS1uXmoxCxTJqveBhvP6H8xJdvHmfj9mPAGKMP5UbuaFc5cBKuqs3FD9VkPckQFHykZTFs4yJQzMZQRjgFs"
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

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
    "5JS8J9bHEk9DnqW6u7HbsUZAWdqFcQ713oYqJo2Cw7uyaxdDnD5whqnCDpjtDMeMKTeTrCDsxq2SXSQDuRrAAdTD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51gp67b23Ap1EvU9rqmAhfzaduLsf1ZQK6741TmLTDXbVMGyftFKbypYo1DoR3hKT8stV9p39ffcA3UdpuLk8gC3",
  "key1": "5yaef4eiMDa5Zm6YR6TB73DkMCJKFfBBMzAzNKgMCGaJ7hCiB12UAjjbKuiQnZJmpRGrLN2nRrehpg9LwiLCHFB",
  "key2": "2a5NBpDZhC7qGo46FuSuuRtWXYemLdAwG93RoswZ16J9Q6EoUkDM4Q23osxSBQvg3WaEJjX2soMdwviZ7kZEwHt9",
  "key3": "Q3wV9HYxj8nwBdvHRNEpenbXhKG2Y1nxVdvYACofhH8bC6aiqhoD27jwFmfR9n88td1WZiFb7hhCcSDwUJMq2ER",
  "key4": "3QoPqsBqhtZctcy55Ua8tbuXvDijiCGHNeJoKCkc1bVivvviyoczB4DNvkxQ1BLKZudS96HfHyHPDgcD3B1m8T4e",
  "key5": "3vwRduspXaxqvfex9uRWXPNJk6x4AiAFwBmrb8dvswooPWV8uY6p9h83HtYwFWY68vHEYgJR4J2wqpUXKwBk7WEK",
  "key6": "2771y8XhVqgv7MhBVbxq9UaiYop8XQxTJvRnujKsst49vwBrgJ7XDAoEKSHo8DuBWmgqx443SdMf4i1vSJgX7Siy",
  "key7": "3uBGBBwiPfY3n414dE1uUoA5BE8A7G3dDJYWazR1thKQVpXA7sWPodQdgshHExaXzrVXRp1WSpWDKV8QpoJK23Af",
  "key8": "3RsmMVicJQdKJjUmS1L4JAyq3PN4jtdSZexm9Xx57Q7Cwhaw8MSaAuy81t4cymYdfbaK7nCwnB9CJ7ujpkowbkGJ",
  "key9": "GgZeNa5cTeRP65s4xM3Wo1vM4pEMFRSMpccsp3srSY2U749ZH6S44Jf98BrpzUzHyR1f4WXmpa42WrYU8ptMKia",
  "key10": "3YMv4xpXa1awUJrMeVxr5TnguJXQmi9rgo5FaJ6Rqg1eHZsuKqAiLRqzWZwyC1Nb55W2X21siK343JMAsDVLJ6nX",
  "key11": "hkrr6bBQcf8n9U3ugfZ4XACD5mYNeKrpu5AbEeNxtbwA9s5c6UXGVZV7dAfyH9Jkotg86QK8ap7RvUBm3tvEDtd",
  "key12": "5wmCgGiGVSwsJgcJzGb4FZyks53YeXNSvp9xEQNdcduz7sXXLwb1DBed2JLapAud6tze8HMh3nd8oWgsFVQm6Pzh",
  "key13": "3HnnHzFeBfYfg3ezdKjzK4gga2mKsK4UUo3xAKLYRbGZxuUiWeTtTuU1KhJh2GMWWWer1eZSnJp4XGUg6yL2KH9N",
  "key14": "2VBgaYWrBSMUqMQqogjMAPKyrVe2YXcQACvrLqgifrp2vo7s5tWZYDybyc4wGDrkqudAsx6YMcPHDfjw5Q3Fi9G9",
  "key15": "53t8hsSqRR6o2SBhDPp59x3LneELPDAjgwyKv4rUvHzHN4iu7QuLXFpA9QhZLiEFArZdrSSnNyzzcf4SDJJGwmU2",
  "key16": "GDyhH1HtMnC7tASvYUtkcJuFxMtpGpKLBs5HV4MnzCe68s1ZC8gLkWdCSvYzRWHtmDzLdpf7BaooQhVaLfxhhQB",
  "key17": "oxRYssA34UXfFL35DyQ8FFvCu5nd9vs97UkQ7eY4dfUhtXEW5vuKdauT4c5RZEU1LHEG7735DCBbRKegrKUvUBf",
  "key18": "4chDsHaRvfWNekmzSE3AnfK3o4yL5cbdJd1fMona4Hqc4sy8iJ6XBWDCrWtC9v4ah3wB9skwKeBqqYiYXmAQMZXg",
  "key19": "3eJqot1R2Qgbtjv8woQjAgd2GFiJUH8Erqwa7Z7GkuL4V2Y9YZ5n5nrEv23drgBuLNhtGWPUs4JKG1A12n5cHYrZ",
  "key20": "3xPs27X26swUC5k9yeTAPsjhsEXc5aYBzLbzyGjnQhgntaMrw66FmxogjQ76PRo591efY5JiZ7jBwRaRLvTZKu7G",
  "key21": "5JdkW6N8rMpQwHZjGoNMAUaPQFAZCtX7qncfgfA4JkjcNfUwSLXYaN9Do96BDh3vzypCwsBF544Mm6oQXxbxGCBc",
  "key22": "24C7PpECk7CRUzusQ4gpLkk2Fo8fSZyGnCPeabcswqEM3Hx8XGU6aGTAUC6gka2w5C51dSRKahUHqvkd1CFZuy9b",
  "key23": "3HcBgpR1qrKfrc7yH3HyMeAj7caCpjBR12muzUtdnfkP5sJZiKWnNRjYJSfVS31AJFu6ZthkrkfgeKrHLsCc1AZL",
  "key24": "5Kfu4LanEvDNknJeQJ8ZGA9XkiNGJWDYP98pUVoKLozSPhmynzcCNHGZ2GG9rLNpKCiDkySxkfDZky6fFN7wSxpH",
  "key25": "2cFJotMjaRxcQWojeGy8mkWSmPdd7vhgsvmHyD2DHU6NjhZk8HcyjkU2wJY1pTaJgHd3dkhr6wuxVZNuXc5JtaoY",
  "key26": "23mQo3YuJmf6bVjEgp3asdCh66pekCozMiajgpcTag1FawMwCMdJPMjHVbasmUv8QmAEFVGU2j9GDRnqJaqWV6CR",
  "key27": "k31NEhodH2vMBmwLWsbQ5r7rPv7mbk2DPc9mGT7CVpdN75Rq4zbWiyBefpuJjwZMypQ2pV9Q4d1tGLSGE55rP2K",
  "key28": "fxwCiQ5YQn1bPbirjRGSZRTTGwRPe4c5QHExYsdnBso7CZ2qGCQmqCA6LdLm7JsWHR6CNUbdatgD8XCBkxEjELt",
  "key29": "618ybaXXLfB4cuu6Nv54DsYXU7jFdo3QyV4nGMfUDJqBKX3gTf1DAm5afjHa2jneZvNh6Cfu6fN8oaUp5nrFYbSb",
  "key30": "472J8mg9gKPresM6uD2TGnfXkRMXEW1bvJ5wyoG2sENCx8VTpnEb3wVgr9qSCw7pGHhfvU9maos2oZRd3UrT8nxP",
  "key31": "5GgoLGTNY19MQq3KXWN72VPxm7T1daX7RqH4UXdcGmVjXUzSuf8N1Nyb3ARiH3UuF6F5aBNTTXnkSy7zwiL1GPj5",
  "key32": "3R8egMWxh7beuAVS5zLdrXYFrhNuexo5smhjiobpERCaSj1BWrbirRn2E4xfUgiKkkSqHvfxpUtAuGLPjuMU2exf",
  "key33": "3L7Vb6PfvU9q67oR2Lb2cFjTJQkKg5SrP2LsCAaShqos9fSJ72UTToFKCN88ck294cjCaQQAtZvzrw8GNtHuLaLV",
  "key34": "4EUDkhxDBpdzxbe1s7t5uCcKHTDk5w1pAoR5vxZVPkYKrZbfoTsW6hwo2m8CLwHstq9HYvSLTwdgQjuFRTWnKSrd",
  "key35": "2CQNVspkuchvCQU5jHDiqvTZP3zoUwrAvq3uX5qxkdy7novR7b4gSrkrZcEXfmj3hfLVMT4yjYiDB1VuVzYbnv12",
  "key36": "642cUQJkKRn5JFVhBcWbQLspJfkg6JFKvSXrNWUU2LmzBw6W98iQATBv2ZK6jCDg1x4aTZByRGhujrpj4ruy4eqz",
  "key37": "RLYgqCJAsFY8wtDKAcam1Wr8pT1GqsqyoLquzXLwFAuyaumujto8XmX3mDqYNap2nEvCKbqdaJT8EeoXR48GwNh",
  "key38": "2TKVC5si85SF2p4yRqnCUujcvrJYKfUdGVAzc5cL7v2jscCFi93FTrBKh33hJfDTnYCawfTBEzs3VqknZ5U3Fzx6",
  "key39": "2DsdTrqCCQT1BsrMEzETo6iHHuHqPRSAtX2vTBcxoujUJ1kUbKUU7mMYchMZWwKHpBanR1RvfgLFJbYRBGxmTYFP",
  "key40": "5NF6mDn135V35nXGnKZU4aL2UQoK5LhVvQyZ8muKxwAhidQxPSN3pRMTBUevm2WXWFsZooofFGtKBdSHzfK98eZj",
  "key41": "5zV17NrygYaNXLa8uuVsst7Byx7PdK8JVbnEjPEgM8pwNHMWdZFzXibCzbLnZTuynkwRFVUVWADwyt4GrSiBvVFt",
  "key42": "3Wjjwr6NUGdB4Dbr8ys4w3YLxCikckH8aZzSvT3o5mAZM2UPDtKhEYxMaPyxc1C9srKtTEr93ke31NxAnF1GnWvn"
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

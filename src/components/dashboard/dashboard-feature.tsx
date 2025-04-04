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
    "4EfJsgB7b22T4stpBtjg1xwrfA6jpRc47ahMnjY9JiEypCdAcme5Egfr7nHnR8huzW3dL2RK5WZJTzRRid2rZu2r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xv72gjZrq5aWzrZy9NNqNDQ1vV3s1iFRgRp7Zx4bj6qrtP1t2x7jZoxWa2z4svD4bLmM1PaxiSMM5SF58LUhLtN",
  "key1": "2PvUkAWyspMBBiMPx4AnCi9DgiDyWE38awPbH7UeEuZ6xJzGXRzAJvtCBLYwfBooJXbL4UkuWxJvfVZGG2TH7NU4",
  "key2": "Sd4LqXGjj7c36gjVGD2RDXcdSeACfFv3ionwMrsW2vsa9MEcRRT9Hox1bFhkvW7dwEv6DNYAap66cS6EtHsJawu",
  "key3": "zQskDqeHN5ieE9zekocV22EauXFzi49Y556LWR519Tabh7eGEqzhu3DemmtJnhth7tUAA54aMSLt6MjvgW26LWY",
  "key4": "3MiVWWCq6ZU6QEyLhry4SFUEFuBacsKCUhHCBECGVVkScW8ffkNnTmp39BdqJ7EePaVS79UYZ7VoiqcUPbrA3Jrq",
  "key5": "3Hj9Jfsbo9Lgd7UoqCk7b5TgLfamKLe7u7cyqz4tXcTVQ5ZX5LepHUtAa8hKBGThLpvdzKsEGs2JqZaACRvpSgQN",
  "key6": "euUUj2fDWVNB45HP45g4hVYYTkJS2DMHcnTksHXCB1fuhZUp7oMF5VPtRzGyFrb84kwhGFxzZsG9Ur4N5ZsazZY",
  "key7": "5fvCnFBmttsbTodA1K98ufTrsGsV4VRqDVHGDbA5oMYNnn2MgAUwErGmBpCK75T5ndT5VaVbQkyGtRmVGm1ii3C5",
  "key8": "3Pwv1QnCY2kRXQrExUGouViNsLBWhsHYf9KE7y1pkVVRBNVXoGYWjTXs1isuigE9qfmyBupQN1z5kEnMqwDeRHt1",
  "key9": "5Qzo8U9KXANK6eYw7Nz2DoEKTjLYTqAXP2c5dZxekqg5ZxYDyp4ET6ivo3HtrgoBSFWtRJK7URmWpAqoeZb3LUsy",
  "key10": "32F6SqPD4YJxKJtcjZ8S1amDd4DWqGkijghnpWba6UwxpEywNxpiDnPmkB3k9Bf3ZB18sMSBohfDAoksxwmjdWhv",
  "key11": "v3CaKm2jNYBVghD7xtRUpcgB5z26Z8G68bLppg4m8gFDzgvAPyfNJnZ4iQh1GNi23m1Z4wghP4YUiiHCCKZF1gm",
  "key12": "62GcbvHeXzdGgQ93nxR4NVxbBjEx9MMHUAZXXs5isKey1fKFwPWr5taDd3nKnAYqNbfv165RF89LBmxRECBYYxZ8",
  "key13": "5RmpxiSr2p7xpUPkubRDC9Cp1zdnrLjhYEpDu4mhKytgonfwYjRjkGuRrYe1hEnDCm1AcQeZPFK1LwGGXSdSCcTf",
  "key14": "67X1UP5v5GpTrDDFa443GTrjuLK53xBdRFPKDTWH1XS7gaDukWyLWUokhk1bfi5CioKuw44RL1EaZGuNt55ey4Fh",
  "key15": "1tNSYkrWn2mqDYmnLHLGng7uriiqdpSXzzNT4HSzJd6Uwqsc8USX1MW1Deoo7WzPSfuH9r6i22spJANWkGUnqZY",
  "key16": "ZJSAi8vrxw6V2oaA7rqxcvHsrNiyhMbmaUsfjE9Z5z4zpo79H9XuCHL3MmVnbdnK8RhsHy9EUnPM924jXv2gEWJ",
  "key17": "4eTt9fUvTKdrMMSCMekgQvMPsJ6DzzAfpuis6AhoY4jCrDuAkiS6zPrGbQxjiz5uEV46diXnjuvVmBwQm6dQTjFe",
  "key18": "4xBQUgPeTP36BwG8B8fvjznTbbBK8TVb3SebtVvfUgUNGxYUD8J9Kp2PTVgSkPrysUEAk8rtrBtx9Y9VTpjcUYzY",
  "key19": "2uk2pAveKSo3ZfzBN2mvw8U9ofeAAUJKNHkVMybCHm5GngCcZRVtHPep8MWRgM8UPuW9c2zzWQWEazD2C43FuCH2",
  "key20": "UMmNPkben9WfGWFAgzbnxomHPzv9dptNPUc5LAsgSuAHHwQXEXaxgaHNswojL67gnDDL1q4qxQrurxfP1t72NQP",
  "key21": "2MXT28dQb34Er7PYuU2n3vUtiZ4jJeK1xVc92bvqapwuLcA3QyBTT6dzGNDUYhRifwoe9jhhyhnpdzr9iFXZAP2t",
  "key22": "zJktvLVmEK7ibL35vqKhHBLRybeUypVmbgHnGCEBa8VU725kshDjxFZ9S6Que9wUPAam63EeHXQpdSv5PXcbpQv",
  "key23": "5wTMhP5ubUeq86Q8irYwPAemmcstvCCCF5WLJmVE8m4npfCMV7xWvNw2s6EFVKLxnPNgr3ndPn2BCkSCRW2Ltwe9",
  "key24": "3jXmMRuZvcC8dmcrG9Dink899TBi3ynn1ahU9TrH6p19RSi4QrNvU4VQi5u3noPNPh1u5KwCqEmGDBiu9tFLBbAK",
  "key25": "4Cy7B4StE8S8m5k6D3Gwue449XH7k85kkne9YkFsaZAB6iYSMW2JoZki8wuTkMA4vMRRapV4GZ2v9HPBGwgf8KyL",
  "key26": "4VmFTLdn8gNDL6Yd9jorKz9L7yDb6UpBrJjuvswpxRRkLDqoh9rHGgwZ8qyxLKbGkN5Nb9VrjTKvaWaErNRdmJ6D",
  "key27": "5YZXNTdPdHQM5DXnfeFCZSaf4bN6bThQPNLEVwQsH89AgietKGFHYA9T7Muzvs4ekgfBTHXdPH8N4iw6poFaZLMH",
  "key28": "3WWY98NtKVssDNwF9PKsRxyQVdHFH3gMDEM8NK1Y7AcB4G4Yp98EMy13bRTpzP2XSdUrdJSYaHMcBc2pYhixgR8y",
  "key29": "53vTRjzswfPFyRpS7BLnmq2bHXFBTkTrWVEENQ8bhLPt27X3ac3Xbv7MArvAVW6MkUxUU8kbRsPtCXQLsndgDGTW",
  "key30": "RQUZKwan7edcECKLTB1ZqYSE5D91GpNXiYmGZgJ9tKK97H9E1PLEQsZ1JwnVConmHtzNT4tnh4x7Tv2DHiVixh6",
  "key31": "2RCdySVfbDAmUL5PDxq2jHCYJHXBP2TvJdjsY6ASANqWbjPHcP8qyLU7DkhxdLm581dt8Bx2BriGrCh6TDDkRzzP",
  "key32": "4vmHutU99s8zKDUMbPQecJcSQ735pT3o72CjgC4YNNWNiYrgfZv7HQ7AeaZR3LYkr1SCtRfGv2kL8cXLqmyXgH1F",
  "key33": "37GUZbqFC6iNdFywtMSUCGhMrZ2JDoWPDbxTAEPms2xH2cb4qY58LHMQrtUbzHSCH26PsJaeXmurTADJEKUbqdUh",
  "key34": "YnM6jq7wsM5HnF2nN6cLX2aH5eXwy2whprsNL56qscFcdxUFUgqWqi8bo9pniZbL3q5foxN8KXnNgbmRQ7osExd",
  "key35": "2hjHHusv6txxhDi9GGdpa6EUf3EgfSM9RXg79qd2XhAsA6R3zbxGVk3ZyUCy8ExPThCS7kXSBtka1MW2ibdAB5ed",
  "key36": "36jPwKNiSwc24DhxqsPy5XrD2yFkKJnQ7utsYEuPAg2eg6PUbjftmXoBq8FJAA7zew9uj4Mypac1CHEJGQmBZ3Xe",
  "key37": "3gW42FmppejoQbGFVQ4xDPsDib8CLH21x48aL2BK3vCQLvKQaRKkCPUTJ4TEj99e4opzPmhZhXfSkQ2NSFmK5PWM",
  "key38": "QsSvb6s1GzhUuN3a4GsvcPoLMkBi2Jc2a2JA1Nj9BYXQHFLoXUMWdjKbYb2jWEDpw7JWdLGSE46dsFRCa2KpFeA",
  "key39": "avHJ964Ybkqef5MFZdyKPTSsAcpovKdozf7Z5jSU345d3ER8wxXkJrdZ5f32cT9t9jiLSFFVANyE71bg9maQmva",
  "key40": "5z7kDPpYmpjKNeHFdsWxP8iuFtC9Ki3MD8DAH7pxQbnd1MkE2R7wwp6sDNMi8ggS562Kfz3CyveG63oGQPXnETcv",
  "key41": "4Vjjnxm4cQZ7JV4m4EuohUbz7wyY9QXcdHE6UGehcn4V7RYxxV6sJzr5i9Aowx7VPwQPcmEgjpuRuEwkVzJmL2FR",
  "key42": "cp5cKXv1wk86xfTdToQpZxRP9phZ4qxUwE6u1zLE3Pvmx7AaWwVi2aXignUQZSWCZV7ZHjbNvEKz5FBWVW8tid3",
  "key43": "rGbtBP59NgA7nv3q9wEcDhqd9ECpi7MatbwKx94df9Wde8bYqW9wgnAK7vQgNsR4acucT3TfmEtPmSvCdZKn4sN"
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

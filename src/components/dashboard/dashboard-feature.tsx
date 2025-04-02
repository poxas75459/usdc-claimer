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
    "4A8ACAC8aVAn4hu3KKQSpR3JQBuiFgyt7DmaQdLC4y3JB89db8xDnenGkgffpREKshKxgXagFZoDx4eJEqY8W3Xt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wcR9wqiiu2BAfiJkF2E9zFQuWtVuZYJLNfpyG4wS67qF4VUMqwU5qpyDvsdPzA4sXPBKZUyjU7KRhUKGosaJbLK",
  "key1": "5848C5E4Xmkj5RosgQJ4b7bRjuhmySyEPNmCE3EfsYVr7EpKqzgLovKjFjxkEqZf6nfc7gD2KToCLEton5c6LoUt",
  "key2": "5aeu5bBAjapXtWUvBWBbapefhM4Vw6UbMeieHENbzvNwT17F1atqJNmfevoQ9f4cXNW5QUrVGQQcDnB3Do9tMvcD",
  "key3": "jd12u2NWKXLxU4V35HpiXB3rU4hSwg6yN35cqknDpybaRuWq7U6CWvjpspNUwe522Uo4kj7F8AmHmhynPYNdW9z",
  "key4": "3YNvDpKce6KQUDzNXAWb4hGhkDn4pht6Gckb9YhPtZpdN8bkyPpEpp4AM4kBUNxpTsDuv2JcRztbB6zkrVaXYWRh",
  "key5": "3AHN7NhchuksqkWozScs5oipmR5ZzMs2BvNfhADWQura2Baq4CaBHzQpoVPAoXA22FgntsGjAvAPuTUWhWijKn3A",
  "key6": "36rpdZRtZ8CMGs8u1s4X8CtK9tUzkwGV7aQqHbbDawF7Fp8aeM73kTbp2AhnJxvTGm516iy2zKAXEtDk3cktjuqA",
  "key7": "3iQr35erM2epBYwwkpAdftNsNyVfrF5hrDFjTjByy34PH949DQTPSkbgKRE5dFeXhHSE7o2Dff9SmKaKVfUT9hKw",
  "key8": "2czf39duZJXF7qct14LH5Ks61TzLoRwWatXTWpLAG5WCCjC9n4kvACJShfV531kikekv4vVFkN4KewoKGGsZ4Q7j",
  "key9": "4dRskcyiLrJetrEumGr6AhNcM5khLKiZizv8DNNqzZyiFzCA4uwLgtuUbaUQFaSUaAakdkyUthkgUVsPBCFA4itW",
  "key10": "WMzf9mhDBnqEpwSo1LjgZD33nUKx8gsJY5jhYb6qpQDYgaXaiXkUDemyV4zcSzfGLgM7mBYyu3oUuBiym4y45vR",
  "key11": "5QX3gXtEDiyogBteqdDFygfWF9DK1X5ZDi7MnNx63emLJiGskfTrBzmpAjzsvHBsH3wdJjWxELUXMgYeXiXBYG8",
  "key12": "4aMiqvwrYVruLkBrPtrpmim7BnKgFUfbFnGjrfYaqhwjWtWoJPJz33fEgxexYc881LLDEpaj944jcFvtJZEa6SR9",
  "key13": "4t2MUTx21X187nBtsfEfvyb3sAEz6QuWSnMny5FW5YGbQRnZ1jRbscnmrXpe73WPnTWhfSdeMkaoDBeQdyhfpLfv",
  "key14": "35wzdPRzFEPV9PoGH7RvQAQiLFF7ofc31TUCtMdwvXL3q5SPec1y1QUFn6vcgdTirnEgFrgkCg4DsDZSbdn92Ak5",
  "key15": "36H8fnBTkwo8srG32of7HeAmNfcWWfBMGEmvrfAoS16oFfwDNeSfSrQVDF2HLyw8bvWi1PatgfaZbvagzeagKdU",
  "key16": "pRYmwbT36UnAVheGAWQdCYxatxPVm889S65CEucngg62wKtugwcPV4mHBTENk5236HvUcCkrLA931BWkquvL7qe",
  "key17": "5VUKfxcBeEJhcycm2Q8jjEq2M1aJv6nanJ3yHMZBV4a4eRisLvUZiEeDARU4SWr1F8iPkafd6bS2LNuCBNkmW4rp",
  "key18": "4cQcuzxPppQeFxuJBLokkNbEsfRqQRacnsf4xw9MheFG84JbtFcVFjxC9cjJaejZinmRR5JCzchsTk3Zq4ndbrCR",
  "key19": "4A9XPr4XxgG3B3HcbZaDuRULgb4qGLCgLyo1esDrPqA5GMDXw3yqXtDATdthfbENNcL3KLNoTLbfi5jEUx9mWwYc",
  "key20": "43jLHRcJ7c1Nxffds1M7bmNMtp9dUFWLDdT6vpme7uLyKSwgnxrwoD9koJebVw5HTfijHVPx7YoAZaMCxLJgpPFU",
  "key21": "ctXkZdEhq3mYhTCRW94nj3EAdwy8DczeZC18PSQByRRfNA1ZpGDBE29TKM5tyUWhBZQg7B11qyPd8DPo5t7dXUU",
  "key22": "4jGcH65Qf3J1K1T1LQpCCMWpYg4qXgt7FppPMfy3XFzMKRd3YjYcTGzn7HjnqjrX7CDkzGgXmH1hvbvZaeq3rmMF",
  "key23": "3YtRLPZZwU898H2ZZNrvRXqg5GKCsjnAaQeNaQozsDpMx4QrLJFGeyJ72xZGksspdQciY4y2aBYjGARYZgU8vUrZ",
  "key24": "2y8SLUDM8KeYhYHouwpGaFmDmJoDUAS5rTgZ6BPY7vRfywPsyCBThPuFfMh5zdWKJ6qa1JygFB7QYpE9gKQjoc2D",
  "key25": "nzx5WStfcc7PjbtxvR1tuxhKHLu39H2bvUaHSwMzYwEWMGap4gJNsvgHxCRGiHbVEsvwZ7zPMs5ghYY8C34UntL",
  "key26": "4YWnWHMzDk41UUT3eLp5M3SAHwNivqAng25AzfXuMGk11H211kdfU3uzdBHtmycS43swhL8DRFptQAeDG84uHZcq",
  "key27": "23dRp2inHkuAGpniZp2q75jbyCwUJE8bihMfjfwbvHq6DoogLqB3gg9wAFUsG8LFNQmvmoYnNRSPN9fNDS44nX5e",
  "key28": "4rdQ8TLk8JHD4SyyJC2CqoQS1AVURenJiaiLaMubxn7st83EMH9tVKMJdyEF5RaG9M4M2eS8461XJcL967gVZx4d",
  "key29": "51t5B3xVQaw8x14atUx9k6KZgaeTtv3m8L7u96U6wVVFeitexmkekdw9NNvwv1NyrKPeNke8kjjRafnKpH8BnTYt",
  "key30": "g91JuEBh9fKPdXQ8Uy8w2AVMyESy8retrRcU2xoddqP6nF51V1MhLFWLipJgzetdScXQjUniEFL7BBhNs8XRcY1",
  "key31": "5Uxwhfc1WxAemUjbezjExYuyimw9fu467DgCQHMtGU7T5poCt1gs13Q8Q3rQvkY4ZgQqDvxXKsw9kqq1XtqvqRpw"
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

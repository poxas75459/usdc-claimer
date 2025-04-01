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
    "5QS2uLm5Dxo6ZZDdBGUpRmwFQJTc6Zs9dsRzecUpki5e2V3wgfrN4xxwpug8SDh2nXHuB2UWPSLEKLKrmy7PzVCa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2isVECvetBBKRinWQ45Rko7SBRpjQEopv6E5BvgrShU9ghK7cpF3JmcJPjd5DARmdfJ6bzJsifagWL7bJRpZyw1X",
  "key1": "3qpxSuBeKw9WZg67QeHrYNgiNQrg1Bx2hze6aEwDHT8HKS8nopnuLhszimMMCm6p5MR1amk3YVBgGBWXEcvf8qvE",
  "key2": "474kFgvpNcxzaik7WZALLR3QGfQ4GV87zd4ZVLm2GuRJ2wmKxYUgpr61sJsFwaaZPDLYiC18Eb6rLqCJY7WvY1iN",
  "key3": "2WC9i9hKs79A4Wmff5XiSUyuwLQEeod2jU4rxa1bkPM44DuV6uEmn9upie2Rmx33JYd18T2H1QK6soerR9rRPfd5",
  "key4": "4BzqjzBLrDrGbcf8Guag2Ha68ngL9K9WaT8MUFxG1CTBVun6FeLmjUJPmXnNweSqBzYYqzJeeaSJHrPdeKak6x57",
  "key5": "2gn7zeqb4MHMMqcKET8UfrjjVUaDWx2U2NhqW5A3gB143FSD4zmdeHMgWLhzU9JjoadPRTwLzUh2nrwRXL8uhFNU",
  "key6": "3bws9nDoecz7gkqJt1beSTre2yXzCkPvQFuJa29QTfHDydDckBiia2sH5o4mVeHKXGMHvgA8iVZ7NBTmZTbmaPAs",
  "key7": "5LtSXoVoY2t34QWfHiDBbjRSQ9zxFedWZUwB1apBjDQKTbLshAfr32MqrxnG3KeKXLzjQgJLxGNwq3TtjCRm54W6",
  "key8": "2esWC2ZC2QUxZoiksuJc7jgBsfqy3NFPyyCWUt9GieYMNHjLp7gwC9zcA42frFk462hTK9JRtk2zGMRZP8L27NME",
  "key9": "5LGqo4eFGFvFiAJhe4tMsfffoYvJRBaaQKr1cdTafRnUUraXrpxuFxGXs2ifyC65xferFT1PjXBhzqUJ4T1eX7oo",
  "key10": "61ZJCPtd3u3yZ4x7E2q5kMHs7TWyd4eP8FJ8WczBE3uRmDtVbpzKrGmxMcmA47KxvrE1kV6mwgeVGB7rGDLyo2fJ",
  "key11": "2dMeKEJ4CYp7C2DqskbpbUdTzXePw14dfqFpWps7MQTMS4VjURNJAaRMpkjtLWTNrn5sHLS3HpdU2CCVVFHBTvKG",
  "key12": "zULS2GAwDx3LyDxeX1tJCkZWd8AxjUoZDkaH83nh9Dv8xJDmPTxZiuEVxnj7qoSGHR46jMNQt98K36tEZnm8Zms",
  "key13": "35LP1GNR3BzYt9bQZqhrpGgBUK1mnS8KYSgEuDgaAA4dL5B2y4LgdLPKjY1CRd8Tn9w8sEijfHvryoFfnASEEdAi",
  "key14": "tnrhX8df6uL5JhiYSyUaha1621tjQH8fK1FLwMSeexy95ZjPbF2YrRybzP7KLLVdefKN9VUsVdqgGqFdzddeuzu",
  "key15": "zQwKzSJgPfguvQzvbzXudbkLGSTY8hwDT4uRTAD79qv4JhGA8DhzqfbCzAbGkCQkDm2CEYQzZXEFvXA8xHGLHKr",
  "key16": "3zzfcTBo3vvPBTbzbyyhFemU77XRLf2i4LAqESBQusGWsXpuQb9q6jq3y59zm58n2aT4bcTJWnb76pvYqtEwwkYw",
  "key17": "424rAypNWtTjPc52rJoFQzAXMPqn5qrcTPY6uoDhCazhHvpTuRCQraDqaikxpa13CRi2wiHXMsckHwMDKVMskUAP",
  "key18": "3ezPEus73rZepbVy5pjcTytBGgn4gJEmCUAGenU2tv7HCNj7bPkuSWHAJVUazNEv6pjPN2pHA8Y7AugJZRhSNbSa",
  "key19": "2SkQuUGWdcQkJvZRfqoxJC1qxHdqK8k5iKaSYQovQKV6U5vhpb5q95A7HAZCDDHkXAZUU9oM5JeDYEmeRBDsFovn",
  "key20": "5aniXq1v5cdHeVUC1nFeYWfNdxoXKwPF44jZyTeVRuGvJeAD4w9oZDkCucV5nWmgsriS2aEvdNXRftJkQzn47xAP",
  "key21": "51NExHwN7xfi6rQTUPNZ5g7k1nCnAyWPY4wCBmXqRr7rcRYUQfDnxh3LBX33DdERb5v2VQXyB8oPCJJ2GMyjfP3D",
  "key22": "331fZKWh8FNiqGCsexVKhfUkitXYB1LGYMy2UWBw1kyaqDdkxNj58r7u5UFhFfNKwsjJZjrt5ZxkXQWA8NV8e1vg",
  "key23": "4RHg4qnEk2Fa67e2fEJztKvxFTCb3LfaM55mcE6DksMhV64kuQcjQVj1pUpXCa9pDAALQb9n12GByKtEdc2hu9wA",
  "key24": "3KiJfXoLWeHGBE22PFxWoWQWwUttKqAfg2kHp5DAkgRUmECVJQFguN6P7yXL3GmZbn2Vu6MsM18jY5VZoFuv1bdH",
  "key25": "3e54TEcCkPazY6ocqKidMWXYM2aLqLxuJPc2s2Bs7YhKx29Qx7GD5CKrnFy7eDqrcWHARvfPATUg3YwpFPWtsG6W",
  "key26": "31iD18eUjS7WYu6qugigVoRKNQ4bTzTRyyLdW4DdTSNaqcDpRdaMBZLXgbbVJKBuVQE4f1pHrqctNe6rnb7nZBzC",
  "key27": "eR7mRbrUvQ5Jp6uUP7XRnEJbHb3GTqGHPA77tsZDKoS11sMDGXUavcv3QyYVDW4LSdSCq9j9y66xwCS3ik8ieKM",
  "key28": "4DdPCtJ78rGZCHVWzcPzuYUrhweDckgDNRXFHiuv75yTj6Ke5QVkZuVTEZSoAceSHyK1KthDvKa4JBeQiojSS27V",
  "key29": "3Momt9NdA8YhKib5nJiy4opgRN6uTRF6jxhMFBC9UtHVqhXEgLHb9uYNjJDzKwj9ZX9CcrugCMzsh4mXUXB2CGbN",
  "key30": "2DD4pJPKTY6tTtA1PoAVmBfk1PAQo4zzLgzAaCKPSPe8ACXBvi4FLEcwJL9wioTZnX9GbFCPAmZEQgpTuWBQVHB7",
  "key31": "3yhGSvAumMUTGmmUTbrUmMqb9DCpQXwoX8QJfwKnsfaksaQoAojuus93VwTHiwEeevh3Hv3TFbdtVzKChqiPEyEZ"
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

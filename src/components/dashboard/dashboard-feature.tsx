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
    "5W7q5RhD1DxEnqekKXEKs15jBeWo98fVszpjBwyxKYfamJkyQ3mFuRs4Jk7z5zhDcarWXaak1TWcwPWXjhJkBNQo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SGHFTj94UQ657ZbhghSkQFRWUuFV7wat7PRrjRMyRoFtv9auxsy2EKsvUpAM2rgVqhkbAU5GC5dK8fH6kcUCQa6",
  "key1": "hvAcPjFsmXGxqzHvYPS1eQr7FrZjGKkD1Lqe78kGZAsaznirT1UKAVXajcYLc4hU9dmDg7veZBKG9sjVy2vgK1R",
  "key2": "9xabRiJXXNj1LEaLrceFLP1dBcdQ4GDbs2abMU9AXyLXR2YvpVFMirTFECQjxfAABTrs3A3K6wQnfw26GsfGApk",
  "key3": "4Rox7yxjXfSj7uXzJq7BH1dGHVhpxahNQeM22izvYUJagP18zfFbcUBaXaxtsd5eW45Te6TBj72Abefz3vkhKq6c",
  "key4": "7DcPLD5GQDurCfLBEXT85Nt9n13CiX6b7ddrGVTzwLvP91MYKcf5VoG5UdGJrMDA61zgmAukqh5dhxKirhHPQ6X",
  "key5": "4KqkLdbx2PethWb4iGWf8BTeyLmerzngAzRSdqRyQWiGEkihA3c9J4fBhjW9xiEV763fMJG5L6id3kSJf3hbn3d5",
  "key6": "5Mb8f7onP7QfSoyAEuZqYKfPRRHcijQ3Bw1zvbxw357wATzajwGZfWGXxT4iyp3n6yarbx27swV2MbpVT3YT67AG",
  "key7": "z6NX82hyXpYgr9EpycGJdHpanjEzGWHb7QPa4fcuug2WWtyzY6SoPqW4EZwPCah78vrTRmRmezAXSDjYMVu9taU",
  "key8": "4DazwBR6LHbL8xh3KmziY5bDYwdEQEhaqoayqtvbSL6NYu9XbvqidXS9Jpk2sG8dmudNErW9sEDw156ymHSVfUNM",
  "key9": "HCtJxVVtp96khBeJaJYYARExqjqJf4ZThAmCBxMvhx6avtwwSAYFDT3BUWxJUb3UvD3ZRR3cDb3Kba6EvSwDcBD",
  "key10": "t3NTYT73dgm6tF1fuVWrXJRDY8x6xKkmtgnRFtT7CprKWQZzMjQRfsUEkWSE92ZcRUhz2mZm3HCQgpiMeBi6Ym6",
  "key11": "95qY4VBWUb635gSfBy2Rr9BKadzGL7dDMwoTVJJKumA4wH1VX9FKcGXRx4ufgkGjBX9oATHMtxyDgW6LheTo3hr",
  "key12": "24n7unt1PfDMgFAQH61u5bkwAiXCmz1Jr4LTnWgsT1wqdNoyyVTKNsWsNzLUrs7BU23127S1nEij7nQhueYQmDva",
  "key13": "37rtadHjJngWbWDffNC5WCLu3mBbJkZZFRCfVvkPDdPjzHgCQ2vwrwow1z83H1LZo2qfaqdJxANB94kgUqoirLpr",
  "key14": "3ZsoYDSRKBSV2GzKbmZXQu5sfbVzmkDUeZqbrP96ky4xwitAig7MoQi4KV5o4Z64J13xvFT8GK3iyPK62hRC6AXu",
  "key15": "3eZubhDTF5MZGXBXTi4basMGEdrbsF6hHYQS3jZEPag9YyP8dwsLEJ5zkjrxpAeSXsNf5sCBrxsf6oLGEgQVPSoK",
  "key16": "5tT91D3kSNw9SoY15TU5HtahiCtWcch1WNUvRhdhdqfdyEyWSmso5xa3wQ5FDQgowmGHxMDff2LRGCnk95xHUBTD",
  "key17": "4fuZk4BwRZJuSJsjKKryDhkZuD7JyETsdLoXG94Zzs7d5usSHo1VCBMgTqiRnwp5ENDKqnThVXGrjZDNL75mTfDG",
  "key18": "TvEeSVtVK2vsenshtYDpQbRdP5XNCKwVz7SRXXQPiRs6Z5QW4UdrDo4TtbanaNA7DbRx5UQwXiJCD3LhM62C9ct",
  "key19": "3Fxjc4UDqzTVWdfWFtGx7Ui9AMTd8a1du4Hgv9nqBa2xs5w3HZ5uttPTuSuoSZn3UeqEjCDyK1cVZVQSWwh1sK5q",
  "key20": "3stLndxW89yVfuzfAM5CWBFc8BNJFzb9W5Kifobt11eWDsK6di7df5VLsKrZJz5xXbnXhfYZLwatztqV2ePEipkX",
  "key21": "4JZ3HxR9on56g7EBMUwCA8wgoD4rrVaa2pea79zGkxiRFp834ztCazAXgqU5pukqUcXFUM4WjVRFcL8KxrAiBS9",
  "key22": "c6CqujFo73vRwjwJB29fGBxQSEbpp45wdyrS7CCSfPiVSwjMVZvgLaQnLt2GQsLp8zDrgPUEP15qMrkXpiKySyp",
  "key23": "2bLGjYqAWmuUSK4qw67kAVWY7E5NrKxGxkNkPHkqgr1RAzfeuqQP5NggtbFHgPU9Rdr1xGDJFzc3H9zHGsmwycSS",
  "key24": "5ojgaVowqpKku6cAetKVpDVAAxnKRpZrhRYArEu4FFLKEMJaNH5s1QFFwRh5KbKnVuTewYPWDdndf33NHtHfenKf",
  "key25": "5DmQoujMRbwQ7XEN9ENr7czVFZkZgfsxAm97YX3rgsWLos1fqG7TZUcewVDwVUq1uodeLh9vCNYFynFeemyxaCps",
  "key26": "2Df1SGxd62x59d2d7ari1jpUPU3m2eehgupVibpbVfJSjUZ8e1WCvZjSGnfJ25Yh2Jqvqq6gWVAkVg8J5fPwnMMN",
  "key27": "2RxHpYLqvDobiexRnMBtFRTcJ3RwQgW7Va8vb5Whv34rYKPNNLiyX8bSt1CiWkuHhF4t3fpbqF7EUUgq1BTaTKLU",
  "key28": "GnHQvNsfqBN2cGnNzeLZy2Pq6ChVWtLc59TzieprpTTtx2Env2LJKmXRe32YcF5nvXgsRPKmfzJFgecfKHXu6dQ"
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

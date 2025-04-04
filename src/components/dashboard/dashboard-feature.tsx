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
    "TobBnyGW8ZjjuYiysfz5msGm2PyvVRN2mPsU33TXqWFZmpDKKTniYY8iHaMK5k1uWTQYo7GGn3BxsUzdRBLh5U8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52C9bnStVhDYuvQXBGTX1FRFp4cSJirMi8LSff4XvoGUZD94owmy4BziSkUj5Vf77CFNfxbqXxaztRhhgtcQYeJT",
  "key1": "3ixpyqqVi89LgBq3BkP26UqGSxxZyKSdf6CRbsMdjyU8Fcm5UtYBBUJmWhQvevJWWXLS8rJNDitQqDNewVsoNeoT",
  "key2": "724Hi1RfMrk5jJXY3PB4AE3tbRK7cQxbrHFv3hZm8qtoasL8r3WCpoNE59hfAzsY1dBBg3EWQgURdrqBUFKNnpd",
  "key3": "3eB5Hb7zcV1634Ezg9gjHyqnYyXkrQKRGAfA8gMFLxtEZDypX8fdaSksRfXfQZTcRmHYNyP4zLJTKZ1zVEWmn8M5",
  "key4": "3eiJgXS741Pq5Ywnh4xeyA9FxATMWaPvnBZJSYdBiPve9FYa9XWDcBQbZExrRHyNmcEX56YsUstzJjAUarkiLkMJ",
  "key5": "4Ktn5WUesykFdqrdhJV2v9YF4SyRrRstxqWgHhixyS1Pj7VkU4kf8x2NyJfkWQqnEZzRaSzrWDeLGA4MRVC6vZhz",
  "key6": "3t96aEurzUXBS78Cc96gXQTZiipwXCW9TL74tLakig1nTWK5aBvAxY9uonYxL7r1rb8jy42yZakco2h9KE8CTSka",
  "key7": "3TUHyTLe3UdWF71RAGSN7w1BnXpJkaAc5rwCmLu51fh7fbagXajpEJVMcf7HfXafm2dfZGiwV4XqVBb2wUiVYfXU",
  "key8": "2KY2eLKa9tCX692X6UJH11w1zzEvxHxDD4KiUXKEVY9UbCqsPrJ5C1Ustukysn22JviTh3jQh27MmKXbrwdcfiL9",
  "key9": "54FSHkV6TsHMrnx9zFL4QJMXjPpn3G3PayyLeHEfcLHHET5PC3JgRXDhkGhogfK1yE3sNKbT66JihVRgYJVeXVdZ",
  "key10": "28MTr8XRrcxSMQsvCvFb6vUZJSEQG3q7dVRsuSd2crwWDrcUbJKkgkpNFsVciuGrFCoqwbXHuyqTewrM3SxU4DQe",
  "key11": "2q7iguEf38SSU5gNdaji1GUk4NsoCxw66gbv2iyugah7UY5oSuU8YMz4uHnCsSE7YCainhkEbZggCEWnf9V871Ro",
  "key12": "4wFWneMEUEiyBmskwCvSMkt9dqSrhdhXr7Y9o8ei3CPdxFquAeZfkUKSSwSiiw8wmiHTgBdAoZ112VztpcGRd5WD",
  "key13": "4DffaFPASMxTwovjwE73CdDib8nodhZh7Z6N8gasU2mj7oBiNWM3xZacM8W6qKBx9kxxkoqK35FcQXAk7vczwQzo",
  "key14": "5aYD31TFFd6K9MS787Dqcq9jXiYsGFwoMuhZbMVu3XwD4sGFKoW8QF1wyUBQCbCtXiZqFUNwNd3sKSQfkJ5oYEbp",
  "key15": "4thRHHecuSsqYEpoSybqvWeNGHYaYQYu1LeVRLN6HxbDiouebnLiErnwXBSzPGN2UUv3gUjtB7kKJuQHAx5tBfrD",
  "key16": "4GHxcWGqJp8pJFuhtn55VTgGiws3CbiTqdjhQcvQsrMHqwR6QRBH4SKzhk2DbVgLb6KuphG4ATwY8SbdYRpKpgk2",
  "key17": "LqgccmTCchHQC99kybpdPKb5KPpsjGF5RvMZWatsPAXN6KGCLk3xyowvSL3JPTnQAG7ZL6PKZsvtbsQCJaFuhn4",
  "key18": "NwDzGASivkAZnM3nKooYJoPn63QjQUTvnHhRPrRhT3upH5ZBydZVW1ZAgxyQdVQTnqoX6mMqBG1wTpq3DmSrpmo",
  "key19": "3pExEj989joMXJFDwCLs6BCm4P7AyAd1t7jNpkvexAp9JsTVqbyCLXbHym13KaoS6F3Hp253SHMv9Z5Afc5qAoVN",
  "key20": "421xZMovT4Ffh7ATRJV1yd2JZyyqd5iJUbebP8gT4VzQHsP8pFWrLkXekTk8m5qvbAUFP1f3Ci6CYuA7ZWtTe8h4",
  "key21": "2Zk23hGcV5x6ZhnWYtcSGWuWdgUKe9hrTfPyFez7kmfSfuPrvUoeTUNSgyW2h44wqvchoMVSCSkNyPkk9b5ZKoUN",
  "key22": "5h2uzcmXo5oTsCoQF8LRoCzG86JxYUb9X343eghZNh5ZFg1hQbXeKGbt1eFrViHHkQJ5JFuNkrVPrSDxdrLh96RT",
  "key23": "PA3RQeki3fxeZ9dfUr5PoSF9juDT2LJZ5NgXBU5YAWLCxRsWH5ZKQvDeYdF5yyqtiKFTzrBraQbF2BXhfoA3jJH",
  "key24": "3DMa97iEJ4ax5YufBBud2eeAmptoLEFtpxwBd7ULCGeEGa1jARtfeMBYowRGT81NjzQcnWYKoT2ecKYcKq9pG2hk",
  "key25": "2AqXVziZyVmGjBUTqbeePXDTtbYAUtHczuNMYbYhg7TsXgj8sYTZc4qSvoe6sW4Sw52Pf7SaUQiq6ZvfdnDGEfWA",
  "key26": "RkZRsLxtn2aa3UanfRcZR8MjFYBXxXUuijHNYSsp23uDqVeRkYVR4bt6ruR1AGJzLtcsWMbRdePHzJWdnSLjyBn",
  "key27": "Cd8NakQpfrBeSoLDdQquwi4akGJciTGxXABf7fT59thnh1DsXcXevQkN1Uq1jxwPzXULbrp9iuj6rkxxzkc1qnz",
  "key28": "4B2XcvQ2Xe3PuiWaRPpQfdCfv4Zaci7j4Hew14zWjnKbv9WVqPXApUgFkRKcELc4fmnCRSDNArffmNogKPZh2Hk3",
  "key29": "BApqoVLvkzgsU9DC78YTNStL7RFm2mHpef9Xw3cEbYNdpah6hDpoiBbKUQYPs9FRcbXkZcnWYNDoobmLjGD7223",
  "key30": "4boxstgqMJXmmKwsigvfy5qauzL3NSon9GnboYp21s5sq41MLDWekY89i6A6vg5PMbWrFzd4smLZrkeSMd8uvbHz",
  "key31": "3Kecr1uyXK337QdiVTQ2AwmCvr2RuwoKdVY5Jc81aN6WJ8JoCKVY88Sbor1oG9aXetSwRpNzhbFeJzqG35sGo8nw",
  "key32": "631Y1wqCY9MDXUwpCbSVaLopjdQoqF1aqyisFS2ZMEqaS1QhFuWqGXUrNdTrXPiRQQGpAingzJvpZSTYZa1D1Vra"
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

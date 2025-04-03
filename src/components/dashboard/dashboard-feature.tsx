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
    "3KNde7rCGVhaNi7HFvA7eUsc8XjcUA9qeqoNpd8hkxMh7mXmrcLWWwerYragEiSokn4woaPEaSLVDjqRZHvdVcvS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xB9ph6zY2SDsiM8WvbXVqxpKxg7HZxSWvru8msUkQejNfiwVRCgpsdXawUjYZd31ZXtskUosnrS2vgYstT6R4rm",
  "key1": "4f3ixtidXKNEkmovMKrhGAgECdhSfSWDQptNfcgz1P1C7FKYwbZtMFWGqapGcJRvAdXzyoahenGAgDJrjroNouNV",
  "key2": "5oRNwcGcx1tHY3ySAVxaubWYsEf89fEYfpQ77SZCmdEuoVPsdVxQPhbPkpyMF5Be3qW6rQXxm9oajLRY6LD2AJ7o",
  "key3": "FAEcMz2ezLmt9HU9hGR7TCuYVRqfYLaPakorLUT8g4bhzd5DSGC73479dEiTTiVJVCr635N7eGxAa9hnJtZaKmC",
  "key4": "7CiZhMxpbdniTjAYnpNeF9RbBNGrGASbn7cHeQNCDoRrCvns3tFktFAKQDeF41XU6BMXNUk3UQP1Y9AmFuYvQ9R",
  "key5": "4meCjZcdpHQpgciPjR13EfPPfWr1c1ZCAsKcTka67egRr54MN2N6pJTnfaAnyVmeprs3cZA7KepHaqbSGK7wLSyZ",
  "key6": "9tKyANtPBRLbazibxTUBWjVVLCoYHB28AQRW56hNzpaSGwQGSUXccf2myPLzRrMKwCT4LGhsKWxU5VH7ti6taxq",
  "key7": "2CmrFPbWPm1eBQkGVwdinqREdLcLPFNFz2UDSG3PCDpci47HLZd2AVedCLrHF6XkxhDsywTaCmhjUEc7vnkzEs6y",
  "key8": "258gQ2vS8ShELjUT6V42PwjUQmcoWV9yNFz1wBdF5x33dE21SA3iSE8oKK8LrJvp9MScsqWPUh7TFmrQU7S9bdXw",
  "key9": "59JVxpDt3wGMHCsnQHVzygsTJaaaxUPvEzBrqXVsNrH7qS7qgTM8wYEFWVrdECkUvcMEYVDiWE2BR3YNxe2jxJvh",
  "key10": "2rCqxoe5tcBhGWjTA7gvkbR4Za5QqGrwEDFBrBpB2jzeDhmMvw7qg8vcryUcctzVAEMzzKFmQ93LZK9TpP77SVsU",
  "key11": "5hjkDc5yp7UHDsXvjTCTLgu82tK7Br4Gv3HUhjkKovLWDdzZrYkNDHAuGvazh638hSTxdGcvFhmyewV5xJCKYEoA",
  "key12": "2NarizXM3VkGjdv2djEVuugBME9aCgENY9Hdp4oRWJtbdrs2waVoMDyQNERDdAdphZekv7KvMdNv59Asgm92tf2L",
  "key13": "3cYsqHyvSkveaXLfzhcxcfiSefxux5wvi985vzENv5W1XUgND2v3KFFstS15NTiibQPRA3i84AQgmdV7HjenMSVC",
  "key14": "5fwGLmKY3Zg37WrEMurPHg2c63AAvCSnKzF3XPiGPoU3ECbZBbxpLHGG8PTKkvW9ekxf6CcpqPooevRLZejwT8R3",
  "key15": "29kFDDokuYen3Zq5aHQNAe43xA6qtp73JWPWJddD6EV5tiyA51YLZg1X1B6bK5tqPbdcWdhtU54HRKF9ER1gLZ5G",
  "key16": "tDgQwkCPbbnKis2akHuwUA31pFh1cYED7Njz1svUhNL3CdDrf4rD4BXhxTqgMA9B6nRe5KBAdnWKGnjdA3t1BLi",
  "key17": "3UThvhm9tMnSwnay5MK28KvpXTSW4Ted4cpXeyrT4JmQDgZviM3kmtYAxU9NMondCAT8bhVWy6QKntBvRrQ5942R",
  "key18": "2TjYSjCuoKDCyj3PYD37UQ7tXiapNbfYRUYnEwoVVZY2MmMQXcGWkxPczhL7V4RTPZKMjufHQuNtcjZ3NHDdbRs1",
  "key19": "2ez9xQM7Rvqc9M3Eia92K9EmCEsP9z1AjXj7768GmYRkbikLJtDXTu8vEEE3x2AMAFbJgtYQDNCgFr3kGQ7dJEi8",
  "key20": "To4LxMREpqG44nnjiLSx5xwxho9dE4ChwvehT2bzKKxGbSst1J4GAhcFP92LsYunokntpyctYzweTPfaqvEta7v",
  "key21": "wZKLvgHtbr1fgUpbdEN7qBdFZP9rK796SiZYnAZ3h6sdcB4nCP6zYkGwGH58ccc4okAvytdgEPiFB8a3mxzU4fd",
  "key22": "2CVnauif5WGi6XAhZ5Z7RKfVdC8VgsrimdHzzfa14MAseMwv7H1xyJxFuyF7Tm5TcSGxSCULUwRN63rJdA6Axd9n",
  "key23": "5wTMexSdAAQg49vRn526FL2ZgfFzE3FE2tLkPoLP96DZH7VWTYkJNJoLroyC432pbywCmCF19NLRp1VprszBNBUq",
  "key24": "voau8v7x5rReHWg478dmmUcvfbTKHrKhrNyUBKGNNcjsshEY68c4WJibL8KYydG7AN7oc8XXYDEk2RJym1gK82Z",
  "key25": "2nufKF47AtFsx7WHar6dhpxB9T2gJrnztMxFiMwzeawjEAo5bpVihbu3zTEwdS7AJfnn1hM59QPgZSCqD4aTkaHZ",
  "key26": "4if3HX4qcGJ8VvTaqfjq2gNUWQoyZutcuc1P1sGWrH7YzdH8RECLFPSpAsBN8Snzt489qN2qCBhDXpjr4dtx5Deg",
  "key27": "3wejH9YnMGBy4HCGwGJMxiAPPbpbHY8WBteEsEyUmco4UwtwKj3P46JT5nxwojnG9PNpCcSiWAxPuYd1eHYyskXA",
  "key28": "4gyiqaUPARPpJDbAurDHJqYxmbhRLLPungtkSuw4oWXgdC8cUC167hceFJkT625oq5n7us9DufELwZXkkkkzWhM3",
  "key29": "5Je7XGqE33ckNQMoLr3jcB3QFzn1t1SmSYcjp7T8pqGRiipw6va6CfCWuApxqNZM1To6RrxosofoRcGKBzk3doq5",
  "key30": "61VPSLmwTuYHT9RvQ4uqrSWScCsAdPcKttTsBEXmqazsTEyPM9r9UvgCNd4NvBYkpDMy84airmEg38SRzmDEQJYY",
  "key31": "5h3YTMXgW5ds2jBPsUyEJkLHEhVAbyCz9Vj5YYAkBxxDcNB6iAHwN7QqVMZtUqv6cdhXCkbdM6njuvZteYcUsSfi",
  "key32": "K7mvcJmnay4KXMqnQoHsrVvtU4f4gZeN1zVrpipTPbURoZuSmCwX5SRKqnw58JTfg3TJpUfB67dSLfNqj9kkCca"
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

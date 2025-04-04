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
    "2Srk52oEdro2ypMA23N29xGT3D3sjMS12Z32Cj4rp4sQDf1F8hWmC7PG1Le7aafmaZSzv8W9KvQNNRGm8yWeo2AG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Tf8NjCGsuicTcmyHvS895YQAMjq4azKfyisrCSURb85d6tdxpzEdpMQqyr8UBfktktF4cG666kXWeP4EAh9YxjU",
  "key1": "5rpDWr78JtcV69SV2XJ47VwaaWvqv8BjevytqqwDsRqT6gRCf9TSjc5WJophARkHd5Np4eCZTAvd3aSk9o3UQ453",
  "key2": "3f3T1h2MP9MJRaXpZg2ejGkLJ5hYMAm8dEF4szbTrvdUQ5UdKN5G1D2h9Z48zeMQtbvtbCidAL78nt2oQeawPMMJ",
  "key3": "4CScBMYCgqpiVVMarMwNVDCZ7wHuHwHs5s9vrJQ3FGKjvmsCmxjDZ2KGqzHzStUaWRphkWPYmZK3Ny9xMEyQ2o6u",
  "key4": "3DaE9Lja6qukA2HFJhJGoKLLNwMmbmYKkDrRdFAJsCTiT49K3zKBMZMbd7KQve6Uu9a25jYrJdLfxKCUbxb6Fvrx",
  "key5": "2NHzMwLVZvVu6BNdYxBphzheAzLsBctRiRU2ANJBvDEhR9WD2mWucG7VMLS3HGfC7CYXKiBpi9cPYKRBGVajbppp",
  "key6": "3kRTUWyHxf1iWE13JfLQ4jxumNP77yJfFJoQb24FiRgfj4Tp1eqeomEecjUrqQ2HLjfHZUqwosHZQX1tyWvoiAAW",
  "key7": "kMuuexkkkPZJMDWFbFXnxQu1M5vX1pDHXL5m9qW33pMsjC3PDtCD5MjFKMTztraku5HdJ9MWA9djeCarydFLvW9",
  "key8": "66F6V5VVSFJopkqYtQDRAUXcha6t1Vvkf8yJGb52jqM3EzGynZuAfrUZ74GQDjq6uuWsu3nhBDKEDiigJ9rWVsGq",
  "key9": "3NG2W694fvtHLtzZeDzoBTVq8FsMTXKqdayHpT7M9jbjmzek3yqf4tvKaoJTdTX7xfMDdJn7v4hpgzF71dQLfx1M",
  "key10": "5zZGnpbbFqni1XgbpvDbENv7VPtBMFdkbqhKiGF8TJMFUtoMQ1JDKEQ3WcjC3Ah3vuLw3et2cJrecLdfjoQU5zza",
  "key11": "4cSJ8A8VkAwMyzgWMngiNUXMs788X2JsjC2Bj9rbQtJE5TKwUH5TA2Z8xMGS9zn5aojTSNmfv1Fq4nS8YuobuumL",
  "key12": "5zZc5bnHDfLAnzLqisKw9czPV6vmFy5vbXVFcESCiBrRD2XMW2pyXv23Nfd3xqHnPhKsNWAR4LJF6CGdXLVin1gA",
  "key13": "25KnccJ7yg1Um15BKNhQUeCc1fHvSJifKCAojYgWzwb5S9NafXTuDhGpj5JbrW29QCvRokz1yBNMm8Eyb8r9ai5t",
  "key14": "4JZ6UaMY9xzBt4Amu8aBVcP7Bq53fsgypidkoqvwAHMM5DUmGgy4PZHYF19jTU4oN5dcvXqVxv4cm9n3zLxaoAGk",
  "key15": "2ivMDxDNEnidxSapDGJqHUwuQ7xZWBZWSEAY7owc395ZYBCcQPDVksL8oEL3pLyQRvdU2rZ5VhMyMc4f2LMM3K6g",
  "key16": "2VPLdVMR6TGuk48wzgEjEfXBdDRLnNwxz2kQg7NcnZimax6g55CojvsWHEkeBBwn3V1dzGasYYFpwJ3122RakWEd",
  "key17": "4hCH29teLZ5d9UyZy92dR4wmWMR41vHjNwRcEdPAkdzFqWPqAyakyz8RZW94ssEntk238SWBbJeGUBQymnUFmBdH",
  "key18": "4mBmwMqDfNb1pNyvU18GkYZdG9WCFAjMhfsAamQW7raAHmqcrC73RnNq8mtBpwNTL3dHdDG5y41FvkwGEMp9QEEv",
  "key19": "31taEWrNVngsMSVJpybFbHUepoAQ8Th47GiXKTgiMt2rCQ74fMrh6Z2i2FRw1Lkud4QNNSyDeoHqRoGXCMArMZ2Z",
  "key20": "4QkTEk73QtZrykb3rvu4Z57CFqhDwQS5q5E17CBmZcGWopxkEedtz5bV1Nwqe9qXauN5kvkhwkK9Rscd6zFLCmj4",
  "key21": "5B7rMxxNifdi8F9u91RtyVhCXzNswEx3b7uw4LvKJwMV3uehe9iaKTJ9kR7DRfr57uCwqJSRsauNzfDmrFkbFQr9",
  "key22": "2K6NnFXU35JB2DGNgAzRZNAwEJebXx2TEWxF1Q9o5ECaCMnTxpqVCPH72wf1AKSuJJ2Hiv9Gq1KiqQgvsMcLnRbQ",
  "key23": "3S6zxDYyoro2iA2HtuV9jbzeMnv2kjCGMuu9mmHuG2HGN2t6jiu9wjfTS4sJLZmaWngZZF3JD5rayP4TRFzvwqmQ",
  "key24": "41nYkxb7Fw6B7mVwRsrHh4N7xHbpfxYNwdiuVR9qXF8FJVRSz6NWfHKgYJWwkKqLQTUdYsqKDnSimJCpiiTtUVuD",
  "key25": "Hm3DwnuKSdcjEKY1ab4LL18gMHwTdCTpqwkgxMqwyKiXCXrL7HSoL9qP8ZCcJ8eQHKQknJ8MzS7N9kzGtScQN8c",
  "key26": "2jBMAVb8oaqQNpmnpWtmgcLfmTorWLyJ6GF9jzWghYFv5acgXcJXGFcqyR8skiiMTW2KDx72zatiRmiwBELoK3S9",
  "key27": "3j9fWdGwda9zNRRTLYsQjJeLWvjrRA3n2RDTBnK9smQH43336xiq1pviEaYmstJgqNmqXv66LBCAdV9xHJLbDXQ1",
  "key28": "BVPiabrmRxeB19XBADUknxc6DEKrPnR6jFC6DQ9ZHp4So7NG23wTpmypmoAxZqFXtqszGZJm8D73Zd6kzHCi4Ja",
  "key29": "4ag3PcyFgKYRGr5xnKhaaKfX8VCykUnoxi3UwRZ94cBkpNkwCyhfH132tCeTGNzVEYsvwZgmjTWFuSY8TNPpsCCM",
  "key30": "3oFcfr8D2NEWzsJrDGBNgcyxfx72XrpzarvKJhxHJRNVZXW3fKt5oUZMaegVqJnrkSwi6mqPsCqWtd4iPCKa4WDR",
  "key31": "4yBB3bVADX4cZthxCtH3Fkqstxefd5hpMBrRfk1iS7RjKf5AN87ptAWMFvy7F5i3jqx2XAU4hNSMaSSpPjpL52Dc",
  "key32": "4Ria1mGXUp1fx8NjTg3KZHgPys4D8pduALg9tsKHfU5Yy1XyvLKKxJcmS4Zgtu94UAUwAUHQeJoSyuCx5n2155uE",
  "key33": "4GJEp5argofck6XekwDUEr3urDEoLDFpFGwgBudurvWynUtK9GkHPALoKABRm31UCZRkpHdbcFUACiHnXj6BVxv8",
  "key34": "5CMNttkz4mEXccg4ugsye6Z5TicdB4BWxWabZhpKufvHQi22C39xqQ9kuxLU39grpYUww47JAGY3TNR8PoREYKyR",
  "key35": "4eduYV4XQ6cUPC3ykTNZTad9EhzfASfktbiS5giZuhZf58P1Ua9imbV6SJSfssurpjPLTDDMdyu1Ee1Za9kWFtgS",
  "key36": "4SPa4x8AoP7fJDaCRCiakqij3nBFR67rAzaAeMNMhHY4YNf9T6JNQP5beR4wD6dRkCvrWrvahFomYwnT3iyJ6aFZ",
  "key37": "5qaexu25qJ5mJcEqB6SVtpTss3dJEi87akUSif7FoqpSjzHutd2cbpDxUXArjZ2dZDDmyLAmD3FaRVEhE7DXnVUd",
  "key38": "4B9spsV9HTtgitqonu2RGA8ziry5Rn2fkdSnaHDBSh6jQc3UCmKkFQdB1p5bk9oy8zuqfA7MS3R7fF9hauAqGRG2",
  "key39": "dKE1Cc24EFk4N3GFDxdjrdYQAB1ZaCJ37unsbigfXapKEfmPUBHmJuxAWJS4Sn1SnNBLKP3b4dT1WeRiCWMwm1R"
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

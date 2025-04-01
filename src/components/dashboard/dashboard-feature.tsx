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
    "3HJxB7wq7TyrCvAGVCzARYaui1XbCRwhDhmZ9hpSMUmkZZecqvLSey1pSMpvU48xSnLg94HDRfSppWRjq7TvtUKk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GqqhoDtouKuMRqf9JA6AuQUt9LayxGd9CZHeKmbdTnFpE5aYPptPF2PehsFnJBRPi23ZTCnjN1tcFGiPUsmPUTT",
  "key1": "32jdwzoVYMcUffwgmYdk79B275hxSZu1mQBj5faZmFojddLtUzejfT6yN7ZzmonQjK8PTcTGGcXUeaocJh4gdfw7",
  "key2": "2N13NXHiyt8f1tFZzeZmwiFCexych5BPRbKm4pKZ22oSgx7wbGz7frBQX5hqCrzSfdTzW3eNGtwQwBMWVPYpB9pW",
  "key3": "5NQBmuCNj4dVDr8FQWs8ogQ9juJaQjgh7d7a79zZtDUgqgTr5a6cxguvcnXt9A2QzaQaM7X97WhskW2WcQbMUHor",
  "key4": "rjYb2dRTRhWqJHh11UzVYHQGEXSrMveGBHkNh3G1NMZ17iDEv5SC6NqsFyNNph9q71aTrKU6dS2TiDX9y3xNftb",
  "key5": "3NyXgfxdj28H74y5yUZpfkKbaaHnwMqdPzDH9BKgYKejZu567zBzcEurZeRSEgbxXJPVytZxPa7cdtrCU37rpHHW",
  "key6": "2JsactJWYhLJCCPtC1J3ERXBj1B5d4nicr569B9pScT7McUSKebE6DEZp5tr13dNARUh36zzzTMoZsZW9PJ94Bj5",
  "key7": "32jS2NeRmi6MAoWAtsgHjEXsJUcDeAtG7K8iboLpykfN2dTDELih9RVKpUwZPrr9T9gNgvNpZnnkmV87jzuXFFmA",
  "key8": "37ASeN5RysiQGMrYP6vkrVt5z7EFSL1cQXxEFDj1rc9jVh1Yz5YKCuohjKjae8C4NfwvQVsG8RdkUojdykYMfLe7",
  "key9": "SdVtaSeNoBfeLX2aCYmzZE4VRd2L9AvkXNDgWKSgQfw9radTtRk14Qh2wPMwbBAdet6V6EgVYMB4rHhQpbFTyFA",
  "key10": "4V6PFk25EXCMnZU4iiLdY43G8HKV6HaifSBAkRpBCwEPdfnkDubUtHLMopRoAugnvvEc3sgGYagr6xw3tyh47KVD",
  "key11": "6zPRG11VnhpG4NEbBngZUqgWectLepXeFAkL5Yg4dzBde5ZAoNTRvpwGci4KR5zaw1gbySbfoAcPAEgK1CECdsS",
  "key12": "4bPjeHBCyRqGpudT9dvRyETfEVrf9AmK8njF9rj6t4AYhEVnSNNwhNLALWodccjzb4Q8k83AYMosvkprMu9zk2Ec",
  "key13": "5QJHS5BKmWPj5ofSwzEAYrcjREhie42tcCDPzsS1BgvaGTDFcnfKRQM53AkU5H93ZmXrAphXxVoGLMtDhgqNBgwh",
  "key14": "382Tp7oXAs87rkCjKEiqTkGU1XXQjoLLXHdQSy2MP5FAtvumSqnsLyrgrNFXFZ7PrbgF5LUSyq6FZKCosApTNjNn",
  "key15": "3nExdW7bdAyTmwAWhHUZHeSJWpMrfBziMq8NR78pFbTJec2SomJUU4LubJuApMT8WQjppFe1tRjTDnxDXhDdqmFP",
  "key16": "vwRZYJTLuKKE6rBKMFK9s8boA98sadi6wvDZaJYDU1K42qrZoHGWdguJe1QvQVMQKd6QbXVqF9XYRpM2wsJ9aqs",
  "key17": "5BcHD86WechKcoaEH5PgkEVn5gJBJhmPY8uXpqwe4NS98FQQTvnrocfBKvDkxY9Kbczvzy69LiLN7TwgQ4tGeu3n",
  "key18": "5VvWuJ59GqR4x6n6oEK5DvKbANdoU8xMr3D2ydVEGBCCxPeiLyHKmu56VyWQz4cLNhzrVyUMwngst3MEVNGGoPDk",
  "key19": "5YHnqXxw5GMYYTHvWcZbtRhfozspzWZo7UFQsAHJzEUt2ZbZtW1j73Me3oUFewt74hBKe8Ps2LUQ8mPgqKmkc1xA",
  "key20": "4eFippEr288fX45B8fvB5KqCWHc2s34PmJ54CnZhuq4AGQdDRfzWouh4TaGBcK4RGnfNZFBZY8X1rpdin7Lwz2Xe",
  "key21": "2TQQsD8cBVAPUuUfhzR7YwPjTUhBkiyp3Whfjiq6vvcDLxXYoityWwctaqpfUeSmG3dhYrW4sgscUhw259Eikbtv",
  "key22": "33ET9pVcgKSs18vzuGNYqShgT259VyZcVZ8gNtinNEsSdzWAU8tUvpBWDESTbaEBm4xfwFtAA72YYeMUsDThmcWS",
  "key23": "4P2LucQKhXPNHmJKguo6i9nvU3JRdoYovjnLQAudgRCF261QjUXyFNp8MhZvyBNEPj9RbrCzKVZwBvGx4KnH3Tyu",
  "key24": "5py9EExPQbQ5WvcVcREwXaPPyBKFNTRAyU2EPYiEdV6ug559sS3fXF2R4d9LZN9cnbfE8py2G7bbWJ4L3HYzp5zb",
  "key25": "41UNc1NiRrUg1iLxrHpoTTLW3VDDKLn5KPqvchjLnAeuP6VYDpWmwPbMorCPJB2fXDSLURHgi12esUrWtR9CQHrq",
  "key26": "5w4wxWkYBgZSYU1Lmd2uc9A6772TuhfSBNeNfvKstE54MuSBrYUfRJ5yW1Ri43dmtigMZtWNN44w88pkKFiRzpRu",
  "key27": "3Gar7wfZsgjm6GQ3bCfw1QhcSsvv2AcoWFNmUPWxYM5ddj6hRWwfpJDPEqKWLcgESCQZQqS3ShTdmU52fsPeFsy5",
  "key28": "2Kn7nCyQPzTJyQ7hyL6qTxhewEhBLa5AsCA4YitFTQo4iJndWcdQCwcpVzLCDT6YNm7zkrAeJNTgX9aWfiMNUCYq",
  "key29": "3UqhFJGzJxGkmK6asHuvKNfsGHxkucuGnntuach9yYdomwrFRVrb3J4NJ2XHcKMJyPkYjYU1kDGG6V6q7Krrn1yG",
  "key30": "5jHjojcyvDxKyTH3mxPcLnHAGKgUDRQXf3NGZZsgZEdcMRMZhUKeRP56J7f1oXSUEAY8zee9amgFTCUxVEhXphoV",
  "key31": "2oGWdhPxKEaTd1uiwpNfc2PBbN21S7GajEhs8eLHApz7RJ5W4w4iJbUTA2Gm9EGduwaPiQTw1tWSL5JQbSFZQT5m",
  "key32": "5dKKHuLZCD5otCkDsn6LBc1Y3841BXLuwerY3rjayCJtoAnuMrAR3MDeSTv7EPNxvXi6SD8t4rKXy4y2CkqjYLtW",
  "key33": "DCfnXF6wSqviLKeAWHoGWU1LewApaafUMAJfHYzg7vPBwV3B3xSPTHfrxEgP9NLMAFi2JUPuSgSKkD8Q48suG8n",
  "key34": "5tn6iBM7DQqMPneC9YKCnVd7La86VnFHmAuE1sZrK82N7pbXPimkmcWcN1cEGd9thqxDDY5MEqgZFmHw19VPS44J",
  "key35": "4E9TpjBNE1uRBBFVfwnPJf7d2ogsSjp9q7cnqLhW9qVt9S8JL7uF34wGLhENscexLKfKat6B4BbGvTpXcK4sJesC",
  "key36": "3GbkzZMGe1N5VmdaZPELfQyWuUa1jrEiey3cACWHJ2XiSmTRzW6c2TPj9uLeUSy73KrJBqz5eNoCsqbwevNv8rgS",
  "key37": "3EMF7hWHLprkodd4j39Knt7ib2yNHb1To3GoFKzohLQXGzEv2i2spnNZgnV4NcD8kvLUVaVrhxg5ATAAGTacnTti",
  "key38": "MqYCbMAheqYNHJzEPK2iLnzTDLjfupqVddtDbuJ1B5kd7rRfUSRAxWBPotHPjSyAfe48iRgMDW35La36BZSkkQy",
  "key39": "3b4VLHdxVKcvphUcP1Wqt18T6nxv4TcBmtEewNphRPDYaJa4i5NerNNdqAtjnWHo5uPWW7ZVq3Z7CwvKVSp5KgrK",
  "key40": "48SVA8of3QW8rgxzQsLFYAEW3ffFTEoHg1zKPS5geCZYvnjWzSF9pwDKFQkwJE31GzGF1aU2hguh1XnEL8h6AKQF",
  "key41": "3c3yHX9BgJRp1rwaWtccFE34MKcgwXNywozrqcJU4sM5bRf4UF8aMefYrzrbV8iegBiB9sax2amnfiMfWYJLUURn",
  "key42": "3V6G6DXiHJKaQud4KvhN7oK6mqHfsZwH3M9FioxX8HdNzvQCsVP923WRHaUaUtQEUJRp9cnyvFxZptnjTjKbdgLn",
  "key43": "FuLC6jwP9NL7Fkm6Xv7hdfztjsT2WP4fUcUVQxisiKpw1MqQWVWa2xsA2EcmHXjqT4GFg9SRb9uPd75xrk5Um6h"
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

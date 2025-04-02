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
    "4YUGtgHi2YmhWkZf3vosSsptB1mjMxf4UGc5LsCdmaWRYvz7EmCnvmPzwkbxtDRz8bXec8kTnfGwqx6Ui7fpJEEt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qQVbAbeYRuZ2VTNTi2bPMZEAwjRHfYJbcw3qrDnDcRNFNDEVCcfnEUGKPZdJzVsHfY5Gfzr2j6FuKjwp2yAWqxQ",
  "key1": "pb9BmH8uVoG5QYaqWEWgRS1zauRsPAEBBtKFRdHHoeEeVcY6xkBqHFYyMS69hYeL1PVibCjdturbM6G6CGSDsiS",
  "key2": "5LMqAPGdn1ZyfRiXWstBbuWgNFjYZ4NZiJsW7hoRhuv7bQ1HeSztwDAkKYaNuiNLv7RwRSaSTEJrrvssAoeprz7F",
  "key3": "5M4LUZ8uvSfvSEuQfpuo2kCGSE2pDQbJ1T53LSn1fTQT5xXvaKqXusnGiQ3Kxe6AEMNxCCfXc95iCYLjEC52qLS8",
  "key4": "2vuvGVgkUC1Q4VigP8NZzvJqoxvM2pRCFNX5XCR686HQFhZqN8FCkEpXK8JEnz8Ho5Jb2u6SzBrsJdvV4xidy5up",
  "key5": "FZAE1LiXJSQrUZE7fU4UnGhWUUcTve9Quhn5Htk6CVSshiNrReeVS5hZAJz9MG4gHatz7L1ARUt6LASZ3VbuyjB",
  "key6": "4gCNyD5zWMeN6jPPUkePHL3HjZYYkdMeXvpq2syJuU6TJE49x4LuaReXQRaAHbxpW7xrYrfvCZMp7tfCppYwNhjW",
  "key7": "4GL498EiAeTCA6M6DSHnS1Q6BJHN8VJxsES1QSvMM3gAyoc9G96fvTyH7dfWKmT5KK7rKkVvVtmUFwWNaqUcVDvZ",
  "key8": "Jp1GjdWHxqWL52j8g1BGhRuLm4qCVBGArHryB1hCqP2cjaZ5A5uBSAvLv16AhbUSNNR3irysBaPt2qkS47Yp7ip",
  "key9": "sYxx5ZMrshHW6DWssA9KdrL28jdQvytyuypQiqneypBXmtMmiSGR7yhrxj4mNgziBFWEN2RejzycG2F7KcJ7BS4",
  "key10": "9Hbev5TdQwob4LN7gK2i46DDEDMu5urTGweEtADUGjem29uJp3NmVVBjvmaFKsBwN82CiumYxMxhn7NVjHDL5zB",
  "key11": "j2RyjQnCG4zvSgfHvYhKSKZUMMcTiQqjpYvQkbg9JZYHqHmRdgeubkKKs7ZnPUg9aLZZdKaJhUvmQERRfqP3PRn",
  "key12": "47HcV1BFLcvtNxey7w5LUdTfQ3jNnKnRKWTX325NyRwxNtx7xR8h49j3L5UmSqJ4sQL7MqKHcoMeeqWGF6bV4T1x",
  "key13": "35q3pH2F76JYseFNGAPm4kyqZQsAdw5ZM7iX4uLsoSuKeTuLC43Dt9B9G1Ba8YJ9eLPwMzH9vajJRMLTYQNTfE7n",
  "key14": "R9WoTM7QwXfYrkdtGiCB3vSTzmdWNE9mZK6EWAZhUNZ2WYNprzBkoJbGzDnUn4hCEWqsM8ShEiFEwVVnAh1EcGq",
  "key15": "8jamum27vgBDgCURBbPja5rcrW8xUzxLYAMVHxmxhGptD975RjxFusKCRv5VekfbToxqojDuXWrN5mVb8Vm2Khr",
  "key16": "5Avykzcc7k11rBdP46rSmKSc6Te56a4bk3sbmEzekmy2Ddiy8cZiaCggttPBUJwGA9nJP64aurHjAD6UEFpWAHuU",
  "key17": "2JjL81DDHtQ9qM2fWBxVLQpZ5H3cF1eLrG86Nhxwbttn8J3cyZpzVwZDjXFfzDmiJ7GezR1g2GisQH6fuYt7oc8P",
  "key18": "2vYL9aqNd4vBWh6rbSqEKiZELS84AXAXTg8Jquu9BdyohHQ2mH4hhZ8UooRwNEbARRQfsrxuA5FuES8EKWEJdUNK",
  "key19": "4Wzd1oMEmACnRZP2ZEcC9HtixXQz1gsP6MJducz5kfhNRty9rbn15NdWEtLMZsa57MMSsJhWSd2qkYeCqM6TKEUA",
  "key20": "3Nx96FB8TZSHo2MRVhddkviGLvEgSaMkGMJh5JApEm2GV6nbZGoEFDntSPDfVT8nbWbAbRj8XM6TReGSFbGx4maZ",
  "key21": "3Qy2pUqNBekpVHvNHwXH4hrkZ5Wb2ZuvA61MtfssqZ9hEwwFuhRec4Awgry1phTM4izdLgbtytUkr4HrPgFwy4hY",
  "key22": "omCRXsZ92aPKN6j4WH6RUCTBS227z7ZNsK1zxZ4TmTETmhozBahk6ADH4WFJoZG3rJ9oHdfzhtvXZ3Qs5aCgXAa",
  "key23": "HbRnLnqS2xdi9rH8tpaE1muYtbgRm8RubtNwQbx7Xs9QWu6R3oBQATwa1ya7ACrX8q9sp1CJ4wMEMEEDGYMv81a",
  "key24": "3rKRNvsCVkY4KrFpEea1vpGnpAwVc3X5j3TqZoLfa599fQd89ngAbttbxdjtyAATbUZ8Jw89uWzxngMcvfnGm53q",
  "key25": "3ZEpiaDeWJ3dwDfvoP6NGaBDBTkrb5b7sqd9ncNJHV5siqTCucKifRHckxyv9sCNxLv511bBZd5EFvKha1Ni3r2Q",
  "key26": "5rcPSN9WRNu4n89j3hWUWvyJU3RqeV8Pm4f1rJFuj3hozi9dUtPeUZNhukGeWkv5rctcFKFbEbZANPobzaAmz43U",
  "key27": "JMy6m5xLLJcPnp6M9HeNcNkm9wVs7sCj5Vba1v8bPUv3JhQf7TjHvfNCcFB43djNMjrrmwUT7cmsn7NHmYC9wUZ",
  "key28": "4r2sGn13RoBR7ofrDaiub4meE8kmuBkn2ANoRJXEdQpzZn5xYuinNBucrd4bCL7sscAFeaLRTX5Gzdj1zmXBmZam"
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

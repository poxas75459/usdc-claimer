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
    "3bPBcyf8gvc2rHLya55RTSXA2PguZ9nr4PTLftYDxu1SQeuFA1hYjupgwTnt8nTy6LwrLmygdeC4SqFyZSx5Ktrn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52VXbbek6KeAyx46gopJdpbYEocLZcp1MRQdvWFSc72m718Amvckg2TXbVN6RweSAnX9VzzvzrrhMpdwxg4vW8Dc",
  "key1": "3KnN7BrgLPkhEdaxrBtmcQ4pAMmihvExknvmfjHLiyzydd4Czc5u9AzP33gnLWnRcZ2ngwpHT8CuUAXEErBrvjzR",
  "key2": "37zQLeYmLuosoUtU3FugDvxzL8b6eMQpjCXRzQReLc1grFT7oBcxSVKEjHF424CiMVDugmS4Eo767rsj9T4KwcMu",
  "key3": "TC12JDNdMePp2rpPz6m8Uta4aNrEYpBHygUwexo3NVnRPSHDQ865YzfweHYf7VP8vvYc2PmLJgRJxQC87CSf3B6",
  "key4": "2hzn3S5GattjpDAYTVhbo5ttQAsLpge6Szqr7Ch5SvfRzDHttTJARxXTMhj5dNtkYPn6rySQpnEJdQLaEfXTrmxh",
  "key5": "iGjE9bb5PWvXy6FahJ24fVJd6aWwUdKerzECWr8B9NKyoZXcQMb1VpDnWtPEk9AvdZBegpN9WuQ8qhxQj8vT2S4",
  "key6": "4MiydUDnPWu7JBXdZHokp6cne7DPvdCUDmhWdQkZr2GaXPMAu6Kaz1YhtvrPYVi4gydHd4Ujr7SrGRq2mUrTaJ9o",
  "key7": "6tRuvTYdHtyGqzBfLqXpH4AaSp7T1jAYVV76f9XTaoWsdfXJyGqDuqAYof8WGx58hbiB8gAjxYn2yxpSmzg8t5e",
  "key8": "4CZx3unmVSCxmUZyLViGA2NQsaZishnHHbHmPePSpmW97QDsRCQ3QgTFF9x3zYTBPUPpWSip337Au9hCK4tsBFRp",
  "key9": "2C18JwfswRaao2h5rFovMiwnhy3pEasvGmG96CqZBpNP4X2wEsJt2USeqkTKtK6PEhwfiPYz6oJU29rRsVMKWE1p",
  "key10": "2BxZK8H3UpnJZYaGW1Yhjug9tVk41AYx3M6haSh1bH5NR3kxF8JEoG1r5wmF4c3u8ZQhKgDUxro7JFcNboUkk8d5",
  "key11": "25SNw3J3hs7toNke8woXefZeAJfJfDvSp5EfWy9o1wBDwxqvvkyAgVq3hKqkD9CN7scbUfceVrVKaRHuFVAXaijw",
  "key12": "5hTJsh4efyL7cYWyjU5EoPPkEG9CLneV3oNH69m57dtH7xArr9FjXDQZGgD1TvZgkeW9ARNRiMXDic16WzXG888R",
  "key13": "65vMQjUPbCeQ3m8awMmeTz5oZm5HjzQ21GziUJoZk4KSc9NkU193wMx1Np3D4jwHy5y412fRpjmYuZJ4CpzX7CfG",
  "key14": "5LqFmB1EcCcoRnozQumjiHfkmwdw9TapVEi4P8znTUeCPGkrNHoHG9UuUukGrKw5WvF5UgTAND22U6U8VGrGpgec",
  "key15": "4WoZjvy1WpbvKpwDqDXjhDqFXPx39HtirCMuN8uDvXMagkCgTwtsSR3f5uKu2n9i64bPgx7C2E4DW2sL5MrQSQHb",
  "key16": "5KLzPiLWh81Dt4dKTBcG87vdavxB3qN2WH8hE5dzbEUSpQygs7ZPFzv175HAzdpSovVr6CuQvdJbRTgqXe75A5CS",
  "key17": "5QZXQ5f1gc6GJyF8SjAg2HzM38DfwESTCwR62EuRf6JBTh26pzvLZ5EZJ87sc3B8XinKeQvYgWncqLgEDuf6Jor4",
  "key18": "65Zn4vZiCgCLqviFwRkj6AS4xD1TtedoZbbwJfyEs3xiCcuNZuaKgbzbaZoDapTDA65ebaGc9igCBRBnXCbmTZza",
  "key19": "5V3fhSs1bF7xPeUhxah77Nt9TGNRC5xnpFWt8EzH8urtKiBHa8rDtenSqGk62JrvycAiFURyNZQQEf66uY8ocNr6",
  "key20": "3WV3gNMs4GBGSBMmbA1zs3xjEMKv4krXYBcsxBTkX56jWjcQwoGF5U4RTtHZi52RLpGjHYnzE5uhWFNCUYeZnsf3",
  "key21": "2UQHMYmFybpT83moxkCqVhyJ6eUqp3nPuqJyvmyg9nBr7tA56hZDTwpDZZU2Lz8JC58eVpntL5FSgXfPF5XC7oLu",
  "key22": "3AHGBTx6u6C7uxgNcVVPbhEFeELQ1hfCDj9FgYESFjk27s7xcn7pi4YbPXZqRuyQaPGPMaUTrENJRBuTH2XRtf94",
  "key23": "2aVVGSnrbkEb7kunabTCX2UZNwXsxN6jQu62rdtQrLcJWZXhN2RjPLS4AqDWQyuUhzBqZ5ZusKkE8tXoCt3458Cd",
  "key24": "4McEqfmMmA8uWhFdE3aiaTp3y3K8c6G6vPMhnR4t71CKSv5dg3HmRiP7Kh4ngFUSvBiqP2YCHT7tX2cB54H3E9zk",
  "key25": "bhCupJXs52ogBpXs4vvM8LNj2Ata6xwx7jVaX1Dxaqznyeh5yM1d2TDeAbVBMBB6DYP4i8BgjhiiPoHKSKjhh7U",
  "key26": "3sHjuJcG3Es3yYVDkD2ZNZWGVokUUTVcmVeUnRP6TJrrgDRF33dEWgDL8djXosZLEx16quzSUBhfokPsXp77WzFp",
  "key27": "43iynytyybCUMzwtgoV3eBSzqD4qg4ht2QMdNcMjsCR7t5jU5TqWXenG8nb3vxT8q3B2itZLGXaaFyVK4Uuxyj84",
  "key28": "5TxWXB5hWPgW9P7PgDQBSUHnLQAUv5v35hRV7Q2ZhfPs66n94qR3EUcFdHZmBertyRD9utpn42E69vPep3kR1TKE",
  "key29": "2rVideubFPgcWe6nJBzPFasGP37iP7AJYVXQg1nVAqvzx8eLU5JYaaff8hApLRMPnAf4LgaRLJerbGXJiq1XaEFq",
  "key30": "FgJrJknnffutGnCcs5PXeH6Aqo11V7UejN1LREKq5ZKnK8tj7cKrhrAr6Bt7FF8iCTxVG1LjDiqRCYJnAbvxmP7",
  "key31": "4nnbK1zXenaq7cTrpj2mTMwe5t6damhp28oZxAy89asghH576tZRNdDVJyuU2hDbQy87qbPtNkbpuaFnbTk9tNVW",
  "key32": "5kaoajrbHuHH8HSWAiVrnhyLDfwYq7Kg7ZSCuaqx2X4bQrFW2NsNyTeTnrXYrAx4DwycnN91E9yhhQjMo4PL6y96",
  "key33": "4Cz2iMkbE5pbCD2v7i42GuNKwUjCX62JUkLpfwrsd6beydUnFoQREKU1ihJMDV5m9XTH1digYWyWQbdDJMsudAiT",
  "key34": "26ejXaoGzCZZdytwoTA1tWuYr9ob1xmhTobeo2GQxtVjarafHqVf6k9RpcBRwcwkZAmUXnbHQFgSYVWMYDqZVT8v",
  "key35": "51mh61u49ADNbx5aov2eHW2Dg2PRH2G9kGM3W5Y6ytg2Pgeo6ikRsoE5RgDu4bS8u6KshBqDmYxDuvW4PrKKxoh8",
  "key36": "4FunAczyyMN5tWLZKvSaPxnzrS2zGvFaui89oXbkekwRcTmzCjVtqvzNApZhqCTHUoozRB18b1AYAXsfJSt3aDAb",
  "key37": "3BJm3fU7AqHQ9fu79g6Ej1v5KH6QTPCsK46VtnmBQHZK9kdBAFMtzL1Us1W1eN88jHVGURFvTij1envQJkAgbDMa",
  "key38": "2DTKBS4Fxzz9j43H9aLRwz5UYxaiWVmkBqeGhJxzp2LWABvKtPBwV1p12te46JW3qpANt5tq1mGL6g7Rb9ofd4G7",
  "key39": "33BW3jBF3tSGWepnTQXbzzYaRZDAVV6jrHeqGwnsVMW6Mn9Tqe3jkHYuFNK5J3xSZW7QQ2gwMcgUDe9k4MtCPPa7",
  "key40": "3qN4XRWzesofyZqzdoxHF8QbdsLYvVhPxSRRbwzrVpdpnDmsYyoDPEa9EHLV6XzAzJWv3bL9dkJhAkzpHe6bG4N2",
  "key41": "3AH9JwhFYvWkHJ3pVdUayQXfJi9smGxwg8sk4HACWfrtwyVnMxKQsW33kjEqx1HZ3MtLB9nCEJErULgGhLEc8yGK",
  "key42": "2yoY6fg7S3XybjkfsjpD42LgCwZLX82dwqRTjiak4KHzHVk4a2DNJmzh2SXAAfMkuWr2hoyRMtgQNYi5v8oAvUrM",
  "key43": "4hKm4WrCmCutwwy5bx5oGEvSE73kbUahYR63614c7GoAzf6dyUYD4MrjtVirjSLUeY2rEj14kL9w8dMCWrBJqXWM",
  "key44": "5qKw6ZmZ4yzSXD2KuuxyArdKoQB8ctsf36svoDj9omzKLWnPvoZaAhzgZjhDeHniv3UfJkNhS824H3dJWQ3wLx6J",
  "key45": "4oM1LUVWZBEUKqZkpNRbZ6oGabfoGwGaHb3rawUTx7jtwgZVvFWgAY11x8URbk8zLTNySeUPJiu3oETvHrMombDh",
  "key46": "2j4PiSMo6i5XWY2dLExL9DyZ7ehZmktWdoSwATHaG9cpyivoeMAhv3s32i5fGRzmuksgtDu4J65oE2vefhMpVokz",
  "key47": "3YB46Hufudm1gfBcLLyzzUTeLtvkMQRRXnM8gFDmyGk24oUkZeUp1How2WnRwdjerbGiqSG58Ye9yamepWyiD1zM",
  "key48": "2E1N9TadS6CdeEGLii9fffTuiwxqWeBpmZrjdXnScMjeev1fffemmqVbj8JJRqmo7QaWq7rtg4JsGeZv19eBFoAg",
  "key49": "4bq7K5RCoerJVtbffuWxjWyYxKzjWJ1wWkB5uenngWx9vDwyWWb2KwNVmBDEhzLTHS4eftiJrAyHPh8FiUk9au1J"
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

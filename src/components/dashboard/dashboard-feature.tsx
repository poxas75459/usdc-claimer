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
    "bBwnsxxsCZtjmsbmpjDXHXNCw9kPKqXD7pVPUnrjYwy9HaerpVJchCvA45am3WT47x3dMpoz6nX8aj2CZYhp7pF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9VSz34LoCu52frwUdzBN3zsuy3C5a9xcjDwZZPvpQiq1GH6mCHFzcEG5nAEDfFcWmT3A3nc1Sw6Dx2zkiNUUXqG",
  "key1": "3dbmWVhQJ1JNvQNxEn1TMw9aAHGrECxW77mYJbk6QEfTgr61YZ7goVAwEJHtphL2zBFWPp3ytcgjec3XgUjVWANX",
  "key2": "2UswZZPzJKCxcPKUBthSUoLga7aHdnQ2cXhcYyqvxHimHfQtcSbePKNx1cvkzzZ3VF7Jdzze8BQZUNC1TokZsENH",
  "key3": "5sKDQaKQcUiZfw1DzS1AzPFTVpD9vZAN8nfgLhPb34qRySot53NoyXw13TvVfVRd2RuKZP83Cybhvv1gptkfKJ5u",
  "key4": "QQqC5Rry5DDGvPEDRYGqJ5qQ8qBtEyBAj2nqgjAdmpoNa4Yu5CNLFdPH8wYGquXYDs42oaKUZXyoXXJHAQyFQNP",
  "key5": "3h3738YVtAGzo7sCgXqQAcfDxhT6psBJfUE8Kyghbq8a9u2YRFAh19mnJeWNouanM72aUFCQvhdWoNGbndGnYeXW",
  "key6": "5S2Qrx7c5Up13wZxYU5nwhnn5tmMgnfvfsf99byfHCXXRxcq8GTcMd6gZZDBtbsWov593pGTk8gD1QbvK3WWHSFk",
  "key7": "4M5keEiuqJ6MioPNCfzQU3aA86fSU4PyG7EFZN1uNCEuYmaDaF84ef55WuBZjNVs53XxkrQhCnjtpciogWSnhWWi",
  "key8": "5DJFb69BytLUbCxH1iYhJKNsk35nieSuKUotdzCLqoxKkWaAtc1S4EZKqaD3bzAaCTw8b6FBd4JSJ6EFgShNxN9d",
  "key9": "5E28pj74tswU2kdYZGw1RUkGM57DPDDCpXcFWc1eLsKKjokRo3VckAc5a3rJZZRZXGRoH6YWsna8iWoASJv4pmFy",
  "key10": "3SHZ8PhyppkXXojK2Y6ebRRG6rBCeozsGvryzr4hi8Ajiyzenph5rFPZBFVwoVwvJYDTTGtM4myCWumfPYtdp7Qr",
  "key11": "2cavSKsWYyP3oRbRmhG5nDfqpHAXfkLibHkVf6o8XgKr7vW2z7ko9KbhNLBWoBjfb91NyLNz1MFXMVkhFJGp3jrg",
  "key12": "4ZR1cgv8GtYSV1Qd4Cs3eQaU23Q1bXFxTUt9EmLXi2jiJ1gy9XD9gR3cje6HHnBAh1UE5KbqBxV5NLmsFjc68XA6",
  "key13": "n7969eddf9tRZoV5dH4uPvcM2q4hpTLGejvwBTpRCXG8gPZwo4z5USb4oDogXSWmX5V8HaJ9w7bBibtaPNRdqh7",
  "key14": "3qj5AmYdgxhp9nCYxLvGttUr6C9m2QxNcKMqSY3KBGmzSbig9EhfZgKuNkvxku6DSLdETQhAeCVUjpmnkGSdVZ3p",
  "key15": "2WUsVXcVYw42pjy4faKHTi6zH1cCKBB3jAjUAxY4pwxqrfQ8uWEyUn5NbNF9uukT26uzthd46ovFUkFXUSZSd2Zv",
  "key16": "5cRfq1tucZ64Cs92rL1KbQMjuazB5aM2YbeWy8HnMh8ANR6w7bvwA7mCUTeeyxMAPTrsNzvwHTs3wHPqAW8raCei",
  "key17": "42L17FGQrezSYowf8UUhUyKhcdPb37tdU4Av9fSUqC2aowA2G85UcSZLYjgWSdi1CvDnuTPd8GbbEP8pZoKgxtSS",
  "key18": "592NZbwHgqJ1WSGEN7uGv4TW37YbYHXGCKsEuhfpBU6YVs2wkAU3eyWtGey6Qcy46jHoZMB8wHrQAAyc4w3pPt2k",
  "key19": "HL7ds3gug2QDU4KXKjguprQprCKwrNRbemdSdPPZT9SvXYpcdyzB7HpfjpCyEYnUAKQGbyqeB3oKdceddBTwcim",
  "key20": "3LLs7dNjNbX8d9fo62nnMVECRAgf493xRx4ZZpgAQZGXEZ7ixHVBBLygtLqje3bTdotmpKkG5aGVBzo9pdW1QGcp",
  "key21": "3KHivRUiUX8YyRhzZnacJFK79F1zEYwBJn3jyj2g8zTzWvThDmDEuzacE227Qohi77sYa2tLpA9ZKHPibdNG1md",
  "key22": "YVU9w4yquDuJfDmXiZkqY7Spjqdc1aDGvMxsLBNAFySTfdQ6uQbaofrzWqmB9eZPiS54KPDZUsqKEEvvVRAMz7x",
  "key23": "5QCxGu63BsmVzBG44cCa4bRvVph58owbeb8jFJGeXKFA2MTfuqZHw38GyqiaE5UuswQo9n8SKVvp2iQdrR8DTGNY",
  "key24": "3QwJsQZvtBK3Q4WQFq8FRPrhSLZPb8qYZnVaTu4AHCFWw3s39ioT4pkKk9MexSjs8fGDo9faCWZTmKyGT8CdbEm",
  "key25": "44dS694RkkMWj961cHtv4iQNMhDNTxvc9nuPAEzJpngpUYERK54TS48sgMzmsdEn9A2G4SsKQrLGPw62ZB6WYRhU",
  "key26": "32swv92VbYRdpjZmGPn1q8g7mbuoQ3eDPDSs1eeYFLUNTxc2MWacRfHsdxY7fuzgKX9r2SzJA6q4pXuEeSutnUhU",
  "key27": "5zEnywpYaXMiMTth2iso8BU26zJEW2NPoUoEDgpa3jAdRoJFQzBehQUhBw2e5w7TqhEvmj232Vnuvn1TYxMLuksE",
  "key28": "2iX1whZ37HeQm9yjJaFfbiKJmaLWiRreNJPM16kQEsC1YdThzurs4aKjbCntuyNrgGQLUtWA2a51aBafWLfPZJty",
  "key29": "3djJyfWB45UFtdayqkjZXnxXbxLoDkToiwU7rujqzn6T2ucc3eSppQk3uK2Y8V88xNNF48nDVA3iJyWhxvk3W76U",
  "key30": "3aScrw3BBdnyyzskEiU9EtgWAjC4hxZzzqvYkDHwcE9d6YiG4XKJ4mUs4TDL15RGSwsBFP41uwk5si9b41dxZKkB",
  "key31": "5TVVgqpuZhFUufnoUPDxbouAjMacWxCeyVv39j9reEef6bgKAe57v6EdHvoySkkexLPbHuTxSkU7ASkX45PsVSmr",
  "key32": "3nEP1kSxByNU3riVQDSUNNR1gTtZ7ePyVu8QYk4trpVFDyMDgfjp6W64EvYneJFsXvZthEDbi8YkoUK8Mt6pkwVe",
  "key33": "4KdmP6DLt2yJQorbL4RfJkFPpXnX4VBysbGtjpS7HHHJ2HdWRW9nf4N2BqrjphpzLqNJkEuoGHW6etPknWRWtT9u",
  "key34": "3DrbmG6fDNEZuTJ7A171QrVzonkNh2fhCup9kTnJmKcbb9Xr6q3hfJTJQzYuWTK7V5rUCAnZMUmo8vK4TPNTbNSN",
  "key35": "zXaLuFtTgLEUG6JGys4Zs3cPaZUgn2i6sJ6La2EH9TFKi6w9YGFeta541GQu9A7dhKSCFbxEmo1neaP6BEWVLUL",
  "key36": "3BjFu9kL1VmM2RJWDbPSAskTTjxYwRcizcRHoXAJGsAWesUSSTDzLjbUCPUSF56wbbUMKnRZZ1PFvTqvN661YjUa",
  "key37": "5MomNPKzkAxYR7QAPTFkZGdgBLQ5nAXUwsdVaoW6CA67k1GN5kmZ5adikkbQunFMKFRMns8hc2MdubTYDgAw8fQC",
  "key38": "5ysrtLUbmjqXj7nxFRryq6HKAjC7JcfT8tkBKx2WphE4ACdz34gfjt8p5JChLLYn4pvnf2HQkPyBfXpYQW3AF2i6",
  "key39": "3rcEFwCDonnVf72sk5Y8unJ5Ju5tPioEsvLT4wPb5uCocaUJ1BkNsgL3urzaZspJ1vGBegN6FL2dgmvzziFrx5nu",
  "key40": "vBmZz3Kv6cLmHUq49veEHLmFpB6zPf4Q823DpoUNz12LN7oGEuAR8XjTRy91vnfehpygAcE78aJd1ewUuK7HCEP",
  "key41": "y5SPKhRSm4TEsneqiBfMy4FV4EsYw5WUX1kMSndK2WPZik5Qsys1wwbu7bWZA2hMJdQfs96oMVDZr89fwXttFsk",
  "key42": "3hfVzUof7BszQZ6MRn5x5A118ePqUcmCpLzPpRjNUABG5FGPyi9Dh7VQ4zAsEJSWJQFs5X5mF6bvTTEutZxDe5r",
  "key43": "5DzdvbjzM99YaaoAbojmk9heMCSPzJvCrv5MKwmUPEZscbGeB2K29LH25vdBLmZXhuASBMNrCidKLwjq5re8rCwW",
  "key44": "28dhwmBF7CU73eL72sAhvPFTzBYDWKoEGcgdPWzRHiAR2hKFuM1QAg1tW22m8G8NrK4WzL7P82yRHypdimqPWLDA",
  "key45": "2tdYkfPWSBY1iCbvEjpUPXFFyTousTugTVNKgAZ3YAq9871oGtRMdnRedKUNjD1t3akpwe9Pbqu6kYhvyDvfnvED",
  "key46": "3ummSDYtzypZuVUAbwQXgssaCfP9c7xDnJG9Pe47dvDWQ5g77rKKSfLXSB6gR63DiB2wu6ig59oDo9WaTY4JhAgf",
  "key47": "32r365sk7qQhpr673V2DzTZ1E8UmdxW8mfVhiKThuCeuqsAHnVXvqxykxycPXFJ5vXnxQjdxiKkhdtBP8KQB7rZ4",
  "key48": "5UnSKw1bTSXGQyCFi613j51z7brxLdx5uhJY4AHfjUbDzn2xPo8jHETk7aU8ec6yV6vZBBtMB6hGXtQWdkqBThvm",
  "key49": "4JoSwvCWtLSnqvrSe7mqsfJfFkiUpqvXxXyuFJJ4eYPZNo7NJVTHgQfSdBmm3MHXVtDKXCqQ5o6j8PA8jV96f9vE"
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

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
    "4J7CvVcAjwmkEHuj8V3bNGJYqGQ8yvU14s4PpBdrvh6ycHHMLTQZNTYXHPJcCbCXWVRhtN9Ebp58qFMiAoQjgpoP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HRkrbVao5aBfVJzFxAcwUhmxcrojz7Tabu8kxgD4AQPapBc62iQ1xotoM8GmPCgtgRsVrqRKh7aoPbuLGrnPB2F",
  "key1": "5G5NaD9hyJZkedVfEWQwFZAhKL5gM8xgexyxf8T2f9QQ84ZFQ4vdg5KgM9zwtX3KwipssDVD4qrTnmqVLt3WAqac",
  "key2": "5woM6aC4LMS8RqBUTCtoJPFxbPXqVjKdJrW7TwyPPM9C6L6KpWaWS8sFCxoGspBTXdaFc8YYa3uFAG98smbnJDKf",
  "key3": "58WYctdHk8c4ssToxsygFVmjRBu5p4GUubqYgwGfirEXnwqFr7gMjo3tatRPPVkHTobBnnNkgotnj14axD3Ny1SR",
  "key4": "3f7L4CaMyMyCegZbDjQAAtjXWGcbJs3eakz8c4xpvx3eKDg6J1wqBSTh8Av8Uj1mqsLpU2UgvzaSKW1BvbMSwfHh",
  "key5": "4a8zrcDdEHKsbCM56FcVwbaG39o4CU2oTJtABMseWpj2VUfusPBdW8Qkz18tAZBs7EGSgp2fZR8mtb3vtN7AysVY",
  "key6": "4rgCfoMAfJNCELHfLdBnVdkK94sUfHYHc4FsCnXgwiRm782UD5bB39JQAJYffm5zEfKT75HcCqr9zKZSBXpebS5W",
  "key7": "2GHajTD2UHFSPwYn2s5fzrAVuKkcNrd2RFxb8HEi6DKPkTb21tAp51VDr6wDSXusgzYgyyFd4wV1EJuNdtaAadSe",
  "key8": "5Y7VdZgM5fDtH7bca1PBJ5tVLukFFfriCoWa3X9GZ9bYY6p8LpTqJQ9FQLcCDWrUjAYhbmXtE7nXkHAJmQwvaLUC",
  "key9": "45YEqBrzJiDRp87DZnhaJ2Gs1idyC3yrkP54ZHQzB1qu7V3N2RN8zS6t9nnPRNRDmnkxLuD4Vr8DdMGRJuPDUUYC",
  "key10": "3GrYFdsijGRXadaUdQFew2mYvk6K8UALYc5XBDRketYCV6ZtA1DTScP2DrGK3tqpcXs8PGyKHabJHCBTKD5ZcrER",
  "key11": "k5JzScWvvzeZDbqRotC3mSSvjVquk4weyoNTfGNoSRZCrCbBGSk4fA7Gczc9Af9nJpgfwLwD5KNaFYdD948GfMu",
  "key12": "d1WZuZQPPuUCG3iS3DUpPYEKgE7w8jGzTDCPjt8KAAx18vfnzH6Rys5DhEv2BwKUbZTDeyTvo5N5esu6Zevmna7",
  "key13": "4fBHqzeKjYuq693bYbkKXZT8ximgdiq7QDqKZcYLRPRn2T9HZU7BUQnioNKj3aHhMGFD4NWLvfZ5SQBuv9fa4NpJ",
  "key14": "48N64JHAyYzZNiwFUrnNzFm9w3wbbypu7BpGHU7iR6Aqxn5wn5XwaQpipBTNPB8u5DYwrhNSis6g85ZNTrTuH8Jn",
  "key15": "4TnHhLHQNtviG1rXa7pQ9H6mBTd6QHaVApX9hfc5NLjmXqUvSkkdJ9nJg3verfp2iiFEVPfUUeH3hVfMnA62wckt",
  "key16": "2B3ASs3izNRMHzRvqdCkyiKv94puvG957nwAbnYe962zidZz4h4nrDTuRMTPGaBj57EHHeqGjU8oHVXAHLTcgwPQ",
  "key17": "2khbiph8Sfc6pzFttdkmTBrYTsSDHvZky4beZqG7UGPK6VJkdp3ZALdG73YcYAYq1jKotU7z4qhNVAC4ioJryh8t",
  "key18": "56DDfcKwqb3rCPsvhcD19TvXHNUkVZPKDmHx4L7nPTk72kUuFa67eLv8azqfqo8cXjcwmcXZ6RVpYTDivcSiDh75",
  "key19": "2VJxcPCF3jZbaQCdpvjCuCTMFLrw7tThSsVqFy2t4A7qSjnoxLSgSCafL1VM9kHU7VqA9sJSKbRLRQq9e3VZThHe",
  "key20": "Kznm8p43JoGbWbo65mFzPT8ZAU71zJLVEXXNZUJupKm9hu1wyDwH2GApzBbrSRm2tCHcSbwu89CaW1EQrDyepac",
  "key21": "2G8ZAUQXU6qzeArsPGDP2MwdJmUfNj4A9NSWbpZpsyEJpZ2jj2QtciyPPuWJtaYHAN6unygZ3MpbF4HKW3aqtgok",
  "key22": "3xFNdymcZUUFWEGbggh4FXKbWSprUvtwCGYJ1M81ReQ1AqATSTUHuuxpNziJryfJWsNCaCYNz6pAUHshbSL5ewVJ",
  "key23": "RApr2D258ALZeg3dVDZ3V6QzaFwBvw9uHxgmuDh55E6SFNKHf9HYP3vD3WqXEfnWdHkRFdshM28xuBv3JxkjA7f",
  "key24": "2WB4iwQv8LFmNnSkDHbm6mya5aCDosgxaeQAKeaoXfUCH8vz2Xz1jnEsKoFM4nZPUTccB9jw9T9x3ZGzfk3dPMS7",
  "key25": "5LStayguCTNTvj23grgFkdqbSQ1wrHKyNuVnwC3bDeiHg2oPNs4g9wFrF4x4qCWnPFpQhK4d7hXKh6Zb7XHT8EwZ",
  "key26": "2qKYhABd9Nfco6XdZFJxtVUshwVu7ZA3ZK64MufqKi3ni8wdAzvB4iwVTdXkj6QR6uqw5gHwp9UCVABo47dHfcdz",
  "key27": "xs4ieGuKD3x1ZpHfTm8WQ8jPxbzG7G5EsBheKGgN5CkyFNQioMjdTyzxPsSavVxtYTeeezgMHgUpk6md4YhjXtq",
  "key28": "3x6ZMhQpEDB9tFUDBSNTRqzN5bHrQ9dag8wK5ugMa75pMicJD3g8Y8RULZbCp5F5AeuRdV1xtJ5QhkidmjMNHzKg",
  "key29": "kANHb9EDzacCVdsLGHUsooZkozDDL6MgSdjbRENUxg5GigWvV4acqRSReyo76YtzSezbi2xfUAAtwuTfkoonaKP",
  "key30": "28JXcevtNewj1jttqtbVi58EnRJD6TebXw8DdJmsCd29Aoh8gdHu3V9i5NF7Zs7LGuBhhMcTAXFfiPBZNhjgpM2G",
  "key31": "3ksVT8hv4AQzhwYTWUBTxxdpto1zkHQBvUM8mNua6KfAa2R2t3waP28WJ3rhsPhWyBctgv3diicS2DoEpZbXu2Lu",
  "key32": "Qr46Bhej8Mgp8q5DHMgXXAkJTcNKNgkH3h3D2Hyozj81qxBwhdqTSzobrDFKHq5nadNRsPnfEP62Ti8ifRrw9mg",
  "key33": "5KJ16VntqVEav32p7AiQ1XhGqmVDmsPZnBvR5BPmSTgJWFhEFymS75AAs4cYhFkD9MqzJ6NRTicVeWAyNo44JCe2",
  "key34": "4qEVUvjsvsRkgApcBa8f95k4vr7qnRrS74FpYF4YnQYi59rkeyRTsQirm3i1HL6Trn9MhMdVtLzgiQykVYQNVW8E",
  "key35": "53P7xWSEDJxX64vYX6yruBfF48CmGq7yzMsMda3fy4stUscL2gpNagerh8SAogtB1Wnkx6NNxnEsvTCiDkKKcEdt",
  "key36": "3Tn5ythPgsSYnE9yfYRQHWK9EyaweydttevycEVGNM7wi1Azfugr3QWfA9NA9ixzi8a7fA4yJ5LxgsA1owynNwAz",
  "key37": "55Sc7Z13j8HiSi2mexxqEAG4uWGzEUXevSi9Qb3Aadx6GkXsVgWzMXFREajhqvvsH9efuMXcW9NCTrg1m2SeQ5of",
  "key38": "5D8xFaV3tsErp3QavBAEUJPGEpYc8NXRDvcS3vshQTSSatcruDAKDmdVeeRfwV648jSAeZzxAUW9YQgpzTYAb9Cw",
  "key39": "4VSDxBxrhXq6LVcatcjUC2pAUXnuuwwgjQW54Tzdvx9wZbKwnekVwe5WkgjmPbACLZyx5LBiGjwBt9UFf9ytiGxi",
  "key40": "2FNRh45uSHAKGNUwyfXgUx5RvWjzFypr65fMX7KhDJz7Yacj3kK2V6rkF9aHrxaUY5UKtPFg6a16ENuwgBUKwoMz",
  "key41": "38CAHyzzrhoya1tDm2HgZK9dbsng5h81MTPmy7zm1ncDpfLRVhvq8AMYXHEkd83jKVaBzspJbLWF6i2XshN9Km6j",
  "key42": "PCrWSLkZ72Y5EJvfkSdzgeRGWymWoWHCTNUwnnyNac1FzL99MbA46X6XJoaqKphkWP3vthFXppDi2HMTYoNhsqf",
  "key43": "4D5bxPPCsJ3dmQDw6CUkQ2NsZ9oSC4C7xMBAtbn1Vqm922hDNUUm79X6FjJwoeBY4BFeQg3RB7qptnK6Zd5xxHZf",
  "key44": "ub9h3Xs2QJh56QLDJyF4iZPiHjKY2Whihh5vT14QucxWH1Q88fW6CJPREWj8XjKkhPR68HwkjwmHe6h3HpiSBkG",
  "key45": "4d4CowSqRwqraUgpWh7ikCKBvizCZeBmsHwSmUKrXgaxNHij3NsqefR3GPZv5AxjvmC5V92sJWK2EBoDoySrg3Ph"
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

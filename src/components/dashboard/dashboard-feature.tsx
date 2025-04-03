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
    "4db7tSaaUMcmhvZo8yFNahBuzszt6MUeH694kWPLubrJkXLXGyqHs9FpXpD9jYiG36Ne18Lr8oh6JEoZTt56kvz2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F7KK9Bzeo4SdoMexVkhHX4g7B496NGqa3vxarnBtyk1bxzcjTurmABf4gg5RzgAMZnXy1FQTDKBTJ4Hj2M4BqEH",
  "key1": "5siCQ5dVrZMiTZscbuGG4QepzQGAw5RHWGhFhpiNBeCTW5PgMrnTVicWx5D7SUq6uyuGH7wYPWsLuUp9Da8gfzfK",
  "key2": "4DFdGe8WkwCeB6MqJHBJjCyPNmcBovR1Wp9xW546yq6X5GJk7JseBzhB7UQgpChQ83ggQ76qAk9SDGZTKj4aA6oN",
  "key3": "2rBsXFaC3dpbiAqBdjwE99KrBtfVTWiHgS2CMNWKy1x5MTR9u48SgENi7yYdcSdgkvxHa7e6Hyz1f55j9KUMQpM3",
  "key4": "eXPaE5aJQu9tbdXkGw6FTQ3XhuG4oVvLVEHzJ2x4sUXdUGLzhAfBeCLuPATXuBMYRP17dzEjQ5XhP1Q7Bt4d5ye",
  "key5": "2izDU4sMiXWMoLb4cbZWCT4jj89T2MgEtG7fFkQ5PnYhiRCdi1X7yyWg6JEHrGRtyghySC3qRofVM6dJE8UMbjds",
  "key6": "5RGgtZEcJ2CQ99d3dC9TSmVVQqyPWX8Q6NGyQn6GkwYJkzaAsZKMi4WLwDzYPQsns2ZmwnWbF9yeJ1DToYuQxKci",
  "key7": "2MrSy9nCZYm51F4jSdbB5CKXJGPktc7712Hph2HCznsiMZRs1fArc32FdAa5GXbHvCVTUKa1ab3yBZnpTkT3Cu6h",
  "key8": "1T6pWj54D8tUjoHGxphNcnCPkgPdHGg6jFNYGE32SL8A2NaCJTNFkSrscX9sZomANXUtizgwLj8PARfMudMC59c",
  "key9": "44P1eUR92UV5kyaCAxdhTQst64zLJ5B32hxinD9F9UyUAWsmbL7dUkMLpXttaW5uitT65YnuhyfkCBLyvLiAbaUA",
  "key10": "VWGb1dQSF6m3HwuJQ7g5f9ww3md5WUVBmGYkZVsH9L5hcBmAJcdAMj5YiD8AchdbZT6ti2XtjeGuP1sUwuHy4AG",
  "key11": "2mC9rGvwigVPhoceUsZA9VoAzzmLpiNmf4H2WPhXc41eCiAA1q3JjU8yhPJJUAu3h3b75yZktgVdRyK9qohrPD62",
  "key12": "5qxkao6b867jFqzuEs7y4vqKDLpSXNUyMvXtjqA433fVp3yYwj6vRUdFXBErcs2CLHZHiK7HccRFsNAg1PPCTnV5",
  "key13": "5p8XVyioCFA6BuQWofAUpKUZHmW2qHeepymoexVFvWrqQKBzsRR2nMaV74b149juEHdwzYMyxNtcSHrRbxUvtQ6c",
  "key14": "2AbEwYdsYZEGU9jwqSPjochUA6wLJwoJDRwEoJpYFiWrBkH6UQKkP1WcUWHqwY8MGsfCwjCgBUEob4KXLSJDfpib",
  "key15": "3ge841LZFcV61PnKYREf18XmTrChnZ9p8yV1YGYeRd2sbPxeuJD9UVrr3RXkPMPFbm2i8DUk4cRhVPr9GKzX4fYv",
  "key16": "qpdGtFGSprHoD4nGVs5j7V94dXcZjrxSwKBpuKkxMwTNp3enzeCJHeSsg3Jba8vNrkCS3VBsQFBZxeqKo6fWMJY",
  "key17": "33SQJg6MgFFrcr1GQBNtHmZksEeX42DkQ8HdRHjPZCJ9WCfFfeMwrGjVrpn4zsxwrDmEhoafUVuELuKHtpHZUPRC",
  "key18": "4bJcTMvp8fBEUubtbPeuAU11CBN4ABhM6a8TQb14MLNgjGiVNVXuicgCFnWFNTg8ZHurfTBatyk1DBV3fCmuBc4k",
  "key19": "Ekvjxi5dF9a6xqBZTewHddJYepekqnuoPptMSPbQr6uGRZ8W3sz1A2MgRGWnc6vcoKW5waWvjtgGKQy2MchZhFJ",
  "key20": "RZ5z3ZUKbGkg6V2Te7VFz5qPydYj6rB6WgpBxTth3sNuXZgNGmzrUsruoQwaracZiCuxogVkBj3NstYkHF637he",
  "key21": "XxPKPF7cwXVtAUUvxfnjtM2nXXwMwCuGivqc2f4Xfa86pAoyBEwip1SemMr831oJts7j7HKDBY39vgYh5Urm1qd",
  "key22": "4iicMusfXc5Wp3kUmC4J24qWSGc3DpH1CwFyiuhhFuhrcww3EWdkE6Mh8f2iy9pLCDKr39ynCJvDhNwDswSCFCX5",
  "key23": "2veGQ4ufwQNrUqe9o2D42zH6n2CSUyyEyguZUYjxfBKdQ8RC7AzdrXmyVFwiMhuvby1BL2CYRnkyC652rFuSnNms",
  "key24": "2mwgqPEMqwLyZTDgXpP84bdRZqXDApqsLGnMN2WGchdQAJouN3Y1ah6C9DwozemjDANSVjqFiDfmFzxa2HEbRC5d",
  "key25": "5Vtt98f8a9XXpReuKAqkKdEW2bj8ycGf7gGneggxe21kViqpHFziRMSxgPhUcPYWC88e7mdycsBUp6Bhx9hMvyst",
  "key26": "3bQ6vbsC5zMQm29GJy3A8V47PTEMqknV2d4kvK3k54LtTs8HmAVDFUfUbzBwhffyyP2qa54weZB9Xwx6aNzin3HB",
  "key27": "4i2Y9tHZd2bJ9UbhLnwk7WcEqKQVus2m4Gnw4cXt55ipoT8KKSNtH2zwNtRgMHWu2ZFwwQvFvkHxf88ZC7ZB7fT8",
  "key28": "ePsjSMZ3zaWynr5agF7uXCuAfTuTYcL3NrpJ5edQqXXc3bmfrPxU6deCwZspsoXDZEPQ1uCtjgBVNtaXEaZvQUX",
  "key29": "4NB4kot2Tg9VSemnpZRYGn5TtJzBQ2mknhbopMwkJTvvrKWjKP9CzNi7cvrRN8cbNQ6ud9fVKiBqtj3UKM8AThLd",
  "key30": "2TpDJHFA6xM6mxEZQEpi11LL9bWvPDqUJtFoArQpu7n56oFjpu6uQE3ZYPKNvH4geVjMVedxvHxQYxtAi5h2Miqn",
  "key31": "4Yb1N11jqGQ5mbbFAHJbmpo214omhhEYpw1mjR1GUqonWUFtbfJeRu8gVU9KBaE5dUEUc42gAiyr6A2KfnhmTZ4A",
  "key32": "37cLT1p2gohNHKZb4c86iCBX9DpnvokiCBRba6yWwb3TTEtDyMrAQx5mKhjoWrvrbv7ScidCojqTTQyedrQcUT4B",
  "key33": "aC27QitNnGX6ZpXwDWT3cgAvpkt6baTBX1J1tikP53rp1dmWDS4MobHRrjaaBm7T16m3ZsaveBC43NEP1gYDNiR"
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

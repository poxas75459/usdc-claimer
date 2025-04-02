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
    "5rZvkkVfCHRPt4BQJC3aDMHyT9uY7H1pZUtbbV1fQT5exjuRCua4WvQi5xsJGutxziBfp6K4eCrKG6CekErPJKrJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qQkDQs6w48SHjNkuND5VJFFhurP4caZ1Po3gxYDKnBzUoNdVaq5LALapS2v4sM9b2jdgRfZuzeuGXhhmcAxBgva",
  "key1": "VLnWrGZYx4Z6NLqURUkTKsBoTL1Cpy2iBSUn5bGvLCYti5nFwM47j5WdWZn1WkBqtsfzVN7ELyb9Z8ASKoUQE8u",
  "key2": "eBCWRUL5FuX5aKaVNgmhr2mifNTNrUb15vG1MpK2YSo1Qjt1Q7p7X3n6uXGsMwD1grzfj3GeD5UX5SB4NC5GNiq",
  "key3": "4S3xfiGWaapjkmhaeXBLvyp6pt65m9C8ueVbVYegtH9JDoFxwcqNWnGxZbFQMZD5roSM9fGkxM5RAZq7miv3PePM",
  "key4": "5PEkvoW1eBckHKKzLtSzhANRYyxDogKCcjm6Ki56moLuYTGVHD7m3TdKEFwzCFekw4MrFFTHT97AKrsokGuw3BPK",
  "key5": "5PykFYV9JgBFw2PQXHHJyVhDXNtYNfyt4SzzwEs2TdBMgaWPaTgSVqpXugQahkkQf4YD9mchebrJDkDpLzbq7D3Q",
  "key6": "57zmcPHRYw8oQRSW2uGANMKiTS9BtuddXsCX9BbDi5yDoTqxooStxyy2NEAvfyvFNjE6UpDufw1ziTdn4pKo38AB",
  "key7": "43zyB6rQ8mhfrb6h4CL2yPrvL1QvcRj69m6vAMSXnwi95BREcF3iuuvjKyi2GAgow2VJ8kZWkx18EHGmucRTn4oi",
  "key8": "2TtoRrT9DgiNS8EcGLY1NTnTS3N66NNaG9mDS7eEK2j4MQnGbGAiWencRVGQ9zX2osB77EuWnYJirUdJATHciPTc",
  "key9": "3e7FC6SEkF642inj7i9Q6oQnC6FeWPTtLCxG8SBYheVzDPXdp7KojjGZKCQT9ATqyD6jnhmaHx4rrrkyiNoTcf2z",
  "key10": "3THJeq2xgaZWnNdCZs4YYpULGmYbB7csrcJX8MkhSGKMLxuybXDKjBx4ThC4L2qaJsAxwXVoc8ZFg3epLTFvcMUn",
  "key11": "5ZgS63Q1mqx2NHVoaqWhKZbohMZBPctADmPD2AMRDmqhvQiXKPFWsvabXUM9RGokKZh31dUgDeTVRB1A8LVo4j7a",
  "key12": "4ZLjQHmZ8HEJGWSdM13FfPvmV3FSXAd1baDDKyiKHUoqpK1Bd5Rtcvg6zgfSWYXw4P56xfCPMkuvikYJ1B2XGU8e",
  "key13": "2xPrvaazGLWHs5v1VMvo4ie4KU4RSPRdu3mHWJym7fb82E3nDonSByQLYdnzUzBvYiRmDDnXLfzyGiECMzYM3BYf",
  "key14": "63oaFrzxkZ1hDfQQk3JNwwgeybXiue7GotsMeqhWWkJSBUw8JzcskaNTA68ZBPcmaJSCvaRZYQ9h5gvQtpnSsnaA",
  "key15": "4f9usQttCEsGmgEhVuEtZmeYKmfgpZoqNdALEe9oh5FBUkgbppQLefqoTJGvM9P1QLQD2vdudMim7CFN8jVa1Q3m",
  "key16": "NYWFHzTuEhrwdfsangJ9WBvpRWrFsMxKtzWbn9oe2icLjmMzjquND3hp3QdgT6TBbZPEiWTzcww7gUvkxAk6z9H",
  "key17": "2ADXN7yRfAHJUZLoKSDpBLXjL5pxdEUiGKM3XUgo3HFQakfCa6Wt6yyma1EDnsanBkop9uhtFzsHeFoRc2HqSEpp",
  "key18": "X6XQe2QpsJoUrF6mRsV143uutF5DFokkanaWv5XN2U3T9ZUUoroMS2hDU4dkjSHLJjsEHRuozDngegbT3RixuJW",
  "key19": "2ZDzjycwot2YxKtv6B2dMB2A1BhNutnkYdtTWcDjqb65aQHLkvTACK6r2WmzUxh6X3mqzPUoNxP19WsJmvhd59tE",
  "key20": "4wBsVvuFmvQVBJ5fHJqS1uJ9GmioFBw7rx8xcQKc2r5mVwHSDcpZ2rjA1YCHaXBmGZ9fTqbFTgs3pygCjuL8udgR",
  "key21": "2eiQFVWHh6vWFd7uXsPCYysaXByXxUZbY3no6H9vHyU2DgjsibnvVQxf2S9JwTpRt6VrjKVbAEe4EeEtR4i7d9DL",
  "key22": "2VvqEUWjBgECc5j8uFcKqZgaB2GQy5hWARbkDFBaiAoFRdzxW6dx5wHUQLwE7gZgKRxibap2BnWs7pWqifcRb79R",
  "key23": "GPUrFQPi3n5R3Jo7KC9v9n9dX856kdW4Dk1yvEfwvWBTPteemhY7LkRMG5cSnhVud8NdNWSuXi5iSY1XERwHxZf",
  "key24": "2bFgBfbfideKWaCpEjsWbafRbbELNAZ8Edi4jxcSdH7jvZkBWdfxP3kiap8cMVv3DUfGaDangDJEqpRCeXdx9LmB",
  "key25": "8wkRhKKJBEM2fUwXBF2r9oBp6ejV22kUxYXfovFMJUv6M1wWUAtawZKdsoC4589JzMdRF7UuM8QQC6XYpGSWGmA",
  "key26": "2txTesFkgn1m2Rc76dyTTohikB1wvDyspKDxVudmVhkhRjimGYrjHxDC5Fg4P3MchVvx7vRHcLJUr1AKTXJRLQbU",
  "key27": "ZNnm75rK9Dka5UYQRu1zKJqNzvcg6wibcB4F34JwQFEKicErK4jdGoasE1xut7dJnmTF6qqKg4Y3ugrnkGhW7Ue",
  "key28": "vPoMBxtkY1ffiYxGBoQ4cmVmMyfqMmj72eecqjsyieMEPPArhKPkPNwExiozEtnYkMV8UwBzJLUgrm3qzyteRn5",
  "key29": "43A3WwVD1HFMBevzTkK7ti5sJoSwJgiQQCnyKGovn1PSydSfzRJctQy8R162XsSixKstihQ5HxBZK3dMbwMgggon",
  "key30": "2ZZpkGQeXonuy6puGszHiLQvUQZRa18tcc5hEoivEd5H2wgp74teyJd5CaT5bhJPYnNSYupVAd51thtu4BwRgu9Q",
  "key31": "4wqMB6dpph9EKtqvpgFL2zBd4M8s8U33d8rv7zFEQpQrxFPeP2iJS5yE1hKj8a9wqaDHDdYNYtv3gLd9iGZMXL1t",
  "key32": "K5yjkunoyVUMHMKzdrPgzFq8JYv8zZSz5VzyTC9MaEcdVHzv6onw9T4wH1sPrhW2QBGdWGchknvBRYQxj2gnZHn",
  "key33": "2mjnCvkV8DEPCRZ1PoSALKCBZu2dqgPeFTLweoW2sdh6atuDWPAfCpyMeRHpMZjocYDhorMC3BqzRz6jFPmYNyxk",
  "key34": "xdaKLpLrTuBcqkAig5HefmgP4agwqzXwSvm44ewnrvMVxGrY65mF4jtNbfPdBPupwzDWvzPk6oE5gArQdVnLq2B",
  "key35": "4sVGSpW5qo6rTrtaPJQJHSFP43XWq3iUmyKUToHw2dKsvUKqL4az5zdS7Re9USBBrkMzPoLfsc5i8r46KCQHEf1m",
  "key36": "5yjr7CBRxdwe9vsoiExAaJ6WhX3j6xmumdMGZ4d2kEid6kikdkZWKyGkEjxUqaDtVPWvMBRUWVC4YZDwNRYoVgah",
  "key37": "4TYmpgJnhoz4axXijMbh4SnVfRaehNXuzstzB7sLACMgZP4byx9GVnW2wrQQTwDSqcT93RDKVyZBogkxnUDzEzWr",
  "key38": "CSLTfJ3jr3PjVqfT6haXwmRQBhEDHcfy1rKSMKL1drtBb63MYRpW2U9Z2s3JuZDZaWYbgdQkLDRUJzkPvfGCRP1",
  "key39": "4G8bjqcEgdzbc9aSDxcgYrNuP1mcWTz3ivpo7c1uoRfnhoooiQvP1231MCCNWCLzu4xsbp4iNYBJqetGkpiTG2kX",
  "key40": "5JBgfuu9tzVc2Tc74GdNArCoYaKydPoMjpyvPcfrvEAB2XYe8FUkAB4H2xvcd7mcmJr3uSSJoDqhocXBErEHhxRd",
  "key41": "3k6z9VdPJxECxEEN8tmi2pwREhFFFtSFvHtTt4vqWsu6KafdbGmH5KDUk2G7SewfyFNQcCuJwjf9SF1HbjbGyPgS",
  "key42": "46w82McuU3Evh7FFZSk4M6LeeqQu6bLJaM1A58rfj1T8ZbA1qxwL43EbYDFzwUK1J9Tu7N83xgpXQSMnw2h1oei3",
  "key43": "3yGRYfTRShBye6TYnATabAvm76aM4XhoTNTPSMQWsvWN5Kvkz21EDrWW4zwgRpDjFTMeV7Qp4jJBRvEA26RyvoQN",
  "key44": "5PZKJYYr44B2S2PU6ANzobhrV3oj3EnUQiYwauFKz6BDhDwQ3anZBKGEjbVYUw8vVA9kRj9hvFNzKMmw7FFB4ebH"
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

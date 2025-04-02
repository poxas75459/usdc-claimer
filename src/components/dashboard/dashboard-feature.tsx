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
    "5gHDhZHZk5Aatj4Dk9zZwiG8ShMtSySmK7Ccsjcg6eASoP9kXcEC2GQ2KMJo7C6DEizLvX1hjoSYpQaXncbs377V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iES9w65noQHqk4fkLuJQYHWidVJaGF2EZsir3jXj71JsxXujzEAtiTu843yEx9f8qjQo9YsoYyXbqCaAKxWaowo",
  "key1": "25NVA4XfgNGma2PuEKYatosjjLbrNobDtBP18gH64AvCJTM3nzZUb6FPBykAtoUkHmuGRg85M1ZBDAozRYnvpLTk",
  "key2": "58fVwWTxrkie6A26gFCwzLRLQKHpVTteufwrQHKg18dycCEXiGUknFxyBUHa9A9HQDfP7iGGnH58tkZ81wo6x9FM",
  "key3": "3Zi7i7hZo53jC9i7eFR1wNozxcr6F2pZBXCYixS7QvuQ87h2MCVXopaMVLGzmhhQX5FogLRsEeQpS47MBXKE6MsR",
  "key4": "5cyrTzfkjgkE7zLow5T7kH6s1dKxpHbHLmaMmP7pxrnFvGWX9vT5xfz9TS2b7qmGnjp2ng7ak8rSaxgihynU1DmN",
  "key5": "3PJSkMYHoyuXHx8ZKwqAxJKiRmHKpQ8niBZzwtq96FGUXM8Keuik6jXJ5xX5Q9yPaDKeKRctbm7pzxceVvhdYCEc",
  "key6": "3Ne5TyhFUJvo5DAEorBcpTFCtUd3TGzySgzoLc7uR76vkecS9MEmHu3iWHuwh8PWsuLFn3aGtRmK7CdjY5JXcvg5",
  "key7": "2QRX7RQjWWVQztrddHeifTDqwrUpwPJcswnV5frXbV1yGe5pjE2ibQ56o8FEd4AXMtKZR4tC1ZuE5YTrXjJ3VYnW",
  "key8": "39oW5Vgz4gtzRdaFZqt5TkBNcdESJAseeNBAeS3V1tqcTvHWuTnoAozeRCmnLv77u8nQAHVCVKgb959jM39eARVg",
  "key9": "2qd4oEWK8VdkopSASbsGT3rwt3vVA2ccRJHt4gq9aRbaSLTHMhuaBWcp9pd53gfzkeKB7AyYUpAFL29QpGNVHara",
  "key10": "39QfwP6rdBK9V2SnVgCQqNbRTTuHfqRdmUELFHec3gYyxbV6psfZmBk5UxBraGBoQ4aCUf2RDrAHLoVnopKJzVod",
  "key11": "4JHWbgGVKbBiCjUE2SZTTwCqEWeLFt9eYNsgywhg53utH6TNoBagJf2aKgZxT2QXuubhqAnFrxrkyxJnxGm1psxX",
  "key12": "4U3S8sDfCsvs26BxiJmAyTUNcAhAp6hTHSoY3W4NFNwXoHkgdVk96gqTrBqHaywPpaTJTDoZbAsamDhY19GAW4iq",
  "key13": "3FrAiz8qpNM9pc8iymxLonn932KBMjNzeXUZf1evqpBYE6LjhJccEkr6uB5fNv4L9JwHfLsYZt769YJarg6U3Ev8",
  "key14": "2tPAxvGvcGAYNeEUiUcWwF9uS5ezTDF1JfncutrvUDDYGJzfPQXRu7ni7V7pbxrqSGBkEkdTovKnq8Pp9v5htX4p",
  "key15": "2CLEY8NaYKJjWKs8JPo8MBab5hDfNWiU18XTczufSDpK59FTf6LAZQqD6HvuCfL2itkAuM1roTFoEgCngLkrooqD",
  "key16": "5YN8rRCVvpR31zc3gSc9ndGr8ig81tBhK9gcg6GndGzcEfge3BPgbkFwb8qqBhT5Sa4vezuGMQiP8MDu4pm2kdFf",
  "key17": "5h87EqvpEaBfYUdDhQvnPaXLfnkKbywM1tKmPHZfZpzsXaXstmfJgqxU8mdrghhWREpue9hmnu3w5uDjNHC7yAWg",
  "key18": "3T277y9bCP7qyCUcdZejXqt8hvW4wH7WbPHNuxnyBa9HmVPRJXerwVxK2AfkAat5GS3N4VZNR12oeHajYxWyZGge",
  "key19": "32ZZ9hbJyJzvL3FRVJbZKWUmNpaPC3GdAisfbX36yyfXR33MVABmz6wEPMCyXfHDRrY9rBpYHWGJu2871Ron7bRh",
  "key20": "4fMZGdGoFhKW1bBTEA9MgEi1Pgbzy5WfqC8MvCrPusP9ZfCHQ76L59mDimxgJEzN5mtDYRVvwwsWryLDMDC1uR8H",
  "key21": "5caGz1JsvdMLMX5ZTZmXHMh3rmogz5VNB8tPsVcmWtiCJUFS2kqUFQVLToAP2Cx6Gvxbtptp3rC5w9k5ZWNpDmXH",
  "key22": "2rCfSYZsjSfZs7tpPwcxtPWPHfZ5PgHodJexL6o3LqycMjCTT2FZ5Qb7eHDpJwFDfFiuLSPDgdNbUw1n2CUYbyNx",
  "key23": "4MNAQRQnexaBFuC9MRFD87tmTadP2zKcgLFCrLxxKqD8ar26feJhnDDVE6hwPvekZdTkLDcaPDnP3eTz9mPmeuM5",
  "key24": "2dUgQst56CKyMof4wj9BLqjcmDAbLdCCwraHyQtTbaEoMMCJxfhTEhdXCYfQ6bcoXGegd663Nwfzb78nDzSVaj7V",
  "key25": "5zdep3wXuJ9cDhXPBGMnyakV9czCjP37Lum8qkRgV1svbV8cNp8beKLpoJG81Wr6g94KW8fceid7Jnfz8n7GPysn",
  "key26": "TUBDiFXsFLEhidoQvSaEaGzEkKPNTmNC4VZvu91bQoiqkotkoYSoRau1qHpeSx113eAveUrUreom4LLh6L7UdBK",
  "key27": "5N2JRAyTuwNy2bpC39Mv4HpFcbpEgVREXiLYuVQa5vx2oTdeyMKHwbyPwETpgdfE6xH6VKBpuFxjZHvE7Q3ejB1m",
  "key28": "5HHUPqP6Vc4L89pQKgN3uSX4xq2aUNgbYFqy2kHGeS5SN6WQL9zdxJgFViGa58Cwy6m1n1oYtwn6Xt6RELvNcBC1",
  "key29": "5pHTAsXUKi7pYRtk8d8yKg261fvKbkqC2jCuCB1pE2c8sZ9kH8furhS3BgVjbyYvgTAWw372Eph9kXLXE2ydF2sQ",
  "key30": "4BJk2wEizihnTaz3FiTQot4PiivGDNwuFBDSSoGxdv1YsXhQp2GLUEhucBt2dfjAvgAAhZ1QdHDTEPkchFA2EDuC"
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

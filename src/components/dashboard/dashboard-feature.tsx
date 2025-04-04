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
    "4WEjVsW2bQMitV5E7eLPX5pdZRwH5byvfXcd27UeaEf82cp32gMDoBJZxbTauztufoLpxdbFq8xmjuDs37vCEHMo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TTxhJTmXqHSgybzNAZrbmC1qk7cfAyZNtQLxAScLm1B8xHHKAEipLJDhamosfQdUPSba4P5up3yBMGNx8Tx7R5f",
  "key1": "4QbJQ1raQ2EWDCQVGGCWNYWgfbr7iR1K9BTRvyJA2mCXRaVAxMPP8PA6R78nH2YW382Uj93vDhYDEWeWXq9rceXQ",
  "key2": "27ShAr8oe8dUQWKz2fdx2nrgF3Ymf6JmzP5wh5n6z9aBPWQUfwDvyCyhxvU8g2uL8rHPr3oDtiT52q5AoB6YsCVt",
  "key3": "4o6doD5BVSP1e65SkpdJvsfzDterJayT6Cd375TS4Yw6h7vGHngBh4wMX19A84jchWhuiRSU9VP2wYBBEDJr4UB2",
  "key4": "2k6poEQKguTym9byHyQNQMxvawZAGXPPNULxDM2i8oaJRDPsnHF3NHQQC5jdXUMCUoCZRHn5UNT1H9xUZzSohVZE",
  "key5": "3mi3m1rkWkEZwVMELcgdd6m5tcGzuJHco9esJTfL14Q3h6WVrh8VFaqRhJMct2wLQKqVTmUXykZeuq2wYQFFvZzs",
  "key6": "2bKhWsgmPazQL6TTrH4wSK1EvFnzqs2JcmWoTU2GXcdBdqtJMQzwtmKvAbacxVW27bg9c4hXYbv5caHYfjJ8Hzek",
  "key7": "2eSu9NryaGCivnym43Mk7PZuF26tQ11A4noQPCqJ8XpEvmyuGUnebrDWUZsnvGmiVW2vC79HUNxRMBE2RrWXmNAS",
  "key8": "5kBEyWUdSV7Kw2TRjZyaZScbeNmu8GfU1FvHLbUfUPFMcqwaEdrqNtLpVKaX3m1qzacb16h1L3xBiU3Kc6bmFF3y",
  "key9": "2vRrR6BDyjMSqYR7DgrWQdAj5Qf3uQfZf7VGwa8M3gnZQQxST3Z1T4a3b2mbS33xqXLoJqkW5vC6jN6FhAhBzCjh",
  "key10": "4Jdd5jFnt9b4pDJmiLWkjUjoLUyZHbwYFbReysPMGAJaCiRgDUmT88uoQkjNJvw8gtWittk3kF8uDaAmZfVFtfWB",
  "key11": "5Ba1igm89r1ATYay2Zm1BCrmCuaxYNAKLUe2C18jgW9jCo98bQk3ASTBEUVgGTsV6bmeiuRZdmNZv7JLoDSFFtqf",
  "key12": "3v2eDtMQXkYRBGy8EcfybSvV4K2hJpg9WpvEWsiuswDyNG4RMa3qarUzLXMzDEycweyfa1prEsT7VKkSc5U9on1A",
  "key13": "4fp9azBCGKhMR6r1ejNX24MJagDZL1pY8VRYN1oKVCwMhPbJrYYvGQfC8UyVBnosys6VJ2weUrXzthiiAZrMHMNm",
  "key14": "3kRw8rUXuAeJKH2VH39csodtmxgqx7UC2TbfUjkpr3NWbc2XV9FmM8WYS7EVV8411b4pVyALWYttDmP9xxvCfo9Q",
  "key15": "3g3XM3UPT443g1REp6uqaxFiFJa9jT3JsycB4PZgBtDYjd2jhCHRmxw2WZXtdhvxxWGLHC76tEBL4M8SyKjoB3fk",
  "key16": "bNY2YcuBw2cbrPK6CYzSDzbp4nbxV1kqDGb5pAJeQCwkYAf6mVyL8pGXZgGcTwZygQV1haFVw27J5cU5t9JWT6p",
  "key17": "3BMoebe9QtxxVuz1m2SsYrNMNGniLc1PSwWwM4Zjbci15kEUYryvS2VHEyDPZWz79Q9bYxksENq9PfywtFzwbQ9S",
  "key18": "4mxS3v5HtsimN5z8YqRXXYipHLHzc51vJ741kGh2S889TwPq9BgHwGwUUqdYZ7oV68tjCJxiG9mU2Tztu6UYABvd",
  "key19": "2RaKujcCLArADFBfEGfDhHTmSD2ae4aPodMnyzveMX1WE7QbbVhKH4xfQwcz6uexbvZhgegUkxmbmLrLaisZD8cT",
  "key20": "23fuRw1KUQzCvPSKcJ6dQdFuCDmwPVs9aMfMgVdxbs3NYg8wznJVJwrxsHddWSobQnynZcSKkZXDzM3bHcESJmdC",
  "key21": "5Bby3AZE6Edp9TMwnGNGApPxRmnYDbg2VHqz459XMP9N6171oomnGvNnRcwPS4SxzXUgQMVYzHeafUvaUHfHeZ9E",
  "key22": "2415oiEdhPjgo4HmQz1hzLHNvBhUZ2UnCVuGTThds55tpQaJHUnPbFAAGKvKNUvvK6BWpVS1tweWchRR3kQiDhUY",
  "key23": "5LdX5PvhpXbAd3WxFZAp8UiNMDyuPA8a1mZLE2bv1Qhpm8bj8H74AAxwtDGzm779U6F5TmTmMZif9QMLFUuaB5tv",
  "key24": "2R9QritjrGYUS2HntMy6AZb5dFBqCFMSYsTeQjcFBGFqwLMeChTvSp8MTP9w51b3mnj8x3gnC7B2MsvtkzdNnzV3",
  "key25": "2DY8JtgmuhSANrApM39kFSs2hdbXbikQMi16gLvjUr9odBg83gee5Wu1oB3txKedQ9hLwNRy3X2Ux2q46Db3XeTt",
  "key26": "4u6os63a8J7xAqqmvDZqRsPeJh7XarpTKXNeGcZiaeLRQqMBSbo9j1WmkJE66vqsD7cGbCR8UwqiV9W8fpm66XHo",
  "key27": "4Csuz9g4Wj1BRrzhkC5RTNp9LBEQgbDJT4Hjxaz5UubPr1m5x2Mo9TgVZVvqCuqa72QMXccUo261NugvUPvYviK9",
  "key28": "4aQMajgCTqA7a7TU7kkvndRfvQnxfo4Dxg6xnbhwNtThfoW5MDWfTMUh3zuJa6MmMYRH1ET1T1tBPpyyEgnvu2tP",
  "key29": "5ph1VjitSa7YMBh51b9tPAdKEWgWhxfSzgxAcAYTKEXekpyEfBfm4r4Sx4K2PycCHCyKQVBddn7j2nqG9khTrXPo",
  "key30": "5jsKcqeZ4qBbcUBpQwrxGstXUVDB7Se3vefBfyw5nEk9D6ZQ8gbddVPR3weNucavVYA9S9bdMKT1W2wM61pT2Zgd",
  "key31": "2szjPErCSTdX1RgCEk82MDbFFc1xMxPKQicgGqzMot3wGE5yoaBuH9HwUvoXcsBPdnq8HrSmVdqvS3k9ZGwHQb4p"
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

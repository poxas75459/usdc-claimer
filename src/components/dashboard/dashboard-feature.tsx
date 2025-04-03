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
    "cya4quPVX6R2CV1p7hd4A2JTfekxSNa5WsoNKLhwtEvSnG6LXwiG23UnvJgAmzNR1tRDfYdPKD8P1Kw8r15c35n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kC4aKkxupWqPidZfVkbFJ5cmuShbV8V3hVUnKVtoatRZBLYngvya2oTaft42z87hrRfdgbXf8Dxp1cdDw4nFZpW",
  "key1": "3UA8yccXGK8UmDeZgTsA1rf35UBy2pLjSXBv5bj7PyHmDxd6yesdrNbvJNGbLBYc9BvsUgBd5LCcXkh1aMz5ratt",
  "key2": "3PTF7vGufcXtSTGeqGgpbNHnNKSXo7CgruXjfksRijALhQLJrgvTaKHaWjcdKVTpnMosjxAD3hL6mhYgCMWpJ2k8",
  "key3": "C2dkeYnnvPriahqHaZJ5gFn6Fx6HPQS8ukeuUTQAZdpmNSoay1wdSgaj9Km44BMUnX7ko42UqrY8XdQgkyppz5N",
  "key4": "4dQyYBGfLerEhGBWfcAaFrkvDfTTvuUsnA3vDazaR4D3yvd7eqyvvYdRaM8vQEBio9zhUzJ9RbuNrmKrhuppxSMv",
  "key5": "3FyF3MefaGknQnLqyTWKfa6EwswnaVmfF3psfRX9ebzG7M7abkX4keU9TQoMXmBWpfq2Nj9Dyvi52s4v5Xi5WYit",
  "key6": "4sdnUj1DdpY2HBYKg1ahFW5ozCJuDK3rnXt7ME7AAVQD45wXXrHBe2paYRhACMLitEYzCMYWUiFVZkHxCNeuaTtn",
  "key7": "3DaLvwywdje7Rn3YJHBC2a1iLmBhpU6L31MwvynbF4w6QU4huBwhvLz6gcin1qFU3qyJgboQowda8kKt8y4G5mJz",
  "key8": "3D3GwcBbBaKAQuFt6m7jocbwgSBddNc9c93obLhi5XTkWYZMgN4HaxK6ktP18vGeK2BE7gEvD4PzkqUK9TGra3mZ",
  "key9": "BpwZsY394sWAdn5dVjR5kK9zjsBVyzR8t6D7sD6pHc2rv4z8CfkcjXYf53s35uwXXt9MmcEvScPDZh9jG7DAwVG",
  "key10": "5Venm76mm2fP4U1Aypwqk8iogrwWxXadiPcK4orCsXQr2qUwX33eM9MjAhxY7PVzdZr8SGpG3BvxAmiueNMtEenA",
  "key11": "4GJxTFahWRzdYQUwpgc9bydPrapFhQUvms9FEDdnpqAGUUxakgysjhtS44hkSDd2gvcT6BKk6BX8zG47zR64K5CK",
  "key12": "28cU43VKEroKVAHKPKEXv1A542q9t5w8D8oY6EMoG1wFbbFYnXMmk8YQ4jksEEPBZ1Vpx5HRdHcNz6QhfjWFqj7u",
  "key13": "wapijg2tNmuN3RZyDRJqb4S3Qta9TiJkbuBnuhKsitZ778yKjHqAeegPJzXsApy4QcHdqHytNMm3KUFpVzyc1YK",
  "key14": "5n2tsJCa57e2pjqHTxNCyPk8FU4fpCVGVRHHQbGjdhPmx19vNe3h79Bv58GTSMKmFGBGjqG3v9pnAMY4DqvvYHyq",
  "key15": "51vGMT2jkaZvykuhLEMa8hbYzkhmc9QE5MKaqn3fhQNfCSjZsSrJNV1kAE3Spjb5a4tMGGUcU5WttosTmGLPxBaK",
  "key16": "5eBjfvNUatwX4aE7XEbcgJwQiuJro61PU3gKstAY7K14nz2z2P7HjG8GXouZ5ECcA6WVLgG7hyu8prLdwShZSdZx",
  "key17": "2PD2hBybU7VQ1g4ZD8MtDsGzrab6LdH6CMkJSemJp3HHKUtpahKChPpERoxWbP2osQJhRmQJKxqW35R7srXGCZVT",
  "key18": "3qTHE3iLS5u1CdrHBcLmZUwxATpRbs7JfxdiAXQGJtYZEc374pNNXfCQ4tK1KwbKncnJnwmYNjLhesGEK4hPRip5",
  "key19": "zq8HB6fiFJs9Xh6T4qFhqJHByrZfGztC2djw1eGP8eM5w4kojJabHgG62xeHpqRK7GX2CnE5DTFSTPb4wUXbVLa",
  "key20": "4CEwzTKEZnzczd6ujts1dfjrAFr6hCEcJELjo29v4R88FzvDVzSVqAbGK4Mj4ojZZSMu13HMDz5jHctvyWnDEJnv",
  "key21": "4Jn3MCwDB28og4A6wPWZpphtaVPispvvbBFhQBAnBiZcqexsCVXSHcyxrs75efT3UGHw118mUbGkmDPSkUMerCun",
  "key22": "2HH7btAgvv9GXwAd7maRzUpkqBD5q4VwpF1cryX4bdgC3GPpzcRktRpGuCwzmQaLJtStSSTWXNQtSod39WXSKgT4",
  "key23": "2z57doN4AoaQpLEACHUjtJgyVGhbtZNTXqEHgRWpSyX7Uuq1zcL5n33mRvbD399j5DAagVxWDyU1YnbCgzuCZ2Ab",
  "key24": "37WrQvS6eTSfPW99G5uB8w4Ja74Gqz7raui5ukS3WTcaQcDkwepFyGyytDf9NSkxkbiydk5ZGHVb1JrVrWPQEuTD",
  "key25": "4YtsAbV6Z5Wb3HZdSfCheQqPWNd8ncLTR6sEdMr1vc9z5BA99KUDqxQb8kXZhFQCqgGL7yscQ2ToJUUMQ7RFiLgN",
  "key26": "2hBVP9wB73PcgdbFMQRuEypiR3qYw7mgaC1gAbLW1mvfSKZobaicPGxRk6tE7HCo4dUP6kTjRmzj5jaFVMviipzE",
  "key27": "51kSdpwyCjrUmDSEK1gpAGNNGTHezYgBpRU7WGwjucB59Tu7gQzp3satLHapaWCnXzUV4csKm88pYzTzCyfUBY92",
  "key28": "23e3XaNhEEwNqyLtnBJGWxs9gATjme2r2E55ciqUMWurp1xPq4cpx9jwQB9VrydxEpeRq1RkL2J6H2f4XYnpt57T",
  "key29": "4nar7Cb9kY2c2aHjkxobsiZWbwndgVHtsUWoZzwtbqQFWyaBHH4V5BagjdX4dbkmmLZZDsAAeiCQpHopDhattwMc",
  "key30": "z1Sb5PyMHRszXTyFuUSBzAmendx84xVEnaSEt5Dcjr3wDF4S4tSnEWiso1D195tKWoAnpzR2MhhF9xJqJaxbm7H",
  "key31": "5nb1ThajSLcd4Xu2LQiqFrcV3oHAj67VsCaq2b7AHWbHywDqmAsFqkFadnVK61kn2rVPmfSA9yRNxnaN7vG4NQrV",
  "key32": "5oGLZdjXm5yksgqbY38SGDYE8TEFmmV2epmprYstVAxLDbcpbxAQoR8USRbvJ2Ak91SPU7iN7erjebHychtHDz3v",
  "key33": "S3x22kQnXfchNTwTrvFyg1zrLGQnRQadFDCfUXF9qsFr66XVVK8s4yEFG4n4bYfWKVZix2zRpHn2jEgD678hiCN",
  "key34": "3ZZ6Bm89zM6qzBUPd8bz7S5y6UL6Yh3uB6xutfjfpfDJcsYWNdtgNYxum6amkQSK4d7aupw1QZbZJLbmnzssmyBL",
  "key35": "2L6GUurAjfDX5AgBYoYjWeMWQZpxV1xaGZoSRBdAzzs4EVd18ziBj7zzDtv1bpckoXaoKwC14PaL4nrGht3yBLF2"
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

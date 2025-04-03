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
    "3qYnUYxh52w48WhTyfQwXmCev8e6Dyk9eB3RnAtiayCdkmKijs9RCDj7tc1Yt6pmCXYVWDHsEXsEAjdxssSXjohX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NasYvutx1jua6XhCHZaS1P8dCdFnS9DG2CNuJgbbERNhXm6jVRuEhPkpjXope3UHnp969NqWF61UmAGXvGSyLxe",
  "key1": "4BdbuwTZ7vD2DsgimP4bezB2iVbp3tnCm3s5nhBf53uGyiJmoqdrNC35KepCRFPE6nx5Dckfm3VPeLNFHK6CaP4K",
  "key2": "3KpSK1R9C7A4wAYXHqFt5bmRdeDQtuxcwL7kdHnMDSXTw71jKb6t1UZkevj7HMShnYnbUdDg2wu5qxvVzYGBLiTp",
  "key3": "4Gt4tGNAhehtHo8jLrYhRu1Pg5VjwwSvRU98N1yg5TSeoQPgcQPmW8qVpXpmv4ooman7SNKdNyw8CnRRtBzcfULV",
  "key4": "5qZVhADdkU81162g4RjFQ2hLdRAnMAPUXTjmAQh8MsF3eANdZ3hNpyN4sh1ic53LSsYqiBaHAKUe9nr3KmT6EEGN",
  "key5": "66pdYaQqzxappxZaArHGCR1Ak2n1vseaumbq43Yza9cXynvDMxzcvSa2hEM3aaQcwQH3YAuHoa8SqCyPecprz5SE",
  "key6": "2uoY3oiyaMVxazKw8TjTasy9fa9NfqLKPjCL1GoftbczaoRfapdom9dPwsW3gUAG8teH2bazTETyJBY16PurrmBt",
  "key7": "2cS5HaPHkoymZLUx8sj424cxPxEFKBKGvWVuu39AnYbLdAr1hBZiy3JXDzod9PrWifqasavoFkEVV34fAUJ9xTz5",
  "key8": "5Z2vy6xwXqRiP4bTUaX4xoxS9bdLb587vVw3MCG7vsMa87iqy313CfA35TH9435y2nRvkWgWpZLx4FqK4iXUYCuE",
  "key9": "2yYVD1Lcwbd4oaNvrCu4KXvEaqAcRjUL3BdpsE17ZeQtU4d4VKCaXJoTpEEz1Sj4kFLfXPJXDCwN2HkcBHSaDxhr",
  "key10": "3FKs5YvgfvfvwvWmZXGQsqhSp99TNd795eiaeM2reWhmF9y9DHGWh3Z2qsCUJmx2hgiZwDhwUtKHKUUhk9jhJfnR",
  "key11": "5XNHfyjoCMUdBNpDpHzqRYVGFSobMzgz1wBBKmYHqxJzCAXiLvgm3BvYXXUjb6b2MF78ZFfkipbPogXcj7ac7cWS",
  "key12": "4ELeucsZ64UVERfZzv3JsMzdr73UqybZXcbPmD2vhoCJmjC6BjoKGPcBmpKShqZcTfuLUC7DhJ3eztA4h5ai6X5n",
  "key13": "2E5abM1eevP82aE8PzR1hF7WZnvg7g9eTiM8fZ38TG7vHyQbZHASFQMTBDpYyNDMpueSenSaQKcsp4S2ckVPdPZB",
  "key14": "48WL5ZSb4j9MSMQETF9vmjgkQgTzUpFT6nK2uZ11zkJ9jy1j4Cfvka2z378trKcE2vehSmBFcdhUbQuFCGafLju2",
  "key15": "6X9Ax3sDcZPsj1eioYVQXdXJTFVMzeDBMWWcxF87xaWzm7P8e3WXHN4j2Bqj6rXTVApatFvtCDgtvGHptAWBY3b",
  "key16": "2GTbwAjzdsZqCsvp343q9QVq9GyW7fAQrdbvCo4VqE4CjYLVPmu86S2nvPfhv52qJicpx7riH729LnMC7MB9JJHW",
  "key17": "2z5DBBP1mWRWrzR9qrgojHrm7e3kxPfGdQiu4ruVL1ZWucZaX6HZBoy6PfyjoJGMUJWGsVXgtbSfcwmyArffTHvm",
  "key18": "4pqP35eMMgyAJ9xpZVMXjLihMLCpozckbHLMKGkKhVfgY166xKnpx8jPLQwDSdk1PDuRu6UE89XPN3MVLHiuxi6g",
  "key19": "5uJ9FXF9nvPvJYo4sKej6SDs7298ZFKgf1YW59ZaNeWZM6b5pUMmXHCZoRKnBzaGZofHNArpM6LgSDbDQjdWUzhF",
  "key20": "3Xgsuykkfkm6NSiGe58JvsVqi4hRm5n9nNz3nn18Y5Y9frAopgTfwoGR4jce18o4NnSr9YHAW72hFKdxwNsQsXBF",
  "key21": "4JmmPZesxchMg5uayYgXe7fF5urPLVU8APSCF7X5HpuYGQPC4LoLYTetGxBk8ddmm5rYK8S2mdiDSGVB6WCg4vyV",
  "key22": "zyxRbtHia8mKp1oTywcYJLALMmWgvNNcD9wPYbodJo2whe851UEzKnRiJi22LRUMXJWN4nsZ15ojDLhvjBR1dMa",
  "key23": "52ZyoR4N2CULcLQ2WSXAbGGj57hwmxncytDBGZM42XHLkZXFXfanJ66z2TNnrbUfJxsQitw7p3XVtRP1Gu9Lp96m",
  "key24": "3NTe5MprpcgM1efSe9dvUqJT95HVAtouR5uzBNX4Z7TRGWvVEY3V9MzqoVX1yjEABLBQ9MYT9Drw2BTT2b5GnFTe",
  "key25": "5ZwSXHWQ9NcGYggkEFbx9AvLZrgjRYQYsQ8mahafeVjTnhe7Wb2xczdQHF3MfQc5Bzgh9mnmo69psmRtHdcqHYLU",
  "key26": "3pLDrSA1Cfd23WPv8pHzmPVrTRfyvyEcySQ1KbUP6Yk4tCkbkWZz476NpXhy26FMUgvzt4F1LE8rybuHQvvH5sgg",
  "key27": "2mMcRPzzpvt5bC9gLKcLbZEVDpKoiANgCQXtkzBa3ZFYRb5uXb9ehUZxyYt2b3SnTeTjBmeg6YLexzGwLR32vy4c",
  "key28": "63KiPDYJRHhmbbGayzAR5P7R8GXk7AVpEnwF9SBrm8R1S3u7LCnHKqSaE7d2kQeeRcNYuySvg2g2bya8qKecWF8b"
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

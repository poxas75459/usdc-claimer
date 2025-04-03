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
    "2Tzr7Q27d2q4T6Vz4WKPKN838XUDYu1wAzPNk4scq3sPvsWheGA1sEcavB5njj58NnoByF184vQniCQEsFeHZ2gz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xp8BEPJgZKedHwAfre9xYZDkSYxKcGGyidP4eSSS3osJRyabsvnty159ho3EVPDqF6XKByNqXSZRFVWyMfADH4F",
  "key1": "DrrgbhsExyY4FGALPbnULCYy2U5s2P5WuiC2zmm3YoRY6yVURH1pDgbYQMjHMCJ5V6HMYXdp2sZ7pXxDU3TwLAi",
  "key2": "2He5jFWqh6ELqjKHQ7PNVVKdzzxLkqtX5gx46f9HYhsbJkeDhYVWHTNmBn4AVjGPYYrFqE5bcvRwVNeb5ZjbfQcR",
  "key3": "4PkkkWHy8js5rTZK5REs1wyZoffL1YgquCANiM451Ld8Ao9hc7HucP9HXS8hahHfxkGYrAuwQqvYvGFc8kSCSf3P",
  "key4": "56QjSLES52k3VoEx2PS2SiiYJoNcGQ74S5dFMjTKGoZsyvghwT1n9iACgGbPrY5jvdiCRy5g8zTo8XmEyr3ykTBN",
  "key5": "66p3qE1P9douF8SDA8sh7r3KsYrmPoCTM9JHXVkVU6Xsm3Nicq91dniD4xFTkTXXYJ6u5r2q2NfLX1xQjtWKiPyz",
  "key6": "2EHXAv4k6wr5CTFAhLjaKSj8qa4EsLHp4Ajw94eoQf8x6zkrr7u3FdndW8WYUi1hBHSrrFq4TpHW2egZpoo55UT4",
  "key7": "63msSYKYnhSP69YXb2hhyZCAYFv19Pd252XDNQHzRsPkWARDko1pn7qKf7QwCfcbtKng9VxigrUQ58koicLS5kzG",
  "key8": "3en2fm3pg7CZqpYYYGjXNQAZiJuycsduum3RJXgBprP8JmvtvQQWoxC1mhja6QcsopYXNsnyr4jK9VK6diQHXJHJ",
  "key9": "2zSZjd7qmXD1xWTFAfhUME14vKCyRawTsMuwRwsDq8o19TybMNeP55xZJpnZ55D1LpizyUkeYi78z9ks9WWJG43c",
  "key10": "3BNP1vap13ZH5V4WD4xkp2SqdosW3ZCVw2JAa1N9meTQW9p42BwaKhLXy2QpV2SWuruoyaMXwwz6YtDz5wVHS6RM",
  "key11": "2xP3tv1bS24FHFjvnGHzgQvwQ8tgLFdkqqCU57e8zaaQA5hjvaKycd3gVFPuimcNHnfCmGFPUf8nHJUEJE5ixotD",
  "key12": "5GXiD3HgCWECNaCALAQg3FkstXTyQB2AobzpwbNc83H5LgmFhL35auMRTgNQbDuotxEcwurkyk5KxKDRh6Jfe9sy",
  "key13": "2DZXSwXsJWyA8BXEhG7qxGV419Lk5VJPDE8fVp8MHH4daRosKeDiDG54u8x2m63yr6aboUbUzbv6NnA3KA39hPqo",
  "key14": "4DCgUqN8A4F7qsaJdkUAUaR96VA3qDeUAdrrcA5S2K3GkzbsoMtRJTxPkiFL92RCEgSFntsGZa5Tr8t7MFKpQjZz",
  "key15": "3rgpRmN47SbDdcpcQN4TjDfYrb2QPz4eoWaJfBbiAdfTXFzfh5jMTGTeH4eZcezig622c7FmEzh43g5Kaby9DEzh",
  "key16": "4EtrxGpzVzbS7PbWbv9wbBHrt3S1MPmP4RNWsiAShHvja5kg1mmw6Emko74HTXLJXNTLTVVJmbWTnTUTGEq3Dpbb",
  "key17": "2VUb2RKDPk46yPsvg4DsY8iQx1VELx6rUjVUk82D7vhMxTURfjretoAFVwbEoaA1AKBYCUaLpYhhMxiiYxbGqLBc",
  "key18": "3wN6vM7yZxuMBegVMa6zwo9KWNu68k5ABYyi8Eoi5gBoKxU2deC6zkmAmisWSdmrpgbGtD4i8Htb6z8xVHWe88oq",
  "key19": "4D46LvG4hZsp9yPFjDn34UporVhX9tCjfPoEeRn46yR4f1MHYLVhx1dyoKNGh1HWyuaue2DF5hbwZDP3XJNdS4E8",
  "key20": "3HmanwiCrmpWHdbY88iwWrHF1H9f5AXwJKkNZct8DPKDhSmC6asXhC4ahycqCsuCAnbcye516drR68Ek1AGrE8jo",
  "key21": "3Je37dJkkkYjGpZ61WPsWAHd8eXyUvvw2LDwqu3k4jS1zdZj91dDDPP9kgMr1EyQZSFvkLYDNfa3EZXUS8og2655",
  "key22": "5Ej3ku1s45zwyVtyE7U3kdz5rTfUSigjrjJXNsxGULzvc8Ahjhy7sfp7ajfjaRM5DMKziZjeBNRWFkhWEEk84ZC6",
  "key23": "bw9peJqKMaETcWpddAuSCkaxPkBEy6zKvLobrx4WfLX4ybEJeCbEy6UHXEoGmnCH4whyHbuP9SjAvZLL26MhZGT",
  "key24": "3j7X6aBpPhNZHDuEHsUyoXFinWaMVVZa7mei4tmWAyRDJymrqUC17MyeiXeRiR9xZVm3QK3r2r6Z7C27unjcLWns",
  "key25": "517w7ig3s3Vx6SV3VwrgyWEf6Zkr24gSXN9zdNL2p47gUMzzjc3phwNbQjffhmip7nKcQSgGeeBcJGJLNwrVEcAu",
  "key26": "3C32fkxsFnY1kkW44zv5XsnS3Dnka9KScXW3CzrspoMvoW2xMZwdmMGH1qw9ASgtqpVivnA9NBPN9KbeZNEQmN7R",
  "key27": "4rKHvLnynDSuktLNMn1KdmdXZb2wFFsXejjjSSKFtiFRG56uj9RfFketHwRT3tyYiUZdNyhHfR8VGX7zFuHGpWTd",
  "key28": "4ceYqTHTpzPrdBShHmBA5NQJvb1PgBQQfqMTzAS9CGY9YmuV6zh1Kmu4kVDpYMNdgoWc1PzDJ9ufrtAqS28kewJe"
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

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
    "5LVodwh7H4mPCTUSo25eQfmECyYfvzb6BbKFTsWATdP1eSk1n8tEtiM7YUKLEA3uqjhn2cxQsRbGh6LJZTekT8Jz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nHk2RHDijeAvuCw3L2M32jchhycDDJpuPsXMKtQW5JULAmjf5iQF3B3P5gLwhZWHX9hQsXubSVJ5agw1zUZLsAe",
  "key1": "5wGEZjXL8JyV7vAUtgZ7XoTDmpCm35y5x9iQGRfXVvDWi4enVywBvQRu95i47s7aCChH6bSrkyqqfkicbGJHrdnH",
  "key2": "4VvJGupPCztAnecqoAdVxnRHUrPMLXXByvjnQTKfZWzS3ZFz4CxMwjAf7SEK1w8euGQ89P3iJprB6ZziafRGGj7u",
  "key3": "66yiqDnvrAvQTHfVvmumJCngpSpDWuwvFLckxYWEkb1oWMjQ3JMt6wkbd3iuvRyb8TBxa16vdvyHKvHPh5YMZPQE",
  "key4": "3VHb2FGs8jcHgiAXHSqXeGYAQR9YURnpCa7mLZ8mdNJe28ZVxaA1fGqw9eMU9Yp8qn7LFYKtNrUo5jQdfBCeyQpw",
  "key5": "3m4PTZ7vw8sB9dEerMZqFZyQDTcHLC6x11S3PyuxfSvYCu9TyLaeJN7VVCdnxnV19RkTVZMTxeh8YnX1fUdsdb2W",
  "key6": "2HRYjosXdUTheDoCFTwqNpamxiuugBrn6QDDszpPgJigEutVjHsbsiFJppZQhmxDoj22PJ3Bzo5EnsV8jze9N57X",
  "key7": "63W7UKGdmA5inGCeruhncDvYeyW8YabLt6q1mqYhufBDGQiJf7W5iCizDpnYUUyPWYhckqrGPfdakqYRCbEaH4N4",
  "key8": "5Q6H4wQBHrpLNyTRd9Ky8bWWzb6CqQkMUvM4YPAghE3CBgsJeARpXAvgWi3JEH8TmJJBd9reY3PZaLcKkWjhek4s",
  "key9": "2kf6ApC3xJLqBGjeNSWjuEc6Qg1WyV2i1fuM6k26HwitipATcHqbd28AYu6KWYXPSzA6gAyrxCE16KcpkLHe16u8",
  "key10": "57d8m3F9j15XW7E2sgxLDBKxyZkHTWHqQRbSErBH1JRzJ7d9577SpRbryHVj9Qfzekyj8vj9ZMTpxVsSnpgx58Us",
  "key11": "2diMqFi8Zb5xQdTFQVXAySK9nWFXV6U7Cafse3EDnJgmGF7r34xUJtbd5LcaKMQ48x7fbQDwkPsYLTdZSFhEV7VW",
  "key12": "DE27pjgres7qdRwGGzN4sJxYewHL5Bwjf8ugjgXUaDWX27ajW6Sq9U27KJTwwXKc2WbBTSEFqsjc2z5dBYdXmkq",
  "key13": "237UpxqjSxxJwHQvMT7P3mjet8thcEHCPQUjyY4Sbq4aF3xdweqjY1SwZd63wQJsGc5crhWaNca5uSDCJshjmhVX",
  "key14": "4Ao4Dg5UrF2PFbcJfBU2sxyJS5NC4f8fbyLTKsqJdgVJond8Rtt9D4uL6Py6LJGzaz5bD1QTFe8o28quCozBUqdw",
  "key15": "Fa8ZKCYLSCZaRV8J8qMP82doY9DTG6SAodeFABMWLEf6mBgRPSaBz63CqE6aRApGZ4sZ4jXKvkHjpnr869PxjMi",
  "key16": "558hsmeDpxvuoLKGVBbaE1w2i4AGYXaahZSQ3Xv6bqBVAfWyLacimi3fGaadiDdu96Cu3ub37ZFLXTZdRa8L5ARu",
  "key17": "48VqazJgNyi5aNC4djBNAin7JNoMM57aNt5nFCUADd9iKL7JUzUkXotV8RXniw151MfRDkoFkbnnFKQyX6GYzgA1",
  "key18": "4dNB52HMXFfMi41FswX8s7fqzEXTW2UDP9GLAoDDERMYRNEAVvr3QzqcPDNVkp4nPZ7z7pqqA2UcnTPPaMtFqYzg",
  "key19": "5C6PAevQ5NAHiFBrTmDB7WZjvCMC8pNGGReGRVQpLzh4z1xtp86ofkEqGq1z1ZJr5Z4DvHS98a2EWTXvQzYHbiQe",
  "key20": "2NhdMMjZCXjh2quy1uUDrXJmPcEFnnSQvKHg2obvriUbHGhpq1RV3p9AXMjevyLfjxmj6vxNrDTkSq9CVX5aUeZq",
  "key21": "64163KNcyceNRJ3S7qoRRd44iCdW4ZVpRCvbs9Xpc4HQkkDxbsYqbk7Y8hTb87G8LSnmenU5rdUgVetvkC9WyEx2",
  "key22": "EHsrmzgqSLoqTJRK8MK1t6gUiQr3MvVgJbZLNcwPZSdeRnZeuXe7fejJZ46kEf2nFeqkBJTSn9stdxQHyAGzJnk",
  "key23": "577yageozgoeHiLcUfhUb7ZTViZMuAPRWpTAZTe8kDiCGfbRhj71Z4Lwq1svQ1HHLX3mV9PGYoUm1BAu7vfhxcbY",
  "key24": "31JVqGXxcSNjovYMjj2wTa9YGVawfKM79RfBUpY6y4mBB8moxVgxQSLzCRgkYVzQnHoEt3UN82DnTWrorJWoRJsc",
  "key25": "4UPciDvRhrHHzbtJnriXXF7GztCEDQErkFUHSCL8dhDoRmeEoii2Gc6aL1uxtaaYKnV3a8YcjbDZADXvt2jCz6em"
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

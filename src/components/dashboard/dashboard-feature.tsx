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
    "5tirDdJe4LMz6z1gS7U7tiTxVtd8cMjpHxDtw478F3JFqchgyGE5pGuF7WGGviBDw3pm3XHWi8sBjwTRzpUN8vh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WT8RQG5A7WSLfzXXRWbwv6cVXiMdd8k2uyP523yTbjPgs3jWWeyeuiYxmUNxSijCw1Qr7CzFU95oqGycLNuHSk8",
  "key1": "289CNfy6WvfhSvagbpcyQAv3h81ZPie2W7jawzocUream2UnuwcSmkV424ai6VgjJsHpN7QSN1tg2B9QjydPzKCE",
  "key2": "5YMtFSf7KqEyCXQLERn4yYRznopwyzHCqfkko9zoagGi4yzaB8ycJJCAHkENh6fMH2ng7oWo8m8D5Cj7Vuup3Vw3",
  "key3": "4aJRH49ccakxDzawjD7oYphKrzeVCSmjGUewJueZhnSUBcHL6Z4sEcmK9KkFAmjmH9yd25k3rmhGUPNrLqoSNtQK",
  "key4": "2xxUysqUBjmAAam78fXgkUoLzmZCDFA6tmo68WuqvXnZQjUzmA7Ycg7PRNx8mhY4LbmWLy1eHd7NAKmG4XCEeiYK",
  "key5": "5e1zv5WG8nDfEQYBNNmE97M5kPWDu89quGqpFoNrbeZcjCJkgvt1SuSSCG2Fy3jVTwLA9rSXPQTp5M3LvnhbQrmk",
  "key6": "214GmSSMxzDCJVeQYaSHzP8KnjfzFqjmiXrVQTh6LkGEXH84Mk2JNgCRyphrwtXHRNubmucpAdb3V4tq7FPzSeer",
  "key7": "XzkHd3fdJEWsWnKnDiukEWkg6nZ1UPntWnob9oKLCTHtkgNDx1dE6HdY5hKMGANAN8dTWw7FD3PVco5zBEBLEcG",
  "key8": "3jQTxcEwHyhqp824JqfZQgZUBX8GmbZte3cDudPQKeYthL9D6oEkk4DRbq5q8eSE435626fyarQYHss3AUYVakYL",
  "key9": "5L6wLcrt76xAeAAkoPU28ukX8dBmdaCLD37oLMLqdHNiECoyD4iYuCK4oXvEprEEtGuhSCkqEaA3Qi3Cu8uHk9zb",
  "key10": "3hcuM8oNCpGqBqypyyb3HbYvPJhFXurCwWtbcRXej3YTpT5sjUg5qRNJogq2xbA7C5H5MK96DXeiptLqBCvPCyhC",
  "key11": "tjDYHUwGtpNjBTYHSDEBFgkbzCPo5d9x8wGQL1toAbiX163kJAeTNtJCJtQJWCTFAvGqxyjYumRq5fa6oJkJ9fb",
  "key12": "2huukeMhErmkbJt6E7mnD3dVGWZxdAFTVBF9YmeJwW9vJfGEdes5qU8jMMK97k9989eac6gVnP7F9aAmTRzCe4t5",
  "key13": "3CgdSpiyEr8uYRHWri1s676C1p5YZvqKxDDLwMndXN6HT6jYuNFfAzbJTUjEUXwA1EZhXKazqzWaKPj5XVh4hjoY",
  "key14": "VfghjeCzPuVyJshbNVZ4vZG27bpJy3hHeAR7NsqtkDr9bw4TNMQc2g6TWgj6GD9uj95t39p8KgehGFuUkG4bcg3",
  "key15": "5uSgbGaqf3gePL87RcZVXXixDHvksX3h3QWQJq8ScX7sfodhBVKc6FHeGEeJ1dxdWrYmie2QjiuXeR9zHiga1Hhw",
  "key16": "5juzskDtsEu1o5gV3nNgob6NUo4fxfwrDnFFzw1SJYpNamsivjKe9umjtk3a1ETRXBqRBFiS3LecFhpvwM2mDMTE",
  "key17": "5BN9LxNDM8DHWbK5p3rZ4EXaspAYq1WP3CY82TAg82VVFKwpr9TJvbYJWaVd4EVduUJEDKWkCp53x4qPPaHeXEWq",
  "key18": "5dik34FzoiyEANWeJ9aBBPLs6YWatrj9CrR9fWNUw6R81EHYoJ9YdHDEdREMQsvp55a54M35h81cDm53GLTxLx92",
  "key19": "5H4oft3Knpk5xncw3CaTxtZwA7MnkTGWQRcNrPWABfbu9gSERVbkJg3wTaTN9tBh9vtCrrAPvEvhBXi2gNREDjES",
  "key20": "5rPim421q9jrxqA3DbWWWwepbo44HFRFyGp42mQMcE17APwEM5yujYU8APNayY5Fpsas5GdtcjeMgLvtKXPHmSMu",
  "key21": "3HA2XNWu2e9rxbv8LHiKXnHEjyxjgj1nRWByfrehuruA5tsJhHhiT4GEDPYPRgLsZWhQwJwM8F29WAhhYTNQdM77",
  "key22": "3S4zXSvTz7ikd9sM4F5bq9kATCGp9eNX6e3CCM4P1yc76o2tEm7Ubqr3SMw29gH5FkN6izrd7gyMgwcS2Y3YY5Pv",
  "key23": "5r8c37iVo4Sw3Kr9p1DWWXfgw5amyMH1jGAhw2QxtsGa67UMoERjfrwYuf2HiwzJT4ULaPvYmEMF8ty12mKqLCGB",
  "key24": "3b6Fd64B8Rvr95oCGd8Cq6oHyZdmAfGGmBPKWoxwZiBEpNhG65HMZsmN3iyFQZTSLse5UXXbpDTNaQN3ina27ho8",
  "key25": "dpE1C14bFsJNnrbKxRdsgteMYkYGMxB3uQ96FV1Lz2pK6ke6MeCzFPMF2V4kx8h4ANWcN6HKpX7c8iLmxbcKLyt"
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

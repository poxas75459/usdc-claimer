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
    "43ipB8aEsKq4mquCSvZB9vecDMvkYY3gZNoWF55GVGtFxBdK1bdxY2LgWGL6o1TdBQArCEy1msqJ1h6ZfpcPezTy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3biJXWa847QYS3KPW6ub5pCyrtzzPY6LcbwxJFUvr3KYmDN6CWi6sqR3QKxKW9wzHtRAssmo7rEjS8ZpQz6dvX56",
  "key1": "4jxeM4RBdawmB9BcHAnfLRJ1f8M5o3UTHjKyrXYKFZyDQUPsNXaHj37mWwTcGPoffhGyBKzyk3aWUZ8Sfk82Rar5",
  "key2": "5Kwtg6Zsbarue7mZyzvJt3qJkGqnyd9HAuf2SfDLSCyJad7GXBBsYPL9KD5wuCLN2FmbZBnUC7X8QcoNyTdYm47f",
  "key3": "2PbFx8rrktesaMpHrqSr9DY8AjatcBjDLMAnfj3kw7MV6YmoZ5WE5dosDTDUY5rArJt512SN7aVkBMqTYLMGtaHA",
  "key4": "4bUfQxUX9mbHxPV6HDRwGDGY9dLSYPYbz2s66YZWfdcyMDji3UNSznxu6Bbd6Xb2yzWLDPLUp4GHvvTGh8srxud9",
  "key5": "3SQGAStMip9sVjZvzPVjd1zJvsqqtsaWrdztVHbJeBTQQ4MqH7gvhVadTkgj2AjYGW2JcSPkkpnLnJhaiQxqQQyY",
  "key6": "2dX6cZFo3kS4vpQkWaoUh23gVyUdh5iZq11homH1wzbvsPPLoa2ptMrFWLGAg2Jvfqaoz887fXZBUfQRWL1JmwSp",
  "key7": "5iUk6TduhWzLCDfu589CV6k64ZE59j23tCpoCkx5Jyqebvk8nzmJcvGHaL9EFeQysZdBUo7xAPzhTVXriBc4QU7b",
  "key8": "29p9RxXGzf4RKEK31Ag5dVC4EaJ92FYv5oiiXweuFD9GPg46jPkddrFZN7ufybBV4NL6T3CmaHbUkE8wwF3X8e4W",
  "key9": "4nBjBQV6qgjCkcfDVsEC8jFtrP4mpDFo1njNipeKdXpaHsb4Pt1Y3cBG5rGfaPnB6bi171TFDq9wSPnCw5ESStbC",
  "key10": "2GsZ2As7Q7j4DkUgHXTwyW3RzszYSXCKu3fB8wJZgd5ipF9u6xQkKqa2VnpUAm5porZKpnrTxhc8hwHMTTEkeXp6",
  "key11": "2XTtsMjSBH7pkbD6BjCCm2NLnxAYvQhauiaGCZARKJFAAjR9ccgBsCU3f4kMGbpFCxtiRdmC5YdLkkuNNoTJYrXk",
  "key12": "5dj9MgriMEw6RD5ZgAGdYjvMe5XzmdaLJ9vjzLf2TTjoGPcQFseK89zV7Ey6zW1rnMtwGKUWHh5fsPHpc2oyCN2x",
  "key13": "gzWTPMDbNy747sG5d942P1bdCBKHDszvWrk4mW9iQ7kBmhvom7eU34nXUprH2uiirUackKxCnjgVi3eZYSjckRk",
  "key14": "25mqjU6Gz7kNGpyjZyYwCGsDN5QxeB2kVatR5ipkieXai4K4159mrbzCu4BjMseifaGKPJjrf8tVhHUCnJqhtAvc",
  "key15": "59Kns5ifD18Np21gDfqy3eqSzqTBKqn8JQC2wqaCxYocp2XvL98ruCR4jxrEoDmMhc2sZntgM69ydjpCQhU41km4",
  "key16": "49DpiZ4uEPsfcHJakzBf8GUxyz5WYRkq3sqehYSnXVC5zH4AU2DB7Tpy2TLiRSNoAhcVzFwTj3B21L3L3eJPkqmA",
  "key17": "3vdvSD2vqbbNcqpEyzNYGacS6mQTamtxH5yoHVvhuFneqEXZKNpfV4YnX2t2N6B8CbDxUvgQ8C3X9MFGsRHgbqwV",
  "key18": "3B7Z6YASS8Td1gBgNiZ9DvYu2AbrNBsFnrdmQ7EF4WqUfGkpFrkvkFj3GQipspHbVC2tfBEpkbyKuW9yYytDZPBF",
  "key19": "526tdFzzMZjk1pnms9EXiXbsxMXZafxp6EN2q3LiM4b2S7WUHVWaSATP6hvRnbsbsanzrJhT98WPvWQvacfgDrQL",
  "key20": "61xnNnPsC9Kxbdfv2YAkSGnkgUmf5vWZhaBBMZxxuhqX8nyXWSbRFQV2ispfaoRekzn7UKegfygEpTRNUmwoBN7o",
  "key21": "dWzeCT9eqTxhqxqWzQTpVSTuQFDQwRT3PX3fyLoqmzw8311CiF2ZLSadQEekC8uA271s2d6NEQKxBAFMQzq3dzs",
  "key22": "5VCgc3dWZcjpPvyhBxadU766rsrzWp3Yxzkkm9VLLtvawPKxC7LNvRrFySLUEyxHVpXBi15LSCYy46vo6FaSVFAG",
  "key23": "5A7vCUcn9NpVNXcfC6m4wH3DRjuKCE4x6UMFqTkgh2ux2EeFwj8NpLtdLLeYaVCPDWaEomYvVnk1nXtcm8johj5L",
  "key24": "2AfDzypyLHtkvVhXTkdfz84HVBvEQoDgwc1GQ4BZ1R19nBEYqSf7Zx9yhXTFKbnNgFAeHsgCwfbgysuDKXGD8JXL",
  "key25": "GUQAZaJv9WEKVFgzdfdcHEiEB2E97TY6vuo5CkoMS3BaJZd6beNe9gU7bCiaPZ11cgjMSAofHMYMpAhX9qZmfGP",
  "key26": "5Xx6tu8CPGD1XDQXWmNvEYmfCcYnJNb69aBARbgEhc5652RCzhgcjvSzUfmsG7m4f95B53ST4tRn3EJxFyZmJNz",
  "key27": "26wa1WLzxX1ik9nPwZjLunD4WMwqLay7jHsChf5y6QUR8BoMLvuwLLUW1QqzPSS1WxP1WxjpeBymmK6zQXJzVRoq"
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

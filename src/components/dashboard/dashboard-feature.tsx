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
    "bshjmcFMoBFty1FXvXo9fhvucpFsYy15a4A46RwNDYbdLupgjNiKn1Y5aVnZ8xFuXoPRwPw6VUT9dUYAsbUrVNh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SXQvwgmfCABAZzYXnspaY63RHSyYnvkY1wWd47Z15Ho1wvPfvjAK94q8MtXZyuXbpxMYKrXTNYrnqpCRcbrzS14",
  "key1": "4HHzBqkgdyCT3W8R1m5YjAzYLqvUvH5Wm3gpNaSfsAv8FiK9xfiCzUEPfFT8XrGmL6yQKZmtfeBHRFX6R7eoNKAk",
  "key2": "53MhhzVhVpfWzd1F3kzGgcmpPZVtRZerHsQHpfTeR335SNC28xutqfx6J1daceWNHqyZM4wV5WvsRJKsmBK8sHPp",
  "key3": "3mqAoJj3ww4xkevEjDvp13xJAmA8ijUuuNT1G4zempdeBd2KduenpojDkmVpMbmeq2NJQETGcit87xssgcjZfaCY",
  "key4": "3aWnzKYMYqGuVffGyXbiXh8ro21V8nDfE6FfgsM5PavHQN3Tjqtdc6Y1xi6ryUkzpdeHkHpuHvyRo7vkrTbnupUY",
  "key5": "4zjXuD6ejt2ZX535fDn194GHTA3VXDj4DqV1qYKs1B2xjjwLd3vpQkB5LpjymQrBik2QwHf11utyq8rCKrCpjmF6",
  "key6": "3JcELVufTKRdkh5h4jydAkL9FDNUpGqDr5MjFJTLYUeXg74BCai4GWbVzX4Az618hCfCsjgPMJ5z5LGH6BWVRwo6",
  "key7": "64cnJZ1U3ajkZz56TmQKKP5gsADoQhN9XH4uV3vmwUaUhj19vfpwqb2ChRN6TWyx5e5dSTFCgU7iN7dmJhEoz4fN",
  "key8": "4agfUg2tCgNZHZerJLsrvtxxjTdNErgE2tNK1gGZhzhLd8SJTcjEGGCzVBYnxhrCLFUDeeqR6UagDBcKnUxeqCuW",
  "key9": "3GXjBhQZzQQ9fc5hxHdhtCryMwXKNyWn8J51QtmwT4oE7nS8zyq8rXhhHPsjNYvHFWXzwBiLFz3o5WimGz4KZSKW",
  "key10": "FndeQQ4ZqZnEgznBDn7gCniF9uYaKNtebgaCZkMypguwGU5yrWeWsaWLCCcbV5XYSTSWNJnNuiD62A1mvVcmfih",
  "key11": "2tuGVWQ2inUovtgiV8dn6nhPHungNq6dD2uFNouZTCwUQnRymaLAphMk77GUZZ49dP6Fa495LfFdVbqs38weSLEu",
  "key12": "3MwMrgMrwDZCDYfka8hCM97cHSa17cgGTWoaBgqeCyrtHB2F8NzhxzbgUnwoBwwfntjmhezWswrMpozjh59ZPaLW",
  "key13": "58gwaD9GuoNg9QMFdozDvwEn4NBdiPycSXWbHg7RVbR3cJbf1TDBVpfMACVEv5NDu9CZCWL94hqxxx7yXVu7yYMK",
  "key14": "5CDdmjbxJN2iRv4YgnqQjeTtRisVie9ocuhvescasZKnB73HCd3pD9rQVikATt7oE4baurj9FFUsrBYzoYWwREo7",
  "key15": "4jjGcNCXyjaasgFr6PW4QDg4LwG24m6qhbYEJx65QKFroGDeVAc4vsn2vVZ1ZibJfvzQdzqPy8fRBddqp3VuQHGp",
  "key16": "xsrT6Tdz7B3phivHkbWWqqRo2BA9vwo3v27n6EzMNHdNnaKHAfRRT5RB2nUEU63hMT4hj5tJ3FxnYPw5cFxcJ2n",
  "key17": "4T8nxV2RN83GBP6ePHx86cHB6fUpM7shxK8rPWpb5bH1wmGqTbK14wA5txvFUE5szCBpVPbLxcbyoZGy5b538dAo",
  "key18": "5c32fh3r7MRQquqCT2Hqa3S5mHTfBXdR8ZTxN7Jv126VaraGyARQC7uRseZLmHSunfrBvEnmhYKF192Q7bZKSs56",
  "key19": "ftb1LFgUzKYYHNVMWjbMzd7Ao3U5EavFBwbuqwCYyz739HzQ384LqqHNFA9621xp49N16DnAZgmBvs75HXxJgTh",
  "key20": "2rqUkVrVfFcyBPTUdC9X3hNbMhetDWbdELL1JpaJDykkV7C3193NoZad4N6d7gN65qHnQS3wdhGFs2DiBKEg9VNn",
  "key21": "3BTYdn28rce9hTKFpxKrpQrFyFfrdHLBTY4ZMrs4gX3KKAkWr7xgxrwe3Zo7GntfPWAJSr9LjCWrBqJ28htL8eq8",
  "key22": "4MSTmR7uAZRgc2omB8Eu8mhSeGSMn3Hi5sc3qzfFzcpag8KD6PVkWvV3sJKCUQcz63fzt877iNvfUJMcFEEbEda3",
  "key23": "fh5TEVaVJYu9a1U9bGfmzekzN1bZE6VLrYVvmeiffhxNBMF7fya2nnrPm62eeiUxW2y9x1R2r57HvsjQhVUuvmU",
  "key24": "5EG1vxsRiUpAfDzXrhrzys27pziwDTX8UBB1mHqVVkprgREKwWHUAY98faTeKHBuBtdt7vrkyHorRXQePeBnxp6i",
  "key25": "4PoavRngzQukkuBkbAf5e1ZHCsBadxQ7u456wZ6655x2qszz3pbZ4cmxJkLHVj3qLjCTFcvVQ1NBVbStB9Y5dZeR",
  "key26": "5ykcrzyCGZivsW59rK56UKhwq6UY8Hn3gdCFwHbQyCtKgF8KexyiUgurB2B5zEKDfia1Mz87uHtKtDYu9x6rTUNA"
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

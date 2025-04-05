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
    "aenBaKRC2CAEkYmCd5yZ8M1qBbTEsZLjhQv6QGFgWLvBGvT7aCmaGHZU9tvjeVRU7pXBxurK5GNKEDyUmPk4Tz7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bvjsZZKFseNVBKMFZ5ViqrKU91nQudk9Nm9qo8eeWzvnL8tDGHvHmU5Yk7Eoe2UHCBdNVNMi3p6qMB73vfoLnMP",
  "key1": "3bjbFn4EptpSba3u7H8AP8X66HyERmU3ZtBzv6evHuoWqGHbT9Nkz4Uj3DCs2usuQKhc4AqY2QFPXmaFCKpYiPkv",
  "key2": "4N4N4YmD12pww8tFYsxB7L5rbWL9ZXpGuNrh6SqrTqvpSHzk5QjqcUiRbzVQ7g256fSRkLRKiQr6damEn1N6NZx4",
  "key3": "Zf4Mv3vLm5egp9Vsu4RjPefimmCy7SAUK24a3yBqPuiN7iTHjNQiBZx7iYKLUDQdTsTWhjoasRq9Q59mDu4c3Ae",
  "key4": "2p1pBbZGppb93XbEcCFpDxu8Q6bTSz1e8obLebi7moLgyHsepRb9te9wxSDuG4SSegCGKwCSPa1C84d2k3YvHyED",
  "key5": "2xJmheWsZkWioKSV61VwTarcRgu2GMFgL3CijaWRkyf5jiVEda2yDizpGKWX5rJXkFRTKhWEbJLg55Zqc7EwEEmh",
  "key6": "66QNYrJE2pb4EAicy1did6s1DJ35PJiwJGAY6kwXKKcDfJgyRrHvmJ18zf69cMxeV5ocLJTGMkjUsssaeaTs8uvy",
  "key7": "2qgXBfGqg1ZmRypmKod7MMrk54KGHzemdfHpWDuS2pPjc6zsc87YGyXyHNSD4EEHwUXnM9ukJWVpWtbC64nyfGkm",
  "key8": "2L2WVvLQeLizuraPa3CsUJ4rJBwAD3X9zKWJh59qoc32dFfnxui925YQozrTCj2NjA1bGP7kCxJt6nkr8jVe4ttW",
  "key9": "53xMkdhfhNkEKyR3JdixmiWZe599Ljiy5CHCPAh34Di7PeZRACmPZfL6xTWpPR6R7fzBLNN32TRS7GVj2wa483ts",
  "key10": "1etiCKEKx4Uwd1oft6QrSdfZ6tTxAjsXKRSZ779d2cjoWY6vb6h46Gp14JPHvAsAkTLY6dmuhcRkEUtQWucy7ua",
  "key11": "3yNjcfBC4PJ1PiommkJ24LEJbnEYU8rk2b96Hy3rf5VNs1qwf734dHtpFc6bDtN7N5scqXxtHiF39hRa7srQrvAv",
  "key12": "3mw2wYdnycWa9NnfAPx2Xs7d9BKbMFf9MNwfEiPWBuebth2jT5V62Vt3r8kpAfpu7N1kBzVhyWAaBkNP55G66kez",
  "key13": "3xv1M9WQHn3SWeYx7udhV18FrrrBoAufH7djX7aG5tmWwYyvpUvsC2MXfWhV6awNaAQUxF9kpjZQ89Hj5E4nYkaU",
  "key14": "4uAwnVMTELkDyQkjJ4ov7s5LgobMbAudm4bJKfrthX7VsXNfWFR2iTqZ4JoPKQym7mGaPQpoNEmteDJ7b7HyiMit",
  "key15": "5GXw5wFW2dXEwdukqn7MKoqS8JUTw5hcr4u8oRCDJsZWgj44XECnP37p63CcSbtLyzT14PJdTgjxYNaAXex8t3Hd",
  "key16": "5MLT4fohGogAnrASUCjPiBuJtkGjFiShgbcuo5YcKckvQM1Ghn2W9CWKPZbiNJGAk5d71uZXMqvSbzx7Nqo2ew1p",
  "key17": "2YrActagjW7qBa4Bkg4wQ7uH9d2CosQuNRYeREuYicovmsEBXjno8X8nZ1ie2dPh6t2vkRJ5C6NahDmZ8GKEz6Bc",
  "key18": "2WjsMbjuj5zvEU69jgT2oXccNJttHrXQFNahsGgyS5dVJhPadP7QmeRo4ReKYELwgjg9oCeURCaqpgjQL91voTBX",
  "key19": "2YCtat3wUPa9LP3uf3RHYqX1z4qjVLckcyoeaCBkAs3NrLzASFF1q2rTM3PMXNAMqYs7yf1bKXuhVRV4Nqd8EE8n",
  "key20": "2WoTWg3GZQav76jR3paNLGRd4kPNcbtUXKNiwwWdag9THjouU8RXa36YUpUjoGK1DXX823LJyHkvyfiUTth677bu",
  "key21": "yMXQEDeqo2JzBPV91sXK22UR7ybkRU6eKrG2VdxDubqDvcoFK8fxwwj5dQUC2UeJtaEYABqpSvPXanYv4zHZRis",
  "key22": "2kiFL8RrwW32CaoUnB9bX3GpDP1JK7RWyKnTRXQPurzztaWvYy9FQHLFFVQJM9HZjWuRrePHiXs7m7Wk8RqtWHFc",
  "key23": "2G5pKoRMTUFoFo4otT97Ld8WeJnAJBf3mhJvLDCCiquc5F1QzriZgvJDAGGPQyne4j3oo6rMmGy78zH3A4xmAXPV",
  "key24": "4C2AJTTagmNtnPXKE2kdH8wJGbt5Pp1aW6mdQj6ZU4huvWohcCUTB9g1Rz3rML8LGPpoYrkWo3hDMoZfeLAGamJw",
  "key25": "4Vg6wU1CYzzRiS2U97ZPvDUSj7KXGtJZsiPebqyxe9x4iTeeSiiPFrQcjFmppEPrFdCGVmKgXSCRc5tbwJHPgmAW",
  "key26": "5zB9sdXVkJppSnFj9hJRSiqsUE54Mgbth4t7mKf8ASz7xNx1EPN8WAcYjBp3t1aMhnMjKegA9FBo1aFfkEnuqWvR"
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

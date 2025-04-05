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
    "2yEDpzXGXk1DiYAb43h3u4biBF2Yp2LQwiqnDraBXh61XoqcCmJHtHqMa7T7JjN8vK4Vd2tcvSMo34NP8cPACehR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "viJtrPhr7Dm3tNLfWfrBqWMGe1bAWJdokqTQDBG5HTFkbiBJmB9K7RzFhsLkcLbAoZvWDxHb393eYV448DwefvU",
  "key1": "5qxNok3TX1w48hoLD4VdKMwziS7gUr3adoH26YedKBAAsvrcqvfVbqEaSYLxnXC1dBCD6HLCDPyNhGGPi3pqV9nr",
  "key2": "24f7noKWVVCNmjvrcj8c7rbEcXLTbXgwwCpKkXUmEk8GidnXnNMf5fUAishiej4FokvAjqFLivEm9chZubYdGhLH",
  "key3": "g22hSmdUj2HgWCYDsAsRCqpDPzxKNyX2twvAtm2c49SgqAo5Ramr7N5rHk1d1geguA5Pw33FRytSJjX3Ja8kbqQ",
  "key4": "597UnHP9PA3RV3wjnmrMRmEPwBohCCgpcD8gMVR5b2LiGaF3UuowfD2eYZXPdEsjtEb4JvzjDFwunSFJP72YLAf8",
  "key5": "TrXbdaPDvp8HPUwfjd9evWM2gf4sAzBmS21YMfVgndMNRPLwjhCQ1j2hrGYV9YybzmZBwge6TfxfVYBDAzJSkPo",
  "key6": "2mAEMAtJJYAzZDAGf3okNt1MmfN8i4t6V1JHYCbKgqPhCmkfy66nNt7xZFGFNELuXu6ghyjfM2iS5oiT3EqjwcEo",
  "key7": "2rrDG2ohY69eHuTY7x22S3hvJbLft2ELWFY8FHMs6PpjYHz7wTs4nrbDEdD2HnCNU9ffQi9F3hFsQVQ1CN8igzeJ",
  "key8": "4s48Ht8bfjiS11rs6f3fZDErTAUfm6UTzKrBabsh7EkVSwP1J1q9Q312a9wG9HafuKa3UzvRi1AsnwVDBRnMs5nN",
  "key9": "2vd6KSsV3goFELzSq9MAQ7TpsWYt5qMEiLTt3cWKv5ivk272HFWZZyhXUix75VuCfTnkgqD35RrmVTn75CVDebsb",
  "key10": "2PbHs5R6BEbApK5qpmxSFxfP8GShoJMEqzTQmoeLvLA6SSiMDkSafkTPkx3t3XTzuVXgcwFhKki4qUioSgfKFmh1",
  "key11": "4AnCydxMArhgaLJTAU518zKyPsRmCmgenVxFamGGMPA8zCR3JEyJA5FukmcHQ8hLxEhpKS9esdRdLNUHQFFbZiog",
  "key12": "4BSyp93865YW2kKeetMGrWHYzac5eJWCEua4MbfqNt3BCCuShTgALPfxJidHScxqFcypiZZBbdT4TjK8QWzBUDEg",
  "key13": "2r8VGX3z3UbNU74SJuZyx7jyYk4RrYuCwXn8V4xE6i4XkYjsFZt4avoSDPRFxFkCvho5ZC3WuCQNYpzimWqbyat",
  "key14": "39m6aJVWvE15536FBjGBdz4xYJk65tNCsUpXpMKkfDk8nY41LKP63av77HcSaSKyuK14QKphWLb6tGZAwjfqMurD",
  "key15": "5PJYnexjHBe9x5N423g1kyhUHThRWVjusaHS88MZg6fz2oRfqZLJmyhur7iZXtZ2C18Mc9jrzsgwuuDGSvgYHaJ7",
  "key16": "4jpdsHQEDcGXnhqw9rJdw1o1CeNTpqqRb6L7ThgMDA1Fc7cy5akNTc1Y4U6r4HyAxaWotAqsqeAUozDD86HBpMa1",
  "key17": "236AzD2oQ1x4SiHTc56diCqRcNaqbKymLs2RBcM1DMdejpCAN8KauHCpPVKCA1r3t8wKB18K5xte8nDLdEGPA5fN",
  "key18": "3kYrxzuKFcwoVAn4GL6SBUYUzXytFXUSgAEQvR7RVxv1v1UT68WtsSopakLz49QGfcVN96d6o1ZVLhwoFH3Ui5aW",
  "key19": "2VBnVCcioVVKBEQvmMJB6DMvrHvtS7Q96mDqt8YuqjWqszjrynU9LBKJS9manFEeBz3rFhAZH2Up7up1h3QyngT2",
  "key20": "3pUrcdmxS95QKNYSL1C17EsPrGBA3SoZLH6pwkYAWiFTStW9T8hadiU4uHPJSiuCuGX2usmCk9MZZbGQWDLdhVVj",
  "key21": "icHSWT1LRzveA9wxXyqUTmAZYFpT3ZuwZUUsGUWvCJUz9opPxvEm8eGip9VPeANDWRhwr3s2zFS6CdfRKwgZfPy",
  "key22": "2WqUf9eoqbqMcfhQSCVoNnSYYKFbxgtxmo4Yh6fqJ2Ttt7r34YgUK7WWCrpuXTSbQ2SEhLYGVGjDWWSXKwcQKZth",
  "key23": "az498oTQ66uibptzdGRoY1wxM7Sbd77jj9dm1UjtG4dPgUxxPT49eQdwHUwUdUMZFGNKiPXC4WXZbNv8FMPf3fv",
  "key24": "5JgH3NUdpxC4s8xrXMQPaSwwrGT2vazbide5tVC2912iJuNNizbKv9SQ3KDXXcvyHSWpiLdDVPDY7gR5Bh4AdmZK",
  "key25": "5iUb3UdQi7ozZQeWio4kBggxeiPHrQk8StX6CzwbusF1ajYpkSp1xeFAo5M3Uzn2tmbqpU3AwGASbyD1pzKEphyR",
  "key26": "4Z3bSw9tUWYZ4CKr5AhM3dbasXstH6b2tBGy7Sv7QiojMdBDMh3tM4uhU5k9amvrCDEiJ5ehySLGBehvXFfNZVcw",
  "key27": "22QppdNf4KQpvZmBDr4kgv2Lt3sQu7kxXbQYvtYmTq5jaAWsTgxV4sWJCwsfRkNyEgDGC5p4rCQ33ZP5rWd8Fthj",
  "key28": "2rdDq2mDAgdXSTt5WXhAaUL4k63WSSAQqdnzGoCgx1myYinh8NcVN4uGgraQuicNz6C7SiKbuxt4k1hvwCCwWCFQ",
  "key29": "mQ16ZTDktes3fYU2k1F8b2iptYe3E6PBSXtLVZZihrrQ7xRrhtpAvpfMKsot3KpkrRkotM8YZmgyDGJUiVc4CaU"
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

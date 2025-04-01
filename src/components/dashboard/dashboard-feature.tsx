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
    "7JmPhiGF6chiB6W1w9zLCCxT5k6iAkhsFviz1yGsPZZet8SH48XyCGUupUwhGsJ5Fb9gJHxaiNfi5LmRL9Q7KN3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7jVCVkE92nWTdFGyZJFXVDNaNUa4SSKe8v2ajNCtKUk7kKynhTrUHbXFAZQewKdXHnxRu758oyqdqryS442Aunj",
  "key1": "3w9Upp578fPEPNuDpDXmQ1ugXCffB2f2e23WnvPdePXSPUZHskdsXuH5KyJprKf9Ra8UCEHZJDJuMKcULp2tLau2",
  "key2": "48E9RN82Y5XX8yw1xEkpA1jepKA6roCv2RwAQALGtUAVJ7Pzfptr1ZwbTUG5FDGcCj3B1hBSksqxf8iM2HQm4CRo",
  "key3": "3Bradz7J8FRCexaBWMoDafGcUp1UdQJVnbdhCQHDWjRLY9yaDhevFWXrUSBDhRezVbGviJ8j69z8HHU8QpNtNdqo",
  "key4": "sauSZvBhF2VQpDoymCt7SdN4Vbde3ZZgkaqucUezmVU3Sa3DUmSezxjEmxw9B55417uodpqb6Gq9krwQ7BxZvPX",
  "key5": "2JyKcDtmwLN3T6yFgghfQtrSchJhYfBJW44YCRy2vSf2MN2N1GSB93orQcuZnoeyzLPRjHL8XA965eg6zq3e4usC",
  "key6": "2Z9uGHUvsGRqwA7EdDm9Dz4VDoDvcQ3WWnjhpZ8Q9afwYzT31FpfgkaZCQhL2gaZZrHCydfhZUUPNarzHdtqb2Nq",
  "key7": "4VxaRTSiS1ZU8WVp7o7E62Quv5tQfahKnQiiBnGR95sppcw7EZ8J4nxdhfAwKVfkzcoKH1cpd3wPuu9gvV8PYL59",
  "key8": "EG6tSdRXEiSW2s7t1ULHgA97WzuoVQKqxJiz4jHa1KfJD4mLxdHb1PASsE8AUTwGvpEKcaU8KHGuoqiJwaR1xRD",
  "key9": "23CZJ7h5iECh1wwXTh45EzA8hiTcauUjn1Hzb6cw5PjjALxxZFbnwkSfccs5CB8ohQXW8STLq5hzEoYmfFtP1K5x",
  "key10": "8wzUUdTfVJwDYf9qbGfLEroihZaKDGKNy4iDbpiTpuc3qJwY9bY8vw5HsKk3sx6gefEuCNxvLQdw92D7ohV5Wwz",
  "key11": "yCrfTgQvB5m3SdjnyNNnA4DWjh9A3CTs1K3dsMkK9Aph544KUJLssPNpP7fVXz4uyVkFFNeUgMHfZm5Jr5FPWYW",
  "key12": "2a9UuXXXtHLQGaSb3a3vcJJDzz3Y3VRBFRDKvk9uhJVpFSXvxENye8i2YxT5bxpus7BgcrrYJjHNzTnMvFJw2z5L",
  "key13": "A9jQhxZUgecNxTRas3fxGYBmbmZ8cTrbfsiACC5pH1UnGD1RAedycm99GavFqmoygx237mt43M7a3U31veoWXPC",
  "key14": "xSSxG9V6V3ezbksW6NQTszeBn8cDHgToHuYVVhNuur9WvprSW1Nb1j6S7Zc4cVF9swYf9BUBu79ihY61naKYJeF",
  "key15": "35VQdDvfMMYsgWtBSNHrG93HWtMGPueQqqB7VwDLcVaFu1RzsbQS2efVzA21AXo4CifY1HnojRUfebAF9NgZ4xaE",
  "key16": "4Vqm74eXP4u5PCdcCUbWJoY8BZ1viHKKqsaMEipQPziKQiPXTjCTCze13HfEyFj65c4XE7wgndJ8ya2gGoFwDkug",
  "key17": "5cmcKJJ7x5xVWwNUzrbZ1GD8uTLdT3Vmuno2Yq7iVq5Ef9BdFCCBTAKE1mtSzpAoFfeZNXiRdAxFBdXHx1RQMHBh",
  "key18": "4vPQgw5oE5d3nS1zzzdv2BbkU2ViDHnoqBy6fidrA5DqKwSaWWo3ucbiL238hf4DtUxmKbY1ysXisECmJv8bg73Q",
  "key19": "2dkJVg5zGotKZT8euiufCtdLzCBxgx8Bp8M4JjbgX3gz8y27FtR2Fzv3K1pUBWNr1roQe5JLGWwhx2mxac4CJQv1",
  "key20": "VZYjohaM8e7NdeYbejUJaPdBqE8g66HqbEiqckHPz8C2fTGbooZumniNtbTXM3B926HVSY8SUAeqMyhtkYpqzqG",
  "key21": "hbtF8Lizq1DDV7saVb46DYigJEQ1Az6VbxXbG3MVGiiXJpEvjycetipzr9r63arcPoad4yBEphLZQqQHVNryNAH",
  "key22": "4STnFY8pHi86SPZKxXQLCs8gUaZh9xJkYN7wvopdkJwZdUVo6QfsaiGbZXpgQzTyALSTETifPTXaenjjiHYxyb7L",
  "key23": "2YLHNk2nAHz4LArKNuv5H8XJZ6Rsta53hfVVZKeP9JNxAaakj2ehhy4Vsu6H1gDVnRGc3Svto8nKza5SvcgaM3Fg",
  "key24": "59VDWQDb83MvyxYCdU31wpZDerCe6kGU7j4kemi2iZ2Yd3vU7zrZCJMNEms7Xx1cGjnQEWb2HNwhjwtYDC7qnzPe",
  "key25": "2Ugu2SNLDJXH4CzLYDgV2Ca8qphjfuTRuPDRh6yKfNrfvZxvWnsvJj9hG9w6G5GMAFpBZqCQraH49RJ1vo5ZBwFz",
  "key26": "3rAig1d5eiHJejQ31EtW85UDxnzGjPt1o9kgY3gwC5vakEF5cHNGeMDzT1TgigndGAxQfAakwFGF2EmBMrs6SbFq",
  "key27": "2S7QSmm3KUj358zRYMoR1UrLKiWvonWb2AFrqNu84n8YBwCbcwxBpiLWvbqxJ7ugV1Q8RSNborLEvyboRhgG3Y9m",
  "key28": "k7g5yZWDpBwMeM8xhSKvmfdcCdLW7Evqo9Q41vpHnyb9FdpKFrduQ6x6GgQzyXxuu4HKWDri2ivZ9oesxyFUFuX"
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

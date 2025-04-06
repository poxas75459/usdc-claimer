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
    "3JFspQ2Mry2mUf289yMHtTPG2Hs3hbJNUBXHt3Nc7osgsjn91TGRijWE6cvYx9Ve6qebvkcHQjtbRYU4NZt5EQWq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8rqAWdBQjg5jg1eR59v4nh8i33AgiiD5qHv29k7vXUF915NmvDSrqYS5X2JxvGefjJFHFGFJ6npSfKXuTn7bKUw",
  "key1": "297mfCpZ1bm79hFuWci9nfzHwVtDvuUHeVFQr3NjngKydL91otRtVrGntfbbAigaXzoSZSjN2WFGwL7NwErE8H9t",
  "key2": "tiQ8yH87HaA5m4Mui8hhMGwPJ7S84Fi2EwrVDbV7KbbrWdo2yZHeZ5P73B4Es4fLqeWZW4oZPQBk7EYcJed53Ex",
  "key3": "4YtKzTB7MBpdcMHg1Pm7C4LaxJ1fk4czfHPPyxU5MKnjGCVJMm9RRtGUJMxUsBJiuNBa5w8wPNzhVZQQD8i69eL6",
  "key4": "2EkFjK5j1h8AY5Ro42szZVnCbknvz4tk9VbnXaC6pY6mw9WP8HLKz2kNSZu2kQ2EJnZ1S4KT1hQsSh6jamgLKRvp",
  "key5": "2niTisnTeZA6WGzjsxkHdXCDuyPGSHvX5jrC8v4opjUgop1K1hjKHyUM4wiosvfsQdKeeKRuQwqYsa3Eb2MJhVSM",
  "key6": "58rjujBjM7YrYLQp4uqhMQyJo7AWHTBDqj9yX9MpW4uUrDTLRxBseuNjnLAE95UB9LkZyb8mkDaqGojjxFp8DfjC",
  "key7": "5sgKQuKHhtU94gscGFE5doJfGuXugf28nGdCEqivsR9AqmLWJpqEoK2FabE23guPPn3vnEgokLN3S9hpDoYUahs8",
  "key8": "2kV2VzmE96mSwHbYgyEfnsCkjScqvbojSq3fL2izWfrzaooR3F7wkpAzDQMbihbXP5H51f2jYSrsgYEoM57beuvo",
  "key9": "4rZX1piQUpCo5RE2yXaHcyMostzwruC8nircicEMPiV1QLY8ct2dGr7YqTdMzE8PuTgohxGzGz2VYoo49TS1MJzU",
  "key10": "61tEgAErDKncir1iZ349H8LiqqApuxUsg8cHCdQPzg5wDoU8B77nRDXDwgtsg1bWkg6X2GqTfouGiB8gssYk3Kyc",
  "key11": "BzoeJSb21qux93rhGDNroE3Pn7X4f5LHKigF3YAD7n22dBsbskochyxBnsJhw7B7ozSuHMnpREAUPpHetKDmo1T",
  "key12": "47kqpvQtD7GBnaFEXcNPm5QzZiUo2JXgvbYfwMQepL2gyB6Rg9HKMZMXS74HC4hXAvthZT8rtvLFMKwGYPxREDHr",
  "key13": "JEzMTYfcPpV35PpXmKjFKB6gCMTrSuyUL2pzuk1yq9gZYjDaLxxUDo6f4dNa2KR4wLfwftzQSRyRiu5nnmErmDs",
  "key14": "39NaJBWFPqZgCqJVhPSG2fNMhQBZk3jKc9DqsFPmq2dVF4aE8YcbNnZYPfF4Jidcz71EGf6sQ2sQurXUBKH3dUTK",
  "key15": "4hGXbFGqpFupCJYNzbjcUYvFFU3Uo4DzZD4nMtiyB2MDz8EGjJn5hnjxDPEEYCD4JrxFSVxgiKV1RUJtRfTFWuCv",
  "key16": "7vuF16cfknu6Aj5oMNFs3gu4txZw8pByDpLrRHtTiDsCCo12WKkdHi3ov83KL6tnrGFmfyEbdoRWAPZAdKNStNB",
  "key17": "2YAJVCu34UthdwA6SturYti3TZHHejmowqTdwRtt13X7F74YjwrQdbARnhN4KdF2GkY82BzxAdMW1DpMVcbKzBNn",
  "key18": "4JLKCVRcuvv8oBCDgVD2P9fFKNgNwVvUYSRhvjB8RJu1CwbLnhJqjmpBS2qgbPqFcaHLnZ3o1b7QikvaLyrQgcVJ",
  "key19": "2jU2tfL9dcboGXFC6aKYZVqrvM24kTo8oEtkAxpNfhRt5RzoD5zUPrez1n9kcbdzLCkiuPGK21uUaG69EEPMrF8q",
  "key20": "23jwwG3U7z1V6zZJu227uuDH3Nch8uotG6Y2BHwK3PkVUDTiuzYTeZvazJ2ZWbDPAeHcPz1CsXKQnPCVHjAwHxwf",
  "key21": "349hHBsHF5JMV9Th41zFfnstjZZ37WLNuozGK7kwtNd3dEuv5krdcGNNey9nnbkJnAiFx133eUv51ny1zv3kWiBX",
  "key22": "3MNtURBRxiJUdszNsWoiqYgK6ARD8pJerbG12aZxaGWppevuni7W4tewUVAtKkDP9jHE5emYgNdBcQi4Uoj5j2WU",
  "key23": "4Zf9tqqmF9NUaVMWRpiDY5Ddwe8RMUeQGk4wRXswmYecGXWYA8fBzMNRyp5KHJgtjweJrspBBxv2P5qYupzuntNZ",
  "key24": "3R1RnSoFu2aAMbU439mTC1mmpByz5aS6QPAsR36TUvYV7WwcErFk8XfYLPuU4LUpRN1feVutR5PwPP7miHT4apQp"
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

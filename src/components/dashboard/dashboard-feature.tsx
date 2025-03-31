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
    "5ZDEqdzxYvZYXi7AwZnuxSXABppsS91C4Dt1VnwTxRydQn7yZaHDRkC8nC9dUpmbT5KJM4vnWetjmwvbTyTjUduz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BvAjUHrfCDrFULLcesNpUw13fXqdY9SVMhvfPisg4XoEdPrbdm6JqzDCK7XV5dkna999zh1QvDYBNmGoES6eLor",
  "key1": "5FUSMmpn6MZtevSBQmRHMmDP1Zjc93nV71UC3pZqXLR8xfTCEaUBFQHzc7FVyUzAGN9LECgWXqHPpziVeYv95RE9",
  "key2": "3n98mYy3dUdMuq4pygZmiMqKA4gFZVvWWTCjGozmbXrLU3Pf1fXxTtRRHWkLhW6yTWNGXYKzyGZCt2XZHvXkHxRd",
  "key3": "478Lfg8fWL1nuKyPEGstX5hzvYLK7u2JBmQVtHXXB2eh22aHnTu5thHriJRW3Y5koLTkKAsAVtuiuUue8U25iy46",
  "key4": "5W8YQtQgFBHp33crsWWiVFch7iFsPFxwWCbeuzVqm3VkNFhog9Hq47n227GyXMcuPRXqqFrTceA9ete5yU75bhx",
  "key5": "UHczVASvuz3uudW82iq9egWMZW4xmdwe4DdtfEWGYNncYKhAsuajiSWYSFBc9BmHxhAtm2BRqut8K8A34fUbHDs",
  "key6": "4neSdptUv9zvMmrZNj1wCVmN26yNehUdttydFzbhjLceJZsRo9LGovZMPMYUzyhJneNYUhuzDiu86M1qj7XKtv8M",
  "key7": "2fe2J2u834JprpzAGRzpUddFuU8UNaUgqmgjMuf1Yb4ZcBPNDdBWbB83Sk9XUHLxDjPZYS27hzdsB5uun9vwig5k",
  "key8": "5rFQdJeF96F1vGxSXkxNxNFYv628SZaEC5N798jyEMFo6JvKmNMmYeW25sd4GTgJarLTqtAp9PuvhJaw4AK6mE6r",
  "key9": "5yTQAHq9gTNLp3eX9FvrVuzdYdQhynkebo9PRm4zdNnnhTWm6PZNNvdqkBvLDvNjsxotagfLFVB4s8WzJKorcKRD",
  "key10": "5ne8Ad2LypyHxPsVbBedDTEjcH4RVkYS9j9jefGCfzSJFjufk3skq14moULibfWPE8SYZLKSqpMSgg4x3W7jPxVT",
  "key11": "LJAY24JyciLbuoWpVfe7YWXMg1jrRJQDs2ufSPnxVmU6rHp9Jizq9C7K5TQPVGCcakw1b9Gh2XkwNXRnKDBok7V",
  "key12": "5mhVVHpQ6TaMSTkfKzGN1ceN2R1XqFW7Mob1VQBcDJViBbq4Q94vy3kWCtKt7DnSNMKLdEiLQfRJEdgsom9FwJq5",
  "key13": "DCGmTsStdwUTF41JEHoVCLL5e5FLWLstdtBZcwscJMf7M4zS6XE8QkUXFq89wvFme53URhG6hMcPd2tSYsbaVP2",
  "key14": "61JYniNjayP3EbgAczL5kAEbxW2M3duqkphkLRBHdmPGVmrJyEYNA8REZku3NbzwGJZ29VuSHZpAJrxAiE9TaEhp",
  "key15": "Rqd3V2qHDaGFRXWMGdzEU6MhjmGMNE3MP1ozgz2zU2wJx7xx23pbAwdJWZN86wDnstGeApjhM7VnA9tWSEsmfpv",
  "key16": "4Mmc8ZcaaZXrR9FVPRJUr7q5rjdhiDYtMnapQZ3F2dgp8HmCbnoFfSdekjcexpGaPMbk1PzS7xBxwH1PGqsDVUrf",
  "key17": "5qRfwdaMnuQMb8PXk5RMTAL2LAkpGsSnEJtMMEzTeTSaagJbDx1QVuuoWQoU38xiS6Em25va6f5Mvfi8Vt7GUTYr",
  "key18": "4tfGuNMwwcxkSYNqEWzPVP4ykjXXdg71bPBkRd3LHxcnKBd6eHpqtsfYRgyub2omsJEy9ifK3BPzoW9e3zqDaJ7X",
  "key19": "4XBWunxtgHtfp8sTCSrjRkxDjL1nmQPUvuQ8JCztuev38mmMu5NRrVdEaPWD3BBxatysNBfN7vH8QuRGL8gWk4TZ",
  "key20": "5qbEAks882QC7HgdJ1QDUmrHKuFKPZ3RFJvVugHnywgcbTApFeZE7pUkVf59A8vE2rafCcm8EZkX5aCNECAN9o3i",
  "key21": "57Ucs2xivRFDPG6YPsMiCav94qwuAiXz9hajBEuBiePj9k6irL3nN3Qqbh9d7TBfZ4Tcn4F5ANntWBABsDfUZgzZ",
  "key22": "3rKn1KeGBGoByKu7yEX2Xt1MEFTWPUHvukX2ez31bfU5eArDbf9KmUdepeJq9h6SVYjXH4Wc8sXtTGUyEx4H3Vyv",
  "key23": "5jBGDy7b8rYkh519NKcRfrkEDCPzBZVqRk8s1XfmGvE21i711kaCi5tLhYdFo4CyQhMYbzQZQhroFYH5uvsiQC9a",
  "key24": "2yHJur3faw1qoZjUq2MqUuLGqHsvxeVpBM9qxWRWyaN6oob2Aa9L3rWuvTLSCfo2UcRXFZSC9ENvoJfpYcFG4yp8",
  "key25": "4EkzESTu9ek1ZkfEXSMmHJuFwEgLEaaKPNXq9M1vyiCJrfzHHdQia6S4b3mc7jDwzayLDkTvYbKdxM4rQeWQABvL"
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

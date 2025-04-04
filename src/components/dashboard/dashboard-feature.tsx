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
    "32kGvhbumcaatzd2wX1vRFHog851qQwL5jFaZsZFZW4Fjkr2rPQWqvjEojWPdfTVL8onXRNe7K6naEa4b2PxUSJJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HeocoXv6qAUFf1LGrJQPhs762jtj9sQeUxGSjcXiP7QQewDKsNCN2XkA1WKu43EviCWvpi49ftZ4S5hBHcvJqDP",
  "key1": "2JKdMqEUyQViHkDLBS6QX18zLFXVQ498Ke1TVw447qW7f4W4PavdvGuwCnpvmwd9UkRy3pZhQfgqAWJM5nvV3rQb",
  "key2": "2Xp13WzVPDoanevhGRMYKFYJ5gUpdW6BGpw7VXAsTViy2KawBTWLoTrkXfutQfXvCXzkosaCCHtJTsx4952Ha3zd",
  "key3": "5ux6ABYcxVym7WSSzCQYbapgjk97FbrztrRcgTVCd9Ld5vizyx4c9AWj2sCzR9GaDNAk6kh9tpd2o1nwo6qoQiuS",
  "key4": "4YaTpgqsAEmE5xj5V5ExR8ZCHcUzYVpffmJSrgk1JqAnSM1oijzNJPHDFeJnPTmVrpLTwkoVMM8FnaLWJvuVXhqo",
  "key5": "44MyzAnJVm4p6YG4ysa6rs339okVqJAzRLy8S74aioJywMZUMJEZvTwWkhqTTHL8ArWQEPaHAWs362URoJqRtTfz",
  "key6": "3A6K7sXnQyZ2ggn4hrNnd5S2FFJ9RHGzHhqiuxSAkUsPALib54AUqAUUvdVdhnhyvUMkUDGAZ1bFTvvRZ5ZS67US",
  "key7": "2dVGpmSDZ9ivd1p8TZqsedRqxoLqUyjRYHoxCLUUQXV1EdH3uem7eQhmwUqnh9eehSTTRbEHatvk32TEAYQ4oVo3",
  "key8": "22dK65YabzV2TVn32NpG243GT6Ujs9fPVhLS2g11MDPderYowsK71UYoALj4ysr9x8r8JmdraaWgVz9TqEEUM3Gj",
  "key9": "54LbQChaS27wgPrqMHukreSBtUsgHW8UfGdvmST1Wsm2Ju1jTYgp6JCpvKSUjp7QmyUEGNazamX6gN8nHy7XMGy8",
  "key10": "5yxF9F44on8WkdKXoxqbmRC1KDRersz2Ptwe6ueH3eX2PjXSkHP32BdcCrqbrkDTWSiGmNbvGBu75TMoe9b2PTaR",
  "key11": "36rbYfQVgWxm5Ej37oghj46zq6NALTYQ4HFtv6QGEZMfWaGQvWpBAteaTbfkkX3mECmTBWYBRq3CGS3851LNBes2",
  "key12": "3KbHp7AwV2dpKYvRBwsuoCM7T9Zw4ivM5X5KGQv9MLB18VQ9WyNTTN2PRQnYpY1No8XHXUczk7e9ZMqLmcU4ZeCt",
  "key13": "5u4qr8rzyEkDfjj9v79mJExNz5po8wQdEVRJTkKkkFkUm34Xwa131v6oe3GC2TCcpG2McVVLwWPf4vyQMy1iNktq",
  "key14": "2bQRqN9hDrjAVSqZWAesoDryiXuUdwpS9KNbb53ZLdrzgU4m3N5wfvNBp4vx4TDG72zQCgGYvB8GGbiTkZBnfLBx",
  "key15": "4T2wLKAvz5o7i4XQgdmVseepreZ2nKPJachqhd691paDT8BZS8nSFRWZfpdCCvYeSYGdsngwFbUtaLGKd1sk8FnR",
  "key16": "4fdrNKCws4AMUhYzvMtsMgheEhmqZNEg85MW8muG9xzJh8tgEioJs7obdWQLoV5qvfBzXnvSw4jd1GVV4D5QyS5U",
  "key17": "iobEt88Koq9N2cDu3QhQNTzKiE759fk6aZLEPRb1FhUNkrSG1ECS9t8FRbdpWqdcYGuMqZqoNr7mucZzNeveAN4",
  "key18": "rX1WBGhdiVCZaHgaqDHDryQvbNKWLjXPZ66wKKfR8q6ah8LAwU89xwtoWkK4SDgAdSCKHSZjpMHRBz8iirhpyN7",
  "key19": "4bGATvB5TQCRzhD4ehRQh4nhgjhAq8CZn42ksQXGg6NE5bnSRSeAjvKYUNXJxcAAwZRiwjB6R5QcZHzS94vyKguU",
  "key20": "4Ff4Wu2wVsLzLwscVzXNAvsXAuCsLTgiUevQfiUbiKu9Zt5W1vezG2VYgb3L1p1KJ6bnPXMWvQkwJKzgHYSTJ82z",
  "key21": "3vWaFkQZNoyCdxc4uM1PXivC8duSAGqQVyfg5PqzmY5s77mhjTgWKFz8bEnRZJRSeHh4CrXY7xwFXa88ucKCvMET",
  "key22": "r4XzW6zNhyNYYLS9aCZmCaZu5V5zwrFHuxkDnU1vEdTtWK8kZaNd2c2yC1GruJr8oxMdj8CoFhQVrbohahPqEFg",
  "key23": "4N6C3yKZSFWpZ4pw9SQzFhbYfBxYEjQzy7BjbXrRP1KPj5DPKQA4bWCHBhop6H7jqHEu6KNUqC5N51mHrGatteEH",
  "key24": "iCWxNoC8GCs6jxoYELwYVEhY99Ldr6sBTNScFE2s7sFfeXHDzbRKz1Lqmd2AEnAW5fPaMgYi84jR6s469kYJfVQ",
  "key25": "2hrGZrV3dKZLucLo3ddJ7geyuAmhqKF12hh8mcrCi9pd8q45CDCkRbCPsVUSv1gNcQTdHtVEQSs9XUkkBMKCZaPt",
  "key26": "5gWSNw2tCT28KQSrk6Vmm96rxnou7k6qbPXJt3632AFN6ZN652aszpb81sue9dZF16NQf5yJXUC6bxX8igC5CUQ2",
  "key27": "3aiFqoisyRWWwkpGtcgv6Fv46ctNgroc22StZRZ9vKtZQwTpRgoepbH5PUtsJGfMEKHnJqRgDXaoxP7y7RAziWAT"
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

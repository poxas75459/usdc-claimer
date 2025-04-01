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
    "5G2ec4iLJ4xbvDng9bh8cGMQeanhcN6TqKZsvWfXYtwq2eQTaacvYqDWspcept2QaDqNnMtQk28UmJDscoHYAYa9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GbFeVGp2fAjK4WYbbhJC8CqdzWmaLBkoQHsMEhh6xHcYg9hMNRk9Pya7WkRpvU26wdn45wFvGRVWtVYUKHKrgp4",
  "key1": "3nDeAwR9Xku23tc9jzx3dsWNaK6DFN7SzHjq59cEaeyUR9eqM6mWRCzf9TxjyfmkhSQt8Vz66Tf7vtKfZpLoiJTK",
  "key2": "3oLGMfFtiSXzrZj783nceZWrsw6Z4UU8c86GjBtZBHsEtDXXAsvXs2jcsUPuWXtgQmGqVMyJwKd83E34nySbRHzD",
  "key3": "3KpweF5oeGAJAh2tQ1nVXtEvTckjMv5ombG36C9UMBYxCm1JaqueaAa8kLY4ebRMG21KqcwF9eXbMFRuo5G7X1Qn",
  "key4": "F2ykTGvqzaw4RkGgGrPiKP6Pt9wFk51Ly1bXg3QbEbVfw48jCB4nFPbacF6ApCk1gULFmiDTieURtjqqJ3mwV5Q",
  "key5": "5rXeG262S5uDAzDvTdG8z76AjtDaJL9iQ55aG3Y1wWRQycVWiBEdja4VL1XLdBggHPXmrYeESzfqUkoacENz5MbT",
  "key6": "RHXA4LhxCmse2e63qK4BFNJu5kcuzRBHNT1YNpX1d7ihSqCu7gMWgEt8TpMYWsaUr9fPHrBHsnFVzDiJhS7fBMt",
  "key7": "4CFAQ3UMZbMLpZfoqkJ5dueVmeDhEQFBFcFio2Pim79GA75cno33BJhiw918spokZvexUzjJ5R8Yuhu5972iAdN6",
  "key8": "2597qAXC4wLt1yYiiYig3UAkmL7REeLDFKPQWGj24RAeYtF5mh6b6Y5KeAmiMM1rvFpLLgnbmC2H11FuAxuWidJu",
  "key9": "VoQLfoFLjwp9XShzhbpsy4VdCaupz2Qx6nLap8ahqCFgLVjyj5UvnPAyCnxYZpQQvRF8FeC5Y8Lqdo5JemmuAi5",
  "key10": "3wKPeAfgmsRr4h28hTGaAuhWPgjfm7Ui7LLFDs1L1dLLY3twfRXLptfvhfQsZ4SzRk3FEsLD2xwYGXX1TCQTn4zr",
  "key11": "4mWqm4yD7XMErKkLBF4hoMuGrup42hbXBi3FFHFQxxoPJcPbZ1kaBTC9iGY3tVeKtVrwC5cfvHHpAawyCQ6pFAWX",
  "key12": "4sWSDXjZP4niAjJXq1opZpnf5x7yhJ2YciCuhrei5AqFaaBktWHaC7Qn7bdG5RSErdpZK9ZcWfHL4fbafMmpdvRH",
  "key13": "4WwKJVBdLgR4TAfrXtBwbUjcJMzkEmwu9i5VWpYq2p5mW8Nka1E8n9FhLx1ARv7HVFkR8u7sWJVpRbDUhsqtL1Uc",
  "key14": "4D1aCQqKr7d6vdkSrSpKnqw9xgL1i34q8RmPa1p1dL4g5oXsj2ctz2Z3MKJ3FF5uQuwLUVTz6L2Jc6xyR3wH4SFo",
  "key15": "3F3b7jvnZErAb4CB5i5pCjjLf1kLKVni8ppc57WVLyA3GTrStv8fpja7Ei9zAX6keXYraBQs9H4U1ejfNuujn7Je",
  "key16": "dFBjWgrDEwcPBDUekMeeANcd2G4E6UxziKKBS447Ly2xy4vP1uPLTo6umpSbiT9gyC23TVpw2YopBkchmt94Z7x",
  "key17": "5uduuWYbhrPvRar6QqV3qSrH6qGH8MYkxdKkib2KZwG32jqbKuberY22cCM1VYToTFLUPhxMPt5GFr2maFfnAhe3",
  "key18": "2zb4YS6Hjqr9cgwcxZHBtQxNNyyGyqjG3h7iiJQmL3bcAeCRFucXrXH38QuCJDznMkoJQu2bbUHfQdU5K5KACqvG",
  "key19": "JpKftxMrZPDfaDE7b14sHgcPsxDxJs4aG3Nv1j5XTSUvtjR7HXbSPwp8qRaqqFVsV1NNzY7bKiDK894bznfXmuJ",
  "key20": "3ZzsmyEREcySsH3viP91mzLGsfwoHj3y2AE9Pawp4D2LAJDvhL34xpRHZPh4NHodjqN13YXvMU1RpHsbtubmc1wg",
  "key21": "4xY9q4QDsH3chUUK58X6By7JNqz5somxPRe9HTNfXHqi33VyBWhNc3UrWXG6WaH1bFth7vQhusGF1aQMGnJbBcwv",
  "key22": "4Xpa9AHNuwe3ru9m3RGn36FcAKmSeRWuPdJ2Hyo3L1dfMw5gMvbCKyHej9ngdgDacKE1dp7Hz68WaRrHauAy33EJ",
  "key23": "2Xb4RMny3QDvzWyWcGpA4Fkb3SXeR6eaLhpzWqVPTY8i6SPpz5EpGEqVa4kukhpAF2MaZsTV3kbbEAvW9iviZCL",
  "key24": "3PT2YsYxDXbrHH4Wuv94JNEzzzXbcZKakkoyigbAeh1V2FnzkbcYmrRLPWXrJAyiS5qPrdT1Wuc6tEsHzhb8faoM",
  "key25": "3PanaQFvWHpqrT3adjf75oc8E5VQfeor5RiN4k8nY8EfPz2icnJsgUFqhJzFRPqvvuBP6KVZznqqAJBhv1F9cwMf",
  "key26": "3kpqqxThpBEcEPyzqUNiKPuUD4wP9hW1HPoZsK3sY8eSTQEgGhKe9ysR7bEMoz7SnYdyJC2WjLW4CMnjQKPW8vsF"
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

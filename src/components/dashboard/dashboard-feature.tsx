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
    "2doYPCAqfiSGiMyrwFjWWpJX65R6QGGuhTiJTtnqp7mtB5UTbbD5MLNursDgfZ69cHKisUkWBHUi7y4eKWCNqxDi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JiddyV8hA2mCN6HExteNWVn1Yvjzbv7jEUj9agT8ooK5CiTwSq9izne6zyMhm4a22UfXckFbVAG1GZet5KvGWci",
  "key1": "4vkq5PFcQSgvHAGwErANMbieAJjDNW4JnDp3161tUKpw121oCH8DeTpjo6LSwFttnGgmJCZ9W2QDvYARpqq47WSe",
  "key2": "528uu7EBEwAbcX6qTk32W4EnfCCewdhF3mmzMKxfUTaBeKapPjmkGUyNAV6PkVBa9kFd6MA8sYGaTGADKhMdpFSc",
  "key3": "4ekteoytZsqRZFy62WdJr7NACE96XubnRUjtx81SRkxPaaXRh1bYZSRuvUDGpweGtQqcYohT98DrBJkxpZs4wVh2",
  "key4": "5cNksmrebzCXXKdS2Aq7C3HjhpvP1QJZyBUtdiDbFUYgxdx1imasz6wTrBuCGLHFSVGB1W8qCcxDtGdNELprVCFQ",
  "key5": "5PC14zizJv6QLdDZvWXe1itAiVkari76TRPipbgBw8XWmxedVM1zMUmbUnNGRoTLcgnHZ34k6DgkgxHevSyCDogP",
  "key6": "5SKHns8a97ebCd15Z8zvgBE7JCULzDEedT33vdfJpzj2XKbr6a5q8YFMpVUbcXAvUcJb46gV4WiXyv2L4sN6jfAG",
  "key7": "JxqUoAMS7dekHVNyUEnjnsmZPcy6R21paiKfRkW5cLnfQRMi4SSd2KzT78srkZeykyBTJ3Heeux95zbV4mfS4nn",
  "key8": "53JbpW1Fm4yfbrp74HwcJyEzrH9vnZxuEXiYimwWoViABj6nqfgovj23g6oMy8pMAhiCPsdqXf6Sahrp25ouhvhV",
  "key9": "24iPpVSFhGmwFVJDVaEdXqWyKwXJmcGgw24ajagFZ9zAdkRWxTqPDiEQu1GDE5nk8gT8yoEPrsBpRAnqoWtEKMSB",
  "key10": "4gGAzyT2G64GMDz2PWKbEpKkfEVGPDwEhgSFz6Si8PJXVKm3nmtomq3j8zVriWE8CNTCD6MeM3tsq78R9Nqmhu5M",
  "key11": "5E93G9FG7iTEs6uyRM2g7h3XvZnc2xsh4qvXx83yrPbTdHJsSB3HRmMgmwpwjifTeQwhiXMKaGLxGpupoXqwUD7D",
  "key12": "5HBMSe9RHD5i9LPyB2KuCE9KUmGsuhSM2cXri9avRxoiiH2LDq25h4Cba2DueoSk9gyX1CH2cxEv4srNsuWg21dd",
  "key13": "2CG7iLYn76vJTkkZaVD3DGzMJdLCH1J8cWD7pk7nFmczAATeFuCKMCUpRzFJyrzXMX6RmALe1SgRvp97p4LbwZMe",
  "key14": "48xB2mrLgfkqtXbdfAHcy3NWZ3pxfJ8hP3UmLseib1ty6YQzHQ7Pny6DSogYJKAVsk4qCLVY3GyT3RQite4iJDWh",
  "key15": "28SQtF1QdmUogsL16fPAbLKmKXEzFf8Ubt1iMHaMNe84W16WpfBZpucChUvRzEoei62PMdafAQVDvy4jWTNQsqfR",
  "key16": "57vFq3HPwspeKBPV1uFLZQqvZBkYZF7eYTwazjJS7299v3XqH2bBybNWBUQ88p7BuRfN9yfAArLBcixRd2e32f9P",
  "key17": "5XobZ7PAPDQovsv6xq1dMdYFgbfWBwhp392dq6wuSDT1ffLT823KVoYajFUCyfSLHXJmrWVczFChPiW5f2npqCHV",
  "key18": "2TTx1NZmhcnYLuhgDgDSXk7fuo4GA1zFVN2mretxr5tHqpYedXRRiyQeZrVk4A4MsUkJ71qzAbZV3nHFUdFf9v9v",
  "key19": "23EePN7T1UPh91JtDiHBCQoY6kh5rgPYizDVsM4YPsLyBhKkh8ypaWh5EjyUU4BRgovkq9y1mj3A9CJD4dxZk8cR",
  "key20": "Rj5HarAa3XBd6vj1gdYvew7G4Vs58kpbEgs9nUSfj2dzRW62TUMUVgMPA5iQn8AF7vj2imvBkE5nEXdSygPVvBc",
  "key21": "5uDKZRcHFnSgpYL9mjcEYk4NeFbcxbRQRrNR4s6CC6TW52gWdMxD3sZvBFXimNjuUrYWuHtKbXezD5WuVNzp3WSa",
  "key22": "2SL1vK9ndryJx5gYj7aw8jthSRMKJrtRhUf4fj7Cx7E1v73E5Ju4efwUkNvwpyS7pQXRyVK5j9YGdJkQU9rzNoRW",
  "key23": "Hh7WyDkXtE7jwm153tkmAeivtNxVV4woeCmpJtZYdKCGXS1LrfcooYo41czLp5X9wgFrF9xZBFuYZg9BVvx4Mf3",
  "key24": "5qPv4og6rzkde3EvncfkWXAPDWqQpCGrJtuPVhX7PuYy1MakgQRUogMhikg6HkfXtr9Hz8DcSJLzBi5gzTZNEd21",
  "key25": "4KnkRB6fwpkQb2ojX7xh3FN4rUNLCNUuPxNuC8qZUSxcrAoX5nPsfkiS2CmSDuSKFyoDGSyfoHYW4qFBNY1Q8Geh"
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

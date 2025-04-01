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
    "3SXFgnCFo6Lz6wbdyBVFTB5prTf5bHq2mZaKhFv6L3h6ndibL4McHnpkvKgoDyuNfjXX4Gq2nn38BG6ZNrXfMVc1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i7WTxCe7vvKea61pEfagZXsqpgc7YUzwTtxMy6fpA7aN2CfQ3F72SoB8Z2EL8BsiWwiuLDetpcuQwJ8g7iMVYA4",
  "key1": "25jkXMX1hGzbYYPrBGLvMtCh76jSKzAK3DbSFy2XfkXTEPfpZs8Axg3ppXrx5wbAfZhFFQ9ruYU84LjjHtVNpMSG",
  "key2": "5irUnD3kLWyB2dCxaVNYkk25JsLCLmC1YVyqZEvzpN5JtckqDuXfJ7eSVd33STydpQviyZswPkokN4oyo8KzDNFw",
  "key3": "4wzR94yB2KsWbYa9eSTuY1cFCXuNTGDMGxtKqbWGmKwiWzgjKGD8p94VQSSbaxbqX3WNTzzVHo9guE1bknQP9r1e",
  "key4": "2VteKGv1go5QQL36ptKJJYTsgFCmthzfMoHKqYPDRLvmsL1R1XGufyD2gCv7QvHiAV77R1gksuy9fSTsEdxV9s2Y",
  "key5": "39p8wdpDieCQWvYJTsJmyvP4UfoqcXFmkxgKgaiK6DPCdrMff6wyVfR2JxMBDtrY2XfyWaj7ukQTA3CAa6UGzcrR",
  "key6": "PnPKqT4CnpeB1S4WWMnXbNxA4A5a7gQexcbNFXqa9J7NKDcjECjSvcvqTAHQ627v72cz3YwKToQM2L4eceNDMqb",
  "key7": "36VrMWGvs113DSgXwyuC9ySPwnBkFFerBzJRm3gfL7tazvtDnjCJMWwh6M35WccH8UgbwDb6i9m33qfGgmeeqFQ3",
  "key8": "4Chd3SZTiDhE7Y3HY71go3zziNK5mcH2R2f7bjsVArrJm6RKzEpMJMPF7vDs4WFDCNqCqvdhw2cGCtnfN9USfNAR",
  "key9": "4Cao3hYSAgWDtaiLgdR13mLwuox1Q4jGfpCZ32jQX9z5Y33uXLqWkMxkA7ku3CR4b1j7fvFZ7YvfTeB5BoT8fjyx",
  "key10": "YRRWE5NmUW4vJipdToAmzXHgB6JmRrkGu5RKmfzKeZQ21QeVh2NojdwMueVBsZtqJRr5s4SjkThk9qvahbWgaE9",
  "key11": "4D1sFjysnvLE9iPzBCccCvwxpV2jmjp55JrmsYYkxbDfjnNKZrstV377tgdhdymdwCrNqbAg4EAXr5KmSJAkiVFa",
  "key12": "2qF5xaarnLeuxEg7qJHNcH1PvWkDenSizRqsUhZ9ptMoUv327zKSB817qKmzyCekwQkEFJmEjcGr1yGQRWb3gs71",
  "key13": "4AA8xkm4EJdCuZxt39fYVNob8Nq6nTyYckgZ57UmFYz6UstjT25cLh8PMZekCa5aNmNMgUxR48jRHc546NhSXGtY",
  "key14": "2mMWD2k7NfMB4k8Fbha6YJz5HxGwJJGMMavhsrfZR3QGjXTqaxF3L5Mkj7K5gpByyBpDW8uScY4o4SxGGdNcTMbW",
  "key15": "3KWbnBFiiRpaMox53nGxkLe58twdhLgMWNK9kMZgvEgyeuRNqCxZfw9eymCLvXTFZ2yNoyRDwjCD6Sig4xS7sQQP",
  "key16": "4rWTJpzqFqPAtgJTxHTg3qU5X4JWZTSC3ZJJPgaT4NsmNRVbwdhiL5nK5qLdg4zB3qXMQxwb1kj91Ze6STq91mbL",
  "key17": "5MDdXcbqy9q2TqeXR996sk2CyoDC9uDDEjBiGtUug53cpt8HyazXSmp48uGgSfVRpcRXWGNw4qVhxehxJiUGbRP2",
  "key18": "48CjCa79XVJByJt8NuMccEcEToBZ6oJRhN7LGaidk8Cn9vfanU8u2eiQesa3MJYAWV2emAc3qaPDLBaTNag1AKeM",
  "key19": "5BARswSsPkxDqSh6Ps3wpjRPdWDqxj8xYMqkAoujQfq5V6TBehj4D4t5Ycte2NFMumHcEMDuWjHbTSvCRaY41dZW",
  "key20": "3BaJayqVSXiuydVAwVFsMPgBVhJVQsU1fcdtmQtc16DD3N9tnEmuvHxgwqKYnTDzmgoTezLAdukUu3wswwVuUFDH",
  "key21": "3rS9WyLVd47Qnw4UeEnkZuPJA2frWjbKnEKctmBDqPNDi7gG8UyUrMAtZiQoUnDi5vqtQJVvAT4EmV5pmfmuB7FZ",
  "key22": "5vBuYfrzoiceG1CRF1TGZzvqc1JcDXMreWgd5YTwjUAu7N3dFzRUFU9AKJ3GsrTUsZPxY4229n4gWGYpfeuATUVM",
  "key23": "5XXD37HABTzYgj99hDFMgML7gNP9bCPjt1pkX8FTh6rL43QpjLAmwxSMHDxR3Y4AsdGZJNYqh3rcwdcNa46EDZyG",
  "key24": "3dez7T9xvjcQtzfM79XNSzfqWC22HuNowmeV4z9HWUgoB38Zg5UgYnqrNJGRqJ546iA8j9j9rErcUCqQ3SHbt6Tf",
  "key25": "2CegrPYnNxzkwVXQRCEvYwYP9fndM7KX8aWUMxXrorNFRyuLNWiXpK3zejmzkiMhoutnDQacdN3qiVG9cKqwJwXs",
  "key26": "cgrktsCsCA2K62dHdLNBCvsbDAyYnjAmE3Jac6VgxLUAb3fR9j69DrFVJDLL6A1nWb9APZcowaQgRLSkWfNcYP5"
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

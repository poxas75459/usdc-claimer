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
    "51GG33xdgNYaJMAhcNEoGgXKyhmPmqtvXFwUhYtqb7VxkKsi3wLuXJRVteRqD1sZKkhsPnsMYeD9VVw91TuHrujT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51HXXWnNj8R7mnnSTsCeeFttCNSKiQYSCLe2pBhMCbpwrTeCWJXb58AMp6SijB4jpoP3WQnySm2E2X8V4tzZQ1m3",
  "key1": "5PoRE5tNdbdoPcjSSCUxjjxrDDafJ5FooypToGY9vmbhro9d6j83A2ivfJ1myPiFE1zXhTadm7dVCkwtYWzm8yQ9",
  "key2": "3qUVyFRMpH4p9c2DMStkSt8paUHHxPpPDHpjUN1BddncQELpMPVSz8jKMoAyeFs8LXHh8RkRmkwmFVKzDV6wJHiy",
  "key3": "4xqC11y3XKwvVeH5eMRqKHr47sUNcmMBsevfoLMf41fzyeEL3PhRbjuGWy3w3b9ugCYVYYH42iwnEBEzeH3eMXkP",
  "key4": "52zPH6KPL7oTRUgfwFCiN7qCFqbH6En6vxGynx8BFsxo2FZqRbGBXXurmCKFP13RbNYtotc5ptvoBvh7JTLxsNrm",
  "key5": "3GjoCfrE8d35w7GRzasB3ah533e2EEAy7AazKMDRRK38Dh6EXYLwGFqNrNdZp6dMpGaURMSHTWzLGBUKj3EhwtnV",
  "key6": "YG7Ng5uSU6kCtbsN8ZManpWUC6xXcdfS3GPTXVQDn8h3x1DgMtK7iKNbHGXFjuQNirYMg9ZmLfAnnWwJxD7ycTi",
  "key7": "4zqUrALWVw5bfJ7S55SD4EwdbP98AAfCMaouAz7wJFnvdQv4qdL5xUcNbp8zAFTcqvZZ22y6invtLrNAiLyGKuMh",
  "key8": "3kQgSCFCXxoJKyntYHGdCnqkiU2okPLCGFxzwhmWPSbnxMxNG2br27s2bJK6SeEdLHvYYA1QPuvMKqs3DaqxwoAF",
  "key9": "3PVwputBkzPwYpxs4B68xdezWJreEJCo4fJVeFjNeN52UquxfrFqgerF9xryLBNHkUzqHdibgcg77rvNzD3gdqtT",
  "key10": "2z9S87AEKcL96MugUzZ42ia1dVWsAJtkjzE2vKERqBmsimCD24HzichgSj1nTsaUXst6ikfmD5sxWSYXCp2Bcrcn",
  "key11": "56hiAj4x2mLTQELSa63J9AJtJ1kpHXAgRz8zpWuzhWqD5obC9m1yDsvYmDgf1yCAD8ptURCUdx75467WhxZMmnm5",
  "key12": "5aBiUpTwDt1t84uiv8d9VsDpVB1knDf1KSHzW6PSSLmtJZF2vP4QWV7vmA761CvxaXFPQsKJ1ptXjeRsUHszRZD3",
  "key13": "5s43kpz7Y4Y2L1eF8fkPyr9LYjXmSsbkcH9DTn3d99HqmJBboH1V5TihrpRjQzAP7YJmGotFkkXDZvZrzkyKZTdu",
  "key14": "35a8AiD63Q1ZG3aV7YUYY3guEcqHNmhGK3Hk4qMY312cJH7i9chDsgTwUCF6Z8NPd8vmZrGRbBay6AJ439j75B5r",
  "key15": "2Csuia8W4PF5EZMoPAw7QRH59vB48EqTbDMfNQ5VKFE3YiqD8aGoc7uew1BYZyPGtkeCxuhkBM9sAuDL9SgUHK7g",
  "key16": "4BfDs78iimXviDGt76oM39Txxmnsxrm8oMuHovJbeWaotjgeCWKHAGXnpxkpLDixhtvqPRdiwPmpuShSMhXXJFsb",
  "key17": "2jeaXB5BTw6q3dRPWNgyYhPnP32dnQCXhm8cdrRSpzX21uevS1Gpr5UyVCXJt7e9FjcyWpzEm7eGSmzCZySYedV9",
  "key18": "4SgWf4TbPZCABzAA5Z7kZbTNUPQ5sPpVzF5Jgm2XeuhdrPkxgXWTA9MpcSDQ2fcM1TVmhwopruhceJVhcGJrPCCm",
  "key19": "5FYrFNotjMdBaHcqT5MxH7WWyNYssTA3Y3PbZ8eA1hoZ944ocCHBmZFwmj89L9LFeHtdiVVMdLni33j6ZJBjL4gD",
  "key20": "3cRUXCGw68ugmakakSsHEwGgoSzCr6NP2z6sWsoWcU8nJ7oRgpWKL5JcRsmAVVRSEFRHajMZNCSweb1Hbsa1iVQF",
  "key21": "5sT53fFormG72wQ1ADq7W2A3C4kaNqKGCSUrHPBTq1uC6zeipXMvPqYsSuHAPTz3HiJibc53mrQKmoQ7oejM66TS",
  "key22": "zhvDszXCvqiqmptWwvxymNDLELUvzxDoYnt7Wq2f5vJsg43jmEsecWKutJhdSiK7SPE6ifaMWuFLRCZLzN9uWVy",
  "key23": "2J1AGUApfASYS1ZhF3MLbLwoYsB3BUHjhLPGpUEoT5mcfQiqLggMU5W9EaiLCjEijbv7hQrk8G99aYsFvXKuxyjD",
  "key24": "5QNqnad2W7VxXzqHhtuyDzhRkzQnqJTXcgMCgNvWadj4JEL72feFWUQEEHQgH6caMPRzzCgRcnzHEGZhmuNCrKi9",
  "key25": "4bcCy2cZs93MyfNupXtj7BfGAw8gTo5EBM2jCvo47yCDaAGknfzCyqUumq8Lt9Petn6YEg9Ykf8i9NgQox2x53Nv",
  "key26": "MQ2Qdn4o8sTK1jsqXMAZHFLePjKuoNm7jxcs3kqdtJrhDWXoVuwGv74jaaecTHTNFEdUqFxZTBKnYqHFA5QmHQi"
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

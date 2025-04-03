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
    "mnFyRdPZ3dUECYJg4iWoGhAimf5rKfaf6wow8p5SuLGrfMPjNhdwDVc47y3zkqBywNN8BY1MeTe6JeGU3guMGw8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ntBQ1WFC2eanfnceapjdoCzCrUsJfWkrcTzqDcBEWrZjWmGf4T1ca9kMnTbw2XSS8wi2x8cGdhU7WkXsb1CuMBP",
  "key1": "2v1qjggXLYtoJSQapAXzMEmJB2rKM6Wo3sNJxwFdB8xrr14pzK9h9YJhYrAHoyfe7os9LpCqq2hNHLJAS6qzLwgD",
  "key2": "4Sn3jMawxobw4mfFRjewLye1vEBLURtPYTKUewUTvMKmum5YV1kS3sC7vkfh1WeWJQHVibVAyQdM52mhvNRRSXpk",
  "key3": "cusfWtxo7LxACopjyBUFTiAvJpCYVFUaXTnWntpWxX3fDQivoPw9nFxQ8AbFao4ngCD5DQQ2tLE4UF2YSREeYL9",
  "key4": "4Vcgzc9XneXjPcwy9aWmKove3PyxBhhGnS4BKDkdGAZsX7KaxhJd8oMJNYuijFjbVuVPSWon5woVcs6z3kK7knX3",
  "key5": "iNCCVhqj9Gdq1BkQUiuZ47V86TRQJxaGp8h2HfZ4npruPP5iyrZeo8MyYEaEhcaYM5FS2Zer34hLb8WVmg25M9E",
  "key6": "4GjMi7NSMnfhCN7ZZwYHenyPhy9yLgztBCSurb61xB6AEywLPa98mfyPxvnX84Dtykq2Pjmcab2MBSaCq1FpVkE7",
  "key7": "3ktt3ucC38NLQJ971awGiTQx8GwhGBaSK83tN883zj2ujNaPA2L3XGGfhK83ZwEXUfS7vftUk2GPKqtVkVKNGBHK",
  "key8": "4j2U12WU8cEiJRDz1pLeh3sWcj9qNW23GQbS5293kev26rcTvtHvdM9Jhy4rj8Qqm4LJuU1YACAEdEHUMAeRPp45",
  "key9": "65gA1wD4Zod8zA2rNn1VXFXXvYqmnBepqa5uJYWc5SK1SZ6YVkbGb7RUZJFqYVfjM7cMpYdEW1TLT493EEyK4H1L",
  "key10": "3FQbrd1QmkFDrbfGeGRtBFLcW8taBLiADcRvWD7hTVE4GrTfrHtGdGGAZyGgwqgaAuwXJmBxDH1tDm1efFg2Ccd2",
  "key11": "AQ9oezw6WwshtD8WkmuEaWHg4tV5rN1Gw7RK5iMgKQYkgfGXV1wBa8ZDU92xYwntE4mnG52z8w9fdWwN2neSKjo",
  "key12": "45xdG49uCRL5Ve5HsoyTto35QnbzNnQeBKrVrdzPLy1qPvKJFYXi9no98ynJGCqkgNTi1Y6hARhcXoJTfcFYMJp6",
  "key13": "2EqEN7ExLUi3picWFHRGamwWd67VtrKux4qkPPZoGLNwUGKncDG1MhTr8SqWqwxCCWzeoVK39HNAwgJ8YFhjSwWS",
  "key14": "3DZNGZLDeXaXtUmkNUSJgQg3nGPTEu66B1cZFwv71x7pmuHJqtcfGU7SqhByqbVSz7bgG92BZw2ktSbz8ZkDtvZW",
  "key15": "4SZ87sdV6bzmC2cye15nWGtgAFVHSfcioSaPuVY45bbax75pUrQjL3ZVgb3ETqhpAYefcQCDA3nq1xUXzCWKR9pC",
  "key16": "2NnfHT23cvgfopmre8E6hZMsjEA8nS2wQYLT9Lf9Ezx7s8GTvKrQyMXWHdCwcaJ4KrXqwXyeoRnSbkDs6s8TTv4F",
  "key17": "4C7r69pksgETorDJ5LBcCsGsSWoCxrAyT5yYcWpy29GTqUwjunCEwxYijjQnc6VkGWZ7zySqZdoXDcSGJxmMLuXM",
  "key18": "2uAGva4tJjDTvuhT7m442fuaaYaqM4a8G3BwZDpc4cmgCqzun2SZscRXjxKfViRvBtMTqXaTCdjCMvNMQhnR9sBc",
  "key19": "4DyMiuZfHhJVi1HCNV1LvngdnzWgkvrX6zAvKPLnm1DA4T3bu4UTH9CmWvc9AfbnKoJLAbxS1WVQrgRbuRsXrfoF",
  "key20": "3axXQvwjchWH4uEa6pcc5EWvN41b2ssZGMRFxPC2uFtcRXNwPEBWKCRHL4931BWNgaaArzpSM2iBjDH19pek5gFS",
  "key21": "uRpMRtoVRsjjesWcG3dRBYLDyRCXbAdAXSi16uEiHnyf7UDiEJ7AH2uBajEsfCqGPFsRfnWJKPCePBwJGr5qZ3M",
  "key22": "4dCkDHturNkJhrzdeWmQhaiJGyKgMYZn33mUQ5FXn85gW3BvSsX113DR7AWwBJH6dnxUeHmMmcjMC4aQJnQcUSuu",
  "key23": "487uiie2weXBgBUziFQFVhA1uGucEXzgbSct2F5vErPYAFL71uWKxNj81Q7zjEqGyYKJPzgBqLY4Hz2t2JFiGPEs",
  "key24": "5L2rwKWj8WdxrMBJW2P3dvWSd1GmNFZgWakKL2g8eMvLrs17DSCxWQg5mgz9Fo3yTmRqANouGordX95SmX9yuw7w",
  "key25": "379KuPfWJh4wXSg5A8jgumY1uKdW1UPyBrZx6PaZ4q5EVdGrmBx7a75yCjMtsY1TvU8X731oUBxQ7kgrzHGqnct4",
  "key26": "2YLZGGBBAVD9ipoLGZQwZxSmoXhQcWUCgaT9DmSerpt5rB6qQUeTbT8EasXP4e3fBDkr51EkqMJERn2uvwXHRD3C"
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

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
    "2oNmdk7scrEnoXtdthgYQwm4bdf5Qz8E1wHj2gizys4q55WmeuLL7fdFuPni1voz8RZg8K7SkseP5RgHXPSR3gig"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iiEw1ZeJeJVBQ4wzbDTNvZX8rzQREnJzc6bunWABsFDptiRJ7ADcDGnbQVGA2mivANA1PgN9am9QXwf17Dg8U5u",
  "key1": "ubhnW3kYFHjyfJFRczJu3qwwDUcs4FFjLriwxK8uiRcScZYya3v7vnkF9GKYahf1j8WM8BiMxh5myB1Rp1Dtt4w",
  "key2": "2ViUws8eiuW3Qk8CB2KRNtyQptwKQHjQasP8eDhXPGVjU7VNY6XApx8X9rqkAVvR5Q8YKoittXYsAYFaxe92VkRc",
  "key3": "4yv2TCPX9rys3KbpKKD52mNkVEPDBvXcP9GWZg3mLN5EpYypSjaUzfDWuBtTwh4poD3z2TUkU6S41Ye5a3RBmQdJ",
  "key4": "5ti3Qav8PKYZXJcZ6gZXs1BidxAUD9WotDtX3Eqw6a7BrqsrvUbMxMuBj83jqGPAn8AZfrpwsr5k4YJVnz97wCfG",
  "key5": "3CTSTGvhueMpEzRSCajZF6NBYJkAzDSUVc3bNpa7NWMws5Rfx2E94UWEDV6sWPBTFETaJGUXBKw7cy8Yw1SagE48",
  "key6": "29yg1E4CRombUpY7Fg9YN8DUFrXBQMz55ZSWZujNngfimdXK9n9BjL9RrCCgJK6hjTVwZVXAwFMyhogK5U6TvSD4",
  "key7": "2JQdh6uGp1AyLA6XTR7SpNNj24pfxcoyzLb97rHzC6gRJNU3NtMMD8mL73ZUpavYdvpCCTz1P67uyJg12o3CjfKc",
  "key8": "2dF3CfUiETgikfffSwWfBs1PvNDCuuhuwtPFEEtMDEdJSamNvyoMgQXKuPoQUg7o9RF2xmM3iCGE7geXptRJHbyn",
  "key9": "2c3Bgg8C4B1dEMVFJqsmAeu7hNDwTZu3RPAyGmobvHwMhb2uXPRCmdMeEpUgatJLCitvbyvpyAnqzsie73xs1X2m",
  "key10": "2FqSG3pGtBfqgswZw9xfqGQwBaoixrqGZUccLk6FZ7ZjH6xP4P7NJWoPVQSZNTumAyn17XMVU6zAFPsp6qXLBkSs",
  "key11": "3W7Y3UXdJQXE8Mb5fExN3pfBNWqz6ciLLf5T1wt1ZoxUNPKavEbqvmQhq7WkqaxiFdtWph9taLJFgLe1iEBh32qp",
  "key12": "5RUe9UjzDTAu12VbNwRK1p9REbCvhq6ZVv14dYqzX8a1p9Wd3FyjYprevvUt7nEDT3gT443Xv8JbfmZFgeemaJtg",
  "key13": "5PpEHcvzZXWWrK5pXy9JyhjFHFjscy19oTZssKrDZmCZ2epZFg9vfQXpQuzUFtTszhHBY5WL8s7fNB6ZBQmMPdUi",
  "key14": "4K7TRBhzj7PBn7jhREaC2KnExtCEUzjYaJQ3PntzLZpybpoMaGszmi2dhq5MRsKcvgiGYAeEh7d3CRS7EGKSCpGW",
  "key15": "4i38Kcqvyyex2tzigeuGkvwxi5hY9XkUj2x67ctqevmRxEEcx5LCg7PgLHRGney2jesiQuYNtcR8GSSq1Yqt8drA",
  "key16": "knvh2PcZo3kyX5QbryM5bsz5qEiWn2VXWEXLf4fWnhhSaAXb3Pf2VJJNDDjUbcZMrEehBzXmLAvQiRcGMsLSf27",
  "key17": "3dYGdfc7xxochFvthskVhwq1TwvCBJfrUBnAYpYhsS4aSphGaqhX69vs7FdEwsCRjSNPTuXYVwEwEVXkFaRVK1V3",
  "key18": "hJyUCNFsWkqDHnrbVgrhA576dRfXnrvZ4ovxxHoznqSHiwAd53wX8AZr1iQ2CWRJ2bNy18YJKgxNJTu6a3qq1QZ",
  "key19": "WvdCzEs8d3AffkmUsuBCt4ft2pHr7xochpMb33BZ6iF2KKQ7Akx58niccj93PcBWZgZrBGNbykHMz9LCzkh6ogG",
  "key20": "3xfXjpXvrQa8ZETrYzwETpXJUPJBaFKG2VmaTKji5MnfgFMEfGVbfUk8FfA1adQ8gRfJ55NVHkz3WfnsnhWZJyoc",
  "key21": "3GQL14kGEjF8YP6qkYpC9dQr4NNuF3fNhVjve7dU91QKrg1jyyGSb7caofdNFstxp1TFF1S3JEWpaYHjY7iEHErR",
  "key22": "MqzrSfLuP6o1mEr9gXaz3Y3op96ykTnZSbSw7qcQ1VUEBjVNG2U6q4HYEAa3y35b9UywmVHa7oLV38pNhK4da9k",
  "key23": "2P8rhY9aw3gaVH5BZmcgfKrNf5c6v5YdpJwnqPb4MMyjHTuVi6LHXpiQMZGa2Ypj49AaxdoHHAWkAkgJxZhAijUz",
  "key24": "4fAyNJV42H8BiRKsjorQntb4GG51BJywP7esWjMW3S62ox27bMZ31QAkka99NnHJb2MSCgQfeA5sQxWb54Xh32q3",
  "key25": "2LrqZycbZ9jprapyVLF2QZDKPNvVcy2QSA79r29PE3sFFLxDvsEojqewYPwTtz1oabx8mWr1bxG12XLne6xRkHaA",
  "key26": "2LWpgKBvJB2CzenfVQRQkQrbtH3WeWNiVNk5vFvB8HmPea8HgfieXVRCBQkHE9gEd9YuGZNoWNFPuzA4UmpPp8oE",
  "key27": "2CyJHHo2JqutQkP4rPXjX4wXa4JdqgqVeJu7MnbCJGjpSTucyop7Japh6DnvieSba1Z2Fa27FHyE7X7zjuc3d6Sr",
  "key28": "2y7ELvXpynySBhri4Be41QBvXpm8Zqx8D4odxQdFxJm5MRaRUNz9MX4wccbpXe3v8Gn8RUws9bRUwMF9xuheeHSv"
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

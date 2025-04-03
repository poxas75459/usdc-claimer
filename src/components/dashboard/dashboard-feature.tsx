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
    "4rtNNNFbFKxCiAekbSoU6YyopbqjuZwdRS5gpK4JSy9VrfJx3Zg4JKZS1dC2nSzPVAkS2SeUNsRRFduwQzg6LT5c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BcUztBb8Wa5cyFGUw8N527oemsuixEYf74zz51tH7kd8WjuciyTajQCF4LqfU2BDXdQ4RyVUdbZFa4eFkWcTYrN",
  "key1": "9DrsphV9fdfcVinoucDcCaRcZWC6NwdexZcpriK4d4wfjzbEUgMfgHmChERRhvtDNQKmK4sfoTXbVWQm9SgccAh",
  "key2": "4Ge8qsnH6A4S8hbWfEku92qv77zbqEVq2AkwrVFzbL67wxMaxYer1Htacoj1dNquNdScb9NPdzrMvsK7KsQWxDNG",
  "key3": "4yLCCcp5mPjn4NG41nJ1WVELm6pY3ocw3NPyCoULJZmAu1LBpFS6QpC8Xp5WAnVJHwRwkuDZtgTZGfs5viYMPfBT",
  "key4": "59rHNG1LPzFwMY3sjYGbZ7CiNiSUSzX5cLG2Kyw8cQTJsUBjYUDAGdS7WUwDE8vSLLnfjRmUg3S3rmRn6pSLkyH1",
  "key5": "5rwQHnrdB3K3i4wETCHTvbC5bvNoWjkXuu3ZjpsKTgXjVWRugfuxmaUPcVZAyzYMQkLVdxgXbqBXQFxvqtQCE5zi",
  "key6": "67iSyUVbZj4hnhYcKYMjrDZBgG1Qup2fhhibuowNM9AEE6vTeJeGaTePF4ZnAv3vGwmmxqAUhxVEFio7ueM9bcKU",
  "key7": "3oZzaHiNNsToDrLaTGwMikhTKSMFHx2osZZvjzRkpsi2jP6WhyT8tfCuvSGRqNZ3VgHp6y7oAbKj3MrfY4uftM5S",
  "key8": "3VDrqZgtDPyUc9QU48oGG7KGrvDMPsFN44UT4mFEwmE1YK95WjK5NP4pbZG5YgNVDW5RtnpmqARmtAW7j9rh5qsp",
  "key9": "51wBFkr6N1vumuQHXhq51dd4frYpyyWRuXtuSLmzZ2Xo8zEuppSTKuJhZ8wweZNtqGE7T55nCKageJJPwKeuEuqh",
  "key10": "5XUXhdJDJDy7epiKjFo2XXm5Rf5upEu2H61sdnJmbz1ChcH15fHJ45jDwdjL1WDixhGTJaC5fsg6suwVuVK68Qa8",
  "key11": "4cndPtd7ZUT8rh7a8gWx2XGaXe8SxRBXxoBdnRJiMbbqScWegQ7wXmXhQe5WnSWrU1rYKsASWkiv4UHZkisrapin",
  "key12": "W4TeLJWf2WMyr32HUjmkXi8RgoRFmeB2fDbaiLgctAMgNvtpbtdvoxb94QizWGjy4pLiESxZE5EV4fx9fp8Q35t",
  "key13": "emmrht1jVmUhM2G2F3zz7zTD5rAEFtmZWR49bg3yhjmZYcXub3KuHmmd6oYTNW2JaJkzGXVVK32ASeWvUPvQ4Gp",
  "key14": "54Byet34hU4bvZ5Z16HG5sAxdGZBMaLo8e98JmbvA7PJYtF7w4SN4uDBqpzLqCKXTyRfKoovL5yY9WaumciXPich",
  "key15": "31q6wS1DdKuqEPaPRby3H3JvvfmvbfQx2TqoMafugahvjR2MDaN2sPUoJnyxYUrzbshs8EWEXHCTMRMVzHazEA1D",
  "key16": "2zsT5pfRYmu2BnJU4umzEmbjT4DYbU6V9imfVKVJmJcRaEKYKDUxWcaCt5CDkjy6e4aLB1poyD8jRqrz3RSBAX3o",
  "key17": "3jPXm2MLh4BrJHuBvcaE2yAW3fvzmaGapr9PmswBtQSSQ1YEXSUM9yXc7deibSkHKjMnPEykAP7xETcJZDmfPfq4",
  "key18": "2TXiSfae719BhLjv81Ts6ddfJH7wbs8hEcTVwtZtxs8qkeJNtyoYhdbdPyoYZxXD2HmW6xmSthoBQ1XKiB4xQ5hY",
  "key19": "Dfr3UKvTfidHsQeaf96BynbujU3vZXhDbqNRwVP1cWZf9PLYSoorhasaftssumAGv9faxtJhTyeHBGyj2wPcZPv",
  "key20": "5WgSpeYF9L9Epzf6AWpZxFTsTKBqkke1jtdfiRrxxoAasg94XFYzUARnuiLe3ppJNcYWfZZVmKbT7TEMgiRSNaTy",
  "key21": "U8NhM48Emkwm8CA2h7gabwha7LgJrU4LmzBEqtCLfPFYb2rNxcdbm1wXU6pHVCEKsL9TfkgbJ7SXLmmDxC63g73",
  "key22": "3Azsyunwm4wmvPjnzfMpT1eGwtU7MfxTJGNpSPKGMnHQKZpxFMoJ1athn7Sgc2MZi1X2Br78iNwdjpvDhadaM7ZV",
  "key23": "3qQLqAVeot11cTDcVPzyvf3rfFAfYByT95cKWvY3SJwhNB7urr7iacyQqiJXWebjThewTAu2R4z3yiZVChxcrkus",
  "key24": "3mxLPe9KYe8A6PgUd6SC6j4sjuvkHxKDxQxF2YBVotSePtfSPmdsV1NxUCC45U122qb4xjjxA88AKgzgPbmhRBN9",
  "key25": "4idsZ5YWEM4n2bwwCZihMii6asmu9SdRmHSPCU5voJ8BNi1uwuTTJzDU8PLpV5pMduW16989DG5WUMNS1pphYu3Y",
  "key26": "5bcy1N5UWPtsvunWRruQ7PC5fbtvrL8inJbAUHvKT3KBiu8V5FDkFuvAmoGzBYVGnZ2Cd9JU3WuTa2CpvNAthMUJ"
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

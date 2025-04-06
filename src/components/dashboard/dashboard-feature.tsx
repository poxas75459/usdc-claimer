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
    "5RNyDDqasKwqYsKKSz11vCxngeQcSgJCkHCzqCD7Ew3nQgnQtVTndRDawpZgdoLQneKcmaYnBj1pKS12asvtSx9M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M1JAc2V1n6QxTvBTKCGHJwreo2S7mYugTs3qgCKxNm3257ZtrmhoZRRwqwEGPDG4hXuVRBYJfFh3pTwaFbQcTsx",
  "key1": "31yW61iJmBfB26KCjBpWqCkGAqYPZuqaHAQ6CQqZyKmt9bpQfeCPpgQSAHsnWcoakwfrFf2zwbmUzwn3WNhDShxC",
  "key2": "2WWeTxoDLpf9SMN4MHbpLnufneMQQLP2xSaTAb2nZZmgDpGoc9LvaHnAjLaDdR3KHkcBym9oWkb9bYQ61X4uKUws",
  "key3": "N6osjgmb2cSwwz3BF17xwbeHFwZXyikHVEAnkxG9Z7gh7ta1K6M8MBzYghZ4VNrs7rPNwV8R8MuvBhuxJBMjjRT",
  "key4": "2joCbyY9vFmNveGGS7ppdMoxiqwTKqVYLEJozeXn1xVQsnspxRDLwEt9tmwahz7K98Bm1wQcZetm5LZV7mztQyBw",
  "key5": "4eLeviggWeGboWemJ62ESikNr3XB7KSjaU9SaJ7oH4uMSJUa7HN2dRVJWG9eb3x9m4W1kKKD2viBurBEXjcVz9y7",
  "key6": "3yxwqv4d2cXCooMh3fMC4VXsr4qqN7ZKC16SrNde1GfmnNNBit3zq5iF3xdp7KTMCMz3HJ17PrME57mKecCL7yrV",
  "key7": "26NeGra512WNLEKzPosYq1cveDrgyTEoEfmQZrnwpc8Ngtz53BMuJwQkp9FBKLSerH48RobFkXQ9zmYzBq7jPix3",
  "key8": "65eKAYTBXWo2GuFyNTnGfqhrkxLRzzp7CjhjdKgrtbn2GXVAEKZkMTb76rfsbjbXbMsurytE9PFJ9RM31tzhmFbR",
  "key9": "29A3xxQD3qWXK3YBMwWjaFWYFHJ3qE8kVfsYgraoj1Mx8x1KwMPQSszazthsKovk2EZLtvi8SYezsEUakHo6FX37",
  "key10": "25QgMoJZT8QPa95wvUvJzyXuAu7Kcb9WrYYonyGoh3umcV1GYC1aMHtG5AuMRLYQ5LE7Uc7CmCGyrCNyuBJcx77r",
  "key11": "3PEtCu32rwwc2SZs5AxgWk2L9YZwWB3L6x6Zhn9HZJggakH2DBM4Ci7NrFzufnzuK5sJyJfMWvYSzMhsv3LcsxHY",
  "key12": "2YYFsUbdVfHt3orzw5E5YAzvFQssmtQfLnPns6m45TqEK6zWJ5tScJVWCYM7CKXmDjrACdwGdcADSpnyHdHDzUTN",
  "key13": "46UyP8MX8j9bfPGP3QKCr7VQ2HPda1zYjQHb2mxPsv5aXiMZ42Z9bu5JqPmnRE4aiVcXwcyXrm5Eb3AWUFabiRoQ",
  "key14": "5g1hMMBAT4qe1AFaEUFRv9uFvDJoopLqtaUTYCmiei7EEEMSjY5RpzDwnrNFVqgWHMpGo56u3KF2F2Gn63qNAn65",
  "key15": "5EKMpG3JsAhnVPxeBCcLAXk3W6ArQ3Vga65N1neourDcfL6h2UbacLfq3hnA3BaXGYV759rePDuJvqfuiGaxgcUd",
  "key16": "9pn9so51yGMjsvzYEHLi5jweWUhmGpUHXxvSreogpK9tbUbSF9qS28fL4TUa835iE5RKmjwWG8W33y9XpXsYsXP",
  "key17": "NWBcwmGVAbwmn9wrxEuEKbVzfuXbLUNorLkduKLnwAj6k8PLezaSVHFh4N7HB8VYdjPKMznNteSEyqnQR59kQXg",
  "key18": "3gWirCsYYoVypUJRWQeERVNJMPpcixpm6hPSvkBBxLzK4t7g7e8GHR2wPGGUyUdZvSwmBYSdhyzHz4cw9smmMxnq",
  "key19": "3MCgahqFEeKXLX9vDBMbqt6fkBvKF1dth5hTyxG4BmUoSCEN722pAKd1gC9CALr5jA5KRJsRkAkVtLKFRDgncn9s",
  "key20": "2FXduS1nEDykMArs9DVqd3xBPVv1QtTM15xC3En3d9L73pGXLEsn25wpAMCZhjNhREADmHcvdhNqAV97kjQPV9Lq",
  "key21": "5sQxmi42eqjkmmNocku1rD4Agzj3wp1SrRDQpyApCb5tQ3nbUCANnXo3SoRVCPWNxKq7kfqEtfTsz8EkL5hontUq",
  "key22": "2mGRSvqnDWbKxd6NCgrLACFZkiwfCfLnnnwpxy62HXMZNDFYpjhMAYpC3jDgyrVWsaYmVVuzCkqZzKH5DFWfw6Xe",
  "key23": "YV6vNHjLxJaSDv9DUdKD83KR95F2VrhkxCFtF4v7e4Zip1LDP9YU1wkcSYzAPegTVqaPhbm5qft4AUmzCiW9r22",
  "key24": "42u2CGw6s3NRrH18ucMNQVEeWtF3NVoHgDeBg2rQ7xdLmcg1pWPcKLh32gLpVAitu8UUTiDHA5L2Hb4StEBHmPgE",
  "key25": "2qBLeNs4qgTeKcCRcCGmt7ptLaqXqAJgjhJhaHawxrzjqxM2wcuTypv3c9K9iwDqEediqNZj9RSrguiNuVruhZxT",
  "key26": "wyeoRHSoZiww6Rw7uwvcscbE54kqvqczBoiMqGA3VmvbrJWb3BNh2kfdrFuhHR34Ym23WAKCw4hPbQrbZSi2GqN",
  "key27": "4a5Ep5MbFh4mC7KzaHptUe2DupvusJWdjTSjbvT8DkXAkRkGVb3yRDKuShZacC9KvPuWxJw9fstSAjg4huTLDqMv",
  "key28": "wHPp95ruNZNk4infPWnGNBMFRbkvpC3463osip1m2HJN1fiuwsjy892kRxa3Yqu8tZE7FkYGaobYBs7Ynfb2cXk"
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

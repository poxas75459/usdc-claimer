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
    "64np5izW25Uc8HUHQvGUndsdvXYtx2aKYgE3E5XqB8ommvQbEWzjCJGHPS2WjoxNtzvdz2kkpPgM54whSPbLhbVK"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "2mfLbJ5zKqT8cUSr5Jk4BwyyLJUabW5CFkDjbF9idc4Znf37szM9RPryRPb58wYxEF4u96PkZaBX48ii52VgmwAo",
  "decoyKey1": "5ytDvLDwVxbw2h813G6TmUQd9Go1UGnqBF2YbVt8G1bTLBdRTDsyDLaWnP5wWJbRHmpsKns4gQn2ZG6Lhk1w4fqJ",
  "decoyKey2": "3t3dcSwVeKd8zDVRYSvNPpjoYnhTpq6FRaEnmCGHaFpZNNMoQXPFpGfVHzULMTCqbmbiw5Vm8c7niZ2bDEk4ZnDm",
  "decoyKey3": "3mRthy5AjTQDqXtjtGjdfoC7VxoeCJbwKZAmmrnwuQQMmBgBK1YFSiKcf2iV2rfi9nV9nGZGGCyxcXWfmFXsJPVx",
  "decoyKey4": "5npXWfejb4J9GMA6DRrp7g2USiWYUmFru2rYK93DVMqx3gTTZGWx1hxQfWqxJRcAJKLZh47Xy4cUwpEVCqy1DRRg",
  "decoyKey5": "3Nz8MzyGKVCkCMTCu67RGs3XGmUnjVPu9R2SCoHqvdsyutzpomfEhWdGAbU8ExRwKoztCrnmHw8zcfw823gCq4i3",
  "decoyKey6": "23yGmPHsRhPkeVyrbe3ETcmD8ctxyWzSzwPjV65dSPuCVDvJo7oGG2XUgG9FJAJYDcsEexEfT6APE4qEquNJ2Jjz",
  "decoyKey7": "3Ru3VGAUBj2ofzdzg66pRwbP2TPuaFXH9Usq8rGtGhgkZ2zD63PK7fJQxo2X4f5LaGSecjkyccHEoUpbDgy1BTmX",
  "decoyKey8": "nX59g1m4MfUHfLoyrHCEdCiU8QAQKJ1uPmgDDHxPDiynUnmhmGWcXkssgKUmgeuMCKsLfckU7u7MjjnSh5gDpQ3",
  "decoyKey9": "YBjfhotiJx84B8YYLvbeZCqAAVJtUzv3TS56VCJ7uYyGbjCpmABcPVTpwnbAv7oS9HLVABYeqRnMgWB6nhasVDD",
  "decoyKey10": "3Ba9iLdWbJye7npa8ES3QsFW8z2dM2BTfZNG3j7qteEhMjzsimejdxm9SC5EMMZskeSo7VxCBhfgqqFtwEX2HyZz",
  "decoyKey11": "4B1s7L4nUb9bpoAvGVnoUie8vCyKzagqExwUNyazTvREjooH8RaZsgBYdMGL3LA7qErsypag38QCdoeTbytiCACi",
  "decoyKey12": "2RAkSv7P2UrU9DaZgXRERsd172Pkq1NZw8gTkuKR8ikxo5K1FSRYJDt5BKDY4ta18B3LDecxGBtmwXXgWfKX9xPr",
  "decoyKey13": "2t8X8xrhoVcV14AaejqaRHG6JBMHhueDr4PqR1HKgPBHrEYmGhDAcgugsNK3b5GZffWzokxXi2qzan2x6cWDSZ4U",
  "decoyKey14": "4LnvW7UMguC5y2YEHAUMUVFRzSMeKT5McGmPo4cx9xoLKvj5D4xQd1D874xNN6U89WbBAqQ8dCcb7B5UxmEHqcXF",
  "decoyKey15": "u8dE32qeR9TV7aRHb9n4WCPeBmPPTGX1C1dUCLhnrMcMqfK2JYqrWzDyX3QVszpBMdZFmhBZE5rssDhjCgqpgjv",
  "decoyKey16": "5P38BMMUKbxF7WT4AxSEETjc6qmte1kDxFq3wX8fhs3CQFujc8txczoyWdurXkxUPXPhrBmidLnjCx3ZTSzzarWL",
  "decoyKey17": "4tgwN947ArzkbThE8gWorQjj9JDvjBd4H9VCbkYo2NVAc5RvHcXbCTqAs5NWDJsgwi9W4hF9R5GAbymE3NXskWL8",
  "decoyKey18": "2XEC7BQN7xio59WUFm7XvZ9FMHGeF2hs31m5vjLez9bQgPe25RaLiPu8dmoF4i6fJGdToKpn9BDguPqkwz5TwiE8",
  "decoyKey19": "3zk2RJAsu6vHfoFDznJbxhWqapez8qjRGsLMo8b6d1iCNaTXM4yzZWAbu3sZGW8JGF2aDsJ6rfJb4R88wcsYEGFv",
  "decoyKey20": "3Q6vu6mvhkmf49G3QjBCKmvwWM2GqED82Zzpwix48K6yznYzhGf9tSYDRxjpfKPf7uhex51ZMEuuRkbvHDfLtJ6D",
  "decoyKey21": "4KL2NugHAShDfmwLanUunyt7Qd85SiN2HAEkh71rmE5HYqBriWUfvc9o9V8XXSUGkWp6KGUZXmn9pMHFtBr76KpH",
  "decoyKey22": "3HHsPEViaQFBCnN3Yk5GeLe5EExsnwXhVdCo5KDqJwrbafc4phgCc4nCZNSTKKMi1dycfqmibYfyCjjmWdM5Ms8x",
  "decoyKey23": "2aPmnHvCyfL3bfrGNDEX7VfJgRCT4Gw9bk513WNSq4sXb7FHmxJdrSt5RnV95F4foChgkjKaVBCNgUmn9vH9udpV",
  "decoyKey24": "4vEprNgWn9x3rhFHHgYeUvPSMDQURUV7F2rCSV2Q52uEkySZcJ2TZ6omWp4s4AEF73CgF5BwpXGcypMNFttsnVX8",
  "decoyKey25": "2cwQp6J94M29T7joek2eVJBZDAMFtDHub9ep49PN3Lyntu3ivLRTLc4apoUWqja7Yg4TZP5PAyDNiEoQdRVRjtDj",
  "decoyKey26": "KeUbEUZKrCmHVGpyWMZAZ5cqPw5qA3xZqHW9ugVy16ucjv8aR6d92oUeF3gDftVduaYZaJ7MZJDg2yr48h44Y3v",
  "decoyKey27": "3omnNovMUn2exZpqhUYTAPfgKa1fhqvMZxgEb9VWLLpU9y3Hoq18YoQBPdvdbBcui3zVpHtVcwKF7FNy7EFEz3yk",
  "decoyKey28": "46hKBbeN1D84dty5LsmvfudyGJZM5A3mH7XSDwSGjUnBG7hq415LHSKrqUKnsJAhdast7CQcSFaJeG1UzRr3r5Ru",
  "decoyKey29": "7UU91mzjzgAGmFVH8rba7qgxj17hBZsrhHdqtu5CEzkxJ2LGHD4Tw3NdEXJezdsvq9sbLCvbjQWvnVLrVRhSC5C",
  "decoyKey30": "4A74vZYPSdgEmEBTmFSDbMuzQzVeUeAHuT33wytkckcyTjFzmnu9Eka8J4MYNqMUVJBtGyfHKQDJoR6En3Q7SWkZ",
  "decoyKey31": "5CrWYr4QZoQLxWbTdmDZNYAU7TZHNmX2RsKUkedyUF98KNUQJ7XKez2nboz6jz82EnqahfmNnKXTDGau7jzSS58",
  "decoyKey32": "3UzApPPMjQimXSYj3deqRHNrSk8toPxoRZ2iBMbJokFsw3A1UmD5Q4a351Q3uzsxkJP9d1wx4PbEztRjDWzmu7hg",
  "decoyKey33": "3tnLW56ymPhm5Px6VWzDPrV5F8pZUtqAXr7JYjps33Usks5hozdYWHkNFX3UTcXrvhySenANMqc1paMjtRk1MUkd",
  "decoyKey34": "3ebckhwdQECZwdeoqYVkN9NiQiNX5P1RCF8ruKSGd2z4kLwpaQk7uAWYd9enohaXHkP4dwxKaavc1KHDGjuwjEbi",
  "decoyKey35": "4VvgGq9Bq99DnKCNFsDH3jMbRrZQdE6CPxBUAFeJHbYDsKtBcDD6LWeSvRiuSu5pzpdGjAtCyeB9A9yd3vgiXPFQ",
  "decoyKey36": "3cABMkpMYS1fkV1PDNKhdYEXW43FAtrvSB1ENLeTQjqQosSaxp1vY1SXKnZnNnbhzPbc2UBQZNUJT5K2g354PE5A",
  "decoyKey37": "4b2GWf7LVvp2A89AdepjiWzKdczdkkZyzKy23KBehA3WjeMgxN5oBtgRfNJkHvSBaYurLmbQ6ixs5MBHknTFgKCh",
  "decoyKey38": "61RiW7W8xcnTEDHw3bB3Gcr1Y3h8WBweRG8m6uqMLnFqNBMdfWbEht9yocRyM7wHiM598Pd1A5B3vv2SgJMpY7xi",
  "decoyKey39": "66ccBxsJ21485aeVsn9wEeBxbNugXRaFzrdosX6pb9vd2Fv2JaqWh1BmkX5RxmquJQae5fwrzxGhxpm4wXdpzULX",
  "decoyKey40": "2up1bwch2zTquKdrNMkkttCGL8PpjSYsLL9fqj1gFw26s5TiXde2ca8FkAejLnGBiEQhuufYLRS5mbuSo82ZGtei",
  "decoyKey41": "5ZcVnnuP6ZjbaJcM7rjdHdLVSdcZLjK8jYqT4kghm2pmLty1FkYvY8gBdS4g8rpJvu1q1VzpRVgsabhtBoxVhk7w",
  "decoyKey42": "31kWXutyg1xRkHLfX948x9YTKYBcGbhE8K4H6PjegnKQ3BBKtz397LP8eZJFB3hqfrPAVvaH3vTUJ1U6Zf29wuS9",
  "decoyKey43": "cYr3i5xNhhnLnkaRyA8RfL5T6RaRjwziRhpQJYvNNx7ZNKz5Jm2VLqQ4d7NREvySJM7mK6VKm8s9WyfToeuDDnn",
  "decoyKey44": "41xu2qgSDy9AHTQwWesD6H3y5VZiZQxto3NAgtG13UqpNnfU3RCVC9zcSeARRySYUuyHdw5rGmnxBW6pEuY53B77"
};
// DECOY_KEYS_END
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
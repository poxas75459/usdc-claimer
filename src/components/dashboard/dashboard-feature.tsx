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
    "3oQrqBRcHjvbCK8vQMfZnKpFMupoqHdWGWnVRS48kAq9AogZdLY1hLB7dg93WCnFyVZpjS418N2SNE7rao7qs7ty"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35FaspErB64Rh3JtuF7h4XM1DkRPZXZqgjJ1q6f6bWVJjL1msXYUynyfjAWb7ayctZuQpBsjaJREHQMDayXEfkhP",
  "key1": "5M48ivUcU89pQ1f8KtuGnLTQ365mb2oCcNVcfKrT4kuEoyDqS2D9hF2b3yeEhPmNJdvqQKuVks7VwMngpgo7ho2P",
  "key2": "2kWSPGCWKzijuDGsRhynwNcZaYeyLEo76jYwK2pNq9n2kd5xpEv5NxTB57YXNXM3VXQ9j3i1P9SBchgFscdkPAEp",
  "key3": "5R6JeqjnpZZz75HjCFhLUhX1RE7ABw4SDAAykwPeahoykh23UY51gbdCX285sHVj2Jh7tw364wXBttJcunFLPwBH",
  "key4": "24y3pdALXDGbr61aQezmNCoQvxYaLFpBD2GYHFHVA28QtL1fqSdHd84nFMc981gLqsFNVNu2dmyK9RUgyFTfkgHC",
  "key5": "3vLGpk9maeei11Mh95wjwcZWzP6mTtwxgymSSQJMdVWHvu2DbUYSz8H6WzX3hXooxpbcRK7bJJNQcyayGLMQqfoP",
  "key6": "3gadgzwToPEmFVVCZbPQqGYS6M2g8vAZXwpaK4NGCJXBrakcovMJT5rB2PBU8b2X8dhLptc4bHURgdd3Y4ecpDhX",
  "key7": "446NM1nDS4U3Eajaugb2mcXNRvfbDED7eZQrg6Hfrav2rVJnm2CDJ8qqzMSbP4eeFMGwfevaYSiNGNNMtvfxrKCm",
  "key8": "3NZ82v4iS3eN8jDNPMtiZEspM22J24Pgi4taB34o8FM4VyvzquvNgeKXDgwdf2aLnk4i2Xf38wjgrc4b7Sei8K7n",
  "key9": "DLRE4arAFqgkUhY6bDHpfYdFKtsgW4UMrq3bTSTMipRDDAbsAzituUjxjUuAWNdQ53nz7YqK2PBW5f9m34xgwYC",
  "key10": "JHP6vfFFyp1tFZc5T5x6mVrD9cCuxX27ppfvLinguCwe69e9AB2wNwdfYqSMonBbnH8hg5NGX4yQh4aEaA53b23",
  "key11": "5KacsbeFGxAuXB551NGKGiTgKV8KqJthjFUNx6NgGcLAfc3YfF9fUsse7GZSgoqDWuMgi8JpMCcbpA7XuE7HAUrN",
  "key12": "64R8PGSiw79ied6bXKgLGkSQGFSA4KbUPwQzvxzCkWSM16NEGD1DkBZBmXsK2YHxLKHpYbnWDnhNZWisj7VJ9EJ2",
  "key13": "2eUk17KYq1HaLUmaWHdogGKkgnD5X5C3n7RmPfteuhDVMvfvKKUs9w3ufxNPqyv9eGqkoiHZvpewgRZspEqSvFyH",
  "key14": "4VUBEWTjX3QAqkz6hCmGpybiZ3K8vTmMa7FnnP9neiaM1w58pYJyzpV7AUJA8DjUhkdgwhg5Wy34HknF23CvhKgT",
  "key15": "5UjgZ34KTUuiqe5ZgTW27VKwb7y1B89P2CHvL5xpe2hVvvDsjtfWgugqsr4cvA23gesrJVwxGGUfYSh7CsYmfUnG",
  "key16": "3fj3cAeGkLdqij9Xa3djc6CXy97qNRuptMS16djy7PB6ZrD1vf1fkbLqwsgQXf1g3erjfU1ki1xQ5u7y7SoiZHYb",
  "key17": "4tcv2qXMr9rL5XYiDqGj7BnGhJDiG6FXwFVeAqC4Cp4jVFjfrotCTXWmRU31ZxnVb6UNvddXhBXC8thagqSnUWg",
  "key18": "3BTAboCL3YcdkwZBap5PEAJ8u1QmXYEix8BmUyEtkxeFaX2v4N7V9JHY2nYpx3Aws5TeoLV7hqn2RkTPEwYNfUEj",
  "key19": "4wxsfkUypcubYRQCDPpGvWz8V5sXtjebGFhPFqSCk57ESrZYYBSPfJajiyRWgJSHK9UwPiGuCi6AdiqouHduzo38",
  "key20": "LqEoEt4dNxxJiWW66kwsQEx9AtSvQAXPEE35e7JDLWNLquiqXHm6AXfY4soNahWqvyFb6MEdozyDduqgCUbQGdB",
  "key21": "3JjcKXXs6fbAHH32tKt6y3fgXyJdooo8Ct9kJd6FVA6Wdgy8sMY7VoZED8aDtybi2EbEfZuY1qb6oZnw4LV8RnbK",
  "key22": "2EhN3jm9HBCQT2oWFLaWVMTJ5YaMrDRyUtY8NpN8Qpew5HJbi9WSvQPFzb8vE95rBsMM1y7XicMEB6yjPEreDXR7",
  "key23": "NNXyWXicYxP3vGxeNc7RxZ6EdxhZ2MAGGYqEsMfQzzkHnJ4gG28UadRYgAVijWiwkYzBBPnkjiWbLn46fgquXsw",
  "key24": "4fvZLhYkjcoXZ9HMQ85UuLot2ozRjM75ZWSpYsTRmwQcCmuEAJBb1HGxZt8VJNk6mTFbpKq2qVpRQj9wq8962fwA",
  "key25": "5fbLXgj3mRNh3TqMMeiqqVtm8JB92P1TPpFHjhjo5umPzZhy5uAwjWE3ws4x9YCUCsfZtokDfU8goRdnvXqWheYH",
  "key26": "3PUvV4BKQD5NaHmudF6oEq5YgfTdzZDtctwvHtgBS9c5zE1DQbbTnR3jd4WjcfLMwiK7mBicmd6UXbk8VGr2Dc1g",
  "key27": "2wtvdH27KE6w7fc9CctTvdZnocAvMYuEFnHMiDyiw31eBeVvjKH9vz79c7xwyEpK2Ycyawz8E46BQEySVek4UWev",
  "key28": "5MrS6jkp2JPQrFrYCAabwx7rzxVdBSCsNq3kn4wQPBAcTNPmhQrcq44UPpyuto4BtCwRsrJPsESLcNehs9zrWsQM",
  "key29": "4cr1bqVcQU8TUrTNVWNn95GJtJqBdjqSYn9vdbQjbfnRmEB4NExfQtsXCnAPMCCj3x6aGETCrHB4BPKFtSEdfneN",
  "key30": "28UvM3BoarLGBwWQufuTs7bVFYopHaGo5LxMDURGf9YdmRGNSAoMASv1dRUXxHVLfSmk39xXXQ7Zahgg5FUzZPPL"
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

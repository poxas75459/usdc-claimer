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
    "2dozHfdDS6979cgPrj2yxGH48NZyUGvh2Rd5vhwmzCYwm5psz32bVknR4BnwGakxukUYVbN5H1mm2GbV7VA6ZZ1L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aYBn1eDdTQ6PpfkRNjg2D6bha1E5X4j87u1druzZBF957WtyzbTDGmnyc72Q6Jokn4KfaSL4RtcpodDd7EFsJsP",
  "key1": "2t4PDK6tuXtwYzScjZCU3sPMDhK29xqNxMpT46WhXCVmJsvuVSYKcBrLCdZV6QiH2Cyoqmevmcysk6b3NjQb1izi",
  "key2": "4dtkj7XNmuB8CWCvnf4mbDYCFou6E4ab6VFYdvB31ZW7Vqr8nEZEs81bwHRYPYQBaB2fAuL6zECD5bmwNvLUFYRf",
  "key3": "22iZoukGSrhjZftTKWodnfzrxRQnRV1GJtGkuU8AfScUdBTehAeoEZSwq3vv8SKSvH1Co6SjkQcHBZ3xNSmjYvLK",
  "key4": "38RV3LSLJFBkWodFvGPb3Ym5NWu7kDoMKmLWDRurcyRVLZFjeA6Z1cFHz232atwRya4CNPmLXPPTHhfy6uNVizMD",
  "key5": "4mosxpGJFJKckHiwZDS4H8gHQhkDs3nLTk3aUuZBnc2qGsJMV2cXC4rZZRqixjA4n7W94YhDdaUt1BXtwUqW6fXV",
  "key6": "5zHqMLpJpSP5Nw5kFWtmAvNW16JXgetbnApUHjNTt8BGq1m6GKdrUL33HphzA2FNJhS2SyxJ4YbSr9JddS3h6Pqo",
  "key7": "4PL8H5oZ8YewrqKM39ztoXXEQNnSMEeetsXsU6vTmi2nG8rxCtPzL9JWoXWHkPBM33HfXD7vetkjNNaWywR31GyA",
  "key8": "4t8bhUiSG9r9veKzYZkoNdfy8TQ1uRD4Ggvr6vMKd8kFQtjSoWrKsSL4tsNxCsdfmt2G3brdk2KxtuxgPLqzjTj",
  "key9": "5n8QoWYTekB3oCCR4XKe9sSDktDjMR1NykMoqbfXDsojKq89w7YHPxJp67obq2MYUkFFQ58MqUZEx6Hgb4EJKBEe",
  "key10": "3vc8Z4rJvhUMqWabhuh69AGQW3KQFubWFryBZwMyLj7T9jT6YHPYJu6sE1NbQ1Y4oiQuCipgBKFfDoRj2n7eyFRi",
  "key11": "2bJmxKwd8bwtHYpKM1NQGrXvJfaiHxMwP8h3ogX6Mtz2LDp2Hah9pHjthbv4ii3q2zS7xRwAdLEjVCCnU91bRc35",
  "key12": "md398UNnJes739k1Yf1VKyLb2qnSC3dMoLXRU6c499L8bTTck6nZMKS5o4WcJTNMhPcaBPr1qFEUV1Uvqd8ZQay",
  "key13": "4T1ddBF4p3pwP6mM79xvTX5uJ2cvXiyWqDmo7HosyKF6qSG26fqmdj9E9hEaRdHWsqV3Gnx2FJHZQU5NjfLdumvx",
  "key14": "3Tsofp73WwxYWebwSpe5DRt1thAjqUqdnvGWCm5T6rQiTmYhBg3xCvEKn9reHHBn4AVEvymcN2tpwh8Cx8Pjv1uq",
  "key15": "5xTcb2J2XB3XAYjhXE84TeYFQ3Qa27yxBjJX5XFpexY3oZ9ziuYQGqtUkj9LHdJGbPKLnjfLYf7PSDiW2NioJaUS",
  "key16": "4NjqogcrDDEyWRrjdgzAfvzMXez4txyvms94FxT4HmzGvr9MUUYaVsLZhL1CmMxWcqjsF1iVoFxH1dJdmTLz6i62",
  "key17": "3b8KsvtWJNGvNFZkVaYStrfhS8wPGHUj7YT4Z5Gj8v4rXEZrwSMiJRAmHX8nXN6eE91mwJfWDfoDpV1uxtoDCzu9",
  "key18": "2qDuTJbK5cuGnJdMNYjPwngppMUqJMBJ7oEcTzMLnnMdRH3q2GncmdruksYvvmPqmKP2Q6yyGBQTS5v6pqb67qqJ",
  "key19": "32EhPuZgNm7z4Vg5zFSgngUpUdhQZQXmPsYpg286jn37mzC1ccxhMCS5PzWia1gJfXsNBbKfHY9dV3iuCZXY3kR6",
  "key20": "4PghQ2PcqB9SB6KoPMeMgsv65KyXwa68LSQTjbsLPWoJnM4xArqt2isWMHxiEQGeUktoCwJvJjQSE7KzBcibP8Wa",
  "key21": "2oT9m9v5o7FHfLvGS2HeVvdKivt7PVLq48BdX4zneXas1Afov8DH62iwkHttpEmUg9wCBNPiCEcM2ghq7mPDrCMJ",
  "key22": "3QmFeCm5vNf8YGa1FKEu5325h7Q6199CGcsFADHK4B1e1Yp8W7E2CrKmVXGyUTxQZzmLmZtgEpXEMDcVp6JneTkh",
  "key23": "4US7A9br8Bet75nrHi4Z5XySia5CWtPdn7sVQ2kh536gzcKYZr473xJQiHQcaWUrkmvEcGroA9t9RvdCHvFNJJkM",
  "key24": "4vi5eKagx1q8EppHFR2aCWuA3nwyarxQYixaRkEqTh3DGg9CKG6P3NgCzTHXiK9Ywuu84rKpp5hyGN3dDVc5wp2"
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

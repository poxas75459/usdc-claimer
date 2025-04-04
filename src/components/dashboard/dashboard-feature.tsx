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
    "2qfuf7gmBeWYKY3sFa5SAaZpTf2WBFGVcZF21giyV3Qt8BReuHFvzVmVFYraZUE6Bj8cq7CWKBFnNQzhT8u6AbSV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UpCaqzhURDSyAqMWmRQN8zgAsEhNkeh4Kg8zxKQ2Cvna4zsJYpp6h5g3hmNvidkiS9bQ9LZkGaFqQTQSLgAPA1n",
  "key1": "4GyD2xPoFeeMhC3z9exKWoY788k5zsoXS5E4i8X9S63DPBZUPdoGU6dEvzTr3ooAgmvEBq1PUPifeyoCrVvens4v",
  "key2": "5Px4JYVwNy7oQFkzUPVgRhaVmqAv1NrB1geaPUwWQbQuRPGCjTqnJx5BT5ebjgq3Ni8fuRbdWYipBgpd5DApcEFv",
  "key3": "ZohyiZHcRYy9BfWuG2WUNTWeFgv1fq64agzjvS9sPif82Y59TRbVtJ1c789B5XRXrwgRxEq8537mPeiD3q33Tvo",
  "key4": "2Rv7RvGoUkrbxPngczkUS4EusGA1ph9i7jHqYieG1DQZGMtHzY6wgwBmBf41sK1Q31C1R6dgRaBgx3nmfCVykFxp",
  "key5": "56aoWETb3vH9iRfoSa6y3TKVM7RBQPj1weAYq8PmdQPLmihRq8pNhnLfkV3ZgZno2N4msu1Fz669eNUc4SkXxn9M",
  "key6": "4Ud6Ls4UEUuM8G3gUoY7HWgKkGSo6ykTAB6QK7WqUn3Z12s6h6p8syWWbYuYWuYqnFsTcswdCEtiStkMmRP4RKM3",
  "key7": "2pwsCoi2owhWw7XUMpGC3FEXYJf6ZFArSR3ryWNi9VTT8FoPaoG23HGbgMBWiLt3E6tmUcFYYeT8Uq2KGfXDrmpn",
  "key8": "gvaWtsRkY6M6wvV2193PynXx4cAaaBgNsNufdbyfsnENpHSqYk2fxAW3uJN4h8vzFe88sa1KL2PcmSW3RSmwSJ4",
  "key9": "2i1hrD4tP3MgrXDioJh9FKr2BKDmZ2kLNRcv7ZRwJ18g6bf2rRN37E7iFMRRSnttBC4u6ic4BWdppKpgpxDVzot1",
  "key10": "3d9Vp3YGffsCPheZQszK9cKtVxk52Xw7LHRS2U5UuhRogDvGwnEzr39Q8gT1rZFvYUjTFePi8B6aLpEegA6DMQu6",
  "key11": "45rtLsZqevZcvydNpvnqTzxDpBA8Q61nvyACcLPgiiQ9PJtNrquYn8jkY4UA21hhCSASD9cZntYZBhRWo6d36kA",
  "key12": "4afGBN8Ju2j9SLP5ETLsMupCmEuZVGPgrMC43WN4nAPdUrDm8m9h692i1AJLjvRj78BrJMbget2zkchcAfe3ujbp",
  "key13": "23G1eYk2sgvvi1yvmehgQm5SdLm59VV44r8ftAvGwkQjtrEvc6dCPxXY7Bs2Zc1CX2fiXfFpEhs9QUwCY3xQyuVe",
  "key14": "2Geb8HE2CaHRxRDxRNahGhM4EdKebDCZDZo4Ygdqhc2CGPtXfqJaffiLDx2bXojLAZr4yAzi1pYqfMn1Whg2zNWU",
  "key15": "5X8v1QABpZrzRWpvwARPmzUC85McTzFoF3WqfCdvGwP1jeuvSjiypaKnBFWu4wqmYkFDQdTBbTvRY3oSusXwBkpn",
  "key16": "2LoWYxyTdJTn9xbK6iRSoYxvq657Eoc2Y24LesqDCtGuFupwCehDUeHLVbGvu2VmBvzuchyGYmK8NGy7knrU3Hbx",
  "key17": "238Fm756dGeA75Cw64iDrWcxFfvmfMXc6eUsDtmoPav333bZXneep7VYHDY1sP89vZ7KQ8dp5Z6GZv12UY3o1pST",
  "key18": "2cUmqzuhvZjPtd1zZShjCnor3E4HyazFX1TbKVLiM7JPwQRshwHZR65x3CE6J5Jrwg8XXZym7n5JpU66FX43L6gj",
  "key19": "4wWT9niKDEmQfjGGtRKg922gzqxvgwe58mx2zeKJr44fm3LFS74Mcv8Ps9QAbYVnuLbcsHAveD8cLdrmitfev4cd",
  "key20": "3aj7TX754LZ62wB3F76wE8NztDfw2PNhT4mH3crQonmNQ8j4cag6UkAttzriG426scdSUuDdFP5c7ZPjTCs1NWQQ",
  "key21": "5dWPirhQwNEvuTiB24NdXs5NGvQcc9ZEjtzxGvYAhL8FKqPhs1DH4pQxA1Zmi6UDAHw13Sh9tVAUEZH4eAHG2qZ2",
  "key22": "FMaTsgaa26z2CgyHNNDTwZAao2WxXYPyBXpbgadn3Z2EfJqRRjYDRiV63qSnxTGQbHVvvb9BkQuxVxpEgiAJxbB",
  "key23": "3q8QJPWoLtBroMz6u2djWh2P1cjJn6Go4vFpehJSRwCwYuqy3XhtF2kST99iURHXNCQSofcACsuCd5Rga3nevb5K",
  "key24": "5DifXUQYXc73fEu9xvrpabND1gDHAaAJtRDsw9k6r5bg2c87uvdmcTbTtDNkcNcZhB2pex6pdercvtmNJypFraf1",
  "key25": "5FXBvtpoXHJeJUT8uMSh1CwgyQnG5BugKinvKzEFwbL5PFQRsiSa5n4cY6tU3JD1eNMLhAsbkd1mjhGp5RK8jpuQ",
  "key26": "22e95Wp5E8p2GA1btLZo8UdbXsZhk1UD79rUNgfng8SvjrjQGVgdppTyXvekAh4YSsTpbF3xQJVdVbqaknWvN5rF",
  "key27": "4aLsPcKPdKZ84i4D6c5Ko5nH5kKvHRTGeY1mpCBbdNBk7MoQxY55x44FvSLw6uJZ9LVdjfZrLfgU7Vo4EAih9yvS",
  "key28": "3gUickyq87kCEciPELgK3UyAJUEGLTRRohmryR2AVNQsXidRuCbak9eoZxBg8mvBU3JRgQXsqByLFY5eWPHAqPGx",
  "key29": "fY536BeJF9pXakaLxN4P4xH1YAbstFhhSuXt4vbxhGrVk7wNZoL5FEU1afrFck9PErMt212t8jUHC8BvT5Epeui",
  "key30": "4xMBbP4QtH9DRp9rUyN15iUHUuqq93nDVN73jQhm3QmaB88s8Log6wfNNLY8csgbJ3VnqH9ZFvYkzmCq5Les9CuG",
  "key31": "3kon4U9TCXFd4ac63y9NehK36opkHqJ3RNeBmbe3L5RZVTAQD5nKYUND5o7GyjfXeamtZdQU73iMZdfUc19TvGiE"
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

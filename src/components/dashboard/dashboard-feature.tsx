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
    "2ShQ66vVTLg1jixUPxXaWnvhLN6vfCX22u3KRVPsWRb3b9uS88Cu5GcvFAsygE9bzQwKzLkZFtur264EW7SZT4uU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RaPvEDjFmXb8cuT44ABRkpykjv9fv5DwXKyfLDFZQc3dU1A2G9b3PfQu67V4WnyhQb1DMNAq5mj3S37okDP8k56",
  "key1": "5gywkACxPn8nTR7twVGjiceGnhQqvCjiHpTWRaeptkYwoc2rWJYojR3LDBW1gCzJEdihM1XvqqDbADH27c1AnCSE",
  "key2": "3bMY3jdCCavwLDvXDP2St84MaGNX7Vw49gsCXGq32skgid7SV1UmEstqDL3AWimU5XNnX3vGc22YnGuSHyi9GzEE",
  "key3": "2mnNaUutyS4MNiRqtyBU4KNmHth8SchoM82VQvxrDz1WbhuGNnyg5VrK9ULUseTNMerqVtNGsGo2RrEwLLQPeqDH",
  "key4": "4x8VfyGNYnbxmnUGhVWMzmqace8wwvZwRNkheq1WEWNnreBbm9fKqB8A1armVvFH2QVLuKrPLeEznAmaC2DdzsoY",
  "key5": "7gNMEyni63BumDCA9dYxM1Cjq96goZk2osT1nXwFonXMEPS7Tgd2kJ9fMcJNuukJHBvFcBkehp7vfNvDedFt2Ye",
  "key6": "48nwmrRQcTmncCUQhnQZ2PeibseCvRypVtcpvPn5gC1SgtaiVU2sRdjnfJoYEsarXm3iwYfjKUZbE1E62YATRYtS",
  "key7": "4QNKcyAeC7XptRH8aao1rkvnoXw9B4zYL9An8sDfgogsWy5oyrrERy6xKYCHNRmN2GYkXcevmfwHN4x7pGhpBsis",
  "key8": "4LJHfJ7HqTyHLDN6xyZaQmyZjcUU3osgPgeyxuWZv1A4M9RwKPhtFJzBkcxWDH4ifd1RYHXgHTHqccq33fSdnBG",
  "key9": "E9GgUDDkGbRbMqZGFCoguSdUG96CBKtde8sfVzaXv4UXvFCatXEUHdeNCDLk74k24aMtJBt5fmQYhof54vNKHt8",
  "key10": "2wbMxs5DF3NqbeXFcdjQx6LjAW5DeSdtNMcRV5sQXfSkrCRcH7okaeoVUd4f58s4WvDN64Df55EyevcQAzxCarRY",
  "key11": "2kmfX4hQ35bPWB9xgn1P5ezmBs7Ae1FDsQ4rdEFgEoPiwr3yaxWPqRzhGaxST9ySTVv8wYipEsRdNmC5jLrsK4VT",
  "key12": "rGAFa3TkpnRVkZn99nWicmEhAhVZDrCtP9RfZFFTCTZjGMtP9nj75y1VkbsDDX1wcWo9qYnK6auh2sFS8yJJrtL",
  "key13": "2TcKLDBVtLufxcrGYDF7T4wDSrkTsN4Ny6EoBfhQ2qXuNASX5Tr76bkHCVN4divcRHQnatVaCM9bbCGqSCmi3x6U",
  "key14": "3Z1aSgPD7QZjxcdjxYZMboxrPdgXshMr7PzwwBz7XYaFeqLrVXZS8kt3GcEyNP41h2n1i4nFc2pyfJcrRs3pkABt",
  "key15": "3xp4gbskZoTGxwpUsjqZSRivhz6uS3yZfR46KyejbszuWsmPQBhfBoihFWgA3jbtCYzxK4aVvHCiufutXbHKfEbM",
  "key16": "5KVZom4GnVVnA947SVY4usCxE3gYqZtRfQzwDc5U9VSzTE2kfaXvKAyHnHLUFhWgm7eL8h7Zo1AGg73Ka9UMYDQG",
  "key17": "4N2yQweD92uA6XriXkUwU4gUDiVc5k1BLAGStepVQf4XcHq96gax6bha7HSA2FHU9JqZYJkK1TFmhoedMgm7oZ6G",
  "key18": "4LnS8g3K9pFsK2qBjEdP7srCN7gskq7dBah5PVP4ZPY72Zt3i1ULrXzMEB7AK1WzStPk8WGtKNc6BiSaN5MKnNAL",
  "key19": "5GAwgjbMPmvchZ4nSAxdeZeUXxTwu8YVPuDnPASTYYWAMQN6iTL6ZfXYeTBx82v3max1z4wsCAJuJxQapxdKumd5",
  "key20": "51Xtvto8f6v6yE8fAfBacP4toHui1jLCmdLcd6wNkWUQhHFAKNT3FxCF7eYDf5xKveJLCBj5mVUNVfD3DN7YuGVU",
  "key21": "2qVUkfMnH5nSofV7PjJvUMxaaRW5u1HymqDkYeEMh5cFX3KWFnM4LTkeimS8VM6HPoWvX1Jp4PKcNnoQ6KF4EeJT",
  "key22": "38MGzSPjqdbs7LhSddUUSuKTEC1CoGYr4KoQK6RDYkMPzm4Bx9T1UcJGBvdzbJagVG1QR4LkCio5y7v1FHXZQNn4",
  "key23": "2NkcTwSKbyy8KpaKU2VwpWNs7gdZpJY7hx5crkQNSXfrfYuC5xQPtDQkGuVDYECiSo7tpatM56vSKKDjE2CQR8QT",
  "key24": "4bULAFe2mNSPiDK7RzYXm71Nf6nfgdcXiZiRZNzr3ZUv4e2HCVtCNm9NUKjMLK5ynXUgJxdtUZ5ATidGRXTf7Q1Z",
  "key25": "2fUaGiVLEDrvYhHd97SEo4jXFhByDjqoAdWnTAK2Bka6A58VMSiPGU4oFQwRditQQThTHJHL1jgxTprL2NKMfr7a",
  "key26": "4ESfSg9YCfrof7qZQNHmdAibyB1WFYzMBSQQoA8TbNZnrPmNnHxf7yjF845RrQQdnM2VgFKhQACD9NnHQjpW91ys",
  "key27": "4DyQHcSXfrU4gcigzt5QEdeCGZTgLcXjwZEW8riH4Echpq8kyFnmrjun7FnGkH9iprC38bKMAVaR1JPFXUxbSPLT",
  "key28": "4ByKQzBT2Wh49ykwNfv58kFvcxKmgyi7PUMdMh6PghA6kVYfMUbBvpb9ndFqq6yLa9WtZpDUhmQfZhFTUasznVzi",
  "key29": "5bBMBC6mGiTZ27YuPNCqp1ukoLbur74esMNQhKURg9V58AbG8qB3Kb24omp1smTn8dnU4qLMCXTSo2xgG9rnsUN9",
  "key30": "3it6nBE3nsNNWUf1n4DwTurEwdwCsk1Ra5Ez8QwcpkCLMR4wM2PtyYiHpzi3JRku9BvcpZejZqjMEyfh3veXdS3Z",
  "key31": "4XJ7PKVseCUvn78oa43gNgmQ6oeYwFTPFS2xfpNsBeM1ejuje9UiqPtUwx9HJSVYQUeounWZPWs2jPcodv7BfydQ",
  "key32": "28bGLnicpnAr93VbnpvGxVusWhMu1n12e5NFkx2HWEJZpZU7SQjQMcav7KGUK9LfwnbsqUbmq9JRNwTj9ocjSbh6",
  "key33": "2Vh8yVXfoKELvYEA3p2LrxGTockjnpp3h3gQwF4q7WJ56LrZxZptyoD2j9dxGax9HLtGsRkpgdCvDZM9vRJvQVQP",
  "key34": "2qNChtNWJG4pp5VKXwSin2EMjJ8uV6ThF3skkP9xnJZusJHgVdg1QyibfK8UbYPrntPf3PnNR5hHvbPzEXcrvh6P",
  "key35": "62W7Mr76yrYdf2G5TceRnp33YQpHFjZozr3K9QheAwP1dfGCrVWSfZje4vqEpfuUJM7QP9bZ1Rpaq6SWL6PTUVmv",
  "key36": "51ysPiLxR3B7WSd9qcBoKy8vWJdEpEbx9Xj3BRX6HJPGGSPfF5nyG7M8JGJPjojYdeoMwNJV6JdBmQdQEBf1fR3d",
  "key37": "4YRrWx4XYvWvR3MSwzMuJ91Tn4GaUK1d6BnnGMEoPVciQZchtJVrsZwXYKHNVmFNjMJ93oUyuacF1PvoEEXk7uat",
  "key38": "3PN6YgQEgPH2d9GHYjHoqg82p4NHQyJFby7dsZ6y49jtSV2bFmdi3maaDxQezcFBMVbxcPEhDYToy3MCNn2W1AwB"
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

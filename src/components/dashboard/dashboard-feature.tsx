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
    "2u8WmhoxmQwp66aJxXKL1NpsPpKRFAbELUKBENR3N6Uy8HLGyqgLvJ7ySidA7RnuF3r5UF7w1cXnssLUot1rX5NE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7bJUf7NTD5MPa9oiVyDHGDFXuyHwZy2D3Fj4ysSQvfp3qiX3o7m39hK5DMmzf6HgdoVbhbdHrrpNGnAayZYKFmM",
  "key1": "33bTHfVJ1exf6YtBrRnSaaq1JgB1KGWAwEv29G2LAWQNgxHtefdnsRvFQmkzdGK4vckWf1enyTj5WSQYg59K4dRg",
  "key2": "3XxRsdZDDWmYGCSBr1AZ7w2y4gndkib2VT8M24tHE6Yu9UnuCtxkUs4B1t5YUx85bndtmJTa6AuBy4pbj5qjUTe7",
  "key3": "5KWaLGrSTpFbUQtYXrbsBKpjQ2JzZvj6naqJrXSGHvyyx612StrTf9NirKsad8mxgD2TUsmavy91i3EvxHAipcTD",
  "key4": "4r9hbDeM4wXJuP5EUt5vxTMvWq6fKH3D7rXFWPhnFJSWRAikPV5qLtAj691Ad3ZxmZiE2SFqcYX966v5rWHQ8Ank",
  "key5": "3fya8LWacCmFMcMrTZWFdE53CoTVs2fp22ecRNykZ6nfK7oM2t7f8w5Mm6JMjPi3G3ewFDhGqNjSHWD4ZSggqxHU",
  "key6": "4DSD7eCJdHEKBf4qmuH4vEA4cSJDR7npEZdbyeS4RN6XmHJPYL8PiH5gCoYuYwC842KVZn7ppERmYSzQuUVk22rC",
  "key7": "3btNZEC7JHQdybN3CJHuw395AsCbnENtQ1va5KYajuF4oMASZHp7F6bZucUmxYKvks2hkUHWvCYnhqd4SHWvgkmk",
  "key8": "P4bFdXDHkBbCUcfuMEdAcuG4NQ3ELzpeykfJAVUuMVyFPQMN6rE3iCi763giyvw9YtgBK4hUTC3MFWx1BYBrS9r",
  "key9": "5fky2jj4tMzmd8xbvgppxqb4pPnjXFavumYKAtN7hAzMHTQMXhi8vaGvutYBjpq7Qi3XCbWLgRd2yHVcsLHEXLCm",
  "key10": "3MqWfoZotYzZxUd7bvymqPHpJhvK7op7sUAAdqajYp6umLTPNitokgHjLaQx3LZ99BTXpo2R1fjeATBhoNvSATFN",
  "key11": "2Coo2pWMGgUqW9XRfAx5hPv7n3nZay4EhAyN36NZBj5KbmCMzgR936Po4frDVpwF6qq4uDLwE5mJrQZVrStk27cT",
  "key12": "4yvrUMcnwamXtqbiUoPgm3dDf9WzsixvNKqYu3gPxKhpZojsxmXcfs3mrYQeLi3HC6sprunQgYQnK4NAa2YciqxM",
  "key13": "4CN58agfbaxw9sDXFB6v2BjXtDpMQsxVBGbuBNyxJJg2CHQvh23LD1FiN6wymFEA3fReA4FfN8UynSdCtAzmjd6r",
  "key14": "4yyXUv1NGKvPT52rPSkQDVyjVHoFK2LfAzAPNx6oe9k1WSEiC6zDU611oTKPsdzjyfq2zNoieZRMUtKMD4Bwjehh",
  "key15": "4GPxzK5vAEGFtBiq6K6z2ZWSdSvj6kR6L1JwdN9itcnc7EK793nphHm6bbBGb5eT5N9N74xRgA5cngqKu6z5jGBM",
  "key16": "63NXSZkAe61NUaoDfKmhSFyJhkLsknMtjQ8BDXgHgyrdJLpBTxvoABMnPFA5Ha4crP238PysZZqTgfGwTn6suDNH",
  "key17": "2RY4nu7sGESaqnJnXVQqdLhQZ39okFgqpKhSEJWEdBK7UAoGmxHb2RCzfRJsu5oUwtPMMVwMq9ppkJj4K4kcWrS3",
  "key18": "28FWGr8afxfVYU1SSquCMMi6q5s2CdCgjAsGHgEKGcWy4uTDbdvMRAK7F59eY6PL3cKuAb4nxLP8pGBEA8og7QJp",
  "key19": "cN3y2MFLU452L2KHZaZ8dHH6bBFPygfZnPo6b8FCfbFfXmFkJyytPhsMPHBo3w2uayMLkUJUJQXAQ5Jwxf5Yo6J",
  "key20": "nKNZ617NyZctbZqvUhraK6W3LEjgyYiCPRRTMZJ3WzEr8ffazCUhxUeds5LX4Ui45D73AGa98sVQVSxwArrXCDV",
  "key21": "2MgfHzLkJbEubWfRFqkigUznLpaiFaZuAibuDKa1Ha8LPW6qYBECnnADWpQqBRvQX3iXrWjkK5o1DS38Jg74XD4z",
  "key22": "2TBEtaNDFvnhFv6Vupi3vP8Vk96ZDH68vZrAiEZzm3EhywNFVdpPW1KjNjNQR3bfjAFaaxFujXxUhU2gH2NPnP32",
  "key23": "4rvAN99T4s9BWFkKxDMfJBoy4HewPEbhS6koY8cvgRX1RqyXL9eZhgHGmEh4Qbk3Ae1X6YpiDPLfXhQrGYdwvaRr",
  "key24": "2VJ8Lo3oeJv4NNWbzJBpGa6jfAPaPDQvR1nxs8ojU1diLxgsmsJLHDYxgFgGboXrLRAjwjyF9dnFnGtckVANHcXz",
  "key25": "51v1852jwKajAFyCv9FHj2EBiedueHbFao195rQtRJyJL1XeNvavAmihJfgfaFLFvqApgjxNDeCgqNoJLLdhgpZh"
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

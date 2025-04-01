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
    "EAEyHcuxio4cV3H4vQCxRvkgrWZxt8XdhWBh1sas6iXck1veQcVf72pxDF5MN38xnkaztMoWCrtgg4gMasShbA2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ymLC41SEEKTaLMArHmgapy1kneeU9JMqt59TkfxscEFpUqTm3wujxLy2fb34UryaduMdidau3mpVzjgupUMuBh6",
  "key1": "4Vbikf4KjvnAPQLAYxids32KWWEj3dKyGvpcjXAaBdSu2V1Dx7QYdsDEMdHLR2KW4cZPpmsQihCAQwvjm9ATDftm",
  "key2": "3P92KWLURDdEBzQHxNZmhnqAVYnQiutayapauTbiC2pCvctgGuoqMMzwmZBaE2BcKcX1dMTnnshFXBonvViRVcb4",
  "key3": "3U3pYcqgAnRuFDBDnvbPhinLWxhnDjw8Gv6qjTeskXU4T8wNm73WdmRdbCuuEybvVJ7pmWuhZEJVj9ABvGeLQkLi",
  "key4": "2ysqKdyeTAT81pRbS7uLHKUE9e7CWTZcsY8r4oJQmxse9gmnWkSNov31PfrUYPq8XpuMjK86fbNBfLmiyL1XhgwK",
  "key5": "DDzZi73ohcD5twEWzPVRTbGZYRiBSzwujcnr4x6Le4uR1s8ufNQrgsuYSqgpHMVCwFCxTX1GMBQnt7d4AjJA5UZ",
  "key6": "3mYD4CxsfcH8fnHTSpnPdsmLZJxjK1hW3YFkz3N5rZsUsicUxWwoBXrcrn3Gj6P361axEEtKS8SkaxcVWszANFyc",
  "key7": "5Bd64TUFqKMEMqRkW5DVHeoQVfhidNxepq4APoyXsyBbSqL8VpXGbqdGVirmfhpd2rN6DFwNNNnh7nxQkqg8b3e7",
  "key8": "4PLhcwWYngp7d7ewEgLo8fD42TZLfNkvdCm8XhqJH3SnajrvosgZ3tsufzeyCiDbLerVR5AR376DVoyrvJnw6xes",
  "key9": "3baf1sCVuipL3xRA6QDzEixYEG8xuEfouFfvPids48E9tqbwGvK2B2jBwmvfzxJ5Jqp7CqpGLdqdrVxkMnNA1Mxr",
  "key10": "21pTbqjWG3MvYpWKUVG8P6o1zBENPY8cyxG3Q87kbqMtzXPR3RapA5jBDApZLaT16RjugnMrXJ9ZKWiu8TYVsHVE",
  "key11": "2f4Pg7A1FNEafK1om6tWE89Sb6xM5XAXJd1CZgmUKm2ynkuH6mRLMtpQGezH6UwSCeFLY5t98MxtammG1gqCZMZ4",
  "key12": "2CQJM4PB5dTL4b8Ui4kckgTvJTpMf38KPxnjgTXhF8JvoeBnZWDyzD1kpYwSaevpgphgV3d8jYcV91L5HePp8etu",
  "key13": "2GjPWHutKCWV9QnfM5Cky4BEbuvp4M1ne417VpHVk13LWp9Qv5MMKYw7RZs7FzWQJtmBwNFAKsa9W1f1un5vqSBk",
  "key14": "3Xvipss3aoWiciPAB1Z1eq8ZRmFHPPBAqeCxSMrf73bL9m91bLCUeE45xeKSKRKJ1J7J2XXCuz6aBpdsvhBLLun",
  "key15": "5Qm1yTx8Adev7g7wW93B7hGZkQ9wS1de3vrSabgshbxTDUKLq3Qj8UtniEAQYJQSYgfz2PfrxU5TcZC7vLnuWX8m",
  "key16": "npeMEsF1CKyMoZev5S28aZp4PCGsPgCch83YUYCrHi6DzFUSEhKPpSYKvvtV18Nyh5vzeZK3iFxbwZmRGarZsBe",
  "key17": "Kxpd34qGeK1w1WPoHdVEvGnJCGcfB6NBe72FMCBRJrjJKZopMc7bkt6bWJYsA8KmasEZMP9TiMhyh8KyqxCCuMd",
  "key18": "29gDLU1naZDAgsbyP5eE4ZRh54TbQr5pRSvQiBsamRZ5h3XNgeUnaKAq6bhbJoi6cqvKf9CsgrmmCDTCWv3gtpzv",
  "key19": "3dexGJHqz3yD9We4taM6meeM8xwx5iszg6XU4AdeiC9r7XRLFfjcpxkkqTRYMx3ZHPiKawc6iQrRJLVgjne9WbwE",
  "key20": "4PcBJoPCRkW9PfGCeMtLxVzvr2ehLKxo4dCASh7y1rSWGmucb2zZJ6raZNuMHB6aGRAJT7jfpgDUHBYWXuGguK7Y",
  "key21": "31PRbGdvx91BaDzkoxuASYQhj5d7mEzhqnjWMC4RhrQRaCJskWKJbUA4d4AL8PVceE1v2jQBP6x277AdGeQ5spUW",
  "key22": "5Gj7TBdhpCzLr5rw7wKFy8VGoVTZn1euwaKazd7Mppz49KTPzAA6jcUWSCEALbcwsiKrP2YGcb2NTX8ndpnezVZC",
  "key23": "58teQbWowkfETBhT9ffHPnDcDy3GhgV28Z6Hbfis8JgGNkPL2BELT63owqTLSjEHSTucwHpfb2DRwEVssy25Y8qn",
  "key24": "3Gz91H9a5dM3txsTNXC2U7h6QY9w6yTgE7cG5qdS8ajQzNsSPse5ReuVgBzqtH3GbJaJD11SNCuYy39BFvJjRhVf"
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

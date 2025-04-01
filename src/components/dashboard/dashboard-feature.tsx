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
    "3dhKeWHp7zRvn1GjwjxMmmGeaGvQDxvq6oibgEx4E6hU8Es5ssujXgGe5uQgVcJ9iszcYuj5ofv71tvYNzA1oxxK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A4teouU7yxSSPTi87wYxiXhNaVwjqDWXWG6U5JMobMwSMFBuNVpqJp7dUnLuNaMFe5u9utxZeDUoUzVYEP67SWB",
  "key1": "24JCWuDQ3fQynbEvbBStPybG45C78TFH1sh85gaUawcoHFVcDrwy8EmL7J4hEJV8Cn2uSh6F8Z7bjvdqh7mmbMrm",
  "key2": "59CjknrDqjuZcfUwF8LPe313GtUjq8EKdqeZhwsSDtbXUVknbJLMk9Zg8jiMHAVWFxVHiNST4khCMGpYi5gisD8h",
  "key3": "27Y3utpq9Lzc7kaWtMmshg9p9bQXeVZJwn4LWzb4pHSBt8u1MjuDg4Vwv2i8L7azDNjohwHfCxLvm7QP2DBrsqDr",
  "key4": "3YyAn5Cf53mXm5b78voAfyvyY68x6VxybCibdK8KX69pUM8xGiqSaxPQBz4Q59TurGkMCY6vhTSPLFZvVyvjHg8x",
  "key5": "4SizCoNXXEqxwRjfaRVd5GJtg32goiqTthZoayPynxBhdZ9tytwRqeueFzNA3GPKzSZ23jYhvwX1RuuDi25RkFQk",
  "key6": "4MyuCN5VgrEPNkmRmiQdex4eMcLY2zY9x43A2dB3gtg9Yc8QRxjTT2faNkr2MhEGLFmMYoVHdsMk4nRuVNzAAwMv",
  "key7": "gxwgfWticmnF5N9pM6YXABAZb5khjZKFJD3N1cin8HJZBdhpeVkuTXrCraYLpYKLctch19dGQiinncipeZ2FUfh",
  "key8": "2dht3QFdfajJn3zyt34EfdGuQDLXPCzrkqHiaUEFm2tAvPRvGqvmHBDsKEmh8Pbxjqi8a6uvKxqgM1fvYH3vbbkj",
  "key9": "3Z2A5sr6nimreQaKE5TWTVHcwoerEYKaQKKM1CsRerSQVMbVjyTswgvKJZHHPBEL59zah9e8FUWLYe1Hkd3T1YE7",
  "key10": "3YYHZCo9LYzFfuhbM8mfpNrxms56xW9NsQxFKwAnWz9vo7cpjyPAfSh74VHqji8qen89mtnNge2oGeBioEUnK25n",
  "key11": "5h9kTBq4BMoHy6wAET8MGwztpXAAfhdDNA2iVvFwvxN3u34gaQ8oASyFsPLiuyVoFSCrR4SB5mvSJzS7Zt5W37Wi",
  "key12": "p6EfakFauR7Y7K3EBoSpXkzMzBbhsx9j34cfkfikox28FTDpJ41T5nz4Xi9XV51bVhFPxC2nTPwoosrKripanaL",
  "key13": "3zq5Cp6PCQzt9BjcYucUnPHKhuRfQKVUDgY8aHkKK9mzrbte8rHx4R3Vn95TPkKtK1pSD2B5GBFX3wkWjTYqPTGd",
  "key14": "3uhDo221iZRx2AGGBwq8ySwD6oc4XN13JT2r5A7am8vrntPeRactq54vwjwPRKmd9q7BAGDWK5AC3Y4TaD2p1po1",
  "key15": "3PinjY92bsEDyUccKXSEXG1GTXjCeGupjhTXFFZNtS3vCzKsUTDs6oVJAbceUY5xahW31zPrQ5RpUgPrVT4AisGa",
  "key16": "2uqnd7A4jJeESgdmQRpqQa7nQ6e25VXtLkSzwRuaaZi2w3zrURmTpcWDwxRxp4uQJyXxS4Hvrrr8ud29bkExAmcy",
  "key17": "3jiTKZtTpjyzgLPVyo9gdKwFvQp3MQKr9rnQ9Hghkn6p8ePgq7bEhLAWyaaWaa2asTUS9nrLvFZzyxJ4d6oVhQ3L",
  "key18": "3eNBWbYpQKdHMDn9fr4H9wx33hA1jzmYUUJSajZtcCbPGYNgcs3VMtwrFpkEtXqjZqu6rVCF6Vi43tC3NXe9KEJL",
  "key19": "UHZJRdjUWixYDNEQg3wPRmsTEuLJbjYi8PgvnercqAx6PovWU3LqopmupfNxvpqsh8HVCCxM8LwFBN7W9H4BNPa",
  "key20": "4Ufg2eseUmXAcAHt35Jzezi7TxNippYSChQDdxJtxUKuuS8mTG2iW7z8ssguwh6ra3BQz63G4QMw2BrWCkHT5sLJ",
  "key21": "SkwzjRL71sMXpLkSXp4w8zrFAV223vYfuc9FSmtib3DxSEUxwEs94jpWnkuTTGHB9rKzSiHJ8hiZ89Dp3Agp5Fy",
  "key22": "3qmXDpBJAy9DpbygsCg6e8nyxqihRLgV2vWAgfnBBXdmjv4TCtMfFT6RR9KDyYHGfAmMKJiavUCcKJxZ6XT85MpA",
  "key23": "61SdEuyVE5TbpKuwWm6NWfNrLGGmxnYmR9weKi4RNXcmk6HSQTi5RSWshDJWDJfHFU9gRfe4VD4fgzbReSBd1iCg",
  "key24": "4pmgdrCeM6XJrYFvLpRjvf4mmJ1LZX5cd4FgLRgnQZaC6jwT3mddeKZYMxNnymsq4tJgoKjvnwvq4TTc8fLwHpQj",
  "key25": "5wtsq5FGF4fJKQVARFX3vZffUDdfPC2SEZeYe2pVpj7TXXZ6vrJQQVKAN1QCk5qLtuvG6o2UWF2E3Utqd2RtUGmr",
  "key26": "5G6CsXipT2NsQERLSmfj7iZpmFCnsGPfyPgVjE8xmhskB8xPZPgz9rWTh5yqvWyKGgfLF4VUc1pCmjvksmZA1LDd",
  "key27": "3X4XFW5EnnZTiWJGz5WrzAcF5g2dzA3A6YYNrsvqTTHWunbPNsBaWyXxDEtZyG9fMiUcUVEy4FdU9xoywYXy835L",
  "key28": "55QtzruCK6hAFgYX1i8tsGQDryMs2wdWvjKNUqxmLvaK8g91wWeSMijxg3tsXm6KYQTqtfAnbR2gnkQtr5RwtUD2",
  "key29": "3ReLSEBRYsH6qg5FrZhoyRoXL9w1afbeSP7XY6w4evFbPyXWuoig2ue4pMkfmnkvumQMzMA3M6xKzzHGC3q5BMrp",
  "key30": "5pfdaEhZko6fRMHAhArSPjd92wMAGHiBzwhQvc8TJGFKQ9b8FEnqRUiQjuvDqicJpF1Jou9rPB2nbbvXZeSHLBVA",
  "key31": "5oxPVhpc8iBSLoJAsjjXkC7hzPy9VXmR8M1Zf4Nnv4wWRnXMwN4oyE1L3mVo4e5PDFtQ3MPS33oSx8GHz3oofZuW",
  "key32": "5uHcDgnkxDbGKXxcVrow16NRcvoRdo6xfooovmQdLTy3CqQ8Y6m9foERSrMM7EYHBbpWSKHLfAeBWeibxt1fX9g8",
  "key33": "2CGJmo3m6U59XfCYhu3U4qL32rV5VpBNrN6onNMshZxgzVo8Mg5xQL2D9cgDtKsP98k8RLfDzLZGmLrNPVYwUT71"
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

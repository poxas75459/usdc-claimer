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
    "4Hc2xf8TsQuuS7BZDwYKfZdkWdhv9uWrobRsN4aj8FvwpW3GJVtPUi8qKRLqdDQke6DMq8LR2AYD2M9ssgk3BgD8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9xrz1yVABCYmYSkUvqjg81FfjwVbLyHVt2LyHqFCiW94N1LphaBjX8Eq57nRgibdxEmS4jy4c6yqa3XD5z7WAuA",
  "key1": "4n1eBPGdYH1QdpWrg11ekGjXUAs1FcVPQDFiW64ymCsSj5Zp8sLnK9Ud9kwrCW4TLeQNQHQeRfnK7VV9mmmFvcxJ",
  "key2": "4o4QErA6SewjXxPByrXqG4zoKrdVAYnSftuN7XaQ1GRL9Qiw7yMTGyX3HFPnUkekrhKSPzLX48jv3m49yfXKXXE6",
  "key3": "5CZpKnt9unKjGatStDcaywNrLXpXDWdAGtTFqiWmzguiwqzW7HT1onB47haoW9yohgHnkSaBZRUTuQCqzf6g1tZ8",
  "key4": "9b54TPTnMeL17dtbhp9nZaYpTozRojmFHQzbSMNFuzLpCggAH7Py436AyBubKj6pM3rQvLDDun3z2mBs2kXGJyk",
  "key5": "2rXjtnqm8M2ujpJpBZYVrFxcf7YEpxh8RbEWJiW6LUKqwd4tC8P2bRG1z593rmqmvep9BKva34M9P7ySX6UkCLby",
  "key6": "5uzYq6AkdDKemRH5fNYWsgSdowLgMsvrCchA9vnwY1KdfGKjNYct1DNmw1o3AbVwn3gaX3spJqUimemumXeyz1rc",
  "key7": "4n21b1FmZFt8yWwrV9T8Rg9c8vUAXy1Hn1sfFz2ACt8LcmD44R28oZFsZE5XTpcjVrizd9cN7DYnSPfAFc9w9dUM",
  "key8": "5ggTzJaY38N9uAzbPjMCEGBKWChknNzzcRf364uggACLdG2We8L4Bg6EGCLxoXnn91dDczUun1HrAsGfc4ojHqNQ",
  "key9": "qt7gJpSXz3Eoo6vD6sj89XKXFZckFTpq4WuYJSgtXFdy7CJ7QXWwheewUQAkB9fbuTpPXxdDtwGxfCsBvTRfPUR",
  "key10": "r4j422UmGk6KokfHttJbTH4Hwsf8Bi5yMrWvDqrHMrzPG9ECAWyhQUNmnR9shqm14y4t1FGdJ6LvxmcpXsjkfM6",
  "key11": "27tXMBZbHw9BLNMNyy9eeBQyGT3L3QPNYBuyhXpSW42YRDhPsxA91XRmQevs2EciBoHweDDMGWLDzMPFwv6xTrkV",
  "key12": "bxP6XT7XFWp3mcPVWDAkk37phR8ThifYJb3FW2pbBvRJGjPgFL5auJNFiSFAvsjA6G3LC5gsZGQ2zqnmF17fLyX",
  "key13": "3p9ZYgwBpn78uzrNrSvtUBzCUtofsbAHCcxgvNj3Ryp3V2wJcghAdopMtrskuM9B8RKkVuCYutrPSHoU3RaNVqDh",
  "key14": "4W7o6J4ri44DrTfYmV6N2W8Q1MtqG8mBna1xsdN6jRk3WmBK7fqtuP8mnSE7djzdLM7N4Dxg7UMqTnnH9xU4egcR",
  "key15": "SeY7MfRKUys7vND8ibqUpbsgziHamXoLUQPbBuobVDRhRdSzhWfvhpe9Vr8Lgz1SKb6dSLKFDbHZF5mhPPxSrtd",
  "key16": "47dJUdyArR4iqBKm4yqvefo1zDEAHa5MkUXe3jGRaJQ7dzdCTT9bPcbnPQeWfa461CjsNG1ay5Vr4Z4M7mx2Fy2s",
  "key17": "pScG912KHDnS1UgdGWyYyWfSsCbfNgYVAuXrwTKFB72Te5bFop1WQSiGm5f4VR4bMqBYvXrYx6bvrnZyHwy9pk2",
  "key18": "38vdJ3GVVrjNh9Z3Aq9UXiWJrMRCMiieZj3GsctwgAMMRPnvgXdx2dWRNXrEaXCC2Hpd6TfrDkGwygdPGG6QCvPp",
  "key19": "4LJGS4MqhkLDhBznoguaq31ZTKXVinpwbHBeJaKanAjcV3gfKVKfiuefQb4TGfNUJkprgvPbsbiJ6xMixgEXpPiJ",
  "key20": "3ZJHvropbAVRT8JABNJ8DHoBfTZ8LJ6kXDPKtCp6VCbpLX7RA6ALrtnweB7U16Vju9BQWMo7NSuAmaG1NnFzqsmX",
  "key21": "2o6yjd88JcT2TQx8FBcM3NkoX8sKetH31we5qG46orLmiXSAy6zHkHG9t26fq123E5JPzBM3CsuGF28SHJZAsECV",
  "key22": "45suWkX74VdMFvzKBTPrAzR8cW9z6WMUCHMdf2KxEuPtwVwWaDbk1YdnG7UADE1Pf8N8p26gxbipxgo3ZYvgkurn",
  "key23": "4rrjLM5tzhUhdkvgR6zq3by4Yuavq2Ty3aU2cNZCApNxBXZKFTq5Z16HUMfwiBXJS7NdHapc4M2sEL8j3iL5jshi",
  "key24": "y2VAcScMQCZVaJBNZn9dAWKaZvCeb2sV1ZbggiXFMiqDk4QHvsYpnujCEQaKyt8Dhi9xzm9rwJLvsvG7whXKh38",
  "key25": "2AsSoicDy6GwpF6tkLSPj2jCUu2AWBAA2HQXcsWRfBSxSX5GHUwhHYAHq2pRmyp4D2fFASLzpexmFT2Kc1TeKXj4",
  "key26": "5RUaT2gNbusjAw9zJF6buiUKqLxFFhafFvUduAqJc3p1H4kkGEJTeGokGAtkuHvhe3SmgCSGwEdvderef2SAX8nH",
  "key27": "3DgssdAbV5t1spoxnL5fgh6qDsXSmYQ3ebdzmTLT78sLSKbYdwmMveppM9in8L7Dvp1yteNjjFzgdQTS4GmBTGRv",
  "key28": "4LoceL2XioPN9Y5fTBzXx58B7WpuvcyLTPsrqCBmk6Yg6SiovFGFPEY3TE9XCzmveXzo8QE4misQYZxd7rqvxBkE",
  "key29": "4NReRMUc56cnxfvLKw9aqecYkL4KkPVitpvTE9fMUKEyAT4TyCUDtGGQxwTTKsXwhoNVNDSf216vaqDow9xmxpaS",
  "key30": "2y4aoperDcfuonPTUKqaCFWyiAU6kRZ2N1tovtUy5kgSmoULgEmrY3JzUAKtqUrWNwVNfiVhi6U3Hg81eErLaNpj",
  "key31": "2Nk62iwW5qvxCKkcY8pdcE5CkSJ8hi23JMaxPspVdQ6f2RQyeeBEQrreGveqSiJVpTZWzMxxQpdWZv4EgSBjsXW2",
  "key32": "26CE9YRrCRZmw4oWFMo3aSGJQaL9VKGGENpnRds6EhfXVe4DisyAQKm689XAAGBQGrp1CN4yV8SRyFA5xPHt78K7",
  "key33": "579W7UMvQe86CS7mr6xtXxa8hrU4ELM6AfheYnsToZBnyPEsj2bwqUuKABTNqqnf4CvuBuBRPTf6gt7WQQP3BziC",
  "key34": "21emDcfvydDBcZ2FCCqRUrgx8LXJT26mesKYKidVRidbjYFbD8nPSCBk6Q4vqzbfbcBWqGsf1E81A1V8btkT7FGL",
  "key35": "5egJxn4wQKZ9mA8kxdt3bVeUxcRKLmtQwHt8NS6mNcrSHmPnLb4BAZVXroYvRtXXuaZyvh22GjphHHkQAmQRX1Hg",
  "key36": "3BNQD3KTLTwbdJvvuptU9V3VZ2LmQ6WrC85b8bsqaFUS7CzCAoBhGVfZqgkNGb9uRFB6L7MVNu7nL13LU7GpmEXo",
  "key37": "3Nti8tUye18KF2BtHQxaowcJapHVNSQp4bkbpDTpv431vMj75dX7BgMkkwEyQjNHxC18CAaLaqRabk4Ngn6Gzijs",
  "key38": "4ZM2Y7xQw599ZeDjmusUXx8hbxH76VCqQq8nAkf5B7VtwyJkGv92korfFHiu63oBjichQaToSWpE1Nc1dLghVBUi",
  "key39": "oDjnNK3htsm5j2Ajz1Nbnp7rq2rhCDkVPEdw4SPMyB5y3d9HJ82VHb68m4DE5oADDYhnehsj9rua59Am3eyrZNo",
  "key40": "2RqCxf3bihVRD1gUuXR8zburFyZrfNq6C3m4bXSe8PrugDibyywWDoYewHHTSN6GsUAyQ3t2GcqwZR7RiNPa1mUJ",
  "key41": "CVoB1Y5uajwbcsQENnRpZSEBeMD3tdasx5mqaemdfeSom1wR9SeRhvE51k5KowLMxjcWpVauTGM7m9Znj8jiQsR",
  "key42": "BXFpyRGY737K6Mqo8XNbWEXHd3ZHQCY6RthBsvNgWA8fTKWSv3YnJqTbpiMVLAXcn1mimicTj3Kfy2weXRT88AZ",
  "key43": "4kjj6izQnNjio7Xn9QXv7xnczL5J5cdVPbhULukVRbDFsZeyo8o653imUMriAfzE1DgPzsRKaMxafMi2pQ3KrbXJ"
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

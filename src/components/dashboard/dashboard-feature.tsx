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
    "2oxwmVWmPHPUZ8eRSNv5SZNJaFz3qgE5PGojZsrXahYxo12izXWA5c1ro5unRHKWZCTWDPnBCZiXG6kGQBmiYJqM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ngWB4thc6dUmnPRoi7CNd3zqMdEa92E4gYMRTKLD5ug8FNkMruVwATwZh2oqto4yKwPKcr8yDk1ATyRPxfRAh6",
  "key1": "2sMpvJL4zxQsdPfo4WFRmqeqmTz21UeaJ5LJn65FGdkBbqWkHeCyfhJRpt9q3pduLuRcKNpFez6gxhvS6UzvDwbr",
  "key2": "5CpXs7W99eoZoZEjeJh7S9B65TSqnX3fmgwuRXB1CB2CKVUY6RRbGXLXywAvo16FwNfQztaoHxzggQDRPyDdXEcr",
  "key3": "3jbGw34Tb73nSbH3dYztdAJxHaU26ZcARsaN44MHNRHX6kPmDGN1e6EbTZM2USnuGzBy2jEYxiwQ9bQhMcFwvA1s",
  "key4": "3Zd1aJs9BrnM7cZAMym3bZXC7tUVSLj2SXemNiYuxq3JticuiariieAjJmUBFPj3PPNx17haNJsUEAbtq28bkuDK",
  "key5": "3TwY54ddN3LVYkUtsu93JPiKKwMq8CVu8QwLMoGd6LHe1GutVDYqG5Q1h5R8k8WizL1f81UmQScMdrWKi33nL4ML",
  "key6": "5haxbsJ1HkPauUtcGih72J6tdAP9ixQA1FhKAutmJQQH3y7DFHQUQhT6tLHMtbP5QghwTXmYpUDn7jJUUTyQ1Q19",
  "key7": "3dVV3Mt8pMb4wxGSeyeH37jLk9Xi1oF6LqYNSH3ur29jMJ3Us5tmEJrTbjaHfc7yHUYd7HVNVKQqeRzadc5ZpHN4",
  "key8": "it6uDp16BvZ89qt2xBtVt8iSwiVud7Hq2C3koUFGbsqf5PDJR98x4J37zApmUdWsQTP9JMBCWmQs8BDPrTBCV8a",
  "key9": "3HUyrQCXe1wMNBTMYbdHVHsGS9uBmjgFfiZiKvAe8hjfAbqYHsawsUPMywWBtbwUWrzmvM5Ua3gXpRck54q34c2r",
  "key10": "MmmbwCou988YsbGth3QKA7gVbzX7XkZy9FQR7rC7BFFwoyMkLHY6HdyTwYCC6s9cSJfKYdcykMZKfD3wf5uXMfP",
  "key11": "5RUtggMfh5YVrd6zPVcBR18eLB8jAKpvnLv7rP33iKF5d4WuZt27qpiMqCTvEBNSdtzjC5dj6LDv6n3ZMfLVfRqd",
  "key12": "3oDLi6fc35WyvRpHJWNTYTKVcqzU78xKhLJCkh8s9NQuuv9uLqQGvwgLxg5kHMWQrc3B1Sk9RShvZZdkRKJ42NFx",
  "key13": "4dPMyMyUjg8fMsir2tiTjvJyDzYx9D4jyRGPLu1KRQoCX3QEm1ERDS3LQ7bRPPTvBd1FqxEsYWSeUYLsZz4f5NPf",
  "key14": "3Kg7hLuhspvFV232EWVZQb3Eto7dinnghtA7Z65XmuL61WLDwstauJmjvLwircSps8uT67dkzPSsSak4GtrYSsCz",
  "key15": "mkRvNbB5bFFkNHoV8NZ3qx6Px1xXNtNeMEhoQyNFGsGr3qeYAZUohrBU2ckqnRK95cnCF9ZW8cNtjCnJBVEHqtG",
  "key16": "owvvkYvo8pC9MGPqvCadzABQfQHejHVAPKDA9LgjMwBbuG8qATR1aqC8jsExMA8Bn7s6ZJic2FyVBfJyb1vhctJ",
  "key17": "4ViGKf3tivuYGZjYZV8LWBGPEZWq9mE6mT67ZenU6SsUskf4DTrZdgunHEJfYRF1yq7vQjyjqTLKATqu8A5zBTMk",
  "key18": "55nuDFYTytyKF6qkL4ZHLyvzS7vYxzGRrsVjTrxaBbiKCa3BkQEcbEiGLBxZYUYLHwZcm46KF3sRV5a6p4mpR3J8",
  "key19": "zJL1uqXss2vGxsFCTn2i7HnVnE5pDFAq21mBxdutz39D9TdGEvwfX6z5VjKwKDVaC5DPcuCQ9SyESQochUCp72d",
  "key20": "5T3pjhwx4PCKsh7mg3QWCYV9krAbYS8NyQmzEb2vX3shsHVTgrxY2cXetG9miuuFoG2LSSTFBnxfnhoM63VAd9KR",
  "key21": "2SNN8AF4hxFeRsEGzk4U4chs26BECNWxLkLKCLgzwrdRKhJhn3nXEbHfDVCCmv9rLadLW7mYnkfk9RbxroSA6gU1",
  "key22": "3pCwADjtVaEwuNAyRnNbp5oKYp7j248aQBfhKQQQrp6E6YgSyNngN5ViNiyBte9SLRScK4qAwsiDdzA8Xz44g51c",
  "key23": "2USWy72BK6vV4h1SmsMRSYS9qXh98EuMnveKmniQG29vnUHxr22NrVr9y2UKemPfhNUEymuEQ6VhSZVwSwy9jAYn",
  "key24": "28HUudBbg68sVHZDSdiFojG7d9Ar4YmXXWHMdBtYpQjBpvSMMJKsrikiaBfscs5XDoW3znQ4WMNxnkQDQHb2Kjpo",
  "key25": "64ZeySSS2Eb4PwpPJZ9RZ2VK8gDya6wobNaK4qASmvBZY3LNZzHtZXphnuRyrYYdgDC1YrCShg3LyocLdHUhVhZs",
  "key26": "21fvvtH2jUXCdRQwqeZtcLMqtvoW9Vtu9bA5cURws7HG38MWT4HvtaGJaD6MaMiXxx5M2gVRH78dqPQht3dJxjy1",
  "key27": "64vDxkz2YUWoFXPQ5TnSjGs7ZBBJuVrz2xhZ4vd9CHJiekjPgTe8vENoxbjLd67PZyB3jqaz6TsHA6JyNgR7hB7T",
  "key28": "4mwndxz6qV4Vf4KjoPY4EUbUdcioboog6NqkKhcH9RdNsXbg85P4zGbA5wMY7Vz1qbzYxB7TY1hn1N6pWduncbCG",
  "key29": "3ieaoJCVqLBv8Ku8PS57CbUYW6htrqqTpCwbzuT2ukrGG3gq1gtcENV8R195wNh3maG88MWmZ2JXMA8GGLLMa91S",
  "key30": "DiuUA4bwmnbNQA9p6ubDyAs7HioKdBmqbQnRU9acVBs6yp4SoYGcXqCWAuP4coFFqaKVMYAm3HFGN2syfyfYXRu",
  "key31": "aQF7DxVxdffragz5QjUh6qnq5tV5z9iayVij6fNkzZgZAa1LZisQQ2UobgfpXvNedee3DfJK37QSpBZA1Fbqjrb",
  "key32": "4fZ5Kvm9jw1DvsFcR4irAKfKX1PjT9tFNrLVvTv4WK1aMKibbJGgLHkaCBrHfS7LS7E7xKfdNJxYTwtYxNTJKZwV",
  "key33": "3CZtdLENEhPjELez4Ho1BX6K2w6rcov87cDWPmUSb9m26pK9oh3nDeub2qTMK4w7YVyjbvVUernRY6PBra1jsjT4",
  "key34": "4XHFPu3DV5dPF3m4jhKxZE294pTzdfNzTYL1kgEHbdM8zTEuhEpNDPtMpzwwX8Y4wQ2PHokzq8wk92TX138Kj3J1",
  "key35": "5nDsMTD5qWj71v7ATm8mn87sx2pm6ENeP6dgyf4yxAB8Jpw1ZLeaqh6Qm3QaXP4rwJKDs2TupptVCZk8sb8Rq7Qu",
  "key36": "Cg9aaWsGEapLBvRLszVuEXi8Pnmmu3eE1WTD9xFuN5Rifp2nn5DqwSdbJudX4vpkUBhp2hNd9v262U3D9tiHoG5",
  "key37": "3T8oaAREQUSxAzuiqUwuoFLmSePSdLeM91QNU6Vxik1rsJ6jLCsWzRpURyUXEtwNSBYRTZYjatRw8WMCGuPT38NE",
  "key38": "2NAv53ZGoioB11neALMFm37VuL3fXUF8Xa76QpfKdiUELaJVe2YVktpmL95Dg71RaeVTEBi7gPPQEn8vyKa3WBQz",
  "key39": "61PP5obbyhgfYtdUHfTPWk4o1Gb5V1KFe9VXB6kuS1WURSD6Tkxz3QFR3zt7uKWxBDqJkL5f1vnwnRrtwyHjraGF",
  "key40": "4Tew9ZhWFQWWsTXuKBn9w37mhncdGNpE1s5WnMaDb11498z6zeK9nVziq5mWuY4XZt92cKei3MCSxPBQ32XJgNyX",
  "key41": "39TRFr5BStniM8wD6HioW2iXLfH3SnzZEa6R29ysCzyzV7mPiwLxyeVbiCrsVfvsvB66rDcK3MWPsGx2U42nxpDp",
  "key42": "2XNhhaDf5oVBiXjKfh65J742Zhnugt3TXJ8dA8c1DVbShVW1CaWVs28u65ojvH1wCoCPvq2hmQ4v2ojnA8jtVn1x",
  "key43": "HJZQzogzd9semjeWyixSTbVib7LmXtHL5GRYr6S3aHKMgFX5Zt36vo7YJ4aURbU1TN6goNs2NQKQUd5KDVB5z5i",
  "key44": "22Fej84LgpQkxS2A413uM6bYT2ptpgG9Vx23xFoDm945kx4hC1TYFtojUzuhPpUXKCurqehLhjzrf2tTKvHFM1Q9",
  "key45": "kSSSrBvrCLkc4RYCQxQSNR1SXrPs9tzYvWN7Tn6dLAFw3855SV88nusyo3Ba1kpyiF8X7BiM8SZ84Mmjbsw7tdy",
  "key46": "4gHsz46B25d1A6XWrvYpzJUuWY9wqUhTcBhZzGsJd9fBrE9oDem3brnL5MQ1DSiE3Z5z4jSJ2CLEvoLsqxDtUDB1"
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

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
    "2VPcuFSHKg8d5XGY5kuutZY1SeGL63F6dV1YQJHnFDbck263JUsYavuCbRykn9WWt2RUv6MnyfUA4rcz9eWuFwqJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fF8hAR4fFhCDixtotwc9Bxj6bbsmHrW2hBWoQmVZVAWYWzoXuG8UaA14yozfeUjANHaGdEUk4WKnwatsSCDbpPR",
  "key1": "dfNWuGTH9fsi1jfMUg2QWDNkTD9XfQFUnaKZsHxewdQfqxtv1PR6nmNo2rRhvhNq7cK2ShBv8cSCJgySfKEVyzb",
  "key2": "4DRZSmN5JKYDFyLjoxmyGAvL92KvkkzQ88bdWt7ozfUrr6hZxNUiHR1Sq8VkDLEQCNakJxj6Ba6ZrycUaK8euLiE",
  "key3": "3xycfGYJgVFekYrkmJPNL968k7xzzSU3gkzzgUqhAju1iFPBUppTBveHfwZeQY5MMvCxVPQ5hP8ePjks68SMq9PZ",
  "key4": "43gXJcr5272wcxQHh68YiK1SHp5bi3742xwfcHe8UfEZ3NQGacSPvZVp4fEJ1R9mgE1MrjifUn2egViQ66RnrrFy",
  "key5": "3q8V3Jws14dCcUE8f6XStpci5xfKcb6sMguRsocnqLBD1W2qetTGkKX5XfkKeLNucht6BySZmUX2ruCJ6vF3frPW",
  "key6": "2uSdVDRy24vMWtZhg8aRiCdiqSbEB8fSMTnfEv8hG7sWwHYDSHF1ojyDRfErFQrJzvNei3G7hDvRqAyEm8ZJtyVh",
  "key7": "aUwxHVJs4vELXCfC4pXuU4sT5tZkuKwia4QAy3PFq9J8uAff7ctC8V1SUPi5mUDbRFe4Ka8ABZ3AJNoRGCajttM",
  "key8": "5CSPN6MpnPRZLNt73atjwAtXFP38bhhosX8Fbrq6KNNvwCNN7g1kVoAiTFqJ5Gt7eg5JWGkjnKbKHM4Et4Uz1VyU",
  "key9": "2a2oPCHBkibMaMMhNgsu5EL2fszrCCXTGiaPBBQC8jeoDFSBduudoUzwrhu3hCL7Yv5a9P37ZxTbBoycV6aTQ2ad",
  "key10": "4ALYhemKHdwXmSzduy5zcocUuXCa9zPiGbwFxvQFp5szWB46NEu2xMpX26g1pnGEVvMVc9BKNTYUKUhq6jUpSwbB",
  "key11": "3XhGE4QzNEn3BTj9C2PQFAj6XYW3XsnCmG9wrDCSq9f5aihfNHiLutY3eNPLTwkQjACF3cSVQyehZzSsir2Nw6uj",
  "key12": "BcedVZn2mCZQhLC82du61FFejMj8uyPd1kQVxUVcyjscaxCYi5T9jg8prLz9KMm9aE8ZWWaY3g5xb1vjWJJ3646",
  "key13": "37L32sotnmkvAcEx88eV38e6NG9dRq8zos1yQoKpdNowb54FmPhVjGJt3d6K19bANtwqby4DWs2yVxAubGrVfAfq",
  "key14": "3jehahqbZbypTbUvH5Aa41rR62DqhEgFQbTiqqWZ6D4KgfDTKsbSejAbFqF6x52Caaz2Mtw3GMqRwRQx5fnS5CY3",
  "key15": "2kC2UsPaqsiBAXm5dDGx4WwcJN6AzLpHZb2FdtDjdvvGKoiadGWq4mWZwd5jXt6ZBYmGhLBam17mxASXKqzBRCQx",
  "key16": "63HyRz8bFxWZfQcn4L26VXSJhaw2sA4VsANSHz4WB35DG4mrezvYwKQYyoVWEd2BAZKvsLq8ujbPHAGLnj32Zi5m",
  "key17": "56Xr2pMXNv2F5gQj33VVSTt46CiRRZDc4GYJ1mSzAz874uY3eLXn5fL5mnv7MTKfAM9YcUGJnk4Ty8k1dENzX68R",
  "key18": "4eUZ3DLLBdpNhH3m98ewHn7NNBLcGEzqSwr3PuEtTa6SX4uKHWB9M9oN34gXfq7eEHQ4LqWEpbnWr69KoiJeMeCn",
  "key19": "63BFjpr6sBnD8DwnRu3VWPFuPpEFz7TLdNeQNgQHuUzLPsTFPYSbJf5EmNUJFyfZCi7rjFJKPiLm2zBNhH6ViHrD",
  "key20": "3JbS6uXuSwghEVAiAxKskuPCzdYmAHoFZo3G5gZLawcCKpCEHwnVKgCLQoT9CRxu1pDNrQa47VEa8Qf6p9piBk8M",
  "key21": "3HwXXkxrVsuu5YXdRMGyFQEcdvPSfpJ3XSR3WAisyWDo3wyFfhyyot31a2sUGs8wnBs9kDscu3fKVbpHP9HUq21u",
  "key22": "2cJzxJSGiXDc9Q1fyy58YDLKweLMHLLgTXofvpe5sL1omGfQjxsm7krRWMjRU9tMDfbYBPPirStgUmn8JSfrMdZX",
  "key23": "63eJokxT3rumiAznu2EeYYUydjyWSSYvRhHKGauc5xXSDoPND8fHTj8L6fD5bAKcqoqaj5CZYPfTt7UqqrQMZcff",
  "key24": "2hzCprYNmewo73ZabGq77shqSYgbLE2NgCUhXSPWS1brgyUArrVbmbACFCwi8vNTwRHML3WcV35vkPB9etJuHzQN",
  "key25": "5y1L738SjWuU7R2ygmQ4zn87jUYFB9e8ymbm1LeXqyHGqGEB5XizZRP7DbR9vaAeTuNaxGypidLKmFaijmA8JrcP",
  "key26": "su3HQ3wpj5An7wPDVtuBEp2BATLb5HUyJcTFG2nSPfmSxEN9jAYHhhGkAtsvU7fz1QdefzvuVjRtTNMBbT6mNBt",
  "key27": "2AHsU4nZXh3RrbxtMRTUywfJWWLJ2HJcqbxbhpoY9zUX3PFZxwyn8QLDL1odwmPqe4PLFCYAYPWnjwUGNNQjQgKZ",
  "key28": "2PVqD39sdMqS6at1Sy7XLpdvy7XUsnHHCRZ2QnAtvctUbaqQ3EGLGjktxBTeaP4pyPoCUXWWNVKzpShh2tt9xXwb",
  "key29": "6ayGaGpjDtKFBSxqo1z6sbStQLYV74u4K115grDfC4PfewxGWPoSnEFeokwotSA7RGz766eW43BpSGTp2tjuLZU",
  "key30": "3oykwipzpqo5kFAMfoERGddfeze12bvK3WQg1CSLfjmHZxcUfhE5QpFEN7ZxpPqxhR52jmzNRWEByMcKeATbT3hN",
  "key31": "3XAiBSeSVccuE3fHQ5MNS5yiBcvYu8SCkPdsuupQQYUEdd618XC3QjDwLpVbPGMH1w7upuPodSS4UP32o9P7RKUb",
  "key32": "kua8SpKjvGbHmSohVEzYyzxTjhaxReV2qZcZjj9hs6r6GDYHrEN2qeXgSNHHxi72ApR5oU1CTep9N7GoVQBthre",
  "key33": "4fvNeruSh3S7WFVgvMDycYzkcQaJw89KDMnGrcoCXc1eCS3v1t2p6t1W9MNLPukFei5YxvzfnRx8z8PeBwH1YCzt",
  "key34": "qjVWxCM8ZYPTgVJYeoro1hQ7BtRkzkNVsj3FY6bGMzNV8mEoMhtpneiKUcovZXMe2w3hddHAmix8DNMM3J3UKaj",
  "key35": "35YpnZSW3Yka9YH7TYNBe4pfRwCz7HKVeytd1yYem5YEbf7LkXouUV2TTYsYdLowyaX1ogdDXeZgb3oghnkCMMyz"
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

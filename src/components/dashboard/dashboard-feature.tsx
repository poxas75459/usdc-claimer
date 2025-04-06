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
    "3RtJwtVCW19HSbeTXnLgSMk44opZEewf9My5LSj7k78UdfeXeb5SsRnjm5vWvkzWLyGKKDA6GhBnBQSeEgzRnrYF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SbZyEdJYVAXnnu34U5e5PE8jpLwEUpU4FFpWvSFXktAZvyo9ayXvM34RFFeEPGL6qqRexhrPTrXMoKxj4AYpZZq",
  "key1": "5YMmWs3X5FqtVAWGcgryuabZXFDs3hvaSjUwVysojUF4UzpCpo5j7JCQrcsRxeSo5WU9x1qsAnMqoCNheJVCrjbY",
  "key2": "2QcKFzU4EJyZ2tPfWGKHmAxBbFi9ZYm7WbH4hmbcUR4Pk3AesE9R6WZJP2rqwkzH4RmfJ5vhXRLrcRoZ4pXFA2mH",
  "key3": "5KJxiKvo1JschzQpfsrdiLEkbg5KnKav1J15CF5t3B4sUQQQaFFtDyv3H8QTpnsyvu26wSHA4GkAwahEhMf7NwqS",
  "key4": "WgTCbbeckHmy3e5FXSXt1iUqufbhUuodZb2NWTxZUzgyRZXmZTW74wj2ZcfKJAntfod4A8trWL4mS5kfuWsM2sx",
  "key5": "5DHxdEZ9itw4yL7BQPFJNkUfKKhBSsiCD1ncjKUHQX1jVyNe7xVB3CBrRfijJ67aYLHF8w9arE9471E6sdLFDn3B",
  "key6": "3zijpA41cwdizSRBer5ZFeHathk12GHJT9CRqvYX4ufZweKHDPFx2orpfbyFFBd5W2NLSJVb8JZ2kS67H4W4zqWn",
  "key7": "4rKPoAsdAVWeKztSwV1ubVPnsiLtbWRUmMzeuPyWixBRg3jxEKCCJvH3mqjmf4ARDvnnhzT7G4WLpshXemPbgQ3Y",
  "key8": "3oKfmAq8qMc1At4jGBLVxqckGhvZrtGV8LZCuutULVheuUYZTkf4dWae8zWzbQTb4KBdWQnWexyTGAwnYJcmsRKw",
  "key9": "4NkN6ahuSDQVHnuw27TFSvZFa3cXrANiPzD4eupjKSWrTyBL7qBiQNKHCbgRk2AK1vqdhi7s2Ws2hzuP1eEcGx28",
  "key10": "5PMnUuq8D8X2miWeuikJA4gtzJG6Qhk2kwuUfXKeHn2U1fVBTo2iHYX3r3n3MTcS2zGAvYAEnU3iZ4QfpzUUkgqR",
  "key11": "2vxjqiowe3s8yQqzUEbKE3AT4zPVkevh4UW12VbbjMVZk2VLZhg57vkHyjBjPVEzqBHwqEh1Y3LyCv6VbesXPcPw",
  "key12": "46Tc5PYFX2f5vn2gpuHnBuPP8jJjWdxCA6FaoNisTJeNzppPUN3yACDS7iUh68De2WoN3K17E39MsJtzoQ5p3imm",
  "key13": "cdBxaUCVN2WrjT3n2ikNjaZZbW5XkwmjHiFfrS8t2V7J4hqcP1PA2XtzUvztmpuM83gb7rpE2uxqdfK5uxGdozv",
  "key14": "2DPG3fC9xtuP1jbK2NmntLm6PwoFHKoLCXoiuxS6RC8BCnUjZRwCBGtVHu2RafTnAze6HUHYH9YQo1wGkvuZ8Dkt",
  "key15": "5jWSukv8ahNJsB43qqxWkrttP3m2o6HYDQ8XpJrKCVEEAtkJ1ETmKPkA5LpHu5WxQGcRBf2WqivJHmWwwGrJUXi3",
  "key16": "5g9aAMgmBQoc8AMnqbTPuCg1t1E86gUGieMQaZqXbi7EKUWBXxucyQS4rE48JaaDeQ7a5qMAeu1hQEHT179E3MCe",
  "key17": "37Cf56bTzxmg78FK9Xs1ze2bFhLXCYRfd7w3GrTsysqr5QDCHkPqGKh6iHmwXNrky3R7B3nUwjw637oqkHLTysDG",
  "key18": "3Us5kQsubsNo5wgF4rfaTEp8VET2MHXUWJdNx2G3LBywxkEBCvx6cmrdeLx2VExPNAc2EtBsHiGxvaCoTuidHsm1",
  "key19": "64JTJUCQxT52ZDEJKgoU44GA5FW8MTrHFTi2SLG85kvX5fmGp9X9bs9odVXz5hPu2QbVZgxAbuneubVFnF75YSKs",
  "key20": "2EH9HAR8C82wHZ3V94iLKdNhKcg7RbVLqqukGbosc1SDZsCuUGamHZWJX4vFs9PCoCdQTeW7BWpNGQPEyExBzR6F",
  "key21": "4mkNCyDQJTQHMfMNw7BDCJcxWDTbL89pgEP6yLcWzjWogKZGW8cakFHTL24KFkUuwTyrdatkgGcurdQ1hT1yY6Xp",
  "key22": "2FMnvUht9bpXxuEiPDGMjp6Y3qfXpCguM8vfaQPAspFip16ZGBAb5t84S47AyHNFxD8aHjbXyuigAZB2yso2vDb4",
  "key23": "5zQgQYG1nAnxVk9vo3zTneDzoCbtgAYteeTnmbueRHTYGft3cAWDdeKJKXVyh1E8t9deBioSmxSCj6hz4DdmB5fJ",
  "key24": "yHd7sYJquv2enQhm81YeQf7aybz7HbQhSmg1cJeDG1g8He8BVsV4zMdfibzAFrsA1UePLboQrFoF4Pe1EsQmTC6",
  "key25": "3Z9HHZzS5qERS2r7GQ7i6nik3MnBd8s5nnhFVvyxFppaqqBHy2rYnFjme6dWgqAEjoo4kzUGTcSXwy2DZPqikvpp",
  "key26": "g5cQkhRmJMcdYBR91vLmHCPuXFCGubT5rWRqR5bZpToPHS4n9GRtPs3BSNaZxq65CvJkzqFXa64DkLEZWjR7QtC",
  "key27": "4q2eR3q4NHdMYCtPd8feFwqEPbQG2V6x4NSbU9cfsgjxUopnP1q6n4P7M5jNAK9REa5U4f63vnGCUfE4Mf37EZQK",
  "key28": "27S1bbEkyvbYxB5dXb27Sd7m9qjyyRX8jmnYLk8rYT9jTMdmkMRTWDjA5Ui9cCaNtvjfvsuceMwBg2QWzD2dfWT8",
  "key29": "5icBejfQfn5UsDbVzBzE2HKvJBq8PAybJufxm4nA67tc4Qg3MbASoWvCwhB5eFWAYm3DcumVUvwuMKn4Jbnrsjpa",
  "key30": "3iyVgVEWfM1txerahLF2BJgCbjhfDbzoKW55DJTjqiBZzwtHwLPo4ksZpV1vRrVgavTFcS1bqJrYAWEehEkeVHuM",
  "key31": "4xrzVupQGfPpE63sHyEC6Zu5AyXNiVkZejyrLbQPjiJigrAbiBNAiMKATEXChreZF5Lwkr4w1J9AZHMcLkuVYr1e",
  "key32": "2m7WHahWoo1J1RAhaRG7BWuFuBB8bYibUYWm6deC46ksdqxgdmX2hFuKgvMf6dD5G6VTg2GKUjPp8XQEtwJw9g6P",
  "key33": "4C4r1ZQnedCPXuMCQsAs6nde2bkzdM9kJUhZvSghJs2v4BLFXVBQaFAgj3mH7afV94J6AYG7LxfCzZTPzH9t7umk",
  "key34": "ceoDuibZPZWSxdHR2FQ7rSrk5waJ6nmJHv2EG25gwdTjKAEPU4d9ite9mUDt1D8HHusf4i4YWhX5s5Lrco2gAnH",
  "key35": "T6qz3dRLonE5PDmyKxqLv7gJ5xobV6rxFKLCuxTHs5UJCTS1hpbnYfKpC3mUsvoai2qVzJXW9cCfTYarS8Cg4NC",
  "key36": "kgFgNMx2WQBBkkVKeipaMgvKca1QGKxT16MLCdPMZnbYVgutwqaFJ847csSqFEGtkvurkZPtWjPZMvaKqebGRtP",
  "key37": "NezRTML6sDJnrH554vB8U5gKa1w9x2ZuhKUdTJmQrYvbn3UMyMgkoQyojQez17VfEzJvX5uNV3jmdF946yCzvyu",
  "key38": "4BRLSzpWAVzYSmPioxcWuYvtBZa18Moqxbi1nHozExh8GBtazZmmwCwgVhBaudk115P8Y6KmRchNQWdC2mgqmCSM",
  "key39": "5vDB6gR1MxSfwpXmrnGVLCX23CsvP2ddCwtz1L7Q3YMmVtEunL8ouGAgVDN2QJMqSeGt2uqE2V5yabY4HFqKBf3T",
  "key40": "5SaxhjpWeVvjzfQBd5dgjXDSSrzfeANpP4NVzWzRikWjJnbUDTWrnST8tNU5XVSaXRkjjB7tJiXiEoLGkam6UFDX",
  "key41": "49boMAXmHg3om1kCXLZV5nx7ZRQ76NaXqSoLPRHVLT8z4oAcYPfD5HzjxRrTfSV6R4AZkkT2D28YfwRHVxzrk87N",
  "key42": "4p5zPBLLtdAN2viWAyKNMFmwo4uveQjnNgGrrMRmQzeaxpBJKpi5kgPeAzm7uJfXHkx9xXQJ32wXYMEa9CU1DPwK",
  "key43": "58zSQC7a6cvY3kbWxAEGbSqqXpkb2Y8MZ5gKdTXiUm32c4djjju3CijPDVNvVhsFYjiiuhq4ZedVoVJwKYWVdwah",
  "key44": "3CicGyk8bFtyztX2QyXYA6rtYmmgh9pVLgKfEaP2WfexBeTGmpWLfecSLNScupyYNCdhnXPX2wxt29DuJxMcvJzL",
  "key45": "5fm6gcqttfXgT2A19ka9iTgEtkED9sPRioTfSJ5kHRSa9c9qPKS5PQSjkvB4RomEipjzFG7b3nbA6on4oNdPE2B6"
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

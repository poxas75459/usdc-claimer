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
    "3dQYpvQYG4xnFaLFyAmUmAVdLkfLupwFmpwB7tCuv9i5ufL32nsi7hbR2rgwYVzsnSDw4EJJ9Zhc9EqtEPwAg5rm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51JULN9fBT2LA1zPyR2tvPPE3W7iX2qhrGnpBHLnJNFbDLFz4pGpWdkjKKEw2uwNF3Dt128mWy31h8YU6sXUHnXV",
  "key1": "4fMjg6MSpKjgq2AqSfTSyd2agfr3dKc6mtpLQTK594svsczCb9vR5inQqxkLp1zPrvmN3RdYq9RXUr6aXT86tXxz",
  "key2": "kYL1qsCqZ88shybDuKytrRC4YpbyHEVdyQDuF8o2RPKPhQudFHi1EPtypmcXxdnDWxtJHBAKZrNZqXuWb3AaCNN",
  "key3": "2SwB3NLhQCxyaVVs3A4LfpKUvs8DepNsJxLEyi4Sw2QZs9wtVzPdXgLFph1dv36meLQMkndhutYKAFswbUDYPbdU",
  "key4": "2A9usgfpgP9gCKb6LdwhpDkcGZznsym7MMaeCkDeKFq41SLtVgZvyweStKcfhyA6e22oMTyVdk6B2pmsHBWzNJ5M",
  "key5": "3CMuVWbqS3rA2NFeEdFz5kgp8eRUFp2cTE7xoQN6G2TYr7UZZ53HzKew4zUzfoFYQgJx9VG5QDBpJWCHPw7eo21f",
  "key6": "5vkASxtWUdtcwmHJqqFZsA7zCVbMSMsDwqP51oh19v7ZKGAdi5LhqG5ie23YrM1zYKk1Y9WUSJormQMnFiPXEzjw",
  "key7": "5YP4NbqoNoRv4tcJPMaG38dr3CoGf8JhPufeNPjkoLt7pV6nU2Vgaw7YwtHw5aDTmYSVWh7ckVWxQCHTYSCnyBcV",
  "key8": "CKPVBp7WV6MZk7n8j56eMHaBEVdoSSPWzc19w2AuzDNBFynFoEC4kahCXbPEDbcw2DFRACh5rTq6AYemjktpa3S",
  "key9": "5sLi2g7SmjGwW4MwM8LYHxYQxAbMc4qtofdbrLV1bu1hGy6n1DyVk9ZJB7CKFKPZ6knRE8zmFRJufBAg1mvZvGnW",
  "key10": "ZdMGk3mPNehW8WnUbLaSVAraQBff3Txru2sxu1XsyjG1eyCG1W9WowvfdDCDdyxNEB6PfpNRX8xmfMeB69hB939",
  "key11": "5V8H2w7tRf3hcE2Wfs3UkWv7VJSeJGM6SAAD3dygm2628dP38JtKqF7N5C7vYf74WaPww4QJ3XVzpwBT195GCxHW",
  "key12": "3HBxi847HSzGsMyRuryTspk5uvCJmhCDcjMoEBVpCejHmQVknJhH9LWwFR2EGLNrwxXdK27zykKbcMv5SAvSWQ9h",
  "key13": "opcgobiBMPWUqrX5FttuU3aQeQ6g1yAsr2u88Who67J1E2kndKb9WfS2PgtBR4e6iLSi69baJeANgFbUCkx1UCb",
  "key14": "5k2cL3GNTqA9EQ5fnbNK7VtXYJbeJtbWPhNqcZnJawSwpRqG3K8buKAbyJtF52nE4bjjoA8QqhXdhEhyERny2QZf",
  "key15": "38CYjYw35abUStKtD1QcbYDEFV6FVNnY2fvkRkq4henpL39tADrfem6i93QtTnZUav6ov9B46e16wvMUKUDSkkp7",
  "key16": "3No2f5HwWCKEfmRDvQkDnvBtC3earZs25V6eW4JRcoizJJrdEbHPA14Wmc654Zs3YQw69jGUiZCYiSvDaSGgQUeE",
  "key17": "4Ud4bgqQBiUrz7SfcCjhawMd1R7N9q1p6Gsp5WoCp1v9c3ZKRy9SdN5br4c7v54osy1EvgFdhuPvvUxqxncYSXg5",
  "key18": "2h5M37GDeHfJmsr5KBKGas9W1s2FqEHjXbWscoqm39LhvLJNgsy3qcfPzZ1a5vJXFVjAKN2xfie2Fs4oPTJ6vAi7",
  "key19": "5aDv7uJGnVnocQd755qzvVDFtzAYs9vidYSqXo54QuszcbqXUpF1JpuAQ8xDcBqA3YAve3t2NBg7rRYW2bkSciQx",
  "key20": "aYEv2Nxay2anUowfgNUxKAjaMXh7Wbv6sKYUCGuydeV8m8Q8xAcTdKw6u321tD7RV6VBqjpPLqx1aSadcfEPvUu",
  "key21": "5FQZBhwdxw5ekVSyZo5zbN5FbWkd1MkD3tu9EwqhSkC6869kDPHQf591oWeQRJPNUf5CER3Cfi1rb9FHGBKuS922",
  "key22": "K4xx68tDrhn1Qij7pJT4KLA8kvX1ojGNSiEENb4v2JCvm3NfhqsvSpxRb98YV2c2YC39EmfQ6Y9wuLWxLiLtf3B",
  "key23": "45MCmJv1csCNK5pBjBqD1PhuQ3cAMM5VjkKAQYa8Y6B7abdVn58W2MVnFCZNZEMzzaEoVsRD12XuJUEE4L6Cp7Vn",
  "key24": "mTdfWqv2cgCKXWzuWvx1UKuuPhQkqxtLMoysjnFvhN2stFbcHgwadQ5uUixaifNU3tArW5Xpn3Zgeuj2BbxfGUu",
  "key25": "Hp8yc5NETnqNohkjwEZdac8FiGkcLZjNKMyRC9DZ6KSALGnGQCyYUKJmyGMgNPX17S3rvuNQvFBtBdvTeZ94U1H",
  "key26": "5uNDTuoJSU8mnVbYpFMZ7pzQ5aLhrTnrjeYMabD5AnGTGsF4qndkkCuDSMyG9SswXduzv3n9acTxewoAMQN27Mf8",
  "key27": "535yp4Wk6iQMGVS4k8yLuLfc55vbzHhZefPpELxC9Q2nhwTciWPxYJFJkN7XG5Q11dvtfmhm9CqUS5ecdkcj9Sfx",
  "key28": "32mXXhM7HzwQSFHpAzrjrsWauFdMd5KxpeBePdvzcNtXDFqDdoq94Pkc55DN6Htqgh2Wj2noA5Nm4E3wsaeJwrSu",
  "key29": "42ese3bsn8PYCAxeMGDAHxo5RBZgGJXsLez5xEtJaTmd1kE4rcwXTrq5SzLVYJx4hSi3A4dJ1GvFo7gyS4AhnZeq",
  "key30": "2gsHCXnGk7ciTNE3zV5yvw61356oc6YzL6hXyUd48xYVshs3g1gn9bFCkKrSTJXLjBSMmTC3z64cYUQsQrKU9DJa",
  "key31": "5KiETu6nEoGcfd6meN51NeAU539SL1CXNxYiW3HLh4Q2ChZvNg3LY4MLmnj9UintufLmyMVTsy9pumwyW8NjoPQQ",
  "key32": "4YBroY2eiXrbnM5kizk51AzmrpBDVJRc3se7h2z3qtSgYPQn5thtrRZK82exQRd25cdxofFeFPx4MRFGYmP9j8Su",
  "key33": "3uUiCFjaM1dTtpyY1tyr7vuqd5EdAwfwkNN6QXS4pxDBwthsyCXXwWiYxy1qwJK1pcQNdbrCPmq92Nnk67Si7hCC",
  "key34": "45ucqLa5LecSf2XJRRtxRmwJAHE2rDmyCKGaFvQ9sPF69cwWaX8ozfaihBMZ8hzxW5sqC2Z7DHzFYjZJsFho3fJ6",
  "key35": "Pk4RzspWCshpifY7NkZ5bb8MeWS7DdowyPrEoRXJxZWDTvApxUzWvHHhR4aAg4FKJbuWXtuFBAwB4j1EM6nWvuC",
  "key36": "5zAP4bBkpAP2tgGdmSmcsVjghPKGtwRHQ5DUvSFPtWwXfhcAvSQXby1bZqgxJQ2mBDEMBxhpaSwvnxBmfHiRMBdp",
  "key37": "5qaZxSttxTwXEUGkixthUfCRsnxzhF7P52CHVVvLTCoVxT9G24k6HNdHFbEmprhLserEM4hMQBD3wL1xCxgw5N5n",
  "key38": "3USVzdxnX8bDKKoeKPhPy19uwTVjpXscwttbQetybnPyh1B2ZZjLCXvrsAetypwhVEYMDrwGRfv5dTQeph4CyyvN",
  "key39": "36Wystxrvrj5GNEwLhZrHCN8pFQyMhu4ScxikLudsJthSg3Q11hDuwh12hHbPLAUHWLUMkw2DESvjy87h1jFAbQy",
  "key40": "2DC9hQftQvA2s3kix5bEmFq8zc22jSFMWUeNgFTCpNubXwrzqkxUoUMhatcHqtcQmzRjgZ3ABPbGPG2nAkLPqD2D",
  "key41": "3H3Pa868nZPAPep7nnTJUGSkfMGSrd4Ymymc6pAmASopfnXYVU6KZnDGaPyBzC9nj6Xpjr8VL9ftyxaoF6Lk9VLZ",
  "key42": "t7ehMJ7tiqXs7LW7FXxiWqnSZRnw7Dbds4PopNyKhTm22KwD4PZk1BmuyRjJDLFqABqFJ4EJ6QuqGtYzMTb6NEC",
  "key43": "148vxitZti7cRLzJa1mkxeMkK3jcEgwZDrfsuH2RKAxrsE2PJL8jZprUCqQJVHSvYaKF1oH1W1MEGck4Ptso4L3",
  "key44": "5HrvbJCeqrN3FFREFCyLMfCefoFdGTpP83BH1DBdeg3ZW6DT1sdSnd5ZkMP3oraJ15QypieQDA1NrNdBc3RpPZ2N",
  "key45": "5jmN6Yb8nA5bDa4V57GxB9pXR4WxNgsK1ubHvZKKJ7i6Hcq6CSJoUFhNVGaRY2oTS9CvUakAK2j5WH4fLmz9wds",
  "key46": "5XeiwrXYq1X9BWTVowMaCMThnZmaw22YHmA55HwZDA7RScAtjmS9VVy6qefmFeuDVSYJQVXDc3Lm75beqt9EsJFw",
  "key47": "42ZoaWQkBaWRbkE9dotJ4q2nDPghEdnfwvTdiUPs8zKGSLzQ8kUxiDUHokgaHjv2NzdoFiYvQQ2T6rp8iun2GPky",
  "key48": "2kCBXusYvHNj9APGuPZuqzaW5fiktF7hgL5Vr2eGurnFfLEsb47tar8uEB4SkNrENcCoCZjVbnnMH2t2c71FYA1C",
  "key49": "532E7sdVHa6kP4tx7nXGvGzbikdMZcXxmW57FBXu4ZHSMVvZF3QAgBJyWWQpv2BocjXVDc7cAgM5PiwbA1qdTQxi"
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

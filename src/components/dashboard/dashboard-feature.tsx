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
    "3YutGAeEGD71FPVqaXDYSfTFDLdF8ec8JAySfw7gBQUxjHR3obN6MJVyr73ScnxdUqJ1BsZWF4oNsfVgbDATWDnd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VdLrnYwGHryTdbAUnQsWrTJbejBVJ6jqy6cMpPwaHKo6ynL5bhVpUz1EgL2UkoWPnrC9yoRGh3fQ23E2D3LZk7c",
  "key1": "grQe3cwChdaEcMe4LLGrLtNbb4PFryimQusYzogoQQhU8Jq1J8YQDRZsEaUQWH5NQT3LL15H7YvcHwTKyvmMMZe",
  "key2": "3Ey18t4Ut5ecKjZbzeCtNuen6M4NzfMEGpkzyauE6VmfbNsQMLxKYsfUCjfA45kxLq6in23rpcgA5saTBzMN4aZ3",
  "key3": "nVbSYAESeL5k9N45q1by4697nLKGgG7mbJaouA8TVGQLQsLLunKKtX7DPbgtGkvBXdEPGR2WqSKPKxWkozD1Ywh",
  "key4": "2TJocN7SPPWQH1dVhZVry7jxHRTYtumyDzRhN6rZxf2GbJfgvpUKeqhBtBy724Kr82BJVJH83y25TjvT92FPDkTX",
  "key5": "5XEEk5XQV9LaNiFzKqWhV1Y1PR1UmvLFWbRXFogYvncUVVVfwWeLLfGmV1p7DWyv7jJMoxLb6Z9u8HehuREHftay",
  "key6": "t2KP4SFGwWDVfjheBq8cSoyzLLe76XLAPpcyygWo3BwNADQUfCXH3Q3NryEhS2ahGe2c6Z8XFZFhzaNAP46Guys",
  "key7": "5C9ucSF2AMoqKo2o5NPxP6yuyEdpuvF7Sb3MvZJifCj2uCj2T38jrpjnsXzNVm4F5K1jN1cXwF6BMNDqtdXoTZBZ",
  "key8": "2VCBY2wzoZERi18uLz6TJHGFQdzqEmMUQKf5jQcWAgomBv1EXJx6tM4TXQbHqDffVzUDSXcgeTNV4RQFoaqomeUV",
  "key9": "5xBUoRXn5zsEPote5drFsySuC9F4vGqLGnECX8Pcay6zkfLgoJ3e4S6rArqiZsjBsYUb6LzA1q3LC9m81hRd9ZMG",
  "key10": "Eni4saVPeBoXtnydFeSpYCcyQBdJANGkexr9uL597pRNWvbr5iQ657dsV1MKMBAF4FxkxJVUEh4bvuxZt5Y3Dry",
  "key11": "2zo4mfPT2PokrpmCDLiFxaNViDyt58hyaMjh7UUXC37fvBuN8HzvwKFQmcArabx5ficMh7MUu6JJVRZpjXonYYvK",
  "key12": "5pwg2zx729Vt4MtWHAz3vsoEFqrRpzgbPFMRa6DjetpH6xqdvawWZtv6BNdYd5aL8ZPj2j6hMQuPQS2AzWoauHAN",
  "key13": "64DFXfjrbmTnJySnEFhqkAmBWep98p125n8QXskH4K2GMqybsvk2nDZtaf792dN2g2zugk6SMSi4owxKzwvADa1i",
  "key14": "5aUMUSoCHCsU3NNwoqq3UPUF6V16b9BwC9iPv4WfzAcoq7d9tajX9pWmVgzamkjNjuvy5JHWCi5UgAZaTx91HMzp",
  "key15": "3nnEFTSdxx74ApjopgRyd93oQH2Y5hzh1iSRm9UyH5TfaJvaWhXEHruACQswkbHXqu2bFJDCNgLcbsThBhyMtQYH",
  "key16": "3Ky3iXiCiyJCpFhoFoZTmWoyw7hzi2oTEz9jQHLGFbjdUGrBMCGgdJcMYyU24mNZWrtq8susN4V2h92pVqgrjYSo",
  "key17": "3dKhmx4exYbyn6szjbkxMghYrn2u3Be8NRosP9pdzfKqqQrTgHPfcsKdXH2YhjwQKqe9shSr15bUXkSM8Lgya62F",
  "key18": "5bf8qbpmg7RgV1k4pbaUrqukBDRZUf1ssQogHfV3hwXDCuR3VPDm6RnThAhH6FkgDuoR5QRKuGh6GvDp1rsUCVsP",
  "key19": "4PHmmnDWxiuEeMwPd9cVwscesPusVKXSJNGwwoUkySDGfzNsAbfXDC2rKG2eNbtYB8eERnVbyLTtfMwdn74RUV9Z",
  "key20": "4YjgbwaviTnrr8faz8P9JBNdsPKoz1cUvZ4pphtP4WJw4yTVTp7PACamdFkTTCitpYwLFPnPdQpN97orT1B3gWB1",
  "key21": "54gmX5DUMoY9ezzZwRX8ze8eSPHJaSoGzyFJMg76uUxJffh6BASLmAuBBEbZu1sVtXhp5TBtHKrx9FnmeiZMfBJk",
  "key22": "67RKoFjQ7jKb1q8WTaPWypxyrMdYhsdWWeoL1fGZtv6sXx1sBawvoVE7MjYQLWWv3UhF9UuezLCzFDi9vJRySdkv",
  "key23": "LEfwcWsScpNY5XvDFbcusMrxPAfkDWV3rSHYC5SAhLHvhj6zyBop29ysEx5SETTtUa3u8wKVP5xBxQfK6qiUcCz",
  "key24": "3GvskRw8Q2qHjmgc1C2Cux6FeZDR51QuL4UDk2zTFAm5koXA1hzEagKwiPz6b6VF8osLHf6HoBMrZrQXCionMfgq",
  "key25": "62UEX6fcnWjgQz4fDmUPGXn54GMc4uezwqzd31n8Fq79ACRFDedZVvxyy9V8XYoSBfZ8kAVCf94YZGTJ2kQkLG92",
  "key26": "5CXPW4zr5MjtXcXjBA3LUN1JF2gKskqz2coDarUP2XRNGZry9XZ3VTFdcwrhtb73HFtf3wVtdWhG1w6BmdDzKUhH",
  "key27": "2XHxMnCTfbewwkqRMf7kAGBivC3bCVkcNyR9LZSsQ6MfDFDK7uZ2DkLCF66noPhxPLp81EHfNLoWJ4dzFWjnB7j7",
  "key28": "2PRT4haHQnwocX8PziFTkdDnRmz4Ta5gGEHB16JF5VcnuL5WZD4mT8XbrxSgvPx3RcPeKHuDLDAFjdd5H13V2S2e",
  "key29": "3AWENKYx4NbkPF3o2TFBLzVhtSU8GQ27gNMNJhCDm2t63b7fsdqJyEhDTKnA821h5Pw6NciPhMpGut6RqaoupmoF",
  "key30": "2VMcivtv5AJavnEtu4j3rei3Zk15uPeF2u41JbLoHcsc58vAS3qMnRXHhkT4HVyoCAX3DE7XGNeVPPNauAY9PkMY",
  "key31": "rigZC6bsCLbr53ZiL6o1ziW18B6Cox93NATt2EYHKjt9UkXtx7DL7Tr8wk5edkgTNBJ9F3DAggdENg4NofDE1jj",
  "key32": "4koWvKSjx3vP4i1Bq5FVkVkEoSWeYAb34Uebzye5PVsfDWsV1ekg682sKtbpGdC4q1U9414pjsLJL7ncxSGsPKZx",
  "key33": "52D9Aamrp4yWmQwfQjHvfDceynQfDGbaQNBgmFNT8WjRsZiW4buChY7ncRYpivLnTm9QNyanW3DArKX1NSKJiS96",
  "key34": "3GJ1MnYiMLb3L1idtb94yUAW5dNuBXdNMYMqtxsFDaGDZe339K8E6bnv2qeeFjbtTgNagJewMRBkpoWLhBg8VZfW",
  "key35": "51R4UWWVXa3VXah9P2VajzEQ6xBPuybzHBzTEJUQhYzJF1RVtaiPTPGCAG7ogqTV2ygq4bxcqnhwz61KN66KUcLB",
  "key36": "3Gm2Z7LGmuWEVvMZ95ut4xfaG9rB1G5zMA58PR46WF9Thak6tZN486gDVsvooxmsxHiUqxoGTbLvDQbZn3MGoaH6",
  "key37": "x83py6M6b2CMHoYWDWyWbsQidrMaT9n1Wcy83Mj6RMqWPpQ3emRJB89kryxgtD6JnnhK9bcziNLDhiDW6X2DpWG",
  "key38": "36zeM4gbfBpimuwRzdLvv6N4yJF2zLFvkYc5VuQupb2Rdz1LaY3cipYvCq5z1vvVGzAmULjVQ2473PpY32wXGPXp",
  "key39": "3SQd2VyfCLpciDAEoaXn4gqs842398vBqGaAAyNzXE5NzBLy4KGkCc9mrYxKyRQk9UEpUMhpM3dFnxSAPDcciuhX",
  "key40": "yNXAsTGinmZGu3dPiE4mA8qvqUJ4mDZGU4WRqbooe2Sg4Z1NRigQyRfCBaR9hTZmEbVvZTboWeZbNaVwJwKTSKj",
  "key41": "5M2hXaRXnq4v56B7xNmw2HSmXjfPmM5CU2JddhXwvzh1UtCwoL2bRFyjnBAmLq4xjxNQYWdKKJXoaqVGE6gsvKLx",
  "key42": "35q3ueWRzXqxXZUB5sQHLr9mnk4AztC3oJPkK8bRniesrK6rLDLatEM86PedJGAGMm56jkSVesJt8wzzNkfY5jAc",
  "key43": "2FXUX1T6PAvFWpLrvDLVwSfrGDJypRY69jLSnvnEAzvsc8rBfqKasGCcq8jpCENq4EEGpL9A6MwR58MHHvQCCext"
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

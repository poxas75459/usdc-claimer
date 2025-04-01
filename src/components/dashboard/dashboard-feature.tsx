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
    "GiV51tgvs66LAxWnYjsuEoox93sGxZGWgLtkmUzJvGwVw9QpybboGj1sjziSGwhduoEKMcBRGompnSjiUDfZL4Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MkFXZCGysB1WdDHNLEiGCnLDp2pRkCsrTbqvsbLiXsoFHbt5KJPm5yBfhijp1SMWy7PKESUzjLPdRESJUwpXLW6",
  "key1": "3bHo93PNfeTooaJvWfsFzrYMhEmhhAjH4vzqGnjnm6yZwcYFuNc2FUGmB9Y2WtVAakPQQbGdSJDn1abbjuJPc8wq",
  "key2": "4eWTdpCSfJ51jr7k2A5mh7aoW6jeaCY1WaPJSUoDmMrjNUXwcNNFQiyHsZ9N9ySS2o5A4vy98aCeh6VPafVbZUPg",
  "key3": "2sQC4bL2XmbLNFDm8wYuLAiR8HJMinpmA2Y6hZgufvuCGJNEnd2WHH8yR1jMSqNdK332cPrpTYzg7w2EMLb1RRJA",
  "key4": "31BSDAi5a4xMi853THFr9kYqLakPKDFRJGFMPue4z4atHEbaYkQoD1gRKTtiaRd3EejG2nRS79SN7ZaidYhPp68N",
  "key5": "4v5iPBgYHCmQEao5UPviGghoj7AU7i8ntfN7naR8o3NUWYXUYFW6gD9KzP4CQckg4De4SViGmePk2nhhYT5jwjtY",
  "key6": "2qqGkMe3mMoDUgsGnCVymr9gojj8RhMumAtCpitMb1ukXDrB6wj51JdLBiLjpxK6SvmzPteikUemnwyGj42jVmfw",
  "key7": "5AhM1VPMgxHLJsEPLe8168JunmZ53mzr3xWFV74SKZY9fSfZWMw8Hr5ebEFEZVv5VMgoctnaEEgiyQwAPWBqeLZN",
  "key8": "3AU2GdSniAWPoQKMrhY29fbo87BQV5ywyHkLbq7hTYQLxCiGBQmjqe2Rpw6FrAwZikwzf2HcSuyznJEQkDkZB5a3",
  "key9": "2n8xPKdjfm9Umbvw4NE1c8NG4tRHxf7o1UvVWcbhC6e8E6PjKwMceQNV1FaR4xwZibUwyAbQPcAXvWMByHX75WW1",
  "key10": "5dS6HeorxX1jER1Nf26NpRMqscqRnUktak89DkrcQ8CXy6etkFpT5WTUjmeCngFNJSKmHCGEdRVUfn2zW2yQV4KP",
  "key11": "49s1vo699TKHyudGcru6V88Dpe9YmApPsVKj8vkpSZvvM2RE2u4JSLBoV7Cdp2w49ACVSpiRpaSxKaaCmSbZsqdW",
  "key12": "4oc72UUGaJdkHurNr5jLduM5LhFLK3oYm4oEnaEKjDDmWwMWhUivZJw7iPTS9yF8znywsFfnpb1viTzzhhFUPygv",
  "key13": "58DH9mXScRBaqdWXr5NA3hxKxhozAn6mnB7TJSHEpiyTpkVCBV94q2KzFSBCn2erp7bX9ZLckZo3q1nF8FfSdxvN",
  "key14": "3Zzr1JpPMHKnm2F6R65fwx2FW2TGfozNsT6xvskMzPjAGKSS9aVcnhhpNJnbugZF5Z4eTuorPgDSUfgYXAiK2fVx",
  "key15": "tZK37VunUnvXn7ne9UTqntfXFvgo6F1mTxc2foZPtrFMS54fqP8AvivvvSL8W6g1Uytr5XWYMVLb5yqRr2EqYQa",
  "key16": "2daM65Fqkf7z3NvMZZnzBC5RbSkXsZumbPWA8wZAmKDQsMKSUVaCUNorbmFm5Njit19nXoj62K5wYnGnA68Aykv8",
  "key17": "5fV9e8UFjC4Cukpye65uwpZUs7WrbT2oHRtwR5scAFgW38iBJT85HZDKFAXhpzqd4rePqp2cwxu1jvEAMLNYGK8v",
  "key18": "3xv6tZ5inU5zApkSB361XbGrYEWpu7eAHbCCB8uyrGAUSPn8P716FDPuRpyVpDTCT5mb19QDgcsfNUWso15WamS1",
  "key19": "5qD4iPLzu7G6sTak419fKD42b6RrFBbVHTPiqGWSrdnBhHooYQotxAhEVwEtr5hD6VmVBcoSAY1jnYumUbxSLpxW",
  "key20": "4BAcFLPTQfkwdbDUzj3qYQy5JxRKRYXznChNmHutv4rDYPUdrzVbiCN2wSmT3GJvfZNh8eEcXP2wsv3L3kxhs9Zk",
  "key21": "5DZSrBsghCZWD3eyEcn6hnwkLrbJeQHw3m1ke7t9tgQ7ada8WPM9CMpdvnA1DeTQPRPov25rNB9QyjoLRixdNhJM",
  "key22": "2fh5xNnRJpUMaKkxRA7jqBYUqzw4miUxDE55Y4k9dgGPaLxZ6XvuKZKUEHfWtCm5Q24V5wT1RerBNPCiqAAoTEYZ",
  "key23": "4cYuh2WCD8VPiptaKpVioajhW7mr9AZP1EMgS4kggDn9Te738dvrx7mCGqMzYGuydLknewns12VY4qVp2cacQsff",
  "key24": "3dA7GN93e9nY72dami4yn9HAA5MnHsK5iK47nFcCiPuAZhurTUNiqmZVoDg89rUR432Kd3qSuAbJNYMp4a8Z4dDb",
  "key25": "4BPu3yf1LY2e9S8vbdLLe72PrVZkngPM9zbrFVUnKMzrTq9hxD17hSWinPazUgwELGSUV3FLuzxZiLL8WwxMCE7d",
  "key26": "298wrjf4GKtxBJpWSShvCVayxGDv9Sj9iBYPTohi5ih5gyGrMp3Khgi2F3RCjZQGmV3Mjsyd2eBrRVVfSPw6feMS",
  "key27": "2usrMpzawXXJ5KpGHQSzuFxq9E3NWUCkoGKYL5zTrkjBPaaudgdS1TgMwHbPnkHyxDbPHDJee3b5qMxPizcSf1iC",
  "key28": "3JNBLJge35Awo7BZptATGdLzRGCZrzEBwijKxdJCbzXffnz8Qob9K7Y67rCkx6sAXYpFQXMgEVqAonUX7rmryugu",
  "key29": "3KPeHHzmztRhDof69XqWhFty1zhgiybWaM4nvSn75wmmNcvJQHBAiSLvGRBNS2Sysyrmkdw7ovemhjRgyEDiZzVc",
  "key30": "5g7LsNurfG8uwGqAaEbGHSD774X8k2hPTVW84S5tZSJnaTezAkKrcBuPBH27AJ9Qh9GC6iN2AEpWHK3cnafUSF11",
  "key31": "2oirPSsjsFsiYmupBV3koM7HakxpdrGw9GWbroRLvbMbAq3KmQZ49roJdx6DHfctS7a8DF2cXGM2di3H3Yig1qQ"
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

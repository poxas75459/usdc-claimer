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
    "2SRmFckru5zzSKByjyivvV8ixegksTqnmFhCcnvn1oqnfAWnoaau7HSagKJUwpSVf86kw1K4TKFijT4geMEt6eNs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62Hwrk4dTFw5whWvLoy3Fu1KFx2To4GkvLYMfKMcgQ34zGMafDzArnahcCY4HULNmGDdmSUv8XZqEj3DKW3XSNMN",
  "key1": "5UmZfrvLnnP87jySbhMhfDtqV5AwNgXXYCLmaCtySaB7PidUoBEVmFge324GmdfpTVsCbqXdRxMJWCV8b8GfWAgW",
  "key2": "5c5bo9HPmSxE4A8tr55UFZwkLcyD6jhbDqtQ8pJzrCL8vV6gWrBERncq3wr5fGZFQRPv52asH8Pe1BAqq5uTko2g",
  "key3": "5p6xW79Qm7p8gWYkodNYKwrDE3mw7jhvQMzVqNuPT3RgSGh3Ce8AExNezBLRwsRC2druRDWf9PPYpkMPREJb3NMK",
  "key4": "2UM284axAA4oF4Yi9dzDL27synmPbz455ZcDHWLb5CoVAPzW7KtM8ec91JDKYz9Wkm5UKavC4ozcSyXhbrw8rMYm",
  "key5": "R1dWdViBrHsj5FwjE9WVCVuJEAc2D7CUc8ofFp5cm6Ztv7JCgq1Nyoi2gqg9RWiii4Qji27EUeiKNTXzYFAcma8",
  "key6": "4vWohTzNJcTR854bbNXkxTV3KpECf6kbiSixQkKB1C1X3daK7FLUGkkaKNgzvKHz7pamqrovTNqbJugV89JgtVbt",
  "key7": "439zg1T6NzeJPBSKp4ipi77DiMNAipiXBPetq3q4PLsx2qTWDfkRDFcLzHjpqbZbzdr7DwvihC3Uf8doiVU8uPJh",
  "key8": "2CkrvDUkyjp6EDegRjKaDFyckvygWm6uroJH1fgV8g1TymSF9S3xeVr6NBp2wqksDXoRkhbapG6QwTiSSBNkKh5u",
  "key9": "2Qe9uxbdQzqKbhASDChEyRKmFpRD9DgxaGRfjeqfSc3aYYbPTE67vai8qh3Etkecvb1b8j5hX4cWHSRvf3YfdvCK",
  "key10": "QVthwnaRwAA3dkfYUKT9y4PyW4MhFBLd5UYZ2LcZnV64N4kTfPwP48MXh4GN4TRxZn3ri8oCzyzcpfnqKmYsgyW",
  "key11": "1bJSCGMq68h8e9DgytCxjraMaSTSa2YzMBeNfwiQ67QC2drJVysLEh43JrtNyWniqmxXtDoEn9VyBBsLggEuoNn",
  "key12": "VttWgkNW9uAvvQ5D2F2sYwnunDzL7CEdpokcLDw9PJSEbEvz2FAJp7vEHH3SdCns2TX7cX2JkKmNxGgjZe7MDYQ",
  "key13": "4v4r31GDgQCXd5rkJVz4J3k5ypYTetG5pNGAuXX6dofn4zPRabTa4gyGDLq1im46qcPVvdhXwmvtzxLe7rxwUyEf",
  "key14": "31ReAiXDd2Kr2sTu8b5Mkfpo9ndxt5HDdFsSeC4tvSuLcac1PZCHmg7Zy5dZs1m8pYQxtJgp3DLCpcLnLDhmVmEr",
  "key15": "5qYFSSWAqigMYLXYHKvefYMMn6D4pr8EEqtn9NZ5e64AtxayXLTg9iiSnjALn3FzimCqyafY1yhbCpYq5sQ7mE4A",
  "key16": "5qyXFKJbAGY9k7SpFobPqYQS9HZqNnLodnB2WXGqS6BMXAH71ofpzd83obw9xYCo2Ra2pzPVks5LsRbAJm5fVuX",
  "key17": "2hoJazU4WEiz1MFdhxmB9gNbbWge2688PyA4LWxTE9vBGsdkfN86yoZaPb3jqhRZaB8DJ9aTR2JedM6hvbJFECmF",
  "key18": "29DKZJiL43zoyJeGN3q4ExV2wgX9vqb2E6jDLqH5hXQcWaBpwcvm3GgH5cCm54qEU1aY9SEffffGdud41RKbi6Dp",
  "key19": "37UPvvK6Fvjr4CnwCSw6aYSGmi331W6PP7pk49CNpphYWzE1iuLkWhYk8LLNfx4CCgHZGrp1GjNVKJo1E5AEbbh4",
  "key20": "5knWPS54zC1XZc83R5CSi29LwWYoxsvPsD4W2BNBR7mc1g8rN5D74KGDt8kfdyTgSD1nX8jxSBhT3ug1LBuSMfkw",
  "key21": "7ky6AWbWCNLuYhDYBYXuFePcUgWLVtXWKfqAM7phiSnJSvEfRDoyRMstrFZhv1x1zqWRCfHXsMQX4sm1CTf66i4",
  "key22": "4cimYgr5X3hRDGMjdi6y9FiftBziSufJnLAsQSihZpXbfJ5JfJqbLUKnEEbWSUqHxPYgNMnJjiLbmf4YYzYUHns1",
  "key23": "3JzW4iQVVvWQJT3dmqpJjwjwdCtN788xtatQWQQSfC4pk8iJCuu56DTWocxvqqTVmnbdrx1yhzXu7U8i6CgqM3ZK",
  "key24": "2nuzASjxwC84j3zJi912aEMFurop4dgVoZZ4VghxAqCqr3aknH8tSeXEQtLa8v1iPnfoXj8ASPFPhhWd2V7Ua37n",
  "key25": "4M2aRt6jebWqKBNTMkLkqQyTZAjypU3UbpbvkjUmXSXbKuonnWbV4YmPdPUNq7zDktct2e5uaZ4ZUswhwdQdnQre",
  "key26": "51YfALQvyy4iWbYMLsZFxFfRm1yFo6R1e4EuuRFfzDUnqS1TQUTYKsqrfTkCjVaui6mnmon6iaerx29t4YBgPgJp",
  "key27": "9HqfE3p9bhVn16pJravxR9ohTPZuHG3xBVwRmREoaxpjLQdG56EAPpyyTVuYpfqCk8JqVhDC4cbXcxZj6Pe6B3y",
  "key28": "2Bs62QPkpWWZtRXFFywAsy4rdxdMgJ6trnojXZkD6sG6PLzsg6joL9PzecFskiS3HqwGbH3qw64J8vWFjCMsit7n",
  "key29": "4tKfu9P84LwL97CboaEtTZz1J7wAv25CkvKqBqJYEZuuC8KZzkwFzr6tToRX81dbMojkphwYKeYhvKZRkKYJX4vM",
  "key30": "3b79ASbDrYvKwUHMKbeibbP1UGr3XLZ4B3LuUHa74LTGzndBg1dbUSakQdA6sbrurYUTgsdT2WEtVhmjnBRaXdV6",
  "key31": "5DWMMJQj53HLh5mjCuC3LjSGEVqNqqBBdd5ug8R9RJkqpfxnzwSTEDL5Hhg8N6xPULXQhpXMZWWMa1rQX7xQL1nP",
  "key32": "5jQ62PXneiW1fzwPZKGXvgzn1Tuw6hozcGNmGNPsqaJqB6p3W1D1GpprZsj4UhU9N7zHHo7dUCkAe4MdwwAJMn3h",
  "key33": "21gTDu7J6ecWMyE1zZpvK5T5dY8oRypCChwWzuDHH5F6sCvVSCcbYrQJdNhLmNNpUC1M6XTc5F6hYht9QyZid1nk",
  "key34": "26jyQVXne3bA44FsfgnJMWYQdhz4PxBj2ef2PHBsNYexnR7V4APZ7NY5QQdHb5EnzkTeqXX3ppjx82HcCqcsoPEu",
  "key35": "65wndkqtGhTeX4CJhCMWvaqy7kTGet1bfP74MrKe3LSJQrWZDwHYrZedQGYMtorQPMs8xnUaskCicdzNtNsVnrUS",
  "key36": "2YvZt9CT4HSq657dgaUjBWpRzoVeVTXZVgXQaq6XnbRrYcDKNbWZ4hFyxjyaaFUwNHy7GreNRD8WPwNhKwu7taEu",
  "key37": "5HreNfciDLq3ScoEJkmHxmZABXjTx9mLER4VEoBsHJoVJ2ncSsymLmTSeS4jhWTK3ehYR5mNPkirrQQYbBxcjMCz",
  "key38": "2cT3CkH3YUg41QgDR521ksVKM596oWUcGFYSSjBd17Gu9DUmTQq5CxLLGgPWWpZXGgKWdjUEbVv6NdQUVsVmvfsm"
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

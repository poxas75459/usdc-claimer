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
    "5mYMMpMgwBhZMxpPAJRrvPJRWeA8npkNLWeVPZUb3UCTEbPyM75R7uA6MCT3Gtwou3TUXBNhSj4p8VhFEPXke6NP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43i5AL3pvDPM94gE9ggtvS1NWCRBPLGKCbJCtBZTMyokJhTq4Yjhc35pVWExHiXkDaWfGn9goxe9a3PDu6KnomW6",
  "key1": "pp33GYMt6kd3xKjTL4Hob5kktGAvMV1gBdppkwJcWB9yqQgijpk3V6zcPThHfv3FEtNitEmGejfCzkUts5tgtFV",
  "key2": "2MF4tQXUHwuWcQTchZF17nJ9qZ32fwUBJGKippK8cA2JcC5W83MMhv7dH3QHcDXastXMcfB6dxB3cTKKqEqQq1NQ",
  "key3": "gEesPrYKRoT1RZTUPvxhZkUZXd2zhahLns9Zf5cjgoq2RuEjHG1VvPHgUwMutRNaj3C7UMReb4T8zu2VfMW66BK",
  "key4": "5JHJxa1roTHccm3ZXwEg1whFb1VD6dVy1dG1KzBF9uzrn7WL5zPUSfKcXaXmKU2ippCw7nBpndQt1fpkKzRuDyNm",
  "key5": "337ADHzEUJs8qe6GTcg61ZTLC2R4Jyyvv9JdVmfKgkzxJBuzVAu9f9YdJaMJEbpkmUp4gHTTXZvGQJZ7HHxSvYKj",
  "key6": "2qNiajx76zDWQnNfbLC6y9bRbRqC68RjNz8yMRCFi8jRyekLFhXr7baa2u9JuG7B1dsRTowVHBNWfh3q111Sc1cj",
  "key7": "ieB1Z5ugpNt4tWqXWDVMLucut4vhiNBPWGeTXApACcByqtipZXsMw1GwUtrj1oYCEK9Jy3FfWvJdptHx85wLpXj",
  "key8": "8eGPN9xKphTPomjUr8C1S6q1pR667URwgjphduhvirjQxACiRd7xADGqyXAN4iNpQQtnfaiGbG5xEiWgDKisaD1",
  "key9": "agyPZnyx7vED3zQbYGKcSDGRMXVBXij324xsdA5McPPqBtfMKEzMw8QypirfSkjZhMjvN5UwERbwQVAgTF4QZ2g",
  "key10": "87nbYz2r9PXX5EBHRCChBGP9qtDa4nCCKyhjWwfEaYNacoURnc9haiD2ipprPXxkL9Lq5VMcYaQqiSGaGwTWomi",
  "key11": "4VNm8Fx5s2qkEDJ8y36pCq7kYQhFemPWpmuvnrEos6BfSHnBpzx2qYe7pYXJEC2s6wKmHBAfzDDdwBYo4KztjiG7",
  "key12": "2g4btXXVeByFwoXhzLYp6mpu8dxS8UYCaN4JQgM2RP4RbNVrxSKfoyhTMYtJcJbb4JbSegkGuYGce365yNJ331DR",
  "key13": "2XqqE8cCiA7eRSrtJAeEjuvBtGqo7SBdoBGag9u2HmCvP9fAUN8x7r7m3mdxk1sqf8dKsXnArfZ4QJwaYFQub1oT",
  "key14": "53sozThow6HmFXZhSsC8fGHFXwrW8651sde3C6r216EY1B7zxixi1Z9a2bkxfivga3zj9TjG6GnHbaaQ5b8bspi7",
  "key15": "3wo3LNo3P8Bp1A4Nrhg1B56A78G2VozYswCgspVhZxCVvns4sztMB4ZGgr2ipKBoFiZ2SWhGb8bjr5568PnbgVMM",
  "key16": "27CrfyeVAi7CgjvRAwY4Bf6GBkCUkdc9H5rT6Ck6SaxinT3538x66VwzkhFXW51xzpzZVfMeue2JDac2qU14b4GK",
  "key17": "5qdEcuFq9gmR9h3MAfJKk4aCkexmV17wJuhS3sDhoRceBLXDQJKbTYHSyNDKyg9Gc27wQGVyJkomMa7qeGeZVJkp",
  "key18": "465U3uxPLSBEmJrM6RFVv2zx1qS5mxLCYooUFYPhr9ziBAcmWKN8FYDrPkgLc3WHD283n41vRf3NcBUEJ5fYDu4F",
  "key19": "2gpwkgYU2VbvDiwCJYRSF4xWe7mZtASwEy5ZDuNYYynSGqQMZvk6mEJajMfhnFym1e86fqNP6VZBSmvVN3nKhiVu",
  "key20": "5oQR71r1QA2dg5T8utJtH58t3mAWJCxND14ai8Rdx6hQiedRSwCPydRKKMHWDeW89PuFG5TrvwQC8esCbyGAEDJb",
  "key21": "48cRehZjMGDfjyryMJWfEJCFQnswsZE1CQPCvfCw8LoACdLnjyWTFPLtXqC2Yc9mpha2GA4YLPs4GyrWYoDJYfFG",
  "key22": "2h6K3CLJFqzm5zCGWgmfvqc88mD7GpgMPLYrpuhnKMc63Jyi3Xp4dRmjFdCnVEL63mq1fjDnyycWy8dtBcLCPvk7",
  "key23": "59ReiSUAeWhCjCKP22vch1X8SLYitf6KwnSmsHxp2FwBJK5FYCXYswQdYyF1jMnvYaDEwrTQT8C1tQsQ6UeBQpQf",
  "key24": "4RNFn6EVdagGcJeJ748PaPcdLcyYwzhaAQJ39cVAHjfaKWeREUrjq6Mh1JwRPz8k6XH43NF6qRjNTKkJZX1NK49b",
  "key25": "4ehUZxAnm3XhQFYWYJHumodB8oiTrNFSKHpDYMYWmaPyi1ZGcaxFbMfyTDG5fouUEi9k6cWQEf9ufnvUAfP4AqbZ",
  "key26": "5fs88r5i9uTgbNJSArrhYZYHE534s4CaNJujyxrq4iCNLnXzeosHzwmoo7GxKJ4JSVBzAh7G8BeYyy2t2aH6LJ43",
  "key27": "xA6x8DTa3Xbkh66wYiwnQNhwY7UwmKbSUtXRsxJqsLQNwF64TLZm34ZL4GHYKBJM5vFR5THbLQBnLzqmu6BZCHX",
  "key28": "5KNJd7K7PxFRWjfSMjfTmgvSqY2jQfJTkMVS5ADWGUEzapYnQNdJ8kiH5KF7wz2GtxNXh1Fszt9dsjbTW2hbunWH",
  "key29": "4hyxNB5rUQ2SNGCRbXu86fv515i3Lk5gc5d5rtY3xfc2bLcdar3dzZuUqzz3wE5x8eD3SxGjYG3hMvaSYPdjm3as",
  "key30": "3GtEQr4CqwPKhorPLChWQYGvzkrha12cJPAdZ6wppuF8xB7DDCyWo4oxd3amsPN5Rzkpj3EF5L98akf2EYKNZrA2",
  "key31": "2dvmG9tmtydShjQUykup8MdjkCBvzazqGCuHNi2jpoKrWgtFMJfUYvxS7FvxDRQYPMaoc2MeSvHYZaSMjdJg49nH",
  "key32": "2z5VaAj7GwJSHJn3nz72nXEDdre2PgujDddXjB8XHJ8HCipp6kb85xkF9mY4zDaQXcdj3pb79Jckj6iviERQLYqH",
  "key33": "4zFqWCrpVoi7Puw4jGjuzj2yxSzdrEmkef9DewxhTMyCzqrEQet9Lcddeh7o1zDJTPWjqrPLpndJrd49H79XWY84"
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

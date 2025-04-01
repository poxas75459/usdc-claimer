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
    "5BoVaAk2wD2tRrAbqkKSKgm5t7uQCt9wXBJwvnFifaZwdPpnJosFi7eJdcEJAWEPwbvYgKcJ12dkbHSfkuWkEZrb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ha22baXbjb4KdfrPAZwDnfiCqPBLHtdWdar7kYFjY1H8tRszis9HjrhJVWMFmfkxVqS15mb6gJhieNM4bPhE615",
  "key1": "5ZoQ3VLwCcea2cdnF1TtotKVNBS1WgruRupQyZWSQozmKp5EQoqog2dBHRZKbxeTyyk96WTz9TjjPNcxh2DhjCpR",
  "key2": "3fhPjsNA8XWHTujogXLwi3MnXW3hZoa2XER3qmKyV5tfinayAbWemDqKqwRFZeo5J569YawkTakJQLfcrwzEeJ1G",
  "key3": "3jg2H9CnVUvrULD4WNGwxzvkhgEtKVWSQzKERXmgYbgC1runnYZa5rppRBQEhUbNzxNM4hwS2FcCjybfKL8nN8bN",
  "key4": "2mKgeBnQV6ky7JJqh9KLbMXiZhrYPNq3qQbaf8kvxPQgJDcz2p5bj6z95pVfR4S4eGwHeo4CbWwXTQjSrJsW8SNF",
  "key5": "5eRJaEzgxnYMVx8GykRLKawaMfkiSBw756u1LiAvTYpwQgA9UGHmx8VrKiKtF5znbtLJSZgnLUcowNQs2XSDnRmL",
  "key6": "5cBowHmc9couJHZ3mCsZdeZbw7R2SSLb1QVx8yDdiPAsa5FimMuPSAxxbP2Q97kJLfFgskyK9yASXyNYQfCGK8ty",
  "key7": "59TXGTxRfBUZh1htRv26ewt3JPYNfasJwDguY7miavkBKqJBht9yWtirFkYM1Jp4gBeHhEUKFWN21bo5XA1UfvZR",
  "key8": "YZEn9ehmhqBTPWyUWdPxeJqpcusyQxgRUChfbSd7DLGqNCaRk5w7P4XnuzCPrcHbZe9KFkVvt8xh9MwQny7w18F",
  "key9": "GrZoNBojNQFckuzXsxHaRjwma3NvvDHQ4pTqoZ23bfEtEKWFkSEsRoB7wUg5Wu2kiyeJwFrVzM76iBtV1VHmw5B",
  "key10": "5Uh9L5hk8D1W5BRThm6uUZ6kcvhjm2Tik8iXNSZRm9MZEqGFw4fSZaWjKA1GbDn9cHZ13ZKBAxVLdqfLN1PRNGbi",
  "key11": "UAiHp3UtVQRxYtjnAY3vW3WsmhLsL8RhxMdQbTSuwaVSK6Ef8YdBLcNHEmFmVGmKDFqbW9uh2XVZU7mvzycziVa",
  "key12": "4NU3TgnrN3JPJGv5w6sLp9dcyoVqYTEasKxmkbvamztgRMnc4hM2RcnXourPYRzQNB3Nbkx46k9a2H8sG5Cy3g74",
  "key13": "4aeasKYWNSTcHiVNSLyRwQoA5avUEw67SwKbQjWTP29heqrhGzY2s2vnh6c74vVJF5UmgJVaCEogHuHg7QUaey3m",
  "key14": "5zf4HtTGZW6v65pB8VeykYeFxcVYimDoBQTBjASaFPwGko47Gh5bsG2uq5MmQWasVm6YbzzYtZVm19Cg4JC1ZnZc",
  "key15": "5mXmW4QX7EEH2WEGAUd2jbQbY1RjGDNXN5cSUoKH8cVZzM2DXD6A6DRL3YQydh5Sq2G68Rbedv2M4Q8fqQ75dD9H",
  "key16": "29ErTgGWLKYG8pwaPcL1gdo8WqJu33nCsmEqHGRVV6DWPCe5VL6tPhN11swZVnKSfiBCn3cv9mGJX6TYQu1d2Uc8",
  "key17": "231ZWiShXfNRqSbTmaVZd43vBT4r97erCxj1t1mTKR9aNs7YqzGtRM7vzHsbZQSwkvogaVrGDAJG5Gfq78gFFk1A",
  "key18": "3pK7mLmnqEdZPXpaUr1RHS1E4jSJr7mev24UGzkVDquexhfp1okbdG21jKBWFBYWPEEmaSfCXWDVnaFhzXXiJJrR",
  "key19": "UGyfPfgABK55xVhL8F8Sm1EQ4PP2JjanKuzb4AagsWHLDXdm99UnJQ4eHeRjdQA93pM5cjGFdZhA9k2hqMFi8mY",
  "key20": "5maNGpFQBcE6S5JvDFHamMv59Ff2LFro3cNMNnMP4tGmGH9jCR9hwSpYHTRG9wV7XfHij21y7BQsfdQGUHewGPNm",
  "key21": "pPcvjWHwAxMmWD4v5evRpFjiuuuUji6GfTcmhQnw9vf3mYYzcZSnWAtY5FouzRMfBtrzwXxwJvCByWMiMk9tL5m",
  "key22": "2FvgNMFkEztDL5QrrGgS986P4EXj2AhJfbZiZm4an1rdT4wgmEqBqxC4hzRTCw3GqdDHySwCh2sb5Wg4cbPxDsiS",
  "key23": "6D7S8QWgwQ3cSK4Q1e1FsQEpgPRUpkot8otpSv8yrvdT7Z1sDoY6b1F5e2Cg637tWoah5Rqcw5CBpJKidw2vgGX",
  "key24": "NBjCUdiphL52WivQ28yuJ2A88p1xbqx8moTtQtxo8oAfcSHMo6aQwjymHfkiQrUbtCjbvxjZw9bNweHPi2JwF68",
  "key25": "8J5TzQ13KYcKihhEeRGLC45PFVDa6vEXLgU64cNcmrJhQPNfngZzqd8Cw7rS42P7B83jpgHyYAkrYecTCCXc7Ly",
  "key26": "kwrm3x7LHzmFUa7Ytm73VxcjVEPf6fWmB9kjkZXyEm2TkMtaBkuzGYHKEqe45AKgtsU66wQFGNLqv2NVDFVKWZX",
  "key27": "45Gd9QM8kXitSZgsZtRtxxMZ75dYigAx7JacSai5gmMoMeLHaedzoKHMfPbaXeP5LavkPupfDpjZTDDZsqdwgVJz",
  "key28": "4ascxvyweiHsMCJLbGMz2WbNhmF7BRgFv3xkFgcXV5pqQJ2X6HLNFLnNpCx9AJ6ThhLPNXZXsWnHx2XTsAVywWJ5",
  "key29": "f6kr99q18nowQgrsYS3yGkz8SsudNEmXRnr22p2phFbb5xeXrgutveh9wqgh3zonp5W5nMR933sUFeLWiYk1X2b",
  "key30": "QkgNc7kbjTfJcVEjBRQ8xHQTCTfcEZb1nRgp4p2AfqYmRpsoiB4XiFj3Y9QFeMWbxN3wppiCrb5s3xaLYvoxZeE",
  "key31": "Ys3hP8APdgZcxfpzJ8wSYeU8VWZMD7449xvMYpAGtWemVTMwMFXxPEQHtdfL8aVo9oSZCNFc54QWVMrJHDjD7Bc",
  "key32": "5H62fD3qycK8kZbBhXrc2Bz9K5hAQsgrMSkjEgc26CF34jLa2JYJUFq5fRvD6TJvCT4M9kqHj5t5SBQLKYNi4YG5",
  "key33": "4wqAvTfVaa6qAZrBLQfCMGYEMTJ8EcwVby7Viaz3CXgDBPvzmsfYUAoeFy5SqAgqZBP6PBv2PSE9RWdstqYcFDuc"
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

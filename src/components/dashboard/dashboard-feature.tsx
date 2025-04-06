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
    "5jqyawtoBSQNgoufiyBRWSVmACResA1E5c3XTZKDD45z8d8mpQiTHXr83w3KwobwSrBazEqLjS4q1jCAozdKKw5R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JYrWhrSCeCfVQzWDBx5bH5pqk8KchmEKbfQDHcMYwDx4RQz5Bxh6K4GXgbVeF2nAW2a5ruAxEQ6KBZm6TkmWshS",
  "key1": "5gD6oJY9cYn75ND98sZZnfUdBNrfDvhaNwsqZDECKacHimbFqykCs8RywYsK9vm7opy2SViAQbdkcSHdiYdsGHxX",
  "key2": "3sAKiYr4SWcVV1AUupv694ENhv6ncYbF9MzH1DeMnXV54kL796hU2VSjs8bB36HfWhN8ZuwNGb7kj7mKvpfQmYfZ",
  "key3": "55Xb1jkpTSsjHXPD6J87ZXKjpQCpN6R3D6FdnJEhnk69dJyZEtWBhrqooahBFPt4DFkcPRTFf8sTxZiyEPmqpTM",
  "key4": "5Gzs5oGEFtE1Y3Ha9PRPGG1ZJuhuTzfwc2LD769SjaPRR9CQx5p9LUib8rHDeez8WhBRfDeRkkqV2NnLzc3XCzV2",
  "key5": "4sS52A3BwAaXdae5eySgArNzWrNZCa4tnh3CFat5bqL4T6QmeT2quLnP3mAf1zZKnp37mFaNnSRrRuVq5DwgMZSQ",
  "key6": "4y18FPMxZ1MKsCLdLjaxHCQxKrpGgt6vh2Zx7AaTVyds6r3C1HNAd7rYj7QQAbq8ujPgv3JdYFFy7h6vZJpsaU7i",
  "key7": "3taTUvKg6BTdqn6bqHCG4MZi9EK5yBTVfBmtw5AhZDuxjzsB8utwuFZeEAb9QNpPYwNK11yc1hE6AFMhTt2CVyUT",
  "key8": "42kncV98AdRnQR8kEmbRZPqunKa2bKyomEEgbsiVFuB4ZjHHM2EwwHmTNuwttpNebcSq372eezacbNYgSsXcRsTu",
  "key9": "4YhSn4rEi3LiPwdx2s8J3vaYnoWTHVrupFEUVWnCrFBbK6wtXTEJpCL9MwhNkjA2r8TdC6zDMPJBTT3gBaWAEnoX",
  "key10": "4HGsUGecbwTWLDckJheycm34tVRftHDg2KL2MbNr3WtpQVHrsJbSWaKWpwqJGVN5KvMcuoRbQXAus9ZfoSGAnxLS",
  "key11": "4SjDyxQdXDEJDxSkt8RPxUAa1ojE5NBvASebmVfJtDW9D2HdoadvSx2dYzUoku4rcdYV1aVEh4b1XhmT2MJChMcU",
  "key12": "3oLXZKi1bsabCkh97Msri1oahGbrkHoLM2EQAftx2VLKuMtCS4ug6txvU661M7UnBDXRrvY7dLPNrXpeH1pwX3me",
  "key13": "66dEuwEBKPvBY7s2wyN58hiZuVEccsu4QvAqfZtg7VtLJYx6WUrCiMs1oAfB7b2PYdTRLdGDCTMGnWLV7cRTmTAu",
  "key14": "4tsebek4CUJwBgtUwyYQXHJpTF6J3dEZftMWzrh9AdTxJiFra5XVrUrwwS9dSSwR8VP7pRm4dh9N3rnYeeTDxsCu",
  "key15": "2Xi7RCgusJ2WWtPQWywJuFLD3Hmozk3YfQGriURg5ppLzBnQ421Sy8iHQgCb5JCEMG3FgXDNnu8suKo1C1CMBqyN",
  "key16": "4JQ1Uf4CMqTJ1eieAgj1nAW5XnXqsVxvcQQSoZhfybkavYLVPFdsbeq7y6wX8iN7v6c52ZHFDRn3ST9o1ftQCVDA",
  "key17": "3isb6ZhXsYWLzxUC6tA5zFd6nA1tThSjuzHoU9TQc2d8UqjcMSY7P8sp3wrm6X65sv6PwJGUeCySwDhMCz2gTrxC",
  "key18": "h6yJA1uXXMSWpMavQFNVxtyEoF98Ji8o5LwxYVQygUMjYf4MFwm7zTfP1PnxD6SVPNdMZKVPXHsuzY4VzYT9mJF",
  "key19": "23bWvAqSw1KpHrXieZT1Md2cLrBcMsD2ADw5MgjAugrHY3Z2ZzgTG1YzZWuM92ugfe3R5PBZ9myeR4bd3j8kXvPd",
  "key20": "nHH6nC64jTRsX4D3RF1dwHNX75Atjux8NaYfxJWXdixgh4CYzEibbBMeEE8r7RQKc5UYdgfAgHDu8wnvb9qnMP2",
  "key21": "3Z5a7qaNDCA6RMHu1LDSZ3zJCgZmJoVLey4XubkLWNu1VELrn8k7iBrmrHwURRxKkCe2G3cHh8cdSiMgVppW5Moj",
  "key22": "5seYanx32LkimkdyHHNV21r6traq4ngRvyyS14BNJLg9a2XDxFXQDBHezQjt9XeiwKwBa4U1nodUQMX9v1kq7TPe",
  "key23": "43Bk5RNbgEQhLXAuqgWxhLbByphDoKU8mNE2Apbx2t3u6SWXTKNMPnkLw9J9sb31sawbVhSrGpdtrNe5aTLYJJ1p",
  "key24": "3aJyqnnxrUw5jci9vHkumvaaWimbj85sj4yQbZKeXcTaamLoHwNxC5R3yXAmVKxhV2SrLjuAFECRPrYSSjYVefGp",
  "key25": "2674g5MzjpxiYfETnFr9LgW7cBmSNZdUC8zBMFcmZjJjgJPyc3MJQg5N2rymigPoPys69M7TpM56V6VwB2RiLB8o",
  "key26": "3qMfFSxyjG3b58W65jdu7wLQ75WaBKTVtPYsBZo5CWfmq1R3i5EGuNdrZHdLq4t7iaciQrH4ZJ8dT4KyK9XU8bZB",
  "key27": "3vHZPehuuYTs5jnaCxpSvGx7nEGU4iwVEu29xZ9qfNm6fTr6FrPbbMWgAGiFTxUqpxVpbvvL8hudgktQWJpnZEEo",
  "key28": "5jSQ5D4zTuvZ1QFCmNLm3XY2KoD9WyvN5gBZHnvKXEXyT2vX3PoWdvDCvX8zuj2QPnNtfXVufcCzhqKSoQCrGywW",
  "key29": "5SgQ6D9FQjdAxFEqWAomHstsW5yQUSfLckAwt7RsiUk3uK5Zjw2YG6sjTfPD1NBNncjVGFziHHgxAQWTMWPMLBfv",
  "key30": "2HctZv7F9zetwSBc4up8kcUTmFFj6TNHVhgQk5ya9Jg4pV2Vmf1ThuSUMW2gkRBmU2B1wa7WNzBqmPxLVnRpjrLX",
  "key31": "5i54ih7bcPL6Fes9V9HkoEBHeYxM4YB9KYcTjaPRAR1GAq4n8WCeUy5f4XaaZsWv6veeQCKoTgamPDY99tYkP8vV",
  "key32": "53k1NHjgaomNS2gUwGEFyvQ2hM5sXtHHZwpvTVZXCwcHkWgkoyK2QrAxUBcc4WSQEwsVFAZv7UhrRvJtiB5guRaj",
  "key33": "5GaAtS882WynL3Vi3vtwzqoX553J6aYgcvDAJ3PBypnYVShYod8P2CHHSF4p6aMo5gwbDAe5LJDs1UkdZfwT7TU5",
  "key34": "2K8XZ4HBAqzgepM1owaJF67UAy4htP8Sy962318u87DZ6kTPmQ6VEoCm9RUEfGq71CachxxYB2z2ha8pj2iceWPx",
  "key35": "61daTM1K47mCMKz1T3SDPqJnYFsFLiEUdd5NjDraZBMG7hd2nucjfNVqoTdPnsJiN6rnSaxDQLrunwL2fNPPr4i4",
  "key36": "53ewcFLzc6iEhWSYgAjBXVLjeDsnXpuvh57i22kx7iYEuNvKCKSf7ZrDC45xJQCZAez6dbuBfMmpPTomC8uzRbVL",
  "key37": "4thjuc84t35FtS9XpRetH4ohd1bmtBJncDssxMzHKw3CVPuuCytdWMqG1quUScjJCELmbWoXjsSVVdJ6fXdFP9nR"
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

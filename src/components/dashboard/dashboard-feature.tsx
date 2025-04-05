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
    "SmboNP6FC6vkU93ApWbtZXTiWgu9ZbCL5yozJVHcRQZMwALV2KgyuhsYz8zchJF5tWiLAk3rh4hzzWv9ZxpZFvJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zH3WRM4kyLVZui3YR2tAWxvBsqa3UQQ3i3Moo3bk4CEPmcSQZudXdiK6Mfa7vrG9wdiqSvKdCS7J65bk9r8huss",
  "key1": "5xcqnHiCrw7EPPdAXmPm4ymAwjPyx6uNCDVgPpNeRn66g6izAAQqW7vS7neKhG1QVjUPPA3YShvds6pHt1JkUPJY",
  "key2": "2o2efo2Jnby74uWqqTwY5fzLbPt7uLekEpWsbMJuJeY2eC4NPQEsYm93PJJ56W6kgZ8ZoKULgvM9VbivFdacVNkk",
  "key3": "33KAwPfZvyTN8cm1Rvzvp7ojenCBEg8QXYhuos429cM9SEvct9EqQtJmnvYCUDMutNAd7v6ofBEBCukGY8jajz5T",
  "key4": "2XxyVq9rCnxunopYdCHooFjry2coQ1WVZzsNxUjtKSx1mM37EXGYGX4y6s7SqeYjLCAkV6wJV44GVo89hWDdShPB",
  "key5": "4UqL1S2jFS8wXgZG89bde3TMkucRdPWjrJj1xHnrGQgf7kA317F9FM41bHpeVD64rL5hQxueazbeU4YEayJ3FJta",
  "key6": "5rG2zyQbPjsrVaDrqQ7WDPWjSB5wxav3sWZg1dgT4VR1f1FGMUp9QwnwZd8rpP2bYbLgSaPYzernbrN6BHm3BEjj",
  "key7": "54A3nVTqbqAr8wNymhmeTbqHNCKEqi3rM9KcVRcDahAiujzs63ABmaTYKtp3cxrEZ8oC9ERrYAcTGgsrYoyLmWeM",
  "key8": "5eDt1GY2Cvze44m4cFUTRMMQJFn6pn9N7GvAEiSzTokjESAzr6qUWoH6pfFi635J1R6kjceu9aXeeZBJxG9RoUAY",
  "key9": "2V6eT3cqJ2uC4dxw6i7o4HkLAxEtREs3jPdPNcFbeR1e11rhSMHe9pXCCG5XB3Ngy7FAN4v5nzN49x8g7aNnEyjm",
  "key10": "34fVzSYTuM3sDs5Tv2EaRjk642SUStfKSmwxGWNZPe64zkJjaZyze1XEzRq3RkJwfy1yFCfmWh3KsmppVbHP8wKp",
  "key11": "3B9dVTPpNeyfFJE9eQHjHR84bkBknSCSQMQFaVgPauyvT7jDNVX1Pfn8XuEVhyfkC4i6pTf3L433vTYVpy34FCt8",
  "key12": "5vPpb8KgRw14AHLtmtg1KZja9ekpHk3ZNK65RZrAXQbDjFA1SdVR1Kiz57MYPs8Mir2VN1sqftGUVzqkoK7BE4pU",
  "key13": "LDXAad1ZCgfHNUN8MzMjyeCyWS7CtYvJBKgAMCbXZc9Wt5jgksWRrSJpEbv3kA8j73rVtosimaX2VfPrnvskHp1",
  "key14": "5eUxJTbKqyGTedGtk9Mqr93R8P6Eb45YLjQNEumWAt3pJZ6kDV4WictfpSBdsp5yn7CbDuhWWYRxGckRo9ko4wK9",
  "key15": "5t6PhEJk4nS3dBuB3HBCPRgEnRPixcn5SRyDFLSzFWjegCLb6AU9zKhBj5aqhREtxEPCdMS21EvmtnVv4RBK1cx2",
  "key16": "5eWtYfaZYL3eTj8gvdLn8XtwnaLwtfXBNBmQiCB4dSbDDcbmtgsKMdWeLbAhFEmxxc5cwSZpJpHEZ94Q9EWzpNN4",
  "key17": "2HoVsti1g5C5FA54wTPVPqVXcGLWjzd9exT2vXgnK77cp2E2b2xgUWwBakpiCyU9vT4dKXLocbnLdVzjYoFzS5yD",
  "key18": "z3rznP2QGC2oCzNjKgrihL2o35x5i9D3g6yznvWDCuVywZGUwqw5GQ2MkWTmwbt5sFxhytrsa43qPiZGXu3crn7",
  "key19": "4AP6sHqQr5rgQrR27XqeFGbKYrwdKSJf6vftJkp8VPmyA2xyjHjrckbrXbGDfXbYX2CiTdVRUv9QQwwRb6VZqKYY",
  "key20": "2ddsbzTx946M11SW9MmXoDR1wk2T67oHsH8MgVd8C4BKkauZccoVMmfpFKiwpoikh4wshP4YUz2cW6DjUPZrRkV7",
  "key21": "5S2hDLhwWk17p64fFMZnpKv8hcLnz9BRW2o6oTzFWQ3UtqjMJeMiC2u9zrGEepiGaLashTgCGbNdVz1iTdcNN4ZW",
  "key22": "s6br8QVxBvnTvw3BdVynLEjpY3UnMXxTiszgd8k4DqoTaDLfak7TvxJGLCk8iPvKLfBSkcNCXzuzdJ9ckpsJ6f7",
  "key23": "KPbcX3MVxVJhkfyqAYWfiwfGMEDpPdBU8HgtnbM6LzYsNERnoUeB383P5dndcun9Lzx3xCjGn18iX9MNDjJaneJ",
  "key24": "2hwbVRGcaNg8nGupCr3Ur2WgST1X3rE5ADkAmnqFREe6fdfUHRZKSFxZQiTV4GbS1YyAMoSBb4HeVhadEKDXU9zH",
  "key25": "4b7Twywo4aZeBg3oz2CCi3GTpZjyeVE1G36pxVnotosr7fQ3s3EXBK5CkYEr7gSAsdNWZY12H5PE1pWwEMABBCPn",
  "key26": "5PHh29zthAyeFsggTEXSXVMvs68qb8voJswEBkbqo1xb14bKE5Utoukb72cdg2f3nwiCEzXFd219hJjzsAaW6u8f",
  "key27": "2eHYz8eNpnE3Ts1Y2mEBZKxyTAqstr763PrAouJbeLV7YQ8mobkWynvdzTiKALLJaV4X51jGX3C6PV5LZJcYgGSE",
  "key28": "5yP1MzC24mnQfa1q5cWrmpUwQXwpihoML1xagT2AJRDqEfpE3PU7gZvaJdjhVo95WSkZfXKXjC6Cdjcoxn2QdPUP",
  "key29": "2zqpEhRmAdD1vn7MD7PTLsxVk6qXySDndtv9Xc2di2SEXsiezpCmok2CeP6HkuUNmE3z1Qiuws1FZXn5NeKqDne",
  "key30": "2Y5QYwVzRUybSY1mj17UZiAY3AG1YTZKSj6akmaJsGNd5AcsYeQ6hRC57fserLR4DNcjnKY24eAWCDFoduGEqsdv"
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

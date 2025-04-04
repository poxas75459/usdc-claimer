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
    "okizKJ3SPrnw83441THtejkR9hyfSLGFBt4aeVdTxpgYAWQTHS3EAMQkynLRsWMkowkeuiDL7YAuR2DmWwXBGEF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DuqE2fmnmHg5LSdow6npiV5hfQLkQuVXsok5LumbtBm89kjty1X9MXNJC763cDE5j4dgSdZNGh7KsA9shhRJmnG",
  "key1": "4wjTkZq9jcC1RWg86HKhz7R3KqXNqU5dKTDVnm4RrLkYnCaEfVxCQnxDU7YHYuLNo17KnXG4Nx6VSiSJBt1v8uU2",
  "key2": "qNRmzU1k4uPiXiVRPeTqEc6M6jkmpWCJ5Fvxq6eV9J82uQw3bn2cX2HfsUG5bNxcmG3Hx6BaMWBJEMRtLGFBpCB",
  "key3": "3gPv66Bvj5Qm66sgtvCd4Vq533Ugwa5m7PvgDLGdLQYouC1CGZXGrtuEX3mDtiigApEp5MBWJt29NhqN1DXni88G",
  "key4": "okhJT97eh6DfKNnoY4aAosFogtLA4pTpzPV2rAFB4M1QwA8iSKNPZsq8GGzxaAbZnGEzvc8uAs7s3nXfvuibxaQ",
  "key5": "3q7UH2aQNQGQ3bY97zgCx3ATHGWA5fDPt84ekabZUf9xcZ7DMg7bg1AqMjnML93JqWE3JxKqq1ZZkU6Y6h36Pipp",
  "key6": "4gzkRn4nnb6USQSvnXhmqYFvGQw4B5JLUaY1n85DLeXYc7GoFmpNCvFEK4uDqvvgyiAKhXhzTvgSXUBYzKc6RpwP",
  "key7": "5Gw6h7ZDodH2zjqeX6Z9ZCvWFGSxYCfPZCFU7vKeu3mc77n9s7ahNq5VTbaE8EN6NhSq5YACii7y6bNcwt6vWfJc",
  "key8": "dA5WFdVeeSXZskJtfCDJ8vDE8TnHUUasg35zecPbvbWLN32oC1yYhqBhSQ8irbhAZv6T32dmeVtPK5rfX1C7A4g",
  "key9": "2EyDPf8yx6ADQzbCPucuvBfBgmwcXeakMGRbNtrMbs2g73Fq2eBCErXn7S8UCXHHF9KNNRa3dTDpVjpBpV57ABkc",
  "key10": "64y8iATGV8BBAvM33oFx3GShBbnHMm7AjJebNtJgfPt6uEmTJC8gFcgTP3H2xpVR2pKdZZBsYAXFHdoRxsLvVywD",
  "key11": "3MoLhXFzcWvhSLPxmy4FND4bjqSpea5e9iXkX9jczWX9tgM1YtwY3Rb154MLGbRdjgdTNiHo7PVBWumMeM4NfJLJ",
  "key12": "2UpExwFwJq7B7YDGofNguWBGP4hpNQrUFC8yzUgy3Kr4y4AJvCJPoTHgGbUrtAtnBvizq6usdd7SY85V3LJf1m5W",
  "key13": "3ZRzgZWvjxVFnWiXKY26ZiitEzy9drEbtuAW4hJZ3swUpogvMbv1Gg52knbSSTSs2QmDZ5JYcqt427jAg5znD1Tu",
  "key14": "3ToH13Jy7TLULmnpuMnQSzM5vdgUdX4Bu5UHkBzcgYTUt3MneM45GS3VokxLQx57msYYkMwPVomD8HUfppC8XpFb",
  "key15": "5HVs4QRz8PwYr4t1qc92zZa6GdsyCBAsat7r57fsYeVFSUX32cuXm96eAoKKx6NxzBHWNx7f8mfa4iHf7NH78W4g",
  "key16": "XVasGKxoatJogNZYnCurtdfyepQJqJEDZAPo593XgPgF1BxsSbZxdBnU91mesamBz2v6jUJTY2yUEJivRUdZkDq",
  "key17": "44HwR3iBGB1HXyYnTSQU9kHW6mCBe1xrsZfNc7ki8ufSPhPJH3Bwgx6Q5sm6xKjKwWQ5eNJF2gD9piCq9D4bd3sZ",
  "key18": "2QqLshBJPHFFPFj14FeCmsgXVxRAnenEFpMDUDPZ6Rao9ohQsZbxRJXgwTdT3ffFDnj8gAuaeAVq82gtgn9gzjDL",
  "key19": "4qkqSP2S3Vmt1VVnKBuZoguaUNXPV5FerpDNMrqNLWWAgTUFN7ofCsgDo1b6vnMBr199uMaK4NryBnxR5SpYgW6A",
  "key20": "49cUHEj6sKtYGtpCVxW37mSSe2qnv2eV8hvBh8qMpBMqAokgv3dkd8ckGK88ZV7wBWbV3FB3ZV7z87k26ad6djnT",
  "key21": "3rARtnJnzaENzPUrkAJfAMSpv8L6yVQwq6q6eBFUEgKNJxGvTL1rGa9dUf53kHtPbC7pT81JNgembFELummRVoH9",
  "key22": "4SXJ6e1tq5ZzEzDpfdj48zbtDjzrXgCraasUEQng6LWrYq8rjwLUgZQ3i9oTeGWRx62DwtX2BGqfdcr9Y68uRdLv",
  "key23": "61PzERfEbcDkMvVqCg9aXTqFPzdfbbu9DSgDWFGCe9BAZguu333fyQPAgsfBBiAShc8nuwFDZV7V3husPRnYk7mW",
  "key24": "343YzXnoV5ZGqdpopy5DpQHJhxKBCVDJejKv6ZLcMk4xYUxVsJ3b5skRR7G1amtqczmJgvdXad4GDfJ4xFWkawF9",
  "key25": "5UddEmPMg69he94dCHGrJQj6LqqYeHJ19upEDRRmr3gMSp6epFJDNmp7qBxBG5uAKUJNnKomTGRTgoSBPsdiWDjd",
  "key26": "4caGy54ofGr1VCgtc3uVPUgLevvgDb5zDiSuTP4u4XuGZJvU1F4KZc1mTgYHNYkkZxV625dsvqevj1PNRbD3Vjf8",
  "key27": "5FbUAq491mVpZx6robfBPL1SUGxueQJpapmw3PdWdc9GkSzNrMsig1d9sB566uNxQpuvG8sjt5HCc1vg5XSWg7xn",
  "key28": "4qkjv2na6VbXaNXzK2rj9p5ixcVsuBA7Urbmt4fyX36JdC1NzPfFFmpjaEBYMpJG9mvc4iXd4L4vf4S2bKoLEW8A",
  "key29": "5deQQWt2PxjAzxMdu9JXsgJbGcYxSUZtvn3bUJQQbraQCqThZMQjAz8TVgmyVC3owCpc3K29B8uLZcRV1efBj9PK",
  "key30": "mXbCYZH1Qf3saHhxxFTX7PvoA9rhWugE4MbtA9BuFxpuiRkC4uDthv9i3GZVUVECWgBPRu47rKCo3rE65cG3MTv",
  "key31": "5rc4LfZnrSGbQNq3CHCgnFPDXYgewZ1ezZzsxQx4qgTgQa2K3KLwPr39hwD61cHtCyiuBdv9N9CpWF5FY5qPxm1t"
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

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
    "5kGq3RvKjiwYYAWcouv7K2KLtgnmftW3E1L5ZVAqrcy9pzZpQ9xDQ1hJke5SqqartaniCc2jZai9Y1TCa8KhWhWN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4muc36uhHJMzXNcLt3khYhuV4z6oDmpi9G7FpNoD29y3kdL5nbgsgtGW6HBbQyeXy31xJ4YV51WPF1Pqhivo5sv4",
  "key1": "36Y1uGYLE4yHwHpic6n11ybMYANNg6mQaY7AnTgDmZRuJVq8giZiCboW9xvCV8e9SywH7qPkJ5MfGYS4ynx1VndB",
  "key2": "3x8vxjznNUMBSy2NdiMMchGQug1Cy9fm6JX4Zb5VPJHNS48BmVuhmzdV58zYLpg7gW3RoYpXpZCx8y6kanAK1H23",
  "key3": "WLQHhe8S1Nm2cXJbcg8qRzEX1TadVyPdLfBit9y4WvCGC928utQzbioANRJfwdeinL3CSh5S6u2dRsnybxPzxkB",
  "key4": "EQYamPJXjpDmBtGHVJ6BnBbpLUG49xFMBhZnwXqpCwAJZ5GHRfMm6xS2VhyhmmaBWoG3oDxQULe7VUY4N3iEWVv",
  "key5": "4wNNTUFsjwNUAWpyEe9S4B8EdksjJ8tgydkt9HmsHCNU7txhNsToNvWskKoLYgM1RJrqiqHteXGpmqDjL8h3Z3x6",
  "key6": "2yiHHiCewv5YdkqspawZwDiDEP83AR2Li88rzTDka1BQsam99WTr9KDXeTofCGTPV2b3oMQGaqdnhjaN3UZHopW2",
  "key7": "3Jeg6diz2qeYDkXtErNSc8VRJPNfek4GcrEQoxurwLkMR9FsMN6mhgw42tLXWX872qZHCGY2oPYq4qq4mGWnjgxH",
  "key8": "NzJbxuLJvzu2poSSGZ1jMTxX7cd4CAJ2XmbE879vbUUY8egmfdFpFpPeDSQjPwwT7okttdoUywZ5ubVi8xTrEdy",
  "key9": "2ykdibSVKRBFxrLWLZCjAtaREnk9B3msgKmSgEvp6BLuoRSMiJFmHhghvP4TWLsTSzayec2rmQKqtez7KzmctUik",
  "key10": "4p3au6FYv6w74vxhQB2tLdV9eQy86r221pv8rgZYktiYneCoWpTc3yhHQo5wzoJ1xYhZJxgwJaWjvB6m3dkVaQ5m",
  "key11": "5SD6z7vG9VAEMezffEfzEwsoRH9YuTMYaPxYsdDC4BWfAj1BEaV9J3oxRxmwpiTPzbnygmB5hQrPXDN6pwmwKERi",
  "key12": "3bwSnTKu5uRXPziYkrGv2p5ZDdqUp9xB4WBGVvitWW26QEfke5Jo1Yb1uaJyeicrY7gnNnZL4QaRP2yVL4vQ5eHB",
  "key13": "2sGAZuo1aeason2UfWZ1MHuvqCYmuujYh6ac5PwiGxUv6YrpbkDnMES2DDTSZ8Vj7QPCPfLygngJhKjFNURYqe94",
  "key14": "wSJfhTFwZtLb6gjvdFjZJToS6nWVzNDozzGhJ4PsgcynDWv1pSsY4J43tzchzSuxw8PHi5ozvP5HrfQgUr3DhVm",
  "key15": "2T3PHUedvMwg7XnoxVvftSE4vxxcGaDnY21XRGW88LeFtjnz7mRmn6s3opG7T2Q2KzkdFhq8zGbDqLNanE8DraMp",
  "key16": "5cEfrokki4DwzujJvW1Bb3XR7xhHE4q41oaku9gT4KukL3L1X751dCMitHMv4jtHvgRGvFgxopH2Ry8AsiMwvseV",
  "key17": "2YiqZGyzQERTe5hBbcWiYVXrhF38PzVg6ii5mu8cEmQqN6qGvYoW3EGHEDG36zgw3A2Hh6drJQzqerpLSZcPQWwt",
  "key18": "1DcmC6Cn97MkU3R4WCetTyiu6EPJAYuscXakW2DjGy8G57yMkmruVMk55dBMghc7h3ouqusS4FNxgdQm8gjPBeL",
  "key19": "5WhzdfxZwvYy9RcqJkfHbg6WAKZoiRDvZxjuHi5GWT8jMD1tbLso8bUBq3kZ1zwKm6gUYaLSjewLcXFDyaeybUmE",
  "key20": "3L92ypTeZQjQtXvyccBXALmCv4NAod1y8sgwX3fg6XnWdKvV2CEabtbFVHoBRKQMzZTHc8MZK6W79fGMyE7rR5pp",
  "key21": "35YNgS8hP6oh8uLGwCd9sTDzVuUKWAeZcxWqmDE8STjaoAGkgcNYTbMc1ohVKCEBQqRKw9o3gW7Zc4vB9MN22CBW",
  "key22": "L7kmYrJzSeZ17t8XW4t8qXqhtx7kUmvadzipz8gQcuqrtjTtYqgFpPNvQFksXTw1jKVxc3pDfVHRF2ZqULFpoG5",
  "key23": "5Ey5mQ9e4kdiqJaGPPdyn1pESjDq3nerUtPwP5rP7dWREviRxzLXbAgokjsoZahLR7dVF5cqGWbqMx6QvrXAyDYj",
  "key24": "3rEmR97MLGDgnT4pRJ3vEwG2DyPDm283ZwKbPMHgAYUjvMSDTwuHk1kDfcKoN1XcJT1oCozPWRwfjNRmDsZfLDuJ",
  "key25": "21LwsDLysmaBVHyFairDv8jydspP9KxTxDfdT3tL2rvR9dZ4MZAFikNR9zEyCFZfRmzxL11CSq1LHpxd3rzbFxzU",
  "key26": "5npAANpnZqru6TSY1xGPZVLudJbVWZWx6KUrYfYtr8YZZJa3f7X8ddFp6d9KGJAH9yWdSPfzcw2eui81Djmzhn3d",
  "key27": "2FY3yD6YohFZ2nCLH4DNMbpv8nByNZ5uu1YAC1GnwcNWr5umuA7HLE89n3cR5Das7bqCLMN1uSV63p5RX4xcfxGP",
  "key28": "4xby6LfQy4hhteypPiXvXLEgAsAybiZAfxkabg45oTPW8eyHTwVT5fSi1BbrC6JR99BGw1etnkbBYTAjMK7HLAEE",
  "key29": "5yJxLzj5WNDoFrheMGJGZguXDwDEoVgN5zavFVDi31YjP6RwhymTAzcBLzTz5HFrEtMESBiPvpgQwFKufaJMXij7",
  "key30": "5Br2UfNHHu9xfrmxWPTq8U7YPdPcyp2dieMNKG84kwad1VMCdEjfiLHMTn6PhyyThcPLbuZ4NkUqfcXhwcovB5ma",
  "key31": "5RBDkuK7CUsPHsfnhJg8K1DoCMj2gqs7T8r8SxXvBuzb4zB8mebXgbag3dXTkvL1DM22nJygVLN5XnvDzKzsBZ81",
  "key32": "HKU2Qq9fvjBbrZCMEf8Edsz9oYQGjEPe6zwFvBCEsyzJGJk66M78d37fGRMLFWMipsdUQGNTxa8tVRpoP7B4M84",
  "key33": "7rmrGLHTb6PfJh3sB1Q8dWXyfKtovn68HgPAo36CjAXXi9oevXaDnYNQqRKoRyr1KgzYBpKFsza9t6hGST4w5D2",
  "key34": "dg1FciksmUr8AsihczMh9tRZrdkJRTfFzDaZKC4PKQsH11So7XxniXzZ79zLJWTbC5yMbQBnuPb5DfdPoh2Fsui",
  "key35": "2vn3yvMMGaZoD9v3pcEXLBVo314Q2vfaHuDJkjkwdbQQ5Jeec81egB7E4ro3XY9ZyF29WtykbMEMqeS8W7oVJxus",
  "key36": "5tEeXjeSiVCuVpN8bj4zH78rrQSSxAziczVheLaEqucdXSvuC5UjDLGBfXnqAshYnkhN1Epvij9i9Zb75YqRipas",
  "key37": "RTtkeCJASknBf4kNvj3egopXbhra7oLR2TQCvrCSRSCEFevcaVdMnBek84oUjp9Y5jRg3s3fUgc3yLqoKYEc5f6",
  "key38": "53Q76qhv2FZ2oNX3fSifu3jqXeSohHKHjyXtg26g8d8izj1RReAPNvB9i3HtUQgHghTv7WdXk8i8Cg7knpRthT4G",
  "key39": "4dACjhkF8ixpuVGSYsYC8wWzT95jwo12EzYVJSSY67qyyp8o6HFkPa1NYfaEiUng76nTirU7YARggNxLm7PbFVrZ",
  "key40": "J5GA2fTfhTu2p8gzjvAMJCCjB2b5RP2MnLiyQmAvMr82DTX6t3TUkrdXmq3nohVZXfeahbaUcdD2mP7EBytm8m8",
  "key41": "4tvnA938VCRAzxFzS8DjkHiMgkDUvVcGfks5cZ3RaNcvLQPtumnem1f8Y8Cjj3NXGhqEKC7DQkhg8scqevCfnmEa",
  "key42": "2Gm8mrE4g7drZqj2tzFjQtt2kzJH92776HQYjMjBFSKNG4eGXmvFFnZPRL6dcCQMCVUc7fojYikN5U5E7cEYA5sw",
  "key43": "3rJrkcxxuCKVYjgbZACds23Db9NyoSEsMcwyHimdeXuj8kuLeL6325AK3GQD3DxZo4yJdRJ4xB9GrJbcV4vy2s7b"
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

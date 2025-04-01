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
    "5DKzjcH5wquQL4YpiHhJb2BwZ7Nw8UU5h4JtwTBXzKSiZZEKesyg2SXWyxi7N3RqvDVTNutnSjYA6k9fiZYGxgKf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aYwRw386gHt1HgQRRsekiwm5cm1Pn9KHeENKPZL7Lf7DfWV3Hs7dYPnJ5DMwXjL8rYRLn3WwoDQRSEmBqgbcpUo",
  "key1": "21AwpMLkZPsXmM4fpY9QERAbG5u96b3Bhw6MSzWAZ9ruhprCbkH21cCkJwPNBCY9htVsvt1sRSdtaRK8Xzdm7PV8",
  "key2": "3jztSsAEXfSgrv5631JQhAQX6sJSYMbXJN4yT9U48mWeVDCJYkNoUoxR5RdQvkcqB9r2Fu8uXpzmuxCf6XBhpFRE",
  "key3": "4J5Zc5G2m2vTLkadsLwPSxw5tijFTcp3f1ym8dQPdTDcF56dB5aBKPsdQYJqQhSeJp8brWFMB88m6HqW2ac5awma",
  "key4": "33zmSwxJoWA8JtZm1dTRwbpKEZwnQkEo3XfqAwe7JtcZ9gH1UxSrrBG7DEoUtpF4sGHPSTqoAwYS4DsBiMxezykR",
  "key5": "51gSpw2RmE99vd9PS8HUXktPMDMt68prujgCAmJXXc3eve2LEdLVP6ghJmKzFZeyN2ZVS9B5qx8LL8t6g1AXem7Y",
  "key6": "57aNGp6kBtsTJFCbxGAc9hoeg1FPB4m711KG3JGFwFTmawXNNgtwLEAJmUoCSmKgx5UkKYdQa1iFyZ26dpULES2q",
  "key7": "5Zichduv2Tc61cVJM1jfMDQ1VbmC82jiRvKiWS6jmzUbfuqpyJ4Cic1g8M2u7HBLsAQG2zJA5cQgFtR5JSv3nYDs",
  "key8": "31qxrLEiY1ZV8CWP1WVSmuPxKYy8AUQiDB244NyuKywXrLkyUVqKHsS6Eincpcd8HQ4gT6EA3aSQfA2M23xPV9qL",
  "key9": "2TynQvMNXn5ZWWwr9hnvgaTpaBPUKFMGPYKWmrVc6SXsEjZBqzqYwHzGdiqQufNBpx2Ai2Ha48FyfLo9GYwYzZVC",
  "key10": "5jrGDKiht7TeJkqqGoXeJBtmb3xpvrixop3kTnX4U5qZF52YqdcosPwHQwK3iaWLYh4Ku9QqfiKRtvTE4URNYUDi",
  "key11": "4aEDYAKyyWhEZxjH8x8ctycsWjXmEnLrrhuYrnsLFkhnGNKVfpaKFu56kYr9SPmiXFY1MdPVtoFGbkpmoiSuLq8z",
  "key12": "2QPzzaRE62WiAfemwYknmYKnZfYyMgyYTwy5E8tEMGFF1ZtnTRHYKaHGhnincEGof3iTyhywugwB4z9WxZ3Jaqi2",
  "key13": "5VUWtKBbuaGZJ7D4UpC8Vx3HzTZL33nKWhPUB3aUj1qvupBkw3pdU4qm8pCjR3GDimmLyogj6kNVCnKKeozewq85",
  "key14": "5iJUwqQyCQDxBrdCoewiAt8NeRAnSjeyzJ3LgNXztAp4acnUyweDQX2MaqVMh8PeQYJkvLUoGQJZbrZdHNA7MgU2",
  "key15": "3FtcgunW2r9mmFmuUjnvZ1TdLnHWtK3eiPQEpvidENDWYRtRazmEVF2Mybz8Y4JxzjFA23qU9hXUJ2RPvTCQDnnU",
  "key16": "3FwvnsQL7BLQ2BnYgCfYUxvSwQFKTRQCqRbzGHT7ih7FJrbDY97TFcaWJiZNE9MjsTvbcrWNiWtbSQ62XEFsArWz",
  "key17": "289j21zKVH8FsnYVs9JFov1BPgV2Gs2W2xygDHsSThdNxH2gQQ7VduNB5qrPLsdjUndHdbkYM2LU3ps9R3kqr4Vc",
  "key18": "398yMEkwUix7eiadT4BbVaZbmv4TZxnpB17Tn8cPMmH4cCKMG4FQMz9kVUdVwBpWRdRRTsxUHWfddqbnG8gEAV1C",
  "key19": "4qdNsE4i4tPodEyNe1Bz194vxwdixjRix48xA5H6RAGt1apGSSrNPNYyyiUiCSxuVzUweJMVAr8vNK42dAjaZRmB",
  "key20": "ideTcw1wWhk4GPAynozn8ktP1nCsVucSSyfM4yfQjgUfa99UmL27Rhic5jSpo57XNkRVCixR9z315p5woRvdC59",
  "key21": "4gn4QrvmSkX9JcRuEt6ibYspx7KLVwCSg4sPFP8JAoCyxM85s75yRQCQjkA3W8xCBEU5Zg4Y8NYzBeLPwAxPNgr3",
  "key22": "55U2LCPcJNypK2z4fZC8i8MfK275xi4LcWUJeq7A7iS3aHdwhGtVxxL6cZ4v49g5gxSh17gfAtECZvAhSokViFq5",
  "key23": "5RhRuGNNC9Ls7P7QQPb1New6NZ6fMFWSppWjaCPNRN7aeMWeFNj5YAuKrpNqt4V2cAZ4qUnUjPcKMU3FbscVVqfQ",
  "key24": "5wDWdMgCsxZfp1F1EpMGLH3rrdLmmRvBPiqLHeroUqNfu3PQ5u9QAZ3pdX1v6FqoWBqNWBGNQKzc8Up52KLK2Mh4",
  "key25": "62GknzvChptFnLAsdwv4gLkRhejFdtL7z9e7u8PPUiRN8wRtnf4gKNXhrc5gPwfxn6fXaxatQAyGCQADdYLSUh4H",
  "key26": "UmgRLEamdqU8BbL5bacCRWeaRqKMtwbW7DKQ9jJsiU8VSnWBGnzcGRc4Lh7kmvJFYZ5eGiouF5UpC2Xy3FHGfem",
  "key27": "Ua1BxF2mBfvfFA6i9PKEJWgRes9XsuqPnS3iFfoGEuZAtBAbiAZvDQn6YXCp4vvW2cGfEreXrERHXGxJUddDHiu",
  "key28": "2gpTPSiG1LqMBSUHL1j6sUmrBdFcE6PqAdADydU8eBp4UEUHgumWg3VZ5Hi8rEmCTs1e6tATFKvTPKLPsMRmvHMS",
  "key29": "3zRJPadHcyqg43W82r1hFbbS5ewrJN7Z5SxeZN4hzJ2mNCG8JQ3A56CfikHsUWqJGns17HY7smwgLP7YTu7TjbrH",
  "key30": "meckSgSSDZwhYU24JUgFGYF4xX2cUVU2CWFrCMVyr4hTSTrbi55u6n8vVe7DqgjpwfTLDCvCoD8Cx6FJLj8VoCq",
  "key31": "4nxqyuiNtS92VLrwiNbCrSrksZkPAYrhMSneuwbpooLMxT7mfRNGVxBfsiaxmAbtoHaoi82SCUfYbnJEinzXpuKi",
  "key32": "4rWeFE6ssWzHy8tA2YhTjo1SS6KgsS6ifheCxrc1fe3TjdwBsGH7K7qCXZdzLb9ixUEe3EEAHrcAwjVn6QPwQ2Gq",
  "key33": "34PsjTBekJnTpGg4MEcF8XAHv7JM7i8MynvASvUfie6UBLeYUix5xokoGdt33MUyv64kQT9kfFH3kA2MgFds97i4",
  "key34": "2HZH2DvgLAaX4CzgxiBgvrExBtLpdDzxQdRhUnpfCmQjJStYuGSwtfAsieLGAJUphUPZzqGtg5wzEuqDZCpG1gfg",
  "key35": "5hDJWaFVkTeNMrQE1nkusz7i39bmnmW4ghAy3uWBvT9iwyEUrZexxWTx8EUBiHiQhoYN9u68tdbWz29Wn9kKyQZL",
  "key36": "3yDUuGztxpXpmzLqZWic8shbFuByJMVnLDQ6SFcmhYfbXxbLULZVcfGXvQt3zVifsQBmtvKxi2WUKKmaewtCc4HS"
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

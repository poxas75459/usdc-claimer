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
    "5ofsBEhM9kvxuLd4UmTBBnn9qJu3Xxk4VuLdprxCmpNfvaLbhLdcdgZWFNjtEG5JnE6fEapsMvhowAWvZwuCv7MW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CgPf64K4iJBHgr8LXyNtcMupmwJwyA9y4K9hw6j6kV1RYr2GbzCM6wQf8HNTx8uzefWRL8iRpoJy2FeM1oXaSJH",
  "key1": "2irUHrDH5uPskbfsimNwm8ZA221KBNg6hX6N3B8dbf7cEnwv7dHjrttPAVquxGJCG3Cw7csAqExK8DStWC7uEGrm",
  "key2": "2aiqyBxz7yUXA8kynSr1KfboA49gitdzqjsJVNzBU4diXw8pgkmei3MHktRgrtbrMwvXSEqtv3NztBc7iK3sxpyX",
  "key3": "3VW8aGC3JRbDeFuZ71fTK3QfwtzUJbr39gTSYQ7HR3Dg2WHUUMwuxCLjLJEtR3jN4ba6yE6sJ9uPKs2W4dJ4yVb2",
  "key4": "5Q1bCmDCG8xwEZDARGUdmyf18HNHVS8WFN1nANnio5Uw95q5mTEhT9Wp4SWxDRadzKTv8rhrhwYmj6uXbEmBQ9Jn",
  "key5": "41jvYXFidGbpj8EoHYSdvokZhVQbPikGnB1HU5TL8kqE1eA52p1Z19DseUkxDYfz8kH8qCVGgr55ky4aXWYbeaQV",
  "key6": "3GgFWdwrzebUZg7BomYDGzgcNoTcr4HTogEV1qR2QnyicGdoRfekEtsPea5Vq2gARKWc1MBtw253FFVKJJgJehsV",
  "key7": "cCNL34mAULh1P2d287CHsfLjbd3Vnt92dD2bJqnDpkVHyoonBkS2tBQgeKnSjAoEfZQDrDrQS36zkHCg4NqKDRM",
  "key8": "3sq94roLtSaGiKvk4xVazViiEvCZwxbDYuG7nxVVpms7ebAwhZktFsc6UDR4HFJjUxwpAADKMt37KAwqVk9Ki4es",
  "key9": "38fEMqWbNjYRJmvAYFmnGZcwdmA9XeZ9K9L5dxGsB8rctczcbwVX5owhsz5xRMWxh7yZHFTqyoJbFWgUmZsa6auy",
  "key10": "3kWztKpmC6oh7YVoFWFecyomW2ZSHxkwansbgRJZiBfSJsAk8XGzMcXfgyvznkbNZL1wW98EAkKYhYi5VSTagQqo",
  "key11": "d5mtbPnnGzbqXwgPw7eFLWq1y67eNFCLgMRVhiDEHY4K9pncep12iEGANt5LGE7DeD4bGjqJeJVxRnDgGYKtmHx",
  "key12": "4ZdtpTDMfQpWG1x9JwWoCmtCidwEKNqZ849xanw3EHsNUKdzLdkfgxMQGbeXe5ZmdDsAT9V56T3EbEPYRvzF5sfm",
  "key13": "4rVBpLrkhRS6pESSmrmai86fqbmfBsE2xaUvach5NpNHEtmgNkAqPRkueHgQNnqjc33yeG1eLWrvGmnE1BsmRFV5",
  "key14": "4JqPpLPBGnzsRGtPYcCHkey3rjC3jepeGUBARBHRNcmgoQa9FjXoKjFhM5zNHMvFxAs439qQ7vnfGSuwhMcTNpT1",
  "key15": "4SPRFkzfY31UBRCF5GiU355GQ1se69aYpUPdDuLxMLyQZn3wtshSzynt6Zx5RDXprWmdex9mtUr7GHVjaab3ZNLe",
  "key16": "HjimjrNJg4ieiFJ5AvuzDMMKgY2zbJVWYSrkHBs5SHf8oHpGwV8AWqYRP6R1YhTS1HhjBMvGLZWVnEot5wSqXyb",
  "key17": "DokUd9tA4J2eLJiWPT7UP9EN3oH4wuGK2716rsP7xNTYoRF4ufEZKtyr4KS7uYqUnozKw4tHAgqg4kkUp8mGpyo",
  "key18": "2Cst1X4Cn2PSdWJUgA457atnArmmg2271a7X5qdEU6BYmJ3esHLNL1iGyxDegzQ1goXK2hcef7D8TXtTYgVdgoJM",
  "key19": "5ASAK12MUexRjSVNusGUNUQJHVcWdyzxBhSWi8eL9NppF6vLhr3BVJj4qABRFrMto3hZ8GPQ9LMFPu8cHc9pZJao",
  "key20": "4R6STnukRenCf6wXpQbNrjd1x53R6h8oCaUoYEd7pyJvy6RRQobwSo7WqkPeUJr3hcMGbXBDm5FHWaEYtJkYg6V7",
  "key21": "2qffTy9qUWH27E5c2RZ39ijWodyppnC628wJBRBn2UePzxVvLEsehCFpneawFfuoxAnmU3mM2Dx3fMjD1EAq3foG",
  "key22": "5xmepWtzHGaH7nAi6KqSNx9TPwNtzd4QLzUNFTPHAbMijhqKNQmaWh2bxXECgMgk7FWdgFXX58SL7DGetjGLcybU",
  "key23": "juqsrMxc4yRCoBgUpm7nywsjFgCYACDWzU4LRSvBSgsMtX7bC6MS3kTPXP6apy9mByhr24baHaW72LXYgb6QR8C",
  "key24": "4iUxAuHPKhmuPGY4cCtkXHMsftCnJkv3sGXSeSC63S2ToKv5vZ9Leu2j2SLA56kAqxTw7yFUmMat332XmDsB4Hnd",
  "key25": "5DD23pfqrtRoJA4KJHzQBWrzJEzJVrky3yfuFxJGfqcHuWhxwELHaGMjHxCaume3K2z7MXr8CNwasE6fZsLnRN7K",
  "key26": "2Pun4kYP9Tf5N6ow41nXxRyNqLRdtLjQ4A69iBm9o2CnMNjrZfJjVTb9eriZj6dBzq6tVcQvNH2VKS6rHt3PbQT6",
  "key27": "4Y1zxeZrAr2NqDk9L9iPUGLFoBfDYAV7ibyzxd2HGDQhEPCLB5AQfnk1JoLsGVNXmXJbvTrqxzNLg9aoYtVkA85s",
  "key28": "xnAYCEjahAFxmaee3Txw7tGu4fHcjxWQY2SdFyiQduhbRc8ts8StmQhvU292voSmeeYC9SNiMCtaegwWcBHinuA",
  "key29": "5UgsFQ13wf1TtjAZrxHSrqmScsC9VR48bwarghVLa2zUVkH61ATFBvqrjRDgeTmLnpQXr8yCAcoUTv5UcPciJukw",
  "key30": "5G5voassQVco8hMCSDCaP8HrgHQmu6SnhdccvbKaCP5cUtXEZu6ZqXGct3PfXZJihDCXWzDf6zjonkQiPUgnAu1T",
  "key31": "5dBbbym268MRyBSetHXDbjSJrnrUvn9dqf1LTKg6nXuPLbu89YdQE6DCBXjrq5JCSusxzfKhv7p3Et6tDhb1NjBi",
  "key32": "5jbwTYw1oSHNrEvwvLBBzeX2PMJjjRXwDnVfxWevqtJBXgFNYpDYL8s1BTbjRmdMHquts2UUfXtdV6yuypmU9H1H",
  "key33": "2zjmGN7DdvJKEYYYFR1eE5ZsqVSRT965mB9pfQiMnbQUSGMTewUdjGYxYSpAxrxQ32Rg8EhJuAztDsrV5QpANH5k",
  "key34": "3xyz7frB3SJJuEmavTrNtREvtEMb72BmjcU8SydNFhDoc9HDViHWvyk5DmhuN7ucUP6uGrKJZcme4FcidTG8qcvF",
  "key35": "KGDVKWgryUPdMGP1hZLrv4kFtbJrx2k5nYkAZh2TGWb3joFWjptCA5bJcAcb97wgS45SWyXphn8xwFD4NVoBgPt",
  "key36": "62DpDp4R3djUYfBEV99Uipdd8DXoXpEg57kwpbri981uFAZ2zLsFF5ZzxSq72CBg8NsZySxtR1nW8eEcP2tbjbRj",
  "key37": "5ffnFNpk6i86LSCSVtJYZwCYYizbuZd9c9TeCxjAZHdjZSTLSyJUVCjwV7uMa5QQgaskfmP3ifKjsH2THrfozTWw"
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

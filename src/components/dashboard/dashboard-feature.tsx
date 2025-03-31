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
    "5ELYE1hKfbDQtohpA2p6LA3MJKrmEgMmU7jbpT4qMc1Yw7ZJYkNpEAhdzTqd5dtKvpSJ9tkE6SSefBRzmW4RrecF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ysD2ZLktpkFinyggSKmnXBmoqhgsGDtfdcsjBAuPxGLqC2qdHv6DkPD84Cb8PB1mrJ627C8gzdpeFnZJZfZmqqy",
  "key1": "2cFf49KrkZqSav7kbQcWWvCjLFEKXoQtEytfHgXsZK4LxDoW2ikmRzED9RvMi6vVdh28hnhbwgdcSD5nzEcosVSW",
  "key2": "25ifbBXQKiBHoA7cRqGK1sjDoL1zhEPwLt4kmoABXgVACgh9rp7dwhSjbhJuk2TebXvUYVEJK88xfNfRSvnnfs2A",
  "key3": "4GVJ1DsYVZ38J3APqj5dvPFS2cJAD8ioTW62Tm98vSnSfqGLiWtMjJKnJCrs55QttwjR8qYGyeP1nriGPidKtvmK",
  "key4": "N9LARgt6C78ECqG9LytZsuac1nLZbzj8UtkW92NCzsUk7hDG439WZJ2yMiyw4YKbejFw7hHPFNe29YiNuXxsPFo",
  "key5": "3e4Ajp85MeuxajHy7Xmj7SP4QKF9w8Q9U2HFqxZZf1qgfdySA7pVCMmT5ciJQh2A9w5NKcE1BEhMqPESTLjhXi6X",
  "key6": "vvgHUNrYMnGyioUrcs4v4JY1qKjQcyzieAK6wGGAZLeyT8bKeejNM8p5urALAVaLJnbGaRk4fZhBrps6mF5sh8T",
  "key7": "5e5yXA68xUKWFDV1FLdTTeL8vcVyzN3NpGFu4Ptfq7R4wwmo8HhAQHJMspUCo5rvSYT6R1MHLwNtgWuh5W91yzZR",
  "key8": "4bnE1XrXPz6A6EXCcMQKjpvwhrZcnxamRLFqdcVuqzrzYRtafiwSp2Mz46gkpFW8JSa4Tnuw7ca5Ej8VMvxiP6ZZ",
  "key9": "2qkTnUgKF3TxjfygdSyRE1Wd4AkAJJtKe8vkC1BDQufRtWiqf9KeRweAQPzAHJHNg4D5g4XDdcyJU8nQLJUg8vgA",
  "key10": "5cxe5zkncZ2S4pTPeSPcVpPAXFxVmnDf2UHd3jCPKkLgqpC1XoKH9dDaXEJeaXirPFpokMPNDMH975Vteyz2Mcjr",
  "key11": "jqzwfscyeWc6i6gi9r6oefh8jbLp1cZiyjUHwKEPqb4LoBLty6WmGawLNRGFaj77MpRxus2LXmyLSD5JuMCKMzq",
  "key12": "3DPL9ioVsYxVugnm48NfvsTmEJ9vPoMSbR2urGUqCdRDtXzuJK1a57ePnbTdyx6pGotTnEX21SeQRscGSH2b2sjD",
  "key13": "4tSyjAjAmPQwTSTdswbvepkryC9tE4R8ygqvEFSteUPVfeDEdQe3rbCT6CgyNyNpGG5T2cZfy8cH3pndaKojoBWM",
  "key14": "5jU9TDMCyszC8bym6aHWSZhNyDKo7UU2Ko1wp3vmeaVtAL6gFMRCBcrGo8k8X84JAmZk2GaUa2N9bC3awFMCCXML",
  "key15": "3kKzPQcEceCB14gLjKg5GUiVdetxKuFKW47XSWxutk1QRymgmgg3JC9JqZncxBovFFoyFaEpmqnSZG1pvN6Hunwt",
  "key16": "2EQhG5ZYuSuv4TQgqeG6Vr8DcXBcaVZ1Ui7e3BZpNLHba5j23NnLWxVp7FrpzMX7u7P51aVKLGD7F94BydHC8ofF",
  "key17": "3zSGxwNZyKiN9qAvufFVNyzx2jjjL1ioxyq145c9kbq9E4yR28orDvcxaBFrBK4ev5LsNpGVjKW6SqZrvESEcqVv",
  "key18": "63bk9nBfjNLWugA1Q1F4zPcqhHuXUW7YR5nCctqDkpEcrvEbZcKYBoE2CtaCyGApWtFG8L1EotkjxapubgreG6B4",
  "key19": "3GELK2r4kyDjRb3CKjCzu2A47hAJFtL7dmXoFGkjfhoEZQ1LKorzBpJD2Fx5NoVeLx4C1MYujH8iWpGTkNE1Yk49",
  "key20": "55i19VULfNMGumGMpYnCR233cGdSZkW6Yuye8Qim9WYcRPNfEuPo9PjSTmpr4SNBbn4TUm3m6cmnMWLzh8FE4DnP",
  "key21": "3obgsigaQvc44immXBSMsKjvuo2sMWBKCAkz7TZ1voEsLY1EvB6RKS72ivs46sLM74AmiHvfDak2FVmbZ7o8MU4u",
  "key22": "vqEBARGaRxaJ5gfX2KSbSB87RRtuMHapUnn7iiBP6gKc91rYLKKxUv12CijRjLoHHEseQvpfUkX9qTruG26Zrvs",
  "key23": "49zy61BUrb6eKPEoPzkxi6mNf2LLUojQ1iDBoHE9C2mPWVKSf2Rba9Q8cSXbgnWstUJPeycchpcSBC1Pn4QqZ25q",
  "key24": "5UDF4hBu1xBuCQvDkWb2juCWoNuF7GyGor5xfpfNybWNoV2h9bmABRwQ69zTyhDA89hYAhNrwqEu34G5zqXLSBxw",
  "key25": "eYq8RwntutWjUpHxiTcw62CPwPwAz5ywSDdTpVNBXJJVxBgBj9nprPYEF96eu238v2XKsgTsSTVSUBceV2P4F1i",
  "key26": "3VboZVHBuoTj7LqJZ34M1CzGwWPQLToKsohxVzG4tnAPPAiXsbYaMLjazkyKMLg5upHwGZNH41L1ETpEiQ3dXUHd",
  "key27": "5qN8kznVDuwNswMYRanxyc3QkFLcXc23rUbxUpBagGGwUkr8THFmgL8BSo3Lj6DeopbcrAbzo9KwbkDdTgernCkU",
  "key28": "55Wk8sKQ3m8GsTFxGHGpD3jnKhQdhDD6nwF1Vf4MSzEfYATwJoJjts81f8oDg5tMohMZ7nA6P154Vnb7yzrwgqsu",
  "key29": "34exEQjqc5st1Sr21tnrC9M5kyT2drx6r6XmrE36NQsSY27HQPYfvsFJU7GCdBF8oAm7k6VZ9DiuRYcVn1m7GF4u",
  "key30": "44ZV2yg79WR5TA5DdtmPZax9pRyZcoyPmdynCX3AupUUbQhbrmCXBCFprLRVr6qsAUGhFRLWLSv2zdLmnXU3hVdG",
  "key31": "fbyLPAxt9nBsK7yPxi3szC7xFzV125FzEga5wn5Adya7VV8zrCTfhFwKferrjdTjBidHVcwSdKaNj7Wga5BFvw1",
  "key32": "3jUhznLzziDUd6Ntab7rHRkG6ztVDYTLLSguPiT2wGgu8BjWUDAvWZC1VHeUynn1fXXeSLdE5tMDduPqkAS7jHM7",
  "key33": "2mVbpKiH8eKp6jQbwcx86EFGWp9p45x6qVkqXaLK5vKe4BJxeRCd2uFz2h6XJRS2EtTUwVXetMk6zfKHMnSjFyPA",
  "key34": "wErgLqqUQA7PkGdmbWB8rgo7L2fnC6nK38rgmM3DY1NJ53C9uwjA5zWtdL2o1jEq17RZiJVGLJizndSCTkMqeZa",
  "key35": "4ERjfoQ8DePCioZLEBiYL6US9wWrz8b5muANmKip6ZP9p7FcrPrZeuWkbtqYeKFtJ3cAPrhe5wSdTQfRDFjRNo2k",
  "key36": "3HPKL3nAAxgSiMkMLXTLrtApcirc3Rw1tKWbirqLAMMrqXRCSX431i4A7MKCnLyTZU2wkJ6o7HkpDGU16sd66Qjc",
  "key37": "kK8NQu9AvCvdbAPj7myfRRXw5LjyRf7tvM3Ypcam3ncrRVVgEJunthL35Toz7ft8frsDGQjWVy8sWdqGox1e3PC",
  "key38": "5vJWbfez1aoSpuq3GH72efahxehMKVBnA424F6TwJxxFyGvJ2RWaYVbQuWrzXSgQmZnqsYHAVPsWNSXG4ReAAMXb",
  "key39": "5pWuyqWJ8rVL1BY2nVm91RVxY7QhAN5utxTogv5egvEt6mamJL7HBF3iFAHQYeJANfMsakfpU39wbPRoZEYew7b2",
  "key40": "41HAtJZYKktob6JTKVwcVcyJT281RzQtLgowH7mRmn2yXQHmazHYpTBNuRAeUwaLJyAMBMYvtbpwG8aUPZUABjU8",
  "key41": "2rKVTKEig4Xczw59E6FuPf6LjS8p4hkicSQhVBMjowfKx5Et1YZ99qpi3KFaYM3btMJsPVxQ7scg24v7WLV2sDnv"
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

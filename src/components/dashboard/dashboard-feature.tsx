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
    "5DAnNFnWudHcqRM41fxw2uwMHmWgfoyZQgmnbTBw8ToRrtmrQFZwCcED63Ey5icaB3h1RipvgyYuqBnTFknxAtVt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S2jGsY9UZhWB18UfcTJpYHAsubFN2x1DKcUGzCngUt6GB3v4i5y8vwdmbZNE4F2LDoSEDbt7mFHxopvqz1unzbW",
  "key1": "3mE58EEnTAbKVYpMUN4U2jrSYueBZNgwNR8fa6BStg2euxUvvYznYQv3kZSdhCCeQnSCjHdgiPd6eg6W8gg1GCur",
  "key2": "2aN7pvjTqoFxxGnizTiUVQU7QR8CBsmz7HT8BqycXs74u2Dx49aNZobFpXd79GrTgN57bxQ1niRNjJquHk1xBGx1",
  "key3": "4cuCbP75MrqVGb1WmBCusVDgD3Q3AtAv4hZojmZEnH2uj5ujTPMeW5LPyMMCdm9tXvmLWvCBuFUKfxQgRqbBJZ34",
  "key4": "2mJSdGmysHSgGWntwiSZJbJXKoG5ak8dynBU6gLGaChxBwe2A1jeZb5QmWF9DUxf6QtqHmERNce175nsjXxk5PvU",
  "key5": "kse5qWEiL5wEEvVDT8hkNoZywFRAo8qnDWYSVbFRut2x3CoFxRLCLuNHpnFKHppGPwqkVLqiJBND6MGs8ijhPL1",
  "key6": "46WdJrDtfgztJembVoaaPA6oWuAFkoC7vftVyVaMNrkSXGaRpReJtGx5PuQ3b5rfKWuYzrhyejJUNXybSrc9pXNK",
  "key7": "yuyxea4i9pTQieTVpWe3fCb1apKKthkHH6afQ1H3hEBgwQhEybF8m2vWVBKPMvMMSiHCKpsovZaWVoJCJtZgdJn",
  "key8": "2ELNhsLoJ77V4XC2AxPJbU3jdzUKEUWVUY6iC8zdf5MVBBrwE3GFYUHfFoz6LMJFthY4E2RKxnFk74wRSUv2jezf",
  "key9": "2SwfChJ9vSVfmjvjfm5xPyh9C8z5wv6y1rDg1Kr16qsPFFFH35WcBVE8XK2k8LLERFiKjPsEpvVv8CsyY67bPjas",
  "key10": "KcBovnyD7Kj8gHs4HB9n3VJ2qecK7ENTntcNoMkAmL1K57GPC7LsVcdKw3rbUNeHjCAUsA57pBBMsBWgopdVxjv",
  "key11": "4Fne3bGMwhhtm4dGuZRqCv9HgyE5Z8Ar5zwNDet9RM59Nju8VaRpi6TqFFnyqFhZeHhhx1URYdcGzC3HnpQEY6Xg",
  "key12": "5V3m7MLsJPy1E56y8hFCWzNuedockJcDhuxCc4w4SPjBXFowSHCXxMqsfcRP8NQMWPm6d4ZpVwdGSgmLsWtuz65F",
  "key13": "3rNQGGy5vAB1KBQtcYiXq1ajqaPrPrsyGGSFv7HVA73pzMv3QAg9yAPpGgKkgMYJp3XrJ4tscZJr1NeUHHw9qRgG",
  "key14": "3eQnBLYMi6kdd5GhoTRemzue2YAgzbU7gBUZHFMFJSThqup46fwJKLPxhiw9KtryGtxGCuphP8ySQGXvYrHLzd6",
  "key15": "2HxcJccQRf4i45KVVcr6EbQvhrkrwFboDK6L4VPKRtEsBNEDAtS4NQ4PcSTeziaJHDFU52YEgubnd7t2Hzjhq87w",
  "key16": "4LHEThHmP3xiRtUZFyfCDG8EuoTt3CHTjxBKots9PYsGRB5Xp7KzcjSTs7h8iFvRkzDXQLyVMDrSm1V2xiyT61LB",
  "key17": "4QK6LrjmnGcoaKxqnnCZj1ykkXVrQR8S9Dohkbe5LBWUJSKqfpjSZnMnAuwD43AgFUSmJWc5dRekkQDSxharEgSf",
  "key18": "2vyHQEL1QCaPfF2Hz9uHCs4H1fa2moF57YVA6J91Kn5iegUuUL3UeF6SJk8wsGgvT8JcbTcP9VJBsYmP8gz9spp4",
  "key19": "q3hf8DVW5Q5ECL82YwgCJXJpeKERUvyGDPPB2HUUWyRTW9b2nhwGtrurvwCoMQ5hgiH3bRdgZBMYkXVPh7zbWzG",
  "key20": "3fcGEi6v56gfjrXjgVuksxoHpcRCx9P2AjMepAbURMdBux6ESX4uwTnrjndZBG1ZkE7ypCM7MNpBZBJJ2THC7DN1",
  "key21": "4gs2n3zCYubRs8Rsb8jMNDyAa4NPYqmwhPkbCgqCh8s4GNHdLaXQUm5vp4EyQV6eYVwEV5xzy7VvEvhDK89qnMC8",
  "key22": "Cd8ZYAuAsdLArr3GhwtvU8VfsdB1G2XfearnAGK7kQiCFY9RmnCLDZ264gBMUonN3J8DQcoVM3R7BALMonitQzR",
  "key23": "5PsZq3BNz85KoiPB28ALLHhxSarVQZbJJDyBBmpRBfGTv3ynn8BTGRKYs7QSDmu18nAqBDuFt7KHjg5bJgv9xb9X",
  "key24": "3Eb1v8bcLjbgFHKj9KVqQNkanru6SK4bd3i2hDb6H84ajC4V9jMHV1y2NDKSzXhAFToRGVRvzJghSRjV7TXkQiku",
  "key25": "5mkjtcqFon7h5dGaeJWrKQ6S9iDSS4ea5oTmdUB2aFFePaj5wjPU9d6PLAvcNRVwqjnbfv1EySey2fvWZ32QjSe4",
  "key26": "232qx5CMJUsKbNZdDapeYnzLDE5AATfqb3s7WZL1JR9Ee3KmvQkehaa7z5AR2hzpB9hosucjXSkAqj84TDp8QaD2",
  "key27": "4NxUQeqiGd3ePAfU1stqEp9Xnrcf1vtXdHJ5Vr98R76CJjDPPSL3Gj4MJVggf45x2wGpf4iEHYJsHUcM3tMRSr8V",
  "key28": "3LkTfyJ1xDAZaU8WFjcGrjpp3hnD3xvRhkJFeJ8e1ec8Pja4dudPsDsyzzzGT6hyrEJKy2quy5gmLj7WXQMtBHZm",
  "key29": "5wBZ9cndqUMjE2yWs2qa4skDiCc1RP2m1FSVCyTpcwUk87QUqZ5pvijUFQNPWt8LrTC1Yea3UuLZRU5ydRPqPpQU",
  "key30": "seeVySujZcMUMSzEy3RNnDZ7aWWPhDBN22w2sWiSweEQBA1LGngVXHfyJT33oqrrHFfccAWv1npoH4Bu2Cdai3r",
  "key31": "5qDp2L8Zs1ATN3q8XJpa2gqJnq55GYyanG6gdryMSqTs8TbvPws5SGJrbJU28ehfprFNyxUzzHykwjuB1o9ncYTQ",
  "key32": "3itjueHK9xzW9MuDPLiiKbMozJJcvPuk4drcopBQ4SpcHrAvgg1773ZWhUb4yBuBzrEkGqXPWxRiuGydprZ1R5Wc",
  "key33": "5Fhu9vAHzAZu4mTTkZUQVD6NLh94gQkCoEQYp9gBGkRcfgVPMENhRvnrJuDV9uEpJtMymfbRx7cgdkCZ2q7rNWmF"
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

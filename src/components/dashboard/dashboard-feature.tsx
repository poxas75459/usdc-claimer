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
    "4XLbgZz1qhvqSF8kiQvoQELQZNWoa3GznGwNroJomf6burZMyH96v5dLJPSnncDWgDggqSXjMEyVx2RBt9t6p2DF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26SEhPRcpP9VXmnLdMhoCdpuiYQGW9XFJezU2kXgWi9E3EmZ1Jx6SeCSP6ZDreuuXteQsU7ebCCehbZpQmKzBBbz",
  "key1": "28koMEP6AvR47wYiHrUdmKRejp6mfaB3omf76DJKAs36xy8o7kVoaMNgwH62eWAjCFbE11z1tM2npkeb2Fd1jTEX",
  "key2": "51a1p5BzoUTrqrVNvnrqCVvNTcvRz6UpdZG1BmEFC2mkBBiL8sjtnDwpjSFzoGYciT2jJDmZMQW3A8Vcxy1L8iDS",
  "key3": "5zFUFz1D9MroFLJ1gsua3zZc7vW3wEvpZ7MsRVAdum9irMCV21bh4ZYBqtoKSsFQWaVNN31s39eq9C6w9a2oJ522",
  "key4": "pKxfqPyMVmSPnJVRt2gzT3Cr9AzFJzBWRVyRPdiJDqqnCfcCgd5S5fAeubUugnamKVUxEEyrfUKPrwuMG2HTiUr",
  "key5": "3h6e1wskksLHbZddkmbLQmGfKrbuApcmLiMdueTvDqQ475qDGcrcGCzg7q9thskwzXBoGqAyhikb7Hdjz96SSK6G",
  "key6": "5Kz6gwYrDNjPiPqgFhfiNYGszr9GfaQjvMjM2HZoqjnTiYtFDjwQjJokwrS52YwqgFWVvKM6Smr9pFKyb7FP1fdW",
  "key7": "4myLibAnpwgJN4QRJut2XNemPYFSUGwn4jEeTrtWvZWDTNUyLM2zBNozCEXVzNdgxRF18BXZvQYM43UpNCTDD9hb",
  "key8": "5o4LH8UB1Ae9hzTNN27VB4rUKaNGTTzrAYLp8oyBmYnjzSd3D9dZ84nKAPNWgboiKnFXWk8bPgHvNrCvw9XTHbJz",
  "key9": "26EoA4pxmK8tiMNt6gCmPqWYXieQFG3CWeFYCJftF1Dvk2ZffLLzqvBB4fRMntvYW1BaY5Z1S92WeHYQpVtYF483",
  "key10": "Bom2dqWzyGj3yHHK2To1fSWzo7dWMLeGVPGEk7VCP11QeYVQptAaa25FWvT4e6CytZu5stxsKXYeAZAGiW45waH",
  "key11": "uT3eLF5LrUZLgMnYsPVHtiANfMu4JXye2EPhNBct5oxAQuxqwuemkjc4G6qqKG3LMHF25GTArQWLaSMWGBCuHHV",
  "key12": "2pFHUm7YeWpJthYnSg3TiQ3FtUMeXDXhi2kfaAxcNoXiAbB3t7G7tvobHSo9A8S78V3jYkWuTtAadLkF8oHJLmPC",
  "key13": "4LS9AsSMibvmBoa53Y6TPHqvpXE5V5oMGNJgL2ABFuXVM4X5TmfgmffRqdBB26b4uiJwpioo4sHWwZEkMy25gzps",
  "key14": "2QnJUhfcWYCM8BVdR5X1kWMTB1UkSx2oitXEq9RMdnVdv4ZeJCCLDWZiXSRe8TBTxjVnsFrdtL2RYuVp1LUwAAKn",
  "key15": "54ZXoG1e9xHKBpabqtsYYDkBy91BsXLsECTCoPAnfe5FhpZ8JxKU1NrPFyUDtxnDA196J9sc844C86k71MbCbTyc",
  "key16": "4NjzSPdawS8QoWapWD4frN7Rypr27zU1MLJBWg5p9umHcWch5o2DC9dF7HRtBXMG6aTyqxa7mPm7aGrz1DqSxe5N",
  "key17": "2adNdrKWnhXY3m6j2SFHDuy5ieYcHn6CFncRMXAS5unnAEdY1kJ7wTnXaeGxB8kuL74GVdUTWwCno2CTkWdKAvhR",
  "key18": "DbP7MPo7LWUroyM74qbvyv9JFa3dcL8k2R2ex2ThTzEBAJgMDLe7XZscFaJWy6LYT6Bs2xfrVWx1JB5rVcd8ieG",
  "key19": "3QhfLEsKB2ApoYEYxpngnNydTbSiNSs4Hk59pJNtQ5DLZUiU3fp3sV2D6zw4ueAFgbaBKapvY4JXa9arBoL5tSjz",
  "key20": "2QfcRXN9h6eGVSuaYf8hHDvhSeGpU2J5Au754x7QNon5538iAuHZaK6esuLG7tkoTkf5ygqFnJ457VXbohSJZLcx",
  "key21": "2J866MA89CJGVQH6CQ6TvhrvDuJQRUurVe36e6benxmztrBFHmWco1ni1ZeyzqdDXayCX29WDY1httzoXrxpNYLG",
  "key22": "52CgbqzhnhNABCdaLf5bYWmnYmSQA4p1HFW43Gn2xbz2ugp1y7cbTqZ1aQyq8ro7jCfxMczDt7dVrhHshCdVcFvU",
  "key23": "5HBP4HXu5xbQFoMbj943R2dyiy4KCLQi3JdyEmUH2Ly68hqYeWQjANZ3wvL1svYUfwTrWmYnEPw9UpMpNPKt1L78",
  "key24": "3Fj8b8fNEdMEbwHYGbUcj7zs616VV2Gi8gsT73M1GMxLjunqBdKhZwvaXb3JaY2P4gGxqpWo8qHxVQxuuaYmjckK",
  "key25": "5Be73M5LSiEg6wP3dkU5dcaYqbFDAMdFydv5uxq3UvsAguixNnv3SDi4vwFgSHJEMmJ96VjYNXZpZkAnmkjFq2Aj",
  "key26": "5iSNQ3KL7zhLw13pDE3JstBjVM2Pn7noqnQk1mEDVi1LZ6t1s2GUpy34Rm5Mfacx3Kvb3uN78AV5ndfmnXXWm1ZS",
  "key27": "3UKWsQz1nvWUgibgjzYbWfD68m4yKaeTXapTXcQc5bR3xFrXsTmwCJNSTNTVXyGP6KtqC9BaXPt9ZyNXgSMVP86E",
  "key28": "3Tswzm9rYfYPUuLh7uRye4MGofg2d1sKLWRuMB4a1MR8UFfREW6eL5WRcDLVBZKXxvEN1qvVtHAiGSoQcqnXK5sj",
  "key29": "3j3UFt943RS9MAuokmMcZMhoeHxfcq74Nu78ifnyW25JZeNvSGtRBH6hfEKfmuCiiCYyu3rxzyVaX5LaE92skUfj",
  "key30": "4CyQtw6ELaqJLANBLzA3gosehUahP1fFXFBtRCHJpX7tNBTGjoymQF3hD4PuCFVTpPhGp7qMgNoRCoowqH4z5KyC",
  "key31": "5BsekmR1vg7sgxGhaq5cTk3nBfqjNPYdtPMvvjpuiVQ2HABYfAmuDAgK2exmMCdGVGYNWfoGyiazpAip8eo6L6BP",
  "key32": "2TnLRvmWFfb7G89ToxdDJBNXzTfEzChAsACewEo6KAoTsAzwPNQeGb63deg3g2tmJ7sQG84HWjgbgHKxRsRSbrNp",
  "key33": "oD7CDNdHyfJg1PHraKsBJr6L67KQ6BSiA4vAtFPV3hexJHeE8w6JsuSVrmFnrYmYyeFRPsQTzzZViqWAy4G4mQE",
  "key34": "3pp2y9rEqdrCFmgUAxSqsbqCGTCJnWTgwsvVup2DsnuhRBzJM6kvUEAhAC6RcfUVUDeF8AUbWm3BfEeFa5wB6sim",
  "key35": "L3bxzTRwvF9D9HasbncpZeaJoUriC1BMAqiVgEiYYfG1xsE2yC4LtizC2VStdLqCMf59Y6GQZQrQw4x7mvXToDJ",
  "key36": "4vzsf5o1fHxXYDYBXvCcSfSbQgMsq1LGsov4HATfsE4EkRT2tCjqZ9QPrDRwiYXrxuS7pd5eshtQMXHrSh9DwuAA",
  "key37": "3N6i7kAcLcHep4LBbRvdgd9K1Fd7AiZNwovdDUNo8wPfFonUdgwu1DPQY28mKvq2cYqcev49cs5uBom34b1YnfdK",
  "key38": "5nJn9c6m8VwcsPbxWQmNfEsL6tqnZGHpg458ubW2vEiZBs4BH2agsmBuAYv63UCWeEUFWtEVCxtjfjBSE1WqkHKA",
  "key39": "4SqmMVAStJ4RoDKPJFe3o4XkHE5iX632nvFPxaNcmV2CVePnSPqvTUBBN2ZXGqDBWRpFhBcergHBDYKnaytrQ2x3",
  "key40": "3grHRWQYxb5m3V1K5zRmvx3bvhfYxuvGu66jAMMn82QcdqEtCYZMr62Vvmog7WCkb5GqxMbzoe4AJoynN1rD21KV",
  "key41": "2g92fHT7pidWEKRHiwTKpoQqC5B314saLHaTsugDp6KJT6K8sVw8vM4XeUwuXCx6ngkptZyaiawvdnWb4cp68J1C",
  "key42": "33b8mKmCzzT3hXPcgCLUebbMCJGaEcEu52hxqXP3gyaNVQPcUgcGBr9khhduwNfJ5Wj34SgfLmQei8zt6AXf8oxg",
  "key43": "45hsb8dqTj8dVsSBmdKL9a2KSgTDuCUCTvKgngeQUyf7XWhGkEkbodUtXk1VeViMKBdVjFHXzZoCPUtz73mrFM4C",
  "key44": "5gtZdNPHFdTZZ461J1YYtyK5NKb7ZMxg5kmBZF7GmSAj6aseaqfhYCD3oFaigibdFWbowXm2mqZfAqRTcAzqcXuN",
  "key45": "2KjwQaWQBLHRzDECZJpH8ZD7S1sptjtYYbNnrz1qDthhNUQi5smh9V54nM5xQxdcNhQkZLZK77RWXyC7a9jgEHZE",
  "key46": "45N2kbxcNHDQyY7UfhcJvuMSvxvu8dw4yQqyVP1FFgwf5p2KZQq4JcnJjXxi4w9pGpCJ3Aq6XcfbQs6gqx5so3DZ",
  "key47": "35atVjUGTrk7WfLM36WrBbRRkuHsEUuLeYNJ3dRy3bgrW3ZtFWYpQGHPtnK6CgP2JLs3vRYWipnUbmiGihZ6Yspo"
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

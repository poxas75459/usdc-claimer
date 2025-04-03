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
    "2mn1zUssehjmsJ7HEVtDs5xaKfuHP99dxVGKRmDQNBLAeG2iymp7Vtd2km7qwYLUAEGGgTfu1vLhb2boaPEEQHyH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Cya4a6ijGUhZcsfhRuUQVmxeKfk7h2NYjkY4EgiRdfseeyood6XnvW18JFoCM1Zdu4U9tkGeTGiXJFxwEUAFagJ",
  "key1": "jPxFQEZuV1ex34DtJXt7pkRGWRUDBnxCKV57D7VpH5RbGTTnwyCARGHrT7xY7ZawWdbVDKjSwpNrBY8oSyQ8zck",
  "key2": "5ex4c67LkqbgT8FFYyqaXmtxstfp86mW9TjEfnF2MaAjhYJcHRswkSo6iSMW2ZxRrPTmp7UJHayM12zYLVigk1Xe",
  "key3": "29mV7zrRNZNmeq8iPtWWRLRJSWGxz8NEmyFTh6iFWi5dvGeLtb5MbdjL5JGo18D7wEfxvkLvnWqhFVMYUkkua5FL",
  "key4": "5QpuFN5RoN764E8TSECLuS4gwKo61gbRguWmmMtVfAXc6t8JB3Dwynx7KhHWyxVVDzEGVxox5jEwiHzSUYekusHD",
  "key5": "44PNqYDT2U8Y1nihx1Ss3tw4PoiuM5hbBCVf85Thy8o46XErU573dSAwpKP17khmJTzZPRvSQRButpUGY9VwhBK",
  "key6": "2PAspasjr5N6mTWUyCxepaqubLtP9oNx9pmNQd6zsX74FGSaBsN97DLiuSTG3vAY6Y9MK1v53wfJLEHsYC13AHSV",
  "key7": "38dp2v7mKKgVztWL8jfbMN4k36nT4xt9xLoHknPZ2xg97wyzTFrHQAFDNDYRc8dMfv2gVEDBkQvhp8tYmHjmb42G",
  "key8": "2JDkoUzsZEDkEWSxFLsVCnPEVAegq1xpGxHEeVDwV5gaWHY8GqbqVT76JN1L5QnMTzt1Znkc9ei5n7SXE92Eaz4w",
  "key9": "5DVVVsWuG94pdBFkJTwz4NQXRz8N7KqpLgvg9nFYPepCJGNWjm4wcvKSBt1wmtLL6Ao2eDi4ngRG46hctZzuPcC8",
  "key10": "5gNgvi3GSUEK9dwF4tXqAQX6Sih1MrovdqkHWkgbcAjqfsuyya3TLsphqexn8bLofakwYfZWW7M8TBN1hHsnsJh5",
  "key11": "57gWBQ4RFaK65C5aAGXuCbmcSR4Jtxr3BugeMqvgUzToqa4qovD5gAFLku4KtZsMv1WMuSnJLkXy1DhQTFzioQN2",
  "key12": "62AHKpRix8QqC2rCSd5XZwD8ZNbo3hBADCMUCtFQKFpCLhUWsBhDauTJQUrJs7zVmWZNGH7EgGuXVFWWFc54uxvg",
  "key13": "3zkET5Zg7XRTz5RsrG4z92fNkh7Su9sV6Utm4hQuRFCvi5W4vba3xVcT3P8Zd3yHttmCotNPhE14a9QVrGxwgnxk",
  "key14": "3nrFZiqMpHCCgjxpGEdYdGBeGQdvHhRgJNZ27Uz9mVEcYfsz5AxkQqoRY3ZmrBkSTkNHi8FJ65yquVaKYtTLYxZR",
  "key15": "3foUqmVYnrD1mYTkSrxMGnbZTtK7C8b6HcemePcgqdKohFiNx6egmFddYKsVV3vdzXufwiZFde1JW5ax3yJyw9bz",
  "key16": "2zcATv8WwYx4sn9dsnZB1hHQTNcajgMcm6whkg65gpQJyMhKFsD2ce4DbvzE6w5989uF7BJchRw8WoXVRfRwrTam",
  "key17": "jhkYSSrvsypDvcDzP2EprS4FpmQQjieGdmdJLfEgemvP3P14moKPmupRJANtWTZLphJY326PHhPtPK143DGrhMG",
  "key18": "2Ut6ZMHWqYqHgX4B1gzdYqm4ConKyXYrGkSGatymJRj8PXmhNk386AGWFF6c2SCV84dQ6TbQL9L7qeivPKL3RsXX",
  "key19": "3zXJ8MmhuFTnot2QY22CbxChbKXw7DLbDCf1WQa7FPegzx2UmnVttFqRUJrEzPvjSJNzPyFSLuuQucQ6TMED95qp",
  "key20": "9DjtTazewRShYWSkXrqsco44fArhLAMe68LM7pduEUtna8uyhUKqW2CwLAqc9PuvkCVmQ2ZHwPpt65DHCqWTZjw",
  "key21": "2VJyzY1KPyHEy1vbigLZ7Bw4zoc8H1Y9iQCrSjajDfubkSzPY9yYSEk1r3kSpStMsFdVg7sB7CfnPpj7g6vLTXE6",
  "key22": "5ZBpSsH3zAWLVspi5BTAMzKc4QCY5wipWmXFKXs8KdLX2qTgP3MkAn6s4SDM7Qu2RbcD1Lp7ZgYg2oLPvW5RM3nQ",
  "key23": "57pLNJL2KKeHCfhMZYeXMGXQc3MqCBKRzbStaN2VdGNTmCHYgEQ8ZmSMJGjjekmpat9rnqY87mYXQaQjSqXwPFHg",
  "key24": "2awqyrePG3dPYdxcBaNFuQ4QDzCwEceBZ4NoWypkut9HXhKajGNe4o2HLc778pm2aKuyee6bEZHNXQi6R4Yp7XqZ",
  "key25": "6UeGqyxddSCy5dBj8mx4LaXjTvjknLVo5Edq1twkT2u7JMrJFrx3SnZtutvMNvEKRfXBQ15Ysszejy2xhyziGMJ",
  "key26": "22uqzDso83WYkBwAsY6qboY8WmM7mGpf6Z73C3vdmDZjGTnZajCJTRhs8FXAuMc45xAzu6hWGWWyi2AfgwsME72i",
  "key27": "4FDECqGF9EUKKG4Rzn6GKXNWtEexw5WQZ7DkQocnQG3MPzrZ67FrXCSnaCuGmc16gtA5qytbazHUjGqHy82p8XYo",
  "key28": "5nQsL73hcFqabmQkbx3GCebvrTBumdqiwUZfvwfgkFLvkWy1jZYLrrtG6w4GbxQx5rxeZf9TaUpNWVLDbR7vy3A9",
  "key29": "245ww32DamZgyhMUxL8fMu11ub3s4nrGvWXTCn6AkHooW93DNHBEm7P1CaaDYcQTftKG2VHp2y5oozc2uLw1dDes",
  "key30": "3wfxonRFkbiywpQQ9mb8wTtpgVrg3QyF2Fxtv7bdteNWfGUUJnebq2nTCWrn4BPrN7Zpqu2KgxVdcZDwYLMi5ugh",
  "key31": "8p5WAq65mF78rkjW1B8Xi6tjyiZUFdsKx4jCYjeWbx9SJWzC6rDXzsUrQGLB6FpwWa6fXL3vF7wJGvt4YRammkc",
  "key32": "3H2FWvXMP3PJoKRxgEQXwDdEJfBSKqpK14nxDxyHysomPUxkdCBTTvtJHuZx8wj1czAWYWuuoiE31dqFazEejeDH",
  "key33": "3gHWtjhP9QNh48JLNqk26k7S3zse4dez75BAavBCHg4nKTVCNxcdNEdndwNZwAWCE4nRVdJS2QQ7k3xLrGm8fVZp",
  "key34": "4TAKzWPM27sktcohZjeqy1au84TeNnbyPSNr4qA8oWYL89SaoqcWXNWiCrBAWWBDsKucwgJEKnuM2VwHooYGWADh",
  "key35": "5SkQSjdqiptexJuj6ZAsvo9AsUWyGHS2oSRgJNshQifEhDZ6EuiMfSXGvCGLXvo1rEN6n6nVDnCzc9f7kUF9xvx3",
  "key36": "3aFG9PJNHfe37ccttvgc7BJPUZ2BLrK1ukFwRCe924EUX8CJZcuhaRufxj7mSVg5BFBn4UTHTpRsE2CiuC89cZXG",
  "key37": "2ga6RtHseatQtMhau1L7c5RtidFqvHKLrt8KPw44MxvUxPVGBwgJUPkZzDbUtt31Ys2Wu6YwuTFjuUBMa4B9UxFB",
  "key38": "48GFje1c1LV1zjyqmp5YNtpZ4bxnCA5a4cpZwEkvDmsQ4YSo5JwNTrMeC8wfbJhfdaNxTnuKALyDh5cAskQU96z2",
  "key39": "2Y62d5ogPTW7RAZPSNK2NtwZMUK6vGyeofqEWiH7b6tJVQCKx1bWwxSrrXAayJtSGMbj43HfvAzhWkXLhgq9mUaP",
  "key40": "2jDXvVn3ymyCDUBPjBetwS17X5vtmE8FkGRVBgSwkX8XdahoCcoF6So467J6D4mU8DXn4p1jdascZDmWr6qVDBLk",
  "key41": "5PTT2HXB8k6jnCVyupQ76t6pYqBxGcPKwvxJq3VU8baNw8B6J2UziwnyFcfCsEBZWsBc5XGiXo3kjrrwEdn45QFS",
  "key42": "2AiRLrSPNs73YNZA8KMpzynpe33BBLWbC7n2gVoQczaGRP83hojtdh84j3KYxCG7mqJG7zPDMzdd2EWvD8syxY1V",
  "key43": "2tF4Us1Ne6hL9zQHjfrAESkveBM89Yjr7i9vqPjkzpJaAu2jhs1zYF79HKSAMRKuXLMhaRyNYShuj7doVVMbaoz2",
  "key44": "2bu5HhkiJ4fcDC7iMo6Jks8FWiRFqMzQX9p34KH9f5iUjzKCY5Dy6XxGQFn7iHbJkGJN8gyLvCUxDBoehhU7PTn8"
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

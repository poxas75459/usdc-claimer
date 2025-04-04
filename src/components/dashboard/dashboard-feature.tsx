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
    "62LfrJcXFLK2SyGAURA7Fi2PwkcTCbd4JcU9WyjxnvnqG1NFBacja83FtWPfn36P9GK2Q3kLQkAWuG2ywEdyPyjz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E6diGaFkfC4xVwLuKV38Pu4SiT8StA4UFRQfiEC3pHUWFwf9PcB3YH67xU628crAFXMuU7aSnk8t19neEJiPGot",
  "key1": "5D9aRsnoxZ7NckjavHCTNeSg4TamT88xDKB2iWrPppHLKWsvjCWtSCazrx8fyjN1KBcZjkWZyNxuepY1mZ1BSDhj",
  "key2": "5EEh4EM2WSoUNWgmwbQGYGkzFvJXQgfhM9mRAyt1wqFf2xmLpzhoFccoWFS4JcSDC42V2XhuzeV4JWHKRD1dpJ8N",
  "key3": "67Amth92FByyo1RxrrFQRy5bTpZUbQCdNxQjpQqw4PWfAM1YSRvS3KAB9KjemRscuWfPZ2QY2CsX416Df1cjaxEa",
  "key4": "53mEAoX5cddVo8eaGkjjQ97MraKRBtjpahq56oq72DtHPGNNwmtWubaSfsFwPmaZRP7aJFPEQDhpqftQDXP4fd1Z",
  "key5": "5oBddS56fd6xzweofcKH5RG3ytLkcFoQRVDWGsXmNeSuMGTovYeUEM6yYAn6zs8BiXTnQBfhJA5tA4h1pWRL6mmi",
  "key6": "2GvAe1ap4qNRPTQNYFhcNEmBN8R8aKftfX3Gg3G18gxEzoQaf1jsoyxn7AdzWt7af9Kxwvm1jJTnrtpMzrtpghXk",
  "key7": "4KxbHsD3VJhknQkMLPZekwH5qVX5XxswccoESJVsZDELuFfPBV6NNqs2vExyv8aAVFFeMDTMFSPssGrAYDTE5RMD",
  "key8": "5gBRE1jRimQq4UhkyJFhSiCUXdFcwX4tkWJ9YM9qzDeYnaydbzLJmB4URR4LmZHU9Mjmdqv6tkj3tgVVXwXfLxQ6",
  "key9": "5j3Zm5qf8vXxJn6K384JH7GBukH9UP16CSxbq6av1B6RcXv6cDtG7VPsZ1mzd5Zoc9H2BWFbC1qc4qu8up1fgc3X",
  "key10": "3wh2HBh2AUpYiBbju9c2XQFJCupNQdoWG83VdmaBeYmV9mbnrq3BguaVcoQDDNr9ryYUuEu2mxnSaaaRvZNfpezy",
  "key11": "59YaDqUsUTvFYUXbR1Mmq1k8tN4mkMDHQGQk4MFkXvVv4FYYPc9Y4F6JYo86Zaieko9R5Q4pxzTTxVk74vPuFmLV",
  "key12": "51H5ccyKwVYw7kavxeCNxMjmVQgtPu9VSHd9HKdTVCYJ1MHhfJJcqtHC1Eq11ksXVkraJAzKs3Df2LNm1Te6acsE",
  "key13": "3PWyXFFRrVbLi7virfEgCxuawKDifsP7jobd92WmBfBB2ypgTHY6bpQncFY5SE3xX4rA58KpW4Ai7MLZvqbAmV22",
  "key14": "4KMe2DAvAveXFcf1oFmsYZdcFabnt9CfPHR4oUNqPiXyyNbigWFFTjWp4H4L2b2MrgdWfxWQGUskUe6xmpEj2N8r",
  "key15": "5UbdVUEZpnqyuieyGoX4snysT29HxgyNabh5g7hEDLxtZ4YF7eL3cyFFQsvHXabsSwtp9tsi91c77RiG69Pg4RUy",
  "key16": "31s1Pg5j7YN8GpF4YWNb5LwSbVbCb3nQ66TdmzhPzNAbeZbHV2Hy2ttepFVXWvM5dqxsdDHgx6mSwMWsBJEs2Mv4",
  "key17": "2GVbqduTvpHwx2J5RpKbddRLpLmRa3Spy6uJxCiEDbDUngGKyd66gaLtmRwgW8SUf4hD8mqG8i8MnkNdm392dQab",
  "key18": "3fc8x1CPdnCoFZt7nu3GMngzGreJJkgHYNwzyrnC5obr6Lz1hwa3ctsSPG44J6MtHEcXkywCRHmVZF5X8Y9Jodtr",
  "key19": "chk7eTfSBYGyKDAFd4n62L7k4ioXk3Z8YCWRktZ5WM6ZdNkaCb7H9MEikyaWNkuTysWxv3PgRDNEkc5azSQzvad",
  "key20": "typsioGoiigJKDR8EMJY2RFEp7kuRbEwJQfc43PTtzZvmFKW4BnyCgfxFLRcJmn5uD5RCDWMfuvQuYwcR4m5Pgy",
  "key21": "5GuMcBEuYTgvpRq28u66gPRWanPPkQbNvs8ZxJM6P9BchHNZVG75q1VtxH5rJo1wMJV1nQRdQvxbCKZ6AQvxqms8",
  "key22": "5GkNDqMrUHsQue6MqMf18nECPdzMtTLbGgqhLdy37EMv6ish3pfyWzvkwV9noSvhy8BuVcas1QXTNFC3kdHrxaip",
  "key23": "3dNuEoL9tCzXW2gMtumjZQTjxkuinT2SHYQBYV3gqhUt1xYnJSyn1cFVKJ5959qNcWLxHVznavs2GV2UrLdSSECa",
  "key24": "ko6yHr5Rzmedgxx5GBeAszycjRuAMHDFqe84XsvuETUh983LKRr5iU1VkgAosZaxB8ci1sem1T7WMSFAFLex5Qb",
  "key25": "25CDVtGfu2J5Uky6SmkK1C3yhiqK4ydW66wrUSHEQ38QcFDgDXBNnxdgis2kkB3Kp52Fi6P4ZWFLxVvxuEDgYFJz",
  "key26": "3B65m6TECsNfa1182sy3LaR6uqiddsBWgAD2nXLK1hFmbza9MWnnzs79pUnBinME5sdGQuLy7d7wALgcaKoiroBd",
  "key27": "5wMUfEGiSWe6Gnjx8UnUxaU7SPbGMY69b54N6tfPRvjfRZyu1LZnfeAis26WRmyA8JwXXcL8BVAaqvZLWFpdHgGE",
  "key28": "GbteysBAT7Pxowm22mCyVPX3k2dR7obNsuu62mNPnYGxrsQiDENftkDr8thGqotakQsjGuFS6VQKT6sRKSCYpDx",
  "key29": "33zAwYMuHULLvYEixedAL4Ukt55gUmhE9NCA8bWUkgLtxRDiboDnLRpNsxepRL7XyT325GSAHXf8VpTXwgmuMntA",
  "key30": "43fJ7fTuxgjdkg2cWNEkivfTy5d3M469bYEB4psRG8tZRC9hTAD1Q5rwBsDjmUY7THgNiZKiYdV1L9iSCMm5hjjt",
  "key31": "uuWt9E3deL8ZtFWgojki9U31MCiUj82KJTzXxsXtVkrGjmMs7Bx8UeLZLJ8FVPXcYzg4wDQo3hCeXtqyGEy9b4k",
  "key32": "3rm58SPe4p9tUjoGR8EnLpADYGy3euLeFggDxW6mmtiFWD2MTRWRT9ZrAifKgYeUNSYpapynQuMdWboe2uqsNb2Q",
  "key33": "2AKfQzwEBA6VBo6TTwvdiWLoaNkbxWoCZybpajbM3c5TX92zvS5ErgSqAh6Q2ovtqfNMqCjsK41ZbdHSrc6fQHFw",
  "key34": "5DyXfL5dY4LTw8zDyn3rnLFFr565GBMWcZ11Gk9hfGHUXYezB6BTX7Gdmb8DQWfaKynTnbHPVYatgFKQMUKoYwrZ",
  "key35": "48WdxoGnKkTF1QviNcztRdmdCK4bPVTVRzhPD6VbtbongC1ovfXpMaWfvvALnX8SYpSQSsigM6JV4nAZQMWSWqUm",
  "key36": "2yG7uLpHCvTCWZ2Zgi8d6Wyo23aLj4JSBgBTUjoZyX1cdz99yvhH7RqAw1ZDLNKZnNRGGEd5cgySqXKbTXvHCzkp",
  "key37": "28UspZdvTSoqZRkEx9i1pUyBRXyZKjim1uF2dXoqVQhFo4ZcjTEro1b5qApFvnEGuwVsKcni1cDRrVY1TwHSeS7z",
  "key38": "4bH5wfCt5ANqFEAfFBhyRkRCGniGi7ynkcziAidNGsFTymNY4n6D5aVEuqT54a45TNK5bECvXVehNBumNPPWdccW",
  "key39": "2g7UgLxGhQiTTGwdXi6kxiwbUEnBXBFf2YXCFqV1M4mWSpzGwWxKxWnz83eANPDcwg4B3X8imNPyo46ejYxJ7xvq",
  "key40": "SJiYWSnoyNsEVkCmFVkULb4Y7iG7tA5kayXT47znRjYnNGZwyHjQ7t9zew6CsH4DTQj8k8BP39eNGgwBddtZg3g",
  "key41": "S84ZzZzRMj1eCdGHQGRpBcqbashfajB2pKieMVPzcwGU7E9FDyptytpoLtut3dCrPLsPK2g6J2zu5ZRPvVMRKBX",
  "key42": "w6KkW2KeC9GpAvnUqdUDHbRbyNqF48xkUvbfPAZHdPnrxWXhkvgAFQBRzLArpJ6NYNqgG6LXwuCoo3LQCUY3xTs",
  "key43": "4cY5om81Dav1wcBGjWPsyGX5tnKuZ3FkxDYVNeYBx8qK29vCSKMGrSVN6LC13hSXFAyDSC1WzLPa4jeqc1MR8i8T",
  "key44": "2js9KdmPBH2FAptvA2NZ65zFD1TA33xzSQwZ5jtcVZHxEs7GQZxf3nRYF7ENffq4NmHLckKV3p4dqQPBKnc2Dihi",
  "key45": "5U1xgXfWE2HBvR73aHRG96f8RbZByor2F7zv7HK5yttZHG8eN9ZSF3rVps9561soX6PZZcTBPhaFtndk7waLQ3ZF"
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

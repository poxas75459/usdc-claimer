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
    "2qZx6f74gBmt47evADvwp6EEE3G1kGqikPgNxzqKFxDARb7kor1qEmjG246hKSriWogDcTC1VFGPwy6H5u7e4mJu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f8Lmr5qhmaGfH16iyGQWfVqbJCNuE7nbGsJETVetTT89goMprAo6k19DK7wywbKeiJzaKad4x6cdD9uaVEvkMwq",
  "key1": "MBYT1kKCwrUCzrV45zNQju4WnizX66tDhefrzXYcShqjBAQfxRRZkB8BojWJ22r58maVGTc1azhZgNjuYYKTNdp",
  "key2": "31yd5ZjiewWsPkGREMatkzga4HB6Yyf8XtzAC1VFZv1ULYzUzA66nZi1oGwcyM5HJtLQqqHvjMSNwYsyh1RffyuP",
  "key3": "5Ee2eRdQKWZjMKfKNuHEHzk9VUuLQSpLyexWksYCHhhEthvwjTN37GqqRr5qCY99SBBuwJGU7J9CQZcKmQF1wKT3",
  "key4": "nYtwWDn4njP4F8p1x46PYNEfN2EKPfdAXWDuYjR4LACmEwMmvnqpZRRsQS376jZAA4tap8KGrzEsFWfy8ETAwYV",
  "key5": "5o8YjPpLcLaYbUAPS4UwP5NDTtudDwmSuYkp1MFLoZTcRTvBysKcSkXRPdESkJgpLJRuaTikhpQtQZqZ4Sfi8RT2",
  "key6": "Ny5Astt2eHQY2w2w7swyHVk2otVdyEd5e6sUmLdVrVjuSrkUEVjRCNiCDWcuwU6ud2C8gbVYgy8rhFuakPUDSpA",
  "key7": "4PJL9N1qyarC48HaaPo5bPSG4hdgJV9bb1oSMsxoVUAKLCTFHY71aimjfPkeZLFiwQKw5KCLaKourngNv4GbhnZ2",
  "key8": "4NP84nwLptNKCAAgmByUcWYp1ZyngaE613NMjdohbBqGeN7RiTvhKivGZH1EKKRtoYWuvPPgYGYj5ddJmzjNkcK5",
  "key9": "3gfkiQYN8hV52EGMcBW8wnzwV1BCTx32i46TgPA3dcLCxLyFSLARttN6BvZM1hURT7mV3nRTjxgkVM9st2ZDhuMd",
  "key10": "yDcL7vxicAXBYS7tJSAHtyGe39V9Fxfynf1yyZsnqqxBM2C25wPhJmTBWdWwmVdmVi47idt69zfLXyGj3nwSjnr",
  "key11": "4fW2KCmCMc2iSLrYkzn5cBET68gaxqxYWhBWdYGJ1TNG5nimVJEhMiP4XFMYYNmpUqhmx1KRoV543BTc5F9R4EBc",
  "key12": "56wzsNv2jE6aZMkpcfBTd34v8nK6aQSJ2nKD1xB61NnZamnmbajvDXAKgnNV5WbRqXKBacN2xUDGyS29j7Ro2xDx",
  "key13": "34CCRYpu1FwsdApyb4yw2mHoz1vp8zvhB4hQJSjtV3TB4mt9oAexPDWAqbTzyUmBrs5iafWAdCb2drxDutNsihZT",
  "key14": "yrsn7KXLkeDi3E69nYpm5R15wMtieBy2yUn6nwzxsChaz29a6S2cUx1rxcDSq5TzKDfmvri15nTMcZzmkyQgSGp",
  "key15": "3zuTF89jPYjJmts2ocM8HfUu2HC7NizTo1refV9nHM3X8kGZzMv1e5DUmEg5LxamHtkzD4xwsZ6onNKD4QP1AN1H",
  "key16": "2ftF6nwpwpZXFLbX2xEfh4vansEAgaugxXHFSk27jLLJQ4xTnKAe1qpoSQ5U61McRWQyGkRxShd6M7M92UYYwcnV",
  "key17": "3qRjEr86LxX3izxBvDx7WiPJeQb6K7NHkc761veJLZxCF3ByWkFirPgxqAUH5Qg4i5Xs2C5M8SXPSydbGeqBFSEo",
  "key18": "SoEXMd3SJqkKeye9kp4pB4PoZbqWuH129Mv8EqACVH5v8xTuSpRdTbAEgebXDA2CrPSshbxnLFTiK5BuszPPMMr",
  "key19": "59vbp4RSgLnoGmUGNFvhJxMRwGcqcEQAurHGMQn9a9ZP3PuytT5P82F6awvfu2VHPETxeSFJJhDetzQ6Fvrvf5jW",
  "key20": "66CVM4k4h8PKaSjwHpxRuSaAwptRdWMAcrh9gcu73kyZD3E94wuNsXkroCPjCat4SvGpNxDoEhTjWecAUBMgi77w",
  "key21": "62DovLXVGGGAkjiyzJ1JXnPGLWJgHVPK5SLwYu3PqfmqcSywKA5dHru3FwTbGNwZQ4rr5HvsRgQPgG8R6J5uGEzA",
  "key22": "2XTiDvizkJztpBTZ5iUxhb4MBs4CjkRB4Gtrv2toPM3LfYEPeRL1yPc3krN41YLRHn3d6uyXMomcaNmoePbWjocW",
  "key23": "4wVQ4CU9PU81F2AS9qDyak2QtSCEKh59M7rXTnpMae5b6AmCe8k3xFgp8CZH71yeqdTYFPiRHBrFExJDCWqeFcXU",
  "key24": "38SDHkJf4fcpNf2mXgCC9t8TfavLapksnnEDXgHH6MjaWSWFFe8qp9avwXtbyDW7EjGFH2HhEpn7xn4gxGP3XuGq",
  "key25": "2GHpJLQkiVGeGsHCYueeDFJNTc75myr5WPFvdZ7PG2ChG4o3Zgbs7gwZZQpJHFSzqBCrh4MSpHLGkW9n8bHWvFtj",
  "key26": "5nYY6cKMNb39TsXXCn8y7ffypdhWvAjNAoFv1FJLn7xquVxViT2BpyxRy8YGwyaq6axwSaz5ES5LzQy3HwbmC7yx",
  "key27": "4wjGN6cwXvSbg9bTFibKNthnPc7cUYF8C5L1XquL43WyVjtLxeP49ZpxGGcFjmy9qhdGrA1xQdoDJwSzJkNr89tx",
  "key28": "61AzuBx3Z8K57KjNsovQztMtVCt6ZDmCMjH2SFdHUpbsNX8K5dRPG7gHafAWx86s2GPDGCa7ikateamnMtT5u1yx",
  "key29": "5Q8ctmJANjYyNzzeF4D9uPEywDenFA49jQDx3qgwujXVtiBeYQDPtYX8uRHk99ASaE7KjE7xLFE91Vd6hsDQpqLX",
  "key30": "wW89EPFeioqiaw1ujJh7mZGGWMMCWHv3w34XiuDizGtpscgshCbMPGcApQnVhyngZsDPtXrx8QtHLYs76ueSsDG",
  "key31": "5jC6Qe5xcFkxVwE7mTfY4wDPD33pdTsyY6v7G3jMgcPvXdKteCHs55PSFQaNs8eR655ySFyEdzcjvCFpTVMKJJzo",
  "key32": "34vnnHLbPH6opQTPAsRP8AUJLjaHFDzGhscLedHn6KL9i8ins1goBaULFCwpFaXsT6T9k8UmvJYEJghz5mcQZGZP",
  "key33": "aF859uMiAq5u893qFA1rsdPctYyPFCLjwdEpYdpjBLQtYvKkBCkk2TCkUm4SEyHj33dB7NtFdr7DC6RA2eZNziL",
  "key34": "3oSdkNmQU66nnhhgMgjqXDVW7g7nT6FbGY3x327C1DsjDVUtKNWVoVtcG649XsWtf2AJEvbGJZcPDb1DcUCZCMj4",
  "key35": "4MyYUddXtJTnejojKkRNqD34Li2fsCb3VBdEY7pKLpFwYEstbrQ693TUgYMkwHR7JxSYQuE4TRvtV7eLUNeGH1SZ",
  "key36": "4t4T6jHqfw92H2mHzox6hW3wfczjaHiKpPdH5kTTZunvMugvgmqkSgSTuxcox6ycrkEimF6Gf5f39FsjsJEGs5ES",
  "key37": "24zSV9325FgUcLnCj5B2XQ2kwU9j8YmTBU5S2Yip9L55wdonh4yEZKJyEnRBPJFTeqgsqcxMeUAQ4bjreFEv7TyZ",
  "key38": "4dhfiNe3SmG6PnW3h9Df6QfpGQxLyUzD9LFJpuo48uLt5jUDTXdPWCXk2esHZQgePtxjHppUnPxVSgzUFr2k5bTh",
  "key39": "3ofMnrdy7wxsc1GynQKjvwdnL5sKt8kSWAgyQdBhGqUAkb7fNs1xUWsuK6FsEshafDQVnr8HKBKYUGWXhPHp9DiM",
  "key40": "2nCD18fkaVX1DfPxUdLZ8qm5jNi2qcCZijGr221A8dFtkKSa3pCiXrkQuLvVuMtALJuExEj9m2UzPvUNvDQdU4gA",
  "key41": "vyLutoaPY7arnrtgjWG2xKh4NiTZp9Brs8WcGY5E9idTpBGvQqb4Xwvcis6mSQYN719B1QNJ9w299i5MVEj681B",
  "key42": "4uyHAW9pB9Lpq7naAbb3jJ7t9mysWp91LigWKfc58RC5Ws7ZXpGfZtzB9F9FNhX6zykzp9T6Ut96guKncZCqn1qD"
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

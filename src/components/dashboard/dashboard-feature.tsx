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
    "2goYYP8XcjXsZpSW4HNNDkvYEWi9LUt4QXWYtGjc9P9ZiBreTz5ys2oF4PQ8qt1U58reeo8kJ2wDoUCh4fcSoVB4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55ViF3gPcQ3d1vySUfbHwnifLKE6KRoWN41goYaq9VSVyAy7Q6YCGCgcdf48PBKfjohuyKbJPkGBSrgTm1dJXPCT",
  "key1": "646mPifUhyWjbJu9JFtXxwL2oAVKxrFYu1iXnaXpRjQQ1zYu25UJcYaUp9mLcrrTRbrQi9w5Pw9AsaEFzDPPQuG7",
  "key2": "3m92nNGzsD8WVLpsH4hhu94eAbof6fqwmFcgTGEuEcZ98CGYnG1SnVEwjpJjZeR6Xr3oQCwUGrTtiZ29qm1JBU62",
  "key3": "nD71L5Q2xV9dhGpSku7KXGY2GeFKwmLrGkfD7XazMm32wxsq31PeAgyx9y2hCbEMuPaKugkmkRGgULXJTmpCWYt",
  "key4": "3Yt35LZrfuhdev4A2dfDJ6hMcbDnaJA6hQX1ojCX83oSrGesNszRSAiTBds6F8Dkrp8tyJqnbi8z8qXkgraV9evP",
  "key5": "4NA9qmkM3cgfaTAAT64i9YjXUcSqroRX4p9ijEXSMeXGV2RQGh8e9GpZcPiQRffJKB6k7Rm3DErHGgVZfNnv4iRz",
  "key6": "26Q4BhwXb8uVcEE7FjgTrp4FifXXvGNmNGS4HhpUTB2rTDx2qRS6nwtZ2HvXHkqukMNbUna4APnWdCaThBWF7JzV",
  "key7": "2e5kUNV1AWP5T19HYGPMzMV5WbAeZ9tAUd1hLD9ymm47xdi4124xnNbp1dAmvHJUrYrY7UDRSbt4tBGSiQx2uJWM",
  "key8": "2aWrtLUR4bFETW3ZMpR13LedkGaCo46dzguwWvEK3iuidsWHUvAEBaMQVzDYST4izVeHPTBr5okN4WCcuaUgenTE",
  "key9": "wRfDdUNamvNFTA2mkNyFVPP8e7kzsrx6xc7h3w7Amas6vY8FsYRTZ48FmGQ5mAfSr982zwR7bhhBJqAhQCen4BQ",
  "key10": "agWy2fyxvgQLukd2XGhBf1PtCpiueGxvRoTqnDUYidq4JdfT9ZbfeinMrh5YZ3QatyuyXomRc44QdDSWiCewqfq",
  "key11": "364oqVcL97f8nPTWoc67mMJPCX4pPXyCjtDqBKdFogA2H9ETDfarkLikmJUk7pLbESuauF9pzzYFeRj9BHtcpuyw",
  "key12": "5YHLC6wRXzZAkCYM8gSA3r2uraT5bfJk8Nbgj2pj1cwPupGgcA8QquKSVp6GdfSFwQMTojEjDQj1mW96zZjYjx5d",
  "key13": "nr7Z2swcmrMPktDsyXvMvXUDYjuUh8gLC1Ys3bF2iHJh3hZDZppVELqYxaUF6Eihv5Yafp7tXA3gfpFHw58K5DK",
  "key14": "5xiE9Lm4LB3TRjszaJC5ogHuwYmFGnLoSEs8B88FoRELajob52bsMHHdMCMJdTYXLcYGixfXwgHxi1SMJrMri9uL",
  "key15": "2GJadgz7rggbGM5GVtktDKrK8pmJjgv7kzsEjnsbJiRicyvbd9AdqKDQdhc8wqDXf9ZkgKBswJt1JDPq42ASqPWF",
  "key16": "S3rbSsH17N6cZERaze58YXFisD4gKWir6iQks2nqRtAkfAHo9ykDGVZCAAkcGYxMe3MFzXHSRKriDWzUwDsTaX1",
  "key17": "5n84kQDerPnKZpya9QE9UtfBQPfBkm3e2oBKuk1iKH1eodDHywrAVwCToSem4zpdUNwc2TBHxRRhMesvK4qMs5e6",
  "key18": "3k88twsbSWJckx9M7uyCCJN7Sjnaz4Sv6uTp9R9936r6BXS5XDd4gk89pQkDHCZwdgzUoPrrboPttxVfVW4qizE5",
  "key19": "2wWUvFvWh4EhwHtNd4HNeipjDtopTN2EwoZpqRWZ38dV8Cn3BNTYRLvqKfH4DXYDcxKXeEVFozKVY7UpYRMPLMvd",
  "key20": "2evTUpLs1pHabe9ygAeUPK2wDs5h3fSzyxphAxXYgN7m7ZX17cPuZ15aU5pLEr3o1abPdWS585ShchNyShYdaEKV",
  "key21": "4zVHYA2QS8BUnvJXVYeaxUewMo4wsBSXUzXXRfD383wxiFSSrvu9DLYad3TY6XG3yAcHUvqJuon1woCTLBvBgrgd",
  "key22": "BMJm7fGKPB8eb9GhYsq2uK1ccyycsfPgbLGGaC6vtsqA4fjv9PBYbZezQrPvdWaejAUg2aaX13eCB5LrGaedKEe",
  "key23": "2gD6m6yZQdCrYjzJYZ1D7CCbnAHZaBi815wJPHyB62PPtFqGnw3VmW7XnupciTgs32NhUELiLByR36BucuJvtTXR",
  "key24": "46tg893Xj3ApHA47mBc5xHXCMugeYGxF5XkUp1WpydLCRKeP6qX3mUPbstjUNbBuiGo6Yuu5NEupj68uaoZ8uCG4",
  "key25": "39MBzkskR4DnzJpLhnRZBS8WeBZAHbMeNkV1Y9ucp6KNtRksVqYdx9BVuth8Pw5TsF72kHtGiyJRZR81npSufm2g",
  "key26": "4SERAwaSJoe6tvvjYLiX4ya6qJRRpxQpeURR96VSPALo2nxxvrdbgePFBJeKHzJDVsWV19b6LtnG8TKRRFDUjN3d",
  "key27": "6YcRGZ342MkaSpiEj6Y4LhsYFiisrxhvcEYzvoGEKHWEAWcTLusp44ccJqt7UNE3PEdtaQEWme3GTFPUzGVd6ef",
  "key28": "25chxgj8Sye3tyq12UdjsGN3ADqMWpM5zZXCya213r2iWvToernRGKdAjDCMgsZGqxW3nMWZzbJxqSkBQwUp4dAA",
  "key29": "6h4todV1CVq1jGBP4ue717KDz21FmKvYYZgYVf9da8My6qowocDKS7nALD2TDUB3zfVJkwJZCLNn1GuAzgzeMCn",
  "key30": "2sC7CkajQ2GD3JrtEdAi3Wj28SpFx15UEg4kajKrBoM3QAEURmWeiA1MCPpvybjjoLB2BeMPd8zGxgqHf8rCPDdP",
  "key31": "5QwyQSRqBUVV8yRUGrFQnba8TVVzFWRzbqjR2ueHUjvwUDpmRvEpsEQf6iuV547pv9pdyTjmnmrJNWnFbd4KhWsD",
  "key32": "27Y1ya9gmHZtiMagYTCA7YYJ967L591qWqJfmVuRgA8NXXk2c3W79pET5cYjNmsZLNKAw5Fsd1vps9r1FFzmTEci",
  "key33": "3eLey9beqonLPUdu463TqA8mXCa6pe9Gck92PiixmEXuod45J4NCLrfYXmGFp1fdj2hBSr7Kfv97qdYUzZZBcm3t",
  "key34": "45jeW8QYNPS4PYWZq9MAcx2FkooJobJBi1Zkn8KLuf4nWExwU1WW1nB4XZ4vcbkEV2VPeb7SCwrGiifF33yQyC22",
  "key35": "3S3fHk7UDHpLFFuhFRH9SGj5HEisnZxUcWCJTv8cQALbsbmVMSk2DaZR5738pzuy38QDKuvUgq2Eba5vS3JwWrfa",
  "key36": "2o6zBE9QbnX3QYbqhiXankoP1TobYhUdjE9qcUcTRdJHD1fMrcRfmXC1q25H4mQ7SqRWpgBnYnQVQGzFQrAfKHx1",
  "key37": "4nCfcY4p4rm8nCZTfKHvxKQyPyXnhbPsPQ1UApPLBVffeKwFgKmmUNb8C2qxLzKnSHqkdjD8oozyn5jvqjsPLgv",
  "key38": "481MuD326mZs2k2hcAGajowypCPqSxV5PnFsGHP6RU49JoPV7JnFW8BH1iSMJcqm9xWPaXTLVzKRtABMG7knF6c8",
  "key39": "4AaNcjQBKfEYxMbX5rvqkt2eKx1TGNRTq1XiQHhEFqKVDTRVnyF5DLLDmucB3xpN8p4vW4XwRtrvyw7KUWft8yLL",
  "key40": "3AM1b8gSna23uBfdwtChSX6hygd3okvtP6LMzbLB7DpFvXzLjgHW7GSsMUdymhUdBHAxCaLwtFmVxKs57RxeUCsL",
  "key41": "49SMXR9uQ1Lvk2dqcD7KdxfaSKd8xEPkbLcrbrecxiW5pH8RmY31LQSix8BAY2UN1wHaxQDWG3YZDX4iA7s7Z82E",
  "key42": "5eS5RBQiogfXzzpxm6R7WdRrXRwYhAmU2e6HHrmvjsaMd2XM3ZzECn3vEdwuo9jppwyyuJAYSWDp856z5ibVY7wY",
  "key43": "5QdG7cWd55N1dbVDr2mKuk7TwrPw3HJDkjvSDrnhnPgReVEpaVueA2EJc7rGnDXAEom189vVK1haZGfbcBJbRSRJ",
  "key44": "4NnUvnpD6Bhgn5EmBTVHBusdy7RCuXjp9yonF9KqnLx1o9L22kcCoHumwSF1qB9b6naPyLfhqzJfjutsFEtuwiKX",
  "key45": "JPW4RYoDEfyXorQyLU39SkJsnZTBgDyB7mzDYugfhCbozzqLhHffG34NYukeoTSnQ8UstxZYZ85xVuttUJezGyg",
  "key46": "5bRtHq9ELknBmHMy8n1zrQox1LWKhpCCUTdBi82VDe6zxfTZ7UJkxXaKXnmKp9G9XbPNhczCoPXfcE1ez4CkPSz7",
  "key47": "HXV6HwNpxahyUaKb45yH226JeJZMj4jnFzEVP6ea2FetmBznSN29Ez594CuDb53eqQ29tvvYtxV71PM6ed3LyuW",
  "key48": "1K15sVABA19A9YUh8QojjWKuzy3uWzrTY2y1wNa7o5GnNRbSK9hfnzYjpYyHV3TbgW4aBZjaVtJ8Y7bkFQNnUSb"
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

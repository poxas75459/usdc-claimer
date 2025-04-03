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
    "MNh6T7EnHXi5ubDwq34S69fBxPyqMU9WjLrxZ6Fsk3bdJQLSfzzT9d4SdGQnSWktqmyuhBKWuGTqUfXShew4Wqe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cWi7CykK7hWAwcsYAbuuyacVuCc351D5dgiXG3jzLB967hicnHX1MVznmmJSbSmKmUN9Aue2Kx73hABPqSARDTd",
  "key1": "2Bgn2EQLVABWmPFkEbwPMvH1pYDU8Q4v3VEpDX5JpmitV6GerfFYsKrojzwtvSwWDUGpB4LBnLkh6LcjitoQzVmW",
  "key2": "3HHbLDqCtZK6mJH99tVY1BKw4bgcRsJnUruAz4NH9shjr83ngjMsN1aNLGPAWduaqa51iYKqcTsnTjXn3R1vYD1A",
  "key3": "5zpp76npZ8QEJvdfQGTWbnGYuoYiNqjJR9KS9jdiN7eXrq59dMVt8sC21HBXzaVRsmRSFGbpaCuez8WS9JhGQboH",
  "key4": "4ZjUcB9wDbUvYCW3XmyCECwst25139V9ZrPUPspPbno5LUwRVx4ZWxsknoS4fPNteRofobLXPgCcPmsp6ev2oFqu",
  "key5": "2NmAyBMRYXPkFbx7QqdZMqMnbh9iKcGfFtFdfPswgWFH5sumfXxxeCtfV7vVnWyWbBHsTuPCJEiSGDXE3pSNcMgp",
  "key6": "5DoJ2h7ccTK5bC6kaQMQGt334RwxMpcERT4xKjZ2wcuvAzjtzSmJbC3BaxLBuXWSckJncGtPHeM2zS9WfT1Wu8fG",
  "key7": "4MsNvQgJCNkchP8YVs3owrhJbDSryr6nBkaJyCgbSdGhHjy2BFpocYNp4qhmqe5tyv5DtW8L1jWUCHMdnYGQBBFG",
  "key8": "3HLCGsowmuT6KcSoe87jkKuRznFir6AfEzrrogRXfFFY31xzyNsjqpFb8WeXEThR8No1u9H81bSSbQ6AFYFAokYQ",
  "key9": "2hrD6x1C2DA3dgqhDZEeDjidajzRv4B3MSJAFhzrUsABEbWJNMwvpTrZqPqUCf5eFEKXDxe17V6jDXZZfrHmu2Ng",
  "key10": "2wtP6GFiCq3Y3QoHgWauTso9NHwGCoKKjuZr8Zj1ngJzJiTDFwRJXuqihQw1CBQ2dMzEvHwJrTCSc8jKhF3Miz4n",
  "key11": "31WgNDn4eyQ4UxCRQKqExtKqFXAzxodopJeg1VmDWrG3wHhwwu3WFGFdsbra2V3rJhiRQasCmBU4PWWqZLZowxve",
  "key12": "2reHqSfCHrk7zVEbupVt7C7PpRPLgfn7gueUapr6ZSewnNBWJEkNe7pZvoiXyt7cVX7R5S8K8oJr8Gb1FMDHLNiA",
  "key13": "qJeE6vHqRvSHM74cgao2EPMGisW8jUhM9XVauAEEGU8Xv5UgxjSGsHLSsMn6gCq9rEpGkuiDQ25gGuZQtT7yAkB",
  "key14": "2QHTiiUbJj8DyZn1m7zd9KeFtNyHK7EmB66iVfrnfnmfe5RxrMGBrxUFWaiewYq21Fqsq8WC6Cm9QPsTmYjbnUSQ",
  "key15": "3Loch8DfE9b1ScqUNRLtyekX7kJKThLmW8sHtT1z2zBi5zJ9Nsfa7i7FmvpzQ2xygKfxbik5ZqACtxBcVhaeBiQi",
  "key16": "3cvgJSmGTo3Rf7HZ99hPvpv3YQwQcofBG93gimgTeQijE5CYnRaRcemZwkNKAok8CyJryqqYMs2E1ja71vHRpjFm",
  "key17": "44Yz9KBia8Pr52ST9z49GMJPfRdgA7316RGSNDPNBS1BzBSoEmScnuLjSuC78jPJ7915p8zyC6i9H3vfFBwQexot",
  "key18": "tD52Z9bYPkTzFX3cUMENTxRHbtUbAL3uuEfziUpYTzYUyZ9SmatgiAmw2ZmQ9wccYKo9cg3cdA28ny6WQMbfEev",
  "key19": "SwdTsZPBPPmbg9y3cAbgomwRbdkxQUpLwx37GkEk6TwxB3S78e7k5AKNrFCRJkzD4sH56HiUmdDbW3YPAv2VM87",
  "key20": "s2e81dCBy8HuRpR9ntCZHgDZmP6VZcUmtoXSXs1UUNWapXLbim6e7NtpQYKXPbr4raeYK1PY3DXnGTbM6BATp9F",
  "key21": "5DYvWBZK3VN7PvUz3hJvZKaNFdUEFKCaskp9g4uuQzKFtM977bhPyvjk7jTo8K8peRvikbzgi1DbPXkWgK3JVzh8",
  "key22": "2Ra31dXXqqGyemHTvaVz1GHciKh76J4BZAKnyDnAqHWQCdeKKpGN1AWqN2rm5uyFDhJc4VVEmTrBt5qz6BS8SGxR",
  "key23": "2pugmU47iwaMmuvZ8vEHEFULnu7D9Avby2r4kVUQ6oYKNGxcUfqvqTAxkW3L4eApSHB6TiqTY5nW4VNJxd5oMYYf",
  "key24": "AWUnNxr31AByPMEfuk1PT4Y8ZHg5nZ4pso2FSBY5bm3iZchcTLKZVQKbhiH5k1KbHfHVbsE9Z1gZ3r3Ne7P5T9c",
  "key25": "3CWmiqghDP41XAMQXTb2UZPJHG5EVQcy8JhdC8CzXok3QSMpGAhZbB1hdHc4H7N7L2Vv2vJaxGmJ4RPEaSw1zsaa",
  "key26": "2gJZR2vJjendvFMUJoecBuXy9ABKvbbYk753CR1AmjYPFmo6jV8VJaxN6XFDwHtmM6uM1D6zMrtrmniSuEzTJvM2",
  "key27": "2UeF2VHFwErRipyg7G74KJxy2c4Qpthm6AFxXLqzWroBP75SpSJuaiPrfsnb67ZgH8jfAkcLgNES7aPQaFwi9foM",
  "key28": "5szVtmvAvzPGdsKMTiv1nksB5NAF37EvFSEhSEaPEhgaX1JBTrUZMwZ1zwH1mHvft7XC4Phy1Ly5Wcr4dnzSu9Dj",
  "key29": "5fS7BZNsTtVmPJTUn1oz6ng5XkE6pcmk5jR6inpW5XhmSM2AhBVDfyKza9FXC7YhTNaXx7w5iNxmPqr7CX4yKZFu",
  "key30": "4TxQy3N1GYgRZNCc9HhnDi28tAG46MJo4KQvEVjLTeJnjY1huyPgg54W29isamVbGFLGfgSff9fFaT2GJwHAVPBK",
  "key31": "8fRajqHjYxb4voRFiG7TGxdGpoZtrbf6DzuRpZbzf4fTNUziTZ8uFcf3AL59hBRFUX2zHKcnph3swzZpa3bGUKB",
  "key32": "Q6aaEJcMPtjouWa3ZHiXf4fPZ7pGAkv8AbxsXCoJ8St9Pce5nNiyWWMyhVvyjPEjsHoqY4vNfVwhwvhW5Jro746",
  "key33": "Sbiq7JgW2quXnaKZkCuFNfXo2ToeoDhEmtMrg3k1nq9M9GD9sKkMZntW5YhwNqmese4Q5CbScV7fs6FWswG2ZWZ",
  "key34": "2X4ec8AJi7miUKTx6NugGxa5GoSbFDyCnLmvNFEoprU8Pix25i4gv5fi3bHyFi4JgJ2nPghbbKDHBUii9LLsczr7",
  "key35": "9ubcsfxuVUnUgcFjqVXuQY1HSaruyvtjYN6c3RYZSMbDm9mDGzagiZhDo5Lq9jL5uiMisK8ZCvsfRhHdGgaxeuY",
  "key36": "4Vd9gRvpC4UcrQMc2sKpJ4meWm7otxsRYE5jjFcZ84BLPm2xvT9PsKUiLw6p1V47NbWXTmbLjmWnTeynFtfDRWtk",
  "key37": "np8VsJ5wLYmfTxW8J6X7F8V2NbrYC3freXzHe2uBV88ham2i5MTtFjEQWZ76bHf3PMhvguVhadASZQZDNQRvqgk",
  "key38": "5yJRwxXyiGqdNNqqQ5jcHbRjKQKvb9iT4hofpm4USE14epd4kpMBTcap1yRPczmTLnYBtFVySGYVDXoXCLUGdSc6",
  "key39": "FRQPmy7syczw4SPDZM3jrutWLkeStcSiEBcyn8hgdDmCnk72kuiudAb8Tpkyc67WyhYFzU2maZmUSH1xwJDFKRr",
  "key40": "5YpdmbBzFvTeDdH4XxDp3LaZdVXby2cJwpPUCZncv5qrrPvsNGvUGJhF34hTb6SWgYAmwGgBJGViVwatD4zbfAA7",
  "key41": "2njY1KS3X9BHQyU8PuYHZC4M1rgdCvWSD5PStiL6vVdNSCwHzyaQtPYT64So2sRmtUCuvJrbU8FJXsTgYxP4UNXF",
  "key42": "4W6eLvHUmHEEQwxBWtGKnPXCwmbLqNEVDFk9pSodQ44iEww69gsXM4ABVysbK65YsMvvSLmfQm8Qc3GXupw45GTW"
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

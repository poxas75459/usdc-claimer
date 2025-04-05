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
    "57pVgUTc3DHTAAvmVSkxcuwd1uzNxHr6tJoNi8veqAtYVGQvfpnd747mw43kNBoFspbNAVSSjdVFJ7xz9fn4yduq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "78MgLsaJJx83P6sqQShLRKSWwn9saqDzteZbSMudYX5ha71BSo4561shXM3wvSQ1Ric1PnYB4H8wbgttba8mDSH",
  "key1": "24GLMFz77ps9NcEFi9Ue44VcX5WyrgJVa3ryxtqXLZsdpTGdGHBCVMJf4WAgmMcg5SA2tN5feqdcuSEeGaA7URZq",
  "key2": "4HW5zHh1job6yjmHS31mgCdcqjc4mGN2hmnPFAqZfTtkm3hQnUroxjmgDjW96FCtqXmw4wN3yHgAdFA6ycn62Y1g",
  "key3": "pkdosFFajwJfo2nUL9RAGYcUffucf6LHYsPoLngWv6t3UVjodUXEakXL7UZxxknCTpN61iwRdbvJmjM4RhkWiTF",
  "key4": "3hfN1tS5Tzi6bKiYkXfuxdN7EZWyPjDUHJwhbu5NmWZXmngempiGzihS5Hnfc9WXNhn3MytceCw3AUNtJcYh7a2Z",
  "key5": "5JTkcc7jnbYiYheKgShu5N3nbBEopTKunEZgLLDFocGyEPMRE7RrAigAbgqvCv3CFQ1nBrv4cf5MrQvfWz2Xnn2T",
  "key6": "61PxfiZggjydViPvamX11kbnz6DYUREiea9EBwoJf9qS31mJh5a38KCe2VcYUPc35CQnZktVuhGQzor7oMU7ew6o",
  "key7": "5k17hYwGda5J3LzJ9QL9VLomB8wTFsUw3aHeN58EvKAmrbGpjERGa8XVrkhoJZhxeFq1qLbg4ntY7apu5DEHRQT8",
  "key8": "4fRd3BPyfRYj3mxFZmuAKv3TnMqXAon88hbGg5VYELEADStRAwvYq6hC5jYxmvQnv4w6UByQRCPrtAh8zRmEJm4Y",
  "key9": "4qwVnuyy4HHm5HwQFJsR2uAMbQwLuVJKTjLXUMbTYy2nxXC8HV5ft57CUYbmoHytg7P3iqVZChuCwW4DsyVqMhQB",
  "key10": "3z2Gp6VNoHWTXAzmxDwtsKXSruxCCFuHo3JwSUhipCPQ6RmB5VnC6F3UdVsTvDDYKQNrPdFc37HMDnaLJpYWVJi8",
  "key11": "52dzmMGd3zxRxZdvW7NGFTqruHoqS3hKqkXQpgd1R6ByMUX5vk1jVXPtVZsKmVSyLNHTPGvx6KEiEBdxmZH4C7eB",
  "key12": "2rqt54LmGWMkChxJojZ7QPSPHg35UFrMrfmT5zvaCx17GA4LewsrMeSDLCE6G3Vs1CeWYGeNUy6Mgw3YUGesJCvF",
  "key13": "3e9z6rJEpXf3JzdcxviFM4Zak41T3Yngf6DQcykD6oxTHHScnQUSiJx8JP4zXapEUAUMn38R3bzsoCx4524jJGkT",
  "key14": "aciAzu5RLiNxGmWJhfTcyERkTmGzKuyr3o77Kpj1JZfivVW1sYZFgSZ3TSAVhe1Br8uDEaBsVBWTNTp2ms5BkUM",
  "key15": "2zFia3HxgxHHkHJw92QJpyvcVApSiXwbLrNJvxtpFZecoAtd4kA36mPtXdQnfPNBLcqNJnLNqDGzGNuvNCf9oZLM",
  "key16": "3TVoFp8dgNwjaEBU8KUK92dgaBSUHdo7yjx1awGUvjVPYwGtVMxCzRnwmhPwEkxh24usQgZow3K8FvbskBXoheVR",
  "key17": "4usJKVysKt4cez5jfL1fWpnENvyYrQnD9Lq2GZgTJ2Fww5LZg8ZxhMBhmCSbFniS3ucr2V86ikFdGXRtJMGpKg3v",
  "key18": "4UZkHX4gSbCCa2iZhkx6xsYUFnjCjud67iHNaDvCBH164ExLEPXt76vv96LUFzBFNSqbmNf8D9U5JXgSP6zWsb7b",
  "key19": "wiPnF277H4sfidWMQq2fGLpMp8r8VdfkcVzimy92gmhEovEuRKv6F3osKfzp8RHMH6bQTawDJ18UrgGkubBCevN",
  "key20": "5qSv7zuH2fEZhjzr5XPbcmoMm6XfqmG3j7Gux9XMc355VyXwSqQEcJEnG6TjTxNMCfmUC7Nj7EnBuU7tWkaKjN2T",
  "key21": "4UEFcGFcWPXB9BZuhBJehbgnin1MpX9Ln9nMQPe5xU2m9iZ3VmBxroBqtjC4Uanu1FVVwVoE2MYMBG2WCytJcBB3",
  "key22": "3wQMRHrFrtmUNDZQabPo9RMFHaDn6Mm7dgEy7DYho8SPsc5CSpcN3RkwkKtgByuAZP7xvQv8LsqisSuwFXe4PdLL",
  "key23": "2FvR7mXPFLFBWJQ3t5yNwznngnc3Gc8sHQzaZUBsSUP6EgLbinx6yMeXLzNFVt7QrBB5JE5FMhfNor8LxHvPFbzL",
  "key24": "g7ofREa9XSCrrktpiFkdJHuGgNTbFapKMn19JiUbACqAdvqYqGnbGsJYmQo8jPicrov2KbnbKkgJfm5dEzdAZ6u",
  "key25": "5r9nbH1u4oDUkr5N8FtbsToGwEUR6K2ebWKsCwQGB6RRqh1epr7ibfmazxWGmQUozj8gJZXfkvgb5yGwYegLNdvG",
  "key26": "3QJ7N6ELHhTFRTvPdWPQNHwHbmqFhqKJfivTVEfmKxJ9RNY7ypq22gyZfw4EnSNb8tHHpUU3uokkzZhrAyCukBx3",
  "key27": "3xxPNfihLLVRmjE1vMZTRUkeQSKsqq3jsf8yx8LUtk9BJKy72QWMqL2nZbaM1wyneY21HWSTinfBQoEgmGGRDR7y",
  "key28": "49CiScsnD1dhwNfe3xzi75qoGGk7WsBBp7JGwduCCVQa6xkb6az5VyQ5sQWqZeh15fX8zpZbxUjfxPdGudz32GfY",
  "key29": "RRqbB3WVQ8g1arxQqC3HGGKNTYbDXgjxPSmGrUkksppojvXrriXcUQrDsEFxsy644RdgbjMSf8YVrYvt6QbCGTn",
  "key30": "3aQ3rB7w8Wh6TQriMvas4u1DqvN9LH4ujSooXMt8gH8earsGioJKqUQ5LNHfmgZ3wfkWdk3ZkWV7KZh6qK8gxZ3D",
  "key31": "5NTU1UKFmQvGqMHFz58zmFcakJwKJRgVhwY2ah69iQV2QqN4T68ytyJaLGLkYsq9G3huzq3DccCaSB1fV213epoh",
  "key32": "3mCFCWr6MzbuHtpYubvsiTSv2qNU1pnKRwWGNxeecxaoco95Zw8ti9XGvAp3tFdScqCzSZrk96tt1WucuNzcaD5C",
  "key33": "5g9Ek19gS2aarbZ41cqwf64fbKP9MCV4QPQsGmgMKVuAE25U4ZY6JD3SPSG1XqKR52oxW6dSibtLZTiSMJnUVASz",
  "key34": "3nQahtPoiLakPpko567ZtSADf3LnVw5epuANfokhrEdMu2pP5MFZva4FHXcKnbFsBnhHJAZnascmTHLDsJKzJXLb",
  "key35": "5GaUUBgV7CQiHRC1eemxqw75jLs1BXcsr2MnnoMtieueNi71F4Eej8GdNshdew8zX9du7kJid7gejkdretjqtRS",
  "key36": "3Zvx9e6XGV8G37rfA1iyQNw1D64Ke2ChiKhdNVDt4p8jwYrva2H6Ngsd6XUGEvVWtY3NLDVpA2nnChK46XNg6LuB",
  "key37": "4BqwYznrJ2FHNeLVtgeND4FwRA4CoLQoswn7AYDPApK8WyZtwv6ZUszGZ81PazYzMrAeA9f2geuLNjE9L5HHBs5J",
  "key38": "4wq4qqpe7mkM32rzVCMCWd2Puh4Bi8hRPGepQKfChFDJ27uAzdK2LByRdk2RpzoL3UULJwQopDqmH4fhjXFxsQTJ",
  "key39": "5zBoLXDk1mBnZ7Y9F5MFMtrVAjM1D2XuJV5bjzdqmDXVDKTevWpDY2uBebKVRP8gvcUZBCSFLmXD1AkLwHYq5neW",
  "key40": "5Fss8NrWfKTCzWsnNnZ3naVKPZ3JR5aXGnmY79MFCzYbb9spLK4n4VyRBFyz9Afn9kNbCekYh8J3p6SwkRZ8shVk",
  "key41": "59UymYApxNfzXZuXJZydsCXdtqBThx2nchdsGCSjyN1FL3yS139KFbnRCuFNYd777YCagunDhAfYr7LaiAWKGACD",
  "key42": "3oMRPAp1Jc51ULQSDmSbo6S3BW58KWjwbfDCEvtYwPfjjtCkHzHa5vjbjdMHA2ucVAgNDxR1ySeoxco6hj1QodaW",
  "key43": "59fi7Re9SmuVY2bmDpBeksmAMh3fEUEGbWd6FWftNLmyaURLnvCLNVCnFPGfnE2qxUBcXUYmR3MY7GXwyJrbsUNP",
  "key44": "4twEDqqTSdZ6qh6xkQEbZmwWWUgFSeYVGPrFFZAJeby4XV4WqTWoTcegmN42ooJ3ZhgMS3QXRCSCjxWgZKwGkRch",
  "key45": "4JoceVg1HFciFLQijpFvSCZAQty4P61HtzjMMgoNCJUzdvSghAvArbJiq2UnG2s28hD1NbbGaWWF3qQ1Hopo4TLu",
  "key46": "3nB4oFE2RLM2B1c7v18wbgXNFQ5axtrjUkcjfxcDq7K1uzuVbsAqZRfNddrB9miLWzqb5ui3RtV2yxXa7fuqqW5q",
  "key47": "3xvecpros8RBhmfyAVC1wrvjodiJfFu4c3YRN8QNzgTJsDmS4zfdseskWjW26jrScgtak3md98jZxcuAnWqNUyri",
  "key48": "2f9FJeyyQybe8SR6sWs2VvsAJMaRKwft11ASfoF4djXfGdApnLR7drhqM6XSM7w194VJuatnsrMR7Bvc3PvFTqDA",
  "key49": "2WdjCPhWDrqRdL1re3JFFoE8ZXegofRNfCahhf3keRVbpMjbSAQzi5mpnsT7SGmtxLNGrB5gXsVkUiPyLVBG7kb9"
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

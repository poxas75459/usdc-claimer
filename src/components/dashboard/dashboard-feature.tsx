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
    "5mcm9MJZLJh4KtgWGueo7H8w7ybmMAPMxfTSByLsfGx2tknsEbfPMfgeDhwygHP9XaNcbMYyskoSA7RYKctYq6ud"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u9nCQQukBUVoiRGVa4DbJM3gUE1sN11k4Waci99UMcqJoFr63nrWoNqJL1L2LytJoHhuudQVAooDKm775D6NT2X",
  "key1": "5Fpdj3pnCVPttLiTYjPBEe14JCvqB7t67iQmvo8zr5YK3TEyiSHJaEthxT8GyrugiJwpVbrgesNfKNACgu5NtdxL",
  "key2": "GS7xfmH2GMpYw4NmWfHj3kBt76FkMbBYXHu5wTXW3EojvVzBGbGNDrXPpxYmNe9NBamDLqK73QZKvAnwQ3ye1r8",
  "key3": "5mA1prXBhVw3MKXjiZWha6m2fyMJF7CH9yiTwvEwz8t8iLu9K9b1EBqbvuZwK3BNzt1aAFiEsP5fzFTtmhfiiJXe",
  "key4": "5rAddcBFKcJhUTavc78hrvfQ7t31ydNgnbTX8WjmRkUeBemAardPoAHyL7MjdY7aC9SPLs85QsZ6pZHaUhVwkSP6",
  "key5": "3KMCbfHvLpETEr93iY3KaTKewCWVEQUDJTm8emTG4Jhi2aJWBucRPDHQjobLbzh2i3orVuRHFrztQkk2KLFATFnr",
  "key6": "64opix2qovUAvYAdt18HC6kqA1z4QPjBoGY2kW628uZDyLQ6QUzFjYjK6MPAM8g8NKuRPeNkcQqWRYPya6MGggbL",
  "key7": "cZSdGyLh7nLwzx5MKRqJMtaKzyji2YEHWx7dupESinkMT8wdb73xsBs1PGBAEsu1J1mpDxwoNLC4Y9RMjEjsFuJ",
  "key8": "cTu3xcKZTLUkaxWmuuK4hvfpPUrFZZHYg5Zq3sp6QcoYNmD8uG2HexrLNktkdKnA5jJbQWrKDiZKui5w3Rqj9ma",
  "key9": "MLdfBsCvecCaUFBDB6cwhCAxCrxFBcnj5W6Jba6x4pAWhkHNqMDAoaxdnxN5aLHB6XzwstXEf88hUxYqBUrT6ue",
  "key10": "5AVYsLgjPbpSDnB54eDbPg7mhqYqDdD1eeTWw8veKZLPjgATy9odFnpxVV5R7h8esT7udwR86JjtwKtU3hzbPweu",
  "key11": "Q5Efs39GfD2AkYsCWBBj6esobxjsBAxbNvWMUXhatWGPaocjhKk5pL2q4jCk6aBA964fFUgLFX83UBqb3qLrAdK",
  "key12": "38r2hk3hBf8UyJZUdfCJsz5f2BnLEagf1PZgEfNV3vbpeTxeAqioFdVbnLtDugrQW4ujKBiv27AuRXGAkaZn71Mg",
  "key13": "5TnQhAaEn6SciRwVc9YmAFytaqs16nzJqrgFF9ojL7EsrQsJo5SwKqU2AtNXTJgBBLDgDdpcSfgse4SkYwRhbieS",
  "key14": "ioGUPbSAZAUCnFmtVQwgHoxuVHeTLtAH47bWqi2y7k1hTsHymF9PFKDmQVswF3xqifDjQUsiBTRvjSFH3t5K197",
  "key15": "5dZAEA6w1BSJ7YGvqX75Nu8eLm3LdMvqbxD7J5hEAeYNvUvcu8FnLE7oSxmC6LZB4H89XRawwwSaiEKmW5CPVtAk",
  "key16": "2X3c992ScSbxbSqKF3UmvHM5m8gSq3CEBttFBQDpeBdPWN6nfYfh2bqYHHKUZWPEKTt8d5fitSxa6xuccvT4VMDA",
  "key17": "4FmLueF3temaoew6RmAPt5PnG7KmD2WodzQ3HRqUyPFuscHqQG7NAsraJxctJuV7Q7jFCiyqfjDqLjRa2BRv154g",
  "key18": "4AB1ZeUHJTZQ49ePvWanLbeTHvBySxAkCDtgG5JkmjPybT1XDwGZ1Gse5fXbcTdPe4BR4wSb81hRSRG6yfukWxqe",
  "key19": "58Sgu7gv85Xc7y4vq985LTvbXJB74qbiAYu1WbpivUbWvTKWWjCDEpvtyA4uHRB9bC4zVnHxrMW4zRvA513LFs7S",
  "key20": "2Nm37pynMkjgzdMAUKz9uiF4yTjNobPPekt8hgEbU7RJRrgmCGSC9bX2pFc3dqEC7oRbczyCFrhTW37SzavA19KT",
  "key21": "4pgHH23NT79gDiAEFc2q6wMWXLxqeehFJssD2CdzygfttPNZgHWRqSxCVsEgAeLNbh7kRWRr4EtfDLyxqpBaq2Q6",
  "key22": "4NuLZh4NyFZ6t5VTLVMS5VaPHppLkneJxZEdvaWc9JV15sZGxvCnKhzPMFb8AvqLR1NzFBRpGbpwCVhqyywVc6q8",
  "key23": "cSP3ALju24k49jndBqAZChee8yS7e4jRk5jtjZtfQChefgmsz6gCFPVTZLFWdsMf8LzfgMrbgYzDFcvz6mNB1rs",
  "key24": "4asjox4pA9pGd5g9ruxx98WopJ3KPTo2p8nHCyTKWAkGb72w6fXFFKcSXR6yxZrjzh1eEcLEbPrmNLE1soE5qqmB",
  "key25": "5jU7cqhD2Fc1ybc4bek15RD3o1ab3bggwp2nGeTJpTYtmBpDLLSru5j1Xo5opjgG4kEjbNPqwFJkMa421FZhYzjm",
  "key26": "Av1DMrw648qsf2XV4BBaia6RR8uduAmtjTRE4YrN2ghWqqcjeUgEk8GmrZ8xJdFLVvV2WiwmGfraid3YvUvgdYa",
  "key27": "2mWyGirV2UTWHTYFkJ2iBRzUhDw3Rn44pbddafqKDFwvKcvNgs2QCZ45KK4Kj8cqJ9oc8EZi4yaMN8y4RgTXBFSp",
  "key28": "5mgCdrqdD6ZQE8vrDnCNBqzPVN59HYk3mkAgkFdxuMYjDi2DAJVaPig3gBp8yLUNjwVE5rxEtFU4gEGt5G8db5Tu",
  "key29": "2HmEyE9SK5jwfUyfsKW7qz9kdX61qPNdVsfpkMf6LTFt2w4Ppz9X6ZrmUbBEimvnuqer9ir2AnyjE3XTrM5UL4Bw",
  "key30": "3mvEwTm2dhUgRVNHsEmPpLuDkeehZCDVfe1oybDfyBgcmLPsYU93x9MqHVVuAsj9WPpnQjnQXYwo5KxLM4xGamLo",
  "key31": "3tsRN1LonJvuKqSq7UF44o6NswFicjJwuPJgmDTU3ZYLSjkomvBayegkTSy1jxTmb66LCeUm1nFApti9u9muuDfG",
  "key32": "2YDydwWuVRx3Deqb1xg2Um1ZmaD4ZWfNLNiYxL12kJ9eCrCCNL6FJWhkcinUgtxytwnr6p35gJWhFLoeGdUXu7QJ",
  "key33": "4Q8313gf2pF4xZ6kX25ezufGs3J2VrY7LAZ4Q5sFkssLV3D34MoomndVspqCWLS9dsmow1WoVtrLicsr6xDbEqk1",
  "key34": "64grwCs2FSQAEFExz3rLnQ5LrfNsNNM1TdZM6ALfZiiyTLEKwaQTVu2Qsr8rAvFFUnaQAi2h7Y7rK3BWCNmq5EMR",
  "key35": "5wTUJchDyeKKL7DGn77eDuYG91mEJgX7Ns9Tf675S6PvryiU9FGLfVkXA73ziz5dKW95JuwJLGhU8sRFg4ncgynZ",
  "key36": "3JcTPo2NJXreH3CGBvbzud4fn5CeQTzwYKmQ4tutV6qcApBvYEGXN2ZyFHWsrcrZYG7KHqU3AchfDMRpn8t3JK6b",
  "key37": "JuUsUXXeGPEXdY89emZEpPtyDQ4YRq382SLATodSBHZLq31w4Jnt3YHUEWFbBfpfoK5Ppm7vsNd8SeSrThu2xHR",
  "key38": "2AsrK5Xr9uYMkQXTHdpD7raUYGyiCD42zNQQQSWFo42Ly3T1apP6Vtyzau7nRt5ZUjiichtjiZUT45oEr41pPkU9",
  "key39": "2Kb5sximwXJobv3TrwYYxbRv9hrvGqC1RdkggDLEU8yBUDFBD6xsGxFXK9J5EakhgMsaFLV1ANPC7AB4io23Ax4S",
  "key40": "3LgHwdx76StT5md2gDWRAjPwAVPMEcabb1ty2eoLgMxFwwpM3x14gA8QVoimVEG2WhsoDDR3Ek56b31HL1j5hMNM",
  "key41": "2P6MthBsY8t1h1Z61E563DYmAPePPZgiY36h4KMzaQZt7Aw6QdxLT8sHfmMRcrR1wFxfjysDQyxePyPt4fGWyYnQ",
  "key42": "2PXzPW5pHBeKUjXMys6qf55Ws1B2jLs8qixm1VtbgpdwU7ne34vmBu2i6nRVUQzXpFMVoSHHzdaWyQBTmBw1KWRj",
  "key43": "24gJV7mtDAEt7UrzzSWMuDT1abTpXhBULs1bgZhcQaRx2NNjJAhMFeyqozGeTz7YBbCWA4RVRwugzoKc3dAEUNSJ"
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

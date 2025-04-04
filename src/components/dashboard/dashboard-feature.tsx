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
    "4eSrHEjMCmcpJAgHBhMF9R5trH3Jz468HbkVbvN5VHKDDLgevvCDXf8bPQeizxXJovXTqTHPXfG6MBesTm44eDyN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HtHpjGas1XtUJVeuTHY5W32zT8edXdzD5q9fppZRUSkNNgb6CtCtWVKeP775RnJS1ps9Ti8X9eLrwrXuTEvsp67",
  "key1": "3Rn4pVQz2RKAMc6KJSMrvFXvZo7QVcR35qjoi8jeEYdLzp9jFQxFR1BKN8WzznDZagUNv1DZJt8tn4eRqSRY2S9H",
  "key2": "544VFxW3QUEV639f3aAhRMX7cMkKtdwXxFy6afmqGF3ssjTUrnft2EcLuiX3s6pb9oSaDGbDDV2xBanUgWQ9SAU5",
  "key3": "4zyZxy62CrSziMxge5LMHJaYcDXKd4s98eNDHnFV7i1eomqDV2QYHBxjtHfdKMg97goAyCMFYkUhjeXj575KCxz8",
  "key4": "4a58pwEnbNLUCi1DJ9bCV1pEQAbE9pLYDjACzUn2PVGpYriS8PT3dK5HpNSeUTiYPZUA5vAARop1jdSnNWz7GAcm",
  "key5": "3KfEb66QnKshbQZWBXN3i8KaMcS15UJMahbbyfYtBdhMpHcZsJRQKi5rcc6otTPVAu6wzDoEo1ZNwVEnjpRo2YVb",
  "key6": "2VcEJzFei3z541NYhYBZuS9XxFBLgxy1rfNSn3v8UR2BQZB76ctfEHtNgTNmm2SmzizEPtY1itLKv5wEq68aPVii",
  "key7": "2oycwRnWLGbqpBBRmppTPe537VNDNWNPTfheqwNAFcU4HBDQB7BPTg6sqDdD2jck29CyKCag8L12ESrgeukLWX6T",
  "key8": "4iUGUHk1yV1AEQc8A9gToQoi76H2KZ9BNhdWcRziZCu6ewh2CreU9KgKsaFCTUTBcKqina3qxkVUcEANGToSvhFw",
  "key9": "3324m8WnP1xkKY3ygzeVZK2KwUpHsygUWVitYDUGG7cEwvLN9rqgNtdeP3c5AXtqduPPuWYpbwTV3rezTUArKqUc",
  "key10": "5VNhodX2Vuyf3L9RbGW9dugBASMFJwNPfVKwjSEzZ91BeG92He9Ps5h81T6EZH4x1ypigzY4JPveVFgDDpaMHCgs",
  "key11": "611ta4HoYVvhTkCHsLzCDxvgUwA42JW5RPNQ6MYjEqThgkjF3XckMasBtTgzcj6PtccHa6M4cfeWjUuuGYBqAKVV",
  "key12": "2gr55J6DTma92y44n44Xfa9v3Z7XbBxxTTe6qPs3bXf3YcshB2mdJb8DHxCDY4n2PniweCq2wsxqUkjGu7W6rFxQ",
  "key13": "2ZLmRqz72gD7QUQf2vGnTYBynX7skAFnW1DSjUdNs1MGzBgCNbATDJ1NhiAAudSHyPDmwVusW58Tw1q6P6mGLFz3",
  "key14": "4ASzGH5CYNX4GqZ85XvUU1Nszx3wrhuyXhbmLT2ntVSykVwWMouqTKTPGJDCyDDnQiWcW557dxqK899f5kB1jvqk",
  "key15": "4Wg1xMPYW4psJny25MuPDyjtcSVKyJDp4fU3nR7TsJUsTrb6GBHGLyeEtAb4rByBtwqtja74un8US1LdZ36548Uv",
  "key16": "43bDFVk1vUBrn8kWA2Ti5wjxyubaF2SNH6aKoZQapqSPfYq4Ympx5igyxnnWydyQsKfWSgqE1sPcdMvk387FqCkB",
  "key17": "3s3gsox3x5Tui1E76woADZfyGrJxt3P8NKRJEBuK2rAW3MHs2bEfyv9zvQ1twJANiPurxH7snUmwyGv5ivHSdnwH",
  "key18": "5RqihRBqK942vW4VnmS8uzeZdhuLDCfKx3xUjiETz4UTTuiRbbqdMSThi4UyTsRRGPqnHsREComTQJdUwEXZ5QJE",
  "key19": "4UAu2UJueMuxWLyWsGm6MuY7qMKtgFnAXAkWBaBDwZyVoWjtKZVk5RikKYvjifKdefoC4om254zGwuhAb1SJ2Ceh",
  "key20": "51yMwZfgtrXZCs8kXJMsbexdbKnvmeQ9st22Ezwa1EQRYRHn1iCndBnkNACGdUnrMAL7cis1oq3im5SxqFU8adWg",
  "key21": "5JAozZ2Dj8XgdizSCTrsGHFDsSDzBbY2k1YcYAnWA3mAViYKv2n4LvPPEEC6GBAuWabmHSiqfBmaYHA1aRKF9dYN",
  "key22": "P9GcD8zusrYU4cfBdJCPNQ47SFE87LxCDhg31M2stwGdau6FWdGWuCLEDu1johfK7a81ScUGZNZywyCSXBH8h3E",
  "key23": "3UsGPgQ32GSRXe7Xe4oTh6nKvaFiVRAu45pQnieC413ZPrrY6s25Jy6w4yejpG4na2QjcL2L9SW5Sx7WFXy2gPeo",
  "key24": "2kp5CAPPPm2NvRQGSP3Wic4r9k7dZok7Pgdj9mejpBhe3J5uS9Vois6xbx9RWajdSYmp9L1dzBdWGMK5TP7PP8Ac",
  "key25": "3XVMcAXSJ4mjxPnBhZZJTxdHWZ71fLX9tBVPpQJmL8gcN3jZPb3u8P6MKoGaQ7cVed5LeSCCqkaF1bbyHw6VdpL4",
  "key26": "5EHE4GZVZpf7hiGZzvEEWRWTWJTcGoQJFb4nnKuSxiCcAVLUrWPFPqMjRipq9YHC2fMpPboTHd1tBUTe9SzEcYzk",
  "key27": "zdauxsL5L8aPo6dXvgPmcKhcQs2SBhnaHjcHmVH5oZxkSzf1xWteP8k1byabXs3SdSwcZPYdnDYFFzU9drAMkbg",
  "key28": "4gjP8pgALdDCZ6iAS1LuVpiSffjSfrX5aVJ4prULC6mi1cvdzta5oEZUsrYozaykY86qtFPVLQR8FNNuv5JzbM7P",
  "key29": "4e3FK7R9PvvC6GzCEBuLSoDQjaEpoR2fDQbFeCHJgEKWDmmq4FA97J2bSuNr2k2MZTieMvN3bzX7xdjHn22rA8XB",
  "key30": "2eXJuM7fq58Wfiys6n7aPJ6LCvYGccWvEaZHevLEd8GEENfW8SL1tufmMk47e1Rv74MbeECY49Q8bg3LcHJumhLV",
  "key31": "ECL3y1oqN9JabNU3YDiHheuyXX8mCcTtcuh7RvKLmmBtGxYVY1agqvArs8Ptc3HhgSNKwsR9qYP3vS2YjkiM57r",
  "key32": "Beb8EPga3nMfHZQgF3NNhQYjsL2VfXaGtmm8CBQ1pchztonLeMRvfXtk5bw7xVebu4WyiFkWoUMM3FphsrG9PJ2",
  "key33": "4tPZPzRFujcZgcsx7egJbq6tVkKQ62iFFdtYHqr8fkutPAJY9hL1rVQk5vi4uhM3wJiF3FweeCnakG1B1B9T2V7S",
  "key34": "5zxr9VbSqLZgUPkrsHJCu98oATk1RzbnXbfEBUfnP9mDC9S5A2R6zN7WyoBr5r78oE7Q1SKRzh3yA6DYB1kPEVW6",
  "key35": "3mH4dwcYH2kGo2oJ6vzxdkWXLvyktyfknkp4HaEAEnXnnHPRwqQvBQr4bYrvjX3FrpoSqcX7KHFkdGMWDCtEqPzX",
  "key36": "4wrW8f6img6BkibWdWsSUSMBQC6NZX6ofQ6aapfCaogRpJLtR7DTcS8ZxLmq1mFueVx68C35Q9NRXUi2HASUYDaC",
  "key37": "3AjQsQkEKQenAQ1XG2jStq2mQkdUYU62zLtmztfPcZzhdGr7cyF6a2nPDFGhHkAz2DcWC6zLXDpvvycUmrRHLy12",
  "key38": "3AZiP1tSvYV7PLJUkL5nUHmwHbT3bQkg2MPiVwDybwtxkM5dYZcEDVr9vDSuHvNAFUhYVaaw5t7QaWp5m3gex1GF",
  "key39": "61pB1j3X3NrAzzZHCBHhGs1EcBj5c7WBd4mWLpAM8EGZynQEpJgsDkMxPYS2SuGCivWUhMzY7PvBhYcqdzhiv3H4",
  "key40": "L6hD8kv6uuBUhbMu5D4321Gmm86bpGQFM82QFPoeKcoTjheQGSpY49M3Hxmw5ukqssszPKTN8U5UDxqbKQU4ZjH",
  "key41": "5KEybSLGHUEQc2F5pMYQhW1hAcCfDLhJ3psKMCqK2cLBFiETCyH3jch5JhRjfQmFFCfbjTv5NZFjoPQQu1x65QZg",
  "key42": "WF2DnubXXp6MHMwxfCUprRzafaAr2qHnaZ6RxpnZWrQpAwWYznCHPZQQfzGChhT1Enk4wxH3xPu263RWWACzr8T",
  "key43": "5gQ2uKAVqMorxGHmPpBscfFixV3si1e9EtkeZMucoMXQBBzmZoKQARbBAzMEV4mow4sycnniqd6jmQnL3P3jGAZM",
  "key44": "jQMtBagzEGSGJEwkvrSQpdnreLdoB7g5feqB5mBp5jKxCcfMAWqX9C1eigr6DuabY5Z7y6bGGxchCX16FMsfrkp",
  "key45": "oW6Rv33LqvDMVoGzCuhiuxmkaq2AW1zTxPYpsfWAhTVie2eteK2jJGmCgnyRkYYW6KwJQ5SfrLsAcQvd8C11gwC",
  "key46": "2inkk31STuArNDJChf1pMxb2REYHtaEEsdweKvnN4bJgY8tGuak5dK9xFQdiCEbh5pkFzTsNG93SWNDfyJGJoogh",
  "key47": "5TDxuBkjCq89eNoesLPEAzGZMVCoL7tnzsuaQx1oRqUbaHDWtLVagCFFfqixudZWK2WPVfdkVEEf36WsFphw4WdL"
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

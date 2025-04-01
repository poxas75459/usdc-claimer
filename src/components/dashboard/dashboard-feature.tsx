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
    "2WEamnsNyqPqxrqQ4Hy2paSRyJPq8rKKk3FFLDZA5PLKEv1DwJoibuPjJJy6yH2SPUK9XajYwd2FEydduxv6bzFh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bvgT6E8mD5F3hvsMSidgeF62gEFS1vBkAkTqaPcYA1KNvnsP46gAmqg3jwXxJnY9by7MRMnGV5rxUbk3ddbm2DN",
  "key1": "2B9esZbcgba9LNcSCAhHb2aTRYay2MNDZj2u22kFPgoD9RXVLEDhZjMiKik6XPuAMG8X7X44mYQy8dAv57xFrvtA",
  "key2": "29qzTrexS8FUsu7CvVMm9AakmzptKQ1DMmGo9uYquS6zo3K7Q2kHqJRVUwRDZ6Mbr11KACppfvTen3VbHJ6i1L5i",
  "key3": "2c1CdN95WcVv7yXmCEbpMhEsHBGzhSsbYNVLMJExe573fkfV1fNp1tEMSmAf8Qt7twhffW5K1HJj9bkd2geqUkqS",
  "key4": "U7jmSvM3QuVJmzrjtzDPb8HyEZ78zn6qi3m6bZYbgnonh8KYFH5eDrHzAL8NrUzPjXj5qsdoapT5hiDv77zjqjt",
  "key5": "2YyvVqNJJbXH45Buvity1KwaVxkbQd9eABUHCQyDSHfDRUMQR2SWrpnM2ctXW2L8H1SvTvAvxsaiHV2je1tDgek",
  "key6": "2ZSe8QHdtrfY8AFg3CKGyaiDmgnGU2qN8cbrvuqFUSGJor3XLME6N74gCmNZhQqv28CfdfTkLV7JHdzsRQsXSGME",
  "key7": "41xoVejGCvQnAXbU1tKz33TCw43WsLg1XzifMBkMito89Fd7eLyjagV7Tbocu9wosiqWK3CxCGYeWFEMc9PFqfye",
  "key8": "5K9hb45FVcLszC6esAdCHy8YoVKUk9egDkmRyy95DRTccKZhRvTzWGPChtSnQA2zgFkedcC3EGNmYHQzv2RW7aWN",
  "key9": "4MDEssE3WDvSa1K2V6MyaMrUiYUCPmNXs1wX6LPJxUnwvx9rZWyPGMJhWSfGHqxh5Hu7zz444ANNbhMqQ8dxCqD1",
  "key10": "4u9CrCViQGt3Wv3UrHcec4n17ShUbPPWXdEqZSAvbuutaYwwMtFfMn5Eg2hMCxH5F33QnGpybv1eM5ET1eLBXtRU",
  "key11": "tYc4qrH52pMPxu4S7oYKtvDNcRRRs8PjTVTgCwnhacTG7q35xBKD4hAjTMTC6ZsE9RqPd2mEt2xepmRuQmf5AXK",
  "key12": "5wv4LwnzA7YBHn8zRtuSgH3sF7atPmmogtyKPzX3oWdaD7XVdreA1qmQ1b9P61A2fHfTRk32E5kTP69k8Bj4Xj8L",
  "key13": "3aQoP4HQaABQR8gohHPBSZucH6YKSdYnVBUEzqzhqxLq7gL4Svhnfg8CQhNqRhAHAYfqYSMcgQFqKb3dwm8Tdy93",
  "key14": "DV8mnRbwvuo2XUfVrBoKEktYwv7b2ja5p81J1VHYniZNtXWNKZoJ9qU2PTdg3SqqvErBXNhQgwCuoYruiV5KKZ9",
  "key15": "3hGPG6nh1JD9i4e3f4XptPxuHr2a1XHgsRur1rwYwfLjk9wc3Gjb5aqr7cZMLgpZ1X4LvA7SviDiF1FoqRUgEtaL",
  "key16": "4tDukRWU35G9gBR4FkiHLiDsyZeep1PKiXDUuvcMWkPM2KREHtsYxqZ36u3Q9JQVgB1w3LCwgeBgu2vQCbXSWxf9",
  "key17": "2QDYENyYsPKxANkiWA84Uq8aZ1PTBTvNpWtoH3E4NCFxLLxQjMsoi8Mp6JdhMoJHbWkQ5jaPciPvjKp6MBj737SD",
  "key18": "4SrYaVCNCoWQFrFue6boL3XthvzXfX1WQpgHPxtQnfxrfQx1zk5bRg8VY1Njo1P44fxxXEX7xTJQk27EJdLr31zD",
  "key19": "5AQdDQzaSKJaLnzbkKBDRwZCiGyM22PuogaGC2GjnQBdtYQwyHiDNeLHLHPdoC27BaqczWD6KwUhYF5vACudg7UH",
  "key20": "38frxySeaixfpNvdvbWkz3wfKpHH8qV6CVSc5A3kK9RWGziYeV5uxkrpDkygzqUUdYty44XzFAk4Lmi1LtuvcQdj",
  "key21": "pbXCTRHwJwKw5A3cZjcrAhFk9vpZXKeJfW37BCd8kcuVCtR2BMjCzfseZbRMGYNV1WknHCrNWLCxftry88AdN5c",
  "key22": "65DzzMcx3KrkLyrNy9Ef4vpPykzLSeQNnLWbi1GKCt6cmJUXCwtvUrUwc6YZNZ3uo5a5CSHDkepnVZC2n2CPbLkK",
  "key23": "3c4hiVcttid7GTA2tmdU5QdjJeAg9WoAM77Mn1xZnDS499FJVc4iT6b2CNkZBuVfhF84YihrMRYkhHPUJRiJbUc3",
  "key24": "4cpACS5JaJPaZgbbiXiq6CdN9rLbgCxBMM1BdjsBveUzQD1DNpkK64krNYdhtnuf3cotQutXxfn3mznYCuu1gDVx",
  "key25": "eNDh6QSmdeS2MXT9JsEigrj1tyJzp3HSQhbo2y54k4Tz6ghG25rgVUN1xui3YJdg2JUndN62aSFMU8qAYGB7BE2",
  "key26": "62a7s2RsbqD1MFnTw6TcXLcD7bLtBmjnKCKymniwwas2igJtzCFvNVZAN2czP4wLGfV2Ka2sdKh91e4yrUiM7pPP",
  "key27": "7Du14TJJPzGPsAu1XeEsfhhfLy5o4E1SDBqHPWVsuNfxfv1RyrdeE1XSMj4LG2Q3F7ZcnJ733HpEcpXiguBKAgz",
  "key28": "5xkk4Y4sXNKySUk9Z8Uat9urG11g5wSXvP2yE16fWh4uzxp5v5GiDbJtsSV6BSjb7zjYGqRUoXkU7aJxbx56D81n",
  "key29": "45bcxvJnYCBuetVHfH4fwn4P5xLeQ4HDPXDhQzYCXgeNQKSRdeB4RNg2S27fttYAZ22N55AEQhBmaHrq8oioN6jH",
  "key30": "3KGAJw6BAMZkP2TZ2xNCcD3mR1pnHe5pjyi8brA8pheV4qQ7wJiPHbephfAYGFLmSErV2ieHU4x2wyBNZBeCGX3o",
  "key31": "eS6dUYz4awjXah3LFwYCsUuiMS6s8bi4WvSkVS2CRDCNWhHJtpztoijRngvBZfNVGCgsiTK69RYsHYCr2cM9R21",
  "key32": "2YQBfkehL9oZvPsUtHuoDZuvr5c7ciWDVXQwHeT3uHmgZ2TKnZNKrTDWX4GAkkXvvvGp21sr51bCtFxifWZiauhv",
  "key33": "5uk9uRnY4vXU5Uudh5TZv4mHPqhNosMWrhmwV3SgAWWaR669ZJc7hNLaB7Vk7q27ghXAc9rSsqD2gyeYGU9veS11",
  "key34": "2YKiG1ddCANaR3UW4twyVVHT3psEyZhj3115eLFsje9aSxfuChDPtB2apFCs4Lqhp2js5JDahDjy14BJQhcPNvVP",
  "key35": "5DomCBDd75kHtgytv9txADYVUKKHanjgNB2Q1zQHRCRHtAqJPUdeDnLQtapi8HpKL7qkUsakFkExskSCdfTMbw2u",
  "key36": "eHfJKsCN9b4TuuSzJxtEHenr2KrMe74KKEo9gp6AD2r7Sha9rG6UFCPkZTED54qHVdxv7pfYh4hwXgVERG49Bqi",
  "key37": "5gdiHHJvksA7s2wPReN8atauJrb2MWx6VtcaundHiQWtJHob7gvxkw1sPAcB2xmp8NQggHg9Urcch2eshnLEntR1",
  "key38": "3meKiVkHezfNEW9kBGJc5dNXBebwp8Uq8t5R6AP75kmZDnDeSC2rstmy8QbE1qBDGZpfWnBtwNjvfX42xggvgsmX",
  "key39": "x83dDk5zMzV4GyJb26CAVTAqQDsYCskZYtHsYLE3K2SYSJnNHoFp3PSNeJ5WBWYwBCwb56hSNzn3ZS5jrU3jDhQ",
  "key40": "5WibWfcgWrpXBKQBCQqD1Wk2Gcpp7uCegrM4ScNFFbFbxfNWhRTfxmWGjHVkxzzciWNo48rRk75dAKXZG5runwDB",
  "key41": "5ADKLfnZs1K9evAv8BQg8Dv8M3oqrt2BBx8omS5uCXXSxUiTkEoxqHS6ERtBfvXLU4zUN8ZXwtDSD7Pm6tgmLJ5G",
  "key42": "5mkFAdNvVECfz1RF9RJDjfReCj1UYJQRoQuYT2fgUmywxcV1GHQvsy8swTMZtGsSJcWy8ttCwcn2BVrJiUtUs1Yh",
  "key43": "3ZcgTeZv4MfpPJvZr9bjuxk94z2JkfPBZBm8JSACDbF1fbaAbpJ9osfTVQqUXRqPktpjpZVjEEj8sAtSXpWYeKQC",
  "key44": "P2nSfMWkzwAsmqmwJGT6hBVaK58DYBnHVYXCWQmADvCRtjuUSokUVtMoe1gtwfbRX9KX1xYvUJm11o1fB78B27Z",
  "key45": "5xfdSXdxpdxWfS1K35Zq6RhvzaaF7N8aYPe6JjGXp2N3iTjNuSXdSpUPLTSioQxif54o5AymwUpJ4VD2x1UDahp9",
  "key46": "AsrF69HDzKWS7suk7okfAUDXYyQ4FTdatpPDUvR1TqR3k6f3koWjf56RPoAzSHSiiaoNmvGGrhsqmSeV4mUUCef"
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

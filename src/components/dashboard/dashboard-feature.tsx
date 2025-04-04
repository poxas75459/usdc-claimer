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
    "2wCpNP1UJmjW2TC4dnivxsrWnxQia1TLDunpxSQATF3nRHaEo88pyvcYjQWdxCVrcgAvmMqoNxr8jnpasdJhTfgY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bH1CwwYWqEZ8GuySmDQFM3PBfMDUBdNqHRRP8nEVFztsYtEAn9chxhJEZgWpJ73aWboBFefW9rFPw1Lhj7QCo5D",
  "key1": "zPdF4W3tpWTxDcme65kURuLWXxE9QUy8tG8WhtnFYgEJ9x7JPwjxLZ5q8gg3Um8Yvt36FwFik7RGw4geKq3K5vG",
  "key2": "51fZWnyTY8E4LQBRZLeWVgsnynQAZA8G3TXdD63yV9VF2Jmy7DCm2gqBhPcVQpzUHe2v3R21aaE868KhPD5UkeD7",
  "key3": "2boUAA11nuMtqBtfw5bWpAXv9ytdDhc4SDPWH9ZfSctn1k75eNpEEywttGkccQK3ePZ8DzL16oi8ZDDSZ7ibXgjX",
  "key4": "4i3YPvXwKbYr87HMLMzymDjQJ9mvYGvu6vw7eYmFtiNtQtpisJRanBRT2Mcq9enYAjPdMvX7t7VbzxZSr7QW8Tio",
  "key5": "3v1E3Ze3CCVbT1REpQrSfMRXLZsuBBj6cPQcYXaKJuybeRKJNZ7Tp77uTrTkQwYFfpApoos8Rp6D9a2GtVpRXtPD",
  "key6": "w4bcvwUfBy3PCMGCHk4mEArzHpwcjRo345vvkCiUnzErk516asPE4McYCEjHjF3hDscF4TonWG6QiyQbwaVszdS",
  "key7": "5xw2xKHsKfuUJSpr3J8kBBWrcGzoiq78UfbU9Jgw3soiU9Jp1nTAJcqhAQGi7HbAfUM3kc5VayheDMASeHGAToxn",
  "key8": "623mFDTYZCfty9WZbKG8P4JxBn2LNspKvLsZgt4mUqTkeLrbxPc5mEkEyBeC6t47HfEFkpddqDfUAds4AVHzA7SZ",
  "key9": "5EK9uydwyDcmTsMAbyJ9g9gmhRb5qR9MTBonmH87HP4YyeV8FG7PAU3P1hdc3rW71oa1yHSmZ71TiBFTi8mLCpSL",
  "key10": "66Q65Uc1AVHVA8pL8VfdVFhGuaq7HZjwJaZug7BsSYqNv8AD9n811Yo7cZFSFJa5aJzLqVmspw7p7Wy1VoNSHj5A",
  "key11": "4porVs8XZEgbLvE3ML2TvsojXLWop95di2AdsoUF3taintb9MPNArPAvKShvjLSbgdtqsbYMo9yKXGcLjfuXDTec",
  "key12": "2GhMVpiCSvzdukvrBuMUGHW7d3WScd8Lhmw1aoZ4zaPpyPQA8LF6KSyXad1NPjtirkHHvMJNk2RmvwLGvc87wJq",
  "key13": "2Hk2zd8swFgznwBSTRaC1RTa85Sy6hyyUGzcZeiWniT569GBeGXut8nr129dcWURRHNmBT8NMULhHzb4pgUBRN8U",
  "key14": "3w6t6bx2ZeUA67gLDetU7x2UetZtqikRz8GaksQ8zhrWw3SkHqRVwVMx2k5ftJECpFTbxrJ4QaSyvSNfyV8vGFKY",
  "key15": "5BCT6Wq6WG5QRGfPorWiio3iq6dAwRaSYTo7Dp1CXyfGBNWMmpCYZHLn2rwcjY87upM51rJA9QPG96BVV18ymZJC",
  "key16": "4nnHuiPRQAWUrMnpMSTUSgB8xS3UnC3DJzcmMNiVt8NKdSNrUeXiQ7UpzNeBicJiu9bRzxitAP9AREAH82CsDB34",
  "key17": "35hkYtg5zQGQW5i6vVAyKjYsZwn1G4aMc7HYZLEY1LZ3NCc31tZqBgED9kXDe2n2FuAptDMAP1j3Whx99HrBWp5f",
  "key18": "3RG5CeAWq2y6PSDSjuG2WPuvNFeCEEtjiXy6e5VWDTRHawogomiWWYf2CQj5MHFd6X6QcWhJvL6PcmiCojBn2Pnp",
  "key19": "59sNuiAGSjLcAmBxRmav1FRenPeuDnzWEyEh4wWVAvUBfGhNeZG8Bu39zUKp4CwSeuXQSHyaTgRgEy9CRsvVoCMX",
  "key20": "47dpw7DhtV6KLFEQuvXyJQ4iu6YiWpTr66vnr6M5miGgGBJkQW47Nc6ZTLx9gvBoGjHEFxMUB3mJSMesUTEdWSwC",
  "key21": "5uQmMKhqmmfrkHd8Z9iHkmpBrjgJjmcsHRvEqH8QzpmvaqNEHoYA4tFq9CckfucdaFd1K23QWpxCLNgci3x4z9s3",
  "key22": "4wHPq8kUHBwDTFVqKcUfCFESStC956fYtkfDbPyWMeUqymw7fBfsb1JJyuySRHXiC7ZMpUFbjgjSxnrMBLgcUD6A",
  "key23": "54Z5vQJoAjxKQWEwbJ2rzPWjQAr37HzEBE34q4tc49e5n9FmKrH9nYBMoRnqh2uhkQQqra6jEPniDwC3HboEefs8",
  "key24": "3iHdpvd1s7DXVnmuvxfe6mztJ7EaJ9S2MXcrvi44dopW38AXp8dd6aDm8BT4d7QkJUGscgM1YuRLy2e2FCikPWnr",
  "key25": "2dwxW9wA19Py34zrfEgek1dMGC4bxLBiwTVwuZoQcuKNHgN47V9ncyk5mX2P15YcoRTuCnAVHMvgsXuhjsAXU1Xz",
  "key26": "32tophJ5p9oRHE93XTAjFJjiW63q5NkC3t6nxR6ZMSR28uvfs5AswKgtQHQk5ia6kk7MpFc6cRhR2uLeTofPiE33",
  "key27": "32Y19VDRBr9R83t9dV5zieFMbG3HheFBhsoJtn6GZgBAUrCkW7tNF2u9MqFGjXyMNiYfpxsNgdnPbCjPHuzmNYVd",
  "key28": "51q4bsDaLuboJqxE4xAtncvrbiG8WjnLEh7Hp4D3zc88iEsEQM1xX8mrpMYkvn4DifMNuwqN4jEDNSvQFjQy6MZ9",
  "key29": "3GBZStna5Q42NqTMURs7GqyvVELd16gYGtARD4coQ4jm4ptnC54186Uye9seSikFgHzmX5VjjSA2N5MZzzVDHhPB",
  "key30": "4HhFac6SsLFbyzDaTAfWzdF6tkyMdKeHn64imKnS4iAYSLuPVtn8A7UXHKDg4tf2H6BAjjKP5nUytMkNVxZQkdT2",
  "key31": "3xLuZtEpAUGAuwm5YNRqceGpNw4Lt87S1wTkd8L6mBerrKzRryHJsp1RNyHtnRbt3HiB586mG613LeJFFr3W8qmD",
  "key32": "2LFfHY5apCb6wCoXutNpPqf3D6LCA71KZ6nF7Y9Qvrg1eikE3Uh9QzobaZtn1rvvGJwdWrR8hpqXrMHbdCY14163",
  "key33": "5v2M3C6BBue1QCGrSFBzq9Ckx8DR58XjQ36TPCMj6eEzaBNdcmPcgtK1yr1iCC6sL9g6zfZzhbcfnVvqyZpS9PHd",
  "key34": "4ZBBDUXCg1c3C9UgnAKoLUgpTwshZweUs3zk8ThZJG3h5nSgDjN8gKnQDdS18ShN8EFD39JkNgHSdMswkCffRL3N",
  "key35": "4fPPFjW452LcXhNxiUyfDDB5xd6JTZWEut8NdguCKiiisu9E2UrE6tddWdwu5gpcTuAntNsUSDfc76zbUG8VvmZp",
  "key36": "2H6Rj6Ho2kVPR6jMtsRQa6oQxLqmvLvQgbFSziDKG3dFQbUKrFHbgo8iMrXtF3xeosTLuS9oYF3sn6FFDkLAUMmr",
  "key37": "5oPKVcxTQt122keYbbZQTH8unzqoQYiKYPDjSzk95gj4KNKB8noRfy3t4cxj8fVJNdZm9i75rmQmR1tStjijHkAG",
  "key38": "58Cbf6MnE1VAtx4GR3aKLqsDFhvNR8XZWJQgGV3DFER7Qbj8xcm9NCmAgFKbhnxxLvCvLxVynoPTXcucLbpqtiLn",
  "key39": "SDoKiALJUTLwpKBHygZbGpRezgx3ZKANvPgQYcfDeFFLyTTS6MznccVQepewRDFPuu69zpsSRWEKtLy1C4KngEt",
  "key40": "4Jycx2B8DEq11WoCnRs7Kao4rcqfyQgQcMVdEAUzhDq7hUfEqhh75mLEGskhooQ7w14Lx1B1iDqNEAJvHuZcVjTn",
  "key41": "2HnpWjRuQtNtzuwJJGFayJyZLtiLXV2LxdJWvw3x1c5LjTCkc34XYsswHBwUcUQmPQV57iLWJNAsEvnVtUE1jF4j",
  "key42": "bamE5B1qWTbUqwPgDHA5SeCXy9WpF6Qznu49c1cZogeJDwnUeatADdwYEyoXkHXEskQ4sXtkTfcdN6iYMJqWhcG",
  "key43": "2PbBmUemhxDwysaxVZceKKGUcwEpNVdrQM1qU4Pj9Z4fn3bjkYxQhLCj3r229bWNMq4EobtgYNkfkADx8f753HSZ",
  "key44": "3nRfMQHYAAGgjypBaDSorBEh4s5vXvrqqrZT7rToeZsX3VA6pYKNKxDR1fLk96Rpfx7yukGh1W4VXRWpGTQt5GfX",
  "key45": "fvbfSkXux8su4xDdLdmXarZ7oZoP8xjLv1cR2eLvdPThGSsREpGgEU3zGSRc4YHp91UG9rw93MRaryk1p3MApGU",
  "key46": "5aHun9P2rSKWnJFHPeybvArUEjwrkMTz3Z6RajXr6eMWtaeBCZRvMeSYN2QHG57eRr3b1MzwBwSrnGiHXTHMq7yQ",
  "key47": "2ieZoxcYbxfdL8pW9Q7aCWCC3MqzX2oCQywyuHfA7Zbbejizac5HvBKvy5kawfokj4RYiL6X4a5VdKfh14QHAJXs",
  "key48": "2UZ9rAHC76jFYFvJViHQfAHmzGwNjQgVLdJzp1gwDGRSdHTiuRMGYNxMgd8gK6SNwqqgLpegWtk3B2Zq44d8KJkN"
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

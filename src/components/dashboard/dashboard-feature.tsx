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
    "4jo1yJMapVQKyazhjdtHRj1FvuuikU6MQwwKqPyEfiXjnpZGF2hTVoCjyTnV4qMLb6mhPuDn1YtHjR69C51uuyW6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s1wrM2Hdo4QqzdREWEAiDpj6rvPiLSd8pLyJpg9VHZD3NttoeTJjBkjereYFDP8pRNugrYqbptpFsEf4jMXbkiV",
  "key1": "8bPLFay9W8gkn6riwQE323zQQg1cKPywLc6oLSh1JxEJYLkiKTPNTKUgLoG6FXT2f46eGLmitd5a6iWwvytMg57",
  "key2": "Em9e69DW86YNcZF4FvVCa3U8v7akaxi5Xmg4uLRBdnEZBaLN3gMKCuu6TDPNsJzy743i5R4oPAWfAF2uhsqFtzf",
  "key3": "3iJN9tZ72PhJLzaZmY422JZto5k8iEsiMwQnez9AALxxxqYUZwXco5mXYB9ZZ5R8sZjijXwmFYHQsurkdBPPjY2J",
  "key4": "5dy2hkNFCeuyGU57tMcpEgdna6s7ev1FoF6TcJusjnaLzDvFvg8koF7EGMRNtyvi3arM6z7pLAMJhknZnzqVFd52",
  "key5": "4VSyvtm1HFhCBnTNSYcLZRRfqqN7zF45HGLj9Y4SoCZDFaYGmZXN1EccvdDNqJGxbGbev5zstghcd7xuhDNs73iS",
  "key6": "2WiFmibUDBoEULgyHdpeuTPv2rTZYc524XAVKCLYKMoD2S21taSAeAZ4JefmLArE5fvQaogeMhYEEyiRnuRs3sya",
  "key7": "4X42KJHXavtexd7sPLjQTDZLkHUsnqdqmQhRnRRMfGR2qHsVyuTiakzbpeDXTLsqtDVPZWaXA1YTquJoeh3PtYQT",
  "key8": "qFkpqV5FRXLufSY7m5cmt6FZu9bGXRCVV3jMZDoNg4gHWmnx6ujTN4LWx5ainBk71PiEDaYbNdbfSyViTPTvZSt",
  "key9": "4vYG3eYQYUD2cgtFBpd2VJtudzcau85dptHoiMNtiDiFK6phg9uYXUi4jvWfWvXy2frGrReTwcXQadWyJbDszAY5",
  "key10": "ibq4N7BYmxac1eH9W5zUVjNqAcL3BJuyt36xoN2FfpeFyVnN2C4c7nuZ1owqMvJGDtQz5kWuK3VzzMY32T4W2QM",
  "key11": "3wqULeB9JHEdKhUEbAdHFGns3BEbYa5C9s2MMG8q32vbvLH28ps41G9UUz9Trjfu3nWaPDdCDhv2qHsSFTqa6mqk",
  "key12": "57w7JFR97EH9nFHSEuDpjeSwR4p4MgoEJDnefxRKSX6wJaQrLYZyVZugmJSrcocVrgVPoatHo9Ppj7HCFDVhbi9v",
  "key13": "3vVZMmx83JmoSc1cSEcVvRSky21Qx6yq1ZqFT5prEXaDSfpD8RRCHsXavYtcsAs4oA26RGZBALpir9kWh6MYzUfJ",
  "key14": "51iviy4tyk6uPEvW2fv4edBRd1fthFNrUB19pPepjQYG4VkgVVa7FY8rMUV2oWAQj4vx4tQ8jse8qKMKfLnxKGUz",
  "key15": "5kcC1c3Vc4ZpHdgGa4a6nmsQJqUFMFv9Qx2JHzz1xyuNSffWDdmcJY9eN4fQuMfeMacgKsbPNT8AUk36BvcfTkHd",
  "key16": "4VkMd1XZ6Ho7k5NNs3SG5aQNrRsSXubgHVvLJoJC88FaNquCLS3joV7euM9WhJ3hQTbTiUXRgvuMeFK5kUD1aRR9",
  "key17": "4vp1LW5UtLrCdzy1WNhPaNUwyxE99fC8RuBgZoJtEJQusRLiRd1Lp2PTwDeYcdrsGCnDDhCKTuDQ12L4PwJbTr9H",
  "key18": "2KJ9dQpm3CyH2Ah9GgzdWuTqToZq8GnSpdAWr5PkLeq1ZAtiK6Rv9VtSeteeHXAGj2DLv1ssSuZY9K3EX2Ag7Kkx",
  "key19": "3XF3GEL8MPqMzocjS1YK98nVvS8MFTiaJ3Pf25NUweKADLPam1FU644C57ZfubG3qxU6aUxguW14NHmGKx74gt4Z",
  "key20": "2dv9yCZiRZiJYBsfG7F4mjXkg5QTgm1HA6ATYkE1qhM2TTnCm9CmMFcTUMEc5b66S8aZePoTqb3ziSu7mydhLnRG",
  "key21": "3XUzWSLW9C7tAcUYv6daGVN5CnczKGxNhCrzTVWihfMuXxcY4LESBsXP1gr7JF9JFx7E67pKGfP496f4eyShLmrb",
  "key22": "3zKJhYrviiA1V7neMF9EcUZFoF2sGaUp6vHU9e3EGp4NFwHv1LreMM33pLA89WeL48d9bYSeXsvr9rwvKJoSc6qZ",
  "key23": "4KR4ZR1z27388WmuTtN3kXqoRm79DccsjFda45bqf36PLT2fV9SF5K21jkBpWiXCgFcChZF5WQzWiQherNMSJhLm",
  "key24": "5tc98a7AXAj2UEndDd2F9rNwdMcEyU7w7jAEaHBA3qQhVySfAcwkACjMyWp1KmznrcrTV2LMTN29TSywwNcP1HR1",
  "key25": "52zrziZ2eoEBGrxrkWEDxxkDjCtkDoJpCwUZnzRWyFty36B8CtWfmcCJ64ya55n7dSia5VUnP4GkeQa7UVKNwsxU",
  "key26": "2Ys6px5aDUggBUTm1Xv2nDyNA4o45qjkAniYe1oWcCaXUfuskoxv9633kxbxt4ReKJ8Hv49jD8ECJiByERDCbRLb",
  "key27": "macmJa8KEi67cuXwsdJLfvpDBsg9eBmk3bDEtNrAqSkkXA78WVshLgY1hwPPEVcRSuiAikZXHGX7mtSmiTStZY8",
  "key28": "45bGa8LW4NRmoMcY61obsgS3ezQK5YFcrwhHfqKPhdxyvshCdS2v85brh2G94JhdyoY1GqgDQfCCi5NtrwNUpoAn",
  "key29": "43MRkXvUhYdVMK8cggjHJ5wjs7zLzJDPvdnAzufQeEz67S7FdwNGHhVgEWnyuMneQiBKvAaMVjabkNKimzYByrKZ",
  "key30": "5WYCw5kSH7b9ZKMkogqDgL7WuTw6pBi16PZUWnBgNEbLbagDr7Ck1LkUVeTxttUVnuDi1r2iwEX4QhrX6bAKKVWN",
  "key31": "zvQHymLvg5Mu3QzJUHSbJxQgWkg5EmX6yGR5b1LRNVEUNXdoZkVVSU7SMEnp8JfR7hab7Vvm1PQpQSCRCq7HBGJ",
  "key32": "4bRguydHQtgXkUexHj3S2MFbErSZkbT8Zzfc1j62ws3NUCzf9ikPXBS1HLdqbQtgJKPuqzXBKW5fjyoKM9NepRQX",
  "key33": "2CZwP3AGhUXPEEgLMMWXXxQMGYiNTEEPYUzpsgtVfLZjXfgLBikbztkAhqqZGivt1ifai6i95U5oy9HcBxN7Jb9g",
  "key34": "4KQcaw1mVXEVTAtbBqR7GsTQus7QxgCRf1ZCvZfXW7biBd9h1hCMDmor2mVJSv71iJHRuDuVXP5quZ3JvbeoWGdN",
  "key35": "3YjNL9V8EKVuhuv3LKdD9aq5dqLA3tXJMAhBSMAgXXr91zS8hM2mKRqGxFN8Zc5NVAg2mpbS5rYN45W3oz6MZ6Kz",
  "key36": "3tdDeCqpuVmo73ANEVKPfSnU3LCawFJzfebgk4JZH5Pu51jpDkUFx9pmzXTDy99khPmPFpV5T2kMcZoPQ57z4TNX",
  "key37": "3aCn7tHSx1MDXLg7RkGyMZjYN6BomGh79gWCgftKYfwLddyPPrgMkNL7UQMYkta2En2H9S5iQ6uktkCm35vUdQgv",
  "key38": "4hd31XHgS8foBZ3crHaen3JF1coNXLxS2yoQSjj3XyqJmvZHLhGrKsTzaaSZzgfPhG7MYQeD6aD7srsK4FaKcPHd",
  "key39": "274kggbYFQQ8oCwNXgwe3UkKBBYfdPSL1yrXRwFpVLnpBcwwdJrwoAMMhzoYtna6shmAzQ2uJ2dtyT98jmyD7Got",
  "key40": "3SrnnJaTkwn2wrwTLz4Z5T7Qs1SLnms3RUT6LJfBg6zttoSLoL4tKSwVA4MpFL5h2VD87GCRHcAeJFbXDakJxGcQ",
  "key41": "32Mr3vKgXPMh3S3eeE1WTATek85RuM1W6XeeoBnXFdMtufpfEXqVFMBQM5cPCUzsJ9XYeTZ3D7abSGTDvhsMasC4",
  "key42": "5a2QsMWSwNi3imwPNMgGDgF7d63fP8BqgAhQzDtyQYhQeuESDupWJYX546DxThPqR5oRThPXESSc6V7BQxaNz6tZ",
  "key43": "fgZzg9RaJCqLHWR33fPtSB85Rzk34GG9sn84P9YvwjwrXxundP3C9QRG4oQ61NjSEvzSt5UMoxhA6ectcSRsh2s",
  "key44": "54cR45ArFdyuXzZTDFwaHDaXV96NXFKAAk3jT9BzrMDVfBZgEmowTmb2Dap96PhetLVSEuNNf2gxLvAjhWLkeAmc",
  "key45": "3KYaLcjbMg9JDfYQPLuzbtQzf7yWqs6VhRvCAuTBhED99kwEepXdPYZhUDrUFc3jxz3TKj8ZvW2b9LkW7YPKGa8S",
  "key46": "2ES995gu6M1UoiojPMgj9HzzDq8RfbCsUfwLoCeynR61LwNKxyygkUB1EiuiZXdxsqUDjFup9KiRcWkuP5SLfidK",
  "key47": "GfTG3xFnH2CH7rNe6cs3F4zeWQCXQ3ojxx3wVeomaNrCV2wrpscUrxqoZ441QH8qh6g9WgR9DZduynvt7BJ7yNt",
  "key48": "3NTaGDF6aVZr2BW6tAWCFxME9Dqx4qyU8YvjHEosKvSVoki8BoLQsf68aMrFvKkEDVEemwvbZR1XEn43V7AaCPUu"
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

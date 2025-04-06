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
    "2JriikVzR8KWPr6j3HT5Ks4TZ4T8ydN715FqMsbQxphXu8XuH7JymE1gou2D5bwBXsLUcHfnCTVKyfoB3b6GdnoG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fA1zoFR3vjk2Yuf83tzhYfg9ituD8LUFg2r59U4z6m3ti5ht8SFDZeZPLz1qs5hRumHUE8ghK7R52D1DFawNE23",
  "key1": "3TUtYN4WsBeLQyNSSGduZFeGFMVUNCEVX5rdvk1im9hsz4cBoKixhvaBsdHQY9swPR5AsDZ1FAt3k2XBheGQTsQk",
  "key2": "2WgpaZqZ2aajXczu8XGLipozx6GmCmtzNf3hXNv2j6kyT7FbA7SrG6fBKoVss1GmUQHi9Do9mwYSvMFVdUULzqM8",
  "key3": "4k24Nt2maWJih5K6rviZ4Tr2wFf9E7Svy2uAF76aSFcFvcn48bumoLANFoZLdr41EuPhbzL1Jhr2rMb3KqMvKXKy",
  "key4": "4P2fi8oNyiikPuRh8MQhFX15KpKarQHW2qzE1QnQLXsWur3G14HhXMPxDizcEUYYJVdAruMTusWQ5w71pDXFAdAC",
  "key5": "4mYRo7EHtE12SnYB4egfUKFDd2yzk2EinEjXszDWq7UDNuNHxkYb3ckfAx5Kqptpzc4iJ8dnVFtHKkbpXWBQXmhH",
  "key6": "5wFwXC9gnVzFYwNWyQLqQ1aKXk2cyYyLfRhzwALGfhHm83LuPrn1chmKHgXbRco9afzNJvJ8niz8yvp5VM7QvhEY",
  "key7": "2UMtY9craqyxToqWotssPJdPi1zdPdadbSSg1EFf1vpfJfjUZcfTX6TrYTZ6U4zAYNZkwiGYX3SuZJgSLz9jyAhp",
  "key8": "2ohh4EEnJByp5X72VyA1zxPF6XwjAF1vdmfyN6zbCFGihF7px7TJPoxywzK14WyjTodbSFRdTJLQXtiMufk96UBC",
  "key9": "dTi6RCUSvMaLemwDY2UqW5chNYKDCmtKxS6eL64Lbc4nQDeQdBGrm5rstqYQC57Ja9ruBoMqamBmchpXHinrxjd",
  "key10": "4qG9y1YiTb7FHYiSY4hugQpNAbd1ytXaeGRGmpjp3Lf9YW4eKhrAjXkELeyA2D9vpqUpn6aLoLB1seCH9tCvjUqd",
  "key11": "4DjjTkss7zbodrM81UWiea4XbUJmLgakLg6Ef1njTWkC2k4LopCieeuH3Jfdt4gdp1mGydqM7aSby99AhbpuCVQC",
  "key12": "4cpaaN2ffm2PXZViRo3ZCcejdth2J3iaemzijBGJFPQGD4LsJ18xqBseRm24vSYvKaH1KbtQmMyzJWcJxYSd6qko",
  "key13": "4WG3GuuuDQhZdPQh1V6RutjkKjuJGHNwbgAPskHfHBGd8zMEEyekxCDHyLyipmPMAxqeVs99cYq8fiNFQvBx3irj",
  "key14": "3ceipKKg193MdeRkvyT4anN3t9KFExkh6MJByhzkCFnSjJcrfzBibKkg39okBuUCDvmtgNhnDUsoyUoP1oYbCrji",
  "key15": "4TysqqM4KbATvRPndkN8jKCuqa2ZAfopSiy7gqrjDEQQBE4mKAYS9BPCbTBWa9Hf5ykXXuaoNpR4UQn1TH8M93CR",
  "key16": "66ch7ZDWT1S136wNwzhvu9Afq6f1u8bbx5Cuggc6uwEgn2QmKTgMQaRFy86dvnQaKBArYHhURNaogDXQZE15MgWC",
  "key17": "fPdNhL8gnwP1qWAkDELyaiEgL5oCVQ87kjJYmawqs7jmJT9C9JYm6ZEdHAKKEgZbCcbNJm5eqB7fnRHYoPQQDSF",
  "key18": "3HAmuUzAgHxBsq3QC2PffUcd14nJXBE2UhqdTgwqWzpttdAxTKYjBsBvGQfb798T5Uh8Rqc3Bh5xs7CDQpocEduP",
  "key19": "WvY5XySJQdkhtQ7v66oDGYAUV9XxBQ9RV3pMTGnQrDx1fmyHY8feuWVtzM2oNqeKaB7DuRNQsdBZTBAfmkdXv8J",
  "key20": "5BakvSNvZJeBMrtLNkQk2jqJy5BFjad7i1RsyCxhPADqyGq3CvAwDmLMqcsi1dEMLHv6c6TYKqHPx1PsZXh3TEe2",
  "key21": "2ySXuoX7ytLGc1VER4MYnq6TkvgJ9tKMyaaLkN8H5KGWjzd8PFu9M1LVXcx4z1V9xX19aKNE2KUpDduZNLV5bnxY",
  "key22": "2sPmJaisUXfCLVaEtneLhH1pXhEETzTmYWh5HAty8hMg5jNpHhU8Sh7M1MS3RpDcHEGbhPBLjiasy1T9j9F3QTHU",
  "key23": "4ssnTc9HnxEvusRiNigyny3hyykTBoMzaQym9QBrFcbUq2MJTvWT8B4bAHGsdd2JAf7maXRQghhfQivVmZw3xtc3",
  "key24": "579UsPV6wwChzC4KSMyz9gj5sTbkbgw27miCGLCBkZbFPqP2EnEDRbK1joYz82oekzpY4mnE2nX9dYfY9zyXyt8Q",
  "key25": "4xbSyrpxyLSPymuJ1r6aXjhijjj96D7xLBEHp615FZiM2m64xkviFGp4kggLcpxqEA9DA5K1u7povxzvtPg4tjcR",
  "key26": "3ktm5iCFksrbbSxiGmGaNjMtVMXADVwzkSxq1p31eNc7VrDWnL1r1UyW5Rfyh7VLCTpuzT41mcaozX8yVLZCDi1V",
  "key27": "5CAMceaiSU2N46xwTiQG4huw4YuppabrBKmn1DjgTaskZ8ajF4To3S5zFS3wQCWy8nQoKtmTM2cu7dw2J8zAvSaY",
  "key28": "23kNwp288SPUhHwZwBXyGaWPttEZYPYXfY6CyKpPBCvfGRkyXMiVVGaB6KHEDkMdEjKFngtbWjUwozHy93TWzfAd",
  "key29": "5E3e9iX1hwEe1pijWPYoy562fN2XAkdnM27zWX9DTBcXQrMRUBYs7L57QTvGi9bTjW52iFL6nQWXN4yRP35GQxry",
  "key30": "5bVC7xgwsq5sefrszyxj18HPtSdDZgLxXNck6GTKoPsWQkX8iPxLoDhK4z2SYMJcGC3TBeM3w1LvQnDVPYgvLBps",
  "key31": "mTj8cosbP8Zw33Ez2Mq55dWNPVyphasMzFzHXFxibHMiYXRYvVw9BqBTAEGpo9Mhs8TJxXaq6mdcvMHkLjuad3a",
  "key32": "2GYEg6VFByE3pJwoHfj8jxfyTsMpMNQ98uuFXxkCaVkPwfZjpqtQuMxLg1E8qZVrN59WqNxM38RtzNPVfWcVpK2k",
  "key33": "5ddUUCV7erWyRhTF8ZJmu6JYK8iNCnpFE8p6NcWZA2ytrWkFJ9UNeKn9LskPvUL31yUmUiZHzRKDCRhnvDS9kbYV",
  "key34": "5RebpyChD2pTa12LWoZzKwtP5JAgFcXEYpT5WCmBZhdomrEvHAuYvBwjbETWJuzBg32V4nz83QT6a94isuA5pzEr",
  "key35": "h1Nb8d1ME4qKM3c8AiLMLdCEQcddtztSNxyF2WYuTuMLUgDqEY7QGwRSE7suEnexzuuv3DHquV4TBMfotLjNkdc",
  "key36": "5h7NwDoK9qLYzpwcxD8TkehgXEuM5jduYxnAT6Y6tzWGp1g7BdqrQJvLeaMMQKeaupenY7GqFHXHCmTNq8MdYSB8",
  "key37": "55ENumcDJy7BBV2aemWyb6d3AfysiPmLzo4t4o5RD9VB5czfWdyrbyzpGS29frWDqi8cBqTgRH3xbavq8EnCagjr",
  "key38": "5sHBkfsDdnrARNDfSW8UFQ4D6w3iJFqUPYezYvB31JYXAyaj2Gtpe7Wjdx9EosuiycoFqjonitbMkvzBgEG1Msos"
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

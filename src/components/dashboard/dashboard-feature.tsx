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
    "2vE29Qv5uCDvvhWBdbAAX3eyoCoqm8VYg8SMxPrRT9TnmJysWkhyLLNQPEj3iMeKqWQFzycas7M4QZxdZ2Xf5m2R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SWnedD6cvMHwhNdxCQx9xhMbrydEVWtGtDaWqi328u7nkwbWPnf45wbsgya1RegCZEyBxFpze9FjA1kr65WJZu5",
  "key1": "4DEiWT32pPFSjPGTqgZhTVSUDR8xmAzy1adMihGr8zUc3jkBGACBSc9M2k9ZR6rcAsSnJ72hYNtxKAigrTtooiUj",
  "key2": "5jV7yveYKgDfEyyb1hJjPceqt16eiX1Umeii7j2ev9VEkMUKP4gTSoxHbmHsoCntGhc2xthy4XepF8tyzpfU6ZLv",
  "key3": "6zwvsSJnN6FDrQc7AsCQsReuiV7CmSKubg4TS83HmSgx1reKVwbPnzZJVoxq25kkVYycWnzhhVzfFE6q2xb7XnL",
  "key4": "4BKkGqkbaKWVyhgiofHWD2VaV3yWeG74eQhyYVcXtrUm8WwjAijMCQ3ed3gBMbkE1jgdfVJogTGGHm5zCnyHai8p",
  "key5": "5SXjND3GbrpxEhS5v3Rnt9GhRopYsxPN7BEyWETw5h5GGoUx6BTGrNPXpm456ELZa2uMbruuYYYGnszETnbBYoF9",
  "key6": "3A6V5eh1y59HhNPa3omDeiKXPz4mFZbXbew37q7Wm8w87LmTESSPEwGjgZZJ3e2Km1U7sauY9wKBk9E3MY6R4PiQ",
  "key7": "5No224ZWh99H8WLhba52UifSje7kyw8NPDVLtBAHCqQE6bBTHjuSwSXFACZFGFAGCcBprE4m9ZjbguHFWht7DCNM",
  "key8": "3ZrUyF8hfYcX68FtNogfEGYiTvy1PVUSTvhbsAVjppubTkZJxDn9XF6p4CxRgJoG5sGZCmxTfkT89pqEY5hT4UCK",
  "key9": "f9zqTdUf8fMxFmudXGCViSNhcRvpCLzpvpbssc9dfYfSv5pkoW3PTBtxrVMCoUCoAQQ6ZFsjBxteDnSEmxaRKkV",
  "key10": "2YijXTLyiopKR2sXUy5v89mVY3aeVmgdyBHRRSHQRyR6WWXgt95n2tap7DLQwwS938szfrKLvPCtfH6rHuLxTvao",
  "key11": "3C7uxAM5LEDp9E7nLjVjUHFtxYqwjevRrF6fTKuGCRmHGfiLJN46BzyhwW7267A6GL6ZexYDhnFoPTUbY4pzbWZq",
  "key12": "3MoVDHHtFSskDfvYecwGYJvvN7gKLnsNPzDCEbNFXUXcUBtpfYPYLvMHz2pBBZP7ALRodtK1EtvwqBaMtahxkaXC",
  "key13": "yLnw2KdcCtzCsWYrDF8HZ9uA9hZ8PHz6qbWx9nA1CayRTDDtm1ucDy7e9zhRdsyMyjUBqfQg8YJZfqqBtVXexX4",
  "key14": "VgmWTcucLFdKRtxmRqRWTQQJPes3fCxC16S4EAmCTZsuy4DPcFd2XPhS7cPeiSLH7CdtFeXWYruHqH5Nhd6BEpE",
  "key15": "5QBnym35axXs7YUJWVgpwH9mcjPCjQCq4VykKZcygaCNGjg1FzcCREeewfMsQLraFxewQxb1mZprCYqJU1JPKPaH",
  "key16": "53bS6FSEeNLJQWdMKHuy53KKdjB3bNEFZFVvmrR1UiwN3F4rTkzWNWEB5zs2o4fyvh7tY2mfwBLo4xh6sBLGCh9F",
  "key17": "eUSUUvpBwT69bQnJp8jmBPsksHv9wRph5ebojjNRA7CoeCmUNtuieBzG5y54oveSurWSUNczbTmssEn6XeZV5Rm",
  "key18": "4PMRemBZ7MuFGyv7vP1cV88k7SULcuk1yXvfiTKraXQtp3NsnTwJU4oVajeZvemrCDTmmJYUkboQ8jTowLe2HmDA",
  "key19": "2uT8bjv8KqjaQXVi9anKcPQAr7eqhHJKhhrzi3kgXcBBadteNmiBXMZGDPMnzqUn2PXyZNBWX4mVA72rtCfgnCky",
  "key20": "2A2MZAQcMbPD3Lyf8DyAhKBDxG59ikmx8wVWsa4pGWcjxyLt7H3JC8y5Umqzd3M4qUrVdEEt17dSu8mwfyMtZqAy",
  "key21": "PpMMS8k5sC9TWJKwmaGuEGEk4FECVaToAjUQz9Knh5kkoxGEYpyu89YwrAFSjtugHfd71tjcMVoYhJRioQJxSxF",
  "key22": "5JheN7HcvNpdScSwVGKNX6AZX58e3TdA4KAPFtuK31AnvsHrw1DNDSS2AcwM4N9SPXKqY7QfKy3XTtkk1vnJt7VW",
  "key23": "47f88PTuRtYi9QaWuZYqTFZWmu76bKKfDEe7b7kvHwj9aNRSr7ntM433zPjNd9yRqNvJCoj1SPWky9dbByLYq3Nx",
  "key24": "53Hhk8KPvKda9UZ4XUDDghW9pEe4VjpzFGuUsxn9FetcmdEytzmhxkwdgzwgSeCrUNiudG1qL8AwemytXUDAw7Hv",
  "key25": "3pTxRjFFN4Rjxop2PR1vNoGVyPDviFfUuYXBYDpmLXTwYedeHYVUBGHrAbvAqhLBMwy5xz3NbBamJBBkc2GcjJfP",
  "key26": "2U2VAMCQjPVfqVLVk3hgTFz9Ehcegp9XRYWvrSdXLc3WXUZ8UVn7ZgCJ1T2fQzDARcsRvf3CRdnsrKy7vRoRiMu6",
  "key27": "2KD5g8HoxCjn2h14ZqpXjdCUDYF3j53xd4M5RRpdcCRKmf4kU54jghyDrWSFCqh8fXKSMqWq6zCov1pkGh5HwL1M",
  "key28": "4TH2eBYcJWe9sZ6tdbb116UuJfrUDkVaNW4eRiPaENSiN8AidT19NZUJ7tx7CSsUwbWrWroy8rL9exacqVD5pKS7",
  "key29": "22qtQRMT1WA3yRFhfWkCxUJ95PnmvyecYNTAR9tPZmbg1JVwUkqPU1i4wXkTMGh8xCX1QVZvjYVrFxE6r9UJnKUQ",
  "key30": "36ox1HVpNqvTWpPDBPKAaVADQni49ttEsk4vYgoWziSveSFVG6RKFBRPQVAUGiyE58ZZdeLtjVrYzCzYoP8i3kcQ",
  "key31": "5yViMH82xRxQZXPX25Mz1zjBPNWzYMFPc5yhiGJSfNghE1hWCsw4TS7EtSi82DASYioKDZNpAgT7gM143EFFTrhQ",
  "key32": "9owAseniUjonP9LU7X6m4R25By5scHCpcEjdwbsinAR1ZczTm2m4gFdmNEi7xwAuaA3wdYkgGCKAuSz4v2A9q6S",
  "key33": "2okJQ2kRzWGcnvD927JgKkQZfd2jRFvQXBvWjkNCPnyuVm5EspRs5rrG8Vjb6FkGVfwRzFSh1oZXCCpNxDCYj2DS",
  "key34": "2y2meRsCy1sEn2qC5vKy1w9DJaYyCFmEuiXLrU47FemRAPjW27ds1X8k8WcgcESA6VGr4W7y3s3MZSkEoyHsRbc4",
  "key35": "z9rFJRkvwezQzsFimEVnoSHgg89bFhLEU4bHHtazqp26zRPAZN2i7XK24mzAXFQbmPCkTAppnCoDTW1wCtQNdTR",
  "key36": "Hh1z78MxhrXkhdD2y9S9qPASVsjVZpM1LJNgnJkgSRLjMGdU8Gv3pdEeewciXop2qP2n7PGHALu4JUmf5exGRDC",
  "key37": "2SuwaKtAFgXDKiocEJFBYf4pMcvQtLfMNdDv6mpvWr8km5eqjAbtXYJNxv6MNvYUvpskYqbFPBvdh1MiZBAVR319",
  "key38": "65TcPqVVgDALP9ZuhMWrE8z4K3q6msNfbS6etQfUmMKCTNsnNGuL5s2mJMTnkoANoRZJyTyaCh2e4KYbj7bwi6cp",
  "key39": "LYqyA6qrCYnAJWtFUZW1XEm38cAAnx2qQejQaN2Ggu1G1M5g2h5xHPtJc7USj9axcVN41nFpEvpfsAm7gLBMoNC",
  "key40": "cWUWc9buargDYVizUsPsf5ukiKeM6coE1QXwVNVpBmnxUfwqa2KZc2CziizSe6jjjdM6ZxCmZmpaA99d6EDExhe",
  "key41": "5P3QuAYYJUzAJ3kHrF4vRDoSnUz4Wne8oCMx1UDnpA9apZMNpe9JtsfUnNdQ8gW3RDapFoTZE4ymV4xDsSuRDMgK",
  "key42": "5jo6pWQjN5MraSE4174n7UGUX2ZXVp6S7YVduaPmmYNXZRGKkuPcn5DgVvtrLCAUSfKrEXRXYCz2RcSgsBknEtPG",
  "key43": "53nVw2wu2zDCT8yD9bxREudq1SnW4o1hbrR3Wb6U8zk8bZCSK8YaM54vEbQoGDxeTRRzdBfHX5jjoz1vsVioDGBB",
  "key44": "4WduRnDiWHSC1BwBVEoDPbSiHhPZUvPT6fxUKLmo4BQ9TRA7nUz9bGefNF4sodV94J4YxuyAazsdrzCZcxPZK4Z3",
  "key45": "5yHj3vx1n1puiZ1s61WseUckrVkm3X4Yd6Nij4ZxLPM7scWytW2off8uhtu8jni7MPaQAPK65kHGBnfckihLsFwU",
  "key46": "VsZK1QFLGU5SJjcN7jfGihULsnzxUbgks9QCW2pTu3yskuSo3DX3rZU4wKyzNiC7kXnsJd7RWMzAnLw2XiqcdD8"
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

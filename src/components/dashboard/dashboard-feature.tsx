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
    "3nEi2YW69QeaGW6pQwYbMhgAD8g3s3rZhVPZVu4LaNsBfyjUiD12JZjemqnj6kY1rALMMwkMnfLXaeQBsWpB8GGK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57Q2NcDn6ofKHLrn1gG6EydNm3Hd3QENhmiHcALRMg2cUkZa4LFGcKRkVSaqAa7kLz2CJc4UFFy7npKjxyrnZBse",
  "key1": "2E8duyL252naPXDQi2tvWmFkKNJAK3D5rVXD81R1uuEQ1ckvDv5otKa3YPQBRjsCGfyEzXhzTmrrUmK7YuFgddba",
  "key2": "5ERMAFNXCoZ4dnRqXJCLWgjvGgH7RM9MNQsBFSna49SEtReDoiDtQwAyzAvhdGYuCSAVqCX8okwG43UxDCFWWAUS",
  "key3": "4wCCM6RKLCXR7PUbbSJzqShCNTAt2j8jN42dyPvztiN6wC7BFhvPb8hfxR1vfh4D5g621C4Z1mzg7JyMPhBbmhXY",
  "key4": "41LbGuCb7yuR3fF5JPGVpTvmDBcpejP29YVqsi77Gum9XbspYghWZvzG4wjBT9o3JoFM8VabEGgtRTJxzHL2iAtq",
  "key5": "gixhEFmf4ognzBCVmc9RTBJNA4DwJDdMmZDKWVq7dygwKLP9RzVCVvcH8CGK29bAukSy5xxyFLmArbhKJGNYe3s",
  "key6": "4N1SksKJchm6a2D2bAxkBFAeP9TL95oLiuYCP39jYBbagkHp4GoqeBc2euHRWeH7zxiQusZVDH1qFPBmvKvja3b1",
  "key7": "K7TKEJ3Zfo4hwZ35tgooo6vrkntzNY4vLytnh1h2X5Y19hbaLfNZVtpBmrrBGhMDuWHmQcpBQrYY87HVBEnawqe",
  "key8": "4uDiVbZvShG1uNyRKyrzLPtdLrY9WQsezXbZHC3wNXCrBFTGi5grGHf12Zhp4gmWTMATLX91mZGLZNwiFGqbW8vD",
  "key9": "4xNZWkroCwdDeRtyp38MoipvWQgwojTiNS3bRbUvjwKszSQNDyCBeB5NrSJ8YTBNwM3biFwXjuW24BkAgac39YnK",
  "key10": "2ffJ1wA68r3LykCtQcKzS1AXsA6D9ptK2rQdLUF8bGjm9XxhxR6Rm2WkcjTYi4trNriQKhPV6gdrmS53CajDR1tk",
  "key11": "31z2GDTXedUmEncyVi2jBLyEPhKnsLXwY3kQJaeiTcR3eVwTTLdVpQM7uMw4KsFyRY9TyKSmkHFntomUTsnG6cMn",
  "key12": "5ZDKBiS8AZgA2iFLYEkfcikDFGp91aK95ZBgNvY1Xue4SektemtQP2nugVUQ6TE2KTasRHKfxW7kJbwsuRTnnDJM",
  "key13": "4jxq1SJ3Q25Ef4WQT3sN5yD78v82WPjdcPH3dVX4sbbb3USPGAxDshuNagEJu8i85gqxuy4M2fqDQdwhmkWDBTf3",
  "key14": "4qpTz8nqBnS8xnmY5Phzggv1aAwC9UiJJGph4wq2mHzRVj5KJkMdicWJ7NcGkddvDtbVZHV1HLmzBwPUrrPHaKJK",
  "key15": "5oXwuMYxPgwwkoGpGMVhwvCuinfQUfnJQeXdQqRY7zNQ8V24RHhrdWNkwJs1rDsjvpvP46SxkiZ4VBB2x42fLr2E",
  "key16": "2Az6k6HL13gL1EQjR9afjPvpkmbWz1hLQJCPXJLdSFAquGHCa9xzBRexpkJN1meG9o2hSVi4ThMwsqJJnWnQVmgc",
  "key17": "5GEnqpdzJ3zEszmjsDyA5f7iFKuQDyQUvxTvk8AuJE6vhKNdbSA4hQfmbobsUFo5E2AoKBDcRorXbbHcYE5ZE1CV",
  "key18": "4iPFyFtiTC6HBLNUDQdFUTrVH5CGXinpMfHT6uLbs65sMQPmV2X9ftjjNhwc3Z53ZnbWDV8Px8JRji6XDrR5hwXh",
  "key19": "244idutFfzLfE73mVvdD5JgXvSDh7HMGLq89ccpsjsvaaET7jvPDHhmSLh5aEBXgaRnX1XviHSvnDNQ1KfGFjdPF",
  "key20": "3y9bntrbURw74w6mwg654RhRWLnsDEzXA5XmkhZnC4sMCw5qUs7AW5EBjEzrANE7PsinC5ut3YFzwUgjpSe4GMVx",
  "key21": "3cg8eSvaXLrp9PiP7EsHfAD6hivvhhyMvyhwph9EAHcArPPQr7uP9PeopifRTK91AEwXQnNizAi2ev7P9TRwFYqQ",
  "key22": "2xej3ouTwkYw7AYupXqAQHf346uGauZy6T4Fzo3US6DCSAha9uxFY6R1DcsQsV1BfcvLFz7qD4mHSJ278bhrCc5K",
  "key23": "4JBgJR7bCFzBdLR4VHqUV6cxAnCMNj1sAbFkcNxM84AXR4AHwxUGhjjhwa48e426mQWHaaDUQQHfK1zckbuaJrF4",
  "key24": "4qTPDdiNPHNCP9NUVwcknGNckATeDszDAE8PvoqRZQztyq8iqoVHwy7HBf9FpqxsRys7YtnVKkWe9eCKafSBzS3j",
  "key25": "4mGad9cj9nm11MMMGsGbiiNDQVrDqASYq1fxx6SQdJNeiHrXLUEFRDffKZ9hHYKZfxD3EXLPjnmWPMuuqbGqxMEv",
  "key26": "35ny16efBCJbs4WxUjyawb3p1QUv5UZGcRH7tRtBARNVNzr8iGhqSt3Xafmq89ps66dt3uWpxUGbjUZALwMKDZ94",
  "key27": "4bHfPkEFtD53R4JMB4d5Arm4tF4KeWqZ8gKoR6P8yuwPnKtGbQzf7RJ2Ne4qoeJa1Z1E3CEApnwNyVHENmMGarQF",
  "key28": "dPqndrpkgd9PyFhSGrbUXFL6YvwwvtQ9VuN4vDQf4tcSR5Wh6S8Ysi8dG4UDMYAeaTKhEHMTV998Qw2QfAXEBCH",
  "key29": "3jLcXo4nqeYfgQaaG2vpWc656RHuFtPDehvcJuYR2ir6xHnVqX4zRBMxQhv7467nb3CxNxWVccoM8dPurjYgvKEk",
  "key30": "3BfhMQSTErAoGm6H8aNEwuSYxpAJac4LjRVdddtDNBrPJnyAKuybRFTh3DvyVG9MzBkpoiyJ2nFABe6dYgtfZTZQ",
  "key31": "65BgPDeTjwJnD2283hJdSEBjQNPpqNxHniU4DwS9S1u96QwVjBUrGnNqnzVkkcZTuxeEYWHFZhdU7AfhKfgLUV4f",
  "key32": "6oUqcFapZHqNkL7MnwQUZhajfpydnnQFPT8jchRZoVmtyurGVgkRAjsc68VenLYeiSHK3W3jBjyoBCRiDFVyAPe",
  "key33": "547u8noKF2QDVDPmjSdWQZFtgHdmBa3NmvdVXRsYpKifoehMj6qfeopKEEyfpzem7oFckKicm46exR8FtbWpLvKn",
  "key34": "2cutdP2mJxhcbSjisjabCV9D9u4Ki1JzwA9TmmMSQweCEsXfyjvoZfCrwcpuDPBAWYMcCEdsaURwwswLV1EpbvV3",
  "key35": "5VA3qfb2M3qza8eTh9cycSnGoAJTVMLcH3VCjEQKe4Vfvf1iLu4xxB9uCPQeRK4hBdSQuuryE35auJZLJorngSjw",
  "key36": "5e8HAre77DrB6K3jvSifQk5VchePgqDyrpjzQyzJ2avgrx2y1JWySudZF6oMFeX2waZJn4rH3ZgZ3nxzE1czaV9q",
  "key37": "5EV46bDi61o5CrZNJWh3HD89d3yhLw2cFpgnojk2HaU1gkj3N7aE39qMBpAZbZEXqckhD5vgYXx6iueVWDJD9e4Y",
  "key38": "35NWhy9Yc7c9vkp3TGRgzCe8C2aGSbUcTgvgqUxqKJpohxYnino4muade7nBE8AVQa9Zzuc7GwmeCfDmpi3KTpkE",
  "key39": "2Mco93rbuLRdCgp8MkdbBxe3ZarZYr5NmYncUFk2K4cPR8r2grRHfm5jGuaffg1HWcXy3EPbdjbd65iKqTRB6ofz",
  "key40": "2GyYJa95VJJDoa87jdPGFfqBeYjjeVLuSebLFrebPfPUQHFUc3HaEjVKVykFtD3EQYCXxSb4DmXg5PnAQqiercov",
  "key41": "ZueiNY3rwXNQD83RvEJCH3AVq78YbLMuq7NLH43uM1PyAWV1pdq4xHdXmfqZQbwyGUdkzBGfobhBw5wp5iwKEdM",
  "key42": "4H53TRoiSARMvLHve5RrjTgUPvzB5XjW8W735iZRJjrkt9aijN2M7nbh6dpFzRJzYmk3Qy4Tt6kCEsRLAStdEEeG",
  "key43": "2L8FTJE7X11hwzXpHYi9qFLXXk1DBnjDyRZu9F3tjJfidpqVkHsXNfegW1kHJwiUdLYcCWsCEyntfmJBKeNAXMGd",
  "key44": "4qzGWgh35zhVVaAWs1dvmBeRW6gq78X8dgF6MJUqzpjvyfwS2og9RLumtsaTw5UGmdeH94SC3HWQLXSJy4685sST"
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

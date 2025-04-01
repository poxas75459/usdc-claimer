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
    "2kzUe8ammZ9V3oFcGvzs43fNLskgoPKLyuNN4oBnSfvGH8KNESkwEWDj5XT4QroVaZaaMnD7kLGsADE48yCYynd6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Sq7AwPj9N5qPKryZECYfapJCGjb6Yp8LKTwxtxzr4h4ML9uC3jzmqpLwgVuHmYnwRgf5SwaZg9grcKgnAbyyxKm",
  "key1": "3jSGpPMcwG5ndfVjd3QT2a5w3FgAta253Yp5Y4swhUE6c9tW2b5tCKGnEm2mxtayjwj5YaWPeM7HxjUU3fdyEeRj",
  "key2": "2fCdjn3R5BMWXqcsF33fTYd88Gq5r23oEXdC3GUxQNku1ju2vyNZXnNCXe5SBs7WzwxCgcqawAmfiXcMhoTCFzP2",
  "key3": "2wyDwYGC5siTtdYTvr42tG8NQBwHTJc98CJ3C4gSUNvHXY9nY998yngX7E4AavCnzayAyQukVWYStFExckqF9rVU",
  "key4": "5zq6sMkCR9oxsR1Y9V9P7dTuDX3xPtX8wm32htRAW1jGxQ5HaR3DWXMYSSgWHE5pX7ssAtg9H4fxCsV2Yg2eLT1Z",
  "key5": "3ADtWPQtpb9f8JfVmFiTSvoSaTav31RbsNGpZbpx43fvmLu32M4wJoLpaDAvKuDUKBMH4BTBXNRkWQv65G2yKJwM",
  "key6": "5poztCxbuygS4e6hvfMByjLAiejuzR1hBrbyxncRLdfP6h9ApWkR12rHeu8dryFk2PXdQXvPmgVPCPCvsMKCiNKp",
  "key7": "33Qb6RuX38XC9yPWwPMCLyHjFeYEHfvjo9Bkp4gJRCaVCLaLMqeNoebMch5QYmmsSQ64WivVwbMfS2u564zuNnt9",
  "key8": "J5ZWtnzxNYdMEk25oNPXqUQPvdnaHF6W9i8zheFbSiNniwxCEeQR6Dh4WDckg4gcRmfuLoLX8mha7ZxceDAzJcT",
  "key9": "4ErLBM3Tm43PDPQX5BzaHaaiQ3nNbsRdknfdvLywD3JQVbHtqJp9v42XM8mg3y5EfjuEKUDEPSMMyg5SfQsawnHf",
  "key10": "25o57EUt4nDW4SrxQQboRcZjxA5ZrgZ8AeB44UK8w1vJSnpeWfUAhmbYisxf6bGsu2QAcHZtKk6hcrTDJzbC6YEW",
  "key11": "62dRN5s79rrB8saM6C1Ao5YBkcQ6K5vuKyddctc853gXZV5q5DjevtHGFT7pfa4zwz8aEmaZjdRbnxtid4jTYv6x",
  "key12": "B8BVK5Hw6q9X9jRhRXhovDtaWoVZWUuvSn5RXvBWbqZMHKFQ3xyEj9hKu5D5sucFaVKxxMBmWdLP33HGhW3MxKt",
  "key13": "4r2W4KHSsM3ZqXfgHAwUoajBHsdvScTe3tBGCiyonhu9Hw9soPojeB26VbSoaWF3rWtUGRQ3w7sGvorqTTwoQT3G",
  "key14": "3QkhiZyNRc2JK34PR7vmWTg7Lx986i8w6ZE9WU5MF7X4GdjA3HrPEPgqkyQWEwZoz4F4EW8ujRQRnbMdSW3eWgqU",
  "key15": "66xvR16L98v4sLMKTn6qH98EkFVzTw2SCtrUT9sFov5SAQCVNdLpsfLMoS456QMzT2PfbScxUxZcPDBfCjgks8wP",
  "key16": "5a3gPhu4YZggpUwe6MMYgv8QoYVPgV8uDe6tAJALzR1YdRZJFK1Rifu4VBmFhiYmmZVgMQrWaF8deGp5YaxeTavv",
  "key17": "Nf9o2KWAbWrDZFgnNzZgfmFBMKm5B6hKeUEfMjQNbVMi3aDXqKWWd3tdwotSfYqvBAN17ofnUJXQg19SG3hFLGj",
  "key18": "3KFX7WdZCcJnxywXkPbUuQf4BKGUWU8RhjSEQtPpkTka4ZvUCwopNNYCQ62oAhPfx5XS9AzQJCH1umvX2Ue7YfX6",
  "key19": "5Po6ESBQMt1MS3zj4AC8A7WrW2HkRSAyXsesFkj61cDmMFpAsYmQRRHnMD3MZGfUDqeeRr2T5TYgBtUorwKaNv6y",
  "key20": "2iDzHGUn3H1MXNhXAxf7xgifojNe5Da8titrrYRps5hLzVAvHJTyCeTV8ZzGzJA4LiKz84daSn629hAqxyytAsom",
  "key21": "318pvi2JDHsqNafEF2csktrxvsrghoZyAagiauFyMqZ22BF6Hg8ARGW9HEFDEhdB7ndxGyBzDBLPtxDt5KyALPhJ",
  "key22": "2Mf5gN85ouSaoMs7WbwX5U3BQ9uPGSTGdViZ8zURjxj3pV5deVxaAYs4twhSqAo9LZt8KdNYLMujzZ8aykqaKxMU",
  "key23": "4AF6Ss2hs2b1eKqrCiGCC9oxDWcZ1CUa3eML9nm1hbxcg5in12Lsr2LnVjUwLJctmdUbgcEgQQ1rGQ1X1VYM5BmQ",
  "key24": "mTNS3JU13ET6rKfjycCdVBC4JHNbmZVDGSrtztTro7fAkesEP6YunskckUGMvqcujEChKXQk1MB4KgNJeMheaML",
  "key25": "5bZCus1mLMNNMF3qtJWRvs6aVhcBHjm1B4sD6fxFAidsDkWeuo5EKmYbhrZcwNg7muqnJXnE9PhQphmgZVDMYH7Z",
  "key26": "2uo7ZsJLP8DLWnyNjyjNdPqZ4BDKJtLeWLs3RJT4hnMHmPpwDE7J72u8YoBSTqhAnKR6XR85xi6kta9ke5Sx7XyZ",
  "key27": "XsvzWLDXdsJ4n4ftYVBGKBFjrrhjwSiV5mnp17GCCobexANUd7GpyY7FJroZCcWmKNbjEBWukdwWrJ4DxcTMBD7",
  "key28": "5kqfsWkB8fP6nbdWzPe18PsrvQVf8HsuezaNJAoSoPqkBjLCyhyvjxQ1aEBpoxnv7ML5SzXQWLzKhWR3vYy1yBf6",
  "key29": "4Jr61YR3ZSU2eid1zmnSUSkhou9wsBLT1WQv6RmzD6UjHbeXGAPmgaNiAn878rFNbMDYFkh6G1nojnqrhf3XcvrU",
  "key30": "5zDE7iCg5uiWHgkWrn6MwcXxDdVkjVMW4dnXCWV57XB6qLqnRLtNJ8E1nYEQ24iGzDNdgoTfd3xxbDhsZBQUdkTa",
  "key31": "5HuAaRhhjU9gNrYRJfeUGg3EcAc3dxUaZyexcQADpWwm8S2NK1YTJYWHzoKNqup74STPFAfPFLSsxF9Fp7HfD4WE",
  "key32": "4GvHxZ8PqeYHxKk2GAHyDprvU23SMrmHaGhbFPRBnftc9UHSbhdjqT8FkWUwheB5fsMJ5YXyfZrRDsKyZiP1RF7",
  "key33": "2VZXEcggWsQdS69Xf2QvA25JsirBfmyWsBXsMFNRufg6GaZqq6S5VYxDNv4yJq3PwNPdv93CmcMWwrU28f2wR8y8",
  "key34": "2MVor8BkDwmtu7udNrgHGQNPWtFDUV9oPPMjF3tbVc3n3HuKxuAg1tvcf4fcQN3VcxccgnMfjhYWhFnCC6mVb5SN",
  "key35": "5pwrEYYQfpoqZQicrSeqVgHiohu3SVXoCfgPCBG85Zj1C3ijrVy2uzrwA6c7dMGPcV9mZLFrog8QHNZCX3g6oeRh",
  "key36": "XEN1AHDM7hdNWCo7s6x4wHykqZZUe9prCh9iWdntEsD9pXwuhkqNhY7JNY5qtv5GaukSuMa3eW22JWtf3nJNjMJ",
  "key37": "67E5TohRszE2C2NHgmLoc1oU3ee6Q4bp17sLd7BdaAHhgzSWh1qrKQMERFQdc7bSqkGAr3mQhMvDmtSNY6sHKaJH",
  "key38": "5Gpc815dWepcD2DkyuzTm3CWWj4QD4SeXjSQ1AUfQMwDsrXwu32nvyAnTWTYrSfeMoPoSwYxmEBGExWZKeUbe9fZ",
  "key39": "5zxxD4hgrcaU2wfXyQvH6m54wvHSkHBX5RSLKmiNbjhFbsN1xoLmHWF2hqvYkJGPq7GMbo5x5kK3Zyfq1irSursi",
  "key40": "4KhjNzYpEXjej59VKE2sA9t8zREs2YseGM1ykJanTjTHvqZBkFTquTsmbWcV6KJYm1qazzGf6Yn9YTXiVKtyPdjp",
  "key41": "4yuX9XeFxVhKGyVPEKYbzcaZy7Mdk3pL82sUtYh9F6KVcuMTMpodidgxvsHGvEh2BS2dEsQXTeKLHXchLS6aM6Lu",
  "key42": "2oEdA4MNvLwwKcRdvbDu8htNRRB7XWAtFq9rZ3RF56qubwv4we6ASDa3KpnnHzrEEZMf4cJ8kbQd7mcX8vmpeJQT"
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

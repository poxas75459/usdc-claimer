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
    "3GgyJ2PthVCuK7Kd52rxzipjYz3ojmkoz4xZoAcamndTLW3etJGnsXtrsPqJTXaScF2ZTdq5QbiWAkEyxTVQRD6T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28grJfWfZiVHRi77Qa7mVCSS424UsLnP6yeBbc3zKpsxExFLB7qvXuvMz2rvcajAYNGQMUWzAM5PkcsBRLUf1THe",
  "key1": "3KJZiLeSdcEJnSzWmodt9DnJofYJAQVkRW8snS938pxqueDnjcVsUA7obpS1jxDsVTAKpCtChUukJr9uiZAY7Bga",
  "key2": "3JQkLQihUw5dhnADiteNn4RnwBVAkJyzadK8AMSLgtL3vDXkV1FjnfaYGY9Eu61mrzBEELDTFNFSPXaUs8BUpAkD",
  "key3": "5pZpotP24QCEyb6DbYRpBZUn4mHdajUGWdxmNgBuJ9zJmGcsbakSP55gXW9tELfXeDsTvJVHRDrDshggNAF1YMXT",
  "key4": "36Lu5Kopns8z7wVCoM9UH5219K6WSL6wjNdSovr2KHCXsbXKc8pMQwh5ruLGoTbcqvRv5WCWB9asN633DEKoE9of",
  "key5": "1KsKHJy6br2ds1GLEtvdFGkBfVEhSDX1NF7YknQaJRmk6YWysnefjotJbtvtcE9kPkKknLXvhwvVWvM2bWc7RSQ",
  "key6": "36o4cqedF3YJwSn384QjLkkVbedD33EconrpUVKC3nfKfF1ky7Xkxz1sxqJz7mPY1gGFQr6sougZGvUfpwtKna8u",
  "key7": "2SVURbjqvpodTguHVuceHnavJTxeMnPf3ELdLy8Ji3nX4Uf3SQrMP9XFQFVA3V7ELT9ttyXfqoHZUH1SQHwxAJYT",
  "key8": "V6CxDY95Hv1NE71d1pNPQFdzHeotCYMCHuq1UAv2qwRw2dZ7CriAMtzBRbNEquf5gGB2Qo3N54SMFMC3DdmhSTj",
  "key9": "47BvYLwYyoo8AFUtbSn4mTd7QPFWBMXXq72g5HjJeV7xePvSr8etVAbSvt2ZxZGUWA68PUGXY8r9f1WEmRtKGWZD",
  "key10": "52G9KrDnVwquQCB8JPpuHSEkBktm98KEn7M7beHZ9p6R6vSWAWmGfixQBRvcMYCRYCaAaNkaKJNVFueq8TMCfZao",
  "key11": "2TcuYkZaGwbUvP9zeEYsXmtawQzjgsGgMae9WUDtP1ZSa1UfTzkdUAcvqfFZk7zQs2Nwkd1JxZXpAhQgqW8pbA62",
  "key12": "3MRqEUXhSEEG53vfFmWAshxyxnR6s8cnA1xrvF54NJdTQBhg6vuCwt6oQLUihm5iD9St6VqoQXeW5sTeLJQDaJpG",
  "key13": "3fJavLaVtBrvKJSeynqPprnHWkQ46JDhFFvWRc3792pkNdXNM9mwTGLLHXVVGQSLCeRiQMR2saayth3Dj1CMqyzH",
  "key14": "2km91z7tRKxCqkgMXEu1BxrMRqMcXTvJ2zEUq9sswa9tFyJaHzXrQGmB3EgL2afLkUUnPcK4J9f8rPjBVzjACkCt",
  "key15": "5GamkXe8JJc8pxVtMERSYb56NCr1c2d72arFX85ZVgM2nL22A5n4VhuJDyZvXygUizem95cKS6g6qBvSdeqzrp9G",
  "key16": "CcPc6DC96b71ipzzue4ZofxrrpGEMuvNzzf8e6xTGGQLaas2pV3VMoBjaNSL4hpat4kKwhH8uLqdHdZ4Hjs4tG8",
  "key17": "mMYmaydBU6FxFcufBB97MH4EJD7ALT9v6nMmGEDkP28ftMzR8rac8BRRm1f9MojyxDj5kd8ASqNXELw6YrJGGPC",
  "key18": "2yFswhRBoB2zGGGixZVUixUpoeM95yLTi4x2PevjyX1XUSzEL18NM1gjFShpJmh4rR9QYubY7nLT6QUj1MRuJWty",
  "key19": "4cbm6yJGaw5sBGJAmkrwkjpSyRzqNBejJaNUSQnD9VURBiSFRK2e7DsNQRw1kfxTCKP7QQBDUDtPs3HKgkBsmQN3",
  "key20": "f73aP8Ub9gtyCtttJA3YgG2QnNEyZB2MASWZ8gEti8P7RyKMFLPu95znJCp6xJirAGzMc6BS9Y8W1mV3SGuacWM",
  "key21": "3NfBXMcRs5r3PRgEzDLtPtFKD3q2bbtPYDptDdpFLBKmfkwwCMBLRneDnY6SedoUZEdTGhokfQ5P4fP9TL1xEWm8",
  "key22": "36YPp14Q1vxsQVzHhGFPBXNs8m3jro6kNygM13abxu8HnaVqNQb4rkRKK5BEr3oxsDxaMpm3V5owZ9dEM142pkG9",
  "key23": "5Fo5exNhS2Lvdc6YQukiLZEChFSsrawQfwKiXwNVJG8nU7KnAnfjtMAbhPepV1ericwmpiRGfEV3et9WX3Hoa61d",
  "key24": "59B78EG5gDzaxFbs95BveUStbNwyKn7C64B59kBfkVoo9t7ByYa6aZUZHdq385Vu6Xvnw4F9cLYgg1eDTdvcXHwi",
  "key25": "5bENYHuEsG8P7q4FbkdVSoFFowrnwCBvjcuv12FtGzH9P7wbx5jMtGZNDU3nd6MH9eJiJqQ3eUNFemocXh6xq8Mu",
  "key26": "3bLNyGjgvCLPewH2LntJEVpEV7CJcN7YjDw8g3264pygcUuHKXmZu32dpSSUrRy5nonePQHVvP4DprGpotjPA4Ho",
  "key27": "5dH5J4e4kjRv9ge9iUjL9qsQA23mmvZAVGqLGd5pa54gzJXzQrpyc58G7YADDF8VMUnWynzCqs1iLMKWJCxgAN9k",
  "key28": "388yjhnaE4824yUtNKHvtngRgigfHmDJGaebR8VrUJVgjH9pD9UZNbLgmgW7z49Cqsg1yBsobC7UU4XDipmPP82U",
  "key29": "5TXuRHEaizAnSX2ttgjjrGVkb8N8JN2PZ31EwPJHtbVQZtHUsrEaqonNK8hxQ8oDwqjEdxRtHZqSEAjtC6LYiZrP",
  "key30": "4AaQU9zPuK1Q714rTV33wpEQQaVx2BEQ2BHVG8hdzeyKmzeWJUddtkjUXpzZMDSfnmZRDMps31RTxg7LLKeVf97o",
  "key31": "2qo4nKj5B4vdhvkDeTvCFCdSx1WRifCqNo6oGabJEQW3XAvnTYZPEqntpsvQcCzCTDcbK9MvkH1MN6q1QgARqLHL",
  "key32": "3UEfmBAnkCbDZ9DcmvULbAErF55hdxzStxBRfPtujAHdrt1damPaY1xF8dZdFZ8M5ZLErAZZnUHdspDddRQLhiNr",
  "key33": "DzP9TD1KXD2A1ZRmvxsGXTSodCqZWreu37aKCpYRgbm9MdvEhxiLXEpRAFRoARMUe8S94vnhVdjwL3kPoCy2SpS",
  "key34": "52SVNPbrN8xzSiFniyVaAbTuQMFAVSRWjFHdivnDuTh6v2JkdS1DEA8PfpzQwZZRWH2DEgQZbPj1XjXsDXEpujiU",
  "key35": "44X6p3JtFW6YSsGknMvoE1AKGWeAr1SFKh8tgGgsN8Lr4RBQ4x4X3uvFcevRqpDLtUhu9H5XH8bJCEQjPM1ybG5z",
  "key36": "2njEz1nvbQWLL4eiacykeUfMfTwjoztn33hwDKK4yVZLaWsGgM65BNo7Gq42Dp7KQ4uFVUc852LKQc5AkkKS2WnZ",
  "key37": "2S4mqpXNtGhwgJJgG1tpkuWuSEUYxTMV69Qa6Nyz8onxTb1FofUHNFuZTeUQRCkQCARvcfmeLhwLWqVrgTvA9m8V",
  "key38": "5CFiB6HYKtWjWBhpuGFDhk5iS5duTqRhvRQdsWcHPpWc1LtgLeuFLhUkabbPFprhbhbBA1LLYKNQZo4vBPFCtrVy",
  "key39": "4bkxLAduwQWBSMpuMZYihBccVxgVVPgPwrqxjD4sHxXiwybMeCeo6dwEJWtYebqJE1jm9FyzV9ccgscxVZ6WFWiC",
  "key40": "5f3miNB87JNH39R2rgAk3tFVLx5xZZhxh3AxAQMfSNJmFR6thkGFXzhFKnnyXtK265CWhxemTz8LYEzXSKt3NRJH",
  "key41": "2E3w32UmhfattdcVSWVRiNBYoyHnGoJDNT6xtijHWFEheLNPiTDGsHtaNLs2y2avNb8RQJ59q2GHv4fHX5MZj9LP",
  "key42": "ofrCQ3nSkHjihjkFadsiKSMgq8u7GiwvjekL5hseX5THFrigTp6YzoUrZGhz5Eu72ctQn9GeEhwz8rCMapHZV71",
  "key43": "2aaW6qLpZ9nwc8GpYFfwYrKEvU8Ujd31ythG7jU7r4LnJGEi3C3pjr4QyRDF7im2m1yK85rwz81wxGUfRVSuHsL",
  "key44": "2s6inHLz2zYbhANJVS7nD9Y5TjVczzo5ZrB3hhBuiAabR4uEqPUgjUhUtoDZsN8FNxxHBXkjCAwBgTF7tZJXkPd5",
  "key45": "3dEVm8Ek5SXCSpfgTgKXx1RSFjCLv9yKXEVb2dR81p5C3DXDFWh3deHSwvRFz1gb2qekYZU9eXTmC1Xi3ujPqGKd",
  "key46": "4KMTRu78DjNjrytNTMbUyaV1DSQ7F3nHn25gV15NfxhGtmi4MRgtG5HVLTjcAfHPk87Vrxe4F2X49mXhovTL5bHm",
  "key47": "5wowhkHjeFCe7wVrX1bJUqA7wm7qmX6UQnDVzRBcTxF52rhLS7X2sL6DqC3DFeQdndd9MVW25zmAXWguLATP2eAv",
  "key48": "4CRbX6xaKNBa4TC6YwwhwukWQ6JJHH4QJACR9QchSo3bwmich3EHS2Q1qwrvN5VffJPjk7RaQnQNavuMQNnWgy4q",
  "key49": "4JrNLk67QX7YfUFwxUCmmSGPjLMVjVUuRj9CSZBGYkQdcgnocY6cdxtm1Y7kWXRDmTLhYVJCN1HrA94m46NzAxLg"
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

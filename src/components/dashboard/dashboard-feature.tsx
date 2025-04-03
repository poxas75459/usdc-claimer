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
    "39AWNXNuP2GJybgCdda5MKR5K66qtV7G8xSegQvGaj3UsnzBwRsbnytSyq3fzQ9EDTTSiWaJaJa5pU36BQTivCBM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Cidi71tZLKwaLiR3jkHaZUGYgDYG2ypbjixxno52B8doaQXoSVc1as1QWudqr2c76pRm4upQTE8gMktFQpimMVW",
  "key1": "3YRmFoavvnHhJgQWNb1DQuVuRGxP5cPacXZaLEAi3gqmXTvRzqTfK7v2eaqy67XWscJNBBCqQpnVrc6GFBomyDi9",
  "key2": "bByCTX26TtcpBLeZ7j8Q8pFuFKQSag1ubULh6WasZ6pdANvmXohTbjAftTXHzRVg2q4XLXwhWcxLYkyiQsixMf3",
  "key3": "2mviwysjA4FuWDSDfzAo2SJxBqVY1ajyutzDveC914HRnYq9NjjLXCtGNMtJYDEte6uxUNnHr2PY4J8Q35HXTQ7a",
  "key4": "owWqAqiBgGch51d53yjRC1ghustakTAGQkAz5GhsUXVaHHXgNKtezSDsQVMJfkhd811yNuriY4HSJCQyE4VZrpu",
  "key5": "2A9S9i4TDvP1a3d4QK7GssopXjq8nmovTRBwWKf6DK2qmPcwdPzjMmdbNem1onpkFmTXTjHWZBhJPqXaNCkLsWYa",
  "key6": "5ospEY3G8GNHtEV73ecFA195KJpdgXooivvBKKUaVsEPRAWFXfCvtHVqmteRPmNdE6faiBjov66D3wJep99PbRC3",
  "key7": "5aPdzoqAkqd7Esr1gmLb4wLcw1hp1mGQovGJk8CbE2xDTvbuAJxhGu52CnJwyvxzk1eEWE3u743TNuJAGMg8fmfd",
  "key8": "3ZRF6rbhWJn1dt9U5toiTgzkN69jU3GrT4HNnoitpUPbqCv9VhrEdmb4VhAXuRiiHjyNyfAuKLqqk55vJDKwaowS",
  "key9": "49J2CTgYRz7PeLtRmaCTW3FcSF6CsdrYMi8hpsLdd1vbR21ZuJYNC7YrMSZ1SAj1jPTF174ah3K7ApbaiHSrA4Mb",
  "key10": "4KjKHCgd8Uvzv5HBmXUHEcFEbYW2Yyf74dTzQNY1k6UoPzDSf1AfUz4HHrtU1rxgKfKfziHwMP7CQrQFXQ2YRFX2",
  "key11": "2M7wMbaSUoexts5hnbJXnkAFQR4UGxPwXoUex4qEAwFyC9eSgQNCcB5chmFjjQ2pu8SgX7ndRSaEsASL9fKUvUKo",
  "key12": "4UwAhgEfgHCEXNQewviN5gmJh3AirbwvJB1J8yuXzW58pg5GXv4PkuHFrB2QC54DgSBLTc7Pr9Nr9oRoodiC8FtM",
  "key13": "4er1QSkJungb2QUN7qBbT6osRZtoWCK8sLC8oGTpRk2CeUXD5NM5jRZEALC8sQ6Ha3ER4AEhqQHC8Pm3SoKJP24k",
  "key14": "4bYmyhqnkBW2sFyRktdd3KZXkcc5WJ7P2TwCDKWR5DwiyFrrATWdCkzpWwHDycuUvU7NbK344C3YmXSQYp2w4FZT",
  "key15": "5eyDuxi43BeUpvpHndtUPPiG8pojWNESQr5zEBDwAqHcPM1uZHigSsB3DKsrXWoJkzrKR2jFrUkojdhYuW81mvoK",
  "key16": "2Hcebh9N73oV4r9SVgYooRg8kYEE5uZVgS9SECkuZgBgsgAcPYkvmYTBH51LTGgwPHtHPrtUo4fozkjZ2pQeRvEp",
  "key17": "5YSjb6iVPdXaNdLXVkjDUE6m5zYU77PjSEeRAcspQFCKmE5EHioP1SzU2uA51HejKhTwAYyXwUqiRMiT4E17iCKN",
  "key18": "3L3zNPS3K96uLRJC7q94Ra9mU5WgUwymddyX2157YG8xvjo4Axeqnod7EvcYArvnTBoeYQT6gDXG8xubcyVHmRwR",
  "key19": "48Qw812Tu34BovfDaxR8zkvSezhA6wUN7iH1F7kbqNzNKayv4oi6p4fHWMeusAkBpWJMUqzKqkVQUqapDRyGbmb7",
  "key20": "2mdMLiavXGbLddMCUhtSMuLZeeoe16s686DVVTjxbrDVzBTFk7krqQzGgVpTtDNoQzn7Eqh5t5v2mBmDoeZDzmwW",
  "key21": "9EmDYwnuqGAK9dKEouYswmG4VBLqMUNCKQGfJoQKtbczGpSrCdTR3BPSTtuY2ssVXawxSK13xXqDPQB7z4StYRh",
  "key22": "7y2t7yAAnNqJmhiRH5gxNSWhJDanWg8J9FoAoagsLSDioqe5GYuB6BJgPBR4f92BSWRNxLstGpnxLCBRssxWBzh",
  "key23": "4y1r2YnKET6Hx6cRnpQLviBcNegoHM1H93MYYLx4hwMYbhsicBNHsq1GkvayS9KzgQXaajcoio2MuuDbeA2VB8eq",
  "key24": "41eipZE8CiddcbtQYjuv8h8iK6yA3kC9zmzpMGsvaqpgSCpvNbE3mBLQgqxWT89Bu3evdHTCxoFTHCfUMsBEqqXV",
  "key25": "3nAuSRVuMLxpixpcdxQ9GSqqYJY4hxvw1KUtkXmGefr2cwtsfnKLwd7ZL5A6nTVdKoeMg5GDXDhPvABjLp94xwB3",
  "key26": "596QurxekUfvDQVAFWdt44txYDyuy16FZMGJmsrEVMJi7ZQWb36vxAVj36pC9BwHju8Z7pNJFk7bwFZMuSVQCG8o",
  "key27": "4UfmtasWiqzoW9ceAiUn327fz1ELSdUXpXEgf2WX1WUXVQtppKbzmrWxNdENenizZx3e7Dox9rxgfJTnoMz6fuQB",
  "key28": "4vvg3xV3EfGjahKxLxwJNptvzZbefBmVhNAyBtzzsfLhiudrDc3R5hjXo5ToXT1Y2nBmi6PnNirK6vmbrdU1KUjd",
  "key29": "4pnnToK6y7jQ855CgtA7szaFY16xFK9NEMtedRbvzyvCtjgqJbQbZuDDGsQqKuAU9pvMuekZzmgS5xCVwJy6kzkc",
  "key30": "4AJamwdWe7H38Su4BRpVSnfgfNvw9vVAtrRbdjNv6etWipKHQYqJCBBXriMsyYXT7NEVE6oYBJgWi4cutDFmSe2V",
  "key31": "Zrpn8Js2gpgKK5wKMhRdQDwaQVcYZ8uZTQTFZRpKCfbLJMxookw5B9ZGTqSN4jAwgK2YNPrDh8teT4EoB4Pmtvx",
  "key32": "2MCcM1frirAmTGFaNcG6SUpBKpmiLffLaRVfPkjM6GdsBWUcd3bcoWUwSWcwYsngQdXQptqcVPnQdrwmUXtfwpQe",
  "key33": "2RYfAr59B7hR6LWhza1NPgYFtApLGLx5vBmdTF7Rt3EXTtqaBx9264mpqTNrgNCrz21Q214uxYUY7yYPqWh4xNZT",
  "key34": "5wZWhcJWLgfe6FHTiLZTkitdmu4JzPMgGPdPtFfa5vgQjXQXEkyyuvLNX769EJdGTgvsWnNWmLwW51vXZGP5tLfc",
  "key35": "BoG6PjMnh9fuR9XzbWBgbrGNgnHo1nQyh1CiozNsu9Jt22VGt8FwKnQjUJdgaXB7xazHufS7smufHLZDbqjyJsZ",
  "key36": "3ych66i1CF1dR3qXKvoiW163z1JDBUfidLuSBVxAUQHMVakbBkUvLJsEQb6NUcaMMWRtbMr3yCoR1mWLzSPvhwh3",
  "key37": "chUf1YnBYLmaPxyWgKvt9Va3VKD36WGHCMVfsqWDMVKs5G7TuZKFHvaaeYVxp1Pvr59C51MgKfaRCvgy5UmVPh5",
  "key38": "3a64jnzdddsAwmroiRs6n8a4eqCFqaMchbFLWmtgj2ZVFmNejkYd7N7XfjukDozvNMFF8axrDJYThNGTNC9hN5Fq",
  "key39": "3Pu7RrsmeddT85dPm1qcm4sCqkhEvPMbuKz83N4Qo1PEiKMGvrBR6UUeoZ6TEvCcwP2EhJRP8LzJUzJirQyKXRAX",
  "key40": "3cz68PtoyUDBHTMAgxQ1UvDqRkG2A9V5DWgF7pKDQC478tRTLL4DUpExGoQmV6e2RE12QmUhwBQqwfrZg2QzU8cg",
  "key41": "3PKiG38zHzP8AGUH41YoNxXJ4ZCyxPdnhupBZX9BLzWoiUyxXG6BPPzgVwrzvWbctLSrCiyzamW1v5V9i73pqmm3",
  "key42": "hwjDfoooiX6f8rTbCyTwBpAwCAJcKBZc2uLVpUggvf9v5pUG7BpNChKeApFz5wGqs21sJyNgcUn7sTuYphmfQdx",
  "key43": "4ujeYsTCQgmwGNzvfZZELdakQsuG7qt1Lr6JMPK51YbYb4UUD1gG5ZDuGDSXvADSnr8wKv6FGCVVwYMEJ8XfLeCs",
  "key44": "2bHKtdQ37hJP85Tmdb7uyDyu7u63LidKZj5wXhFwENWk4VNjpVkJ7XWtraMTTvWdNhGQv7GAsHf9mToPDdK2S69b",
  "key45": "5UrovFbK8TnM3j1mSEGxn7GxSzQ7bxDgcJpzEoVodEC57dszAHVH69NEzbM7znrL7acTFKbsH56HvrDWk338dVh6",
  "key46": "46f6wRikMBQDi3TqsTAJZncdaRjYViqDQ2DEMoEnrW3UWqpqzPheqBjYJgPoYoQ4NY6MpxMvXQLCrNBHejzhNpxF"
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

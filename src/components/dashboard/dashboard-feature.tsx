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
    "3yUjJhUFFJ7y7wjTorSjnqZbbo2deNGs1SiN278e6oUq4VeC1GCoRqMaXkDRUewrQ53FN3Ms4MRtvTEqrafQdX8q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GUPZ6uwh3BsaT1wrUzy1zmuoSGwLLV4RcxBmb6dnB6sChTVPr4yM9X69MfKjsdxudshbUDtFmoHCFpZBsSybG5E",
  "key1": "sZJuZMmymB67xoVBd2J9pNV8BdQtZJQsjm8WBfk63BHSiAyuucvVwqJchfVwhn5PcZ4QVVNyguWUzVW62zni3W9",
  "key2": "3sRuJGdrdLMyCiuKqEr5ssnDmn9t3bRWrEfwuWW2NT34L2CMa89CBvj6mJwLjP7q4fManisy6UCCygvd7v7CUtA",
  "key3": "32iW4PhnmjKvWsFKTEjkMLjNKwXwRcfwApXsNujG2uadFz1FXYPGQKkLXbwwCfop2pW2fpeHmwewEJdS6VUAXYY9",
  "key4": "62RLvonS2J2twx1E51AyLEp6xXfYZoRwRVwj7nPzYiDUR76aVSbteZMgmKgjy74b3i9TcYmzieNuEVuV4PK8Eyn1",
  "key5": "51bjNm2xxeVR5hTunseCDWwZHjXvN5N5XW8y8ygMgdsLh4vssyG7AKHGn1PN1DnhFvXrBipSJ4MN9wRFTiCPsV2B",
  "key6": "2xEJib6Bcd6qSkLk3fTVKucEb83QwarLguxzxVp3RUMxFAS6Jn76BHx9NJ1JAggJGfphGM82GbBYZqcQ5jyz6QHB",
  "key7": "2XAMUsppwG2LeVb7ZQRDShVpwnSRpVbCWQs5ta4Bd9xWdeco8wdVNMtvrd3vVmAkWQ37FRs4BSDxBu2wYamvUvmy",
  "key8": "wAFBB5A6swanTG7PTjfqFU7sWKrNKK6Qw8hA1s8CZwrFmCPHFQXFV87TJS4dBiNXzW6H9h22a8nHR3k8vp6ryaF",
  "key9": "3n6wR87bMQaX5MVvCzYLj4PAghDyK1DffcBVLxPgX2a1TRYFUuxN8Nbcay5pn64JLrKmPBBTouhshZdxbqc8N59t",
  "key10": "5KZmd9WeoBHiZXwmHMGNhbKiUXzQ61wgoqi7rv8NbUiRpepKGFP6dGM7PrMJMPydU8P2DAH9TaG1H56Bm2yWGHBf",
  "key11": "5HHoqTTDEG89Ctw9dcn4LFVpmPJaEjxQSi4XKQBGGRU19haBypBmUYZjetjVfuAZY2YMqFsL1ckQyTyXco591d2q",
  "key12": "312zX7ndRk6vCufuGq92QfMy8fYwBdkVuf2vjeZbNXfzBZhbhNVPjAPWomZ6RSppFWjQy63Q1HwJmX2aRap7SGN7",
  "key13": "f9QAUx9AFJTfeWMV4AC5dTzDjBdz8fD687KLHa1Y2AdEtM8gkBk35iTA8Pxtivwx4qigSFBuabhMpSHzZqbexqi",
  "key14": "4Z6uPAgx8wPAbX988iV3P5CbTB4j837D9xfAkTJi5DPEnHCzbf49Hzs3jTV4KJnCKEX23vy7st5SVzUwURsmxqNr",
  "key15": "Y7d8Y6yrgJ8PS9qEVQNLxshvEtVew8dzHsvfHRunF8Y14YsDvceztM3n7JqkKSkNMgo4LLDQagNsQr6ZxfcKSV3",
  "key16": "2FisfuEDsDXy8GLvkefjMja7VxiRp2vwmwtM1Me5ehQCwgq7Jo1QpSYTqQJsh1XUHZohf8RmxrmESHZA9H9zhjW6",
  "key17": "3fPDk5yL6hNTJrH2U71MVW26LqZva8a2SWEPr764gegavSGtPvS3virRGyun4smDQtH7rMcujVUgXRRsWxHjxGrf",
  "key18": "5k39WRu8LryH6CwAQtCEeB826E8kFESrdsnh3pDeH1RR1qzgD34FxEEEXBUzfpcPoPJPFPMn2R8ZpvUZGr4bW5Jt",
  "key19": "2wLEGNbRTBnVSqqD2ShviEZpnannzYxaadeiTmSScFTU5hVnaqZnFtQm2udNGFDtBmQJbT9KX8GuEnq68fHAbLF5",
  "key20": "2GqGR2R9YcUFRjzFjSrm1cTL58VSFTWaHKCXGgqQGpBz6LXqFBJy4uG9YQ6hYmDM2TTPNFWznrnmqNsbUayPDwR2",
  "key21": "3wcPMpatS5Aj5GsayLju2mcCEArfzmXcbjeCqDHMeFosSmN6XAjG4g5kmyMPqoJAYH8akUQ8SqyYfUemzdBqt2YH",
  "key22": "qce1ZsbhJazUPNmsESnU2ZeQ831AyUSFRyGD44ibzjsznkzyPReuFtqEhyghJWkCgEAPAzSauW4q8pzPnE9qzE8",
  "key23": "5Xm7moKjPAWpPZiSQYUNtkCyJeGypMJbB5Zf8hwgqQc1imzPnaP3SH4JRSNFxrvQGMLN26VzijVEohMtBKSuMpcZ",
  "key24": "Bo7KJNzLNgoBvcJQ6TfGCcWPXqS3zjngNTKpvFJeg7EeFc41TqJ5kXF23kpfoT2mmG9x4wvpERk2C51DvE67spL",
  "key25": "38UvcCvXwiwppBDHVVFB6pgH9pNvuDHbEeD7vbUh3Vp7tFbeMfCizKcTzavzcycniaBjp152YRadjv2Kw8onbrgq",
  "key26": "4UZEiFmBKmL3QKr1ojdnr8DTM7QSsW8TVUod7Y5YAA4EnP5BHfsQ62iGvGJmNZR29wMmWRd7WSYBj3e4PsSthUc4",
  "key27": "2rFW8TXuLYdinWpPAZEhQu6uLYkm4xBHcNMESAyVvBGYPWesRs4pX7yFdMuBkmVMm1q9khDTbh4DPFvie4D2VoUh",
  "key28": "56CqaqyJKXEaMtXpWoT5jKxBAPuiFpEZKMWAZTfnnj6mwy9Tc4Gm6K4DRbPR7o2st95NLJh8XF7W9DSKiuXp1Ud4",
  "key29": "4ez4fA2BxLL2mFf25Qg2yNgsFXqWThTXUfoEZKgg4EGoEvumTssnwCb4ucMDHUj48W2zryF6fCxoAgVP9tuZGfzP",
  "key30": "sBFE9Go7srJNdM15fMZGv4JNSS3ynwpV2ACTbeAXhkNjhdCix94Q95etg2zCLRJV2AHmCKzaQXfcuNPEyF6CCKu",
  "key31": "3xwFWZysUYterTP5eucGViHywUBGvct8XYKrTSufezn9tQdG42qoCRwNX4hLwC4RJgTNZS9MpAwRNVZneovc5Fft",
  "key32": "3XujrY2iHcQF5edVR96ppmj65kMqhrkxNT2aUxBZy4vbk1Jc2tqu5ywjHvr7PkSUKpVo3CJnrDyXxg8qKPTBswy3",
  "key33": "2oAG5B2AzbMYoLFtG4CmkhzneUXXng8N2exx27rsDzyG2PzSWUWDTCsX3x71HEeYQBbY525AxzLqiVmwgJWLpHe8"
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

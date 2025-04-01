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
    "dheCEw6sAvFLzj4iKK1oWAnPbGsr9V4xCy22NbGsma5bTh1orDFm5xbJixd571hzghxvBet5SZ6sGVQ7UG8dUg2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uSA9nNuiGPzWGHTMkxt4BDgzMPbdmhBJ4rDKYzUUV4c19w3zp4PUHmfj3DxEXpC3oiVmMWMwour24wZxT4UsH9z",
  "key1": "xgha73Z9JrQMSfVoThJ87DikP21uH4duNbwnPJa1Rr1F1wK9RttGBAZXThPY9Z5NU7JtZ2reqzrW8VKPrShFoQZ",
  "key2": "5j659CkzYPdv2EaNzV2C7r4RKzo7KAco7w5nSjarRg6hxKAwpc1LvtVjFYDkz1Nd4or7fhizFYRJQxSwb6gEBkYE",
  "key3": "2wQYY9nbph5xUrdWkaJf6ppHUPAK3TYrfrF5cxDyFzEM4LFwMXrDqpJipCMJGErP6ZmvqjeXq6QgipmCvNxK9axw",
  "key4": "4635HUjVS92WJXGV3sSEGwaoCDGGZBJ5VyXizpj6Whg1GwQ19utQZdYK7KKyPhpoXKkVr8eyfva7kyHrk1zp8now",
  "key5": "4nhNL4GfWn1kyUNGWbLDsSenFc8DRs97UEasqdU2ByABzgANZi2X8b963VrcAmN249SkPGz8QRHgV4CVnN2EurRd",
  "key6": "5JTAG5RtPQVHfhffLXyjnKjx6YFL9gBPJeFSPkw61HboCUtsB8ZXmFe5ZhK5xWhsoQ5NGZQiXjCGEhRuDHBJzeKe",
  "key7": "4M4HUgsATAkJx1ESgmVCYMT6o7MbBjCnzKm6VSZ8FSLvtj2C9GTXv7gCY6kTwkw4RN4Wm5mpSt3EhfeLZ3PVfqye",
  "key8": "XcXunnFczNnnb6teSy23kVJA7ccaby12z7LB8PnkCCprLgo55tGfqhTh9hT4KzCtn3gSi2R5mBeiA6WEU7aaZxE",
  "key9": "ETsBMTHFCuZP5hetrdKt6Ut4LhExKnG3UsQo59o6KF3X6EDUZYNfJZ6rfHSJLV2LQ9Dh3o8ctZTH4kk9CuiJ8K9",
  "key10": "4FWWuvis8Anc1XrXoFQwb6FWhVnTW99RKaAfn8uj2bQnk5dU39ErSEYJ6r9Ey5d4j9Y5UiPtW7MEZPq5HpUwEA9r",
  "key11": "5WAWEoR8YUXrb8KLw9Vjmo5uuRsRMpoKAwsa28Q8Kw4L6rRxvATG2hNsszRwKu26zVTkH82aQb3RtUShgv4Aap1t",
  "key12": "45g3YzL8yzjsNj2BHWSvoj1uyRbBdZyd9HnQGyATYZ8fx8hDVCZbi1kQ48MZVHCcG7jkPFGyoB51owUEtYXJRLRv",
  "key13": "5W7s84hxRhEp7VLNJvkgquqCfH1DkRmDWiZUfzJjPSnCqhuRepEt9ee2W3i8QorACZACXkLie8mpjRjbHc1B5bSt",
  "key14": "2SqfsaWrQodC1zvUbhssCXPYrocwPY5Te4DEjDimXfrivp1oyYCvrDWEL71Y5yTY38EQvobCwJLaZLUAp87t2SSp",
  "key15": "LziRLR9aB9KTQ15ghDsY3mHnhmLCs9o4szEXy4XZ5iQmv4xZQRFhMvDwN6SogoYoibfajfnfakARj2eEi76kt2h",
  "key16": "53YjcwM35wfDqbeqWbyqcNa2tga6geGAQ3yYrPNjH5jng8ZF6hTsMipA6MdaLv7pz7gynwD7mytADJTyTfjhzf2z",
  "key17": "3yj85aNZbsFWtqP9xiDTRWeDXS4hdLrKRNAhTXFhh9EZsGLSmFzfwenuFbtdbSFWgUY7QnSwfF72wReuzw2st269",
  "key18": "2FCrm6TRAnvP9Hah4Zh9bLhPczAMn9wvMUwL6U5fbF9bEn5EbVHJiQNyVyTohiT9L2YkcFH6E6EudiHtAn5x8iMW",
  "key19": "4A4Un4cPVRvSyDB1bo1dzi4GVpLHCV52QsP5uuEgQwgXwcQx9f3BWw4tpzbeSnUU2ekbzVVaVf9HmmGyaT9FPMpx",
  "key20": "3AcP8TqpqJp49cr1ixBzbWj5xuF8uGPZKuqwyrMtB2zu3uT1UWPmQcvi9yMD5TgimFbqpG3sB6ghzuUFLcmtGyaN",
  "key21": "6FXXjiqinVEBMXpqQMfMgeDfxm2DPJAUtFXcVxq1EUf865sLXR5PyqA7nC8eHougeWZEKcDtVeZKXBtS4e1dTgY",
  "key22": "3zuqpeCHHKsbdcMpRUrkD1NsYVX6AGVKeQyBoLHJ1ouY2UauD7CfaeUtvj9vqkmukzDE9Rky1LyDSbm8yNQraRZT",
  "key23": "5oCuHSMfX2V6PuuSSDRKBDbNVVe8oKdXJ2R4K4Ydr9HA2qVfxeScLTg1WUraexHRjoA8d8BZ8msFs2y87XhiN5b",
  "key24": "sVRFr8ecYsz13wg9pM1ub9iSovKWkoZGqN4UV6cWbMsQKC7bayAKvoxrPpNgU6HHiRg9FLVPB1JkXu3T9bmEfjL",
  "key25": "2rsWHLoRYNjypMUnrmGnuBRGBoMtEX2cm9oCrFphjDRibMgykmsQQfUrdqZQEKjwRgYfBaGeEaaKac3z9LkiQk4L",
  "key26": "4mqbJJMGgjgbVCWbRRw9VgdeSMfPfy8MTF3h8xr2kpAdxD1c9dLVpHqy3b53UBNRY8vMwkpgHsohG81u2FRu3Dwg",
  "key27": "3tzwdgMuVW6qEEFEQAW8PmdLPbeEbrsMsz7AKyrJU4nncmAwThRTHcwCaxu3es4XNFvGPb4neTB5MHiU8UGZc7fi",
  "key28": "5NCz6VqupwsdWwLXF7DpL62ksHiuwDs7dP16Trctg2jebLCn1N1eKrAREWZBcZtMWHqEW81H7JVRkMWoeWhFJNG4",
  "key29": "5ZCNPdihuPkksZkw7iW29MDfK5arbbmzVTLrsjszQmYEMMp9VcusBkFFnCXN1bbLTuJzUBRZFy4AXVnaQLUMZ4bh",
  "key30": "5vKTWDVoVxtAF17sfiM7iFM2CV4fxGnCd9ig4cdvCVWDusxmA4wsyBj8VfH5p2FFf9wzP6EaTKtzAiEMzuSd4LWD",
  "key31": "3G4ZgcqKoHXWcTaNWSz3UWz1539epjYcvaHTmYWWgtjVRX6AEgUSJPHFKgRkRgAxkpCHbKJPz72bikNXQsXNz1uP",
  "key32": "SdGBkXKnuH31ouU1Pt2c9AvAno5WmMYs8Ym6PSYd2RzBVerhxnnDsFnAvcfRs1K7R14giEYZu8fSBrXwB9jDJpU",
  "key33": "4ZH6eGRtX7fNSDNjUPCZLFQBjj1721Vtn9xtNdbBkdFiFfCXW9fMAjGnXUdfMha8xym59DriqhpscfLUfre86oHB",
  "key34": "5Ee1U5PXcCFmw6ee5CibMmPkZmrEA2i9VjZCP1moPDTkPUmbLNojqk9SfMe1jXCLFUDLEj8aiFz9DED2i5qU3JPh",
  "key35": "4q9ihnhQcos4s8NLW3djueVJPYbv2M7cmqXB7mTGoV4kXBrMHLyPAFESoZR4SGEsyye4dubHMqt56BxqNkjdTgMN"
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

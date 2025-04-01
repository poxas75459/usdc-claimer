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
    "4WJPMFE4NvjigDwq1v1Z29gTBZH6nFH6jYfD1hESRJ9HJRKxNMGpnUtE3HAC8FaRcop2Ms2BnwedcgnWCiZtYU3J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bPtF9s9QvUYf11UYXW2AmH6Duh3LugyHGwKEFmNjZxaUZEFmFrTEkBEs1HJknssSrdcWh6BBRUPBCFD5xXVxjm",
  "key1": "2hYgauH7tmWDrEfCr2pwzMz7x5Wg3bhsrfTsC2mj5NizTQyHXD1WexotUTHty2GhJLLPsSB2StaF1Cnm51hDSCuh",
  "key2": "62UaVPCcufurUZTfoHiET2avvnU8AsTLKQPwBp7srAYn7MGnWKjygXRQQFCsJFEWvgvUumtNeUYGVDddj44g3Dz9",
  "key3": "4DrRHKMw9XALxYLK883HmNoDgRXy9ipwJbk5vqYefKWvCKDAaaLLrX45S1LyR5AtenfSrNP8yUb3zFqdcex5YHD5",
  "key4": "5UckZhtWrBWuPo2PD8ZoLqR2akGD5wMU7RrncxpF5yBcdxkVRLfGbbrTV34RfrQZWdyumcawU5s4C6xsEX8wdYZL",
  "key5": "4fM3WkjYDembNNY2k7YXMphoDiC9tEVHyBHnADvXTTVktQvVVmEcYqhNcpUsBfWEwCbYGPYkJA7Uhk5n6hHgpEXj",
  "key6": "412VCsPj24DrKhUjhtxX3qstQX2AtKdvMiAyo8Gd4XKBxzuVHa3FGqP3E3SrophVf7yprVWV4qwYaZ3kGHp66cQ",
  "key7": "5w38P425EMVWPLpazfZi3AMiZDbWredhG1Euc3bq3xK6qc4LYjtXnTWopFYqsDKHNngg66s3b8PuwgCxEHmabvXm",
  "key8": "2bY4A74s3UWbmSLU86291maC8ADsS7avqoPsPi1CXnr6vDSWJXG8Z5YxyxxrtqZNSt7CNqfBvxSC4t3pmTocegA9",
  "key9": "2kPMhrtS4TvvGSFwpGhsJgu2tYcpb5AEBxzL3ZiJgfgZZKp8bDxX9hR4vV8n5pQNBpKeLujsM424ieRNScUcYgnz",
  "key10": "XdfvBpC5eaWkAps2d4MictENKG1FJif7TyKjBhkYv6qqfkVTedKicrqZCSdGcqndnksa2bnueWWVTVHuKhvPeDe",
  "key11": "3mq87vwYJPifpGPpjjQv2FPKbxXWP5sY8K6iD5XRDTEk1xo8A5YQ7B1A3uJy3oyVjRCJDGZHGonTov1tCWJCi3Jb",
  "key12": "2oRmAWzKyGGBn1qwKsqCtDHPben5DVTJCHTUzbcrQqaXfXVoP2pYejvcjAwQLkGHAHwvNN92E1hb4Y9MrDzpAfwj",
  "key13": "3RcwtvDm2n7oMfNXkCkKA7RGXhZhE7VZxsk96Wz2vgDPKHrgaLmVdzoYtMLEcfvYT1V8zuL8fPFKioYLbwzCz37W",
  "key14": "8egPzdLVr1AKVm2qQWS8RkV2p8mmvTaGcVeZrthMeQqJrAuxwcyA2CSt1GL3U1jwU2ok8FAmWKQTda1oa9CdHqD",
  "key15": "3zq2sqFKrjAoKDnaPh5JaMYHF8SSC1j1AVg2bZquCSqvkH2w1HwwjKjVEDjgKXf7AguMDQSCs2DqaZXckHXGXDi8",
  "key16": "4GepZZJ4c6d4MQxJEWZBfGGvvunxUmAd3iJUDta8R32HAyUtZxtd3FSKLLausaSJAjBUa1HZ1V3VT5o611Mjwzrc",
  "key17": "4AcNn176oHorjDac7df1uTe6KdTWPBC7fh4T3Uc9HjGp9gruHe8TotL5G4uro1cEMpzEKwsV2hu5Y4ujVZ8jZJ5g",
  "key18": "BKd4HPwxJEvAfFfcBkwhv9frkMpzB1hfp2aFkyasD8ynn583UfJor2TtQsiaBa3ZPamZ11WjwF56dkEqkHTcrmt",
  "key19": "3aePvnkkJFY47XdQGWYmz58EioJFkojxbhvFrvBRB84UQ3wGE3WHSYBnyu4drjQks1DaLTdscDKMysmth4qrSnFk",
  "key20": "3orrKTKmAvuvUdp5u4pmgaKDvZaWnaRBQDHEm1LH8EExoMmTXfNqRV7JgnF5jms4JCuewNuDkGMiDQigoEDzt9FX",
  "key21": "VyYRseDHjwXZxQsnhvBEbbe5CSNKxyJF3juysU7M3i8iKTfUdktYedpRpRm5XHr4s6MBKoCmnjzHihmJM3KyboQ",
  "key22": "4eo7LAm4a2HaJrAJLbhAZX1Xv4dDQzDhamHVnX7xPu7vV6SeAtTpCN4VVcsiJPHvzEA7F7pLwLniUommb8YfrAkz",
  "key23": "JcQkWSJYdUZ7ER3YymQ6yoKV5qBfBF7QVQwYLagRRRfo2JPdyzHGbMTDCobRNqAmhAvUjo7WUkkcUccDs9tL8Qi",
  "key24": "48kNFTv7NAyDjo6R4M6DkBjHPUU415av42dk9MZz3BY4Gxz2TTLPwVAbeBq3hQQx2LWKvyXs1eYkkL34LXvZ18Xn",
  "key25": "3RQ9GJSAAo7nbhkmD6Qw1YZTgLLiuRMYFk1pX5md2X2iMRH4GMmN7cptGuNrmhaJVopfiuuWBPHhEYBX8uEcLQN6",
  "key26": "5tEVM1RXAvsjC7TYxJKjENchbdscjWEphzCVRmecgQPFjBWATpS1rE4JcZfCNmBVGRuGAU7jEw5EfGF51BaMwT3T",
  "key27": "2tWjtFgnThFjBuJmqn8v6Vr2rH3HAV8dkKnSyVSNY48SMtVpzE5ddLacMneFGLgJ8HcdUiwVzSqdSHxM9HXtsimu",
  "key28": "jLrMdWKrigEtKSoLNdmRMmmLrgf5LvHpBH43U6QF3nKW9d34WAmmbMErJ5W3edp7ok4kvb4djHQbgscXCKicrq3",
  "key29": "3qBQXWzhSeuvdcZsmXYPt8hxGCLkjC5nEjmBocWmzc3cK3YocpMqAYPpqCxoa2WFMZpfG6VjQUjSY39m7urPMxWJ",
  "key30": "s6ybMRoMfzmhx355agXjFiMx9WLQAdKCXTyeGFbLEYgEBswVG7KwRn3a3egCRjHCc2UsijZeB4ufma15am3TCtJ",
  "key31": "5esoPmR29wVfJbqbnqMD8fBarno72e29SXhLJcduWi4a89tLxiUwnzgJ1Ms3HcFJbPq975hCAHEXUbh6LUr5gsX",
  "key32": "4aCi7cdvzrY1uiAT78MYnfC2JPoSa3TiRoGWBL71GwouQpbHpeagiTNJ5hfTq799QXBAZjWSU4ZBqrANomEGia7s",
  "key33": "GegWn6QQLBncZL39WMLheK9tKGiVMvGEhJcLaL74MYdPhzs1ZXgTrjmgJGmB4seAHzPjHxnpUur1igWH1K5mxTD",
  "key34": "3RgXp3Xm7CszjnyBTndkt6XhjXcJN6Y6SdEW5DVXEX3U5Ayp7gCpGUuXVw8xhNQiGauP2bYqCeL99xYj8gXc3QdX",
  "key35": "2mShmGXwUharNqd1rMZ1NrT5iRngGnZhq29F7KWM3173mWsYyxkSHCBNQdi7QJ8zwkNMSpyWQArearZMPt3juKCQ",
  "key36": "4RJbnfNsHCDY8CCjw1vdK49CFFHDP5VWQyYdvDETRcHxDqwuqH2dpyYARsxcCF7Tb4a1yB5TuUMr2qmSrkmzADRw",
  "key37": "pjm1hcPR6z8oRmkFNWHrtZzXYruyaihLHQopeWyHN8jpzZ5EkNq1GCKtXtCDXAojyjmuW1CzJie3ZitoGEN6rAE",
  "key38": "5G4MSnmX6gBDq2Qg22YBsAWSASLHBwcchJMgJagTytDDmz9xdTdbbDCFmv13Yt36Pi938Bn5cFBypMxuoUyuWvio",
  "key39": "567UhGsgj2PBrvk4GZiAKV9uwbyxteURKrFapVbQkYmuXD2Wk7koenvxmM27FQxJPJR81pyZqAPmr4N2yN93CqrR",
  "key40": "pqfpbdeVefi6jYoyVKV9jgMhVEQbgvosQMQjAs3dEqkJFgEnHkC4qf1yEPRmgqLC1sjuCahchEzBT96oQ7iqM2D",
  "key41": "2A53u5kGnYbJEMcDAw8AgbKfB1Cm6xepyjC85w5k7uuyLnhBYjLahyCdW8c6Hc2E1Xi3DpG6kqMH2Pugcv58zT9h",
  "key42": "5ZyxH4YPSbsML1rQijXtEwXAUyE7cZ9dXs8tHD6BRhq5j7hpsdmkXKBahUTWkaMou6R8BhxJ97aAuAvLMziDCm8",
  "key43": "Ad5t4XxDJYscZbo7XmADnXdLFxckRsf1siHgEyC5ALwxepktwUandVaRgm17wYqS4PCiuAVhLUdSgHzLyibt8Z5",
  "key44": "4vnS2GvHeDjaPdBWVzjR3JZHHNGwDC6e28yph4SjGhFXzZSkqkSdfFrfHwLvQL7GbEFrKpP1N6cj8TS6RfDpYJxX",
  "key45": "h4yHQE9Enk23GJwNtQEkQHqyYNFPmieUDuKLzdRK4YV8wQv3yAAmG3a7oTEXBff7oQz4Hh4Mh2t3SeHuAjzvnQf",
  "key46": "4dscYEudUT37iNHykzC5JxdFNaWUnNahecSEkdigS2FtedaUzW6bBDy52kzHL92XZKg9YjMJdvpCzeA1iFx2ie5z",
  "key47": "3WtwKeB7HYbY8mSncuVF2MT8V29rF9TSTzPraC4fWoMQ6bf9DaJDY8WGcampbpN8JaQuAckkaUYqBL8KKtZfQ3vH"
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

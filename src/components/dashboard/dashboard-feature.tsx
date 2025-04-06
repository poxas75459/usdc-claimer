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
    "rPqcBKBswJStDpVsnkvWmiyDdXsy1TjEAV1r93BZ24iMfpYBAtBobn3gr6v7VDVmVVhNoCBvyaUdivMpe4ut7cz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k235DvRVDMVFAKG98FAkxMvaZ82Xp5poJciCtHrp8Y6LWeveJivXBFePxraEX2YGCDVSHAxaGjqcPPpNsRkT1ig",
  "key1": "48oWsALNQd18TurA45bMD6CMwuxYroo55MvphTJsHzcTQEsrrBaQx12eHgust9a4MzZ6PBZkRCBospwGkQv3uSgf",
  "key2": "2KdyZQw1aiy44N9rrHD9WNBa5pCWsw9o5N93vpypEqzSxqxnYp5XEmPKgDSrVGGmQ1t1f8YkDLaVNktECrW7AWEo",
  "key3": "2t9GnoDJsudKo8Je91xH6NPRfHnGv7YtX2Y4Au99NDyyWwdA3WxDj2Kyon3CLeiMe2hX7jFGVrrHyXYDdXaSNbaJ",
  "key4": "45mE8CuehEtr724zXS3AdWgPFe8tbKVHUWVrTGhFfmGQA8TSQytVrkyuUHgcHhA8eLmnLBvg2WCPpxghSFUWUTon",
  "key5": "3FYv2MKt5WpE2SjnDgDNKekRW9MoGgrSVY67daCjJuGqH8RPv86vXRYfGxhERQz1Euu1muBHVFst57qYieMvKuKF",
  "key6": "3z5SgrMYUnFGCjmBenzp5T48Bi31UXUevhmd4TKqpJjJYY5y1kL1JPXerVypqvQSuyizcrf5TtDcsVgi6CqDKrrE",
  "key7": "wKgDMkRiM9PFCjDx7onrDwriyBcKonb1d72ojWmkQsyPQFXcRAFbWw13f7xd8Me95RpyT8U4Y6aTVhupxcVPWr9",
  "key8": "Ca1qqt6ZbcVP4Vh8dZ5o7ckE274KkqjkaK69RxTe8UMCr3bL8AQq1szGMKoceGA7FV7VUquyDpN78AUBvptjqk5",
  "key9": "3YBoRni4Y6YyV3MGe39sHfTRCbCQdXXPrjXNxdXQ69yxKNbAedXmJDy7LGd41YT9ZY5uWYj5oSvqvQ8PRNsXebMs",
  "key10": "3ApMJjd6Rq1ZKHzBzr9NZpmaw5ey3KEdNWcbmoZWRuMwYB1Vwv4NN7oMUzpsPZMgJeEczm4jRXsULk2BMwRnPKfW",
  "key11": "4RnpMCiEMvLukuQAAC26ETnH2G7viNBBa2ZRkPFHktmrMmFUspv2Skzudxb12CHioo7gncVSi1wX1W7gqF2ey6N9",
  "key12": "3hTPGCraBmjr7HtgA8gfnjN73mr8WA6xGotUbhWsidKYFh9C9ube7T1yGg5LeXx8ebjxqc2yeCwdPBzo9ximn6ta",
  "key13": "nw3rtdRwENVnvAoqXzfqoghe4Z6A7mmXh8QZVpjtJCTh1EBUbrNZm6kT3BWKuTxiE3WkMAtsD93ukunKzossopo",
  "key14": "19LepopygLPkLWTe9qQAvxm48ZAJTduhf46e4xSTKLovptMh7m3o7xfqw8Kvx7cXmQHdC96Nuq9Ty38eQm9mdn8",
  "key15": "4XZtapmr8SvXxL9NwkA7BCAgaWsp74Xx48uR6pY9iGbCPqu7eNiz833XC2DiU9w5vRFAkaq5L52NpKFM9FuYQZre",
  "key16": "J89AW6v2GW9D1oLpCAYbWsgrxF5k5NGkxj96o931bQEyebM1RGnsDR3CN8YhiUMpbH1aowKHWkLH6NtuiB5xY4w",
  "key17": "toFKSzeKHKpHohL1dvTgYkKiaVwdDoRZkMv5SJXx6kYScCeVub6Uyh4fxhdqKxj9biVGLjLuAxQPve88JVLtffM",
  "key18": "642n9MzUdxRet9aLtkiJ2FTrPm9DVqjjGaZVTvQDJVMA2N99H1gcZaS82e95WvAdUwagGvrf3HRHeR4JkeriK2cQ",
  "key19": "22QvC3ZEhwdYkGcb6K7GcLyRCTurfdxamuPwcuN7ov2n5YSAdYryvzKCNFPvnHbUQCvoznP1eMDXnnu12ikHSdBx",
  "key20": "5bQo3kwMzn2pPF8T4HvXuAuPEd9CmN4TmRwamgKp8TW82VSuwjtABtdrasA7jm5WFjzsPzfbN6WLSqhgyxkP7cXm",
  "key21": "4SoEZ6PUu99XypQjh9xCo6eDR6qZ7Eu2iWayjdjasYBAaDxySKdrvPTbzKYsRy6B7pUZHWP2Ksx3SsDfyuoQAbvp",
  "key22": "2e4VFvKhhShoykn4CV6cvoC9u33XobWLoRbBfuNUVhmjYxnt8F3mX4FcDgWnjKtTVyVtBzEGBaikJJJctZtumDZp",
  "key23": "2ejvPzja95mmJnnSp7bV8wGKhS6VjcYEPaLHJxYYd3Kx1dVZKfRvhiYRwsJQZZGi3CFPaKNhC3FBVo88pFeGWUD5",
  "key24": "3Pa74rLMChicbyD944UBtgJG6ZEps7Vck1MdMs6hqtgRd48CyCYmrcaMMgePGn3YMjQeqaBu99dH2KjjJgaNsHnP",
  "key25": "3jsEHGrjbFWNad7nRinTxDxHQFY3wyqXCiznTFC6YManfuQuU3ogqLzxueqJzq9mSVrRRBfDRoDBvt3FuuyFiY2A",
  "key26": "4WhVYfKxdnEcaVk6goYXtorkVeUcQwJ5LBtRZzVbMTtth5drU8urKJjcF838VqKMTZ6bxL2bJ6occezfQosVX1uP",
  "key27": "3uDWcbdGLKuWfqogSRxymuahxfGePxt1im3nNxtXKzocU1MJSDsVkxNLtGoDCWPT24pCKj27Vhd3vHo8Gd8FFTLP",
  "key28": "2F1y3MM1Cnas25KLYpyCTjZCXcKSDkyvWCS7GM59S6G8spGM8rwzemUzZqjvByzfLAtGBxmwRhbw47HfDmNnNDRH",
  "key29": "4BMSHJZU4KxX6md4ZmB8cR7eHXUeBMKUTh1HxqrfhDpAeQRRozxxhPsN9S4hoRofRrjjoSoDKczxiDhJjrojSrA3",
  "key30": "3hwqoqf9869SogpYMjN9mhmJjKPv1VtRgah2UsnckX4YciDjhbkitVQMBwGXsggvEG5hJ4co4xJTGq7WnNnq1gbA",
  "key31": "3JirMjkrdG3fu2fieMJ1ySu3bHdURSSyLtxAWKZAc1A6zoNY87Xy9Xacxj7Ad5LEKtcHheohfwQCZpGWcFsvhMaf",
  "key32": "HfX8JtgExZBU23MAXEc3e4iorojbRtZHdrReFsJZvVjWgt165TuzeskrF2wMEcez51weaWmxufbky5GyCva496W",
  "key33": "21HsLPrttSNv7efAJ6DDugSpMBnKkHYVrMbP9V8qWGRmmeB16VosikwrpfgFw22qUFXNxXDv5CqiCpS5cBmjNC8w",
  "key34": "2xvBvVyAaaJwHTMtUeqZU1Hk3KMeqoDJLNthzcRGNTQH5dqvVrNrvxZprjzpoFkvkvhdWgHYGwogYXBxQJzkCQzX"
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

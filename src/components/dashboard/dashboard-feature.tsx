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
    "64napqEmNHc3XeJN9258d2j6GJisPE2F79kzhUpBtgBn8SPu2JbAgfGFs2eFdr17ETWwHevZH8xAWQUTEi2WBwo6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Au5sjtKe3HDnsg2HHFkcobiekiAja7ZXW7zewBMQQ4XLRNtfFS3SC9FZtEgqhJpHzLY4L3DZUAqA8i3fPnfLuvx",
  "key1": "5H2AVV1zT87MKm6s7hdVw5tiEWAJhhNVyNdxTaEBLcGBCmCVJM4VPXGnvoyJgLwmMWV7Exs827Cdnvv1m3XEEn2c",
  "key2": "3p5wwogHtBKX33gT2MJ5ygXZRVQJHeNPVgDE9Rqk7hiJbcbVxBv44KvJpN7jRDhmXe3GyiUxyZb819nQKRveQnet",
  "key3": "34K9hwCz4LU9Pcj27sNQnJDfeWHGqZGgA4MFfpa2TwDoXiCiV5eiobbjyQLrcMVpGBc5UhwPmg26GokcpxF1TUEU",
  "key4": "4nNWxU4Qz41noEsbzGim9y614bpqoGn9mK13wzMZdjnTTcH8M818hKjLpEYRgQPMFseyfakYVxX1NnWSKjPPZ2bv",
  "key5": "3UBkB7TykHAk268oPKgtauVYb3VW2n8nHCjCKnxsRAnCDuwd7RCKTf3UhYjjWrB7SUfoGLE24sRTtCew2fiWa8pY",
  "key6": "2LZDthgtmd6vb36JLWSXJXPqVGxXbjPqeisgRLP96YZKkwfPZnaiXCUpigLNVitBZB8PtANtgs4zbnxsqxRsdG8p",
  "key7": "uhcNWrL96brTE6XkGNYD9UkcCGmaZTfNh6kYFtue26L8h7RT3omPVGA8uvEefDmcMDhWDzwbFZdk3yuWxeDn2FB",
  "key8": "2U7Cae6Tr4MJgDWtGDXv8VMLEwcctXr1Aac4R523JXwurtiK3X5dCvXt83H7Ej7dDE2QxD3nsrmrJusNDirsKzFJ",
  "key9": "5RtpvAg3LAnNaRJZeYCRtmQuPn9mLSpbXJNNS3S6uS9gPfAWKgZugikXkLhrdNuDrPJzo2qmWJUeKh7zeykBHzpL",
  "key10": "4DN2oQGxyXqoRhS4PQg3LeXuA5N1wgxpstFKByt81c6MYjRLkqfoqPgBC9Wtxdj569U4HUL8cPhn6bxvrAMh8Bkd",
  "key11": "2nvkCWsU3uLVLh4aAUc6QXvKitinD1E1NbnsVgt6aqRXRWyKmw5qHET3ixjJ2UUmkgQY3mbNoUj18XEU3kmWrQfS",
  "key12": "QcWH8wNfQQAQ5Ht8KUfSE6QkW3vgKjoJ8ZVXRygkPRSDoemy6ZvCuxWc6J3X1NBC6QNs2D7KNfP2WaYknFZRBNQ",
  "key13": "64pSXWJW38n2UJ23a77jHbNXQm7DXg7SSWX619iZ5ypxi2a3sifwt1UAt9GuanpvgdnS3Jy7NeTbZVGxi2ChuLHL",
  "key14": "4NTbhkZbEjKzhEYAD1vYJLq9kWMaC6T5BzxBkcgy3udrBdzPFqtaiv2e67CECn9obaQhpwMY6jTxprTqnRv1YKGN",
  "key15": "52hwVCZexUA4KxWov7eWbZs3dDJrFBAAgfgcHr2bCPPcNcReYMevSYvbWMgN2ir2SdCmLjB7PGwr8rxg7TDKAv5Q",
  "key16": "hq2K1MgJk54cFjdTkTkeULivYc2UCCsSarJ2i9XgwP317TTdqaVRZQEoVFZBYnGTSVp74THuegk2EsrQuwkmqEb",
  "key17": "2fHbLZNZyHZRuLRUQUfzgSrU7ipL5ovSxf6TADDtAMSSCbdCqGLdAqR1pAj29qiV1XDS1H6ujqnUD3eeinrurKMy",
  "key18": "2j73t6BkMfDTVsrBp3kERfnUnvpkvtcFJECRc5sPWkoZmf8rjjH5EpAfSvZ5hytAV6DHKLmistLq4PuhUSTVu3Uf",
  "key19": "5shfWnTHKchkZ77oreokzaKq9ZUgxu4HsFB58BknCQx4vZmvYs9pHFVaYDSVW88biwY6pk8hZmRqaDMWR6pQD99f",
  "key20": "5a11ceX7HVb3kvj8YPcaF6dbH2cTpUPuaBiXkpzxWUhKNCoe88asfc5RiVBHjnhXEnH5podbqooaHxsn8bWVsbYw",
  "key21": "XygSH6Ho1EGZATccFgWAP4MeaTFkxWQjUMUxRHpH4iQoPNQDMmaXgZsRWqUMU2HM7fC1yvsinSrwUUkDZos7WDm",
  "key22": "2yaXJunRawxTU2Ddiqh4UgS2mEXbSm4wZguEfmeupjKEiJWBfit8XxabP3WJyzj9GFg4j4MuLoLmYBitVuoLVKYq",
  "key23": "wJmdZSCm56kBwihLx2q5rbGGxS73hXJWwPy3kPpkfiLrKnSWEjmNkFNDHVVqWBibWreiJ1emg8on31TENhjfVQr",
  "key24": "3sqJ7wb6QV2EvwMJuviRQNaxiDmg6sVdTPwCJmHawnx9h4anyYM7aEz9aRJgY7vBfbex1gTWL6UzcJtLu8bstMF6",
  "key25": "4Rwwjsv8V1tXRWx928nzVheKiLuLuJHcZY9C6K4tNMDAECytgfp5RbhsyCxaVMQL93te7eedrbtQ4N1gf7YH6vhn",
  "key26": "4eA3z8TMScxsGUxvi9aoha3f9NBrgREqXJm9CcvtLvCEjKsTifUZRQUXumKcXnXBDTrB9o5DeAsjJFjzbv3FYmvy",
  "key27": "52LxgKppQZRBGmsATw2o7YvCQYAXe2Ya5mqEPfPqni2UvoWXGannR8KD9izpiFgiyroJdFFGqJguWCWU9oPwRNFf",
  "key28": "5QDxyWZ3vJqsMSj19xT1G5woJasb7U8DDrXmCa62y3yAy5kEpsEnEmL22A7RuykHLaj1T7y3KtkBHK3TKnewo8eW",
  "key29": "3EDNPfD4U6UcTgV9MkHX2b8aWuKFo9ircRGy3wvKegib117BcxFAxc4zmjPh3hXoT16QFsjhUS4B7L4Wd6Q8hyFm",
  "key30": "3mNmWCvQvidA8YM3jjcNm7cDS1jtcwc98ZnqMhyZafEWtHJtcPQB7ThvhySzNYwVEFXhx1QDb1kitCNhiPf6AFiE",
  "key31": "zHUfqP5ofQesoxa1yKtdBCooyAZvtphEYq5rh7c7TS7D72UU7uTXtDseTuaq4gJ55ykfg7gaWRXrfoSS2T73waY"
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

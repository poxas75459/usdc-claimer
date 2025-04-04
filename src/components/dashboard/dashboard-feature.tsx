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
    "31ugVebQ1DHKXNnv6xKewVyUUjyn8TMAmAcMpywNUJ2T7mG8UhNTwt9PT7eUdDLEmewQ7RFNg3YSE3Q7gsrohn3r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o6cyeiQ2uCM8bNcmZ8J2sKG47SAXVGQGN6gSLfq7eiMh6YMo53xeCPsATv7vRp2Ditz8Gsm6rzV9ecxxzvP1YjD",
  "key1": "3Wd3JWsDxkB4C7AT31n98dpThZKQhEW7iy2uFxBPi9wgXd8PkCwKG5mZhHBMzbM8BHoQhYyVZ4tFE9E3JDJqVYSM",
  "key2": "3gQtb5kFiSaGvBNkFdn2DeQV147kFkrznxXUJ319DpSAXTqrBziMGQbMpHK8SJuNWq4MfVgh2Mebvkn9eGwnaL8g",
  "key3": "4FGbuBmHiGdUYP5iXFYkoJxeJgyLjcquSGpLzRmadFR5GwymeKxm8MuhrCydPuN63HRCJBUvzBh2zJFGpwtQbws1",
  "key4": "3pUV2FMdkvWG3GEK4kxdtfbv6KKunzkSXpxex1t6ZCC6eTAW64VWzbFfxSwvafQSCJh2S6FtsgoKYFKFr1KTD1rW",
  "key5": "3GKRuSf8N568WUT8XPFhvPKh5fsdFtxcJn4n6TmJQpXV6aouFhG3iCHshbv1UAfCpbG9948nPKd2EbTgQPWancK5",
  "key6": "43yewqkEqbHLftb7Jorisa6wZRihUxbJADx8oKh5z32KshGTa1umCLpa3UcVrSxvJME7JEwY27yiwCGW68eqsNBv",
  "key7": "46ux5pYQAd1kRbHSw4C2ah5aQxNpbYX3nAKtwrEitUPx5MA7867jL7qNoWC9AHvgrqqEDvwQxdm1fnre83D15QEr",
  "key8": "3hyyYkJ883dT9KW1H8FuGkMMYnpmvR98tw2FDaZKhBY9n5CHu9zNY3EVrzvP5bwEdjoMZTibyWdyVnCEsazWS6Ld",
  "key9": "wyYY8qqChMYf3RUneoV531pWYx4C6KzJpktZ7UDQTsvFkPeaabteQXa3FzeagvsQUE9gGGiHiavT1sAG6Qea6Ub",
  "key10": "2u4879yDAf6QMHtspddMxVENUA5SDZAuQFYaU1gCBMaE8KXpLmB5YGNDcFhobWZ3SFsGCr4VoKHpmJVVJiYKGRVM",
  "key11": "2cNuYFeurNbXmKa3L5qHKZWNnYtBNMkCDTKU1Yc5hoPphwedpd61fgZ7GsMj7xASMvJDe1ZX99bkCSpJm8AJpkgA",
  "key12": "2m4WpDjZ3y8h2AD3m3VWgpyCU2Ui3Wjrcm6LY1KLs7cgKuzeCDgG7F6n6dtJcMPRwJpBWattodHNYUyaSb9owpX2",
  "key13": "2uXeGM1xNjWggn5zBJ7vt7DJ8VpBzSVPx61LnZmfUBH7Ujw5R8PbuJ55o8Toi1UsqehF1aXZUFe51wyUA7WE9EiJ",
  "key14": "5TkqTVPquWeb8kYdMBC5AZVgqvqMvYco6bpckqxw46T9qSYHj8j6Gd7jLrt4r8kp9g2uVNFpJk56sUSg8g4FAJfP",
  "key15": "3h8FXFitXdBBuCBzRTXP694bnwU2GRf6ZVXCqDaLVxssYecgXFfVM89XpwExtEKtnx619rH4vi4Cbn8zRCWayRDD",
  "key16": "41bPxZBzDaakSAmeSz3SzfMHfb2BicDQ9DW7TbNbUyzL3XaxWPcGYNx9P5CCuofifkq115guTL4QWnRtGCXHE7Sr",
  "key17": "uiNEf532WBDhtCAL2dbrco5omP6pDAmANxnyAph22cMg8QvJa51A6zPfEzymwESVcxQ5uvVaMg11M9QsPZoxc3h",
  "key18": "4cSMKfPw43G2Ev7EuDf24pP5SrSmT5JymTyeW99xqdkT42mWARDebqgjEq7z4t3AU3XS9uNJ9NByyL38VTHsgj61",
  "key19": "mT7ejaUUSH6tmvadQUrxs61iZqKXjEqTJvcFqjwHjLqju9CTPZh8eWrb3Zy3z4gN9HuDwPunMUzQABEAApzNDsi",
  "key20": "2afSNvq2ZhLJfyWBirot1k1mJAu2vRKbzK8eEsX4PGY3wLTzc7p2aZnDH2TExDfDRT7DcJcLsc9XqMFKczNZL6hk",
  "key21": "4nduj9SrcvqRRfFVvoCaAwzaQgbyjg3SvJ86JpiyGvp23SdoMHZ4SuQmD7seSykhySc2XxiZjmieizRsDTv7eWWF",
  "key22": "9Vvpa6kPtiqjaieojxNGrxncSqEuSJP7SDsVpdKfoumsToRpe3bbgxMCEWQZFigrf6mjianK5cJv8xoAC4QCEif",
  "key23": "UZmY4FjuXwCyJekWmK9GPESowXaCRRESEmhQ3RJpgf955wq5AiGtAdoHyJrvvo3zpVExfNh46V29goga86AhX5b",
  "key24": "5Hek7e3i6p4BjiBBt1nzunQ1htjKgXTcgwiDvJnzHCzXHXxW18xt5Rqqfq3xMJ85xTEoDSVXE7aT8jW6VsHBijYe",
  "key25": "2YiLF7gbWmHNGGTfNmPYbWZ7cuYsPqMaU1LLM6j6j9AmA1p8oojQRK3zGJ2bjPjt4FSkN16J5D3jm5A6HvzbqsPA",
  "key26": "3aRy59imeU2BQwVfvyNxKqq2Fw834XywuxSFWTYtrS6mxd98UmTifJopzMDcPjZDiZu9XaaFKbyLKZ6twjPQvTJf",
  "key27": "2Gy3bKjP94S1SJgeoNnHp2AgyrP1C6ScYPaRZdb9JiBiPNa1Gdoyg5xuXyNvhgRQ9CczYkof8AD6tuA63yYx9NHB",
  "key28": "5C52hmrUo4drynSA8sre6wqfcDF6qR6JmsKZhtagJ5xstKmn28RsUPrAgbYjm92wCoKJvdsYAJt6GYkZP545TRSn",
  "key29": "3bvRjs4ArdZyRzRX5NhLKkyT6UwbLL2HgCvMc4zjp4hAbedazgDZLVNn1SQ7sUn7VAB4zf8iGt3137dttrPjk5bU",
  "key30": "4b8kbtn4JAv18FAHrDwSXQRZB9aBTeW4XUPUQEmTvS8EcUo3HWNy1BMsFJHhcqPMiTWzsGs8mftvCwhQC7HQHV5X",
  "key31": "53ZMHxgRgnqB4rkWrYz6w6JDsJKRy51CFJFhCZpebARNwZkwBWRL55y4xAadPknyew6i1kFZYuiv2qwaZwZrMeCq",
  "key32": "u72CuCdVwkmNLp5ZXm4KVfwoQWQKjK9yfM6jSYqb7iCSyVw4uR8rZkB5PjoDnVukDd1EELm9nY2TBj6WG9XChLr"
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

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
    "2HZ7KjnZVTC744ayTh5Xm27uDkJ78nPSYtG4aTqvzMTFygF36EqaCQJG7JetrKA4Zty33pB7xM9tU37FWnt18rMK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GWh2NxHwCqjkSdeWhyxS7Y5gUUCo71QqFq9JcDAiYDpDKy16H1LmVWfzxy6LsDrxNaEoSgWPxePXwXjLMW5kiZK",
  "key1": "3PmFGXW3HWjWhWGEbuqJhjEtojusaRSjNhUxgQSF865wGtXe3pqhfLNFBCvDnNY6mpGw7RiKd48aoZnxVfXzFAnX",
  "key2": "2nm584nNpbNr6LB8UTFpTV2T4zZv5pSU6pC7eyg8zTMZEr5mhgmikRosQqM33EnnqSz75mYU7Kr4RiRYUM7JcNo9",
  "key3": "3SjVJw25zKe9X6uysM9TTo1tznsH2L2vzZ6A4RAjKK82Ex1c2uNTErjppB1xAsgRXgrfKYmAj1cd7EWc19rCsang",
  "key4": "392Kqmn7RoUryH2DfTvLiFAWJzXVfafoUmZZfAqvPbBhsUfZVyN1bzzq3f54Ngyvo5DWMQUzgDBaCynTsEnC2RfB",
  "key5": "5Gf6XsNmx9KeQ5gY72th8zX53DTgMDqAFcNFQ7UKnRNTo3W7nRkTfy7pG1eVoXX56Bsb2Xqk9LzBCCZLZhQqohp2",
  "key6": "35uNRYDS6skmTBjjLS1iNcqVVndzYsKRg8LVhpUxcn7Mr94EEuzZGVHGftpAuGp3uRbQHVRJ36XhRgzGUKSk3uVY",
  "key7": "4x5sX4wngYA26HSRQBcuhcNhJzgxYcTJ8Kh79xvmdyBWLUN2FkpXa8a69PuHDNv1RURu3jDKBtARs9657uGFo8J8",
  "key8": "2DGAs9N9BWaZC7gsuAMSPNpL8H6zLTJDcs5nnR4hti27AxQnYT1qseXME3woybf6MtoDXycV7Rm8SDGrYgDfSp55",
  "key9": "3djzJJWzWVjmvXoA5kHcJBhdi7Jyhs3aWLB1v8aSxCPSAhTKejsre9ko8So9Jku9jWxvWzaZ7J7Pk7mqtKV7FN1x",
  "key10": "3LDFxtX7chtBuyqk8gSYrZ3jE1d7n2ADxWLL4S3nCaST4PcyjZACLpeMMbconfz2rM3RXUVGe5Mi2HLFcY74SE7o",
  "key11": "3drAmV18gy4aUTxvbk76Dbvz6RdMyukKxGstK1wqrhCUF9EvR52uTPTnisN3Z8SiSMZsX5mq4nFwz4gUn2WVEkiz",
  "key12": "3a9aj31ofp8F6Mg4Xq5qESZBqPogzQPf9qay2kBacSqSfoaMqTiKzMXHztXp7r62ieMfwQmNtjMJtW6YwaVPhEQP",
  "key13": "2hc7Wzb1Jxfvj5nVXMnkDY4Dkn8yFpzZknQqLVDWNirESNuyhN4pAWbiAvwRojC5okxAe5gS2Zdxddy1j1dbgjiH",
  "key14": "PbHpxriNXs5Cpa3aKRMjS75cjtL8ih94zh5576qaEYLj3izhWZHf3pvCL3ckvQ6XGFUwc8scTRx1sr35ri2fLR8",
  "key15": "2TvPF98RG3EcWpALVQ68yiX7VAmbKMLjZxB56qyUx5qyRPadLw3TNNjWH84YrLD6ZawxjGevpKAQXeJKKfhr3L2e",
  "key16": "5A53QzPV7c8yKi8Sq5HaVaBrFZsHUK8QLu83rToxzWzrnu5QrSo48AaFbFbRtJc7R16MkkFuu4HwShN5Cz66oUyw",
  "key17": "4fiderttCqJwS2ZapcUJzaGRNsrGKfDyJ2AhPsGCinwkVZt16ZR3MnavpFE4DkwTMJQV452A6j9GPxTCBqTNLe9f",
  "key18": "4mpjTjuuRE5b9ADeN3mN1sW9zbpTzVEg2xjWkTwfuwoF6qB9HZrxNiqBPFNvaSrxYrtUgSEKNfE5qmSeJv5ickmH",
  "key19": "4JVeFRW1kFRyztn1f51pT5iqVBBAtVFE2nozENDpaSUTGwuX6HEbvuwnCFCp4cqtQg41ShsQwgqbUCeDHcDmxWWW",
  "key20": "4LVLmk2La7Jsij4RoJtp2ZPZm4vFgtSewUTHPmGRXA1HPr8Ukx1UD9ZDiaw3LxYQyNKZsJ71WYLPgp52TcLYerpz",
  "key21": "63dv2Be7HWSvQ7JwtzLhR1BXZqPKzaAhHqAcBwia97ogkaR9kEu1FbGXBLRNcFeU68jXTdnzSUY6qPSvTKAhSUjZ",
  "key22": "3MG2827iQZw1nTx1XX3M8X2KCrqAyMzaNVy9E2v6JiWCFH2DgjUPa7TyBfo6kzo7kj99qSHFawqtckjZcsHMi3yT",
  "key23": "gmBW7L4nmuJrs3GJcneLpm9Tdg9QQuXQfkUKmppuN23EksSQkdCRjYYRiWQ4cx9KSsGVheSeeBTPa6tHHVJnojU",
  "key24": "vKYcoCfWR1oaN12kQgNto3DewXRVQM6B4UJtEPD8bbU7G2To6wjbemBq7ypzrmXKpQpkNgKPZutDyq3V4S5Aexw",
  "key25": "2GwcuExrc2uZP6rFECdXnaiSW1rzzur4jWCroSTUWht7uqq1CZYCMQQXDbMy4HtawtejpEfPubMgu89Xs4rSnRDp",
  "key26": "2Yr91ai88bcAZsqtPUFJnyden1kp1kTq6D8MF1Yr5Soz6uMDWtdaFvHi2MHCqp8AssxiYvaZPyayuRdqo3vGfNdS",
  "key27": "66zQipStvDar9v3yHr94ziigEC82kZMDtGedTHPGTMMBuvciudU1p6gzNxr8emwZK5ALYZqiEQ8WzMv2aR1tQjEU",
  "key28": "9V3nnJNeXkEHFDVqvo6N2oZmF6c6Xb63bhWf4A718t7zfevyrax8uQvBANSesfTko2KP7Wc7vNXnNtJ2Pf97RC5",
  "key29": "5e6wqVNHdDh3nx8cfw1iV5UYyu8TvqemzSPtdnEPEMzuU5LsHbKYUfhfdzKtNVXiB5REUx6EvBKLk5zTGZ4Adrrc",
  "key30": "5LCBCPNaL9LgfGvbFkR4xxHRx77SNgfgp9gu32KJq7ggNLnKL43U1A1GyuVAbtVGVs2wFVQYsrDTH1K39yn6DULM",
  "key31": "4NTCT6EfQSwe2dNUC5asKtiDkmqicDd6Fk73mmjkTRtcX3xECTqTLWvn2ZD9n9KmkNP6HYk7LmvV8DrZademf2Aa",
  "key32": "KPpbrC92h27koxPmnfmgMQYBSav8hmXhZJdf1L6Vtdty1ve2n8QLnGTfaaUBnf3rBEEYMnHGqUHiT8eWiiUtNAL",
  "key33": "3urjafyXkbkTsKa7muMyNHrpBhP8nozMon634n7bMWp2KAmgm4pMSQk9jhFTYDHP72d5VPZgMo5KPTQGsx9eQrNA",
  "key34": "4AVPQdmXPumGNhVjQ35tpPMBGHbM9s2akELY1DJqXaPWbuzzyYt6arhvUR5E82ftEpoLZjwiCekFx5Df8b2DX3cz",
  "key35": "2bDPixoFvbET8DJEALFd7LbaGwRZGSsonHWvwycDkyD53HUFNWc3UZMsboroiuPAM7dCGjPRY9bAdytKWgqAVPmQ",
  "key36": "Vr7RUrJF5CcFrrV1L8LBGLVvKDzSepiMCoX3MHNcrX9i8a1u8svUgcQpveTYWqhZtJdVdRh2QCjNFQhTfzAmGTZ",
  "key37": "4YmzpaDYpQiFKb7ngaCSybLHYii6AHngbsMSJHDRojSqaEz1HLfUTKnGo4JSp9EnyPZpvgzVUpdnTDpFeYJk9gcS",
  "key38": "FuAkF2B48uMQ8u15EV88e9xfBDwJK3BLjzMXubVCGcdJ7ax9G3zifoR926CjDUmx3uiamzGdncUH95vTE54itzB",
  "key39": "FGaqbyUvwn1VmZjxpEaStH6guVnEnZA4DfJQt6REC8XmGqcYCwV3FJWT83ubYtusMs6pAzHz4CLpKwori2HGWHN",
  "key40": "4zP9KivNnaQLD9DcGDiEqFypwsx6vdHV82B5sTaPVmm8DarDHrUphW49q2rcfggWqvZ8fipvmnEPauQUSWebEp4u",
  "key41": "5HzRrwwfwjYfu9p1kGwpNg6xt4ZgoZ4D27FLDASsyATpVjmfaAu2d3cbMqBD4DfevGXe9BH49Si3LQSV7FDJq94D",
  "key42": "4fzcuA9GnScGzjmedctTGUQmWQDSvmJABjTEp9FM1kvRAbMxm8CDKJvBJ3fWmmuWg2oweJcrrnZTnXU7N3WgKWed",
  "key43": "4ULxuE7muZvJmsfZystvufu3BfPVkF9xewCPoVPwU7PwD6wPnNBszZ8gTfynuDeztgjhZwXk6Kz2854xeLALm7Uy",
  "key44": "byPJkHDYWuEyVHsHchG63eh55GzDeLCoxgNkEDNaD91U6hxme7iV4Pb5Q3Xhb9risjrrQDCW9PoVCWnw2dhHrVz",
  "key45": "48GiGEb3kgFAf7gwc45fGMZdbTTVJ1hUoHn7puhTfejbFHmjBcuZs6o4QwTbFficphWuK1669TJXwtSu6sGSpfwM",
  "key46": "3nWzVt36NCmtof6rDWZ3QRxeHLn3Mq2JDp37RQkFAKtzrxP3FVA5PqtmW81E3ZE3HabQwyPVEjNsgAAgUaPfnzyS",
  "key47": "66Xx3tK2dEus7su3z5oh4RPvQDFmeFTvf89JeGMLYaw2fU8k1iXGnwqjtYXX2pBxMKbjgHkvxxvJfByw1hGjaakU",
  "key48": "24kRVm36qqFxkB1v97YMcxLnruTUi73rEHoUuwBgkv5tGcYJTW6ecrHpioFAh9ScvpqkeD5sVXnXDDHpBq7HG69a",
  "key49": "2KwfdnXd9hcGVN46qTWNMW83MJS1S52uJmXcLvN52RxPRY4K3wqLehhHrne11bUBSUKPZj1enevRL4jjHbTb45wH"
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

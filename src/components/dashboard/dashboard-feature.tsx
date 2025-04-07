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
    "46tAyZRjmQ1QJQVukwhFtCWY4s1fHSc41EhfVJvzkHyhvEv6xvy1o6og9y79hzmzHQ9R516QEoipV7eKVt3C1uo4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bzEYppmXGY4rQipDtNJmj7FazQf4TwqX5eeAfJDP2XJUupaEVRMvNGaFFzXXoKsQgcnpPNrwESCwmWKtkHnUVip",
  "key1": "7K3LJcjD9RUu2nEoJiKc5dddY1eqCrmPTPhnkAdHC7jmvKPCUgFg1Nzd33E4pjVNdqpSaJCMkQx6yR9B23UKrMa",
  "key2": "CpWFwYCFDJFeEirRUvvEWr9xNgQk8uPi3pLPHbahUWiE3okgQpEjdZhqoJWwtGZ134MnnoU6doHdKBqAQ5c9HMX",
  "key3": "3ucvEg6DFYKnUri3nBCtKspj35rLF1QJysmsWZwn5xUKsCKCo7wZsoKDeZqhYFqnnPC6js2znE2NpTPKgCQQtzjV",
  "key4": "52X2uTGSABLBrs9qnLSxYsP8NbMrPt71y2gPX5ABUj76Ke66oYKDeFRN5Lyp7dWJP9ZeFYK7byA7X7VD3n2Y2LrH",
  "key5": "3aX9dLdHeYy1zxUMjgPF16WrFK1UJM2k2Nj3NecDV6BFAYPG4Tz7oyBSsB9SoHW6xMTbGPkjrEtYbDCtXt5A6yqD",
  "key6": "2PW2u489BFaKt6MxLMTZmo47YyoUgAYZJXExHVaRwpQuCH22QvNwGEodmDhqNBHeFSXARnP4xKsA2Ui5N6A9ZbPK",
  "key7": "24jj6DByTjfhVCjqMdvhQ64fW9BsTCDtcDsw9dLyU19jAkkQrbvWhoitwyxPZWAFE9RDvezNw8BFdHvn7NXMQWM9",
  "key8": "41Uw4PvVTsTveQoMiX8Lc4mXrxjhRHz7Xs5evtm2vgg4BSUVmJPXQGV7WLPiRHUZ3NC8QK3neUqDUfv3KrSfikBq",
  "key9": "2ZbzNQhLeT8zTAAQ1oHVpmUAWYLps2syk3hsPxVXZ3McpD4h2XEDTnYHL9FCkQcHuB9cvdnpXa4qqf8gpaJgjAJU",
  "key10": "XRVMdrfPwXvxGAD9cXGzKe3pBALVFXQ4sUnSisHNwcUJmJ9qDCs7FadGsc38bmvVBKNbM2et9YCytG8tdCq85nG",
  "key11": "3uUo4Se81PuiXVbuutxG7huc6BtQKtjHVY6UzqQRqLz6sx6tzreVHChAk2FXWRpvJnHw4y6GKxUTwL8ieahjduWa",
  "key12": "KMGutq62bp7yEhW7A7Hmia37FihqY882FVy1rVFUJrUNBnVa1pY2VxT8nwH1QsqQtYwyBCt3AhRiLTJk1pA24FB",
  "key13": "3dFFyAm8h5bZ7Y6JFdpysKqTTSvzY8Zci2MZeqfWj1Mo1d5Tb9vKKoNqMTRhbfSyWKchw46EFis8ysfxpVAaGzHc",
  "key14": "mN1ikg5HGpQR7RdevcK2gvBa1t3MhZXMrJ5q78UVxaEv5YJJgHTPDcjnee9YrVEHN1rweL9sXoYpubaGYdkvhWY",
  "key15": "4MrrcZxEtBR8Fp7DTLAyqPbvV7EMakQmnMMKMPSXm1tbxkf3DgLuPrHB3dJRN7dGy7wpmscUADpp8gou3QrKWPfo",
  "key16": "3unHXh1uKjx7JAkhehw8aZDWzDU1MV9mscuhv8DBBejkNDbJMzBZN77cGkoy3AdAtzC1TSETrzQxVShpYD4xa99P",
  "key17": "3HydDCVPukgQMnEpYMFyqcb9ZHuCMSnrSBbDoz6T8jHwmd9FKAeKr8RMq4mo8fV4pCRR1UquJNzCyBQzntpjXkwF",
  "key18": "2125SFNERPgs1oYwkyCyMPJ7RfFxzWA5EpTUab1nCS5tkCSNABaPHujXx37C2cqwikoVRRnvmecTDEdhL224MWeb",
  "key19": "3UhdVS5cyZ4LskLkLhb1bG9tbJj9pC7EWPhT2XnKfWH33NmkmRXrx6byF9CaGegxgLq1ZgHQxa6xR5Y9D4YS5uai",
  "key20": "4EM2QwKLStoPGHVhwExU5ehtQLoTTgj8RfVZiFwRSJGLNrYQLFdHb24q3NXUNQL7BazvyNmKXRBmg87FZY4wAMaN",
  "key21": "5vRpNgLhbZeuhGB2FCJoNgGURSyiCPCnRzw4dH95xkQpstTzvrvGrrxLZVVY6AmPL2n7HSJBcTsAi34v72nXp6UR",
  "key22": "2o1KSWVsyWdfCV4grbWc1UtcBGZtyNtBJewoXPiWyoxpTkt6P1JQs848kKuEry8qcw3KRYfzdc69yVJwDfzzqvJR",
  "key23": "5VsiWUYkRumUi1KoGXJfhorqT3EhwLsRJzhghDA7BtakaF7HyUTEVMrecFw9iMXjzUZf557j9uu1i8f38e5WmAQz",
  "key24": "2G7TjEFrJQetFrYNNsAS1otFJRG5kvg9qfBkbtpAauMXpGEZSNpKCaqFKpaZRFNRtgJFW7XNpyXBhv6rRJaF144e",
  "key25": "2ujWy9fi2SwyuGkcwhwktSdNkknm2am6uctSTw781arLV1vG6j6krsmTKRmbyEKYCCgp8JqRa8ifLN2BT5co6HFg",
  "key26": "5JP7iJAsGawXUtjbtcoNkvij3fNBeqqFEM5EKFUPhCPaWGBZane7GtT2Ftx15LzzUtxsrTfW1aCne9TnMB5Fu1Tn",
  "key27": "3VdM8iKhTKjXYeGu27v1ab9GUs6DTXAtnC9CDCKdbaUmMsCwZLhvpGK26oAV7nn9rNXKrSYo31NchQDxDXpw7wgR",
  "key28": "3XWa3MN1vqpxzwCVcY6mE61ySg4i7nuFA6S7ZAz3VZGaWfkxu6jz1WUjYUtAwCY5qQ16dMbub2wrtjjqXD44Exf",
  "key29": "4wYW7Rhfa7LrrcfS7nCKHrSH277ynA7BNP6gJwFgqszGzvvTeBtvwsJ7ibMdQ1ECJCdtQd9YZp51g5GbEZauzgT3",
  "key30": "95jZkXvB72Mt7pVT63Z9XMpGeeonzHQjtgcfnz5kE4e2JEbRqUi2Z5npZz3YWtXTMKyDwSWmtpqhSukgbsuFhV6",
  "key31": "49E3AqsxhGaFotAn5dmxZv1ZCnVnyaoaK7fG1bWvtxqNwSGijAwP99GvxhiF9hxNDqiMjeZZxA2pNDomicc2ixhe",
  "key32": "3f52QGKoBgS3MorRnNLWDWwgUMc1NtyMm1kxz23L2fQGZbwNDbKqeuoLe43d2FRQUJXw1iQfWUMEdDbKtPbmYvat",
  "key33": "2u1QJA5B6BgPdEGDkpLkDamjyk6QdwvXLS9Q3571MaKkAsXGNvcf26YP4voehVNLHTtUx6ztxC8kCHisFdkt44kF",
  "key34": "YQVF7iJ3UycvYY3pEQFCB7iu6xuUqyWZpUUpHmVxJnHafVdpiwPgW4yNwxtQs8rcFQYGebxYC83AHV8DvVTec8W"
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

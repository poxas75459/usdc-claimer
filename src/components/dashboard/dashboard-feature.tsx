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
    "4sDpoPaA97PfKhZj6gbDqFRGDchFLMtffVeMRPz8A2pZeDdHAANbZfnsaxJorCzLz13kLZrW154BTbv3yi7mc3ZA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Qpo8Py3ANHJsr9sNiVNihLNAF6Kv7vqRyzjmqT7A8ZymMCsR9Ui6yVcEV1fiqG8UMb96GGpFZ3FGrJMdRgQpNjD",
  "key1": "3EbreuAApdau3F4m6BYvEHG1akyxieYp2JzP8dj8Zoh7WxUjHS4tDgutCJwsMitgfL4t82qvPF2cSLbJ2m48PsLF",
  "key2": "2MJEMAkgMq3p4vw3KJbrQWcspX8QrZMgwssvbBJYi7jz9d5PiKshhG8Q2AChpMzVkhtnN2i93xUV1bkBraA6YwNF",
  "key3": "3CCLgpzM36j3q8WWYoAdEdWif2pG7oKVfwAqYcSNpLGVFCccVYJbaKtAKxoaXkxzRF4xd97TxF1t7J34p3JP8s56",
  "key4": "4ZBbFqu6wHnpugkodiahnT5rHX9RwBwyKJsf7E7YxViXfAube1wwY2Pon4tSFcjqd8jcZHReZtcR7MDtZ4zVjto3",
  "key5": "3VhKfFkrLWgLVK6nv4pt5BPPz6jZfUS6aDjq36bAW3hH4G3u3KtjT5EERV9FHdbuzhdL4JbdvEZiEqVK8QVFcq7y",
  "key6": "3hCBbjgUn5ugSyUs8yNcxNyozvHdtEMCsVfKfDnN9een1BbrrfiX89zpemBD8MgWLKuASwFwgQ7T4VdebhHP7nhX",
  "key7": "jsw2297vVynLvkrtszePBrzwdzbfkov5RLm4GYUN8ZUVQ2UrGw49weBDnijXvY6Zb2zkupYNkvytVoGy3fAc6S9",
  "key8": "4TTbtvutqETnC3mMWuqe6pxgut5xh2RWv2eDEoMr32UfgXcQvLCpteRh1LVM2BtdjyRXkmw64NN4EknoShDXVvqh",
  "key9": "2UYXsbyAUFdb2pepKpzdjGRRkKPtv6ms8dYEd713ke7JD14mVe7xDoHcsHKQD7Vx6Re1zUsQYLmCyPWqse5SopiB",
  "key10": "3h6K6kosXm4znsgQgDRhpamWeTf3iLtpbyYAb3xzyNbbTyKgaHTtuPAvSizoZGb45BrvzNr6ysQoMC2dSzR1BQm",
  "key11": "3xUMsmwVfr778WgaeKvGx7uQJE6FYC5RsJ9btwoduF8ZS9Nz5aBfF4ob8Q7KssAqtXUHqw4bXw33ZmsbNZ4z36vA",
  "key12": "3QZYh9QmmR1o6sccUfYFALydMo2hoXi3usW4BynfGedwhCEYBXufAbBRWbiWKNGM7McL9rUcmEoDz6hUrsGqqLFR",
  "key13": "9CnG3vzWWyK3RAFu1GojPu2wMxxvjmyWfLgh3VAUxntMfyZJJsCVMK2AGdEPxRPBPa7eieS3ATfEgFRapLvhCNh",
  "key14": "56rpdtNQotNSgMX6fWq29NFfu54D8TXqtJEfQnf2tRRCxGatF5m2niiPCGwe89AwQvxH65ybFTAkYHuqLZCfuMwg",
  "key15": "3DH7A3SFJymofkSugnEXFhRgRZDe41xx8cHNEvUbB9J73kmotRJKkTaDiqo7keBZ9JG877LWEH9uLMHr8u2ShPTD",
  "key16": "5QJRZaRX1FL8u4HG4xNBJjJBdtTwtWRF6bEPTmQshceMWUg2eamKGsegUyf23wvn7uVrPC3xPLkcRmm7pSrgsarB",
  "key17": "4HhY5T7A5jZuoJ6tqwZ1oWBaT4Biq67orvBqV3zBGYD5tcqB9sXcMqbq89jzgR2hNYoVmPisnnonhTyZFyJaD5Sn",
  "key18": "2GJp5eDxo8M28mfmu9ReNYZ5LzwVgMEwmnT9SkKXma5qSmCwAJBpScAPh5sNar8Nfh3SsnYrXRuMJZH7ngb3XRn5",
  "key19": "3f8XzPCZLgZuVbsivphBNQHyEWxEjZueYYSMyPv3rqyxc7otRhhbYHee62QDXpTCJkyfvDDaPpejzAqzCZsFRAUk",
  "key20": "5iePPfRX8yap3odhmEdsAbd4MNxjmZFhDCV56fDni5nxHvVPNUUTg2Fu7PdEnQyEH6x8TgnCx8Bhd9L8EvLGmjX3",
  "key21": "8YaoaV5mzmi6xDF6UEpMQLz7dCKKWjnhKjDgTQXNd99ckm6CvwNJgFvvjJya2Gi7qtpEAGzcaodPVKkUDz4reYK",
  "key22": "2csP7wziLKuGMBr7v7TB25zG2N9VGF1iiMrimmoDMB3vFEYqDjn3hMw1xUJByrGGWg2YMkDvBturQYnfjVztXBEn",
  "key23": "2oGCAm2vNtQaXmUvw4aF743zm9APykZK64gpCdwjAkK8S7uAvn9TQYSVHPSxwJTpta1ghZfL8kmfGyQf3orMEnK7",
  "key24": "4jyVHsVHRHPWpdPzSobDyfJpZKSP3DV8iuSAp1JvwQ5ddQx8BazCyb9BQ6Ttas3jMFEf5Hmu48PcR5arRBbmVFim",
  "key25": "2GXzx2g94fHEnyTwafDvYCBJAKfDbYDr9zEAHskVH6jofhi4EVmPiTh2zKjVYh8LUemEgpBL5cQEeaZ9V4G9jDYU",
  "key26": "C7gmetvg5HZef7ZLidti8FFs8zc2H43BzJw6C3NCZxPCqz64RXg8rSkPyfyDXMuEBPFuMtKBYc48mAYr65yzDRy",
  "key27": "zBSBRMKzefKp4msE48sfYUs9gEck4gydBYyrfGVEbjaQkfTfiF131MyQYymhdoQgJVjVFmni3i7yNKqVUJx46Eg",
  "key28": "2Crk1i97Fewnm4bnxyPinMye98UhudLh8NPMxp5DMgzt3dz4zPrcLVzvjt6CCWZyz8iLPcdqaY58ZehrYVYna199",
  "key29": "2Qp8e4StWVnkUGm7HjXZWCH2cEEDhmsaYFZBGRmeiH2SzzpnFA63qFkc4ziPcUj7U9HiFtU5KDQ3Td4ZeZ82K7eN",
  "key30": "3XJBgAEZhQcZrbQy7ajD3pV1dgPyQWEnNoqqbfytphJmXSCULvZXomvhZEBgwWHKmj5wN6N3gzwsaKg1yLcVhmXR",
  "key31": "3JMb9a9KKf2M7W1sL2pskfz7TY4eYYvBsoEpNgnumcUM4WJ8h11vDzw8MMcpPr47qFnPd2voNYBGkZfeoZDsYUQm",
  "key32": "2Byec17D5dShsntE9fhBcrfWhCJYHerkaX68HUAWpTgQ5VFUEeAoKdUs2KNUnsBpQWTEb6rx8vg6ZEcQ8r1k25ds"
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

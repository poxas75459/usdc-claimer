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
    "44KxxxjbtqeoLu3EzjKxAf6RGDCt8j6N1dG6iiqrPYsq2kQSduadA9KDxuQ8pZv3FxSC59m6wu9CT9CktNX4SSTT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vWVkq6sN5zGqudedLQSe9wwZZndThKTsWdX14PoX3pKGXEJNdmsPtZTh5BNEWtD39rY8QcF5JqQxjHLrhwFJfd8",
  "key1": "Lc5qUeuf1Tyi6G6H42hih5wKshosbzpvRvBK73TvGH1oW5TYXPyZQ9EMWc8eqzboRsZXaEt9h2tTG4e5J24HAM4",
  "key2": "4hvhfngR5ZYiXqNQCkBQmcqfhaBj5c5txAa9Kat16fme7dXLD6TGR5WGXQZtu6L32AVXRda2RNYmxWRfMf4GAP8N",
  "key3": "5wHhCTvkxpEKS4uDG59srUTNx5QWcegqL95yzvnsn39ewaPychApX3WAzy7AzsLTFVCDwqspERTfKzbRkxnPEiU3",
  "key4": "3tFA7pPscpe3Mbr19F763BphbMFro7q5BGGSRHtXYetv55X9SDFVDsFdJvGopwhs5HVQirFSvX9amx9pF1SbR1nD",
  "key5": "5QzjDxyrNXTfT2QzWdaqeD9xET3XwyGiqu9KEci8i9kfCG3RHunZUVkFcrPKV1P9YjMJVRerq7bZxqMhtYR2RXkH",
  "key6": "vmD15hDdPEgGRV5eSKwU2A7YREKn59pDW5GRXUZ13UbrUNcsecBZDqEBuZkR15iGJchxdJDMZrC1DwTHatVPs8H",
  "key7": "QjEq4YnXGBEWQRQ181EmU4DAZhTXY35b73of8PzDC8fftUWyUyrWBWLT4p5a91vRkwfh8wAFNGz8LfMZeM21enc",
  "key8": "4YoYH8pVHrsdByyAZ9mf3RX7D6rMzJmvFiA7rK6nsekHV9evW2pxRRW7bf8umDyD1L3HJsAaSA9BibiC1tc7w4AM",
  "key9": "4kv9gg2iqU2WmTnVNuW2eRre7CMYCUobzzrs2UhfEhQr4WobHTzWB9c4u4Hqh1BT6nwiKiXPXqMfUaok7wXvLhgj",
  "key10": "i99vYgVr6bV3UW1oJjiZcVPUZo1tLsMqjfGnJnjws3A1wtnsJAK4vxNvQFYXobGwRUm7txMNJS5y3jTFZE4gVxu",
  "key11": "4qqYaXqGbRLY23EsRd1s16Br6w1258FMEzaxmtm7AmMi78JV4mgYwe6EUFacvJVD1fzDR7Joy3nJC7uwd2gFteJq",
  "key12": "2gMVuQo9UKPakncci7vn1NUV2M52m9Wsr4EDxZPRUdWD2bWta6s2vaQARZWZk8rfek1ebcRg3E2WB9x6YaossK6k",
  "key13": "2GxTKQRyHT2ZUy4eXLUucCS1Z3weNSfFJ5tz9hDgMo8FQCMZ9bNDHALxuUA7Gq3VLqY8cALxMJD53VzW1Bv6SdFn",
  "key14": "wnuqfActCefMyr1i3eKTEWXPackamyMJXFxwiDs8i6rP5iGy3cqekptnbEaadwSMbUGLZHnx8cb3mmHBpREjXxQ",
  "key15": "2VyTpMoe641ZFTATZX7ZFbymToKe2vK1FVkcr7wQFrEEZPkHYygzNtqgKSFXx37nUn3KFPz3XAbEQk4s8612Yowi",
  "key16": "3U41mB4im84bmGbNMLJNgj9URMrAag6s4VLymJvCLejwMPMcXrokkGeN57pMN8U6GPGPnqsXY4RkAy6Yh8CoHkPa",
  "key17": "217mkKGrGLHDzCsfpzjnR9oFc62pFe2kQ8e4tS2QeokPLjnkp9kfPqL1XSdWEC3uHgMgyTchXdS9UcUf8x3HcFm7",
  "key18": "4HaqjreuuhQqoVYEwdHsmQgeBZJYnkDhkJquUEcsnFQpZVHmYbbenn3jEDxvSsyXkijoS9mTRLpg6cPvJUFJRsyy",
  "key19": "2kbJhm3eQpJBDUfBows4BY5uvDesq3C3kzTxdrvXoFfimsubdaEs5WyrBpNZak52vSyRmwyhpPepKcpBEB6PxUNh",
  "key20": "eYtGu8xq9iebaBwhDENQaH1zQdzg1GQT9b6hDVYw7VHTU56briFcQh7z4ndgKCts1xWLmSiHKqYqTY9Tfb1qzSm",
  "key21": "3Q5Uj8VPp6dPJet2haGdn4X2gTfdT2hkgGhrEkWLXnvdAfwRhT9m36p955oDq6WJokivBYXYjKSjkd3tUnVBzzFK",
  "key22": "5uv2wgCUxSpHxy4xVNxfQx3TvyfKgnAv2GETWqJziFXvdowsjYxWeXeVHW6hDjrexcQYtM6Ev86ZF2Q4EbdTYiQa",
  "key23": "4ge2WnZUbzVhhgmMXQ4CGVW9esvVGmmN6kSv444wm19eKnZNLHEyNb7a3NCb5XePx7RNj5mynbXSL3FMwxi9qUAH",
  "key24": "3dZgjZsnrwLEZQVMXymA7DcGes5qW1CtXTtWiUqH8z9eCGhCyaw7d18kAQZGchFWTtfPANNdcFeoHcVZz9coT2cs",
  "key25": "32BdVL5FoSooANY5MhxCPNCykHfdJEHp6UdWPGSdcUGcoZRyKRDsbnBMEeQVZXpdsLwkxsgYw5qeyknBmsvdBoLZ",
  "key26": "3fJH7D3ac3g7sRYnNNSKj1sdgdmCNqBzeoTAMPAcB7ZgRTJB94Sa1pxYn3987U3CUkMFThURGFT5FGiMVHGV6aLb",
  "key27": "3GPxPikwsugMqndfpK41gnWb9T4MeYd6QirjXwpZpJaDFGc4FTkPPfpngMJVpFYijuPov7ESzuDW9xYBhoc1kJcp",
  "key28": "2zHPRUsKcFXUe9Ckp39P1fXyzT8rNTPCyso3V6mUdTcbc5N8V3EwKEzdrnf7voMQ4ZdSP12hUcsLSHXDFn9KgYay",
  "key29": "2NrRPzcniM9iqB3x8LdJHAT5HRb5TeTjwmm7mL47VbjXi3fYkksRnS6btnQ4oEq326wFwgX9vGsSoHRbLMJF94uA",
  "key30": "T66oef9cHi1eoLYL5Jx48QpPhj21JVTPcTMQnF4Jq4pQSbdfPGQ4AstbRDSgEUdhuEqyiR9SNNsUxxcHkLa7Jps",
  "key31": "27GTkiQwvnQaphKdwKTR5yvTnJrKmDGKaKb8uQJcLhtsdTbthgozEMFwpiu57QdvNPVfZw5BRb8mF1btwW97GhXU",
  "key32": "56E5Cn8MNSPY7tS5rHQoivSGBprTuKwjXhX4UMCS5tAfpqPuuhmcqB2GYBj4Hf3HJejvFmAvMMp7gSwtz9VWZvbw",
  "key33": "E1ei1JSZDNh8BK6iinJpRYPNEehqE7npgLdoY8DjD6anZ9hoPCRjhvuRsdm9LT5Uy1aDNcrZqbNBMzmXtBdiCXB",
  "key34": "2moCz5X7ttLrct77YB2VvaZVfwtxghxYxLYjPfDftH16mvEsNEbCii79MC18XW1rS6dXHzTrMRzRuMTzfZ9zxPGv",
  "key35": "517Swraqq67eucPoWEgaANNhVuz4eAAiDSTQ1XkwQFCyh3ebDSboUfecVTGDpuMo2HiTZVQikA5gim1uMFEooKu7",
  "key36": "4MD25FHm9qrQEmxsRA3XAGehgoorTTMsW9PHYsR5n51Xcr5yVDzX4NMT2KoWB4afUv6pUxN7y4ctxJWqbV6shUek",
  "key37": "62W41AcoM3zFcxyuzR2A8s4cPezg7GwH2uamLVvVsfXCYG9cvJZnW9jen8dc6iyUnPE3cK7z7oasUNA3NVT7wN3L",
  "key38": "3pPifYZt3aWQxot5zCHiz719KdTtVrs6uuJX97UjBYmraW7pzg82tFxXpnG7xeesPefPLtYUPNwbHuxThmiN4ewg",
  "key39": "41KnvDXBCTaLdxmjRJGPchgz7m8pHCfWRmAhteJsmkXyxQxZuVq8RRLkT3stDD9b6aKznHgRXcp6msKxa6HrWAsL"
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

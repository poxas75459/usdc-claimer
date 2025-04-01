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
    "5nJvT4wzJcJADF8n18WjJ8uDRWt5QyJpud7T79sunE8DH1GoobsKEvsn6HFXjNS2ohrtPG3seUyvoiU49EgCa6Aq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kTGY9nfoBZadkbzCFM6wvdXEtQhMAkwBwrmxgdCQjJabpGqw2KiGk3SCtKKes6rbRmFY5Tkd546gjRJipXUCmPi",
  "key1": "hh4eWy4ZASr81CAtqGWSRdN1gFQhPNuXzjiaduYQjyBFJDtjBYQqx6XqzFnZAcNhzjRVAnmxWuKotLXbG6cna45",
  "key2": "2qFWweQnqLSvdXMUupmkDPUm8T1DuhhNVeY3VrfHp74tRF36XYoFvPBjvZp672HLiSkR45tzB2oQPiKcf3wvy1uL",
  "key3": "3TvdVdDLhYpSFanyTHar9ZogMCkUFYT717uS9SHJpwPtViPTZFtmh58m4mNFBNjWZYkLpPQz5SEYYnQvyJbjdYUi",
  "key4": "4ykZ2KjUmPfMyEJSKR5VYdA6ZzPeFWc8GNao57DYWNmTxP2N3hgK3Upc2Wk3PAPbAF67ZdghW4VZ6k5Kfcn25GhD",
  "key5": "2jiGsfpQagLm7RQ7APe2rmS3T463MJpKHV3B4nwg6NRLxPMfyyNMpAKLSj1dSnKgaZnWdgrypvzzq7ikVV6GT2Ft",
  "key6": "Y1TmDiay3rLAzGgnu5DXHprwmjfVWJwCKik76CREnHynZz7aBYV1iCRQkKzATVhyDgpnEzTEahtDYyK5jw37EUJ",
  "key7": "mzvLp6WuSa8wK29D2YQrPMFL9hCwLHEWgXsypjGbCngtwBj3hWCD9DRhuhac1X8EYUwbKL8GBvvHY85AfJ1oGHu",
  "key8": "38VkvHEWufTwzv3VQ7SexgithnD5CLAMkw2NB5E7DVuhhA5ssza9SB82Frh2ZDPVVx68gLEoy2QMop9QSztwHmyt",
  "key9": "22ckTXwB336Z6GTmB6czSUYfuBwjmodmcXS2muTMmCMcCP5o3doddRya8UMDjap1rqVJBvu2g8NSDmtfsWzwpuRa",
  "key10": "4uf5jQfzaJLxgoXgbBivTVSyasJcmXV9fwyGvYGYhUcZ1rEuo7brRhdN79UTE6QN4om3ycHDa87JqbsVCsTWPViJ",
  "key11": "2asCzYHqp8yPNCGqkNh1ZYKwFdtTei6eY4tTYRDmJjrwFbUZbskBBSaBgG5p5eumDpHvbmjBRoxb1UPbgoP3Zr63",
  "key12": "3cSK7iZJT91CiD2C1H64iE5XwEZPQZfGjzFFCmrrwWsbttUKhabdrVeLZ5WQdmYvazsp3NLLNvBaJUYiG14hsCZG",
  "key13": "5ZC2CSHSRcdHf2QT8zhj5hjvDFCQGc7zWCptxt3ssYaTtEqF6shDjEcjLgAwkMuU9sSC5NJV4gp1rYet6BMH2Z2Y",
  "key14": "5xocWN5sJxrkVGdaqkrHGbfxQJfk2ch7BmZQqoSW65HeDPLu1zqpDPZrQmM1wPZANmHhzKsRHsQWnJ7Z6cUSquoV",
  "key15": "477vyibaW9LsnuY7EErWmhmUSSv4zbgMoRN5Zq4P6DZGKC3wSy2mSQs8zydhDij5VH84v6dvXzQaaFiS1SZGzoYC",
  "key16": "4HzcRwcXLRLoB5PVrQ8k84gGBaVYpZkvrQRRtip4BSoNqMXEsSr6roagNxEbHbff9iKCSCSJrHLXwUFPxzfDMogU",
  "key17": "2pW339ZhPPg6RGDk8TkvqsrizkDnJnUnZeh5MH3bx3QZifcHxhxH7GQxLbEQHmPBsyLWMJnSyEPpGY4bPEaGBJRA",
  "key18": "2zo3uti7DiHkDaid9b6BWr5FU3NFdtpkfs1qb8pHtWGgZxkEDjibrqMeAjp2u5cJEmix5CiNfDzqVUtQcCTQXL4x",
  "key19": "2CWAtvK28v58hC1HwM5FcovyBcQ2tDUt3eE9KAnqVFYEtxMosTaZud277WWjuArZj2qdHa4hCsp7mJ17ow4PzC5q",
  "key20": "62mT2BpKQYusG66c2tNAd5Ud3gXBREWNg5FKmN9b6JvsBgek8hbLY3698o71SGGnfCGBAQf5DqFH2rF6GRJ3rDRu",
  "key21": "2iKXpBDJPRSk6b1z8R4drpBZ6wJ6z4i51st2boc6CxsWWy8htB5ezRNCBmvEbkHkFP81WNCr82wEpNQbpiELBG8T",
  "key22": "5h9vZwPQjX6gMFqVENk2ECmDc1CkB4nmcEbQ6Z1aJG17THm5pcmptzCXiqwf14q2M5isB4QW64HUccjmLiUMT3Ex",
  "key23": "22MQ9nQJrAdtUhdiDjc4nE8bzgei8WLXbevo9FYA8b1Ki5qPAASxrbwFyPP9UhQfvKrkkyizMst3J1PiP992PFU3",
  "key24": "4uh6KGAY8yzVn7uQGDsBjvPWAwDRSX3P98gC8QK59obgVtPzxxYuwnyiK9XH7ok9vcHxDhQoyzbvitAj8M3xBCAZ",
  "key25": "Rzjc1izKfR514H52mPfwvxvRLAuEk8cpV2HHMXpcYNFGR3xG6MriEJbjLwHwWTUwraXd939GSDzjB5riHmFfoZ2",
  "key26": "64pahgLXNMZqDwMnrRnD76p6yubQTUs1nVtLjmQPz863bZ6KF63LwMWN1RTk8Qa2HGUv4oLduH1Nunf19LohqViR",
  "key27": "3wR6HuUBJgS1Yx5QV1uuSKRRbvdBQTxnByFPqz3XTX3cVBbTR265vXR7siYQ6UnpqyRdh4YcYU3gxpZ9BEqzZEdF",
  "key28": "3xbw9GRbMFks6EpYasEVajuTmyeieVd77ep2758tEAWRPXH8irSBNVjaBD4q7kwuiXUJsbioKwVJuwvBnTiMy3Zd",
  "key29": "3GhvVW5tpbPaQwkNmvTKYCpJo7P3cZ2osQ7hzUediKKVo1UQJ28scVoWyJ1uPnBuapPyanUCEoqHZvxgp8GkPBhe",
  "key30": "2HCPRoKy4xB8v1zW1TQvEbypdzDxvTSFktKJuKUYc6JBFi1xHHRRbXvVVf68yb1SeXLwHiVLojsyahn2DQuez8ep",
  "key31": "4wFGE37vMB147XTT6cpQ71RScgKZ6gSQoPeE3q3XrnsAqDKbnJRYto3urzpso1MZ8KWEjk3jEQAihDDfnLQpUV8f",
  "key32": "5wn2MfksxdwmKRZgmh4UYPvyL9pVYcQpA4yJtMKkM3L6Qw1XSQHjrvyGYHxcPGbSbYTgLfdKKzzuaaEyXViZyh5m",
  "key33": "4dCbN2CsPwFKyTNGvRvRYZfQyevrmFca52wjCNP3bD1WPb9UUVYcNMeVPT8VmX8gH4z4TiCMw9FnCerNrE6FXNaD",
  "key34": "2pzdLWHK7LERtMw9NMHurvgp7Y6cKYYcvV8poa5manxnU8vKohxz62DxyDWBHdi8vGq9WrnSTfNPCfnNSG2GWN2S",
  "key35": "4fqbjSL9DoN3NBUP8WYWsQabvdDYSuRL9CMR3KHVeqvzFeChL8Uq2DPYi22hiptzc6qGrfEXYkRgsWuyqUNqTUgQ",
  "key36": "3SVTnhUfsd1rySNsZ96opgFZkaixNumAJUx2WCbftWekgyp8KKwNiQ5vGPvNCj45GgEiAZRrP5QYKQJzbahGHFnL",
  "key37": "5aihEesS5qgW9Q35GdRcMh8UFHRSDuTbAGPRTjqvvmb89zzuHXsaqsDXpG76VDxiHEwaNSS8jVZwyZMAtyUkU7KQ",
  "key38": "2CpGgPmWsPJf3BYAkV4rv9AjxQHNTzj6jakuv7Yc3R3jsZBgWHwmakHkfUamnwUGvSqd2TJWiFE13hvJWDe7HzLu",
  "key39": "3MnssRhwUaEqWw93bQziaytqdrLhjksZDsCVWPM7wEWxQQRuyTnRM1HigMiypXVEx5af8QpMSmtbuAeGx4UTKR8y",
  "key40": "125Uko722QbnM1H62iGMd4vNL6duqBUpJUdqRQvQfMebVvGZWXtyjAb4wv6T8uJuqjFGCRosuR7RtQKSW26VGVEu",
  "key41": "33kqZW13k8CQ2qNPv51CzWauVFUB7ozXCMg8MpquWP2y9RLKUTcJQPygc5o1iUTB4DywN3GYMaWBEaSHJRDGANUJ",
  "key42": "54siEbdW9a4fxWo2xGzuueQTzbyXGZY9BucBWokS9HnxNn2cG4tagKTThs3V23aSLPxfFdqEFj4Z23HQ3KZftdPu",
  "key43": "2bfWV1juyUjmdQtqt8uZUgBVA12nYCfpxnHjnhUDscVsr9FmoxLcLth4QZWCYhZ1G2XDpmSB8EFTpF9DxBa4Vjpj"
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

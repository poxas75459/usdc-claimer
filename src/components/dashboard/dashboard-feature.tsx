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
    "H98pLzUSSpHQrrYsKtY4bgWv1Abx8bzwn3xjX3epiwFU7PVwYw9As5RM8z1N5wb82xCgZ3KNtrEVYGMBxyJM22T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HJoYFaKRfhZEbusC7yfdgkB1KBfSC4PA8zqyrtMBmuR5BESspp4Hdeou626HczqseUnCf5SeQyr14PE7HsxDNCT",
  "key1": "2s8qnFfeGxRpMzc7veAHvsjRBin3JKpLuzVJaVYwWkTfTZ91kAp8DHTyTpeXE5wbPiNuKXYsVDNcFfFjdzDHyBra",
  "key2": "q9QfqHazjULqzcLZzVdFEtXdoD9qgHGG9WGQYvj7jbT57eSGgbKCZgL7UC3VL8XjjQcaHo5UPy7CpkUhMHxpWET",
  "key3": "3fghaxof3eZPPMSjaX9eheKKSoyUkKXXzEZT3CDG4P6mUEMvyXVzNCrhUfbnK5u6EsxU84i9b6GpkJFA1g1hurSL",
  "key4": "3LMxGLsn196R65npzUoijALsTDUWt7GhStdZcebL4KsEN1MNPNSkzWcQ7XuurhaGB2nJ8j5fkDZFX3MJ3do4QLa3",
  "key5": "2AMr2HQHDEB2eMfWifHSoyRvFj8vzRU1ZUKAXHapQKsHjZMUpUg3sMXpkJ6BdJpL3bAYTdwnnCuEDN2Dz24i24PR",
  "key6": "3cbpam1mz21c5iL6tnPDcCvZdH8fK8VgQuE8ezRp1y3xYo2LuFkyUeqBki9y8pfZ7ZnkjqKzkgFoyBdRX34Eyoyc",
  "key7": "5k9qnkGLTmy2HtFe72giMxL9GSRXUBkL4tU6H6JjK3Yb8UAs4vahTpdLmHPxxhcXrzMGrabYfq16vULy837SJ6bG",
  "key8": "3bNpUu3rr1MNJpVAKj5Emc3c3Wz5PGHywMF9VWr7qJLYVjX6W4UFAYV6W8mFsSAJKomG19LHMYJYjmgmKJLFo1cy",
  "key9": "5zKJKWAB8MeHUPPaiHzSZRqRGddYKLYMBpWFs8BU1cVuG9P2dBM9tNLLHcAnBA7mYQxKJe78pEMZJyGEbgFhZuBr",
  "key10": "3kWLzjTBpRbSrmg5E3We47TMwSBWpAQ1bSKSpXGdyCX4qEAG1EjH1hRx138LPouA8ojSdo7A6Va7Ja3Gx79kZ7LU",
  "key11": "4cqAiikhpU7aK9j7GuGk9EbJmFKMPG1jgMZkFsNTiz15TgqdaEwGo3ymkcdPvdP7KMSv6Z5LHpZQMBH4XWt1SiKj",
  "key12": "5gnFtwC5WBd7KxJbiGjWYpi9SoJD3wxtChGDDgtcJUjMu6MEy3DCit9P71jEx9qJaS7xNYwMhYMACov3emVgCiNM",
  "key13": "4cupLL7bUJnH8w6CbWxeuvp3azMxs9CFXCaUHTeehm5q7yY4DPMEkcZm5wM3Q8mYL2qr1r3wxBiTvhTkUa1VKTdC",
  "key14": "z1TsLkjtrzvwH8txggyMpwHeWbacAznPwAVthujyxMKgogUEaC1A9s6WxuJKiUgr4kQGWhBjLyCq8vc8jfuihbf",
  "key15": "4wdVPZhY5893Fv92GEF56VwDGAHikQaH1TXfjLzCk5TPMHzsZnQQqZWNZiQ2oG9oyPYoAhBBHwm3ERNjScJJAu2Z",
  "key16": "4daNX3Ufv84o4YURovGS5LgF9DSRE2yunrnBzgfWz7WiDMPq96Dzp6SmyzH7RC1GNSmNaJwhZSS9iNQCYVQ6V7qb",
  "key17": "2MqXzUiWnb8feYVdh69mbPXSc7VEPnN6nuNUq24uRwNjeyeQGBnRDtWtn7KwKu6PiNQByKLauhPHwFWpSwQA5akJ",
  "key18": "3G5kdVTfm9z8sRsQ8SRBuddboVWnWiQg8ube89HFEh2UtG5ajkaPKQbeHapzbA6cWBz6DVt8b4133YLbePCAZTtH",
  "key19": "rX2W5ofxa2xKAmiTR8uvy69gMpmTCetnBbxtQ5kMrPhNt6w5osHQa93Y5NK8rsE7L9QzUr2922qihwa3wb5GkFo",
  "key20": "ZVHPuR2w5LTPKXGFmfh9m3Q2VWneUrrPHEyCdXinsobVxzxthn7txALRRuNtbooPhq2VYsdJqpLjg8ziyGj58XN",
  "key21": "4UGxfKtjKEV2WZVDQLTzACe3t46wRmFPrRgvUgwQoHmKeMNgtGH9BCEnwnb2Udzp2zEJUctDs6Vy7Deoe4CDWf7W",
  "key22": "4de9u4jTLLzTohGxrpZ8G15nJ7TV7Xs5V2C2hi4iysv48THKbBYJjfnX6ViKWfGTtZngsfZASEVPRRZDr474oRd9",
  "key23": "4c3HmB2FZBjLDWayrubeeyJgy7AwKqehmu6DG1JnoH5kLuA7Gyc4MmSj5r6FgHpWpwiLfkAAjmMJq8tsjJLXbSYJ",
  "key24": "5QbcKtT82tQHGCKyCwjPYkkDciBE6kAq3D429RWEQdkkwaU62HoRhnCmDLjQzdPgDBTBqEQHX8abYucQg8mZQ813",
  "key25": "4uxTeC6pD8ihTz3SQdx422ivU1RXFmW8gU47wFtxuNPN3wjpY11gVvDy5PHf6uN6behhe3dBjPXh7dBQafCaxuKB",
  "key26": "2yipYX84PiW1GFr8k9ni1pnA9SccpEdMVdqm9o4EaVqJGzC8UG787ofmM4Ka47WuLZ7TysDcaJAw7SzWz5BD4xiC",
  "key27": "Tey7tKtBiskcNDzjoi81cw1GhVYyQzk8b5GYezZCeV4mjYZWaXr1SZzGeUxFcnDWPww5tPCGEjKfKQfXM3bnPPb",
  "key28": "5is2ArdtZia83Dkx93Dy5dFD39ihju1P88ndi2qUzfePxV5QznBL9mW4ko3bQr4cSg7q4LobKSKH5rEyth8yEad6",
  "key29": "2eGqumRSHxGFb7BtMnpceSijmSuQNiVQkH3pQnQky2CtuP8vkEYUKP4iGtfGrs5tJeeqKq84BReVRNHsETyucsdq",
  "key30": "3J2BtoJuUfpFhTMKtzPDgJv83aKkfG4WnqYRLH1jhyjQntDCi8y4CT19MaNfEozHyv9V9xcEZa4CfA9dw3eofrpt",
  "key31": "5Z46jhAW7hPR73F56a65ZfiLxvdtYnVrxnMZQv2j6BX9Ku1NerWJNCMZRje8EroCrJBNHbPVKi4s6UCoFpFgE5CH",
  "key32": "3d6xFw8ssmv25oCBmVCPiRsyzn8fhFfyUjmSwpHSShPaFeen4utYF5Qn7QuxxYSd8ZiP5gs9S9VTJrWxBXGW4pxr",
  "key33": "4MquQxHGKjQMxf512GvEUARAcqsjqeypsfyWFmVwcNAZcSQG8moPvtmqcqTZcKN1TdFxtDUDeivw48iTBAP63Gh3",
  "key34": "4xAX8AzJ4tBURUSyCG4b2F16tMnyZgNQMGxWoedvq9Kyz86A68KwhS7AkdSxdxvjKksUPacyKkXUzUzxWyrDhQab",
  "key35": "3EyhyrqdekSWXhr5NF7bCTBBzFK5vZeyVEtTEDYjbi4Kpm2nEVpF7b2qt4g4r16x7x5HTWQsw7jyY6v5Jhy2ay6R",
  "key36": "2HERauhcQqNiTYmX7SuNJ16oL7PYcFLiAqciNUbfEnx3C59rkscKJ4xpHu9AaEwDyJM7RSUZH1vSCZttPY5fKGD6"
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

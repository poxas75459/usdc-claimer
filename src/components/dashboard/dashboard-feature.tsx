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
    "5Lxtbg5ctmXDZQafewLH8SSm2pMgEroou9JrnxrENMw2YKjyEqoKiXxTE55yq3YjdHieXT3gWps1L34tPBe2ZH7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24ND7PqSumZXFDHaopW9zeBraiUzq1HCgAfPszjrutxQZw6Ma5oedbXSmMRFf7jJszJcJfVTZ3vJGzcBZHMrNNiG",
  "key1": "5aSvVnVX3UfFHsmu48hD7oVRi9KUmML3uXdt9tzvqU19i1J3W8Y3rvVZJjnhG21MWg4SKgBxBvrWNpVXm8WbdQ8y",
  "key2": "3MXJMQFfL428zDUkLMbziUC2fWKfqzHFBRSXRdujwj99e5WnYtFBYD1d99qUcn3sRptXNJTcf8PXKaDzsqyHvd8y",
  "key3": "2fVVyBAeqsYP6aFh3DvUcFEaSQgc4QPuXArAauAYP3AF5b8NRv7ymZuLMerixM5oHmptJ1NirXw5FiwuyWvCadud",
  "key4": "2UBmchcLKVH4SxvtZUi8pjmNw37u3j7gtuHPRr5kyXV9Y8f1susMeg29Nnxdnkg9a2EARitWwEPRPpHdXPvbtKq5",
  "key5": "2wPLyWKTERWuuA53zCxhBw3jSmaEruRkWwdoUUj4F6ek6bV7B1JBcn2oJv83GhWZ2EUVYyM7GPrc6y3Qw916Pce9",
  "key6": "3coLGQRvpMdWqJg6WGDr8h6LR4TdyY4PxZcR1VpVPZ6L5WtQseEXME7NiEMTq6xKWuZ32rLdsmoR9HGKfqoyGYVG",
  "key7": "43nCJrhQco5qp6LRtbCZZBKne5mvCHSR8QhQWWjSeKRCKG7gguppBHtQRHGhYBJRsE8uTAqs9jj5kwcDod9LGoBx",
  "key8": "2JBAbrqp6dmNpA48urJFj2xyGLTie1TwZy3rzPPR7uHUHnupupnwDAdoG5bNm2CAuDnAHJhMKUqet76qH5LSkt9A",
  "key9": "N4wRygiSwQ9SMdKhaiF2EA6ypVUEdJvCt9acpycZQCq2GuztEGoX3bbtfCxLmmQZLQkM6gFo4JVm7WvdpDPm6gj",
  "key10": "5xp7t8Sz1gaQDb24EQMtNuWoR2j13GgFTHBdiAZcznwZK6doSM4mCwJ9Kzyhc13LFqRQm3PAx88sS4omjSA7fuST",
  "key11": "5SY4Wzv3X7vq4FyPMjzvfNdEoG87yASnMhWH6h8NG95AGzZDd23ckxRJro1DrFjzaW8kW5fekfBsof2LcT7F9Fns",
  "key12": "5AsCvXHxG7RJE62T6zwFF3GNDC4msAvhm2hHmrn2QxiZL2PYyJkFVM5wV8WggbnTgFS3ffCHu7dj9EcGxVbyRRBD",
  "key13": "5TAAyZQGTsf7QDw9LCr7ww7SguXW9WWmW7s2aSbodvRGtXZ3XqTJ2S6F4NKkkkCoT9mmJ272uTQ9ucHVQvmqADwX",
  "key14": "63hU8fBi1g4kgKuHhjiSYAHRhMqE6E34rVHTtLK8ciYBEBALJ8492hhQUKa8XfoUtctXXfkJotFYSJrz5srF6vhK",
  "key15": "vUpYceMoGXHmabs9dZFHe7suNcd2LKCwkHmUEo5QVATX5o48UN2cyADypLwCB6NGfLrLoCN5RyVQUKJHX9efcbw",
  "key16": "4r5zzrWtKAKEGfjqwTRDRi6FLKqgWYGBHw95NHMfj7HhzkoctQisoBdo3GevUJuWkzneh2GnAhZZ2CmF4NcqxLD2",
  "key17": "56facmebzCYT1PgHF2NZU87jLmvT2ZGc3HnA7SmAEkkVZyDEHrbTjLWCubmU3Pr4hGcSZxCp1uyhKPNTGMSfiGTh",
  "key18": "3YhvAXSLDkKPhXjB1UvZPksGEb43UeGeD6ZvQtyxxZmLm48mx5y6su3pqYryY8GyR8NwheEYnqJ4hea6vyKU7En1",
  "key19": "6yoRrpvpcerPFk46DmbwYZ6Z7N8yu179bJd2o8dvyDNmJBsj1vsSZVvjfXWkNLD2fTmJEvzPuE3L6rWb18EGZ4k",
  "key20": "4p12cvfSA7GkhpmHrQvkHYYVVVtpkQojZ2DNkTVuuQ3rcwpdzPTEdAxkPLFRv8K4CLMWogF6EQj7E7HAV2uMDx4K",
  "key21": "2qRUMVQ6FXHZbBVPNv5n6s4kLC28x4MDWbYtKXPXRzGbbdrHrCxiK14hacNgW7q7x97U6XFWKgnuaSNeyfHSend6",
  "key22": "34CR8h7H4Tj3rHQqFhewamZEaucN7AZf3ZefCyJRFK6fYxNT7CxZHLLvCt7v6gkvhvK7p41rVMHyTfbHfXb7jscM",
  "key23": "3h9fuvdwhUYzFEj25MiFR576XUdwCAzFn3j27d6564yFsejjspqAEtNk6x8VMG4FAW9jXE2StGEo49aLYnhb8Lu1",
  "key24": "38zJ6Ut5UH4AybCD7JLkDGQgQikYYn4ZJJAyoEjzz2Bxwy1CfuAgGAUpaJLkJceeaF9ojkQj9NhdmcpywteCqQWt",
  "key25": "3rbrqmiVLLuzuriCZKPmBRDxAQFKG3QZpwzd3iA7FRHybWKvYKeBQqdZrUxHTzrLpV5iuznEigyVdUMXcDzyBJG8",
  "key26": "4U23jzhmmxQ1nwb4qriCgy6YVQiWDejnewQ5kTkbBs73mJLeoKUPUhzJYfdDTiomfcsVgwNKoVPTMvuXHCj9X8eE",
  "key27": "5ddkoEDwnwPNyg6sfDfmumt9gY9JFdwwmEWbES7UsyEN4tppoChnUPVDzW1MZFCxfsPry773r2qTPmQKuTcVejVw",
  "key28": "3ANmPEB8FHejsb5iLkiYF9PRh81GGrvudTKjNqfwj65XGHHcuc1rtY4TTMm2MzaeezkuLL3uQQKb9hvpm63RrmFT",
  "key29": "2YAEyhBih4VU6jbmTH4CrG1tRJEuZVxrB2xwcMqAaPbVHQBnFCudJynToYLRUu6X4GRNA9kLNzehpWrcFgeo9sSg",
  "key30": "d9ZfYUnG7hgBtPr5a5m3bUyuR7rLRLkDiFwpWWwZFKFgeUaxaiMsNDBZmGj6pjoUh6zHe5DJzyQ5yodwWNGpFci",
  "key31": "63kS9JGzLsQUbND7iEqy9i7bRmrsSFKeQEtLxQsfosS5WotwFZ63AfqPBUdXFNwsFbYSeA66zFXaHpEYoMmQxNfJ",
  "key32": "3kHvA86RDjG5AgVMVsyY1tr9A3CvmTNFHQPJUVeF3BbspM2hM3bGYRTrxuzfhf3Yn7EmWZ3m6SvSeFE6F5DQNjg",
  "key33": "27429zfxBkkZfSxNo8Mzp6V6cStZRKLyxuTWBgifFT31MgouRapToXJLNTmmkAHNaRZKPBjedte4iFREkSYZV11x",
  "key34": "VUD3zZadaiXvCFKfquSs2uiyAWKZ4q9Q2ksbn4MWfN2pgPNQagBsJNfep9Bvidk3F9u2vFhmRnWyHjSFr8EReRc",
  "key35": "5Ci9HvwYNSxqZAKvkWqWX6Pbwg4yEr59HenkSBGXoPiVw9St1WJNTZXLnz1iTrQmLdh6untJnsTLpTZXwj6vgNRt",
  "key36": "Be55tXEDeqEpj5a9KFG864uRnYjMa5kxn3Wkzj9L1jh4CHFerErHNV85HvDB9iV5abVcTUcx6edPcvdC1QkL4i6",
  "key37": "2P7Utx2ct96kJyVZfdG4PLKDkkYe7KggujsZbG3H2MfG4uTD8K1xS8gF451tnsXC6A1vYBn8J6pos3PrufypCHvA",
  "key38": "3XvFSst6GuYctsjhUpzQAsbSEZYHP87sUtE4oMZkLZnDXqhLhVd6gWeCAmSjHywrEpk82irQw8iQ5Vt9Usd7q1Ye",
  "key39": "2K6fWU9CjdHGtCFYCUy8M8hfjSCe7RPLCDCk3aQR3k5KCo7VADj18ogyq18yyzCyaRGfCSvxqUBma6VQxCVW1ELN",
  "key40": "49ZTtumyFANEDs4wzZTWsSkHxs5BLmizRHXFQwRX2au2J4cFCaqgPNWpjTf6ucCcET2tJzBhVpCitDvm9kyX6HAm",
  "key41": "3PqVqJdfBjJYdcwQhPAG9PXGYbyHZmFBy4yUdQkTXEYZsL1HsrANwNKpXLYwAFdfSq862NPe2Qz5RMGrCmb4c4c9",
  "key42": "36M9D14pQoMq77kucgiMtqkKesaq3FJT1cBapFntaW84QX73Ey9AjasgsGFTwK4o4vqaJhJqyc2g3XYGiZUnk2cK",
  "key43": "5UwbsoVPHtjvLTxmvnqhNsf1jsBJZ21ksCa1AdbQ21KcGV7wCheGeStGEK1rNPDaoJyet9NWwsY3T2qjAydo1kVQ",
  "key44": "5CHiyYEnbPZrbSLChhFaM6bHrTNUiebbDfdWNSVx1VZ639JRxiALgbE4EkNchJXpjPW65M3G9RNQAxNSm4z1rFLk",
  "key45": "JJ8xJaQ15L6DkJSap8khFDrMShqrE91nnbrhmeTyf2rvpoAgpxqRJ2Hr6sWimwmFaKx2cYVR6EzBadZ13mj1k7b"
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

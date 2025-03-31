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
    "5pshESbVkoebW2bQtKLhyap3Wk3fF1qd2XzjjMAe9whbJkjJ4kVLRfsoGiWRT8D85zzt44hnwae7bnLpVYLkfB9K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Dxuu9kBhy7akEwgyeE2bvhCMjK6YsmVhBATVgswFPfNDbENpveoksT2NR2DK93boP5SfT4LaFuNsmHhrn6pcKLo",
  "key1": "3cac9Cotx19GM1P7EdnpswDk2gepJDsR1aBfpKgWUGTUmnkNr71GiWKffJt2x6DBBzJqfYizfQuJkZZzPDK84b4P",
  "key2": "fv6PE8KgbeagFRtzUXB5fciiyYvj1ohXUnfKcG6RA9wxvV6Zu1HchTYdrVhX7xuphbqYBH33S4qXGfdB4QQaKgY",
  "key3": "2nJHe17PA3tnLfLHgkRAmJCD4XegwYQjuUniJNwwaE1saYPtVLsTVDvD7BLWG1NjNNQ7fuyQXYVDLqGXMxm42knV",
  "key4": "aKGtd1ezMpAHStTGLFW5Du1eMHZU6MU9RNWWHcFBvyyE83PnvpJByqLV89nUCXtasW8nbpcUcB4qVBeiTPSmy3y",
  "key5": "4tvvC9yfLWi6eH7FJKSoYpkR4GD6MDYF2j7677zTVuXzih9cxSUMLizmB8X3nkuL3fcTQ3anJgEKS6U41iqMrLJ3",
  "key6": "5SoNPYPoqPg6b6fKMJm8pufRZEbdTswNo5R8gxmF8u66iCRxUBGn9Eawr7c2xuLUuJ6rYG6QQJCakYRynRGjtNHc",
  "key7": "4kB8XbLpd5SF3muSiPqqpKwRB7aqNnYT9eXisXmsUD57TQNLcyjM2YVWdobx2brEahConusAQ8AoaR2iPSt2eP1t",
  "key8": "5iFpXMVGBuYy6MZj2HqWzc5Ub5gk2zKtMLB4fRqRikcrUXJBAJYJvaGz8s57n1d2kWh5rT23rcojZU3KfDGmory2",
  "key9": "4bbGxCQMgWdPcyxw2ME5XQ1m9pyjbskpcqmiMfCJXmjBHaKJizWNGQjx32hkePDNLXxaq1eHpFPNB14WumEBUM36",
  "key10": "5KinHpPTHSGTzDDpC5JEDUhtrAisoPVEwqvAKk2UnKe8iGDbV9ktdnPSGActv9jtYQRFyQRNKAK8Kc7kDpg1upeb",
  "key11": "2DposowRRqJKCJSUNnfjDWn41GnjT1Tu6KJsQHd2dkqiDN5VFEggkjpk56XHubspAiXXjo1Lzm9qMtResukXkL1U",
  "key12": "5584arJbv499cXu1nhEv8jYtixvq11JLDzzFSjtsNGox2Sajq4cs2Kh79WJZz745s3TSty3YnTevZUTUFRXSc8QY",
  "key13": "EDhdnhnL9g9PRMahnQXRCFf3JrYVbZmAhRkHCwZgN7X8of4NtxJ79qZvgBuK7BzWciefxaJiJ5cPkfGhkfCFQsZ",
  "key14": "2i8NtVRsUAMwD3AZfbzhMRhANdjXUx2AGR6eqQtLTSmUxRJQAc8BntJErtRzgUj1UjAhSrhP9tPFWRbHUXpP4Ygg",
  "key15": "3xms4FpEhTD7BcYNwkyUhFiDWZo6VcaBE4UYZgPTJbAUNdhVxBmdGa6kUBQQmKKkSiiint1iKJjNekfosW8Y4xQN",
  "key16": "gTYQfHWXme2wPg7aFVp5Ni4JjTefQMQtSiibrKaPzFWwXxACh72k17e2J64c8vLe7YZVDnRZhtsuMvkx9KZYnrW",
  "key17": "4MnSBTrodZjZJwLUSntE3xyXLxpmn2sXqiknMaZQ6fVo2bFgsnCBY8xSZz9rCB61VNvWL4Ym4D6ZyGF1ohW9AS9R",
  "key18": "3TmwPuDLE8XgSZpUugwQb64aHp4VjkyXQqSDorzTYwn4P1GA6u16QMdikN4uH6N8sMgLhZqkEkVDmaHj6vaHAec1",
  "key19": "5LYgi3kGAsvoaTGjBMoLcZNLjUKvkEbvxtRtNYVYV1cjbapGrYxH54KeQrVqGvPrCyFzWdD7BeR4kW7SdUAKWebT",
  "key20": "3B4UNSwgc9tWpDqVQX2BoVbddPZDN5wL3Bnnr3fEYiNwCq5YCSnQ5zqPmUEvxm6EGGWubMuwtRRbLykLAxd1pjt3",
  "key21": "5PSt4ctz1XmJLxRkSSR7heva7yw3iehzhzi4L6JsfBiuno6M1YSj4oiEscUKcSz1STwz2nMpr392i2TkmbDr35dY",
  "key22": "Wm5TiSkv6psM8jLPtQFghwsJfPGVBXEdCbWCrKiq9jo82jfr6c4doFg8oqx4X6knws7sznwdyyMGhEK7SATGffo",
  "key23": "3EDPqRiyxYYTxVBfxu1C6qES1FDb4UiWiR3AiAHN4DWTXsTTQUF7VzAz3ihw5g2QpFtZwgFpjkcqb7pTMRr86mSc",
  "key24": "TndRxQHqfWmFiKtSbdviiMpcLwvoP5KC2N5N33KK5tvuYYkMQjXEQUCvYLfZQbC2Q4R3aHYhJ6oeTz4xEmAg9fK",
  "key25": "2Dc3R6Spu86KDZG1SjoCT39UbZcgSXM2BkYhLAY4csnC81TRFuAGK3DDogDUHdJtuq2XiLb6GAng8jzJ6Uv9NBRD",
  "key26": "4AT859VqXrUG9mh54x7NCSJrijTcA7wNacKHcw7zSzfxtNDSzaUwaoM1g52f1hyAmP1jATkYj93MW4e4PMw9UZec",
  "key27": "62MT3vV4aX1Zi96hGwkM9hmyaxb7CQk6VMNHEpxzafSZRKVSnAKTU1F6AQ5L1CzDEm9i3B15e4b1TfBGVoJUFsEq",
  "key28": "2QF75gwrEKbg4RZS5X6gjpXrF3PBCQDxZBAqsBpFaHj2E3A9nucSW4kDU2BfYgSSNQGQZsJxgpfMmxY5CqJWx2JU",
  "key29": "2dDmE7onKGfBTDguKrp9exG9Q4baNqkpDiAypidvqhqiKCQvVmZzB9i7YNETK1fBtti69hr31XfHJnczxqJqXESu",
  "key30": "6qVnk6SFSMWRP56CHE3QPVdg64ymzES2csEeqRyGHLBQkPJp4AekGWJddHrywoeUxq1AozzyTXZqTcQskXm1KTj",
  "key31": "67nRqTytCiSx8QgeMTRPckVbvkPP5GyWQLiTKE1ooKmjevzAD1zN8FD9o7Lcqt9i9RwmC4ryCRrDzDvW3mMFo5P1",
  "key32": "2A7i4DTbDv9HwBG6BWPGMbCgopRJxyNMs3WUeUL9rfXinM5hgQw3nDr8oEM98FxRxhEG7khEXu5ughx13q6atMam",
  "key33": "5CRNRRZoNSLnVtZ34DSqXVtd5DYDBdupYZXSnLb9QFyYUWrwVnSsWeaP9XHXF61iTcXYTs5vBHJwqasr2WucxXAo",
  "key34": "3hCaXQQbuYEawkfHRU75CLzZ6QWPoWrbMiADXSSPuSo8LE3Ex8urPczaDEHVBXPySkFVxiWoeD7kQLkR4iAzWWz8",
  "key35": "2AG8PtVuQvG1KogDqpv7zkbBhJHwkoQXEAQA3VJKJ5wAMNf6JJeKuKGP26pqYzXDockeZ78gqvgpc7Mxmi3HsUPm",
  "key36": "46jY39p6TNLauFxzTJLkbzo1b1dnMvLK6PPHQ9DaLMNxP26DUzFFHwm8D4x6qfpB1LhrPVJJ4NLQPRnFoyFnWUhk",
  "key37": "51JcR6EK16f4QLbAAa4MX5uip6Y7s7Z2wGoGs4VCSnqcbeTAfCzXhNpVESMzyEF6kpGTWYLZAKobSMiMxJXeo4Wv",
  "key38": "4jw8i3qbgZ6HJARtuoDvLc1RwCwy2N5fvEAt7ECvcUJXPTdYVRvaHkjRXjwDpboxTTBNFKdNEn6ZgYVcMzd9VtM",
  "key39": "5t1tLRffNpZa99XqU5UctbFWbbJFSVizRjP5eoVQrM971Ng93FSj8sFJUFkjJbea26kddHPp6VL3C95jFxTiYSd3",
  "key40": "2KML6qwZMgKgAtaJspq1vR5QmgX6HLRoNmABE5JXWzLAePaCo3YwMYQUSeVawWk7sSDCmz3iCVh6GY6ib8Q1BWGR",
  "key41": "WNC4A22ybAyZMxLf8ioZuSviywhKobNFYPeEtATDT3mwauKD6xZYe2QeNiVBRjwC6wq4ULkX1rT3tjVTYMQtp8J"
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

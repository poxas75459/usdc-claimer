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
    "3CYK3yY5vJmxwkeCJEZzcE4mZwbmeCC94p9HKytJR1XbTyP35HFF4fLSy4XcgM5hg3TMAgvMaemiTDAAsQkq2S72"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a8FUMdXF9EivjJji6XmJeweig3pJgFVZuiacwjFqjHBvZXNs8MtgSyb2MMw5CsGhWsw7CVUDqbJvyCgfh27uyiT",
  "key1": "2t7VaasMGphUK5vjY5RMXLmT3LWRJubMYh3G8qAHXXyGCX7YAzS57pEsETP1XmWc2QuN4AHzcTjxFmn1DKr7g95N",
  "key2": "466Jqy7dNuJPp3JakGW7R7P3iWbf4ovqj5pk8qXbQLSXzNw2dTBusXHhcyjU485uKPhi4YSUomH6wvt1jEifuoQa",
  "key3": "25DixagGqDmtTUPYEV6uRBMwCAAW2UaGAqkZEYksEFDkqLpTf3AvdFSKhcWW878nazJJLhyhLggbC7f1ejvUx645",
  "key4": "5sLNHzcBRCq3yiDCvJtSSsXs38bF2LnKrZERP5Y2PE36Ke2N2vGqeKzMNHuwSVoTDAmf73yJe5aPPHLwN75caqfY",
  "key5": "4TsiZ1qh1dvC8gSzy4P61zPEmC4EaRXXejdWDf5T4P3h2ktNdQyh4W2rMtZnS5iGLYMz1YMcsXBiD1HE8vFpDxpv",
  "key6": "2C3jLs5j3c43qR5AXTJegyfzs21ictCtFsVqib9ejMQsMsKMNDGJHBX712UnDSyP6DrFrvtCGLPC2njwAr8wEJvG",
  "key7": "3T87TwXHTJMjHozrVwv4TDSyG744wxgSgYVmg8zVoixyTPk8wPaJidXL8VAjWhspxtV5Vq8upEkZYqsbnvfgAKkc",
  "key8": "UemcE6ynowqMXqNWJuYtEyTbQKtyq85qintqydsEG32mP7xohMUXYXaM8xAzAhfNwYMa5GqochXNEVw92BgQfRv",
  "key9": "3T3jmRrCuUwLeFiKMBfkWvsAzUr23tkV7pcJRYpnjb1esRXzkNzwi9jfoTgbsCcDZijnUUSezeKegGu5Qpr1GiV7",
  "key10": "3sYJLr4gvhdh7g5P7FkceuJ4w2e2DbDNDbroogvDni5RcpdZ4Q8xCeTtUCNAWc31jwpjiFkgHu1NgXKE2BH1he9b",
  "key11": "5txh6DrC3uTjExkUHs4vR4T3yLtD91Y3EDS4bPihgSfkcVun3HPgGggkpVm2wjcvFCzHvPb4vGU4bQ7FrCrMLDT",
  "key12": "4D5aBwBExVBPFjYaeBmH3p2n8wZAPcAvrDe8hGicSdrS6SwAC3ZjAjNLWwe8HEgXSW5UTeu9TZ7R3gQWXHsAjUiH",
  "key13": "5uRdDHBvBo7xbdkzcrQkSQPngp81a2sA3kaWSc2MqomRYSkGQnyc5eg5JR1x61B151m2VFgsW5CuCYDqsKDynDVB",
  "key14": "51QESqiHG6WVegWbo1hVk4AxXSLikWJRQiB5seU2mC7S6SJHUTJup2M9QPLWbKsT81L2cwAKjyQ6Ft6nX2iPyZ15",
  "key15": "mTFSDVcqaviudym8LXqSnLAvzoCEqsEx3xv1MgLfidLxgdG6Z3MwmECWsPZLLvxQWBwYYxnrGCrh9TdVSEFmPTS",
  "key16": "49fb8v5zf5B2CZzUWqELFzthX8qjMXAqgphg8L23PU6xfg9iDxGWxBqc9Bd1XfmcrXDjTyLRRi18F1mjUtrJ9KFZ",
  "key17": "z7pHB45bxZhc7aR7XikV3z3iC7KDbBLtBcGn6zYkP8j3y8ANRMZWpdD3wBhQsuMvHgjZz3ZuQJc2CuxQXT2P3Xf",
  "key18": "u4kyxmVr7HtsPAVH6RGwn7JqoWGYa3CXqSxWZ4sELv5cuJBRwmauv85yEcT5UpszaNxZBswD2agk8VT3pXr6dyj",
  "key19": "3aUSpUCdof6nNKKqwB7zfSHZXpsFWg9cNAAy2QyZ31CzH4YGSohtaYHannYj9xyR1ry1gEFwQqiuPK9APFEVi5aq",
  "key20": "4gFVK4BkFoSm8wf2qr4Gz4t1JCCvv8ErMAzJcbWkBF5SDCQNVQvjnCGesWKp1Ymt2rU77tUaBh9dHWc6yirUmH5",
  "key21": "G46Be5WtdnVBZS52VRsgcn3iZ7TRckFQM4LJMNuf149tbHDu9W2583vrB2jXZYD4XFzMbf8F9fVFpSwtWn6DTj4",
  "key22": "2Xe51jvnJn7zfGBkjPYqAoMWZ2w1hD5MPzvwwN2ZDDNqeMMcCnJCUHyBawL8Wbu2kjqSpXRd2ncbbCNMshytDQNu",
  "key23": "3dcfGtefpWDxCoobUhmAidS6JPTrRGKFdvWfdtLmpLDCcAM7AWKMxdUEURFaY9P5T5h7pWBmenxxyXzxfmTBXxbu",
  "key24": "4SttwbrDK3u5BedQ2ynsYCpoaSTuxWhEdVFL714KgEYy4obnRNUpHLFCgt9g57tvKY4umLiQ79Sba1fR4LeeoR5K",
  "key25": "5eyG42a2borr2zcS3TQaxQwYZsK5vD4c2aq77smefLe53Bh7QZWGnoNiAcohrMqdaaYpUdVHqzUvXstc4h9B4QKj",
  "key26": "A7pzRuyvapquLeHWhZ6uhqKaiCDm2X5mpABYtvGduAEUZhfd2eHcCP3ivVWj3Zw8YBvNj1Cg2CS7DJyqmHsWPVG",
  "key27": "623ANxPRWcFeVp1HCQkEXwdXgyu75uHeWDwPc3ozrJ33u4BzkihxuyCoU7BSn2hfh2EeZpsFwFPfhPDhChY6BMd1",
  "key28": "29GsdAHNsy2UsrFAndeNSQE6bNzk9mzfH38yhDu6F4pd5EciHBS5LsuV7fW6rHysdZiRnY1j9JxqdcLrzkz6qUDZ",
  "key29": "xtz1ciiumhmzBnGZzcsicLR7C412Npw4cHcZmD6kR7pHtnnxyUVoSXaN1C6WUrHfEWBJma7qciNBb8pehmKWht2",
  "key30": "MASsafuSDMvzs5xeCJTjPjePWVkAHmAdjTQ8s13WreQcKB1eJ29w8upZTc21bQDABYb5BMgjnuiTxfxuLcfWX3A",
  "key31": "2vFF7NetrjevpPCsG2ubaS7YNEZphypmoJKXCyjuVM6sdzPwasPgTPgJVsTH7koAtiJPbJSpcghCaaAhK2V9vq1T",
  "key32": "2atkfA79wJYgQbZZggx3EMWZsspTDF2GejTES68ARveHYtMkeWFDxemTSDrxDfhtVc9ZP6gYWR4eWrqbbUdpyfH9",
  "key33": "39fohqsZJiXYfsvb5pyzQZEj3bBSFZKwUuW6Mn4Z6SYvDVpdq1oPLZj5fYC8T2qNjF7UhSmdhZ44rD4KMiJGZL4p",
  "key34": "5EwjfKbmG8L2bBY8aPZeSjeaAjM8TRCe7Y8asH5r3VGR4wmj5uRF9Wyh5UDoV5mhnogQvxEAKH7XDDSjDcN6SkTd",
  "key35": "4YhxDFi5HUU7cohHEjqZWYawHXVZAHtvcmXsjc2TAYTs5YdqyeyHQ1krNnG6JNypjug3dg2A5sdwsYcdNnfooHDA",
  "key36": "4DDjirTHzetkCqCbW6KkvVFXxXsSK3STrcy3Fa1W51MrXLd3qGFWHDHGXTAxftWZU7etdphZq34pmbRRjfsewjF9",
  "key37": "3D7M4WJRWM6SXMqne2rzH6Bq1NUgLi9LyxpkME3RRvo8idgdcd73BjzbMwjKg2jRYVTsGHLQdCuWe1isgcPgf6i5",
  "key38": "5cxkiwjevTSMrqCgddTYxyaSETvHaSU7qu4kiQ1RG1sCuD9chSfvUAHr1T5aNyEeLsHXswoXhepDphCpCQrkgntN",
  "key39": "5b1qgoiFVyJEci5oLjtX8Gsx9TLL2xQNSYnxv5BSL94YTLzALUnkCSPmia1tYLYFuXrALj4geq3LB6UdkXUuyXJC",
  "key40": "5AMojGXzCcY6Vvu4zs1PMiCH4wfjPdsWmB7Dqm59NhNpqKD8rGsVKArsxdmjsbuY6U9Nq8wufvWLY2oDCj3H525M",
  "key41": "2VsK62mnfFa3q5Mxkzves19TmcLhwipxSsn8PvyXeYMaPMEVtsvngTPSXbH9P2rtZQLyENR4gWSTRQN2X21eBx9A",
  "key42": "neKtk99xqDnvn6va2g6wadtL63Y4MTtCjwETLKPfksXURsVS81rZ9kTHPbbhuoJqmrA1MdDiRApujsbZB5E6SLd"
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

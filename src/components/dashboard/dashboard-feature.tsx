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
    "44nSEpb7yHHvYpxYG23L4kWn41Pv2Z5Ep5w6EBWYv69M39CX4vnS2idN6adzUT5UTWHubJJPWDpWRz7d5s44V6Ps"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G9w58BBMzSnNUN6SdubE18YyWTeUoLa2sjNLicPEPnoBURm9un1vezfmXejT2yKYRDPFyBBo6DWjjoxAT38g2qs",
  "key1": "5MReBkGz3o81ttCyB4U2u8vsZqgUrkCmgJibpS9Dvvhjfrrbrq9J5Von11oBLqEuDEz3ityDzH5kZ96ES6ZKec2j",
  "key2": "5Tu1nZEnyNqzwAy9qSrAWGBZA5rh55PZGPEBCQFoVkQuajQ932inW2XY1M1JBkT1GEar4Xkt3pbj7rLQakQ4N8T8",
  "key3": "zea7ewyasimMeqEAM4phZYVcDgCXGQkZCVd5x7RCcLxsP81Gp7k9m6LQ6hzZMQz9KFFYR1djHJ8UsbkKuEx9XsV",
  "key4": "5TwdUfdS2DqPAR4Uw9Lh2eFe83XmsDqYBkwtzWweazMDqhe54d6CbsawptNKgjcJUZDn29tW5Ao6Z3PsdwkyPmFc",
  "key5": "obiypEPTw3G2BQAPr8EjntkqAVFQgP44WrkGduyuVqLZP9VzhNrwhNSEmnmtwAgR9H89L6DQBdzbjiRKQPFQkqX",
  "key6": "5s8VYTBTiENjkAxFibu2BXVageHSJCah7EwAmRX8xikXBXwiJG9uGY2KiPCvrND95LcXYeZKP3C17qdrxYWEFvNF",
  "key7": "3pigT4EoaVpTNLGpFoMpL1jnQLMaQtbaANmYLggfbF7JdAPrJYxSatV2vBQWDjxAkhU3vgE1FvmjfxQi7uWT5raG",
  "key8": "2kNnNrDGnDCxGsvcRBFZxGd4ECiNPAN1Xcjf9fS742oCaF1strDGHwvVsra4hBSibEEos1SG34e11yV21o6RrR8M",
  "key9": "42wDAc3yeijsapZLHEXTwD8ArydhT4osTTY5mn7yZz6edTaaUas91wHmpAyiy41ewi5NZVWDTU577YE5NsZ4YCz",
  "key10": "2sGKYrLz6tcC48x1zFXkH7kWjh1Bt5tY2a6Ny5LsZaBBpf2X4w7maTFMASZvzfGEzJNFqAvdrD3G3t27kX2RsfdQ",
  "key11": "3RKqqq6D5nyrNspgfD4HUhFc4j6ByuBWk8GnagxSvoU2j96RMoUmriXvDhifzEpcJBdCweFttWYp6XvhiRWhYTX",
  "key12": "5EdizjmZXMR6kqc9FgsqkD96vgWT3AyoriiFYdQYjFDe3u1YBFWRue2sztvCyrJmXWf3um9hgFChX6pmTEcTQvmL",
  "key13": "4dziJZe1yZ7JW45anaTa5YF8Pnj6cE5UFC7Rr2zSsKMYhTHKZVShvq9WJksXVBHq6cW6prPstJNu2cHqcQWkN52n",
  "key14": "5Nx5kpuQSQymH1AFTs5hGNGWDyCaNuYU3u1b4CHBXH42iAoT8b3wD8X4Jx73m4KjXSa4nSbUNVKB6EFjr7kRHqm5",
  "key15": "4BQdZbVi6f8RBzgcsQwHPxa54ehhnHZkv1qCYwhpKtyqKomxGLUPGv3k5hn4kY9gFALgcrThgHsqwwrDKhbjsH2V",
  "key16": "4Xw6w4hgmEYuTxSiinve47XJJidPmj8wqTmAmtHZ5QoFa6HZ2U7xiasXPsdhD7ooE5w6UnmoZoWr11rCmCGYs5Mn",
  "key17": "3N6doKVEA5f5hLijGZsdzQH494MLWz3z9sTz5X5eHQkDMxmrtBvWtkGz7j1MaVqXXTho3JY9ECfecT5p5VEDL7eV",
  "key18": "5ugq9zghxwyiET9exjqWmyooYSvXFxxWB2D4zryN2BeU3iLaVMXWRzjPom3ZcpEoUEUxgZevh1TadBmWGpRguiXi",
  "key19": "2r7wWE2w66oVxq6az61HwRPWPBDoxCivSyfgvzSZHLkxFMLMpchWi718r76ac166MyxMNfmfhiFdC6u2WcxGSZ3C",
  "key20": "mTSxw6bT8e3JP6k4yV2oy6fpX8fVNCVNViwbssS6EtwuYMcMtrUM8AJJeCbnjAEru7ZNLm9eqDk2QkfUwFgDfhC",
  "key21": "EHzk6qrAWGbA9CSEZQJYWM5wtFPHfsLXjUQ4L528ygQ6tD4m8qi4pCXA9t2TQXc7GjNa5iieT81gvfFAoq1dgXp",
  "key22": "4KvP8BZ9Lian3xgUsQndHvBqvKV8WgBDeZsoV3a4Uj3SsUEPzWq253tgStMuNjgUvJUKdVmGug3EJbJ7xDwPDxmR",
  "key23": "MW5nwuEAVgBGYeLLjoJkfu4C1EWRcDQ6zq5duPxNdXMPb6n2w16s25sPi1UVTcALfiwQ9m3ZmRSMcAVq9XocYKM",
  "key24": "2XSmDyzgZzFrugBjPynB9WcioSXmECXYmhYLyGNxXQaw7XkPvV8qWeAQU2D6EL7YHiNux21cDQh5C1gg3A8TiGTm",
  "key25": "BKAkymvo7wtHP9bu1sKeZ5UxHpfD4gmqZqxmen64d5gMKaarKRgKUFNPHbWX7Rs4noiYS6KwMKYXv1ssmUdE25Q",
  "key26": "51vuVsNdQcsnJAM8mqMVDbP94nMrfxUq4KDBtREpXXqjrr9aQ2JWfx8tJJgTXB2bNDoFTaGToVxsgffcaysvd6j9",
  "key27": "5WaL4ZDAMAeuvA2mC8kncmKqUsnbpEs6rvAuUPDLTpz6ZaKLLgJ9cEY289f73kc5rJtnnm41YFL2Cx7VhmnGomdh",
  "key28": "LmnoNTvhpgx23zEe43Cu1sp4LDR1bCW47BwdrjPWG9RF25pLsTA7paMii7DkgbyspxzcVZTjbAn9QQjMnBKfUqS",
  "key29": "izj2yyXw9FYj2kLKmog1wkkQmFuyRf8xsgEtH9Krbk1mq3fyqk4oM6QoQC26NiD2gYKFMDCF7wUHSiWLo1RQ7MU",
  "key30": "3A6aGnNWZL4RW2YBJKiByTKMNnmQYejg4guBCWBNiE7Gu573pCejQpSJFaEx7Z38GD8Q8RUEt6fihJMJvo1CnQAz",
  "key31": "Hma9xmXC4iyck8vn7oERadn2GuMeUN3QhRA9ada8EAUHkDcFH1KdqafpfjRBVu3hMsyh7jFL6P7YgwwnyF8iESE",
  "key32": "3NSwhyTSeZsk3LKpivz2DL35mg3QkRngTimcvTDkvY5D4y3eZtneoGRLSobFpqJXtBMsLoa8mdRNBNdnpKXx7Rk3",
  "key33": "3F3KJJsP1qQmnfd67V6a1r6aLTUmEFasVs5TCKR1JKdsxJRNPCeTmW92UQumut8EzWWNSiwbRxQtst5ExGa32TBM"
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

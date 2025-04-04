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
    "4iANqXH2uxgMCNb5gNj3wP2WWb1zAxGWuo7Wg5sKYebPfXLb4JCQ7R57FXunYTcC3umK94NzipdX1aQSp6jPcS1t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oWEM9rKRJzLxj615RVnpXxjPE9KXTVtQWTD6WkTiRwaMVVB6idDLpQfjvc1adCJRCbbK3Tu1L661eazEswKAqVB",
  "key1": "2djSbCDLeKsFYBKnqqjjE97mEMxwfeB5vHbxq2LxKwVZUZzjbX7fSADioowpyubLTSzyrskedbMwe88vNP8mr3NE",
  "key2": "2rcVWewfUPnpu9N5zMuaxDBbsUFCYRf7ECMvt5ZDtKEABdtekV38mMpkK93EJRcVKcVRgwUvAC1nuoFzT4qHrgKu",
  "key3": "FpqXiutSgUQe1cvozDHi87ed1CndYU9oGpsA6WVfP4tqcHBQ7XACC7eMP1QMYhmW5Lz7qph9BrRCChz2Vp87s4K",
  "key4": "4Fehyp2FHEUwgtt3BMXLiWo4ZvjM68j39DGRNceERa48VDLAHY4GU7FKmE6aMzsW2dLmGnNobR4gzDdZ97vhwohu",
  "key5": "4BFoUesbQ5zzLTMAUM7kc7TZ8k7GkYw7TocKibE9LpnAW4jxKPm6QkXkG6jmPMarTma1pjtv1AJiYi5LTLbZRWjE",
  "key6": "of8aFyfUwt1ddRn9ZLoEe6nG43GHBQzCvQu3Xp2M97duXpFXSzyCkyDR1AnFyNW2HbGGQdv88UzDjSLjtNKmJC6",
  "key7": "4tiNPtutktQjYcKneDFYM1kXbbuQhwyYdxobd1NA8RJqJdWVjD5M6xzcZ3JLHP6SEKo5hHtt68hgSwuJciqpwY5m",
  "key8": "4kT3P56xXWWPNTVAaJ5TRwqFuJskxed8FiNANXV6RbkfJvpwaJfL54zSc7eeYqFXqXHTbEfNhCxJnrM7oD6JChiY",
  "key9": "5Mop8Xe2X49zZAVcgFW411GC7YWVRsCLfenjAgbJiqKHZBNAoU9UQaBTdcJ4CykPXEwFrzCFk5VeuPTKtkiun3o",
  "key10": "61G78rHuFZ2PhbkWibAw9CY4PpKefFpS6RPZELF1fR6QsqiHtZbqaFrbPNXVA5UgSeHeJpTzcrPc2aeMMVGeWXUX",
  "key11": "548spDEnT8f5RsW4FMWZYpebhZjN7bEtygDLtqrZusMajWKsw41kNd5686c3hp6mvrx218g2PQ5kZv6G9DoCQ5EV",
  "key12": "4Nn3b7tGJRuBw184nPEZR5MyoC92TNQimLfpRTa8XVG7NwzLgAhnHt38G5WVk8BVXJzevcyLu83Lr7Zm3CbpyG3y",
  "key13": "42VtoaK2YeYerVFNDgnTjHZuNQNxojK247kdfPQ4UmoqP5Dpkib8x644WiZMrVDCBH81u2oE1LHnnuseAXEkjKre",
  "key14": "Q3yefm8RNTqtgCAQ48jtsxgVw2h6KCdmG3rPiJo8F5G3XWpdA3D5KJA6F2xtLmRkdJPumM4KecZsX8b9bXUZQTm",
  "key15": "4j1HezrStt2qRiPEfhBD7RLiS4VZCqMD1ST7u7mghjThtSpgtCraamZwiB4fNRob2JQkD8HAebFdpWRBzREF2vjF",
  "key16": "2ysiFi5uP6ShPYgYcuAv6Pr1yBvb8D43jaSM762Beh5pL7JXZGN5goRat8tudmXVpxBHrqKtxGcFTK81dxWXsDEP",
  "key17": "58tLFZEjGHMxBSUZL12weyJMUqua4Qdnj1RoZMn7pon9J7Y2xq6WTsCwgWqZFmMnkZkUpv7jhqVL31B69j3UMwDq",
  "key18": "4KTykj5KGrFKAUvuY2s7r53fxd8FMvjcNbyCBEhKvzLFUkynQUdWQRXVz1AF2ZAjt3yE75QqHyXg7MHp1TC3eVHu",
  "key19": "3KuwAy99k4AmESptALJ4WV3Q1wT4oxzg6sMcpC2MvHF57hZrkGUoo3fsLskH9uWkk79cjsfCYPvLo9xwxghhMhWC",
  "key20": "2XVPdELvZRN7rbWqdtJJnKeLNy5fNGVK888kh2wgFB1fmFZTpnvY6pk3j4XDtrooYosy4fePNYLrY332utsjaDHt",
  "key21": "5bd1f4uULBqduDr7RcXtRbYRqouhSfaLTvyNt6g7jSsTuFTKqbWtU8m4gG4zbKdG5rZ7vcFJYaoLsPBuJSft8Xsb",
  "key22": "2TfkaidjJT6oTJ4Qt67ZmQ6fbGZbBxRQQKX9fgMF5gZoa4iP2nHryiSD8nrZYxoHfB4NetQSxz64GstdG9A4P4T5",
  "key23": "3MmsLBvM5khaeQBE8cP1ZHjeEpi3cnSPzkCYrSswi4tpKXk5oEjtn9rM7KfQH51JUgaDsa3UE1GT9GWdf5cv8Ri1",
  "key24": "39nDwyEEpjs3dnzBHQPd1ZWhtF2v2DN3xzjovzmXordbuRsVNgLWrXN1WHUGrpseM9JzY6VQzxZYAteu9avpkX4G",
  "key25": "X1UdyWwmjhfjrZJyyW7DXHGupTqJRxhNrxDqMGhK3gSbgU6ydTCCjed1cCxwayekDq5pT7cWXu2E7CtUU12iBWW",
  "key26": "51thDVy4yJCz2pgyHbCqYx9Nkv9sgXzrZHQ76cQoaTmUrtqMjcHQPJ3okM9hyceVY4HdwkyPsKeUq2TJbydkPBmj",
  "key27": "XByaKUFvf5ew4qTbmWWLetmHmHtJArUrQSNYnGpJ6Eb3PaYuEbdyYk7L3ghqahhptuqvviNKTVm1VuTQah9dm7j",
  "key28": "25nZ4MDYNbC63cnYxkUykz76mCtnGmmv4Ef6yy6K59iW31m6VXqfJTLpeZH6RSMjcwSoV9K6FpXtYkGb3phPLopv",
  "key29": "2Bs16jRX3mZTTHvLiPP9Bxram66ojWFUcvhivtgr8zpZZG3EHzSTV8ts9qds1U9hGW81m3bMAyKPPnFpHRe58oSi",
  "key30": "59k29TnhgHsCKynhnA4umKaVaNYDU38k7KZarjZ1GkwGVAQ27DFzmehhPCy2Lb4Wg6V7jCUpBXxfYZZbDzNyEPLL",
  "key31": "5FHD1hV81xXDuq12CBMrJoS3QxSS9mtf7JArCpDaMvYP2ScKhN68bthRFez7JJfHyMHfshmffYgt9jGH6eeS1p7d",
  "key32": "3enxc65XqQSnyoAKeGFQYtdHsvzGsXgRaAWULUMAYsVNkva4fw1fcxfNNPR2CRaHtZVHrj2GGcQhojhWv2oddBnK",
  "key33": "4Xeu2h1pJiS9GwmH428A2WkwAW2MgJkU8V9rKXkNxaWd9hKy1tKv2fiHPbPKbyaeL7DvZ9PnSrSx23DExbiXicWv",
  "key34": "5QLZL8RGqgtAt3XY5JvUL1Eyy5AKucindgqXgmrtLXrqDyN6p7hkaKfR9PPCNWCnVn9WB3jwRtxBw51NMWKV8nPf",
  "key35": "3zfa3tvmxpQMAeza65gMdCsWFrLCH1ofVjyWu9XuUXWNz41JjBFwZEJsnmQUxNRYzJCGKofEntJHeNKcKEXyRepQ",
  "key36": "5BXrXeH1hXDuwJcS8QhLCwnStUBxsAu4fGuLdHGxQg4NHZ3PibT3FwWaf93ACZqwLU2x6bS15JSDWzwNKJg24fxN",
  "key37": "3Af6xfY1uYS1KXPX2MZMMoc3Gn9znYUJNzXvipBHh6dUJAdsVGvhd3VXj5xiKn5W8CSqXAfy1hN9CDykRX8ni2uB",
  "key38": "4i4aSxTYigbwUzB6tjishWTtSupoqg1NASVHpvpitzuXfVNWcaPNGXrUU5JjcBbZbBih6RvJ5VA77dZqXqcPjKxC",
  "key39": "5jrzJZcd2pqx6GKF7hQP1RV8PZsLxhCq1suKXYWPKC5mDzWe1P9TyAagQuystBb3Ge8dXa7fwxRNyXJPZdXRQrrw",
  "key40": "5USpWFTCRJCfooXD4YQQMEsz4g7W66NbpKTQCQvrP9AwMgowmFf1ar5C4CtvHhhUxTvBMurRkotPVnaedPk6jqKw",
  "key41": "5LBMn2PKwcZzFqG4n7ekgS38WuvC9WUVrt7DWM1HAuz7WmkBwSsMYKQCNixf7dPCU61K8a1gV2ZDf8NjnWUA1KvK"
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

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
    "2mRq8EE8bBWewtBMFi6Bqq6jnMKbcHpVUTLfQcRfLQYeaKzFv4cWKmniHBVzn2n9p5YKE3EubyG6KAr5j8sX5Q3A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1YgFQCP8JKVmM3nFWMPmjjaTxAWuHub3oM835ihpXPoMw377jceQihYUBfa719nxT2cjP8qQN7wxFwmuLNmCWD2",
  "key1": "2vRmSwsMz5yPUkvpGicUww31EvLkyugTn1xtW2DjZDAv6kTWrkxHdKxEyJDhspFXyjTeJ9N4uduM7y23UCd6uvZP",
  "key2": "zEQKikyQZB5V3sZyCPQWnYJo9XpF1D5s3j94nFm7NYYgU4LSCna29YNoXGN7YqZWutipzUSLi32TYQEQ2LwgEKN",
  "key3": "5HjGkNQhmN83CoPUQ5cEPZvri8PNJ8MB9Vdp97GQegoXzbWjXQAqvxt5ZedMYsaWqTs6tC67NhrmJGZKBC13KQnH",
  "key4": "4AFxSRnU6M2RZcWFB4LyGx3dTexyJqotKYsJs9Xf6qgtRfuGaAvd6YeUV4dqFidc69NqMhhEtMDUeKdTtXHG6An5",
  "key5": "2jhFWN4xkpWsdWh9qn7M4aYScG2vHvasioMuDUAPoqE5y5GVRpaQBr1z7qwChQMrhATrsqK9mdr5oRDMyTMTwow8",
  "key6": "mLqirkJfYqGZY72JcCqV24rrWJqcVwKBB5sEMxtRbAqUdPxAb3dwP4sedpsEGYkAuhRZzrd5ACVVw2ftSDGqzFF",
  "key7": "r94daPjtXzsmBbpV14K8SMCcQxTcfHRQMpQpG176pUeccr4G7ktG1JhUg1YGCShCcu87GDWkMZJPpFY37HEGX4P",
  "key8": "5tcjLa1RVkUMd4pt66XvFj8pcAznBxVHD31M4iZ2z1xncCMvR97jz4QTa9hSJx43DRGD8mcaFFXFkGSmvsoodbDg",
  "key9": "5xHHQRdSTxTn85CHFjZYtQ1aTzFrFi83Nfy7XZ3VHNfpmeFdtPQcmcWDqNJQp9mR5TyRtQNUpabapnDFBJV6Kukm",
  "key10": "4zwmWMxZXQh7Mmq1xwzzFCcEvwwCGgz8RWwrxNHCimmd4aDZVAgdqoTSEdQbUBxwiQMteT3nU1L167SKRM4YJMzd",
  "key11": "3qqN9bGHfCkv7CbuXJWpRSux9j3p8e7L2zVxipXtMEruS9nVvGXf7gK1aKSChUVYp1HbWLrpqqBskABkvwcb5Yvt",
  "key12": "4dn7gQF6iA76MZ9UReDvVQEh2UHsu9yLPPuWfztj28yHxL6Li4KtqGseAq71FQ3VfKVzbKgZPN9B7g3oboyZbRCW",
  "key13": "26iyE8M9NQ9uSrKXx46T8vGmQdx5z2PtixLFZpYJTE4xSNMwCMMX8tHAxxnsvPQY2CkzysEDu2w9tMkP4fGq7eUk",
  "key14": "4WYg5AquMREMcW5P8isAyviBa44yHehLm9RiFd7xeGFXiyxebbpfgxtRis4hFCDbdhCr4qtazF4mrU7jKafVfWL1",
  "key15": "4aEWXyFNF8h3E6AvFVcHyv4TDXa5mefnrvwmAc7wEhtL3gFcJT1MXcxqgjf3L7A7mrQcGBa8VGqzPGmbfdvayxW8",
  "key16": "2zZW5LTr58BXQpeRe2mPGnjoRE2K1T7QQU2jwkqMYXD5kBpYtKFRLvzQiD3j1Yv2cmpgemxS9sRmJeJzNPV2p411",
  "key17": "2gZ9PAB99YZ1TN44Jo7hRRCMxSP6jv5PytwYFhbAmXiV2tBXHnju72fggGxKFxziPAB2eU5r9KsThkBSxUuK7jUn",
  "key18": "4TFkHfWA9r8upGp8GhkMrnjqHiHn6Upzfuv3KkDGj7jEkub55eheCqnsHVPvtLNvjxxUiqq4EmkygLfu8W97cE5e",
  "key19": "2jKrRR1gnqviKRxugUMJzA1VQm57H5docj4tUksoCYCYtVW9QZvq6m3GgPYs4CE3dogMrQhRLfWdgN6phHmUQ8fP",
  "key20": "4FqHQQ6rzY99btcDKhgtUBrT7khyLjJ652EivwzM4xiz9uDT94zzAKdRbriR9DR5jTwNRtdhvfrsSYnj7mh1aZqo",
  "key21": "5BuPcmNLrhLzbDHeCPQzHGotcapcenT4Di38B69D5kWo6xPDzFQwSsZpduSaNfRBMGRnWoDvJra8d9rTzxPp6CT7",
  "key22": "rWLdiS76z8pmTNCcvmRRbuJeBgvpFfYcoGMQZaXVqL4Ku8q7zYw23CNnyQRcM4Vx2wCX7suGHsNNPrHKvHkQZRh",
  "key23": "5YQwdXks6PVa94k34Dny2wF35K8Tkx12y7FCMLWp2VuRkNMdqvgToPC8KFVwCitWH9MZkN7L6GF5LQUuu5FcGLss",
  "key24": "5iVvWmAztQo13TGXD3XWUJWofPJw3hsLVcihZEhj3FxVyZjrC61APjHZkrQ7LowAX3T3WeWwueaVMit4AYeWCMxx",
  "key25": "3qVumbMifQmc9he6X8yBPb2UYGEZvMyvT87Sf51VS82Ppxrwb2mGyG6z7g92jGnBD4GXD7byzupk9pSFVMvpzA1Q",
  "key26": "35pihsMw8662ArZ6t9hVbLhGgyDEb9HbTqZVN2fjySy67H7c8TSthNKe5pBqdRyc9qnMuMdYeajbuxa4MLL7dpXd",
  "key27": "nG53wGULQsDUxf2TJnV89fVf4HPWcxLUPinoEXFqRj4y4D3PnPdCLu9yaGownCLa4Ar67nhEXTzx1rs8pNUmCfS",
  "key28": "22am9rx7mC9etatFBuTHwXHSD1i89oXsRgvCJXVZ2s4cmGezZiEGi6SYRUKt9GgeANJuNCBgfGxyF1fno3JMHPmo",
  "key29": "44nBrdMT4W3XVMUbND7u4xKP9Ldxti6nJnQC7yAF2vauhNxMWEg38n9aANfMG37m4kGzrmfmaaRL1r7RJo49LA8y",
  "key30": "53anm688fMBp2yEKNQei1L2SnVQmVZfrXyZFA6Xb168bPz8bqRwRYM7iudwB8N2KFbFdjirKRPBAriWxPeVicC66",
  "key31": "5qNYH348tqsedDZf64AsxdZdUAuunxL7LNygwZrP1XcKf88fYF9w17FY368bimT7UXEZSjwU5NyYYxVUpGEJykPw",
  "key32": "4tntu88nQkzyC5H4LRCD6CKEXm6ngRBGJg6esdSyzJCH7yKUvP2JifSRCdoWzznzzi15y6jUzhthEs7WiPhupUjA",
  "key33": "4eWRRBY2JjQRMg3mEuqz5ThRSqXrtjVFJNQ5H5gw73yMmL83uNXpYCH41G5EJm2u1RUnzjYwYg1J4jqUm2t9sR13",
  "key34": "FwbRFVqXPdnR7K4c3HFQfjX78p7RG9BJyL6s8arSgXerFakKqM7zwvmsSybL8wwZRx5FUhFTtyDuQFfr93c1vCx",
  "key35": "5rQfHzTBQqCsqM8jDAmwxUEn9jrnQmwH7JJC1PRpNhdhaWo3voSv3x5oriSvs27mR8VaLeQ7CW9spX57tKNHkpmT",
  "key36": "3rh8fmbEP76LZ68ky8ABHo16mGHsmnSYdb8GCDJKUcDPvoXdzP7CD4cURe88pVhYkXxAB7S179QMW77i7FKtxD6e",
  "key37": "4GrV8127FQhJSDDRr7tBuicpajo2raH7Noex2aRrS99u6ChpBFpkrXQrYnPHCbpjRouQkXyRBqC7Rk4ycN3q8fmF",
  "key38": "3a11cPthsT1y1R25eo9z5VJuiKqEhafYtXXN74AR719ua6XFrti8Bt8CQeJffx5DmYzifW6g6Yqo6ubu7tDot77J",
  "key39": "bWv6LQ3bfpbtyC35fgLwBCo8jvLUdH1xjM3Bwk9yj13oqLVS6PMxxAn75vSPFR3aqMZJwbnuoBcQb7DWa6QvtEz",
  "key40": "5aSvqZ4VBFMxdPSNyV7DbD5B9TQSriHhbRucR7cV5A3FdWKsWJEJ6roEQ6iMRBeqjS8C4suFrg7NXAeLhrrixtCa",
  "key41": "4teWAvjYc3JmZVuoW2xCuMyf3xjuzMRJ8ki9o2X6oYVYMV7F83YSyUUxg4UWjzZG5n2EdC9ChJgGzJdvmhwxeTee",
  "key42": "4a8iPAfuhHPrusK7YeoBV26oq6uggPSViwnorSLfFxXcygbdcNW55797hpeKgQdSiW2tVZQwfZGVNvzxrgQtQXYN",
  "key43": "2M3uBdR9ZjqFhnvWAb8GdjCjAMVPf2WCBrALb6XmRr5CsM5fYxrbFbfhJVcwhiLwTvmXZZ1q8sSsNC41xgbK6ZTZ",
  "key44": "2xWb2Vejpmukb5K2xdrXvNrT2LiN55KQrtS5iLQAs7tpU52pBpqoVF3Cr1v5J2Ea9PdeAwHoi1XxJKav4TFu53sk",
  "key45": "62LAwbY8hG6bmiTuBwycFRukFTiot5T9T9MiT7Hj8StQPgjg6w6n7WYdWjcvbxPmDhb1tQZv18Q1N7nvybj4mf64",
  "key46": "2Dpr14AT9Nsx4DSpkkfhSxD393AcmwYSweMBi8hfismLeuk2R4ALW315kkoPS8Aa5Nygz2ps1P7o3zrTrB6ouRrC",
  "key47": "KYue9XNCV19nMRWehabX54h93MAtewPsDKawtE3cPDGvKDt4XY4xLMJ8n4tfpdLJnXu9sqBqiRJhUcFfvXuxFuW",
  "key48": "3MNgWatdxJ3j6Yv3bK3sd3Wu4XUt9k8HGuy3LzutMYzd1mJcGzGkFrhkfbesGGoeJLxuMqhm24cjpvv7ApwCSKGP"
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

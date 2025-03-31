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
    "5vNFBw3B9JWXz1YoZMwgk1yUZ8nxuNwTnNYXRWJhnDK5JekfoPfCUWWfLHAFJyjf6YGXR9eDydmrCYDWoN65ENo4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dMDaPQcFzyteoUajyxpH9T2rn2vS1ykbyTJPZZ5XTQufvs1weHqN9rYv366X6vF12sjtTxnqzNXA7NZBHUZHo8H",
  "key1": "ceDQcqojrgg73GzypzMP1aFYeKZh3ak5HeMNVh1gNq57aafB2NmHhGHC56jXKv6jpgadzao7tvdb3iqVVYnCVd5",
  "key2": "55vTmWQtP8NmhTH9Wftah71qF83Bm1zNc5WykCZB5SGvGteycoAFM82jyAH4eqBj61sq3ADc7XWrCRkB6mtFLjaU",
  "key3": "5RJqexCzXhrzgiyo9cpaPCsJUDQGgfUZgNCQqCLvpKZH4DAcUb45Bk26FMREXjRHjkQpbvHKXsp2HKW9FfLdZaLT",
  "key4": "RLmdSMnMoDdFhgcd2n3cYPox4Shqf8qSRdtEj9c2VDrCv5HLmuQp5ST6R7WHRjCxKywP78KyMaGaxv6tySUNHpP",
  "key5": "2wLCxwRuMaeZzKpCsMFNapw4gSKE747r4tcPHYppsDGt5FTAMpXrsYsLu7qYk6cyJPEerG81cMa2dCNrJqSXwDVX",
  "key6": "4aXqVb9JQQT5Vu2kZRYTicpfTaB4d4Xvim2Xnnk6NbB7nzwibSNP84xytpCJj3NNo9oWyxNKRWwYHwbk3HmxJA2h",
  "key7": "33aCSahRym8jfpLx1SbEcpxgwQ3beYyamW4bTogmTxfmPsdduUsRMGshiZ7zMKDhmWZxPDRzu8nVKBhM7Ro8enYA",
  "key8": "25BH6Ni9KThQEbwo2Rj5thdxZ4M7UxEPnCgihik1TmH2g1srNuf9bxw29jhjG3EKnNCFqqWQD5Q8YRsyMhBrh39n",
  "key9": "2P1hRswJq3ffHWkYExAot1tdNd7j2Q5JMGyREVaZwpoXNbDbucK7vVEoFcdCDzgQGkW7e53p87yYpTsCwnnjx9k5",
  "key10": "3WYAxvkpEZcYtviuLkfV4YFLCctp6ZGF6BZpo37sU5ooeQDqqDp5zaV8ySXQx5TvvqqbAe88B5bTkPLQELW6N77j",
  "key11": "3wk1KYcHHa2HHDKVgY92kSuhB9LQtouuuvjaBXoWiB8t25LMP8BrDuGrFSEH6kGKXmMphVt3NKfvsj7HipRjegdq",
  "key12": "4p1CNtHA3VRud1GiZnAzoXWnimRSPWhN4Aty4r6G4WZAj7Gm8Z6fVu4ajp28S5YHd5F3jGvMVBQoqaGWZW7DPoeR",
  "key13": "TLvRwcSAjNEfT4hapQR9qXXbymGk1ynM5gZicmh7P3xxow2ogr46D1wz2jwziRkfh9zJZCPtBCHRJ7FjdWHdxiJ",
  "key14": "2Xo6BkdWXJzWWE1TCEeJvvQazQi6uP4gKVxjg6LJeQVD2u4pBVufsfJZjDm9nhVTLC5PoKaUoeDCtKa4PC95ES7P",
  "key15": "4ny4aV58GN8y2NuejdtbXiiwwFrgg9pPPFxfviMm7jGfHpAfxpSLaUQbWfRJT5DA1G5U6D68D2ibf4Qv4fXvfPhw",
  "key16": "5t1VzzpNBL4oFhLQ8o9WS8LuSg2dAUUQhSye9CW9N9f2TW6FC6u7YLgay4WXwn8RJcbEHuuFTMfDoUjtZgoEnLzi",
  "key17": "5c3mk28DCnq4pFKuFUTi6jH9ESE7MYUuBe5M2dDuwHBQENwNWAHsY46W4kC79EVZBJNfvGGiact74JXGfChgEnkU",
  "key18": "4ysEB4K4aNh2vsgiodnHRx962RMd48wVaiEh8hAHoodpLFJVptexgbBFZ6jA7ucyf14KyDxFnBkuSvEYGxz2PcWT",
  "key19": "52JWpyGKjLRQs9oxFdMmPoDg5QKHPSESkvxyMh6Ei9Ly4JqW8qzfGt5KoDSVE3KriSp74ABAUTLLnfC8NyQMNbLi",
  "key20": "2H1GxvLrdyHRGjZuCVHmoQb9KE3QSYgzx4TmSwrQg4wxp523ksncNP84V6A1JwCY4by61F9JQsQoAKzh95jFS2T",
  "key21": "56WhWM1FMgw31vDBr1wy8kADy5Dv4K2w3eHp7ydfc8wA4bVCSsk2Sscy1STRC7kJnZbr4PDt9SzmVVMArJjMwNxF",
  "key22": "2eV5rpCuGXSy8FpMmR1rVgWg75p6u7nAjuNh8XWz32tve2YUMomAro22633YEcuyuiYADndKmWYPR9M4HyYM4uop",
  "key23": "4BaED2VTP1gDgwveJxW3wB4V2eeqWA5PmfbJZejRLfeRfphjTqHd1CD7ZFvJx2kgKTbEZE2jshje7o5y61HkoeKX",
  "key24": "3E2R792YrfSdT4sWWfQLcH1EdVDkmQMejkCLYJGwWaHefsoTpVfesQiKb8ooQgTNKUqfZPXaJDEMBAR6fDwicQPy",
  "key25": "4pvePvGSTnu16ugESdpNZfKDieGYdy4PonQPjcPQRoo5vTEQwY56c3SFbcW8JuYMYRCrEF6L2gAEs6yb18nAzd6W",
  "key26": "5bMc22ZcLzdPDLiWddy9M2FtQCSFVsFH5vJckbLZFCXQ67nnzQLg5PKkwuCFWRiZMt33MpdZLXVU73xp8VrFdXaY",
  "key27": "5mGswHnt6SatnPV1JdWU3bcfd1VxhAQjkwsg33Ap9PRKL8pzsmXwdsyii7r3F1B2V3fwNQNsB7Zi2X34LFR4jxVJ",
  "key28": "N5mUUp6Si81UWnMZiT3wf4ryoKbZ9U8f85BRdMunX6CKWaTTJgTF6tnw7kkYpZatYKmqmzBU1Ak8E2vjMkrC6Ee",
  "key29": "2r3vsSqLSN9QNsUqFqaNZ1cxrvUhDbLEPHA2tC2Tv5dD1y8iodPwDkeDY1ofhyjXmf3XtQGJU8p6TJTgJdXNfs2L",
  "key30": "3dGTFErydeNJsDoHR3bxNPPao5dE8kPobNK8Ar5EaRcGStG2pJKqsuQe1de3hjvsTpREv8R6GS7iXS3a8sJqYYQY",
  "key31": "2kRXNFoYdBoEKNFc5aBd7HXowj7XoXWexsNfZf6vvGSizDmBP1ybLbu249tajRKuEhdDVBFfiBB52HAmXf9noQH5",
  "key32": "2SMwSpb2LVbuxVxNBAu9btgzg4BJafWg89DSwSUcUFZeAfqG9CsbEKdPbFzVzBZLut8jvdknqZ1ok4q93TeNvL8h",
  "key33": "4rbxBSRG87QWYaUFQ8YrbVAuLJzHBbmVpW7YjHGnGQYZkmQiRpMGr27fenEqurXLaQ1YteZxcm4APkZWfqtVjwYm",
  "key34": "hcZJwCRVx847jspUCFjSuNgYh5ppjroCuofMc7x2mFP2gKJ2zFsMoovd23qyutfCjkZTWZNLQTyuMFmiUgkMBFE",
  "key35": "mJxvrviKKZ8ZxBMEWvoNUH4z2YdV3fJwGwgozBQuVUNmtk8eYFAk8e6sKdPrCPu1s7dnCjXEJF2VaLoy28kGTHU",
  "key36": "vCM2sTNBYXY5cs1LByhEbjyae1ezBiSgnVVqdERRbKRf3o46wx5iCYA3eKy4pjGs8n2KqUZAqrSwq1w9GdaQ11h",
  "key37": "63PDyru7s336US2hMFEte1thCcWgiNUP9rDDULr6hRKfkzeH4KnG6i3JngU3tCH46Cesx9MjE722WxDPJLS7so4J",
  "key38": "3WxuiDHoZq72d42CCNAmtPTQWUXG8A47WRf9bKjRAsKZA4rAvNk8hLZkMrNn3YmU88HY2VrRBvWYNx89XkTZzkrU",
  "key39": "niP5CgdisJBBkBbv6CM9DbE4wMMHUwBHCApJjb5jMw3wQ8UXwR52x29cRK1EAWwruLZPZzbvtxuDfRSgh6ii8GA"
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

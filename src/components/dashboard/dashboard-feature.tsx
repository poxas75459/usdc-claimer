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
    "2uYw87Vjiw8JxcoKYbhqAw4i3z29ikbkcG1bttiW8zaUExh7EHYtXDbpZhbzHcERs6otos1VtLFwHXNjZ5JDKXRm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m5aq31Ay9Duru1ZfMeJdzjSvtYGm8bUXoxdmWce1tVutYeAgapaNi9xgCXFednKNgCsU2JyqSxbCM1JKnXp6cyv",
  "key1": "54Rp9KFUwkW4iPB4owpQfg7sPjuydrjX3SoM5bMnnQtMsJmf3adzET5wroodzkLgr2hmFsN9E6MFAbCoTSQwxNoK",
  "key2": "5pka89VLuvPPWt2fAFztNcu17vGAy5QSwj5fCsxw1ns85yC2KbwFzVbvt2nsmA4DxLZJL2pxAthWCALfKR4QQcrT",
  "key3": "2N1GCKd4DU32WnMmic1j3t3e2rKUYsgV7fDTXUW4ySkCNoTU3MkNgFz54eKF5ZWDzKjUCXVoQsxpSCs3ndnd6JPJ",
  "key4": "4WA83nqGsUuM1SvRsb1S1Sabhc4sy4M8ofDWDLK6eKSoBaKsh2c1zniKacpE3injUB9WT9QKArPBHfckzUj7LTxt",
  "key5": "3BLaW8LmCJZHzsqS5vSmyMaqrXjJ3CuNwsqoT1gJKEUWCw5pF5zyRBZsRAQcSdwg9uvuL2swTSH4ZzSoaf6TkbNm",
  "key6": "28zu3Pky3D1jeWZmsm8HAaCTbD8B3Yp3wGQgaKvpTC1wEsewNuBnVSTZiqx8R9Uz9HuYf34GWLUrtTnFvcozCkfJ",
  "key7": "2rfwATvuWscaWgtDkSTrYXb3MWbQcCTSXpJkTwQuFqjM1SNA72LuCR7nUThCoK3jR4sjwawRnQA3BsX7tcFYMaPa",
  "key8": "28A1DrFPUnDU27HN4hvUB9Vru9C5H9HXwLezSSMX1aa5w5inRvjBDiYKxxvDtsu84MKvNjrgFuXGPVC1xhicw69c",
  "key9": "4U54SrW5eFseChuDv3CuHMPujKAjaVjwd99B2TkfAKanGVZuS8hycvvLZddGWbFGpL6VQ3MMh2JpTx2mtqvSFPMS",
  "key10": "379su41ZugCswSPL9dyoDefiFByrPvLyHc8GZ5wegvHZGKpqrpEEKjAX6pRGkSGkdmzcZ31SLteqm4yBwhYJ4Rji",
  "key11": "4Hve9YJ92gBKNipuBDB5jQmedVJdHPaKmsfL4g8UeYANfiA8H44X98KbuoVN72vpX3ujT2rf6TvBkhDb4iYRGMCn",
  "key12": "A8bjrX2A28VaWQ9sJ9YVwpNUR2qUJUa2w2Ucz3suVtxKntT24McsFXAAsXeV3QswXygHnfVZvRGgKzHBLkaBLkh",
  "key13": "mBLVSuF6rE2emTdCAxvr7xE3Tothcpqx1Ns5cyC11xLqEX7kVtBXnFCFjtZCwoRsmfLz3uYJmRJJqN1QDpbpzF6",
  "key14": "2XFBwpqRifeGrp9Uyv5AUPTacyeKWNFzkKdcYDTFruHRkANKv5VpTkXeYQtUbeVXfwN55ooMBHe8kYf2hcYEtj69",
  "key15": "4edA5jJ4G75qSAQpiLL84APK3vtFaKk2ATN19CVpKbJ1n5CVUE8R7Y8zeYX7voBi8sWmR9i23QaH3mG96pAy2xxW",
  "key16": "5DoCz1dJqH9bpB2fTKPcd8zMFEMZPTAJ5Gdud8NVPrvEmPFj57FiyLdE6uiuAWSvyUAPrxQX8rKKoPoadQYmM2vL",
  "key17": "3jC2dWsBRAcRmJeKjTWmAP62ABf9VvUa6PzYirZQBAUufK9UhJy5BWjKUy3EPbPDiPo2ucmdi1nopRdcdrKYzHPQ",
  "key18": "3aktYkEpPjDg7pU1pTovUAhDfT1CdQLGUrjJ7iCzpPpAWyJg8wGp9k3GrpGYppw75nbjYhqXJtNYxz3aJ3ruPRWU",
  "key19": "DdmCpfFuest6WVopprnTKmZJzbC9Yyoc7SPj47JDKSUYS1DBT2qiy1yoydnBoGFVYrYBX92uowZjrwvzx3o2xYh",
  "key20": "2AnDVV3k1vtCiBS65b4DnF44ZffCJXne5pgGD51j8PhSJgQ4XCiPoAHMNnnUA5nR8yTJBypDh2Y9WM5KAhKtgJzE",
  "key21": "552evHn9oMRuGe4qUy7UPG3pZDEYApzh3LRTcnJL2fsVmxUhCfWP8RMr543PrzyDhJ83fthVLVy8CHeB5moofXYs",
  "key22": "2rigmfhvZFxKpKMicXe8FPRgAdSNgZwmqNgFi9w2b1RNYi3eNjfnfwXgUBdfNoxg3wwUUzeF4tVU4RU42bPffj5Q",
  "key23": "3aT4CKidzboDs3PuCUSGZWLyMxpxSQuuzN55U2DxbvWwe8ka8FgV4Gjn2MeMgDo7iUDz6TqKL62VG7m1AeLWcUA5",
  "key24": "gPbavpt6wRdhu6rQLUFUaiJx75ocA8iADDZsNWu7sAHgjqsCQ85tAP3ULhqajVmbgHLG4AArasum8w2oMCyF8RT",
  "key25": "5CT2aqd13iVWeL7jxsbAd9qSuZ5ARwx9FQ9oJjziB8dkpnEQJbXDjq3osh5dpvjYCtLW1kRUsjVM3TVyS4ETdRCB",
  "key26": "5cufM5ZwnayKpiALAxf49NidvccUxHqVHqd19e2dkGtPhNbwSC8cuV6yRaZ17pCUGZz1pGsXXgMQbFzccCAP85oh",
  "key27": "5xKcDzAd7CP9VoCYbkAUQYdnKiBraTUYcaVi23UZMSfucBJzQT3uhAnNDpSB43epGYwhS8XNAnfS3sQYY5QPVGG8",
  "key28": "25G3oVoDNpfLQkw6ASFr9EFYZCCwp9ogSPUU5UNy4hz1f9zUB4SNiYd2xv1CMHoqq5VzKr6m7m9y415AkMxdUp93",
  "key29": "5syxJd84v3qjuZ5tg9wN4VrHPMMBeGYE4Hn2sj9HvgkTc3FrR5zxBjDfpkhjA7xdvNXgdff1AsMxfvXsPsPQMton",
  "key30": "3n9LwK2WurmkGaAJnMrQ4gGv9FxABFmXHu6eKbazaM2MsESqY5TMUbbRGQPwmBpEPyFfj7EK95rH41WQcvxyPucW",
  "key31": "fqEBB2JqNKqmNPd75kEFbPHsAs5F8mwL7zLA9uyN4rrNGFq5r6eRo6eCvUAXN4yh3FNJgHwQmofn21PsEDogtAA",
  "key32": "2MmK1igBWRzrkAuCe9Lw7tApyKBgWnbu9FyxsXMnzvGAukiYH1AwPwKSUmJ3cxRWYqnHbFCTZmE29wZgahyRjiEw",
  "key33": "43nBCBGbx7Z9zLxAApJy6ti9F5PJwd9w9XJR4Y4jXu1krg6rvefrfcCQzFN1dC21vSx1F7J9YaSDMAT3KbADvh7B",
  "key34": "5sjUqqVx2nZkGXr1G4t48yqTxcpLfifJNLCpnTa7Gf6uADWyRJfZrTaZZ3tBn7KzsYEPyDPC1x1caLbHkFKY1LhK"
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

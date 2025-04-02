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
    "3LKyMzc3KaAoaMiKFzLnLgiFoYRVTHGDNSPiVPcigkpmUyGZQQRUEEYGfkrKwPkJv3XQsGau5mTur7FTWyxFD55T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Cr8fHDd1JswRZjMHmQmhviwaxP6Z5tC74P748Gi8TioN84LxmzhyrsQ35zhd9vUKssDe5qAvy1MVXGh7o9Kev8c",
  "key1": "NwcBHoumgFE9jHjjXZQLSCGFuU2ys9Kwakbkm1xTasb58weWppX9d4xUjXkHbgYo6GYDVuTFhpc2FEpuY3mxpDJ",
  "key2": "4TUVyFAuGBo8rRqdmR734xDKuicwYLZ58g94KwjE4R3Y6G7VVFsUAdB1G2Xg6tKjn1kxyPMJmrBAhqE8QSvUwUZc",
  "key3": "4RZudeAQXB6QFRBnfc7YnjSrUN7QuNPXiHSN7Go4huE1fFpQnWxBHhbP9PB8yCH2DR5Sto5ZwaJGFJ4NJFqejaJz",
  "key4": "4t1ca2vPqqkgZMVkDVShroCpTf1eciiP4jFGsmfLfbrf29akL9h4GQuKzUyJWhGH5P6eYukiBvmVwyYNyXPG4nKc",
  "key5": "4w6sSE5Ywc4HBxfWEyMBXLgFD2aQSmCyV9oaVcM5VG48vFNzj8sk5UfvE3phzDhMHXzi3TjsEdnpYTEYPX8ZRtgK",
  "key6": "EUVJBzZHKMrSYTMoiDfvDEunSDXmLewvgUVLGPqicSPrnjx4MweK8Gb6VSYYuh3gYUJAkg8U1CtqvNJhH5LH1xQ",
  "key7": "hb5Sw3yVKzs5s1XtcXRAexaZiisCmnfDbWDRM3ivFKrSD8AqDKNM3iH3ZK4pf8MYe2fvSFkrabVHbXghtthcxKW",
  "key8": "64m12CTaFjjM7yHkvwhZKD19yxKXSwG9fYkZSyLETJjV4LHbW3Bo9uCZ466JVP4TQYcQfXgZsbGDZii5Bz54WtUq",
  "key9": "5U8RsFzzyjovhQcMVMNKF8Sm2NKWPuRPKJQiWpD2nLE85UqNv8WrkfPQRD9WyPQAMSTGaiVRiWv5M4BXAzvBK7UV",
  "key10": "3uu34zuzKZsCGAtYq5daCsSAr9xBi8ELffJ7dTnBc6kMmYHwPKsKJ3EFmCuZK7o6gHy5GwDGpuXzP7nCkxNt4tNu",
  "key11": "3yi74dvbjKhAqodCcifu5PAu6Qf4D8beoxLd5a2m7h7eyzVvtQYcmEi8J1zKWKPgtrZMCqSXrwmSMP5dXVGGgeLA",
  "key12": "14wkNdb9eyCHch986ZGHYHnhdYmKiMB8Vp4iY1QfEjVAHw5w56pE1hcz4RiARkjoZdzapiJrDSTtRJFenNQ6evi",
  "key13": "4WZR6PpQ39d4JYx3z94rib6BkcRfgFrmMPcY5CtQD88XhuuysRH3jeBC2CjqiqmeFkguCMUGTUUJ7xqM2ERbvoNd",
  "key14": "3geBN4ARSxoaXiP6SzaS7xYcYfasefXVUSzhPg6Tc7VtWjoP3QVeFd49GNWEa4LGty83ByS3s2jSNc9SNu2PmmTv",
  "key15": "gp2GLF1gSD5ikrc1qfWQ5uB9UzYznM8Hy25CQzxK3xRiBXEcDUoLnrSHFN6esMTtNEF22KYr7d8KoCRPFegJNiS",
  "key16": "3rxcFtUwjp9AuZ3fMacBWmNh72MNE8ZFoi7EYjumCjC17H8v5Jz1eXqVcbmLA9ogEMZjUAjLMTuEizJNTJhhA5im",
  "key17": "2HiaA4D7D1BWhaEuWAdxRyrtM4puZcKBDikA5SSqG7yFxsAoaoZyz8frXQ1H9keqRftYLbCNC5wZiRDbxqeLxWhW",
  "key18": "3ENWz69JCfPkVrLacjxXxaTYtutd3Ng67XLAwqWVSiQ2frEtvzg9tioUXyk7Pn4CNXKUY7d1Ejxu52b6CD3rgbuT",
  "key19": "3UuXzP4ebP4ygfNM1a4CoBcJexWfpjEVihkrVZ3MsrvACrrM71AfPpRWyGTwG8WxoM3xHZUCyw2pKFy8ejttbuJv",
  "key20": "2Sm6944QgpuFW76J4bEJfjqbjtcKnWzF6gyMyLzsQgBw54iBVMCHtdEfsBVKyJ6Dy5aPeFCfxwPh1G6vLgZUQizq",
  "key21": "2TpSgm9fLpjwP2tr3TywnNaUMnifcHVNuFfneb677AchGkvR9o6g6RZkaG2crHigdZj4DaC7GNoKyhWVY5whhwRL",
  "key22": "5Tj8UBW6494GmxWavQh5xBvKw8jC5wL6x63xR7gSHx8mQHtqHKUyAXn3SneLsdXLHtn52oGKaHnCCcWieJwuWdv5",
  "key23": "3iD3tbahFRn3bPxeS8Nosag3GNJQnoJgsUjeyb5rp7uRL9KZ76Vni8oNpn8YF9zDkH2MEwacmxiqwxLLTz6sruY7",
  "key24": "4koycSb2dGk8M8KXxfL8SrtH22R2mhSNLU5aHc7XuiniztWfdW8236aCFkPucndd6KivEkYruPyBSkypqha98JdZ",
  "key25": "22boYbz69weAkvxh4aeN8X15CvSJiSU89p6cxCv7DcTHi2Gh6QU5YKoNJApQVxh9zud9qqvgiVA8q4eSo28LBvPT",
  "key26": "2ttU9q4E5W3koCrFs6zu2wna9rzh7KS5G7c6nSgWwJkfCSAhYua91333qNcc57CshjWcVc5pqtfhzb6SvsZmrnWf"
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

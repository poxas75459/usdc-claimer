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
    "iGLSLPsQ4UqUapNwoF5NPpgARXgMfLCbPQeU9Z6cYCrLy7E67DjNv8BD84W5zqVTA8msk4trHbqk65GjEpfEpix"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Pvev3n8MQLEwoK1rGRPWBKcduE5AtnezzqyAz1Qic5S7YajPiti9ivnvjsBC7FZbFWEW5KpqdtpW6RTbiwXf2y5",
  "key1": "5kqZoZ1mY4LMGxEn2AGjGpCxH8def7ha2QcrPHS5PW7iC46TiWGDj4e9w5Dkv1y78znFGXmU5WTvRMW4zRGX5Qou",
  "key2": "qVjsz38teNfX4iLcp7gs6CGgVmC8L7eehqmuaUkvdetm462ECXGSH2QwgXtfWuGykskz9wXrwY7eZCLuDUomjHX",
  "key3": "36odVeMU5TgDQA5rTRgCCRfMs7hBtXvn6YQ1XtNvEpxRpFKwhJHEV1PuFoxqNGcxsm5vSvm1EAT5XVCrZ6vcbbYr",
  "key4": "2QsrnCuCpuV2BKCnc7QSToj2RkF4U5U1FEdxn7G8QxJVqLy59wUfBQDvdAWkEXFVxDgHEEv1xeVVQUm3AJe61F8T",
  "key5": "zpkPvLXKGLDGnNrmRbHw8asGQFPztmHU9dqS5ELcyQEtNkZ4xJpRVJFczhjG1c8cnohfxfADWMFbBfNdxQ3UJ41",
  "key6": "3hqtbG1XD62F8cecLKFia56H7pTGCXRH77TF4ysfURdaL7fzqg88eACjuJ9QKpHLPMfhqZ9wD1EZDvYUDNAWpqtw",
  "key7": "4hChe7otD7RyRifCemwgRjajwve3HGEDUnvGx4YZUhZ79VVjQAQ3x8bqEneDQp5vERgPFkuMCxUhkX33FVgRZ8DX",
  "key8": "5ngq7EgXVSexbZGK23sKS9uMEHd4Wh2E9SMpu1b2ZatTVTdtrkc5oLPETWfH7YA6pPVk37VM71EJdKoGY2Fnkera",
  "key9": "5z7vhNuDKDX2tjvDx8CeEa1sosHSicqxLdfoC1HdVQjSMXggR9pLxeFTTHgUjRVdktprxCGDNFUWwT268DMF5Evj",
  "key10": "ZHrSpnBLWFwNdz7fJPgKkxr3bmPEttTe9c9GdWS6gGRKB6cEG1WAmwcgqUwus8wYtcvD1swKbgUDkKU2PekV8X4",
  "key11": "4XATNmZ7ZUaFu85YFKe2p9c2pEYua3Sf45DjoK29CEuSke5kqMUQ9RSK7moAWxs36TzHGh2BcMK19PkPchKJteGk",
  "key12": "4j8Jn16t5K7KCPfWakHFCQqmLcKenzCTxA2NcR6GTAviHj2QctgXF9uNsVdGQvDyxvDHpCrSp6rGfFvLip52UhJW",
  "key13": "xRvniYdQ9tvpnQamFx8zm1kHi14bsFGFweGysRXvWSeTx62DsKSL9jzWeuaRkn1844oQqi84GbBCKfeZ3MaF2XB",
  "key14": "41a3BPpq7WeewEmrCUwXdPkJCEN2wEsvCjqgb91BNDbuKeSzTyX21D2SEmb8Bvfz5o4z4Mdzmo4fpGd6TfA1HKV1",
  "key15": "4WVdcDySRjDAox1pxLBnb4ygAHYwQ56L9WGUZ1Dyu65mxUaVApfvvJgyQeqER48dJ7oDdTyA4y32mnNMyvaNYRxj",
  "key16": "5nYYNXppLTkhreTqYPv9VGQTgoxwhvpxQmCpQzV377qgv2aYqtEATxx4UBxzwBc2uFy9Xbbts3wUzmytDkYaurG9",
  "key17": "5yWqRNFXCkLbcwgpuqHNJe15AMSoirh6xZ91251XSmQ62jvKF9vUSVoHucwoSApLY6uuVTRsoMdJ6pcpi621tfaJ",
  "key18": "3D1BpdtBDnNxxWiqoRiLC2LrMbE9yDZGbfS8ZW5NLoofKdYsu9mzrVUnwKVEBqNhVyMfrKXUkXHS7uzDq9c98tud",
  "key19": "5g2BuWCfvb96U7pjTwgPwD8UEXDamDT36iyqgCVreQuTXdpww9SWoQTCap8HLJZVaHYbshR44MTsT9DF62MtMFER",
  "key20": "jHb9jPQovpfj5LE1kg93GySkspRXgkzE2dMUcfUsoKG4kLbZqx9S9FhMmtkqhWC2cEpfKCKyaSe7VAE9X962H6Q",
  "key21": "4DVCTcbugY9AsNpWjfFNBbM9wg3LgVXvF2vUu4m1WSh1kkQ6tDZCiMoETRZGhEheUkMwMmGG4DdXPH8Vb4a8GVea",
  "key22": "3ZWh9RcUB9dDeEdNFeEA1BDoujdwZpApikhtrku7vobu2Y6jCRjKPjFK5H2f54BDKzk25679wSQ57ftA4JjLTk3t",
  "key23": "2tAytHCd26vub544Z98BSK1HxYKsdzp3E6ouRixd8nf5NdTxfPrNqTfnag2VGRPNeYtBjHHk2ppUZXWFgvv2Ucpi",
  "key24": "AgQdjawNDKvLtQVHJrTNYr2iS1p59oiuuTJqvkbVJ7EvsuFEJMSmfjHcostEyRoaM7DJVYJW1XqUxY6squz8kjh",
  "key25": "Yiv6pbaPdsFxpgyxGXDzU49p4zyfYoFcZiseyqGxDLeRiLtQ738QZUeuQabGH42wYeJn4xUC15umMJgoKaQ9cmn"
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

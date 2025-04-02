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
    "3vg1NffL43Xa5TG9h16fCub6SngU1vsmvznvPEsSQ1W8XRmAW9BnDEwHTFdXBRrb9Teut1tpbVQwmrTVbkYE8r8s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3voBLYihByG3o6yCeVan8xEbqCdVaNPxAQKaS5uBDjCpukcKduMDJ5HdyKTYZnwnV8LK2UVfiV8SBQQXPToW27Qv",
  "key1": "5Y9X1GqyJScv41BCKNq63C7rKP4a5X4uUDmfmJBtMVD67QeiQJfHjsf13AhwXRAycdEtE8RoS5SeL5vYviXJJTfP",
  "key2": "5hs9HmTnM9mY8iiBeRDs4VLnvDwDjQz87fNmSvmCyLE2xKhS1jkvXp6ayZehZNgE8N4YGnKLQ6hP8BN4GW3sGMS1",
  "key3": "2ij8LBo27V1ioBgs9QxucKEko1uahRXiPDcyxeRj4T2eCSRBs4btNEj6yymysNtkVGYXuqTAZyCBw7GrEBKMyFFK",
  "key4": "ifc3UVxenS6FrVr9Ue7JTvnQT7WvaSZJVLZSRkoX6u3tNiJUsAeDfj2KX4UGASdLqLM7FNfyDWp2LsN4siG6tKY",
  "key5": "1AZB9QXtnxFp1UbzK8TKXbYjigwgH8FxjDjxT3uq7yz3EXidjAkd3YWudHEthgztiTEAHAiJvKihamA28ecUvLn",
  "key6": "3K68uBDVaFZpB3bNGS8ceLH4JvkJNsFTKuv6pXNNMYQ9ZGBapRCg8v7yBT6VrUzek95o3Sp7pd9qkDijTte2m7Xj",
  "key7": "2zT3Dkach8n88yjVrZVNCvi5fnCkcfoUJXgL2aMqqfWkBvVQuPzGfYQfQXdWV7fCh5xL2yGmJLNuNWRzYbLWQ18p",
  "key8": "5QfKN9pmMK2vYyrHtJCQzNrNt699WCBH8GaHNV1dmEVJUS8YBn12pjupacs27v1kZMcRnQnymJ5LHruJp7ajirtU",
  "key9": "FehsiXitWJBSP3TzuLZynmcmpmtapTk7m93Htedzaej6BUjHivLz62WzGe1RYV1LgcsEidx5cYigBHtAwibVjaA",
  "key10": "5NvddaWYF6jYqpmyYAfvrmvmMtsTyHiCWXh4Qycd912T2P5JzvkAoDt9n8EcPZm3cekdhpVMdSWqXPn1hwBqhN9V",
  "key11": "3pkJo9aefyJnG95KnsHhJoNJ9dASsDmZ7BVSXB4zy6aMUeDuzUXmKLQ29mZiS3UU9duw6zrfFCA4w4i8vSQAJ86b",
  "key12": "2MSSgNKi8XVDbSdsVJok7eVTcUo3UdZ7MjXdPdWU52GvXMJs93GPHgDnuZPZRqgvo4ZCeDnYKaqGYJFHccZJPkQr",
  "key13": "5b1eoE1YVMG93xC8m8y3y8dGKgbQsg4KCbgKUna8t9BMp7QgphCXqHLgYFvNNxkU4RfuahBSJ2iUo1gsc9oaWKga",
  "key14": "mJt2Uqh7XuuNQybhL4AdfKHajKrWd722XRHokj5bTebDeez9YdC2DsZV93kXLCwdTWy1KKhuaVMzwB5ZsX2B7K1",
  "key15": "8pfYrUgxxXn7kxMS8MbZFuunpdpBspNGxnqxPQPNvgE2YNx2g8uFw6soQcQg9wdLFbzv3dCz7cbSTrgVJpr1g1p",
  "key16": "5iuGmriXW7RUSef3me76z2AApaMQLaDeXQZV5zD3NUYnx7Tc83iXM2HRWbDxCfqDnyuWmEi696nGf62rZ8LHeRQr",
  "key17": "45fCCivn3kqUR9eBywUPCHoM5wH752Eejy6bWrEUqBtuUhfgwBjjXT2CpnRxWEZQpo4U2y7qBV9tgkbPhCCzgoPd",
  "key18": "2P6TpGe73huPjzLXNQAneXLL7JxU9JsdS7NHViC9RraTR9nr7PabNwhypQBWic1fVdd6ypyqYYYM5gYJomcyEuhd",
  "key19": "3SKTvPdN6w65KaGoVnEz2uqnPSfy3rxMTN7Jxiow5zXwSCQjZb9xPtCGVRmQtNPphoJ9TZgreJupFKiFvr7eZ4pg",
  "key20": "4RrwTiFTPZdx3imHFm8hPn5NJ96hDQmsr8Tai6QT4e6eEoAcSfzmLh34PBiLti7672WCCysQa4htpS7P9UkZj151",
  "key21": "4aGtVZu2evaFfN6ZBaAftsfaosUvtXKT8CsNB3q2HAS9pQEpSN7Lkr9rgeiF4cb1Nz66spnbVSmYMaGkx3xHtQXH",
  "key22": "62N94LjYPV5ezwjfpsgg86WvB2Dj4sPW35J6emDZHYbGY18PB8smF2LzpY9wbuybATT4yJQJFtJaxMvs24AhRmkn",
  "key23": "4gqrHS1RsaRWCurFR4NrQkfTTxMsaUSGk79dsfqhJ1BTBwpA1W48gszHYLJK6T64XHaH2jZwXGJmAS8VgedeACdg",
  "key24": "42YF1PW7dgH1J9FTnXWx8gkgWkdvWhSR7QnFv53artpS1wMCXM7GBAYPA4FB3B4EunQDRnPN67KGQcmZdXE1MF2D",
  "key25": "Wry2tbTQYoJ9yQVqjKMEDTtgWEPStak9vQxv94LF51L3Svb9ZTBgZdfbomcgz9tnFNWS8fr48K7FCTk5GHrCLCo",
  "key26": "2HiAsPkwNsRkMo6vZN69hJtqmS88jdwXSnGWMv948ZNikA3wSNRdFPjqx8WcBsCne1nj7tvKewrqvdoEvitV7tE2",
  "key27": "2XECsHsw7Bysm7oHEejMKBKsTWh3jU1pjXNgakG6Ej8Jy9UktoWpFKSpk2w9grRx1gteugJ2eQ9NSjdrGdq6h2dK",
  "key28": "596DMGoY4DxCspQhWSG2ybEFCEX93cRAEoVnUuQHfK8NEaCArEhgt9cMXFNK7mcKsXRzELki3gyttgScksSBjrPY"
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

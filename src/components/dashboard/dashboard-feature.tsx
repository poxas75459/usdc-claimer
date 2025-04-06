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
    "d2p45xKtLneGu7y2BBjFoYZwoeJNdWasEBsY2Z26zix6ZgXBXyeZnwu6pRzUpZhSQo2UpyLpBtpGwTU1cqTxGgg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hxC7VDxJwd4Pob5D1S9bwjhQX2omn2NthJdhswGfpccsE8TLiaQQY7NM6L1SekoyGLsR9zEZVT5hwV4nY3LKhWx",
  "key1": "38bS4eM8ebyV9fe9U4cRXsqfYvnchdzApvzUXwJnozg3VsrDSozSat4zwnua3JjqKAu1FTJs5K5mM4saFBEFwed7",
  "key2": "2Ccyb6FfoWR32eDXUFVhzr6Q6gYFi7SZUx1Kv5bLvRMGbWZnsNZP3PJXPquw9XgpZDgeCpmsHCJ9pDnZDMmL5oU9",
  "key3": "Yv7vS4VdfnNpEtUEutdmPxEzeL1WstvypLsbADZ1SRPLaM511LnFMMiEDsyziiRsfMHyxhNtV8FL9XR33ofhUVg",
  "key4": "2LMfzZHFfdiZTuZ6kSqS7sTbUNB8otxqo42HURgkrmSANSswxdhc35ev8doQaZNaNBRfTHcwF6qfDnjZRdXrA9Up",
  "key5": "663gVxunnFVRLvVyt3LJn6SadAjqt65Z3vxW7ch6Ze7XR4FGsfZLT8P6QLHrhWGDwkkKKXmb3SgMeDFR7AfCK7DW",
  "key6": "2e711uSD7vVSXNMoNFWNgbhJv86aATpAPhWWEdHCnNua4B6gKxCq2t8Q12iwG6MCUgPEYFUP8Fefj7NkpHP7hbCX",
  "key7": "4Gke6zgFzA2LPerMXfAcHVptdjEsNamUtcue8qpGAoQGsnyvXWcypkZ6hY12jjd6xPnUthjhvaWB6pAdpdtpCydK",
  "key8": "4YnUj9H6dxuz7AMZ8kSGBw7cq8kWVDihHixRsKW1YaCg8XWVpKkBkPzZtfXPrMeLnB17RC3LBYYWE1npVen8zdwL",
  "key9": "5npxRhovVFT6UG6E7ncnd5qh35QG1qSF1vQfWmV6ErQdDiYHZhriCFinvgkQJSimtjdzpyuJYb4351ZQ3Z6G6BY6",
  "key10": "3jpo5NWnTwNhPwNHHZa7xWboKw9eSRnJSpNAwp3Qjuth4JiPdikf7XK3DV1NK2YdnbFDqRqjx8DvreD1g3F7Dv8S",
  "key11": "3u8ZHSXLfhSATgy1JsqLUUbFHKLJaYh81bCiU6s3nPRhXTn7YAh8yxLT7YWc637ZdhFm2Qtvj1huQuUxZrnHiBKH",
  "key12": "dFSRKNvGVnoX9fYRBLFGh6DGBdyMWRS6Vh1etT7Sn2QK1ntBmYwHgzoiLFF7NzuFNotjJQ6bQbAzQTTebmZcG3m",
  "key13": "5fd1aUSQdRZoVkTnSujdazdkKZ52GoXYroomicotZbiXApEge93i6SiX4fEBLR9kG7vVJYF3kTcmTTCvgRHaFzQp",
  "key14": "2uHcC7Pf2DYLbBZPdWxapDUMN5niyMCxQXwpTP5DnjzS4XJVLhaw7sj1WHrwhf98NgrYwKWRgzN3QzAdaPcgMmCw",
  "key15": "2VZk69uDPpXyWqfjzRxX4bM4ee6g9Pw7ryHeDZWyPr6AYipAvmvJ9VaBkouyGrKCBKe94GCkSWEkhtApuqAsPbzc",
  "key16": "UWNRFMEfytq4qex6vWDCHt1awzmFro7Zbs6ZEg91pBg4Mkf3qE2z1VWqD9jzCmAH1ctyy2pFeEvGE7L5qBJ7hoQ",
  "key17": "48rdgsXq2skSVDLRGVeDbqyAZPfuDX8gDvDjjFac6EN9NwKW814ay8CHAEVncCd7pbPFrSDB7cVWsouFbakVABuY",
  "key18": "5fWnf5Z4um2V9WYEZa5ZJpj8rQKivQ3BWLBKNrXsewCGe1Uk4U9HeD9byumxodL8k2zX3KfXx111tx6pxRY8cd4z",
  "key19": "3W6bVjeVFGscJx8TU399s6hmbcdAF7GqCRksosKKY9jGR1GKxaDxpdiFpxoHBnXAQ8GmRRKjd7sQpmsBaUuHSutd",
  "key20": "3YtmyWWbHJy8QThKuJDG1oYNcM1DsCegReXUjfkFw2XSk2jmU9rEfkvQkrxZYm2Jh8fVBAssCW8ztZZTyPafcsZh",
  "key21": "4jwQAwZJWxgPki3ff5tqHj47wYbdwFHVNoaALLPDicseJFpszUqRF3pRM8nPrSG8WJR5iRjRKSfPynwP6omW3ff8",
  "key22": "2mzG5CjYa55ajqi1EWgXttcqYTSkGBLKDrN5BW1MK7QzNiehw6ofWUDU4Es2FpYUaJ1191k75XYtH8h5kwk1jwb8",
  "key23": "3WyrL4vkzWsxk2kjWLNfT2M7ztHaMLcXJvN8eodLZBMB29qYHjwrb6P9AHeXzARYJRJBRWYGeBhMXT47LxgJex9r",
  "key24": "42ECVZof3p79UX7cQ4p4PxtLA1rHgyqmpggJ5JBoMjarxzEPi6Fm5StbxKcjfEuwsc1p9Ft8RUWvcSoYpF8DNTCx",
  "key25": "3btFZHEvUiVbY23RrnPuYXDUdMY3SkiuTWECyx7rRV8UWcRZQtxxRrHad47fBsBDt9b9kjUezcYT5W7Yp51ncekQ",
  "key26": "38tBi2pNvCnB9Zx6F3qapiU4Xsk4KfVP5x5Y1t2FiSQAGB4WC11XXBVYLoJsk3PE2cG5Ho2uarjf2JjzvzKURXRF",
  "key27": "3tDA6HSFhPDkXnq9QvynmUQYzbdEFEx8LmPwxipCwQ4kcX5L2W6YwFsDfubiMdL5hgGrGZMornnqbHnmG8CpmcUc",
  "key28": "Zw7bLxJKEcQnLeYiYM65MMz8tFpnjtahUEyP6UE2w4yqcpLsh7BUbebyLL8uziLgagvbc3C8PsGjecjNmu96mt9",
  "key29": "66p7hVmtcSmgAy6VSsFVKz74GezoVCnVt1bhvV2JPBFTW7UaKxEWUYz1obVHCVDvp3fRFgNroQmRLkhyyubpHyCj",
  "key30": "4XiGjYSBm5oRXAgbGuy7mz5JQLBxaneTb6oWBSQopmyJtDb336Mqsvd4pz8r6zWiWPJWYxCYtBox6eTrfZ7uvYFC",
  "key31": "2iGWpPpPaXieQNSWTwHoFsDXPo7nGAy9dymkgm9jgra1p83d9XUhJ4AQzTyK2zNRE6KpewknKDZFaoAy3ikYsN3q",
  "key32": "zYALbFtC937SFGn3nKzCxCXefV4NoyY8Un3oZMGqixAN4mFMQsyN5rE2c2squSVrwn5PVQSVxCDJ3GRyvNWLiRn"
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

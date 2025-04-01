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
    "wKGju7b4jWwowPPTKfgd2bAY8CUQCTRELjAUMTkZd6NQz3NHyjYS12kF8A9CsspbPXqQ1nb3rUpZ9WoCuGzqmre"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wVKxhn8p9FJetNhNfhCoB7HUbQdY1ZbsNMajFZk9ACiM4KeKWDNgU2AKRPBVMQEGr1iBjKohoRidDbkrm6bqyuc",
  "key1": "RuCfpGUJ5mUDGz7iMA7M4W4zRa4TTiJ88TdXcWowVNJQLLY8Rkb5TN9N9PLx7UJMtZcRzcbbf6JaKp8YJfqDdpS",
  "key2": "5JNh88FbiNfykrWFNhqusEdNeTTSC9XTxRgKoVtzkuBhB7faZezSSzWhbUvMMkqkDyZhDoHqmp6QJEb2FLP9UDkV",
  "key3": "51EpFk41m6AxS9zmR3H4rZEbm5yVckZmgk3DJdDyd945aXmqFUVTt96UACvHupty4skFKA237FN26Qenx3U6YMhd",
  "key4": "2uEky4hNNA6b8Q7G1M2kVXufsimysXNrjqvVYpGhUGRBvmqpEhBnN3jhCmAVrJCnURmLzpMNAE2LQSr7mAdcFY1X",
  "key5": "2oQErk4stMbc2VVscybfXpRrBDcMdch2eeUqZFcQWhMRSicSfqeK6yJPZiDxeqTajfgB1mgG6b4Ky94FEjKrzWZY",
  "key6": "3zcqsMcXccZ4F3MBsQ23RXEEikM9njnU6xnFcRLh5RJecAYhHwDnmeAXQfSVvMdLK21qzbv3we3e1XXDiF47eSMR",
  "key7": "5215ZSYfZ4AasM6gKGcbJb6SAd7VZXSwFDpSZZvSqDRfAPe1F18RvxYFCACP3xGPaw8Vg64YdceAVjGoix3SsXZ",
  "key8": "4LLZAmZRtm9kVqhCpLE6s6UFPFunjwdc78LfUoHU1eYAFcj9UdWULpRWjA5coPWv7SNiBxNTFctq3PmtmPWiSZPs",
  "key9": "BrcYZYScx7nocVuUadcTdUNVFQie4RkADDm3hNsDR8hftbnr3iWG5nZNmvs7pvGHSQtJmqWAbMZMAMA7WZnwTA9",
  "key10": "4gedNu6Ym15pjmXS1kYm3eJ15McBpa5eNrN7baAcpJ5c7k7ogdeGyPmTNaPMrrzrb1ybN2V7Maj39UF5gD3AgTGv",
  "key11": "5u7H1U1ayp8brhsejgQWeoLrL8u5y5LfYgggeNSeDRPdttueFm8m6Aqfh1b6AMze5p4yv3iuvHugdkvMMqJu1dHB",
  "key12": "eWphZ5RuDfAqZjdz7iPyrYdvkiXZnqhZma78QkqXTRKBdQ9R5qrSCDpZmCsd95hBv9Gx1MBu7d1d57r8dkTCykM",
  "key13": "s6aimXC7C4UQmJMk6avLkdB4ZxyNs7daPrMU7SxD1qEsrSDLAaKs1ZshKnAdNEeAGuJov73TknFdpPugt1s2PhQ",
  "key14": "4KghBwszntPyad4Cq1FdcyC9jrxxsC4j7UuGpCjAyEUaJJjhH79sG2C7PsCeqrUHfyFBQYP8xPADBmwzy4zudtry",
  "key15": "58dqVaw3rxxnKbhqL9iyBdcNMNgn5MsTgqqwvcvwvVyQriAPMpCr2TDRi5HVUcCRyEretRCEBiJuR72bgrzgajbq",
  "key16": "3uWRzuSCwNpHhcgLptkbjWNstpVopxfyt9Qybs11YHS3KA5umJusRtmHiWRYozrZXGZWmW3JesZQmY9YU9xWDRR7",
  "key17": "5X2ft6H1GhtCD1k39U3XDaPzDxpKU8i4UNqjscK9bxMdvYiZs79bqNTtEtEa4b1JM8DnZA4XSTz1U4JAoxSavqeA",
  "key18": "43p4KZnXLZZiV6iz77QwunrVvsuvLmf7tDMmT4Ea6RfdePDHyoag4jaer3vEuaDeYqHTdwzgS1z6zubaw2jhxVgi",
  "key19": "5kSfmY4iU4HwKDTsrKWoDFh2wCT3v8HyQAKXep5VeDiJrZNWxd3AExSr2gLn5Ti9nLtiHT6SAfw6M3TgNWVE7MiG",
  "key20": "24cnfeumMMAThpXtv3vgEAnrxcbSQ4MAa8ick8x4XhW6NhY6GS5Lubs6kB7XCzwiFbkn68iGieBVq2xKcPMdDWJt",
  "key21": "4Nh3yh9mriEbdY4heJJWH7apnVEPZiwMz2Ny4Rosc2jU4DnE4ALN6mJejraG1Gex3EVGArtD5vKauh6rKMMrBP4G",
  "key22": "3P16mcgyhpZH8T2ne528ncBeMgQPX8dX6H6Cp2NhCWByznu2ayQ7spJPWny1Rc21WYK7Yrx91tbizyy1Rc3ejGo1",
  "key23": "3BGhycmVtvGKK3778wBkuUNj2czGyTnX27xeJXLEfMZw91w5jS29czV6ALpCNUPYGkyStXYJo5axp1pQ3C2ap7wy",
  "key24": "4K1h4mojKFiqd7ioSe1p4z7YyFZWszzzRc2Jr7R61agW1uTEwy2QjabtUJd6z6rGLXnnranMMEbmksF6J5pLMxDo",
  "key25": "XgQ99z73BUoZPyq4KaRvnWXZb1e8huV38Gcc7jLz43bcNGc9inXu3cx14dNSUv3UfUKfn4DVL346nMiAxmsoF3b",
  "key26": "4cmV1XGqmP665HpxkYzMPJgjYNFUtgXRMeLR6xYKRScdLWyULsc5ithZjdUrb7pzLD1PnZjb4Cc767u8HraR9wLr",
  "key27": "43mMvajDA1RNwmRRjXEvjNSWnbDEwF19C5PRDcq5MX4aP4gUF9arucjFXbKHHxSrc2BgNSqXb3QytqX6LzZqAcsu",
  "key28": "4dkhLH17Cvva2SVbBu1VSxydqwRE6MC6TCU6ZQLMy1ubTfMSWy1NxW3Cu8txjbZbt6gYU6P9RrQJ5PVKjKk8teta",
  "key29": "3SnUQBrJvrrz92GQMLN9RG5ax1YrosAxd3xeihPY41x4d46pszvNxVx75YrQiZQwgXy5b1edzE2bHCD8x9qwtvN3",
  "key30": "3TWUEsC27d3PYVmMcKuPA25B3fYdGCrp8g7tJHXgRQiuH84RJ8G1p2F5mRSHA1M6D6r8FoNth4sS2cFGW4y3Ue1s",
  "key31": "o4NzhV32tmCQT29VtGZE25JSAzJ5CVkQ9GU7B5ChX8B5CPbfoSVfA9dFhRsS2LRS6QoKvVq19q6sXJsroJdHFYF",
  "key32": "5veitiLp3Mw6WFnu6WLLXtPK88RQpwgrje5Yj6FBND8eMyfeC1aYxwovQtuSrE5daFC8Hz8UhRsxzv2MhKx687PU"
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

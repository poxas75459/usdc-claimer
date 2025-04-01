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
    "32gLWrsgguJZZ7dy5GJnTuq79dqMZaJvEZJ1K56enjxJfbQWLYDGNyCcADrfyTFuGFWjfpuYNms6QCMvBC38raLV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qjdWrs14HQCbDHTKUHHh335biVSwVmF8EVZxCgPNs15z4itfaC1yaDEPMoNMYwYXH3WMaUdWAZZ1CwQDx16TENY",
  "key1": "2m3wHDwRp8kiudcT7nEFHmWnN44huyCaK4rqbWtDt6gPDsUbMCRJqvQFqvwL1qV4EhC4zF5FNUFnmS8QJZHCzNR9",
  "key2": "2c8LDiQd6fSgc9cya7h69PD2Ho3aXLMLaG64oGtF62k97yNFMHQw85TwcBG6RnK6WxuPHtiHUKFUWScjd2DczaPA",
  "key3": "4koJf33p7xiMCKNat72p2mUvfQ6NxaVCE33gcyjgBHLQaRhk7e1HT8oEwSv5QNfPp2SsN51SkojArHfmkAoLUYTc",
  "key4": "3nbV3BREN4bhtaSTZJnibPyHy71dKev61JYGChrjG4V5MbNvcdGqC9RtuJ9kVffAqgBxmPdHXDhFzhEKdejHi6cv",
  "key5": "2uofbVQCnicS7VqWBhmsGMbDHz1WKq6kfXLDFMfv3GNmfzFd9GW3sG77oVopmhdbEo1xnX9S3FihJTQkEA5gZrLo",
  "key6": "HzNVdaJqnGw49aft9NzxBBtnAh8iESLMDj2WTKbUs9YcHVsctwjtjprZcN9JW9bXaGQdHr1P5cHHPaga4A3CRUc",
  "key7": "oLovm5GDziADuER4ewnqQdALWg48eHXLQEWZQqP9LX9srLb9awh1q458KACADrisji8p3STRA4jtSRX7q1dNwWy",
  "key8": "fkK37CBiVnxjB4zjbpdS2dXsUHNuWyn77PALszyz6qgXSLBkehYKi69GbTRBVCEYtwMw82wentsx83w7VLBA4fp",
  "key9": "2dxEbhiLBAofteGk2Wdh4LKSC6bU878kobssnSk4XkgjWZEq9v2NbPTPZtqXRYzmRXs63AEBGvtsi5NS9dADZA8R",
  "key10": "2oaMxrq2cuYeqHynDmmpENRzLpsK8ow3s2BnonWUvL5xrKBZVGrvfQ18LWfoFsR24TcZscYjFW8mV6M8auqeMXF6",
  "key11": "uBNbP4rkEm9T4HiZF57LKyyyAgRF5s8wx2icaUxy7WofWZSskSer3qex9eJkrae9MJ4ttnzBFXC9hSYwRhYaobs",
  "key12": "57K3YR8mjNEKodg2CmKQBd7tCohgwMR9oQhLfbpYxaKi69buhWWMXZSy2KHxyLueUDrugVvtqpH2pr9zXKHCmVEd",
  "key13": "4zFDJJ7z7WuPfXsQgJJ2sVWvWz8QoTBU8U8q6McRN2BpseKywjv5dHTdAeiLsimWnL7eM6yTGehJjMZZrBkWU5XF",
  "key14": "3VKafRhwwwWV6CRYFJKPYTWsM95Y7zMVPgcAy9QCJFbsgu5aj2Qnjn3gURuMYUYgGZrHEY32TAkAiGQSL5iE8BQ2",
  "key15": "GwGgQEpzyAkwZ3m3qKazCpmYUiGWbyCVjp2upErNCkzmpYbJcQQKgcPQC4BjGfUrRRybgqXzHLdGECAWvGRwkbG",
  "key16": "2N8X4mMPDohrKHHzxAVqvLHn7LCc4n7muxGCtmAh4kGZT3NkyeeVidVZhzP1QYtx5vV5uowEx6RvmD6XAHyLVhee",
  "key17": "3biYkUn8wgMqSGMUuzdsoeCCiDzggz9hpYe4NJYoUADY3EFBF1oZY6wZwaLSR6MNze6RMNZecmrYXHzDPL9YKY8p",
  "key18": "61Fott1jBS8HDfPfZa6LbwuKvqyMMfGgpSnyjMqFHxk2aEDYrqjdALxmSnGtd1c7Vysud9yRXhw6aPYXyo27Ymnt",
  "key19": "46djtmnHCZpZpp5ne5nXg1yNp39xRTAPTy3FmcWfKBBizueYyGKCcSaVciQLopTL23xx1f6gATuAC7rfEgYyZpJw",
  "key20": "4Xey2xgP1JwK9hwAY2rxCLDzqNwmc1vrZjyMLWEVQiJnVbzKPv9Duhc7SME8u8TcXn8VXAZczr5vonThDcy1G9bV",
  "key21": "YNphSc118rx13CkTBiGZozhCM57H3Zpxeouw79TvihFT6ghH81pAVFPK6GcBM4e8R6qg6D1RDQ9ZR3KmiK1Ew9H",
  "key22": "4dJvf1irbqtmJKcRdSdMyNAwL9V2xzKfJTquUagqLSDHUWYvQAwD3YCkAA3cgfrGZimsnK3AfsXPbHjzfsYTMTKW",
  "key23": "5ectqNsgKzbydoLhpE4ApNP488AEu3Q8k8H5eiuJCqkWXRGW1UNvn3gVCiVNYcS59kknPBTMVzmronHmQ7dMvQeb",
  "key24": "4nFiVxwFqPQBm8rqoFW4f1NCRNbQzYDgjZ4G1dHH1oYMtbTfAEh3B4aDnfSpRs8KipNgpXAWFERERnVPrgvVE86U",
  "key25": "UsrgoK6zWxbJNcYhwRy1HbRo6gmUYosGshfb2WGZdJFEyrLe197gD9b9KL9eCmKWhcjB27U1dph91XoYxyr1Gjc",
  "key26": "hQz6mwqmiHG4jJvVdz86xC19vcheVh39xBLwiBXAnWQz6WJPM4ux6yPXUKXEVpSdtkby4nFzhMn14RmcoFAk2an",
  "key27": "21VNMQw1KFpM7pSEoWoSpAG3ZCh9mKbyquN6jAj76yfVys7vMhP7659vQJgmkBg92iCM5Z7wroaLte5kMuByQM3d",
  "key28": "R1sczLeduY2naBBQst2geA7hzP4tj2B1CxR1APm1hbyKCqaGNrpdAm7MrTffQBqjXCrWwgu77gQPojbJxiYducL",
  "key29": "33fRAHKCSCrPpKG9HQqKpJ31EJvfvVcxSiwWjdFVJi5F1tHfnaKMXu2JXKstPzufGTPtJvM1DguCEmh9KWKxRiS8",
  "key30": "2YrqShURMNNN6DwxHh2yi3JTs1C3Xhxnuio7SsRhvdyS7wSWdusFc73rBAenF1orb2dDUVnVxnwS4ySbSnZdgHD7",
  "key31": "5xmFDKZhBGwUvfCBtpM8DXsw3hmXFUbuMV8wXE7BmDjcmwV25oCceqvsxTp7XWRucUJ8a3mtC3gEqeW7qUiAtc7m",
  "key32": "3sMkeP48BhUzXJvkqxJnc7jbFWNUm7dMZvHsX4FVAhPusyiujpgYQN1VpzhaehUxdUAxRgRzMFVpzeWgw7Ju8bcW",
  "key33": "diCzSWaxYywkkMoEXgWrKgVTNPyVjTZNWc2L5JgBi2SxaaJhTc25jHCeJKf5RGEB8Hfd7k31hPrjSNvHZLpnwbw",
  "key34": "3G4EBuiaSeFat24eTcaJR41JAWBQReMk9ncUz2MyzPkjBMcY5zRtW8dDFU17a3Zmyo1NpLvMy7AJKUrVkPwEEyN7",
  "key35": "5kPUmX2owV2fW4dYb9wfXYQjLbVQJ7ua5NXx5aVgujSn4giEykX5XxEbYxQUfxhNcgbnRiWr32wT1wUoYnFA9iGQ",
  "key36": "tf8BXjvVhbAPACrRmtdvtKJfSmEgbFER7DNSLPKmxmMSK7MBKXqfjW8amHAAwmoJDmaw6Y5tJKzX5Yx2Txs5cvU",
  "key37": "5pk4JMpZzKoJchgizmrjEhXMmGKRCrvTxxZsHNNMz8iwXKZu3Yoj62LYerocGHVtzuDJ8z7ikC1D1MSmCA15jDXf",
  "key38": "3cKkuWs6yiiGctQ2QHkDQghctPGj98Pgvi9Z9QEyX4JSty8cczKMFCt6ookHPiTvCRuSVTrZSx1ZmJXdNeUhyE5u",
  "key39": "4ehMksscKJo7VSYagPa4D1KPxGuwqQJdJafw8zk5xxJZNcZ5c3bUP64DQsgvijZpXLcCTHtTT4Q2hSQY8NB1XY6r",
  "key40": "2r5NcFJzxctJbKWMXV1YsyjunFnyv6SoHgmRPVM9v8sQ5UtcGmCJop4jPmzhHjyH3AFsA3iWaanRisb8W1C3oT4V",
  "key41": "3MyjLWhGnc9RjwitSpiddBEMDRrCro1GP5J3i9WNxCm8h1HDnJnyvpvn4eZV24M4wognsnekaWxLvn3nfqMx2yus"
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

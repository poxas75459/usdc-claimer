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
    "9R1YEYjDEPsXmFmHbjFfqNqqcmLS9YRDvieF8xNMGGEQ7ebL9gFmiGBZSZXx83v7YXPZf8tGT4hYp3uSe65cmfW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "545A9SnnLUdqGedYoDmCRe5TNaPttdmeDsDv3yLtcGMe5mZMrWajuhCd8BSsMV8rp77DxmWtMNTNeLUZUYyq1CyZ",
  "key1": "2Wduqrtv7wSuGWGfpCKGnrTza4khi8fCv1aFzGU9Y79TEf57bnsV1dLVEVrE8dbjFzghYuZYiUXUbWxkqrALiLxP",
  "key2": "2DruKNo5Bbsk5iMoKuM6NwWAuubUoMKa5WP44NkDd5ojkvi3tN3JSCGtM5FyZn8kqsZgovqTpZo1ijToyWXb6dv4",
  "key3": "3WDy41DFDkaPLQNGtSEvTzc1E8cYG2cmmPpk2xbV7oMhk5k57SqP3SEKuoHei1NapiiKHyjBPtZ37dSTJhRymDZM",
  "key4": "2StYsDkVNC361Z2HgL38kfLNaKRLM9pk4PHdfVdWrmJ2aqWHWtmQuUgtGYik7jm6KizqWvEPD3rj6KU9kBqoz3p4",
  "key5": "2MNHufZU2s4eVdgeVS8FNp2WMCvLmwndsXa9jrftEoijkSVR9nhwnfXLR2pb9ixjdVdQxnqQbzE8sxoataZgbbj8",
  "key6": "5jVy1aGUzLoxiZVGWnwTNywbNxeQM29roQyC9Z9gA8SBCdz4gyd8zarnimRSBdBGXTh7oiH6PjPkdMPHxN4edk3i",
  "key7": "2y2pLzC9YNFbWbKRVwmeEtuEkatYjPkeiRiUVgcBUEw2SVbFw6uaMjaKJQUdCVGh5TNzp5Ttx6GMaPyr4EfypGFh",
  "key8": "JwoxPcW8o4eEK43XGYY75MTXWpMXdSw8k8hKcmpMAzQvbBwhFMXjPymtFXvvRHn9PcxbgV3aPrvZGtffTU9VB1u",
  "key9": "28ZTjgNFu6tPemthpaCVpdtuC4VhsvWXfW8vwr9LmrVA8PGivtCa8gByibCk3UAqcWfPczRAuKYePcRxLAmaFkAK",
  "key10": "jh7JWEYtgPm1DFMAe9xAvHq7y19MbbbKRSu22FVu8Xo4QRKh8HsFZQDF1zfKzUfAeqaYJpaQAH3Mft8dXzvLRCt",
  "key11": "4v7KqzzyLVR3pjbb27HzAjyX48UE2a2qyfsuPFoyC5dJSdksYFFFb5ftAvpj1tri5nLsoxkGBjvE3QpHyRV172XK",
  "key12": "22gpLdHk43gG4bUmydkRUxRwDphVDXebSCotrCfzBwyDr6gEqrTYcYPu9kfhC2H8yGQ8ABXyDtpk8ME4cEEoKEc5",
  "key13": "3iuGMD8vBfRHHo8ChziLJju2jViFY7C6154WAPvuGpU5HVyDy25ucgwPku4CCF6FLRfuFf4K3A6c2HoSe6ETQbmn",
  "key14": "48vceR1A99q23tW6xv8GfeykocqEGxHvj3ra9gNzSnLgzZJcNH5Jep5kuyghKkcva4ryPe9T3ziQw56ySgVPHTFM",
  "key15": "2rfLaBCUmLp2HxNKB7ni8JGGePKKqbSrj7sjgSEJ9xSSEoVPcccwVVMPL5Qw82s1BiyJMnWPEUir8KLeA2kXwWj9",
  "key16": "yuwFPV7XsrTE6fQZebCMpjV5JFzqzX9ZTSq1ko59WctJsVbkdGgMZvavnaVAaNoe4osHCCprK1HF5mFrxZLQGYw",
  "key17": "tqbrShNJZRqHGp7S5LhPW6JxAas1ZfDhcSPZF2CByckvzZxZS6PbRzBUCDrYXNvn3JzqUkZ1zNkEtLfY4sdt4iV",
  "key18": "2N1scvdzFK5NGxGBRSqSMf3JrWcYe7hw5BDymgFZRfNunuiueey7FXbJ8s1iaXWA8yL2jan4h34PUXu8Sbxtkm7i",
  "key19": "5Ea5uyBwaq5ynzsBE4PZwJ9TwAuHobZDYDjuz1ZLT8m4ibVcvHqhwr3NxZXebNdXdPKnsjokBE8UkjT5ZVmAVUHg",
  "key20": "5P5sVCgCixmQ4B8V4qKK2KrgFvnmHtC63cxAW3H3WNkAEj2EZziYgwnyb5z3WjCdYE3LT9MQjn3S9oiKUe4wzzWv",
  "key21": "YXidKpdnahxQKvxrEunatH4oBTYDURj7xuXt8AjR6Dr9LuXsSpzUkDKDMVFNobg4KCLEiMoUPCPvxrL71DW1jey",
  "key22": "4CRFMX9n6rutBmpF475tZ68BkTwyt2pxirBWWNt2qUfbnzT91qeqXfCjAFKp7RSqZYuvetk2HQU5XsjgeKtfze5W",
  "key23": "4kcPkv2f1tgoAZMj1Bwo9YWN8sm7nsDkjzY6o1yUSzL6tbioR4t9668zP6N2SAi74iVpxr9ksAdz214sHydDTP88",
  "key24": "3wXEhYJD5qkaFpYjrDnyeuCbsx3itdXbkZjYNFmRayRJrNmNG9CxRQLcQ1Rqn5QB5xzgAsQ45yj29NfxfvibuDpE",
  "key25": "3umsu3PfSnsVSoXLM5t54xDnfs59xmGoQePqTSoz7jsbaJYFcsPP4ojCNyGSWwXoqPrwtfj1SyxaG66zhMbGW31R",
  "key26": "5hieztDTHUQiYNfNv2HXiCy34CCyAbU9d8ub8Vtz7Knw5bKQ8jPrj3cWamPqv7TBcF2enc1WqxJCVk5oxcDb9b7A",
  "key27": "5A2H1kMNYELy8PUDrNZwczcCYNJUQmqhyCU9YLv8Yxcs8qmNW7szD37jyU34dDZpH63nA3NXMd7HqGiqevNCwjmA",
  "key28": "3myZwQXw85HMNd7Wgv4qcbsK6Cu36PJatUqa2RbXz15U1MnSGM5PfJ8UeY55Xpo79BtzTNGqQGTznUr5SaxRF6Py",
  "key29": "3kucgx5ktc7n3vCMRgNQ2GCjakUmf8heztbQaazNjPaBFhVgj1hPCTinhLehgcMFAiiyqB4WvmnTGLDGbWz9gLZb",
  "key30": "3CdNPKnBDFwUxk5YH6WAzRLooBPTzkDKmEqsw2jYGEC4tguU1t7yieh9ZuAhrFMnRPnjNbhSTo5KNNR2optZFKLh",
  "key31": "5YYQEeuHfTwyx2nj1yY24QWwinQzyV5DBKnSAHVMHyYc1KktenpsNefChJ3xtgdcMPry9aAxhUBLyeZ8TqDkQzmQ"
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

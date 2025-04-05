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
    "34ihoTifHb5PrMhjrsQ3cdgx3j2PZrtaNpZkEMxqVj9nx6fEcXq9do9z1ZdqVTzpfk92NUs93dgQ3m3K5AeiGQK7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Cfo1eJRdJoPN3nqEkPWcEirn3hv63T5MXpfusEB7Wj4MQfXQUSehimZUc95TcTtrXK6UFjCRdpEmQTU2xPtvs6w",
  "key1": "3kHfKC8v5iBkM8sTfC4FhKrcrUStXj37bfu1YEQFAje4dJ2wxxCFKtK4MmE6ug1AfwG8jjRiVu45vRB3gPaBkD2W",
  "key2": "3GNREk7zFzK12s5Vo9ucpV4RGM8bQVveSgqYZ5s1eszTBbjTmBUKTJTxDVfudHvd5Uy3TxkPb2aNM6YVifQ7d6qD",
  "key3": "2qywVRZEFgkk92FsNRJZyeeL6AJHi8oef2XfMAF4hnGGsraJaNqJQKfwSAvUMhckQHtxkc2YVdjziuWK5NH6pvFn",
  "key4": "h7ktiWN1J5CYp6xFT2SQJTGibZtwkukcKQ4e93cZeTv7y6Ki71oiQgbnnAyXhWBCwTZnBqNBpLvMxsQmXLKJvyQ",
  "key5": "5A9njC5Qg1tGmtK7jYdhodEtWNRbdtpBkZctHnDJ17ofLYkX56AFJ2eTsyNEpkt8c4mobvixxoJF94yhyWGrgQnB",
  "key6": "2UVfDVvfinmXSrZpku5QwYgiSSs1WkdRHKEWqT6oNKLzHyxTNXTHFJVuWSEzdNYs24FJ7ZnasanBfipuTGVHpvSd",
  "key7": "4Z9xNFRicwKaahrEQqLybx8ffTFdPN7rRhKBvJDXD6HMKXvswKD1d9J7o8jFAimTUnPK7hVvw4k8L5ZrbqzZQxs6",
  "key8": "4Vh5TgNaHSi8We2kQbUTUv6zPFR3XpzLjniZ15K7QhK8GUF5GWjnvEsFAwDSHwTS6ica1ewzdK92f9s1JTQGdcfN",
  "key9": "pDjbr3XodLNdeQkLmjPakzU4aL7DhowSJZB6M9sJKjA5YQAsitgJGiQNnkSkbiyjDeHKiJuz6MFSwxwqD7eR8mG",
  "key10": "Tft6G66cEovEaf3DRWDzB38xFwzUvL4FdiKRcpVXr277wYnHuCyqMUHjUifjiuAJosGLtLuvfiBPpoBAhQForBg",
  "key11": "4ycAwYddBSpSr8rb3r9WxJKfN71sGDzorGjdvvCFGFyUsWn5qMXTTzyGkF1KFAC4nQftJWbG1BUd8xAcupePMGgv",
  "key12": "2YAvtVAoE3STRMW8PcStJYa2qxSAWwHiJshPimS7tG1iVxPqn8qpMVNHFXAmKm1QNMy7UW3cAKcobLuoe3WVDxNJ",
  "key13": "2GMduiVpRScHfce5pu5uCr6RNtYVUaKBYPNz2XXHpRvpzP6B2NXG89GuNoVpwNc57z7Mn8afoiZhEeRjgqu32Vks",
  "key14": "3GAMRQWJ5YHgxbn5vb3gt8KuiA6v4bmepNyMt1hKiTZuNSWzBnYujTF6YKq7cN4zT9ituoywC12sDWNvxBUghG6Z",
  "key15": "4bgUkKYoqkqioqTz6zTkMaDVW3Vf1gm3hSJH744449jR3VA2BVAC9uQ6BEkZjLBxcL5FcPqXJxqiAjK2nh8Mgcmn",
  "key16": "5nhUdHCCBhzDXai4pCxUjbCnRuyo7rBqsZNME22JQUx8kNUrK8dmjr7vRLEwieLoYTX88U8nBArVJVfx4Mofp8kC",
  "key17": "VvZXJb36MEk9FsSwywe6esAeAbXxLgQHyqWsyEfBUJRiDCPf8YPCuo5nqGQdSVKGKTXXZYQW76QVFtuR3KmUE8r",
  "key18": "3akbF5e7mcAjhXWLrYg9V5qWT4gzhiny3C3e2VWEWKFYi4GR4ynXEKYbMH1jApXNa98GE8fuXW4PjrWp9mmw9p43",
  "key19": "11AR3pStSkM7wUPfDNvFm16q4jKMTHyzFssaEfkzC4qfDTaM7q7PTCu8gbfXRVXDLqMrQPPCLsxk5t7eQW8mEJc",
  "key20": "2JjGzLwNAm9ZPiD8aogEwKHRy1JRdoVTRFJ9F7m9JfKWtYfJR5XSZnVVRji9Uoh8AQmCETP3gR5JFFbjYAu6RzfF",
  "key21": "2dZULpLVnGAbbqoj9YmyoSQnZL9MBxZEMDjos2fXtZ41htVsqsxJVyuJV7RzqxUhSQFQDe1MYo3eJ6Dgx24DjZdr",
  "key22": "2D5RvVDiYAywVJNczQxnxjmANMGQJhnKLxRdDBhNestS8ACgC46hygKzPesEUhTeFYVXSZLAzb6RdAnAo9HxZXu4",
  "key23": "4dUmdYt6TbqsPSdrK7rhjehgnubBnKuZC2TLuGRBqnXe5FeswFca8mxqATst91RNKi5Qdn95MGLVdoAEe31nup4X",
  "key24": "yddkSw9bSBzHDoqfGcXsveL4teXGX36otzRSrtYjHBE5dRyXvwWVh24vjT65mQ6RXBGZ4Q5hfbXrPg5L9AvQAgR",
  "key25": "5CxNov9x7gspqrt4ATyuyjkYKx6QBHkcMtzrDYnKwK9yybVeA23dS7a6UczVoo6GycxDCD8eVi1XfxSVPXwSd2Re",
  "key26": "5qvVcoxRmcS2TnmmCTwdeTuzJpkZkd9Np7sMfLs71Rkz2DA182PEuHh9XrDsS1PFn2P4vmjJNq8ttAhgjczvdivp",
  "key27": "2YxjBZ1K8fXyxLUniLA3dJeoirq82mKoKZpG4QBVzKfaBiFisr7f4R82BNbAM85SGsZ8SG7ddvFX1YW4MZYgPqsn"
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

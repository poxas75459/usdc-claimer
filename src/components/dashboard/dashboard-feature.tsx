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
    "5J8tC4FSYngRNPvqqNVaM931MWC1kNKzoiXvWVNeFrrw3BUgUsrPQKD6sB3L45MYo4zfWLarLGk2tuVrh15DhsS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59FWR8cgVGrdahdg3BL8daVJRRgdbcEBWMkijHdrxY5YrQoP9hBtNDuiFqAktYrxiY9JM2uUbRjG29jGhQQ2R8an",
  "key1": "2GWfE1a65SSoSvhkNCag6FaBhqWT1fuDFKY3hi8mDACEeRqizYdsHPH8oDTjFg2cMcguvEhLTSAteJto9mZJ47qz",
  "key2": "3rc5ZG6Q6Xb9Q6aefujG26rTQbWfd2NsrVxCf4rUanXsdeazAKfs9aXPjG9QLfD9HFfmDYTG8NcYpBxrx1fW5D6e",
  "key3": "4xTnj37Vqz8aXGknpmC4cdbaP6FgsreVLhmgzvFp8PdHBcPFGY4fnTZcwUqti2Dt1mbyVkEF1XMcqu3cwuC6fN18",
  "key4": "5XkFcbFzpo5xEd4u1BqzZehU8auNEB1LGahpqwckE8YzPvuc8Z4R71rpSV9aDDiJZyq61id2V552WjvZDUhigMCi",
  "key5": "4QkYtHEv4dkZZX5YJqVjq7V3cteyosGy6Z1P5VTpFgcp2h9qs264pEGAPHCG82pp2zBHDpXwXxDcybGXrXp4DNvF",
  "key6": "2LqzVficpzjgw3fE9z24LhjWzyZZ3Hg1pvGwVjDQUQB8SVon6hxyXhAUUmCd2mibxVYLsrg3bwJCkKWfi6EDjNh3",
  "key7": "Q6XPZp7UGKWwCYz73TmWqT6AUpiDQLvK2tEhZRa7SvPrPBLXTopAH6cU6Akk3CydoZp4fpb6UaS8VRHcWYZtcdm",
  "key8": "4LuDoNvjwD33tJvf3eNZ3v9PBSWfy1eyzxXh2HZg3GnAd2ABMicH8w2UbZwuK8a5ETtjzEyM2FPoJRZCFBKYHfU5",
  "key9": "3C6ptzwG29FJwhbyZDeyxEXmBVdNeYro8kVBszSdWeqw97Szn9wx3wnxkdjk9B3RLpU16EGkpYPZfr11bAAb9UFU",
  "key10": "5fgoh6NpSCJwyhcB122zjG8MMAeHAvr3T5dBKYGtCF5uWhnYuvneAZohj2U6e7LMGq63WC2Na4DomBnYPwBEuAqN",
  "key11": "47LCfDEMND8q4ztpr7q4S2i41VaXWpbnDdFnztWjDofZxKVuaMAJqgkrg4w9i2VXd6onhTENEMj3oBcr23zYE5GX",
  "key12": "4XuNcWM9GyH4C5kAAaLH1yd1H6ogdZAMNF9ERB3qTDnhmd7kjCqwfvhk9oQXbRiAiyTr1P564DAxMEFsvXLCEYHc",
  "key13": "29Uey4Q9MqyY57CX1e28sztV6qMxe1MvDeVoar115U4aUJrKKf5jW4AZ5ErNa1fSwtdEAn199z9kdadX7nn9VeJF",
  "key14": "4uD9favis9xnr9p2k4ZVfuyCfAV7aLgTkfUZRjVWgND8v9urEUVcv6jZkoimNZUAmmeGtMDjPNGhVmxsjH32LjHF",
  "key15": "52uGJk3ocLYqgwZMkou3wXU2USxwhi2H412kF8UZQSyVvVYCgK8Qi9igzi67rmt2T98BbX6Wh3MfcDioe2Zx4HeW",
  "key16": "2JtZgZ5w8N6wfxM2w8aLjRLgmzaS2uo4CNtp1777bwodCQVsHBJ3PHorbfcbeNZuFLEWirb36jdniwpjU4L7phxD",
  "key17": "5heAqfYWnCei7T9aQ28hR9W3FrMR8eyMU4irhyeMMU5H9ygr4R8ThHW9yicn2FEWqXr32jJiFcZVMdXzJsPFLP7B",
  "key18": "58XXreGGUHrKUZgF5ewDeVg2H9kr4Xq4sQpqjCxkgh4HK3iUp2fncri8n6nfpRKWfSntV5RJWHXWJYkdapRHiHp1",
  "key19": "3WtHBpPVD3DaSXqCVpRF4jV6S2mvJbd8gyEXEPBzqYyi6EoAcSJUumK9yKLWvHy3sbhAJcUQoE5wHVq4uuec3kfU",
  "key20": "4Z4Z6qU7igMUaYWSosHrU6PQkGtM9wSr2xkj3KaqExY6hqaJqAJknzPhncEYadhpvWn2kwwYJKNwgKacXYmMCYVj",
  "key21": "24K5Hf9vwFq8Bz5Axs5pQaDcvvMp6SxMfEx95gmfqQmuBTKs6LkkRs3gxRqZVW3VUKd25sGHmAuZ2MAcQ3aqHZNp",
  "key22": "ErJRAEBGsiim1VPT9WRLGFNz2Cjg141Bd4yqwhnRe9AsRpJZGJLdCDNdw2RqqxFtLGTXzZvVkb1nuE82vPaSdmz",
  "key23": "4GEMz1qnfcvTRvYvYbaDPKi1ttDPYvgLkb6Ga4yscUKoYHSQ28wNsxXdsHVaXvbuPkC6rD8rJdVLpyjMD9XDuiGg",
  "key24": "5wbV88ftfSfUVBUDSjESZiEwPqQoaP75Eu3tA7FYA7C9CTNsm64sWBMQsK8CkJ8vX5XQMQfDTjzb4a27HnAfrX19",
  "key25": "5DfywVD61nN5d2rz4k85dDMbwDNAB94Hr8n9Yk6GF7PV6kcyq9CMpEa3ATg7UothwBNiHUyDzQWHpcLS9VDuHQAo",
  "key26": "2xxtD4vR9oTFUzKWcnLEcELNuzrMW4yHR3fgJWMwfS83WibSVecFLu7dT2Pbg6gSW3e6bdMh6wvPGc5LEL7V873Z"
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

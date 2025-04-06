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
    "4cA4YFKtNEFUdMRpRAvL1qbB6h9V47jesSWp2J2kjYmoUdhNEH9QxDYrTfHZh56WEuF7RLjpaGQqbWC9Ns5VNdYS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PniEzDHTxVg57D9KLYjEXhTGEJRYjQxkZLKS6mJdhc6tsdjvnLWeVDTkdNDYpszXmkA1bFGQdUvH1Mzc2zz4FMH",
  "key1": "4NqwV9JAEcuhkuTdU7NXSXim2NCVKADDDZ9DfT8s1YWB8YsenaPTxZ1oMmQ3MNBnJwDvCbXUFgv5c8BkzV42LVv4",
  "key2": "3DPcWb3ThgYgxU88kHbAL3Pc3tJPro64z4P55waxKux8gg4iS5sRJEM8NmAsZwnzkzXTEcui1GbpPAMyCTRaUmxX",
  "key3": "5jNfHyXu94C4iGbBDpAdnVwVhfnA5CMUZgX5kgMfjVkg9pBqhbvaGW2x5RzgBQvMSPL47Svt2MGwNQaiwQsjTY7i",
  "key4": "5t7NPMWSX2VQiswhsJ2JwpPQDKeXZA5AstYoU7EQ1fS4YSgZ1EDqU5cYQjmyYBGnkgm23DEReFMMS3RuBUSMWzSu",
  "key5": "4G68iUwDfCdYBS2tGzkNYhYejL3sTRPgMST2mq3UBiRUqXirrm4VqS756JXaKA16AweHUj5Pt8zNstDrea6BHast",
  "key6": "9MDYYQe5rRCgsSDu3WnVedJS6CkNbSax5Sap5hkJUwFwYLnjyLZXqWEKgeF5jfCHd5pmsGp1b1YuKWQzwVLsWYK",
  "key7": "5WiTmVBeLH9Tbov7miZ5299xhGfDRZA1prHprzDRNU67bUjwjEWRqmcehmd62JAza4Eys7LnXjSbx3sL5k67Gtj9",
  "key8": "R82jiUo3xDPTSfvhrUyKbD5jiqq6W9UB1qqFdQ9NJGkL69ANnRMy3AGTn5W6FC7iqTXxse1bktDQSjMK8vnzoby",
  "key9": "4EjokufHkCC1zjunQzGsp47JXuXKNFDQVwLXw9AYpiTM5vqRzqEcXGWEMRD63VZp3jxin5tz9EsKwhsjNnLghMHX",
  "key10": "JdSCnL6Y1mc3K9SDXuTQsrqgswA1k9PCcoZYmNhRqDwVweq5xphjFYvphN5RTznj6mpwiWLWKxVgwGGiVh8zNRZ",
  "key11": "2FXmDTxUUSwiK5PmDesRRdYQ4eWenVSLW7g2EC9rDTYToVUACSi1caaFbHzh2rRdR6v7KzN4FLxAVb9GbESBynSF",
  "key12": "5GtDYDnvkWh2dyuVdRZES8KCxe3RvfJa6GzseoEXFhy4ViC2M8333ppnWhopDCDXW2Ny5J7wsixKMGHXJuFbwFsL",
  "key13": "5scMsPPbbwpA5hg14CnXCSqEvP5t8PJt3gMp83e47fxeBkrGZsVPi33XTwKBJqWxSj2g3W79owMUEQxo17iuQPbu",
  "key14": "3mwpESetFhSHJKWs3LJw7LgnEXSLbriYqwF45Nd8Vw3GbrvpuhdLcsJNcqP6qnC849M2uX8k8hpkm6qWuVqmuFbs",
  "key15": "5BiAFVarPfKvUULnXGTWLijaUCAxq8dn89yiY3XtNWLVce12UJ9WbHdg6bQ1iuQrVf1XxjQnYhpPEWaZqJr4VeKv",
  "key16": "3peMcYemJ8aQVGGBBzDAd7RvMrEshU2YQaCKdDiimEn6f7knEZmqejgCmy1RQmrNhyf42PGaGuRvmnWQc9NVfwpb",
  "key17": "5ukYeA6ZYhiasJCzu224aNpVGGJCiJZDjsom1jREuPv52cs9H8GFRvwBUP7E98Ehp7EtRX7AQ4Z3wAQxPFcSPQpG",
  "key18": "5Q2adMfBFGgMwst6vTQxHJDms3N67zDYwy1a6XrWKjwHemWDrSFDc3UdnZFBteM8j5moVvuP4MEUDWTWZmSLBbue",
  "key19": "5fqyEQvL7C8hMHwcbErhQVw8BXD8BWaDH9hkrRi7fpDnr6znQ6NDqZBh4LBxpc7fUQwEucb7inJw9j4cSExvLr7e",
  "key20": "4iUwbAyULxYTZu139GzVjdotXFdBxzAdnDqE22NqKxjzwS5MrYTL24oLvFm92Zs9de15e89Ui6RZGya9UMrMfev2",
  "key21": "2WxuKS4JT2e3b5yoMhNq4Bz9yqq6yoSAnvbq6wKFnEuYxr69wgLguE58bvWw4Js5RbTh7qQPwpWL8CQxGiweyP1W",
  "key22": "54kVPZKivrDsPMFSeCzRnbobXMWeLZBCMSRn2rcPkkSdm12twAtnmFj915FE9BDzuqTSZCoua8Bq5geiXLSLWDWK",
  "key23": "5k6PpJZGFke4v5nPUNCHaRrTjVwNo43nLhb42z2rTzqepbquTqSikBLejJbBBykZx7Top9CC6u7ac4Un5Cgd716n",
  "key24": "mTd7qDRDwxW8C6paJgjT2Cs6DKTaFBofYFHWLb43apYSZLkpXLauc8QUdMeQGqQw2hVKL73m1ZwC2QHauigWtH9",
  "key25": "AjVsLPnfjMQ4228wjxvBc5jnzjgaVATpuLPz6AXTdEc4ZvH1ueS2jow5Tyn6Daqjguxr7UtnuJsDVrHtECpjW4R",
  "key26": "u4qJc6LK2v5fP4Q3vDpfgN5Uz5RgVXpq3DeMrznkzfPpDmmkxjhgnoRM2W1ASA15LzppjPdK9N2Uj9ji3V7fktQ",
  "key27": "5Xxdc9FQm57N9LveSjTRJGYSfS7PjodgtQJUGJnMt7ZM1XcWTFU1P2uVgtfdNMmG6CtzRbzP71oxdtnfyCdgbuTB",
  "key28": "3jG6Lbq7MnMRuMqef1N4GifVVfPqjZ9HM56kmvqMLrbUn5M89FuL5QZMgxsc65rF1YqQLFR9kq9D6KQ2rMgZ88eM",
  "key29": "41fcCx2DVSkYfSryFoheZDxf6wBovm6GVcgmPt1jziU6AEQKwVR9ZKaDuodNzFMWbypgrsc3cQGW8G3RkBYbDpFe",
  "key30": "4TyS9MTZs9pc2ddkygJXhWXa66qJXGPxyrRX5t7hPZnyChXhCB3umt9iDcx3YjBiZaxgDsmhzjGYpXzerAycLgUz"
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

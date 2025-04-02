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
    "4rwVJpXpnHxZt32yFP53XgbqH95SMZnXSsJeR9ETWKbw244yotNScgyuWcLkisUgXows762nASFLhesd1rMYLfFH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xLiDZasGhm1sNy48vVKyfJkr4u5FZyTVcm3PwD8umndMzfZHD9kr2hZX8sVnTiukzRCtCdTg3aC7Rigv9cN1J2Z",
  "key1": "75G3uTtQezY75HqhCf1ZvhRmsJcGf9ffbZ6STrANiTVErvediTzqztJwabns64umY1wP1LYJodgnMdNpY5pZ9Dn",
  "key2": "3UrMQQJvheFAyPgdkMaa7B6r4MWC6PjsQR5EWJPv6sevd5tkEsvXD2SrRcvzVn2bP1zYERHoAwDa5CMEzMSaqhNZ",
  "key3": "14iSoXemVoyHLYMciAzAKafCrh43SGZj4kCTJtiN7Co2ZyVWsrq2BLRpJDe9HMxdv1gBdQGEKUjqcykEM2Gkmah",
  "key4": "44WvkZaFAm5u3tA5bNe3DAovTXwp5Jssk94VMkE8nhScrmwfdsraFgn4PX1xQ2oFc62rPcta4jUkr5t6jVf2oB6b",
  "key5": "4Gf9apqMVmWhZ6X8mZirXdeyrUtr2GtpDxDygVHGukCbSXmMJFPPQie4aH1W2z3kH9frLQMxQvoxqmcApUzxAj6B",
  "key6": "2yoFLRchcWrUG35hQX54Z6SxmdCzhf75FmPNCcMyuszMxHKxpwJdULsnjYXhgDm8ApL3g4prrpn4zhcviS2KvvDa",
  "key7": "5N1C6eBet9Nqr8JAc3vQtBWqbHh2tmUXiZc2tJJEe4gkUDXkKoYynHnUG57NJTDCpBXEMRKkX9wB4UEJUmShANvP",
  "key8": "5UPkoFNLw8H4AYzhxLkWQYW4Kb5iCd6zV95diRATucYKRQc1Qgqwkbgk3fuyvdNs5eZgfd18NNf9GJBAkn41zGiA",
  "key9": "5UFwYCDQNeXpVtPYWVzgRyidc2MabMjPgs9nr4SJv4fEyJYxs1r5b8jk1TLYeVqfLmKvQb2RcKtGtvW9LG4q93d7",
  "key10": "32aZX7svAFPqqAEpF2txRZg2ko6BcmkYkMqH66ucpgNPp7LhWFHYaXKqorZC8ZjT2EHqqDx3ojjzSwYQ6m2kaFNJ",
  "key11": "62vXZpVnZ9YgUTjc9ZkTDLnvvefdDsjXqp8oY19AeyZ37o26CPLKC23GhJfQVTuXRcZAU3DVWFHuZdo1gmAUNrhH",
  "key12": "52sux49d6UBVc2SCUbTFP7NtY1eWD43YFg7RyeVkevCaWcn1wot39581Ecv69fY8RgReexs3mUhEg1BK72k3kMbo",
  "key13": "3hNDeZnBxeN9UpipP2pNSyADF83S9CHDdDRdLvzsBiLBsTYacdMwVvwsW4XcjqCU9Wx74o6pvdTn79Qidhap7gkq",
  "key14": "8FdieGJmxSc4ng4HWFaeDHeHFh65sXQe9SeUnyngyTF8mMDe8Di4jqNFJXLWGYFZL5KxfPS4x1SYaLYcGKKbKgf",
  "key15": "2zv2zSWeXNZvR259wnqbzqsuFZ3pHkHEYofdfPcxDWMhA1mqHzJbaZxLdFpDwU81hAoFTCxQDofdb6GfMRu5Dnmn",
  "key16": "4aFeCz8GLio46U5sLeSWk3cbHeEnGb8WyLwkUm9VMD2RcDscS21DtRC2zXStwD5h9LfcNXTWmopwBVgZATeQ4Edj",
  "key17": "4Rm1MGGacpQU1eA51mx5fEFoU3LVDLQzjcBEu4ZxyeNJXLheM6qXbyhUjze3fguR31YXanNhCjeUNSw4RMewggjY",
  "key18": "W7VhVzYRHKGqLM9Dhb2B8c3Yx5F1LC8ZhnG9iLDKdJcPrA1LFThpgLgEG4zn6xoAmS34CvW6ky6B4jXgLA7DfsJ",
  "key19": "2hU2HWugBgHXdGJz4n4NqNsVjWQsiWSeEKLu71WLhshfHubNo2jViM9YNZucYo5LPeLXQgP9RK8Uy6JBtDPL3o2r",
  "key20": "56m4tzg5FCnpC9cuT4LeMaAXCwSwdAz1q7vA8Gs8Ha7i8fYWDjWhhC5tSLxT8PjADXmFihsejzQDjNyuPvoNWSGd",
  "key21": "5BvsNwPSH1M5iUpwnhDipff7BpJhbHcWixh5c8mwWDqvwXaXyzMD71SSR27vbbwFAdg4jHYMcbxsF1V7z1ykjXh6",
  "key22": "5Wvx6oBA4JqXiDYrzNxuFooFcwsEaeYXyVJJ1TfRgzkLTLpcYMkLKCnfUGejFDw2YrywXSbMJY2BDATQcF1AtHLW",
  "key23": "4jppmBQ4T4XTgX6ZhexZGLmw3m455ZdZJpdp4arqfnCbbV6GTxVWp7E7arw3bHTayx5rpTduM4qw2bwuzCYbDLoC",
  "key24": "25Wk4j5cJ7aWb2MNXDjwS36PdtSBFfNZtZrsG5qkkXj76SuTaB5mpH6BoW1joJBpgxasnzdJWHkGESXzJ6Wq4DZm",
  "key25": "2Djerk86HSgN5vYxqFYGMzL4RCddrkidsBHkdRpufF7eiKRga9tfUCFZuieLWrDRvNz8eLZcom7ApH9ZNNtZDHYr",
  "key26": "mT8K3Z8QzCm8BkaBsbEtCzXSMWuAkszRh1Aa1sMCTQyyUNk6gtkCKEgtFQ2znsnvqN1qootiHmyFY4GGGExraC5",
  "key27": "4B4ynVS6HKnwAhXKkhwU2Z3cAExx3e6jupS9oZYLjsJa67gtgG9EzZ3MDxWx1qrhnh2tgyBmg42TCb6j4gV1ajkP",
  "key28": "2LrJbYpokGbbihCmWx5Hhj8xTpTfgH3RQ5w58VsRZzmDHbhpPHDt4zaxU6UZxoXSkVTruCXTafBirEMX9yP3aimH",
  "key29": "5LvCxLksznAPGwYBDvtYzUGMius33U5p7wtSzMaTVgi6ZxBUNRP35Ww27TkUKjmeB366BP81Qm9teRRUd6wWtJBi",
  "key30": "3hW5TKHxSfyG25VaRq6Q41GPxN3aWkk1Dc3VbHhntcpSYCTnDa9fwfo3aGVzrxUitVnMm2mJkd9se71DoQBjdLrD",
  "key31": "5bH5tx46xjcBX1ec1r5ycApv3VMW72k29x6Xkr2W3D5UHZ4xVwezC9ZFCjdoaKpswhiThZ8sozV4pSJuhLczF6Gd",
  "key32": "3vTMhM5y6jJ17qFimz3ibRLTbA5WxW1ouLVK1hAFPChFkAWEfQVxZpHVwDN6nxoY1vN88NXfj6GnFmb4hpHkCaKW",
  "key33": "4LewybCcXhPMsxPXaf2T46iKcqThPN9DVjqKy78K5nMFuBTBvsnQUETn9Hdqv769YiEUWhpyVDuLYMeSzRn7tnbr",
  "key34": "3q6VmjaYHrJQeYv3Ze35pyCTpKMxQVBsrAsWiWQ5HRSTG87vbHgednUUAXAzfVfQVk6ReyYoUiGTw2c8pcwqwSng",
  "key35": "2M8sG95L5XjtpQs397Z4S6Y394TxZ4FMGYUzWbsTRFNUJUsaWcED2h48wqVDehGfKU8h9vYbCWZ59L3hup5xNiD2",
  "key36": "65H2Fq2ssZqXMBkAdM8M6gx8cKAhg5yr5zHT2KoaPZNEDYVRzT2tStiQwRDAkrYapRFSuWF5J4wqYeDB6UUNN3jo",
  "key37": "2ZN5WoDN8cYcPynDkEXHoZBfTWp1ZimPXUukm5ZkjEgD3DP9NH9vpiBbCHLWs8R4VVgLnUJsRGhaZs6dhW2KkQ2N",
  "key38": "3wz5jh11EQ5fEoRwsmjFRjZgTt4zPzVmq7EhTXaa4e4g2WhpgQTZAjGaxqxGtPNVGLfezhTZwmD6doynGxMouJ2f",
  "key39": "2f32JuiH2dG6aGCwBmCbRJ2VjqmBB14ekMo4HfVZH4yXgM1dqZccwAm5JGWaXkHNztVLgq2ZCmaByjrXc37Jf8Hj",
  "key40": "3Eo8WzzJ4SZ2y9o8YSG724yAxppGJz9qfzCm7n8VwvHrueXZRTXwWMew4dbNnqRq4HiVPxujSq1RHiKk1H55zUEW",
  "key41": "3UEV99DBYQJJvGrnMT5XZW63owUwdYzbWC5LmoLVmJyMBqgNHXPQXndxtyYyB4VRafSRk4ZqrkS3w5hPYAGAekSN",
  "key42": "ReDioaBcKKpHzaFzfuc2X6XD4DFBWd2kaK57GSHJ7N32XjTRwyRi3q3Nhym65FjvBNgLt1M3yJsc5hig45rsC52",
  "key43": "5mEvgxSWEjBithD9M67nPLA15gPcqTJVetoJ87h1eQGL6zMuNh7UiKangKzKV3vo7n6nRiY86ymmroazMq5k2YdU",
  "key44": "3vSpsz8JT19t9qxfFPi6g9Dqbq3NJmv4M1HjCTtiMokbvD4opmqQEYCBxs9DEzJAFe7pKvQCSvvnTh2u21rYPxRu",
  "key45": "kjpyafRRW1gn1E18W3PmnQ8tq1T11Wfnhq7Dgxa3vyGr3sdCfbpr5u5ZP7DseDpH7T58fxgkdB54xa4iCKeU842",
  "key46": "2LJJFWY4jLz6HAnaa7C2PuhPQTvXdEKBdTg2xoBnxBjG29fs1ELvRPXRcpQKZCAAmMyuVvpSKLCR1Nvi7tvmnJ2D"
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

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
    "34AvJryMwGqvdYYXEMZ1PWCP61SKcGXSWuHuFd7c8ZX1Yr86BSAnkKNrCTLCiKRY86e5wLZWGgTFmaiZy67uPiqW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gCHDrhHuk1RhM6ekMoaMs5DmpCUnrpaqmfk6i5iLakMmTjrfHoveEnYT5wHKTSGbBLuPVepMw5DYDaMMfgcEkhT",
  "key1": "2HE18AhA7x3LeAFmSfGdKuHW9sFvMWFpRiqGTeAYLNDgXLWpVyjKtkZ4TyK3kSZKQisrLNMN9bGqxxCDgotQx52V",
  "key2": "zmp13gn2547KUreinoZ5NahSDM3VcPdKH6yJiTs8PXvMCxBBzaQLDjzBpWre7S1gNa8XQoBLzwa6YH3BKbidgUn",
  "key3": "5gXkQKXuohaWLxPm7TVW5XdmvDv6ZKMAZ2KcZKHSUWtZrmkoYKyERi8mC17EUERdSjJ5paiDzoq9Dj2R4XHzoNNh",
  "key4": "5vprsyKuq3nkL6ELuvkMTxBPpQ7wrttZYNjgEaDnPGtRTEzE1uUCdXdtBcRD7z1BnJaRdXUdqb5eV4pSTrBgS1AK",
  "key5": "sRDXWuwAYMVRz2pfKeN3BWVuz3ugdBmVrv9FznSEtRLrVq78wrrwCDH3s125CX4CSXin8jSv4hPort51KzHexNu",
  "key6": "2dgU5auxJgt7iV7JHpnycXjqJuMLw37u369aKzjeTrE1dpPArfKdc1V2ckM7bB1cEZWvKJcHJ8zqdFQTPXPukjPm",
  "key7": "5pieS5kcQTAwd1YaWNFg6rrCHaNNYX6ndpnkVvVVmSkW4qTpyx8pcPgy7ToLe1KaQY8ZCbfF51BqMoE2fKBB9pdW",
  "key8": "5FFp9dA8rR2vNTFKDwZxepPDDkgKhoWcDTQmrzMvEoTpcDqnShm46atYuAXGMdruCFGJ6Y6DATr279YJUrP8X2rP",
  "key9": "5yTtTDyrex4ZAMkSnp8gSrS3qZdP9j9MDBpA6gwsQQAwZouU48BfngE5BtJgaGgj3aha7hr3H4C7axnjPcZkg5Po",
  "key10": "4yNJrrPusaPZNKuPsF43xdofwbFh7DzCBM7w3hnbq77YMpfB6ddPYV9dhTajqCwbkc5ZL5KjvV8vj9dJqV8RENkS",
  "key11": "2aYATu6xhNuBHHAow4iJUxnFuCcuZT5pWQWLpej56HNduEFMpivmeVAqGeq3JKHrXXKHQyWh6oFW6vTMojEXGxwd",
  "key12": "geNrzcbRXJTbnJs5SRW73Wd2WwXouR18J9UwG1JBHJjQwVfMUhDhBPKFnCAuWUtHzfPNENRXSN5BCnDhFuuaKNc",
  "key13": "4qd9cXsdgajJ4RWKvufe79azxLLoYTUAZ4urobp99wc1iKdPk2HpFdcpgKgkcoz2UertyECuedUd8ULs1kPBg4PG",
  "key14": "3XG3aU3agBJbK3gKu8eaMue92rcaoTyk6ZdavHCK8DSqc4W9sEQxhDYMUhan51sUevMH81VkPLHRGF54HQ4spVvp",
  "key15": "4CfAUGroNqZ9FVkLbp1BYt1PdEJRkRBynJVtFkUz5YYxaBuoa8SkJ5e4coZvskuWXWS35nE5dKeYprBotaHiSKwP",
  "key16": "cZpD83PnWDFdPZVaMiY2Dgh83KF1xJuAhTV5ULYA3269cpbdkLjWNDP6P2z1mDPsRpKtQiigoTa35CgggPo9uoV",
  "key17": "4vf7hWbPfh97Hp3ArP7c46q4Xit9Xx19eJgPbsAnBpJKnMQpMQzGTnKxuHojEaZvGA1H91jS47o3EyLtoJ9AyLtr",
  "key18": "XTLK3io7tsbPbqeZxzQg3EAr1WVmh8ytqvXhi9Jq8QBMUu4KZd5hePsxNGtdiECra8C9TUhv9nH4o8qeEXhxrnL",
  "key19": "kaKStbKRrBGihkCimM5jACqPKgUSRENn6dPh7pL7G1AeF6oxpHfPtdbKa4uBbURU9pJPGbGG14Jq3zpxMTzWQ36",
  "key20": "4ayymsigLzwM14dVnaHqiimytU5M5ge2px2Q3pCFMwsY3AemPRrTnJnjz3X6eeEYQcmPPqSjSPk41jGJuV4Up9ZF",
  "key21": "2szxYuRUUxd9Xwdpwc6YpeX29aDwxfMtwL2RAh1hJboMSvkBJdEfiXRKy1btJYQXN46wXq6nny3Ft9PY5uRHW6Se",
  "key22": "269sUPcowj84H6647LKWVPcwmyeraN519Gu6iNvnA1eHYkfwgaKY3pMYzeTFXgT93CkZ9rfjPsQgNrvo4DENuzs3",
  "key23": "5qzFsJdE9UQXJtbUF4tW1WDAMYLLJ5ZL3wJMWCRVVkeK7FsjJuGkA9BZAmfSKoQtL4cvsSnj8BrY7UAmhJoXdzCw",
  "key24": "4MRn3tHWAEVXkZMKcgBdHPjqf88m5SyEBUf8S3pEHW56ap9bXUQUiBkZ4YLTRVmbP5MVv61x3xq8tCU3U7Q98ST2",
  "key25": "5KhDhQxgQPYKdeWWY6t6p5LtUxCWKmcGzajppFxBNaYZdZjBHfnKzW3HjQfcrptppikjhPN4efgMHK1gsAFGDfoN",
  "key26": "4JT2A574jj67ZAcg1CJR6fUn6qwLHwXTpLn5e5ci2JpufhSvJKytykmgB2uyjyhiNx9gQ7wuCe5mV7gU2brCGWec",
  "key27": "YdaRNYWXBarTTBnvdY9BE2GoTHVnCvhttrFjdi1DbFfEQXQhAMhRRKsyaZ9P4L4jP87Ru6iRk2P45bDy6zSUXiN",
  "key28": "4TvZWhda4RKd2TEwpN1WtvdBzAq4YM13gvLW8BmgaFPP3bG8tD6Gm4r6tCupiYKuUtxQctDdBwcYePZWx1C3ab1t",
  "key29": "5YhN7W21CH2vehWsjcaaDeZa7jyAvAfnZkLqWQ1KcqVKAKEZspNtUPs4jbw9uV6BCRMj3FPEtJ44FX4dS8Ya9GZy",
  "key30": "tktVugqP4hLS89jNP9ALBD8D8fZqWFNA8c4K8EEwYsmTz5LJWxfyF8FLq2BnQZbmiVN9yAn752ezZu3sufCBG4L",
  "key31": "2ra3VCRPc6rU47v8N8civ8yzoNgK836P5HyxMSnVWEQtj7bs1mMhKYSqW35L9ZaV7SKmdi5K8MqpiXmaXfnTFnSX",
  "key32": "3iqz76EfdB2oMaBJTZiYZQdsS9u2P39APx8pU4u4mRaNxwN6B8Fi2Nyo8v8otebMYSnvDEDfx5TTxr7HW9wVAuXn",
  "key33": "4hDyKQJFFvVxTzPnSjAq65gFbbw7yCVM2FBKBiyTzsmCYNbuzRgF67pqpJx7oHQ926Db1dq1B68Vk82y1zvQqb9M",
  "key34": "5uFixdGtVMDBRtDxtfBYaT4rRaMWzJMzM8ga7HEordx4aaxpLoQ11NhL7wwkERhpLtJw1yYL3oeCv8pCoFuwUoPY",
  "key35": "3u6iThfP4snaxBHgHicGFMTXTRe3c4W86B8mqeRrbP2qzAi7bTzrWs361Jcf5ub9Tao9U6H1PYj921MyB51eieMd",
  "key36": "4yqm6uh3zBmFcKR3VXJMaqV8FUwJkDGqd8zgJRLkhFB7LpupbNyXj5icmtXcHr1SebKrZDcLHpztbLJJf22t68YV",
  "key37": "3zh1obgPf8AE97grr1g7vkh9fzLue6GUahw6kLWspZ1mHkKKi37tcpyDdSvTW8PR9da6DVoS7D1ViHgqQ3ppSXaf",
  "key38": "3i2mxTw1daSBushR54eGLuMQemmkxVeQGygH7BufuQmV7CHQJcj2XYxKi92CkW6bdBx6rLiFqNNVrrpv4S5ALXsE",
  "key39": "57uS1aSFLB6KVsWCr74PufR8nXpoRxN4qXwWL3EvDrksQa6GFzhAd8DovCWJVDiaeLHnTMf4yggxxZciAepW691X",
  "key40": "3rQ4CgTA3UJYZyjjwtYNPAcZfAtxxCv5dkeoqVMgRB7VpHsVjB7wy8h3L3gm8oQcU9bp1kZCbmsJ4Bie6PHHuVVs"
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

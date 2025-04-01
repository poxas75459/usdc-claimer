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
    "3gZz1v2hq3oAPruwY2pV1cjiuYP23KheMwNrAi3vetqTRJTyyLGgBoCqR7ogp9YmWTgxfxjLVTRD2enUgYrLbsQN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u1YrJrdv8T3EerNTnMLGpggZdYKM5zwtVBkkqB3JvcC46XqmvEptinXDTigBAoKwiXrU3fPe1Us3Z879QPa2dCE",
  "key1": "2fifc1UE7muDnYz3Nmr88SpywbwsGwyuqekvmqzSYJNeQ9cHMNwTGGiPqoP3oEYpQ5XMXHNsQ1NhdSD8exnYu5Y6",
  "key2": "5fXT4gTTbTDVa5kidWSuDraxacQidfGootufWGVaLHuhdx6QczqJcMSjGWMHbGSWiYCRA8dcimycRidJ7swD1swH",
  "key3": "2ifbpdmBQKqZP8JGWMQnYqASVDvjyGtpTjYjtXxNJA281H5tdAfVCfZstubrJvYHQSPQ8u55aPaNSuESqKH5MYpr",
  "key4": "33nndYfJK2776YQG9kheL92VNKL7okyK3Hstj4zqocxC66oT2JdLMXgVf6MjGFis7ZcPq2HeRFkhVfGeW8d6aEoi",
  "key5": "5oAL32gtG6v9W6uWr5d6mxtxH39PT93F2pYzk1vzmEjYeHtc3LXG7JKEzpUNDEfZmqSTcTCuBLpcvDMDGeRrnWds",
  "key6": "WeoLeXxy9giuzkP81DusR81JJbHVvPpVtZgnt66hDRigvDUunpWSW2euRNBbpTyEiKKvqF3XG7neKb4g1nfLQ63",
  "key7": "2bWwKnDXDXzyA6hxJ7gaM52JSjB71pNyfFCAFK66dYaotVJCcxMFV8QL4jdAE6fGtqjbacdUGErn1zjiYqLZsADx",
  "key8": "28NXFg3VkcjFPSatTvQW29SJrUF5F54CLJZeYuworYjeSCjvBwrFrjW9FHZgiyLwAhTuMK7exxg5cV94YzzA2NRZ",
  "key9": "2XcULnGH8HoU9A7a6EfAPUYf7r64GcfPGQSLz7r8B1AoytorZBCrGeAKZayFa7Lxb8UoYmkKidv1LANSP8Xdp3U",
  "key10": "41XuRaUsm7g2vKJQ6cW8fMDHi63dkAo4RqHA8gFEeJGwPnHvDsVZpFczeAeeTmof7mqXyoaBewZtDWDwMomujgk1",
  "key11": "gXpvJ6a8EsuCoeRdKZeD7j1GQXRKFxkqSrku23fFw86cgPn5GfPWpC5Scy2jftgBeYDHUtKcCfuf6puvCW2DZjD",
  "key12": "3w8rY68EHiDmt65Nh3HSuiBCwNfUk2BV9isqaqh12yy2Y35eH5TdzxGRE721feDeLcxbheVKkMvmw1QUkrE6rkPi",
  "key13": "CtNCdbSXoffapiBksRPRZQLSi4Zx32y5ZjUko2EDgcQ2SSdNZnB2RRcMJedMzumdB5xM9ifB37LWYBW3eShdKth",
  "key14": "21k1jUMDSmjqDKVpyoe3sdpMiMpkTpgPS1q14wuc3jYm3ysdwGq48H8AxWyn4tuiSSeUuy2tByEkVmoPsm7pPHU3",
  "key15": "3CNF3UWBFAWxcxVVWmHhBgE8pC3uCR3wSMCZhbrwweGaNQZZ5SSRfEW5pTopxayLApBBnKnEev59ueH8q8Po1guT",
  "key16": "4VYaaj7o4Zqx2ggncpWbashf1e81MEyT5ZFGSiEGPTvqts8mFWDDaNC4awRJNznJkQskqPfq4hWTMjBvCcDsUBS9",
  "key17": "4tcqQPR2muVcSQr4XV4S267udSvXSCn9CmPdvkBVjZhhnSejGWx1gpuz1wDhrxaYAVPB83nh7tTFociXW3jx9yJh",
  "key18": "2K3CSQTQqxeqaXobsnJvzNL56n1VdrFBUYnCy2cV7mUnTvY6rguC1CVsHjJApMkuD8eLBiNQEnk7gVFau6kKf2QA",
  "key19": "5Rp2vEbEtzYaJ8fGmATUmQUeei5os1oEAQJi2x1g8X8WDVmgoAEP29RHhDCWYRpLED3QjCxMjNLXuebwBu9wpTYA",
  "key20": "5agSLCB4cW4P4fASgpZU43Fzgjyjc3xgiBSoBmQz7gzpUQvQy1enakQGWPNCYcucJCuWurqK2X4Duz7jPj6YmNjk",
  "key21": "2gL7zf2LmPSYyWW8p7fRnY4wWd8oxDPHVYZ8fFUCirefK6hTonTG52DDFTA2FCTrPhTJwcbdU2JPSMnTxA8f4d4X",
  "key22": "4g7puxFwFhDaiz53f8qbuyBbqMwHUCuakGnS6X5U9D9rekQtBx7CXBj7JDjErm1VeyTmsjj2xUErkyNrdXfrqmBT",
  "key23": "5wTvpwcVJH9UxEa35LdLYenqcXASszEdKWKpFCwWGBp3LbnaUuwphPceHoWWzwoV8mgLg3icKUQieuLNQ326hM81",
  "key24": "2ERqK8AwjtveyV94AEg8PDjpPYxG5ZPdv6D6bqjKWFy7FVS5hsmGd6j9nmWxNzYeaLiDisGchQRBDBE4rnpSBVPA",
  "key25": "f7mRLCbTNoHnX8HuDoYDyXD2eddPJBt5ZegeAdx3ucghoGfubRV5oJA6huXpSfr6TbZrsM5b9uzf2PPscZE8NVm",
  "key26": "4RLSSqJEBFLuVwYcw7qa9y65c7mhjv3jM7rtVyx5BkjM9mcC9qao7nohcpyHf82FomncqiJEdW8QGbq9aA2qDn3u",
  "key27": "4YSXSvK8oD7pWsjar5QPhKXCANF5Jwp1ivRh4ppfVuhRMZKZ8CaEzTR7tXnSR4eHhZCGFmjjZFx9PpuybXmE2oYS",
  "key28": "3QJLsvAh3Zog88Jf7w3bFG5FE5e281dqNU8hzb4RRLPx6xycS97DPG4ExV3MNqqWn6xaiPT37GssGVk8AqAYrvtY",
  "key29": "PAaFehg1qQ6d9yHRHAGcxZUaVDUFCoxZxZp2uF1GHYkwGTBvNEr6cywRvSzpQApyRkmmbxh3Ap4mmjnNBYdHB5C",
  "key30": "S3kysrLqYTu1bFoTJEecLKcMXRYXeeBXKSPf6SmSXUmE7XBt5Wb9qmZ1tdxaoxKGpnJBqDmP99WvBbXBxhkRHnX",
  "key31": "646un9w6i7W7X3JQKXtTn1kRXBBW6D5HvdHpdro1uZApDVDNKcWZ7ZGKLa3ZSoFS3z17YMq9S1uFShqsPThxzwp9",
  "key32": "C7mwjRwCxnDcfc7NiWDwpXPgLgryBwUpf8rnA2DB6ZK5fA5DeZgW2jfqUtWGiD8VFoyBeg76JnX4njHhQSu5wjg",
  "key33": "51GJ4J2R1YjYavR6QkgnS97P8qe6iNy2WPBpRt7LFt7Vj1KgLjV2oLkTX7HwFPo8yWaD1GsJUehrk98TBcqh2UNz",
  "key34": "oGk8wqmHRJy1bxdnz2zqHdaDSAtg5wNcS6ubuXXzukA2egm1afiA5zGyBjJYxe87JHoSEwF6HQmbMMBCqGUhtfB",
  "key35": "48KXxFK4mutWWzajFXKxEzfZC7uoFbvM4Kg8uJ8MW98naL6HtRM7Nvf3jxBmPG4z3am8C8ZphrQPVVLDbvSPEwzQ"
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

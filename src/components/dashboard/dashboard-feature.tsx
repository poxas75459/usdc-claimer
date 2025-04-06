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
    "497suFnw9RFYa7FGP1fUsZzHHKBFitGHwT28y5gwWyT1BJvZMBzcUPJPVRh2iUkyY4NHCYE4jeHhKd4omUSqwFdX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NugKq57n4VPtvp6e8t1J3nPk9HRLoXxJfY8YT6NxUB5YRM8M2WCooxKvXuXc2WnxtHr73KwqLxiucVB8mmZoak5",
  "key1": "62vKaduMjhrXnYT9iDX2aYF7gjbP8hUGXDXu61imbcuGZGEdhofZfcj9D5iqsXVsGW7TLhr2jWQUfVrGqxDq85rd",
  "key2": "3a7ZJ1HHWujkTXGTWae3u2uPEFyDVkQFAYAbEuQYdRk8Qw3BuwLKjnF93uku3fBa6BjeouaeQnytvPRKKdkdUJ1d",
  "key3": "37w3YY5EnbGxkagWjcrxzHuzVzDQ5DUHvez24PSLoTwZkH9FwykLmH63So9pp5L2WpYv2eknbPEgf84PqKxVRX3P",
  "key4": "5mtdsS1WLoif1UoGKmzeCcoADhpZDMT1A7Q6hCZ9jco8BCJBRUtXBub7195HQ271QZVKVZvLPkrxNRhFTSo5Gd3u",
  "key5": "3Bx5yvzkzW8m6N3Rj9MXcs4nfAbpECYemVNz2LUdRm5cZs3AFK97PF6JMixYsbUbziK1SfiN2f7UiTHMyPnFAWwg",
  "key6": "4M37KfpuguAdxW3jV4dkt78raEEVaSdEnVxK72XQUKWZEzLgMKnbSsPCmFojeqvo7v9CuYpUWszbp5bEhm2HvewD",
  "key7": "23DwVmApAyqYvzEWfcjFBeW2neTRBmd8FbM43m5PVMLkpZv8nteWxE9VfEb3pBYf6YUd22Aic6vALneavUBMjfNm",
  "key8": "3PEnZ5Arx7JMUGpZ2mAoLjAex5BP3KhAMKsUBSKPp1xBbL1k63MSXpLYLGCRcLTWUu4c39VaoLZgM8GP5nsB9Bmh",
  "key9": "4Djqi2NvaejV91Uc2P43a5rXieAbYj9h8yQ44A8qw4rG27YHZVLJkwNUNcsqpjbAFHYW3vFfEdS46nX76prPbuh4",
  "key10": "55RuLKTvA21hZLBxA2TkMvMCL1SEvJb4o2nYJr13Y3sc3A9bFqsnzynDZvc9kdL6M4wx3tTEvbgpnQ95rNJErbUN",
  "key11": "5KzS6ZN3N6cBWLbqFgrJUjxZKBRroMYiV53BWMqb67Tg4ci8iEexkbxK2mbne8Cjc7d98YjEsX8ZKg7t4c4jYfGx",
  "key12": "yDDQjU9cG8STM1kVsc9qH7qzduxsesRPpBEMb3LvaatQZYkxhZW46Z1s6HX3Wi3QTSeUMvVv4bbnuvc1eoSRVPF",
  "key13": "4eEpDqeBP87ogJskkz8sW6qCY75k64Bg3bG9CYvLCk8racS5ECGNh2URowJGvF1dRBUyiZAfCe4TGQJCSmwtv2Y8",
  "key14": "5ETWx3jyfitunMonr2UmBvCKLLVfvy576CYgso2YiaVuwtRCR797G9j6RmKrj217tkLh3dudsq5CpiYmdGw9PBjB",
  "key15": "2TNJAgVjc9heie8miTCHpiGuwSWXfYykbXoQWLs7LsSA3ViAk9kr6izuag4X48TXS4D4wLHUJaR5fZEBo8z3Qkng",
  "key16": "4A7jnts53Xu1hJnBav1ErubRGY6nAfxuo8KF5bFC6yCw93zYBiejDfArQRpsbh7sTKZtqirhH6Gnhuf6vsYfsed4",
  "key17": "5DAGeE8VvE7gWqk3jycwCc34unhaYFu7JGMmhJgsWM8HtpqkrnLrGpT2tx82Bhr6tnCTBVzcYYg6BDG4NdvYHx5C",
  "key18": "3ZKMzXAKzyaMPXHyedvaq3rfknnhSoMGcXBqti4z4SyFp8QiRyXsep8SFBxvsSQhDJacaahSrt7afFYeJFiZwrQn",
  "key19": "4dCyq85UEnvKFNDch4JAL5B3EVkTdFHowmoaJeMkBFzscLLPs3TfvDb9MoGkuiLoFCRy7cUB9e3jGxp57CXBhood",
  "key20": "3zpQH91geZEvPNKDsG6rmLNpxQBxGYxVurEUhpjtC1ni5U2uGAbGATmd423ceZ38kRCAAWx8t3bP9PfupgVYuta9",
  "key21": "2Jd3FQPfTwTZmdHBBMMm78jPycgtc3YqxtFt3uAo1u6MouyUWGwqCU9yEnsFpoSVdFrkirvx7cdxsJ1Zyr32kpKG",
  "key22": "2TFPVZTProApUXoVFJ2LWwTUk2REwDqLUy4gn1VoVkdHWzFiLQ4dgHrz9HXULkEjybDMqsHgTGkRL3UFwS76tGbv",
  "key23": "4PcsH68vg3GAfdLTsrUvV62UVBup1D7SvDtdqzDLdSEU6feK1X4jAWake5cYACa4UcQ7jPRTAjUS7QfHrWZMLsy",
  "key24": "4wXFhSQFK2NvsejywTep5mXZ76kPpkntuwfSY4eqsr1ppr5qJkvU8AwCRMXAocfULogncVq8gdWVr313aWMupKnP",
  "key25": "3R97m7UX9src5AcDFSZdFf676w7z2GT9vtgKLyBjqytNjbHLjCfB5SKyEADY1MTPzH15ziYHUZQXr53HE12dK8C1",
  "key26": "4ted8hL42CwhQhcGvRbHiSyxdJ27dRrzfJjHiwVCwW15qxuberzG9kc7fptF8qVfZdjddvGuMAndKkQLETC1FaVU",
  "key27": "3RAiyZ1V74WxKJGnEEyrovE96rSHhJororVgfmhLa1iDv9aXP1GoWscu5s8PMdkMYAWq3h9ziXaoBBDxKiKucVcR",
  "key28": "2ZNJCAQQqQ8VL1xFaZtpts7sQczgEnGckzMwfCERpwL2finNUgCorYb7GQ21ogFAYFMo1wEmN5QWvoxMyAwFXJz4",
  "key29": "W3XKcisYUJMgEPtQoZzrfubciixLZrRjcgBmw8A1V3QjGGTCZFKv7PqZSR563qpW9pwwGBzB3fATdAFohhTP7ah",
  "key30": "3rwHSjSV2RPBygH3HzfyJVMa1kNDWgKgjUcPhuheV23PdcRw8ufesbeBW3HQ5sDWz2pdU7ksKaYd71STPBuSFQ79",
  "key31": "4g6iQNyUNxYA1WoQko6p9zgoeDpaWvxS1b18w3HzQGvvvJchT9EBNM8HHs623njkgiEVs1BCbxtrHqkrg2nJJkQE",
  "key32": "3tdcwCrpzDhX2r7y5FyP3G1rs7bFVWr892wZw9bfW9JeMBShkt62zFRmruRaBt1NZYG3aNcURTPyiAn8CPhiUtxg",
  "key33": "AXY2CoXwPiPTi6fsQYAtk4hzUNvFyNrV9a62UzMSHY22G58MUT9mNB8wgntuCHUxdQ7BbubqefEAUZFKxz2bsa4",
  "key34": "4sJ7JaAznSVUzcXskHjuiFjZYjqM49jaWxR1izWNBm3DimvBhEfK79JWj6w8pj89URi1was5QnEfyQEtAu7LDgSq",
  "key35": "3PBwCniEMHkC32nvSwk3NAkXHdjKRQTPtmQtUEAtxxhJp2wxqLwZZ6pV7Qq5QKtCHGBupGj4ZFYQdq3ZakBxTp5x",
  "key36": "AznDVu5FGSVgnMkZ8nr5HyoiY46Ps8LXT5rLydng9JF4yxb4jiHS5XSU4YDnnuAfsgXJZZH78jG9yS4Q8yxeCiD",
  "key37": "mneukNyhfHVuRpsrHvivp7hsji9n5aVnqVcicMPtRmPCJNp6yKKuhhDUTiC4wacCKDuZWh73FZms9biMkVNMtag",
  "key38": "7tcSwQDfn3kZCrVcJ7GaLXihXurYFeGnQQ3HJJsYKD1RZwuShwRpQSQKkwrFGJLZKzRXT2xHYBG7iWMSm4fFrKp",
  "key39": "3MVquJvEim8MdfWB7ELMXeVDawtMzs8PqLg4fb2j8qnUUkmGjgzhP2EZW5PrpQZzjYa8v1zuPaVvgzKtNTVwxUeg"
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

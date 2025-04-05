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
    "5kB2qggZ2QZ64ghGUxRDJcyrFZhmyhoDfm8HK5yJ3xGNqB4UTnsfUxzZ4m6oeMYNdSsnzdwfJDS6a4ZV8Q1bCcmE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hwkhFUmg6gDn3bMXFKgqPdzU1GMi6pZUsNoYCG15ZWP6XemxNWkuTXMHcYSv4qvrAKPaC71EH9yxniqW39Mghoc",
  "key1": "258y35BiQv84Wodk1qBvUQB511zp9At2o6fAHixXBppmnDp9x7d5UNYuEzsaPw8hSUJYLa73CEuYmE555MLJJ9pD",
  "key2": "24tb89icsBgGxGNmhv3BZSdQboDVk3rmFsSfUo3hZLrg1tVMGazsecA51D2dBiaRnAX7SMiU4haivCXXxqCnVyWF",
  "key3": "WbKYFEwNcMMkP6p89PaC72gce3zsGQ74X5CASaiMjt8LoJMuSb8LbNezBNmT2qdsuJhm2ghXmXwPq12ZuidWnSc",
  "key4": "3X9aukiyMU8Pcpx54tFJZTqjkQTTr64BW5rHc2aycKq8mMTjeoAZh7Ri3QQbq8sdUjxqXE33aKFaaR1eZx8oE3om",
  "key5": "4guPSDAq8zWUstk1bZjvVLB6X5WyEwBSRCB9EjG2FLqYozYGoYw98HjJp8XNpi5zaHegeUvR51DHQJ5sRvgM5Muf",
  "key6": "5b7JM7H3c3KWpYGrZSVqXBccQQJWzeipeHipM3Mn8mdAGCu58e2WGrKywK9Vr6b5SsJw8dpgQrW722hLrZRh9wdk",
  "key7": "2iNsxHUt5NzCfNXjePqcFAzGogtHUwxJDuAUq8xB6BUwmnX6nnvU5EHchdaBzBHzbwGY87bCNYn6Gj88Do1VWUez",
  "key8": "4HzpmvRRBuVgzo9L1kGYJcaRsLv7181G198Wc8FyghsJTbLegemgFKS3fY8uUdzfTjifdQzforQyvr2yuXZgwLqN",
  "key9": "5sZye9aKV65wXyG1mLQfsnCjMYrXvSs9Rvyu3QxH8jqWm5U1tp5PrTTt4Ud5kzHarxeWHX3JBvKKRRCFR4f5g74z",
  "key10": "3Az59aVAwfdZQk1k8JHPJwBJ5MgBAPZaMuey16RZJB2ykBURwjKkKD5FAG7AwYx9rcPCbhR7JPqEBbK2joKstuvK",
  "key11": "vNMDMgmymUscQnFYUGyvYMwJooZ2h9YJc55qrrHFpMN3aup1RVyr5FnPb5pWhyn9xsvphvXSuXyDSLBz6kDKB5p",
  "key12": "24bfrgM8Ju2aKaR58uVjAjskP63nevPS8dtCBF8fziTFKvTL3yr31xPYqTxyCAPuZEsypqzRsXzAvvq7aaetTtv1",
  "key13": "2ieq42ZvjPnyoZNenHLFPUGRmB9XXb1j8WuKpaNaYLxCN3fye2CUvt4YN752xnUCiLr6FDNBQkLnQHo1Tz2xJXw",
  "key14": "3fezF8vxcdcz9bxZKkbAoJEPqhxCuPjsNCR9DWfi8SZUSGZY4h1yqwFqmSUD3KwQze6QrQJfGr1QoDhhgL9fhJrf",
  "key15": "3tUECYeEGSErHy4WurXutU18D6Q1VHBPrf8bfSotQrok6wS28yeez1TWcJxf2J7nUZpwU6SW9CAwrA5CfqRmz6Vb",
  "key16": "nX5Je7NDkdUMx2L4qR8HiLjnM9LxeZLAAo5ZdwdqD1XmxsTc4sAM9pXw52Kv2H9mAcXs4ynW3GWiJiEEXwHUVfA",
  "key17": "3cQHP6nXvPMFU4ySJhy1iC4y1hcua9J5W8bHCU3ENgJehTE1bqk1bm1FiRaX9JXkT7zWNgpTzorT9GAUPjiQuLaS",
  "key18": "28V2Hz4YixtjLdMLvVCkRPBEkuSiYf4gWzN7TFABWADAzhH6F13CB7Ak6ftdi1dHmu9zC1fmiXQJZe4SpFmUHnTa",
  "key19": "4hjF3XYC59k2bSbr2SZgPBny4G2PjDiEK6SFgxpWW6mu3K1JirHQn8TwkYwgWLyhPzTypDghFVrtZFzGXkZdCwzc",
  "key20": "2vN1PzBt3tvTYgN4qzLi3CcKieKRH2nDYKLCbwEr5YDyW89qtXprrnSem5L6tbkH4WjSFPv6WeF5orDgLwrQKQC4",
  "key21": "38hqmAohpHG1xMzhrCzZeYsEnnhrmLusA5qdBjT38CpXPK6rRZgeoRJieCtN3KYn6bT5kCrL87VzpZfHDcxj9kK3",
  "key22": "5mpwLW1SMe3rNpMD8M4Yns8tLUFRjPQMBfS4S6a6422mjPZeAD94R1f7ge9wsuT7wxZmgCrSFn9zqgPwHWkn8Ek6",
  "key23": "2GGkhgMvrSaB7amznhsKGs5hwG6VjkguWtvZ58hcyCD34yWsGeo3SPvVEHG8MofHT8rrnY8jTUJd2H4mk6AS5Fic",
  "key24": "4fLt2911KSRxvENVX6NFkZU6K41inHLKK6FLMQTj8vvBigKDhFEU9kCNxKSbwnJLR36vcBtEmTb8ZaTDoSoR8SfB",
  "key25": "ZCn2BqsxhrhFTHL2nDDUeRDjJw7sfn69t1oZSuEJpYmdhdPQfMgjRbdXyRfARG2sGn3EENEQok7UCchqtvYzpcg",
  "key26": "66duHMkoRpHYwsKQHVfqZ88t9GYf9P4UWFt8DdT9qZTbfGi4cz5p82ojn5i32Tk2kW9r9FSKMkFroLjCS71qeaMo",
  "key27": "56Vt3XcJicLh7ZbpccKbHsrCSuKsunA6bTzUbh6ZfANnavbPSEFzidDZ5c1TChzz8G4q5E4BR7dJ2ny836nRg8Ck",
  "key28": "2aLtPEbBUVnkMRh2Fqvc8rRjUMpkFowM8KM6JayiWCjBuKb8a9s19ZH5LS16UEenderwpAr6qnyBX53akXmWprWi",
  "key29": "5ixXRBcPNKMDFMFbvY1N4JptEX5bXV8BzZDGtn3UEhvtmSdysUvvjD4cNbis8xGMJfZbSZjtTcZGmem9PmabZZTU",
  "key30": "52Rk2cyPAT3SMRvtDbbhceuRotUJ3CaxAJ56A4EP3iuQvL7VJEJgH87MzZZJ8zdoLfhUAhnqeWn4EAaYmwg6zzbL",
  "key31": "3LbQUPq74CTe1y1XUyn1cwwZGijeH2WdrB9PcMVHwr7BQQ8xxmEM4jquWnxbSaDR2RaAzuBz7dZBswMWbW47Ry8x",
  "key32": "2dK9zkvnxoCnZ5ktAvGj5Y8LCcB2MZfrMX5Ben7vAfHHtE3nCcqoZ2ZLZWKtRpn6xZPuhxvrBCK3V5P9hcejMH6N",
  "key33": "4xBHmZvpSBL9UC97xBhGTHJdoT5nLvt821bjNF3REgEkg5S2bt4q1yPrCQnyob5xrRoK3vfxakvfbqeW7qtfij5E",
  "key34": "21J2mSfXNL6MJgXQE4AXNG3vk3QuRQLDUbwjYom4dxJUFoi4gABnSUiZYLfS1kkuTo6JdDLS671mX9bXvgTprpFN",
  "key35": "4rkfqSPmaE4L7q4FfeogHNzwMKLzyA3yicmpLYh6gdTVpenmGQS9KNkJC3YyRAsm18g2mKeULeK5BBSTxBiC2ZSf",
  "key36": "4VM43BCQiUwx9D4vCiUoUjPnSULztr1bMnMEuGKF4EJnT9tujw8w5tpX4qnJjeUTu4ACQHrFYyku3pr4UWb76MrQ",
  "key37": "QWMGmyFeqoAr97PVpim4ZT1tbTLQwiotHoweB5hFS9HFq7Zcb8tCZQfQKcGGWs1eLNcBjVFkE46kvgYXvKjzFgS",
  "key38": "13ip1JZm6qgk59c9jo8Rbryen2wQXoFQEvtZ99XWRcxEgp5ztR4nVt14at8A6skiY1STL3vU4e12N7eKdYJ15iB",
  "key39": "42LernDjHYej58WMXivnCs9tZha4vhK63xRpTUWZaiwBNKaizQP3XpSN4dV7vccrK2Bn6WJ4UYXUARDywpGE8ms8",
  "key40": "67iXeejHTACvmau1TkGLGPrh4Et65nPHMvPrTt2B6HqZ7spd8NCyqc9tT8aW23TR7uYfVvsy3AbHEM54aho7q3xf",
  "key41": "2VsXCNLCK7xF3UGB32Cc2MDV26g9grxJAADHdDN2vVXhsuScSUAjU4QjRcvzPA7FKSg8S6xRWFJe8xBFotgq8EUn",
  "key42": "GXkj36eYphdNS4ZWwdupnUEcKYT9bnKndtgwV6LB469cr5JBXfhhHmb4icrw1JNxoCxtMVuJY5fkULpefZownKY"
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

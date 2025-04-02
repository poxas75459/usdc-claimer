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
    "cxop9x2t8kSKbaaVXS7am8KpuB5k7mhXM17QndjN3ArMhPZvGdymp23zb7aDMuiAPjnRxivjJ6NVQuihHWX8pJ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gZk86pHAhTdBAL6Qycucw9yLj4QndJ5bQfm7ousauyCb5HqXXatdHVmyyAXboeDSwvw6CEXrk1iAmYBnfsz4oMx",
  "key1": "3LgRg8mqYa3ESeb2xK26q4i49FcNn35di86m9LHG18RG38HLgC72rBcsijhNSEUbq2h6LpMcBBRcPFACbg42Ki6c",
  "key2": "2V3VNY1RhSXJYE6bp5gZPZjfxcBrg5VfKtkPHqvsDkNJjdFTdB9EKmvAwJAoyww6yEKouJQ7if25Vej4H9mkzFe8",
  "key3": "2zSCNGBAYPiqvk2QV5d2AgBDDm94Dmzc1FVcicSRQk9ovosiaJ6rUwtj1RfA9EaH3ni8bhDL67RsxcqGkVicAtSe",
  "key4": "4K9anQhQ5kL9i5gKGnJF93DLBv3ErsAgMNHQ1T1gHTmbPrjYUTHPqqKZKwcvZ8E6qqa5pd7we8S2Sx13J4HrYmeo",
  "key5": "vg7asHvb6KKqVGmKbB4DoUdETJpiz1zwU6i3AjDEos37er31ihXLdDavqW6xq1F8CNmUuA5KUWt5ehj3EWpn6dP",
  "key6": "278QB187q78WVq2DRoHYWhezQU9CpsxDBEpfLFYVceye4rEZNnUeAqHK5ShmKA3o1ZTTVuwx8VJjAmvpx8sK98pN",
  "key7": "2cZLQVBnWTfAzQNRBygURsoikXWgveWw31xZSkGP5bqW5s8jGt4iQx3VvuX7HJZT1YGmkfCt7ou8ywvx6fQqigpX",
  "key8": "5fxfSwWGasKRCQqBnyHYWLY5wzam18UtavRQmJBMez5GSVLww2uyQy9iVKS4fw3TKe8zFQgKvaWv5DDw1skPgUSK",
  "key9": "3QCByGTRDEk1yxkqKnNshF9DAw8gHydTpT2tP3md6XHZ8Pf1rP1QDxRiUopEjrrYAKhkxvn5E8P3ENPeiinpovWa",
  "key10": "4LCHpr2z8EZuFA2FcL9wWHuHUDqx1Jmwh8n9PHTE89D4vRuPJEjh9Q1NyFZTnjZVFigqgr481bdeEnbJmSUByScs",
  "key11": "5sG9AnJiivJavg9S1BJWyhhzVLruvam4NMFDRHTFbZahvv7TX2oxPbLtCYiJe63cCcBFQXNo2AtsdC8qnu42Thjo",
  "key12": "35wYCcJkv5DyTV4FHvC388xor7vfcwVcqdtjNMSWXNr9juTAvMo9peWcJaaHAwvo2jd1QwiuapRW8LDuxQugr6vU",
  "key13": "5gHhB3WGwZ45tK3MkCz8C8B7f5vG9QSCVKjsPvSp5rppHZ8ceVDQbFkm9Q3NUeAQztL9fGZWv1Ra1Not9g9rUKDq",
  "key14": "56uoXT6zj8BHTT4n5hZmCutDJy6E16Np9oKZyds5LGSuDpfH1aEBN5N8cGMffHRdGxse7BkayNnptqsH6FeSAvrk",
  "key15": "o3XE7xv6KHMabgvvGt91GrHjS6M44FspKUFZqqAx7yu1Mpo3hiGzRT9gU8hVNJXzszn1vadT8fkBXfBwYT7Uwe6",
  "key16": "RsbnGGEyHwHriDzBS95yNCyinBZxCovKtVpQf5TW7wMZUVWkJyMDsb42f22WEYjF5nULdaSUr6BP3vcqkUW8xAu",
  "key17": "44EbcwoHzUKuicoUjL8AoX9nbH6oBSPz3XKL3xPAbaPSSueVwMVpbiuhKFxMKtQTFTU9Ph3oiWmKfjMUmmxFwtx2",
  "key18": "2EowUYCwDwhKuQMpbjGQT6Wdi3VrtHhDhHwMwp8ogyVLWRwKiCq9E5yRqwWLSmMMmLvsXB2WyQxgaaTde4FtdMe1",
  "key19": "dMAG29CKQUxP4VxLkBb7w7g3RMSqA2ED3jzTMYohErZSDfeuBL4czwPFiRf8Fen9yyjFp8Xm7TFaFbWT1oj7VK9",
  "key20": "pFk51n95gopad4Hh8rWJ9YUMRDJ4gRXdgVK3M8iGicznnWzrJFz5NT8HMjt7WZWnosPqmSXPbeNETYX2SrXYTTG",
  "key21": "5KBSute3tCtTuumFQM1qpSC1nmG89n4g2c1hKt84PAH4RzYZGafD9QnTpWXmPqbJTi3Geqq3oeF1qqeTQUQhFEWE",
  "key22": "42Jbx26WLYmiVj7zJStfs3k4vCohxNQHmxzrVotr8JZiF781zUJ8EFye2Lrq6zo8zHSMA69wzQ1dicNUPJvgtgZw",
  "key23": "2fRhmA3NFevKvB9f71mh2aNTMupkSi4pGtLi1mJPAvCJ41smsVZ6zqphopytckyrCcgzoHMRPbuTVgdxnwqUBhWi",
  "key24": "5e3hLtDqSJgorag2Ljxy5wqiYKyFpj2w3Vf6SGcghoVtG27RKLbebADdH5uoxfocWBK1n8cE9H5aSkzNc3RYZKv8",
  "key25": "2bBathgWzRcRyBGBS49M17uXyz5XtjYy83inGFtGkKpTeuJEHXjqm9dpggwiYgaxpWsWEFqDJWDEM2QAyUvTY6qT",
  "key26": "N6GwX7snkb3DMobmAzR35o7Q5tsu8Ws68Kx2NqReJNfdZGn1NqbevPE2m1ZJTy3QPLpqAstghacS1RXueh6L5ae",
  "key27": "4QcegUPjXqpW8tp8cffpLWy6yBMBt5KARRBeQ86uQTWVN8YX7ihiPgmpfJGhnhFRiTrznLNJ7kraNLB4LXFLgQAM",
  "key28": "35GwiaYZhDUevRy8CoMipMe4oLMmaASs88F4HRmm7x8Cx4cGAx2G4xVRxbJaPc9cYcozFGu9rVfw4swBjmXM9GPs",
  "key29": "3JWBxuNy8KwHmozpwUMhxAsxTfC84ETmZ8T6MPAiyNd7ENMXVh2hp8rVkA9X7weNDuUKnVNRNAq33uYvcfnhYJ6m",
  "key30": "3D23WJtYrie9VnZKFGYCQ6zstsdKoG9q555zV3tpLYLp5p1eFZ2d3Dca9BfNHzZfRyNzCnuMxynz8Ajn5yQ2Vnpn",
  "key31": "3DeBhrU3mt6UF3VXqauAbhhgaQjEPAjzENvnZEo62WwYTnztsUdbiU6691bDfDHwvydzrdjKKnLrB34yjmMbm1vW",
  "key32": "4mWZ3oGxTegPkdphzCAbBocieKeTpsJqApMKvAxsrmabkB247Vk3MwSicJJd9cVVXUL46kn8NWvZHbz91exVFd8c",
  "key33": "2JXQMQL1AkXHfGrTeNgKh4cEtNVycdKB1hhjC8Den8z9s5TZinBEApZTiZJWp9dGMZgF2RunHGidQ3qEcqdF3vK1",
  "key34": "dx2HU9hxiHPJ6jd43ZPFASkspH4FYbemL7sxFUoaQ1DfmZt55aMkmbncjtX4bpg1MVBZ3hnLf2iaSmHCCdfjYEt",
  "key35": "4owzssNRkpSVbgej3bqpGnNpXkHZnL4CTjrLSmaFDJ8MKxcMWrc6W7hdfwCHW15yMXZdfC74BYCpkCMaKstL8TZZ",
  "key36": "UdKFyabduPByNmC2dZfj6tSKSogMsSs95BVXuZL4zrcF8FJtTHbJxAaCuY5y5uTV5ZhT2rnSbMPN4SUBVa3qsEc",
  "key37": "4Uemjxbe15Z1dAMFp89AqSheg6LBjBpLk8DqqmXdvY14b948zX7eD6w1LutkyBAraCM4o56quTdbkKzwVErZj7mL",
  "key38": "3PWNT8fvR7Ni5roFCnH4UWzvJAMXT1Hg8hDrd2gf9m7ykjk7Tx6nTAjaVVRsTnkrYcHup2wPX9ExvncNEJcfQHit"
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

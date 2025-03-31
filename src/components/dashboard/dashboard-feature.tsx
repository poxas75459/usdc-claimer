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
    "4iKhWF9ijvdNnNxuJ364cxmRVXU4F4Ma869nq42QAghw6NoKQdWqGwXVoLRG8KTSCVihwBdkkWQYPT3bFLkg7h76"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dfdsPNzK9GNUzLmdxH5MnkY3ZmbHQiM6akNQEUa67ECRbTp8SnHdLJeXh6CVf2SkeHBt2oc5jVGrZKowwRyjSGK",
  "key1": "4fpZqmyapBMtxPYS7VWE6uYJJ7jNVdZ5TNNiPByKs1EEAGtiRGrXM1T9ZuQQBU9yzi8DZUVC8QXQMVB1V49p8a4g",
  "key2": "4TcR67ms1TcEasurkUXHD2TbTsPCJBJTbnYRc5oWK86vtGq9hpGVJDxY8zT6hjUpGTUs8PEaSCB8ARyo3a9ks4Hy",
  "key3": "31uyhoNrdzWRzbi9Q529S6kXQ5eCHXZaDid33A3HiuNnns6NC4yvYk6chMJKv6HAMoB1SBk89koHjaA31s6VYaiC",
  "key4": "3tNdqwoPSk1RuC4pNu44wPNUreGWt9fC8xGCHEjpaznK8Z86gw7zk6zkd4zUb2Z5bu9Zh6k3N3n5qMWfNRigqnrm",
  "key5": "h52a96Cmyg4cfW6pBcUukN4cXbVMzqBsoZqEhd9i7AdANHJkdRbneC96z7EawhPymPPhvidiBL13E4GrFmWBBoN",
  "key6": "3btDLXn6o5sLoFhmNQmjnjo1YvaAngVVsDeNreTYtCmA4eWhdK2YGvrtoYSdJLx6tCeAV5o1m7KPcXaWacK7UrwS",
  "key7": "4XZkyZQzb9NJvibq454GBhCXB2k9SsGs5FraaT3NVmbpU4bQhS7vUr6EaHugbTwD5hrZRNvjR1UWJvtUgTxxesNE",
  "key8": "3bvKjKDPFvydkkaQekVZCUkUvazViFJ8C3hgyCBfUTjjFnCyRGEefLNo1znDbHnsYrgeHcCTAURQzKMsKXQkisyH",
  "key9": "2RXER7nBXySACbqaU3CCbYrrd4gq97YcgTsgzxSB22N2mSAneYFEQY31gZBh2LDRpCiua8VCVZkTEaHQjoSDxaJz",
  "key10": "2rfhSKjQXz1AxgYvfZngGnTvh9hACBYi3zjwfU8tLciZHY2oHZNFwmkXg3yHcSh6RT3VKn8wTnzhdtBdzgt59VVH",
  "key11": "4q9nNNkaxe342kWGCcjM56gyYmPXNvGBQSpXAmxvZXKw26mTK3R7XdKXRoRYUMYjWpYGMch65HMX3KPgU9EPNQC5",
  "key12": "34NQB4Upo6YvD5UXwVpw56g25RHhPApvEAk1p5M8cYM1hw4sh9mn8bCSXaU7NaKnWRgComcTunZHgqsAmphCekYx",
  "key13": "2JMF9W2UFChLhysW9SYSFPphFKgUnx96TsaxsiUsx2GauN6tqqbNNoCZf486SokEjBWZG8uv23xf73BAsxstNnzH",
  "key14": "N11Vxe4FxHhVhub2fjHTwfyFhABtwFSZmHTXtfTGSr1uDRrV5Q7GJLCjRxA75CVaBeuW3kZfzxQeQDTyJknczUj",
  "key15": "3cpapVAJC16kuuW6aPXd4SgKgwk5gfGD9RuUPv1kD1Bmq52jUfVBX4r4GMnM7fzJGwoB8LGCRTBnwqyfxi8FEAQx",
  "key16": "3JsAoLjYPBNm4zWRpwZGitkoeAjCPUDrvwvrkbjRGdyoNgQLYapGFvY76gawTQk39eiQ8NZUp8E5FkwhNwtbaaPa",
  "key17": "59PX7JYxo4PiEiqTdYiDFuQ2ZzeRUZ6xG8WPSahvzX8FPYVnEG2XCbsrLDzwsWbWcq4jqCj34J1UoxdX6TnFLCm5",
  "key18": "5FJUQXbfdTTjLvADngaYqvyg2w3P5estgMd5g4ZD5wiT5yTMQHP77YrctsjoTZ28PLuuUUMbEAJ2RnoGaLAA3ZA3",
  "key19": "AoQQRk7inubj5FXW4RCXD5D2NNeCd1NXuiuVEm7FDW4WBuCA7AHaCDzoh9ugQTNpCCqSH9VjRWek3PRXR3ZbvYZ",
  "key20": "4xK1Lh3Kq8THiJJzTTJbyVrjyBWzEwjLDrjva8SkQzVTbefWVbEBt6u5VRFpS3rE75g3Pv4n4X3od9dCbocUdnaB",
  "key21": "2U7XafGatkEkDF2DfPSL4x5CQnj2iENZam6kK4migyL7RS6RDZx8CWGzAnWSs4m4KMkz4q1G1u3hjKBAF5f7oGpj",
  "key22": "4ePXEAcRHhJyhyWzfZ8mpKsjpdmNW7UZTUxvSaGyuKdJimcAagCmusBVRfKkNhg87kCSq8syrFTWEULnyiSzbm72",
  "key23": "3cV1hYNgZMGZoJd8uBBtMm5c9P5XYurnEeBKCgSo81we7DUFyB9bTHUw9DWGv4QzkHtFZX9PeKKb8iDwdn3Fhr7X",
  "key24": "fxyucoz4rVr7ZKbC29m7unRu9NNzUTNV6PZQSLw7iNvaBuvHzhrUZgCdyYadzDaQzcnvmNk5rNRQTVf3NVhsDWj",
  "key25": "ysdmkpXiF5RcxZPUHqbMKUGggRFmxwU2TRLd6PzgyBcZjSr4E3vWNbFHJm3PBapEj1x8hZpm3eRUvhZPjnNCHR7",
  "key26": "5Zp43iHeVjVwDVScQSbZK1SsifUPevqezqWfvCSj3qFwdsk96j3iP6i4HKmfYCE5SQQ8mQQDqFp19N6LoPupGCw4",
  "key27": "35veMp73ppRZ8yFumyBRKX4JSSm2JW8qGFs5CQSnGcK4VmFkrDhQjEvxWc35FA3jkewGpc2b4CGgUZv1po2apvaN",
  "key28": "pKqkUZgak9d85s8ZLAPYk8wBkm2S5E1dJ2HET8qEs3V9wNbt2pJFAzZQ4hG1tJxyvr77MM2RAX5yXERVLrVCrFu",
  "key29": "3iaUGguLGUXUE6xaujsV3ucp5XrdYDB1YVy56rCw3gaD21FFs7jzb64p4g6VD7MS89kiwMpvVHe1YPAgD5GFC6LG",
  "key30": "o8wECu1YS4sZ3EEYYiZg8188WGtiwPj4V3n2Stx5K6Hv5gYyvKF8AWXxXanEk7Art6NmXszywc4GPP6E4zszzhT",
  "key31": "3oRiDePQbhEHGgCbgrsvxRXNJH4Q2AcgRr15sX2oFhrvLcGat1fGHqTmmu99msQHrfkXdqGeAbVGUTaanAHZoR9K",
  "key32": "5XqMcV7SiqtK3DB6wuUuHHycRw98bDcDoybF6aiz5biYfNxd2nyYnGtYtD9HxBwiES1XUpBetRp7XJXTVqhVohjg",
  "key33": "2Eh8FcsDw9tqJchiEzKqrHtyoJSqDeKfudZhKE8LThkm9ZrMRfndLYzoHFbBkaXkDdfTNTCVHd67upMcEX7Cb5zz",
  "key34": "49H4MFquVjDsiMZFaRjQuLhyw8qEjq3S1u7TXsiir9458Ad6f8o3UAA1djExCWfefWoWePtW8KRz2GgJrNjhM6kT",
  "key35": "45ct4bD4BbQBKPFwR4E7pEsD8BbG5dFiah5pzFe7C8arLS8K5qV5HmCP8bMQxG6YaS1VTBXVArEGvxApUM76bvmC",
  "key36": "HiU5MCs311Br9NZs4M5D2SRhvZQ4RBsSEZ9JJu3QHCGuA7vBBhcRQixWKB99ZdgmwGArbHPNQ48ttdFV22UvHMM",
  "key37": "32sAm58Cb32PgsRfiPy9Rh8H2S97uUGFpA8kX7dECqTVefHDTcMPKxtbxiVuuG7zZ5Gr9ToZZRKvquoytHHhzhFf",
  "key38": "37P4HonwqFjDfCwnykKuZ3GNDpCqPoFJjkgR3Yk3BFX2rpwxG6raUus2xXTAhSHKkeC7jAa13sqbTpuKSxYTKihi",
  "key39": "2L1uHvQ8X17ym5saToAyJUf69L7c32G2q7H4zsRX5f5Ekn9fVjTHHzXKvogkCDhpp5cUJXZ3T86FKnS59waNXneU",
  "key40": "4MeH6F3WcxkjN6uDatDXyycZiiuJiWcGGXPUuaDQTfihvgRDFCpdD6Q6DpMWhRTiBASKmTFxGdyZWg42YKwVsdLy",
  "key41": "3TgRGgsmzj1biXoA7fLhHnE3gWpiUyJcjyXQd6W8oh6yKvWMPvAxjrqwiVs5ByUYyM3cfbnJtZPdBqxs6yDQH1Lb",
  "key42": "5RZRhDnvou1w9JPFwya4tAvBwwdowVsXp8PWNM8AQjysouUvcZ2jAQemuumroUce3DpUvb7VSQhKp34H4fzxaAVx",
  "key43": "ZGzQ17JpK7SypcThDZdLohUDKCKTsT611ut7JU2fLTBN75eGyEujYuhjKxeJ1N5fRuSuKFVx5Z7xJKu2FjtLyVE",
  "key44": "63RNjrfLF3DBUgtpjM8tdTgGYNFf6X3nRNmexzkKw84WcpLbge9dceFN9THeiaT98o2qai62xqXsrF4P6aQAkzxi",
  "key45": "2qVwTbt34hmsd6nnsLyQ4c71YjyF6iC25yQoHBX8PCNmrzeJvtkhtSTCexQCdYCzygfGNGPtD76K1FaA4oKGpRWg"
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

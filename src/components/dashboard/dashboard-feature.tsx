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
    "5oNy8feFat9nUZoRMkN1Mu1oQiPFwyeF6WRER3TFweGDWFbwAX1PJaYGJSTdyAoE47x1SgvoUwKuKvjnVTE7AzDC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vFZmUxdKtKtt9L53eiS1JEsD2NxZZbu3zRLVdMQuZmG7iKUyG5VaFtf6aM2nSgvip6dd4Rgme2MK4WtFj8YApDs",
  "key1": "27XMoGxG4QqGbmPwEj5T48YXxXejPf4ws6vN68wgQdhF3Go8FqGcRVj4Xr7gYWuTQrkH22zyRe3L7MLJLhWEqTBZ",
  "key2": "4af58TuJsQf8rrS5PMevJLPUjt1VZKcFax7oYcZ1PRCS3b3RPF3iNyyW4AMmpSWBfrEgYDYoCmVZmbXDorMhSBce",
  "key3": "4wxfj3Zc7gLSmXw47zYkWXoz39KDFUJiCMD11epyZBXtZEZzZHYBFRf6k1CSG6C5DSS3u3n9cZjZJuf9JcJhLGDy",
  "key4": "4mi6nTm8YtuuAni6KXj3vto4Lvw2BGp6ASKqXAnj8i7SdDjdR8z4N6imB3PXhdRL6xmMwq5Qdn3G6zuHJgQXW424",
  "key5": "4vkPjRAvErGvVRJg4Jj3AnKxbhWwEHg5Cqc87HypixDGYfqgTd6HBEqTz48xaWiJZZhHjYatU7kXnMKBeHsSWHks",
  "key6": "4kPWv82EUEYkWcrxuCu7iWJeLE5MihLFUP9KAzBi1vUWXvdVnQG8wBx3wJXqQgAyTvmKK69GF9A9xzdnjxyEhZN6",
  "key7": "4VyXREAEnRDSkSxAF1xBxuAit7oEPjYvXzQG1ijJv7RV8pP3gTJBKvFj9MRfDdfmaKrstVW3dC46cAN5ZWkLRs6i",
  "key8": "3JAV6qCJPdhdWWErLvqyZ9oJeV5Nz3Dxt8sVg2FWF7LYzZsBsSB53kChhBgVnVSwEkmpWENB4kJJjWJeDKLSksZU",
  "key9": "2xCyysdR8v7W4qTmkXMRjkNm1ygF2WSg2cHNTTkJDCTMKHNJCXyi7TMfDdeeDEEkVdSRL3MT116xZXiEp3ww2gV5",
  "key10": "4zCv2Jj3w2quUe2nGxkKB9K5AaR2uPN3P3xT6ZheKR6CVsTKZ8GJ3yzdQVpHWYrJeRDu7XMjFreegDeyXVFWdnL6",
  "key11": "3Ac17uEDGxxgfjTdi3zXaNBF5Vg4BVFo9xVX4NmPq6HpsWxwLL7RuZdp5LtmCVB2ABktTe13JngJe6MgX58BcTaB",
  "key12": "42YABPDsK7Voy3XAsfDzu5cjWJZXKM4fCcrAvxNgTtsa2Q1tM5WAmRhXmn28gxDHGLuiar9a3xZniueN4RhoUHL9",
  "key13": "2Rz9dr2kuUDkGfg2pMYzNJ2aufPs58F9zAtB6sow9NVwLnQaYcfgFid7tyJTkvxyVcFmckgHB6x5KnF8vXLdYBZm",
  "key14": "3KBqSKoKtXn6SQdV7JL9B6VaF3J4dKAK6jTeXhJHpvbYFFr6qxiTthwdT85n5Dm7XdMSqckCLq643q9Z3mENt4iw",
  "key15": "5Qi4oyzazXG4kSWy8GJYFrHe7xgoaeZ61GDho3CnwBazwJR6jRRuFiW62mJzJXQkhtq6yiA4LEhFuVmGBNzMQAbh",
  "key16": "HtGvXpVCahbEBRq85BAFnVXgxBoS9UPebh5XRYszuhJUkvWquFsFruj5zb89Psyan1uqLKigkKA1p2tZiuhDZD9",
  "key17": "556A9skKgDQe7XhKWeaMD5UD9WQBs48pJa8vFAJ6NXzwF3EiHLagRzWpunUDb6eDc2S579om2dWU6Mqsaej7jrzg",
  "key18": "4EnvS87uhZdC1wbPvZho24mwA1zS4cAEXcnv4YVUrqE46nbWGWNHcP8wgbAU53i8kmsWHVkN2aABjKgjWjCQ6rEL",
  "key19": "2DA5aMXLAdeyWZ15GrTiQahzaJhqJT9avERh6nrXNQKbTjJeeBumfvQzovRmtoDxCpAaKhda724WQ58GFHB9neSc",
  "key20": "5G8bDydBg6Qq3rRAH7UrNengHxkx44GJmJJCpUCj5iUnhWkHVHFp5mh1ZBE5gVTUmX8C9jUR6aQviMemmsvGzD5b",
  "key21": "5LVWuxfT3JNXgxbZ9uAba41BrCH8LTuNCZxwEsPN9j56qnRZNGdNU8MPLczDxSjQCDn9zhBsg4ncsP2xzJScxFUx",
  "key22": "47uJrxS2MNcFXLYxVK8pMEiE1nM2mMLqWG97AoG57yC1GttZ1W9XFgtNuFF6u8XvPoznKE41RanSSCdfgwoRnmgq",
  "key23": "5bVHrhhBRbqKXGSjTwh9Nw7AcP4pc9NuzZN7VNKEDnSXfWRLH5vrtc733NwXw2pvu4FwSVH27z4FapfXYbqsGdSq",
  "key24": "3NKDBw9wEx4kop73FbCQxFvzCmaFXLfC3FG81J33QoUvTdesPUcPF1EvkVrDudWmjZ3LuPmFbAZsZvgKF9AZNVug",
  "key25": "3MeGFKfXvkcyB57yFKcki6gNQczxovnXYjnodf2JwiN8rNGMtANNf6iaNpgdHWJpsrdibkdvEnxUcsgBNA4bXcCh",
  "key26": "5YsZaMKciESfqyjHcs47bstSoXhmnGKBYABnRSPV7ZuWJEySRcXUBEFEWi1fbbFQJkYiaWAVThJ974Pgj5rTzAbA",
  "key27": "T9Pmmr6qguHqTATMuRtGmHM7wHnjBJ9SZScCWSyHUE3DCMnVxEubJFvgsEutEGPT56GkZLmWkYyHMHE6JRDXrSq",
  "key28": "QNoQuPTeyTaheNx3E95NH5mwPE7qX7aDyozeiFm8MKL4jbWsvJJKa1tfcXNfRqPDXBpRZs3YsK4U8c1SKiJgRva",
  "key29": "5DmoVa5gzME2FF2Uef7gvzCXdz9VyBGbHgkRNv3vYpScyCv3HnmpUwGuzMZ1thLRq2C5PP4mjDKyZpfRSajfWEfi",
  "key30": "ceQUVdMHbSdMFyVHZ8b6enDakbHQ7VGHxAgUqu5wATy82Go1YDSGyVP4yEcQrFdHacZWasEdK81qAR7ZSPDQje5",
  "key31": "3BB6pK4J7dTdYyWXAPjezrGUuNo1YwMowcs2d5he2zbjeghpXFYgkbzuRCDDh27PgrNiSM88aLvWPFp6VuX1dAa1",
  "key32": "USDboJ6NQcpPngnUYEhzPKct4b6vcHc2VBhjKXu5iyeSLu9GF1uBMawHfFyjZDwc7FJxYEmaE5MLR9QaSK4Y1f2",
  "key33": "23pSvW1WaexRt22kwQQjE9UjYwfT3duBqTCQaDQwWdDLdBr825x4iaKDSLkw2EPBGYC54BqEhuxyCAC2KAqbMEnn",
  "key34": "2itUubL6RRPoE5cfDhztkkMJKV6StxFFg1ihDCMxAf4tPKQTziXTgm6zGfsqLTMoJ9vpynUdvLbFiUUY4HcQKTgg",
  "key35": "3FcYPCcGRyCGPQbhLUH3ZiABUn3nwvF42Y8rNdwTPk28vEM8ZVPSsb5uegaLh56Sx2F91h45Fbe4G15G35Jnxvs",
  "key36": "336MiCUaJ2NEo3P69xD6eQxzUR1doYey4wCKWfNVbRknx3XxmtcCtbyaXCreezhf3yorMVjHdoSqGecQF7fc6MQV",
  "key37": "4r7wutKKfaBfNbj6B88bTpex4jKghpkMZpEsJDt15ZjANUc3wcVaLRBdXsv6rMZAj4xvWnL6HyCgDgJERy72LtSW"
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

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
    "pWkmTZ5GCexvp77nuRwTQzAygNdMRcvEzArRDCDuUzbVZy7qVHfEs3MtSnggTv7iS86v8HwDhZCbacwSn752zgK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cw3u7xmks6YcRB2J1mWNmrt6VF9MX5rpMKAAmxA6aG1LTYVUe1DznG9YCjMBVL1nPE8L1Zc6RoMAEPPje26MopZ",
  "key1": "GthwiLSfe31AiZYSwGa2yHPNxLx2XXB8XEFeLXtHQSGgWABoYsGqsay4RjMvxbqhYw9tQpDP7t2K3zXHTMhS9a3",
  "key2": "259Em1AJXNdBVgdTVx1NZgxMozUhW41DHLFRXnAt5z5EhNqAVNASGF1y2t32TDe6jpAPdx9CE4BeGPjCimzSmebJ",
  "key3": "ThX43ADpPAEkDgRwa3s3UeRRruKWAMPcSYsk8wvjfK7JtgfpSfRLSctD3xhCcrRk9Fg2C7C6pupMqiQkKqFLcUd",
  "key4": "waCVy4KyeB8UZYW1YQRRE8jFQZQtQxKXLgthEeLuJMnzKpEcKRu6RoWR8Gmd2SVr5czZRYLoc9rtY7pnhWaVmWP",
  "key5": "5k7JyMAXisfAkNnmTU97Rjt9a7BxZYns4QWtikSgYZDvTZNERvhLjmmEuM6v45Epjt38tWq8WVEgZJDmcagbfks3",
  "key6": "sfY8QqcAgUCVaej7Pc5rqw1cGdB3L96NXC9X9PAcje46FfJwrK3vAXNf5rzMNHatdrV8p6uRufrEvEFpGCd5NkJ",
  "key7": "BuRDUVDka5363DA15qsZBxpdLVSGyfm7htDdgM56Mxivurgmb24g8RrKWG9rPyD4mMQcqoV4n6pHFb89rWPDVue",
  "key8": "5BNFdRF3Ht81ohFdm2VNXZJDE5n3UVaFcfruxCFamhd8FfSD6dCE9KUjTfSfo4ju8Mcwgdcvhnr7WFWkHF7brUo",
  "key9": "4U8ectFQiwyVxa86YjUbEzfwoQyGoGQYKS7c1CHGi6NJTj5JeJFThgfMd4kNb27Jt9PKbzyrq2bdwwERsG2RBAA",
  "key10": "4VNkyGbycX4rnJXGd6vmMzTNTKbdWJ2mvv3nCYfZNjKz8Ed8FuAQuC7wXeZerCnX22oaXnfv7Qw5RFqAXpj2cSdF",
  "key11": "3i2H18Fk87uzaSrfniWLr7xjnFfVErNVKyuemt4Wpbzy3USusngqrexqk7ckmYwdzH7ZwWsAYMmsvPdLKRqu6igG",
  "key12": "tEAjsriNNf2qKTtpSW66bdhxn5rCoWQm9oBYXGL3xXB3EpEQT2nQo2knwDzzaynwPE6PFxvMGGkPffYouk4umzJ",
  "key13": "2Nfv2WHs51CP99i2rScmc5CAam1f6MPAtP1xyoMCvFukiKEH1AruR9d2SA3uqip1R57nEVWTfiLW4UfxSfjy51my",
  "key14": "5NZiqx2jAGAA6z2NB2BN3suh4RZvTDsy3jqQCWSL3APzBD8d7AyUUmPruczVRYbxqsTjC61wG737JnCUQw5GXQdy",
  "key15": "35ZjxqELUdT524apicg7DjYwP6x3uGCEEtxucdVsfJ7t1s1WKuZcPh4wvtiwm1ofTUJjYU7vFtLNAoM5Nc41h9zE",
  "key16": "5jjDogPriaUHaXx2WJL5zhejqws754FUnBd78TBHAFpZw5MG1jpgXi5eUF5xduHXJsiTL8mZKAkyPWV3pxozYsV4",
  "key17": "2kafXHHnVwE9TZSERJeVRSCMkqgoCrpo45HovD2D6WEnput2eWwXxd8vM17rsLM7SfK2gcGjSvf9DswRkTYxbBcQ",
  "key18": "45Gfmqf9MSjNJVdoQMNgjRCvLReRV49WrGxdWMXemwcZT1HU1xfA9Jify91BN8wUVkuxEnFZpEaUxk6b6A6zWVLG",
  "key19": "3ocwCsx3aaztpAYW9yAacuF2tqY9YDcsuZGrpK1fCBpLUp7F5UPRVmP1RcWBB7n4HHWY48qPdMTxXvgthuDmbLfx",
  "key20": "5freyG3bMUHjzc87y6a2xzPpcuHs98yy6oUtpwUfLRCGKhxFf8pXup9C6ksJwmVAoqBKMYK3nPPsnkxNviiqDP1m",
  "key21": "3wG251UXFNJfaGiRTpaWCciBSRsEc6AFnEGqcjj8P1gNEz3VHSkvRWtqvAa65hrDxddeF82KtwTfiiKcCZMZaZxh",
  "key22": "3WDCAKW5YD8ETBauqQrNa8rv1wfkohAPHLf9VVsPw4ALeJxHaw9UoKTngy9aUV89xiAozQsjJK4G773fZMSiK7dT",
  "key23": "3PVSyMwvxQ4w5VtW3AnbUuq8rtepQNqdbRVJfAfLuteNH8JNS5qfGNCHohycnSNZLnuHyqyX9QiDPxGCW8EvatNS",
  "key24": "2bPY2BYmkmvwSk7CGSy6JE5DF99XkXBLm1ag89FiC12moqBxndUM5Wp9Qc2NwzJiGWuee4CxmNUs7Wt7PuLtahAE",
  "key25": "5nozmNGgantZt5HqPoHD7BKPs4jgNCK4mbZ5M5JJAcY4QjEhvJh5RZ4wZ27UnQHEE9e6tvHJY1zQc7bSz9jnz4HV",
  "key26": "66F6Y22jzSbZKjPzYmZ6TGiFBaSLtbe4TxYJ2czxrfSZtyDseSuF3hEvMarugQ8nfzAxcuhy9MJef6khcBTidebq",
  "key27": "3kSWAe8vcUtwuiEJANJ6EkXyvmfsX9owKmATq6u1qtrH9sTW7djQ9ksxv7hg8pZtWscyWWd6wMxAfvXLxccMm1Gd",
  "key28": "4MdVFkHzB2PvU14AgTwFjzcyWedF8zqkMdja8qD67636rxD7rTUwBjYyK6SM16g4P8XJQXx3DBB1Ru2Z2zSSW4Kw",
  "key29": "5zqzwfWYpySBoMVwyW7e2SZgkHCRgqxUZ6oR2CJfQnzkDK79PPBopEK9PXzB5vtAx82aCZqyZxZzgPcdMVg4Yii6",
  "key30": "5Jch3R9NA3L59Gbo6KWgVfMfUQ1HZKnQmikeVjp8gXcm4m4HJhPdod7JdguYDup9hxgypJ6P6J7eeT3nF1dFDucu",
  "key31": "55ZdmqVtp8FBiPKh6HG4xCSfboEoRZemq7XBqWEFo51H8sLruXcmYcV5m7F1doT2WmH1oe8G1gYPJtNK2ixY3dhU",
  "key32": "3oTQq9EoHWziF6cQM9jXjQcJzyGR1UtvfPmeu29ebSFxo4RtidKJZLs4vAMTndpndopwp3bpPLb5L1h2fBSjj5Si",
  "key33": "2NZapSRtqML4fvT9bxkaptC9Bpq1pfHiuZXzo3bsD2jmRc3wKMrTAyHeE11z59Ny75wWKAftuMWCGcUwwJX84z5j",
  "key34": "2D5LARwWXLKJiDcEQpZzWRCVHwtnCbq4DVMykASuYfitKjLqcreysJ1vP4Df5EiL2JAU8CyXawseFcG3JPNebi5u",
  "key35": "2Zz2dZc7o9JHSq18vdtWF8ZFTTSGNhY1NUXP1aD2q89LgAkJKwsJUccG2h76EHmQ3Cq9stu3Gx6DjP7ZcazQPUqG",
  "key36": "yaNG1WBsC7CiT3xvpyrzhf9hHjJfLajDK8xwEiaDBgYhcropXtUKP9edNhjseDdYzTRSd9nMVvxMKtXh1BULi28",
  "key37": "3h5oN2YDh5PfhPa4M1VTUcDkjf6toiXerxb58ZssPsu7Z4jwd99V76DsyU4gDWL6Z8YXWkz4hX5q4bNRuvkKNN2x",
  "key38": "Q9FnmZ7PBfGqFdXdt46KdnCqAVft97JvQUh3NcqFyfYKkmMNofGG452wNKuogVp6domwr8Hvjgpve2wpgRtsAk3",
  "key39": "2KPeEpmf4ooNjt2tRncXjpcVKA2gA85dnm1EoLqsi2wcBnZqrToRoxGYekTmo6GE8d5Tz1Sg4Hzii2DJCmpAM9ve",
  "key40": "4pKACQuYELDbV9BySwpCo2US2xobbNboTbsHqX4dfjz6GxtAtRdCqPnSWGWARauNXeypM5ebGDNTA3QpyPKSBFD6",
  "key41": "Vmiuh3Vo4UdLCZmfJtAgZtk6pnD4RThAapFZ43U7dmubogtzQxTL1zYpbzpMmEZgkDVstabegDbLVhiL2wDG5nz",
  "key42": "cF1wEXgMoZcX92s1RNDTMpeQxYNi9GeM7zFYnt9JV8oKfJXaS4CCJivjKufM1JQCK4bu68As37pR57M8KRP6QKh",
  "key43": "iuZqv6Wwrrs6T9CPx79kjhjrSnUy8QyyR3GfFtmnyhCHG8ccjWqVAQGi8XgS1Y2Vc9PVx13Q6VyGgZ1DgjLhyhs",
  "key44": "52KawWRZoHFhCike1i8kQCBzCSTEsT6T7F7wFCiMWEJpPe91XrmQQ3brxnzSoQsfDZ7k9QK1uEc4LwSmeLcS7rrW",
  "key45": "52NbwZpeupvddaMXarfaL1TUR8vZYCuC9pxNiag9n5DFkj42fUo688cx1rcacdkRNVPH4E1sjbziogXQzG1t6CKL",
  "key46": "388ShuhAUe6wVtG3z8m4hT7FZ6YXeAKpKPLkB1c1b2d9cHCXv9y1xTXhepFG2cLaXqPbn2EyVunJHYrkEFW92uwc",
  "key47": "2pyLoJhTJspbWhfqkusHUYYmGm5o5wXFLgbSwwUxy2dnfMteDr7PnXAsFFo1tatjvSmRTXqbJfHjLCYbqxd7Z3xG",
  "key48": "vDE2XJ2QbdjvgQJSPVQxNGGFnVu4viEoThNLXfbLfyePsfDiowKb6UNbeTbedUjkHZXRd1zUR9JQVFQnnuS2568"
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

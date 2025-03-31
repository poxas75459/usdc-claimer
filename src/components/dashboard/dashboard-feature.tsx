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
    "4ENjrQ68vpU9NFihRS9E1APWwMFTUkvv1vXsCrZ8soyEiz7UTvc4KVyA6zNtqy1EnpcYgUZvmF4fJxy419r1nfTi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VTqPCVCfc4AKZY9ZZ1dMJXXstfrHjvn7Ucptcx4fFvBhYENNaYdoixNr7eVi7gH9rcLpCe29uTxrAkEtahbvMcW",
  "key1": "382PgWrtLo7f3YCC1yt3XRUN58KaTFfSX4ySbdewCTQHnJbUExPFuKq6gcjjHSKdZPJm7B4nvN5P4kQhjW4413GY",
  "key2": "37uRKKU1AopfY4tp6JAEKBGPk7TnYYftcTpq5253X6mECyQSNZd17UtgKR5xSSEVvTvmP7yrg2DwaZ9vEjks1By6",
  "key3": "3KHYYU1DZRKBsrU3r3NDJofUtCoz6m7hAT4iZtkV2TozWjb4s2zZRcTFMVWmSUWAJ5eSUQriG7jqgX5QwVh84ffA",
  "key4": "5XuzE79Xop1ULC5Jt9gNczmkrDThxYumVYMYqoEvDxJLzTzeYCTxxV8qLkAKWUGzFeQNdPaVk7ncEhhc9BDFkcBq",
  "key5": "onogmzeV6tmEXDxy2SLDYwQT7CwxEcmPWKVakDG6Ri4DNGYc8WaKtkhRRkHVvwPRucvYUKywxNcbEVhEUMLC8Pn",
  "key6": "3k1mSWXVGoNmR9ZTiF1uhUduMm8t2bb9brDJeGeGu9RU7eJSVatJK7V31r2zs3czNDZLeA8hULqMTmYXCrtPrhnx",
  "key7": "5kJVb8UxCFNWWPvVRjqyUvBNBqeN94Hu6nqDCKR6E3UdZqa7kJ2vHhJcUnVMpLbM9ihUWhAN7DiUZzwh5uDN19jt",
  "key8": "2VngckU75A55PzLsCeXGX97dd5U46T4ir3WfeVcmineKevA3tCjNKAnozoqZFQj37p2iiWhfkJzKAYwrjfadBVnz",
  "key9": "5g86JfhXQCKpHcmo3FAS3xT6MV6DY63PGYdDf225EBEC3rBuwdYFh55M9mzYKdRhVa2SX2UDsBkBWK3gamqGLNQb",
  "key10": "4gUKnoXxPRd3FGckEfYANQPKEaaumC6p45j762Lq6dDjv87eLKFemHvSiRRpdx3TJG1Hziy1jdQQRrKqqFXSCtvi",
  "key11": "UMFM55ZUce8Dc6WusLdUsveP8X1jWKQgCwHKNj98B2gVfsRS27V4Bt3hcqUTmnkqps1MfMTRdj7yELrz716CqBS",
  "key12": "3U5ew9VH2BB956ESg9LcJb2B1XgPqZDDqXfUd4CTUxWnhRoNms5FvR5WDcao33Jpa51EQ8abV7b8zbhW765MVqEw",
  "key13": "55y6QxZBC9MsSird2GeCEH3izCQRVxkDzCToTvwjpHP4VB6Lw8JR9t8BamTUKhxNjVpD1hUvyquZFwU2CwNXK4m7",
  "key14": "kL48gt2PqC6pzF3DKuisBA6SGUCVTAoaQ74GJU55pxD74JKVaoQHjPoaw1HkDoCKpsgX53RYgSjV48ZreEHwQSa",
  "key15": "25QvrVGrcggBrMbga6Bb93KgxhQnftp5GZoCMbeTnd98NY5CDQ6bha8VJbhvwb4WZ1BiR4UvDzrdWM5FuXQcEwDe",
  "key16": "4NWhULERiqeGvxwKvTJQosRJ8GdLeMy5C8Zra7vfUzYPS5dR46xfRU54HaJdLzci6M4GMgHhj7YRTq6YLJuH3cNV",
  "key17": "3sxRCJxwSean6SDtc7j9LjtTSo1jFEAfM5csivJSMMUk3Mc2KfxAuVvQ4RCGWvNf5Md6JEPrgbyFc8vWGk4mwzMz",
  "key18": "5NxKV8RTofkHxryDes76Yz9kfikZZP6J7WTnrAhsDfWTELSjh175UYP9xsqUp9wirZGATfSsCecxF63TFDBvfC7b",
  "key19": "3TE5vG2bkbH1LM2Vz9eW4GkBKidHvCbaoA4cSyjFvBnC15pz4eCTFKCNTT1fhjZrqZX1mbzHejJnuvkgvxhg4f3S",
  "key20": "5K4rosj2djJp5L2EnjKcEeUgaP5ZqPrJT6unsrP7DHbLL5xT6nhkZnQYMiUqmcQNbnvxAzGma4KEDm2rwLHnFaED",
  "key21": "MbL9bziPS3hv8vzx59US2suytwvL5CM5fiBYRgNZN9gP5nshFrj4JVdbA5pmVKS8DobaEFq17QhK99Xi4LJeu9A",
  "key22": "5hMntQGF1ytxrmhsmUq4oDrvhzZS8T3YCZeanhxar2SPRD6xRzkC7TC5qAKeCmGUMFnHJSXXCCBqcbTXt7LPdgZ1",
  "key23": "5kQszRTpzfiLNCw4KRRwsQLHq3Q94F9zmoEdQvo6HikS7Bv5onbhRGfh9KS8H4gj6agJY5omn4dTgV2RANHJmhhT",
  "key24": "3ahjnzP7T1b8gjMNs1cmMoTzS9gbCvTsUsdKHWab9t5bjnKKtZxYMtyUH27JbMdeLj6T95KsHToTxKvbvbhvD9Uo",
  "key25": "3k4Fqn8uqPxzFMNDYojxkJRxd8o35DnSwy1P31ayphP2oDQo8ffb6YY2BRjeVPPUGBGoVc4mQWH5KBsgoV4M7CeM",
  "key26": "3kL2ba83og2DDFzt7tE7wNWyAqUZfLhRK5tesJBCqPHDLfziUVAKZwWkey7LWbzmeRdAa68qRzrccwvVarswvdyi",
  "key27": "478Dfg3GaLucGUx8EyRk9x42ouMM6v45ZVBZiDAFMdwaTYUUmdZ8HVGEwF9pmZVSbtxwyY2R2wMMXLV9PdaHX7wW",
  "key28": "2DhLTa3psk6ndedBKdaap2fhVUBvkYfUKZYBLi465BzZtbfS8SWcrzxYKoskkWZ5LUgXyupbnHnQew6J1nY1xGuu",
  "key29": "MRhqQY66uLftiQut5bY9QhFs8NG7cgQUvmMvCjdocig28oDHbc2PJDnGHPJ9S9cdvRCLRLAFENbequZGpfJNqic",
  "key30": "5ZvYGSb392CJhMDsHaHUdAkqqWoyHvnii4fmKcL5b8jUwGVHE5niGmHxrpDAme7ph48mtQtLau4LUu5tToBro5Nu",
  "key31": "3VsQTjeR59aJMhBZds374pDsDHybLSms3JrAyngEKCbbkDkKqVwJzkPrBkZmmMUxGFcNUVVTMTwq8Xv4xy5PZHUH",
  "key32": "5491YGefcqmtYECxnCpgCC843MxMvrTW7Bs2J5Uor2nNNtkD4pD5QJH2mPdLspMVrAuqDsbScWJ4LcMaP8AzfhaW",
  "key33": "5pCoodb9LosnfbasqP3KUPjvJmYDdnnPVFVLXzTZRSnn55YAUVKjyjSapWUvbUEx6gqq4shxBiEiVM1ocSEzwVeQ",
  "key34": "48xVNG8BetSpmoEWxg31iWrJBXB81bWkZtceFUNA9jbrPZUbWg6XgFkYnyU6AxS6GskevdFpycgwt326yN6YNBXx",
  "key35": "2K13t4SdjGmqtiKKLyKSi2y1joPmuSwTkPp2ofx7cMMbL74VidWvxrnjFLPSqNMnYPNCTKjnRrZ6nxQe5w88PSjE",
  "key36": "2ioHhRLefMxo9MQJvjmc99YFANjaFPBumdwHdaQWvqQm561NKkGxjqD6NmuBFfD4PaLC2wBHP1sy5HcABoyJj5ug"
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

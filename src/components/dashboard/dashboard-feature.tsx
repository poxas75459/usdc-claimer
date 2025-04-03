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
    "3n68ES2D34c1wGPjRgxHCWuxa7HVDK6jdtJuhQUhqccFMNvFGvn2MRsMiGxy6THFRUv1HRzuQfaogfemgTwNRAdt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DY5bjtsJvRc3LBLji4mAh9q9XyQHoN8K7Kan5rXFuagpvg5uoxwGSw1g99TZTefgf6NQngfjJswCnDpvzG1PZSo",
  "key1": "3XXUpoabRgLUVVdTrdGPGjfadRxyaqVTkqNakHNXsKDvEE8LwBFo6U323rknvrBECGHDkoxrCRwbVVJeC7DoXnVv",
  "key2": "vit9c12EoCCxqpJ2M2zvqqV9FfbdofTpjLgbvgrA4k4JH56V86WpjDPQzymQtnh7iMRVRrwq8dFaKmNGbtZUn4s",
  "key3": "4xo5HzdgY6ySu6a97YYi3DqztANtktLSBJwusS4oScwtos5w7N6ZHnKMXdMJ5gUb81DzgkDrWLDr2a8AvDpBtV2N",
  "key4": "2wjHP4S1H37TeDRyv18b6QGWhXC3EHKG759rpkYzSkZADX9SFa7vJiu7G8vwv4WoNx7UCeqMpvnL6b8f6t841mom",
  "key5": "ZVcCFEgvdNNpmB3iACosiCC4YSKWBqJRYvsyMfhMJURvuYLfykWYMiH2UUZ6QxkerUEthvDV9NS1FTqK21MRkAk",
  "key6": "o435UzjwbwwbRyZsxemjHZFTMKEauURjfZ4wCGMVA5xC7iutMQT9LNVSjb1BrcU8hnWtsHH7HTkSQL1qwgvR4Zz",
  "key7": "Ur4MNCeD1sccJ5SUL41CqfHnwduEj4Y4tr2u58A8A2nE6uvqy54Wd3Xts9gBufSra2oJzQBdwuYmzpBjcc8LgtA",
  "key8": "4i9mGGsZVexQQg5V1aUuWNfqeEdBKXgrpWRLKZMhFJNCoxk49WNML87ZFXVYQTSfjA7urp7KJVvxmorbTCXdynTi",
  "key9": "2qPHUAYKLkw65EMopVPpUCzruW5JjyCGsSNCpY32NvF3o89Mv8U1U92guF75HBWrAksJQW5BkJ6EVFBUBeB8rNpd",
  "key10": "3PBs6FRzbDuBwx9nAp6yAe8K5Yh3LjRNE19sP6RhFQarVWVUj5C7fW725JPp1SnXCcYDSWTUZbkxAxEdiZfVASgn",
  "key11": "QGW21u7wbhe3aSw8KVApJAHrMfyjktXNY94fgkW3abd2H7PqktvmzmFnAsxwLS2iMuPx9jBcC22sYLYi1as1ic6",
  "key12": "5UCYK24E4zyp63dEN7zW7ckJraxpLEMeC483MyyH5BirEe5indaMJPnoJbFdKyVHFFDmxziW6xM7w69MacokYSAu",
  "key13": "5dLmgJAZr8CMKcdsoapfXyQgabpKqfzRynU1NTMxP1faHD4nSfDBGJy6m86kkXWamSoPHQGr3k9BC7CmwiCduTZK",
  "key14": "28gdiYbbuxBCS9u95tj2zAo7Jk3nRgRFzaehCWDnmZy4XJqNKgiktB37LsuTL2mQYaknv2umQsD6ufthiZc8xzuU",
  "key15": "2Q83knt5bmw7a6PEoFmf9RjjocUC7AsoVvrDdo9SF3oKWwoDDsZHitd1mJBPKmk9TGddWmcYZHtA8djzaG9BXat1",
  "key16": "4pZFUrDugimjcrVoBgR25vqJGYu2r2esi3rGpNz3Z8SLrswLusfeA8idaoDXqZ939RKeKtNQaoLViWEgJWTurhyF",
  "key17": "3k54rU7msX5JwYR4mxtEHrjGjzLgzfkud9LjTDcvHXfSpWa783Pea2RbyBEUShrgQQPT4PCB9nKNqNmm9ktsTAEL",
  "key18": "4wN424szguXjimfh88AscnNcmgyAy8WsLWJvmbf1ToYEgHjhV46D1GcE63efUPGbheRMkpu4YXJij4B2mEErkj68",
  "key19": "5bVE5pmRmLTUUyHRUgNKoYUKHCrewjjdnqTQ8uJvG3VwPV77RwrpwuEQu2ds9GpFuvhrYNqtCozy9V6rJ5TqZUsf",
  "key20": "23exPFmPfx3U5nxK5VKWjECg25oRSh6bo3wc5nwjZUGbPjieg74X36Lg4LQUb27SMdVtpd6L3oMo1uMWW3jqJcjK",
  "key21": "4xdv8UZRrRMiN5Y2cDuKhBdwVhUhhBVRDhL3MMVBbuJTxcxXMqYwXAfC5R2kfmpMt968s3UvWkXfNvVM3ecVkz78",
  "key22": "4RS2Mii5ufcp3xY88jS9K6QQrDgEUkxMwzGK98Z6pfjDiKCsthgwp1S4AeGJW7asCYU96cttEiN5m3Uf7cibmHRr",
  "key23": "2qMpqw3it2JNtsAbS4KBH9bVNP5k1WvEMXETdX52WJMgXM8CJQCUMvcLaPgtQopKTHZiKPEfMSyi4EjtPPP4Undv",
  "key24": "4Y5LK7PzPwtcr4E5BzcgsGvDHrw9U3vxz1WstLds7CRzSBCDHZoXqRzhaTDXVjLGz4vhWSYhbg4AD98cZpQT6WUZ",
  "key25": "LJAhW7H78f4nYkC9qCDZxAZMBNYiuF6sE5zXN6Z6WMbQEV93HDqTid2qSo71S6pCYrWgLJwZm4NR6TZL7ksH6mA",
  "key26": "2MvXxxmTkYLbvkHkC78tiuZXkFL5wGyw6vthfaVdR6Tia4H8TNPgAz4GAs15D1t4kpDVfUWpzj6ph4qGK5mUBzaM",
  "key27": "4HF2okjd7uBGF98PT7Fgt3AZmqA8giW4AqTSksZFiUr3P29TwUomNG1uMu3dE6KQZttgVKfWd19muZphujJxzDjA",
  "key28": "4NL67ouKc9Sgmg8UcJ1sSY1oAfuHT2MK2fdvHkZJF8uuxJ476FHidu7xeb1w2oyk8hrfeR12v5zm1w5TjoP4ZqRa",
  "key29": "3PVtH6JqufbGZ2A3JAPTRd2VqEb2asNvukZt11RsQ2M3pcYeCndMMPZtMsMFFNehXCz1cG7jUBfjdRJU68i78DHj",
  "key30": "4iCZQpBxG5TyfSFj1gNJz1PBXQ1nbRVshNEL3bU3cussWPt8dJt1dBySAThsywKK1iyz4uiSebd6r5D45bDEm8gc",
  "key31": "3ABfvMoKo36jUysLy74X48BP4wqPxPKgv6LfpqXHUwjqUoReq2vzfn5opZFeVzVAjwBMwTA3DaazxNeBdv1aEBKL",
  "key32": "46gHDyaG96mVoQJc9o38xVuG1xZtjjckaYdSA8EFcPzkn2RobRLSvCrMZBnRydRKsQVaL9CpAbDadmzHpnNtbJfN",
  "key33": "2zYDjGbdAuHmrMoLcNsqXXh6NSEGwg8xCULM45PkiayXHcNfTXsqEXHgMfaoZ6EF3P9MQv86xPPTob6nu4rbUWji",
  "key34": "2kcBU93oCbAT7ua13ZzQ6s4ZySBtK2N64jjEsNTjvAEectrdjBJtkjWBWvLHWevaydAEUZNecZtSw1LBLFnj8Rji",
  "key35": "25sdmi7FvneWK2ajDCzxbXcZGdzLGiG4U98ZifJBc4HnooP6SLZ5BX1L8Wqt5LhzT3ucK4cj1wC6GNJwfjf6M4V6",
  "key36": "zycymn3e2jYjZPVNAaLY1N7euwTAwtDVzr7wemQAVxztbfHNU8QVgMo4Ug32zJQimbAtHsj7UHR2UyZU42VaPpL",
  "key37": "27fFM2EqJWQdGtZ1MEGEouTs2ajHtSK55iACzPuiMY7QDgYkBULroar7gDufZiktzxaAAUECYnmtRKS42ycqGLLq",
  "key38": "5m3g5RSkG9JdGN7dxaJ2HwDKCtF9ArKQ4RkazZLc2d8LX3CrTNKW7JSWQxoqgiKwr3p8VRNC1TMYEwWtwykJvCnh",
  "key39": "5tFeAjDqqX3EtR5Yr5C3W2C47PGd1GCBRzJYu2EmhSWpZjqeHZD6WtrdVnQSXZF4nJaqc7VFHCo3M84eWhZXqH7w",
  "key40": "4nZ8K9uuu6n8QEZYbhxNwSgobJmSFAW5tgFzFps9zf1zcxqDaxkzAuogJe3yseSyeJaguHW3rWitk34j8NJa1RuP",
  "key41": "2GerRbqAWwW8cAcMLeDPM5af6mrbgZUAiqmee7hvk4XuzwnHtY4o4LmzQ7arf1y15dV5k1UBTVyy9z9yvhpsBRDN",
  "key42": "3SqUrMuu2H1QHzhBYumqfodtB41JsUCTWwcirRWjjLcWxgjNSuALcasbVLpmQbtzURHaQQdMY1Go6wwFvxf9BGx5",
  "key43": "3hMKJ53y7w7gRmh9i65UGe1UPSrVD4dZc4Wp5CPuVJkrMgiPXGNzEo6eTXM3t57QJEfzGyikcdDek7t7fgb7be1G",
  "key44": "2WPMKfnxoyGUJHTtaEyz4XfC9QLPrCxGA4Nbv1D4FHZwYuX1pwjwBcGp49AYkZDVXJmP7yFPsZ59rGDdfUco5NWM",
  "key45": "KGz7GpdE5rNkfAY1mR2EzQiMzwhNNr6fDX6uWH7nuacZj9zN3HdQmUJNdgorbyj6KWn1beATEjTWyoMjy3Sp2kz",
  "key46": "5Sz1TvCuf2bAuqG8c4ki2qjXYPgVNoZRavTH2Kn98hXyWisiA7Erja3Bgvmpt12V5GYkintyzmHEbvSv5BS1DdMr",
  "key47": "52T7mNGPynAdux4Y1sE2cFuNUqwKSYvReByHJ3Kg2RQ9bEmJxNkNoUbhgLRrngKCLL9BqGrgfXf4WHKZrCEGeBPa",
  "key48": "4iY1Ws6DC67SZtFmUBrAKg5LaGkuQEYYRFJquh8ZaL1hokKS6r7GLuUDgaheRKbVrwg7JMMdowtHWuB3vyVGKtC1"
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

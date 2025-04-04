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
    "EKqNXSsWj41xWH2PLCYgCJaqu8JqViJkpUNG6LY4aqQ8cABa5yX8pzkaeVtGdLyj8T2fP1bep2zSXNeGCZeaZcW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FRdEVvXY5fkTjCvBu427tzFsDe3Bc68sHqqfK9577AsG44UrMhQciWwNHRa5PhZXYCnhjyPAXniG3TL7WDjcjoF",
  "key1": "4w6fdESR63ZY9EvTXAUFk6VnFNs5k4hLvMmV5sCHNCbSAL1jyjAEC6Qz13iRAKBy5gsB9WPFJs3FvsBw4AExJyJn",
  "key2": "3KeJ1zHjBRD14VgqLW5htFKMmwGYvVtSACSAMT3aZiG1HcW1JRSfvkXwnTmH6Rpv8p4TfMXsyJBAf1iSzqpeSvgZ",
  "key3": "2J7LstymZfQanWBq6M1txYe1f2poPdKqCcCdVcMoY7NGQ4EinWXeXA8Wc538sNUNJnRVVZ8nKy6ueYURQgwoWYtn",
  "key4": "4dgsuhuoLUpdoq4yZTG7yLmmmr5FvdiVVCU2EjtrU1jDGvft5gdaekEseL75kYNPxPAT6eV5EPNeXcpnyg3opMfT",
  "key5": "2mKgyqgFYC41Scy1FUj3rPdwSmW68A8AwDN9gAoNmFCnw25mS5ehaTctFU1gYwE4UPNd16gZYSdb3AbYoyaZm1eq",
  "key6": "4Ly7taRr9eUG5Sca2E1Brw9qEkW8RzYu95AbW1rT1Ke4xGDV4qCoVr3X6CSwsSY5pUhtUDV7K7xw56aZN5X1L6n3",
  "key7": "p8pPfzZD8hVHWH7dH3SpQgzxSvUFc7CRccw2t4E8S5LcbfzgmjfSx3rMe5CFCzyYXTncsmreLd2dLyxcD5oZquR",
  "key8": "3w1FY1XJdwezzcAEenFnx1949uizBeMJ9oxe793eiVp6ciKppadBUVZuU7Lk3JteJXdUBYxQK4SV1yanxPYrdSQK",
  "key9": "3jbNGbS7nq1RLMqDBCTeaEoVT2FkznFr88kYTaTM9XVtNNsFDt9Aj88QTDVtc3UVnYjmtnwpndzzzA53whruYyJV",
  "key10": "9i81S7hYSZap59odYEUWaZzz26WyxQjtnfY99G5uZb6HWNry2wnEFkPBgbzM255ptmYVLz4X2Nau46rGqX5AqJV",
  "key11": "3hMCvWuCDr6Xi9KUCa5ddd58afed7J7rqoezBEX7eMtz2F139PVvA6BEHfC3byttFVitNvduVevVukboV3FtSwg9",
  "key12": "pLNLfzLYaGVT3rcLwGckn8n7TXJmCWY3172WCX9PVN2UDxZAqGc3N4nR3eB1mkvaBHZJq1r2P5D1GkbG7FUkhYf",
  "key13": "3tf2YjBscS67RpCayVDzP7S1x29dyDVE43GjRwKH14GDixAyBEChvGCes9xHs47z9qJmcKZvJD3e3CJEeAXC2EKE",
  "key14": "3bvg8Eyjz6HPW6pGHCKqPbUVof4eY8A4n9fkPBepAQLtji8SKHCDJDBp7RMJXcWSr5thk7EF7u3mVou4P1WtZzfZ",
  "key15": "4yswme4oTdvg6AatbMpriXVUMhCENnVhsAoHxDQF4zx3q7syziszHMzVZu5AtNKwxXW1vrkCFzYbH665osqT5JXt",
  "key16": "5ztQPr2E14PKGQ1QewdHFiCAwXor7iCK9mcPKfhswhRzZjqpeSG9JSExUPxVR9i824jQ2cUyEpwmzdLf6a5xkgij",
  "key17": "5X1GNLSxr3cdEUf1scMXncPPmCd3e7EkQtxMLmZ6kgv55md2d285sevhNUdKmZhRNGN4pKtmjWMpXb5S7zMBJdcH",
  "key18": "4NhCgF2HT8J21xDKjxcNo8jmYVszuPjTM52dAAVh6AxeKTSc84ThrzstQpRSD4zxTkkAxWAfGxGB1VoTMGWfWgo3",
  "key19": "3ksYNeYZnce6ufwhZVM3Dq17gXMVJkZD4iubcYj9Du75wfEfGbYYaxpTqrj9Xsg1hjyJmqU2o3T4d5Mqq2wfb95J",
  "key20": "4N1iZBhnVH5XhdMya27vBHJihjGHH6rzLiCsZNsrSqX8U3o2bEKR6tGCigD8Len7dALW7bPVaWSZrFHDb55gpehN",
  "key21": "4BkbDhspmva8znLHvGMhto2trW9webiGYhRCp38bMsyjHTgh16ukWR9o7A82RxJQd7SoPP3o7wptoi4H7GtbpBTm",
  "key22": "41F3kms1w1Mb9rPsSzYmJe1TmkKxgdMZ4aYWDjoiXKG7U82W9fDNQ3wN8SM3PLoaNmcLpZ6JuTvVdwD1i4VA3wWq",
  "key23": "5DET1Ao8CWfNNWZg54RGVZHsCG1n5ePBEQxHEE1mjUriGCSmniM83rLH7zSHpWFf7hjC3YyA41PzV55TWtJh4spT",
  "key24": "5VAG4bZP7MDgJ96vtJ3K8BBkA3RDzbojg2XPyJByYDQHkbMdvKM8mPH1hKoNdG3CNAfKAeKNTgyduBzjXFMHFRoS",
  "key25": "FDgizfCp9mQrJd9dTctxK64oHs9sJr5iovsevGsNGmasjgLgCHCMRXKpFNvEjud3BFFeFbCfMzdFHVA1spXoL12",
  "key26": "gPdnbq2uynKsW5PKpAga9FQcyoydU8EugKKuZvuUJ5wWuU67eZHvLQUCbbV5epfufH4EGvYvdMR9FDSkRDcoPRE",
  "key27": "57UwMUVD5PDfzf7mikSVNbkU4uiHg2mXs6KPTXacQwNi3eq1YCmKoo9ePGxseHfZESLEZtXJy3UHMLutW8aTvUfE",
  "key28": "5Y4jsm92PibSH8sayWgXh5Umxrjn2gdvmNxfGdxBsvca9C9kdT87sL72j2rAENfzhvNqemsaAVaYneG65Wi4y3iq",
  "key29": "65Q5R8HAFjSpzj13Udqvkp3wMSMGkniAdnT3Qbg4Mf2QyH8c89qE6oP9h9iMuadkeWfyKPzJsEenWM3gEcUmEghK",
  "key30": "3oHDrFdzcRcBoqNLj8p5AkoRzHwiVyXDkkrq3GpWnmTixPU5JQd9VG7hWY6Yx6xSgzgA5GCTResGsRaJBktuDsnp",
  "key31": "GgzPy4rAaXPFeLQX2Bj3bV6rskX2iv9FeLmVDT88cwUUfaWfjKQrEse7xRBau78FL5TKmcYfwz6aVZpqzj98KGo",
  "key32": "2qNCKXbkCRMY2qeRNnBEAEoCo11Kv3jKPT8bb1fHKAqxwQg8MxvKQ9sH7VkpnvRfgMS4WHdXY3Amuf6UzSXJvwuh",
  "key33": "3b3SPa3msLTAicjpvmJCJCqqPqDwf2VVsewzfQ7U3paFdUK5iL4neS4A3KbVPaCLHGbNQKqX7QAQNbpeXMr8XPYU",
  "key34": "agH1Nj3eeoBQzxxZXQUDR2BeDMX7VbX4UP2ccSZmCuD8isQcMwnCtg4dmcRXUsW1dNYfsiUd1ShLxEaT7AGezms",
  "key35": "Ag7h9W4U5zWJqAJZcE9GCLAptRnXj2oVFDQwaN1PBvV1huj6gAHYP8AYs8g56QZk7mvhivouyFAxUAe4dDV5cLR",
  "key36": "cYbGMMnYjHYCxme3JE1Qh8QxKFqc4KVGJMMU5TDUnk9k7bo9Kibsh3aNsXu7Sa13WCyyEgguW6zKyJC42AZMU1s",
  "key37": "3re4YMXXNrUs1F97n8vo2VvhfFBpHXWZ2DZyuJ2YZ7pKP1EVdQubyJnmn5SFU9eXrqyRzimtH9cqnkGCVPfDLFVz",
  "key38": "36TLgLDifurwypYrkL6MU8mpBBF56ywVt1hK9uaoXeSWkHSWijsFoDWsGP3EdCtAoTJWbYnfM684aFpASqA9jUt6",
  "key39": "3RUqWTwf64EGsh3FctyHpKG25FSXeCskPeRSjVR56Lr3CL1LoQA4VpQuVzazKTvsnY1ijXR4QwuwWeLkf4r4uHkF",
  "key40": "4Z4Qi6xs3gpDHWCsV2rhvpgToLUkPi8awRAPYzNb9wDuzNHzSBs3S15cc6qEm4tZnUm8wV7Cy55Uv8izMidXCi4r",
  "key41": "3GxzkyWdwq2QtdJTcU6npB7xfi8MrYGopSieJLRQBNYudAqy1seoYWjEeKVSGEftZLgJDSw5Nrc5VixiUc8oTC45",
  "key42": "2G71xgm1pxav21fG7L7S28uEYyxWgKy3FTtYnZnFV3etJXL9QGxE1RmeqoxgQQsZqtXr65XoDfzdDs2ofvdSzrjt",
  "key43": "32p4qUqCKCWytDocrhupK8hci58uLYPVUu5H6of9zLc2xfPNB9G2r4NiPszSi4WZg2Lytdw9duCsJ6gsgUpou2L9",
  "key44": "Bzu4PoTSrmH55pPqZrXoBXVQxwreJHqAGfUZNPD5kekw3LwDoxRtau4B7uWnxhPdqQNtUjgy1ghkYDJXrgxeU1N"
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

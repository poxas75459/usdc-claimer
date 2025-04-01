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
    "44x7JK3gFycwvWkDnbw1tqg2gsCYqQE4tCRFvSnRUrRfHwc2s1QMW5kZE3Yo1LaVj8xY19PzjkMhKafKNECqhD89"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61Q1nGmpHB14jVw9eC48AmsFXFtPESAnwBYr5CgqsUDSJuzG2wWgQF5sgRuJJYYwRPXMhPrt11C7FHwNgPGXaKyt",
  "key1": "k5pGxeb1Y2EFPgqtvasUkhkW28Wrk2yn2PN84QdSZsZXSTQrj7JpJMv4e8jKvXadc11KzokZbAxeAEjatbkayWF",
  "key2": "4MsMRY2h3AGChrSp4Js3T3jSAZCTNLguwHrsRFbDAB78RVi7Ga2BN6G2XVDNteS3fx6e4rFFBRbh87zyPmixDowi",
  "key3": "2MNktPzZnNyFWt6AmodXbvsRPz4fswMgMhwbLkfviGRbA3k1xN3foAQ7r96cEyrkRnaYgPSC84JvqsrCsZdwpYRS",
  "key4": "56hCHh4iTXX9ZmUaWQ3ZNQgEhMHFVkPkfG4ujSnyEBPrt32vP9sg9yymMZNzfqhShUCd25NovTcnu1iP74j1p8mA",
  "key5": "4jECY73xm6Y5TJ8wwWjDcrpqCgWwCQpzTfNmQvZTNW23R2C2HMghMoYwgcQStcVAF9svPemgWrDiRt4BrqNJU8rA",
  "key6": "641j2RoRcFbwwvJUgzvwXn5CJ1mS8AMebyyx7af4a7J7SGmKPup1ZzY7XNTKw7nLmKTDXX4bqNAYH1VKcZNinMGK",
  "key7": "cNLXLwxFF7UpjLNUDo2BiBBMqoyyRKcieVW53vy8vHiihTSJkoKnbWWyAvfS7YmnStuQb8KKmt9LNzjGqEcWuKV",
  "key8": "5kyv6o11sx6mi1UaW6vhwJMoYk8faxufitXcWjF6qUD68nWvezowPjUCf2f476RhdARQZx4EnHvJPS7cAPEP7Utw",
  "key9": "4Zuzs9LXXiSHpPUwuqsH9AkuJKnqDyA7apM5aJLUeTfyzmBXAt5v8H1ewkwbwXGs9y9Y5hkqHQF66L5uBcrRtt5t",
  "key10": "NZMFBLeg6insWSNv1uss9KHKM1RE3zFCpVd7th7XvigQuSz5yEeCZEwUpVkd81qCcEL3d3moc6F6AaNGTnuFy4P",
  "key11": "2UZiZHYWQVC58B32WL7kHYQW5UiCGNkVWgYjm7Pk8RQkbEG7bexFn1BoCSQ1maLd78fHdQ5L3DYbncx5zKLEFLV1",
  "key12": "5eBbXv9rbxCkJBNdzpCrx1WXEAtTxTGe1o75wjgphG3eqLPGygsHSbs9nbFAGsTG9JB2Xt6iXoKNsbm5fYQ8v6fD",
  "key13": "qEc26QNG74GNP9MqMPrUeadThUjcXTBE28HcWvfKtzP5ZwogsiJ61yCCJ5MZy3zg2DtYFewAJ4s3yPszsogRJF5",
  "key14": "9MK6DWf2HFvPYzF25q453qDV9WrN9jXGYDJQ1rbFQAYwyHgqb7ULRytDyUjdqoKWhv5s4MRxRapdLdYnbUfYVSA",
  "key15": "2tjTag3QU6ybFwWxtCx3FsqXX1jShpsrMpzDhFSmZSKkqkx1ZCiS27bdsuF22uF4LaNCDiZKhTDewrgcoRMJGQZE",
  "key16": "2KCDno8CW9uY7D3ep5n6fBUs1GhnxKukBUfM4qeMLxh1ygNrsrgfdPnmMMhQmnMZ5oRxpsLg1cuVje4ntuLQsjEb",
  "key17": "4TKFaf4UeszxPEAc3Ew8tSEsNGB2aHHHedh2GB3EA35giGPSccRmNKcbn8zjUjyuyan4g1CrwmkPWMuhwZcGcoz1",
  "key18": "4B6kw3ZdWQX6TpCQpmNx5fvMgYVAQsD8koazWXYExpUpr4maqhn8SjYmVdDgDMYXDktpiz3FJVrynaMHssCbQcQ6",
  "key19": "5CyCJNATBMz1seWqtQXun5vxWRTfrvcz87KobWnfsgUS6CDzLm6x1t1RNEA5gNVK5RRrND8iuJvDvZnBWSNuHFv1",
  "key20": "2QVQmnXxYZeQxFP2M4tFsjoiTSpRo1B1GPxpVEq45ev98y3RWMCKoMcwaGg9yPaQj8a3akNrPtdMwzoYWCkGzggx",
  "key21": "2Q7o6yyapiSoimasdsDBs9SrcBiUe3dLXHRuA26FVSaWTjYGZTfpd5WawUcaSueHR9SmwqMsteJqrhJrmHkMEhke",
  "key22": "5cDNRFtzSYcRaFteQyFVL2aPdKxnaUet29eu6Ku16qgfqpaFERXS6PPG7XADtPYmDY5f1U85Bdedb9cnZHEn1Xr7",
  "key23": "NMAnC7tpGugpquaNF5LCDtj9fcbZHuTCD3cjVvo7qzXKEh8tHatFLncMkut11HDVGkR3Ku6TqQXkMeo8VtYvQdN",
  "key24": "57J64mgue18gKNoCe17VYzxaaZEEWespxggnhwQ4edFazD4kT6vJL5NqVHo8MAzNrWPaffjCodecrVQm2urN6L2w",
  "key25": "4Nqdv6rV2i9czSZiZZc7BLuccXqX5wuX2CVZbsSJ5xd5d5KDJK161BsinGLy6scK1ZZT23qoFoTrdFPrjHSpuRyg",
  "key26": "qc6jCKmnDrj9sh2vNvaDJmsmxckNwXjX1YmVtgmt2jhu3jJuMVSSVxz4dymYXSSFiQy2XF1MYqknDuGjWpNRpp2",
  "key27": "2jehsW57Cgb5Jpc1okCGhmWjajcnELvyMVgBkr5kBNiSgp3Wh5df3Ye7Fe7ruKuXcg8RuU6RNYBCxEmG2vL1nqJF",
  "key28": "B9NZ7F638dpEdXaAPw3j9zfVGCTDYvNYbCXTySLGHvP1H8D4yThKptpLHThAWWW6hHA7xxoKvayWxFL8kYkWnK1",
  "key29": "3KhiSWNkp2cE3tcaaaz5JEwromSiCQ2nHEmtiuuUkcdc6i7M4zmJ7Wiyuh5vvuQ9dqti1NJDWALxEbZSzxuYTemn",
  "key30": "3kfLu7qXdTDNdbe44fSryrFZPqs6CTG79rBJm6aCDBE8d5G91RnCCM7fHNG7nrTGgar3Wz4sBjda3QUgg8aF464u",
  "key31": "kS3sgVSVGBJV5v4LPaLSXKUvWibuxwrTw6oZRbijHXXMjiTZZYeFsr8c9nn7SxDBHH2sQW85HZRSNtTJ4UNavhA",
  "key32": "3JQhnwQnpUBxCQR2iwatxfLhSFMtVZBY8B3jnM5U3nPqNZEFNAX4PzgZT14ykB5m1EFNVt27x5crzNeLhViAhDXA",
  "key33": "3zYTejjAbqEFwQGSDx832pcU7wpbZdgBafggDxWwVie7PnrEdPNXJj2Zz9Yy7hFh1HSkuLEsK6C45K7ibLXiBjVz",
  "key34": "56swSUWNXZQYhRKe7zKTGV3Sd1C8VTz8FJ3x8HWXsUHVdG6UQPt2cJHRgcVLSfF3GNrZDiaSsyRZszTZvHmL5GCc",
  "key35": "Zi4vcRnRQLvKKqqqSKZCbSZpFKh7vbedoFvfNg7uKiBv1cdXpj4aYdhAM1pNgAadZvVh2LfzrqCD2BuoWmD3VND",
  "key36": "2nFGZHDWBsibgHt1Cw73juH1ZjzyFwvSWqKxZA2G3XDRHf5FoCHGCR81jki56Fw2DmCwkuizYBHooejDv9dYta1h",
  "key37": "4fyE6S9j8sGEEfLNzasBjBXi64k1uWrWzi611Lhf1nPKLgaodjct87KyR7NY6Yw7feyRgFwk5YcpwYnWaburKNpo",
  "key38": "5tFr6V5p7hZzgueYpvkJT6dKh6EfRw9UmEDf3XRiHwCTYm4VKPNiEGDypSTExW7DrWpLQh6mi8QDcj2N6kP5sLZ9",
  "key39": "2wfmspYXvmSEDTea78m6GKkrjW6jTtKUDXFJbwYbKA45xewYuWTD56RSMn25edMwTbRrGWZdJQVtAaJ7MmYStTYH",
  "key40": "5pe8oX7N2MXcVS4i4e1HKV7UNB5zEr9fATdmD9K6hrEAP8TPwUtwUgyKMz7xUMR4dAPXcYCBTtnZGB8DSmdrLSay"
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

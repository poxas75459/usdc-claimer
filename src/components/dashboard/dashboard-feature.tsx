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
    "2oMeeFPMa1rzrBtnKATtR9f2TkvxvH7gsVeUNeK2inrpbdMzgGCCm5RbrSQPTq51dJjg7aWzf4B9T8iFfixteTH8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tAbSTUQhVyDFpYkD811c4EheM5Fs8sFXbhw2aeSxBsujWAUuikDkps55ntC1A9VosJAQXVJCgZGFXmovmC6zXcn",
  "key1": "3sBWeZi45NA5GMQbSDP5MuCExSYKooiVuhZiuoT1CzqizR43ydK131hjVv9wJ4pGTLRn5P7zYcnpx8JvbLjg18Gm",
  "key2": "39GyHGFv2t6LPF8Aheip7UBo5WRwSrpBNXq9aszAEhJLtM7wqx3zKhw4YQa24oZXCghUtd35zvuPQ1yeCYMYkm67",
  "key3": "21RWtDYuYffVeHH9Zv7Hr1SGfEXXM31tBgHampZyicdNd6oT3MfyRbDUKHWgT7TabeQJwhzVHS48ctZrN5YLHGZq",
  "key4": "tCM6jKENhPGq1NwYxx9rTU13qJzq82iwbjzvdukFkdda1CWGcHk5W7UoNsNv29puLVVgmjYTrJmb7Pe98ZdtDty",
  "key5": "4UCqJNU8F5AoUD5xvJnwJy2oGfbKz3GqJM5ADm1HpvoCciEcXDZ4gwDUMsmNjB2qYmu4eyRMr1Jjigwp7m6FPCmV",
  "key6": "31X6Xv5bwC5KBZD2W1nVp5Typwpwvxgd8rU3j9egipy6KQixfXM4escXBdJAzSTmT5zVaPZMxVhWW8Xknm7H4YXG",
  "key7": "2hwA84jSTfQLV3dNjoJ5JmZbgwThDT5hr81nsoEENZoLWziXQh3MMGDuL81Gaa2K1qrLWFbM9b19vQDQSbwNHaaE",
  "key8": "3BpwjfmNpLwvWD4erW2oUipVV5Nam1tWdhqoTQifCySETCtiNLmD3T1jVtejMGRgxN6d9JArGYK2G9HKsXvBSVbf",
  "key9": "4VDjVzvH91pmuf9ukHXtdWkrRER7EStKrDfyW1wiEqFw5PZK1LL2o46PXRWavthRCug6MUFXeyWr7qCeQpcw1mX6",
  "key10": "uwzvvBHPpJBYuX2Q4pgXcQJNpCvdGNq9XukyjeuYKx6NVV9uwK4h8uCLpiDYFF1RTWVqXb624F4qds8KVGNwccU",
  "key11": "64vPSQB6ihV22HNWhSM7y7soYeAt5m5DjpFLcbwxbWHzi91W7pTYkw2XuvDPajeVuReJnP7Jq97LhEpFe3NXjyfX",
  "key12": "2m6WBeQDEbKVsJzpX5DehCKkzrfoMeGBQ4HN6W1ZSgfkn4DjaB5LVVU98U3G274dUV5c9nxGVThHnK2phYFacYpf",
  "key13": "2NUbMyuAaSKu2D7oyUZ9hRxvYUG2LbPfiyXdEQej4eDqgpTCSCSU5KdsN2Y8xEk3DpeBoKWo2Vagwd5nnUBAgCqM",
  "key14": "4MBD3YkBs3eQmGfwUZZqbU9NNAxjcjorRqcn8nT5V828SZb225JbvSdPcJAmpXeFsamMT5PxFifJykochnDrsEQC",
  "key15": "2tRCJpCp9a5pYw5iSpnr4U88RxKm32fDv6DfkAd95bUHoKpkDHf8UKLmQ88gEt6D38YJ1jvzqEVqX2jCRoNNBUJL",
  "key16": "W4PiuiMfuL9EHCtobE8oLCBbyabd3dm3NSGjoRWWPgT16iQoSSQhpyskBRBKa9HNW2ksAex84gC2oRNQSNmHkDx",
  "key17": "5XGcC9HaTUCcDUq3pzXs9b1WXDAjR77oQ4pwWPtrWw8y5UT5kMoDg17jDzdNZgCcmQ9FKxCU9Bmx6dgYxJMKy8pc",
  "key18": "4BaFGAdbt8eJXkU4RFWJgnVNSv6ryjGcdKgePmywZ2VRjaBYThHh7X328zgESQAFDhMrPJEHzqoNpKFDSFCWfRVr",
  "key19": "2EY3S2W3iPsXAERgi58K6jUMDmHH8hRe8gb3e4y1hPsymVbtrAABatpUFvGro6pVvRMYnhmv9WM2Ttgkfv3CRsoM",
  "key20": "3DyhGGJe9XXxLBN9L5hzkH6jxZpcDJG2BCF6CmCV2G3EyfzdwTQBruFKg11yTY5XGcWpqyYWfeE94mZuq5PtwS5R",
  "key21": "32hAi8WT3i2FXME4HBjMGeodN92QTnzqBnAssUHqvjtkq6PeBtaxXz8CMiJSnpm2jGUTu3jSEqxYodBqC9iJQUgX",
  "key22": "2CmViKoXQwR7rwZQcgtRxd5mqfnnNa358xnhHoHXVYF6MHk4WqdY6oiyx8MDAo4w5SiP75P6UC15AHD8WCzEikWu",
  "key23": "4cSo1zY1MKq8EyYJrMT91ieYmhY3UvoGY1DFhVyVguiT7kWeDU5tnwQh3fNA2mizKCFCEGevLVKA7rgS4kseDDsz",
  "key24": "2rt2E6bQFaYVrz1p5FTUZaz6qTyxLQbWjFFS3KWVccdMoSYmf4uFoHza3ohQqUmRy2ykbAwDgFVE9fW8dWvvU9mv",
  "key25": "4AGeSmXAM8qYv221tXKNB2q8aXMu4sVgKxJZiTFwkvm2oQPivRfjWn177aWUYHmbXg2cHmoZFN6MNbq4W5136GbD",
  "key26": "21XoS5NjsWT2YuwFNJTz9BTF73NtyHig4wPQCdvxHh5F582sJCBs7Tj7eWQvwD8kXQnGDRtCxMjRL4gKM58rtCm3",
  "key27": "2w5BipL8hHKsAEeDvrfWiPZU69hBS7gRm653SdoSegxAtXBMPPnChJoyEcphznokhz3JbhwvZbYs43hybw5bedt3",
  "key28": "4QNwSHk4hSSD36Ujnkx1LXwgrCxNJZY4ZekpdoCeA2AAizTxobxDYVaFNM8btqjyoLWC7dzmapND52oXomJG3G8L",
  "key29": "3hhV9VXt7131PFYzC5GGTptfBR41kangKFbXt76PK4ztwUuxPxxjTjwDqECstPCURyVbNr3nU28U2EDtUJiUexd4",
  "key30": "BjMprWG4jj5m56b8HgBqrS38hCkaDP1qJD4YKpzTofJ1jASYq3U8NQKeYaGky7Hxhe5vDa8RsZHCSSzhmcrhQjf",
  "key31": "2hBpcNL3juymhcyGZ5c2Zb4K8DAv1ZKGksgj2PpjtoF8UWStN2uEbFhbmwYdUR4z54RBzRaDEiP5R4SdauvhPVBr",
  "key32": "2ENzpPPaX66VzfikGnjYLUWTB8xMV3kQVQEFx87c4QbCnLz7tJQ95WJdcFg34QdjVePQXkbvdvNDNhho3DsHJBFy",
  "key33": "39TcVNg5L4TvJv4BFzqLPt1RgF6w6PVkRzEKd7jRW99pkNrGiTjb3onbWENNQPMwS72zoViJmBhputHvT5ZHDGZ5",
  "key34": "3GNfKLMudPovdGzXG83iEKCLykTvBmJFARUW1WQxs5zyEsxgt7CEpETUmcFLPN7LdGLjd42FBEKCWKUKWHZivWD9",
  "key35": "26oAjYCiNvKDhgTgJqw4gAxwDBdqCpbPd8q8Xhk2cBwy2gmAtV8iQ8fFMriWSErSQyB9dztDFemDQbdy1TBMfnXz",
  "key36": "zZaJN5akytRVyomqrcuNbDrADGFH6V8CGvQravwnbwGcLRKVhncZ5nu3t5NDMyhxvk1X9hG2UsyUFfuatS8Gepw",
  "key37": "4udpXZewVkLWGR4UQ47kqKpJXGbS8wnFmsUi1UC1vLWkic2GHmPKGGafRJYdVLZBEz344KJuPN6smTfMgtjX1cXf",
  "key38": "4QTTBjuR4oJg3gsz9WwYsvxxreZSJrAMtExJFZQLecSf4xLHgwg3aCS3yLT2dLMtWLcRoNMhhoMmMo8gYFkj5tQu",
  "key39": "2nrV62y9vCwn9VMuVMq21gDea9xELuzJrj3aDaLG4Qdsjkn9SrXYJoEkuDUwska61vW3X2rWzg3oK8zkv9Ekje68",
  "key40": "2xE8AedpPtyP7Q3gRg59ZpKk9NkCcDbPKTgKamS5aL67f5LNumiANmsCxFGNHys9oQ1rZYZYeCeTKRoybbDcc9WZ",
  "key41": "26cPxLA6XCy4kG36EriAwcyHXXUC6CuTxCshzYHmGHfkcyxvf2e8Mr3Cdk45k6kvP3ZPJBuVw3YW28PxKshhMyCT",
  "key42": "2nDWbYbFEigL6UgME7NCbdNHmczDweH9RRQJSHNxWn23FygasujmRRPE3Qffn8LizAdtjW9GFgwohWF7hje4bQxb"
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

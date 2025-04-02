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
    "3DsVCbCn6DgHZuukQcqH8oFQ8nuzJ87z4keNny5bQuGGpJSwVgpbGAJEpfFkoheMt25ZnpzsFwh6Z3scNGyiYF2p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WqGqnhg1oFpu1JbbQGHESpGm3vSWtJbvM3yELjGjeb8C3Z6nihrse5CgC3AYynSY9Az3s2oqpnTaDskXAxPLZ74",
  "key1": "4V3FJYBdW9bDE57PAoMHmfh17M6X4XF5WeU2bn2yhJFBvhgPS7f3f7ygbZfSUeHtXG1F5pzaamun84HqqehNCirA",
  "key2": "3yoEAgE3ck4oDAwoio6VrUyHH3KeQtT3MmmNAZFr82PqnNWtzbWxmGTp5Z6sFEgJhGhWoBMNQUBD5Cyj7csVpFu6",
  "key3": "3WBaXMksvDQzspDe5Wz7YycPQtjhppsfe5jDvNJ27uB6ZZqcDcZ1nnGdBJU3xhq5oRXCYqL6FHpLEyBWm6Pu4V14",
  "key4": "4bv8xjfRXv8fnsQGaJ4Pib9uhaWxk2DEwjufBUWbX4cHQKSJ6dA2ZLSUCJUVPJQoJnyWwjDvEeL3FxqXbnzR4FSa",
  "key5": "25uzk1CNRYTuiWwKoZ3W9d5wnb352CHH9bf9WRuDM4FhZm1XkuoQXRa6MHPbeu98L4svSyo3fVNMvJAMw8BGd6RC",
  "key6": "33aFnFa3DdfuGQCqJrYyMwYHHM8sEjBrkxhyedny1i6CBSz6aAdSEgnRNHV66MievBNdaGWYQg2CjEnpEduRCbZf",
  "key7": "2ewmXtfpH8JjD87gcJNmYKxAtbjf82M7hRyqwxe41jmHsPT8WVEPW7fNNqAgJpjDoG31Fdif2v41cdwu2JzSdaJT",
  "key8": "5BdfKXD4Tr4ZneTvrHwd4hZzAD3BLoZXc3MzJsKhAoys43X3JcgVozpgKmH6a1iG9n8rSuri4v377R8NGfKJSMvT",
  "key9": "469k9AVCoW2ShSm9cgEa8RRMrYWrApx97cR9YAspC7XHArfPvNSfkQm5F6yeA2M8jebZZ6qtGmCaKDCHDcRnWjFj",
  "key10": "QeoaRHK4STA1Aofuy18k9GysdgMw5r7we24XwbXbhRBWzkHTPEgz3vatvFJfraAbQ1BL6RuskccVa8QgyCBs3YL",
  "key11": "3G2cdtjRh9mk93xnHfU9NpZAYYPSHz1ryYaXrPwjQsVTR45W2DDq9dUhaCTAYA14MKjwvSfPm6oiiZWZJDQDjgDj",
  "key12": "4ng1x6nCrw4owbvJUVFbmTeLVDxqmnQsP3fdEisk9MrfhPjvBQS8S5QkUX4tjBtuMddXGPASrxZUijoZPdBVmQej",
  "key13": "5dcbDnGNuFcKXBD4BzqYmSgBeMZ9yaqasUQ8VVnuRzGD8cqQYu1LhkCDUyS73iZ3RVEbY4GSYBwhM84Qu7P9WUY5",
  "key14": "2ditJMQt9uCZkYb3gRzo8WHChs3ikjJBd7tqVXpx1sRTGTS2SgZqmpduimgwqKvHttciZ5ZsXqvZqt8om679vktQ",
  "key15": "4QSjZzSjXWouVeKZCuaJvaVJJPfy87DF7UrBpPXbBgUYx3ApF2wfHgj8jMNKyeK39i8Nr88v6vLETr3WRQSUYu1b",
  "key16": "2TiPE75m7EUkovSCmHRwAhyLJEghPU3UeC5vNan7jx1BeBBT8b5s3qtvfJM6mBCfb65K3AshMaRMZRDe6pXdGsuL",
  "key17": "3mPGu4TV1P69W3dEgRKHg8g85MjwiPRt2tH5UWv8UoH4sjzHHjHM2eU38qdBQGYAtnz8GzD1humZTWMfxocHuEgD",
  "key18": "3LMQf4ZWqxrKpZx18rq1DvDQAeQrjfsprPXjjS81WsuXARH71tivgZjBnVgobGDoSYiwXwbFg8VbST1r1pq81EG4",
  "key19": "ErjL9aK2CQdvgvwvJVR3FJGHYAmmYrRgtkp6ueJfKP4J7V4aYh343JP7GhLHVZJ66STTx4RF5v9zGHo11P2AsNn",
  "key20": "4wH97xJX1qYukossuj8yJ5MitHpxhJfiGu3uD5m6RQgUF4xLbq4Fd6Nt7ZjpkkCX4BHBaCD6rHJ3Z4YRhLzUeexX",
  "key21": "3j5c965faXuL4DJF4TtQFE1LrpCzRj2jcpYdt8ppAjxRKZYKDAY8QMKtanZh4geBYLpu8Dxf1Kng4J7ZpqLzuWgL",
  "key22": "3DanHEo8Zyiu5YyhYmqGrdTyasMKssW3r86Lc7wjXjnNgRTxvswmd86VmXCwuidEqwCwA8KEi3pniMfapN7W2aQ3",
  "key23": "4j8xtYjSkZ6dgtUnJUfnhxPszfbmUbPwPQjJ8VWMXz9GdQ66LxZqCt84XUvFVeingwfzXg68uiZwHTcdzDEsvcmo",
  "key24": "23MSz23Cy8hU23pX91AdNxxdnVh9ARjYJLXq6QNtp6b3BZ15WATgVz8XZSD5PLmpHKsnxEQtkzD71RHQcpQ7WfmY",
  "key25": "41xrEkWzS5Hrbk2NKaS5VPDhxpaJWUEkwtTsSdb32EnpUcquzX2dZUof6C3KAPPuviJpyHyMrTYuupVqt8qkz5ra",
  "key26": "2K2SG5x3DbCr9irTGrdqsh56saqMeuEDo7ABM35qjRLcsDQVaCFyhLgjqXdRoGN7wPZDodV52C8KxRsYaoxMWYWv",
  "key27": "484EukLAyeup3y9HVmve4yxDQDFvYN4WEnXvXDuj4Pkj43az68vqxk6zUShPw3C3TPQbKoFfFmTnCB8BngpEZeYw",
  "key28": "3jjDCD9AWYbAj6BZo2CVSuAp4VSUbd5YKpx7V5KrSukoe1jMrbnTL6zxFks2SSTgtgAekb3UsBSx4jWodNU5PVMy",
  "key29": "4J32jU3pDuaDbV1mZheus8g56XXCp5LTfKN3QS8r4YcED6bGx1msnwmAtDKZrhLaGvG7RNAzcYygjRnfWucd7UqB",
  "key30": "5XGq8uJaBvVusfYKTCjrP7c6L9RWm95eSbCK35zgd6cMAfg5Ew62BAGLP91RdUai2xBqDoUnn4PZs7bvtde2xHX2",
  "key31": "3Ayemhx6nomnAFaX7NeJzkSeEzFynjkRh8bFzhb8bkuURe2hhLJ11Wa6pc7Ur9MZf5GKNmfhNVKTHU8eR27n8a9X",
  "key32": "2cbSZkorYZvacug5Zz7qkDogixGceXW7zQcWR5FNf9vj7qMmRaPgL9GZBYY3y6PT4FNtmhNcAG8mnChaYbSUnEZ7",
  "key33": "4BiUtqLNw249w1iJtKotY4Rguxax9LhbS9tD7zP5vrpsgq3bkipicGmRQhDEmKhshby62TYjCEHk1KGdkaBMw7FM",
  "key34": "2ZqYKuiMfD95B1NPc9sfAMcYZwAxTEPAYTRjn8NwEYHacV3EqRJqoYaJzpM1dDFiRCZVYcux3MR9vqAk1MK5eEvs",
  "key35": "tgJRzokqY1etYEtgzxL8Pjf41QVZPekDNrPPCv5xkciQBUkqou1ke14wFe7Yq8rZJAJtvJ3hjuHxv2Lk1oTj88d",
  "key36": "2syuEPPNywucNtU1b3odsrYfFVYZiCm1zzBEJznzaeyFo16gsntF9beU2kJd7Hf2VReA6LcB7X4ibjMYBZJogXvw",
  "key37": "riE9bHoC6xdL9vbS9eqbBuRnvzmthFZKFHtzV2fEXfR2WRq612R6KuBwB8th2jKN1jxzWzUCfEQBimBvPZgkjXV",
  "key38": "1f4DruocXWYL3rhgpzJXyHwf1vuKjey5AbWrxjHzg7Qqa26mZZvLUTPWS3YKeJjvJk6xFq6B2AhJLpq52UkEV4m",
  "key39": "3RHhVbqFaHMfiXFWTnkb1steR7qZFF5jkQTJYFfcuvu8LDZ8nkfPW5aEjvtoFunZMkcQVHHt21qySVLh2KhWVGBy",
  "key40": "mQKuXvspb7KuUh41ppmLmvhdA1JUskhUBYdMxiji9qyAU6B518ALoLY8zXdL1qHKcLkDbtkraVy6AmMiaKmA8Q5",
  "key41": "3kzk9V2Axk8uejGzqtmw61D5j6s2iUgSyUFMk1AF9DafAeVtsSqruX9fUSi1hYX8LPydRcAyKy1dPx5cKCWMkoLf",
  "key42": "LkZx4pHoLWd8W9uy8Cc5XbCowDsiYBJZuJNNNJh2K8uwtfYcXQcUb3uUYksWNvFDpaZwAnXsL4Ww8GVFjutoGJ6",
  "key43": "2THgM7PrsDUenUZnHzzmQz1xtQ7vFAqrHp5HRrjNejPqRPLqasY9YVy7LQ9WxGTSRekw4tvfd1eNak2q4VzAsoZf",
  "key44": "QB237WcAdrJ6RhkTKC9dnpXmcfEeMr7H84FxLmpc2gHezrtjar5vSzgdgcATMxxQ6qz7o4HKwRMX7hM7VPAubzK",
  "key45": "4VZT6MEZRsgq4ifmV23R2yiW2U6CezCzQjxbs8ZvitesYRz8SHFXjEm6TxADsic4dKXgTMxZqRgH3wr22EGSVvoy",
  "key46": "3S2jzx5ZdEECpe6Vogxx4LPYqT9bY3t5EX8BMnpuPGdJrREE4PdYrMKuW56nhduGvPcpEF8Pjfb8yV5hB5xr56ax",
  "key47": "5wRygCe4oohVjawuCdrGRrdb8x2fdN2R3Yqb84t4bsprpprKYDfVzcDSdy8VnMeqk9SeS6r4TCGT4HsKXLp94Mww",
  "key48": "21NJJXcacqwTs86vLQNStUfxAbVxyCShWsNTysjSMuD77SLbCPJGeWk39r2tx8Pew3j8vMhVpTpzHFg4VD5z8euM"
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

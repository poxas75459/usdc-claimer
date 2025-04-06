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
    "5CBmYA95m2FXvVmM2T2Ku6get7aqYAmQ8DjsbFc4ETR9r8yk7h7JnzrWYfJY7hhnGgLYsH1rjHLLTYFAVE1pQN82"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2urddYCFzsBHVM5fMM8ePhk6QfJuYLYVf6vCyj4T53972EUrcYwu9m4sWEA5Q6WN3i1remt3QYuKrHQhBsvLuQQz",
  "key1": "gJmFyRJe952gfLefi8CXQ6ofw5mXmaR8JvgB3jnGAtRFJxkRJ8mx4sjPhnhYxkJXVkZjhn1yHNH6NbRh9GrtN12",
  "key2": "HpQti7Y8MbjuZjEP4m4b7RCKYC67RGGAwMiPk5iV7kFxsGJGxhgVUXRQXgChDLJ9WmkmKVJN3Q8SDs2VgjcC25X",
  "key3": "3fQaTjhqRLPAVenaGvQqFoXmyNZjs1KBGDXkUYNamdRh4rXJeUqhBmhyC27FMKhgxQQrxK4WjXQLfSHrKCY7ww7g",
  "key4": "5uE6yGnc1eyuyaMbKxcDdLmBbKZb6kCoXekd2Qw1gXKmdiP4D65ob4BXy2HqDbrTcqqVBmTNY69pqzUTWxP4qre9",
  "key5": "3U2qRpcFgsmn5EJGAHd6CLWyRWqovxUp4YkYCzqJFnjonPSeTP2T27LPaYKfjfrUdCbkJqprmn3DhGZCGGuQVKG9",
  "key6": "5U9PFawYh7sLz78bBmXyBuLN7AgMzHavkc2mbgA623ALXRx52jLSHMqA3jKgv9hwtYhsP1GzuwfexfchoH3aMZ2U",
  "key7": "58idTnxG2uqPpXsBuazhoeUCry2nNbnEivEpge6VFktdf25bgkqXe4yCrsXw2bA1zxXH5hqT6pCYkVYMxc2wYAqB",
  "key8": "kLagFXX8xCrV3bEhMMdYHECTFAGSMEnrTQZaCx8kLiWwmdeFM8jzXK4eUkNuE2enVTpRxVBXD3VquCfVin7NSi7",
  "key9": "5m1mkv6wHCHYYBswqXeYm4usZ5a85UCE7AKv22wfQjTFTZR3Vu9Ax4ZZ2DeYXd8v2tNtoFo29nbDxLHpzwgNEHWp",
  "key10": "4GAyvawtceEPD8aEWw3btdsV7rVSAkFPXzzgHoaDvhYz6YG7vATZVF2s8mdtdhQ9qCazeZ8R8JbB17935ceVpPH4",
  "key11": "4cPqPbrXcotj3y6zsZ8Y1GL1ojXXYxSuAzMSo17ArBkiPCFxf5nFvMVH1wkiiPpNa5e6j5Wy5JBATDa1LZcirBzp",
  "key12": "5zXjDm3ZYfaLmg6JD3jwdYxfeUXUruU3wRqs4rg88sriybBErrRWUNRzd1LC3TCuA5Wr1QNJB5ZS8fL8ga5687nm",
  "key13": "5wossJjjGAg1YhN5QF6CvLZHQZaWq1b665EsN5hSvb5yXHwLLWVhf2JJiAnZbhuGr8s9iuSHuHov2EKCKJnPe6Un",
  "key14": "5h3XAZcUQzmvLRbgh9Gny8orAm9yx2wPfipQWBtL2SUzRo3c2d4Ab6E2hVA4C3jSbGn3cm7HoovzXEU39Tuswv3b",
  "key15": "42WVVBge4gBYyNJLqoNjPqi8u9iCKL7Fh9kRVvppxdVfTQwM6oCH7eDdwoZDTJ5PbFmFsfG757HJnEEezp4WRMvE",
  "key16": "GLY6CFkWdZYEuFyWGmSkHzjAUjm44X5RYpE6dVQkHjwNb6GUMzttoP3eqBB5FFm7iB14Ui925mfxiUYwNDf4YkW",
  "key17": "5vpjv12nTEaf6LroyWWi9DTvsY1XhxReRhauPHaaqsxiWLXtvHdCDkeBz7dyvafoPo1e3FbuCSEYqj3mUeyr3GHu",
  "key18": "2bRjBk2HYm7pv2FxJ8ag1dKQuBWN4k1RUpqgU53E9wQY9x7q88twVjkYh8U9X5nxGGazgE3rWBYxnpfkvVjhkZWL",
  "key19": "23EGRNYnF7xMeANoxtGVUSJ4GEPUnMzuG3odncV9x5zZ1DyYgPaeECidvM4y7kCjAnqz8BgZp1KTfWn87wto1fNp",
  "key20": "vyZSaTrYfyBHxReiyKFDYjF2Cx7AqPsqpKfdbuLzFMaVMnbjnrvqDpyErhJCPXVSA4kycKWGzSxUKgMy6VAb3o8",
  "key21": "L8W7Sc1UtA2Qi85zXXLfDpafJzfUHCzG6wsb3f72hdkbq7DNScmX1aFuwA6NEgCSXa4EBJNvpMFVniSwsKHKP3H",
  "key22": "H6vnqbUwRE78vTx74wdGJ5aRYyNBHp1n8KPTsVxUCVHRtoXpXM5peXGhBWXsHU3DgWGMww5Ep9NhS2tmP3U3N4f",
  "key23": "2H5jTQx45MWb9MgpFY6LVdgio23Xbdg7csehkNoUDuDcNQfcgzmLwspkJqeLRQofgyn69xrqUbH5dpAqEqyHXuo3",
  "key24": "DvmpcR24KCLgaNqvwAToLbQu3RKQru6HsmbCKvxLEgb26QE7Nd72rSSrHHfSk1b7BkYquwupt3frmMEfsx8Mxgs",
  "key25": "2YwBy77Vr66BB2YhkjFNz2AjriHH7byCxXTXRvhy6YwnJM8rkNdYmf52tMBURV8TeYuonXq5VrHuPoXFXMv5FPnS",
  "key26": "2xcCavt3bptsHxHvpuW5aZgbmJ3oqrx4LF8GDzLmCEzE5nLexNqEDHCqDapCvhKJT5HgZVq6zV3Q8NDk9GjW3acv",
  "key27": "44M4BxqcecnDxaMo2jsjhHg7FpFRvbrq7REsyLrYWsXgric4CeE2UCLyFNNJdVrawHE1bNdapQtCv7tDhcuPZK95",
  "key28": "fyhPbrwZrR61CDq7Knjep1jiS5hVez2kX19GXGVnAdh9PEWPMFqx6V2UKBgKJNRfkzCWk5fkxQQFK2obnBNayBX",
  "key29": "32yL1h4o3rKLCM4gi128r7FitMm9MHPLocxVnWrby3mXna2zybkfRpMgfFP6Y69d23Sbb28S23gxavyEQ3E1SqUK",
  "key30": "5NNQBqHKKyT8JM3FQNGR4cGzEqtwXhf3SA6dyLkFPQSnLsUnUga5Qzr6g29GjSSnM7Kr7b9ZxcRMYVatpFoVdiJT",
  "key31": "4MqySpxCx8yn9znQUJSoM7kQJn5vLssS82js5J4Caq7rKB4yTUnYa4KfksNyNRaz8Mo4tmrd9TCtR5sFD9F7qYjV",
  "key32": "3U1Zjr2VWahE3kVmXKhX1cGgtr9FpBcGGp5BdnYYX9nx9UAWpw43BsZkYztVekKN35iXSkZaEtd3qRXF2sDjWK2J",
  "key33": "3i5t39WmSfB3Y5v1DVPDJirSisVNvRTPdaKBuSN1fiDh5BbTYSevU6vrf6Ugmb4K6FcDiG7HfoYW7ShmhBz8j8VG",
  "key34": "4AvjmpYQMX5rh9UzS27Gnbu3BTjQdvVMEh4UVkzL9BimDqbRxAFznvjuhqUbepeZZu937iEetwUP4FX1NiUG1RHN",
  "key35": "5RTGaFTnfrktT5zFtdat8v5foQzXHEDLCd4YAUfADjVe2psLN9ehHcc2RDjVuzMkrHMPHaaxXLe2QdaDgNm6xgbp",
  "key36": "3Y3Li8Zw679zTfVJs6HodNn9UW3oqwukLuWbwZcJJhJoTMEk9jKAcMRfVaTcaV8MAFe519WbdskqHLDA13h6HPnR",
  "key37": "4g7E7Z8QXCyG6hu2FZu7isgWRBrzU3Nh5meSVCZnLMVr9CsW1QbpR5FxCTpxAGZtAqd9i6an3W7wFYwQMj29cdFr",
  "key38": "2dGjw2199TguYGVBhcZ85SHKPEGM5gFGUe64qrGmfJg56wSw5RTxLYmtLPAeoBrbnfPDiTWG9TmMaMrJ7kqDvqLG",
  "key39": "ZmFa7H2ZgFbpehJwmHauRTnJfRe1EhN48tqFbtSCBC5yxHrToyQEU6uAWZVea8E7pvqdRy1Fz9PTDZAvZnsdHFr",
  "key40": "5uqFHqm6KCXXPQJZNdeAz6WqYshQzgG12vP6ihcow3GBWgjNmxcgWTx8DMspcerGW4fTGLnJNx25EiZPdyepsNLq"
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

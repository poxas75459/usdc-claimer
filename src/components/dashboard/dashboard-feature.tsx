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
    "4ffwJnsH4GR6wvPnqDXW2RwERCN1CCPP2br7DwaDWqfT2xxrntLQWxahXzXwueszQjwjAj4oFE5gSezLgQZRHMSi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AtsPeFD8deygyrx8C1gH7ucotT5dVMKZQnUkagnuyJBcsqzFaoAvHREmQQUuYwnYSNBS7nnnsu4W4mWPL3DzQGa",
  "key1": "5nK4H9hEa78W82SJVMpsSZhQYwweRKxkBRmJjbYHvcKXkGYbKPGGGtAoLnqCZ2M8cwewbsa9tKMSsJrrvTxvHzPT",
  "key2": "2wYLN1Ysh1cB2AfBCvT46k7qNdpiFvz4JCEJDZFgBVqLCnmMmY19wAXWALDUkiFNizUYVVVXardRHzVqgWsVnXWH",
  "key3": "BL3QWg4ouD7yzpEuvejXQydig4tmpUSJM8QVR2VnNUNsVm746B1muaMa7XyaUvbBzG36TThu33ds9NXZ4h48Lvm",
  "key4": "zjUY5BpUazJTuUe6GWLEfPXoauMmRoqGDar6eneFWiFTp8jtc2eFv531mX1N6oFFo11LntJ9k6GFMWeCzdDLnE8",
  "key5": "87x8ntCqv57mC2TWZirwJ4khLYe4JXL6KxUXYNjCMeg1BJPfDLk1PEe334dCeYAM7LqFSp8ppXNSJiGmoqkBXuj",
  "key6": "2yCpPPaYeLMXqnXjbb4ZBFmQcs8sTkMr1QtZ9sGy953mTA8tCaZbSDu16tBdetMVqd8KEDNFWNSfaL9vLaLHKo99",
  "key7": "3syD8Pe5gcBSksdNPVFRN5QGKxbWJFyL1pjMyB1MVfhZREtL1g5UkBT1pzvULTX6wwZfSLAUTmTA2XnoW4HvEEtU",
  "key8": "5E98b6C4tbKBEcQJvNMLhja4tMiQ618ZKPrUquPTG1KgrbYRgeUGg8UWbx2BGbQWs4E2dFant45AtpQA3Jd6nCcv",
  "key9": "2sdkoi77NLKCi3Ce3Y3MXbs58vdxGnhRGF7XbAb5LWC9fm4GwsQosBzFPbTdTVzeHhJxqfjDj2R7ye925YPWuRF9",
  "key10": "5rReFcdB7rVwtkSgEFKh9rHJjd5aKKVCYAnx2YjnwNb6zNqKdSxhSdmNGXR1SmTX2Rbkg6ZcHJWiYdERvAB66c3J",
  "key11": "5ECuwL3qsqPRmQpo4G3Z9UfX7dsbzGLX67349d1RZej4yAbFBigE2xHd8HRpS2zNLuFVtMcBbaG8mBVbyUHtZ8dG",
  "key12": "2Nah93MaxZtZ9fKw1cX4R9M2GuiKkCadhp7P5vwLxMXAhvrQZccm4QZeUHjxT36L3r81JFYdKFuxJeMxxXZAZBWQ",
  "key13": "3My8m6mB3PBYyhMN95FB9ix14hkyMKhb16ACmLnPpyUK2ztxVqidKaSQEY7iDGF7hvahcBJoEVt51oZp4tmbULMb",
  "key14": "vjv95yuVQXTH23z4hZwLohioDDZQZuXU8n3ZwmooDTt7PqKvPM28JHjb2YnV5DDKCaykW23cADDiShWPPbpGBrn",
  "key15": "3yW6By8ip6E2DcJnFrWmqPCXDtErPXToHGewPK7Zy1Rr4Q9jW7BLh8yAfsAouqG7rUYFSbLcjHF7UPjrkF62FLLh",
  "key16": "2rUWeQcysgDRiMBXjyxSd1dRqPrCte66pmXLLpoU3hJQ3xeFH6tAga2hbtjb1qQwegLbuSrGKVhFkVKmLB8rwPbY",
  "key17": "5CofmZxPvSaY7Nqtj4MRs2Qb5gkmB9XXnYW4ejMz4a1C2V2HUUqYDPyonCRN6c9ppDdEVamEfWWFcPozWKC2cwUt",
  "key18": "4DASAfpGck6sJxNNLkAwF5Yd5RqW6xEegUCEdUbeZJridxRzjay5mNHivQP3ehX1FA1NpbwAbDFEzhivH3ZUUr5h",
  "key19": "3PXC5VTxookfBEzeKrZWtEMtKnsdbSEonaH5mm9XoD6nwfiQcHRx4pyWNLtnQ8X1weCuPJ6sw7ecJqqvMHA4Ymgu",
  "key20": "5Rwr6BesA85axJrkbchzL7nCMW9id6iXM6pr444bvyjmxdxueBNgH9cYr7oyBytJMcDLREoz5pwKxEhKrxNRkioz",
  "key21": "43EuwqURjMKeRUevZLhJMXXbY1nywQwwXDEtu9Pfan6iUFyHKiHeKcvrkcft3Vjn7GKS3p7ZtaowRuqpamZDDfVn",
  "key22": "5JVMi2Rj76R2SbT5B96YFnqsUSrHq5d21c9pNTRYwkYXL2pM6Sk1qp7cMzSUZzd4DuT3CCAJ66Vx1FiDjaikHiAt",
  "key23": "52zckyz92k92JPDUoULo7XVUQmQvHPmUNvCx2ZXozS2R6CyMGvTx8nDnfEQrJkN9Ha19S681kdYZFByWsMSQGLoJ",
  "key24": "5UQ16f5MMyYW1SeBT3mLPKUvXivDvku5nqNz5XCVdUhD1VeH2TfzF4WxLsMsEaurvxoPmt9STGDrD9YMAqtkrggz",
  "key25": "5s3PubLBtcabZKNb9H5HnLZ8yN96CavLiLLGbktrCaJCE6k4VzfQmvtvXVd8A8bhpxoidYKhcjyN2XvkzvUAXTcd",
  "key26": "4BekdFsAgwWWxZ55uKgdqrnjEih2XJiTFJufNfdWN1EQtPhGkzmwF3oAzmGEa4SjDBUnd5nPrL1sbRPXPpDnxMhM",
  "key27": "3HJCeKQbYwK32T73AiaE62Ww9q7fudhXQxrq3Xp8tdFByMyqqWiM79fbquJkT7NeBxbzPKfuH4DWksnkrku3brUZ",
  "key28": "3v6735SWSHBjCFF6C4C5cVAMvuaRXGe1tR3hXjhvNQ2E9Ut4j3sPRxYjz7rtQUhKDdKB48Zk87rhueQTEree9Za9",
  "key29": "3kqcrd5oYX7Q2h8y3tEDxBekDqJvLLD6rCwaqLF1UCmoN84GLiBTbNHDeZK4rsNece9b6hrsXzVrgUfqG6SQFR15",
  "key30": "3vTMTvcy9C5R1hqCF84c83eapCxPsSx48RL77eU8mtTencQS91wFtNKo6zyytYQZdf9VsdEdWatSN6QRUx9fmSWY",
  "key31": "3dPqomJA6weRuLTqwqWgbecmHWxwXKJStDAmCkpaQdwGvRx1TLzMtFobLXK7sHrcbPM3x5EBGoRzisFpazhnVijr",
  "key32": "5uj2B4Zmj1wLYJGPAkcvLYCosQLEa2tnd3efvWpVzTMyeZXdDL4zZKvjpFRLHMPZpizKVhvuxBp93Sp6nw3rcV78",
  "key33": "2NoECAQeWwLEjE1MYbp2LvLG8TYsTeTH8CNxwMSkCHmEU2jbpJ74SUhBnbXgbUpjv6Gx4ykMmgtjig9K8iDzh4fE",
  "key34": "2Y6yu7suEJ9fBAsCc6o8teF1bj74MVke3H6TrT4w6osXyjDhwCc7hep1kuwbKPbtRaBAUoc4QRN4L2qGu8W6gz9V",
  "key35": "3S6R4YvPsMvd3Mq2z5fH5gtyHBE3dPSzedufj166cWkckHgRsjHekvoPEUKX1HbPgnfWzycMAB8rQNqFaJW2ZcXs",
  "key36": "5eoSJwHJe5NDtjCohP7wH4caRwMQVQyqwcM4gkmq1j5MVdHgP6F2WhD3CzzJF9mf5PCTsbEdjCL5Gt2SPXSh2ZAC",
  "key37": "5p7k8iaEtkfXiu7RW2qaXPRC8RJZE1rxC5LrNbvVLEpzhB5Eh8tsTGDkZB5sTumEg9U8sLLuRfhH9bERfr6GcWTq",
  "key38": "5dcCqidQCZPbTXJMtP9VvACcRAXWKELSUATC8nhspp7KLZPUUC6JtCejkH6bwa1w7KwhAP65JsMqwgwPmsqG7nsW",
  "key39": "4tZVwE3LBPHUA7EQNLBomCmGXgsiSimy2TNbGTwBEnzja1waVK1iF4JxzmVew2E4g4fiwqQoKj5ycXp77S6zjQgr",
  "key40": "2Y91WDzmtsaKxTfn4vthajUaWGvfwdqomCTuPYwT8sSZ7U4Cya8adCZi9FyDwtjHaNfTc5ZuHUDL2HCdB4NhwgBW",
  "key41": "VwBEJP1Jnvc9zgJvVgECiwjeB3UpKMBSBEGbV847ht2H55fUhQEAMK5tWuz6JwrmSzWeRBsvHqTgz9PAuNozLKX"
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

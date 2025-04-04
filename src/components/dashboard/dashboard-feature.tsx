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
    "3KfQNPmPvcN9AABWH25BdfBRmVeL6eMYhkF84iBGnbwmudHcnsJhZdufujgC1VpPn2iMaqwgy9ukgatFjtYrpB1z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xtG2wY4TGSaHq26QxW2AzxwHWbFDPfAqN9Jo7QZex1yJaaXy5g2sviT1XyLh8sKgKc5TUPAC2UB3vvmzmocgHb4",
  "key1": "3c6W3QCYChbXrcrsADb2o8JmLuq9P5i8PfdrWK4qwaShW8rpdjCtmLCKNHQk23tm1XxaWEzJ5ZnCD2NejkSwuAqp",
  "key2": "4h2LBDTBiNjg4g4EvYpV4PKLhYdu3CqkocMb4GXBzUuABjBEwXHRHK7qsJsWXN6AcXM1e2pgPqBMx82Na6APRtM2",
  "key3": "4heiRvpLTnBukoidEsdT5wvcvMpN9gBMhNaHkWNjvAQxrsnM1wv5eiMHM46GeguUdVJyqSZVeTmXcotXf8CH2oaw",
  "key4": "56zZAGpVtC8pyFE1hwkKMz7MgxG62vqhj4T8BkN1QFnv7ZZwPhpR5jAsioFoUFrJiPtiCM9usCNMhJrKw2Prm7J1",
  "key5": "57cZ6S5GHFRUwRVRnF3yRAazvStNfxpGyRs4vzcUJS3ZYQvNC1UWdgsbYTnWsRX71DAhDBrz4EunUqPv88Jm3dif",
  "key6": "417ncbY1C7NACywXyFf42hXtQUowDFXwwSfb9HkrS4q831zbn6UQnqHRmNWnwfYx1WDuZoLBAa8usVHxmfiuv4yJ",
  "key7": "2dBSRLo5X2Mn1n5FCSq4J9mfHq3LhGJjQC54yzbUvKKCxnF9f59WyVdntWqyfYuTH5ChmPZrMvz3SmAEVXDRYYrK",
  "key8": "5XjzkMZkQ3Hh8rH1wMep1KssCBmxTyTBAUsXwJoHgBAU2HAkF24kSiTTTAsSSR1V8ZXch1ua3sCnS8hNUZeAzFam",
  "key9": "ik2b3qWVRWkYm1KaqE7eh2QRXoht7wSDeEKbJ9dnpbNhTF8SDnLaq19TddCXNBFMZfo3q4bbMcmLcPdH6jcYbbV",
  "key10": "32ckYGV4gA7DnaWT1nPHrDow9zh8sofj7G22uQZXDsQYxZ83csJWor4Afbw69xf7ZFih3EstPygknuiD9y5dpyf1",
  "key11": "5tszZ3uRcbBLYDwNWFcovZZDr5Ygujd2kT9Xa8fRUJJaY8m9dC6JJy6XfvdiLbYmaqzS1W1oMhz9yWGb5R1Z5upJ",
  "key12": "3Z7b9jsn1yU8XKZaAb9ijv9iGWnQHHEn7mxpNhGBBaKyoFqCxmNXpC3TuFG4G7vbabUf2bkL77mTeHYagusSnS8x",
  "key13": "3T8t2LvHiDuqVgXgMU5M9QaQUxeTf2zkQF7hXUVstichXFCSxtWFTmALtCmVXH8r2QA577kjzEAK8zCqE2k2cgv4",
  "key14": "2u6USpgfyWrzVENtmdmgjUysNHFqZ8kSbyjKhpdSfQ5pYpvn3cdBAg4EywRAwjjreELagAtbWVe6rSeAZx8mEorL",
  "key15": "3exFiuxDK2z4DHsxwoZ28EK1ecCXKFiZLiNh47PX1tTNbVkzMkLNipsG1j2KtXy2UgRGPnLcfkpMQobBaexurZny",
  "key16": "2itCaLeUvXLrLxdBUYQUMBfKdfj6yimWmq13jPRPcsdSg7uRaearW9San6GZgGGMRrhW3aRxA192H4ubEM2oemXg",
  "key17": "3cZK53vNmmBvy8qkGMhRLbP9p5HMYqrvwALG86ECqbWmVL1QKY6SuyqH6kuc3pGomtyis7orrkD7rYcQQZcQKK2S",
  "key18": "2ukYyves8rpQEZ4tR51X1upGzNLAB5KaJovckGbhvdWnVKPJf89dwxmurYNpc24fnjez6umZwyicLtuSXB6S7Tbb",
  "key19": "2ZYbEU1pHWfoi1XXPJBWUewTimNr1U1dgNR9v5udKka3kstSq8DVzi48dB4BJug8bvMMm3qe8kihqdLpppLr7jHU",
  "key20": "38XJRbSNVNKa3YZNjpNY7tdG3jcKrEnDQtCpgVuqPFTN3cCknK63LybRRp5bT4LtdXYVw33WG8F8psV7tiCBkxqe",
  "key21": "2pZaXhfX1WKVwDZMYEXeojZfToQawATST8a5jq4HmNgLUX9YPTaMxCu9K8UzBjA2DGE6A8NM3XNUxswA3RNraxg2",
  "key22": "AWCUyqQhb56VQz1ceZtKQQVtnaSYcpczAL58Vw3fEkeD8bKYjPFSex1ysgFPqxn7nP3xGVJ4ja2pBNVH7D3h3Jg",
  "key23": "nTBY53MkYegsGh1uYV89bdhbUsTnG2RWLFBHvXUBkgYcnRsQ1vkiRvXjvR43zUhgnk6UUTCZyJPgb2HyDPBxyzy",
  "key24": "fAH6AMCrapyLF4vwdBr2K82cWFDiNraPgm8QMqizaXsBcW5sMK5PqC4VnyAKK8Uh57oScm2w5M3FxP7BaHw8GKe",
  "key25": "26svz5sBJ1XC8F5U8qKZSBdu4bmnDuniMGKEAxSkb5R9n2DBFAeritCvTe7tctdV7iBH2E1sYahzNSLEWxQJpvkT"
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

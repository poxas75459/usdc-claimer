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
    "2HJWC52cKXG89Xsd8p8kBQFfbmxywygvsDNuomxYdZx9hcCzy2fzACawJXSMzbC44RbFyQGeBV8446GLPbachoz7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GP92X5NQKGN911n2nr8Bw8tjQfrZCGVQEV3yZab2WZj78Ln7T2DhKezj4gekxRoACWvATEXCYfuZbj99ymyNGFF",
  "key1": "2665oJeyBWRyFMe6dSJ9KgwZAFiCY3mx82bmnzDbH4nqio9L3SttYBpARZfy5Eqcjii2KhPywMsjy1R7WYhjExHg",
  "key2": "MnWGUWPMaKQjHQ5jeL1Rj9392XvYjiHGVrJWJCnrXq41k9xLvBT3Wg2es71Kpc1uJpU4mmZu1s1dEcyJ5iFtcHF",
  "key3": "2LsFPDh5GofogZkWngJFpCE4yn2GTHDxzE21WsKh8FgLEoGVXCkDS7LSJwhf97cyYeuJYbSB7U1bYWp8GRwHhQqK",
  "key4": "3PozktJq2SBRxq2V9vz9DdUXWmptvCfbBDo9VKmmxJAAzJTKfr7GYbQzFyj5MEeJWW7FijH4zQhCd6uz9GLmJTve",
  "key5": "5UafYz5J1kuPMandCuN26fX6Z1b5tp79Xw9NkdZN6t2SBTte81bP7oQ5FbPfW72Kpwbx8iMEVLq7KBJKrMFRxzuD",
  "key6": "3JMwr3TX2VUA2sQD53Kx2yQ5pX7nysM7rJbx2prCKEMFPuGpsWMGcVWGv9FbiUP3pPm8aVZEq6aWEdyvF4T33875",
  "key7": "35sSrdiDGAtsLMUNmza85qTD3mvW9rJrKArDANh3aTt85xPug6Q5apjjRYiR4WeSyxwNG41V9AXow3LJVw7H1RTt",
  "key8": "pUgbFnsmVMSdCQFp4Z8Un96rrpCUKSSNSUqFfQSvHWuinz1G4waYbFGXj8SU4FBikbfHkdWBzBY4qnymHEaTSz9",
  "key9": "3L2affTdw3Nw8vaB47mTcaixgKqMAEeANDWBfH2t8yVgEDCAbp7FHQyqaJyoZMXXmu9pugeMyYabtqwFYqjSWHfh",
  "key10": "3tgUYhvabsPzfsBZWjQ9m3QupeujfKv75LnLW6PJBQa4jqZK13v7RyyRN7twoeRm8FDjxjWAnNhd4tfJpCXLDGkV",
  "key11": "5Ns7uyu5pDcd173uHqm7tWDe8YDNznTxqX5vFApkVrien5S27McGF1AiFt3fYAhjMkeR6Asr367sgdpzXC8d7zfp",
  "key12": "3GrQ6dxtfLyS1SVSL5JA3My42hBDJNcLpoRW83tHgiPzLm34Z5q7CUUKJgAokk6ES22Ux76ZvNKH5oh3xmZkXdFH",
  "key13": "5SzUmEpwtfHKrxGUq5B1L2LCAQx5nDFEfH1NbCFviApktisyGTU3aW2VXG45959ds9yKeVD78b3cX71kp4aUj5Qo",
  "key14": "2rUVTxnnHwZ4d8GzENpXii49NZrgdimnJndt7CosNetmscQjyj8BRDiRsn9Z3Qr3dCSxb53EHD5rSBmti2cW5SAA",
  "key15": "3CxAf5TAjYsQdDJBNSyGFmoewBYB7NQ3XroCPoHkCLX1hdrjccvPQeei2k1YB3DetMNwC4D9WsH2WPbN49eW4bUu",
  "key16": "5aCp8dS8Lxv8B3dDV6dekw4dM8CMvHUVC1ibz73NZKR7ZEQpe7P47bFbf2YaJZEEEftAm9vBsbaD7UhivvpWAtDu",
  "key17": "41q5s3U1XTmSN5GR5RGpwZvmNuUBv2px9WnEN9HWuEEqjwbnnR8cP5ziyihZZ5qmwEuWrpxDEUm3KWwp2nxogCDX",
  "key18": "3DZWDcHWMxbKWUonJd4QPxKpZRuCSKqbyiCx72DRSALd6QvkYXYLYBMfDXXoUePu8J8xvC54GaieRvrNF3pmjxRm",
  "key19": "5KAb2FziKzK2EV9BvJqEWfR4tSp35xVCX7ThY7WJXH9XuoyMXaTEuJo1bD4JjVRUXRD6fTpZZtyJF534K2kkXpmS",
  "key20": "3AnDgn3yTYyzL7qwheXA1hKr6oRzABR29igdooFX541f1e3Cto3fwwnRnoLT2mJ3k7YCDwzwWuzsW7k5y4jy9upj",
  "key21": "tq9iefieKN7Ay8PkY58b961Ad9vKngzt2uHvRJw4z9DUaNMEPF8hMQWdCqejJczWZB73zQXuniGNgs4WNmtzmJb",
  "key22": "2VZ3kzVc9Ewp1NBVKwwgyZXUqHdonpFx8cNcuvZic9CHdV88sdKdKL9LTHSb2nMrdWUgUCN3xmcBgzsG8Ls58ptX",
  "key23": "4ZyJnL3Rc7UZfQAG564BZ4c16Gfxg9vA6VaS4FitamHewFxYnxY7rJHaCebVBozogRhwzaPuTuJc4Lv5s8zG51HU",
  "key24": "4NrREodCA7UgvfEpCdq3jU7KdsMp5mVVo3NdzvFnG5zXMDmuaGebExVQ4erjp1qw9sfY3sQp6kbfEvhEv3QNqNXy",
  "key25": "3qfUskwCTDC9W2tZpzLDuvia8X9w2u1Um7kUpELua6MTGPety4EzvT7H6g4FzDMTqD5nNU9cmNHTXbAgsB5Yjao1",
  "key26": "nUfSqGWywC6zUCyk8Ga5TYU2ds6JLGSBsKU1QfGfMHsPc94QXNUR8bV4zk1PczUF9yAVaw2KbbhhFQJs9hK33Ss",
  "key27": "P8UwS1y2z3LZ15Aa1NireDp8cSuH3cY8GxHSiLmroU3mS7AadykALTtpwNBxammcnDdJkLgC43zpRzkTa4QnY67",
  "key28": "2a4Hq3aQCMJNLBe1UcVHEC3fuon4N3C1uchRVb6f12JfFS1w5C6ZZQZjfDyuLWkEQ1FsqwiVunAh14YWNLBgL1jj",
  "key29": "5MykAqMv8c7Kqq4gdVCL3ccbexFo4PpW9ruv5UZYJYgL4t3JW8t13EkN2Ry3Gtt6AgtRo2YLux14k2xkqWXPhc5C",
  "key30": "5T6BoWpc5cWmkCt45Lgwq5BdupowBH6VBKDPG2GDjU9gXBpJ3MKRsEVpEmvSz9jsQQ6hdTmHeYUjeppjWEgccKtW",
  "key31": "5zJ1nQLYHN8uXonwok8Fto3E5Aw5ipEk6kAXz6vBYbtqG1EtKkyx1LBjNhu3UTNRXgGr1RSwfTVUgvHuCdyLeSW2",
  "key32": "35ewEtiLTZyJAxnpMB6VTvQhR6ZykvKe6Ywzxwa6A59kwW3qXYgEv2yfxXumFy8pXEh5ws988GqeEyo2bwLwChKd",
  "key33": "5TM3Wrc9yEmxFcm2dHEvMqBbKaybwJVqz5SkCY7bd7R2qz7zok3cFKvtkuYkCcgH1rb8YGLF8zKZfHCauYfBEtZE",
  "key34": "54xGTiX3j2CyKdMivUqPgrs9tnnoZKr7D9JshQjWh1aAu29AmbtvSCrjaKfMrRcd8RbQSfGBzrHzpCpmDH9PE22r",
  "key35": "2yAcpqFLmgbJru6U62uNsq76rsSmyuKG8YwhbqumdpfRnrntChctXWg83fVh4vbVbFW6TG8dfKbb9DL3AGGrpPkA",
  "key36": "2fg9Pue4nQneomTuR5rDWQ5ePhs9KPsJSQviB1SQV7PLkJ82yULw9iTJt6bWPKtBveGb1NP8BDWXFReas1niHv42",
  "key37": "5Rw2q2RwSSf8Kx28fR4nVzhk2mC9j9C4M5rnRPSXc4FSnnZ8zLHM2nVSfoh31wRtqokwNdVh51nekXTnTngVLqic",
  "key38": "YEsqcxLpBUSNTFnen6GBibkdYCevEhXfa8T4w2cScMCsgHzY4NcE1zV7afz8pSyhHjM4BntKfSpnrkyRZ6XmZUZ",
  "key39": "3QS2PhxAvs4TwNvyze3msTQHPzYdvFHpFwcNnebVJMkNbcghTh8LZg58uXBguF6BHPeEt3YJj5VzQCbmPa3UKoJX"
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

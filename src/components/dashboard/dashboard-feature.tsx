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
    "2xZTT7xDq4j4G3Xf7nsqE7TRZMmCv8mV5qXSsDFgGCCmLSGaRV6eeX2gqRsSc27PABGopJmSfs9xa9Z6GuoHieRa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fuGz1bNgPg2U2QBtpb4KJF1cP3cKn1PLAaJqPJZd1Z7LoGpBWuRuYBER1dcfLi6UCwjrX6cRtjMem13iAxKXz7",
  "key1": "42wcdrEUJgb3zo9Mj9AvisJ2sJ3dayZbKUAtDNDcEtumXrMDiobFgQpC5EfMWHPdpsDV2q7oVgtiLzbmqnxYH9Mv",
  "key2": "3VCuzyZ8ucnzQUxjkmT3xPJdvTTqkSPrE1HGRawTH5ThUPfMtJDwF32f3JLUEiiFAqA923XstJ1C7hwPzyTCWKXs",
  "key3": "3yDpnSWZ12ecBPuvq8tpHqNWWZaA9yaGGRATvzoRPpzzqwADcq4ZJAhpCjis8B8x4EqtC53RskKoTtzwRvTkZkkw",
  "key4": "3NWpjTEM4mdMb5j3hLLrpUqaW1b5utKJ4q4H8BfwwDZquaDDAPAzqdvHwBo3fQAn3xkKmwtmrZM5GikQ7EeVCepF",
  "key5": "EhiyCKXBYhvMauEezbAaNPs7vWB1bvrgK2T5Pg7QccvrpZUQq2HbPMJ7CGpDipD9TEhk4pRPcEBPnjW55E9ww7T",
  "key6": "2JteXdCaR5Q81mLZ5npJAZwKve1X2rXg7pUz6FbHMhf9mikA8CBDrjvb5xi2N8it7jFSNoFAqYAo7QCRKSFxPGLx",
  "key7": "3Hqdks4KRPefgAWUrrivLcGoJmaiFwaEg16bHzBVFUoc9Vm4Dc5aFTME3tdk3Hh9KwcfYrLEcCv2Z9hJ262LTMnd",
  "key8": "5ctwdStE6gmQRTqeYqZ3j6fRXCvyUWH5zfFqhgf3sBgWFpAP6YxkMpLmEFDDy5S8vCtjiEzhp6ZNko3LF5DSmgKV",
  "key9": "4RYaAZ81RAtwEmbpZgWa9sS1wgv1kzDjuRqrhbU5gNiKPL6rdezDEcts3of6yqE1aaSpvfV5Rd3uL7XHXKW18P62",
  "key10": "5kGS1LxKix1hZSP1GwVr2KpSimHHuvMTpiAcdLsmGgThCC3eQcE1fnSKNF7e8eNkVebH8RgCYxcfUqFetegrYwrF",
  "key11": "5g8KogixfuJCB5TffnMm7EZFosKdVZadoHoLAWBoq4AvDKpwdXUXtYL4eh6bVcZ65gfzL2TCqaJqwTruTTm8Rfbn",
  "key12": "GuY62wVqD87P3eD7Zcp3eDrKMxWqDqUvvzFpXuYsyUy33BcosQ57TcQhe6dihAN8g2tMx5tp4AJM2BnBUiwuNXV",
  "key13": "2Wo4bWNMezw2F3C2kdax12ZmU3G5S4giS4M9aKF1YqRDiJ44K4jkgG74YnhUHjVYHa9bKFANYqRD58aPg3TY9uhc",
  "key14": "czvKR8QdRH9UZewwCPLxaKfQYDYNadC7sXEpzeL42VcGSXv7nUPkLj2L4D6Yv8NqhVtJw1UEkyzriejssqEfhxr",
  "key15": "2trfFiBxkkJqwcjzUa9Lhq1CGiCKa3bMWyPBJ1ajDKcvzqktJaaxZUFTcDA521YwtaEzE9TgeY4kyoRbYAFhNnqq",
  "key16": "5BfcniAR8PtbdZaQo2Go17XetYQqVMvzs7j9RjNZ5DDmx9dMtLbvbkkX8TVo4Z495nct5fZAVTdt962JzGDPTeMs",
  "key17": "5hzoZWhJdTykRcfqwDawwMk1L2ErhoeLTdGxzoeXey3MsAtmfu8ofJ9SroDJzw3QJJSFR3JYc1k718W63Dj7UthW",
  "key18": "5xXBkbfLiDsZT7fmc2YxhrG8D1F2NTRJCvcXWk2g1RhTKk48G6oekHjaJVaFWRFiDU2ipykniBdssPvxejNT5nW1",
  "key19": "5KedpNFGWu92DpahDEt8MBXLMu7afMuEwhRJ95egPsD8WcpYmRYdiCJyRLauAr3Poh2oaq7JJ1L3TiE1X2Mvp61v",
  "key20": "35WrcAjuu8CkqKoFteUQ11AbyDc2fxNdb6sHqJwqgBda8Pfid7XuidvSDNaEXY3xc1drUo22hjeBjjJeWKzUokre",
  "key21": "3gRnrtm17ZU5Hn8rn6w5z8ZRDugxrHsNkTb5YGhrbieYySQXUdHtKTeXg9WdkgEyiBfdufNY9PAsNFi4SRZUftox",
  "key22": "5aSDEeg3tADdeD7tTCUpCuem6wYM6jpzyDrt1P1KY4tzf4Y3uwAKQzPFEJkdSK84YnJWVStH7TaJMXhNpJvADV2Z",
  "key23": "5qKjRyAhrG6ZSfQZAHKUHsKttBuzpgYsBTneEXAFgAEPFKoQ55X7cbEoYUdiq5pRrBPcj7NUxcA8Qt57TwZ1xTRE",
  "key24": "4Si563TFknFX2yHnjVwjFa6wvDA35M9gJGg671Ed4gahtiRBj24JJJjYmwBMGncDs5u2vUc7AnBawYf9qADJvihM",
  "key25": "4eiG8bYVrBf9VXNYwFc374KLdG9c4QPbd7F2v9wtoYby6j5XYHR8ZH46ezwSEz47PUZAYHib33gCEzGv432ZArzY",
  "key26": "sn5gE63k5Vaci2q8SawtdidYuJXkhwXMQDc9m3yE8uMzohGmf8ZEYNWh7XAuDHfptxNr34VMckFyNTaEsM6jkVe",
  "key27": "3FZtyzNE2CcWq2ujpC8APQa21JWLBcfAebadFWYQpBmj9hw9NRyryZLb9CMwdUz3WPQau72Kb6VnfBueN3uaxX8h",
  "key28": "2hf2yRhCUZUFNkpM7KtSh5idYvkrqVFxVHSUftEbvJ6oNj72JMmn9scNZvS14E8KRBYqBFVCWiBspeYskr5oGZDs",
  "key29": "3ZeTMUGWpz1at8fZxnnquFKX4Q5YrFKMKtBhSgS9WaufvWdBgAKY94VzcNMYAPxJvKWYqZdzNpQEGt8AmoxP58JD",
  "key30": "4T4caREEKJSQnd3fkwTdexyB2QyfoSwdTSDXYPfkhYDHWLv8yZrw8d182ezZm5MXaH5hgANXwHNiTJpxoMgzNfk9",
  "key31": "2ttdVAAH9VsGAwhDQEG7K3b71exQS7wTibiN4YMnpzF8y9XPTzkBfZswV8skoMUH38Ayafu6f5MULjFnvfjrxYBB",
  "key32": "4gyjZ7DKmPKksrBB3Z9oDDoFgaKa6LDNAnSkb584wTHHAWcXApgQ19q1h4kf6KRnM2UYaTTssdxLuEPHtKWB9ksx",
  "key33": "3FAdRN3eKGFT3ZhjLSAAfXQvdrKRbdFCEnC98aJJruk8aacETcajAsNsuTHTfxAw94R3rKWKEM7mx5mgi4gKtmSY",
  "key34": "3x1bYih731rX9W4U2uTbURMpRiPwk6AsNUcP1xKqxVmRxpmR8dqnUAoqT7Cmw5CD7Q5T7tonuPzLpPyf2PnCheo7",
  "key35": "2ZSi8Learj3m5qksfxvMsqiGKtdQSMSRALYeUtFcfRpewVAuZ98sJ9QME34LqVQe51tsm78k8SnNrFpkBCyTExrV",
  "key36": "9G6RL26DkeuzbD21VcNqTLPr7ADhRmg7pCSgokiBRa5azVkeT4pnemucP9xVQCJXWxxPu2dSD5zjQUt9hHHRXQ1",
  "key37": "3zRf8JhbdCysa4yGjm8Vvx1YPNfBFMqdRVHAisbuJPYTyMP1BeWZ6aWoDth5LJtMiCCFxaYmjMeZ45QUvg9MgP88",
  "key38": "2EeSQCUyc7eWEwLVt8ti9gg2Vr8VbptWnZBUCHuV3uykU59jXXT5Jhk4HMhGY3yygEsa7fevbAP7V525jWVDe4sw",
  "key39": "fDMKZZRQ4wewirxmPhu6TGexKkBTrcL8DFh57yhnERw6wxSiYeSw9izhmCSS16ia7q4JenmNbQdsmnvTnmXK8oW",
  "key40": "5jkwTzdM6G5CmWBxcuPw9RAE9tXucG1L8BjVy8QYPvfBKo4YBPgQrXDN94SbP9QaWneFDXVXL3nikWVjjU8Nacan",
  "key41": "4ezrJg4yFLcRcrHhPMsaaPJvXZ6yBYr67fp776q51z3aak22JfucxjMJ4UMiMn74wXiF7w9KohPziL4vQkw5KMei"
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

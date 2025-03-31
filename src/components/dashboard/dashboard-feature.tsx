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
    "2tDofGhjiVa83NwGLonGEivvK2ZZ4y119FHv2ccan8yRrLULQXA8qFi8uKcBrTHhR4pQBLq2a7ESqttjYQjRVSX7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rBPow5ue5y5MvUMsZnGkPMzT3qoJcwySmEaxDZqhUrYqeFoLmt2EG3Wu29s8KFQdEawkoG3Y1BfT7WtUrCd7mpX",
  "key1": "5SKxuvynRYcrL9GrCfozNzosjy2mN2TXQTY3H9LA13eEkZMMR57QSQFrZ1WBobcrjb4uiF1UMnNVYvzHnujwbn6E",
  "key2": "245Dwkb4o7APtUhmxhJqLD5xPmr4Nz4K2RMshAg59FpgVxRSfnu34v4Nr6y7W9i3afXBBChmj2P6xZ28hHCaY1vi",
  "key3": "5pCSy5wP9Y5j5NGL8BMjr88SpeRH5ZJHuX2nTtLmWkbjnEmDAia3Asyz8VaXS9mk6YZPzXGdWU69yeDqPCp59Fj7",
  "key4": "4cYJ38MqTGMvf3afP6zwHxngtnGeULLBXP7k8NU6tGfpuuVJgPcVvDpawpcPaG1zy6i3racTN4FD5dfiBx8RX2YS",
  "key5": "3Ls248YiVWhQHyjKn57XwBS6Vm8AnJnPTTvGtJ9yaksDbM57XLWxLNgdnoje3WUvNKtdCfmnhtSroY5jziXWxHQA",
  "key6": "2BwKGJ7Jbvf7cXaDbQisrbgt3QcjsEcnwbAkH983pT8niBwdzydgtCKbugqPvrFifsr6Jq4yFufC8HsJ4hcFZUcS",
  "key7": "4Dx3HBGRLWCMktiAViaWo4xduVEcitgXh1TDorw2ge84KjR3Z3oTtwDrQRF8ySpdr48MF6gnHE2EqhhFRgxSosq5",
  "key8": "3onf6h1DL47jZ4ab7hYgosCJZtuhKTXFFUoFxQWRo19DZTa1iZaXCdtmTj2qHNZxwAp3nAhZ5CEETp1kDvCDScef",
  "key9": "47cv4KAKcj5n9eDg9xZdLC3f229CHmvbxiGygrX6EUDHBqXZFyky3xsvFqVTvGCECdh4KzwqQx7HXdeTpaoPrMBg",
  "key10": "2CE6XL3Erin3BBeEFd73iWZryyQcRaax7CNDQg2S6LMRVAGyC9mZ9hfFZE9ayv6u9aAbz4zKD67WDctaBqHbdBvB",
  "key11": "GNACQYKAKUHen3kUMKY3bcuEp1Vud2gddtRyWTnsRZYY6Hia39jwZiCxXCyPSFM5QouGArWP6UGFgHGCknqy9Kj",
  "key12": "3dxTAFYuyTbSRoC1erPC5YmkGoCv2WZMPGF9aRmYcAmQ1gQ7xRNBLXz5zCNj7Emik4FUtAHPMras4EH1DGKHZMGw",
  "key13": "51LGB9r2BQRLX8EP4JjUEjX1bt6KA2PzKXnV5uSJDy5e1326TC1xpR1c1zkuxbaKooC7qSYKVGW7UYSnKy7atYjk",
  "key14": "cGjSozS2zWCwitRhjDu1CPMWYje7Ve61WwkW1MLewdEiC2FpCbfxgNQEPJs4PBWnVRxAqr6Uvg3gdHEenxpfdtt",
  "key15": "5JekxWFN29zHmBXB5QU8n3Ds8azzRKBM79XBp8xo2KLfPyfgqnGPkkznzD9au3jCJAHdU8JkQZAYxCri48DwD5JU",
  "key16": "2LGeSc4EiPzK5mF5C8x3yLgUVSMeaMxxbzvgBd7nG1Z7adz1KWhVnfTzA9YEn3vBwMqSDTb7U8TsQkRxHF2e7kB9",
  "key17": "hajBLPcw2F6m5VvjqWKXjMktRnabzXju9Pqm5uyUepJc6HN73gP2pWsChReRdRm2EM1EfmCHBTYwzhcgQG9g2Fd",
  "key18": "4Bx6hWLXevuEzzUiQCU3dvc4iZhAfbqra6YLX3ug3hsjskbdtsLjr5ZsMaC3xn9JVCL2MB77DbjbziXgerVxj4Tf",
  "key19": "63SzbFEie98J4nQLTCSdyHrpoHpzKW4oMZwG4dAVpNDjTPMWdg4kJJw3hGGTA9C8xn4hcd32985FvRqDLf7Gjs2e",
  "key20": "1jJ5E8cWP9CoZ6p93JsNHNUfR21nu8tVLqDQxLz3aPTfHaNC6LbefjcMwcqDc6wjsqEQuRA2q2U2HEjKLeBoFeT",
  "key21": "5V4sU51EaPW3CmZy5RmMqTk5RMn3mVipwyLTHxPbz8nz6QVjCnuzW9g3kuu5Atavek4nr6spuEqRXw3yhi5C4xWX",
  "key22": "29m2RDQTxTXxMKKMBz27j9z1h45UWv8tgYixGkHVwUU7Q8sSGsge7imuELjyXKkUaCrSFGAGn27CCw9LhbXq5NK6",
  "key23": "4D73QEk7mMseZdeNUBFKw8mRFdwsKkkGvzhdFUe3YvTzn8RPiaPAtHq7WgdUDCZ8EYVSkdpcEGMPPYoGnfS4Boi1",
  "key24": "4xSvpRe2CutEcWGavuVCPqd6ERjaTwLLz3QM3Cv36X5AH6EjZj36J7k8NxsS1VNCDDJSzHUyUGFkKra4ZRaDcboT",
  "key25": "39Py6FbtTzrnGmxd7NHWGFrhNGYhudAXVz1DdFbqP8AEsz5KDo8TfxQ3QxswCWkANZfGRJFYwuhwf5ceUiomaVPy",
  "key26": "2CQceAeEqubGS4UwEeE9B2ShV3smzpe6KfHaUYgCJ7wup62TBqSfzEkwAvmerLuccv2PFv3Q6QdY7gjGAJsUoet5",
  "key27": "61TPVpadfeWytmCLBs2CUxY5mivTNhzfNYK6Tf6ySFBk42uL3UcADn926hx2qWncbZtAsDeJkWtcyQdVSG3Sqvjv",
  "key28": "4bbNTPdEkrbx3yZgEKpEsVrHtMbTr9YCi9zNUEAYqZo5FRcztoEpT7LxgVWQTmY1DHqudBNZtik2ksZ1mYxj63Sa",
  "key29": "SdeBjwcbaVqTW4JBFcsPYryd15vujuuWxNKM2ZmabPvdf25DKaKhKXdF7ZGDmyw67CCh8BsLyEQq9D9JnNhro9d",
  "key30": "4dc3k2YLMcaZohxSQsAjGPjLejiuV6ateJxjsuyJSGwfHYEmeNep9W2bPExsxu7mjnANfN6qB4KournR22CRH34v",
  "key31": "5PKuun7GqNq2XTrj2ytywT2H55qbB9RwM3JyeUyB93fNp3fpLjLNXbGMmeg3gzA1oi8T27hbjhy8wsHC8WTqNaSa",
  "key32": "zgjNbdW4Ejfr5GU2kmKUDksGmSzA62x4C5LPNsz6doJ2hz1FvrDuCtiAUJxKoV8ntkAZvnHC455V1LMYTWLb6vG",
  "key33": "2kxSaUG6DajbmFM4nQCihJWeqpZDX5Ag2RrDm8EC1vuRDm6JTBmVoapkmcfwrhRa8LWMKhvZj2rwfP8st5DsNTeb",
  "key34": "4XNkimtLhFf2BPKgVzkPAQgAhMVCpE26rxLh9U8yuzvkxNiRGxpVNucE9PxWFzQwAEtHDceNe4K9CYM2DHh6ke5f"
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

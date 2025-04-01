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
    "27WrGahZiYeg8deb2g4pgXTDC5aBb2dKKMPKnzfTuNdQX5SLgrEgjascav87Zf3gap2AEV7kzaxVd89LCD7wX2id"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W48LMwcNs5SXrfkfvNQR8K8JxJKfYA1cHYGXDPasr6XYZFigy8uXQwRYuEHig1by9fiD8mNT7d5qieHPspEGA38",
  "key1": "5KDz5k3w6tyxDe6X9HKezvGnaPgAN4dKTXvuhWdq2dQZtFCfMe6ufqKyRCTByhH6V1M8KRZWs3j5NxoUnvSP5Bu7",
  "key2": "229eU18utYr56oinyisqBz1bZXs5ChUteBwCuwqXaZdgTKUsXajobSd56YeUfpkae4BWZzhNhYuP4g5ERf8dtL1Q",
  "key3": "2xCB4i9szFdfumbAsVxqmmMjnvdMhGE1sT4dTj7VswXbRmKoTdo6S97LnqYJhkFEygfErUMWw3teSYyEpEVLQtXY",
  "key4": "55hP4wSavU4xWFrsFHCWR7QfnjhF955anq312gUZSVBjrHHDFNLW9PL2XmXZGqBEUzqQzM7mUGRjwD9zB7CCe3vB",
  "key5": "2eB72jaKJDKdJoRPkGH82FQrad6xsw84qz7oKb6a9tzG8WGeGBj53mbBPSW2ov1BDt2m3Gq4j3XGWEikNkh5HQsk",
  "key6": "37TVDfwx4eCtGjmSJSaci4mLBRENt4uh4tduSrw3TnxNTUP82mAuL9nRuRHZj9kAvNfAFpAbKMdbAk5bE3VVzrQ6",
  "key7": "5B8voRdbAKCUoJotthupe2oG8aLQKEupcRX5cYvCS8AEoDwvMjMwNSqeMyGH7uAEi9eRbV9yG7Lbi5mvDqV4hZ3d",
  "key8": "3FHP2UqedUUo4oFJkPfJTvZeUfDG1fctT4HbdvZxccySxmCyxNFmms1Rue1xtFDpBYxXz1d8EXpGKmSfTmoXcpSn",
  "key9": "3UysVFXoL4FiSbdVadE5HFo5AqcuAtTTkjgo6ZeSWGBpHqJyd5Ge1oPzRApeT2Tx4gexsh6NLevJ4BroZ8V5YfUa",
  "key10": "2BThbKnm2sAZHf7RAgM4Uiei7zKubvzarkWk2XedxHvPsDZNrHKGPHK1TxocBkjnqMJPX8E2uLmK3RwXgFLL9tzz",
  "key11": "32pqNYKKziiVASSxFqYMxFLNCGovDFtAQhE6xynvSyeh7HJAt4vF8Z5HeVTKG2MeqWii9RQJUtoKkGAz5DsazwYj",
  "key12": "3jnSXkwxhqPp3seLcfiYzdiaEr4UUPNH9wcSevMn67W8FMChHronSVmWNtYikes4e1RFnCJDAWGXp7SA1KgY5BPj",
  "key13": "4Rneqr6rSR8K7BEmJcJRu5NCa24JkveVTgk1p8kPbcZCRLtqjBFY7oxxu8XoCKy6hcf52SL9DAcovSudfA8EuuAb",
  "key14": "4td2VPZsSPE9HxstBMsrpeRRSu4LkA3ijEzUGwDuhX16DHsACAFH7pwKuWJUsYVmkdeddaACkhKrKS2zjecXLaMa",
  "key15": "zaNiGp9NTvxGVhkxhCMjAYSsU4MTbszZ8KHRd5rD3z8gVZ4r6qcmkeVRwA3djUpbra66UitnrbKhU4ErQzwa7ww",
  "key16": "txfgv4K9TFE6v5nrQ2grXS1WUqnsuirmevnVkpCf31g5yAqL5gUdZi1rgr8GjnkLfz2qY1L5cBhCcESDxPShWCL",
  "key17": "2pCbah1A5fj9nrhfm4jxhBMdkbFbnKyeSmHfnzYn4yeuFR1Aw2GzKVSAPY9iDX7fyby6xeGYesbAYL9jvny2Ra7z",
  "key18": "33wA5pSsgGbaRG1fDDmr223Zx1qRuM348KjNgpYzEc5uQuEwor4FT4c898HHDGFsP7n9VVa5m7RBTEqVG24MHBRX",
  "key19": "59jvWpBe9UZRYSuBv47nEiifzMkU7J8gf7dM9czpGgkwqDuxmKYsTXWxdvJjSt1uZNW7XnMfM9xyzVjKoSx975ks",
  "key20": "5TsrzpQ28YtJewq3KZa9xv9UGSBa5hajrPmFBU9XZeM9nFn8ygctd8DVg6NV2D8tebmZKbNkTUSvsxruj8oyJAgq",
  "key21": "8qqFFppMTGsvSZHNe8mtMa5iDCRDa5KB71GqVMS4deVLKwCTqNixTXYSouoGesGV3j3T5W7aK3YjEvLy49kTh7Y",
  "key22": "5BDhuoVg4CcHk3s5JdvJBtkHHxwmc5bfjzUdm28XFG5ai4gXboQu4cWcEu1JFnua1jDMcGdpCk6EAERTGdUatWPh",
  "key23": "33ZACE1yLwEywusZnLZeAT2cj865xXGHzFfhDcd14HB14UQ6mC4xzk2DdJ97DMwSUfi5PuYXnWWjRsZZPhtuy7od",
  "key24": "65q9hSqs11WfP6FgwQbQKipuHW9FKwMs9vfCuAh7xDJTPwmAP2EVvVwycSXuFGcvahphoCeUid85v7Cbjt7FqkuR",
  "key25": "48UmApBVGSGKAhxVL8c83QuWpRq8QQPLBq7UsqTD13XhVA4ke5wJC1ihhqmKbF9kgXjiUPwU9p5C84xu6tp5P8BX",
  "key26": "4vwKtnvG2s7683Z3xPKffRXm8VVYEF6X8qXoPH6GDPorMBaCync1NSA6Q8qW7WFk643shePXpkyaTBSJmzgdcnfp",
  "key27": "4X7k2bi8MDxjhiczyaaKCfKaXZtx5RJtRb4yrSy4SByiYnBY1TpqJDNCnuPEuiErSrRGYfncPBLNG96TZBs5HoMR",
  "key28": "5nteZZoZBPGp7onGbRYC1xrLLAZ3nMHi6yWjew4z1cz5r7QEj9KjDw9mfRdUqqTdsTUeFLjcYK3b9oBBEm4BG4jJ",
  "key29": "2zujhSusWyzQWWNcGofbxY6o8oGFS4Avwxod5cPCdmjxEzBevabBQ4wgHsgnydbeaHBfW3ZoXdhMAqa9gkZqVkDV",
  "key30": "Z8dyqR4MAUwDpuQcL2ekCVV5ywL8RzcUhj9aULmZ2LT3Jk8Ri9GohFDq2mytDaaug5wmLKfktQabHbWz9bSPhdv",
  "key31": "28piyEBB1PovXBNTFRRENDrBcGc6EWPPX4oJqvGjWhytgLkRwVjnbu2WmQKUazzqaoGdwDBstRBvT8puXMy5s4eF",
  "key32": "2D4sELSekbkBs8GEojBsBxb4rYAMSsmhs7n2PZa91noFESrroufBxBjBAwaucaivMWpNWkQo6LzA9ZHSpkEfrGWo",
  "key33": "2CoNzpMGu2dc3LMBKHhrqDGczFN5bFhtpZ4xgyLn8AJVkwRcBEStUR77kMTfCae25qVbGYPJCUqmLpup6ESaUsR4",
  "key34": "G6AGRfSmBGYG37HgW5qyrQdKnExWNUq3tunwYkAtshgmmbKoZg3zM6FQSqpbQPQHyiXxQA9wcWaBeWMejnXofB9",
  "key35": "mwpAx7VH1rBzT81qudw1Q3QtKbQWjgc7zE9ATKSNu92p8fqitxmeYLe39bzTGbdnuu4HuM9wgBTFtdAU7sdPMCG",
  "key36": "5Jro9nPRuy1w71gSNpa89N59VSuTsH4gFq3S42LBb8F1Xaxo5SDwEMsx9XrX65bpkVmUTtAURVCKueoPezbDeukp"
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

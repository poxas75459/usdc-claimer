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
    "23bYqzE2CPdmaGTMGukqpkMLJZRscqddzHPfjj1Fwa8MqGLcEFqa8LTHVikpASNdkUsSAkkChTHcJEtwoj6FyC99"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52H7NYENvWMBrdAbLeyXXxyYADhkunuHYs9m1bksCWc4QbjCfVFhFidp3H6fBhWh7RWFtGRgXybszFoWPLrSKYym",
  "key1": "yrYEhawb3p8TPtwJjgw9eyRNfhksYM6EXPR1mrodndDhqRzuiD7DRDherYrPu34QZfLNwtcjdhi6LHuRd5o2AEy",
  "key2": "4cb2zr813EMZ2TXKkzvgyxrtyVUqbRZqkHzqzmqU6MSpjD16BucgGdkZJDPSt1jSfixixemazcwpN1bnP8gMYLVt",
  "key3": "322hoBSQCkQDj7AVhEzci1SRx89XPoyKpEWQEQ3eKvrrPHma9FQnqUL9Fo5EJHpDXh3tG2sVv6aZEU246UBMkzCs",
  "key4": "4Hyzo3cu9iXPwAgLGR7vfJgwZ2ANbfkGF1ZBaxK6Ty27PFMi7Aatf7W2pqk5ikkscupXof9ZzVxDxLtkQwibbLof",
  "key5": "3fmD7eue23jMDdmK7BfQC5EXPQ1y2EjneHi1oBoEt7NtqircaSPcL2cnwaZgBPwfxWrTuy3wpRAFjmkrDG6R1VNb",
  "key6": "5saDRfWFqZM5tfzP9smLKpnQKpMWz2pqJFQz9PCSUUB4R2AdhDXwy5sn6ZMUC2ucX9sW8PF6TDHCLwm8ChSsH9Hg",
  "key7": "5FsZQEMk5wBw3j1yNLP1ScijC4TZa9ycmc7YQ4XCgvHqqj2JHFsQ7FAhNwYDYaf6VEivQ6U5WWH986VgFapAMBwY",
  "key8": "rjyJKZ25STQVWo8FBBm9DgJBVq9Au7LLMV6TGqfsAQMUNxNMukyVWaxY4DP5CY931WHJxctyfETYMggMPBuniSr",
  "key9": "M6Tf99MYYU2EvKRuUR132EM2jqFn922PGQMyH6jpqVVpTLknG7AbWNLC7MnCkziEkzuaEssgoZGZtRCcQUmQR1R",
  "key10": "5pohj7RmvnJ84GiopN13QQaULzXrhPDhNGTuPHMZR5CfVaoTnsQ1kGfiSNynbQ7b4FK2XJhxZ86nZHbaWodwCDtd",
  "key11": "vxkex3w6EH5dkgsiA3vMFoq5S2jZwgVyJaToozvpz2JhAa1T2C36PE5EAUxDUBsU873kb7bbgziYjcuVwyowsW5",
  "key12": "5LiPYaZ7DZ5sue6LJSoQLsF5dDipMeEPYPbKWEuXraCtQN3WYLvbWqScWN3XNCVHftBuoa4q5fQ84muqfvTthsQ7",
  "key13": "fnsd5BrJ2DknxQuDk5FJN37UYQLL83ccavMdJmHsJZAAmKNYZ5EpovyWiUpEuLoNdJ73gYFa8hFpd7etwbXY9vB",
  "key14": "3ELV1LJ8gfnmq6pstVnS5yoJWukDCQARw8UJVDeSMjyvizzQgqsNpwpuxrkFR7P2kXfcv57s2Lu4sq8wX3iS7F5X",
  "key15": "3SQ52CfuiRJ3ennhfnExBx3F84yW8tMesuSqfaCLx9oEESg5hr93VAReFqzheiECoLSKpzMCYwX4JkNx6r8vJcGT",
  "key16": "4XsKhJV7Zydx9efvuF4jLj9FThbYAnS43oucGWDTuX3JRv9GzHFbcuFyuyNrbiS51fcCgM5ypXCwkKmSbbfrStrW",
  "key17": "3kX2g8JMpwChRPe6jSDWrxuxyyiPfGj7Aaq74tCqdLDfeQhwmM3ibHaM9bNs5N7htcNiVWpxqY8TcZWXwxBFkSad",
  "key18": "7KXSgRHfWhdstLZa2prR16V4oCPeU3VxBq3YxGdj58TbnE4BrmYeANhMxctnM6pWFn1fgboRjMU8pX4gbu7PjND",
  "key19": "28jVvR6U2uEHH3L5rnCQhYfA3ricRkDwEjb7spTdsXGv57VCFVvauMwpkJVGDJyGSzT7pBFib8fNpxSufnEQg8g7",
  "key20": "67KT2BQtU9htQwpMfzLt5sXC9XVV45G8t4WJcPSwhM6jFygNMfRZZwp5fQ5mDWBcCmB1uyHEckeWBVGBBx8JJ5BL",
  "key21": "9r8MMptpnjddQjhMu63FSg6GgE9B453g7wWre8d1LuPYG18r8DS5s7HhxnV6Wg3SYoFJSnZB3bjPVJr1XdNo7wT",
  "key22": "5BwXdw8HqQJxLmLk1Gq5qpef8EhwfzqPPf8vg2RdwUDhtT6ck5vwDV3x2j3soMwJdsbJ8KN5D8M7qf1SrDXGFVPY",
  "key23": "2ZrUGhzW1ecdNZH4rM8rd4gQk8PjUTpHpvFiRvpnZWks6H81N4HJVXDHXff78hncmGgpmUG27VGBC8DHpwUip6ir",
  "key24": "4R4oAkAhPWSPZp8RdZjVYPs99XYQwPNStBE86AY6h82cgmcZMKHuMaeWMXhYtTfxDYjToKMTSSepHWx1APri27mw",
  "key25": "23ozLLMVKLE5dRPyfsyB6YahDwJorjNomia4JDMKxVCKbEqQ2xhZ2LQushsyJP9NhLa2o9vsFr75uEDmKKnV3mDy",
  "key26": "2Wn8VQTq8QeL5U554ak49aWDkk1Ua9kRTjiAcGbFRLxnMRx534gw3AApyYhJJiGrburcZpYWB7pqPsTGY68kKmeC",
  "key27": "4Zv75YytBZ3qtBUinfdDJNuFE5AqaQ6TmLC6rDMwPstt71K2ym3g2GA7ydAgARrhiNUZbdffBHm56nxrdatHJ5Kw",
  "key28": "4ugdLfyEurDfbGQKCGgr6HJULdemnsZLD6vvdCnq1CaexrLsuDRHTucgmpmygNJYTvDYE2RattjDjA1R4tjDoco5",
  "key29": "3JcgkiAxQ9wqjKScxUnUoyykukfX7ywyNH8iija7yvrFhcbRyiDXhdgPHkt3pdRaAA3of6v68hXyyTKLpkQyv8Kv",
  "key30": "52FKPugrXn94zJ2UpM7pwZqCyDWJWqf7vZ6L9AbnNharVsmsbR7nJp7z6mi15QD8HFKTNkeW6hnKnuFiLgKGP58g",
  "key31": "2vxW6yy7MukDT2NGaNDHAqw3vRAGAPSGkKVSp4AvgdCbuvNyLYZPpnioRQs9zPSjnFdYUYjNXpMTngz3pfUpEtcT",
  "key32": "3ReUB8mazuBYhfkZto92NpHioES5th7qZb2bKrmRTpEZ3JJdSA5UTBWDpE3tetxqLB7DJyZBrVgT8ggyk5fnSzvX",
  "key33": "cn845jJmPBdGXq7popDBBsTRcGtxojj3sNqrMjqWo6ABu5cCpERRnoQbTnsLZEUPNVJ7e17z8hHzMhm8K31HjDo",
  "key34": "Uu96tiZNj6WpcRjgYRJoZ22X3p4989i5nU26RS7zqmJjofMR2ujN7Rc8jnehBdj8MoUvtxb5d3FS7vrDa7C9jNQ",
  "key35": "b6TZnNynBMaUYaGZGX7kKJ4ovTKxBx8axyiCFEUdgHWCbtt9HNkhyo9ePqntef9K1JsFM7dL4onp1WaRtazshbM",
  "key36": "CjjdjAnR1MuKgLPNinwsByN7u9gnhW4cfr6YNM4ZQVFwHgsDbpEGbzyNUJZfSx6iEYBkMyqb6rFrYnwhSZCeQkz",
  "key37": "2zybfRfobx4q9bnsifDakSHhSNXMLWgdaeyDom9PWMfbqhKnKpxNU4a6Mi7PsB9c7AegkwVTBexmFv8XGujx4YNK",
  "key38": "3wXRA6d8L1QxgnBz6vPo2226cVsZwpcpbjZr67VVLfp5eavcSVHfSY68omY8AAvsshgrTCxRSPdkC4EQ2swzDHLM",
  "key39": "5QPxgyzXDoHbcc1vNW19SYMFhXT3mD7DKrnEdjtq2MStGmEfXSQXwdcSPAaXGx6AD4Qsqp6mXiaCAP3pjCHxB1MW",
  "key40": "236vjckrTBj2tXYzzUtS39vrdWfdYoYSGVjqA3ZtmzaTRRSJ57bphGVcoxSBEuz6RuWvi9uAqUxbLzceB9gvy6tD",
  "key41": "4UMBic1wKj3AeyJJC7VfafpH4iSSsUc4PcncMUwfq5TyZnQob2qCv3C5hA8KWFybD5iyyDU86C5A2uK35FyhfgDx",
  "key42": "2aBPgUBDQVjVu6YRiD8MqsNDU2FHNnmbVT3aeXz4J3NGox8vzAHwLZe7sB1S65bEcoZYcsHs7ZcNk6zaLf67eL6z",
  "key43": "2LYoQPktThqkJnbepGCokcRwz57Wb1MUsqVxXhrgdTUQXSfiTuesHa4PyVCbrgA2L1o3qHc8TehepMpynZNvKZ9D",
  "key44": "2NuxeUtyiE9waXUVrdgTrCpx5UsLg44mDsarPMgNHYyTqfjogRtdk8xSWc9xdTj5SeWviKSn8zRrjBiEtT3WDTUX",
  "key45": "3VMLo3ArVdnorApDmoaUsPVJiZZ9sukGqePQ6bQ51GAkkxuWyiDiytEN2G3jgVV9APQKTia29JnzDDxErQG3VduY",
  "key46": "qY2sU9oJPrgZxag7LehyrLW9XVo4SmWmfvVpRkj5vK5zcguPtGoXr4skAP3TwRjNF5QWKVAAxb8aUCmcZe4STGU",
  "key47": "5QY5DQsBpycVJfBgTjgrkb57vXCubNCpTL7iACzmtMKWgrofHSG5PujqAsUk5kKDhh43WPpbLnHSFq1k54RL9X6e",
  "key48": "5ysWvTs8xYySKE3Gk7AXCTEqU8w4uCb6z2dXQ1B8iD2Bva4eEhQNVwLAERK1cZofTUnZGjt31vHpCnFVZG7XPZu9"
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

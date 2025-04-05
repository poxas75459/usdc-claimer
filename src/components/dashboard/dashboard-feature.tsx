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
    "39BK4MV9YqnahmRWz7dz6zCGK677qCdqUtJHtGws3a9j5YF9axD5NLPB4mktF4YYk7N1yPqzwkXSqPHtWTnTKUU3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65xwPfP9CDC6eAEPGD98ztCF335M2bguKPp74UBnQ4jCyfoQypKr815pDywQ6G9RrVGz4JwtuMKkoqosKaciasHr",
  "key1": "39n3DDubsEDFDNy9NgyHoyqU8ACMasfEQsqLueKjeJXhGS4bNErc8WvnHmwffQiMzkmDtHERG1MArZYi6Dt4DAdX",
  "key2": "5B5nvA1dsai1EL1LWmdDc7TRrcwU1idPV2yefKKpqCQzds87ZTxcA4QGwuEKB1YpoP4nA1k98EMfQLkaK85ETrad",
  "key3": "29B9cN298s3Mk8AFmpenufFnFNcxjGS5DfoBuAs2SwhBYnuYME2vV3NN1TXtRvNtY8tnFWkKBqnB8MBAco4TXciC",
  "key4": "8zbsmdYMcfdaitMAG8YmNBCdERaN5wP2D6j8fEKtXFqsXe8LdrooPgvc5Bv6fHFZsVuRCtXLXn8cBZ8nwxeCXuk",
  "key5": "2VJGK5SrKvk6QZhwrhLRAZmJ1wvrF6WkJRsXBa4jXmehiZ2D8NVi3a8js6Lsr7mRyHsw9kLmFRVmiYDKhdk5p2vd",
  "key6": "FnVuCMQM4FoHBNY21tZU5gErNr965Wrts9HFKA9cCpGGujmp9HSYXfUXVPkiJZ7Rhx8CseW2FkqAmaaDHHQN8ta",
  "key7": "5onHWLjhVMPXvB64g4UkBZv2zmFaooZgFq826deUPXoNgTBkajtZvtmwVDYDrrh5LaLFW3TcQHkp4N7bxYnmRRQJ",
  "key8": "5mZMX29WPjqVLQUEoyPoYpvesMVirqB19ESsg8J6eqVQiUdvTyx8w72uzL65Lwo1upzbqCxhjF8gjcnaFvmf6pmi",
  "key9": "47SBvb3oMnMXwE6W6PiDpaLvT8edB3Y4WT6GbnDu2DYCeLuMHAWJSyrPAZxDWbh6DE1fTAfhTMZ1eYZbSYc8yarw",
  "key10": "CL74sW7qLRsLgwD11dt4shiYNGc3zfJVycSMQrHhBiSETAXVXNjjhSxxb8mre25rGPQz6KMVi91raCbg2bYNGzG",
  "key11": "4Hex9vr2hARaD8TGH4QKz8Qd3Bm4ScjXt6Zrqys8kNbu91LEy3UZj7daQCWfZbkziT7j1TzER9qr9MYNvGNMJg7F",
  "key12": "4XrcdSpCQm4v2NUxsRSjUHhtqZU7o1Akdjam7TpsKGNjHeJdJmY1jbHmQcaitcW5WKa1oH9LCkh5TMAe3oTMHEjS",
  "key13": "4sCN1yk4i1zyHQUM34QRw8q1h1ENEAsuW1Uk8Bea7Eb9fZSSgDo2VRQo1tCpzbNv5zcoe8y1PCnT4kNo8WskWHym",
  "key14": "BcQp262jczEiNPTQjHXJpFYaphGBNEi7ZvetHxU5N32w5NHS9U1NoxCLRpkd6cGoKuGrzCBugMB2pDX2cZvhW3X",
  "key15": "5VPmcC42qp4MzbyrvH9ZTkU4j2G5GQDcPwfAtoE6VN1kzpgBg6pmzeBQ4CbwEwEuCbUnMjcAKQrA7PLoE7myMy1c",
  "key16": "56s8q1kBeDZ7zT23ecvVxqCcyAu7ECYKi9f2iE6pRWTdDSCvsD8RicC8UeMEkMuSWUEdMcLEwHEm5AAmdTzxjQKJ",
  "key17": "3LQ1gVnTMafdURsHF44y55jDY21kQ3D14rftp1hYu3PmyZdxpBbP6UXfWK23JLHkBe741PsCxdvTWDGXnG67cJ8m",
  "key18": "2Y34xnNKQfwBUetaWu3ztae5NM8EHEcKekU9rSqR5SmDrWngcUBUFk8gGcF4NAzEcT8zYu7qg1TDmETTfDmse5j",
  "key19": "4sfkDzp1meugy7B96yuepPHSaCNvdr8UMccBmx1ePACgGeRhyNfQ7JeYSETwsEyKCjreRYGF3fFbMtnvWSuPh2GP",
  "key20": "5NDLrAA3MgUeZCdDHfdLzLM5LFJ3xK1n93w1B4CMg3f9qAu39YBZjDPNWs9aqudACP2VXk33wuNwDbQCFafxNPnb",
  "key21": "2zGWxfx6neZBD6kZaAkwviLwGgDhCY8jbtAKzyjj8qA7UuPN4xtyasxY1CrNdY5GgUhetnMgsh4naa1DJ5CtcGty",
  "key22": "2x8bzCFgZMCz86bZUkaecpRx5oshy1gheTxUEqmi2ovA2tW3EPrEwnNYKNRTJLhWGdPJ8TmaTk47bLfGCnJf5DRW",
  "key23": "2ptemweQKCZbjYFCepqJQkqbaiFpZpd3EvY6Mo1Lh4omEVbf2fA1RjfF8ZEpZ4cbMQVyXUNGWA7va9zkZak9PuH8",
  "key24": "24Mz3ruhF9Me5vqkVSA2D3EyQCYwaNTFC4UxbERQSyc1g9Jduya3eeQMiN45mypKJh3cEYjDkjXPsn3aXscFmmCZ",
  "key25": "5C3YA2pdMLQWiW2aJAeUJVhmXz3BgjtpTd3XHoiBSWr4WaxHethXVJ6SQ33GDBemgWiBwxwLWzDxXESkcmfW3ncT",
  "key26": "VM2e42AYku7Ug1wVyxzBjbA2FkyZmnkvPGhFHWbNBTekGccnxENfG6Qh1yK36jJEbwebSn3PpXAPbFzSomadco4",
  "key27": "5UhqavTmmedNywqVv2a3ieBFW2x65MMY57onfX8jVdbAyTqVnqnW2VDyFP4e7ooiBt134NgJgNdTseq6ztQR6a31",
  "key28": "dX92A8eD2vUGQiDeMJPYExn91p5f7cVUzHKq5zfqS9TzGhCV517TGT6WQhmBHmKM1JoWxEbwzLbXHBEsU1mriY4",
  "key29": "2gD2H1bJusRoFVoqwQBjVCvDkHAhadCJ2xNPvmPgMnghD1jpi15ij4oB2mrmKUyZVJnK2sPAFBp2DAFVsnTU3AHi",
  "key30": "3R9PZvdbKibtSZ2uugtbvyCpeT7j3SuMHkqVPn343AcQ8LjcLeZaSLXv1UucXRGCfNSfq5quJJKojxh8AxnZK23s",
  "key31": "41a4PZefr2ga7VJYVZC3RQev3EksC1VsTGKoP1NUgLNRXMFTpLgcv3tp6EH3Wfgrq7uiR2VGRK91EbHB3EUUXxRe",
  "key32": "c5XHTBxAGe3mdrQnvozi93Y8r7jvTUvGogRk3hrXhiFQf1d45mEF8c6nshHerSH9i9qZWUYfMVRyZgaayV3HDVn",
  "key33": "4WCoPLd4zJxzsqYF7MBsKD5NbEh62ba4nueQDR85g8nFun3jJebE32m4cxC8CynT54Wv34ivNGtvo19x3rkQPzdx"
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

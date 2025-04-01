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
    "4sY5TpgCRbpD5s4uRx1TfZwdNjWB8jitYbAaoz6e1FXFE2yyWaDx2YB5ZagwYPfLwrbWFhW1q2CWyzaKPbbw2MPe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uypNAKEPAC1EcdWWw4RcstTnefuKQwM2ZfcrAEvSs9jLcw5RJPU4hb7DNrM5HjcCi4eG2L67MCFSsms6GJ5KMAT",
  "key1": "4yNDbC3Me4QUct1x1XAcuSaokaDykGob8yNQ45ihfJp7W3fp6L17UvQDRT5mmxCVS6xE7YcwQrHjGMtDNtX7nd3Y",
  "key2": "5otRnkvaYD2csXsd3qtgBY5bqcwLB4MLw64CFsdRNQsjxZFP9Z9cBR9a64f42YZrwp4Vv13S3teJD9S61BYEMyyM",
  "key3": "561VaVYd4FhAxoqct7PBqojgzn4zgXhN1wCjTYDVR31rJeSV7RNMJR6d5EFNsYFbtxWr1M3apvB3wzqNg3sqMjyf",
  "key4": "3HGWyz8EUzdkcbmfy18ejQc2pZn1sSazveZLXvAiX5sk7BNujRutRPDkPg9iDgcxms5sSMyjhWFLT4rLn5gZKKGL",
  "key5": "4ArTecS9J6hiET9VgGKpgbRiJSfxvFNczsRvtgEDfAJj61dE3yypLDLEdRpYxsggYX2PY4yd39w3Q8KpjkkrBmJv",
  "key6": "2bBwoi5LXPrJ1RtxpuzyD6usgH3J7fPTLctisKfWkXs71X2H9XjBtq3mSgamyArq57R3dFvMHApRzBy7xyoWmCx6",
  "key7": "43mpnXHgZYacJRNvvdgKsURWhi7BbMJxcWKtuxKHssik2tFrmL9j1kD2WNHnjdmGwGAY8E6ZNEM9WEEnHXrHPvSh",
  "key8": "MZMNEBFZnbmmZJZnG74NjfoBALvaMMJgWsLhxn2EwFFVDrEAC2cUD5r1WiN5NBnqaQLeMHJfRtwZhnKqAMUhWwW",
  "key9": "3C5VSdWusg1bzVPfTHMuCWCc4pZbR3nrT4eqgj2Wo4abyLQfvgUvquujHCE4oZRXJX8rWTBGjR3uzzoqM7aEHixh",
  "key10": "JZQvgtAWKEufMUsXcpAGK5WC3RMizS8PzER2EFGJnbv8naWbo33t1e6WMoQr4wRuRE9Mnf45EtmRs1osVBALLX6",
  "key11": "669Ab7y2WKc3DnQiiiC5dkRQWzStgCzqfnEm5AkRNwArporn3UPV2mwgmLdXno1TeWo1fod1uc26Zsn48XWVBWKP",
  "key12": "2ox2vvCfCtPboUY9hYi2EMsGEdBtsKNnas1ZDYfmTyJDQUCXYDfv97qkrEmuxnzWLpecqi9NEAMxCP5BD3xmuUm",
  "key13": "2h3gj1waWdEQ4nnCz4UP5yr44Rv7xnKWC3fqRXcfDcfjjJ8Knz5oTdoXXDdutaAUPFFprpvkfnHxRB1pCdwjsRLt",
  "key14": "4fSA7AxuJqNoKpyZ4dvA4KfCGhFDTPnMPnt5Li1RxUzaZPjspZKyqFTY6Xm1hXEvMRQjTFLLnBT4C8ErKxvhXwGe",
  "key15": "iVbRwe8XPLn2AsxprL8iU6WwqmAVtBKLgVcXovnBNkL9KreQA4hYLsAkqPKHGFCrS9ty8rUa5uwEPFrLSQTNW4T",
  "key16": "H5Wimq4qwnF8dhgMuc1wfsoQMCRRqtkhgbdWt4rBNjW567dv1mL3Q1oNZyo1h7mBxpQU2gqJLmUMAPPx13Gqbq7",
  "key17": "2uBF4tnQcDwVaizWSnh3Et4k3DmbyF2MU2PnBo9HNrzdRS9USMvY45zCgje1zAmjGairYFiMySvvJiuJBedRYqDR",
  "key18": "3dTn3qUjyARHscCnKPfqMngFgqFnYJSKTjM3EqyPcXk7Exi1nSt1dmj6e6Q26PiaYTpwZc6WyJ1FgDPsNG9ywKDh",
  "key19": "2mk8hB2pSpcr7812V3MUQjdD8aDZSharJhxpR1V9fuZTxhJ4JXmCgrQUozt31x2omB5RNMNR3BjsJx43WH1qeZ82",
  "key20": "3Qka5QrQ55Ec76w5BzN7RiKXXgXwaVGkYxg5pomwgD13W8s15gstZRhg3mJunEmDsgj8AiAnE8Qu8mUCvah6Jzzj",
  "key21": "4j6DiUUMF4K85NaDq5BvDQVqSqmGkLvKrfFnqsS6HuBYYhNYtwrtoh438LQYwqeLXWqTyA7vCiVcB6tGWGMbJQ1H",
  "key22": "2baL5j79NdbVm512m5prqxJ5PVsNBsaEszMbnWdy3pwANfBXJMv97c8pz5SF6gLVv6TotyeHB2urdmbps3ZqNaoS",
  "key23": "3oZrqxLcTNZwh8xdSnf5UvGXNCzTjLC9eUzGzPQWm3tsoSEKc3BLQrRgdowsg1xxHS4D6Q2GGCa51K29YFLEymWd",
  "key24": "64KSRXyJntZ3yPNkka1fBEHDi7n1YB3dZA1HSHADDx5Z7W1podwLmB7WnooyfZ6JHeh5zwW1PZh2yhewW2tguqiY",
  "key25": "2AmH4axyr2KmStC4QHYepWshzzprjMXk3UE6MJmmnKrFCkkdeC3iCdptofrWsCxyTWZC9EDH75zu6fyEwc9Tc9tX",
  "key26": "633x3a5Z5HTFGpU6QDeSLNSFvguQDoAWZDaS6Z4mVaiP7HsrKC8ZcfwsHqWCu5eurrHiL9HyzTMXMeBH5EmBdBYN",
  "key27": "4tioZsBRLshP7rpTbzfoa43igJhTTKsM1W6Y4dUYoLJ9GvGgQVceaBFwzpVb7NnQT8PB9DMaRn1HdTK9xpU8dY96",
  "key28": "3UFuqwHbKkFb1zNQ5vdN81n7pwekSDyUfHVCQWKNuwo7Bebc3R8upWYdm9NfRo5U12rzKbRgwYQgq2mM5ChMgc1j",
  "key29": "3fLDrCRwKPMBDtxbHT3dXUXwxvLz6yoLydU63g3ZAJWzkN7as2kcJPR4vzYswKqqiTGnwHaKdjwACj74C92dp1Ys",
  "key30": "58tx2kv8edDg5sR4mjerG5FKHrb9s6fZRiM3e1jh2H6iGt97vShEV6tdFesWJvk18LjdhqXXtPXWZNXiFTEb1uSB",
  "key31": "4j9ZQ4fytZnuoMVw6PhSKgz5z2dwCS8Zso6CvWQ7Z6cia9yKFpT9dFHjEsHMbcsmaDjQPipBa5C88gjf7V9CZSQ9",
  "key32": "2K7Q3G9Qqf3sz2ffvHjcAFqmCLFupMX1ZHdVmctmYJJEo2tz5AjziTGJhD448EG9Qg66Ucd6Zrwbsq3xz83uTZ16",
  "key33": "4Mdfv27aB7crp8wie4CzCuFt25s74483TCwYLQjA3sPgBViXb82HWvb3ToqZ7DzwLSsyAVZbgEhW8gESFRBHuENr",
  "key34": "3BH33SQ8rEZNpKxer1cdT4JTuJ8EEEPkQ2WZ5SFzJpTPe3Nh6CNnEy6S9xD6zh3eWLezyTyddSiu56W9SYfWT85k",
  "key35": "Wx9bfSQfuRNGo8xXzKT6kYc2k32wDWvfQADc8V3QcW2bakHYwnejj3fc4Xd59mm5hKmTK3MnKAn6RDpAqTyixfg"
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

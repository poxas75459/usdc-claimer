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
    "LRbwsyZCtgRQSLRQj2BAwPoPkv8hv8UFiqdHNrTHymTUiYi5fLtB3h96Fe6sFw5Tp81aot4zFCh7EXY4oXMSdxD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BtKnKRKEijm9kHDez3n2onbxKYgKsMh2vdv6N7fg2PdSSFqzBrpSxSFoZRPMMGweZMa8aSQNZ2Ynekd894DhMk2",
  "key1": "3AEAibftME3HYZDmUDd3vahv1gHuibNmk3Ut6Sc5rC7pF7e5VX3MTDujFTDY74vXcHkv4VHHZLN9CaWxg9Z7gTzr",
  "key2": "2mzHnr8eANWGdFaXKeoM4Dy9JMmXS5b4zUvcGE44hV94a7JPADjZQWcfb8sHRYPyh5a6zrvqbfw7uyMwnWQUPaGT",
  "key3": "2g4aFhiK3F1Xom4r4fUG5FienEnRpan5HkDYWwjBQ7AAbicuYnDoLUtRgMn23CELuHwrpunQBU5twfFmZWUqwHce",
  "key4": "65wx2isiqQbB7hgwbgnTMnwCukTa5An7LLhPHVaXpTfwWo5jucG3f8ymk8zAmdBeEv7wXGjXvPUqNQhJ8BV3T6vt",
  "key5": "4HxYDNqJfycxkCWh8ihFdH6bYv2N8zeAJxq6sFUBMAcWrzEtfNRPewAivQp3MLh8aTHWmGTrmDUC29frbCP8MfMA",
  "key6": "2PERdiijqsHLVBFKFpkXxNP8CXMdkqe6T8p9SbuuZtAbauGLxMT2ywvcWGinRBvb1XFHGnrVJXaCtrScKzqpwGnp",
  "key7": "2sqoUvf7vWX5MnWtaVPQBdSi2qhuraG2JVALBmso3hgcNTgRygszmLJPFNNHYF5rf4DUarfVF8xvobr48EyCaJBn",
  "key8": "zK2Qc1FbMke2ksZ5WGABZ8LJYdsxcH1tMC7WekYjQrEpgXXpz9yX46EYgqhjVupBmsqzy7Bp2YkfJhLrxxMdan2",
  "key9": "4ehpVmNXxaj4GQNXqfrRsJ3x9bEFoJqipinomrzMjbNarNuVijckjeEz9ao9KCtSXTh6JRbGYHXWHr3rwVrwoxr7",
  "key10": "39RvTQ8rc3yyxTVTHs7SVbnhuN5Txc3xMrXim3Tie8i28ENEg6haRSqLcyokKogdoRqdYG4zJpMu3H319jLEAFrD",
  "key11": "3zVP9e31Pj2SL28mVqfstcCGdMYsnnVriCgnWCCknukeQN9tLdzvG92RDF5kFg1ym1dza25WS87i13g3XHgRziGc",
  "key12": "F8jvPy3mQBp99JzNeHccV8H9p2xsM1YaiHzKVzyFwzHg8yEGbWnWo4Maqb32SY1krD4iWdFa829FDCA5oCHWWdb",
  "key13": "5dFocVcnpH78k78MzFRQvMyBPn2Pteq3BBzifYW4nt1GRZbbVsQvc8MwrxfKZienftjgwivPNyyF5XL3sTdbLwAf",
  "key14": "3HD5PKjuSWuATLSyZCLtKvxe2ppXVGg2RtoLjL6WkcaFJTy12TAJErbPo2ot1LgHBejq5RjszptQeQq61AL5FzGR",
  "key15": "4vwU9CiJgrEiPvJZXPPn6NGgEmfcuotw7hbs54i8uzzFWk5AHnpZnhKhGzrqtfEJZfEcDik3UMv2PgMp6wqjgTwb",
  "key16": "9nA6T2FNGJ9Q3vzvqNNsrQjs46hdUtD1fA5Wm6MQdcw4jHjjkHXdJmb3m8bZinjNNEtKZgyTVD7raDYvYiiXa4j",
  "key17": "49orhjGcBF6f2fhhtc9aKs7vJ3JSDbUe8KsdCY4jfn8Hq2Tj1nQkFEPAMFk1nFa6R4tPsApA1uxRxVkYt5Ys8Zct",
  "key18": "3Nc4RMGaS62zGNsU151t3M3i4VkfwZHDParYK7sR8c3oa1CyQRSBa4smpN7jh948wmudKwyXEEzhW1HRZZPydGYF",
  "key19": "5DfogUk9SED2HSEXivp8MBzw5SRBQd7HSRSgFhDsbzsgZuWxfwBZUT2a7vfHRVr3j7RPZa4fFW1j5KFoKP9v28Q7",
  "key20": "45R4HixqTAFqTtnjsdkYmjnimbSMMP6EahGCCfre3udzZGbRqQr7MVXfkrcXc36K23cnzsFHJ1bWAn9wR8n73eXc",
  "key21": "3vxtq6chjtfRoq6C49JuMnoEbYd3s9GJWT1xy6m6g8q52LqukFFGSQAz1sRYwaVEt1w6mZ6CiZrqwgPdZcVqgHBp",
  "key22": "4B1HxMWesbJwwk4vx3AZ56QuZirnub2cvyNTq265MEMT24eMu1UoqGWGGCT7qLndzXfY1AhqqZhc42E5FBwo6aFR",
  "key23": "5pJxaDerVmTuUqihgDcY4akFDVd6coq5jYWt6y3NWYB972MwyMc125orGWEu8D6MXSa8T6rH7WPZDENfMBHPVhA1",
  "key24": "3g91G8Z8PPoePBSE6YcD24SqhNfe9wi4JDNzTZSHTmRKCWYqwPz7ZJ97Um7egtkn3ZJDyfCZbSRGwtEEKSA6GehW",
  "key25": "N3rMZx84sLganaSa8ufCtaDjJW8zwa3HEDmkK2ATjhvo5oqi5Qv48xf25mJjWCogJKjWZSXBTLNJ2A1ejn2mm82"
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

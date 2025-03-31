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
    "22Xu5HFUUNhpXjspkX6E5CdCsfSwpxjkF9WSriSxQ3Gvc1kQEUqUNxQAZSapbW8j9eWRRuJZUBmKbaXDsoaPn2yG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QzCTK8cVg6QvcafPkg7ykhvKRiUVVtpKCB4mhE14WkusJ3WgfBx1X3q4krieMLn49Yyq8B2WL1Z4ZybTMYjVrf1",
  "key1": "47rdNRndAiFaGXQ9WEG5W8Tgbto4FFgXBaUxHNYdwyyYPXhqDb921TsGk6xVQUZagZuKq9iXw2tJqyoXobGDM4iL",
  "key2": "33uBSqVwPMYi7UCPG7baqPq5pM2WxFxcznMuzYpqHBMvbutn6xM3jdNEtGBW2PKnHCbFEvJt515AFc241TUE8aR",
  "key3": "5CXBGjJwxf9g7kBTqHpmU9ca6NUk8Q5cSp1Nnyow5AEhPhhJ5cTnn7Z5jrBKYhybU8PpCn8Ndwb2ND42yR5b99DN",
  "key4": "5nx8FtZqfUbe7N8VCCNjq1MrVnBWpLsy6iueRXTjcWewr6fZ2M4cErCfJXwf2d7p1UMDJZQQvtg6hytqaW3AKLB2",
  "key5": "4x5rs7ffJBrRUeeU7zfzDzFatKh2Z5ba82CPuLNcrwAbffDmNPfgrGDu3kFR8qB4FdPhcSLVtF9WN61mPEtRWyZm",
  "key6": "2LgNHYyRcW1EfjimzsReaVhnc1rn4QK9xY8qpnfAqYA7zmNXSKqb52WGd5zWW9heN74TrP6sYsRGjM6vvfE8mJhz",
  "key7": "4ekJsNzD2Mp547kg51wV8AWMuQ6RBFGA799PFRxEQAv14qhrUq21Hs7bgRnibzNmo3H9PhnknYU26JvPyDV3Ucn8",
  "key8": "2qoaimUfyQVeMviCPoacDLUwDJkssWJkpUA7DaviX63VSjSB7BobP5hMZz31VzKHMhP7FF3dTCGxMRETJeuJjrP3",
  "key9": "1d6TuPEQSwdEudiuthLLY5FVqQEVcNUDGS7AkfUfg2xa6SUdxpEP7kepiggAXHzTWQ3jc7tLUtfMj84DQfn3R4d",
  "key10": "2eYWLrnWL6z3q2cp5btkCFC469cPPqPaurq8fwk4Q7ktSKKtU8tHRGgW71xYiUz4V5iVxbY4UP5ymgdcG1AiazFX",
  "key11": "jR3Hf8uYRzFUfjZFLNcpLMBY56itpBtNpceAjj1yi6bt1MW7QVb2Km6H2hfyLrfrBcfJEBBmX2pqLxKUZfVDpB7",
  "key12": "RtVN1T9RMT87mycb9wvbYhRzYB7MpQCaQpizVxQM3AmeNZNbjhT1X29vCS5msh6XPCtmDSZTYGp5jVEzfxPrXrQ",
  "key13": "oPsM2d29nU4NdMC4oDpibiR3XzzysRAMdv5upGMEgrxkJCdRpVAXxpuXBy6kBrzgY6MQ9gvYFesfqeJK3xz2kxN",
  "key14": "2EXzxu38bTSixmoBcSuktX9gJrk5GsKcCDWF5rg1EuWJWMTqgBRTZgQu1pJ3A6aowW4cdPjB8v3Vraqdgo7yxDGm",
  "key15": "EL7H7tF2Fy91XRvsKcQmWs38RHMkb77UuvNYKoEFvBHSmUzpjRiBqaRZ64nhVWouhUH4jKHhfUPEBt9Ag2siA5u",
  "key16": "W4Frd13GXqRRckzK675tQFkU15qcZyfetoMF3zVAGKu7nwQskLZzugXSSCHHur2MaEbZgJWNTmS4T1eYimFSY7C",
  "key17": "3MwT5V8nqQzC4jujCi3dqjA5JrV6Cjyd9tw5qocB5hj4Dy1mGbZqqxX7zDbj9XjjLNxoK8obbXwW23mFKyPgVHT6",
  "key18": "21QXD7ZPh1dExWP3Dq1jnSTxoo7qEH8cWjYtV1nffuL4RkjCtQ71xDQ7dbcVFdzgkLYVKfLB6iuWPcBa1VKF8gBC",
  "key19": "2M9zpVWdHsTiiVtbXtan1i8RnN8bj1DkPsbthausUxUoDjecqx5uAZXeZ1Yi4QE7LrR2RsFkHAyczwthGPx6TWdh",
  "key20": "2tVptkaxCPq93p7hZ8tKAAnK1rLmW3baFjY7TiHGjRs6sBAoEs2S27oj5TquSyoZ5tFFUECmayR3UFwiSh5j1pFi",
  "key21": "58mJUWFZQyLDyJ7kByVeTVLAwYCLmjtjNT2kkKJUwxgkbDgmKNnYwJ512Lrfoq2Bo1xaBoCprLKS7R1Nk7zq1fFk",
  "key22": "5depXBKabMtkfzeYW8hXvsUQ2rBot9XbubpirBX3vhsQ7xxkddLs2eBgZitj25wFeJizygoyUUj4FgCHevzp8w4s",
  "key23": "2GAiwh7baeQZTtsf1LPSJnELE9noEAqbhK8ai2uJ6qbRftSCFrsWRvtyRemtin6bRdmsEVnVu8r9FMU4nnV9brGt",
  "key24": "22Vcpm3gDuhS2MoVhpTd1V7uHoyDypf33nvdVCpTNwTb9YwDqh8TCpFPFBfS2rRqCSjmGnqvdT7oBEkxpiEFYPbs"
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

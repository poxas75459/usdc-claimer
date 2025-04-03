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
    "4rbgsLCmEZWvagQd2sZuUQx98frsTA1Dhu4eywkVc9edDpRrahrKxtRWV6msjKsBGBJu1Y6Xc6swrDz66U4b9geU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XkXiPGtbJ3BbGSXvMUietNM5BjVjiPuhSeJmWauwseQg4vFnpAthXVHc6cuuummK8sNkHqJuHuFh1JzcpcTwetR",
  "key1": "4PvHff7rdSa1Mg7iMKEFekm5cBECvMg4ckJ83E4C5yCZUzfUqdQCUEDjpzRwMuNDhSLvCB5aeM6RN4yjeQ3fsWnz",
  "key2": "3MKTSG2Ag5PGoKnQcbvPpwymhAW6LDPPGjSDiRFWru76AFYVYzGcE4ZMoiz4XFEetwp5aYDMhxTJNhc8bW5vCfkr",
  "key3": "FD8YGVdggJunv9QnLHLSK8CUE8DuDbowPotn3TVTvZSosYHK4HzsgcrEyaJcPdoYYDbPKbVrfktw4mFS9iC5vNt",
  "key4": "K7igV2oNjNgUcA2qdMvPxjMhF7Lk9PY24WurkaF4pEaoirBueQnpzPD6tRZmLsHQNYzy29pynWn7fgvdE4XcioK",
  "key5": "39x2ita7y4qh4yPyoBzG3iNdikNiNdEaBe6UVUW5M7PSy8wkMwyLvWYmsynmzPqFUnUXx7H2FxfaxZD4kW26NfsK",
  "key6": "4fknPH8Lnw5cvJzmzQEddX691f96ABNCKJAcneUEe6LDwEvHUf4x7vhVenukk2bfPQZAfQ2WCJYCZv5n7xiidViB",
  "key7": "4jgufGAvfzgdS7jCC1iR8GvCKKezVdGCjeBv1ttr98BgWX2LwmAzDC4eMNoxaCehkmhbpCV4DhcBudKoNyexJFfz",
  "key8": "53qZWSg59v6ynpMqxywTmgSFN6tnJKQ5G4dESofVDd6zSgvKeWPczRCPN1SKmvHrep6F8rQQj7MuiUXGYfyvva3d",
  "key9": "5hzRq22DX5YBCy4GF8VDohWDUABgXWYyYRjgvJxUQACuSmBnaHWPM1SHMhqv4xRZuri9pVmKwYHCPNnE1Hxi2ypK",
  "key10": "ByMDW2Hgtausk77NDRJ2C1XaLhqxEeyQuGjc3dM99VKVPb3CaXpDapkXd4Xne3VnrrUbvhsKS84zdvADA4b16pY",
  "key11": "2RpkzmHqJ1fLUuurAQPuieqGHTi2JPgyDHmajoep9KjQXoo4iDUJxgioXED3Tv77QBcepJN7tQuBNzsae9o6tjQ3",
  "key12": "4E6UvkGbdxNqx8S5V8spqe2dv6s5HUymQg6AyQefTVUChEaQpvVsDCB2GTqpZ2cximgpegACASHLH1atEUUt8Xma",
  "key13": "2SR5pvP6gcZdNYaFKnscDsFEdV5yANMDd5YMCfu23YvaFujhhEGTBAFwnDLBSEJp7CE89C8gumHDrDHfF5TZytQk",
  "key14": "4SqLP5ws62ZCUzZDoo51sKxDCyF7iG97Hf83KtqxXuD8eZ8QNgycqhkvdedXuA3ew4ST9KLxgZes2nCLBN8TrtKJ",
  "key15": "4RBH4mkJHCcgxarmV8F9W4GuSLHbDD2Zt85uf3eB6DGCHy51JcP4FYeLczCioGyEnnfqPYph7hAnjZzda1bp93QU",
  "key16": "3UYz4vWZTwYrX1KRHqkQJkSNpKgpGSWG26JXMEoacrooDera7vY5Y4AwXiZGrXEZLvebGqYR5U2XEXMEcxpek69K",
  "key17": "6eiXnMXaL3pM2xVocHWrq9mrJD6XBJiETyLPBGEUFnjdexrCApMLZvpa58oAeorntPiZGSYufjhygZTMGnAeFbY",
  "key18": "4BH3cWbxDK2FZYof2aD8xda2nUV8io5gi3Cvmb7JXUhQ51EZGX7cK9cHDeKtZpJr4c15n42F5n5EUiHy5i4R42Nv",
  "key19": "648KrMeQx8mW4zuKU4r9uN7ZXqpF6cjK3SGNDjGFdb9es9o2HN787BdVa4jdusUcyACSexTAN1EkNmH8fnyqyHGF",
  "key20": "zpxS1gFtkTMW5tSMYg5mkKXQuCzGwJyj82FMbM51gecVKYN1gGDAKn2jEd9ktd4rt2Uw2cGU9LCPsVWo22LouCP",
  "key21": "31CRGppYhpNzAzECWmfTU13bsMTMaUk8Yf1qyURmZby73SzueDve2akQRfMvgb7JYmsvZQKpdbZ1JhFjRXiX4EY1",
  "key22": "3EB6zuVw17AAoAKAhdTq3bHMxpm3VKFuT3ZrPvKKAq8ptUrVj26NKcDGdF5SgvkqW25xhA2J7Y8UoaF3DGkqjgvT",
  "key23": "3djLv7Sask85u6ntpwvavCDfk4HaNcnxHrNtR1Ab1tn1q9ssgzFAJRfreeF9VRD1QMEzdNhyymEocyMyxkwQVBya",
  "key24": "5AwUybWGk1Hw8ePGWqprmTt21g6RT222hFxYPpDeF1k5eKs1pnr8TMcJuwnBBJe7T9Hs8vNXnS5NygYftGkzAodP"
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

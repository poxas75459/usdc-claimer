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
    "5cqwPmit7zUgnn5Pitv3dDaaUezAb3p6gNwRygjZ3Msb5DrZi8iDANEW6D8UTAEexo74t8DXnQFhP3xSZxi94FgS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UqxB5bVveyKQ5hJdJywF6y8CYgqVyUEzquN1DkdTXFCproCYr7ViDJxkaydEoYW3BgFYGpXSMQyLXbX2G2Pgqwt",
  "key1": "63WWzMu2so2KBbjS8VnXDEPWtHjpEPwM3Mjmye8bBvb6DETcuyiKr4r38SEq5w94VHowPgnVuKJT6KsKXFiBQKvu",
  "key2": "nW6qKSRu6fCEkvhJrvMhfmu325sx8jDFzXNEtjCtrVgryiRhn7Ae2pkkhywmtSBZtxZR7rwSXnARRKmyp2ui4qM",
  "key3": "65rycXJ1k3aVh1cWNdCP75jzKQFnfG1kdKNfp1sF3iHh4Ezwj5FAf35VMxrTs2xQoyGJSohk5UwJ46qgfbRa52rB",
  "key4": "5sA2GyW2CKWkXHbRE15hSdsS2MMMtwXVwHBniiAHzQbrVc4JEWRrFU7UKDH1WvfmC93YhVx575cYYWPuCb6A9cPZ",
  "key5": "63n3QfjXrmccxHKK49JgXyoeecNfh3pWWDd84DLWkCi29gc8TeDKY4JC4xBSTD5aMGH9ZpURh86JRtxiP3nLrdm9",
  "key6": "4GL7ZS6vZ4YiQGtARiMtxJq5cNVgfrVJ9RSTCDcYExccGUXKM77WbHkSbjz6RQMGfyunRqbornXZ3ETHUVZdrnSL",
  "key7": "2URd68CABsDw5LHWSctKv73X2eYdMm37z2DTbtX2oyLSQ3iTgnBTrxLPMh3zZ8q6oNBTx3QeF2XiCJkteUGzc4co",
  "key8": "5XBWMqWsGjBESsCUqP5ERUK63KRJvyuwuBt4YJd2UC22FTvdm6neFdtmNPLAMXR5uJJBkeGkmvcjzmVsFty4XVbT",
  "key9": "61PPFrefiwtRFZ7noBPAjd1oxvGg4B8uzQAzcwkxXs81cMHQyGxyJSifiJvumPwE8VfEGLRPvDh25a7Cqv4b4xG6",
  "key10": "21kyMeUv4uRaqS1ihhf93ewqi3hm7UJQBAUiATHfSSg1JRiH62okPJgQSbM9JARmaWMrdb59ixTETo812S4pJF6z",
  "key11": "2AP5QeUB4A34XVoXvFvw3y2N9i9iJeMwRFB1WcZR1RapA4F6X1uciCLJfTHd3zbXkXpafTZJW9DUhc8iMuLfM9xk",
  "key12": "65suXa4NvFu5DgdsrWBkyxqi2RrmkGAuT2Dg3sMzXgJ7BtHvgkPruVuAf87ZYhCh9NiD7CXPS1QunYugZTWtcGCM",
  "key13": "3QcXMk32Szs41wkiYg3EghMp6ZbVmWNrgxhdpXRM9UrS8hWgFEsctGC6j4ANPT9qZ3NPx29duCnfPL8eq72JHmM",
  "key14": "5bR59qU1t1goqqgzF7GhgNrFpX4sKr5MvRMtxXEo5erYViHK8drxkScjCTe9RLjhpUvi1bSMHB31ShxRobKqzFrU",
  "key15": "4po7X3Gj4o1QcudZab5D4tFBiDNKhoX6pNy9p6KDKsoP17CVuZjdCHhxf1oW6HU9mvcWKepetLvRq4umEJdYxXWh",
  "key16": "4oCnREzCUM49AGHyykGro4oScBBoFM1C3oj57oymKuA356s3zNPi5DEYRcpvZ8p2WjjBb6K9UccjR7e5szyaDKgN",
  "key17": "3LfnhLyKzEmoWBKqA3rySGeerL81X4BL8JeEZ7ZBRFznDyVEsoaLWHv9HKUP2fcxV7JHVmfu5Nr1oxvnHxhCQQwP",
  "key18": "2vpLTUMQKywTTCFTgiQLpGhV998UCQcX8HGdr1h48yAtTMXuz5gb2HLCDs227PpjV7HSTKmuC9TaGzadTMaomARh",
  "key19": "4qEJuJXs5cCzUPsaA4EMK9uaZKxCsZbGzY4WRtobSezYcSLRvk8GQHYN8epmB55cB2iCZEPa1otqzCrA9XK5Qo7a",
  "key20": "5m7GDAiJp1tmz6bDa3Y4nDvzQwmLLzNNp33Kaac6CabocyZriCT5HsKfq9fNeFESYJ2eBdfAneipjS4LE4TQC5QZ",
  "key21": "2bw8KtFRNqZk5guTJWWHHAqmjgaBaCCDm3TYQkZd9xYnZnyUhp9nzyJ6hwiryeU1n8vgCNaRBHCL8hZTfJ72oMyj",
  "key22": "4dRqAKTCycMQaj7yokQ57GEDZSmo6jssUXXy67tmFcRAZynY8bzMnuJG6qQuR4X61dhzPdLrGS6WcjBzEfQvN1Qs",
  "key23": "4BTzZxFcuYM8C7AE1NSfAr6zVWusD9PChwnyo3aEYSC4nR3dEPWNJVNGSUaHq3KsLPiMD3uEbRNZYji6YNHBcGW5",
  "key24": "3EWUsrKvhhqa12uFkgDSQQGUckbWzKWKwD6EHCwKWfrFEii5Na1rNosCULcvLLftKwYVuHR6Vw5YtWUyAPA453hi",
  "key25": "5SXAbSEyHciuhDNXMGtfiktcmX5maDdP9N3EQKj8ncpEWhVHaAemnsxXL87bUUydh2KoQZsoRVMR8brMiqh9g9tr",
  "key26": "RvM7onyxugGd8p6zt93qQqUrxhQvDJ85czBCWRKCPmFx2cXdSSs7UwYh6UY85xVHcVo795y9eKVCP28yNfMkn48",
  "key27": "2zZmoHuTK7zQTbW59S6Yof9Rn4UDJT698E2bZR1kPMSYZNA1PxvQdVU58uva4vgXE8a4dbniqzWxf5k3SSj52Q7c",
  "key28": "2WmStzCdiRhsmxGLPAEZJVJXoJWVVR9GfMDuC7o7qA265mCE1rsji3biStsvVjYmVFV1mc6d57KbAqDrKAbjU7bG",
  "key29": "2GhwF9nJvYKvrtSL2uRZjv5TH2ZRYeDkZ33gWMfGDizviVy5oUt832bHVmJGahiAkrptJdFHfEu4U9rAEiXHdhdM",
  "key30": "WGMppQ22id5V7JcajqoZMEGBTat2tvsrhTkb2Cef1UARgan58pFPPNdsEWcDMhscTx5EDMFRu2a2RswGisny7HF",
  "key31": "5ME1522mfyad8XkSQoqrgpUwgL8EuGhe7U4HpqF5nMTG9fwKbZFha3XReiyGB2P5UsGjkeqBQBPbBCbYbxZRtRdt",
  "key32": "56ZvceqhAnrv4pVYpDMj9CPEJSodyHE4UneEjLZSyffWvcEo12nGQRGmDWJEnrQedxxJ59jUw8vXpijbMK8o7uaP",
  "key33": "pxALvw3HzfdjxXJrbNba3W22WieWUY1v7pvJ6YunwjfAYcTcahxzVaVuFzzfsUFQhhHsLdn3sACKjmHCr35GqEr"
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

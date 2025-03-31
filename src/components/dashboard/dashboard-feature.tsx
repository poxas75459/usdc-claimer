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
    "49f6Y9TqucQWw6YzR8TzzGvV6deNzsM1xVpq7r3tym54wA6EG8HaFSAST5WmaUiYMc43NHG1HwoWX1zuXaNZkwod"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33TrreaAgMfMWroeYKuMWPfHmJNapQKMbH3KuLuYTWQ6TkDfyPxyaU8ydyvUimYsyogMc8pbFXTwnkieddjdG5w2",
  "key1": "3GycstpvvF9WKQodiRQW8NK6vhd4JrWExeDoXLfpXKoekxZDvd3bukzZyhoUmCiGQvf6DwPBU7uNQCxY3UfZCk6J",
  "key2": "4LHidRK9fNf8EYHxXsuQMwHNBGGiXGTRrJx9K7Dd42661DHi8zsDhnqSeREfToxEgpKUkfP63JVqe43KvHpPgR8H",
  "key3": "3D5e8o6oryTXojD4smqPvREkDAKAiAJZeNKmLuK7r9DXqzegS3U5cRC763Z6TzFy2EJmjm2thxXqHdbEx3LCkA4j",
  "key4": "3Ujtx4nxJswQqF6RfnXqBFigien2gim55hwmonp8YKYcUDfLpufJ4Qbk3VN1Q3VNzWyF8dR3sfqRtKLp7DwMpa8h",
  "key5": "4avdhLGJ8FJX6WDgyGbHfWLaTtu6B6hyH6eqPQadV6ecBuN4575eEER7Vv2fer3NZhYG3nHTB9MhmPQjiuE9zdLR",
  "key6": "4ysfpuzmcgE5ymwRdqpjv6e8mMsCxws8NGJffRF98pQ5fxsDfbgoUJSvUGdEBTstRn2vjdyw7qWXAhwLG9vMkUqv",
  "key7": "36EuG4vKBqNjqeLxPQ42hdAS2ri9PcXxKNFoB25ux5DELV8rFuM4D4nDwnveFEMQQwToJCrwF1VDFvRX7aC9Aoi3",
  "key8": "oSuw4QFrQozobp2RtcChG68PV8wpvAecdeqomZNDn6T3GGtemLsx1kPU2VBgFfLnF92QN8CAfGyW5TY8T1ZP65X",
  "key9": "2aQJdTHhijUz9ve1tiWycqrdzQmMG3JcvzB3ofHApnZvQRhx5kMoeNkBm8cwujqf1YbfuSfQc8R5xzQbkC21C6Py",
  "key10": "4MAbupQy5J3jy4QuG5oMZFWarYAKpyYFUFVdca2S6f1ZcbwCotcHknka4q8oxmmXotJrQivpUwht1CLwGPdT6DVn",
  "key11": "5MtJqQ9y3ZUVtgkYJBNQhsdze1NCTNoriSRQ7faHAACNGRJV2eXamae3w4QdTeqdQ16cQS6QwrY9HqZt4mEWjBFX",
  "key12": "3KJ688yWxt7kxJFFAnuaDREbZsyc8C2ypyirracSKmn3NLEnrYX85xZufDZK1janLeYszS2xjgeN7Ys5XJmiY68o",
  "key13": "3zVVctB6QEqc2Skxg9ErJ2zgtR6qkWSBe93L3K9RKieFT4sGgpKuCibffMT2ss2XYf1CryEYtAh2pe7WDnJzJays",
  "key14": "5v2UxpjbtY9afvkEPgfdqhsQgeaLnkyk7A7ByEig6s5YDo9UfApmW64GQAwpPbZCZ5AiE21Dtgdb6A64HyTB3od6",
  "key15": "5fmYeaUSqH4uTuQYmv83znToQBwGrZ9jYWNPJ97K9wUtWgbeuqY85eGxPnb9XFkLufcPWwQhAqWfR9vfsDZK7TNs",
  "key16": "4pobEoGNGXJ19YVPtMjGS1ZP8Qo5DZFrqpzHvChqWRVXna3bGSq3BHGcFe8XgFWSMvw32v3XE6MsY6BHi6hiTHnb",
  "key17": "2SzRgcNaZdQXupNGT2L6cP9hSK5C92VaENYL6nCmwX8rqxGUiyySM2JnX84mqGFcy32Ex78HvQE54ViMCuAXqHLB",
  "key18": "3XtNDN4NLGztfnaKbNSuVPDVSVPWFC7XySWiJypHX6T8YCkJfjx3FvoKTcWAACVpVf3dVHeCVnuJKXBi1pfd7it9",
  "key19": "4s8Bi4nUMT7mgKFBmQqBcu1GF38jhK767v5Ww5kht7Jc5qwqrX5RzcumxrAhDbuTY5Xco3T7dhSY8kJXH1gos6j6",
  "key20": "2Qah771nAcWC2fBvRR6ePhHKKtoakNpDqcSrGGcJFKyocvQBuNNabd1rfGZ7szDiDRvgXynkrHtzX6WQfBgasEtw",
  "key21": "41eav21TMjqU6dvSHgB1TNnewHw8exMfYD8nGUDmmzT5sXsk88DCmWaWjLuf4dcBfkR3b7PveFtZCveTwGUBkym",
  "key22": "29N5GPmzxJGwkhbnsWkme2aBU4wUqVJC1gEArFdwPJj2y47FyqK1qKXyxKbTmpAenFEidxvh85KcbYzsqBQ1To5z",
  "key23": "2mftWcztra1QSFHXUBB89HFq9s73Htabb4PXJxwuC5R8qWEu985hEf5n13EUvq4M5NThAHVc8JbnQMbmuBh5AhXz",
  "key24": "iXefcXAtK9KKDWbkDGrfLFM75nafo64UfAQoKCAhGMpY3jxTkfeqi2qJtj2LCzZGJ84mUWMTscYwNC6nzbatUXz",
  "key25": "5msg3J9m9jseLsriA6Gr6sxkek5rBY14SdPxmzP4xnNLm98GJBpGohweKRrC2HrLKbJQiaaEnT7uH8k2C9Mw2waD",
  "key26": "5WqDcmyjMUvWz2QnW6b1Yx1UHjih1L3KHtHZ9PYufZQ52Qxot4w8Svcz37z63KmbKicc4BJCyQjargaYA1RP5eb",
  "key27": "5VruzpCCqtebeCqmjpRL4EHYqpfbf7ybZfjtNTzcjhkzEQQJRTDrbyygKGhGkn7PH9XhTegBvJ2KvZbi16aUVMdT",
  "key28": "2tDfy2sLVZDnB3VUejvVeZnjGjAFFBgLhcPB2qHN2okh7C42Ls2DNKA9BKj2KMriYLUZw947cBsXo5S4gZFaEBNb"
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

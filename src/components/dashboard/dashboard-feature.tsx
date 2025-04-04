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
    "675GKPdPmLKbsZoctRftzVxmnz2ztRTAWcQZcwjtEn9Lj2mvP7ni83TAAcDt99im5yUpJmKYC7ybtbFXAxB1axYj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "671q38Zf93FbMarVad94vppR1tjygpLsKCTn2hCXdipMxd3BeYcaXwjzDBXs5Gx7TkoNd6Mm1kY1Dq2e758iY7LE",
  "key1": "T7cVkkwo7mahsPUHUdYFgnuBJqxgsJVPocfYarVAWsX8B7wN2NcYcrdtAJdEb2R1nECixsaghT2DCjen1XUiayW",
  "key2": "5sEr4ZqQNYy973G2bxyWGuYnCuKszCZMLxyfEJaeqVqvXYyfW7UiDexJSSkYzfVVTar4hQQEpeLUFkZuZMCou4SD",
  "key3": "4CnLrBuVFQuiAfCheAxAkrUXTW2Lbxh4QNrm8vouBF9TBwAjCJKc5uZ4BFAb6oNYWXo6SUsjLF1Q3ubBNz8a2cNj",
  "key4": "41dmizfzuH5LjMg1qYHo1WkYDVbcfFi65xLYakbVWp9mK78aLsYUb82f9NQQ7zrQUDocKdzRXN7csoct3tfcKGgs",
  "key5": "AeARDKiNqJXyZHHtMa9a2DJbxB5MRRsXE1gVnZvvAxXx6h3tPdxLF3d4XWvSgZExr2BWmv9ev9Lddba3vj1ZKNC",
  "key6": "3CgYTmXW3DE1ekLP5ivz613cKkJHy42aLAtPndWarPsjwvm5kSXKxCAPdSisLt81sFTxNkLEwgV8NnLjGNQDodHk",
  "key7": "57RpeSPZbu2zPNbzQcyNpap2PvMEmDVYQ1rmP9tdU71aCbATe5EGuvFiDpYMzj9Hq7XrJ5FUX6xBsJAKmNwoqwp8",
  "key8": "3pRCiw5YScR1yoedzGzGDx7Kqah3oGUoF1HdtydJcviUQbxcQN5hvhyvcUfsFUQN8WVRjzH1J84QFe2fu2Ts4hpE",
  "key9": "a786hbsxBgXXzMWKCayfRt9EgBW3GtgY48UdY3JstzXoU9BZAu4R2BdJfRv9Dzf83ZeWAJLdi3LfWDMknU7Sovz",
  "key10": "65ZBaSswxMiLGgDvAgu9t8LQqpm6ECGv4b9BEnwy7AMjuRA9dAEXHLpczx5rn6z6HZfjYJdoj3c3jRMFAVU6YBjp",
  "key11": "4a2m79ZQ4esuXoYvVfKjuAZXGCTXXoMwK6aqjUfXXgWe79UYEcrsSV2PtrpJV2i4LJPF3GLZw7xfNxgWN9Ea5W1J",
  "key12": "2EuiezFaZWAV5CPJiW8YbcPko5jndBKQuNgMiQZ9gCddK2sDKCPLuA9g7BmMpd2ExtSUD6XTFxpMfZZtTx7KXXxy",
  "key13": "5nVkcrYBkwJy882R75y6QB87VmTCZXFs9GMWU32goZLJxgDCjH8mLjgMzfxkq657cSySugKHqnCybMUjcKRUxkPv",
  "key14": "55WZp9tBk2QXZLQHLFhbuiUrNpBV5pCwabwcs9mZh3Ydrq2aFcVLpc4qem7xuxku9y78Cehr6M19JXKNZpdKUhLE",
  "key15": "mV6cKSGtCUJQZLawVHzTZNMkQ1HMAzdiENxD3M1RNArJETBRx5KT4yRaLfnaQW6vct5SS8kHMeBo8rsGa5hoX1e",
  "key16": "hYXuNdx3f6vcmLcy8CsemCAMefigLg8WqmoPupnsR87SQ49G7eKUvtN8x2bD7oKwymvdH8TC1BXfa9LSR3W8cVq",
  "key17": "3GhtLm6WvoQLrEpWxbZp87FfSayAPC4mf55RAP8qRXUxoUtGRkHYuguCm9QpakiS1RDUeTHVEgsxxHMJVTLB5TeW",
  "key18": "4HFb1tPi11kVMAsbEhQ1PH11tVr2WNHXQ1J6qDjXzj4LNi6yxyVwUQFYAvgzpfeRmFmpzanfpFVtVNosjNAMahZw",
  "key19": "2KumVrBYPq7La5vCQJN2bbnoaSarzNN24DtvVSxk6JnHQqtAYay4gXDDtfm9AU7ZCr8YhEVJ7qH6hL9T8iQ5dYU4",
  "key20": "4qpPBfaykriHBXRKasoVJh74w4rJFoqEn6C6NCVLPjonLGC4jMqugCsam2KK2cn58RQ8VphipwcsG5meo5huv51V",
  "key21": "3pNSGFVaNS8mVdSkhoALACNgFLacnudwvwKMNBjJEmTCw6W3PQhq4J1gqcLRUNx5Gs9rB7pTjrQ3JCpFT7bg4dV8",
  "key22": "5V41LyDpJKWixHsKWXaRVhm1qRQvqmkbTGxpzmL1WZSfQZGBPcDuwgA8XSa6mTPdF3eURdKexFHEh3pMF6p723t9",
  "key23": "5U3Y1CF8i16hdCoQkQ6hKC3XYk5aDaGkgwfkeuJ97UhbkUsjWH9mmt6hgN11gVGeT9SHJHXp8uDV8Nok38wbMQT",
  "key24": "5A7vaonWtrX2WErcngXv3wWD6VrqhWP7635TVxGAGXvhfW4Fqay9tMnTPMPF5RLUmASD2PHoeA14EVSakfWDr6S5",
  "key25": "TdXBSASCgRrhhxTu6YZGRTEC1PgDq2EUi7Qr47AZc7zvCMar61mJffWy4JQF24fGPbDBEt5cCxcwXNgQrb4nK6S",
  "key26": "2y4AtXCKnDRGkKs6rrJhJ4PPi9LVLcdPNbTUKaG6fauffYZiRfGxY7t3X35Jjxs92vGbaEinka3NjE5mDfu926y9"
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

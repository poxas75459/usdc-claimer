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
    "pD466aS58xmK3fb4vKJGLNnZSoBhwThbD4Lme1C1DrQdKEHEDDhhg8p72LQVxviDwssxze7Af7GSweag7fgqLGr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c7ifqKf3juLhQMBdQvvDL9KHAXdLiC8n8un1s6cZ9PRQKrqcarcBecm8Zda91AyJFA7kxLs1eDFETfheSPe2EDG",
  "key1": "252GLr86UexqJDbSStw2ZEUXcq9y2X12Amobq2BPXUoCj4bg6JwQdvTAz7fUFuzio7HWeEzpirbMQkpPWSe5ftwm",
  "key2": "5dnLnQPCZfvh7TnFKTGP5EW11uhyufKPPUyK2BwujXULEcYzYh5ariiEm8PaWBgs8WtJxhudoF2JsQEDQiDwVEJm",
  "key3": "xVtzA4UzsDGC3nziPuWXAEVsMMw2HZCHrBr8z9W4rT6d2A6ii5AryojHxaks7aZBc9xduhJTyyVTFji43v1sNy2",
  "key4": "5tRbm8nnjyi7TWUZhhbbME1bfEVep5Ebpjxs1vpGx7yghP3D16e2Z4KUP9E6Bv7Yszncc86idpxT6cVfUk2VCJZg",
  "key5": "fj6NMsCPbWDi2y5ivMkBg3SGpQqy2Tg6Pexy97CD9dRVzR91HQUm282qWfF3Zo1jQJLyMpZPqzbdeayZCGfcM8r",
  "key6": "2weei7HV5KNLSB5xTntcf1YhasAu4f5moWjiB3fnHnfML23CeKn64xoewQq1oWsQngcw1EfQrvRQGKWWtx2AiMVJ",
  "key7": "2iAXAKrqbUcLUKGT9ZFMPKdewQNE5s1jGZq1xYWXJRgkUPrrtAiipe2yQYxKUJgrGp7iGJcgfzCmNEhVj5NSUFTW",
  "key8": "2i5kkE1qM6hzqKV7du6jzMMhef1jAPCipjJj7PCdHjRGQiQiob6N1HuY6vVfWyCJ8byEcuKKshMk34BLHZArDyta",
  "key9": "5sJeimX3gsgrb4X3z8ibdSZ8kzG3Pn9WYjTCbEwssCnCSVx8ebrC9ysUPPTXfowyQsqqJxUu933iYb2f3rujdXzq",
  "key10": "hBFBKDUDtDKdVRRQ8FTHASwuZzMhF5GiJYh1tse2CT1sdLFs12AxmhTP1vMyJ1t94XGk2TCLk7TqqeHg2N37FpX",
  "key11": "QF6VNoUibqi3VcnbQD8cS8W8nqeuEG2SwT8nKL311XcVok3rN2sXuDaCvjmRRRmk7qQLzBYkqSBPcz2GBf8kakS",
  "key12": "5LAwoSR4w6fgaVdYRut2uzpZs29Jf62gjuLsEoZDD8ubXUFKLULPsDWAkDvQpM5JpnyQ9bnyTCZQo1kFAWPyY1sw",
  "key13": "58NLPHNLisE1nBKQxu1dG37g4Dpcembk4Vn3hqqyutPYyWw7dN8Mhn5tEw4DE7N4y1vjYU6Hs72ikkNQYXhPMVrF",
  "key14": "5XU8qgZqMn4yw8VQjywSiFnMVGhm8mZCGFetMSoSF1j7NFMJPnBU2dxuceYw6qSM9y3g3bKc5dkk3Fsvguvi4a3",
  "key15": "2JyCowHfR79NL73db9KJLbSqPBTRkfo8KigGK7QbhUP568w4BLqcB2nZdKoy33hNfMLjWHenTbG9tPhFQMyKnvwc",
  "key16": "4PJfyvQ6bbjT9WfhjBKknmZ3Mq6pBfucp8Uw9j6T2w54YbvfvEV4sZvfWxVxvWGtXvVGHNcwds3wYhBr8UCKW6QU",
  "key17": "3gxBeNqqdhyvj5mFhmzztbWo8nuuy6LHnFBAHKR5iHkSEVPaP7nkDvgEeChc7DVR5oW42hJJejJnA68AEVJfvqet",
  "key18": "n3LqcE2AVu7FqBs7xUQBEmiDRP7mLmCtGsHoRPXsLdYkaVv48PMYKxAb5rhi4LVAR93iABpKjgmFUgC5Yn5JnCC",
  "key19": "3Z1QXFoFrqEERgB6cPLL6usuwqBQb8QvH1X48kzP4pQQrQSjr7rz7HGur3VdASYcyx149wCLzDbaURZEJsWq6Gvi",
  "key20": "2aKnYW51aAiiLjZ53nVV3TV92JGp1NGNHfJdeJftHdkgBt9bhhUwG1DMwFXaCDKdWnLdzyrD48YP5VzZhe4W8q8E",
  "key21": "5P7wXwhPuK7hxa57ajkZGeJm24GkdB2wf6azkUs2aVFBXoBpJ9wMdrJaRtKnkEAkpLQFbf1k9iEruwzWGkVKeC3j",
  "key22": "3aLaM1CATynG35PcovMVCVNYkYW4vazrmc8NbsDbuhK2hVyX72T2rzXKdWmjSCmf8vwfS4BHFD6MDvnNKz5hVktW",
  "key23": "5XZcVyQ4zMow2oDPv96Ta4bUmcBzy83wRuiCJRZwN7SKu29peud6VrzAmunU6kxUWW3ideZQqm9ZdLbWoPwdLCGh",
  "key24": "3qp6Wk6N31wvXuRocJ6hzmT2bNJ4Dj98bL2sB61DgqJU87fymSpQvytnucQ3wRrxwV3JjZB8knxQCsXJPusvdoeE",
  "key25": "5EZGx7fywVFJZ92Rnix4691qeVUZ13yAncHxQksERZdtHZfMabfPqkeDHwgKFMWfWjiMpf6ZvfVqzH9pTXEvx4pH",
  "key26": "1EkBdvvjWsFq6nVKT6HYRA3jnu6rA6118nVA4GBGPTC72Ur5k1cyAzGiK958EyeajadEnvHRDk1rBnKjKNtczS8",
  "key27": "UGh4vVRfNqDAjCnvN88jqoQMa9mfL3erRCVNKF1sUtEEAi4z6MhqAFmWZoK6ejVXHMc6MKQhQ2V3W4PyDE9u69B",
  "key28": "vC74nQtan6NeDAhX9e6N3J5jxHokqA8NbiS7J53kji5Dc7TrfLeSYkMzs6RW4CzCBXsYh5pzDCcY3B8giVo6qkZ",
  "key29": "2jqhw1bTGW1dGECUVxiHmra1CSWyZHEYUodrwF1AAhP7QeZxEM2WYiaNpnwwGRzdEjSXcdodZfm5uyGhrcX17GNc",
  "key30": "4GZpGgNuLunoy2ofrER8iAfEw9TDC3vmP5ZPeB48UpF9deWoPhNfAtEnYWoeY54DyqWkWQZocthpeQXTnB8TGJb9",
  "key31": "3minmoLWSXA5rRmSKk2DJbKbYmJw7x5qGpwCp5roCq8CrxHTY427p6otPPg49ncxjJwNnU32SsUsSKKbz8CyYrkW",
  "key32": "2g5ocwmGYeZDbDXEYCdiemJFDzVqrTBvQMzHowiXyZWMw7eZxwKsrMATqGwDaKwdESUsvQ4f5RZPUrmX3xz4cLwX"
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

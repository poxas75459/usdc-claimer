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
    "58oetBtbkVY17DSsEFSSYqSL1jEzmxqYHHqicQGhkRiSRw7QwwubA8JcJZJKybJTFgJvv396kRxz7riymqJAXGJZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67ivs43oPCFgn7stdrReHJJ7XmXJB5cJ6CckscNcg9BaupEFN2Wy3W9WgGX8YiPpsprzL9dNDGjU6E5BsbekwNMR",
  "key1": "VPLeyQ8pUqeph48agexbTs3775xegPu2QfenU5pK4XNSB9EVk7W3i5Es7dggRsQVq9BPJ81aS9qJP6CcAoN3XT1",
  "key2": "2QZ7VxiibSdrwgPzR9TE8zd5cC5D4xmMdjrpqj5E1SRWLuAyTCtELfEVA5bHBixUZ7eSNuBhhzY9FyV2fh7M3zYt",
  "key3": "J3w75GqB8KXf1FXd97wnCAyxhVpaCoKo95z8zBMr6duewf9sYmVUWsKaDY7tVqmGNqkKHAhRBavt2oaFoL6QqPQ",
  "key4": "AM5gYUdNNBhJjfmRf4JVyWhe1KnF3iuGVbU5sKcdwhDGyrcGYgjbJLNFuwQTaqpJrRBVpfUggrrvKJnUNhaEkDD",
  "key5": "3w8wYhGqQ7vWnrZYNJNmVGAdBgdyzhC3TAH5Cio8UjfqoJPdg5PxK7qRf39xUaXT59eM2P58C5S7MgLkvxvHv6hi",
  "key6": "sT1bE1B2oEskRBnVqGv7pptQDkJAhksLgp9QTV6L76KgEFmJ5P3cU9kHvGiLaX3nLXnRCgWkfw8wjBCPGfKuYkd",
  "key7": "5J79pFF1fuY1gEvqXuxKXHTXAKCkex17BgZ3mbWU1BDrMhTr2vGHVjAfHmdncwGXCsvfox1uoBG9eJMULMLnTPsh",
  "key8": "33sKmUFNqs5HFrBsyZo3V1aiXgX6xMW9CsS1iFsVbYJ4kuWGAqHXAATzFK1ZG3FC5Yf31NTJQunyr1mboyYWCYJw",
  "key9": "2iU9FMEZC6HhXhAwCQE39SNrmhFGjoMXzvWYepZY81sHe1KJGWysNugUkUqWEXkNGtEtZZMBAC3J1SygDQBo8eCi",
  "key10": "3Dn1gtEHPvBMsxCsRyXm35oiDyVf49S3dbwxxKssqRgXzVuP5N2NhE5ThtV3vS4kwhri35opx81rL7ray95KrRVF",
  "key11": "4kjZE3m2NGKrCZV76A2LbQ2LXP17CqEPWD7HDC9nipPfhWvSZfdUNoxn5KKQRpRQ3E44pQzhxD7wxEKsQZjuuaCy",
  "key12": "5mEgDaAhgirBe9htPnsHbM2zHujL61v7Z9T9nnYetrQin5HDT5w81PyFsER69a4ReEFTXrik8b2EETUHmmNJpK7w",
  "key13": "3mpVuKM8s9puXwbnwdg3QzCXBWDtWFoFqhVQKGNzpsW7rBVg9uNqFw1rMjYtjKR9WbCc1bT9MESK6KhYjT4zohye",
  "key14": "2ep4Usof1HfuzRmhBnLaRD1A6ggbokLjrVQ5omv34x2PX2dPxirMNRCe6N8cuMSZ36YETyN3UZgj9oUfwuHer8g9",
  "key15": "2CuHx25e7cc2YeS6EPKfdg5YqWGE1ZxuwCvnecVj15Yu9hr5jBPAEBxmFguVA6WrW5Jr1Zbn6zzveKieHbWSeafP",
  "key16": "3JEAVAQxdBhBykNxoGUC8NNnNFNFewuF5Y5g2s16Tx49SZgrES4gx6piGP8A3DaN7TkLPHFJxQMs5ZJjLVrYNUqA",
  "key17": "3Pd74GB8PAZHVwocPHQWinFmJnQBTU2rEk2dJWcdvEyaqhi2n2XMLwQNivaGMD5Hwt1ESAr8cicxoMyKuGYtofxy",
  "key18": "4Z4MnE9hLkdfFGnxpJfJzMNVDsbUkqPDN83qihxWxsC2Gqgr2ztBQA6qYkGrZ5aNydcfkY68dk5uYNkqXtarBVSE",
  "key19": "y32pnM6RL4HUPpZ9AFQxahhrujiozkqa6mDb8D6NjrGhzctueE5kosv9L1xPpU5x8zdqYHB9p9ei1QRXow89N9j",
  "key20": "4kCSDMC2FuRBijtUXXkXeYBPczHS2GQYpXXZXAbEpFPmzp6eXddXrhLtHqfTtpNo2rb7JC9jkZVq7EiTSgeB7w94",
  "key21": "4X536tfpuGAGfxmJSf4cmS7LqJRQEg8oHUmNHM8Fvo7YgZ9ZtiqyYmiQcYkHpD81tHHGX9QwBAZq4mqxvenpjB3w",
  "key22": "3sQ2SZppUYwRvJniEMEUVB1Ucd6dqGLGXtMxx7HwVVV2e2B6HMgaHuVhtEQZ62Mu6uRe5ZzHNWxZrMJFQtj9Hdcz",
  "key23": "433o48oqj2hJht9AB8M1rZUhxSZ4ZYaCWBP5Lozc7dyZLyva42gLyFYnncRFn7vnDndwJfqCHhhohjfhFTzHkduY",
  "key24": "4juBEt5CDm52SsC4LGh9CfyMFFxNkyZ7DwY9XermRMySnpfpE5PwCGiKuafKVcSYpozuDYHNBTRDVLFNSKZm77sT",
  "key25": "T8EK1eJLhoJwwjZJmi2txQt6HwULDRow7oD6nnqnKjn5mE54EHdN7zuCQHaTynQ3WvTQVaHzr2LwxETnL6b17Jo",
  "key26": "4SvBQfFvDrmPvFf4MJHrcaJk6wg22L4Tr9mH21z2u7rERrtp7ErfNWJWrgdiZg6L71ECNB8aW87NsVGVD1sbGwVw",
  "key27": "5Fd5tfz417hm9G6FjmBgvGi2uKuXsEUaw5BWyjeMEQMw6rEV5uJ3bFYzY4hGL2JZNoMEsDxWJVbAGxpXC6MWamci",
  "key28": "4cvPQ3VW3u9oGRJbKavTm74UVZW5JXejm5rc5Z7LkGj5WSdXj9bsoeQpHP7jgdT4MGpUGh46tqkDjp417WRucoGi",
  "key29": "3zm9JFBk4nuA5z6tYcyVuCBDVRbdLFpBH46rcN2XtUy2ST3EeL5tucjV2CzaAu5Zvb4TZYeNQRazXMiKoHZTxoks",
  "key30": "3Wu4izcxuSNkHP52X3AXTTvunF2dBbMFEq1UEV6TSqYuMXRKKK2ji4VqjTwJevNJ72RfzhNQdyT5bdCex1CiEoSi",
  "key31": "2Y4dC5juabB7KuHTnsAfnEjAtYGK48AdTzUR1bj9uoFnJz7iLhPZrcdT8BPqBcVpSxbMZ1cF6qQasaRCZMWKg6fs",
  "key32": "5cLezrHjzGGeA1dRQh5bdzb6FmbiPjgSNudTqKKFqPnbWXewGyM7FGhorNgottwPE3PN5ketoJ9UvoqymQP7NNaZ",
  "key33": "46yERf794FFPXYUrAEGKnvdNzY7KtKKnPKoEgwAhUEmUWFPm7aED82bZ4PBXaCAfuRTABrUusa6duHAj2UPkaPaH"
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

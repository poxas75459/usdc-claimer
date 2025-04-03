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
    "5NjCy1xZQ2m7aJhUuqiyWVsHh68GQGc5LXjy7F36VtMSUH6Uno2DiHEbhiyP5dsyC6p5HqCMZtsEJCrNAcbzEpkr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ErUtbYynGjMWsjpTx1RyoXLtHXuerMzEBx9sLuU8anERzKpNxrv2fSocEZZM4wxQ6wVyFJRqKh3xofhQMPKizMt",
  "key1": "34aLbAm9c1SanphWs2cU1mNxAEBqYpqkFCoFdcJCaBrm22XpeBKQJaP8WHEjQ2iPWB9BMbVQk7wNZaWe9MJhbogy",
  "key2": "9c19hhHaDjSgz2gAE7zN7BXFaKHa5rZYfecTjpLrqBQgFoVHHrbDfUJgKCtioZctS1uLTKpVAE1h2KFRPjR7Yda",
  "key3": "4T6Bo4LmDMR3GgJ5QrqerNtefLEdrGVWfmVpQWF431FUcCgzc2XV997PENzo4ajFba7rXxGAnbgmWb3zbriP2gTv",
  "key4": "5RCgmK5tF5fXTKk4GDih2UaHWWMp71qSYERRYqEagT7BNyjHaHsQZ5GQeUJzcgr2XysTWFBFCTqY1YJAVct3ajoV",
  "key5": "2BVspfo4o2P91frCoDrUrRcNRvTFuXvTkL56ngUUzd9bAYi3o6Bz1oqb7ohtGitPtUacTSGffSLEZ67eGLDNBn8L",
  "key6": "2CU8vhe95FN9drU6cXCxtfSHBZJajL2wPGFtziUdbLaLy4UXJJrzRVLEoNzTwh2Sm1pn7BoSs9ZDn8VUZSyqmrMd",
  "key7": "4ehTtyeoTsyn4A5JvfjA4QqqiNs6inEP8nYuZCsjkMM7G3B93Ro279Bqs5jrngesMCDh9jTkv8iBebFYqgLux8yw",
  "key8": "JFYcBq2rme7yEXXfLaSwC7mcgWaZkeqYrc6tG4ZcSnnrrKweBdh1e7s12ojezyufooEEMGWnakZA9EhTaHXFE4i",
  "key9": "4TJm5zLT1zM8DHpPRMitUuBdMn3KjXJSsgJqJwbrKDijPHLcmNMYkbXQaxRK5ynqCXbXPhFJNVLYFvW2VTT1KVHJ",
  "key10": "4RBiWHPDs1QJiAubUYNfTJss7XWjHsQdpciqoHWRW3dqty7dfwyeiCckXWoLgMYgQSpiTFgW4mjHBJTdhzCLFenu",
  "key11": "2JrRUZMHugHfXZqMKq7rWsMFVreBUW3AnNMTis1d4VLbA8m2D5VUjB2dEY1x9XE9EnT3LLKTxPTy7387bpYTyWLe",
  "key12": "3ac6kDrL6Wg1T2AeA16jaCXhoEYNFBJju36dqWKCqWQoPs6DdZbdQULa3fY28RDq8NSRUEeo8fYxZRMt4oaXJBd7",
  "key13": "534guMaXHUWoBaVKUdQcRZkt97FznRpurARf97wZMuBs4YhK6nAoVHYToRYW5PfgrQRj5iVDfKXu83fG5VUEb7Eg",
  "key14": "5HDh1dTHgN9LyHx4TjDPGRvEXY4o96MBMMSc4wvBBtnPzV1TpR1jmpBPDZmNSuM7RxuUPb7ipEEG15CvZnPcQA4p",
  "key15": "281kRwq18jYbAX9YS1H5w71kchMxK6VVUfEXzSHfULKPqEQTqdc6qsJuWi3dwkjpEvCLrSFULzZv4EifPeoJVu3R",
  "key16": "5QNCnnes24hHWFy67aednR7Vqe63UzSpoY2gMNfcCCErn3XQZvd5KD7aiicWHgVYzrUz8raTF8bPiTDTvZ5KxJQ3",
  "key17": "4QSqQLJ2EVQLkbvkijW9Enx2yKGu5qKsJCHap266GhedUutKdhvnqhQRZwJ5W8pw2y4fUdRpk7g4SRT9YqZVgH3S",
  "key18": "37aJhbaLZnBrXGojXVtpw8LiCGX7WP4HRXFj85bykZshHDF4EpmHzFaNek6QDFHA6bqrWRYP2zo6SH8PKrphhcEb",
  "key19": "2Rs4ELUy7ZNrbr2dzKMmVe5maDbm5djx1bTiUc64B2Hvps27dPdeXrSEfRtLHuNZ1aK4uxkZE77DXbYYHvnWcyzk",
  "key20": "T5oWG5JmrSr8SK3BuNyhKSD8EY3eFk3df4HWgNcBYKzeHiLZCKL1Deo9Zfv2uVLcaFoMP6Np3NB6oQiDgumK2iN",
  "key21": "5K6FznavT6C3YebZknMABM5MafuVpxa5n9uJHzMdveqLAgBWyRCaruznWttyfrv8qT5rJ3udUyiYZxVwxAd8F4GD",
  "key22": "3ASSV7XmpeRTuCMYDAXMaLdhwFMbwaAozhzPbQJLEUmFTW6T8XQsMXNnpzgaSUGacfrAngzi3GumdiWKtbtvQKe5",
  "key23": "3ST7AjBUabcuKq4j9CoJKQzBBCz3VY9ASztdoDhT4kMhkcWPxkvXu2PE8e7Dzw8EQfY4G7iaitVxDLcJV38uXHdY",
  "key24": "3zSLqWTrqN8chATJ1ABc8oygrBqN1CB3sVUsxkLFaqwMHSgAMT84uobRRrpZkrFMWGoMd5qKdgXT3AyZBXTadAbZ",
  "key25": "3wWzBwss2XNUvVTF2azbLSy3jP2nTWjyZoz1GBo2cAQinktgTQG6zbZ7CZtBfdEzyc9MWS6zHgMJLRvJv4E98swY",
  "key26": "BDvpGAd6vcZNECqNY1Gg7fAvfrnNkzJe2paPqW6pG6JQQMBVXFC7LbqdSsJ7Kdda1sf45hhXQhxbcYsWn6s6Chm",
  "key27": "2W3n8G2iYEn1Gs5esKuaW6rDvyTYQJE66F1r8pT6ojR5CCaMFYrSMfsfqX6mguX1gCEkkTTSt8awDS7ZRVmsaonc",
  "key28": "BPRLddGaoVCBjzF68TU1qxUKeTHoWkDijMPrpueroRHBR5MsjGwCvnAY7dqVUYxxaZW2EBRudqhKvEoLhdoo6ME",
  "key29": "51Xhn7ZvJKZQsuhEGMEGswG4W3VtCb66Mdsc6irPAVDQv9Vd8irQbHzPF53TN4S1z14G7PA4BwKxPSHgjtDGNYz8",
  "key30": "62CUmwmuiAiu9szg6FdZaN2nHSoCo9v7pTDboVr3ugBXco7y6bsSQ3pCJz5LgWBNCwVXrVrnfQk5HL4bwumKB5Zb",
  "key31": "21NNR7tvABMr5TpJVRUkJiqsEeDWJ1hfNvVrrHkSJwBKnt6wjaqpgVjLtctrkEefiqYDLQHsNbMvbmbV74p2ZKTg",
  "key32": "5d7iYM45kr3G2XrwX6aYqonCGWuSn7M1wgViLtDtycjsSw7ADc347qkDk1zS9iwvgV7mNjJgpo9K7gTt6VvbxCHA",
  "key33": "3Th2SxPas45MViCPkqkuNJ5DRAAHpXutVkjA5cbE52MT4jamtFgQxsTNPwCzn5Xb5Wv3gUNpLRDBMczVAbRUK4ba",
  "key34": "wvo1i3QFjvXwkn4Gto8fCAezzJVEHvsXofnGW4nrWNcW3KjCv2jDDYLjCf62nsSzYmpZYFuyXQFsRJT51D9PHkz"
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

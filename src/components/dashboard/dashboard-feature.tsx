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
    "2v44dVu8GZR4AEUYzDpmNA1mb1sGexaxby6Qhd9YxeKiuwJvZq4VG2kxiA6EyuQLTptV314sciJULtfhwLzupDgE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39gVNjWkBecsvrw3sfoTpkRCmU7j36p2HLGNF2GjUVL4Bmh9o79YQizYGkSaerbeL4qxzANeStQVg1rxBFMU2nW6",
  "key1": "5wyrdDGqhS8gyrKpmJhcU56F858X1t18GsW6KtFakD3vWFH9uQdRDKRocBTX6zxcawVQyzPH2WemdiPH5BGvk3g1",
  "key2": "4uksRqzTMdKRcfxjDwHnmVqNkztww3nqfJwuuYRUGsomMebwQ9CYjsJdy6bmxonZcSie5tCAk8FLzpt3uwq7NBUd",
  "key3": "3C3oB3NnBuf1gepzXnAAWETGTH86jTQXUDxtA73ZvKjZq6QXKP9uzBJd98MMPs5rvhhaJK999QHqGGMP5a4WEz4r",
  "key4": "3u2BZEoHsBs4dWACfQNCYeU8E1566UL7z9mc5qcqCzoVa1poMoZsjSUgMLww7sHC5NCkeiBaky1r71gnsV3QALqw",
  "key5": "2AZZQvGkzc8jHVLt1nNr7yBjWK9yZn9XFFLoi4j1d1mfZEWhuEZAUNwg28PCQUdRfg6wKqF1RnhJDX47ZLZvcYpF",
  "key6": "rU3dUKN41XKokf5XyMFMQLYrR8XFZii2DDkKdhX968gKTQoBnfatW9UfQrcR4DDyTz58A5MFACghQ3QWqG6Mqp2",
  "key7": "2hwbb8gkzhcMaPkUgu6LoQB75m45bwFNoz9afQYdCyWvncRWuAp6h58s1y7p4nS7BQRxqAkfkD8rjuAbt8x4o4Qz",
  "key8": "3wAadk6sJ8nwesBs55KPQ7YvS31iErZh2ZXCY7U7hvYvXZVMf1VBtfTJeMD33g4jUQuuQoAxf96UfdNcnNHck8EF",
  "key9": "26BjDBsbnJ3K52ToBmvakd7hcAugTvcsZ9VpELisNVKij5F3XCCGFUY85Hw6AntzTedDFrsgk9wwEm79LDimbBa3",
  "key10": "kzQbt98rgNjiZgPKh4F2t1ZYRt4LWLuymhRkCn3TtiZn9WVX3p94pbu47QwmdhEwWNLq945nSL8Fwfm424FDJaW",
  "key11": "2gUfP5ZRGqN8fWGg4ahFp332U6Rvnsgsae8jv6u5JA1ktgFP2r7Z53Th95pzuCuukPJNxn1YZdCJvff7XM4q9vMy",
  "key12": "4xvUp4JtRLXxoHJVHbnKYXYCHwnaFSLDLqEtesYuraMJ1gN7x5uJX5skojpkqA8hx7amLdVfphx85gzWmCDmwk8u",
  "key13": "2xjbXzA14Eijen8dEB42VX9ZTd3uxEmvEg6E1EyzdVtA9iY8QaaJAYDos28ZHd6TNWSRNtjCbY23ZnoKFiRnawMF",
  "key14": "2G8kTpMk71c4hRiamkb9KPGQz9mgKZoXZadkKhFbaxBhqwTZxe79e2nG521SMJPh4bZ3cz8UeX7ZbJqzhnzt9kLU",
  "key15": "2nLL1T1M6gLAhq8cVsB9TsngiLkK7aUHpLV8VgvoUZ8XA44tyZxtcA6uuA47NT3uoNThHgxNtrLhfjQRCiWUnPaM",
  "key16": "2HQ5VHQy7piHKz7EDAUP6T44fjNEd6P93Kg5Pg8PGKrqFD9jD4eyren8QGSpTtbGsarxEXoXF4g51ua7GoimL8Yt",
  "key17": "3cbQyJ4gd3UP1TwquNzCZ5sR189vhKMhbmyUC94m6RxGJnXcfrEKCKhkdgUhrKJafR3dGvqqt4P7jNp3Up8SCj4Z",
  "key18": "579mz5mecbzenFvh5M1L8P6WdnjS8mQRSBR8t4sG6z1RN3CHq1BQwUJv8wh6DaYR1nuxbU4eUSiJP7N2s7MYVESi",
  "key19": "2nbrXA9Kp1xFwWoQvVGDZUp1eBAeuFmcno1NnZnfXfCm13vuszYWyK9iEQAzpTZmcuMHsWe8mpsZWUP7FZk1DnSw",
  "key20": "4ADoyfcJyokXc2L6GrdChrqaXhY84V3VZwrdwpQSmHZ8rgvKgv6MinHKQzvKAbi6JKP34Qh8A13YFh1FvQxqSs6V",
  "key21": "49YGmRFtvqzEFdA8Mnb9UUhcRfdbQs3PDBberEF9o4BysqLTWfhzQ2dj3Yd1oBhTEcZgQv7tzbfshv89euUdkYpU",
  "key22": "PHLjd7UrUQBEcK8N69oACAgq339NtPWgrm1ETDWXzUJRwpUVeSqtSmsqLCZbbT6dPuGV7CcT6vRME45HuAueCkH",
  "key23": "4SFMK5dJyBEmB8C214DRKfYTHjC1mWsEnbK4e7y8ei1Y8zayEED3c3EEJis4HqzjNFSMKXLAKHoYCRubpcP6PEek",
  "key24": "5dXtEUj4mKz3XLCqv7c3yboyeaeMGAE2bUnZDeXpu55PQMDKLQFbRk4JRYnih6gffoN1jmv3i8sHNW3uZ8icSD8F",
  "key25": "2bFfrP1GFZgvrsqdhoTMWDX3mNYKeTMPHKfztjLneZhNWY1XfTgA6cLWguqHerYRyqUARPAZqLPnXarjZCzXHFtw",
  "key26": "3VFi6EFngd8tMoM6z24ETrFZubUuCjTDZP2pHKuM3evZkgUzG5y4r47cGXVTihGv2KxGSqvdhobpnMowM1TzM9m3",
  "key27": "4frWbjDMaMjmmniXAcYk6bAWrPw8XPKtC9nMKiQAmMdkTWMaLRG8ddY8oihXTMotPCRWbXSfs5fAoDkK5e2TBiZ4",
  "key28": "2RTc7m5rxAZD6ThQMfPYAMu26GzG3EsacpY9GVzzFJfUu1DbKt2iFJpQFHj3bNePqTNEGc7wZFaruDvhW3APKtbD",
  "key29": "4YSwjaTguHy23VUyU7eBVYdbecgPU4yMYN1NHArzQKFyTQH2AB5tpPPcmzfNGSNerSfQbjtaBG3jYd1d2y7CRS5z",
  "key30": "3wQkvTjYR5q3paNtN5sgD8wR2tdwSUKHUyPuAHkWuPBs6xcrCE7spev4ENevkRnaqRkYT7yauhoPrbNsLjZRJ3DX",
  "key31": "SgcKx8DVAU6TbeNS9Hdxi1PTcJCixkBtjBSFoaWo57kDoxaf56bHuiBXTav4uzJhKEQRYEm6ZfyAn1EjiMA5aRW",
  "key32": "2BYZWcA1hRD7KVMfHH5mZdVSanvTNFgYsBvUPHpbQ5zbReYq4oNjbtVoy6nXCfDsGtbzm2CzKBNFG36LWmo87ojK",
  "key33": "4DEFas5fyj4DmzF4nrHzDo4wZdnmQo4SeVvjZMKiTedJ1sgyGyU2x5Qk76akHichQnyCmTfn3hTKCcHTTMNA31ax",
  "key34": "49ir1jXwxf5huq4KBzNNkdrgYF6j77z3zmmXyTXuBM2ExE7HxaGL9UWmpNirNpjHQU17eWAx3YZBNeSGz33EiDJi",
  "key35": "4R5eWC4mcCmWSUvEe76BfmTvmxacD644YH3V3RWmcRyBTBQERSPcf2Nv1Tn7qMvaRxqDSsrS6a7eTRXibLgmc1Ga",
  "key36": "3WGvdmUPYRE8KwDebNquTtCwraR672Z5dh4NhhPdHi4T3jiHqC4yyB69cKfrsmL8bbPgJHvaBWXqziEKex1j6Naj"
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

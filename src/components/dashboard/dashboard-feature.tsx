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
    "2zSfit2HQ6qhen2qQMJQ6pthHZFUVMjyK4hC8HBLcQdWnke45WtQx423Y5zc9cUub7xCdatBd4WJHe3XP8n9JrTM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nKjZAVD8ysyu798Aw6Cha1oy2FPNCBmELpMRfpHFw72NuBtVYr6WBTE73JLd4crLfu9RgLSMz2BLM57GVcgKaeW",
  "key1": "32cNYg3f1QvjQQR5QJFk1oRUPeJkAkqFZUswawvKRgg96kbzoVtLVrpajvbGvnTfh7qPjuVT6arRmD52h2aADLVr",
  "key2": "2HfR4JjBsWVkq1boEBANfPYKhtiMXJNyBsbbXTQNd8D5rBKwG7gZdhK93dXzDyxqpWfDa6tHKtawZcvWqwdDaesY",
  "key3": "4u3v9bz4YWbpX3uYga4YqScD251cEJEXUhR6RVgWH3c2WV2affAKGeK7b1q6ngJQjTd1DziG32hGBGydMX8girFc",
  "key4": "3mk6u4ypbyag1oDbjaXeBi2FNYbS1k4XD1ppYjFYw1NMjERpy4nv1coV279PUv8thz5Zx4Cgz9AU4BqEH7LAjBjc",
  "key5": "Sf4kvawj69cH1SFo3rkVWbSLr6X8uWKDp7PgQfbThKtZT5zWBHauPXh4yQX1KYEhpKuy7erwZhuVp338Vdg2SHQ",
  "key6": "5oAwNfBTophhzQCdnAJQHUCcrXtA8BYRz2qq4gUqBtynyf99uJzy44NWcyPUCh28RkPjXNff465YM29DnM73xWWe",
  "key7": "3KYqGq7KCJiz4gBsPP6pTQTVQrWgxd2iVY66BNecrdSwTdApZAC1QFDgFbTTQTxX7BXBbvvwVW99A6fN2mg719zH",
  "key8": "2mVx6QVfBwbnmWpRZBknDFZ9wATG1tmofLDbEikCJHTjiEXfd9jCMdfD9tx2AA21KXP4Npfayqr31eqyCYsGjB3a",
  "key9": "aE3RPMsijL8sQxHEMfJ9iUbKeny9eHui4gZzKbWdNtmdQwVSNBiLTQt2rdHJNYEha8yxnj2YsF75aAxxFrDNeQk",
  "key10": "31E52gNWDGME69YyWk7BxwVddAg4PrvdqJENu5HBiYEdAJnsfXpQYZPR83NhwCfZsj6YqP1RE9nmtNkHEzor4HPZ",
  "key11": "4v8PGTy4WTX3dzbHDNDZfVNKygwbK4Dxfd1GVNsFA2VZx2TcF41DgecAuW3kzpWS5PsaCnjB8Se5VzpwJLxxkQw6",
  "key12": "4he7jupZzk42gcmMwzRv8eYkEnjJYcU1ZsGK39SASBawrM1h9NZtzzbXRADCMaxhor8nZk9BKCVC43gUStx1j2Wv",
  "key13": "5oUaoYVkceKwz2sWvb4iQia1h8VHDbAA47eZnbpJJEBhnB3G7cd9rgWCGL8o7uhseYEqJi22f925zpxfaUcriDRd",
  "key14": "wbfiSAAJpJ9r6h9Wk97XVGg9mAomfJtg8tZvTSWrTaKRUBNwgS7HQoFfycebEMMBMj394awXjqgzfkgiE9TNSpx",
  "key15": "3jRgSdEYjGpPAc4wMUYfh1i4Yo5Uox2BfbYEiGJwULRo6so3Lorot4LdjAWAkPEgFAk8kfNc2V6fGcDGqqfSCJDh",
  "key16": "MQ9QrriYXMsAWJtTBBytks7mrxb3rURzYgUp3KHi6c5YNRefmGwEkJnQdBKbRuF6TkwsnQxQdNdVzKfAR4SxZea",
  "key17": "5dUFcs2hu3rdCxpSEcCuJkJG5MbnYc2RhF7f7VJXwXWUpFZCKGtnSaAT4J4JKDo3tvyh36b5HUXjZGcyjhSaBo1z",
  "key18": "2wkoS2nZ5f5nLpdCRworbuAL1diFpdyzAfSvJZmiuoFREVjmy7i5nXmuucmPn8zFT3iijb7D8cmLRy3Ve58rx4SD",
  "key19": "2iLUPcHUmgsKgrSNUisnYdkhHJvEbeXGBYD3b52pM5zoWepQgNHVQ84E584JZRts1NR96GJadA6J4zBMbQYsgstG",
  "key20": "527ept2BxzuUx53ANt6GMmQtkjYCFdnVwpas1tZ54yEYCVu65jkrLky4JBu1hhN7B2VE1ZJypXhW3tkXufT5Ge2Q",
  "key21": "3jtKEdfBQUVd9bMqY3fnCe63Zr3EC8gd3FSmUHzvRpGeq5BaEcWGL7J6QHYoa937o66EgHBJfDbDcCzTAPFgZMt",
  "key22": "3RQb5SnvAiJiHwE1Fh76jsC7QpiKo8NgvqEcBSGFjWBfDbQrYB9Czz1jgxY4KeXa6LUFfHUVUxmZKvt5u2DZdGeY",
  "key23": "3gwsrzA9wX5eCR1E9iEoXrMak3AA8D9eX2XmxT6fWoS4uNdQvoNZnM73UARX5V7bTBjFZymJ61CrF4K9j5uFgdKd",
  "key24": "4rm438augUxyjBmZrHEJYPqP51QEnWkxxVxCkKvU5aqC7bi72786ceRirLEZi763e2J267PzBRHGFs2kfFY1jfHu",
  "key25": "5k2traUmM8smUxfM6SmhXPRcmenKcavAeTM26xN7ddK6HYcrGvTHPVWU8rwsWfsxRvGDYeXhyxYjM5NvnacxrNS8",
  "key26": "47iptfNg5qp2XbfYJNuutQK3oepFnoXG3PthRg6dBU29schUgrKr8zbdMAQK5nSwJdiwPErWoiEFtn8qxJNdmfk6",
  "key27": "2u5ofTF9HQANQAcBB5RQWPfGmAh8933A9rmdHe2iV59rUevBjXGvuk5irSRdSc6Gfj1b3tnK3zpM7oEQNKmQmdRf",
  "key28": "5co6EHaP5FNtUUhQvg2Cogwf9xzrupmGsATToRhfsnMbyTPNLTCz9Nn7qCh8Koa7BURwThRK44AKtLgFYd1oN92M",
  "key29": "3KVmePwdFEUTdFFVwrQefB2ch1Zfve5rDWch3UenZMwyFg8Pov55VSNBtWWdHCuqMxM17Vsd796kXVT4xCFDExUQ",
  "key30": "5HFw6r6pqRgdv5wSQh6hqWzJHWzjNbhM4bsDW9bgD13fbhhcmihb2bd1UmA61fU6ohgK5ghVqkF9efemvBduBmcs",
  "key31": "4Zz9cxQ4omiYGqBBS9DUvCVTnvYnB18rGxxSdSkdB9g1m32vduDzngDie1W8zE6LtCfJs9JdDrt3hn4hqP9Ba1Wc",
  "key32": "3qzrhsPxJMLdifuC5wyxxm3dYkM6jxuKY8dpxbdjeUwA8eBUaB3Pfbw7FnhSKYfAyxKMoMVLbSBjBWXpBWmaowZj",
  "key33": "2qXUYgXNy3xWoiuGgQ9eqnUbvjkCu6rG3r7jfiXjhpX7r1XqB4MTPDAYBwVzvwXi92sRuaTRKhimjA3fGee4eEEw",
  "key34": "4wR7UhrWGMMpXYQkTykXRf5hpNG1zD3DX5Wrww1dTiN4K9pBUvn1HkA99kNU1z5RxNcBFRSxwFR5ESvyo7gxzaM5"
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

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
    "4eha7KMtMd5oTgo8yzzeZ6VGjWHKQ7VRAJypY3uLBpCm1n5YPzZYzWpvjDU12a5MeqK4swY2FjxQZtue8fqg7Ue8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kdazyXg8sjHGwVrwiu8ujwtmidoYoEraNCQim4NpqqmuErPbLw7Tam5voKKb9bZ6b3JHekLmYh5fJcrs1XMhhQd",
  "key1": "35f6wSksupd5G8Fyqo6hAyNBTxsKVmWPZfQsLkFHWu9ZoyBnUSE7XS3KbYJqHpc3gfjyyrZTgh5vRUYeVX9AMZEf",
  "key2": "5LYubXsiCibXexdJiJHN6qWspGZdSBCHeCrCSVZpLVUoLtWpeyJNbvBv7JtBHS4FUa2sAXv4pxUjWDzBy89VUP3Z",
  "key3": "3govtPxMcC3kPxVykM7pr79i7ipjWMTDwUPXekJwExpcH91EYY8GM11koX6QgHwsFY33Q2inVyEDcrceiGyyQtxy",
  "key4": "4GB2LNx7aycApopAkaeQkVjD8pnsxazBoEozQrJY2wT6UitmSwGEr9E64DZRALeH7sxM9EYRmGsU5AfiT9yNcxhq",
  "key5": "3zNAnbsveF5DUeLuU6GPPcLuZFBMKJv4s64F6Hp8PevsZwcodyPmGHTUeJS9ARppr3roonHPtWn1XNjyj2VczBPF",
  "key6": "5dnfvfB598M4shq3vntHY4FNPKaSVE6c8qB95rxt6bjmiCt3ijCK9kdHn4kgnGkKsYme1MX5EfLGdN8XiMG9XRYo",
  "key7": "4y6ayQGhAeALx5q6Lc3JSLuzjSURqXb4uwBNweR9Lmt6V7wa1rd8dqecPLo1e7m9aHmpchFX89Fu7jTtiswMQvoe",
  "key8": "4eHyYQDnyZWdP4Bg6e6z8ffAmAeQUg3553cmLTfs6xxMkTa78kL2jtvfC9bgpUiErQKseXYSAwXGVzGhyDuFwieg",
  "key9": "4VnmNwpYiFu9C83UesK2SSwr1T5PbbWoTji3GvLwhJCdcjEt1Upgqy9nz4svDTUJhQXdcTBryFzuaYEah48anyR7",
  "key10": "5KiNDHGHwNyvNA4sApqsaDdm2HdZWGjLR9M6gcJQZUfbB8NAbcui5CGAvY7Rixn2Piu2jE2WTu7MtV5xdbZHqn9z",
  "key11": "3N95B99xrQBPa7cnrUsfHmC9r5KdDnV1xMttNM6no6MhmfbH1akwCBazRuuPtKqHrVsH37vBD87UGtDdEgYWNM54",
  "key12": "22rGt5htDZNaGwELtjzNSpcgdkXPKjcu3TnDYWK3k8XUBSUWectTEfxaZ256GkZEZEJMLeXGfeDc23AsQJRBQ9tD",
  "key13": "2kj2AzSFyEfz3knHvuxAHZqgX8o8Q1jnHVkRERdNUuixoZZiR2KhWXmoisrzirDB7SXymbjg6Rm59bTc4uHca8n1",
  "key14": "5hZojTQjbqB1LbrSoyBcAahrxuQ8ZwFEyZGv9hk6MCE8Xv2ecEWSBhTqnmVgX7k8PGLBjFnNqsrve4tPrbshD9a7",
  "key15": "3BandqM1vyheWxNW6zEcXyrzheKdRyUC1oAaPsQwf9FZd2EomW9oNCeXDo4ajt11nd2GnYRGqubdMMHoRNvdYtd9",
  "key16": "4n7VAKmU94XZLa4BHddyw9Atzpqx4Bm9Vfoj9wKd6gvJ4V6rMDGQGJdt2f9ZkPRLSUwXLmFsLRYHiB6N6igy6JRw",
  "key17": "4pfjNncDfxLd4m47PtmkMfeFEDMNW8BgPuakRPTqhw82fRdWnC7eR83rncF39a1irzuDKcZu6nGBwTTbg6YDYRPj",
  "key18": "5wDdf8LHtksWWSu41jxxKZhy1ejFvyC7s81YF142mL71DKHajJCw1MPfAy6ExZaKMSafiZ7pPF2mrQ1tPwgwWr5v",
  "key19": "2zXGASRfB2HQh9QWGkE5C1TzvNSycXeFZmZxF3ADDpLdekSCJbWeger8UKycqwoF5B4BdryU51SQMPL8dgnpPy7m",
  "key20": "4HkbdhvMYRTijvmqTQVrmGcXuByRFwNLzTUVMdFbNGMcik17MEx55SuS2Xnht3uppH4A7Ra4z7VLvRwdF2dNbPxb",
  "key21": "4Q8rmRcGpfK42o6of42B8rSmqcirg6yqUortxin7aymeNKNTy8w6gDPtJ1Z79yLndJHtBWJyqiuUqaGEwoHgHWhV",
  "key22": "4WK6dGMg7af5hvmTHZ8HhRgxmhrkauZFEY2Aqz1QCseuJUYFtJoqRb2biPKfXxGTqRZA461Hwc2UWUkCnVjnEBMH",
  "key23": "2s8w3SKAxoDKEEJ21PRdFwec6HX6u6at6uFGs3W1Z9mnPGYFSvToH3NBrDR2eDn9vB5XuBfzT5WJQZakt2wDnFFD",
  "key24": "4vQcckkrXDxzML1Sh6mSq2JjcF5XTtpoF4enxCEKh3aDoxaAR7MWKMoMRJqwi7o4Y636gvsVAteZVGmpkppC1uKp",
  "key25": "5y6RU3dB65cdJSx86hxdFgzSYsNvsFCeyiXr1A9Ab8PnKvZ3m7T43qvkYyNQ79FYsDQ8KSqV8c3STiMgpfW99Dz5",
  "key26": "66Q8oJbdxeSqChLYfmrJPQkvcsyJXJ5q37BxeZe7Sm3vffGn4eY9C9CLYCVUrPGvdWJo9mK743JkyyAfyL8v2mh6",
  "key27": "2yjPDB9C3r5R6oCUmykUuVrDZwxDKXWHQkAGZcKrtvQnTHL21wJv3LMkANWEYKmmZrW8ujSqi6JmJ7nf2g7EB1aE",
  "key28": "3xXmBXoNji4bCykxwcvjd6cwg8yS96q2Vwru8eC1C9qyXSiFNFUYGyDQWicwuEwqjRHKpkVcYf8kFod29fcfbH6c",
  "key29": "3ynKJTDFQskdsxVZhAUZicojzeaPiw85RNX9yWeGBREZuEseZbfP7MT2u9wXTM7Lx7LpuokdGsEKyZdif3sqYTCp",
  "key30": "2S47Q3S5e5A54rArN63SMr5NFZp37B88cBfFoo5ZQzX2UiTG7BPGVoFoyVuXpCZpNvF9VTP2oiZa4DsXn9iDEeKK",
  "key31": "3Bf23eQU5aSy8nHnS1vjSmiho8ZZpoRyCy72gKS2env866VE2pUdnbj9hBS8pnmdyeZU9ZxcYtrLy4PkBSgAjoCM",
  "key32": "56RobCiikLi9x1ufBn4KSQCTA9yQqtTfpd1xiYiuXgAN86sRcP3vRSwJo51hxnretwfmynV8E1fJ2Fbb5vfecvZ9",
  "key33": "VRXZhgrzhLcgWdLSTRqxmkA2ygE9p4KtdP3sgnrXuxpwBDrW9Z5aESSJWdytySvZz7DEcyXg8NCVi17k4KkXgkn",
  "key34": "TaqYNsEyX43gZm8z17ZFv5x2DgKue2yqAXSchQNnYs6qxP43wf6qQRhw3UnkB5rfZen4kAyvRAmJtfdAN516zgG",
  "key35": "3Zs8g2SQZw58ufWuQ4phkQHt6SvU39AGKXGHPw3LheLFAjRTeMW4doDVfogfGTcE44ZBttEP1TRTmdsKRcgY5Axt",
  "key36": "3cNm6jG31GLTVDXgEPw3NRx8dKngGxPVzGU4wbcVLNG9iL3wvy1VPjYbUuwxtjrsfrjudb8CeE7USQPiU6h27oeT"
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

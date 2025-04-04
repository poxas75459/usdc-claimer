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
    "sjKAiDLBX2TmUp2Y3fXCBhZo3vpXAoK3WNintiCTdKjKkdJsWqbtJ3sgjUT6iEUXbnSR6H1om62AaSAq5vK8Vpi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GWjubnHcp6Pz4pdwc3G8AbLCj42QokHPBqDAk66YhCxHkoPh79Wqbii1uaxmACyo3uHwqxCviWoEgoooDWLpbg2",
  "key1": "3hkFRYkqufZtwUDEYxN7FCz9Y8ssQmAGxVS8q7ffsMCsoMp7wi5fk9HRKUtX88rPGmAsqFxM1WMFz6kx9VGHYaSk",
  "key2": "2iPp22fAZGKaguukdk7tYd9gvWnapZVWDotQuCkXdX9ERBRZ4zSBqXiobLQbMF24ZCexKH1MbzmrmMGAjK64zkq2",
  "key3": "hbdvUZsm5tXbeJzRBpqTaHQugPoeCmLS4fL5LxiR9f7cy4WmKJhkWcuHTHkc4ZmXAvvZseZec5isDhjGRCbfnDr",
  "key4": "3pKWQJJgypiz9Xx7YgbTzxcNmh9LaNyhKJTpWYR9KmFXMH16Br6cSk5B5nyaEVBRiePSpETsB8HvByqSxvhHNKjm",
  "key5": "3vjAgfWStC5j6E35RcSUgjmNZ2nrmB8NcvzAM9VRmXgCN3QtKqJNtJ3z4DrAJE5k9zzCHv24ToaQRRKVVYLKJTLq",
  "key6": "kgCFj3ncUVfn5pufJUckqga4m4M1tMmUuVXc4FpB1JeCQx7UmATUiKKBbpk23jGTXoHLLtn1ZSF5tS9GmD6Y3Ju",
  "key7": "5vknZw8rWNTLK3zYEjRMtthok7DLp89wDckc9k5P11K2VLzQDTpRuMDKxdatdtHs6BNAFcNbYdbQHyVF5dTVW4Br",
  "key8": "4EP2FvtAUcraX7qYw2U81CZSKysbbLMkv4kmppa1efZWCWiFF1bFKpBFrrDCsCZCuUnuseEoThQRr49ghzNuZHew",
  "key9": "R6RM6ocwJkkJeT2KkFwcQK6Gqba2NrMKc2HKisLYNPQeAmbKfCXD8uSKWwhJ3QmCA5FfFVrsxv5y97LMFV1giHC",
  "key10": "538md1hJJpcki7dsU9xUia2tFShVWcjKVVBBaLXzE4Sqho6EzrU3Y8xRxUL5rgMgW9U66tJ4bFrgR8727NhCDmLX",
  "key11": "3NbzRFZAhVvpkRTwNAGYkcwV9sbScXvwnJYxGt7JvA2zB1VrZb8tRFBroDq1RCf8Q5a7MTVhDcj1VnBTtQLWqe4B",
  "key12": "5FGQKfTQjd73HVWDnFLJrRBecR1eN5wDxnoFbuQ65Ys1JwgD1BwvpE1Sos97Zwub54QTuEbrQRanmzGGJADzcCow",
  "key13": "5mzyxDBduXAJAJPj3aFvSjFrjsYQDzDgoX36iZ64hFtpv1us88bmbe2DTGCeoEfAWiCCUwJdnXZYmg1iWS1s7jbk",
  "key14": "3mVwAT5UNvWByEFbd71mq9d5V5sBwJShrTu3VrUx9Jwxv2tk3jWafz4f3yqy6EyjWY5j1C91xZ8AxywKbqUyfksR",
  "key15": "38i4vWZPpyiPgsebWreQBViSRVL3zyaq8KsY3LV1ahVQsQhHhppNuo231GLZ1JJ4ox82RwA8tZYwouKPLBLNhbtt",
  "key16": "tNvnBB1tL1smt4wFVfp54mxUW7ZbdouyAddaagZWXyB6HtZktEFeeGkXhqSDpiw2UxZtL18RW7XE6ViGM7ZmWi1",
  "key17": "4on6aWHiPZ3Sbg9p49rEYY52MJ3BiXRBHrNmV6ptGEXPZHD1W5oNDQ44FRSCoZZm8gEkhdpAg8dfGj5drB4JkwTM",
  "key18": "CoPngKUW4c6mptAorrbuhjiPJLyQMqbqnuN2w33EUayiH6pWKUDXyDMgG25q11XHFQMTjpviRCNgWve7K52LNhX",
  "key19": "3qF7LiTbfA8GAt1ZDzMYRRS53ZAr64X597DuuFHst6bVoKfH7digHH9FvNVyfjXVg7PhpwptuYuucrHFGP21hqm5",
  "key20": "3vLYxyskMHKrB8YQYcqYYwc7mUxDPkmQW63XRDjF4WYjSzbe9UpbtSTH4a3SKM2UQe84awsvzieSDsn7br4tYfgn",
  "key21": "2KNvLpKwjFVHGpBfTdgiGjHvagD7X3TiGAVDyMnpqjKBiQMcKp4kxLfFnn7dz8n7TbQRjWa1dGFFUi9KX1VbS7pa",
  "key22": "3Mk7T7MTjDcgtdF4X8mgzACMbprtiS4fNLjfXP6A2F3cCqW64F3pQR5T73MnWDmufuBHCEdBr4PHdSNSR38vECLh",
  "key23": "2yBTTvLsiMJW9ALYBCZFGPZdXggAQSFkbmivp6VSQtiQfo6oTmJqBcesy63yNMBB4rNnAGK3YkBD2v8LGojTY1y7",
  "key24": "52cnSnzoC64kvDJsENG3JL3XGkW8wHF7BM91jP1TspyFE5ZDH4cNXSGeAdoEHjMbD9JTUtUB8umT8s3RPLgQEzXW",
  "key25": "2cPg8mnbhYMaGWi3bbWFYJfVV2YyvNw97aRQiZHhQ9VBDjoGgHX7T1bhboqEPRdpvNm4D6oqUJ4s84WUawd9cXAv",
  "key26": "2a6HLg4XeWLEKnG2TH97cQERpmjAEhDPAJAiuYRsNfy7swJDqJ77Sd2tojRtHs38xkx44dw73Yt5ykWLmGkEcUUn",
  "key27": "3uyHC9pXfjwVt3jVi3qarT5DgwNqxRVKSFCndfxb3kF2oZSjGsfngEAU5hXUh6rxtGr7JXfjX7rirSCRmUL3Lxn9",
  "key28": "5v6wQcpJTja5nmLY9QNHXTMYWkWAy2CN7QJzqvK3GSv6CLhgkaWtgEs3cPic26P6ZpyynpY7RXmfBkGaUiyWgBmA",
  "key29": "24ZpHBh7SKJRPGrfdPLj1DZ8SXM1UMw8TrZTwocm9YcBiPF745db5jCeUSnE1bC6RgVvq65DtaEGneqhpvgAND5e",
  "key30": "3jggUpXtVbNSryQFXnKFgjVWPhEhj3Mxm5UAW4Jd1ZXngvfZiVeP8MLswurTGG5qXx45piWjfzWsdMVaQPy3WQky",
  "key31": "2wwmi49KNTiSgsepU6d9bBJxRbskpAad57MQsdt4fTuaB5tqbCu9dZbsEjx68cA2AQAAEHKnKpzF7LUph98GJin8",
  "key32": "4iigtECjsojSLcNW5e8qVoEX4Qpbw9JpEy8BrxxsN8ez4EMXikHzMSdCBXNyz8U8kTQvVY4PCpcmABKvUmpyfqzA",
  "key33": "26rcoatquN8tNKjcCH1AwwsByf2JAJG2LCLs5xYA9s7kuL1BRuMkt2d3xwpdWhNtQrdFGS5qk4a2gW6iVmgoTT3S",
  "key34": "4Vn1TySkzbDEg3jXv9oqhf9MFbKWF2HTE73HNroc3aPuezJHcHudQXm2fX8Kijbi6itY6TGTFREEs8UJUMiHfdfs",
  "key35": "5XrfNdmbMiTVVTctvg3sEzS8MKULD3Y37BjrvTFZCmk7ku92rXAdgpt7LRJiA6eKC6sLpVd1j8DNpyh3Nhhkrr9k",
  "key36": "2Jw7bPWomUC8TfdVFdZPAZmiKoYRciQGr4hHBNnWrU4s1G4VxdXc7nC26SKdmuQoMBxtS4jHrcqppUZDSxn5ZAmF",
  "key37": "48Jwk8NrxvR5p19uVrcBgvENyYgdWYP13Mk9Rk9WTP9gykj9Z4fGP92LLiSwQwF9JofJsTCHdRJy8kHbTgtaDGmS",
  "key38": "5kcLQJzkCgKhuJ5jhHooW4pLFjHC6hi6tHpuQkbAsGfLyy2mX99jNnU27WJtEQaF5Rj9XQbsgaRq3tRiL8AaxJD6",
  "key39": "53T4AUANSyYrf8imQBixCRRbzZPU3mNmZpF2GL4PhNwWsWjXvG2sg4GvRuohfDzf8hrdg9xTWMNmrAdCXEedMVMv",
  "key40": "4CdkwXQCAQGN5KnXZiHvf5pDK5QUGkFYgwmxhjAzXn75Gm1MEZhiRJ6ANsf74Hng7KLCV8RtwexWjK7d65QdZvgu",
  "key41": "3CUrn2JJhJfL2Gv9QKzeNbsvHqELQh7AvU7QEzNpdrEbJFuPa9MEviLLrFHJM3NjHXwVRrwtFfwK89RNBcoKdg2t"
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

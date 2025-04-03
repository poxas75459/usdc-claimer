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
    "56NhD8pxwhk7oR1U2Gj4odshvHiuG8ojNzRDXzrF1ipL4P9Q9LZxEBF42NohEmKs2QYqyQYaTUri1VFRdnoMpstx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d9wGWBi8UtCU3yNnLpnudYSPr3iS5nS5Jp3nzu3cg5daLdKzEBCV4ofkc3wo7LLaq9om6wbZumZteFvzWcBhQaV",
  "key1": "3hYhonG1SDpJsxi5Ac68gKnJx4P8VyS2AmybEg9PW1WeDA8vWq6AHUUDYyTvKwWNaavUpL8YJKgSnTSNyqXH5GGz",
  "key2": "5b6BYUN7CJUtfT2Bfejj2inWVT1D4vJ4TyMM7LSUoMhKk5gCv7xCnNzzF87kUNQTkLsuvbhtaerqZVBwHevkugJ1",
  "key3": "2nPUycyPxhhGQsfnyx6HSDULPW7TYdTH6oHVgPP1s2B7yRPbygDNErg1gStMQcRXpC63kESfyB9NpPPdtmbTxbU5",
  "key4": "56PRsZnKCDJRLgowVx1B2zrSfjxL8QNo8KkekLnkvLn2WVdr1sPdAB3HVzpTMt5GTGKixPsmFRAnDq6iXbzvAzFv",
  "key5": "37Aq6rrB33gfSXXqCq9R2dqnhhDu5wfbTohkUkfeDm2t1C6BPGx4igaLKVGejL15jgvJuyzhzjtt89MJ8xj6UsqF",
  "key6": "mWNU7N1GcjmoYmQUscBCcgdY8ruudhmrXwXhTkJ8eJ2HizhBb55BzRgcQGvNUMAJCZTTE1zaiDLw7kJCJc9YvsW",
  "key7": "49CAupM8otZoeSY3r4jYW8nn514v89QjrXwEGkgkVyyWwGK5UQVgYGg9xSZQVUwwB39AABEFT5CBHLmUaW7umAgi",
  "key8": "2D2kLXrw6tnWqrgvH4tg7GJjkWk6yyArFUKgweTw6GoZUd42rj1qcX1BHtthy4kXCzcyY2guXXbiKSWvQ3NJcAZr",
  "key9": "2tCvWyzzf1eieRwBWDWCfVDsXrjwTFriStALYijBCZu6EjxDewsgmFzPobqMJRqCWH14mQBqqHFswDfbPa27j64S",
  "key10": "42vDBcFr6tmdJ2h2qdCQ7HmFZkkv1Fq8jo8dhekUAyTeYSyxcRAy8YQDQ648cgjdHZJnYvWKUQSp4Rzfa5qvDUbn",
  "key11": "3rGFTucb1rncGwcChs77SUcahd98EXeV9thsLrE8bpcBG4aUf9i7TLwvfy55Crx6ULBALvLuRV6YYtEkfChxNaSB",
  "key12": "3MtiKW42Nz72XNkbLdvs1wbNRyZ78LGGSyboFuyAaU4tbMYpBiCKS9MmHvR8AiAM1p2gL1DpWS8tmYifhrGo1czZ",
  "key13": "4Jx3KiNjmEGFhFyZGWw94TAe2cz8cgHXQZZab3NokDjXRvqX9hZYcVZHAtU9Re5m3NkTq8tkEX9weDLP4LFDBoAM",
  "key14": "4jKEsHzqsvTv1Qa1Lg8KV1hjFKHWgwDmR2suPicsx3yXgAPzn8PuxBLAUydzDpQeYkb4VMMwRL9htUySDYZuftEw",
  "key15": "wvK7RsEKFgRTmY9eqUvGsiAB6t8FC6TyqYEMfBieHMT4aCLdeHJiptwLhvjKFz85kVV6RRfZLcRePCYfkvQWUCy",
  "key16": "3Dvqj7DSXj7Fgd8TzGRDkjhKPPz9eSsV8ZiwffCdjVJBqXexBautKE89VXz1KZBVrMG7QpmDfYQqC5jtYREWUuiw",
  "key17": "kZeJcSWKNJhsihMbte4MHYFXh2qVWAjFcEBX78NbimS5mSC7HRHjMRgaAABd5mxuNQ9igMDDcqLDBSJEHBFNKTj",
  "key18": "swDFz3e968v6h71yrnBxv4egQ8hNWCCfbpHsgorBi7NVbkD69xUJp6w2Uxdo2kFsurWeWTLqoepRZayXwdwhGwp",
  "key19": "3e9MBGZif881RCWLxHpS8bsmCge1qkBvpKpoXufoqRjtBoaGCH2pmEvvi1nDhj44fMhVZ2tCwpx4RA2tQbi66oX",
  "key20": "2jvYWYM5QiMCy4rnV8TgP2PmWLRt1N9neePsMtFKuPwkcM64krXnvHAGJ1mm1aec8WmiWT5JTULZUCLzx3icKGM1",
  "key21": "3e2UQLpeHBSdGsrGAkmBWbX6g5NbSu7mWWKeLJkCXvgyb1SqEBWWQ1iLcDZKEtkeycUcnmt7Qz3MfJkpGaw4Bkge",
  "key22": "3PdiLw84hM3oMMCW2DoqRhG9rbfGK1pw65RYv9DvoYV9UgKjzp1SoRGWj5V6ngCFWFmSbmPEQLutMPeFNcjdmgpu",
  "key23": "4aYtH8iZYviT7bwAJ7bU136HPgTGkphJvDrAs612Temtvx3khKdGzNmJhz2K8mACTuPQCwamB3mHcoS5ZLZdPLL6",
  "key24": "FmsbzinLaXLYAgFjVUFyQXgJ9qU4Fb5bxsLUVffbFqrWaRyYkQyxr23CQLGEAjJpho9ZgXitxyCmK5DAcV3ZHKh",
  "key25": "3YqJAfKooudx3DrfMSBuSrTGdAmKYiATVhxJNVVZ7eaVi1KUngtJq58SDY7js7nVsLe4SggRiaWDTpoHZ9KmCgzA",
  "key26": "2g8zvVwjwx9yDLnUg1KYt3PhqZJvQPzQEFKsthm3asyKreXJgeNaz2t4esNEUKPAFx7VmG6rWfAsm7JNBYSonbYo",
  "key27": "4WhYnqUWdyqASdnK2ot6TXjCmzDpQawWHzMpLthykismXwnw5hSRhMwqtniDZ4aVifoGLCdaD9HCMZ2WrdU5CHGg",
  "key28": "3U4DnXpvcpbE5cL84Lpq2jqwdKNpcEMGgqar5nMy2Zfs4jut2QFnUQAJmP6WwEz5UnD1kqmDGUF4HoNSH6rGfkYY",
  "key29": "4U2PzBnE2uteDQWeRuCB2SfScgAJ8RXS9k4pW2GCBP3C1VU18Sy5s7bq59aq6WiRCUohPF3qLvchGZjR3kuj3tq8",
  "key30": "57gTq4rA5n2Vcvtmbwu6hKC4kZgYakZuKy5hn6hjJQgcEaXo8zMdZWNzRHpueS71arBeCFaUguaRVpe6XRJX3KP7",
  "key31": "3JgbPE1Cgn4gWPTY7TWLko9Q5zF44AF5NSuG2XgNJtWR6Rs2DNxDV2ydXCBYt6UdUQU4DC75kvZYjB91oLXMTH42",
  "key32": "3yJTV9aMwvbstiMc6iVCMENxpa6Seb7fsuTk7x85FbvTXfJw7Efw56L5wgbmJBWwPX32sSJURq9ejzSmnFb5S4LH",
  "key33": "XcZV6zFth3n3v1yyLdGQH5tck9QqyapSYVjfZ4JZKkKRfs2AdDGqY7Z95d26HrgZwfXaf6wZoZUc6L3VqtVdzge",
  "key34": "34YJd8mMiWs7kseMA7jCtxphPU3LkCvYiGkKgjvdABJTbXsmv7XEqCcGaQTiq2arcvkcR3uZ35Lw1qHPGtX3QRvc",
  "key35": "2NA867pYapB119ua5QiiHGqz68mVdRZCRU2NC1tzf8k74JimKCznHtnhBH7XKvt8b9owRbYcuKKcKjVBepc6g3a9",
  "key36": "5NShGhUqCqpVfB1a1u2Q7xtxNk4Gxj731bBVSrrJP85LeV1bqNdbArqNLQSZbgQn74pXMKovufQ2jK1CeUQo4tEx",
  "key37": "5dBWwvnNxhAyqgH8DNXBRRtrXCpMcL6Hcd7yJdMhEBNuZv5Vdhp71wkQH6TSeVnKnNth9UKjNmCEm4XVuufCM5Ka"
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

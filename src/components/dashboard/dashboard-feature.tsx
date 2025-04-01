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
    "3uDPQbjCLNKzCijzTd9fa7Ykj264fZdJg9wJnmHZkQLNTv5NeyRUje4jkfmZ9bKZeLyFSbDuBx1H7Yv5VFvVSDJw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wirRaNoTsQZDcpGZBo6MhhLVLnp4A3bUAuPDdDer1jhsrHYke1NsdWUmeCi5FDuxTucBh4Xdm89Hj1SsYJRueqo",
  "key1": "nePeRygwzEYCcLggwqxorZLSDj137hLxFGDyqp9wBYjUBcziFv94j848p9ucu1kcJsgJmoEbgjebTXsj1hmUmSP",
  "key2": "4L9TEuTPjuVYM9hrbs5PEGm4ZGEsv1XaG16ovogF4RTbkbqo4ioxVBzyoidk252yAsMqcz9wALdCutoDCUhPEgXV",
  "key3": "DHyme9MmmBKAJU5zESUyXwjzaRQhERbz9Bmd28BMoKDKnjbzjZSkn9hyYWbPvf6b3kv9biCm9NTidsoMarb7snj",
  "key4": "2ajTMT1DLaaWzbDqVxEBMH5jkG7S1ECfeFB7vcMnF7mwfE5kTkeg1tisDKQQsB7SbnN7SvdYT8cqbTBF2FTQBbwF",
  "key5": "4mqA3C4d4FQcrfQVHFmhHsNVQsZmorc74MjPQhtUm2NqBGSoXFvK2iKAVV92QshYcU6kbsqfErSXjwwNLYVw4det",
  "key6": "25CYrk9KBvsc4vjdVzsSVbV4UjHrmY6RyAx6h5WQN1FNJiFRCB5RwEQmPdZC8Mr99KHeJccm1qzu6RXVb7g3eJVP",
  "key7": "3xuzpFKw2wnkrYEqaxoHLDxDX5Vb7dwziRU5XNPKC2WTWaJn7mPGgzHPBarWVMvkj258Ju8hmeHhpza1oHidmwMW",
  "key8": "5QbSWLZrTjEL3PnvNt2dQPMLGeKow5f5qefFfQHhzTsqKSrP118Tsw5hWDCLRfG89vf5uo5aMfa3igL9mTPQq3Wc",
  "key9": "3H9oPtEzzH9rAGms5PjVeKceA9H3vi8GMpcyJfDtyqHr2K3PPA8M2UW1RyBGksYwLgvfwDDMcFakaUhGWBdtUvrt",
  "key10": "hSGRR1QNrHYQpnNLEbpcJBF17fVciKhGzeqEqmyoWXPvZRTmXuip6B7zFhk5MmZxEbjEPRCnj2qXx3oNPY4aNeC",
  "key11": "59AbaS7MAXxV4Yn2UswgjTtGDC3UTYrgwDKQCndzoHRZnwvw4vEQp4nGa1iQcsXXUiHQ5iKPtFY7LABEp1z5UuEk",
  "key12": "5NycxjW3cNE5v8pgcCP9MsBdJY2pVoc1AmMbPakBfYwRN9VZ88iUatVAHMAEBoedHqq2NvqmBtuKJT4jcboDXMfp",
  "key13": "2EftdFHQHx56a2Hz9rN6fXnu2PoyeNcQTfAJKk1UvX1Z5nJpJSv1YkjeBHmeSmuueEkbxrpQQ5V9EHz79vGHF8Xw",
  "key14": "1mTwKCpohCYTkSw992JAPXpN3sPKzFCnKkhNpqTy7sEAuNwUeZrvPqFn9tXxEjbbgM9nB2sbnS4TQUvj2TjpjiL",
  "key15": "qEhTDKVRq9tPo5yMUHwwZLzsqxHHG9KcefiUWbkE8Hyy2QdHj82jchGYQ28HeYtC4Kx79Qy8RpcPPaQ16nV9FTF",
  "key16": "bsFJyTSyaeLcjMx4AHj9etWubqcv93duD1JcDvWk9vqB2Lm37ASh14gPsPN9D5UDXNjw9z12j4gjZEbhv8JdbVW",
  "key17": "2osFxHeDRFnNbr191FE5E6Gn8mepPXsQXhwbbrKiHwM3hEUG6QVbz8hwHjKkTZeJvFkG21YQNLzjBD2AZ7kiVFAe",
  "key18": "5MT46aCXDZdXZVSjxMhknmTVjxAFpAZGv23pFXvXL3vxijKhpN8bWX7nR4G91QepKWnGU9Ck3asftACd9mJuwUF9",
  "key19": "3bTwBdRdm9FZax4WPPzFV7WfaCHJwnZ6C9gPdsLsWJyz2sPiPcTXzSvp3d8LTi9nnyTJk6ygj57H4tap1PDiR6MG",
  "key20": "fKx6gbcaebfhhwERpVJY2Bog6tsYmsTxxtv4sh9aP15xJe3WamSHUbzcHZEetPYRWmNByioxsGLcFkvUce7KW1P",
  "key21": "45iAZKJG1RxX4rXH3d1wknD4YNwcsbt9Cc7ZYoN3nh6yx4928xou5VvbCDXqWxntRfp3oS8T2uEGVcgqwYSYmnd1",
  "key22": "3wGufFNS7CiTpKEuVwEDiPXKVC1u9V27GepTGEKa5SCDaW7kj8Fm2LN2qaNmgaCY578d9zDC1zQ1VQejbPA1kzMu",
  "key23": "2P2SP6yEBh9PUxbJHm3PZeucphEffRNaNzMexKvr4DipYK5mMPsniFaEVuy9LPqLHqwwQzvAEYEnVL2QUm2K9dDV",
  "key24": "3zMCwGnsMNnXJEjSCocfAG9KsDg4tVDTQRGFhfR1oGmJDXjDtgRjbQUAGjYfqYUT5AemtsQkCfs7zAXeJ1ygGCKG",
  "key25": "2oKReBPbVtHc7MZSycZQtuvz9iTwnDT3GNN6VwG4cjnGEiLJob9UxkTVCC3edf9jv2Gg11buZyuCg7o37NZP2jYi",
  "key26": "61SmUjU9DnHwHA7LBm686V9rtccNSxHrRsX89WvDLSbXjiNhro2RmRY7LBWKRhmCWq85jm13xMMSHBcnm6L7LQft",
  "key27": "3UFNvA2eFMWxaBWywxW89tkFHKM1XwiH2FRHmwMsQ5miBuBVUYfBV7RsbpJWTRjreND2LW2PhvTXr3AqZfkqN86F",
  "key28": "3uCxpjRafsnzCxUTjZG8zVhmsmWLgosokvQiteaMt8QSg8EPk39WsdGdsLWkjuMam1vctW666dgBgMfs763DTUK",
  "key29": "5icqoRgnFLkFRdetQCfGdwEDLk4ioPXGQtLGbqc6y3KmuYni6hYmRikQHtaki2uUV6f85oEckiauLb5aiYgsoyYi",
  "key30": "2Tky7XNZCnUDyVUvPtDH4GbFdJP9UyZqT4j5PUMoCFMW7fBf159rMjxkX2AHaid27wHvg5PrDLghaEnd7LYgopHU",
  "key31": "4CsKAVnWHzffUyioErE9yBHcK9vvMyhXSvnu1NiWYUntC9KeRGQJLhCyYE2WiKZhLYDUxvB1vRKTP6NpiepfHvrw",
  "key32": "kML5UZznbpc2pguGUmSJXryvYSduy14FxwmEXNgPu1kH6VKvCxT3US8ghFKqcE4U4U1gBgXHb7HEze6KKTJ21i8",
  "key33": "5BV6bB9ffyEmQ5gKjfoNeVdJqakpuEoA7nL25EWBQuPEu2a5yt3VvHMULzQSz47p1C7A6AuCPtvm6Nwo9xFYQ6Lu",
  "key34": "4W9EEVuQ38Td9xCNeP3K5Bussm5xJyMzWoQBumSA9eUdrejemEgKCSQahVTzg4tYq2nVaXVEcBbukJ6KLxrFX3dU",
  "key35": "3GmTxXUN9Fb5naxLiPanV2KPoidtysZ7pwAwrMRz95LHDbkJxGoxzmSUF3cR4f7gRRx7QEcrKrCGUfzy7NMEnv81"
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

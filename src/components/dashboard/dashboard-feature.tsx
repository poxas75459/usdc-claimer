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
    "XZ7LwCjUsByvxH2hhpawVjcp8csFsPAYMKeibrt261kGURpqQg4aTza3S1Ea6VfBYFKs41AScxZRRggovbFKf4h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52Q43mFqqV4cC1ZwLqP1Vb9871HwrCbC6tJN5X7GreV92JdmBNPry5ZvYbXEnfFhCA2UCMNpMraamMDzmbxWKZCt",
  "key1": "2onT1Xv9gpw8JZwtsEsH6NvfGkDjtivHdzMpmMdJNQ4Z9g9oN3bH18HgFc7w25z9NQpFXQy3DBLSNCYszbeTpN9M",
  "key2": "3AwfcFnRWtu6yGiYhRuxoSzoZAVXUoDUBXfWjy4QdEh9ST782cSKdxAXNsavBuQLRSdSRXmRrt8MJVGpPDETcf71",
  "key3": "y1etw6Mvtpo178L3UH4TWYNxrxR5QDwdaZ1pG6qGJA4x5okCeeUBSGnp5bjdzdgjG3uNFeBdSYAHbfkLFbFbPfb",
  "key4": "4eTXKG2oZccPKVsDFrQyWfqdFnZ5f34UQD7E61iykHZ498fSG3smEi6UDwUfvRmSVzgsUf8XAr7PtUH8RyrBJ7ZT",
  "key5": "4qgzVcrdHpjUQxW7KrXTBwtCUeEWCNiEzuzP1irxGKvFABiYDSZzs46oxeN1NGE1GPZHmjddAbBfqA8KCCH8huZP",
  "key6": "91ZdyEyLhXK1UiHPmf4P6njVghfgJ8mFpJDw9oT7ZuorQQ2gawZDpN9fAQDYPruJgSpswT71g7XJN42mZ3W2uYw",
  "key7": "Yin8bFQzQRNWkpAqAFzCsB1v1keiCoFx3M7wYKztxvJhFKc6AMbjQaFzhsJSZXbHwtgq94xX9bLrhJzmqrmVFq3",
  "key8": "4ku1ioNbXH13UfPsqDSrvYecpQm5K6vm8Upa37gMnwNG2ckcuQmsE8cFbsjTJWaWHuYZ5Bu11KhKWWPuQyKwWUmM",
  "key9": "3DgS4HnJzY8owqHFrtde3WGk56vN8TyqniHLws4eD1yBbkUHQoXatRhkFW5hmyNfr2bLj3GRDgBwvA2RrTqRgkvp",
  "key10": "4JbWniS7rjrLeKhAwyxHajLWdPXRYe6iKziAnY7tJde2F4Kr2YMJ3MgA2Wu5wAPGmGj1yHcrzCX8nUkke1MiuRMb",
  "key11": "4xUWfdRiCQf5Yqyc5EgZV7gs3PuBFxtTbQzjtHYdoddNV4woi23e3XuGgDx4oCY8KHPA4hzdP2G3qAk9gFVmUvKa",
  "key12": "bPqj5kjWDXTncFXAEMBcjT6DN6x6uP3N9ZjtMjHK2bdrEDNsRxFtC64FLm8oAB78Tn6wbC6mMYYLLTm76pgbCn8",
  "key13": "ZvuibdXqftUnLQ1rz9gBxanek5dtdZtzvRSBRoKEfL6xusByfRT9RyxrYMqZ56X5WGFj2ugy7VqcceHpgzEYbHN",
  "key14": "54BSs9LFc52kocpjDmu9NTrdpEsausHgguY4jpZUFGZC48uQiTeUkA3SBbumxEhcaC1RkH2D1ptrjPj8am3Aoab4",
  "key15": "ixDAnYkMUa9oHXZjESYzakPqD1Jmnzps3DT7GT7XozYzj9y4HgVVRmmoQbsDNuWNBetdqQkATHsz3E2JxsBQqba",
  "key16": "3VXsge1ogTDfNEmsmkvV2SVT7PTjxkSJrwjFiqgtnRvUbSz7kVvW24TaHHA9i9muhopvVAtMriyFNFrJwUXgsfBr",
  "key17": "3EyvTqgftDuqdsATqeH8TH1mUnTDeTrvnH9SN1uRDieVZyoSPBLgmEhVDk8KfuX3FKzr5y8Z5U7Ho3eiaL7qKWeu",
  "key18": "W3h2gbnmNAjyJAMZXvFEBXpcQSztNjPJhoPU3MoKpkm9N9ZgBFLyki52PByEi9tvVMmcDuyhf2w5MxGK81Xznsu",
  "key19": "2Bsz6V1U513S4iB81JVBe578GZWM1RpFgwmdyy9MjXC3kTr8MwbLfALiDFHTTn7Jbj8ETTdKGoagM1P9mX3Zde6x",
  "key20": "4bAbpxuK6yKN3echb2uytECskkHeXQiXddMXKXmnBqZeYzcYbuiDkk63da2wFUshFnLPSX3qHHS2DjJGqYn12fQy",
  "key21": "38zqYrqUBFwHJQTdVY75y2Qry1NKfqipB675W46Fi9t7QZDtbp9oUeRRSUe1pN5DzCk1Hm52i6LBVvpNWUTXDod9",
  "key22": "2krQFMXwRk3jRctMGTJYgPaWWD6vmdkkpEb1Kq2VSVrnkhdrcNbhBXu2KaYMDRWeibsNRgsTpnrnoFFZ1PEWRk2y",
  "key23": "2fnn1L6aHc1hGu5NajyiQZNLekLzE1VfSVzxK9VerpmSPKVnZ56wpwrYv3g72Y7dCD5a2t5dzmcM7civdYcbVR5M",
  "key24": "611SECL78n83Wz8kWSvxQDXszQWRA6wTxwBpiuz9GhHTjB92eTPv1vSqaB39suJU2FALL6fT8DFGsTokm56hXrKs",
  "key25": "5fYSu4cvoaYXXjj3WKN95ZL589c41UgFfBWMQpfwxhe7dnLmEu5fGpiAijvbCJktTM37vuZs8G5HexP68SrqfxEB",
  "key26": "2NXvFvaDvtkfBVwmG2exqCqM8hZxpnp24M7KKJVkkx67WHYRuy4jaZzTR33ngYA9EnbYdB4N6m3XdQLNgKELETzZ",
  "key27": "612x4tLbpTU1jz4MXUzoaLHXomStgNNoQUrv2Fk9ccHTT7yh5K74NhxFu4friBahRTLb3wkFU9dccHPE9Bxarpt3",
  "key28": "2UrHCANkuYZ1ojDESLm9dey4s47JakfCVtawGcMEJ9KjgQ7zw6nN2woac3oeo6NM75gfCJi6XYjcay32KAsmmgGi",
  "key29": "3EQJvhd396hSKUVFh3KYFyXnvrrkf3tZhci5ebGDBa8mPanLS9juzRcZiJG5VaubJM4DaKqdMteZyLrEe27ss3tt",
  "key30": "4UrVjVx2paehANPTzCemDf1tPzde5NpgCUi5gfdHa1rqVNUTf42bQtbNUKXD3mk94rB4ym9YBujyhAnDPRUjUAat",
  "key31": "2wvW6DN7C7HcrYP73ad2Gw2GTb8GsjDCt2uFTCjMhExMaYUKu4UHyZstZ1vfodDiJ7PojtK8vqKoiTi2bBigQKfx",
  "key32": "ypQpb4wgjkPthjfWFTL7GpV8Asj9SRMPSjTrRQUzXB3oCNJybjLr5PWPPy5wovmG2nuZEWa9UKhtQuDoLFPXHPw",
  "key33": "388e11vQbQ6PKk9FUyYC2xMsj38bFxYQDbfpPWWzf8HQ9hBpHKoAx7mfV1hiEG4Lb4UZVyprdqj9fxXVLvit2VbU",
  "key34": "66RnJVF87XrVfNaUtRRS4rd5CKFpkuqMRL1rqGnhoaU7Nt4aDWwvRtf6dDb8qvjhj1GiNhXSzJ1VyWLLcy3rBvF3"
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

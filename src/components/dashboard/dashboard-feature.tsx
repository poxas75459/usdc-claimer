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
    "ykDGdhkaV53NNw1Zh8UnqUmHJHmJ6zGkJVyyDtYot7g7zmXvtprJqDvpE1MYQNBYMsD1zKyXHX54qREZ1JxNEp7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cQ5Ky6B3umVafGUP5Wka5Y1ezQCDo6hZ3vNYtYgaL3TaLrfNFSVqngYMFtEWgQhkLyaUExtgoPsDYH1NFQfRbG4",
  "key1": "5W6L5T3nnM55QPmhQqgi2W39jkEe571WHCBSwsEaWudUUSCLd7QsjvMt8jK43sWBLZymEMDgaLU2QEkE2nGR1twu",
  "key2": "5MHo4n4nd5pF1ZqvEPS7RFtx1niDbpW4DJfA7iNHnDveW1YRT3NfFBYrmfXtAGqeqw59o2XmLWJgqbKmgU2PRXND",
  "key3": "4gUuYRagiCvonDarqCEErXbbEQkapqZJQvcNbG3hChiePevR9fs9CCEsNphrUPYFQ5cbLna89gSmLZfr5wdvJauh",
  "key4": "4f4Ga8iZ4MVNQ7J5WtXfK5aEzs6JPXeBuJ2sjcMXxwNzcrcKuMvYD8BGnWD5TWgGLa9QbPhfh6vHSqTHfLnKkkKQ",
  "key5": "4X4hu8E5USwDfPfumFBBXm9ZPg27iY4ELx64KfpVrtwKLC29ZJ4Sbuepow2bKSbP1PMCmKnpdRvRuqBr3yEZZBhA",
  "key6": "3wcWHTvPHXZPSG5LKQRfBrv56nYT986oRaAtT6k2JJdCWBMbpExDJqJwcUaJsyUqr86ExkJ44B7k4xKBdUnCUPYw",
  "key7": "4aZryVU87mthrYezuUJ9QgUpCyzMc69Ub14rpED3Jc4QiKab5H8Mch8BTfmZg4rpbuprir1EDpJHgAob3q4Gbmk1",
  "key8": "4ztaQ8UuEdmxb2fsfL6K5r1EFmkotENJexoLeHBs2QAjXz9XYv839QuabdUoSBMpmJebHFKri5fN4HzPMgpyDMbs",
  "key9": "3zbKB4fQbYppbGxaagT13roeKas7LNBFNnQw7fg3VCu2yuKmBxAvECZfZH5iXjCLJz86LpbVSfENLZUtFGJeAzxf",
  "key10": "5i1y8DANb72GH1LXhKb69qVehrPK8kEpPNAbjGoTLiG4iJwyRKmskXqgnQShFwPB9nPx17qoX8k3duKdShH45Lfm",
  "key11": "2nzgYUvoo2ViTYVjaXAxUACDGykw1FLdSNrhuFTBuZAmXvW1UY8vWy4oGMVVU498ASMh8McHWy4mfd9fDhE6CDz6",
  "key12": "2MaT1LXszKpQdwd3ohofV84JbW3s81dtiNrKrzcQeXNfKsMfNCdsQi1s1h2pbY4tBCE4uR3E41YPXwerUBed9YVd",
  "key13": "4ZJghDWZh1Tg9EgZEP1bWgM1sRim2u9M9gseZVz76d914WriNgRUF2rTn2GwpqcdayQLLy1MkMzV1JCcUtKpPzAJ",
  "key14": "5pq7ba7qQiUopabkyLqC1wdRSSE5NodPAm5RZCoKAzDCagPFyDRSmgzSxDgrEQjTBDkvaRXzNpEMUnWRcHY5HhtT",
  "key15": "y4PZTh42jEMtCcLJuTq7rQenQ25NFWq3537Q5jLcxW34nEBzp4PcnnUtXRk3cAQEoN5fMrgb9N6MP16S7JxKrvq",
  "key16": "M5ziTbomwMxdC7qmVWdKH7BvZ3JB4GrAf7H56ATk3pohNrt5132hrNWvtN761LMqUtoaGijmshWr5eu69x5tQMz",
  "key17": "s7azjogGMVzmT8tzvrj4bLDfcxNjKZxo7mw7u8LJjomGkJMThVisUFNWZSBd54CCa82kAtCJu5Z2Z8KrXr4iGRq",
  "key18": "4K6LTfu3H6iQwxY1A2H3TGPEmqmX1HWEwTdQvDbULzxYg15W8XpCqW4QLjq1G3dS7R52unrfN3LvnMEhJKgpMbRt",
  "key19": "3duJY5Jkn1N2Jpu7Lg7ks6uToE8DbmTT61t253cLYQx9MJaJZK9kCY8d5HwsHHuBpjx4MLXdXETFa7Lfipfjr1ZS",
  "key20": "672hq81EVGiUTYjm4DHeyokajfSxa3n1Zr1RUryyTsg3Cho5rsCMZAZCMpB8naFWvRCmRkXuroxnatn4iD3tNspA",
  "key21": "3nKzETc9s9c56MYME87Lfdt6eqvyZzXTeWFeVH3u2gUBWB3gTfXDeZz5oJBW3Bc1tdzR3nEGqwEZ17CEe4cYsgzz",
  "key22": "56isR568gL61uP9mnGmGzSAjj4dWCNatn32HbA4weZs2YMiavxbNYQqPsUzW1wWUjdeuxHXacEsCj7L1rjDbmVTr",
  "key23": "5ePT6GLcJ4A2cwMSPEJ1Tms2R1MfjLFx3oWamCPZmC2DnroKKH38UsxWCg5Hdu76UAcUt4vKG81XzRJDfgzqmnHv",
  "key24": "PwBSd4AMi84FAQk3jdZkWwbchTobKAWNCKC5BmW38U9Ho6qu5ziLRQKSqCxsdDZuiVNDzVYAA5cs8oE59gReBRT",
  "key25": "28bdQV9PGya6DnZ3eGdqNomCir2pmGbn62TCEnmT3tCGTo2NS9Q5Y1jgFf8MVqGVEvxKoBjS1G7TiQJnW7VsGtAY",
  "key26": "3uQawt8F9MbpPn3j3qQru5KUpQkaYGTnUziEzkbaPV6DiC55HCtzZJzU6VUJ6HsWuJ82UVyesiWRucqUUbpBqpm3",
  "key27": "3rA5Q2K16yZj3oK7pCuZUL1PmBGjhC7r4A6ooNLF8nLyn7YEG282Gr6nprAjFCGZS6bbM8yTCh1rWHmYf9FDyTca",
  "key28": "26C6Cty2AaXi8HhuDoq1bkvUUT4KpQ3WqyGLBrCGcYE9cLLHwnb3izvPQwGcqVLoTQdvbWcXxwAXDgT455LfMNpu",
  "key29": "3d6YWPpByR42iQc55cCd8uNEh7DZ3swM6R92tM6vnW3SYaHLiCYZKgRb2F5DgZvuzF9kVTCZKnaNbdxsygvavyct",
  "key30": "4wdYMrEGL77U4WvqeuCdYkCCaiFWb4ueN5dxh6Pb8ek5ATjd4YwBvvvfYWjdj2YxE9Tac4i9qmdh3ERcsNFTMho5",
  "key31": "3o71wPzv7ibP3sFzhSNoMCMd8aeg91dKfdH52HchqsqbK786srGMzhCGzwNBRCBpnWRsYfmu8154dMLmdpHLgehi",
  "key32": "gTuUArPpmvLSU9TPek921BPGdrkjSficChgzPECoWXAAHFpYBDJgZPALBdEGcvYikuy2zVDxjzDMMLHvuivrYmn",
  "key33": "z4SotkJMoHgxJJZKr94GLGBBPpeEKVkanyST1E2eJ8Rhr7cuRgsF3GiSgahtKpjvaprbTuJnwyv6jkikxvkFQPE"
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

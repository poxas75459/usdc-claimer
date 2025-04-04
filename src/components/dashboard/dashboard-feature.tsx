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
    "u4Eu6LeAD5CmTNGSepKrHn7regWDnGHFvLB88cFdDoqZAn39v71mULNcxUSLCTCNkotD2sEnEuocGKud4mpb5Mt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EEhZpx4ZDUyZEkqie1kt1dpZmxPWKDzj5t6nok9z6itwhrP9NBsQxbHJ4TK3umNZBnf2921zQkiZ8n4GhoNZU3a",
  "key1": "nkyYahW1bBpLb4QCwNuRMiEUZZaT4zpuAb3exBqwwreFsaRvzEz4UnWZkmea7fEVsNeYGPDR82pDzKngH6YTg8y",
  "key2": "3jZxemdjBL4xrkABvBgSJzSr71X2WusUFQQmCAHJCPZCXNpvtreTSSB1zF4T1t82mJhuK7WgaWpcsNYwyPkgZUi2",
  "key3": "5ML1gRJXe3QQAe4MgedRGVR2N5vwyansBpjA3q7RbGjepEkPFJ8FyvD67hnwHk5CZ6YRffrjzs7c95cuD4ZeDrmZ",
  "key4": "4NkAETrTRvULV54eEbiXFaXVhsJN9UN2Gis9b28bPQ5zQRuHv3S2GW54V2Fj2PGNffZERsJcM5gf9yQtPecHSpBj",
  "key5": "4PBMFb3wPDQSCN5Q1Hnu2H7MHq84ADRVqCgdkaqgbjHTG3dbm2myWSwkkuw9pTrBiMdUcRDbT3rcDeAtNuojpNHg",
  "key6": "5DE3SCASjtsQhPVy1h6xd4FKcrYoa2xjeuFKh5DxQ4qrdjTCx4hyaBe8G58DnnAAaeRqYYC97WKRepUNfbarcCKr",
  "key7": "XNBQtPsFqsp6EB1JSNwbXyDkKR3gwuwK3gxHncThf82uiffhgvKkGN8qB79VfF8z3HrFkPhMWSVgVyYMVimujmm",
  "key8": "wGamkW1C88jCkpBJhynLiofQHHLcB9RipvXn9omURqM2mvZ8BSubEySBM6uth1hFKt1yKbZiDR9vTf6NuTCix4N",
  "key9": "5AStCgsWQabq2DyS8qSn6b9VnZivnPGeEFL7J2W931wFDhzM6XSFGL7FKNmjMFGuxEvpEbJAADUMJSfQH5HRTCRc",
  "key10": "3J5sLqbjuoUfqU5pVfhzfbxAUkEhF3o51ZYRU9R1gbSchVpZ3DskFJnLErENM88SUmC8SAApXcwb73JPfJnsrVy6",
  "key11": "zPSrqdEUAczQtXJUq4CrS8XEh4uiz2WgaH6PG86u3LJe5dzG4tWjjLTCQASkiXNuh3rPMkJsUJxG4tF34X5TSv7",
  "key12": "4oFQbgvfperDv9PtYYfszHLpMd4uA1Wh3paGRSAjTQ78UYudEHhEoRuR8zDfyvodfpuEX9yiueAsY3qWak5NmnnR",
  "key13": "5uDXaTxzme1tJSayNpp1eP5MyWXUsomdiBTC4JTVrEna79ZnTD3FUYRzEdAkK6U143JfwFwQJVikm3fWfn8tHStc",
  "key14": "2fYzVUSVSniHytf6MDSqc42P1Acx1VQDjTJ3axs8NTgbNyhpMg8WzRfXA66QjvD5VppKGC6yqgTLc6aN4Byh7k4X",
  "key15": "4KRhaoH1oEazezG36Yyxmw8GuVi2AJ4pwv93MFYa4s6uaJ65BsqC4cR1Tq4fvPJNrZFhLDs6X97oC6oWmxNkNxG4",
  "key16": "5tS3vE1dR1mbbBtGh4Hx1ABwa3cCppd3zfWWDWZs4syZVVatd21uUtuVSSsrvtErZWiH9ZnjRF4ZrSgmkdqGFHpp",
  "key17": "3bf8obne1x2EevWVCZKQ99iZDbdQcutCqYNx39HsEJUndMdZPQAp4NkadaD7ox5Wx5exg16EdNdfg3fsPVswV8Yx",
  "key18": "HkExMpGJwMj2BUknJFKBH4bPe9evSwawf6TbyX7QazSjK1fgmsC5nVrF8Tn9W6yuGzTjHn3zsttgbfnAjfBnSmQ",
  "key19": "3LAXQUeT8iKdnJXpUo81TtpfzmXCFXTnDHXF93cQEFkgHZZCPkAQiP5BGvYJiyD8b2iujrabWKdmUYVWxYFbnWWF",
  "key20": "2CQrEa6y6KQJe82avURpedxPY6hw7byKqrDBKbGzH4Fr5EA51QFQMzqCxrbEdwjvoNdNsGTjGLageYYTTcAfBWGU",
  "key21": "YtkVnCgvUMcVGXwfQFwQE9PrmtP2Vq4yMRNrDrGpb5ZMq2Va8Gme9UWQwYMntDVVwcDcomVMCjRmELPYYF2m68y",
  "key22": "3jHRRzyGRzV3rYi455ZyPxdgZyh6yHct9bXScUBPTzEUHH5aUq4kemhtLcEN7GTepP7nWLthHgwFdPhc9vyQMYas",
  "key23": "3AKp3FwkucaTaQonAtJSATdNbJrbNWHXuQLCUoiXDfDL4Ni1Qs1CbsZZpD8weHL7B243mN81ReRQGMFNZbetuxKq",
  "key24": "5eWpVrnBMBktjnEsptw1djK7N5tMF2nR86Pww53Na7L3EDFosUo4oo1Kzwsgm936cnwKJqqSnHnbDXLvQAjALbj7",
  "key25": "2Y8hEsWPvJ7gMY7qf9iUYo13vZisCB2XXbsf18pGYDYGsUHfdqb9MHoj4Qx3iUPro286sYKZ629Wvghsg8A18yF6",
  "key26": "21DxKZaS95JVjKuH1ZoxAxmt7shADwmdSKsbvAGKEnyPKUqvGiG6g29ifzxRT4KurDea3rumviFxjgNU1737YB1u",
  "key27": "5PYwxPd5i9Kmp3kRxHRhRKNpEgVeU7R6EEpZ17WqwDWjFty851yjma6En1NwAJgLm2HGLojvBycfwSWVWBjWpaYV",
  "key28": "2TdfQjGh2QZGMGijWhME2AAkMianbcGtSPzJsgAzffuQNY9Q87ewpaLvP4yaT5XBwQewbVcJzYZSoxZXwpCFtLHr",
  "key29": "5N46ntEVRqTEbHpiZFBqGMHottaWSutm76rsZjoSpjGsT31BCguKuLZoc5kHpLp6692iL2V1Kr5jxz8gH4DCkiRU",
  "key30": "4Cj1FmfXCp8NUzP3Qsgk52y4W6yvFFxfCSUr2YGRnAHhku7QLKX5GFP4jp61YaUWVcNgNLB83BW2jsSWnbWTUniM",
  "key31": "2FCu6PHeC8tXrm1xjagGdSgCMhaFhoJL9BpDN88xnyyK8FqkErwu6cGxPT1Q2ZVZDkJYJwX13dvK3dnxwPBiKVwF",
  "key32": "5oXrmy4vJogwGPLPMpHdGrP3GMUYeN4vMTNzvSgyFbGF7dkWGSVv72KrkMGgMhg2X2j2C6opFRCAGWbgibwSVCnk",
  "key33": "dXMbNEPZnjZ6xq1H1yRuyQQdWSc4WTvPBB2u41GnAveQMJcKomc77AFv6FsckDenyRbAzVDXd9eVHTsdaeYgL2a",
  "key34": "oqeLj9ZwVkz6EdjaNwMFzgZYkrDGwhdiKNcXyHzneYebGzsofG3BELgA8soRbsKxg8K3HfKEZ6gUNEzsZdo14B3",
  "key35": "DpRDffQTXbyms7zkjp8tEYJtXaKWAjVmmhxPqnD8mHK7UKpttGuBGTctU81ViGm8L9WQX32tBiQajTSxGF4tUVa",
  "key36": "64isCwuNq9NMETtMJBhuWqTNxchx6emADff3x3vnKPepD6Nqid4cU3KR5nHU247gsLjJEDzyGPUTfJnqdfmG6uNr",
  "key37": "38mwJLi4fKEJW8ma5CtFEtU75aUTB1Eri4nNXEiNwfHGjjjN5UYACK5EHcUht5ey9Cac8mJuUH7nByrCXhA8RZ1B"
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

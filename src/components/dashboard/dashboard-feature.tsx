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
    "F4craLrEsCLprgFJTJqD9hsRv6kE41s4YvFJjpadzRLXsZzf3VSeVPf6Dzzj4LzKA9xiTGy1hCPSYYWBg4KSqGf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dRTZE1ofJuYhbK5tBRm99fziq87GwggkDYQYTTRvwAuGJyouzHFQKVRApbCsdr68YCexUiFTLuFPBJupBYzKuv8",
  "key1": "3NoEjShbfekEZVPaxxnXYiipsTtMUJWFvALJNZKXDMXUvx92YNFomtVPhMXsmeMyCWoPQT85urJX9dG9Sc7SwB1W",
  "key2": "5onWUS3WLfKBr2bQJaGVqR4kTStTaHL4w6o8adXFvBMGcTK2PrCBvNx3bjAP1QFPfPJ6hhdY3X1iubndL33nCzML",
  "key3": "3p7QL7TqQ1QkG8uEUpCFNZzMa89zGi7NNSYxzctytZU9g6aPtAMemyDzHZVUvzqWiULUiXc29iorxHvXi6pinkgw",
  "key4": "5QN1yBVTYGfwbxNoCUJzHXpsXTZwuEkCyWRbGhHYhsvSyMVFrgt44CH9RD4DRavmH4iiCNf5dL4Jkosmsenzqv5U",
  "key5": "2NypiyDSr53hEQQ8NLLFriVcPcZynAHAVvm9tnNpGKmqa1iJbnfhrqA4p8LqyzvCLNWhDXn7eEWao7o26uf29QRk",
  "key6": "3KXdRf7MpcbXB16xbj14cto7bSY41MUvi5XgkwUP8SHmD5DNT4canwPLFV5xPjfQKquLdeXEKf6SLffFNJPM7nB2",
  "key7": "4X9eeLq4coNsNUFxGNJmznfr6oLaKDYBCmPB1nHEzk9JFrEuQFX1po79SB2scCfAYRduLi5bA24PGXpgLsjZmP6N",
  "key8": "2dEMpMxHoueoUh9StQPELvd1K86E2dgB8pHgZp3JvpJqm9KeMLW7XJUshGoS6X8HwSFEjZeDUyh23wxc7yy3oGXM",
  "key9": "2Ma75gTieJvYtFNCAGeFTvLnqujc5mqTQvCLrdqX6UvWxCxhYp2KVGp4gnxnMDy6YvwecYwHZoRCbUS24s3vLuYT",
  "key10": "ou3PBPLH2g4j3tFsLkJoqWUW2srfSZNv4yVWPPXqiz7WdWz2AJhhceukWwtD7RytWZhZ552Zz27fwZFpMocjfGH",
  "key11": "2v73cVi8LQrsMiqhX1nHi6w5CtGk2EPHpuegxBTWD9GzuSQMPa6mPkQR54GB4wAPomCsZiF1iA54AqQi86DkZw8n",
  "key12": "45icgbGwp39JnHe3m3tKpAiuXBacGq45ZaJRroqbLbKipYxHbsg3GVjjQLbfiqqMBvZw9ZaLZPguwWWkA3geeJZq",
  "key13": "3aqa6v4MY8fEHZ3UcGuVY5RnquvugisrBnKjFaMGHypJuDwMZw8dRypvymxoUL2poj7gaZmoLe3aj6fue9jiGVTA",
  "key14": "2jGVboU8DB9eVv4HwXKPNDRfDJcsYFceJNG1LiSJcHF52q5Ua7JEm1QfanMoYFnQTitHJjBisvPjouBbnv1PKfCg",
  "key15": "32P7QGKUbiivdgTHEGyE1eV6EE6kYWdiAXWMxrD6uTVVHyvKZrx2NfeNahmQWeB5pEdTfbKMVQuQ2BJZttQH6gTM",
  "key16": "KeTUivfbZ1EUY3ieVXBLgkdkPdpmQmq9ebgpXX9YnaPVNb2sadY7NUWAF5yETH7ssRbSExxzXJ1Ev3eQFpMzJau",
  "key17": "5ovZJazRPFhsApmvBj6UDYpcHUVy4gvzcZbJwEoaDkmoLdLfjWDJfBdHRdbqs2dUSxNtSfQGjszpYmKouoMPUsia",
  "key18": "2hQH37E7Td7kjqBwVM8eKymKhRt3CfnNsSUkufTXLtzCAMYMNsgP6sycmmXYQW3n7KEwyLZmXRmSSRkLG6jzUb9r",
  "key19": "LdmsaHH3yRTHqgSm6j4qWgrrYaSXrw5Nsg56HCDa5MCyMrcEdF82dW2zfhqrMHaXwkmrVsFdLGG1huKSBESFjgC",
  "key20": "3sG1tqen9EAfR4pmNn7qWHU2wCqLa79Nu4xUqwZ5dZ48nsNb6UDtupYbpdQQcL2vX7pKsDHLVZnA4jS7yyUMakhi",
  "key21": "3i7AzQyquafpWBx7Wc1CKsALVXxn5iHr57MtLMftYxFuKETcrTrt9kw6YwCYvp3cwD5mZ9bAFLq8oejGh5qyiAoJ",
  "key22": "pnDySFY6r8YMcWHdfCUWBnhfHqnxec2ytbHX6eL5ufMgxfWziFLeGQRc9Z3d5o6NzRKx99z6CJ34zpeP6wZJLtP",
  "key23": "39qT7e8QqSniRkwRb6CMCbg8wuvRwN7em4VVtUi7wojZMraVtLN2guwoAnBQXJEkLWV6zDcuTju15zoq9dTZKS56",
  "key24": "5s4mWXUwjU4D84iomo6fYCtibVu3ycMaDxxLUxnVCS1D8RvCL4KSec99UkzyYBBbXSoWdf2PoSHmdR8JhPEqsk1",
  "key25": "qtmCkbdh5Chn6CpBFa8g7MkzpfH3JADYsBCuS6Z1rh2dJiUuPGp1Wzv15veUky5sdvszxPe9qB7efEgR2BvYrQ2",
  "key26": "3h7PomTaJpSZnqzdCqmHGWuL2b3CCghx4orxCtnG66Cbf4VyYb7kUfQKuqw1qyhbKSwotJVPk33xD951xz3GMGEY",
  "key27": "22Lk78agjhZksR8G8HWxLKgaaKgMPtLL6ZFTynjVoyr1sNvQdU9PsY6rzdikoRgzH94GX6msAgLSwDe2WU6QRvkL",
  "key28": "7yBDZ3BvXAVsSRiQFeMQyLi925MxQijjLbRCiDau19k1837w7sR8kM3oF3r9TYVY9hjvGXNQEUzZfdCRAYQLSdA",
  "key29": "3QEqzdWTzuNpGcP2WzpcsPWSKWXHgh7BTWwk7ssxZwuhcG3YYn82ofUVAcaZ6N25w4mzNFJVacpZJtwCT1XTHMn1",
  "key30": "5yvGWbBHq2LJk4GSQcccdnLAyqAwE4oKm2Nrj4k9TZb5dNmTicTABuEAqupwLCr9igLJFAHwT1jA94L4FyTYvmjH",
  "key31": "5gTcSYnt9nLJXDKArq72nJpDoGDVEPzyBGRNFTgZXxjdBizW8Q6ZBTDCSZ8zLeFhSm35d7KXf7UZs5VoHER6BdRK",
  "key32": "4QBLDCscjdMv4uuab7XwvAK52U6Mg5CzwMdf5VbDnMmLwSSriDLpnk9ijhyKZzgjVQXjBqVKrfh4BwGWS4NNgqhP",
  "key33": "46Jyi8A5AUmMavidsFLb5LBkbHHHEmSiJJGADN5GFfrpbm3QWK76Bmjckub97VzztR6R7TCcnScFapKJp9T2QHiq",
  "key34": "bNHH4qNe7GXGkY9NY964MrR2VZSH5azUdwDa3FMDq9nUYZYp9aUMYPZ3brzWceEJTAfgt9iDxXA5rxPoHae9WUk",
  "key35": "4WPTcbgtB8NDpJeziBJRZHoVDQShkh1xWJxmrgALmpR1LU2ZxaiGM4AvfH1EeBwLTBTYAJEX3yt7jL8oEugEzdjb",
  "key36": "dBYhT9JYWrarxtgaW5EamUR5p3AhMRHTxu53mAt3eESHiiaz4AUbaPhEjsA4vfCZowoqiZSzG3LS4Pd2r8sTtHq",
  "key37": "4oEXQQfVVePUCr6p7XBPbUd4omEhW2stkU9HwwLdzbLoKqVmhdLjsXoEngwoQX1jQrbTtTw5p6n3dYu9DifYHFkv",
  "key38": "3Q8TyKMw9GB44LTdsoQbvMT8skfqRwsWKzWRbJYhdnBGRK1mDPX9S9RpMLAfNTyp8ZMCRX5RD5ERq34e3SyxyAtE"
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

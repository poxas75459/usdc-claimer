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
    "2Yf5ancaRFAJZuSga3hN7oPbhAAep4ArFj75p31f5TVyhJGy5CFmRKDC7LCSh4Mpj2CPsPdoVsTbe9WgGn8sLvAG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hVw2HQJZ6peSyAx79VPye6EEPKqkfvpqyWNTjkd5dS3SBuYsbzj7HTxx1i472BSy7NkJQj2vd1b8XS1PSWYgBvu",
  "key1": "2ZqCzwFhTEscVDe54dWqZLiytBVNFKCdXxrb7cEq1E6FmDfDNtVMQJygQ1as6JN32o9AvsZVSrxugbYwu6PMukBy",
  "key2": "2akf5MBMmCUeZFLM7swbgrdGsZ3AMsPcP5N8Rb1CjfdZaAxLqBLtse7HNYdPY4v5j7YNLJf1BEFaiDi34tz7MTAJ",
  "key3": "LU6xGrZTPsT5mBbsDJVYm4mjsGX4orWsZ3HdZvLJgv6Xw9auszMes9MuWD6oim6F9P3QNiRqFVfXGmMvtVCsXzk",
  "key4": "4ALJ8yChWDajA4BJ4BJ1nWMbhMPSf1dapbYGV8GBRp2JSja6RfL39AUYh51pKBZWqiDwPdQqQj4kyPKG8f89aRLr",
  "key5": "5cPsQ6Vkx4DzrSUhPmyafYgEw5yuabZrSkTHFx9wpP9hTCeh1sUzrpEcqC3XbjNEfGEunnkE7DxZ5bb1oTmk8pyh",
  "key6": "3cjraqpVU9aYaABvrCmKLjwiXG24HZvmUkDuJ3rPUZCNHioYevnUJzhiCMqj8SBjWz1Qph82MAb2pzVwEhE3Dpvb",
  "key7": "4Nj8A7bgEVTqZntveKsiPFfBejtxNTzuqmd7SaNKXzm1ura3h1JFWWkbyBSqHdkEWTb11qTEbteuKyotP2GNetoR",
  "key8": "22d658PXA1qeySrSLwUFVGbQP5yd6HWMiZ4dFq4BQUMR7skHGuVtA4DiDUW6k9sTvQWnZ59HSVXnGadC742Cx2As",
  "key9": "3z56jmycKd2XWcwd4nNUucTaiYMZZhXZkf7tcRHyYWtr6341MTcFnSpWVuwCVNKtkGGJxoaLdePX4syrQqeV3Y41",
  "key10": "5bTRyDTdbo8T3LueGMC5EtZZwutvzYAJuZu269xaZBm1orgpEoMnAcZtfVYcphssSBUPp1L3ngx3gUEmf5XgeGCm",
  "key11": "nZPdgYdiYm1QQ1QSMVN7de3XQY1YcPTdKVhbLKnazLudNoBcKhq48gajNLQLB2gUo1CCtvbLtJ6Z5ei93LXMpXc",
  "key12": "3nYGrXQKKBuv9yxd7syBX9XQs9st2vjrVszT7EVoKCdaKVFZZQ7KYoGpZJuAwRtY9SwZfWC9duvDLRh6KNbs7Dsc",
  "key13": "2cQCzhVoGr7NHnJyzDyQHv1CEVy5t83qXGkBqg22Ux6naUMz3BY2Tzc4KY4M7KEv7LXPACSGRovtCR8vg9MdXMdz",
  "key14": "2mCDqNgKbUwCDWku4MHYtvXTnqETfC6vHUARG2QJ2jGyECALnG3kQuPM32nnVJgHEL2L7Yfqo7Gg2mksX4y4z7Pe",
  "key15": "57vArNAbyuPKnZzaVdS7H89JLW1BJvg5iVWvPjLncTfTTTiasRMEvCKzCL3XNBYJZoaXqv43fTsGbcW9kdBEhVgH",
  "key16": "5bRzLoYAJpNcQ2JhEMni6FK9iEvXA3p6JXhAjFHXDTeQELguN7YUfqU6jTcTDUkRNe431xi95zBt29bX1nMXKssk",
  "key17": "5dRAEhVUjCmuhL865rYsyPaSm5GuibJfFkL39xPEKbniut34dpKU7uSyW9Zh8yzvjtjDr4qPbw4eugBcW9LthyWh",
  "key18": "2MQaCuF8A1hTUUUYyGoW2hCWMr8ZgK6LwmD58GptqwTs42KbyLgtY2UgZ97ooCvkJC1i6SJPxcgvLYMmzUNDW8mj",
  "key19": "54PMN3F1wUvZqaxtNybn1YnZ443ipoDq2d7cnFDuA9B9HqwVNfcqLkh689NvEjtyP1E9qBDTNPeuZW3ZrozMQqXd",
  "key20": "57JiNR5CMmzF9zbo3ENPfncrC9ki6baAkaS4fN8Yi4ra6Y2FkZTjb4XpfNZCaxxLWiNAfTfyczq2KkkkntBTiiuf",
  "key21": "5jAqnZipUB7vXW3Fek4ioaX9eeU2fXUdZz6JugYYh9iEf6MVr29b7yyNVNihx6vwUToyz3Sknf8yjaLBNaLnWx8D",
  "key22": "5WgPhMN6h1LoGwm4N5xgjeeuXJaGkVUWdMW4BCtgcR11WVwuVgaaxyoYR1RJjF1R8G2yyJ27oQbPsyU8k5C6XBM7",
  "key23": "64PN4bT6CMDJM5fkaRGQDzmvK13uNSgDkP9ZXqhvyszuJefAjLRtfSnSg74p4NXFCZdS23TqSDfq453QRr8DNJA",
  "key24": "cwxuhXJMttnrdm5ZCvGadwohcUhXzxyEBgYor6i6doTxhw7oi19yGk1VCLzGJMfMiRuDDUrZCTqrXC2CLTNawU8",
  "key25": "4NWxdKjM2svNNqckQMhRVMqVsw1UBpNUafcn1Qy1ReGYR1Wc4cPSDa7zQWgyiJUi48vrcKf5MfSijmxmjeq9g8cD",
  "key26": "5FZhD9bywZ1P2gqKedcKkf4c1Gz7iXw3hf48Q7mymUC4zhiQE7uKcoA3vNUnzzpW2xgvTuohsgVAK6URCcgQPS4y",
  "key27": "FSDT9k81GwJN1TWXLDVSng5Bgxej2kUbizSKLtbgjbwEWYf7Ld11VLyAZoRL4h6oFknkRg5uitmUengV1gjTmXf",
  "key28": "2QGSFmidwj6FdM5mghqNUwumfE3VotZJLjd9ZF2UWBJaqHo4fKBuMYGAL8ka7WhCKyLwA3n7wuVdimvubZivYVP",
  "key29": "4sr398E8bWXBE4JfybxjK7amNm64imEHZfVhsj4b8pH7ZqAPpKfuUkwWnDPL7Bh16dcrCydBeJghojTd616PsgHn",
  "key30": "2rXeLHT6arHitNsawdMTkeLdjaarweoQu7ZDwEVGSNcngiEztqfXzw9oenaSCq2WiXfyohGgGQJsxhWzgadaVj7m",
  "key31": "fK36mdynQvx9nH4nyqpGTQUJc2BYccDJchcG87rMMfkTTDKaJUJEAxJCPw8BbNvEpb3GXCHA93rZSvotXQeHttr",
  "key32": "5FBFWVFdxbw3hxMuYhpn6RQQdxMFhpGw9w7TkWSu9HoLQnAwgdcNzsnTmxpTuaBuJMP3fky4jkJQhnYanpnffncL",
  "key33": "5VL39Lg3iVvWCq4EMBQy3V6uSm8Ciqddfk5ZnfRiX7z3SrZuupvMbhQk7LCQD2eKR4WMJw6xT82fo62fv2LwZg6N",
  "key34": "36xCy5xXVN8SUomfChtCTCemVfJEhsWy8hYgDpNBJAooM6LMk7z1WjbziSEmtPEWpEG8bQGWKrzDdSAwBvDKNnPQ",
  "key35": "8ykNB5CCzD8GLGFTGRHjcLFXHdJRFeBXr5RrTso5BuARVZ47paXLjW8m1BybB2L1dwJUfNn44DFEhaAH8VeVpZV",
  "key36": "3tKzPVRF861U6H199kkQH9Eo72vyfXJcb4wEnXGMQwUfSLv3Kes8qXA5Wif2hKRVAnSVAeUJR5Rsao3tZuJ3Doq7",
  "key37": "5BbMocMBFU87t6gakR6h7GHjMXdFp9zUg3gFrsD595wjcjswPcZHLLvs97t3stgeiP9s49DoxGnwUQ8BHHNbTSiz",
  "key38": "GaabRvSgVr6u7bVgpofp9sdqitMEYY34qdfqvkT6ee2nSxpXYN2Fa2aJc44QhmzuttDuqaY973W9VL2smAu1iUg",
  "key39": "5WAwm3NbAFgWPZPyad7VgR2GQGA7knQNJDb4AEsNYRoYB8z9jeV93pWMB2UBcMHQub5XTzA1dRcBss8wkBvcP6A8",
  "key40": "4jsJhsscCCvbrepCJbhzH5oy6N68CwVQm297Z9eeg3StQu6QPA3YyzaVXUJXXy9vZErvXWdQ1QiACb99WnqRRmc8"
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

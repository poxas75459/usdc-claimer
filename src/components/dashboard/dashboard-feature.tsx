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
    "vQjo1ddKTzWgdwT6h3fdsrEp7hN9qzr6UGtPt6xc6rGCiyUAMD1HFQCnnzoSqvMBQSmxHtJ5UZwKcoDtf8yZX5D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wi9EL73gHxr4uokWMg2UNDg5SEXDrQvgQuzHNdp318e2LvpaUhn9XVURgBf3FYcWJ3E1aaRygmbob4omUs7uVJ",
  "key1": "3Bos2KJ2h8dbTc8L7LaayL8C971BgysSEEze3w76Pf6MpddF9J7MSqfgbMH5W4rXg1r69z8LmkT6M9tSWDuupWYP",
  "key2": "4HjD8RcqKGhQd3Qm91guSej95fTPZGnv3eYr9ANvpWb9nTLkwFmLtxGbkTcYkMA3iZwLqiFkm1tY7ZBYp3CC9ejj",
  "key3": "C3zncum7E1aCGdGgJkc1w9cMXSdthnwUFuyuomNBgsyoURTYDqvPPmdheaJkXDor6MEQU82ktt76hrQmmhKb49t",
  "key4": "5xxgiDYPtHQZ41h9u2a3BwgAoGeCcwBJdaLeSbwZKHPj5hnqTJJjrFAnwfLGbmQm7smedLnv9RrYcFwCu5YYJdix",
  "key5": "4PUFcqaBqWip1HcVro6QsqkreanEwki9md47jpjSVyo5FGfcUGc5nomRNZYwcX9hZbSroFGewgpqe85NMerrxYpq",
  "key6": "5dsPYgebBTW5QaKURFsErNdFpWVaXz6E5v4gF73U9P7Q4LJmYM7PDoC84phHkNFdmRey8RHvDBUahcjV17QXu8Ex",
  "key7": "4JVjNfZrGRktERtJ6rgSciLqHabDQgk2A7nKynunbvsWT3UwbMdcL7aNE677YJbF1jAyok8fCQHvcxZH18ZiHRoD",
  "key8": "23FKenZPTQT7J4EtP3bpug51Gp9sPjxAzNxEHuiBwYipBLw5gy83AP6Yw6yxWvJ5Ya7fKnHtqzKeiRwCm3gyTFqJ",
  "key9": "2qAZDCNKv1D7KLW5drDuJXVtWnb6QmJns7AEV6pDWRMqg6wXUoRMMf5HNX78iQuRn1RYWQFKZEoTL6FCNTM2jVfb",
  "key10": "3hSDXEbbnVyHEvuUqwh6qdQwq2rKTBW5cxkieWk1H8LFxi2XqJfB3MKd3Vyf6ygdKrNwJruChqcjSnj8JLPfRkys",
  "key11": "44hBv9xFXcViAS9jDQs5ZfD1zoEtWVtMwupRX9QB5TK8VzvZHwpoEuGNiHBySFav7YePVad9zqEekAwDxk8tJcUm",
  "key12": "3jojXC1UKQsSFTBsfoc7BVP9bQriv5VDgfrLsfprCjFz3acwV6orAdnPux5XrkAsdUKvsYfeNzxiUZFnVcbyoE7v",
  "key13": "GYwvprzjbV2XQ1LYNaa4jGiMjpVnCEjuaa7TDNcrRxcL6u4xfxrRWNMbDExyQwW3btycKdVq819mwDrxCyXeZ2n",
  "key14": "2yEgAoToRntpht1p6s9i8jyM275mJTnrB2of6yDSmQwbjvXKCrrLLkPPuByjS8cPRGqqAnnCDocPzfwyX8PV6azi",
  "key15": "4Z3PR3oPW5ksosfeqRq9bmKDqfTWqhoE1LqLdxjhA66i64vsrJpxGBjEe6i7GoJkeAWx1U7mZMCAfXHoQ1xysb6z",
  "key16": "4RNDUr1c57Q2hGxUZzL6aNGFeFqhcnd4sARNGHbHgBhp34jtDZur8fn9y6y8T2y3VfxWdENjYR47sudAzWgKnjoB",
  "key17": "2MHbf2343LXVAGnUJkbsdukVLbQF7gSMeXpQZRRN59LDc8Q64YqLP56V7eEoHvQ6tdkE9gBK3NQXkfsMXXtWk39v",
  "key18": "2WjXBzAYgjhmXTTCo1EsHTTzdGViXQSDDuSgYa3aB59DZ4CFoSDX3NKHw3wu4U5d7T8jy9ZGze4p4pNLTwcbBRWb",
  "key19": "nAKYSs4CUrivjaHthJhYYC1KCGXfRoGN66P2AJn2cuTUFT7tgYPzCrjU9ZeHA5QwemQc5vWRVyALtYbKUmcihHc",
  "key20": "4CKDv4k8nKaV1g9sUB4vrqcipjEA8waNCm73odZJwVknchon9gSRpcpbncn4SKQbFJjqs7kZpvTcfvc7etm83Uqj",
  "key21": "46MXoTVs9ouUqdLUvDwFFFqteHmUt3iBWrpj9s9coyyfnaA8GHKAt2ygYTSmHrHuNbs2KcUBXjSJKKT1ud1yKBww",
  "key22": "iZDHLP7qodzwVkBpA2RaZGr4aqoZB7bhekQGVgEJrZd4xd5UpaFJnrp5jVpJvotL45F9g2n51X6ykf1yxedxUBw",
  "key23": "2zkbTFDcoLuMViMFvXr9zP6HacaTZSmNtiutK8QhTVmC8Cx7m9wX9aYweZtG7AGQJmmazHnDJijKkzVkUh1dpRt2",
  "key24": "3E8HvFHUjmo4KjDmbZpeHmY2SCRu7D6BfkGB9Bk7VvrSH5Ju23GjbcspRedKsuum8P6nK9b7s8hovuBDVDaXra8w",
  "key25": "3dxDsGuEPS4NpfHarxTxiyGA4FSppPLDRGcBMAu8ZX8cfPhTtucfKuPfymDtPMJ5buuGsHnCzu7GhArqf4ySyjc3",
  "key26": "3veWr9GtdAsq3ZcGEWjE7fo3wTHVEtNippway5F7s1BNiTo5HYP4vuHiJsgd9dEiMQwKChs6ymCiXmyoGe1UaUMs",
  "key27": "TzhSbgRpCe1uFy2e9qoPpYSEsRHGM1XrHGKMAtKXgAqDgS8U5jqvngF4vSk1zftQxb7Yh6NFSTCM1txmu6MU2Lf",
  "key28": "3TgVwB5mAVhAAKz43mBBaZC8ZbFnL2FDKvmxU5LEDFaLLw8RyWAYnZ7U3qBLyLtqoqo8VEyQNvNAwmt1sDC8canc",
  "key29": "P4eDXAdapEHL7pUBsKL1muQCDXqzAqLjxTp8gNWRTSq8rGc459aHKAvjQ2S2RNTLaQqUjNn1vhdQ2cRKhWVf76A",
  "key30": "4dzji9bHpyYTxt2mUzAe5D6rUCagBmweuwAJf1vU9v56pFEaoMKmMjpFTpoPVNq1hSzPSdi49P2CVhe28AjiikBq",
  "key31": "5ky3mGystwDYSbhdEZaq2vJhFJiLRQBmVr8Z98FknJDvHGyfyN6zwFtFicsHp6ANHbLQysEUm3Rgg8HNr3s8AHgp",
  "key32": "2LwMcnDnFftx7rD813xVceXkvw74GsTWMkEiKRbbMNWEb9uMThkQrjQfK57Pcm8zmu98okuQ4VHVoZ5Cy5QkAmhe",
  "key33": "5wZMM3k8wSvhv47P6mXpgAZZxbmW22oUzMApeaLKh72VyhoBwtHSUbdNDqrhjxxqveVDWVT79yCJn6LHXJhyULg4",
  "key34": "cEXpdrWK6JNtc9ZyqQST5txTrah8r6y1NRiuzzqzGXUFu2TPFAHN7oBaTF3MdGYSfn2ehRu2tGHRR4RN1x2UkSN",
  "key35": "3gQR7AEv3pssCoRuWvVqfDhZkgFNURNGZ192oxNbDAX97ZtGjPYxn7XozUKEZFZKHK1FK6EvJ2Bx5sLEie6scVyk",
  "key36": "4fTYAGy2jQccV1pqaMGsEvcBCKinuAmxYayEFF1oQ3YYbpEfNACfuiQk7ZBkCsHFiZsKVGS8SCYGFNqgTa5MywQn",
  "key37": "5S7YeQMDv2AxVD4JEgpJhF7e1uDDft5inP3ANGb72UaVYtMbu3vdUTGr2yW3DifxLa9kG9og6epLuxC3KgV8tRCg",
  "key38": "3peWFWAFg1C6RQcBHPebZ9Kec6cw4BGCvjhARkfUKkxdzv4HMbfTMTLEmZNuBZVAB7RxsZBkw91a83ovELfXB3VQ",
  "key39": "34Qm2i81sup9Ngfwr274dwgrPpWruGhKjsPcQptKdPjiWhKtnJQxpmECVN7KDDRVWSMP6oQqxmbaWZkDg8ornz98",
  "key40": "MhEFrrST3SnkR9TqreD4iBEFrfvy3nToAyMnDDQdMrf7M2UcyF8CDgSy5u7BBbQQCR1vmwSijgy8x7rWDjeAk4s",
  "key41": "FogyLyANDQZtkR3aFGJWdabkpsDL9UFBYoYFPHwh1JrqDT2BXnensJyz5iJPbxEd1qnQxuRLR6bVVFoYcEZfe5o",
  "key42": "4bSTBp2ffFRi481Z9cUmVKtS9EdDRaiLhVeQGyEfbW93ykTtnsLbZUBKMqRTiEkE6pLj1ejfJztVXcvmxUFoRbhm",
  "key43": "SCCAHatWjXu6NkAA3DxFJYfMtDTdXMPB3DXJjgt2ZGTH5uFwsqqkSdEPMT1zFQcc9vHvg2fqskWPayYHVCapkdQ",
  "key44": "4NAYRTFQzbyEJQF4cFYDPiKvMZF1B3PQvReYZiDGXfT6nKc7dnM7gwChaYAmGHRxExmzc8uJhMVcqr7DcPSXZyS",
  "key45": "3gus7AT5F8wnGC2xy1TZudpUdLbCjkEDQtDzpMk7jLetf5UnDug5Jm9bkUb7k8WW2ZSppKBQPDFB8hVV8QYNQNrm"
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

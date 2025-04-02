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
    "435wFAxiUx3jVcjMSMMxeUeMuqQze3QUXEbbAyPHcz2Svjy5kahDLGfzGsE6j9dZtJBa4NAaM6uQvQmCEVfp5Nzf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VDwdajA1H46pAmoaCu4W6jGsVE9TyZBc9ttN274byUENqdLFvW4sdrH82cJSsbZaN2NTSHS6qvLykB3m7AKiDi4",
  "key1": "9GGUjZ8KB9WWBJFfnzD7Apijja2Fiy4A48iBHSkVvFobFXeVTdZqEaJHR2TLMHKVmHDq5rvWGe3LfRNEoaKR7iR",
  "key2": "3cr2E24xhbEyJZExqfCaqkAF7pzCEEtqBbUmsoSDeoo9Abo1pN8TUv8gZhqeuzKkcAtHqwDSnrqZ2W1BkKMPH2rX",
  "key3": "5NDzNsH3ZL6MdS3mEuUEWz1YdVZfTTLXn4bUEPHo5HLCoAdeSaJAteBbAznvu7g36MVrB2y2BRgd6EKcUmYkP9zB",
  "key4": "3aBxz7v2J5gPnqArYgLvSWrPMdGgTLKASh3GHYUvaaTh9icF1qrAYvUnznzBsoinKM7hCfnbhCoLrHaHxy6bdF2G",
  "key5": "LwHHjJVSLJDNi1JFe1Xif61o3YbLJMYprriN1p82RDfmWbR7oRRE4WVdzGZLDwocsWjmHTNkUShinYUH7fQpG3s",
  "key6": "2PLq4fHyXBWv6rpXSSKsxrSgQsVk5xeLH5oVSgTpKQCY2MpLsk11C49VGD9zqZDFjGwXh5swm7rWWeeUj4QCchVe",
  "key7": "36LMHtofxNACqbjPygxQDnKbLLhs18pbRb5ytoZZTbTeByeCkiHDtLAXnvsFYs3V71iFLyNLouADa6jzmmDtWRJr",
  "key8": "EQRFfKnnqVixk5YKhK7QpcaFYmmGQ8YLC3MDQyFGcWjKgKkQTnhrNckf2yxFXCsFcKAozc685AShoCC2H59oJcz",
  "key9": "4FPe1cGT7mYsTWqh3wjmVj5BHqQAPokjoa8ECQABnUkEbtuRAk5QGWX6PubLrXba7ZcBg7RhE1jQW8pRhZjrVNZf",
  "key10": "DzCoXvhCKRz22FesKFVbFt9oNRXKrzPMyrnz9H8UTbFxbHkv8PTNFTqCJa99rYP9Wg8tySsJFi1ijgauGHiNHhr",
  "key11": "acfu7GTP5VkyTVPk5ZTMuJZmCzXbj5xg6hf3bTemQzG9xUa4rFiMb8hpB69MAfGz1gBKZo1ABZZeTpfPNnb3oqP",
  "key12": "55zPMNPjmQxfqhU9Xnt7Kri6MrCk6RzxuLJGiPJ1HwkCSQkEyEFGJVsrpAcYXxH3cWLX8SuGqMHy4KRxg14ozQqT",
  "key13": "4buJwRaegNxQkN3F3E1m3Y47C2G6r9WLdEha6oUJuB1FddYykbBz8sg3e6fbfZNJTvz4j4mr2KVbEreok2pxDKNM",
  "key14": "4UC6E8g3jyrB2kRift6zcanYoEiBzdF9HWcL6C7yqS8FhLeJsi7dqZvkJEvZoTXRfPF58wKfDQ3hyk4nTRdyyopv",
  "key15": "318GbLjS4ZcJz41S3Dzmp15j4qc88cYkhuB4XkoHreYQjQ2HqwaZBYsBTdhCc3aB2dbe4LuDYEMm5MMTRaEGXR5Y",
  "key16": "5JAzct7m24iumu8FCwaxzPaNyRiDiQ1a1geQKWXuJGiRSLT3cjr3syXddRTe8Zn43jsVWm6hNs7tHmbJYro92trk",
  "key17": "3c63hTS78hqLdk3FaxnLmWNmErpiu2TJwXJNKy8YcVseeWiCyRjHYK2TPySbhaUoghgKV4E3qNGXfRiADZUiF9dn",
  "key18": "3ZFWZiTXXLFNTmDKUUDd8nrAYyAaseve15RJVMkm2jFmd8rdS2Fg4J4U2sEyWAcc6hgWbg4QWMQvpzq4UhZUPCGb",
  "key19": "34SoYTgYg5mLoZ2XvjLRBmU77M924KW214j2AHEh2zd2SaSJojzrgr1CvWZ4gM9cEcpwpCzpn6eZHPu5BTXXsraE",
  "key20": "3bwQNve3j8oyqCFEfiVEC5vmsagDgnJkysfoxeasL7QRscen6UWnH7DZVsmnEJmq4Pzgu6LKvtDpgeEpCsxqYoek",
  "key21": "3arJxiCwanuY2aV2PagV9TB6YgYKbTaGHoWSBBnGJY5tBGapLBBTDxA1L73S4uWqhdQtuEzMrxDQ9WzLn6SPkB63",
  "key22": "67nGHM1jYX6NpFPtZ4FpBdQr3Lg83cRn2EgCczikfkQN4bS32WKpJeR8vwnnUEgkFz6pKUNN49hcixckn1n6hsym",
  "key23": "3ecc2bJcTaoHpDRvtNDcYcUdeVy5yzHmpvjtoNeWcVXE3rdo6BgP511v2EzT4kkQycNpHXcsHUg3raLazC8Yzgqt",
  "key24": "4P7A9L7f32mLq4iRHywZZ2PqxnCEquFQiSuKDoApdYQu1hAdVPHS5azwx5JickUVUoNBrDKyWDM8FquPYSyEPLEc",
  "key25": "YoDPYPUKKWk7ZKes8XcyQ1WymeTeLv5a7quUb3RFLKJd4cBqTTairu1WDpfd4r2EHSDJdgDk4VXtD7Vc8pRAmDg",
  "key26": "2YS6TnyhwrwTU2RUkmHzGoWLYXgsnsRiEsXhbtwk35jYRWKS9uQXKDZt2HunCzyzWTuonc9TryRBmbTUj8zAcxwd",
  "key27": "4oZohsukM1v3aLzXuYZGcLPhDa8Lf5FrNX5mbEGQPhy21NTTZDD7J6yryEPLtLMwycLueWy9ZX6K5ZPx5Fv3NKvv",
  "key28": "emugecRbhuGkqVMAnAKYftwaPSwfa8RYJGKRvvM6M7ZJPoCtGnXLQLzkCjeM1gYejaPk8Xmiyp8zk32JCqq9FNe",
  "key29": "4yUvWeEU8nNvYZ11jVNDC96p51bHoWr9hx5V332Tm8iWYHBpouiBuRmJgMPartHgvqGokrC1TYmpRpUGdoL3Lv9J",
  "key30": "2UsxPgYmu1KrL3wCNpAoKhpwxFLndzoSjcaw4ZjzFF4GA7Ejt7vFM94ZRbo3tyfUVd9BK3oZqHDmDJA8oGH6xb1i",
  "key31": "5yiNYDKQHq6K36cYP1jxN35kZcCjs1mnxQsESMdhzVkuhpyD4uiNEX18GFrC9p5PJAr64DjVwVfa6ZqbAuCTR9Dd",
  "key32": "3N37rwrKjZqVKLf7ErKUY3EbjudqqNJPSzPSvVPrN3cfCsYTUULZcoAUE9Ebk62xJ4fQ2pmN2SMZ1GHhmmVReNE6",
  "key33": "5ArrfGq49FURXvVSg46ohWpvFYhJD3KXqV43LL6uZKH3Bzh8ABXaDagaHUZ1pqtuvf9juqcX6FwtRHHrgjgZyseQ",
  "key34": "2fJDYrYdeRyyt1gyMc5NwcNfpPvsbkwkQDzeQGaTuxePtwL7WdXVkH83tqu2piif9Xojy6WJcoiHipGAzsgb4zwt",
  "key35": "5os1rJbQW2WjHFuhKJjwZs82j6w2GLN82cvARLGUrRBHbghRvY4wrF6CnyXCxLukyjKSUvssXkuB8sJDdKuMMtQJ",
  "key36": "2Haf3dk4y7ETdC6SdSMr44Wvn4BdBWbHeQ3AVmjhy2uSmhgTSwXzorYG2HNGKvfwtY3S6Rdo6zcy7ssXiabWkHpv",
  "key37": "5Nc8W87LG7HSSFzpp5xHGUzLK1Bphuuhhk1mCLp9GPDLHKDbSFF2Zh1LCzT9UQ6W8AxXaErdtdwiHz93b4fkjcVt",
  "key38": "2juiT1pSzfYe4sLnhwXcekmBwaaR96KvXNiEDiyX7FRBLMtQ68v4gBdJd15ZMKVEx41Wha3kE4b8hSx6ftTG48K7",
  "key39": "38XpkthFvGdURJRXRfuxjvgxDfRGJdrnnAUpMwiAM3or6TVp7MNHMj6PqtsgsqbfYv7CfwrYkyC4D6sW5m4BtHs7",
  "key40": "3GD2wT1k5Q59g8pFBrDpP78xd8oXjVoh63eFhXy9hViVMcJMi37mvQoYdDfRLgBUU6szXJuMQrxj4xtrd6roRG15",
  "key41": "3WHqFnxGup7V74VaB2mXDSL23bx9vwsGFrj9mH3EFQzkFTvwsAb9ZEwzKXxkcuug6gNLuQXVrAnfKx9W3f4jShCh",
  "key42": "oGc2pCbfAYyHvDzbdGAnLLZd75iJmkrKZSbxE5J2FQXvbiHHpJDMemyZk7PYn4AF6e3gsekLYQFKC51TZAoDLKP",
  "key43": "4wrLAKzRvxpJBMH7NWfowJC1Wo2apTe6T5n4KdHToeN7rh4FyvyY5UcB6z1ZGehHB3xvReSvJFCDzzPL1GQz77fL"
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

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
    "4aAbK2v9kfZbFv3VfYY1Wkhkoe2jFPT7wokG3cZQZKbUsfxmJXkbgSpTYHFk76EaaAg9hKMQuCaa8eynPpnKp38i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iZYxz9Lf8nWkViRUFWzedqhLdJwrpiX8zRcHkFtEKDFa1vKohwTkkzYsaNDAdkv7fikQ7htMFMA2H5AZfBwnf2V",
  "key1": "635p18YGe6dnzcyqJX24bzB592DyFjPXgCcUnbK542rfEZkpMWN9rDKqg3YMNP5hpPFzhkyPcbssppUJozHEuEAx",
  "key2": "ePMqhYCo8NqjStyLCGqXYBXTjGcbMoiJQQDuZubyad9KaGynorSAJCeyQo4uFgUW5d1oN7HJEFxMZf1kpvBSaBy",
  "key3": "4XJJXFB3tZF5bLQhwpRtxS4aSKZhyjWeLPpryY3nYF3wSGtD7XKf6mWLkARgc8RmHUDr5LknGD2bpjQeG7bb1dbC",
  "key4": "5jcGfvxXb1gVbx3aKfGT37dgNgbu8VwbW7krgssbgjfQf2nFw5gxmfy4pAQGhUy2Hhv7RPsMeaVysM7qe37Xngco",
  "key5": "8J61bZrD9GwmTunXEm64z1FTpmc5GbePdyg8AbLYvUxRZJrWCY4NBaGQe7K1VeADyFkFTt9HfdDXtYbokgwVSNj",
  "key6": "27V8MESYxcuB3a7KKiWVU8amPgQsHaZQHZM2p2jXcyNEWYVvJDebvvdpJ3H6H1nvN2SkEf8z6hCBompcvhtg2NxH",
  "key7": "49nbyPsBjSpzHEtano8gtnrGteFBirxsvNCiU6t5JhSBsbo6fr14YHDRsdooFJS8TLEV9u8BwGen3NdBj4RWaSCg",
  "key8": "4yS8LdJoySRwyAB8XQbg2Pdj9qNkqRXP8dxBAXsD6iPynedtPdHPRpageac28SsZzpth3oJx2XgqbvkNNpzgM3F7",
  "key9": "2iV7Yb5mqPba1vZr3HDwczL2JdG6MVTkcwitKAMefdGfBjGqeZLzCr8iANK9PSPpBoVQX1dGqerQA2LzfA4ctKRh",
  "key10": "5F94Xpywa5w97EkhCLNkRsWD865RogxERpTNxvXEeWgMngv7fGX6CefZKa28JMykYkcvHumaa9DA2sFycKmZ2Qjj",
  "key11": "48WQDJWxB9e49qJ2cw99wxXJtTh1i8zssvD2aVG4Ep915GWhWShT8kHPPUr8VKNpmjVDdYrVVwNRuANZjfSW1ANQ",
  "key12": "2mUjHjwDxBda48asmjnPrj43Fago4KLAfRGJYrec2PkvDMcgiGDaDdpkMEcXy9aJJPgEMUh4V9Hyze7ifjUWDfTc",
  "key13": "2Ba7qgjV3xhhq1Ug5kbpBH2mCZCpqiEVQ2ph4SiTCnehnvYdhbMFdkEuo4qckMsFNrnB7VAH7uCxFKKNY6KYkQc2",
  "key14": "heWmZCcMy3sj354X91YedB1RJ7hdwLV6JCG2NG7EbfG8BxinCxR8LZUvNocV52rggtsgXpFMDtaFBuLAoNv6AzR",
  "key15": "4QssDnkVZo87WjXiMRH91yGx3DamojMX3MArhEyNCJyY5x5sQ8yN7TaWz1M5YgfNyfNbtaqVtxyibdHWLF8HCh62",
  "key16": "4HV5a3rviyQvSoTniKNmffwdBni3NSUc3NHjVWPKgCJotMcLsr4G5ZwX2wkovuXSbVD1aLvseW3C6v4qHv9gRyPn",
  "key17": "4Wr2YU79iRJb1vURSqZhNR69t2BooJhtSjq3arb8tnueYB1raEzJFW17F5Q8UpAABDWTivvmSBxETCTMg26onT6k",
  "key18": "3QY9pBq2PHJnrSKVR5QHZ1GMun5zVjR57fk9sVZvanxVaRtYqbnMX4HRCDcusRnsR14sAikuKMqaqykr5W84U6GQ",
  "key19": "2VvXUKRcupKRG4q9KFvdwhWHqbdAYZNgoVq9fBje39CwBC6u9cRSbyeMCJV53oiiuWAacvnd625pKo4HGzj9ZBB5",
  "key20": "4HHhZNvwHB8G2zEBnc8nfN6kJ46gWwci6oWDyn4T3onAo3wChVmu9yXcDXq4m3k7vrbXyM9vrjLZVMVaMmoG6nmL",
  "key21": "49N99UtsxMLiGyQoAho73DkDma3LUF58BzrgZF9prNJqXhQTPxoV5vhRtGkjs6uiQVvaHBi37vrxxkDHEETJwTPQ",
  "key22": "4Zdz5wxBaJ7EJYkvbdaM6dBEgCsMpfwoaPfT8tDahjmgrMY2p3hYh9GfMRZ12YGHfViLC1J2QTtkXgAx7HRgeS3s",
  "key23": "2dUvkpMVra1LD8JTRPrs8h4eB7EW2mLnJ5RL185KZYqrD5W41dA5avpTMNBU1hxeCc53RMdDupdqJ9kB3s2HJ6R",
  "key24": "23WjXUyEvk5RF2bLTw71zBZ3XyrrXVTtLn6Pg6WUKH2sMeXqZCQB4cG7kdmhFrbkQpGZceToF7H9SaJH2enxcS9N",
  "key25": "5U1pmW6p52W91ReE7tLXu2RsvqF3eE4aDyJbqek7E8evgmDak7UBGpFYPPoUrmLWoYwhr5kiFE5xh1ZN9KRYxe9n",
  "key26": "w4ntWz1YJuFSsidcK1D4QgsEerQ1soizoXgtW8Y6WxFThnShyHkGeatni3txHHTwL6TThXj74aLnzghQD6tiXu4",
  "key27": "3F5bDY6WLZ1rVtNaukysAQErAWF9tE24ET3gy939cjLB5qNNc2GJNKQ8aDhFGbtaJe8RQccCGP3x5x1iB8Jrrhck",
  "key28": "9SF18xF2CdKma5jmAPZvWhG1r8mxbv56s1eEw6uRthGy7uCvY95LbNRZg2Yiq9RQt1hAmhZ2ezGmAo1E2hk1gpV",
  "key29": "3vpymy2HPcf427GYCD5cekGMZqsJZHhaYotMsZdorbbmMj8jtAFvZ2Re1iLDEk8bqMdEUjysaHEDFCzfW21ecXYJ",
  "key30": "2SnxmqWC7y5GoCRZrSSoogMiVa1zTjzAGSkDEqeRPcTsdkArFdrVcAq9h3PBKoYNqwF1TBtqnJL63Dt11bcRcuZv",
  "key31": "fBNhkHnGtFp1FmSPsbY4b9nQ213dmuGW5pF3dDnxrNWp5LTuThdgsH7jB74YU6sNrMFtkcS2TiDRFi3aKgeq6Zh",
  "key32": "5MtU28EJN2F9B4EptMKFAeamiQRSph7djK7QzrG1jZ59uHcxiTpHURLNQ1Vwwu4wCmGQ8As9ox1JYfTkrqiobfCy",
  "key33": "2T1syP7iTKtcSVW51aiwPMYCfcqmwKsBA5KEr5Lva1Jbvz9gJJAtNRMfwvwyqrk6e5mbqjmfxihgvFJ1u98LRjJs",
  "key34": "2GwupBMe4U2BC2wwLRWuuLhKhmYzpezrGpfEAY7kLcECacAednw5kU6w5gey65FFhmSY7DjzrMSPac7fhGmXbXCP",
  "key35": "3xfYQcwqgXTNXDKiJQ9WcqgrBrYF98kocpkU99e7DRo9NDadUKroevqVTSkzZBLWTsA1szxjSVpnT88gz7CHyoGr",
  "key36": "3q2TpbHS2up4ZMNJh48YpQ77r4bhj3mqN2XLrXMGPaKTyXakHyfXJFe5a9AER6bzJzBGdbRZyYMEddR6ULXJucEU",
  "key37": "AAsKhc9xax2kXktWKBSyb8mLiYBQ5T1B4yAAK8B2RDohfzycmJeks67vnCkeNdcMY4jjrR1X5QfMNNZHD8oVfJ2",
  "key38": "4bGCDkxxbEhhzyk5QTszZvUKjpCgLUVpfBccs3t5mjPQCjzjaD1BjAE6NHjBe2Ro3BhjFBY9nAgQ4jJVYX86UHsa",
  "key39": "5xBS9QCnMZBDJP1m5x9GWDtJmnKqsoNFmdpfVNUvcAvZBtpdJ6ZusLLi5T3nYrDnreQ7idFcfe8vSyxXs3hAeHvM",
  "key40": "Bjzx8X2NpxGvmaDoWfnbtBRk2qw9dS7gxu6ZRpFLNcwrGVyTikCx28DVgrcUJ6CVxczsmAJbeWzT63huoXorHCs",
  "key41": "3AdktSeFcZoi4Q5kVbs3cXPiofMpX3agivUoycED8qH8dUCbVvoU3Qm5cFpcuFHxJLTxkiQACHQgd3iHaGG7N4Z9",
  "key42": "2VsnFKpAVFubJ3FmT3kown6V6TPhN6hewt1kE9Fw4TTr95cemwVFrHaQbCQJrLHTtDbRBBjtkroB8jXkGWuAykan",
  "key43": "3h9mv2HPNnitnZXsf27n7978qgfR4kP2oaFs2BSLCdRASgtxMsY9cgq11HgNhBG1tW5H1bb949rnmkHCUsoA38Th",
  "key44": "wastwojwppPyDyYQjgxmtkivPfZZ8GjdyK1oR11m5ogb7X26zSXMsJp1WGEbtyBUF1yJEjZTihbzRaAAkkGVSuV",
  "key45": "25aK5kwVfo2qTdV4TBK5HZczpEfVxMqFjCuZusJ7uVLJnCzKjPQR3GA3akk3GUAYufTBzv2oUzFAV5o4pZC7smxh",
  "key46": "2ZkcyeZMDgpeBADht4coiwwVCfWftkV8Tgx936QevpFg8NJkRUyBhvaSjEyawXzYXzN7beHce6LeKiNvP5MAXEfu"
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

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
    "2xFnEEiPGMRSjSbnrg2JHCeWeupxBJ2MVUwmAfHfkEv9EmevAPfpW1wJaCPJBjeX2EPHqAut2mkdWCouiCpVn8oa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gnqJaqYF1rJTJf47xTLZ3bzmuRa4NLA7Anu3tPiCgkv9acmbw6A9wGyfMmY1xYU8kf35LxHucLxvqquK8HMrT5V",
  "key1": "5GZtTQgvnMurhUUZmuxrJUGuGg7AnhwgzMgCSK9YYraGmkpWtaVaFQSiaB3BdyiujJPgkoukoFT4wdxciRtwvD5X",
  "key2": "2MVPhwZQYifTbL3BKYdHjpoH7nM7wDSvJ5rXJeNRZsfya9DwR91FP2QSewezatLMrM4tZpXQ49Pm3MfeFGaU94qi",
  "key3": "3D244uMuyRCCuyBdLXyxamHLn3uZBYA5nUqK5GVMxy7hChTeLcBPbMT91Yj5CmwhxFfQoPBcuFsMXwooj8NZaP7N",
  "key4": "2c1yzhuKBHEVLe8L12uzcGZAfY59Hf3HnSLqYkjrtfneB52G1gSXVgEPHuWwnrW5rLjKuERyZJKc6untsjseSmsb",
  "key5": "3JeZrKJqhtKWLkHrhe2XnG7zkLy8dPqjuhrmWwVCncKdAEVBCeXUDSbucLkKXP1CzQTZ7DjMequLbiTZ9bDkP8p2",
  "key6": "32VL4mR9BCKk1fG5XgyPGRhY6qSVUZdxP9R2sDnHSVViwEQUTL1dEoYyiPQVrF9qxnrVXJAyBcPy1DrQWv4jnkyc",
  "key7": "5C1YzYFSi2FE8ADNgGZGxZwp2PGm8UWNStoPZHkGqboqUvbiPnfcjBKswncCnW1VTcrqhTHTJAYLQmsU6DjGLtEe",
  "key8": "4Ap4fooyYhgYdDzKBu3TAEsjU41BjAwDFET1wD7S5iibk6nsfwWc5FrNGEdTszSVEbE3ZjWaYWea4ktrwLTqoAkf",
  "key9": "3CN64UR8qzJMD525KWYNmx82DNYrtUp1hycUjScVtVLfnZAQUmQhQs2StDjY98JdBXwB48yrmdpsyk16XUWptQeb",
  "key10": "2XfEY7eMvQQ4woNaQvA8Up7svVsYT7xU6gX5UeZKKXYDTLYunoFNGigEgEuZGUwnE2KEy2xz3wVTZ9dyvrukitvZ",
  "key11": "DrgsiLg64VifXL9LBR5xJWzKgRDyvyPMZN81Ck375xSgVMiXChLXZanp3FM29pm5PxNimqo39HoT1ZKg2DtfwiX",
  "key12": "5r36Qitb4A95XGK4jmaSEaufrYg5891grk1JUbEUkCGnsfS9X7TXGZhFdU4UPChyeV5UPgtcWNexjd1uStsrk2UY",
  "key13": "8X58awaxLHA5PfAcxdMLomprVtfwmGGgXSBpphLRwjF3F3296pigMTjDGdrrDTYCP1WUkg3ssyp14TqffaYQWPq",
  "key14": "vf7bYSjqM4ViPzB4XNtos4nBJW8fmHbwZHqnz7JURj8srr2mpU1mXHKPYC9p9EzhZE5bovogBjGDSPhiwNdsfcd",
  "key15": "4WNY3UBn5nPy1rkivW5Fk3cQvj8MbpERPprHnpe6rc6MJJvS2E6v8U9q4hMjrqPkVybC1QbBia63e9qjZKrLZwnN",
  "key16": "UxirPonL2UBErCeNTVfKk4b4jHnrW5vW7nZJ3DA3gvpHRmvU6SoKDhH7vkJf4g5axDU5ULEpzuSkDeAjDhVF9pE",
  "key17": "En7i6aXssSsWu4pfwaD9fmzyYCaLWx68X8rBskJVgTfBTRKBg6vzKZD45xFvZkoanUQbZUDCLUtAZSLtWvMGzyc",
  "key18": "2zXEHaFJmhET8KBZ3N55MNFStFVHqzACqdD9p9SXE74ERVTgFNQoVTRNVWvWhxRWGvD8hfjLK7pPpLRRMfLjxME1",
  "key19": "2vgZf7eCHkvA432amuz1tVn2iCuTz8xUjWb2fd57kvKHB31NHYsL3KxXkLnLrhecAGQcDYrR98MAgG4KeHxDhWPQ",
  "key20": "5QLuCCwMqyfxfasKL8Tn4RLmhBA8GNL5TidfCKojAmqjAwbBJFLzo5CEvb5t6QfkSitHTAGqm7za7gD99aGRxTKg",
  "key21": "37L9DFEdzoboFr32gKakvsz6cr4f5juB84rnizAZrF3Nan2DoJrc8E838R5QYDoRpwC2SV6SM4gggyTuqHHXEtxN",
  "key22": "3TNCVwkX7gdmA4tnQP6vHuxMijXQmfAjXw3QLTBizFZzdSBsHCgJPweds8E387Tmz3k2WajbC982TD4Ajcg3GEa7",
  "key23": "oTxEMR6vqxZKHRz87gYMLhNA2sqoCJgxiGPn7eymE8H8j4agVBonY8NjAgfS9PBMkxK5hQuhJPQ7kWYzaU8KbSB",
  "key24": "3S37iXzQpRZFETnsP4MMtt19Je8ZfyMd54CwBDhBrBy58jZZe6fWonfjmoRwUTrNpFEPqKX9VE1p1jfcjeprU6L8",
  "key25": "3RU2gpWXQTFsM8SppWmLQ69jGZ2FupXbzoAh3CoFUAKtsjDM2HFH7CiRoPpzzV6NgmpJqPzUC3X8nT6scktkSDwg",
  "key26": "h2pwJ599bKBxgRVNYBWUNERZ9yQJj27PZ1kw5KfhorAV3sc3pw7XR1HZ62ywpinPkztEK1ABL4rKSTNTYuCUFLc",
  "key27": "5ZFL8jZu6q7Thn6zXcSR85PzGFhhrJ9gCB8TZzh9csa1ktMJV3nyenpbQnnv86XeZQDuSmPkb9EGZaKpLPe5fTAK",
  "key28": "2pFnXcQKF4Pbr8gTy5BLSyU5QAz2KCHqs3YNh2JwJyiJPAZG9d8rMLY8yZVvhUQnsuLZ8kBkMBpngS15dw6huD4M",
  "key29": "2zYG3tMiqxfksYuGruFDtAndBv31xXsWbr8ovkuwQnWfM4SZyu2ydLW1PURFsPeQJQMSkWm3LdSbJdyVGmHZf7S8",
  "key30": "4NUyqrt3ZTZSrgeKL8Sp5NNT4mrdkoCJDKVCxAQ2nYCudMj3mkoynCeKVtHTh7wFeGM5Ao5HmMfv5JmsLXFYpdnb",
  "key31": "UcGwJ6poTohW4LG47RggZJ7GZDUrKgwDJf7w4hoXopnchHKpYhsiZTGVhZ83bU5n2emgRToiiNrHxiEbA7QrYsx",
  "key32": "3DWpd7U66RMUSuYnPQteRZS64nPTm3fXz2jnx144k7u8TV2LyNXBRrwTZqjqyRe2xErMtsvH6ughGMm4fBbhR3ib",
  "key33": "LqZpoTSW2ztVU5pkPWzQdzKPwGGZ1WLeec9JqkZSYdFCuvUbRDiP22PfpPVfuhEHgebPizSGmq34N55Bm7KVgNK",
  "key34": "5WbZkJALYqTCA8Ph1dkJjJkdSGSvcAeyjqYKsK9jo6xqbCQ84Zwdbw3sDJeKypa62ZvcaJmiEiHzTZvrH9u1c9QY",
  "key35": "MTXBmcYTrgqmejRo2vzsMZVFRpvzqo6G7xuVHLAxutYGfQukin9sds8ye194Kf9vSsvBAG95LZZGT8J4EkNMNG9",
  "key36": "5Xcxf3AwSb3grCzW6RZrVW4QmUVmx2DGabyTZqaSzhnCY2Pv7TKgscGzxeBeQj76vgHFWW9Zs4KDfzsMMGjuKqc3",
  "key37": "2bSd66aRrwzKowcuW7MWY3L5AMCANLL3NEh5G2BZnZArTRnCP3697dcqaGeisnWgkdCZ6RnixMKh6og6FdYufqdC"
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

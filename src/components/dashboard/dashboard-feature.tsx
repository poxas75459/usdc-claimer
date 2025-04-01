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
    "4cUXmiM5BMUbTgj8tdgqUxz8CBzL3ygiaTxT9tARKVckPtetWVb7C8JfB75HTcg5VUs4jyBMHamzcQESjgE2S3rq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fkQgC37BauuaD2H59dGDBnBeknRLzVrMY1ohoYnpX4WP7GP1iPFWxMEtjTnBDA8YtW9zwxnRMGE31JV4E5ARyJM",
  "key1": "5xtyec994wmzDcYMwphjtzKfMVjJHuFcYaMaVXPjqmiWGqJcCF4xby5Gwk7vFJV2aGy8AQ95YpVcm7zS6agwcr2b",
  "key2": "4HKyDT7pg7qiPiFwgPdZZ62NSdcN1e2ai91SuRcdAa8KK5741J2rVX3XdvxpzCrwf26gnzKzSYWVX28JMfT27QvM",
  "key3": "5sX3mBSFAyGja5txvXJtfa8JWM4jtzzH58a9rbED4RgqM186hiVpZbEsS86sb9JVt9o19FFKHVG15W91Gztzb4fy",
  "key4": "PnpxW4K3xbS7YxUr87CZuLb7E3UE3sM87pkKJvruFsyQo4utz3uXVN5JYK9XJ7ZnHHAPTMdfMjY4Y5G6H1ri4oq",
  "key5": "2hbKyP82nutreC9qxErh1LFNvbTHqZtVdoXqjTNFT7SdgDGn1AHdHBf11enZA6RYTzyFd6TJq2ApaqwNeoTUCw2i",
  "key6": "5esM4MKv2fiVBEwJj3ZWmZCbEiQHo9EN3VF5748CaqnCEThKeFh2j6CCxp8ZQ8v43i61eGrx8stTgH6PYsaH4Qg4",
  "key7": "ySdonpkd5qwUuXh4eTEZqALZh1KfW1q9mevzCLPQTEep5LEfjC3xkRA8w2SpxhsDL7Mxips9yoThHufh5pgU2V1",
  "key8": "3EEP8QzGkv5ZSCjVMYbZdQF6MpcEooeuLRmSDhrJbgEfvh4adPLteYgpzwxAbdFRRiTgSjrkhKS3SKKdhZjhznyV",
  "key9": "uyDgHJZqcMQ1KTNz141hQdumEkjCqnaKgngUuNpTV8Bo2U7gbBsgcDKh8w4YvfDjjrg4xCup2mwPPxFFb3Gfk7R",
  "key10": "2s1RqwABpvfrDThgL3m24ttCsV29jz8vdy4Wypcb5Z1tUuZHFDCv2HbeTywiRvrTMGAjK2r9kGzNp9HGDnBHiKJt",
  "key11": "4y9uQ9uBBZGxYNkS7NX4SpwNuWq4AS5S3XWrSazsgMnv5DuwogpGhd7YtPu7L91bT1mq3372Jc1HcTf8N77L3U4m",
  "key12": "2ycqrWAxChVJ9xQ6hxPWCJkeJVTpyMsGDrAKHnv6vKmTt6uczQU4LvKPD1b9ww4rGACHbwtZjF5qMtXdTGsHFuFQ",
  "key13": "hVk91KVYmT2iKwPLvER3w1npgLMiuRmd4Es12V2NQb9rtH4FP5S5WCQnewjdmTLt6jh6TtqKuv7TF1SNZQSDcdo",
  "key14": "5FzWLTyJSXWYHPMLp21E9iizrEP6h7CA9KJyP3JzaMQhQjpJNpfjiQ5ujqPoGRTKC3Z3z5FX6mP9suZPRcfmNtbN",
  "key15": "4uZrU9z6TjbGGkg4yTvweDk4DyarWEc8jp1bzUwPhi8YG8aFbJKm5Lrh39JFxuuCPa8sBLvwrxqtSYcPHco4VpbB",
  "key16": "67DMq8Ch92GSw2rq53FLkTtjisdkt2tDZQGPhTVCqxkrTW2joGKHeucXSHNjFqbBeFniBLrziP5TVztU3qp7urwu",
  "key17": "sqSdjbQJQCqMDWtW2VHu1u4BzsT1xchRoEQpstbNFuyRyZPCdSDUi13FaiSyyD16mZxFcwM7iy9Bhmv56d8Tkqp",
  "key18": "4aEXct87sjQjqGkRRio2iEVmJ44wAigseQcxV7M9PZ3vYR57E7zo8ztKddyJcdgTotEPVDzS6ezmsWX2gQX4wGML",
  "key19": "4DC5Jf5AAWzeeQC6eGReavAWcqbpGz1XNhoHbiXuqbGHQ6RqqZVBw913ZWeAzYNBzUNj6Rrhfo2c9tKvxF78WZS1",
  "key20": "2fY5ybEoRfzJqtuZfkvUtaQVkMZsFxm7mX6jTQEkKrjDhxNXhL6QTCJSJ9L8ozWQfhbAxQRi7z17eEoYDaaVh9pk",
  "key21": "5KtGnhB5adsBgEBHTbj1GzykgrwcmnwWTH9ZjAoXaqVtu38CsgQbD55TwwSJdw83EpKHQH5vwriZ6sRKjSa7RQdf",
  "key22": "4xMg4aXc3S4N4pni7kq35QdhxArofpPxKw1AhnCqfhZvDDyFFPvwTEvCY2gnJbdHyzVKqYKnYRUDCCdw7qWpNRmL",
  "key23": "2ozjFfd8wQ9tce2SvrcTLVnRVYxyXBrhmdj33qsmUWrgtenNmuSZzXvVKyHLfUaxN7X4e634VhFwRqJo2gEBMZQ9",
  "key24": "5pANbPDuPsmNY8ajESoXRWWuEouMmsFRQMdotXCoUYt7nXFtbqAqVoXk8m3U3sygJu4hp4VGv2N23p1hzcFXazPU",
  "key25": "5Rawp3auPkwgSiT7LnpKrc84PMKf8CATtunJB2xXZwiWGXREJM6kpRvx23DuK9qWWNCvqXCvhyYshSf1eix3uLzG",
  "key26": "2hBJ1RTbUpGDbs7vbQHQoeFpaKaNovf8Byci8HRuoYme8z6r7nYAYGsUcReesB9DmtVfhRuUt1UQib7fp2uv6NUR",
  "key27": "2TEEiWqEAJrfvhbE8roxZqBwt15S6eaqukZyRwik43BbpbBgyoC1N9N3TMvqh8Cgbsv97wps8mKKE2rEjwe6KYFp",
  "key28": "4cTVZFt9BeSFxoXa41PbaAbbkPUrdRoUoZWRUFMJBJSazgvjdoxCE1z6rrdLUdnyUieahzuw4TFcok8v5f2H24Q7",
  "key29": "5LAYnZ2Jz55y2AbNkxC5vc7sHAqv9u1UBjHQMoymQM3G84dhMcrpBtTVrrwvTYnY12yLaa6xkLM8Ftq8EAZWWMDS",
  "key30": "5JEBLE41faPY6GD7NpJZwLKhAYjSRS446j8KCwuMWq8adeDuiVWWyx9vn9H3BcSzCwZEUZTRrtjiMK9qnkC8kzDm",
  "key31": "67pmLrU5tXnvxkye5iyVxqyHCwzFUZ5k9UPtnyriPmJwr9WqVnj5LWkQZdJ1qaWSrENJBPHL3pE1otyDC2EPLup9",
  "key32": "3iQAGPGQiwy9P7bZsphXQcNpjmNn1rJJX8VHe9mPosRw4cZpuuPAU8zid7V5jgqrdQGLGZpnemeyu8DDizQeqjoM",
  "key33": "5oZCd7gVk3qL1fJgBh2G5tZcCsq2yWt4MVg34SBhmQD5T7DJS5XqVgZe4x3rQpu2rdWSxip6o3yGXhrh4tygqi9y",
  "key34": "4SrnXYpgeUKtdgHvAR46ZXgWs67LujxDcCBoG7KGv72q3B1juiTCYvjPBdhgcabxybp5ks4CoaCbkma2NrM7owz6",
  "key35": "5tSoAdTPos9bSCfdDzXghkA2RdrPqaKGwgvA57HQqkgGCtbKufogy25LpV5ZYX8JU7XYk5kd1XXbKCrjFrMDDHLd",
  "key36": "zWPpiWiLGFHgbR45r1TvmZ1DBKtwBp1GNTJgZCEyQwE6Bd6eKSJhoFLZWAppKBVqPj8XpDVYUHBrtqiLeeKaten",
  "key37": "124Qhr9A3GNFkP5XxqnZJKfaREA4j8eFFPraXbwnLF7mtwX5Eps8y3zyKU43oe64F1Gdw8PVZNHHDbEyaetxvvyW",
  "key38": "4bbzVk4TgGEmQ8SdC5y2zMCPbD9qViMeZc5p18RjCpicaiWDXHErgzCn2m2fEJq7uV1XbyW29vp5Y7RbinzvkHej",
  "key39": "4213Pk3c6HJCFzRVzQzmQu2AoDS3pegExytRKNp2mCgtVwHPdqm88wRfPXfpwvxxuJuaBMP4pxAB1SknQ5jRKZzi",
  "key40": "wxUA8cD9zHCMnjuwVNoY7gMjd3HfEbhT274hMmQjd9498XJAzvaRbgkPzqiXidsR9WaEDLrPsJwfReDmFne698o",
  "key41": "skUjjDSQ1VQicGQj1fDxRXa7wvgQ7fyeGJF2JzNbsDsacQQJhy8oDfsohCm3de3UtcGcffDNt3FTf8qgZXRUKED",
  "key42": "5PQMRmrnZEQWhdWW5cJ78zAx5P8zhFKc64JCYE3aYCJeYBS8CpgyW6q2D2LkWMUWAVTv4YYGARChzFRm8UnwNp17",
  "key43": "2wt3EhWx7WDaUf4eR9qvRkZWYCH9AMoL7WJznuTwG4DFYysp1whLRJRnqdcrw2cPH5mkSWswnik6S8zfjKxacEJ8",
  "key44": "4qZTxYWRiFAJCLEGrawtyrzFjqePUnHsACenFA9CEf5Z2sfAD1LCHMewiK591MRgPohJHrGewFW8KrzpbMnq1zif",
  "key45": "4TzrmSz99RVhFeBMGew5JiLW6LUUWRddueHUkDrUvkDeCNuUbash7F6HGUczsSHbE4bRmK8vrHkHzchX38YiW54e",
  "key46": "348Bef4xbsFu2qXD3AD1Dn3MzfbL9WomSZypXQCWT1msDjQQ9JnPgEqhJqYKVJCa1hfKA54VKAwXTLCBFF3AhiFn"
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

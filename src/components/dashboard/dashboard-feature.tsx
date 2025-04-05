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
    "2k4cwbgHWB9ucimHGsGce4XyhXHu4X8Hu461ukUkGFawqP7SKSypEbwTiW4QvFLG2hcwB57YD4UJZ1ERjZ4TFhQ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65gEqZgVCy3kfcv367Jh2MYNjaWyfx2PiC7UXR5rVsyzGbwMn2ScFvL3GMRJMKJzHJ6STqL8q2ME2DExQfRex4Fa",
  "key1": "G78NGT7iVju46aotxdPryirjQyXdKtWbHjtwUrqoo9pFKkMwemCjK6EQm8YBUiy3ViLUJSrRHr4r1dGnCtKQ9vo",
  "key2": "7FLFo6JtLtDpkwjQ6gh9XPoLdwwnWXGQ3DqG16SDvKwGrLZM7hJ9JuVWWNTw9e3ydLqWwBUVLGz74C6hY1izUAX",
  "key3": "48Qc7PoRa8QCFYCLgZonEZAXqG6Soag5Kq3bZ3moYsEDr7N1KzFYq7ZFA5kh7hqQ2yv4zS1b2qmRnWyoUJC7xa2s",
  "key4": "49BEFyhPVStJApw8gS9HGjaWPYeA5wjaTqk5yhyoSP2JQ9cWkwPN7DGSLXnkKYrjusF2dhkJk2VnXtQYre9QneNc",
  "key5": "2TJxow8LdxhyYZ1Lwp6xGyZwjar5nWJyKnDNAwzsdPmBTbbRxvZYJFdWctSbfwr2oqrSM6F9pNwE3K25tbpGiie5",
  "key6": "4CFC9dQK8Q5tP8nVwUkxHVbXSwTHk9XdAJg5hs1n21g7TAjXvvJeQ7Qw3n4jo1NsAUYxh4w96xPma3qGDJadRd7B",
  "key7": "4TSn1cpknRCjp1NBSvjAr5qvZ1RLx2VdAkf3qi9XZCoQzifbS4dvqKiksMuZPCoozJqTFDCqX8LA4rVg6ddJ9XhH",
  "key8": "HTvnRFocqeGmTXCtFQhXWYLgUhx2sgg3U3eqQKFhYuEU1FB18ubNQ71EFdy9ZHkZ2zChLBahQxgKGZe5kMmm5U8",
  "key9": "3swXwnUafAicSPTvnAJYWQk7izR5Uh1bynA28dyL6ZE98eX38p7tG35BKzhEeBfKzstAfvJYFbxkw1r3pjJNbPzX",
  "key10": "5dHpz4JqpGnrR6D63b8qXufwWFdJxWEidXdZjNuq11AVM335xcR54FBaKQZaiHhmczqFV5gTxD4aKEyakZzsJUiG",
  "key11": "2CBDvUjtCAoYEoLc1MYKdh5GM8tgbQXqHqdKM1jwjVgxK6Pmsw5zUL9J2Lp44jK5DrVtcy4ZwAk3gei5Jja21kVH",
  "key12": "yofnd1pUivRJhEZPXDbQsLW456EHhXhRnvFimwNog8F4ppTcfp7XP6utQ23UvZ55kV7WUdX5k2hypbAmjMFV7sd",
  "key13": "5iB6m8kvNCnJ6nDJUhZiMhTnu9vwAvwMuuGqTGGFVF4gJsSwGqruz8bMqirfaMPY3FJLVffyRxBJ2iYy6PJghFNX",
  "key14": "4i8C7S55wR1CLCNnXhZ2F6F2p3TmKipqqXmgLmXt3FeHqFowjcULg8NSsMJfGAsUYcVF2QVeDvWiWfqkGhv5EANM",
  "key15": "48rcSgEfconSzw36xFzQJSZynGHA2WqkNEwsg3ZkLGS1QKSNnMFp47J3Hb9qrs46VkQNLdDBnYu45puC7Z8gwDax",
  "key16": "5da4MduRrCTSNSiuV5sw3q8LvFBm6SgSFwKgPQpVXWPcTv67nmfa4rWifPha7E5rrY54XLUVi6eBJvN2AhEHprep",
  "key17": "4XkAtPCzC1zkew4eB8mQTRv3FZ3miaz3z2NezaNKbAxWrpyLadn2eBsXR4aB3H4T6vgSbRpG9hJHdp7N4btHiVy",
  "key18": "3BPCjigSqazoaw6ocMmJuVGEmc6TAuCJDYQF7hKvFivJgu92kA9GhpU7KUMDZku9UecEnZabLJWmpPK8LBxCc1Ka",
  "key19": "eyZTVUuJn6XdGkYAJBD3WQTp4AY3Q6w9PwuBqBsvFbKMLmZiG2GfrnLqsnaT3sPSE4f285St1YwnW4mMMCPDs2i",
  "key20": "kRTs8ymgqJkXd6RyzkffJ6HmhuwCe1BwSiTtf5UWU68iZtSA9zvi57PvbkgbExAff9xqrgTTqo4aiSN7bJZiFuf",
  "key21": "3mhNcv1iioVHMqU4FHFDF5xufeufuWaTxBmV5QzQN5fbXyeHNW6cZEwoES7wuGDtihosVWQZThXVqcSxC7SZV2ir",
  "key22": "31PyrXcGM5qERo1cAuiK6GESqLkvzdViFFvjpCGhcGMcsA6sX4SwgMwFN3TYxtwy9ejtNeeyH6ow1uDn1uFKfymZ",
  "key23": "2uVFkkyskESwji7zPzR3Zd3jsasWSk2k7uuVnZAmmNSwW1WJQnqrXCAKKSVQRTZdZKubw8ENLs8RmLZRdkAFwt7c",
  "key24": "4gxjiLjYaso8wfFoUtety2xEFmyRZh2xRgh5uuYH3Q2BuRs7YPGZ9JrK5qaPfb1daAbS9cJjA3Ux11fL8WUN8XcK",
  "key25": "mrA1oieZhhiZi9JjUnJH7KjgAM1X2pzTRgRpEEYMogV4KUFZt95sFxQQsJ9UEuE6RzB4yoQR71rrUXV9EhMWSnj",
  "key26": "5XciQs6JCPQ1qsZjaJU1BrUzyL7eHkQLJpbs5coYp2MsmHLRr2ThpnTMqGGZLsX8u9fwN9bvfxqKKoNSAXvt3h1E",
  "key27": "48TBpZApMezJ9AYBDbPsC5GEqEPxSMdSfWXHAEhhaV93Xh4cKyC5n8dAZLv2QqBQWmRzHHt9uZ6YxZcSw8miRRin",
  "key28": "4zcvoFXp9xJVPmxEAreuZjDYnsDFaCZkzGiRRPKnwENPbhK5H2Tfo9Ezh68ua3VvHtUtKZxXrDgrR1HXEdh1Pobc",
  "key29": "4ncxTr7KDirQFQ5mWAfvsa97KGcuxQ8GzJKSeBLoV8KFPkNSMNoEScoy86PxL69vwwNMzYUUAGyhwtfH1zWYjaQE",
  "key30": "4pwZ616DTNnSQ4dPHT9wmZs9XLyhakKxqaWgyYSqfvi82PK6DnqBvuRMvJqkRJcZiEXANrjsDueyULE6LSKSRkzq",
  "key31": "57WwL3yB1L3QgcswKsBBDQKN5kQauPbtQCtf84G1rxgEGtkisbM6v8WtC5aJtPoRqXPjJMs2XZLxXKnwojxErsn7",
  "key32": "9NgjAc2L418Vu7S4DP9iBMNQxLMfmTKNwuKmXrzDRnPAKKkcWCSAKXdQZkSgXkq25qaAtSPg8ZTUkBdp98y7o5o",
  "key33": "3S6tEK67gbWF65EvfGQqMNbzQLsrYRKtFWQDTVitmvL8nUyUZFkgNq24MuzvH2EHEA4rybDBhTkk8v9FcjCitLGP",
  "key34": "2k1T9h1eXJdmcBhJP6VgifpqBXmjK43HGyLdZ3mXP65YbEeDx61mr4oa9KBTgYpd3ZBq2J1euT1eSFGUzjyXWh3a",
  "key35": "3KQmZx8Ma432ajvXtTHCpTgyogBNuSdsJCvPMVB4nMtX1apCNjKSzePZU4MULXeQ6rC6kKdesFXcMEbfy1tGBBTW",
  "key36": "4N2hhwBaNJs9KrdJnBhNre3KFupo98FmvrJauR9PJGv4YWvthutkFmjNmFX68LEkWWDebjShx2cEepZsr2GzTjks",
  "key37": "HZ9AgVmrRojLjMmr9dWQv8p53GBBUvzMLrrydY7kRp7C4TwddhuvF6vxHKumd2wR5bpXbU8LcgMAnZWKKTgc3B1",
  "key38": "hLQDq3knooecSBbsg4vCoeGikov4WH1zpuGWY4pZHat5LGnuE8bENxf5Gt66oKqmPALw8tS7Ki1YKMZkAWVTavk",
  "key39": "5nveek32YNgkHfHPPFDfJ1a7Y4vVfYyCGobai8vKWqVGsXnEibwMgywEiDtjUXTQwPGf8Jddni8Q3SxJscWj7Auo",
  "key40": "3BTETKaFrcKv3XtkULHgpRpbi3ak1sbz8yaVPpFsQjmuCSR2HG16yx72NEbkQWobuorGmnYjYsTPV3oLJicLNjos",
  "key41": "4eJpMdSpZGAz1V1DVSyWbFXgaKPdF9DxkpBun7Aeh7aVUhLCuDeBKETnpeF4LdkDPeztJCNwwQALx3xie71A3EdD",
  "key42": "54RrYhia1eXgpbX9ydKL1LindUVjB33pLvdMzbc8bomo93rEPi4Jwg8fUHntc8aFtZHEcuyNxBqbz1nHA8661t1x",
  "key43": "5x6VqyPfuh387kqm4eqNNHcifi4ND6dsNJA54Z3q136ggSPSyhb6VSAYhi717XBWFexky7L4yF2pkWG7JsnktKzj",
  "key44": "ZbS3srDFcVK1YDBJTF7Fh4rH55WPrpwmZQwgGGCKNrVBUh33LsKCYRs1pmfVc2Rm3LRr12iguZj3rjpHszDYZQq",
  "key45": "3t9JXngCVFnsBTZo7Doxvb6gH727Hz6tfzk2zEdQySeaRJHSTD95W71JgdqzsrefWxH9xiee63AdmksDSCsE51j3",
  "key46": "ne2vsp9gFxTnpmnRKqG5u6jcNCEsqjkSRsVrLsAouX3HH5Ws4GXyQ8DzCAe7GoMtJb5kfHtLd2bjUYoCAomSwTe",
  "key47": "5NRwPmWtuPQVDmpeZaef813APcmZDJ1S36unngsAGmhwyJjG4ZcsREZJhENV3VdpVDhNkgByqbhdTbRZBvxXU9uN",
  "key48": "totgMj8J3gEgr6f14LZxB3UVaTJyWzaquNe8cVhiVmQLyXS1Nwr2Am2kfnygRbm88b8Pp87uGCZBL8hXttm29RV"
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

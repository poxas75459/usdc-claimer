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
    "4wkJhs81SSo68ozp7K6eATHSD7287WDnVjxJDoUNNFLo85UVU8asUDK3pXLkpEo7m5eePuPHAQS5eQqtiy3ABC8f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WKAkUSJc2RrMox2b97LxUN15PDdzZxf3DmQYmMwWGFAZLYoujib7oVMx13wfzDjT9zthEbqbe2TeB3tsMhmCxA2",
  "key1": "fVbe5jbVbtRcveicj53JNA9M1UpMighhGrcciQrmFfEt2jTe7qfcFUokVxEvvRfbyaxuuCpRGuukwJEs2GrVrDZ",
  "key2": "5mPDozdwPNmuYpfQSvZzw1FcgkFj9zkJGMxBXNig3DAp3e7cEjwaBZDRC25mBf3x6NbENP93uToyKyE4CmGgbgTM",
  "key3": "4tHr94UBiUGGZTE7m3L21h3t5VnHVHWoVczqpBAGe7Q3Dnqm4ERRABU6CYkMQhGCi7sMwzcNh2NUvs4wHMSMKvxk",
  "key4": "3EzRTmvZc1PCuzhXpq6PCHM1jUJMohu3D9KP5Q3DKuUznUtr79EEUVHbSBcGDYhvbtssU1qpXonresqxaG8BTZsw",
  "key5": "5idverxotuNdCLgMpyazWAxm2a5BxnstY6JokPEYtTepyi8xR1ubTkB8aLKiwQ5H5YvGX7F9RkQ8chK6fz55En8r",
  "key6": "scMWQBc19pgKvYg2nZ254gWKKnBUmnvTe5bF4dGCLiJGTHNacJrhmyGUfktpdLzj3dUDYxTuhSjaGCotQgDVSdi",
  "key7": "WpdW9z3rdiHCbDx2m1pABnS1xAA72EpE7qxoE9WMmdsWad7Pwyr6EiAofQB6gb3ghe6Kbb6J3Bvjz2pJy6GJ63r",
  "key8": "5R8KDwbzepTwntmuKhupPraPgbam7dqkxCHTwjk3BS9Voxn7vYVvg3FJVW9MFHZfmViKJm4UEx5w6PVDkheSd7z6",
  "key9": "eu9R4n7fT88c88ewTZwu2uATfinLymCveywJLQ51arLZFAnDL3YaJwacs5MkhRiX6P2pMXcYTN84U63yo9GbK5m",
  "key10": "3uWnRgi2kA346YRZjZVT41vKCLGPMhECxVbi1Fyqg44hZZMBBMdJNusyeYiAXPPDQ2zHHgKZngz8xmvytvjiU4jX",
  "key11": "39ZnafWV854HJnPvW1zy1PmfBhJ4G1GwkytTrbtZJEoMpN33FR5PBi1S4ygy3WtsScXPuGshC5WQ2VT5VBYL5gVw",
  "key12": "PpBhkHPog1E2GNWcEtJj3pnAy1jXmhvsLRPbwxpMa8bbJ3wrWYvmBdp2fPu9udPpEabJk1J2hHgZv9M8BKyPLzk",
  "key13": "rvxbAUSophbdHKs16kNo79nFMTX1M5Zd3CWoLoTG1HVCkdqYX9UgQa3hsff7xc3UgAg5SxeiELSJfpF9UMcWVyr",
  "key14": "3ezVSPDeBL98zABX5RcoZc9mKnirc8mWY8ZHLdLsmxrThj3V1qinHWxwaKCv2nPfogvMaBV8Sb58paVNCkXnmbUs",
  "key15": "cBwnMNCWbVTnmT5B5gaDPP4zE23ufaY5n4eZ23whD7YVsuZgQvvVqxyFGwXjzFpFknHMeET7SemEVDDWxH5H1yA",
  "key16": "2FsNsDgu9RCoJCr76VBZhxLLPEmjrm5ehnWjhppex9YKZtAbHJ9Q61MzFRutFZBSjsVZJufN5yBTW6QowAzFKZqK",
  "key17": "5UnEhGUStMsGZogXnnjWGbPdk82uqF6Yit49q2pULBYsNFpsMnpBEXtzUReNcSkESUQQp5TFBmEse2L4usoYGLSh",
  "key18": "2LLu2LVxpG5Ch1svBfTZ6SsAN3rtucEeajm5sYPypAhhksLkhicJewCNfruQcvuSdYuxzYsKZKpAAELRUUbhUfW9",
  "key19": "21LYEKkQXBWMtHQSC5ZfYk73yWYW44MhC2LWp6vXJFxfdQ2KUPzJ8hRfPYBVvRqZ456NC8PEdyb6BxVuQUVMQgZX",
  "key20": "5uJnuTKZxT6BLirFnjqEAq1HmjV67eebnw7wmUBzeP98fJA3ntH4LzeMui6hHngiyh7bBEVKBXds6mMj1qcwvvqv",
  "key21": "3BMrhRKFRkVHWzVUyg1qzb5tFbyFwm9ke1tm8yQYcYQHsRV8A8beDeKqMzKo8dfSZ1T9MFbSpnUa69Eio2fQ9WXn",
  "key22": "38t29gGsSsgDG9jfbHm4CyoXzvTfXcW9Dvsdio1FmSrNWDShdiAkB5S6MoQTHH67JdMm1BwYphybXievDpopboNK",
  "key23": "3sxxpRrpTK7VHBy7NFcaqcjhtHEdH335ssX6H1L8Xih8UDFAGLy4oNmCe51SBAJq6YvExXng65d8QRPJdmoeakzP",
  "key24": "4ufUA137i58umH5jnvfzNE56j3efuJbSjhgkedZL3dW38wVga4q9ZdwaEQzWppvEmyEutyXFQMvCfRzKd5LMZxR3",
  "key25": "5LxA9ZQNBTS3Lkx3BjuzJ57TzWNvnZA74qji3YsRzuhgrJbYbd6yRM7JdEk6akpbZSiDhyRuibk79wVqe21AS2Xv",
  "key26": "4sYrp8TCrAp6J479r2Lhe6SxJtpAdyiBUidi4rDi12KrDodjUzNR8NpPrep5wEvmci1SjPtW4PweywHFSRiMzZsC",
  "key27": "2nBUTP7K3wRXtbeZ8HtDqqPv2RNhZsNZX6QSC4GwYd2XTTzC2R8sR1J9iTvgMJ3STQuFf2cT5gfqiKJ7vjdnpLN6",
  "key28": "orGhNi2G7pdoi4xKFJbpx82XMj8tgYY653krhRfJG1jrAFBdJUR11WmXxFjLbviZgNhuZSeEsR9yCe8pZkhf2PZ",
  "key29": "ZNJPv6LW71PwWXDog1QEa1a5beErePrunqhUVhD32MM6iUDpt3MMmjstWquYtQAF8gq2T6wk582UEKn65EBLe6y",
  "key30": "2RLPrchg8PVXT25xRvm4uA3AvvvVSuvwW97SU8JXamWFb3CvJRsNDfhKhGzguzAJqko7LojxsYrYJskz6HZjvhSk",
  "key31": "4nbMvRNxTBErMUSJvkDo36RoPxjCoH2xUd7dWj11mURshtq8WpcjkroEVVp9Ygz5CkcJHxaeJfA31XQ4B7EBTEUv",
  "key32": "4tARHnqio9n6YEABhmht6XP4Ym85ATGLwqSFqjcCDrcH9Zcnm95UHuzvg2Qk7ZWFV6XDyfV9RttGZESyGCyjknXe",
  "key33": "62PT49SjQc2hzq9NgdzeJy7JNuewtF3bsbjR2dAqonrBet9RaTYFj3REhGnaz1RzmbUBoiMFaUJ8jtLRSSCmUmcn",
  "key34": "5T58Qsa79zrWCM4jxKsM6Z5k1CaMbMofxS5UhkAQkqqifRjXWaz8NT9T6TKK1LYEb9tg3kSiFzWtnTGJiup42P8h",
  "key35": "i5BHA3FZhhnyhSMR3A2dELGpzVM37Y7eFCjksrEdS2ENuhENoKSkdKAZDhgbyqgHQBcAcypMVPchEeZiYYZNwdA",
  "key36": "cUNZNgsHykAfA8vZmU3aAzomjEVHtZbAzxzqdCaZfSDm4g1xGs4oatY9ULbc4UXgU3p4iNSfpD5ULG6zcsUR6hu",
  "key37": "y5mTdvKFDHd2yTvqhSUkc8CMStm3Ms8yryc2hegoh1a8BzTDu9q4q87TcVaRYzTezwfetM8Pyb8m6ReQ2e8jFnu",
  "key38": "4bMt1QY7wK3BnR2xCENEPENiHJNMbzqUVqvZyyz4HN8gDAud9V1mMbXVM9Vwvzm7hy6WSDdS37knpdw9VAtDUQze",
  "key39": "2fQj584AtQtAraDEj9kLGZ3o3PhDviSuvyZEQXRkfxRna2pVBMPWcrCUM9vAnHqiBxX7tVwtDyvTHJijaTJZiLVs",
  "key40": "4y4S9izhyWz1HLu8wuoKkW34tXE6zguPQb7diEPfeZWaYZSGdsY5vEfoF4WWJxZbZE35rnr3zeu4GpqfUeDxPBdc",
  "key41": "2jaQDsEtE7idvDXWLhevgZg6RMFYPLUMTB2UqT81t5aJK4sS3xcaakrfCZqGT1MeC4HUp7Lm1v45jDMbw3ZLJ7YP",
  "key42": "2ziY87wpQixyt8z8DFeXMysyEXgkTXn4YcLuHpTB8f9HWWnuVi1AMqSHScNaXJNuaeCB1KwjWKZ5WuLQ77LbvXoC",
  "key43": "2ktnGxHqPjKgcpVTJL5cfmcctnYTzVQawuzd4NP8hH4hBi4K8WjC2dZ2Ji7K56Bxya84U7BXBkB3DAsffoSFNcTM",
  "key44": "3ZC7Cv8Uva7h5WF6SaioLFSsQgPTS4cQfhUVo9zNobWZt69bcjHGj7QiXi2WoDoK7NyT3qnUXK3uAy6Xzi2Kutbd",
  "key45": "5LyyxejASMwLthCu5EKa9wCEbUZadx6oiWdJmQVKjDyUkiMSmqF2xJEFd5niH4cNvpaSbAv7Pyutu5UWgfgSoZoo",
  "key46": "2BaehELHhGn2pkya4oMDUQGej2y8w3mcUajycXm5LPHdcvmx2GAU6wLBTzdo2EvgKhTaHT54et124nCP6Hsdx6dz",
  "key47": "4fFAt7PDypYLuy3jRkizNubPXzt1utpwXyZVgrw9s8JsYH5JwztQshnExZLhzHf4x9dh5AhPCwcrmfeHs7NoxKpg"
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

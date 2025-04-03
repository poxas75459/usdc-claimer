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
    "4RFKkiiHSt2vmpBiSTR7cdHrVKjbngp3LdNyfdvgRqvU2FYUMrfDXzLGxvZtsYKXwv5yCNREt6A6aowbKeG9zYgq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JcUuwgzeJPWAeqzEYx3Fcyu2g4EqpaMPTJkqsW2AZz6tuqBxkEQ1drY7m597eGbSg6MeAZfZ9RqSjqwbDL7Ayh1",
  "key1": "TnXNryDRCLeNLa4wrBpJgzU5s8oak32zDQXZ9LMjsKjHLErwEoe23xEggN3zpidjUu9BbvywwHJm2sRyfMuoAVo",
  "key2": "5yfQmvdN4cxPWSc9GQG7kNnun4sTzryQnWmtMcSeE4KDZ8jQZ9Q1SP7228B5V1Dv63whnHyySeXoP4osiou6wnAT",
  "key3": "4Jc5hWfz2vUr9yHhgLRiSXCqXwBgjzouDtYd3GSxxVs9iBk597PyzKc2CN22yq6nnnttqv1eWCMe3FkKfNXRiwiZ",
  "key4": "2jP7q9bDPRLWAstKmUgoKZCM5Mxi5zEqcQxY6x9o5MFkLhmrEsbyEfmLDneErsMazaZj5eKCccqqdjsmFxJS6zsg",
  "key5": "2kfazQ7QVgqMUonEq6zcxacvTX7s1VtHqz8Y518fETggwea6toHGDwBNC4XGQpKLFvtpXKmXTyLUYU8m7oYsaps3",
  "key6": "3pCmqYynMyo4nopiWCCxxHAVr7tpwQNHhReYDc29mdYN7Z6vcL3gGeho1n6cXCiA9oz56ZJDD6tT72f7F7muqYnN",
  "key7": "3jYNb12fhSzUoiGUYXxPBYxJo1A3dbSN8QQ5rYLwzquHXfkpSN6CsCFmueVvJBNQycGw8LoM8WDr9JPyn2wNzzok",
  "key8": "BG6795VpGU2yanqie2CZ4bzCPJ6fp9QTGCMQYmHXqTTp456N5fw2UpMe22vQ5sa76MGHyk7eu8fqJbfF3T3qScP",
  "key9": "2tzvrJS6gsLg9yJNKq27f6gLP7rLitd6JKgyPiH33PyxLeh7oNREdn2iWX9FwdgEQ2UYbiDna1S6LynSk2YSMwtH",
  "key10": "642dSpjJ2qcZdYfT8j5XGe9o3UfJo9PEeQW2nAevxCftXN8Kzzmtb1bEkhdhUKg79cnS9eECavCyRM25JyFkhSRz",
  "key11": "5PHUwv37mqPbeCTxuWgQB6xzNPfrdBsuKj2bzUZdKfQcVcZjFQ9vG27kyQj94z36UJjdvuawhQ2uwPxE2f7wLEio",
  "key12": "4yK4v8SJRLzEe1Xyc4Ve9xuVJK6GDAoNEb2CsqV2MCw2osPefXpBvM3fjMX7dhd7N8qSqC6ouUCQJvwjxq8CLugk",
  "key13": "2bMbHhYSH3ryxLasf7kt99Waeuw6PFSj4hmXQ9Cb6SHY6LArG2ZBjmroLGdYd94i7LoDXaVMjqAZo42EWq9mNYwa",
  "key14": "4huzYF3Vt8ipjZXSho72wtnadkkGEssqVaFkhG3HW9vDMhdNe8VGasnZ1NxxTB9T5sjQHzbyiACJbFB57rM6owUA",
  "key15": "4tggxwGPdWqrkdBkSkgKpBJ5nAapCvMEpH6WfCvM33MqKNmzdgWNUeyj54TDBxo17ZSWoPnE4CpcTBLWBiPnicCN",
  "key16": "5cy1Q4HMm9jUttYocKEjGBCspnsJBuV3hHTjNBBDDbz9QHPadUKBwnVv6z7tfo81Pi4GU3iyfddu9Zshrvrp7XHs",
  "key17": "JJVgZVyaKA8Xfhfzu5gkHt36XDN6uq8ks9G2gpL9rFMAhvwyaboygLFiHVG6Aw8EoUfRAVF87ydoeaiYtCznLzj",
  "key18": "4jtDfNCHXjGWQodAo8SBicYy6BTjcHM6NSy4AxuKwVL6ccMS81KHbsNboFRdKfTJrApeGcQb7WnMm4nehNyqKyyQ",
  "key19": "8NkDV9Zhi4NkEwJgmuYfsm7FxpcVb6dhBvCJGP4jgsMCSaRfyu5wjyv2tigyL5T7VUCJyxoEJRWA8PUZMDexNZA",
  "key20": "3gE2H9xydgPVjbXxJTz4kwpR8akcgFASV88y1Z2jiSYAPhRcEVfPiAduhgDTBudpfenyxwLvb2cXUZ3PyrEZLbqM",
  "key21": "37QnvxTDAh21qFzbxiJuvvsG1538jQ9hC5yYdeAKed98rf1V5MfUvpeYHdAskRKGeTfeQNQ45Vv7fTcDxycuCh9W",
  "key22": "8brELiLQDB8VYcmz2hxAjspkXcS4hqQnCFL97s9pVtYqCSCFR4HMXr7A57nkbraMhcwdqUnpcJfyLhv1AJGGuPU",
  "key23": "2DvEMHpZNxcszBCcsB5geGU2Dqw5yenXcRtzYoTiVr6tLC3HRaUr28LM8ZRt64NvPa7mgKzNRAiA1s7UKaAuQRTa",
  "key24": "4eNXbAwtJoR67tFevLCjvhdz5x4etDPYQQVGD8BVzLqsA6cvfTeVFhTGrhQfoaEZwSbbQBY3seoC5MXwKbcw8dbR",
  "key25": "3rKdPLnJB9vo7N8r8EkLcZiCmm37LuJSZWwwLfgxZgwa6cCX5znywSww89nMQHmu614kiUL1Fc94MsfJmXBCHTHz",
  "key26": "3GjAoc2DqQ3zyuTTVsLgJcWTXnHSmDSRTUaecgMNVAc64s7KbwShe5JByTyApCFxhZKxGe2waveU9DgHZQuHKs6S",
  "key27": "4FNZAGBcbwCXrgUqk1Jpng7XsDUKaSwRRRmrgyvtKGwT5o8TqT3xAoM1ZDJnr8ZVcPxtjLyPrSuGuKQjeBcbcZm",
  "key28": "4YwjX7JueCjWF8oZovHYPihTF8R3hzRbT89u9w2AAwXg4psX3KhSrXgRPQs76PWFHyNnJ4dsCAwZK346YcKrwqkj",
  "key29": "2TKdqs3QZjEEbiuLpvEb3rkAnXnbMNiRHSeTzDvq58Qm7RZT1KLTYwjEBEmHXZRqo6ZYcwveUHn6YFbJx1niJaDR",
  "key30": "5s3qNgMTugZafL6Vr6b7eQamBXdKT4ZGuUQDeVWoDApLFJSWYDxN1XwbGBt3jnsvWy9YaFtSVQmqv1xrhoacAZ5V",
  "key31": "48F85ywGXd7aYntzjAQh2CSokpfQnxe1NyqLYTfKe8A5nNMbEA7oPWLZjK82gtjnSfKNqT84CVbJ9VmMreqZoHiY",
  "key32": "53uzTs2Zmr9o7TUTFmLHH1ttJYYMjpzdkACMeubn3pUCNVHQ9C8Rku11womdVBTdjjpKtb28vZApSF18qSu8YKEd",
  "key33": "5UcuNLDrRUPbMnDRmZSAey4ZXXYPH9LJMziz8yR7FfZxPtpE7ciouH7TFtsw2ekvmD7ouYZArpmQ1FJzpfhswrvc",
  "key34": "3DW9Z6ykEMgodDkGDN97TQsZAaJvAbbJiTvh4X1SnsEq6rqQYDEaYKLyzyDFUHDpCXuq22rEg1wEqaU5r4CELbx1",
  "key35": "3C4RrymVb16iZ7G6Jh6VqQ6Y6xMVeaLcdUaWZZKD5inoPYhEcL7EFuSjzAsCFGY7fezgjm1RUxZYPmsdwUeeydmE",
  "key36": "We9YzgcmvNMWzeVzpRPdq9xQWUaUVsLTDUzbsvEBGWoFgbwg4K12dmRk385VZLtyh6TPope6buXyD9KAssrUr9N",
  "key37": "4cYpW34WWP3QLX5obrKLp9C38ubxAmtGNRmXc5q4HL6EGs1atsm2eSCyqmK9tqN9U8FV22LpKcEa7kXjHhYRECxc",
  "key38": "3hMVQYQRaH9P4tKj1EsEFJRCi8bCVCV62b8dfHc2HvTPSJw7w4fpehgci1QxjSw7ErWFRhkDLGXWS1CV8SFid5Qp",
  "key39": "1fL5EdGFRMtVj2UEL1CSW2FF75NLm9gRNsGnCUeHmhBKRALyRQzkmyEzkVBpbxiVCrzEdb6qz8izUwJqT3QVARq",
  "key40": "4sSnszb9KVxAEzWPKP1F41jegwbYohWDYTYJmjKab14tdJN4tzzmwqnxGMVJsqAcbGmNoP79qBJdhfiWFUYKA871",
  "key41": "4EQXP75kn2bx76GP1LNSDw2crjTxwy6MrhrcKtVi7ZjMVaYWFRzXHWMz9RH67sb4uEiE5RcehEzKMBjRPrtD79FY",
  "key42": "2kNMSBvtzFiBbZRJMZT8oXYNFLLcmzTtMDjnG56SJCrvpgtWMsGeu4vjgcDFBa4bXCYoqgUmPjgtRCvtS9XobcWu",
  "key43": "4eTnodBojePst5BZLrDXm2THrfXijgWNAV6gRmCCjT1NMqEjBthJ9oFfWvWvkYSS8iYmpnGE85YMw63mKqArqa5g",
  "key44": "5fXYvcbmKQ3Xh3h1oLn3hCWhFPuCRMimPrVaEDvA2brYcXzq78AQKBxM5GMdKWjw2kW6LYWedJy6VMLYRH38DE6E",
  "key45": "2qQPKLjHuAi989afXgp2cSpSHs94Jod8fwRbAQWZkFav67oqa7i6AUTRGNKPgLPKiEFRZsJcW5viLcGbSjjL3KoQ",
  "key46": "2dw3jNrimVprY8VTGUdAxjqZTwZQ6sV2AtZSXGu5hH1evQU5LHsbVk8eFohn8T78Dkp6kZGVqzY5Rbby2UAbNW3M",
  "key47": "2GNNjugL8QWytWcfhcZLyHhc6VQcjAWtDr2jziFMupwnqusdp9nJe7SEsooFCAQ8uxBNwomMdbfZNyvWSzA6uMs2",
  "key48": "3uBYZJmN5dNpaVbDmfHbtv71s9X5b3gKrT6i1NdRKSxfE6kKY2gDD43jmVRG1tRVzj74AddjFxvwMFpTyLgjmtpM",
  "key49": "3fZXDekoFaFfaBQscL5XRHCmLKV6r9XsGq9NNtXQnADGLuRbvv65iQvqfqU8iPSRQhqbJWQ8E6B8ZH37iKTgBvpu"
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

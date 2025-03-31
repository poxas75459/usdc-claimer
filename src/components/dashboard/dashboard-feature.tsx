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
    "TDPDm46YFiS3vjwD7JkPqaxaWnZXJVddxs4P4ddG1wqwMAB4FjxSVZ6psU6gQebM63pCKaJitESGniajqqEmPLi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RTBikxnWsbD5NpC55Jfe9NWYY1wYxVjc6VeZqLbPRE5a68VB9nsd6vAXgheneBePsFuckyBJ4Rjv4PihxTY6kEp",
  "key1": "5NTHY7cMk635QzLv94xQpwrFNmqw3uBxUKTnNs9KBVQBxGowQjDwFQBTapjVbXuDYQSpWB6yxK377W18qfngTk5D",
  "key2": "3CjDQHL1Zpro8bUzw1gLZfGx6UWCndBZtXn1hFYMqaZK3N2v32StUWLQPMLR6JrXnRJYbvt5dk7eSJjTC1pbpo8N",
  "key3": "2UUNw9WVNG89CreUJKXYdTtZxij1nAV4SYycErxLVubofnEpXBPJsitLYQFjHdY1cv6wCQUkmyomzUxXmTRJQKPN",
  "key4": "3DmhrB43V3KFmckhZcrdCzWUNUUvZ2snoSRY7tSdrj2v7PUSnWJHPrLddjnMk5K6HfxpvgzjbvdUQQs7JfEZtbBv",
  "key5": "54sQ8jLQMdVhv9ds1vJEhAXfDthiAzNY7nCTf62WUVZjveeCUosY4ptoM4uUVJJ3a1tYd35GAo1dwKKacgPKTudx",
  "key6": "4F3q66LN9KQqLQUE72ZMPM9QDRQVBxmbfojTV2jDdcBj1k8QVZBifaDQGQdF2iM2eYqVgsWMNHN7SgGhXXbfurbn",
  "key7": "4vg8nav6jnYCXJoKT7sS9yYJp4RmabwkBnwyAHFdCRSpAVwTG7iyB7oUVhJZV1VRaDeJcx1QpW51eQtpKHY9P85v",
  "key8": "4h8qq7GtUHd8SBvnW3hQSE4NPYF8PWfm8v8TEawHuVXkAuAucwEhKf4tbnC4XC8yd8uYUEb5EfYf1nBxbDmguLMd",
  "key9": "529RzcNP6k5Z5Y36oHqW34d6ZvxiYrx3VNszBadLuswf5QtraDJ1xFHYSNJR5mda6mAAA43AMZ14AWawyyYJAeAi",
  "key10": "3bWu6KsHdQwHrxobymSiZ4WSUUt9TC8PPUDVgF82vxjYf1tWAZ367HBB6PGn9Lr6DA8YdcLt3mGwmpqu8dZP5GLM",
  "key11": "2b8z9hFT9S3BSP1AD3k8D9BbWgv9tckK5ApZ996fe8xpny9u7EYtgZGBr55ZzFzVsF9NQ775Q62ypmPtMk4XnfA6",
  "key12": "5bLFr4AfJ8o7qbJtFA3Durf6pRoLn2NLG46RbdH9m5gqwk3ycssCsCzZRgZD1L66bThs8N1FP9y9wJQbS6fitcSj",
  "key13": "63w38myojeetfiMzV4vW5YyBFK6dG3qPeQMkHXmdgJCZh9xsg8TM86WYgVFXxMHtvaz5YeaAWomnTkdAuJEnwgNh",
  "key14": "2RVAWJPtwUxoMMrFFBBteETgCrY5nJsQaosfVPr59dcfx8wzoTVVLsFjiwHQB7wUmfG1X39ewcNPhjqEq2Yuaeh4",
  "key15": "56AwyXisbiLvWF7xT7sH8jaPX8K7CrehPkTjsvTe9u7xLrYysjtKeBRgndDvPKA6Xe2BjxoAqMPLVuqHm53BhCHy",
  "key16": "Lb45fAHSmze6vSwcaSow5sVf7EMMadhrb2152H3x8TvMKZv6EcxEt3zkBGaVDtCLYXQt5juC8iaRSyjFzhXSant",
  "key17": "B5V5aB6zSHdfD88EjdY6CZZ1vYTnAeDKDt9HHRctF9mb6Z2FspcR2TUx1ZFy9wCnnTrMEykMgtREhdDrHzWsAWT",
  "key18": "4tBLnYdqcRPLPyZ3Y5iMUSD3UpQo6f7tvjbA7TkZNd3KH2PpYEkd2J8z4rehanY7KZaU5K3SeZvbakPEvcxRcenR",
  "key19": "3E5XaDAARTUYWGr3Kaqfmx7eF5nSXkeXhPx2gFaxmVXsqdnmsas57EVv46XELXkaw4pLDdiKm72YEh7DyWXEueV7",
  "key20": "2pepxqmNoFRFAMEnPHKYc4PwzxZDhe1fYxmaS8sZnm5u4QV4wuwNSGQwGQzQHJ53cNfJYU5Mq319USy28LzEBZXT",
  "key21": "5EAyprohorU9TJbukhfgkGqpi6nu8CS89Ycjb55gNb6bKttsv254HXpZuiPYaGKPRxNLR22fdo8dJxpMukyeAM5d",
  "key22": "3dRHrXLUgTzsoqQZGE6hRLRKBGu5Azw3TNMoifFrABDdNuCLrvcvxFLnmvzd2HyL4odMjQjdGSiMpwbpEX4AzD2m",
  "key23": "4rRPhADZGKxaa279iUQEq31eqqQHXDPZxCjAgWgTVTVZKiVyK2poNE9Gp4NUEofLkwvTD8EFD5kKKSBHsvuj28Xw",
  "key24": "67b9R1CUrPCLatYD7v6516jGdMATTT4F7Yy2b8LaGPk38Kt9ttc69MHb7ZggSNDbMqNcazsHCLjGbxbNbLRn8wG2",
  "key25": "5CFLck3rXXnBFb8LzuxLpQtkPHdWDjzXw1tARf62KympJPqcz9aJyhpUX4Jsn6KN2kU1Nvm5TKrxb5ftbCsyAULs",
  "key26": "3R2pXpcBHzQw9LLxk24gDRuH6EgNixVUou6SKE6d6yi7Ds7WuEWWDH3Sas54RxvfHW2f6fd6gfP96ukmjNubsNNk",
  "key27": "3rAvrp11vtf8ATP5X4pdN2raxmESE3sFUoLan2G2WeCU2KsPV5qwQ3kBsmnK6fhJGM5iXx3zHZVd8Eaw7HULb5n5",
  "key28": "5pFkhnb5uxzHgHDp9VQGzDrPFEuSCprS7KT622soYc7iZffAtBoTzvAc7z8QnJj6GZsUfL5VkkaV2w4895W4PaYk",
  "key29": "52eUTPSWU5cRUr3wHX8SDTg3N8urdKxQkCfbc9BTj4hHBomrCH3RAmHtyVJboEZ7rtmdXeGuLRrWfqD6a5ukdb63",
  "key30": "24ToNaEvp3FB4AUimVQMqbPBwnSurN7dK5XwMxEo2YtKoN2TYZd9rZ8iqdou6xAT9hBoDQhxuFnxgUrJtXf7Wr6r",
  "key31": "34Uav1GmUm69WTiuLbfyg49JwxhH3dd9aVXFXGhucBL5q2mUco6W6QpoTSqQYouv6NeVw6GR2CPMcaB72cTv89fr",
  "key32": "bmdydo6qo5mVDXRjMsqSmbVhELD7VNvzw613YYWjjsZ6t24uFBUc8x7P6k512ftgHomDxbwLsmLb6yHyNMxnXCd",
  "key33": "5FU24BA2zerLcungR7CyDYCgaR2fzGLJYwrvL8LQU3HkgUQyp2611YeuvtirnDYPkAqs2MDTye7pQe4Uy4bDLb6o",
  "key34": "32NPVyf1B7rKCWdDDpugJkKRjAjeWAbQf3REnZrgsZQk4piFaHu1D6Hi3VuyCxGozQemsmU4UcNspgJ48uhvD3eh",
  "key35": "2t2en87GAV9Tr8WyWcJoP5LmcviffxSmHfCdLtcpXaY9stWXh6jZjbojRRBCPgKHo4ieW814TsMBJeRyjEX2t2G9",
  "key36": "E79y66bE8qjYtbFFicd22VHUuztinCMZ7Nos3xsADkkh3bvXEYELxn7qCyfjTK6c8TsgMvb3ZBoEgct9sT6vsqJ",
  "key37": "3dSaq32iJE8VRix3HAko3bpax36qnL3AXosgekQSntMuwfcrVRvZLnKWReHPXBG6erJfFWXNVDAZRWGfsLZDH8VC",
  "key38": "CN7fVHBnaf8hbCct64DKs9W9S9JHzcAqY4ydZrLVJbwAa3ZJTz4Bzker9htXqfi39r9yqRzcYkWuerzUbRM9sEL",
  "key39": "54bDuuAWPkCy1s7hdLRsYKzBh1mxhEfWPj2CiXsa95wVx51emn9j4z431gEQf14DMG2qDG7QUyjiSFe5CEHiiCTe",
  "key40": "2vkq8m45dUN1cH3PngEZ5m4dZStP6FhurYK4e32MxNmbeuai5M6vq1FTmvnwTWKBGYQsRy2YgaeF78BLDjomBAeC",
  "key41": "44QLDXnk9XeKidSPexW3DZhnS5VnvmxSPgNyDBsa2CbnNEW7WEeLGPPk6mWx2CA1z4SULhif2DmZ98uJQ6TrqVop",
  "key42": "4WFvmXCxy7kAD59grsrEiy5CUeBLzzycBTC9zdVU5PQauna1pXwmSmpqBVYxNbGVhrqRNGMAp4o5uSFisFe2F3SK",
  "key43": "3Jbx8YLom5JbdCnBXJuX5KcTdRsMxVseE2UW6pDCgkFPDr2x8aCs3MKGKvaTZtznM9Vp9pschGz2veL2eXJWAqxB",
  "key44": "56DZkyU3RZs6V5fvQEZaKSNrWFnUUcTNnCY5a77LL1mRavzQ1GmNP59sgbV9LexnvSaT57Jh8wPCQbHnihw37w9A",
  "key45": "5GdP79s1MsCwcSdL6aBhiLuaFUXs6aqscxzpir5s6PhYwwtNmhGty6MMYLUGqPJHKreMYP8x82ggWricUKowDnMo"
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

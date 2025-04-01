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
    "3WqfWp9W3QXJiBPGnJgVDYqsf1mCQ7q6fzXp22KvsNKxzDmX7MjntKTCnEEeiBhEgpzcEBEpiVaJRzuE4tG5jrJx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TPMev6JMLxi4u3Awf3YAYJZQXfTB8bP6VXGurviYykVQzuj56cgve7HWH8SUmHzgAe3jCsTpfvpM5vxYhenaK6J",
  "key1": "5vnxjfG6v9Rid3bf7EoJKZfYetYtw7r2YUoVZdP2tJQ98M1SebwyEAJHQXKsKaaUa2ijjVTEu1seaLqCyCBTFs5",
  "key2": "4K41P1uLZcVqWbkcU18nf2TRA8krY3TpTMR7jkYUnToZvWBXMn7ajF8BWsTaR6v2mejbYBdBrh2ZF3ECKKkAXP1f",
  "key3": "2RRsbavp8G119ix7oiBHAWo3s7SGao2WmVYERdNKSm8GfTKsWJUSywvqX54Q332dvispj9o9j8wsDTv6qdXEvwoY",
  "key4": "5ueUKTK8kqGwMW2bZDVQyrqzdEjVEn2kMj2m2pYA79yuTHuSuJNNMiGiDmsD2kBP2mZBY4CSq5PyHJUQHBarLT8j",
  "key5": "2eAm3zfn6MbDRHm6KXGL1xtzDgjjGxZdd4UTsBJk4M8PdoxLq13db21u59xc9gE7UJWkxQALU11Qq8crrMG6iYXS",
  "key6": "maRgX8DBffCJm4LPha3foLEZDsYB3NHnfv4yo4TbLZT2n66xTgeuq5AKfAfMR5FGEhdNfd1cz6a3ubMMc58t4sW",
  "key7": "3CmLqMrvKXdWaWmUdRoPWYi3zuYCijVwKQxwE3cesdaQhMF2CMyJW35LrViaqf59Xjg81aMV6FhunbtvsqSYrNxE",
  "key8": "4dZCFVxUZkMuajeFEwF4yewX6wNCFeczgopN2rPyuQNkEJZfcbURThfkA8X5Rpkb62VXQAyoTLcyHJhV38R8sCaL",
  "key9": "33ThZWcaWcNbDEBpDhf7m4AqoKkASxfJEBmx7sEHDeDpqou9mYKDjSNGq7Zr9ZprhBkWe2wEUhhNdkm4YQhfNc5e",
  "key10": "2XRgJ4PufLfnczJzYuy3P1HnZ2qYrWKZYZyDsGHr8mWFENhPway3P3XYjuf6L881DYKSbSWweJNSFVEL6XXarhto",
  "key11": "3xWqEYtG3J29NkAQ4xW2fm4GyjdJBW8m7EuL3pUMjES6cp7q4bp4vZBCa6AAA4K7seAJRwUfSTz63AnuJZVRjMj6",
  "key12": "4BRzXqtakPesNVye4R1CXjptfBUBdRw7qD4LxVrQSM8cRJwnT5NhEbWDBA1XV15624MgDNqYfVKcHdkzSnBYrHC5",
  "key13": "rKYyc5gieV8wDjZ3HxwexjGQ7M1Y572SojntCFPiP2Qf3d8HhppEsrEbgBxr1SHpBk9bfk22R9uerFLEvgy63L2",
  "key14": "5bo29KwXvNkWSyTsyfzX8PXZ7eqFDcJqhXWSDLbhckGQqwZYJW1xKA9ACESeZru8TcsRJjMw7X9z7fT6frrDd2m2",
  "key15": "26bRXRhoExCGDUV5BsvwAdZKnyHJmwcvm1UT6Z1gmbqWmc3grzeojFhhdbM4Nj8CPmBLqVws7NJYUqrSkeCADi2Y",
  "key16": "3cjgz3SmCYxmyppgwo53Tb6zxzBqUjpmPPfEwPHZzr5EXDrpQLswgXaJGGb3dffjaEVqn2Xjp4F92xVv4muAWody",
  "key17": "5GAXXhy2T2P1ydteLyTCpdLmjKmyP9g8Xjy9Rdttaz69XcWoukf6kzUQxaVWGxubMhAc8iWTjy8rEUf5Chny8qY9",
  "key18": "3bvaBReF47TaxAXwpDiVZ6iJj9uoHxbxKfJCnHdzERtmBdjQJQv93wvoEEQgz3qxA6A5qjMMMfaNr4gKUJ9zbaog",
  "key19": "5DUF6YSGkANKbfT4et9LkZgiWAeQYZgwkGD3enJia8SQGdAie2f5svWe98zLzA5Vr1an8b215U4mm4ga87yEqpVX",
  "key20": "3vwFKKgJau4xFiYjCnERKoYBdbLtb4Eu3Vxafni2dKYscKMsiRiyCKWq3Rez9HrKDc2YMDWyWrYzNRRNMbDwm6Vf",
  "key21": "ENwGEB8koPSnGxBjF5ncAYpfx94beifo9DW67mGWFAj5eCR1LV8fbUQgWFxYAoZHigHjUnG5SLpVyXuASr2qaZ4",
  "key22": "2jrYzrGekVhZ96FPHsCWyQWpYqfJR1aGUpdb2RWcD1U9xVwFn3ntHwq64uFRv5HhQxxiXLU3BUdnJ21UPeExjA2d",
  "key23": "5YhDpb2STLfVvHu3bhuVDLjF9LuhZwJcyd4PWKJhaKrXgNFzjghZB4cxY9Wspraooju8pBSp887yb1wgeAKiifE3",
  "key24": "S1F7xEHUSEo8ckEFCkpbYQRSGjdr9uPT9egK1UQGvRWVvnuiPsdQz2L4ZXEANRNb1sce11QCFNBsx2YWR4CscYN",
  "key25": "3F28rUMQS5SVU81RYEBAfDT3YAub3zVzveKutKT95gXZatvSJPorueWV7azLswV8QRVFmTruybFngifMdm2NmCTU",
  "key26": "2f9vZV4g5gQx83iYc8ySCjVbCDZ5PqQceYWaxK8MEWLBz5ZwcEMNhARcVMgkpKmusKXD2g9bM4FAYU6gWTXDKAXi",
  "key27": "5MGoPLh74KAW8iNf6XSLdxtbVWYqz1GJreiXfA2Uia1cxMPBwpa2Pr7CyC27uVr9BgGDFatPHnD4fu1gF36dWCaP",
  "key28": "2sMskRXJHHobnxggc3yzMNjNDuudiu7WRFodzKNJ4fKbXT7UaNfMDAq6vmDa3BH9tapmkERfjYv2aA95Ahf6qRpn",
  "key29": "Q2xK7AHNhogZ2K8ZYA7FePtU6JPFVUyvbVSBj1GyWZ4RZ2wzTL6mCaWDKZgE8UbYsw5SmdRYwEu513oma55hPFr",
  "key30": "3kiHrnk68f2YfJLSy2cc7SxgJs1p65PuEfPGgjV4MuSdQi548D69jbPkzJ9WavqtCYAhH2purcARU3XMa16cbSwb",
  "key31": "21EPwiLbaBNq5EHioh8aMw6GcbLNf2FFS3Vks1UKX4ewpqfUD5FZsXLrBp1fYyie2i8JLz6PEavBVc5PnMYcctoU",
  "key32": "4c1Bg1rWbhZ7PQHy5q81kUxRZJT2XVY85yBkKUQxuRrmZzkrLd1aisZFdRcwjTEDRKXRZPCFQz8y9bCugjt6QzHv",
  "key33": "2PWSr2jrCnpiY987uQFbEjt3B2kBuhPUkCyanqdd1J3w19rfu5VViHV4wZWbUeJ41hEnfjKpexhRZWqAiaxVZhVt",
  "key34": "2LA1LamZU3gtehbE45P3C6WC1yhJmfDZvifNBshPj7Q4wvm435jnYmA4rx5iNzA4PHv2KaKG63wYGX86FBDQMNZs",
  "key35": "2HgERSjKKvRCgPxyykgniqmB51VZ1qJPnCZBVPxnP8yCyDP4RDbTPbdCJakFSRkCjvmDjk8csKzoATwNGV8YtCP",
  "key36": "3DRYXcY6mYmTM5NXdzJ4c3L4MQduJh71TZwzSwr8iNuKx2ama3gDf4vDBgx3NVA6dZZzAe6LBswcAWuLkjXrSi4p",
  "key37": "3n4xH7cfqYY98VkbHrGSQfZnCvtitCYqufUvnEWsQFb1bgXkcFR8SsmXfWy3RaoyytZ8ieZix5kfm9fAsXeejHSH",
  "key38": "4p4JX1vo8SripMqtNtfAggqttunx9Enu6PJQMWx8b3t4qa2rmvF2aoipAGYNta58A5mbDxnWmkrWB6iuxjudQFiK",
  "key39": "9rrtLBpYm8Wef8Yws8sjrsWBk7spxX2QxDPBrRuX6tedM65GrUPDzzLyL9kA7fh8cPuw7dovQ5QsHGZw67hAUWA",
  "key40": "64UAwrYLLey64pq1W2nKNhyhw6so1MW93V3AtWkSE63m4Axcci8zpFfKGQbRch32xjjBfiBUvV4uQffQJQniJBvh",
  "key41": "3gV8XpF6viEiCPe8naMWHdHepVppcVC6BUbytrWyMbVHbokGB6UTeN61C3BdkU8qpw6uQo21s4BEJUcB6FYWk5ZZ",
  "key42": "2p5D9bj7UJD8Xx6RZiB78LPr9J3sZ3zVovuZCSpTS5BPzT2HStVMuxQm5D2AsnD6GZ3fEdh8ZHWwt9Hz3Di5xafr"
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

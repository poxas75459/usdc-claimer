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
    "zw2Emkh4RAY6ZskL1B7KevQZzuxVtHVKriFE1kfwQ9GopRkkXY3nvFAmEb6YkXJYhfwdPKNMW9DnDfDVrxRhNb6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mauSf1tdKVTMjg4SfwUFhmU9Krp6QSGkwj4sVBM2xNtkJBWtTvbZTXxrP6igLDHLpGBMPMCxjxmtAAJpYTV3c8d",
  "key1": "8s8yLXGm7Y3vCvPiN8iBT5SP763nuBfjmp5Qhv2E76tSw8DHA27MCTTvNub5xKvAtdXGddq7rTKJy4e1Yzguc78",
  "key2": "23menKbYVWggjuihKREVE9G4e4asyQkXLA1oop1ZVoKYMKn4bqxfXQhHArW5Xxxz3FfGR1gkqo8f6Rz72CKdf6TD",
  "key3": "2Gs5PJLkhGs2ZbbuPqazBSeunV61ZR2jwKeZrZFjuDEovma6YdtbyWT9yVco7ZTXkgRpYfQqYPcXZXeWVSfMthTt",
  "key4": "ZNzmxC9UbxmZk5QxGojzwAgbhZu6dCTEA1kxqkG4FmfpR8AQQAFZYNsJhAhepr6d5jCDeWtT2RMoWzqXBimnUPx",
  "key5": "66ivZQranDxQo89J2wd8g9NNe8neoAJLWfvA7iR65KEtucyitnkKMpndEzPFZ2S9A1kb4nGYNhaDgNZ2LAC1J2JQ",
  "key6": "1SG87N13q2cPo2S1ptYjryKx1nAv4WGxLi11z4X71axP2M8VkyujAm1qqygtJUiYKS7Nf54ZQVAzkswU98i19iJ",
  "key7": "2kkyvmWZNNFkxCP6VZMc2jntehmH1wXyWddwdDcck9jz7pLksAmfDm2avRSxKVfx6UWhHrcuiRg7h7JDtqnmM9gD",
  "key8": "5D24UUe3sL2yQ7LibtexcTHSLEaf97fQx8MyDLnCe74pYPBPYiWUdBAoEB3jutj6Ws2MH3wxJhRuePB9ENUqjxTy",
  "key9": "53PWbjMhMSze7aZLazmLe7AySDeLPPoetdHn8WYiGGEjSEH79qKifPHHeA9PydcS5HdNdfgpf4jTocskPYbGnatP",
  "key10": "3mebST4JQwbnmkZrtbogknbPPXK2UFcjcpdhuEGvFkUNdacw1rhg5wp5LtxdwnJA9ps9dEZJRrQwooVVj4tq5Nps",
  "key11": "3uyRojoheMuTn3fw981aeF12xRYmyLAZ7MH8bHGK7b2w6GxJ85iCF6zWCdKdrKHXM3fAX3sevuxAcRD4TEbWNSEM",
  "key12": "4z2zNVE1c8hSqE2UvVZuRQUapSZXzzeUMR3ppi3BbTAFnxQubQjRVyMjsPhxUREJYNcH1eUaQpA1zMygociEvFwK",
  "key13": "4e4eYwUw7Mso9sKTjPeX1mtB84hcouPB3MSoUoCU2SjC12SCMukyHPNiveb3vfgcafev7K2maxaNtm7gUPuDWMV5",
  "key14": "5QFYF2YdaW7zFwYrpPYpxPkaNTvmS7y71tsPfjrQDcjkiDymAVfdUmm6JVZFTdRWepotZn5bfjtYT1G1sWApcRzA",
  "key15": "4iAwWJLL25oTvABYBD91z8S4zHuNtn9yMEiPwRoxu3n3S1tFF7tHPWcdhaTspmLbB9PkfcjtuKn5Yeq7n5JFXKRM",
  "key16": "5Y23oH8Mb7EGTpjnEe3q5C1xErxMaoVDvqvjMN7Msdizz8EeNqNGWg4FwDT7ynA6Nss7NQu4SQ5mAzoELhabxfHv",
  "key17": "5cFg1QTxuKpEuU3jsDcm3qtUbXyBNRBMeoX5MfvVfpugm2R9PRzBzzo8ubKgReQ43PUjYJfumezpM8qvYBo83v41",
  "key18": "5W37AGkgoUPKwTqBQnwr2PrWmweunH3knBmyeNHtzATv1HM3nKTf7WyAsQZkNHyD8uho1swvYLf9sz6BZaT6YjPr",
  "key19": "2KZspc2vrXnDpKVh1BceaqA91AnoMcfdPEMusvBo2tdLeNivbm9yopJnyib77dUHa6Pwd9PRefraogsHshm5mC5Y",
  "key20": "2bAPiv4Zyh38DJXZCk5iA2nh7c3xEEruGSPyVvgVP9FUc8J2Xy6b4r5JMB2UKuqU4roZnp3BFuYDHJVV2yAWiphX",
  "key21": "632FUCk7cszyyDvYhpnBBwvT4ZpaHCUV1rzBnCXXiX9UCXXNsgJTs7JoE5TVaaVH2p1LqXLnQGBJ6JFbqLQGnsSE",
  "key22": "5j3MzCVpUCp1rMUrDRWp4G7Kz2uQoyRcaTfTdMGamVh5QgepbfGfhNLwVSeaXJwi2U15eDW2pcP2TGpvzxN62nxb",
  "key23": "uBapxbtGDnVhSoTmYapizUPbD8HQ1b3yE2dmzCVFmhCBEQXkdP9DVeGNBoAGw2VofYvJed7ZzeeGxvHmYnUTMJT",
  "key24": "3LvH5AYW1HhEcseFeZN4QxP9x6AZkK5GvPTiTNFUkqMaG53hmv26KUbFGB1xt3z9yuP4e2Gw4tD5fM3xMChoTJWL",
  "key25": "YdMvrpfyXL13MPmkwyeY6QxyiFwFrqj8a3sLd5kv7wJDavBG8AXy8px7487iJN77qQXBqE5Xxbqz8rS3phuHkgj",
  "key26": "AXBvUdi6FVf9xfWiZMvJa7eZ5FsaK66oafUJPFniauTymEn35bretbUfV7QuLhBGNYv4twM4yCat6kd1jiHPU77",
  "key27": "5APWySnQYistZ5DkwXsmLNoXoz6qLGotKcLU3DGEoipnCVRXQtX2e77dZCyovEgbqEuuRi549UxWCZdXfv6HwLMz",
  "key28": "5bdwmtCj2aq5xh2qKBwyR1XhZKfyJwatsPWuLqAop5d1GRtfuQASL1SPpRJtYYZN5uWh1NzPZ4YbKvmK6Hfdm9M7",
  "key29": "54uZmHD7vr4Ui1CQ3CisRRjNSnR3eZKVa6UYa5iVk9mS8XKKoTwKAojrN2XAgciFq2w5aCTpvPcBrfLhydC8FsyG",
  "key30": "3g3T7BrYhAQkRDJasCTp1b5HUU3gbXh3JbgKhRziZ5S5HsM44haiu95oWZXj7DtNZmbBsSzFsT7Nw5NwMqf1byYA",
  "key31": "2beWFdA8rq6PaXDNcVQT7PzziaQLdoSUqKm5yMz8ERoQMJ9A7hdgJZNCvoyBfsJHx3udD1DoAMF4XPJ5SWvKHNKa",
  "key32": "WY7pMCHrTrsr23s6oDKWGtqpYd5RLQBoJ24ALzsqfFUibuG4RohKfyf6WLsJpHKB4jBFDsNAF3XLKaEgRXPxyQn",
  "key33": "3dX5j8oFTd8R1Zfr1ef56mPSPpvcGLvdYekVjBKVtN3YYSb7kaa759Fa5zbz6WVSZ5CG6rxrR18NfpaKAkaJyLbf",
  "key34": "3U5mE2PiuJuXHGYzNg6zY1sQwPXkgPjnuigvHqPmD7Yk8DySzrHauomhy1qcnv6cice6MhfcXMDBZ8TrSYLe1RxF",
  "key35": "4tHbzNPDNZTmqb1SfDcUfRcJbj7EDqyGayzT9keRjKWygxwg1C8QVY8Uk2YPpmZGCLQtfQo5Ugc4KGjzpangugaR",
  "key36": "4xJoEXTAQ3eXa7DprobJmj7pWJmA1CRqxSSKsRrt87N5KPQmZe2ZiDjk6MnurtoFffMKH4BbLu5AFt42FQwrvz2e",
  "key37": "5CVTRU48XDdenuEH66iLVUPcUwrtyw2a4t6NjjK6XnxrRtgqS8aZ4oSYvGFHt2i9Zhue1YvB479zoFcNKi5g4mSj",
  "key38": "uRQXxepgpBbfWvY58A1pJdqygdP5ZsPGRPMZFRH3EN6sSZjoYf2F32Y2DJbgcGiXLSR5icwrMNqouCVzyr9niV5"
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

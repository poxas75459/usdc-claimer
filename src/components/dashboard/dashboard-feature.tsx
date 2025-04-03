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
    "52wjoXbLrpteTnkC9nkF8TzFyoTGZS9me5BrSqupZBrWmCF9X5ECdT5Y7thcaJfSz6iEs232ggjyhwDwacq3KdJC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UdbXmZraLuPeE45xtpD9xaT1Ka5mvpjGbr8j61CWL3BDVvKmWrsVJJYfSSBA9SwgnBBpnQkhiAyvLdDvWrN4N8t",
  "key1": "3nqGek9jj31eVXwXZXL5u9HDCVRubAyEMqGtjxL5ny7nrBSi79nVutQoebSnRNPtEc1kt3t5ZB25wMtzPhpmhK5q",
  "key2": "2EVpmkvHNhNsSd9RNdegW8CTpct63chGRTxrRR2YATrxhUZ2XbD7xQVFWaoagHUMe4fu4udXXzJZFX82L8kLS4dY",
  "key3": "5SPcy7DsvFfAHGtezWYg9ALF2nAr1swyHtjkrGoZjNPj2KaREBEkCAobfJrvmrpRnXPAsE9RQqocSgRrDDBsMQ1X",
  "key4": "5DnWZjtta79XBLN9MUVGiyd2yJz1hQEiaRNUj5ntoXnq3QfTkAVD2PrMEqzs3LUkjsaaPxT44ErjTd6n3DgGi2pZ",
  "key5": "2RYzDDGYk1SmCw9k8UnqkVTzhZWFSZ7HAV6RqvvUtRjhkZzFXiJX3ZTXjBmydfVQaenRCknkdnXrppzvDg2Sbxss",
  "key6": "C2i9aMkAUP4htW3frgMLu2psmBsQKNJjBjN93RsrXeFwREQQU8xrSevNWgSnfHrMDQisEbdx97E6iiekkRxfjh5",
  "key7": "2jvLzQsHJcZmoZEoz2wxmoorL5X3DYFsUjh1ayYZ29dJN9Cqviaj55G8mkgMRb5up4LwivXivPD4feUDMMP9BuA7",
  "key8": "3xMQchGfLxoBQeFVLPy7DnNRFts2aGVzLnikEYMjiU8fm3Zi4jAqfwYCzsNMfPraoRhuCLnSzSc3Bkk9JF6T3e2c",
  "key9": "653eCxyDvRHkZqb6R43jcZLkR9fFvWaqgmGTkuyEToFSLwfhyrvhaUVhERYtGB15knvkMqDqBWzcVyDuVS6kRnVu",
  "key10": "bs9QFqKpVacr3TWcE4AhQW9Dbg1ohYnZFF35mnuuvf8RpY8yHT69GKaNzvX2SuXDE3bdLaCgL5VF3mZdCX46NEr",
  "key11": "65VU8B3RhUXnVsdnG4BYtiqqKG3QaUocMhg64VtEb9Vi9YUQ67uSD51n1gQNRfLTKdVr7Kn3eP41a2fmZgtRTtWw",
  "key12": "5osBj4F1QtXktK9CC3uyHoyJo9UCigbXsuPJWix624VfTR3ScEUtDUdQLpJKMDER13w4DxM1R46ZXUif2KrMp6ut",
  "key13": "5FvF6f7PJ8kVdzq2N8z2uEdfYjuHik7ESnRCxFSxnCJAWAyaeH5eBag4oUek69ypDrXcd2Zhi3eWxYg9RnqZcNQT",
  "key14": "31sHyjwehGicDiDfSzRYZ3wgWiTbNfr7aRQdYSurskY93W1MNm9VqLYNF22QgZCGYYXUjYz64JPCTnGyrbbkhJiL",
  "key15": "5d2DXn3ahrGxeGuxX7MDF9pYzcvEXutFT6CEEYYAa9J5VFFDY91aEjN7foWBYnPGoXPXXaaGqjvDYpDb2s4crFrU",
  "key16": "2MsgXNruv4Rz6WacrxDHW3qhRY58mD777DKc5K6JGvDMy6etCAoQwgydDeSJPLEnjaWGpXHuyCGYFaCiN1QJ1P5z",
  "key17": "56JS6Kq6mFoHSh5KEn2uTaRjgMN5JVaPXzDPxG7d7hbrNya3sfgA3yDiyitqufWVxB4ZncZ91QUVB2NXRGAZjac6",
  "key18": "61CMJuneYP1nNvWzozQ7GZ2zPjDZf2GZd7GRL98hEw9osG18HSAUBWYfvoTTgFXJd9CWyq9gdgwJUDXjyed1fN4b",
  "key19": "3oq8ZJsxNkfEAXUHE4DXzwYEHpxaKmEtiY98Lm3osiwu3oFyE56ZxyxLH94jY4bwGYUydM122VkSkJDs5KY4kd5Y",
  "key20": "5xV1pJ5XKGcdg476rgz7VtDY7XajtG5SV8GZukv46fXEgWRdSH9RRdRQ9ByHjKArhNA3quyyTGDSzwrecppEnoeN",
  "key21": "4xFbW7xNiDe6zzFhDaPQJuXnkK1usgjQbqyUc4Nd85CwaD5YT57cgTQS2ppWX6bq9NUpwRLeR1wKc9uBuLYoNEmv",
  "key22": "7y2a1t5M4gnEw9orYF8JD1FVUyLXk6rA4dmN13ZDRR8nK7YVxh5RnQFPRtW6NFynyKvkMgoVhL6QTrYfGLeZnqS",
  "key23": "4p3vwiGHvGsRL6cM8qkuZZd48RNLy1JNZU1nHgJNKaS2cM5NmcBW5BeEgV4LBJQWvRatZ5Gp3WTfWaHXmbYHrL9W",
  "key24": "p5EjVdJ5gsf4EXm7ULHVPwfxUogQFkE9s1Qw3QLt4wyu76h8Tr2Kb5LbX3g3PrRzZdAAsJ9JkYUruSCViEyPSbb",
  "key25": "msA31jnKdJZRTGmrWT7MwUfha3TEu53N8ppo9DycAyVsN4NXDswSM1Rg9wD3szSJ2QLpHBNGiWcmjYtpBaDNCno",
  "key26": "3rQN39smzutquMrLWtxU6Kpzf2FiJgk83sCtRr4JdJvQzLrqzKTZrKoc9ftY58SvtMhEBqGvM19nT4LiE593HucJ",
  "key27": "hMseiR8qagd2uT7kKQwdrvbfjH1DRTSbk9d37wfyCardv434vRAoZd2iD216VudzhUxgqtQLCoaxSpHNP3NU7bt",
  "key28": "2cvXCw77HJ2ZPJgdPcFC4NryL9H2ZbSsqn33cP3g25RNzohhAj9M6xgmXdBgjzuupZcq2E1Y6QRivJ4me6UgMoFJ",
  "key29": "4wcNiQDLsqMvQCBMxbgLHSNGAQxVeNWjSZbcuofgbDffKLQtTyEsnrS7g8jt9aSzPhk9fWbEsYAwABs6p5NG14zn",
  "key30": "3hfGMb6G3fiGJtu9W6FkpkDk5hMqbiizoL4VGeyrTVn1sJWfbLv2GuGV8zk3rTFmK9gNhucy3HRnCgnpMRqKiPvm",
  "key31": "4TU8J3trTj5AwyJ3Y2FXJzytJg1f4bUyGAqSuHJ34nWzQBBT8kNKWFgzJoLZuu2B6VffPrV8TXLsiGP9QrfrYXrz",
  "key32": "AHyBNuja953Fccsz12fVWyvU6iUTsE8PBsn93Q3VMcGy5RSNVbo7DBDpfiyYq2fJTp9k6Z3yrmbTkR5e3B1bhvr",
  "key33": "HuGKLnG8sDUvFZ7L4e8tumkhfXHU3r4rz8t3X55mwdiA5ns9KD6Mu12Atd1qz6KmFxp3nxkF7wXFqcoGp41Vp7X",
  "key34": "4Lx2gCLhruhA9JoZVLiTj2aLoL1g53gJcuqGmFnL32FpgQJzLSutwTAVnC2pYTXEcB2E7FbBURoBjs6pT3jg4Tto",
  "key35": "4YzMXY4vVmKwgKnwrYFqg43fan8sWbWba26J3yCZsRJhPcsAEW4Kv3R5yNYM5aF5VskhFZbLfawmMuujJqL1WCsv",
  "key36": "4Kfmati29VLAtSmvYWKSvQfpkSyQZft3QdkfzApgtc91ZmPJzqTpiHH3ShcFJUNGf2DpFhVB8AW4HtbyHK6pDk3d",
  "key37": "4wAdBTZgm6QNBHi56A2DfTFCHAnDeBYXshkHXZ896FcRiVMz4ApGsWDkrYqsgYB532AtfoemkNPCCHBb8PzzvxKQ",
  "key38": "29NphbHDkMXWWVdKmyu4862VWpQ5rXueoF2EN2fvFZZmnXGLfpKUZ1nPHYUdHq4hFWhYERrDRAFWPqrveppymms9",
  "key39": "4tdRc6aydSpt9FePi5CZLTsPow5vJyNQgD6AuPLq7AUk3mv2nJx3Jwk7ndd8bqktQrYBtPFdayo9vkGsfKxoVTeX",
  "key40": "vDFeTTpWyG2s4AuEmp3uEqoaHwwUHjktqtHY96wZAmwxzrdLaovwSkEDq6SofSCawuMrmKFWJqCS5TzRmkPNnL6",
  "key41": "5JsX1eJkJxzopDuKg9DBgPqg73nkehJQj6dQ6T6MTvFpXJvC2neN8vmFxNKXzBtiBzMXGJAQpHyonVDwKafEmFHz",
  "key42": "3JatSNfgR9L7M6L2VMDfV7Z52ZVw11kNUrz5AKT95HT66fhnHzuupmaZLedfUxkB2KcdRKzEo8HQF4xp4Ds11374",
  "key43": "zWYkwpysx731Xn41CTd9XhbqqcrTpGDwVCNtbSe1LUAsqnMkJUVcvwzHbETuA2x49DYBRidfR5TtXyjG6fTkud1"
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

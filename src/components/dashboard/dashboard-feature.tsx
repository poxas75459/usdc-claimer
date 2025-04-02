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
    "4LpoNBrwLgMYoQAzAdcLj3PQwtYsLB255gSHCUbAMspACkvwxK5qh1esq9Rgi9qTs4byqg8MpRvdzEYAfMyGJ937"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DHHgAoxiisJ5nCpd3CHMPCWXbNv8nseHty9MmhTViGP8mujoXTzWDfYHN7YQP1v6ZqXekcEverobED4pi228Ern",
  "key1": "3ZQBwvdMP2cVsudwukVgaa1tuoAhFBeAuFmjMBDVPw8wnu5S3P47tHXk7HWd8tEjQCkpZDVcs3GaS8rmKSd9qk6Z",
  "key2": "9J9nSjgFBsqt9SCBnF37krZUndxs8fy7AnUs5FmnBKEESEvEBe3MpgxPrnJqbYa3bGjSsqTk2BooKt5shEGZNS7",
  "key3": "4vjbDi3GXx9xtakk9Jh8sPQ9gwkzSGEF6TKBjPq9djj6ETHt2hKu87C5mZ28QT2Swt2zCfZgz6TW7NTgsxz5ntcN",
  "key4": "PvGrTYUfbMGMyQ4ZL4cB7xSH2ftJPzxujCyPJRogpJHgzajz9w7pVfBSAfJjum5NV4EXdCw7xS5DJb42fKGzpHJ",
  "key5": "26VGQJyri9qwGa3AizzvgBjp3WSTEywPsbmdkS19Puh63BhyLTxY1VLTi2T3D7o17uTXcpW6SVvdxfnrJYUcGzcn",
  "key6": "2AJYovP6rKDUTdf4HkVyxRUWFAq5j9XZeWGufzNBfG6yH9m4o6FTHhjUjZ7rXccrhnxPk8C2CwZNDWxVnX2Munb5",
  "key7": "41EyaKTxrAgPTZSn8xArs32FcQBQsp962Aaxh8eXxCsANY7ZUPgvyXUA28PwkqZXUf4kLFuaB2vYVVcEwz7AVcRD",
  "key8": "4PpuTwx6NuxvmS4ZJDbau8K1kTjNFd4jj9Nk7ovR1YuDt9JVsXijBmmUBXE2GP28tNdGqnVR7KCD12Rb7Pc95Afn",
  "key9": "3JVREKdqZPiCWhKHKZd86BwJZV71MgF7DSTWFoWNQBsiyZVVLFME3G7yWZBedkn2QxeuPZKSQgZ3s93hyboGBjcJ",
  "key10": "mhFFrcVkfCPTFaXwY3NehXsi22CGm46Me7rcQwgvV7ktZ38rVueJd3X78tShAoeJmST6ozF6KZu5r7BQB8zFhbT",
  "key11": "5MTQtF5pEkb6q48V7fhYf6NQunyF6D6gRmbpKGb5qmLhW32zy73VGkT7qshrNqXy28jHciGTMaFzftgZ2QQDkr13",
  "key12": "5keqTUPduM2y5ZCrA4TC5d5XbiijGp3dv7JypkY4fc5nqqcKToMy7NWjaazDGjc3FWQchydqKPNBD9sYm8txbsN6",
  "key13": "2dVdDsmE1Xxd5aEMAx5vzyzjLdz2NLymYZwJ4HhWvCgzCj4Kq4Mf1tey1pbhn35H7BysRqcC71wpM1iPqG47nUqp",
  "key14": "2J1hjxqcHvbKpvA8TY1fWR7v2RpreP2HuZmu4gq5GUbwpd3CHAd9rmHbwdiWtGSLiWTAPd159dso3sS4MbPLa9Jw",
  "key15": "17WNiDUgWk3FiKbYLfFDkhrmYAJuRVnaiLnmqucJwi29hQYX8zC5QPdeYQAJnhPcC32h3PbSSaJXodPsJYhYJwG",
  "key16": "4t6deto3dRGKoVNq48Mui2ae9ZkvRnJtisndA37Nqjveug2MYSj5KGAekqLAiqUMMsv5zj7nBWRadS48gj2KQuiq",
  "key17": "TBmjCMggrHRm3jeKu6quPPEMAnHqzTUWnudVcEGQjWvod1cMRv7G88Xws5zJGs4k67H5jah5inTV1k5hgNiiHcw",
  "key18": "jLYKCCp95mZfV8Bh5NhosNZQbK6BwFBVR8ApsJM8Ax937D5qUKYcpKZFNW74g9kXu1tDP8LkFnYvrjmPaKFNEf4",
  "key19": "4soEUvzKeWDVPvZj8Ai6ajNwzsfK8cP9FihXs1aTLk5MLGyzkhGUrRrEqF2fvNHn23AwMj9C424Re6HRJ9CpSiDV",
  "key20": "5t6avdoS1GVypCLqXYNMCujypdn7ErM4wA1DeszL4vJruNkZ7bja9rb3PdbNfwXPimYcPFHdM1qxvUw9tKMwLPTs",
  "key21": "5NuaRZmNqpf5i3qBYsn7CErFKQdeXEpnyqrVPupNUAWirhzY93ipnvpBu5U28ekd1DEk1JPvrdMtqjQ54EQ75Nnv",
  "key22": "4LxEYFjqJ2K4vRnX2Tgqa2hCGwphFuW4a3KwA8tkqpMHnGFiXYzBNJZnfmcpaaskr5Fc9NEccg8c5sfsqfJFRDSr",
  "key23": "45VvjgQZv9wbguduAVqbegVZwnas2MeQvtApJkELcGf2kWwEAsKeWLXrncTaYqUFM92ior9miqg7d72rpW8MSCAH",
  "key24": "5g71caospwW6d7aY6VajVK5yjwDSrhkG1FuxEF4eAiuB37gNZWcufAV3Ynjr4Epa9HPnJqgSfQHwhMWCAoVqJ23D",
  "key25": "4EHBvXd2d3J5mHsEBDh6ME9eMgtXvz45k3MQCTxqLrbCSuUvRvvZYDuHM1NfoUzpRtU7ZtKRFH5Qnoq5uAgNxKct",
  "key26": "5ov5QYeJ3Ptc4W3stS4pxV9Ynxiufzzge68h387Y6UdrrDTeWGkLRvTYE1TbrUDnNRn7mqvgyibwL3myx4eYpiW",
  "key27": "VVLswreoSEFVGhpvp6BbCNbaaP55Fsn85soCr3oVSrxTJet9HEkpbTzgHnwH5LZkvsMFQQQY5Jfu3Fbo1s4NdZY",
  "key28": "5JvbWGxnQmNyzo2CHsohpS9mtkCZxhUNfeXGinvX861ePjtf5NNMrbtBphsiMNNXnQ3sLDsJVYToXzC3q1uiU6Wv",
  "key29": "264UQWgB69QMjpJRhyttjwSvhCHqgUwvYhofApY98YecwbXVWo95NeKqXSVxpcnregFTPNLXjFXuQDni7kgxZ6hZ",
  "key30": "zreEuh7vb6W5SspUuH79wWv7NouZrEGTWwch2SZ4Pu4qE7LaYAxHGDaH473rRcLfBuCSPKBeounfHPByPiZD2Fu",
  "key31": "2xLH5JftLZkN1oWxnJM7KxAEgvjAUvVoNNf4zhRpYADQTMjz5vvm9LPKhkHiqoivWEEXuM1NYanEzDwxJwDB8jp5",
  "key32": "31ZFtr1mPJyDa9z5JER7ohNrMqk3Dgd3sQq5JAWChTYdp9vcoQSFovZvV3Ci3xoK338t24n1ErceEuAwvyn7zMbL",
  "key33": "5WGnRJNVbnMXzJqmfWgs9gP7c228tQknD44k9xB69pr6UGRkP86rUCxgGuUKCvEpFDKM122BJbeDTgkgxcrMXBgi",
  "key34": "MtJ4ffTauX7JeHNxqEEyMBH5zUGRFcvs7ci9cyLJZ3Uq5NZhziRqPVpMHUm9TW2auodQHfUndSwPkhY1ttonAy5",
  "key35": "61geHSqKrvE16mJ9wZZcAvKM8PuznexhZjNqBnMg8Apt54MnUGGeYJBmiQxafnPwcvL5YqKdZRaxTjfGe6RWCrdm",
  "key36": "2honydcEWJo1sdfAh22NKitGb3AULUAsURJN2k2UZPMFYCWdCeLbYekusDs6qKJF9ghGwifVJtkKSz9G2JVy6bbH",
  "key37": "3MukCQBZZKZ8tLUZ8d3vChBCqNngH5MyJ5TaZCkLXdKxwGPUZFXTKC1JTdDDfJtLB164Pxkk4qqU4AY5mKx282Fa",
  "key38": "2YcrM95PTCrQQwo1XUpmHvuVGdpqBsP8rZdJXLsn54VxLXJjrZYo9oSxy2jeWKQhxZSGahNPvMqQCawmws6PBoeJ",
  "key39": "4gUnp7678v7p19eVbKtW34EZSWTX6UatKyPAw9ovByhUskZopxLS9SBAof9vTfQPoYdubMnHRXwMAqHYPEL6aRTZ",
  "key40": "67PCpM1s1A4mHZCiibmQqKfuz18684Ze7pAjnVh3xMozNUPSmMqEKFYBGPAxLjMat5okZQx84su148wAJ6qN3jsg",
  "key41": "2YkFGvY5Z1sZ9Wi1nQc4KwVx9yoAywcyJRR4tCFSWPhvN8v2ZUAn999rW4SXpSU7ARZP5ibL8GHScoGQg4gfU3Ra",
  "key42": "57GT1ecqs64FK7WtC2dc3d5sunWxVUTozmPDdtUm2cn6ZZBW5gnZ2CtDWGD7gLKJSV1QV9bBz7DrTbwAsAK2MGXv",
  "key43": "4micjF9xKa29cvtVLvBvDQoKN1EnVpEi459ntUzV8JuDVTmSuoGNCXYQD8vTSSghPkJXPr5rpfeSVMVahkDzbfkY",
  "key44": "7KXYtnzqBnaQHtEXw3JEQantTG9RLzL2pcVEtjen6MwRdRWxJips74qBFtVtYPS6fLXH46RjTXUKfyQZCA71QT5",
  "key45": "fgZmMoP2siraHT5pBQ81n5yp7k6dRVABGfhBMfaH59mn2WwLFXj2dTUwv9vPGR66WFQHJeYhoHNiaCFoTv3yisL",
  "key46": "3CwVyUEYBLacjGNfSNmxmX86wPC2gRdRNuVPZj7E9xHJoioEwYDM8DWqGFhMx6h933MCTeGGTazutLysVzKZRo3o"
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

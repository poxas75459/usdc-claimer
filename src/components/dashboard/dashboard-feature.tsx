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
    "3xz6HBdrDyWYBb2UK9fU2jGnhhnAheKB6U967eEJxvB3Q8X8yy2boFCfiQ6YU87EMyCqQia899pykuiZjaq5PXBd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kUri73ukhFXdR97rujcxXF4NUL8C7DmDgzoHk1rvSaEEck4G4q5fDQiW4Ru6ZWTTYDQc9FerPrW4DLwGq7UNxXB",
  "key1": "dXJW84GJhjvFKtjgMcYgB29BT9bbK1MJ1s3PJNKqa9Xax6AS3WyrqzcuY8axiZCQvZeZjTqDekh7uCe7tCW1hf9",
  "key2": "4vSMHK8UaLFnPKackpg8Z7gwyZc46LK4i745iCRmhCW94vnzRduVBUaErhEkw57AjdAqsZMT8fKcs8k1Gdsv2wvv",
  "key3": "4YLL2YqnKrUPiVt5wYD1q7AoUnqzb5yCwmyuEgrW7bcmqPQvYjfy6RukHFyuR4Nzzpr3kY9pLs2t4AQ7jUGCNE6f",
  "key4": "QzPB6Ui8zFqA9h89kkLquoD5jpvjenxXavBH1ComvZkZuV7tDLJTo581pENa8WQBhsmCyVitVJt4XYWwpCfs81k",
  "key5": "3Hi36whpYoPLrQuMWE5xT4bCw415cCGxeGDqKGD1HLewBGkxmhB55hHvr1NmMTgogUvjk8a5iQrfCC6znzna4Wgr",
  "key6": "4Jy8kpwZ3tH4cwncBr9JgPMqcycUWPgnLgrpxbADAqCgbmPvv1EPAdMrWzormEizHaaUDZX1B36trSfpatBsvwtY",
  "key7": "BWSwEvHnkvZ1xBS9YZXNegm42eZAxrz82GaUQB3rpsJgHL5WCXWMdVmfNHyThuFjNnPPC9mntW2aCTrtJiho8sQ",
  "key8": "4GYzgcijvK4HHfRSiNywKjqZZP1ZekgJ57ruhdULiKnZZ77qX5tYrMFeHUCpvMPCRkmrRSKu5moJHA3oCx12sskZ",
  "key9": "3NAjPFiYDZvs3D9r3r8ag7QSSeJd24juvyh7MvsFekFMrwyoBjrpWTfhQeubWivgL88t3LpGKzH2GvhvRHqkBRW9",
  "key10": "DjUBH5kHJ49Xu4ASKDXFKPADmu4fXUhtYuEDp5S5yv6bcJeWHb35ZHV3j4Qe3Lb98SFwrpg3uPtpUcztSUNZ5Sm",
  "key11": "5Nh9uUVXVFW1ymn9zy1nMQVaNbTq9E9WEdZqLiqHnDJ5zsdyVkpvCLaD7c6TmiJLj2NkYipo4UuQnKYQeeDqwYaU",
  "key12": "66cPfoudckqYLQmdNsMnYNw5oafdX7wsxv8G6oRGE9WxuQC196JMzLJc6HafXDJh77qVup6ZLqa81BeM5t5yf2ij",
  "key13": "26gzDznLsUZcz65KNQv4oe8Z463C8YB6sG2Yk9FgHagHo7gPxoxuwPpSdq78PwEhdRGNwxq25yPaBPpjQsJWTSAe",
  "key14": "4nPB8rje223pVGn6VtEa1hX2qjYByrRTYzfnoCPuAqLLPSCxFiRmnP9ka9dUKd9VPqF8LDcbtHTmW6D7FPSYJBSD",
  "key15": "2uc74hjMBRK7K41J8DtzPjm7uxYoG579xniTCHNLTPY8hGiQ38WooEtDtx1k1Ro9ns95FnJJ2wCiyk5Jhxiyw76M",
  "key16": "2ZEHgxgaGPYbk9uhMfNrR4PDNmCHihN88AvP4ss3XqrZNfaTaf6HqFWBsKjg6LS6vk8K5mJTicvz2JT3WT9LbEMV",
  "key17": "RNSb71gQHTmjwtihJNxcj5px4EgvsTh8K8sBFcBvkHyNpD3sjqfEzakKoBFMDnwTZT3A3bSSUQFkyMYxPX9TX6W",
  "key18": "2HYym7xDxcNd9wmB5U5Js7VtnWtgUyb3Q8fQSpgmKcosKXXfyBdwELahYKuomvciiEnaLsb7vbAvA8KDS8G6SSci",
  "key19": "5Tt2awDSVbgL2pgZqduqGLF9XCAky2tGcW7GX7rvX22zRPjT2D2UFNYAPsDBGbPr1WQddkNYwekPjPh4oJwhqPRJ",
  "key20": "4Z37ZE6LK9wbPFjgX1yTw6UKQqJqvzD98FLEwWiQ7CZeV3msGgsV9QDWNDf9J2DGTiRwTgMhSuE9539htfPvAfeC",
  "key21": "4w4fxozu7bcB27jzmvcFqodUGYTrZeiycjUaSgZLsnGoQURtHpKaMb692f9YHtWMgq8CAa7HYxCrzZagkpbRg9UV",
  "key22": "4jugFP5sMq17nvtWWzPkGLuwDiR4Ppaqn47mTi72wLAYcd5ZDxEpL7u8mNZqoUbWKFXN4YLb6xn58sBondsv9ja5",
  "key23": "5GTenJon2YoPDtijmpE6QYTbh22vcnDCPpjsjfoT7C7AzAsBVYo24npm8iqqCex8kJaqTTQbWLMKouPQNVvDdFfs",
  "key24": "4E9pH1pmzd5bHCxg64KNRC1k7TmCxRMUMuiT7Vi6hfR1yiXAH8XfzspwLdtcFbCuxv64Ca46r7XKK5Vaost3k89c",
  "key25": "3qC1TcXXCCwzT5rxyN2AzX7AX2vWxvaJY4VoYvM3oxC3oQb9kUag4zGz7u8a92KoGwy8XAi8vhzdqfG6ohBK7xMu",
  "key26": "3JKqeSUHqsiJwyZ7Rn2ZZaqePkyHsQ1jKWcsaeH29efVciAHu3RtiH4GuUUvK19FXkLYH2adAjSkg1vTimepKTRh",
  "key27": "d9rzMPiFT42G7n4PyPYFdw5xQ87ML4apcDwetuyBjpKkc1idKxg7PfPDjoZc5xomZEnxPNrRVn5butGRxembeU2",
  "key28": "4cFtfB3wSSGCtrCTUgmPECReGaYLoLijxQrQL6iX84RCzUqg7FJj3Jn4GhbSSitTVPTM1HbzXVZ6A4kqhzbcbTgw",
  "key29": "133hdL7kKCEGNxD6uhbdRWcBTD3ztphdQca9LpSFFMLdpNJf2CzX9oyFUwWnAYrWJzjU5ttUd8umkM1D793D89E",
  "key30": "3LZTcM14TVecoLJG4rzGwKNWra9fnfeXHfP5zdghzDE4dRTNMX9jJ25F5r5nhEHvgjSXAPqVWYrkTdLoa7HonwoF",
  "key31": "fptWH6oofahpDKxxbc2ZHCoKaZZHNNhugdVYqJMTsHjd6VWoQ1DepF8QbBXUAvxZR14u9NfCjPmvWLevfvdac1W",
  "key32": "2YchTf6Xb33syFQoJLxs7V5BEMVZzMe5bCbactoRyGviGDo21Du9haM3t18WV62FZVCfJeRixo1yTdyaAhReQGVq",
  "key33": "2byKGJ7xPGV1YPPtzhe8bc62eqb9jbi2DvATFtnNj1iEmhfRbKJ9ZHX4PjnN9Pikw7rUoGPsRqBpW3A3A7fUeNjp",
  "key34": "2YTWF2YcTer2q8uW2BCwVdsxAhV9JKQrhp5yYkaVEBAm1W4P4DeNwGfNWniq43CfHDuMitcRuAYUPsV9ksNuJy6Y",
  "key35": "3UdkSMLaDzxFonWFu8FBCFr69UYasGbu8qR787WTU9oBYCNU5gq9CL7pTnbPWpQQ6Ey7mis6hkMNgLyuBW1ZiWxK",
  "key36": "4E6TSBScRh7XnkaHkk4BcHDZPJqSN89T5HKkWXERtxRW5xqrfVKhJrCNb7rmYUPkafT4BGSkbtR9SuTcT9Yk8upA",
  "key37": "5vKJvsBuBo4zVFwtBnsuZcyDz9sgAYKBKD8D5vMbAUm4gXC7EdHZ8jY2UbFVbw7h5ngAiprqADcwW12BK8PpQiSK",
  "key38": "4vYDfJfH7o5XLMwPXe1V6xyvT87Tr8FA3uTcEyNwfzyFkEwJQ4ShZHSaBH1RSfaK691Z8fahR99SPyM4TXMWoWAi",
  "key39": "2arDwES9dQWWsm3UJLShc867fXgffkGyUW9HPWjXMeoKMS48fwJJPeYz8Np2tfeYNqhGoeck5CpvEH3L1E7erzBs",
  "key40": "288sao91EqfjuBwEGNK5tec5i5eHmNuy36t2D8XTubSQ9RVsgZAQk3WPJQsYBRNScgJUshD5BymfvG5BcBshGQx1",
  "key41": "5f5u2QWRAoDUdV4tx7d2nEp31zg1U98btY2k4GoZJtiVFQScVSkPsPEKJn1SF2oZmYYY86cdCdjab9K3vwYApjg3",
  "key42": "4rRz6KX5M7NP69gb2cPTvJVVPV2xevpzxTpU2gVTq7HabRM8mjRkSPhAf8daBFjryDngB1oBUAR9RxnUc9Dkaqg4",
  "key43": "2VaiTtm3z1Jjq1wMyd29da6Ag8sJfSDydeP2RASWVrUe8JRSYmudSg1AzDZbL9kQTVcVEt17SkU8PE5Nd4hwWEFr",
  "key44": "3zxhSr2YwQTGDrBLtUMgrDwfdKDQiaR4qV73ih6NYADxtxDufJtdjHkvJG5Eeuuy3c9X1DFJxjXNS1tFWNUtQDNX"
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

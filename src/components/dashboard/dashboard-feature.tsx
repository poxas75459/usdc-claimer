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
    "3UritCY9cV1eGACn1nGt5bgTdpuN9LGP1poCKsVQCagRRzFhy4BEk5J994E4VGEtnFVyesdkzAoytjhhYNpEBkfz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LU3tHrSysvrZNyFe7ArNDy6vNsuHsGhJxtyyZ5XypHkvnZRhGBXXr4eRi1yXZCEi4yCwdtRE7m1htfTtgMUktaT",
  "key1": "52qfTLoAQw2sp34mR17GJELGmcmA6t4W16PGYoczKfmrS46UDnvYdKde6euzY497hYPFeY4xRKkTjq2RT4Z7DaQZ",
  "key2": "AsCaU8ZpKtjfAgdRtYdjV3eJEBxhZ8sFHjgtLu2uYHdVzEnBCryEVdpgZ3riCMBmKrAqZmMJARxKmsJ1nLawD8E",
  "key3": "3KKdpzbvtChQDufqbDzHwgmvDW9ULNxRk9thQAc3LoKcZnkq6hNh8bmMWB78yDxTjtKGr6vZVwphtLsKU5zVMqxM",
  "key4": "5yH99DepXKFKPniDPZs9kxsqt2kRpGvPg3U6Y1wL4QjL8y1AAZCSABNBmbjYDF7R3dkkgTDwRtkMeN2TzLZoWVbq",
  "key5": "4cV8qNXWPUqjVDNXbdTQoxxJNcTnKaL3aeVb21c9bVPtSnowBMULkE7itJSfSXf8v6rqYX3q6pjDQSnmkkiPcFv9",
  "key6": "3t5dPFRaNWW7An44LtgkjSwDES9LW6PHBZn4EHAcV5Wio56fz2G7jaN3mEyktvhuS5md9JS6QrSvFLps4i24EVA1",
  "key7": "39t9ELidjqydGtxsvh3sik1a56rqPJHxnfHBnXmaXPy9vMZzcz5Ve7YzMST1GYMogU5gq2YVfsqwdEvD46Nq7Yu3",
  "key8": "2McpjwntJUaRqkBmdpN23yUi3wTRpzmG3BpNgsasZGgEqTWwbewBxmshx8FdxjLo9YSLo5WRkDrBA6qtqRDmYQi1",
  "key9": "5JBAiukeuqfGL59rFn9yE94DE3GV3CNngzHfVfbDqSXwMNsXrT7LBD7LrTHqB3BWNrF4SfzEYp9ykgSwErZRTHgk",
  "key10": "DG32bSzQNbU3zi6jwFjQ6394RFC87ydk5mmYNqdnHQnErhy2VWNu2VBFiMZQdrHUYVAa9dPxzD8xYRGFLo7gJEm",
  "key11": "4ZTd74cMNeAYyxuVM71bKayUU3hQFMK6LPXBGiWRhtfojWrndSVst4s8mawqtojq19Cy3pFnHa2ab1bRBc3cm33D",
  "key12": "35h8cMpkDc5uNSVojVkwP1imNGCmBQHt3jFuCv1YMA29th1dMF9VSqjeb5GkSYMkzgsFdGDJVnfX5AE2HQxVFogB",
  "key13": "37swjYEqKzYjv3hB6Zxc2y5njjirQAciT7yUtiAbQVQQahKM1ZcaC1YBkLdazAvcJG1gbkBEMusShqTd2rdVHQZH",
  "key14": "3FQDdxyjT9VvCMyVH1FR1Tv43LbLushW6sBJoeEFKe9jjr2cwJSipoqK7ye5ccPNWz8eBc8kkEAg72L9VymM6Yc5",
  "key15": "3cL2s5Lub9ktQpqaTKRhzpWXWDcX15p2p1KvvpXgRRMx5Eyz6vbZD9dXGt5NwxmxSrTURirhrHwGjw2As99LuEzo",
  "key16": "46SN7utSWkcentHJh1Boi4o6kh5aRw1vE7hVLtBZPQmcVWMEprmE12uSydSYQECBTtkEuzBhVyQvrfuds2ryeAZC",
  "key17": "3NryG7dji6keAznCp1neaNaPXAZbuWtH6vfLBS6zkkFiHpa3HkXvp5f5jwb2jQYNiwVmxb9BF7y69MdGCzjAtiZr",
  "key18": "QgrPrtDNF3J1imuZajkPH4ZjmVdStEs3iegGEZkqFVPjqxzbuBCqJLggRmL4U6fdEK2aqsuDnm7WbRwtEr5V2yk",
  "key19": "3mSwSoekMEZ2sNg1UjYjUuvA4Kev98CtqDBmaf9az4Dj3W1vr79CTn2KGpp9Hp7hpUeGNNfwk6erpGvMhqK69wzR",
  "key20": "4Evc9K4LvQvPE1v1q21JVH2eJaetruaiHtcp39kC1b3CRvq8uEV3K91wP9xraoX5WaCTqCwPCmVKrW7P97UTjswk",
  "key21": "2i9SiWydcBUEx2bAZd1mhApxpR8sMspQbUDuWt2nSQPJ8oYQcLUSXwG3cnKr3N6JcgiVFiFjSTfPajsRTTvqjyYs",
  "key22": "hoCo67cP66rLRQodp8AK6rz1pzjZ61zaf6b6tTk84A9rNXriQYakYvHoGN96untQhU88FjdUgTmyFanT4g2UHrj",
  "key23": "4xJASxgJ1dU3aZmWyjQchQdt6hMAZBYjG77sXgoBKEy3GFRXQ94djo4EC5etF2aF9QLfK3g7sP5JELw9TfKvBSqG",
  "key24": "4kVCDJ51BwDYY7C9TXynsXLYFnw5SYhX9hw2xrsvZPSkUXvkxP1heuW1JTzWmAg1JppX3m7GXGFTLGCv3XTJzbyW",
  "key25": "5mJSqzpvR2ArPyjpHKeMZeLoRHs2gVX2gKktuVSHP5KkGGT6r4zGfrNKbCE9ZK6yXZfTut79YtiaYQzMqMGHFCWe",
  "key26": "2ge3uX4LZJk66zn9DGX7oRuyXDmgxzivAvQH5qBZuoz4n46mD5ZUiYgVhnsEAtyEHhyirGnpLrFfNo2zpNdjrEoQ",
  "key27": "33zUX9Bm7qNynRz4jSurHwBJVPtw5aaEEK3Vv2Jxq3kYYkFYU7J7qH1RJKw3R9cPh2V38ACvvkzFEKwaUmUDn1Lg",
  "key28": "2SaWiACqjRzuRsYsrfzYXfe4mTijjxZkh7euUWhEKj1V4zFi5UKmKCD1DEJL7U3MAnK9ZZ2Tsj5GRpMg9iLinCw9",
  "key29": "3F6i9zU6mSAnM6t6eGXPfouVdV6grVewn9g8zqPCVu9vgQ2Tzm6eHMzLoj9pcMR8PzDqC7ekLaubKURgzsreero1",
  "key30": "5LLkwtQ5dX69mNnCMKP1kpASsbJtxvGoVZi8w4WyPbQUSVMssHsxUhJpoffeSuUUgni2mTkDbCYRSQwxBUagafvh",
  "key31": "5psbBu19yt5NuRkLcPKYqRMpUdG4TBefxQ5mWnu7yN1Du51G8Vqduzh2z11rxEwRzfHa4z15sYSUdE2tXegVC8eZ",
  "key32": "2hkiaC3VdLjQgZUtJiiV9cC3J9NctYuyF9B9xGGCiefrGGAnbudqjz5wYDLK1uZzrsiKMocc93DfuS6LEDAPj8nX",
  "key33": "zmD7L11uhxXgtHXiXQ5UmzoizkFQ6KyUav59G54qvKqnQ1fMbatrRribU4wuVgoBZZzFKCSCvpu4XgmbwVF3qTi",
  "key34": "W8cdezpeFirmZqpwpNjt6Kf58AjYThaxABoiPpxCv3hr97NJm6SUMSHNmvk2T9K28z36ZekZVS1dCiX23BZYFAG",
  "key35": "2EiLxgf42FobUhdikX3S4L9ZA6BgFwrW1pzNw1sD3w44J4iMaFYZyft3mrNBqmFUKDmmDyW7jSt9zEpnmPDAzEob",
  "key36": "5KPBhJ3DjkfXcmoFBJv4v2Upo3QKePZcETWjoHtuWrkJc5KLFN6R7HgHLtAiZDnXE13571morTzCHnBAJYqExUWB",
  "key37": "vtMVRSWctSRkuSuCZXVNcUJdXToyXHZ9H5s8JoK3DUp3NHgvtwmNA351xoTtrMUftAJhHZbBMMLTQnegy3mfMct",
  "key38": "2RTz8ffkPPQ5G8d9R8aBY4DL7o8DLSLMit8hXZNmWyS6pRj33m2fY9sRJ2G1YrBbsNf9dZb33hnyT6jeyoCHWG91",
  "key39": "3cBEFkZxaKwuJwACVw8oScTJ3qi3f1iiKm51NXUFu2kMMZQAgmDutNffZsTuApq6tmEEzy2Kc7Ru5U6zA7J2mnJ8",
  "key40": "36emgVvvZKq45ys5j2YmaekbftGF93hahP9cNEaBZC2i6xaMswp7K71YevjLLHYPnm9XCDzhaQJ814qbsxfPAwCR",
  "key41": "3pRE9TWCynH2gd8HqavrPie2Fn68qestYiUdGHfFS65pkb9kSvioq5CGnPt7Dk4FrqMafDT7Zo5FS2zdWusdkMdo",
  "key42": "24ERwysCR3WTsLYPBqKmz9JeK4y2S15dZRmDKajzbpxYAJuVwAihv1ugAJAq2mxSYVVg1EDy6RgcZBw2Lz21RsRY",
  "key43": "5WQkJQLXrhqzGAzPgi7gGCVjF9yx5YCCev9qDKEPRfrG3YQNsiyHhFR59HvbUFxwY5vctnMMDzxtakzUGsf6u5pP",
  "key44": "5c34ApmMFC6GurN9kCKVGU321T26pAj6cj1RCMV5qz414feMbJLBAbdofJGcF7zEe1o8Fg5uuP5h9HuPizmaNQkM",
  "key45": "2CgLG9ZXpV72yZWRnda7LfTqgtk2JG7iGeZX5vh1pHNpqDdwt8YCv8p2Ye5kTMtqAohDBtSPyRxKvrtCbqL4XFyx",
  "key46": "WbM3sFoSxVwh6kZ1G2HzsUnUWGrjNokAzpE39TzGpxpjrkLrAiJRPCpukx3svLWhyacMSPBcR31NLoUE6Nvt1Hy",
  "key47": "49cqhNfeVPxska1XykptZM3aQmnvtxQohEENaXsDEaMCGMfF8JfBhp2uFMhZDYPR9BoPMga3sarCcXc9aEZbekPF",
  "key48": "3ojnMt8QdDE7vd1V6pmrYq8jHrQ2sDyHeF6w4QgHJyGci5a87K6zJse8DdHw4fgeQRkq63MupXPhqvCY4ykS4AQa",
  "key49": "3GUKeWNjSGU7Vfdz8i3jAGjtmQtJDzTyVxvQua1pEkDJwwYpU59hXRNvxB7qgrFyYGxy1BmnQ2trzarZxuBWiJvn"
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

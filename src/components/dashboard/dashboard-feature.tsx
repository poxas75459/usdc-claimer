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
    "4nyiorUoQqw4JaHkLdxwjCsRjRxpryW5x4PxjaRTNZWkeJoxaq6zd6PjgWRFFrwrVmDbWaNAV6EpQd9Mi4DJ14QM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZyMvHuSYiG9Vjp48wJqpXbrUAmks7DaenJ6pxuwC42UyuFPvud14XvDhof5GeMjwkAxrxPrtDd9PshaKBGnZcYJ",
  "key1": "HDs5MZ7qxWLAksXP6MWiwbHbgQWnUjPQqbRepD6429nF9EBnw4cqxjck7tnHx8YSHDvt3Q742NTSvbxwPhM31Ak",
  "key2": "3H8hHjoERPNAX5DUxPm3ueDjRh6ojRq7toegFY2dLJM4ZuMMQsnVTJP5rjbVJxAE8C5x5fdXccz3YCURQSWMpq4P",
  "key3": "5R9tpU9iK2TqFpbfBpW3jTBE38CrB2V2vagYLA52o8q1Kz2CrNWWtPeCekxvZJM2VM62Sucpz6eH7ttvBUTxxGRm",
  "key4": "5qxYAetCPDN6xAAPafVnKsXLWKhSWh8GTzAEQt31v8uVmfSDG1Lcxv7GMS1bY9qaGcL5qAQFdp8g17BnBkY8bHfj",
  "key5": "4CGXtDw4yxL6rNxXE9wFiAVT9khmVb9uZJL1qj5MHewZbrJfqfcYcnNBxgGuxMhkVjGhmbaZHZAT5dKvtjZdaXME",
  "key6": "4w9QbDHwRr3SsEGRsgCM4m8FqcH2DiXNJFeCtgBQ1zqfVgmqpgB92myMCKv4CG2xu8gzDFBPx3DTaCSXyUJbbo6S",
  "key7": "2Bf7CJAH6CCzpEULenjfw8b2Cyoq8pQRBNTwEv3b6JJAUzQWCUPkwLk78xySV33C4u3x4UGNG6vRALR1E1wjHhbv",
  "key8": "6643DYasp7XydH5eD5t2SMLyLAeuogw7WvH4E6MZ4A7TLyR4kweA5nX8XdnScymmgKYrLbsvFsQRgW9SroHdsnzA",
  "key9": "3GbSmgasXfj5YoADivsmHg19tsE8XvM9LLiyrS1T9mX7PWfwNeGheKvmXTNwrTe8nsr9EdfRhQLKmX6Rr7redumY",
  "key10": "5Ms5C5S5XopD8SKYKetug7RUnqCHLei47CBegvUoZ2yVqzBXWKowLBU12MvHc1S2PLgkRRpzPF9dQoxYbE2xoZ77",
  "key11": "3iyJ7ojprMjjg5qYAXHjkuDtgW3WypMPavHykFB2KW6bHJQSavLcCjE5JkzJu8HfYtrNgnDnkdBpe1Te2U2hnn93",
  "key12": "4MHLrRtA4ab9rNfiYQ7Zc6xRnJRUJ4Hz7smfGCr9fF5EbqR4X19SpXb9yigqJG6EmAgkxvxict7HjsNrT5JBRV8Q",
  "key13": "5426NoUvVFSviqc6STjz3yVWvMmW2KKDqX6RDSQj13eDroU2rChH4ZhyY5e7ckWdxhAxjjbxPuLoMAuxPBdFie52",
  "key14": "3PeVxzQDL2e1SkimnBMUnMDQaVxytQ6Uy66LJNKV7BRiU3HYuKMGwaszCFZpcWUMVJPEPQscDWXLHBPN15es1rhq",
  "key15": "4u2p2UTjPyD2FqWK7b4VziSBYUs2DZKJNjrYrGegmVwwJ64j9LemNW45qhMaoMudtQoDBJLyuahT6Y2uRLSQNF8S",
  "key16": "5uwxvhk4nbwmCTbLBVdCsBUyhjj7PcSexpDNDNzzyU83TXDqxsLWK6Kc5Pw5qSeKyU54KNw1oZ5Q14bhgMnL6k6w",
  "key17": "2JFPdppYAHoC7x3deYwtn7Ct8EyMFUxXjhzQ6hZysHA41zuuSt8FFXj9QrB5Ktzeijb3VsmJkLuiMFPDUZvgAoHt",
  "key18": "3uNzwdieVepCtz17yKrNKBLiPFWG5w3UaFGFRuiEJhwKLxujtwVq6xQPoTYfU3kVpDZWeAWrGbQ2fYxeayRREhhG",
  "key19": "FCFQGhB6rosgULqCH55FwDR88bQACzQbz7nDbUFp7hgRAyQZ8VRsJz7BXzoe22pa29EchApuzTMdyGaNCVWYmsH",
  "key20": "3GUJbkXaAMAPr5TgSdVjJEqUxfMy8jDWPqNvGHsNY8eZFFvtSeGxGa4WrtURJo2qFiDzKaVVTmjFw2GoEdG6iTEt",
  "key21": "4kz45XDii58xe16jt9G5xoXJFmi1UvfK3Rc44fJ9YxTuheMksjKZcNkQwgw59M4tmmskMDgprZ3Lz3t9ZUmX2CrJ",
  "key22": "nxjWPMdQQK77EYsFArg3D7RxHSENRhtdDXKhQGB7ssbyR7knVHMf9NNk8PS3DF2eCrbjKVGiN4nc6kz73VKyjfk",
  "key23": "4zVJ5eo61uZDXQQgh3Z5C5BGBoa6pZF7oPisubtABFwx2dojwbTQmGShJ6iB5gWMhiAwzvZ5eUZrAnrD47oEBnkN",
  "key24": "5v5QUgTe172mixNz326vBnBsJf87AemDUaZSvnA1LrGZUhfJegCNW1UMkV3QFrq3uBnNtgsmxnjKfGZ84VjPRPUE",
  "key25": "ChCaW39yY1MtTvRhztcSaaXgjXLtKJxtXN6VvdVZtb5hxQ4Q8p35KN84NyhLBFzE7uaya6F7ynpXkL2TWafMzBx",
  "key26": "23fwfqdHVw418JFDDxGoPWUEMEh7wi26zhfCKzHuMkr9qqtzBiiMwRXcQazc6mKfCsxD5hGzEnq3N9nA77TyonPi",
  "key27": "2YfcoE93TvKXV4VWdwk1SSnH4F82hAE94Uq4GMQSPhAEPYzHhB1h6RVBLrjCZfSyfWFFtewynP7voXLvp8JpJmyP",
  "key28": "5JZpu1V2MAVQuUYRDBiWaJjhi5MmXFo3bAcHzZ1q48ZnuqHwbWxL2Ge5jAvZ9dnLfqRw78d4rsUkaPN4i8DK6jMs",
  "key29": "3noWhEKPCwKRSr6qSYvLVknQuX5Lw2BWQLQeNcidXvHhiQcDgpiXdLwZkgn7toV8YEYvLArmiahUtkWrevJjuphQ",
  "key30": "4LpadK22Vfse85ANqAqP1h3qUY9BoT445DVrhiwZDxtSyoe9UieUH1c1wzpmajoZqvwQFoVP4n5rtBTnLbUmfcZt",
  "key31": "4V7EE4SSVskqmRFfBUWFPxvjJPU8Xn2TSpimgwiNcTP9d4e8si11YWnAkakQYKgAoji4KtNYr7pVdFCJWvQQX4Ag",
  "key32": "N1aovnJydVPKFkrx5jPMhskUqLCU7KRaH7QjWH8yTeQ9rMjFz2pyHuqnaUcKmHYaXyiEqCgL1vXvuu6voVzkkur",
  "key33": "3dQPhoGtD2RKBVhVSc6rwjjKfYhmiXzUbugyQiz2RDbcMW6hz5sMPNccNHXErSZ3gTYakdzyV16vcX3KnkUx1qja",
  "key34": "2vrQ4DXcyBRLj4j4CRcZxYod7BcBab7si72XnPUXK6uVavzNZNfy4NXMw5JueRuDMVBHBk47xVNEPn7VCBxQx2uz",
  "key35": "2DkAvwah684Z6N5KyKbTeRBRQ7e9GquXExhf1VFXp74jz8EkrMpiAwGdidxSegTCSGsmDsSyULZgj3PaoM3voPzJ",
  "key36": "5SvdXv3G94pXCkAiHuj1grQ8CNsaZtZ1Svod8R4MW7pT5z9nopcrf2VqSZ5QFpx41Dt7i18SvoNE6bP2cSb2Y74U",
  "key37": "3YuH4eKiDDPRDXwrKitRZGFkQsJiVzN4FJktFHXYuq2HX95towSLAJrUNW3kWWpPm432bXoq2HrdLoBY2eF9ehYg",
  "key38": "6P58omWabuc3gBJsJq2tsv89xHuuDKNXJnmtzJMLU9YyLKZMxmcKes7StiPzFdJFPtiGBaMkRfG3xnGBymZUCck",
  "key39": "3QvbdrZbBf2w8dPNRNt1HkeEsHiLwtoA13zSZiTKRLxauKoYkQeN577sUNRZ8eWvL9fTRrdQxzRdM9p9hXUTtyDC",
  "key40": "4zccGHbSa3pkcgFVU3JnqN3cg8Z8ora8AuuTQGEhk8TZAgKkigWB2aDC4efzmH2aUp8hpsk2AKDUXTihJxeevd4W",
  "key41": "4VcvNDi1ApRC6U2HpgY5oHWtH6gFoMst3eSB4aQtdcW2nJFeGnZMCDszgFUdcTfj1y4X4kQzyaUy8iKCxMjLYutJ",
  "key42": "6pTYnjZUi1rdPSc6HqFcvUFaRRkhY99UkhWp84SMsbGoZaQL61CY3oUHTXQ47StxiCkFxzCNN3NAfZQtoTr7Wyt",
  "key43": "3NR89AzbBFp3nJq7vAt2Aqa9g5gBQtXAz9iaLJ3UHgHSVMiWJMEGHCA1MPoUKkcFR4pUxEZkvVNGrsGZVrcCNUXf",
  "key44": "2XZ73X4G9oe1QrSmCt7hGG3Xfc8shPvvsZuiMyQDhhWAUjDhnAek8Mvo6rxJVKb6CrK2TyjfyNmETYuBfnFGKNpd"
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

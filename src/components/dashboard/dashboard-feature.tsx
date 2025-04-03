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
    "BF4BeP8xYsh85LL9HyfSvexPknuLL5v3QhDH4fiSLJqQ8BcsF76mLLF2M5tg7hiHps4CRFETmf5o3eaPHsxVWjd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HTx97NimFtC7CFSepaWNQdU6pV19BtNUfXsZsrqY82m49kf3apPQ3iTTxu9qfWyQNdgxnTqPiqom7KCmT1YXif7",
  "key1": "3v2hT3A1oYNuyhgiLXQgj4HPg6MmJLn7DHMXAfitrWA9zduaEuwJaBHPuGjym5VxMjrHpVH3sHkXVnuS4KQHBHi",
  "key2": "5gfs33XT8rMHGZdTxA4DCBvb3ccMo3d76AqYismcLBWbhGk9g3BRsZG9c4NwRjatdYi3kLxBNeVdQwWzGKqu8y6B",
  "key3": "2z6Ka5q9rqvrRakyqojB4EKvRkbcd8hP3CrFPgkJM2KN6BbwF1iMHPCGwxd3yTzqtU7wEXVciQyETFS6yf9v6rhh",
  "key4": "3zdAK5Z2gKSE87NrNoE2hosoibxKRFQn9zWczHZaa2t1WjM6nKvp2nqKotRizZ3Do5RDCbFDPfUSUH5P24LwPNGp",
  "key5": "4ktoxatM3EE8bfhC8xex4x9tDLp7gJ3rFXpS6qK4jt8n9z56bxdiESS3gyniajKQWHXxScy37rGeUn5EyBxNhzmj",
  "key6": "2qRXbX7VxootC9FeWHAJZ8xHPbGA85iiqgYGVw85s2D8bXvhpZzUK4foYAzpvgi94oRCVnH84Xg5epjfcw7AXqk8",
  "key7": "Vu9HbThasDzTYWBR2sdgYNvHptuesGMCWVRW9XW9crkmig93KX8fZf5rpqgEqSUv1TF4eeBJLK5QwdhB3LhpNZN",
  "key8": "4m5Jq2FTNZ8iHDeZcHPagULtZehMKwVG32z6CttbR1T7SifFMYdKGRCdL2nK51FnxHnr6AXmByPv3LezgJuE9Mg3",
  "key9": "4Wdgv32fg6mL7gzTHHkGi7Tz9GTBnSS1Do29eV3DirxEL4brf5xxbSL7y2H55NJXDdkzL5dYaT6JKPw4qUkxwm7E",
  "key10": "54rUrjzPsTm35ZrDQMSx7EtE1NCyNxM7dQzx8VZiEk1nvEyHGL8z91UQW3PZ9Gds4LfbtvjQLtazjFkbdvdc4ro8",
  "key11": "3Z2RMZ29PnHrYb1hZtij7ydWHGk8HQgFVmhuHXu5jV1bxEKR5H6xm2Mfi21QDWBYPFzeTDjBL87aWTLDXcndFijG",
  "key12": "3HtfHSqjodotcc8TUg71JB17ZqVphHqwrKuCa2KQ5wG9dfRmNsQqRTTn89BWwkv5kmAHEnJZeiojMhJ759hj2gjy",
  "key13": "2zJuNt4PUBSVuTT5kSxdc2UPB5VdWRPYef138Qs7HQQz2is2ysrU8XBgMzeR6hgk5FpbvauDDP1aWcEj1GWr2DD6",
  "key14": "5h7szWigSZNDwnXKne4NiwxEnMuz2pcStRBtuTwJtngzM1fdJgFpm9M4gjdXNx26T3vhrUPqCrbXnLFotaptjxhu",
  "key15": "z4D35sePjKCctv491x4A7CJ1JaLy2LXUJL3n7Za4sGq75CBrFKHCrE9tbQgqruiA31jWcMurANE91A9mz7qYprB",
  "key16": "YcZmc5F8eSwBYpEvWv8gThwvxS1URiS6qQE7pSAn2CUg7pi1KEnwhyHx5QtaJuNK4bGvVwXd2BN2LG5KEJZz2s2",
  "key17": "4ih67YJmTv93sBKGBwApirQDqjNLaBhJqykGGQLkV3bKGfQxwfaSTRog7CFWCN7cTWU35E2cAVW3npuKcA85wUJD",
  "key18": "3nb8fvXr1evbnvhqS78RNvgXVNddxnKehDR5eYgm81PsWvmKDy1iVku4pZUsRPyS6ya21kXbS98NP8g9CNYTBsQi",
  "key19": "3TQMaQw85qnxc8P4Eby1WrhH2TAA4Ad6eUQFevdtvnhKdmNBd2X9Sndocih7U98aPDutUbi5VJWNr8wXsY6ca981",
  "key20": "5b1kWCvL5eGGQ2uUEGe1DePiuK1yieQBfK1XBbqrvLHu9uPYaupYKkvTnumzmGkyL4mnCTQNcLctni9ijpJB8pPx",
  "key21": "iwjNypWCR9ogj5jJvs25hBDoTaHefQWcxu9by4Axe8ZkFfhzyc7SC7KmWESZJusQpXzvjsgUeZcgGWEuUCad2Vy",
  "key22": "4Tk2FMqkUqvMTpioknnjQtfUkrUTKR19qpyjBW6smH2ysp78znEdxa1okvCVep77ZE5BdjdoeYVXagpTSk9VGLBS",
  "key23": "35GjEs7T5HM1TAaUGTy8ordVMH63Qp58wgohoLRBVerjq3vEoaajvjCksTFu2wCccXsezYpyzbqWpoYN31yQsSkx",
  "key24": "4wGJN3CTU8xNwZRkxwFkuNsWj2s1eTL4nFwp7Y8FDY1Fcr5SW9CBxJ8Pcqh1ERizzEqvRnkVjxUX2ZHJQLeLmL3Y",
  "key25": "2T5E195yBgWpgY1njJJ1oALzYuhZN3de3CCU5wYdWpJyoHRkahpMJsuriKWnG6bSborLEyyPtZcYRNEHwVnGtpbB",
  "key26": "ke9zo7dGApxdq2jkCR3f1jewhZAVbZr6idGKULcWRTGXmefE3Nr8BttpHVcqWA7dKCbPjjru4ZAA8RTUZqanxcb",
  "key27": "3YAskiZqa3NZ3YM7qfKHbZm8VdopQz9JmJuqG3ibMkni97eY6vMPWfGj6BJdm7aWacyZHbn1KoKNckWGGrtqCRZU",
  "key28": "DV7rTBxoaHWXpaUdzHpAowaoScgDvC511s42h7jdZm8ra6zxEzFVW9w3E6JSw6QCugT8ZvxuycNywfnq5aUFqwC",
  "key29": "TLiVPkjBiv3KMC74wH4tdMH9tNweky3MojDY1p3tVAsNNP7kL72xgC43FEhf68XFVE8H669bJMqSgMYx1xSh5tr",
  "key30": "9JRFcuBZxenmQJPpqLE9jyfzP9yRSx4pjpFjC2pMwpDPuFuWuSqwe3qAMVjYgQiSwnR82yavKZy52Kd4DX1jtYT",
  "key31": "5g1XBWTb2RAD3ttY5A43jXycRZEuVPXLwTv161F2mhmDXs4mfmXxtYLmfUpThjPGinU8Ksarr2TcsSkZocmccZDB",
  "key32": "3jf9qka2mYo2NymzqGduz6s7Gzgrrsz6YNHkdowvKnCMZyWqauSxpW4CQqM3Lg7JfmJnNSyhfgonExuRNQ61FN2y",
  "key33": "33S6Qs5P7ZC1QmSo6E9g51S29dR8wdCj6uYr4fMmuYs7JCvgsRGXFnK3LGEV9rgL9pfFPr1zkY4MazYNNYi59aqB",
  "key34": "3Z4dT6g5EA13mEXKTvvhNA9zLVnKaznyoKi2Lha6uneuuL4Pn94kGXQ9mcgdyHBmPTducXdfo3FaYRK1uzRjQHZ8",
  "key35": "7oT1b36vELdH9v8wagbYpNWKGrsBNrbVRtdrQU7Jdza8sgcot1dNNqiX4VVRZXiu6FwCTT5t9nGjSC93JaZdwiJ",
  "key36": "4oZ6bnX8JMxgacKSK89MEMvbm5TeByPSKMxAUuM893HjYUQkaSekdcQSjqDeLuxo4YaQT66FdRqMV98iKHCenKec",
  "key37": "4UQfTxCoALwTpSDPp1rqFoFhuFayYpy4V9vYgEmQMNsymuVk6nt5B6M9BY2fYqyMSB6PdC9SCngvkVUTwuvVL39h",
  "key38": "4CVsuinD8NukxnjZ1kRuh4czP9qtoRJh7HFnGDqEDm55EfWTeVE9tzzatEsWBGTacgeGqNonD8wGxmqdW3eHd3HU",
  "key39": "4LNagUzCj9SpYu1Ns7Hp57SXpDkF31Kq5TbxSj4VWnPMgA66YjQYL1YhcJkdRR5U9Qnw4bzxqCheuXrCTXX1pDmi",
  "key40": "5Pp5Cp2TLYfGjBQAvUub2hdtVRvt4SdFRdUWgyxhg4xzg7nrvX1FdbDDWkBqv6yXFD8z8z8eZDrhwWXEVFiwygx9",
  "key41": "3sUp2g3QaDUTtMeLSeiFpzyBFqM76HmQ5c3RmJd8pCZ2px9Xhnpm6SAvN3suaTdtPhEqxrn4taiQ3mT41JT8c5hL",
  "key42": "5AheFefUT7uioE3WnS9oF7c1tbSUGEbBWoVABHoL6NRF44fBLg1tjDZbRf3uzmo3WrkNjhe7zg61skqCe4ecnoFy",
  "key43": "2W1Q71Xi761BG1sBfpFemMM13t57xupszMQeEVVArYuFQBifcN5tw9fauHzLDP9iQZaFxzJvAztrDSgKetepb2uC",
  "key44": "5w2hqR1xDomHDSANFCdRWVnSWsqqTTuyeF4DEzm9WMcyFR9gP1Q9Jubxoa62gxDjt4BskqdCVQXPybAeQyMchUde",
  "key45": "3Fzs6HBoLxPK9pGTDN6jLX3U5drvNfRKdvyE6Y79xH1DxGaLm6jLwA2NVjrm4KsTFGNmBpVASLEP6nkhU1p14884",
  "key46": "5kaNodVs8AUjCqpPgeGBg33AhpuxdD6vcDDQH2DXs5vxcATV9Hb8VEmhQyVu3hma9AWEg78R2AFvV4oADQu9nfKT",
  "key47": "3h8S58dnQqtnXDifHxjVnsQy37tmS9wqhcxku2EKKCgjR4iyweAeooZQrtXQxSJkoq6owd1ixnfRNWfafmdf4bCd",
  "key48": "246atK5MFtcQH6eCBvVv8EjFMSn96AKuENh1mZx3WL2MnL2H5DVDstc4G8CMdN5i3Y5ws2SuozUFi3KaR3tgKQDy",
  "key49": "4NqnebENBUB52RqugBN6Tac7ZLYerXR5r1uUMK5nMUWuNoHvByisqBSYXd4TxdSLJ7yWACNH4ZFg544BeZgUPtfu"
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

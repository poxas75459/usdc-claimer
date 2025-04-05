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
    "4DkxuvZjfJyg74rrYRC5sUo8jrw1KngVZ57zDUhvfs7BYGVwmF14M6zS5gbYrJSJfTx7tp25gRkJpYVVo31jSrpw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x68CLFLJYUAw1te6NP6FS3Ekys5doXkj7JMjwkqk4jwCHMeaNdnhF11XUUxrqL8ARckJsm7MrzjeW6pGRg1i76i",
  "key1": "2f97FYJ2392m1wHqhuh5F7x6bbjxQ6nPAnTC4jdL9iEo6drpsfvY41TNgFZQPUk9XDzmntkrVm49Qqy1EJxL45GG",
  "key2": "2JbiVnX1eYZVNZbSDMjwLY8d6kczM58pE77inqQiFMQMw28X8VsnegXdxufE9JLQrF7RwP3ai2PavoyoA9oMGax9",
  "key3": "535eso5Lg6dEMnkC3zSBdBsVfCNqwaD1iBwpZPcU96bN6AV5vPM8SLnvB1cYR61m4H5vG8LzEk8Z9Bjuamz6WNrh",
  "key4": "4CVjKmCkofuaVRVea7nUVm6M5GWdma5o3XmY3J5iH32APLwhbtDxdKoHCtqYCXxcPEPnbbwyeDssEX53hCCMZYFB",
  "key5": "4sBwrJMLVfcMw9kwjKBSumDS5yQkTtAxNeBvNTycbUi4Sdpcsu93gi3TgppKjHoT74QHzNPDgDCqh2Hir3A1zdrG",
  "key6": "4VY7mso3Hdsb1qwZcBg6fqhaTUrWv1itWrqsgKQahBm4n7fn8QCb4nr5N4g7bgJXbvbfyHD4hioWM4zAG452FxSn",
  "key7": "67NnycsCMTFrLaFPrQfiXSH1LMfHi7xpFJfHckcysurfdbc4JDGZHhVG3NgUUP63gLEqKL9zPCawtMVWYo2VQ2Wf",
  "key8": "5y3LS9cvx2Qj5dj8UAN8VZTWoPtNsQCVqYSFBFXzx1ZfjnwozxYgorVGkYoCZRpYMrPwooT2aHRvcxpFvkXvu15e",
  "key9": "4c7YDRyVYKWV9p6qHywrXM9DqfdzbifHCU6WPvVZut5NfrYnk2uVk78GyMYFmBB5U3zZX8fTkMZjTyGi29XUetmo",
  "key10": "4cLx4y8Zex5xqJZbQB27ZUsT934F7JmZPqQprbyPPKJcgX2Kk8xhweHpn1cXEAS6PgD9oZXjd7E5HCNELkXXDQPC",
  "key11": "3XPsiJjscEuYfupNUSnqzzGFwqR1EHrx9b4AzvFRH2PuxqdLF35JGc2ypXC1unz7T4t1t7oVZPTeeZ7eQpkUJZqz",
  "key12": "3nbjLcEbw9temWV3UxDqAQrmFR9AdvG5bH7H8MS38EyxACg9hqbRCGoLQDPtAVrABY2NAo5yS9FC3mJmsMKeQh9q",
  "key13": "5tt9u8i8DNVQr6ix19NXzaegRerWZXbJSReD4Nn7Bf2XTS9RKQzigwNSry83c2vBsZfw5xHZrWMZGFcSbznNz9Sc",
  "key14": "36NFrPSSPdQeacc3ey5aJh8jQ9Q1q6tsqj42idAqpBzWDBbtjYbTYXiNE9EJXsHUQiKX7HYZqR8QVr1QkCc2G79",
  "key15": "emCGDFVJzrzoz622x2ziyzPgFHHjYXXHVwcYTr5HwYhkYQDHamnjLHpYLTuPPQLvcDtwYC4cDpgCBt8xdfoSEt8",
  "key16": "3dMs1q1PbYA3p8FVM8wiNuLB2UxJTvchsFVF22pdFBe19Y9BMu1oc6viwtifZURujjoPqoU1Cu2ZDKTnsJmGednr",
  "key17": "3TDGc8tnfKJ7qKrZuePYpHeeXaQFeHYHDPKcf36XYX9o2sMK1x7rhuxDZuahjGhdCJwedz4BLdTzXfY3Np3p4VKo",
  "key18": "3UsnTZDjvgHt38U5fYeyPDJY3UCg5YKqcjXLwowifpFKJDzPvZEaALhNPAPWwRBBjUHzp2WgttxV7v5kPmtHPjvD",
  "key19": "5BCafJdNuoRbYtVoN8DSBj8SJxnpVVefHM2Nnau3eAceJZF6p1WcVSTei4wKAziX2TYcmkmXtH6Z2jU6CPWVepN4",
  "key20": "2FPQrYpLRvLAEEPpmQHN4qHcxUh6GB19Jv6XySTh144Vfbtw9LLGjuQNkVzRa1fQjNKhb6ToqLKho7dFHekB5bZy",
  "key21": "1xAWaPaXpmCMK8KNpHoeUQBgRKuARwjuJ1CTFkHJR6Crv4pobJ5g6DkHSkysZZM43zYTB5vLJzwrY7xcYgEHjmN",
  "key22": "4Auw4at5LPiwhhBnG6weshmy8X8dcCBcxpRNsk1U29ggGosDL3zG2FKsqibFtrgmU6e2ArE1vegk8AJQdyDczenu",
  "key23": "289TpWeQDGRwi6DWpDRs3rbLo4sg9GXRJLL1JtNKUPZ2yP9FYiqkf9PMGuwnjyuTzbGtpHXAPVki6Uo7bjymPGNf",
  "key24": "5a9Zc8j8NQGNjsNJ51tEPSFdRWVuUsgtSFUi7kafDSgAF6PDgbTvtwaPeLj7niUApWy3UgaXrWMhpbrqhSerUTeY",
  "key25": "4XX6srGWruxAx62r3irKi62LfhxeQU1GErB4mEVHD8fycTj2cwcbFi8KJAay7CFzkfSu4petbMsqTQZZ1b7BZJHr",
  "key26": "5F8Lcw5GmmLWA4c2c9coWhPsKAdomHRd6yDoTsm3Zqomc9UEzoMP75hQ29upXgBo6CTMLTXoaNDsTv9HgGNMw2jY",
  "key27": "4SPrWPzF3ief8SSu2egPZPSLEgvnKpRnvP6GSYugURw4qMhzbbTURSVs7RoXy8jC5CErZWK1kWtFkvDAq4LdmXUY",
  "key28": "KYwiB7336NCWCwS7d8FkFRdEWFYzuRK7vWMEcpM2vamGTPQua16gpt6ubruofepJLbneCm9Ng8Wf1Qvmb5skbJx",
  "key29": "2qFNQYTVaAXg4JyXazgucbWYB8dMvMqLVh25emsdzguY74Wduxc6U8inNfrs1fu36KNUdEGbDe2FrPqDeguKPi2d",
  "key30": "4W96ynuJp8XxwbTz5gaMb9Nyphf8KfRnzEwttVxED56mvzmVSzrfLvJyHyaXniDHRZhXzH2UnARYxbT2kp5C5sYb",
  "key31": "2uu1PMBNNcKDgXS77vkd8xRqFEDjAJkYoz2Soeq7cXbdsAAfL2ZYhkiSzSjFCTVQz7ev212P25oEuevzCvCg4wcB",
  "key32": "3D2ucv6ZcSW6G2Damjf2K6s4F8hYv9oCc7No5kBTNRAKh99gD3KiujdT8m1AzvXUdLQybm1Chud7RiUHAbLqq16t",
  "key33": "5xxX2TSLRTuEbpZBQxu9o8pDuTuFGzAK39yHEeoqGhFVhmqT9XNkbRqKhbYng1vusXoW8UjZmpXfJBGDjvm2soZc",
  "key34": "2Sh6q7Y2u353BmFuwriDEAgLq6DXzG3mjB1VpRmjbGPtA5fgDBsaVfiRTqPGndfrMhYXkZzX17Js7mFFzh7VT84M",
  "key35": "2n5U3tGpY3EDkoLXhnH5J4jD6Evc3SG2EcxVisbqAZzjWaXnxxaxAFegMp4VmgjCPLDdPZyG1TRox5gNsaDZ4Pmz",
  "key36": "2MPUBjkYM2TpPA5tPi78DmPzC4TRFqr59UXBoLQKqR36spxNKLexeQZ1VJ3VSS56kQ3GSm3QNWyKSxwh4QBgqxNw",
  "key37": "45pung9HETvxKeTFTM3LgH1MpZSWirDpe7u58i1QCA2e36RmfQRELJBnXFhFnEDGiLe1C6Ke2KUnGUcaA7uzTuU2",
  "key38": "31zVSfXckykdsmdnVqWS1SaenTtNc6hhvf6dMjVAakanppMqc7N8S3iCxUr8JiJzs7exMemnbtUcaGAT6yHkbbAh",
  "key39": "j8L2CGceuE7WXsbJ4sjLf81f4GDYkgML4kKZFAHD4sgqJyRiD4dJd22dVakWWKLdjKLLWaCdCzijUu9y7dyeGWa",
  "key40": "3dMPN2vf9S8fcazQKyUwRo4GEPXSRz92EgK55NYN1XYjise3zJwJ2ZU7wEWdirZahsNEDUNtzP2kMvp7v938frWN"
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

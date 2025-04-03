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
    "59L6teGJZ5AUpAkKuckQUzjZp6TTjNk24Ny67V6wtyY4DCs2JkqrnZoFVoSKzwBiXppASQWpGuPvcLaWzCBC6Mwb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22c6Cu7XQR62mtakvXbnDABff4bUSd5YPC16tNkJepUbQG6Rh9xQrMxWKJKWR17U3rk68uvw4n2QQX8FfW91iBex",
  "key1": "6Cektq4tLNpks7QwexQ9i95Bv3gqutRRgHij2uzSeu3ZBcp27oYQ26DbUZUxpmvhJUEAYSsBAgzjT8u5pGRuGFo",
  "key2": "39o8WkQHeRVGXXHwM4C6B2XASaD4rpQJyWSYRXJPYeya5BuqRwwDD5g4gZuuEaEswP1B7WeXYKgLHF3oMAA8o9Wf",
  "key3": "5jCJ5XnyNas13F79WFL2ZerXYTkF7DkTyepCS2wTjFNmzZoucPkRLqv3Gt1HG541iwv9nL2NwZNWoTbBZyzJnMqi",
  "key4": "2Jn1t8F9xQ7VDBMC1yU5JFpN2Gx1mYhBWZboeY1T7caQfHEBFggmG6GBo16kTJ67ZsN4TnPMY72NDeEhntqKpxt",
  "key5": "4FcSSvxzpbYd8Zso6kHpGzheD4fPQZ9SVSRCpBg4826wpWmajiCUkztYai6tKLJyv9t93PEAHCXA8jSneUQfApNP",
  "key6": "5V3CWpoh3BRotvBGTjTRKtjr1dwPZB2DedJ4zbZRPWLHTwzFB1WJSuS8BYaN8nbbaCGVEZcP1fyJMfbfiB19YKSL",
  "key7": "2zCaKi2tDY8nvodEScFY4rJXor5HezG98cGioeNWC8Hi3WqKF2pq7pLv4siaqVcE9DHuCKqkaAXZ2r8GAj87jkX4",
  "key8": "4VRwgvTorbkRdGTR292MjmsBd5YFD97DZUqHJcrRGggLPtskY98eb3hhCW9LYpAjDzNAoMzDMqForMvjoJ8ussir",
  "key9": "4wUDVVc33sftDmbHnM7zczRkbuV67ZK5nYqG2tPfSBrepEZxyXaFzCax6sT4oh3q5tZi3dWAm1BTmj2pwWLRDxB2",
  "key10": "3nzhL95fbCwUsbz9qF6FXjgREDUbEdyoguKGvNiwMoec8QxWZjBMNtEyagKsy1waJ3p2YiWstaiDLeVqKqy8JLfd",
  "key11": "HQSLrS5gz9MvvL62qcCmqVNrjHe8kkr4ZecN9uwcYVAX3L9zRnnbWEznXei2j9RaTpUrP2FEsFAbXRT4hiZLS6w",
  "key12": "2pVXQ7gSS5cypectVRsgZDPZgDqCUjR55mQ7mxCvP5DVxCDrPEQYmJne2N7JMQATVSkSDik1aMTrWtrtf6ZPqNDs",
  "key13": "2XrrzKwXf5SW3GbGHF8dm1pqywxdu4qC5y6vs34EEq3dqmoqRBpewEGaSy4ZwhXyLVpwW8TBk1Zdt1R9z71amap6",
  "key14": "2tDXXzJDNHVg9cwmvctpwrQ212xVxd6EpEWiGLeDeGAamudtVCB6xEBPZgoh9QSn3wSe4CzCXuoMfuaVLfCTWe62",
  "key15": "pCufUTzQrgKhvJcpR7yY4uKWT55bXiUwDf4S2AV2eywaguRi8bpBXqumHjWWUkbV9NeCYcqF6RcWRsgziBQ1vmQ",
  "key16": "ph5HQtBqtV7P7Qs48zDXqKM46ftHritftMoFoVUHYB8GcADSHCvz3nf7zqyP9B2VfQd6GkonnvXkRhRGjSPSDCu",
  "key17": "2uhYGSnZtLxXCveTJdpe9ehyt9xqvUd4RLmPpAw5CkH426sN2XDh39yPokSzP8QPuekwQzqhadw1ZHq95Tdr3LR9",
  "key18": "2uZcYCKMXFNXKCy34PpNqe4fHmxsUW7sTmCvSQ8jXNuN8sdcWZT3Kn9HJN4tYwXSWNoy8Ppj9aiCmRdSpmMH4W3q",
  "key19": "3VjiBLYdBmbPaafF3zvRxRyBmPav7jfxR16Dv7onRYAfQAJr8Ya9Nesn5wVLAwWaRcZDpRNsvBxZCa1WB2Rzcpbs",
  "key20": "YRGfeAxTH1au5ECouaVo5qKaYXYZJKdSdRNojF42fyZBtKygU2YM63SCrWU27ZvijWaAh75zFWFMH6FmoGjy2x8",
  "key21": "66V59tBjCVGp46N7NeoFU9pQP2YCJVV91YYFLD9MgJyf1yXQmNXKqqZEQMgrS9tPCbszVYcwcY2R832TfjgFSfEX",
  "key22": "2M1hJz6B9ewVoYEJ2risvkbYL7uAtt1Pak3CddU3npM5FcgpeW9XXFFr8T2eAkoBs9NNkJnjAg6fRf8hXAMJSndJ",
  "key23": "5bCNgbNTWerfhPfnHdShrgtLR9LcTo1YY6Lq1Up3ZTTAch5BDWNKxPuNFP5XpS927TurNP7QYeVDKAGUVr2wH1Rs",
  "key24": "57xhofr8rQmAbSWxynovSAvboGL1sF73n9WUFKbMXXw5FrYHh1JR1v2UkRDqJgJuBDdShYwSTmuL5XYRuS5yrkAp",
  "key25": "2iUbNM3Pk6gNCNXYmjib4sUwLBup5EcuXGsgwYsV7tBSUXWawxj73zHqMoA3FfVLrhU1YGBtgDWxLLJs34Ka1v97",
  "key26": "4kEBmPNPcfQHD5Fq51XYq5DwZufZbT4MFnvzkcFuRfkHeXkdiKeSR72nwSYSzhiYG4t3o53op4QqyQKbgbFdSnAh",
  "key27": "NTd3Xutv8gyh88HiHpdbdPwEhCDbf49q8ji4b2iJrSfiQqhwZeiL6XD2ps9okYruxtTEHBWEmeCkM49HzCwNyoW",
  "key28": "3VtyfELpMLELQJpKs1DDKJLnj2vMUPXVxt3c5RRgUDngmnhRhs4tpHaZFA81uNF9cegixzg8akzoUJ8HYMig3h3z",
  "key29": "3XRjTqzGYEiP3CBZe5qHRz2R1u684wnGwLiXm8QjoFMcpbRfCWeQcBpe7b9HyRo6qy8dbj7HfaCTA1jqDSZGCGdg",
  "key30": "jkySvdb8Wu8KbPRLUPDAggSuexzdp3SnoNmPfzkdC6PvXEFa6JF3KkaTuJLiuaakEatyzb1VHEa9TCNS2UauoSC",
  "key31": "iQquRVjry4FWHmNAQz5LSF7r7grBwzS5ac7yFxB3VBapvfiVGdnW2H3M8p9RPVoTB9FQ9J34Ks8d6FWWEc94pD8",
  "key32": "34zrqTh8R7GtgHkdvCrLBJ8eLEHwEBidobyVbvE4iGcehc9s3mCis1jFatuFVdfn6rQX4WGVUBSsqqmeLUhun8eC",
  "key33": "5BkWa5YpGM3BZJVFuLtuS9JAErLypr5LKvem6sv34inSo5g44HTbtidSK3jxFYZPusvwFS4aoYMpYRCR7UgPN5Jj",
  "key34": "3LGP7nYFQTHrsNNg6nR1V6zMdQBy1LGFa1na9QsmfqXKzwbBd346ibTWnjoWfbHXe3JhYj7iun7Q7xkDghyCqymM",
  "key35": "2FayZvMzJG7ihoriGhrdcCnF7NVaXegqUxYVhDcFXctk6fFFdNnbqZrR8nqcAxkWk9wbqgtegZwaiDy7NW2FPz6Y",
  "key36": "3CZ7K3zGGchQ5bQEH2BBp7F4QwxCkJhnMG9CxzA3t8fwQcwMsdx6WW2V3Gkcyv7sFTQemHt426YpjEEUh2NdDC8S",
  "key37": "Jsc8QsHCKAz1bVq4j1Ji28cohqYiELuwLMAt3R3D9967CJnnHXPykqvsxNyXSB9DM3G4UsnF122YosiTmDmrMwe",
  "key38": "2Pg3gNavxx5kfzjEspuKEaq8gj6qkfaroVL85praL5uEqf68TmvVvF5393oyw1PuqTVv1kkQP46c1Td6TofqRLXc",
  "key39": "47HmopnrzujeRdthGiN5jGyMcnKVduAgATdSkaQo3SvniEkJabQ7Ec54gSXjVuGtoAVLdzB5KqLm3fNNaCBv6T3U",
  "key40": "FduQr1WgvPUTG2Lf1546FGGuiCnq291pg3cLuF6WzdA3ws6qYho8PYwCtuc7joDH1qRYd8eCxKK6hPk3SHDPSAp",
  "key41": "3MdDkpXngBc5jCPGaiX2VAT2AHfYTdKtggBj9GaKhAnQ5rbyJXQu2fDxbLfWikb63jEPLN35vCX85ndCRX6srEEA",
  "key42": "2GrH6SoCtXyJ1q7HbojdAJBebVo3rvWQnj5Nsj8cvpYxLpbB2WKzg3UtHxHwajmvsqf7TyLP6VUw4v8XmTupuEGo",
  "key43": "ZvpffS9KNHyRJmJ4ERLY7Ly2RkQWcAcDk8nutBuyk2sqvQFVpGaeESgyVXrrnja9aedj6XxGzvw7dRdHY55yWbq",
  "key44": "fD9ezw5vvGQrQ2uVrJ4M3HspvNzcr5jBwTrR6Zc4fuQiX9HnSsJiyND6mcbhs84aoSbWr7WYVpobFDWaMTEHQuJ",
  "key45": "4VQbCZNDD1HCXbddfdGXfn2BLCvQpV7iRfHdA9q5N6rBNxJURKPgZuDiqE2G4yAbY1VAj644rrnM5aYTZJUcF6zR",
  "key46": "5KpUYgmc7W6dKTA53oqnt1W1tm97wVCcRpJrRwfAEPRahLquyH5JfP4CTGyrtNgMkidpUiB4AL4Fqr1gYGFGVzZA",
  "key47": "2rCt3Y3xLhD3MpjVRqaELPScecjweGUv81XoJMDBJprvzjdB2wwKkGnhUZPXAbogV3PuMndSkQY31R2ft1BrDZdU",
  "key48": "5pioytP3PcNgpCECJLCS8zNSFVkFZSPbmGbptBPw3tnpUueQEQvWggTio34G9roi9hf87aGv8MQiRKM9Em3F6oip",
  "key49": "4H9twdY9Fi2oavNEhoF8NVShnLWYP36EohCDQX4HUkiBwcYD3qdMGbT2C5KJM1w9rWJULaxHnrxR3nxpqhsyxJw3"
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

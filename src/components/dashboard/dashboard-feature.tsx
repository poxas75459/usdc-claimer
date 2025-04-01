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
    "5Y8RyrfuNdhNhvNkwy1MpDfKLk1WKMjfa9JHMgEufEEgWiYdeub2coQmkFSBuf9pBAG65Saecn9hX5CCQ5Upzass"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MsoFV6LsZyJ6kznsUCaF9j17NGFQU7zYDDeZDT7LLXB7no8CU1ABDQh1JZ4rnQFFmmzxEKCnd82zV1VVeuiNiTr",
  "key1": "2ABXgLchq3N7fCZz8Cvku2v8Co2HxAGz6h3FZA77ja3DZ4WeMPN2ed1t1hz9EpJsbt8eUUHQG74ZmfWw73FJVBVa",
  "key2": "557tDfcoVrnLdyxQsiewV6iE8WLHmdSgtc8A7UxUjUQnD6rdFTFHC7YTGLjtVWckvkkc29UqntRaDecrXS953sYG",
  "key3": "4uf2676QTax5hgcpodnMz1xXzjW8gEJfMk8Xiwm6CBnnhDoF3jFM3YsA2rmH6NpTzkbufp9A1vc7t1b8HntRkxuH",
  "key4": "5JmxMaGRUnR11cKgtJWM5RfseG52xJu7DQrhc7KvChkPDwXBhAdah7fyEaBWyxrGTAuAfd1XXkj9QmQU24UFA5bD",
  "key5": "2rVq2gj56gz68cTa8UgquK1Rh4owJUrR35yEJrBNi8XFtEH3pbrH4oTmFQ9E2SkpNkJkEtHtqvwG8Xrn8GEcVzKk",
  "key6": "622Gn6x4MN7FWwVGsfpeeJqs6Efv18phKRfkpvzfpxV26FKaruCDQocmQDa3yiXGYpgedTSSCUBzg6KVx3XU42ER",
  "key7": "5KcVXNTogyTEXUWNMQi5yVNdbrtoqnNmFTVMdkqWYvr2eZ2PSMc7USQc4fqCdGMKFLj7Gf1TjLynvCBtw6nCvF1T",
  "key8": "3azihVeQ4aNgkNVDQYCUB9KFTSGML2RAYnNptJFFUp21LqCPLYDxPCZfSpMuUeodRrgrCBqUzqx9Dde4UJKKga93",
  "key9": "2H4Qm6bRAHZXEEQgzXXGoTzWGrv6M6ntQVnRkLw3x9S4C59yDUPbgXtYgrsnCfWutrgUHbWHwZZLR9L9NaxhXiv",
  "key10": "5msBJvVDdWHfizFvzjJ9QBAxkxEojZvS15WJRuWhbwPk9TM423DnHaa9Xx8xkNdBhkwo3H8xp3NHwiGuyWGozHjx",
  "key11": "MHiwLXRsdJVSkLBgWyHJu4KkeV9YMpRjDB3mftQtnvzC5ehFLs3VZaAeXjPdhe9hxsbYfyW5zCifdE5Ge4XN63u",
  "key12": "3bdPCdnn9E4N3wUxMmo1r7i12gJuaNxPbDikTEaZJjr6oHXuB88UAsHiUvbaSX4oSMtuyR8ePED6pQZF8ZQb6RXX",
  "key13": "3wPXwVYCqRyFBgDMZkNRLJRVTsgmHNSSwk6m3XdGPYJhFj5t92aXTABdZnQwYTXt5qgNbMthHspL3cTB19Ecs7mX",
  "key14": "2b5cBuZigrftby9P879w5XJw6iGAEqBbZPmykeyJgeeaNRCo2y7ehp24UpzUwJVsxhXy1D7eEifiN8f42kSt2wb1",
  "key15": "2vRav2bLTQxUmDV9dwpZFRHJmUq2QuSKY3FPn95oe5mYS97MC4HgQkn4oWzhVzWffNd94gyhRXGKsJjVu9xK7nK4",
  "key16": "4nNwQfPBgR5am4EDvT8PnHRgFQ8isA5d83k97hA7ANuDeK5sn7QYSFusBUDanoyTB763mbae8vs4ce39g29N5CLu",
  "key17": "2qZS56ANqvMCcjDEYELttC73aJF3bFFCGCgBUbmEiJDy2Z4z436S12X5hZ7wUXjtmHK9FPB2bk3afVPVwa2tWB4Q",
  "key18": "514Zv1t8eZdPzMjQ5p8J8U9gNCQXikpjN5rCTwsSbCmNgXyt2Mr1GgN8hpjZADyAtp3MUCYANCyc9P935g3p2hh",
  "key19": "2XqRR4gXSgurcBHmx4N8KYbAb9vWAGx6AvBdPFxmUqfsXE4Qckn74pN6PZFYzUuLYzHPRAQA34LTrnSCfx43WEcU",
  "key20": "5UJrhmfAbF1EtNXxVbFMqShyJBB791v9qs7zNAe5BU1isngc9QbAmSaMYbfET7PdjaVvdAMpz8Su4AybUpRhiZnR",
  "key21": "5sxUr9Qm9GXj6CLecEEaicdNjtSvpG4HAyNmTuTNbDTteemRQRV3W87tehFvLJC991pAYCVNCmbwhuAWSgd24M9K",
  "key22": "5TFb5vKqQUWSXcDFiyvKFzSBSW9mHa8BY5yYJAnrpbXLCWT88nXNVzfWiZMXVX5KwVVNe4ViECsWYUNyJA2XuS1a",
  "key23": "2DqZCdQwjeaWn7Fhkdh67TAjbxr2JZsAPS4Yrs76DRG4VEVgQoWvUyt4Bghwpaz5BhN1jMGNCCjyJZ3ZeKrJWD2y",
  "key24": "HrLWZ1WcWYFwmxrYTTKo2zLMXWXjrvDiLRefAZnkH19Tv1A4eciQzLU4o225yN4Aiy3yqZqgb5rYEdrz5CLPH32",
  "key25": "2wVTyniDApF6vvVV1xKL4D6hvnqBTbtWrT8AVj59vAGNwctszNEj3JzLQvc8phkwLJf9yjnyChWAAoM6wXhQJGEW",
  "key26": "25pQaTNqnt6kJu5mQW4e2gsVVeKzzNCHde26oD7HFumwWc1Xqh2N5DvYyLaXUpCJhQgLT47WGHPRwk9ufj9qndfM",
  "key27": "2fHorEV5SSNpELA43dyiYdUarfQJiUKnX2mfKmceSUCEaSEyJSa4pdFGbh98EyYMRKjCdp9oB1S6EvgW5jnBBy4o",
  "key28": "5JFrx9Xeax158cjArMirHLT7iWNvzXgQrwHR8fEDNw6ferRxXo39mhDJR5sDHpepL1JgzNJKWpgbrmAwxVR1BMYx",
  "key29": "SVDHeAVXu4dUrSnnisyTAFJU1rR2ZzGVCNUtCRrZpZtP5TfNitmz9vpVamPkGmmRFxZcbyVmivAex7MJ42wJyk4",
  "key30": "418q3x1fcHDTphRaJjhe4c8g7h2Wve8fjBVpdFYahKP82h5sub7Ha2tjfY1EJe3Da5xxLc59oHSVuUaAHFTGuMuu",
  "key31": "4P5yPBWubMDFSAK1gx7xTbvnUxp2fWCfGohzD1CEYVseJRCuvm4SRpemDPhyKGWJkXCULrktNJRvdDywF5vuU75q",
  "key32": "2TGSFHawzs3Ve7Sx3wbzQsEnbFB7CtPSHHKv6yGyvgD5YbKDqyFnPyvB3bAvgRwEwSg7eWwSDxELz77iVVjXvQYF",
  "key33": "38P1H36WDtgwsa8ejn56o52h8pdjdRSGYxHUg39tCSYid8A4hnZPzqjj8QgY8fdDbmkuurYCgE22Z46GKm7szg6z",
  "key34": "26v52owpSnUydnwvMNQeDP9Fyman9EDSJ538K9C63dEYcMnCwF5hBPbhTNN2Fbs4GBrfEAgmRbkaP7tY7ZGsuXeB",
  "key35": "2hXNxHwQ1i2NGiHkdByAL69ffGR48biuEAHuA1U9WkVf1zz8tiEnfgrESRsNePQGE4pw3K7Le9hZywv49iWupXN8",
  "key36": "3mhnL3RWTqFSLeR7ffuNzrbmNHbNLF8hEwkexAHwFrXgshE8MPusSNpb1BCJ5QWikz7mxpWSvkMgih57P9HPXrSh",
  "key37": "4tmvbVsVquym5RrpfSSzpWxmU9PSYv3hZWz9XWDitmhjx4YDjPjUYqrq9yS6CqhdkYrVFQDtF7Knk6duks3N1aDK",
  "key38": "2FYQ2Q5LrWeXf9zwPrvMgDwh4ETfurKBJx4QZTBZ8p9WSkT3J1oJuUVYixJosPFdktq5aeTdLvxtqgDvyBSA4kyZ",
  "key39": "3y8VYQDieUAoFmBG2vx2ahTKsSbRStvmyJx6BvQiuQr6zuXWhUiUiMTgfK6HEb8jdE5VDMN5oTpZR2Yzwbk6F1QP",
  "key40": "uqVFVBM9VUwLPXxe814nGUUWQLRis8RmS6rcrFkhSYSd2MiBLJbaHdwEuBhXBPzpboANY2uKeT44UuHSrfrbRd9",
  "key41": "Q51zKzNm2aLBGvDNDe55TLChfi7o9e9vUAhdspwiKc8if2oGXWLQ8bJaRaepehRVnohsvQRq9Cxkme8ta3tUDZm"
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

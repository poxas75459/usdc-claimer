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
    "5DS3RBo8VmYqv37Ywusa4Uq9A8fHqpndAmUAXc5doc7SroSNLjy6c6463sTcggyEfh98BtAkkqSTF6bG13CzPbyo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rURxmCsTMEBGtsRNYc36qJMMdAxGtYVasgBCr1fvJTDq9s6dpoKuRRSjYtc3xq6WmYmBqnVibVFetZK2EDGWmTT",
  "key1": "4yqnMiFF85ov4pXXHeXCXA4gxbVxf8XxL17SmGiAqrzK1oYSfs47iVAKEVBpqzhvVj8nVqZ2r8wkHyRcta5inUDF",
  "key2": "62KEhAc8cR2fHVGpa5Wj9vBddKgUFgL4bKdHU38AaRZfL8iYFKSEBnhNiqhx9nJpPjaAW1VQChkV9KRGcNA7zPUK",
  "key3": "3QCP7zj53yyeib44xtHzjU2wGmS3yVzgy4X7qHvJASAae8X6nWAmuZEKgKr5gBxi6WauNs82djQ2E94LaooDtMAa",
  "key4": "jXrzXfmc3NjC73a1BArZLw1SV6fdGQsKJsmDRQE7zpMRDFNLjjxcQSEzCt6tdpGC19wKE5Dk7cWDfuqSHhrgovt",
  "key5": "ZEaHjr1kWcfQ8XUfLFJmfuXxuVvkrj1tATiN5b85a7neQoHsxVK2GXn47j5WhejXNQ3mgx7dASriZ4U7JGDiY6U",
  "key6": "3vXR8B37G93zqKwzSDkej9kAsAYU6X1AFgR65eYHwwbtnBMDvgac4MXityMGeAHRe4BKWUyAAwLDVV6s7fos1LbU",
  "key7": "3GQBx9HV8ZhfFoy8JPBTLengVrehPmww4q7TprRPWJETgav1ywXmBi8TB2VeBrs18UFEUqEWEFC6XdDTWFeihYYe",
  "key8": "3ETC9b2mVnHj9KtqEZNNSpJYjepdpFo1MsL8uga4RWhj5mnrLCyCdETiwZNfETJs7L2uWzaWKVsFniFjX3E5sJgQ",
  "key9": "ApH3yRfA8ZhZefTqmYKxd1z1PKrQdjtSD8bg5VgFNoBYQZAEwayqPSNQyiC72nEJS8CaKryd1pQhpsFffQWKVi1",
  "key10": "4YZdRFQYXssKMk9LCJ5uUEtTyThcSW1DbYvYruwgLXBZ6u3rhQeFRBC6uFwmzZbuEifiL9PrD59FpqkPKK8LfTxi",
  "key11": "3qqFrwoedezVBTXLQFPUaVsCH46kM2jnzH373Nf4bQ8pgrGHucyGHmy6u4yDzRNqBQaQzkbn2qKKFrvmb1kfegt1",
  "key12": "5UKp38CUsWeewicTJRji9u7bqSh949X9t19ohic2GdbvhEpMPPkTHDSM3VTMATRfH4aC6C3MwahnCtwWcs8RiFY5",
  "key13": "wNx51Be9SyHUYQYh7aREU4moJ64fbQ3xFgsu1KjGkSxxZ9z1fs4oumDXFRji76oEPVb4f16Zt1MTHoZXRuPDh2r",
  "key14": "tSx7TuqrPcjMTCjQLTHcxJYQPDwMHhBQbNjp6AQpj9ELFMYn5rWvcHrBEaDpGLPU2W8MtB2c4CA96w84yKNjV4u",
  "key15": "3C5Q67uVCbNn6xWFD8ZYZUmxK422bEkt7qKLE4L7Hb6FRwVNCNdCbEB1cPBmSb15STdGKdxJQpu9UYWqQAto1FCc",
  "key16": "5jmwEdeQW9fvGf4CBGJyHV3HpXMYhHeK49Ni3AcnJZua7aJzx3xnRhe5XzzsG717wqJRG2FeZqmM5nphsUmpn4He",
  "key17": "NzbgypEySqJXeVaWiYaUbi8cdbAZzaNApmwtHzJnkT2PdpTLB2DKJXzmR6BoMv71NioLJYP7eUFETXBHeYFbEtm",
  "key18": "66FswsrRfkFjFfJvox522scZ7RZtups1sQP3BSz3DYwcT7XdDsr43cqPnoxfw5g34y6WUfT2trQ1YpF6oKLpBBfq",
  "key19": "5eKpMUmU7iGJ2nBnhWP5D5oCdjXTjMmfXhwTtKqNyaKj7dm7ybwzRv7nRE5GfeA6HPhzRa2TmK8xAK4octM5DWFD",
  "key20": "DmAYqx4yaiyPXtXtTYTwh6fWoUkuJaLQBSfH1SAv7CKtZJi51SfM2i5BFXVqQzX6MUZEsWSNGQH575YLfVcthQj",
  "key21": "5DFwJtW85ehE2edKmbuX41qYCP3dRhw8LpiLBZWppCrgob6rNjByXmuyoSVWtaSaPbTuMDtfoBDUfQnx3uNqgXpH",
  "key22": "3FHfphCgunoYaFVV3wMrK1UTPYW6U58PtDoNqPMPR1T6p7Pig3Fh8frvnJnG6o2jmfT4dymyLQkoMnHA97kEs5aq",
  "key23": "L5XgG7RgCcnGp5EptaLgrcs5CCKtkSpCrDgKPcBzh1HLbdHxmfeBSJvA9q5YFLcCWBbcCjc8xKY2HPWCxj9oMiB",
  "key24": "37sifsT5rL4LBSwgXjWdMPM1uWjLCz8ABsYCBEkACw6dgu6ReMfktbBhS7RRfpfPtUdNMLctSXCywxY7pHfBhK2q",
  "key25": "59mDVRjLHW3EEd3eCyJUMhzKK2Sb1cCQuwv7JitQb2KbJdrzNVaQXX32pGyQpvGad7bCNT6fjvHoBgSHs5uTVGBs",
  "key26": "3UnfBJepGfdMgGGdUJYrYafvDF6Sp6CeP1DHoE8T43VuSewxRs5pC9cnhA8AVT5poAuTWh13hKqUrgfBxhX79hzW",
  "key27": "51M8W2mR52jki2UKGQ4k332JqtNfgetxRRqTdKda7yCmJhq891VkiBdaQcBwLbM99qqWFB18a144oo77qGbUApY6",
  "key28": "6tsLJLPzVSf1oJ3tCkGR8t7NznskyYxQr7AMNdBKxrMBwrXfuEr644DHEzCnVK6xibzMxD5FY8dXn9NuwTboEh1",
  "key29": "3nrV1QkyEhw2f7YmBCnuRunJzNdv9nFUAPSooBJZ7Pd2Dd3PFqiLBVcD5jC1nCGHGPg1LatQRZrgSR1wrENfVvxy",
  "key30": "5AwU4LyX8rCHcdtUQz925qJYSUAt4HA6p6ecvw1nwP49uhRwDo9uUSGaHNuxY3pMwMa7JhMv7DxY9obMD1XYuCZ3",
  "key31": "5bvSSKtrkgLR2ZyEyLkoZbEW2RT516Pso6z1XHKWihbqCnnwkZ4ocpzNu2eGRWCUA7qeH8jbVo5a5EaEUcA8E5uV",
  "key32": "3C4oP3D3567Yi42hBKgK1Y9BRWoMJDkSPJa2ThQgZ76mPfAjf25JDXfQMsx6owQwUyTBhNA6kwQmnj4FFyoHvDmY",
  "key33": "3ubM8nfD5DAwhfJjiVyKkRjkWhTzzNuUettUA1fjCipiDHGaANZURYP1nyuk55RJo4a4yLGiU6XGvFDZcpJ88cm6",
  "key34": "5pndtEhARHHmvGAuNyJM8j3axC4NpMUCXbiS5kNXQ8omS5vUHEpREzZnFcJ2pwBf9Bnu6jpNYm4i9GcJDVjDohoY",
  "key35": "4VacPtDbSZBSgpdqV1tPxojRpJWsoQcq9GV5vrbW5Jdftrk5bE69vgGe82N1Bk7xiwTCn32LPf7yT2SLdbmqqS9P",
  "key36": "WHK8U75EVL2NcRGRdHgUzACTnw9rm2NAMnVbu4kyrTMftnBaL7eH4HFZXFm6qUaBttJ9vCYSbr7JYHiXuqkYapT",
  "key37": "31YhmJthYBHFrnu3mnRsN1hDzXDFZhUjAY8bYMm5m43YKVyXgvbovQ3uDPT1WoJY3VQyb4wZkTjFTtcQeb5kwmqm",
  "key38": "5Hcv6hHP3twywMo6XFDA3B1JYn2omoJwDKGUAwfgAsoEnbnioiaGx6MCouTaQZz98RJAcHQiqQf3onXfdyKGGFUV",
  "key39": "2GrbfXyw253eDfBXoQn5LzkZyeVTCJ2iPk4sRtVvpzmkc6p1A8162F7BCGWwq7FszbwtykLTbKuLMph5Edn9naSi",
  "key40": "3jqvZj612sDhZcYV6tbdxwnkPkJvVwULRbGKpbkRpbAgq2C8MnMhaCcXRjA2SRUNps3EngMNgLYCCfFKQv2vTpSi",
  "key41": "5NVP99yBmAVKbNWstKaDun5jhbTNUmJV3yWjs2xGuzVd5LmTYPyFkbP5higVcAjgX5rqaX86RWudTqpHd4J53YQY",
  "key42": "4SLWKVG36aWfuoQicDah1hyMhBNuLycwZbSzpdct1jyraKectcSMbKtpxh4GFscktTXrRFxEKUJfDxpWWGQ2aQP1",
  "key43": "4jxNneoPGyEToGWC4oNpbRf59DFsud1KHHE3vHY5Hwmx47QFhop8BjHgm1e9Tj16chBEQKAP8u9nu65dsVKoMya8"
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

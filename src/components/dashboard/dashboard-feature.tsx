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
    "bY1bjvnwahYSAmx1BNpUuFwVJLrgRQ3D3nTDBaVpKom1YECiPiQHyxgF3kPi3i1GSpWtNPRKkMNmdsTYPFXigih"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wirov77rL381TfV9E585Fy9Dsam1LTxfdN4ZRgvuFdtQFGQ7ZjuMgf7mcbesHtppkqAuRg6PU3jngt1U8tk5o7",
  "key1": "5HgrP5cmM16B2thqnZ5pWuqNgaQHcPQpdf8Wmtfh8Ko9gkHZiZwBxFD79iedmY6LrmivAAu1RFh3H2zcPa6539ZG",
  "key2": "2mGNjaTjT9qNRgvzs8NZF68uK4PWx1DxYa5aywLAHfp7HJ31aGznr8NbdLs3pkRLrPziJL9GPh3AqFz9TePWh2YP",
  "key3": "23VcP7fJ3SCKTYyYLG9tSypJP5919YNQHhycMv3iVxKKGG3QPviPRBtDTDn3TR3D677Ewm2TV5LsrH5yhEvvDJ9A",
  "key4": "3XvidqPjo1xPyW4wgNXNSQpnPQY4n9FMFE5pFTnqPDXokZ6Q9m5QMj65RjLZLAqMq8hFoee7QGm2XhGJrTamEZqw",
  "key5": "4HEjLFw8ocKZQNSrUpfQaYXNb11AmgoQimHHD5XXaTUreEzEtaRSa3w55q5Y11idSc2ssUtRwDs6WfnM4y6q19m6",
  "key6": "4NC6szrrAnaSPLpGbe9NmDQaAxxvY45wh2UCDPwGjh7BNYrv59s73CHYq18TbEVXa6YbP8Uq8rmMDmnBmivaqbbQ",
  "key7": "4bwt4NnmGxf8z3iBBoQbY7GmQ63z2i7KLohkdyXaW1ABrojXAMopYboAKz9CxdNqqvUNcqq67HebG4GeFq7SdpeY",
  "key8": "341XZv9qJuWnJ6g2iooGGSjzipWBLWU7DANbcwohpi6N4YYZaL2T4tPjEQ4ATA4pfVf2c3x8SYaAvKcmuCT5NRiq",
  "key9": "2AJPFq87WaA9HXEw6jPyiRCDWaMexVoTLUESGKobsDu6gVk3EVnfh7BtW1PtPU1Z7RRnrdSoEV1BaCpHh8tfbpCi",
  "key10": "3pAmDdNed8V97uSrnKzE9HqvZCpRpjxT3NwiXdQBH3DeHt9nmFroTZfRs4oLSBdw9vbJP4NBwWotaabonxFqAcih",
  "key11": "RZVGc8jZqT1jWP22E3DvYTEzRfhcD5Lao7ZdteLdfX7TsKpj8vSgEWRN568A4wJXTHUoeicn4Nvp1htT5yGVjQA",
  "key12": "BDxd83QRzbjfZTU5PQfJLQLov5tuDYkxmgnPDNyZNsFRuK4ox8zRWPLNYouYiLimJ1uCzjL2HFfj6rem38vrhti",
  "key13": "4fNoppycHN3aj2cJ4xcsf7pFtG1LEbah9TLKExfW1zR7uozYxq1c1xfyR1vr16HeMESD5Xcy4o4qLtWRzzRp5fid",
  "key14": "BDt18Hg8JGoXpBq5RbmWpzepwiutqmMBukaKjcCciccuCncneSWYcoZQJEbkyM5yHFu5VKBuCn4dHrhrWJs8hZo",
  "key15": "5gmzi12TDFGUJ77z7vSpTnwozeWykbyqeMwpXAWWZ2HnNtoQHPXMF2f4E1DHp2EJkA9ydSP2uZjeooJGkz2H2Ucf",
  "key16": "qoqnPQc2dWw5qxiNqEmvM7KLW3avYaH9ixhrR5aC3RGjegGWVuxqrWrByRoHZA896KqrQwdin6xwXVM1hW7i6C5",
  "key17": "HKpkmj18rRPYytRBnwPmFyjpJgPqvv5EVaSd6JUFWjy8pszqLMMJzJCHJ1oaJL7PHh3oGztqbwA6hsNytsQJxdu",
  "key18": "4Qmdr4dC34yvHKJ3LuUe44W3XnJBhhjzoDWfKjik1CGcTk9PozFy4ff6dx9Y1yQ5vEq8dAJRUinCgjcqgxTaCbDX",
  "key19": "4XWugsBuVZtJmkz8yBr8hiv1tysW2yjBGpg6feXnTaTmuUav9tPTsKGivhgoLHmyVCGe27NXBF61Vih4WxiHa8FK",
  "key20": "2M5Gxvwy7SwhpzzaFseXeX1EQvVHisqPwDsQB75YDtvv4HW5UQxBaQVZ1ZzzMjhQmQXfXAT3zwpq4PLJocbJc3Mi",
  "key21": "5jmRzY7zrJwZeb6Yzo35JmtDnyBovjRTKHSL75LFvxvSbBHZSq2QFJmYucvNzttfcKrpeBuNbibKJmCcxvbg2pGD",
  "key22": "3prGBBR1n7aoNHqpmn4Aq8wPKJBaHDZVWc9Y2Ei3baK54xQjRVsuxgtSQgdqFhX4c8TuhX5jxqMPDsFhdk74jct2",
  "key23": "3AUeEKw2V2j6VGLMAoCGUDzr7d3x2zQVMqNmjohMqzFqU9VSE82GgSCpXXTuVFfjQC7S1PGVAk967Xu4ioMgqmvc",
  "key24": "5uSARNEzSC7BGvgZgRsDHmoeALReDkxaPBHTGxEVinmgWLC1sbWNZcTTCrpXuTjAK5pBbe7tbsDZM48fL1L5cnJq",
  "key25": "4fe7FgmGFHZTxqaSmCKijYgFT2WCj6EQoVKaewDYpRa3S3XgYdfD9hme2nTxHq5zpKr8VwrT6susBqdzsLLV227s",
  "key26": "5iLuhq3T1gK7R5gzZec2Gc1aicDf2W7WKe1EYxpne6GcYMyezzDh5n4DdvKisYPdf4t8DYmCoHBwXGXNnT4eWSp1",
  "key27": "7LoYwCazBueN4HrQnnbVnhiHDGqz5iPcYVc1CGWpiYCCswWggu2aGrYpS1hY1DRmMRZgL4cNpmzy2U57FTb64Jz",
  "key28": "24Kb7dzLgTBz98SybDNbNLEB8wrnF8n3613DCzzijY1nrpqbkx5Sq6m8UVsrqBsZtBW1B2BtMw6B6aqhLaXPaUD3",
  "key29": "EQji2kbm5MWmZ7WUx1CTYcTBxbbeQxfBRBVvpiK2oKEwZYhZueN5puUsanwpvTkdcLkV1iwcqa7yMh22cwQqwpt",
  "key30": "2wNpFd4XHEUC5UpxDocbanwaxN9Cx4jwt12L7Vs88MrnavPMGd63yBKSQ15C9UkB9xckUrRLxVHkMjcEmTipaem2",
  "key31": "TuuvU3evY3eHTin2wNmcP7cAMkzyd4hoRGcvMQrqUP7h4qgBe4rCf69tGfQeVjyVRE48fBFjVKou6XfBaPhUNJB",
  "key32": "4qucsqSEdWaSxgV2B1rA7Wu3kMipEjewEys9MgbufUJDdEhVsspope4x7DRcVsEXVtJQdN6G3AAEoK8J142BEBKW",
  "key33": "4J6iPhqDnVYE57jBSzRqSZny1LgnoNxJtk3c3WoxxceRGacyJ87bq9hufWyzkG4ePx2vrm56XjxNS9kKdwEm12RP",
  "key34": "3gNPehBm5MsmA3uasi9JspptcY15kXoLSuQkJYXf8KFppM6DwjbWzUQRkHHZeG48rJsroBHChfoW5jdzndk37gaZ",
  "key35": "4tnEg1U11Fs3i37gWH3g5aHMWTiBMBTnPxeHsMXPFgLMH1TofU47Ty4PFps7yyVSPLwRm6snYxjvkbpdFVNkA2ca",
  "key36": "5V3ZXmF9CuMszPKfA2gjat6Ty2j5H5RmdYc9eVBwjWrsJi8dm1QrzB8N6qXn8pkhGy88hUNALCMSg5s5GS2Yuy4f",
  "key37": "3PspbtBvzeXX8dQAmRR9wJx8tkcGS16e6kVWFvqjVbVMwcAJjn3JRoV8X4hWw6jXhpz1iKWBtD31DgrRjpWS4qSX",
  "key38": "3siDYNi1rA9SonZYPzeXhAu8o8pJFV6TExiS8UCTxuupDdKhaxXfsjNYkmAbNDXfK2Lts5y8kvCWK2WJZ6sJEtmH",
  "key39": "3mT9YGCti19EvMS2Z9AwGqLKUXnsfen8qt4eJwNkpMNw83o4DzvqvqwV9sEbmnc3d5SkyDmy5vxfSAe37H9tuXS7",
  "key40": "4v1tvG1SRens8H7n15oR174ya6NT3EPC4WVawuMESYrLwxxdg99Uu1mYwqaihPp4vZoq39zALPPpnqF4BZQeRmnd"
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

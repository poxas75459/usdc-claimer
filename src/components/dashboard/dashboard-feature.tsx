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
    "5LhojZtoA6CvgPKdnJ6xngV8E8Pi84WakRDuMCdNho2N4QEdB4XN9L7BqqaxZidLTsSiZ93NWJzposFhG5NgbdME"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z32EwsDNuHviqvwgfkiptwFDM8xgCmnvscRHT8QppKdvmu26NvmETN8JAZhPTDQxGYvr74gmpa6rkjN4zFbkxSW",
  "key1": "59jHCZQijYNQdKAaC6cFJqM4ukKJT3WseQPux1MLB59p4Y88uDgbd1mNkeiUDe4uMTuJkqXsuZEML1K9hBaP4Nj8",
  "key2": "4XPjeVN8tgbr2KSSMbAu5K5LoJvxf9tLPhk8VneTUvoACBUp1S2vPYNJauuiDVLWdAGcKFTVrqix4SLZrBqfU5PE",
  "key3": "z4PbRyn3yPUAmb8VYFtMdJJetL2Ejz7qybD94C49JKZD8crc8tHLmNngA72eCA1kmCV7DNos7tjZgrTK77125XF",
  "key4": "D2BS1xCB9MUXWC9fNUoGzt5g51mcD5YsfbY8YHuGpbvz7i2626CdqjFxuot17oJ6iobF3TTYjaJrEgj1pk3NpEY",
  "key5": "5sgkM1KUtJga9LhVM9m8v7RsQTKaRSnhA6cEDMefvMrEZfptqTiLvHWqUpoCi39Moc23A2aguhQuWTBCEQmQjn3",
  "key6": "4HL3hmfq929gYBkTRXi8rz4JVkpGcop1KpRtcnHWcqhcvVHsqcWxFn712QJBbjMETstEyfz7JcSwdub5D1uaczm2",
  "key7": "377xMJGuy2AhWA8fenfth8UM7d6MHdpXQSmrZ9fn8g7hhoiDVxGybK1NFxvatZmJ7gqDSfxZ3fG1vgqczWMR4fV1",
  "key8": "2xeZCvLKJ2rA1DTgKDzexZALaM6i5ehYgi9UF5ysxehmBK58BjtAq3LL9oHHxtw54pdPLhE2EaCD5Uamp4DfeSpU",
  "key9": "4NsMU8rVo8FNfxXqydcrKWhsnMdr9xWZGryj7tduuJ5DfmFVaTXtpCDv9Egw9NY7Y1SHmwEafGAieN98dXrCmkve",
  "key10": "SZkBPVzS74hLnfw7Qg8yE1Xahmv1kEieeMzovSXd2zKVaQbDfXzgA7Sqv41nJKRMi17U7hkMr6E6ug8KqSy2ssN",
  "key11": "2DtaHXhjkqUgCn8o4AdGChY6p4FRKERc7314AQp1wPZqE7uwUZgVPVvcaNo1UsFBdELBNE3irEvaSLG9SwCVDGW7",
  "key12": "22v3JSf5VXvpEBvASAmTP7VRbDMvGNDmzGvwiVDYGsCC3eNJgYDjfCX268XFRzo2rTdom7RwH2PTstBMTeZYmLHJ",
  "key13": "2AUJ5a1pUWgtt7UUyQ8Eo4HSfZZ7bdj4f8kwC56yNGiAq2zWA12AetQ2Fe5axproeY6DPrzkyvSgQRhbvJrKd3j",
  "key14": "24aK3N8EMD8X11pSoskqNLfLU5NpooVmL5Wf7dRaocTy261eHfL9trzWKJFv61XCN26n1Bowj9c9UxQgNDBfWHJx",
  "key15": "5MX2uuCGRut3f5dRFNA4iHbx47uYomVkfwrsjd8FNBU5ic69ZRE18xnbVNzUyteE3M2Hya7MvgXgYGSbxBSCyu8T",
  "key16": "4isojjJPpftPzYpKirnMURZD9b5NJbuWzdpr5gRvEzJuy6EX5ty6sHJQoPzBrbpzYozBgALj579P3Q36QPBPyBEq",
  "key17": "4ia6LVUtuNBgo8iLkdphTem6PcpLDTqPtc8sJupyJ7Ds12sPdBmbM7rzokM7EEREQiQ2C2zH1ipi8Gv6mU8vXxtR",
  "key18": "MkzahXotJRtr4jtiauU1wPxkuPKxdWYyRRpbkoYJX8sSmrETLgspnpLXHeJB2uo6G49rdS34Drdcxco3kokoNXf",
  "key19": "22kRGmw3vVUwKgPfCEi1h21iJFG4KAwFYQT3MY3NxBqX9eNGRdz12vWcy8vTjYFHXu9AJKumPDoNURQvfimAxtfK",
  "key20": "3MBgfCbfibJpZViJzgGNzhKLEsxf27EbT8bQbYWDdV9QzaytHAZVG8UVmxbFj1fUQ6CPcvCvQWzhUw2wFG7iuatL",
  "key21": "3AhuWUibUykDH7qFzMiWHdCQNTNEdco9yYhf1BwAwSu9pwSi3XT7xWBxtQCX9ZxPBUeUmSuNq8TTxYuaqW9YX8T4",
  "key22": "V4eQvegKS63yKksm19XynpyTVAhG1L9SKbW2eKYoqaSmnBEPuiuxk8UbeR2KnH6hX4MEbbDaEdnGgXUxmixsTbD",
  "key23": "3xgU5d9ECgB8kcKB8x678KyVVkMbHTo15aycSC4Co2jv9iqYWfjuAzZyo9p8sfAGMh338zCYEbkbtchawWb2VeiC",
  "key24": "26iFA4JWLeJKks2ZL4u3vhHc3jXLPAvo7t1wtYoLrmjQr4fY5HXAoXgGQhkKP81hdku9v5xUy7zxh2YSMHbsXu6j",
  "key25": "3oDjem2Mbi59Qun5fp7XxGa4v7tQEJm3AA5aRGz1Qf8DqWS4NJLVJPi9zGgJGTL5jhEngUmgApqDDCnW4XYiUgQL",
  "key26": "4LUM7zge9X8nuNXqhrY2rkW7LWZxTykmVCxqvQ1ShZ5Y1nooVKTBwWu7s7BqpgSkg1inxvFkvnjm7STuubASnUHq",
  "key27": "2bAVTRR487nh2XcEyxiWgbrdfsWUvFfgC49ernhBrijE5w1qwaJ9EBaG1Z8jBQ67usCXvkM7z7VRs92CpSZu3xhF",
  "key28": "zVH628FVGTUuqp9K3Q13PEf9Ye1ETc6No6sea71xsn7eLDng7ZkJxSoPQiLMkxz6wQiKCvbACqnoPToouXZzFvg",
  "key29": "2ZGcxRQizhioNV25mxWZA2eQLXLJe3srVHbCK6yLbiuujeJTCBiVRztthpX6TFpuo8D45uiGsM2SfM1RDkR6tzBT",
  "key30": "5wa5C8XUzGM2dE3RoHUMhwdfjqxpZC8Xt2CYXHqH7yqmLEs89oTi71XgZXsTHZFrQnzK9HFb8igtxoESf6bjGJVx",
  "key31": "25uM7MEPvQ7GqufQWgjsLivtgbyXWg1unK8rpkGse4ypm2uuUh264uLABxN5WAgwWk6Ew9MWRtYFYJS6BWKcwjuM",
  "key32": "rxQZ8hxTMwkEpQyHv6Y55iWbrxRSEWC9ioxgqiusnPCRneNm7CkMebj2zBZ3b1JHwPrUdcQNZEpRzCL14aEEaAG",
  "key33": "4figtcrPdzsKq55mi3WWCc78Nfb3u4Rep9ozzAkMBcnEA7HsVMhUWUEyu4EvJqptfqJKjhxdvLTawHvoWdhtgVrL",
  "key34": "33sgxqU64UTsZwAo6S3xksaEts6cmsZPbjXxbgBBEjCPBJUvgQBC6dkWteMZ6KoWN9JyxfirYLd4KdUGejoVUNBn",
  "key35": "61vE7hZ9iwvoTjUK2J781QHeRYguZwF5UD9pP4yXVjAECK58hJiZPeqKofbfuC25zsCoPbGQ5oVdQ72ojZuRtRNt",
  "key36": "5nkhQSkKo3EPzGc9Zys8wEHmSxy15vKw4FGBSYAMLXrcQiczEuSjaHnaVQ4MZdYhd3ZQDNvYnYEZQSGgrqaYCVyF",
  "key37": "oiURMW4Rp88wR3QEty9kVJAaEbbiMyGCqG5jZrt8QXjR4XobQrevLoex7kfcn1wK2SXJnAzx8i6Carhz8e4MU5A",
  "key38": "3Ped9KhUAufVcPukkigFwBdHmp9FshoR1VRnTwYrazFmyaAkv1ZiAk8FkLGWsU9zjDaGSghrCbwkDtAhyAzeimQa",
  "key39": "3mDRKvcd2r5UzDj1CUvX8SJueFYmBqNjrBo18baSH3n2JnbNJDDxtQ8YiwYaw53yP9uY6hDoV9EQ3ZZws3JETY2c",
  "key40": "2M6ZdU7g6fzADYNHBM1hgXHgMBNpbt7DHMhmD9BfcsrtmvgcdNZ8Z85Xkb2FzpubnBhGT4Vd59uyDUE66gL2j8HT",
  "key41": "ML6UxMBowP7tHjQxak6BaABdwzW4wbqCBSqjLDqomKjFF3GrhnZSqkPjGT1ofZX3oum9D4c39kHUrJHSnLZyukp",
  "key42": "35tAvAfLTZd825erPhmneG2gUCL3oSfkMhtHYbKyZmW22Y9gcmaAMnvQa4pXoEe4goSfVpmyKk91KatJKaHykzXN",
  "key43": "tcSv8wKxPaFvy15hPUdvAaYS33XYoy35LS3EqYEsKtjoEqXs55qkE1QVyfR7ppdkviK8rcBygwRgM3r7ck8xyGA",
  "key44": "hGwQNCYKHXgL3cWJjNYi9pT96W8pE5LQKedGSh51CtrJv59uEdDS1q6LpZVS5U4oRx8Rn16xW83a4fYxTcn5K7Q",
  "key45": "5PaNqUN1Jn1kTPGeDAMFE2DcG8Unw5wuSoywiU7UALKs5neQrYjfXUAyQrgotqvZUhaTSDSknnf32U1iaJNpvCb2",
  "key46": "4iLbQ6avMPUBmjHUYH8y8SYuUxoqYyMPeu5PcuVjkKnx3rvT6jkgFnd5mEdzW8SqKRD3HPK9A8shPz5zWgCJ5dNm",
  "key47": "5wGrAJsyDKkg66NkjQeMunGjkWw4S6dDvFyx4z49tmSLx1K6a5EQNm392WuB2FpBELwghntaNyEcAYhmXwe1QrSW",
  "key48": "5AgtHLTTn9nockQNhxukFBq1DuXjH4dvxMjpgPmXzVCnVjA9tboiAiAdZTkbpNeBC3aJ3cg3TwyRVpeaseAaF9cG"
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

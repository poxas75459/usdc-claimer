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
    "6atR5baSuGqbQKEFfpVcizKqAmM8PHQ4dvHcTi8vczur3L4teCNpw16Z1A3soiMf8wwkcgy5CJ4hxqhxt4Ny5yr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bpFiKPLbSvzbAKfTcpMmYv36Gn6u5h1tVm39Z8P18bNPCmUXEnCoaGigfhGxNGnmAGa7GY2j2s74CKgZndX9MUN",
  "key1": "2tQFoA9qdo7uuQmMFduHZP8jVZPVt4X46ksHZ8uDVw6npmDXDNZYbFbuwMdgtez27WemtgiXEvHZLbuVFPZ4Re15",
  "key2": "5Lyn9RYAcUQgZQxhwumb6uET95aCt1H2ydaVi2qJJJkg9E8CxhgP4cUP8A9vpZqyco6UPGQPvhPXgJf3iHLiMjxN",
  "key3": "4VnoKv5H15TzGJRjeHWmDQZrGHwjigdeUiBdqMY5ZET3GHG3efYkdZhwjtU8dUkShTwzHDDtwu3PQsX4VyGeJkVG",
  "key4": "5hqoZ28VfJzfdzHyr1Q4NiUvHQrbENqd7vDAWntmCe8H1w2JPeGWCrra28PftffvF9yTDrm7Cw7848VwRwahzstQ",
  "key5": "KFF64onvEwwP4bMjrpPvNSDYS5NphyPHNYQFeriYEdV3c4kKuGBZezh2iEPa4L8GBpH93BBAfWLhcf38fVX7NRw",
  "key6": "ozRSPaAFtFheRNRwFp5auBKDWPEr1GkxxfgVuu23ej4QwyYr96zqF2ybbYFfezxCLoMi4RybKc6ag8RaMRUuw5N",
  "key7": "4ahJvbE8Vj56F4yNEFZhhLKF2nTmHqAUXVBJ4AiRBY7v7P5YK5nny6bCjvB4n3iJsAbwhAGjayShKoP342UwB7x4",
  "key8": "5vKLyvB5YWBgQsW5LhBDnHzu8PJJGaTiCxfrBnCvLDrj47HS7GHfT6qWhdAd5ZiTJFtTknJwvkJouF52TktfRSEw",
  "key9": "55AqV4azb3f9tKyhJmkzysVjfMqq3zbYKXR9SYckqT9m81KpSC8K1FAuhEiXWXXjofTvUCAVg18BcGtjAesqYVYV",
  "key10": "2q2TrmdM4atY8jqdmes6PmNcnUt2QN3DXCRdtJMcCbMhjjUvMbngG1XT1MjyJjsTA7iK87u3WyMZrqNiajAncr8K",
  "key11": "5yG92HCj1mPUyn5LAcrqzG8QTKrJ3b1DV7fVKUkWVkjVrGJwUsMREYSNuBEEVHiyfoowoVPTiQKaVMYPCGUrJXSD",
  "key12": "2kky9AubikAVu2nNLNT6yzkhWW1JKuRPQLLRmsMwnfbQw2ogbUyYXJTyxHxs5jLNhk4HwxWK53NavcpWKYQCFK6W",
  "key13": "acaUKHJ9spPUHr7R3NR3ZAbJNNuhPcXTLRqnVoXzE3zJGP1ygkBjCW5JexEv1iSESMWyrDZVGzuN1ZshGxzwko2",
  "key14": "5jF5Hvc1CQDBtkHdFxx2MgA9TnxWJvc2fpWUdhRzwLvsVqqRETvbqU6P4GAgRHpi8WYJaZCS53xn2iCak9xcMR2v",
  "key15": "2cQRchXza56AexEcGJH8RSVmxJTKDuMbi8RJUxyioe4poK9Kw5fJwcwwTjMd6YAuzCRhqvT6HWjFi6vi7v3KauHr",
  "key16": "5DZeBR1Lvrm3VKB128VQXJ2SgPH7Lmi6bFG9mduCeqBYNDUMEGSa2rQs7QfxouY5c7X6z4sDQotWw3SaHN2UWWBh",
  "key17": "3tMqAMwdPENUR8Totzb8u2qHCzU6Fbo2RDE8oE9TquaScRrEYMd9gHug67EWep76w5DBqFPsAUgfDY7GoH5W2X6W",
  "key18": "2uBEZ6XoVhb3BUrzUBHUnzfrK8gquvUvBHrsSRJr4f2PAXtm4LGJGT7cC7r1xrwc7RbeEMWwqb3Q24bpmpd5nWtX",
  "key19": "G9Bwhh5n9dL7zEoywmufWXJPGe22ExkMRKR19xc6LsBLjB7R58ytw4BgM6si4BneoS2k1J937nRMRssJJ8BhTtL",
  "key20": "3fXAgh8fdFxfdf6CyNumTd9gTJ5wpeafASxey1RhtTnNFq5Yyfen9B23GMPosBurEPRyt9WPWteatz8tEstWZiL6",
  "key21": "23tMkxi2Z55ZXfiM9vggDfvifkQVE4oVS1az3vPRMQsqP2Cav94ZU9DvUUnQPVBivvzPats3LqUA8zJHBkdDnov8",
  "key22": "52sq49asjkuz2S5Sthf5zkJ2SyDWsTL3wGDuDgHXMjeFt74eggocnmPRBc8J7z8hh18gmV43N8m9fQ4XkRqLs2y9",
  "key23": "37douXTFWL9eGH7YvRteqWu11eXnpcD1NAJEiE7FVaDHrii7XA1EeQdUTXWZPXnUYH5vMSvRNcCMEJAbJVbxgmfo",
  "key24": "49f9Vk4dFB9Tc5uBX2M4gsrz3riFU89WAT1JuHeGTgi6yEMiXbugZaysQDEv4zRSZWwnQRXR1Hc8HNRegV9izPCn",
  "key25": "5LL5S4d6UkVrMs4BpntFEKZ3PpMFA3tr3iAyJULRQPb2ysGAKcG3TEd7pCgickaW7tsdP7mn72YvU3b58ePrsKcK",
  "key26": "4kn5x11CWMJRdkgTA5bmFPLbhnSV3s9JaAy55t1kdsDZvTyL81ED9rrxexVA2PMeYSZ3TQuuJ7Yw4Cc9uztBhuA7",
  "key27": "2eKYw1jL6SVrdnx12Q8VTuLJLgVMpoppoqUZUTi9b6dzHsnaA2QabrXfnQU8J1TFAvgX5PGtMVbKzumifsfGMPze",
  "key28": "43w3rh2sdGQMykmuXwkQXnmK1vFU7XVmCxew79F2rJmnqerdPqTUgX3Y8G2kNY1LqYV16oDftvbfAAd75sCEKaxq",
  "key29": "63EtyBBphFKvo72HNj6FTU5NVr9zUXdcDLYc28whcBPvfG9gLE1z9oRtrkWG7PaGJwW3u3TSfXYYakz3g5s5hmtP",
  "key30": "3Y8C81dDZkmVYCiR9nm8LAgM6fJ2aHNA7ZxbGSaqXgzGizMfw69ijx6zjzf6agcpDNU3ibKs8gN1p8p5YXd98pEG",
  "key31": "ZWZu6ssfQKjKxjBs3mFWya3EwjpFWGhdUuLkLgUj82akmL1RZAECoajCjmHTg3NxitNbUXeKCrjJnWv5r35uVsu",
  "key32": "5CDuRNbVswoh1e3fH5oq4Wqg6kbpbhJBYv18hm18HyLsxdfJ9kfyxZ921jpXMNQt7kYrCHopkR7NBkVAy1hoazCa",
  "key33": "dZkJmSoQPwtGVvgPeXTTyyxdLVSxMnXL5zTcVbwAwVEseH1KFfcRNEvx8PjsyzpV2XuHhgqT4M8QZmvH6PvzsCZ",
  "key34": "5WqNxGznDMydPfULqXp97UuJkGWqA8jb3bxyjqMbk49Hg3MCzLCSyx7ZPTg916Li26937p4uuk3L5hxSCFtXctiY",
  "key35": "5cnNayKNiJxLjwoQHEoy4vjVeba8Lcz8DXtQEdj55hS1FkMFr7Ws9SVVkiMWwaKZ6DH8UBtDezjKkQu7rzGyHQc1",
  "key36": "5Hk1JpGygEa8KTTe4WM2v9j4t6gByQ84LVcK9GH5oZD7NXD8HuPZ4JV1qSxf8AwCT9G3iLMPXmZvDHU3wKLuVotJ",
  "key37": "5k45HQASyUKFsov2kDbeRvVERPxD8BxGK7pZe5DdRunLrjpWVGyrrkEykixadPAiufjRkQZiCVuUbXMRHcGRWZAs",
  "key38": "5LMvRRc7AKfdPjZD46YGTo6MaxyQbMD5eYnCtZf2bVTJv4qKFbGjpnJcbyYkuLfberRdGUTJDmf6v8dU4RmaE7yi",
  "key39": "3j5zp9ZchdMGVJzVbbuAEK3KEeKHZ1eANrqpqJ2VMgBY4cDCVVkmPJw6DSQPawNX1DqjhuZ2v5qxBfdMWEmBe9U4",
  "key40": "4wecxyyExCG9McW8Y44gnpnF3Z7k4PCbiQk8H2ZgAuuh9aeu572KFiSaxTvEr4UqXdvk7bzunA5hB4AUVm75VPAZ",
  "key41": "2FvLFSuQZixaYK6riuWrxnyMahF8QqtE1R2ZpRAoAGwUPDsF8ATgQLjBbSYNVyw51w8NzgkG2xphWnAhGk5ZbWe2",
  "key42": "5canD12PdZFQjUvo5X6BpqrM9ytR2haGNBrSZY5Z5MAy917wAY1BZURkUYR18pMeQDCMoKBXZ9ahSD4SGsVsReqq",
  "key43": "2RgYvqviaNFLQFgUvJ7ZPPbRpyyRi34VHqhj7utMw1GrqaUyimpMQRhTt2aPmvn4GdwUrw4PvUP1DLfMX74xku44",
  "key44": "2rKksAHCkgYue8HYqXLgsrz5HaGYhPi7EMgktPsX83vgyjDH2ckLA1SnLWjinegLv7GnXpahr81FD8aYxNsNNKLL"
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

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
    "3sj92TCKgvahM7ZgSijCwkGrMCYEfDQQWiSvdSgPrTLr4r57XNSZ9pHXBJJjz531mkmti5kRBMbffucRE3xAD24m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UYYiSCyUNKkGEGWVZnVrEYJgr7owBdZ2X1JuFc1zJ9yhSh52BEfoYWVMAwSEjUoW2WXW9ih6ugDT4yWLWUo8Fa6",
  "key1": "5yyiqCNnbzT9z7UM39jEVWN2vVcjEBJ7i4tpRbnRYBCv9gdWPV4A1P1hK7EDEs4SAWdDTCAiK1hcfuuEVf2vtt3e",
  "key2": "4tzaLNM1DbndcNTwVmvpMXGoji972vPRqWo3zrxFoLwXx6UdyVohK4PYWGPDbGAsemAiekYHKVULPbAswFwx1A2U",
  "key3": "5t2QCVe1cZDbYZw1t9zYrWKJatt56hecnKBq4ADiGreNJ8iEjDp4S7t4hFdLDViDK1Ls6qhvVmt16ytMZF6eEyQw",
  "key4": "478ufzZNqmvEbXLn1fxoDH1GJDzZ9fHECKRwtRXd5ZFujJgGsTT3Cg6SFGwMG686ekKXWgEm1At6PapnkPXKvaY2",
  "key5": "5hnNqE3h5YVup3HLvVEEZgBSw3gBodjsmnbXm8FxkhQ9uiQG4yZS2hZeWXpff9GUMJrvBrn7pEUsTVsc986X9dgJ",
  "key6": "64x1W7A34ZkEkWYVPseoxd3nFZbG5GRu9VGsm3e34VN4BGnXPaWz6Pzqbb5EvCVXFimFcDyV95yKuz1PaN2DSGpR",
  "key7": "5N3xiPLcJKQan9d86y6ACH7c95ZWRLq7WmBkTddsZCegd71qzctxVkKHdFXcrZyhrLAAhJYPHUK8JTLU4xhHDvbe",
  "key8": "3cybAPv5befnkWEVgKjw8gDAWZjh6ZxM4Xg8PkqyzHFSFdpvKeew9Ebo3inUsrmGUq89DU8nyzRkgxmPMvgRpVw2",
  "key9": "5u1sEEF6Hjs3k73hs1nd3ZTiZaiUdtU7jvMmxrRH8fZbRgSRWiJiphnAjGFcw6uMGfmR9htdTrwCDEw7KwZmShkh",
  "key10": "4HcCrVS9abAz6R5RLPjaYpEP9V4nmNicLaTLiL4YSArUBxv61bXmYCBuzmwjFRnGHaEtN8k54Lr31KDtrKpxUZMQ",
  "key11": "WSVj9Xe95RhvAY81pa28RFzHXZycM62rEUaF3NURoBNSNC46n3mjPXPAQ3HSS3GB1tyfzF63SwJLz4FwCtJqPX4",
  "key12": "4qGWGSbBPvaadGEQyUWtkvTT6ZkQPmxR8quGURTmkykG6D6kN8QDAVauAMCq7FpCdkzoL6UfPyD6DyxzEhLTJi6S",
  "key13": "3NP8pH5TC51K41BeuLVFaT6ugBFqAqUpeRJDLKeJm3AP5x85HkuRiyJBxgU3H76nPn7PnYBWWj5PUG3crHVJUYce",
  "key14": "Wke8PoD8YSmGQFW291EAedvTyqnLFR1Ng2Sb2BdPx7FnnrUQJGsu3aEawnidZoNaQZzMVEMZEfTzciXJaKNvdsu",
  "key15": "5vzttBqe2sKYKH3dfvid31VJ4j5Htop5BQdy2Lotgbn4PJxQ83MELgNNJHrzECJXsYEXer6JPAmobpzNPe7WWSNK",
  "key16": "2K5Mvq5VMD2DkQH9MbpoLkeyyURJGD9smtkAYuJm9gWCCeoyMETCFdh6WZUvktji54X4Vr2wjYmBr35feirwQNWa",
  "key17": "5BriY9UQAC2nR5jVdUgMDg8FpADQtyBVJhFkB7U4gXSZ5n7dJ3KVa49UP4uDHEZmv6BG5UbqAqYVmF5q5g61PwW4",
  "key18": "5rEzP8fWBAFEXU8TwxARKxqxrtcmXGtmUq94bbgG2WTuFnShXSeUX6Knu3K1uXuxtn9jVMeoswJQEe1AxcrXCgQi",
  "key19": "5cL7MsvHWMQAe178b1rCwByEvVFYRetEUH91xNbwfnX71r6Psk6hbEX7HYoc5BNV5poVvVjWtwNuCMiwTuAoq7Fm",
  "key20": "3tvANA6FzqcV26aizX6y8amfNGumbzPDubeYJ69hKWvy2FJbJo2q5SjHLLG6jyxMKYWZ4kFRWmc4E4cVMbLaduBd",
  "key21": "668AyQ1vTvb6AiTDhhmrz6JHLvee7X4waUFABW8t7JZDny1xnNUWK4o8agnp6QKbwr2T6Wjq4NDxayehg4AMR6YR",
  "key22": "2tUXbwroXGjJeDDeS5w5CiEe49pbF9DdrjsAuB6Dd8rpGtwruxgc71Se7ncQFKqyVthQrU5RM4DKeEvNsFGiERJG",
  "key23": "4dfM7muE47huNZe3DT4p94n8zKdqc89zYF9wvoVn9wkmtti9Rfnr4NDegyNp87BPGY4t9Nz8XtuUnHGf1RQYRSBs",
  "key24": "62DQ9uxgSuQdvBTDsuf7Y5YEmusJRWBtSuX8xvvwmKAZSfDKDgBeCUmE6CtZ4Ug7DBjgKAgrjcW4ANcsyDgzRbXi",
  "key25": "4CmzMbDDvVAuBaXUZdKaPJNHnUWiyi3abAigAHAxxFJUR5xvyAU3TFByyV9RC7h3NvJ5zHSLfj7ymQtZ2jR6XcLL",
  "key26": "4CW93gupNhdK8ySHEEpLb88NsdBYFZwQH5uPNEpdbRyMyru6Nu9445uBQ4EyUDs33QdqjS4iCuHp4kRiXPXyHoMU",
  "key27": "osP1tLP6JZc8bBzEMdFdwFtoHQ5pB8KpZ8eLm9bbX4LvgNLCGsRHFqmJrDgHp2o2ThpcocQipLLd3gXPHG8ANRJ",
  "key28": "dS89oSKHWghyfPRCqd4CVD2ohoRSTBznPE8NbSKoRtBvmU3LXKap14Lr5ufCrF1FtVN2r945uwgNLLDQUCE1WfS",
  "key29": "2n8VbT2dnvFww6oyJAiEzQgb5oqskw1rJRrCrzXUZJSb7JEtCJAPXd79754jgLcuFr6jLaGCTv5XzqaDGpe5M8pp",
  "key30": "26wc6JoKZSQMJ6ntCxsLhnJvZ7BK48R1NixwRu4YSELGV9fjWSqhKnFzDbvwxZa9jzMLTUDtiEi5WtBSAcNVqjpo",
  "key31": "NoJNWTrM5MtARy9YsRVAt9H7nyE6vbjQgiTRU32f4tX1yNg43AH7W2FvhixdJfyRzSon7PgvwGAv4joFFNP94qo",
  "key32": "4QLcHAm6sw9McaYu5CM4grEcZr61cmXCrAvRDMT4z6nXZ7rMAbpzhsdtdheBSoG16aSZRDJFVh3F9LgqvgPQ13dE",
  "key33": "674DxC6svUr4AtZcMqPHEpi2ofUGjYRxG9DbJF3scsKFpfDPN7DY8m3J9HyzUcbQFsRkx7vydz7m6iAafdct9oWj",
  "key34": "KXmh5kqNRQsMnd834VKzPpvSrX21scfsZkPmJJCWkwVh8bxvTjejsiD3bYSje7kBQ2PJFSJEDcuxMXMx5fYpwMN",
  "key35": "4L9onm2BRNTidyD2BVRby27v6QPK4ucmD4NvfRRDFWYRxLTo7KpMEnGwTzcwtnK6rGd2W6TCPvkRsvjwHh1V2Bq4",
  "key36": "4UL8PtfUcXTqsvf8Ztsk4e72dcZoYgvS9oGdo41FaLeMUYh9xjneXVuKLpfXV8cgRMEp4avVUBWB2MW4Qiz1FgKP",
  "key37": "EcbMdGRNFweSJKTecwWEC3TbhGCHVoFLH36QR3ZpsPW7xEgrApmCBmbYekXuqttGvwoq3KYqVzaWL6mps3E3sz1",
  "key38": "5ZK2d13BL7UW5vau8xNxmjJgmW46vdTaJaTzPtsSuL8Ct6oxtxRrjTfVjG6w8jb4iUaRGBQLugGu2N6o5LVjYBGf",
  "key39": "4rqWSNsvCm6Y99sVXm2aibSgv5gSkU7CG1kC4VubieEymCEYbGn6jL7tJ3H3GJbeHYo6G2Jy1JCqm4LxbBcpsNXX",
  "key40": "LmXksagxL4u8B9ErBMhJV3peK3DToiBCrU46CP2PVcBX1qze38Tdy4JRdHMR4yebqNGT1XUyF9j4KuaTVm5rujd",
  "key41": "4wESt4SmiaaQTZGTRW7wCyumbm3FTQmYY18EbyMeCFkqHwbqcs3o3hf9prGDeYwCupcNqFP3E2qJSxa6xPngmz5d",
  "key42": "4hXD5QPKmKreSsNg6c8ptJDtWC4VtveMvaid3E4fPiuwPmddSSD6bJLoXSTvheA4rTsLywbV7HS9ABKEUvXSRQb1",
  "key43": "3ax8FC5dWBrUYtQavnR93gKb1Xjt51Rb45AK18raVeUdhAWbYRd4DCbmKWDzwnPCu4Sxf7GBbBuMqWMydEMP3pvt",
  "key44": "2BhnPTZEzipDGo1pMC1bRYMvdXGkpBgdg5zrxsqT2vxCF8ozMBbNrC45Ct6dzqZsoyjJHLREznqaCB2bomCb3nuw"
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

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
    "5AybLR5oavyhRaErZ6x3kWgYBxQfAKacUFHofRG4F1X5rCpUE53H7dVxh1s8U37csBf3shrdeGf7PJMvBwXV6bqf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RP4AK19PYAKaZfqZqPLervYfvcJRKrcAhDwDg22e6DDEfCswt3L3axJNHweniK7PuFCKxKHgFeK6a92yT9wnM6d",
  "key1": "3rYABZiKcfWYMbvkXMbk13YHuezCFFCChobSgrf4VYbmHypkdAWEez4wJNUZgR6YHNNjLitkVQXpERYk86xrCo6c",
  "key2": "R4DwJv2jRyNVGLRGA3XhuJRFmq5A5QKvW4xGU24oPKyM8xCLZJSonUU6JbRuZfWBxsZYnGpG6teDGiXFqvmBFxm",
  "key3": "2E61rS7KCPyBenXDNCQmAFyaugjgmRnUZfuuD4UagzxSbT7LtjjRV6VczRF9ZkmD1cCWtW9aMizZdmGpJ5LRgKnF",
  "key4": "2USSqFVnR56VhnXGRCL7NcLjVboxCHCNeA2sZDhfmgNEKydhTXZ7m4baLckfVjZThg7zi2RcpvoY2AbMttia4wTN",
  "key5": "hdhDHKET8fNAXCN5FEbn6KeC8NSK1XtApoiYM8ZFfB8CkYx2i9ZkzBXTfGnh6ffQkWTHew4b7ciuEBeQzvdh9oa",
  "key6": "4L6ZruMtaiAXWSCDV8dcXzQSFAqD2uRR4bucbP7eNZpPJydp6zjWaEfn9bkGmuqj8QEwZhYL1AnK6jYZWUijz3sr",
  "key7": "4HUQU3MP1ZToiVwNXX9R1tYAeCVmP5HUCTnQ8ho2yaeD9TPPXwVYJoC6K2oKQNvBd3fDjC99ukRPr416freyHDtF",
  "key8": "4HrvAyNdsgkQa4pgL9UwCYj2VM7f8sh8sdJne5Quo9V7Z3go9zoaEskQjXx7rEvYETFUqLHqREZRYuDBnULDh5q6",
  "key9": "3rgZA4m6FPjYCngdqWawvpztponoiVV3ZmpnKWvXL1LtUtULU7u2YmuTHDAuTVpvxWsbDKjgt8UUqtzHB3v8mdhR",
  "key10": "4WDyJ1hyNLU8jGKDgjj9pU54ihWGXBU4m44pKggj4JDTmchhb3fwmDDzQq8CncWNiK8HUJzTstwVndJDgrcCL8vv",
  "key11": "EHrnG2NLxA8ug26pAbgoJTt7AQgtHuMkYhR6Qt7iRrCu3KBbPT4AtjxoTy57hFbdEKv1aWt5eRZ7LKLfiJUr9Di",
  "key12": "k4U6CVAPBUZ4gMRTe6Ji5kbZLZnjapBekR9bFhTkr4W1FYG5zXAVhKFdiULa6wqDYyviXHrme3B6KGtWEWPT8ez",
  "key13": "5ZDSaULMT75DmEjpb59W1x73TSwaajJsYXwJvubnQf3Nxik7dh44xkEKZrdG1yKwdm5PMBRtRDpp8EhVNjFjKEyS",
  "key14": "5ZZ9wWWFMGDUh777PRgcXoeGbEJkoNXSvrjPUVeyrKQP1FxmJ26juqJguZjo7vF383dJkVYs2RvUM7ezTNdVNLBu",
  "key15": "2ogAHZyTGwqtg2Fx2ona1EKTGv51Fi9jRAeLJsps1pRCANS9miXf4nDZ1wFYDTAZM8nuhAfs7YM8rAVVuYpnMFGm",
  "key16": "25gKQC3FR4mbJw9A3VoR822V45MZgsTA4ZQvZAQfvEQNMQuJvrJ7iyu6qKwkWEB6t6rZXPYdw6VLAp3dLGXKaehX",
  "key17": "5cmUQCfKC9K1VAjrZrFHSAHvyhpCrgkPC7HPVrfKXEcygrsERMyc6ZNqXMydCnFQNDmzb49fA5ULVAybA5MEKnCQ",
  "key18": "5UQc7DTk3V11AxNL27ev8cnAcMxawHNXg99NiTkaG6XbBv8r7qmVYRWQ8XdEyPZU4SfKe2DWKTtDBfTBiokaWciz",
  "key19": "4LMMEPgxf2bRDY82S4s3Wa2uYNy4S7UTHAAy3tGDiMUb1M9XVQvPq1ZgJTVKHsFPKLUaHpGFt67gxkYSpTYfgMsd",
  "key20": "5ThdbUrssNGXmcbrVWsxPespvnAZFSvWqU9S7BcgJBWPHtMCDLM8NM2WaExNg2g53A9sB8zbr3NQvJjjKMEzRSFb",
  "key21": "5kkqzsrHAvBaBsXVZV56XAMfVSRdkmteS7Y4P3X6tk77WjYLj5oAQzrBcMGTwDMHpRF3BxFp8xJtA2XDBNJBsRx",
  "key22": "5n2M8bvtTNG7FLWfANucpa3cJFUWuji3LZqZBUD9T6BdcJpYjw4RECdP84RyXN6towqZQyCaAFgp93mvkqUqz6gH",
  "key23": "3fwDouWV4fheabzA8CS1gYb8byXyN3FXJc9hMNf2aciSvfUuynm5TETbP5MzwZXQdN6ydcnUpsG52d93B5EUvPah",
  "key24": "3BTa4gRthhbQ2tU5h6m12Xt2Sxi61NU36yDPAYvNor6bNwuu86iYqN68bzPzJHVexUSsNrdwU4dvvspxemK94pKU",
  "key25": "46c6MYhd3v5NZGuSUXzfy8cKnrWPuLzcbzmq3vTii7LBRMsa7B6SKUQ1RWxQFdk5tKUCWab6bgPDPsQqMqdo54yV",
  "key26": "3MHVCyQ9pH3kZfVctkCWzYCpYq7GU3ejsAcb7Q6nkXqic73p1FEFdpk5Fqdsd3KkLRQavdLmUQETsKMLNXcKnodw",
  "key27": "4tCcxiBnS7jqBmPdAeqgrBSjZEPMz3pbjZZ1pNcvW7E8rpq4A24jcJci2UojKxge7UXtpJpK75qVRvCfnwrNVbto",
  "key28": "5R7zH1gUF2GbcDdaDuotsbJyQiTLktMn72gyS2zkLURQrVDE2Ci6w9eensxR3Rc1rRmDZsqhM2g4CLQijhGyiyVk",
  "key29": "2msJjJh1vpiDNegTBFTjWioHG3aT5eMcaVtizLgzUXp8cniFQimtVbscDg3cLNGUvbPSXKhSsPJJbxeKShZFfQR",
  "key30": "z3L9VV8AnuUyW1hVdT7WEAMC9qPcv76LPSBcyZK2kfQPY4noQm4YS5X9unmRuPxKRdpCFyAU2rfxaSDQEGBbEJB",
  "key31": "2e3eQ1MYePqhP4U3DBeStQfQgRRuYSCfa1mjnxHQb3SbaxwTMF8WtN7GPGbuPjZb5NnVpKkToErG6rXT3SFGt84T",
  "key32": "2zwgzBVwoDT7a2ub36EW9fz4nJ7mQHCnaZuSHjkdWNgvtyVDQUHoQbqVyfPxoVV8WZGN2azt15XTu7bVFehhDbLT",
  "key33": "314FFoHcM9FFxKhhzjpDrgGM6uT1XtP3GPoD454PMPiRhtzTiCXxyqY6jT6ZXy5w34Z23zr6UxFrWn4a1Lua4qc4",
  "key34": "X9zQNK4SosJVFkwhSxwGEzZ2tE4NWpdSLrfote8bbAirg13Vusqn99dFHYNUNupNq6VwPkZSSa5sLkVorwnAqrY",
  "key35": "7D4tZ6pNzf9ERqp66PiLBtvUcZUnVkWB5AudrLvPJSpExnp45s1ianvxmbKYBM41PNbQxHTVu5ppo26VDcv9Upv",
  "key36": "56wKWj2vPAVN3SfsH7u55t1UDjqcqmgo9iNB9qUERW4hUtkMHmFJWwGmJffouoC2jHAG657i9ZipsTYmitW8Bx8L",
  "key37": "kXhdco8JafUuoeHrtJUctZqSzK5CHcsjKXvg61zXFQeBgwSbRgoRAycc3t5oLdwKrWWZru1Loo45Us98FGFXHvv",
  "key38": "25sA9Nc8uDkZkxnF829zh4ajpG2wiRJ1UTcPVBN9UjHkdpsbtGW2P3xmAncu7xwizD47VQL6S2DB6ouJBz7PMfzh",
  "key39": "4miBZ7j9KiCSLfK2fyWRMiXzeAnGTLSKE69MPaVvjGMS6ydtn1kWEV2HEoLPSf6aSK4PN6ZVBZThghJRV6WezRde",
  "key40": "5ss8z9w1HFwWNvFiRs8zYKmvhdsUkmAiagmFXxPTefsZmMbkcVayrAYJWGeGANE79M9pM5bKMaZGPqvasVyeGqNo",
  "key41": "22VdPgVaEjx89kbfYTb5JZnwz4dFxQaf2c7kSaKSh5SBrEKgqm2p3nWQRFaGDHj3gtdmUzQfUAQPrBuGGtV656Lj",
  "key42": "4PEuJj4uLtNv8W4VUi6GJATPr6XnjLqnVAutC1CvKT2uxyZh53Lty8WmZvUwRhDqn8gdtQLRmwzRitrBuu8WXS3b",
  "key43": "29UZZmXdyNhixcT7uzGnReVUtsta6AKwACrXRFbQP59YcAmDAxShLKrrLtqFYZq5tzekMBrycqCrr17ToQp4Mwbi",
  "key44": "2uVdQZxeToLPHPtFKdXcxRwrXnM5txtJF4pRcrhEEQ8F3nNKKfTogLk77RCdoFC71Z4Lsxiohsv5JZxdcDkv9DZD",
  "key45": "5V4GEqWNmfzwu2xGEuv3a7ydtd8hNsHKa1CYAgBWr5HQDudUoiRArhKDX2orwKCnL9SJMXwjQenugMd98pjfuk5E",
  "key46": "21NeJpB6how4G1HFyE3Qeu7e79v4fcfQ2UwPNC6ho1Hjy4fxTyu6xgPNKZ1EaqoNgavgbPVW2n4JkvR1MVxJcjMJ",
  "key47": "2Fmm57amcx39zaqxu6EoruCpS5ZHHwy1gUB4jD7GHrtyT16bNxboEyp157yFQidEinwty8mTtDshQmGscnxsR3Wr",
  "key48": "5UiFAHJvRaH4fYL3oAxfY62bU9dYPV6fQ5ZigV3izDEXAfMHWHryRUdBBfp9V3UA87wM9vxr2epxS1q2Bs5ZKZdV"
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

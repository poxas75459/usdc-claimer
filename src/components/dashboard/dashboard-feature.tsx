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
    "4EfFQGHfheUMowmDCRo39PXhRmb15KFERtbzKAnfZMvwxe7YUEjCazEyDqBdLnoLZzY2cHdvXiYVyPJW8ZeN7bZ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Yrsz3ypcTh7aLaZa7vv1TC77AcG5Xhkn7YZf6TMpyPU2ivid5CPX8pZm1VUJKW16f71HhyQAHPciTUn4Kj99jES",
  "key1": "4k4QKuKWrivvnNo1TwGarqLb9sQaNjtoPYkujVveF1apK8YKBoaGDmWkyFXnxY54TVVgRxfjD8A1ZA2RfeLiVofP",
  "key2": "5dzPkxFcuNuButybSSZP3q4CxThxY7r3CYhKnG44yCrjzqA2tEAAj2fbwx5v6MEzFq2WSheTsEyn5Kt9EvcTNNMC",
  "key3": "5FeDuL2k8vLws5erjUhj28JuXwdFu5a7RUGTeQ8CYnj6DJ58eFdjeQ7o5uGc5aUsWoPKjkgBmujs41g7PxKsbEFE",
  "key4": "3ATwUb7r4cwtfGdyvRCpdiYEf8pDqhXrM9A1YNrzASqw3CvYpSHe8TnWYjwdbkiahQeLXqardp44wL8rFKaWFPnv",
  "key5": "32KchFz7ZMKRkqTUW2LbTzbM4rNZGHynvzqfkvVmFFygLgZADL7aWp7FSW7intFPHvkpV35Xwi8iJDUxZvXyFn7P",
  "key6": "274WrvKzXUWG4SsRXj9dpKXYP2imwRMAFiqhrCtC5vzxrGpncsHbX8H5oVbWwvuQWuinHkqwdBmgBTtYs4Cqjbsw",
  "key7": "gJKnwP9ttPCQhwKG3sd1bdPMyZnzdftG4xjsUsaACwpK1qUEipbhJ5pzYhAQsCMKJKPvn7pv9Fq3PSj36jui9Pi",
  "key8": "5FiDe89HK7qg9LZD2YoKbGVjUA7yk2AUTTd74DZEXotdW54UR4FNDLbUTBrNfXJpQne1MqcDqWE5jzUoDEnmZTUX",
  "key9": "2Nvjxj5MLoR6ggWGWsgRkR9T1nsRCuDfyi81PpcQEGnEY5SFcVFtM1TkitUXm4SokkFosQG5kjnzzVaJeFiipsiD",
  "key10": "5PzaLcWBpLY3aFK1BP3N64rr7cx2wwCteR1zVuuCYkhVqQTKeu2QBm42DtFyQi53nm96amHC815T7Gg2HRPWoJVv",
  "key11": "4oArE6XQ3ZRk3oXWVikhyRHCZU2LMSdatEBvUUig1TvtP9p9qnJ57P4KURbtbjaGRy8S4Mj5ZQr92L6ijdhJ1C6Y",
  "key12": "c8PzLXSHtQSgiNaLYVzuii7vGSYcgwwhWNXmnTiPviFJ4h7kEC6qb8XZTBcJVGdH27hgoUxLkfb3ic2sT3SqazF",
  "key13": "5hYbP3sEL6RTnQyUvyRmSdoXyXrooVTteM34ULW8i2AFSRtZxUwe5yM7nTZSKi5Fb4YShDWfvAX1CrwCMd2VFFvb",
  "key14": "5tj811d1iHKAaHtwSX1TcmYXbEpbdY9DC8JVUXwCFvporDRennwGyCd61GVsTSxzRDZSfSeQnQVzmNTtokvyE1EH",
  "key15": "2bVTE1vNgUWtvKZn96oLDGoeSqFYtd2HjNtThZ63T6xovVzt1hjwtETtjUZfAiQFuhQp8tx2sGkTYcJjjAwuUwfj",
  "key16": "3ZhxN7xmkH5BGJcojiEcZ4f1hTN1onPQErKfFJJHM8Qg1JvixZN3gGwsHguZkaavbP1KQbdTDeHBgC26zT4z8HEa",
  "key17": "4nSuS8Cxc8vuPVxkYr5JB4UbQSPNryQLPVkEv1tWKEfd39KFJjasBV8pzvfkem9Vg5CAAhJgKRY8hptKwm9btAis",
  "key18": "5AWVk9GDWKHjxJrPpRmXznSrDPLw7wEWmxuZfngqw7tWy88s8cDSA3NgNirAozkLXA7MTLxsHZvGzXVFpeuc5hLh",
  "key19": "hjTVSoMyrpLGphz9KGyLQvrfZbrUFXDRePcs7GL2xRkqwoKe4R7oxP1YQ1s9sGBiZubbkXJ6UQW21m93XTX3PKJ",
  "key20": "3bRL83FCHJ1FYJqDK1Hyfk4MfSrSz4ETsBrTgArcDDoxX4UpgicJDofHwVTBTRscNAVYG3bYBSZ8nQewGboEnsug",
  "key21": "2A7oLwisQYFrK1VksxqcQhLcDTB9Aoxw3Qy5x9viyLFEfTrJaXdyKLtW11kNVnLhkhmZXMF1LEoPQkJ1trtvMCnU",
  "key22": "41fbyYuaRprr1sYFbaMhrmvEFfpvoKgp2KbcKwm7SaZSbBFAyPa1QgCrWhGooyfxbCSxMjpnMW9D4JWuNX9Jye3V",
  "key23": "28n9ptL1Uji4hyjH1XcEhj1n86kkEiA6WkHimms7VV7SVpXXWRiYWvG2FSWRYrdWNwaoKpXvpeCywK2Ad5hCK36K",
  "key24": "5Bz6bQ7BT3iPdEWDNA424bNtgNPB7W1ePpUPaTBG3au4QbpHwNBmCQqzpiRLuMzc98bDso5yTJhmTpJQk6maiCuY",
  "key25": "4rYAapoSB3kak7tHLyQmtUF4noXG6NvBvB2zpWak4ufci6f33QUxQ1d4ek7q7SWmzQ257R4Qa2k9mK7jqp94v85Z",
  "key26": "3wGgruvLFUcn6vtzKpEY4DJVcnQW6LjzKbfy22RSgwJ3YvZ3DdbF6mJWZn9jMx1adrjcRxPGgCpuPX5aKUZ9gcsk",
  "key27": "3C8VT5BkQUHUMS4kjYcTLYL8Ax2awwGhyUTfHQYKxbWGVpDyeMmKj32Jd9XReWFiYWKdF1nGdz2jAUcMPCW28ULt",
  "key28": "4C8qbTzSxHUoc1GrCkESN52ZJbaJ5Up2uyPJkeWBi3ZyRVheLxfWkoiwdhpAybFKCdcWAwV9SDsELrvYk7UkD1mZ",
  "key29": "2bQecqVQUK26YonN3r5jqmhMDF2SFiXevAtqvT9QnkXcaHixuwNLjtw19Zkhu6ej9SKZAaNBTE5yfF8JLFA2hqkn",
  "key30": "5e6svSbbGMLMxS5EE1Yiz2wzJExNhas2nLLZoBV4gkQbzhvYR4vF1uWrXWcotRuGWPEv8CwbYktAuaMEcPqKiYRd",
  "key31": "4pE6v3wSv3YDwMbmbbvMdqVZc6XL32Crm2Hheo5J9Dx6LJ57fWajnVEmxqmuLoA6jf9kXuqN4ioMHCS25VQ3tSJz",
  "key32": "3vdUWYhYuT5ZThetj5AeQHLoq8hsk2XMCzdsYJ7AHJdj5qBUHAqhfSrHL36LVgaa8PdKSkUDa6dJCLb2P292qDwC",
  "key33": "ALEf2oozj9Z8q1E5cK3NMfWLCyGiXe4ioWe1R2XVe6j2TxYw74iZ4ZJjjEMKGN77dnyqe7wm4FmYY3GoPf8VFLp",
  "key34": "RcRvcSMXYCX2wRnfmrHrgkeyPbqF6JHdBS4Ppf4SRqfiqtgNFhPmk7ydEqrgiJ84gQDfR73c8kY4Yh2vtjU9ePv",
  "key35": "3PvQtYr49zpB1hQ5kbH8G2Rhrm2h29eMAaB4D43tkWPNBqif6TRca6r1DRSrkwZbqSs55pTg2oNvRa7BRyFyqSoM",
  "key36": "3mZufjK1DTCtu8rk1fPojJrHLR6CjhSbbynAyGXGRpnv6PW1qDddNF5EGxnzvXwoUQ9rs9CcgNcvRVb94iyrk9Hr",
  "key37": "2X1T3yzRdMwQC9ssVGqVTeJiH1s9q2E1fpVoeXGqhP1MqG7gaLDdCowKdrPfThN5XNgoxvj5fLRzXV8d574zVHA6",
  "key38": "481XxhDFTZTazTrTpRiH469iy6pvptBmkjEe7y2rpisi3t9YU6rJW7JKMMgCMiPYHs1JvVdiwsXZ7aXDWNMNaQbD",
  "key39": "3RiyVLExBnX2sSc9JDy88WwrWRSZMKETMGDDR5sxyQ6z86Pm3yTTwcKoJUdsnk2bTWzVr7ueZYEsFMvcNb1oxdMB",
  "key40": "2yxXLHt2njiBRVdYDDQo92wTLJ7fAJ1aiFVkZwJHPLU2C3HysA7Bkd1Es6XREf5e16A53QNbcXqWJq9xYLmuCrqK",
  "key41": "3NEpf7XmB9VPgNYy4JPJwuLc5FbrdaZjvAAaUJUSp9EC9weBKsBpp8UikJDUf9XgCesWwKb262gxAGGgBSgrCAYF",
  "key42": "3gbL3jeUsgn9ntAWzcmZKyZydM8RzCvbHrjPRHhPWpJfa5G72nVtsVXVvKpcq4FHmBjFiiqxZUzEvJV5aN624xJY",
  "key43": "4nggjPGPzS5YiFEhuw73vtrusxRRcg2YUDZF4RetfgG5KfrG4XBXEs9qTbqvoMKDyiBqDtMXLFtucjfEyW9hPKjj",
  "key44": "4JzSMrDEjbfrW6UWWPJsvMe61B7SuUoMbJGUqVYpjd8xkb4eXAoJpB1cHUGmdpetpiYhXwkHWdbJ69NXAvH8yVJ5"
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

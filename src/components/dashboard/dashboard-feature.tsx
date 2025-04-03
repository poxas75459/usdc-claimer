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
    "2j2JqsY9WLP5sjDiSGUTvQvuvWvFvPW26SVeMeRdtinw8ZMEia2eNa6dmJMiTz19x7CpgVCiamdxc8Rwxi9PXJiq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Lpiwg5ZhYk5NMed5D6chvjE653DF8usSfGhjFphX1vtG2UibYhQaceSTshFYGesVPJAdop7ehxq6vm13TSYRViW",
  "key1": "t2gNBbS8H8HtYXcBkPceeCRzx8cEDfSC8NAwmKz7MyG4t6aZLuKSyMGDyLmeeFYeC6hUSA6J7x5hAPxjbVhfwAd",
  "key2": "YghWqgccSqaKvhkHTaer9wfBzMh7iVM3Pihsjfe6cjUbUfi7s74LQYKQeatUwxrTQ1kgrJT14HWhD88iSKGqKb8",
  "key3": "4UtmLdLQZd2tMgE6x5Z38cn7ff7HHYk3Tfne2mMfzDxmUxuyAAF1NTu8QNozWXi44A1LL4h7fRrfvXeNBQ6g3tT2",
  "key4": "33wyBePmWjqErNuhu2uPV7JEToSwmZiqCGdWpCw2sTK9zhhLVZLAkMuEABLSxXbnu9nteinEzCUUYnuGethyFe4n",
  "key5": "4XdF46HZwncATfF8MKAYjCoUMu7HgryD8BPCibbdNLnguLVL1b8jJHZhYG8UE7o4drw3x1dLABfeLHSEhQcg7MX8",
  "key6": "2CnThesaEzJNtpaCAE1KJ4grCZ64yb51EecG9MZUHEWCFrzknGmpjapjr7e6azi6babvcyoonMftcLAfLBWSAiQw",
  "key7": "5LY2hthC11fkmFyQu6B1cbdzZH2ACnBXQJv7dPgzJswuZfKHZvAEzqHjwNzA9d5UZkZbBEiTo69DDEPS67uDHpfj",
  "key8": "2T2e57vbmBSKa5amgegxzUCF61AJvARqMJVhtVexwy6Dpb62tet6sumeoJRuwbek8WfN6WVAsM1ttyVRBWZ6Dox9",
  "key9": "dyWJviEMirkudQ9j3RBvcPUHm6FDLPDVS4i7ZJPSF4s1nyeAfdN9XSJ1p2hbLkKvR9mXi3xGb2QnnAkiCmTixDL",
  "key10": "5UfGpZFiuHcNkkQHPiwQAF2pJD9d18ny5jSVqzJEmqyJvc4SXoRMVwNbeZ7R2Cc8bpwSoxW7dF2NCKqE6Dn5bTTC",
  "key11": "41pPDRtb3YEUZ4BBVDEkQbTpur9ym7mCS9i1khNs3rFbquSEqDcyVwQgd7nap1Wfj7V185cCyDHn7KghTTyppvQ9",
  "key12": "4U8YmFvL92XLAJvtp9RHpdqSQ93YaxJynBPSwBTHEXAQzVuW451HrzVhVmP1aNGBkd3ERaUKA8GrSKXi2MVURS3c",
  "key13": "3NXv1d9faCMseJGCmv3VP1pFFq2HrpujV2qg2vBPE1wsKjPQiNboboNBzwtHQaQDugTd6YLPSNigCWjqQZAeiiEp",
  "key14": "5KMw63GZ1nfo6HixWdUnEKkDSzbpBu78mAacaa6Traqw7cJCvjbGRy8v1V5RRPv1gyfPbvwk7LZgWH1WSb54FPnB",
  "key15": "T8hU9hCid6UjDEm3smkS8DcmpH1iTULRvrw7NYswA5Z1du62ypb8WXQCQqHQedLPvXqJvy3dBnHWgR5ZoTXqCGJ",
  "key16": "5gNGGpniSaVNXFHJPM7is5ymSCkEtnXkxNQDyAceFBagvHQ8gYKKW1UuracTJKUEP2co5aUXxDkWKuNPhhdhruA2",
  "key17": "WNL1s4wVtLMU6oNv8vJVUWXg23syrEUwK1XeFjDycs7BWhhyaRQxWTEfZRAW7TwsE8ZLJq5DBPrvLcRYrEw3U4m",
  "key18": "6wVWoXLi9uCH9g6tHXV1KFZ58o3TwJ97MtrJZ7sMg86RWfjDr44YtcvRvegwRZKF66gvgvvvRZNA75spCSxWLqa",
  "key19": "4UbfwptoyNUXK3sB5PY9JkzFBArCwpqRCRgENPABsvyAAfEx1REwcUJZ5eianVQow13J3gwUUnB1fPGdC3ocMTzE",
  "key20": "Y9YaVtquRGAYecPCffWvZ5Nv9z1x5PHv8jeH1RJBcmFTEt5hgCeqi9BN8EgprmcygbVHTbUDDxnKsUTnEFpu1pA",
  "key21": "5sRYLN1hXgyZRNbh7u28r7c5hrcikpxT19o29G6h59FagC5NTC8L9jFKeBByMhEBK8hvXfM4RzHsVmWb9X3MpE42",
  "key22": "2YSVuXTLj9x9mMHFcXwVSG7gm1bEsfJycw1ESy9zaWYBUBZPDEazCJzPoZeeXJWHfTiyPtSvfnYPseUdkaf9GfZK",
  "key23": "4C6oWBE4HV9XjzLeJmVBVf6y7CMLpSz11TrbFeHdQa4SbG4GrrH89WrBzra36tNdYrDTVMmnuRhd62ZRKbh3t4gd",
  "key24": "2BBpb4qA2HbXud5y9ubdexokjpB3DAVfdwExR274Q6ULx6FnKzUUxQGhrwT1s2XdM1vYoTKWmSNmz8PD3CK8Ych2",
  "key25": "4S9WbHFuc1oZKfNd58rKkuCuhwEUHHJdEPhjMmWDcLLTZ6tpJKLjtsw2zgkRR6x9NvtNrAU2PuRix86i2PXpN9t7",
  "key26": "4667428W7bRdrVcyt8c2TcBxFmMZ5BSVbbzwoc1m3DqW57ZSoCCzrW5q4P4JZL7a8uDJrBDMpfZnZXxnpLwFLAL8",
  "key27": "3a8iFr9GMsWZ23L6S4o6zFdeRy3eABLsA2GamLdMbP2Js6fiMVcrTSPzP8WjmfhmHqnrUA6U12JCGKxbuabTqr8B",
  "key28": "2c2n9HJvAJN725WU7qBb6TmMEWicMd7hpCB8oiGGq85V5ApVgGRmQVKXLeCJyqro964eFhwD9Mrw2xMh7GAV3eaK",
  "key29": "LpKrcPKDcebcmz7bjjKrHSSTfMbuc3VRR49LLt76Q4HonUJf4kdfE6KqDJoT77a4UjUULaiN7hZSHemQvXBQzkc",
  "key30": "Qe35tjCGFTGTafg9u4zossMuC5gCgxRbaJvnD3BMbawWqqB5p6NA95pkHvCetzUteeCdUFBGLqf8ZRv4K84KayL",
  "key31": "2krpyT9E77iT6ScjsYoZ8hmZL4e7VsKs8vhTMvZpY7NBCVkUekN2K7g8WjhfTQSxcjSGiXhRASTctsH6ak5RzF9S",
  "key32": "2d2Z2SJrFrYcp8nnnwLWHXYFNHeSVrx7nY5Syk7T2z5C1AXE3qM1Kb9hC28owL1znYTSx6P747sYurjFZjEv43LZ",
  "key33": "5yz28fX1BbVs3GsepHvpSJxyCbSMkhUZb7zMcxXVgaDG4SfmoQToV5qtXhwckmMBFwHFiwkLVH5Q5fetEX3UzQGd",
  "key34": "R4tk5nPPuxTPXPstoSyCnpXLKCUbunZ7xm62HpDhdJ63sbkJJ1usEuBX2P6c3BWwiCJsriQmquBq6svrDiMoh8L",
  "key35": "rnTjzPZ4WqsH8Cf9vSi8GZc8Bd898bhJfCkyumY42GeTZ192Q648BR1r563Co97Bbs94s1JXiAVYdhchbaPdHbZ",
  "key36": "32YX8qMuhhkdXzM8BgniaMfn9dbAXqoZKx6VhmVd44Bhyw9yHHLK92spxBgkLVnxFUJgGWqs2ieRz97sx4k2zcJY",
  "key37": "3g6iwjM6pC1DUJYe24PZ5yAkFaLUMKHadkuGH7riFcPyV3PaU7bLrLZkRABjMKYsSfSyrpBb9qx7s8qspmsBvV3i",
  "key38": "2QnDGs17mpdzve7NaWcfFjFvMNMwUCSznN5qNH1fm8hKfxgUyxJ19Ym4cyUDFd5wQHTvy7GgwvjBcbq3SpUkVzXL",
  "key39": "27NADmmf5c4RmgfPX7ZHgxFDm7FMPLsrUA3tEoov8VuaCsymDJfX5mkUoiw9aaRYGqwtGDp5GoGggY73wgun8net",
  "key40": "2NL3dnGfc3ko8zDhwBEiJDF1nUvtHui51WYeg3RePipuxX6QY86CU3JEzjX52nqzvCE2SKbgtg1FW3WTvhKNSpjL"
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

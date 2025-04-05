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
    "4od4LCkZqhDfu9oSKE6tsM7mENHhMQMNGxBPDKJ53zKY8eq6sFmLSTYGWi4hi3WvukxSQTZKxKo1er5pyyBxUhZs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AgDiuBoKoUqYv4BrAgruNVSKKZaVw533ZYy69AiBbyKdQELE4xsWEuYStX3tuJMdYWBUmKQA6WRTpyMAgEciceV",
  "key1": "2wZU4mS46fZRCq99NevCUbvsxQhjS2W1LBNViVWqVbZ25VjSadqk7CSgd3rQ7m258P2rNSgFdXHDxWri9WASaVrq",
  "key2": "2taCZREEj39yvv6Zy7B9JUP9FPmTFd9uP2G4osCZqaDGwpJNaoHWqqhed67F1jkZhgxFRjxBem6NDt7jgTzu7aYr",
  "key3": "3HNgUSHHV7HJWt6H8tWys3DGeiRrQ3joTtrpRsT6Xr6yvWNcYrUpHf3W7oT5NtgVnaZdwjWQW96dhjRsabcRCFZX",
  "key4": "2iwRhsoPwcH6xJtDDpBE46S6wk2tLcDfviSbepB5XnnTdK7WTjcZyRzhwpgwsxxW4CYevuVs6bywtErXt4NTeQWW",
  "key5": "5NEyXwTwwErqjQ4RkArK3KGrg2VYp1JDiYb2HttRerpuCXxdBhMMU6hQ9Jvi3wYsh34swctzPvr6YfBUcJ4LyTBV",
  "key6": "5baENbUM924DwEBxXXREvgLPtXHoMF8WBGmSaMBywQVmgycURULp5YfgRyVoj7ZtQEmpaixqqT3uetyop3UAA9Re",
  "key7": "216oCvcvKWimCAPoAbafRtnoGtZJtrYmsy9EUPXRC34ps9zwi7uk3GivSv63Cj3m9tM4xz32jSmeu6GwhFdbLWMu",
  "key8": "3o36D69U8iTnkJhjhzmZ2i8JBe25nv8q8GJGdWkLeXpGmyVgweRXUarbNbz8gRoKQ1uRjLFE79XeCrgK1ruwPq2c",
  "key9": "2r7vAZsJfLou15zyTPZ9fsCGKfGGUmPKHLzgHRBhuJ1DXbTY4kggVz9SDoJrwCbafQroS2rdT1QKVymmQqgfMwgq",
  "key10": "atZ8dGfpN3mvw8efyNTuYNSgfrPKs2rtay1MriAEMgcnGp7ejqZnY7YsqoXzCbZvcs7QDywAt4kcQT3vgjtLxnx",
  "key11": "37ZbUFrDYnSaGTQ5eCeQBZuwtZkUtWxzQA67rSuNvmy19oX1D3sUFRKoJMdZ7CLcZoyeCvWRqqbhKMcRwdPVQdUq",
  "key12": "4yduqmXNYpBYm63oYXXQNRxV3246H9DJ64nS4sy8CgCzH8YEqDfsZiC1gYJDKrH2t2WYdq27rzrgJuNfhhBerWzU",
  "key13": "zYzMTkakhtNindx4FduRAVHq1A7JZ7gSba88rZru5wGBadoqsnvPEguXCErVR8tgD8nMBs2ZL5T2LVKkzNviurv",
  "key14": "4RCJreE49tuSFUeYCYnYVWthFrbvYTFriAM9vx8DZXPGEKqypjFtn92jfWyY9srffoekVeYSK6LEovvD2k66rCQR",
  "key15": "AaLVt694P29PbcReEEJcuNbq3q53BxLR432GAUYwsFV3QH9DDdWDWJYayKFwt64MYLJfZrxbmb9FLiQmb2d2euz",
  "key16": "rLHwFwXQunLXRdUjTzi4jRZu59XvaSWhYh7VYaACTvop2JMtj3Y6cVcK1SacNhmdGmL3Tmu3FajuoHj8r9TkLZg",
  "key17": "3aHisp3kDDztfKyBYrXeM3w8t8Af9xDarMEJKDEdNPwnPFrUW7MuskY9vFRrJ5H1vAqvNfAfmyCChxLNdpJ98fhV",
  "key18": "66MJRsq6rZN7xNnDSJCDqqKsUDPerCnc2QXgoVJV4U98duNCegjHx95uZLu2qeuc1xP6ZfQfLm3kk1DEZN9hhRBF",
  "key19": "4Mt2Y73p49MdJp7WKiKhmbotZHJCCHi6Jk8U8cqDx9mmzxhKXzirbALSpVA91KUBw6xPdjHiboj5s3DYQRUEPNki",
  "key20": "3VbK1T1RHuNBMC5XLRBBQWBiYEtxSPxQ62iqpv5aSgg2XyMoxGFkY3auQE2xGbBjo3jGyunwdfYSiHuX7HkRPEGV",
  "key21": "5DoB1S69RxtLstTVK6hKMgPuQYDN2NiEegxX9zUh6oaDvXGgV481ugwbnRynQL1EM7kYUWgjhoxeLDq7XXdj2RtC",
  "key22": "2XHJr8VwfepzDWWQ9NxgL7Vxdcj9FVAyvj79gTdmS4za36H7ycbqAaDaXLLV2rFxjK37xquCfW8SkNpJR57qneEd",
  "key23": "Vv2HtxcdL59opTBSLeoigXQSHNXJPRLSxKoAs2kBtZFBF8rEhtbWixbwSvn83YQEr89RicPPm7VjyYYRBx8P7nY",
  "key24": "432hcDJLX9w7bYDdufNoVHE33iTtTbQhKEBHAvVeZhexnxmCd8UhsNtb2PScNw7iuz1bNxsZhVe1Re7Z1iEzrRfV",
  "key25": "39WNA1ftrNvNmo6hBCb4v2nEBKUMTyHsT5avZWfBaYDkKJ59XfaqQYo3rPT4FoUFohrCYnuwQqDfbdT3kq6i7hL1",
  "key26": "45mDfGjbtgukgKybRYxG3Z5gxHCLwmpubxqHjEBPhM4567XWpoJJXyd9VqjVPRpABdpSUuLfpET98Kb6hS3YRkUr",
  "key27": "2NqF8STXVNqVK4rPMicMWanizCpsHL1qnGScamvtA9YDzWR5icx5VZ7nohVyzZhBm4Mae8r7HPF9vgMzNuuC3w6j",
  "key28": "4WQ3ALwaztmTVDp5LLDscK1WjnHBWntF8uiWtZAbLJsWHgDJCDMHw6QLrevtYrjCZhVsmfgesKXJDFntkGaUnSY9",
  "key29": "5QfWU7SwPbf5Ri7GEcpT2F1G4ZW8Uw54sL1s2aswM4q8nzWUD7KqMQoXqivMkgprV45MezpFgShzVvJi1p68uiLT",
  "key30": "2eV2MP5QdGU7oyuNN6crc9QDQknQU38D8xfoTDKeAEM7GwzsPeszxxEaHdSs5PNvdCSYGbQuW9gmDMhuH1iDgWiJ",
  "key31": "59N1SXjUeMf4JyeiY8G5sHJoUhytyHWww1pZvtiUWXQJv4ZJxZduaxwc18SDTVNnLySu7od3vtoaZGWCB77skZvi",
  "key32": "c36zeUi27fLFye9hniRkvovwhmkfcngV2SS73bbCFByYuDovmQsDBUXb83xdA2tYmGwWy7HzBUkN75ezHQNkKJ5"
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

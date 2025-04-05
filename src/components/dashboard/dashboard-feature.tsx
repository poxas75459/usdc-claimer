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
    "4SqzxunvKPzZqAqqKSvktHkjRY7siTpHavaBXM7qii6dR5RSTENoPbgw1gb35jm9W5ihxXQnUqvfy4xyjY3jQy3y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qZ8VctCrDsnapnuugVPDstAFng9VHgdTYbdQN15aKEbXGLeKXJoM3CxNKrvMhAbbn4Sg673cJCK9yu1s9uiX8Mw",
  "key1": "3FiKKXfzsVawJsDfeEsy5c9rCVayNAoxC9j6nvjMxUzv7pBCmFy2PAPP2nmy2JDgtsjbHuTa2iZnzw1mFgX2Exho",
  "key2": "4GQE3LTebxn9esvG7syrraM5WggdT828e7BAXHsyEkmAqRnxA85fPVw84Htq3abZypBUR9Tf33BG546gtNm6ramZ",
  "key3": "5AEKyYcG2m75aszNMVJTGNXiTMiP4Xf6EVF8k3zBi9jQHnxhH4soXPpx44JwT3rT8tyHwBumJMHzYSz8GMG5VRm2",
  "key4": "3ywM6tHRRgaHMQUMfAVg4GaeWMM1ABbqgfToQ113YnWebAnxMBnigFsx9MBcRRDkEzV1PmktATpJNBQKsz4mCTGy",
  "key5": "46JxDhxpE8LePQwk3wW6oU4FUCzyTwtgWw7F4zz9rt7CixUJUEByvayfEWsxxw4kae8FuRRLsLWZNhVTuuh3PF7P",
  "key6": "5HNsp8LodTHRCuWAxBS78dKya7uVQFR7yNAjeqSUS5kfskot8mcFxyM3VBCPdp2ukjWmG1GRkXv4eky72JSMtiCx",
  "key7": "4ymU4aYGxTRC3ThuBxmnCNyPi8EBDEsJRNc8hXigHwJMZ5cPHypCVo5E9LDfpVMWt49CmcyvVdLXPzV9TpB7jnsa",
  "key8": "2r1r6TnhaJsfqvMvranwd6EVBJrqeS5KEgTLcopxbz4gvjYe6mgGsZQ5eqRBPJQGmQL2QCPt5658AmMkJuWdjK8y",
  "key9": "izy68T1ZYdUBr3882MDsB9kVM7LSeUu6cSVee7p9Agm69vn7qZxQkqKkidCGjfUVFB9h6TkFH8DkpYtPHDW8mDg",
  "key10": "nffTUTGcPLNE5MZ84mP5TKzZamNzCWUXWsa6u8XN69882j4wx5n7s4shgCHZSuC1Jtt9AYqYtCRARdahbcwXC3J",
  "key11": "2XP3QUeYovyqiFjHs1AVidDvdFnL5fijmMr3fNePSRLvyZ7o9TwqNGMiv4dCMFPuxQKYN9ZMfrnXHhVTqjpY2iJ",
  "key12": "5x2X7qRrYASLWsYXbaoQFampMsKhRLHzuKR8rvUK4cej8uN8KgpR1jNSSJKau2RzrmgfFszenxNnF7EfKfNmMsu",
  "key13": "2SYdrtjcC1RMSLp1vwWKPRyhrCGKoWG4dHQ5vw7Sv89VsqepvyjeuZ2BqPTAsrerf4EBdJMck6NPWaAJguDGZPqV",
  "key14": "65zbZutkCcG3ubVVPB6LfKphAoW7eBHsecpfuG2cbdW9dZC3gSbBriRgE5WoYrkSvZvFAU7EqnW7fo3fnZBVPWMK",
  "key15": "62tac9r77kk7tVeT1LCZcn6sBihreqxxWVBsJ9x5ejBDhaxTeSexMC6kw2YubC1JWEwxy7agDBtEdHxT2kLv6Hgs",
  "key16": "3XcwhLw4mC6JYXDidpWGPw2sy4MtNjpprxVKp2cbSViNhmcu7op6Q94f7FwKmMnxj5BbgoqqNUzN6Qv4khSpdLWt",
  "key17": "5S9mbmHcdZHB4hH9ekHzqgNSCDMtRi1RU3gVDhByLKuCcLmRS98Y85eJTEEpoLMhYcnVMzoStR7unBdYP6voxzZ3",
  "key18": "2YUhBhhUx1DGQqehQSWpNfL4oKdJvRMy9tVjJeiwHvWRwYh21krkEQJ3ePY5wpsviD76P7SDXrTKk1YMjMGhN5ZN",
  "key19": "4gsTQnsEYHyBfRnT1gX4UWkX2kfaGDuBqp9weuvxkWK31WrwsyaghRkq27mhrUQdgTMMFpxBUtq7vDTKq8F3Hn8X",
  "key20": "57w9sQ9vj1ysBMuJSWbocHRCmEo4Mw1WXULQTE4RvjWqQEbym2tjW5BwziP6phiwYqhE6VWYncjGHwpMoviKcP9b",
  "key21": "5gXpXwamcg9Y1dwVRGwTr1xqFo8HZ6Qc159nD2CeWHQnHQ7PruLxFiizvDph2gxeFf19P4oFyQDPHPj9jXuV4HBN",
  "key22": "3vvSPbC4vX7yEJjx9ktPUJJhcTy3e9sDJB8cuMWHdbuMCAdLNxBcjWyH2rBw1giqqrKtEELTjatkjDHxPc9Upw1X",
  "key23": "3nzWNHSCXP1bsENvDsFpmFVvNTbq5UWnBQv3myZyJCi84SSAfZpXXTymTS31GJR84iDDM6hBiBJrzim3KvVCjkRw",
  "key24": "2s7oPXAWmiNTaLGk3WcLs6LphTSwfwxgNWnwy6imp4mDbaf66Q1REgYugBzfMG9rmEY6qxGHUG52kWZtPA6VduPQ",
  "key25": "4tAviEVd2P44ghv4E4bhutSRGG7CL7cByBEZpGBYBw1BgJ5DAnMHha4cDYCdLmzHGXxGdWuTGCoGMH1D534Zeh1d",
  "key26": "3dPpJbavyexfhjG862RmBsetrPSfQHFwEFT9nTRydikorKc4y2NxcE7Ki3i2D6HtXmpP2FZH58PpXgsARkBpHRXg",
  "key27": "3ox9W3vzrZ98DnwNpwjkmbUhoYrLE63AtHrsK3dyCrQeRkXXxd3st4PLXsR7emJ87BL2oJWJo5rd5sZAqNZbEiid",
  "key28": "229XwBVRmrLkcfcGk2hZFCFEAJy7AoZaBVoD5dheMdNtmN96eWbuUn4B59VmAeknUpC7eLofRWob7ga932YJjHDa",
  "key29": "3QHkwx6o66LBsziZ9UTE1rpgc3MLis9pVwUCRJP7BeTeTmJfcaw7XXYUxt3VM1kyxThhHpYyXq17HFxF9uYXoFAA",
  "key30": "4xUxugi79zee9XxHqt15wNDVBsi68ecE1iqtqY6YTQwLBMeLL4rrNYoM8VDHeZhV2M6tJR2oXhVBkwnarvXodR2N",
  "key31": "3EE5BD8byC9McpKFbQS6HDKxfjtWeYPqNfUVjnyGcLpMj4JM7arqYs1yYpYvVfuEFnWZJxFNwD3KxCfQ7Wp2tPVf",
  "key32": "5SbTr7GmhyncBF1KADbbFaTXuiHa7nYgZKBWTKfJHtTR1N6dtCT55gkzCegJWRExg5Bk381YFtYoxxWP3HgXnZsw",
  "key33": "zEzxvFbsHP4oqJJ8eysxPHMYg66veCz1JFkvuSsgnSwEVXxBZjvaVy5R3VAsdsPmj4MGeMC7B1CNndS4CjaQcFf",
  "key34": "5Ubw5kSZQnykSoYBUavAy657jH76qffSmebL4FsDCjyQdT5MpwUyrKGanGUF2Zr5JVYbaFkNmgRGY16DbXjNdyM1",
  "key35": "3Vt6jW8DRR7zNa9dJ7Y8f1PTfnW5vVUMSzcqX8xacKYd3y1HThZxRNHHmwtHUDmeDnNoxxoHDZcqfB3tQEi4CcT",
  "key36": "5JQdri2YGtUuqjvzopsDWDMUJPLSwSP4E8icgW8v7W2FcR1J2MPku8uz66s74w1yhRzrp1mNwFVhT1VhQwzP87UR",
  "key37": "3DJEXoRZiewj215crde69bzZ3kZSFL45U3H363VAPyubaSheZrrafkjcwLUe78BkN6MaHg89cT9KoSWHwN6Li1hY",
  "key38": "3t9kEqobxaXrZRnPz96uob7kaET4nfwGm5CxBpSsBbRR6KY6bQ9P92YBQDufBx8Fccu9bm5YRiDUC8BJ8amiULtb",
  "key39": "5hiV2vmfnU4izQc9TzBiFFimT5CaQXLzci7UugCLsEUpgB8qNgHXETJicpRkWRUMceNnRLSKXVWucxX1yAsYke9c",
  "key40": "EPLkhjyXSk4dDtRuXM9rvon3yxbW67nXbsNVhmU117H3DiZFjCWTNxZU59wUz2CSvRFyUSUyABeDWwzwVfUhVVh",
  "key41": "3iGVk4uEmqrUU4rzG5nGFgEtkfXwab3bdHU7kfW8pG5W8VSUEEJk3yTJjxtfHVAvMKZcbCHcR3d5FZqKjyWmazxG",
  "key42": "5uWMrZuRhZu4r1ReysUMr6HxyCv9yQugVNiceFfAjsAbPr7YuHn8PKC4Ugyaq1UHqnXRzdejDashoGYAztxiA2Ks",
  "key43": "5duv7V6K6pT2zFwHKLN4w8fPeX54UNxmHMdqCvcaeU6VPERLHDrXobTkikyzrGYdW5yWW8a2QaGqS1ZwuC25iQhe",
  "key44": "2LabTF8k5dd6UVF3rtC21wsPtukwBpdpPxHVth7KZZpkNBGe88NtMGPXhdCBq89cs5K6FkUkdHTK2wrq8cNkJKSj",
  "key45": "3U9PpUczZx2roB8rBLZHCczPjcG7hadkUsCGKyuABvFxme2XsHGPtQBzhkUmRwuGjQRBqH6TvSX79wnmQ4SGxoF1"
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

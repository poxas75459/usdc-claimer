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
    "NZ2425ncLMGBE4XyVhjBTfxpYQUpAStTs7Y9bfYqV5UAMzc2qNkUY4EBzHhWfsCs6XfxmRovpC4wtTvsWDyyEqd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DUHhvi5iNQkS8vPSL5H9hbU1PqfFGKGfQswCC8Darbr5uoocY6ZuouUQFDwRuKVBADU1EdwSU59ASKBnVJxAfHN",
  "key1": "gZhQDQ6Qo8VLUn7v4x2oTp74c157quYFU4b4tWLZEnjUKgLTbAWKvteDgXDBCa8s9d5raS9gXW7XsX7VYoqXeUm",
  "key2": "59PrVF4NnLR6BoiKL2FJ9fda5KkZSynZrCwPTKY8WxmS9egQdHUJgb5NRF8f5sFDCrMyvUn8bhdALofY2AzDDETJ",
  "key3": "2QZiuLFdJYVVYdREPn7P8CXdy6cipRg6toWLAXDrfW3CYrCXa8ASh5pfk4G4sfP48ZJi9Qsv3tEPeSwhww8k1wBU",
  "key4": "GFGRhuBepTEReWkxxFYNLhjgjhow2JimrfZ87Mwc3SUh18zsqMLzQ7GvxsUFUfr1rvDmHNCpWd85c9YJKUJzzJC",
  "key5": "541naV872ZXii8TnmoSVAAYdnwHoXZfLk7uihMmj9fH4K2gCPfeyd7VroQeNC64dyQcgjxWawoLUAW23g36QxCaa",
  "key6": "3qG9ARH8hnH1775n18C8JGTB8jL3xouU33HXEYRLHYtHFivBrg17zBgcosoqsj21idnm9krN3tawQt2NPiYMy4Zd",
  "key7": "ETjybwiEckW5ny9dDfs5pa5wjXEsuQmos5o3LBSPFSkWY8tx5FKE2FVgEKdkoZ2LQV9U7N4Q9nGSbUUHjAE3tpo",
  "key8": "dDthv5jQggC9ye2125L93WDrLia1zqVs5MJi6d3j6XTJgCJ4twqUompkacpUjutYpQvPBZ6EDoLTNJe6iKohisq",
  "key9": "2snzDqxdyE1xY7VnXChFQdJrvSFEdCmGMycJjYwt33vJEANqec3HxNKUkjPafrqS41X6RRDNKB88CP5LQJsPyyGK",
  "key10": "5X4y3SbW4Ftmf16kAecWh4nkr21k9L78XAmmFh7UY5sEqXmHgQ2hgHFwXdF5UzbyNJR9CUZfLsk9RjbDMfSANe7x",
  "key11": "5HCEiEzBATLxDSLBxoBHVrahMLnnYHqdJmbf57XUvDsPToGUgdDuADs5HEo7ZFS31f4w86Q3KqR5EfRUDT8QvVyp",
  "key12": "3cm6rheXPeT5SqQARZcU3qn5xwqXj6t91Krj9nEquzez8RyHJSWMvxcHP5wQQYcadtafU9MDCbu85XY2Ght3Vx3D",
  "key13": "4e1CKwvCxjazAQAymYsrnQFUENaKqyR8TKQyGjZswxhuDYgLSyQU9F2BNQoC35eXjWd2deFoHkjGk4w5cB38TY7",
  "key14": "gXBo4rtEmzSM6JH8FUgMh7TkbSioZNC6v1YDiuECMEpFejMVHMiFxZRMSLVWG3nQYypUnvMD73KfxR5e7J45y5t",
  "key15": "4nD1t8XA3zjCKJLBcveqMsoVu4usJTurYWDSN9zp1gM6XciAcx8jw56NucF7NvYWJKTZGCFSznKSBCH8gzfqWcM5",
  "key16": "2JeBUwbmPozwRxbpvworDnS7GiTnxRnY2wZ5bcjNNbp4QhuaUyYzS2FPxAdQrF1A9Qj7LYrpx7a92SrtNGiPkbZi",
  "key17": "fcU3HsLUtGphBpA1X2BpPZ3rL9Go6L5MBtqBhNtDR6mbmZkJRMw3Bi672z21REcv7jjxsid55J9z3XGTbAq4wdu",
  "key18": "3CCv8rDBTzgJDpyMTPHccpxB9QxvGYAygRv8Sx6urLyyAbQxYabtXU7vQ2QoDszVPwmSFUHrhiTvNLE5FUAwaC1i",
  "key19": "AQb14mSBDDa4TcNGJ1qi3WaYFjgZXdM4zCKBCkETrj2sHzr775pwkWwWtoxkX4VdHJJWW94uhYsQjPuQnbTMufd",
  "key20": "3KVx4Aq58gzXPcW7B56Wr5Q8RjtkcZABdTQT2S5MEtkxd6dPLZ5cJh4BBeegmiCLrXcdQC7FZWbkVX8dCtrUeRjT",
  "key21": "3n1Ynbr3zFVRnPbyyPrUMDpJtDgAe3vhjZdn2ntWif31AD3zt3qpdV87MPCEczPZkW3d7Cji5YuYErmAeG8HS7Ko",
  "key22": "327swwT7FYSSsuakHso9XLKiMcv92bD4LmRL9oaxK4iHe9G643LggeiYTqtd6xf1q1bVSa4TFAqJ9W35Pwp6sKKe",
  "key23": "yKqzWMbSaMmVbowgdXC22j5LaUJoyHJVCnUn4Lxb2Z7F7LremfUypYLyosZT1u7q2JsoihukX6f1dJxJrdK5REd",
  "key24": "ZdbadqMNb6LwKpoPZYJv4Sdg6xm1D7P37RyHwFSe4B2rJAX89wdPnBpWeUJBxFUkhXTn1tSZLbaQPqYWGujjtte",
  "key25": "3WnfYgD84UrJEy5LjK8QpzbzzF485Uj6PDBAcWzKHn4SgfeyY1atWTra8vLjPXmbidzWS1Fp8FUoKSTPAtDHWmNh",
  "key26": "5UQUbtWZHfNwAEkMFBH91Sa8kHadNGKkCyGaakstxLLjFvxeyUnRRbzkCzZFWRZxRws6cipr48Pq79s3vMA27Tq8",
  "key27": "5QkP2Wd7H1oG8SzVXcpbUezXAta8mrCM4P1rAbJPbYUr44boNvQnsVbno4UNgDJViWdx9wfMtffPNG861CMGuvt2",
  "key28": "5iYsCkCQMGvCz4o4C4PWCyPBAXshSjy2BecyGjii5qkBnkR5tAxLLjYT9CzuPCdJXcDQAUuUbCWHJdkU2KVRxbSF",
  "key29": "3B5wWcNmDaQa1eECdMqC8xMLkeiqnfyH3rUD1yMaYLxZ2ieWwXDimSSZvNSttQsy48XtJGCdu9cHsDxZNDp1pM6t",
  "key30": "2qeoS4amxEjnWuaZkpg6fbdJTTWivQ8N4oZufxvMMw8FRHb1ZfAZioTp5nKBsToYaFD9uygwnz14iehUcBkQhic4",
  "key31": "34aN9diEb42SzCptonv1sqxHyp2GvDWzkborJfX5URZkjfLbbfAWxwLpoqp9VZYXFrnXNtfTkiAy28zfpksf7N5f",
  "key32": "4onHPdDmJRcsLnASBvLpSczKaVnhadnMXzr9SvPtR7MmgzoiiofZWuRn1xGbMTGGhgY27BqLS9AU2LkuTm7mBfyJ",
  "key33": "4xmNmcTFBD7gQe8npeWxJg53mcibb1btMECEeaikvcMLN4VW1Q4ErBgA5JzFufzGH85bMEb1M6YqwyEHcRfs347h",
  "key34": "5qJCG2N5p5kZjw2NH8nwzPvaNBhPtJtYTfzeCSzxDmHjuADMPdfv86TiEER311fFNSwqxxd5LcMTbqfsu4JLXK4G",
  "key35": "61DByHhzLXFJ2gN6iwNJRsMPG3fgcFksDcbaozGGqpHuWfua23arX6KPKG9aHrZBKEPrWsgicqBN5S49ocK4QaW2",
  "key36": "4MemTTxMMYAf9oNoDAvUYka5NWkNLcZREmUQFBifqQueuQpsxQDNFs8BLykVA6WFwZkNcoCSj1hftADmggFba7Ex",
  "key37": "3NX1H4QJQyvtw7wQVwYvHAPBGJoRXBDnLMn59R9c2Gvtpiiz92eyBZqBF2AKiTTsjP1GtE7b6zxSRqFcaBG9jFAv",
  "key38": "iUooZLCB3FhrBe2yXaadzEETunjXgLrvVS8f3mn7X3Sr7XJetg2MMYC2J34y4SYTtVMUJb5BEgUmg4Y8nrYVS7o",
  "key39": "2TS4fHZTPQmieszArZzroyoLxCGEbTkLfo73VSwA4QnuRGZdUgk7WdGfKbYhzNQNaTzUZrcVLaAfKTg2x1Ke8U2K",
  "key40": "5CoW3dDhs7cp29G8XAugHLyYZtMJKeKNE1Rm4PgpTCebRfg1bSGns1L8hY8LBeGrdurJgDjXzLR4DKS8GHkxVQNW",
  "key41": "5aHJAr9aA52AL1uAsL9hhwKJ5Eycpxhs4GL1jS77YKCXJUPuS4PXHWk8briTwhF9ebo3XhWRBJ59xzu1ibZcByo2",
  "key42": "2MXVgkknkMpc8NTS2qZzuGPgHNLKCFMEVq7uLR8bET5nFhGMX2WkrcQbNaZezfWzZ3Hu8kyfGUD32WycuhQasF5P",
  "key43": "3oPjzGKEszLhW4cNxqccD8YTYKVGpKFPj9C6LWaK18QGXq24BCzTnjH1734MEnwK8SAmGxf8LWVcKoqm7DsB5N3f",
  "key44": "2NsdUZoZBnymuqFoAbhQoXgirfMEFTWftB2RL5TULAVhxeWKZn3KvLWAUqgsaECjTDTmPqha6Hf5Z5NgCJRKmUsp",
  "key45": "3UC7XEapCG6khfxFUEhZgm2e1rttbTLz7wCsczChrgdxofbUGXgMVyRyc7vMXzGkbDAmUAty51acfEecTmiaPRtX",
  "key46": "5EsLFmkmK4qiDuKHDQStA2SRjmkWJK8sQajzCs9f6DuxgT7mrbhHyqKYJfz95CyegPsEkv14fRMpvR4UXE8EmrvS",
  "key47": "3fZUbSJGSdmm4E8EQoHWHydhMaYzUK76Rhgc2rauTZ6RiPNppsvYennYpq4ixy9orEKr44cCEW74tDjNgLka8Le7"
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

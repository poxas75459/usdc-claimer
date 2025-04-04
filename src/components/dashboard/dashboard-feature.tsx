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
    "3bCVeeiUUu6FFJhAVnMo2XeEjAG1gd72Df8ejk4gmxBJHbs3vUk1BbUABLrQWxEwHivbrWNBSRTNqxCcVbjUUaoi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GibPbaYAw7XKxWgsWjbzatVNUNgMWTQQ48wjY3w6yAvWVHXLmD1Fn1odwvQBqtp3nxNHW1WHN997iijjaeZBiqx",
  "key1": "2YZ5JFGZ7XU5f13DCJr4vUmY4UCspC7LZUJDEw6dmkCBDG7PThPsrjkPMya82zTsgxKE6wmAXfrU4UJbCZoCP6Aw",
  "key2": "3SxF5rUD6aVuZMnGisAzz7vWsiGkE9bMkJaTdZPTzLnfWpeFjYxRnKNJ9oCugzsXWjgep5kW6KSVARAJiEv145yk",
  "key3": "2kZbYmx6yXs1kyJWETV4cX6QycFEU9ErMinFaivaCrcMcuy1TKeSykXs35HbyEQmboVQkeJCE9cYKTsQsNAicruK",
  "key4": "4RcYjvUdx3ag9XmWgUR7kTmHvCXzYN4gtTirHrWAe3y9Zd7hFtGwZZLcHRQ65XxrKsSueD84tXFZsz2ALLD5HvZ9",
  "key5": "LAPcs2Kj5K8iESB2zEtBCM1xnff5Q1vEc9zj7iKBzNGqrYTRDLuBBqv8gqqM2183F77zcwfkmEnGTRE4d1YEjBv",
  "key6": "wmQC7HZZFWCDvsBtsfUy25jHJrkPsNtTnepNB3qWcD776Ad5yJEQ3gzUQWVmD8wP9tbNLxtMRXGR7ENEXkHi5Gp",
  "key7": "3j8gaiWKVrdURdCaGnFYrmEhyEzP1QUyCS8ce7WYJzqCRnZf34izDUF76LMerGfwvdqz6ivF8e5PoZKbV9tV3MhP",
  "key8": "5h8jbQCZAUyHoCzT7Ej3dLQsLfA4hfv9VAmDDLRzqExBfTBAyjTVMJWNw8ZjcsGoh7dLCAbyBrip7XfVwhRFAFkf",
  "key9": "5sUxiRhruR5eQbf3jwyz7r1KKuoRgPRwJMCxjKkjvJda3fkWhx2egjzx4XQJvo9y8cVewjLJ9QrNYjKEDFmEQGqX",
  "key10": "5vEpNe73DiirfKvNkoTBsRzHYgwA4Y3DJq1hWjLzkhtPygPuP8r3mDPt66wxCj5FD4C8YeeiYFqKtD28SchGwVy9",
  "key11": "MYzT4o47iVzWNeth3NQBgpeTAYWRAtgkD1MV89BXtAZfa54u3EbFdWPDBHn63r26HFZ8cgRpQdQU1iPV1x9tU1C",
  "key12": "zkWZaqSXAZRU3uUfPKWh6ERwnPwXFsgsMCexrvsjYwP5m69cANJNo3HYt6pWrU5d8ViTRQWm6ZbSxKToG4VhbiS",
  "key13": "2DKWBq9iRKnxjvB928VkcW7ZfZjDwgLrqfk2ZSiRGfySsR3q86VJzQYUxgo2rssSeTcVFSGgFG75BWoX3SgsYXNd",
  "key14": "zrcT5Q5VUrtxXhp3C5HdFsebPvL546XZo1B1WiqGPhDnXU7p9Qquury5PuJpmTDqtf3EPcHWebD9cnmvBvPiku2",
  "key15": "3XDXvxAELogaTv6K3NDqihN5nqZac2WzorREZtzE8pHf1mkSPhaYKaxwRkJ4EK3veWyVXpRVXiWMWohv5LJ4hEPY",
  "key16": "qc5CZdZjn5KYs9rfdCFqvDxC9RE1rZuXhrZgUHMb8MrZfw1iF1mB69nVdPd5BEcRgWqsSG6zdyo65nDd8LsqPUG",
  "key17": "3YXjLg694BR2J2cSPH17YoZKmKD1ww7nH3bTbdLFYWgxHWVsvnvEb9NQjLfgYZbM8GyKdbwEWMm6HW8enAqa3Bjs",
  "key18": "5zQYZYmoAwYruowKibxPLJ7SxjvbzbUUR8q657BGPhhQMqShdvTs1vZaqEMCnxpwqjxsQHQqSQwWtukrWVtJTYTR",
  "key19": "2WTttpKqF9bzwNZS3erCAbYwwCGDKzKe2Y1rSdK9DPQVsKoD3wWbYpWkz1LwW9okHuZSr6zWjrZexYNtpofRVeFH",
  "key20": "25wRn8jRQvFkHMvy5A7q6wHJqdTCAmD4NH3gq4DJqjc8Go245quh5DHyEs8kmiBz3PzrDZyVYDoQYccCv3qx3jFn",
  "key21": "2ZE7zGKkjK6T2fFBXiJATWsWmgKonkfHwShUWtgELerDPm2Q3g6qw28XVnAm5yR3HHxj3ttKu5FvgagbA5TyRnMU",
  "key22": "48iwmNPBWuKmrySkxrek6oHbbu53Eh194YxBiSLLeTG2SxEs28Shf7BKJq8Wf9ZY2VjQR52B3AikNQdy9jETj2Xg",
  "key23": "4hkF97AdWyFkmkYAPLjoJVpLG1C1mH9bMktJMf2V7812CeA9ZRB82to989eoVNXzZHmp5BqprQr53DHqMDHnSHnq",
  "key24": "3dhzmfQKsT2YQtw5Dkd4jrHXPVdX8CdfTJiT4vXiVNcB8THBK8ePwvihNDwHShmrmpwJQAsEWVjXgBiJkXFpG6YU",
  "key25": "55uHwfnVYgHUqARbZF1ngZXQfbFDGQ1bc3651BGddoPpH1BbvDnnKZBYq67BxaiUaqykLxEBPbusfK6EGLuTNJqs",
  "key26": "3c91LubJT3qsmzZ6sUQe6rayryNT54vSfeG25rh5BfQL5bq3epTvRhBBueNUe2o5TwsFGH6fb9t8VFDgGjEHc246",
  "key27": "UKqkVhzknwehbAV3XkDGtjju63Z9ftHEGt35a4LjqM7CZcKyRq1oRJ2oyPfQPURbzuoKRia3G16nWUXFfVvV4Ka",
  "key28": "2xMMDvQuyJXHJUAvEoy3JdP4uHsonmPPLV6YACj1KfF85FzxLk646hrZPb4McJpMU6wt6JqwwVFQN9Hy2ngi9QU8",
  "key29": "2cB9kiC69NFwdXJUqKocoawPvcQDWo12BAEqKNkNM738enZJ9uvGKBjrGV5fV5Zz5GZaUmyoUAPGWWXwBD1PKM54",
  "key30": "4pdeTJcHDGRpgwAAysij8TMaEnGknEzyRTfyqVicNcVsoWSAXY2BD3urauHE5qqLR6p1b9cGBE6QukYsPRQBCRfL",
  "key31": "N8BpGBXUGnVAAE8czP8h4a8pLmGZMgFQNX1VsrKZV98Yfnx8meES2vWRhQGSUg9sq98ePAUNhq82xRtp1Vfujvu",
  "key32": "QoR9TtSEvSH7r8pkFBvFj3iRF3ytLxw75dsqw8dFsqRKMn56egYo9NqyZ4eiBTEbuN4tmHjXL4t1wBjZkPda3UM",
  "key33": "62r8rVirvVayduTsS1QdyNFFi1GV4RDxpv6m7XHAwxNch5nBmbcaGtLzLp4DaHvz67i8ejFeBmpuqxE6Lx68i1x5",
  "key34": "2eEFk5QwLX61bFXZY5osGtfS8AnUTbR147pXEsmhxYx7xJPnoSpt28XVwqoBoyQo58M8tuh8JgekeWgeN7siBApa"
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

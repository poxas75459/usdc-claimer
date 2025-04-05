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
    "AQnisGtLSoHUhDEVwBUmvuw8KUhGkVPCoVupbpGav8u2L5BZrgqfBTSMkMRCRFjPh3WGCSE1k9gD8JZdGhBUKvo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g7cWvuZzorFauXRonXdUXdBAhPjLjRdigYy7qGSpf9qxPDvtjjLGok7eoUEwCNuEuzbE8xRRyxzYGo7mTK7ZzmJ",
  "key1": "sh72t3EyxMtkSpJPQYHFL8heUbQBgKN2i4NLPnpF5geW7u7Vq49Q53rjN9CmHk2fmf9N96CMcUvKPkKaq5dVPxM",
  "key2": "4tgterxFeKRHxdCtDmgFm2qGHPshkoFQH4GyQDkpypdU2mNaAFKag8wsctw7gwVmuWuXdsRuqh6GJvCMR8eUxjNB",
  "key3": "4YtFa6C95qZRLt1b23Agnze1ttTNzuYGtrJqTYVGhu6VFuwX6bwEvETzMwR9ehuf7U6LmynF77poZUdM633HpVMD",
  "key4": "51Jbz2iM8bHhLXGgsB94PuJosjo5YH8Mx3dXe2NjNAaNEiHVfwcfKW8Bb8EiAMKBoe1NVjGAd21QjBbTTzV6SReQ",
  "key5": "3uynPMw6Ppquhy4rjg918Y9HnapdKL9z3xh4EGUTJFktJvaEY1qJwpzB3Nx7zdHe5GKYi4cGXUz3SafGbRp1BsEK",
  "key6": "3bcTDz7q6Q3xLhRXjCQBqy2qaSwABhLf4DV3UoDnKUR7fqQmVeM58tkYeFBqppGGQfSu9hXFcZxZP2c7Hmue2Pcz",
  "key7": "59AE86pNvE46jC7KLPJAW28aiR2W5h2E6sCJ77jVKR5h2RGmjyycbdY3nR3YuL4VPXZPqCm3Ekpo6FZENMF4KSy5",
  "key8": "iEGfS3otFL5uogiWuLBxCzpxWbJAgq1N8XxS4v8dcZwFYUebcVAJ6vFgVQpiwCb6vmBL6WHnrD8KcLGzxFK28bb",
  "key9": "5La45gmWCFeJNUEUAMy9pz8nY6dUvdQrd58sKqXEie1EtsLgYrYRDT4tsqMMV592SXCkSg99MXNEcvxxd26gUySR",
  "key10": "42mhnfEProjvnqL1S87C4Z6ekvbmXC8A7gFPwA2EGpWanfQzdWw74ZegwdY49BGfNtLEwjEbuPvDgRUiwS715BKT",
  "key11": "3aHj8bvcbPJmP3o2pbFmHhJbwFsRhoCbFtSDyJ1CoatHEsRFa5g56KUk4hRh5PiNDcoBveVTuhrPn4A1GMKKSLY5",
  "key12": "5qPRJHe2PNzLKbsXut4c6bEjsq4HemJWMMX5kXUtnqutDTVeqJiU9grs5LJaL8i1RpdfyqybTt8upYZ7BwKdHoFP",
  "key13": "LfqmhW52MWJrktW2yk8jShwG5J8E8H3kC5YtfWhy6pKcuUZZLqcdFHxi93hMm2pnefbXyRJs4dQyGD57YWQjBak",
  "key14": "5YP3DxYDLN66mAkHQz1zTGNgNSA1HPgp2DRVhKtdntZkod2t1W34uNJ2MeAWGV7426Kz1osFGXoGkGCzsxCsE3xH",
  "key15": "9ef9gzH2718Bm54zYb2h5ivxZBpxsNnXcGsLUFaSekrFtp4cG69gh41svas8sBesK3PG9Xi26cFnZ9XsqGf61tn",
  "key16": "2HgDC9zW1odTeex4pYStr4MrUCU23xrjo64yFkueapNJicc4nS5XpiqbREpto3p3KtjXQCvhrHFs5D2GQb7cWHPp",
  "key17": "Ec8Xtz7iPDKTmmGpKg5ehsNHSWRjqZDEcf2Wfdp8eJj6yNKeo6oPnhqvjhudARSLpbSzn7EU31HMuxW3Ko7hKhE",
  "key18": "4CxRgMAn3WEVDyWozw5pT6ZkfHGEwR6mY8bzADq41cpXErfF1TonP23PkiHXe1yZHiYd2fYdMAeLHjdXkXtK6Rif",
  "key19": "55DL43NrVYenAnYdFmKMeCgAgcwmqdnZGTySx8MHCWZo2i3bDXDgpEeycHscHu21FDryBbMSFZordjPuN1Pkeq4G",
  "key20": "2Dmv4JgLCz9BvQ1nmgT1kLSNhppoyzhP1AcLJ9bUDErEQZexMEzJS73srvibDHxksaCy1NQQBsEVE3xzcZpHHgGC",
  "key21": "2qKpoiknzhbE2AUWGtorvAvZKzQnMgrr4qnF1LGoVjCopEfoKhX5PjhKd6wYnNBt2nN2vmTYBiPjBnmwxvzbwsGg",
  "key22": "5zBZi7HRq7uH15SfGDCqLETndHvgVUR9eHAERjFUZaHjYiobQH3zmDcRh9gCGbC6fEJFcxCKauA2W3FWar4x5wAy",
  "key23": "5KnrdBwpTtawsEa6K5ZyQCCGpxvr8tZeoqXjH4woaPoeeSXDsAKQ6PEfv4CEpKHVqn4BPxpZA5kALsJZ1DX6xLnh",
  "key24": "634Vj5vzrgk7eq4xLjbNqyMS1ZHv5u5S1tWNysFuGf5c7JEgmiwouaqJV9UzEVtKhSZx92M63RyCC75FNCMhUjpe",
  "key25": "2Fmc47uupzY8uDBh95PnAHdgerXdNnfpnG7QiTc3ovyVh3ersTH7AodNQARWi4DxPGSq1Um11nwKDFU61oMFqxwk",
  "key26": "3MBBy1FUvrtQmMDY6xjocoXjiJ7ax71xULEtfq6yHpYiknZ6voh8FTjREBxGoqXZXH43Ddp946cdRvh5jeALy5Rp",
  "key27": "hhCY9TcrMAhE5wZfN5nrifSYtRntp4gVepGVKim7N8vsyzArsqMQkzxGg8soLzfuQCzkLqgmjmFu53EUYU8627L",
  "key28": "CQJNk9SgpdU2uww1Ta7N6M23irTJqty8RFdTFCJN7npwVVkYh62e8NxLsoUMAjtCbgsMDoZ4V3PQ11BDG1iJff9",
  "key29": "4b1tdYEgVm6tgHQsrMeQeKu2Uog8d5nCUpNTEyz1x4BBGWgBbLrExo3Yz8UjRtQZpTbcChAfxbpKC45Y3W8AHCxM",
  "key30": "65pQKpQVgdvuMwPWQFP2n1ohcRYvDKcmMjQVkP1ZTQ9kpepEYfmyfLm7Ryu81KbYwJ5unJ9hiNw7ppnuBV6fkvG6",
  "key31": "3oDrXbUAqbMHJD2yjwfmyrPC7kcBA55jSXqFef52xWPW6kt5vvKybBGDkgjMm8TmgnkX5t1kYgPHNBAhBpbZsCjB",
  "key32": "2E1qHRmAMtzxsbZbkckNYYLKEgNpuXgB1kagUvZkuyFVHFd38TgdAayhQvBbmAVLXhDhqcJHHhyXRo89TKQckr76",
  "key33": "4SHqd6u1Vb2e3ZcYNU2eQnTJPs3Mo8s4u51VAc3Qcm2Y3CQCkSrn5XpBmrrkUFhTGnYQQBiu8Lc1kYinnJwTtxSH",
  "key34": "NNoWjjKKP4jYL4ydp9wU5mEdErE551nS6ppxF7bvjPjWamhh2CkdCJSv8qsZtbPTZ1Z3caX8twMVEQckLPDuwBq",
  "key35": "52WADQE9FbQogvHZ3xNBF1Z9tZuaa3WCjuZGJeFGJ5rKpM52J6J2UD8oBJTQMWNfp2odHwQx2mCsGNwx8j17MAoE",
  "key36": "4jR3NHrAQ1uREf7YvZoFsdJ2kNDU4H5zVbNPizf4HFCSXfp7gKd34YVvv2aejHLtz86HQrswaRHEAX7tqCEGuvXq",
  "key37": "3MKbup5Ty6JWpGP3m7kz3spzHoUDNsgTRQAJrBoUJxQjSxy9BTASFvNzN32HbEycz12PnYNz7E5WvYdNAWuxGEy3",
  "key38": "5uz6SAXtygrwjufBeBjhNoVmGudRQJmEmKppGAR2DQbqGtEFg9xWFKBx9rRYu84nawYTZUtRKb9L3h1FpBvBP2en",
  "key39": "3XJaUJ2NWCn2sUjE8rUwnq3b86ECXjybzxicAnu3p4UTp9VvyHAxmziqHPP22uBaF7qgHXhSS82GhN8EksBD57ea",
  "key40": "5FNFma66NUm17GjHA8nJ7bGJGprxrVMzZvNREWmduF9WHjgADAZ4VhjhxuWrxnNSK4xtSxfLHb9mqihccDR3MLpF",
  "key41": "38H4oDy3NTjDQpSvvPaeg7p351ztt556qJxFfBRheux5ebnvxcmNvUyVzjiuJ5fnCPWFVW6arPw8GWR8FJeg91ar",
  "key42": "3ore77BKRAbA28XrzAYUH7tQTgBQc2c5sCg1oPcgRCv6TF3r4bLhEdPk3kHGWcSreXxHnTLcAwW191jc4FTbfT1q",
  "key43": "Zy2r7axe5b46QKkFFgV7VnEkH4HTvPMJYd53zhLrVf85vaoWEoZtybtzjQacdc91q2nbRRKmnVHpJPKgq9cwZjJ",
  "key44": "66WCSFzfAoPhLQ327XX7BfVfrwQNqiY93pGdzPkc6zouYo1VR3aTkD1QKDjuEMvBcZUrxoWApZXKZsjHvb6SC249",
  "key45": "4k3k4j98bDSYxCnqYk4Y9in1WkgscaGtqPrfCvXNn1Q95GGJfhV8h28pXSC3A45ocV1CJRqChcqFPxRHLHGgfAAp",
  "key46": "2mx6R8FijtH7iG7QBoNPseidtEYaTVyB1iRVrivUfiVcbfhEzPk7KxtYvVRYfweWwSRx1NRWuurRawShhZrcKSfy",
  "key47": "2eyd1L5DNLmXDUHwFxf55vHMba8y8gYz7wq9RgSk9AEWU3HUnzSE113G5csTUEqd5o6K8cE4nvoa3bu3ebGuNenX",
  "key48": "53uzwKsij5tMW8sC55hcUn2Qbb2pSe7R6NcuUQv77oF5k4TDgnKtwzb4eckEtt234NVGT6M8ZUqQG1GcyKH5xBv1",
  "key49": "4WK7as3ySFxhPSNtD9Zqqp4VaCyjoBSt36hg2mATVkhoKiKBdhHpCDEpmkKFNdtMC7u8ChqC6ELp95eT7jazN41o"
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

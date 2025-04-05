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
    "3fuQrnX11R3vc4nJZ9oRaT6BJJGEdy71w6nv82NESZtCHafLVaWE5WT5vCz33wmom3qQSrEkA3woTy1ShpLPTyHP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ULD2evcJxWo3M1z2wQ1gX1zStj7SEPBxUTBwyHELRxZi7iN7yP47L1DGAnECLtM7n9aXq3PckUFyDPsMZTHRjB2",
  "key1": "4RjsRa1Dt6Dd2pdbQeXwbtF6qGxHACpRWWB7gY1NaUFpUR1LY4qDAdQmLEyG86GjEehuEDPNrJPaTXZ4m3ASJjb2",
  "key2": "adn7rqVTTC7AEqPHhzVGFSfkUoFYihUJ5bEHBLeKkgw4CwesorHiEBHC9jw9FgJSCZURFRKJ5RvwZEuZxk97HkD",
  "key3": "eW7iz6JSXf46w6ghPTBiQJbQeN4nuEG2AJVj4DumZdsip1p2qv9Ed9LgmHNW2fJygmpA5PHL6N8HWYbsAToqkXY",
  "key4": "5R2MW8yWW61fmXrb3axZfSLTWoAeQXd8cebqE5jF5Zpb1gogcUkfGtxT6AMmuRSwBsuYwFHhDCGo9Ut2GFiQYcdw",
  "key5": "3CnczKkxwLZcUiAQGKNi3QHVtA5MMMr1rAB5iHz4c1qbeVZSBz41YZZJxPREYQ1jJjxhgY7DtaV9eRA372CfJuJx",
  "key6": "2vLbi3bfKkDAMoTMRFk5UV89f8dKR8bf2J5ots8t3emW7pNDAxhPNRAsGo4tm3NVKvwh2Pcgr81nF5unMV7fqskH",
  "key7": "Y7u8A2MyUiAdHMQpp4CQGR7Vxbq8JpPvJRRtZnfwoZrFtGwBHKd3doUPiWmS2vmHGbgNrmp3Pc2z8DwSJWeqCvX",
  "key8": "2Cckp6Tx1JWiddv9eUVE9UFRMBHcxAQJYNnia3CfHeQ6qnAodMXNmaDapbjqeRzbid629NcFTpHFUX3WbhuqfBXo",
  "key9": "2MrTuB4ejS1eG2PcrXtLCZGbRJym5qU2N3xptUgKseUSyqnEet1L37SJsZcqsL4ihTi9JRLB7fj8Ty6CJyB3w1U3",
  "key10": "3pJiE54JYrES2em4q36jP3ZxYN9HmsAeqYfr9Nh5VE1zS8TEvTWHGUqhAhYvDde9MMwJTb6aZg11G1Uh1GqKrc6L",
  "key11": "4ZZQqRwFCjLEnY3vVEMwNoevSPF3qV3p6AXnL2HUSxkPNLvGApB4MTts87GefrhLsmGRr72W1R1Vjw9WS8pDF8vi",
  "key12": "2NsTP3VUAvGbTe2yMcmsfwjXqTVw7T7mn6PBP4GRvgkrydEmm2CWnAVzLxZhovmyKk5oX1X91pDT57tMtW5YqjDd",
  "key13": "3i3mxE8B4MT9aNtJHEUkLtSqYxyXhAFsTM5Q89XgXFKRjV98uB46MyrVQ5MX15f4yoZFQ4psLezUjdf4XqQh7guw",
  "key14": "2YRS7EqmmY1XCUumHTe83WrpNgw8pLWioed6TzPKSA6zqUt753BrPiisGQYi9Z5rktDuYN13R6UxRrxLhv1xmyjD",
  "key15": "3j9DW8E4Bytcn5uyQ2fvj55nQHjV5rfx33D5xkLfTaSkxqq7hUGuJcQKojL9w1ZZDUt5oaEXFrPxRU5Z4VPxr9mb",
  "key16": "5F6C5nTcmV4ZPYpPBqSgTjbgYfy9EMJa3WBV5o3YsvBXXEChCni872f4ACLNzgAf4fpJg98Xrbw4NPCcVBcVwPqm",
  "key17": "4cJE3VXpYugcpQVcMFX52wjTFMnowMLx61C1kbFXfRpk1KfmYxZMQQqnaCehKXWn1bvk94H4FeoLNYQ4JQsVxgjx",
  "key18": "eW4xusfvwVChTYaKMQUyaD1fJ6J645dZ4N68ZyX4trQX9sc7q3dcUSCKDC7FziHQHUNgeka93Y2A23q1hQfnukM",
  "key19": "66bBiMN2NsKFQFMLAyz6pWVyabH8cYYcEbZ3ZVdJK74ZcKwiDHk5R81KBL2gNxkB1HvTzWr635bVr1eVybFXQrxT",
  "key20": "3BZ17TRDbBz1nopjJXrs4Uekan7TXqexFYADbtL1puw9DyfQEQzbvZ6hHwhE3KToujYRvLGKTjLTGy4dmG5g5QzG",
  "key21": "2fetmoSww9JeDGAYdPEww68uus27rzvymPVBPuq7x8gvY46qL3SfsUK5nhiTWnz6p7GwzdhTiM7TWcE7xS1MMwWE",
  "key22": "5gQHiv2SV4QWCyYPhsv9vHe5FBd7kvHjpobfvgjQhUA8JtUUzyWG1gi18RVAfCWqjm69vV1kCo3jV58rpjdUi1Qr",
  "key23": "2rXVqqbcj8Z9vHp43nFabt8K4HvWqJw4oLZSbvvW9fbWgZNbC88etYtPL87tKvcZSVkL2eK8PgesEnEyNe399hhm",
  "key24": "5NEKSTPoGNkJHLnjBwmQpUBziDvbWwqLP6SfFCtKWeoZHN8SAiBgvsfKzjPkPe4TSRFoFmqjthHBhpftZ9UD42dp",
  "key25": "5etHF2MbvGqRRHYUt4EUEWv4BJKP2Uj2fDwq9ABagB3rfkGEVeWzzaL7rpJ8PMzRBHar4gzSeVjwayCbbTU58XEB",
  "key26": "3TBETMJ6EhGWf1xVykS63JBjSuWfpM6B1FSgSsWFwKSGeckBdpJaBPMnAt4fCHJ9s9UoLSVSTMfsajFfChZuUhMX",
  "key27": "7LSz7inaUVTF8sJhsMre1B8F1tHL6uiFXsvBxnjpDQskGDENQMDAZKKujYCSjkWL5HsCG5zFnyBcwnaLf9o49uA",
  "key28": "4YYJkRPrEvW9XxieC838YoGWh7wZg4PbbJoJSjEE8ii5iuHny5m2VTvFpeXQ7HpUi7eNnUa8XFJE2bd2DbWfCrBn",
  "key29": "29Ts72hWLYEn1aMNsR8T4vtemuT5McS4UZeAmLhHDT9L61D6Mz9D1Y1SvxvQStZPyH2iALGtCtmC5x4BLbfewrk1",
  "key30": "485kvwAsN2QMBeLbwK4FddaHdsJRXbZ2WRbkCzFuHx1HgyFYjQmhEBsqCGzAeNqSW4CmxwBUohYc7LDMMSy7Rg9f",
  "key31": "3AyhTtyonbpCitDk32KzNq1zCCpKKsPkuKCtNdVBLCcDsufo4uuUL8RZnGsuf1frJBGFym785ihEjMxccwrcsL9B",
  "key32": "4tkHkvj6Vxn3qzYJbuwk1ZAS4bRxxedbTHLfUMppRBACzMqH5PoMG6j7qmcYMZZoZxU3d5Q9qyUbw7wgpzk37Pgx",
  "key33": "5VZUEqsJgZGu3An5D4jBS7mAbQvbk3hXLu4bZ3DonGwwfYC5WBF87dL68uZH5ckzBzoVrGYcuVWG1K1njuheZmUH",
  "key34": "22jbeiQ4AqomH8r719pqy7zuYQxR8BsBTmg1NEoAATZpZGvgSwzucb3tdgACsnhQarm3Dbr3HUnimTS69rHJLjtn",
  "key35": "64kcsyCXxXr8aPCCjpSoQk1J1oZEQjQj14joatz9MAdeWb7cjiDShpCVjbMGW3F1zQJq13oxJ6oiePTJThaHhn3m",
  "key36": "4aPibTUJAfTtV7Rh59A9HLK4Rznz821j9S6FviXj6C53yZ4FujW1MrJu2pAwfWn2wUQ7Ue21H7Mcei9VFM6jp4Sx",
  "key37": "2n42V3AfduGrsMduzir3vE2Xu8m2LYaGTgPoRMjp54zrHn6uU6ACAYLPw44Ljp2CGWbe8NM6rX99MvkzWD59mcJf",
  "key38": "4DCjnPomUw7TbgnoACni6qdziHEij13HJ6pJsQSQdRz5GPVuMGVGjMu1iEfwPCmW9zUKHhVkAZUJGRhZNmLQQEww",
  "key39": "9mvCRf48QayAPC8fs4qAR5xSbiBAezfits5HH5zN3PwM3UG9Y7qJ3SKbjUhx8RvuegDji4vE6tqbXBM5BjViMKf",
  "key40": "hkFZpVGeqVnU1DL6gz1XD7LW2vzioSftkzKjhJrdaw8zpMr4MwMhLVweCrsp3PrpA9Agw9HUmqnQQr41LM35YsG",
  "key41": "5tu4VuKYMYgJBLTHhRLnGJ4qyuQu1NrRAtZRQyC94nYc56YqKhsKVugFTpfWJG1wvEwdPvUSPyGwgnDNFiY3jMp7",
  "key42": "21amdyJig1J6fek4gJRTGKLDKgW1XFcayTACz5T1ku1DZvr6ndhorAbbf5jjN51KFoo2eN49czdeY8zhviHn2dDs",
  "key43": "9kXu9y8ufqcykj3iFNN6cH1QcudY1EKkF7XVJAuGDwy3mQaUWXHMtPUQ6h8LrxR2pzq7m2SydCqQ7xebavnGbbD",
  "key44": "YUW5iVstnUJ42puBpXWydv5fqGZZDjeQ1JMht7DD3dPn2PuSgECpPdJpQAHma7CJfyVAg3Vsu5Pk5x8Vh1kxCJq",
  "key45": "23vjhB11S8rMhQhu8zTsFP1mdE7hKuDg9Gpu9iDdE4XYvPhu5RzNkBQ1CSceqCvrQXxgci1EBVKV5do1Jot9Nrjy",
  "key46": "2UkbfkqbnbpQ9BNqgYLgtaK4VNhJauiY1yikSScuQScdkXp7Kb18tAJq3miwXmGaWiY2YxoLLzhNajdzjXjppKng",
  "key47": "42ySyryBA85cGCXNLAErAGehbtTaP2Wk9sZtsBewh4ahiBkWxDVwjLaQAzTc3dtQfmU8JqHzoNWsZfC4Bob1bADs",
  "key48": "4RC3Ck9KEhGB9uGQgFbst5mtiJPxSZNhDXEfV3HrRW88D6ByjsS7mekAiMmB6PfJ8ymxmq6p5Rjb5J2Gb3SqVDM9",
  "key49": "3653TxYszUPN7ZXHUQo8CYfPdxCa2ocZncqEnDXVDAAistke225Cmt4uxVWhgYs8mtthtN9xpaNf9EJbDWogKbZ1"
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

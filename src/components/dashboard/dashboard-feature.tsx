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
    "3XzogDRw3d3q18Nv1kqbmAvJfKS8R6PidLjA9uLTE33tuJQsRqFCcmRkT6TqWfx4xfvNnd25Wfi31Dymxu7uy4xT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NN5sC8kuuVGc4BRusch9Svh8FYo9DNT1zopoAMeFBZfchGjqNj6iPnfPB158YdNJ3nW49kNg892yWWPtsgPg79Z",
  "key1": "oADkGgoynDFYC998EFJchkdx6hJwyLVWxmZxAxsto1aXkbsnEMYpsP8N5csKLTMpjVeHg1n3nShHibLc5rFU2Lo",
  "key2": "41MrqYgGbtYwXsjr7jEv7ry5Jk2v1ZjAu5hZccFXSWeJPaLSzakkcCynauYuWoYDa5D9Dcn8fDemztDAxACWz2jZ",
  "key3": "61brmonCHrHJWU99kQmK8nmenLE7uNLVDxXESueUXK6DRNvkw85uL1E95K4vqavXpCpeYSG6b8ANXqwLJup2RxHa",
  "key4": "poeXbb8gCkDnF9pVyBJQEiQxs6sDPcW9dL6AJvYvvPt9u9Nm3y5XS21rSYkYcvB9ax3adqcRQSx9V3yPrrZfg4a",
  "key5": "5ryD1WtD8aaWt6jpQzfAvjnYx5LqfU8WdmgRGQFqsWbTkH6iewFN6BcghPW2kQTBMdTr2QsDwUdSnRbJLFfe5JFu",
  "key6": "3A78ysD53aYsQsjfNq12p1v2jALRqVxcN4ADumJXSVz6MivAviovHhe8NHqpCptuxLuNq8B1eKCYUQExS2YoFbNq",
  "key7": "5SWr3sakQCkPhKj3S6buBoC5JrWs9mR1ySs5VeBxvHJykkU7VaWYzaP6iF51GS1aji98fawWYtyctxpnL15fLniw",
  "key8": "EcUJAUQGVjPK4b8xSx4wR5madbV9MNWGQCyvetixoYxayC9DoCHGwDnvnN1gb1yS6A2kLY8d7opwfZ5b3dpKvQE",
  "key9": "41WH2g8yYSBYtpzWuVSsdZBuUXrJkEwYgnjkgYKMiuTJZE6BgT5kAAFtBSmXQYBZJkmqQnTQ9TSELZJHuc88tz3v",
  "key10": "4niCu3bNifMqSySuTtYSPoZXtE7oUx5o2gzB6jRpp3bsEZPU7mjMgLmFzWTGZxDWJ2cMJuTKEuu53NypPwmpzeRN",
  "key11": "4wWTdsvH2qo6paKEUAHberHXpTwrwsziLSoyTXXQybesPzcp2Hka3W2SmctvPXVJoa1NP8tuyFKc73oPw4nwF2JH",
  "key12": "5zcrZaSemoYaD4agBw1UaWkXyAtPadMuMPzouXytrb8kEaEZGXzQ3URpDm1uUHptTSubUcfh8FQ1dxp5ZGPJEFwz",
  "key13": "3gMn9AX6zRRD65pv2LenkTrEsBhGg82Mcmt3ukFcJ3d1HHqyUnr3R14aRqvZkvW1WWADKqmcFyZbTyfgahfg2QaC",
  "key14": "5WxbqGgZ4VC95PJ14i1auHd2yS9qKuUP9NWuAAPxBsxS93Vz3JyVe7t8TdspGXXJw98dj5Ue6FzF5gEbBuqvQZ9V",
  "key15": "4quCUmP3R7uLyFkMFpbFhcKBLHJxq7Nz1PNP9rYsGTGxB8yJPcWANz7Xim3cN8ysqAmzSSomhKDrh9HZ9ViohNoF",
  "key16": "53iK2iTWJyJM6RassyZr6gkJropWSA2ZoaVZiZZbqjAr66npxZovLMBT1BiazM8mxL6gzTCec35H6syp1qTYsXSA",
  "key17": "hn2XBFB4VjG6Hjhepawa2yffNgc8ScsqvoFxCsCxWzTyK3qfiB18pReXJK3HSL76UT1KNF27iBFvn5Qb6eFtSYf",
  "key18": "xQSufa9M9HDb2WCCTUApLYvZRW8bvvFWh9BK8f1Cj2rcTF7pBZEpzME3kNnZ8MRRi75EmoUhEtHCMvcWwNzcRS7",
  "key19": "46mnkVkusbQLiXDHAj29UgTU5UDRQNsHmZiPC75GB95sUGnHsB1Bj1p75nakEXFvVBjfzvxEC3SPuBpp2kASvqBX",
  "key20": "4569xZopNi4zAbEeq1xXfcGsyWcSAgWsJ4PdNGB6SLCsQQs9j7wAd1L7fgBYwGm6twh247phMPw5omPH1ms6Kt4B",
  "key21": "AwFUVb42iwNkyAV3qZJvqfZoxXZAvonMoXguxbnoi6hNNCm6N3krGaowfMeTBYoFqTadP9MrYBmGEtR5p5hMjbs",
  "key22": "2S2azg7hWj7u1URgEZS97e2BLFbKqyTvWKx26VJdZ5WhpLb3x1Gvtty8P9DT55KJL9nb22fzbHsktGNkNy7RCVjX",
  "key23": "4bb2XqbUbb3xivmfNmMrnF1iYpLVCjKMpjQyY5TRWH1ZJTR8MBU7dVmRVtMhvT3erHkM6MMK9afVTDxGcttmF2R7",
  "key24": "Mfxp3FnptSaY8jbi7C24pJkFH44AwzEwDKfWFz5AsxapcgbzYWzkHeoWMEgBDhki9hD9N7eidPnAyiN7qz9g7Ne",
  "key25": "3J6cn46m4ygDHGJKrQwhLoMSSib8nkSg8oJc2BF1to5jtoC6jssNgXJgCbsDF2dchiWAy9yxau9JAuzyj1Rx5HPX",
  "key26": "21roF5ZeQFJyHEtrYP5ivg788WxFWNWt9P6j7kgj7dVhsRygeJfjUS7xhHSFcRjaYnu6t4FRepjQaiDz6Yy5y8b4",
  "key27": "3xCfnKhupnc8uUi7qrBiscsgn8pGwaaTcFK1ykBQqAz6rY8CfpFLgbLnC9shRTfHBWs9qyook3StgF4cxWYy64ZL",
  "key28": "BpDchZLQSLQvnz9nzvpPqVmySWBttRhp7fHYmVrnXauZa477Ejs9sYCx2v5ggvZJruYZFF6bnvsA7Q5EqGAtmyU",
  "key29": "56P3E7dPp9eTmGkJbhoPBsW63SFPRiiQuaZdqkdEwWSKKNpzzr74Fisnah9e7GmFn3wsY6XaJNWLkfvDoao3JffA",
  "key30": "ok9q9Z6av6c3kn2aqWvMLT7ovyxJyLv7enVR6K8xup8rLtmcKvqYYPN5ZyAMKPEv5PK5W6eeRyBt4dUDDTLsS5w",
  "key31": "5vDXTLavGkUD16HFku5encpa2kCmZQe7LEGuqV2hJze81iQjxndsT8tkCcTWWUXjZTj9pMtuYRndYpkrXVHji5B2",
  "key32": "23XVeh2KJN5oBM84RWAQkThFco4xV5qAEY5tG37Lqi4DXSgKBfTGvGo8dqn4w4Mjvj9A2S13uUUU1A5vb1uetRFa",
  "key33": "TPTbjLTx8d8BxFGUktukDqu9p6R2AGXMTUd8yxz5wWBSPagTe6bNAbZSZLK3dCKxqHazFMbmSmaq8D9cxakeNDn",
  "key34": "4qfdubwNgNestRjKjof1KnxNcW6iFMdLr95PeqTqXqekgRYKJGupaxTRrXfeUAHiH7GQJdY6masCEykS5tinQNDJ",
  "key35": "3eFC4PjGVgSbuzkuvPn957zwaqGh7R7RxBPpA8yDuNtP2nKrgts58SpceqBBwJiwKHubHpF674Wr6WQRTdtktFHZ",
  "key36": "4pNbRtPL9Jv3M6duQSzxs4kjZFzcYW98SzdYX5qak5XDvA6ozG9YcYU7e1pJbucAwfgnajGsmwyhqfkJHCohHjVQ",
  "key37": "5vQUEmTvbiEFvsypJGPqzUzH7mdo5KvMGfJvCQLuyN1VggR8MPYUkJPEoJTmhJQQajc4RZv2bYsjSsDT2Bctc9jk",
  "key38": "25LcK3mP35b2Wb3k8MSGKH3RxPbTJayXMpVXKFJdfUeDYrcyYSwpLZTpKAvJgBqxqQqgKKGbMKnCinVUmLZG9qm6",
  "key39": "4AXn1jZEKAmLBubfs6V4NmZ3SejoQkAtuNAjmGPMfncLFALWqzzEumot5PWX9tUMdjg91Tqk2r8PBE2DU2NT6uwJ",
  "key40": "43u31Qugc8xgVXHjw3DANZV5pFN5T1xwGBFn25JX7rsEkp27BxWLfyPHuikLbsM7NPCb55vh7VxF3Vj5XbNHWxj2",
  "key41": "3mrJLYpaQy9X9LwpoAPNbwnFowLHro8JyYFgctdgPyMcGWxgzyr5J8Q7JYHy96DGsUFwZiEmpadotArLnxNaQb1D",
  "key42": "3PFMJz6NyEnHE9cTMkE7Bz41u6YdDwG3Rt1kWZdhJhxR3b4GN5px7pZ2aJ7eDjkSXDe2Bz2SYzKc2omfNYkG1HXr",
  "key43": "2PxbYiqU5sB7Zu4RmPphhwgRg2ZhB54oKp7YqJBbXNBTnNbibrUtBPLzXux5aGzsMeNA2efupeMFVFNgQKNvDt2Q",
  "key44": "Y33qCjQSmh4YuvcfsJ1QAMmf1AgvePwGqtpc25q5S9FHF1hF5HyF9WXbmFN31hsky2U9rrkZkcsj241L8NkdF49",
  "key45": "43Tj9ZfJX3L8KgNeZvHQRExsUnhZeNX7JCFhXzofUJAjmHDyyT2gBc5KEMHUfqinEVx242wuagkeK18MfvywAhzW",
  "key46": "5VNBUVzo4RLcd6DdinoGJRKWvHdPHsiTJxPn9YBP2ydSPqSUtX7KfdnYdf3HeHrhcFS757U1RnhXVbVmsiUnTdAQ",
  "key47": "2nFtVQxQ8teHuaGt3Hu5eTHVUmwV9mTQ88RohV8hFnZZ1NweGrgKwexaDRNh5MyZvBeJ3EqDSYiwQa2ZWhTdL53Y"
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

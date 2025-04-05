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
    "5BTAGMQQauMw9CKhbDG26dgqMdQyiVyifEUX53vvBe2dmBdU2rddLqmGwWNimkGhJtXBDxD26L8arKLwjErGVrdC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HENkkPBx6FQR6juaSA9AXY455ecV6YPBTH1Y7xSq62ERTbUgMwVcTbn1CiiFE8XfXtQ4mX6wWbyyXSuy3pgxhvB",
  "key1": "43e383mhGcjm62EGwmrxrAiS8dshW3AzmhYikESwkCypp7baFo1mvcbe5jsP89mpSQjTi8UCsXGcfqRxiHM7W4E6",
  "key2": "4zGJY83pFbdsjsJERfGzfSmRNxPinRP2hmU38w1AYUZjJ6tkckJv6CFJimz33DPGsnJPVLvSQELWRZ6BRxsLhcCy",
  "key3": "2DUkvFDvdHeokQA4ppPktPBQCRp8Wbni6kawaZ9eaSPUsL12znQGdvfd5qfRnKkktWHVerFwMouaiCmY4zorWzz5",
  "key4": "5y7tHA1Q4oh1RXcerrWrnEPGTouQXqzbxM4ZdCSNagF63AGZxkDw7T1ssV4DuUc2TVo75ECCc2BtCoWt1LLc3rP3",
  "key5": "3wfmDbQBPVFibdPsjpD6WJ8cc4QTwh7C7fXaM6q6gxvZSBE62a1f2ZKMmLSyv2Aqz1GR2GHkK8CQ9vEamSparNC9",
  "key6": "3tjqC6ybhRMnL7VcQpGv89XfWN3gtUNGudwZZXNpUbQpwkreN67Y3ii8G7S7h1LAZd8cwnDxrsHAQLU3TRAvJRud",
  "key7": "56XTv9y8gN7RAyP7r4fi5cD21avAQ93SB9BcbcADqKxHHEoo6w1XFJq7AwpQHA7MJi9b6eSdQBruAGDTpTQykjuN",
  "key8": "5Da2k5bt3b2SLBZtj37yV71QpA1dFqzHstqozkwqkCMw4Y7XLaNGkbPto44rBRtWwPJJpKWSRDNCsj5Lgf2J4AKP",
  "key9": "5PN37mbfWP4dyU2Zd1qMtHAcKNBZEHbVBAXdiR57nUMT1Z4tDAgKwdW7Fh1JHvAx8CxeQFtJTxBupwHKuGhwcE7E",
  "key10": "5VREKaV38Q2hgDz6uPzwryPELqXBJMvxZdGmnCP6BYbePyjpfHETHzrUg3q9CcH2WXQdyJJAgo7cqBRgWTj4snbn",
  "key11": "3EB6BWeWCwvfE7uTX5iHERjudiinsVfDMg7gojEgFhFWLv9pWriCCDFAxFW5QvYJN7DmWLMUHXAR9uDnVnriGKnz",
  "key12": "2WoGbtcmdwnLNhWMXhmzCAWWx5iRfUQmmDhnJkctUDtvxcmzqABKuUQiYvrSzpYCjiwikHBQfKaD24C74MNPqKE5",
  "key13": "2mEPohMKssRdvedMR7698iJDtMfBG8sv7GMh6BeSb8wA8m3B41pgDuza8dYacGJKrXqzS1WKuPT1FSijn5Pots6h",
  "key14": "aKZ9f4Ab5mrCrTkWFQuw5x2rWhveyzQMhmDyLKRTU9VWeUvzTiYNJeV5Edsvgsm5DZz7ZHX13B22CjYokn65Zm6",
  "key15": "2Z4yXQFzADDkABfK391CfUo6Q8GZNNjre7s6wgjrtiubC5Srf7yVL61hEWgvsxhiUGAHwk6wWhWXR1Hz59p9mqGx",
  "key16": "5CMA1u3H1bhLNifWQgkC5t2jqHcKh55eRvyXhDexVkXaBKE6aAfHekRWZTP7A6xHvPMCaDPaLcR7BmxU3r1aUJLK",
  "key17": "3nxNmvBPSCviZau5ekcwWtgFizEGVRTDvQUW3aAhsPTNKy5J2QvjEaFh6wCCM6zy5suAbcJZduXqfWCxAZY6p8DM",
  "key18": "2a23uThV7zNdmWQXqXWi7G8BvLYo1HvUCiFtKTZXht4ybgWv4atp3dRBDPENJZHMgG5zGaRTaTCCXRc5Lu8eeRYo",
  "key19": "RmKgSRw7SFm8KvQ6LmiXX9fca2fKJA21xSj8if4Qdfws6NUaHWghKaLxtfU2KbzR9CxyrnHmwhpk7mnHZUXYUxk",
  "key20": "gh1JyGxwYeCLunhMFqhG7T78Bu33uF5UYC2JnpbPpstF3dR4uhuQbSocBueXSrDtx58FCw6YWHixzu6tEc1PbdQ",
  "key21": "2wWS8x1MyzeCmwbhbEYv3d5z2aBAP9Et8qryEz9urAFWsw2j7CH2NhTmPpEyy9NCaVhUB8eWgVacnCgG9nHnyV8A",
  "key22": "2vH65Mz2Ce6zJY3iCpYtPyb9w6S4LPdJN33g9nFNTm3c2y11hVosSmb7LyRz5Cn4HCwPMfvTGzNQpVHbsJHCd6S8",
  "key23": "5thnZ7cJVBD1VyjFdN4cQPZ1xgHisMYH3sbhh8ACxLhLvW6qo7Uqieq29CXtLV6gMcZEG4HdetyCx9F7mrrPcuH2",
  "key24": "4VuBtSACuLC3zaCsJ5sVcRfDZQW4YZ1SCGe1hc4BsBgoUQM3s6Pnts1SwPn5PMkjm7gGdPv8ioddFz8jVLJpXYom",
  "key25": "3sP8Mx2TXRXSZexJSQR6GDFxYbgXaJmPLHEgfibW5pMRV6nvQYAih12CgA5fbSzxsNd6cteGXi3mcbREd8E8hT1U",
  "key26": "3MsQAHht7JFvjY5NQLh4ohKMLX8umitSbKqDgdTwtTUmMq8v1YE53rbL1v9FW5exqnXimptrp3VfokpL56G9jJVo",
  "key27": "ssikPyQgyhazuyLMjo6RhB7UFtCTEU95p84oR65VcduWDuchnqGRkt5TctVMnr5J7PFpLH6KAUPfXutcwZvGuGA",
  "key28": "3GFTXVcgpSTo2xjFFfn4PPN8dugUZ7UkMbHAcTeoAP6H1cw2AeymenkwkWLJe6eFcjjsC142JDMcBsThVg8jZFAU",
  "key29": "Vrk8J7nyf5Zoab4HTtwMMyPndcVUwf2bRU4mhzBNFrRprqjLkJCDGnvnrqNV5C4Am3YPzyqPSsczKcC3MQ5zFTN",
  "key30": "2oBYqMTFFfjY8dVNAfV3MK9pniSpA7h5JmDXPXNjzjASH1DKMt6QqMLrnBwZ5rVy3qtcY4sZXK2fEFuyVCC9Z9dV",
  "key31": "4XAfXwFSvrTATzDhCaPCRi71L52af1RB1yUsdM9Rd4QwwQYEQQScuutxDh5h1keEDAyXmnz7suRGHHyTZPF6TGJW",
  "key32": "4tZWuGCQq1h81PqbTNTKx7YeUDok5Lni2aPxHWVgidw3VrRN2e5aHYwHHdXGHCNX6txNEv4XCLd1C9ohSJGrww4a",
  "key33": "kdn9dESjBTcZ7E2vJigbLVYgJSWyHrx8qwbofaWZvmWbXGE6DUUysFyC7YPCBxLaRc8xsQgh4qu3pAfEDRUkW8z",
  "key34": "mnicHpGWM6n32DfSGcmdWT5KtcEmJPemB3VEXifxdx1yqPFkn3Bpp9fvfxYzfd8MvKVstQmSEDw8y9RmStvHeKy",
  "key35": "5FaPmqCCLGoU9cUyvjjFukw1YthMerNzDcJTzotQ1UztjbTvp1W88f1FXDSAgap9N6QVfjXGqNm2Ro8RVS1hrSXS",
  "key36": "fSMvjoCtPgPS435fHC3qRcsZ3oUqfhtEtEgNeEwn9EGpkYuxLPWpcXJvWyhPAYDhyM3xypPimAdKhXzfBrcmB2K",
  "key37": "5kXhFxz9upiyLVe9vkjF9fanVGf5C13Ly53V4isv33ekuGfqMTx4DMrwtaV688dcUDWXDnbLBuGbLMnJ3EVAQNQh",
  "key38": "27479q2XBwh2koNFzMAnbu7Nm8sUAm52yJ46p7dgdjAmbKCDrfnV6ptLRpnPwqqotTTxrde6da2yRA41cKebHTTy",
  "key39": "4u9u31gCRrcjn8xixF1cA6gCx1jceaQW2zrLbfcRaBe5yF3289aNWDr1CAdBdHv8RqfWUJtgWBVUAzUM1ftByPGr",
  "key40": "2QUb3V3gYjD8FWWrnAZij8K219aXm7wewoWV4ZWzttXCfGfXZSEXs39asSMRW1yTjPmPEF81bdc7bfiLVJrVkAqr",
  "key41": "3S8XDnFozrNdLQbRxZDWQ4oKcezGKFr1hYAqYPWbzKgFKQa4tTRzx3MEuQnfNMcTKgBd9dKjJXJuXw5BkSza8CE1"
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

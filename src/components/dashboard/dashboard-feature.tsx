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
    "KjkVdtWriNhn9eZKzhK8LEqFqJrRXBgnY5sZog1D6RdAoQvD2YjUm1ptZctYzZqkvvePAosK3tJSY6EZJaQJLUc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qVRtF9xDSsTAHFcapbRRyKXQEi13g2REhJVJsnLy1s5TJxufXRdXSX85mbWyNhWQw2HFnjQM55bLsfRW9sSgzYp",
  "key1": "2pLCKiLfTgZu7L8rxQrCoMJjGT7wX9LzcxHqdZCMwG4nGPUfTbJuefiLmLxzx846tYNerTKsrbYj9uHttpYdJPcn",
  "key2": "3VEJ3mGZwcpLS4pNfr4nQzAJpZQC5NmSwecpN2xDyzuhUcoBiSfACMVkRbhcrhxuMtbw3RvnjQcdhWeefBrmamUw",
  "key3": "3rZUbiBkBixJtn5rGTMgM8hLAPkHorDDNmTPPgiWZvf6PbM9kvNRnUbMVbareQYvekMrBaWtr4Hm54s5996RHJth",
  "key4": "5ADadvjVfgrnSehgFNZX58fEujg5BQCdr5kNdhEXWwq4PKj1DstdNJDgc1KKG7V7VWEZYbTHEuoLnYJgMkhNZvxX",
  "key5": "4q6D4Cfm6oa32HZN5A2xAPE7iMopXunBQE5sYQf6k6mLZVeqzftf82QLz7egFvyg1YosrT17XQU6iwPk3rvkCnD6",
  "key6": "22GiJUodSUeX6cnSG5mqemE15DRULHw6aD4oBE8yinr54LDyWtp9c83BEwk5fBcFF9sKijweNJkKn4mi6KFAP9Yb",
  "key7": "pm3dm9kNUM589TfKUSmrsDmx12QEDTHKDz9y6uwGNBEECGWPVxSe1UKYCvWXFgkyKDw7vf5k3siSP5iXGkfyK26",
  "key8": "4TSJKNTdi5TNypxYdPc1xqSZoAFsfHpXP8xrdwHa6efYmhtESWAakEXf64c1wYEMpECjcDGuq2jKjRxP13x6pAcq",
  "key9": "5gKaoQ6zskbbmfePBt1aTykSD1wcVniCf1BwTNng9ZFELHTNXxq2avPeJTWtcUbxUXtLdan9WSvPbYnNXXBdWvS1",
  "key10": "4R5AbkdEdSyUAwbCyRFZkjyGpKfnNYRxyNKgMWsWD5SQ493antuyBkjjMF4pd1oeJ8kD2Jst1TZU1QH5NvCCikAk",
  "key11": "4PmQW54Ht9y3KdGqHkDbdGwvpGM4vK5cgn8mLfGWeNPsBo3EDnmCGuDzVJd4iFinQKeZx2fdCvjjdipDn3nhpZVt",
  "key12": "5faKRRd77HEzyow5vSmMLioMMa4WX9VxTwSpxrNpvyVG7K1QDqm5FUgPz8rxnPip4BpYGmifQ1HzWkzrcCDQTwg6",
  "key13": "sAfv391SWWj2iwoxj93h2g6x3cfPT9oadgGUEG9oWuHsH4Gyxh5uKnCELwKmhKTqXHj4Ny5uSz3xf9X13BjnDC7",
  "key14": "KxLESjgFwS8xeiQrifYY8PtXU9USku6u45xvdC4DrR2aYRRmqdU3JL1UZ1pA5HK32WFbqTavL39FwxMhsCjYTUo",
  "key15": "3NZComUfqxzuWV8ECYXW5UCiRTuQ91AMCrNNiSyHAG4LWYcA7hbcPPEJd28bvS4pK5JKaD1z47crrP8KoyiveLX1",
  "key16": "31smZ9cbK5fkNouj2NeYoDhGSSiHk45xRRoT8YHdxbX1Dkb1vkAeSozhXKFuQkhRJ6hLfZ1RV4BnbmAkyUkbQzXn",
  "key17": "4RcBHnzL7yKBuENGupWi3vYK5bgsFCxhFaAYGK5B2ukwXpmCU2p6z51Lmw5BuWihKokAh3iUVmu9AsEq61wqd4zu",
  "key18": "5Qwk9jKX6mqiU3fSDvCzqn7TsSuXdxfHupeEAHxSsxZFFoBbZ28fVcZN4g3dLkEH2PWZxBVVEyVvcdcw9GK65YX5",
  "key19": "5EG6rL364sPcfRyGL9Nt62inzKRFBySupMECExJC6mvqd5wBtPCqDTDe81J66nVjUEKCSfca4FGNU2zj6bAFaD9A",
  "key20": "JK171syMXDUuaULGfjVXpLHsCYXqik8icfJDivCVEWWVcpP45batDxJAuhLUKbBJfuEqXo96xjqckVgEnF9va8u",
  "key21": "4AC3BWFga7TeD2PCsWSgTjTRSbwti6of8cNpWLRYEXCV8AhUeyaWyFAW1DfNWTXzPWFY4mp2r4xgkjzTjmzWW6iB",
  "key22": "5rBji73oopGxpbXQ5744S6EqvD1hw5J9jqgrzhj5Winb63iy41UeFCmJS8rT3L3metVGxXTk4Tz3Q5kUPY8E7Jz7",
  "key23": "36J96sEg6nPCG3RWesvAywQ26TyPCey9HHW5LzmHjPuX6ujn6WAaYC8TkemQAzenoqMovERw83LkPLTQBs7hWV5w",
  "key24": "39yTUD4rd1HqeT75cVg6ioouvH7R2PvTBLXigGfknDv9apFEj7j7ps67uWbDqN7ohUghKzmuKgPYx5UycDhJHs5Y",
  "key25": "uibWa5Cbk6csQf9q6j2uiBfPBsNmwq2DrDJM8tkLWTPuikTYnUw4EFx3zRESB4m1JLot5J2qEDy8DBfz8oSiV9b",
  "key26": "9HJzsZhfqLWuvwe5k4dU6GyB4Q9iEnxeBGLdZTnHdYmz7KzebcEerFBfmv76qgCEpPsnXJWZYReyzid3hJ6Bosh"
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

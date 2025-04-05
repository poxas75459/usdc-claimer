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
    "2Qbn53UemYL7i23jZnUc6qTsUdR8RGy5rbmvSWWXoiyZXBEHQ37WFVZpTB369aRw4W7yyHxpBeykii5ZZAu5sQp5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M1VmirCK5CRteBoXfusFAVcG1ZPjESChMzBMxYWjiHk2PHW4wQtKpvodywv78hXx1SW5quNdp3wPoL3fDGGo8GJ",
  "key1": "9PQWRMBQ2rVdrqy9enoeSkRpvDhGAB6QV99wEoojDDDaLLSFyFcuCzKws9t9Txw2nfgsqkwbGAZjqnufYTW9AZN",
  "key2": "3ZB8QYVtKw52dpV1opfk6FT1StSFEm5HSePFwCnSeVAF1yfQUi7EcLfw66qfPuvJJagKz42fXtWn3kLMev8NyEDD",
  "key3": "3UnenXVty47fjCPunspayWYcX31UuH2ww9nLZo3r5MqCFH1NSGjb2LJCZf3p1VskDAu6qUHGaYrsZJMMPyaf3VkA",
  "key4": "JwUkVwfLhujaC9kvrqRAQzt7nTN6pzFFgrox9gs7WULrR3rHYpLhFkVzNgN1cFVtvibPbXZyd7hDoeZH6S4PpFU",
  "key5": "SdnjsfBuTZjK5rUxQ814CDwmLZXCHhM5H2ALhjZ5k9UGoXnTHe9NH1MnQKXjbbgVC7n6wmRkjhP44aT6FM67VKM",
  "key6": "cRpfzhEj3MCt9jpPc5NrUb9BaJP2ZqEWViioh2HbpQjhNKovXHpuTdZTggwry4RNQmkh2VLbANcuGSgP4g85Zmu",
  "key7": "4jnxJK3sAayvBpPJHgCYUChGmx17Kj8ZZwvB3LMziBRoF3fPx46eTZtqWhNogUphXrd9oM1spZJq1NzZzRGG9vJD",
  "key8": "4Ksgb9DVyufZRgCiHyy7BD4ZujTmS3p4WXxDDcuJLMSy4kMRhkKCByArskbLRNF5vVGiEwvKDxCbcfELCScipGrY",
  "key9": "8Xjt3gh9xWNtCg7Ls6c8s5R19QgYcrdeCSH4p4w6QVJrhsQbJU1XigHvLmeEbKgWohAw2bYqxtoSPVxdmwYzkmb",
  "key10": "2vPXH3P2wQByThTkEGWEpJSjaE85ohPXS4q6sd12o4saFUsQjLbzWwZKHeujhiQWCUF2W25hQBjEjVTw18LU1Nzj",
  "key11": "3XDuYJJ3Q7NBGrvKBUscFG8fnPg6mPynMivPRDDDWWsYJKr5HuDedobs39s4k7HKeH5ADcyjpGDyXw6xYgBa1acw",
  "key12": "6218v86Avn5yJuDfDHvNgCcWYXyxz3WxKgWShecGBR5NGxQGonmbY9Ue68J6KJYyK2KgHHbBXrX2ApnpbQZcxzST",
  "key13": "5eSSpz1JiXb7eGHajKaqm4LBi1vJxXjmpE5vGXBhhTQcFuwNya6sFDxtpyXKNS3bF32pMN1RpVZh5Pre3Pazqye7",
  "key14": "3BStAtQ4NJW1c8R8K66M4nrwkphSLKSn9xjo7tHGhDg7XzeV6aPaSPBsSZduwiy96tFfGoYLq9pimEAYqywPsSiC",
  "key15": "4eWqvL2PnmUoZKYzgeXqmTmbJBiWg2J8XJHXhQ371aRYHh6ViUquPEQJJAyzvXgFu7GTu2GWE5pBtWdhtjXK1oEp",
  "key16": "2m4cXmRerUtaq4jhHVi3fKAwSWZgKh68wYyLz1TEEq6kVgysuQs2xj7TUYU54G1dZ57Z8WaBRPWPs7XXHdjbwd3f",
  "key17": "5JfyRRhFYTNfPihHwZH9oTWNm8gC2NLYacmPbfKtZWFKXPhWfxqUEVgbeDLts3UJhr2N4TQjDXDEWHRAAkypuwam",
  "key18": "3roH66gTvzpvx2SF5hAAG6wUFXggwKkriVaFgogJMPEWxsgY48WhH1gVi891mL5D91t7rLNycNALyRp5tH3D7ZPP",
  "key19": "5epkA3FQ5NQx59DXJWMXV2tcrBWS8dQ4jrdK6JL1uWrak2VNf4PpM66zZmhEFn5MvCwNmmyaLsaemR3HYxHypAg6",
  "key20": "41NYW24J8hkGNoTFEqbhL91c7L8b5BCNWdd5bpnffDLgN4h5d35AewsGwJknRwGZbMqT9Hrj9yNyytfsUUEbopP1",
  "key21": "2RZwY3a6uckzURFScQLeytWZR6otaREQ3DB3Byc8LEPFMaBgQmCRZqhKjbftKR7bZe7EvC5JkjpC9Yr2FmwWtmic",
  "key22": "KgX7SvKbWBokjyAv99LgQKuHxVYWLRSNWnGtDdRPz35MBeieJ1iUChtKqBueCS5eVYyMR6yMJB9qpDYzHbYRzWv",
  "key23": "2qbXC9YKZJTB9GVVn6XTxoHq9AGNhVb66H2Mkcp2DwBbVZUYd54ENqJeFhLtmWpwEEJziHREhofBgDsdddo9UE81",
  "key24": "5jrpPT7922Wd8QeGqA9kmgc3GngQpY8MdLPsSiwdriB3M1w1eSr1XuQdLTgsVEYLg2LChHPFTs5mciAdU19Yb3LE",
  "key25": "2YzRdwzYhMMD27NUyBGTCT6omPiQSDsq5cfGePF2qhnZCsps3VYMZ7uHxaQGQcVwY8CvJQecqbV2TCSUdxBpxrH2",
  "key26": "4mmt8j5UZzw4LvfHsQkxrkz8PzXMd57HjmQX6w19xkZSKfSjkRs8QhYLBX3idkCQgJuxKeEsFByRMRYqKks5HUAu",
  "key27": "cfHoWvWEMSkc551HQoTEUWd2C4RHCqkBu33KEhDVMEpuUMsiLDMVzLtfYp1FKHcxEzrhaqmP1R6F7RWpi78P3x1",
  "key28": "5qoN2QmD6PJULmFVVFXEhvHV8ZMrtX6VXPgQ9jx767StdeFEsY7nj7BH5e3koMM8ZTpFVTGTr9QP4diVsiuctRjJ",
  "key29": "2Pgfi7xtYdRqnjUTFrJyrb14oEQwNt5HR29KKXqqQKEw1LPQJERZuCPGnRnmGzsybBY873c89bWi4JMnQCwvvqzR",
  "key30": "4LSeRXZE2GXhtwTkfwGmPDtvgnfjBuqeXFrdiUrumNauUvyFxUxbovUtBLcaTkCeEgvUJjCtaxNEypqBpcXUSF6f"
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

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
    "3ebpL14HuaHdTq3YBu2ZULzDMjhvN7SaJNu2L38KBbPwt2q9dY87E1Y8u1G5HRv7xivKq6Q6rLAQZtmnNQpnwxkP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NzddJ5M5wYBSAf46KB21N9uiewn47JYRtU8GFAsBkpFW6jCGctQmjhcjbyfwSCAoJw7petE9YKrsF1GNvfzYomg",
  "key1": "2ha3ezMWzHV8zmBjg89UnMC7pnFGvwZ7ThNTU2mWJ6QaKGURKTzsfbWM9HqPwUvMgJZRdtmGP14VNfjFYkvimuX6",
  "key2": "57VrmA6DQJqHoHgKaULduh9buYcBc4t91hpKqxgptCkstsTewo8dmPddBmVu1FCS6r2fzH2cWBC94Xp267fiA5qL",
  "key3": "4V5heC4712steAW9qsjwmENwgpCaeb6AaQPbvYJScExMTeTSPQFWCTijn1RKQ7yWxVtrgG8fzUmrYJt8cbjozdfd",
  "key4": "3FxaJZHmuoMEP87iPFj6LDtqDHLbm1wKAdza2tKhcRQiTM4iPhY1aJA9tiPB3BjQurzEjbDyywKjgm8z71wZsBUK",
  "key5": "63RKk47gGMGhDB7qqeGcJ5qd2ANbaXnkX4P7GBkgKHYXy4qt8TAoeE7cEjpMBsfH2nRg2oooVQcGHe96ndjP746P",
  "key6": "25C8zrayFZZRHrnhw5Q9w4sJNeudvoGW7sKZmQ12eqkyS52yehznMR8N8bpyCJFDxgKjpwSHgT6vMUcesNybKJP2",
  "key7": "3pgCgDM7rixjNChmhurTaDz4uhWe4iENfBcbzi3BMtUgnNp2k1PjJsr1SPEExyqf3uBf5k8z8Qk6Qk3jVJjC3x6b",
  "key8": "4FsmmnSh7cNqqJCVGccoN7ANJfDWbnfHNUMcdDMiaEErz2rPJR1uQG3Ykrs9A5zQK5y3x6SGpoPXrCHHiyFxday2",
  "key9": "2wp5vYev8Py8xFs9yBSAdL1N9wRQDJi9ucEufZW2X4Wnssyw4oioY6QNybzGfA1WRHAC7PrPyxyYYxXefqG9U6tZ",
  "key10": "3Cb2oXN2Ds9kXR9euUKjNaAbCLmAVqkPqDSvUKARhfoqnEWZ72oUaYPxkvwZMPPv9D9HvAfd7qQjwZxX5iz9Uvtn",
  "key11": "3GdTS6ciAmJSLXGrgbiWi9QV1J7UcypPFwgn1HUeKNYw28zxFA1VkkqFrynXCdpFm8yVvCcbRU95rS2i2zvjNVd7",
  "key12": "2LcX4zTptv5JLzgEcDLkJyfN3LFzJSPkJft5dPXUGzUo7uAu9vxKLNMJjeQbyneRqaSQ2w28DyuUw7EgnABvY7Bs",
  "key13": "2huusgNzCCXdbkJyq7jX55HHTxWjhKWgFQxyQe8Zj6kkeiiwZJipFqvV7SG6aKN6KsCLYmJwCMLg5qcxcrNiWWYg",
  "key14": "4U4gq5brX1omC4WXHDE1Ez7bCpUJmj7XMv5FnwQMAApFoJk3PwW2yysHCifuSTdqQj93sP8oCWNm9hs5fcDgRP8Y",
  "key15": "pKitznJprpDZPdY4tAAL2FyrGJBCfGBW7gCefgFgUx1Yb2rY6DKajfVQ3GYnCs8f6MEMpF4y18MyBemehTzUrVE",
  "key16": "Q6KSyuGENdGmdLvznRqjtaVaqHSgByWwUJRL1HuqteTrxs9L2FM3V1VHrnWX5MsfAw9V2WC22V9Tf4GYhSxqBZA",
  "key17": "5ST5KUjFBKZgL6yt86iCfhFBG454W1ZhiUsNdyNZF6mFsPsXyV78EKQWnWJBNP2Z7r4EEsxQzjtz38eG3EYEtYvN",
  "key18": "xD2jASWhfctkbiqdNfLSm4GB12bzwLG47YGznDq41x1kuLFHwABNLgihtZ4U7BnfrimiQTh2fG6R4CuaoeWocf6",
  "key19": "4GD59FmUaH63NtQoycaXffqfj2hV5Uh5srkHgZRfsntskqJDN4waBJSAGNNyG8RobaxhnzynAkFGgDxBYUZdirjk",
  "key20": "QPjN2Kan4wNBbqcZY6PkNkY471a5BiPCaE8KyXiVnvWb8PKd6mnNBiSe7FGFVEDumnTc48t3xVkY2t3y53ZsBBX",
  "key21": "5LLjhVS9fcbhhmqHwDSkENkDV8zxrLmHVdbsERpcqdHat2isUDUJXi3Hq5N8Hj6wUutdqJkNXsvH8dLG2cPbS1K1",
  "key22": "4KLeg34UaL49hj7DKAcRdLMv2Vx27Gc8xYXgoz1pciVEhykPa24npjen3A4KS2yuuEkzJJyWqf2vqZscqJ6oRMtX",
  "key23": "5fwT6jdNwuBR1oYpjFVCDkdzxnhFS6mC2e7UVvHRkUuXZz6pjs1NT6RG3fyeiLa9LEsFioRnz1R8DtXQLW9N6u31",
  "key24": "2p4C5XbbYgvzXyzMpxAm4FJG9Uyw72STWVUKW8UmvoZVwLgv3Mk2eJLeojzdu2A7vvQyR7vQBQ8utivkaZFEMZo9",
  "key25": "3ThLWZxgV4MDNsFECEjTi8FDSC7fEuYrs1nAxiw17ryMREDggA3c1mJZbSBZ6YWcUyMANtDVUyzuzPzPo64o9TRm"
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

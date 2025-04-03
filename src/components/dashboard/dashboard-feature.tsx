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
    "5urpJ3fd6hnERT9NWJsD8pSWV3yucjN2sdcLUJwYcHkaLnr7bqQBtUtah3gPYs5s8gpFEB8UCAdSD32CVnqXZwQr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MbxyBxgiPrSLuivwoRztKxwDkEj2xHDPUwtqqGostm2BK16cMuyc79hzoanYdqnExKYDHXqW6k9haa2oD1bykk7",
  "key1": "2M3TRVbr7PG7d2AofF72GYEwFyXnpiWn8QFnvrCL7wTwaPHWdq6eg23Wn4QKEtqG8mCxYRUZ8swZEw31fjdZGc6w",
  "key2": "5Yzn2tLmfuvxMi6XFiejp7w2MzVGWNne9QfFVXQf26VrFF18yfGSjGSM9JBGN3Ap2zwnG5MkPYxznqKoVFvjKXRT",
  "key3": "4wHJzz86wQcRfM3pZ4Q8BGbM2SZP7cvxY5ZDcqk9cetYFPZjd6zS5Ukr5oAaN7GY2GyY2XpXcuco8YDeXEnBcqek",
  "key4": "di4AXZLhb1FX9TBSnhZWeBKnzuJfqNR48kpUnmTqsNRzLmvR6sq7i6KVtZRvqQ4GayUSTtNPG1ynq6zx8inuqS9",
  "key5": "2r4aR3qL2BnLuFvKrNbaWYfk5TYcicZfhRnF8xmPLaLHpp68T6RV95WWgHq2XWhwefzK92u1EVW1PyNFSG9Ti1DF",
  "key6": "4cHQc3i4J7UEaKGxhz7QpkYfYDbjF1HDrQ4qgPR87PbJwwv7RhN3W5t21KV8sgcPNdQNdfipEPM2Gk6Zmk69ASYt",
  "key7": "Wnvh5GrinQRaz6HbC7iLD3urq58SBcw8zDW1VFwvcACJHL8xrYYNujJVoYhfauCwSfQQecMwaoQXcPBxd7qWoxg",
  "key8": "pWDFt9kEbsVcooNSvVqULm9VXfGpYzvKhp4u7fw93zEvr3Arz4gpUAEAKQgZvSyJMK6sef4KMwE1yDWmAzTSmfn",
  "key9": "25t9yZ8tneajadVYWhMs5sZHDTHfHybGPDNmayuFG9YMFkgFHytdF6WVd58QVuWhEct2Z2eEGjcaNBerwqKCkLga",
  "key10": "4KkZAppEDxGWeXSoj7d2ifNnxaZz1RUMMi8wxRU8GKFARWw59rXyVMiryLMFgAmRAEvnZoLUkDNroUWzFb97iCF7",
  "key11": "2UJDHP6bRndrz9iaEMupvAaJ6vjSj5tTtUJwzoVdY4NcfeLyrkkTxu3i1zi2dMBAKEXLsVKfJbRVroV2hMky4tm6",
  "key12": "4qCVdhoNRThaEefDHDNm68sTUjMkGzYeCHyUxEyjXu4zNS4XjrrG5QwcXxxDcXLUim4CBLVNvEkUekWsKUrrRwwn",
  "key13": "4sCPn87Vnnh8N4KzJ7tGTCcwhpsjyMV6ehxXjXhCwLiKcfDRwkepmwGq2w16LJHZypQLN2SDq1e8tMb93QoXK9ez",
  "key14": "4AYV82drdujKFKMeaNSdLRN2i91QDdsNxjP11MrKYorWZTwy66GhMuAQknrCNgKzwmYknbBLiJ6HGbkbjnmx2zfW",
  "key15": "5BDiuEk6vthjhpgtiUs3T6jVSQVCdHiBupi3L23nGGk6H4FzNHqTQHYZN7ZYTUCwUmpgciE7q2ydtoiCg8RCzbfZ",
  "key16": "44BWWMeRkXVRM2ebCA4oiZzMwGDVmfx7Trr358Hb42ztQxU2VoEua9r8hzStUv86DdpT1zqX2wfPz427gGxkQtXk",
  "key17": "5trNeE7b6AtYVrxCjMih5GtMML6B6HM5srjtFGn3uoqpwCQYPYaSmsHCbGeT356igmfjG4JxFtjPoDrxPuwp2MXj",
  "key18": "5uBVki97XCW8rHdxNz82DEhHn9KsXWs3AewMKr2x76VqWSW6Bcxju31D6ZrF5cQEYTrEVp7eFgd1AKtkTSDSNdW2",
  "key19": "2C6on9hyWakt5C8GM5NuEG7PnTZFCHgwRLG4efFDiGuYR91qcMavsmgnWjoYysGJHoABMd4FzSNWgzcVuCgeUuvB",
  "key20": "5pHy8L3XNGoDMfE8FnVFmDoVKedPweQeKiVg51aKcMrCFzGKPXSi4PfsVjQ77fHoYiTB3az3z7xDhHcz2N2EhyYv",
  "key21": "4TkcHkmPGp5VDBPpNN4zJTwRNNXd6pLt2gMhEJTrTK76e5f9kdi1AWzGeU3QXsckbm8AqNDpZyKRLYMvFtFHo9Yv",
  "key22": "92YWpjy3iBntK8iPwDxaEPjpkXZCGs5uWabM5w4A6Dqb7Ek5Ykzwt2L6h5ephBBUyGTNsG4ZtvXp1S4oDhKJ9Zo",
  "key23": "5gUyzc9LQpADyzssBRXRv91LDTodfaJGBZgsJKCGCAsRcz5bPRT9gM2EgpPGP7GmDS12LjtQ97LL2jM9Tgkge17o",
  "key24": "HK2hxWBGxNqAiJL2u9VbH8zrhwMAWjSfQg3BeSyVfJVeczvcuBddBakVgf53b1ihgq7Hr5wpZNLPM6Ep48WAvyS"
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

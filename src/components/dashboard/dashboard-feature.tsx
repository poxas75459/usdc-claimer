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
    "27EcPgQW53wGtqML6Fnzk6NuUBraSvj34WVDEj5SpDahQqCbBXwoBTdSxxy62pm2LoJktUZCi7L6hKaEpTBMtokM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fntqj395xeJCqsdK7aDAxXMARvUeT95d7XkPWPriyuzhRmMSpCZKppw7bC1cS35PYsVakNp3tw2dqGHY8sG4WPm",
  "key1": "gntDuJS4y416eWg5rMCxJSLS8sKj7aH5ZbTqhiG3ANwqR2KxafEEEd2M1AQRGY4k3wLh9BCE1vwmR4KRd1N64ri",
  "key2": "5A4HxWPMM2jQi4cUAbdGUcchCFPfTiEKQ6aK6JCawW5gppMx4xnffyEV4PiywbXobyv752y3SMv3BMkYNGgSasMi",
  "key3": "3FfgArBquaDkbLdjaD6AYkxtXthZ8r5hYeevTS5D3BHdVCWgPyLYes7Qf1TiVtaaaFQKGWnb9nBjuDTuWJf788dc",
  "key4": "gjrcKXTHf6hdqRpWbhML8m7Gy7YQCEjiCfLKNeqQfbSWMZphrirmG6fiGpjheFLJTQaF3a84t3MFdfWPB5jK6Sq",
  "key5": "5a2wxtLW6DZXSHi4QXhRUNi9kGubJLhETBcxRJfNRVeRpdLA4SPFD6vHPpheu3vfkC9opmNJq7R3nNSCHeRvUkcY",
  "key6": "B8ffZxZ6yy3WoL1niEmM1H7LvUNhh4SmWKgLHSe9XBNTdF6eAdLgt1EBbJTFY4EUcAdneqXFhK1R4hsPSmt84pp",
  "key7": "3Lb2MSmkoScc15GNmheRFSRtMzmfdGGPZxUkAM6hkGwpqnMRysXrcbpCWtiWDDJnqUXgtRnozRy6t7ca5abwVzTm",
  "key8": "xyQ8EEaCAaoNZrcEerLZt79nqqrVnArYgZK9Xtur66Un98LPs2m3D91PuA5HSRkway6tB8fKfgZxLjSNPSXJabJ",
  "key9": "3CjxqXYYhSuzTuraaMDEH5NiYUVNUsMD1FE6ZkS7fqzp1P4hXHtq8DcPsRW7nNfqqovgjySGFHK5zTiLr9goLy7T",
  "key10": "5rTE4aBcnvSPhPmm7qAJ2WPuz7e7EVsc5BP9fa63gb2QnfgKS1qADg3wgLby7A9c4eKwPkDBWDWnUSHrAqVnF3Z7",
  "key11": "PJz5tK3MkZ2bVvMWH9wBgzxrdssdXscBjPSmYgxAu3NFYL4i3qQt2G56RioXeaguyww5p1yjLwrC8qT5yL6hHWt",
  "key12": "42GKNkQTHPD44WQUrLVtRj4kiipXqQMV2f9U92r7xTmcm7NAKSHuxLr3WM7qcLRQVXpLfNaHyjnNSfxbVWRtY3Uy",
  "key13": "3qpYd1jS9FQhAE9Mim82pkcxvkq6iSkV9eyvpXujTKu34N8joiJsSFEM53yeQgzxijwfa8JZ8mf1o26sZhaxxBUY",
  "key14": "3154XkHJ1WfVJPYoMFPTUw14jANBidRBuEvKAydRq3NTPsrPADPx8KTFpeS56w86Vnw1BFJ7C3bUWgxYWhCdJBHY",
  "key15": "5fzzfNDDyyKBcBEbppJpTd8r416fDyjPgzkHxa4sGfx3JpdajXfoq65htWoBmewfGWkYdQqr6atQpniT4j8FuVyU",
  "key16": "3BFtpxr4CWPZ76pTDnNgHYPqG4VGLxvBF1GxCxUVF6RiLwHEzyQGvCPybhYjjbvHR6skJzVE6uSobANV1WwnQtRJ",
  "key17": "2qb5MRe7UpeAYxyXZdH2ySvDa9MdgPG3EawvBhNgaLtDQXjWH6veqerFfKzqvz39rnSzAUe4DPT479xg4wx6jS7c",
  "key18": "4wpw5CwGoujfVgAqH3bovrYLRFystwJQV6yh4WFfu7HxEh8Qe1YBAmtZDmCFRQ12oYQPHqDc7ioeMueAFtYEX7ZA",
  "key19": "5G1QmNJEtXoX94Q9QTSRFQB56aAyTvuhnaEg7RzjDgwSpbQiQka1KsnwzJgzoAh68DAWnQSAmwGVUJHRn7GGBboe",
  "key20": "49ikETD7RE5sdyXHHWwVQigEVtBEM1BHSuAwgtVG2UrQ1tNVSGZc2piKN6RxiLqSMUDf8SJRcUdJub5e1kmtNUaF",
  "key21": "35GTG12X6C9JQXXzJviu5Pw4jkoaiAe2NZ6b8RjjWJweFzGxVTojQKck2KvFCnmKKhfNkWBYQkgmbKtdMEp7YfpT",
  "key22": "RboPM7yM1beJMswJCZiFBYJkd1i5x6ZqwxXWoMVqSKGt9EhXHCUNCd3yPu62mDKLqESWFHnUe6eDxav36raD5b4",
  "key23": "2vgdJMQE6dQbNHgmDmuKukBXgrvLWdzkSww8vajvtuYzTtZMh1ttcgdCDQShotMV916bRJbcqcksYi8iTK3jjiR9",
  "key24": "4GuHDEKVCrwtNXiWsJxeXPog5dNyRzci9xj2uGvWzJscFFtSfGfAwyC5xo6HuiJJkC7hiYWEo8M3nyn9VbF3YqBe",
  "key25": "5zLsL3hyovrmeXVhdXJfavQo57sqYCN6bAAWDXeoyDQjaKbviGxEDysxA9MnNsHs5UA1egTD6uqgtZxmyGWhwgt3",
  "key26": "4J7Bpvk39EPyegvkvtuUuNnsdZWUNcLC9B2AuWXDQMURE6z9zhFrV6JjtNsGMJpC2e75YwT1gnj7GrJMToDSDvLG",
  "key27": "65r3WiwiCd8tsXya4pQMehXmNhScpUk4ipZwnwjZ7qg65iR2YYUcGo1T8bXaKYptNfDiRdnDsCEzvqu23ce4QiR6"
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

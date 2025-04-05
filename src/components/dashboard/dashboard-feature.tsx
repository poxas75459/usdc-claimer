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
    "Rj2GZ2GSPfX2kxLAFQyGR7MMCrPqyAvKMLg5zqHLijDFUtdk8uv9cmKgFtuuLBVDz8R2MKpK1jhE2MZki6bLTx3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SKtgDDTcCsKZkNE2c8HVxzv31KKzdexLUQ9MCuZguLLT8WKuDekGyDEdkxSGhpk8ztLMD4Fek3KszoSrvysqPrn",
  "key1": "8uvXYnNWmnUBCJPqAyfLcQEXSwvusLWSuTTXPQiqvBBe6r4HvMhJtaS7ze6HjaAwjUVFxiixNsNgwg4EUam5Qtp",
  "key2": "4EkgibCodEAHUtS7CyAKKmJsn6FJZvSsj6dFjaMmzu4aHtHNaWVpdbDEFvE95LVajK8SUt38pkzDkyZgYchAJuXf",
  "key3": "3dMEw2e3ed6J8FSnHrrQgojoqHg54LowfaVuxagBgKyJJQHZB1rPzcwn3Zz4rPkRXP8C7tLz1QtT6qLYKC7VVVvg",
  "key4": "2NjvXyZJYaeGm3higDWtsvLwdh6QP7LP1UMGSViqq4bza4njL1CzEnopfegC4F2PNJGMdBtotpScGWUFXekNVg9j",
  "key5": "31jYfjgc9bLJFo3iFs2RkHUEcN3UiDPoV4UtauN2NGjYiLG76fBMYMm6hTTee7TbjnzwRi1vyvKA4Sp3JkzxigH6",
  "key6": "3kfiBTTKqFPKR33aAoe8goZD3ivJokH7CJqbxrnyMiWL1ZWEEZbnmH7b5YnbW4eDK66jWPAR85c3k9eKetid7Gns",
  "key7": "5wbDAAE9eE37mLiVBaMp9gzKAinoZEDGP3aeYWT8eBebxNErUt8UDVPc9PiGCUFRDSXLaopzB9tr7w8tsYmnP9wN",
  "key8": "3gctZ2Fchd7rqdkuR1eMhWbCNvXTEH3BS18CwnFVNwBsDBKoWWDD4DWBgHiDS9fWb8zEUKoWiCyrD1zAdF6Lhn3V",
  "key9": "qjmuJCXRaHBWBmfHcWPcfE1A4iUDdxeGt3yaRsRM5BNTXHwBGqa6y45zrYqBLvvbQ2BFhYa2mUzGnv3W4X6VAzm",
  "key10": "3ZC9tCACb3vsWMirrjN6EY2tz1UkTErpoMsKMBTFNnaZkWE1a2SVgKwCpXzjw8GXLHeYr4H4Q2cYjpNo2uWr9wRc",
  "key11": "8F9WPTXcx5EGoD6wqNQCQPmN6Bdhgr5dUJs6nUEazjpxCHkv9LsUtTeha1BcLZ3WVjWnQixr7nstTojeJ2Wp6sh",
  "key12": "4JdRaMzknLw4trJWxytBRP1vZKcwCErCSHhMcWTPjYuA2UxWmbYzDaSxPrBkH9bUEtYXBpNjEG5wWC78CCdzwuBN",
  "key13": "5uuM659HiLzphBc41dJAjfmixpMws8SaC6dfoBNfVU2xqhDYivd1aYvRq3vcMkpH5Ddcy9bRrJXkM9ogAnNb3PuC",
  "key14": "2PgfAWZm1FcCshsc4TGH9VVfpiVgD4z6uSujBzmS6a9XunevnaFQ52oSgKEZ3kjK64TRwYTb67acGzNrbB9nkZNf",
  "key15": "D4mRrQiPxJt9dVZTYiC5xMfduyLceZu3Zo4TnW1vn1nx9oyHtnLTFDaBGYA92K3nc64sd7qrMv9x2b45RzDo1Wo",
  "key16": "Qyynu6CKjaWACcjhA8yaP2s7tDdm3hs3jzrrtfiEMGzyW6451EyR7JXZTDm7BdTuo41njFiewRz9Lu7pCbWSyk3",
  "key17": "316EQxPtKaQ5ww6ELUmRGuVeRM2o1HQwkQ1c1KvSoBhw2HkXpQ23qH76LjZXV7BxvnFZGa3j8KDrCn6Pf3NK661G",
  "key18": "5imDtTWL7bbaHbEvAx5DRE2HAb6ATp1PonnVMoK6ZdkWbXwTnyZzz8wFb64gTygHkdBai9XTYsB99jEnk7X9L7j5",
  "key19": "2JQYLDzCymL722WkXBjvbEuvZ5TcCAo1C9nTDcHDwA3BVB9ad1G6H3gY3XYPRQ5n1BkyE6ajEnh9VrmKKWAhpeyj",
  "key20": "iGiuacxUn98Pimgv9gbKKSfmSYxxYRXdFo1GvrYGT9hg9ciPibHvyGm5Xm66eL9e253RTLHNDMLM9ZQMEx9sTWm",
  "key21": "5UvPB82yETm9s26XcxgnWmBcdJYYRBKNAXown5x6vX1J2fHBZGJ2P48yP7eacnxbRhug63TvFHavnzwenPHzdVYQ",
  "key22": "3bQqz5xNmWggZqA1VsWcHmoZEuLnrcWr9oZf55dy58Ez5iCao9cLCWvbAxRRHHfMxtKS2RniWPdtUkRmehQ9n8dm",
  "key23": "5Mz8iTvntuy39mdG6tjVpFw2Jf8pj4eHdfpf4o6oxMVoY3ZXFF2z9zqbESGQg72Lo5tRSKKZJT4x1A4thV83AdzS",
  "key24": "24kjXC8WXyi79iNCqsPBpon1RPEAV4TQQLMqqqs1LrRqa1vLauHkg5zT334Zd3exawe8ksjCmiGaVkuUvguAC5Sd",
  "key25": "vHFo9gP1Yq2FWtQbdvyyJodaPQM8p1cGMVe2McsUiEc4cCVZxKbD51oNwVJEMkDo8WbB4QZk2C2Df54edLKx2eC",
  "key26": "4fbCE4A5XCYABAtdAUhyZHj24nFv1FJWkSEemCkWAHjCBQSAGHA7bFoazNjpcpNvK8fo8edsb2PCvnhMHWFVfZ6J"
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

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
    "grmcyRK9hppn66zVwJSo2UFGrmHXsUTX2QKSCXLy7ciYtSusgj3FEPyn4QXBe83Bf5RWFfgcThhMnRHri8tvWFT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JZCtatw8d2yRqQ16jgFYUKv9zvPRQqw26vg7QJmgD9fYupLwkGG8FjFGfjkAEyGHGRpsTbpsEmSpxMAevmrjFwN",
  "key1": "2j49v4czcguXpgUwJ6ohVaFb7Ly1TLrBe8ACvdFxnzB34mCChevjQ3TVTf7VwaGCkkBJ9ANsHEhc99WSYsDYQheW",
  "key2": "48XkQJRsFjHasrYRyh5Ahxo69wEvi4wgtiisPb52dyQDyQq7NHKwisxAaHuVCrBsscjRUXZqmLjPBKKdhvQjmr3Z",
  "key3": "pKga56tMNgfWimMenbzDbLxGW7dDfkpPNHiTQ9xdiGbaLKP127bpRYPkt9NXGdQZNBREfSTGXomgv8Biui6mrRV",
  "key4": "5ZFVyKAwufTYbT6rweJNHDK22VkEomp37ELpNz1NNkWrqQ1kKbe1FxeTYJkbqAPJqs1WhwcZJcN52iJYgzKiMfUH",
  "key5": "2adCzYuf8bqfWTA3TVcEF5w6EeSmScMdJCz9Kf8GSjuq248YfHdebcPrN6pD93zwZ8c8NdVxXkw1QAwXANNYr9AA",
  "key6": "4KDptvhbSXWsHw5DNukgECfRsqsvzsm43WSNnKuZA5ob2131LF74GP6dhFzy3F7BmL8C7hjRXnuhvbu54EMLPwkA",
  "key7": "3TfDdTQADPoeFhcj989JTnbnKWmQH3VX93xJ2BJL7usbZNXu62mEiH3QpmFRorQFgycAZnpCWr7Qtwdg6kY5HL9g",
  "key8": "3PcHgCDL7keXXvneYD7Q35SqHzaLvMNSg8HV8rtqn4HfvdLqNUgRfVJ2ELaJ58YLa6kHnVtTYndnfPUbkWBHjfoM",
  "key9": "nRc29w8vSCsrwHSR5RUCJb7GMwBegQUtJV1x1pXYpSPo1XPXJYX8UjgKHEcH6r3mNvC6B3CciVVghZN1H1CZDu1",
  "key10": "5bJRxqMcnGa3tUULqFSKfD81a2dthC8JB2zCALt6pwS8bdZ7JhmT2SdA26xgWkVo93fRy5fub5K2QHLKx3gQTtmj",
  "key11": "5GBVZZX5k1GxLxEUJ9HAMQ7qPijm5tsLjMD31H3CTmHp8xukU2tSrrtd9e22msYsCRzyhXaqoR9X5SHBxNEc3YP4",
  "key12": "2iQ3LQ2MT1B1mTb2L63wqshp9rrtycktCwNCcy8k6x9uBDjGcZDz3ZAusLWLVm9MwvSTsyQesaXHV9n2rzLLEvsF",
  "key13": "3Zt1EcSCgSexbhgX7xZYDST6W5nCRiESwFw28eX98YUfNKnaxFj7EUgzUcDNrxoEsFMx7oqtd6T65f8vryToWBqX",
  "key14": "4bxiJodXX61En22VUgwiRt6g3dMzretFgVthj6svjzFKfieg4ztfEryEmzgwfaQQkGrFKiPSZ4hpXqhDfFpKYugn",
  "key15": "3fHG6TaTbnGATrkdY1UV8p791wW57aT5Juore3YtzSoSVrDV2f5Wk1AnXCt2mgqwfPSpJijhsASrWDEJjxsGi3fk",
  "key16": "2QaM8Z1iLEKoRBzBhBzC74AfagraxJMoaQnymrmqixtGeF3fPfYJPHWXdNuiuCsDy9FnreLKA2QmgVuqNHodQ92a",
  "key17": "373heZdc4fuPZXepoctR6aR2VXHsXwSzZ9BEdw6QjxACcCb8W8c6Z1pMbjPLks2b2116BMi2hn6uvUgmUpeiqkZU",
  "key18": "2KF4tHG2H473KnmpTUsP6cuPD6NaMMBvkW88KbCzJWxsM7dthmwsLfxgPL5kPwiFmFBvEB8em6FEm6UPjNUx92ac",
  "key19": "5jp2x4RD3DRZaTaYx7pqDZQThCU5L7vyLKyAmZMNKSzhfA7tB3iPNiBmocGAZSccfEQq7DasJvwfeZNdEenZTRGV",
  "key20": "8UT7iM6awNa1Rv6jZ3ZkTTt1nU2DQ1U4Aw36w6zrDUK5yKjFWLoJK38F8wPmQA4hzupUMbguzo624awbatvyPck",
  "key21": "tVRKNrhxpthDFreUBJ3DPM8RehzxpEmdxhEraK9uG7BzJiN5Spb7Vi1Txmbpw5suFR6G76WQPcqDXPnzsHWPAr6",
  "key22": "3enjHhkfWBHBDSDzZQFyAHZjSEDxgXZAa95eqe5fcKw6WFRmepvCUdMYjcT1whMziV4vAR488tEatGQQ2XCQMWvD",
  "key23": "5wCeLFkEpSUZYNZwScx77uHpdyZVGfivPmLDWJPd3LRPNUFpczvnuXoEqd2kV4pZ1P718VyTBTLtyKnMs48xgCH3",
  "key24": "3V8egJYPyxHZajyDjbpvkYUq4cGWZmJCBPiKXLQLphMt335aYwfBdTZrMoYxSASTkcn9LJeshBKqjowTeMMtevXM",
  "key25": "4p2KMdB8vBXYcZWiMeJZmG7RKaG2XewZm7yh6YJx16vjxnwiCT4D9UxwjJnfUCZ5RQVLaHSwoYxQwVnPDsHAAfjH",
  "key26": "4MpQdJ1c3dFTHFfqfdoM1gfXfpNwSf28LBD12XntqGxQywjZCxsD3dWb1wD94vyHnvzsrkbtM1JKqtVHNxr6iZFy",
  "key27": "42yKg2SkSPwVAexKH4xM8K5DcrxhCRab6fRWcxXDBgLuyW5ezNrhivXhS14Z7hZ9uSexi9HjcXGaYZKAURfnFMhk",
  "key28": "4xknws2qUEjFyzkHHL5v7rTEMvMj9sRYAvAKFxz5yDFjkcfhnmHXRCA4v5d284uAVFeDfAx96RXq5DS8iNiqp7tJ",
  "key29": "giNDBySTP7YJ6Z1cd9kdeBH9rLSbS6qZsED3uywGcBHSQ7XDQQzMe9dK1b8uvCQBpCisK8AU8dxut2XuBkcKXnV",
  "key30": "4mxLNcjci85XuQS7oRwSrvFtypDPR2NQcYbU9PwUPXjzpkaRYDtBhmcvHBhNAAf4TTcXjGbQ6WhTGRGWj8fVPzD1",
  "key31": "4cH3LwGM6DpmQkkhMuJhgYvH49teYbbYADKBb27AadzbceJKaU92aDQKqsF5B4GsaxRhDEcvs7XTsAoL9kXHnypd",
  "key32": "4fxPyDjmnYytggoHTxPd1rJTKNpct45tuVu8FQ91MgeUGRFWLm7JXFYGeKPCBdKPCJX5RomenD7Ctk3eLEmYyy3K",
  "key33": "4F9mBNCDh9AkHSNpYWLKHsaYrLaVojD4Jw148Nrff5jDiPFTJwBG7fQ7Ygbxxz1Yh21dPnEyVvShQsPRN3iycXxQ",
  "key34": "2ejuT2gBnWmp13BYax1nkeVv7oApQNkM6KushaEgCamTPfUvCkFsFYfBbuGeD4xKJvMJgThuGzJHaewapCt8BEZh",
  "key35": "45rLUWdm8H6fAkJ1EBWDbsqWpSBN2XqN8uyNYg9YYvmBuZsZrr3zDejnRnZ64fcCsVGUfBQ243FTySJX5YKVX99i",
  "key36": "48Ki7quMUo4yrF3ZMxecvrc5yeUetkZF1DXsW3JWAmiRbX6bTJCdfN2jyFkjQ2LHuYop1A4b7c4gNzv3tezwgYTb",
  "key37": "2yDA5gbaGn7t1zk5WF9jrpmcC8At56veZ6piWP3L7phS3oV49ciGxb9F9oJ9jTFBDgXMKtgjiNYmdm5oW6iKy4fG",
  "key38": "2FGWjWyZpUt7cuVPfRmTJzb6kgr27zsdhVfJe87k9YVmF6ZXiPCcmUNyUwxUDEsLD6EhS3Dvkxc3K4vE1AxK2Kre",
  "key39": "5KdrpAHe5TXEcvppb3XdcprpMT1QMbRRbYWPiTV1Vh3WRxxS8uFc1C9eP2q5UaJJombhiShyX2toypN8cSjKywE4",
  "key40": "2yq7ftGUiEm22e3a92v27m1zJNAyfbL2h4cNheR8B99qs2fMBLUk1Ra9HbD7pe7hN1xyERYUvMgMjugYKCiuGnGw",
  "key41": "4fnYMe2PbHJWWco8mxTPTeeXzc1aEohCXkzSRy5wypjJy9XYrAP4MnF5hVuZb3jAYdnDEJL5gBLVLx9ENtu33Jv2"
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

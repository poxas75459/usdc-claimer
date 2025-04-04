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
    "66ohqquKPh7iHeW6T2bgtdwb9bRZxZ8z6x8mMUaAtsGoLua7MqVSB1wuf34nfXySKZf8mRmuZFzZmZ1T3gfAwxou"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kSPG2DNGLyRmP2weMHBGwp7BJ6knw3RwHbKb6VizA3VBAQaoQEJMDkV1u1BVQFHYE6a7ha7WmTnSRWpfZYF48mk",
  "key1": "9CU18MVuPnzupv6Rbxwu6TW4SyGsWNZ5pdiBMrNX2pasVBwMdmstCnZcSKrshdhT1RBmCD84GqZu9UVvy1oBpJ2",
  "key2": "2PjLHqao8i8vauiigMYxa6butENjnGD9oDj1xgj9fHtn6k9BT35DB6fconwGTfGN5ugXAZmnnsDD9KZ8xS3vLc8j",
  "key3": "45aANxigd8vLoP6C8854PnHLM16cX96UtpzfQpcmcBA2jRvMCaa9Lu6keQbwnZvAqwQWb4BTi811DzmLAPkHMr1G",
  "key4": "2RyivEAZKKzspCSa61yE7os3zcFf9WV1KRfKkTp79bWueVtHtRMeCtxL9Cgvu5g4XSx6PApf5Kqn5v5QNdm9MLG3",
  "key5": "bDZw4DxobM3ahmoKx1MWp5Q2L6db84cZvtrTxfKmz8FuwTfZihKEqj1VtnxPJMHcNVUscc8vxJXsW1uQRWG8ZLm",
  "key6": "2VKQ8PKF7DNAWEPTCpKdA7yLiN28qJ8nQf1AG3CEdT7he3VGbZJup1mzMSVm5RiomhR7SUdQ1RzLDUbXW1gyd1XT",
  "key7": "4yAFJE2Y728Bn7ZPiTEc8wPCDWg74Q9oWDnzgu8ECTuEsc87ympWqRkDsmqz231myyvv5kFMX2w8sTu8c24migCv",
  "key8": "2ow2Lq9pniLphbaJW9hBHU8s7i6pTbkoBTAk4KXT1EBh8ny7LBRqZUNebZWMApgdEV7XxsYQYAA3sSQJMtsykSc",
  "key9": "2bPL53g9kSQhdW3vVQJzqfchYAA4dVYLdY3ZV9raJH9z4nnFbqLqMaRFGNfHnmvKmVf3JfYbqp2agy8PLRzGaNzr",
  "key10": "26TnUoHUieN2yUAXwJ3i86RozR3fobxjrvL7JcDLG5cDkJt42FHjnY4sXmkdpqKeHwXCUMCSCvwy2NwYpE7URYdV",
  "key11": "5Au6ELZswQzidRqpRMPbTBuMMefPhaikgJejnGURqDtrpYwqjsWtEKhpvcnAFYdnZjMBrBCTHXjac7cu4LGmkeQ9",
  "key12": "4gxHqoCUYTAM6KMJ4vYsTmiME94SGzHU1hYtMq66mnrafsugShkm6LVpWHZERYcGGpbPcbcq3zv1XJqqoLnWC9Df",
  "key13": "4uxB6CjjErTi8mDkXA58tZL2gozPVzmT35gwaqYgzLaMa6UcHixtBqeHepLRHBm6wmN3QFcyU4qZx1Mxsvpdxigj",
  "key14": "7RM5oshd3Zfdd5nrK2gWtZivXd7GjPsGV5VbeCRmAzDoo7Zw4vYDWw6G4yetQVCnDHVvGU91Mjuq5Jo3J7o4iRX",
  "key15": "5QZHuU6HyPHW8UshqsQwcmdZKCFJZZuWBKu7Z3aSZM8mmL32eBk5pu7U3FsZYNVGV2Pmc6LrQDSaKJGpkLKVZoxu",
  "key16": "h6ggzFU7JGHdAHD9fZRdLudJm3oSg2ucuZdf48Tw6CcFXSBXoyXoeWMzp4hrQKnLnvozTpNigceQ62U9BFRXp77",
  "key17": "Q2kssh1bnyfkNHCKNbgd9MWq73dTQPTUFfwdQ76gLQJux92sjWEENJzNJyLGmCdbG6Y39FDe4hkhH5yGe7L3zmg",
  "key18": "432soAJjdGWMYswBxsxW28E338GifnePRSxo133g5bMGp8TWau6BAuyf4LXbyEWPNua7Mt5aDTTe5u15GTkaWpFh",
  "key19": "4Ysq1DkcaQCW4Xx7MnD55HP3YJ8QRv4u2g2kXZVj3H9RUokfQLcPQBh74uxcgLSefsZgMLGn4NqYMCrnWHP6upQm",
  "key20": "4RDHcmWknycvPfDRHPjD92W55MbruWMtC1H5vXK2Vn4h32mYjYCxcXxARhvW7QvMwkRtV68xXq42uF5mnCRpQAfx",
  "key21": "38pz1Nr4MALyZY28BrUFBys13xN8hWGUNxb7BBwHzumw5DjFeR2aHjZqx4qvEaaDwf7gSQz7iA73yG3Jysme6W2T",
  "key22": "3KB7mQVeiWCv9m9bGoujTZxBaBcqFGNVspDqwrRUxC6AbsEUTCE5KPN3WgBakJHPX3Mvkob2azh4C32j5cBJTLRi",
  "key23": "4MbovZ5sKNHFLKwzhaCTuQCbTNDQjHoq1oj4GfB2Sh7pQ6VdyS8PhmkgrmNEa1586qTnh18JoNsPWGm9TWAmAvTk",
  "key24": "2nnriwTb5r88QRHV2yggHJ7DGipiTxm8inm6q3nbZ6GyhrnTvVvsS2dv7cNTCPns9TXhyqnDkn1SjM1DSVeqiCsT",
  "key25": "o1siCSzxhcKuYFTGaFf5H3FEHy5eDbwGniib8odVQZPwrKsw7HuEqGxeWW51smykiMszz2oWs139HSdCZ9BYG7s",
  "key26": "SP73w72btWtyQ17nvRL4RxL9qwZe2HebQkbfYw3JQmKmNKrGYS6H4RyzinNbdBuWnpNzStzbNZx2WmnnbycDQ6y",
  "key27": "36355a79qZTuNNk6wUH3z7qDLiBKE4T37nByF4NSSau8FXbYBZLZEivm2TodvFSi6hq61ThAo1k78ZszRG15iG9R",
  "key28": "3dhedkREsba8JaVXzdqtdrwFj6gPy9ZcbERGVirB992vddj9CH7LouhJkrQojA4DhuE2bEV1RdihpThBhNSZha7a",
  "key29": "e4DCoaowGsrSoDeC2d2kkQNaqwM8Yuhb87GkP9Hy5WfjuDWBHLuJ2X8y1GjwxRQuTdYSMGW6evAVsDRbxpL3NcH",
  "key30": "spxeSwZNTTZCXQePyJq6Rdf5PVtFu4FKqDsi9J1BAkyzjpGxnYjMsz9Dr5jff1rYRDHRY8epDbpk4ow2wPqSyG9",
  "key31": "3gxv7PAtdj6gopcG9Vu4n8J2UMmJuZdQ86hBBP6P9JEPmuCebgpW6Dfz1GG1QgjnjoZSrXxuhXZHwFw6RqkvnWYc",
  "key32": "ZDey4TVQSHqigR3JrBSmWARyi3tDgprsn1WPfDtahRALRKGrp2R2LKUitt2hp23Zq1NF7CJbcCVrEo1cdBsDx4i",
  "key33": "2dpPQKqsCt8db598AgBSJZjqHHGzGLEAsCJq3DDKKRzJV5yL6DQa6ZUjX6jNHNzmcbJuRzpp24vxQ7zrkhNxrLp3",
  "key34": "w1w384HtjxJPPVmdpsvsquBcaMPE5rPtmBL4VSoa5xKf4kXQBcDNGo93tYr9qJg1fnnwU8J2XvVQKT9v9rV878x",
  "key35": "5NTK4KMt2pXDZNnjB3faVQQ7x1MCmuBZbe21DCHpLa75U2ZHfL3zc95R5jieqRBWX6QVcdtRPgcYu1vRzwD9MbLg",
  "key36": "25zbDHHn2ZDNxAjGQwA2ByW7D3VHacQPwqSSnJKurPWsb73QsYqt1F1w7TeyGjLGXADh5rvXxfYf6vfiz3bA4VMe",
  "key37": "3yRRHptYM9tpws1b6zJRh9eMT2THEBaFW3kJpnGqC6TWp1M6bDEviCnGVeT7vXhVwzpk5ZUeGiWe2hTGh52m3Fxm",
  "key38": "22FvEhG82g6pev9DX4ceMTTa3M7xGTs8Z2tHwtjoAAS4PYG8Bss13PZXyMXi8kbFtwW991D8wmGRUjkWjXCdCrNm",
  "key39": "2kTykk22RN35vNAmBeQ89PVTDcFWqPZsJXdiGa2PmBasKqBmnArqxRAg9XZ8GVMJqUk97RXkT8C2dRaK4CXvYGEe",
  "key40": "JQzv3oZhpQAwmsbtpEtQb5UZ4Gt7jyjWiWsj1oG4e3ZBKkj1vgWb1xNHNKRHrPNuF7TtECCB4dBTsTRqLPv8H2H",
  "key41": "wxSP7YnWT3bACX6MD6oCymqv3HzxKkACtapzSvb4QnCSSFqw6pvgawZEv4gsecjJEnp6jFab8jSrPP2qrqjKBgf",
  "key42": "3z8kRSrW9mT7rdYk2yepE1Gedu3TYcpaeYqymAF12vhpY9V5ELoX5tq7uBfw3Szf4azNSmQZeP6LUdJtLCFWaTx9",
  "key43": "3YVQnY11MjBefH3y1SercrZnhJKJhVF7JkFvKnJtv6Tq63qDeJi32Ako48oLTzH1b5XK7exZgA2JBhSYLipn7Pyu",
  "key44": "5SAGnJ4Wp3JV8Xy7uBqehzs3cyP7sQN4BNe2Lr44qAKBG1WH878A2fmMkQN4HQwosfZFyEAuPSJCg3L5A9WZRGp8"
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

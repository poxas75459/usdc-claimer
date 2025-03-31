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
    "25vyJLZ7PC4581jxc74Q8nzKGm6aZWM1Q9d11HsakbGPPkJZpoyTE6NWEe9Bavix3CdBEKhLzNQLWCfiMZNcfHFL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gJS7fMyp1oGWBM3vxZNuWtDnry6vnk75EQzQ5zFM5ACbNXk8vsKhQsdRZvQrv7UmJQJeiPjwpYgdgnwvUrbRmuE",
  "key1": "3VoSTYPgma4zZLw2gDWxHsL7wWwZwLhHdVTExtwVyn4TcncAwWcmunoPiEHTSzhUp4j38KuYeJxoYHvmLSAV7bzn",
  "key2": "4YYttcQnWMZ4CZdzkpQbBrKHCtjTjaW5SMNCDi2nhrwJKEvMiTsrUoGiqg9fDLRFKs8Mm3zyjkQKiqrWm5kpnvHX",
  "key3": "4sWPqHwfrjaaHbHa1x6BK9deHLFbdKrabR5uemyFhamYMqiyXBzzsH3u1Sj8fh1r9iqeDqLLHHrpDDnehS5U7Kw7",
  "key4": "nKf1sh7B4M2fPUAm5qY1XoZzHbhwQeZxGpw549rDhvpwmxJ1r8tsUiFeNBUjNZWzftxAyxtxzRsZMzPDHmcezc9",
  "key5": "2y8Lgt9qGfNZsViLqhVdvApFqBBazTsy6ADq5UEiAXzqxqZqp8x8o5EMmJfS7ECR4X8RiVdPWP9CqQ5VLetae19w",
  "key6": "2QATpGeamkpwdoxeAioSJArXPHavLrqdj6QmzvcS9rifTuTwNRAzkNAcAJkYJXPNPs4h5fUwBWR9qvCyTeoVrhW5",
  "key7": "yZmtEb1jBPbuDGQQ3DLLDT3z1D7U7Db9XLmpJKsravpUfdqdjSMkCxKxEU2PC6DfbqejMRgqUqmWRuDTqLV1mCt",
  "key8": "45JqM5LBx9zAzef7QxwLUAAkedewErFiYABipjsukskVbCcBYXh8cFr1mjetrV9pMJhvvNLCJnw1EGkXwVFjpHxn",
  "key9": "63jsALhDAZo8uEBZKtHLE9jkwxvWx7cL3Ep3cdChos6LKuw2XDsD3wJgrmhCXbxP1uGqnk6Fv64ibg5z4Lhm27rx",
  "key10": "56UU5Lq6yR1Bzi45di7KnDs1GkNRkUMoSpiLCMDrWNFKuLybVjXcSBQsp2ztRLbuUt17aAHmaN4sVyFZvo6ALN5E",
  "key11": "3qcZq5UbU4gxDje4CGgMhRXQgDVkHHpFATqdAeSXssrMjxZw3jiGLVFcapiysGGKbTs8YdAugju3hDMSA9Lekzne",
  "key12": "4BctvdJRd7AMwP2kre7v136t4i92ZFzQ7WZYjd77ucXBem1WofrDrNg1kdZSZHdn146LxMpYdE4BW5SZ2benHETm",
  "key13": "4ySWzSZDDDzGRhPoFuVx1Hs5pTMr3dyBm1JcE1iZ7ad6ShufLkE9iEuiYGzLHtXA1BAgQxc93eimbjdyanTThkQj",
  "key14": "96v86tKq9sZSguYh71wz34GeG9Um7nmoBiU17UaNrzDs98B3AQvmHA7usk8Nkc8LCYpKpMMi24DnH8aFkLMGWmD",
  "key15": "2sYDkXTqNJnLCP2rwHgYx8mSZ96UeZzf6GfUuM4r9iQt355JnrUc6XvUZVUdiUXdGG9V5HTpcDNXi2PeM3d2qy6e",
  "key16": "2M7jkSrFwoR5MPCfgayCpyT6434fC84YRQoyHmpmyzhaP3qmLnMuH92j35WHjFnB6WtYsApBTy7keZQZDX3StDit",
  "key17": "4tfgwz8Y4ar2XQ38gNwVqR9sCtzr2TfTogaxMBe7TaRezjYbN7f4mpaKfJcxx9aJyWAmVMN8v7fYLt6u6jGJ8VkL",
  "key18": "2vBEbytyQiC5GGHckkk2pejvUeEQP2zxZjTEUPDkgJePAmUipLHkzntsBKf2B7QUvoD9A1kgpeNCB2BGBPZQ4ZWs",
  "key19": "4japsxtmZMRqgQ8xKXnEz986FvKjtmsWN6H9erPnPDFGzaTKaZw1MGe7mZdaH1qH7T3kix9MtZv6xsVStFR1GFup",
  "key20": "574YSJBs3PnZSZb8RGNUagyVYJnWSyU1nNCvgFwJstYzLzGqWLNnZLPc3aWCopvvdxJCpeSXsjd8qzyLhRtPXyW9",
  "key21": "2AZyZEf952iEzdgKrSrqrCdvbtmLkUnvHW2qyuE4kw8Kr8rZmQZBkGKJEit9hKeqjqWJm4yBu9Jd24K8FP5GaDkp",
  "key22": "5CTb8ip4c2boPrf9ZLrsCAZZs85giUNNCnw7GSY5YiSzEerhwH6n9XRdtiRkShqM4dFCh8vtPTLYZLCvab4sCUqu",
  "key23": "4xk7yL7pJZGFh3qAFEYXJsQ3rcFFToPhYxBSYkeWvYZ5yfp1awJPNUHecuu5c2iZNE8xw8AKbkT7f2p9QSbF5Knm",
  "key24": "2xaqV4mu2q9rUaKDFVM9A17nP4oCr52ZSjUDMd8GYS7rNr2j8FvtYrRXYmmdDHbzUewRXeTyxUfvYitGeZQd3Qr4",
  "key25": "4kvREeKi2DJGjMt1cE5XiCM4hoqtJStqsW2b48R3717Lk6Bk6AmQFNo3Bxk1nfXmEB5HfmsvdCzCvnqoSfFPrPLr",
  "key26": "3Lp9P8UfdoHB8mELxNKdVgB1toXt9ougepFSqemhzNdEvLo3xozPK4hNwXvH65HrFwPHn1aXQXgAdUfsR2zUdiTL"
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

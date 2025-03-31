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
    "594mrF49Gi2YecsCbVAvwpcWCMhuk1WHxjFS7MxrLfnFUZXHc2EVmzPrMwmNkChSC7YEUVX1Voxe2RhqrFe59jb9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "71u1CzkPN11rFjqXMNWpuazuCBrABX8hKcJTkP9t1iRwr7KAHMxbx8WSCuRnYpYaPLNAJQTwNcgSUeAJp9WQB1h",
  "key1": "3F2TwL7Db6Qx2LiLJzgvmstGoDmP4MkWc4xxGEPopQPCiU4e2bbWZqi2C682sKo8nNSW7V8QyDuqCEiKyNfSG9Gd",
  "key2": "3Ka7xPg3ne1k953AEyxr3Wgf697cMsbDHeB9udFosi756iYC1WC5L3xnFRJmm1rdsR17h16XkU4etDR2HsLxnsrX",
  "key3": "59owzTTsHqNR8o8ieTX76ncoinnxqEdtdGibUgMEZc2tHfmdYioyWdbV6Vzz8izE2bnqUHKUxo8VrnVGVgRjecFZ",
  "key4": "5JKXLyucmn7HAbTrrcLMMkSpWJAtJacZ7ygSdueX8eV2CEcDbHnieiZEaMcg4qMDigDqyE6yybYEgBmwVZ7gaNrC",
  "key5": "MtD1Tu11vPyX7UdARNg69ptixDaiwkKpfJJ8LJ6yZAeQVofYzXeXnnHW95ieTPAPVFPiL1kecmc3AsZ6sSU38Ue",
  "key6": "aDxwrdn1gscLorscYwDaf8xbtWJYVmjnXsr9dQGBCwSP2wF4gvWKLtXAk6VTKaUskMZMJppn2rCocVKfsP9Qfjy",
  "key7": "2AtbexNMQ5Kiak2yunjsYs4ooTD4itxDvdJrxbHkovVJMvvzfAH4CSRqzXBpvqRyKtjSyk4jQQa84PRqVMHBeyFN",
  "key8": "51oKCeKXSJ4Ynq5fRZPeozydwprBSZ2SAW1nGyUy35QkXvj82wwBVqiFSmYm2twKWyRvNQ3iCBGjmC97Tf3hF2eT",
  "key9": "3dFzeeffNAPKL4kGWzaXyGNQq8VQ5SRchrmzD5yJEj663rGVycg7tvMgcDBBJ4xRgEm4iysDkUqKR9GT96Lpa9kr",
  "key10": "4Xix3ytgMD347xv5tmwJSt6NDGJb8BKvg6u7qTGa4YcWwiNyX7WqZ96ui2P7dqmAqT1LEA1BnVSgeNbh4ZtESsng",
  "key11": "oGiHH8ZqWjibGsDc2M2GS6GDHt8URksGQzhimnTrM7ms7QKL8tq3ZZbnTmxWiX3yBpzaGrHwLv4fU7na1Jd3j11",
  "key12": "6UkdyohoFVfiAnfnnnvTuWuhKHoHHr7DKqwZ5NyyfJUKFYaxEJ1Lyyr2SS9Jm7X1n69YuPMUexsMVzyoixdiFa5",
  "key13": "2KdpdSqhEX6nwk7kPzBMQBCNNZvZvB5nJFDPD4MinV9ryRk4q8orM5cWA8ZK7wgXoKRHYhCzx8w7fUfCjZsMXQhu",
  "key14": "2ySbEMBTWhvWC1ZYhcKeRrXqB7RCUr4r6ghLw1nx3TbysuMZUS9edJTYerHdu1CJKs1XR2kjxGDybKM83x4zqFgi",
  "key15": "fRL8nKYZaPmrx1nwbLstKD7fXxEPNG5Qu8Jwh36qHD8fgBJKCA84sb7xbEKQwJ1DUcGNTZLH92Ex6AxyUHXmRue",
  "key16": "3oBXdeSgT63fgT1DtoP4jx3HsKogFU8pfJHS5zuBnJoGgDsYJ7AmEdNc1WP7WtXKqmgWEmepicmaVn5tP7BbXj6a",
  "key17": "2hPZNC1jCnaAhqJ6WBEnyTJcnZXVrq9oCfGxbeQr5PQcAnoHJKqz2ntX3JyoMoquL3ho7uHQfGL3a3VWrjtdtixS",
  "key18": "xQWQfV92ZXUikaSBsm5bNshWLXCWAYCBbQTw8jzWpdw1TjqMngSXi4vUx3RLf2yJFWiMYqxkwJ2r5AgP8NnH3DN",
  "key19": "2YRuaLfW4eLMFcJSSEajLw2g5qh6cgqKZQfsxJ7H8tKyUKF2rugWUX82GqQEyRr4yJnnU8wdtt4EVPb7qY2CshJR",
  "key20": "2WoLENeLN7qDwhPggbEZaGVMoVaRJp6EZTL4KXi4ZaAW5jiuH2VngUgVqusrxspPsPB9PgMFn42eaZ1F9zUMAW8T",
  "key21": "VT2y1LjoKpQQ4iSnRFi5UykTm6q1xEeyUa8CtaWkNRdFAhL3ghcHaD1E8zYAx5gMcXbqqwViTe4b2xuUnaAMbNq",
  "key22": "65HcxzygCadVbCeXfuLWb1VtWfEqT8b2QQMujbvtHmHr8U88e1dkGfLHGRyAhk7wqZmeBWr4NjuAU6c6Kn5jZtwt",
  "key23": "bMYbhu3VgV8D7zQk2xKppad8ptGHbar1KhdWpKSFuuBN5QZAN37BPswJwKEnTeUpP5Ka1mZRMEwjizontHgz55X",
  "key24": "3TFWMw8UGzZb1ga8nAqBfoneYaEVKFKQPxKbkDqzu1vVdMYJTJsHFYqGeELKpLpEbqTkuUtELvTWT8KqxazpnAs2",
  "key25": "43uLSZD8QVdGatonPU3jeukKVMjKQ4oSHHQq7Gpy8jnYAgJ87iJ9H9JnopKckBu4XCJkGtPjebgmsxASm9hGZW5x",
  "key26": "5iicnqozgVyPiNMC7J5Q6ZRj65kkKz1WpcyKDvNinmpk4VSMYcUUtdPsBKPF2B7j4ih64MqcK6yGieQYa7w8YGV8",
  "key27": "3AL9QqGAeB6nzk1mVGwBQYD89UNhQBE3orUS34WXGNCEgNvMTQDfaVoyifCgg1UqQU51rHodNXtsW9jYtYAbW3sw"
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

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
    "4yyruW5ed2GfQFyi9pdE9ButgVK89feRLBwwxBWLdPUPfMUsgscxQLmfKScjjAhCa6gpTRuyC96BQHwFF6iXJYL8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wLJ2EqStndPByonZ814uqdqbZVJkPHmrxLfUubzupmYvVJX5TEBUziyctpYNH53NcNuuJQkwyEPTr1uc3gfc7Z2",
  "key1": "Lh4DEXpAKNqnjRq41AcNEuVyPCaUFiTfKVMkXdiG8VjHB9jTsz28furj87gMn7kwXE2Kt7GfcNLfWiaVAZ82qeG",
  "key2": "Jb7vTXKLVYGZUTju6H98tsJaCNXtLPErvH9dMJDAcgLwePdN6yr8obLGqfvmSmjULtXT9MSMpU1YiBnN7qB8vfd",
  "key3": "58SXQdzDAQbL57iCrvSK3gCqh5VLavFu8uwQgksvNLtzAPmrTByQWrqf95QTJRKjHR9tX486u9coJQJpKopc8uwk",
  "key4": "48rzpkDw3deea4qCGVr74upQWFqSqzpMmhxbpQGNfrXj1svNeiTAu66RHVN537af5fh8BpdF3diEj3D5G2TKHo4Q",
  "key5": "3ckgsLEae7w6qwi3pQvCnZCVGhqavB8CKqQcpyhVLNifHydczPjkHUwvBGLcRjzpgTGQgUigLXQ7wkQkAS9SppEg",
  "key6": "28eTymKHSC737GFQB8j5MMEMsGDBPN18AumNuVCDhMVAmqsGEGSk1EidiT3DMiy2T1m74ovRr11ghmMZnYdKZY9B",
  "key7": "eHZ9PV2mpAaZqcrBpU6LbvRgy6S3bWn5TFUhbsFbXGk2f1fJLAaLwTf3S6Nkmcu3EiNYbZXc4rDdV3qgPyuA64y",
  "key8": "3KgHWMoa4JUu3UQmBgfqybZqewTecC7mAai6yVv6pxzNMQta7mLgYAaCfQ2ScA7admR28Gzi2QnmL54XJD6XFc8j",
  "key9": "srrJpFAPEbF1YQXDxvZmpnr6mSX3h9oRSDMx5hxgvfxpYZcNGN5eiMXjTKVZ6Bku4pz21ftqSNN46Xo3mxuWoCA",
  "key10": "47gqrQ52tpQcbYZbQnRdBs5nDma7sRbrAxPYNaxC2xdD2oERBghYfWVEQBKeHy6S8ZZXt6UafLhg6uWU3tBhqARg",
  "key11": "4hTXKFdsdGhX5P4bVx4yV8BG9WTdYNrpLEc51sraK2Bm7PpjAJr1uJKHWjqfhMHDEbMqdUqntTcYb3DyCfeVzvgJ",
  "key12": "2pU65qNZ1moMiEpchHxJrsrFHQZu8qtPix57ntMvGF3ere6jFyzSjtrSjXed1haEvCBzj8LAzs3H2GEFHFN94Ptd",
  "key13": "5mSbEpwRzpBExa5kv8Vmeg9M8UJC2MEGUYnv5wYdMmhshkWAUAdcDDrPSc3ifg1hcx64ep5GMEuhZ5KFeh47Fafw",
  "key14": "2G1xejJWPfh1BjPFkv3hwrg3vgdgRHnBqXsEwsRbdFWPJkpjEuUVmRz6QuC65wsSsTyfQAr2BfGYBFFJBHAh8KLy",
  "key15": "3WrbPz5ELuVn1k4UyAyopaKTSUMphsqfDgJ2MrmNaiqFth4SaMjZobRqLSgwWjPVMLsVtakw2wUgFxoH2FcHAqTe",
  "key16": "5Y4SuqB3NKQPajGA7FNg83Qn1A2k1RQ9Sz9rCHDkwAKfPCsNQHsoZNWcin6H11ieNndd3BY6j1MoAoGjJ56snu5X",
  "key17": "4JpebhC2WfmjYsv9ZUWVuXX68zW4ZmUtGsnqcPoS78H8dUHJdbHZm9uVzTxjkpEZgdKPmzzAPjQWX5XfTzffBT5",
  "key18": "2KHNnjMcDSJ6c7DX1Bk5nGCFiALPhQj3GM5QLWZnjY3uQ1mQu7kGiZ7iGjBCvbkLmDZHxpgdhY3ztKT8g4zYZFnH",
  "key19": "4ZeYZL1CGYhzG8LftPyJZZqpkwoFtTpZ3PCW4UTMows8nPxsk4tXF8ZHDaj9pnE5m75S1ABQQSQLhGTtfGzggk8V",
  "key20": "4NYVPAJe6MgZtynM9rzDd1kadQZFyYNK1b6HKBj62rrS4srjRaQdMUXS32TqmD6tzvdYAsDFQTdTVFGSTsDZASLB",
  "key21": "2VJsTpTUsbkELpuZsRRDbjhED2eU14fvKzA9MyUTqzU15ihRGwLXiMD9wWb9VtLDTVT4vqX3WEWkJ5rLGYDirkBq",
  "key22": "5Kp1LD1L1FQhf29r5MoSEy8Zw6myZzZrJ52eAAs8fwtFLF7p293h7nKp3HTg65769AV4JPSwxkbHphhb9FZbz8YU",
  "key23": "3P4DNdtECtnYa8inhGGL3Lk29fJ1XnNJUtorwuFoMBft2FGqRXCv9eS4zCLq5kGFVYF6HGEi9Fks4QHVwA79tTiU",
  "key24": "ise65XUig3czHx9QeLed3J42MPohpb57oWh3ViTbF15s51KYAniz3cGrcejeS8YeX1QENjZ9MRFDFMnJ8wG6mXf"
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

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
    "F6Zg4Gg6i8Szo45QzVfQqqCRHAa2hoBfvo2GbjXDoFdtCYfZw6Jp7giPMBDu6rBmrNsrnzkxg9v1kJrwkNvxHsr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q72zpfnQYWY9ZUDZbGkDMmoge949gXF2cwwqgvajZAbuZM2aBdA7reAriAwSmjrcUWSFa5qy4gtVNB9PknLZeUk",
  "key1": "4N6oHbsKefGoJArKRgLpuiEuAFTVn9y4MMTvBt1PDj3bsgSfH4eLYHgULNSTE9vFaUAEpzw1Utc2FHofAYh2q6Ri",
  "key2": "4BL3ftieW2fjYPf2ZV29Le8b1WZVaoFs43Vd8yv9yUSbzeKhuoKy2ZpUJSMXmCGcMgZwQ8jbAknWYvgRajY92g1i",
  "key3": "4VGSMEcxociVu7qHnZrMGpMhkjtUigb1CzZDMtMuuKQkHPoSuBRAbY8FVVjno9njnuTVy1sogR4CT2YkUKPzK1eA",
  "key4": "3f9gkLoXvsBQ1kQJAunJyXRgd9PRvD24EXQk73ptzkuA2Dm2hgQ5d1pHBfPdPfXd3YJyG7HbD7fTXDi89pAk5QEE",
  "key5": "32dd6UFi9p43hgPNjppHLXpQfC1rpUBtquzKrBJW8UuUEjn58MBLk9RdWqS3Co6Cv1XDknZ7TMrjejQc9kqFTDcb",
  "key6": "2AKp5R84mHLMzzNohQnyzbgWg6mtxxT6mCRWLMFbKiusQMMTcMGsaJ9dAjBNgh5C2P3WnqU3ST7vMjZ3ZV91PXjU",
  "key7": "3cA96HzVuQE2MKkQnU8oNdSr143jQEh9wxkWygJuSxVEhLQkfVe9XmtdWRzA8uMNjjZzxvbCLHzsaE2tjMvoCr9M",
  "key8": "3D6mdHpaGVEovwZjeUikDz7GMQdC2DkqrhU1Ei1gqF39TinUJ8SJcPPt3FeXvHSFiaXLfPbCnPtEsn17JUZqQZbH",
  "key9": "3oKxXQiCfcQi54yB3yaLYrRtxdH1tZSydDXcX4J7KGe7Z3XshX9MLo7Uu2oViGDZu15akQoav5wr32nt4RRzXYFa",
  "key10": "2Bub8ocGoiDQKoAjazdxjB7niizUVpz2aUCQvGYcMpVqn98eDSKFkNeJ4HTQbvzUNZot5gieuBtruA3e7gERccLp",
  "key11": "wyG8P1gPWMbCeUoKwVBL3aHbSd1exgaupdq98F9Q4uXFVTa1VnJAJvMiDArYgwzwXFSMFn3nSBV1n565FPhSwjh",
  "key12": "3KZUp2XuekTfQuXLYwcsknZyXBGjfhiYt1WtWXquuA3vH4Cpf4U9EVma6m1XgpJmhDz5ptyEwUrmYUtBB9nF849J",
  "key13": "3446ChNW9h8XjCUByhMgC8PZbsLP1Su3mnyCULsBg8pwXUQEHawhjbjcNvo2VBf16WbX2ZYe897CNgxL9QBQZgcy",
  "key14": "4h1retC3CK1QXy1FnUsmyguWSaGM9Lk7R6F7nSgyPWoJ83p7dDc9VgH8FGos8BA2Uo3YxELJGytnETjNii9aKbND",
  "key15": "2Do84R1Dw4Y7k8KywQK36hZuCXrAgaNAAmaHCP6q2rHHRSxkbpPU5SdazDbgfeD8AMGDA6HkWXDkZtzNhcc4qdx6",
  "key16": "H3dXW5qwRcvZh6GHWHMP2agRWhxWWnLReU46923RCSvTTRbWMdaYpbaZAaWrph9m1PmC8MExNaJAm5fGtijVLuX",
  "key17": "34Ha3VecyW23oLLbvsQWHTirA1nJ2EhZCEL1czHGhh2t3q4HweYt9WT9rKMqoPasK88WQB4S7BrEdncKrggFH1d5",
  "key18": "p3AD1ZJc7kVfhWZ56XS8dYiztPCYTV1e7uhVxJ74W1RYYmXSHey7PskcBbDNu5Rpge1ED7sTFXhVrheQ2pejYQe",
  "key19": "2c6DEzjTFwNSWrMBoXDoxAZ3DqYfPc6pEJHGef3XtyTXe8LKrjxRbfyCzzZjgtwwtiTiFbkKpASq5fFwDguZ3EoM",
  "key20": "3LSWdJ2Rw8oRS84XdVh95hq59T4tdjHmjTW3kisUwPyNn4BAL6LhuSPoXZKXUdtwqBJhhHWGwHWeoWfG9XVSQz14",
  "key21": "36pvM8jMD9v2VEkWS195SAbyjhD3oqd2QFuorjuKCKhayJDifca2zyi5zdy76oUzSDFbjjz1VK1FyFH7KYEwHnSM",
  "key22": "2awzayS4M5ayFaxhB53VNgvusRwWkjesnU6PRG9no7nWUvvDeyEgYKmmJL7wp34uzLVQUBDEpKxB8yPLi3b2HVDq",
  "key23": "44qYiBPyitpUvepxSDAFTKkeBt5DCRKw1YTTaCSLw8UsetexeJqdJQK78bhJq5J9o2RKaR6KH4WhBVY9oghC6TBt",
  "key24": "56Broqpwy2E1Dg3TVCRtDEeSg7Bmh4avnVvSaaUA1KYQmjsMh3XhhpnZ1UAU6AidRdGRPy6Z99nezvqieNuBZQmn",
  "key25": "2o1NroivzK87KVvsMNUynAVdGcjCv9MYq9BpXftrfi7u5HstR9rRcDbWsE6PSUuB2TgW8TJYRBW1KkBQZ2ELTQBD",
  "key26": "kwiLVQhJoytpwezvJv5XjknpjAughNg5x1dwq6NBk4MAnHpTLGF4eE17r1A6ovW1v5b8PawjtudrdgLdNMabMQV"
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

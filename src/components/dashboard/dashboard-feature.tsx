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
    "2Fo6PQAFCJWad3zDaC4JZuavSGSdYiTER7x99NU1BKrSPv8poS6foJWSA4FRP4eyRsFcLTKw5XxMqNGsPThGrcid"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jaZ2atnJ28KJqJVynJqmrZsWtERexGbFH55RxCbwSMBg6rtUKx3XXfVB4cLraY1aTdQvNJygB1xa3ooDXBuZKfF",
  "key1": "4WTt4gDbTKrD2XvpsgEcMwwk4vLSkinUQ1oKifEWqgQzrRyDFcQS8bqmv3HVMWuUjSyty7KTUZXWJQUvvGyx9cJq",
  "key2": "xy22KQxYTLH5NAKGYmzQomQvJhmSrWbwAQByr9oTak32kSeSvhFPR7to1tzaeaArkkgxGpYQGT38Li4VuCBCDuM",
  "key3": "38kQA4qfkpnbG1Kj69vCwqYdqgh7G6HSuQHvJLAvYiUtvrNTWPYhtRNzq23ZKELBKyLGsKrepqSS2WyDSf8D7fqB",
  "key4": "2YE2DhCp5asYqXiHYxPbutJUkTEpz5TQHFCHeK7Usmas7TXafMbP7Q8buqZeXAhmycpzqZgpcHffJQQ9D37wxwXz",
  "key5": "5wfYvjwFCSiYYfsebKJ1B1VPgSDe88PpbYMAoUNzgHyFCeHNMCP3MYrz1pHpGNZF1V5pP4WwJW2iyPn4f4xAYwPs",
  "key6": "4ySdKbVcNA6y1NujmXkcf7bYusquBpU5YEFKXaJXmu4nejEmJuxPV5W59uqWbyMWH8kMtg7wV1zzy3rxvm8rz3Zt",
  "key7": "ggtXZ2wNEVrFgTbpTpmELMDmqDW2PrRyYksrsHZzjn54evdxjN4NPKSLWRM5FfSWA3WtYhW2S9JsPJ4AVCVr7tm",
  "key8": "5M384pG1KS9tsLuSukT15vwM76SFHa2RU6uhSKfkZCjLypR6msAvDhrmi6LKdr1WwjvkCtuVzPDHjr9es3U2RF7V",
  "key9": "5zms6SvcbmY64bfFArjquH6ec9BJjTUGCYRKmmnyppLFpvQssp4p9RP1vRGyi9nZ6CfgsmFNtAoLsmKijaRBDqcm",
  "key10": "28Z87uyfDiMwwWcTBkZh3qP6cZLWea3zyrsqUeLbU4hxHru6RPTespPXBSVy8KTv15TLjU3rfqG77uTkt4wGtmEt",
  "key11": "4Y1EtBmK9cqSWxFDjPs1FNvVFo1U8Lce23rJPasa57cWCv76dsEb32HSe1rcEBqg2uK9KJLitCCAeeXt8fNMvpQT",
  "key12": "4rjmNoCfNHxCrBh84DZ8MKnD3h84bxMdznDZcC3morq7M1eatjqvn3YQ9Tivef7FUdhn5drKW952fFnfroLfhfQH",
  "key13": "2JZf7Xkq4rpCr5ufiGHcASoMZAv6PsT7DPohSXo4mYUUx3Rk7CVGqSq3JvesbcZVdxRrVoawiLP52X3d7HQAWD4s",
  "key14": "33d2s88vU7ZUQoRmiJiczqwMyjFLAbYc1APUNjD7SptvXp7fwo8adAiE1r75UHqdh59UhweU2Pvj1TUnBk3q91HD",
  "key15": "2RYmMjQhVnCsjRHmEQgQLdD4Z8cnzF6v72hcxQNesnXBGTRHYS3YhoQnL16ro3vMtyVm5v9TLwBLpFoqWsNywACb",
  "key16": "4gFHc3Pt7hmk4qG1CRYMA5oUa6BV4nxj9fRyZtgBFqD8CZZKDr1Mhio419N9CEiVZLTvH7a3DVEaJu8Rw7fgLH15",
  "key17": "3ZqC3rG6VirLNwRHaTVhtX2PvFR4ocfreBTmhQMdcW2PFsoCPBrTEkuAVWk2DwNX9esBdLWo84mTN3up3i4T8aL3",
  "key18": "w5aaTd61GUu3htNsAjxBYigFUdEfeNahhsNJ4k4DejpcGLnPU6ikRGmTjMnvmq45eV4qpUV4ZL2TXLiUE9N6UNb",
  "key19": "49m5LfgN5V5arK1mbwyG8JTHuEpBxqZuPNu3qCkk8S8z1jAzYQErxFjgvCnSKmATN4hdWboKZ5hXjVi3gZAqbjBD",
  "key20": "5e8eG7pHXn46ZTw2v6sUWCNtn4iH7UUREuPSkbAdAKiVG6TV3UAwF6Ut4GgEJHPgcmeBeDb3fHPvgZDrCT3TbfhB",
  "key21": "59JExgcsTDHKfkwk85ZkMVmgWNZdZ449WQbravHhEqP6vB65ARgng3sw5RnL8fLeU2JN82zcX3pmmfZPNrySoAeM",
  "key22": "2vH3bpyN8S36fXiGD1zsecbt77tyUpWW5GoMUReuMt75vvpRjDxq2ZUcteAtBovQKDutD8sMNrbGWZZwQebPkp5h",
  "key23": "3T7oEhmCcVoK2zy3CkTkNf3f9eyvV1AX3o1i786Lk4foS5fV4yAVLZzazboGYCVi1Yiux1isZiurfYv6GQasqGEm",
  "key24": "5yPBq6MiXPGvLT2HrnzWHea5UFsDdi9aMtBAJ7UPMfTAb78AMXcVYmpREqvUj7iBND52efYicNas84thHCeyyUJw",
  "key25": "2mcUZ68crwcULwatF4GRwgZvPE78iseiUC9AwYmn8uB28wiYHpXvb4uyJy6qvhnJSBsHnYU99oMuZGkv2pFxcRyK",
  "key26": "2HDJANC8dZSzJD1NXSbxEAmDrFNX5vqKBbT77JVb8SvJT22FR24kCm7oYLSXdmKNfUKJo4DpVWgYs9w6KpwkKYkE",
  "key27": "3Ly3drRFyBNpH2ErYPoeoUa15ndtFbSiTo5GyoA1chAj1mEcjJvwtY4Tz2N2xaCTiFpQUGi3z5AJJQFshgVXDVY2"
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

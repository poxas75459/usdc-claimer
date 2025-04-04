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
    "33ZbJPfnEaRH5JRzvic4ATXCpzC3RifujVqK82rFigmjaRWjQpudKiq5Dxw2hDVD2ppmy8beZyQuSjYnY6ynriy3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "447FYWYfCNZsdLiKjaVrGMin7X6se6859JxfM3YbxHor8QCYYSghGnrMCsGEVxxkAhPLqRFVoitgkHVafWQhtDzY",
  "key1": "3WmkbGMtS8zh8nouQAhrk84n5ZSn2GzqMmoZCtsKfdTEKKQopTGfRkMSp4Qq2Geksx81WCQb2bRcLsRHqiGbwNNw",
  "key2": "2hBJURELN3F5AgkQFZPpcZxafMaZiopZciBqLQsQWmPcNjGv4xgzzqCrUDDvk47i8tvWdHiegFRR5kkb6K3XdoR4",
  "key3": "2rQGMYxZ6cG1qbSvG6PGSKAKouJFV2ZYFDY7aBJVtVj1ZK9ftjgrwxdJPE6Wwzy9bhVLF5nNEa1Mhwe8dwGarsjR",
  "key4": "EmFPsRZdqbnGM6Xyu871avWDnpvUhEPiepWPhv5csYEbGmi6tVatdJydJSr3bxNoBZbX6HNb5vzKn1RmYLSfZQw",
  "key5": "5Cdr6HkjjLrL7u3f4dGpffheeWxnGKKwQW99oK6U9z4Bh95XZQL2XxBgvAekLHZhHSvBcWkuRLQ9Xs19kMHgvAHL",
  "key6": "2tjBkfAKV3aHq6ewUrM45rDP314LSPMPEF1U6nJ89V3YFVfNZ16jSkSf6TKkddWzVTudtGbHNkTSunY7E5MaLHsU",
  "key7": "31ANHjiChh9JVc7mmZJixU1vhA6PmXdLe7SR1NgctRWoHPgFquDkvoDqqKHZGudHccFxPZYmCuSJkYLtAUe4bCGa",
  "key8": "5TgUh5ijbmXAKTkrgH1teSaekAYoAaTBdc6NiMKKmnd3VRbFZBpNmcoTXgv7tTQaHuKiFvaRhSpA9MawhuJECzvy",
  "key9": "5QxbeqdvvSnq736GZEbqyFY41g7VSBe1cfawhsffrgo7eFaSbnGeqqvqoihyTzaMX9dByBwkogeyUTbnTCDSdgpD",
  "key10": "4UswkVpodEBcsuWNVecKHDPjaeC68CEf7tWYobMrPz9UXxd5yTaoQ8tJBd5HKC3wKv4tPruNLLF2WV5wwHvyqPP5",
  "key11": "S14eY7ZYakNHhTBjv4Ld4fqKKLmn6r247jxi1vPSyi44KTg65P5ZHTBfokSZ3NsZeFUYknoxVJ25JVcHmMXQVe8",
  "key12": "g29zN2BDUeBd53Hq2ezRh8d3gGcy41nU8VY67yLA95EDh5SJ2hm7endJpLHJ8JMsY6S1FwME9qZ2DW2NYyewYSC",
  "key13": "4xL4BGaXUfWrDJV1kgxwVLhANPZpA34VSXtyuhzfeJCMQN5xoLkEYcftEJAsiLMd52kwtn7D4HKowgjTif3rwpA9",
  "key14": "4cAEGPB3mMksQPvjQGMf7HufvdSYCj7ebc9kpMLfeT1MFx3iaDRATx4RD41UeV1tHwU9KeKGv7wV6J896a992NRA",
  "key15": "2QtpEzqUdnAeTk1bAfiMsAHNTM32m6Lag9JFBzVKTRKBBsKBRw7wif6hJ7CjiVTrAcowEJPLsgp9btHaKRZicamU",
  "key16": "SNo9y1A5J7TwJTbUMZWgWfyBCsKhwt6VjgkMCW6VbTD398BkTrxrwAJXkrEXWxfNQ5PGxaKtgpHeuNzsGBgyLTd",
  "key17": "5nfPnUd71qRKHe22115gHf7hfSk9CQ2r7e7saWNskZutktDYFHTPJSnCxHjvNZN5BEBobWa8UWSjF4ca3Uk2CYSM",
  "key18": "5XPqrkLE4uZAr52derEQDhpr2zyJfEGoBcSAgv1d1gV4C3yJXX5WAQJhgKtG6K5jHTHXaSGJZX6vCqmn2Y567hXA",
  "key19": "5LScBgWwbFZEiAdu1BbB7moBSs4quzuEBmCPXDoPwTKDxE89E83WSWtJj7jKX9KgyWHTrhVN9cdJwutzyL9V1k7H",
  "key20": "ZzCQF2NfYrxVHX2wm3ZKXMF3E2hjTbVAyPPLea4CXgSQY6w3UJdmuDt5qJv5GbuJUX3yqEs6vumz5xbQxUpUURt",
  "key21": "3Sop4xq8BtztsohJzurpADsDC679fcUcy4QXmPL6SVFkprCqQKkE74vFLkEmZQwAXkuMKeQiByzQK31bjuDUEfKZ",
  "key22": "4x7Wjc3LqjgeDhZTrfDav8pE4u2KW3ZHDGYugmR85DHEswGCZTRNsxRtD4XM8GJuxmPvWxEDxYJfKf73U31Byhsd",
  "key23": "2QktdDEggyLvZVQBAgLHku29sCVL59eEcrE6yEYALuu52FmUMQGpGnwmQbzuLr9UrqBApwrtPewQrwRKWySDLxNr",
  "key24": "4qJ1XgkLsQ2XapTbNv6Vamf3GUJLc1cv7NuNeY5u4pwBUsNFduJmyWvjTnxX87wq4KK4c1Cx9kdcdDXTUQRthB75",
  "key25": "ssvLhjGPHu3yc3aXzm3xK34AFayZose7wsqoJ6s6qjHXALyLvhNKCCgVg24ipPqNBkq9MoBQf1q8RdxZ4MpQVRz",
  "key26": "xHyZq3Nim12oXmh235FXsMFpB2v8JWVJB6BLwLQxxPgsDpCgDCV5vdRbrjgudtQmPuJfLKwEZAqDsMctCLLzweL",
  "key27": "T12UDzQEUv3NrioSReoCqF3Q8mJeibkgkvbPKnqwaBccJdsDf2Hy48vH83nLk5UwhUytrx8MZz2brFJm6qcqrC1",
  "key28": "5zjDaTVMSBdnu2q76eFhMr3nJdha3WJjTq3tmVQsVg4DGEVnxKvfJyR1RQzmfF3vbb55Z37ZH4ktLQJijz5ujL5Q",
  "key29": "3x2KyhQHh5wLZQncwfuYq3DRCH9NtZawuFJV3Wy6QVDPJz7icYQ9noFgWx5zTjz79UtZeyyCmWRcHdLL7Z7J55Vk",
  "key30": "5krV2yz1eowaJKy29tgLXxMPstvPFZCAXcroqomtxN3ksKSBD8fR5rYWRgytjhcggmbtE3YA9Fg4zYhxpvMAn8ao",
  "key31": "yEMymBV4sBAELHvSpV8XPW84Pzzs65ak9mC9MXvA9fs98X6VNYBEikmSH5ZNh6C2wKf6xhhDKBhRfkC3WKxnq5R",
  "key32": "2obogUr7eGDxETttAGuedGmJeAY5UsaFbyoY5U8C2BHhzdFFBot6sQ1XfqhEh1vxZsnC7jngQsAFnPAMuci4Gq4m"
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

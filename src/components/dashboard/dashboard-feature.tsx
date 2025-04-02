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
    "5btdz7CUxg9ym42GRcptFfRp4VXYWindXLaf81mwb3jFRvymKqYZNUCiysQafuLJFPHhSH1aihMsm9AtiXvCz5vW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ShdPpJBBvAFGcaMjARdWFmLukub1QBCmcwjWXppzzJen1jZDMqvotgcXgo9jbkCpPLfmrBMqpNKQVMfsK1veiBP",
  "key1": "3JXsMHngVB9wvCqEbFGUbgRVo7gXaH6jXWDjwq15buCoocgovhRQC5DXptErp79YQ5PXSGNjhSyscC2UdfWLeGBW",
  "key2": "2BnRfdB8mkz2GBVK4cKrSnMv7pkukDvLYUMfBMPyE55TCubxvNYaQsCeuwiUfdJLZGutGN7sUtKsuq9LFK9YAhAS",
  "key3": "5o359KQQqXjk7dyo7su58bHqaBt8sM3aKxXNuuEAT9ShaPTq5vaJrQETTcWdeFGcyh7T4mxxSnRYtZh2x2PSz5Hm",
  "key4": "4ABrgPw8Ko8VLy6UYXCcckVyutdq4siZnvCpVuHzpPne3d8xrjtYhN1sJ8jhiy54sWv5t8nu7iV8ntS3RWcuLt4n",
  "key5": "BMgb4rtahzjsKbLkqbhX5ogparKvB8e7Vh5dNJFuVg4QKPnk6NRMSQ82GexEb4Dd7gFbs65SrBF5TKfbahoEkib",
  "key6": "5kozcpHiVHYUAQvg3Fi5h23Bdi3RE1JKWtDeWv6Z6kQsgSGrQVPfBg9Byq1FDHaGb9JmA5jr18LhJsdbjZkGRY7t",
  "key7": "4kfSCgU2Y1XvNVTB5AupfeUTWrVExCG6mHhSR97epydjRSXARs3KHeL8mp712gjX29Xkzz9gwNLziHRzaQipdDDh",
  "key8": "DAbrvfhdGKrYUbqbZS1E683wXqK6QCtFukviYGfZ8e4QCpDoA2PT8xwH1ZyW2ebNs39ofSJGTzvdRAEWHUbma3M",
  "key9": "BUHiHBEFP5CdBqhZNVAfbg2gZ2xoyaDApXthqmB7rNzzbUppovkBw8SA4mW4BydPWy9u8aj9HYrV3XRSB3AFB4t",
  "key10": "3JWvoCZ7zUibEzUq8K3joZ8RYRZnSmxdTziNnS6h66XXZkxArFHC2N4QAKvBJkt2bzVwXY6k1Xwyos45VJNuz54h",
  "key11": "2r5xLcSbgEmj7dKLS5zF1oDnG5xoconyK5com964nWq4hv2UnqcLqHSxcCd8cjYfpt9AtTLPpUH4yhMfsjD81856",
  "key12": "44WFdsicCD6kyj64MUmke1FzX8MEurEd8eJC2Mq55VWqDgLHgAqWSDC9eTkSs2kzkpiVmk87TwUdxTGsbB3nSECx",
  "key13": "2BFapeFKNPpbxLYq52VLDgbbD6mrLpUpXZ1JzMCXQ43PjAxmcthoSQELTuZjAWstJSTgou5SG9JjcQFTBX44k1sa",
  "key14": "4jkqaEjMpsNzVPJ9Sx8ut2n5j6U2S8hF8nud7sKcXQJ5pVdo8bRcNAxenWTCq9ds39b545WGBGN2JkNJRZmY4Crh",
  "key15": "4LzLcFq5bThcG4hYN1YyzeUsKRnj8EhGfJE3E3vXEYhSpSuigZRc219VEdoJUSaELkZV17xCctAHXiMLfgjd3Awi",
  "key16": "2bNuHCijKbFvst2NHJCiFwD7PAbkMNXvPm8ywmM5fbWUUojb5z5NiyCtmtvsoEnjzjxg8P3WvPFJUTxpYjJ5vh1j",
  "key17": "2xvR56scvRTZ569LTniA6sL5E64gZT6qKQ8otDuepPDqccKGT8m5tdiAsahc8q3DBQAJA94kfxJVEwggCy19YQ2w",
  "key18": "4jBZ86K8tk1CGL8PTBb9dKDiTYjk6Vd3QigTjif7jTwCziKSA9qEfZm7jp9V4teAnNQLxjmaVe2vWMq7jj65yWst",
  "key19": "pdk72ihssrLLmsbYdGzdChHzGEbpytZpyDQ3CpwiNY4DV5dW8mutwbRwKLbJV7hMj11gphrdaPKRGGWbARW7QpK",
  "key20": "hoaRRoKaU1tzgmRwv2K2kKQMnhYXefaXsRGQ9UE2iL3aETFYVyznYUEcXZfvzq3Ccs4w7e38mQe2cPBYosNnUrN",
  "key21": "4iqg9ii5nPAyvrnaVYqsVkemcKzVGTbYABqiPzpJj4VJ2GyDkoWy7jbGrSd2bWK976pskVUo7MJWpb2DLeiCCvCV",
  "key22": "5a84jucd9ix3Ltur6yX3shDBviAP39n3YDYtq89AMK1MkYZDArnFscxJyLq2fUUJ8Esi6G6UiuxduwuNGcDqzEXs",
  "key23": "mtJKfJaZKzHiHFJ57pSWExxjaWsk1FJjLX9ALzSjnNFpY9GXxby2yFjmU6XFMZPjchttdPcQLtnd3vEZtCZp9yJ",
  "key24": "5m6U5EDXi2RwQdPajsEX9iJ4dBfWd5o8Ec7WVuu5qtnPPRYsfbtryTRhFc4qvH7o8bXVbZUSMrYTsx1YXuU9wJuq",
  "key25": "2AYb5SFFSwAWoN58Bp5BnUFoSDcvGLi35mPd4JAPKBEzEqqQgCLGFK5UPndn6r3EzpJutZLDxmYPTbiG4kBmtSTY"
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

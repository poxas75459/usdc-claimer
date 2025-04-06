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
    "3JkUA1rq2u1BmT79BoTwJAL32n7akVZMKVJTaWQsQWwfKVw9mRUwJERMsrANxb5edeSrZdLhxSDSq8zASxRp4dU4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4crAg6YB38ioPvVJC2XzFDfXWPcRzWMVrzE3wv4yPBYnYWR58Ch55dSHqjBE75GkDFvSPaQKM3wUCzZExtJca7Zu",
  "key1": "zLJ1aW7hDGbX79tq3iRdYPUFUWRtnuG2FSVejERAVJWs8MuSpo9EuM4YoQVZNy6tpcmjSZUWVBej19EZdHUpihv",
  "key2": "4QJ65YiwiZ5fkYJ4uF9FEWvt4C4bwRqMmd4voyHEz1MhUCmHjwFVUhRAY4UYzJTCbjwXkLqe2W75E686qUHiJATy",
  "key3": "3KFzPXe3iWLHJr8fhMco4yD8kGdUHCijbSy4SBToqzLPJAhkTfupAdMdiqta9ZHrR68tLA3iwbtkwrRmPnS6efbV",
  "key4": "2syTjdSSHBqL6rNw2RWRKVWjiNF11k8Sdd3Cz1EpBzA2PfYSV2VTsbFvJFKjpQpCmmZFKyhG5iWUW4o7FdjERcuB",
  "key5": "rYgSDcYz6qPkUtdCYw8KvKr8kMDdn2P6Jam2ySZjmbZD2UvL51W42B7bWxUXWjypjStYP5s6heXFcq8coyY7243",
  "key6": "4Ft6dMAhTCrnTh6BrLR8ifDovr4K5KRCz47SUxnRJiX9w4y1jjSUVb933akenyDAzuhNN3ZAXGHW9fS4u21wKXHj",
  "key7": "4itQGfDJCifwTWnrGjfrwQaLLArRjG4dhyaSs3kJzmCLiou7tiiVKdbscjuu9F4hX5QuDXc685A81G4HSoUc2oNT",
  "key8": "ADpJi2rCN6zu8oKg2RcuDYWraTay9gqKsNJznaZXnoTdZszKPfcSrYCA2A5DcTLxp6SisReo61CEQgv5p51jyuA",
  "key9": "5NgnQmH7rxvApiQzWjzGYPrSVL64cRiXh2G4ds2Qcu8HpNeqnPCUjtih6JW6ukj645gUFKDyKgzfxPGnwbW1CrUJ",
  "key10": "2LiNrMkaWYeYZ9MbT3yxD4ykBszhZMn25BUmD3DHqdiEcmwA3Xh1uAK4v914V9fJ968SeZ2SXNpGBBCFmx6LyBZZ",
  "key11": "5pZ1YDw3RDJz89Uz4wYgwJ31FNEGgmiMtRv88Bfv8Cqwsho6zgfEieghTsfD8dLevZMK9o4RojvD2zDFjwSejjvQ",
  "key12": "3A7Fhp6dXX7ABmVqBHXN1BW7zMvXguJoRj615gBffgEkFsycoi58Nvw9gCdidpvhgb2gcXccneMXNvipuEeyc8Wf",
  "key13": "5mNC26qG9zWYfasF2qmrYFDP16uzF1GfxVesySnUWMJrUqZErzzqD46dCkyqzbreusExdmCFdrkDX5fb9pZkZwy7",
  "key14": "673tJ9VmfZmSssi9Lzx4JBpV6jWNFCqQKEyBHiJfwjcXJzxtewe49fS2Xin6D3GCALgsoxXskEvYvuamYTMLWCPx",
  "key15": "brQdsRX7cutBoyYGHfamqMmyjvNhhFjye4yaNDbzERaTXUdvGvK4TqWcCb2BpuuCs1dXPJEv4EW99NL82QGxacp",
  "key16": "KuBUHZ5dJYwJ5xi2dtRoNo5QtaHJn3AST99PSQGEd4E1WkE26sT3Zp2suFXUv2J8xHwV28XYjo8TeFdnYnsv5QE",
  "key17": "4FBRDYaob6zNXCPCYQTCc1Ur9k4Rtnfr8ctuhvfH3mshmzJ7jkcG3tC6BQBQVUMvwsVwUgY4bKt5LahTxoKXyWow",
  "key18": "3DbwpHp4e57LwgHkhpdD7xGD2H5HdxkHAqA8ogjoBepeJk6xoQSNiYU6Xt6EThpoN9WbBeXisp4Qt5t1RgEWN2Uq",
  "key19": "5QCz6AaTSX4cqn5FBAyX98V5mtPf3EK8mNQ1CHt9wzZf7GM2pTYTmWndnarfitn72P8FoQNv9EC34Xer5N1Qby5f",
  "key20": "5DDfYnsmYKPGdgAcS3csBSx4vttHRt4wmT2o9HxoNMhh3ouLknp8RK4igBKzKeSDTmYduVVWTFG9FjCTFkdD9mYG",
  "key21": "5naHTVRjZiidrdxuwBtyr2ZEuLooyUZH1rFXmJ2gFWaxmtYt9CXoyh6Rfg6xYQ8HDzEjeBtLUg1ZMsMcQCjhdE2t",
  "key22": "5SoiTz7vd2sapUSYiQrC66tWXkCfdKwmsYnrKv76FD49rrN4FBt1fhAxzq9rFzsbH5Lm8iEDXXLP3VZywzpiWwYB",
  "key23": "1Pff2TCAx3oWhidGzvf6dHojKY6oDBmHGwLGzWfrDghSJFj6hUbquCu2ULbwGtyctVL8JfpotBqXmQCqgRJPPiD",
  "key24": "4Q9dVHTbubWmjKUwyEeiA15JmSv3GAP8DDccvGU8LEoWG8h6yFA2EKtFP3yHSAJM4w5YSVM4uQtGyE2LwBo2U27A",
  "key25": "2bRyiWD7DTT4NwRbpvPcGHnKZ7y6wYqXdnaMuhQfceto3DekRRQwdysKYPKUhXA8fkxyirBvEtUDtgd3LTXQ9r6T",
  "key26": "VFTZATojikEG3hXmJARqF4eg9CsDH2tdv2jzhhUKbQyQTvGpa968A43UYertWzuUzJNmWGjopRaXmeZLKMYnzSR",
  "key27": "2njcUuFtUxGEHcFGRYXcnqqTRSx9RUvL1MrsNEfx8aDMxWLDKK9cWjSaE2wvrnK7LdmcdqNzg4K3Njb3qnZdRpB8",
  "key28": "4furh5JAb5AM4VsEYBDFkFQSy4jSK1NnwvUEgJcGhTxhP15Gvk6KVCFEpMoGXqjP3Zwa9pb2wC4EAAwteAwntk1o",
  "key29": "4mwAEQWR3W6KtvWZzfBLTSzsSbGBReFxaPc54CQQMknJ58KzMXLFWZfKs1B1BkTKGnGh1ZrAiJY2i9xvxevvhL9c",
  "key30": "6XtJgVM3FAmtSUemg75yAnYzxqteKGxeiz3orMMo2YUNEh3PdbzsBB1h6rKhn9Ftw9DP11t75KcU2dS4osmKN23",
  "key31": "2J3PzcNAymahRsz5jXsC4wejH51diaN7YbAYTWBU7GQUKUkdzLjT3gX3cQCJCTFzPtsYjZ5hte7sKNLkd2ABoZiR"
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

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
    "62CCiNCQJsTjVjHYdpqdpRKAzGvYRKBZan8MyuSU67ygGeMKCNbtN5R9oGzXeTSRy6hAeveKTbz5Y61kuodx1PQN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62nVrsRfFLA4JCtUtWAjJdGfwvXZ5o1Fk4UGoCa9hKjgvkRdj7EWkqZL5nJCH3Mtib923vXxRgyBedBnfx4JPZ4b",
  "key1": "4oXCuBNCvv17dvNReuGWUVfTjz2M72i3TrNZg8PJL21Wx9s9Qb8SWiyr2iZVBfaY95YpKNDk1jEBnasLkdexmChu",
  "key2": "3eFV9FUbiXwZH1kocJcsQbK97b4Mp9C8b87EGmmX5UnQN1j7vEiu8KswBDSioJ5fZNBSHeT6Pus7z4uLEFw4NLY7",
  "key3": "2vmxopyorbqm7tJeku9Aovc86Dbgct3oCaeGrVBgasd2e9wRwzbutXMNpPCcemQNrEAQb7CiocCY57SwiQAYKonT",
  "key4": "5Kn3ku6bs8Toj9prvoLGRcjgtZYGfNaTiiaPK46o2gGfg4T7hfyBLCVYjLESAgfGrfBKj73KTEC66WHodZQHZixU",
  "key5": "5QgmHUDh8v5AGquvfSj3JBNtq4Q6f3wvnvh3Q6s9B5RXjPzQ958VNBbJBYe7Fuh8rChbKACuPr2ppsEwZNZ5mCsJ",
  "key6": "2eB4iyqvvafA8UVu1ZHPfYjRMYuBG2xkJBncT612SG68hvxvXJvf5SUkYq35pxh2HZQS3bXEi4yM9XP1Sb57wZuA",
  "key7": "kd6hGqNDQ9hGPd3JwNXLGwsWvgTiHwLi563bzVGPBdvQkdBmeZ9EM261XfvDKNPBrBBrU2FucwbrcQKszWfvrUb",
  "key8": "62iU22387uhvp9pZbGxteAmawvnvrQd3yJB63Ff77ph8Vv9vVbdgmNSaRwDnxEzJMQbeKUQzNCiKuQfpPSeqZnae",
  "key9": "4xwrf6Kgy6qwm4KykPdfu1mZfCkfg3aadX6QZxjKBG17ep2XBX1F4H3NgDxMxfHZDn4whzwA5DKZgM7cdYe2zxZ8",
  "key10": "5mgdxs8a2r8YhfswqEb7sPGvjthw6Fc5UwvZu4nB8285BsJh2cSsUk11iyuVDy8RMFsEZ1VBDyveEdM2jRrJFpsG",
  "key11": "3JpMdpq5Ct8vY28D2nokZQHvPPXZwvcUeuAARXnmxmEHs83V9YBqvQ7J6htXLh1prZunw1oF7h8m3JM29LEQuASo",
  "key12": "2jBfFqoCyxcTX8LZHR4Enzkcny4Ym6uUSKwe3WZDJY41p1jcuDn7EYAtNBLQqHPovmGUVkg6AHP2VC6snK6n1hiA",
  "key13": "ESiNKD6UA8oJvaDRaGPbozWaNm7kL39Z89ZDStzKyLCvQoRqmoWkfLLFg5QeKcwtq4HM81F8mBtvuCJpSaFv3pu",
  "key14": "3G6tA2GUknyrb6tzKkPwmpL6ZqSKZjodV2c4FBZTFGbGwu4dPKVGdNtfN1fodPFus1cibZmBBfu44hnGUkC8KdXj",
  "key15": "58dU5xQDhi4Ayf7t2eewCppKoTTQNdwydHNuvH177QmgtmxtEx1EEVHwvMAmqCzw5fwMkd7MBC8N1i2VNWRfLqJB",
  "key16": "5H7dw1WeNtyPjVaRRCwovm5NmEpCPNsYKMrcY3owTNn1b9GysXTWXEXgBHxY4J4ynG7e8EzSiwsz3o9FPk9t7RWS",
  "key17": "2eHxLTAatwqbuK9vricT2nLhSc3dNxHj6tcvo8zquxJST5SqyLn54UMAqvJkkjqPsgBH29qMvGY4R16fRHLzAYqn",
  "key18": "MCKJnGVmZybXt6AhDNy8qexH2oX1jFghGa5gkwJHCpZxXWvwsN757jZ98K2Qi9WK1vYNgjvVLHk1TJK4tKXmfVn",
  "key19": "5oh7k9jbk1yyoXTL4xJnAqAcUM7N19B2ikHNxmg5R4WVhPRWcMGmfCDmUWXPsQu8jX3tjAGArhsViytCkoxNwCp4",
  "key20": "33dm8oq1KEUC3XsyQJfQVUPw2pDNGf7Y3fiMvzAogy51wdjX5aAkvUnzE2EGK1W155YCDkoGLFPWAZkFR9tCFoSu",
  "key21": "34U3e5BBtBmRAY94Vtce66CbHsiEcRpe4pMh2AnNfsvoiR2A1ySY2p4RNppVuvTmXuTePq7hNQm9kmXYRjgwwcRh",
  "key22": "X7LxjJyfH9yXAHmhFon4fYBTZ4jR7nr4tVpvdEvm2qW9KwC3JAf8sQSKdwo3nDY7aBvJTdFXFBaecEDvV8LKb2U",
  "key23": "4oUY2D23Avo8d9Ts9stfuEYGg2W5gXWw4CEcNd7r79amPcZdD9mja4xMXKPwTVk1AYnY1kHee8pfVBkYeN9wNx5E",
  "key24": "22BHuj4HFvyeDcs2kif76E7i5Tx1MPqafLJz3dMmBmauSaRpJU9pHtPMczktmVX4qcHEJTgwkdoj6zGYRnFnSZWb"
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

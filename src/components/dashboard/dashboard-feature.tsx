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
    "5eQc9tLaoV2YcJLymca4hqjs37hZWVtREFQRhJyeGbAKthBWzSX18i1nA5XPpakypP9VuucFcG8uGL4svtS1NvER"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Dgxr6tN3m1Q7CLcZwNh5AMZaYNV1bJ44D8tSM5iCj8TGYMLnHGRmbK36uHPnGLFyJXyh3YNzJBMs9Lbevc1GJVE",
  "key1": "5ZiuZdbhvUm866wVD9dcK5xVYDT3n4bvXnnqpzTbhdesfhmecF1DgRtVyzHwqckTf2QMMqgwvtToSXWsrmaCmLBi",
  "key2": "4ti5HkcUcmER6K9LtiXn5oE3TtrXNMe4DCoa6F5zFMfgsswYNbo3PixaVLSE1jK8EqVp7kSpPNf289zUkswN2zmW",
  "key3": "35hymtAXNcNCtrdptV7rpZMrYp3uNUHuwDx5BU6viEGZtsruTbn6Ns9CZaj4S4tFH7dDEdjtkQiniitX8dRnGRiA",
  "key4": "YLvANjs8zVMzL7jtfLJXS7ZF4vSX8RJjf6hdy5bqHPZJmhnEoD21puTJnV9nahAsZZpj9edBQdz9HbZgV9mStUN",
  "key5": "3UD8ugvGEe3Y6EN3ZJksrws165xQA938Z4zyvjux4pmQAtZFMrR2maZn19hWFspb6RC9nEfg73doBYZZvh57bFdS",
  "key6": "4KGfUe9EgYaAhPtixj2jgosUZfdPQofGSk42KAKPq2decFza8J7N6T9TeshC1RhXfzg6H2GaHX2pga3khD1NaBDE",
  "key7": "67fnZEaRUat77vr939pumsiGHqQFwvdZvMh433PyC3JoRs5eog4VtTW4qZykmLoR8d6G5UY9zffnTHYCk2Czw9rn",
  "key8": "5XXZm5bbYbGJokbCfYomSH19Mf5kgdNY7scv2Nuc9sZb5QeuuP2MHcAu7z3bGnCh8B1xvJ1VriyZmNif9Fu8fmZP",
  "key9": "4Dv7wsxVvqL51KGLmAAqjAxx8GRuVYeLcYdGTCDgaPEQwcw2YbSHmLVEjPa8uQGEs49M5JcNdofT3ezmarDozpbo",
  "key10": "5sFzGhmEJdY2SzpZYstLrb8rMgRf9FCLFsPndJhT4br44LfPtzrekZgtCAyBqZE7ucBjRUXSUHAtVEShbb8omepU",
  "key11": "2WrqgUkT5MioXaZ7zb2ptqZGzCYn2Jovz3PUU3CyquVxnLso4yqMi81bTaQ2YgYhkLxtL8dqZ6BjfRttvaUSWK4g",
  "key12": "4auAdDNfUwXa6rN2NweL7pWoSn7hXMAAqsZ2aMckgk2CmEuBeLEcEtcJd8J1pQsdEiXKaV57j3LzHfReLZEua9KM",
  "key13": "3erBPstC8QHrrRrvmtA4NSU6fgRNCAZSby4JyftFBi1xJmyYy1Euo6B7awfcoX8Scjd4K1tvS4NFgHNtHLutr94w",
  "key14": "3SEiXqKMGJSmJWwbytRSQG5wYUewd7R8QVfnWBEXZWnDTgb1vvEHZNhFyiY73pBai7BPsQpnLDbzsymFtYHRLYCk",
  "key15": "4g1C739kKrGkTq3S5XDxALPvTFSRC7A4Ruz7YU8Vwg3Qy21dL58jJiwfXRvnt5oaeNhCCCM19ZgPMZVuTFCKqzYW",
  "key16": "4xvSkJWsc3cWvvWRkAYVhDTyfp18NZi36zpLkDozreZwxZaknmtFA8TA2tC31ZoQL2KC5ezehQQ9mGuRP6PdmU6X",
  "key17": "3DuJKWfDjRfwn5aRKjq95h2og8YjKws3QKnPdH2Xbcy926vDvBkqNcxhrWxcnTdLri7eKqeb9mDWTdtS8S3NEE4A",
  "key18": "3rs9BGRhpRwm9p4kFNWJT1SBsLK5xoM9BqS9YvpMY63p2Q6fjHbyW4bjG4N9SP2MrPE3tenvSYCtmfbk2D9ai84K",
  "key19": "nV45SR2aj9xX3zLNSQ1WttyKfaiVSWaBd55ajsLdPBPuuTL59mDMR14mA13fYiE4RSzRxVPdkDD7zsCiFNnHQVE",
  "key20": "2rY8oayMYmPYMcnQL1eeZ4ueS8WQEa9ecCZVfFiX8HPtgEhpsngmjJaeEeA7D5ewQqXeJA1YLT2gLbkygSvjLeMR",
  "key21": "4erziuqKw4L43XKUNkKkVmECUaPjVvQuL1cD3BdcKAEWKKSKNSEWPJiYBmwL1tHDoSzLgbw4gHPfWETpbQYmdf5C",
  "key22": "3KXqw5k2PwCUXR3qpkYxjPoUxMTBuNqbDkQbPD1EYc3HCWMAJk5NBLRryyku3fnCDh8f8rZSS7sAGxYAayY1D7Xr",
  "key23": "4gBb6hRzAJLSYd77kjG2BR2sCybHUofYzdgya115DhCPNDW9qiNNSsyahPGnZtRJuDcvgAveHtaCz1sBZSfzmfum",
  "key24": "4j7xNExg3RFw2U87gMu6oP9vMsCBSKZUhB3nR6htJFiGBmtEy8dqwrWY7Jpu4p4xfKMV61smhUgeby2TEA89Lz6m"
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

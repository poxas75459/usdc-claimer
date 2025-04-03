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
    "4b6LfhWaqhXWXKhXWBmkb2v8JkM8CA1ZqvwrnSMFahsW6bdHMAdPgwqth1EhaNiCE8K66pcfUCzhSYryCzMxptPf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YAzmqvPQqmAyQxua9mkBWdy7nGDz9Fgtjt1vNFosR91mriRhcX8JVd7HFQQZTZTxYqn8Cc2FTNe2sm8Z131ApxL",
  "key1": "4xeBeBUkwaqbxRt3QgSJXFHD3WCd1A3gKKtLwfu1iHPVToKq2gS7vnvffTCpRAV1vqvc9UgEZkDwSWEUTPcpKgSm",
  "key2": "4RXEe8jsEqy52aLd65JLSC1vMXL8vLGmxATCqxUAavNZv4Bxgb9q4NzRdq4D5N765xRcM5hJtiXDuLgBA12YXALj",
  "key3": "5hJ19vpruy8qK1hvZzQFP127mXVAs5zRCZSiA7mRTVir7fC8S5K6CcYDhJkxVkQYkwSAMwGxfA6MZKqtCFygsAW7",
  "key4": "4nygTtdSP3ArFSNJdanCSy9Puk3abqWRLuUPPWvN2QL9t7f37nE7U6J28yCH7nBGhLDnPx6y2jJMyo1VR9pj99tk",
  "key5": "3EmX969tcrWDvDAhiphCmpqLc34re2gsC2NYdtzveF4BaJ6sgCFUkyLuy56dqxvQJYke1tN5pVEUdBEGLnXtP6nc",
  "key6": "rfkhSH7BDv5Zuvo78aqAA9ATsWdzy7vWq1zoEUekiHpVWrmnHxWpe8D9QyzF8RjAuigTHm4vBMhtAqNQdZcv6JN",
  "key7": "2bCKKjWYy4bcU4zbFLrhoF8PioeXRdqHdjQpunzUZVCJBbCgWMoFVprbvcKWt5K312ncGizfmmDVFr52RZzrnUAf",
  "key8": "5DFxs5KvZDLDYbxo3eB1WTzJKsbHDj6Bv7G7ghcLRGAeYLgzWXMskQyLpm4QpDsoCiE6uEtzvHycDKQ8wFJagSjN",
  "key9": "2G3vWUHSHGCtBjTe9MGunNNRb1nrb7E46L6TyqufqJBfhWPtpCorbJbt7xdRE8AEvQAB3JqWNezfuq1b9HPBmNnJ",
  "key10": "37BLZi3cieFsfL6iqbMjmRNSKHMLADEGQRsky6LYL6pPNYm8YCU9y5y5tj7ZhAoHQx1LRdo2nqW4jUfHdEtQwzCF",
  "key11": "5Wr4sEW8TCSLP8Peb2Ke28bdebWZVHGqfiAGTQNaBFs2Rh97DYZ9SP1v8eCmttSWCjJC7SiFmPfMQnwWXzAvBJHL",
  "key12": "2PrHqEXcdtEkf9QpU1Wcefq1L5fEKJXoFXjtim5qA8JWvuFisbBWhCtha1fRbTEHsda4fzhXupuHegp4LcKPTbX3",
  "key13": "6u34YgCZkmZaqf6Z7NZQyrpRaUyj6ELmtBoDhDrcCvVtUA9T99G8B9L9vA8YY1g8oMgLvFLHDtKxAer5zUVfdB4",
  "key14": "3QUD5JCZDsxBdBzk1Q6XXnsZa2EWzEdpyDoDWkhwkYhnZZmeqGL4vustCaoz5J3bKwkdi5gkNiAeDTz8ehbic959",
  "key15": "2x4FuwjfBoqBsa67jEeVokWU5UUvxx4DBuYUqvNhSuXznK4PML6zBSo49dxqFH771EAewDQn4R3SVZaaCmWb7kMh",
  "key16": "4YXR7y1zB4N9mh1tE8t4dt6hn9Eu42xWAwSY586pQuR1CTvdMBECeAPsX5E7WSj5iMLbEWDQiMwUnRa8LyCdeV3X",
  "key17": "3AVX91GM2SdCq1W6zE8CJfx2DJfg34Q8kCvCPxBcJbNDcLkysd8SKziNPKgoFnZMJoKN3EMC8BGys4GnyJYyTTiM",
  "key18": "5eFkTkZBq3DQhQXEfryCDYod97W5U4ZCxkdEK76Q8mCU8TjTd47wthV5vjv1NKUurn4Rd1Rq12EDiC5frVGzKW4Z",
  "key19": "59GBnZfzUQHWLGwEAq4H1w36qWbmoXJnPcAEdkAt1nC1J2Xyrem9hPEd9wahpw35YJi7j42NqX9ZkoeaVe33ajpP",
  "key20": "36zMYhyqoFNfQGwyLriix7CqQvpXKYSkZp9sxZnTazeUGdYUu9iZ6FjydaUJmGkPuQfjREs9abWuFbHzLM39pRLb",
  "key21": "kFK9FyxY9Yj2pV8zRzYYqgPotHrgmke2XHU4e57yTEczUkVL5aqCRJCe7g96bcNJSQeX74uLHQCZuo8batJ7Q5a",
  "key22": "57WEUXFwx7N48rac2t6eRXn3uUEMb1GF7i5u9aJcMzo4LrfhJWA7odS6oQcpZJGPZWKrB6Zs5Z5Y9qf9ewMFQBbt",
  "key23": "4wrHuocZkWwZk88rvXvuRnYDDw7MR1BL6biPj7tmUPFYtvqvgPeYyAojoKH9dyYGz96tYQkdq8ZGEMnV8AKTpYTG",
  "key24": "5Z8s7fDzAzZEXVfgNUTP5669hhoLu7bcqvYSQjvd5rfeDYRW5nCeDe3boAuvoR42bk1GUkbDKrM8f4dZEXTXkpLo",
  "key25": "3V2G4tBezPw2dm1pM3D9ADseHtA5sm6CU8c1tU5CbpY9y3fTMt3VubBqRZy9zpe6ALNFZgyrjzm1yz459uFFxk8G"
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

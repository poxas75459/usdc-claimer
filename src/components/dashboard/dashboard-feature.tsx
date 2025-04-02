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
    "3YnKHdRj1sb914grddL29HvZVA9xqqevgZTCoNQiybY6oZjQwhvn2rFzsyrdef4GsJdpLrtohzgCz8tfZwjijrq5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CYsqzJfVdX4GtqvA9bxdJwP8s9LBLWWcKoDbLNB7Cm86tvSZiaKCdBnzosFLNDHobkysXjLiguyffthWvLe5eQC",
  "key1": "3CPYCmxv6FmsGJamakgFDBRWQKZoxbUbic2mTXJSDif7SiJGanGgpGUZq2zoyVU94z9H79CEKfxv3CRF9RG9TDpH",
  "key2": "3WvhaGigjRUCfuE5hyPTTWKBKxAQasuX8pS4JqTAgzem9LX1wt6n6agP4ZTLK3yKSJF46UBiKRgz3xPyAKWVS6KB",
  "key3": "55NjYoB1VF5vERQ7HvgV3FMAZyg1vpx6trpeGc4sc2fEWQT6MA7vbTXEzsgcyNyKzKFYfFpHpLgGWjUiRu2GR21U",
  "key4": "29kFdDaeBxJ1DmZyvtRHwzoHvM5Lz5DbY3GjecsArmeKnNYeN51ixZDGLMccbsmu36rTWjdgStWzoBR6mmvR73Ec",
  "key5": "3rt3tLe22eTpytqGHFggjCQGcfsAA3vVzY2vQ9tDWSkBimagjrsukR7Ppr1NyWNafikbHi9HYwcU2wFFDGSxJran",
  "key6": "DCMYrr7SMGfFqUPibykhNu5HGtzpfHvHujK8Lfu4V7Mr4Av71fEBnALcUkr3NaYUawKvkvpUeDhQNsavPcYCuvs",
  "key7": "3SbBKdbmi4bC23JQRK5iGgBLyAjbJdKboG5TfPVuNBCMMu2MM52sqe9vsb2UW3WGbpQGVtuCbmSn5zG2tKLPFSt3",
  "key8": "31baXRDCernxVRkCJW2CZQURozzVEjUyJt6xTz3YBBSxBub3vQRuwer6XpBTz7Vg46gyQKLcb4ouM65UZ6CzKBPJ",
  "key9": "4C1Y7HJtg4w5czF1yc6J8vyhWADe5i5Hs9AYHmHwoc22xyEyMombBzYHavuBKunGwEuLSdETiFVBQJiY2CK5dXB9",
  "key10": "2osQNtVeNoG8pWjmBKki7fpMy5FHdiRp6mUbkjxiUBujN8fgch2K7H6URXcCRB7cTvTaoSfmSufV2iXsbPnTw2XD",
  "key11": "35APymTFFMYN8xrdubP59zMNjasLUd7ZD6dRMHd2wQ7d36eJJa1AeM2oLzejzbScnw1CGSEtyMrJvqYpmkQjpKJm",
  "key12": "js3UreDk4ZWStFhym3HQ2ugwGEHTHvesabDwQQRBWr1RNS7BjunnZVSEmxhuE8xt9eacG9QtCBJVqbDXzJNxoET",
  "key13": "4eDM7A8pBsipjtANUmgcCeu8X8vQbnwC1jDegCebeSfojSMHKtnzQgKpuvnXGfxDXfdqLCj4PmqYZrVigicnbcz3",
  "key14": "2XoajemYgMu3E4DhphDnyUX1QCUdVW1xMwUxRCs52vjQ5Y7DChLitcsmY9ZtQoNbHJnbKA87BvpemiQMYmmMbMrT",
  "key15": "4GKitCTmeQbGh5to3Bx7ep1sWfwyvHyri2NNdqhaFJJv3J6MXtdZfstsZUecFaAiSoEaD87Sit4FEZzyN8Ph7jbD",
  "key16": "54ygXGJovRbru9LrMrwSKu8uEsv71FbVpyTF8GjoDYHd1UUwroHjAyogjLoAfhMvGWZMGpqDhNotwonk62uoW1qD",
  "key17": "5JuYN12aLQvLKXNq92D7WM1fwoUTvpeUMHPxbWym5LMfj5MkeQ5stXs1FaVEgbYAQrxeg3oNNH5N6qosnQ9pd5xT",
  "key18": "3rWTpyUqhHGwqUgASGvHCPvdXPkYXDv3HgNfmcb8LZGYs3ebpwexs2qiYzQSHxw7Hzon1MzVsmvVz2pn7VaJSXNT",
  "key19": "5ox7YpZs4GvxHydLHzcCXLt8r1jzRQMggGDXpgGQws91WkBHuq4XqCuLp5u43LyXhFE7JZMrLvG6rPsDQpZ6xzP",
  "key20": "4ovHhLArKudWv1WhDSuvemMJPJEkbBCLaWf13TUT93SLqnjc8sAYTa3j4PhpzZrXz1ZFSUHJtTekQmJkVJRTrYL1",
  "key21": "2PquV4vJP4qXMnPD7S4AzMxn37BSdppzh7vNZ6JUPhbQLwFB2x5XENEcdZk1v8LESdzAcFDn4UixC3Nh5T1HPJuL",
  "key22": "9hDZz9VJ8dKzG5WieHAJUweaZaYiYNPqkrPDZ1xV7Y7oSbbdZcEgdWJZDwWA5nhZYPV8Zdj2KQfUhqyodUnkdF9",
  "key23": "ZbYgYP7fZAsjnG4HGoTdK4iHo9FBb98ukem4F7r5GTKBoEcJq2vNkXeXaaqC6uLuTgbNL21854NLMSLs1wxPGDm",
  "key24": "YniHt8nZLY4N5TsurgXrVq4juC1f1t27f9zskDKv8rcZLe81M36bmw2G1iib6nHdvvajRnJrFmwQcghgfQQVz9t",
  "key25": "2hgbhbk5g136EaLaKYFnkzMZobMEs9dDwJeH1okwNPBreHZDmrnNzQKid1pN4nAHUqzucn2Y7cavJqFiHYpvUmm9",
  "key26": "48MkPDmyzSZoRf9WPLXSYfwtDo4TF4eStG5xxbjiMvjGD9v6ntw9qn6BpLFmKMsHviTYyzy5JXKhWJteEDsj9hoo"
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

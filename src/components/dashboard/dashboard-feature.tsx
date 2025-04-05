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
    "4yjTCQzLRBZu7YUgTZWZaaw8ZXRagQR9ZsJn1EPRoWjg6BHfv5ERv4NzZx6Tc4pzkwtZYFWbJ75GNv5Tp7ak49V1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gCkfvqQ24X384pZJv3fezjcBHUxExmdxXJcmz4zxLrerpgCatf4UrxTCaVoZ8AwzBVV1WpPzHpp9kV35sLGkbvs",
  "key1": "ZRdeMmxxaANCkShjfCaFFQVfzbSckAoWGuq8fiupWZobvQ9m3X8iD1qqYdi4MMyioVqoDTdRM5L5CV3udbqtyE1",
  "key2": "4kfaTpPggH5ZdaMS1eGJpuYrk83idfgGZecGAXyUxQDM3LucQx8vMvtd9quu9V9DxcQtMXgKzC63KP8To12fua37",
  "key3": "8TMtEGDCsHVgEWAxXAYbVPKVo1hg9SX2zovRHnS17AJ3z9Hr2ZhBUkoeMat2FCzFvjS5pLPJGBhbp1QUBNkhgit",
  "key4": "2n5oRnWjoBpF7mxdotW43X7yGSZ5Uv8X7p4uEQZbmf8Yxaca9extTrExHrgMo8LELpJu5a5ZfMabniJ7E9Mhniqt",
  "key5": "65STNLsoc6gxrfqhuSKi3Xyox1jjCEe7fxZXDfi8tvC81PrNPVwyWXWLKAFMk4aFVRj9bjp7Vn2wEsEKzj3rfh42",
  "key6": "3uXhkyb7m3fUhcevydhjinmi813Vp2wza3ZJ6G5HQNgMcmRyNGM97w3TuKEe2nsM6A85yspsMMMxQyTkF1ufFYvF",
  "key7": "Hj3RZ14EFpUtanaiG5kYsH5cUCS7EJLyjdhW2KBS46aPEAq9MyXHudFHiMkkzWtDtPnzCcw3w5ikLXfMn3MjEPQ",
  "key8": "3Wyw1JqXq7zaMGJd6MYLoETpYetqPpB1dE6uN237fihNSXuyeuknn5wBkg5DPcM6s9Mn8C3a5SqZyYcAnA9FvFFz",
  "key9": "4hySjD4vDVLLfQGfFpVrjyxRJqhZb715mu3nHJuT1QPvCJvbya2otXLLzrqVirCVdhq5ZBdbbur946qjsSM91FEo",
  "key10": "5zhig22uhJHiR66SvUYUhCoJ5Npxrbxcq6XomT8Uze7D3jckE9EaAAZquzQieoadupvvE9QZsAscY9H1Pv82SkPg",
  "key11": "3DHbS4Bbp2FhmzFLVL5tTxi7QjhmSgmF2t2umd3QEwKhxk3Nc4NzrHDMueor6kjzXo1dG1S9aGMu9AxFzgAdAfHX",
  "key12": "2WPi4Z7snzmvv3GKpG2pm3F8tubxrFwN3iahGi2eSfTkJqg9VKXba8CJJkhqhwVEGPGokm73fm199daDeea1MTHU",
  "key13": "21wLJL2zuyGdS5CHoQ6LS2rWDNLZdu4ApsZkLwjxStSfRDG5oiuLXAhnNttEVzSs88Xg2Co9yKCQHPiFBJpNssAz",
  "key14": "4pVxhmE5f3uk4Yxfp3Akher52bYuW2EFduiefP4nB9q44jsLLcCsPcJDuswbhpCb5FZV7JMricZx1L1gdNpVrkSJ",
  "key15": "2kY1KqUBmEAg8gmTty2VwtfjuSBZ63eWJaVPNRwYwGXFB8Ua19k2EuiiA6wvTPYzT6CXUd3badkD8DRiT6gTzj96",
  "key16": "2LmpD9qJPhpVCHWGwp5RocoZbnc3JidBHT4WGhEqXrCU3LfyBhYNQeVy8r8y1QTxqPEXsvCgDM8ForpjNvhRZ41s",
  "key17": "NNsJnzQ78GG5kMBDjkBtCV8PgXb4XaVwsBBP8PRnqT9er28oJ7wgUYxi1fjCyVrx2XARRuLrhS72Kys7FVkZgGA",
  "key18": "zmU6gNm1Ks1eV4BLnxtan3GoGc1SxvEEqymNRUar65Zy5PhXoSr842MRvgavtv7ji5FFdwVkAc4erGagt6rLfUX",
  "key19": "35PwMX9WMmSn9Pr2HAmYtxXV5tTfNPT17tFNRFCuy7JApLMXTrStbPU3bQ4gdsdZ1GqpjZEdej9cdiw9JzGDjJat",
  "key20": "4J4qB5a48WuDS7kYpBNjsxxj2EmEohZW6McuijcG7iUS9DxkLQoQ9Hi1wNKXVqGW1Y6K3Hgb25Ug7UevANX3rQh9",
  "key21": "4dVYiKVuHR174TnuuGcVxFKZPMuZw5EinS7NZLUftvVu6VnRs9e9nKiru2efym5zGTZqH2er7v2AcEQT4ADrXFZy",
  "key22": "31KC4uAVCq5i547H1TURsnAJfiTY32m2ytkUiAwHkaYhT71nQDhfsRVni9n54QnC93kAKbQ7iy87BCAGCeFjSqNa",
  "key23": "4RoApXnRQJmpuRjU1F9pSW4X389WRxTnAtVGKpoFFGGQNjB7w1BK7exdUNqZRxCHCpRLayKrMnACi9BUd4VymHCq",
  "key24": "33pGex7mkK7dDjfsbQ5af2KrScGKFwak61FGBZgth5aSWa8mQKT1wtQ5K8C2H8MsqNv4MM15bwEgkmFu1b3pBJiW",
  "key25": "3ZSTQWXhPiDWSvixqtZe1gwSDwzm2R1jpfrSX1f9RQ5MHQUe5JrRSJF7JGANJ79mgvzJhjLpBaY8scW53fm1oEyM",
  "key26": "63j1E9Nu7aGLvXsWXd1pwghjVx5ceLwTFb4Urui3NB5qd77hNy3Rrrye2T6dcRWQTyNHCWw4QCEhWdKPqJeDRUKn"
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

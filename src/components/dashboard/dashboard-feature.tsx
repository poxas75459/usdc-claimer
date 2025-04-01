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
    "9GNx86tQhgRdcsTMJ6pFgrgEkP9AyASUQ6t3HZhPpgJkQiML8JoqBh3kX4dLGZe72n17tuaky1JTgVjJc1q127E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tyzx3RRBJQ8cL6pLjeE83UF7EMxuxpmgucWYjMezkZQiWLjghvAfD19TNDh2Z4kLxGLBHoczFGuz5xiLojVtS2V",
  "key1": "4bQQkvKQgfRsthkB3kmYoCUkSERMzegG3dpd5NhhKmVAaoivaaeqhVU8atmeYybEZAUxgmRU4L6Vspdn6gEZVD8P",
  "key2": "3VJVeVxE9mx6qTxLxxMCvkVYAcwLkoSpKs4GUX2yEVCSqtER2pLFCq9WagWZtkEQ75n3At18eVC9DiiQJUeYGmxE",
  "key3": "3AB7to1vXfDUNisdzB5ZvCJaztemWkNMp6Uvo8vtuy3i7mz61wH3gJCyxqqUo2E8A8w88xuhUxhU2rnfEYMaohPy",
  "key4": "3LyusRa1GFRxBj4vq8jJTUjqJBxLPiKu162dsqTb6aQRdKe4zso7KtCVorxrmsHXhcDfXF43GkZBotNEHbXbCdzP",
  "key5": "HUeVAAwNwFF99bi7njbjJmwL6FViQXeoBKSmxDgEMCKU6NkLu9sBRZggZu76DxXgXtru4smXk6eR486tyJNdohW",
  "key6": "KV6cCTXXRt3oCVoCE2tGvH8RU7yJ9vHsRmxsRipQrBFRdXZjFuFu1Ht8qNLXApPMf52Rcv571SQjpqTg9e1sdH5",
  "key7": "2MgVPcgJackxceXSgNsZaXj4pSMYUa4GGj5FFHB5Kj5gMsGuR9Qq6SK1p1hhRYUcfvA9cumVcbr9KbHTEiNuXEN5",
  "key8": "45G8G8mg99Z1wNscknutLCj4MF6DrcwCCjVUXWKoE51vJPt7PZncbzv4zvNcEfueLSBo1q2bZNMecXs9y9VgrNfe",
  "key9": "2RAtnjXAo2ZZ13imZKxq9hmtBvhQtYWpb3WK2NVx7wUDzgd274mWJ79o7hvnxttW4yTsYQvY3qE7R1F4khP6u3kr",
  "key10": "35GaqTS2GDJiwkfJ3PuKVH9NF7AEcoyAbVjdbwjc3N8sBET6BrT7qHK9H8s4VP9dx1QZiqmzT464zqjfVLryjGaj",
  "key11": "3rbfQbafEQkChSvWFgNnvxAmbxfWN15i9PUxpg1aiwftUS1MqKS9Lgs5A1AeDeKryjD8DHGqNPwVWuKDhZzFBKie",
  "key12": "2dnyAKJaTcNnD8oRKgtmKF1dGC6rE5RA4QxrfEokaNsHA4Vb1WFsbDqqArstSzy9D5GgFsuWowoPN3xEiAocmc4b",
  "key13": "5hUuZoqsgHvWwQcWbpLeupANfTz89K7b6Ykm84DKp8ugfR7swNM1Hse9s8sZcLShGFUMpnv5rRByNG6vzRKjhmts",
  "key14": "CrahZiQBiZ454e16YxLTWiFdTFs6cAxQVKeXFbCs82S524nv7aAXG4rhptPYvDmcsJAHrWqGdz5duMN7znQ7Dm7",
  "key15": "m3sdY511VHbC3ZyrMHh6Sc6rSj4xdoWBiPSq798B22khYLyGFTY55b5cmSsd8VW4Xoka55LrD61qQ4DdHN2iACu",
  "key16": "N7iVMTVEAC9DZ3853vvoXPzmb2hkrYwLejo6SKL1SjF1SYJq8YpyuhUFyDdkoRHG1YcdQiqrxnYZciMuwYPcxkU",
  "key17": "48gm1hnNzqaCR1nKW8gz8cg1exmBU2higZ8HbnsuPDp42qShYnfJJQuQU6CJwkZAzDjD6sCDfiT3Vp52ijqBTJQB",
  "key18": "58T1YZAmAbwrvbhUSSWFjNCL5fsXc2bBiUzPFVHQdoDbo2SwF7q9MbqwocFrA3CajWsRNKSmxLpz9uEcUt5RNhg8",
  "key19": "2F7zdv8SDHJMeKukqC29T7MGqsB57jYYBAN5pfYA1Ap1TVKTt9QqE25KdT5k66ixn5YWEcL2oomA63PtayLBzRaP",
  "key20": "65gCVu92jQcJMnfmg5A8wFXacL1JishzUSAHTEWsSpoHwsgnpaYN9BnbRqCHrgBUYW4CZdZ4AVA3q4PRiUQEzRcL",
  "key21": "4zmjc8jTWRER3yQbck8T7CykzTWBTddDKJwpVerBUvCUi2x6nQ7oDT7kwqCKDgRwMNHXN2zNAxVpkwxS6cMFujxh",
  "key22": "5WNJiY7fhDA8kHNbiU2TMoT6QsJL8VWoDZD1rLJiHQo4thAsdjNra1mZEqj3n6mpYLH13k9dG2CTpCARFFNZsBML",
  "key23": "2MwHLepLYyTcPDBHPxrc7gUTtmWVKRUWCBQguibCV65KC1ubYpsCK846bz3SoUySBm6nwbwghdVVsjMadUxHQRVp",
  "key24": "2kAvqSVdgbwtCrCwMt3CjyBRe6kmGqpFW14SKKaRGKqGifPYSAjh1WeDxv42TyAckmd1RTZwL3gjvWX9VJ4uHURf"
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

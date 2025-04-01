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
    "5fMD879JiNxQ1Cm33GRGTPC1TgiCspSZms8m3VTYuAFvFT5sPFcBtSNYdBFgmg9gZkfa1UoU5wEi5p2tavKDjqcp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R9FoovMRNzkzeL2Ce2uAhSgUrdAkRpgFVLHKuMugfPdcySxaSQCoTR3MmeijNNNyqxESpewAtS9poHvndiWABKe",
  "key1": "5zcBRxUTJ7Erj9uWenNyWxFwm2ZRmEJcq9enyK6dJuzhXe6Bi3JjjUSmT3ku5iv73BQ1RMWHPJ8oLg8rAMJQRTUQ",
  "key2": "WvWNpUVtVmUtg8GhujHXScvcgYSrjwHfQNkA3WhGWCcwc7vD4KqtfnsYABRMMe9FDSxAgRcAHb8GRdp32cvmZXp",
  "key3": "5nxQb66nu2yka2xNXXbiswqtsLu2PBrXDZmfSrZFHK8ZXsoX6GgeX9ni5fpFVaMhbd178tSNF2V21q8CHL4FJRJg",
  "key4": "ZqKzEx3Xbd6Ncef4dj5wkj1ZXjcFbN4aq2kXTNoD9TcZMouWtxU9Lrrgk1bskzNpFBz9PtGmTHWP2ZoUh3tnbEB",
  "key5": "2yS6kLx9Svt8meiGbyqfmf4kzUugbktQT91dk3L8dsfhV6EfNpN25ZCAFWSNa2V6GruipWc5yitSndz9K2dmX7Ed",
  "key6": "35T8EPYGjmZyJwvP6769bqNxJDrfEUWX6DA7Y5WvvMQgwygUYTspj5V7N5Ey9ruNdQMabFy5fercDBpZ7WbhouMj",
  "key7": "issHuYh3Co9E1scFCKkEgLs946yQ2iHHY4rDTBHJhLSrWGv24SZxCizySKicD1dX6iSPMWw6GZvSSdCpzH1Hwhc",
  "key8": "4B3zSuJATv6uUs2z9DprWGihZQMCjAhpmoSV7BpkG1usHpWksZ96Jkhc5PTLVyJtXnjP1RJaZ8Qq6mBCycqXjGaX",
  "key9": "ZZTzxUs2s4pu9AMoAjnCr2yyUPjwki12yKxqiMddpjfbGBRzLYfizDcJSVmPmMM5uXvF3t4K2d5b9mEgpfNmPwe",
  "key10": "2yPdXokYW4KjZVnBkALG87bGfyBzTvbKE7dJecd5V5vWbNavFZ787yLSrGLmD76B8VubYmuBYi4UqcrHaM3PZq12",
  "key11": "4wy4neDVXTHmdGfcdY7MbRNwUkirygUgJVgYDhQckDsbLP9My44AiyU8KKC7qJddHksvhYuKE9FgrnQqCg3CLV1x",
  "key12": "2aevRLa4tUtHqoTSGiKPS7bPXv5mUgUnVvdprSbphX4PQKSoMK9aUBJTEWFT1et8e4y1u9f5Pfb88u7rXt7pLRZb",
  "key13": "3xt37cSLJFiNnhsi3YxWto6b8RRFuwQjaSgvn8PDGWrYBWsxuDocHZ6Ef813Dmfivc4Zv49SeB3iQ7N2qbdHxzET",
  "key14": "2pXf9oiBesWrcv2aUgrVqY4aJ4wfanc6RYWhFr3oAtxjcHR1o6xGdBf6kcDnyzrSAqBsXssa1vc2JH1y2PimiCkj",
  "key15": "5mUyFRUuw6SNCH65VRzNEwLUUuasC4gzaMWRNeQQuscsUPhoVjNUgGpCUXaCHrGfsCXpDQ5wou18dHCKCGmQRMk2",
  "key16": "64ic6uKwzz3SfyBA7sitgs7r5fxhpbuqejJfdL6iryHL5i33HncPkwz7a7sEykYhncEdawETPgBTbLcEiPQKUMLL",
  "key17": "fnsgTzDfjy3AJrbyH64mzmCmTpvHqDS8VxcxrgX8nm27FAE1qPYrq7sM7GttdHSXyzuKxCVwj2uNJNq12o1rX1U",
  "key18": "23DjbnJTVrUHcDHYtXGPcE2A82E5auqcdFxGiFsKHR6HYEk64DEpGm5RdGJ1DeUWtQeiYZ74HHBZaXAV6tYooEyE",
  "key19": "3VkbdsdK8aSb4Zd8oSvHo92nDxLCLz8LQVocQi3qnfTbyfQC6M3j6GJ3vTdmABQ3GnH9MKLznq6BoUQJ7gyySfbS",
  "key20": "3xzDVLPctNZGuoNV7q4XqeZFoNJC4m4otEuGRQ6oH5V81ucbByzb1b5Qt3MtsbLkPk8VhVJeSwYBm6b3AP6Gdxrf",
  "key21": "9Tzem93bn4Vu5bm8Kx1NXkMUmaPNP1Wo3qnoF8FVpskJdHhU6nUgkkhDbC4QDZ3TYYwTr7yaEkHcLa5HTRK4Nsi",
  "key22": "3rMJpgDMXkJHC57GLsb12wNTAXngmE8zQCQuyV8XjwicpZu714hUUaQyZXBDAJsjgWKB7Y8316NMcKFKrt1UjxwH",
  "key23": "2KCzHP3Vy6gSVmKnUHGbSQd1eTg7G7qmnMJEqASe27YpPgr1jBQwfhufQB1C1yL8WiLe3raH1bGt8gyg1hPV5A1h",
  "key24": "5ZicfPVaoUddDe6bBTqUgnZY114yFgUr7tJuhkAweVEKKB97uDf5MDBsiXSUmERYsyzmBidqMdrRtWQ5pXYkKf7q",
  "key25": "5LeKwZ2pTnttrsGuR4XzBuGNXHc3rxSDGXRPaxXHvm9ssfYgio1dnCD1SV4a2bi6GbWTkpSanLrtURAgvRMfJx42",
  "key26": "3bXv9sjrTwVAcdEpoghYXct54vr5sULjjEiAkHmK8zKVWGLbTDBwSc3YJupdg6AizutN13idrxtLYZULNCNh8LdN",
  "key27": "2fnT9riTyYSPe5GFjn1TLJj3VDczm3sZLAnCAouroccvD5WDLz9AM5va8eTbXhiH8hS3u57UjCG51CiUftwe85Vq",
  "key28": "63dmX5JBaejTfnBpkr58AKxytUw5VxVaNt4DCMWxiwNCBNqpu8jfi5MtJpkFjnEsGq47QBF96oLHEshZuPtvnE4M",
  "key29": "2Pxfvp4Q4HVWoq5hpZpRzKW1skSfryg1qJfUqQ7b4vFhZTqUisVCdRraG2uYXfR2Kfvx7UbjGvAQtqq3JQ18kkpQ"
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

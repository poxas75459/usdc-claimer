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
    "2kT4ZiVYAT2vSDw26Vx1AnqjSuhSJ4mVnZAdN3HcCtUnxvSsgQBhSR3gaTmvtmPR7YULHBiNF1HDiup4YsewqC3i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Bz1AT8PgEovsdjvwKmFYPTEDfhahdAHYtrFdv9pysxGJDzsp8mMGQMgvPutK66epMHyjjbQ7cY9VKVkpB3MtZAG",
  "key1": "3dioQcmKxXxBh1angU6KNnUr2UsbR7Hu7patFyahePFnF3R2y5yMrnUnoBkqXE9aU28u9UqVUBiQ4TiEbF7Sdae7",
  "key2": "3U7YCnhQg31eivpUYEH4wD1f9zPCNqWannKRDYawMGnMoXMWWhYwkeEp7mceyYj6yBbp4qhAdysUvbc7tqYhXmXs",
  "key3": "4NSqJgagHHX11wDSGSA2LxV9UknfsXgX2Rc6qem6dCyTUhpw3YZBX4w69NC6F1YKVBsjcampNHMq5EwxC9o9dg7F",
  "key4": "4yBwwbLkG3A2aySWEw9fDoQFHzVWqBcDjorErZAfPCQyGxzXuZXsf7teofL2aYoxLEFSkELqm18sqjzjJwxKcyXe",
  "key5": "5hSmQm6TpG2AUPfrmNPXAPXMUaRdT6uEhViTW7xRzuPBcS6JEdLYfT6x5WhSHAvVkezSwfWNXCj7AZUcg5Z9ZWji",
  "key6": "AHWYgarHXb9Tk9vxkDAusvG7ZbvxCo9tHG8WPVkA5GJf1jtqm3xPwcvy7GoSgKuBodjz9Zk3F41WcRetNmEzxQe",
  "key7": "53aGCzLoKFd2Ed8FLxSZhoepdvHFXYM7AxJnT7xfxfSNfDg5RY6zvwN7jtBTVKufhanXRudA4dnKyUZuyNjWFVyE",
  "key8": "Sp1eTZZvLfJvrPdRzGG9NeN77oPfAg8qHQ8Y1sqt26JeMRPTF6fiG9ma8qPWQNEwZqZfjFyHkNLLDyj5s3o3amj",
  "key9": "4uPVe56EeVnummSWKZD69JgaURkS8nbPorS8UsruTFJhjkcqXPMGh8P2cXbDPNs1NUDWRi9gaeWzcr1SPccALBpS",
  "key10": "5TWVFLLyqiVqHbwgEbET8NFFAYEN9PZiSZPD5BA8v7tvX5X53BJYMSdx8itFUvzgkxVsqSWDfCqw5oDdkUmWMRUC",
  "key11": "5ubaU5S7gxGAVNdV1X8zXtJPZm7FurenyqP4MzhpfbMmgwNtKyqJaNih3CLC3HtCMzN8e9okBoTd5ZJBTey1E54u",
  "key12": "2YQCC7ZSNEyovQeQ2DDemgKN5XyQQ4ynNNqNRoyyQVhG6o2nuH29mgsBxdkeDV2UZ6SQu5kNc9rYBt4BBrXd9cuZ",
  "key13": "zFqavHpUNSGRCZWps8Z65qanyeb9bdD5hAtgeDs2Qh6gzsqyfb58EmRxP1ZfHPePwuE62Zn8rH1WmW96EgxGUoj",
  "key14": "3N6hMvyLNPT8VXyVRTC8tZpPfAtWEboWRRKSicBTFmEfkQ63Ffn77MzDeKNPj6y8mMmEPQvmswuUVDbBpnAJuNdc",
  "key15": "3VjNqZJBp9ZXLMizYJHooccje9fpc8p5S1TLq3aQbbz8n5s9cwfK6bRZeUWFvMANZDedzDzbcS1aES2dTp9aBrNg",
  "key16": "wUZ97xxN7oH3uqiH55u8KZ64SrCifqgbP7TekTdFznpeyFypfuCcCpUT1u4MH29RiMq9HJyikFAqQYE2tApAUKE",
  "key17": "BR1MWA2RHb5sYW2vcWiwxvT7WTU3X5G5uwmqCE1x2NJ5ZT38xEDFo8za6P3YCB5MkzxsRQaZJE9krUemmtq6u4S",
  "key18": "3zJ4dNYcGqWomgNPZudFny7cXGtYsH7WKdPQvXF9HZenfMUQEYzBvGQQxB9ix9mdTThraifXjCSeUXzRvCUvGAfC",
  "key19": "4KkyyXU8Z4XcHJFZpnAwDJneZumJXXo57Wr2nL4TU4xmRh88NSxM2Yvpuy6CcMz2FGWpdHkxP7xY5jJwS3Y3twNb",
  "key20": "3qd1Xit5Kku3VDvhpzQsfPqR7hg984dxEzFLFuqY7kbTvYXkjcHF1YfB9V4DcYLZW5k7DkH8sqEyHECEw5zbfkHc",
  "key21": "CnwPrarAMYcnvuam2zUymB5345GbJfqcWbzaC44iLDd3SQCqvu1trbfB9suEJZJVZWg9ppKX9EhiFQjEVsQSQCM",
  "key22": "3MY8pZJ62LRF23C78YKKRQTG2dJWD1mx2Vicske1JAxhRTeFTCje2gyJzPVvQgjrvwTgeGBoZUryjHacgTgUQx3U",
  "key23": "YRVEqFdMdLGeRVYJHa9PTm92YMJAksF8bkDU2CMbcEasGX2FtrTLyRtwX6955CHP1sozfbBbsWHwgJiFrJgCwRa",
  "key24": "3cgPEFitPRf1dr2XJpVTiGp4KCF4vBRqK8wF1koNLrnPidTUR96UumRmKavvs4wj3ZfyVBYvCs2fHf5th2Wb3BpQ",
  "key25": "5foT2mzpmLhof2TfAfpLL4D2oBXA8QFnnseNBx15D73HgRuLGuaP8ReEoCse9KickXNhG5o3EDWtUgNnvZbpuoLZ",
  "key26": "4sNX41bospibMzZXcgQC6oLPPHshs54QEoWTPkrbnSZfb6V78oJhyFaJETY8MkKXezirnaivNvUbXMAg9Wgd3LbH",
  "key27": "2PAqjSJxGJbBo2Ye4HVHNF4BRg8AxQJtkFH7pEP4xS7wXgw2zNma1jjbRGXVFPZvbsusk8Hnx7LZiq5nNRzpdzUH",
  "key28": "5vkhmD8UdqaztGsCeH9qkCcpn3e8jbXtZQouvwCAKPgVy1ncLMUroQCXLSHNjQEq89XydVDzzw7gKjbmZVm6kuUy",
  "key29": "m8K6fQ7f5g9ZVJTARBZGMdJW67zw1D2GC5BN4n8nn3gX9kkUt1djC89XWaWsvXYmDwikdNgJUqhQ9rNQidT8Syg",
  "key30": "LmC4e8akLURLNqdR8NH4BVrmaF2XQpGjQ1SUVk769czc6LRMxgdGxSAcko5iaFhgsto8e6AYwYWKCNF6sGVMbXY",
  "key31": "25hQzkuYTjYp5jgdrNJts9BQGTZxsBXCqntmUBsHzcHoEyDC26K7bFbRBrUL4JBTsJ94nadfhc9bhMvx2V6hMH1U",
  "key32": "3ieKPRNRiCP8s2gfX7jgLqb3DuMRjqpwrSnNKeU1xNSbmRQiUN8Q9A8RYM8ch9izAFFXLBDLeqS5B7NdjoS259B",
  "key33": "4HuuKRi1eJQ1trvYiPTFjnZ2f29Gg5bUnFsLuUajfPJguhKeUJc6FndFXMXPoXpAeQjTuuDHWd7maBmeoDizWT7L"
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

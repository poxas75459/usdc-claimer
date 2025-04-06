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
    "hNWaRKN8m3sPFKEmaHyvjGq7uRgje7XMho6FkWbJsxq8EFZfxtkTvGZZc1yQiVgR5zHC5yD13Pwf6d28khhajD1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RoL7tjEKfwQka43gMoR9ZNyx8p9JDpThFecApw5rNdTcVVe66teA2LFSqvv5gzcr2BpPtTZ9Vr7WxbqxKLBGnL5",
  "key1": "2dRtcaVjrzU2xhbuzrUX5gKdAiDvDK2jK3PpZaobbNi8JMQNqCrFq8d1U34FkwPnxzxi5EHstVZuUFp3iHVx1GJU",
  "key2": "386HZ52Fh2rAm5tMk27wJV6pdCujZUJpVkv5o2bJvzUyR46wGyaHD7dEo78PuGvQNEdbJRiVCAM1fH7TdS9zUUhh",
  "key3": "aoZNG4xq9d9ET8qJ1dToM2PKKAMbiGUL3mb6vZkNi9DFhXnpe4dVPuQkYNvYigMPQkErpUvrLbrwJ4wPJvF9Lso",
  "key4": "2axcrUS2FUGbbHiJmZBfxHmB8iMAVZN2ztMpLQoVhckqSrsneKnHftcbr1rx6qrmF5eS7N1jbKtVZWkjHwFe1yZm",
  "key5": "UE4a64nJxb1gVv2PNDtoapBxY86K2WVe4HtqsqnCYBwTVw9FnEUAjkUedQrpSNrZt216UFYkb87Qi8ALfabzMZK",
  "key6": "27apLYudpS7HfbUGnR3ndbAoe1x5wGp58aWmcpucNSptrcbuLYsMfMeNVCw3EDjc6ryN4c9JeRk59FiUNiFGpA6A",
  "key7": "4P97euNBGZfchh17Ht1y2WD8Akrp9Zj3VTQpQrpHsiJttJwFsqZpigjMuewdzj5pVYnscvfoqMMBqfgkc4qL5KuY",
  "key8": "4PzDNsBrcNmsu8YBxdXRvwpnwu7vE35S8MVSz8jevaNYqZn8vXRgute6h6hAY44FK8FUH4oBb8c2xT3TqNzUqqaD",
  "key9": "5kgqeCxeWq3SPGEsHcHN7v9zUfLN2XcGNjhs4Yt9xYhEQRdfJ3u4cJfqH6hFqcmbapb7jAnx1RiWdssseDcs3wGB",
  "key10": "4aGgtQPRRa4WsbrwCjRqqSYckmhUEAccwW6bSGqad9scbLVg9ApwC1jr2p9TdLL9bC8amLopbSPZyGfn3tHJg2eY",
  "key11": "2qgfaaUgDxNexiGsRG69KpjFgDLN3zwXnXVgU3Aoc8EVbpJpUm9eFwF8NPGy98TnGg1zsCfoS12SQCE6QHR5mjDA",
  "key12": "3xyHmb4UaRVPYEPVF3M2A4P2dgvdMUSnErmgjnPXMComCuYRx79SqY6bg9NXAT62b4ZKNEjryE8To71vMKLHfnMH",
  "key13": "2xjagbZVvtd6WXhStSzHwxbzcf5BgdYmNLDomz1QTgUWXkfbQttBHJbJFBVUeVd95g514TAASVNdAYYi1xBeXZWF",
  "key14": "5RJgShxE1HBESf3sL7xdoavHQJtTvMWFvfjwHxhPLw3qCeLeZk58sUG6GqaMFc1bNuLjAqzVrjSxDWiVoicrXstx",
  "key15": "4nqmTfyCRhqP3MuVYWqjSgA5H632gd6KmJzgF4pttnEsBXNf6pK7GXDXmaifFXhWYbhG39UZaFdg5b38FJ1Mzcyr",
  "key16": "WRvBsMVEUhN5WGE77UPpdMW4BGcEaidxX9PxEJhSrowWxA3MksKi8FUskWxzkbHzjKLm2xkKk7LX64uknxdDnaM",
  "key17": "3rE1Hp3rJYZU8sHHmSrYXMdphJunN4i5rd7a42AxxKxmNuFzJRPGfuew7kKwiHqK9impGiywJ7h8p6KhGQp8zVut",
  "key18": "5cFPzuGfdgpPEhB46hwaCKCzEeoxgK7YfUWTGjjRnoo3N4BFCXu9o4kBh1mxsxaFZrEgagx7hrxWGdHK92WURR6X",
  "key19": "3HbrrZp2YGmbcs51s2hy2DsAJgYafN2qqaAZ93Mwnt8cmJ237sEazREq55P54u4N4RwKBttRArsYgqF91xgWxx4a",
  "key20": "ohUrsVvWvkp7JyFWTvzuag7hYjXqhpAjZDPfvhLRuJtwYA3eRWWm3ZEMJM1c4CXw4H1D4cfR2KDi4XdXa51s6bM",
  "key21": "4vkn52nauwyKEvXWzxokN8Jfm1Dq731ZXTimH6o9hGb4LNHCYGNjBaGm6XWgUp7nE9Y81x1WhhMkcyCYBLikEgky",
  "key22": "yGibsgqDXANHfx56Wj7pEPvmptJwX4eJ46EnaesXLZvUrPb9F8733VmKcmPKfBtv8ZqLSsKpjuUtrsECDTmWyHZ",
  "key23": "3Q8Axfqjj3kAg7QrUwrR4amhzMqN3e28Uy7rHAY5HoRREmfTAvcaRVEAeUvyKRNEp2VetwzPXfiLHW5kF8vk2uPD",
  "key24": "266sn9CcRshNg1XrZcZZMvRUira2aajZabNZCUBU2h2EYbdA73xzCKBeCstwvRqASw9yskxw8N5iDjT57r5y1F8s",
  "key25": "4awLjBSajYqpApsHKnPjDrTg12GeRVvmRFL42jxDBruHJ3wizB9YXDTguEg3e9KXeMEvgXGS4BT7n5HpxrV9WcKM",
  "key26": "5gf4WG4LUbPmJMrfHtbocGPU4sYGudAFJsUFpAX9dLxCKnj5J1Yh2Q7Gh7DHqKaPGJgCLF5axks8mZGy697LVBLZ",
  "key27": "4aAxZuh4Wpx6vMRJFG5VtUgWLS88s2Yr4FE7J8JzawtET6gTBKeAMHQU5gjKadNSHq637SqvmordijhyGSsXCiPH",
  "key28": "64tt18LfuSHgECgixPEsZurvpzp1ZzHbSMWpdUyxCMn3szB81cFDuDdJqni3a7XPr2LqmpdXKRtsnR4uYXENWANQ"
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

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
    "5wQa182hFH2DymuZyXjQp7akVj5LRscJCwAvpQ98ZVz4dGDowQXoZ7pDMfEmtDssjsVs9WsgHUBsN9A6Vs5PEz7D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67VgSDJyhHid2kf6gDdVGiRVUXYH7ZgmfUXBMA2CSr5utRj2HySG5bw6Ltqb6ZogC4AV8DHpXxUhDTwLHoqkDAMb",
  "key1": "39t1U6xyyQgDna8ccfioz8sj41JTHmtqGVKGNFzs359swQwms94SQhHcqTKkCMS1pzA78NAnNXs7UQcvDWJRPng9",
  "key2": "5JgBDhUcYbw6sFi1X9JPovesFpaHDUTLrKkdL1KNFs6M12uuiP3rNy1jR2A421dagKhayy2XwRdgmJ6vFBGpgnQP",
  "key3": "2UdfoYeBhPX3QZ1iPgyNZijbHvz1oQcvYsXff3SappdgLp3VxT2sBbn2tBkkxeeZEMmMc9bnepcF86cEwjGeY3Bp",
  "key4": "5pqePFzt6C3hpGFWShwtZosr3R8AtqbdGinGD4RieBEgmgaLrGeCW4ZqNeUZ4oTbZWhWAYgSPp1ceauW2esPykn5",
  "key5": "uDdbkNciXLF96HyGkGzkyBGEg6ACZr7GruPDAkyxffbtmKrZvS52GhNjnfDU2fnRHKNNDsr8dUfGQkvu45QTkPp",
  "key6": "2hG2MJEFLnvA9UPU9doqbPWo14Me6ebsgU9sSjtJhvJjPSaEc9w3aJAHfZCJrdhWyKgBAKN2JypcpcgDtXUQ5KF7",
  "key7": "4jErPi662L3MVNLK9VKEaTyMtmc3VXdzqMG3CgXBzE4oQtzCSxbcg7KzHj5Sns7KC93iRoukRnHC4RNPWhfiL6eD",
  "key8": "3whi1uHFkaL8EpbFF3C8MHCKm6bqGKtQrfcFYT7s7xFfEppqpqq98nFU4oA1Pyo7XkSs5NWi5mAXLQ37ibHD8mxu",
  "key9": "4Q36YQXMkmofyxMGBU6fiN74UyVGtYfSm8brB5DQr4QMvEqoqPbLk2PxYafnaS98Mwsg9HTyRMomsRvKwmgaJGfT",
  "key10": "2mwuZu9ewRGY327CKpSdvY67gwXLcpoU6gRyNGKUF6KsNvbQnMvAx2p5SmtnYBLaaWXSLgcyLxzKjbVyWmrx4DSA",
  "key11": "4JytUV5NPnYgTpoc3VHiHBb1JFnBzH4o2P472Bbt7Tkf3GxZkUZr6KPnfoq6UJdmPvsqTsDizocmeBFB9tsc7sLk",
  "key12": "4YH39XHhE97NEhGxUkrmuGCAVMxuCDXhZGmUYyBjvNK7BjLyQT5dk6XtFQ7wPw5QNmo6H7hr2tyNdph1EYNep2pv",
  "key13": "AWxyTcNBcBugA8McaMg7jgXZhd7cwBhUVKfqwoNGKNtuynwAKiyNo7aM7CUL4ruwCezRkdvV7B26cbcmUQWrGeF",
  "key14": "3gdSGgpJnfaF8SVuVLJA1q7gUVPjYKzLRa2Fg61dhSmNMjH4nwetfsfsFe8EamqFcNEjRALjS9RX6aqXxQsQijtD",
  "key15": "J7FSbaQ54sEKFYjnUMpLcqj5vZjg7Sme2aPqcXXM5Ak1BdiKXfYFtjFTD8KuiuYYnJ9Df7EPfYbastTRaHhaJYD",
  "key16": "4J3YDM1kJnHM8wKn4xbn6k6QRa3mL82dYWf3MwH4p6FnLZNPMH3nBGky89kJroMtkikN8VAtpNnjRc86MkDxqbRH",
  "key17": "5ZY6jKdjCan9HpTtWKiZ2F2vkCBUeuCGFrYtoyMaayzJvFu7HGcGQHyUzmBFjrdHJLnRuoQnKqRrD5LngDriGgko",
  "key18": "52NRaSSh2aRUxqMWjfk8jnR1mrz21UtsMzhn8FFkFst5CAQpoXwxaVQN2WJDDDQq65R9uhv7DmP7WFAr9aAbV8mt",
  "key19": "3TvqMenG6MR4tkePN9Dwkf2gajYgLabxRCtS41fyRU1sdYNoX6RD8qsR2VHb5NXQoh9szjXRPRmmc3RUjTa7tp6b",
  "key20": "2YanTEnkWZBff8rrFPMbagbcbtNGyyEdhcbKbTxohvXu9eUat1TREjgDHT9BSkgFXNECyTkYGY4nQ7CZAY7SUH3z",
  "key21": "YdHSsMmB7bT8Ne1Pa2ssuj7NZ9XpLWPn2hsu4krhMp4WcRpLrmGUfouqjYA58GjTknS2ipxXSKyzUBBWYJPnRQg",
  "key22": "2e8Q667QhheTWMgMc5YLYjtTKaYcaSPjeTDPem2poq3FUgBoRCtqbyT9g333LVppJGedSfFV4U1BXFUCCqZydio1",
  "key23": "2gTyRDzHg9nM1PMQXfT2hgas6468RTdQs6BY6WXfb7zHJoJZ8Miw84q48pHEueWm7hzLMRQDGuxjaCkF9pTWr8bR",
  "key24": "4yZvWzsohbCngcvuSCj7VU4nqp7FZ1QaAfLZKa1z18sxoAYF4ik4SycwzvqGBVThBAxx5Td8eWSSSHnktRKgPgF1"
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

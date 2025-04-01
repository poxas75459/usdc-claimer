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
    "4LdeVLudT2KVy5KH7wYWvwaJdx3CyAmrfEYQEcVf8MpJQ27osa1Bb1SJTqWqHY5UqFedUSwCmyqzGk7ssXNnENFu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JecjcuTdDbGYMhcHxR1Ugj6sa7G5zawZfYtuG1SPoyhemgRMpaFp8fETeqeM3BepZTURxGHZ6XgoznQ7QTbwDXk",
  "key1": "wJjFgsYmQZuK2kU3LL8213ktwZ1v5JiK3FV3EaSs7cU4n7cAQrJxLvWnU3iAmsJJSwGsaveLBxH6FNjRxco5tDn",
  "key2": "aM6ho6Zez6NrhPFGkThXtkgMz2HeQWXknTtxnzk26wp85uQL8w2bdUQH9eiNcMjsrnN95Ns7EwzkPA1yDPfsdBF",
  "key3": "UAcKwmoLXHH7BnjVzjCVdsqhzRuUptnsJeAVrekK2VxWCKGiAKe5j4VNW4PoPpaQKXq2rqgGUTAjjEzrzgaHnfF",
  "key4": "335Z6VgrEWH8t7iamUyQhHNzFt81Y5bHTCZqzpqvETw2kza5jVwh2r8ZF5f2nG1eZzYqyiczCNEqaAQCGcK6oMKe",
  "key5": "4NyP3KkxrvuDj6k7LobhaKEAnRncvJGjRBmA19rL81p1c4fqKrueaEUddeNrJjX2FqARd77s2AxK3vk58tDzUqyD",
  "key6": "4Q1dLc6NWacfwX8P38gTbtycW4aD2aKtGE7aPohsf2EeRUps7wBuzPbDFDQfpnan1bNievVfZZVKc3VRzE9kqMJM",
  "key7": "4XGV4Tv8o65VK8KeCbW1UkyGaFebdWLmDJRmg5jZPe6qx7jSGyw6j82bZw1zz5Jr1KFyqpwD9gGZCWJAi5H4MC5K",
  "key8": "4aJHpt5KyjPJpeVcYrqY8mNmR3dPjmwU4hzRXFd5Y73hUbVP7dwL3etGfcCjtyoza5QaaSoKkBEdCXoX37vE52Sr",
  "key9": "2c2k4dYiU2BxPo8yrCU7oQar1spsJuX1uMBnT8eUYU2C4RzSFpdp18e3oZQdMtSXCnA6FCUwEDdhBdPRihUCgwKD",
  "key10": "2ZMNvoYVauWyFpWUkY2jaTSiJBADxzUr5NjuNTs4VKfk3QP5cYC3dyQxrShv26QuoNiSPA6JSUm3wcbinjivSD5P",
  "key11": "5KXS6vnS5kPZXzuyGQzW6sQVC1NvhcUAxMahHX1zCc8cFvPv87rjQTFFafvGrdate1k8RDFFAQHNeK1E6kGBUKnW",
  "key12": "DT47FGBFpRUxvRpKQhZZPQ2izttgGeTpn38bBX7Do6RLRY5etTrYvw844Bs6eXHEJ7S3QLVteWAkrWwHgW66ai5",
  "key13": "5hddceExEK1cFVueDVmeBFDUTBdPhR31sqkXFZzCz87vwgqFDUurn1jszkTG6ZHopAVwd2Bgwy2ASNKAuTpJHt7n",
  "key14": "2dYVrejJPpPz4YMs9A5FzAjC86vhbpzRvs6oe8dnfWhXNmdc2drZEmqdAzENbUBNpiGrknwbBBZq7yhSSGdhrahh",
  "key15": "R5AXN3U3e9N4dgaZ241ogcU91sJPMRSFccBS8nzRYZBNRZwJnQKqN3G6fm6qYnQSa3zKuXExRBY7yHZCRdK7LdU",
  "key16": "5fY7qz29fnd2s4s9g3FVQ39KartUTnKgyzau2ViYBdvvTzX9jqVxdgXhkSUD9kVxvDWyjU9QVHNiuKUEMfCKoBJ3",
  "key17": "4WTLszCQfUanQV1uvq5JjRYc5H8CPXpJtrb1KfsoFFS8NgqBrTJeq77esZwhXtggpWba6Rv33ejUATpTJLL3RrFm",
  "key18": "3LQQLdd2K6fy1TtjrQtFWYuH2CSLJQv1M2p8yZQAEsfmHdHCPeAtsVn35JX6Uy7fq9VxGMqh2PM7y5H3P9rjW2Nt",
  "key19": "Jvz1HBqsgUNVfQJXarG16Maby4akzEQUhzmDgocq5TGLtyrreuUtPD7KLpBREnoMEkoFh3c7xRdaBjGJTKyDYj5",
  "key20": "41iEPvPFKBY9316cEWcrpcaW4rDryhduiJdFYKfN5RGNGFc9ZJkn5pxpVNR6ej2Av1bjzxj143s4bUSxcuUsttH2",
  "key21": "2fUmEqu1W1U8arFb1efCDs3V5AA1ziRHMFdaJVaDqpwym8pwJqGs576BBf32LvTJEQjLwaRBNvMaE9gbzHNQss87",
  "key22": "5npJdjRv7UtTpMLoM5od7Hk886FHS6r51eWzkw6nzc2X991mmhHVY7oyoB9Wd3936js4efYQm8BCsrmWsnqg4wTs",
  "key23": "52NK2HbGVWiu2eUXCkDc9PoqtakCEua171v6HEfQjpF327rC1Yewb8DJ9DkHpmUWuLxPcXcnkSunb7BBJ2iW5wSB",
  "key24": "sSEkEDyQsuQfBUzJNMgwcHFHfwo14MrPLKFQyAGPtja5fHNxLHmYkWLz6719iUYtjLRBZ38WhszyfEvFuhvLqRw",
  "key25": "3DTGR6PD1QPqeLsUo6Sot2Cy3fVPZK91Hif5rY2HEJ4xSKkXtQnwcKEu71grcczpG4KGj5oqq9TzebHf8ejDM4Ww",
  "key26": "4KAr3uMhKz1KGRUhXULjjGZzSJRK48eRerBvDd1xnmeD2Dp9QnbLkjUynyeT8SL25oTJyi89eEe4bpjw5XiP36K6",
  "key27": "3m7DVatejf2QaynWeJRh4oqGab7XBtSrA722qohCbHMiFE9f3TcnAUbsJue2M3VtGMQMYTvBh6y3PH5k6jhVnLHD",
  "key28": "sv2nArjNmhXicserrQEZrr7T9oAqJfNuVSUZoPzBhHGERNvumUw7SqGAxErpVx9aFxRMNmGWedSw41zdK58ouWr",
  "key29": "79rEZc8twFF6vdNZXJuL6fnwNvE4T1tx1DDN2ZDTC92Z2Xrc81KTjtq7QjEU3TcWMaJGCtkkgu3CESZy992x4Wp",
  "key30": "5P1TnjH7E6tBtzLQRYDSHkhm73EUniLRw4ckop12BHHG9KscFoR6W5HCoYnoideonFpzVbQtVKm2oVEbKkCGR6Yn",
  "key31": "tN74eamoKVNo2SBzwL23fsLSyGx1FA5vckGeLqzhtei5H1WEeSTVzYqiBvs3NN6AvYJboUMBJzWND5zbxsfkL3D",
  "key32": "3b32bKkPEepFtGUMkGAF7pCbyPfbpAhUEFZNnFtENqRVe6Pz3JmeyPiuBeTGRvmr6LnfKPcw77m6tUPfnpTJL2g5",
  "key33": "3NuTHap5SFfVmNeKM8hCDJ9ph5DpmfTeXZ4Y7JzQU5d5auMJENLzc57r94KJhA1VEE4kSSpk2ZY8s3aNoVMNhdE6",
  "key34": "UdCjpSnJQdjV8aLwE2yh49YvLj7dMikeF1w35a1BgYQdCHo1qcJ4UharqMjDDBvcrUSFcDTm9TFjY5hM4Li8WLM",
  "key35": "3d2P3q5b4E5BsnpPnKNHzpdKnQEX9mi5xiWTD9nrYJnR12nk8z9pV9NUWPv5uCVc8g5r58AiKiM7TMHwfytNRxBQ",
  "key36": "4Fy3WHvexJgQSBtbsTKP3HDv6Nd88d2vSqe1pgiyqEU9ejTAVTGLh78uMWfcAxbFA1j9Gpp8QvA83oD6JGG5EBc7",
  "key37": "LP7iftdDWvB9hEUYxofqP948mMz9XdaW835vFFn6KeVeq1d3Xn1EfZ7d7dhkndmYowzt1qtDQ6iCiq59vBQ9kWv"
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

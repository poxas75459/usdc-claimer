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
    "3P9dfiUt9KdiFTgy9Uykb6xSnjG6MwSYF2zzPNqgUtTU6ikfrp7uG8pxFjj2JSuJbRMN96ksBNorcsVZm6JnDFN3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gFsATgX6L5Kvdvqjq9UGMRjjXMdwh3ohSMV7dejNY9ApMp3n7wbJAKh6TwSRWwm1TBNWp3nHKz4TTPmWAtAs5Jw",
  "key1": "5rhSShBiVATb86cqtsN57kDm75SLHaebPxf1BgERAfBPzvynrn9S8mnmnxe5XCvqd5RAD7ieGKkQxdbqhhKJmshZ",
  "key2": "4MPQfD1PS839PtAY4Qj8igfM5NSgMyYCu6unRTfjHu9Syhjw2Yk7frgXe13RwBEd9Ehp8udGaBWSqQ7jeJ9A5KRR",
  "key3": "vi1S57RHB7DKx6m68k53QeKCsHKZ34mBSxewiUyN2JLMMcGChJXEZdXNL2efoY5BrbZY1whg4rGWE2qnZJ8vKhR",
  "key4": "K6ERS1SYQn4xu9vhb4rW3CX5fYCNVuHe2AAZk6bstvpFoD1hV74c6UTLwqDKHBFRURJY5sSrXKncGXD7NCZMB2p",
  "key5": "5m49C3KcGWwSJmi1TTyBqMBAtDWFzfhB1W3zNkZ1d9k3DQo6eXiwfeeBTz9xFo1cQjp62TMhWc4GGxgAoUB7FGBL",
  "key6": "4cRfiFXky5TVwcx6BDcxUCAoS5VPjiNQyFLx9juBXdS1xStB1oc95coZUnWU5Z62bTNL2ku39ERexje1mna5j7Yz",
  "key7": "5UroBVg7sVWgBZTzch6HBGbGwNmBivvx2MqMo85AQWGLbKi6NTEaUgGnVqqiC6rVg8uj3PkfYD8M2HDomVWc87Pz",
  "key8": "3uHmEr3nP3sUfanszJqF7sF3H1VMNYqmcWrM1yaT87tFQ4QKYUND4wtQENpShVvsYCFmkvtC1uKYYGR4REXmWCNF",
  "key9": "4P7wASHpEnCBAgkv4rctewjz4de6TQnS9Y1tyfJb5BBFUDKJLRntA7YWLyN7CquKXm2s6MNtx2Gr81Wb3wfkBTqU",
  "key10": "2bf2RJPPAqqyvHbJkHiQqBoHJXvvTzLv8gsfL6XE9PpGr7ftquFuVEK8F7nfhh51JCpcdKYQyPahH8GqDA7rJ8uT",
  "key11": "3RD6mnGV55WLxmteLURFZSkhgywC8ANSuSUx89zE5WueacTDi7HAxoyXazdj4jKGA6ZbkDkTuG65imYPmP2YFUcX",
  "key12": "2UnaKhjmqJk6F3BDmB3szKV68B6NsUq8At8MPUo5tyfeve91pZaVo5EygyUnpU41SPpP1xEvrmRnFpxKxqX6f7Sw",
  "key13": "qeRj59hhfAgJtB1ummgSPXfUUhsWFN13c2mqMKkUz87mgoo3ZVuF5he8zPkiPAHkpuophvPeUGui2sx6Uj7JVev",
  "key14": "3XeB7ezCxEJkiXhMuyJ48Je734z5HJ1rJo7RGMHWXph5rMioNmUCAzJmmxhN37HpCpUN8UHMAsqtzjL4mW6n7gFh",
  "key15": "5pTeMRysuDmBD15DdSsoPiqTXjMWXq5R4Mj2r7J6PHRtJykydAuBDnLQQoMzADsBReJBtcQws4BJhocgWD82Sh1z",
  "key16": "22G4AQfXXhm7nJKEVugB67TCm8jzmcHH8rmAvHirk3K9g2nEzDRudjzWR3T3genJi2WKPrbL1hESVcsCZViKD8NP",
  "key17": "VrxpGcruz6E8XERKck9F2xTnp2xMfW9Lui4gja5GhPZpADouLScCoKAtt2Awe3JuVpwnUaLsNBRuFRL6jLgTZRu",
  "key18": "3b3MvfPUncDcXfuTVPX6CdobLiShzqtWW8sNLitfsJdKV2HMGaB3o7GeXz452uFrvr7nuphSXSm7VKn1T5D4DAFN",
  "key19": "2LiiWqJvpRYrNmxXtwsQ6SMaFvkTDEpoUNzWEeFaEd3gcDJPUkKbzmZ42ACK9kemGfVU8JH95GESRbno9PVUiiQ",
  "key20": "ZZw4eDtYYBjnQQyYDh3vH8QePrjk8E7wrpE9vetLnzX6WhZbxrGAPeqB3tzofpCZ3zMjnehRZLCitL7stmcXyfh",
  "key21": "JrfxKK7cyC22dJGU9reSZLsN8qfnShrEfnHfjgSah8afW1BzCErFv9MkGcnvTftn6E6Bm3kXfZkaedqo866kfny",
  "key22": "2PJGJjAPJbpHcojbC9dr7FrgkdrxncyRq6QAgDBGYHMGPBQpdTQv3MsUsKXGLrhQPAPeKbQamM9uNFozhNjog1vQ",
  "key23": "4BMtsFVrLjDL5Vx5iDxFNkHxrrb7XHvinsoxAPn61ZcYKC6WHzQhiiRdqqJLMNk1ooc1kdBKagubNE4hZspokPAG",
  "key24": "48RoRSpUUpNLD3WGYnz38QCUoBJ854RgnGXY2DMAvfBAxdr4ghiMrdDSQna4Asx9BwLrCgm595xGLe1UmH7w4AGP",
  "key25": "3voEZAwdTGhevvszJfQsRA4DqiuDZuVQC9KqKGqvrvzsUQDiKqgJ2ZDwSwYQh6JJsHjqS3kcysBweTtqZ4mhXMBE",
  "key26": "5aZhCQWr3ZQ4AURJcrpejoxt4EqCLyw7NU5e5dSyLA6Gfmkzz88tXK9MwF916C9xQLiQkdqkUMtC2jxNUYYGWMBo",
  "key27": "5s9gMMRSKfjfZsx1iXnQFmL39DQvJAvM4ceQCTo9AimGPLc16LqLqwsjQWYeaVJQYJ7qf6mAQnEHQbdB3YC4MXGD",
  "key28": "47Wmmbw89FeGst1BnZfzSMFuFYHV6XHXg5JMCr8hVZjb89A5hCfE1s73zjGviDbjYYggpM2QMNCqV1bzHrF6dCL",
  "key29": "66ZbkyWwESV58c3AVKyGHQP6VL4yZttM6UVTgzBejAMMLiasTrMoShN7aiCvh4HxqXRahUJM6TjDLDX9N1HwKUZ2"
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

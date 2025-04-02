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
    "36Pd2ks16nVq4R6m3XENK9ptCMvpsqjpGe7qxJJTKbzkBbjq2aDtuRBWjSxN6qapzxqT7DkkDtz32Q8gahpzMwbt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gu8wceihHE7ZicUVWsVpT99eFGhqeEnEpdunHw1ko41iKL87KiwAr1CiP5TEML5wMUPZ9Y6s5CschUdU4aerUrT",
  "key1": "4qZ6XGybtpKMLUixYfjFwJpZsUVhid5AitwC3JLESyBFErWQDjkKnAgBigaetQvCLt4wtzQRcKUgXUKk5LRdH4wN",
  "key2": "gZMoEfEJhKoHjudnerqxWpZ1LQwsumqppYUF7kMwADoP5jzbyPYjWrHD51FYvajKipxB4vZZit9psSDfiazW4iE",
  "key3": "RyWVxLnRrVyrnVDuxaLMASYc7uPfxUR7QsnEhsowFGknG5X2h8KuC8mUgZTP7ZacwZ5BB4AnYBCfKvWEhfvo5aR",
  "key4": "3gRehQN7pzm2HbNyXXsWZmrDUWRvMRzygwByKrYWxPDybjZRYn8yCi8vNN8TEtgYqeMxinxqgJdSP33FcDYLQ9hc",
  "key5": "4kopnYgEV2ZXLskwokXarJiKZZPjzUD8dnAkQFHV56L39vHjnG9LjUMqWY8gZYoFMJNWGaeAgEeXDF9RvZ5hSE5X",
  "key6": "4DQj6ZJasTt3SoDsAZQyU6NbsRBudwQKi3SkE4et7Uc34GkfnS13kegB1bCyLAMKuKW3NaDcQRAn7CmrXj5zADcX",
  "key7": "4BQuMbv48sv3JDd4cUPHy1oADgnUADH3P8NpUAhokUScHd8ktjVCmyGxU7GoXoFJc5Ln4qcPL8NtXS8CQ8TYwfvq",
  "key8": "4FTfstPYbeepHxNCt9wc9aqzWBKB9mjtg2QqR9QpzPLhyGp8vacQFu7EmzTdBY8tBLy187D7JHYAZB9srREFzify",
  "key9": "5F1Jhkbbfa8K25CF5YVnA19WdjZd65U7i1bjqGtKf6K1GseJCvHmrAJpRamv6Z6YL9fsjwhZbyCpQj5CSmf1Fi1t",
  "key10": "2E2XJdXnucHjR7ewsWcMTD2oydfzdLWvmNLNXMzdM6hL54RfmMLtPMDjoJE8dsonweJs7b26Sr3LF5toJxG96vkD",
  "key11": "4Fk2Y9VZeiJU9ZsiDoPfFu1LsF9ugwMmqDXnE5SsF2b8jyFzkL4Gdvnt3dz7WWxppHkegauS84uDWFyuECV5vPNT",
  "key12": "4oiwCNeNduF8oou63Fdkxc1VSH35XG9XgUWZFdb5CL7h2wfTiZnyg7brEbJuwoowbio1qBv9zQ2Xe1uH9UJFAPYx",
  "key13": "2qU2yrzSyezqTdcMrya1KLt1HrWCz9fbkJGpnEWSpPRMfGYfQfJgAqRG7wKbbJL4yH3f5K9abc5YDkJK1voPEVHe",
  "key14": "25GvU7h2rsf7Pi3hdQka6S8iqXMXvQvv3S1Ao9j77BftotigiGU2vQqPLVWmnPpLS8mHcKHA5PdtiA5aGrFGV8aV",
  "key15": "3d9nechHVc3TGLdQJLP65edcsuLVVPXAyJUevvVeA2zavfRBVNW26CoLXDrejqFQvPJe87dYBhnMW2as35PitH4a",
  "key16": "3x4VYoshmdSq8pgDRs6w8c7pHRWzzzFw8g1cobii9BKuVtk1YZgw9ytLkLqyxJSm36wS6kiqY3fhi3wdBBhLccCn",
  "key17": "4WR382z4v8QKrvNCCFx2TqAyVzPfR1GJS8RcNcimZfYrpr3mGmMnW4r3VWtJnQJCCfBndDURjawtkA6kgY7byUJ9",
  "key18": "2hpDsZ5hDX24wt5XKzoXN4bTUGANcoaqdZXAbYUhz1fxYbwL1kV7bQ5voWdEZX5vLMjZ7iAaAgSemcN4TcqY1ppt",
  "key19": "Y8jdpkiaBFJJveAu9CB4DiKJS88Y8TdhKemS5XQCU35phDMTAYgbNvTHnpdGHAPHizfYJgreJ4kv25nJQ9nTTTy",
  "key20": "5hM6pRrfYmQXwJ3XPKyt2pS9ipLyjEqiXAzcizfH9k1sB49Tdy7Jz9mVgTxiMQrFQicBQmmhotNCuHZQX648434Z",
  "key21": "3BPy8wbRpFEFHd2EES1gCBuoo6beNnV7DQUajLoCBqrjR2c6DPFEwtHcEGhgTjctVdAW2tRWsFthQFLRbjP1Zevq",
  "key22": "4MUSPMDV4oAqvsDDAqvkvQqHJSmue2AHestuVJ2tqNFSwvnfrGGhnB19uhKHwpj72rEyCwaX3qLrznNodhborhQL",
  "key23": "122YqTJejU2m5PzsxHNocxZZvTbrsv4yR5dhYoYvbaV9oWNnz7qxvrFZcu33g2LwFGBog4iy86UsE4Mb7jy4h32t",
  "key24": "4imsoWwXVrPEi9WeP487gGUUSf1s5VXHRFz4TiFiceukEkx1faWCyFySzFWSmJvjVHVuz1NPopdw9AebdTZsTjT1",
  "key25": "4JcdM3LktzL7HxaM1MG6bHpF6neVpwHwDwfjzAAtquoSbXf5VhG5SiVB4f33FD7dvAX7MpcF62sgFSMLTunZW8sp"
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

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
    "2YJop42yiNoefpM6u3Wi6uxwbpXkLWXppqXLd7yTdJkkEY5kszUD8dJEW88zEoABMU6is9EPodjTKJkQSW2S17a5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UpATFtc6HCVmRJuGY5fKHJzbqw7hJemTh8rMbwi2HAg1Khb3tH7jLZwnsPL59RXne9y5pjo3J4GRmSfG7mjRN3o",
  "key1": "2bc7sWhMXgVa2Z2uC62gKDLxsPgNQjmbChzk4JtDfpxMHkduXD4Za2JZsyKUQ5JbTqtedM5U9BFXXxwobJgr5sMP",
  "key2": "4dboWbcSX5C9tZJj4tEMN1trBdJ1SfkpNSNrT59ZK4LapkeGZz7otfV78j4E46Vh8metZpqZmm8ffjbe6EBtHU78",
  "key3": "4GhpKQ8C56VqVZcxoT8A1kBh74EAgUiHRRRbWyNazjMghRui5sRMdKHP8eoBKDDPnwhhXizLicoPYJnDqCuUw8sB",
  "key4": "5nTD7ZAsybh58dhW8bPhq8n17DtmeYyGMQ5DdvcAigEju8y4SbWgePhkpe7PDu6XFNjvYFrCrkmYjgFy9J8akw6C",
  "key5": "3fXJ7oMX2rbBj8w1KmUbmRHt2DdY7H2oFYgkT4ZJFBBSNt1ysGtEFQbaW8G2wu2SDeFe2efimf9m2Nk3rjtxWij",
  "key6": "3E21JQinaKEC9tk9WApLqmZTC8wwnyXCU9jn3StdnctY1aT3wcQqX2xQ7PFWNTBqWovhpp3D5fvvKfSvmByseTZu",
  "key7": "3tW7qj7sHyBQpvK3YYMkXRxjXZP4orXsZzHXssnyf73dwn3cr3NsmqaNEaydyRnNn5QvAzdHUadAK9cTdSfD9wWo",
  "key8": "4n8TqYdaiU8kJZC3W3j2EtyTvFnzSe6Zq1ybDLTohaRDLzWmbcKXYi9vuecc8NkPPMji3pX97xGhbqZtyy9Zj8Cv",
  "key9": "3k19vjvQ1GLPH4gvEHtMZnhWNjzK7fQN1DHfozL16dvh7MinQbo1HhNWtpibyzYxw4FZs3P5BqWyNZbKqp34gXAN",
  "key10": "49fcQ6WB9xTJpu36aFocBHHuQPE95pP4yzhJbRUi3uw8vSXXNseDoNnRghPCV6YSWGj8FgMwu8eUg6QfWp1TkVcX",
  "key11": "cYHFV7tgcHNeDDe3zgsqizVpioNp6UkwyxXGd4Zo9pzeAAva5bVHcvXXxMA6ypSphMqgYXFjswpA6Dqzs6rPGZ1",
  "key12": "5F2M5M8RZSn4YsfEuhFVfuxiZaEjgVd9omK5Jx8HTCH3xmJh3Vd9F95z3A27cXHdwaEXJ95JfWx55TyMNZS8CRVY",
  "key13": "3DzrVbuYkyYHxD7jy2XT23ALCm2mRmgKUxkQHVgyLSawaP9QSfAPnYGWnBzzsYzzE3bBh3EQwNAWR5EmjXNUVf8k",
  "key14": "2qRbWvdfSYWbErmUUWT6SpWNxZJDdh18QEVQVMNU9ftCq48hPNCMTonsYfkby5foNcCkdTnKnkNkuVUf7E3fzaA1",
  "key15": "3SwU3FfBFGFoy6aYSjzC9AzJq6S8DEkw6smjw19DMRxM2vP3KasqfdwyCNZ6kuPTRaX5GvQmPxhMbJRY7Cr6NEqc",
  "key16": "4YPTAQNQ1Gha82GdQYCTr9krVuNNVxEhHham6LQHyqTxM9hStDCNMDdKQBrLjZxFUDBVt2zG1iz9T3QGjQEuTA8c",
  "key17": "4PD1GkiN2Moc2xHEQwRY7QMWzgpp2p5zAgxGuSKA6rwwXhcSb9MbRFE3arFifvPUdsLskN8mo2vVodUdHyUXnQMi",
  "key18": "4KGPDh77Rf3qedX5CpebyZi9LS7QQ8gRXRwRe61ivrzHxVZjs9BVh16RxySY7P5K51N8SRiYnVLfpZSEaQeZnWuC",
  "key19": "2qx6bVpPvHSXkYLe5Demc4hGqrR4BHtnqqou6nVkmT16KUzK3PTE3gRjFccpdAxGwzaJHhG9dAw5C3aQ3v2qo4EC",
  "key20": "2wrWaNS9F3xMEg3SHjQqAVDQU3dJkUntgr57NZJzFSTGDMPy8mSjg23kmGRdHFFXaRRSkYcyCw2uq6tLu9fSgvFr",
  "key21": "2T7A2oxmsPCahbBvhUvc2CXMrQf8JDBqJVtiQLc7q5DyHBhoeBMTVJgzP4SFaCyQopqZeSCUPc5jdqfeQZ1hfjPD",
  "key22": "4oa4QRQMfZkQxZHgx8ocpoYcL3roJhY3qXaswQ8ahw5WyoaKcDqeamTTgaM27Qwti61TeLM45wNUJqCLWZCAHeYk",
  "key23": "2bE1GJ5v24f8DRx23GqARqo1LLiqNXF4pWn4DzkAWfTDvvTmKq5kd6P8rGK13LxaQqHPsX8NvFEdjsDKKeLJ7zvA",
  "key24": "2nMRbfDTLUZUHP4kirLwKaQLJKBipuv93WiR4sBrkyQZid2tiaRdWhJ9VjZSMvW9LfWjTi9iGfgyLLFJZsQNSn4C",
  "key25": "3Gnp4MPNkeJhGkuJqQo71kvHagDpb94G1unAFmV9d66cc2dHpn6SQ5Ur4fzEobjBmnNFADZPDPPwxP5r3AU8CjsG",
  "key26": "49EgUqozTVog55sqqFUq8DSQ2ftXb7paQ9MpRe7BPSu8URgnaSvD4LaKou5gF8zsoZJURTx8prJ26NKAyKH3JNQ8",
  "key27": "4nc2w83zU9q4EBvgPQMzSwMVNdLSHxz3tqVDVU16Q1LH7B8CCcvhePCJYBxcUdBja2B8qpVwyRtSfsjw9Ma7B5Hp",
  "key28": "2bbx3QgZ3v2utpA12B4C1cjXRasYJPymQM5EoN6Sv8rPECy5BupkC6JAd4z69WbTPuBNZnb1ojqsUcMxQ2UUHdhp",
  "key29": "413bddngPjz5k3SZ2R6FtxKk8x26yiYxkBQjRE7rxbN2GFJrJXoEddNzNCXBo6BJdF1DDWywsAmGkqXcLQRQmB6M"
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

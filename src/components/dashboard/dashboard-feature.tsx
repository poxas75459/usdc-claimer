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
    "29KeGEyZpv182XMeDqjKJTZtvQHccM8qNAkaVUP8YnZ5rNKHVtq56B8zgw42g4mxdgHJMDT51MvHjiTjCmDpa9LD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hrpNPT2Ppn3vq7xPMNAeToy7TZHBneb62D5MMMBqdavRYze2k8vk7TfFuXiBrGb8mqi9bf9qKHzSr34tqj4GUwf",
  "key1": "2MWsv9afR9kX6L1u6SXuxa9urZsYrKJwoWJrBXDihRkLSChPFhQBiZRim899MTiZtTCZErPN3GmGgMq4zsy7CNSk",
  "key2": "62ZAdgFanqNyeL7NhWjXFRsxgzszeefrWfLBZ1MKjm84wvgyRvqQFgbKCYDxidAJn93ACc9PCAjNsD2fUtSsJ2fj",
  "key3": "2cLtAbwhBYen7j2f43SFgqE7VULzAeDNBxpugvaZxQdwFbwTtYTCMig9m4QvWVmAqkoLEoW6ps9XXeCCBQW2U43z",
  "key4": "5dTDJ1ddTg5jFkjTNvwj4rcPV8TCYYkiBbkohSP29MjvQmvaVoFnX3BX7mNgPG45ex9QVFaDQ4S8iNAWusy5Mdo6",
  "key5": "5pTT1QFT9dSRbPmro7wRMhSgYUDi9PqPe6Jkkq2Rq86ex6iB1mbbWkF23N4X4zgRAFUNKSQGK4UeXuyp84nVUZ8t",
  "key6": "2hhxVLdf9STsyB1k5br53BQbrjwdhyAtexYZb1XGHzG7wme4RnPiT1AXpddzP2kA5Qhrd1oN2fgLE21ocPFoVV3x",
  "key7": "53qsWqY2CR9K4mzVXtNRYpcbtwjocPNmTNy7mA38d2HsAZx1u2JSThnfkqY2SdxfM7wRjWBePxEnsXe3dyu9Zc8Q",
  "key8": "3L8M7tRuNtC3tk7ATxisRgCk3qSAN5h5yhdaxo2145inEyDkdA6sMqZFZYv4cp364ExEjMHu3RS2FB1WJkgnKLga",
  "key9": "2SEG3Ca9KccPoPWeNCuiRP9zFuKkzGpjBJYhxApQS5H2BttEnopyXSFvqfXGPkanywz9e8jah8amrjGRy9goSTXD",
  "key10": "5Mr54cXYCmjGz5wHTgPR1bv2X1eXifWSyM4vtKwiLfCc7P3cR8MiLpUPuNdf6y5BY1J1e3uLThez3hg8oUszJVPu",
  "key11": "3VBZV89i3kKjYNVHK7b4GS8i5YvsP8STNd3gEo9LZyn2VAq9uyfnv5QfmouTVHjoDZx91tsbwdh2Eo3g8g6sWrAj",
  "key12": "5PKaFFSyTHPF4SdQHd2kjze93gYabL4DNPc1qc9KE65myBJJ3dNP1vJvWSQyt6a9MvmejiyUUrYEee8MELdWsSE5",
  "key13": "wgFz2AJciCMxmY515aZz21YqHGqgdCFNMWjVm8JwD5WA48TMu4Gs4hSGVbu6wUwWXbgaxxUAHuZFhxpmDgeJPyS",
  "key14": "c495h3aAAa7LHB1syX3a5VTmJgF2ED8JtLxnkYFr6quu7fthm1yqb2SA67ctiWQXNaJ8Vnu4T2EeUMnvUaSiGGQ",
  "key15": "264KTANiVBfwuA9R9npmjEA5aTTve8eJnfZP8RQomhzzwi4eto9HPfMcsy7y2wcbfjxfMjbC7dXpKGJ1QUJ1vsRu",
  "key16": "4JmVntR1NTVaX21Eu7xP3AehGeUmgsrb1r6f7Rvr9PCpjaw7M3UppbA3xe5MSvqfJgoqcQPm2qu8vbss7FFps1iQ",
  "key17": "3rq6go8eZqkTLUvih9yXuQJjWUyurhRFjVzBo1pPhJA3Us34FWVNa6FrxHvkfeDzQLWrY9cTVWDS6cd8wAeKZ9AW",
  "key18": "hiSnprT2nFjFu5sgBdTk9CPCLLFY5fDDgfGRjPvrRrACT7b5hGoDw2W1QxwxSiLNM6RX9wX14strbxkdms9ggwF",
  "key19": "2tMnbN8oShJtqwgY2cxYWGW3AxDksxcQ3EoveyRCXyHfChsRWL29pfjqFue84CJ9ZGENy5A7oPwohNHtJfKYdan",
  "key20": "5sUmxkKhiEbp2378wkLidPnA3zrgCP6hTMgyfsVvuvKY7kHDCq5dKStFk4dDyaL9725KzCESpmV97Y22ygDGg2Jk",
  "key21": "4GZhdT9M95eZ8G1T2WjYdrsag2YhUEqaL2VUDxCVbcvBvzfLZxT4hrM91VJSD6ue2GG3oy2SsjEgAWXXqFxYtkeH",
  "key22": "2CVd73KZPd8DPyNeiHpjLNkiBkJQM1SK6BpjuyAv4RtrXXyMYxLDCwN5FNoqgmxz9wvJL3ww7asRBT7eiPi9wBER",
  "key23": "3PCEpcRj6qzeCzQXf1UeJZ3ZqvvGKvo3D1Rym6C6YgnmgSQ1GQcSNNzVutWHwUWfq1hbP1zXdtKe9opPwHSRco7Q",
  "key24": "5nLUudGrMaNAYeJyb5vVuUXrA25mg42h5vj5LxX3iEj8KvNwnHMwaP1RxvVoBQ9uDCTPx2U8AJVUwY8QyRU18E5a",
  "key25": "5KB7K9vCTqUXj5wGZuN9Txc9kd4juuhR1dvaX7c475i512mDf5JByV36ZpcAwKiz7hYXWp2eo5vG2RuGpYgHowqs",
  "key26": "5pChwutiddKBfU7pq7AD4ruq92qk6PDuoYCFzAMkcyLPuKGEue83bueaebjt72XHHLQVgTw5Ddpr3yYDX3Hkq64W",
  "key27": "1H7JpmcGAsDqpL6GuCPf8o1UpNhjeieRfafaNe3hMFm3nBCwnu7RvGxXGTGueUNVoiEdnUAvdCgRnH3iMhSxqaF",
  "key28": "8DH9BLwe1N1TTnsv3HyQ3MeRq9ALUSJeCpUJRQkBvdQCbmF4soQbo7NhovNB2JorR8N4Bt674BJuJ9HEzNLgBAV",
  "key29": "2AiCMe4ZyxfV68e2ba5fBwZnMMfqx4q294qZeEM5Q42jYvWP15VtAE2Z2JwPexAUp195WcQ8n7q6SVrbGXysPXFi",
  "key30": "VfMGBqbrNXwDyHn9xx8CFitbeidXvRuYykUNx2eamH3Up3HwXNzgh3UM6VEj1f1UYk3ArgenaqAUkLP6x3qVZn4",
  "key31": "2KoSbFs2jxtKbAnzjthuZ27chmjGBivyjBvTyphkY5v2ap8if4dcypA62NvP4XSKHPXCg7ofjFtnES5Qp2HKYqf8"
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

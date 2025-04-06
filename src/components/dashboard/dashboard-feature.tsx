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
    "RwL51KpWNFnFQ6PbtN6G3F61C78Mrewvac4rgaafWq4cDvxM8yc2ssGuB75jyLJoAQGm2Tmum1zc7VY33Jm1bZ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j5tU6FZ2vVVdxRdbFQN1NTyt819fsQhWJ5d21wMrphBVfsitSEvSc98o5dLbkMZMDKmYyTqXPXgU1RkUpiRvWjW",
  "key1": "5s4r9qqT8A9gNi4UWvkAeRap2FDh36Qj5EBsu5Enu7uXNDr8zEdtVJ7YQUEV8NtUw9R5L9UAJNYHAgohXgdB9N4i",
  "key2": "akQquNY3A3hP9BQaz3axpgYiAUER9rnwHpwd3Bz9XrGi2LMyqgPcVSDmK7bj3rHTcYjCvYr2wQBUgPXH7MFChMC",
  "key3": "oV6onQqRMsCDdAkfvmtE8spYH5NY4RKxMzGLqTqsiHu1hVd2wz3Q6ceVhjigMBAvnt7BAiYzzyTfUgKS6mEgU4u",
  "key4": "52AXkVBBfDmni8sKSMX5rpJJxoXMBuom1ESBSNbaU8mmcF5sW84hLHnUCzZ1wbkdSvCCqJX2vkaxnJmHZfBtvfas",
  "key5": "jvgsu8aZBz9TUXnGDWAWFbeeMeSYQwu77E54Heg8iPTfd3m9oscwT8zVE6KXAM7WHHaGATkwiFfTYwyDJ7gF6bW",
  "key6": "3XvdbQ9muUjLHvWyhuQvQ98gpqTMhCAjHjGnDAgkvTDqxATYNjrecM8CXysbpkZjnuujh7YPhnkrgPMHoL6LLczV",
  "key7": "uqMAG94VNPMYBqyitY7GT5psG8ZYN57Y3ftbpwGG4Ly9Y1Uvhei2Lxvj7CEWyEGBdf7pkYNscCUHqvuhkoHonxe",
  "key8": "4gFpyaMcyMv6Wn81stQkrF7Vhx5RSiEwnMWYHqQqpsFAAS6HEGtsLh2AjJnznPgmdwrbwP7YXsrvCcGT6USap3eW",
  "key9": "5FfoesnzepTwcrd5McVjAeWZumMS7vQGw52V9U8mXBobjRxwydUy3zPwXaQy8p5QCrx9amUDDkv8zpKAbAkzp2yc",
  "key10": "4wrUVLbPJv2iuzcHWeMGcL5FzGMRzjNrLeP3QGFHCrhQnoz41LP9KV4n1xoxrz8FfrjGxKkEmmcj6hiyPZCXvDx9",
  "key11": "3ciqSQW3bAgsYHJGFyJhqdpiuji7PFEEivyAfov8vFyQN2vMVuzp88mKhyjDLuJtkkMQtXrroCmFZz3X4XVrAPLr",
  "key12": "JB67DgwVXxb82FRRHX4AgxH8dZn6ahkCMfv7dF4AYVDRPB9YsLh4EizPLDAAqFsCzsfszzhpWiaBQR2icGJTaHB",
  "key13": "4DTcnDGeZth3A5aNTsbKyxQsFPkabq7rp1VWxA3XGtG4iLfxwh53AXNxVSmp6Fzb9x5LnQpf2ub6pnq2HyJ8ZiHe",
  "key14": "3McF63nmMAZPamg8d3iHz6JncY1zBP2bFYfy9oZQFxuYWPw3vLPHaikQAKjcurMpNnsyBHYZvhb4uMN9xscixvxc",
  "key15": "63Cf54iXXByyzE1rsxFdA6Vy2yF9qaR211rAR98rapzX6zeyzFb4w9wQfQ9odPEetU5WAvbqQRZabSyR1nWkuJXt",
  "key16": "2YwzFok8NKEwyaut7dtZh87ZDmgxzfJMfKqbmkPBi91wC517UmWyP6bNy3T6g9QQii7gS2Lif7JHfmNLDzYVbyMh",
  "key17": "5KCaQDVNkb8BHGjP7Nuo9NpUxmGCJxq6you3EcM7ZD9TMh2NtRmUHhyw2NycUNx4EbQGo145r4ZqrzNtwTsKVu35",
  "key18": "XELscwTFMD4yN17XXBeZznnCkk8nuDQCDUL3PGu9EJXhiK16aQdxvhx7UHpnvjrfMzKULd6fTaxKoBcdBLNs8kj",
  "key19": "5Ua9sriuH72NZh5X7Q5ksaidWe4oSzwYRDARQpXAfrc1rT9vcRGQWSFzw5Xnz3xxA89m4cvzp8Ad7YKDL44Emch5",
  "key20": "4QFHbrFSq79ixRRp3LbXUAJXWgfG3NLcVsQT98oxBGPtvVhzojYfjYuVSHJWR91csPkCpsqVeCQAst9Tjxf74efp",
  "key21": "345QLgdMHvKeY5LPXpkRVwcTgFiVupqsGXEwXpoAMNPp3byt9wBdg77heaBwSdy3HXwUEaNhtGm8iG5W8rUP3b8Z",
  "key22": "4KcX2VyW7UZwX5UFbRrhc1DqJosPB2XPBeE3AdVSQr4HnLeAhwrCjK39JiVrMd5sWy9VRfpKQAq4Qnxd5gq83N6S",
  "key23": "4iiQZ2ENnCVccQWtvBNKpfN1AoX34AcKguYaE1UHLkQJrDGL9tngdARwQ4t2PayQdn5dSMxuFXBUoHjUGCjt1B3k",
  "key24": "hsx3Rb5pH62CEWCP74paF4uJnnGCn8xrk9EX7JhKtYJtUYbNpAuXBid7PECASSVM6R9fBuWEtj3bHVGfmF8znq6"
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

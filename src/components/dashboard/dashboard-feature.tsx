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
    "3t57F9SaY2SdLkCyz2exWAhECtRDTHuwiMwFg22idVyFNixWjy4mUsTgR1nsQchq4zfps4PoL7yLzPZfdvFfyt93"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HQtffuxLTeR2cLDVzqDHMR8aEXeJB8cHh5EfAw5aanvaDumpM8KwGQBGoYJb84ZMooBjGahFSMsfo6cWejftvnu",
  "key1": "4YH6MhzYXFTstjpV2JSScke8zotrhZFNfk8MiHs5BLqGATAXY9aLyDrHGLbGJVV3p6c1MWSRNDmSUZ83roPRTGeX",
  "key2": "54BvpuNxJZj2rqQnhkX86oc5PvBtx57mm642aiLHzLdvGogUp7cjrUGUvwTxzZz4QfBHBSThMZ11gR4BqfE3KjQB",
  "key3": "5M8N3dXKWAww5bsGqK5x7JKeRELz6vQmqov9wrFgvCTV2SRtPUaFbPxGaaerYbL1uRQwFYGYdqqizrydzgJB1c2G",
  "key4": "5iKi1TmFckLrhfWG7DhgpVop6b8StUh6Ka5WrGEnCJNZhbhYpFFejri33zEzncRtoMExpo1eHnaUXqEb8bvz5w7x",
  "key5": "4aeshLPcQCN2DrgCzdrRaM4Zze2tHFAYqReztDqxajLqypYk7KuygrGRRAP9p5FK548K954bafsdmQzQUWK3EmEQ",
  "key6": "5BVsWjtRyRX4eH4ff2y77pMJyXQwJchJr98hdjquj6AKUrn7pCRESVc34pCZ9KPCNXVgMyNY3bRsqQQ3gi2Nju5",
  "key7": "34nwVXjsEyVkGkL3hehtMAeD5KL6LPfgyihyK69UF6zERUf8hd45fhDKAiqaUY4BVLmoPS3PdcE7MYnvaH6CxFVg",
  "key8": "34vVfQfSfJEAHJUcLaUGegTZx5erCqhBtywMHUmM5jcg43LQ1rsczutgr31yPn2sTHY4RBCCjsGbhhKfP7TXwNND",
  "key9": "4aKqNnWgWPGSBcMKd61goxGDANEYhxo538oRtYDJrauHrdiWckeEMQpZGyGGxn73jLZS19Lg6XZwPsVcB8ce9aQ9",
  "key10": "5s5U5BGGVgZqzMFpQGkkqEkS1AFiiMktmCy4BZYzJASbkGYgokmsxU2vRgRTYzjG3FaojjsNGGqPQ6C3iRzjz1hG",
  "key11": "3bjk1fR3ergLKtXQe6rfCdzX52nZ1MiRfttXCAqtGg5fJZxQ5CXAwKsjsu22Lv1kGbzTMS2zid7ZaKqvFZsT7yL8",
  "key12": "4CwekW4Ndhz37k2ypzo3kH8bDA2hHPg725aZLEfqyZJmtjg8UQWMJQPNh8embgpC7XQ1hGktxwf5T45utndKX9G7",
  "key13": "4P6gaQpV1TXVLc9bu75iJQZAcoveEqFU8JYBEAJUciYXu4CjkcqGrdmcE1CRrqxTSHvcYKwy3Kae5orHikNNebxr",
  "key14": "5NBmMrZoTQkapjFBebmHwJG7fNPXoFMcqLD6LKSZyHNbpCaoq2fFAvuvDaXMfvLrh7yiMGHXTaHbNmoLx5KdLddG",
  "key15": "q71sU1uvNGDLHdexUkSiEe2cZEMGq5fLNbGrLsTxWzdJ3iPf9NibvLrmFhsat8jvYQNafwW4ScQkEfr9L9VVmQB",
  "key16": "2pgw218po41ekF1NPMzgMfjofSpnDgPvgFMhj6xFQm8P2fQKxwrM9nwAJ5KgKTEbwmStD1UPRzwG3wYaZSN9bugk",
  "key17": "3RkdsEJUQoeD8F9qyMHKWmzr6NYY83E97Ft92E5rdMuDNTgpR39cu9izS9nAmRZwSfyMMQXitdSWAE17zpbw4on",
  "key18": "5ax1GWN8TT7SDK55itG3RrHD4TX8xAqZPyjuWBq6Wz1S5bESuXcQG1K4wgsZpfF2QQ3X6MapJ5pGdMEaX8EFmPRQ",
  "key19": "4y6kek3jZeqvTY4uGc74tLb1MPRnojsXrR1sKZHotaNiAWRfiSnxBoU4GD6mC76ZjrdyDfiyCjJYtDE8wxZs57Cn",
  "key20": "3X6vtg8Pr8dgNpm2hUGPd6KZ1SqgbajGvkkjSbhZYbzoDcvRXupEeQf2VHyPFgN5VaES5kfdGK58qQjAe8C3brPB",
  "key21": "2mK1ugFmsh7dozoAdoTLpzpZmLhrQFqiG4QDajtBJeqeCpaYEBJ3KxJaAG2qxPXBzAE7CfrTQGu6k4o8MFJfXCAc",
  "key22": "5eqcYPmKZ8UdeoUHREBBRXftMDsdm6WhncTp11s5gb9M7eLiifnoRiaiMQHtVdZprgKPqDjzDJrqsFVfrATheAjY",
  "key23": "5gt2Mmm3UBXXFwRTi46oXr4xRQFVYZq1SnEMg8vHYQKRxQajF4Z6c9jHdWmD59c8TAcJ87kQQbnUw5uWtuLbd4UD",
  "key24": "344DJ1Es4wjJTYKuR6PckRtG8qgndJtnqkLhy8TunhMH6MRcJavWXzFb3YkqMcPMEGMADTmwR6kkJLarLhfrZHYM",
  "key25": "2EtPjULxvgFMJUqzXM6pw9cYtwMufjfi632r4iMEXUQx1Xy8HnFULXLrjnnS1YzWVAJqBM8PwsbRLoKFCGcQLRFe"
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

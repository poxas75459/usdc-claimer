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
    "47UWAVgXHbnWrd6A61bxVmvbCJzV9ucqRsedT59mRq3ivWZLZCXW2Qg94KAgZYF881kGid6MskjSgC2ym1rjh2wj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RntG1mTDmeKkoy16Lt1iABsSQqxQczKMs8cthxykBDhtVoUPfvrYgm9pV9ftXQ6gqzabvWRQrEiXFUmA9ZD2pAM",
  "key1": "4HkA9dZ1XhKYZ5aKsnAgUJeGtt92i74paAbJmaRzDxBaesHokZB2eT4BH2riKx63jo2v5vKerLGpV5mZNXtjJcYM",
  "key2": "2ekGoJyg5TNf293wkTmnmqc15Cb76muRiuk5TN29Rc4va6uU8rVxVhCnjpntsscNc5c2aRpXNBrvHepeKjvknm6S",
  "key3": "Jz9R2xhiyfCxuvnHUHWTy6SGxdCBvh89Y32zsuS5pARzfB524LKtXBoKGSKhNBrczbhaJPxXzoHCFjayXic6Zoe",
  "key4": "MAF7Pv5g1DLcWEuphXmFrTCHC5dTQ3BuME2UXiDVcYjvp9qtrFPWif7wVFPQePKzWpVST7Cp7XUX794dG4eapAq",
  "key5": "4nqioGp31a6WX4ArQGabxFkVzksAKfdaxysAMxPrfE5tpdM6mLd2hjvegqeZt7am1iBDQSJ9oLBbBt2Z1hVqQSND",
  "key6": "46p1jUpaTEq4NJZP2NjpaDug5MN6M1uW9X3tngoviKeA6Ffu9yJkSKYf9xpzevum2qfzu98Fz6ZKDpeUJjEM4stJ",
  "key7": "5A8jw8AaU5M8g9Ky98iBQrswHqwhHByqJoLks6r7iYdrmQ5idTK6CaLcU8p6N1sfrz5awuGjAru5351yDCRfPTcC",
  "key8": "ALjdZTQZTGc6QtN5R4ivwHycKRPbHSmPeWNy9ozbqeX95vAsu6xiyfi5qYtV2AhiDSaJaohy3s9wrQKw4K85nGu",
  "key9": "3Y9VnmNRWVHZnKJ2nt74jeCVm6CnfbbW4Rdmmd1T2kE9vb3Ns3HN6dQMwnZa1g7pyFJQuzyTwsut9B4tDMc7cYBm",
  "key10": "66ixqTphgQPLWteKeordmGL3x5SRpbSRnu7NiEjUwB2swe89hqr6XuaiEVKUbHPBk4TAYKmiHWGiKqpfQV4Pcwx4",
  "key11": "2QB94ENCVfHTdHy9ZvkKg3LN8qxo97RxPsSAChk7GiVYbjLyPwrip441PiVe8sfsBhUzzSCztvcDRKR9ftZrsZ6x",
  "key12": "P3coYNJ92bEEseoPMJbbRsvHA8xQf8Dwr7UHZDQkW4LPPnVdpx7CkJEwHQ1xu7feyyiw8qM4142eGmuYQErcQvW",
  "key13": "5EQmfuC2244mcSALdV26VMfHfxm5EyThAnZY9dNuBV4YczpSLbCar4GD79dsZpu4jTJ1zVeALP7uN5CYVokUerYh",
  "key14": "4MrZKHXoa2ycj3GxwZMpWAmeH4GCwkFHb6q54FT5z9kNtDEDHnRvqrKWiRXiWqYz45E9GRwYnFmEPj2T7bLfqmCJ",
  "key15": "2BedDBHMrZMGeRGqWHM4uW4jySpniNQr3BpuKyn7zEfvDQBQgApwd9fDidCL54UtZjQFqBWsH5PDs3YRAT8oJMHr",
  "key16": "5PfnyVJV31aSzLJj5Xee1HAFgKdt2YwLbXNesGQQychQpHheu6T6JFWJvAn6uKQK7NTtVzgJPttgrR2JmD3LJd5E",
  "key17": "3vyyyBx7pow7r42XWhnXggeQVmX4ob3YWCwChXb4jvfGZimgr7LzeySWHDPdbPKVUg3unfGd8T3qvJ4p2SWXAupQ",
  "key18": "DzEq4n7b4Q4Bt2X4dbD98PhC8apGDQP6R8EbXgxDizRoZ1b4BdBEwN8WYfstUmaV6T4y7PCaafRULVWujrAw3ge",
  "key19": "2YTc9HxqQX4pLngTgiVTzSZpkiruA1XNYssfkREmjhYQ1PPz8p6cYX6R3iEXWVBt6KKkiWyL9pVEXXp9C82intu5",
  "key20": "2o6gw2aDSVoKx2o5HJa5Mh4uqgkyV8W1YRjUAmWzaGacYX3rynouJSfB856nGU7eoFMabQKgqceJWcwYy5RndGF4",
  "key21": "4PiWoknVGHDRpE6199bwtThLpoPsNiURAjLbgDnsvFvBDSeGXyeQ4bJfFTg3tE7Cs2jAGDwEtn658JS3MCR4bns1",
  "key22": "61YKVjNpTp7Jqu6Wr4BMBLMEfv6W8BVjbien1H5s4Vtt7mSkQEt38L6LtotApoa5ZN5VaTpsAnb3RKPSChi1K1Me",
  "key23": "8fp9TeRv5J2UgmdPyZx34XopUvTVd84TwMHwrZxusRkuVXgpNJaAuqgERWkBfWHsktWq6mw6NJZ94hb8obE78Ap",
  "key24": "2t9Nu6HRmN8YfS5tk6Lu1qdyGLcpjsNWT6wdwnaA3YhEBAezrQiHsa3r4XYpLrkoh5Vcf9FSLsSZSXMmmxDxSgqF",
  "key25": "2VRTjuo7ku994FFcvmCdmozjkUZvkfKVq2VFptmVreJQq8Cwwwbp6v1nKiT1WvJkB1XybTiFNUfvg5uKPpcq5QQT",
  "key26": "5yvg9Lvoqze6EQeXDXnGoYyqtQbdoTSHmRp4RLZbZmznPhUmcSNttZLjdMHzYZPhjXwm9dgsz8eb7hXALkAchNZp",
  "key27": "3m9yr1dShfYXvWgQyrZgmybUPvf7TVE3B5KymvwLy98iETE7iGG3UUtjU6MvHPNa2nEU4ZvF8DCLf5Hh5LLAGj3P"
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

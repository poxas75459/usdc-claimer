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
    "2T4pb5ChqRDGKZMfq1QtZjNiUX7r1cbiSwTaE54RnP47AauoaCZkgzoxBijW75BskP8EuMkszzhDbyEFkyQCV5qL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ajniKA45VNkqoPzjSsXUDwbzeF71VY6qomLeYwtbqWPEkND3uo4UV4egxyZtdJ6d1TgbdcFGFoGs2EQLXwmGNJA",
  "key1": "2tySi5hCzXkFXd9ra6kt5DSQmL9opz7cc6LJXixYfSq1Y3BWoMjbwQFrVCM4mvpJrQ1ES2EL1kzXRyA8qQvL4J8",
  "key2": "3Nc35x7vjcf5L59Rh8nD9CQmoNewEeoSbwq3sYF5pzMgyC7UTzktC9KtguDdCKLaKD5YXL6W6BRwkD7tAwvazMy8",
  "key3": "45bxtRyLstfR6xKwq9hbzkGNjgiQEPeiEreX98jJxAgu1xWXavyFct18pTvwdbDdhHP7nBk8H1EvjAPfZfVTTgGL",
  "key4": "5CdQBnHK1ou3oRigMsBGzLi5wCqvbvNGYQNeAUh82Q3honUmBWn4nwPYa8xSsZtkmUkLrwqW6RYtT2nhW2zW8JBz",
  "key5": "2GahBnfNobsctWosJ4pJmr9YerEdWHRM22PVDo6hgtw7QtRbWrcb5HfaqzJagB6tPCN45338c3eCD13oVme4S3ns",
  "key6": "64Zi6N6HrpJNU1v9kqnqGKoMjUxhhqw5bBRdGwRJpHb2QvUvet3LZCP4Nc4hzZfmxRaWCE44z92z717Djj1ha5pQ",
  "key7": "3KFAmwmgsQLpUCVqngqykqsrSAX2gJvHDCh7kvbfazW7rsyUC2g7NpJtJmcXCjvGm9hNua6pXPyHR9CLLs9KirDt",
  "key8": "4fAc3ALYnVPJgLnBBRsZ23iT1xygbpKM5Y4cJDqXt8NxYx29RiaRa6mZWDot3DSa26MsVvztRHcJL5Mq2VQrnHGn",
  "key9": "4DHq872wByqytdBHaawMFF4sZtc6nX1k3Heq8AhwxCjHbW7Z5TKdAwPZtX8wXraQezvXfmdJ99CFJaeHjEQ1tTfL",
  "key10": "4pj31wBTuKQVumfpULZm8Fov73FVVSXWsxm1AneQrcKvDHZNXcDuLiC36v8RLuqwHTZKpunpr7CAK5Nito2px4ai",
  "key11": "5uLqZgzs51m3XoJijTXjxUWW3r3eZQgyntJouda3VZYddib8xjTKfi5RNyiRwryVNyPh6WPm1LNG3eNgbQaPcHhX",
  "key12": "jHSKskkeYuG7Vdjj3fXjDozoXAeLb6gLoRAPJPUt7qjsqWd1e7EtqCZVyFuUjeEPPJLyzp9NoHc4vARhwHF1Kdd",
  "key13": "3wy5yiq1pyCKHHoJBYW2mXX7DSz2jcb3VrsVP2vq2sFYszGrNUW6w6jzoG2WvyyMCNJiyPMcXCJtFjwAHva3aHqz",
  "key14": "ZoJmearXiYjaZhofQ1euBjHBL4NHjATgJsQjCofG2w6KodNYxThEwzFeNvh9JeDvgNcp6gaFb7r5DQkg4vZzHNH",
  "key15": "4Y3Z4mu1hezDN3iFQpXApf7mb8Fm3r51E5eNmideVTBfSgGiccMMWffefLMrQTvKsN96Df8hRYkJWCh4AxPjCgjR",
  "key16": "4W3BjLFsCCrsrRrdU44gZV6F42RrDxLuyHdF8UmMid3PJP9BLcwQLYnCS82Ku4fKRYYja59iewBxs1Cp63dg62Tf",
  "key17": "4m8miZWZ6oLGqADXkLecZY82gzPHCNjhjnZysDoDSQZ8EVRWrQnBqn2vNAkvGFJqDYqWs1oAvgiUQBrjofPPSLqE",
  "key18": "3RBR8BNEYNXb9nE56KCAFw7X9qc3K87csZYhqe4LRzz8HsB8W47sPNev3mcucPJggmUknbLbwYvtsDFjixGpX6ur",
  "key19": "2j3ZKPFfcE399N9TshHUAooDR5NeDizTTe53dKh2KXKGqKAgVyvfXH2FDLoSsNpKLdGBpz4N8N9y3vxf5g6vq65N",
  "key20": "27LPLpThonJR3o9ZUJrriockfPutwmtPgoAxUf2odhT7MsbgZjHVAwaYB5BCAgE2ckZ45bRQffjz5i8Z4ur29jyD",
  "key21": "5bs36M5tb7cnwraFUqgsRPk77Wo9pePxb2qTdbu8sLpD2u6c9Dc8oW2ie19zsLmbDRmCRFeCmV3vGquu2yZJ5QrA",
  "key22": "AKHDAe7PVvz5EGi9F2az2wroWCvsHUYfiUDpGVX2ytHgDmmdjecE8sJNWYSg3zZrxYsfxVfAqiTg9RSB1urYHQn",
  "key23": "4otCrfERyYa3mwiDCbau8g7xgqcN1mmZt4E3c6BTENBi71PPhtfZNzTefjSyVpVGVDaAEih457xiwzXPAHSq79Be",
  "key24": "2DFXqZRLPeayu94HzY9dXQE5NYb2dk7rSeRmNYCtwaj2VCVJEdyH5LQUo3oxLEFfcAKYK8u4Xex2kiAu7ea4FwfC",
  "key25": "8LuuPsjG2kntpSsYbnKFQR368zUuwWKH12r1wqTyjQAdAu9zM84nBzDs3fRTPEVy8Uy1RF48wBBRci8CQqJDAAd",
  "key26": "4AVs3ZXkNRPLzLBvAKCBN6EHc4RPCt8zSGQG7VzhTiGPzNvq8ziVdWhun1N826D9vR77fJZ3CnYXQ4Ekw3hosDBG",
  "key27": "2U7KCVV673CivHNe7eNEzZ5fCQmyh4QvG7cETWNUVqtvT1rvzKELsKu48yh13gzmCqXFZmbnECANbxkPsq8yoFjR",
  "key28": "5jxDaahfbZtVymxfmTQFQcXt6BzNUXHCwkqizfurkAtb8pVaexEnvTE2UpM3B3jAvHSUJoDT3md3voCugebUcvsJ",
  "key29": "41TgMs4LkeGUUBJbdfZkwsN7Ud41Lsvx9eDQGVnNgt2Gf75TBL6UbUzSFFJRFAtvyZtNjYGZBxmAvji236QcjJig",
  "key30": "mgHeFVHVSf5QRM7Lo6TYj43pLA3xQMquMQKeyaQm15EFtAa8WntBnLwiu6XwpztqWMQmmiX3pHcqYhzS8FzoMWA",
  "key31": "3tdukKeU3PwLtjJ7FQwU8jZUw1NfwbWj1SPGhE7BwL5u2Pt6ZrZWrL5RgWTZxpVZ8CEpR1Xjuyq5gzaPNw7tJwgP",
  "key32": "31Vbdi9FMtGYo2BWaJ8E2uL17khigmG8BQTEoGu8znvJU9cEXuZTewqyCJUg7uZHQR7pinAr8p7sdgmyjZ7J7Jk4",
  "key33": "3Sx73q7jAANy4TAmUp4bjRZvx4n3VCZJFu3hPLvcj2WnVNStZDvG8RYu6hNPdFhJjcUcBZa6mNMNTZAaS6c9ExZd",
  "key34": "5qVhPCrr6mPeQbYvUrSkp8U2uj3cDY29V3H1JSP6Qnmgk9JyJ81htWSJuvAnGAVyaopsR1Z2wUG75bwVmevHtxD2",
  "key35": "2mKcvA6gTZQYW1Tysts8aGjaS1t9QJhUJFQN344aGEFbbURSfEWJzUGmmne6EX7MZRXiMaTr67BD5k88PuPPioBW",
  "key36": "4RQTJUes3D7HNSNLNbmUyfAGPLyFvtnZLFLySRymfsq9gd4fLMUeKcK2KF8UnXt4Wgn5q5iLum7SYLmEG8Vxq8Dd",
  "key37": "5mx39JEHvo3bS7QpnqhrDhKMpDBWCnqZHPNMt3i9kiTEDmVxDPxsNZtL25cHme4Dpj4NfNex4Rjf3j6EWboCJ4Ag",
  "key38": "2fUguzTFPdYkD4Zmtoqp1KhkeD1cerN4TgptkXXHdhaSYGY16MZCsDVEbMtZ9j6A6yRvDTSBffZUfBCWQnFcfxqe",
  "key39": "2LEJAZ1JzW2Q98y2f5SDQDCoM3MNewKa4f68SakhcPHiUQfNcdxegz4VAaU4oDVp7TZW8PaNdJbMB9Lc6scySF7f",
  "key40": "3yhEmmRkWseQJZW4osET8qgdxiBsMx1m8BmgR1r7FHvEAhYewWPX1MgtMNfnLbB8J86cvzwZVJT9w3zNBoQrkiS3",
  "key41": "5b4ZEu991ZTnMgH9j9dQzSs9aE71ecW12MgTsZjt9eekDiTajiJcoj2SARRDmBG8kW33EGykDo5nMkWRSXYAYs9M"
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

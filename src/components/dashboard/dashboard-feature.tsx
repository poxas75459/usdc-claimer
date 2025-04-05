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
    "XmtY1REmwHgoPH22NdbouKMXA1BcrzZ15p9X71V1G8Zx2zteEajkp18LYfNyBJF7673MjZeWUFukQf7sR8umDRH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Eg4PndQ43W7n3UYJjmTTCrzpbna7BCsje2t28WUL9UnUFGQfTevqzA3rWGRy6z2XZYhhwhEa9geMBphseXs596i",
  "key1": "2KUS72CmyaB46ftPM7xkAHKKyKXrnugGkALki4APJjTyX4qrxLhjuFPWPGane6vk1WnTzZyWVKCMtkjPKuqscUgJ",
  "key2": "39USp6ryYi6xP3gY6VcVKZyAX5KmUuKpnk9C14ujGKYdYcnT4sfHrFrcQfDvpQcd8s1MBT3eg1QyBxZVM8DRPypc",
  "key3": "25D3daHWVbhaHCoX41Uny6v5oRs2kt6bb3ijRF5mbcRqymSL9DSasGWjvJKTmiuykQD8mMTt444Z2Y8xMUyqfQqf",
  "key4": "2xMiRLCrsJwqiDyhhes1uccuwK4c9M3LiGgYKLcskjViY1rXY4A5Lj5GxRrDPZYg2MoSHFpqRbbXXPp1yPanBQRX",
  "key5": "2XuQaawz6GiKH1ZdqwqSjPk7jsRQUWM45sM93Jbn2D2ri9fXtS1kp93zMEzXKNbmfkdCyDCgGKH1zvSyZF9cwjvj",
  "key6": "435LFPQoe34umdZwDL7Hvc3s9LeDAodiCH5eRjcXzuwcp78saRTuhEyzZ6aYHQN4qe5qW93jGmBmnJKjE4tkqCL",
  "key7": "51fkwywEXvK36eXujHGBFhL49NksVMhut8ZaAPwNMCSyu8duJ6HBsrdjbs7DPJouLApag2ferEXKST5v6x2WXn1y",
  "key8": "4yPCDH6hoEoQhNbJuiyUCCjTmWz1UB6wdmp7oVHY64osQekw2PtQcDAjth5ps5CEhnqh7jQcLFQLwRtTfjShhGWt",
  "key9": "2hmdWvU6oarSNny9rR1rZSbMUMYMZ4tzeRFA1n55x8GHHyzu37RWcbNkzH5QpvG93axGea1H9UeumhCtP4f4Tygq",
  "key10": "5CJvM5868mLny5yGpdRFRk5kunSrdV4HzYM9anddcymrug4bKnJfcwQ6MmZ5tLrLgPw6YtMfJu5e5krv6vXEiGFw",
  "key11": "5Fzdwnve1cF51ACCaTokQAC23yeZCMRupWy6X96fcbY6ERS26ushmt1z6J7FvCnrKor16KSdiQXGcKSvV1CsXPrr",
  "key12": "wBEPvFL1qgK7TN1LSAzMNFGYUC5GTUNdnKMeuSweeRS8dqpNJY8AUQqCAuJduBhpSc69QrQhUVwjfiRS4MRheC3",
  "key13": "4x77ZXzvTaMpYnas4Hnyzottnx1bSA6kY34KatUdDLURuKc365uWwQQMt2MwnHMzHQXdVdwzxY4eVYKDvjBj64Fh",
  "key14": "3tjAgcMSCzbs7Bdops46RHcQXCtVHWWPtJCtewZ4SPXrT1WCnecp6rTHAYkEYBKFjAc4bqqvFDqwRV97CuzMKdPd",
  "key15": "3JqM3GRf5GKFaAzPiC84ho528gpyusctixZa2BKWbnHytQc1Stm5AzUafeFJKUVQ4uJDq9jdT3eKCTDzUdPXLXvA",
  "key16": "fnTXBg3XST4czgGp166LtMtyrQyGXZtaqwmq4X2BzoudnQLyYR9caVeayajFEbmjwjPKQ8566Ukhr1un7CkZX3E",
  "key17": "3tN6V2Mq36hZuAjarmktnn7WmDvrBBK7cjmRi3j44FpJo8r1KRJoVBLDxbJiccimdR6XAtiyA6Pp2ujuk3UuUh7R",
  "key18": "3JYHVBCGPqH4fUCf7kKeSZmSnxiCPpKnhSAT8mEYnmGv7o6RU9UXeSv2uBKGuu9SK7Lo2vmi9gqPb1UxU7iJEpQU",
  "key19": "5WuAej1KG1MTp1tLR9khrwKazoLevmqe8k1ABmsjQytjoLB1F63Mbcs8qDBkpxRXu6QNv1WYXQ43CqKe28upXcBi",
  "key20": "6LwNt9DeJv3LtJzxBXji9bMGvX6WPuShpfns4Bdj5JrPV4ufsn4QQ6aTWyrejPhJMJsb7PjkebFBWGerySsnq77",
  "key21": "3DYy8NtaDyYVGmBLW4yCcGtwFE5H9vtBjH55hze4183UDgrKShX8pAx2PkosuPx7cLKEaf9mv7XpT4EEkr8gPfaS",
  "key22": "3y5mHhRERAYMuoDH2MVQQmeDcEzEUDwzebkpSE32ByjZ3Kf6keGwADH9qNxUr3ug84F4xyfcF9YEXEb5TqfzqVhR",
  "key23": "4Cx5amY1x3dcFXiqsBPQsUa1sLw5kPzCpyr64T2MuTzPfX6TPUU3KUhqGrsYLE11RwiFikiCSXNANtmKQPuUXe6n",
  "key24": "32Df7bNC8LqQ6CGpDNwvRNCDHd6TDMEkMPsZzGQHs95YwR9hzbgUvFdmoKkxuoF9MQoGaAqxJK9k8JX27haoWYXF",
  "key25": "645A8Zch3zLEKuLe6GpcveWMSAe6SsrWVNsUC2rSTFWEYb81Ko53AAciwpifDx9qJjvwRJmJBYoRaUsTpk1r8SuM",
  "key26": "zferj7c99tCD4FspYdAWvw9Qtik9486VjjudmhxBkaApQwzArWybEX13QYWDdEGmHUQ6CeX2MjabKCgnrLNuGmP",
  "key27": "3DxpCV7ngxDNSnw78FGqqgkL2kxKJYGPKFd4AXY1G69BymC6rVSReyCxwmUiCzgrofoWXg7wJnGUXZUbRvopK4va",
  "key28": "2qbAYafLnZoX38dUv44LoeMeHpxzkZskhGyayDCepnZoWnJsBX9ViP1bRUxVEQFWbZkQMtpARzLoK69rL2G79q1G",
  "key29": "2DwRzJ78dT3DVmTWSvuwLpYCPM9hu3uivSjxdJ9jxdQgSt7puCHXzGWp9yDcX7Ln1EPoUGqhhkTL31ez7sxsKoCF"
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

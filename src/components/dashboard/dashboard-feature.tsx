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
    "51tExevRSdAKe9oLsQyYKeZXW1sN4oFdgEraCuRHqMkse44aekeWbpFTbT2qEsj7KQkP2wTuJ5WvubZUW6DwaEga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ReYqva3YKnLPWsyFHkWDxwoSUCrMFWF3o7tHFZJLtALdZNS5iTkKpLa4HPEG1Pqk1RBrQ1wLKbaPfdn7VqjnEtP",
  "key1": "pZS7CXn5TMsXMCWgXFkiSydimu89FLdC5v8xuq53zL7gxTRHeMdyNSwLBwUKgFmcMK7xyR3oXxrqDmgovXhmpj3",
  "key2": "xWsn3nPjM9Ri4qNoibPKMXWNPftVaw64iKJN7BaFAkta6qdgs6UA9zHUcgZwRQbtNLA49nri5qF6SmQNSnRW1TA",
  "key3": "5kjgqS2tzU6mEfxzNBHvDcN7YPvaFG3Vqq4LEPXVihSmtdNf9QhHe4XNgLDiG9CHK8qGmp46gcQcmUHUucd94em6",
  "key4": "5JkAh82q7H3df7b6uoYWhiPAxERaenxPKpS18YtaSm5By2pFFwVMKkphQ7sYJEVPh6HCCSjoMdpmsbwvJUJBg8vF",
  "key5": "23U1keBZzwTgypG8bdv1231Fy7LRKY1NqfUCwM9Rb3GUxK7EawLzZMGaTgbwsKMyTUKF8bNrxYbdCViWpQD1AADy",
  "key6": "5J9rAECarer5GDWpLg5sr437GDoXp5yLbJzaPYK3TVwhQP1iQbfqhWYYs6XrdsZNkTumMJVJPyE3314XzUtnMrh5",
  "key7": "2daoeDAVhXXtLvARgWbhVPy4LKX8G9hfNar1mXFsyVSqDmUjEK3cHpQERTbCR2mC2wTxwfpX68ofGFg9tN6UBg7u",
  "key8": "5kMCGEH41ZPuhzqT7yK3qVvGAmx9DDibJBwSTT1JHSJ4qJzR4UozMEFqWhn8CPe4b7QX1vaRyPLxK58Uk5iusQTu",
  "key9": "htRFWc16qSQN3BbWKhi4AGj7aBhfpbvuorCcQWs7mj7ZtYnkiyXzewTETzRD5VChaAF4iGSiF2eLuuvx8KrK4HF",
  "key10": "3qA5NWGUFFKV23yY8HztV6PmAZUmvMcgGvWsPQatDSyFgQjrVkHJfBxTS5daPUebVijoTBRq4pCNp7GkPnsHjR5L",
  "key11": "36ZQx3VDy7Yv3KhR9EuayGNxEdnG6doKKnowo3DBbVcuPt5Q5UPJJTfxAysMo1nzhZp1RwZ1eiWSrecw8DJtmWYk",
  "key12": "2YGhyKNW2pvzq6WzQJGDE5A5YikiYnFiRgAShPC8STM33Hk4MuNCndczVBPBhoxDyB1mgn3o2LXCjy78yKBhoT8H",
  "key13": "5KbjaUZ1QRc2whqQeRTtQVXzdxmaT5FdqmBdevdeaSQcZY7KSuYQS9VfJKroRmRyEzntpfsDLEPbKqj4Pdg6kyrB",
  "key14": "rwkDXzuFxavcTbFF7qbHCME3kEvYK6pzv5bCzhhzN32BPmVUMJ3NcYf56zWdtK6t511mSb2uQKxgbYcdEnXLRAZ",
  "key15": "2GPH6zd2gCvbJHqEFLWuQoF1B6tjwAYZPspr2cziH3Bq3UyfXEnxVgvMWusD852B8HufDr8JAndVLm78QhMBdyLK",
  "key16": "5RiEgAdcUrYCSusrUAcFUA9qSFCKKpWXXHfdeRcDqHsUzyBecgvS8bbyPECQewTfM4K21AJvk5Fbu8f2CcJV56gD",
  "key17": "5qeXzQAHLKTT9Wx3pUhR3LznBrH875gYrR6QRZcXw8oW599risFqGxkRkuKrRYWxCs71xPw4FHr6r2C1mLKmvQ9o",
  "key18": "35fxjYiWz1SxVTFx7CXPUGV44LXSsJtVrxNQcJpJnQAbWxyEmd6dqePFtR7U9psUJWypmcy1T6vmMZnfABDfVEAE",
  "key19": "koJxVR8XyfwkxeBQt3hkW2ZLV2Rb46joJkqnURYJjpT6qvsjjBsJCmGPviMtkTuhsbZGp8YjscNiArhPgvihMNz",
  "key20": "KnongkuGLwTXjUHtAygmjkowBPf2REqj2YmqiESKfHEV5QFTFLVi8uqbtFqb5k1PEkjgvPJSEtDpbjMBy7BfYpD",
  "key21": "42mZFNXjy1DYpDyd2j5jQb81s2SYwBiADoNwnkA7j8Kht3SXGeFx3pn2XQaF1riSXFzwQePqv67H1Pi34bKCry3X",
  "key22": "59WbH4LnSXiPeqVRbNBUAAnSX5J6UzhiKwcGFWtht43XVqfHGA1CupTd4PYwhx7w4WcwTY1p2L8VAbgMSJoK8XMv",
  "key23": "3PqATY4HMiufVWs6uxwjqYnKKTVuihQhgg9Dw14F1E2noLN7y7TSRDFYi7BfVwe7ae2chADQa9aX1SAFHZcgd6hy",
  "key24": "5sivrJ7jCCkhLUQJfj28rjEQ2gSaiHyV7YPWLWNQj8mFjzSfcT8ghBZMhVnazwD8QJbQuehefpC3LYC3SmKZbHCA",
  "key25": "2tVJw8P7wF3MWGDGqv3hg7rjYoPx2mrX8mA6XUgJJKaNV3NKzTujhJEnawsSt7JcLERvYwGJdRvUkeLPKATupxYE",
  "key26": "5qi9MtAn7tzuhfB5L1ex4bfzQ9Qqjs9HxaYkMFuMvTU8SCyUT2UPsxzuoDxatC6REJcWcuh3eErdLEZ4SG1ujUW7",
  "key27": "3QhcjoCPRZcEy9Z7sen8YgiRBgySVxAAHMP4NF1c9nM1vjNy3DdPs9CkpBDXe5KHjWFrAkGouLmTDoLaQUVZD836",
  "key28": "2GBmwK6hizXJTVS1JFerfEcdC8K3L84oxbBXgoSAuGfdziQriG3sd4XBwSaDeuN6pKFhnC888rsTx9zNxuH5JtHB",
  "key29": "4MwMHUKuJ8SQXKzrNpxtRAMVwTK4PGFassjcoNnEBMm3E65ccXZRXfB2cxdYwpquKEAKMJFpnD3fMLJnGLuskmyt",
  "key30": "27p8GJ77HU7pcPp6FMhvp3eHag7VfkjKCosiRGRrUqex9trfQhdgKUM5bjfLXCD4QQ5abVDkacUB3j3BgohpmzYk",
  "key31": "4NKGKXmDDDMrmV3UwG5jEPKqpb1o2MgyyiVakPc527hMGKtPTDNTY2a9UpVoomp8s5NeSTAQHkMiXvYA7uSYxnSy",
  "key32": "Y8Y5XYXnoQBB1Ptdbc55cTJ6XLV5nL43FY811eyeTGnwxmB2Lq3L9wkhMNhn9HN23jRni3Lscfph3ryHmhFdwRb",
  "key33": "2wGvZptGuApiPi8MD7hYf5KkCkFQcx3fZYbiDxpWbKhShqHjVbd5uvQYSrB95ZSgxvxrwYJp1Ff9Rj1zi92qnpra",
  "key34": "3ukpv6XapDtXLbbjFEFGpKqq83CKG6CEfEhkHf2w14YcijASCFzkn5VNFUogCPnAofgNNJ1xrki8rcAWqH9KtcC1",
  "key35": "5iFWYb9BP4EkJaAgUDnH4UDdhJupBPMpiV33Y5aJYwc1tzpEq1rKn3nGBtqf6gnuS7puMUXFpp5FRmgjiXXP4mS5",
  "key36": "67KXVRnayGSNjFxcAxYdfgVaLuiWWAyQd59r7gytqf6jfYRqMSXg4fZxXDbSnbpPmMDrfomx9e8WCZgQEdSsnwBP",
  "key37": "54B7nERdbWkZKagj42ukvM8Au3wpLbCtSbunhjngkimBzoudftARM4BX3iCiiU6E5Y8HjxvaYcSaX22hQ6EQoLMy",
  "key38": "2SHFHVy572B7PjZ6BhzibznnRGNtK8FiGN61p8UJ1XJTpf1CqkxXYMas6K8qpsrLVfez4uqKJTQ9oC77kPYEJHMN",
  "key39": "2C6YeUUv8rNRJyNddBskYa2sjeCCCwgnzShZeNwoqivE8A3BbQPZoRHCo7dM6C6gN7m5MZQXSjTjhPwHqL9SGDec",
  "key40": "5ac742heHdn8nZS8nTZxiH6g9erQcgCqK7Zwo2ixuKhujVEHExbgaMeMo7EbCJz79gh5AYapan2NTVv4qg6nK6SQ",
  "key41": "fJ1cSPCVg3bHpYjfQPcxcYP6M9RQcSfgBYPFuuujsg58d2kAfGN9Ji9XXPDfP3GtNp6n8r1C2xhaHoPSnPJstMi"
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

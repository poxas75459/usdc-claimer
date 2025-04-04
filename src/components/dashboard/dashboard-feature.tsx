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
    "4TC8zL5iQxLFAV8T6ABcksyfbqSmgsmLXxwSqiVeQovSY8aRFz4PDFdhyfzzpPtP3SwwdgKbKrtFfv68cq64gYsg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZNUsGZafCbpm6PnPDmCXvFfNWE1d9Pgc747dsvttJRVpYbdnEFYDmzGW6MTphmYKEymdt4yuLB95Sk3UCCShNYm",
  "key1": "H4UmptSMzoFhaia4X6iaGWA3QRTNT9kY32icCz2vRpvCh5qU3YXbjihCH7oDV4iFkPE6TGbRF2wAfefKf5jpvYP",
  "key2": "61LtWxyL3af5wmgaQMUE9CX98YXvT9RvTyfjqoNJvpZTy9PdZLgH3JXGFYLSnr1778qnMvP9UVeUz6ycXbZhM5CY",
  "key3": "5adQkX4de1fubWbJNRWN8SiWR1LxfWFnv1itW3zg6vNNmHL6BP7Dx1BZDkWfRu65C5bFWxxvnbwPytY4JxKE3CD2",
  "key4": "UYuvLmMYGELs1XrVq2NkgHVjCJ12c4ra5WEXoteLyHXmaQiR6i4fLiCPXKeu4QvmN2z6KyjZqjGcCCJKcTKiARd",
  "key5": "zmwDsAJTQk5zk9diSNKffagR7iz4odSevdAkbJ2MQLgX5kQTtZJQLbLmAA3kXFcVR72KTWc5m94hG78CA3chBj5",
  "key6": "4exgbeARgLY7EticwmGvRV62q2MNkM19WGKU7k27NzwvLPXhN8A2CEd2ft9ZfDWKodX7kofvNxdEWYBHbDuSvxcS",
  "key7": "5pz7rNHN2iBL35SSQbuvdmNtm39368fBFMf2jDa3rwikYZ1yN8Q9Bxr3vY3GcaSii6SxdmKiprRMu6MkWuM1wutf",
  "key8": "4usPc6dw22jfHgB2Qja9MPvUs5qUKDYBEjaKaEoevuTwnv6KjQF8bPjscsVtqmnMuhhWM3DpEJUDybuM37f6k3Ra",
  "key9": "4b5JFz7MeQE1EJVT9Wt24PCnVuMzsrzPafn6Kc1AyBmDVk1En2rNnQkaYMhYbKNFf9ZUQpqGqHrusF8fjNeoKcyR",
  "key10": "54VCnEw7BvatNmX9C6Po8eAtwz6yExkeMSyz2wUV1859KwR2TwzMbpf5gvwM1aZKGSec1LQntsbNueZ7PbKRRtDM",
  "key11": "NsB9gxL2Dyh5cVTDMKaM4kZpMREA7r5zrmSQAox8LB82fTYHgNE2kLx4L7AKgWEmpgb1LfSFVdHQdfb1G9DuhT4",
  "key12": "3X56Pn45CE7Kjv8G9GdffdRwxY4LKqEpMwt3wB5Ni4zjWQFe6iHz1c4GWjXWHCwyQwWvmxbWN5NNKDNf842yTfCz",
  "key13": "5C1mir76yKU5t2QjgdqpDGoe9GJTNuPUtsJZV5iE35HE7iD9aVrLzSia4wWEF34RSKuDXfDHggpiteVWERBmGyS2",
  "key14": "4hLpt2r21voXabACiBqiyFbpnhGuzddKBhukvBVBZzr1F9VY7fDNjrtHpMbgmZjez6zk4mHnyUqtqLT7nB8pqH3Q",
  "key15": "3vW8LsgMYfYYdTDUUMk6wDsUUoNgftC2koyKwtodpKyH5FbvhcXjePFb8YVnsk6c3nJofNh84a1AfiSKDRjxNFUa",
  "key16": "4L9F7EPWSncyGnT4CucJWyL8oDMQQbdy7wwEQ8QVQjcRZykfqL3hDLbjqkvHzrM8aadcRrkKDZpoL2qVF8GFmLwD",
  "key17": "3V5AESxsS4q7UE7mVQ88KaYK7th6KajZKEECpiLtQz55J8uQwB481zzg3yU1KQE7fx52pdYzta3eAjTDnzYHbRFb",
  "key18": "5HM6dKEcZhAgbAuTPbb4XEsjTDdPkGE2dYE5FcBhNLqWX6jgH3HKtktdMqkNvWw495NNH1g6gbCbRkP5E4HNgdW2",
  "key19": "2Lfu1CHRGro8th79oqyxVJe57MzT9kPtNADxMQHXosmcUhemPHEnc1fiqpx8Bd7LQvni19SVWKMHi9FDgpWr4beB",
  "key20": "4B5eLvgPDFGcuB5W4iW9vZx7ZxZ6dW4yhJ28Z7kySnG6UqeuDSZQGLcJBuVD8aBeWveS9igkF2paybC8JoptsKVn",
  "key21": "2n5BsyWtH21hLU6S8QRD4CjfwN3yjbVJavDjX9gmsyuuLt4z5BzF5ezUruumh9BNYj1NaLm6xFduSZmkhvczyX7D",
  "key22": "HJg9Jj3ZfLuLs1shL6aVsmtZpNWQVA2TBDfHmonkAzwCPdupFVoevhAGCfig1AxiWYisygeXuPfwhRrbHYaYjMZ",
  "key23": "SbphLoi23JTJ7qwoyt3JUAHPr3K2kdEjMqCvkcphxV9r1zwLLQ7xFFUXM3NGpRBbu39ooG7hpErLACPv83ZckzK",
  "key24": "2Ao1vXzqTmisbS8jys3mRAf5cH7AmrqiAXcXCYddNtnQ7GcyVxwWBEw2Zt1ytkYKYUwYZdXvEkiS2uoaPWM22eDb"
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

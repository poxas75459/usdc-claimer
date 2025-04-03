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
    "NL9TQgKL9GNfSpcLXGmkN2fQo3Xp5KW2i4wfpYJpLnedah4m1HCSFhPwEcgbizXzuae5vZPLgpgDajiRtywXZDF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65FEzsKKCYxFsK1CKcdvMmfvVjrqr26tCAbGjm5i15zkTuLLcnDuy7uPtF6cJEF9fwcogXDPtXPocgczjGQdqFgg",
  "key1": "4EHGT4XsEF19MGSzbBejdhb3cmSjToARF6moXa8wGRAq2dr6PieEQ7CJnNUe7oFXLnzDVC3EikApq3x73A5Fvxkt",
  "key2": "49We4w2AU3Ppu38WCMh6bBi2zqRcys3F8L8ZLFKJmZph67cAsa9PYLVmLjRAJMhNiCLUpW1C1CNU99GnZLSL4vXY",
  "key3": "5kMMYHgAHFQSVG7dhV1JwNhKvurrvtVhfuEs6hvvzKFZhLw5STK5NuJW391YupKGxYb2FVnyY7uPmpA8Lau23hfD",
  "key4": "2RtQUDR3GLTHBdeh9n4xqsUKEZpMKrKYGSGeLeiZPb6f8oEaK1TLCaXyrPVm8yvL2vV2mTLWq9aSzas8PB6b1ci4",
  "key5": "3Tj8Rij7DQs4pxmnbsTrx9WeteQ19naByjAc5fCJ7zogUffWMzas992hZvtMgEX4KBHvumbaA18Y4pNHNxiozqaG",
  "key6": "K3fzUyF44FrHMDbnx5Zq4HycC3onL5bgVckp78HdcpG4DkntawuYyDcq6GATGw3De5yhXS54QiC1xSeuxMGNGrT",
  "key7": "3wWNgKHD7rNEh7XmMv5UsDcoDQh1EpK74dF59G5Be1rgHfjKo3Xc85eQVEKAEwizU2zpCch77RsTNTRm6YJ3KtQ4",
  "key8": "4rUwKpxKCayv7H1ecm8WFvPdN4qEVxL6Scbaws4Py4VTQFwDYjmGSSvPr31hvfvsoS3fjgHjHUeF9NHWD5NP4Z2X",
  "key9": "5PJbF93bNvRFoo7UbcEjGA1ah1g6Lj4S8qcsQ8bsCTdN7iK5HB8626CyrDkmk8SkxLgpLkioqjivGFHP8JiE2nVi",
  "key10": "42X9SkhAPRK3SJTWDDDR5N4roKyPLStNWAGoKnSdozwvEqc9u6sKfgcVMbYpqag4XH3ekvrZNoCC6vAq8RvJw9uu",
  "key11": "3DtnKQNmc4UKjLN3Up7Ze75kG5WvZp8NuqBLCXrDPjNyudAoBHQJYCHffuKW7MJahMYQmS3SpsgLv3WD6BPTsXyt",
  "key12": "5Mbbda4nxcPVCpdfN8mTPNT964E6hzGAgVQe6XHbpcLhrks5MnYuFkuxdcVF3Zz5UNKP2DY2PB6ghQ1w8Q6WnAwA",
  "key13": "28VXRBH72juU3optpBqyeaqwqhycLgwcaj7NWHCftVskzBDKGNSAuUbKSEBe4szxa11Frr6Geu1VMamweEQwAx9g",
  "key14": "4B7nYYFhRvtDPWiDSprwp87FWGh6PbjXTZPz7D4XwEXAL7TxbkvVtuBG9g9btihzPm9Ty86K5dQPNZszxUStKw24",
  "key15": "5XWN27W7LV84Mdda6jTZQeyQTNjqGMLThgdNfukStJSaDpDKme2WQr3ep6TQWpF5PjUcSvdudwiywVWNFNvSCuZz",
  "key16": "2BHYzBsA5nzrNjSUAkhjagww7s9nzsnGESu1KUzS9AmApaVxhWGAxWXbvymesnaAcoawJSUqA2TFhKHdXf5JKaFB",
  "key17": "yfGnnLXuCqZQpK9RLtBxbU5XeeSNs47H1kGoFGVMDVvbK2nEJY4434KTqxaFZT5VaxtV6eR7wAp9kJQC8FcN6JD",
  "key18": "4t2cHigwc9c61pMjcmAWZfGUsss48TS7iRQEDKfp6kq862zhRacT5RbspUgAYq7G8LSF1sGXCYRw5Rgm3T5zALz3",
  "key19": "3QL795yr6iKWVEjdjXZDbYbk9aVV6wPUN2i4w3ZzJ51VeUDTgu4pqjSAcXgrgSLCMkvubMcxobbinwxNVZe163fy",
  "key20": "Dam71fjNd1Hjy2aXYbSwtRuVgV7osE8JGm4ZDs6oue5gGLkjqkw2WfrDB6brarJSrgvUNPLwLDBpek5fkL6a9vF",
  "key21": "5YU7ucHbS3Yw1kx2hQhwCAeSWhgVMh165VSnb2w5osmPnyz7KA6xkVFoc7j3ChVWWYHnJSiWc6bBmDjJg4GxdzkZ",
  "key22": "5KB9oj6GdpcowPRuyqfJt5V7ZCiYg46fi4JoegZaMpfqDq8sguDfHgJgHviuSJNQnth6MncGTkKgaxnPRU6LpnP",
  "key23": "2hofsgtZSqkG5naToch1pDKSVXNEeK5GdpD9ef98ZsMd1gKgZegcQsFPXxC97WQt6Uv6aLKUhTFDVY5NEi5F9ic8",
  "key24": "3iEsRAaKW8ELcCSbuNzFGya35ejYhvDfC1EsQV26puVLaymfdA7tagLL5drHT3gXGRNJPzU9ZkMXPU5itEmE7EjQ",
  "key25": "HdEgVPiDgFiFWTP79q2u1krwKZaGHeBo3Aw5MH7Kd3ZP9QUeLNhKnkrvdtjcZ4ZirLJv59t3EjYA3Cue9hcpAq3",
  "key26": "58s94MY8JbqusgUqNfFLbcLPmnBduSm7bdqtzN9PAEZqBechU792RLgR2SH9tXHGdSPjeDVYxpk4cr9qZkZzRmCK",
  "key27": "5d8vyZTMyDscXdYyZURZVEbM4hXKrvKyKTGVvnFC7z1x1VCn5Zvrw4HZacCBcWbfATYxjKuqTn7UytuYW1BpMznS",
  "key28": "36qtgqxsuXPeonE3H8TC7mPqX4b6t4RDuXKEgjxEoDABm7gFbVnauo45viEsoGtehExRbGmGXk4Tej7x9Nydhhbs"
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

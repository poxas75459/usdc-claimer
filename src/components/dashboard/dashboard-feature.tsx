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
    "2pk9BfjVGQc4L2eiDktyjpxvF9T6QVYDaZ469xWgroJn6SEDARnFBxtrapmLggt2eYtKfor3LUxJnXWNzFy7f1zH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YBMqsnFGKmS3aQZxMGfeVq58Jvww7mGyPwvb6J2tHDDXaoedWDE8U1nYJEqpmYRguf7peVXQqq5px83KRvWUr74",
  "key1": "2KVrofB65uwh481m4teZJdG3cREoA7LnimxJD3GQLszoFVgUp3YQbK6iKU9sGJvpCVEW5JxjtDVTixhwhmCm9Bg2",
  "key2": "3MExChhWZuTCriwWhw3YDcMxRX1ZJvSh9bHp9KHpP1KYutzBjxfpTqucH2uCF87SpUzJfFBnKJQkB28pcDmzorUU",
  "key3": "JzpnP74KwWjPWPAvcpstaoS2sTPVhmJE9jxFhufRYNfqYpGFWXV33CtxMFYNCcJYuitYYG6kPCsFKCcrpnjHd9z",
  "key4": "2LzJPEcUSLbsUf8iCe4ipcRvZdR1cCm84wBm6hMJ452boB7YvbaXsUVsBA8ZfpcmCioMesoi7k99biCKbCPj3DhR",
  "key5": "5ek9xbCScBV3jC8VAGbdquXh85a54Wnp2as899LWZ36x5QT1jLZ8VdpqJ7rhXFAZ7SZQLfe7ydFtVbVt348QAzhd",
  "key6": "2CFvDYCbJs6AXnS5XjF6kqnJUKKPb56symP7Zju9Zon7REJ6PkV2G6uS31QB7t9eu4KvkdeFtHRAXbWKF7tU7hoR",
  "key7": "5cwxUwSUfqDpx63CJiY7znwN8NCo2MyhCwLR8ECV2enSvGjRmXu8QL66sxDrMMHmoKXiy5MZcVQ2vHBaxgEaChGY",
  "key8": "Mr4xU259wpg5Pcd2jzdC2cAn2Tc6FRcTmnb22tu7hp6KGDm2rWBYZQv1o9Gi8WsNSZuzQzArDE8mAdAAd4ST5UR",
  "key9": "66v6ZMHy3onvxs2xrhknbVEzdASVtkBpQPs7gXNaQDCjbcjscodhraeFUH76qUm3DHgr4j84D674zfPJ27hyBypa",
  "key10": "2jQCYHjXdckHr9kmrc6xnSYsaQf1NptjKU2w5RXXFLWeKNjcEtSK2v8mR6nJjSSFA4Tz4gZzLd31fmTHHKMyVQhe",
  "key11": "3XFRC3J93npCV8csUooyzXF5yvQJZYYQeTtUg46a1FcXDKg1eL3goGznRkAjyaugqvLricq8zc5gfzzizjyB3hWB",
  "key12": "27TnCk4RzqRPkQLozwWNvEXXifcSqFqpWQsTqixFwA7Vrxh26abTg6HYnPvmc6DVinAAf9JDNDsmiRenVEyRgixq",
  "key13": "2YWeVRsTbv4eGMyRfkmCuhFZ3PQXgPXT8GjTZiLt5F7MpsrXpRsLTbxLHBj7UvgBSeBCHj8M3MK9731Jf8pz9vBm",
  "key14": "2vaPTw51pzfaZQXHrA7TV9bCo2RFphmC1zhj3v1whcAkj6xcLAVqnPjjVYHbiCu9J9Fo99Z5MNYBGbevXyRwPFzP",
  "key15": "3oFEXXsM3geWXT5qbEVnBPrbqb48c7VCNbCzYyrUyzTxLmr3RMVxkczkjizP9ZCRc7QS9T2zyFMaT57Jt8xpmdab",
  "key16": "49TSC93VrNvfBH3zSZ2DbjBgnHp9Lf8srwV4AoDcSZMWjup4Jh5cGnpMynyJ1GPMpoLJCqxXVgMRJjsqMmfXkuvs",
  "key17": "5w8VhGvs6ZDJ3tLJxxzUXyCkjXgHMrDpeSctpvrMRicfyUPDrmRSRvnnsthajUStiMKEJPsWDNCR4tRc7Vb23KBx",
  "key18": "5JZnTMRjS7jzwSmKW89VEYypGQWhjaXorbF7Qm4eCiCvXBqRBQpd5aoE2QoHdQfTu44mKjQ68DpFmG8BGa3RcDzA",
  "key19": "2QnDGnSjDNbnM1559Ge12s8dvxF6UYyD6bEtG6WqaaV8Q6M31ajs6UwpLfgtj385xbzWPticLnm1a8KPhFX7ScaS",
  "key20": "5VUoCo8HK8kMRRnxUBsauuALwZXrCx5JUoCPE3bx6XCCjvFNzpwKQnokCx4YGM4V5JDyhQBFpyQYBThSvjYUNrLg",
  "key21": "2sqKmgcpazHfngyf3Psh5BK8g4t5EXeuvQDt1Yq18QeKNubTfn95FJCpuWvonsddbQychcTzUH8c8z2HHPvJF8bm",
  "key22": "3st9Mf2zAyJFsFaRWh7VTG9ERyH7Evcnvd1UucDT8ABMcpMYzekHpprsXqS9SrypcLXVQnaAARb4AXVuQczDjD9j",
  "key23": "66f1xEPcc86ie3SvKM6ME9ZZNnJeNuZ57GqPBYhYTf5mNVcgGs6Cavw5pnS6fLGbVfgKemx9Dw2ZzYgdKR6hTf6e",
  "key24": "2TPaXh9idRBsbRZWE3xJctc1PsHKnHn25oYBdKvCsCGk76cDCFmYKXZShw5Htu6WRE2mQWMB2PcDbgzh7KHHrazR",
  "key25": "5ABJK5v4sW4LxW3jpSbsT4Jt1NweAX2aGVsZKKZNkQJtzWRYpZcdSV3fcjFfwCM8g4qL6TaCXhBRSEYjcBXNvs1M",
  "key26": "4YvSMBHaG5NFeS9Yi51Vgf93RnjqDyQtSzxBV3G8ppW9ZAFGsxGtwWQi52Pc3HY7J97JHrouV4uGw6xbqhLhAFCS",
  "key27": "5AXsYgvkLKBGdzuxoHJrt4dycmuMgz11CckCLkjzFUDd8Y9Fdg4Lu5C9LcyQRbWHVwqdM5CxvwentVos1N3iwxY8",
  "key28": "3vbF1qn5KDTLrGgjUmuaZpcx9p2kgU3urc64FmK5X6Ty4L26uM2MgaRU267pxB6njuZPc7fQYfNYxyqHpCH3Etyg",
  "key29": "2GBwjVRqr9EfJqWzvwjZptUC9kknnMtypYm8QVZHDLZDzK3dwNhTC89Bci7hDg9o89cRBgM98bDYfrfdymzMMgYw",
  "key30": "127VgKzKmBUoHGgvsKke1yCjz5kWaJLj8cS4Zjm2RvFmMpA2HBux3agqEHfatPnoKxxqgH3LAfBDE6zghchUyaKz",
  "key31": "yUS8RenCVJvgkHFvZn6Q3v4wbFHEA8ePTVTcx8c5JTjcSCcMwTt5zt5bbJxvJDm7a7q65GgLHmvdZYpMxgGsGY3"
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

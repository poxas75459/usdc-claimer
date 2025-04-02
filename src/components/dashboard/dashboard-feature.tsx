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
    "5FrpfgtvHbuLUeLjVbijotRVnLRf9pk3V4x1qaJQ71mk8mrBsp6gkuLPfyScJgHQHkNHXXLtsV4BmCnJJ7148dcC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T1Q6H3sSkxBrWSXtrG21iGD2iU8knXn7d3QRJVfApYbgXVrco6wb7F7LhgjG4dJ3tBXARyrModaH2nKWUzWA7c5",
  "key1": "gbiyXQntBYCbqSpxkBzKmncGEXAfA93HgVM3VeRJjysRV1C5irNxGeLW1aBSMAUszjAxeReJrDzraTopkevLt1L",
  "key2": "3Fi84iT8cXNaHGwwcohhJu17f4FTeMVniwhcabjuYqGuc7yWVc87n9QTXWMndaRYxNgyApd7QiwjYCQH9L54sLGk",
  "key3": "Kyc3ayPyYPw8GprQ5NPFVtfZ58HqVHqozt1wKrwWuMmwKfj7c5FeqoXa6DvZji4J3wJ9RxbPhrZuwJRnWrmGzqQ",
  "key4": "5BXk8TWdhnQcbneL85DGJnDM1ZXYugrcWeMdUEnhuQnERjBQRGw9k4az4DURZWm87T6QjsPSQGNp7XSF4GTH7fye",
  "key5": "2SMTr9TFRSAwvh4e8RhdWTxn2o4Ez6epj24zJuFTkDXL8JCDYsbwKL8agdWXA99iWUpkLrJNLeSwTYFDdfxK57wg",
  "key6": "2szcEkjnREoi8nMwZ6z18GSDE7pxwHWJevFqQAyBSy6zrc12V2Mo2LQBUiVCdC42HKc7CY72c2ns7Fjvmp3msMG8",
  "key7": "5SFNeTAiu7Qz2QxBbfP3hrxNyTTSXXG9CaiRpgFA3MNwXdFYBdXABa26of9ogMoNQ1dfQDah1QnMN8KaX8Xz9zyp",
  "key8": "5tc6t2NkN9FZyap56AuxGWnSjAKC5GZExqdnpz8coH7u1yV3r1znvdg3FY9vhntNkBVW3go6koqdRuNr6ZAQqmwS",
  "key9": "2c9E7QT9kCwzjy6TcmEa2Qb2jYnpT8JmpiRqqitKYbSGwuBB43MB9P5kHRUSCNcs9eDjGg1qA1radjj2KwMkFA56",
  "key10": "4eNRu5J9rFBTgWRQPNGPymHABcNrbj6LZFotEw8gZwR7K6Fy4QzvbmJkFt5Kj73XHYkMm5Y4eafp4ug5FzG199yY",
  "key11": "4ictPj3WTsY7D3xi7ZMETmwZfoeKA66req2zMxsqXuCbbRdHHAMGK8xWMb8frpixHL3ShadPAUPbnYYwvEd3VhmM",
  "key12": "35B8hHL3nbvzWw61MhCMzfsP64yPYbfAKyzZggS1VFoUuG88ZoqGtrfYEkCL1MhDkPbdSc41uGtf54GDar9cqYcX",
  "key13": "2VjspaFFpHe7s2SVaz7twupyMfYbYRjrnbdpjBJCxa3H4gcHPwCmuouRTZTBQ1vWtANAjizDxSdDHBcNXB1e5vRS",
  "key14": "4yKXUWgiWYUfBDmTEYC5Pn1bcPsGAzfHD9VD3UjCuqzm9v2CqJudvke9s48wfzezjgg6QVWYEBirt1oQ3w1XbGEn",
  "key15": "8z4F3GxuxFoh1zu54PfCFpFHsU5ScQAmd8cdrgkNAxdF2bqcqvD3VYxyPX2ZmfmpSojocHVb63CRjDf1ZdtRtqE",
  "key16": "3H27pL7911XFBKDQ5Gmz6sqtFjsFABfDcJRBxN5zYfYunNdG96YtwyR6DD2KjBddRoQwJUJWDs8avVfQk5ptVcUo",
  "key17": "3AXsnV3uyJEw44JdcR8YUQmjPD3bJPw3Pwrmr9NrjmPic7TYchTYNU7NgxaB4FJkLEdQdKvatTuxUdx6y3QLayc5",
  "key18": "2JfdWbp7VnuEefBj8ZtxQxQ1htfZ88BzNbyyTDg4Q3rktGxKz65LFjufEUgm2RBdFoozas3g2VJ5zdjakHsXu75V",
  "key19": "XCWmSkdSDyLf9H2xyaENamfLZusXZvT1iGTnRuyg69kLa1WXaoBjgY5Jo28tgSnogYAAWCq7tg85Li84QrMXncp",
  "key20": "2PLgjxTpq8zKMSr1zW1ju6HYKRciVcvgfpPybavQ2HRoGCb2NeeDF6kTSamdtRpVrXZmJWVtGVS85UwsWmhhHkk2",
  "key21": "3yCAK1hCQekozp3HNDFhd9ASpBJsfoKpH172hR5w63TrcSzXyHVCsDwY8jwZHBbQZDpindUKnGNe9iEVqQfwkaY7",
  "key22": "3M2mMkiMN1LR9wNJ6Hj995isMrBGdkRsYLxatNhYLRigb5QTGKHEttaADwor13PVDnhoCAjB3b4qdAL9nQYjtRfB",
  "key23": "46i1DLpDAgExbpj1my5y24pLvzs8v3gjuKT4FfVsNY3wmDnDuqDLpNjnYFoS1GwdPtNaQZQAuF8CFJ3mGkfgfxKe",
  "key24": "4gTz7P34FqjbauKramtpDhfEmKSCR4Jcz756FaLA7UR54FYcJHB9T8tEF3eNctDCCa4HdYDTuR1sgNS8U5pNXYCj",
  "key25": "3feDx4z6oWoe3gQm9XxPcDNAcKDWBjkKYsDRxbHWj6EtBZwAWyXBJJiK7V2B9iYRQuoyvYf4f19WzetCGZkodSDG",
  "key26": "5puojUzuAaSbkx5nKDUh6U44UDwSNvbjoHxYE5tFDnwXGtL92mvnLA9mzAvsQekXDTNooexuESDoNVAqm5gqwgru",
  "key27": "3wjqDc9GhqZuFGtQtG4GDbeyEhSaK26GNjYM2Ma3FdXm4TqKD67ZuY38DTdrztorTGXgghK2MA6AwyrDxCW2Yzaw",
  "key28": "63psLHSRJEHzPFrmnuj9n8WE8xyZnHo2HTyUHH5PAeJw7sUdxZNVp2SvcxoGqjERBbt7EjGzRoPoUN1iSdZznaVT",
  "key29": "3Famn2pxjSHKzCFRw1ciKcbKFYVWhxbxeVHSM2FK72mSzVKEt4RVH7gJc1Fo92MktzUpWzYyRH7rpfbYorfdVLHe",
  "key30": "JsnBro2KZyj9EqRDvsdXtMzKGnSxpgCYNimgF34VNrwgn3rGQNU3ed3ksLt9unTsnJTpzWrq7zhe1Nve2oWU1vV",
  "key31": "66VDRGyUJrvujJURv8uAQbhsS8joYaBz46itS6hgCFGPkweDgXN5otbV7rp7gjGik9unjdm7vJ3gp47XASaXUdxn",
  "key32": "382jfZWRmRvqoScK7F3agk73puR7KveUdKioX1r9ZEi1aF5S7KZhRaCPSXyvyMdqcvUK4Cwg9aut1Nbq1w3XRkLM",
  "key33": "5XPsc8izFwmePAS2Zbm9Rvog1dsGdqBEyaGoNE287eewvVR42pprq8UEEPb3925pwdj1bLVdKuyWwPohtA1i95Ni",
  "key34": "27BzHQcj3MS3gxRRt3Ra2utDLum57vzddTSTXWWmUfQF2bBPbw7PU4fEv1jDbW5NZ6sWggcpW6jrBtwq672KYxXU",
  "key35": "2MNdW1wAZVcxG1rXXeiAdq6F72ZKW9jvqPYjuhYiDF1QiNQMajbqSBB9HLfvQkYdURvqjT3kya24WpNxogKYBbTp"
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

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
    "5Nk7ef7vsCUpG6atyGFFA8YBCciDUjyoDMiCLM3usjG8KBsFMK54BZSX8UHPANYBMEdpmJBxxf47qtT93mLFtiVD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FJeLLdnAQaTEH9vsA72MvG3GnXejeDGxjwbHdQuZRu3pfG1iDui7aMWzqVagpnZHRch4HPrcicyCmWGKYYqPv8G",
  "key1": "3TcWhvUZJVQJH2gthLuvgLQaNp38jL8i1RhFHU3GBraiqGtt5ddjqjV3dGbxbtzkxofuNdcS3nGTHHz6C9hq2UnF",
  "key2": "4jn9ktFQmnAomgDU8UyLG8XJM6AmyB4bWsuqrjFREKdDMwMuZA1VEdeaYwt2YB9EbRJ1WtFB4NP8N5h1oU3NUgDS",
  "key3": "4JX413mmKHTguUMTY9ZaznWHm1P2ntF7mEBtEHrAs7MHj1AbdyxF69w4vKxxiGkXsq84tst2GQTQpcQiMbma9WAU",
  "key4": "rdjWNxLXiiWa1pCoc9LmXt2N6z5DUydHELLfgtcNu4PFf4N87uUJ1bkfjrEvzZcGgTsVg5ir5mm7xzEnQeQ2CXZ",
  "key5": "4w3PVTvku1E6NmSm8BYiyJSYdEJKY8Pu95oBf4voCTmQbHd5QLHzbxmMoL11erLdA4k8NBA5uT6dugukcyB2JRiV",
  "key6": "5EucsoXS9gpfEFWEv4oWBvhKgS4eBzaUDyHntJ4GbjVc4naKTsRVTMvQwDfSzef98sMeiyrx7hdC9VW3JRGhNnwp",
  "key7": "2iya2KzJLReMS6ugt8nfYf4ucVon837DZx2LQ8MKZptfC4Gdy6ur78iDAYcVA8f5J89k5i88xVFdLNEr2e8hokhr",
  "key8": "Ls6nPgh1cUAnBFgrXGsTLbPL8ycdaRYAUd5uGfJhFYnonBBf5SbpPtjKMtvovgnn2wnDUNUoBmGdgZ7XN9KW2d8",
  "key9": "3zhwABHUSTsc4HDTAKZqBKVvFD8EA68RzwNuvP1s53rXbVLWhuSLZwPtaZK452czhC94kPkbeUeuXSNxZKCAH4V8",
  "key10": "uKLSbzMzynbYJNUZgL5w4tywuBaAMxM17jNmSfcLQsG4pQgwNPJGxZTVM7TTg4Rz6NyrPFW7zJz4Jn4K6f3pxD4",
  "key11": "24qBrVincU8MJhE3oPZ1cR3TpfDbtQc45i35mNKGomLD2yr5suP78BbbgqsERR4YCsBaju38mLks47boUe5S3BFp",
  "key12": "5pP3wAa5ZuT1BTaYSReu7mEtnsfbasnhNfepG6QLzpCby3eWEM6Qssjxt66CWSFBtqwCxJZgRUMWUYnVwYTZcmdJ",
  "key13": "t2D9H3WfZVQG7SThJsVdvwjZTpFH9YhFVCTKuwspW1DCz3QBNvhntxfKb5r4grsLE1dAfsREE5yXBfYoWNAdrop",
  "key14": "4Mx8jbt2HZF62pQz4v2sXvT945braFMjDT3uvCq8qVCaK3aZVt6oKULt1bfhxBscSHJ8xyHnhqkdn3FY424cNTof",
  "key15": "4RB8Jrjgo1W13iKrBR3ev2gETFVtAVArGUFEeXywwyET1cCoVbPecykvELUBSngjJXaEaLLjjjk5RHqJsWhoVvQw",
  "key16": "63VkBEnLb5aHz27SfUJuUokC6KVNpe77j9RHxsUURURiF4JGUvox86M1tHeYjLfUv3dFp6bNgzPimsReo6o6Poxk",
  "key17": "3kJgySnUm9tNf6CpXDtsHcX3Nm5SaXfKPRcsJzum8Nsn7QFiFTg8FxNBjF5Ct6LenEwuhpo56CcP83zHFuFencKn",
  "key18": "3MjxE61N6Dc5zYPiB2ZNB2LPF9K7GZzMeYaiFHcCnFqABPJzNpvGvossLsHVR4wJCSmvvNtbaX1KHxCn22jHhMb2",
  "key19": "4wD3jYQZPhksGBSsZqSj1pUWjeqhV3tK7sRhenxRhiT2gzamAEMKbnrbj9MdpikxKyx1uNUDQWk91m1qvPT3MBqj",
  "key20": "5bByLqYu2Kxve6SzqvdbRZQYYt23mAzx1uVeMGhhXH8SUcW1xKDTUL2G3SU89seJJy5jg3CT1q9eceqJz1Jiya5c",
  "key21": "4166u3BpU4HYnNrjT8fHqKzrdg1b93EfavKp3uHs5vSKVzGNp4NwKruBiGq2VkJrtb9LU8bMBdqizVzeEbm9zdhq",
  "key22": "2vfcoJVdMoWqFphwXBusktN41XbTdXNKQVYwKJDedoHmosti3RvtgjHb7zoECVzs4ZuFopqgRyh1B4cGCyuanvmb",
  "key23": "3RQdYrRBJaia7SHcRugoVDRA4CqunEPB1cdR98MUiqofiPBR7NwRPeRCGNEsYw4fVW2DYbGa8jLH2yjhosJwu3hc",
  "key24": "5qNYJhwQwy4fftRHrB3fyvuXCmLvDCS9AmZtoCe8DuW6LA4oz18aypB41NQyNnu4TfwnF1a9xzDDCdetCoLtsXRQ",
  "key25": "4LSyhpomD7kmXYvMmFv4mm8fahDA3iy2x66LyDPaoy1mWXY481wTFBbAtMr4VnnsYpjo6zniWsiqG5z1T7JAzXVy",
  "key26": "2JZk97rxGHfWiVNrep6bdoByb6txgYRybi8yWkLSwkBtbBCexd6XKJc2XXGdW611QMZKwAgxFLFsa5ytQ7ZJ34sm",
  "key27": "K1EEBcqe4DGnuEaXMLd6Mz7xiZrK3aYj5SaKJCrNxCCLNwe9t8PVAzuzG5A7cXCbQHX9RvEW83au8A4k2swU7CY",
  "key28": "2VcVSHfZPusBde8gkYjTxryhSgWMRfTbATdYLfUSj6m7teawyMoj24QicJ8JkYsZdCMkky2YeJUgsd84y8qzQ5T6",
  "key29": "48SyhGaSVX3wHG8TwEnAjRoPmMfwSCiKu1rE8mmCq1phieeyYZ8RRDDgwTEuB9H3Qz1GGoSZa9XeLExMpVc914et",
  "key30": "38C6GCVELUdar8kTMoqmCdMN1t9Y9Pj5NNEZ6yN72ezynQVdBuwkq3oGyDRg2Dab2dgb4MGABvoRbs38kqLqdu2G",
  "key31": "dViYHfUGTxLmSSfo7aWH6xyKUJ3wXGzdRbnoY3cuJzLmwUwqExAjjRRvMcEf3EDqXFAguKq5ufjUPAasiRUctU5",
  "key32": "4hj9hi6NqVj8tEbnNgSHaam3E22o991uWvDiQJif1kx7EUNDkMvU5XJLjSjhUdk9Ropj6FPSpxNvoytKCq21Cbt6",
  "key33": "4b6aeheba4Fr2z2h2rcNctPPAvJM1t4q97fCPd1fkezfMc6AwQiMbtRfz7Air25Kbw41Knnjcnwy8Knge6SL4he8",
  "key34": "4HdHpeHN2GqK5De4Agb47bjqQx7VAamhnqsZVUZmtpw9j1gvCUVuTrXeMQEezg8MLYTYYkGTMpm7gwj1dADWbbkX",
  "key35": "3duAHHksmeuMuPr18UgSo3yVqscKZorQgM8JHjDTMwUEuayMBM1dCZTQRuwPkVSuxfDnbWvVvrfvXxBe7jJ9Qr8e",
  "key36": "5Xzqhsp7YCrK5SfNxwzsZsy3WGqWU9GcPw9dsCTcqWfdCpxx7MmftB6D4acWUGiyhdh9X611grwoL5K8eaPJs6Hx",
  "key37": "4SM1tHzTgMuGEeSDZZmtXbq4TeuhSxrYChZZoh7Ypr3eUqmKythkXkDmairo9Le7fkVzmLayJpfBTZFZSeMNzTaH",
  "key38": "2aMGC4Bj9Ggkr3HqJbdZBxZicLEM4YJEJiWMBPNyU8rPU6f5c3v88HS1AePvWvCKqouPyc35iiFUbAMU92azq65Q",
  "key39": "5ZCSkD3PYfzaw7erLVU3ZH7W6HwVTFKZBBgcywZzMDMPtP5ufEPHBZ6PKr56nXeb4dr7ZaoHXTxqGygZ8kVCSKP7",
  "key40": "TEtgaCvEZNMMNBVGTetfPjG8ffvs5VCffcm97wpRCnbeAmu22fhFVqns4EonP56nPP1DBghAKv5ac8kCfvW2Pkn",
  "key41": "4hncEbdNoyoTkcACWP6G8EQxZUFgBk77C2EdYHAGfximjteW2LTA7KSEYFDRT6xuPw1ujCR7Ay8SriLoVQxsFuu7",
  "key42": "5QfPjQvBTC2pP4hA9HiMPTAiEJv8D9qkirgDbwbdSqyBhcZ6sDLcNq3rUckFswHM3hSTBrHEVWJMoT9YTaYx6FJo"
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

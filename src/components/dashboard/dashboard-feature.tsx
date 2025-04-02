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
    "4g8a89bHvhvPbkC6GkUPpamzh5qZfm6GBBqV5AXJkqhYTciWuTwbu4ek5gHVWDdnwfQK7Y9Ck13LrWFG5PGvHsrU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZwsGnSsAXfVjQo66dEPG3G5RAQrH7AWWSR3kDWAMm8USxLYpkVFmC2BRe6RToPrr7dvsW1R8h2HpXBkeCVLf6dU",
  "key1": "2R4e3y1Edb5vHRhqa9YtCGPKrLo9mtMhhMMqo57no1cSoPQtYxLNSNoBNLkwYFbrZgxgQW2rHEHaP9magaYcbq7V",
  "key2": "5Zv45ijAGssvHKLadVvGdfZDfzQtyPQnm6Ep4Q78XJWKNTVPVKi6ozpCDq2EbJV9mc7FtURvA2RaWLVX1FAaG12Z",
  "key3": "4xtyco3qYnCDdYjV1zNmovNN4wp6DEVrXQzELpky9C2hTGgndzQWJfog6RoqmPNcj7JGm3GC8V3k2uKC41DyyivF",
  "key4": "re8JTbirazdai9d6RpitpNcqQgdUcXaAKnAf2eeBGXjC7fYQpbZeT8KiCqZvUQgYAVTQ4i5DpKz2J9Gwpt5kTmk",
  "key5": "63fV8F3DRGpeTu5hozFBvbZ8HCesHkakZ3Cm6pgcqCKFRLN2oB4mwCsM4CEsHGs7kiy3mMdgnpBgbCJaRUyf2K6z",
  "key6": "36rCRQ8TJWunaKRz9EYQTdsGBJJbWqJC7tsGZJXkoawTZY3Urk4X1DzZC7RCTBS3jVDxVWYCTVAjS5o7gSSL2at5",
  "key7": "4ZnRzsTWRYVVNbLVFDSYDSLKCkZpKwR5XuNCMSzkidy5rivyWKjCdZteGZYWRzcyggr4Ju2C8yGZH2WqHLvsMQnw",
  "key8": "4LgUyvqk6fiDyRGHb434QecNEa4EcwGhQiSwPmoDtSKvavL8wKk2bJSSeqtMyGYBFE9zn66QHiRSNQ1fgAbeM77a",
  "key9": "tRtfWBP5XR3iDx98AVJ1ofZB5txTTsRSdxbpZmDRYro7ZjgcLVRHxe9F6sA8D64Gwa434D2aiwL2uHYJhr8DS17",
  "key10": "5JDrp4L7V2RhGpw88Zbq8Dcjm9211LnFcL6nUgjH7NjprKbqPSugy3AdnzT6GrY4MFABpdwRe2CCaTWjNNWu7wS7",
  "key11": "5YKDMfEaQFuRWDACzmxcTyhFCPEGvwQGybF6yQwCSrzeN6tKeE8Np8AG5bW3BBMtVad6112s7d99bFh8ccs5fJfq",
  "key12": "4WpWHf6eAKc26RETMiuPs6JZpRNfLT6CHCm7MUX81ogY9NNbGDupuqRC9E6Gs9caR6PY9rpTkPPVqCioTdxE6ae",
  "key13": "4dnvTKBxmQwD4njCHnzSRnC6gakzvkg8v3Lpcrw5vjzY1nUo6qnHT4B2pPjgYdFV2KySDBhpmux3u5WVEEAizHnk",
  "key14": "4K4xiRvQ9T6abHiVq8zWUr6WG9Z8pCK4KmXV7thxVyL1bafww8vR5dAXjMVfvdfdwLvUBc8V9MrSa7MAEVYPxfEb",
  "key15": "4TmdFYMCPLCkETiQg6SVQ2B2jDsqQCaifyx8aShoGL2Z1zR3YzwfWzJrtESz4Syjr7ZRaEb1XfvXpMdsQpC7sChQ",
  "key16": "2AqBKJ1EmRBVWqGTdknxDfdpXtttnPkXw16kfaapXWomAXLbQvso5wd9YfseraoYc7A9ZUvwar7d94wnJ7zxRZdN",
  "key17": "4CKn5qd2X61kz5bHwbM1LMvKKvLRKGwxAm8FDHZpt6hrEKLNDnkiDUPe7rNvnhSrBTc4qTwwCdd5XH5FEAF3Lwrb",
  "key18": "4wtxrgSEZDqpKbn8MZsD5ejYyjuPMutD9MAeqTWSXzNf9ufyYhmF8F4XcoH7q2Ld2rYAgXFg1iY5ifdQxpRXJ9UJ",
  "key19": "68JEfPT1pm9W3f7Nt7qWKesNQ81qrsSs1di7p1rVfT2zgWo3FonaBFu7EXWoF6dQ2hNyCDn147B9YSuqtfNPzx7",
  "key20": "2Lezz53KiddZugRnSNNAHhxuXg4DRuq2oZydEqjLjt7VCSn677ZdG1S5W8Z2czs5KwRYynbQR346twFmeAhsAinH",
  "key21": "4PN8zYNncRufb5Xfzt7JtZB4L67mvUdxNpubRm2ogKdmHMqB1P3MapU9CA3KaQn2NgVX4sukDjsZT6FoA4vfia9u",
  "key22": "4ThTrctv699CrqTYWu435TVCEfaM5J87eBaWRxaS7ZEC5MBoLa6oQnkZKd4uVc2fjHihcMGRpZvBSifYiUT5hKbh",
  "key23": "5qXoaw2hgS1J5hstghtrLbc3dX1tVbXgWPDSBUK7714EsJ7rfaiMW8RUTH7uyRPRNUXnQH2UHX4X7wqjm4qoeE6V",
  "key24": "271pzQStk4yqgK5WMUhoEd9PJe8pZhojdHyZZNRB7nXyBu9vGeWpSPVSceywfDnchNaxBieNTDfUokkWvor9H4GL",
  "key25": "3WARSWpViT5GX77cPSQAQW3Cy3Aro1oYQ4tWccLrvdPU34MXreoW3jzeYkT1VWcZeR2xHv27eYs8ZcGrPBpXBDL2",
  "key26": "5oYQ3zycLNKXrWk6e3Z6AUKUMH7zC7JW84JCyFiq7TJnG3LipeNZR9DPQQNEfqS7tf3m4QrM6NEPw5eeb9HhuasZ",
  "key27": "m15NSVKbMG6ms7Af5NNjtaQ7kYPQQYFT9T4DPu1XXBaC4zG57xiE5Xy4ijYXcSC295832h7dh272YXLvx8MjMhT",
  "key28": "42QRqQgi6ED8JF6h8s2XseqdwAp8ihV3ZSoiE33VKzv65jrx8hj8KbB8BNqEWA69SHpbnLbcNLbQg6YiLGPMsRfc",
  "key29": "2XR8xeKH2hyQZ7JhTdtNfWnD35Etf4JgzqBsRrwpx2teeRjB7bUCWZDXHHkF36DtTjGzkd3nocf8djfKE3n9tDDb",
  "key30": "2tsy3AvMQnnkmiXRPsi9A91MoEPraxDpZwVaFKNSTtdybMht2LH3dbcignun7njKxYkxcFjZ9PjBRnr2P4r61a4T",
  "key31": "4p9MBBHJRD7oPP3UGEfm3cJNPPF2czCXLgur2NseWV7aLvH3pHPie1CzBKhcHzKNKiQ8jteSJtPGHNoEhjqhTQxd",
  "key32": "4vVUzLk1SGeopKfDhq3LYHHBayYJBreuwfD54hnTDLeTk4qbhbW36PukUrj4fcHzW4TBWB6NvNq2fb9uZnQEPagf"
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

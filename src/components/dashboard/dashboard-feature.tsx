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
    "3vADjZQAwedA3ZPEUAjB77oVfts1j78zd2jMFouD74KgCzGqYK9eoerBC8QAmzp6bd7diyN8tQ3E9SQWVbwceSe1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36sqAbtcpXaysVwWH26dGuNhjsTXnA2GTBxdawvXBf6QwfhbETKz9jF4mZXjoouFcDaGqFv6XmoeD1TQbsFFVLei",
  "key1": "5rv3u2Un94Fz1e2uQg7ZcVdxghT3wfdFJujoM1RH4QNjuT7DiHiDTTXX8JZnQe4gfmDbtZ9QSoAohdoQRWQrjzmh",
  "key2": "43R15BVvMP7ucJBqQxLHCpjejTPTQdxogW7fevEZcJo8M7tpycmFuDDfzT2K3LcjHFUZuaBk9GCQ9MeREHywbiZ8",
  "key3": "2rV5q3pd2ZrL3nqdE85fCipvxm3maJyzom5QTGAqGYjt22jBajR37NM5CXbzmijo6625Moe6fc6k7teemiqjue3K",
  "key4": "4D2Smy9WyhW2U1A1AUZXrnkXm88ZTeWhvw8L9AuNo7ZYZiydNezYaeH1Vs6yQNFwV8uXmxmQ85ZGkz9baJj7cq3h",
  "key5": "XEGmEUX4e9uUwibkBGfQGo5M6ARUHXBqQF3VFUUTsqKiikQZFSf9G7J52gXyWQPTSeUMAU6cjAGMenYKnvhVsMK",
  "key6": "269FzKsrKz5uGwBNRFKQ6XCFswvxeDCdBZzb51QMRerGv4VUstwB5gnxuQSUNmL2JTcW5EMVtneumqnrZ7sbK2kC",
  "key7": "52yVZWbkGGohdZkHDn71sKu38ioWDKmXJMaDsJjaeSTLaYjoYcC34qQ5LhUPxfibyeA4YkhEzaJyHPKdYon6BNvp",
  "key8": "2U6yRQ62Ksw23NjA54t5R3xt2NWKkbNkpqqPRcy2b7dJ2TSHn96tWJhNoGbofvqzpLsw5oi1cVDTV6ocsP3rhfL1",
  "key9": "46KFnP15M67tJau1WRUyMiDBNYwSQysQR7ERxg1qsg7EXctGRvt7Qbo6iYJKQZdtCwcMweFmFDqdn9EHr2vfCTSM",
  "key10": "ToWZS7yHoxVQ64Be1NVGfKMvGyE6QmuUoDFkmS2VwJ72dLc9QwtmcPPmLZFtTSVJJgro1Rjog4wsWA2hphFaySc",
  "key11": "45oMeR89Wn38jwQ6KcdHnjneqEbcsgNajk61186Yo5jnD8GkwMCPSaZJAxQVUUtVm3UMrc3oBWo8nkhBBCjN6pk4",
  "key12": "kx7XoSY4dQAQiLn1tgPj3Emw3d8rWQE8Dr4TRmdgTa4Apsz6KdBVcUeq3krC3JPyhDJUwD1cupcyVZMdEHLh2iQ",
  "key13": "5dpz6jUgvETS2cqXyuKpJxouEr5hu7h9CnduJWPKAeaA7NeBGa6VhpUYXTQgUFrPY2xjQVF9jZw8YBMknDTWuScP",
  "key14": "sFoGDvE7p7rD3WD2UvQhiSqY42d2jGS6qeHmumdjGDJAuUq2LedeN6BQ6QkB4r6RmSkpbUerKK7SJoFgjJu2TtG",
  "key15": "2BYXPreUcUrKYz4A4vBJpbV4Lrt9SaXztdz4hY499UGY7BsqHFHAWwxoN9S9DckWn5YLTgRkiWoVWouoHS8Njygu",
  "key16": "5fYwZh14xuyoEvizvrtx9kXdaqEF4QjEUDhUyMiNFuj2CqKuYUFkrvEkixevf3xySRYv6kviEkmcmPPvmdaeEuf5",
  "key17": "2MA3Ad8mrbN72cCFtGhrbz4DtsH1Fvg8et5xqQhACo5hmWGdK3BY9exMkTc7mQ2KN1KBGw2EtK88YbmM4iHPkgL5",
  "key18": "2yXTTkMu6TvxwdwQWiXigioGEwrhbaE1hfme8jS4xzjzbq5rM2HGgau8ZVYM7NBydFe31neR7Y59687SRPYSG6vA",
  "key19": "2LD9mPbVuFfqWBJEvYRDTbCCKuhgGkzNXfKGYRJWNyTpvuVs7EYGR8HtpPFDvd38DNmw12oE15uiVdq9qT6XSH18",
  "key20": "66gvcFCk733e68hJLUQh5TnCMkCyUTYQXzzga2XMn4CdcaP1s6VqqaZf8a1Xxd4gVUnvqBJMebxnTqsqZZ8M3uHv",
  "key21": "5ozSVNsS4fLG1oTnTW2hwQ19RPuusDhRMahqhzPGxNT8mdpwLLUPuQ5xEbkpNrqjkCinFCDcodZ4UPupqnWh1EFM",
  "key22": "2kLndk8tTyZgTWre3j2V7EGS9eHr8XNmjKHmESbkPb4DegZNxsAkAACyVbm9M4PzZnPQzoCgDhmPEQrRmtY8dF8w",
  "key23": "2fZXn8Qt97zr4W6rSpEvszuRCALt5T8XxxPHV7sa1Msn1VAKo8UUHWKUeBsksdFgduVax6kDetyTGRzavox78cBa",
  "key24": "2UPyzxqaAP1zJ6mmi25Ar7AwtjEUmMuJHGk84ziYvcKUykwQ14xtzPZXWUQYKvQYyH9S4oSGAnJn3FLieEjHVzFg",
  "key25": "4QmYavQNHCvNqWqYrTXN3UmMuadQhDECjHbGyw7EZ8uQRUD4S3zpuauoXABio7nNzVjtqy1zrh3j5BtX9bPAfieX",
  "key26": "2x8oG9t98VNFmutsUJS1aHLtB3nP4HRsi33XoA3Ktr5aJ8KVA61a2Do9hWGgTCooZQjqXhMat8S18bd9n5qPfgjV",
  "key27": "46wiw2Qz2PCAN1RUfF8RDUYofmD7aABk1saS9WbKBgMciSCJL9ryJzdNTMWzTRf3QjGAGV95SjQJcUe3RrgQRHoV",
  "key28": "3tyKcn9BFef9h7hAVHrLcjKXJNRf6var4ThejC4VooXQKRmTyz1mGxf3iCbsQugatvc7XLJC7ZiBe7NyL6HduvSt",
  "key29": "9ULTC1q4hggWAZYNqtFATxSwNsNVBZBaLN99Gzuj3oMCJyh9N62JwnAzBTpti783n31BkNiCvdpBsECSJm9NVuU",
  "key30": "4BA78RYwFcqANupKWXUFrK8zrLc6Zn7Hmzv4rNmQpijoyUtDzXhXxKEQ1hfSqYLKfjAqfES3ZavH7HmQFoFtKT1H"
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

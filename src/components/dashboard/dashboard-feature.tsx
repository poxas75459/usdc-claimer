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
    "6En3d1tE9H3rMTVzenSgydvWDuBWRv7FvRUWVyh6E477ULxFB9gBS8gwZ8WMeCttNHS6bmzxtQYGH6e7MktLRrs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D2GYUiqSixxPN1MPPNz3bXavCMYcxi5dkUnGWpStaXqxneRPxpRLiAzE5PWyghjU9DSFXf3s79DJjR59ks36smd",
  "key1": "5gHZxPqaBek2aeAMyJeynzRF2BMdr6DkXXJvDAvkyZckzzneVJWRA83nPQyJMeePLgwqpYHm9zaTHZYNAqjcKpmv",
  "key2": "PR46kNkFNoqZw21k1v9JabZUr3pqXW29hhgx7yWGPAq76u7qcDfCvojWzFnz4sA8acb1rV8KYYiHv3dZReZwFVc",
  "key3": "5ezCpLDV4BU8zpVDL5KBXfFUUzwySSdWMhafZQgjpUzkWR8yKkxK2qRzR5GCJKVTixkq7AJ6esJ2hwENxYukasAP",
  "key4": "uCq8YZxfg3aXJ6D6HzuyGiiqUNSjJtREBQnW96NGct4dSc3Q3DHFQ8cyuuEwjHmuyE5HdCet8RtPA2yxteUHFkq",
  "key5": "5dzqktNuaGcodXyd6xijLJtcgXrTxWHXLnVUyrW6v5QJR3Fdz6WBdio4V1V3voc4nHVwt4xEnzjuxWguGLAkaT6j",
  "key6": "4VqvzSFJiuqweU12TWfTDDSAw4pXhJnFMBHbZ1GSZNKEwqnQLmbJdFutcBt3WuL2DkmtpCvSo3RDM2og7JM1um5c",
  "key7": "YbXf7tYM8nYykXkiaSVZrgygQbuvhkFZoMRZpV3op3VsMwwoCkA2fNtambxccdpyLUoBhonvSpMQokyiYaediqW",
  "key8": "2bmfhJJEWVmHeTvxeNni1Cex5v6Bk1W7znMDJdZYPKbnetpQ9aCTDPtrU5kvuGcUEsYxUYDxk7QRWig9qPdGk9uW",
  "key9": "2gWd4PWeHbjgvm2p3yEuPeuGb8KvDu48pDQkR21JWCXMwE85jdw3H2sQZT3fk8moYMFkSgpLt8YiiUG8WrLy9QyM",
  "key10": "3rwNwF1iyyFW9EyDu6G4xBYcAB3Q3NnmAXiGro9WMyDhb8Pgme3XggEtFf6B9mVQCT7iT9SWa1s1xmYHtj5R7WA5",
  "key11": "3GtGFF4zbWNt9Zxfep2J3kj5W6P3cHQeUmu9u68dPd6RpaQiwZnYzxz2caW99npJssu6b9ok73yf5Tb6dthPJMHA",
  "key12": "4wDpLHNszQ273kjsD7CH4gLcHnffZq674ehJHNKVhBtx8GAFeadRpdfAAg1eHHqiVb4t1iTMnJRiGZNKZRb6NCp1",
  "key13": "2gWRS154i7BAyAmPTqucxK1nnatbT8Vr3dB6ZZRzDkgZ9L8e9KuzLbEggXJem9yYRMtwmtDuqkafw3uBjGWMgX8R",
  "key14": "fTxNThyh8g9M4oPuki3DC7HBnKjqbjuonqRd3k4gpVa88e8tLx9rDEQUpuhJJzso9ZCJLfXFo2CCBfo88dixztd",
  "key15": "5N2Ed8KaUbaJLEY9sTMnbnppg9ZijrNDerRp8E6RmCmF8y3nvsnC5vmx4PUoGzVTdJT8YfUw38wSLGaKQVppYyWu",
  "key16": "2uv3ram3dUF7x8us77nKrxxLUyefDu1XphaCeaT8Tf9tWbgUC66aassBU9cEPpg1WxXiQy1uhA4BFL5t2U8T6yU6",
  "key17": "kucsTAucy1ovP15aMEdj8T2f8APCuUdH6YmivvsjLWjc7Gj4rnDXzy1KxCrcEapnVYnPAC6Chf5EvCpu8AvfYZL",
  "key18": "2wJSAJuNMDu4SSaV7h6rVWojwUN78q3HtsHq1Xio4nN4QWAEbCBgHtqpBbMwrpdxZHYz4YS9seiDaMpA5pKkemuf",
  "key19": "4mj7iyyQvZ7sV3fFXTS3AGE46YxTtBRZYiS4tqaTC713WhZCm2f4ApJ6yVafQszybPu38ykGATSq9Y7L7JtSeeZV",
  "key20": "2GTq95fmKHVixkhvyGk2SkfEBBFb88mVC2rXdbyBgqNEW73LmWZH63yJ3HBFiNYaH1YW32SB6hT562RfwdXCWWFb",
  "key21": "5LoNdDAK4DwHN1zdw3ajVSGJc2SXiK1CA7UrQcxpqFRHvYXFdkw57fUcRuJKpZdaMR2QLaLT6iTFBhP8FmvcdJBf",
  "key22": "hUTpzEMcvYXHe4wyVU7A5XEaD2zkufyWhV5aPw9AD4i4YSxZgM3GBWNjdG2byqNcPJekfkzuF5KRp6Tmosheo2r",
  "key23": "4fQEP2yUnBRjA4HAmSvRUpMNpnutVk7nAgLgd8Jgkvw7pZT7s3senkn14xBj44zysjeA1PBz5kw4ex8bok8tGBTn",
  "key24": "WQvRdPnA6q73sW9wbt92fdNfpesTG4PVmy1F2MMv6f8yvyRDCAvHXvB31s9hhD33oSrPgqWZsvRDeDegLDpCxbD",
  "key25": "3LgvpDkcMizoTmhAuq13xF7xQrRWPETBFkLZTRQGbBkUpeK5VfqKMeXPt9ypia1FAnBTgWgbwWQ4FUaZJjB8cW3n",
  "key26": "QzY9svq3ktyaaLNZf24ZS8rQoDQRZzVUE8Yw8zZ2cmUMa2W6tAiyjeG5hGCZojmgX98ox7HKkjchJqTPS1n37Lw",
  "key27": "45r3EcHKLHqPeryTwDysWii4w93evn7LxVbTx8W2Yehpt1JvRMyBc5f3LSSUMLvNbgZuC44XZnbSv95S6DTqxrkh",
  "key28": "5LQjSaTNRrraCRFusp2eYJ5NVNct3D2yLKA6MAR5cirq1sY5gRpgmRmebdv7ye13tsmwcWAUPj3CBmcuzN8Lg1Ah",
  "key29": "5bHmuYfvzTSojGCeyahC8hGhypVjtkjEDWQ2gW95NTt5EpwcVma4tGJjLsYXembM2RbkwwzbXgWi4oUxxK1N1vik"
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

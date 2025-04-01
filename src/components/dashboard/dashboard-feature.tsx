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
    "h4xwpHmNZHSyNTKTvQ3wp79eZQGQMBMjRkL9qpKx56h4zPDqkNXCvhD7y1JAuwqYvNSbL8Fys7VCapRuydTcW6e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w4syDRiBVD9fX7Z5mawi9DvPPErdGGQekXNRupZsw94hQQUNjWSarz4wk1yLKYy3RFBDbtvVqzxv7fkFQTUqmYa",
  "key1": "5N1ZD1h9bJMY96bwGqZgzdBvKACwym1GQ4ARukA9NGhJFbZzs4p7bUjg9YiELrSMGxLkEmEThVFAntjQZLfxPdPK",
  "key2": "465wHx7XYqtxjU8tTQMvDDdtYjr68k8gY2Qajaz5GMp8VyRu53JG9SiaVmHmZ5WTYXLrHjquK1T6gofhaBcqE8j6",
  "key3": "2vAzmKtZahTfdUhoFcSde2xnqf1GVrfm4aDFpBqhmdEarSNhKXSqyeALoRpkgfjWgegWHTbLKZih5XohWtw159SU",
  "key4": "3Ge8PRYevCMocckDwT6Rd5xY5DEJ1XLVJMi8Rf6LrZsGtM4PWzzrVftaHtkEnKWiyDPzKHjMM2DMVB5st5HsYhzz",
  "key5": "3xCToHiM5FY3fp18ij9LJaE23R2PaS7nepusZFx11LEQB6PLYYV4K3e9XWi5HmgJAB1zpKWdcjPJtK7E4yVNLtg6",
  "key6": "5x8th7SfepcT1UKTTK7ugSJ9od9vgn7RTTouLcsPE45yT42DLVtyNyGTRobQULZyKkj3xCubQ5JXjEGNX2Q1AiWy",
  "key7": "3sfsNmabnTidwKeZgW8KHc2HQGwtvS5awPERbwCg4kZEUETLU27PjFCypuETn1FYvrB3oa8M81gLL2oiMzEQ4Ako",
  "key8": "d1LeHMruXupD3CDbjjg2zRpdnE3TDBK4JzZgpn5GuxB84iHWu9hZd5W37ze5MRmUQNJhRBiUaeTAHsLS4Gg67CK",
  "key9": "4Ajn4UUZbimxyC9r4Y3KNmSoiAZKfbi9zRW9UWCFoTDvw5oTaBZtKtrTqDyWUjUZZSN4rv4miFgqWivGjN7gGS6e",
  "key10": "3McZB6JNDuMuM6XowEKuegQod9GEnjRuKzWwmTcPYMVGrLXHhdCypi2zzAJvJB79iDwtGmwBmE64jLxGrhdy4eax",
  "key11": "5ek9bGZKjZiyW3n1oqaaL9K6W93MEBnr2c4UB2rT87nhF9JaTLdV4J5sgseHbEEWCtZgn8nzFuav11dFiZzc7xve",
  "key12": "5g5MXB4gzZ1VeWv8CXXUFGoNfo1YTQxFeMGcxVa7a553uEmDsHHizrWLghLyVNYWuqGEsZe1vTa9uqu5WtcLw3LV",
  "key13": "35gS7qQfQFXPmS2b5yWFoiSussuVaLkrAh26y1RwjZeDRbpCMeCkM9YJbSmbzMQCnvSQtv8yuvVjF61jVW92ubxD",
  "key14": "4xAfanQPm4n4Z7XqRmSMvMY2VZi5k3r4jWhpaabqjgNBhoB74SB17teEKZ1Cyrt5ipSWQK4wJAWWnXWZKmdb8c34",
  "key15": "7YKx5Y4jYRZPBxyeqpZTxH3mRYmSpx8YMCw385FJvsf7ivxdq4H7DXGQPdYuqAcVVPtYwQwneNB8D62Ftei6FUm",
  "key16": "2qQtR2nWBq7jhAKH3mrYGpj2YpeGJ2k7srgZf42Gf2KFbsp2o98BBLDGLjnPurKYCfRNyGfhrKvHADX8asoiNrga",
  "key17": "4YonaSSeKNXqd82mMMyTL1LJudAMjX1sZSUszk7ZP5MEno3s8yg9ESJ9HyU3zTmUyKV4gdmzWLRtaSa9YSiSCjmH",
  "key18": "Yv1UBBtAGCLWrhM8GT95ELnkfwXauoFCc9Ybn5xUkRbsLJmbAPAvvFu76dXgB4ma248Hc2gnnvNgC7BrhtpN2dA",
  "key19": "c9eEpiBtEE7oZngp3bmchFkukV5tn2xb2gQhr1fxYJL7RZmjEmSpEgioUK2dVPjERVnPN1RdnY7yM6tKvzh1X4Z",
  "key20": "3nUdbuna6w6XiBKN6dXrdg4LCTVnvipSFnZb6AE2eMjmAr2G8w7L25qasZSQ67tSgpK1HXacrLNqM9Kt2XuqNcWm",
  "key21": "79YBASPZYDRKLfsLhZgEunMQAEi1keCjkcBEJAYq3vmwNatejDmaNq19c3p4X5kXytVTfU4AkwcRusV8nrEvf7h",
  "key22": "3Z7mRQzREErGUZAC42HjPmsPcoCxAjUfAMVaffysgAwPGom5RGDu4cexK7kFhc3EWbSUPZSDZU4QymtD44KdQ1pJ",
  "key23": "5L5AtFvdRGim8PhVUisrzsv4zGvuWWHk7ZZw8Z4SQsgBRmYffhVeXoxrTsRHStFrLKUbq7vMLzeWoBayw77oU77n",
  "key24": "2sk23Som6NpfTcTg47SRpVvuwem6TByER6R6aTpxhdUscyXW2vSTjMXTKnF2t7ZHsgW71HDtnjEzf6dpTss8CaJk",
  "key25": "62kSbsDkki2dMyKTRiuaiVMv12oHzJVkaCZmYygApHevJYiostThNAcW4mSJkfQgAB9L5tv44Lu66PKSmWw1D28b",
  "key26": "3tVsYZ2UMDBr5sgdUnEZVbGNgDXGKmnBHEck5AvGCddUoQqMyo83wsgyim6PYgR898sD6TYT6MLnMrfiFL1y1H2Q",
  "key27": "3wdYNu7cjYuyvTtSZeatFQXuXfogafvRQkEToAg1jDWiguxTf2uLFDZ94QejtxG18wmboYh1cBupjU5AWDDZkP9j"
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

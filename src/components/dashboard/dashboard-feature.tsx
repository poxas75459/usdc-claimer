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
    "eZ4HGZZEJK7zEuNwFvy1B9xS6D9N57o7aHpuEZechVTuuT7WBdSSJdck17vQaPNEuQQjSg6NtCaaphAojzNZiqy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zN5hU9rpyJRzMNm81YCvaM3dtSNKEa3GXFxFE7BwaXKFiebxPP6se8jrwZojah6q2WbCUQmSSGZgnp2NcCNntsu",
  "key1": "2ntXmMm2ZMDZBqYTwSRjyfbYMoYFmXCAVd5447dxcqsJYhPCbP8TGrtbMjZQrend1kuYaNH99dikX1EVEz5mnmqc",
  "key2": "51hFJHKMX4fAxHCz95zf5Cx7cjhxgqM152UwbjLsr8LYsXFMnedUhm3rep6PkNkJY2Q1bBnj1uGCJLz5RvMN5GbB",
  "key3": "5PjJwc96aVsBHG5nmShe4R6ngHQ3zH3kD6ipybLXKG5fBSpvcCAoCfS92V3muMfKcNTTaqTpC2q2xfKUp81vnRFY",
  "key4": "FdQRmemuYQNjgjEBwkLZsoii3JxyHUBHNvGpPgnMUhyQvw1ZgAKbACazvcrWykkqzDBjbGTAGqBnomTJZEGJJND",
  "key5": "2yBwxgkU68RLmRiWedZeZvJBxQT7WJojy5LTfaprWS6hGpJXFDdzo3Dnto5ccs8BF7tvNMUFYhH6xrJ7u4zSDZ1z",
  "key6": "3Ai93Qff1txjVgmwi5QXDoGzQJoM5Wsh349D6FttNUh2cXzYtD58pKMzE9TKbLyrKmvptNNKw6DLZ7LdNX8ErV6u",
  "key7": "4KxDymUYFacQboo3MiCdoG4mdZcnyRPeA4EbMwcE1RUWpJKkerYCZYSiQRL2Txux4f73m2TzLLXKXFmLXUr2Zthi",
  "key8": "5y28eDA7iMZa3bgNYokNp5qXsKB8ngQD2X6X1vznpeSMXB5nqnfsCAZNwF5MyjKAPQ316n6upoZsa1zA7Tp8pBZ5",
  "key9": "3YNomfUYwQ6U8MzikUqUeBiJJ1c8HSNDpKYTNS5fLpuQDYXRjMvTBwkKZKotSxcBgJGFXPvqkF4uuAquSFbxSmWL",
  "key10": "3CEThoMqMSLhGYGo6HvTaJQr3gtfNaJ3UfctkFhg6NZ3252tM4FW58NU8jfDXQfAzPH5SCAwddgx6H6n8vM4GgsP",
  "key11": "5jfdDiDsxRU77FZhkiuPuZNqY3Y2CYY8WumDRBHQnhk7pbzpTzDAYjAvWbkKC9vQSwz8245UVjfC5zQX8B4SXuW",
  "key12": "egJdvA3Vq3t689k6cgKtFwDSRbH8MHc22r5vymQXoAsjDAB73ioo7njLFoPKdcsg1tqxykHBv9FaCroSy8th82C",
  "key13": "3NsaQDNbt9VKTxig5MECX589dZ3HgK9qMn2wbdgE3zuQm5nYp8aSa5C4mg1jVy5qANLP3kGBKs8EfFgDQoFDTiB",
  "key14": "3MCDReUu82CZUtBbgPGoFicXSMMzzEKTxdkJzhgKmLcuSRpepq75tXHkWCVLT1Wtgfeea7jMRWzcUm9v8geBTVwi",
  "key15": "2xJUxXBFwcJcLrgKW2Tmmt5z2RxyqR2oc9gDbLPU89pPMfQAJ9Xns95MdUho1gTFfh774SQZ3ELaUHAgLK53dAvm",
  "key16": "2dnN4eMCkw4QSwMGr7HkZs3sYoCjhbBBkTRCEnvYUAXLepczryUGcx6KGxwJpoxX81jF9WXKHxkuJCg3cwVywdw7",
  "key17": "3B7Bri9j75RY7asHKzovmcEhczVKAJtUpf7ZYW4DqovNtMAxs1PzeyDL3J53xWPm2PbJVw9qEmz8fz4YZHUKqroB",
  "key18": "594xhiyL8Job5AfuNpDGVydcMYiziL385m2Zs6eCuik1BZRkjSn5pybxNLFDbpjN2R19rBKCGNXe3wY6hy1z7ne3",
  "key19": "2hQCx5JjbiXs6Sf8zgRVpijEkpbBUA3a6H12qY6tEsipkk3Lsamjch5CGuBPqvXtkMFf1wY1XscUXroiX5RGygy4",
  "key20": "4r3mo7ZQ5WzTJvzY1Dffd8bZsTobbzdEncygJjrxwTHo6Dpzb8UCUVEH5SAEWXUpSPhGScVtARD783pssVNLNJF",
  "key21": "4mYvzZ4iCbzbTATm2MzYkcu8RGCnRnaX7gcoMD3bQUF6iVLgE4YXnjGXwyZFpXFRGRLvpGHLDp4uhFx7d2YyH8v1",
  "key22": "4fHkMvDGiozibq5WthdShcJbtqCQxvj9bd3sKgd7jnPzVjzkC5UYMfZ7HSymdP9CzaexVzMVUeQ1wLRvrQzg6Y51",
  "key23": "4Lwt7tCDr4MXGLzpTLHf2EJCZHiooZ81zYkSNHZaymijZSrmHaE2AgF5RxmGpYLBq1SmoZ5aFPjmLVViEX21Co4W",
  "key24": "3HCgenj2AvtdWWTqbGce8mTY7fsAEEZ4EvFHkV7djRfgbJ9Ka5nmipwpyRPod7fLHJbwoWHm5yTodQs2hEBQvgKW",
  "key25": "5zrnZG7382YZnbQXSQSX5D2FyAyohkKSfBEk71czfzFb71oCEtZnyF7G3B2gt7RTMb9UTs1nqFigt9RjZakmXPiH",
  "key26": "4dgDhbxPpeLgQs9jdQfJBxvQaewptNYipfbGFYNmx8oKxrzCjPDRGFbeTMZj4sTcMAUqkgvqjjBjp9omVsqLEsiN",
  "key27": "v782vQm6omv9jAMHrjHAhfqAPybe6xRB7KT1wWTMbZ6rP4uDJqvHYNMFeCcTy2TtBuTBGxM1HC3xFK64GrcbbHf",
  "key28": "ARQwEFZKWtGYWitwqTdb21hand1sk7naWyTqCXxmhfBWCBfSLafLciojsYanzmhsCTSqUsy8ue7h8wiXwjLsxSr"
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

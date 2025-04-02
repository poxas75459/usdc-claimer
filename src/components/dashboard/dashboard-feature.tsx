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
    "2v3zUtFepZ9fL6PQt61GNCJWVvW3QZVgY9odUrB8bMMm1uahrXKDJB11eqfoH5xqRdbbTF7kJg75e3SGfbxmwh39"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Jw9TdGp5Pfjz5dgEMYb1LJxVST8oij5iwMsAyUyxgvJhSo5mcgSmsF5KnxpKpeav49TRBvZD6HVZBcZbGvECvcX",
  "key1": "4HUtmBcQZcm2xAB2Crz5BdgPv8QBzJBqASSwBgJNA1ZxAe9NnPbGsq1xpZs5wnPsQ93XpCbt2oa5ev7j34ezLwxh",
  "key2": "57pHpFeKhTG2GY4gmob8nxSy4ScL9bbw78dkfsmJcehZhRyxcJLndwXRGmXkcGvoMLcSqrhWEBf1Z8n48ho4V8ZT",
  "key3": "2UMKAKX3rzqBWGvriB61M1VpSno56pXxCBeHbTYyVYuCAZ5jxK8PehdLFtNGAoite5LGryacXzHdidMXmSrHapyX",
  "key4": "63Md2GPR888tkpMTzb76PDvDFjVjQKWwwwYYCTQeR8K7KwwGkA5j2iregCoxiV2Uzr2RsP5KhBroq83xQvYtggky",
  "key5": "4S5Wq3ix8PBZSyMEeXcrbrKRtBQWtEEsN9VZpYxFHa3WkKDyRpw7ywX212tRjtjcNKcKAWc2d3RFaGgxGW6oTrCK",
  "key6": "uU1PdA1LDZRu7oPhVW6h4ygMKg5SYFKtqCM4eYgcjopE9n8jah7Fx2zLUWrrmkbqChRZt4j5sKZqLZygC4HU7tx",
  "key7": "X5W2nxA7ctgHyCjaaLDBX2E6ocJDCZi9457ycyUEQ4QhbwNdBua7oKw8p4woUSrcs1Yh1YJvvyTwYKaGB2ZynSU",
  "key8": "2QUWzK5Es3mEac8soqWLnm11Ywtt4fnCREKkGSso4DDxFKwfTAPz5q3MMTDnSpLa1VktPyr2zMDJdCjH34tx7ba2",
  "key9": "6xqA4H9ZtPH4USatqkFMD4dbc6dWeKbDY3PKKynwjSU5gf1QF2bnoCuxRRpVP1nVPY7tchHM6Qjj7RETCDsHybR",
  "key10": "5RGxNDDWVgtHT9Y2dqdQ1m4KzUPwirx98wCYHSHQoNBPKWC6QeoCr3CLfcJ7bGZ56451S9BWhba87TRn5yPfto9x",
  "key11": "4gcrYkgjpX2Ms5SNhRwHmcr2Gr56hVzjLJ4WgZmrqcmJ7CSMqswLnPkCHwSQEfvR2HhYK7BeGtkWwap5TnaWszqZ",
  "key12": "62w7QTU8aTxLhvYb1nutsAPsY75gX3decHYEnVHr678BePWY14jAfQCHSNYSwWKMTft451pCREm54BrF6myJmasv",
  "key13": "2QM5TV2JWY8tk4m4rin1SyWoC944NNrbhQMRMsjjv13C5BuDhFmCYyKatkFW77SPVDRf33d6ANFFaD5WJxEDyBE7",
  "key14": "3h6fBkiYwmBrD1F8hUN49LpbFnuD9JpZATqAAWo5sPUjtp6PHKehLNS7txVnxsj6k8LtsouFD4fRNA8Vz94pTsDB",
  "key15": "vh27RAU7FefuqsKUmg6DXd1fV278ytRrLev6emriDDY7cEStE5sgiiFaNRtKwtGFXFTh59ehAHWXf6HGfUSn2Tr",
  "key16": "3n6yK8Dm2dsfdTyYxGsxQtu2mhAeubHJaejPAyPp3xU6quVFrJF1cqD5Uufwhh2tMVkYjYBSY8jyouXm54ywdji9",
  "key17": "5UmEErp4xvkpqyKJxah4cQatbzVXac95wE8F8MgCrnbaUufghUnGxdBPJ3JaD1c2nMSk9s77SJ3SjUuXcKJyseEc",
  "key18": "3SuE54EvALg9dPkgz12W8dDyiWU9Ny5E42Yo6GHuojoE77zdwyVKUThFszg4ot1ikrkHhc16VnQfuRhQP7tupor6",
  "key19": "2fJpUhSbAAr6JjakeqxrD5cUP5NQh83EFZYBxJtRBHZdKvfcd2ZCBhiGFxput8kUbVEJzcuLTPyY5o2RRkXhdzqZ",
  "key20": "3rdi2UKMH8aP5YbDpXaZCWH9Hsw6WXC7edg3WLNQUbikfQdgBysicP77Q7Vd7btRi4LBj1CPo5vXQ6XF3D6yHxMG",
  "key21": "n3eAQgwCsQfawgaUevbaPxELo3DrmPY4sQemCFQKm6mo3CWjGEu42YYaQFovDEHbXm8L7YUMKPXXE4THfDn5cwp",
  "key22": "4Dh5QiJyq2cDLj3TBYhuEm5AASH1t1GhE4G74yMQmWnh689Vi1oE2w653xw6eWZaHKLya5spCjk4ikfy3cU3YpWS",
  "key23": "4dUwkL1rzACD4tjw5GvUda53ePMW73p8AejCM6vqJC3HR7YD8FiBH4pucZsH8TvPGQ1VvNFsbWRyPy3ymP17zX6b",
  "key24": "6664tuE4egeWi1nVCRjYzNZG9EbuhANqaMkBfxZDjVPU4591JnL9AK8ty1kHDtqyW4NCSrx7RdyS81kRiMmk52e5",
  "key25": "7Qar3pX1F6DVBc71Rpc8fxnau4KFXsqUi7Md3qJYiTMGXpQ4cXNJ5Ht8byaZY8PPN2ca4w4e8ori7EwGaiZeTsN",
  "key26": "52H2U1m1udjFcDGbpWnv8qVg2ErhuPNNdBcGD1kxtqCiwNLoUyXW43yCmpywL7bs3wkaRbkjaqUmZ7XSpMwsdkhE",
  "key27": "3kp68kmbqNNJw7EuH1DhRLbMfz3A58MfMFmL2xPViBmUipVTiURgJa4igHoZY4Qt4N556A5qRNY6V4Qy56j9zq8E",
  "key28": "4FJyWFHPghrRv8J1WWVoQ4zqd9D6Q2NsfxrS3bZafxpEDqsuiKZDi78kdq89LHSxXt5HpauDSL4D74LEXYZjX4QW",
  "key29": "1vib8N7so8DwN3bNQ9ikAStYxyPE1neqn5Se9cWxWMhpmLFgxFDxnLebnbFHbZyctPDUvBTzGwXUMH8SKguy1Q8",
  "key30": "DRkdbfuoUTevJcr282TqyrZSazXRLzom3LVGJd5nsPLnVN7jdWq9VSzwkCC3dcBYJJWKHqbCf6TxAcUgo3iSM7o",
  "key31": "465pPYPn6KLDevkE8feQ8Re69iaky6EETNPMAzSgMvNSzVYVtvSp7Hc7i4FaBHe44f995veifAY5ja3wGF2NNhDq",
  "key32": "44gYMmhFRKQ5wHWzHs2VvuNvvV3NWRZNfwT8xDJKXZENcLjJ1DiUoXM5FNtUJuyNxpSwnKALvGWLEHwCrFbDccjK",
  "key33": "3VdRsrNLVEnArzLBJZLZDVTkTQ2broCeGindPtSjKaimDqcDLRrsTTfay5SursdH7XVz76dXpahFng4WiFikA8AG",
  "key34": "3H3Pr2cbTbkaNRMPeaRiedshxak6prXtR8JYvQnfS4TmZyxoXotMbMgonucPCMsqqSiDjS9TiWMUUG9Fis1VAp8R",
  "key35": "4vszPg6utM94xczJ42aU4zPSu9f6M7KwtKHV8qf87eohxggoKy4KUMhRmiqZhSBVTTjrMvV4P5KwCwisSjvKZWMf",
  "key36": "557xJuqoTgNMmV7JrzPDLvHY39rJTfcLC3mHkm7q6W3LXU9n8p948vR8kWSr5P4EMo98zPjBUuYXUfuiki3mMzY3",
  "key37": "5wDnvKEEen5QU4rS6JsBm8yBhq6aYUMHvf7mz4BQxPj3gnheYdmm1LwyoGKGTH4bXmMJwbzqQuSeQoMxunr36jSg",
  "key38": "3DvbSPn4FaJEkAQn1yF25z2hN1y6qXpef25n4nXQkxvDKjdE19tfP6sFx35CueRd2odCDUKzmKWNCcbiQFvMsARx",
  "key39": "2CNYk7bgKwhjUG9oMDa9hXosRbxkRK8NJWyHkt3nLLsPUtX6SC7E8QaDRBaptYQV1v4RkxXkcwxcvt7Bx7Npa2TF",
  "key40": "2V8DNCPcUNqtKzjmLW7HkBNkc84EN4eDGzexXSj4chqZuQ3vonqCC5NFDDHvMFNaqZ7awXbKCCJLCJJc792mw7kX",
  "key41": "514mG1Acb4HcWnDMQ8m7cGZbobkwHkKC8sJNbMpibyXDv8NPWvnaK2DQQEiMKBJRgKc1oEnVPVotmPRDMcr8URKy",
  "key42": "5STKBJ5Zueo7cDG9W4kGwPNGyz4oZDEnmUu1MC2qK2ca6g5VEkLL8W7BmfJCSXC1BeETAA9MmMeauUho4CjTPi9G",
  "key43": "38E9KqHtHs69cJqDYvVmwnBg2cRBEMySMcCzwGWH4B758V1phxW427nohHzL9ocCL7civyCiyiimEh52cW37vnvq"
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

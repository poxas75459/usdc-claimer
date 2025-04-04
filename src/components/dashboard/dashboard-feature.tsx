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
    "2qQ7AcRYfZyHPEFzBtwMGHH7Ykpu1mr7W3R81Ye72kbciXvYDLXggp6VW4pXhpuPYrswL4GtWVaHrxX69gpDboPH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48YbMhjyEgM3eTj4PSTpZEFdWdsXsfrTnN34Koh6urtgbydEgnrjVY1gg2Jod29J2h5pdMAYxRAAdiLE1qNqgGVP",
  "key1": "Nq5raz5kLBCZWcqjpTh2ARocacpmVkZ6kZedqiTu9RwzEtVsu12sYGRZHSdD6ZXhbJZLUBxunXGfsyuWHef98Vg",
  "key2": "2TiERhLjW7m929Yk5CUUYsg7o96zNU4L7K8wppTAuYVpV78heGkuhx4kbgXSLqxBZRC6r1L7SPukfKCjWpgjaout",
  "key3": "34PNJ769CzrQhPDB1CAbJ9Mv5AYgWetid2pmz4ZETeAM3hPtjmmVEXJRBUqEb3AVeRzZXNXVUK24Gec99SdF2mat",
  "key4": "5ZTfFqWy1SrFvJsjFmfGSu3RaggH22twv5q2T1ertpu22JdX742Dgqeocff8XrRKUAWQWnntVhAiSncvR3w6UqxP",
  "key5": "2ge1oxK129Bn2Me3xLZRQ3v1qAQ62VSQ8GkBminTotFKkbYwS61L3WY48QRpUZbgwMKhxozzAmeYdwW1GDK5D4zB",
  "key6": "3snkieYDKTAW88vaPWxyf6UANoWWCsu1kT4LjEGvLyc9Gffxhj3S8rbLg289VouYc63UJ8iCYFKpPkPg1ETPbKqm",
  "key7": "4nsmMJmo1fqszJPUfq1TxXWFdHVW4ctjd6Bd5bCaKwnXRCGh8Enn7U68cFZPV84jiGXdZ7q4iEKuyvghG39wypKh",
  "key8": "2LAdwSVJv4ErKoFhPt7yNanXBHTYWBzmaA1Nsu32yuo7tvz9nAtcpMsGHJ5zkoykFDuEe6okCgGcfpFTbrxe7EqN",
  "key9": "dVLdvB2JFEomBkeuFyzTDyBTHhoi31fecQmoYMPFaNBhBouVqes5zF4Evzfuoumi36Sy4aLNqfL3Zne2Z35hkfS",
  "key10": "5Hmk1ZVQLRDuoLfur1FFpNA4cWbTDEciJ4qGb5udznFCwBXeaLr39TqnPpczuTbvMT68YSGmAVtzMwgWMZVKSrGy",
  "key11": "4eDVeQ8dGGuDMtshmuHZEXkCksjFRVwRytLTNkbJqB3aGqov9QrEnRgPBdvb6YKjmBQ2tnJ6v4eLMjLRsuB5nuri",
  "key12": "5kFEYMWKs4iJuojqAW6pELyGJbjTpMDyeLpBRChrvEkHBNnqrb6SwmzdPpqY9NeS1a2RxhYbZ9ous3HZErfqDqfe",
  "key13": "3o35AVrJsDiWuvHWxetuzQvvm6m3gbzqsZgXboeBtQPymE9TAYxr6NFRSQBvLZRdgqTzPqaJTCoeVnax9PHGVnWk",
  "key14": "SX3yU9raVwiidSpHCxaEcVNp9xHDZ5F33m9omiFrp9wcmVcLW2gDsNHLNnh53vsWAoP3wqscxanPDmHcdsswVpu",
  "key15": "aqeNixGxkF2RviasztZVC6R7EKUFiybdWXr5QdrDvy9MQFPYV2CvGVvQFuoJP543AecR78pfyePbLz2drjQxbjZ",
  "key16": "3mr1n5ybK2PDU3xjNGUpdz9KAGdDnCrwvMwgGDjGhW3De7DhUpdJQ2GucHfBwDWYmCaoW3v2pykUt6gU69ivNz2m",
  "key17": "4gB4esCncukqwcNzJhYRTxEtTcQQ1NV516xzwGFiAb9DvM3gj9L79YLHCNroRvNtYFq5qLdL453pu82dRAVQu2hb",
  "key18": "2Z8632sSZSKVuiGvDBpeYYzzQj7d41wcRRgfAAgWCZPqrZLnFUwSuxhUNLhgGdPUFDmiLNuYKNtUk2X65fm12hG8",
  "key19": "2Cs5w5h9X1xZ9mbqR7E2VXCeotDbBxMWcp1qyzqu4cPo1bunveBGwm9Sb72pSbUhEzGcyBmNHNYksWCFRu7D7A9j",
  "key20": "5jud4EhA7n7ktArGDtAWTqR6UJBeYbb1R8gi82q2MmXVchvnw3gFjr7NfDGt4DFt5U9cGPeMMwvm4Di3r1CwNdz6",
  "key21": "4jdCU5GD7rWVkZ7oyVE8w6YN6MgN72SA8LyVy66gAQrcDst1YxR5cSbdvJi5a1jSzMNX8J2JoreR9Zz4EC9Mu3Pb",
  "key22": "3QbcfhTWmgN37cQnFnicSUneqEKJuPoBNGFZQV7JmYqB14qEm5UfgxMDhDeVNX9A9MyPqK2DK6AmnLRwwzACjb2s",
  "key23": "2wtHZRHnbawsyduL7jmU3THA5uhHMy1GP5f3igJmDsoUWzbkwB7TWPznP57zXuNYnu25veAcmXBLv2M3E2TRwSjQ",
  "key24": "23wUXKURHe1JAvq3ZUGT7JNXXjw1KuDCsvQPDFGtqcgMNCoQaZkbfsHkXWTYtrit2TAui1QuY3KFKJGhjoBMc5rQ",
  "key25": "3F5kEm9M5SBJR8PhrweWNXpTcqevEnL1Co6wXoVem96DjbivdFxndbrcejuSnwUXjnaCDZbkmLE6mcawCLVZ8Kkt",
  "key26": "3c12eSk7jM32LFifby9o6cbszB4cXqV5XGDsvEK6po5xM6DmTPci7uNPhAZtuS5D8oGMUmW3GdWTPsskuTHTgMxw",
  "key27": "5pvQRkEbadbam8egN325UMkuq6DNAhPaoPxYBT89pDPd9JancX15RPhifzVk6yKN8BvM5AyrVYzQQcs3pF7qWJQk",
  "key28": "4NmbtCGyMhVH3wxcvnPkePzZbjyv1H7WW6MzWKF4SfVh2Gmo73u2QRMBdhgZstAgkrNRxHfpmDETKPUVsxnPoJq9",
  "key29": "4DSSFFV6GCRBvdgnoAiT1zWWszbLKQX1qiVorFYRXAbBfWFJv9qNGFQvj3XVUqyng3iHixpSDeThv7odH7B93QN",
  "key30": "gLkn55YPk298PZXpnDsF4k2d8Hp9G4VdxQM6DxgDig14FrmaNgaCDdeEDEwmEHcV3FRR6dtkdNJC2ESnYrEQcK3",
  "key31": "2hkTJLg1bPEhfdupDqWmkb8tGuvK7WnLtPFgKyjqeqQfB8wS9JQy5DfWvqBNCfnbQy2SrWtyr92cix7M6jGRocia",
  "key32": "2esrzxkt5Q9Z9nJS5RZhbMd2Sr34Kr5EWB1SwwNbkZfWvhn2mq53doYzfbrcCYQf1AXtbggWiDegdKjJ6w9an2fZ",
  "key33": "QuAbDqSeUk8RyKnNQ9gw3VLrPeJpVkL5chgJ7mTZSsekKb5TbSHjYWMDyDTf4vw3aRckkBfcS4Q5eKqRmBVxUfu",
  "key34": "2BxU6JG9xSSBNorSsjiDqao9fDBMHwnmt9r8ARSFyX75UebwK7MAZVNhmRdz2tK3i9o3E51EuESsuGFLH9M2jC6i",
  "key35": "2SwotDib5FpQue7jtwXdLoPM5gnPEMNhj8gYcvX6ymP4meZVYJJj6gYiEcSh1NqQUVSZmPy1SATFbV8BKKZpz8GN",
  "key36": "5B8MwArRr4CTH6zRxcEYY6YCnnufawq29ExNpVisuCU1DcHXiCdvUCRkj4qUnUkcoELSDseGKWaKFJar45PStYJo",
  "key37": "2N7S3ADN39UNEeog4grwA7Bnoq7xzxT25UZZh1w3329NRN9XzernzYaZC3uWMAZuhctMZCueRp863q8M26vDM3sN",
  "key38": "5Tgnz2pwrXnAK91YbitNrVpGT9giN8DwuiMdvo6UyjFCJZcUyUnirQdUbAMfLH2rGit8YMBVJSaAPGDj3RuJwFi3",
  "key39": "2H9bTqnRpLPox1Qbon5faLBLSzfZa6mmGeFHqvme7ikzCtvCet9AdwG3dENJfQRkcnohQrJuhGzLZSKEcE14QTgT",
  "key40": "kdJozPRKpxs9zCuFTT8KpPdf5dZJwKDXTsmvN3PdnLDccGY2XxrSrZitLtEJiYSehfHMCJ2Vj4VA1k3HnEAcBNH",
  "key41": "44jRWc4CGaQnBNRvtKbYV2Tdu1yxMGccpa5VQwoKYVaipod5BiTQeKu6aNfecy2mjnB2rLRN9VpzHTLWa8BnfXRt",
  "key42": "4vCPsSh9QHTfS6L5zkNJcMSRRco5NZUjhHuBhniCMYirsiHWWMZwDa2RZZSV2F1rXwfHmvNJHXGdGVBXPLJ88wVR",
  "key43": "2FZ4Xwh7pvBRq6j865gRk1uNDGZW6Mt5kdQhrVJKHQynjLa47iAecHEvGDEAXSESP2Np4p2M9oPBaCuGpEJgWKGf"
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

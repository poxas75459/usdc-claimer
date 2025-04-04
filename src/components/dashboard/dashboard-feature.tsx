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
    "3uZEjtygfuXoLVb7p7BP3AK3KdDkAmS9g5R1tcSAk7gcv1obSpbv6DGnfoCiPTjk1Nqx78BA6f87tGh9yA2gsvA3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38viYgRmZbv7Kb7bMkf5uc48MvXWrsesT7neWLZw1cMHNSFTACsQHACQmRQjMQvsCKad2sWKCzgqAYj7pTFjZXot",
  "key1": "3qggA5xW4ZYJFtN5t1nhMPj7YeXUe59TmY4h2VtPc4Dy6BpaayrApGnRJfbnzeaLWsGuD4jbF9Dosnz4XVuNFczn",
  "key2": "4CbjHi1ciwso5SCmv8WAmb1Ze4QdMKgftC2mKHW4yhbsyGSkLHfYFesnZCuaodUZfdnhWNceqYuEVG2cxMDAVzqB",
  "key3": "2waGarXmW15w4Y3PdxAXr7TMpTTDJhPE9h7RNBWRuwxjbcwSkSfL3Bgp8uMNCGkGAnVokdfVr3jUvSZ96jE4drUh",
  "key4": "5533ihE77M7DTm225oFRw2dQUKQRk1A2tZrLbpPBUTvensAqzvuwPomoLWTYHkTFkJsCCFK6UrZSCLjNkRnicVc",
  "key5": "1mE8orr5efjYbwX92JQ7mUXbEre9roaHJqcgmxvnHca7wFJZwSQXdje5KXa28vhbhAXURQt5uAyZEoMbC8a9cEc",
  "key6": "4F1rVv8zzTtrYd8KQAXNNmm22rQbxaF1yy1n1RzVLQi4W6aYgjz4sQtU1b7nuJvvFfRfkojEB4VyRmMKTKcjW3oo",
  "key7": "48WGutW76uX3yzeR2ukCHQZp8mS6F3akNRTPFJoS5v8KmFpffo9i8ogk9dZSryW6gMeSEJG5VwSMBt1sgwoaujNM",
  "key8": "nndkDMmVTbyRU4fJXTn16jAkGR3Lsgg31DQokfbC9w4KZSrRiYAu83WTKVj3Gs5aGouD1iwCxaBHw9Atjg6y9vD",
  "key9": "4iv7WQeuV5oCQ9DcKExKXWepZP29XvyjVMB1deYX17xpWzpDWb31cpdo6xEc64b8TJhkQSkXLEFTdj3nEuf8K8vs",
  "key10": "4pBFw7vLNsZ2P8eDofbH94HgDdKrSfhr4Jog54a7P6KumAm9kEGLJ7FgfFKBzt8zfcewzhjyEtTaxkSFrxXKGvqp",
  "key11": "2vEnnmur7LvrGNWv3xp8QqSr8j67gyYqABRSBzXUqzx3joXqJYPfWBE7vMxWNFHMUkUfPfUozJn8qq1StmEf8E4g",
  "key12": "2NUsAKuXVfeSnxummWZmhssfiBy51BZ5pwDaL8PvoX6yJ4ffRsfaqmtiHDUHegDDhnTuvSv7bNZwxouLnjAjY1kL",
  "key13": "2eYNzHDcuatf9um8x91EUtSGzv5ea9EyyX8xcSWWMKycFkL3tTJS5DmSUUHJoWdY2CSL7LhRECDFjfn6Ycax7KRU",
  "key14": "51HkmJvdWscrkzJsqGeAfeYwekYPHWNVnUYXW1q29MT7dPpQwtdwccntLy4BQsrtwxUrTzDcz4YMohSxrs9KD3c5",
  "key15": "59SVDNet3BiErYBwmTNPyifBF8dJbzxsc9rkoYWTE4EeQsdWTPU72yJb1LJ478aD67vaoNrPpUGh38bhrbtanby7",
  "key16": "9pzQxRigsYsRJywMojwdEAPV2tNMuzc8iuTLEvnCzMN19w5CumG6tRmg3G8qffdAkn86Cb2PNEMi1KXGv8RckCt",
  "key17": "3DLtNUTyd9BnfDKTB2TSYdFwNhdgADNAhKdpdhhkTiTcTN5yWxcijaK1WMYNhcXLumdfDtXfuRjfNefmxngmvZFJ",
  "key18": "5ENtD1Lr1E5EBrkFXnWCdRj5FivWHD5WM2Za3288KrTqtko8M1kY4sPgQ1AkV2hUJ8ny2pQcXxnGgPBhCEnwkv9o",
  "key19": "51aEoq1tANPB9LmwFp5xnVtFdQdHGSsjwg8B5vjtzjko2oQxxsVQA5stexeFeXxZQ5jU73EpgLJEzezteiZNiyyC",
  "key20": "3RrH8ZYPoyU6vJP6bA5x1CWM1zpUjCWdg52naC7j2AAJx96mTmBiPtCksNAf8cxQN5AzNUehzHFLnddeHSxasBua",
  "key21": "4QiVLz1U92Ln74gME4XTQT4d1hiFzotusrJmGeMGxPif94ABtWhMTdkYTL96aj2J1ehw3MtCHEdN1zbAVEUefcdJ",
  "key22": "5KHQyfhg2iPEV9EUDakhFaCzUkMABdyLzKFvEeZ1RUYPoyNAd7adEPZNX32QfyC6Yq47pAsBZXuvA1vfrnboNaoE",
  "key23": "3vMGGRPssYkHw8yLjQqvRFFQvZWrSBpvkNas2xg2T9aAiUwryR2y6Jbcxx1oEn4S8buM7Tu9GFXRjxSRoPadypnG",
  "key24": "2VADzvwe3ex7D3ubdhcVzGS6MjXthEzJD2yhAAFw3atNKvr3XrNcxvXxxCwkZR5jhjNiTjyXPpapXLJ1quxGQFR7",
  "key25": "LFKRgyK7VoF66QvWdt57L9Vm3K8C97JkhAoJRhzgEbuzcDFFGa2Ujx7DjkbWtHp1JUkG2tcurwpSTqLGVcd213e",
  "key26": "4KWLgGSMKbWdnrn42TVitSmV98VNxgrzs2PX8gTrimTaVnChfTAT1NiQK1eShQdVEai1B7bpsMJPzUKepv82w1Ei",
  "key27": "dGkx8zggcPFGqKqEJewG7r1N7heGvDdANi3dH66AWbZfYtfuuGsASPF5E3PWCHcdok3SYoQMZeTK4yNKzSQUGzn",
  "key28": "2iu9uUFWmBuUFYU6AHZ1oZ15WBsRQhBKYTynzNNyQPYafmP6bDsZkck1kV8JDsNNJ1AN5oQETyUbPNxoqi6YgsJh",
  "key29": "5sykg1RhqUuQjdiWPstfcQp54Eu7Souj7yWGNnwFFCfzJmo9W3ikr5Hez8TuFzDJ9Y4eWTy2kgW5aS7bPaykDbKN",
  "key30": "2smceBirDvofWBcXED4HruoRg81wvxYm9seo4soBMtaeAGSAWnY1cdSg8KyZGsJojNXE6etsQnAbsk685b8ADJde",
  "key31": "G5Lbj7pqkfqPqeDQgt9VL7P3y5qBtb3CVT19dkL6mfTVeyp4ARDWr2WYuKomNG3S1DsfKNSGXhjZghnE743v2K7",
  "key32": "33XsMTM4c2hMo3unoBE2Me62dM84hFfsTqoDonGhUx5ZhUc6D38BCpG8n6BBif9QR7eH68ny6CgESn4JxyRVQpzg",
  "key33": "2RXjZJAyzWMpiTjdSK8jK95HoMRTku4bDNmDfRthcG7jbdHowES5eexF3jndJNRf5VehadfAjjEg336KxmVongYR",
  "key34": "4JAG6oMcAWdCjrZPx55jCfG3TWVTQNS1TnB5yGdoFzfzMZCmNNobKzJr3JFg1X69A6ffQau662b9K6oeKTZejLgz",
  "key35": "4Y4sDjEJ1qNc1TAxHaWCC7SPyoWjkdKSeUp2M77gDdmDB8gEbTVcRNeGZm1VXxY5Gv6xd3UDGb91CJGDRSjNny3i",
  "key36": "48Qs4kx9wDat1g54CPttgpeqpo2Dc8zrRG3QGyi6xbzx8E4VMicPEMw1GDfHHcHkdZWmuKMa1hyFxknWEXfTppWL",
  "key37": "5hE1b6eJr7zciNzuLFwkwbd9gfxzaW9QWDwpNiXCwEZ3MCu2JfxXdGDD39pdmSELGCRGirnWuNsPBWr7KopUg46E",
  "key38": "4BVNLdD5izhyAPneKXBWMTx1iCMgLoRn2a2YUmzUscuWJYdSzrPbb8mYZweeRbbELz5g7CfeRTjbBsgBFVexi1it",
  "key39": "4L1xEAkkFqSGYVMBsdQSHXvh8hzvrRUhtoW16oiEoK4WsHPGehDKZsGNdHbCrAtGQqfn3i2rp9xhJvuWZPPhzj1m",
  "key40": "zvJdqgD3SUBbZdPogp3Z2CfVg6WrhQTt7HrpgmqWmaT2jxR7LXZUaLQDGYXgLyBAuzsRHAxAooVLWWm4cFyBFUW"
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

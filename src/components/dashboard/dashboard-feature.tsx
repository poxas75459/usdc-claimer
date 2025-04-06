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
    "3Q6NsdVZ7ticMV56mUm9Zv3WHtfgDz7ddM6TrnLNmc9N1EPsQmX3CEYB56LD3H2WT8npT5yq4k4QfpgcS7FdgjZq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XRFMZqBQ1jW58eXcCAQ3kZ3dwa5bdoeEEXMa2odJjWmNH4JgkShsbeb4TEEHjLCpXPDhGWN7FuYNVkAzn3u7Meq",
  "key1": "492iJ4MqwuDntdN7PjwH6C9j5n1J7siBq68MfvteciScF1zWDRidrhCKD1su9LvUmTCoV9MRiSr6dcTmyEmyjcZ6",
  "key2": "2AT9zKwE2V57HYWjKYRU81KXma52Vx9Kk6p5kHKXrR4Jf8yhVD3mHQmB7q1xNAHA7kCXfcD43txGBTZCd7Sb1gzn",
  "key3": "21ouxMHGR6GTuPxGvkkJnVmrDKmmTskT15R97BrnQv6qNoUuNVv53dWdQEqFhf4eFJ9t1MK34mLoBc4iAMZS4PTi",
  "key4": "y5DYiGYpq3ktecaLQY55adfWMp1BxpndTm2bCSCaa3EXnCjSnnbjBmSSg4x8piwawLjvMGBx9LY9wFx6dRYveoT",
  "key5": "2BUhmXsLzXHZzfCQs3KpsGMhiR2mTVW3yAfWAZMNBwuLFDF7XaXVznDg5NzzLXWrMpNsE9GE1h3yBbsP7iEmzwcA",
  "key6": "3QcDaAtQN1P5FJ6upVjss933Npxad1pTme7DH9ifYDEZhTS3oPeyQpqf3vNVtd9DvGfGY1AL4sn7gZTVGZ2Qey22",
  "key7": "26jd9LtTwwVzQg5y1Vf4XmzAEzFVRvf6gbPpo1LUz9j37N9Jn2Lq2N4CsBN1h5qy2LCzx6s7M5btRyd1g7qYJ2Nw",
  "key8": "2zGu9qxP9ktewF7SXuCRbY5iFQuR2way7kGE3ENvGCD54SzBp7NbQ1sncxXMHyKaddhFg4GR3sVYP7krYN9FezLA",
  "key9": "8q6mx4VKCPzLZwPQAx1Y24LLXZmBVAagoML8Yinsmb6UwNzes8ZV9SmHapbnFgL2ykwm6LSAoDcfK3RnNWz53KB",
  "key10": "5NaGgQhn8YFWxWQagxPaBEoSkiag35ryH9sw1ZMh55LiC67LAreFhHuV7D9skafFd8FkTvMc3on9ngocrFvdvywZ",
  "key11": "5D1udcEo28Wmu1qSJZEo6CUvFUHGj72NYTr6DXREz8dn3nCeKDtrXp3PXyo2ibLeJb6h4dwRcim3arwT4uSPqsig",
  "key12": "5oM5uuqAZUF2qyyyP3mSE3kG7QJERNtgBhxxHUQtjxMYDWL8Lvm6ZZTWdQqed1RbnaimJZsDjDvFb8Cs6ScQCHsJ",
  "key13": "31WywD4bUyhcuwi5mB8Xk4FE6kBM59yuEhxG3EFDVHjLHu84PM1mdUFgwgNHv7ctvkQmgNXj5NNYWBhN9kWv2dtV",
  "key14": "5JZSmz92LpzKKVtX8N8DT5RtL9iQR1jbomB2tBDTqHfgTQ2FfvfL4rnFem7SKnmcX7rQCNkBScgytvnfmxUw8APV",
  "key15": "4m3QsyTuZFMf5vCEpUe2pZGa7xNMqWST79SzLXPAtZfckMEKrU8hVL62nL1bLNGGzXUfVbPgG9wnWjuNL2hs99vB",
  "key16": "2sB6Gf5SpfQeXUspkes1jcVuadznxRFSHZB6Qmsw4g8u3zgXSADTSo1Bgbf5PXNKPXega3XahUP5zSkGafioPrni",
  "key17": "YeXBoZn99i7dcTkoDpEbiQY7Sx9C8VLBQEQeSjrwLSHV1rGbkZovbKnnU8bjNt1GEvWWWYvoeUkYhUer2KKMt2N",
  "key18": "3TNpULs2noQEDKEPUyKGV1Qcy3HqV2Z6955RTX53WjhndgajretrNLRorHcpazk9T2zumEdkjbfpnTa5dNmrHeQp",
  "key19": "2GMbzZPTWcscxYRPz2m8Qg4jevRV2ZqQK256fezkSrU9N3zSzqreo4ZdLW5tfbaGJcSqdBtBm1z72nAxRhx7V5Gr",
  "key20": "5CJD8ydMKi9zcHgV4QS1oUDaDCsLnpLLfPTpyGXQ3TMTk3sHEsonNGvaBn75hiaQAECkzuKLWEEYZ7MDxNr5S8WA",
  "key21": "5bK8xNAHoFyUr7iZxYMYFfZ3MprhPYWjEC4im6hgBnA2JmDZFA8ReeiH7DEVENxyTfeY8ZgVcvhzkkdwn9tCNDB3",
  "key22": "2hdujoBxT3GWXjGU9mXuBopZZeks73NUVd38G2tDvcVdxWKErp2G61N9uaKfPDSsVhjNxznpMM28XG8uJ9G19uro",
  "key23": "2BiFQzoMDo7hbjySc7vTp8DrkYgULtb8bjCKTe4rCJmgD8sJMihBtawCEexBwUMxMxiRi6cTvn6iErMRCkHaNB7r",
  "key24": "2SdWfe3gfqF9FWdL2CaNg3cQajVs3ifjePpSb32jwjmLm4ZnG11bXENA7WYbM3osjeSa5ow9827MnDJnK3tooMLQ",
  "key25": "4qS9YhnLBb9TJWZoaFYW7rvcGm4zg7AzxosioJZ2FAjLACQgrM3Av8FMLuYofPbuysmWMQ2EPqDa2JkwzSzERJPW",
  "key26": "4wTGpQCEub9ZQei1j13kCSKsrTqyFvw873XtCMBN893gnnhLg2jWNizrh2mY1gq282DQ2fWXD58WLWVHbCGSic6S",
  "key27": "2x8uvqR3cs4UkaqHGuMn8MdC6gpesDFHeTymmnjAgzMdRWCuYErPT6ifrkoZYLmivEDjaeTGX4LiRKcio5s7YAY8",
  "key28": "2dNJEe1Yap2J39UgKmK79rYK3k4bvsKxXTTSsX3FoAwkXBooEMJxoKwrH9MR6f9JrMaAVB57mPSzKjJ3sycs59uR",
  "key29": "5KXgmQpAFTbmJWaZx4fW6MPATXUPXHYiQzr3WWr3z1vDaY7yFBNVzQdb9TnPw88NXVSiQLQtn3febh65UGMU8YWL",
  "key30": "52NVoaZ12EcLpMREdM95HuBsj9cePsZjmLXGXifDNs1xbBHY1nP7toqb6uW4zLaR9ZtoZLqudAiRevBzWaEhLK5e",
  "key31": "28ojMat8EFW9RsghJK2ZKghJrCLHYt67PY33Gfw23wr2LMNjAbHms5WjYyRAFnjauE2XrzgtWujXPv9F5fKMw5Be",
  "key32": "4efmyk8K6QSnwWDMUwGU92S3FwLkKxzyS2Dma9i9rk4kUqZAV3Mk3h3LdP3LckqL83iKpXiESJAjQrRbjFv8AiaC",
  "key33": "5aweSm9iGhcjRwfsPZFsXGc2Avnt5ufeit9nx3F2fbm8ra4mnDW8xQhzr675PMMFUAFehLnfYzEB9mDFy1kWyi18",
  "key34": "4U2QeWJiH8tP89ihGQ1NbkR9tfL8iNT5ruZxy2WiGtPuLrS3MmJM3zkaTSCaBihGSw4hJpRXr3CBfxYxb4JFzYaq",
  "key35": "P1tHH7SaMxUK44UziYvY1NfQ2tCy24wBcr2UadR3mf44XfyFkrmEojtaEThbgyzNLmcKuXEyMEJ34t8NVecv4GK",
  "key36": "5QKQcXHNbCERosWdv63SVSjJ88adFxHaD18EMowzi6vvgFxzx7UYR7pbjBoGKM8rUptb4SUKCqGdfGbEfGumT8nv",
  "key37": "4LVkFvF5GvDfWqUhZxc4VsSWuDQppUNHADJzEH3SEAQFWyxzRQnmZFqtFMrr2nSwwXMfyi1t1HFsrfvsXZumLaaH",
  "key38": "3NoYyDJWigATqGcSWoXD4S5baAuQmeYNp2mQz7fou7nWdrAJCjzg1ULFLWvRLvjwKxhT7CgSrQd7Uvxn7oP5y1o2",
  "key39": "2YNzW85wJVy3J4aEyGkcenqiVzy8w3Q871y7Cx8a9MADo4MvMDxP6rt3SgCTyvDvCtzGAt4sttZqEeoEravXXv2f",
  "key40": "5p2enAVLS5YQmSnKVB4iviDtgzWn8ofuoatccwAbhK89536E2aq6S6erLxHS6SEYp2iAzRmXrCKTZu7iLmfBUCyF"
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

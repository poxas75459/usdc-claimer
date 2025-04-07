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
    "3G9umA5cy3kskwupEVdaRXbGQ5deWMSyGnjbnYhDTkTwd3B5FUDn4eyLMm7rrQT6oTkPMnu83ao7hhWtQuQEnv54"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65AoUK5gWtUy8JjBYSUTgwwhLrrTrqQRgXxBowq1smvp7GcUp7gxkWmtheJNktja6XsM4sHPiwgs8tHTLfXJt76h",
  "key1": "2mwdWawnfKtmW8GYKfhc1qubwptLuwC3aexp9BCoFVdaBbbAykKavWbgCcwv5VwQuSzHRDvgAFntd7dpS9LDAArn",
  "key2": "5fPVhAVy1P58NkjLQzVhbDH4gUbLVm6cxDmHi4iriynmnVX3yPMSh2GnQKwx1keEo8ViSFSxbM8Qv8wPXhmHoz47",
  "key3": "2JC7xtuWDPQwtHsCmvGQtFYnkyKzD9CZ3evQ9Hx9iD7ki5JMMnTFzN17pQGVqX2V5r1jZWvZ15NBn5mEcu1PasCL",
  "key4": "4tKhJvguTri36592ckag525PHQpsnk4TajKhrSGg8YhKeSLk3w6xAPRQe1FJ4kkT6U9FNLWLaXD4QSNNVYHHvFn7",
  "key5": "4eAitUzheTJTg1FtgyTRrN9vuGyMZYGRj7zTpKj3eH4Ym4qBPxY4DgQyFtXsLXFqBeHrX6cpwn8BfpfH9hzF8KEg",
  "key6": "4q8cbBFwyG6swaUgnCUy8xJhe9XiF5qgbEKEByeU3QjamSDUsddrvLnN6YMCFidzaUVxFvqTE754BkFcBRQPx5GP",
  "key7": "5FkpdSxJmSVyxbzo5WXo8QLiu93xiVnqfj7qoLo9E7hWF7trTyXcGsPBQeys631FAjufG2n8Yy5JLrDf25zwaMtD",
  "key8": "2hu8pPdSBwir7ZcdRDwVUZ1Piisdu7SK9ZFsppa57h9Qx6FUtZjVmRp4msU6P26z9xoBoo4auZfeZv4UZXhk44Tc",
  "key9": "2BSV1XJmgGStnTGNLJsbLedSyUjf9AsbtdS7DVPbWa8n3bbb6Qu41P7hh3MmL9eP7S4JUzgRjCDcLbueJGkRZkjZ",
  "key10": "JRQgR9Ctpd3Y1VdU8VpoftZTDdAgsEGRRFFq7SSQBxN75wZpFC37vJGoEn2YWNnK1jLE1vsvK6LHTRVwmxDwH3M",
  "key11": "2xy7rpKzHyyXJVXMH4ZmfcDSr6FvyREWASFmFuoqum1eCghgRSQFT7VqZ6HHksRJn864kfwwqrpGWNw1xWC1h5pi",
  "key12": "mfWEJcXBH29YboxgZ5njZxGutsYKAemwUPnfpo75tah16rd2qH84UczvSWoGJAN41qp3MBxtFNxspTviC3m75Rz",
  "key13": "3x14G1boGeYqWKfYTBmQQqP7fArNTXrxHWP6zZ2E32exM8zM6kDeKcJVN4dmPrTKVztkfFFWfPku1HW6LaeF7N93",
  "key14": "2WjtPKzppW9A7HsCNKJyaZHwqDKt45kLMqNFS7fSJDisToeERxgZFrVziFzGRUkGBMmNRPkR8BJDswtV2bMqjTSu",
  "key15": "5pifXxQBNmrQ7mgdUAYATvkTTeBhZ6f1abro5WCkTbmedvMfih9qvkiYkVueoGyRhqqCRgzZipUydULTuT6GAXLx",
  "key16": "F6qefL7aPTj4tTCUhTDyw8EDKYgK3LoAaLsYUsXwVaZBBhQ6WVFwXCYkwcbPoWAzXVnPN3LPYALGRVYsjpZSsPk",
  "key17": "3dVQ7nqr7Q4aPSFiwNXm2o2BmU2uCZBppyLXb9NrcsowR8JMgAsFzBTdUkWTyNGXCvZgnqKGzArkDkfV7g93AxTZ",
  "key18": "3YLX4oEBSWdh9986i4ah3Fy6sMYB1qteQ7ZJnRKcRzx2Dp9cFapEH8F4KNQPNHDXUbjAqaLdNRm3p6PR4jtyxefN",
  "key19": "2oLXd3gwDzWJ5yy9TLQ3scrhyB74L9U5Q86yPS58pmt7igZaY1fsecnRSKULzjBFKPcY16bq94s1bKo8XouNHfHR",
  "key20": "497SKxUQuUTEXEhZR2dMLWypmiDcHc6LiDY4MJfT314A2AkMqfqhd3fjLYkwCdHzxsLdf1gFT6hzw1dv3URTt5U2",
  "key21": "3L9aoW4dTtKoDjmUns3KVyoAWC2KbVbjJcqKUJ9ejpY65CNe9gDpQmCCZLnW2ZKaXUFv8DxCDDJcceb8xPuGJyXK",
  "key22": "4p21yHr1prTjHSdibtgr6KzUuEuJ1vquzKC2HfDuoT5AtaX3bemmdcEMC4G3A5kRuuG6ePwwP4G2668cN6LZ71Sm",
  "key23": "3QfxSsBPwaGXLsV2KyRxR2meJNN3KGfHVoZFR8i7m7HgX63zcwvHuTsrU82u5uFyad63CUM7k4Svw2fC9QdMT4fL",
  "key24": "4AGTJT3D7HPKn9PYCEtfJ4axtCeL8VysuNYWdW1CNeHHtodvjgmMm19YizEWtz6b3HUbUtN1Wk3dfZBhBRpbWwbq",
  "key25": "Tbeihg1DaRLMcA2157hEkffNUCfjEGdWd8yTFiRmupvQgTCxgxbU6Jb4e3YD8jqej7wErSCzhvkM3nmkxsYG1wh",
  "key26": "5nhb61dBwMCP4aQL67fhXXJR8dv2vBrJ11ToKtpoUkTpQanzSpvbvQg3CoUQY2dBDjsmepDhpibzpw5H5j9sPXkh",
  "key27": "43XtuZDR1WwweaaUKNxwN814eNBfVgeLYduEyFcyWp2oads33Wn3z5iKWFSttT5Z3deL6k83fSbPQZNGSqcZCTdp",
  "key28": "vxHozJsKxAZnxY9KxXEaUkEjqAjYgaj83HfmJGWHd9m6X7nqsx3KgXbTwgy41Qsc2tawsfCCbmrx4swNJVizpuK",
  "key29": "7JdpQ86ogdvRJoaM34UJuA1tGwP9nhBdQXuC34qUNm83Q32Breeyh2yQzrXP9kXGZAu8eMQX9JQxN7waiHtv1bx",
  "key30": "2DchQftpG1wpGmFURNRDtfHzL91CJEtN9hLEzVCEHFvS1FpGAFAz385exrqq8jS3g77nSxVr5RWc9CwhK9s6NLvp",
  "key31": "5uqKtQm55jhE4ea5TAdtnJo1HtPaCwtjhJzvHbWQA86YrLSuECmUSAAjp79R7pvS9Xmt5Jo4XoV4C7dKvdR3g4ux",
  "key32": "3x74A4BZ4jfd4xEio9xSp2sdBJmpPbyCjKRKXy1yWSkVb58Q5HoNonnoVv6DtZA53PMGScWE7U4HKQYgy3GFophi",
  "key33": "4qwyVm7PGmarhE2apYH7uCrDK6CgEowSyx5HxfvfLFijU19CwhhN9tTqKruQuQhd4rqn3QbsK5HwfSBRf7dAwjfi",
  "key34": "65qxi7PshECKtTtfKyvo1CYnVFuAq3D5CiJFCTtcpXixzUwWUrmj9qF3noXxxPoJR7LLQYrWZMRtAoSLWmTsmuEf",
  "key35": "5N7aoWPbNhfaUHqU53UJKjnzA2JzTTc2y2yjtaKfzFqkhmqz4dGabXLswtGsBKaUomwH4pBPFVXg4yYH7kVVHxZi",
  "key36": "5bNuZNCTELLWpLVu3Ly4Vv6KEKoghkfyZrzZY7YLBuCtAFXVHt7PoXkLWQP7jmgVaAsj1dRBAFptmWkkgTrwJXFb",
  "key37": "6xxU4kxzWabU8QVapYwABfys2DHBYgN61TPW7nNuJF6sQaY6bnxbX7W6dYCtQUtRH8X8ZgFVSezhxSRKxi8NnBs",
  "key38": "3FG2vrGVBHW2aGKYFvPMi6cKUqveNV3veXnQED6PAAo6JCjuCcr3CsG4dzR3hCaioHHeBzarWV4YjNseRDAfLWQY",
  "key39": "3dfTLRsmYuXALeGKdrKsx5tDfPzRvpunDVJJatXghJvFJwRR3YHLVy6eLCBnnJeMdDKFTGewWPKH2qP1ZTbHWTnY",
  "key40": "4ffwP3KjwhkosgBJstv5nu99hxtj6Bad6NPPb7TkKx9GTXvVVWhSQoysoLWr2imtpGNFUNAa6EafpD14H8zrnjZ9"
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

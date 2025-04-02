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
    "XU7ka21z1EW3LSktcSQsPUVpf7xgEKb4Hj4qBzGwQb7NKikDWiA6RFsN6RBzkJDHfcY3hnB2e96YMDjkJB4wmA7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ptaVpx6mv85NjU7mmYd9Ytvn62wJwQpGhrMvbcWEjkjnckXUM375kzP2XLX4wMZ3QsvJrNBHRFGdWZmLdBtDq2m",
  "key1": "rLrbU43F19LRED1xsn3KigwP7uHhX9ja41DsYze3ruLUfiCcDk9TRjDqhMobcb4Nc1sT35N1oLoBVKpMBPucRtX",
  "key2": "3PaHT7aRifjPXHapsQmqEzt6AFtUDTcuJdgsoYnAtTwsB6FEfBbfaoV9szD8DNpQUWxMRzt7MFGGQ17W7Ee4WMMy",
  "key3": "54nstSJsaBRfgYvdM2T3H5Z5tT9FaE6P71m5jJEd9YZmFn6fx3TNQhFd5wy7mVFbJjRBEKSF7vcJvaLnB9xEiKdk",
  "key4": "3EASFzZsUgN7qdpwtJZbwmJi57k3QjCq25HT2poa1VsWDqSzxtchMjHg6ScC9RcHcNgWzHE1hApG4712M2szGDi1",
  "key5": "4tSvqCSAwMy7PNi2bocEYkUGNryGTcq8BGKf3aXRQ9v2PdrfwAeU474syLA8DAchgEzzC6g33xmZ8CnRy2DwjkMX",
  "key6": "3Yx5z6xmdxitGYSAHwfGxtYLzSU1ee4VZufG71D7uy4BugPdxnCX4n9VTUqno87CbuHJ5tjW2DCvgUrYg3eJmSia",
  "key7": "4g962APgEGt3J28GYEhyqyuC9Nry5xUeeAT1i3fewYSp6xoKJvmWeb9Wj5gzr4gvwhH1mve524Z4Rk6ceFSFRM96",
  "key8": "3fjaG8Q8Stc9QPetzw9f8ikLUKAAfH4r8fsdkj9WcrdWh56zznfaeXuzsrJxTMC5r6KX53NR5q1yA424QmWgFZ66",
  "key9": "5MoWqXBRdhSuLJ9VvBopGpxpmr5qnkRDmvgfLU1ewHjeXbQdpWepku1jGxptHwTDQjrzKRNDUMsVaYaMZHFxLpKN",
  "key10": "429AG2QaCyKsWfvfBopgXepCHWVF5UoT5QvP71d6B4LAmg2omg2kynMXh8L57eTEXzgUGHGZtb7ZERbmtgowLkF9",
  "key11": "21DmgRudjB4DciFcfN2mBvr8efrxufTgzhrgq96k7bHMBeQByPcJUmV6G7Ne9J97W8h8VXGhfq8RLPejnosVpaju",
  "key12": "2ZwYZLGNq1e1AYNFPFCzXJhQMezeds3afzqNtYY4s6ZJpGmVc9Vw1QH9v6KtdpWcwAuQ44wKaGvW4RxhU9CUzNvb",
  "key13": "4nhSeYTp2FtnT3G7ZvemEpeVC2Mfos4dHAPuLGGrp23Jkz77hQGhmxfWykQxpVvPeVE28q18JrDQ6VwKVsr2ZqjF",
  "key14": "4y7Bhv94FpnLZ3aHYVZAgqXU8NxLdPGbbKjVg5AhE6LpeSNE4e6yRDWhJDd9vFVJvxJTLSsq3ESNC9hxGKA5RfAq",
  "key15": "42uYkpnyaQ1ZLVKMoJaY9B8yCGjU3syHnpfaBhnLEzxQWtUFsFXJnV8Na3v8wyNp3NNSZ9GGDLy8EgnoNDH38Fxn",
  "key16": "26mofP26TumezJCQ5VB3rqyxjVTbVPzgfVKtyWWKg7tTo4nTninWurFdncEGARrYxxm99cZWYeDoitU6B3E9k37Y",
  "key17": "3B2u1VNvSP1BqT6gx8JT2zA1iGCBu1SZ97cB7BUzj7km9Vuq7dS69oYX5ewT7SHcbMFt3kHQGxfSMuqpnh5LrNCu",
  "key18": "CcZHELjgTxjMP6R8d59vQBD6Ld85KE7AqdSmcnwipL43J1reL7DRfuHoWV7kAcARwGqmEtGZGBXHbtsRyijs3aF",
  "key19": "2HiAKDGNeEKJ5G7RGJzmtKmchrFuLi34XyrGcLVoumFbWxnicw9YH8UYmkxHrFpD7jLjcsoQcy1EEUqY6ZzjjuW5",
  "key20": "5ZpjCKDBfjwqccWJhfy85kuZGHriNdUkoNd1CHXtDc2yiUdU4zsBzBrSFLZ7F2nfzahnckrHfyurV69SNSEJ5xbw",
  "key21": "E5GZFysjKXfGToY1xT8aMdib5tscz15PKWmgQBKPcWWYhDt8Hg6qtPeSRhvn2MT9jYaxMLfaHPhnf98yWwugZAk",
  "key22": "2FtDJhgpcB9t26fEgJrRzoXQoZMnAswM17LeP3zmxsafe5h93njBYRDcUaKBmAn4SQWSJcEPFgZgaCybfqFmKr48",
  "key23": "4P3mmQsNvzzUxGTyhwdrQQz2i1MSJDjSCsvq2nwTRzoqgRAC8hQ9S8hwT72h1mS3sfN2cU3KudmfeqPBNuXoXWe8",
  "key24": "4EcTieWYcJssXYoa3vX1SyNRZYPvnCiWntpNrAZqR47dPjmSPTciPggQkV8ifCL3VgmZy3XYLhSGn1jp3vahf7JE",
  "key25": "biwAC9JTzeYUxrYTf5CKSL37NEgh2tbdkgHdoEW96nNChGNxUTGrrv99Akw1P1mJxH859psnQY8kwpn4fzS3Khb",
  "key26": "2BHsiMwuavhM6Y7jTJkdZno1vVJRCNNXgyBjy5A6daVsLWyt4bsUG1QR4U97cozdptH4UjcAZmKaE6Eru6Jtj7ct",
  "key27": "3D9k68DrjCDWBpcGRXgaDedV7j2Wm17eJN8jdHGpY6wo5nuua5Hasdj1YRBXsLx9ShVeDU2e5rGQwjBGEyiXmZDG",
  "key28": "5gy6voHF9Gnu6pq18hX8PBXut3GxWnrvptsvJN1hf2FMY9RbBvzNDzhqG9t9VLXq4nT8WYoaHVsSRsa9cqRtLFB3",
  "key29": "qdEb5vBH3Ry49KU7QvYDLQw3XPBYT5hUJb4fZnwuGJPVwJ8pPbgGgoKYXcpdnYezmX6PuppndAPAWk8zQfNGyaJ",
  "key30": "2nvtax15rZcefdo7BFALVjMMaSk8ycRRmvsf2u9qM3arrXibxbEsY5DFp9jSzGoJja4C4Te5TKqXzoLhdro4XXv4",
  "key31": "mBmybSwhR8M7R4tiG7VtvQ8NZreruvZoMsz8LAtvNmE9XPJWyCPiJFHVBUHJVV8YRWJcyc2grYRwwyxBqwTgtrc",
  "key32": "2kdbm9A2tiyno1WtcZdgrmxTYQ6sdnB4z4dbUSXe3PySCGCLCwiXKUEMNevZdXUiNRk8NrgXzYpEhtkR2Pc6JjxZ",
  "key33": "5GiegrjFVwwp8vPqSHPBxh9LjgjhbFceAMPhGcgJ2978UjiWbks7DhTdKKDNtiR29TkgdPhHo6MEZS5kNirkFwSn",
  "key34": "CdagQzVL58zr4vWwmduTg1RRLUvUrxKJBTjL53ehND8ywoJsdP4NLRsiipyeaXCi99XXLXY3HrevioqT3x1oP8g",
  "key35": "3CchG5oab5fHL2Jm29YFHREMYNhvrTbJ4WnFYhBfqcDK9P3yqG62e74eyMUbYCLAjwiNFtxMfuKMdzRih1ZogrmL",
  "key36": "rx95SVasLB5eD3FiLnaKK5NK8TrRvda5eugh4S7QdWAMPRR4PTrDcS7hVEe5apEeamyDGVvQhQrjzdK7QbDPNPg",
  "key37": "4EGY9zPFckrFXNh6jQto8y7kNxy156yew35MrRotgZDyShdgYNkUefhRMbwgba8xG7sX3X2Q6PLWYztu5qjvUaZQ",
  "key38": "4fHr1kYVVvwChRgADJAUx6AhoJ2QXUAL9diwtMLHykFkW6e8dammQyQyJktbNM8NvzLRHXSzFccnfEfo7VxLwag7",
  "key39": "3sYHgxEuwBcZq2jNvYNsXNNnAmgTb8CbmkAF9KQFWZLGo5JERS2vonDa7rtxA7TPtJENpF9JyBPH2t5X8XCkWgjz",
  "key40": "4DRp4X3tqPbvEdBzTejF3KFVAuJvWxB4z5ZQp4hXZtGyE9TUHVra1KiEwKhWexr9oHmr2tZUXtjkwXxL7rLVUmAJ"
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

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
    "BCzJT3ugGLqhry33Tt5sjyXAFD4s1KuWUs5FvZpjYFpyZwovBfKrMcc8C2iAPfkTrWQ1LmqDCAFz7z6NapF12v3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51YNXNdmspxF8uDePQpXhG5EQBQNxKZEtMg3sKoVML5Fbt68L9ivVzhiExGwqLW9wLhpJVqd91A9mzcozRM689To",
  "key1": "5iJqmEVKbH6zDGkUnhJ7PBkhDkZHEHpt4qwzttpvwS4rkKB2ZxDBpUuWPmiR3hSLvMRz8Ao4w8q9jup31Jaqqz8Y",
  "key2": "4vbFuURh4v9oYERW8vYXGoAkmkB5fqzrfMHBCaSufEAi6yGriRMAqwzMmo9JN7GJCq9dsA4n7Xyyo9Lbj9Gp5z1h",
  "key3": "2xK5vnuSxsDxu6Nbn7Bh5Xqvb5qjifBx3ZKxm7gG3Bt3LRK2BmdFAFbsHd7zcfseX9Lzdmw38eo1Jk5Cbe1CBdtu",
  "key4": "5vzTi5tdtJD4iCFbumH3kmSGTcuPoEiN4V25WQt7UnZNis33GcV1ZnUhmcovtCggpuVsWm6x398PvZoNGWHwZajg",
  "key5": "39wWi9LXYoXYQooXp4DQ8tRrcL7cVwXxsc8AKwgYPkL6apZW8RaJGeVrAJJ6vMCPz66bW4cyDF8RfRsN9XXpn7hd",
  "key6": "5qL4QpNveFhwznUwaTAFKJ4c6vGK6ef144oKNpnXQxcxkVM7WfUSb4G6yqbSgykMHu14bzHsmUqGpnWtmxntg3V4",
  "key7": "5B38agCBBHixELzvWaGV2VjjENEB76VaH56fSFxB6jDcHeQ7WvBwQEsvxZNN5fLm3NVu3JfewfPA1mUMMH9Zom87",
  "key8": "3urxtsdste3iGDCQLYtuTGFaVLeuPBdswF1NiFVJ3TFwuv3jpkC6Tg2iy9YDzC6EiEQ9joM5VbMb4UEPP8PyMTg3",
  "key9": "416raP4R8zAPgWsdJ1TphLRG3G6Jn1Rutv5pFs6azCjrqoSBEYSDj49P66BVAe7RkAczFjS974PXU7LDmWSaLWuk",
  "key10": "5ACZVBWAxSSGh9vQY5C7wi4Pg7MJ4Jgzqu5MXCAhHFPbZ3kx58YyrzwhfSiWgMGLF1MgBFuHouN2Rh9DdgWr11QG",
  "key11": "2A4DhtPouNBQ9uoXSNmDEiQDRjj2n3uLmcoQG3hAtGcU8DjdwGeXfNHQNeBfvWSM174NXzbh1zHnAZqCixqqTbEY",
  "key12": "z7cPCJYtKZzLvLm7zapizrSGuMnF43kr8XowTuMXeEZimzPS52DeFy9CVNayT6sEoF7HEPhEVmmveHGbuoh1j5U",
  "key13": "2ZVk6hgMsmgaZZaKZXs2GutLaZLkKhXNjG8d8zLCwXjUcSzTkDNH3bQ6Ltu6yFRW71cvtA1uE7kMYuznEzbwR4tW",
  "key14": "41wT5JeU1K7EPzfRXYQeJeAY6iCFwvayZEyNFRmbX72aWfkqSBRdDfB7ZJkMreMCmJ8wzgyEc8VDiwTDjYJPsmTK",
  "key15": "xGWrsrKAmGq5sQqRcZfzghjQ5j2JJhW9287tdE5G3T1QU9cRCnpDHqLMxZu8ZT6EFTZuxP2JbCNH9VHCNX4Suh4",
  "key16": "kv7MboNyocYWkkAwnjbcn21sUVjWyBeKeXBvgyBCkXdoDSUBtGWPVM3DtGpFGWmeXumV1nghyXVP7wRtnLhcrXV",
  "key17": "5UKbsa1ut7E3iA6fUnkCsYtaoMUFMMbSw5z2ZgLAJGSVDuHmNaLqAHQfZYVXTyDLVPSrRP2bUKzK36PBvY569Pdg",
  "key18": "3WdwtzDWEprc9hfxtDQ3AUt4WS5QhqMuqfsPTiUhSHi8vT6eVn6kaY6FYLvVPJBV1PL7r5dMaPrdasZeH9goPzdp",
  "key19": "2V2AL74r8qjtnuJVrMj4mSqtCZ4ZD4bUk4qrARFWNS6vQuzuQE3LkoCuU77YDZETitoE6RHQjwNnFFwv3B3RTbU4",
  "key20": "61yUKDnriAsdcaApAuGQyhaUHuyJHrTL19MNBRmZjXcM6ZWLQNSPkRJcPjQ3QEU8ja4hbAs1KSnxcNQXLYpK2W1F",
  "key21": "yyBm4a6DxiS9GqxGeg87TCcCg5o5LRmcwnUN6SEfiXEXipHvMauWs1XG7PheWY9WedtkbDPw7jfydmdYC6q9LNv",
  "key22": "3SnJ5VnMiKmGy3vSK8bqQCNNEozXYRG9uXUH3i5sT1E8qh6khJGAYKwq5jbpg5jgQjetEvL58UYytyVcLYHuWEmx",
  "key23": "2ZXzPo6BLoMxkNN8qNZYHrdeq1VLCb9ghiSGeQsiKAxEmM2qnMXVNw8LHToSu5DzSP4GLhpvJGHP3pvUjgPV1UJ7",
  "key24": "z2Ei716N2iaU1GFt65R7t1ZVs93Wo7PYfgjxid31rictUqCGHSekTLiuRkP1hHh9x5bdsQTBL7ngFs38cyq9Anz",
  "key25": "3gY4hWEWydfzVoAH522Ae6wLt2yVD55pkxscsXCqgwTwgvNYfkoUmRVsQXm6iuhh9rD1DZ4dhumcX8Cu7jG5zBK4",
  "key26": "2w81ZpEjXzktd1eAFhJnPsu1swNiiVY2vpkfY8QuUfBAhD8ba5Ar9sVPPTN8Cr1iRQ92WWnJHSFDMzsEtWqRaz9p",
  "key27": "RtLqEjA2YgAfTwQpftVsK2nG77KVjMjbJ63UiTQJEu62G7AFV3WboHPtXY3MWoqDcw1HVBQkrwAzfvWf2Ld2yAy",
  "key28": "5MugGvYmEVHGVeGd6MowJxao7Pv4FkA351NjTnP6gVxozyf17jqnp7cAvqccRTp6JfwaVK264cfMZxKp8extuA3T",
  "key29": "5DHcf2JZg5fRYFQnDSnGcoz18SVRbJQRw2GWSAEnMMW9PVQN89RzRX5fLzxRZwWHccbQff7Vsscp4orEjFYiY9ff",
  "key30": "LeSJZmuAghsNLpbphBP9PDLx6z9fjFbjgaEJn5UyqadVsptAbmyzQKr96Newk9kf4aiiShiNBAu5MWeu7xaNHW2",
  "key31": "61DUa1PHpzKTCFzJcggNXzWiap2juSqYWwGgnYx2uVB4Mp2K96Rnjdww3zQGeUZgtLhK7taVCT3aXGWLgJQycu9Y",
  "key32": "3RhYFzHUT1JXTXMLu4n7XkGsm2TUxxDohtTbrKsAxdu6ZJDkodZJRG1GqNnreyDdtCzVwV3mHRcM3srRzLEXbZw3",
  "key33": "2Fk3rgtHQXVydeaBnogj8YDe5qYTK6mgoa2eWTw6dppsMuc1SkL46rDVxZi36mpespA45v9qCudGosAVjy3HguXm",
  "key34": "4W35SwULqQ8S3tPquvYrrvqgKtcjFbpCEso8oGRAFmghzLo7pxYqZMEPCBHoNtqLKGdsHiCLZM6SyK6NPU6H1FSi",
  "key35": "2MJXWYU4CwSaf3RKdg7a4i4PtKgpGsPajitU4ECZa59oGbCkTuWsTaaqXLQnfyS6HHNJSB3ezggvnBvKrh616ina",
  "key36": "3ccuuav476kQWnZQQogMAwXS4tQh6LaeryVPm4Xyy1F9c24XUeGKymnALNZ1ybmv8nmxMraM8cQC4drMRQZeZ6Kq",
  "key37": "x1ocG5L42axth6sQ8uNDgUYvdpNqpSFtafp3b8NzXbP43AG1ac8RXHbe35sha9gceDFMoCKwd7XKUsgKu9m63v2",
  "key38": "4aggnNPzcyr2egeBcnLqAmopXnt8oMF6msXmqxaAj9YCZtmfGJMNEas7mJBgGHoRvc5XKb9gQQgBQqpvbddkRA3k",
  "key39": "2Vbtp9ugQkW5dKNz2MvAUBsmo7rqjjeG5MBVdJZ5a9CUoL3LEYEpxMD9umQ9smCvfn5rhjmLeuNLXHaZwCrGSiTv"
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

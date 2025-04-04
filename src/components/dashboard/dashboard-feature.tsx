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
    "33W3yiQMS7ScZ3jtm3BFtefjvDY3TazmDi4x4oza33dHH5ktdJEPQyJjTm9yQhpa9aCAWJT3TsjemdrqXsgQvTDn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ym5FdEiWrXaXc6SXn535BLk62vXd4TVE1Uc1Akt4zJGWEsbfMNnUt3J9pW4g3zg267yi93BQVTPeGpHshaKMEXV",
  "key1": "2ZhcVsKJQzf5KYPC3KxttKg3P8HE72LbLfWBzzhcgqaT8qCiAYvjDdymqKXGvJC3WYKhU1ZrYhUmbCDvYsyKPFbP",
  "key2": "K19dgWyMggZcSN2XDHph4yaJ7aAUvEweKyfi9FK38EkTYPmqFSbZjbuPK599Rw1ApKK3LfCe3yfXQe5CMUHfS8R",
  "key3": "4JZVvFwzwkCApZw4SGMtf4SFn5fkwEXFsLWbBAzxsjZmUmtLdSJezDVrc8wMQV9WVdhULhsyM5tAxoYHuQqZwwPZ",
  "key4": "5EhK6aG72dou9tUKZN4d5gYAwJGuXP4DDgDVnVSs5Wg9F9JY7FuntoHaYmWGJn7LtR3uBX5MvPVXFsatnLDjsMeR",
  "key5": "414SFwA8DXQmK6bbxy7DzAfmRuhvUHE2gChT5LW1UUdhpTfydg9yt6k7MzLw91VQKZiC6xQdviNbSNjKNbzogkbp",
  "key6": "zQDqAbzNBRmY53T1qs1iwLKMp9ZmFU7U9VudpmaoMXpZGApMgaJC8QHJXSVC2veUFHst5h3qPi5dtXx1rGR3ahy",
  "key7": "32JPRBucdYBAwd5YMkddeZssJKxi8Npmpk2xfxqvPMJvEmnxiFDXW26YZxUgA3CQqXNZ7iequh7FvQEfRJnLtzx",
  "key8": "tFczYSX6FqGM3stVCgfAVPQRgSt9LwYMWdNmiQbAsQsKY75wDCKPz4ZwTcyMXC4H1AU4JbjsLiNmTNk4pfXCXLC",
  "key9": "2iC9Z9aSLh6xzYQnVEnBaFiXGw3iCuQvqc2kwQZQW4TdauLuCwdqBAJqmLFWdYGUma5DqbHHM5mLiCF2X8JXgnj8",
  "key10": "3EdAMfkKMxEJg2rnrbJaASx5sTDpBesxZX19TtE11BtQbVFELaAJrnWwKem2Dg4xviQGgCdQKeAQbMgHUwo6Ngpi",
  "key11": "33UW7dWpHprbFQkiWAYcYm9LGkwYxK5ADvcprwK5XHqKr7ep6bs6W8QVf6o5Xa5YxEaAQFc1pGmKykEaE3QRirW1",
  "key12": "3LC8SNXdJdJp5XMThBAnymoNHx7uDTe7hN1ti53z1q81MbZ2MB67WX87J8U2ucxYTp2pgMoFvqPbKW7MwSzvyqGE",
  "key13": "5yUtDmuPk5TkowbpfTWkNUVmYSgNF9DoPkfFmFUTZVj9WjQRvMh9fgXUaMBAqFbz2Pbp6jqzf7KkQ26YGaF8NyRt",
  "key14": "63qKME4764rHrsdUUvbLJaD4SLJc3BBDZNX8NtmwCbyy9USyxVKk6yGjtWWv11WyH4tiW1pnkDFVxgr62M9BKnVf",
  "key15": "gjPCspkevA5dJjGibPSf4PWfcPiduU6Z2GJtQtLf4FbHiUg3vtqmhTHFPDJ2GdG4RCN6efTKRb2RN31S2trhCKv",
  "key16": "5QTwaZnyuiUib1s4evynAQjLkUTdshCwraGvnuDBArR8eDbiEDxn9c9r9o4vmZve3S8dVYmwhKkE6Hz6ySHqrDAG",
  "key17": "4iFQc449tY41D4nFUdC9rL9GgSvnfwM43vuh1h1YWotRUa39vcDa9rP3ucv8B9QHQagqUL2UjDFV7PTsuj9pQj52",
  "key18": "5VkE4LoVZ7DGTHEvTTw7rP6u7FHMHGNqXjsLKRTWnBsqBmqJ4jCqvsL8dRVVHGMgzbazkwxjwSK6accWdX9NdbLe",
  "key19": "4WWySqH2mntvMSu5MeXuavb3F5pYoUfzpP2tCSTEoqZzy7wozR4AtYaoNR8bQg5t8AWeK9PJA4tf5rsBoKATciuc",
  "key20": "2yoRn5AQv971pqrtyCxUdjpDa6DAyBkjmFLHsRWanyXY7ZKg881rXmVEjG6VgQaeZMqcgiVVjQgKs3pTt7NSJsmN",
  "key21": "47HbnXRRek3U3XsKFapnZ3g59vHKZzEJwyTqGTCKmohip9WXKRxSQnfN8CuwHP9v3A84PfEh1HrkNUWayUL2ns5h",
  "key22": "Vfiac6xBhXoueiD9JPfCcLeASSVyZ4DLNykoC1hSB3iSgoBjUP1cCNYd6i9yyhEUkXcKS8XFKTLYzAvt11DfYE5",
  "key23": "5zCsmNtpxvoqNqBwX2xDVoupJUtT2C3FzYMxyLZG6kewsZxDYfEjwuQ193pxFJVk7cuPunZdxDcKLtoSyMd2Ccsn",
  "key24": "2av8BoteKv2acND8ZsqvLCwFw5Wh631yXP2VLbS1qcaK5gSu1TxAKefgga9cq2XZqsjgVqDR6hNHrDuwUD9JkKfM",
  "key25": "eWrXrJHWxv9tjZXcx6wcRGe3q36w1G8gZLgYsgowrFzNY5yQLoe5SkBXrefmg8G6sqyUuLnwSkzTDeKgL2J5Pap",
  "key26": "v731eGWYU3Qft289SEqB3GDBscCZDPj4ttEn5p6Zz29SCU5m4UBXwDGX8wgAhUdJZh8ZXhvjJidGnNiwFuytES7",
  "key27": "61PVp8d35kfBwkwRfamyTCsY5smL38PXP3KXMfhv9ZNFnSCFKGFB42gwvc5RMhU3LCwaYyUwxu76wQA96zUVo8ea",
  "key28": "4UuKdsqDAdCXDTPT5R7ppU3JZ7GdmASseddrVpPNVf7KJx4D4p1VCoH2PAz9V43kWus6KGDrbMbTMRUeMGr3fusU",
  "key29": "sU5AuZBk5ouP3ty1Eui6biCiw7udFmsWwACgerSRdA8Z1sCM1iruqU1RDoRCKf6PfsiTatmPqj8XzQPQQKEBLNk",
  "key30": "5xfqcKxBZyxWGS3jfbNfPs9PCfq7R9dFsf7Q2fHSbBdvb4kW5D2anSRWajPuFq1QR7eHKudd6VyP2AbXN83tBcUd",
  "key31": "tf31ofzy5Vz7rGpETob6ThZZRoNL9oMxDiLjc9WdCanVBwNSGB8ADNeMPpGTSHZuTRRTyxNMitqHspvQfHi6iq8",
  "key32": "2AmP9Qi5GQyQ4DBpzrWuPnmLk7MBcVMBU71KfJ1UHN1TCUehbxj6W8N1AUgSMy4uq2xZ1NYGvY4DtLa4G8WWwHHJ",
  "key33": "2KtonyuzTWyS7NwFzBeJ6CtdZ8UvZ3Vj7aSJRi8tWxL56jbTsQCEqxQ7xswRCB9qzc4wj66NeikadHGCyyvMdoyy",
  "key34": "ZorUmuEZkxjzec14A77F8KubjgkWo7RZhikGC6gMw4GRGX2bx6X9cjd578Sdkj2B6P7ZZsoLu3iM3hJiiddYSh5",
  "key35": "SbzjCcKw9uAirmartkbr1iduRqYB7unNEFX7Tvf4zqMZeJSGYbw4FgWpZVYJYMVoX3P5JnQ7WJQc1yHJUoqPTsZ",
  "key36": "5uaVJjNMYQuRNFvgT8bBdN5yVMqiAo9kPsaAYRUwc8DtXNbDcsgVQNmDLs9SwBkoBwP5fR28Xasn3yP8MWMGxfrx",
  "key37": "5kHeaznZbTQboDoNmtEVryLvKSjaw2NbxugGSYXbmMKHrdrkj2xGmav6NE1ieNJT3frZTGpQ6hCRdourJQ4gaAhD",
  "key38": "4mhE5ZCSSru3LG6UCvk5Ubo7627MvfCMNZiu2MV8JSXmhAqZnjYVYSLTFyVsQy81gKWbxTJ1uPxxBcuz5mNBjwQF",
  "key39": "64cjYQCPc1omYqXkT6sxXs2PFuLS6V9muzNhjYasz7YQ2YH2Qj2d3zfngRGq9h88BjYjJ19cjoGAY9Qt9JxVsCni"
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

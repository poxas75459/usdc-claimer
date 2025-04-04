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
    "5bHrPwY1uSLbPZXqkS7T7v2qkfk3jfMEncNYC3qvcR6KGsqo6keiLMjuJY1drqTmAQRLMB4A9cLQ5TY8RVj44p5o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T6jnDXAqU5Gnktftd6Qz21uAH7Xq7kaL8PzWV5xcgfjCVWDeVt1zjTTxnTPz4R7fnpWooMySfb5YmkQ3cfw34h7",
  "key1": "556S9AMk27JCyv2EW5ieJd3F5n8ovwNGWR44iXu7rmHWaoAu94Vkzisd2z9kB3JpuFcdHZkpUVHfuvXUtgG8KjN1",
  "key2": "x1E1SHHodLbTp2VexzRKM9L9Kezo34FZyxZyWdcdxSK8jvSCMY9chgZAYB75b1XT6TKdTescwwHitAreBBLFLW3",
  "key3": "MQsi9krR2ocfW8rvp9w7GnmCNqewSw4hAEU3hSxPRMAoeJG8pWgiz3x8Kkvzggv8uJdQFa2vrEJtCK9TeRPxknG",
  "key4": "5KPRohUBFH9Uz54LxE4syh2jAMJzWteWjzXPZgjGiuCpA47b3V3cknGSjDqqaSDPSTx7MQX8BedSHukkRpTfQjBJ",
  "key5": "2NupZP5F37UjSuYsqgwKxQBG38d7Hks4Sbaq12BjkZhtFCrqzfapjVJynKdRVd51WrfPzApQ9EjxGRHHYyyTcJUU",
  "key6": "YDdNyuGRp9PeJHmYBarL1T2VFDDuxdmP8c3X3h43NNjVWRxmTyyHKctfU3Ln56YNKZ6JGMKteLrXBn13iNX99BN",
  "key7": "3BBx79PhvX82WZobnyrYtmNVYoE7iK5YdAx3LC5iaBepqhKjH6UanzSXp1FswJe2t6jdEQSZLtjz4dCfMRMo1AJs",
  "key8": "5SLwFrDz2KgaZBD9PpDiLLi8CxcLEVAMv99hCoSPyqnpiKVapDC2uJ24VDcgx8MszSnWtMD5xasHAyQj48P9WDn8",
  "key9": "39ajc23tQhBRAPqgpSZFStNRaATfQ3nxTsFQunYN1KybEDi34BLWRg1nefKgRdVK5rs2M5S6ZVu7ugtqbuFBt53p",
  "key10": "2YL6BcaBfCAzEwb5Ls9nxGXVLXYhHPgNRHMo5Zv9STk38NGYBK41KgRKs5DUNu5nLKi8xQdgZeonyCtvSy59pH3Z",
  "key11": "XwJGCHg2KNo6xS1Jm6iLBJ47Gqr67HadMvZPXiNUEyjn2ELvT4uDSHDHZNafdre3cQZZYBV3AjpmCqujhtTiuSZ",
  "key12": "3MxfzYXqECKTcQ2CTMFTapNdHpzzQrBjgQhNbTMfszJqPSxd5hxXbvfXWuKRP52enEcFGyHoFcDsj3GA92EBnxuH",
  "key13": "2VsqKHUrnhKKDfZQy3kHvt6v2j4QD4m7Gf6cix7FoEnnqnUqctSHcFQsok2FmXt9SrEV6cNLGjgENdsMhDKZ83bT",
  "key14": "3cknDPSbLRtyjUZ7jwhdfiHk9BxrWhwHZMTmnoTZFMahcBX2kusKfeTf17NNN87v2GuX1iVeqNdY4j2my89mebWt",
  "key15": "5AhBKNor8inXqLgWNBY2tRhWHXAA7evRQRxaQ2RUB15B425Kwaan4dTXKjinyfU83RqHsLjdWnNgSk5tQvL5RczK",
  "key16": "3ZTdKwYd7M4UDsiiQBaiZcEg8Evnsff5HxWrscA74qgv49M8WrzaCXWUGsNAdvPmQzmvPKf3vvt7zuztQqYcDF2v",
  "key17": "5NAmNFRRckHtUAEqGzxzHpPWyF976HZZgFzrNkEK5uTdpj4neqZRzpBknf82bGs13Yn9FyFDVgqXaD8gwZQSGFxh",
  "key18": "4LjZdYK8mLnbukVPCpjYbwPm1whSeaLRL6ju3xinhGb48oxFnWD5eVpVzvADdT4WnCzDsP8ZwtP4q4oMximYXk4t",
  "key19": "2iSDgimnW8XUJE3X1fnLuw9GDTawmz8WAA1GXBABs7GDCUxnXPYoPcLwtekBVLALqAhiSCKd8AXhayCX5eRtWFMc",
  "key20": "3H36JiN1A1YXjxAv2ChUGycWjQyMqwMgkwpzk2Rx5bYt9jVttX1QgH5xQdYfLtsYX13au8h96m2w2xEZSLC4N3yF",
  "key21": "4q2gNcrQcsSsjLvoLFNBsfq2oc9j8HPX3onaNxkaNkYjLrMXgp8h3yZfsUejcAsZQvJYoj4xkgFKSEX7GfSiTRgf",
  "key22": "2jPxbNppaLAxMoHL4rhhqwe8MQEs4JFyWTgTtQzzutL32RVs9MNgZebUzR3fcwrfo5aQV94qw5XtN36TLAguVRF",
  "key23": "24aGW1q44FVyqk68ySmP6qDbVTVEYRSshHSQ9Fqv6BZx5DPynsrBzPhjy1NSbkPECBAWkCbbGvQJqgiAUF8AbVUw",
  "key24": "2KYaySoVhUXwj6DkawvwpGHfPEwdpdijZp2MbCfkV4134VS7fd2EJxS5dbzUtZNzne436b4LxHT8jCCXsqjqMRwz",
  "key25": "4tAvHYNXWGM13DCHhcoxzjS4KMcU5NLRKpZQDNg63Ydph3X3fS2zJ164FwPKq1aUnsGrM6Bm5KKNWV5hVdPsn7R5",
  "key26": "63eTdT8rGB7uLP9WEcMYSAu4hG6Vu6pW7fo1qVTagWSpekABA1Ev4K9xaZQBzJdgTg1oXaJJhkrCaQwsAUx6ENe7",
  "key27": "3wtDboRgdd2yvM4xKC7QbMrtVGHdLUELaLaLFsNDnpionCp5MVKhS6LkBNHMMGz6JRMe9wk52W9D2aWNBqYGD2fq",
  "key28": "5Nf34bEYpZD6nP3A6AU6LmBzBbVAyRJF9YFzPMzwKLuGkKwjRrvp8hVzA1qo7mWqs53uBagJgszNEPbwGsHcCeG4",
  "key29": "5Xmxx1xZiJnEKBybwAddbmqK5jQACPYHnJQfdB7teGMsrPhKSNFAk2TURY9fh8H4Xp9nmPkDVuSRDiiCVUL7Ymxp",
  "key30": "DKv3yknaza31KYGFXCsoSMJ8JtPQS5WBbdAkDFVBmBptqCeoBsEAnSsvD9bpwGmPmyJLaFjkHd9xLCkMQBXdHeh",
  "key31": "643J4SarQvJ6wDJifTSm3qFg5MbJunW9wdU7UVL4naYsjeTTEiEq5jcLBNa1MPsNA5L3xvU8UfRdraKrmpaEVxGM",
  "key32": "23wcPZnnXhYfAwgFCRGsEJSBzLbZBcY2FvTzVp4AEyJ8gugeh8tM9RWmXbrajsAoDouNcTn2gCnvTNeoZYVsehwJ"
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

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
    "3T5J9oRR3CfvtYryB4feCRB3zGtJ3PkXE5Q4WFnEezipuva4NATaqVTvmaCnyJUUD83rBk4sEzjRwsmNo8tz1SHp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7Rp69TXArPtUmdL4GPE51RANii4W3LrCiFW2Q24N4g43fdHykmnUUjj2uSNhpR2T3cabmXk7Poteq7c2FWoRQtw",
  "key1": "4pPCiPJQ6jG6mw7T2RsDyMqFPNth19Y7GoUsLvHPvvLUKc3wRtaw5CKbEwyZfnJFgqbBTfizupkaWrTSQXGsRiMr",
  "key2": "4wSXxyYTSbSXDWEJ8BtCQCzWR4iVYkeiDnydjBFf4AcuRXJ8bjjxeTTsTkQx2gPLN4F4UnjXKq6cYa3M6MF9SafV",
  "key3": "3dwrVrFZj1kmrXxu7MFuZ5Ks4B1XBjjJokW64Z25PQzYQuKNhLsMGni1okS3KASopELM1rjrXw1h5mwmckZ7Zw4n",
  "key4": "5XKHJuYVVbFti1va3e5BvehivsqbKvJbXroMb3m7fiumL2cZDjNMXCVfY2BKQSBYi6qcL65Vs3o7dhR73ToSu6Tk",
  "key5": "4QowB7PVKvboei26qYuHh1m4nDXiquVMPgNNDET1QADd9KpUZohXTVEGdD4BgxNj9WrWAUnEB1T6FHDmH4X8vg8D",
  "key6": "4wSf7h87x2uTU3cstmZLuP7bePrSss8EobFLK63aBTPKDCeaG2eLdJzDQGkfnJnq2PfESRWyyVZ6nxR3wcUdDAp",
  "key7": "rKedTjT4qH1m6L6ArBXMSbsaBCaDbi9tp3jKhXvd5NQhDi6jeFWDUxBHYqqMrK2JBrKfPTMtwz4PFvQGMvyT4w7",
  "key8": "5GkEJUBqJy1pyJsduJ65NFCJphJjqW1DsifVhLfpyynPKTRDQfhbv5RaLVHnbw6ZNhVM18Xy9Divn723sKMzoqcR",
  "key9": "5vtxZRXWY9ezJ32MQZgw7PdF9m6zM7GHRti7VX1kc3UZmYdTR2JM4vjTTfRfUYTVYy688z6nio83RRVbNUH9bGFh",
  "key10": "t6BKBxhftSNbCZ6up1EVCKWsYH21KetKBpCgtWCyZ9vue6ASozEyJvXQN4RG1jHbdcpvhLZV2CUMpWwHfX63c7q",
  "key11": "4FCVqqXy8j3XwBA8cNyiqAP4NY9BPbhC8Dteg2NXwGXvPMG7nK3iZhBo4yyQPWwma3NJHBSCYp8A49ndEZLaAouj",
  "key12": "44u5PgoQz3p9chts6PdsJdJ3BygnH1oJZardUbnLsyp6Nxf1pZPpQF8h9wTAaPcbh45r22jdgyf6P61EJRqSEPbF",
  "key13": "259XRhnuUaUKoHX8ajmcwpTxmbn7PXeqrhWfaTsNz5LqLSvEjJ72wxukTMJneCUbEZwXpXKiMdPoN9zcGwXby7wc",
  "key14": "3MbeEk8TZWoADDYbMQPfkprAG3nzGm2ju4sM2fszieKMe1zicksEvxCGdNovgszNmdWi6HLXUXFJp5WY2AqoxhB1",
  "key15": "5hUPzeNLPCBRLsLJt4h4MhQVFUvpMst9muakD8Q2AAH5vihuufkfF3VqY19BAkwkp6DGgmvLZRppxM789QaMHBMv",
  "key16": "5bcSsgcyvxxQoQW6jKdHRpzQDyv5KytdGL66Ed25tPiFyQsXhdFWYG1GZSNS7kVWSvYe6XZsJR2uoqJKBdD21AA3",
  "key17": "47VGvsYCbNxLGUxrEe7BtpEmMZV3ZMuxhQbN7iDKF2d9SLsYBLZsHUQywofVc9Tm5GNKWiuoki9NnogKzJZ6DRBT",
  "key18": "3BcSwCBXjzgFfGmJAxgCeoyGRD8QxhUYm7k1EXUV7iJ7ieSYbMv7TQWjPyrRVNvxjRbn1PhgpqynSchZjMPojLWV",
  "key19": "2wdChuDJZ8ia1m15M4YaG4qXvgTagquncBMhntFoPRzxTsQeXbdexdaJGsaV9Shq2gQsxdnLANxVAfgBBwPiEj4g",
  "key20": "caKU7DbbTB5fCn9Y91M1fG8ip25CpcPATP6ggs5FMc1UFKDF8bAjL3hfAdNCsrXuebfA9UaoFrhmhEGtu1s7tmL",
  "key21": "24E291iwqrnN8SvjoLwmDFfDzK6xJoSRq6WQB5fFwzjVydF5ynaUSp3iKfM1tuyPr7aBbm5BUgVAeeKvTcNihHVX",
  "key22": "5NGKSPUL5MbgzE7xgWZudtPCqnL46s2qq7g1r4sPG7QEibiFtT4maCVU9LZXKcEzxNkSZvv8DEpmn8Qb47j8fFBx",
  "key23": "5UQoygmQ83uDzf8RW4FbMk65yMxB6JvmzsRKdLaVauwpHGZgqZ7QKWAPBJbUHHXZM1ZbkSREPwzzAit9E5feww4C",
  "key24": "5GV8NxQYxQLEBS3eRzyFsSdvt4nxUyqYrLNkZYbYvoKwWzykK69GEtmdpzX3ETXZ5FwUuY8koDqhu4nztbHbJfu7",
  "key25": "2YjUAu9yZycBRT9Rvzb7swGmRziJmpDmbAb2KnQPCP3gr19e6k843D4n4V7zkRWgP3RobGRs73HLuS4fPdu4o61q",
  "key26": "56PX5ZkF179VHZMpWMGmWgXbiqMsV7kLcd3Y46pKsikfTACS598MDP9SApuZ6PLrwpXKN5njdEvbfcU7X5ds9SGA",
  "key27": "mXTwihFgVsaawbCy79HDw9XNuwtBoR1PMoChcxUKG3FLmxaRnQ8aTUrwFuzC3aHFaAUGvHz6AqVcQgg5TF9kz8c",
  "key28": "3beGEJsT9HGBCzyAR6WeMfUBkibnwcgeEmEL7dQwPhpJhCgMRYNKt86eirGk7BwhzFoPnLfCx2YtVrzGF1YtNPAK",
  "key29": "cZe9eyvTRKycL3YUzMXWRSSxqaqptRbLtzhekZMgHoA9dErLQbtc62NRaCcSVsQz54PyQ4nainwuEEMK814NKpD",
  "key30": "3SwTnxkrRZM62AbfFipgAubFH4roFsxbkgRgVfTcV5h8tNPYS39YbbbMY49Z6y1QXYCbmjppwe2nbJrLi37kPfBn",
  "key31": "3moLWnofBjfQ8hYaNwKysikfiXByBCoEr9K3eVRpK927YERHCkdj4ahaWzD9j97VBtWyRMSq75NdeyUbun1de9ai",
  "key32": "597JxkxuJCWoHtdFkP6vNPZaUiMJMmHDGKwFPqixfbm1zFyDLSi9FU72EEET9U35ms5tkcUWVMxKhfs5RJQj143s",
  "key33": "GAJqnu6ubxcwG193ub8bd9XJuN72q9jQy182XYhWxLvxWCXex91j9QtiFpj8wPuX5BXkkhqHV4ZXQHAaakKGssG",
  "key34": "2aMT24M8vEqo9vxRYw4V2K3RKvseKtwEoXNv25NnihuSyA2AdJZh6XKqtmTnUyajPQnMGbTMQBaRVjRewLBymyHG"
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

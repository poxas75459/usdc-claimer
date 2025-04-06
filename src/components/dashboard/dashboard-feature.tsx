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
    "3DqPJHC57tP6RTe1kNLp6RAFfq412PszK2EBVqFt9cCapfvtEt1kDo6bcSho6ZdmxXmGcEHSFVorbbzopoFhBkUG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iud2H6tLZorWizXg2Xymjq5ffmwkzY8JsmG7ipgcaiYdQBvrMZpoSrUFTmKbmRCgJQNvVoF83RedK9UQVxDhW9C",
  "key1": "4d1wK32uSyf7vAXrWmrAURwTBWVwvPaUoARQmHtrfPgaE6Uqys2Uy5YcjWaZ8MJhcQQEJVzwm92QWwbYZNyGVJaT",
  "key2": "2NK6nQFK8NvzzqConqvpkZeBMHEDYG5GuNu91ELsUGKK5nmZDq72Wbfcqv55Fa7fwkhTZG18sRDuvy6Cxz7Zy9MH",
  "key3": "3txy23A3JRquseKUXXtETvx1Sus7BasyiZcttu5ChW69ZCNocJSkc4JJLxX23CnBkmorh34ECzzqbY4hx4jtjDpP",
  "key4": "5sqqMLDookFbuoyshoFUJhVFhdw2NpRWXLhfWoiT8N3LiPf23Mu9LscqQY1QUdi7XU2QGHwUyrgBVei7M4bJBdvT",
  "key5": "3rsFaDqmJuqMVgF4fhDBqueyQoEroXFga2aCvJHHDAnfN2UDLV4XVf35rB96R6dysm8vrajxQGLmnDhqWfD6x5zT",
  "key6": "3RQ6QEFti6xQHG5LpXg4SirsitCGswmBER3feZYfA8nZ8LrF6s2Cn2YYFHHRw1b6qYTAuQNavb3AjEfkCFfCKFU",
  "key7": "2kRbjtusRyxeCb8RjmmwTRTJt6suf4dnZTZNYRGPKnrTbm68CntnjgmZLrA7sNKjojZEM9XUEKvmqZnyhLkGYo8q",
  "key8": "2piivuwGqjEKrWfjtdnrydaGBZrDBcRYLGLtf1He9Ja7wH9kZrLFXLxWK6gaiJrcJ1N9p9MKF837ZfRCA4nLnxHp",
  "key9": "3DY7bxykmtNGC7m4Y2xNBWsJkT78R4SPjiS7vDpwyJqvpdksoTEQ6vVEttmBXSUhTtehTyiRVAaE81LVY6LyZX2d",
  "key10": "4zMfN1sn3Vz1cvkdWGgdiCcMqxAe8tMo3cbsnhf2Ebbd4SEX5B8H24t46dLgP2FV7NQpVcCx1yMYTHNSfnzXLSkt",
  "key11": "3EwUBHYY52yxjUmDpb8tqRbJhmnnfR74SkFEUFHDfJUCPAzqmEb27WZ721LyoeUHxhFhYQkfURBGLQ1DyyfUWHD7",
  "key12": "2xSshKNWyV5TURyqKrFvDkftzGvWUwF8TEBy46hneAPJurK1aaP1ZEMwndYyk2MuGSZRtu3U33TJcE3k4PSCxb2e",
  "key13": "2ecmEYnWSdefCc4NJ7JN3AJ16tgHzzWUb57gnM7yp8yM1jK8aTEVsSs24x81L5rtsT36WS2o6EzBR5XYxmwoCB8r",
  "key14": "4csaB1k5rgJXQhRMBznCAogyaMc23QR3ZpFoDTkY75DecTHiy7RSbWdBSxJFE6L7o8WknXvFqdQsZizLH7cnqFwS",
  "key15": "2H7Ah7SYo579CK9ziTpvdqULuAquXr4u3EiRHuLKzNQ3na8R7azaSe5BDSWSoDCf8tthVz5Gb2aifhepHwfkiTJ5",
  "key16": "24cp37RNYgx4hqkYnwpAuYUNSsTUqr7qhjMCFiUMPFZ3qy924db46D67MRkEDX8DHGk3JUR7MwGCKTzU3VBtqFA1",
  "key17": "67KGFXLkRywoCLJVmN54Hhh3mN3CA1r2eky2KGLbxSTPvYLF8uXMZt3nd8qSDFkN2SS3yVWGKP26Ei8HvPPhwvFE",
  "key18": "2r2rgsKNUD6XvRp61iCpCdEBUBcBZtDsJDU3xM4Jgdb2GfvP7DEukXgnEQU1UufNKzrUSjHqpv5o5uqFhtXWFd9J",
  "key19": "4mQYcs5gt8SaLg7vzpAGty4NAZqR87cFAZmiWHnEGx9pv7heMGWYp6Gvo3okTsd3XBdc6L5xi7CSYzGqjJhJwmqo",
  "key20": "5vaCqza1GHaKTzqoeEp4egK6goWrqPnXwBNcE4kqXzuC5RLPHF2MWsEfZEeKav31twMjBCvjqM5MLgyKekHmc4Jo",
  "key21": "4LnhniGDWRcnAiMx7tyGmWXN4VSbmQTurSDrHxBZSnJXHH1rocqEzEZpK7xmt8mZ7rcJzr8z7eEr97SepsqEwjpX",
  "key22": "C5MwuXoctCgjk2keofkdY2aEcWS7gvSBg5zC7NF9dEVPYdVsQ16gYfcD8HbmMiHHLi4fMDKvesmTt4yN4zFZSBF",
  "key23": "22FAJKnZoA4rEgaRyYgezTu7ZZ9GRvN39d1uDJcQama8eRqwWi1wBWx3sD239ratuRCx8P1pKVpRE32fsYbw6FJ9",
  "key24": "4DjLE84rwcafpdSCuX5GDSKmagYCnxECHdMJ5MWmKvD499X4vCXRH4xgFs8cxqxe8kiWNDFxzvC9KJv3i7ZDX44u",
  "key25": "3KYyNnqJCWD3MUe54pwLfrTZzyZN2cxHJUJiVPDPeuoTyowSM6tUTrHo28VmeJZhEDWj2Gj3Svr5kRcc3P6YqNj2",
  "key26": "5RSG7AsVmwPf8EVJuc2MWTstDvShTmfVJupjANDMCN9ocnLHvAksr65EnUojhnW28WtWgmZAKYjGSVPbL9s3dGqN",
  "key27": "5pZ8io6RPJkWf9UpoF27KFEzgHaJ3AACuqjiUuTPrrXzM3CH7tzDocpanhfYk4XDUAJyqu1b9uFy71DFBgLj9KtW",
  "key28": "kE2jb7qwwnbdrsxCRs3nEVqwZ6stumPDT2EuNPWTuYL8CptQMXTZemtsSEzttuv8swDXKfRf4FHEAkwE7gfADuH",
  "key29": "5Bi8TsRtd9J3qtpR221qR2dmc7jwS1hAWzxdt72kVfKrVDfKzAcRF2Dv5neVDXNpK8RNiNvRLD3PuG1DLvmfVjrR",
  "key30": "65HFBNMWqbmJsBQB6rpHmPkp5aNxv9U9911GtpQY8J8x2FBTfXq59X5UtEpFesq55zFpVGguz1yGQ9S8SEhmxLnp",
  "key31": "3m3BcmpLTgsaiVZQMqt5t7DTMiWtWmdz12MKeqq8kDGoPjFN1TJnvfYDDm4vnvYPZDeUj2yRjwBR8Z1rcMBLxnDo",
  "key32": "2NThUCxL9vwD83w5cPWqTrip1oJTAiiwrVLnnTr6neqyCLAga7KQsF8Hx3ViNVauj6tj1J6zLHTyHUz8nCA5PYjx",
  "key33": "5ihNEuKtvGq5xdG8Hy34SE9oMEDNkvGTXMoK8H5EA3DEtfSq2g8yuNapb8yBrPMzeZj8KtXDx8Zx98xqr9ZKW3Dn",
  "key34": "VxNk47ThYkrHkeZ7NS2DYQH3LHbgTGdWmN4yvvhMtdTrQuyqyH9pq9T2LUCWh2h34b13sTYtDskGvsQv6i8z6Fh",
  "key35": "4TseyXDayUTUvWvUNAu1ksiCiq3Z2g8HCS4TT645RS9JuLPqeLeUnJ4eUtctSTYnYv2FevnQ2fEUbHXgAcANcyep",
  "key36": "39w4nQbDaXYtxK6BM4tbmADX1GYpx6TQUoBA5zQ1LXuo5MzhdxQaZZ2TaXhkaXxVPR2y6kog8sPAkXzQeS8eqyDz",
  "key37": "2SBfWYK2zQSvf5rpBzHopuuPinsUkmGzQWwFRW7vBEg749wECJUCkUH9urE4QR8UfEEc77hupNAcWyb8RnKSWMMs",
  "key38": "3C6Bv1sq8JZwwHKMfh3VxwQ2tSUXKSPXLHdVfA84DLRkkenURVZinDK9vverAoHXGHjc34T5rnnRFQvfjVnApLL8",
  "key39": "5rUB7knc6Cw5C1KCpZg13CvnGFsDnAW4uG9YvbSpaa1ihi4bUAR6NFcQ9mijJagv83GU3LoFaZHCYKn4Suwitvpm"
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

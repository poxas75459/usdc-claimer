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
    "3TxkYS9raFgjAx3xcRbaaLB3abbrJSpoyaZaq7H5ScNSsF5fWyxzyRF2pecBFeNGeDB12tUNt2ftSC5XwzyPyP9w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jS9WXaki5sDKfbizUbHnnrgvvhXH8JfVqdW8QLxSfEBRC1jDkyPUkn6P1qJZB8H9tK7hswRrAq63svwWbWmhxLd",
  "key1": "5vwjDeP7GamoQbQVYmJQny7Vdj9XmDmdJSzKuiXZY5WCZU3KYDiRyhkZKsobQBjKneQ2NGtoa2H7yAQtzayuDsfz",
  "key2": "3EegwnwGkmFQWCFcz5Aihr1fAgw4CyDhy93kJupa3SVTqdp2Y1DRqWq2XaXt45uP6JAiKTcVKyVwaxP5Q74QAM9j",
  "key3": "gAvhU8r3zRkZwo8qdEG8xWRnZAK4Lt6Q48uPTcpiZfsov2LxWweyZNbEXykmbyfLejmxkZCPg6AFPy9HN69VYD9",
  "key4": "5mP6BYeUNQQUNFQQ3YGJXFnD7GGBo1EcKADmyRQDbosA8TQAGejQFYSdeUV5fuQG4icqiGqN6cp8mhT3NApy556W",
  "key5": "2MRix9YPbPUxfhSbibr1FaUNQg7r5PdYvTqY2zLozVWSCYvJognjewVDvde5LARvoG7wAvJQ8zvaZgMcz517RM9h",
  "key6": "5vF4dWTdJU8BUNhySRmjcBFjTSTEUBJ6YVMxxa2bZhG4jMb9mft1mtFJAyru7Ky8tJU7w4rVdsgNphKU79sc7RSV",
  "key7": "5xJAqiUnV1RA6Z7mGLLEZ4PboWZV87rkH3MNf29moY8j7ubX7kksoMbNrYtFYYJwV4QZvenFw3awFLp8UBh4vrwN",
  "key8": "3eFZ9sf3TVFkECWcL4s9w685b5Myicr8rsPKpF8seCtc12ihzGNBNY9mPqssW3HdPMY1jprLGEtjvgnCwz18gsro",
  "key9": "5q1sW5XiX9Q7duWjTeozjq34aPwd1zr6qsmmfhHvmySpchFK5LmLzyaRLrZjTpjxroPWaYdVkktaqjYTgpkAmELN",
  "key10": "4AHzYVLfTmATeTXReXxQJokLDpANSgaSsCZaGqtV9TmhcQxnkLQFrgR9ZWkoj68V3K1rcZoT33PghKEuGpXZwemx",
  "key11": "4DEdHpQBn75A9E6uMsXjVoMuqGnmNxnQC8rA3v3ZJqDMcJruuRRrBBLzh69K7FEHvMpMqWUzohcoJzucuujX4uEQ",
  "key12": "5xeg4qfj8QmtogyHNa2HsGDFwN5JUUUXCrBbJa23MyLDS4o3xfBg1ZbUYyZT4Xrpsie64TtCHh12LiMatMgQG5SG",
  "key13": "3eghFqdyjeExFuvGFUQu2cWmxWvXcLqoMpGtBQ5QJmaSJSA8TvhnkMkrLre3Eeckm3NauZPgjj2E9m5xnCHgUsUD",
  "key14": "35d8dsmaFpMQsuKykfjVoqtZ1R2JKSeogXDAKdxW6Gof1vHzHN9oMiLYnPV6gNb98FfG3dYvwyQksoHtNJnJqUzn",
  "key15": "y8vfmJrLB8QU9egbivUPkcMNMgLirkG79KgjUrsaAW9YYm9svDbzr8bCoS6jQC9guAvUZcxiTS7x9ikUbbRBZYF",
  "key16": "585JkkuTF1U6SJZWTX3pQ4gZqxz5U7RyrR4ont9mas9jHQkBTdX4HeLXrEQ2b58cCYZMbC2zKZrvZPwf4dYr6Qtr",
  "key17": "5gtEfzdS4gZZ6rkjvzVFXZMZ27EUoJwtDkhNPAHvtst98xE5WZPZXzopa7kcYmR3usb6hRPWpaxsTwPSSokifbYa",
  "key18": "4ZJG9EjYvTdfpmgJeUqfHf7PYHteFh1egzHS1bw9UKUtBSB7VGsdda3vhWrbPrsRtMxZzcugaZpwZtDv2Kfxh5rQ",
  "key19": "2rPbqEwF9Mfo1cZU31AiGXVUzKbfcV5WaNiMchv9MftHTZ9YgnjhuRBTUE7DoxqNQUicArFEtNriTLUGqGWbsmWE",
  "key20": "2yNpfjBMgEoZaBLaj1CAZgDth9rFQopwVToNJoHjpvuEreogqAXzice1HFFaLtJfzrduDNPTb52Pg1iah4e7s8Wi",
  "key21": "5AYdTStCadmay3D5VP6yMe5yRYmehtuHy42Xy14AEPwMgP6U7ZdbLQfjMEvneUxdR6UMzf77GdV9LRReacNdJ47k",
  "key22": "5nnKSsSq7Afnw85pDDTv3MR3UY6mPk7sQzAmKAAFgYoAE5LPrRK7o3TbNW23KLN5h5QKVT4dbAXTyNAdgUuLm7vD",
  "key23": "9VWV8CTFFxHcC4dUww9Asda1bcsbBxf2ov3jJev36JE7fhd9fqNWxyacfP44Uw8okUvrkrPviVvcaFgFT59dGGp",
  "key24": "24CHFfjbfAJnP2EY3M2oBJCkLvNHH1LAxqD7fjR35fNCpW3nSTXcpD3Xfhc2N2rtKQzTSKA66GD7SWjqUh4UXp5f",
  "key25": "eBvMJQyai7pcwC2XsGCmX8ckecJsuy6FybJMEYEmonZT5tCGQ5xpZXZCzmw55aDaKTw7exAKcNXFfjDkix2U7x9",
  "key26": "54avVKGmrcBuU3gkQN9n1scCJguzYhZBBzBg3Rmvtd4bQ85Vuy3wAGG881orC3JV9gfFtPHerHKPFwFnRv9iSFpz",
  "key27": "4YGRZ5AU3b5ohM33zUdJbMZ1uVRGe7m9zhfL5cdCxcKZugDUcnfbGce7NJ6Qbxpm4i7eepP47t5VGYa11DDmCSMd",
  "key28": "5W48PgyGF6noThNVUguNcVdFvtn5YMYu3yvUteSbtXPxYq6Xa52AabWAcTzM3BARedWfNMB1yQ7RVJjpn57jjKha",
  "key29": "4LsnPypNM4xkWSTWy8fdiQnXnZdjv8XAahcoERiSoXP7ZZxoapS1ssNsARnagnD4qVDkCHV7FEiBQFkaEtkhZ8Kn",
  "key30": "minENnZbQY2hLommz2Fh7JYrvjVDuugo6LjCW3v2JXAJqn5bL8STwNBDcJeYqbXDuHZT1aNZxHcMN7DrHzjbFzr",
  "key31": "66q9QJMFGCnVQURzYiWdV9wFATS2AxRjoTXfR2J8NB2DkLKgtQMf9PSmwysiRHsSvwDf5uA2r98vXiiUStJYMpTH",
  "key32": "5FVUZXR69ZfApnZyBGoWZxGPieBgCT67rar94qNANv6hRG1hq1qpnUbHLhfyS7wW8RJpVXVJppPkEUXRoRMMLMXA",
  "key33": "2TvMcwQE61SrNqnSnTzT73wC7dveszJ7pCXTbzAbpVspntz8pLufScWxKS4d8CAM4pU3wfg3usX6XVAoVfeb5RFq",
  "key34": "5uYznTUL15A2ZPitFNHbzxpLu8kHKsUxByh8Sbe8ekSn6Vqci7HKBcfPAuLHE8PaH9RGHTGArJkJ23jyAtyF2Atu",
  "key35": "FSM7samacES4uDeECXBPBt5BURpL8pYb3JRjPGGDfnFNoGaxFLTZKCkAbWga5rvMkMRQNq4y8HcqWBrdveQceTy",
  "key36": "4VQ7k8GqbZA3YptJpQGLMyKCBdg3F26kgPp8GMbRvmSGtf9FzAccLy64NJJMEqV2J8tB9xSSdfkLTmhRgR1gKJqC",
  "key37": "zg889A7FKM32gaUfSB8t9mGLNXVmXoUAMe6A6aCaaCBcc4msAW8osh2nM1euj5KwE5SzcGgLZxm5hTvwgkkhojM",
  "key38": "5idTVPedhvb8QD3cNZxqC7HTMxR3B5KkuwBELY14Jiuevp1FpqsbEKF6iPVW5JkF7xuq6MhCSyxmfL1dTBqnjjgX"
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

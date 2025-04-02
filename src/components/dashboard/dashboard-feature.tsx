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
    "TiYCdcEDNoQM3KMr3iMn1weqpY76egjmanywRvKeq3Qbp9SVVWFJGJbt49zhp1sV75Bvd87gyxkGvZYAQDQ7mQR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YKWzXfeQp571pMartYJMq6zxBk2YKFvEJy3FjvyxApcgaW27F5B83spvg8iCgJS9NBTWSzywJVeHDTVdoYjLnm3",
  "key1": "2fUDFX2DjVPkTDTfyLCNipPNq4GCUezYrjKaT5jG2TfMw4M3KuxozwRFMVmhDk594zrG9ahyDpW9ddzUbkpkYNto",
  "key2": "23yCPGe2nSPpGSUJuRcY1QbutvTBFkmEBQKrnPEuD6C6N9YGsPb2vnbqoLus81eJQJvbj8D1KFyCd7GXrx1BT1bG",
  "key3": "64f2X5LojfGtqqFzq9AnY6yk9XFkQq6rYTcE78hAcN53zByq6Emv48DNAUGNuHDhGY6eMyKnC3JzwQLC74aGiBpP",
  "key4": "GKKPsFg1Ugpfs6wmnPHXndYBFcQ2M8JkePmS98UZRQ6hsq5hpuHu9jRy6ugov4kw3zmAkoXLyqa47FRKgC6qzFn",
  "key5": "3RSm9GSUjQRpFpwwckciAdRxxgq1xxtWq6sHEovuhSiX3W1ApueinUaN8bR9xjCMxD2VVNTHqPwrJF5y24i6Zmmw",
  "key6": "2zz9uXvG3rqiqqQHqwvvsHMgVoG6dRqPp5WoSRud3d9SamovPe3QZnoZELen5n3Yhv8yeEQ9HdGirsMzPpeyNPNS",
  "key7": "32QXKXtPR66LXE6BmDR1HCmNjC3t8TuRBH9AZckeuTZEE5bkYZJLVbFsjAi1JtL4zKHkbVKQXnZebKExbnqSUw9q",
  "key8": "55GkQKYvKzjkENPRWQqodsC7dULYTrGUSWRykm7ZEXzk1f1n92S14LdHxhkdpXAKJCdDzBQMd85WYPVyNHT5LvS5",
  "key9": "2YjDUP5hcoH41q8fMn7uW7d5SKSM1Quwc1Zxx9xWMbLcBZsxPJrnUgceCiBNy5V6iR5LNYYbdmrRQ5sBrG5rbkYF",
  "key10": "53mXbBdAsfMnz6RJMgAu3RZHWgCGkvrDoiDkNCcEUsM21PSmDMMDAfM2aUKAyb2HgPYREk29VasSrMijJUwE8B2k",
  "key11": "5sjXCP35RyhM98zWfop9yyAgxcr73Ft3PnUMCrbwVH7rLtBCp9Xzut2vUdrUXUjqNfGEfGwMPUrvuc4Bjac6CeMZ",
  "key12": "2nA5HBt4nqF6GdRsVnKvf3SDdKJJMQ8wuydgKJ25Kmu6s9GXVYJ2r9yJFgtR9yBojDXZbyvWK6HPViy8MFF7Q8nV",
  "key13": "5W11t3prZQfkMjbuVLTddLR88ZMWJTiSfQHRtKtDkdVurpHEMSm7qiUou8ZFyjS4n2jNiyFU7QEHULkNZDobpFPk",
  "key14": "51qgEquvWZYobnitdmF44rSj6AoCsVpZXvzWP3Y76v6tiNYFpBFXZ3iRcGr5fbZ2GURtdx74tw5qrYd9zFhKa7PX",
  "key15": "2cEsDP7EznbfdjegK4YNuU2sjaicgC4s4um9MH71NG95iXT3b8ZTKPua5mtnVgk5fWv2vhZ8xKL5ns35LH9KW4xB",
  "key16": "4sbhEjED6e1smcpKWvTjCzvLi8MJsQQvccqy4MiwYcTaBaiYwRr7MpZS1fo1Rx2xU9KwyEeex433ihUiemZqyMEX",
  "key17": "4TnsgxdNXRNtf5qf6xgwBiYjmyjnvjAaFSAUsUfQW7MTBKwJKzn6gHQaTNwsFtmihu7JEgXqVmCPSBtup6aBJLZZ",
  "key18": "5g1Tfj8iXtuKrNUpsVWx9kT8XKEoVXGvtENs64yFie1A4tzEPntqSD8kYxumGNFeBL19kxQMCLdrf3Xu5wnq3MDz",
  "key19": "4qotVyWmmJPMCdkdEp47koURho6bJaGa2TFiq5HC8wkDWGut3MPy3eeZjCKBBU4Yqb7rsw4hEy9urUDdLtkKLYNw",
  "key20": "4eJJDQ2PFjUdQ8Rr4FZuTPQcMo1v41gh2WGaGU7jP4stGcJqdNzUUqogUS35YH2Hby7SJZRf9VrXiu9EGPz11n1W",
  "key21": "4D4xxtYSRsNpDBcMTFtLCqYfV4HoqrFtk4AzyerDxMxB2EMmpYVBJowDMRwykdyduNY37VdkSZKcFGgu36fX99gB",
  "key22": "5BE7AYNsPEQAbCCUrSHTHWPjUkeAZoHNmGBGfqAUUTeFzqpoGngpfpoTVpPxwTKf7DS9iTNCK1SVbYnJHpLcNABj",
  "key23": "3tqRkWa62KobLUi8WTUdmuQ7y7tGb3hsCz7TeMeRxTPs9vB878UU3x43qmctCNL7YunNNw48roKqovYNj15kDDqT",
  "key24": "4x97B2AkyPzV312tMMmPF27ydK2d2j7xeN1w7819Pk3QUwnrvBqEWwn1ahcaLDFHNnjFkacbvqJWvHpXYczFgyxz",
  "key25": "47q1bapm65RSyMTx5Zp6xKn3ooyrDWagVdp3ZEh3FV8rhuHAGPX7mw3oVGvSYmeYoZCFBjBJxkiRJ2aWathwDFSP",
  "key26": "XQkH2cZTxMUptAELni6hN18pW5XRhz3C6myY6cwVCEe5KygKn7pvAPVZfBJHtpTzr83EYxzU5Dbo2aUK6KjQUvt",
  "key27": "3ByctHFT4NQFVYLyh7mzLnNSDPbpd1NihkFrEfwS7GNh6ynBXD1DUUYkULa7ftPXCr5BYz5odHkTYLZjGNkuSCZB",
  "key28": "4xGZ2XU2qCgqh7kBdVXuHhWuEFaoC7ZCkKKYWW3tqVezJdHxuJnEnXcXNQu3huREA9UBsACiH1jEse1fHM3uavxr",
  "key29": "3vEJxekstQuhMcKqCVptpAfTtW4mfnHJYrLpBt1iMeANn4u9TCMtZBdDgoDqNSTRQVjzBUmw7PgTEUmaCzBWfe2G",
  "key30": "5C6BcjpNbvVj5EUazxw9PyxqPCTam5dTtyUBFr7Wi6cMGYiVq1r3uPbSJs4SrbKzmaobXxVxYxbTf62Q3Q1ic3wf",
  "key31": "33J33eWu5hiYMcn2FmKVBZqJbm65RMFPbSiHc1h3j9DHvbxWdhnZuY1NMExbGY2JHvavXmS8AEv6GVSjwE8bzu2z",
  "key32": "4jNqhqqbijdZw7rKbLWzvuSN3emfTEnfVDgHCEMFNCLfhdregxFYW8AaxCw6RNuAEvSrnpcB4LhnRRY3iNSZauX6",
  "key33": "3twKuMRZ547YfB5uL22ZurKs1dbT6Q8kgMrJBpSU9vGVRy9ms1f9v1rx6SRf9MtiGLfWVtMZyQ188YZde42pMLd4",
  "key34": "62g9d36tBc1PunUsPJEsX77iGrbbXFqGpjL6gRbiiSgc2Y377iBRVqsMwg4NhKBEkE6Qdcd8GYnf87kpPDVQzhN",
  "key35": "2u1RCk4fpEFjLTx3oFWH6FH9FbC8kxYCdJ3nbs9tj7H9ts5ahhkdfdAr4arHnBEjofNr2Q4u5Cnw8qH6qySeJKUe",
  "key36": "4rTUeqoG8ENwTEDRAvHypFiXnMcoTGs9SQB565fnCmkhzMpVovQgg5AuWikkRi6qX5r2s68mkcXAHEEGkVVV6Gfh",
  "key37": "379SHC5xufJCnXkYT79DHTb4JhtA3K7uNF7bajb9qLu5W5wNRHcQynZ5kvkufx6feDGgHuBMUmtu4Jzbf8Usy582",
  "key38": "kJGcPzKsnBttGjHth1wwpVs5p3RXYNK729aFSYnoCL6zyqbufAbiZ3Kq9MBszZLsuJM7VJGfL2oaDDnivafxuaB",
  "key39": "3JpudjFUHyYFVpeBEAo6Skkyiwsnb1LRfATRJkufrvUHWKeJpgNGwcxBqQfSUTXSKPHgy2bDjmHa1Jt7PiAGx66P",
  "key40": "4PsZdAcZFSUWWvMqCoZKkpoAZYtptdA549FEt5H7tkbo8bXTXCVnw2QX84bfEj1rZaEQ73mpA7MCj6HodkdDXQyT",
  "key41": "3SpCkoj7xpeRhNySkpqMMf4pUvTrJaJ7U5zRwhEuX6eo2rEWq89j5MtVN9E2vaChy2mhbNT8QJco4QLsVnuvtzsq",
  "key42": "saf8hTf786irwaNEHkdW8C4Gxu87aZRobx9ntJb7wWmJH2eUozp6dyX9jNaayi48uq1NgznXnPKE1szDvfT8HWB",
  "key43": "2AuVmfq878b1eYfdM83rvYpt2cBV8RcYezjms9oTveEMCc15x5UkTyqn2stHM6ZvpwNZQQykyf4NmZ6TcJXrGBW8",
  "key44": "5WrRqXRbVyo24YjWRi3bCmHupYnxN9sMCkckpWH4Z9q6fNaTxK51iEti26tzmihtkiXMTM4kprVcoqDxMeP2Svuc",
  "key45": "2NhCM8BypQNuLnFFAycwmJPDRdK4rYYApgKFGGTAzdSQgNgueSgwQpsixsej3N63n4jzMPD58SHEAbFeBmjXWTKq",
  "key46": "2QsDwPmQXL1oLxJnAHSY9x6tGTKbmqSkp1z9XEHcaCf2A29cdThatzu3pWk2nVfReqFgnuxXqTkp58eLosDSmpJb",
  "key47": "4nqpHQj8cyQqn4XdzdDuw71j8pBMHh2qi8ffmjfKQTnY4LQ5z5JXfY5sjDt33dR2LRBbq89Kn3LGV48wSKAcyLTa"
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

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
    "BkKtPDqMwnZbgqjB9ZWGncbcqANJZyDSFSnm5pr971mnt9tVgxzvp5QrCfvEfUehkUWBRqHuziBKMEa3Pjecybz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PjurTJMJJBhXKEVkKAyENFCehzQK1xCczXpdVWYdCxBxrdoFo1nwxPJrg7Yoqah2zcu6UdyxZYskHtGWZUEbZSP",
  "key1": "31uTBbtuyyianRHGDEvPEyfnCc82VGm2MhR4hqDK2euE2RX5UK59yb9zhwevxrwGsgBSivkFUkQnYvgEf4VsvmnT",
  "key2": "3QuV9LgczkS1dCB3Bfe4RjftARL8wsFk8i4S4hQuUQWHrsQ5oFxJUbjnZEfYeF1DKtheWHi1zu1ESdCSNXLAUXD1",
  "key3": "4yCbRttp1g4nwS5t1HZiUAryrb1eEmSXxF9eeta47Q54fJuaefGxXLVnzpBExiqJfqLQy5DUPgUSm3j5qsVMWgR8",
  "key4": "4zxfo7qXYF8BmK7A2ge4VWF8i8pKzToCjDrv9UimzecVdAJ1Mi2kkoiaPuEVi6RgiuPgdr1oDoDd35ukEAF37hZN",
  "key5": "5pVZmN3qEnbLEUq2NDJUUw6TxLwpDg1WAxYqmd5xzfnnTiYdqAZ7copAPAxmCayq8EF5ti7NYauD6GL89qBo7v8G",
  "key6": "2AHBDsfAhch3h2h3azzSBh8YvE3NpePCrkRJXaGekE41CcVtK4a6UoU6kwSiaCLcAUCXSJCvmqdCLNbNcKLYPm6w",
  "key7": "BMzrKWRabkvQPdsqhWRciX5ASgoME9zhp8YCoz1hzV2qXzMkvwzMfMrLcsVyTA8HQ3jTZfRXh8P1Litj2i6AHTz",
  "key8": "5JJYAhu7BnabznpQe1Xg7KsFVwMbCzhuXHyMuJ7Kr4vFLp8MuRs8N36Zk1KtDwtGR3AGBDrp7hJATuk6fQTgodnB",
  "key9": "3aAjkibnrj6aoyiLLUPsnF22pFGkrKEWe2KRyha38uo1QdZRLTodfZbnz7rnX9VT77QVpr8SGiMzfc88pB6nHC7x",
  "key10": "3izMAxsGRmaQvg4nRxFV8MRABEm7UoikAz5zvxa3JJwhuocp9W4T7NYGtZkSPPccpHiiPCrLFXYxfGK6DHkzgFMF",
  "key11": "uDV9bnUW8nRDPc5VZ2rnDiLVr1CgLVbNPg3uCMKXeGL3n1UD1Yi9fvS5YyKbV7Q5xZyJNYrg3g6jLphvhtVg39R",
  "key12": "5qkiEDpfRsqCdbNQiEDVNW4Nq8fPJUYVyDK7Gn3xxgWnpwXrTEYdDphNZuh59a1Et8eYWfu8upnjmoiW5svjUDRH",
  "key13": "FWJxy9XfvMrAHZcDpWSFz6GmkHcZdnd9md3YFshe7PQHDLA5kmjXS1zjuYZt2Ek1mfNuuxd53JpnexEUayeW18J",
  "key14": "2pya5ZXoWrrG4jDk2tDj4tJFqrhiGzqYJYC5Xn7NMQEZq3qsjiGDeBtyuDyJFtdvitkLTGLgXSSqCkgRJDvwTVzF",
  "key15": "36ajCbLTvLimjCHzjUXQTYw5rysTMrjfNZAM4vWTr9ULbeAqXzCc7jmJsPJVaL7Z5WMApKNYvckVsHwsiigWYdsP",
  "key16": "5KhboULcPhV9oMUxY25AfXLwWPA4u1yRNFnQANNp8fZbxZFHft9kpyKSe2LPyJS9pLxdY5Brg3nyDe4N5CDDrHJX",
  "key17": "54dETuPdRTNHvhf1io9s2tBEJzTcpKw5LxGtDcv8PjVDgK41kCj5DhXnrBU29U5uN1GbZk23vXQHBfSafLmKquR8",
  "key18": "5CV3woAcikeaGjFegrWLdy4qEgABVpbnqai2dU6zETmCocKHqUCMAygwkzwKq2NKCPdTfiFf2ydWdRRfe4GGY56M",
  "key19": "TxTT5X7ntr1TCdwk5g97iZXTbFXH6LaUzZwM5yb2J3vzdWktVhcFbfssagq7Wa9xJ4wSZu6LT2RW5emMJsfbpjm",
  "key20": "49sEP7FLP1QGfre3duMGVrY3m4t3bPn1TXoypAmscT4uVX219PL2eWCtj8es34nSH7wxmsP68xeMf6RzHUFpzPdB",
  "key21": "cBHeFjWb7MLa2Sn4fgdVVuaRLXefkd2j3XAWGjr95TesMZaU6RVoNykhmGYm2nEAaUKnqNPvue54MWPh9diZfLT",
  "key22": "4nCoVsWw9RJ9V8PJ9Pui9mj1JoUPrQErq8venP6JPD4i2cNabofh2SvEC1c35athHo4FCTqecP6yQEyDioT7Hie",
  "key23": "2CUmVhZspJYh8b6YRf6Tk7V57rxWMDk6dWsTb1wSfEVcpDwZAavtt7oeGP4sx9yH7XGYggMkMLvf9XA66g8vb3P6",
  "key24": "2rnY7kxZ3qyCUipERmfonYUVh9jJQkbdnBh2F8ntpd3Y72hr3Q6HKfrAf2E2D4chwyavNJJgibhtKJwYeMRvBWS9",
  "key25": "2N5dsSNSxp6PK43X6ECUnngCB7anVsqcFNMDX4GAMHoVbKacJzTC8gJ9McmFFLeNvTs5hZ3a7tQVPKgRKgvVYNVo",
  "key26": "3mjMHEuWyNt74RHibZcCYygff1YKEfmgMDTqZKLhFi1AFs4yTxuQGBB8qoECSxSWn7e3dwtrFmtqJ8fPscXGLyvz",
  "key27": "DGcvWjiGNMS1TiZpMAG115YHN2pKmLAY3qRXdKkYiCbjW4spsm2uuFQn5u4zentWwadUmupwS4SMa81Pnja7aKy",
  "key28": "5LU6GBKLW9qynNFtNyMFjhxwj6V5QicnEs7kEHLu3nyn5NNJwinsaMTiTxFT6ZxxP4o7MLeDY18HVE8nga8voScQ",
  "key29": "xfS3V5KaFKnr8zFvSkDk2La13f6undJtUiqxdW96JKDumsLS9v1ukDTRidEms9vJWB8SSpCQ1kN9p7zNDDCufBQ",
  "key30": "4S7oa72gizYBtnhGsaAeGQefugKYiEmiuzLZz538HMGv5TNHeLe6H2861fvttyBkVw7p8hyVb5FDnmdbF6ypXQDn",
  "key31": "34N1NXJVQZ7Ta26TjXeyuBBr2MWgpZMia2sZC3dsXLJ4fDarze4ZZPqXqUxPY82G4D5yJ7StU1yVA88i92YatFoo",
  "key32": "3JKXKKZqpDA9iiVt1y44gsWP2iJxUw5XB7QWLuP1dPgw1UMxgHyLqjzcsFikoETnq4KGQUZok1XdLHgcKCxc5bfk",
  "key33": "3DuxDr9i2D1B53qZ5zqHwNB6EHm6i9w5RusidyVTpsnSn2T4FaScufEJANbQY7JAYAfYrKqQZhpZtaMjQyAqKtA8"
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

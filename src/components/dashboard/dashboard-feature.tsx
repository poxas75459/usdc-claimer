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
    "2w3qn6w7nCrKnVaSNxcQYvCkbMct7QkutgriEQ7iiDqLtVWFGmyfCBc4pqqFGniwfue96G798yU7TypYmDtub6GN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qbDyUCqhNxe4Lc3YEj8t5p4WrVn1nHiqLRmPLqPL8dkFDbnia638SHq9yCUgevvzgCizdraWYUvXPsaxf1P4wga",
  "key1": "5uATFdwtSZuGkWB1xT4TwX5PZ6JotrQTy7wGDFqfS7BGQcDaqcdUv86zKUSm22byRR7zeU3pJae1xidpdvehSEJx",
  "key2": "5QKfY7xTGHc7MLQN2uxGrri5k9BpaV5ZnJA6wKFJ5vP9ZD5LDszUGodK5Phsbs7L8PDJimdvNuSwUF5wcjTdtG3c",
  "key3": "2RNbWLCBxou5QQQaz2JEMT2RQswcz8tF47DU8ZAya6Urxosaize81EGB63aQc3fr7go9QcyEKbeY7sRy7gZtDAig",
  "key4": "23ZBdQR6huPVvNT4TB9JWSBcK9qY6RrheoHaNEnYisvG1VYjU78DW7Sjw6oXdEi4m6gSYANR2gs3Dr3d4QPCuN76",
  "key5": "5z5FKUCcF7Kc3XNgSAPRXvNskETeJD3Lzg5rQ8PpzagHpFfZgptB3XptmrwWUjgCh6NVk7ztaPszgPTKaKin7oRQ",
  "key6": "2myyzftnGSP1M56Xy39pPYXZCzJZjNMcnjrCaCN7cAeJoLTiQVVUSm9FB4pgCCwwzTtyrUx3CQw4sW8govGfcB61",
  "key7": "41ZnyvFGEkDZaiy4vf5AaJvN9sEDGR3gjvjrujkudYitBBoS5EoczWGKnceJnbndxpLBx7qhVKXbB1xUzYftduU1",
  "key8": "QijSpu9Bu1YM137vhJeDQ5P3oAdxp58CUDdBZinemTTbPrq6pki8YUUEMhYqs3R9vXvggehLvVNsrndTvvQA5FY",
  "key9": "3KVjRkQgh9yc1xgdHwXoxdzkRMH52vyGRvvvc2h47k8Cmz7xu1BNVRwTgXitmRVSSHnGy6KdNEJPFZ1jCricbvES",
  "key10": "FJ7NZgyxnmgX3QPJtstNkjGzDT3TqnYcYyP44p5eZcMMa3hgi54AxHhUwtaML6gQwizLcLiJgqFPPUS1omfcpFG",
  "key11": "2sMxwYjEBWHsLdZooFQ6zEoz3ZttvVya97CpiuRCY4b9eTJue4GpJ34zi3vpGKgG9eXxDEFcL5zjVGhx4Qf3x1dp",
  "key12": "3LZR55B5y3tyhFbA63Z4pkNkSHjibVqS6ag4uTw2cYMTY35bE1hqt7iEFoPNw5yLZ5n6RxnsuT1sRftTFMhbBn2H",
  "key13": "2FppyZprMLbTHBLR56kDudZamDLNcUBN5nutj35vWy6jdDPZowfZqZ4AZv51ES8gXGweTo8tYfHqwF1xs32SzEhx",
  "key14": "A8WqWVtCXTrYvdWUYgU3PwfCaYACDvhaioWouAYDEnoSiAfv44fDnB8Zga9dqbBnfVyXpHLLJH9diPwbLGqGzb4",
  "key15": "464pUsV8Kbi6VFUrRJ8CroeDyWNFvBvmne8Zt9t9vHCEQDdAvcRnGD92iqHc3yYr4gBtbBDy5QQGCiywcAfaZzdB",
  "key16": "4SbzuVxqUHhSbU6hya9DGPkdWM71vAgvvEfL7H9AnLH66yKXry7AewuFV4AuLWN1edkWpzv94svLAunNvuQ2sST1",
  "key17": "2bxCyNRq5zgDUdwwaT2BBiHju6UBy4L8W6NFeh2nwV5mm5kPqNkFa6pxRJDV2n1X1roRR4rA3GcpA7EGT6TeXEXC",
  "key18": "3xXR8nmwJRZzeKfMTXxETbKSucmJ8KnBuj37ZnLEqSwrLyTDCWs99kHjj5egfMYag7nWRAtMd7jSfgoeqZqKEm7Z",
  "key19": "2Vp3VbPGRGSnnded5VY6zwhYtRCo746VwzjgsRgu3SqLznBgYrj8gc81ERue2syA9Z46md95grdkUJmghoU16nwu",
  "key20": "5WeFK2YtgzWV2dWaUP9dywCoHBA9hh8oiwjiRDYcn6GThkQU1CcxT4SAT2EFCX3p2i1QCHVnKJEYmJLHcA5sBit1",
  "key21": "2tePzZF4ibGGDXbcLYUufPEvc3eSPR4QtMHUGEY1x9CaFmcn4RRXKnarxzmntcTULASphKVR5g1PGqJDWVdLda7",
  "key22": "YXYTYvGpJs5VUjyneXiP89FFiwQPtpoMP8Q5A6n9Y7yMSdxeUJoHmdMwMGbNpUSpyLP9cbhDDt9CyUeb6mR291t",
  "key23": "3b9BxkZMqSuj5fbeKsuBgjX4ED266V9jyVq3JWSpK7TtZK42d5QSZf1r8g1UkJ4UxYnRU7uf73tMAUCCC5skjyKk",
  "key24": "r4RszdKuLdM87LW83aJ7WFg6wEorD2kbHDXJyKuXhGnCXMRZ3VA3SCHWjTMtupWDA2xMwG8joJPqiqKy8erGq2T",
  "key25": "56pbsVvW46D6GSmPqCQDFPowjHRpXnUjQEQqACLEqk32CHMFP2WKze4m4r1eMraRY4zHck5MN3oHPJrDhFVBtoA6",
  "key26": "62o35VRr81kEyj3RNMp8LVgpLVxx9AhbHwFcoJQDBZDYmekqGKdwdjmfoU6Xs46CmekZ8WFGNpKezpCafUiDUeJh",
  "key27": "32qsPxUarL4EobLPYx9UZ3JEZ1mWFV4mXDLS2QAPoT4LvqpWxb8gsvE8Wgyi6rFC3oud8A9rhPchJn3poCvprpkX",
  "key28": "3yCM2V23w68G2tTzM37Rt5fjWjXfcjH3m9y1h9k7UsKhPVey6hyJ5Ub7RwTerjpRtak5HyJbaSqLMLvmtff2jpuT",
  "key29": "2j3kS93NcTB7QeYjLYUXfq3jpB9x8JpkVpY9nNfauTqbnsh7fBVkBLfFuspSmM7SSuHdpMpuTT2bKQAscYkQhxZp",
  "key30": "4csKwxQf4khHoAfzRsgzuMQMSJpwSKTxJcyvf9V4QJLV8vK5owQd2i9qaaz8wyUmbrdMXZ3fGMxWumsFLsuBsjtF",
  "key31": "4Q7mURbj7QL57K625ygH6XjwfMFGhFfHFvVk2CKS81QXj8NogQ23vyMuPN64c2cdqQb9cBwZRNtDZyjTL4jverEz",
  "key32": "3LiAUvND2xYc4RqpBwkFNUDhWN9B7BjFDUaPve9hc9qbfszPtg1SiJrdc1N4iKFRyhfMvpWFVhnfuCHdo8vUCYUh"
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

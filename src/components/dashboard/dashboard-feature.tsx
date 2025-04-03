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
    "4v6NhG1GdgPJzMniNv9wLJ3UaizyHoKrNamfD5gDTx2NGqdNaeLUmn86tRwC5PafWWZwcgwhzMwpPL1zKQHnNk5c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JUy8tGrrQfdNSx3RKtaMYTFJN7N7du6XXVH7sjdko6sq7m6C1W2i5iNMV1kAsxTvaxrKowYg2jc423TixGm2Pdk",
  "key1": "5qsK6fBQDBW2YimiHzcm7T9okbraFP6BtjFkVqqrWhZDu8MK4UyqsjTKZLEZGjWcRgwxSygD9aFvX8JKqcymLx5T",
  "key2": "38G27TmkcHSEy1LdUafP8yd8wpDDV5JsWCCwqtvtfJr8kC5mUTgZ6Uuu1g98sXp5dMEyzWKsnSQXa1Z1dmZ24ydn",
  "key3": "4Hyuzbi9Ue1o44ebefNRr5owNtQZgegS2prTfefco5fKQE2SfHykY3eMnTxnrQ3EAX1WqwQ4LCiASfTso46pTSp5",
  "key4": "2EHPEWtAMRb1pPmSH6xZvyJwE1uzSawcdvZ97j65w2FPU2rqVhyA3PrUDkHzYk8ArZcz56ViZHJPxhZKYDByJjJg",
  "key5": "3duina4MDJgPrYtLrowndgUQLiSCcUcqkTNLvF4UymMZidozoaRvgBNvTr5HYjNWLPDuuvxGCaVqwCuZ2wM4ftJU",
  "key6": "4AuhLFW8yTEZ6upcBbnqTrivzNrgaF9v9BBejk7Fn9FwxG96qJPz1tKWpt61j8U9spNN1dECJYmEXfKnqFRfCkPL",
  "key7": "5HY99KpyaDAiJxPxcMQzVfoiBJ2vuiKSjQEK5Q2CTKqNShadmemaRtNptSZk34pzBfGNPsPk5vbf7RqcV9p9Gjt6",
  "key8": "2aoZPXXBW1K23VANC5GsxrcXqzZVTAnHHdcUWd4C3PVnTTq86sbuwgW62AuYJU3jRvukCBz2Bks8ZwC4sgNojJt8",
  "key9": "2EtMwhhkcUuN81mUJBBinqCEwiSDTYZRGNhaAzZuhbfsQEov5EPkWLshd71VVamSVPpc5eVXqTfKP4TSAsrChTj8",
  "key10": "4GZY37hP5SUUSbGNpHmmfoT12YQ5xQcRujkBURk74HdXzyaLFUG6C8jM9mSyN7zdqT2LFw28vRnPnJLr5Jju2t5p",
  "key11": "2QyRqHvXFba3UmFz1xd65eBc7M7DpVfXHGxj9RxFvAcRdgEgCr15wZwtnF9hoZPxUmhp5aDfMHwkcHUybMnde7dC",
  "key12": "2RmHJD3PgNm2WR6P2vaRH2GqUbk8RjWruor2HvkcEvdHKqgKMU8uy6fvPQpfuB9swNgwbMHtPBCvk27P3r4cnL5f",
  "key13": "27CFhe3kqfVkvAuQmPk8yX7rG9aV1bQzcWzaA45t7tNkHPL6h8xiUGeDLafJi4gMhSvk9JkATs7GxaumLVT19ec7",
  "key14": "wWSQwFJyjQN8q3ExCeHx7aSuRb3jb14of5mbVeWZJsRwHjHnUAYPJKnUWTX2yXTtQk7LWZWr8R6xTqravhjrH3r",
  "key15": "5nzxX5xbXW8zBUWbQE363BHXwkncxiYdr6uAkYHXw7PLC6xEefHkCuPRayhJMwTyJniMyQToTg89FmhHXcUA33TA",
  "key16": "i54ca8heyCCifPT4XXBhZviXVNx6Mx5Ku8qx5Vt7FnuA7ThrVmTGCnWfZuwyxBJzxTUrqNukNa4iekkHVjCfH91",
  "key17": "5ACoH9JVeoxSxGj1vUgMhqgrcCNnKp2BeiVHNGNN5BCZY3pSmDydz7mQWzLJARx1iTyvyxvbLHF6nKnMt7hEcbzA",
  "key18": "2tAxZLFKSx2o8QfrXKS4XCC7op4i2HvCS5Pimb9nRUxq5NEb9vRdQsr85Q6PmBGMhZQa5Ck7xkvPJp5tWmcP3k3A",
  "key19": "Xs4qdV7zqAoW7aeZD3UtYEyN6xu18QAm5rnSMhkgE71oFYUUmZHDxTDVNFnWV1a5bq3QsqAT71jJNrQ2HbizMgU",
  "key20": "5sK8T72LP5qVbD3pUy54mp7wZXKeWoe8fw6iQapYQXYhFczgywzxEJqy5ASB8h3iWAzSrBo82f58DyB1CTjoAKWB",
  "key21": "4ZPHMwXeU24JzLot8nuDqL9HLkhTSPzzCPaoVyCcFf9Sr6jiZmvekdbtXEDigTm6qRnxcE54kifcTL9oZPY2stC9",
  "key22": "38DHCduVScFKujC1enxNmCHVV28ExT2A7rzrmP9x2JHvS3LEpmkF1Bquix9mkCyQLDPKHH8xprJKHDZJ3UXF9WZZ",
  "key23": "4FtatVU7mesKPa1kspZ1QkipwBhTWkGCj6867zbV3QBMwUFVRSRbiu3Y7yuTUjV1CL5tz4oT48vcQoRrMGV1htFo",
  "key24": "3DikXnU4Tdr2fnKt9YRBr6wi47iK3dmduJTZgMFYxSKoZs4GRAHtur4YogwUHBt9rf3TCcGMaGLDJ3CVH21fqSTC",
  "key25": "4d5iYoYEWc65URPbvQQxVyaC8Anisx3X1QBpa58isbKVarRHMr8B4VfUHKzHAZb1uebqgAVyYpZqgnud5gr6N3qB",
  "key26": "3keJvtTwkRLWFxuhxmreCnkMev5LcuG9xMYFBfHxZGq6woUSqwyG4sioytEFKgG5UFm8qMNsrtSdiqFUDkd1zxW2",
  "key27": "5Sh2J6TfvyA4WfmGx3i18DMPuLJN1ThNBoE5hHiF9sxxbnosSfsmpA5tKsjf4zwopmRayDCyVa4cYtqVeacaQ451",
  "key28": "62v1fHgv6Ae2GYmw689qA7uHcnRiDoyEnEFNCGZkPacfgTfkqwiygfoBkF6g3G9dWHzQdfZ4g3gFYrTSCtr7vjrw",
  "key29": "jr1VJtF2jAATaGY6tNEPxuzCofpiX8FzXrzHtNcNx8ePadSdHo1LBHeoujSJv2yES1Fttee2kLjScJ4vLc6cAgc",
  "key30": "2eb81JktMGQ3WWE79LzeTetxjF2PHnraJdDuRp2mcQxb4S7FU6w1axfXkcHgW11TBFZU7X293ikDrAJajDEJfhz2",
  "key31": "63RkeYtpY8ateDQRpvM4e4U7D4PmXAwy4LmQmxLB5GqUdZmzt4dX4NkPRCrNjR8EduYfAxx8UaFZGQ8Y86dLNfb",
  "key32": "Y2cuAkrCP8uSoeMG1h8CerQmqXPqcYktL83ZuNdEqCYXzWAAsRnRAJBUwDxLYoBh1i3G5HuAwVXe5yEVKpEV1Rv",
  "key33": "37GDiX3xKZ2tvxodynVku4WAxiUk1W87pcCyh3XcKZgA93hGRdTJDK5iaYQ27HthRgVSMXbrLTU4v1SemePAVEcz",
  "key34": "3mmLgpwUdqfCAD9P2Q31wNJ1Ms5mwgM1MXQP8neqPEfcWjyLBYEG2L1ViKbQ2LDPmuFTzrz8dYbHJZZAq97Z7qoX"
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

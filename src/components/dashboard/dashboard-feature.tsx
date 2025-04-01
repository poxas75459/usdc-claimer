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
    "6JzK95ayriZ8i2shwbYu1DziyZos1VaNXsV2BuiXuZ9NLD7zDgpLCdxLnZ5fKvNws1xJE6jU6PPG9kjeMvTavUj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mHkjYsZEjSgT33UYAqfxL9Y5PVBm2Aj1rrziWLx75sEwRQp6dkqimHippgjHD4Mt3nfAo5AXHNr38AdFFjA8eoP",
  "key1": "2aeeU8XMKNY12MLxSw8S42B4SKeSZYYD5MsDeY6ApZ8emB5zSLJD3UAcQc9Kp7b3EZyPq1QheebYrVTKca33vjgf",
  "key2": "fTcjSMkoGtuWFAnXuxyLUGUKUy2yt7bYNgWmeTtrTxZdY9TVcprjRNpCoasc2uBVvdSxvpMcEXtkcaq183yWcnz",
  "key3": "5h4w4VNtQM9QeeFSvSebk4K21wMhxf8Mv7hnH1MpCS7xCn7TKhrGdJ6U2pZSdd1eL1hjzybvEeaZxhj4L1C2z3Wj",
  "key4": "5f491p4y2FJNaEo9uGVvEcopzGRKVqHX4fWxZCTLced9ke4xLSCLMVAXYj7QfnvYPH4XsvB5skzfSapm1RewF5PZ",
  "key5": "tMNPuTxk44yBJLJfiJRYtzVJAqVcoXtb9BRrTgsn4yLAoyF6rWRUJB2W1gNgL9gZpRT2xzsGZyVYZDMEoags5NK",
  "key6": "5muWJBo17SMBgw65C45Pop44fLu5ZxFciWSNQuYZ2ibwMGzBFsY9ivyTegxTSoQ1vVtgNpmCUfemMPMT9jkUXDRi",
  "key7": "62AC9MFvZrjdSJVLJgL8bDFDEeHLosbgbt7zs5oMGc7DhMgM5hkRRAPxNjQ5w6dcy5YAcxyayxgP6b3W8kgvtJWU",
  "key8": "3Teq8EboHq1XQgeyaHRFLtorgj1PTozEhebyrVgj1eyNQKNCcvC2aRU95hwyv9qoKdsUbYtUM7b9hbrwkVSRfQw5",
  "key9": "3ZahFj26YzwGXTB6jQyeam7gpPaFm8175eLGyNWkASRSq5TRjJGp6X1sAY9vhq2Y68E1aCgPTwAEBhMxRqJs86pL",
  "key10": "5yLYVogNv5y2qKypgaTPBRbRscREjJ5ADjDmz2uKBST6pJFqBFTPJzFxLowQn8SRWhYExkKC77kBvYv4BhhYKy8",
  "key11": "5RKdW5pxztymp2GNCeoBgPgcEeaMiLCqs9fn6Y2CjbGAhP7uUqMLM4yEaaV18gAAAKvSA7gPKAaVW5Z2uQWchfy2",
  "key12": "5NUS8ccxNb8ZCBFGrrJtiZrdhURexBiqHSdPhe8bmUdaqB6ssT1XTDjaKvRBfKPbZYBoHecrSbR63E19H3XajUCn",
  "key13": "2gHC91nKUh3J9aaYGygcTaMwoSoBfuE4BVN4cL2hCHrTv4dPsacZUaP9jKD2Kfcmmh3t1SbxCam92UL2TVjtRznf",
  "key14": "W1KktXweig5ji7WSkeJMNYJSj6z8rkCr2znw9SiYdrcPubNC3tqtD9FnDd4JbUPHFpZvNJYVHQ3ywXtVXnHViaY",
  "key15": "37MpYGX4A6yafekzCRcm5JoQabid65yKwzusR8qBdc6WgFuFd3QJnjhLbt27So9W3mwBsqtdfwyQvamveA73L1Zq",
  "key16": "2TtXzrGkW1RRHumNvwETbpu3RFi2RVQCcPdy9YAhxQ6FwGjfn324MQhH7mGkn1y4jgBsuxsAKuphGVmDFY7Ae4f2",
  "key17": "22XTzUnuzB3TDYNcDEigFRKgrTehdZsbJXfUhKNNS5HApyo4hkPG2PjTGTAo4oYeaVTn34uLB8idRivpvJDwoEuQ",
  "key18": "3QCJ9geEq7m322ZBg7CUKHkwkWoKPPWbt1DNEdtB5rMzgCmYUzpNdRuVZqqE9aRLq3yVsB5Vn2Yj4QaS24DJFTss",
  "key19": "5gYSLKzFv8VfZPxJ22tQtiVLXNgCEKiA3T5ne5ScdPudPviydwQ8YhQZZas9GQZaKcV6vTxY4oUeV2W1ZrwMxHLP",
  "key20": "T4Xrh3jF9MEgcazrxmokKSRsaoFRJPTc7i8YwTFtVsXSL5vYko18f6SBhoeY4BfA2wJmAXpPvvnafZveJWHwPCP",
  "key21": "5NRMhKhbR5Em9NdhkLzL9i96Ss1GzuZH5HrrnBFXsaTawAsvQm4chUQwoHwpmh71WoVMk6Ni65iCmuNLyebiu7Sg",
  "key22": "3gTb77GLXChsc3tBdPZ3B72cogZivKbVki291KEWEz19ZfH7pRvYhNCkvKKVzio9bcbKHcYTDzdBjmvDcdw7PGm8",
  "key23": "3BUD2tKneoCxvfSKkc6x6CQpNiKCv3Hh1KkMLuaupQ8RTQsjbJ3fNeShKwE1NLWhb9xAuHG5nNKXvEVE894JMRhB",
  "key24": "2M9Wc2kTRrYfkhnG9Z22K1M9MeajchGMU3SutMSZbdkoseYSkeGohQHrrQdPKAw4UfzgXnUopM4J7Wsv3sNJCugD",
  "key25": "38hooPch5aYtKLbh3XPFrnzb6SHGTmRrgzbARC3WjnaxuBGKVSFaibJ5i4TXLVrjX7eRVUj3QPjghgzZu4s1QTkQ",
  "key26": "34wfkG2vUcGaA3qsEqLuP42QgcBPPoADD6DGFbrRjvUrvwYYTDbJe42CFCAQRK2Unh1pmzRTc8UQqra1s4Eam1J9",
  "key27": "5t8tVgrUaFitB6Sas9XoTqib53x9McUnBiogNEcsaTRnXnZ9dPHgCXt8XeDypMQApZFh96RKj4md2J3ECqYoeUsQ",
  "key28": "3LkZTdW9Na8aSb87bKdqoMBHNTZqZWDuDdYSPRKVQW1WrqmTc3aiiDiRom46kpdwaTvYmVmpLD7FpRPPenoAgzeA",
  "key29": "3i6mzwjiwrZUFw7GT2wfj3jvWkrTZD2wSEvQWCgSjRZHL6g6aQLR68JdDQrMLCtGyVrU9URmGk84AvUW9ABXUwTJ",
  "key30": "3kGUSfYKnz2gBScTGsnZ6sJjy6aLLra9aZ9siFXnSHxAZ2WXDFMep67s3nF2s9oaVdoR3VSraV5UEYgEjpEd8MAP",
  "key31": "jXKnzkrfvQ9b89DFvXkBng38KB7kXBruEDL2L3XcHsgL7aeShwLdA2QxuusFYsHZ8wsRAQpndt3QKCQm1oqnbhR",
  "key32": "2vX4RoauQpMt4asATvbMyXMjdq6g1inK2DPpKoV87N4dutn99Hk8xh5cb2fAdZ8CNkmWPadWmqZ379r9XqVe8vyM",
  "key33": "3zQMmDi8RfuhqunCgf51cEbFbo8sL3PFLWJDptCHgSxJiqZytgxnWhxWjrEfqDq94oQRWkkBLVaVcoyBaA3LbSkd",
  "key34": "4CcupDWNb6dDzfWbYPDpgNhqkpfFZjSzRatwA49DNMWovuw79Epb4PeKH8kfcCMd8Yd1B5guXJMMfEXwMmLtsJkN",
  "key35": "4bXTPZSXNjjCc7PsXG8jpHcDwhifNcoaQLjwo9UV7JjGEmKQiatLpyikYN7vCc5KDugJZKedchJspBbmpUBQkKCL",
  "key36": "62DroRoWJ18FiC1TfzWxvqJrH42NNiC1Xfiw3vkBmkpZhAHHJfhMbyh77DwRr2f2EgVStXGbxtimovXGPWQPY8nF",
  "key37": "5zatW5GM6WiXhRW5eRoGfZQkbBZVaRveRAV4LfqPJvbmBhApqvJBzy6CF63gMTQSMGmFcXZZZPeHCFMNxsR51GNs",
  "key38": "2m1PGe5DwWyzvcDS6XQdD7JqXPEHyErCzAcCc2WZ1ABHD4AqrEcNLUSibReQN6axk1kdPppgXi7Jin9sAiyCcNp7",
  "key39": "EfaVbfX8hrGB8yMwdg1bKcots8G3Cg3zQvtW2s654uPNARfjj4QWt5zgFXtFCSN66gmQLAkXBYsHW4HPLNuTuUX",
  "key40": "5CpUCB52DgBncwsKUUnFfcU4Ras433bJXxcU1FJheqTAbxJo9J4skU8CdUjVeGR7BdmFr7brMje2PHPHMZCrHeUL",
  "key41": "69DGttHyjwmMtSqyGU99K6nP5Vv5ewPCpSdBtBHzw2wQRRjut3HQqbZj3vdRsEQESoBJwRMKWP2WEebanXefQJ7",
  "key42": "5k6YWAAf7FiQBZFej7299tYEi7anbR62nKuQ38sKuJr6fC1hZ3AVo5pCdp56KKcrQM6K3R9L94grWgDacKzyJfXn",
  "key43": "4Y6S9Lr7vd9sRQPKB2gqY7tabqkbSEws2zst35VLhJyaymAjP5KjaDfsqDjNUZc2UMEa2aq1QRG7kMfVu99HHjyN",
  "key44": "rqQozDqe8ftDgLPZxeLg3iRLBr6mh9VfGSUyzKpLhcRZW3t5GxBd9mnr6MHHAQJj3fzfdBevA9dmVEkMSgojSxV",
  "key45": "2rzQStpMMZTAVKV2fb1jGenbsewa1m9o6HSkNU1KdSrXKvdSKSRA82Jr56XaY3djkS7QpyTHzgguVXjRoSqUx6AS"
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

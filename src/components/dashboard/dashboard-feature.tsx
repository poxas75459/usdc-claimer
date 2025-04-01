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
    "646mcNVDJ5Gx7dvEPY3t4BzjChm7bd7tMofbgxGyviEChuGk4aAPKUKbo7nJLbD4sbrcVboyXb8TJMgFqpK41Ug7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NsNCkEgtJxzkSyUAFQF49tJpDCBHiqFtRDpF3oq65tmgTB96dDYUAFsDbnbMYjZDGoUHaSmNKLydx5ptBvDsZqZ",
  "key1": "3ENmr1af7td8dVqAvS5c5aA5WRjAPzgrFS26A9g6mH8nH6MxE2iXXmud25hppXnj3owiEu6BbZ7DbfmQyaCyWCLX",
  "key2": "331BMEmxFzZGsMAPxBX5tTE58aMRRZQtcW2QzoQ4NWtfAhcaiBWPVLteWdzhvmzWFe8qrYYLnTffKTpFpzKQRG7C",
  "key3": "3E45CMtqX4pyh3CKAmfRmGGMtZgRH74nuKhuvMb925Jb6sVKB7k4JaM2HTk7uouu9m8WEGCumyzmNQ2arM2CvkNa",
  "key4": "2GG1uSG2fAwJSxrBfv2uJn7in9DNc3sri99LbiUsyPMB5U89gdqjsTZTMkS65vH9KrDgYEb6SCyjtGaKr6xUh4A1",
  "key5": "3BM6wWLgwWE3uf8jKtuaP5X7kWwWreV5w6Q2aPZYb3Y3gX2bhzomJziA1J7QFoZsXR5vV48WQFUpD86kTxM9L4r5",
  "key6": "4si6TCHS6TUpJ2CZbnwfUg9WLaHayunRzS7R9GP782PcDqtsr7dY9N36kQtMu4kUsnHsnvKTGy87mnVDBpdTz9dy",
  "key7": "2thBjHpUFFk5hpGMzUJXyZH4vD7uCk7wwoiPLv8PWXfWDuYqGNNZcKRU6pcrVa2dCdgAyLvEocvJWfM3FXtSLP9Q",
  "key8": "3XZogvxbP47B5AdcJ1Se3biqdaXYrqVEV3cxDa3TEPW1btBf6Ym76ETk2sCYozQiNnPApwg58TXZh2kBxmh3wMVj",
  "key9": "5zzu8LdtixmQfZtFW4HpW5aWJ9RDrha4MAWbLt8TAvEgDAesvYfZnyUU3iBEHFCW4JuJPH8mPai2jFnAkqRkTD8Y",
  "key10": "HwWz2cS5ZjAmfUJCyDmpQUDvdLF5uRJs1EeZS1jp4ZFKiE48dfSwtFg6cnH3ty1pvF2Ha54JoRbEosvwdvyS1AY",
  "key11": "2dXECsryhYXQhqHVdEzGCxDy6SUZWo8XApsdRv1AFXuVVwnJjQCJYt937yuHcRb6q9XDTBB9MeuniAwYm3z4UCEJ",
  "key12": "5mtJsT3uHwg7s4R6SRSksDv9asLzStD7K3PyKuofSJ5oWZaX3CQfsb7cN9N9hWur5MLVZfjeWGDpJtDTjWUG9Er",
  "key13": "2wgBrWZQFpcBSCPfTHkWzZto8iywL7WHRexUdEMWwRNMJnTLzeD59n9kMnnSqRSZAFh2DU5rEdi19MLpPzfKntu5",
  "key14": "3iRJDHsR8mt2CSjTPcGwvszKjL9mmhHA5TLGUku83sh3v49pfaJi7ocr7TEPoXTTGZsf7sadkPD9VHnvFiTgTr6d",
  "key15": "5EreBorUpkssnLGi4SCdrXYYw8W6yfatXRdQeeaas9kxMTiY1q7yEMPxctjR8v2ZtHVfRfKRwni6jXrDxDYyfUbL",
  "key16": "4oBQjHPtvVUhvpPwd24y3LjjkQE9exyh5oHZWULNGoNE7j6KWGohRXQCHdNCCSRcmqfGEBiGq4r3WHCh6RJiTCK3",
  "key17": "5VvV6vUfARUf3SJFRFbwj2JXtTG432u1EEZCgeTuCpkVuBzHdYtv2iord3ULEveVNfrCw78aDnMiUjSF4r7qJjcX",
  "key18": "53UXY5bJ6aHavEqUY9YGkNG45MQuhCS8LHvDrLWS2vRf8JpSEoiWENTX6ZosL4xfr71nEfjuiHboF16iLphhJ3d5",
  "key19": "57tuD3F1ESFwFq9CP7DV1onfkGNUwcnNw3zYesNPxDRagewxKJXcURgZiKMVWJRepDurpmURbD3CGV8kdfZ8R9Lb",
  "key20": "3GgLqQYAcfPHXDYZXV1YDdoAonfFMBpMMADNJnq1AyiAFQTjqEexac8FmQGozLLrohbpmdQkKKT4aBRpRA5F4YmB",
  "key21": "2EiJx8LjrMShpWgM3sgrSR7hTkxHzTyjBJGUHr8ACgRXqmPm5TTRgGZeukXxLXZKTUr9uMVJADQHdDjcvby8kbzc",
  "key22": "2ziHPPdEjMUPioyzfKaUyZRdDpaNjk28Lmg6ujtqaEe1vnAUCbwUtjaBqTjyRNbnxfE2ccmHnT9qjqd43jDjBT1H",
  "key23": "55ecAPaYfeTgW7qvqTcPZeQdLwK4Gp3oqBAR7mLADeqPCzRcqqZUtPeZTyY3kYJDzKf2DNv6apR7vDsdFhQ9UEMU",
  "key24": "2TfESt12Ee2SNZ1UEC8cdrLExQXTAsKhp45ijfCodcpcmzjPKGehmEKnvwjdsxf3T1Q3YgHnPTnftKddm38tyBJ8",
  "key25": "3hkSFKK7VZDakLvH6wb5mmQ39uzbihkYMetTiMhCgyes3Cd4p9wR8veDQUKCEcmsyoKN9sE9W4iCALMPgApdSkRe",
  "key26": "49ALA45UL5QJ88cHajdSRZGyfhBiUxUUwoqPBGn4eTuFKwPCuqssYSZgYQyHuLRYeZfKzF6hrWqYxuiLGgQp8nN2",
  "key27": "4CyhnHh9TmmG86cgHaZ7w69HuvyN2vVyxc4KkDaW2WgsTqS9pRt4StoK5BfYatXic1cqVEqsvxybfhgCbuG79LYj",
  "key28": "ToTk91L9mDNNDoXzSsf2Zs4Qn2emZ2TruMgz247toKTpicywzURG5bgJViJLQzwKcMgxHK2K14G2StBnytgPqbR",
  "key29": "EgwTANAdEniyAWsvDDhNGoLEPzRzhfUsusED2YcwugUHqzNQV3TcEhctBW7iWGDRX1QkvpC9WTnSuf3XWXbBJvi",
  "key30": "5F2wsT5KTELXNk1tytyam5b9BmHoq78dvUJbuSGAPNbGGHD5218U4pjFxAYygxKctxW7MGkBqqdRG9iFpcrL5YuX",
  "key31": "3hvVFApB1u936YL1xYGtFR19DKNzbqvaYtUmXBmkpF3MevHG9rKtFmjNqktRZv5HvcK7X49e5kKdQAWJkGAyGvUV",
  "key32": "57eo8j9VmWvj9Yzz9hZnFrp4UQ9H3gZ13jtYbf2K4uDEWgc7nodqspGi76SLqwFN7Rh1c9ZFBxydS7yrNqvGfZCc",
  "key33": "CA6cpNgpwTdDr5cxKKiYECX1rAM8nit1sq4fkVM7dNaShZLvhXtFpBMwvmrS27JekjhVRx6muypTUVXMZtGpdNP",
  "key34": "5MwtBNKqoTKL9MmRoGfBut3fEABHd38X692MVV18C3iu6Npeo6nsa9Kv244734vQ59vCwvcwsB8GeQy7w2NjNd9p",
  "key35": "4V3rMsyvRb9icbjiF14orUqaVCdhvABsYdQKYZKzitK1b6nzMW1eSfvhSoRDcKyoXDJ2xKVzT3PckCKTJRwfSbVb",
  "key36": "2pWJrA1Wp1Ewbhxt3yRybTudAMwCcDGsStxkCFqZqUrrybsdLypUFzsubF4KZ7jxbSG9fskoJKhcgL2WGFJMLGd6",
  "key37": "4V8JdHUQdc8A257cNBtXJtMsQr4sfsPkUyLig9stfV7M8vLJPwihuyEv1MjGfn9saMmL6F5MWWnTKLUe1LBKsRGb",
  "key38": "4conYrAprQhhbkhKh3NhrQ3Zvacd9QE11qhXxuaFMtSygqZ5wSYdagp8nUydwddyLeSCGVPEPtej3qRmmhbMoEne",
  "key39": "3tk59gam1eBcwgbiEuq2BQJLS1qkCbkVTttf2J8LvyJ1BHNtdMSNyNMQgBbXHSkqdiAKhD4XaNKfGu84e2dnFtVU",
  "key40": "5aPNGusEDPbp6WJzhjcNHkbdcRaYhiYDGoUFd3LVbK8W3FVz9srMMcA5Mq275QvCS6Sj1DqrkLjVYMi9e2z4QuQt",
  "key41": "3Wutqn68DfppwcS8Gze1dXpB8xDUqUBFfKeHG5cnLa69yXj5bWzHznxA6Ko6LeXLETNAdEShiLvst4BbqpMx66sR",
  "key42": "35gTfQLtWT8bTGKd7C5uzw9CLy52ppjkpxqdyZ7UUWLwyV3btXrryHzZMoxMsgR1JKevFtPFDW4DesG1oWRr1AZb",
  "key43": "3nKBRQ9TqXLQexCsvQTLR1uKfnNSMM5RTAeH9eYKxpcrYXeaCdLKtWrFBnuT2unv8zhyBmhoRiEDAXXQLnT4Tf4z",
  "key44": "2aUY76bQDupiNLKUWvfa8Zo1Sqr57ddWgiYbSooyvbxGnaYrxDxgkTABvf4yFfPDa5qpTC3TdDLr1bEzTkEWSaqW",
  "key45": "EghodFGdLr7d6FfkP2sTPSHjiSSmg9c5gfsL3ng4h9VgSg4KAkvWwEyqrKTHzidGQCVJKcRo5SpnADEC4W2GZwz",
  "key46": "PWKh2mUaQPQf16YxiKir23KvsLejgu3dgoFqW9XMZhtE4JgVHvb7ondt9SJYMpcgEb6Kpeny5swLiLLLyvtGPWx",
  "key47": "3ZWmrzW154woqzpqrbsaUcmZVGKaKRnikcUmFEdTwattYEmVn6BWyJ2Qsi7xYPLg8U5dti5dVRHAPJYJisTCHo6J",
  "key48": "bUgNyEuymUeQ7nDv138DDYMi4M6G2NjfuaU5oRKZRaSfZ8ntYFiVQBg32HybQukJWyXHM7axdt9pMfAmj15Bo5W",
  "key49": "3qXC76AAr5ymFSu6neTVQhaDdZcaaKBc1tA5Y8AdxMRNqxSAk2PekZsVXhq9jLaBDyTFsmoS9HiMkYnb2DHbL4XU"
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

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
    "2JuSKV4qTckoX1J62pVta2JQPA7m5zguSkMu4WmTbjHh4eiLh4dNrfcKtfgxt3T6U1fom84k8vXa4dDvHmJFXU6k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y1cQyuLMcCPWQR4Qt9XGe8H373ACx1sw92m5AwDxx9Zkxznx3nEt7f3XyMtGTmWNk5tbyFDCM5vPHGaitcZjcVn",
  "key1": "66bU9SugSydJCkXWBrLQ8zSvtz11q61gwrbsc6677CvDofWrhHdqF3aDKr4JnBJoMQzgzmfVYEL1BXpB2oMWXq1U",
  "key2": "4mSak6oo8DaaAmry2xHPAhCGpQknNXY89GPQTE6Qn87DpZKca56vLnnwejWYjacFhpyvitUSzgrhM6HVhLzx43je",
  "key3": "adnQAYAZaPYxbxFeKCb1HNirzhxyVkrncLca8MZXLr8DhKgxL7TNrbmWc2HzCQxQteyZWcJ3E1n82wMBYh4AfYk",
  "key4": "66yfeKDKFhmHvXnNgb1mVyRTnZv9ATpd7vgVHXfb3hhJHfqDVU5UAM8LCHYw1u6x9577Psvq6rmiSDVzr5xZWo49",
  "key5": "73BxZgJJYmSB6duK5YKdz8i3ee19ZkCfD4D2CREmyWqdxeVG1f5u21xjZdMjdzf5NRBZ9SSJBXoJbq1XTPPwAhv",
  "key6": "4M49r563euewegjPqotgeGMnbZLtZCSciyrBbUvSyovdLbGFKFeNPkiK7oGCC46M3JmN9RrvkbVWsJneW6N1Hb8z",
  "key7": "7WTxySuVD4MxFz1B3AG3oR7JKmgDM6XtgyLRXagocanzbcY3zq6YNLTqmDsBRu5Yf6F83U8HyFcH3UFDyzoy2Se",
  "key8": "nVm88a8qKVUsHa1nrNS76se93mNAKNfnc6JeVe9RGZmaZFE8T3eW3PYqMQJodTD5mGyK7ZWbHdDsYbQWaN9hD4d",
  "key9": "3crM1xdodhXGrH8bxRaupTbWsUdBhSYunRgSU2V84t6nVHm24VU8JED1WtcE37iqFRkmJeBmpJavmM2xZWGC93Hq",
  "key10": "2tuEPchUkbeu926ZADbGWkFJH3jfNGBxi9A94db6qoJ3AUgtxDAxrU1HSkMZQ9XMVKpmm4aiMhxXAedbAk32hEDg",
  "key11": "3qTcgxF7DTqoVgXJg4gUFJ8ES5sZsWqBBkuLRiKiWw8jFZDevnp99eZY49tV7Sqiob2MAYXzP7Z8bXMHfgGp2SN3",
  "key12": "27qmfYiAfnm3FiiPxkKEuyAvZSFHCLLDms5tfLfMaF6s6agwfz35nM4Wi8qc4m2bXy4wDAwgAMDsnba7hu5g4o7u",
  "key13": "31hiN6g5MKssgzscwDY7eywTq5gzKWs9oGUkZo3Wqeer2v6yJvE13xwNDymHNneoJi8SkYCAWZbmNzJrFdjCiX76",
  "key14": "48uYeVz5f1zZMYHwRNETwLRoP9RGoTtCF7i1MEUmNzU4VVWyTDuqohze1BNG37WDqaunBNVeUFW3AQJSeb82n6zK",
  "key15": "5y8ContAVbwKjn1cmv5h6oGpc6qXdi5EYT8RVQWChMkr5G7Yha44E4U6LDbq6cgq3fWhJorr5AdoXkebaXCeMbpv",
  "key16": "4enSUqjjdbuP5BJSPJinbxFGEquTvxr9fLavQQyA2rD2MoVkmpUEeXrWjzGHXctg3dtKoLHYCE5g5BtxNFPodp2q",
  "key17": "3ctVwisLBrbBTk7x6wGLvaBdYs9kFRKYvo2D43FQ8Y4QCES2ngiTN8mFpSE1WUskGTZLXejwYgN9yHqudT4pDVmf",
  "key18": "xf6KAjb4UxD5DVofY78XZtfZ3AojQZWYtreGu1L1z7P37KXHFR93Uvp2VWrWXXbbiTZFQXzdJhE5uZwH1KVH82C",
  "key19": "47kKDWtNkBWKT8B2ucUUupsLZRU21UaChEBLgXcPHQY47AmTDdf2U7AJ1PQKAF3y4eLr1ntCsm5taq6ivcv5MKmX",
  "key20": "4ANjeMVZPpux4AtqXnahFHxCU8PPXihxy55sFTmdUMakW8riQuoPJNNE8NArADVoYazpf2dcFLRcjDEQHMNXpdxJ",
  "key21": "JAtLt7avJqccaRijnr5MDew25czfdRQNK8vxi1hcdKHYhCdx8B23BdPZ4bty4MTywqPnwCsdD1B93gRKCLs7KGA",
  "key22": "FFZ2Eve1pZnakrJRokkwqzN7CAkkARCd8Md77g91okN1aG4WMpNM7cFBxeW1XupYsnobRiKSLEmZiexKayr9Hn7",
  "key23": "34uunr5StDwbBJ7SqpNgDjjrAfSfaU6aCLUgooBTbudvSDT6AdN1gaegK4ifuuQhqTip2PAwSqXAc96LDXgpBYKi",
  "key24": "3GthrZZ2KGMptv9VpP4kamYVRGzVCFLprvfTwP7eJ3HGeCfaHVV6yVrCie2TozEEh2qcsXZZtXHwqVsUJdFLoMHx",
  "key25": "4vvTJwQMiY1VTdMrAw8vfHZMCcr4q3GkKQuVRENM9uLyNxqPwkt3n4zBwKn5j7TEDvCFVuM6jUFKPjnGCaWFrvh8",
  "key26": "4JPZVG9CM9VYE8NxDGLuzTf9Je7WpkqSoiWsh5HwaX6QNoRy7BMT4fDsdqMogZgKS4QUhmgLHNc6MN9nt4rddMzX",
  "key27": "4NrHBjQEHR9ZrzPm38VJojWj1Wa6THos7UQJdARmunRdCSAdTciFMPGYpfh9p4hcThHYFdu9HRpLxuaoRKEKuEKi",
  "key28": "2CYoERgHok2eKUH6mqjpKGJPYWQZnjqy2js4uL5Y75BRLdizRmyo8XnWcJgqSrsXZ9TUoE8bBEaibSbN4ChVcZQp",
  "key29": "3Cd8FTgwmMwixjV6zB13ANvwxdFvqM4beP9nHQGpJoZpr8RcxPEy5chrN5pXx1BT6LpQTVANFTLHpG9bReNAb2ZQ",
  "key30": "5yqJcA6Kwj2uN2raZbsAABJ2LWgMX8Nq15ebM1zjsxHihcYnKoLx2THqEQfSBq2XXKFBMn5R1TX1dw4eKiGXyUv2",
  "key31": "3bHGgfGYsWPyi9JSD3M6PDKtSMZBbkZHzZuBes98H7ZmvjrG8RNwqoAGz1uQ3oWYmUgsgZCDamAtXVeKZv9JXFmD",
  "key32": "4R2qy6RykTfLyvmGGervG3QMey6hoaZka8rr2TEmPz9JDF7ks4gWrGHfRe5RYu4JBxrDyAyTL1WHcY8yuhcSmDDH",
  "key33": "2HsrVxa19Ms6XmFpUjar58YgFoLgfADMCHyURB8vZYmQYuW94r1GDM6cHnyaxMrHxukw5HAQ4fKdwUphCmzJVuk2",
  "key34": "3KUopHSatmgAwjxhiwZnzQ9adMpFPNYVdr8Ynt7YwLcZWyiy1WW5Y9p5UfM4qNLFxNKMQFGWYFUQS6jdWPUrAwZq",
  "key35": "5fuYXbhYk466g5woP4ynecNx8uSWqoV3FbVspdBdim4v7QZhdn5VnF1eNd3jq6zvLsVf8uiGtmd9a55q6JKdnBgm",
  "key36": "22NNiQriom5BDdbwQPH8b7sA7nN5XHuPFxQiZ6sTxaBaFQBKMLMxLj3pdkdBUQUkF6jfHTrh3sqA1u1noSHRoApt"
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

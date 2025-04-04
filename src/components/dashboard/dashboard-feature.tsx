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
    "3RnDPsPyFmAE2HCHFqLweBU2GHSP1bZvhx4Qysw7ZtQvRQwj9JhJAJkq4ac9ACagbRV6EujYmG49CRUgmYz7mLRF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N1cd3FtqN5WARav3y3MSaJ8hNtr9bYpayxSs32FeUMCJ3v5McQJsV5RSFErrU3spB52TrzA3cccQ1g1R3nRe5NE",
  "key1": "MruYBhe1cVNRdopdkJWe1aW64MRYR79pzPWfmWuRaHawcxxqCE8nDbiraxBMF7QPNnuzikycABTzzLQG9HBoXws",
  "key2": "53brFKR2uqKP4BTpbazjfgiiXYugZksztGShZAVYtDfNnZqTURGvKdX2kpao3uURVQQ59h6A9vPLPuAntLz89y5y",
  "key3": "53LvPBP6mRLeX5uZYVabaXJoUu1xrerrUrqDsW2piWAzTPaReCkKSynq9p595VpEcaRqkaGt3VYKHS4YrgwPcz5t",
  "key4": "51JQwMrhcWfy8NKJ2Md5YMT7ziHxFt8D462RK2Mvbzidu1uQLBKGsbztHdswhfcNXadvPp3jXR5yUhhr2xLsDcNA",
  "key5": "418Fq9pkdBAwfW5aYxwZwWmcjFuNBE7cvvjGykHzrNTkvBtvbTCkjkc8xP4SxRpunMELze5Q2PjXebpDrWV1EVkE",
  "key6": "w7UXGesubNQLMSVtv5rkMvqE216sZqYfB7kHp3sowPUKpk3F5ePF537njoeRFTqoCdJNQGDAMNRAW5tyJawqZmE",
  "key7": "mpYS1NRPCaxkk3fJmDVxJy3Dh7WtstpGFwTWcF15BLon9svex9NCQB29qDurqSF7mwCh6AefaaebkinJjtYuQfD",
  "key8": "2QVt4oxs18RNsNx9z2q3cn8yhHfgurWP8iCmuRjeCxfwCEJRn6qsbvvntDPLioah2BhAmc2aV22u8rxhmofX1hZW",
  "key9": "2Xtn6Ec1DNL263YRJ8fFb1ggoH7Pfw2bBxfxC11BojPuthUypcSs7PshF7gumkeeN3acQE8bANVf8BfSdT3Fq2JS",
  "key10": "62ZUhRY91Raueo2dBcZ8HVBeeZjJ3o9cCgRDXhk5AXqH3vRufb1aKPVLoZDoQ3uBV875gru4fFdDQAYyBXS5g7CM",
  "key11": "4un8TF42BMDe9jqTFRYp6g9oxfeF1W9smNWxBDQvp3w1svmupTVuUXb8pAnEveGH8vRLp4jsbt1LcB9YEavk3saU",
  "key12": "5HGG6RvmVumoqe45dwK1kFPG8WV37KqaAYw2HHyL7FgyA77R5yxP2GXBjs9mVHat2KMQX4FJAb2ZxNcfRvReZSun",
  "key13": "oPK7MXExv3Vrp3hYmXgMTegURiRNfS3JsGrLUrDHewqmEk5hygt4JDYtApmkfgabbKV4PunjW64Eq4MiKTLkdeF",
  "key14": "3Q9U24oQApJjF32Jgy7f7Lb9fYQmFzQmCdq77EucBzxy8sTvEmpxgpFmW6sGwNXQuFNa32TixCgsN3bqg73atppw",
  "key15": "521z3v8mtRcQUo2HZCgnmdZkHwnnr6CqsK62cavESB8eEqYUvaPTFGVootReHgcuEhcvBLvzdU5LzwVcJt3pYjUt",
  "key16": "5mxVt9BAGhTz8Rm54A1EGzPSqtyHEt1V15BnP1xqyJfPzoPZMQ8VnxTf5kMfJ6rzvKN5ZqDwpjGqJaG84549s5rH",
  "key17": "62m6EAQpomqB7ooAWm4287SKDMfw56ZqPjh94Dw5ra6sDDrqEowajAAg7SBd2FakmkdxaSzNDnbg6K1C1p5XQfED",
  "key18": "5cxzEYMRFe4ZqyLHaSz29q2eGbfCRrJTYacR6B9AHTr1DncXNr5itWKASCSZk7H5YhBVUKDXe2m33BiPJ1EbBijp",
  "key19": "2QhdoV5rAYVJ2SJYkV4hUGKZctszc212JBpuZRQ7yMG28XChAEbhDcDe9jffqHyqYUtqB8hVVAWaz4rPS5VKBC91",
  "key20": "dwickqUrpEZ9n4sz7pefjCRziXZsDhr7vr8Km4mTAzwSZJbVRhTTqz4g85DQ9d2CARwpYTtr2SSwUVnE1AagBkX",
  "key21": "2hWKwRJRH5GXbkae1cq5gfUHEqxFvgUVkZjztC6eBj7RnbUXWg6coKsucPscWaFJbinphPCAdgz66MbV36U1vCUN",
  "key22": "5759jvfDvyMNTeS98dLL1BPFsiQWnd6uTSNtaZizXiFgSDDJepRti6xowGQPNyLWUdffQuC2Wxp1taTc1bt3o6AX",
  "key23": "4Q8CvLeQ8LDKADUXCdmesfRgCiMFErGQrLCF6X1qg895xc1hxj7qBEt1aW9B7uoQ2YYVhn25d113WSWAQ69MRPAM",
  "key24": "26kadSM3AXJneA7eXn1Bf5UyiTcj9DCWkfBioKN5raF4HBDMBPJBVYGBM4VP1v5KarRbU2WtDr7iv4uYAA4A2xdF",
  "key25": "3W55etZy5vuC1Ma1KbigWccrx6JJdxszNuUnBVFA1TSnZppSLRQoEvCRcZvgKQUd7WhwyMa8F8DpK34Q8EKiyF1j",
  "key26": "541FRyYKDf58dHncaJBDAxcTjiMgAJS75BwrKsFRm22m38HaCtW4fQ4d9SbDSJp4h1mrmUcdoESXTd3EmoQNFJtN",
  "key27": "2VEYaKb7Gwb3WHfNY6kRDEg7DpMTg9yGez17i88PyqDHo5MSqgCRLRB5L8qcyiDQsFf7vXrQJfUqUxoiq3wewHEo",
  "key28": "5hiNY2AezPShokhWdzdAmdDCtFP77cLEnuoYcXQ2NU4uVbVoq4HQLW3QrQ9sQTDEGeMfSimqF99A7bEHoY4GWqCJ",
  "key29": "4Mzknzd51yHmcuYKviVc3fJjbJaAFTx283nzdkwWVD5PWguC3VNnGe8djZzuxPJks4dyxQxDuK8DnjJwuZbn1mKr",
  "key30": "3utSU3iSC8bJCZKTQTc7TQygTMD86HwNBtgRxXmCEqhjKNB7ubR37TJTV2iRGpzFHTgW59ZeCHZ1fW2fiAv5Jtbc",
  "key31": "3KCteNzY1tTrxc3Pct4kzv1UpXZoEKFJHit8xVoB3vj8AwKbhV8moseboQwQipTW1RavSdPKLTKoeupvgBeBkmzN",
  "key32": "2rrcZcxbaZ9AgoggwxiyQPoxqzC1rqBWNyBWk4LntdK7iK22M3QWRiL9gWzFG1Yjz7y6TsgUTyPKqcTBoZct7man",
  "key33": "wdYkG57wea1bFECpy4VKEUQakDVPDsENyzsyPSQrSapDTNKa9jsRTy5WdTszGcAaUx8wRRXn6qVqz9cVEkARKtT",
  "key34": "fnGePiC31tCv7m74S3vU5v6zQQjtzDuMhVvUv8CFKKZc4C3xDeGNAbYqVQN3yy3Gq2MaoXg3bWz9jBfHU8Vj65y"
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

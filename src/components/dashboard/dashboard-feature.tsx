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
    "3gxo6DYBK65xrnt47iETneTDvbrSDeyLMf4sZN5i21vbpobNA1jwt3YR8q2cwqawDdRD1iw5UiEL3JrRMASws4NC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28JBAt3uRNnaQbfqieWAUVsNrnXKWdFApe3JKGeABKU42Z7FDDPqrKBPqJnAs9R9PeQ1guxHtHLnHF9gBVxUXtEb",
  "key1": "5uEGjNJqJUKP8zYwpWXpmCUv8R9e3tsFepC3y5VhEyVNxofe7ZsGPMgGBFNh2WRySDSd1XLYVWJVymhzgSHcG5Uc",
  "key2": "28jEqodQPPHQ6pHcDkjQBqGNUQ9rGP3KPT8uU8Xk4rH4FvmFPXAWVreUnKjGnqyXh1xSSsrgoVCZSwhaTpWX4Uo4",
  "key3": "49qWGZdFMZjRfzmk6YPgvrapzjvQcQ5z5pAKFQcojVtSGQoD6KvEi4z2wJJWBKTK3aLHZZc3wVf5uvBdhpzfGZBV",
  "key4": "5Kvi9ahZGD7Eje6vdiTbWyvKxUZZ8xbWk83oFhe9qyZWaufq7qkms8RDeqHHe6Q64NDpng6qfjBrg2QAkP5P7gzi",
  "key5": "2Pk537L75UmmQpyyuNiFGqVkDV6ZUA7EShMdxi6n7qkKT1Tj93CyKiTFU4mKkVnSwbWsVJn75CgqvJJWPWco7JHt",
  "key6": "87xg8B7LBatDzUUc1GC4reB1jzoe9sq2Dh1tGdv3jgPuE8pJ1vqAw3arsGtdy9mJHX6KhshkC6de1kgDzrwf4gF",
  "key7": "5byVgBzsxAdSSsfUtS4C5Dp1nuswt5jeNnampwdZND2DfbLnFt1x5a76Vq89mAMYdnHNYnEjBdudX5VZr9iierUp",
  "key8": "qukRsqPKRrdEUt8kc3dDjNqWHsgokxM6js7kHnM1z82Wqey3UE77ew9QtUR575wMHP1bqkY2R9Pc4TJf3QZ5Gec",
  "key9": "3sQWW5PJhe3GwWHFYCkpdcJd2iMi4tv6QtidS4TBEES5txC1PcBD4tidVxQGF45rBquLDMWbF4HAjcum9eL5WHPx",
  "key10": "34r5MVSB2c86xLSpuWtXiqFrWLzUmjKGP7kKLKCGyrFMpS4seYbXsJq6WSHKi6G78gjWs8K5ruhEcaRSWJ8QE2qr",
  "key11": "8VM39RSfSTSVrW5SoVt5EHPTv3pwzQF72t91zBsqPXYPYVmJgJyCgf7Ki5At7N9zdkM7WnJuV3Yx43TGypKgKzQ",
  "key12": "49A5X4J1jctfZfnp5iAywJQSN897WJHWgT6URfLoGdkPNJvPHvQXrFn15kr5d4fmBzenVNybEerMcz9bQBxjG7mb",
  "key13": "2s5mKufsGGXYfSyaKBGHSoUubG65Z5x7PMiEA174HibY1ii1rRkeYCugN5bhH2gKCJQxQV6x5inLNcTfrntXbTJj",
  "key14": "5YAdkdBoVThfyzQZtUaZxBd7JUpDN7cXkuXrW8cWbtaToKaQBmSYxzBnKckiHARAYP8h4b5KwKx48qTNFFm5xBCn",
  "key15": "2T9nW2QXeTtec3o34ZkvWvCerSq24GNJAqkrX91vs7TEVwJCeeoyMDdAcYofcxJEM8Mbwt9CnzbCxhdbc73jYTQa",
  "key16": "59hpKeqH8YwiY4npjqdvSb9NpUZUKxH6NGoJ7AnfQ63PFsj3DHjAV1sR1xLZ66cD6T5LYKntjpAYvY1DEYtTF1ia",
  "key17": "5SkrouR4gUXqEXb7z1reQF7BwH5aKr9fjpCmWH28VB1oRs89Z3mmgHxgWciNYMEsLA8TR3jiFxRzKv1R812PTnXa",
  "key18": "4weYRaespK1H43L8gcWf7aoCezR78RG6cVLtFdzXXCsStHnntpL2Z3oSqWXJPvc5FWAM5wzdGcQppZCdvaFjaneL",
  "key19": "3TyB3XxUwghz3SGJbxfMZ26TZQWyLQV2bpWgTKbUErPHersgCVheScpkszgcmptsp2fShcTsGeLWMYFXmqxTCMQk",
  "key20": "5RrZ8HNSfd3kn2Jdqyscotm6wnwn5xHsfvQn9iuxgdZ7sKp87aZ5LNhKwgWoznLbcy7NBkM4zwAzK362q9eSvo7H",
  "key21": "5XiDKHYv4zJpUTffCdB3BDnCzRPrCeaeixsYFc4MB7Cyqt6KcB23atS5CNgX69LzRgu9rPwETePuDXNsfeLWRWDc",
  "key22": "5SUzqxJVrZKcihUU4k6xqpFQPMDDZxqabgEAaPPFiCoBZHwfEXvhWHErH3C3WsLCFCQBn1G3CPUSDECAb3g86cPV",
  "key23": "4DhdWQc2DSKzXJmZaA3rasWEwH7Mr7JH3ucBYRkF8BgP6Y42NpJFsiooH8gbmdt6zTQpt5zskzutunTzpJ6o7nTp",
  "key24": "3cqWjXbJaozd6h5XbonSgMXKKjcvEoCX57LbFyrNLV4JfwjnVFZUNTKUwnJLMHMrnWSgdPDMuBxYbjnqQtCsARcn",
  "key25": "4vr8im3Jkh51YpLnpGSBuQFZps9x41LiuwpMM8mDyGBmE6bWxKe7SLwe7fPbQAbvFnW6ysjtxN21P1YnqmXsoKSz",
  "key26": "muugDuCFpgrke7gprPnVvLHkKtiMRr9cHLvf9ka9W8twfQQgqL3sar3agtHvmhvdZvQ85Zb47rr8qdcoMR47wuZ",
  "key27": "4XzcuTz4BsvqmbiMatNttkv2a6ySowBatrqpL4wgfaj3DXVCn1rh7RP9utLXpWLPvMGDhx8wthQeoycfZ7ZpoXTn",
  "key28": "31winSi6T7554HvsYLuxSLrTTiNG5cbNhgNXmKzUEFt1m8dGnUfjgi8s9bMt1yhWgarqWGguDLWQXm77xqf8K59P",
  "key29": "35MxJdZs8dr8vgHrd9NT8jFw6HtUfnHfLxSSwptNgj4HEp5Cjvbc9DADmgoHydm74z8Wr6eSZ3RegeEMH9CwWo1F",
  "key30": "49Dk6ZKFmi73qUypVxi9NBKmieqdeWnCycUT3HPqUD2HshgKDxErSAFWK8Xe8z92z1Zwxxw9VdBY6KTtwKP53KoA",
  "key31": "3x39cxmcYn5gTMXbHnVW95AMQSScq9thgiuzMXh3poTAJj2eLqG9uiRozoHTrDFveBmAkJGzTJMEnoCFvQRovviJ",
  "key32": "PhhqwZEuwZRqsAF1WmgXtknji5pVTfGUaeMKr7voG2WKAdemrJmpAWS3WbXLGcPseya8274p7Bbb2MsFiPqBbxY",
  "key33": "4QkReJmH69dZWHHGA5beUiEY6xvKYvsrwrTZ15KGfL7tvwHYrFqabZvcKb8SshkCigSko9irmTJJr6DnmocsVA34",
  "key34": "z2GMrPRNJbMR2FuQ3iDbLhZcpG4r5HDhJ1qch9nUxAgk19ztDmcxp7KhoCRsmz88E5pULk6ZfSUYz48NSA2HXMy",
  "key35": "2NNCYgijV4GQP2yrN19Qpd2mtaAyaZCapSD5neS2wCDVaSnsWx6aU6qUCeU3nwy8Nw4exJtgKNJpRGNKCbE1sJj2",
  "key36": "38myhQe1rCmzrU3iJGTeX8kWwUbt3WrDqdVWzCbTMZDSkEKU8e8iibSLys45h1GupmFN9yY7YezPkDY42zdr2Gux",
  "key37": "5Q3kG94jz7X5zojf1pRkAYibvVftxEgG64VrmhTLJr2CokH2ZyhyvJkwQN8uCx341ZdnCDDZzyNs7ryARwhhqyrK",
  "key38": "4d4yAMqj8u7DNJzBkX3mAaXpgwXCMwP2fM5yzf4NPREpAfKZw5JZMCdNA5GWCvD8cnRR3RR8vhswdwniL4vaVNoB",
  "key39": "58h7MDCN7RybaRaATCgxDfCojjsZRQ1vUvUpg7XEmGNjFpKkJ1PR9AS8FZRWbgh8MK5dd8MfVX1CLHofDNZHeyhR",
  "key40": "ZeKMpGeXZXC4qsYE985fg4JuSswR6FkcyxHytWEWUaep3CNU7m9p578z4yakEGoXtsVtTYo4YGsGQqQQ6ov4k9Z",
  "key41": "3zPWfjyxXrzRKKgVZQXVEkAwtAvLCJkgZocoS56mG1YWy4FFUE9AcxSbDx7hjGH8aT2QCjjYVWgmkCzLKPWsm7kK",
  "key42": "3MYpSBZ4177D2CzxLgXCe73hkpFSwEw4JZTAmwD97zjR7iZ2XZ1i1XqT471SaWGFKfGjkfrcVAbD8W5pzDTMoRt9",
  "key43": "3AFTGuCwvso5vwDj94vzsxQSLj92tMj2k2JvXmG25ytELFMj2CKLKrfnq8yHa5oXGkLFWmm32eLDNcX6coAkTGAf",
  "key44": "4MU91arhX3Q5UHB1qZADrJwYt7gFafdxjVGM6wo3ucmKyBJq7UemF6EHXto3hyMAHdPQxHgC5bdSdcbge6QEBGQe"
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

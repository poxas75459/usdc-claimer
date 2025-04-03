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
    "4ECXsZ5Z1W5NL4Pc44F3ZksfGzvofobaGNYx6nb6895pfSJqeZtnSp3xaAA6t8ccwhr8YmtM4yBze5smCTFmvf6L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G7j6W1dnFukXJEEr6TzQgVk7Ke6gw38Wn1Z41V4eidAiRCx7nzLfmw4SygoWcCEVzxyQKfMMwWRoPxFqzzCaqtr",
  "key1": "3aZ6JHoHWwoxxv1yc1yf8JZc9xh1Yzj1CPpQr5nHhK5Ls1awj1GU75QRqaogP9PhSTfi4itAMgAywpGh98Ujz45Z",
  "key2": "5oBBJY7CmgkNMb7ynuxYghuivoWQHBj83QsLwHnkpZDResfHG6b4rkWQrDrY5KHcj75AzoStC9R1doC2cVVkZ9rA",
  "key3": "2veKbYaiRGj3rmXK5QiusCmwJb3BP4cB6Bf8uxKdwMzZp2R6rrNyet4piT4dqEfjyLUJd7CMGinEQu8J1J2rnrVN",
  "key4": "A7oqoK9ugyDKrAeRzxrBVBf3ALZ8LWd7boQmNiSgAJrV5sK9ZKRzb2mKMF82LFVxeZJSuYo99uyrKWRSkAygcU5",
  "key5": "5WX9oCdoeQfmTi6YYtrMnjXxiH6nYnpimMfbxgzmsnW5uMLERX2xz7hLocqjinf6mjpvCKie3NVAoXB6LbPYEVg9",
  "key6": "GCgZmRcrA3XniDbrYrWwZuBCQZSrCuvxYtDxbe5b4XonXtu1XHxmCo244g6VfzoczchQYdQiYNvScCPK1AzAuZ9",
  "key7": "4qUqBCFR1jgpQfmqW8mkVZXeJWQBRU5pEzpAZj9oQhmthGSQDDhDMBrdV3D718LHLq1kDfGondFWKLxmuN6HigHs",
  "key8": "SbEB2eeJHLseYbRLE2KAoDFpFVvUTUY6vBemYwGQMENNW2GW6GtxjRjLvwNFvzeZoKCtoBHKhVxzQzCqcgmqML1",
  "key9": "4UxzMdAHjS9EnLmeZKYsdVamdaZQwYrnUjHpqec4GargHQQcPTtK5Nd7odUboYNPVkVmCoYuvisTJneY98699RNe",
  "key10": "45WD9Ca2VB8AvAgor39bf3tV8zio18hHyVPyZc5ej9WDuqhdxFjiKnvpU6R3bbcvSKgCVRu7U4Cpz2R22L1uvVWY",
  "key11": "5kKHnTvwgRVf2U8sawFUwyw88b7BijNyqnE6GLmoyeQ8RB4RLARS5Xc9KDhio3C6FHopZ98U11BXRtjXaKtRNEJ8",
  "key12": "3dJ4u9g5B9ARqUv6iPy9uVaTxYcdphcnkRFpJJ64J7Qjq2XMPXms9UQf58fXahe8N5H8gHv74N7LFAnc3sA6tJFc",
  "key13": "3b4Cx7yvjtP7SgqW3BavRtfyHnNf5RVLxmHKVSVFWjSFUV7TfW5q7u587W2qJTAt8XmTDy49JxQUANeaFPzKD6d9",
  "key14": "uXxh6s15QZxH1NZxYY5kCspnLhKi8s8s4hKHMhm4Jm7e4ZMHTgTTdjzbfpajVq1Ykh9MJywJE68xtxj1LthzimS",
  "key15": "3iAZ5wymxpPiZadcqwz8MVfg6HK8JysUszf4ubsmQMhoeWABh6j8MDaiEdXjdEvj9oUHsbCTC8pKbmAbbcqfoE23",
  "key16": "2SAyeSdFXS5NwFUeMJ8e2XLcAuKMRo8a9XoYXV1m63zqz1JTydEXWERnLYuW2PUj4WgdjF51yTkZSyQxj6KMDXNG",
  "key17": "29Uoe7XreB42FRh2twaYDBXDm8FnSsd49eje1F8ZrgNV7CBYA9JTfeLMFhR2L3bPHUg4pJfgt4MWCHf25sJJ5s2B",
  "key18": "5Sm3dENxQKaV5HUSHdCT8EfQYUfe5foSYNpbn5wUyqaA41rbVq4t7cgxfkfYJ1RLCmA3SX79tD8qK8cWnutj3WUZ",
  "key19": "544dfy36DfiXimDQjJWvAGbBM1fShV8MKDpwRAMGnK6BmUaBFjZJToX55H62MvB9o47Us4sgr1Fo5uM8z7myAHin",
  "key20": "BbDfN9nnAgnZFS76Qjudu1kSvRphxRECHHDbAVXeCDBEo4HED7Ft75oCjSxVGj1EuBMwv1EsbbbapyXkoLytCB1",
  "key21": "5DmSheu89oop2EXmu3sVLn8nq6Jp7wwzik7owhaJuYmd7iQoPZgxj92dictLPMW89kSeqaCf8B6qtnwFTUL8KTkS",
  "key22": "3jCuUYqERMSGe1Qm3MuWR734s1DyJcZKQw24xisWWBtTNgRNiGZjjecf6NvSgehMGg27iq9e7eD1rLY4PXhiyGw8",
  "key23": "3v9Ww5cVSo64m3uwYoAR4HxRxX3By7WsZyzeSyFwyAAqAskYc7jwL1jV4qZ5Z7QRREBR9tZGKVsDCDgfzAMBDoGW",
  "key24": "4WoKaboALWyXvdrtSPGzQs7ZsGwjBKFKfQCqB4GLCpUPjfN5Emwvjd9ubP6AuFf6u3mxhQ7KVb1cQvxFR5WWTvg9",
  "key25": "2JfLPuCvQp5FSJz5edAb2nrf7waQFfvrKUfu1bUSoZ1atxp9Mvytb6Eo7QhCxdzc8wC7qtxtHqW2Cmf2kVkDGZLJ",
  "key26": "5ThXV7Xp3ivaAB6qRwUssWTqjMXvibAmicBqcgwLXJbq8fG5FssDXtyFShSVUVMXm5hn1KnJhJvhCFGeoEYNSCLc",
  "key27": "2AFekH4X4Wugpd1bjEBQGNYEN9YiLNw5UBANGxbom1rcA4zBX2DXBS8eZCnhiLYCHZDUPkwWX3D8SUhgiqTmPaok",
  "key28": "4JKQXzxUmhwtoWyacNfxPZpVpy4Tx25yNPgXiXnBQgSNPx1ahisVuJBmZGrDYMGaphcPepbMKF4yQD5ZQmpH7pN8",
  "key29": "2f26QoHGYc9UjeyiG4aET5HYdNHWbfjDcpzcs6SKULdqjFjsv8DTn6heU2V76hXMvPfshLmbAFH3UZWho3dR6D8q",
  "key30": "5MM8LKDBx9pM9vRfPf6H7PQKaxjSfna9KiKdf8T1PYkPVX9BnWo54ir4MhkhadqvB62KCN5vhRiGiPb88KRZssVn",
  "key31": "5h3jwHXSJDsHrwSX6cx7NeftYoW2zNBdBb7kWLdEmTzbHDj8jyBv4r63u6MuPPLXwtpVNFHvsgLGFqRoMbQxidSp",
  "key32": "49C8TJaCRLa3Upy3Cw8zcU2WjNQCuysrurzSc4gr16TaxLfu6dNck39n6zNvGpWvKpzFuzV47RbuxwnsdJsNM8uX",
  "key33": "2Lnx75kKvCijZEahokGwMDXdvKhBUsqKsSkrFqSipZ5uCsdqMW4ufAguYMy8UPYkk3pvDD9fQ2dQ9dVJsnbHTsyp",
  "key34": "5wH8VYBiMTUpTmRcudzrBUs9qwoBJLdb12gqSpN9xbh8YBCprhatiBJRWCR3dFJkmXiLp7ZiKUC6LbmBdugm969E",
  "key35": "2HgQBf67QwEpAXGRp5Xi4Q2GgEir4mTpomTNdL2hdzoJXNNciiYaPX4WYNKjeQvqJAbqtXKmNUnEu2kC9ZLnZwRs",
  "key36": "3HXFto9tWUyszDHVag3hVCr3ARMAxSgLkGwB7TCVGPU6J8nTyohjbKDXQhAL9jqjh9K1u1jMDTaVkN3amNvfmZu",
  "key37": "51KpWxwDZcAL5aCqkWxLeLPQsvStdmbjNHzBP6m8GsWMLX6rBaUR7EUce3nnedUahsThY2XKb5nE84pGZKr7j3Ss",
  "key38": "2vR4dJTX1JqmJSvcPYbQ6eiiriib3E57QCYSuHQTLy1nVDNEtBMQeic3ch4FFMggwbVAKdYtKjLKofqwepXW6cr8"
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

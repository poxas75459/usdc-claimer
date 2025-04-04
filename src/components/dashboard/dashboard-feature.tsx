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
    "HXUW27H75jhP4SpPoRHHGrfxt9hFmg7wx36QVDzYu4RTqbT9txHR4emUsdMb5MyyX8S66Uqz7Ghp2CpBMAm2cHX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GZQ86fT96gonwjjQhsWLdGUzt746DEP6FZMbAGowHQY8zfPxgDZha2ioTvwZ4sdWPqDHhp2uif1mx8esAjYTRu7",
  "key1": "xh9zMNiFsWdtnDSx1QYbrkEg4HjSttvoqPzu93nkvjfuvXaLAR5vR55gtmDQCtZPsQM4X7mY8Xape2AkFNv4zyG",
  "key2": "5Vy4m2RATj9kTjtcL1hno2soL7mbtWJG9LMr8tDpkC1CpEBWgHAmoCzgNbNQbKbJfheXGqGyWGEDDfcUqdevELmB",
  "key3": "5PuAmoS9YWGRQKWQuKiBrdQukx2sgtg8DFu4Mt1jwjN2nxbs9wUkNZvjffjY7JXWvGyW7TPmdQ3MJQuqR5wpf6SV",
  "key4": "36AMfDKo2HGv3ThBj4F4JuvxuBm8qtNkp2CWMSVkQQ5iPVUKVER6WwsYc3or2WKXToykKk1W2FHj7o5ahzHgLtZn",
  "key5": "4wfUhReKfLkCj7kx36q6zuhcM3yqrgPSgopr73HHHMPjGgKJd7XxeHpCs7Q2a3hrfv2vjRTwZrB8wer5z8E6Nhn4",
  "key6": "W8Uy6UDBTr9UYMPkNs43fcAeskKXzf25ZeJgBytRYV881yTz86Pjd7GkZd9EJVeioMrqbkZs5BkDj5fsEYBpw1f",
  "key7": "2reQVhXLd5dVkCVeUHzfPuZKFNTpCNLZejxMUfSB9yabf8tDaSpuDtDzBwHRBsfsN2eFFzGh36bAJa5iGBrxsqNY",
  "key8": "5DLGb65oz8fkBUvzyHm7g3trmMtgfuMvauxz5SYceGfgtHKU2u28jfCcmD3esLr8K6SiFWGPhsd2eFmqhAHxmbQx",
  "key9": "3zETGnxh5Pv9D4Cai6ebsa9mG6zb464LFVQQDFj3dMrbADjGoj78bNbWnUedMmsnaZA4UjZj4xjbXMNcSbCttCnb",
  "key10": "2MaoXJnkwUgZJCao6mSSU66dMThsLYfsQ76xLSLsHpEe6zzWodE2DB6YB7TvYkbk3Th2rPiXnsC7awRiNyA9bk4b",
  "key11": "21L39yAqUdTUvHPH8Qihnikq6pxQ4yd18qXbJNJNLTUTnJ6ECHYt78Gbb1pFYtAZCECLvYvA4QfKMjFRZEnB16a2",
  "key12": "3JWQn2zyG4MQoAWv256ih4j2VVCriLt4xFYZE6LPCVHrDCmtyJuFrAUyqXawkxJCK1LRD7NytvWrrhxLV9qGEw1F",
  "key13": "3BDaVNgS3JXB1GfCUNN5hvGPucXjTiAN72NZkxmCRXXfNSXTnG863sf8ke2J93KwEontbTU5mNxkSUnMgaGu7scK",
  "key14": "2eBkmS21L3wExSY11NtdhzqaVVxTpDvdmXJuPA1xafYEqvnfJVaATdssR8MLe21UeVVefBFxj4enN43SzZPeNcw6",
  "key15": "4GtKkTUoERHEmwGXv9YPxnBRt4ox7cHZyPZqdMVgJPHmwdKMV65nVbbpTQ7DpSfikW8ZzQQAuxG3epvDNYficsmP",
  "key16": "2TnYaXN55bmDdtJUzFtjsbQ8iseSH3rXNqMmKETzyeuoc9WV72rYJngCj14pS3f6aR7kQMW1qPphQJwr3136hVe5",
  "key17": "4fLorqhLCVb4swfDdTq4JxYg7ynGjj8qjQh6GBrHuh93Lf5gAsJFeySSFQFGfmQsBoxFgH52Bet9E89AcnaoweCC",
  "key18": "5aFNakroZd2XRCvB9GbSAoBCUCZrnWUNbJNvkQd8zn9FCasCoLa7DRAxdwAuTEhFUN5app4rWyf46TdoZ4W4WLtK",
  "key19": "3CP5xBeQ2xXrWdVB8rMWa5Q1xFJFJjeBC1zbABH8XbU11xNQW41RrfwWQTbau2QUAfhxEtdJ4GHEuFNreM2PdSBt",
  "key20": "PbArrS6HErTua9JL4znNgLxySoB6uVdwbW4jeyy4oZrmdZttz8Pv9NAFLzFmdpaqLUaojCCF7f9A6rt2L1rzr3P",
  "key21": "2DmKBCx83NGdVMcbXsZbkEyGs2RXkaJWsn5hF4PWDyYiZ2WJDYPzEfCdCfJdLvjLQFNUEgmvD7F3CkRisesohy7y",
  "key22": "49eEmnHDkD6ZmWwcr5Q89GVSBXXHtbBHHHABXyddGLjDiCqeNFJHfhX9DAugJAo3zqCECaM3RtgzF1kN5u1GAQiu",
  "key23": "4n3gyj7RENThbYBLshFU75BXsjHkLtBKHbaLwJRi8q99DwD3DPb8eQWGCmpbkHJNVjBuXsyHpsYWtVMw1deyVpfL",
  "key24": "2N7atwiUYnTfgJCxnt6mr289Dz4NAhnv9Dwd91KBA7XQJ4vxmDi7hXBkaw1Kk4w9qzMPPDdK4ULZx1uZZTxYm4Bp",
  "key25": "zojeKP42jPCZ7KuWtMRnEHu1tuNYCMqkAB7U4M7WN2EATsLGAqfr2shFmt8iRkLxAmo7nbWpMqyyEkRoT8PtkiN",
  "key26": "2amcML9RCPQ4YLTycz1PPKXMbjPnrzW2Ngczybt41bimpyFkJmPJBzQQ8NJAukVKL1DGRzuLCbjQGMRfYt3Hfdr",
  "key27": "4C6azgZVtcyuMaFC114sEAWRZGq4q2YkiKBj4PrPYmR3ivwCGSRytu2yK3eLah2rwGZykWvStxhGZBbpDWTCGTvq",
  "key28": "2cw2boK7kQbobtBcUsguVyXPCpqpHnwrukA3qmCfdDa7NYBvTMnnbqYwtcE2L2ykv5QSYTT5U8QANP5hzy9Jnd8h",
  "key29": "3B23pCWWo4eoWyNdD2rKr6n9EbN9ZH8PbfM6iPFq45V4it6KkGHQj6rBou4T3pQ8PsTDPTPfQKmDnVKUxeNwjDLe",
  "key30": "5h8nBsHgrksNnoCF4xPtgCuzc6YhXNE4oJyUKHRfC8spVjA5VFPvKnum772aRyMT5p4pHqLziSPFd6AhBYeB81HP",
  "key31": "55Ca4W3iqpkkss5ZzrYJUuhdSjRQt9SXtSL7TrQAmiM71AugsiGKfQdMcyRbp2xLhgSPcqnQUJzVXLJDRJF3DUpM",
  "key32": "4U2z1wsji7v1dk4is1DuZrDMLkKdeDmpoej8UBNDDEfWtii87QJWzj6pSCwfNYg8LcztJfUS6Kg8cQtGg2sDh7t"
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

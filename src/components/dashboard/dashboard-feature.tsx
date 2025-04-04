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
    "65oLx5T5jLxMhRigJMyaYkiWVafoXRL6Bt8ZD22VN1JBLZQZabaBkFrGsCZHKMorJi4StPZzddSwQqYMrNZypthH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52soBtvRvfsqYJRHCy9jbpkwCkdjjWqvcuj9eaVH9J9cKAN3C4gMPJjEyNnMLhmrmNRGHjJo7Ckj8qajX4i7F9CM",
  "key1": "276pidezfb9x9PmYQEp1AMNHeQLEiQAvPG4iL4JPZHnbpmcRptvvxtkw4WuxZqBNot6WhyzD1tKF9a2eVF1uyk9H",
  "key2": "4b7BmCQ4LgzpXX8A668U4E6866HQVVo9kitdsFu8PvFQjdvPaLXdAfzYvkw5oK2NdQV1tviXbemVANKB5ynivGaX",
  "key3": "3dwiyvLPzPdsmjKAubXimRzkvbG3bck6y7nk5xd1qgyPEcLJhjS9PSbH5mkpkbxiq77DaWS4GLumqGA9osFWwCHp",
  "key4": "5ATw49eEwZbHsj2G8mqdjre8e2AjH8Lxvw18jEsGYk6tiVbUmdh4eQzMP58W2waZBcURMUNRqGaXgPLU4DKq6rJ",
  "key5": "4gRYpeVpD5JuE1u6NcyXNUryUopUUb9dZpHg9J9qwj1Vmr3jiJrCsae4UugFb4UyhH6dcmUwgsFBnWqG8QTdSaJU",
  "key6": "4aHVGrFL2WaprzfhygRoQErEopMH2zomFAKMxDLnwUaq7srhXPYky6qcBqDGpYEmThWfxCnaytNY7u2kNG3pLSeR",
  "key7": "2BqnyG6FtfSyD8qrtGn88uaFYxWXELsfBc1REBhkjgUGiZMmeisMZYWFuW3TZGqcSvFZWLLAvExKFBvyrbHC6Wvy",
  "key8": "3ZV6F7BDe4vX1BcBvNTTxVwzqachgYYkDtaNAugGzQPJkbjAwXeeLLqsrK3qP1RD9D1Hco1DbFA4DMTJpY7ZQhU1",
  "key9": "2XCFxCKu5Qd3UsRhcv3MQ18KJBiB2foDrm8K59h7rUK731PRDJ7KqSTD9v6d7DqxttEBqgghgBKG8jp8ViHBreC7",
  "key10": "3hokhLeAMG7HPKxHVvVLaK4Re4DZu1jRecmUzpWQsUDHvNPCvjM47DNoWNu2yLyc2tnrk6w5x9vzz1rHqKm7rpqE",
  "key11": "58GDTEW9rygzkH6vB6a32meLGhUD2gxkznFMopyfobRx2e2bfDczZeu4zgjVcqLgdMnA1YY5jz6kLDq3HHcvHqSp",
  "key12": "4iobh68SKCYuSmvwHdeyPZSpA76hHZEfyphJoDnLCeXCQC7n9uZqN54PtoDBwBxGVNfWufYgGMbTMdgDUxh1Wp2R",
  "key13": "MyKyXBjbZSGsaKjr8gRWvopAnMDaJDbSvjTyEGdrB2srmhix7Ek9JcWeK2aAapscTLTk89vmcoU2xriwzHwqxNB",
  "key14": "SUFQXBBqbjHM8mfptX7uRyRkWfttyZ6smSrdTaCwbi6rcTJBcdvzzfp9KMDCYs7hRvzuNm36xnSuFdHvD1e4CtV",
  "key15": "aDaNNY9pYpA5Xs6juc67ee2DbuCbmBwhoRiGuNL8FHHGcazNTMiJ4jAZmR1nmJYX3sPoJBRdMkhWD47pqiSHQKS",
  "key16": "3EYmfxsWKgWbEYTzD9VCZbRY98Fecg3JhjN4rTtFPif9dNqGf196PGouJnS2TEghV9GKHz92JnZKRMjo71YKBWy6",
  "key17": "UDSduMa7if39xko3bsbkzyhLPYF1zm6qzxRddt6VsfwVQZvW6fUtzJ25ESu6K9VWxcdEgehq3Goy1uCdNFXdXzV",
  "key18": "5tvHmXBc8u8R4vPVeUov12DVjabba2ffFPFGZ1VwK77rR9EGc6w3TmaaBNi6CkENxfHbbmfXuB2YcBZoTmcxQQ3U",
  "key19": "4KEYAL2CJAq1iKhP31RsokRDfcD19KNc1ynPUH6UQqy4vRRFd4sWK7iPaxh8gWB9kXvuZAwC8w9yNA7bSYV86MZi",
  "key20": "573B1KkECXqnV1hszAYXWJLSoyosGf9B9V7rEEtmzJXqhuHbUf8BVdrLwk5YmjqcAB33DNhhRPbyKULwx5BU63Ex",
  "key21": "2k4eL4zpxpm4as4WxDdx4iy9RsuXSavedGr6o66hB3zi6cRiPQB8SVpQT1rxeztZ4osGdoDLvVrBq9S6cZg3wRz2",
  "key22": "3YsRk2DRQFQnCq8qzYX6vzWUiAZ7WZNLkTCiv58ceCb4eeWgxGDSKvvBWiWgYQp2bacFrNxJ1evucUb4169CsrXj",
  "key23": "BmmXivz9EX7hHhvSgqiPLTYmmRchrHVF5ogEG2ag2s8eoSjSVJxKXvCAW6SB5GxkhojjuASXdJjTAqDMhxfEcyr",
  "key24": "2r6qdCoxFaaZAGT6VhLvog6KoXB3UjUPxwWQ6TWNyyvfVW6qf3nbm8UKg5LCagcoQwci38WTkdoHNKd32ceGSzjH",
  "key25": "2y884jYjU8BUnnKQ3AnrYePre4KxSenRcAQnEPdN9SbLu7E2WGKazCsfrXoME8ENvJLeXnf2TEUDMPWvqXxYGMFj",
  "key26": "4yB2nxPMC8fUsuC9Bax44N4PLrwwKv6dSSQH6oeTHzuhXP5kn69dCMubb1PAGfsM53hyLEcy3sF4VGNBDST1opxw",
  "key27": "4GTZHwhtvrHJREEohppxA3GLLUea1jgfdFMSaNWTGC33F7kgiUiTKaHQ9GZAc6UGRamb7NNrRHCp1khVQskgzCGb",
  "key28": "4btojA1eqNG4ZK9BH7zfW7URUqvggBbT7nmZaAauhk4mm1SpmD4FusKYMz88C5CbFjtqJ472MkjTiAz61LZv6wqh",
  "key29": "whx1GBw2NqriwGiJ4szLRvEdz6ND759Py2LbMhh2yZCejMDjHKcC1bvV3oRjzZuTfYqvRCpUpKJSuDTzPAJdaj4",
  "key30": "2Pi49smpwSrc8qDtuZ4hWPL2VYf5haCdxEk59EvS7CdTxidYjDbE6VSdET7CAPtuu4Nh7SKPbjBKnwi1Bq2nbeCF",
  "key31": "64hLkgj5avHDZQM22b3onnkhYViiRNxTwU8PD9xR89LfsZ88rSxCP8A34ZzbgDp4BFb5FjuYzbuqiND7Nrv9Pp5y",
  "key32": "3ti9tUunYUWtkd4LL8HVCpj7JkWJpvdAJqQRC89QE6C45YPZuND15Z6rZd7cDWDfygEYLDZTvLAxCXL56WJ7dxwz",
  "key33": "2sdJqfmf5jXBCAai1RfYmSLCHoVegZvV6QF24dZrABY4aaubMKwMHP6fTSdZFksivZCJYtKnNq8FCqBAZ6g699DY",
  "key34": "5y5XSLMaNocbpmQqq5L4PEuGmHSUazvpF7ia9UPKnm4KUSe2b569SLSuYfPEwyq94cH5TT26gTre2xxxe2xCrcPi",
  "key35": "54KMBeYRDpkc5pBgYZFN9rW4mJGSAjiKDUVpynomyqPjAuZVif99t9atSvjT7tNMo1ZxgdXFp7LU7mAP7pPLFUCX",
  "key36": "294dKQVzCcHz7tDL65whzPnLaum4ZyEVtzVBHRb2F2kaHdj6aJaJoARuCVoro1oV1dT7gc97B3ff4UUCNAmBe7m4",
  "key37": "5PXVfV9QCWYqGZ2PHkaFHbcNhZCjxcQJEht5GgLoRKFZU4y3jEhLhH2B1QYQrzaRoFz9zvL7yShyand3XDv9iBPQ",
  "key38": "AxpCUFEJAb8JAa22jqdUXUu6LH8cMPavYMby43ARzczc3iYm8kpwNPjAkDViZPwsEixdsvqdqM87BBkqPXAAgC6"
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

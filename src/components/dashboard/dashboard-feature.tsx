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
    "8r73rCC48MzVfZ9kBqYUnEiDaeuvgQv6hHGMWfstjtrFcLb4gNWAM7yjXarBaAC5ExqQtx1kSi3AvmXcyJfCCst"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39yrsvHGuuHi5foKZvUPkP6J4YXfp4MGrcHT3GfS2envBaEN89pFYQEkdXtxtyitCrDM9RuvqGkd17LxJ88ZqTMd",
  "key1": "wED37gJ6JQDnURxV13P7a69GGXhE4tAacbMg4fwiwtubu4EdmyX5hvg4wNh3f2FszhQZPetyAxdMRp5H6PyzJoL",
  "key2": "65JceT2mKTtTc2RJYo3ayjbN1FV2V3wr9pe78iReoqp2DSQcS3b3z5rkotSC1tdSUPk7XS72sqsyz48dJWyEEbbD",
  "key3": "3unB7zuLAm3opd34VgfdgBv3WiRCi4fawZ2nFBS8JwkLoDbkW7JtqAC1tnSTBVrPGtDwhoo6GGh467QeVNh4caQa",
  "key4": "3BB9jBLjBei7XBQh1RYnCAMHnxfR7zwcvTvATW8UWcToHsaozJopqRaUzKU64LnhfKQ3hgXCqVRuA3SaTBcLgA6Q",
  "key5": "2Y2TRS6HJXuHmAi3bZcYtArJcqq3JN1rEYX6wWjY3DnLzsqSU2m5jkk5m4mJbDWey1Um9pSuWPjxVE5Hq3QfcSqo",
  "key6": "5sysEUAVw3JB6n5D14W3Pp4VMFBjnJ8m53vMTxj4J8xLT3LjP6L7iymjBo4xDez2up5dVp8US7MzBdC2oXtTJdLT",
  "key7": "4CL2zq97aPjBHQ9oG818n3wGqQMbyik6z5xuiMxyXoX3gr8MiBvexMCPqXSi68pVjXSmfKwxHRmkR6jYi5oYEqjg",
  "key8": "5M3MASmUc61HrMmSGhvKZDW8UzdGcWUf4xDD74jtHzyMU9eKBqnsGcE28YvP6Nt8UebXEjcgJWG6Fbx7SQ7wZ5x3",
  "key9": "oGDRDARzxn272LLeQ2g2DeeEA2J4Vj2JFdL7DfEEnYbaVyzoq1ucYV1oqemP9UvDb6FNE1Qe4reV4evrZQKbH6v",
  "key10": "3KHQzKv9s4VaqUn8xNPSGvSaq2RG6XxxPLZpsZANr3kvtRV3JNSYUaWoGDF4m1W1qq9LKjQv1M39t5Xj7aLe3hEz",
  "key11": "3UTYGFvq42LrR2eqTrCuhxa4dFPe9rhzrK8APR2y1ChWq9HQUxMXaniEZ1v8hopuPnsdsXRqkkrffd93YL7cwA2R",
  "key12": "rc7Ww7BtCbgVP7AtZFmB1EUZ5Etf4kz4V2LTgMWTRgRHDjgbmYbDiMv2VR1rrb8QHmwdXHYH6YD8NKHDoz5KvZA",
  "key13": "5hxs5G8YxF8FS1YUmekCGR8rqEaLXGTzCTSvx5J4kvsT1BKQ5qS2QhNfVr4im5tWa7dY5cA4236jb8byP6NiN9t",
  "key14": "4Hf6ycmufwW38PNXjKgGob9auAQcQ7ENbeREvZm24fKuEQr413LXLLCm5AftinN7SUC44RtbHdJtNL8cacPqzVzP",
  "key15": "5aBLXMZ9beTXWqvguNGM7fGyddoCEKxfGaMjPi9cP12wQ9PigECkGniVEnH1TYaeunCgS3Nks2cr3cPBTfLsQEA3",
  "key16": "3iojnNqFxWR5VqCqFZCYF3W3E5wT3fWkA1TvUwY7Mffk3sF2Gbx7tHUoDwTKKohYo6uiTrNXGFqkeDGxDtQtYsQk",
  "key17": "31874ft2MEyWfPN9mKJEkttF3ceKPVc21XLkzVtZwvTb2Z1aGk2WZbqpMdiqJAira9torn5bg9dzxD5AEdAC3ksB",
  "key18": "4yHq55AFb3oCutzQVDYJh4izMeaBfmPBA3V3uaCEDaXZj86isp6XSwPUitodmXci9CiZZwCL7MXtmf1MSJTxosgv",
  "key19": "5JPpRvU77wDtoHanPnrQ4Nd72stszdvhrfS2Arg9YyoznGSJwswCRLodnhu1th8EtREohXZkWKkPDdv76wzk93cS",
  "key20": "3h2oanNVxy2BjscpJ9zZztP5rT2EuuiuxbcVBYwGSwHy1Mo3E8iJqiaFUEphRhNRyUiov1YY1B3ezRp3ZE5zGJvN",
  "key21": "CLiCZAzMEVbfj4YJQPnwNwxA9JEP2ovYJHMpsrJYVMygviDTmhh5hHXSeMdqqPQbBnqwZedyEPjgyNgwwDnU9GD",
  "key22": "5fxgkWRaGWy9xEndr6M6btt5XBFU9AcrZYosuYJEj9Qy7gGLRjtr2NYWuPsiEaQotkiLYh1BeacDHG2LR6tzA15C",
  "key23": "5wKJTBybTaf63aeC9z9JqJyQhgazYJWFxEhrWrDHWf4bwhRzHaBkphJksfwxvyMXsbxkLET4bygnMuysaBBx2EY5",
  "key24": "2qDNrPjWqMi4h4NpvkG5E36RLWTTBGChfySL4sxrSM5twWGmayfUsGB5nuinGf2dbCUhzFFQg6JL1SEQizPMGhD2",
  "key25": "3Lwj6gP68kE6W9MHrsXgfXHAm1UPdZMfxhxST9qbsEqydNn5rGwHBc34hwEdSa1gKrjSpNQuTq3L1AxB4iWZkuzm",
  "key26": "4tYJrVKTv8GhcTF1i3XVLwPDgYR77AtB4Nau7nZoBpfnJuHiMEECR4fjCEZyjXdgidaCFsWHsQtzEm7r9qNsKpbA",
  "key27": "2Zzb6EQs3by84yAEiipYSQsn4SfSMYgB4F6sd5eLJS5XEMbktFnCn6Q6b8ydpqx1y292eCzcnUL299sUyt8b8ptt",
  "key28": "3yKRuaezYdjffRjfKiDzdqzfdRwdU6GM6zkx6h5tfcuCPaa1XZJ77z5VuTkr59rAK1Jc9XNhvhq5JQWfk8wM77QC",
  "key29": "32KoTDxwd3ohtj8pjmNJeNnsfQ5VJYh1ThbYNtW9Uzz9dLtthEa71wiBu5UQYKdhf6yhpKQKABuBpSxSK8drkYzV",
  "key30": "5wfXfAxpWbBCZC19yjYhToobPLiHAXDy2bF6Bsu3fJ95E3oagr2BDay2agMFVsiw4EiYgMsEeuaWbu6i4jqKNrJe",
  "key31": "2Kg9zLbCiUMhYa3hvtwv328hZn7DxTHwSFqjcMbZPMQ8e7HqbjC5PDVfjxxfkmFAecs8g6PKaPNYw7x9nXF86GtC",
  "key32": "5bkqCPiHLyMPU3aLu8pFPcRx4pX9zKSTsLc6MDtT3kTarSQCmY3KvzDGwG9Kn1j8kyvR4n47JmaHQxYT2fdSGXTs"
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

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
    "3yQvnfeWBZb48yNA2aZ2H2dkP41w8u2FfE31NYqYPX2C18MWib19c84x8n9NYntCNjEaJERurMBAtkv2PZ7DmxZf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ptt15RTV23ZAZ73nCsbWiEUpq1iede3UYpGRwpSdEkKMmZ5f1UjhHX1A56TzPcsoys4XMaQsRb6K9HFb5jEMq4c",
  "key1": "eCk7zYrEtgw6VmCnpXYdDwZxztMFvJ5WUEW3XGy7dUd7S7jso8qjdHDr6T38MPMBYzJdeSDy66L8vNFCTupubux",
  "key2": "5LY8bpK6QqoVwtbTGqYUXG24nYjG7GidVWzRB2DVg1Q4JJb6oATSVs9fAQakSvweERGbEhQugqF5Jtrurx5Rmp5o",
  "key3": "4ZJRA7nywMWeXnTqMhoPBYos5sWCrspnHZ9wcieUyexwafB2Ni9gCB2zwgV6WCchfVbEFzKRZMwHdLLnxDSuxQea",
  "key4": "p1hcsCBEraHqGXmtgnMmVx6Tt6CooTVXiqADWxWgRp1z9amx1zDnSJFSvdiyGxwo84dzE8MgWMrP5MVo5US26Sb",
  "key5": "3aRmt4x4JGZbhuTbRP3KSTvLYfkVt2oaGnUFbKJ8bSjY4jMXxVZiwadDqTdnWxMkERtc3PFnR4GmZ1DjRiSNruxe",
  "key6": "3k5im6G3bvBsDDgkxSuHtVgkEnuD4xoaS7cMurvP9vGwJBTcjUbgGBAtpXt1bH5JN7ACJzdnZAPDrr2Btt6aq1NN",
  "key7": "6WVq3EbGGijUFBMQ7H7KHZ6J1VwhfTU6abFbPBB3eFpHBqmbpXsh9ihRJftWW8BTUNmdu1nYZUzQDZ2wdsowwZv",
  "key8": "3RAVNEXDZWLud5oTnbrtzkDeTAJw8fqx1tHQRAYj6wqwhxrifuhroaLD1GMnq3BS67Zoo8vFtYLT3eCAaXixCzgg",
  "key9": "4r8TQJ3qum945SK5JmGTgMCpuEDbtaLfkWVkrXeu9M2n6eUkYXHuKXqUQ3xbhsHPaUNvFt3L8JMhoXnKoTgGE5p6",
  "key10": "2wyAGnDLk58P1gRXo2u7iqmBaLSK4dHEdZBX1LS3y16KBBoeZSMyVx9mdYXz8x6mYqevaWqhJY5mgnCv1WjUSzQx",
  "key11": "4QE4sxwiMJDXkWZQ8aQHkK4mXrQvXx4tr37AxEHyoFR2SVNTzKFKJhkt9TypviuLsudqEZh8fxyVa23gWqGuQpen",
  "key12": "4TnCeQ5umy3mJ7rDbVZxHZKfQEEBSFSsd9MpwL4rCwpjvqM7JQUqVabGib4Sz2fnQsbGwbofirqsmMdVUPLTfpUM",
  "key13": "3xMnT2Qci84f5Bq6GSALXWpY47JGNKfDm4QY1hY2hnyxGGK3NaaxTj9ueCbgFW9Dap6mhczFxD4R1YS1eGAQ5zX8",
  "key14": "mbMgzExnTGJ1pDESpDijRBo8gnZ6wtqyoCNeNNSXYEuarHs1dATAMfLQZxfNJbCMpRR9Jr5oN8vFotpbA1HWuTq",
  "key15": "2AyMNUXVJAhoYbsBAC29Ggu7dX7mJXR63p2t8aNg4wgxdNBFAyCpT2kLir8KDMaTh1N1qZbHGSb1ALvtvbKcCKpA",
  "key16": "44wmXaD5jn4e4Z9XiNP7Gr5faCSLzX3MR31VWhhtth7bc6W8gi6SNfGxXJWQidHkqEzK55sYrS7Mgy84XupoPY7u",
  "key17": "3HsZ28bSQ81X82ryc1jYB3AqDSjhQg8t3PGNoMieWqo2dLaSsP3ESkSnPMyAE23gvSDggazcpmE3EUEBBQmkFMUu",
  "key18": "zykjDB9h4DRzWZc6tq8ZnJYwkujzsUaZLhNbCz4uqiq5mQ5cHPv1W4sgifVz17g4QFd2kUrKs29h7KeNE31ibgD",
  "key19": "4pzUKB2pHQad2sX7wm9g95AnViXygwQKLQVfLCykV5tKWLqo1LVgJtHeNZzxAmgLWXEYssXViLN7oSEfpVgLcaSi",
  "key20": "4ukiQf5pRuTPEYszRWcYfJzaeaAn1ULZ5GijGtFk2fE2c8DKMYR53Ne8FxLknEK6GWGUQ9ikDHgR2UZ9aE5xPYVk",
  "key21": "21CHNzWbTs5cWEEMiK2jUeiqtkkXLoaUPfrNx74DxutJ98eHYG2vp6FBHbgJ87kNV9Mk1YnsmBHn8Sc4Lfz4CS1U",
  "key22": "2y5ESXBkLwR7pjDWJmA2CtjHLwFdK2jUmd5jpb3LrnwZf99qeUm61DGiP4HJ9dooXT2M5eXGpamEYiixTYiDyMRm",
  "key23": "2Vgt4S7wqGF9efDxo7Kwvi3YYNv4osf3t2ewVjek2c9gwiFqvAUBaQ3S3Xee8FtNJm2LzYSQ5Bsd9zQv8SJyBs7u",
  "key24": "4yCrsSAHmfbpgezK3hroeD6cPuiHRkqF6uBeDqWfZSnzwQpG4TRtRFTSFaVdyKb1LEVHSNQagFaYfEL6JdzHAYAW",
  "key25": "L99gL2QtL8V5D2e2iWGxTU1QRHezhEYoo6pJXRaWrRM1TCGMk94ZdKJ1cJwCswsgiY1RjTB1GgfCDgS8ZrFoYyJ",
  "key26": "5PKaVhZ3UEt3ceRAuMRzRJu13E1YJiamobFAUw4fcx2CFzDoXMxZdEfzawohv8gmGnfgVje3qfYiLmhkUJsqgh2e",
  "key27": "4yMu8J9HGK38sBySwAeYZmxdSbVvVBZnKjj1eSmktDe1i4n6oWDBW4P3xGCUpQ8To2JTg1qTM42z7u5JQpJb2bA6",
  "key28": "2ZnCX8SYLiFAuYxoaWkatghNfVGySwRHj7coB3fPMrfDEaUhEzZ6KSKxczjHbQsCm6ctcJjZ1tGJ3XMbnA3drQkN",
  "key29": "4owztuFDfxPu6QF1kTStQb3UjroMy3uz5xK5c2XLWjiwDG2NFmENLVGgGEoAYkb8JTG9gWpBGw1TgiiwFfYrPyRU",
  "key30": "2FBahXErh89dFy79rCvtbtjMt5mSxZy2hyBDLrsCqeLeiAjrbJyf1eo3Z5DEdVNjXznVcpHhd97ZE9xpE1Ym52fo",
  "key31": "cRjUpwNh9ZS19va8xvtTtB3nvMUmJBK45JdQGNzY9XtEqXnsBUHmnroaPQDkDcsCs1UyCYjp8MziV1mQEJhNAir",
  "key32": "2tFE6nF3joevkjsb6THnEPhwgNoJagTTaJ3DGB4JrRohScqp9AnRXdge7oF8cCAktL6D73SjpqYgA4rLhKikGzek",
  "key33": "2U4xcMePu5JUDCYr83tohqBFtcYodS55oMucYkNNbgWeRpJWQGq2KEm5yjMrUBRsbczF9YAbwQJb63Szzdf8QQUn",
  "key34": "5EmNR79Du5nUmLKZ7diRmaV7rJ4TKVNs82DSwbKMyiT7VDS53Re7eqqhAATYvNtNPTdtFUnr3HsP8xZE7DpHvgDX",
  "key35": "3jH2oEgLSqN8Ei1SXCx9ovzPXfn9S2maBBsJ3C2d5ti2xBzn6iQMDaaixtDLFUt6gkqz8rBG4bTr21Qz4W33GFWv",
  "key36": "4chuQh9Grt3fAy79RAyCopSvhjX6S7gEWZor2qtXRRQLQAcofot1LnN7gZ6dKZ5sL2rBUy1BGfLHzjWBbHUeNmnt",
  "key37": "5gKEgfscCAX77HTwaBp9njxsFQEnBhEzcngs71t91cqZw9YjvtGyUsVxZPrABwkc7G5YfwzWHqdUTCb1WRVcV87J",
  "key38": "2LbLFELfbZwhZkWYUauBXZjNZQaduwo7b2MWVzu3huZAo3FpbD1ebzaSmprbpPUCdUDcn9gfZcTuPdDWKMxRMKv",
  "key39": "599Cpceacd4W4VvRKJ2eS9foCAufJkPfDjbKdDnLwAY4ANBfgA4tgWy164bQa1EvKy5NFs46Am2C1pxcUd3ZJUok",
  "key40": "5MBnRaUZVfq8CxjS717WsWT7PtDEsvfvuzhzLgcbsowr1TfY1fVXwZKYh9zVL97UJSV3kEMwj4vXhe9yh6PBRetp",
  "key41": "3r7C5SupUioYYgCvwW4wSvTZH5jxgsinYJVLasAC2nDFofkWbfMaAZ4wVzQoA32GqZU2c9XZXxoGXDPJz3Rigijz",
  "key42": "4TbhE9gZpqXBmAUPG9iZSWc63PqSJqeaWwhEGqLF3ttsYPvPdg65GQ8X2EVZjt8J1nPtgAEyZmAaayHHwKzj7f8N",
  "key43": "3vvFcv5yMJUt5UFbbb5EiFiw8CYws5N5JzVF7gD1ajYBM6vW2V41iHqBQ5NtwqQvnJv5ANrUmSuqB856Jjk5gMbU",
  "key44": "JFAGPu1tziqPUBLET71TBZShPFmrZXBdKWZQ8pK5xwnv7MrqoYNptMYmGW2QkM7dDcpkiSKyrCxiqp29wnqET53",
  "key45": "2QX55yhrZEEHqRQ71ufhb2uPjG7Es7Der6qxAuwdUCrqBmDTbgFbx6pbamPSBoERRoN2568Zukrm9qX7bt7kh9bU",
  "key46": "3kuKXYp9AEBsj1zffuY7U8q1Ui4r6cUs9U2sneW7abYkTaJKPhz8U3X6LknDftu4nTA9YaX6EvrQFmkuZw7paia7",
  "key47": "5zQoaaAeNXuYX8f2dwALtrRFkHRxYMYPFBXFBCBXo2B6nKz7DsmccUTtSXoyzSGtfkfcYQJ4Av9vfjGBLQMXFXTH",
  "key48": "2Szy5aDuiG2k3WFSa5g8G8KWz2Bft5ZTTtZeqKp7P4gurnaLf7VEwGRyRosaRToTaKrk7VsVC6a6KFA66CN6VCY9",
  "key49": "43SFvZjmExDQRSKtkP9HkDLL6rd2ryUH3dSEt7uRu6hP1TSyUjAioZXkTjGRcKddubaJDw92ccF4CRDhZ4SJntQj"
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

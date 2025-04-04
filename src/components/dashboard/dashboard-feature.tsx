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
    "mqKn9U1CKcZbFZTthg84SsGzAKLX7jw5Me5b1FD4MZVGXPBxib8VGXMKZc2gppG3MCqSNzktLXNxcb7k8uW11YQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42PQRBiTZG9DFuhWZ4n2nUWraJ9muHpHRjv2mS3SKrWzedTdnha8yge6r5Pha4EiAjNKcG4sixFHM9qukaEywbtb",
  "key1": "23S2Xt2AuEvsAxaT5UCd1jfc1CV5CSMcVxsNDowm6NztAKSjTHZrbijtDqQYbvKnexyCqTSmujfFChvf8rQcKUGS",
  "key2": "5HcrsEgqnUnHBS2X24v51rqYemmCjC5Th8Vigg8er1FFsARq4PYhRLnEE7aisxwnLYSPPESwTKS3gzZfWKMqpy7G",
  "key3": "ya4QBEUNQioXQHEMBpg2umroLoRSHNXCyJN3WG5ZPpAJTQREq8vvnrksCrRoV3RUvBorDS8tDnMGHT11uUGNs39",
  "key4": "3U811NjpknnnxpFvdVDEbexujcFw5vXi313nuekr7rYZPHFcDryxPZBjsHtKyn3oy98RZNgfDt8BivCHmLv7GLZ9",
  "key5": "5eeW28yRo1zR2dCoddxgHMngmJsXmVB2BQm912wTPKKtWuQKR9ucjadXZ6dBY59qJe9FQ1Cu9EJvJQ8oSHJ6iQru",
  "key6": "3Tf2A27bG52oj6rEb8Uo5ueot9XKyjrpxAFB7FqUFDmZFaU3ur21Bcrz4bDmf35SkfupSDML77WCwnkPyAvQm7RE",
  "key7": "26kvW8MYPU9PCdDfYGHVcEXGge8aDYypii9YRZK2x9dZW14eRW2EZZ7cJ4FmPLa43e2tNCbGJJwRHtLGRt4cZgEQ",
  "key8": "414do1w4r15mvMkZcoq1vQ2t8bCcZRyuJPFkrqTmMMMMcSA15QHNud8ribRgpo3XmjdQzPQrxebnyX9A74Et3e8E",
  "key9": "4ynHyqtgGhNU34bbirTmqyhDdYko3hHPCTv6aSD2Jt9G48X4ExaTHnha7RVLaRTT8FKuDerNngpDpb21bgm3YBSN",
  "key10": "teJfRR381RQCDyAgZiGroCi3A4TaqhNErvSazhZ7GgbzMju7CueSgSWNapfLQuKdqicCuHMfpBmoDhHBXJ2RCqW",
  "key11": "3NwAWfrsv79zUaZLXUVzDc3wsv7kf3JNzxkpwweCxGxGRT4WHBT2rPWKyPX5mC47kTvkdK2Wx8mKdtQDJ6765sS8",
  "key12": "4pXnfREyJbR6SJsWbVdrN1umMUxwfpWYer1beVA9Vycxvfr1ApRDxn4XL18f9WEPJ3vL6Yi3x7dv3ap7yj7E8UGp",
  "key13": "2hVQzPBCp8Z4nqedMj5136FCLnE9LxPSx1HDGbFAQ4gc3Xdf2LFUgtVCvchh6rCV7hzwUPL1s2uBkbg1rR6EbANN",
  "key14": "5Cy913tc977ps6d3LtSvNBXdnRDCWpR8GjHg6S46xfEJB2HzashAV1QsF4QLCtMHc76CAD2iMPui4PvLaqhxtFPJ",
  "key15": "23qF75V5D3GuU8Lp5wRxbbCc5WCQLJQdRNznYTEJb8nKCsR96ECQka73UA2RhUcMUhhk8p1XhAtg6PXxiJT59Q5h",
  "key16": "4jKP1Q8df48VTxnDjUruHioec961J4F8B5dv5xTCheEgZj6B35DqUwtQwYc5b78wmzM2Gw85ZeYmkcbuSJLVvypJ",
  "key17": "2g1es8hCDjkkBamziC4t5bohmGv3SofFGb3BQjtowh499WtAZ5cECmnpP4SEC9T7SbsYMK59a3iiANX7KjaQMhi7",
  "key18": "5oWiUQfcdZKk4SEk7aCrYtioqPRnac7TXzNVXYrCtZnJoZC7rmx98jWzQvVLRLUV126b1oTQHsLo9T6MVqTP9rQe",
  "key19": "3pDJUZhyDa1YVJcAj5CZwabffDvVvSYqkyJztRtD6G3Qy3YngiiNwFhNhYQpLzW1TL17mhDrDcTkATbFTw5VxiQg",
  "key20": "5RAFRuqsPS47ehDrZ6LzSZrKjbKSm4Et4couVFP2eNA7Nksiu835fHtqx3Ur43A5bLTA8rXjoUvzPNu7pq6zFRLL",
  "key21": "3Zi4k9VnNrkBE3pVCrNUNhcDPDWgahavS3RMqjY6TSTSHgqfYxzvibk74s1mh2SXUy977jhbe9cViKpRmR4E3BHj",
  "key22": "3RB7Df4fdwgHdYvEe85WNNM5szCZUMZcdAQB5oL32FY3LMsPiqW8euKVnQHbcXvydb3zJnrK28S9fwPMxSkrgJJd",
  "key23": "2rbqkSbUt6ZR6AXMogbyBNa5G5mmbVE85BWsviV9LnvHYDHZVZMBg7JHSek1DxcpdtqsPevpN1YaepYsaBywSyAL",
  "key24": "2DWrBkapVFP4eGsmcwGCbr76oAbwJ6i34tCZgmbfJQAHBUwBfq1HkLNLPPD8nRVkidYyfV4E4fbMr6TRTm89D37C",
  "key25": "XWw5m2KSDr1C2eQpiCge3UVEmzhNNcNM93MrHSjeRPVu832So5fceKEkXkP4U9uZHAyecZchUYQ5WAnZbetncAx",
  "key26": "4aLPgNBboWoBTC3E59iQPBumY4YhqwnPWstB5omummyTD7BPeJg2e4RbxRKb3s69igmKnnBGbbHXtLt11QVFQ7br",
  "key27": "25oQW59G32tvs8oh47PojmMmJav5f9atP1hFftiu3qoc2n4mrdUS1awPTdsBr8ZwChy2STm6p1RSW3VNJSyF8s7D",
  "key28": "DHPC35dWSFpst7T4z7DhgQGpDJzZUopSHxFqqptzNatyZijke6Yn6i8MPK8RVeRfWzfXsi3LnMqEJz28pHJh6US",
  "key29": "3bQAgfcTgCM3zTkn1N4dzpS7hvzR7T4he2NF9fuoAs6ujBrUfptWqpQDoKUzSmtNaxSca6HjPyJZnoeBfzegkhXh",
  "key30": "KmEvWUJBY9h4dfKpu8qvGFtcTXaTot5d5oeZDKQWeZNwP1C2cpCPtwakr7PkkSFEMFkRrubNCT8f5vWVzsJkGbq",
  "key31": "28R4YuRy6PYKmH6NLS9zFSnSyh3igfmt7oJcWQtXjQcVzbfnRJndTdpCizuwGnqQeWs63inYdKzah75sHkh9xbBy",
  "key32": "NcfvZ583SUjhVTTgWLFKd5dvHk1yixe1yg6Qhk5qB8JQkM95sMEG5e9KY2ZQgRPDC35GSFqguudfDUeunvDCoU8",
  "key33": "5qAbS5r6m6Z5f7PwqG131hFfaERN8UTbd99Pz9GsQLwFUoB7QjxybhmrHcJjhWP3SZ1YRxui3hBWEZwJWWrTRCBi"
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

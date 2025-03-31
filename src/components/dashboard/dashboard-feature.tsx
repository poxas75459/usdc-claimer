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
    "5f3PbMp3cpixf4zNSZTyqTXbwQQrzZvPg6dAtJgUDuSrbyd7NcKoak1xrMsZ4pw1Bne9anc9RrrozbexFCuzmWVk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ypb6xXqFhdtxhCdoKTWbozPuwRYqbyX2mC6erRMmxDGqZSzwRfxDda4sHA7yoSNBon2pSijzPYxhZve3Qteb5tN",
  "key1": "3Y39fi59eS2uUfmipLDp6kPBmM7qisTAZH9aYt4zUXzbt1a97FvUf2J9astPUJPfUFAuCFyUaiCcnX2sJ59WcXe1",
  "key2": "2S51f5RsvGn6Hg94gwxUGKnXus24dTi7ECYdrhpASugTtVMLNaq6EQ8YnMviihdcqecGjMGjxgHdCpSFLzuoicoG",
  "key3": "28R8cqVb36oZcTMdYrD4RstwhKfRDUN7xD7R1PTkx1GjhLhMJ9CW1SE26UxQD5NusiKXWAU89SzkSwj9JeuND2Gx",
  "key4": "4wqthYuc6TAg8hpW2WDFHMKD4BB6i1GnpJmiksTWJxvPQrq4f4z4iMeupdssuZodaEwv7NKc9zsqRA3f3cocszBG",
  "key5": "bL9y1d3NCHA2S1HE4WC1ZqoTaZCagBZ6iLtd6qQTbW7zctfUW6thEFP81pxTpxQGniNA2WTbPpSqLfQnGowmz5V",
  "key6": "324anetv6LZ6FuG7Yo36ebfPWC7uu9Eo45ojvFxRaxJqNCuZzhpBGa362QWUiZnS9RsEvdaDuPnStcDT77xZoEwF",
  "key7": "66VMeXwyyY6kpQuYkz7dNoHKSGKEVC42ZsRmBftaWZujAupDCh98cQdcUKK5YwZStbkmJ4rGFtkR4QbEuag7fpgB",
  "key8": "3J3y8DnFiZHchZrHT3cidgAEHsohiBNx8C1h4FB3DH6CwZgQwYRyzPaS8AnP2sfChqH67WjuGm7ehEse5sRr6W2k",
  "key9": "zkpkkAu68sY48CmxSFithCH3avYYXrmkP5bHQeGthxGXfNL9MC9DDcJfkwAN8PPcYHSH8Y5M3PJZN72ChMrngzo",
  "key10": "67JrbRRZtLy7nCjzPhZGiLZqYQRDBgCCVXZNDkMsCNi2zRmmUfax2iwGjESAesbT9FPHArCqjY5XTsHsiarN1XE",
  "key11": "5hwrTBZZyk1T72DGf2fzmd8S2EKBUTy1tQ51z5awoRWiDZn1EqDq1TXZvG6xaFfG3eDHeivB9Fi34UYZpp1fLGR2",
  "key12": "4izcJ8ZGWbs9nCB7bWDVQQ8FVNe1hXkPdaUZ3E7pcnadSSs6jtsaYvzdKEJHUSX7xQarPdMcniBMUMgCtcP4UVKq",
  "key13": "32KLVhFEjvsY1YBm3hqz1kU12Myq6ZRK3FZ9EkrgoNHyDZAuoJNCGrDtyqa2oKS85MjttQMBXzUkKLXqEEGkzo5H",
  "key14": "4vjkqoveCPeU8yXEaUrBdocF3sQRSMDwECaNwPaUjntpw8nbbF5a1TRFzf3ezWUz3JYGds5FzNUeyiHCFu7TXeGu",
  "key15": "5RYwUGRBmM9T8BtFfAtaeATCB5vpfdkYRYYCh3T1UvatcdGdhi52KcANX5YSpBTyxeyxYR7zPCbCah78DMUV597D",
  "key16": "4CQcdPjMmBCmfueLSQSQBHdQMwSb773z1soBadpYUaKSzurZf6VHtJGRPzFketWfXxmeaZFtHrqDhVaHc1BPj1hZ",
  "key17": "3GfUQhVKGpKH4z3RmTJR48nHy4DXodUzhXL58twy2L5SLCZ7B8DZDtx3uZDiFoBU2yULLpdx7kzquwEC67YmFbtP",
  "key18": "5vdgxryXrBjoHM1WEErWAy7AbGxjG8oL4oh2iV1K6ceYv2jHcTUqs7oAXnpUfGPVMQ9j4bTGwHRt1KTBYqsk9V1g",
  "key19": "5NHgSNprGXymz58vr1fLG51KKfcLdBLrvt664V2FQTfYuDF37q8GG67ddUhduyPc5SYDtwP5Wmpp7mTvNAWDswEZ",
  "key20": "5pHHMh6opcKf8zfULTL8HraYxRqA5t63XVRivpEinJQHyacsTNzh1iaBrEo2PUq7yAWEqrAQ4f35LLWN6gZrvnbt",
  "key21": "2FZQxnrMPXoANxek72DhNw5UGC5b6G9dN1GHvMs1phfYJsj8Gt7BZkYAozGcvEUVu2PohDNCRJEWa1RpqGkkcHTh",
  "key22": "2LApGv44o7xkffFascUEPKDLLnBDcGgtJwWdutUrQzBddQ65b48BiGwYYJZwdTb161fD2s4gHzAVAXN4DQAdhNpT",
  "key23": "2BYqPaGKnPFytUq4iNjvR5LfvJBWSeT8dKd2f56ABt56ocQRfNWcAQvek2WxuBAvXpcdfeZFAJ439vzgg4gpiiri",
  "key24": "5WwCpAe6evkbnRjgNBMLhBMwoXVJ4iSbo84u7VwUvVHYQF8DTqpmKamq1HidSqjPyW7jYT54oRdTezvAC7Qw91F5",
  "key25": "5vVXSRtXYSFYkzNm6CsDXeY9hYWfqJtfqcx8AvReeyUWXPNcVNzdkKB969VD5n21cnxWUKuNs93nwSzu4hkptW7Q",
  "key26": "2LRrLy25dmospqYRG84MfSWtLLKFZzs8mBbG2AFavPDJp8CUrLnLwgEXdAzYH2TsFCsrzRCiMdWGcs9Ukry62kah",
  "key27": "2r8RCai1vHU2yvMex3xjcFSfYHvL7ewV6RAQSiA2CzkCv14GjeGgvANZBnncSaNFaGRPpNgnTKWgrJo86uyiR9CG",
  "key28": "pmPuXRhqpu24JCQEZqigqDVhDoDoAC4Y7hd4HxaZMqPZuB4pruyQUAkHaumR16vbdHvvrQgMiLvy7uMUhenWU2L",
  "key29": "5mjR5Mk26VehGnB9ckXQWzDL6CktoEEoj6PMn4odxta878HvVenn2PJnQcJGydkLrKCspdsKL1Bc4Fbv1iikDk6k",
  "key30": "5XcTnDo8Dut4au1NVpG9rg1zm6fz6jEjwHaEX4pnJKRMv8ushpRGZFgi87MmimprV1LHDrDMq2x93yjj3ntLYi2B",
  "key31": "2Rbzwf18LY9tBurxfPKJeponQFQPwttageiR47sKuhD3Z1urx3joNTWaRNT9bhv843puHHo9199ZdBRMBGdYLzYq",
  "key32": "4R5N1RnN1nonx2BpXRvYuqeXL4B9UX8XfdZGdcYsdWCoq8cpPeshZpBxcLxmM6wR6eStaFNUMMDf2PAJjtvTXkNz",
  "key33": "LJ2seQEB19HcfYvd4hRs1dWcqFRh2QnK6zneYzNeKBJBYR5TzSWx5JfRAK9jeaA5BF5s3bpeLBuGjSBcb2iCgta",
  "key34": "4StKHAn6vQoRmHD1YvDzyt9dqpKiNp8wKyPWyhEg9jphkL3WyPQ8Vzc84gRF4T8vm7fAKLpAP63qcXZ7LqqWRzpN",
  "key35": "5QQzmysfoVeswnHgJPQKJjpiEfcpSoWqAaezLvGTQjoLUZvuNGybgVSC8Ka8ra8z89DtLXzQpWVqnggosuJCnvdB",
  "key36": "3CUwxMLrE29Chehnt3dcfnFNDB6bzyoKeK9WNPHkxoDn7JhGVhvtnsV4XPZnbVXdFMFruX6iRCdaSReV31UB3zop",
  "key37": "2WELRtcepn3tbicMT9yUuihfohsoNwuCSkkdZQ6XWV6Z67wyc5JkcfdBud6RUy7TWviheRVTUhysBQA1B6Nmhbno"
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

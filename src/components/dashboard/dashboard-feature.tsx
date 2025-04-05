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
    "E7CnxHBb3EDTDSR4M6mZ9NqUBUgQxRyRNgYTYm3xmyvAFywjVNJHvqYz9uoskAXVFZMKQuZ2HpHbxRkPrNB5oQS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zRE31XCt1zRVuE64WAJYK34WZY4tdTt8ewjpHSXZgs7xDsbHV7vqFcCdDhVPaH7oRgrTEJ7bNXuJPZDdcY4EGu8",
  "key1": "2HfyxVGPyE5vqFP2e4mDnyF8JRSfDnTErUkaGG7aySKbXAus6TuzNbQpFPLECAgNTPnnimhwFTwpty3yLTkf2mF7",
  "key2": "5zWRSTA4N9GapDMLTFypA1AV2nBSoQ2en1yKTTyccpyMRzTSuJ4JzBvZS3We1t8HCZaQWufBwdagmbewoUurPzzV",
  "key3": "qwv7kbEAncFLzKvVVSvPSLGiWiyhqhmo2cC28uhDLo6VaVmne6rKLPtCcLUDTm38EBokgr9NCfYNxE1Vd5TfVxG",
  "key4": "4K2P1erWyRzLKvkWEne9AZvhtmkDCYbE7Lu1W4n741VxaHsbeN4X6X2PcsgxNXg9QmuCuqZXqdbMv8qTJ3vzRpqG",
  "key5": "671fuMTdeE9DGC4FmVnJYSZim2nYQ47nAaP8NvJyY3fPDjrgTAnE56o5kxyWRkumpMBjv7pH5Go1neeWQzMXMapk",
  "key6": "3gJJazGjRi4pqqyBcFugVzqMZ2QELeu6pKtHsfL426Fh5gZeox2MzKqhXSJLh2RZFLKir8aA3esvtQYpoASwJsyt",
  "key7": "gDkCofQmSghyA8Vd4Mz35DrGwrwnachxPFeaBUsev22tUoSaFkVyQ673S8XMGDcK2ptjNjYQd2BhAj6zULSisbA",
  "key8": "4RtcG6Ys6csLsCYh5DKZsFXasZ8qDojMkbgyUM7bxizad1SVkimc4Q5NUa3N7B82y9QhZv1pubnh3UApFNDY9ptf",
  "key9": "3HkSwz1t748PnLFMpgKDv66J6WvoXLC2BLbNy6U6xqR7tvaQPZk8JNdXxEp6yjgafeZwR6CBLy3G3DuVtf8hjCE6",
  "key10": "4UnX1Pwon2zAG67BnjY7Za8MidYio7fMRUP3vQnFHkip7SQRguoG7Td9uwmLvZ1UT53n2x6WVAWZskGfASRU1Rz",
  "key11": "65FRD8YA888sEXmz3hzSUNUM745SXwpCiPkkZwYX4CH1q22dYxLX3K1UDFSFnLKpotMgDTsGVWsf53k6JhePgRpG",
  "key12": "2XGj3X68TkaNFZADmhjfUdRtpAdPmSCPhSiDVMsArPyarG7Qhk5nVijvD9qBrknTmXTRRtn73ZZXNiHA9x7YJmZP",
  "key13": "BQ2nQnP9d1noapPxxcM97DKDtT2iyM3LCeDZFrfMnYvrRg5QCBCpb4dRiKq5UEfZSHo32F21mA94jM8UdGESppg",
  "key14": "3eBgXz33RhzY5ALiJsKnYn7XKF6Qf4wKLMLPFCzYNNcYgatxyGP9Bp4DboxADibxEGwXdMj9Rpg6VFk3kuGMEWKY",
  "key15": "32fzvCxib9Bh7jaAWDx234AiqM9pEaTYeuoU6csGBEuvwEe1ow1PX18D1XqrjMFcervUFopJfYjRKNVUefKdkuXY",
  "key16": "4tGL9hCTptxM6bUV3CwK7uDcDkjtJZBsJ89HgoxuLwRCELJJNs6dC2HtPESSrHJzSPPCZzRs2FQvyfxnPQAXCvAb",
  "key17": "3av6Bquae1FGTjTaKHj5movhRYZD7FEUswQikd6xFaNK5j5RfTLZQVQHpKdvzSrKZPTUkcDH5pB6m5Gk5YYrndBu",
  "key18": "SX1Db7vxHiGLGRiirAkEtZJxDFdVkWWiA43JA1HhJpUwbnJEKcZBX3RUXr3d3gvPGjKFzdnvYTCSFfLJMNCfnXJ",
  "key19": "5Afvb1QEV5cFPCNsMNQdbJLDq3PHvVBrpbSk3j7UYH5Nhx9zo2sHF5NDbQyj1VkWpiVKrD7Q5VngmNDZXBohgvgo",
  "key20": "3gHuJzCjJtKNNU7sr6pPi3h6kHnWHqpg15dSqALJ2DxcYyb3BXrbHZqQuRX1QViWXebjpbxj9P2JFSPvLi8jRf4u",
  "key21": "3kJ95d8YrFXDm8rJJtgkdbuKqLxLdJ4pnzvErHM8BJDFF6XmwMrLJ9wewpTJbpvysXEEuNJo8LjghaFQU9yC9L8c",
  "key22": "5cikMbiGN19UrpuAy93f27HL6fYGKPm1CWDGRq8xw7XjGLtvtfMa93gpP4ADeCa6FowFEm9QJTGSaz2QQeYxNVLm",
  "key23": "5YrFjo8st6N4GttDSdojQ26diCzghCWf8AA9GN7fJRqaK62JZX47kwNsUkJtuAtKCZNec8fVjCw56fNXTXe9Gzch",
  "key24": "2BPvY92Tx46bJh96MvPzkRUoxDHLFbX6LjiXbgRPegdnsDA7Ba19kSGAbKXJLco9Ga2reTJcw5nD1bwN89Z9qQQZ",
  "key25": "48TVqgfyjdZ93V5f21vTUyu7qiE1cyxz8FgRRd3Dt2atHbekjvmr9TLj2igu4Z4rGLeqPuMNW4kFGeNJEeBU2tm6",
  "key26": "58b7kT9Z99gTf4pMQcNZjoD5RuqweDesxSAFStYYnNe1MroDxJyXx6EFssxiJAg9hHhSSPQuGbsKkSuS8j54iZ2Z",
  "key27": "3YyVJ51d5PyfmLs6NEpDCEN3e7uPZ1dsWQYYwkDVKCvwcyuFyBfx45UeeALgciZ59eZyosJ7JJNZkpu1dpPPFeS4",
  "key28": "vMnjJPiiDPyZoZSC5hMTqE4r2DSSjtyZocwP8zFy6jcQFdzVnomepSr3Y4Sr7qgomZ2jU6fffegD3jWu4EX6UyS",
  "key29": "TxEgktthqBi9Uiysi3zzMTy5YfVj1QQibm5aeAN46UUFUcFVL8xwiSa1WPLj5rJ8tCqhXoS9gEj2RzkGUXbzqMv",
  "key30": "4oW66p4QKPiaugHLVo8TBchrBmecX9inGpDKPJbtovSPRSDDs9MpE1kzKV9N7rKeNVRnjtuwtroSJfyK1yrPKFCW"
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

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
    "y9yyedR2UinZJ394rTUTcCFkSYkqN8pk9FQeDHZDGUH77UpteXawGLoe2f3vGsappvs9pBWsWP6XpGJDRGyrKDn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jXf8uLKsaiaYbkozQjYhWdv2L4BB7AZNG2WWsPuLLrCTGXJPzLvSEMn5Npki8Q82QK2hmeBn6LQX4k495GCmhbM",
  "key1": "2Hn49gwcPw7JvWrbszBdobisNgos9QXhxoKX1JhwChr8vgFcyikyUaFwkEGWA2uFToNr98TYCiiivV4hzULe33k8",
  "key2": "2D2H2iEp1yTAXX1rQnRyL2aA2BokDcaXBFooA9NLsXMbErxFisiqXjuSR9tSGL266pdHM2eaYgJxfDE5GqAQjWq2",
  "key3": "fjRmMfvWCbvC5PdHTDZU99a5wXGoqhrZyiSoRFSMNdFtA6Nq5FnATTQPNMLVwLhMuxn1bXVBcvMPDLS132xJvNw",
  "key4": "3n6QEK9xrBYrqWG4b6Rbr6bmAntHoLq48wMDXpgbzY1ybpiyG4sHNSkPbrfUUw3HP4NT3QaoMUXai81jydfog8HB",
  "key5": "qiYSd7PuQg7VDZVTaTVZrhZKMV8pojNepKTYehxsqGxscqNESPUvyzL9VwyCQGgChUAL3SvT6UmscdTgLNLeYBD",
  "key6": "61jAgpZw8J92Js1bqocxTbMWSQYxuuFBufqj7MXuvq1vQmDGDW1qo1Hpp9CC7z9rkCLkNtNHmEfc96fwTTGBR2GK",
  "key7": "3LUkuhNp63cGrCermHDTkkCp9Tb3ioPvGcrpGWqkec3qx59FYmaPLNJovtNPAm191zKiLFLQVJTMMs47BRaoPz6u",
  "key8": "3zTtQZoEvC6ECBE5fTEj7HeN4kCpHJN8qCPoTyrE7fxe2V9bfFCdhMXvSQVrE2oDRuXeqYCJYYg66XtZzNKXbjat",
  "key9": "33oVQEp9AJ2gXU9bV8xAwcrLnHLjxSSs17KnAajh5A3eFQwx5L56mrmHBHktrGTcdfKBYcZ8eMreuJh4YXNM7yiq",
  "key10": "2h2QzyXWFExEDPXNSNBp4wDxpehbf2qFv2upBryExcQHYEvy6q63Nsp9RFk63QNvjfxrBQWUSdHNayn7PhVVt9bi",
  "key11": "xHAayTtJt8yvg3aLr3W5Hs7zqgmF1c22ExwUcVcfG3gc54eNF3k3eLdFp2f7QnNf7adXiLPPqVCfQWgq638oHRk",
  "key12": "4w6XpvNr2KZL1VhonRZi4CDJNqeA4L81XRAZTit648CtGmuisifCKBrLYT3MRE4ZfNaPAF8JhQEc84n4VDkdGzjN",
  "key13": "4LDC5Uf9NyB516PD6xYY1fYBqDxE3MEGS81WR25ipErwpvh3FremKyNhP2VEmYeiQDUJx7sGb9LMpG9qmccG2duX",
  "key14": "iZXW27PvP2UQ9gRw2iDrqUjbZGdzwsVQRq3WmHbamfwMjiSn11MzXdPexzTyaA4espAMjFG2wZhUBc7T2MCkEm1",
  "key15": "2Mp81Mv48uPTAzRasPp9hWfhe7wgWz1zM8Ke6tc3Fo8x4WzJq7F9vyU1BGuHea5W1iCnkyjmAzf5AzBjs95dcSxe",
  "key16": "npfn8Si4HZ9Zu8Yhz9rdxXwgg4p7Bd6deJurFiWYgPqZg6JNdrywo8TjjUtv4ubZtV5FWiXJJZvZ972Z1BSadnx",
  "key17": "5oXDdcWdkjpMBJgrFkK3JRYKnv76Z9ScCsW8z8L9pF2zn9XAuNELtHgbgd57YEwm1Yy3TL7TgZiENeLVr4pE8dX6",
  "key18": "4bPHSCfocuGfeEVvDa1R9KjrC6rMYEntJR1qoCmBQRqRoeZKkUCyrxP9x1gSZ5P93YksLK4R2CTTVXGd4434R3ME",
  "key19": "2ErAg8rWgVeR3WxDVNiDKwmcrRAgeVSPuj5qbhh678UFXaM6DUi1GmuLXcsraTHCoXYqb68NS3oqupB7psUBAHwf",
  "key20": "2y2NaErgV3G8gxsLcdiZ5EyPYoTczRo9RC8ruChYZUQ8mKGKKXTJUp8fzoaA428MXB1itdLpBM7X4kS69AGDTDHw",
  "key21": "3NENsztDhGtsgU456Ciu99GU5epquP2KVjQeL9p5s9dyvBSSajCybVZS3rzAv29KXWxbn2c9E48MBQbd3a38rPSH",
  "key22": "51skzDocLoP9xPWz23vgp9gnC48gYgKbPoUSvKiQXBSu5izjn7cVa2UD6XyZfXwiRXUwayCgot5Qs4iV41kA1FLT",
  "key23": "4YqLmh9trbLz5s48oNiKamHoW4yTU4CKXiUBFFNSSpzMSKRRQ4Ko1xpoajmaSSWbLvtQvFwKUESikrM559EmM9hJ",
  "key24": "5ehuWFzVGyhHsWzrYfn2B6ncxr2WFJKPsnUaj638uwf4u5WVy1tErpqg97h35tZxBJXTNBWffwKFBuH14iKhyr6r",
  "key25": "4JjBFt52EhhLNUVzfP8NREJ2W2hvUFrVetKVc4Scgta8hvuFxgnCCi6G7EmvA3y5mRLjoabtbLfw1ZhfziJAqn5F",
  "key26": "4LkCz8dRNCM5MLoYbSezVAdCQKqQpkmG8uap3U1ewwk5thByd6GKFBfgPpGwWBAQc8ujWshdNw51MhHPQTe881Bu",
  "key27": "5fYaGrtX3m4GS78XUBDCUT2crw5JJfFvo1ZbwBztUHyVKptnx8uZ8Pzn4amjM6CrxGXW7Q49ZnbABRZ6rbzUtrC8",
  "key28": "TM5foaw5BU1gmYRuArJp6snrgfTZjCDUSqps5pDrGR9H3cA3jiQCXHQqSN1wwvhxDmpsGjFE4dZukYfCcAq2WiR",
  "key29": "3dbnhb6FDMdyBHLX2abXey3b5dVw6nQaaR1GGArLH2t4tau9oAa1qipCzFLw3bhH2fjVqRxED2U1b5W4u2naCXg8",
  "key30": "2KYcGqpApuvqBUZKpWtj4LjiaLHW7VFafDQ8v5HMW9BBxgDNsF6Exd4QoobusbDLrZ8mYkisTXHEtfnH6NKYVPzR",
  "key31": "5jV52CeZY2fqYZ3XhTfhC8BogsFQHxrmDVjua3oisDTpndTsnwxtVKGv4xTMcgjuJhovoutLB8MdZBHXG44H64BT",
  "key32": "2DSv1oQLJnM6AHTeJm22CPdQDyszNyhxuss24ofYPQbKQkci71T7YGmbwBZCgMQJ1eP3iAXJmFJ3X7aL3e4uBZXw",
  "key33": "2dJVKR8SxLE5fdKFDdPHG3ne66eSSK5EubYvqnBrD8sZbFcyvQs5ut5CZi31G6Aston84pfonzSGGZFAtwEpxj1t",
  "key34": "4mUTQjDBUgqFYM1XwCJcZvPmCBvZU5T8pVc53zZo214KQwGzMdaB1hdVkQxe8cKUevhN1xYdFZSJx6R7mzTmspJ4",
  "key35": "3jJcfj66bQkN9ybWbTq6fRXfxBK7TwAwgVi549kNaYvJZGkj3ssRpvygyx6M7g39nU1nW4X4PgxJNdJQZ2gHY5kW"
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

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
    "4Dwygv6SmLyZFqDSHajbTVWLFrnJwTSidPNSr6iNgVW51CkSHBo8nuDAzXHZ2YXLit3YTwt1hA8mmTVxnnssbi9U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WX352Q9NvxB1Tqfy6enax8n4QdX5EcvDWufHBGLb8E8ZLcMHdGrk4Ft4JaqGGsx9NVqxE3FYe7JeZywCat1BJ4r",
  "key1": "vANu9VzynbvTej5zyEHyReod8MmRCfH6JyAWsLwBHErh228XiyXaZD2VQ5q7cJ5K98fJCmVGAGj74oTcyUQ3vKJ",
  "key2": "2Sy1Vdz3Ar2mxzvbf4vY4Pw7fhK7rDUZp3QeuLNbsYvdSVVdPiVGGXDRMPUqTpbqt322PS2TT2hUwXBcT1h6rfE3",
  "key3": "4cXvwVVGsfFYbejigwidcxtPyKETxzT1fwm72gogBbRYe6EN2xgkRKtMQdXoFHZLBznX8GJpB6iyLsyLz1LkW3Dr",
  "key4": "5DqhNFLpyoVdbi2ka2XWhYff7YL2ckxQjxZJfvx3xG75otZdZAFXNq4qjbLN4RZpNvdmstSX1jNcx98tr5jaM8dr",
  "key5": "2SK8EXFLcHTfhacK1EQXpSCcQ9z5kmahGeDp1ykJGrfK8qp779JzPHQkXtvyZjkhV3wTedMty9ecfFBuV8DBg6aU",
  "key6": "5d2LadKybgYizzogvWWExppqNzhu5NaVW2t2ZhDSrvU6bpNz65sZnrN3XDk1M6yHRWDWBuThvvNf8939B8okNWm",
  "key7": "47eAPiUntNEZzrSTKqYdsb84eTLgVbCnS4Phcp5m2zHUoHymr3UoshrhhvQzsUE2jCHKeP7aF7YkqJPvU8FzZgUZ",
  "key8": "4wYcRw196LazDY3UMEuu7nawHEooQBaHxDzSyjsenQNuQq3h98hdRpHKkHiF7TFto8nqs58Yo6hPDZBAuyY8G6Ea",
  "key9": "4VF5JK1NTGxWDP46KxhuKU3vgd2AeJRhV56kBuTzVggEgB581hcRbZyjzUoByHmPBbkoujopoHgNx1n9nwg613Zr",
  "key10": "2K1jcWMCdWFteUAY5jJTnDnMd2rk5y7z8aqukFmmtrPT9ZpX666TydtMFwX4427g1V7uGhP4PmjdzsAdokfyr2Tn",
  "key11": "3UksZhMBYneJktn33zdZUVS3Gib7TvyqvdL9gtdkASbwXF5Rk8Bo1Rr1zTwtMFXuRRJ3va4QERkSR8JCXCVHr1xK",
  "key12": "3n8vAjyQTGtnqjLssap7XfgVBhxFFHwopzmP4gqWC8ja4UJH4EWZcnm1bd5nbkssLo6sLRoQNiK1JrevNaTLGCC2",
  "key13": "4uZCEM2GvDJTGXQnos9CV1axGAHeLam2iTPZMRqH3FDy9tFmSaWWr8kgBW6M8kGfn84ELhexsMRJaJ7QQNThZjnH",
  "key14": "3J16T5eEGzZrdBJJwBaQ98M3KVNW3QCyhcFyCFumEyh4DmVVKEgmR5JPdNxDtLvKooYoH1zfX4Y3faGcY9eGT3Ph",
  "key15": "1RZSp8YrzEizNqA52jRcpZPrpL4dbxPMEJc4RXnxU5oUJ4Ev6Cdszkqt47A5aYeg2qBHAAaQM8WQoHhzMYeuecT",
  "key16": "2oXkVWr9sj4Wnaoy74qhNTcxy4LrcdPKeK1cyviufSf9WaSRDW3PHcJz9j3WgWTFVCCFRRas357fLTBUyjhbMW4B",
  "key17": "dARLmrDKnPshjJaCAet7chZkrSht4mxw8Wv2NtFnVGNAXnxdyStu3PYYSKxSLFMAhrDLeWsSes37dfrmcrbwMsQ",
  "key18": "jowTfiY7WwfsuHdGUEKkXDH9aYVyDZ71TWAjMF43aLJ3Egbx6FhBcDtPwFRxbL46EaeXi5hUmunam2WuAbsqNpq",
  "key19": "3J6maEwx1G6qWdNgPncui5iHoYX8p2T5u9ZPzcFMVrQYywtJyTPpC3HLKYME2oCLmB4Nsb4ZYPeaFvBNUKjeW2rV",
  "key20": "4DRdhu7Qy1SJRaXPe8FbnbgijZyJKQw1DhE3hSHFQXRc3BARzis5ckJAcrTzUBsckSMxi9wVSMyDiehNxcwPGqfm",
  "key21": "XB8LFiJQfouizMy3YTBPgMg3aRBmyqSNaptDTuVFcKqEj3AG6nNYRZejSRzgDrQNTJwfNowZNtjdGfo1UD2Gk3q",
  "key22": "3UEtDkWPNUMvtberWRAozA9Xwd1BGS4QrJv1EP48b8BG3YoavKyoNofr7FTt8rnN2Fk4SsEvbe7w2jne79GxCEMq",
  "key23": "2j3dB1ke4ucqcZgEhNiQkMmiXm5jzTcEmNHqxy45mG9JpvUoxcKV1wFrF5eXkXEjtnjzxd6gbSfp9zdVTHZSFxYZ",
  "key24": "3uZLrV2mRNfGzsHE4Y66mnVYNF7TVG6QS9Ta1UcJNnGiFWDoaqMfvHigBwRkYdMZWRkdAyCkGZAnkZuJvErCrkgz",
  "key25": "3EF93YAi1M2djNRwhB3SBMM6fSeeVtLFz3z7GRYYaSYp7gi69UyxBNXSTsSki9aPSui3tbGdjkQjwGZfP5Quan3o",
  "key26": "5jvTi34uuWk4UkXmiTumnT9wB2szewoFasG743C1fCrQ8f2X4LQTdBT9paRNudjJWcLJtXMya3sR2HZW8bkDPmjc",
  "key27": "27i3xcsBsD5nojvAjUV14na8gfzbtwX21UQjKRzWt17RpaoJwXexPZowwRP6q9u2j3nZESnPfrTLH7vVKXRb7gwp",
  "key28": "4Kn6rwBu6TctFUSBaAELXZazV2GkJPj1S53tvMGVpUzny1RaCxUwZ75Dx1vSTbDN2pjicxVQcrTGgvX47Q6pJ9Zs",
  "key29": "5QW9MwqM7AB4irMSipNeBs9F1nmx7n2nXVkYK3vhD8vzVz4v84JW1CiEEWceJ5vbviigvso1RbNaYbAJagTkrRzq"
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

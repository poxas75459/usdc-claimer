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
    "26t6LF5rvrmXuHs7c5XAtWoXZimDvqjast6kDWDktbRB7Xt2eSCLHWjBB6qbcEz5bTHmVUYD4mdRXP7kUrpQ2opZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xz9hP3RPWLdahoQBdnyxDon2dUqLxYhvjUcheY8QfxSwRwww8CpXd49rkJovoSR1hs1zPk2KrvxZNDdxyRtWNRE",
  "key1": "3r4sDrLe8vU5nekZWza3xSAr2wCidatPAXp2f7nh7xkpPn6ZQzBDopxqpxrdgeaAtuWfpeTEc4SqK24pCKYsT7CZ",
  "key2": "2m6ijXoMGYHvNgGo5m3KVWv2sBRF7UTYvfSzi2yPvVMfUESFivBNyiYh1i3PRFRUHnionX9N7WrJcLMpQZKzf6FZ",
  "key3": "4rzqfzGcvUjXuzRAzNz9n2K9ssiDKi318DRdrnoVrvm9Pn2PDBqfpqLwsmY4Kxi8x7r2LoVVUTqRMKYFjPp2NK4g",
  "key4": "2wjirTGRD9dcoVz3mNYqb5gzJSmgcRBaZ3fer9KGDteMCpqtPfKwt4SP1ekajcNhCkVRF4JdTMKJ8yqqsdBvimSv",
  "key5": "3WhRvPxADpmnMGrWneJ9iFkdtRLimivkFkhB4VUAVwQmTv3LdVwbRhGUCeinokou6fcp5z7urcw5sScvVJP7VZ1A",
  "key6": "ZDHvi5on3yAwA9GkdSP5fFrbGBXqkY4k2gkMCtQH6tq4J9B3yfUsNiAND8sAXrhCUFdrhTc4pvXy9g6eZtbzLGE",
  "key7": "GQQecNzZr7Tb93DouaeRc4svKKSnetthn5UumA9xARobAKGhaBuQciyCvPLcYqy8qeTavAeZ8cdhL3Xwkf7NTok",
  "key8": "59zgd9ScGDsX45jPZ8MhecV1GRc36y7U8HXxcxVEy4YwLeXuR48caBYcEp5wQCvdidJL3TJkjnNXkUdEwpw8Ar2o",
  "key9": "2ceeSXmHLEB2q9m55F7WJyZ6wpcS1EHyeRdAgCdSavWaGAy7uhPnhw3y5WRyLKPVtr4x7YDuW76MTF1ENffA8SVn",
  "key10": "3LQbyHcLfFAFZgThzvf6cXWrR57ieo9CibPapoLeUNQfFncTCvyzKW3Ji5xgi6mdHeB9TgixgmPgR8GZMDTY6aKF",
  "key11": "4CRrHtHw3ZnN34KKGJxREekRGvm6MpLXcTJvFpoAfFpRdRWNfBjvWTPGWtZsLxoxjNGp4Q1krxVMrjXzkymFwdPP",
  "key12": "3c8eTDmTmhjq69MmGRvij6sc7g58zZ47BhdxSbBwBxSeE41G9ppJ9gmRxLDGXCw48dyczh4wzdaXZiVyQMTEf13y",
  "key13": "2K1qsfUeXcirUr7jEd5AymrVnKojvbvpPhrtnfgjNCzBPpUXN6iz1KRcN45rq5Sq3fPwdkTATnQDCM5w2MzQBrzv",
  "key14": "4XubbnBjd4ELj2JuhBDr5Hrvs4j27Wavt9gakKcbgFxmVkZKwypGKThgHvdTXTiciBzArej4jGWSM2pGkyR5NPq5",
  "key15": "3NRtX875Kp7t46riiomyKpMPCcZmXAoH2NgaHAiJ69vMpPTQCndFe3ALyW2k2ssX16EKCN6B8JoUbBWSLXvym6SW",
  "key16": "38Ler1SbsBcYFC5GL9UZq8pBpTpWM9pVpD6PbrrXt3rgr7qjsi6qmGsqybq18LezEiwM38gso4gxK2LQjDmzfgin",
  "key17": "26FXXFiRYdX8GEuPgeMBGtKdgaz6v25Ru3PiCKddDyPeRgVQq3J3CiQSRaD3Tq2nyxftrAfXTJ38bBedjgGKsY3D",
  "key18": "kApKv8UztuvVWkSVeErjKLd2WJSbeRc9gz5A8GEac5eSsEkEiWMhkptUBZmDZSspoBLFAxfqjGGVSsKnjC9pPyz",
  "key19": "5zZmcKF3Lgg22c42N22MXggUcJn9VzWJapr9nf9drZjCLzPCqThq3H5XUMW86wYpGFnAFELs2XEwffvqSZhN6dw5",
  "key20": "5Hj2nRTW8hpQHhEBFjpxJZir3KPvASEbjHr1m4LEc2CcwWi4LgVwyKvwETsEUyme1Gne2bXSg3AHjRPvkZdvX9E1",
  "key21": "RqftVvquRqghcxAXQ9epMboxCjfC1riB2yYq9FQJvwg3NgJmLCRkmRYDU8isFU7bQFPVJECtZfoXWWCTdPYzTP4",
  "key22": "sRtPDkzbKSxjX2DFp7teQx4tf59ShPuz2Jn1q4zvUc1uQyhD2Uy1KoSLSTuDNVvWMHufRd3pCaGZWWmMBZTXYSd",
  "key23": "WYgvJV8ZqNb2mWeP53fkNf7j3brJb68gDGLuiEcHUJmpXGiESW9QXixxPDLEcaUiw7TkRCodwgtkf9ae7UMtGoA",
  "key24": "FPBuW52TwatNGvTyT2QNBDjP1t9YW6kh5eLiwS53oM15DG15E1iVSKws2m64fSpCPF8RP2ZbzXZzj4VS2hRQkww",
  "key25": "34H6qeFJmcVpTNMUoJ9n7ZD5MCtwS7p5QVZbBHQwQn76DsSizkcq7mnTzGQTAfoPKYz2ydkX5bHSPkBAP9c78NeJ",
  "key26": "UxfTjfWhUJd9AJxYysdXYWuGvpJBwbmVcQPAt8QsX5onDVZifr4Xvs9zVuPjqLMUCouqzu3cY7aUVabhiKgqbrA",
  "key27": "ZfMRCBJoT36hBG4vwMMc8PppiXzhaFysL1sNtekoG2M5mkzg4ob5b9ZYbzA57iGLve5teqJiksxR5YJKSQ2om3D"
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

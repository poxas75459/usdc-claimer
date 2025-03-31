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
    "54SXJroEHBwZmpZ42ucCjx6q4VomWNdtCCK2F3vY8j2vVrrFapYkt8sVn6VNcLxSAnjgkKa6rDgXKU4wR9rtHnW3"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "3CiwAYVGsN2UmXedTNvWHicSFT5iLJqkJNBfiwa8iKoPG65budDWs1YFseuwHTysr4GqXk1EFwPU6NHopTtBR36B",
  "decoyKey1": "MoFg4pcqnxJ7CrLDAw8xHUE5hK146qcKGWYDEAVPSh8ai1rb7f4HHGjXkiW63EPc3kLdedCFanjKAtZ7R2KBmWm",
  "decoyKey2": "3F8HJVgE6ZqPDQzGkuXG5vNRw5qi6MX73tFiCq3uXi2ZxxKUh8zZaMXr19AJ3zwGNkfPLr7YCT9ZFYeHNoCyjxq",
  "decoyKey3": "2nciC2J3ofeNTtGk2q7WyG4Jj6mkbH9B77CYdcbpTAZ7MbEhSqaRjiaJbxaapR754QyoDDgZYuSTQjjvU6EcYER8",
  "decoyKey4": "2gZgJKtLgT95GVSNXBLTs6Ced4anFDGrvDK6N3wvuEqPeULU3DBAMz7fGa2Gy9gtmKPkZQM9ejA9FwETLd24sMwD",
  "decoyKey5": "5t422ha1VHK7sxTCtGXZASiFhuZ9gfHX9fVtcdsb791BKrDaBGA9McvRM4DXxyke8KAZ1cNtZ6w6A3ERdydyKcZJ",
  "decoyKey6": "2zCBgixWXxRavfJZ98tGfAhVUcqL42mce5guT6pWNrxAMzzd8ufsKq3aHsqh1hGKYJ9di7eKCYPbN2zhWkNQhhky",
  "decoyKey7": "2crFXoAyW4CrtbWt1mEDkR76qTvkGtWBMVsGuYYmkmTwq22JrF9yGfT1PSEjjoou6EvUikyDot6Y8pNDW13hCMQE",
  "decoyKey8": "2cTRiuGUzhopRNshLDyH3AFsR2mvJ63fr9V6ZFoN8kedk2fdfEC769rPL51mh8K3FDoDMPHs9WnmrVduZDrM9CGC",
  "decoyKey9": "sdMLGhLEyzVsJMQyoRpVNJmsUfnvZF5AuVboCEPQyAHv6VrRXJFnmYLWCu74eyHQX4kxmS5eESaKgvs1uB2oTxe",
  "decoyKey10": "ohzCQ3X6ZBjXM83wKWi4W2eNKHXEdD5HfoYSwWhrftPNDMdby4dFFgggCPpzbyHerfitLfnRHidpzHmL6tKE3SM",
  "decoyKey11": "3fxBGoHbBEfTKD9qCYQi8VgjBm3far6JrpnVWYqNiSkXP2vcqs4Mw4wm4TxEmqq4BUJa5MpYD7uzSPcMwCJdWbyS",
  "decoyKey12": "213Y3oNsyEQuqDAD8LYRZynDrkSjXzUBTM5QDQzQXLjJHAGHgTjW8TR4fyjYgdwoCJ54ctYhVLeh4QaeLuYFzAax",
  "decoyKey13": "4NAkrjMfawLwg7Azk5SPtByLrHqy6iCKEPU8ki2MzQjASCmF7Qk6WmAEYD9Es6DPympJtEMEzqZfDM2r2zW8ng8k",
  "decoyKey14": "2tqNXVH3jWKxfreNEAvwPFXJ5T1Q7kTLRmYEkCHTnP4384bKPXZ7vbESEySNbN7192Fq3Thkd8bqJ2HK8QRRFW2v",
  "decoyKey15": "5YUpkvyYZrb2KRtU2tBkk2F68hofZeHY14RBDf2jzLUH8aTd3TZRPytCnq7m97VTaKNXnzzzofxD8EP5iweQWQUV",
  "decoyKey16": "5kaRdk7FXJ5JrX2ADTDcdzRLUZADhio1cWthbo4TWpGqnGRNwaaBznXGPZ5Ni3EKpWnfFNxWRC8RZiTmDKGWFMuU",
  "decoyKey17": "2yyUvJf7w8m7vtaETBnq7Q4DoVNFmHkizL672y9nXgtqSJP5tpMGFCazPSrH4SdLZLn42aFSnfyibXDEBcpLGyV4",
  "decoyKey18": "3tHhdvp6jAvymY2brpXNC4kfbzMxgNceFLKxJXAL5sWsKddnS2wCcTAeUVi6DgZbFoB26KQEnt6FoJ24WvLcoQQ6",
  "decoyKey19": "4vicQfU6bDn9icT43LctbdffxLMnVkbsmasaXhZK3A2D7CNpMr6P9VWh7oZbBzA8bRWffrJaLT3UHiVtVm5Tbjgm",
  "decoyKey20": "PkHocuC9F3iszjcu4kFqfLecdr2Tu6bFXJUvDvfvCunKjUmrPPtW13UKJhmoGLLCbcq3wexYbfBUkiXc1aUnkYp",
  "decoyKey21": "K5o46CA4k6K63kBTbVbAyaJgoAKKNUrEnweGjbtnbQ9eyVeKjz217seRZTMFZjW6m7yBJFJ7wgf8BALQaM3h58G",
  "decoyKey22": "397127cbPXE1KwprcQD4bi37YHBYpibBnUpSzwZn8WTRxWPTYofmcHXzvj6n5JbgZRqGxzz3D1Ny5aua91i25KyD",
  "decoyKey23": "3L1PjpLctyGTfe5NyFrSfQZmgfcjbFSHETxB4pmaKAjpH5sEj3g9nKrQcC4iXso6vABPC8rbLgNkTPDmDpNyfTW7",
  "decoyKey24": "2D4FRrfZTUqtuUgqjAEMLhVJaNN347scWP6m7v8hFa5vzSKUxDLGwz4zFuei8jnb1thGCJidtSxXjhDR9CozV4Xi",
  "decoyKey25": "4u6sWtGqFzCXBKtoAQZhQDRZatNLFiEfjkx2iL2pVw5YvRFfhqkxN4HiK3RqEwXx9raJteWkCDuvDT7KppmpkWe1",
  "decoyKey26": "HGrhocY1CwHN1SqCYEAmBkrgzbJ3cNRttMXJTscsT11yucirM1rEqxWG9ba2XBtDJWsVoNwHmgwe8kbnGaUCqwZ",
  "decoyKey27": "2xD9jqLYRnx8EDuxGHuRTiDhmrqGGLusrnKF6CssD8rSsZqvpxBKPui23jCd5v2A6AzEjanPFcr9UG1gxZSo6zAr",
  "decoyKey28": "2mnbM9tWWx1H7rZV9GjNThRU7xCJXKY4Re9WKRKMzycbUQ7vCnLs1zCqmzi9w2ciHYcmeeJE6VjKW9zSXSrgmSnK"
};
// DECOY_KEYS_END
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
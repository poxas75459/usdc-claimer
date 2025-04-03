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
    "5eDCHNs34wznAQyvZbPcEH7wpuDxScNGuxDV28jhDccnr5AqRuGzVw5B3PDV4Mi4SMgWNKG4QZyubAef1LrubHZT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p9JdWtYtTQ1XXV7MwWiDoCE6dA6gy8agiaaRHTAM6a2N7vLVENpxy6usK5tvxRj84SXeHyU7ABbLLgxUfqAmyY2",
  "key1": "44tv4vFgbc2iNx4R4n8TKBDeLAK4Q98J2hRKzNXZy1ttkQNTiujGcBc3TtSyuSbJHzYrDQpsTsYJwre9vQkQxkuW",
  "key2": "4bk9Tn2RiEvSnyu4PxZaYwH7gR9MZkU5HMcEy4dCqxQnbUDpwg4S1GoL9GXFuE2J4yVN3XeDoBcDsEQJ2QxjBU7s",
  "key3": "3SDp8qKsgPs1hXRifZT6ShtFk5EkdBSEz3eHWk8bjiErt1Y5RyG5Qu2WWEwMxUM1yWaRUnGkbhDtwqCACcsACSXF",
  "key4": "3BnMiPPp4k1R3xzLtrS4SeCd8oxn1bMdqxRnq4c6cFCUuJX2cssFi7jrRdp3v4Q89s6LLT28bZ7MhkfbpJz3wjkm",
  "key5": "5CABgR8m2XYdCdVuLiMBtiG9YF7tQVPTAHH74BrrY79EXaFzXdErx9baMMpthFnYcUXZ4f2kmm7EqKMw14uCvNst",
  "key6": "MGGw1XfdMBxeL27syvEGQZZFxNT5MbD5b1rSWqUZqaKXdXC9vN2b1aHHroUnAW13Khm1PDcFVJ4uSLZ8ThS4ZMQ",
  "key7": "Tj48siMM6Up9g7457Hm3yDEi3f7Aq28HBfHZkBdz1Yy24CVfwnpVVJceXFiBkjrigC1XW6vKzMdfbaKjC7cpd7p",
  "key8": "4FUpK7pjDmeQ8Nu23DPEPnAxRzS6ePT2Xhfqu7Ateeeg6gqvourDiM2xFZQKdHMrXwa7Q8itdxEr6vJ2J3LU7g6p",
  "key9": "2dZ4GsuxmiY8SNi8MJLLPdGUX51qF5tG9TsH5e4GDVdnCotmcD5oRZ26uivuVJP7Y6WbnnFYxCXFUd2Cd7eKgJTW",
  "key10": "5itB5YF3Nxd6ujXAZ7xUm9g5iLdUg1ZF9wFJ4ym6jKQHoBfG3BGjkXZTYm1TTEampvNP2n9YwtYXmWywnmEVSP61",
  "key11": "2pzoCLUzCeN78BFC2ZPed1ZG9fu4gauKF5NNW24R9ZQwex5UcmTgWQ18H4Y9CFxUqkR3qsDVwfBZXfH5Ud8cPPMf",
  "key12": "5X8EDg4AhsDzC1H4fFxWYivrSn39kctsDnNXyc4azw3XCeH5faP9qMexjoLzKXTH1RVrXrw6RKN8VFpfeRjx5APA",
  "key13": "45Fca68H7iXDWJbBYn1JSi8UTZd56jwUGpkKPoYiABGoVXqizmfL6tdcUjPC3Bh35BNbNSzT78b5f6g6iLkxCmeZ",
  "key14": "42ibmYGRw617ZC2gng6CX6psne7YHW78QZtHi7Ki1mBZw7QofzGBJwtYboxxUMxUyFdddiwuJQ9wKzJTxgHaRmhv",
  "key15": "2CyZebzYWcoAhk5atUmEb2vbetZKsctJydyUZRsVxPVCb5JXy4r2Med9LyxGpWQ86TCWzHBWb6zqSZXPLdC1dof9",
  "key16": "2paQg5FUw2epKmbAMSQ4yKhk3HtM2BRCY4UtNhSg2SbTzbQDiGhJiqquo6UVkUC9uctdShmiKyx5zM2apuo5T92K",
  "key17": "Lme9aVfcuMpk6y5iMt88BGv1PsgkUTWBUVEi6ZD4HF94wc69s6dMdDvU3kL8m84kc1RfL5dVKu4EJTz67ARkgLW",
  "key18": "4ywH15q31d1mWyqduhBExFWGDKhMTyPM3ezBiBmPwstchoNRvGF1yJuHHzAqQvyJBBjKramjiVc7wWzrupKjRWRo",
  "key19": "5hndvXBksyBooDJEvn8Sg58ESm5wG9biGvLqLXP9Wy1aR1pj9fX7A227wZyV2t9ajbhEt4Fb3rUT6j4i1UYE2fYf",
  "key20": "uyEyN2oTfHWQCewTVuPPdfDXSjBt3Vhf4nLzqbKHCc6svkdJ86nZFg2oYUe4Wso9iLSTRZa5toTXJGMLMUShSB2",
  "key21": "3qFRd9LMjTyUHoeHwpAnCDWXQNAksfAtxpYKG4Esu3kqCWnkbMF6ezMSjdEoYUaFVqxrV9tpRb1WTwYSB4vuFvuX",
  "key22": "5t7dgL98CHW5xQmuDhr57UJVmw2gv53aCdiv3g1tsgLbgbi9eU5iNTXkPKtbetQzKrpz7mmddu8vu24ycu6jN7YY",
  "key23": "3vNrCXsQnsQQAZkq6gxi4BktNgMRQkPvVqzujaK9CppL9YM6YCnxG546JK7xsd9m4nuxLmmPzojcCB8ncE6E4B64",
  "key24": "2rSSuZv2J8LhCsvLszGpwZ4gTMm57NVkB78wxSVwPvJAtDmGZ453FwZ98qnog5YfEB6DMBFQwFJ2V7B5S1SBqBnp",
  "key25": "5sv4u65LpQ1jE2nRBzDvUemfV6GBUM3Q51oh6LfVrzfKq1o4yGL6LHqxHdtgwTcprR3E64du8k1Ta8HTM4ULtqZv",
  "key26": "4ShMSbcEQAPEdz9bVVBDFghXutxfMn3d5XvfcHrg4mFcmdAf6M9wGuDmSrMF3tNkYYW7cYZivX8qkzeoeqhcV4Bi"
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

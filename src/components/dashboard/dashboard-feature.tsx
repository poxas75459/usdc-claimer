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
    "Sp64ij1ek8HF71PRD8TwseGeifC3WWNxAQaMfqBxaDcHJ5Hi9ynQ3JgFXE6JGxm12qe1vrUyHhT4dNuAUJXceAV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RaaLKKiFbuWw14H9dJ1VwTgznje14c2LGamRfWy9FmcG1GsxJ5QkPj8vtJ5C5xyzHAbnWfxb79edMho7g4gBk7E",
  "key1": "353wieB45MLYgSysr5Xr3hP71F5Wtw9aXwES2cHEmFMnonAp6UzWEHhLz5vqyMeQYMwb3TobW9rUhgZHrgyCM4Eu",
  "key2": "WQ32ZYv6qLwrMcvYDCMSkFwCk7t1Sss6pSTEGCYt2rHj9m5JKQVE117ss7Z7ej2ioxaZ2nozAvHyg6ryvwtMzfR",
  "key3": "2J8JYaND2TTguo15izwUZBStikg77rTmYtPwJvp1bbrpScH3cdhKUCmYw1qXaND5wySArPnrWyX5fb7Cfd1XKsuw",
  "key4": "5kYatR98nBBUyjqqpZcjuxQFtD76jMSrwogN6E65R3YsTRv65c4CeeApPxEKRpVntrdzPKy9FnhnJ9R4mvaRv2wS",
  "key5": "5SPGZgaNWwZ2n24ZFfiEzDSWtNSHj5HpYkBDFjw8iNveQdViWaVmZkVdjso7mefGuMiMXUf8SVVPbVo3ZqsCtKCf",
  "key6": "8JmEQKpRCtfKqfRxwXvg7oKBChqK61NqkB9fLSvV1GXLJJvyx87jB96zoh4667Z9iPFnRtkGHmbbLryHFtqJcrZ",
  "key7": "xkSpkj9acZjK6czKJWaztmaykgyxX2QSZZT6UsSfwqjazQhwuwcUg3pE3DzA42tPfrM3wpB7dNF7tz7iY2wDjrr",
  "key8": "25XKgTMLp5uigmHd4Tejb3vfGgn1TJApNLUyS3dATxhrfJC4wxpeZ4fXRhAyPBEGqVw9tFRMwvXAe2kSwB62QVte",
  "key9": "3JK7KQYgNQeaJtvcLWEF6K1WWUAyiwhx3vjjZzyiKFT2qcBBDtPGgyjLGkYrx3q8oAVbQ6nYrCjd2YcFGVyX63VJ",
  "key10": "2bvSGBoVFRkgnejhZdue1C1H2CfXHNQFG5bXXBEq9nuQmGGCmUt15P8TJxNmhQ6nxiiGK3jarrfinWcAAEGALMwY",
  "key11": "3oHEQnijtziQgdz7R3FHkC1fzt5ARpN5NjbSVhL1gUsoV9CWKMRSfgXKaZTz5CGXcbSvau7Ur4ujMP5fMEnjGS5x",
  "key12": "3R8gB63JfdBBz5kPR6JNDeV9jmzUcMK3AudnfYYD5twkYTEf6uRSr3yBPJGZhKJLX9a8usB5mYwPZx9Q4d7JM9AU",
  "key13": "4BuWwKW1XhzFBeGic4kAZyWyP8W5F2bJzbKy5PKN6wnF6Pj8SoXReNLEBfeNE8SqTwzKs8kjXSnXsS3gEZVWKdar",
  "key14": "61iXyLBwLt32X1JM3VHBvJVFCvc8oPZZSewLeMvKaTcw7Jhx1AGW25c7YDi3VTJmnoDVypbS1DGgi3zgTzYjJbRz",
  "key15": "4sXDrKi9Z2WVaeVtBi5BmFcSWp6pPub5GbPLAhCkdsfTozSDC1DbwKo9phzQVZyFkGemo6b9CKF7MZDb8jqaW4EN",
  "key16": "3s7g54vrd7ZM3AqRRPhsvViBg6AMPYWWy4LgUbSBHzNNYj4Zc2BWsd7YqhECcLYzijEyjJ9ixYdX7EriXLuWjoEd",
  "key17": "3hXAqK2pvfqQeq4kWKX8UDsNMaVBNj2ncCCSYJMUUA18GvfndYfJAEze6sSdJc4VRc3zTc3ej6qMWfUBsy6BAER1",
  "key18": "2ZATdieiMxtjn1D5QtM5GM9trAzekPh15sf7m9h6eCxv4xq2VdmyYEmoy4aL2Ho7ANFRmrz7oVXBhKazxruRRTGE",
  "key19": "5v7mXrZKXjLv6YFLZ3H77kJEGyc5CyU4gH1UGERG1vtuUE1UnPgMKg4CvxkDrSajHTK8jKiSvDtdsUcYWag7m1Nz",
  "key20": "3CRdijuGDYhNUtYDpzvucqxYZ6RSkwbjCRBTrvFjWMEd855WdZ7dgYg5D2owu33n8EQxvE1KNyNicMmYZHkUfYod",
  "key21": "3cgEh3rkEjiNFSKNVBCZjEesVtZQk9r3ocSU1nXKwigyY6LQ8JzTDD37jqNyFCHT5ahVCXRTrYPEfTcHSRQo429y",
  "key22": "Jw4G7EnWQGCuA3aVs3mnbQiKqpjvvxpAA1nTVvXNdNP9P8u9yz3XcGBQRLFkpKTa6YdTSNYuDKU6wToPSWjQyTf",
  "key23": "vfzjPMCZN9i2dq3S4wQFLhZMKBCEggSieQX2q3w3vEu67p1tzkA8PWgzJsqZPQhdYnhmB8VJidoMcG2nRFv4mMP",
  "key24": "4XLQPfffcd6wEsuSC9PgSmP3XS35C3YqvS6qPaWwvDbC1evPuAT8QNbXj5TtaheXwcetRozSFbjDhRxpebLiwgKv",
  "key25": "YRuL5hi7tfgABcgqFf9TSubsUL6DYDDMPpfxYQ774habZjXMtxfyN93M5zipkUNS3Eerv1voQ2z3a2EhzWGeN46",
  "key26": "4zDm3dW7vRRHJf8aTjGTZsg8PUuJkxRBw18KYXErPbXEcm4G7px8Tf7L8FX1dY3aLTP36PFZYgeo1WrfCfD3StEa",
  "key27": "2c5qxxyhiwNPoDE3Z9RymtAQvQrpP2EoiphWKMBrwpgiMGtbkKA5NUsma5uEuSjNQ6JwxBs2Nkwxmyy8YWuLAM5C",
  "key28": "1ZX7JUCFTFLsBS8NdzUeP1qGvRcYBvHwt8SgtnuRaAAQPujfQLYhRFsoZz8QfUpb8g9LsB8MQkWTuUBp3nabi58",
  "key29": "5o7Tge5F9vFBYyKznDrpw3hJakveFhtQ5QBFKw9RXXoU5nDb9ouZFS4aQCRADGcjMsxaw1q8uUAYM2Rv6aDDfDVG",
  "key30": "3vJE9WjrwxRQupzeCof5JYGTzWoNAW9mcR1mmQoF7NqVceapmvnXKYc7gBV2j8iHM8KL7zY7MBkF7Z42uNfrNZQN",
  "key31": "BDNTPMFUgLVqHPtMcA1FWgVUypqrGzaqy18jzj3h7S1rHSbMrhh41TANA5rKjcXpfVCypKzpcL29PBtzZqrqJta",
  "key32": "3XwdBiCLoYGYSaqPrfc9SrxDVCqCarcdBdJwVVcGjC3mDL1V9sq4GAou7tN982aya2qTVsRYgiHiUenKM9JPpgT"
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

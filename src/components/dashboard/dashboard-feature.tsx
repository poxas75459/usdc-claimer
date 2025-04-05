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
    "61WcbpLy9gaejjNxZbx7LpHFrvaRg977byZMUHPbJD5WR2amCMUodVWmakP683ukVRatcLbgBzmMtPW9YYXS2AGK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5McaPUpCgAWsZuTbLcjtUx2qGYjCPKTtfD8HXk8n3xPA3rVKQDMGfgykKHkUR3NBvzZ4biPLPTq7yVbk7nQxNLBf",
  "key1": "55iZgSwqKosYvAJffBLfFNoGkQLnhUDRwfNbsKHYaKaavT17HTr88dyNntRpegDRkaMhS11SJgxcvsTZEPvdby5p",
  "key2": "2wVkaeCbXiHUyd2j47uVWcfFtJ5zhVYLbxBe8YK18wRTmPbuszie4ANCSWcWgF3VD6EzmGBMkmBLzSqnbZExNJcM",
  "key3": "2u9Dg1LBbMKPksmMKjCxhQE8SD9t86Muk7QckNo8iAo9xaqUzv1j7bdsL8fMyXqDREfwNEiXBdW8ascZpCpYvNMZ",
  "key4": "3Hy5nSt4cuPJx7YwmqmVwSaJbjiitNnafmndUgmh4Htsf7kj9mjufzMa8q6eVpY3NrmKJQnZqSxuQ5MrNqut6MGk",
  "key5": "3VGSc9gBrjPcZwmaLwhBWtYtD1xLnN9TTZApcykZopdBceS4913wQeDqap3xEHi6ZfjPY6NESUuXJsyscpcBaGkU",
  "key6": "3xXiFmYABHbi8GdqCgE8wqPnYNnjsA2u3k3sU1VgD5Ebf1tcG9Q7eqDDid2mYTtYfWN4CoxTjPYXYiqas8nHZEz8",
  "key7": "MmkSLUTxVks9pSJY1qkRrnSkea49mkr3dMauWTfyxZHUqMGs8tzL8uuGWJbsSsMVUfa33tLy1CbyXGDDwchjXN1",
  "key8": "4143EH9iJs7wqv69xAxKYJemkoNUZvzpHyqAxtxD8z6mcSfsDTwXd7PDdCWUphksWAp9XuTZos1hjP8ZQ4jqiV8K",
  "key9": "WNoRhfFUWy32ECcFSAGQmEgxyXWVzdFVoGbthqzMFCLKxykYYi2aNRcDCuvfA798RACPinPSPHuyNyDNtzatPFG",
  "key10": "3dJwnFtvDxjf2yodqttmgGyRg83Ups1RLqQ1AYaPJUf2VNdzempzksFvCHPiRfDE8PbGcEJpsfdq9LFnojAumRHw",
  "key11": "5aU2iqUiL89HttMSnKP3qzYNxtGr2c5tc9L7q4MAVGQFcM8GMSPVTCct88qKTxMvqRw6DvzA23C9Fu3fMLZXX7XF",
  "key12": "FQmkc72mcbwmvTWLZrqcSqGB9QUYgr3pGhRujum4SrW2BqeSm6HEK6dC7U6KBp7xdpy9etpAHGHFckSkHAFV4ag",
  "key13": "bn7E2JT6HPoLHkW5gAHuQxGxTaFQMdj4tehz8jDvcxR5t7NokyncqEmbZvmRkkFG3Hr9MBGGRgdpPV4z5rrEvgQ",
  "key14": "46rZuhCjbuoGPdNUA8M713ZZKdDPYGNert25TMeaogYtL8VZRkJnF3rYifGpc3vw72u5c2e3bePN8c85EuC4zjzh",
  "key15": "6fnj7FQGxxFcLY7BmyuS9vTzXzeuTehTMaDEv8ra6xNzQMTacz2DHABRUGoSrz4HnNnDFEUUGYvnwooNm7KMdgU",
  "key16": "2mhpa4vjkiEYGsKPXnTDkz1C4CHjxg86WvKtgChgE9r7WXbbA4dgTknBmAwC4poCuCCXjN9CTxWeYDMhYuhWHFCQ",
  "key17": "3AoFcBbBfTU5i3ooXGTe1cowcdaLqikJ6WQi6qRfsSfbGMMxWQpZjkdqBhyidJdN8QGtcHoXFNaiXGjL8Hf4sbN2",
  "key18": "2VdrjPQGa3rWmsU5KxnYQXY8tRBheST1V1RG2xjHRSMCu1ofVKFXZTAkVBeafKunJiR84uKVcNUuAKoZokJ1R3pG",
  "key19": "5HUoXM9PrjGiEEHAeCSur2oTpLBJiytG2QLYhWis54st849kGETaxmugWw3yNcyEbyAX6EnjPFSeMJBSJB2RduND",
  "key20": "4KbSyWiCzhpX6wUumTnn9EMxoam2DZQ6SqkXo9zpV2Mnx44udN1f3KCsvpnf6dQfRNMgRdsfFEaRnb2UPo5qrPR6",
  "key21": "5eqkwUWzRTpXYUcAWLcgXxKCC7nXTdhbgK3zsmaQphe1e97jAvPWe53xiLwFLxgTJE6E1ga5DX26UZjAHS1HgxTG",
  "key22": "2tskmmUqpYHLE1vwDU8GvGRBqwXjNcrFdusnStHTz6itibMF6P4jKg3XvAah8Bzitj1HsSQz5M8ZCzKxXSgnJFRX",
  "key23": "5sqGatv4VS6RiJSQaP9q4xo6cfsMG7LfktVLkzD5GDgw68yoVAcu8QUSyVM3FrQGc3pBrVG75NyLTgivJBBURbQF",
  "key24": "3qP8PqKiW5En9oujeRDGk41hNfwY6AfmBXdR6SvCRtdLBomAgmfA4HFEKu8hXJjWsjHKvBjX4XmYbBFcnoZst27C",
  "key25": "LrpZ7bE5Z2TmciVMGsynGz72yciqPx8EiksJk8v43dTMf2NBF3ZMfjLdTBrj5wYVkf2rzTCCWRa9Ux8odLsW3Ju",
  "key26": "4LVVWkesvh42vFDCED4MfYo63tC3zVxmDW2PuWnGU5vaSrFnuaa3HWoSgfKtxzi7ZyuwuAo9XfRVUpv7KvWcGhri",
  "key27": "4rPVhdEEw75i5DLMiTeD8n2xUGyxfKoA68hbfEvxsjzjPub5DbVVgqaFWEnzBn2aJLd2ddpQLwz4KoAehux4DPLN",
  "key28": "22Ftrw75PMPpJDyRAwHxq2acxY76KfmXujZjMp2dkbMycr5vf1rR4yEyQ68bg8SUTBYf396QUFcrof9b4tqnmQa1",
  "key29": "5NtpGe6kL4orwzUcqHmQ7TT6j1uiVhqrnVgwW9WWid5ZDwA6cwdAWxhjmqnNYpZtk3t8H2zJTCTZ65Ujfoj78Zxf"
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

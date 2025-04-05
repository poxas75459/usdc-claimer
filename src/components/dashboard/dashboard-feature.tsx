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
    "Lf3Dxaoe9LwouurMuftLjg6dSz5hSx6Vna6wYBhoSekjRCykNGktr4zs5nY2FVrnC8xonMNGWEoGHCeUV6VCNAT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Lju6ezZ2f6td6sEYC45LKi1TeDZE3YjpiXuybBDPeXX9BR3jqL328K2Xqzofew6hW83jsBdJDfhDTQCzkSj4bqT",
  "key1": "3ZVhEgMhbhDVCy4XTvKrRByzXUsgmhHSjdgs9Wi49QhDPje9hGBLJfRtFM1FUSNrp44sgov5VwZmgiqHP8VcwXZL",
  "key2": "2DpdRYU44thxYN5oVqwmgnX7tYF4jnTKbQ2syCskzsgC2ncBmWNMVqiwgzmXfeUxwDMMhWnij2Yzia8p4Lmka5qB",
  "key3": "2rM9cKnTRGH59zzGwRZ8LB4qnugjzBcoZn21YjYV63UT3vVMhGkMRW7Kge5vvo2oBKzjev3azx58ewusBRKkVUUS",
  "key4": "rmPY6GMQyZUPYRakP3w8uQJ4uHWB9V3pvEZpzCrmHQ2pEGLPNVtYJbHSoBcSmqPeEJELuq1VdBHE5Nu6sYcBpTg",
  "key5": "3haNZVP9orQC8dfhx2kZSXmAFWjkB4GsVX7huwAUZGq5k3TAv1zvyxtxG1UjziCZQpL6fwKD8y6Ku6DdMHaQ86nn",
  "key6": "38LgH5zhfwedmdaVYmxFwTNUCzPYS9rtHzBJaN7fWjBByfM9ScDDzq6mHEqVuz3z6hB56as95reG7gdxWWaq5nz5",
  "key7": "keyReexVrVeeoynRCZbo14UVbxamTESCL6UhFKCdCoWWXMGrnATTEsqqZGNkFTSycNFD1fNwFkVkPWGtL9HGwug",
  "key8": "4R6E9QJBa52pjiPLZqcwBkqSa2Y7tmJkZrB8s55x3Caav4KbYKAQABtna8yTeZftn8oSd6zGNV7b1a3e3187v4oW",
  "key9": "3cC6ntVJMnM2QqKBSCX1kTN6gVdPZVATAuJHoskBJTKMLnQo3edLhhRoYvWGe3ZMgLW6TRG1HXAimGW7yanZP4jg",
  "key10": "3atEnAERjmWWPpBybqthf8Z6kUXkd3ScHuEioGw2yDe3nJ2y2kU85QioAWEB6FZJcmbjCjfYC97EEGHSVzrx6APQ",
  "key11": "545qvYVuc2rn2TXZK3NWKor56Hx3guEtFsAKLKEhkwDtijCmv5aRd4Pra4xzmJh57s9P4p8ynF9dXCKR6mm7XZMn",
  "key12": "cfhDkq1P9yTUoZZ7y9aaobbNrC6xaQ7DobvxRs7R37zp1zc8yGez9UgviZjfVsRSCHnbrjjWUAyjGun7jCLYcLT",
  "key13": "5Ee9NsoaSDfP6P59rtKSdTPMDyxiHgmw6tMDLp9HHvcUyJynouzNzA4S1wGq9G3pGsMQzXw6eoqme77rMBkLsu3z",
  "key14": "2acCu3tjQcQ34NW1mccmHvo54oB8U7A55dVzBfqxp7ubDcqVN271f1hqGPHGk91mwrUBKhP56ye11RiyV7f4ZaXH",
  "key15": "2hWbqErx9Laix2ABUVVb7pBScRUQFosnFKjMsukmyE8QPQuNQke4ftoiaZskcGZNkrwNetjF2ZhPGJZEciY76oHx",
  "key16": "38r67bTfnPBHdk4UCpNirCB5sF2ygNprh1MkXx48riUniuptyH9vcMUHXM4kacKjfSRxCipPPSPdPQmeAeqEQjjd",
  "key17": "VTYhDwLEUuHJJ8EuJdyb1YmFYs497CyjDw4kuhNXCKTxZM9wRcyff6E9kscgaMSdpViGxmVnKo3vW1hmEPXeNm1",
  "key18": "25xLdDDbuVnMNUcLAuMRDwfsJdoSMSJMvVikVpRAPYmZhcN9VDjzmdVPZcZxnjFP766XvLjDmP2mkycgJcZz6YEu",
  "key19": "3sq4HjS3WLoMCkNtnXhfst84aNPA2gG8C8HSNENnnwaztHVaryWHo8zoWCbYS71KQd2mza1gp7S4oaxPP9YqFVrV",
  "key20": "4s83DePsUjUtdCAJoXw9XY2CESFnasTe3GPJ6ro5DHsi7JEw11yCbJjXCVNg4he9ua44t1CSsR2FCtbQ7rc45VsN",
  "key21": "5SqrUYGYMEh3LPBY93HkWLqxkQXj9XGhjSMHfWG2GxmWvqCR7dSqaZUejbaskyXwPzWTRXmDWvzqufcFdbniDmKC",
  "key22": "3h11RYf6Rx4Lm7WToub4ijQz7STB9GEeu1mAmfbbrn3rvSWFd3C1mxVcu65t6QCpSFnxCJEy5H65E3hvUi8ntwAW",
  "key23": "3hKgZv6Kr5ULc3FMVM3NU9QXtCeqDM6fo3GbFnpxynofmfgBK5A39xVCoYyWv8S1hEUwGF6QcU9bZmv8iEAdjkHQ",
  "key24": "3jcbjqFLHzdfZg47diR2AxxGhub67bg3GM5Jm18tGRNxK9x26CToeK4XFvi1uaQUWj36udif25opq99iot6ezo6w",
  "key25": "5CmVFbKTvePhAv92mnLWkhn74hvjPwB6iidG44TkB8aHsXHBdWFXLy4vCja3cuCyKLjnyuH1Zc7sB1AkPB8dGbrr",
  "key26": "62TriSwVvFTxRaejtsUYC3afNwQr2EHhBtz6bicMM2Lz4gLr4nRYBZvpRWWCiMU6aKsLyLVwLVdrLzMtmoiaTT8w",
  "key27": "5zvEPTpJsiBEZsYsVcsVbzsTAANcN6xz6i5tQiJoSrv92qxXk1zWPPG63qyYho1v2Ff3Eaajt1t6nadJcUuGu3ph",
  "key28": "4XnuuAozjbEGyEPcLa3H9huCVVnspjvtpZgh4PEeMMkXMqhh446gTEzUWUBLNecb3PoTQYWyNdtquaEB3PF8RUqs",
  "key29": "2hJUe9ptc924gpJ4mERd9tY3wLMnrztHJ3jyfwk5KxeRTnePRPnSG2BbRJe3dYZXwf5RsjMGH194AaSmDBVTN8gb",
  "key30": "Y2MxA4LcfX5ZSoaRrmyn5WCaX4xZGDFxqs1BCHbLnKa3Rus7RnYUDMVLiBgbTxuRuM3F6pvkN8zcXnVYvSYoLbB"
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

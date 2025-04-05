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
    "oXDPvqXWBPYvtV2BYD5mEtrKG1A2qXdCd5Hu56Mq9yz6MnRpqroCt7hdmnn5VM8pqLvhp1DNYKJWGr2B58pMUnv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UGKttLpD2iND85jrtpC9dePcSeU1FJ8V3CTU1YPkJytcrcL7aoz7emQqAurMr7Exj1hKMJvgu5YDzE3MuoCdRtT",
  "key1": "3WhpuauiKtZLc1GFKbj5o1L9rQA2N9uNkoUtDSJtwXUq6Qc4jLyreAfWKx3e8rB5S4YphETbZVT2HMDYU68ETrhm",
  "key2": "2cJanCYqJ9ADKhsEr28kGschTkFg8DxDPxmAzSmj1gwnCm5ANXdQXkJYcEP4UEuB3yCcHrX4gNUjBCVEZAo3MhvE",
  "key3": "quMZUaGSA6KTD2yscFyf2V8MfT2bc5DsWC53hJ94wh3zZK3AAEj5L7kpM8o6L9QjqLzdZfMVyg4PSh5r7XFWg9r",
  "key4": "2dbwYVHbRY57e43hjW8mGUvQFKLDMG9R4hbHG1FxMJvwWRUdZUd4cJL7ShemxbAaeA5PrvFvJgRNdJdUKDxyhPNP",
  "key5": "kfxdupPuvcVgrDwpUKt6HoWa8koAGNw5j2vjBxWn98dZDC8MhRc7XSEryLonXqiUkf3fEH1BrGejRCQgxe7TrHW",
  "key6": "G554zX39SMqx4KP75jJEwozGxc2VjQYCbLBdyWTcdhWsaXN9PmLb4XgKbPwuZLLGkyi6o32N5Lzgv1ZFtrUwDmD",
  "key7": "3RBWr23y2FYFKStEa86XsaM8MjjHR6a75ZnRKyZMiVYq9EjkoEMm2Nf3DaUbrBCvLrNiUzMpyRgXhp7cfr3nn82h",
  "key8": "4Kdvt7avGqbmCBsXgAXv1jL5GU97qt8hVtBF5ZWwiiLhw95tRVq56tUbfBGfEjwrqUkE6SmSHLVDGACCaKSTERYX",
  "key9": "NENUHbuUVeoJ1d7M4UnU3HmUQwdD4Uo3NHqGW1fmTzt2EfZ6SzrvMhCmK4w667aNzyxEzqVyn13aZ1Fq24DQeQh",
  "key10": "4UNySLfcDmCJ5YyeLox3J5g9FuH7XSAnsKAPZEQeapXvbGhAvTEykoyfDKGS99sA6RfjNos2XCFHenvUSYoPacBs",
  "key11": "K5QYFUMqUdAGgRdwvSFZyrzdiS3rx5RGcVqBBHoozYs4KCMQrZXta54zgphfGN5Uhy8xyM4GQdvkiN4Mowj1E2m",
  "key12": "3eVVvgVRniTGFNKF927HMo9DZ4kwJE5MDHaMcS3kGKoEn6XT2Pcci9YRMHLquGatHZuaksV9SCraF1CNyMY9ahVi",
  "key13": "5yQFTixzYQCSQD93inmAnYB9eiBqYTWRa1WAwBA2CwVdAUmVyi4LSbqzhRFFsmUGJEerppQ2iNx9U8Wx7pfQaDcz",
  "key14": "61evEhyEVXxKkh89uwjPceZPZZLKLTR5R697EXE4D6n5Y8SuXUWbXQf9pVGhDyfJj8mHX6UKgac7NfrYnrvHcjUf",
  "key15": "3TP5Ebc7a2MJ2Vk7nVXF8e4bSD34tuNjD8KeH3DxC2WxMWYF9QHBdSsmvGLnzxXyQG24tGRCRynp6TAL1PcWKRuD",
  "key16": "nDrLLS99dTySknCu3Z38TujMVjjCvCW6FbVPVsPe6e4LgKdQoZ9TiBhBaMQp31xjZ3nxYxLWNHBwTVHuXFthRN3",
  "key17": "3t2vgEspZdvkGF2eSYkvDpBsv9mHJkJtEjBLBdjo1FmDwsrdV6kmnWpK4eB117WckW7zg7h9b5W7EXCZgMvfrk1",
  "key18": "3vYsdt4QXszEjrmhz9TWB8SnmkrLbUS2VKQQzpcBVvpBgnGdGftL4Za2iVi3ZKwA6PGfaSSJ6Tgzd6G2Y6KmCB4R",
  "key19": "39M5XCRNYeSXN8fZXDD8LzyZKRA3BuBRoNBfvDexRfWjE6FPoiifebHM4MRySXu9XMnQzMLSLkRmCvNaGyxUR1PV",
  "key20": "4n6UJm1rsrX9YHCCKbZyq6ayLhMuBBHZMx9owQtRZjH4F1Ddbr6q1AS7dEnoGLe1TfZeQYQRxmZRPp1uMwUcJAgj",
  "key21": "2wkL6T8vKdU5LBxTxL3BAmKYzjRcfa86FgZ7VLGRdNDQ66mw1bEujoDjYiJzbdts9KHdRFicqKfKvK3XJCWro3fi",
  "key22": "56EMBphWaxEHnEZFfSRk72PKfHqbz2Y83o2RTUy83QxS6kPR1MnVFCscHvxf9QnbGnSgbuNEWkegGNF1boPihT3a",
  "key23": "4D1W2VkpJe5g3R1caPLccbnRAVeELpoMqfSGVyL6wDUKhbRq2ugtrTsdjE8VANgrVUSrUdGXE73ubbdV6uZNX29b",
  "key24": "3KCoWT5vEvsMHKmbzF612N5RnaMzUwVXeREGKhYzGLgo2LWJKfiQ7pgMoSvZ4zmCDt5qQjv3d4bXQWJ918XwYpNr",
  "key25": "vVP3epbnSofAwKiyRn3B5hwopgVJbjeixnqrk29RhxMb8z4KwZ3G7cNpZEHXAAcpGncbkzDWGkjT9jE7FgebTu4",
  "key26": "4bEsHUPtSE1HUK2pn12A4fi2DdFos3vx1ed5bZKwPVnFYG6UhjiUoAyqLtdvTJE2LbmZR7JqDG5UURFkP6WUzaz3",
  "key27": "EZz13X9y74C37ajb75EEQeN6uTchbkeESAveGaShCckn6rW3gfWKQrgqsyuzTpxt4BS65trb5CpZP4bHkGWvmvd",
  "key28": "2yjj8Aw9kc4LF2D891H44KVrhwdpxBC7mFwDULaZYQ9xiy2WTzLKHchvhA6bAdmWaSDoxiGnrEDgfd5n59R6zqfb",
  "key29": "XgxWU1rqSx85UiN3MhtjJ46SXGtVfVZYv7Jm1Duch3iprNhnSMKVN5my94Rw6ZeVJiYNGNCEuKqcudJSrx198zC",
  "key30": "3of5wXRADbyUmHv5ozw9jb53r1T4a3ib2z1SNeaG41V4zfnA7vP2ZAb7j9WYePHpat9tue8iajmRYPWfVWLxq9zS",
  "key31": "Zz6MJyeFkBJRA7Cwgm2QnRk77yM399nqFvsU1c5KxHZoqS3AQNJm7DLmW4io7cEqHuTM9SBtdUjmLmHkRpihk3S",
  "key32": "5Y39zg5ZaBnexFuj8gDRaL4qijea96UDMpo3DquVZzVRTmtRYnKNxKj9oVCD51trXqa7cXaCsf3WbontEE4qSwmU",
  "key33": "31ApkdYxY1aEHzBEoc8BD3PcAh8nTrBMtnduYUWX1SiTuhiPfE4tQpBs1rQAMPiHqhv4ognEAtFyRHbHYnx5RjqR",
  "key34": "5j3dheD97aLe5dnbiCe5BMHqBSjFafYMnFYCcdEYFhmmDutBFH7GQnmSHpa5oP7noW6gCV9exhM14cgw1z7LGYyB",
  "key35": "5BMYWdJvotsBnQgC4ipDtMuFkrUVVHUKPq1mxQdBpphsFZVid2h3kQrs4tLjG4wdV4VJLCCwjKVT5gFZZVZkpLK6",
  "key36": "2vECPeWhip5nnkPzUgbKnNca5cMvyjeYCzuybYWYi1qKkicFp28eUPu5LnoixCRWXM4i3CLExfrqWcdWnND8K2Xc"
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

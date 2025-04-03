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
    "2ErbJ7HFyZtMLSEJv2ymWwGxipScJ5MrYSsVRBxDTRVFmPAbbda4CHsgMKucuttqwoiHyD9dbjRgt8X2SUv7CenJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wtufjNgmzjc12WTryvQdJiiYPGFWaxzkUaiC8c6etUZ44FHrwpCqAsBCEP3cJ381Q3X4X1HdrrrRQkQX4eZuwE2",
  "key1": "5eEdXdRBwjXkdageNeEqP7gcgJzxmf2kjqkvJAWuRuD6XW9miWUYbgeYFNFgUUsJYW425b2Fptd1sU87LsMTh1ZJ",
  "key2": "3UsVrmx1S56mhSaokxzxhi5fDtfsvKfufxuwixnCsaBbsg1oDHSHiEdBk2pdXfffEPEE9ajNczv5EzaXQYh9BVZ4",
  "key3": "5aLWPV8qbUxKYCsTUQomeNWDyuk7S7onBCVkkMeGnfoLd7QWoNRFaVaUNgHfCUX5eVqbj9w2RbKbR52sNBj4H5Hx",
  "key4": "3Ju8q1vNhF6PBkJ2m5XzDwBYemJ2jwMBRS5aV7M5py7c1J7wWk3EGFCtpfM6DSf1C6sA2p79BMas5EqeTNoGX6Rk",
  "key5": "2xgFkK5b8NAo8ukvaVvE2usKkvrYUE1cGbKRfsf88qsXdY6GJAnqJi3K2DyUTzVZE8NAVSWjkv4JXoXoLknB9wqx",
  "key6": "3MJZhLTWpbUu5Psj9cVE7m4byiU1zre6SSSw5S4jLkQmmF9awy8gv8zdDbxy4AicxBBmBRSoECP4o5T2Fb7XCPaV",
  "key7": "2msLJvEkaVNPYrbuzLsh9mYBgHVA6hkPXiEW5wYB9eu8UVBeShhAhwUyQdS7AhKKqKi6CfHsMYPwY7zgC7SwDSXv",
  "key8": "27jEzCnXhh44WjPDfzKF2gCDC1bnKERcARd83zqJACqcyVuurhhPF8vScJbUEV4t3FR8e2bwRvpnjYQcga7hPLS1",
  "key9": "3JQfTEVqs5A4AxsKKKSQ4Dm1JykxvNxLfMQxoaxuszwsir2Js89pJ4Ay8ocW8ArvaEcNKaiocexBvYXc9ae7NyHF",
  "key10": "4gMxr8B3XrHemPqwDAvKB9636uh7tQhuwNemBySL4CJF48azEjwmzo3DNSKhLcgMSHkmRFSURgHx2zPmGVi6JqQq",
  "key11": "2v5zLw9Nzkt7HGRtAKoZTsiZ5otZp3XdbpVv9D5HRcPXha3AcMfEXGFXDneQ55dS34mctxjMfmqYcCveRAZvaWbb",
  "key12": "eyX7C4tzJx25ugSko8jwmCFjTy2azXTK8TVaiQT8qGvfXwbAhoEE1Kk9HA8SbTyfiRUNUWhahjB26ZDVcoN6qLT",
  "key13": "2vHfbrRRUwN5wCG8pgt6CcoypPTAx3McYpMttKmsX1Es86E2P8pVYQoz6ixpQBP7pPXBFE91pfrDCXyaNNUTgVPo",
  "key14": "3JHX1EpXEoniQSSUmY2oPhWds9hwhw4vx7doTMZzrT3saYd3qm7ou68Z1pJohJdJjpLscoiAUq6CX2fB8GcZMVqv",
  "key15": "5E4afSSNfgiEpJDi7MN6zLZuN3sjvTjR9AwuJSGUANXvpJD7tsiuGr7QRcATn2XrQPVCkAtkEVwur5bDHEtsR64j",
  "key16": "4PYTUEYZ8GCLQsLNn5ruJtb2HkPQtNMuBNoQSiMZBMuw2gtH7K91nVRWQUTBz24gXuVXC5AaPnSVewMNqRnTRP33",
  "key17": "5HE71j2jUmUSMdZQQSfjyoH7mNXehx8BBNep8NwFLXSD1wchu4S7KegNsdWbnq6JxkjTjW7FHFaC7skQFJTd493L",
  "key18": "5X1NcpXpx1Nuf75KYYD9Gu1YtkfKjpEr5ye2N4Em2rWNFGQUTkhGuGgYddT5iigU9nPdhzNrA1jj49FMrezrfzu5",
  "key19": "aQepttALkCz6mpQCEa9D5kPFJ1aNTiAZMy9PngTbdRHib2jb6W9i8vAZvmeADJzGG3BEHVA4GFHFVuc9EKyNkS2",
  "key20": "3nda2wvKCQf989QGTYteZu3XtgUvkZApGkGsyWuJBFRtuWTPj8MQa4eDSt316DcTuVXA65uzVNhxYQBLpSRumd6X",
  "key21": "3De8nCsGhZrpJ79F7vYpHNEYd1TeZhZmWx5k2ZnpPLPB2LLe8ewhS2vSEUfbGiDE3bB5mV12PQ6YrD2fqR6p5Xjs",
  "key22": "22ED3fnpgz1T5P6oopn3gUzhEDBYaznpJY7yw2YCUNAZ5SCKLMbnG7FMsXtWTB53mFcAoS92UvPmZ1Mt2dbeQNsC",
  "key23": "4pRyNeJCyNWKhiBiedf4iMuGuddSf7AgBfJTBWgWY9HErUzsUF35UARRRHWDv3padyV5CbRhJasvpE29ci2uT1o5",
  "key24": "2k1UYCUNAj6QuzgRtG2m1AifRYDEuaP46QHRCemWiRszfZxJAsX4EbTdZ2GdkEHMci33Zqpsat2apGRGLvWHDbeS",
  "key25": "3AsGmaT7iVB444SCk5xrEsTfBKLjVnym6U58Kju9Com7pyNgz2RaQA5L9enWvp9HVhEd9HJEgaNekiVmwJwRsDDx",
  "key26": "2Qbimp8K8mUgpqaAypQcjZ1EyxUTE8Dq9cvG3kSKg63TPSG1AD9wfRQkatq7tE24ZZ2V6Uor8G1uxEBeh25QbHdm",
  "key27": "2r4hRRCxF9JPJirrLn5fgyrEvnMWPWY1rGmyanmj3vGpJX1uKo47ymCzgkSrYvMz97Fph2nbwEyX5rsZXjTwuMzo",
  "key28": "5CaDx5eL9PsCh76KsQ3obxTB2Q1WW8qJPFTCGs48xYc3Rt7oUdRpE8XLfF74896qS1y1MFfrMosYfA9VGjcNz7oP",
  "key29": "59CY3cygWMrL6feDC3744AtufbSRUd3rMYmFLmT9gwyyNTQR8zT9XQd8tNtUQENcEcXRA5z7zUZEP2UfQEhfwfQH",
  "key30": "3QNd5Y8MXgnsj7pRkCynpyQuH6ecSVfBrKvRgAtVcGUuLnsqdBmCAT2m2ut5pLchPnpFq7M3CwbxPLSQAUzBKGFh",
  "key31": "3rWo9yEETx8xsDromqownfbRsEa4Y9Xv5B61rUWeNJyUb279uk8m2g7JwjntZSTmQhotsVmG2vTpjuBVfUNKiAZd",
  "key32": "5TKxzwBkqMeeSGZkrtYCo71vKngXTBg76yBjSRdRUMq4uHJsCVG4EfxwDgpo4rqLiwudz8nd9z4pgVdbNq1PeW52",
  "key33": "4FhVTztsbLqfiCrtR1QY2Kh5sgV9NokgJryz7XBXCBfiQqx6v9r7sMAPW1pT4AoVJ3wdMvFUDJodMDJwWvKFneF1",
  "key34": "25zW4KRUin71kvaYtoeghAWXeTt4HZbxC2JzGgbTCMd4pNeePDqy2dbxMaSpbjfEGb7uSrGYNGYn4WxbNJFsUiBX",
  "key35": "DJrmsX664jL4MBh9tVKbMhRKhauAFGXDPgVPsTazUYhPRTEWhRfKxQRRAYggEPru1DpmQKX31sX9aBbZzo56rkP"
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

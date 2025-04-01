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
    "5xEcCq4g4JYCPQFz3y4o9GYhoVDY294qzdghuYSkcw9e7awUMhh5fUxL34V6YNUshJMJoo9gqUBTjzfByz76DWct"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qSSTvRLohrNFY3cPEFcg3JzK1cPtsHBLgDGgT1SSYfTnNWgryet4DscSU2nudfZNxpYNHpGssYXz7wFNcF6GrVR",
  "key1": "5q7MZcxftBKJFVfbDYyNztZM8ZJv52A5pYNSiFfjiD9gYDysFiH4D61aAYE9zs8zqntrokATCd8bDiQdZy4T7xF5",
  "key2": "35Rd4kWGefdmeTgxArkJrMcTnWBD2sWCapacjS8Zm3XrfhqX3KoBppLPgbc4Rgkc47E8S75Z45YbXjDhJGB1bbcm",
  "key3": "4AsuB217ppsikM13ZbtPC7S8NkE4q8kM53hiPXwLAUwpw8hiHXHMirmibaQN3VuE5iL5CtZcvBw7sQs7BLMtwte9",
  "key4": "4DT3fvvZTUb8BvoUJ4waGQrH7Y1sCTLERxPMA3HRJ7RL6AGNkt97h1899w3NQ59N2bbSnPWLvEwJH5RnJ9HWEfxy",
  "key5": "4bYBvr4ph1HpfKdqojQN8BmVvmdEQjVQQgHcjDN5RgW8hoVN9t74Vpn6WHLY6GR5epfKyQxpCvjaie4vztnoc3iK",
  "key6": "Mzrm7D3BKTLKoAuoZc4cLzAqcakvVEhJLVskfGKK8LLoHPv2vVz8PzfMQjSPc9PACj9snkudGuiRTRYGMPQdAho",
  "key7": "34AKM4YEnmEPgvbdpvrsPoLCk6XGDXz5SdVXybRh3kq2mKhXJwtzPaCnZDcY589M9fhqGpsPKBwgNPZTUgfjz1mx",
  "key8": "3YaLY4etuwEzbpU5UGWpsyJb6vyXo9HZSFsk1WESnnGnnuzjov4WUHsDiu7i4zkjoGCweQgsYTQd5qmegUT7PTjd",
  "key9": "3QCesBaKUytsPdMcCGQoQv2Eibz1rHNctaHx7jKC39tNvEuacEM4NxymUSz7SyvGNUqPqV4sw274MC25rRjmRPne",
  "key10": "31HMLvNtGe9EVWQfRyGEjw8Tg968VEBtFTgGn3BzyiDdqqLcuhXuaYGnepozKPGsS9mE8RsQFFveSDn6K5DUbzPa",
  "key11": "2XQFdPSoAGrsuq2tT3RvuzqCLbRF2ZjHHZ9qoPw8AxCY13zDEbuojNVwLEHwmsq2FbmHgoAvbVke3vd1A9y7RWHk",
  "key12": "3aLNszrsRcGw3g64VzUpQU9TA7qaq512CnXpQHzefd3vexAx9nBShKCfhCD6CwErxf6xhwTZpdhJFPjnWiZDoq3E",
  "key13": "byXEEHbxiTtya2Qc53Rr6fSA9kvNmrTPnEoxe5RkXkzThC68AEUK2vStxQeMr95gwdUp8DQzBFm32twyLth5FWo",
  "key14": "2YDaBsyQF8z5PKWYuUkTqTj6sHGWBhAZD5Lrg1PtwVxqzA9f1LdzWNWvQHLJiadrgbaqzqTcUicEdM9fNaLwji2Y",
  "key15": "4QwHVDsW3uubZENGAY4Tn1kkWnWiEzXKTmRbPGsWxZuj1GSg44nJKvH9nYFWg6hD8uNfVibpjQjzap7Um7ByBtq5",
  "key16": "r1B3UcPsdqMuqZHrN8UCPDkmcSGjpF9hgUn8w4Lp1vrYMhbTfhaccumAtXkt7Jx77R81DT6SFK7rnLQpfCcPgJc",
  "key17": "xdM5MiH1R3Lu5HV4xkTFzUHCXvvGAriteE3rBfFBK91CvhrDun5Rdukxk5Tx7RR5gL2NUTppGPYtgUqmTQSFKj1",
  "key18": "47XqRuxRUNwrEYrt2VDcYJAAcWL8PYxDU7HpJuD7chaHSrsewqEjZmRFrquQvapqWVqYeDsSwAPwV3U7TMrUsD1o",
  "key19": "3PPeEyvwQui2BXf82Qv19jg5VskXvWF4vTDHMTUs6kpNYyJcQibAzgSvH26scEczndUrxh8qub6AK8wcj1ECcVot",
  "key20": "nG2MFiV1mCCBSeS9eMRbFkpCHqnEqneawNTNCKmUWr6bPkAhXW56dpia2yAPntsdmsdKCnGSPUeCWvA3VViUqcW",
  "key21": "M9qPU1XbeaYiHoMWJ7Mi9Yty1ypquh78zJjGyU2umAPWR9UC2h6Unu8RisMwGwk2YDcicTZSDsQE8vezNFj2jBy",
  "key22": "21BQSkMbozrcwJp1z1LhzAXUfzmNU6ZWS2XDVmvxaMmSGffHuTbuYAPrZmn2H4TRrpbGxdzbWcRir8Wh3Jqdnjqn",
  "key23": "2dBLTPt7A7vRBZHBs6TooNxpVACn3JhXPXPFH4KrzPeUXUdPkwdcBGt74dqoJEqYJHGCRQj2cuKbWYCEPncoHj42",
  "key24": "33KZEi8FcmQHEoXT2cKjBeKT9rM2ENPft6d8tVCnVL42wTFLkdXQze6JuK2qzKgW5eXJPjGSPNKb8cFXFY5CQm3m",
  "key25": "3TTudtdzpgRDFvnMVNJzrEmbBbTNJw9APPram8JDPZY1wBSXD6YHYJmBM2QcGtT6ag6NP2ZcTN4MkiE8yczAR6mD",
  "key26": "FVywzkdEtTo2zubJ7Vp1rj13MeydC8hrWbJR2PGFaQYsFA3Dvza8ekZZBofcD18RQXB8LdniSpD1gfECm6dqa1M",
  "key27": "342c9aRFb1j3VSvCQ3nrR4YcZfTnRWqJ2WX56QaJYpm5Fmt2gu8QZ5mcNLtCPAHowNuNTqwqb1JJnoSEzgyLXUFm",
  "key28": "2Egus2gXb77UEo6LgZ8VPN58Ni3UKzcjjFwdLVNky82M4BzUfAvgNpKu735wG5PHqF1HLzxXNRdRLBiMUoGtMUkc",
  "key29": "5jrMHMybLFVSpu55cQLZTTT28FWTRSNfQbDgnSEYzSqRTWQxN2VCMuGQHuxHJpbM5DccrFcJdbtkd493qzsfywPX",
  "key30": "4mJDSz99WvhwWcnREWVUMficyRYxXcfo5EUa3gEBYkGutvEZHEu8vCBZ36sS9UNNTUaFL28njBSDfhcdFPKerMJZ",
  "key31": "9TPTpPmYnNtZxxQGwWzxSagsQbQoCCwW38grKguw5ckCrfyzhZ6fTMvzoAWo1ux6RrxZEcKJo3ehYNHbpzTyTRH"
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

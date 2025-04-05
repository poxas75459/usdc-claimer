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
    "5rcJPrpTXj13Xb8hiz2TEWziiEsBhGYthNFWhHbU9QiEb2JigtfEKym79YLdo5Z5inU814BwZvxCJc5NVCEiuqQw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vpoKqxA2X4mSb4oqCHbGWyBuGrTKYK2QFMfjZjRb9WZCK8meFrhQgVY3duwDnDvdqRS9kGWFgPhgbRRgh5K1gB1",
  "key1": "3eai7ygWvWZZQg7pH1Q3AUbPi7dxG7WaiCh3k2sCNAKzBASiGDqHBZmJKUkBU1UAHKRY4J6tSeMb75W7vDDzNF7T",
  "key2": "3NF8qxddJmmb96bNNozHAEgWxiuyVSsZvpBYbRCSHrUcToWv7FjWezir91C3YKmgj23xweqvJ7rKNV5SdediviY3",
  "key3": "4TEGh1sEb7s4DakMkDBLC7Pc9BqiduX48R5w8Fr8XZcHP1UZNaeYNf2vZ7bCwUiYtzYtGjuSwfJ54ccY7TTaqCrB",
  "key4": "4S9KTp2MxSn9augtAdSpBFmzquFujBKJT39G11tyMGHJWm6CLPCG9UaEKoYBdFf4z7ycwPkTkGPygkEpNNs2N6c",
  "key5": "TUsqE1aikoaz5tWA3BEojnfNKaBdmaxtZ33BSd3X8fzTDyYiKsej6UPSa6bPENtoxC37YNU8n3FGzkHLhgqVaee",
  "key6": "5s6GKYvhGQNwDFxJFhgcGSHRpK9WxwK7uEVaBJ6RDNrToUhwJGRmoypqGMrqmyg9oEaHSxoaJAwSQa4MXie8UcFX",
  "key7": "3bHKJ3xtfe6tQ6c79DndPjLEqRx9KebaDVCXn3FNYcEyu6qa1kJKxi326wCjPx3WsSJTt7vNP4TDqnnLyT2B3AsB",
  "key8": "4mVx2atHoLkuvSDLSeBhGxD3op8rxAD7QVmtgLg7385QAahyBKmfYNiKRUU5tdgwoTDeyb6Vnxv5YnNqsNj7qjpT",
  "key9": "5dtQi3uGtHcdYX4CH6wsbwHwZiiFJLmqRb9gkSBHW3Qj9vPNJ6i865Bcr2ttCrhKQtgxMGaUj9QisyxpkZkuXGQ9",
  "key10": "5Dueh9ydqdXpYVsgJ3LurXhFsaWjA3AcnHJaxtRiWF7d434uzW5QcJPjcQtDAGbnicQP2gJugQp1hMz11Jdw5c4Z",
  "key11": "4RxoWzjUW6Bs6Jf9C9rc1FmbSGcTVXRmUqwTQH28ouTdq9msowPsJrJEPPmJWW1aEDLZeRMgX3SwbNdQfJ7nqeeH",
  "key12": "NT679nYSKocEtqJK9N4aijz4oVFR3Q1BPg4WvFRup7oPgB84SUVHEPcvLftoENtbVBksAX9TCBz8mRsNZiTz9Xq",
  "key13": "32kRyfJUHq2MNAcQm6xgsb8N7ydgUzjZuwrfrxZofeeP9mJC32BAh2YpuSKPzpUoDgyfkcwdMkduZMHzdYYsW21o",
  "key14": "3QQLc9cuF1rucm336RPo5Ch9zQft9Fzus6NYMv7F83C4fDkmwFTKNgZayyHiJAEKmqCCgvwRjuD3ukQe3TpnUhn4",
  "key15": "iLRdP5Mr8bcsXa6UY3CcRs6zpJWrCLeviMhMxu16iSbHVi6kq6bq3ZJq1pmS5GKuLhgbto5KzqHfYooA8Z1aC2o",
  "key16": "2SnLQvqJTLsZWeA5SqYS56jeoAPNmfdS5RYJRMDiYkbobTWbVHy2WiPcjeeB73qaWGRmTCXgVxbLdNYVrHUDpXEc",
  "key17": "3r7DeQ4oCcTENDgr9XWfdfb59goUp3phnp6ez5eQvw7aMbF3LuMXKmQYsuwUxSNZBbxMbf6ebgwC8FZGpHfg3PUc",
  "key18": "3KKYyrAKcDYTbLYxzGQEMCnBVMsutQVY6iGvpL2ZaoqKZ6di7g22UQUpkbVtnu1yijKNK14U6GzvAgwPVqX6yY9C",
  "key19": "4EoL2dGnDukH6Lweh2DW7Bj36v9yks8nWCb2r4naTrkxsAgkMCwW1Mstp6BThJB6GLcNe7n49dtW3pYY8fMhvD6e",
  "key20": "5pttLnxZA6sGcxFywpnQt5XbWXus4mcTVFymCexBVbeDG4uCRh9Sa5fak8whV3KBp9Mz2asdQyqtUUPWcXFqoLHA",
  "key21": "3Qskp1n6rWnXUCjpU8XLwEhhBYzu6FzLPzpFXQqYyw8krF1joGtStBQzGnMjCZVM9bsZYoLCjy7NKaEzQw9zHEjX",
  "key22": "33UuF1KD4Qz4HfdzDKYC5KES5MTjDj3bVAWGPaCr5VPCGjiCzMB8E5cRirDox9XDdEiy4c4JrUS7CA3JiPvQ1fGk",
  "key23": "4R3fP3vR51eEdEsdhXyQYf9jASbF9Py8gN27tyPBysbGPZtZM1CfhAqjc5fpmGMRUkN6MXe1ATFAo7Ct53WHL8Ho",
  "key24": "24fnvoxdshUQGdpnUNDbdzvzsoopos21N2G2YrJBTHAMjkPCrWXWHTAsUDL1hsDn6B1eL9GTioKpP94eqJN5SjLU",
  "key25": "2YVtjrEigvCp1nqpUj8pX9BiiW8NVKs1fQvP9gjGojCnJwCQ4GCrbKA1N67ho8xgd1u8Z7G81yRjm2QcyZF3cnmd",
  "key26": "3wYzRHf2cBRRU1StnsvtyjgjdKHHSYsKjnGBdseaYMEi1H8bbuFsmgU1z2aPHASaGnWhYhN28vmDxqCAUGwMWNpi",
  "key27": "21LusxAGXHdf8tgR8Qs7pcXKQQW1HWX6kUraa1z9q3VXqj2sem25EHDg4DFmEzDYx2RGp4JrH3i37x6RpkhRtQjA",
  "key28": "5tphWFM9yM7KNa7PPrpE4Sj9zu6nmK31vNH8665yQGSjiFWB1tpKhAWSPeUtkcg1EqqiQ7C2ZZUJgTeo8YVCBSsV",
  "key29": "Vd1HgGdN1W1AHRhGXoaX81ZZFegWSm7S9DT91VqK4jcZgM15yPaQTVcYNVhxPKcqdwFC4uJ855f5t5oj2BH5jKc",
  "key30": "3sdnBDzVwzp68Qms7ECDW3W54h9JSbsYSJ5a4xyGFkJkAEndfsLLDqHArJjrheaqtSSjiWhZDroZy7qeLYpXAoq3",
  "key31": "21vcx8Cofr6pnoYkUnhzJHCnVETrzd1E1Y7ov6ms49Z85KgtPJerbtEuGit88jbHVvNN4VZbc6tj2ZTV63qrWE7d",
  "key32": "KHBahma2xFeXcjJbrDwQqjrxxVZDH3JUgPLMsgzJ8hZWhWUokp7krvFufseBnq65AVzjD9myMeEXJmr8HnxbjKD",
  "key33": "23aegYgoVgkkg5wvYg9fBwNyJKPdfSmKA3yFD32RtAY1SgMUp8CL6ZFLmbb3Vr1f6iHdufBtbuYXhru9SXnFszsD",
  "key34": "KJi1hmPrCt8SzErRTvFfxYimcoRQ3boVe8rJjJ2SFgkP48mocgJmDNXXRA2ttkeGnmhv9HcuKVGfHANYMRfp5zn",
  "key35": "MpXKWbhnWAWMrAEyFUCJHdXYiHtEkm7vkEPsZBDnkwAjbAgnCsYAqjS8EnRd1VkaETnqLntKcH486ygwbp7zgu4",
  "key36": "43T85szTst8dfUnmuwqTp2bi9ftvcE4DjZqLFBqbMgj5d2EN3VHME8kXC4cB9aFJkKB3kGVwd3dD21jusS3cj72T",
  "key37": "2P1r1F1s3CL2Xs7c33q3SRe1RRQJPSgyympJvkvWbHHvAp4uPrYwf1EyNzaNZvF6WZsjQ4CFVKrqe8eGmfYTX3rk",
  "key38": "3Wsbta3NtrhhK2m3LTtRuwatQWGbyQLAGoHDMT5GV3KhP8E3yTcoUAJuMqx1SFscRZ7T8CTE3Mq6eBJuPNC4tCX9",
  "key39": "3TcF6G7Phmt1p6hzEU3gkBcmGv32WfgpkY1UEPzGDZqEUgTyf7GC8oeUnYq3Rrain6uwrBKBCHs4voJjQ11kZUjx",
  "key40": "2p9d97qSvNuubYpevT2ggLtzQSKTJSBmAfmEpCVg6dveRgkVMwnK8EqD25P13QGfU7wwahZSRXcfCmZvhiFMQvSL",
  "key41": "3Zar3NtopXU2QirFGQanvboZjizTv4iXmxvTCYa7bwXm5oeQv4ePhXRT5MMZs9cArYqMS9RxfbRpEchFuja4tRhN",
  "key42": "4zGvQHmVFQzNHF8YALZLY6orZyokVfU56CywxTw2X283ZMrSh6HZNAmeqHMUJ9f2TM3tR44EeCjjgtR9tEHctfJA"
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

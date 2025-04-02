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
    "5MGGGqDAeY8WkmMLd7cdbsFyK8tpyfjrgHXz23o2NRdiURTxt4VfXaGB4mbTWieLP5diU3qob1j5BWykKs9otRQx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CAoJ6jSCZp1tNWDpEoKtA27jY8feXFpcrVAE2C97exk3JRtzFRN9dmRWZQa7a39GtKE4TrE4n1goPZGNtQCa2Cm",
  "key1": "4P1Q4K3ckeCPHzkiKdTyad3ubZFWiLpnPMDpAq966LdUdjh9yZFuFwRjiDwQcrDpA7SfguKU3s1pUkwHirScPmKG",
  "key2": "3JuJmS7yAeoJkdDw31o1ECWHYadsbAdjxM9ho3btiWe1xRnck42CqBHSPKBhVVAePiTfaQCze4eJHBtixWEXaiUu",
  "key3": "4tjdkcuEY5FSk7yAvwes2pcguaow294pTPo4f93qVkaoaLbxJDQWWuc6uZjPSFTunjxGqocNCHmL1DCqooYpXLjy",
  "key4": "BmD6LnfXSsan236YRWFD7zQEzRrJ9JXJBxGQeBrV8rPxCwNmZCEAuiRSeYhC61PEWnX7RiQv2biHXuWgEWug6FL",
  "key5": "2hFY7TxeRmoL6zERjVs16YdAT2ZQgHsJf16FBPEXpsRHY1VZntfctz6Puuks6JsYap5TaQqHNLDf8MtJrWVUvTHH",
  "key6": "648GWTqwzRtqS9DaE6zSVLBTC4pRuKXGFkFpksDRxyrtYq1aH3YXskzqbUcEjZz1VMJns2paB7MAyEg1qzWFtEb9",
  "key7": "3FXek1uayzNhwKtT7Q8KMhXt8pEfmL2RNcwCQuG4Jb45LHnDMFyvnzW84Ck2YbiuUZmXnUdRdeSBEH8m2tNabVbh",
  "key8": "2gw4fZHujWtjcuxRbJfLJVPmfraUrgcoRXe8kqdQTg8ExQxSNmgdPJYGijprKnWAs3jQh5apzyBBX5KYeBNXfnJW",
  "key9": "3NiUGq5qZHADSwvArs56jiVCLKw27SSNmcQisXLbx1EbV3A73vWBZ56J6EjKhbiXTEPxsyNJjX6dmaS4RGnktPgc",
  "key10": "3ywvYyixA9yvzdsrGm87GHkxXtr5mbRjEhRgdjB2aboDebUiAzipkjEgk5uVJPV4qi5BPnX7eVnuytJttYmYeTTW",
  "key11": "hFk9r3yYreNdx6tdHmYv2eohxmcWVqz4byUuA1VT49bUbWjcWHzu3ta6JsMvj1sW3SuPqfS39W2is9xrPW98yEb",
  "key12": "2tkthAzms8kC6XvdR3fgqFxsYwemNH2io3tAz4csggLXi18PzuH4gRUS7EkcTnYymAT3TfqCaZUdphJwwog4Ngce",
  "key13": "3fEzsbDJUsw5BRD47CPSnCjAGAPocaikA1YwyfHh6X7wpHfvxCThjEZtAo9KMhhmgr32wXWW5T2wc1EwopBTBCYK",
  "key14": "2EvG9PCUU5nEZ2b4MsqtyCGtcdgxbFX9XjPAxJ83xuSS6RHWYtHAsNkRXUDJZE7uBaSbdAWkre5tUgjE3EbgT86P",
  "key15": "1G2FmM5MDQ3R8XJsCqFHC4cufCtYZbQPBtwSysBgSmzhj8LbA6vcpZVus32XpXy5MrBaSbeqZ1m7brHHJwPF76j",
  "key16": "57fSmDaQYWrnxaZBaaVqcTzKJ3tPDtCbbJc2HVYkQDswChpDgXrtjonLuiDTgmQ7TT3R7zY3uem7o14zirCkpAsu",
  "key17": "5SFz5Bcamu4omrUJXAJ6gjhn2fU9ZudFNRfB4d9C8FnojX9ekWJAztxbYk36VqqVpmJpetk7nho2AtNMLbo1qSgV",
  "key18": "3Gkj3WgEC5JZeWjgc9fgfjB6BsanZohfnP8sroAcQEtH9Nb5N48DCWryXDKAgRwAifd7XvgcvU4KZnHDV4i73ded",
  "key19": "45BemvJJowu5cx4Z15MtxyCnvPpr4GXeLQRYnGsR7yUWBAMnftAduyLRgyiaKG4635CvgVPhgW3iKHDEmUJyHMZ7",
  "key20": "woSoWP8MiCQ5UQLqEW6owraiK1ogUGbV1AJRuvcXhnh3YB82iXeGJyWCiMCRsxyR6rEXmSWKUfotq86Ft53qBRb",
  "key21": "mwxvYJzv2QwknzXsofWDxPs3kMKW4iCgpQ3xXCqfFWWs45e9SRendo834BrYfg3QALqkCoCC1uuDf4pcPT1SUvS",
  "key22": "4rTHJYowxQQiJ9amCAHTdkPCAxnBWeEFauvgugGUJPxiDGstnHJMTiiXEB6fPtfrLgn9dLzohxfQckxWH9Z4CWKU",
  "key23": "4ZUUMfxrw2UVpkDgPuouQTFWYsidAdqji7trEzSAhyzs2yTG6SzbXDPywjVe5EFpupkKn1J781cTUPNfQewU7jdk",
  "key24": "2NNMVErHPMbHMxykU8WZtb3T7bCPsY5XmgA8FKkdruLaoPo5jk1KPPoxKEQ7ot4AMv61mj3yYKZg1SysFVX8cNBc",
  "key25": "3RCb9TooLkd1jzxJQXEMzCziEUjkQjxGFQQ1sewBmWSGPJSB3hmizD98gd1yHXK8MwVJKh6eH54NwFyJRqdaSzFv",
  "key26": "3FcpYEB1dqAyyesoAZVovPknK64bHvH7EfVEX1hS9u8jUxR3MQCcRYbbWs3PFhsQfKAaS4X9VENNX1zZ7eyhVLQx",
  "key27": "iZaaNjcBeoZduVd142vgGM26ngoxt3LgKiW4zdGRKXt1BM5kuUcGJuVJQerjYe75Z29BtbXUwEkjLvsRCLFEKqZ",
  "key28": "5Zdi1PH5NTHSwD5vpWNskvUekRtAdcJcanLV2XcZ87HG9vDuGMUBdtWhEQKABJAqmS62fq23Axf3nnxx7RS99dM",
  "key29": "3kHJU56k75Qg2GKc3JzULvSxWCESuzYAXeCuXUNHuWpS6EhZYFddwKidhmo3CZWPfnvzRSb5STVFneEWyQpQsix6",
  "key30": "PgYGu5qpBw29zv3MLCnejSLcJbC4cscj1u1baut5fRpxxMuwvffodG9NMzfJNfN7DSDdFcHYkcx8rBznrfHsBJE",
  "key31": "3uCSdf645YpKLmRwC2VKZmVfLpLkqJ2ayiTR2wkKDbeTkDDs88aQxhwXkreF8HFVg2NPUq8B1SALYmvhTsEAzo8Y",
  "key32": "2NcPL9HYdAdQzRG8aBXqXHYLWTmSJriKKFwh7t5PRaRTXehk6f43kdnjnSGksJ9zLsAXKQktoeEbU4WTnUDL1L2j",
  "key33": "5BnKDkmf8waSTPWPD8qWEpJsuUxNjwH4jJwBWkfQJmgRZYTsfQS6pArTAdrjk6oUpMqizY4BegmUBoC7WzAke1CB",
  "key34": "5aEDLu3rAA7VLASa92jS18w3ZmgJksEFC4jdFvsMBjY9HFjwHsPepFtpExq2jMSrXZDsBZi8CgHUiijsRGgNTi49",
  "key35": "kk28MUpzgw5pBM2j3ZGwherqwrx5vDTSjJFDFSm8xwprABqxDxrUwC2TtGQ55q16JqHVuefPmS3vKeEpcSyUpbw",
  "key36": "5hJYpBeXTgmidNuSbkxfFEhkrddu8QsCMbny1Qq7ZuRSfiAzT23ZfAuG5CSSo826r18vXNqcdZu3gQJAoM7NFDJf",
  "key37": "54eBccgetnCUwi13G9raMZoLCRtePBKHbsyKf923YUG2g1HsUkrZF57AHUbvEfo5QtKiu48nTPmnBs7ZWCrEgp78",
  "key38": "5JGRvnPCmr6DzSk72w3RsRMnm1tT4nJWpvLUxJgPNFb51hECoFF9bDeZjZWLEuB9BbvXxh6yGjfNiQSbhi5Qmy3h",
  "key39": "3iRRaFb5sMvKwbvhx1fywSASSf8CVbkv6dDmzW9ykx1qtaXYNo25iQ6c7VQCGM7CjxXs1gkuNXU9zCMfnz8y1JHJ",
  "key40": "2n6afcfSngjJqhvStmRYWTmD8U4tY7BBCFxVTDD5Mj6f9qiyNWRRVDrodLntCrKQbSLhWsrBXVaUwb259vSQdZsV",
  "key41": "FXxsscvAekuq1G5KimGddDJi3hi6qdVNCUZgKKtbVFkDM6QErHTNwAM3j3LNVh8PaEG7mYjyx1PDPCXGaYtungz",
  "key42": "1sHhTs54ohDFcXJeQnVMtbuQ1n2Mxjd6p392Z9sADiwXhP6p9b7mUzwuwgdH7K7wpuHYXXSacCtttNmMXDoZZk4",
  "key43": "4ZQPikmZtTiGeTrmVRqDDBzQt2QfMcc5RBqjVaQFz8r9WJCz9irwn7WZnf5bRAJjB1wQFM4G1yC9LmDXvtq6MKCf",
  "key44": "UWRtK56A8KUjHYeEbCht1PbZcwFoFjaF61mdYnBzMHfhLuuMxYHBcARaJCmdAs3CfxXQhd1ZvktCfiC2ceKWYz4",
  "key45": "FgudEjS9Hy9Dq7UuyzeL1xbsJqSMRnzLrWBgFrfwYFc9eDd55a9HdL7sA6K9BfiHycfbxNbMaMDVP1WUGtYLtwm",
  "key46": "67qbVo8EYDb9FQ7ZjR8HWHzd5Jo7NSsMNCeUVHgbRkKH8bdAp5Zg6bYCwrtCsV2VLVnx653MQkmnwSaNa3qzJDgc",
  "key47": "45PoGzhLDmVvLhyV4wo3mZaLU38DboxGpggWnqUBMPmXnbMvZEvtLJTy6H8dvKhMLGrnwFXuqxZZdaPYoeR1APHW"
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

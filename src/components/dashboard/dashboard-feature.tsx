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
    "5xJHMVPKQZ2pMKwLcjX5oNskdg6XH6vehywWJSRBH5sSEaFKBMGYofzsk1zYdtqGSRb9BP7WZ55MG551NmKXvC3Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uXBvKiWaJieokEeYrorBtggScqHFz4u3uWrnxJe6Q4rHwiifPJy7G1mzJP8xQGQxYbmRoSZJDrLLJzodRafMqK5",
  "key1": "3WWjkducBosJ1TtVYGiLzHNnUgdjsg6sAgpEoutfjqn1ivF8GH9paiQBW6yFgHBygENLvm2kZYXGRbQLvAhqgYdE",
  "key2": "4Gr2MrrUWEBtACU5mCDiLdgwrWVH2MfnYc4LW6xiktfBoRDhHKaW7E5aQdeK2ppQhiwbvAJ7ox2pLdbnXyCjkUVk",
  "key3": "2fFqpkLNU6rBcAyZg69UhE32m2qXSEYH4ABezH499cV9yGX51tgFznSMA6sF2R2sUE7PLQ28fYJqvryxpaEmK4vb",
  "key4": "2SEuRwdmgKyEPfVqEQ584T9uBZLSFapFwzh4H7ANzbP9YQjN9cRVcCu66qQgsi8F4fJFMyRE21M3JbfBVvjFLJA2",
  "key5": "3BmHeU5zQvyYbq9rDMVvKNX2SDbJbZnXEZBD8MmsDCEPWCqDmy87u5bCQsmH4WUdWcEiwAwVkhfkR1yYPjsJ4tAf",
  "key6": "326EuGM5eMoAaQ4S7SV9V8gN9AgJeVFvoqPwTRdgRGZweT5FPcmuu1mpC2Et1reGKhWEGEdoAaaDV55wj8r4nPu8",
  "key7": "2rtfav7dhoH9zuN2WbX8s2Fm1T9C71jJpTJ9nizbf9NLFwtJSzjW7eUV2cctVQ7v5xKktyiieHgk6dNbGezpTvKz",
  "key8": "dpqa2c6B1c2qTUjz8k9MryFNRib15sypjws2f6NBu4VTHU74FPFibaxve8ks3vaBuk8pixcyE5s3qNjkot4bh8g",
  "key9": "oQN59vZRUXXh1kgembjFoPdsCekK9A855cZRXhnEB8cEm1G34W1M4pfy1JhapLJN47LLioEAY8HkKS7BoUvrwpM",
  "key10": "3YmtATQ8fppMeV8j1FvyJ8ynFq4Lkqib9Bcg4hWiZyGHueE4xLduoWeKxSDt5TerUffPdBZJwF9GSP5sxDEREbHW",
  "key11": "51EvJ1tLij64NMiFnxTAf4gFELzHkx6Gf6sjj7TXD5KqbbLiAfWE4MnisucCS7rtWkj5dtPVNd8ztEhmQPEGSKu4",
  "key12": "itBHwoj7x1qhnPNCgga1auUnQupNNc3ZsTw3b4Pw8j47SJwcrtvVBNrNSfvUmUPAVkEVWXwFMCu7tkoSbxnBRiY",
  "key13": "2xKHFYi4vkAGkwruN7aYzXX6bEcHCtygyJCxXQBYeRrVgtEcQaph4PzFTLyJM94KCue4DDscT9AZtDNLeCgqdTwg",
  "key14": "5SPm7SkYH3iKYVaSksXc4QVoPBheXNBFURf5xpiVbB3v3tkKFmZXNRQJjSsbWVB21TdMrwAFnaKi9qFVsH1wS4Vk",
  "key15": "BFR8W4cQwm2hJG4WMwRGQLkvwkqXTbXhpXi7ByeeLHG2ioayy4ZAn7k6cMeZmbGfwzdSdYAeMRkqQnwsUwd64pu",
  "key16": "2hfg2VRFeC3k9HpEsUk6v8hV6RYT9m54WznvSVAFujvjLF3nydWoSjSKpzMamvcmtRRnMTkbiR6a4f7oxMimjAq4",
  "key17": "3e7RGTqmN4X2xASDzwnGFhyd71RSjjVHS8stovgeuGZkY5vxYzrDTb7JBKWWxnQ4yw2uoaK56n4vJAQaKr6jX4gz",
  "key18": "4R7hNACAmSnQn2Y2nPr8Xw4UHAmqcZZwyiyDbgxJH8wAYUgekaLTtX3ckYfGYM5QGi6t8UE3tqeANG7wTsjodhg",
  "key19": "3n1FJshQmepUpAxNr8zKHVqjCD8rrznnt3MJ5RGzqjYpc5BHnz167p5vJJ291B5Mq6zevZ5hsCi1NyRQrBwA4QtC",
  "key20": "3P4vyYr4iXakpmRVbusqo6njj3KnVC7Huv6jwrxpLufRDvMeCNKmEoJehtVJFVfA2JAkEawydBrg6w8i6fGPAnAz",
  "key21": "4xKWcWDkEwaX8fhkMrRKbpKkwx38aij1MdLoDyqKAtpY1Lu5MHRooK9GRbk2Q6J2tePDwpHUd9dMxvdcjyCEMzSe",
  "key22": "5E8GXqy86FWxuSfNHsDknwhLEVY4sRanqHZxh1HYvmFeTheRFQTP7ipDxoWDmpbpfFVKJvCmRjVEEgCQvNHzjCzR",
  "key23": "hKnfqxvxh3y3uZ451BPJRU2ixqJBpkhycwDogTPG5kgrrMAcH5ewSX1J3ycKg5qs9ej3RaPZ8JZKZcWYnNB2JLg",
  "key24": "5KmTfHiHYo3nGznUhpNF7aJfM34C9cJgsjhN9Xp6X3MySUzSPqcgaNP1sP5dVY3qQLVMSPsC834Mgxk8i6d1B7Aq",
  "key25": "3ki2W9Mpn567vomQTRovcyVsz2nCLuQLtXfajWCU3yq9XWteQ2SjBALpmTBWXva9SzykNn2DrtkGThYqNsG9gr4w",
  "key26": "26vkSXTrQg7JtavZkp3nTGNsdKDGAo8Bdz9ERjCJJpuBAyix3X7bFLCGSf1pS1Gk6T5aNkGaSipZWKmhXaBKn7ro",
  "key27": "3vP2CNtcm6WnpZo3Fi7REQ8Aj7FgLZYu3ZMggpZssyp7YqPJtqC41RgzoXLHSwFxAGEx8zb452zmjVoHR1kmw9We",
  "key28": "5MEnH39rDWdUcgDbx4Q8p1yphTZP5Wrdc5UuH9tgbXTsVzmKZdvJkhcYYWQxho9q4PSoTQS4EuLvDGvRC5GkCtfA",
  "key29": "YedbyNpTL1pNDPqk45ymAcTbyuoc1nhnMNGd3vxNBJQVfiZ7jLt1d9vPv1irxWQXY7p2hqX4kicmYtuURSyCWC7",
  "key30": "5AnBvfsAzAGwgBh2RUb4bMmmgBZq1Y4PpMeEmTghEMx6P7QMYAEvrwQMv2wjXUZiGJSCfp5PQqASiZRgSyr5ubSL",
  "key31": "2pCUo9Ha1r6mLftpM2sEqZcT7fwTqHxzjxAk3TsRWeVDjF1Ytt2cMkUXm7R5s5XeFHmMgxJwDqozSyB1zD1951MY",
  "key32": "5hFpLggqTAjVbJxkQ6U5eWpc9yc7c5KHcCpFwuQ5bJbgyj1Qt8sZgyBwBfX22hqKrUdTGRb7v1ZuzzYEjhHo84Hf",
  "key33": "5K9s8jZhaY5E92MoPPjLf8bNXcmrGupW5khqXC5GfK1zaFDY7Sr695T3VttUEwhKn7aqXH4KhPkRcNbpHmEBcmmS",
  "key34": "4L9ErmdgRSYTehBRMo4HVRedsntwNtEj2KAcsaYrF8Vk2khK6RjxK632pvjsT9pJBPHeDq2NafnRC7Ym31dXbZG7",
  "key35": "5ZGrmZSHNm2QE9QTwxGebf7NXE9Jk6az8AXVPPKzXpNLQi2qYVp4r5XuQpu3E2epdecb7fXZ6rTEWeR7P9CozRYr",
  "key36": "3ckJdpjmWrjEjYxrnwHU7vF8zNBFDgTvfckTh58DJXMiN7MgUrTQa6fqSSMJNToYEbut6YBemAGvHf2YHSbLMbBT",
  "key37": "2e2d9cxqqpqXSMcMrnpQuf39yzuU3V67wy4htrkgD9GrXRgd6K1A6K5rjistTZwNZtWbHhbtKZsapsa4Lw5E96ih",
  "key38": "4yP4mvCTTo915dYXMsyU5m1tTeDqUCLHKyxCDwQvgc6XqzKanD9es33g4NKnjeZPhd6UhbnzjtNp9i3jpdLNkWcm",
  "key39": "3QsA1v5RoqMAHBGNqj3pozGaW2WRGBULUs9LiiVSDbDcStg7VinEUNMD4JAL6jdRuNpUeu6Vsj6JxG1xYtzTDsiW",
  "key40": "4dcpAsex5uipAq41Wru3KQZWRkNfjmVwdPSQeHHL1NjBXwXd9LHKoAKtv6AtYkPVHFwa5emeX9wJGntLV2pEiwNm",
  "key41": "3dkCi4zA3EozNw8dVAd73mALwbB6Vn6dzNLL9MWvfz6Y39mHt46AvbuX3cgJmsJptWMFHkgC3TtbhkarQg9aqLAT",
  "key42": "5hut7z2QR6CVtsLhLeea9R5Yb9fDWknKg5FVATnTkfrujPdfM3jR57HtcmN8bdZYyZywiZ7mtDUFPGMJKTU532ZP"
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

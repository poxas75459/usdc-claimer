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
    "hLJGydWZngme1MYyv6KwsDC59amp28i5i36vXXvmKhEtJwKimHxNbDZycqHwUAwgQVmJDhoisSGWKM52XXTGE8K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aNYCt9KYgcczgMPYRhbamjBVSCCKS2BjsQ17mJMEPjYun6B3GCVMsrVdZyzxP5cmcQ5kKMBHEe1wMk7XMvKcRjH",
  "key1": "4fvoMivK2jErgqd42vfwxA8js8X7L36yv1jJJKVUk8KwFH32LEsxy8DJtnRpnTxdGN7tTkqFp5xHYYt7f55hKpZo",
  "key2": "66SV7UXyomGdjVSmnVKy3624Dupd9LY5W2gZyQHHxywBW2r76K3p7c6wVyaJVDjos3WXHbugvjYHDhbCZmwWvoCG",
  "key3": "2yQuebemG1EXYtpsrsNTytibRpPrq6QJ3r1HqbrSiaeN6HLhwvwkNYEqAeMWe2Exneq2cxe5FmY4FNhTdgdrV1D4",
  "key4": "2XX4QBH4wnBMZeBiqTifJkSqCAh9KWeaNpw5jVZMwpAe7W5cCcj53Rx4E88AJeAs4EAMyVCfCYc99Jgwdx11Z6K",
  "key5": "5vC7D2R7Rzpv2i8xnwMfET3VpL2NU8Njn9aawtYfpy4y8dF3udK6ZZ2tfkGABkfHn155tvhvi9B32fSo8im45Psb",
  "key6": "67ayLNYP5rpDSx6JQZCeY4SFC9yCFrjU8MX9nijcTWsBYQFZ9ysCE2zCwckt6UTJD8onaUkm5Zr8hsQbqtZWT9JE",
  "key7": "5MbdmxtkUqZK9kVFnUg6Kfdbck6XgbqnWys1jTP9KvhdHh6XYHJ1CKSbZTVqSMqVTL4NxLcN5fb1NUirpJRZejAQ",
  "key8": "4q7puD2bP3hFop2ZXdnhrZs4hnmBRJYjyBiXGAj5vyYLCGwTKSDanbLtJCE8ShK6SxEkB9EjoR3GeK6U4YqjtShh",
  "key9": "2EaH1e1a5U5BpMhLsG2quBtzEQz3ouJsjfDh4cV3Rst9nW4rt91BY7Aqk551bv42SFBLmqxpVU5sTmGdATt9p2MC",
  "key10": "5j2WY3tZRbvYogRJKfx42tmLwmesYwJpPd9ZjZ3MhouKvZNzEsiP9j9ZNnwW9cyizShucoEhWiTiudRoMAJaMGQA",
  "key11": "49znc5qCCMqDvbPbzkHPSYSh9BYMk5p2QdkmgF312Lt6i7bcLj8Tuvi7mHXYzPp9pwJb4B6KU42WRsogvr5upCs2",
  "key12": "Z3neCUMdcHiacwmzMCwZ54QivDD5nhLXrEHMuzRrwYy6NCur7iV44Q77cCCRifbL2tB5aLDqcPzwyUjCxyrMGYX",
  "key13": "3smPur3iYTcDemP2x62HBUb3mVPuyzPg4x44FntKLuGCQept1HYzVmaGTiWWAUJfnopFfvHCcZLQynL3ALX7yPiV",
  "key14": "MkAxhwa3iukLwBotxBjUSYxQ8HQDG3jxfwVzdBJBjsGS13YhWpsMGhxj57T66BcsK7LXWh9HJkB99p4bw8ZdJWq",
  "key15": "2N93roJf7kK4wMP7jZkqNk8piiApcaYm3ZaU4vQpGfsDpMYKR65Kf9nPyEqdpDnNFwKJwMgm5gDVcVRvqbxrV7nB",
  "key16": "2rLDxSgfGtMnTDDNPKNvF6TuixHJiAigbS8fxtA2TdD8QMRniP7yvAn7iBNX8fQuci9f8XCdTKPMtq81LChKZGse",
  "key17": "4uFft8pZP7M16ic1RQkhH4N5RnM9FaAZtvGqhJiHXbbEiKb4ct2m7oMzabm1nJywCfAe3HvKfbe1sZB8JD1yhcZR",
  "key18": "3KL3QaZD6FwTeuHtE7kFgeXRj8N74AUapRyaDpJkhqR8nqFRcMHCao5Xh5miLuaas5xc5vgquvrLb2kuP9ZTstPk",
  "key19": "2EnaHe1RnY7Ca7MwSifd2D7Jcx14mq66BQr8nfkC2vSs2cA4Q7FjZVK2W9PwAkGyDzvmDexsdqwStojiWqqSrNqQ",
  "key20": "2mDiLuGLtCFbgEswGGGDrgLv3PH3bgVj61JaWXav2GSTPi7teN6ipTd6R2JmScUgpAVZP3bHV1w6HSExkFkePzMp",
  "key21": "5FDVR2HquQsrSic8ZjQvdG5X7EyMxodzTvZ2NWsbafZjCDLMeR5AJ4igCxbz9xB6yfMfFjQmqLQugxCPGFy24x4A",
  "key22": "2VfZXUmxHu1Jk7o5JHQgLKkPnosPr9ecNin6t2aaBxN2BTrXLHEjnRFGPv7ba1PAgrGi3uYAkNBaEEjR3K91PtdU",
  "key23": "5Qy8MeDDVzwEqCYxsnn8abKPmunQeFVjyCqDF1vSqhPxYmRLaDzrPzH2rU5LQkuXW2gExNcebVe3u4M19S5kqrLu",
  "key24": "pDxuqEeUxzpUDrVC5ZPaF85aUSchCFhQWwWWwfXAxQ4azUR7AnercupqsazLWk2H4MXZTEaDePH2k8bAztQk2Cy",
  "key25": "3tSRQgAiHPorKJ58GykiNQUpjDQw1rbr66FHE1T2bW9saSK6F6TGKNMfu2pBSwgzRMeEYT9sdJwuUMU1qbZb1SCe",
  "key26": "37ngpVRArNDCxySYMhdtmGprLKjPrZcfxUs1niRqqzMiS4VoZ5TQ3ijYYHWaK57wkwBDZZUKaGHrvexKm5cnXiMY",
  "key27": "3df8PE93m2gzP6ZFcETT2GospUqRDBBQrQUaF2s9xyYHqu3L4sRiLEBrznJet7oFHW7yU2S34rWcLgoZEwo5b6yr",
  "key28": "3fFAGXGmCk84Bnc3LebgMmXTBSLsWGUBCNUxJVqZs3UWWT2Fi6vL1N9Qi5xDRAqkt6dgsx6xL1ppJ6f8kXcA1yyJ",
  "key29": "bmpfMcfDHYVsDtFSM14ZLsunz5X1wZStUdZkQpUASrid15XGkEHmaJn1KFT9UF9Q6eSL6fnBffnEnzAcRAAGC4X",
  "key30": "8Ud4XYNzT3boyi8FxF8Bmqi85fpRfxS8ynaHh3Hot4bCUahTKej72JJNrPBgrUBK9onqtgZ8AvjLwfcQ7o6dAmo",
  "key31": "DcRVbtFe9HL5kPMFATBjYDpjohJS9m4KG8XCYY61o8iFJhMT5zo7y98b1jG7spwj3hozbuDMieinfEcuwbQDeX9",
  "key32": "3JjfC3KFRm6taarFzqcbjGmHe4NkvV3wYhpYi1mvXB2jiWkWcy4auHo7ts3SQxGF5XPMsUbW1j6LSPMTN5NZjKzJ",
  "key33": "ELCm2goUcnQKA99u3nqzXJKDro2Xvh36bkha2fBKNNPPzjf42BLgmjZw5tzuYsPt3ocwUZmBdE4U3Yic5MfZoTv",
  "key34": "4hykFjMJUMNHB8jkrgJ5obwbhkmeTTsvofwfst4PbQ32qPufMQKtDwdZ4jNZTbekraeux8dkegc3UVvBckbUsmDg",
  "key35": "2jXfxdKsj9WVf5eGvDMHK7jbR5fXXfsSLmWp2T12FfqJXzfWPTAuqfGZY3K8bxfhg6322HFscJ5tQubwUfP73ABZ",
  "key36": "3pSoD8S26C1gkSNAZkitNesBmtmbgJdFZahYiNrnmT4Yx5TcybrXjXrRyEGFGccgT7mySM6dF5t5gHwWPn1iSM3i",
  "key37": "37ZH6HCUsVXiKkTKa4DVo4XEhaL2hKibb4KUA93PJoZJy1rqbXRBdyKuBbJpKtq6o4AZjVToTt62BUPRs3dPNaNj",
  "key38": "39tM8kGRcYorFNQfdNJDa8utZrdDUpDkbq1cNNXE87n4f4bQS5zjMELSDW5kmShYJXe8NnHvSdacDw75iHtPELbz",
  "key39": "MUgN4jwWS2pJcpf3eCBTV2RFrMvPwF8Wp1gnRrjA1eujKS93AmVqB4ok8cfVggUzgBaUF2vJwZi51jio3SSqtjc",
  "key40": "5eNPuyJyP4cdc8nEfzvFPhgJhMD7EaBcNXK6tPpbTRrVpYUeiJYV9SCjWThMMaqPdYZVFH1uZ4esuyChSibUeTXL",
  "key41": "3PrhJNfChHLMVP1bday5sEaZG5Fg5fY6S2cM59n9Uqws1kkTbq1bM7LrYBdmvw5EQeDSogLmoseK47eacfMzVmks"
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

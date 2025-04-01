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
    "3Wz2eGsuXteNDxuvqkU2nBFNgAK3vG8qtbJ7GuLu39gWERN3EVudc5LNVZzsmcCP8FohMYgmtbnVvNLe8MEZ5gtG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MKmvZ6or5dK1sZoA7kYGwc3Y49i971Pdqn7QC2GMkCXuhL2dYyKnfbDyRtDE6gwcJr3DbzZ28g8hkQS6oQLKpGx",
  "key1": "4r4fPnrRLhagmNwtige58WSReibrCjmMfGMWN9VRJCMPA6uGUyy9VpDRshsRNXm4kVUVLcHGT4jKoUZyJfoxxJxp",
  "key2": "4T7TYyjD92sNTxiX9CfpMKCNUtDDmjdfUWuxZguJPSCUM3mRhUfoEXETw8m14SvWvq4AeNR5M8LQrTgS1rvjBpCK",
  "key3": "59zzv16LBdpPSDB1G6TpiAdtmoe1aLMCaM7HqRFVNUrvuUh6HJnsTore7hyx9uyVWwnMCT82XxBZfKcTh5TGsBVr",
  "key4": "5UGcfGznYX3ZUoqnGgqfdmkfoUAyjTt5ho9x6vDwoupU1Mkj81jb3chRMgM45B23P81aUStXq8GSa9VKqRJRzga",
  "key5": "5QwCrLMWscHW5coNuHE7R2n4ZgXnMYUbeKGj6pjHXifHjqZLq8h5H1HPxi3jbntbv1sKmMbvtAFvdipYE5268x3p",
  "key6": "5eY72K84XbaAsmFhoU3FUwmx1fTExMTg8jGvrfZDh6N1E4bKMSVzz3Yvc2TtTfXrFNkLru5RVFyLPyt7EPd7tcBW",
  "key7": "WA6fZYdMjYyEyaMnArjRN5gCqqPmidBD6pBimZt5NqV5CQPPxJmV4HCYsp76DnuMmziybXBiY6xBdj8JL5xddca",
  "key8": "4imWk3w5bEvoWv2wd5NrF5XTHwEjBc31XHep3T9jet4C3Re88jaoHhJhwdYZaxAFEiHNgkD1QswWU28rMBCFh9WX",
  "key9": "nDUAv71bQAp9VVG6228XMJscXg8fx6kMMEdwMCbwkm2wKqJJcYH7mzsEWSTBfu1VGvF7YzsKyDcn5QgyfEdNjTw",
  "key10": "5Y9ghtswGtJNsuVs31hKxGnwNihSb7dheCoXNEEPLk3zLHHCPzyD5LFFv1zWkyAnAfHVCRcnPdHNuixxr7fae3Qm",
  "key11": "4r92WYKr2hp7jd7h97hy2qFBAVyvwPmc5oa8H3btXkTrie481zqip39mf5nbGDRNn2ou3SKTWBGmhFTU1tDYrofa",
  "key12": "3kLW6vcJfLZ38dWQPdJtdd3AoGC3WrjEDPE5WrnTA2W8fo4f5ToZzEdvBE7HChKGSpZDR1iqgC7b1Me86eEccNvK",
  "key13": "2uTXJ8ptFyB8oPMSaivb2MCgYUhhXWcWHnKt5DZ6oYgbJwfF3csAyMKaGnTt8yZorKL7ad3sdunYiMuTsJmz4Jc5",
  "key14": "5mWs79ZE1Wxtx1jHnYJYGPd5Ei6uRZmGGMJAdhdX5QYR8VmaL8bvZECQcW2twrQ25vX1p4o48TgfYucxt2gFyqp7",
  "key15": "4UEuFakUatPnkPYYeYvdoHwVqQUVYskQm8RsH9MLC1LR53pZzdJJA7kena7tbEqtqvRSMuALhnYhXhpwPoCCwKUx",
  "key16": "4wKRTYV8nyRcs9wsNyurvKhGsLi14iGTRS1zJEd36PhYoKyC128Y9ABLeXm8PW3Wiab4ebX1T6AjxPTMCYe59Hpd",
  "key17": "59kZ9eVEoTQaQS7vMWfmUyXRRitcZYAycwDrsJSHJ8X3d2aECmLFfB8kqbDttyzZaS3tg16TejEVAkmYoDkVZgKj",
  "key18": "3KH3K7LcaTNDkJFR86kwTg9VxnTYwimzsgNLfg12XmiXgJfqi1VwboF6KFMMNMDEpfEz7quPAKHfn4bJkbHoDzi6",
  "key19": "E1PEFaDik6E9MMGXAjwY5YDz9YJVQ92n7npzBunoYL3ZcDo7iza6Y8htYoWsWcZS12erh6rBeFcJpzkKuhESRuo",
  "key20": "mJAqw98u5DhrehGGdJgBTiAZPd1Ubyj6jXZQQm115mePnAXzeXDrK2sUh7CvVmyM4jmNWcZBXjAdEhbKLNFLBWu",
  "key21": "3qavoKtkPgwoSvQMB8W78E1PkHzavUDgKj32EMxN3twvb5NwZKksmj2SwFraCq3AQU2zTpZPfd87Q686EyjrLW2Y",
  "key22": "KuaRNatWfUKpppi4eGW6upr3LRcahST1zeG83XCZ1Uhy7fVmV6Cg1sCTK1b4BFycoLAEdMQk64SmdB8BkZhFdVw",
  "key23": "5HL2PLd7dFWcNoFJttqtbFkQEbEJmgr5pKyec3hNs48yBmwDUngEUaQvLPwuXsrXJJLyuoWoP1TtU81rEZen7Lhv",
  "key24": "23jdrN2EQBdtfYeY9vcoXr98zv5wjugUqHNpFbtW5Fh3bRQzun2TFMddWgtGbLnQNpiQ3eXWR9kkzhQvCkEwYB4Z",
  "key25": "33m6sZbGrLvX3oqfZEu8wWqwTMHbPtTYtQQ23WXWp4gjKbJuW7X8YSBqntyMAdxKuWFdvZAPTBp9ttf7zyJrikkr",
  "key26": "63sutjJERZTzgmJMctWetAUqNGU5Pp5zDZzHPbUxWs6gotFEt6D47yHKgH3D8quCmJ35WREnDi8deLGcEPnmeCmH",
  "key27": "4LizuD35C2D2HmokwRVZZziUoZu9FkQw5bhPbqE7GPeav6WpnUuQVdf5PyHSEMyjTNX7UkaucbungyHZzNrGzHAQ",
  "key28": "2JWR5gyzviiaxJXmJRY32EduDYVk9n6q33QwdfneoiPZUnEUhcG8PxT92kgshZLee8Undk8ZY5RZeze6NngrbidE",
  "key29": "4tPF2hdQZPsbe1yKhNMBunq9Qjbe7BWkfVgwYCxuGqdvoyC6QkWA2w3Q7Fq5YeRwvF9ZfTfaqweDQCJ23ff82HSh",
  "key30": "4KP8cAeqQsMUtyLTj5VCeTuDMyQCMW3zki1CmRFT8PTsaRbymaZre84j3t8nZ9m9rc5T36yvxc4yEqgmohXK5pW8",
  "key31": "wKG1Tp1pejaWxzTGaumSCkWaGAnnQd6AVjX92CtqwmTd81MFHjiQE2Xh5tNPHWNtZS8dF99Wg4EsMPaMkpwNESy",
  "key32": "5kzrz1EF92hDxgSd5vxpDDHQfRTuzpUj9igLRdGxbvofckRWo8xbazUpMo4hCqjm8JpMZbrsessiDP3zJ3rGSTKB",
  "key33": "2ym2ypcNe3kid8aeU3v76iR2uQKbNYs4N2UouQ5YFJyMNq1cgZfUc8pxsZWvj2jFU5NMCr11DAmCubyw2HxCvG58",
  "key34": "37YPjYp7KySAnx7qVi8eFyAAz8L1MhqTz5n4aohx2NVofzk8eBQJKaCz33QDa3XbqKH8Fa1c895rmiCjFds8atGm",
  "key35": "3AgndGHzmTH5LHJfSCe1d5WcKmX7mcLUTQdiTdnNn1snX5X7MzvG44d7Ndx747KwEBLBB9jX98cqtAkFMN5o3HD2",
  "key36": "3Q8sdmwho2tprjwX2ysjpXSmHkgejoLCGqMdvA3krc4JiQkwCwm9RqNPU56PTkKNWAcrCdPDqueZYTfFyp6FDW4B",
  "key37": "4UCyMojAtYGZTKteGrXfFve2a6k9HUYoj6JseR8CngCvwLdqdaRrnKTTQ68KiRHCWGHNrUmfdaiTMLAe9eCNife1",
  "key38": "3F3SNQr7gGv7Bbye4MQqYYgoE68RkH9pM2sPEzEX8sRsei74g8hNSYZthfzqx4ncJ8X75CpY8LPfpueqDVbLgucW",
  "key39": "3jMcuU6KBxvA9nXBCGhkAiQaw1Hz8vC9qEVjT4GRgjW41wq82UwQT1Ja3nrwbRqWUY3dbeBMrMpwKZ5pAWuXA4N3",
  "key40": "2NkSKP4fPQ7qVXEWRJ4fgrB8f9JNfsTFDzxSgcUPVhfniCPj4NrFTWEDCWRticg6aPgfqLLn3iRzzF83XjepL6CV",
  "key41": "3KLASJQ7x58FF9xTYU9g6PBZNnxHbEP5d54C8Ng8TYSAetbhFDrDCT5bwNXvaQbJ8KuCcoPFhMn84kaMnNCi8qUS",
  "key42": "4mzxGmoDpnXaScYdwsdXWbtBjCfEbXz3H1dPVpFjY7q1exyzdEpLZxiZuqLmR3La5DfRZBHN6d44mMdEVjU7PVPD",
  "key43": "3p4S2KAxSoJMt7iMahgpXq9FxEWiUsuwTWBEH6yaNm6U8Arkd3u9miLkKqs4ePpVWNU4x77CjK8aDvmKUaj2quHq",
  "key44": "3n4bw1YN1B6csaeMWXxAmBgbxGU2z4gY5eprQ9b98dHZphj3ZMjXSTdXsmQ85kPL1eKmn3RX35FmnRHLMC5XWrLi",
  "key45": "5qtXWywdUqckHUCdmsMrdnD3iJpsoqnHdvjVYF1qmALCZFUrid1UwNgCDZCeyAnqq54iFuVSvQNypHaurU4y5daR",
  "key46": "2naHpHQ1e2u1LSah4y5TKPdRjxyjBbNpciUNZhLqEYm5U83isWX5kdxVz3hLKHEMjej1RNxpLVuFzGTLgELBZD8E"
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

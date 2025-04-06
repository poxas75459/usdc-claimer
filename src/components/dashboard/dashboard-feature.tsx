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
    "3dpjnTpmSQYp1PR16eY48pEHNAyxr8GqPYCeL82JWLURCNkWJwUCYSyjtBwoknsDfsW5PoNHMNWcBLRUupBMqbb2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cN63igVkeAXtRfvhwBpamUTQJqhtkN69Tnzs4i6MUZGRdvz2AYfruVsib75xTzdYSU25U1N3gQ8qZXzBvmxBVF1",
  "key1": "2RPpqD9KbAY9HgR6szikxjB2ncJJz4mvUiEoVFTtYd2s2J5D8iQvgd5EF47ebPC44LFHbBBp4wBoRDSitGGFiCtj",
  "key2": "4nqtpkDw7VtkmxoNLuKNMPHgTWZwQEFUZCoZzs3jcVScAiV7oLak2sTohenAZbpQpD6tsYDWx2TjFV9iugrfBMTL",
  "key3": "3Wbb1WCZ8a8w9pGU4JSrEUqrfRkWg4mgDtkBMTaPRNAoW6T3Zz77Q2crGstDQSUbqu58gH778eXYA9UL7aaMJ9qq",
  "key4": "58K2ijSAtFhCRewYef7Hmp7snyjxbe5P5o3puvEgJBK5RdGQLPdapXd7jNvGL8jqFTYiDYbyuXRaZZ4fS3ekKSC6",
  "key5": "635tY8JFsheLwb3uMLpyeLgqWypKvBWCYSxuRUA9GsmFQn1g3uFtfYhCm9XACcQJdJPM9UERMTvjKpkJhfop65pk",
  "key6": "3fb5XjzPeQn4GE4PEuGctpiYu4iNekmjEyJTvkKvyaToS4m8TUZVbHhzXJEmsS4dgZLktLCn8tfA3cZifnjJPAip",
  "key7": "tgrQq64Y52hpXHNarMhpZuQ3NyeeYsnKrxMxE9MXxCRrsK1AHNbw2qTrFAmKofjZUP2r3oDaBx27PrJrnP8b82M",
  "key8": "2kgmfsHNTMJxYPskYSTb8rqA7sCMArKFybQXR1jD8H8DzaFdvhgNcfTbsAE8g4owi4n5Xo1SQDrGVX8z6kqVrKkv",
  "key9": "4QijMGVFpDHM5r1bDfrTymeHBxDByhct1PfmJahKFL96ED8XgECr6QGcVKwX7D8zdx77nfkiNxzREs8RRGvvJst8",
  "key10": "2jiyXBuAL92Cu9QkG3ikexDoVWzZ87mnaRRiY1dQwSt4XMNytc1nynvXLKnwmr5hf9T41att29vHEbmLopCx3GVx",
  "key11": "ZWRk8x5jumQF3CFLbnQZEcw3jQnULed24MdbYYamCtKTgtuPuFUW558v7GBmdCfoxWw1Fpir6TDFF47uomvjm7e",
  "key12": "34pzydmPstoVxkjDdDTN5zkDw85qgLUQqZiTmMwAoAivEzuRwYAP8ZiyAhgnCU7kLQdR2QKmvtUtnrjuvUivCzDP",
  "key13": "4YFT5BsauSzBGcmWVux5VhGw2dP1FqGjq9qz6YQ8sSZiEwkcuuBHrE9kHEzrngQWbNW9vD7WtcPYYQznAKQs48Hb",
  "key14": "4QGmpDtY9CkfHf9UuqqX5v9uByJYxdYo57RuhuqFpQ8Fvi8dgFRmmf71SeDdEFaadZ3jorciqRnQSvBCvknUGJRv",
  "key15": "3LsSFG7gvbe3H5TfrNTLCK5FcSZ7tphvD6ANtmHqDR5iogXB355yTZLraE6uPXAh5ji5oMZyLqy8Dc3VgAeuRieq",
  "key16": "3q6PBCcpVjbLSdSgs68zyDb5emcXXsoMUGczdKpYWCiMaDCk2TKFwAZgdmp6EmtZm7fgpu6SDMqU8WX8FKSDF3Us",
  "key17": "5HfLCox5enpBsX3tdyGzaVTa295eWQ1gXDpPpT5eDsoqf9eDhv5GFknhVLaLMyvLQ7AjfsBbP56HuBXwqdp84v6f",
  "key18": "59gNhebc1Q5qreGxssZZ7o4DZBDtadT5kRcbggNxmtGkaMZ3MpJV64xZd5rs3PBSTgxohYxkBmirgm9dAnxZD6J9",
  "key19": "2romCyLB9nTkG5kyrmzbZTJWegahgpJbw29ef9N1h8dDazywdASRVXhjYhRVN7pbrYtGaJQTEACBbC5HL7mYzXKJ",
  "key20": "4LiDNNGxAvp9KomusAYaUjYA1oLBR7wKXrgmEosjJrNE3AhU7evwLjj3ynNKY2u5hN9n42veBWzSRKEFB8Go1N7q",
  "key21": "1Y6Rm38q4ZcDuAkjS7LKfEeLTwK1rZuU7B8YKRpcbpJd1xCWxo7dPxw4qYY9xQpUXmTXGRkQhVuQYhyyxvvJFX4",
  "key22": "Y9fY6s6xajRhn4btwxGgkzc9sR5XbFXntvyUWQNH46g2xfkEYNZjD1oNSQ6wEUYkxEqWSWkVa8oNHqRAxDkGJ13",
  "key23": "5ZxozkeUVtVAEyXiPtf94BWMHQ2uhVkVUEhqywfcWVr6B2pBXoXh1UDzA889dCRfmHvLsWDyDLL3MdRCYU6HxnyJ",
  "key24": "3GMpKugZuQD4fMv3BGWtJbazWCu9qQT54aiLLs2YEsAJ27ckR79J6My6UpcwPt2A7aANPywHyfjfueZFLBbyQaEz",
  "key25": "opYazZEaSzbuyZQYxiXUftPmtcHgBwzU8BvRLhE67cdkKSx24aoBABmnBdQbeKjnZwhbfvxuxhGFUPprQEGvcdC",
  "key26": "2Vh56zAQxcyXTPfpHdvb3Y1LhP98MH8xyW7ndBjLULtMVRyPuRUyvuESH7NbCTLxk8cCAEmyp7ES2mbjnEyzixCJ",
  "key27": "2HHL8yCTp9LbSdhVas7pUXWUpdm71FpjCs9JABJThxSWhMQ5a2GkbMsVYFEafwZqJXCW2M3VJhae237xK7m2zYFC",
  "key28": "2kJD7TzFHasrr8hVribuukrUczLBDJGWbuBzFXnkqKQudcDCsPPaRM4Ehtoua6hd3qW8z1fZUPYtomTuJi8kisKZ",
  "key29": "2SkhYNamJTscBwFtRS6euA4vTDsSEXALKb3gp8BfbmeNxLRtQqGqQb2pDxPENTMehDqJfrhEKKK6oxykSRZv1PQ4",
  "key30": "2T8wP1TK3E7JvcLMZxHMg9tG7EyZM1Xh1HuMxXB6XWkdpjbVp5JsREjMHweti2csuyeqpcsdw6XQBjPznDFARzcR",
  "key31": "29RG8FjyCAGSZXBoj7Dd272FSb5BPXqjtAYHS9gYiE2uDpzMLsj6Wij6AYM7hWzXDzvYWEEcZ5pzP3xBYYE7i8q3",
  "key32": "3Hqo7guLQCU9KSrvrJnFCAgi5k45ueL7uZUh5dfvXz1URTSsF1QhPnfLdQnuAUdqmRzor2uXSNfos65fzLKCSGLJ",
  "key33": "2avwxLJwUgRCkfoaUpRwYjMRxxxyY9yo2S1kAsUNsTZWURFDsVuEXxUXptN8T8NhAmpwtQusujyQU3arX85Rtwt3",
  "key34": "4u5VoHvQfbRq8WmAnmy137f1JsGTbPdJ9vcDgYRszz1TEzfcdJ2azHhrYkVXyeyjfWquxjLQDKX9N5Ew8NqXC73k",
  "key35": "5nWCt7XQ1k6Lpp4fNBqgf1UzSwcLAbHm7vBBc4VBXXuZ6tNLi2b2VGqB5vFcXe4g1VS3sYroHDCj1ncErBqi8vuG",
  "key36": "XYAEc6cbvgVni1LffJkJuCokCv6ZYp9HW4MSAwGkyudrjrwRTurFcSyJtrLh4oR1hqjafavV9d8S1rsTEYVor9v",
  "key37": "7kyHZcZLrPS8LZmzTV3vBWfxJiXXGTGYcQtq2kfexuUS1FcLbvKnz6uZSUSFd3U56djgL6YCTjTaBtsNzMz7YV6",
  "key38": "25orimM5vkm6jCCuG3Myb5rZTjrnTPcbSCwrebn8GoKhF4MqYp5MymG1DHLWqibDJ9rfKH6f5dmVduSTqjwfd9SL",
  "key39": "bJzZWdJiWg4ySdesGaNwgjauzPeqraqdbhcSHEx8LZHp8YK9hZBbkLEFPdKARTaaooiREgbvzx1mpijjCY46QRz",
  "key40": "61iKvDDYM4fpMAx2xeru9MgCi6rnGYPSbZwrfNmz2Dqad7ZJmLW6TTmDHLK7yq6n294enLLPjMjENFcrsk3jj6Z6",
  "key41": "TBe2MHxPoNMsmJeDLt18QqJhicEjvSJUpspcSVLYo8g4x9QHuzsJ2v8zxTnNgNpVL4vGQzhnJwYyx6P1KPeQibZ",
  "key42": "5BpsYELF3fL8PxAD4sX2mpcuJaWjWfDXWmAGiLBpTxKSHPbPFYTYpvWY2vc84fzfe4iFBdB1yqHqjBYyjAUpCon2",
  "key43": "3RSBYnm9A9uZwJQzRpzxnE1TKjdQPZmVKF8Zaagh58hJ12XDFQLeiscWx7KrVKGohqUcExRt1FF34wXmpPC8guz4",
  "key44": "28HrJS8KUSkfCGBeQRhQmu1rZ3zXZPZDvaMkNPWN9c7DDoZYe3K13jSRYGLADFauP9RJRT5GuSYGcTpZxYYCfmf4",
  "key45": "2g6btuqLFSvbSVx2RQJXQsELuxenddx4obzJiN3Rw4qVji9ETjcY73e6MDPXEGDMEda5cX94NXreksgYWBRDm9SK",
  "key46": "37WVKsVSQtvdEnKEqScn9XqWa9FoVAB9SrzvixmFChaqkwxX8sfDectA7RPYcV1kAtt5jncKomwC1uZbsNo1cqZV"
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

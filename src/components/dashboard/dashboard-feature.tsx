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
    "5gHK5bfjmePpR7BkBSemWxZyZrKHQPhXWehsZxa9tZueXGvosejEuDdzXZhjV22rijyuMkZkVchqiWQgucPdpRZ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eCeLejYzwtsdYN2YuWTSEkiGMXbgNMaoh6FForC8VmV9AguM6qgxrBDqcbXAmbgxW1QC5uUeXSZhKKBA512Uuao",
  "key1": "47QtbGaeUV26sNMci4Qsn382z8DZoy8Kvfx86TbspxfPvneUcAPVTnBhkM63nucZJe5fAbxva294bbhF3junyZTD",
  "key2": "3drri346HDGQr8E7undMAE1bFCujJEK2Mw7h3oUc2R31DLfvT5Q9ChfHgvtJYaG2xScbvzD2wV2dN56s1kCorA1u",
  "key3": "5gChWc2T9KViRFbpzHjCFJWevux23ZB1cvNRB19hm7qziUT7o7baJ6HsQytjiwHVNyXbZCxuDy5q8AMNSRrEfGCW",
  "key4": "61ydWMbG6VqVgrhjzvbXDei2VFTyTHsFJGfHVb3E8TqzE5P5MhPs81Kf9UdPA2Mv3fmDoPCkTvYFcNaK1TBV8dhX",
  "key5": "iwKHdgeZi4asFZnuHzKTH14TJApHspTT5N9tM4BGp3fcwatd1GsP5V2D2zEx6yzwkXVDoAMsRhdvukDdJd48gZj",
  "key6": "64SaraqDHs4PDp8um5XNkphgp6szyK4noSFRuRNvMnhbSFMiRGjYPzbQDAB65ohSV8Z9axgpmzLF4TLhATrDDx8g",
  "key7": "31snH3fiqpM5wT7B6ZHWT86wER6crVNPa4TGX27DNMaWWCx118Kk4KJou231JdGVHsPX5GGcpB12J6hixj9Wvhhe",
  "key8": "38ztudnnk6ZHBNiia1cookfyP5GbKnar4MbaupBZdy5DjhYXgom3wcDxAQvGf2qHVU2BDdfXp4XBw84baL8EJWPu",
  "key9": "576gu3Fo6CL5zAe7aHFmGHk3trAExhBHziA7hMAaqxayV8Nme6LsXspJzQJEyU1jipFh3ck7WhafEV6zmBy1sCgo",
  "key10": "5RdD5z3kFUNLfscSwkUAcfL6zB74NLyhTpiEGeBvMBWht5nTLsfCMcdcQEMD9gyu4SCcVYXmPKRmBZDrY22PSDU3",
  "key11": "LMTDsXU4jbSWfq67N5qhoUxtYTsdn16Z9irDALyUV4R3CE5bd3XU2XCeaFgsTxHRkCwyXR5pffufDa8FrPXTi5E",
  "key12": "5CjPNdkUy8CWXXbVrcR1ZU9BcdkGUnN3UUg5ko5TgdjtYZ1V15nQW8dGdDipW1QaLuzHiqaqiRUDkRfk13qLcRok",
  "key13": "4sQTinEmUjS7KbmKAaUAeTGz8nnDtiGhBSi64C4GSjPm9gCew3RWrv52p6uSrE5R7rjUY6mFow7gszpvTbScdBRP",
  "key14": "3jErQSvruQLc6Nu1ZA4RbX55sCWLjN6SkHmmCfoLVhr3sABmcKRcdNRoxAD1KoE5hSwTCDdfaakcPWicKLUKKRY5",
  "key15": "138D331NDS6N27tT5dZtZ2uNMnSpFn3ZZf61YGsGGJmM3hajeLTRRijaj4NB7oLEjV94v6LArw1to1P5AWrdtKs",
  "key16": "22oyxVDwk7Bk2N2F8GctGnpvKWHk8cUofgCV9UHk2DqSCyPcDYbHuWLRkDE5xABdk6SejRkb9MGFhF64sri9H7JQ",
  "key17": "5cTWSqgGig2DnxM8QuBYXJnsdys5xVp3JJjh8JqCkXhwEgm6WZL3Fd4CRD4oQ6ascwamAdamFNPKRRH5sb98jLH4",
  "key18": "3XAaQ1bQM9yU71cuvLKg4aHKx1yLEHR2gq5vbtXw8k9Yw9hQ46BisVHSvvuuM2jYjy3C3m1Qfzr6Pn7T53myE4NY",
  "key19": "2vXJ8A6petMs7KwNmbG9t2qY7rnHipCyVTw54ASJJYQ4XU2EDAJ5XTyqFw2DLDfV1aB2Ytuap3HTJrNyaY1ViVBk",
  "key20": "4GoGxQiWBbsjVa9vxw8vEAohU9ANjAdoYFu3Shxz86Ab76MB6bpCnVWKwCveZnhhUyj4NBPApnQXYVzEu3UJEnQ8",
  "key21": "yEZssBaA88cf9mPXZj8XKnckEcY2MdcLf1aJJJXB9EAYUvJ4NZGm6jATGn2xAEZYTt72KrN4i11oRnLFSYDA7aE",
  "key22": "2EbPxvagCfvKWX4e2yLVmQox7hSMRFRsskKybMpeYomJBdf3Zw5J3TW3tAYWwn5UkmobRqQ1vEJHHqKZpw9tNNY6",
  "key23": "62pPbsANfMHiMpX7a2JYvY7vkhzLhJ1WtB6kStQDF3xkx8MADV67zWpGr9R7ZY8pDKXyaDSVTQyeb4o2HAiBkqrM",
  "key24": "2B8Z5XYeeavdFqHzLBLHiNW1xFRfjdJnTW8gYjZrHhXYcZmwLJAntJpJX9K3L7YvMaY1vanZ2TnAYSKXfRjMWigH",
  "key25": "4ad15ZaXJa14VvGL3pmifxRQ4xN3vpwQAU22FyvQvS48ZfQD979w1u334us551Drk4q9YRP2Re9BojahFN6PJTtE",
  "key26": "VpHh1hZnMHprWve4KdFAZ5jBhcyqQD4HaoLrT3CjDxGEf6KKfNJ6uPERag6uPdBvqN84Zxxjo4oFeDUeaegd89y",
  "key27": "4YF3t62amfduxx27mJebRhQVfV4xyr51DqVbUNpn45LgTrRSYeYkSFjzr4ZCkoEHtYdxMGz9qhsuYN2jVPYkVchf",
  "key28": "jahaP53yQQwQW8a4SB2R5TXHdahFcCFxz7QwhE8syNZChHejs9brqCxhmMjZ65LjWfzMw67RS7BnQjDV4fvv4q2",
  "key29": "3dUU5UicwYuPrnHYdRC8qrMnSqruow6Yov9Y7UXBBUEVfJPmrwFYwoZcGbchZrZTQbme31QocckFUrWbAxCEBKUM"
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

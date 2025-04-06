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
    "39hkRtgxRn25qEuM6B2D3guL3udJV1B9inabfvY23eJTDJr6etPXuW5tKJ74oCQv336ofbH9vmCaz9eE5VBRHc3a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ittwy7ciCJds6cTbMdsechSNaP4NL4Pz8oaNnssbXp99VDPPcDfcL6k4XuR1grRHmCkRNUsbRiUwYv4ExtsV69r",
  "key1": "4upXkUUvrywrkByRxETtBTFsZ44Czh5p1svgkCYUTDKZwrgyrjg37chUU2G97afK6NiyX6xWdQNAGpQqnfY1Jc8L",
  "key2": "zpF4sAiUvVRN7G5J298g8vwqP4n61g4Wu3gZiwM4dXoprqJf2MrRum3csdPmzdfYppvpewnoDoEEndYPGEjotG5",
  "key3": "4P4xQVud5d3uVVUj78WtLdSi6vLNQ4o5QqjrtyJJMkJsBNQxZDXCq2AqqjEjpLvX5EAaffREnK4UM9kpRqmgV8kA",
  "key4": "hwbAvnmdQdshjq5mpfkCHoTE7poipQMAEfbQPRN1TQ6B4tLfzQ6LCAzx3jqvbZXFVboXRhRocZjL5WXhTRRF9SB",
  "key5": "4TWA8RW46Bvp3WutVwF5DXWUe2s4SGA1vypoZp83JKVm8T4kPboWsDXncooZ6YghTRyp65ndxrJycuWw7NZ14UcM",
  "key6": "5xVSniAky1Wx3VgNvxh3DeQPb8CZipS7aeJCNXHa4w1KrtW712xsHZmL6AUbkSn4f9yhnwGFaUBX1mLJCvwxpst",
  "key7": "EgAPr84fx3oLtM9AdiTkjbeRiciDzTaRCkoDycfa4wTuQV6Syrv48GK93VSTcUTZi6BZZyBNEsgqQjaHAw2ABEy",
  "key8": "5jsAwgV77jDsR6urmjikgwRkMr8CTF84sXg6wCjMc7wJfAZcZnfaMttXgRXc4bnrofAwmjiirLP2C3QdBBZ7WFBo",
  "key9": "cMWfd5nCX1zSVAaXDm4e4JkSfWTP9HFjUkkbU3cpFGQzSiGdynzDiG7BDrNWJc6r2CDzBqpmXhfLoiMjXCzg7tF",
  "key10": "3qqay3k3MNxjpmWx95yHz5sngiP75wsBVtsHfQyTjcq3DqCJxQTZvSN9DwXFGLs5XUa1vXnCeiXx4F4Te2AZvnTj",
  "key11": "5JeBy3bN4vha8E4v9YZX8V3QB7LMyDRpF2EDTraGhTgbVBbiKucH7V2CxiB65Hb1H3z8B8S97jF6YaUxCRuENn6b",
  "key12": "2WGYKvrHHFQ1igoKyZfdxxExYx8Df3vaEb3mnWovQZMG13d7D5yNmVKciyeWbYWos5ZFAuyo3TGCTrLkTysntgqE",
  "key13": "4WoPumxT45Aey4Zvi8WbHjw3fuEvyqQSHCD2ghgb9KUnXRs1UwyB9MMvGEqakWHpmxWBJvdvzh5gVFVYB7fB1sBZ",
  "key14": "J5BzhPuRm2quK3fxEgccg5dUC8Cuy91Dr8Ev5EKx8hQbXkcUce2441incT5c1VfNd6t1eAEqzcYkjsqorWtT3qe",
  "key15": "5m41AuacCFLTucoqx94NhzTPwAbVb6XRRZSXPcg1gtPfmTTCiBbB93Z11s8tvp2Q9GLWpdh56KWhsyJmz7o9nX3z",
  "key16": "3q5N3QQifBRfW14Gz1vWHDW8BryqvuZm4ptrmwkee4t8HyCjrTa3VjJkzM32bK2YexGFzJfmRx6TuE2jUHk17MgJ",
  "key17": "ujoP4mB4qYtVsfqVqK9DxpdZ9MyBoZjnF9Bjm7b5ioeTwAxGd4Jg9tm83RvtTyVwNvEDi4yf8WBcu2Y4De94qxF",
  "key18": "2qZR2A5aCCkmNtpAmKBKbUBhA9NBthAEnxUNPMrtfBDQc7g6k9CG2a2cb9rA1rfaSNgdEF26p5PojZ2r9xMnsMAe",
  "key19": "xQnhncZeL28mGTvvPETB5n4QXfVVuqWnmyfR9v2MzS94yaRgW4JL45S8HPQSyGyccmT26XoTK5mK95W1RDoEpKS",
  "key20": "5THZ4vT5oeTFvX3GSYMsHeKdLGCyy9C3d728Jbrxw9rjd5Sc2kzZvWjiM5WrzWbsFwv6khedPefQJrxzQGWgkqrN",
  "key21": "5ZTWEXeom1CtSDpjGyG7uRyp9dBw6jdLfi7ojVByNYXWz4sxPi4ggk5ybBA71hbByjXLqrLd4gNASbxap665Ra9p",
  "key22": "2oA7TmQqWMAErg1ZndbkDs8TpGDbComdjBTkKPcRxqykouc2bkasrbHeA6BvPbyohxM1qhPpJfBoKm4MutkwekcP",
  "key23": "kkpXJysPe8eR3sPN3ySFM6xhJYxUdB4kcZ9yqKY5mHf5nka1UqnV5aN23SpAtdBwk7ExM3bnCic59Bpar45CjDa",
  "key24": "35YEchUXNyq38ZbYYsprqTj12kemvF9PwG3JpLsJg2Ats99TBpGWvaMVZmkHySCUiLNcsNnGe7Zeq1rLrxRrCv1T",
  "key25": "3xQUSDF841ttPHVVMBTrBKayamPm998skVGXZAJ476hcBKaTnWidBntg7nD5uFJRoQzQfExmixBa9LBZWrX77yKd",
  "key26": "5MP2W9nUm5q5At7gdfwn41FTHX8fmd1z4XAnNgxZrWgJnkGRCApUYoyamgWKerhfcL53Y5Awtbxheg4bFKmDL2XU",
  "key27": "23rab69XG51hPYqM1ofxinnShSrLfrYAx1S13nN98Ek3eyADkyhJd3iu1kWDG3oCoBTZRrxiXp5kNEMPZcGkqckt",
  "key28": "2UUdH4oQKa6Ld182GBrSu6qayVH3poang2SA9nf7RSBRWv2rac6ps1Nq6LdrAru1AkiTBmJkHH2rYmqt2kmz9Sxp",
  "key29": "2GohmMpPm5xEZU861wvNdDeVQM2HQeXttL8Nvn8cVcsDn7KxLDwsbTqsSATdBJJdu69GBMJiacUqLw6hdNdikr79",
  "key30": "2TDq54yaU8VawRfWmXUS1t1iMD92Pn26BaNGd6t8r1a7JLpDkTq1aVYYr8UpiuPsRXqQF4sRUMVPctA9BuHThtvj",
  "key31": "4tWXFSP6A8LXwGUWUQNxTT8KCYjJsPu12XyyBq2VvJH6ZzNM8zjcwmrcEKH1RDqyhod5qTb9tu9E4ogzubskyesx",
  "key32": "5TvTpwk3kFpjgZX3ECGJcpRb6yb9e6vAnSQEpwHmenVHWwGR87yjpPKQDj3mGrqcpJD4C263wFxSpUFpMWxTpjza",
  "key33": "y57ssHxnRV4AXXqs5H3w4Kfr6V5ccJRtVf1r7YUVAKBEgij7ymszandzMvhFjtHD3o4QDcuj5erkByNGGhR7FwF",
  "key34": "2RtGhrnpfcLhiwFzo8sGvSuPpZG9QPWv4rygfkQZLDE1xSyuUHenEtfdN9t7fccaZQu3QmNAJRoW8X59zVREWEiy",
  "key35": "389AsdL7Czxy581LnfT8gtJcGzKW1hFopFYzfbzbjxkw1LH5HmTCX3VkyYNEVJzkBgXL8i5CttrZUSZYXewVqYjK",
  "key36": "o5TCzfPdBfsrwZAxBTqA5oAYRBfuHUYu9zmdWzyG8ucWvhm36zQwK6ugAzo8qnTapXnuYiednwHqAc88RKsRRcZ",
  "key37": "3E1tLHZ9ReYmdVDGnE6Y4Jbfz3KiM8h7DYx6Lxy7SxqhATM9SZZaNati2hjuPSBVhCoMpWBTrTtpbG7jXLKNDoZx"
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

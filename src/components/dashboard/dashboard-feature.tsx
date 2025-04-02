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
    "Zg3Pc1E2BqaPNLuaJqW6kswha6uPHc2r7wiy4vbgaHvnttDPZQUCPg64Zoi5xBNrBqDKgnwqEx4tSM98rLTb297"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2udqgFb4LnZZZduToAHvXHJpKKq8oEYdWCtpjpc3h6MG51WRsV17jPX2P8xNtsREQANvBEpRgZnojCQ1CFjUgEsA",
  "key1": "2BLUv3Cvoww9nBNWLQHfnGr5niwZP2FWrSWyh3oCXSTY2QXcqdSMa9kKEaatzyDXwMBfQXN3qa7jgW2Ej3Xo7SsS",
  "key2": "5jRfY6VBRWLVu3eKe6gfjLhLiuoCPNHeTRo39NFZXoeHZyDfj34ZQ86aSYfRvy1Mswg1mX91E8PTt6ysakYKEKqJ",
  "key3": "5aLHysE7fvvYMjzhkVNSg7TbhwXJHZGQJnWxsmUMzMFHG46RYFpkkiFZ1ydrTy35hypLN78qWjwWCmDY629nYhSe",
  "key4": "3h9Mj95qAXFzYbruSmBD1hGb9RPq8xyVSRnAcEeJhbRFBXx7xAWcuDtVAuYJnhVc652diVyMDyxbPGdHZymGc1cf",
  "key5": "2RdQDZajap2T5bkoFjMVCir52pJwRZRPKz4DZWqh3HpmaPRKDD1sWrUZiwUpZwC7DuCYAdP1NsmRtmPbECjti63R",
  "key6": "3cxYeT27pH6SuYFcNse68vCFGZkcuwsGnYNmrymWXY5bXZHMsB73bUxtvnco4k8mKURmGuQRZLuV3Vh61TtgecmM",
  "key7": "5adDLHhbpoumFmkibBMLGZnSJuCgTFjopJePP4bQaFYfzL5vJLG8Jji5MC7WJapdWW2d182qgReeHCbim6SuGS5p",
  "key8": "5KX5G7L4h6SY9wA63yJQ7ALavUZkCiyqUEH6FvNsVYkb4LGiE2FgUenYp5uit5aKSQmEyJFi5JJdcMhX3ni5A9qe",
  "key9": "3DJTEq3oSZcVxZKzHA62uVjzpJhiYon9vv3CsweuiCThthMrt5KDgDVq4kkSD87Q3EuK6qJctFZgDV4jptNSnWZW",
  "key10": "5WoUP1ud3QQM38n53tmnYnavsQtVHbGeBLHSjnNQtPj8TYezkzPgJr8ofixGWeVsDkHTVZXzi4qmCGZdrjQKVYtu",
  "key11": "3V68GibWciJUpD1iFFF2JmWwMKQ2csfJxuyvSqCr3hD9N2dowxUQuM5BqFim9oiHdPArpZcM8cquSfksGJgzcCWU",
  "key12": "2PmPAjS4QRTCoA3VayBkf8om6kLvbDVboFWW5T5svxzZ2Abm6MJZQzFQXyyYRPCBzPM8srDpWqz9RPvLLZKxvFhc",
  "key13": "zWbJyxa9AMmo8jNFYb5H4MhZ2BV5UriLFuGHSVcHSVTMcum2svREeVF5J5jCWfzFqZTXBpwSLRQZDPb4smDXqC2",
  "key14": "DTsemj1jsfMt2bkHvirgetVLvAcfZ8YaHCTUFd9ERa79HYZdwB1JUZZcpDGT8eDyWfJC5GRjGwnBHrMykE5ANbo",
  "key15": "j42yVxY8gpMG2gY4cBA5U9poGBX1neaGYefhF2kPViwra2dQrqhsEYviPr3N8qxrHE7Q8A7JmgaPK9GnbaGqvv7",
  "key16": "3ogKbAY6dtF97PSBNheMAzPtvbcBHN3uDJJWBaN1rq63HgQHHpaPXkiA3MQNfVZNDctocRhWkhPUVpDjEGsS3wRB",
  "key17": "4vTgezyspDFfWe5rVTDPeux13yUSPVKzFzae6p3Vqe9gfHyz2nic2qtGs1v8BCuG3KwbptTZmbJnKFqAJNyfjoD",
  "key18": "Yw86ZysH6zHpCcdY7bio8Ka8DvQsFu6zRtuSpLrcsYzZWbshsMSBkK9psVQhibxgNtpandkywHzx1dsqSmHGP3o",
  "key19": "FVN2qAJ8Do54GvHQDD2cGXwYpJSRSRMCbJpXhhFYkHqVWwwrbUXg1q7qZhh6rNQkqx5ashfEafxXSUsJB7KJdhP",
  "key20": "21FBRkncwZ2ELwDtVx2YWFqMwYeEfb61gRc9wxPeCtbiEncFGkLFuhYqgQ2Fghwc373h88UiUEQJ5KveM5wXE5xN",
  "key21": "5GpaKb4u85ER2s9oZfHU6D4MgyVcPhwbsY5trezY7BLKZ4Dmqza6gPnUok3W9KgvSYkc7tBkArkGtanHm2sE4B4n",
  "key22": "2kR3ZSQrYp4WHiMWxfJbtAXbeHW7BQraHtLiAffpMZXcfuAFFqm2DAQ5GGfTg83GWo3dVGRBbsMgZCAomjvCL62Y",
  "key23": "4B1WBo2Ks4MocXNJwX9Bvh4b8X2548zSDd8vr7apAB9TP7JZNJeNA1Wv9AmNnk6N6LsKwt9UkAkFGyWZwzP16aB9",
  "key24": "3GafZZ91bkTvYVYf9JszbrT1hEB9m8JYJT6bea6L6djs1jKevSKtZeKWRpJS3ApeU4TJPtqH74U3yMGkabWDxxBv",
  "key25": "3QVZCarNqcdrwj9eE1n3m1mDs6agG1PAmjyCiamc5D3esrk3ACSGHjvEdm6g7FMsGFaPc72fyLgGzF5JQvUPbWq9",
  "key26": "9p29v8yViUsAKpec7mZqLqiu1xzNsF8nL7a3wqRtk2WJhsxmZjumm8QSwvXrDoMg8RV5eX7E6Z53BEFnSvpUXJB",
  "key27": "3n9cKfuDPtzu3XeR4zQps9bYNio23beM8GdwNnhUn21CuvR3nNdis92fSsEUoQUqNzBjjmqT66BMsYdUs8q51LxN",
  "key28": "4WZhhK9xbChiUtN2bVhyHdFbpAbx8ocTtLUW3Qsx3rjgomrL2hDDEYWB2MVyMgNASXx1F4aPNSyeFHqUtNe4B3AF",
  "key29": "4YpkgLU3cUdz5K4YFxkPexMR85ZP25ph7kBwTC5g3UApT7mVzQaXYipUuCftxuCQZTcvYRWNB1GkNJu7oKspRd8r",
  "key30": "43hc6XQTRaFYpqEHHkaDMFgtsyXc7CfQUp49fHCjuVSM2GeBbkp6RanofXTNjuPGVqgrT9tGs9WZddofyMsAbubW",
  "key31": "66K5TssXh5Q2rCKeJnXaUtvDhcbkz5FHoqKzZKxTmFaEeW3BmnLi7mYx33XmJDwySCF4QjebmBPLHkiQaSgkzUDn",
  "key32": "2E4svjutimzFsbvYmAzR4TEoUvZeJwurqNgqUwgiHfmnFwKW34W2QKfbSGaD2hiCLK414ZRS65aNdQKHfCJKgayG"
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

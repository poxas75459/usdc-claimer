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
    "66n1Dfz7kYARnmuBBU37hqFSGroScvfSebX3f5oMQMSgDRDHUDq4YYXFND8vEVM6ktSGhqLGN7NewUS9VhqkH4DK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rCY4MoexdFmjq2SLKvGWiiDgj8mDjxo9RyFMhaZQa1sowV8HVfD8oGmNozWU2egbLMu62RE95nieWVjkUwjsHUG",
  "key1": "4trDNvj8tPvLnxDfnVcFZNdETTuhcrmwDR17emjKexZAdiHKrk7UEPkpqmdxbNpAcoDhGi7WJt6JomVXPLf5fapd",
  "key2": "2pKonsrCX6BfJCSXzLRVENGTZMPxRCzT49us8zS3K8kXz9FddF3EzEMznU1S7kagurDUqq47UwUsbVz3uvEacYz4",
  "key3": "JG868Zmjeaxvg6dCGk6KuHvSU6ZpQZ1UBhT2mTnKpbczp3mkXLJ7gazaq3ZaxMn8hoekDnSLw4wh53EjH2TwY7v",
  "key4": "4SSbuTftrxVAJjau4kEfsfWkhaHxaQbojwxM9yYaY3mqvyYighRWabJoqZpnALrFr5yYXdeT3Kj1oWkF951Nsn9G",
  "key5": "35CL58v5HPP8ijG73KAwb3KULDApTDyuaK1UxVZVv7CRdNPELVrEUnfSB8rR5aSExFPXu5mSBfwgKXxVQXtfEwPF",
  "key6": "3J6DNjLqfUMQMLqm4ZodyQRqbaSv8mNd5S6sMsKAu45fQTPN6T1MNfSCEoZjLB4Vvq3gEQpyYCyPVh6K5cza7tE1",
  "key7": "5MbD9dVcBfnV6vCmkHMBVcFGgYMJYDAFbpQfwfxnj6ZRkxReYHsmtK8KsrXbBVt1AjoF9tRbFvWE7Uwg9H2XHhp6",
  "key8": "Dd4tLKa4GPZJt9FUBEof9oxHJcDyk67FeYwvWPEbDz7CsiwWPq78rA1y3GBzr8K8nRPmoWLbk56eiWLHSpwhCXE",
  "key9": "2K4c6N76hA7tpAdKeeJWUJLwSQ3nkQSEtqx4g6JypV4en5jQeCDpeCgZ5H6AaFLUiufNo9ZiCKzXG7xsAmSiHkFm",
  "key10": "2k6F6VZo6VxTT235vjMJ3nhMcVRBRqxWYZK77R4DK322u9oEM4BFKJ82k6ZXNrhJqBbnxparMAS87yXZBqSzQA2N",
  "key11": "4u99rTBRsdksrwSe5Sr236eDbhHgBYgb6HumX3W4pgnKwKob9dfzdPMLvfSQ46pFsRUuCBfQJ2CJ6KRSwCPytoi",
  "key12": "3LW1hzp96EJiUTrF7Vxw9FfVxK6sYkXRxtiyq4EgiF2Eof2cpz6s3CsZSPs8wNvXHGsXjDtHFkrk4qhS5vdUXS7a",
  "key13": "2ubkCGQtzD6B34ShmF4zDuiTvZn5wK95Sqrddz2Bkefes3pwZ2B3C96Jd2S2gU6WU4Ebq5Eswv3ffBz1oSeMAfSA",
  "key14": "5YzLG3i55zdxbWNjgAv1zYsjzGYo6L8f956xGicAtVx5MzeNPy61GGiWS7BnSmyyiRwBTTHsbcZyumTquyrUnCKD",
  "key15": "45qa3icHaHGRkQibtSLxTTm78ubMnUmgXShyW2MnhK5uwozkpTJA8aqzpVL2Doom3w6tCZL8r2E75CVaD5sK57Ky",
  "key16": "4Uq9UbCVY3K1UrsjSbFu1ZufwzuP12K5XkK2sf5oBrc2utaxAttsonM57KuHZtnVhaXa2eJnxkBxtz7zkctnFLar",
  "key17": "5XDU1EX83r7B74N1cjWUBc5dY5YxXY3DoHiirCiqnWPwguisDDuYruZCFcByQmfACbMA9upfBbAjeP3wJbibJSpg",
  "key18": "3VLA38V7WE98ER1Bw6fdJS3baTdv2Y1rxHcocFSx9m7knjkdxyNzkMraUKnfTg66nKiBfxatbmxAXejdrXUfEQEZ",
  "key19": "441JFTUVgtguj5ukoXxaifRgor39rQS4M5yHVxejRMJ38Zea3U2CoP42CdzutcGgc8Ko8yu4jokKfzQDBSq2TSpH",
  "key20": "2uM8N7bkADiez6yTTBHQtMM4pFuenfSP8fiW2AetquVKnaQS7RXFiUe5B2k2UfLis62CkWZ7eqevxed4dknmCzr",
  "key21": "2ce8nEqeJs261aLiX2nQoSCAs34EyzeQJNGq9suBVNA2ZJD7Mkrp5hqx6386JW6ZJFjpTsdKUanfMYWx3YxyAosz",
  "key22": "56RmL3tYa4mXPmF8guhakCs2hR2exPaPHK2BCUMJAPp98Upmp6kuMW47xKhapZSTz5xFUFYRBXNNDdgtESZAEEaE",
  "key23": "3yjcdavNCZPMeYk4uXRJoqtU3ZEvMzo6LG1WLxTXyjMhGyaZ2V4JXwZ2m9PwoUQhwZnhLR8urJna4PkZDqpZZRRD",
  "key24": "3JxrqrMCaJmMu8EbvDVNs6SFgQusJz1VrnpGYyXAUTWvwRN96b9rU2sHNnhfHwvhdq3CXSKakcpY3ZBYE5Z2oQQf",
  "key25": "5zK4UuGAPWSZzU7sj4Pn5CCBrnFYvRxjEPK9Lrefb9Nhfr4WQitLcFY8LduHvkLvkMCvGsWVRnquGvnj5N5HmjA7",
  "key26": "2X146t5kJcZ4fdD5CEHvtwGSzqqsQFc1xj2ocJ2MuJzMB4sy74eut7PBfo6pvTCaZ5S8kR6iXFrcqUzfZEjPDaK5",
  "key27": "DAWMeHzXxKMJxEsn8ctPoLyFn33gUSg991V678AtWyvQm8py4Sh8UAaZ15xfJxL7dkmCKCD9TLkw8o2GCjY5Raq",
  "key28": "4NqP2ZBTeTkCFDYLP9MP4kthsYYB7uJwRRRSPJ8xxaeFCZcDYUbXGneANq4Fg6RqFFnN81DBXnbkzLiRpymJAyyW",
  "key29": "4kpgZyEAcNGJnzohaoxNmgSJSjYEq2bykYB1B9SMSoU52ekrGtevz8giubLi6Nk1NGQsekVfTZNeiXfjbQqox6zH",
  "key30": "3wJqAec52Zk9aV3EtWgQnJEUSFL5d31HaN2Jms5nbnxbipkFdD3T5M3YpGeNazPhqf19mbAG83wWEugFNwRJR1WH",
  "key31": "56zggwcpDwL85NG3L99AFZfntj52dzHKuiMTqQfLk7o5sqeietC1oikFGaan6C59aPbx8u6ssqGggNfUNpnffrsp",
  "key32": "2sh2pxqGtxRfYoisZuoyiadpKCszhE5ahU6BSoaeeth5sZb6uEReS7kdjewKBVteJYpSPoTNCmmmpfNw2HoiSkis",
  "key33": "5x1BnbRtykCz2Agp8udbKz23Gxto9cthGHCwuXJetjWpDmnuaj8dL2wNztkdNyLWLATvNHxCiiQEWuyz7YZPJ5Ad",
  "key34": "QCibyD1AvfRZkfGYAY9zv9PtEFP2gyQxfNoLTrakkpTFfd4gmWg8UqyVx8D7vfnzakNxz2hCRckyaeiZswtJxFK",
  "key35": "3QpV88Xj8qM2yaQhSq4ijoAU6BbF8ky4srbZohN1kLZCSMBTxxPm1uVodm1bRkP91rBnDE9JAP5pZDzA7opsWJfh",
  "key36": "4kCFee6HvJhSsdf1kt4V517HCupKGikaSNR7nTHJWdm1TTwE9qN6YLdfEDC12ogiWEBp9aupryuKb4yQWoAnbSWB",
  "key37": "4i5PzgWaPLPfXemR27kieyeoMjktbtyUeod4zssoSABW3cs2Hxb1XK2gq9cjcYtuPwqX3wD62NhQU7QxMPrNUjm6",
  "key38": "4KCe2kqutXrtfosidVHgjV59zUKfnxAZZhJgcFnJn5e9fvoh8xha2ipBRcutUEiEHRc2L1ucAUDivB3AhRqiFVam",
  "key39": "5m3N2V6jf6Xy1NSfyZB2sBWuydQyzcYsS8iEAoj2j62NUPCPa1RkLayQxxDfMSeoXo4dZ6V5G11X5kHiGy46vqre",
  "key40": "ZCbKCKK8VRfSL2mVMUw5AYrkpANCa1ZVPdp55kf3ePx3gUuaXBouJG9ZvT77dRvSvp5uQKi7Ccfx9biU3c1easS"
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

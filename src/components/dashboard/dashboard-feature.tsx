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
    "5LggHo4WwsLT8tsTtuQrSryBCZjoAieHA5G7kNwsYkwFLftBqP7VknHwRa5Y6aaZyevh42GKShakDwWoqr3S7dvb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TLiH2eV7p2YUDRZp4bNKBdzcWavvbVfUzXbLcFRkQmsHJUL4dbTLunBL1H22AHKVWQyFU8mxnsSd1rriP8pTryN",
  "key1": "3FtynEL7Hv35zQwhMk157sBJ11CYVFAJYNJaDdXhFP7mzsecGX6AmDVhPVNWwuMmfGY61yoQZa3vYNjLkJJtwYnQ",
  "key2": "29qPa51TbjoMXCw7PMdYetfs1g6kJrDtzEp2ft1MYMKUZzGfhce1aLRjWz8X9XMmtU3Rfm1R3q2irKnaQKwcfYS8",
  "key3": "5iXLLNwYWb24dZTD645Ry8wefAV6rHkmCBBzZpPSBM2V4XWrdPEEGZua79YYbn6gaomtPznzQxtZXLaQa6qquADG",
  "key4": "4mM9nkvxzu6TeF7KBVpRyVdg6CeFKPCi3fNe4Nab2vfKoiG51yYfBLrVqnRpDdQ6y43rick8agKC8BrnUEEnN3fm",
  "key5": "3RUfXvxwPBbnJkdv2NeYjdhnXw1SkCTQpL7Yhc253pCh9YSwKMJ4TfrkHr723TKZqBEEnBHbwCMYHoKALCrx7TB1",
  "key6": "4hKRwq9fkPu3Za4HfqGqqaYJ6emitpBQP99u8HKnvQAEkbp9az9agzg37H1dZiFtvNJthizQUaRphWj4BQazS7Mn",
  "key7": "5huzeFWgfmRXZy3EUhTgqfzwCQdnkXaL72wyUdoEHmpazi1Z7PjhnkfNhwkZAH43UXWBqvKk5oK5Av54sjDXsLzU",
  "key8": "3TQ3qZzqiJkFAxzAQMW8mW9kMWrJttWCL8wKNC35pmZecr7zV7MeBiqE598st4pb89gHYc1Gso7sFMw7YD5GoQki",
  "key9": "61aYo7gwYfeAZH3f61aFcTXUAhmtJDrnvkdhJMf7yBJ8LWCrHtCpdu2figR55MVoq6gXj1NYcnKas9xwwVsReAnL",
  "key10": "4PhD4DKyCj8FszPmJ6QutPCEWBQQdY4Ytv5SY4iN3SF9bSUF7c8fvpvNDKffPLhoS9uB1CgTvx5eRjNvJZFtmGch",
  "key11": "23pqu3sGWEgkDpnH7sDE7dY5eb3RoB5DdN1KPFtJe6op9TEgJg8LvwC5tbYkeHMRRaVng1ZMegaHVQ3qG2xPg89P",
  "key12": "3wEy2NihESDrPbMvTpacSnVpyJkQV7365yx5mcCrsy5ijU2TrhoveY8mePjFHTcdZiwBYYdtXc7xYZdv1vmvWxp9",
  "key13": "5nwQBCc5gGPTNWFXwidV7Ty1eEuT8jjxmnspHm4v2B8w87YyCYs5aykA3fSrug4KucM4DeasVgn1R7foGQbGftzQ",
  "key14": "3vafyWHoKCNeTFb5CueQuJ6suaSsqVA1UeuaE1doRkj9P1fXtma7vncTqDFxHDbdTgDjB6izUaX45Z7b3N59Ac7v",
  "key15": "5Cuw6Uq5gbYYCqYNP2MChPaRLckxar7UbKdfhFssaxJhYe34jTWiAhDSkRNGq3CvnXvnQpXxug3jkyzqkzoKKRTu",
  "key16": "5odsixBwpQfxeaNqgok6ZvUJyUGm12xHurQJc1bRmkJXwPPq2eD31Da4rZoCKEyNZJCSbevFzjZV7pkZ62MUEZX1",
  "key17": "BzBenKmQvC8xXJqhfmbLRE9pisJDQhBnU9Q8aPGp6uisb1Q3bmuUqksKvseQQ8C2NBix5qPCJ9KxEtMvLzv65FM",
  "key18": "2Pn8fmpiKRFBYVxZ5SsTmHWsW3FK8dG3pp62zsbw3x8U6cqYwnD5zbbHsiLwdUf6seBo9cemMunt1dCEmnVDVprA",
  "key19": "4farpjZoUvnnojwsAv1feDZjtMRM3NAUWMcQNkjgKGFW7jV5cLA4N18aga2C29ZSzSAHvFj6gpLDa9yfodzFi1C5",
  "key20": "4WEhrATgwrQzrhUCcAwLn651G4smyYT9svZQq7pDDMemwYPdkuWGF852SNDtS3SgHn1GkVoVhSFGoayD2ESAorfc",
  "key21": "663XjmKjRTmB49H7qCCL5BvyQhPgzeAxB1ch2PQcHW3kvpvHwiupGLi5KzUf3BfR1o1F2Ej1vvcdGSbUQX7GbALs",
  "key22": "4DyN874yFLxb6VfbtK5jXCVtr7p214zhk1Xaa1nUShqc5BmnUNE2hAGpU6Xvedbt4dkrZt9P2JWau2aJJ59Jm6nQ",
  "key23": "1wAWUhVWairYXcvj4PZm6Nx2pYWszqxxnXzC5gKzfNBTMSbNysHUyHUme9rE65k4GvULEscfkNsDqYugETi7Xwg",
  "key24": "4rzD2jKS3ajpqPr2MXaibbU5fr9zfTtAFoNyPpC4tyJVPK9t8swpLmWbfPB7YgZWxibpFWPG947UW6MB34eKbNtU",
  "key25": "5CzgoTzXXgmcUjnvQ2m5weSoJdhQ8mQPmEDMBj45dpkBrcHeibxLPPQ9nGURgWkLmJfpf5BT9Cc5nf9Uv3U6RW1A",
  "key26": "42EK2DaGuo7vqKB6z4QKmz6w9UBn7opkKCCkVs1emaNaLcTQ3rAatC2RVtGeX9rrwa6XFZtmvtF7bahbfBNt4Ec6",
  "key27": "54GKumZQ6jti3KBpFHNhGufApc9cXoWenVpqEUQ9HYq4NiLivTkJVbcbiQqqh4KETHRu8tDGoVyUXRTxUjQkt2ec",
  "key28": "3SX3nAd9Wq2m8mZkypgNXDTFzJWipLvPdJjhQwY66gWGJoocAnhzWmLJ9ttYzGx4nXnEweX91pRzHh4XTCTA5AnJ",
  "key29": "3jqWYTRM343zfCyhHfvMBTF2XTRGf1zfUTHmRb5B8eCC2y3Sr3UzwAagrm8GpNsHuLidkainuvdTtN3VBRr4Bax7",
  "key30": "4sYJ8hz5wVDvbGPuhXFGDLdWjxBeKiFJMcxm2ELnaCGLGGA1g9mP7qiCYRVypj6AqfL1UbGN4cEUsc3peiPeh2Ht",
  "key31": "4TcKqbkqBa4YSWURMuehHeYq5TsaH3SVNr77utRWmWQsSHtnanfPZc5TagC3sXJPqFb1mKDxfSoetnQVF9j7Mtbr",
  "key32": "goZCt5uFFAVkBxcCSkLDHoYdk3MHMSmikhzwDMUVcvDMkLC64pdA1YetbhC6UXF1FeQNzGbjcXYwDimctRtfbx8",
  "key33": "3RD4szTTChDBu9N795N8tNUyUesNWaWTcKTQ3MGvZ6UVo1yKzkbjM9Hihmzo4b1RH1nwsF7XV1pyjgxhQJuyMSyj",
  "key34": "831C9rFXwKibXwrQD83fynX6ma9gu1rBXhJ9dheHCShBesspP2vsVuhndd5ci56QYckTDeNppLoqBw2xSmPyDTu"
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

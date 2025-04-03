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
    "49msAKpqmhpjQD698DrWGBGbrvypEKJPoKCUpUQrc3ujVrNgP8GhdxhZyVYvwYrFJLptmZwLZkQaMcgEMUNoTC1B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Uw1VuNpXGjLsbzf3kfyQDomSL9XpjbPahq9A5dbDYnPq2ZyXAoY1vFSWQ1cgPR3wSzJGL4HPDFX4cWfNqU2XrnN",
  "key1": "4wLQpyTom6FGrGzjaTQP5jcXidCdHPYz75quYPySFyXUrCZKyMk85WiQ9XhQQMNed2L1yTBg1YVHs5U4suQBnAQ7",
  "key2": "4T497qTeoW2hZVdqZqp2dFCvox6yn3ZkumynjgZW9iXyFYTUJf32ht5FYx9czm5SzfazVXJwjcTxsJmBMLre42x1",
  "key3": "5o2JBiE3Rp79U5NJv9WS1wpnFPRAFs1MT3FSXghbuDSf2DUA6UqKNgCsJjdCpQKwvdve9n7DL7FX1M4dbc8PQ3p",
  "key4": "3EqfzbhxfseLodHzK6RYDnnDb1zFveTGeap1nYWCCr9RGtAw7gavJMWDyfuiogJWjYeoqKwHWjrTjAVxDbtgSWrN",
  "key5": "528Hret4DGGqZZvEyTHqCWqgzBgsN4UVz5h69tqryi2pMJcSM7pBTGB5ndMGgAiM8yYQqfyvqxvaL4eBgwnHRYKD",
  "key6": "21FnSZVDbzRFJZnG8xpo9wfANyqEfgRBZWjg4WCLheApmsC4AL1NHeW1ABjs9S9PW5SNXFJzajiq5g3qeHvhP6Vt",
  "key7": "kLPfhrL4EHjCJjaz4jq2bVK5vkUbjgCTo5mWw58ktradRDYnP6G9CHeRRsxkMmvwZfGEkLEBNfRb5CbniQ4YXF8",
  "key8": "2cnpRmxwmpogTVYBvDUwTWF7uxxEiYiHKj8kJk2zR67iLrxz5fSihCHWAAYwCxDM7CAznXuhkVFP5hZcAobbDeLk",
  "key9": "2U5czWXxNyZp3gACqftTKeNPRpcqb8qTdMvXbcXaWkxgZMCguETjY8QQaAnun491d3otHWjTyZFraxQVjvoa7f1Z",
  "key10": "34h6EZaTp5mcUWGYMW47c42UUuoaEpyyaTU7GxtfUpfKFhq2hWkZuNMhvb6FXRPcKdt5SDnqX88NMH1g7KRNm54E",
  "key11": "AN9h9GfNvLHhrMNPBRLw37TLpNhjbT15CQTeYLi5CHSnG9hBPuTt4HtJgx24KixJ1N8VFrY41eJuNs4ZkCRw1he",
  "key12": "5CTyPPErBqQJ8qAjDGh4KzHh36EThetyoHmP6tXXwM9571zhtiLrfGwFSxKoxtcVyVYMz57R11HTXp79gD1pwZeF",
  "key13": "35qxoVvaDFceiAba9uzUjLPN9eY7DyXf7MMNAFRKsqAYgb8gn7wxsjH1tFt1MfP2EPSyCgw7pnt5EGGtk6po2kaR",
  "key14": "rAcGSjEXczKMvcwH3HNbnjJu2yfd8F6VG5ZfWr6j7bKmLewXJY7ChR2hypbpjz35iY5tZpr7DSMNdmCuE2JcVfS",
  "key15": "5v1ni3A6Y1eiuDfXNpwzT6vL7KcgcseZMdfX6Vacue7fye3Hr4xoKBYWjHSfwHa7j7R9DKUwQipYpdER1oDwAidg",
  "key16": "3GByAkTZe6SDacr3TXmihgNR3CQYWXRaTLQcbocP16QdykW6b29xEDT7goFD7vFxCXPU8CSLDYukohBJ15j5p12A",
  "key17": "WDNykAekJq8aBHvviQXtEEAUDNVmpT8ZpJmiUm6NMuX9ZmzaDdRpquMTHKqdgBgXuZNCnAkMTZzvNRMXcg4HVop",
  "key18": "4w5KGbMZz4zfDZUmuJjKqExNAzVnYtngcmpsMpaNJZRsXmRcm1UQVKng5C3ekbCkycUFAWTFM2Rf5dztpVzq9Kde",
  "key19": "4Xk78ZM3FQLg2d925YzKuCorS6rXQCUDc9Mv6iQJANyBE6JhXXDEmm3xQxh1XrDNeYEC8jgEVPZhuBgfxKKd7oaV",
  "key20": "5ourW3WKDcF8UnbV3erdVaihfGA5ACyuinZJycPzQqxjJzrGYcKARgELoD9amSaYn6SHvap1UQ45ivShXhTJE4pk",
  "key21": "4tLaLPHJfew5Ysqna5oNvr4vXpFNaunPxMkcdc8xQrvGFpSshHrcrGW3L8seQphqoWr3fWRAHCdtTMktSGs8sHTq",
  "key22": "2diFuEMnAtT7zBTNnGmnZzL2aKdmHkbYni8UWLA5hQW4AJfTnsEAGtoGbRTGJMT1s3cdNNNchC12CpnRqjPcMhkk",
  "key23": "4pXfsdVrcBtsAbaCy3wqgcU8MrZoX3EiDNxgs6XDzw2BwfbneCMZGVJT4GsM9ut1gC32GekZcKbQ1UEDbaM73ZaZ",
  "key24": "8T7aUwn1kvMaVoZgYapvvizi954aYHrFuZTPjk69c78PNmF2V6cmsHaFCLdfKs6StV1ebzna2CXpB2gmJ7FnEsR",
  "key25": "4ctE9k1xJEWViKzAqeVPhiHfNrKSNPVAes7sMWUfr4wWggpi2ZQhyk9bLwiXvxRAg4HDTmsAUpqNPWzSMDwgB6Tx",
  "key26": "2bpRyhx5Ygv9zceMNt56zVudXrstmcdL6dKFoyp7pqgJJEgUFxR4NSjtUNCcEwTg66Cid9r6d3G79CrsrQ9XLX3b",
  "key27": "2edQuUHtg27vd4opRw9nNNefJwAmUCLe2vUCyWHswDiiJdQtjSvurUQAdfJcqBgbSFcMUSbPuSFGLrtpNqH9r6b3",
  "key28": "3X8ZU8C5zNGMUg7Vz528GKAjdJu78KhM6cw5URVXMbsfE4NqMW6LkL7MdbrBCq3omXjanfcZZc541M3bAA6bDX2D"
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

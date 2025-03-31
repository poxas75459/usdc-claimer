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
    "4u9pd76NPdKjiVEfgfBp6P2fYwJEKHdKM3yGYBLn8tZHqwTkEf7dncWBR6uTg1tZK4MdjELmc6f3ULqXyy4Ejyfm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54YbAfGx8jUpkQEmivS926mReUUrRAcNgKYfpCFxtDpFmrh9XhM9Gz52VvSqoYwvubjfvh8DNkC4DucBTij2hBnN",
  "key1": "2yFyjy6UZh6pGp2NMisxPyhfQqnqL3Kc9opNssRoyqzynTE7M4W7Mdf6LqhhRkQjBFfCMVypJ44nfV3p7KfHc4b5",
  "key2": "27mpvrys7XnzLStXXd8dhNtU5ZiHp46NuiXEH5YMQJe2tNN9FkUXBmZUNqW1JwfXrKcbiBdp5p7pkDDgjrhPicaJ",
  "key3": "5Y2xq56GWbGPB6EvNFojpmirbZcdF29ehKhefq8SMWxENezSLRRMRGK3bQoLEMLtC9LBCyhXeGrFPJhrcNTSZj5N",
  "key4": "2iNxE1rLCkbMmPq9iSqqUk9ZPoqMT5KwJHVPbqawjxnC1hg19ZCq7VRcdLoyTV9v9TaJLFtVU2w14ACGW2V8UD3v",
  "key5": "5xV32sJWj9LBvrqweBa5MiEyuS41rnJZLWssPh9Mq95cSn4J2Tu31zkAyL68VfivAGUsdmENZWZwr88NufeakBto",
  "key6": "632HP2J9iy4yy2nF8hBYWDy2NysGkWDB7tReFeoEBzcdDZ7nArzwXtYPkAr3CAA1u9xjM5gzDib4NcCAux4NzRHM",
  "key7": "2Ts3rHWXvfWh8vztCqkDdwp1aUWCfWhutkpVYQZ5x26Xknq38dr8KgJVQEtr37HdNp1PgFhVAmENVZT5QD6n6nq6",
  "key8": "2CCEX16Ax1e3geLg8avfa4Y6KmHyKzWbnMPejoaLbFiE47rfgyMj2U37RF63yxyVhcWhFrgMuxL6G4ufLTPhVFbY",
  "key9": "4nctU6inPEH7DazrwGgtViCfEEC2uEmpLsbmyb673yJUtSUkCcjFcUt4at5yD7tZWmsCEPXLUfwxLhr4hntqWLhJ",
  "key10": "3ifUcd2j4wBwpLeoSdGwKYJwSeBYYRxuRRRRz9PUEmC1MnSzrdPbJhvxAaQzbh8GM6EAfpdm5L921Y5DDYYT4GTM",
  "key11": "jm19kKDU9hE4kh9KWLmaxoRv1k7DtqiaH4HfEPLn2yLVJnT2dZrofevnLZKRHwUcNZyhSE9LRnLqqLmcf4g5VpN",
  "key12": "3YZRMazHaJL5RnhWgxoYsfjZV3kCbUYjuUh99p1b3HiYGLr5AwpNyqzSDcDT8YMoL3jQYBB8nxcnbMWwaNhngB4e",
  "key13": "WwY1GByATWwAJu8bazPXpN7TnJ18SAiUD9qjfkRDMmZVhv3YVYMziPQEbepxYS2dtCZVMuswB1bkFc2xobADP3M",
  "key14": "scdts5QTWMRFydw78vkLvTEhcq89oqjXNaMbveuy9xapVuf1bXjcjbpDenJh69dzsYHhvrvRZEo75QmicYjXoQx",
  "key15": "5u3MwKpNCS7jM6GXpmAhiPJJoSo4twPCvSz1rDn3pQm9MBKAGVbACyXUvaKVbxnJfptx3tvxRuexGzHHVkEZGE89",
  "key16": "5dkphXtm3eBrGSNUHBBpAxFXzvb8bmCHTNJNhTpVx7jVLkmTEBeHHhAkgRNMMQwazU5diD44XPRJvkPaCjxSyvv7",
  "key17": "2PrNrnjhb3VNoRspasepEvAFU3i5ngCFqm3vSf1G86uqd9RRW3VjW1otyypvHCmpYm58JhKt6JRoxNnmR3wrsKL2",
  "key18": "3Ww1AE8eTunCRthmc1dXz9f9uUMVWDJ7umB4HTm9DftSTqFYTWp4ECSKNzPTzAuErgYAZBV4bKRCR3o3SRx3pf9Z",
  "key19": "yC237B8o4ryv4m7ujzMzTijjwK6DLUWu9V37JEXbBANHLx6DVSu7fA214MpKYA5JGatSMJMtVGpHvCDxa4CbKU5",
  "key20": "vR19spWDCHjFSWnJCaT5f1zjmUeNjoMyLFqSAGX2wTojaeEPfsB7kK1YjrcAHLfyfRnM2Lf8TP9edrTqNmdA4YX",
  "key21": "3LwVcPppPcYQAZVz5MXELoy5nYGySGzYYSAnpmE6DrPdXhGK8Nj31Cbvi6qwbUQKE3zmSKfq7j69bLdNeUyiSSo3",
  "key22": "vcQp3UfxmWGesvPxKtXcbACxntYe6aWeBKUodoe2ShcZET4ivdwrw6LKADeZ9HY78V8eFrRwwHERL7NUXxADN6r",
  "key23": "gXpTXjBbTxViyamSC9hwUWryHjj6Jgp27jRD4gi2xbLWzx7DjZJJXnu6RhTiqHbuZczENfECQw15Fszz5yHcUUe",
  "key24": "2ALqAJLpi4KybSLXdP7AGpTMbZwuxi1arcx5HGQn9ouxmA4Agt2KJeGdz7e5Qvq4f2Lsdd9efTzzymcWjARgXhWy",
  "key25": "3Mp3WDXJAh1iZtgu9bdM2prwCu3yoNgyAdccfivKhzN4WBoUDMYmzExMpYhoNzYCfLBoNKGuRW917zHjvQfta1sT",
  "key26": "2zc6qyNSNcuuTVyXC5aeF6ktJ7oJQSxKUXvfiFiDiKMhPsqhyr23VBbT1W6qLZcUuQvSFiC4iU4h5oAfAuR5h3qX"
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

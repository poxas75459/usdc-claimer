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
    "3ezVGqfW4Gs87DHFYoahrKPvcchbzovx9vPR2cTTaaj7CqPxXzbwKJJcrQ6CFwcxgq34EHQMH8tykAdRhf8QHAQ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZTncNHJrEnLp25JkSxVr9hrwUpFFYit5pfsrCxmbekhx5k2NjJwPTAQaa1UwS7uMdo5m5EvuRdndo4CxhbUpxVF",
  "key1": "MJGT7V7HcKSMjo9vKkKqgz3mvVUMRLg72Ts6qWafyxnjQ5K57fYENShHYQ5KnupumxLZDqASQhjDzGq94hN5kcm",
  "key2": "2N5wzhu9xiaKwqXcHo4aZx2envHaMGRVCmqMeRPEfZU1gPjciv2r4bRSmvsmzxaQ89aZ9P21UfrNs4pVChTohDBP",
  "key3": "27CXSikAzrMux7twge44aEBGkQyXjr8Gxn5MuZfYkApPvMYsiU63Lru6gmXoG1xAeD5iqTK1Gr7xZTtPK7oQTxd5",
  "key4": "37FBPyR8uWNdeKVXCSMrprXnQB2CnW6izquPAAxxSkxAhGkVskkFLXkp9kzNFsMrvW7nVeFKfk9K56CugC3xbbit",
  "key5": "3UuActrFxYuDshtq6DW18avPjLLVom1GjQFFSP6qHrD4VyBnQu4WYPVrEmjeMdBMHjFAvDUnijt8hqiVX9cicAkc",
  "key6": "4k2dwVDG7EvszHvBVhYo9XmKiQnfdkYPDNcLwmYVdYNjvmUkMPkzdQLAgx8rLebGCq2Rugnd4fP9S9Q96DBsr3j6",
  "key7": "2wdRmzJcYAjL8ymwkZWdZV9ew1Aw5Y647bR3fC9VJtDk2YmaATVnkumVUh5qE5otSjc5rV8bzM1vc6zVbeiYonaH",
  "key8": "46znF5nTCm1QBP2oTSWDiSibNKX9fZiYSWNQ57P6W8ufSr2cSrfmnsHpUjVaR7hrpve2Lo7RjWi6cuGrTuE7baTY",
  "key9": "2SFb3fwVAjL9byBpFeWYPju38Der7KWeHrtrR7Ah8oa76a9nsR6UjqDHXGqvDa8SNu9wkBUPfxpsGNFAUfnWRPyB",
  "key10": "58TwfnPyaiFmNXVSyjPL2FmQjKWxyTrv8JytjiR7DMJi5XaGwtpTPF645qUEV9u6EtXWZxUCnc9kmSYJ1pTkU61V",
  "key11": "4X8mXoPT5kbFP1rjoG62fHmRe5aNGtrUhbiz3NZnCtyGWqsav3JVktBCBzSJborYpnCJpLP3WGJCF76FciEzos3X",
  "key12": "4RMf6mmfQLAY3cU3MTKJseWefBeszwNcPuaikF7Ht4qNwTkrcWELca4HcFniYGJCdL3pCQhDHk2GgSktAD74pDeE",
  "key13": "5CqczoDzBwLitesfxbZ96MP4ysM3xsrn6Wx2Lt6xw6xSPzeQn9Mq4ccNuNA2Y9mu6YqjWuL49Nj9yTX5zY9XZ8TF",
  "key14": "3x4F9zBL83zKmXUrUBW3b7emKjsRqKpFMKURAy3gvvSMjNqWSjJoLKa7hakBJD3ubcvX3hZbt48679uUpAv4ucGd",
  "key15": "wsRyhdPVTP5sjcEantvAehuN3xxGGomeV3exhqXNNULeFGVokfMkiQWghLVoG9XbyGZVR1hwUnQpukMpg1AgEyc",
  "key16": "46RYG4So9ztsKiwFpKUkrjLWrrH7ieB8amBqLk2dZ8emLwk7XqP6bR6ruALkjRXpHxRD5VYnrCX5eDqWBT77ktM9",
  "key17": "3isYysj5YCwrMDJH34D6yEyfbtcTT5bD88hS6d1Da4FAUJN9fMDEsHfGaagjmHHpuyRxcyM8YuwwQoTkcVytjjLQ",
  "key18": "t3Ad824gS2UcdJ9sNToGh4Mgs6u2oNiKV5hQSyhjMJWLFtXAQqeATNuBJ2tZeFrcWcPHAZrsu1TKfmV3UoYaC2D",
  "key19": "4wHdRQDbwPHftoSpgystx6aZrfG4whzA5BhsJdfutLBeSFRxdaRUaybh3R4yQEmZ378XHh8jcqM56kQWswmnoqJM",
  "key20": "qtkdWCK8JUt1emSvWjJxuAUCwGaiTn65uMNg5eEXDfeYshFx9Vgsuoj8xjDFGYJCkcWhgb1W4yV76jaTVxg8UMt",
  "key21": "5JXRtyrNkacqoUivsx3QX43CbEuTkexmunzLNuAcJpB2b1fN42um6wGZAZiNwFnf6tDjDs1MELXkthnWYeffmfWF",
  "key22": "4nAUfDNFwbesNymYHbKbzLEGtAa69h11vvPXHKu5Y7PbAYojiuNVZjbE3fTQH1dWqN4woFQZJ1tt6u7h3LLFDnCp",
  "key23": "5dFM9dmcMPJCxzknL5xRxCUteYgNSJ8tvytJG8cqQLuLNY4mKbN5X65EzzniugnWrE3tHw2Sm6DaAR2mKJ36pYGh",
  "key24": "4FMw6oLaLRobMZLnHnrGHgfftCPFkZj1MGcZLTXXqGdRskRgSZSJRC6Ti8MFi8yNmHsEBoCbs8g2EekWg2e7Cx23"
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

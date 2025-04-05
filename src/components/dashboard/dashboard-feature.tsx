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
    "7nzfmrrJpp7hchuEjv8Ftf1HSYnopEtCP9nEEi46xxAYqJuLiVpDKiEGeeN2opujtWuWp47vSnVZEngD5fFKJuF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tuUgUPoQdNrhaHsWkfCu7io1Pq2Wfmabq3a6kMB1c53ihj8Qgb7MwoPxQWbsSJR1U8fLuF1t4ceVCkSSNdaNgNB",
  "key1": "3hg7tiV4mDkxG4ApbVViKgaj6ASANscGE1Z23aHppk2wzPop9ZW593gA31WMGTf82Hub3wvPzvLd6KxX2WvQkzZn",
  "key2": "1RBX1MMoSV5QN4fFyyoBhFwYJLMbeVRpbH8MgWTiWtr8FXNHboiMmpxTmg4MK6TBN5KzVVrZDWmPpyiKR5wUTD1",
  "key3": "3kSWkaw7Z7cvYj98ZspjywJBkm8qDh49YrG2Xxg8UXmDYm1JPAsb33jtFhPGAXDWHpjGQRa8MysNKeTvSfKWAkFk",
  "key4": "gWLMVgHxfcUrHLyEkDzVkgywZmGbdQmvf4iWtxn4LZ5MmaGxF65EzwVhu9CbdjHiqajPPUphYGvve3y2kTCfSV9",
  "key5": "4TNEDiLxGtcFhnppreUgnt1eiD64oqodEZK9CE2ostn6g9CEgckQwqtdDy8YJTTbZuXabRP25uEDcQkwcc77cpPs",
  "key6": "41W7UHmF1NAxD3dFV2MvA3rn5CAfNJXJ8stDTgdGZxRuEQkh5xjMCaa6J5PFosYDCcsieCFGRawL3db3ATRzj33a",
  "key7": "4haG5hi1cABxqueVF62aoJi6Wg1uvioUGMCh1fZSERzmRcKFtkQ532y6s1Fpra3EtCBjUfJ5uBSF58PKjqXq6mDv",
  "key8": "4NL7AEzKQcxTZiL87oNKTxeDwc1vK4b1Vs2RufCKuXHx8Y5rTKBTovk3h9yoZ1AUH63daTiTL8KtiR1WSP14YJsm",
  "key9": "3oDTUCN9hBzTd7uimss8hFXVVTBkraX376n9FraZD4UpsStmvwzLe8MEhFWw47Jseo48Cb5BCcFSgN4VH2vc45EM",
  "key10": "5RHnXkHM199WHk9CBFSYY1HKyQKhphC4E5j9tkQghiY8kU7USQMQee8nZ8ZzU1ABinEVcfAMVn5fB1DRqjkYzFtd",
  "key11": "mKgX1qQeoHwEc9rQTfANpSV1dUo9AfqqAnEpUks4HzXGxRPTiH3jUs5j5svhnxgPRKoev7o8b97SNR5K8G1ekAc",
  "key12": "4eGqVGGh1xbzQvTQf5kwEk4X6Wxjg5tqRF5bMfQJ9rMdf3ZHrkvBdZZExKsC3wAFUtFUjXkRihLCCdwjytxMXiW6",
  "key13": "3A6p41rPa7KrzHkUtrQzbBWDNoTDb6qzpKV4uoJtRorx8k4HvSXHn63Kxp2cDjky2PQUBDkUT7U8iSPEDvib8wyH",
  "key14": "HLiGhviciPY9GZpRpBmeZZ5qMkH18251VHzCX29G7dFntou591k4C3quvygnGz1cqVwsmmxLE6MqWEB6x9AV2Jq",
  "key15": "27zGrix71UXXZ97rsMj8jLnXocy734nASqmyurT7cpdWxk8UY4SiHAjBibkNRzTYfGhmsKasspqYxk5Lqmzrd9XU",
  "key16": "3dch2vyRhGPi4tLBeRgYFxV5DQXr7zKQutFo61EjWLgvH9pwDMSNwLvsRGGW2KZt3XTKJxPEgHzAYaTTNuz5NT46",
  "key17": "3mkpVmnDfSvtwAAryMoHjhwh9NFyF2sDJC2tD9vvoMye95EHzJZUZsdTPdXiherc9o489Chm9wJEUKEusx27fv6E",
  "key18": "64TpUQJZKStthUGNNgND1RZ5bhgFYPnQ58TrwkfQXsn9DDCBqEShSxJJTPjwAFjpoUQYk5y7XQncq4UbFhW3ginx",
  "key19": "5tYyhvrPfmbh5v4m768grBX7JDnTNKt3DULjNZ6f2VtskPyv5r6iSYYn1p7JPwEnMX48XueFSZMdzfSKvDr2qAg7",
  "key20": "2TA3QiG2SudoDS7RUNqu4zfFepWLooLbJiTGWwxTTnWq2Cmq5ykc5zZ9DnM2GXxB6fHf5pLbiSh9gwx16GSYEwPE",
  "key21": "4dtE5s3k9t4yiW1oBUMfoVgWWZosNis43yadyf3yrDUrvs2Li3Hff845krPqGtvXNuw5kVDXet5TH3Fu8knWaYgL",
  "key22": "2YxPH2iAVRbYDntpGCifjW3CFBkUtGgoMyJdoaCCd3Tyh9Vst8WnSSnT8vfursNJqum7Af2ixzwsdWETptGtjZKq",
  "key23": "5KLRTZrAdYjf5PEq1gCfsanFmYDWEKgGfXszWnh2pKiCJouNHMimBfXfprDxQhXuhe8TjstkZxM25VPBaDaxvsHM",
  "key24": "2J5Re9niv58aVTg7isjCHNNQ8Qo3RGo4oqvYaaZ2NAH8MaMaoskKDB7cSXcbgA6sWo2HKk2jtsRLiVJCBoqhBGNn",
  "key25": "TLRNKBWAeHic6LGc5zEc9BhTzjqZLi2R1zk7J1UsXNnGzexUPu78hGrFpe4RmX7YyKMFua5WFCCi95KK61de3sz",
  "key26": "2fBzGEXEWUF31vJUJcKV962jn71f7orQXcWqVECVFbYNYyqaGs1DBeoowXConLFBFCYUSahnx8s1FAxzBgGjszHR",
  "key27": "3vkkmopCmCp8eF9e2zRZzg7o1pr1RVabSuckE6653dJEc42G6FNJ6gJqCaVK7jFPbLLq9CqY7n1aAXjqbaUbpfk6",
  "key28": "2KpjsDeJt4Fogo3f97A4rboeAWaejvwoYqmw9r7mbuHZteGxHx3tBKxa9sYKC1M6JEZ4kjQrsjybUAQ9p8zAPCq9"
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

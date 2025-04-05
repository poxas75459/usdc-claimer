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
    "npneHiLdPP5qRBcQWBRqoCJXKEVtotcSfgJrB8UVsx4W9fKBtqzUG9eGmeN1kGbihzqvR6zTh5rFFw8zxpvyB5a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UX7rGjbMxEL91ytQLsgPi4LLp4a78koErDVzhBmT7oc48nDsnKYMnwryHSHFYMzCuPiZa1ppu1Lc6w9ZFsKa6Yp",
  "key1": "ucDzojaJiFqQcHzXhAJnrz1nHqxiBybEKPXX65XJaFfN3y3xssaXfDPjffBUyjxSyeGxu6cd1WxmnDmHLtNwkoc",
  "key2": "3J9uXvCFrTyzjFc98UD6owWTiRP6J7W43WULvNogLCC9dHjz8bFK9hKSgefYFF2fgYe4yWLAVQwnah1MSsXdUjFH",
  "key3": "2EjRZW8xbocXMEx61KA9oyavrjpDKqgW86j9vNsmpnzu5KYxnGvHCRwy7LcFDqwyXDN3Z9pQnXbw9oykYTYSEg1V",
  "key4": "s4UTKZuLru2mBh6ukFJbWN6gKXhEaN3pvFJLq7n6wSb5Z7fC2zQXeL8prpBLKHNi1pxxHs8z2V3QuEz9yvddexP",
  "key5": "2JF3nrX3LNATM9tCgxaGoEGGAk3vRFHmFXjrQLo4kFPAgFPZF7p3hAPLKFxyfQXp4FFfnmxKoX2LySSzsF8YckqN",
  "key6": "3jPnL4hZdNsUeX29FiFxZBDrpU7AaJjJSetJ45eGkH7KngpZyxAKWYyDyTsqs6Wa6Sn659sLaabLNJYAZNpXsJ2p",
  "key7": "24Q236bBiee9jRTAba8SJRGBZ72nzTCDLGcZwhUkddkyeHGuyLDN6XUfgD26V1EbnJ4grVnL7w14GWfkAF5XG4DH",
  "key8": "22jXLwraDGoaqJpwCz677WGenTBAnr1eLmbfAzDurXsk2PFww1JXPYULgM2BvfcbFumiCxZvFzs9ugNrNkoHN5PF",
  "key9": "4vYNUPmgt3meMFoyWNKstndFGARoDT3z8ZJfqwoPtNmVHzjyCVt4nhpwP1CbzSbtDE6rkZsbh6cpDaUZGjCbk2uk",
  "key10": "2r5vnF2bryca1X1U4SdtnG1ki5mhNYskdiFCa2AVbj9n4Am84wHDhXdZp3FwNxQa6AMzrRhTQc5fJ2W63r22A8Zv",
  "key11": "2CVyftGykkuCXev6sAHXzbk4XP6BFXkCmPK5jMqsmYspUhU5bPXKyGWqMWpEiVbeH9na9fCEnw4t12VtiHg6sP9Q",
  "key12": "4j4j3JWiFCjCP9eL5t9Yh8NAvqBrXxKkRxTPC9FKa99cvfvU74N1GwU8afBotZ4613BC5ToM7z7LK489ep5B5Bqm",
  "key13": "5DkLaK5dqiASKAtH7Upa9eBPRDu12C2ARJZNAd4hyHLog1Xo1U5k9kdo9ssi5Abp8J1e3fTDUYFvfY4Nhj67xQqu",
  "key14": "2Xeap8RL1j9JyfXvUQTpH4nGH9b7TJrsr67EagPheMHy5ZQs1xUvWCjvvoHUtV1T1VjmzHFFyv34fEQgP42PVTKd",
  "key15": "K4k1zEmx5v8ZH99N87Wsd168wQY7617SLykr6DfArjdVwvhj8jbpdAPAWJXV7RSJVodNBp6Ncgzv2bBjbzo9XHp",
  "key16": "2bH5JJ7sjtPyd24xeMkAaXBAqp8KhjCESLqYpgwjy22xh17qkLvG1DUSMyKyPszYzRmM58KTyEEiCQYP4CSiyiUT",
  "key17": "5RfDoBxPpeczyyQWXjxs5vzxSv9wj58PFtqdwwkhYiVBozVHJHB1qJPFhuTJNM9CEgXbcbHpumyqwat1FBgdcMXm",
  "key18": "4qHBXWJxbak2mLBTdzpPiD2QwdZKEhBK5v1H3j6Cf22RgnKSRMb7RXkeiahDzfKBr8rKFoCwdq2hUkXh3v6Panhz",
  "key19": "5dCAZgy8YuwEjm9aQtWYLZq1gkLLSbGU6JCFAcnNR4hpMRAc5YXZbEynQ1pAghGbNiKcpRjCKcir2GGGtMpLjbjH",
  "key20": "3MrbYpaJzQSPdynJ62ZmpDbEMDyZAGuyYVYoKeJJpona9ehJB2QfeLwtp3twNw5z7JhLxf8bqbByPxnDUVbr2JM5",
  "key21": "43TRSqeuJ8s6LvLBzteBpRx1YExYLxc1m3cAVNyE8ycnrsXCviGQGFyatybe5tjXUYLMdTuHeLLKtEdmY8J5Qzy8",
  "key22": "5DuGevNgtojtTnzAEp2gffp7DhAWGPkQQiLvEXNBDq9QqhjzKpsCQgvL7jQRsXt6Qe1PJzve3pWGW1WBhcp9rfs8",
  "key23": "4D5HAJE5Hc1ae2k89nYpsHuf5fCFNtVVBdm93dVJpKGHXRMSS1NVHCxaXdMqGYqMdMxu16YbvcaeBmCqtCzCQryb",
  "key24": "C585m65K69XsgmTgKsvTKkc3T58fqMFaH8jEd7GP2UyQ7mnbZFiZvdXZj1zCz93TxGviktpFEoXePuykmjPtCfw",
  "key25": "27Wtafn31fqAswHfFrXe8SSN3JNprmo3jNi3fYm37KfPWjTsd8HTesYfJYQXtAx5TNsRxCcTgiKCsygJJZ4hPjx8",
  "key26": "378bco4wrq9bf2reCAZAEzZJQGQeLxusEwPnvqvLJ1QxrVxrJjFZmAvmmn1AwDvVrFsQMGZNEiHM57YicbyYuHUr",
  "key27": "PRQp7U95BRYiCEThLQtdEA49iCMAkpNePNSrWiMUA4yYf5c4euEAkKJLzQLY2rV6dFJQZ7ovkuRSgoECfhY6chU",
  "key28": "5fVxnfKSta2ReVCxfx5B2xnZgeJQsrRRdCmoPL65nz2vqPAb4PTmUKUFcKjxzfQbr9pS9eyxqjKFNrde4zujKyPE",
  "key29": "3NcTBNSBffNvqM2o2CL3amx2bXfYqKBtMibEhEmrFvPqyrHT3Qeqce9JYawwEWmpDv5NwNz9cBj6ZWqqaBFEKTPn",
  "key30": "5Aiy2qLj5zJgR1DSHxTZhZGp75HMXWiDdZwLUp67F8gZktTjLWEc2o5s1DTbwf6F8ArQtHk61fRKcbddmtnyzpDm",
  "key31": "3gAXHeL4upVgPAzFh26TJZaLu2S4f2roKv2z6r1RuqevsDiY2pPYdr8BYDvgt9q47o4TRBd8XkXAnzA769vx1n8C",
  "key32": "3cC5xdhqp3qurjKpngqwsK5bMdxi1rZUms9rT9e7M8CobmXBtEhcQVBK2Ace2ndGfZ3PndVEqREAxE1XY7RFZvH1",
  "key33": "2adCEtYxBGb4VAAeMVHRr8Bm3t6ZJTA24EviX91ibSuSan6TAVhUMxTrjcE83qcRU8Mn2sGC9WJ6p1CFQaAcUY5K"
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

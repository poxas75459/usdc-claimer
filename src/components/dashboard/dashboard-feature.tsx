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
    "2pkSJRZHeFi2J4yJyzfX5EZSGqGsFGWFhVkQSdJLigvvJDDyXq9GZzQdPuFyt2eVxk9HEkAoaK2eD53xPn1Rs7oQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MStN5jzKJP38SVatxoKffoQRA5f6iqfRj5BvpnEz94eTh62oBcrEPz7wG2xEVGHihoZnsqD5APBiw97VDg8ZBbH",
  "key1": "JXKrgvvbhnd9yTY4fG8bWTJx3yKAv7q7jEPXd3F1KhpKZArVHXDLDx4L7w7dZTdzpqVsZ9VuFHxkQRAjPJLTUfE",
  "key2": "HFaczFAEUswmwpyygVdHiSAs4nz6bJBNFhJwq4ucfRyDXRAbsvQJsjMiHiSS1ECUk5YL74MbmF1pJiBYp4pXsDg",
  "key3": "H6VE46CnhUGD8ABUZhdsA3YcEEwUT8KfSfL93ZC8wneszAaZ3XApKpX4bnTsMyqbf8t7KUQgCrCQjmDzzCQEQuF",
  "key4": "2X24JfHxf8GYp9nZsMg5Z6pT8fKCHbxSHnKgbexQ4tZmT5jYihqWF8kQAopu4a8LbTze1XCp9VHkRTvHf6NG32gE",
  "key5": "2eJ5nYgwxh76LuLG7w7UEMpYkCXwQF2xbfzMm8Eru26ZQyEzSR9ttAEgW3zt8Vcqs57FRka7SVE2mhUrQVQHZBfF",
  "key6": "4LLEvgf9VN7oahepS7XvASKQ6rimoWpuLPrTB5P3D3iHzPX1iD6Dv7p5wu5sfjzb1iAuZF4JmHyzNwWfUmfDLWre",
  "key7": "5B7kfK8fsWWqwxZzkYQQ7gHatuQvy4pjsgBZ6RDqaydQhEQxLMwGn74CToRNZGetaEShCwFfc1gkfQWhNsMdjHBM",
  "key8": "4YcJ45F3ftPyCvyqnAovCPDvw76CQqmN8wZ7y9JEyvCg8aKnPg8ERVp6WbhzyFxeuvqPD6qPPfMHNQSy4r7sdxkW",
  "key9": "2HGsELnUMpnKRGzQxkwJeZgC4iaic2w2BHa97RwydPnepsJ6WWLTUhs1uXZVXdWCG3T296iQnjW3JabLYSS9QqGz",
  "key10": "3hbR9GjXPsaLedBySWBjXb2vnYtQ9ckprPQgsUhYY8US6dziNLQyHLyn5FTTTPh5kpr2RKfcJxere2UeEzS28uxq",
  "key11": "427LPNfru6DRBBeo34gAeMroT3dK3aLBCjoiNzmgSM6XnD231AGkwy5ta3KigEoeedkykEd2szKUh3ACGkvZDow4",
  "key12": "4Brv5WjCnU7pNNmrKaGf1sc13yzSw9xweAdvf37cusPmP51hpk8NgsvqV37JnNZmbcQwFHZzvGCcwTkEyMf4cTMb",
  "key13": "5hwdNRLdSaMKaU1YBCYyqpM3gEfCxkyUovUJEbjZbuChbnAdrsw5qTfNHxvH8MgmwXYaHseBDEoBXYu5dayFiR49",
  "key14": "5hiFhkrma69KJsdTPA9Nf3u5BXGjwxLQpS5scyyCJ6xqqGUCLPsVv1qAmusiUsfrTWC61p4jS6FenD8MuXmjCVBd",
  "key15": "64ixqV6URyuHBYvdeYn4yh1mDuHAobRkEfGUhdBDc7hoc95bzDs9NZf1K2Vb65Vm5u4ezaEFh3dmpsHsLJemD2bo",
  "key16": "2eXqiw7d3xvawbRNqz42y3WxLVxPQxDsVD4yQYcFakoax1YCy8a8ywMRjjHiD8gjiwTgBoiHwdX3Vpt1CZtFC5CL",
  "key17": "2GwWAZi2HW8Supu5MSTtVpxoV411iU1roKNfjoQ2xFLRQrbS4DvUy718WvAYp5GjAUaiWCvhHhv84aR6dexcrgX4",
  "key18": "26a5exZn8ijA7NhYxdFwPhfMCAX3PKyjr36SasR61KkngzASwnbSNpm3Grtaat4VdD9jK3vnq16Mp9aT6t2vf3Z3",
  "key19": "2c1XCQSowCr4VTNHu4ihYCi7xfDrUfNecDf4KcRQ4WejbXh2cVhtBvsTXNkaJpRorp7cqshH4pXRW47F23KkNwWr",
  "key20": "5Bi6nXdddqanQFzu5ZEpDoE5A9xxqfhq4w4W6ijWjkUhky47mVcqdthS6SMYm9tRem98AabhmQSraeugQpTCTRA5",
  "key21": "2JQfKxyPom2zkSxReUeCjycnyevKPRjLD97hUNd3wMjZmtcBjJaKJifaeYuAk116AeLvURSeuHkTVQSpZNeBhfPG",
  "key22": "34PBnFz7smfh5HTnFgb9wQik2fSrna3cEHVAWACbw88CWYYoSCMnZG7nC9SipCTzECTfPoSpmbu1VfzSPYMf2X6U",
  "key23": "2rvDT7ComraZZMBstHnmS3dkf9WGdXELx43KZgt1ovn4HNGCtNHymFrEt4oev4pjMtXEZmqpR6T7bwYTenibJRZi",
  "key24": "2nDnFzqdEhBFYC8pdcEjFgS7kNkiEZf3wpeGPhLaA1bEa8kGgERKX9Djz57WLCqyhXDtpraRtW5j3vxV6mMSpQue",
  "key25": "2RF7V6swHmwgVr4hL5p26d32DPykaQQefEWBsDnh8w1vkAUkx9dGSECpHM4JXS9htPm39E9roQ64ZCrHspNWu7gW",
  "key26": "QTHcVt6YzAf6ypFQxgTvf9SpN1DRAQ7hQ8xbYxcWirZJr6uS56JM8q6d33qA6BDai5Uiy65guUdbyTBW3rCAsEa",
  "key27": "4gnSvrbtftNjkAd1EdjhKaibHnFdKaEyopzhHU1whtT19ghY2s9j7w4KpJpZ4kiFiFCXj5tprswSu9FTWMhutiP8",
  "key28": "5xFS78iU5sWWFgzZodeMADFJCcWerfPRs8jPcJuLA9WdhCEMtSiR94zD1FGLhETceUC542bFjLGkNzTmWyXYrcrD",
  "key29": "255oGMwuHkuBo9PZpm8JjX1rdsQAkT74zBAyv5RQKCRYg9cJQq2JyRefAmic16KAMDM1X44ULgwUTQNoKAbnisXa",
  "key30": "5dEzpKKVzL5aJRqWKsigyAJELxhNdvmTbHeFUBCADWcoLQkLf3fb7sTZq9CC5AKPkuuBBEtWxs3AMhYEArJyjCTa",
  "key31": "5iTjyc6kU6eoCjypSn38xQF3XRJtt9ZNA3TbUZM6HcWSDSjq67w8KNnH9EoD75kDeF7u5SGjWB49JwFJDqCDd4ar",
  "key32": "5NLe3xhwDR37mCFNsg6zd4xDo1bwYyYQidp1ys3sw1LPRashkY2wjpEgsZ7vpDK26Hg6ZtQQXdMi8roahgaPCcqv",
  "key33": "5AW7TK4Nwx3yK3K1xLqFRo8idBBfzgnZS2ehCp6dGGboxA3huQkVmqtmW8uMx7uSxWQQf92WTT7aFqFqiDDUGfC5",
  "key34": "5b8kM99M9P4W8NhW69S6bSUUReJxB68tEov1pQFUbbgGgcZM67jBmGZrbm7YR6Ud9T2rq9kFWmM9Jna9FFNV54tK",
  "key35": "3khJhuKcArMqiyyd2A2kbXKboXNnDcE8rFTwKmgH7ZqzUPkzHAyj8SzxGpRbeSUXu5gRpvgt686qpjWgpTQr9Vrq",
  "key36": "2expwDmuD2m4hu5b5bMmqZnsFE54ss48kWRKqjL6VXg8voj8AE6uihR531ftTfbXzLzEQ2ZFsyAxVi8ebSAFapqh",
  "key37": "5HUaxuHKRpUA7jcUYLmMgt2SxX9DnLLmKdt7UYXE8b81ggBKfibAjv5qbavJvo9TRB8av3iddrWixDdasxocyNKe",
  "key38": "5YYV3AbsqG8hGVKrV79uTGSwJAnze1TsiLo2QDUGUvZpYXUUNCCQY1rL5eBe11Ue2X68HRQFBAmgAHSbYSU4xDUF",
  "key39": "2cXsRYi1gwXCdChTmYNpvNiQFLARY4NmzZ8Tqf7f18ro3rfQipbeNiqbrfUCrtPbeTt5kijpAU51BoEvDk8dXXn5",
  "key40": "5EZxGc1t1mXSYTVAAwWZcLo62148NZVeFsNs3y84pBtmWLzsCnagnVKZaz7SmsWK9yqMbtFzJp8ALtcTrDNMZ75N",
  "key41": "2XgRa79ZZ1Vo1tXNzF2JttEHAdpS82iw9ctk7nUYpkqWrPRMvT2k5jGDPN9uwR6zW87nj1ux2JMjU1JeahYLgSZW",
  "key42": "3RLjh7oWNXqNhMe55ZbjAtcLpR1fzNHcrrjxYgDM1eejhyPWaqSfZ6dd7paWECZL3KaqWE41YKSjU95XW2p4cmx6",
  "key43": "46GpkU3qPMhZWzer7BTWHkNjmrLVnm9RiBntGq6hm3V2FwV46zxhTgkr6qHoR1MuxvSwDEoKo4EEMyNwE7dCNWWf",
  "key44": "3SoXZsTafr3XiayXXsqi9DPhJ5WNn6hUZ8n31bf8FJCdezEiK13Ck3VsoRdkp6RTuq7ySQM7orYbN46waDr3AxmL",
  "key45": "5WenjB2REtgmonL3Cq11WM3cDkwpXU185q7zPxCTLWUSkHGbLJKjaEjFmiPvZ5YWEkwHejLC7RJRiBP3xNs9Lt8j"
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

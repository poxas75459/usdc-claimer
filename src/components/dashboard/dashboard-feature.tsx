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
    "66sArH1avphFe32PSQngSNxdagJVZjD3ULEuCG8cdxMcjNtvC29GeCviEdFBwscWfN7Mwx9EptuvovGXd69VPBUj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47vjq8ZQPs5RPGRHx3yB3BK1FieyjBbysYF65TvoZ8GmUfQesBoUqfhxC7JDkN2hny1feEUSbzqNFe5RvU8gPUco",
  "key1": "2D5cak97aichHoaDvCDGvANgwijkLaFTvAECtJ3zwRohPBcj6M5YfVsQ1nFjbnNLfak8sutGVADhNZJykLSgzE72",
  "key2": "2xDM1Lcod4cF4n78EfPzYHdNLB4wvASpJUGicoC8n1dkoCMAU3LhVokrVWPfaYVzEF72bV1qvhHUxKMwAsbP9qDQ",
  "key3": "3mBRd9b3DULf9Ziokrz7DQqU7mwKQFTpt233KwQHSo5G16muxTNWVvmV4dC9GNHCGqAav29EqGB18QkTgEmefmKd",
  "key4": "4ErdNUn8wRLnYKUwt7cJyWvfKa8tnfkqDwx9sk2HHpNm51BaaqYT8GZjYXrJZSxSB1EmANzNU2SUDPmWdvi2nKVe",
  "key5": "YiD9WVFJK1uv6sEcZaayRNQMsfWz2md84v1ZMNJAC3zpf6VyqyLe3tQKBqHiHPkuSz9XssBjFtvdiDa6x3cRDwJ",
  "key6": "2DwZq9SpVWbBa2eYivHL15LHQn2NFFfR9JBvMwVrwRH4hoFFfFx2DixpLhUvc4Q3J6eczzUpxZXhLFgyMyQZu9Zv",
  "key7": "5ir7HndYCiwJ3EBGD8SGTuuSvrvEpAnGysFba85MSK4Jb8oNNLk5jVmjMerJHY327vcdiYHruwXWGFUyG4MZJxud",
  "key8": "2nsYXYNHnn5UadmS9wnScKi2A6MiAkiRWR8bF3hS7EPDytsHrrqkmsFLjM89ZdamXJd4EHhSJoXpsyempHo5LB38",
  "key9": "5Kpstp8wYN7d3YYPEoDwbMydRFtTPzCd5jTT6e8FzQZ2QAr3M5joM9fWNpr8SZp5FtRVwWQXAdwWDJ8EoZdMuemJ",
  "key10": "4PsvDKEueoHcVvNKR9TjxtH3nTBmbUw4uwKKBk4RNzriPJa5J37Vt1TNvzVk8bYDh2gmPePvzhKw6DNcUJ36p8sW",
  "key11": "5bEskbvUELQjTwxipcqStsyPrTA76GtrgQVaoLrjsPYc4US5tWsmUUbg5PS5VjhYUKvRoEw7QHGFjaAoU7SUFQoM",
  "key12": "3vUXkJnfxU1BrK5HGSbRYmzWQND44h2svSjNBdYMfL7VkMnrXxbWNL3KxbZoMY4hoebATWshvmkowFQoWNwG5bhH",
  "key13": "SXsvMQsAnN7cxchHXnhhqs8ojNipgmzotX2qnLa3eAJEDtTJy3vpXXwmhwan1iqjqC7yR9P5mDgA5tanCaGtMxi",
  "key14": "4ibAq5LtTprkfcJUhd9WSRijZzUVcK3ihuEn9FbLYLbvjrJYq6mAofHuCHNcjb4cxeNXFFBvg7K9GRiJUU9YqzeT",
  "key15": "26iNdhti6CmiFH4ZJ4MWu88hrdmWkfkBAwQJX1JvpGwpU9zhUxKc1jTUfwXr6RrCsbozxkZ8mjH6ys4XD2q9KH1n",
  "key16": "5avmAYwTkv8qYSXNg4F8Pnheps5FcfCmP2nNkufmJUGCUwvZTQLuxR53Mr5srZMBygkumkJd2atwVG9kVgEtFwnX",
  "key17": "3BbMohX52qVyTEVdtPSqS422FhiZuMXb233hxTW9N8g3Nc1MQUoNwQRFf4ZmDth9ktgRLyCcjnmfzU27a6rWk27g",
  "key18": "nVmM3oXe4mQffqdD8qurchNLJoQzDmS5CCe8DxDbkxU8bz4CKd9nSKDGfxwb5VdMU7ymU9LvYX4MoQwapZoAdaH",
  "key19": "KznT3xqmSD5hxFUpdet8ao7YQsHxYcuKsyA1driqCnandjPVx6GoGx5ooe9QsAywyU5LvBEstVhWzK91UdMvJcg",
  "key20": "3mhsDu1fu89y3BMbBBfKFkvHdscUPk6SeBewZCudciWz7vg3h7F7eyqa5LUMdoZqkx2J4wHzT5uuFfjZVeuPGLmD",
  "key21": "52sysSraMhRneH9iPB657KPDbd9GxSCpidC8BhMrd2Br9ymCn81gv1mnUt3V2TAAKBWZot3wyHov2fTpvQH4UncB",
  "key22": "U3QRCQHNpyg9fZgBX7q41yLEBAuVorZmytpdkBWmcBpLA5Dh3ZuFp7bwcBWDRmoGYVq7BBSsZyKHKZn1NtPfD4m",
  "key23": "2D1c2pacmnMhdWwcmZJs9PQSbfTXYXmhpsuZTLtcGHPggGnccDp7AsGNxmtyZRbsyLYzy9DLqL78TLj3npR39Kw",
  "key24": "4b4UK8A2BJT8Cyh3ysaCg71nonn7aZkY3Agv8zNSRbhRveqayfifpDu9sEC8ofpYq3sEqCwGuEhsUgBpuiNpvTN4",
  "key25": "2Z8NhP7i7T5ACm6tEsa4F8WFy4PTQmb5kbZycvkoJ7LsshLkNZNZ93ymhayzVWpxVQraeK8DWKWrfVfo1DtDsQ6h",
  "key26": "4RUrj6ZriRo9HqhjbfCiC1LcGkM1EmQ85iUJFsEmXtDfrbwbBYp3Ng3EN93qme4U6G827gLw9VthgMut58AeXX5g",
  "key27": "4Fi3nMyFFnMPs6omvAZdaZb7B9jWbCzwiGXueMaGWq9nTQZg31v82C1j5oYaSfXJAeRQXgCqzAdTYxxeBT847YV8",
  "key28": "nThkgB5GKSQpbsQbizbZSpEsUE8mvaX7rbbiuxzHVDNm4UrN9REc91un9RC88WZX41LaQfqvKvg82mhmZDoHDvg",
  "key29": "5ZjCfEpHNx4rQ1tfwxfPnVJkctDLXfFhM5QQG6nc7FpPkV1YDE881bRQ8PSZ3xm4NEYEHDKoEANkd1x45q92jn9m"
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

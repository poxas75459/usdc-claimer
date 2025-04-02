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
    "3aaZzRviuFhrWc4jd3u7eGQtJbRUuAc2p9tT6kFwGn7yjmBnCyCERTwWGkf8EPwLu81hYn6m8PDzqqZtfjuWV1hh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kiLRTwD98SKAMkSRM19LEWgVMK8DknjeDEDxfZ2oLmt3SYUsa221DBSAuiZDzPJi1inAKagxdHG8VJLRqCh4TTa",
  "key1": "2DJLcPRA19iWNwXJu4jSMFzCUMtMArDXwDMQt657DbJaHbHPKtpTpVVLSrG67KbEyxgV6Zr293CUeJFLm7fc1tuo",
  "key2": "2BDRFxAhADtCk23ZUCwnmPBNodEpuMKR4yC4bfJbnhjXZcRjuWjNmEVZeWQZAHG96UbTkHmGBus3XsnSTCJbRjRT",
  "key3": "2mNsETHrY6HWQrsCWKJoggS6hqfhaD4dmx1ipuVt62LbXmfb3i9MRVaDNj9ZFutRAQnYdnHxLR4TNDyenACwYKA5",
  "key4": "hRh9kBS1wSvXa82YSYPPC4VpFMpqpgVcRWwiRteXBVagS6nbg2BLAxvSJ5YhPeMW3WGoFoJ8dKhJUCAhATeH76K",
  "key5": "2NmSDRwu1Raj6rtckGoLYgAENMQbdNrHZfnNPDhjGh6ufVCXMnZjUEy1XW9FTDP8PF312hBNvKY6hSQR8mEuXJju",
  "key6": "2j5L4bw69bnW4EnAGYrhHEymMgiXuKwowxAfP47twZYBV7y5mN6jBybEqJEx4YMoC8JbGpLPvBd5C6QSY4PMTBDC",
  "key7": "npvNHGj8fgdEi287HkTHdbA6CYHTKfcaYXHgTwXWgdjBGDZBHKSLiSJ7aDVxaAe1K2MXYCkdac2o28UGakgqku7",
  "key8": "5Hd8KH7TzfkqSHx2s4fnNZzGLUgq813vPKwWXU1v1kQfyFw11VnWQdV5Cyw55ihmPoyCw4bQ5ck233MTGLW5JMGH",
  "key9": "HcaSsyBEWXnJg3poyi2diezxbnnRPRL4v7jqbXPzpmhD1fXcvX5asmMtfhXrmcKp7CwYUJkxNLFrHsvuGkCvweq",
  "key10": "5UpgSS8qeqLWxv8zc6Su1goqXcpTRpNGw8AyjBw4WRbh5Ym53ihaU4b9iFFiNTMc9vgAqeKGsfYGJSYefpu7Q4Z2",
  "key11": "4x5CCDi1ep566Go3Fm9257qdFHwRc8yLjSMgRYdWMzjph8jtXLJasMovw7oX5z2MMzPsQyJ6AHyxDXFe8UD2pF62",
  "key12": "bWhZHUVYzbBWek1t1T6QZq66Kxu4qem6mT3MH2FhYLhgr8KySvGWzcAhQfkbWxjCa9zCGgYuqNgFTCNzQozppo1",
  "key13": "nLd9KtEJ4YjJwXgRW2ikxzC8RBFPWEBtkbkpHb4Urj6p93kKMAw1gkTb5uWmop84kfhTMvrB2ec7BLqx4gJaPZ1",
  "key14": "4Xjh8W5EAyNbtsctuPTuaa84kosJ81D6o98LAng6gEnQ9jE4CKX6ceefi6VE7nsRrE98eg5zWsQBkjtfYVWTmV1k",
  "key15": "34VcpDp6frvJfDzdnZveZHCbdFDcQMF37GYuzAuUusjkBxujthZsoJgp5uUoSeqyD296khsk3HfynTJfxXDr9Y3E",
  "key16": "5dJaXWgVzn6a4a4ADiAMYx9HJmtn93HWB96GNbfNkcm5oDGRSikh427PFqDN31nhNQ1z1ooEnW2wS4ooNXKL6jC4",
  "key17": "32a2fdwHXyHgCDNw5uYb7KXpVSoXcSfybPTxKu6NnVowCv9p6K8b5xTav6igyJY2it7Jdg8YbMGF5iUiTKGybpD1",
  "key18": "2snvk5zPvFUPy8FNo2o5ytMJnVeXtWTCXJ2C5o3yyQ7g6gU3TonsSFdZp5fQE1ak9Y9RFkHvTncRTduoZ1WZ79K3",
  "key19": "58EjKQSYXaj2cKTeEvXqhafmFAWYvxw12HZ5hTZhkduoqrDqkdiQgUMkkWFAFV9uNHWd6jPGp5ak9HezpZYwiPxP",
  "key20": "3AmCSahScUZdh2fDz5jgpzrxDSpk5XoQN4ogVUzEsHCyuxgKi2zY3mTUtdiEFni7pcUsjYnX68UKhs8eHdvEhXVp",
  "key21": "3hVhtx2eQmcomN29Vkb9mbUnRu5Bi7g51kNAkfEfFgCADSLpqyLgiNCbqFSf8BVrsgV7tMjtSqWryb3LTAxvH1Aw",
  "key22": "4cagSqVoihLaftXK9jb5YbELBfbVf83Bhuz6R3AM3HhEFsFsxiUWbkBRLK6eYysvKMMWJ9o8bvFcYVSAk3dzNsF2",
  "key23": "2HtcWnrFr6byk2hLBw5ZPEFcMZcUE1MerY6kmDXTC4LxzDwjUQM1T8EwhnD4vCLTpeaaF21sjaK6Kx4Pst5s52ok",
  "key24": "3U3iwVofsApnGewWcrHQq9m5BPEsx5wBGuwRV1HoLST57bgG1L38cZwqiAeKBsAsozhaGhRzo5yMm3avLM78AKAK",
  "key25": "36C5Te3MuckUDHutbQ93g7zhaBnZZFeTBAXddmUpfjJiwcWwjTqWBo2oJ6JzhvjykzWXEcfogCiSXuC1o8KC9TmX",
  "key26": "5jUApjoo3BWsQxZR12NMZYPUNpKwVVqbbJCa7xHNf48CGsky2ud6e6rYVKxReR1rJNWEkWkpyfqe4BiMguyMK7MH",
  "key27": "4NqNyLVvrBvhr2TMoQoAustjDHdEqCU1ogXgXQ226743EZ2MNF9fsiEq35xKvEveFVGdC7NTY8E3SW4BhGT3gVkn",
  "key28": "32WrbaWQZBoSr9miVKBGpzA5qhzpnTev4FVpvRsVdDQXqyvpKbo7eiZfHHYdhQQNdHuggyPYEy4QiNHuXWaeGUst",
  "key29": "2UZ71AifWFGJeWUAu5vkSNRgKaxRVPJMgiBF5xHwQgGZMKW5peAtkEMvLhkk32CXvKQcJ2pgnX6RwNZpJTjr5AiF",
  "key30": "5v2hZynVsyCngRyWMMwi1LwBfZksvQPXueQLDx1xL3TmboYL7VfGWQL2894dyXAQ9ERij1reXY3MWtgTrMFWR7BP",
  "key31": "54YhZ2hFqd6r7s1taLXRf6FcfjN974nLqPAxseepym5irJFQ4HgUjK1RiMfepv7eNdzPVNWBGjXxc4FSDcMV9uUD",
  "key32": "4ZK2GAPpeCxyUyKFDRTCf1Jw8dXLQR4LtsbP1Xrr1AbA84KvNRx8HVHhFhy91HQb7LwVWiET554PcEKJ6NEcY9tZ",
  "key33": "3LWvaFMy945Q5hrK2jhRrwbQYQKvTTpEv1MTTa2iAx7gUvuQBfp591EHRMpKjoKBSGRPc16kZE3K8phybZQddKb",
  "key34": "3tK3GmX9cj931WFur9CFmMMnuWTX294tmDwfxteCY51yCS4pUMFp1nnF4bQzUoknxkgDdinqeLk96KgV9ZncpebR",
  "key35": "5DB1SM8fGy4VoUhaPBhpxGie1sA6gXWCYhBQxsto1pqT3VRTmf6PyeaTusUfj21Ef6uienzJLGy2hwpkXcgtH4pA",
  "key36": "2UUouXPhx5QMFDBNMfNErjwSkK6x8Qi98KZppE4LnKLhFsWd8BGMzYQ1AqmHRDAAj2SLP9AusD7TqGaf7pt6PQKo",
  "key37": "2Q6oogLqHHWjJfyxQWcwoCny4u6g96RwUmQG4NJN5J5NGaLgPKGG5H9SqV9MbTb5sK3XyFKC4BPHbEAhHXWrkqYC",
  "key38": "3NNcN8Ri5Nrmf4CfdBw5w4Nz2TuzMuZTAXwMEAEGZjM5dhToe1kWaS2i5xr3fWPRdLgG7dE6bEw9CcFu9TaXnoyx",
  "key39": "2Qu6TPwzSySjHk2jmCmh6TEKQgCke9bK54sTGQyoXUP15P1Tds9voDWraJpLVNygPwFRUgtCmgwsCqfs3rbZJn9y",
  "key40": "3vA5PSyBiKrvvULJzyaxcgCJQQHqkjKQPvZeRbbno1afGWmA8BC6LptVjT5tBsatEVRk2w6GDLfYuQV5uSYtTUxY",
  "key41": "3qPSRXBrc7kPKrEYB7mh4GHSv3qyEAULzMXSi2JTJgmGExw1ksWD3JXTgTitw7hrL1rh6AK4mVp4Ni832MwBHzqZ",
  "key42": "37b63jcPLWqgy1HUHNor1yT7gNSXhoipsXJvJwZzjrHWoS8quMWn5KpmZKAcm4Nu8UiHLQwDvaxmvQ5qJLfdNzYy",
  "key43": "3ZZBYU7Y5TnQcFtRUrNaMNwgobTLqpbGVg1peiSogJQAUjm2PAec4WfDuBtxMb8rPDtubiYQkzzoskx7VNonkheG"
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

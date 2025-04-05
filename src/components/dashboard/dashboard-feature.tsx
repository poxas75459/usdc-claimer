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
    "2S79yyFvugrrJW7npTHd3aoXZM6CP3BghSJf5qnppei4UB3ryxgMVFCrQX412uiYtBGShmYyd6823xT1TkFS3Kgp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QyncaDCVgckDWY1FFWs1Xd1H7UARaeCebHPyKfB1ecLeo4DRyxzM1VHuhbWhAZG8XAWyATM9gWrK6ckS5CYe7dv",
  "key1": "2jtHyUxkFeSnWYnfB8Rp2qZ41SEqgi7Av6sYSqZEXBjrCu9iqw5FBbJuJLQwBzTTHmTfaEM9AFdein2DkuEuMmxX",
  "key2": "25DfhYctLtCRDe2ZLxKw9DcrxUsYEUcpmGjjbgJPc6UMGS9cxY7hqgc2QBpZrqLGtZBvgY58G23Pruhpv3zf1q4P",
  "key3": "3KjBZUvb7qYJpiSkpZ8YTcCtz5Z4ddVuu2CvZ4B1vqDQHdKdV6UrwPEWFXQAjSaVDUEpbK3a2w2dGh98MfedURZU",
  "key4": "5gTvczh5w3ZLV3sVrYsAyajpRTrT6tJVnJszJJgnAgDYKtwYbNN17sn2L6JttrHHSZ6P1skCFxWe8dnB7GfMsfiR",
  "key5": "3PwaBYgd5sYsKjLKPScRh6MrkKYXRifit96wPduQ6YNv8GGerHAsy2vxpCWfa3jgL53eSGdPp9RYtiByJVHtr8A9",
  "key6": "2MjN9ZZx51ZNXg1Zr4TVRtqB3Lnfj7gKVFYUd2JhDvRJCgmX4WTbpmHQkBsV1HQMh3ADbpqwymEM5joWWNprcT4c",
  "key7": "Qk5s6RnPQHXNPFgkUKMhyDmPNkKkh6RH9LKdE81EC2B8NVBVpqzkrdVhLN4sUDPe6KhpVScVs4UvriQ5eBMk6xP",
  "key8": "4sj5Aapwnp8XzaRb9oETeg1yqMCRFfxYUsFrByDTVswTYcpBQbpk8T2BacZ9dTpQ4A6KphgYNW1QF89pAnF1h2hz",
  "key9": "4HDKo1cS8ae35SKa8dgR8qgxkBGfU1V7BkoSVGWssYuePHam69jKqQ6AnEczM8t1wGkfDaaBcUCVPM1PimVKbBq",
  "key10": "2ti2B7U8vUoZhhHtQ3Jo4u1vkfS7qMVYkyTYt7NkBbDqHzmgxd5ddva5rKcf22hFPCXpQuLdBVmDbho9rfdoX2sX",
  "key11": "2D3fohS1hG3XjszMGW7trxcgeC94vvr23Nb1h3TMY9UKeqdUnbxdG5RusntCX78UApZhHyD1CWCVaijaYi3r9zw8",
  "key12": "4SH3uHGvzsYgRdzY2qCw6a1tNNsf73mBkqij6CehyVKzN6gP8xmokNH9qiQxrc34Ng9RakpWXNuhgkdB5kWUaE7y",
  "key13": "2s2jyqBt8qS7Tr1j75h3kGEdJxuR5tGZGH7LxFDddvvnVJryGQWMbrPKb83beu8eTUEzqG1rLpwbK2TS164gc9sY",
  "key14": "5vGkm9QoaKgUFviR8jBHUB1FmnfMUgpfr1WmMKav6jryiBEVBNBffVPKKBw2MAjQsMN4rpd8GEMaLHxRnfLQFrhN",
  "key15": "qD56caCqWMs78woAsiHHC9o2gMwUxN67wf4sbQJwu3iH9d8H2trCY7W48EukJ9s7pbA9Sy7K86hjn4VKZmNJAh2",
  "key16": "5sbzseG4kD4AFp2WZhbVnjAFLBm3d5AxTu4PCMbHwh3ui7LPjHAbSPVxjTQJt3yPYLnKZECu7Z19EdzHFKopCM3b",
  "key17": "62iuiGhq6y6i2HtGTQxrg3VAN79Ddvb6t6u5RrsmuNA8KsH6JdWDGgbW3iQTLbC21phHftX5enqCxU98zcUFE9uA",
  "key18": "3VxEsWmZkb8QEKszwfYzSKWKFAL5zsVx5uwdqu49hVHumXERTY9ukL8UjqBMMzXfvjCXMBDcuHztwPe7DyVzqMob",
  "key19": "4JuDNKAMEmaGiVgznHCeRbtQDmJDd8DvoFkr6Kh3zfPS7xuUSFnQTHrMb9LgQfN9xtCRLQhrQCHLjvnheY7senJ4",
  "key20": "4dqJfKWEf6JerN7jrBhiyGTF25BfghW7xBSNYMvEWYALp3As3FLH6aBRXU5zozmBcX2Emw4EWNEfZRqahjZUNNzD",
  "key21": "5zki7q1nqA3PUYEcsPtY3KbTmb2eWQH7uqTdnZ5ftt5mm89r9ep8oHj7qDM9GhYp3yn24KQRUeLXqSNqRv1476K4",
  "key22": "3zXtpG7FAEqcqjGRgiSuYGENwtvm8C9SAg5crL76iBdymGjo7vXBLp44K2zp8NL17e8DxYhFWSwCRr1ZYYh6e19b",
  "key23": "Z6pxq1kiGGjxG7sm4H6DmDubePpmFSYHzQF6rXe2ANLEDJrj5pDyo4X1ihLPGxjVeSeQXM5UMfaRToDhkHZwFgX",
  "key24": "2k9ycA3DZCARYUHqVzKeRyJb2GH4gidBxi2BuuLxtoB1YVhU67uAC7UfbapFgs3DSufHBMyoJUv2sUcGkAyLwJoD",
  "key25": "3mD2xFPMsXvNeGDMkuovbjBxuM2rmm85Usg5fEro62RMX1geE63DZx7T5ZNh8ryEK3pxba9FZWhUob5qznHZWsAw",
  "key26": "5p2kKAAWpuyvniuWXhHkFCXD1uhTPjUus9Cv6yb68X25sPw21edXBZqGnKHXVs7AK37jYjh6zA7g6eAX3G77o1jj",
  "key27": "5HRRXbD2u3xeA1e9RAQ9yTrj4smQoHrd2JjyAkRoWqjmii8RuAqvLEka7h8gPsW9YLuXohdyZV9RZR1Vx8GDVcqG",
  "key28": "5JvBJu91PA2bVhsgEgz76KczAQu1qph6pvPtiDNyAMNnKgNE8akeMqYYTdmA4C3TWB5sgM5KGrL2WUSFiu5vpBCM",
  "key29": "97BM27eCAmmnx36wz7GLjNhECaZvaBdhsBXk6KK38VbJHkLxAp1Ek3MSthBeyh5dUaRh9CSfH7nu6Rr4Cm8nGvA",
  "key30": "4Utd5TZRYfzYrhmgyYSBHkNgAeKY2uTvzQ4fkU3sWqUun39MkXYTxSLDK2CAS8j6SWJ3c77EDfCUvdqv3DaoBGBp",
  "key31": "2MySHPAAvE8mP72NjXew9pmH2xqVd5hz5SP8JexEs6YgWCNqwEBGifpjf142gW24v2CAjCCfbLRcoepCGRW7LXYV",
  "key32": "FQ5aRxMTazNQsaSzqHfsafx2YkFXYLF2CDTPc59h55qwkq72w5K35qcdMp2phBbzCiyjw9y1WG58fF7gU5QQfDh",
  "key33": "5k4UQkCjdzPiRdqWSuPSehihDPqGM3WnYp42QH2jqWrTKU9oG9i583cZyphZWbUGN2r5fABeogFj9f9xgabUzVaU",
  "key34": "2EYhvyBADnWKJpg9ZtFQVAHQQyYHJ1ZDM8ESCXhUFLrvJGRkiHQMac2F5fsm47mFUhvUg92t982YUePMMtAwzNE1",
  "key35": "4pD7gTUuZ69wK1rwKNidPsyopy1o33E6DXB1JMryjzwDRNbb7zsMmhmH2Y5y1WHsKNG9xYm1ySVq5E2ieHuVR9s3",
  "key36": "2Cgr4348QgySVUS5hsE42jZEmWvm5LyfWH1xY3xuy27G7uLxisbGhhEhj4Mmyr3HGERes7H1oMHNfEoFCVba3LHB",
  "key37": "y89isPXps9Y7HGEKKE2Ncjv9RKh5Xz2AniB1RPy6BKooRrYpRmS5HhS1sEb1FE8S2d7MNdvYpGmXuYq1q2xoU3o",
  "key38": "5uVe9vu6FooL2cy5JNrdRfssrycyjse19fdDDTQaZw2UUZ4RdCqQ7GKmF2BBkRAac9pJb64MbwQ5vR3MyQZJRLVm",
  "key39": "5eerJdgQ1b2Lwcos2p61Uy8FkAKrrhrwWfEuPyDjwDbZrWuECFfHGiHimuVVeYTCDMqsvqw6UHMjBwJ15WXSjrTo",
  "key40": "5uVH7sJe52zDPtwCjm8E9rDdW5VybHKAjzSHk5SYmTB72MW52vAfR9EmffBk47Gq2tL8iXCiUZjDN5APdY3aLAwx",
  "key41": "2QAddkSPVK1L7AdP5hLNarDLgqNxeiYktnDuJDiNU6H3UvzE6a733jmwH2YQwYxQ2wq5zwCM98TNEvD5kHB7HhAc",
  "key42": "3ojHTT5ipCb4jpviFdVQ7usk1EAc5jLgVZ7va7m7ZhX7vkrpJzockWumomLKUFJ136H4zbymkFT1JrNS1PSyiLZK",
  "key43": "2wcqCEPXUCyrYvVvYnqLN4kHyP7kxkTSZGQzu6WK4ZA4Wzi9FDD8DN2kQnEScKX6d5jeuBv3PXRytN5xaK4uZ6Kq",
  "key44": "4hhw3LiQyLRDxNKL69k46WMZdRRxU7sQdGpXuQnKyPApyEsteSCSs6hbmXCeM2nMeMaXnQt3SJZFwH4CaBEKWkQz",
  "key45": "5ncnkBZXKTA9nWUUJjtmdremFraJ9HJt8sNSrznHVgFFLXxTcThFFJEMdxF4SrArFao5TqbHx2F7PW96BqpLvVoE"
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

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
    "3H5vbcpczbi5NoQaf1P3KaTQiMnKKW47nr9YraqNVTo9agFBEAuCDzDxVGu6w5GZ4L5mZBVnaPQ6AmUhgsW4DNm4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BnVdBaADHKHqfVrii5oQmQG1WALdMivW2zioQpHbG47eHxAfm2m48mWaVa97BUYrNjUucj4aueGGkMzGqoQqbCu",
  "key1": "4vmVuMKEAXvAb371ZRe4cFgYrgPVDi2vZF9aytZJvkWuy9xT9QCD5WQyanrJEHWZMXMcY8nGCyFZf3fXbai8SJjf",
  "key2": "3ET2stFS1GYBepT4funu4jG1NgeEdmtzAZuFPfPsFYQGG7VyyNLXC7AprmKUYznyj997S7Te27RSnb2qJib51yVY",
  "key3": "2Ucy4RVhayahXJUR4WATgBkAv4fmMUGuKnoK6fwwfYpKEhUWYkwmysxhjQbAVbf42MyvW3b8DEEqizgEEnzkHWev",
  "key4": "58MTU5ADioYSLWW8XmR8m8SwDQerH8h6ZXHyX3PzfWsvtz52LZvqtTzC4uHN8T3YCj33oDYjq5MMfGDSazRARFv",
  "key5": "53E9b1CHiqU8yTwXsDJxnQvDvR69Fs78rHfDQjsn5fppNBJjXg89afkCRhHGpiuUygh3xQ3pJ8Q1XV4amCXBh96y",
  "key6": "4fAVVEWwTmCe4kJWUQFJwL6ZAE1mwFCcibMCX3JLcsi8GfqyApDMoSKNqnQYvugrnFfrLDWyVQzgUX5rQMzrLo4w",
  "key7": "5VZf9Nxd5Gw9a23LQycMrUamkXnNboLTmYwMyCR5TfuYYkjSLioYGATfNRGSjg5qBYAZ9jG7hHX2Xo2PpD3yHXEa",
  "key8": "LwtfWpY3qiHBvi76vj773tEBNQQhc79Ni49uhbxigBQ7JBvepXx9tXXbenezbNXtSD5cvrwBfEF13W3mpeUdZgA",
  "key9": "3cxHbcpHi7n1x6YgrfHGjcFwZFQMXKt4aEwbm4kF7SXuTZgP1P5UsNkR2CU9CS7CZFJcUUDfXsqbvQhY7sjaCaQA",
  "key10": "5EgLtwA7G6sUhZTBHYGTQz6sx2YhepSJs3aJMgNyTippQgmut9Tvqv9PxDQSczmieXcq2Lsg7T5dgQ7FMTxznXFd",
  "key11": "3tMUieFoFcJ4AHpMaAcAQpWJgLP8mtCSa7X8pk37xan7nNWW5wYRpvT6KT12DhgkV93wKWvCpffcagU7C9HEHPyT",
  "key12": "5ZxnVvTh6xpxz5AsBhJ9KCZdgUB8ErXTYUzDQSh9UmNast3Ub3N3JEUi6SXnUwC6rAnkunH3RiijZPv2zG4XYcfq",
  "key13": "4LsNLjoAqdZLZBQQgpsgTZMV49YsZS5YjbxdTUdyk5MGQmGYcUMDCXojntwY4tBDPRUJzh1n31i1btZKB35zt2XL",
  "key14": "2EKLXuqkhAvZ38V4BDugVffjwaTMZkG3ct5yfsAQK8e7ofnvhdtX89Jakg9C4WJMicJ4RpgH8mCZbpJFTA4UJTYV",
  "key15": "2WBTXntTXaY1PS475beZ8PzVmCtvPX88GASvak8kY8Tjx53F8YjAx6Sd5QZnGVJQxeN1LqmfTtiXPKqq3KZPn4cj",
  "key16": "8wv639LPUG83nGbqXGv3gJiPXLPr4ua7PkZ6ffz7UVxBV9PbfWjDUgK25QNmUNpj9e8EZqj4zwVABeXLit5UqCv",
  "key17": "4VV48mwVgTRpuPbCnjNpTGfkUbhLFVHJEJ1hibCmtcpzLZSLtJtub793RMXRgxoYskJ4e1o1xcp2K3vhYWS3rLgG",
  "key18": "3iot6fM7iBe6AHiFajgug58J2DYiLLbKapnh7GshEENL8m36WBtDaXC4wRNigujEEbG4iPhPQWLz7P4BFH8w1z4K",
  "key19": "5fQstF2oawx7nK5Pm6t6PctstDwrVkxFJe9NHrJLRwVq5w1nQ9vojBYYfytMQE33h5o9j4hQX39vxrydhs6zqKYy",
  "key20": "22xKdVnaWijgbz956evKKxP8oE3CrStu4FmPrt1GsvBtfjAwueQgkmudUuEk1QLyv93Fp3wX3BzJagfMMSGMb2P4",
  "key21": "rbzND6bEw3vhTVugmGfAjf8288GHHRXwnmtH3pEwvPgKvM3va314qvephxMS4qtEXVBGhEA6LfLoMt4X7XjPcdA",
  "key22": "4ALSq9GNyXNBwePw5U7oVySu7zvLCkMv6Jo8yf56mThdxjesWKjKG2DZrSzuFji3BgBypfJV8Yov4pUaChvHrMts",
  "key23": "33a9ppvvDVP8NemnNqur6S1oJqxsKhyDReUKVQ8Cxe3ieHZfnix3NXm9jr2vuyd1jVPvZT1XzeHnjSAqmSBvMRmd",
  "key24": "2AY85o9n6hFqZmArRSL9vKP7dak3JT17ZUSGR4n8BWfrcHgLb5xpTBaRAY7bX6Mth1zbNF6hDS9XaKqvrmKuCTDN",
  "key25": "2F2PHyAcWsaAWEFeNrw3k8yDo8cGbLuz5EoegFfyjZPDxegK7GzrCEVXy1PGE4s8bYUt2jC5PFdsMr2DmYrkS23G",
  "key26": "4DbsCxhRr935s22vkNHDWFnZ1Sa57dqVHpf7vsuPFReFgsag7NdXvATKofqcN8hDsXhLsaYWXzA7dDZ6UMvdrD8C",
  "key27": "472G4ajZoBaFLpUXE3mrx26crptUf5YtPQrhYpfm7RMVfhnSjMd4Nq7Kht5E33XBAQbAHzgqXzQeEeY1hJWBFBUe",
  "key28": "AQsMMReAxoEwsEqS4VjpyaD5foSfrt5reUtKAhfAuoZa9vMsZ1AssXNNFrxpu9T9Y2bLos9ESujMJXgoJjZFVTP",
  "key29": "3JhEagmZQoij6C6wGZ921KMFw2ow3eVs1N77A5oNThPDQ93Q196arhhQ2nQ9anygTu2JXiZKnRgzae1N8Ax1qwMU",
  "key30": "36grQwaFrVpM1D2a1chmBrC6utxh1tG1Wn5BhPz8oXQ2H871boTBqNLghCav687pbt2UVDkgUEVywC9C1Ro16Fp6",
  "key31": "49nzJucrHLGa4BevHzW9ZTJ1Nwkmp7SgutDNxdQkJ8gCJH58JPM9zN5BbR1HzuWXw7P7j48rYjDFzuFZd1jgjonW",
  "key32": "3aFBgnvZJ8YuPqNsskGfDFnTY3ko1o7VnyBFp3k1sazKkZaYqLmkULuFdXgqmKfvC5buFc3xgBuTtMz1FBHsSivt",
  "key33": "38nm7qvaYV2ckoxqrTon9ShikymfDqyp3FXKjyM7SGroqLgNRSt3dTSNRjND8uYQ4kXcz3ciH1x1jZ9SXcoL3SrX",
  "key34": "4R6JREVGoTcPPqb7QmTivadkqXHLESPmQr1HXCSCHj19Unmmks6agFqxeueW1s5JSMTFMuXwUe4DacEtLmePngeB",
  "key35": "2b4BEPnfADAKPq9XENpfQWQh9u7VhXQTnS77jubMkaVhg78RfU2LtXHFzqK74wULSvjJKdapz3erMAohWM5DSfqr",
  "key36": "3Chgt1sdhm3xxNpsJ3ZFHtQdaea6ANApGKpRDBXdvZTc5Lv3D3VsGuCLDxvzFXvFRsx87jrnvS4YeMtnPUxfT7Gj",
  "key37": "4RiFi1YweSWMcYCEYb9Fp5FddbxmNoeRJbjsZppfPMP9xeAcsdHgnzsq9My4ZKQq2wTZa4VUmwByTb1mCPF6BNnz",
  "key38": "3SKHBbgmpV6K41M1xMpn3eR1oPqyaRvm11z4Mnw8wWAahGcYfvkCd2YGLr25QSquW8CZT8QTu43GXiBTcNygYuwr",
  "key39": "3nRjkq5mrd37gYFdba115nG37UvD6s8V5fQDZyWN6BRK9gv3zSD4LiLQj9NBKEoAckRHVumkxc42VM7sbsZCxkTU",
  "key40": "2YAk4Th1B1xaHjEZ89F7SPpJLJfBcZkqS6ujAZ1DCJbSb7ZYconnqHVgfL78dx7aJK5Gcf9JCDCkMaYW2kQph9sU",
  "key41": "2MEC4pVWoxumdHwvCNvETGaEX9ysg9ZvMbJ9L6rNDpDjmgbEECsHLSbv9Z96yY3g8oTChjBhHdgm5Lh4bfTgQCZD",
  "key42": "3bqcNqyNasfHfVv23mWx2fuQgrecr8tPc66PXcMf5TeyY6bjCq4QwY2PWLQEQpEK8nCHcySqzs5YTPi9UARRNw4b",
  "key43": "2zasXbNwLpnAHZrX8TNrMy2PZL9U2afm34kxqtsQzggurMsvq3s9A6t5LEZvnV2wfW2xcEkBL2o8bEC5cVfnG7A4",
  "key44": "aT9rtB7SsQPXREieYHQxAMBXZhVs1Ecm8557fdM5BHPepfBcS6UBwdRkN6YEf3aMp1b2Dz5CJh48VsidNDze8iR",
  "key45": "2C7KfPfD7hcxAPRSVwF7KiWtUmr4FsHpkJmUxVx8595aund9yYvHgkYycGEo6wNkxW4QgMWCJTqzK624a4uq3KoH",
  "key46": "4b1mmFbUhTpgZ2GNsY1BgxQD4naxe7rQWgDaPz4xsJs9xxRFqxzSCMUaPKniMaLoxRXpbgcZbHWvA6qJQJgxGmm4"
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

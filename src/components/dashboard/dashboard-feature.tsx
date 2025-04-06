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
    "YwuiGRXingvY5mL8z7n49kduxFVamkyCKoW8g1qW9zFgpfwesNVB9W6x7r8ZbgwxRnmrZ3xvzPRsHY3ou9GD1NS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JsdZKxMJTF4LHNEN2MifgZKFBLoBZ6RvHwL3NbwF42hjD2CGszPNYdxEnau2KVUoMFUtmGYE8AkZWkPrieaPewc",
  "key1": "49wHagN2Lj1k4NfuPUizaJ4hkd2EBziMsi8xA1KfXJuE2W2RbvoVsvBDmXp8k8s4ErV5sDYQqYsguyZguY7Xk2Ty",
  "key2": "3k8e64XQ5fa1imnUiTPxDkDKFPgRXiqeys1CzjiPTsQFXxDPyk5HoqF4RWHUXBxTrPNHCcCAkyE6nQijA64Mqovr",
  "key3": "5GW44B3mstL7RJtJzpDWv5bfZnh6nKZPwkHtZYEqhghXJPpy3g91hwiJSKX6Mqu3bmCU3M4NeXh5D86DrG3Ux7Xf",
  "key4": "2MwRPdouHTK9yxFM1SYtm32aNQgMz8PQdo52BPh2PjYMTpP1Nw5c3UGU9LUXFMru8uy3Tfbc9X6yxmfYXMFtaeE",
  "key5": "4VmqhygSxLiKxuK5Fd8qHHQ1idVfwYUEpZRVbDU2o9z8maG4wbpFFSjssjeRWy4t7YD2UythSgicHHg6QCBcm7ZX",
  "key6": "5LwwB6TLWoYN1VH7KjkqrVVwB3KsTiHchpXkT6LnFM69FieqrtN1HDw4r2woxHFqKiL3zT2rKx9bwJV215xWLzMB",
  "key7": "ahsR1KYUNmmouw8Mv1uXHVwXT2zsGtasUU9fhNQQRiFiQTfTSZZcvjWBkzCFpjh8yxNi118wKc7Zo5bvs54rkrm",
  "key8": "nATnSPuDBhTbqwa3TNKskgRwMFq3XzZqBkz5Nb3sCZfSDoy8qW7sqCQ3M4W7VWwd9SKgsaQUHea1voNSwo2pBw1",
  "key9": "4hypPKdZadDpW79H6JQJsHnSYML6qMPLzN3a5Utgs42GHXkeuMg5L1Fbm9udefXUEpn7viHQNx4hJ8eDW8LGfZNK",
  "key10": "2nZoq9nSmhCbRoPxiEX6F9HjNvPry1spwrQoRsnF2BVvWjJaoNEsbvZAqsts43ewCgK317YzwQcHmABBb9Xgxqap",
  "key11": "2trhtZ3eB1pFV2PkMT8iyYDvfevAu3HgpQn2VhBt7v4ABtUBULUAiJj4mEdSiVrurqJXcWT2jrxVf4Hw9AaS16TY",
  "key12": "4TgNDCcK3JCB9Fc1Giq5cbJShvHx3sedaLLTqwEcpvXvFTrSRcxcBSqUAZpzouRp8K7bHNFaXyTfRXBS25FUMfh",
  "key13": "4KbGE27gr2ZaTPzss1fZY8quEUqTdke4w6A56F7mkEx53Euex2nhUrRRBK15vgQEnSpNJZgCrDVdMpEoSMFaewaA",
  "key14": "3bJ5vyxh3P21BCNT7A1tAdJNhG1RUAkVDNk42DZ4CQp9NMEdebqY2sGhPXoBSU2LiW7FGEyUKwsKJB6aWaxwanLK",
  "key15": "U6XnWviSr3iWiZcwonTjv7XQoUTiqKMv5bH5wncY2oho6m2xg9mwcHuNUSG8NMz6gSD3mPCyv3Dy71stzHGGS8h",
  "key16": "2aL9uouCYVSjVzKcVPg5KJGDxRAXoeEz9z3ed56wP5DU2ciHga3yqN6mj14FzPz2ijJCLaYiVmP2NrqfY2gxA3t5",
  "key17": "53X2Cq89KuGzLetMotKbv3SpoShftYtRmeHaA5uBXF1FxLNL23UauAZ3xuu9rgHeK8SnHKyQ5HyzJE1Xrxhe9KVj",
  "key18": "3QAdV8hryCRUX8qCxBkVVHAT5krcmDEric1RL3g1AGBq94WGXmvtpe6MWmW5U844HMsUYRuVHuftXE4NnszU8QCq",
  "key19": "36L2fDNLauzH3xQeXpYfCRmsaL6K8hpcKN8DFPvwFoM9YdNm1WRzf2o5MvzoZdWRZvqHTVjU6V4FpdBVFTjgTZEH",
  "key20": "3AuXiDstt4HbRnnH7HtST46o5qMarMQCj6evcCkKVTyuajGh3ZPMWLCccqb81YNAxooEXWDMwPQS4pkSQ669QENk",
  "key21": "2sno9LfiHKTYmeNbeGySwm3kCYPxyAx2VVNLwGSjan6SV4uuf9aFJG2TgQy2b9cYAHGwitd1o9QRAnXrk7a9HUZB",
  "key22": "5YtHw77DmCvkQyd983bRTc59XKTocnipkoRuL5oGYo3HdFY2vgqQZeKf2ruDXGzA5xFnEiMSjVeXfoLA3pbRgTjA",
  "key23": "5TUsE2cBZqZAqabFQYXuc384jhh3SPReQqcFwXfn2pQUhE1mEjS8JGUy2HwnSYVpAtg2Yziv1Z6djCUo8fFyipRc",
  "key24": "35V6ARyffJNnNuFHrCzXk3uD9osds71uVFUoD4mXHy1oKrXVtm9h7tMfTXcwpdh1AZk2CaLAu4VB8T4LbpE1L8pL",
  "key25": "5LR5QHbnd3NzbmjD1GPckyjFUUt5r771CcTi7d1pTFPkUTnSNZyoM1aJ5GDASYM4m2HYu9xubLu7t5kSfDiUvdre",
  "key26": "nJoyxV62VBZQGgW9rcLFivBiFqVQw5pQPYZnZWSK5sma4zRhV6aqf8C78XBpKqndC9XLx9EiioWMs6FpWMTyaDc",
  "key27": "4Z3qjxpHashqxxpszWqMmkQt9uiNvc2y8CNSrq9jS6rquaAXKfBz3cR64tZgxoUzecQ6wzkQu8Mr9cQpx2pJoBKx",
  "key28": "43oSeNMXSD5HfSojyYDCnkbBNdFyZkyF9Q8USqc2dzn1h1rAwzZD4ywtEWRrdGzEw1wR1or8zQzPqd1tE7kNetmk",
  "key29": "5eghtLKFxfC7xrpQzysymtigVLk1NFDP42sMjhMJs2bM5Rw2MwTybz3iKxULTA6LnCmjLXkDsb5sgcMPNdPnQQUx",
  "key30": "z6NvMjwjLeNhADANwAuqcgVr6GCqLV5ji5CpJd9JY7T1WBcmomJbFXyTPKvazp3ymfkAE86Dezso21385pZfuZu",
  "key31": "3fcBRMSBhiMe186mpeWCTpze4h2JMxj5aM2pDVQdpraz4DEFx7xsaFEiSeWpJcHnTm2X9PbJa8JRCcZ9RAN18bkz",
  "key32": "4Uggq7wR7tkNuJcqcMdoKFwg17YKg6YBGYjqbGuTQTYBcGCC8Bx14x2hvkuiDyXB1dFwvFPC1gQkgkNWAC7UwuTY",
  "key33": "ActbapMweEymAQKv5H8Ez8PQXXjYW2oR8cB1ER9ztjVf7Ntx8ZWvcMKfwm6wkyvN1WRAczpyw4nSFfZsGNBdZ2x",
  "key34": "3Ppq5F6x1mYfBid9uUAJ8jLi8udpk3GE7NUNtYJmfQ5QxwvGw9k9SYJPnUrYxRSnC3C9JrtYhLM3zUcXwiPTxWrK",
  "key35": "3JCAT7gJeBDink4yKcgAqJBU2mtiHBvqjME8psq7yTCzAvfFT5GkX5Q3vmeC63HGAzB7JrUDLHBvotaji9ez5Jhv",
  "key36": "5HXFUurw1JQE3FTtNYN6WDkm3SafHFkKRihQcdkYksDq9BGXmU7Za998dvFhx7FYDcZaTwd3aPkD4giZRWFJpALN",
  "key37": "nWxxxcr6oShroy258yscTLXyP3ybqkdujAFpU7LR2uVL55hwyjNEcxskXxauJRx6aS9y5ibHCqTszD1Z4zYzesE",
  "key38": "3SRaw69GhMgY4yGkbFDbLqRGTggFMHEzXchyoGKqSHC8pwoWuxkoXR7VLu3xYrTdGUYxGE9K9XnDcoSj3FhqBmML",
  "key39": "2xgJefuYiAriKddzVzuzHEMULQPJBYKpSPneQUBtNEgQ5fPnzrrZwh11BrARkcatAPU56iT1WW9UVsFvFSrMoV1d",
  "key40": "4v2ET58g6d39QwZVAcNEuMA5rUJnAAWs1j4AG8wCcwkwZDcdvVuTJxzBKeYYVsWUyN7QgpoS6Uetoqt1CbHeaGJm",
  "key41": "32XKiQRKm73TgEeL2WNh3o1sKkuW8yndoJ4Dz4MfssGHtndKeosu8dqkeQhWvew4dZpmuzz19CTdDD8utDkRP4tJ",
  "key42": "32M9tjjNcB79KUgyLCAiDiuYEhEwFcFCgqp2BS7WFMqHUBvXdxD7VCi3qSw19L2gjEw9AzA2epwJhFpxqbJnR55Y",
  "key43": "5dXeZYNkACpaAJgkz5gAxwSSANVLBqryfCR1RmT61khVPpeEU1tgAVfHvA8n1dHTPicmiRSEC5YoiZy6J76aTf49",
  "key44": "KVX1wfc8p4uWY9VXPgSC15L8Ub2RK5csPQSCuoCET8hMjgGgJGoVKwKCLLkrFfYqjfJ3k8ZjFTbngAG3tQ3jHwA"
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

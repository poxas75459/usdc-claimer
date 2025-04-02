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
    "3UiwTdx4VYVMDmNvdumAjCEKR6pRNQNVKtSVG1GTHpN3duvPc9zrnu4ghvR3cHgU9NS1hpzYsL5FMCgVD3XSsgY7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ewBPtVJsqKm6ZrNdwqihJ74XSRkDY9hW4YUm2bNaT6bND3XkkaeyW5HfHUGSGoJ1btgwQxtSHKS9G1GtCZT9Qir",
  "key1": "35nsTGNfdJKTSdrdGueLUd7eDANfnocqxurezWsEp45k1xr16mwKAsQ82qVjYwXMd43UP8g1uTekbhP46yiUm61b",
  "key2": "5R5j7XR4ZpqRdyd1U4jb2YimCDWF2Bs6ZCftLZUfDEYvpQJBW2srLaYZLC4XNbXm8q4LufvBxyrrifKRyph1ym3A",
  "key3": "3zZvn5ftEmvhsdixVfBCvaoVkAGWLgACPcf9MUHNhrfiv5Bbp4NimZnj2vxkkimsn1hR1DxAmVFTzuWJmi49ftXu",
  "key4": "2MH77Br4CJVHHGapi5xz9DNMdr7D17HJzK9jNgqz591HTcBc5hs5dLK6SruK9xL8RiuQtRtJE7MhqZDDN9pf9zgi",
  "key5": "3kHKQY9fMiuYyjmVzGoopbAuVZkF8yvBwTKuU3jAJKPxjBEtecZrt7cedC4CkicrhpCNdshQF52cqKbctJ4wMAyX",
  "key6": "5VPxaodNh1j95zCJkvFnXh85BZ4jEMTuHz39MWk57NQJ1m8W77hg9vjoCUR8mHrvc7AccUCsjWyDvCFeaUfVccJL",
  "key7": "3zMVBx1FhPRzoVZ2PyJx3FHw7U81R2Acx6sghoibQ73UKeUJuYkkx9n3kgdm2Lda2ASwMvJx9NK1rr3wWFppZQ8E",
  "key8": "62C6Zg7kTrHfeB79Xh36X9HkXjoSbxADZi8izKKAbkNqkqMzVAivgt7TLYtcjWiT8aQQC9vp1zTfpWgCj7mjU46m",
  "key9": "4VbeuAbz9jNW31Anwsof2GdrrBCUKWVhE6NSFred2EhKhiiwHrxKty8WCDq9ZaWqH7argphxVDAsSTgrSvXtiSyt",
  "key10": "2LA1dRqXnMC2Nnds3YjK1db87dJ1kYKofcSLrSfpnbgiKRGxWC85KTQJrLahuSsktH388Dk6u61EsGXvDUkqsp4i",
  "key11": "3o41ZohfFvNyd6HGyQhuYsRw15JJsKzMRUed72eXNoBBMxCFsZa9ynsHSpLDaN3izU9Crr9vfwXLdatec9H45Hsx",
  "key12": "3VaCUrmYt2BvWfwFYz6dothtXbpxxh1nMoqCqJJMDHgQ75ZaGmcTUCP9tUrGb8frdACCwqoncELR27pRa3jaPqpG",
  "key13": "5YMU15MJLco76tX8FfQwpgq4pxXKDqjfaUWimDhGvTXBPkt8dGacMsTH3fChxThkPrLhqxbQ81RcXof6G9xw8paB",
  "key14": "5ixiHpbymu5VtBCEUVSsq2TAdrqtfAtPDTfTpTMyMQAUHmiRyZPvTn7s96gmUtKtdt8Te7r5VPHqgrDZxRrqcakg",
  "key15": "5pkfvn2jBGSFmqrXzzgPqTRLhTe5rHMXeAeBS5PxyLU1StcJTdMyeXNZxUEr4YTvnwCofUvRvyYEckfZ7STLJt3",
  "key16": "5DFuqzpbhyZ4GoMF6jf59WfmvUJnbBMvsdLpPjkuvARsFkMa4iZE89MevNCHTvqwL2McsZHfwuZhbJkKEPvfZsZQ",
  "key17": "3MakqN8nYiWVdX4oxKkPNTHbhrUT1TfPDt4EMUHZ73JPmvfL33Meu1Lt8frxR46WKZmyec9kA8Nv6C4uRGdMfsMw",
  "key18": "5DntuhWXNLZCpWX6VnLFmggpkYDahG59yBTyzDBZ48mWgaefMSCFHxLWyUmSXDNjGMftm6oKcguayz6gjyNzFRD3",
  "key19": "4vp4Sg1xfJkAN7hCoACaEkMY5m1gQm1hZGJzJ8ha3pphM3bnqeHQLeEdH9QLvu2qR6ALXGX1Y5JcKMZyQyu3a2im",
  "key20": "3wTV37mtFk8T5A6FkKVqQcSwDPsLjHJzzMNQLiFwiT7XY7MiaUvubGdLKNrqjvM5PEYZw3Stp3gViaXEAb8JXfKk",
  "key21": "4N1P92DT1Uq3qMFsUhoazxA73wN7A3ej5ERhCQxeSRPyJFAB3GoDwvc5wgwMVFLU3JFHme3ZVRsGkeGGTQxzh1Dv",
  "key22": "281ARrfL7gxQhmot7dWCGaMFKB41Jg9KxUexXfavA14cPVGSGncVviEAFgCWhZpfvuBp6hzSN9sirg5z8TBiUmaQ",
  "key23": "2rgQWEsNKYG1LPpe6M67UQzsNjmZoocSpHmvxLj56po6KEKsuTEpDHpdmhKHZyv5KUfZCkvckcK99GCrwee3yJcT",
  "key24": "ZVDxXkxQW7ZwLRoFWLWTT8AhKji4idne3Z5WkPqNvdfLxV2j9pz1fzdpqT3vVLmAbPzPbFEQw3o9veN1qKv8Ty4",
  "key25": "5qCQQJsTQk3G94GFLoXodpeux4uY6BgCBR6m5uVLwvzaFzjXC5J1YwWYijnr581nX62w81RLh1TqMyJarg4P7nom",
  "key26": "3EN9nkeae3zQe9BW16pLT49GaLJkrKjqM5tz7qeWyubqSADtYFhHtTkrEc3PXNN7wNoFYGbmKMD59xV8tBpAoiA1",
  "key27": "487X3bXY48CXc8WihVk2tMtsoheRQbYoTbdSn3LmVhTRcNixLbvrU19LhWCbK94bwfEnABuFtaH6bUymVH9SpLQY",
  "key28": "5erP19kCVbyufonR8WQMCf7v7h9cueCjUSc8mLJMzgE5k6kUjZPJSAZVBkp8WVo2TVSD5ZazKX2mNz3GHmGJNVv2",
  "key29": "nbUorNVNPAsSwWUtecsZh6NjYsS4MSZeungxcjkSPZCD7FXPFoRATn6rB2QND1Epoe8NkGj5rjR1XU9REbxXK3L",
  "key30": "D5nPr4BXa5iv7ekthjAhVguSmQZ7G92PVXjpJDZQxenS7DDvV5YSaHc1w5ELWTW6zRdndBxPCqoVEEdZGsKFQqa",
  "key31": "29Vwdn4AW8A5s3XALrtyJSrZFGggQpVHuvnA4gWXyK4Y9yGjCfnksbyg78q8chkYiBb1LxXbwtsk8QoJ7XmrGzak",
  "key32": "29tBPFtZkm2EKi458Q8xB1hd9ixcHXkwuxvZaJZkkUmco4eEGGXuTogXwZu4W9rTTmNc4ZcjziyqwRiuUZyZSQTe",
  "key33": "2Gc3xHx5yei2nUa9UFLonmJ6wxwNpdTmiwswP29R3bTHNf7WxEwAiEJoMeA3dyx56XfwMbeRVBqVLx1HmhGekpUk",
  "key34": "mK1epnE5D3sLPbXgFdeNzT5XHuNDjhFQQZL9MYwnHqYfioV1SMeVgNK4EvLDThqtHKfxTmm2j3BWHGeWF218ewM",
  "key35": "3Tit8TMcXG8WE8gbd95Gc9XQk1anC3QBHp9zSqAJ3HeVziHN2GDt2L9RTfYTLnCZTGzuiBCfEzCQF34PrmhnvZKu",
  "key36": "5XFywyDvyRNYowLp4MCM1bXeJcWEK6Ym4zXXmACXunh4mxUEru2zcDbjXTQk1q3BA9rAQpjdyipY6nRqSXYSJJFi",
  "key37": "3A4E8vcQd2xAKtGJUNiXxmHvuHFzHzUoAgkWNmHi7AUmRQrjyc3jBWFvkAobJ17f7vW1MutgSGWLnzD4M13CEn12"
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

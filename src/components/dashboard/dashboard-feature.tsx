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
    "6ke1h4HWzD7NigUVsNpTswoRvRFLVSngUFWVxVPsx7rPqsgcDWMUFAitXwyxVwoLK9afYurzTnCS32zPZYZaNBV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yzi5pJCbbBgLLTJG8FSksD53cbRdSj1nNgFeq1nsmT1H7cJD45ityJonRUWG2StnghNjGsUuCesdiEu4ivokXYq",
  "key1": "xD1kFZhk8T9nSiR5tbqqcCpnzPPFUvLYtYwiF7c1S1P3aoweuB553mDMa7U22Gid6gQ7W6185S6qqg3ohiQQ3RY",
  "key2": "3TbakfCjmeG5ki1RUP6nbLqop7GQ6rKNZXSM22qdwnn58Awn6DLC7SAdtQN1HvLAiBxcvWgB6UG2J9NcKe4B3zB9",
  "key3": "4DWeUgr9Ni8qkBkk5wxAnAsXbzpYePj8R67116uGF5jaBykrhF7FW7GM3Uc1G1v8e4UeR6KrpeWtMrZZFi994GKk",
  "key4": "51TJMY4t8sE7nDub3EMcZGPRQ6U4kFgqN2b1QoPxsyUpRSobYKXkSxvvpPZQLP2VSUiaa3s52m77gLUUU5VvAe8Q",
  "key5": "zonbWHAXuo2gijHfvtZHQ6AUBfGSWL9Ad9pxuZPVx4jq4GRZXXojc7bzL4fiEYf38oChDQwK9G59dTxbGNFVXvj",
  "key6": "5tAYU2Te34PfVWgfPdSdCcHeg4s7hKw3KSmyX9BQ5EbAAWCzCxbk1wC7ecfm8cDm6xTzwJzUwJg7JZk4SML9zc8K",
  "key7": "X2SioKyrCRtYSSj3yPnvwaeUxXw2KojFkxKegAMjnHq6nvai9YA4PWpfx8bNEbsskJ5t1xtZmhR5zQ4sZXt618j",
  "key8": "3X1KE24Rcn2nuHKuMkWqNMU4AkrzdgBqscLJ61B3khFNUddA13D4uUHyqoW4RAAQBjTSPjW9dq44h1cUUJ4Q7n3Q",
  "key9": "4Z9CT5VjqwZDz78Ai59Pa5uywSSvgmBBE7WbJ71Uey9RKXdrzbRPgiSzd33PG7UQ7CKy9837US1didDsmhZHLQHc",
  "key10": "7tAENt2aQYa7AJkgxqZDMq6TdZS1nPqmRYUVWcqmKsBoDmxkoBFjfb6hxyUvN6Krz1edUvFw5Wv9JRB3Qfz8y1W",
  "key11": "4EabewXApChNp6GbjN26eX3iN65BRKPpncrURpQpkGh7wZ3DJCmLGjsjvhEc4XxFWRX8XQsZS3kQfUm8cnkY2Sv4",
  "key12": "4iaq4BEug2PXvUEWn2UqYqycj1qtE7VfofqPSKnMkdBu48hEM99hWV7NYnJVg3iHz99TLtXpXKGkvmMQGsgfJo3Y",
  "key13": "4tK6NW9nbUNXa6uwizSTSG4p7qZ9mFRUmSgeFfu6HBCEKrwPNgG3cuD4w9cQMtB7EqdseFoBijM7FAheMW25LNvw",
  "key14": "J5JzWTCEjzX8Uu9CfSsvz4Lp1gJja53FdCtytnXePDt8Ba1Q8kzExYaiHY22NP3oBMDKttKxYjDLkvEq2SofuzA",
  "key15": "42vNh4k29eJhY6Khp1qMdWXFa8D2wcfXagzZf3T7Z92Ru6hF2DJ2U8MrfEZscMy2vm4KRagCr3QeXrCacUxT5Njb",
  "key16": "5EevCnZgVHNMFixXkbgwsqUM57sqW1HdM8WwyYx1wbA6GNGA7sMAbrzMWQej8JSfPmD1wpyUUqJjNCTeb7MPQgku",
  "key17": "oySCnu6ai4T3FeSNNMNDQaPCuysmu28fJZcwc3nya68xnnLiA7GjZeFd9jtJ1qyQyxCffWvXeoDo9qJzZ1StKyx",
  "key18": "35Kfporh34vUcrAjkuDpBjytYi6AELBmBbbDAXT82kiRNBUBsbdFRHToihQWeAsPZsiNHU1gVVDKN6rdcKo478mE",
  "key19": "4xz5kAWoiQLwapA3vZst8GGhaeepQsZC6YiZC4JxfpQ2WauSqzk6Arh1VHrp4ui8aPFkyo22PXp7J2dHavjgbXir",
  "key20": "4rR3CdaHnMkKKX59ojfGggQC4Lq8twqBoHXRC2AF4ZXC2Y6xVY1NUVBRwdNedUFmSZMwJMCT5MGMBN1nRCvwhz6T",
  "key21": "4RRP8uFdPNNw8TpSv7iNqcGYtFq6w3N4e7WWwSAaGpywL4RyG9HYzfTVrDNh36mnDt4jmm5yL3JiYZhhE4YsqF5S",
  "key22": "2h93y9tLRtFrsD4ba6EvUHGsRJ17w7W7JxcQTVSSDQpFbQdNmueQo5CzkoHuAykznZWqjzmLsYn2emaeZwowdydT",
  "key23": "5a6Qub9N76bfrMGE5725r8ENBiS1CeCanveyF4Cx4KawPPP2wRWC3p3z83sUx3AqtevZQ1rB7jwqHdgxLB6o5Wp8",
  "key24": "45TXWqjETqsT7hLjysEibjN3PtiaeMpB6BwvSabMny7Xmo1R5B3pvZiU9dgizXBmv7Quu2wzYp6d29Yj5v2ke6XG",
  "key25": "5vMwtkfyv3MHreuUJaEK4tMxWnEvMddnDekgakRkPRh5pRjcE2PuMxk6Xzs59p7t4HnDtgGhYt3FSYUkvzBhokPD",
  "key26": "2BxMx6Xp86Weno6XV4bEKeivdqPnkj1dMqNRs6BTzsELbKGjZ3QYJ4QAvxgGZRcxA3PTeA5hvttUV6AQX6JgGCNc",
  "key27": "5ERT6oW4Lw1nr4jtw3owQdSiyUB4KvSo5D8cBd492BwzfvK7Ux85dcMidXMrWB2cNCGEqce1Y1eEok1oN242w1tn",
  "key28": "4yDjGGVd9YATMP6FuqVQrT7C6ei2UE87ZSDLasdGGEhk7K5joSj9AAQttxYLgfC5qysHVGA2RWcrQqieqCHwDHPP",
  "key29": "5wbWZYvAH357Mwv9HpjuhpGuE2pc1UeGd3mxdFYzMAzc5gtkofW2ef7XETmhJPpTr8k6u5QYohXycsjQj5gPskZE",
  "key30": "26i1y9xxGuzPKhuoAEwA8N9A6cis91an75nHJjMFBPz4zSjnQADAbQG7GDCE9j3TYnfGZ3SmV3eHrcMT5jARuEqV",
  "key31": "32BJZnHX7WncFTjX4DjyTuMNyzDCZ31Pnb1e6Mhj53WrS71BWWJjJ2LzrTf5ygeuSLpX94qYWSdac6pyGuzKJyof",
  "key32": "J4ocDaiyye76niUHCCj5Yz6bBV4pzauoVpcNgR714Tv5eipsBhPeoLXbegxm6MudpHfhWHNP6SMAAQDBFXJkTMa",
  "key33": "3Me8AmatEYLzv7nQ3GocT2cbRf5Cy2Z1RESM9pbxd19Rb8ogzSfFAPGZc5PaRo2M7m5mRaepRfYmFKmCWgWfPQjK",
  "key34": "3T3QpB64TmuB1RAt7zCFx8tphm3BDWvpyx8prdacC7waAMYTWf1CQyqA12MHyjFpj1BwjC5zVCw87ydFS2TsMzef",
  "key35": "28etSh1RmpHBEiv1x7aDZgjwTBGf8wHram5ar5eCiaiLTrh5zJbNGfG5WtQo4oY7fxb8KAAyxNXr9QFPovSYc3rA",
  "key36": "2b4fFhEp6cHfraec9e5tADRucu6bULkjdpK1avgjXKRmgK5RLbvdMrEeZpsDpwNmZ31HKgrwifP8YaMZQFBgQqQz",
  "key37": "2bQswvJUMpqLVb7Vvpq8usjWKGDWv1v6YjKFPyrzp5f2K9sDoykm64oZoVf5cQvJfXbznkwUgi4jTF2guDy1HwfT",
  "key38": "hL8LiRE8JruRmDLEARWke1srM2acgwvAYxQUkEJg8BvVueESD3S2C8v9ir4vqfdCSzHKvM9LAHQE8goCDTsMV3C",
  "key39": "4yrTS2MdTee8uYSDALZTZyL7jJjkKPjgh9msQqr8SkREBrH9hDVe5Ytkw55gMy57a3yzFuHcxevm43PyuUdxjEEf",
  "key40": "4fCnLmM1pLoTwFQvWULBcAtwMUSGpze8DoT6HydeeyMxahudEjCZRa3Do2AarpYbLwPczvahwZxS3xXyQwgqH4bM",
  "key41": "4cPQABuqeHM7tCK76vxNmHVt8Ris7ecKyanaopYCPaovbmYpoddqnhJ2UvKbg7sCixDCcusKNXttV4D7ezQetVFS",
  "key42": "558hE6bMhh1Gq1mSYyc9mnSUjdz3ZeKpwEyGzHB3XaVC8sQh2hEvwkQvm7XAkrP1aRnRP3rv1cSYW6dAvF8ADuUG",
  "key43": "2WXbYbY9nhxxfPJJp7MCPMrmQByQegWMwSmiqShGjx4yxofc7xn19yAFSFmUtqCdfHk4ggpp6GEZ2wEZ5qxzXXBU",
  "key44": "4UsGfKddHPgczLqZZ5VCahSoBpiaEd1noULFF5HpjEjcczoHCJEkNv75sS8HgfCfH4djdmm1aygRfQM64eXmK8XH",
  "key45": "2uE2adr3gFhzCebiuovVSLJZRwtcNZTmrcjeGKK4DSntAXAYBs7FG6NEaLCRaRDh8QXBJxAqKHc7sgPGEarpkYBs",
  "key46": "vTsi3kaFBHXftvfjRSYiDaQ8z7ezJ8GnseYpvCTsF9k8wdkkpsHUkUUY47bWnSFwZRJ8ZaVdM8w61KicRMnDMdu",
  "key47": "61qh5CuvwMS33kuHi8nbTum5bzLna92n1B2VE2fiw4cc6UdCnh7g4YVZLTtYME35rFxgYGo394scfkVFAxjewZVy",
  "key48": "uhJyZ2Qu7rw3fWKXqs7DPyaSWQ2jqLvY3YAUQaLBBmYgBeBz6YxraroJraDVu1YLgJQM2xomsi5rbVKFdrvwQ95"
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

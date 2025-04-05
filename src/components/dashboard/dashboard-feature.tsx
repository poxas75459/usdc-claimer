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
    "5faWSRNodwcDhVk55nme1AWKNhoP75hKSHyNSqGr9ykaCWFdLfJ8CSKVYJNNQU3iFYeJHLBFtkKyRo9RyxGDdgZt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kWLe1WjUDcxAi45F4kVKxz6hpCntZjENDeXbBKagbsq1QTPESHmwoSF7xSH9KS7Bhxvq9CFhJtHQ3PUKZZ4gfVn",
  "key1": "wP8xR6SsP7kFr19AnmjsL69Hv14maTnksVumDGP8YBYYpwzoDwWk2RFiStGKaVdREb2cJvsYz9tUAjAxyMSBMCU",
  "key2": "49eL4DjdfE1couZMdHNTzMEXJjQcYb4uGWTT6FATWJVmPChzTwNR6bAHswabC1dpH6ssLWQKu4cr9KWA7vgecjAU",
  "key3": "52gYoETQifLsAbbNjbJfFbUvMTnBVXUzbpwhKZ8G5Wq4G7UCFG4WgYeTjV24ggF9xaRYqGs6mZueT2MhiMq4tTpH",
  "key4": "37BKyazfgMy7ZuJKd85tZhtEPQLpFxbF5jcj6Nvo7g9m4pobkXERHBZ31mf58jNkMjYghz1Zn87Q2TutVC2QXnbK",
  "key5": "3TPCWkGcASbDSKFJZHtgeviEz8pRb9WpzWFyFZNqq3FsFa2dPty8S6RriKh89qss6qkuod5vGFhJ949fa8U5mXnS",
  "key6": "6o4BADmaW4pvKhkJh41aQXVXGXd38o9SfTLgqjWH2vjfUbTKqo3t5su1PM3oe4HANmwzwTTyAPhFavB3WKiKx5Q",
  "key7": "37vmyd4XAzu5m6d9oHEyfbxgdC93qTsa7CABCGqNC5iQEq3SMnVLaJf5oXa4smYBD5x4Ru4zJfkV2rbASPRtU7Q",
  "key8": "5qAezYwH2wKaaYuFEipjGG444Bt365izCbPmEFuv61XEfTjAkwFXCZ1whx1Dpb8KwCeNUaLdNrVAmreSwYBYYJwj",
  "key9": "38E2FRAhEf8qBtRjj9gMffwnwyA1gnLmDsTKpiReGMnHBWSSpV8hsXK5uCcKsEoM7z23Ush4eqNtGmjwLxeyVs45",
  "key10": "2y5DG5VdjA63iUQyt3UM61ZXVzYWMXEYjwRbySimNwhrkeANms2xCHYdYWRz2TfSHmJ8BzCB7TCe96XeomDJ8fPz",
  "key11": "3xV2QVjZZtVdw9DoXK4rWESDVrCGYv3tWCBJ8oJhaHZhWR3JBKzYWLKoTDQv9beAhUxyxCvz2x4LDKQbRWZ4dcEB",
  "key12": "55ubQCaQdZopZJrG63ceHZebDFSagoKS1GZ7psidCDPQubq7tWQkDRrekVNt5JpdH85YRM3ieXJfR4Q3GWoJKQDo",
  "key13": "3Dx2TunZwZBEQAoV3Tw2nn8vGfUwjy7gqsnR6MXbYhUaYZnuYvb2T4aUjrq34FZWcQYdS2fetEKCBRBLHbJzqee",
  "key14": "3j48q3D3Rhw7JKPwc8ohhSC8dNKPyToPtwm7ckJcf5DUZt4Xogn9YBMb761Preaqpu5Bv2JVv6q4ndT4wSe6Vasm",
  "key15": "2xLHxhNvfTSaGpbmMSyAeEDSvPMLg2E1gmqUzJmvrmPtRwi4KcWR2q2YNUbty4TjbgEqdSkrcjyiGVg3VGLPGFwb",
  "key16": "42EAvQaGdkPCzDMCRcMaXbJrTBQJiSojZCT7eJg7W9iATbtjhUUFT6Wjrp19PRRxtrWFS7HnBUvNACfwdaNaa3V7",
  "key17": "26fHL7FoxAF3agka7QJXz7jJGKh7Y4zexiGxJvHeHoevfXEJmSe6s7qtSMkXzMk4hSq3EQiSPjG2AxNyi7tCSPmA",
  "key18": "3tJZFRwDUDCW69ZNVwnFig2STvYKe8K2VLQp45uUApyUMhrsRe7RoVF74hfBYwYgzkgerseZ9oXWSbWzCM5wpcwF",
  "key19": "4DibtYr9dz7YScABaVtESpfiLj7NxugxVsA66g8BRQZTtjSThtpnxa8cH9F58moCbfp7ks8pkvfGK9sFXbvBkRXW",
  "key20": "5Yjbqmo5rymkv44F38gEJR9KEMN6jv9rSqBhvHy6zPoKuFpnBf8X8qsCaKTU7C9a84G397zKPbaormW2oZWC6JdS",
  "key21": "2AUfJnrZUHSYnYKyPtRJsb8pbfJKerAqvwASRVWheVFyNzbX4y7JLAPjr8UXTmRre41dxmWExGhY286bVu3Qn5VU",
  "key22": "7Av6hW1QNEmoRFRGmQhQAt8kLncYrjhu47kruv3ZgPQ3tp29S8hyVCD2WF1GMVUs8nim8pcCm4GkonTwUu6Lof1",
  "key23": "3YytQ7xSbMZZSwfbbTeizNPbWemqJa5TAxQSzdw7HB9MneaeEd93cHBqBXDi7ek3BncjGf8HJ3R7CxuEnfAYcWBX",
  "key24": "4t2d7CqPS8nJoy3iVC5t5Eprkm6vCY3wsCYoy3ZuDCEZLigApWXm9iSeUS82qeSVBWsKZzQZBEMEudtqYSE6pAwk",
  "key25": "43BzpqvkEGAX1npXZupHVonCVES8ScgENxQMqHaZyq5DUMiLJysBYFuEZ8ibqQW1Ndx3oGh2yMnfJ3QQnqkPZtsB",
  "key26": "3DZR8CVaSeY8R3rPVkJ4SVQR9D5FTnPuVQFZKBDkXkE2QozFtPRqszP8mU7akNxes7hSggTad26vKgesdhHQD8nV",
  "key27": "5N2q11rXXxHzw5e9LKonmjKHmsNwJDJmzrseuMkj3buxZH6fRbf1vh3P3ApwHY6hjHMvgeUzgEtzeeaiMFDnasUU",
  "key28": "5zvZZvQoRaWmUKeiezfkWoSZPPF5VymtxGCiRBeWzTEqUi5LLLZxTyqZqE61rfv3CUKboSiWT4pvRzbSpVZtWi82",
  "key29": "378E39MamW7mEE1ZTAKued3XuHvMPC5ucjRu7R9D74aeB9UBEUUt9yWkZUYzXaWfPc5tfKwkwqtHiZu4HzXVt8Sm",
  "key30": "647nyGYVxCQuf3j3gtp3RNrmGyXktn3He1Rs4wNmnnFsesLPT86qtAtWVHkKZLg3Z5rmGomM7oyJdV4f9Mhj3UJ2",
  "key31": "5MVguse24KdFSztYieSH9tM3kR8VK3KeVAjj8o7WffWwTkCXRvGs4fyVAoRMMWhDiZHMALR1WggNC4FgyxYifnWn",
  "key32": "f7WV4JHXifvHTF73jwNuM5XVQpxjDyXMBrqJvPncvvLQHXCkmJucpNbwbGFkhuBej1K2Pwi6Zmk1JCQeQoUjrBP",
  "key33": "2PmaoxS4ZjV2isiXqYvExPtETmtVohYN8exxBURTAWVeZGmRCP6SMeuFeCmuPR3ak514kZzusFgwCDxgnJkzyi5q",
  "key34": "3knUEBCyBNN7YCVNCUpviZ8g2hwjZEYqP7vmkby4g2UbVR2kxLWhRWDJfzK3kJEAp2EbC7u76KEEfyNuEfDYFcgQ",
  "key35": "3gkyNvNZgbwew6FBQTBRLpUC6Uh2kRLb9DjCoSZw7JC5NADU6x8W4MuBYJH4FwQM8gDVYCofC3TqJFZAh5EBiN2e",
  "key36": "YSgvUoKWUDZFuJBqQxhkEcJn2mTK6CcaKo3sCqQmd2oauQNzLA7D2vrKENT57gpVHFL2S9VM5aZGSFXssaSuR73",
  "key37": "31866BzV2VQ8pPqueJDtUioAwaCAdhmSbQ27vpQv9wEFxyqWHJ6t3csKmdVnWtwWFihhHPYvxtE5DVzRjk2XgmqS",
  "key38": "2TPJ16SdvgHiwdhwggP81jrygGrjzjfZhywBLYVSdmMDztZrw76A4c1csbrzNCXncbTu5Hs6hq5Z62RGRuTwLaaT",
  "key39": "2kQBv3ML6cFZWxMoTpGcf7J998upwBDb4ENiXHqWbMNoYC2kdeSC5vRSZ6xScPHBAhbi8Yzg4XyvxMJM1dHA4zrs",
  "key40": "5bwjJCRfmJXmjDvhFqGHSCNFsNvDHLaHyEkGctsYsbdKuBfkSyob9ifV4pBAJhgiTSArgq9pQYvC7Epzy6nUjXuE",
  "key41": "47doiTrf5DRhqcYvFXC2DGopbUKP5fa75RHaajU9FnNfQnHyCqL7XY5pDtAoRJrTQCWqTzhrTjorJRuc16buaS9g",
  "key42": "2SV3B9h79JCaBvoAJWwn5vyz6bqzuH2PENpaufXG9XZ5v9djBvPp6Dfd799zzAekSCqR5WNC2XvLbbeg7ADZXDfV",
  "key43": "4vQVgZ1MD2NrDAgiarTbWYPQtsbhThF7rqWXeDKs94FZ7PZ8rMji9oLxJsLx1vm2SNZg3uv8q3hNKSq5abFGi5zC",
  "key44": "4z5v2MKiZw9mXCNfwqYZyXHkE76NJX5iLJ3ezfZSGDi1KiReFiVf8UVN8YxsvWKPZ9YoiuDrotpvQhALzKdwaHsQ",
  "key45": "5noJLEyYLSQ4Db7oxbM7eTDmNRNQVuXkyeyutnqASud3vGEi9tbA78Jcu3BooQoiH7BG6iWHPTQR7izcvA7pdqRH",
  "key46": "45jVLo8oRkhTaPG9sqc2pkUBbbjE7N9b8Ao8VUsz36gva2FtQELLADXEuraEkVdTew7Lwo7nhDHbJmiZsthUHXFg"
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

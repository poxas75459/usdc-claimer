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
    "4fxxm7D9hJT3gnUYRXXuRtQZ1ddmnfx4c2vuZ6sLeU6Zb4QTPxZcQT4eUbFVh5t9orWXc8dYPcR8KyjmJ2kYeRha"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "655yYfH2JWTW1prtpVeQJ7Y1f3e68u8BTSuonE26qz6wnKecRUXHCMscUTfcbeUPbXoEY5tFcRgTn8aPNsYgggDZ",
  "key1": "32ZGLsZdUNEEXJnL7Niwws6UJBjyWuhjFfRTof9N4cyW38yC1Y1ezBa5Lo68P7oSnq4K1qow4rtqR6TW7JP6FRXx",
  "key2": "RmG33FgXwV2GqiQ7NUPJ8Mrs7447yS449Wvy2AZqxHXCBtSjtHviibGvNoXD8e8H11UQk1VcTYTyxo1T97PE7dq",
  "key3": "5jNB4AQ3a1ptAs1CB5DFxFSYrCLDJGmgKTcaXBJM7Natete5DxQUoFrXG79x9CTABvp5iKusC4wqyLffSfkmmdQe",
  "key4": "3g74CZVFWuaBhpLjUVCmkyHrtBA7KWmcFAv23thiQ4jFGjaP3wyzckf8o7DJgBTCXTu9aH8Vnqgrc4XzXHVZ7MRp",
  "key5": "5Ed2bmZmgUzf581vtRT4KpfEaxWFkffipbVmpt7gpnfTqzJquNYQVEmAqGJ4rws5RhvPNqwKvsAa3EWQZChCYaQ",
  "key6": "5HXpBdVqZqTKG7w5YidoychhLifzdGZ2kbByHzj1UtVW4QtFm7ELhkQgFmSsBCcBULwZMupocC29d6qvkqo2Pzus",
  "key7": "3g8Gte1iqxkyjR7UV1D9SobqR91bU6ybrN6KxzQMLAX8soSfNEcTeq1YkExRkBiXK2RzYoqB3ZU77kXMWoBNxrHG",
  "key8": "3LYEUJnqrKrnJEgX8KMtJ2iKQWy9gpgF9gB45BQSwjfc2u7KH3aeTQJYYDPxxeyoMqMVocJtj53QmUhSRv53jdzG",
  "key9": "42af4RKyocr9iKFgV9NGWHDtm2FmCLomLtA8s3SPxbcC9iJUvTufMbVgCX7UakMePAYPg4HUbJRPQ4Baya9SaP6s",
  "key10": "PMX3Xqsnnju1W68gEM23o8v7cSE8CfKvYcXiqKx3P6zCpRHezt9rF6oXnY7j75MLfDjUt5PrDdDcXyqA1w7Juga",
  "key11": "5xzqPHpWiXA8WMYPqiQZ8JFcvrH7gMTqgZyEWENqiruue64sXQ5WkFKsU4ZbRqAFACaZJCAEU1FthWs5D91hCovr",
  "key12": "3aKFckLM54jwdX1saEEZofABzSbN4wwxshvXWSWcvLZvGcQmgaCAQNWuff7XuCo2EWUkEduegVYzz3yrneVAEiN3",
  "key13": "9bRp8ihVkCKyxtoKEFZ6NMjaa9hEGtqi8S8ndTa19hZXuxxujpJJNvpJbwvceWCCe2n5nYm11FEZfKSJu5sHcz2",
  "key14": "5ikrsEb15BK8a8tVFdk7i8JBA56pdSUjiJNd7y5MX4UYSh6G6qKSDtERdr3tcb7YkGX1Y7CVH33E5nfKMxbWm8d3",
  "key15": "WJDDLjVWqPoS8XckuFvBXd6uQHy1F8NJge2n9rENHbNfJJBsiCD19UXBqEL5739BUURLS5B7Hf4JPQ6SbgceJNK",
  "key16": "3sKzkRep8quBrjsmeZCEVCx58qr2Qdk7hRuURTbEdm2Ldx9EF7TzZjSExbrn8FW6qB179UTSZEE2uPNm9g93ZMWN",
  "key17": "2N5jWfWGomwC7KkJUbH1HU4zF1JqwxEa3SpHuUJSr5hVwBknEzDMrGCEw2ojG987b4eZxYfjg7iY2raHhKaNyENC",
  "key18": "3oawJEYWZ67A2XuEzYCfN6EaUDXmnPVzsM62sNw5GwsSYjc9RisyvVGDHVaLaUZAuCryrJqXtZ9J5J7kqbgN1Vh",
  "key19": "4Hwp9mainKpEBJQRFr5wssZ4j9rWX3MuoqoBVeBeDhLWpuF4SF7E24AsCLfMap8ztDC458eZ1F2pi2Fn6z6aPVf2",
  "key20": "2jP2ij3xqK4xDFvTtBJaxYvjRYDRW9mQE244va7eveG4echSrMfXE57AdgXoXVw9LgrFuRQvAjWCPEYSaBvAcv31",
  "key21": "5BttWqnDY8rbBhSvDxXJ8X8AQQjAW5tDK3xdTy1i3mAEagnxDHJd4s8GsyCT227SChSB7Ktbb1KbYvt32hDfidWM",
  "key22": "5eoXjW5dD8SeQKasbciJ2oJpLBvTMjPMs35BnKsdiThGvBcZpkpTF8woSxTtZpwGgxCx2jRGSMVph147BWSD3Z62",
  "key23": "3NRx8YvGTuRWC2z9oNRdu2as6xFENpVbFx4bAK1ETEYykYYHiGXxcZyeEqs9hAtF4jF83HALmcuK1oEzJTvWKz6a",
  "key24": "3BAvQBMwbnqiavVTcZ31wiZ4qPkJ74J81FXaxo45m1h4BVXtxedgswEk8sqomnZGGTMQfMLtQsBt3vFche9xBgqL",
  "key25": "aUcc7FBbdbvKjyhjtd25iqCG7ggiEUQ7ESE4t735VxXwXB4WDtFYkkqk6Cf6ejwe1QXpDNDhs6MwEB6cYVJccWQ",
  "key26": "5TKqGUAzVjp9ZQqX3TWNZ8L77PZBPLJ1y7V9DRLPwsPjLGKJT6jE26y2T3kCwtPVj86Momf4e4CJLAvQUPkxohae",
  "key27": "bMEXskoeovtQpxE2VEwBHnRvNSUqTbTK6wm5ChyE7tX4BDBjFar5w7iD5GLuDmC2D7Etfx42mDkEQ1yZJeaZQKK",
  "key28": "37ym363tUU3bgNivbDQ3hr7LCLH3EoW9uoynXbYDqZJRYLRXxtDe5FkAwaKLKJcVUEwVPK4csvvkA7F5bGj9mvZ4",
  "key29": "433vWTrLsny7SQGFqWcFfX1wXJPXDoGoMQWsh1sa6y4bR7L3zG6io4w3qT9CLfYaw6Zm82EQERoGeTyuqtoV8BPs",
  "key30": "3oBz4wjFnpLoy6k1agdjsG5kgEzWJTHtqTyVmCHsvP2GYrY33rWSXU9QkYGhqCZFzTZT59vyMy5RDYs1vNRgWPv5",
  "key31": "4uwbfCjHYGfBzNHxu41abGZJQgNNixHoyhvTaw7uSCJQkQBCYZQizUqjFLivx5743rgnymqHgBDc6N4VQhCPUvZv",
  "key32": "3HEt2NBcEtyALTWVghput6LBAmvDXWNW97ckoGix1P1diug9HA95P7cujuBr9PAWPamFo8kgWL6C5uJ2Az41jAhW",
  "key33": "4JxXPxvzLvn36Mn23bRKLcBtcBceRKM3tFFgTjcvYFe4x252ixuCNycL9KjGRu8mnK55a8Bd2uAdjxQpUCJn6Tw8",
  "key34": "4acAEBKjm77raSziasmaGiE3fB8fdxRRL3wmupHiPjWfWmgti6R1L4cZ1JRPgZspTUXwaErASY79RrFxWbs1PZnN",
  "key35": "2r67iE1KtVgRbm54iXGX8kqsUZ8ZFawnBFqbeFnZprf1CJHpjrVRdCoLapEE3569zcNK9uhxYVAy4tFAahNKV8yr",
  "key36": "5QwvibbVLbijh8j8gADiVBXxGSErQdQGxgwxPxS8R3QyrBAYhP4P8ceLxu1mUDFo3b44wuL3LmLafMXEvDbWDPpn",
  "key37": "3DUoDjPKctcQcA9Dk3tM2G6VxGRyAXqy6qgB8fMgWyWwZKCgGDjNGJUrrYGNfRhFqgSf4yxgDuza1pnyVX4vgUS5",
  "key38": "rtRiHeiR8E754FDj7dJMRJnPbzxyHF2nBnSUf3VjStdyDvVbB3SpKnHRi1tqHr5WvSYL3cvJye7KZJjKhUuHsK1",
  "key39": "iNp7PFhWueavpA1isMkjavUNvwm8Nh3kiASdF77ABisncQTthiC33fEh3iA2XPJriPtiKWxk9PTS5NpMtqe361S",
  "key40": "ZgPNuxURfWwapf3k725aJR1Q2LCYFYF1g6E4nXzRt7mgftRNDKc42thEtzfb3qeZuQzzGmPgxSnTQV5G7sCTQVe",
  "key41": "P9QgR3wz5qxQRS71bC9BPmVXaCBRBAgrJEf4r5Bxs3ReWpwUz3T3dS8GCBGcubeVpqGam9aSrQ2Ke2MAN8GTkaX",
  "key42": "58DUPrv6p9ytkSWcaGovSxMCxuZ9wWYYZC2wUJSPM62fmUio3LyTmsrmSbbc9B5RNtGEu17yMdP5Wo7hp1mpqwhJ",
  "key43": "2ArgEhBxcBXtXWtG8uVNL8UGAXvrubKE9ogfiikrwEa2GfSSRLePau8mDmvrvArWzxY6ADoZFYgGPKz4UJ8MPgR3",
  "key44": "ABqnx57Jrjjg9NgE5gof5XJMsgrUsYR9FQVRPCGWYEhyLFCR6PcHHfmjwHGbs56LAYqk3DiYGwsfEFmvcCY8Pjj",
  "key45": "CxYiUd9YrqpwhTnTi5rNcVio4Bjy476o9PCKurqeSNndiraxPfH7rxFfSKgDaXT3EXPHYtntZBKT2URUp54Mqua",
  "key46": "47jGr7kzoL9iZFQ6iSfu693sHMx1HrWTmMK2A7gvrw9Jm8SNuKSAe9qeTkRqZHnccCf3yqUsYDTc8TvW5miNxtzU"
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

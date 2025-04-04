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
    "3C9EQTENcmFm1tQFkmUuajw9wJQw1cV5q4ayr1aNBU6kEwQjCe3e45shrFcU1L9VXRefkN6Lr8QKcFiHSrHu1V2B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g1krtE2xDJzvZ8LkoSeHA5ZYRyS6ZNyjrJ8AM1RL7brjGQbxH1XuEA1mpsux1aUZqhvobz8vuQmwCfPwnnZfxDi",
  "key1": "5yiLkYmMZHgBiukuwTsYNJKVUkc72ve7GGAk4HoeDNp5AG7VaiugspePs4e4GszVuLX18XsRqdbBMLWH833bjNfn",
  "key2": "3FdtMm8mkqjyCJcgQmRaUsNSrfJ5Uh2aFDaQL7b9gi2kQ2o8GKv8Y4Ya5xPXm2LMp2t8LoomiSyn4kxjqfi79mMP",
  "key3": "4LhtKa8YxhgVG73w6NFzVZHgJNuBdSeXEx1uwvaPHSWisHbhhgVzQsEAfoAdH7vinesn2CjjP3iKQqSN2yvDw9Ds",
  "key4": "2Fr3mcTYuBXAMpPFXCoFNQYWzjToxWUQNzefiz1fbUTouCBRYExtCkkVJSCQgEZQ7U34b9T6mqahuVAxENKntW6R",
  "key5": "2QYkZxKtDN2L2kh7udWKKoiyxKLj4yy242t2z69z9r6swedb3oRzSjt9PqAqzLBW9sfdLxAocjfk7GPqc7uumNsY",
  "key6": "5eLsk8b5QFYYfpL9Wv6HCgzS5S7hSvDtKBouJVExdBWQJtDYjK3bPgVN1YpFojVJQWUAeeVBT3etUG99pTNbwfK6",
  "key7": "5TzhRipCNDJqJdkYt2DL8Fdb4emRkr9cyBf9PKzUT77uSVMpjRmZYAmdLecVpyaqFxzU1WH8RApoY1A5jLRCZgdz",
  "key8": "4NR9B7X9qC8rRbeoYpcoueKHq7m6K2Y5W87tFBRp3Zc69AyoWFZjBDeSw3R4KETFPJ79LJKfT1hnk73MLjsY4m5W",
  "key9": "2p1sRE919xMcdYnHhiWvAgd3NJwzvjJqqnAtTkgeXLCpa4P1jsHJn6XDxwLHf3D9Yp4hP3QibNtgXhxYyX4H7g15",
  "key10": "LC9ejdgeJh6115VGuMUSFqcpeWsfF4grzFhQAEa4TWV7gZof4L2FkAgXseBWmarTmxuXBBirbQWw5bqLSaET2s3",
  "key11": "53Pzr2coZNuU7sNSo4tPVgoYWobQ2v9QdPyVBXKqn2tz5hnNB9redzYKyQ6fPQonUkqf8r93kALtC9xCt9U2b4FA",
  "key12": "5Kbc2r4Pxs2QadZzkSWpeB7u9EQ8VSBd6NDm3HP7XZnyeEXz8oRCjRuF6makCP2D8TfiHDvyue1bc166NML5gb6y",
  "key13": "4v5taGtTDj4S6GJrS7S7rfge7GUCmtSTgwWE1vHNMxTxtqrqumD1ALBAyXsdQdwQDKqHS5ZHtG5U8XCA18S1F8hB",
  "key14": "2j5R8j4XnfZ8ca5orEYWwhiUFRwWvYtyY92QFKSUctgmnGDUs4LD1N5j5gDc9yVKXwoJ3GA4M8rdjtAUU3Lt1Amm",
  "key15": "39yZXcuLUuGNWrNFp7f7Q4DCbL46wHyzF4KVFtLAvWt78715VGJNR67dfqpZBdcacvTHa7Yu4oTcV5PxJfniNf2G",
  "key16": "2QTQuA2AgFRa1W1PwwUAjUh7iag7Stds3wwfB9AoHXHRQneQsRSc6wwf2DjkJUVjE5QYHWk1f3kGyiQg7S7AeTRi",
  "key17": "2DvUGaqKtDfexW8VpbFZosDK4m8UC1xqLZKGNJsnCr2bU4RPVrFCMp3tEbZHZx3tSj7GtKN8kGBL98KFhf4xMgmY",
  "key18": "4mqN29D1cQTbx7gFoubRpJ9bCBzyAy22EzAhxfMznCSzyxvCehm46BvNTYBUHJ4f82QBd7so6jxA9ejFA4YLdjnd",
  "key19": "5gjxPNn8b8nkHbc4HKRmBeTTKo4mSPLBYHtvrqrLKZ6y8ajyMtT5XU6uP8kbrycXTwcgJxBQX79PdtF8QBS6LvyR",
  "key20": "3kPMvj37JeDNiboCTpCU1twVFuxdEqMvtBFKNuk3JKnEG314i3HCYt1Zp7by3Z4xjdyAriK3gKViQhvWRmaFS79J",
  "key21": "yHDe8Nvc2TKHJq9pHveXkuYPoT4MYFieGPo9vxykgr5kzRJmrdKtAeMZGoT7UWY67ssX1EmoHhiW9U58YtsZhUq",
  "key22": "3rZMTzjtxCv5ohDsuPM98oP755rMLSSjb1wLFPpDhTeQb8hpyuMddrRayFx6CiWNkQMsnU9zBRurxGdqBZfJEFwj",
  "key23": "jR2yWps9EzHpwTYALSGbiWrdsn9CZUtxvVEsnugsjhi177A24daU13UPXcPogepegcC8uMD19Yt8zzEHMS6Mprr",
  "key24": "3XWBLUW7FWKQb6veaYN2KdhZ77ssmpmenE6rXS1bmDV2AJv1WrFmkmd6hPZxKGbyvN31ouEXNPt7qhGFc9UQBnRC",
  "key25": "TB3feZ7BzYiUf5Qz9qzpLvv6mxafd8ySWeF5MDhnREtvrKpNbLSRZWZTwnAuF5fMgA6GT5a5WrxYZZLfXvGUSEj",
  "key26": "4ajf86Zd9JEnvsRqLmi4YfffgDmWJuGwa7qD4hDUMBSRtNhzwcD47zheLDpzRCENaDe4q6E4JaMdwJubj6gR76LQ",
  "key27": "2uzNoFwmYkHryWmhB8HECagWLSvzLNNM4tDh1LMG63a4SBJPUUAQycRubTxBCAMbZa3LTLuDbXDwujAmsaxvMerr",
  "key28": "2iEcAHMPxNrkq1GHRcLhAKqL5Bb7o5NmHvTthQCZuf2VY1DNz54EoVrin9b4KhKBEzjPeBDJdMnKBFbgVsEPvSpk",
  "key29": "99Y9sa6jzzai8HBPVtxmsCaxpxnAxGX793gcE5EqL4sqcs87qF1tjmf6JfrfLaXoLHRuwhxGhUF4cWMqsLKtaYn",
  "key30": "27KFEp41XxmNABn5u29kiub1jYM1zkaB5BboYxvj3iawPsh82cadcxaozyDBExxEvLobjDFuPgWbmFmQGaMhCY3s",
  "key31": "4abbcucwBig5bK676ogWnJ8nzwjoAU25iY2pK5uezyvzBEAs8fXyL3h8zBtCqLXgvzAzekbw9PEbqT3cNdTKTYfy",
  "key32": "5KzFQoH3TTyiukWzS2SoFHmiK4fiAj5M2EtqFgMQ6MfprtkLYZGQsDc5CY4pBQ459iCv36BCdMF4nZvq8ZNkdFYA",
  "key33": "3iDSmiq5ZhHjjKGPv9oE2SuAvvutNJC8thG3Lv3caxWpH5a4JEzwqFcYpj1vy1jYkgfZSXoCgxVpaf931fApEK9Z",
  "key34": "u1LJFBiCv9A9dkMGh7pPKhb78mmbsXZvHW4QebCiQi6SdzWPuc8WdixHPYxChvvjy7EWacMSs8BoCkM13JeQJXd",
  "key35": "fcRCuNUq1AHART31AErjbaoodhPNCKrBzAS5s5VUJ5ht6Cp3EbqxgfNiZarcnrtpi9tKHRsCYpPnnFqyFRsUfV5",
  "key36": "ahTT2SpG6hdgEPJyjhTu2SwxGh4TTVGZLDRs8pkV6PrXsoepV8sctRmV2mBbBfpn4a6JWBktDC6R1bDyitwJGHz",
  "key37": "5UEWZfLFoBfGfAX65tuQxVZCGzwcj4hgy8oYFDZ4miysCYiHn9LbDDo3p6BhqLWUFD4XijMXzpxm6GxH8NMuK9eD",
  "key38": "2e5NPEhDTtKHnH1qef3epE15UGdRDeEmWwPZmSk8qU5VJ1GnP9VcXnRbuytBgpXx7i6EDoK4PvT5s5udMTTTYwt3",
  "key39": "4Ax1rAcYuYq9Tj5mddq5PVhgkeiobfEry1zD5rEUqDxp1NFUAg5htRjR8eFCEDLGSThdAMCzbtD5FA6mS5UKzxxs",
  "key40": "49YqQbNotFnAtYieJRhD5enYMXoAAB8AJ2B8Ax77UF1v7LwRoTC8i2ytwLWzBJgbdPz5a7qjoLgpHFTzz6v7rhm8",
  "key41": "2ZKrcRYvXGfCLfRWnW9HQg1NJonRoLwBfFRv12gvXGDMxe7t5oYrdSCnmYUsDSvZoMbKxohu1dUrNwBf4qTh4V7m",
  "key42": "4RSoqTZZjbRxYoypxiQDnoTmsxWRrJrj393peWuYHbaNKs3rroi4e6Bqu4BoRF1XUgHKhtPgWPNteKmpQ6F5UuM",
  "key43": "56C2oHkewMUwT178Y3sjQzHH9c7MG4VDg5Czgv3aoP2qMffGBsK6fQQ1qP5kPE133rdCNQnc4gkZW9XuTfPsZt1J",
  "key44": "FvrXbFCS8o6mc48VVahjEJDHpTCLtLqhDvjuMMWKUb2axPwiYYHvaTV7atcPvbMTAuPUmKB6bFZ5evicdoBeozu",
  "key45": "vn7p9rFfvrKhHVfAHApbynG7VEvJUGgYPgdCKPCZMyvovmJvcP6egeQsQ48ocBwCENbvSqcoo3VC5dM45Wti6YR",
  "key46": "s9mwzk5kj6QnWK9Jy7FGTr2Nbp36jqKRmWZCkWK5g2TAdZHRqdxzmPdXLDDTM5rwGR7vobEp9vxQNB1R9Rar3AQ"
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

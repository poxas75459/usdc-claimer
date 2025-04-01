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
    "5g6SNF6yBnuDYkQZUCEcgRi7ap3sqavRw9JGiCM8tbNAog7ury5g5KsgvmohmUirgzuw9opyz2M7eLfNxQPmt6Nc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25CbKSo1xnnmMGnP4RdwWULXxV5B8LREMM1pKiR8HCNFv7dsLjzE2EpF4CeaDXKrWe6pghVBoADSSJRVZe9jPDJZ",
  "key1": "4UGkArwEEihXx7XJNBoeJm8rDoMTe9kreF4a8ePeu5nKtFcjRJkM4UEduLjtB1VhHo7H8739UogUt2nV1hJ64E5m",
  "key2": "2FMCn3EsZbHEzzgwFZdSqmnSptBbcGmk6Bv316PGRVQDFB5TQYpFo9JWAHegeCE2ssgnsmvS3MMmzSNpF8ZpGP1E",
  "key3": "4TFN3z6Buk9jZu2vVgKgdMHKyR8NAZkYF7rrGAVfGsxvJLYQ1gkScv77crntaU5KxNp4Kzdb6e2yyFPYvEi7UnbP",
  "key4": "e9tmxTHpqHq8X4wLUBfbip7u42jSbEtLcVa6RmdUNiyE6DoRdCufhcHwEUpQqYJcHXo8h7Y2wbdGv4Gmykn5BsN",
  "key5": "525Sk2pogKF63eaoY1BA8R7ARtcLBTrcke9DVJykZr8WqwVLCp7DQNjxQj5ZLFWwdCQTr9baZCyt6cqTLByn9AHx",
  "key6": "sdXk62iN38E58hVdREW8rTwT33ZeC6vwLyL7ZTWWNmMmZpT95vTEjLwjvPsSuRuMx1SHxfpkkWc3LQkKMG9HxfT",
  "key7": "XHxmWZGZbfkDFm4yhKDmWeUjG6qjT6HxtzzxR2W5TGEJjeizmeFiG4AEuHB4S4ymXe2MPEeyB4hGMePixEBb5Ws",
  "key8": "rFdwUyKLPj99yPPyEn12NastCA8pBzKuRgs7Xuu4NF1UCY3Djnj7UHntZZdkr3ZEksov82RtZsmm8UqiBoYxrYo",
  "key9": "242na4vyzvBeHcSrEM8jPpU9WJdZJvhemAZfUckyvJ1CrgzwPJ4R7BCDNqos2f17rvgoyVG3smB43XuEmMyc4c1o",
  "key10": "4TYupvHXpZnnxB7mDap5eUiYvvUMh7PytcTZEFUDp2ATb1wzwj2mvwL1S4Cpcraezo2ELdGB7gtU79tFcri1PR8x",
  "key11": "6579KTMH43tYZhPpuKiwAHa7b5RjPF324L1XWjsfDcds8rdsHmYQqw1FBD95Sc8qgG8xBYPB5Z4fMw1tyXaE85EX",
  "key12": "2UiUnh9Hyk3mnpNhzeyaTYyuXEKRgpBNkTkVHvckTfuiVBL5oW7MkZ6UsHvg9UkHWDA5vviRfWtPmdrNKt3aqtFY",
  "key13": "5zadB2CHmJ9Ftu4bGgEDSSQni1tvfM8jiPcxKvfbP9X357oA27t9doPSgnXKCW5dsQDNW4ZouNEDdVJ2a56V8rmt",
  "key14": "3fFe5Y7tuboCkxtWyPKi9ZjGEUPuH14QC2sbXYHnBxFS6zMwUai8mR9zFMurVuwiN28uwqkXbAPm7BZg7rSmAdSF",
  "key15": "xMP4rkdW7XCaxfqeyNgH9gSn4XhoVZteVygcUVwVgUv3LwHFHurArTMdEW6aoaz1jiknTss6MU3i1baMFLBfbf8",
  "key16": "EPz6kafXQDWSPaA9t45TXopKAP2FcL8kqZCU5giSskLfcqr5KVy73U5RLgRdHmmiikLteWLeGWYL5NEfTur8tfk",
  "key17": "N881Ls5gadj6hrwiXQ2677iLnS3JgcdjGSfPa9YuxqkaRW7g6swNiJc4ejB88Hn78ufd7wi3uQdhD1ihHZyzNS6",
  "key18": "5NgPwwmt8U13F7CNRquPDXePE3YHSUGNt3rx8detmUVZzGkuF4NfgdntXLFKavZVy7YJyDjAikSSYwR6B1rL7EZ9",
  "key19": "4GGk9h8i1tyUckHnx2PGXxmvARnx2SbxxhiziudveHp5KkWpJ1kGaPZLNC1wxBXeHyq9TkD2z9UN1PzsDo2Dkzwi",
  "key20": "3h91df983fyWSHGsFErSfxvoDg7mu5MNX9gpJYFoKq6tA2nTi4mgViAhiA94Ym3E5CQCbrKJ92mHD4z6DegGWwUX",
  "key21": "c1MZTxMZ26FgBDb8Rf115dkeKW8cgbeRn11W5Lxq6yvQsKtWySUox9CrZVHcyfVTZ9VnHRHknESHrNtV6FnhvwL",
  "key22": "3vGh97JDmwkWTrrKWCRi7EvyjEgznWKjaTa6T41SAtRFH3FzybmZyVjK6YSDgtmF9jEK5aRaoohFQ53xg714o7tH",
  "key23": "2e1e9GCYMHK2b9cPJSfBuGnMAhQeWn7hubNsEXB6vUN9Rj1KtUd3u3z4E1RPzxEvmSSCtBRbk56HhNoukgKNY4rE",
  "key24": "2TgopVQDA5t91zCjXTWEMiUCBZVP4Qo1zWp7DKmQd9S1Afvx19RjYMUEuMSxhfTTfp7YdAwBpVAo7dR1rpWmXKYu",
  "key25": "o4uYnEk7hLrFb1AjKRKpRSeWGX2BYcwjkcMnuA86S7D9oDcGAGoGDj2xzfbdTnBidj5j89GhJwS3DdC8w88DjD2",
  "key26": "rimn5CuXr4SVtUERpUQVj6DGsAPq1vP9manyS7HsY5Afcsbh3ubcbhAZe93o7rMwQNS2JHRAMk5ii4bpH3wh1AP",
  "key27": "2PL58s2xsNPdKLtPspdCa49cbm1tmvKiZgrr31PA5kwYnKZMypPPT9T9eiP4JaFa8gY8tHESXvuihugzBrqRuRoK",
  "key28": "51jfskpvrXKSiEXtvNzdFHuwGkwGjUsRoDykLr3AazZxy6AcLYCzAKEp75nJHJRSNjc55vUxbZAbyCNRG8Ltic1g",
  "key29": "4SXEcYM3D9DsefCJEigDNmepqBazHMFErT9eJmnFngGPAsv4FRZ5iMkuiNLmrzydEyEKJM8oSYHPpFyvnFPituZE",
  "key30": "5YMpsfzMyMz8o4QZNUFwfYEJYSmXcfCrpmzhg6etYEPuHiyLzEqFECAETSvUXA5fMNCxp1CmGAhKzDxoMfhW6oHL",
  "key31": "4Jj6R9WRYBtwhtPTDKEvZXkhXCYG8LthqsqpFv5HTyQSZsiVKKC5giSjC56oDhq7KW8akkAGrjLw9vC2dnXXUU69",
  "key32": "58P7f8aBGmvPWu1AMfYXWPpUhVWKntTiuYW1VqDWgg8SWTSv6Z2bpUAQCnWiZWrPpRZudZ8bY3C5AHmWoorUewQo",
  "key33": "BubyLZbP9c9EaDSbx1R3o4MLZ25zVXtEXgNyL7h7YPKfUHYkEPpSog7Kzg43ZDWNW5DBesFMsa1YudeGtxipi8c",
  "key34": "61d8nx5pqyrDBvso29qABNEdfXzWTbwb4N6DbQBbnUTHnLxqeDSZFXTpRDbnTyKjDgCYap1WPngR3WhXToq5ZToX",
  "key35": "4WqSM8qa1UiZaPxKaq2CTkN1WpRxmWdDsLLSj1iBwgrDAmaibaCfuPXErZW75xcVJPojPGygUAAeBoLCsHQRjn4H",
  "key36": "36YoarakG2eALGgSrZNHMunA13xpjPncnm7muJ848JFnufSYUrRES8hhkxvN2qkb6swEgRHwSissBw52uZQePqz1",
  "key37": "4S24BqPJcsNczKnzFx9HT97qeCHPdpE22xTUzGAEk7XNLnGoxKwhu1wTRXeYFwSkvHf65NxhddxXe6FHnEPZVFA7",
  "key38": "3F9Hcmkpxh7sLBseSn3RGD2jbhMQapJUGCrvjQ5aNTpmWpMUoaobrD1puq94fABZGMBxAyKGFUAxXWRG4R6MfCp1",
  "key39": "3uqSM7GPRESa3vcGcTH82NBsAEe8XWCPbnJWvHKVUMSCQ5LaDa1CX1PEX49tu2P9mPBbdyGTh6QY9is4TVe77DHh"
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

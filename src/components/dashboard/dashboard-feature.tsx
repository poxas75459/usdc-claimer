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
    "3RpQASdZ7x8nuLV4LDqFjkEVppi35VjJiamQjNTuhn6Ycby7xWNUbAUwr87dnpmd2x2idEYPeSoEjtL6yVYbaUBZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sxCTtwCN8P45Cv3owzSXVhehqDEAuQV5476qUkW4zQUAre9eictHQozVktdohfpXMoREYzq6UG54nUPvLRuTYdB",
  "key1": "5uWFymJRSQzGruuM6nLX3KgPLtfPdREkwhUGXhaA3GDMFSef6J1F89VMwU27fFTGAAyV9wkuUN9mLp2mvRSXQzPH",
  "key2": "5aTKssZh1oWK3E3vtNKy1UosVdQgcgUTrjV18grL5fvzyhj5SbXrW8MUt6qjimMFr9j6NWGScJBcofg2fWufLbUb",
  "key3": "5jkd77UAdrzbpWUqK5LLje3dSRzVCE3QBFjSKR8kvKxZp4ErKcoeZHkHgmLEjUK26T5cpSfR66wW2EGrS94F5ShP",
  "key4": "5FjvXAGyb242u4Zey1srtkgWLEXqEHrUcBHfnmkFyV46UMZVCu9xTA95b93qhx87MFgFJReZFQWXP46w6C57cweH",
  "key5": "5XQAzkBxUZ2U1mFb7tC8GDaiQ2kvS93CDKZorL8yBMqd2V44dCyWyB37RnLYdPdJpUQFfAi2i6iuPAjsXzpdcJkd",
  "key6": "3vvQWscFEz8X5odUaGGh5GKrh9cWZncE9KsZoCC92JVckwqtoz6aMZPdukyVbSwAQtMiqSZYmCJYAvWXTNPvSLgu",
  "key7": "2DaoQMs26ugV4qDtCcS5gLfmJFzS265t6SQGgi3kECNExK1zttQvYZR6H2UokNQiD3ifdnPvQt2siAJuEwm5F6i2",
  "key8": "67Vf1rXMqYJPSLyMt7KHgHvVFXdsE1pC9UzUUYSJehLZxnYoAp2TaVwbGYUqD7iNv88Dg98NcvXxupg8uTZEUPRc",
  "key9": "47q7G878JzApBTGb4HsomNqPWGYX9GMGZM1qD3McurbCT54RDQTX7GzGbntvj5KqeMxYEr9p3zF3GUSfggKtvts4",
  "key10": "3i1M71gffzhHcv23FqPPsby2wyomhU7kEWVnmcJxWp8HPzaPjMHZYkwWJF9JBCPaUwoScq3Wj3FhzvYqvAcJPDAk",
  "key11": "4rKgJc5LrMi1mkHZqzCR2KiQQ1z9yK8WVgUqvECtfELjn9HKcwgULp5KvZiXfy7C9rbTnnLs9n91PXnHw2hXas1a",
  "key12": "5BuDysTmyRxCZRjK16dYkFdK2DiqADyueEm2svbPMWf9or7sWge1L48NcaTZ6LyNv1RF7ecf7Ads5gKxKDEkq2X2",
  "key13": "3enYCLWrNKjtfpYK5MvdVxGG2TbCPYYSEfmc8TphsaFoNy8qVtYkRsXcnwG6N2eKBcwifoK6zBpWhePHwGF5XUEQ",
  "key14": "3VudYwpEeGXSUXqoN3ymVdAhQNN8URfstPbxYEMonGzzTgTP5FhUp69GWXgnZZjGHkt2fXz2ALeSgSdRmx4WvJtp",
  "key15": "5z4qX3uLmFxdAg8aESW8MCNGBRJngB8kgs2hnBQL87MXHSWeafyEUkaAFg4csVDTw2M3ga5pF8AvRYrwfwd6r2i6",
  "key16": "3wZguq6DrnWRECFkQcTHWAntiMA8BCdp25CZgvCUMoQ5p1og9xwBm6qANLp7fF9djqSAr9AK2oCuVfssVvLU6Lmj",
  "key17": "5ZbtbKBAftLfrEvksnXRijtfHMr7TtfYuokBMLqPfvuenwqUYH2XTvvHgviNqZeotkWEKcWjGwxwT5W3aqxz4fW4",
  "key18": "Gt2Qib68SRgSGiVxTyuBhpM4av29aLYsgJ88rHedx9xRL2ooUdZcxWEQhZurKHYXb9s1SzYHGzFwPNoKUJTfWf7",
  "key19": "3uTus26sMGNTXn4nmXuEH5kaDRBtm9DvN6uyZ34bfBe7BkzCv497Som9omFN6Snx1KLXSGyqALFSdvsxzmGsAH6w",
  "key20": "2GXZ1X8REHZqbVCe2mEPrYseuCEyh3FNkjkwdBqH5JzmVw48yAX1e3KLbBq63rAUUCcHfbF2AXqWRYCDjaFiWHjs",
  "key21": "4kWfVQeWW4KrzrGpSuJKfUDQ4D1JDsfWpTMiZ5dJU3aCy2b51vwGrdN7Y4q6qa5dQ7kbcvAYj1V58aZfjXZANmib",
  "key22": "6FRXpPwtz4SD31ZVBbDtqBq7SRVKs9DDMfFJYuUUNXD55izwxxDRbh6BnXkY1HLyFfUHfKiFpjfzxL1WtA9uckX",
  "key23": "3PwuJjcKFTFKnDXRJ34Yo949hMo34EXNQzhLT5WLQvgbBwnsfT2Knxq2W4zwwof3BHJqaATzhzR9ih1cYVdp8pmH",
  "key24": "41PS3o9rsEggh9bV6fogTRYGCVfghyrDjqUNu8cLF2oaEiUjvdFuA8ZabJ8sTzxXBZCSowLbg4667P9MqU3G4Ye6",
  "key25": "2764usVqSYdGWwchZAAsC8DP45oXg6wRw3ErM9TR1DrKKmEMhgWXyvBRV5pwZaF418jGJ3pjF3CqeFNWsfdvN287",
  "key26": "5dmZLYH886H1JHwNyoGTgn8dXu4dMz7ikQxi4HNxMJWgD4KiyQW1sScEuddxXGTTcT8mQdHZ3Y2v5KmWqRixuKDM",
  "key27": "5JdQavnwCjKR58JK7xKxeV14TpLdiFRe2bkcGKs6pwHG4TfFAPVur2DyAKNXo4gP147zEY365ktzduKySYMMjrTj",
  "key28": "5vCsnaGrGMGtryLVUToSbyr4ABqPdxvak2EoBqg9cTFif32ns8MJUGDUyJ3aewEs4R2sGA3jnNaJFVS1U4JVaEnv",
  "key29": "3LxqeneUKJtZdvGdQY1TiFWJAVYzG8oJjQ1MWZzJCCeLT4yLTpUzJh379LwVW4EoPRBmy57Dqouj22T7zUizagn3",
  "key30": "oByvRPriV59qtv3McRsKXGAk8vtTx9jTR4KBYv3EwsXXRmyfA5epPhNCUtFoAkMUtrYxU9Uxkt6vM7NKdkLyEXZ",
  "key31": "2JT14xuQzjW24tBhpsCm9BJ3D5AUkCGRyt9nsFaZdtPQSQ4aGub3ipqny9dcPoNGyR8q46wtie4n9NRFcExw9m5D",
  "key32": "4iTp4fEjaMJM4Jdcibi6bWLiEAXC9k8HgTp1ekJc9Y5ciRWPWM4E3Jhqg5VJUjsWNpcaEwkUqwyUpyGMzUX8N1H5",
  "key33": "3LPyEYxaibaEx2JwooC9uTgyqzHHJihqBFKvoH1LavRBvnV6hVd8ZzowSSQgLwyzh5mrTMqfTcs4xGCP1ZAJJEt2",
  "key34": "3xZMsi9fSqyvckATnCHZ7W2h4B5erfqkcBvPvNmj4rVoQHp2C6ehnGk1oWHMrbmLPMmm5MnCaxAWsJYwrnKRiFu1",
  "key35": "51WDiNAZ4tDdSoJvDBhufrVA6RgtdsnCUJGuusstqeWQrsA6vwhVdz4FWjJQJGGz8UeWHvgNkpU9gm7xXAAcKk1T",
  "key36": "2aLfZ5yufXXJZjhKvtdM6HZRYe2tV1DSo7aNUbGvVeUwQxDde3UQnDvYf9nQezwnNSjcodFdJAH8QFw7TvhL3fbs",
  "key37": "3UjV6aY9HannzKehn5u91VLaVY2jskR7pU1VwtQDzWSiMuZwTDLqu9LESu88JeaSttfzo8j3HWcNhTEettWNrBen",
  "key38": "2N1S5XAvw6rVgS5RsWHKo4H21z1usXmnP7zyvuqefsVQiKDm1sddrSrxhVsg5Hqnisq6NMxUfsSuKSVZDdeMQHFk",
  "key39": "5nRszCcZRNoFQjozfEBbtRcTQWuMDWik63ughDpouMyAHmUGEmu48hcMtmAgYq9NQnrum1hJisimi9cy5Dpg2sUP",
  "key40": "22fAja8xdSjGem3SUZ5gz48iEeLzbRwfo6VA5h8Pu36ee47EmQGrjT5kPnhq1kSNy22FgghsjQbJJhfU8eRj88XG",
  "key41": "5v6oSAPnxXjuzfwrBEowq6jkLgcAnkcMBUmEd5nmUR98gcersTytAaY5dSXoC8EvuY7xDhgyRMDdGKpgK7EJwEXP",
  "key42": "2XsGEUo3tzXwpH8mrZXF2YLfDHxPnfjMFRhTp7tdtv6k3c2jKWWNZAEZtWoaZZZiPewRomBA6Qxt7wDGaxArVpQE",
  "key43": "4eQgeQfG4nNiyAtVTHFMzrgBZ3uUXtFXSGXERNjJuSUVLfcixsm6tMn9SH7EDfLt9nq1RKS4PeqwMJevoMu4HwXs",
  "key44": "4vY9kB6FLKcuCADASz5MNaWVcsfLu4H6Tbw5LRvcTaorkj1adsuhHT4buKZFwTPfZ5BHs7SDbyrsto1YahARoit6",
  "key45": "4WPZuTsRDBTuyCGaJfEBwtxYUyZAYyfCZ88Guj4pD4MVD1HHMaMgo1oQmwzVaQ6b17WmK6EbDyEhX1oUvbVpvtjP",
  "key46": "5BgmoeboTvscXzyJhnp9Zbnah8GaAE4nXUcCG3HKoZRYSHLyoDE9Wxavw5AkbMKa1vM4EWjZCzVAoYHUgQzTrz9A",
  "key47": "3MrhfvSrscakhnsHGuAtRZNfeg7wMgPWQHP3uUFe7k5po3uk4x1k3UGm9LqXMLNzB82DTkUzE9uwkKNy7v9Jwj5w"
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

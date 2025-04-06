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
    "4LQgefwwVZytarFj4NwRBJQKsV53n2Dun58RSQefciH58quDYJXu3RXhXmCYKWr6Bk118pXKk2xDX13oyn8cNXG8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Dfi9tr3RMABWoiBNRdpbDQjZ4VcekB3EyjqquSZ57Z2BSkVcsaEBFdbJhAWMk7NetGwb5V7TuoUi51K1L11MgZi",
  "key1": "4wpr8NjWPrNfazvyqttdRw2ywR5oFVzyxN7GPW2pBFGeiFBuukJfjWFcXi6NFzPdYZCg4yXAnSsEx3FSqfqpqupE",
  "key2": "3z1enAwi2MvxHcCLAR47UHg1x86YB7Z7cGe63FszQxfs4HDEKGsJXWnZxom5VNdkQcuorMFMpX4XtXWtsXsjDAxz",
  "key3": "iSFjN6E8AaKWFFdkeHF44VnJaJYyMpGiFKbhdce11JVQYXLTunRZutvPnP9f6aqMAYuy3cJ3ZCL7aHY8GgR5xzu",
  "key4": "3KM5egkdLH9bEAkKwzupsaZEi6xJRYSB6C7UzdW677rRmAyjWwSVyRr6YvfC2Q1L2AoahU5PjFvbN8XEq5cfprBr",
  "key5": "YVpMhQZbVFcxFpbZ6E3xeQUgc27er2qUj96boMwtkibsLNB9CbG6WES8ZDJFHAvmatAkjztv9XBQu1BcgtRjHWX",
  "key6": "3AVXkKYHqqxtVKM9WqevemEaq2orAafujDcbiJtSaLGHr4NQyLg9Xkx283RZSjjPq3hkA8e5e97aL7P7guVWHXgh",
  "key7": "2qSkK165spKz9NDUWEizF5C6xj8M1QVogFRxXb4JL6ZMezot8dWDem6djaZwQ1NkQWMg86fs6oVPZ63gbsegwF1D",
  "key8": "sECh2okohSnxbGJsqDtQkmiBgckQd4FcWBhdn4mpqJWSbuzvRnDX1tNDHNsoeEQhLwiE7EzNQwCiDpKNsTjZeDQ",
  "key9": "3mSLPMunALHxK1SCLbrpgLfanH4THAxDMW5WxQS3uor527H3NuQCvMM4XX7Qf13ULUmdhCzC7Sg6XW5NV6QitjhW",
  "key10": "4A6z8u9ib5wkFec8514jDHD6k5iSjkrbepETT84GvMSPejZvxxGd7VUaySiZnCkxLiaoncnck1SV6VnAr3acH9fd",
  "key11": "5eNjjJ2S8Xi9C2DcBaVrd1QgaNRFAyTUXvMfj8Wc1NQt2TR86wruR9BhtsMeoFAM38pBeMN5ngu1LoSAFzRjoCCP",
  "key12": "61Ms88yZkFykYXWPGzWRxtWAKG8sbH5FrcaCJYenCWvZzWsEhsLr9yAmT1A2NA8ZapeVp5dE51pMTCqU44HJQJWr",
  "key13": "3HoZm585u9fsvhwkfNgUwvKBspkfxNx4fSNtFtvWFhUVVfsCFNHZ8DyfNZnGLdrjSW8TdAb5rx6oBH8wBVRtp9mQ",
  "key14": "5ytL4uVWVVHivZbTsUVJLGUJtRuf43AJf8xTF78pcSyADQoXj1UfCpsJnecLCprvAbrWEfvgZxRKuhnpSTjDkQqH",
  "key15": "4dkagn6LsHKjbJVmDUVpUzm6kBsekG8vQnedFZCmSqBLhiMVzbuuMEcdgT8yXmQ14NomGmBh2MKBqKGYYzcXvaxJ",
  "key16": "2Q9F16JfXs1sgXZ79AcSWP8SVZstCB9USBeEdytqLWjv2enkG9Q7TRJbwkpTd6vcbBksF18WgdUyrhoQa2tALnTv",
  "key17": "FV5891dYeAq833apG2oUx2XkvN63LM81i5k2pzE6WCEoZ6wk8zWsGq8auE56XrQ4cE5CKRrzb8V1dbM3nfNsnpc",
  "key18": "Y8WY7PL6WPqvuM34LbP6jb3inZGkoi8Fd2JxajT1Sk5GokWwLfayKut7yb6Je11WxWNpU3P4bRojocdNyfqHV6j",
  "key19": "SRNRdb61LMstk47n9xu5VhTFgvP8KWJ8ow6Lzc8QXFrUJ3DKP8rauZeGzFeQo3LpREmgrTSc4MRWFBtPyeDcTAQ",
  "key20": "61viXQcQJdEXBUd6UsMtaD4vfd8HWg73Sb41osoVoqNGC4RnYqVpwcSQ525ZaZxpMVedWTYiJi9pK2qsS4K2nuqF",
  "key21": "3gvJNbnjAyfhGCXJKcTNrVqeSgnUkaBakhEqhFNcYqE6uiaYkm6EQCYJt4H2GCHorS7d2cHFqZTnEBpe6npYtuae",
  "key22": "eC5Qa3sixfvxvjezB96uifaCevqJosvVCYwTwphDZJ9cWmBgYvVvFuszDQ82QUDgSSqjzQAmVH1P4GqdwNAW4rZ",
  "key23": "3TXt6FeZopWBNKtWDpkKKqG4Q9Q981AByH5E9xc9gBsT4kTWzamP8c2Gy1RdAqFedp3KJroyFRWpz6prgW5xdSd5",
  "key24": "5NJmGxbbymZ2oH2Wg2YhbKXx4vcWYS9hLQqmthwL8ekuCAqjhxbMuJ4iDqPaVvMxTNFhrYXvTRvavFw7hRZjrVgj",
  "key25": "2eZ3QApBcStjyhMceLVRzdYasuf1Y1gwdnWBXTwsxgnVg4RNZ6DgywZC3HjqtfCMeyGqwRpA9UjgXg5rNCBsM9aT",
  "key26": "5ANsJ1r1he7yF2dtpLXdXHKgxRDdYv4rC7hbeKjyCjddsA8TVGuKhmnhCfbmhgTLuVbdUjpnGNfqa1iqDew2WHoS",
  "key27": "oW9uQuxxi2hqHnY8rzVK3sKeFDtTEDtVMWKcK2oUsVc87ATzGwXsMmTJj4MGZdk5f9rPb8x6XpxbE7H1UKWBtNh",
  "key28": "3oEijbNENYMtsqyPUuFoWyH5j6onvJhM7U8YA4riusSNhkoh8L8kjnrFZR92v2R1RkcUCsR8g77NAPGwwQH4kDzs",
  "key29": "VvG9fc1MQBHoVfahZtGKebWoH3QUbW2zPCDFN4ehf5fpPvkdh9b6qdiFJYrUUoaLf7Yoa818HdQ2gDtbP4jh6kh",
  "key30": "Gg68owXuXEdBaUmFdkBQdhQpzyBPzwvFZjuFZSfBqztdrHdBLLdPYhTFRLVKxSFLnWpm4Exfoc5Sz4Bzf12ZH8Y",
  "key31": "4hFMp5PigD8DHVDtfQ8MRh66T3KvbdQE5Gf8pSQZi8fi2UsRF43QzGtbFaRCZRGLWtZDfW88iemrECJgay9uo8Li",
  "key32": "3KTxhgg5Moi4y7HP4Ak7NTtCx9vdcLHG4ASoCFmkMGT5LaqrrV7HR4NMTtTtRss1aW1BuUgTsZXgiatzdA4BVFyY",
  "key33": "4nL4QBe7EQBa6HwhvYqexxYN5ieAiXzXfm9uWFvNoFK67dXWd41hAzFys8zwgHm77mSGawxThXxYXtwaWVTGsLkn",
  "key34": "2esgARYCDmvjov66vJYGXDSsxWxs2FJenwLFgL36h3jJoyo4Ay17XyUVeqhwk9UzYszTQu3dTXxPfupicuoLcRk5",
  "key35": "4EydfeV6Hd68A6NnPi3hmVyrs8cdxNgQ4jv7Fe8ps3csWCfWSujY7Z26sJNqt6UYMoZKZzTpbgxGdzUpxXEFEjPY",
  "key36": "5EbTtBBP81oLQrkF6p1it3iBGLJfm6WgxjeRPYBkCeALvRW8kEq9B2bq6ZpdVmHZDVyr7AejUQMdqCsgRQpSQhN5",
  "key37": "4eQLBk5wmYzyLPfHWWD9WgysWuVjqrq8BBLf5TSmJfCNXpfryQCD5TrEnLeeNYMDxNKApSdQoypgF736demCnN88",
  "key38": "24yKagwGLnCUHcBE7qMVi6rar4SSpsWvLAHgvCYojULhEtfbeypexgWavwZ1Z4EbM38vqS4LE6wDteRrXBHntM3E",
  "key39": "5vxG85PPzUr8d8FMZAKhNzDVJ5WFLZHRQTa9PfDzV6uaLLTFebtAmyFs8UaNJ8r85nryHJx8VS3uSWjBQ8ZN6433",
  "key40": "2cFUKFRbMgU1LwMduPuHksqBg1XTca4pWMVRMDDQYcv4vS4W7rXbicyq8eQHuhZ74rSPW7ewVWdt8ZK62FcBhbMR",
  "key41": "3yfMnE4k2Bs68U1Q64VUgcAzARxUp759FC6QLaxvLxxDd4DDrM3UuyffNS7Gs1xxXyAitGevyeW1SK6zJA5mjBhL",
  "key42": "5wy5wLYaDbAHDuKxJB4ZNVKD9RXsqRHQccNUHzQs79NMzLWEtoeedAFwcs71Ggt4tBaMAyAAXQubR8EchoSbjYEc",
  "key43": "3mrrobCrRuDAh7gRT4ziYz1324MJDbmxBnZtZH6TKzwE6LWDiBcbJnET5YVX667S63RootghhW4qBnGzh1vG7Qic",
  "key44": "7vgWfKcAwa9NKafntUZojsM9QS6DfudXLAzyHaXDd8y4EY4CPwwxemeS867BwRXSyEzPfoENNQNdD8Aohu5NaUE",
  "key45": "4S7bj4cYXhPQ7KcxgpRtqHpHUCyjiuJkiP4n9rLZUcpFsQSYBnFCkkKMzvrgyWN9Rw83X9pYEA2JTzEgXdM42bp7",
  "key46": "2r17LWedRCGSg4y3wWoXuDPLviByDQZLmEXzJwH6fzbX3gNbJggx4bbmPxdcMcpAxsbbziGwURHAiRzxa8cKRA45",
  "key47": "3zhUiybdDLnzCqXtRZetzhDSSMU5dqS57mgUWn8zfcRXErK6xSvhtcbxMeExZJsfwptV8JmqcdDrqi44F9NNjFr5",
  "key48": "4w88UPeM9qWSdimUafRf3dBaoi7CzsBw9AsPnwTokNffPgP1GGE5KokbdxVvAQ6Vt6JeFUYk8iHcN45kW28ofcYp",
  "key49": "k1ZdgdV3J6LLs5w3hsdshSWY9rPgBc76z2AwwTsiRYYwv3cihor2zorJcUGgLgVR9UsALYWfmxSe4g87UAbsC98"
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

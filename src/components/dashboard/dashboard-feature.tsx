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
    "66V8Dmg2BuBPYYseHaEd5stuwUCitPD1xDmRF5tbEp5ZoTnGpTM4Hy15CWrJcJDYw9jjdU6TPdp2wwzBwJ5toJUD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P1LibYfFAf9gWZwr5qAc6XF7geG6YmPnojFrVGsRBsGSp99LMgtBPQa7yYqwebXYyCEtn5xWfYfwkeQnCVhWVM",
  "key1": "2c2WqwszZgVLeYE9KXFNep4gxvEwzcCytqfWexEre4vyw6bjwdoEYYqZ8DvT3qscV9uXE8d8m1TVvZc3jvH6RTDU",
  "key2": "5RmSoTb37sH5mkWRUxdRfmNApqXKvCWXnUBKedXYDtBcpQdAefv5nTCqjK6Hx48q16YctCVRiEKLLUQokgTANqg7",
  "key3": "3W1WS3UkfeKt8Ff4vRG6UJxCiZL4C3TA3pzFFyRkzjLMqkXvGsAnDfqByQEvUrsZwCeZSVGsUQxBwkqQi3acbcic",
  "key4": "2HUieC2rLa831uRQdHXLAUUogHkJvZBygze1VbNjPtC9CtNLSBURfYrrEY1jYYALMoy1Nuwt7jDfQarygX8D7sZZ",
  "key5": "5NCj3tfm9BHGq6vK7137tDXBwMCf252tUmWDNM147FkSuYupp3ZqtTR4NmwPGKEYupcTA6mL6jnvGv6A7tNiR9Px",
  "key6": "4PZheDxu3Qoy5FtXoem8nXnEuBwdszZJwFF7W1dH1fQSrWKsvVtnNQZFapcv4SuDbpdqZHHFKCeWsCP6pE4GZy3J",
  "key7": "J6X5yiWNm18FTVeTHURBNa6nqNNYfr71jh9GKzCJi2M9EQsLHU8muG8arQxK94vizgUTjsLcx2KL43cZz1mXfXy",
  "key8": "2xLwMHZyqH7QwMLruP9RjYysejcdjwN6HnenSid1KbJQUC3TxCe94yfxinaLrWFtjyo93YLGfT7PrXeRYsRrUDz2",
  "key9": "H2ZGNZAsJz1RsuvNT3VABsxFCS5F7HWQ3rQZR6dJTWDctpamcpAMgts7NRJrG2CA5HAHTdx6DYjkmUwgHfrNqhV",
  "key10": "2xQowsTeM2SYweWs4wdGuznaH25nfGZr8NPM13obT6nBzp2tq1PVEr5sLaue45wBcUnwXPacUTdPpWMMDttzcw1W",
  "key11": "2FwDcFXTHe3xyfjADhtM43Qd4CfP1hbxvGUd2U4UsdG3ECPGrCCGWyWGx1rieVKmUoLyzXUXBikmjCdG62NZhUvQ",
  "key12": "4WdWNFYzxqJ3Ec1MumFffw62iZg7icTgb5MtKR5xp7RswMM62yeEyJzKxRDfEXhdbGVDxc8MGGJym5kHmAaKVf9D",
  "key13": "2gk3iUJjztpGuJP5pd3w6nFbo85kP1RaF3KXkxnxK46xog3cqJgxh2qKGL7VgNgeqUyHDh4V2e3YXaac8MaaPYo7",
  "key14": "4ZpuzDvcoVCx8wuf4p1vRMZ8ChD2kVrJCBNT8nLV5gScY1HKbJpLCnRgcvqX3HBaS84KMJFT8op9a6WdPE5Pszj9",
  "key15": "3cF4nhYdg4N43brMrUHivu2Uuv3bmPHr3Qfr9MvfK5XffeKAswn6ynxV22fR4u8vmNh9Agz9hrJAPhss5uug6MoW",
  "key16": "3b3VMQ2Dwttv2usFE6CMwHArNANj37dzH128Xi3dkbo2gDQpoh1TccZ7wpLR45Qt5AjDgRtCcV2F88bvaZXAQLKt",
  "key17": "R4Gx93po75MGERm8V6VHb4S6MWozJEkGVsd7A11YbXHuysEHWdTvU9JgoWUmPjCAeMgNHuhvo5u4Ak2GbYsRyxU",
  "key18": "vzkCMSAEpfDF6hAEtX6J4W7hT49yhd9m6qCn1vQjRssHhwNCQ5bro2yyyt2AApNc13jLi7aP4sHHL5A1HyVg7ZB",
  "key19": "3tqgSqg8HTB8J9JeXVVd47WgMJUVEGrJWDndVdbERKRPAfL4f5xXT6q5kQsANSv9KNdg3158KhdperCjQb7kea2o",
  "key20": "36DnPaCuCKcWz26D37Tv3sKH5UQBMx2VXQ47jnoj9Z45WNmcYf1FRTkv92fSdtwGpYYJ9wBDGwiedYtwv5Sk9PRZ",
  "key21": "5STeoc7kHKSm6n2ZG7j9HHPrdh1LosynbyR2AT9NJ5npXiG3B5gPfm9GNNuBm8qVfg5W3jXx32UwmKKBTbiSp9i5",
  "key22": "Ty8o5i5N3MHP4GJzwSUYGWUrWRSvEaBN2tMA3u1hQFMQuNGNxbaawpyTCxA5wju7FgcyaA718xrqwZuvhEWJhmS",
  "key23": "61Z9GUUEw6Qed8ER59MrRdeK3jwjDK91ibykFhLahoUV38tECD1F9g9NX3vLtrQJ68M43CuvGGgf3kbKzFGH3qqY",
  "key24": "5j1hmfNLpqPhp6SJVofHB9es7xZd6eytCL7kovJ1ALMrsLhq4Brhmu3EFLMjhBQBYus4G6B1h7aTJWw8EhBHoi4r",
  "key25": "t7WBbtwzQSmVKT7ToeWJAPiMPk3kUXnr3vbHMS3DJzzvtj3MJ7rvBfzkC9xtXsXJA82TFKV2nFo4JGHQub8EKVn",
  "key26": "5SjsPSydJf1mXh1Nb2E3goykRByb7Mtgn51dfAsSPnxpy1xqeq9g4bPHTNFyNojzTruo7aFtDHDYnUkJ2dK453qb",
  "key27": "4kkc9sTkLmjx7Q3MToYDDKd6ZfRuuPJD69tj3mDAh1wcfnJhdCXYyxebcJj4VY2o16zN1oZx2iQRvyH51UHNApBZ",
  "key28": "4vR4Co36aeFRK8gpqcLujvksHbNpSqVz3L11TemTyk8dGa8bHZ4QNT4QZfwpZVKJgFnrDNJ7NUzLFpkZh1DfpJVa",
  "key29": "4EoZ2WSYWHDMHpRGTLsJ1DkuKQtcRRZrvRKh44CWTpDu3pGEvi8G9syhGfaswrfta2TcQd7EMKsxR7wh1svKXsp7",
  "key30": "7PhrBF8rJQoneT3PkBT9ftohPibNWYQbuSnQNSzdUj94BNeXHPmr7LrJJnpiCYN1CFvwSDdEjuCKDQV3MafpRTt",
  "key31": "3wgA2JKGKxCaufL4enGKPkp1Qi51gvFfMFZKeWZANf8Psps3d68CZTgSfpuDqcBf9XsKUgKHv93o2KGYUAzZBEra",
  "key32": "5rH7J534D8uvxbheRCbVuJrCmo4yP9aXwVmXByz5ANfsg6bZQm21yUqWmBkdTQhyjgN6XadFRvYoLbXGdhKPUHBp",
  "key33": "2HMLLNycUsvEcTJJ4skPUETTakWJWALXKsz2t9XExbn8d6euXU4NUwnWR4i6KTC8rkZq8seb3jFa7ELUuX9Df8W7",
  "key34": "4BSgsn4Vf9dEf7pYF9bwynxvfshUY7YjiHxrsF8DP1QaeuQNhkEda74Qz1G8cqYrjtXAnJMMnM78EvM5V4txuWui",
  "key35": "yPR2jxA7V86mDsyuArdmARQf7E1Be8eyBgHZv3m8xbv88vvzYY5TJ4dGLuiqDcqgcxN5r4pv51t461j7HQYMBEH"
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

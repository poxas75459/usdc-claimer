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
    "2D112CnhYR3jY57xHt5v3QogeicAyDhvkronZHmRNueKiMuqec4VxgzFBhTXFy8Bn7sjMz9zVt7qUFqev9QkuGQX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hvJczzowx7sAAJKQo69g4S9ywJFeVhdBqJScL8wGBPD4FNm6DZ2n2Lg32rNUrG4qbnUiVM9BMHxyNQHGW6dMzC4",
  "key1": "2H6nTAjw1Tn9cjcer2j7aresRSZb5qLipWUPxDEWEsnkmEGDeVbEGAuXCq6DJGHHpjt9hPbdDXEZF4AhZj1b2nsP",
  "key2": "2jdjHVNxZJ2y8jywcy3rvegKUkwcSbx9cYKWakXBYZJjWGMnLv57AsaoSc6XakusfhfphGuXa3ZyRHp1W7eemiv",
  "key3": "2Lk4DXWgPSHyWSRbQ16mDJeDXgirvHxTSsNGMdEWcmkbSATszuyECCKQmB18LYc1AtaoyKaFxWcDPZFGXdX3uQeD",
  "key4": "2XcUpVA2QM9xafCAJyNLNrESvj9XHrwqRTj8haroyznL5XceVN8RdP58aMzxH5g87DTX8gD2bZ2Ef4NGeSKm6nBH",
  "key5": "2CQqKVnTqccgWeFsx6xaVC3CENSMd2tvHowTCACwoxGsakW2Fk1oZs6uArScGPpf585jw6n7HL9vYWvKysHDkRZJ",
  "key6": "3EN49NmpNYSFjqEXWMfNifygZG4p71MAMdZ6rDx73ApYjXz3VUPRARjMxXbGh437rUwyHtWo6cAsGFR2kE6o3xcs",
  "key7": "5FvBert3GRpTrzgZ1XbCy8XMsSTvNusVVD7m6iCMNnHwyfuZWC86ryeAJn7Ru47JEtVfnsvjBa91hScQAngGoPmY",
  "key8": "3c1i9WbTvU5hKfAJ2hmFL4Qf1zTRE1bjYry2vUUhNnnbjbQcUhsbuZQTbS33JbUL8DgQVBQQkTNYWaohV45NPHDk",
  "key9": "5viMKTMzF8d3WHJfVe8XECoxRw2gS9d8g2mS7YaP7DaKsVRdrykDwUArC7bgUa8UzHNRzVAr66ABkGwdjTPzGKXN",
  "key10": "4uQS5jVdxGL8QE1hk2aCowszpWy5TMtudLV1H54kjqweRmMiNJj7fGQwiX3Kt1vLcj2ue4DFG586PeS9Ua6P24F2",
  "key11": "5EBeqeTthGSAT8b9wLgc2ADkrxUimYtQdCk555M2KkziGXh5myFazmuZPL3ySe6zVKAjHDZwon6AJvBYwJR93RLQ",
  "key12": "4egQoWi7R7n4jGyKpbJUZpGNSXjUbtvm6oQiDyfkzc2geP9hC8oAgTzZ4SGzbte4wm2BEFBbUAEMnsahwBDMSkSV",
  "key13": "4ryvsdaVVXi4LdByEEyrx82LZXEsLTbLwUieNYHBLth4MDC5yggdbB9Wk3fyip8Gf8YEU7hTXWqtM4hQimmVRAf5",
  "key14": "2ivKX6D84wvCtKTkKfVCqaYZJgR1u2a1JJJsw1b1RMQx9hjxXnWoLGXJnz6SaQbtUeusDiGZsEqbVjp9ry2zePJc",
  "key15": "jxahGSYGaSFQvLW9wcfXJJwqbBpDaHoDwT7HEPJXpKJh4DZCKmgVe8LkuYC3r7iGkcpAYzkS3ihZRwncquPyLVp",
  "key16": "3RS7Cv8Zm2YNQvy5q6PTNqpCUzMVWRQ4Vzcq3taP5AiNq5LsxdrAj3xr1k2bXqSvaSYj2YUmu19DhvJphMHZy6iG",
  "key17": "2GVJPEEYeD5sRqyZmFK9i61rFSjrrazMHENovJtFgWmuEgY4rQgViiRfwBPHegYU1sBRgrwZcN4n2c7R69SNRmpq",
  "key18": "4ztL25JDKMkPWNxyEb2ywJgHjjMbqQqrQffYJ6G3k26uUWMzJ5yRZaSDFi3bqmMHAPvUq1aqFYNUSkg8i8bzmGgP",
  "key19": "5DtNv3fFqceVYASzZ1uTbVGRtoVvMmWjEZEbhsBcjgay2hD7zTNi1J5aehSbC4rYbnszCBYV3ppj7CVu8D4uqUE9",
  "key20": "38aZqUBZDLqFWsEGK976JFCyiXsMN4MpEgP55BybZ5NSwkhYmYD1Y3ATVPTQLwc8abeQkfBoXh5iabSEAcoS7y2B",
  "key21": "5MTrFrXfAaXMicNavExB2SgQps6wBgQHCXvbnDR7vfZLNLLsdZDMSyo8TbLizxUw7dcbxKX2s2AykAq4HeJ76Gpi",
  "key22": "3rBbgdmtUqTXfBx28hP9sedav5pRATzCHN8MVGZsxrMtrucHgxShAGspi3e5iUeapM7XAywoEyLXLxwBWtXpu25m",
  "key23": "UHoXeLCT6EdwsoaFAiXnqZun4UvtVqN6onb4rnTNaZNQEKpQUs9UWdLxqCRboBexEtimoZWvBSgXzt2Kehkr7pP",
  "key24": "jqvFzHStct2mDBHtcL3LAaftktSYuhXY736EEwYhHLbgt5GBegEtTxwE1P2qW6wfTzvcFVus73jzyBfFcz6LyTm",
  "key25": "3tcT6zh2EXAVrxN5fmXDsrYT7Dvs275FoZ6gbLkDVk5b1eYRoaKdfgGmjg9geUZXgY9ywdtoiRVD9jmUgriac2Zb",
  "key26": "3WwF8xJbQxbDnpTmajkcrteUVJEeZHmwqntyqNWjkUpSyahX28P2FAB3Gfr1F4Nu9so7Mdwa5ZDxKHMGgCZknZ5F",
  "key27": "41J1Z39sKxaaErrg2sAj9nxQVKFb5TC1nTow5Wwf61SGcA7iWvEabJTnp5LqyXnsByQ9YeREaCxt3y4y8tbU3KsD",
  "key28": "qXoiLVRGW1aWNTGuiw7rjqztQ9DHG6v8GjS1oGVFmX7j6AiyXktoWCUok84uCbM7rNL9opk3eMMAz89sbuypSju",
  "key29": "4VANT4crnhcB3DMvXSEdDNwWq6d4axN7nJCsx4gXg8o2ZRLweCPiH8rHNjLDTdAQdhmYX2GNdP9QpYU3d21AGrCv",
  "key30": "PabCCXfBKzFVcvj5Fv7UmBnwLc7H6ovoFfvRTDHBYHRVAKBkVaVbG3m9GRo3DJEgGCdKTS2RZJ6jiw253iGj95F",
  "key31": "5EnwxLQnCtBXS6MqH34KXJoSTBbUmwxTp6m21rxFxdqrPRg1CJQquHcoAJpovizZkQjDCsXDDubfvg2LVqQeTzeq",
  "key32": "3saXfJ4b3uYs81uDV7BJQmXBJ1P2PjSh1gZjoJzMribrRpkGrJF7M5qCvnR7gBuG3vyBRWQU6ggwox5NwSiUW9bb",
  "key33": "2SB8yHs4Cd4JcQta7NVdE1EdnBGLqYE4VTQyPDQC6BtSo3r7n1BwET2FsPdZm2SLd8noyKzrcUUW6kD8UtaW9iUw",
  "key34": "4uaoBfEV5wPwTkfkQh8VUnHZtaf2tNFkDs1f9zcrBj4YDiEopkgmPegzjS3ZFShmNR9YrUXWjPuu39ntiLCHEQbc",
  "key35": "4yFjVNjGJeVHA4kqvi7diuicQmLbk9VHU7gw3yPpK7t92ax6uimFkfBSS5fjFGAEnBn7hKXmk2oc8nyt9rpXYzN2",
  "key36": "61BgCyz6oF3myAiDXoQZRUYEDtGotk8ebN6XZKKDw8F23isHyiMmey3JWDLpcWJ8qa6J2z9Q9jo8iWau2idMq4AA",
  "key37": "4NzZNJX333ZXpZ5yBRvirBkw1XG1LuUoMhDyBZJa5VRogkTV5L43RCjoDUs65gMT5QvWUJ1JbW6vebBS7m7cBRo8",
  "key38": "22jbdt9Tik3XPEC5CJGs42asuesThMvEEVUWqHQg8LxYUscwtqTdX4iT2a2SYZMJ3YnN12NMhsqW7MdKF8ybu8t8",
  "key39": "7qTHqZTdck2bNMo6N2fQwjVwJGXYCNgvW8wZkqWLizzjj9XaAejaFhiRbiL3ZVZjeNSevyyHAksdrhbXFtXoca5",
  "key40": "4ouYEGBFXyinn6d58YmqewKJTFtqQL8KB2bowu545foxV7ZRhBrvGS68epNB5dSNkKPpKxPYGFuvur7Yx5UhuPGQ",
  "key41": "53mHMLAt4zg5F56mEixJTERzWSQJYNdzitopw8eri6vteuCL21yg5QaXpMWy1i9fpUi36gdRM7KBF9tqLM7rvgQj",
  "key42": "4BptAHGRfbXCNRN4Zu8tERoHVjDo6hPZbRMRzfwpzPkaMv3FG9YLczbz1VWsGLcniCd1x6ddeySfbGeyiumogcC6",
  "key43": "5t3oKMeequArt8PvFXXZt3rTLQZBx6NLBYBVmEUY5DoXJ7uV2JAmdL5urTcsaNtWB8PSB4BFHFoHhooFRwXzFHgw",
  "key44": "34cjkBTNGfd9SpMhqtfahLRddWnTriezHw62U7sLmDRJjbA4a7JA8rCcSFcPWVQ6Rtv3YdxDQpAXPf8YmFs5RNkt",
  "key45": "3zTPXomR1sfFbhipSPPQhJZnZAwZBHdco3C33TWFUmWunCyYF87ywah5jqztzAwtNyyiv9mko9xAT958SZoDGT3f",
  "key46": "2doP1fSVzFuAnhwvWjsrHrhywqBA3ikF5HWUdnMr37iVPT7cF4zoYxo6MPNtsoNRicuMWZDaT8QMFyYszVDAGpkd",
  "key47": "42xgszqn5TE5udk53e9FSbZ6CoUKXCWuC15EF85sP7AXPdWZre4CgtA1EhtGNtqKe4HhQudqXBKGHBHBzToGnBaq",
  "key48": "3Xodv12BZCCdvpmEkD7KPK5ruirp2mSgFGqUkjKg3xehQ2fJoRDMzP3HXKR2HRtUvw1X6sqE6VgQSwrJfCpPCUft",
  "key49": "67EGEP7PCDjWYanGRSc4YXTVL2W965jRJjxcbSfdRR47dr8J2D5rqVgYVFry9874VizQPR4P6DYhyaJfecyZBmqA"
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

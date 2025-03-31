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
    "4dWTiQNz3Ski2ch48SeAiYmypZSH3JKaC62xdGgjrm3nFpLWhWjvG8cu4c84ZqE113GqL5ngFjJP6Ct8xs5Mu94H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pVVP97cFBsxTm1is9fMsTE58qmMLdByYaHtvN4eu45JtXwzAgUSbDqbur4kcBspAbvVexGv1eoRMLA5XvmKygTM",
  "key1": "3jnMSU78oRtNPzQivtyHtxEhn6GJzNr2UfyDmU6Vrp4ugREiSsFz775wwfDj2Ds8E4ZLmGjCqztjs5GTUugnyKDZ",
  "key2": "58VWAwmaFZTwKjrNfB9YeZumKZBUqaNsJEoE5yibvJvSFYf5H6Lar1sx2bSSBR4bzMad2gLXQpCNg8MbJ3TZHtrV",
  "key3": "53pC8pY5FkQQG69Gud87EWBqri9fLrmEg6FumD1dyfQVA6ZmTRTJ64LWXwXNkaHhGGEJV6w98ohhCWFvai8QugEW",
  "key4": "5ohcEMD796wnwQ97KYmDDUUAzqb3nHEX9YX1UKL5oJppsMCKznmLGY9S2q3DSDZDKUtNTsZp1xxBeM9NFpK1ytk4",
  "key5": "4mpizoFizgdq3oL7Ky5AVjz6NsNB2MpJyAtqwGuV6zQzMG6p5MfmVH1dsUYgybLteZMdqi13BDXo1k39mmoLzsDZ",
  "key6": "2TQ75DTF4CXrUsXy6KnU3kCcEQnP8x3i2hu6Ejqv5iCq3mJrXzwnc95uRjRyBZFDRbtGGF7Y3mKzUusvDbe55aAn",
  "key7": "aTeMPJoKEtEYe5f36TNZHrqiGZtydsNrZV9a5SYkT4iinTg7C7yJt14L9Fd7pWi1ppmiwCWo3y4DLGav6yZrAMW",
  "key8": "5o7NM8XiYemqzN349E8wcMXR8dQDHFHmzfe8X1ZvdZjoD3L5eJH7Fq5yXtu3QWVFpckdh88csyLTAVUUasx3dEYF",
  "key9": "5B1BZELRocBpvsrxgLtmeYPQAna47Pe5uUfFpBCdMVCx9Cz4atcutcr78zDJLwZpcydTeqpCvW3xjJXf8eX2VCrJ",
  "key10": "3aUL8dhPAJdT1LENnC4Tb4eHd2g7a9rFrHB68VifQ6rx98uyha3kccKK2dFQ468gxvxb2BnwvDWnDF8gyn8G1z25",
  "key11": "phc7ofJy7VB4o6ZgYQXuMa12Y5g8k4peX49AQDRJj9NAEmRCge5wBDhjPtJSsB46VhUDpyvU3ArNvECtzAJ9V6Y",
  "key12": "3dfykS42nHUEX5npurYmP33V2V7PpnqQseBdWcKkAcboWSspdaW5kbz2c7ppU5YYj6uNenD9iMJbXGF9r18sBYwP",
  "key13": "2kB8qC9cqY5An725N4kmaWxBDhh57y3DAJGPQfiTjsyGazJsrvwekrQXXy3yK6BFujtWrb9Xq6FFTaNN3HjFstN5",
  "key14": "3YpHNGg7m3WBWd4sBPmvqpDLLinsG5pVEPAHwdJ9nxLRNGZzKD6nUodL6XMjwB26d958eU8ssSMkSrpNuC4wf7bB",
  "key15": "4tgwv5fSdskBPmdvTRSFc8A5s5dvjQefDuc3e3W8SBTEfTsEAx3EbCJabYCA4PhHdD1kibYbvLSK3eDjxzbZzJj8",
  "key16": "4mJQFs1CMyNHNcGsS5UzihcocccoSynLCmxCzzQ1iACQkLCZ6wUpFb4vuXdhg1GHtowRFQbGmk1M8EC5FuFRW5Fx",
  "key17": "2xPhaHpWd4pbPwkhtkX4Ko6fxH6ZZngXhGne87WDDc4BEfLM7w7kmCydLunDNZihuL6EuhUsRh7AgXJpFL185eQa",
  "key18": "5WagHiBo62k4GiRVoBwWaSotobRdMtATEccspPnYX6tTSHUxEmMxHVEUCwHySuBsMtGG43bRnHgmLfexjuFjadn4",
  "key19": "3342W7Jdrg8cGfsYPX3ybLs7ejFaJBptWXTBjrFWbwNcQSLZz2UPnX67G4Af93Rc7p9qDP64eCNQcov4HQrmhAtG",
  "key20": "5tU21uwgdrituNmkHwEoy96pVZrrdhBpKPYz5rrdZDbCo1mkqmo4vfqRcTog7jW7u9Nhh1UDeY2L62xSteePs3V1",
  "key21": "RgW91d3QmKur3fEi9RpkY8UcePLKzfKUfwVsGAudenxno5pkgKJRednrkyn1SD5Uik6CKyjystZLq5FRDZhbrx7",
  "key22": "5XtUwQfkqBUa18AeeGousyh1eVtcVsGnViD85RH9wvgNSMN1eKskuEXJunhKjxQhiGqQzbAeccBPPAt8UBzAE4t",
  "key23": "i7NFasBrfa44D3hU6rpTHnFxriuKfkK2pFCCfUvvTCHMqv7i2K6dk3TX9TAY6gi1oX78UTXT8tg9Ue9onGRknRB",
  "key24": "4fL4WsARLixnn27xcNxhJdxAzfsFYjrzHGpbUr4xn9KwySbUDmBocxbmWtQcDkqPMBHZ8QTpWQdYq6e1HWL8qLxK",
  "key25": "5jkHR7mM9QFAbkiag8nKRmZZdQZ6MjTWj8g1fuZ6mifpvfFbeiFoJy6F133E3w2LkQo66gRe5TbMKZVhCxeebZC1",
  "key26": "5NxnuxJm39iurmmPmC1miTqygmF3kEuPTN1S84LhkSS6YXroVBfQESqpUdcz9P3CA9BG9fSPfYnK7KKVJiw9ZTD2",
  "key27": "4rGjMkhXEAjQKZt5fXY1ykhP2wEoGChRSevp8sHw1YTTqBXzxKd3eXiogDtffWKe16HZxsibJX5xbP2hsPmGsUoy",
  "key28": "5oK1BPtu6gJpwqQi3MQeMWyaTtjcFLvm3jkrt4R7wVRGFemw8amtxK9dpw627e8rZgvxi4f4uSJbEWDyprpUyQRP",
  "key29": "2MwPEEnw8DMyHW6zcV6DrF1j1uPAG5o7TsDEZJgRhbZ6ovq4Cw8sBrHXiygXSch2uGCsyj7PcC3Rizyx9ovtMMms",
  "key30": "3Fk3rurb1X74nRS97pLvBu4G3K11DYuEfZnstLDV7EjspmhkWbcHbFuaF3sKuRVdngLvF5L6f3ead5uSwKWFV4Lu",
  "key31": "5FKghoHkAtdQHvDuRBN6RPSDq1hSAVdEDi9Bg6aQbCnEnQfP2eteAfACb4FxJ81bCetKJmCviUfhmoEkxhTw7KtN",
  "key32": "2eaBimBv3zP7BH5vNTsyPqM4bfFMee7FjvkHrR2CjXrj69PLaAc2aP5wk871ecsy5Jd9Cw36TfAz6wW7N1hn2LDk",
  "key33": "YLkmFaL381ZphsmZhoTKormxZze7VpZzfs8UvVqTWuQu7BC4DtZ8EGvmMDjq5G9wvaUojPHq3rBuqhvsWupRFsV",
  "key34": "2PMiJ5MxSoFDJSptKSqnPf14CKkCyZQiMPWgRa6GFJjd7viEzukUCtcPdFCfT92JPk6RJzACF5N7EnMPYWvNhHxi",
  "key35": "2xbavb8EvhJ2CMCwDT1iNR6EuqDGHFbyTRyvBk2oYeAJK8nhRRdk13NBTfZsqiBw8PEpSn7evvU4QoLNasE1n7Zn",
  "key36": "2fuJ7nNxnF94zBnfoM9fPBkmQjGtei5V7kZrejPMD8rjeVbvJ9Pyk1H3jgZYbNs5xVvvfKSNnQW26U7RLoSKwa4o",
  "key37": "3zxH1vtigkjz2fRiR3PRpJdm48YaAaFNNtXshzUMXsew5pBrTnBy9tfCYjhJEsnDBZvNmmbBvYThdtYzxBJcuQBJ",
  "key38": "3tWweASX5rzc6t9mFKYAH7KZZYQYbNz7i32qCNfJnthXSAyyJMwrfKhCYcw7xP3ZUE2xxxV8bh4C739RNPkJXEo2",
  "key39": "3Ma8w5ZT9rzyABKVbFgnM4jEzMS9c74B3PKAqMsXEkRVHC22DURZzZ3HpAxyBqqzQ1YUHvb8xBM7dsfFiqbUJRU6",
  "key40": "3LjnqYF8hFTK8Bkq8HZBxaxfps359ng38xjNkvfGHjZJNTkn33vhk6kinSKe5DrXarwPXZa8CeM6518Dv4cktiCM",
  "key41": "53v5nevCyYWYUYz8qJET9KnBcYyThEaPr4FWBmUv6W5V16ij7DSsUWPyHnA3vagBP2M5UyGuB23VZQJLc9VBqtCW",
  "key42": "2j7hiYAkH53749rDGKpck8xdyEXGjdCZe66DHeGUZWJTaGZYeA8L4wuguA2GndM9JCcsEbXqKtDCbM8bcSQjPGLK",
  "key43": "2J4SJSu4a2MgUPQMcFmvSrg8YWFA65Dzq7LZMUH9UdkJF67WsUPNbtZYYCFSQUrUTPb3dVHSCiLuHuqvF7kNN7FH",
  "key44": "92wfQ8ZLLYENC582kQi8MT2F8pntUGNsmSMNKUcmyg2PdvckbNBU5xkS5YkN6yVBBChgSSNsojLA8LiUCnkUXSo",
  "key45": "28nB8iuqhdgo8F6mA7HU9LqFbpEwefYhqeT5ss1oFMY2eEgNKGjfEUtLYpGBCTgztLcvjNM81kbUHCGmyywZJn6V",
  "key46": "4R8T7M5Jpox7LJ6Zic2hNntQsawQCQYiJoDWZTH4d5AJ7HUbHWzK4QmnCcYHthDp2hwJh1US7ZtcVbYgbbrSqBJw",
  "key47": "5TQeERgxUa8GZSh7omXzdCGy52UoNdNDa7dSYFPpk25Bx9iNdakvopGMpeiY9N6BABj6AdXmPCzuB3YzdJrQfUbr",
  "key48": "67qWZokmqntNWP6XngLkNL6yTij59aAndjsvYg3vg9EyamGSdkMpmyHE4kVqRcbuafYYPSxUS3p7Ds9wyRzSpLrz"
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

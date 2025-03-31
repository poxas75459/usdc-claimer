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
    "25pXVLF2ivM7bBDrqNVmG5bWMeHeGgsJE94V2bhMWKceSPQVFdXENEqMzGWbAYgsbNuuUiNuHZk3SQHxkUxK2ZU8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4REEhUcHiEEW5bvzEhx9JGLCLQX2tkr8gGLKqbDfkuxestxMYE9cdnMen5nDbfj2XZS4maaLchFjcNQ2U3m9uXto",
  "key1": "3ELLWSce5D23G7sfSMbqZwb1B7WYmaZGhHNbucbqcGWFTRuUwBuo6s5UCeZVHyvyGACwMKZT1ixVNtoAVXjwJRm5",
  "key2": "3tVYno65nLREF5pw9ySqu2PRCfpxGSecHQQxve9bsvBSQFwztoUSzyyZsqqQ3Y4taGSWdsE4X8DVsXdxVgR4U9ca",
  "key3": "5X9Akk8aLUiEyX97sLviZvAbrWgmwyh3HDLXj1ZP2C5VyqDKRpbijpzLnCAVUhwVDdtwZvin2w8uFoox1rD5JBgj",
  "key4": "6m5gce4hCvb1tauA8aY7JZRPh1PUZKTparYDEoSrixk9qbLwSfDGT5cegdRwPh9FVsV1HrGK1h3PMUj8RQCartG",
  "key5": "3nb3iQ5f729E9QtYJUTqYz6k1ATnELV3D4TwHowzLs4kzHnrFoe13aSf8FnU6D2wvnmE9ydwPVka2n59D31Gy3Db",
  "key6": "2fZFaihmXDycQsiD9f9py2YdBKYrh7L9ski1ydbnLDCny6KtuLp8o7YvyVxma4M5cLgqaUuxRCWudKiNpH25Js7D",
  "key7": "5auXkpNngVuZ762DBuQCgUrnG9qiVDMRpfyB8j6LgtaexPYAqXRpoYF5yNTowbasP6RE2kkheELdBCwLFHpRczDU",
  "key8": "64B7hPTj9f3HVKWutgvbkLEMvvD7ZCu6CWCwEmeGvbqyvk7TPtoHvhL5gGXdLjAb8x8nt67bpzNSibnz4dmkaQej",
  "key9": "3em7ywpsfPocYBGHzD2j14BwTao47dWQaDK2KUPKGjMSTheJQFZuwnNdAoUENqyzcQPBpJJ1Wm2Z2A5coezXrfBP",
  "key10": "2PYok596p4NWHNNGFmuWMtHJNArCQNfD85h1PhWoCMgLbCkXA7w3bForbZj7wyq2ZZMK1M4qM4oqVteJY1aTxBCF",
  "key11": "WzxpnJYVgueF9745oStGEFwu5qH8apypi5M7ZcZwTgYgs3uaY6voxMTQmB4twfGcnUPVfk2YLaWdmPTmAVawA2t",
  "key12": "5ZKRCiPsk4D3G2WH2eCjhqvqwrBuHDgbAKf7KF6KU2jC68hDpXSDXih972vzN3cn3NkZeu3KCbo6TLqdPmsJjbsh",
  "key13": "8jtouib3MZCMPETjUnMhaJfG6jGfSwAZy72vbXazEaz1oro9T6QZsYiqrrC9gRckrGV9Hghc4WqH5rwiQqgKDAY",
  "key14": "4zf6T3yZ65ve1hpNpVEVkXGhMkpC77Le9nC4tveEErkzq2EE7GrjnjPSM8yeoS81Fxsh8YvsJ3jeHXeU5FoMEdP8",
  "key15": "2xUnmXwJ32UDPjnNpZKwLbYvfeQG4UVdK8ZBVbr5abK9W4RdypPKa1sXGaTftnp2TvbqbmcKhDKWpZnwzZKUNDQg",
  "key16": "T8e6nBvz1WXrbRsoXyEHPiBTE6dmJXhkQUcdUprszhLKceB5RUR75scNYxGMX3c38xZKf6x7jzzxhMENXkEUjZH",
  "key17": "4zivck8jU2syiCYDk2orbdqjxAq5yzSbvoEKWVxcjELT5LCJYNAVKg9gU7Jz2VE4YuSkpa2CHTpatRy39Zkf4t8F",
  "key18": "gmjbuwCU41JW1ZaR4jRmxWkvsw2TqzgPuCuhhcVWA32oDh59vh1vEdDHk8Lkd4SCzqj8NSKztTB268Jj97eW2Cw",
  "key19": "3zjZ2MvfGrHLw9GEDApk6YHxzZNmhK9MEnHDT1UoxpjqnnKaRu9TGgUAkDty4mtZyFKMLM8UqNNPrTFwmVkaXpBd",
  "key20": "3sDqFHLc5cbTC4RM3494FGhEaWtgXk9z1C7WoMdamnnSQ3owQUQj1Gx1zFXbBQkA5M2aVr3wkVpByTvLkfHcQXYH",
  "key21": "4dz17rTCjp6rXmvY9x6kBA2afQcyZYL2s8WR1VQM4usDeh8VaaiBzUpRirMRQQTacVTAd57ZDFY5JHqeokdnirTk",
  "key22": "QhH4SMAgkaEMwVLyt345NpMYwc9apugBJmoUKuMezi66stzrdaz1GD3JLHaaPCSKUk8GAbpeyEZ3gfPtkwTkG7p",
  "key23": "4wMVvKEcTG4Hqg6fBHkbzs4TZkKFDb2BUzdnDPo62YjzP3zcxi2TtoVZyrkx2oUnj1vVQnLCithHV6Y61ETwu4vH",
  "key24": "4p6qre7TNK6mGmJBX3FVMWWJGMcWCJ6wNHjYpMqpTNKBcKaZvncYb8bkuMfPtZ2SfKPnnE8kDEXd8AakYaZL8pAo",
  "key25": "3gqUPsgkX8AkMP6R5QNpXCSfSESATCWuVocyFYzDjiAQ98r2yWkDvppWuVAxDXsxCgtwxdxHBaVM3BAX4yWQqtyi",
  "key26": "33kNGn4wmsWffjLwUNCPtnWAxetsSGdTFaKEgKQmqRzR4xeTLCB9MF2n62q5qekSFUH8rAuo66sH3N6YnrQtMCPU",
  "key27": "3Wfqb3UimBCjjHnu2Vxq2qLkhFkX7jiiKVzpYF4PBfj7HPu4spcNj2mvCRosx2fGeSZh1BCocAyJ7baywUtqScLP",
  "key28": "25zJGxHJ8F8aqM8dXw1WJ2w55msh7Q4FrbVZ8hbrmKAszsAv3Bz9JqNBvMhvXvQAcriovGgrDY2FD8W83tTjVdXs",
  "key29": "4bKfwwQPmkakNUc1nMJE81Qox4K2ZhXrkSQhnUXqpun5Q4sLtyJiuPoDcy24NrAJTuez6iSWQxNcTGo5t47cbMum",
  "key30": "Ykii6n6KjUDX18Y9o7rzQMzxbTxkkceAkRAY7Q6QNYdpRAT6y23NjhLj3mR8tH9Y3P4AsDNGjqf63FjA49BYGBy",
  "key31": "3ChAj3P3u2RCELBLHsSxSV8aep9W4QrDSKX9cCqajNXHxWsdcuwtPQcDCmTTZWLwvEQc9Jpweo1JjQJ3GammnXDt",
  "key32": "2br7Smi4Y5u958ZTUwApKWr7RcN39dA8Fqi2ZJf64y9RCu3GSMdVVvYhkHCZnzTgAa6btVDXrH2j1eQpGxsC2Xy1",
  "key33": "xZPagz3A49rkzYmGhniT1nR41WhE4kTG64QhH57BDwms4mDXDuVRbw3cZThYJckhFjVLbHoGNWWC6QVdbrQ5xbe",
  "key34": "2GrEVfn1WXGsLN82eNTb7PPYZ7wxNZadqMQ1SmbFttBeu3BgYZv6uN8b1gnmmoLV41sDLrPgdeWTwjZYtPC917ye",
  "key35": "4kWhKCnTXLCM3q5WTuFLccgFtNpjF53NdFCKpBNe2EVhKH1udMGd8de6RNJre2L7CMTs85nU4MhcNtA2Xy7DpLnR",
  "key36": "4sb4SmmM29ZQ1Ds7QH6W6iq2xtMrKiCvQPqAqJNwdQiEQWfz2d6cueqYaLUHB9gXgqqXmYoNA2jqXVP7shERB8dG",
  "key37": "4CRmGmPHe2pa29jw4RAWStD7JHsc6Z59zm7M2ZNSr3u8ARPkN3UnMyWMpJoNsQzbdGZxNFNXCeDJKHhzfwXPrQBY"
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

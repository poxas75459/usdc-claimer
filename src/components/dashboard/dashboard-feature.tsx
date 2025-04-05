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
    "fU7i5GiPYEy3QWXkHoxtzmKtzaH5UTdeVirhyeT84JjVHhPYeJfW5vsS5Xed54YNbnmHnCrmwfMhxh6WihmHqQd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a37rEfYRdXJSFgmEmgjWZMke33TN6ekTUMBCD22q3QNRpgm7DNDPGinzr3n1XjcVUCe3uN68tt3sue7UH88xkyA",
  "key1": "3nKwHfGpzNSYRdED9b7YJ7B4k9h1suua8Dd8o4vueKhjhhQzktfH97xGmgWWnj6FYGrbRzQ6c3dzgLeynSVF2owx",
  "key2": "35TmtEG7EaDrZbRafzhJ7UH58mfBeHKmGL942ahsCH5GQQac9A9c9KJhRTbqtEXzBY1i1MqKz2bqDZP5SevEi2tV",
  "key3": "dX1gBu3NsEcoJg3fk3nTDtT7RV7NqNcunJM7zAsViN4Lhg3X73FaDNqvhbJvRND3vRFXoZzBQS7ZqoMLELMSTGa",
  "key4": "esZ9SuzAQDdDcipf65oQJA6iHcmeMPHkSpoS44jjacDW3Mzpu8HYkinuYEKgXYJDwE6NC4Nk6MAyUG1dYMhEeiq",
  "key5": "3Fz4EnF1EJ4RJs73XTPTkn72ZQpwq846Qj6C78C2b4zA97RuMEuDaiuX85K7DsEPNFeCRqKc6PHrvqNfe2xwv36w",
  "key6": "2t4bzbaQc68dBK7kGKpVLWGo8c2UeiAhDfES8Pb2T3JbheByRchGwqd8BcRZpzf7K3FG3Yqy3iHCJ3inMNLs8peZ",
  "key7": "2SRmBuHB8ezn4fXNkbqcSjj6fpaRr7Fv9DXrXidUZ8oydXrhjipoicPhH9uHc1UAYzRtdowkvTrT4BFtLVSKbkpe",
  "key8": "2QvujeGu9XocGx9uhBK6684Qz36QZPMkjQixNGSGEvQ1Sdhn8PjqWGeLJYUntyp87UiKmyjuNf9bo9VGfWCvztts",
  "key9": "3XmfL98xVJXVEMYTiaNrKDG9JT5EKqA5Q4dZv6pwVc4bT3SAfbDyonHXnBunGT9LYshowtM7GgA27gh3HAkXcnrt",
  "key10": "2UpempsuVbCuXZkJmqZGkJcjefLoytKc3sys6qceSsaKftq1hKfRmJ276q98hqp3xVyvFmXzyVJ3t6DeDqrQRAow",
  "key11": "41XsAHhLn9njRU3s7Cz7zqfz1VcxVkunah8u4QzASTTQCEBp2FJHFnmrsoH6LXPtAM2d5E3UEYPRJbS3xbRAy8Nm",
  "key12": "25STqoEEWYauLPhRqvmeikPxPeNDsosGr1UYDr5asZXsvAgSviGGiwUW6wwDMwm7rwrZ9P6hs9oKTpUZTU3EMhTm",
  "key13": "5VgzPBEY9Ynqaun3bW3WovhjWnF6uyCBc7y8XSoqq65yc2e38fioMBAxpUBJtR1E9C4kNGGpbVFt7PbBG9NT6LqH",
  "key14": "3NH2vF2hkDE3RcEeb9bstuJhLJDMELYwDr3BHd7DVPF1aCDoopTAqoc8pY1KzbWVoiqYhNGcYQ1v3aLpFH9TcTNZ",
  "key15": "4KBXq8LUD82zRbgPo2NitZmVkWUid87rVBL7FJ8Dtbd15QQBej9ij8WGZ79T3JgkXB4Zp5BogXoZnSpQtbWZgwZP",
  "key16": "6cBo14GSoeE76QFGnZ3Fqn6iN1TNgjXmYKr5mDHDQVv9vUL1n2EjxqMNBQyAFNb1pLRRJTJrENXgcZY73gudPc3",
  "key17": "5qu3GG5QBoV8HnJncmZch1YmiSKhy1WmbFWEuPwGe2PTWEkUxmGKafDPGCEPeiCCKgv5No8r52cS4VDM5oBSqQ4G",
  "key18": "NWqQQQrsRPm57bBkM7oJY7zEP1AbgVNgX4DgNggiWZv7PFdJ7QLv855PeKoAsHH2R8FyVYmqmmWzrrFyfTHf23W",
  "key19": "dEasmm5rdqXhz5PuihqxreaZ3zSpchBWZRRT7GqG5q9Q9jXmvL1X42sZBcJqHLFV1pBFkNhpUXKh3RW7nKsaCdo",
  "key20": "3UAf8K2vU6Kzmg2t78Qm5rT6wRCi9KYFSQxJ4yEwJ1cvM49feNJ2GGdRZbhmKAWktvtM4D6iG3nekKfsCKFYDoeY",
  "key21": "3G8aCJHQEGH1bfpdSqATVAra9KRZXSvCMHdqAFxgmTH63BQR4AdE5midpraBVDRFatCMfM5ADYKPrtEsGDSjFAnq",
  "key22": "25YJ9M6N9ixGtr7yEXZiqoSSSYDghyHHP8FFYpRNZP74zK56qZWUTsw5jjXNfPTmuxosJRDWnSnVodwxgi1QXXFf",
  "key23": "3fZkG4ye9hDhpR3Amhi69PH9QL5q3bTBfuxNwHgTfGQNdUAEXvSkn8Lea8JyfqKEdME6EtwndGbLAMNoAAEF6nFA",
  "key24": "5c6ux4T5PniTanNfs99H91Epq8eNR7oJUkVJunLT5DL1Lv8KZeqG94NiraQatKxaWSY4mjEyA4pfVSHqd34v8Ks2",
  "key25": "2UKayMtrE11ASBotbRrAqQEv5kqTVGXH7FVL8UqFDSL2GAoK8PwicJ6NcxP7zt5WnwZm54VtwkKcSwcPBaTj94C5",
  "key26": "22gcUmGgQZWuVxyi6Xe3S4VWWLbhfBiuKD1Sew4Hz77q9CpAqPm2sKePy7MbRdnFxv7rBTAy97tHAyZ7quzG7U1y",
  "key27": "221zSFnMgZw3jEQykF9a4rPwX4jqtknSwArUiz1PhUUJ8jHcyxmc9mc7FBRbhZGFvPqVH9JbnMZnXYVwkDXza3uW",
  "key28": "5cTS5JN7D4LGV5z4o1L83FbPPWsoCVWPse3jBTXBV3JZgVMyXqV15S3BsYYwefY7SLq9wBqL14AbRbFKNNx9QBfD",
  "key29": "3TMbj7WDQzJfwxv8cV8bPcshKGLCC2EDqNNEDFSj1AaGUmoTa6q8RFnSdNsMg4yPPyf9yHD1d3jiiLRswZ8xS1h5",
  "key30": "2cyKVWjch4uuKZnkD2A9934541ZcQgkqHM8TwgKJW9nLJ3W45rWkqGrPpE9jS4b5pD1udKy2QvtYzFQFDs7b8tYi",
  "key31": "2bATb2QL8oBDVmxxYiDcKGqnt9Z6WJSB8WwaguZMWNi3N6sCcL8Vp4rQp4VDqVFaMrzqA9aJdQdsoriKrzWhjZbP",
  "key32": "Vjj6fvx5wpTz5rmSZvoD5sQETzPqRirySoRGpnHiox4AX5VUmrYBxzWBirC85mBX6TYsq6pqpQYHigVnZcvjDAt",
  "key33": "5rmrJA6tiUqkjinpMszJwjnoK7gsULGJ2kb9xibujrDrQgnufDmsTRcyUy3RQWZfumDddd7hn4B3vXKFz5zKZuzb",
  "key34": "2chgejTKntJRcUmfYfxKMFS2pC2VYa1bB9tdgB73Yp6mEkxqCao7QTdbtFCD3oReRfktLkk4aU8AKYGCMJMyGUZK",
  "key35": "4CJ6WW68UWTXKftmhDv4UBftxucgP7BW6WVYP4pGAnLg2987hAQSw4RSZauPEZC2SDjyh9WqZtt2pA3zomvWoGaQ",
  "key36": "2eZZ9S9edqW2Vg5V3ShGt4ephMqbdAJ2nCtXGA5HH3vngkRvzepCnMV6qDAFbdNLdm7YjntNEUf6pEjo6Dab1a4v",
  "key37": "dtrHGPMmZyTchxUJtq1oP62K4zbtBr3DFTA54edRpnxdwQvRa1MEizQiJ5nU5ky9N9a3QdiinsfW5TTrEgo2tAK",
  "key38": "59DDhGSPmAnptjjqn48fQrp5rVC8S7APvXDCS3N7gweZEZUo9Cjz1j4nkfMZVgoYqnPebizAo9otHwi1aFPet9tS",
  "key39": "5gH82K2fyRg7HBTvJQYyuHkX23rdVsPSUmauRnLwvd9gHqtUsHSJ6GUvEqgaz8yFCtPkCCuqAjeLf9d93LrQbkpQ",
  "key40": "3R71YHDBUzEhUwNSa3865HeqbSV8L5VeVPgCoZgYnKs1s9GH8aEbqeXN7vioVUchSs3cPkspKDc2yC34a9PGyULY",
  "key41": "3zGJewbAFUr51HCpHqdvuNZ7XfZvCBC12Ftbq9suQAQAS6s6cTJ581k8UFNtJH3LvWzEowgCmCr3sh4TarkJrGSd",
  "key42": "3LxuPFmuAHvK9avhLto647aYbn4SnxgKfPAjdiiVbSoWA7GVvGCpCnjoxpBhjWVr9RMBG1iinLEctrEpFJMonPMq",
  "key43": "3Vrhd6Yn8Dpkw6bzBaF8WhdFMfQNtBCNfNHP6HSsTPmVLLSudNyqSjGwK82mgNUtHEqBaoAdZSArmT2zmK7RXkDD",
  "key44": "5DXauaMiJ8ERsi6rmMR3f18QvAhWmizTw8FBtnfK3R7DNratGFABEXXhjMkVarQ1RyjHTjBKxuK6cHmHJKVJCrEC",
  "key45": "97ELDmzMJcLeJvTmDa7HhD4GCUPwB3WbY2Sig3DCBBGfgvV7HUDahn6ekFaTcSPwBHFuJMWXQLCb61DxJRqb5xS",
  "key46": "66oAKT94EQNosEVwb77ALFAFq7MuUKypsYywZZHvUCWPWt3iz7UthhmNqWfaEMFUod3yzarEYXsnh61sr5o2B2km",
  "key47": "2eZS41uozzBFEhfPwGyaRC6Nfpx1y8zHWEEAbpS6PmDWDTN88mKn5dVbrC2G2GgSujhYbmXgi8oJgHtSn6yhdw2f"
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

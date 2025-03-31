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
    "3UUttyNBsePPg3emNiAoYCt7Q5kcWcKPxyRvWqZ8DHfkRca63AuMxrLbAEJ6zU8ThCcxxnXAHhPNNu5C2bahBCAH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cPEgtCYAVHPzNfmQKiKuLGrie97aCj5hajyP5u4SRBCEnafpimhS9bp4Ru951aaEnRTHKXmXy5gw9PaBWXDGaPH",
  "key1": "3ZdBb6E2QhqKyRkShcB2DkN6yaefQiEZScDziLgfoBumNhyhe32hWbxRD5b3brj7ZzUfPGZiZxLKoQGG8aJ96JmW",
  "key2": "55bBSCeF471GpbDcWfbFvu8S3EcKdjG2BRYQE7EhdqQEh3FjrHtJEZnrM8P6ceNgGaQz1EpWwMCLyKLjJhsvYb78",
  "key3": "3doUMM6EPUmU3dkTxe5MtUGySB2YfcrXKPMNgAKBaH9AKWWdG22knsTSuR1WbTSeED4Ed5nMN7G2of6fBtv1qNZf",
  "key4": "4gCHbwB6zF2kT4QDzxi4ap69QK2ooWiXTMGCfNdqDHKEWAN8mNpfSeMHi7DapKQ3mjRPA3hPZdggsHbSwwL555fG",
  "key5": "36pryPusDGNWbYiSCLC79QR4FiefvB6vB6HJxz7qFatRNknZgXjnnyqsfatR5bsHurV2YP1whu2ZFeAG3QnUrSxb",
  "key6": "4uxjUHNTc1XYs6DpBsB1Ed3oN1LxX8mpwxqD7JmibfrLFbMs8oauUpMY7J3GBqxeojc6kKVY9t6NMHdfQs9E98F4",
  "key7": "4edjWt91PscmBtk79DeKn8Jf2qUhMXEndeUNwTnCqXV7qqCuMmQRfgZ49aGC5A8FRCMRHxYbu2cQaX9rLHsZqz2f",
  "key8": "iinTY6pa679gdJ17DoAcg1JJAPihh2bhk7mkT5gWPggkTdQG3rotoC2dVbj1vnhmDj98hQxeDKJFmNU8x2nf396",
  "key9": "2Q12WvKZAqp2284t2FW7rNBPvdjCgj5ppwEtn7LMmYMpkkW65WwhxVZP3ut2bfX55d6VZ1qSZQWsxx6XYuUBPnEJ",
  "key10": "4HXvyNasSew8DcZV8cANz1zuS6ZF9JeLVfPUzv1huRVCGBZHQYLieX7CvydxarSxwLMy8os3DQNbt7cGUD7iLFQ8",
  "key11": "3WTDmM3P427xy1jr6vEoCAtkFHh2DFS593vtBmWzgJeJt1hXiJWuQEmDZeoBX3sHBLoYqhCgHTHnPDXxYwUbAgA2",
  "key12": "5DnLaLYa7qC5u6AKMfLbTFVLX2Z6oXLqVKFZngTZxsCP47zaa5zUGzzTnyR2i2BtnnCV6g8Sy56quxj64B9zZLMV",
  "key13": "4iXPDvNQbixb7nn7LNRVcYmdYcQaWrCteL3VeFQFmwLZDtdGNSSSYJirFi6yAsJkv6oBpjRsy7xc3NgfXBR1MLib",
  "key14": "2WY2qWz1WfJt2iFZxcXb4qHeYfb79TPEt82rp25JYpJujBXKN1hg18Nv9VhUiVakBHPSrTYwEYumNxTKykGhJedh",
  "key15": "2CDkLuc55CXBF6hx39eEe38LMHeYGRkUbisNzTpPVqEpBU3fjEtXmHSZ3ubi3qTX4iUUjGxwoMJWDaELxzmpURqe",
  "key16": "237gprcHR963mMJvdTiH1RRm6s7SPM1YYYYHHX4cK5PVPXNXfuUK6RyevvgTiqDgHvnaxxZ5Bhc2tvechzYNX7ch",
  "key17": "427foCDX8x6uyVbkzVmEGjpr7sTh7hhPJg9nNLMETg8d31V4G7GR1usFkNm5zQu5MwnTUi7ALGyyDxpVqESNASnr",
  "key18": "27o9cQ478Zg77cuTHcAUisanSWZQPcJTegrZ6AhtE7G9UkJAyUnQMsqQVmLDVMKinMyWGXPRSo4487PwpvoDB4gw",
  "key19": "b2Wx3HDX37HUVNuNgs6kaog1w7BvqxCSBeWXsfa6DEFGbe1b5HbxCTt2wRJyqkxjXfikFKPEcsdWh1giUfaLC3a",
  "key20": "2DXKwNRuv7qpq82jGSioKYpPPoe7CgF4nrwe2kbUa7w6jQTCXZKHJDSWfvmKpbaeehTiMKTvZP5Aa9vt1YAwjK21",
  "key21": "2gbJNZYNegWyecgb2tNM4nFMhHS51nTAfhaDLjczzGeM7i4PbHWZdKttPh4B6ojTbQ3xh5fdRbPaPoDbLy9iwLiB",
  "key22": "2yNgzHJbfgR8SQ5KCmP3KpmCxD1HV7foXsAmBw7757xJhi7nCqUDFDJuzUUqpE2hAuVaMSttVPfcZj8w2DMix6Gy",
  "key23": "2U3GVi7Mm6A8Hkyz9hVou5b6r99hTkN5XurhSXxtaJF8Y6yJxg79PvP8Bn87xe8UAqXyAWMs7pbdodvhw5Y9RZW9",
  "key24": "dKT9GJ65WwJBRvepY8rJKLBwPSuvjt4jKQiTJpggxLDmFJiKyb4ejxGMgedAFPYnAsCD6jDSL23ZLL9c1grr9uD",
  "key25": "2SChPLHqxEdeY6V4aAV659Pd1NA3S7LnYnRojvRB3YUZja5vo1PsxjWKYiFz4cAZwkAcXPf3E4YxMHNY1LYzP9q8",
  "key26": "51SoyL3o8t8V2D27eKWxo4kgTe9Ln7NmMLqu55eZMHrEQY1gQYZ1Q2pTqPhhasf1zKC4tnbLPjBoxhCBScd7Ajc2",
  "key27": "4VWZmU8cqCMC5EjpfoeGuU6VpmiusH2FwixXA8pxxggizNiQADZKz6VHAnSPJnCmgYfVFJCyxGHqf8Yj3xnByxtQ",
  "key28": "43yiHR8R35PYfe2zLhXnZ13FjmYE2khhy7JXqBWBU7KvdBKskeCfNMdGKkgVqNzNGCiikyvLEvhJYpsMhk4z7k1B",
  "key29": "3NnHQxDShiVvghq419xcrLfCQqDh7cjdDjRaVsZLy2WLQazJ3BsHc6BDaAndqnx6ALX594wwJnYBvdpnvCsxUU97",
  "key30": "5AFpbsixEUa3DRSRCVMBbGfoig7r8e1AcyMZoM5L1Xjw8r2n6XfNnxCPYp9k5CXRg2VdFPW9vPdjC7UrkX1KCgB",
  "key31": "5TMA4vBBppUc4nQcDa9BKo8x9dFFuE3VYnSrHJ12w1TyUcpoNWv12EZTNRhcsbyaBRBAY5aM7QwhXDVgyB3KMVpt",
  "key32": "2GhqqsfnztRzUTeWZHX74G2hhcp2FUY4CrNAT1iuPByDsE7xpS7iSFVKwCTH6QcMVZ7Z9ns5wY4sNKtQU7MrwPFm",
  "key33": "Z7xn2yFSrYG3Q2B91bS35MCDr7jh7UTEK3B6vKf2ochtAhkhyE55uyDSq6JFrFJnm5FhHskpXtrDMDVC7jXhBpF",
  "key34": "57kpyb5i8JBUgre6MJ6wmDTiXpzpM7w41moKHn66vg5qjFo292pu9HA3rbtnYT1rFXhJUFtnYM5JuyGY6UfPUmSc",
  "key35": "fEu4c7rFJ2yhVpWzAADDhQcadFZQG7CMk68yHQRncq4ygTJjDQc9p2iJgMuAjHPDCb6YcthPaVxLj9Wu87D7yR5",
  "key36": "4Bojd98fDNjNSnaEoPptmwQXHmgoc83UwSmneToxpbsi2C6AHLAowETJHzLGyyUFC1x3mHgGwc2zf33yGi8XTmEZ",
  "key37": "2iaTjHcz6fFmCncvqTT8tcqiTkUZ4w48jkFV7KtBEqKGDVufzSNhSB3K6JVEWF9UdCYHhJFyme3x9ZviiJMZhMJq",
  "key38": "5qaWanYeJoKR5C7nhT9Zameyca9HXTmg3WRZDm6DVGYwdLNzyd2wHEMnT6KGgwryrK9ur1cbb2qnSVWVo2QCqDoA",
  "key39": "rykkAVxMQbaVhjTt69PHo1syCEbZ8ZJA5u2q3PJH5DzdKdQNnAK8sLa7Wn1adYwoxt7V89kotpFHB9L74eKZf4E",
  "key40": "3s1ufzdL7mNsqaP3GqciAn2SLWi2GvswLKX8kuPN7LR1ER8SpUMLpFwBMWTuaLXjWJooaXBsQij7bsny1mKjvzm8",
  "key41": "U8GssyxwmrT2EgZgGambMWfk2mH7oGYCnCC44kJpfu6d7y71R3zcWBKELfArccKgiaisSMtG69s5mgk7RLGdCZY",
  "key42": "5GXs2owxNBr2ZTdYW9w5yaNBBN8qzWS2nF6Gud6aJStkwqGBZWUnabBAk1fj2kK5dcsRRE6GaHrXrmSy4fLwLgr7",
  "key43": "3MAVSjfVawZSw64VF8tMq4Wt914i9LpW1S8NVAh6crJpd3rLpCVby4HzCdJ9PeJKaeU6SQs1u4CTdyGov2RDF8us",
  "key44": "5m4FNxDuZvZwTFNAjxNDiZVdQmvUPwi3RjRne5cJp4sRTrCpDWcSe1oqDMwoRxbSRn5pxK94M68FhkrNE3C9zyMj",
  "key45": "3wW9QAGCdCPAXc15C1gCx5rKfaxZHQ2LoPnSGPD84yqCfNYXCnaUrZCMBBL6ys3YM6sD2ixbTMSwoGbeYakdz44P",
  "key46": "3CEtmchjvJqQt9PXa7ibCPGitpQGBWemT5eYuS21cMyjChgKTbWtCJ6WY3m6PxTMmHqBdfgz5cPjakHWeJLP3nxy",
  "key47": "2yfepU1tqPcnaZGfyoumxmX9H9h62wxvtMyidDmmdmiSgoNCHwXrZgov6JZZQNstqVBGPBcG2LtGThk2kCRKj4XT",
  "key48": "2GJc1xVNmbrs5k5A3eyZ7Rb27Shf4hJBqtdFviJMa67rE3vK3Dr42utT8UDemMshj9rHEPMDvat5SzqyfSAQ2J3k"
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

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
    "pyo23A9qHYecSEZLfrnBajc7gT7WRvLXyh14Nx8PyBfmuoqZGp8U5w7SFko2FD4k56CAX1aAZ3m1osq8evuMvvJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RfiYgmGuJtkomxqwmfeeRj2u5DBVaKzeFBhKEwadu71dyMn497W8Lrfrc2gKXUFpmEsJf9B6BB1RHcxDydFVcev",
  "key1": "5s5YiHm11GiCPpkN1ejfbBtFCCEK1DEhwwftjdwWJTZHfvUQnH1TXy23anQZRTLA28oXmEoqwonDpsH94aSRPoiu",
  "key2": "MmoSMS23ncyJb7XdnGKHNVKy16aDpw8NUAGs4SmBDd22yUbe7rcVRi7n2q4CBderd7BtsUjgBvsvwQGWuAaTGXQ",
  "key3": "5rTPnjMUYm1zoGKcgH57mQKxtvWwj9vfXMdrCWkA5eqE77VZh7YS4f5iXtAgynNfmQZZrCzLLe4q5RvYjqujekts",
  "key4": "49mAHih7FsTNNNyGQkTEXNudcyFfozq8SQKmpQyeJnjHX8bnm1jE17vygrKa9d6PPTrka4QeTYCFKH2Pby1Vdf44",
  "key5": "2cAuNDyUaQdeTBvcxxPYd7rkdq4tWxjtwgnt1iACzovv7JpVWrhQfHRCVpUu7uFYayCoG3SbECc86RXoS5RJCtVK",
  "key6": "thDYW2LYsbcrQPnYsor3TtDTTVabrmX6az7w5DtnqXBbmEBFQ62cegACMC15pBxQo6QvTdmBkpeiu22bEkY6Nas",
  "key7": "29pzLsDYHZUVMFsw6bzueZvyEwpMJs4Tm6LBmEXQBt1rpGn1ac5roZmKMRwHu1VDKV1ue7eTaeoMutuGozuvPwmg",
  "key8": "GT48eBhoiND67f4shah1XySh8kntrCaYyGexpTArUdjpqRYaJHenskAHn2bqaf1qjqgzTk7sKwypZn8ETLEqLG3",
  "key9": "2voLcJDwqQtLqdXzHYkTXFErecXkVDehr19giKVu9gRX4d3xQbakzHiQpLrYvi66PEBmpzTTrtSpTe7vwzp6DeCn",
  "key10": "25yqzK4XsCkyd9xUowiMZKyP6X3fnXGhn5rfwbeJum1aYeiSwoHuNhXNuhkVHhDMf9epyk6rEu5yc1pYwWBRBpDK",
  "key11": "4HAroztq6KvCisYJc5xCWEGJZNgsgVyeus4XtLo4nWPJy5HrANgJa3Ye5yqziYDRG5gfr4TU7qPWKjzarknbChUz",
  "key12": "4YN2yCi4FNsidZxZbSqNKt66PnVzCFzVxiXYzMX7sPfqDKvct9n89BnRiH7uZA2XiKdUj4Td9Xu2KJyQ4ffP1rd1",
  "key13": "3taAkVgYdJDiTspa8CGn2kBY5dA1GwA9nr6m6w6C8Vwbp4gH1DVyLEQp3AaozzvYnLjpepcUFJ4w2SE5zdm1PBAs",
  "key14": "5bqrHuRWeCSMddPoY9RwjERAnaaUf5QSEEC8icDysajN74AXhduQVv85LzSjZvhSZ4HEuroV7g3eHqTkkEMYWHXT",
  "key15": "3Scf17SMRdnaCDYyqJp7RPozgG7Bt1TsaKZ35zBz1PmvyJ4JWqQjrbgeaAMygcZV4o1oB4RGfBRYrAYKuamSsUua",
  "key16": "3qfActNgp9Cf4AzZ71kmbtyxRJ8vVm5YvxzfqALocpjCm9Nsvm4BZcznvwsZrrQg8f8XXMJXRyZbyCCZQt4kbqzr",
  "key17": "2Cyc95eFEJATYCxi4EiHJt2bPFneRza51WpYigsbC37nMvQiFhQg3SDU3Xjca44ntwrvVt5ek83wZ3mrZq44HzoJ",
  "key18": "3DcPsURU3u5snNXocs2bwn7jvvErRrvJBQ1TRmYTMRyubDm5tkTGZwwRtrpUxADgc9VcUh7pyzPoK8YMXKNorMEC",
  "key19": "4Hqxj2KSQCY2FyrRo2DkpQWhP4YzEedERtYdhU3MYzDFBxuX4kJgAHV1HmcnbFiyCeq6cmvQQQRpsdrMWpgGT1FP",
  "key20": "48ktbg8uFD4Y5mmQPAdtiyK9eBH8ufg2tyZRazwwUZB8AqtY8SfumdunFxUFJsQXobRac5AG2zPRheepc8MiRWef",
  "key21": "2vYb9CyTKszvtusbAUhqFjkugSXSKHNX44FLx3w5CaPT6PbExnZPp9zMGu7EsJiuwqfQztn8iN7LJJABQahQbhvk",
  "key22": "4H6sF8bzAFkRn9fxYA7pDvAuEJeBW1wQpHVKLCqQhS8Uj2mxoyRHQJU6gkmPcDynQQZ3XNN24LkXrfz6DdvgSsVg",
  "key23": "2UEwuHGrqeAXqcqPMFWQasZQc2fB3PMHgumW892AcTgai9mvirJNQBBUu3RXo9S1wJULdNVNztfF61ycwZVYejpy",
  "key24": "46n5rCnVFajWrfQu1dBALFQ6bsXvbWojBEcuUKZ4VU92P72RKFuva3USVSCbDjt3BKcAsyzoycpkTCdD9T7iyPMp",
  "key25": "Wb2FC8QCKH22ZRzJ3m3zpK8UQF9uaKUQhSoLqLjuKKEKbi5bXi24zzB6AhrRGX9aEaNvQQYw6GKP2C55owFo7N5",
  "key26": "3nCv9DJ5Hav8mUhLWNqgoPXEprgN1WmvGE9bGAP2cptjAWPpLid6xiiA1g2vLtMx25ayTy6Khzp5bKX1gLfxseL5",
  "key27": "4SeX1pG6mp3TkNeGCcLGWLMHmfX12HEnEsQZmsDV3h7tyD8MGpu3vFrQNvdqzfHnLZk9Xrwr8zDv2GSUGprhtPXk",
  "key28": "3VXcKMir3WnbnKMBqADg9e7kRGaLkxArsdtoFTovJQiCe2BgSTMFgdHU4PBU1cwWhkTMqNKhTi1VKhWnG2CE4Nb1",
  "key29": "2AdBoZaYQoZY4esWjPC7Pgway19KfRtc7iuLzR7k2VVYqowqzx5HnAfdmtWqtKYkAothkjmRkiiffQpaFxsDEmMX",
  "key30": "4sYpSuwX4eu6N7ZgJLR2G6dTCFGmx9xLzMEGsFSDgb29fuLC1xoh3xK8P713fiEvqREDeNy8EMpGUNLHHbrAviJN",
  "key31": "YWLG1LWWFRuGEKcEBdouHW44Y7mxJ1nPHCvuQ7PNvzAcWvt2XhSTR2FHX6Q9qxC9TjciTPGmtvT5qYVFqDz7X3z",
  "key32": "FwNt1P5AGFmxnXit6876rjX718g8bfczghtXGJo2RwUYmQFeZuFcVqnrAncqMNwq1HQLfM2HHVHSDcYeKoXsBUF",
  "key33": "41atbn5KJNq26Avv7MBuer9GVCn9dxd7VV94JaybyP3LqDq9n7WrwHnKavCpHdNXcTd5JciPmZHMKhCRPnRu491k",
  "key34": "2J9WvLrLn8RbhQUWetPxaARhTx3K9xuVybmRgzpmkCfsppk88fjcgoGN65hdMrtdR88QkLK7dAdyhzuwtv93Ag1M",
  "key35": "5pmnatJy3ZGesjKiuDtyks39Gz4u4WnFqPSBg4PXyhwzaMrKKeHH82mDbnB8KJzuLMqW3tWVr4bMS3tzUwutb2Ti",
  "key36": "4E9RKPEuiJizZ4L3sdvWFhpejR63SVrqppqiNu2KsFTF5oDjEQfyf4u61G6VQxtvs93zDJ1QmcuwRb4XA3io9wvo",
  "key37": "22Xkvm8DG7F5TRooXv6Rj2AiEC4uzSUWJTUrLCFVepma5SPoKj8ZvvGd1yr7LmjJ8djJdL5Rkscqiy37HumTS49r",
  "key38": "4q5HbMN76f6mqs4APS9mZiNdQ2Zq39u7UHBAvBLP9sF2ndjmcRZZ2Lsa4qGkVaSaWCQYnWs1ePJLiaS3UCXbLzEo"
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

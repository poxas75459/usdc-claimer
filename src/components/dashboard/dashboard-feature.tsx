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
    "2daBv1S8RTsHB1iCVQdqc8SLEJpNiQ1sgjJp1tUHKgGpkV86YANDc9usbjuUuAGpg3qh4SQpTau3cNoTKm5PGrJH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HmXXWx6VL7HQ8AjabiQBbrvdppEnJL4xq1sKW1Rrme8zWVxNT5JHqS4K5Kw9Z7qwHTVEef1BcHEjodPtEdzKSpP",
  "key1": "2EPPfb1f22Fc6yR8ArKd66XjsK3UHC4PcfANn9uJ2ohrY6rbqEZ5nh1tT9hnfwMiiNkx753iJr2n5C7sTYxGMHqo",
  "key2": "3WLoWzXq78dp7Qdpz9JnzgdNwaNPoPmV9bK6mksBNYuitbpJrYXUwhT74mWRr3yN9NgToyVaneawbTbHHvw42WWB",
  "key3": "44LAngwYpsyRPwcX126TdRkuDX5foZ7kc71TkzgLHKD9VX1EEhH6RvR5YGj7u2oMKVtdJMin68CnTMV17stLtrQs",
  "key4": "53N4HcjHbMSvud1FAQGyEeuDtxCtGx5tAaFyYJa4HYuifqSToTDgAKdgo7RJ8GCpKzztsX74wMxUi9sT3tvXqMah",
  "key5": "3xM5JSH8q2NrXfpbxSyX2n5nTqkupv2ZPcSHmi4vpKWSfRRoqPNy7eu15QhyCbdNMvWam94Sbu7auc3vjGRM8KPt",
  "key6": "224bzY9hy9h8mTTAexorXtQ4ppfpKb1DbXWKbYRoXp3ZP4FG3fVZVSjUT6cWrjGehuaqG6FQn4ieENZxZh32mwFG",
  "key7": "3RKcNZJXwy4w621Fb9QoSphKoyqSk7QsCjUD23WYd46bg9px3ueg4NTL8M6WGaEWnVd8YJkLU2VsoF6qaij4gDTz",
  "key8": "CZWQeeAjRb9Qr3BGEFeE5MdVVyuVBmed5MFKTVzaGyh3hQcTVcWovkpuUAX7EuuJQXaJ1z4e1QjzW3CXf4B1Hrv",
  "key9": "5sFXMxXWwyFK9972b7tBKdhQBmCwaUeNV8PfoMLr62rrWFHZHU1xxx1So4i7m9giuNAJeCjamucuYKhVQbyRpj2B",
  "key10": "4r4jx3qYgR7zvpgBQruHsawR85ZhDQh3A8eWEooSayfqdBPgtvuHJT6erdftDhpgk5dyufELiiTRN58uL5utVBSa",
  "key11": "4mMo1MALXjoQvq47cxThxrjxScYoBvRai8DB1DYPkxCQUuFHP6hVnr7URBvfxR8qiJWVRxsCBYz64hZSCWm8BHMb",
  "key12": "4RAVgaMSvj4Y4RYW8awpiPVe4trCQ5CdmsAJUQqiBuiaBytHCEWuwCzQyaDxezFjHeJ6LemoTuyMqqSENATdkFks",
  "key13": "4AdUVw7cKHwpucZiAPLQ3Y9YLtHD9QZUV9ozXiRzdeWgE5AQCfZ6qP7o2rBfAq5jyCwppHcYoXA3K3TRqqq51kZ6",
  "key14": "3YnjeArMQ8DWUghTwf4NThuKEQ6Y7mkUNejD6cP5oyWSg45Ke4e1qBx4869Lq5Tk2t2navdQY8rBya37azhqakGt",
  "key15": "6eiQZpfRQRckH3kT55vdyNKgxhKLwiVonwwLYKUjym2ize6i5sA97KhTdgRu2YU8GFgsoqg8E1chG6YV9k7wufe",
  "key16": "5oemdsvRve4Kg4GhED7pd8gR4L9Y2GjZAUB4EmyBBFzzBGL9FhW1nUzNYv6qDQxJqNt7jnGXi7iEB99J6dCidJUW",
  "key17": "3RsorAimUdQQrMFk3nCq6N73y6BMQDb9XTk7WpWa7cB8rAxqn2MrofdY2GNyxAZHoEUVpy12Cnkj2ipfVeyKMFbJ",
  "key18": "4WfkCRuzL8rAkv6Lwoj4rfAm6ZkcXXypAg9aVoDNtomVsT1vbkynUmyq4A3gC2U7Ap62novJQVPzpzCrAUGzN5iq",
  "key19": "2cjoCbeCEJqisqWNcCBQz6cywNG8sUDkBed1bteznSUXayHpSheCAmVHaC2FQGgs5HSpwfo2YQ4An3nLjUaLVnSA",
  "key20": "4Mp5xayAuxpVd3sYhaNeyAsYGNfqfc8S9vMiWpsLGoua8T5oQRJ8cPD13YkTXhRhWZjPRqMAW2qLesuy6bKxde1s",
  "key21": "kwMBYJ4MPrZGms41YcGRNZ5wXCQyFFqUL8KyThMRh3hxKdbziB6k2P1nfDmtd1JNwt1Se3BhnDrwuUtwqj69B1M",
  "key22": "2oZoeehgzLKSWG75uGKWdTb3shffjY6kHnmd9mS7r3Qa4nNgSgjC11dauLvrndw5of7NGAce12UZDr9m7KwWYG8n",
  "key23": "5LHcEeLHc87EMkhGJUpq9LfdXrjKb4nqiG394APxdv75xLJyre9ouPhJaGo9CTzQjmpseZ4riVgyepLxnNvyEL8s",
  "key24": "4A4HsBduyB8AR2sAcBavRNNmeAuez6VsRe1tXCYCrtBNtBVvDw89kEFaEhgarYirMAFFHjwjbvLuSBW5YAqXg28w",
  "key25": "b2JSxPEVdWnXWpgXhKK2LGGGdQLDfGRQFJhfubiQX7x2tG8vdWVAZKJsuY8boP95QK6isyKokX455xxisWr98vp",
  "key26": "5A1Nh7h29qdNER8EmGdiMTA1S7b9WZW6AAR318gDH6zuUzLEmENRkoe5jKM6rH5Bm84QKhvMA3K3rGs59ff1Hg2b",
  "key27": "7GMNCxLurycVCf1R1gpmMQvnXZ1b3nniVkLrHppCpN8hE2DvaJPX3Qge9tf8T7FaPwSzFNAG4svhtaofxopp4JW",
  "key28": "2uki7Dmr7G8C96k6xGv6YyBeKWpEMjMTP9UwRGmHJQtfa4u8SusVURJd8vAbw8iyQGHhLsei7kffp1m22cpPHjy5",
  "key29": "3JZDHnyYtSFhBtYoUeRK8bzyM85bNEM1rwqZYRVcBc2i6zHZFowAM673a9qBw88uA6YpscZH2Uu34oHcrSkjnpQ4",
  "key30": "3GXGiRwBCgoSijaJ93NjULNQvvw4mNXtwNdjFDC28uAJrJy2TUzHTAYS37P3M5Zvnb549JrfiU48GyhCujbLX6CE",
  "key31": "tsnSbU5CgUh8EofQZvchhrcXwF6CsWc5NuWmDCPtjHu6xcaGw53A981w1Tfy6x9MEC1UnWiPcvs5w6WRh1QhRQw",
  "key32": "31UpCXqi7grb39JERbkthQJaT29g66sStp1AQjri97iAqDHfuTPnzHmoSzKELY894x47d9k6vPFHHKkWNbfuGimw",
  "key33": "283Rut3izhvtWW2HrTG1CYS6E34MBi63c5fon2dBixKnEdqdKhXDNDYzNHtxrAy12LbvKD4PnzhDWztvnAHNdTQT"
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

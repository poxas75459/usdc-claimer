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
    "2xAybkjr79txGguY7L6D321PucSbni3FEdkxwePuBCFsecmH5DhKs9kHwiUZ5K6jJsD4sq4ZfNHvnfqkqSjCDhoj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24esp2WAdYGC1D4Kt9FsP2q7kFxweQwanwp7aAwttj2kwRghD7yXWv9VnXgLNHjydTD2WV5P2aPnLZVBJ9SSbDqg",
  "key1": "2wCpFkbBsgVFbcFoU7dMXFM3QKZnD52mUFC2RFrE7DY6s1CZHShUHPodr6PxkzsuDDxrvjJaTFBCXSPTe6SXyrXf",
  "key2": "3WiwTA3YGi1KHfW1nVgDMWxtSrW547Cma8WFHMXch4jYJTyTFkV17LWdoj3GHndLKhmiHCXP9KzUTFZNtY4UKWXa",
  "key3": "5vPgHbdxYZ6LC9MJF2X3o36AMFTVW64vGPS5jxJQRM8GXD4H4BEMacTfhPP5uS4hov7yk6kgYEynfCLAAgG9PKWs",
  "key4": "5vNWKLCVRSfwp1dCwi1drr6N5NTnUHuRyGbY4uxbSmp2Mr7ddnVMW4hLDFXE59ZVg7QQqgq6vyNXcbmC9QLbR9HA",
  "key5": "5AZk5pJ3QSUP3QBzUBbNJGBakRwf5wga1Ue22dkgBF2YG4StegmVrdcPEcGh76gcmhLiyfoiLX1vizrCM5Uia8HK",
  "key6": "C5EFRUU1rUsPnxYgYEJZpG3ZggfRQdgxk3v26MY2LZquoWih3Z87JYfXWaF9DDXURgFy9j1NKuLwXrT9hFu87C8",
  "key7": "H44i1pdPU6ivsMLwLqpWpPnaZRJucQwCdAqxBTvgHhJ5m4d25jaDZ5oRWQiuA8CpvxXPn3JyWxnJ7cA51k8HdCZ",
  "key8": "31oK6yxtErhiEwUgB4ZJrDozRqf9675tZchuQ5buGvC33eBLbMpwBuWyVxvJL3Hd1BGppgkKqUd5ovJHytYF89Gt",
  "key9": "hF2h6epkBkfZpgedu5xxEVeyjtu32yvZuQLcHfUvhtmmSEHf79V35REKLS7LH2XAaRsftAubUZ544mjxWjPiHet",
  "key10": "4SJbj3qChmS2i2fhagqZNFX1RMqz45JgQ9TqMzGWUxkdLRXdo5vERTGj3epZuJRiCwUmjoC65enrHRxzqzJixU8t",
  "key11": "5LdkfLsjb4VAJdpaWMGnb4gYPmdx3ooXsCR7759YU1MmYMaDYeweZvqrXWZDZKGfXQe5wsKGFPt1QWzottxefnTC",
  "key12": "3pjsMF38U66mH8NufHYzTQ5e1tdXZsMHr2WYWeeEsC5YN5XCTMAKZ91Tq5QMumeUJZpubwytEDo1Xv9EUGyXJCZH",
  "key13": "5EEdUTvmUoMVLHKUc1eBau2zfBAaTVCRDTmmw4YfcqpgYgwu2c42MB7XoB3rmNnUSfZ2WEMnYgM87T2AFc617PEa",
  "key14": "5WXoCaCypjp8Q8HNRewL8bKbkoAoJs6r9JnuoqM7zJbArSHaoJf9t84S9PdYqc9Rb8p283Gs2YJfwTE93mo3dvTq",
  "key15": "4WA9rxrPSTxb5X7GHxwoDhzcHPQ4VKwAVgodL3oa9fCnTYxfFquPZjqBZrpFnCtQ2C2SCCitgRAy8AYYMpUE1FQn",
  "key16": "dArVQo81YdZqvV72Eb627y6vo5jWiFNx2i8PNMyt16jerMLAr9q1GJYY8iAuCMSPG8TUkm3GSiPU32V6oDGkDuf",
  "key17": "3XETS8QciGENvYvcrnfJWuwXbxj8BvpPvdskk3uHnRKENCKsyjVNGCZD2NpEc6WBwHRBe2Xij7mwRaMaiqSE9DF5",
  "key18": "49oRwj5YcrNGSoi1ZTSZmZN3NgA5FFH5RX6YmE1FMN93qYKRjpCdkNtx3Wdb9jyn7rEKjwWj5GRF89oP2KoWkADH",
  "key19": "3Pjyy7riwy9XeBp8nDBNqoEVrRLzSAcYZ1GAn2Pj8tTjGbn7xNq47UZFrsXW1SizVyB51ayKkWbFZUD5bvC8sqzH",
  "key20": "64ye4NHyReJzP3ikDsA6xdLtaAcbcKsMDa3evqRfBqo3wvmqnzAJGo6eBEPvtmZ456UYTVyS1xAp8fgdow6b9JJY",
  "key21": "4urhcnvTPRPZoJkFcXoLtX3gDZavqtPyEwd74AnJvrqNsujPgyJFiq8SX8zMx7ehckXsMkEsi9TCeNVa8JnutSrS",
  "key22": "2YK4ooNGdaK8nyxgQZenox4A2Qu4qLBdxeXcpRM1Afh1Jihr5VDJzb8pDfSjraaVacqw1MCVRtybFZSk8pjUk2Uw",
  "key23": "5NzFESHtVg9cqDxsidiPbnEwepqiQXUeyQom1eKVDhfurPXNUeBdd7FMCSAWpQQgi4fwTPNxtLd811HrZPiWgjZB",
  "key24": "knKutK1drGMyzat5u38x5FdoSqsZ4uthiNp2jM7WoZU2gBhdzYqsmNfVa4uQwfLqpwMWfM8o8Qmcmac76PgSZBF",
  "key25": "sm9PcJvjJU3SUWARue9a8oAmzVU6Fwk5Lms2NVKvQRYFjGz4qhXkgmbRSa3Cyjqxq1VkYqDTUKcMcehmqy4ZS1p",
  "key26": "62Syp3CcsSBK1nxx2Ptqf1dudQ3DtP6vDzgDP9JL2TnSVLrDTMAR5hbeX2uMcfkgBavbn59NzbHr12wkGi4JSmm",
  "key27": "2NrZnJfcVj1tjEm4SheKSkiqwH3iQqZiHd8M5Be1iSSWMoQn6aZ4ZA8dmTwyKxQDYZiwTs7hoZKS5D3AakfYavD6",
  "key28": "5Uekivqfz8JZA7G8T4KeK336RnZtBVExbVArFBq8ZfqyeFU1fUb62yvHfBAeaCdCksvQW6cAKtqgJuVyXCTg6AeM",
  "key29": "4FbFgvDW4hZ5aGPZsZ48GpL33aKctPGhm1oFeY4KTPVG6nv7VeytfJdgRk6CxoxMQJAGBZX9Z2tdoF3muv8dGZmV",
  "key30": "36XXnQgm5JtKx9sZDkDFK7d4qwcP9NVG5z9Np9BNjNsucAV2igK58acHobuAZtbHqr4nD63ddkf4AqYB4R7pdCa6",
  "key31": "64UPpxAv6bYk2LbsXeHBimoecb861XcYo2Z3K6qni2BbjrSTdK1Jx7wVEGHHWTCCHNvh9sZnGMcPRzgG15KeB4fP",
  "key32": "4Uo3XEdXosjnbAHpsNEd41kXFWkAc6t4C1ym6KvRzB2G5N6hd31vzLZQ2dXxREwVgK8WSLEpd8vry55nDHz2Awm4",
  "key33": "2QEqcZAzJ7n8hBGFcPZU8MN2XsZsMtArE7NoMFzdjHZc2aZ6onaphVKawSCycJ8wPgdnyqknWC9vUVFn37bNy2Zd",
  "key34": "ximBTsjJybRTeEzjfV83gRAsCuH8mQRR9My2feph6wKyygm37Rmt8YXNY2CuzYT1wNvg9C7dLBMAWAmSAQofA8L",
  "key35": "CYLbP4FAvnsSEjBz66n8AVa1XULasg7QCLmtkezetsi57RxVnhjydRRULYTHv7gp1WVTaDxPMTJqtBUoz4CAo4e",
  "key36": "2nV4aV9QVffWNoFnUPfZqqDNonVMvP5i3XZ1p4gR98FWpZhYcZF3rkPJNqoW3QhuhgVsLRS8yfp3LLjYCxMj565j",
  "key37": "4btges37JtozNvo3U6DPW2auaWXnRBNMYppxCkYvct4AAmk4rbhis9eTH4n4awtmVb9xperr32pazgxwquiHbpM4",
  "key38": "4eVKfTaV2yGRHWupHYqUootxPGDovkESsVysWoDCduda3fTVZEZSR3BVApTYP3jkGc9jmAGP9BTaDVeX8Edf1h5v"
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

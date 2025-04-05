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
    "3qSD1BbgvqxRg79a25T2EkEsjzAadqd4ZRyQxqwTMjshw8L3tWsomeFrNhtj2fJZT1aLebZv6JxdCaYWUgZDyLT3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sPp5L2a8M5BEWrUNSu241LFbxcXFApMVmwcp7JxkoQsV9vCgdC7Rqo2CoRQkUAoR6WFuARbTpsvqac2MF7x527Y",
  "key1": "3bZdWREP6QJW4PYcvAbcQ1x9PXbkd3RKhZnEUgufSfv3crpAvbi2wYVYyAXPo8CRy2h83D8R6t25KetXkWSGZkqw",
  "key2": "5JQtJ3WMpCat1s41dHdbUke3MgW34WaMtAQ4zXLAzG5uY5Bh3epXbCFcaN8Sp5vp8tnxyvS68SFBfPtRRBGHueET",
  "key3": "3fysBtJF3h2QfTMfBUpgAc76YGZov2CZcNdjzwbbr1jEgGCXAWFfVo5jEUUR1y7C8VPEeMpsypVcgrpBPBEbapwf",
  "key4": "3i9FZ7DAtJpuAwCdE789UYYHFcYm45diyyvKMSuvg8igJZ7T2PrqUzwcgP2MGaQtpq3nKqCL9BTwWqaDMiaSaebV",
  "key5": "58Ns853FxEq2dtz61nK9e6exujH1Y7w2P2G32ehbvHtyXBCkiAgHsXtoqPZoWyUXPqtN2HL7KeGZvkjo38tKjpS4",
  "key6": "3b5DhetPSKDTHwgVpqGGg67CJqrzgSWCs3M3vwV3PpwC1xenGctJGbeL3PqPC9WEqWbe7xhWqfceKRFJDy6v1aZ8",
  "key7": "2WmLfMxT2fZFWZ3YZcvwiemk3chC6hnTvMgwNHwLmVzqGdPGXxsVa8WmhhvsVUKCXiqdE5Wr1ueNvkSSza1MbJ6Q",
  "key8": "6J87rvdjaUtDWYvvyFQ9cis3ejCgg2L97Mj6h27Y6qM7SFfbNJUCYhVmFF4eCv6fbuguogWnrFP78xVzgUpvFN5",
  "key9": "4BsAtdQ39U8uGZmFQ8Qma7L6QWpNMxK1qb2bSXTGa6riGtWLM3KbjNqawCeTq1WJWNPumpoYGTjxAjDBqN5YxowE",
  "key10": "L6Pk4z5uxtPP9C7bs56ioA7LarUnaDAPc3PKZDgeVobVJNMAg2jGN76S5vbcrgramxVg6egVTYTUKCRX94sQCNx",
  "key11": "xGnkk1vLeD7xd3LTzbPx2MY92gdhi5e8bxu6uCe6y7g6CZFFMg8eyriNxZaGjxXYzMis42ViwawCideXk63NsuS",
  "key12": "55hUKwqckmeKsFs9h87fYVpUaQXU67QdFFAgqNdpjE2XDYoMXrFLS96NrTu6yBTaSyYMstEqGHkWskoQfEMNyHSq",
  "key13": "4HyBJK85urmxGvi5CyVFfUDbzygRSxc2fDSNkkAGayQBTyC6gRnmHZsDyXEU7P9Z1hC61GNSt14Q8L9KTLE1rTKT",
  "key14": "3hnwkqHfB49T2Aji9C6aUa5Hngk792b1Y4Xj3zi37qh24GpmVfguZUsaX2CJG4oMfEDekKMbUVNHafqFbf9cdu8m",
  "key15": "5DBodyQARkN3ZCVzhYUaFFFX2N3j25UWGZhmFP8kHFYQR9RmuPxEMuT3cu3FVmb8heVeBB58P7ksQUMBkFMCYxEq",
  "key16": "29uD4ngVYxxx8D3J3WrUWaidqvXPXdfk19WeGL2HsKgeADQ2Nn9ECVRkQyWdeqbP4EqHimdQrW8TdGVGu6gGWBmS",
  "key17": "3ZahGLvoRZKZuW4jdPRgAcpX9iFfQHhDmUwFvzBqCnqGxwJc5QQzuzGJy2cAjbaUj8Kmqi1ppQqXnSjHux7JUGRa",
  "key18": "2BqS6mvEQi6nRbBfVMwkHbaVGq66wmV9EhbSwvCAmDLqAKNQovTxpc9UPBLTVomwGfwaFtZsvxf9ma8dJbCV8pvf",
  "key19": "4M9FYb2Y4WiELWLMwqicshZfddMUs1SHsHnBJF3mPbYkc5pLcRQDLAdCHdKATPDEEnfbjAsxvrNAhBjNyAuH3U4E",
  "key20": "5mmAwm28v27AEA7QDGb6MvnnAi6BuvXC3HXMimMd1ws5kcLRDDidiJiipnAohpuT7XyWeVvLu3yhvsapHqFW3mNt",
  "key21": "3Yn2xT4cuiZxyCr4GnnfcqCsbcmW2kJjAFYwD7CoLS5zRUPzFQMLKSMTTbLTMvKTGjUjcQWHZqhK669zDT5Q31xi",
  "key22": "5A2zk2VxKwfv3BSJieMJfLHLa5WheL2hH2NSYCpwr3Jf39SN7vsLQUdcDnPox8Ra5BgAUKySxqymiJLyH3xYdUE",
  "key23": "5pbsREzdq3JcfLEe4YX3Qn8ptfptgnrUGnsyT8qB4qMSL2LnZAANSznPJHjjJhHx6jcdy7YU9P5ihN3BEUAbJCra",
  "key24": "57cGodb62Q8eGzkWKJowrT7qEfRqTZvgD2g3vVFi2FPZUf1fqmb8e3ChaBUuAruF2WGrQ4nosjt71SMosEHXY64y",
  "key25": "4YejAVmHXfiqbb7BK3Fie9ACvGe1CCr2ir1r4i3GwPHoJmLE1nRaZrr1RhC8qzcNZhth1BzmfnUBp6QFzGguYEbM",
  "key26": "2bnjRwe58XQnEz82CMji6crPSaPiZbJyHmtiVgtoCWj4PtiuN6rcJExb3bdwEV9mPS8sdFY7u6n9JFiYLPXpcDeJ",
  "key27": "5aH8dVBw7KDn4CJNqKAkBxehTEk7vk6ZT2UteLUPaK8NseGs3yorz8FL1Tu65tK878KEtgSH8uvNHpPqVXWArsL9",
  "key28": "a2xoptFSHeYJYRArus8cyP3H21hJn3f7w6637ppHvib3acZJoBCQZDQcdRmVpwCw5qSLbEB5sCji2ErHvCYCD6z",
  "key29": "4Ja78ruKaFgb2q5J5QNUMKCsNDRZn3htfg6J3ixGNDqYQT3B6nbeak5JbxeFVznoGi7F8ihhr8U8QW1thqFRC9GM",
  "key30": "2hurGbGGVY5LcYKhGWKDpjvgKpWaZftDKXVjgXVM3aVT7Y9n5TwDDCTtR8Q2mZPLrk51AjHwstJJHSQVxWr44oWf",
  "key31": "b4i2QfuNQYek2PDvwJssxTAToeaMsud5FLxwoKgB9TaNT6pPRTj51B8rgWXgBJzoiAkt5Zf7G7GpXKNA7Ly71M6",
  "key32": "5yzH1ry7XrHYkoAo1e6Sk3EEe18b3FPYC78ZpiATmMghsvNdSB1CpfsQyvjNCTQwy5F9wcj8KgjuokDP3UqtwGQ5",
  "key33": "39a5ek4S9DXKt4zhF1JZPrgLEfHvZ1c8as8hYyjvsRe26AW9CTBVHwbzGHZzq6HLJvQXsAAjDsbap42Sx9kBqzbV",
  "key34": "4zTbths52XzX31mQUxE3P6XP64XijXeKRkrdzQh3FKEMWcYsKiWPNMJREkmEtjnM7FrAAbkzxR7DTDeyuzq9r8Rv",
  "key35": "5iRr8xk6pYtTbHPY8B8aFww2MJf8wZ5qA4AUSghRCCmS7dDVSJsNQXXKJ3ghpcnyFWsNnEzkEQt1BiPfix9FxmF2",
  "key36": "3FDrpjW5Uuc7nGcJpghMQsvimqzvmXK7j5J6QXWijk6e6qdQHbhZ4owZpAkfiRwPYx7Rgw7bj84G7FeJocKDpYNP",
  "key37": "65JK2YWKAyociGGTQdKKmkbDyXvnfq9y7NWp155k44VQnseuRhV54CbDw2KCAj4fS1fzytMctqYDebWyC3Jk1Fjv",
  "key38": "3anq8ePDzsANaqKQBuoMKJVaBmEn7r1fsp1QJrrrNjpMvYGKyVjsdShGTj1LKJ4fArdtYgjsdehQEw4wrCobDsJx",
  "key39": "3h4thZqY2S1ZG2K1Dg4PJLyuCRnqrC8Urr4EGYqat3HA7Cq92Dw9JDKXU26ZtdU4YstU4D93AzRL3dzBdGZFY7oT",
  "key40": "3YRx6Dz67guDVGaBBwiuZdoboMCE4PukcRppiTN5TN2Sy3og1wzXstGkJ9oMotS25xjUALPS4iCoGNsXaDxHSErr",
  "key41": "32TahW9VYpuS5G5ipeY32fwNHGZJA6HpNwE6XMAL5e4tHDngA2mhbaoiQQWmi8wKDhiLcfzrqs5budESpPNVMTUB",
  "key42": "442XhYpMi8moCtDdJ5H4xesismoE49qeCj9Msc3mA2S5TZgkru8c5r8H853tuYACxLZw4WeNEmm6QgAUbU3rzYzU",
  "key43": "3GUFiXbtCKL9bZfRwUkiAJZ3t1zAtjJajfM1JpWbr5Bf64isZX9tVFgAe94EcazQRCE82ujjLZRTrTg77at8pp9q",
  "key44": "4nfPxtn7kgNtjS5DHDTPzdN9yFybWoxCFX1ZDDMH1Lgz1AxfXg4yrArTMewFyQWdyYg2o5vCZmaCuKDm9PbZixE4",
  "key45": "5R264zAHXx1LLPdhbq3rPC6QkTauohjFWY2sXa8SLc5yS9qWzqA2GiMc5SmjJtAbo1egaRRGjkkbvTZPo1x3uQ9m"
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

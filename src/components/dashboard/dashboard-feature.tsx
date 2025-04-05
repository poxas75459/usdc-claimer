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
    "3N8eX7AfMVQhTEYUif1MAJ45yaQKx3U43uePtJ5piTkT44fJviaAbcsjgmf3A4tmhqX5ZNJKYYzEn5fUB8CzT9qT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45dLCHAU1gqAeUSEDRcuRpafBQCc4amkeKwiG8rMrr4mXeBYQ3fPepfNztPJTdkbSboNwaKnJ67zthNwwsHov6rT",
  "key1": "3tkoc3R4xse9PNaKi5nZx21jNkZRQaE7N5KhwCMeHyEbYy8YuSgrTuQut9JwehuX3A5NVRCMkCEkjQS6Ha3nidhT",
  "key2": "5rSVVwCN6FuDh89txVdYNzmyQh1L7RBVMvuPBZfe1R7tvwySkto9QCehsg9CAu4MftYDtMGKRH8a6pvutvqu6qNA",
  "key3": "3kNEJm6w48nkXNZFY4QkzMag5NHEgzAgBbxWABxFZ3ErL31mohrSGy6ZDNbkHK6YJyh5hvAfxHR8an1dpKF9dPRJ",
  "key4": "424PoeEfa9duC41CxUdwaMAcLDHpTbBMyoX3LsfuspiuYbLmoHkzwcS2SnWfnA4Aor4sG11Q9KtXZpNsj5S1YMXs",
  "key5": "3ZKENz8DxpCBJrbnVyYAeBheq3B7zioXZekohVPMXztVgKNc7gBsDDRuBb3F21MNsU56JsiHxyA7a85H1LG18eGL",
  "key6": "2WBPo4h3aNvjPCzbmJuG9xCRkV6yBQax4tCkVu9TSG6AU2e5ixPR6fQAifvKQLBTRr9SM48sumD4CmB48y9okBiN",
  "key7": "3axDLk4PtvFu2yKQETt59qXVJw4U56DfRJUEf9TK7sxqCFWQcXv9dQqkRHBeodwE7PRQczZAi3JkQoGD84HZeUs8",
  "key8": "5kwcNw8Bzq22m1CZDpr35pd7FCkX2Cw78qvgngbJestLHNbgRDU8m2aYgdrnfb99PHaFgYi59PqnzrT4h3qefGgf",
  "key9": "JKzA1A8ywSryve8en59CsQa59MGPxdcHT3d3TzGJS9Cw5VNZAxmT12NStqZwFHiCHNoSCzPbxRPUBP8ej359U4S",
  "key10": "5YZKcgfUVwaiDaQmnSVEpo2EiQGjwLN5W8WTUDA4TuGKP8deZ3tFqXnpn3P74e9mbnzqb5dvdArGV2DM5aAbgZQ7",
  "key11": "3gcR4EQ9RDwc23XCNJ5gcYjULExmVTAFsYzFjETdqigbVSvx7Eq1TwGd3mcgEHngLKjHiBTEntnMhGwfxZmWC69X",
  "key12": "4MYe44cnfn6Ls7eUXQfYf9XbQZD7DURosxDzRk4epcvpJTgxbUggQimrUV4waEpTs8gHiSntruapn2S15KdMT8qy",
  "key13": "2rK6H3VhRSCTsFRJwVQEZDbRDhj9Mo1RfxGC8z7EacEXuwyyjAyH8TF4F8RTjwkE3bczsMAmc7cWJJ7QQcLjSpp3",
  "key14": "5CN3pYPuNJR5oTz5aCras6usB7LVBnp5AUkYPwbreKHpMWF8fnxAv3S6d3c6u9nTvTAjRdjr5PinsfBCmg5VA7vh",
  "key15": "5FF4XyQNcJvCKowzKZPcSdTDxYjjk8F875S6txroKzSqPSBaFJJ3z8NrnvyWG7HFfGqMcpGnGScS3pkmc6qzfwfn",
  "key16": "rtTHEgWNgqx96MyFcsKsPJURfJHpuj9JjAKrymU3QYx72hZykJ2rtfzubj3HcGcNzFWdZQmLUdghVbmE6hWzvLc",
  "key17": "2aq2AGY6qcbf6Ktsv7mCYXTDEc8kvzPqYMQNBQsKhTHbqamPMZrmiSpfwpEapaih43cm3dHmFDPFCcnt64k7kqAD",
  "key18": "f1pdqpvawxHhnxj5VfnyvJhTSKW53nr4H6nQUu7s62f52pjSeWtw9jJezyauTtStceS8upoVJVy2LLMExwBX628",
  "key19": "2DzgX2Ks1ipZvMsrmkBVTP39bh8siSTeCXAXkCqQNtgNQ95vB3ojMdegoJtihKqW5hvzS8TGf9T3UVfRvfpHybJN",
  "key20": "DeYSuX37A7SZbukYuLEFe3isfDjpVJXm4WURwXKBNjDYHKcpaE7xDpXA34RRpkD5q1WGgT5A79AWpHk494Rb8Bw",
  "key21": "mokJzsvWW1xTYatqC5eVGLCZfTpQik7txaNYKVpKMHXcZ8Q7GHx3zVyVpbDRNPYwMihEnJPDsEzUcAvnbZjxcf6",
  "key22": "3zwKBanvdMvheZJEdvSUZCxvzTUzWZCDizUasjmYXUB11ECrCoYgQVuKzBo7dRH2eDEtP4zSK29NABGztLkgRi39",
  "key23": "4a2VAfsynLJJBcgYvfVhjFkmzjwvH9FzH1cgRNzHSzb4eUpD2xhvawMeUdutY6FwQAyn5TsWDwJgHseSBL9Etp7j",
  "key24": "5VedGrZ2gwtY5W2BZhMSp718aEfukskh5YqJem3M4vSGFC5GxsDXunBgSMzi2DM3V9QiNBbbYViCnUSf92NpzNg1",
  "key25": "Ps4tzLH19hVtpwEQADbe9dCjysCn1k8QmNQwsoq9nATvmJuDdp6pFxHtQ48Xmq4VGsyD2EpqfFxvYyK7czTpjyU",
  "key26": "9FeZvDVfsgxUeehwHZ8pLVCXLuVFzazvvH4K9kFHgFi9Z2sooVVawc4b2EECzGi78VadFJbsT3yKH6hMWUTqNQZ",
  "key27": "6gFnHMGyPduYQLsC2TaL5E9hLqcWLzhYZ6SiX5CSazUn2nmghECSLXNZSM3sbS1ajPFU8LZ6xwP5iEDtuMi5QZd",
  "key28": "5bihSi3dErkjfS4FbMNVtgRTwxuHmog588LzFtVjBfa3TrhndKvkY8QBX9ouT8g62bcFumexAsyJmHZfYqxwiEnb",
  "key29": "5rHs2W7nR6H4RxJhBit8ng78yeP4yTRceP2pKy82ovxjmwk5UcCYei3PyLh6xJp4Ua36wh3ZAL97Si2Nu6UdPS2t",
  "key30": "3VQW6WQRfvaajdkA37ov2cvtiZzUZAJ8rPVPEPwJsCRbBta8Lan42u8BmHAg8qQs8UucXF3HDRYHnPVDr9pbpoaq",
  "key31": "2QHCo7G79Cu9KRuYDVB1SaY6XF1XcKXJxiyr9GWDykDL7YRbaCTTawkpjJSE94vS2J9wbN5KickX7ymGA2ZYTg8Z",
  "key32": "xuPqfLQXcNqZfq7cFTYeMPcsLWugmJPENA6ZSuMkrhk2ciFcEhgfjNaLiMaZwcJXEajUiVcgsdSE8byz1TntBJD",
  "key33": "5Cm8tERU1eLKm8yKyB2CpHZ4SNNXSkANbPLRfnGV3UF5wGk1ajaF9aHWrVTdpekodJpVeJJtJ28Cf3v1e89bSNSz",
  "key34": "552MkQbZ9dXWKi7MZh9jeqCyhYeqFX1JRJBvdsrayTfKPBVKAxRJNF5wGsNnhNS9dD7jPZ3xKMg1ByEN79RHnvxg",
  "key35": "3dXspKUkrFffuSPsBrtMxtRgasW1L7Fod9Gy6v77VAn3MndwjafxX9LpzcTMNQrADoDKMc1M7BHueqyVvvD14v3B",
  "key36": "5DKDSPN6Dr1rakjBCrCGWFCNF9vNAugWX2Jf9cyyd1147kmvVywETL8MRrqsTwKrH2nadHxKCWtpogQripgiyPQz",
  "key37": "5aotkJJmXt52MaonJ5dVbhJDXMyRSLguKiyPQiPW3C9eHQmhREazukKyT1cFZeTG7z5qRJgLMiKAyZMiqXDqq5zf",
  "key38": "xqzhkjyzt3eURnL5Fm4E1h8x7QUYCES9WUme2gcM4UHainfdQLWMBncWauAcwTU7cUmARVehEESfjxz8Q2FjE7i",
  "key39": "4baga7vT2tTBQ8xhDWudY92KMsoN6otCj3kAED5wsZZYaw4LudC1WPHeEcDdcYKjyCG1aU3EhBaJAQEgchn8Tu1F",
  "key40": "37LiPHBrstoD7F3Tw5JbB1M9sfK7A4YcHK4fpuUMWNfX8PKXN9rgAQ4cTd4uaFrtNLV5UaRGMmZ8tfPxoBUm5Aj6",
  "key41": "3eJf12NqTDmxEb8NGNqFucnB3GBDgNHNw615KgdmZSRYw7W44JKmcveCtzoxFaLJAhNyF3e7FYK2DFNgpkrvQEUK",
  "key42": "4nLaimD6XyeFEpV8ffXyxUf739BV9gFNKv2DyirYD786gTX6Hsg2nwu79ypENu8NcKkHBH91EyhdWcpF8C4XLV86",
  "key43": "4tW14gjTuLoBmZgRUJSugi7BLbkonDZq3HkNJTpVpj8p9voj3XVNbCj9oaDFvcgVHQB4AAHdH32qYGgd8Fauav9M",
  "key44": "5bRRbcd83P5fu7KTfSUny2E8ThDvXfTnnPHR8NgRFPkQJ75YAYxEwrW558j5qDfoAM1VY8mdm3TnK6gqTxPU1der",
  "key45": "o6vojErx4HxY8BecYvbXBEBhh97k5FHAHzasgL2KCoHWEEtQXBxRz6TAzvxMPe5Ggy1rDu2iCNuHx6t9Z5wRiJM",
  "key46": "3FuTzeam8RwePrf54wFuBj3kEBG7h8NP6BxZ8nKUUBkWDYNDzRWjAPsZ5Wf57dHmUaw2hJPQwLg644HTgi32VRRd",
  "key47": "grtWPkeQr5KyYQmspuR244ru6ojVdskhiKCTknAtLwJX4CEYZYRDx6vYuvcedaeUNGiwm2vP4XAwqp4hWNtHA8L"
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

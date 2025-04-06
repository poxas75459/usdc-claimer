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
    "2JSnqWf3Trfa11cW9G9stmXKj5en9ABMdetWBJkUYfE7eLKQUymPbGTNek1M2fQ2UDppzdmZm3GYavTsCKV4Cmru"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "218XWsmXu1Fy7ewNEnpKoY8YiFiKimWQiGzRZhsEZ9d8NgW2zAjrnBJ2RV4UEJrnwRrHERknAx4he95YHzF2WnLx",
  "key1": "4TjofHvBoGK3dkWsCNsXRY19bkLL6q9fZPpzC57ZEaruJH74Zcpxriufv44EHPeik2Mp5HppbSN7bzDRPkvgyupH",
  "key2": "4d4zU4NJTtnPicwKKei2ESEs6TfG9FJ8v1dwF73NfRkrQrTfoNWeRYrYUgHC2KPGeXR1qF5ZQCb1QyEGnRs8fpwj",
  "key3": "JkK68jjQCzFhqaMHnRv1jJEK18z8Yf2vGyNzq3z1ur5cCdHX6n1ANmRvq3TkAvJqK2kedHC6k7pNUBA2NpevXz1",
  "key4": "KFSKhYXadRb21zm7kYDUstBMdxapJxArfV4yFrrTugMePkMgcBv1D48L8pzZSwxJN2UrBwxaAUEhqz5DxDWkskF",
  "key5": "2sbH3cvw2bLmt9pva2Las7SFG5WDvpfk6x5kx5Bd9N5HM53BQtPmi8pLPoUGp5pLDUe8jcRW1EetoGizyvG2jdqU",
  "key6": "4TMoNauED7gw31roEkwvbpiFudXpZr798Ewi6y3TkqL94jRtd9ChfoCECF77DVG71pouSyKv5m7opFwMaPXq4Au2",
  "key7": "4BV3yLG1cE4kjp37sD7VnreKFiw1LDJobFTwimL1oo5ooBdcQdJAXsHvgvuso3sd8dATu8uydnSYcykLqkiHfj7a",
  "key8": "5rzDs1V8CwYysn2Fgf9nMBELqKTyyUzLRBsoqTSyTLLMQVUtZjFjB1ePbWLo46gsAsQiReHkbSucRikFuXKSg2Tp",
  "key9": "58cyy5BkqhHZkdkrESgmE2ofqy3kHWqFXLohAZXv31gMHmym6oSUQ1iewtNAFs32nsogJT9U8D7HTdDTEgVdTURw",
  "key10": "4jp1gSyazopmqmgvzPGUrU6NoxnaYnWEK1HJHH2YeVtLEXbBxVSHc6QCWEXC52gjr45gCcuNnhRhRvEjpm9s6DUf",
  "key11": "3U5xAEscbqRtzXz2Pn4FZEZf8Kecu4pinXL5C7MoTJ1YUSzphboS7xD4b5UgRi9yNemFMaa7Ayt5uvb1V58XPU5G",
  "key12": "5jLmZH7U1VMutgugsKLQCVzTxrmdaQymG1HYTaZ8CBdEzw3zP2W9vQWmvjNUXQAEoQarkvjPpLXTzmH87qci1JQj",
  "key13": "3C3uJfWBw61QRg9x7W9mdc5NyPJZqwzfU6Wx1i8PfiYh5DD1SXzZjAhg6DBv6HGTENYNBQay9ct1m1GEvjvnAgLp",
  "key14": "4PtHzPArxH4JyYTixPqsbaZdhmxARpsuLSLQySeCFTAemvp1XcK8VcwjKGCgTmmb8zDYt4ittyjLhgm7qQEfRsDC",
  "key15": "2GTFap7aw2ida4ZJio4nyfGDPahsVzHM36JkeL14kNjgbvc7qR3hZAKyW3EDvSkc98nDKgL5e861tNnXspwCiWVT",
  "key16": "2JD9UZtjNVR1KJn1GbZU1XotvT9QbZDaos2Zs33EP7kfrBaNTmCQ3byxHJAH4mvTFwgzbqE5fRFD2tvp4BvJHvyd",
  "key17": "4a36VPBumHqUXFd4teaWnRQUUQ5iPs11tzqKE3c14uzmS88TD6ubovQpA6oJ6v8339dq1jDxHy9WqLaRVZvi8dMx",
  "key18": "25VGtP7q8gFCaVwEYoheGCyTncUzoik9NdtcHYk9KpPshbmYaX1YDHmuKVwhkyi6eyD3UccPmJ55iJjak1SYo7tc",
  "key19": "4ju3LGoPNFvv17Td4jaKn1MbnFrN4xmKfakCiaVBRyqaPQffqnGg1eUxPPLvqPea2KUQWpSfHE3mj9qEnLEBums8",
  "key20": "65FyeCdfg4qApDALAfnjMym7CNNnrtmPagYZ1RCQCuqwXH5phWXnJZx8AixZZCdyJxcXY8JbvmDhezZbhawMBFct",
  "key21": "29Li2Bgp23eFfpTXTsXSVNg5si8vZwfepshk6eoxeevABQq6TahfbgRcL8tD5iEF1wuTLC7fJvCgkAXSra7wttsj",
  "key22": "oJvz7g1nPnEC6QDaS6NWtgRvfXXaQnEk4AWgYc1xctNVZxFU6ZEQFzXGkZxqVqe8CXD7bpfhhr6Cvja1qAzHze4",
  "key23": "5Tj4y645fx22YZewJy5s4Hb1y2qcJVZgJ4oszLEd2rDh1uTeKDFbF8ugx1WRmab8RzYcRW8X6Up11jmVz9pfhNS2",
  "key24": "LxmC7LtHw4K2S8GVtKDEGBKYxFazEFfdAjGz1bX39eMRnveB9n7idx8T9RkEMLfQpSvHnVY9CSH3tHzSVUZNENc",
  "key25": "481b2Z6Cz6CF4Bm6sTGdq9FZvnQUVG6VTheshPyfKVnUWsLYQdAuUL2aTcB6UL8MGJs8BPmVTpSikKv5SptETNjK",
  "key26": "NMHDiSVFXCYHojjmaEbvnta3uk8gyKddMj9K1xEHQQFNQYhcsGvvKToZzRNx2xsNhsmTUctGsSaC6VvoWvsG1YH",
  "key27": "669FxfR1P7PMJ6DonWb9mBg2ttMPLWVXVVqNme1godJ772bVsmbrxzDM15rneDYWamCfvviDx5wjBAVhjbAc7r7P",
  "key28": "5zXDqK6f2D7JQT12HjUKQXBVcsJd43z74kk66gdhrH3h8ceJnsV1Zcoc1FwrCgmr1wMAVzX2VgjyeBsa132ApyMz",
  "key29": "2wBR4MMiExup15vtxsXYDLHGKCPBQw2UPKFNLHeuS3D3moBcyhXwxRzfAJDzjdn7Fx5prjUb81DbpUvjXv2PNq7F",
  "key30": "2HLa5rgMCee1rTzvZE8T78cMxjr9gCuvwVhTE8bRST52FbHyEXeGr9KkkQrtRrmhugvQfxv4LuG6esL4RPX4Ms4E",
  "key31": "LrkG7UrjEm32QGxX9yUzHCU55A5tVD6z1UgMXqvVXBsvac763s37yLLweHXsveVvPuGmvTujkxZscb9NvzLWDeh",
  "key32": "58sqWMS66zUpuKmimeaYLEgnv98xRKHn1uqPWZQbEWqUYiJC2xAjW8Hdb935mCdZygKnqUxywK5Pu9ZZhJkBC5yr",
  "key33": "5KpQpf8minEfeCcbxiTERhfCXX5VfiAsvAW7sHbHiUR6mAmpje3Fsw7gdGrg3s1oSGhMtzX5ggWmMdV3APeQbfF5",
  "key34": "642VSZqmyhRJyvHHyMsET8rCjVGM5PsfbVUp8PbjNshQMJK3sbYqSZmUWAjTSFJuH2eiUuYS42hp32dxXK6HPi94",
  "key35": "2RT5QMTQTK4kQy9uTGSr28oyftWbW63QkNLjQybHFyHSrwrgcpSLJXwg9iRUUox81FBtae2ZF82E9kSsJsrDmSts",
  "key36": "37uAoHu7M3p4ALt9xbd4cJ55X7LAGyWgewQ4BTfuWbTsdkJFTDRByAJCtdEphvHDd1mn4pGk9kQZBK5XYsCJyjB8",
  "key37": "3TV61T4VgLKV8xAwmYJVQHebj36JGFcPSCF5raiqco2Xf9SeKYicmjsEhjTzgU4fDxcXQwNekruNNt32BokgkKtU",
  "key38": "3enYzf5iNkqes2AcGKikaxx61xXwrAqow3HL7bNUfW94ZmighqFv7FqwZdwzLjMQW3EzZoVRcvFYoXFb3JUZDxgA",
  "key39": "4rNtKEuoBUpcaeRDUSWFWpQxxoBeMTLryokY2deSpaor8fww5aH4yFr1KcZLFHPSchQbAPRquBsaZGa1oVmXkP4d",
  "key40": "2QV6hHUSg7H2J1uqyAW7ULHev2DBbTH1rcrDwhnMP3FjMZuxvz7BvEES94WXLXugXR8dNEUXNsFhYCTmamfMzCxT"
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

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
    "3K4u3arbkuBhykbzN4Mu9WezACYK2kUkusKYxmHuUx8fDAdXzbmE4uWGmCbDn8hpXJdcUPgY5kegUdPcN8pjgqJE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eFUktHjGPCyibxyUuNVz16yAdpmGcRCzSkkqu5AuwpkVskorjxFtcUjFCt2uKjr4K7EboDeLJ6sXgQ9HwyM72Ni",
  "key1": "3jCGJyyhgzPwJ1osiLFjpm4XSo2YoumbGTkFMEc5sMV7T8VbWmcmXTcddqmLB3D5t7upiJJrrbnqxtJUfjA2YKgb",
  "key2": "2d1U9DbdJM7GhZN8PrvwNPjRwrYuPntM8Ye3wbkjY82JHENsA6xqD6Pu9pJG81e7m8Zzvv1xs8iyDG4j6qooETeg",
  "key3": "3fyoVZ5hB88PDbdeYucyi8GWGctYojk3C6q7NW1STGiXy1JBMmUPEHcAZAVxVEtta41P9h48QtsUT6fh4gexYSJR",
  "key4": "4d5mCTuDYmHGN6pdmJjwaG3WD659za6TyRBncDTpCvyUD31SKvmoJKzgG1Gmr4jjWLoT4uB7y94GcrYeaeb8hZAP",
  "key5": "616Gyw8xb5LC4P82PesPwpxFF6zXZCJSBupnVunYyyRsbtPpAZR1RnMiPYyxqxwXccu56nQFjLpCoCbhmYNNRG62",
  "key6": "3ztyn15aAniXPXvsJ8FqbGt1YTc6PL5XbMhdxiuNJpoch7KGyK4MmFS6RyeEKusou1Q7NBaz2ysBwMXLJJpKSeU1",
  "key7": "5fQhhsCKhxEr8Qyt6AW5aj29KQvxZcASpYeFAWrhS8CKcZnxMAy2YkvPKhfTpqEQgePiP3emFkA87LunuNs6o2uA",
  "key8": "4aQaBid7E3NDSeddF7dhvbCdaqRB9RLf5NbV61XFSw2eag6WsRHVKbBjyRv2oBp83EL9exaj1PKqMZG1Ceb7i2Fe",
  "key9": "2avvWFFGAzE3qcLWjoGmUyxnD1SWjmYehdnK2e9yKJe7PRAbCMJWtnza6nKeD6eJ7fCabAsv8hv9iwM7NgjTtdoU",
  "key10": "4reGa6tGtKUoYpZbK9fv4M8QQJio6h1zJ4AJkRSKGucULYHgQ2JfoY3WdoXNe2kCWGaUkba5xHv4tK8bkQ343RiJ",
  "key11": "dBn936BVRrg1hCr7YGap843QGDTSm5U5DKnDNSgzDaiRu3HsYMSWQcikk4XGyV3aGjmSe9ixXaYQNbYRreLgFTc",
  "key12": "2FFxu7MjQc7gz5MWgcJ38xf4V1aLedgRzuAsiFQe69DPJSFs3JEs2fWQAkZgA2qYt88eFYdDWm5DqxjRZoorFRDU",
  "key13": "3mJDvoAubnZKn8bpPvnctXrCuRyqxaTc3XR9CcWKxeW7jyw1HKNHeRF1WDMkno4REgPMHSRbwabmfz6KkWoGdYne",
  "key14": "41dLt7a2JTsKSHvBsd2wWTZauYmpRRkS6mBDvkDcNeCtmrkXKFT3puPC5TZvM4pxirmGkiGFUdzcJrcspFpfRgQg",
  "key15": "5RNfRX8pUM21Dk2bz3GiFzUJnyTHsRPXGwqzMbcnh9sHoaJ6R2J2FLf4Tq3vT9fjraTqNAyd5nGoqZ7fozfsCW6G",
  "key16": "5jpkhDXYuuxKRUbbfmNBq5wXiPv9nfYDfKcUeLUr3Bt4rep5nuT2KcvUoxAAuQaNS7un7Y1AbLwKVSookJmdjXE5",
  "key17": "rdsCyf9cHaQMFqpzkr5mR85zgvuxFmQbEcCHMzzHVdYnpT5fLkC7YyoJwscgygs7iyNabm21PC9RecG6BaAtaCE",
  "key18": "43FU4UjyUsjw1PfuhGYL7XQQYtExu1VtK5bQTzJAeSnjDD5QuHVkqAy3jPpE643NCQhrqXoph3nxDTS4mo9noXTU",
  "key19": "5KCRrvbyrbGwXG5t7CtdKtFNSM8MHXTpHdgp75VvGzxY5qYJ1QDYoA6wmmkKbwZzcxAN2ryuhX9zQUJN4V8ZTZu5",
  "key20": "2oVauzLX1Lv8QUGZjnoRXmkGvt11gq3fVncGV2bpKVgs5jHCSm8GekkvLwfv7gNm6B6BfjcQeyrczcNRAAViQD2T",
  "key21": "2QPRDEhPDwmQsFkAt5pjvrm12K9XgqDhopqN3a3bTNUd8WkwHGnLoBthrWKRWkWqTTxySEs8KEMiRuNAUTPJvYGi",
  "key22": "2FFBUMB88PewuEA35gt9VEZZzPEWyLErBjYQxqw2du2C9WH4Avu8QpsvqF1RfkfEtF3Ey2Kjf9r8jjem1AuPxke4",
  "key23": "pxSHF1hcAry2NysP9N5hUk8MB2iDUKMVgxV6cWkzdjmbh1EWiSC5j9SXcoUhKAwPwFNFHVpkmQHzArGrwYearnN",
  "key24": "2PJZCKLXKd94Sh7BTD6VZ7eHW3gW2FhNJZFuJapuuPAMYq569puzK9Yb3obaaXeTbc6QeyNQKS4xrtqBq9n5Bjqp",
  "key25": "P9kkAQJJ49DARBoNXLhmwMjnBzFGKqLyQhdiqWEPrQpS7Mc7vKof7WsoFqg43jgEmuU9u5hEcGbFQybkabBcEgJ",
  "key26": "hcv58LGN2PzisbtoWHjrg1u3gXVG4LsUw9JZ9aaFVt3vkP2DZKN1KaUwEsDbbbQLKATS42xXXbJwLdzYoiy5gQj",
  "key27": "2bzPrNspC5pSAJhe17BmvYfqeDhUvSddmBN4fkAWNyK73urvLUNA7tyvyreAX6aykxErfAW95GN2E7Fkhpb2f1oG",
  "key28": "V5PeATgj4kdLE7Ffh6CYKWVsFYuifeXn7JR3cEB92BiSgaxjPSnomG2RPQsunQXDHBYmtjk8Vm9mhfM7L5GV46i",
  "key29": "5nygirZPg1JzK2pb1BVHRnE9p1RUtC1tpAouNVh4KCXpS4xLodQej8698QfU7pa8cu5ofrvRfqJChcGR45DPs1ZM",
  "key30": "D9wWkajxaXK6gFs2CbeaLP7HeDTMhchdBiUgmzs4YcqYVeezpQsxJoubKri5r1tx2PQs7PJSBdMZjqktsWqMD5N",
  "key31": "5rS7h8h6kaEfoLLVNPS17M4iS6n3wYujBW2n67S5Ke5ejkPsyG2GvcxM5ZLg2ApSGRwCTaEoe7svsfHqaCTQrNmT",
  "key32": "4P3PzjqE8stm4reGumYj4b6UaowcRab9qtkaFksMeiRkt68ANYPtBkHimqLGnDkVcf5xxPasFyjXsYg5mTd7zyWs",
  "key33": "3dq2ixJp2MWPSNk9RjV9vq5dQho7Z8SdD48sBa42FXGCuQ56YYzG4invdCNn7npCBQkspT44gVjZV8kMPMe2PZMx",
  "key34": "386HAAmY2EEXaTkF1ubWpbmRuGKbHxMipymDZ5rnCkc35FxuWkbncBqiUmAVcdfz45t22pBeTK1UPshzenC516AT",
  "key35": "3z1Qpba8DJpt3j3SbJhSWwQQNgbkXbagbYK82jJWNtnYCxrUsAggXWfVs9YjQppS6tZPCRvwgFybUHN84dbNYGw5",
  "key36": "8ZnQGhoYbZc4eRJG4c9ZEaxmR5rAWWUE8VHceKtXh733nC3SBMTJR8eiV8XLgbmdKzE1fxn2jSJtPPw5XCyBhz7",
  "key37": "26uCRD8B3UpqtMjAwBFXWTJcEFo71Wg9P2U1LUBaPWnS6fuNkYXyzLXfPQFuSNtu2uZXi74eFiDwbUrSb7Svyfhe",
  "key38": "5WrrxMDxbfF6gQJoB1N1DMbPrMQVgq7SmvGJoEvVYfePGSnxeC5sKJsHgRGgd2AVErvgPELpqX1yoQAz84JWnqVB",
  "key39": "5V7jRJbeeSAcQctmyZAGLCT49M68h29yDXdUBfchYoXAbAnM2PziJoBWUwgaMNEyoG2hTw7RVtBSdi2NMBDhFZdp",
  "key40": "5Kj3Xoud7BgsQLpaTiRRBuGvkK6FdRxqA6muKQEhxatkgx6dAXTSCNBH6stA2bBjapJuQYRbJ8F5iNoP8j1DnUkd",
  "key41": "3DPgLdMdKUDD8Xy41VYVUtkkxkvjN7KHfeFT2uscZpnJCc5HZ4wwe4MsRHA4Jw6zgwnxTg7hTMpcxSia4RNDVS7m",
  "key42": "3WTXWzWgNDXXNfERHPV7N2JF6xXqCXKMVv9DBZ5iv7rwvLkATxjWhNoDM8QmJmSTuXEE4BDdif5Dqj6o7i227LF1",
  "key43": "3BGNFFudqy2HiKU6xU9PeheuRSndXgUrkHBm4rAkA7JpfX18B5Mpi7ChHFQw38KtAMDETvbX9Fth4g6JBqvw52WJ",
  "key44": "5pKttUxeCuxbFWJZjRqcJ6u3NidtouDC1rGgjjUZQY8QG31ssegHppRyHg137g3jjRkzSHhJRNHEnjEvAci2Kgeu"
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

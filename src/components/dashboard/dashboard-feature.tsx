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
    "2zkFch8grcEqaubUZpz5yj2fNPBCDVg8bx4wo1U7e4sdS7AevWMUijpwk656PW8U4oJCrMocfAQG7epfkMFKJzi4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J1FU31ydYQB3FBiiH6jPD9vMWMJKRW2ZYpnc6ZnaqRZN52EVFGjcCGYmYWDUtvH7VGTZnTQhsTbx4V2yUKBvDwH",
  "key1": "23cCr1vu76o8eQTVSMhKjytFpqix3y3q8JZP4XYp5jTRkqUEug6j5NgD1Sn4ZTZRQgVyEg5akdEGANM51xSiq3vS",
  "key2": "2KnSrf1zGZ91qcJYhbtdyGzzigHiHyrE6okE8VV6e6QL598GAGJdFk3keRZ5Q2KNgkxtwK7WGubF8k5YBbKAUZZB",
  "key3": "4fCBArRbGVu6KtsRzfAfAJxSFYVVLhVyqNJRPie9xsC8h7MCtE2NDJ3cEYuyZKhCHbm5cPTwrYxqaZ5ujAALdgde",
  "key4": "qNwnNe3MgtvC2AWQHhKdyMoKZ3v16baXdtzHvcRx1Wy4fdv69cyLmVuk9PDpetLVcXdL44yLdgkLSx5BhwVZRnZ",
  "key5": "4Bvxo3MTGTzWgv8RunFujkqw8BUBVbPFcfzZaydBbqgXhfHpaAQt3MBade6B4CYz6wCPcJhYU7UGypV5aCpaKiCm",
  "key6": "2s4LcYu5fjYfmKnY5GLfATAYxQuYAAYe1qFGVuCF6XQVQnfbzRHTeD12ZewGZXfJpaZeq19gWG1ZwysMKsA3NAmU",
  "key7": "HLa5MpMJ4RZNxHEzyFsFoFQsFHj7YjVJKBxHDkaGdPz2yc8Ww1DnjPVYW1tgauZMBQ3Cd8hng9wVuE9MHb97zXC",
  "key8": "N799kxTos8MDrCSLgdC8Y7TRLmdHfUEt9NhouB47vZTw4EtRLkRiaXdJZbDmt8ZDpinmV3mf7YdUez7R6Q5Ekii",
  "key9": "5v2L31GbBr5CP8GwS7Uq9urMtaHt7VcejpZwqPvVQMqRW1cJoEsVis1k28oH2oxQYXTMWnk8T223nQvznbRXvzgT",
  "key10": "Z4Dv74U5m1F4g6SdPVjwyniW9SDi9sBM7QzYnN74LTdbkr32SCKqe461mDcQwzHHMnE7LuaoDAU6fijkiS9oKVm",
  "key11": "5BMZ5mafjt2QoMdpMEc8e7WhB3VZkER87Up7nBy6tBBimKKY7v9JqMc9bQwChUGE5f4YKmznYnPa6opcNMdxtJ6A",
  "key12": "2xErhaAMSbN7ueU7RGeQqHkoxmQ1wk91GoU4oqiiQHDQ7gtEnQbCe6khKT6YNctew2TZ4Qwdd3jKaMuyQUrywmz6",
  "key13": "amoR4TKRPSWWJn2QK83e8A4gEBHJmbX73TQjeWsHDpuq2Tog2rQyxak7xjrxXgLVCT9P4g3Z8ZeoSZ2Ppom84XW",
  "key14": "3LT5CqukHMXXpxyCaGKMU8JK1Gsxr5sVsnMtBRAVsATfH3g6iqwkXDZ6LjKSk7CB5PjEw3JmtmCuWcgNyvyAb1hP",
  "key15": "5jkJiD9R7cErqRLXp3XmeEW2sGrakmFP311zqGPzDHSYcLBVd59vPaVKYkiqyf1dc6B5UmfJH34YhzNKdZ4WmboY",
  "key16": "519cJK1ANR8m4PNGa693XXfg5dPAvnU9abTMsYvDAwnYoWwDpAiiFVNawD4VH5ntkhj8nB28NhZdfuHySm1pSWbw",
  "key17": "5aBhavCLkUMhnw3hQbHid3Q3wNWdrYfE5Xe76JW5oesvFZ6kCPHCJnRadWbMPDTsT7zEfN2ZftKmKXuTWkEb5Ny7",
  "key18": "65aydRs7hAqxgMMyxyUCEmq9RS57RwK9xmiPV342dLNpCGqGLCCqk4aFD1k4GDQLHxsDaChmYXdJ5tdQucRJ3Gn1",
  "key19": "46LVLghA5B6S4nmWhodkoKuyDiJD3xqZnJYQxbkVcbtFvXhkmBTFc2BPAksn9UTQu4DvLZpooqyCff2266avBmKc",
  "key20": "4fNde2vFFa9LVnYNSQppxdNUpH7cUwCVs6sh2z4p1xnKaaG5ejiVzrp7WfdtFEubmt2SP7Z7xPH5hWQdAfdcLwmY",
  "key21": "YxUArJR58wRtYDMPUHgFXzLmrJdLrVUNwW6TfXktm7mffUxartTYabNNLt6y8one3SzqeEcdZxButb6k2b5NYJj",
  "key22": "56kV5udmuVUXMnuPk6AF1cgr2iWoHYmKs12usB5BqkMucRdkao7X2D3C7HUuwQdJh8U4NC91vE28GJVm4AJDXYe6",
  "key23": "4a5cnhA8ctR4BpiJx13Wryn5fJYTLmWbNLAtaWhpCbgMkSPak8zgpjNP42DfacXmXLSF1MmJEt7AU5zLG6X3B8rs",
  "key24": "3zuhUWViQxtygLdQ6L1oVf8gKCMsegJq4HMxp7np3KQ1ZuygpnDMu2jPxKc5fpthPXzcDhGnKKGDT4o2kQnZfZrE",
  "key25": "4ygXTNNxZhEpaFMS4cFy3hsug3EqZcXiojgiLgUtEnprph3x3NCxTRTvK4wbcUgJypZ1fvnUCMnXA14p9XVGRuQ6",
  "key26": "5ykjT98BCzUAtBPYY3TfLsG9w8LTYFTECiimBom2EZvTameWtoyk1uWUdsNmNEg7Q7owBWqatPprxrDmw52bRuKo",
  "key27": "vZ11yMAfMhmzgE1LrZjSSonwFzfS4kQ4x5m7QKcgNvzSAknKLgv89r21hCES6D65PDis4VanKEEEeNrkXxxK6r1",
  "key28": "2iw25kYhaMiBK7gUoAgKr9Fzprn5mGidtGqVoHdtT7hhmEUPaR4s6g7JDZ5YJraPfNCjPi1MLPgAkPcBKEfbyN5Z",
  "key29": "37dd36GdvRYPm9vTFSMxQSF77MxaXNCGiWTTqgRsRk5A9uRV3NbKZy15xxudHWiy9CFMkSVE55yWiZu6PaCssZv1",
  "key30": "rfMFh8fd8zcWaQuf8UJJCDrwTL5Ls4U1wx7GBVXSkrja9VhgyUB8iet3FUEdjbuf3KFbg3tsPapEZwy2d6D2dgq",
  "key31": "5q4zTRuHJhm8DqK1dwFSq2UeaXNKbmDYcUrzYnrctFMyqWbvDETEHQnRx1MSEwKqDXrC2t7vG2ojz8DcTS4p7F2G"
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

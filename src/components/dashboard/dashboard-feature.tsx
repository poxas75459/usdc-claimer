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
    "5WfY9e9xE5yZ7kCvEJj6c7bBmdHaUPyX1RWjE3aqmKecQjSKoW4C7fFtMrB3f3ipvZrjTHKfBR3VNrGrMXX1q1V6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oA4HNDA3tEd3PXKqtApZDJ3vwoH4C8iA8Sh3KP98KnWRhA5C9KK5yyjdA3KifX4A9rbh2VYUDTsRRAwPXMY8nJU",
  "key1": "5B3kR6MB9cvCoaQoCs5uBUMpSzamVE55fcbYGqW3JV8WCdqNrNo3x5jYdg4jundiv7GVCJvC41PUpwxA2K7voqCm",
  "key2": "2eL2qVyxoJx32WBUP1oVK7ywJSiJkGpSMwDnAdHixh9gGHNz1EBC19DjAWHW77eLhNx6abgZ2qiXwXoPyt57Sq2y",
  "key3": "5MzrCiZFKvaqMXaWU9i1g32qixqsNdZS9m1ToTHbPdQ5aHy9tiXyHzV5xw6oThWcy9sM85QGX8WMWpAA5jZdUuVJ",
  "key4": "cU8JfGD7HhMVjqLhKDkUD1heRFZepjBBtFXPUWhSYJfPhmnL5F8pqbk73ddzWesC3yvfdHyMHcKzVKnYZj3eBmZ",
  "key5": "5E7SxbavoJj2ESDNvCf49QtW2nJ5EKgyNL1JAhJtGbH9fpBuN22n9Gp34gaKxyUY8nEbFFxU8gBkNfDZU2nBbH3e",
  "key6": "5Rab7oKghKnNa7QV8ijmWZ1VQ8McHHYEYUi8AGMCKCUt3Zsn147drJRwnXLDbcRuUhB51FysxtzzrosesgBYine4",
  "key7": "5rsGVyMUj3XhPJqN6Zzxvq5v777Wpeehxmow67sRkmRyzR79U9fNUCT79K7n6UokXREs6PssBaAreiAUuxrBJdBP",
  "key8": "3Bbfuu8owAvxZMfhxyicdJD2cXaRHKydXTx4o75XBzfCuScm6YBv9KnmgyNDuCVWhQxe4gZJRN22DGoTTvn5PVQo",
  "key9": "39S4vnspPRLF2sZA5eVmyeLcdxat1akxprhCUbiEz6cyxx6GDdqNadPp9afZRPoN2oPCrfiFrS292TBProQVr1EZ",
  "key10": "2pUhjtRXTNQejJpcxDeKavKwweB9rCDek4yGZjScP8DUQBkjDtvqPsrkh1K2bzwQGACGjXUgzMsSr3BHsug759xg",
  "key11": "XGYHZ5xqSwAkb4HoorTyCgGR2j57wsjffkiAxCbonx6FkNGpg6JyRQLXGn3rKr7K7XV74RUX3eB9brev9vjWLJJ",
  "key12": "2VS4KqkEUL6DTCdhESLmBLyeyU3Z1WgyKT3YihLjL1zaESBbbft1Kp7tnmUdDSzbTzEWSZ8Wz43BaTDQ3XrzRxVg",
  "key13": "2XPeeg9R3jH5LqfF2gJqB1VopTaApT6rJYD6Ypq3urw67L3fLCi3HgV2YwvjN8XPgA2EcxH3vmRGbKx47cBBLskR",
  "key14": "4CVKEYotPbdpfWNJ4hFKTKBNVAdu25cZR3pyzx1HqThbUKhGHF5fdS6r45NvDH2pUKtrrKComaJPoEAXmnr7rB2W",
  "key15": "3d7FiED9kJ5UenKd9gwSnMQP8UH3481NcxncxmLbETy4ntySCkKCZN7Epsjay4xBP9oUkwzsntJZvWUF4yH4HRVY",
  "key16": "4FTENbdQhxeGNUH7zZTQmm2PhuVexP6vUYWEbsifyERFHzD9eLLXvAzFzRPKzcDUCiUBF8rfWCeN1BDvusev8tar",
  "key17": "22AW7SG4NXqUFGscE7111XDFSf9Kg4oxfPHa5Bi1EA3FxqrWd9fCQz8b5MWJ13xXgLnNCVAkLDcnZPCc99yvBRaL",
  "key18": "3D1h1gHbvvxuNHo8BsccxF2HpjpP8mE9kbRDr3sf8M6Vg2AoGpRxpyPh6fd74wZf4XhDacZ17UpAJsEzzMqjQ5rD",
  "key19": "3ZdZtKBkGAd2GhPomRezVABLWSBWbDg6PqGTdQWLQmJpaH6tTSkHEAoXAaw9a7SzxAnQP4WF3ZEH9JDeSqo6arHR",
  "key20": "4oPUHV3tgKqAxL2BHg4fZ1M1ARQMcPhr4mqoQvqxRieCWLAG6kic4FLzMHhmnnW9mWZzJ9kTCwnsahVKjcizxdMy",
  "key21": "27uJNRWb7Lt9hRt9V4v757VYySnUUDWgL6kjDY5w2p6XvsgQxfRfiVA8jce1yYX6i3LTTuq9JkTGG43TnYtrCicB",
  "key22": "4WtaTfMEh5fKzNs7bvY7kgPaLSkjKpmzGguBWEqq7bPNKYySoiobKXdV5hwtVTbMxi6yhfapGHf5nqNyvwZrRpB8",
  "key23": "4zoRUB6vHnSJNQGxAgR7mmFrnqKW3FGciRZt8NoZQgYGBQJhe2hid7XWBuNPBQYfGn4BNUffKM5a2Za2H2chHiZ5",
  "key24": "2uAQzFsBPYs2vW5q3AhhzZoE8qY6sDnSEpWUX2N9XwLueDvTjH4mYUJt8vLcEFcDXsZ4HF7eq51K7cpuR79g9yLo",
  "key25": "2DG1Jna2tT3nncpsJnK7oSxAA8bJseakVxgt4EMRN2yLVQaWQHNc9Lp7zqYK1jrAqoNrZuiW8mLVsmaJWzP7zX38",
  "key26": "54f3Ny4LvHThcbRcgCJZqzNVTGaCUZu1g8eGAXApxGccPvbuziyab8kKmauzJ17Uf6gSqTG8qEb6aPbhRCU3kWeg",
  "key27": "3wkD2YJGpyGFZMT9HBpMfnzTv9RQ7NgzYaKb1gbCAgvqznkwR2eL9wUiJXz6TiZumoybTimtHitxqvs83P9smCBz",
  "key28": "5RnSb2THkhjrffv8thwf3qbFgaUathWq1sv5aw9gFZAwH4m9QMR36vcMTAYfDvmRDoguv3mmgquecCDtsLF7Hz2x",
  "key29": "4f97QTMeYu75tpkoa8rZEccYbtXC5JDoBrw5XunbwCXPwxwh332wJsgDGpiLu7k59wnk2nANf5QstAzwmpKTmEN4",
  "key30": "4M8eKuLHiRgkKCCK84CXwU3DfGvQHeqgt4AVH3d8aEnSwEtamXeowEtraU8kd4pFAwxhLUQgG5L1e2nKBrZwk8NL",
  "key31": "3k1MtBupwWMCAEpBbrkPQSD7GRT618tAVjjhLM9pYUzH4YaFgNXfxP1S6nY8J7r5R2EhzuHViFtu3sRyCF7rskSS",
  "key32": "2wPWM3pgNP9ANCWCKy8fPjxvcaJMb4CnCfQBU988pjzjL8hoWwUvhz65NK3r4RaL2fPS5Br9BD4i69c2A3bdUTnx",
  "key33": "2xi6zzXc2t1gHQ6mQcSNaUyuvqukzeAyCUuJvULurVBvhGMswsx1k1DNhAsce3xS5UhYBigF5Qfws4VoKdSQLNdh",
  "key34": "qAxgom4CQvhGJ1ZFHzxnJ4JhSGJTQu8ryiDQ8bZJ3PncaXNSqwcD6zM92deLsHWWhzPiWm7h3cAZoYyRppa87iZ",
  "key35": "548pa6xnh6s7dAiqhoqExMh6Ac62TDd3RghycYW5VX4WV1mYZtHRoy1aDkr4Wt6sUanv3VA9L7zT2dhnjjzGgSt7",
  "key36": "5wAiBvy3RsqsYYjqufSF4BPSsBgUyJCJUDccxFygrFu1hTxhpc7h8qkP2D96SMuhf1858Peni6bU7NA59daGTwWS",
  "key37": "3kcBp9StpnUCbGkgyzD1nMZvZrFCtZKNNaVd7tJTuiH2CboFjqnZ4d5N3SibBVuHF18sY5NnHQgdZVMfjwuo8TGN",
  "key38": "32tJcQHN4bj56pHQNbSkv2X1SoAu3aBn8fqW2kGTjcsxHod4qVzdHaK5cXQFMgzY4XcfVKGidP8ZinsTTYNDXXdp",
  "key39": "5JpZmX8qPNek71tUzf9PE7TXLQLLc2Ln1nfMBnGFZyAmQYBznhUxXn169oMJQ4pFS44CQmesiaoZojVegiXRP3jo",
  "key40": "4VSFvnR1J5JhT6eZMHi41eHR5Z9WogmTSEffri9P6ib8N6FYfRF8EnhEnr947nFVyXQyApLvQqiybsnVHmRDg9Y1",
  "key41": "4wgfGSh6PQJqJvpWZ247H2es7pLyAPrmfGv3RiJRbvRr9RWtPfCTT9JidHRTyWCPfuvgzD8jeqhvj5oQgm5nvqFM",
  "key42": "3KynbJ3kfwW3omjCDcY3Ab1mvesR39XyKPEQYyazpvHpwNayRUZo3oJk6eR82ZfosW6eiHDhPXsMXB7conNSqoWa"
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

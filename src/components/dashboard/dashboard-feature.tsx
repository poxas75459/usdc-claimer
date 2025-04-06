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
    "5bUnSenAygZ2wudmSh2hHYkipnzK5dLts4fnkxdrzH42Hjfiqg3K8pWRU8pjeiXr6fZ3qrKDNUL9ASyn9qPsVpp9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Pk3Dz5jBgfzfRch5RVNS63NspuEKNj5oF7yNE2cXPArn76tKQBTrsQrH31UasYnUYALdCZN1Ys7w2oTv6MhMEXs",
  "key1": "5PKATHWucZbAjpsN3BrBA9yEcWna4uLA8GhZNcXzr4XbfQ9afq1BWTdr5Z8Ka8otGbkS6cJt9rYQx7CkFoH6nnSt",
  "key2": "65rPq4iqsdgKHQUALkjCVTaH7vTQQthbs3RJUa1UmR3xKrgjFsyMWkudrA6yRCoceFu1HZoBdoV7grmMP8FCtXkU",
  "key3": "4pCMZJstdtg2HVkwn18nUrunWYg2BZ4TuoP7YBxD48gtLHhVjBMizvbbScwrtZdwZ7HCggw5P7ao7dfKKgvSTzVQ",
  "key4": "xNyLWJuvu8BedvwSj7RDKaCGjyr9LmMYBNpHUZZRgcq3p1EWpxkrzBcVY5T8P7M67qf5S38JzG9hYKYYFUvjc5F",
  "key5": "3qWExdXqZRpyQDDb42Y35ADAo4RajZefEPGu3co7FKaohHRtWhLRHs7j44ECtKjm3fbhdwNZieVNCsbEwMjMrtrt",
  "key6": "5E8SkxG1azrnAUgcWiS7kGsETqCTENEubhzjBMPxs8c5NtbAbeUUct6GhefHCgFq1bambaYbXCb2CoARk74JPUW5",
  "key7": "4FUjwJGkgVzjEK4zekbpv6tDtaGMZ1ArHF2ztzd44iSFEQb9XXoYcFvnyxfXnYZ9GoX68P1cz4xe2UVjBp5EaR6h",
  "key8": "2AhEUzub1z84AXc8MEErgRAJTGVmrpYWQNJEz2E6X1vG85aCBKKxyqHpt6xq4N3BkgVXbSUnhumxEqKqFmy8BFLJ",
  "key9": "5eBHHh6HyVhBqUZteiByKPC7mMRCYLSgNeqWs7DmBzNMhv2oLrn5t8bbTej4bf1wi4w79viuWBnsE28jziTD4FXp",
  "key10": "2ip17UAxM92E6Li3f6JUt5F14NKhGnTzJs82NZ4xVmuzL3Xrqn3L4WtMjd3ERccd55ZdnHSvoJyucLvPSqBS5YDt",
  "key11": "XUWo4KRmoN1owqeYUsKPVfeYLeWYhu6Ujt62iEL6ZeCd2dptWsELmVXJ68g4eykPaRn2tQnRzqZrdeEZDA9XWTm",
  "key12": "22GdGLHzzyDCBFQu7a6P1JGkNfM1SMF8EnsPhMgD3YLnWDLsopKRGN8A1iifg5mEmaU2kU8p5aUrsnQnxmJdXb36",
  "key13": "3RYJqxrpDXwcuZQEeZ4NNvid46Nz4m15R6SjwoPpH19LpDggPB8UvafRUqa7UoxZDh4hyhBZ4V7eJeFZgJxVBCZ1",
  "key14": "c18s1iL6bzYacJDGY2pzo2NpC77JZ3yHhFg5mWcFb5yFAjD5DLhdu8uvcmX59uhK2s6w1T9v6T3yk4PbkrjxtVH",
  "key15": "4dZ7aR9WouTuGshAp6WyMXS3coMdrtdWdYWHhbStaHHeCofjmC6pUNXuUDUd3QmGUZvATmjTm2Ji6jihnPvGEyUh",
  "key16": "2v5HpYn3WCShBr8Hcjuofnae6HwRT9gSgqX8PLAnZL2K5afyZNQMhprbBvw76zQ2JJLaqXD5pzArWifTr7gNwHEX",
  "key17": "ob7pGQexn6YkV6oBjBgCtFAFHPW2xQD3mdkV3ekjAYSfRjBtthZr1pwyLhkSMx7nivmE21yFJZd5fKLMRCryKPv",
  "key18": "2d6s4esFMLYbQFvbHMSSQuS2NbaAFCkZ3sKKmo7nTBzSETRBDaL7uMf5Aur2uQhXkcaE5knZHeR7bgL5nGAbguPx",
  "key19": "KM5T7SuSyC2VSo1N1snbFDQ7d3xGV62SRqw5MUgZayiCPkpA1ihqjCpsWd4fx2KmJ2K8YKAbwxdkCuvVEGgHkub",
  "key20": "2rKFtd4JCwjQvXcn1rKPKheGRtYn1JsdGntVwTwrHQhTGAKDrrAaVZ86TeLvRNrwFgJMkA3QhUjk7HeN7TqmaZru",
  "key21": "45fNJfYovUC2P5w6vamozBTnpRaDQLVZgiQxGjm8k1JKDjLTZkhAHpX2BB4ZZEuQ7MuV2oYCw3sduEReL8tJrAJ8",
  "key22": "3Ubyu9DPPv89H31oeNcbycvRcnKVVwNdPnBeqiBFBQzKrfU9fGgroaR6jvnbDAX35PjneUD3NbkifMAyRnVkmiN2",
  "key23": "4vKE29DTPabM5QKcsG4UwJZfSzS84W5abJGVSCaGBzUtHg43KS4Ht6e7ak7vGENnEJxy2gfn8UgSqwPosZGCWLxE",
  "key24": "3qgWJzb95yLQRqsrs9MdHk6zZ5sVpy7J5o8Ek5eAwG7rL78QzjDzSauGY1nG9T8QmD3hHAuCJMfjjbgMKgVDuz6c",
  "key25": "4uFFyRKo8hDhzrztY2Xx1CrytjTc8YRoLTRan7wiiewhzxkrdnHmwDH6f3L9ea8kvUEZsThy94yLQvrX53JHgQ2N",
  "key26": "3PiazmULUkXh4Jj6Em3xrmesRDpB5p83tyfgVAzUiXFZgekgAfGg42RxFXPtooybKjaS8VvDLKv8ncaLqx3mLc6f",
  "key27": "62xVqK1nkS8E5B8wzaW6cZ9TxrBvGCxAHXJ7jhgnV5LLfnmyJShK2KEWWEWnJNj92FQGXHTVyaF3rX6DcA3F3U8Y",
  "key28": "5fdduMvYSQ3BdTztfPyqbFgxqq5qXSPbfJvqhVwVDA94hVwb8gZinosKtcsRnM3Qta2e51DMx8tN3jLYGYwhaBGb",
  "key29": "5FvKwCg9gWLLWnji5dFVhmE6EtRuAPHNuxXBmrjuCuVy36XRYkNBJEZ4Uf5KUhjGkH7NZstUpYHSsQseZbnZFtCv",
  "key30": "4jf4pZqchKpeiiNcWirv8HE5tmeMmvQkiUcR9Tq7x6GqJB66r6WvZUq3C5KE74yTgWCCmigK75G8MV4XjeNC65LR",
  "key31": "2b71mg6SS4KdZ6o6kz9UEzYHHxpjPNjRmBKgLQTFHrydDPsG4jYJFgRt1HHn7kNn4XohfBEFHrbWPecDcCFMLrXS",
  "key32": "2kq8s8PjN44WEVwrjTi9gXCCgo4FERkmpVBjFXVYwbgvvSM44CeSbccjV749v8uD7po5SVpqUV7oHHK6np5FXNty",
  "key33": "3MKVJn1WiS8Lw3cK77K2osFkzL7hZ7xNbf2Y118v6G6gquURm5gG5c4Z5y85MRz7VFcMCdiF57aexc8pdxsqC1T9",
  "key34": "2zpTMxoBB6Dpw6RS7rKWKi8mU2969S6M4uC7qJ7JGCDLf86scp8PpCUC9Gq1t4taecedFp1nzy2DdbNfvQeZpsTq",
  "key35": "3dKCMszoQnes9yuzXTnoGwPkhcFJ5yoLS8Et25dnZFSLwrF5myyEVufFEDy5ud2hvhCs7hq53vz8ANKCUm2pFkrR",
  "key36": "3LRSiGybbKxc5oZpGqaAxddf8CzuKEVLig4Q2SizmQqJqGUmyCrNV6s5reKxE986yLJNi3Ja5v6q22RBkRKfMvBZ",
  "key37": "55VRLS8j4q4fWXKbPYa3FdDqaoK5oY91rPc4vFVD7zUP5dinawqPhk83gm9o91ZxXMfj3s26vtk564eYs5D96d4S",
  "key38": "4oyufmCM4DK7iFBPiF8ewp3dn92bwz9yk7Uezkqe6wKfrPJjCRJ2V7CXmtv4xCXiPooFb1QYkY18KgCW5JHPd3wx",
  "key39": "27Nf4FFHSqo5PsWB4Qn1N24zoXdCGbXUhV5MbCnnKcW7bsVU7avGUyS1dTFiTpdwgucxnYs1Wimm5XG46NLa7hgv",
  "key40": "3g9jzLWZEvne7Y7fUTKe8C7mxg9yZMPr3DZXPSnBzL7Ayc78ok3gLuLXkvTyXCvgUybg7UViPoU9q7jdMoBy5dLp",
  "key41": "5DVgaWLL8T7vtfj1C8pju8oroyqFWSDLaeRRsV9zvXwnmYWF8wxRZiCL4LHWXjQpSZ5JbeREWFksHtcKquQLrS6U",
  "key42": "38TUcL53LskMWW52dzy5Byr9aPTZLffuWyhwFdhxPdwVGkWaUTKnagHKvdNRakrtpncytru7RccwqcHqeQLEZQTp",
  "key43": "2zjHsu2GSM9W6f3Hv7317W1vk2VJF83YrpCG4aoGcFLKu41faK9pFYwaCs1UitcSzyjTpC118KgQrwrZao1DhC8f",
  "key44": "5fACva5UTqsuxjsRB9nCRjpnptNKnqwB72K2nxjVWy4yKGyiypmnMhughg1cvNTc6DV5H7p44SaHcr59pCMvfJhm"
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

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
    "3PFbut8waBUHksYMPJHQ7fzXhnc5Z3X9zEbFYA9x4cCeqFR5wS9wCXpYaZKtVszbGUeq1euPcmYkeQ3gTwg78SM1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GxSqXfUUHmb8wiku14Z1Gbb8hciUpw4oqBXd53AAScK827UqpFz3C44cuHJ8R9eMjP4Ab4FhRiRUkSGrir16mbg",
  "key1": "5G4vPw6zKLCCzYX2Ma18veMMwYkehPymBRF3eVV9Cf6ZN66FAiCLBz6sJko8QFYACjVFDi9aGYDrfnnUBD77jhCL",
  "key2": "5nchLrEXjnVyAxSFPWKC1xcp1ENiN8wh52AEMftSS5NTGzJrXRUK2VrkAMyv7UsceRwgNhELvMZRMAxQsTa48u8G",
  "key3": "5fQbF7uSVar6WNBn98DPh9aFR7mHKrzNsGCkHNJyzsqxm5kmkro3YoxCrvdZuQKLGYw73nkFk1zuTpNzao9v6PtF",
  "key4": "5696THJAqC4h3nsVnU87wo1t7MHyszk5jVLn2xenqPEeJ6LfLujB9wxcFuFwQ2z6PVLZLBHMqbK7BxQ5KhibjHqZ",
  "key5": "34vhtXmFBonbpTzwSWGwPgj56usbAhHZPV6aRZDAijiXcfnJhRkHtT9Y7mqC54oWZEPHcjG5amJ7zKfKbT6K4QfA",
  "key6": "46dYRnZNW4MhZdLwgm3HsCzD3q2pS4pQNLin9CADJ4upnAnVZZgCZtAhh3cxNybQqgcBgYWACCd1sAKFgGQqhE6K",
  "key7": "nGWYFtmMwbp47geuPRNsTPn7ev4kPrmsAsRtmZiRicFYVqsAQDfowMhdWP3B6f1UsgTNyoVP7QfEaY5ZNMQSm5F",
  "key8": "4U4k7f214g319CTQenTnoPxwisdoVzskUFd9jhn4dMvFShspcjJLDPmfwqUMBbBFp1DFCrfsbvzjXLBGTnYA6uC4",
  "key9": "Si3k7d2v43eKXe393gtuTPm5ySy46RFyFtJkT7vwaV23zrJrWrNuCtfXeyEZov8Th3oumkhbZLPHWYn4Pq95yGn",
  "key10": "44TmKVewLbzBMgcZ94hKz7wsxLZoxPPRg1mF5ReJbGwY5f1hndgPY7C3iy1ZXrPV5atk2i1kvRHPorzp1Z631Vko",
  "key11": "3ybU6vMzfBpVHCtBhVewpwNyvfNv61X8ymbHVC9CPV1qLJLovdnzb16arp67QT8Uz4yKP2CT8R1JU8HgiGf3g37u",
  "key12": "24bySsCtMs558VSk2tqUbLp955dURmLLSySFYCh6uC1k4UiyKkUN6Xhhbkwac7VKQLKJ11NYNyZcb7YPP92d6q25",
  "key13": "4XfrGFKnT86NLGktD16Ygf2kEEv6yktNPkRFfmANH7aKfMADyKkpPZcN8wk68vxBhP6vPewj2SwgzzPpYKU3wdj1",
  "key14": "37J8gh9vTWKRBnx4GMScVSU9KP4TiehYaJno9rKU1kRd5AAgmv84BiE9ryZ34sEbA5tfSpRKMYnPtoPKaJogJefH",
  "key15": "3DcqtafuVtNzhrZCRDEtNpcp75dhgQEoDJ2TyPfjvGYDdkAE5gruuzjLtzTxTyupCgHNQ4uVrbjEHyEZqMuoia1h",
  "key16": "4tH8u12FoChz5WrjyEM3Erkgxch7oGWkPE9bhCT8T7HfVSpFyHMktz7iZu9nCNG8yAM2T5yN629zBkDW7ZFHf58Z",
  "key17": "27yjLQpzR7zuYa9QXASSxpU5ZBUGWMcGxuzmT7HHGnRjU2Ccsu7zQzsuEvBumf84ApHugw1QujxvoX8bAVHjgun3",
  "key18": "3Xk955p8sQrTs23BhsYRqzAmkvjWFtrLJov9feQDrvbzgfocuVvjc7zdeHNoRXL1aXte5CDdvJf2C8yWyhic6BrC",
  "key19": "2ggrVZYV9gSmGFdEHkaDQkiKgRWRjZw1wFgvoZRMjt1czsfsN8t2npRzsFPG3SLV5Kk7cWcATCRXpRc56sJkTUTh",
  "key20": "4KAFDHrXXMB3YKcrhwGPT9GmdPmUNP23aGipSroZQu9BdneGJNX4UC7efjhj3ksh5iFs9EgH49mZJDGUyka4PB6x",
  "key21": "owTJe4FoANWFQ3uuQUTkpMbUZfCgXgHpBfH2cgDaimSs9oDVSua7UVkDAnDaeHGUZgAFzL5Yx9uXJ7xWNyDn4P3",
  "key22": "4BV1oU4KiCcb4Bba34QSZfnUCrsknpzq2TWREe7agvSvqef3UqexhECrQXTmtpmd3sYESso2kuFQsXYxiYTKK8T2",
  "key23": "4bwV79deRbaJCuceJ2ZSszXSeaSoPZ3ZHupwFoNYgNUS1ju2QLgD82WFUJeRzNHUjayD6HdLmR4cxyApmvtsqiHY",
  "key24": "b7WVfxcASv2qnPFMB4KQ2EN9mv2QPugb9Z2G1QfyvMH2Q9Cd15zo9mehM3UNNb8sug5C5YMKhB3xPQYS6icHGjj",
  "key25": "3DJ1DuQE8trCCeL4AxyiuCVoP7NwFXMFmsa9UJBjSqHKrN5rwPtwooUbNhBbCw1pHkZqWUy3bBn5frBoTogMFjyB",
  "key26": "2onBAM22LWKgakAPQFLt6eGwwjhXx8be66Q3Y6Bza6728D6KHTh1KY6HXusDK9ABL3Tu11dstxsgWaQL5gnR2EdJ",
  "key27": "Mfr9pviprwav8srz18up4j2UYYNCAVPjp13Ez1go1afctFBcdXuJiG9wWsoWHTthNkjLMbLaRjU44s2JBhbtJ4H",
  "key28": "3YRLNtwsRNdyvkaxGMSAAH8j3Nax3EumWNpNUdrw2PmEKky9Kr3ksSj2A1FUqzRwbdcbaMxZYGhLErRufZVCJKMi",
  "key29": "2r91vdxfZ7jhtdszeW7KrZ6Nj5eWaHgvPPAoHWEeFeRcrwfBc6ksgSXRr9eJqHuwiM6LJ6riqgVRnxKtJyQ56Puh",
  "key30": "6ZikvNEYfXsGdfj3wSjKZ7SDsxGLLWPnM9Bha5Pqmx13Rebd5cGYrWPWobLqctZmuqBQXWfyj1xRyrKCVBnwKLd",
  "key31": "2oYvSHpww8HsRHzycThREafLvbuJJLRp88Jsd2cSCHmo3XBFkUYw2NhZwWaGMmdFVPusYi4E9NazkSp81qpFfGgz",
  "key32": "jNRDCzHzeMiQEpKKnQbypFk6eEnKY2LLLdynDBuh5U2vac1EshFaWdb8DVSJAjdDcRPHy9aN6RWqUg76sV4mM8S",
  "key33": "4ZmBr994sPDK9WBFj2CP9GR81wVZopeofuqNnpjV7k44o5N4XiXrxjbJ1fbmGmavE65R9Q3LAPCtEnKPLYSYkt9x",
  "key34": "53Zgw6KyMSJC8hA1j7U6TvhzS9ZmcSZE3WyiGLYsknx116XhccWX7Z9FRNb7siob3vPwZcUUBL6xAgKznwS2XPVE",
  "key35": "JhiPMvD9SrfKThn9Hw8QjUVZEgMF27k1SeKPXPRhiDPkYFCztpiYXX1cD952Tap8nMHiiruZUtTEFDtUFGv1XLM",
  "key36": "5UFQeMfySFyG3mhF7oHGNrTPxuSVe3PNfkpFSDQcCXQV9NM9AUdyYyYSSSHUUB7C1uWgjVWHuPseiVXupHQ7DcWs",
  "key37": "5jXSQZzRYRRhTLagSPvm4tQF2RUh3mRzksmnPrucdnj43wEhwhAtvHfyo6XB8APwp7gVxBDqRFpXeS67DQ1xpyS1",
  "key38": "3NPYYdt48bKmPd8xoqCsFUbKUdyzLHDoyBSrnsVrtS1yuQMdfbcQd6vETDvKNCdQQDTQzeY9enUaAxWw4bMQXC2d"
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

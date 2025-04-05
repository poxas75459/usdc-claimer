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
    "2NqJbWDogSct1xW8NJhrXTRsNqfc8PvMT1K1WPdBZYzYSXtiPT79pyzrgtYLmM2DLAT6sGP2owJsvWnjzwTZJUCS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kjmGXD9WTNBXKJvJ6Qen5bM7RZjwkENYaQvnJdNHRXUiMqMQjf6A8M5qdQwgTnA4qkMjWFf7MP6xfVAsKDtSc1J",
  "key1": "2rMABe5mFJX9obq4vwsqCTx8F2hQvbG6z2zQ4j8B78BYA8HKFaMLhBQqFBnbazbf9QNZXxTbenvCVYb5rZ2sxtog",
  "key2": "oFdHJ5MBHUz6uzJ1iSpgzHE4dMxwmUir8eBUPhh3cDcF5LMmKa4goKcNx3ZKKiSunt3wzHuh1cLjckG5pEBah4T",
  "key3": "bPPcZoP114rWFQwoNcYBwFyQx43TgHkUetUFCPUbs5kgcFg9GU9rAHgPr1sBtNHnfmCd87phTfot5wz1oFsvbc1",
  "key4": "5WgatieXPzf1Hpb1n139Evfx4qTkMz7FAWMYcfYBnafVah3Gix4nfuopYGQcV9WiArYxEuArLHpeBpPsfaM9Pkc4",
  "key5": "3jmBeBxkuQEK1Mvmj7ARxvz3dvcoGzntjDdvYDZZ3o2Vs75wjBnmDHpGpwtFf9NopRaT7NKB3PPUzbbPGz2WHH9W",
  "key6": "4P5Mi13vgFonZ6dbNpdr7QTRfiWVDczQGhhVxoseNDbLMuPQj6oRz4TusMkYRxe4ecSmfs6pp5PaeVTCT6uUhfaE",
  "key7": "438TdmPFotab8UAdyGytqP1JHE2JETqojgr5N9G3BStHzVcf9hdkLTwboHGFRLW3vA9tZytWaDz8y8YKjNsQx2Dp",
  "key8": "4rVGbvDLhpyUNxXnVWwyMokp44FY7yuievZqq2Z1Wc5MFS8N1ordXuHeeCPeG6geTqJ2tEKnzuc5HYF8N6LTeaKm",
  "key9": "XDipURzhjcFM1ym5S9pyY4RyTUEWVFjtpsPkLVTZhReGrR3SPAf4Q55Df6zJcjSZgPx9wXKGrfaPspegw51AQSt",
  "key10": "4WWPcD3ZrooiuqNt6BnHeQuB6iGzPhhnco7HU59msFxyWH3iUHPepVNHoZw9sxpceFd18DeTVxNbVnXZFvVRHhzq",
  "key11": "49tJvNPH6paq5vbk6WnLXP2UtgCPGDJMBhUvs6hNfuQcT9ZQFRUDnQXxn8wus7V8LCbcuiFgXyXSuPdbmdzm2eZY",
  "key12": "5zTdVnLrmP1cFbZXNLtoXrS15VCHtduiNasGrAiYvQwHExWwkjED73jxNtLf1Wj9R62Ke5H3TYAdM3QoVZoFXtKx",
  "key13": "4dAdeDDBr38zCZLLkX4eh66Tbmsvp4TmfiQTUuA1UvHm7UT5wwesrHExfYhLiPhiLU93BPPoqt9hRKtiVwd3XgnG",
  "key14": "3ksMXSchVvrJUKbGMUq5S1zS2AooZyBGrsqixinziUeDQL3XkU7733Vrd8SSB7LQuZFwmC3YG9eoHXbNb38gpi6r",
  "key15": "wyhrcBWLBkZsRttM4fZ9f3EM5itoDtuX11oqAQGb8VZkdruFJUuLnrxmnrre4un31Re4waJ1yNV2sGiiLbNA5k3",
  "key16": "5uB28xTFMG37R7ETySrnJ75tw8xPe6BKeSJoR5JEL8c6nvWfQhHvWkpDMDZQp4aMoGuPS8Txy1TxUkeb24dXVJHj",
  "key17": "2mBkqsFP8cZ8dDGDH9McXQL1hsAMrFiKzx7ZfvV7rZvnvpSrH5VpA1FsgviGYLxsL2r9pzzk3JCkRhFNBXEG9WWe",
  "key18": "2feM1B2jdBwLE6Hah8N3YRmeNWFn8Gk5hEkonayrZUS2zqTKsVypyh8kUhtnUtu3Wb7BTzHYpRwKCJH8ZHbL1Qmc",
  "key19": "5he8tVBgw4UVUusKQeBUWJJb23M1GDmLktu9JT61qTEMJPi4WhrrHgFgxbNH27khzbBGhsopKQKWD9xkq6fi7iw4",
  "key20": "3NnmhmFPL6fJMtmNPG52BY3xxBczEr5wH72vUfT56ue1DHQtqt1777NiHwq3CgogHEYevmDcLY7g3LrGzcwhm6Rh",
  "key21": "2pKhsx5gx8f8kLVdEzmhmcQQgcLQomUwYGUjg4ZFv6usbbcGxJiYPF9HQ7HsUneuqZiXW4Ebh1Ym9VXk5t7PSeKg",
  "key22": "3QwD5EDvKrJpNvGnvfw1L3LMKiBt4GhvCoaynB9xMPo2wiPVFykhDegePrk2YJDA9H9eo3Yaw3CTAEVvvPmhqKvY",
  "key23": "DtdgCK5Pbos6wUmH2MGm6X6VPLgagYCXyWxGxtLjEyDgMXtzXAf41fGtKdu1nkFdgWLY1HfuLg7erV4fbbti86w",
  "key24": "48Dyx4QG9nawBFuyo6aj5PoVSQLeA9DxhSBRmWbYSvs1NMfrEfATaaWGByuG2meSyHEepu2gArLYLke7gN32vhzM",
  "key25": "PXgNoSs1RSvH6amYgbgcCCwTZjkxNSbV22Ls9cfQx1TLUBrAGHAPMmdReBWHZJBdyWiRzyXtgdxunp3m6YGzMqg",
  "key26": "2L6ApitC9FCdFA3945DpNVYuAX5AXV8JSq1PAtRQ86HagrhbDedKw36FeCnV8w2kSeDBAZkshHeoQbXpqaCMRUu9",
  "key27": "hn6XggCTnfbWgoUYQHbyBuUnN2LVT7ivzqFQDmnzATgtLfCCw4otbZo7xBGx8mBVuo3CxseuGEwN6eLvy4CPhBZ",
  "key28": "8dRRrKM295LWDqr8XqnBHFrQBkSmN5q64tfrpyZJpd8nys3n7d18nRQ493GoYwEHsrtgmV41HHYBCdq88TZyWeu",
  "key29": "2q5xt4jfvBEgSTg8Fm1tr3mbn1PhVoLba6U2KzMaFxwaiHApmwuwBnx2N6UxVmRbCd8bNhxwSaXY7rFFEJJkekuH",
  "key30": "48d7K1p3goVsu7YLcV7tpqTCeTYFL9azbZDLHa4oRbxFHjn2fMkPGAHWXvrky3buEZ95Mog8bJ2AARpgLMhaGKZA",
  "key31": "5YixNsDuH3yU1SqXwsxfAzkSSsGuiooUjsEGKPnbnHg2Un88c53qwgF8UoPwyoik7y3T5NDEYymTwLUfvRgnz7c5",
  "key32": "5XjSPtreNFqenJqqhwzJaaUGAiwBDREehHdAZMzPK4K8cXyNdNLRa5MaNVRGh4X76gaXhmApEsCUcL8wnabbv96M",
  "key33": "2btwrWPcoYJqUasGPSEvztiYJQd31YXfvp7Djco8rFsgKX1dsjM4XMP6VNoNqgt7df5Co6aZMaeSfEEsTjRCREfU",
  "key34": "KNDQL2ycca2DR4g2WcGtmmegPxksvdrx4T5NPaUmeYMDZs1vAiqrTxtVd8ZjNgA2wRTmAiFKdcMCPWXDRXuW9Q8",
  "key35": "4ZFh23XSo784NYPJunV7KHAk5tA9C56bHvMtRUbXLBAvau7YfPWXtFD1YhKe3idVJRfetujXFbkzLA75gv8wgo4o",
  "key36": "5TLWgZeotzbb1jEaAQXpGPYVKN4rziDtS9GQYjNQFXC9GET4VBuKaQTnf9d2u6geNpRUf23EFA8gJfBLeQt4nSKx",
  "key37": "65r6xMjeodsJZ7mdsU5Qr3cdV9weWwGYsyRHLa711qj768jd75N5xKn5m33X5dAbVW7aGfhNsSASmKpsHqPd4Yyx",
  "key38": "3X5oCoaLZkZC3ibtKHmaqkzZME8B2ENipkGKGVPug1fpHCZ4EysUka82tNjY2RcS52cQxkHChZyenzswbSMWFTmS",
  "key39": "9wdZMm567RxJsrVzRQLemCJgYbuit5cEvZQyVZCo2ujGk1dcwoJnyobqhLc2eo1BDs2KBtb6oeqQVv8HARA8uWd"
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

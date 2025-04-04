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
    "8bbWNSsgxCpVJoUNxB6U3FRrPtjBPFcfWgtQN9LLLGpQ5Mmkywk3B21RtEVBx1N3kYJcMdA1fDDmynU8BQmbZCt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SHD2rHcoxPG5TMW8sY3TBNpWTR5fZkZzS8AbQyPrfPrJbDc8knzzvjhJwjkJmiWT6Fc9vbRBWqRczUeHvQrcxDr",
  "key1": "W64bsPn4ivTvBW2Sh9cFcen9LChhk5uzRqgNRFH3u7hGPbDcWieZQCKA9vScQA99fsTHyW6itLomykD7Vvachku",
  "key2": "szYPmv9wk2rCnN4vqWFYonPAFkEwew9CnfhSzgKGVzaf1ipLEH6BroCGG7wMM6FGR9PjPFNGZQkYmSSEYbV2BpK",
  "key3": "k5ZX83LSfeEidiWnRQuqQRBAZKLj8qZChiv2sucXB8tjxxrQ7vo691Pa6Mg4RMWM7zKw56TqPzD1sfJp3YQMyL9",
  "key4": "2wc9oLkbn38ovpg71nvezdUBLUrghuoNYXVU2Rh7Q3wKRVstB277fzxGfjZVcDTkXsXC6TMtcp5cHWf9CqLswTX",
  "key5": "vnvMP33sgzJLa9ZhWy6FizVd8SeCwbNDFNWCjbRbAfGoV7F5mzKr54YhqErKu8592eeqEemDkbtSKQv1RDgjcrT",
  "key6": "67bjmrQ1U7C5L23WyGoQYVCBo3f6f2J6rqzP1Fg1nQCt6YQfcMGFP1iHsSnkpQSRMDnS9EBdybaGuFhnUcTqyCjd",
  "key7": "2ZWv6inS7CLCv8JSPvAQLgEDFSXVrL7AQP4WyUxc1rYia4RcNQweG7L4GGe8JLguJWy1W9gbzNxgGhYhZwfYY27m",
  "key8": "3rv76TYs5y7e5oghMeDGrKKU9dfi9mHFfr3wX4qUhKGAG1UQnjZkWSPBZb9FqRu8mWqQadJZzuPujyfz2ysG8g5V",
  "key9": "5vWshmbSJHMHbG6nkqnGXDMpK6B7SmX4RVzgxjk6JgJhYMju6nSAAaGaaFDeiqVcqNBindZwU4PBh3SrLmwrqNSa",
  "key10": "41JckGaSQAQ6oXuzt2N5ZTAtZebc8xR4SdhkR5eLkLLXR8mUVs5XMyausvRKbjEY3MEUMRkmGrQtu5SAULz6zHw8",
  "key11": "4hch6qs9LTQCRmj3fdUzDqQyrnXRjjKrVLiK8r37wCMXecT39WxXWDbkZDavtwhzzbe7fZ4hR5J2paE2hLdkA1Q1",
  "key12": "4LBvtrTxtjADPRoMGw2marFeJjj7VysSxp2H6MV3nyNUieWcLePh1PhnkWqqMn1M3QJBGTcCcF8YKnuNAr5br3Z8",
  "key13": "36jK9S8uJZWiF8HUWLYweDPAn75v1sCntqeTe5f6KiZAgGUCqF4KjiE2C4cUPTdg25JGXtSwpZzqYc65QbRSAEqE",
  "key14": "5Kb5SRHE8setRyEeopbtjntsP4wM9YWDm5AQ8HkjAEG7CBNxmTBf16WpZWRmzNPcxgMW5PMiRaG9FsBRGKEX4MRp",
  "key15": "3nA78cSwANbL8s4Yare9CHhcB9uYVi8J1e4xBbgXo5HNUMu4byENka3v673jo5A3BUVH4FCeyUXefc7Jap8ScDoK",
  "key16": "4UxuzSMNRwxE47tR3FrBQGzGS9gRe2KtoJKZtznqrLhczgWJBrrgrK9shPEg1wzQqBpmCDHfBvukeuU9R52mL7T3",
  "key17": "4gnhYWxuhvZb4F4b5jbpKrpg7FcR4YkPqYUi7oohZmaW5Eidc8ftPJe1U3TgRr29gss16fg3fVzr3QGDypBKA9x9",
  "key18": "51PSC7Tt1KBdBXQDELSJuEFmt4wdrrngXF4KdscCde8PVtWHfXKgM1SX18cLG4Rgd1dpc6hBzhLFfBfkVFawt33J",
  "key19": "pEbXD6CQeA6Er7YiaGfGXo5P8b5aSegRpicKUvhQxDhPujNZA8cx96rApwLuHsw9zy1Pgkr1WYZH3TDtTebuxeg",
  "key20": "5GBrF1fmZVTJMMWEiPSfDYk3Fd2PmPhMChfVVQ7zLfKfzLEZ1dpMCvBHLeHZvVgnbZksZfH2LZrgPuap9YBudu5K",
  "key21": "4GQ3PzyyR4Hoe1WuLV7EHrQDsS4QWh1MJpkVQCHF3JonETuTYeGY6e4TZPHC6HSW89WRwHf4CCU4vyzxv85F3Lxa",
  "key22": "3BiJLYB6wc5TkWHMXETvbrVQctTT3jvu8bHQ8VPU2WZ22jD5kwC53q4njDojvGjc3Cjp19Z55crjsT2s52QMqfE1",
  "key23": "57sbv9haBidUKGo4hq6Qb9uASryn8a569imuZzsmhsiNBqyt1nAj1g1c2j9FVUwmJ63BhG8g1ueM225dawAE7art",
  "key24": "3s7pnCnDUYLjHooEG3cVksGcTDrwnhGTR7KyTyDVEbPThb9SC1MKbCZx1Cxzw2RaSfMtr5269JLG61cdBQ94sTwU",
  "key25": "WdTrGyybkUALFSckxLErf6YKrZ13m2DFLN38JiTtKzTM79FhR1fktsPUeeWXcaLKShpxRyK4V4RfKQf3CJ8XUB3",
  "key26": "5mNKgkU2C7jQ6K3qSru8S8GsCPv5zGGBPHGkmcpxhcdTzTfaGMuzMY3KBkGZP9mjrJgVHRuGvNG8oWzbeM5jFvfk",
  "key27": "3zXZstvKSxXHgcriNikLSvBavYyrcQLGM9z9USjHnQE19M2tZmQQ8BxbSRupm8U4oBihRzJN77qhZMoTAH1iPLPM",
  "key28": "52cFEN1b2fqbF7mgjZ6KDvj5QgyQPeevnxocFnjwd3PYXzAaDqzdEN5eKNE51bKCXhAyYPQU4wWMKju7BBBDWT7N",
  "key29": "5vg4NUU4GiyQAcqPmYLGpq2TXK6m67iuvFatYzXKadcachs6eZAiQVevuzAaoV11k9UgdtA9hoSmb9xyo3jSUsMM",
  "key30": "2JDnqUZwWa8rCgmEV9xo5WFxMYEv88rxPYwuer22oEj6sewex2qw5g5RyXAmjqUfKA7kwjtnPdNpHTzUnDsj7trk",
  "key31": "4UGHPSRqh9QVY68gWBdoGmD8PKaVb8wbwGMJTRSavfCePyPTbjkNcijkE3A8gE5fh878fiBidrECkZ9yGqtNMgL9",
  "key32": "4yru6XHBFJJ3gRdbJ3HhijCmCEEP6KfDGbdJkMBXrpVbX1nkPUcdQUgtUdLzQswxhZRgf37xHG2RBtAqzhEiECtp",
  "key33": "3CzZjYA5Am1kysWBxV9rFzddDWMzdqupwQXjAsm4fpgC8mxuPdKhuDwqwfBZHdX2k4Xp6hqo8BEzqYe4TJsYnHxs",
  "key34": "2hoy78zUMTvdMp69XjDDzrF7FkfBnrCQmGdWUNPyMRB6b5ZrKgmnQQLnkyuGdHp9WBS6dyG3gipttFkFk62WkYgd",
  "key35": "jWRfAnpKFeUAnVzpM8KH9GSmcGmiKyF39KNeU2bMnj3xMPi3GW6UuFNtK8dMJYWJUwH8RRNhGmWHHYW1EPFjiL8",
  "key36": "4T4CQS9yv6DRFxYKM6Kg8GYjFH4sZY99JL9sfiadAFSsvvLSoSEML57zkP3Pk93E4cw4Tk7WB7ztr6sgHeALuYJL"
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

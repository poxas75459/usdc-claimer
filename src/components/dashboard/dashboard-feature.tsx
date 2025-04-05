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
    "21iiZ5vdtNazHN5eHWTBGr6BztmfyCo3qzmzcoRLbGkdt6DFxWACV1VjRxdzEncxbn528rojq7sLQL9iVhXNPJUB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FU7vzrRUnT2QFncmQ6jLdjzvMTryx35UN3iUygCDFX4FG657CgmxsFhJgWNYK5agCP79PtBZAv2z6p3XhG6yqiv",
  "key1": "3o5hAuKLtr5gN3bagen7S1fMzxic1YD9oAMHAaoXpc4NJnpEQ1kokdhycLmko8N66qRUzq42ax4TWsX6AdqRVQvp",
  "key2": "35u9cMzWKy7xAWDBPPmgHxL6x7CGZW85hkvqZN1QK51NnZQ32cSatPHixMZraUarnhyMki4emHjmrESAFucUBnQe",
  "key3": "5BFq7weZg56iUFD2M544xgvdgd9f4MKMKowJRAzbiHE7tTjiavmQD8kzQSjw5XqiAUeuHF6aAH5C4cuJEGhUa66U",
  "key4": "59qBbmD3zXFU28W6tTJhEW22hyrTw2AHXHYPPz9YsykuTY7rDgZCBhSZ97XQM6fNDQdBfyvdBRnJiqgbMQ2c95Dp",
  "key5": "538WGaZuVa6UZ1LYrr1oZzyWtyGKwusMcfbHStPhs5UcjwzNJcceQmpYnWoFxarGAyer31hvYCsAqeq2kLGo6nLL",
  "key6": "3nYstnfzSLTHCWAssQBr2zedsN3TneX6SBuk1MW5AArdNScw2vtMQDBg3qVKQZhtiJstC3q7yosp9dWheuSa8aRY",
  "key7": "5WkBnpc2fEvrLTVbPbU7ziPFiWbgyBKPdGC1ruAR63EXycoHiMHWJPBpqQ2ceLUQ1htezDuk8PmJWnGnmgj5KsD7",
  "key8": "4WgzQMxXbhcH2y7gf53XLkJ6fkefgbwJBFd4zQDLunLfuGZM4qHF7TKVpdJRLBrogzTwifVsMooz7eMW1nDvSv8X",
  "key9": "3wDHSt3HAMt72f3a9G9aQf4YEAkSQVgFfeJxEVVUQGEnPsYhoqbHQVD9ixqxmEMdGVtAojZd97tN7c8J8XGS6TWa",
  "key10": "66Jhx78w5PRF4Wd861v2W624Fz7ebdueLPBacE6H19uD6jGJ5LmDGTrR7oKoYPWSGjoY4K6u7eQ3UvuxzkpJjzYE",
  "key11": "nxDWQKAcN2JY4MAY7xxxy9fGCWZ1xxPsFe3BCmSZ6Db7BSqbPRAhCHqwLNrq7dEPeCdVstFcaeSnR5YgJLtpovk",
  "key12": "3CnwiGY73tx8svP2oiQU2H8fopQoMn4VaL9HN34jJaJanskLNfnP9PuvFKh3ccQYcYS82XrdZ3anKFM7g5PRRYkC",
  "key13": "3EimjyneHeUFzsD8TGzaqeiQA4UC9hkdN6p3Hf21KkJWGMYZvZQGmuzYWpZJjMrLWD1oMpu9vKkwgtQcNBkHoHu8",
  "key14": "4AhQ75E79uwBUkE7bzvy3C1PKv7fQLgdq8SvzjwHwh3V3ijbumtoT7db8mVDKKe1PvUdRuJVcR7JaXCrsgJPDB3B",
  "key15": "vJbmcaxB1FpSMQFKEsoyxoiiTWqxR1DXEukjFovuwQmPXcZCjtxRQ1m4ReXEoQ3Gf5Js1cBsUL23h38b1g23tZX",
  "key16": "2dFz6jjYHiesCeGzs6u89emKdxF9CkGUCwsX6T5yssNGocDtL3zZPwPgc1wNphJwD8KbLGPNvnR1eazeD5M5B3gY",
  "key17": "2xB4oqojABRHtQw9YYsEreb9VSaPgrcS4kiBCP1r4cgApbZAQqCaVAqh9peQGyHk5ySEHMXxLMnPhsU2vnqeMXAW",
  "key18": "44r5GNqZiQqTWVFG1qAUYNCQfi7K4wvRR3K7chfyo1j7kMLnsu6dzyTuihapPdGxzMwaBDppLrUJnqZYLXPMBM5",
  "key19": "2mDtqswCKW7rQW3HY5hEp5CVph4rVDzwRnn2WMptiaZ4nssp43EacA4KyU9T8FcdmTz29qcxbd6zJDamv7sHHfxD",
  "key20": "4PYTT5g68z6uJkMhh29RbThWzuarhZRinNZswsvjLZuyvxmbZstUBDR1ahuoUcwVwVmLdsc7UjgCdAJrmggohQh9",
  "key21": "9wMnf9AEHEHQenrRKjdPok4ujC7a8RDGrcDxR3NPu9zj4KqcknWEvQwGJT8e8HPt5DJtDqtEiY8ugTrxvVVUkGG",
  "key22": "UauRtHQGRG5zzxJgGN2Ah2nLMwcLVxyaEKSi8dswdgMMkNApBqoTvSa62Hf2jUMseysXf8wuuTrAZLvdVdtTGVf",
  "key23": "4XWfuXQvtQTNhZRAHdn26MKKtgaYhHv71SFnqa1c2VTw1dP7oKAosh4hukQJ7njcxyjdksvy5kL6n9nup3K11Djm",
  "key24": "5eTjPoc4LCgYCyf2wiwRqZ32LN9vryHx9qRF4PxEFiRQkCdPs3nwm7nTnWR6499L6Z1qVsjUdPHhD65ejvRjwfoX"
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

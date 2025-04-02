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
    "5dU5o9U8v5EXpMRqMX1pBgQojg8Pqutu5kETfP4LaXQjTPeo5oSZLMHGiADh3GPoc6C4Va2ZDibndDfTPnLeY7HA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21W8AkMtTPQj3pyVyAasZ2RJbQciwWC5kDj8Zjg2tMZRy63jgKUhEhvSEjUq6nnVeRRKc6hCoXy7fevVGLDBTrkD",
  "key1": "59zaQyXSEqXmMiofQG3AsKJLehMpGSrApmq4VPDawjBJz1QsUL2DmApxdg4GqitdrsDMCLgC9mp81CZ4YqHQ2ffp",
  "key2": "3DC7QyLpxxB9LQ6pNdpbG4rgphnb7gbL4tyQYViwy2EzZdMv2NmGvmN1Xo5usNhouwtkTC2ZqrHEX7E2vecKX61d",
  "key3": "5AwLv88WrLGczEKLMhFjX4yueYHQJLaGXF3gvJZVp4pLrVxE7NdkTJerWBo9VybKXbGJtfecwSGUKavVpoDT7SQ4",
  "key4": "Sz4uj6ZgJuEFUyY799RGYC419aGbJLvwX9rvSfeqGtaE1XC9eSDPgxb1TMMUKPaU62AhkDfdB9yf95fYgTvcFpZ",
  "key5": "2tjXZfEL1cB3jZF59Hj3cJETrtogXr37n4w8jzGF1nBFtRL9mMH7YzeR67vttpFiN94JKu7GZ92syT6EoydCsWRF",
  "key6": "69bFUtWMvtXM2iAy3Si134FPbU5DAkwCcnif4wEG6pXrpDcZq8Q5FJR4VCgTvntGWvkZj2E39xmqLfjvrE8EQS1",
  "key7": "5kE5kb8noY2FJhMAvJSTmT3UE7K2bWHKy4xhSNEwc3aCDS4ear9sgUSCu3kbixB8k4KU99fDvwCjm9hKnprFTvdy",
  "key8": "5MMq8o8r4Yph7LvAVHiUuh4A7FT7Mp2uumVk5T2tACjbnZS2DfQ6tpG7apyrJDt7a4oBoGTrN1wC2tUa8LGF9ebf",
  "key9": "5pMkW6HzaHMEAGssftvozv7GG8zFabQwqfBhakWjNyU6MapVsBU67s4zs1s43hkxtYyisV4FSAoRtegnwexRi7GL",
  "key10": "2izV9FkARTMdpjwnLA3gDs44s9UwbBT25n6gg3CW9e63ou72ox1jKTVQUjvZwwrrcG4CZwFdgC9gDaNoUaATiTds",
  "key11": "q9pigN2AgVBBJcP7Wr7tjAkL1g3qHFQy1iNzZPc6qALSWZQPtSzuBSmz41gHMfnxV49QJN7QNFnMzTzjfGYiMWG",
  "key12": "2RV1kpWNN9JWwdoG9VsxN9jgmGsRd2uPooN3a4ZvvwsBqaEezKd613MRn4oiTG4Q3AYz1eQaKLFCkztajszEJAux",
  "key13": "2oVGSMEmzDSSstjVU7H9Xo2CtSeaAtP7yqUtckgLujpHChrvfQcvW53V4j9YZQ6TT1UcbnvvbZTnijvYfm1EsZP2",
  "key14": "2CJEp8c9ySnB8M42W913HHCbo7ZMusryyk7nLmAfGfBvoXDjgkranryPv3pHLAz4jcgTaju1MmABwLYCH1rYqAcF",
  "key15": "EpzHN7cvWESM5MHLov4E7CHzWgw4ggFksjkQJdrL7fWrD1GoP369Zurb5tb4cqagZom3WUCk8iygCC9Ey5tB9xw",
  "key16": "5cFg4UcW35ZpCRT8DwKvSk7pP6vUB6aT9eBMEfWu6GPxALCyYe3C6kq3sucn5CtvHiuNyhLB44pgn5SGUZXv16R3",
  "key17": "TCvQsKygLmkSs5ZGY7JeY4TQtfPdmxFzhJp5jo21o1ZaXAzEFS4DqHSctMHRhhQyH6id5XdXZhWrfBEdS9gxE3n",
  "key18": "4mpVP26GJVgH5hrhWsNjeygMz5NukaQhhxxfRKhrfoMoXrND2REhcS1Jy2xvVoqgZp8z7BFBP3s1zvx9HW8GHFFg",
  "key19": "3KK6LVA7JqJV4EFLUMr2G79LP6WDw6WoMr6rrWwLyCGvqF4ALCpPnXsexpFvoMHUo3c4DfiJMc8H2kZn79FGvBjt",
  "key20": "4ewWmJEC3rtptmMFQhJbGkskFEpWYKvev1fexTrC8CBtzA4ZEVYg3GATKPwBMhMM5qHLwdmPYjoSwpRTp3SASTqS",
  "key21": "3XpvaH81FnG3X6nKAdU9z9XhBcrFtGqL5Zq8eNZjhXh3bKpdh1AwY5ipbVuG8Ha4Xn8i4JuiMCcSeuKwDkfTFb8F",
  "key22": "3TPorQ6LFp9Kz9cVfVx11d1rdAcsoibueewCtW5Pa7xZB9JFnYS8DdZBdcKissivquWMne5JQMVLVapNW6T4pGEG",
  "key23": "5SuCSHdTVhSjQfdb73Nc2nd8mc4jjZ8pRqZML9mTscgQTNjLa6e9srmnPfLgVVnvyYieu7u7bCsSAe6e4LXQAxXz",
  "key24": "3W7ccQG1KwWGPCXX2aZaFMu8AcEzx1Y14XxQvbiVfGnB1HgZ2tUQPUnrGUamMhTukyJM7oSLTuCnEBfNjAvdsChN",
  "key25": "3XJMPrTRNvFEC1KKo92z29USxbZKfRNYx5qAmxsGwrVo8MFKKg7TkMwaSpTaS4d4zU2QYhZxW1HPvuvLEUNZNgYb",
  "key26": "nmLjzSANHXoWbKKbvVA6jC7H2niD7ALYUYjmYYatRsegVtDvSK2KCSVN2NtbzQ7D994yqoZyJnq4gDop8P31HUS"
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

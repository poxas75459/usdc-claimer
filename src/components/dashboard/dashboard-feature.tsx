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
    "4ifEaELZ9PmzMqoYYmR9VosscGLEpTg7K2D5xvTxhLCpNLxkw1NA2WxnxmqwpwDTiJGK9WWv9DsvSiGeA4gQCxAv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LabmkYAdtnqZb1VAtTQyMkee7QvSytLqEixro6hrdH5gSTi2WCzPJ12ok21cMZxYRGz6rEZxz2khpEPUGwAJur",
  "key1": "3vJ18ro4EJ4TKZ9Jd6vWQWKoQPfHcyyJgkgp3kW4tErX6bgYbcJdBwUM8kJ6XBeKi6BnbKQF8RPsuMPDN6ASoSBA",
  "key2": "4wtNQDTqjK1ULnjB5DMSezBUYB1qNxqJduApcK5z1o8zTBTmAtVjCGP5BjegfpeZCmEDQWnJnmCzFH6BSrK7vmcP",
  "key3": "2PgGN9uwXh3THoCcyuAnF9q1AhY97wDyhxkGQuAxXCLMXBzA1M3nKphMAgj2zb8oktmaDa3LqKhHF6xhRVLqzYWy",
  "key4": "2zMoRMZPDALMKkywf1RPwN16o9RzGL19EnxS8eg6oidPpZ7nCKmoBBH2SrkPgZekxj4rDzSwzhfmTvwsovSWhrYE",
  "key5": "2FRMMnNpXmpUvUN7ebmS24NJCd3SiUUbou2pnjTn2b3TSz9eaiuqfnwPFGTdHjxPeibSXbtUerwQM2WRT6wfQY7m",
  "key6": "5fqqsviH65pyiCHMNJUFnHwSgrM2oZ9ASMhxTWauKC3ot6e7WVZLSZAamaWv7HVhFc1v5fCFtczoHRwrox1GiRLv",
  "key7": "GmcBS9XydqUSEb1T6cF76mHw4oY7fMhqWnnP7rZjjKWa5H64XEDnsRgJ8jdfJfDrgqTozzbrQCh82ZxQJqJyMJo",
  "key8": "254iVQRx8kWdswQS9vZU7k7WJtYmChPaPZwhjnvch2eSEGqipafzs8xoNfQN9vfpA9GC4bk5b3pghPF1xwtwJHkJ",
  "key9": "5EQnQPt1Ge7nvbL1jWW4T8ZzWsSEEpD2fd91C4v1BbT7M1LKXm7jXweLKxQFCRgNVWWxx86bYmcCYVxENYqmJ43M",
  "key10": "2b7pAoUUgWdQCBJvJz6mkMbUgcZkiAmHavdpDAX62u7A54Vn3jeJsqsCURHtu1gVoH6vYJJ5vCGxkUBJAJ58fRZ7",
  "key11": "2YrztavkawPWgm16EThNPEsbspAnwkXF85JaEcm5XBnb3xT2Q5ecZqD7eFqPxpGxcSzBgGPz5WbmmQFAeniphNgD",
  "key12": "3dvX59Y9spHwocj5PAoxnR8Bx1jF64vEbf3be16xkWbLv4ewApiQENWuVJfx5bxqB2RSjaMsx92SekfpN88R1pTw",
  "key13": "3EkYeXkBWSV8M4L3x781nbjzbzXajSpyrAu3odTPtQWEqAiNLwgDBgVkT2LHiJm14g5GnesPKjDKuJttdBRSoCe5",
  "key14": "2aFJHSKpbqTKMWhRFK9TKzqKknZ9naBYHP8DLZ2beJYQVn3UrMERiSndBtA6jBwB13Ns9WBPrhyTFeyTQjwsUKgT",
  "key15": "476TF9Zx1RB33aL7DrRaDB4e4sWXf2UuBdCDr9zkDbg8PW3WzLAgjDCoWepbf7h6zGc6WfG3LLSkKJ9A38TUGymx",
  "key16": "2ZabN7rmQFDs88kzNNTDsxcGwHkNX6pFEyyvLPcMvMvwsvE7bGAXgHC2Cj2jKiWdhCseqN1tQzYWsSpm91X1aXfP",
  "key17": "1zrRaD4yxEzXVayUPwTd2vhiNTYkSB8UL2TknjanoL2ipnExFTwQh4TFMGVKCm3pAGRbiYRacTCvNtCwgQjqNb2",
  "key18": "4zs41JKvt5joxZGsxZq3KyPKAyohJM5Ja3zEHaiKkKs3SBT26Yw4xVFkx4WKEN4srHVMAo93KCtGNLiA9KHRfANr",
  "key19": "28CVppXCzxpWsLs4jfyyoqud3WjmW71q5agBPP7UcvytRgMsZMRVu1h2n1AcA5bm3gWYq5ojpTSNq9feLW1BNGJW",
  "key20": "3HLebYUyvMcKVxT1aHEUDMWE1yBPzdS1zC9fPkrwtjGeGPTfwX3Y5rHB1v7xvYJ61CKQzAivHDFHEB3A2Uzfb7NW",
  "key21": "57EWo3E56iRHshgPSVtRYZUFpCRbynzGMDmdMMX134FhehaMczXp5PBz77PXeTZqkvVZMmQqtT5o6r1rmRaDvmzH",
  "key22": "3Zz81EaNAsf9S4ku1HfnZiwWwUHJvTjN5yfc5VBbcVCvtn1YSVbEr4x4JHsNkNF4Ku6iK4HJmSXhugK4ydm7Pb9L",
  "key23": "fGFQvhEL2mCcS12yagvbQn67epWzGe9VgvW74YQqH1PeFBSekw3jEzMjJQ5JpF3Ztfpmkuk1uSRAXsnEStF8Tji",
  "key24": "3cdcyoeoWucxWuNZDyLjJvyXYrec62JBpFrid5xRncXtxJ3zWXuBiQnrqbUe4gHHJrorDPKVqrRuVBPR6jZ7YtCZ",
  "key25": "5kESgVbFCp9dXJ3jJ2Nce19eVvCtsUWRRBf2MtAeK4edZTLRV3eRjx76Bh6tQAZPRm5UfuZUY82TRaEaaARYjmDB",
  "key26": "592Qqj2kf9NPGSkwsZpe5o9h6YMi8bCZoZ4SLVMYzWpiUyZdftPAhhJehmomb6XmvcZgbV6MVGpdcKiKLs13B31T",
  "key27": "4LX1TZDMdd7CSiBqLr5LJ29KPgiYGCiW74QuyAZNHDdSQ6GTQK3qg1VwEbg9UDKQmcatPBocbzKGsbzzRbYVbbE",
  "key28": "3cJ7sG5WL9ZYstdA5Fb9rLXrNTskzcRMkGjphzJHQ8E1QvPEdc8R4iE8PpsGExm9RnJvn9xk6HysouATruk7ANRm",
  "key29": "4o5b3v5fbwCv1uQkq5iUSsJ7K5esjhxwcfHFTDEpXgeWHARswN6ApQafcaynhRg3Yjog8YnH4RTVzBzBZvmf6KEb",
  "key30": "2r9NpWpHjUxQRuaseuSzH5PGV27xcqmLnEUDLQrxJ6PP9mpW8BNR3yH3vUd7eF134LBbZJxUfdk3RWURnprtWSBV",
  "key31": "3NxsRYz4JTZ4DroBfZPYT2ZFyPkLNsx2buVWWQTq8t537REkfM8FXsX2hxrWt3PGfEaRnn25TPVD4ARDYgQqdac3",
  "key32": "jR91avy4TYtS1pv8PsUdfcoqx3tt9cXrLjTDP5xx1z2BE7jgDo3hWmnX8cbfCXgsWFQYyxG9qhqyQ6opbXbQh4F",
  "key33": "4zVq7iZNyZZ7c27kXw6i4b5LkPu2vqPUvxHVdhqqtUuxA7q1xwx1vUK7b2jK3APwXtVKMD2iCWsQt3D4K1cyahyD"
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

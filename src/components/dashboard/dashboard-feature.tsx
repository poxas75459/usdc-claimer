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
    "5apw8REYUbkxXiy5Zox5E72JEXVJhSvxRiyUqUV3ThDTLRPn4DsbpAPeaqGigc2ZjzyaWJLqiHFsTwSm3NRR3BT5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NJoV4aQZrFDJxuXBbw9eZXYe2XCzvgH3Komc6TfaJPMdHtYLEd4MphNwfQ2aCAGTQH9MrUT2T6CdajcedP66iAL",
  "key1": "3AAH8nKTLVH1LHxYRMcXYZGTTaZ3W5qsEkTAFeNbF8etE5u2d6HiZdYGUrJpkuoVUSS7KSaZPNNucPRjYCV51h1D",
  "key2": "2Yk4fuxFzZ4G9GP8CVLz2taBkzb9KBHWcZTeHm3xALMTxckUUPMMKwkHfENTWgctqHF5FtQHuua3KC5pj2yRrmWK",
  "key3": "U5NnNmdiVauYBbakeTi36nh4PKCMAasKxBcLMLbGxM6ADCiezawWhtNQnCTPUV8NAu6Ves7tZaJTqTeMPyP8oCM",
  "key4": "5XTKXSxg8vUSFq7RAbGeDcp77LqY8RE4TtZknTJmXp5k5CutEceHK2dvtXVf8AE4fedm5yWDdrmWXGUAMA56nFva",
  "key5": "y84fpUoxJRMcs1JFh99TRuCxZaz2hdoJSYS3xYXundxynweWNcSK22TftKg1b9MZmgrHsYwzwcYkYigb3JbgJHX",
  "key6": "2RnxXTc334JgLcnEfnKGEWBanCzpmUsAFK9xLxBGJ7Qqespq6ZzWRzUgQ1DFjc5WHGR9zASSHL9d4xoyH5uQZCqC",
  "key7": "2iTKXaTW4PAqGExAXmvQH68Lp92JQg9DYaLqXeiHgDk9jCrfGVej7tJU6tDXjSU7NwhRbaRo3k8fwvJrqXUMQXhy",
  "key8": "okrk7r8968fNJXFTVZUAFLvEmPLPYM6pjQUow6hqGczGAUwtjvH9LhHLPdtbQgUqAUJpMUxE8MdUiTCjXa6tC5K",
  "key9": "5dgorFWGVrDgguu1g8yz3M9EwHab9PiaTSWAJDdfrsoGhSqq79Gyq4b12jhgE42t4e4GF9FUj7x3zgh7A5oLKMUU",
  "key10": "39TJ7H38waDJuV2QP9BrhbQVFErZsX2K5BeFLcgbjHbwRsonMg3cUtV1ZSNdNqrdZBPVATehQqoUYcWdawWztTaG",
  "key11": "3SvPGVNgbjigSQW93Q1Y63RSH4LMguoXQZJye7FjerpsmJnrc52Yz8J4YKFY9LTUPSVUCKRTYfRemPeSB9YrQTVB",
  "key12": "4RFhavVwWsESu1fQQUbZwLhYj9YgP8CsBzSUA7aif2Yv5shTtsugdMskKscqQAang4ECP5EFvWxE9YLhdeqKuvdh",
  "key13": "3UHTPALhxQa4bi9uTApisnzDeqbW5os2Mek73TzHkA4bfBooeAZ48hPvkXktbWQhAHtVW6P6zYH46qrtFep7Tdhk",
  "key14": "3xRnxcw5SgfhJYkTKL4HuWXdu4i6iiTgxmM7vMhLcfNzf9DqsJLzG72R68D36WssreZe1ZJ24V58QD3VsfXDHqxU",
  "key15": "3WXPUNHK8HJRCqTHGayaRjfV5csmZbVMqthcxLHifBeT4SLXgdR4FSpvKyNnpAPaf22URNCbJf3fw9cKWwcEB2XG",
  "key16": "5DDo2b1YTFQue1pCwZj1rdpAuVkoxfvRt6EPWLdCT76CiYFiEWEoWb42kVwfVbTdQE7wnUPUqXaGX88FMgpvs25V",
  "key17": "5x9ArjisJGLH62REiPLSeJvk11A8mTqQSePQpiGbew8psm4NhuSdFuuNWaXJ87oRNSQBRVXqdXVcGKnAdNvYAudq",
  "key18": "5k66dd9En2JgJoJFZSrKEJnL9RLpwnorHMdSNsfTxFSEEqi33TNMDSA1qKck56aRTVgi7Y7HcLL63cb4mAmcEiHT",
  "key19": "kZCyTwy2Vd1X1ekVXRE1LMcPgttxMY8SNYCJxLB1jnZtMnXk5Dy7PgVrATnomWRmCmoV2Cckze2wqbkyh8EzsEX",
  "key20": "AGRyMPJzhBv6SgR5a1vdxbJJJM58unoQkHVxXrG9r4rLVSudcDirQZFv1cy9ZmEyAp2B2qfTdXHxZ7nHg6sNNsu",
  "key21": "jqH3kvwSVbXvTqQXKJWimtVB5vREjjswZ3LuKP46jMmLPJhEVfZw1777sBqUFatyeTBAkGKmsnQGFYLLFXAssb6",
  "key22": "4YuSG7k4moY2Kcn7cn8k9NPhF48bux617nqtmxrTJEB6MF9ne78DaMpdpDTx5WiVgYSPCFRy9oi4okD4j9tr3AFg",
  "key23": "tFm5ZMW2aYhpibqAW39spY9N4oPhxDeS16Lfqo57WxpH5erwWvTxwGNxkVx23CyWziYrYuVre3F8qAfCQwL8MTo",
  "key24": "62yPW5dwyxbWjk9TQRq2Go9KsqHcmW9tnghCrtBzsLYeT4XkyZZDoM2aDp1DKuM45HvWYzL6M21R6M1oYtfojtTV",
  "key25": "4GFPwTsGjEjgyABvFw26MLMxmBE1k23Lu1xgeuTZywkT6L99YapFPGWKxGVanwu9gHEvXdh8YiYnNcxukxacfFXx",
  "key26": "36imPNZjHhm7j1Gapui5bWQS75yMTDcqXCYVgnomEjTAZV8fkpxo3ir6K5bvWKgm9mrz1uyksf5yDBbGXBQLnAjh",
  "key27": "5TYDNPznmMFAzAZ8NHPRn8Ad8AiSPei2vVortzTwoFcNFLD1yc33FQDaUYN2MigVzuZUsPLdt6VNo6QsHQWEJRxo",
  "key28": "4maK7FQhBg1QcCi1tSWBj3FeSgMK5RJxj73ANvc3fg8BFmqd3cKrU7KJdkRkuuGQn5kHKQYYWuNVXtFo27USPMZb",
  "key29": "5Wwm6dty8BUz6EA8GvmDC4tEELr1jWFCvehVsGnFBEmKtXZtfx29FVMtVkhSxVE2uq73ufye2cc3PNgysktNjbm6"
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

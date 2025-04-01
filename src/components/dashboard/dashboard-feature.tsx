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
    "2spQTB9jDzUWMhLCvMYyENXG3LWAeBUQBiLEEoZHzfacZGhKQFHUrDQ7aUQJU3QxWSAngtndfhH9ALzGb3HTSP15"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28BRHddkn4G2X3XtiXjEFcmUrRTpwGKuqJfuFHoGA8i5KA1MH51X8xwdR1eTbfPamKeMxEgsUFc2KEaYn7qaPmqs",
  "key1": "31sPR4NfgU7HkyHxqRrWm2Jy5x4TbBdZvTRxmSrzTtaSzJjT5maXWA8wzEbdgKzaFH8NH8nNVmzgUcRqsQe2xWka",
  "key2": "5UaneYVyMZxNuPkWqy9pVqSvMM6nfgUmYaRyiZkhPi7YhWFpB4j5JTqAQvh6jZckQjsDbjtCHyPLpWZ2Cc8uTHc5",
  "key3": "4SgKqD12KpMYxicUpj3TAHMYhrrKHkyi4npMq7Jqi3QMn7xJA46AVtTStJSpbMnPQtEkjDwPu5cqJmrsh5EKdqkb",
  "key4": "3gBvibXTwUyurmiZXbNpdz71Db3qXMKi6u5zDKodggjpiCkKasfkBKRehaZAvPrTaAisE3N61RD5RJrBJZyiYEXF",
  "key5": "4ouRQVLSPhAmt5cTxzSM7WUbHVEhnA9pbPKw2ZaiwVx82vD8144CjYPtRyTqTzDtBknsSu1vZYrgERMesMCCWsVG",
  "key6": "2we6Hre5n2wxoaDPBeTjqYGox8uMxdFR9479Z7gMYmkhGNAVb4DVSbF85B4isYhyZfh4u8q9i5pN4B1Hs5adHUn4",
  "key7": "3G9eK3rqYWgngKWozFb82cGpnMt3oW1SpMcbXqzpfCVNeLopr7fvVm2aKKds3WaG6g5B6C5XGRtpsEdip487PHSy",
  "key8": "3xBHYZoD8xiZr6HHLANeQzLVFRTbdqDsLro8Cv5Y36AfXYAuvXh8mBAMJZesvdzQZfbVaBarXYmwfmBWcuDKqmgS",
  "key9": "3QGr3kJJd17jvXfHzhDRmd8s3tjJyLZLSZMuszbw8qpjiRV8PAYEdcvPm4VkjQYE1Pdc3k2BrthJapLDnab6gqUB",
  "key10": "CfBavCwqKPa83ES3toEVoQ3Z9trHVLGf4G1JxANGWDu7qtbjjyK9jyaZzEyMgjwkqSKxtyF2VuH8FBWht63zDhw",
  "key11": "5M2UTzjz4P1AinUPx2cKbFLo8RLsTp5WHumnTiJAcb4BmU3Le1DmpJowKsmS516ZAoooW8eTVPHPryzeuoGWCEL9",
  "key12": "4P4j9dkMFdeoMsyNxbF8whApcL7mWJL86UEN4LaoaazNFaPDn5QGuDoDqkuqAcqSSubfmK599MsaWUdrTkfbotpy",
  "key13": "3YKVuaxjjxTYw6t8i2ZSUEDjUn1kHKdEw7KiNcyi8YtCpmRTFYXFvrUhkdeiLAXQw7BTLVdLmPprwfgfY9eAX1qz",
  "key14": "NXfi5DdxxXrvwtRjT74AcyXTaZYoAU49mWUGenaXTewf5KZio4Nd1786Gxw8zdxr7iZRRHEiSZbrJJosa5uVjac",
  "key15": "2dCWsiVjZjfVs9TfiH1G66sN2u6CAPhzPnSK9AycfDd2bfTUU46hgvDPZqfHPYaXPyBKjA1GM6sG99diVDDkMZhL",
  "key16": "27BYyX3FHY7zupoS5p5sGbxH7FuEuuML3666EbghzkgVy3tugiDKryaBFBgXch9qos87PQhKdYBMWsoN2B74Lvzn",
  "key17": "5BECQVNUNTz2iiYRj7xwYn2vjbfACAtw6pN2LbwWx4rvADPudtPxtBzfQFYvhGpZPia1MjfUMsrefsVbVNhNxS7Q",
  "key18": "2rWuSEMJskHCg3vMSBmJqh1X1E9MKV5YKXYNwhF5TeUfsN2AAg9kKmgtUroKrw4tZQH2Ge1ke97rwTz5979Unqsw",
  "key19": "4PXzB3AQB4CKcd7atrVw4EVmQ8GWn5sBEVAKWoxotqtYZqd8dk7pNvNEK3VfRwEhHjsKTrD2z8gb3oYPUSvoiwgV",
  "key20": "4XehyVBd3RctA75RhfM8xkLnfH39HQ1iJHZM5hAorAUUt7Ut17nxyGAmvHykHkAFacSkoRxbsUYembuMmKkm4UQ2",
  "key21": "LDew1stoVmmGuUKbh3Az15sQzyMRfXUtWFiGn3v756y7Ygy6igQ9J8t7h1U2vrBNy5GsGDmPxqZm5a58ymTXHSK",
  "key22": "2YFFNbqg8zvYLZoY7iaYpjkCKSGf5JFJ6uxFxg9wKaijLyJC7RiRroumUFSwEUKcaBVNkGZKZVrKuecPXExTn89E",
  "key23": "2Xu6qxPkFWYYkVvC3akKubYRYpKqz7Rynp2CJ4HVV7iCC9fXzT8JwG83qVC51diTGxaWYeXERExmtwCroj7EYpWQ",
  "key24": "2omXq2nNa7YMiYQcehaULPtDBWZxqMsc2TSLcwQzrwtUphJPWpJPMCyrsRiTXvGGppjsRTyS56Hsa2mcZenab2SS",
  "key25": "3YhA5MvrTsy14gwRK9MvBHrJJoTr6rx1rEnkgDyp4UYYajFx9d6hy9tG3PvvnEmxfxaXPbwscCEwYikTU6hT7RN4",
  "key26": "4L15mW7SQtPAbJxREGbaVC5zuGhmuEeQSm3Wzx61WLBT1fW3kdpR3DqVjQVoNeMSLcb4uYBtg7q7tfWAMwKp9K1h"
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

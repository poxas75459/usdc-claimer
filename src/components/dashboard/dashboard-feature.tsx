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
    "5k8qQTFbvukSdS5DBunesxCidQWH9RNswroGmdCeGefne6co1s5xyDzAo7LdMkFp8pFXsuv7Ej68ZS82b2gpSaof"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66pnpwni9HKXHbRt6BaMreZs7xuDbLkTpNBaj94NAUXUdV1W3sSDUy1PfA4DEn3dgNgXwfJjNbBbf5pWBugmUk5i",
  "key1": "5eomexaEofKWe2Hd2hWf5SXF1qSZajdaEsx25wMRzAqXMKQiTBSVhYEbQCvY3F1Eb5uD5z4Drci1mZZkx3GwMzFE",
  "key2": "4G2di2RmwV6vw3pEQw39mgJc3qTsrCRuuAsdLxan21XtmyRg38ApDmv65jKANMvDcCeUihWS7o8oo8zfgnPvyLtk",
  "key3": "5SaV6nAc5m6gKVhZPUG4Q82yRFet6KzWTVHTR8sM8uMCpotHzjoYJurSVqJzUgwpnN91fA72j2LAcT5KjShtWFAb",
  "key4": "RamMqsE881qck8NgdQHbpJZDDGjs1wdGezgbKxMTVbyGVL8ikFp7Jy3e9HgBvgJM6En5N4jNZ8rxMXkp92fjRie",
  "key5": "W3qzFLUfQWcE2xMCsJfuucpHoLxy6GtFUA7Q93YnWmWXRQgF3YrHfKhykzGeXVKF1VNDZQcS7MvaDt3d5Jwqg9C",
  "key6": "2Tt7jCx2K21bKyCzvCPK8WkRzvcQpGkTW9NK5QFivxJQwDLk5bG8yUHf5PZxZ1w2R4DgyCksgyAouiHHJwvxDkLB",
  "key7": "3sPNP3swhCX5fYozaLgun52rpZ4g368HJEJQu3LMZWSpUNdSza97NFqBUCbkoyEyUqKgy9vcvzTQMhys1iXBjT6W",
  "key8": "KHpxMYQHNXTGbCHtffMhH8BAfWWV3HyAAkE9KSu4p4iK7G5DAvsqGhoTvLFAZdjU4YkAqSh1tYNhgHxWygp7yiK",
  "key9": "36BMWc1A2oaYc3qHhEtMWJLPgoCkC1HiGBy7rrvXi1oECw5bvLoinDqKJoCdbBub5eXD8Bof7ofdnx1K1t7Fjys8",
  "key10": "3A4qApDyvS388wcjJ8qtq9pJgVb3imZ4UczwKvUGqhfNiyJATGFrs2D7iq3x6Pe3qjiV1f8XTusM1SyQaxczYHFQ",
  "key11": "3sDqjKZZaZJ9wNuyuPyW5rUdDraALZvsRf7SEc4iC97u99ZJAE9Xd2hUmVir7WTzbzZdYujL4vhy9fEqgCSKXTcX",
  "key12": "4M4GkHHmw79mwxPXfh8o4FD1bxM6JH1ndyvEZGuMEbWTqNANPuF1dWibf1LFthkGzSLWpebaUH4op15ZsjnmEwQi",
  "key13": "3azTifCEod1LeZQSpmY4xMtpLQ5gtaTyCercAi5cqNkc9QSvoHxbxBuGyD7BQkeCzcvPKoWit2fufCsTvXZMGUrb",
  "key14": "29WBHfH2xh3vwxwjJ4b6xBhjnPcKjSqkBKNhsovKmPDvdk7RRS8w3KE7iacKQA4gB3x9L8aZqN3GrRtFHUYdJf1S",
  "key15": "i2cY4C7p4gUBrVKmxMupzh9W56ZP2uBsvVUNe6KxeAcJB2HK88SbPD1Agok1FUEhxrUbg2DCQ2HP7ouAALYpuqg",
  "key16": "4v6EP55k6aPMZVix95Mexpcja6HtFPAzHpzkApiJKAdQfTvwzQ6XAobJgKG86PwwhGZFkMX4LhmLh4NfWkeJrtt2",
  "key17": "5ygUXQwwM7MAHzmkjxeQvSLsKUkPrP6eDFJA9RZV8jMH2Sr7aP6h4dkF7qcPFESxUR7MeSGDCSvXfvA3HcMqjPhn",
  "key18": "5JBZp6Hg9LVjg1f6N44wNZ3ie6PtfncLkua41hAtgfS6Epz5PvLBzXGQyRHtG4Cfg2NrxcYsJBj2pweij4r5JeZV",
  "key19": "FVKCSYwrguAWKexKTHfhTNU4131DwVnZgM2wg2Kp2rBm4ax9TVkfrno5Ckftfi6ph9pvGAnvjU55N6PqrJHLmab",
  "key20": "3iT8anDRYTX3cJ29442ifCSJQm5MBsuRKTHfVWyK8rPPfSMuTiU3mW98eQ3wT7TgHNLb9G9NJ1ZNTaHZnNGBPa5T",
  "key21": "2bkwg47nc3KHn5cxh3onUHizn2oBcecyyuH9Ar3Vo7rshbEQ6XxeL7NVRLcsUXmQE8aEqPcnJwEfTqYyeXzJwV8B",
  "key22": "VVk8xjzWwXDPhCZxrmqKFCP4iGL9wEQ2yt8RjTHAa9SE7vGr9v2hktjTyBfMqXdqAUxz6qgQQnL9vkufoFLP1wi",
  "key23": "65tH7dp9uZRKC7RL13aKTLytSDETpnD9W8bSrCmqQ6z1KdZ5Ht9nvrB97J7Jj8qtQSGpa5X8E4aKFqsNJ1DSxpy4",
  "key24": "3eLEwf3tVFrBAXeE3w1wKNF2Ew61DFjFQZT97qhKK1QPo8B2tcwGr2AZjhkXpRnRLMaNh6ZWmqUmKUoR3yUUE7d"
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

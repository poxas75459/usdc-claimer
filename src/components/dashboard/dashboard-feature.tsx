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
    "5hpzZtRrQXuksx84PL37UPVW4QiGbMATNWRSh53xMMS8x5rjStdbPTRAWVgYQTYktXHHXbHczsEfGWi82uKpPFif"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y254tKyfBtn8gwUpZ5WByBbxTgb3vx6zHzPDdsaSfgk3s9NFDYDgSdu2DKxSUTFgYj1G6mzuru92vsHHvkTDDd6",
  "key1": "4UFdQRVmx6HPtTtDYRp41a2LirKXvDfzvG5FNsg7GDVjFPKrhaAoUj8bqhnKP5K1pXnDYLX8T7pk9dPaosJBFTzM",
  "key2": "4RWhrReAGWqFXzKMZBWNv6U3ABQFjD7V3vJXMDvRCE4YdTUnYntTn8t4M7bpvqAoWsm9akHpgqTniyYCFn57G4HD",
  "key3": "5JuFpnoYoMjCxNmkExmp31reV4oipaxR96F9Gh8PxLaSbc3p5MoaEBzEbw4AoguyopVBtVVFWsioWGEh3ojxbNo8",
  "key4": "5q7FhHvsC3JEzAxwWaLYUP2ZtgDzSkqVcVVs8WUZtjbyKf6rsK7zJWP5VhR7qMNaRTMNTeAASkeBpM92BN9HCc28",
  "key5": "61LQjbYkp7EkK7n7VULkoXvsk9aJ3Tiq6w2dxNLoLUhAzgiNVauviGRkbngqWrB4f4F62AHjnFhAVyTXp21QP8WT",
  "key6": "5rEptP7KiiywCz1baaGxWtpnkQmrg72PbFhZFxJmMMEksV9UNW1RVEBc6YVz8XSEZLMowkZLGFMYxNm1fk4QKdiu",
  "key7": "5ioPZFF1mwwFg3z4k3scLSc7r8PxvW28SZguFqDDKGVQ5sJ42Fc1iZ38j4JECDihM6Af6E4UVgmfcQcmfMSgcbf1",
  "key8": "4nns2fZvHxUhwyCZPK55LLhVP2S4mNUy5zn4rnJ2MmqG7M1z1oKfHyjG8BcMKVgpUVscip5T69z4LiEeQEToMh22",
  "key9": "4cRMkS9W8fbwzQ93EANWXv8RVvBxzoUXsC8gWbgRfxHMDtFFCvodDYMtShnEhyqkgfpDQa8Jzxvg1TKWzRmqwAtU",
  "key10": "7GCytxqMeHPow4bpUtUAqnhqgJ4cJxG2XqakkeCwSzRpr5My9P35vezHPJ1KmgCdTYRzB7FyjZYYdGTCiz6DPdC",
  "key11": "qGkVT6qnwuGuviBq1iygY3yTxzHGUbXSentaomfZ2A7CZaU5YpD2AxdhKAaip8MPEP3KfKkGKVzDP4kVJmkDAUF",
  "key12": "8gBV6hxxx349TFhEdtYFubUraRchXho9bjhw5UgJ4ggBG1VfvQEZ6szMKRth4gEHw4EbNniHWNhREuNVBWd8eWu",
  "key13": "4vLvo8BSkiXqDPopeRiXR5tqVb4Fz4Ju5wih936iPtgoWwTuMCTuxvKT5QoYjFpcCVnwkEKmTaQ7d2rFgp2yGdJG",
  "key14": "3VmUHNh1pvP8TgvCX4d7f6UonN2K6ZAbt2czgRUVW5QyyJVGAQ9xUB6uobWhoVKkweehKbr61YHdezeG9DqaQQpk",
  "key15": "4rZKgqDrC421cQGyoY32yRGT2nTvdm8zt7qPnhXyrRkgocgPhNySM1XfuxvSSFGGFMNxJoMrXQBG3myT8keb1JuP",
  "key16": "4p735zfPqtKHkhma5ud2o9SA7GktazBDLZf6AgtNpXH4czAjqKCpXpWpMSre4pUo47kBuo14u9hakCyXrvtFA4Zz",
  "key17": "2934asjz3g5RBBby9y5Kx9VG9EwtJEAcfrb19vj821rfs69gLqn9YaoYYqS59JmXRVh5RwaEMJ5w4682d9hHTxw6",
  "key18": "5yaVSfPbBLQyT9fiEMuPWEHXWF8JdA4N7uTNZK6HerN3eoeGBvjnfZFtM9i5AU5q2DBMdw4g57DntBqY2xYoMuYs",
  "key19": "2HKGGKcrrugf1JDki1VydL7rJBm4spMfY9u4oHziz2q8qvkBtR5ufaVo5BoSer3eWu3gt5aCFFPL1AqGmDEqxgiF",
  "key20": "3vYiX8JLoQXbwkdaqiDUECaGj4qiev4Efjv11i1Yhx1CEWTe555dpXLJg65xADn5BAwHe2x4WqbcXVX4XyFGRRRZ",
  "key21": "3HcN1C5a4Pr48YaDgHtRKQq4UgaxKp4Sz5N5JqKMcxGLsyMUXzqCAC2tBApvFyvzpZHqpqx3e77YzWzxwjiZ49DJ",
  "key22": "UGpKeTuxd7cgq6qkLPzHbSdZk5724f8SKpzWi3G3bZWhdDs5njVAyNaM2MpbxnUr59hyfSMJrYJ91LTmsC6Ur4c",
  "key23": "7D3FUJW8ihN354MffyDdDrAqZMgoz6JBcMLuMJcay9PgTWiaoie11gcyYmt2jsbbHeTtPq1JzEpiUJouBzxPbj1",
  "key24": "5337n1puSBSqRjGJWJWR1NrBAYr66ZLneu7shuqP86ZwSYjXRBJaZ44qEm1kx9TPWrCeHuLe1d5yk9BGGvWMNq2P",
  "key25": "Xy4Vo7AFt1Dc9TjHQtrTKzaXqWLPWtz3EPnpn8JQrzzVC49AsGvbjnr1LPfwaZ4q2TgG9z6GzpQewmYrLnSDT4W",
  "key26": "5oBxyURm5dZeZbHebjv521hx77N5fBvWge1EEChjjrVDtPLYRuy342EifkkiDBv7p1htuA5DaBe4KBdiLV7JmPAH"
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

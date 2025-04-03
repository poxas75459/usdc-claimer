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
    "3bYcjDnp9KP7tR3VAT4i6sM1MfhgatjmUzVVxa8wMickY1CSHpAV6zb2xb74BAB86kanoKajYHUrU9K4uU9nffCA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QgCNUtrdbzHwsFtin8L5W67xdK9EQVqvcFsW8oxoMZJttTAvSTviLgnV8Ne9Pv1mYvVsTbCWGkGoyCXb4Cu9gEE",
  "key1": "ShtYwaAA8v3zZfSyG5fXhkieTarNM4tb8cr4ogvMLCs85GxB59Kp9DvLQr2fwaGdB1aqxH1uPG4H6GPU6teAM1Z",
  "key2": "5GYUDrDceL7ttkZLGGcjYi91C5rH5APfEHNoBYgmjuYGSWZ8mjUKj4jMpUQLLhqLTH8SnaVuMXDbM47FKbZP74x2",
  "key3": "4rvw5gqwb7zvowFVr7YQ9bZE2WRuJVdhMXFTyDesxghnnKe1pMinzLUQ9ooXEZU3n2N1ZCTAaBE696mW1yXppHRW",
  "key4": "5jG4XL5Wfo1q3evtgGSKkbpKYpo41EtAn5MgDrNPvse4MVMWsVaWyKWKtCV8uTGFpWaGj4M1KFcDaD9aL9gjki4P",
  "key5": "2TTU64DX7ENdt3YW7c4dgShmdqkktasa4kpp8g7QE44m42uyg7bRgd8LVXh3BthdTXYKKSCdU5b9GGPTbecXdd9a",
  "key6": "45qJs2JqE8PyksqCNEHTARDyiGoJwW7YTtD6PgfDsELnhmN4QEECPeNMMe9cATUyk4VDbwKVZmPGytue5uuBApNg",
  "key7": "qaTNRWfaqnNiqcUV33wvP3x9RnHrHPJkdkg7kM1tc1RLPgYFBkEFWhxn7P7JfnkNt1WDQW8qkteyxkTEJptZfRF",
  "key8": "4yNx55zS6JVrajHN6iDwNergRs5sdgGnTLLDJWpgmnbYdvkepAwCtD47QuNJxnwzxsHkAbcUgtecKeEMPZuanJqV",
  "key9": "3jjG7ewjxsu9VkB6GAPJjqiFN1kAN9B8z8yF3jNcommLXZ4Mgt5CRzYZmd9U9aGdNCFFYpHVzeT6W9tsLTev5Usw",
  "key10": "3ogoaugED2TMtH87mTGor35gJDZz8St92XnSqfDz7Db5ND5QfiYFfpGMw1nm31ieTr9rNSiW8CUeR8sj24nimvGX",
  "key11": "5eDfcDA8744GRWgyjc95BSoqfSeRiQMsJoPVqJYJND6dyZA5CRsi6cUC4NbDdyDA35DYnMrN8ZyJ5h2dv7azpz4b",
  "key12": "4P2mpw28JBg4AKGBLVtKuvPgMvfCAAG9yh4bUh9a78nQHTUfVcRu3pmt4xWhUUP1ftzfTSzNFeRCwaXJbe9Chtr8",
  "key13": "3oMdJT7V2YqNpPK7Nw3k1L29YbfXWYC9f166DmrgnYRsLE6vJoMzxrbvM41Bn7vUy9FR7vdthjKvAxqYzLo5EKJD",
  "key14": "4mCNfgdpkCXq2hCNPRjqTFMGauTtQpWBTvqK8sEALzZv5YnuFRD4UXR48cLjiEMyQ7ox4NMzkUQjMzBisF2gXgh",
  "key15": "4srB2UurWHj4RDBtDjNeJg4yqwDvbY4yG68qH4ZdqSC6zMJi5rnmfNsf3yUbAcQo4NxPpUsEXeYyJwFA3C4iR3yK",
  "key16": "2PkZEHEedLybhppqUjtGQTZdzo6zEfuqpgL6mSb4FknucDgWXLCy1MKtDUPm2RXnnfMTuoz2Bugk1urW9kzq6Etx",
  "key17": "SGSPt9jzUGvgH1SGsKUgp3zQAUxPQWnFhcCtDRXNfhD3tNQQonb7xsVsCXwPw2ZfG8yPSmnXAfp5xYAYs5fB6rn",
  "key18": "3hqEnxc545kbY7p16zWj83zmadJHmDpyQ29LVwm37WvznURiMPfouxzSayEvduWasxxaNukRCfrkedqcZWQFQgCu",
  "key19": "5TDqoXuackBZ3y43XTPfWizpEPgZXv8MzLbuyEhz2YitiEdDudYkXe62abpnZTmuN7H5BWyRftBQqFN7F4ejDAQh",
  "key20": "oky4M5suLsiE3xuUR4NY4TbU8PEGCKZcCLohgtt7XyxQeqGoghkwxPa3xQY5oK7QiLuQ96r1kyip5Ds13RodLWR",
  "key21": "3nMN6SFeF3KqE7V5nXUbkVGhUtejkBCAM15wCFuPDqdFrq2rYheuaTBH4AtoXaX53u22mhayhf9pdxM5pbSZp3VM",
  "key22": "45ewp737ssHgSMZWckSkBTXRQJjQu2tHmu2pRpKu4PTmWMZXTmwgCf5j5vKse2BNx9Qg9D3UYdCDCbNTuNNqxrvx",
  "key23": "3WPKzKN77dzj3rAHQRpA46dQsxVXyw3YAMfF7S6DJbjRGF6kW3DeJHQZ78WhLdwS3CZNnmznus1oyJ2vMzsbsPqv",
  "key24": "4u1YLDKo2ZVpwcEuzRg5MHydDjNTCjBRZmTa6eKztbiepGH7rktDQd9299H1VaUwr9QpyctCh8fFBYSmHNSscv6f"
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

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
    "eyNXTwv8VAy74zAHbCwoqX7SSWMHpRyhmjywRNAwsGLALtZT6vkYeMaFgPFYQSugZ382CgxWtuG87Hjd9fbp2Ta"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GyMUnpS5z6qEAFZTVuNS7qNKeh6TbHehip5aKqTPjRjw9QwfySk5NUCyKJ1gqubEsrAF5PKzUh2wn71cswmw2ya",
  "key1": "3Ugsjf3RXr4nfM8PgsxFFwje289rUgJDicsqYc7XrKeNHCsdpztz8q8f9zQRV4wneNMkLeJubZA7tiUwErzzmx7v",
  "key2": "2Px61ZhPKekifS3EpKsXRVdhE9ie1sujZAKA4vAv4CEZnyKYeHdAJqkhuCoAkA57RYoD5iYHNUX55URVTTFTan3e",
  "key3": "3RdKFavX3iryvVaSpqkapAa9dJUGSSYWunUEpYz5yE8MdEfQwg6kFNpTGgS8CYbDKUyUjXYQAYhkPFX11mgS5MJB",
  "key4": "5NbvDhPKU5FiQxwVVBqn1JiB5DQUmzqUb9MUi3vzzrq4Jv3xCYmhwppKPvQb2vXYQnZL2A6G55H7mQsu1RcchfQi",
  "key5": "5gGaHPfBEJEeG5GKC8mU6n4pVwyUBGgtLiaEZg36WYgK7cqBnXdEvyxFiTh2kVMFtN7ae25g4Jr5FNmiWEJ7bL15",
  "key6": "24AWnyV7JD3Q891hxKe56LQsFyiwL3oYWPRvZJDLa5NdAxaobmfXKJHfi5es8VXJjZa2F3pWTNhJ4SHAMRgmpjW9",
  "key7": "4eJijVFqV3WV26fZWkhGdv6n3DA3PBq1T1vCN8r4puhpwkn3xTxYCxsUkdiBtWUJo4tk2yRjFSn9QXEt7xS93Sr4",
  "key8": "2tUXSj2ut7Ux7jad1qj3DPFmAry7kBuRw5dCTeRoTpTPPoZaJjbPk8CJmiLveoa3fkeezCDDt9eJ4hHyf19FVxDH",
  "key9": "5nWgUEAWp2wFEzHsS13jQ8WawHYLQNUuQ3wfAba4oY2dTejxTRKswxqcH56fqoVWZFosFmcCuvdd9qMknhE8AciV",
  "key10": "ABnMZxHPoxwh7Ac95wjJ6jxqUVKXpq3cTKP8sKEjAJKDH8wNQ7ha4SyjfNT3DWh3pAE9QHZ17UkoT18UkmogspW",
  "key11": "2jYoqmmurMmaoGyARsyFwu8Wa8zFs2ebyCPBNjGD1hqj4G4pKyMESkrdgSe3MeJzst9q4cVd6daZzb6cZnW3dQqk",
  "key12": "5srfPXYmUCvuWbvXhY43Z3XXSjSkttyMWiWiMCWcA2n8gR6TcCHU8js3GScb2ZUasTDyfcDAmtKBQrk71U3nAVtc",
  "key13": "5FBeEKwBYbrPZbGT7XrAqZxEjkUgni9TQydQ8KxDDscFVKzQfJ3oexUwsnKrSf2tDoJR68A4dJuCM9SYXyxU6NHs",
  "key14": "4YXWTZ1Xdc58r6jpKqCP6HD8NfizgPKCofiXJo5htrb2uepoGJb6mgfJuUCnAn7xCHD7Q8ZSDkKiZ6D31Ha4MqAN",
  "key15": "5FHwLxGbbHThaKAzqbhjyVCBab2hNJ6LjbpTDJiM7W3CfHQQjuD77xC7FZQxuNDrXvEQRBHbTMSxS7J81cBfDPGW",
  "key16": "2vQiNgfi9fqxy9Q3S1KPsogtPSwg2mkYNQrP4LZCBsLVPwjJxCqGRS4Cucc4WnKc47fJMXW8WJ5HSQz88KGNMJok",
  "key17": "4kVjw4JNRm1xNz4hygcLuAgXUphCum9zGiz7oxEbSqN7LqUb4QuyUnXcgBYTehpHf1JruaBCAjt7ATxiAgwez8qY",
  "key18": "28YDvtrMZumrcRisVv3tSZb3US8543BiNcodqC8PjvbPKUE4MCR24ybUFNFespQFHVFixgbtSmUZZ4RXnKAZD4Zt",
  "key19": "2B9fwrYtLUJwDbrjsB36sm3cX9kkmQ86s14662pankWKDtyhZdzA1xJRRXj3ZaHZbTdqzvqcoT2AG2WSyr9vvxWR",
  "key20": "3ebT9Ma5QXK2KNqC36E782Vp8TBT7jmqMg2Rh3FBet3jtwEJD5E1NgegaUT8wHF2RgbQRE6rsUh8XV4zCfNUmFcS",
  "key21": "A2qFzpLTtdctiK9sqGBZFKxTikipq3ZLvGhSuaGKTZmijU4te4iRDSTKneUa5iiWYjR9wDEQZ4gASWULDQyhPJg",
  "key22": "53ywZvcmRgdHDyWZA6BX4QWGguiWoL9iecyRXpPHu3emefEDgTwpszqwND5DpdUBtDNviMQ1S4t4JHZAMrwSZb8d",
  "key23": "MfskzrBSP2inNhps8VyNWF7ggNpT2tCbAiFKGQwc9SBoi8JiUjon9ud9vb8uUA14FX3yPVktDzzKLHf25RGesu1",
  "key24": "4ssFFZ75aBNcRhck6gD11dF1Ripwak6R8X28zyvqoa1LpBXsWchFvxodTuTJBVdwRRKmHfQ2KWbUBthr7u3rFFoc",
  "key25": "8uix4xc4DpWTui2fTkz4yMj35JSgzPKYYZDLUGefqNHf3gQQamNK9UcuPRP6pFdPG8QCbqF3BScSZzeASuZseYa"
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

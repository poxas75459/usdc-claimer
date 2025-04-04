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
    "45zgYMhkc3vaP6eeJ5Uw3QDPxhf1NAx5UvNRsNMBhyidF22MqfjRRcu4GPU7sGJxAf97tcyA5FejGjDdxYiWbmYW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BDaUwXvovkj7aEwUD17wAj5NRabTonCPU8EP9FbxtGBqiFZu2Mqj4cavzC2MNBA23JHZPj2Ns98D7D82hmSyc9V",
  "key1": "iABsi9KrQwGuAETGo86mrfWAWBixsX85niH12J2h9EjQH5J29J8sUXGSgnYJsXQ7QX47rogxSvKXHC6fjQQ6bTz",
  "key2": "5yocixW1r5KSncdwoBWQJvQbKrewM27WtAMcq6BkNR5d1zZ5gPpdrrh7YS9QMJkZiCB6GixcPuFH32PYp9G2AjLp",
  "key3": "4b8RkQEagmbnzJyc1H2sUiNuogBgQxwrUjLaQdfMkX1QhYkRePo1y3SJDNqfN7jbfihUmoeCLTLPh8dfHQFvPbLQ",
  "key4": "5v2ABXFeCpS5mWZqpZZPidFWgx5BSoN4wk6cAPF6VTgiQFy7xCzgZRvvcreRf8XDB6h2fF7N9sDfQWKbaYNaGHt7",
  "key5": "5jGoaAQKLPAeG2pMiE3U4PGWX3vUKMMknrQVoL6mDvYPeto5xnej8UGCsHnPCubR3m7h6kN1V6rnYnJLWSBUgHFg",
  "key6": "Ry89yK2Bo5pVBDu8NtXTujnhenENdwng3TwE9GYkxDvke6RXfBT6hA8NdEs98tfSGL2WGx3LVsk3ZEnZYPP72Tu",
  "key7": "2izqw4uJ7647xH6obVnZzAxNTXGsgM2xqypwWVUHuxxAqMMA6vakoWhpqFU3swdrAmRofT7QmM7TPcc4xEb9j9uA",
  "key8": "4PfTuPokoUBRv3jeYAC5jJYigfwbdSjvSwfMS2iKr4dTuVyh2GmLTrT6k5sJM3QuRYtdjqEWedjRGAPnevACNb9u",
  "key9": "3ZtcTTkRZuYitbkNQvEhCs8wMKFxanccD2NCKUNtnpFuh5ABKWsJaN1H83LAM2HwbY5cbntEqBjTU2XuNjbo4pPK",
  "key10": "5mZAxfYRGLogUxHfvpL3dghfc9uFXbMEJgC4H6NnCeJBH8RpDsj634TzB95fE8GxcbX6CJPBD4AhLtoKoZAoTmb9",
  "key11": "2NZzhsnZ2C8GHL9NsjjfCdZYd4gEp27sKsdSBNUsnSCK1uiZtJqPL4PUtYmuxvvetZzpj6S7CT6YeakEewpgGKBL",
  "key12": "3jx8DKT8fnksWmNvQdso8Le6tKgW6YErjDVgMQ6Ni71C9XcWdSt9yr3xGpw9F6HNDVejZcK4z9BMrgm1mh73Ku5q",
  "key13": "2rGqnwXwALnjjs3YKT6yeXqX1N45YLWMcjQ7ZG9NG8xzzoMWYp6BaFmPBzwSj2rPLQnGKbZyCzy4UEwpBkdMkeBJ",
  "key14": "3xC1D4boCRsjGeaje7Ch8mMifmdMoE6wGKcek14FGYxcdV1ecm1eWpuphBqh3adeHEV5wpXep4jCSXWScRKvFj2w",
  "key15": "4T2DaSPM38PV6nbawwCFraKsY3XQAf1E72adu2CyhSj1chrNwJzBy8Joo2q19cDKsiqqZEzvafSk1ThfoD3P641N",
  "key16": "kFk92XkppbwYrZc4f6cnXe746Yd95FKXs9kyzLRYhvU67vwNoiWsUPwbi5ZR9z113sB5fRpznDChyGQyxR9KnEd",
  "key17": "yGy2P6KktVhPXQqZcWB4ZqANuQPbKCuCVeQzcSzUuSp2G1EvYXCMug2qcwqbSJUoQGB5od88QhBpBMLkN2nEP2W",
  "key18": "2qyuvTsAYPGW5Ah6gHrxYZAs8pFVSBDFgLejLHBwM9CbH2k9btTHif91VVJWkuARgEX51FNq4Bncqx6xutpSPDGc",
  "key19": "g36ACbf7Nsow8SMhi1dfR7WMXrTB4CtpCB7apPHcpCGNo91cyEicQeKDgY2LB24jZ7zqGe4jZhZYPzYo4j2DtEK",
  "key20": "3QrDNgBSYJP7gUgfjDBfoU8791YFyUtCLrhFb2qzJCpMZQksNJfgwoKiM8KteJAVGejvWqHjKtUeKKUD8PRCi2nQ",
  "key21": "5WrQUe16XeEkG9BXqEMoXYhJnEQEcP1F1nUKhYuX9xUAYUvWTmWFgLhj2UC1Qt9yXS5t19hiDCzZ72buAx5Qsnpg",
  "key22": "5191dZXYq5sLo5c1ANVVv6iqjJNuYHj1Ebkmt9YtSbY3K8JSSJNQ3UqTTQoHronCzXPGmiPaCsRaKLNJ7ohB295U",
  "key23": "67iN9oiJdxoudpqknePB462uuBXGgVmF17kvdekiPWKhBgYXBaUH46FEvMEoFU4yUjjzv6kupN8XwzPVyHjivkUr",
  "key24": "3G45wkPNpQ5b7SG8daVmrwaeHs3dMJSSuW2zxasQkxRUEp7c7UVVM6ACdLudL87UPh8TGxazzewneHyMauQtFzh5"
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

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
    "58ygr4nCQpaMGcK8hCpWXQ786JwjYX8iDFxN3JkbnB9DPccRXMXabrAPmw6k5pe1sbDECWMer1uoM1tthZyo6hYY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1KRjuTkcUfdHFhPmpAtQAr4TzU5rujVoD8xiKGxbpfEt5ZAnPCAgnSwThWsgifBmqwkqwH2coSqjJ9VjwoVPiAB",
  "key1": "4NmP84zGjM8Qwtu8AuutZiNxARM36u4ovc1dTsgYVe69PDR13oxUNL9r4ba4XhwoLeqbs9QAndgXP88yaFsZB4NX",
  "key2": "5megCckoqUvuwpM9zwhtHbBJxhi8rpZQYcp4waEeFwsDVaux47yYfmSpmBqcEVY1PLb8KkzGUWgdZeTDuwZPKJZY",
  "key3": "CYTVoPGTWj5QV75tPXytmbbvmWoB1wzv2nP2kB6CZFPBUjua2tqVsFpQL3cAvn5koE85JcyjZ8C9AC8nsqtWSdR",
  "key4": "2Gq5owdwRip3tax9jdwwQYmBzJhQPR34YLpzByq4XhUxhJvCxtyFRmyhVMehCasBMi8U88LSQDDyK8R4WzgGXWgv",
  "key5": "34JuJrGj3JKpzqLNenvoXL6ioBHsqNLF5Tf7D3WwqmyxzfwQ9TNL3kzgjfv5LF8VPgoR9t398AxkyJnS6Ra4SifT",
  "key6": "uUiTtq3N98fSe9zvEiJtjwgNQ1BbSTGYaJkPDxqVMQd6HYr3eg9TtysU11AbAf1H9NJTXUW8L9guZfoXexaHuz8",
  "key7": "JGDncNPmtAS5AZLmcNVqEomDizSinqpEQvspa2HjTLbqB1Y9AuCqiQUbRhrJEArHjSUsHcf9WRoThrSTWDfv622",
  "key8": "2NYBMXUZ9sCikvwfPUqcGzKVBvXkUWgWuBhbUZd6Mcr7qgyKVUfzvUgZN9UjPm3JiXwnyCU9zvdk8N5b2nRZ7FPg",
  "key9": "678iNPMHpsuJPv1goEDRKyef6N4M147W7Mz9WyeVpgZc53p2javMWYphQGucc2C2p7Pdx53Fw3NexJbfBfih1pZ9",
  "key10": "24f9YwmfmmBtMfyEPrwFUzvnF8ckgcwRCPSKySAqaJmzu3xgMGaDCJc7qGYzEkLMMSu1kGU9D7d6oiaUzdWP9Ybi",
  "key11": "3mcmKaU4oJcS1eMqyTGaT8oB7K9DstQk4DAjNXQGMtDN3wkmhfKAKx6AApUmkHbxQw4GKiZXjJaEysSaNMX9G9rB",
  "key12": "5TMd6G7imtoDZQ3aqNSokfgr6gz65zocMUh7zvdNP8WLEAthQGFjuUZNA7ufeXFVFwDYMkj2z73ka7GUorJ8Tz9Y",
  "key13": "sxVJUo9iTGrAzTxdiFp3QWAaQkb429bvaE5gnnRYcDmDxcKvxaEnLp25BJS989saGN4u8mezbVUt9SyKhA7QEJa",
  "key14": "5KMCfsHewaTYqYaYPoyRbXkUF51HHmtp3MYNgPKzKpi5F5DEBfgkGtTPQhmoLYvYQeSuy3QAxCeaHgy2yZXw1jmj",
  "key15": "54hmwBWAcL1N3XFijbxN99dq2hc5AQ16DdivfctQRrjJ6X3jD3ZEUwcQReDYMFxNenVKLncH4M7ePJBDv3kyUPJf",
  "key16": "2wHX9hZtVaHr2Ssmodgn4ynfxzg5k9MJh8BRRqh8FbsYo7Ui6Nx4BBowveyTvoHULb7ivJWTvmMuJB6TJ3NWHTUD",
  "key17": "3jb62PRrk19Cs7PKPNycWjJ8LMPj4Wf1HscGGPWmpYRfaPQwF7oo8to33jvHvaLxMEQnUcj1DexW9cfX3njuYM1T",
  "key18": "5p57fiVVoJ4iestd1UnrzjVAkaqxiNq12CTcBauGjznFS8BQBa7oLasuxsqdwsTCDJotZN7sFeP7FV33SKQXFJp7",
  "key19": "63ptLQmWraX76piE3Kk6Feia7yyNd9zASRQMtDFbcVUVyCqHGzX1HJhLET4nG3hn3Tp2PSEzzCzfjj8oqAxYpYxd",
  "key20": "3G41GYNqBWkbcmiM1FC7RjBBzwfGHh3akinJTft4HVz9AC1vQKxRMJnp3WTwD71hLP8Zhiep3kPTESBJLxjB6Hji",
  "key21": "5FSKtbD1u4tBVh3YJ4friCFFVZvsDopj4Qv1aoTVFYa744udfaR7bDv1JXgq5i8TAGQLXpPyxVkRcbjoeWcRKFaz",
  "key22": "56trrf9mYVeGhKDMGq5grPDz4cyfNF841RDZSMsbZ5fJ5fEVtNW3DCGeYPq8rGeSTdYt2QtmwUxPbPekwgVS3zcz",
  "key23": "28wfJyc5cM1yLJG7ExAALjMZjSbKfX3sHZEw1kaceY8ExoLtfXqo4qsUHkZQQxUHMnToQfbs9XQjjXhy96MSu51y",
  "key24": "zzCz5zFPQVcsVzjgpkySwGxmuMaQbdWFYVidSZY9i3SiKqw6L5z6ghabUWKUWxisJoGowJFWKLdKUY5wtrkNmXz",
  "key25": "5LpxkHVNxhePsBtoyRQC2QE7AXm4DgkVWB5H5ofQR1TEayMu7WhySKBSd1hcp1C9eYvk3TgvXbfB9u8RjWUtCLf1",
  "key26": "2q4LWs9nUQM1RsT9vQr2yQfUnsp8qaeEqpbWaPGztzDf841UVQ4th3y3ZqoUmX5EyJNcX8A6yJumxocYxfvNVqma",
  "key27": "4JZPGDQ1d2a27veAQTcjSgEsX2v2RiPYhgUbFfX91pqjJByh4KhLAHkv43D1we2xLpoatbKWhKjViTqyBk71HNQL",
  "key28": "3P64uBuczefYRdw9oErj5Jw45qwcigKReJD1FQzN8JZXyEMjNMPMEQn2ctoCfy6VXZeALKPaF4mksEV7dVp8JztZ",
  "key29": "5Sj1vYEAUDEDmdgQaQCpSTu6H4fDuDrqnCmpceGgmjtgAmkY4dj79fYWSgsU276ZMpxK6Ri9VNZT2aDT34qYBSzY",
  "key30": "bMzw4QUtU6X5NaRB2juk2af4VjM8q2jnLHBEEao293rFazbJ7DAHL8Epavj1R2Z4Vvbr6UKbSp6ZzAc4RM1uuvu",
  "key31": "echyQo4nMtBJtsJ6auC7p4vSpc6CvRr3VSzxSxwkxe1uNQw3DFwYeRZW4f8pskpSLeQp6BqrgKGczoqFTze2TqV"
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

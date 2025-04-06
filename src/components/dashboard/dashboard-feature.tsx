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
    "2ZfezjSVDUDFWpMrzoqbcE4SFXU1mMjspvDkP9yEhQpMsYsWMYjMSiubqRwbEGhweuBqAs44K3P9GRgfcKqVr9hX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y1aendY6UbXENCJH2NKdmjw4tQqMuA9s9cdGkEhxafm9EDtFdo1RNv9zt1BNQkr4499dJEhpDVmKxcnfbbGLtq3",
  "key1": "4TwuA7N8y1VrDcTViSk6xSkkRqFqDpiEqcYyugzkwRvjbVn8rMd8dDcfnVSNztQjaEecHcAx7NiEtkDppwQ2835m",
  "key2": "47C6qCyAca1t4sYTPMpn5sygv6Jd1LCs4LaMoW4YeN1uXa2q7JJKMHcLMfEpnNZ1h6ugpMhNDDtgQxJhqMdEt6sP",
  "key3": "5gqa5LDfMwUEb1d7BceDB4bkx2wRghSi5hcGheY3JmJaKQUReL6RrmNBbmS77y9d979UDXgsnkpmUhk7NP3MNCc",
  "key4": "jLYPrAib8YAr2ZmhTdSWzKnqvVXCh4erndSwi5rUeQiaewU7HJJvxmbB3Fj4WGqpqqa9q1dMD7d5r6WjF4C6Hrd",
  "key5": "YoikiXDZQwsi8SAwQtPU4fGojvXgvf6iWm7zfBcKT6uJJDoh8UDv9nNV98tCpDHhNi8TqngFV1viwJLFHWnSNe4",
  "key6": "5TUwWfVZGy9Wo6uYxP8feBDNSj6LnbgWtL3NwoDGRwVErK1TYMFbvNpvat7jfHfxfzPmMUU5wRCqMSj5SceBY2af",
  "key7": "3qHnbsChwo96JLaXh9sS3gviuc7cJQYQ6dVjSR7KHQyRL8BnL8fwYSgjpf19JyWtKLBBp4M727A6HEDx4hpzDo6g",
  "key8": "5Z67oeC32ttPhiGVTCbNLzqu3CYBQta1wgfFPRaPhET3oTX1QTBp9jpfZz2K4E3vSQFZiRTLYeCuQ2oKBzv9SQt9",
  "key9": "umNp7bM9XzKjvuxxGyzPefX94QP4hh7NCc6zRmDDmvb2niaQDns4NCTmYcsV3V6C7PeaL4rs1wCAPMhaRwy5Jz3",
  "key10": "nV91sbJXP4AARJAK9UkFDZP2i5jprD39HiXMbEF8DScpeLovQXweyRdChmDjXBEAkXugiJS7m2TzfbUcVJDdaYK",
  "key11": "3NohvsBB17uV1LBmD3w4BtPjhWwkbr7xuqJDDGAzVAtLAhwtMuENzGY6Y7SyQmjpuS2eDRQEYL1Hrw1aiayr26dj",
  "key12": "4aMhygQdmjNPc6sFXV9ZQsYykJ7DuAiPYLsMULqcqG6AQhWRYFf37UExga97X34n9czuBXFTQnt5r8wCCB2wPrma",
  "key13": "UpbTsnqbkW1zohxskm4sbxcGTb9buh8a2QqgqN4SwVUyQrzquCiSXTmri1euNP7EHfsBvhKtW3G3eWa8eM4FEKZ",
  "key14": "2emFpt4mo6jETt3r1roYizF4HEM56sfYU7Yk3RGs2RLYEFmRpF9TLceJyULJ1dvB9eUiw43mpnjdfWCASzct3EDC",
  "key15": "din9VMW6GTpE8yghrEu3KBcTQK5MKSzMqxajj1RPhFsSxqj3HEfrafAwqzAbT1wcj1RLuSPcS2khiq27WKiXps2",
  "key16": "4AZv81kJWdXCcMo84BAdk1fruTzGVYyMNgRGrJKbeQQPbD55dY8PkKeX6tXSPjBQH5AWp82d1pAezQjPeA2kCBKP",
  "key17": "3bSpVibSepeygtmEtXzjZ6Nha6rJuchraaPj6qp8nMFC9faeAb6BdGCWxLs7dUTyQvQwZRr1sfDes4u3v92puVD4",
  "key18": "2Kdz54QgqoxB4u6ioBHDC3cXab3x4CGzkT3oPv3jKeMKEzL5FB2U33sRTQmvBnny8Mb24A8ckwoNvASyM8pYZDzZ",
  "key19": "3bCca2aZARVx76XEDs4mJUA3Hi3BNH8YKS7UstAJcyMWX18pNMYaVnxkPPZALgg8RnaGqidgdny5YM8vhsUa281W",
  "key20": "4TwXSE36eEnwfC6HYDd6bDp3RB4TDY5jLnSm5k1Giv9XwBsFvpTtegJNAmnZbzX48zvNjqoNDi88hu4hrLjGkXN3",
  "key21": "ivKxCi1w362qEwV1r2UFo1QcgY5ioS6K756GySVmrv6X4bagAJ9FWM8gqgi74tw6gniLKrMhWPouwMgZkjPenH7",
  "key22": "2dtKmz6WJ5bSSmpxWPT7Rq9yfokTDMJCVhSUH5RhBkURcKAZ7xwfWd2tdUkwdCUXNr6CbCbahYYZi2pYAzWgSrmr",
  "key23": "4zpjJ3rb6hLZJc5zSXzdb82RczhQK6Uby9MGSCBaoYiP72jcMiVLvFbjwqfWSs4zwVT3nCmpWTNr72VppZS9PzCW",
  "key24": "39C4yhBvtzF9n5JsSnsu5Tjz9ZPt7zWQRbPfGFecsJ3SZV1Z9L2yZ2XRujs8aEQwD4kPSahPHtbvHVfic9CB7ML5",
  "key25": "3HKcpEq5CNH1wqK6iHXXJD23DxgVHdQtJZKjZDb9uVEnJMo3KK8wxW7SffEvBj5F3KGYhmkkixY9RXART9KRvxtS",
  "key26": "3btmdBzjZoFBknpkZst1EKuAGMooE8KH58mLNwmME4BZ6ZH1oc5QCRZcsvosUKrNS3zSrpaoUQuKu5Vg722GECLs",
  "key27": "3k1n9DcuVRaY7KpQNtyxjEBHxWJK3XQBWzqw8GswL7LaqGdwr28ZApN4aUbRaCZ25CM9guU9pANWoLUwdEUctyKv",
  "key28": "5UUjgHMASYX2Y2A2jqDUFUfDaNgxeBBirwoneJB6szkvuimajFWiwuUjfN5MsMRjR914XdPnyxkVWbEhbDuTpPeH",
  "key29": "64oeWAq2SoaZRumnUmGcmnTwheyfAWxpeusDXVS2b5D3DwQTR76beep5bwqJALZMxnPFtUqwua8PzUw9Za4WJYKN",
  "key30": "2fvG7h1Rq5DGUTCUP5wxdjukP3YAFGBENpGph8WZ1D2tVy9KLKPzyAQ4pqh5k3UCfHM2e4sckfrXnUbKK3DZbuc8",
  "key31": "2pW4WWoSuN5yLyNdNqA5nbmHqoii7QABCCniG2BYGqRGS2yywC6qZwN6ppvZDcamjz5Lo9J946Z9qoMW51YXPtEL",
  "key32": "4xc6zjqpZpEHwPxFF3UybzkJYdHPANvg31frgkTmqrnHf4LoPXGXXiuKH7PbWA21opf52LA9TWN4KonJ4gUdHqjY",
  "key33": "2BKQDYzQvqLZMDvHEwpLNMS5cYakYZC64siMGMVfpGRmCHZ83QQ711jnxYB1BYVHaLDmFwE7wRJjnS2CvekiHqn7",
  "key34": "yB2ahCiaE6MKydW4BU474CsQZyAEJDiZ7a6EjYXTTMw9v4b7jZXvVfxZJe4s1GjDrKzHgrSpExpJoyy78LNCyAA",
  "key35": "27MgAYGfphrnYcZjqQQrpgpTJ4yNfPijeCiWWmhxhugkGA2xRqEo5PdQAjXAAArgeb4fB2sfqZvVv9vqzcBLHM2V",
  "key36": "3BeAgqYerHTsVMnJKzZXJKzMakWTZ1KCRyrY8eJhsiBrQin9Cgt6N6tfvMSbZKgQV1ts4odepVKCSyQogwZwpcv4"
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

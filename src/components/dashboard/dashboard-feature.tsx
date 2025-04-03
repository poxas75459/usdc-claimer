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
    "ZePsFohg8xza8s31jm1SCd3QZuhhEDkTJobBy7FXpVRLkAnQ6bd6fnftRFybZG8KaPj13txb7Qx1XJf4KCv7msc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gvWWPK28kBxU5zqeSn5mqBLfJVyrP2yTi5SrS57PiQiVKGtWG3kACWvfZWzMP8LswHnHz1czG3gjZ8FPUkpbu6v",
  "key1": "4jcS4fbYLEJbCYNGnz7oHtLq5wgi167mzz3S9UPNHwtiKLeJuC3Wqt5S3JtQv5V8ZvNVeCyyUHuPDR2GoWqUGMrf",
  "key2": "2DNosNnhJpevgCDwrvxiBc9QyKHrCZhfuBUGxhsbgqpCiWtUfSc6TGioJcnVFbSorxDnbsvxpv2tRtbfQz9RhvSj",
  "key3": "2DGzg6EWfqN3DXEQCa6enNtu2G7ree7EuoT8VMx9SyiShp8QDFukuuxgzocvZ5k1hVbo8Pq2BonAQCgrjX1RKGjt",
  "key4": "25jSd94kF281hsfXxDNvY4x683v7sniXLWrEwGJQUrx74CtzTomGf4K2VPnEhYaHDUu6eXmZSct2QpLvQkMsugSe",
  "key5": "UFP1kDSMKKkWmuzvjakf982qnZb7NzPsMg7hXHLeTc9gH4gpDb4BAvj5ishQ3vGyfN83f7FRHrh7biUtZtad8xJ",
  "key6": "4RJ8f8Jw8mqx1Eya3kkpBqhg5H6rYVePZmeDD6MNuQdhbYrgnfshXQFRFzEaw2k9bEPcCaGog2As87iwrnhY2Rky",
  "key7": "2k9gXAViPiya36gQcMqVyEQ35eFneSPr4Pr6SNeaqXMBPtjfCQ35QEiQBcLRGBoGHA77m1Qtb2BGa93r9ygnF3dp",
  "key8": "A1WtAp2qcc98k4iK3pAerCxnxK1uyVKMpzb6zCaRC6URpsKbhMxsnAaJi2cqsKskKtEjkqsmuPzvH1GJZbiHecP",
  "key9": "Aziw46FiG9XGURGFpZCLmqQyTU2oEDCeAubcR8oHYx7Y6qFqc7cVBmN5rVJJzUEWb6ciUvW1bJdtaNQP45zSuow",
  "key10": "4LgNT1nhYVNoX3qPH7bcpJikvJTfaMe6vSigwTfB5aPwu6RxDU7bHhaEzcL4D8odVjiTJcskAX8dy4tNykBoicZe",
  "key11": "3pa6rDzrTDySRJH9SHeWHDFgpS4BBppRcRif4bCc9JgdGo52ck1JfVsVLb17e4wCC6FAxxfc7fGkodumxsMvxV1",
  "key12": "46cCntV3AxCYBjaScSoD5YDQiAf4ncnbZL82Ajk3Y63xRGfSGTbWinxTDiUq9GZz5ZDbxBu2a4BEen22n7hBukFz",
  "key13": "4T3fZzuZowfWvjrbqmE5p4Yno6PhkdKZVLpAcgDYsdqosBFowQmywz9jr4DuZG9KEJbBE87a1YB6HgMU2QmHpHum",
  "key14": "D9heaMuUbGwFMZtqRptDgKnazxQC9n2YTkDPRbqP44uN67tvX3gcCpCiBFYwHoTjAzwcX7J5HpYr3EBJuyynVzX",
  "key15": "9brvsZ7rTtqq1ZHwbqDUDSRHp7G3LtgPucz6H7w7Bwd2KoTF4zFBDCsyzX7osjKgkxxq1iHUiso7698U6K5NkoY",
  "key16": "JR6fQobQhT333BjZw44FkH4knF2RsEgmebg52CKLnDWeENBFEWU7SjNe3s5dnarzQ2KdMKGgdapZ7kyAFMygf5N",
  "key17": "uveDmZJdyZDbNHVQjHBRDiT7hQmcx7XKevUKMUcvEZpWGEU7DgX5ZWUKp4s1EwvVLPbWHdGziDh2TjiRyNYmaE4",
  "key18": "gtPfffXGNpS2iGPpBQB6Yak8SFW7veqWwVKKYGTXzTysjPWrJpqVnrkGxbpaphPuMe2GurftrtCtypEfM9U91yn",
  "key19": "5w4oTb84Ch1LmtzAvj3rUMKPHL4Fv7foCu85SGR4WYYUawcpfLhjB3UotdxGkrUBdYnvvVS8JYWuxpRryhHDP6J2",
  "key20": "66TyQttpdrgbEYsce5hV7cvcpmMiFJsRb6E6U5y52uxjsC9Dhjdb99ZB2WGHUs2RHUNx44SxVK2X41Mm3Roi9zfz",
  "key21": "27WBQY3pvjCfwX2fYS6tRDnajNchhro1YZFbbKFMhBtSCegN8bSbfWgv1hgaDRtbtNu4RPZPSG5JqJeUAcrhVTip",
  "key22": "JeCRJmpXykesxJhEetcNPHQshXZ4HDejNXkPCpYfbb7ghvdz7SSqTUoFuF4igsmr9f14jpEbmjc1vruWxAjRUnt",
  "key23": "4z46Jf8VoTTzwL3Gi617TsMyRH3CrWPQoNpco9x2W1bVr4E7N89tFxbyeAB7dpi5fHcGEmR8tdSnxNxDNiAQ3AAP",
  "key24": "S8SzNqmj7jPpPdDeXYtr174abbbSaPXbbsDVyKVJCNRp4czUtT69bYBSPa2q7pMMcMK6BSAps7LhcKXFwy3Bek2",
  "key25": "5KUdyXVDnvEVrzSq99NbukXcDvvR5K893UgXof2fXvvqHSsrNRe8Vs2mSehKo5yXKeyh8frvdkUWKcbS78eFq8rZ",
  "key26": "21PC2MQzpNrdLHkqQWZsrG8LdNUkjPkyvGQDG1JCrGw1PQCoH1nbxsnQj3K7Pe3PGZvae4GTyq9AJ5ySEMS7UYzz",
  "key27": "58Uau6cBZTbUxDrAYtfRXAxdeyEqNspw8VwgXA7cR75URFtC2az2xvwace3mqZCjSTGCDhkwgSYddxEjWovUvn8r",
  "key28": "5hpErBvm1xtx7JNsbSENKRKErbrBYyP1rs7avRgpJHUSeWSu69KWguEcPbvu39C1QwksdeN5YUVPWfwPmcFimohv",
  "key29": "5iZkbCugzAgBbCCfj5h24iEVaffUJm9Z2Hg2G7JY3fuenxSE7SppveLgi6K99KRNk4t3ALEK8hHQRFL4vVmhGbqT",
  "key30": "MJ6Ky7yhrQjXmabB9BMnpNdQecfYxCgrsewgWm8R31o5imH4rurG63VYYGP1J7hSET6ixQHS1cpRmHbMEQLuMHv",
  "key31": "3AGEcKojBp2TTVq8XcrqXTNZL7PzbcrnbefnR4moAW6mjrd2KCgkkCt91tM84HzBvukMJaJAcYDyxa6fKvqn8Fo2",
  "key32": "4QDkzLdibjhfhWJRbcC5KFWYPg4rXFUZEGcRmPgxC3cUYqpcmVpKmcu6Dwu7ZTeidpuh3WhRKDXjmVvRALd9Np4K"
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

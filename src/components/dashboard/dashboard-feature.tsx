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
    "25FTfXHvAAJA11TCKRJ9nxfuai9yvQamtfnUhrPHFQBizx5dXpb5UmTUWwFdSor9RsFFFUcC44jURuqM1b9U2EaM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24V1LQqUJaH44WEPJE5hk1hegGn7PJmCbyQBNtE5XGiUxbFEfG7FZzz43XbR9bgpR5iqALm5h8JJJMiinLUBB35g",
  "key1": "KzTQWg4UkQnfXN1HrD8NNFodaqSMaQa5wYesDZ3TBJBdHXPT9JfZnFbEgHzPpKQC3ZRTc2tz6u4WMdbB3nqRoRv",
  "key2": "5jGjTMPhWqDHanxkmncZcdhe5LNM4bVFquwUef27ouVHnAME2JS6HdUjnQMXTMJJnqQ5VqTovvgbsbDiUgzaV5yh",
  "key3": "4j83QzdmeNcBWbgDg8HEg1Zk2nY4xiLDD67pBZiNKiPySdqt2vydacWsUY8Q1JtybkXJwvMCofuG2Zi3F3C4XAEw",
  "key4": "5WWvhq4oAFB8y4PE1Jj6BE2E1PCim3izCyuAvwfM8EC1EojZ2bBG77htUAfhYvEoznxxJdxk2AX1ZYLFdvqE3umE",
  "key5": "5EftFwHMJ9yKF334iD5dzVm4bjQm4MFs58y9KSFMXd9189YxFqDc2H2LdC1EqmLg4VprdT6U2mqoY1ttnrygsVws",
  "key6": "4tJt1oJ5VpxJB8bcVpjv75smRY2nJJQJ7Mz7jQATu8KrN1nMf4jJUvxCvjZgJARJXZajFrf8bt2vVdWYmcPpBQTX",
  "key7": "2stBXdzBCT3r1FYGszhCtue5oBK4gRG5v3PnpSHHySWmGMTN6gAXsJAriuVFT2CqKMBtNeeoD5kHkHGimL4iNCnB",
  "key8": "4C7b3Sdy1uYjjrZRMH9mGDTxrvtsDFuDUesrRuaqUVEHppU8hSyAxiDKgZo4C3i3r11naR4g3AukbQK5ETeRvkw9",
  "key9": "4kJbw7PwNX4ykdndt5yMNk47tVfaNhxhtep91ZVav18HG3gSS2Po8uBx6ozX2F7MiKZVQ331DG8VRLPMG6Dq9jGw",
  "key10": "56kYqXahutukGCbnXE2s6KhJFdz71kJ2ojLiNvnrKypm7L2UM3vHk6qRitwxGCzno6oBx1cgr6ic9B4U1aNFPCdZ",
  "key11": "63cPuEXCVKofX1wT5Z53B9mW4NvxGe4Rh38oC8ftDgShF4CsxZDfMgdCCixbxk7P7kJaPcGRc4yQPzDJJGCgGoTH",
  "key12": "Kdn2aeM5on5PwLYmo3ajnJzFb73coSuzgPv3XCg9fS8erxTgaKnGJQoGYB4wSE48hiEV3tejzrgDgVKkPkUW5xx",
  "key13": "2dCaLcU9MiQFf1bJmySnooAquTY7nRfWC48jzCChLcBXwXmpXRSNPHYXPPj3vke4NDNcz67cidt9FGXYZgfXQ6DM",
  "key14": "4rr7wP1CQD4qSoBiuv1pTd29fSAoeRRbcuRKAkHJDuo2FmAycx2grzSK7AWuew2NCu13UPUiKqxYCCDnUQtf4mL5",
  "key15": "5T3hS2RyLE2dwPGK3wELH4UxcsA26iDnXRBAQGprinC7RXVUMCiMFySR7kjqUEBXNmrETYPBt4KQQshYUXLCYyZn",
  "key16": "2DJKYGVMYYsiPUfF8GxNPyM4rTFTLtky3sTdpniVg67RvVZTDzKnseVERMdEBZ9vjxuT9G9b5q9QnTGZw43NkyB6",
  "key17": "55CcT7f6qKtCxWkpbdnpKfvcf39TQVz4JiAbLkVn8XuPDMho2cSsNqkRLCGkPpFjWXCrQ6ge5H7pHNXnJVUxqr57",
  "key18": "5UkgV867MSXpE3Wg8noJjhR3JZhALJ7rgPJe9TE913cmY73jtcHGaBQeXLgwjVWMhBBGwn8DbSmQUcUkcL3ABQxv",
  "key19": "4Mbewv8uR6yeJ5zvSmA9isrgT9ddzmy8dGSDLysdzmcNfBPzuuxcZJGgHRQSboziJzHTnGKT8tVrqAA67b7kNHiM",
  "key20": "2bikMkTrT6gqBRPCsRr3hRNLRpLbMeKgJQdrTQha1hPvDK7BSUFxyxxCRwuad1v95ztBuVtSP7T3fPqiogmK6bYv",
  "key21": "423doRtnkfmrF21c18gZtcpGrCrMXkhmvyNLShBY4r1n7mKWexaVBBCCnmCEm4vvAoJS12ui4GXems9NaZuj8gTJ",
  "key22": "5ZB9qm6KcMAJpooKgoEJho5eNoo9RzWkhx226zRtUQjXHgQUkPkL5dAHepwJG4DLhRcEHi6xpTJr1gGabB5SB4wi",
  "key23": "67gL6WwhzkVzdrnst3WBJieWWp74E4irW6X9ZNZeJhek5ibAvDwS5XTQZZCdwHyDBjVdxC6tiE11eAUCN97zFErf",
  "key24": "3c8rUPf3Hmbrzb4txWNf1vPhMaET5BaqTfuudevZXAoyPRwuLx4K4Ponvy2PT2g2qGnZbGdK18k8vdY8ie3PfJxf",
  "key25": "8XfeRgGEJkR27QKKSE4vidRiZW3emLh3sV8ZWq4LQ36KhdsC5pfgtTrguAR16raR6bCqbXEhQXRwD2KzEtVgGkp",
  "key26": "2cd4Yd6C68kCdFEvUQpuCnJLSCTH4QdopffG4bxXy4eunPso6W1S8U4afkF9aK41iQHoKwW4kkUCFiAvQLW7tDd7",
  "key27": "5nFmNs6zz3mghBQq2TD5iKKVNnaP1Y1bFCXNRF7u5heVsJHq5MKmtETpZ23WiMJUxobrTrw8KcMuMMfUpbRGJuv7",
  "key28": "2yuZQu96SNamA3eBMCCfxoG3SSNimWSzRG8rgg9R1HPh7FHYxWpv8uL9TJnnVvkTMKfkJwAZjL1AeUd52J2yW1rt",
  "key29": "5X9WNySCJtnMHvqpZXUEY7yeLAomPk8edQfZ2r2BMcbugonfpLkZeTz1B4KSto7rL5EMzeoZXWmWdUFLzdsydLCK",
  "key30": "YLqwnoga1ye1QCc9KaPSKetSevxiRwXnsJdmvtG6Gnvb7wxb7sfn6H5Sw9rFwVgJTRA9m1V9MRja3uFU79sDkbW",
  "key31": "36BYgqEANYabBGxnxbdhejEfZYX6KDKVuYV6tnWyu6EXu7WqphrtYFVhwEnZeH8uGpGXxfDCGhq48HDzg5sbE8ks",
  "key32": "AuS3ZH7wNpfVeRwzexGDpJTDLTWMj2NdaoaZGRGu5gNS7DXjZrMSKbrqXrnV9gRAupN75GbhoZgaKmjwACxYjHK"
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

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
    "4mJcvQtQxGjx1XQEyqtcFxcfJLSg34vQL5ig4tTAxix4F69ssU56uZCKFjLeEwQz9fa5mwacX8KShjUJaMHASMXg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3K9uczKTtsvZeFVmBp3DprKZAp8ijwLtDJjXumjrtav5yS3smeqMpDoq85XMokXYRNj26xApH5Qa547o2aCewrnn",
  "key1": "5qHuFA7n4EyBEq3EyKeGVvSoMw49zhEhYRCqYvx9RpgZvmjKe7q7oNjBt1i3pqByZjWNQEU6KGNsvZHygRMZfdxL",
  "key2": "4f9Puna8uRegbZtVqFR5ZBaucLA5ZdTQPM1Q5cE1oHELXZ6fF2anWSFK9jYgroLjdnM5dUUYZBQkhUtTteARD66c",
  "key3": "4pstPVYqhi4FtnVLM1ev6hD9Nr2ExSWzBMfMLA1WrqpHmkXg7Annj3E2jCWq7ibq2vyLw9TCintta6jpb5gQLrH2",
  "key4": "bTwmbYDt5o97FS1eGUbbLrTudgZjKScgLy7wkjrkeijPpiwmxLMoMyyZKn6H3DX9NBAbHgQzJjPwf3gSscWjeZa",
  "key5": "gPdqPg3bMUyzZ9DEzUMxiCWpB3UPSoBMkxraq1iLrG38eD8jXsFnStMTTA3nakGaEyozzxDXwSUZEg7EPrdeMCe",
  "key6": "3U4ShSYZaGxLpgrhkj5nd8GXrb89RE4a1kCrXUWnGVMrKhgSF53HVgk4AGbZnpnhiYV7NhozSerWEYLehigNVsh6",
  "key7": "4V2fjzdYY3C4qCQc1PL2uHYjmYmZugPqeUeUHUnwG9nYPCKRt2c1VVMVNqxdZHhcGaKNSaS2TyaDseanttp8vjis",
  "key8": "3M4A4zvfhi7K2p276wH5Xx8qK8skR5VK1bKtNjoFRzGHjYZHudm4NfhFKArGkCdwdQsvMnJJTrwePt3ySms9NN8p",
  "key9": "2WZBrVpE2fWeSi5QjTziubgcoCth6CpeEvxAgJMy3LnasJm9hxmiA2Rn2oFhrhUEkWtg7tp5YRGbzrZauXNmG9SK",
  "key10": "59R2LCJuBPDh23SmxQR8DNDLRuYLxsYxjEzNanefVBxUyz64G717mEikUD2SrMUu82nLxTa8UcV4CGwDHqSFqhSn",
  "key11": "2HweQgHGb5aAZqN7sYe2pSKjwsRyxCXN47eL3FvekBHah8XzkuJpmv87w5Ciib3Z7CqGCwvoJSHn771PrDU4VHaP",
  "key12": "4NaqBgJcL85Rr5kAJJRPkdPDX7PY7Ap4urf7aLUjztgjiX3A9S3zkTJQckRt4p1ttgXdqGdwMbdX9EGsA1aobJti",
  "key13": "3cLDxc82DNHZYRuqznoHPqiiTqQsUvXpJ91cFZ7xs1zHe6HJxv5sC6HFg9VDxAtGs8oq4hu8nBFhCLnr2tzLYFc5",
  "key14": "4AVwyDoX3XkWyWGGjHTnxoptj1x5LCYFTMsYjGsSANy1DVywzt2Pa3DX5bVQk8ZQ7ZBwZdmEGbmWD9swWZMJwb5q",
  "key15": "GN4cmdc8EJJED7wEkfsMQpymVqjFCCvANLFsJzvdR8Wiz5v1Z5gkcUWzCGpzzqBxb7T6aUU45gHCEqRxXX6bVmr",
  "key16": "4Nhb4z9XdMxJS5kVFmTfbdtQCcrxQwQv8hg7YniuXi4W9W5W8MrTKoUX655XTWivePtuCcTMZfU5DaoVWfMtLhWJ",
  "key17": "3d9AvLTdhpTrmynyvyRBbeWrmZ7qdnXf395HgqipxWCJMaUqcf4NPWjdEogMdDVRbrzCsHu2b9gDuHVtrSYWzfHS",
  "key18": "D21u91hCL5v2hcUmDaDip9G2ebndzB1WfKs21APbzGFyom4mJfnykHa1LKFQGGk3LRrxsXEpY4xWex4AGMXdtN6",
  "key19": "UWeyZff9JT659caKjxsbUzSXqxLtEpwaJkqG6FUAEy8h94EWgLeWhSRSutDk2L6ETth81WW8Efvn4A3D1WiiMLs",
  "key20": "2EGMmzudqibPdumsv9ai8jfxF5ifE9iNqa92z7J5Fw82MyqRbqYiTAQV2bFZEGu4vfoo5LSxFpBFGn9Pa2cjumo7",
  "key21": "fib34q2aEd8SCrrPaQuuwPkMYWvBpopv4XnGJTk9ZFKuWh9kshc1wCzExCAW9FFLSXpsdJySPcAEber2pqGj6Du",
  "key22": "5BmAm6Rus3eArxvSnitUiVYDDcz5iT1xRuTRM6R6Gpu9FCFLiFGpCQVjgvTWyPNpHWfhW5mPVx4ZFUPfaxmpC9K7",
  "key23": "2J9aeXyuBXfiK7fcowaBh8EkQshcQa5c89CMFGS4isVEsZ1r9H1b7QTMkBYxukXDiXbZAQBrMtzzzn1omjDwDyM5",
  "key24": "tDvx7MHPrbyCqko1KWNwqrWoRLGCD6nowWKZCjG7H7kBRjAFRQPYNKBaHTeCz7HjKDc5pvbBVGjVwagqUxJEQ9q",
  "key25": "67YhXqedzQGkb7xSXBiqCWkX1w3jUWuof27kHxgZm6Y58DHrgvDzAnsH1YRTszqswAPYJxsm1SubE44Y5f2SK9xs",
  "key26": "4WRb2yBis6hi5NXsS31yDXpxD2jZzwuMg77fCBkS9MxXFYVavN1t38vnFK4haHtXhxxwKzQBhMAsbKsoev9CFDWB",
  "key27": "3VcLyShyLfz4gaJib8ojCWL8VjA5f5SpXSb4NxYcUs64Q39UF32yfjJE1SE3EMg6WWvxxLaMJ17iqsZUGTv6Na5P",
  "key28": "2cDXiDq5vbAdhbRFha1VnCrv86jceNopxq9125CdLmPXxfqCLqYEsvEjuozLWgeZu3pJEcdVRRijZp2miadSWhxg",
  "key29": "3aZDH1ohcEfs9RJKTLt92jDWdJTUjHVjSecEYvN1WwsFeHdqYA8QP731e6HdjFwAUxQBRMhR1zWbMEnxzxQa1tLW",
  "key30": "5GgpqN8rTtu4NLrwRWFqfN5kywCWC9n4e8dJCHCPK4m2ip1VfpBnHFxrptgBWZXJcwMyzy2CVNM1gdDVfFwzApRY",
  "key31": "2ksW2N517F7bUWLso8xoq7RPyDrcvkGCukyPX7e5dbrZFtUFTV9htnH8grLogeSBcR8DMS4rmJvy1QT73utGALL4",
  "key32": "64jrYyFyn6js9ciQMbYJKvv8tYbYHBKzhgh275rYcuaZxdMZP1f3cuV4Rd1A3TtSD6RmepDz77FHcrXWKVwFkgYr",
  "key33": "4V4PM24gUj5Wj15WuLsePMXCme37DbCiPVmq8dWtFXur7GDkMkv7vj8VK3LSzzpxp2UMdyNkKFQNjJhJyGE7mKUC",
  "key34": "2oqedhmLNH7wLC7M37nbR8TEomSgkg6czXWhDGYkQs2AhqzuXJm4ASQUJGV25dP2vkNXdjUJVi8D43tvJ9LkVeFC",
  "key35": "3Af5X6qDfds5eTmpnWMrvNZAc1JnWMpP9dPJ9vyXUgqLud9DDSq1WmwAXCnEqhky1FZWh6DH7LKQvTzrsuC8cjje"
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

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
    "2u3kCsVzJ66VRCNjHUbX8bBLKBkHK18o262XKmi7s2YEnAH5USPmh8aabaGgERTTWL45R9yjkXv5zpAepsgd1AkG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uTXuaDQQDMnAQXGkYmDfwtBkSnq446icaeYkUpfbe7dRnHJ7vB4Yn9bLqV755uXvgnMwJbRjhXoMu6eziRX6BLM",
  "key1": "4ZcXohLfoDoCWcPBDFqmtQcnLKKpGC3P6zjtgct4fBp9qkhv99M5y5wN88vWkTF5TTZTfajYccsx4EwwsysuJrgi",
  "key2": "4DgQgPfCLULchHZtYefhTCNkUigJLxe2nbJ7RBtV8LVUiU3RzBGwQGr12hy1ZANetPp7KaeDtXeFmy7gyaM2Ae2G",
  "key3": "2YREEAiSHq7pkqan4VWWEyURFW3W2CqksPgAscqN4V3pPdNvbqLFLdWeVHmubx757QzGySSVYk68AYft1kYvfDiL",
  "key4": "3F2ZvSCKhGcMcmvRwNsWJJuNSY8eFBByK6A3vvXqmqjkjccJi5rYFKyUa6szoK1An54C3gs5XEAZosZ3VL5MfFhX",
  "key5": "of6mnwuGpgJGuazzvwSTJ2z8yU9naTBym6Sg5Jhy9vAuNZzmejoaX1S819FshKCLU4eV5a9LshKpYpTSYNyS8aU",
  "key6": "5JLwyLXAi6uDSQBn9eu5GkP6sJ2H6LpFiSQj6TGQ2gP1PALoNhgR2FyBPERgwaZnmSLZjyFYfvP4VbcRP9ezWd88",
  "key7": "4wZMRCLKJRoBcmW83G9Xa1QDG5zstMbCjGwABG5WiQ4dDbTciYgFCLokuLnc8wVfKrqs7ktmzYwtWHFT5yXK8RXj",
  "key8": "3H1JZF7AjziAj7krEUR9GwkSMb7JtdXbj32eb5RAoBW7NeS98b6MnHq9S9xXA5xSR7LWn8A9b3C9JZvU8Y8gpafY",
  "key9": "4bA3RdisPhqRX2UFuJjqfvonfpeSa3uP584amGSPh27YLjFArso4PNxbTYvXbZ8joLob55UwZ8CM39cYGGnUzHf",
  "key10": "2a7junrW2eFuM7kR4AqccLzuB4o23TywYwZmbMmdNLMkpb24yZuerofPTUNkia29YXuvibM7HRNxyBVjDkreZqK2",
  "key11": "xXCC4F54kxeKGxhwTxLN45VieihSGYVJtYTyoLep5MagXp4t3DdvhzURi4SrRz3xyTmxZQLu1pvVZDYn153y8NV",
  "key12": "KjhheTV8Lxf1JQjyf9nFxRN95RGAxPqdU3ZUUuNWnC5WUrN4wiKUEAQDXwi3N8Q8QgzuR7r9PFE5VZTMW5LXHo5",
  "key13": "267GND4oLqiyajeNpC3jQirRxUbHKtohC7yitTz5Np7h7E3GwaJcXsS5PdUdbzXjiAHXfpd1CfEkQnxhNVc33Z2V",
  "key14": "2C2wT57X2BBhPg4ozqkSafKtbRYrdN4w68bqt5LTHYFAUB8aHs4uZ8eVgheMGde1NSboRJ4ZqF233W4pehB6DcrK",
  "key15": "61JVvUbiUsEUM5eg46dzQ6AhShZy8BYx6JesyVrJ5UYPWLgpgVq17FjNA6sUHDBDu9FSYkhLQSr7w2R9RTG8Hhyj",
  "key16": "4aMfgrkuQQoAfH7e8MSKzQYowtHezwpbrPL1TyBuU2nz5rVe1txQ7cfcuD6fvs9qbZchktBNHLseBAkPAfoKSmUZ",
  "key17": "74Ay7jeUrywW1uKmJAYjvFodzvMXRPS4jUiReMFcEpFBWY4eCsoKN4G9Lve9eM3BXQwZvkcqK9W3amkEPjX3Cca",
  "key18": "4gt4sfyqrSy2n3NHLu7EjKLjeZw4QKWJmb8ZCgrgbrSkJzrqwhSof4XFBimQGyFPxxV7pqkFBC8dsviFdm4FMxXT",
  "key19": "rw8JCMKSCJxNVWb66ktAeqzQ9XS6M622AiDLA9ctXet8Xrhimq5MgLieD62CuZqhCczGy4e1y1drpmEJNztFVbZ",
  "key20": "5XBob5EzZjiU811taWcGtdNLNzrsBFgifsMKPNXPQsCFKFjHB2yL1wdGSN9sNQV3zqfXAYucCAQu2fvqSYRJRouV",
  "key21": "4ezHnbta7ibk1y3CdDXPe6mep7fHR3gRdV3sT39yTXrybJ9g5gUDrap83et29CKu7CyT2ujjizfYf2gkUEw1Be3B",
  "key22": "4MksV94hQY54M8RkKFpP5tJUpbX14KVxhUB6gAoLZY2K9rZhxvTW7vLJPohELLjvRVNSTyjQLG4aMNdfv46XW1Ri",
  "key23": "5uhFynUKyjNNUJPCAYyfgrojP1VUgChbxac4zHg6s7JR6o6vNgh3HZSJfBGuHP9wqDUqDVi9KN5gDoHF4LqFzLEP",
  "key24": "2Z73Ku4n3JN6NYHiCcLafDk6rQXjjXL2gr2CxTLe3XfLUmfBR2xFRKaNNnpXm73WeSwXPH7qzJEywFpd81K9KoQg",
  "key25": "62SjErK8CfN1dzbmyDwPg6Y3Afai6UGh1yRo1YGvCUUBGrPcj4CnDpa5vhBmTTyBVCiP3Zvaf9Ryc9fXrVtcKDjY",
  "key26": "5fVaCj5q3oneSebuFaGrGH4ShE9FrLHt7n7QQoopkVEMspWggHp5mxNRTncHEGgWrUoYJq3zCwg9QxM2RbPQ27cD",
  "key27": "8t6mrSLX2haQbEup3oRbTkXKzCVFyLR1kVqNWumhwEtX4FxuypeVopj8jEhrPzePoteJRtoAX36x4MgBjmTGRCE",
  "key28": "3DH459ci7WELHCrcFqAWL1zjcCeLLABiA6UiR2LZquMwqoAWMFS55caregaEEfmP6G95Y4GYXdAjRDet8N3p4Rzk",
  "key29": "4tk9tRwoQhYi8vNe6U9ER7KEY9iw6ZPFoeUyc4P1oEpYXW9A55FXWSDXY9hNrpRuNGcP2cfPN2wcX1Y4ckFmE2pZ",
  "key30": "4H1q3XT5WdpxMXgHBLeCf9GbgGoZKepU6aghhWLeo5wmdXnkvABNxTBZ4pRQyrzbzSmSDoMhop3wmJZ5ryBef9ym",
  "key31": "ByARx6ZvjKHG3CFAdT6SmeYGxxWBaN9Pv5fEvA4cJC2LMKuUttmKHihNKFun8mwisZ1eK9NJW9AQtxoPnVQh8Ns",
  "key32": "4GVpvHKwYwHrwmkVonHJk3GhXZBbkg9qVnPn5UVh8iwNQj9DRd4iPoWxsZSXyffEfRdGeV5wwwN2tYDbHasyASB6",
  "key33": "3VyiwM3ma1CtXFL6pWbYVA5TbugzV9c7RyEjF3auA9pHHxquypdUWFVJsDY2mujmrc379BV6MQwYmNe6for7zFEP",
  "key34": "22qtGmL6FaGmQ6PVT7TzwdJisx28QNUP4JftZFGYFxmzE1yc3ZayZnvtphG5wvYgDGAGPmhtkaE5L8xpJuvJ91xq",
  "key35": "8CPgaueJ6Gr6N46CbzMQyqGgeBFsZ3e9Y82Gwo33Puqeqg3jkoFY8ixczqhDL3U6jA3PTc8xVcFJbybqj9HDVsV",
  "key36": "2FUabeTqg2MadcZFzMSNN3XsBmLXUC17WrTbHcFAiSRtquqV1hRrYSenokfNrQaTNFVUn66wwqPmR4Pad8sxAdVn",
  "key37": "3cn1Chdje8KatVP62ZccYv9Vi5xJW6SoDgNzzX4ssYaze4tXP5MtXfoBUWntz8AMU7WmFNYrQpiFZsj6fJ3c5KBh",
  "key38": "NnbiFxtcndgM4erYPTw5xhkVFZsvzJe2J8a8tV1HFHoWoerijEq1EjRV8HQDdncmgd4ZPhEW63Fm5q6NgqMTWYi",
  "key39": "MyWPPfpKLAhWvhfW1kwpVUictKxYhPaNPDRqQxmbFFRPLxEA3k5brghmB5A7WHeyc5STodQvLLHqGUiczYjaLM1",
  "key40": "5nsYxrnvxPqQQDfcRuLiKnMYRdcDFLKb6s4ukWSjayd3wN3qzcD5DANc1G8TqLfD4hcDuc6EdZ6PRXhxWcEHwGX2",
  "key41": "5RnyRbFPvnEF4LRDQnSPT1RhJnZZgNcoGDkzrwMYuMywMoonoSLxHj85H6muGHXCbcmfFpJ9d3XJy9GgZniLWfm4",
  "key42": "3bbZHHbNZBWnL3J4FNkffd8ecBX4VPRLbGNhRzscXirXx4GK8gPPsvx2SjieuVZ7PywCjggcYj1QWS8fjeTryZX6",
  "key43": "38Afse6QsrLRoLsZgwuP6sWWefpSEaFWvTVtmAYqFRtwQ7r9cnFY1GQpmvLcavZG4sG4QwfkjW9CXREDAFbusp5b",
  "key44": "p3Vk3yTkEypvUCyf5PmVZHPsiU2NDHUPNQzmmKMbcBybhcwazGUhJMzyebDq8E3iMU5mP4MPmE6U9BjoZFzoJCm",
  "key45": "2h2aeJjr1uCAxhTnqdNZo7WENTxW7589YJkkwyakWqDQn6gXLoWTGqjQwp9Wmbh1rGZfRXnsc5Sij5rdFgzBZX7G"
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

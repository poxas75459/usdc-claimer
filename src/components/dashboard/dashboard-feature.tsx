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
    "2JvtGkgDppSmPzjQF6oB1MTvx9hHPHEqAc564Rk8jdTeoLjQy8gpcxw64gTfoqfQbbPJ2oxoxmh5EcV3qeyaMmMH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F4oytxABGyLdTg1uq8pj6cawbdY2zVSFsmNhbekdseJBuSaLhFtb342WLhGePPKCoqAcsJKcgyacxD7pc56kVC4",
  "key1": "3uEvi5aJDRbUhLgyKhzf51ETkcNkQo9PBSaPY4SAeDRjULB1o2TZGbV5uvQFDCAEGwiozFcu1UdCXfw432f3kzHY",
  "key2": "4XSqAm3xmxuya2Zi6moxj1WsvRHNYATqTWbRFEdcu9Hr9FLBDxG4VnvczRdJJPGEzmWidoA8TiQmt272kitRpqn6",
  "key3": "5EXi3R5uDqTaqzAypSisskm9pCsg22odjmysktPDh8K8Wis1T7RAYoQ1FSQ83AWV6mD9NV7tReaDJTD5jayDuoBK",
  "key4": "4PtRa2A61uBD2AdHS3XZRXjMRNCeuFMSKYCnBhPgDXXGPwBQx5UaBhBrwXw8tBct2KNwMuQFU91SATVLP7MY3m6g",
  "key5": "FTcjiBYUbFVhGx8XQazAfsj2rH6N3EWkUySjjVRPZdewUMHLaVTFcSteYQvfuiu8MPp1VMwviybppQbY4gAF5s4",
  "key6": "SnsSmQeUmhmvcE8W8QcngxKf5pDefaKQ5WUXx5RDYCCsfj4PhemXJZGoESKaCviV7sgUnGqUVrX93BfKd8zRLoU",
  "key7": "5EPwprJqmWvAoa9UccvA8K3y6TZfbSSXzEUn3CAA66C5YXjXih3ktJYjkmYW5rnMn8DhTUJxsqrDUKLgkjZ5SDwL",
  "key8": "5xL7jDmbkaQjuXg6pW1JtDL8Zte5bWzn7JX4EQ8hTB4rA5aMDFsEDAVh8zt2nuPVkCL8kQXT1Ppvbvy5FXBgjwQ1",
  "key9": "29Ap8FYkJui2iGWco5TWw7av7jUvbdyCkDeAfmBq4JBv99aXMxVDtFqZs74RnzPApyERrEveEFt8rwLJ2Q3sWWpQ",
  "key10": "3CHevvy3kM8HxSC7mG416otF4rjJ3cWZitPxBr2WQCGd4EfDjLaHkkxfkUob2MnKvLxTPm8ZW69fvRkKQpYxZm6n",
  "key11": "5FGi7835fwpzcpU5dRF5sMW1W8h9dZCLGsnPiKsHiRuhTazfQdh5cFhQHEWz9ZTK1gU2PpLb5YvBcfLismzZWZHN",
  "key12": "2f7TFwEiVbNEhX8CcfwQdjMjtTxHQRwju1zgZuRzrtPMMwWvGwjb8uqNn3PJ2XVMkM8s2xqQkkzira744mBKsML1",
  "key13": "4taxwgR6FHQwynfX1mzMDjASZDJJrgHaNRmyXQoficcjhpCbVFELHNcR85mJoMtHE1hH6ZNgFSXyLous1gFRp8w",
  "key14": "5boYUHkon3mpQkMgeiKiYvpcBZuctEU5U71qBi6L2ZnXkh3k71jeWPxbMFhygxfaYeskekD3NYQ6xAUM9F9snL9X",
  "key15": "4gJojX3cnPJj8jbm8A7E4jSHXX6Tas5SFhR9mUT9XYY8toReEuD86Cyn21KYH55tzu2YFWwuLQ5jr7FDsdh94UJ2",
  "key16": "4N9SEWtZ8tUiLqyLuKQhGBZdj2KaG8AJNqG8tGEwWGC5Vp4ZYzAeQaiQa2kQZwkZh6ReXTAUgVmyhqLcUDJ3grPT",
  "key17": "25r5dY9uv7SrUHS8h3hWidBm7g2Xwck5QqJvCa7GKeDBniZmupmfwCs1c21pese2LxqN8SPZJuE7MPhM5vGK1pWx",
  "key18": "5TF5kwpYnYsNTzB4qvorhEf13w87nL5j54BsEXoeX2Ur6PwKUc2W9dL2tiZSRqQHxiSGuM2iaEnsjciVzi2LX8zj",
  "key19": "4f8tE7nC3GC7ZkxtqS4uDsaUmbKQ7KjEKocCN1zkCgorE64c4GrtwuPGEUrNWJjb6uXU4h4AuoKf213oSMyZQsnd",
  "key20": "qwVGLZhtfvT64aF9dDbdyLR8DNrR8E9vPAk77cLKRdrxaE3Y2jz5BoBqeVXzggJE5r7RQ57b6CwJou8hHSYWtX9",
  "key21": "4wEnXbpE5Zh9tGLsvxKcFNjeehj3Kr32QySsCDUe1gcZnLRmy1BNL8M5KPWE6982buJ1LiTavntnpJKjacEj46BD",
  "key22": "2hkVzTv8iXmACqrZqJQpunbcWk9D1q69HtDNLbLptJcY5puzzssjkqzSPQPh8cFRuqjoNXhwxtEr25ba5oNWfjUG",
  "key23": "4FKMyVq71ew8VXRHWhv6tE6hw2Vq4M56dDtYzxscFA9wV6HDzj3qgLdYbjFuMQvzoHubakCqFfRUQ6SCgkkBNwF7",
  "key24": "4DouhJWKFu1jJEb2SafZfoZ5LzwVhtSLPnaqDuDn1YDDyi44Jw5Q3kiuVfWabZLmSPtzz14JJLcpgu9RVUGuBqoK",
  "key25": "5JxVpThaUcoZe3GRa2NZktKfW9jCdoJw5mb9VSANsk9kpzRJtQ83rBpBApka5VWTTg5MMbJQYPvCEkJFHGFBJvNF",
  "key26": "4isDv4gBAn9tkysnhQ8hgWZpYW8ipaDd1fwhsVd5dkA1ZefCNzkBfMLkraeZa7W9KxuGDaMBfiuoFysKxwpn9RAP",
  "key27": "2iaAUPGwJuZDihS3mSmcuy1y3W5NEezwKqgsoutUMX7bL1sz9ETrphrzNaKQHVCrmVnaP6zk2enPBcPXt3kPTnNi",
  "key28": "4n4qgbWPMitHhnpAx2oW3jkuLpmhGBZCvTjvgic5F8x1WiZ1tfbKtki4dRbxsefLDX6FDYeo5MgAyw1f2H5DaWJV",
  "key29": "2C2px6NndMPTH3hH3VmQP9aCQT7NyKWdQiSE1JmuA9fDv7rqWQk81XTpDAVBM9LbZLtsahtmKrGdErSoDbsT6QtZ",
  "key30": "NJmHCEGnbK5v8oZGD9XH1Sek6Gub6ApsRce8AZLJFbFczauK3V2Ge2yQh99yvpkgB7rPEAxdd6xMgZc85FTo3Mf",
  "key31": "5AR3iHoaypa9KtGC7HdDQCLcKUjeKQBuSjwfAcj8FwTn5MNb7txJcbvpiQHDE37aspFFw6T9Gf52StpYdPunPJcY",
  "key32": "4TYf56odB23yoTYt4e48BVnYFctDUtsUPFADypef4U6fbL7JJaxrqLtc1haizR9kZNMPV58y5sc7pESToAQ37XM1",
  "key33": "3VVDrbL1Xuw9e3MXtGcFspURPeCrunxgjagxd4uhLFKV8Ua3Pzp2sijgeDxj2yuiystx71ptbKrqsGhFWfP7bELA",
  "key34": "4cBpqA29h2ZzSzF6QeS79zcUEWJg326jdinNxwZtkEnpxueeU7gFXiwTc58fgdVgAA7D7eDThpzwMztGwwTN43bu",
  "key35": "2ScAp55cTacd8ajcdEdgDWXm5coMxwUReTYQmrikQPF8HPYAtkzJ9Q8WXDy8jSQg4wYS9hw5AT2AJFedWKLnwiHq",
  "key36": "3XbqhFr1P9rRQXFwWXvLSyrTXJtg61NcwtYLHASBTgSsMTLG7LzXAcoXwVjBFH9EKo4KBuraya14uc2dHKEAbyf4"
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

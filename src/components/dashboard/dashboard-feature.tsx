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
    "516Z411UXAduk4G5YEoSgaA3Am3eNFXK9nevpR3C4nf53zMDUpBcoq9Ps1gLK8re9sHbBdcPGQrEHXbdk6TrJxR6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jNfgWpBLqJftECeVQdDvGJSPruswEai9rb8eVCqcsp9HXmFCrE5qvgh2ekY5T6pXKaj3ojj3KjhgVmbDWeAFzwj",
  "key1": "49yG8LGrWouzDaJRx1J2hNwyJc1nTZYHxyzuiJmvWhSwsgsv5SofzdJ1hiCyUp8WwicQdhrkkf4LV9wFbPLuC86A",
  "key2": "3wSNpgWBzT8HEvtJ7HSgZ4yaaFSuvXsuvNVP4Q4GX6e53cU7s5c4Um45gMfV96vxz5sVzQ9kBXBj53WCwk954ati",
  "key3": "3x7pAgJC2MGrrrUXe5mXXaqVz1FvD9LVyhGAWUXaaTsJsvpL1jMYWzRe5q91XKWf7sTc45pRNSTvStPBrnj1zPkw",
  "key4": "wKW5zCZNiaZCX8WM2xEA1B5AaeqRSUioCkdHbwoRKp88hpyu512HgvGAaTwWZtXq3KjhuHcjDVRvLKpVUcJD2Tv",
  "key5": "5g395mYqo3owwJEUizBa35g9AwKZifRTfTrr7kaFzhfXqrUQPUmqjLk3V1rHaRpsXYuL1YWeyc9VHjiV5gxh2siY",
  "key6": "2dwz555z84jcaWDezRNKsLJHNoQCLJcxjaQpYEA1nvvZo6ewG8RKdZbxiJ2QUaPDEDboyYem3go45Exa9UgDhRK9",
  "key7": "2z5vWGibiHFMhWVMqxvcYPZ2eXKTtQR8svxA6xhH7ocUxops2F4MU2aP8iShJYGRc1zmyvvRmsrs8Pta5YW9nFUv",
  "key8": "67GiZYHUggient4EfiXiia3NKoHurX2omb6Yn44QMhCfQTporKkaphb7edMWrAf3VcVGYPruBnJo6LsMWfy3VSA3",
  "key9": "3ToYYgXn62ApfUdy5wigGcP5WkqEBPRttxMdvSxwK8QSp1L8zE4rHXB8TjBWNRP9mZzpY9UzuGH9o9qP41kdpwJT",
  "key10": "4qYpWRHAHPX1txrGyosNgU9R7pz7zUHti5wDTGzuRm8e1tY1bCf9c2P4oZxT7UQN6kWpfbaAsvuBjBwoUP68yeT4",
  "key11": "5QezDMhJq9VjFLzFcv2t1SjGKNxS6NHL3oJzgWryYeK6Q6wb4xA6unu3wQobcs7Fv6D2MDD94uQoQ5ra6Znw9vJ5",
  "key12": "Fy6WfDXiXAUfjAXcUHYzjUzVduMwK9HwjLav59dLQDsGLt4TDzSoVTf1tBF6ZVRkg6uvBb2S6xD1JGVHvTfxCGe",
  "key13": "2HEZK1xi7PmUYKixkR9t5WTc8D49umvovAh7r3HBQiX5FAGtAAAA9LRTCsVjWnmjmg2BtXchqrCtnNK2isLoNTPe",
  "key14": "2XqJczzbmkZQ2K4fxWp3CD8KvREjrRFU1UAyR6aevLq8Qzik816yeJ1mk18VaAsQnoHMouhhVFVFKh156s7yCUjQ",
  "key15": "2gNqvhwdJ7Frm7Zq4f2B7Ugi3EMqEE1qzdV7JR2zAg2grTkADWd3sLWdD6DHJKf7ZanT6WYZdkKG2H49rL3ZLe4q",
  "key16": "2vH5B4gFQ6EesCp2yaPPJbFCJyv46otrBvJoJtjaYj1u6eTUF9VgnGgQ3n4oU2QARZAPZCHgwgXQsWUKKHRsQp3h",
  "key17": "2q4skZcW5oRJez19byUWXNokngJ4KjKRHgxWHUCusmwvWoXg7Xyb7T8NURThcfZuJpiHhf5C443VqDR7iSYHDjM6",
  "key18": "EAV2uN4RBLh7E2WESmwACKxLBYqYVF17sPZVf71WSUDdfmoCUdYYmeRAGsgzGYGEu2iWe6iSpxb34HmwePtVYsj",
  "key19": "4QkUMkEob5A4dBaowjwAn5zttYJKttU92MQaFnRxVNbBaTfVXq2mCkWSENverQBdyMwZh7RXxk3coC1iWhf4sEf",
  "key20": "5vvCcSqioVt7pyn6pSqdjxLwq8vA6mSUgjsmUTHuRinZqhL9XMbJMRj5dBb8WcND14gyBfcjqgRazvPMGz34XGta",
  "key21": "sVanQUCPqVgnLsTsVR5p3XvsUY36HLpySa732U1njEvUir3jX97hfgnhm1wgpSiySdQZ7U3c47XKdMp7WnJ2QNU",
  "key22": "4o3cjHjzbXnH26nCk1Q5WEXLfzmCWoh9YLF9agPX1ciENptivDEDdTCeoX8knfkHLQaNehogaPzJmQDTe1AZYL74",
  "key23": "5Hi2MUth7CUFDPhsD9YXT38xTJsf8o9fNxVPgRgBww4Y4maiSbxKNMMs8iWVMj3iTzX277pT7h25A3JCAEDPcX9U",
  "key24": "2KkCuqpUvEHxfWJKknJkxDrPeB2Bgs73ZwgsWeofk3ArQz4Qg8rcriVzf6bexG55Ck333o3hY14J2MDcxHMctyAA",
  "key25": "5yRY1YKdDVRgfzo8ryhriz921iQ9ZrcFNCNZGJyk5bPuwaMVmxFWKTUrj2mPMBNLPzQrrytUjkyH4TXqaNsG5eVo",
  "key26": "2AegKU95gYGK6oW8ypCxEp9SyDBd76AcZL1Yxsru9qdiNWUgFEGzR57jbabAZWYZkpMeDkJPMTJGEk4QndiNQN8E",
  "key27": "7zADsZAhkmMvsHpCHgyq1f6UkYaXMPNy346VZivDpqe2eUjcspGxiQ67o3cnoVkuLWnBGLRhe6BVWihx3Z2hN4e",
  "key28": "4n3gsf84Y35weVnYbuJEh3EhjYjs45A1aZw1RhhNo84Hw2g99BfmKm3wRBuaUsxFhqXcwwHV1jmrtgRU7kS8nSmr",
  "key29": "3PEGDXsQkyDEAUHVaCCnZNqXf54BcBqFLtMnF8Z5FWXgSe9kAhDpYd9KnPFfEdhNo3PN8JhqkYPte9ete7u3CNhP",
  "key30": "4yoazUY2F1C9kDZYodZgvJUaAfDTspf3Mgjc5P8N3yufgWhhmVeyVbf2exe2sGDv4KDoPMx7A9jaLyiH2e61yJM3",
  "key31": "4533Jqq8V87D3KnP8Ydr6wyGwWyfVbPuJn2bYZ32BT6jLU4ms3Hj43m6P2okzgTXMiVeEFa5PHjF1weVgLDje5rE"
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

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
    "2jcGvgaHRuLP83dCCFk2245moijQcsaynGfe4iQ9KJLru9SBjHUJ179cKs3r8pa796qScyPKPnCKNm1W11pPBBZQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62PHer7cGho2t9Mg9FbYXmEFb6XMmiBF2TJQ4UHdjbG3VVmjkDUiStVnEaZV5KYD1QnSHK1BnBNixWpfMYsyNP2Z",
  "key1": "Lb6DfxU7zTA5i8Zg78ttQbBwf378UMKgZu8p7yLz5qP2mXqgon9vgvs4nbvFXSos4YqHkaDaBr3LB5c5JYUpcRe",
  "key2": "5i7gr2d6Qz9E9ZVYpamwcCdrr8bZCpnNP3aPpzXR8UJNoRyvLQrhQy7Rdptmxs6ZsLRpnSsTPFx9mCMHHWL7tJFq",
  "key3": "5vkWPQwAptCRbcLoyTefuj5ffD5EmzaTVAGiw7VFWJ9mwsWtFQ6RMCoJB1x6WdBgq1uEW9JDquFcExaSq9EV47ip",
  "key4": "U4r7TrdXmbpBrg53nYKpYKHjef6nZ3mj6m5mjhhvRLtX8D62ujXe4j7xJQKih3scff6HczfcRZ4CBpURALZK5t8",
  "key5": "4kgErfPB2hVJrKksBgfCdSuW8yHvCFRQvR9NKyRFqBphiJtb4aPxJhds9JHE8MeWPzcuF6kmcpBXS3v8KCcRHkyK",
  "key6": "2me4Re2gSLXrR4Sypy7uo16ZvcxECqpHjmQnoM39jDLSoYHAjBGQG98Vqnah8VoesueL1k3ivr8k3jZsWTN79Dc5",
  "key7": "5FGPFYLhE7nL7R8apNKhVM3PiqnCd5uhnrqaeEEXqQaJ9KEcthLbZrVJipF5LCajv35bnKkGrZLCcW8KEYgmRDXy",
  "key8": "3mo5GRim3sEZDmieoj14kxuECTmTXsWh6NAvHaTNC6JrjzVwCHN1FfZEQGpkCerbSQPhFSiWdLHtumPpkUDdUACv",
  "key9": "G4sRfmRaSCQNageaAnY36p2RAzCUHHMJGaWw9EEm1ZF1UvN4f6WKTsPNzGQxFLzCya7LVt7mwCnTGVZzKBerTLp",
  "key10": "5YStewJ2a6xdEt5bEgJLpMvMHf8Tx1teDWVotJWTMejbJzkJ6BaAcd9BBedy8dRyvBxfcximYE7sa1Gar7dfk8vg",
  "key11": "5mG3DwUv5NR6sg2dVR1YreXRFnyLVLsWwXjhPEGJb2QKh5E1v8QqJF9vptqYTf3ybiQEEbbmefSURdNpofMSRhFq",
  "key12": "h87QWKScn8xNRGupECg5ddRDuZ5sVpb5HegQAviRcsMw6dSHdKZyaeoWnwcXfjE65RGDv2GW3TEU5PPZt3P2jpW",
  "key13": "hr1Hw2xJB9AiCb3uZw7eN5EkjcrUfzq3MCYzvfC5dKzMAamMAhBEx1yeccBjLp3EQjRxr7bjV29486tLJGsNuF3",
  "key14": "5fnCCBiHf4fBjFLJZswDNXziDBPxAYd12gG18RhFzcTgczkN7iL2kRmxwjRBYkT4U9Re5QJLDkXZPw8DZS7AhNod",
  "key15": "2aqrnn2YqZHBMBdKR98XoXX49e47ys1i65W97Be5VAaLzi1BJoarTc9jpgQK6TXwvHa7mQRkXrAu5DUL1bZNxmDU",
  "key16": "tdg8pwfjUtmX1QwJMhyM9CmwzhMD7fjC6v8KT6r7qrcPwbV61ufQAhvsWVyx6K1DCkWPWYVN7WefWCCemZq3GnK",
  "key17": "HPJxHJWGHdNpm2UeXyDoM3YMZfe7RrUr3TrDNt8NFkyjMdA5m1ebEo4UciaJ9jVcXmd9VKAGqnrFAyccfwMxtyK",
  "key18": "4CGPuxRYTFEwbtGZV9nQEyfAW9Fy1LAV4BbVgZBRit9Tq6YAQXTbkjrtJs1vuyQ5VAGAfQA8hKKTmkNbKGTNUcjH",
  "key19": "4Xew92abc9FKnhMBH6bPmesPGqBRuwLpWSZzoF98zbV1yR3YdwLVoV8PmLCr3xByaY1HSc2ZADAsY6RhFdbi2iKp",
  "key20": "5jJykMq51UT53ciFH4gy7J2wXJHqJENNhuCxYuSuKKskFSnibRdXMJwxtGUWifB3FKtsosGtR7zii6oSy6RWXZrc",
  "key21": "416jecG1MGFmBwK29u3f1KMW9P7mjS8Bw4yezZxftSaHvMag5TjBozCNXpnF8XtoPndVCf9AGrLqoqoaG23s8TnF",
  "key22": "4Ry7a8JRsfbHHuZU34ngy28CNfjHVtMAXSq3X3wSWXYwLvqxiwZ7VHeu5uoZkHmcCCo9vy79VavibhrS1GqiXU6w",
  "key23": "3fUeQi5cRU2FUeHPHAxA21yzEMJFf2zS6W7qy9N7jxNr5ppEx1Az4WQtv93BzohxDGNw9KdY46qkTbEQCFXwbsAJ",
  "key24": "55v3cdvT7kMRggrsriGRGPGBTnrtF6FPdXHtdm3y2PUdDE3DjPJB6upEb1nsMgVRcPcgfccZvUmPdTvAVrdAZ56x",
  "key25": "3LVPANqxDjvAqsL8cbx9VFhDvpdDZRr4T4EstqSG3gosg9Xqj1N6wRbXK7b9YRAQSxNpxVvZ5Lancu3T5zsbhBr9",
  "key26": "3Y5c7BbUKcwCsETd5QkSBAnr92iDhHzbLwaQoZyA93B54DoMkbhtFjekzCJZiMJAe7GHpSf8eEQ5Ar61t7Kr8YEo",
  "key27": "3BKYFK9T8XuuBtXP1h6FVzUtQrBt2zLRPiM5iSdqvDbKWPRZb5NFQnBmEoCVbjgLG9sJg5uBMGgFCip9Gf7aTRDC",
  "key28": "4BoQf5GiQeS2uR6BW8tLhsrtzmfmRcipNpBHdsumV1mscUuQTmUNrGj5nH12iAiGQyDyfgS8swtE8fPR93rP9ai"
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

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
    "2AJQLUbwgsewtZSraBVHmPha3yCzmnKLZA5Big4wS3HCtggRW1Cj2xrTzijcnygAHzZ3wsJjdj1Y3DVv5cCcRkK1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U6z6Sd8cEGMtRpGbLZtQq2CS1NSTkXcpHWPar7mnd8bxZsU3zdyaAKjJwFpuWAePhA5BCjuK8FQGree6TpJos3r",
  "key1": "2CQDfvwiTRuEanYPks4NhyhUPLuiu9oaNvkstBHxQufwoZynrmckMTxtnjxbuLaojGoci3om8fw9VdHumZp5AGb1",
  "key2": "4jzGZL77q9C7Bv9HmXYRSECvWnw48byyXuew1vK2cYb3QkxhmkJqF3MjyRrGkHVy7XSn7NY4qLC2eMRjmK6pG3MF",
  "key3": "4LWUL5smbJNVwL3r7bKgo4vfyp1ePmB98JkUC7kxYfcNtmRh27pZyCjAvL3nbcQsDpT83tQ9vPzDVoyPRP3zH7Hk",
  "key4": "4S2vBgw5C5PBbq9nMGzQFSpsurHzwT8bf9SF6Z3mTBVF82kPiztZk2ex647qkwYA6oF52dJCtKHSVpVpQRp4Lqjs",
  "key5": "42L25CJojitoR64o5BYebEKsN5xxtzGa6xVeNnZc8XzAm5aFWj85DWckxR6jRpWEgWPrcktwuRQahPDaBVTz2xA4",
  "key6": "2KeK3ctAYWw1jvTn5MEXg3Xe4bvzrL54doPcPB2xZ8eLmgf2dZf4JMuSmanXghSq863BpGv2KVy6h91tLPgFzYQ9",
  "key7": "2WWUje3nX62vYeZEGnRtj2kDws7fJ7BiFPbMGpkK2BBrHExkeANRUveNen7Eg6N3NbxpTQ5ER15fuBW5VafhFxch",
  "key8": "4niZtrRe1Nbh8wCK4rnUruXQvipuKV6Umjtrf5TrnRbx3DUgdFkAGVBr685zRqTACnAkEmba57a8B3Qp17JAht8B",
  "key9": "3LNTocYWNCWchVPUnRetNmkzDcfQg31RqxFJvRq4S73X8XYLXfBEta3BWFfDK3FnJit81oPheaXiK2YA73DZ6Ey8",
  "key10": "gaaJSq9Exneo5dfbtXoutpC5ifMAN4YCe9zXdJF4gGhVseH4z22QCha3F7jg3QFmm4JJwZsUCFKoGNb7V6HSm2N",
  "key11": "64NKZg5kGvCETT3KmSxBuZ2cq31UaeW4zHmjUd9aNYrcddWZGDtbGsJ6Cpi8MQYqJxzAASDZqQScZQkbrdwnsAFZ",
  "key12": "4mhJnoYagKC9qvrXPRfm4ujWMjcpdtzBmjAm57p6wzkgtEpnnH1o8FehVgFvGfdJbKkcQGDad1Ldh6f8ECju3oR8",
  "key13": "2udaL8oVHuMnXUes9zhr77Y6imxLnBX6ycuekgVR6US2Ah4GXPbDZvhasic2Y4d992RLwVtNdrNMTVJC4vZyYB8d",
  "key14": "3GTRw2xv3fetQMC1gYwbh6AkEtWo8Unqbpkrg8Cwuf82tYdgw7GsE3qx4hT1FuehvBSYpcAHWSdy1fworNL76W53",
  "key15": "3147PJiEJDsPiJjVvzHVv8X9LfT1eAHxyfWizaRfZ2vB9FKpbreTtKUPB7HyUzHJ54TnTQviJQNbweJbykNTYyYg",
  "key16": "2zvYRVqTREnKVwdQFL4dZCSMW3ZXRnNhjezH4VnzDjrxXn3RFxaY5abv21QwE3izQPdLnmCq4dF4XG7prV9senow",
  "key17": "3e5fiHhT25QJg3nxSazMCYgrC41d99uuxNhjxCpj41cwv6ogVK4Fk2PJSRSQjSnyVYbsNpkVuFurMdWFLmVBpmCP",
  "key18": "4CQej5wwBwmSbLc5Kqg5SHRugYSsCj6gYKAFhdzfkFaS7RVCuo6qcjHGbyvETD82zq7rLmVS4vLvDt76hEF5Htf2",
  "key19": "4shNBapbCLQuyBePbLQLBYR4kVdCREL6GHCtCLUM1iV7NvzJ5LaDC6KLKRaU36wgtXwwnnHVRapnEBB99AGjjYp7",
  "key20": "3cQBAS8SRVYLUFbgtQhxrN71jcsrMukXaRYmZkbfUoLGrFaMEtdBpHiyRkx6Cjj28mwx7F3y3qdJydKBbB6H3iPK",
  "key21": "4yvaZ6ztoFLn1kRM1Ury3ppFQYaUKue8D7KsXoPMPUhpaMJKLmmnZoFEdLhhxd11fxRNQSZF4xjZJvoAA8hxAL14",
  "key22": "4HUaWkfihJcRBLLb6oJwre2pekDrfMBGNuk9qGpP8NQGfnj9CFBdM9Cwe8L28V6zbYyTvtzbPTav1XX3CMmfdUXc",
  "key23": "4ZzyduYGAgzuEXiAGXFoh5P7DsUFphqh32dbpc7ZRy5mqQm2TD3ibDdgogfcZR6FGEpRiLMecHRskB5xn3s66iV9",
  "key24": "58tDT4gZKSq6jHfmaXwmkYH4ZpcfbBLkysGFy9mdUCRGoCmmXoquumnRwJQhep8W1gQfJB1bNSQxqBDhD62mN3kE",
  "key25": "3s75WyQDKfzPVy1Eo43YmcR6FVWbGzmdXevvmhLUBRcUpAzfYE1zvoiXf6p2aWxL24iYGy8b7QNQCfhPhhzpwnYE",
  "key26": "5oUazg9GPGM8WQ7QWdhjMXb1wt5As96sdXPrYh9PoqHUTZzda1kqNnB8vJo8NBbW8M5kPtJi4nSNRfotRn2wCsLr",
  "key27": "kxefGGtZ9nJtGb1tbZzEQ7Tu9oHyzecvtjLMiLLWLSVVwq1stG1tZaSsJDdcnpDaAvwmUfJ5JQTMCS8vb5SVCdp",
  "key28": "4x3p6D1ceKDz6UXXXcc3ZKMukZJY5CHq4Tq65UXxxaWzPGH1C4Uaczefy9cLXcGG8UXzzVBHWxd1wun6Vo6PqCKS",
  "key29": "5wKDQn3vaB9xCNqQyuPJgbSGyrMuaUbPaXqB1vrvUBNqSWKWGzu3dCuj3cFNYKJf1UBV8SEW96MDvJhikEkbFDGs",
  "key30": "2K9yZb719LKcfU19DsZiKBD5MSZqaRn5LhUcDPBr1B493ZdypKte8vswP2jjpzTojjioKCzbNgoDJh4J4FbgXawH",
  "key31": "5h8ratqEo3asfc4YSJbbjnEiT8quTCGeEaYkFfRoYdTuqn3f4M28dGncWWTdVNrmGT1hVmx9ML7SZKCjk2uii8Ze",
  "key32": "19BjSyB7y7AiRmHphUYxaqLWFf9j9rtrYEY1YYk3vCaPF4Ry5BoWndj6nwNxTGwEy2hNpknXFWiN4npASRXad3j",
  "key33": "53AwKMaUNziXnGPr88AwczK2a9VhkeFLdrYZ5DrWnMHkLyF8gAYCdSfMbcNjsK8NWWr2FhyNhDUNCY3rVwJkoGEb",
  "key34": "5kzvcJuJ5nLPgY4ZvXNKCapgmkrR41N2KvTqFRrrw4VjAy89sSV979Mrz8oT6wpENUB4yjotAWB1vrSN25mnrpvW",
  "key35": "5YrRseuhstviGj5dEYvb5uapbU21JG5FXWfcsB7M2N4Gu2tb6CqRup5u24oZA2TR1fQURJXc1sTELmZzsYa7zPx8",
  "key36": "3RwaidFqXQ89zMqCDbT6fKPcRKk4XRAiRNJMuAf5gKeyuiKnvuNYr9SNDcHZgF9AVKCDMZmxgK1SVhhUyMSiX5Df"
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

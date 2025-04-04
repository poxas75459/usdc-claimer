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
    "5PTredQq8PMC2bo6CaPgfzTx6YDa2zXEBjC76Wi5sah3ozx6ey2iDw9k8GcGivBrhTxe2P1afKRfBknXdmSHMxYK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zz4qwLhWYG1Pqiv6KXn3xRQctyu7kYjoKsPPbaKgE5adtU7uEs4fiEHUnX9keaCM1cW4Y7jr4RDigyNiUsRtCFm",
  "key1": "3UMGTyb6u6R3MSMc2MfwGLUnt9eS8TC5Pr73kCKRs8hVfgqPFk4fBhSta31xgvY5Wx1vJBVkYGaNeFdTsNzbFqCq",
  "key2": "3wTdPnYA82QTtrobXmC1YPriYLreWkv1nYHqbT6zrhMqMPDDqG2B8x4fWME6A9DVppqopEP2paXALG4nbtniyjtH",
  "key3": "5oYxFH6FzfLBmw5ANL2UDrJxRWfBnbma7tvZicmZSi8V6ff4ETN6yJHg9eFdoQqnjP2t9GianunrFSEkbesEdekg",
  "key4": "4FpNNYtgr57sw1bzejuFhaXeVLvG8P4oRgRqwLdKzecA4LGwgsRT91FjRvNoKbbouihh3KtSfjn5N4eavibXSWTZ",
  "key5": "58fsUKvpbxa4WLqAU9AyYfGLabjCKVEnnGb1q6CjPfJcv4sNUNn8YHCK9kbz2GeWN9T2GaBUJeRGC8axGodyDVKt",
  "key6": "4bhJVE2aAThXw6XcCvhcfzvWWhfHjYcxnRhTEXxDCmqhWdvv3VnK1Bt8EgZ2PTMyoGHbL6gxgwtBELkdDzDGn9tW",
  "key7": "4yRwSZcS2TNj2EzdqoyWadWQUavRpNKFvmr9ydfxFpGAHcXG6GbbH9Qw39xpkXe6qTN17n2mkwRYWo2KBzuwvYcQ",
  "key8": "1dohmn81DfwbrBkTHNtJoHLdmwz2jGno8G4Ryn4bs5GHaCd6Tk3wWyRKez6MjkvU4XNPU1dRw2iiwTKrspC3tgn",
  "key9": "3SLJLL1bxFoNTHY6sgHqFzFrbseR7rbNBDw6aUNdyTqwzCcLKUcKAqfvxAag3przPJoP8sKmettGBpKavGz1cmc5",
  "key10": "2c96rTCiJZ2Fx7MA5Ko8TsfHK35Kp8FmyhWdeRUVZHSqhxMb78VBjHbYBdVvHnCRhEGHxp46xvcsxUMAVpL5c1jx",
  "key11": "3d8fNZsdMi6gtUTejBDjeTPjmoymPXumSE75XMLRxEGcB8gwmxjMvzXTRoV3AVXmBJMcGKmrNPnrm2F6qsYsJc1K",
  "key12": "5dtnvksSuehtWkuokgMnpygymZTKkfd6hQWC1vFQH9fDe4NesT79GeVDy2U53zTjGveAdzpnHdtFt4GS4kDuuftW",
  "key13": "QLkQAKuGVH9JEtEA8sGU6EjXQmpv8B5wYRjyKK7HYGrEKUCAUFLkq2XceTjtUpLkoEToDRA9a8o2estZ7BFbQWX",
  "key14": "5VqhJbbXqFecfTSKp6Ti5Eo4mRu41xcmeztohwqPzuMsBWfda51e8CViXFZfbgNa2WkU37NALR5QjCME7Zqe2vJB",
  "key15": "oPp4EUdMyMiRFQDCsFWDGGS9eeNSiXibp7ZoT7SYC1EpQpUR1vtfSu93NP3XrHW6JWMfS9MbzU37aAmhiEuvEWc",
  "key16": "5UrJtkobg1HEjfDZ2S5KarUeMUw852aTjMHiW5Dnb7tuAYZWNTRjiUmjzqPGXeTuasVWCRgv8k1YbRFYLphVXKao",
  "key17": "3oDpeRgfvJdrpd44vXnhrFrs2AZSAkkoHjyXyQRRztJmKEXLQuBjjdARmrxDPjFhQTVzovY2LByhZCxikEfzaRAc",
  "key18": "22XXh99CLVoeN6pC2A69r5oBnuPjXALjZo3oCzT67m1eTKBmuF2t96M9v1Z8hXvWFr8ejRCCbywXpzPMFyR2uvWm",
  "key19": "4wG4kA2XzQ8wkCgWPP7d8Kr2cyTskgLKRv433BhvnYTJPpGW7Ptkw8RDEVFhiPrMGfZ81nk9GwCr8oqhNEFFnAAp",
  "key20": "2MPTo48jNvdYjrmR5PYYvouvrnNefjZqGHBeaEfBi7He5EnziFTRQnSGEk4S4TaNqrP4S1WFEpzQvAX615RMFUKP",
  "key21": "TwcUTBEe2tuqa5dHcXHXGKBjVAPJ6R3ctuWs1p7ZpR1JFp8aYougZdLLZSTvLNeKUPiET5SdqtCcKgB3YWkRi6t",
  "key22": "2FBJ6gJyoCj9EDSTycuRqgBk15Gj8fAbChrDmpcTQFkHxtDzqwShn7kukbXe2mEFppWWq3ceKvffSSMHpPKrMN2k",
  "key23": "2xdxBV7W3i2EXCqR45DQAgP6JNaa7JjWaw39wgD1FPQinZmD74r7734Liq22rvWoafzDFrNgBdP4Z6t4RvjTkzYH",
  "key24": "jNR1tZpnj3ZMZyZWEpqEe3qJZcQxzrwcXsZTtCmovihbMuUzn86ArdNQXYJYxvJWNFXPEjxHip5X7tp9Uz5pS5U",
  "key25": "2ZG4UAH1vkPnCoQf1hbDTQ8oBoPCNrNhwKGpM2TaG6SqFxqcsETEyKqFu8vSo1eztGUNMRAe25jsMpFmUrZGV4VQ",
  "key26": "3XHAvgDFVuyDoJ7Byy7S78VXrD1icwrSD677kszTGSXwvTFU1gAYhysHB7LFY6abvBuPNgm3vCfWZTyYhtkhes7h",
  "key27": "21Vw4pGBqiuM7Gg8ve67iX6ETdNZdQ2XFGMFfuNNw5Bwtn9RuKiDfBVuwbRmZSjqYNe5ox65U7zXhyXGSWvkdvny",
  "key28": "2KuJRQ2S4AaA7CmoYyxgQLVikAEoT41jfu8aepJEk7QAhpiEMSSmgk9nnzhw8LnRkkFb7gm5rRu9wW25uxQzKaXt",
  "key29": "5WsagmMveP49wyqeuFgeYdkygdKxJoXLX2b9wXVuWXdwV91RRsGewZ7mzyS17NhoD3bC8vNw6KxrBNxiFMmDFXto",
  "key30": "2ecyt2rLTPxnSQJmLb1RVBjbfjtwcBTitdJFdwLUXrVmpjr8VPkksi2nSHokJbzXNHZue71F5uNrG7fPszakJqjf",
  "key31": "5VgbSqwDsiXmeUVu3jp7BbDyQ7NqB6Qq1P2NZoYQDj7BFaCU6PYthoZpVti7iBn2STDFsWrch8vxxJvxucLbxvsi",
  "key32": "kDXQPeFUfmEwvDuwKcX7mavsSRjtQZ891dNxAjWyWZPoLvVzy2NJEgpHjJDXYwWw3Vhgo1x2sEUUCRoQ9L5D3oN",
  "key33": "37Msb4AwKppymo15itW2pvSwmBw47bNCeoK39cZJUM1EnqFDqEne8hcKYgnBG5rh8j6LYMyhweQNw3PxzVvrfRj6"
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

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
    "2fJYTsPRkUTEk39Hhib7RAoMPc68QopJKi6twEUiejBCSx3DJ8wzdauvVouSZWUPi6jAramxSwzhf4zsffRbreaM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CixmYcoCMMPpnyvUHfkACsB6VvHMRenMbyRKcJPiJfbS16iQz22mmuvXrkXnQLCxPbtpg3SRcnSCvrZthzJfrbs",
  "key1": "4ZE4QUz2C5tSmwH5HKZY6Wick7y7cBpNy88LfvQ8hT1zSdgCMDsRLDRSp9XMYBS7HFaTDnZhWNPPhk9w8rZTP6QG",
  "key2": "52Rmgrc7EhTsZvxWaDUdinPRQeVzb4Cbfu6pJqqWSrDbKi1aDkR6J9gzKYnBNGyrQys6yYuE9ACHL4veW1P6oaje",
  "key3": "2ki4W5N7wPPYoqaE5J26yy1ScusfPgGE4QSaqxDHWafjnLZzL2dDe2mKHh43sRQZaM8o5F5Qv8mg52UYwC9R6wmy",
  "key4": "5HVrmenRN9LJna8McN4wW8rjHVhn3v5iQByyHc75LkbJ7cnFbeDzXKsunXL2rhxv18hyhaKEaBy89icHvDeGo9cC",
  "key5": "5LbhAumZvxH2NUk1AE8xVwXY3akeBHdYf5uPhZ7wsS9kDkqvj5FxZwTSK9N5oaJnq1EbUhEMN3Hv9VAKRTfT1mEL",
  "key6": "311ERd4QkZzi7oiWLuQqugYmPydZBFcS2Uf6c6GJVe14gFaBBQuTEYVoX3XrsjxQhPnqgNsboWYJ6kKBpE3yRtai",
  "key7": "4AeCA8RyFFL4E3Qscg5yW5rUK2VoE34LU7GqyChLAfiqhQSeMi928arjucZQJzJ3qxmoe7kTDvreuypr3CUZyAqV",
  "key8": "Gw8qQUNDQDRduZwsyXyTBJYVqLKbiU7qbzEsBH5zwst6fPDLnoDC57wVb5nb5S54nKCS83XPg3fhHSMmhQtJFpp",
  "key9": "3DqLCJnbDhLpqc9tchKXUyYekazHbhnia5o22BVSw1Cwdfv2Z48wE6hdWCidQyc1UdmQQrFY8fUekEQHhQ3xkk5K",
  "key10": "2qmKaWd9dPg94vGawHsNrEV1peLyaq9g8UYaQZK4PsjNADeRyn8RzL8Svm2QQJ2Zoy1Mz2gcSrxXGpmtwLzRyBrD",
  "key11": "2APAZ3P6LtngBJ9vJzJcRQUyF56mXCt5FkXT6gjiXo8HLuJYyVZbMthpCGCyFbrEu8WYhSzppkWYEPQtB3NYk6t2",
  "key12": "4nWTKkGmBt9aWAVGARe35Rsxzt5cXEMbsqkdiURkuPnQuaTiP13zTa8owGZwmE3wz88P1K5BdhcvjWHamCPGYgtN",
  "key13": "5MyxXgb4gF51hqhuhjPGb5ABWbMaexkYpXiJiWnYZhv9woAtMk4WUSMu4VzU3PCbgZ9DVca2ATaR6dSZ5U5wFbo3",
  "key14": "2DCMQA39tixLtugLxKWn7HdxA9iM5XWMtxvo4jgyxea9sy7tEhD6kJzkXumTWoURjdXEfvcgp2okDcah3sz4UrX1",
  "key15": "HkKH6WqbC7ZhXyBXFYGvmuruJvrEWAfBU22DTYDwwLAoHyt7W34pWc5FkXd8AYXvGxcZkoEShkavo49VzfSgAco",
  "key16": "31bf2kwKytdoWT15c9cofVrpZ9sFcg8mFK6vJCERBw3zbaf6HiyDaQmDM6ahnSnjKiuee2X7WTFAT7ohS7y4Yzbr",
  "key17": "3rBFgSC3Kvj34d3XwUyxkwREpHgfFWXja91qFLLuMMQDzrHmEaXzqC8rVvtkuQ3kygYZFUyLa5vRcw1G1LjUarrn",
  "key18": "4zU8joSVp3ESfTq7DucH2Diu7CR9k3WHJrQc2dvWBGA5aKLcbRNiBgDXkHhTNxQfcxyH5fQiwHUrjZjJCk5PiSZY",
  "key19": "3WumrHb65wLFUgWxbgLgTXgDZCZuibXwoVRFH6upbwN4RDv821R3xxCwXQbzS5x41oU4kPQkgPmAKBBkSQxnU1kY",
  "key20": "ApLVsmyvwnzx7MsdpdpH9oGWYJKgDA5WTpWpHJwMpGxsgV1buqHjN9xuZhodDSjt5LyGSs9voqahua9J5vKZJb6",
  "key21": "2DYPBZk7mqZfrLV7oxVnsfBnrfZLs47tBChumREVLZ5YWR7QgVXBrhZPjqR7qt1g2KdVgSUM23D8GGThQz8LokUd",
  "key22": "24tXANf2hnNvjq15cWbFh2mqQoSqzEzpNP9rFJgGYkzP51nrJ4Vk9KKivvV4gTYrsSwJYa3n3BpfeHhsCcbKH8YM",
  "key23": "3fyHxzPXfGGoiMZspMgdbNNXzwHt6ZmkQk1oA4vLE88s2PtL1nSd7jyY4D9aoBR2qNE47Zv3KquCWgxJqyd2A8qS",
  "key24": "UPpTs9RTMtYYrhoDXzvEcD1zDQGPrcK7k3uGNKzxb6op27huSvPsUWYRxJoJ2mvcZox4Vp4e1bRuNM5umTkDKsB",
  "key25": "5cJfWznsfZmsGVa75LUUNXtfoWrcqZxeiVeyUnTeCs71sxW9eXHfVnqmp5mwQpHQsazrFkCLwuVCmdrt6PQ3BoNF",
  "key26": "3FtXn27kBHdh5hH5jdDoWFwQjNkmxLmKoU7LWWnhcYbdKUQcftaJMqFoD7PNbK5dJrLd5QZsHzp1Qy3NjiRqmtgH",
  "key27": "4YRBBfmX5LJNVczis1gS9EGkD3ep9U4K46VMWHEVcwNMURLekDKPVyUtcEEE3bpzEgUGGGbGdUDLLPXagTyBDrU5",
  "key28": "53BnYWhNKs1UwPbQoNiEEwt645gNHZ8RoGhLbv3AH1P3FKtR5NKR2czEJYxdHS85woeUL3d7NUuhgSsYuFkxKJt6",
  "key29": "4qGFPo62vEYzZMNVHhV9Ku3B5yETvmjZQaUf9bz19g2dXMMTkfzaoBJRXbBRATEs96ytpRNaY3nLiiuFn9vJ4KHX",
  "key30": "4Loy962NDFMpM6xSgchXm5Cmksg7ejSus1yzBinsYkVsgPafYj1SqVt4NKMEojto1njF657JDkJfbs5kLBTGLiqv",
  "key31": "3Tykq4MFZhY887fsLtuuhcvj1752Akvow3kdKyhrHLLYgx3apg86rmQEUq4QKHQ83msU8vL1K6SvDkXeTMomai2e",
  "key32": "3fG3W7anStjoh7XbrCsnLCPupLXcPSoz8itP4zsYyDHmTn2rMH3Qi7wZc5dELVMmJysWfstSAga9CqHpoQ1nquzt",
  "key33": "36WFmgdjb4DLhL7RwqEBkR6LgkUoUqT5GPirZMZx6hMsJWE8Fy41NW4t1gkKJKCpe29uLR9U58cG9wrcHPU93pXx",
  "key34": "38FNxVXDRGiTfnWjcZKgSNx1vCuqdCUD1Q6wSJq1b6z2xNHTKuNBydfeGGVjDe3oq91DFbafbEjXKqnzwJ2iex1a",
  "key35": "2HWAfVzZAnjx5qwexdUnxSJLMwYggW6stBdqLySmeeH4g4LWAJ4pL3VcXopsPuiokjBxGTNEjgPr1ZHE6BrKQfZ",
  "key36": "54gQmFGz2XmSWSEnBrrJntwAX93rH5fbL84ruHbw7VbEgArJ3whSqdNT4zJx1sE7xP1UJY2DHzmevKcvYTANq1a6",
  "key37": "4PWb2TLnx8xuoJtnFNtiAmYsUjePNdC3bnR5qa2J8Lq8bDR1RMNjqkGQUz2o6RyE1cXtAjwZmCpWb4LWW2Htp1ei",
  "key38": "mvCq2Q7Lmv6vfRgo6CqykXoHMy4pNc7jWHAb2MbeusNXFTM8xpdhgLZwuEvnX8USvcxmFM1TC8uU2438t5bKdY9",
  "key39": "5rHj3kZYiG3fcXSgzPDJsZXqbkFyqg8N5E8GNQxkkxFS6V5GsvWhnaBko7coB7vYoNiFtBsWxCEPfyGXVXGwS93k",
  "key40": "4McnVJPbTnzpQqccLUY1YHZxTqPevmaicfEkVUPoXZuMnPByviu8AfDZKCKx9pj4yxQj63ERqgrbQcymS3yKHwdg",
  "key41": "2TU2xikELEudd4jBxUZ4H51CvRUUN4B36JyMfZpjCNBDa99cCLqMRtKdum2MgxdKpCs7X41cmNxFegd8WZdzV5G8",
  "key42": "2Z8gwwFUqaJKoPAm8A5oxfi1J3tv89HYnarQg1gPkMdgDEhAH3MAN6qdnEWTdpKCtzs5e2Eadryv8aTMcDdf4jFS",
  "key43": "5J5VvhPyw3XhkYUN3ub9XLJAMu18kug97iZ5k4KwUhLyAAmNuCLr4BH7r3QGKFjzJcq1aeypxmTH69Z3TRAnZuSK"
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

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
    "22ZZrRpwkJxRCYcxixyaCz8uv4CRCFcZLT3GKnt6Z9XjiLqYnwWsChKz7FWKgij3z9LkqQz6XhywyVY98DLo2MHK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XKMdnFNgyrp9YBHvWSfj5huQhdvheUefiWagqtAEX8rSY1LDtYsNTcRdzaoMRYpq4Zcedze2xEMrmpYB9LjLj62",
  "key1": "1ieoijTQar7WYTG9Mv3CCawgLsN1XTXLvP7poLkLrbRUSmhgv5H6hhiMHSLmd53uomxQn6GmgvJZ5ec1UeYL14M",
  "key2": "4PfcqTPmzaTJrQMftr7s9GdareLBKTGJNPjPQoDWrjCmDTqdxgBrKkrpFBf1aPF2yKkSZs883ysQen4GPjQJpWGP",
  "key3": "4HbqqRjJ7g5GHG4z6SD1SygZ1qmszGA4s9LWJgtK6WvURwCJNh5vrhJp9UiZWt9KBf8ppHmbxspjtfLA5b1kmLVA",
  "key4": "G3JwATR6CvW6qdogVdEAtc9oQuG5duAz3epoWxb2xNdrVNSmrHHw94vWjrPw8A8yoTkXqECjqdF4DhheAQEgvyY",
  "key5": "5Gj3kh833hubZMHPWG5SrpBEDvY6CxDp1AECyTUsibxzMpuRPWgcnfGNMBWC8fEEu96hYVFxYX2KKK5taANHK9Md",
  "key6": "5pbWBSmznqEP3zh9eRR9oWGzHLu7TuLQWaT3Dn8cpBqFZ2qETGH6uKsja6q7ULoyrzECTQUirtyL9fhsceJGwuuJ",
  "key7": "5QXkKUaxVtYEYzAkzmw7wxq3E8UiVXxCWCyspEz1f6tq4yxEwMkibbfBphFZtuZd1EkmjcssPTKHMoENndNCpYQd",
  "key8": "2C7Hz8aLSMd6B6ipo1CLbr2Y68Uz817eoyhmtMQanL59mEMmtCwHc5QU8V4Sb3Mi8ZSnxh5U7daR4J6u3Kr8UMND",
  "key9": "2wsCs4iAFr7g5T6CB9KND9pjMixuCqTnvLBqaF31fTcQdWiMSbTU6A4fpsACqtWvvQAW3RwSWv6ERtJQqo3MW6Xy",
  "key10": "41nhih3peJQAY7XQWJJxbceXrVw79NKLqcL6fznaMf9C2KUTb1iMD3R2dtespjkzXxVH1ycxpFK5MuucsmRMaY8b",
  "key11": "4dzBKAsWL5B8ogpiTaky9wZk4rjtgbpjCJLoW5qA8yaMEd343zAvY1M1j7bNy8ptdJ2GEAxCEEhwTiF8G1gmLwDY",
  "key12": "38A5rNmezwq4kj9DSduY7e53pq58FdrCRoUwn6q7zcnCaARbiVshF6W2exLtAtMCD5nrTtVpRchEu34mG8KfAy9X",
  "key13": "5gTaRzKN4JLuMJZVsx45SxCZxeyvfTaeP5ZANeVh8WVKMUwbmiZAPV2qDUfkiZwjGM65hH2puPgwe9KZfgsK7AjF",
  "key14": "21uWPYW9YSxc7xBUAvorRxNXkwxSE6r1vodCN4ZbjApJCMFYEAr4fJW9L5GXUXFJCwJJa3hrm9ksGuH1DHyQ7f1g",
  "key15": "3hBmoF1zwehvVoUHSvQsNTp1C8GQWx18wDsvK5Mzyu1ByghfTN8VGpon73WyuL2qaVBiN84umojZCssdRoLZNaC1",
  "key16": "2CnNfQRWy5sn6BZssbsryziB2wBYgrJRPKHJgaLDW1umYEWbkDn9SosJj6TkXbR98SfZmdZXiHDVjAgT1riZZ8hq",
  "key17": "52BYkoDzL1GMtL5oKktZ96hFR1eZE9QNFUnx8yCC3jinRBRANVhYaDkem46FyrVgpra5BNYc9vVPct49xLsWVtLy",
  "key18": "3mKGke7uStkacQYtTLU2nSFsjsQk7WZ4KN1S5YnJrRCeSdsuCSAPLRatMe75GGKDyx6wuL2Az69kn2k9qmAJeApd",
  "key19": "2p2NBFU9iY3YMQHLobKYJmDKZuNmTuPpsRmn8D9mVc12Paqw2egPX2h8oVRFVeB6jeUfVyfHRaBNCZNwXaczuJQH",
  "key20": "2TPN1YvMBfxgvWZqDkCqbM1E93XEtZDLjxdh2qnhy4zoFB1xp9q2tPy9GMtq8avSk8DNZY2sDnTfa1SS5kPzMfDo",
  "key21": "CEaNP7qED4imqNyVhY1EGHPEN4jxdPcvdbkfWE83dx2FTDsc6VMWnzvCeYiPHDaNje9A7uWgY9JkdCg9faCEz7u",
  "key22": "5n19tDpFDshVzQp9Y56UxGCjQ1NLVXPcgX1adLn2YgQU2eegmRG6sZ6ktWv44DqVZzRfcFT57MTdxD4GpSeQKCZ8",
  "key23": "4nKAM9oBV1dtqkmoCDHeWqigiqFkaUsCE5zB9QRpGYDq7dHzGxsd6subjXKCFvX9vmV4fRiCc9js4Gf7942FWok5",
  "key24": "5G3ynKmR6nL5V2SMtVQJz95mJX5qRWxkJoMTNt48foWaFTjLuF3DDbHY4hcDJXc6uo2KU52tXpgtK4ymT5WisJjU",
  "key25": "3nXTGx8swHbrAfhrjSNs4cH2mvxae3RzpCPFusRYTnH2PeYCaEgHxxNKDgq1fCGGVFkqz3MUW5r1eYFDVtTa9kdV",
  "key26": "439eJfXdbWdqJDwq28EnsRMNKUY4HEQS7JA4z6jch7b9xEyccVrcwDwSdfjaZNAbtNsfTjCyvTkHzykJjHu8FUkK"
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

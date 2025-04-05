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
    "5bTijppCAPfqzX1FsSBJLeJVV8nYmiWcFr51HNUEJKKRvC7J4NS8FnWkLhKrJAt8dQUqjqzgh852KUFM7ZKpweL7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y8AtmCyzHUDQtGsPByZREVEX1tdqF3yEbyS9yuDhdx8NZTYAMxynAHR1ws1vTS2RgRhjknFunzbKb5x3dadGfNW",
  "key1": "37exrgMBP6tZTecMvP1duCgpq3PBnaPEKDKs2W3bncxmdqEZCnQyduWg7KVYcWQ8veLceXuimr6eUVTBPT1vkieb",
  "key2": "4FXfU1sbswX3K3BWzB5HvyKD8FuxzzwWzbfcdFeUMqxXxRbc3Sm6JE1nS4qvSx6JEBY1dfQ7vubFmi7TqCKLToj8",
  "key3": "5n1q5cFFF2N95djMcnspsRmGscCHSKC2coHw3HL2odEs8sK98LHVpYzxo1ZZTraB7gnZjGe7bGemWdqS7r7G4h17",
  "key4": "5oHc5KqdpRbGGe4MwZJtXW5fuif74F2bvaC4HaW8Ng7SVVWXs3Vb97L4LBHnaejiK3vS5k74fJsEHiwQzovRZ78M",
  "key5": "66MWbJ3mW4yfvQb1y3DoS6a3TgS6rEAyaZmNBbEkVhHoC8CfUAnVMrR1f1k5sBiePtY4255bLYGdhBGRRKHmrNr1",
  "key6": "w465turnFEFnT24Ay8mdeb8qFNrNCbop3wogwjbB9NvpE7ajrTMpCr9kN78LtNW1zHMcsnnv1fRWXDpv2ZjdDdf",
  "key7": "5wsWMRVKrtKj8H7SLauyLx8GYQyVsorBuCGNmdixZsFqW5N4nv7Ajss8jmPZUmvosiTL1estzNxhntFWYA1Wi2SQ",
  "key8": "51t5zA12rmqq7BXwdrcUJGN18tEgu4mjUwdEbwpZbCnYF2JKh4UZUFTZgergyc2uD69xxWiFUraGL6BHsVDDqqVn",
  "key9": "4RVNkVLVMsnhkvAcqCvYM6Qa56ZtqKqDoS5yiGHfA2fUmZ7UMug2xGcAZLoJ7wcyi2jR8EENvbDWXM9rNoGsiTpS",
  "key10": "rHxuL27ykPkUKp63rGjd8pNCeK1SpKkdYxXwHkzUBNVjM9DoHqHcxN8QvR9iKEsXJnwgjMhay2rF9bBdDCrVkfW",
  "key11": "3yDaphAL5BVrJE3kdeAJ8MfMF5yTC3ZxPtUKBLGRK4sG8Hx8nMpckQTc5nHfo4P8qX4JU33ADodm7h5k9nfPtgSW",
  "key12": "38oLskEuKVv6x42Baabg6uVSTwZnwNQ83abshUsukA189z5NidQrZaHDPKz8ifny3n4RaFdppvZBL1tuFqG5ARsG",
  "key13": "49G8wa1xjHQR7eF1JCKwR5UH2fGGa4Vq5yYYHaEeD847nNuwcYikTkdTFU5NqE4HZxxfoSzURkrhEWbBC5bu2Ufy",
  "key14": "3bVtuydUGFTLqxJPHHkAQT7Esyb9osjpYh19kFRDmHQoE7ibD1sPpGcKKtQbNb22M8exZZ8Vaf6NKZwNvBxvsU37",
  "key15": "341Y788veioYp95Grz4pcQ3BY4HaSEQ8peiF4s8wvdjCpvXRkXA4Q4aR8iZcQ2F6xn3xMi3eTGrcyGjhguJHSXkV",
  "key16": "5MNEQ7cQ4snKZch7Ur2U32nG8jE4PKzXU9Q9aqJgcKc3Buq6iedcuqPrjX577hVvaKS1MhydDatmVjn1NLoBPXkk",
  "key17": "5gF58FoQo97khSincik25Gwvxy6GHHZd94uh7Ut1XEQhWQWc8NcQL3LmZZ7dS2ZMPq3stByWQN1uDTsbQdUCbgFF",
  "key18": "2JdswU5Vc8WbUpwDV3oEiDSXGozsn41qSvph2urG37nfbnx7idAaHwEyzxWTmmrwwa21d8NL62xqvKCiVUhTffJV",
  "key19": "24dsUqQfSt3iGnPWmYMiVQqq3UrJQKLWqerYy5j8eqWS689SLwC8iM5NAm1bgNDxWrCAU5mF1BJPX7UNjuW7UE7E",
  "key20": "5J18a4c5a1UUaUfsP2gH5UAQUqYFaxfZb8FyLuWxVPGfsuypdWTB93ziWEmsi7Thoxf5sPPQLvXR4goenApnsqsy",
  "key21": "5ixGfJr74jZgE3qYHhUED16NkqG2yaYRVZ2zNJEdDEjPTqoJYmwM7kPAKSAcAx5Kk6FYqdJSer6MNGCMtWh3cUcn",
  "key22": "3QwQiVC8GLPfZjc1H4x2FebexTEYy3WjMfvKM71yXWyyz1V9RsqehcC1QcHccq5q6B51vnnsc5NUXKo1rQCQkvXB",
  "key23": "5jVZ5vCYZik7wJVRxJNFPPYZHLf2CRZhLUNssMtHQm3LxYG5eoKJfbiCLSVQs6Zm69iqhX55L7aeKbZPqMD2xFYx",
  "key24": "28e4T3TsbuxrxFmEA85iSuJa4PJEaPgz6CWeNqCHvbvbuK1R85w6pktinBHmUX4Fy2pdn7ciujhSAbfsd4V9KFVi",
  "key25": "iVoSnmS7xKyreRF7oTRMaqec1K8AuUmmp9Ts6noS1FnFeCv1VhZY92CfPJgWjt7KdoG7giYb5pFrAz7n5pVs4k3"
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

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
    "3UVW6fzdy9eTgkqqbZQaZSMd38CuQ5ThGWyXfFLYGRCCL7Vb7jbm2Uf88aAVJfkLGRADCLBV5AUBRrfp1HZutUQ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "217YduRz5w7TLkRUJf7LRXqWUSwsAxiNoT8R5V4jP7M3FoA18CrWK5Ri1xopAELczjEfgNMYb5aHgJzfAMmTHVRE",
  "key1": "91ZURhEo1p42M1qobha55ud9ehDqT8DTkXzrPpomi9FryE6PGqgiZ2F5EsaaTys4gTrDCjzFaQwMvB4TAPkCfRJ",
  "key2": "2jqWZjRztT7HAMfNbHEc6PEwf7mPUBceJr9LJsWWmAqoy5kbCy6bCnkZ8rxtQ8RYCTQtaC17WPbQKVuKkxQ8Mzsm",
  "key3": "2Bk4QxtkUMLmjwZN743ARJbSYgCiYo8M8YYX7GVLDkDFgVsuLvJs7sobipHWXZcn1HJDKUx14UXtybwGPqfqMnNv",
  "key4": "3MxGyZd2qYiAe9PuF6DjUfhKiD8hn6GcvafamQYPkp64LgGALKSb64z2avt4k5Mph5qfrTNdMSJ5pLgQLGAxLLa8",
  "key5": "42NnHg3DZzrwET416KWrWFmMNAs5F2CW5uEexkhxBK9qXvdM2PbweExghaRk5H97rnv4K6QERZBpjnyxJS9fC1Et",
  "key6": "5JpsUg5MtQFyt9ASTU5zWMntyHYqRSEgPgSfEPKadMWTVzKJM2223T8STaUtPv6Gma2r3apcQxbNn5rRnjPzUmoi",
  "key7": "5bQKBo7gPiVFxXiXEmKa46hrhTBtv97yYyK7CXbo874wPjEP8LuVCo9BFsg9NS1ZA28Cg9ZUin2rYRPBJFvapEC8",
  "key8": "pG3AiWGubRYAYG58j3KwkQvNqgqJjFavr3H8iEzc74pixU9iUPAQGnkrtHFwzA2jkGUEmoeny9PyvHpW89o1EYw",
  "key9": "33LJNyUwtc8t3PDGNVAcze2xRjJFwVdXuiatomtcyiWTcYtMncAoRCUub127mc2aWt2oHXbdqV46pLAxxEUJGSns",
  "key10": "2ZbTS7TWReCQU2Fdgm21PmdXdg4ctV7fWxNXybasGfowzLpCPcZvReBcRUGhS4TDRkowELvbjjbZnnPaF91AxaCH",
  "key11": "3BzpzFfy6Moqsf7seVyDA7grch5jZUWANHh5BjEyNSmBi498NWSkH5SsCLmnDtUVdkiLnR8LJN3bSr6RHSeCcHUQ",
  "key12": "38BWvSbGWbygJZSpc721iwDhr1JdU6Dwt63gHAP6rLtzFEwPqRJV7f1AuNdZBi1npwRdojBVs8x2Wd2Td7m2beqh",
  "key13": "25aVZ7DXWqoVsdUEnhULJZLmyxGpy8t14TzXgvnFe6danF1693spmHYeXm5WFRmy5ai3EaTzX8f8MykhdiUQC8EK",
  "key14": "2LBoiFDhaA8GaxkkgLtjcenxACazxhk2jV7Ld3g1dh1DFz3fjLC68jxPyZSxpYyL6Ak1S1EfSpRXHEuiaE2LUVLU",
  "key15": "3L6smhfySDdZLDy4pb9ZPKwmpcfXQNNB1LK83ZmeV3zrVeUn2bLBqDsUYpZ5XuJj5Sqzqk1TJpmmWd7YmobdeYmw",
  "key16": "36Wd9YvHnbiJBqopmQoWg2M6fFDNvgyACs7EFF5kms3VkzJVED6sZHeG6cyFsmtvBEYBvJTHJPUYqcaoXSQRMNzD",
  "key17": "5up8Gu3kyYhbC1Z2JbmW7gUza7yE4HZLvCQd2CCTmncoseCMf4m9qCS28Z1AXWYDvFur1LhQtm6AwzMUPNmwii67",
  "key18": "4zCXu17P1sW8LuCkM213zS6si1tPHNTBa1yFSMBTnJv7cRngVjd7H8gtpXZPiEsZxYZaGiuaUrbTJvJKZtqLTrjL",
  "key19": "5CuMcy6ABbGfHJWhh6fVCP4wVp8hK9TGi3uQTwnEahvjdJSMnSgcaaqoEGyqb83k5UbDfBEpDmUDsxkSUqQefg9V",
  "key20": "55kTiUQFGRFDrme4MRoXZ78px5LJBzP79c2dLkpbogzW5DwbM2DGvi9vpTM5fCBcVoXSvryiGrsh8R812Vo1gCX4",
  "key21": "4a85y4YmPh9D7dnv4e85tsJCiEGoxt3xyB8uN9YmY2fDN4c8hT1ouu3X2ethanPjmwDgY6PPLZZMvDSauFee2HUn",
  "key22": "2d2cNG55N8jZjWGQWeDYvj5AhTNTndQ1E2uBw1mAqE5j1E2wiG2FjzTfwDXZbudG3iQbMdzxRvqFKfic6d1WqTrk",
  "key23": "2S8UKhcw6mP2KJepBaKzV9Hwy7UfoyyVPdELU2YggwcK85Z8xeTYP7hRve9gsvYanbkUted5YoQva3RmXxyjSnH7",
  "key24": "3uv5UQpDfqPXmdyojuL3fXxR3TC7QxDPpPV7syeYKNrZyAm6RatEDb6qPURteTuNFK14J2SgDpxWLKDVLRUHP4t",
  "key25": "5PEmPSoKRK3VD98q2UfRL2MABoKspzhoeyj1zoWqPyaftxJjmqHvCLd5iQ9jRHs5pjDqYSvQqBYwYcaDhRSXSDN6",
  "key26": "5RyTeZkmGNYVBh8KQ7P8oUkHTsAUW4VUPh1qjDznTjB937w9FguVp2szjoLS85az8nkcLHjFBz2APUNLYQ9fd13j",
  "key27": "3c9VmV146RSTmDwfKeuFfqaYridR4pjrwkH5hUdkm3eK3YgsYArbzCfhVAR8TPxxV5N32hMwnSr5eXpEaMWSj1oG",
  "key28": "nCRSLT9hUvtTtQbDKHsKhzng7VWipppYLqXiFChAfmopYucEFai15friybVgEQnsDr7p6gsAC6i3xLqWCTcpqob",
  "key29": "zU4paTRTCWKHAdFrZjhk9umMrxhnwD7iLZ88XcRN88QB29SFKSRPiJPNq2GpHBymZAdojDV6jTr2fR1dRsuFPdq",
  "key30": "5hxfHUAUra2SfLAdJL8Lykc5Hx7z9Kf3zhc9NL5bbqXeCakZ6jGAUkYAqSJBMaDPuMvcfQuF5kL9Ymzqn8kJxKTV",
  "key31": "3o6U6p3Ft26hJXJaBBxtdEU63L1v1hHv3oYzMywSD1RbF5RGKq3QzF5rb7RzwWPVGZkxifQhgAGr2yDFKf4etDdf",
  "key32": "2cCUV3pHSonkUWRRa2NMAYSSTikswbtYyYspeDSHPsm6x99NYXSUfArMa6gHqYUDBhAs66dSzYUm94B8D3JYkWnb"
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

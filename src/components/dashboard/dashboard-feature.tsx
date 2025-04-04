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
    "nFQ767vN9QHpdVguRtZ5EBdo8VJkDYXxv2tXpybei3WGFYRQ4FMumV1qSnWvJGxqybSGwosYz9v8w8Fu3625Y6n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fXCz9D8wDkv2kcfU4zp3nhCPu74TNwkmk5cRy8yNkgRyvwrw2J84guZqKnBZtACPfA71ZLfM143BgUSAqtKYxfZ",
  "key1": "43B3sz6yCRLgPcf3EgmSDZacLY4TcJSFcnmaLfC1L7TcrgD3qsHrJVWfwojNo8RW3hFRGJqXZ7mZtcryH9o6hLem",
  "key2": "Cx4XQvA9z9x24dXshgkSRJHNf1zVopZ2voSk169exWNyHCuzQ2x4A8KtJwwX7dAGk5BiFM4ZMinF2Bg6cQEwHud",
  "key3": "5s24DfrBYhoEHnjgGV5gtvDbDpbD1wi2gHTrPiuu9RFXx1RPpkc8u3RaJYCXehHsnU4wHdutKUp6oNhcSe1Hyk7",
  "key4": "21fXL8H7qTLQXQFsXCkTqRrXYDXZcbxxsVQqzU6KiJJa5hmjRxu9xSx8ymasHdEt8mbRzEc4DAASCnnhcv3R9wt8",
  "key5": "4C4u3hY2KoXC4zZRzcBszvptqu58Y1hzxvHtYtgMa9omFyRVMbEPn21ahoSwsjgTu4ZAmW3piGvEUNCJEBpjPDTR",
  "key6": "5cwtua5bLtoPdGMSbjxsGpFpNGZMzT5hnr5MfP2GVoFcHQwTQRv3ckN28DJ2QeWPBFgpm6KXoKbWXHXryLUZpdkE",
  "key7": "njB9ocqV6yCJVVpB55FMkb9m6VmsfV1Stfq4CDMuhboSP1K3o4DWfuyMm33hc5UCgCq5um1i9Tt3HKuwY3e1KsG",
  "key8": "3Ty6cb9nECVE2CUn6ptH9YTyZPaouhAtwu9Ri7kxKEmqnMGG6JrH4UBSk6rc93t8c1KgjoXjCfTeomXw1uYeZaiB",
  "key9": "dMrT5nbhQqfFJb3NSwwobpL8yBaadKH8cN2H8eXsXDbDtqCN9Qs3HkYfS4PgZqFimj8at4SmFprtqLpSPus3fjy",
  "key10": "4LXUYNPH6zdcVaV43phD8h2jJhnFbiy2pqNwrDaT6Jg6VjRim97UdZA5Fw51oR2jB9neN6LxmX3wAJ2U4ExW1HUv",
  "key11": "3pUBxQ5NEbFMoXAdHzGyAGBXBZ8SXNUKtUJPyAhJfJBgFScikQ1fjcyNMyrFhJeTyHgKv81oSmLet6U5pcfbHFYd",
  "key12": "2ujs7D5iijWTGBXbSipgYaCRvLzo5eh5fx7EVPjX2M5M53aGxqBgoBKqgUDrxUa1crMhFJ15bcQgskGQgDukMSFg",
  "key13": "46sxHVV9bv9v5EHtgFzDYUZpAbzdRzLx14RhkGQ8CUfjqxet7WKdEg41w4h6h63uXBvaam4RWSs5AXoB9kiYh5cJ",
  "key14": "2sLAVkF6wGFbn2tD48fdxfFdF5umyBwrBq6Vh9McLXVNQp2Z7KT9BzyjijFabRvyNy494E42BSMeVZN7AUST6kzX",
  "key15": "239xiiGzeLBrbBDbXZjy4go8NH6o2srZQjQpuEqrakG8y6fFRnLKa6LGhmkp612rDFbxcZNNZpqr4Gkgzpv3qu9a",
  "key16": "2fSa3U97wJkTkp2UJm2qFc6xoNk7i8uMX452BWcrZhJgSrkAXH9xe7qrPVa6VQeV2NWBKMBPgQVYMmJU5yZRv6hq",
  "key17": "4ZmzKs6MnPWqG3pWCLzQxaGaMotaVuNz8TSpZzqbT211TPDy7yrdCVuVvavPjAfs5X9EKqojoeRaXBymx6rgvCo3",
  "key18": "3y29TkZtD4TDunzBBy66QD4hCEb9L6V4gj6RoWUeEdZpbzVxAW3WyiJf344MiGy3dNAqCbhYkLHPFNjijskH9kUA",
  "key19": "Cm3zswpKwKkb2GBPTDvYmWjFLRnN6RQ4xStVAF5uqMLQ4umVQ8YYSxPjKjRmpGkL8gmsku7dLvPSHRiVQkQJYRy",
  "key20": "2Qjn25ZyQJ91KDFV3M1nVWrtAin8YxMghTZVwprjNEQq3vNnYc4oqeKmk1LjCxTgkuDZpkz9qhAa5V8yE6P26KjL",
  "key21": "42dnDC5VpyZDcD2iVVMvYLK13cXtDwiteDHhTYxQz3fPTTnCMsG2XsFbBS8XFiQWmWDNtf3MQ4BfUmjUapsAj7pZ",
  "key22": "LvGAtJP8kt6o68r69btne5WLQTc89U15sjzKYtve9w7JBm4HEX18kGteknt8W1Af4B3hkw577mL7u8TF9wZREGP",
  "key23": "fyxxJbDR1ekNJt8vZHoDDLKcTNYHAQYCKWsknpxhn9289Mk4wfB4SorN93rRsXdUePo9dNQjGvTfc81Sz7EVVh3",
  "key24": "2A5LaNkhZpzFTR6yyfxfFHMRgAAqT5VqNPGkkeedmhjQYPNuNahesNAqzPHCH7tQq8XnMUKrvA3XTJaTjB8vR8uz",
  "key25": "3rSw1nUEiW5Dyes5XymeeSyuhBD7mAHfNzX6v1ABFjuz7mTpZRmE1Qrb89sFe2aw6m6cvVFB92dbep8m8U3skSsN",
  "key26": "4sVd3eLagFx4cUEphCdRmC2GHH9RVQbGGNVapq2nEc8puLdQVNUFVKhWHqZczCCju8NGogKdvUpnmFfw2u7C7WKc"
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

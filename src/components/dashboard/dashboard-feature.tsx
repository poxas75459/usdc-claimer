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
    "4aa2pvHzqGKmgxPEDcfS8oYTvaRzLTjchFPoy32jPLqSSWQrsCar3huKw9wGZFJoD245DiSB4DSqRk4CC7BckX7p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LM8JqbR1iNBGHjBuXAsR9NWmymp15ASxdapgyC76D2LTV9Hs9gS2p8yGH5xADtTjU9cU86n5szPSjZBR1yrUuTn",
  "key1": "4NdF4EYVLgoeSDHhu8ErUVZ45JouHV3ZPjmoTGZXP9YE5E5Eask4v1wxsHyMKFGN3bLrrH24bERBessKVKS7K7py",
  "key2": "2heqhyBtXNUWvM2GqiCGZ3LedwgmCnquFoVhZn2P6vVp4CnJy8o9nAUuXFvFGwn1Ba63oNjREv9m734A4cGMABnW",
  "key3": "5Hm1PKo8MRd1n28X7cwnCaCaP1K7AdhtgLvbGj5yvFwkaaFDhxuWdmHqynfmDnZ8SD3XGtzPdzWTehsruyXKAMZZ",
  "key4": "3WDCZz8hEuWk8Wse2UPk8JggNhdcgjisM4BihnoeoHc6aghoLxQx1TnGo1PdRhGyy5HvjBUnVEJFT1oH6kUJoYpp",
  "key5": "5APQ3JzmuJkgKUJchynvD9ZebNTVyDdniUCPM2MYGJ9f6UkRcDRKMsmJ4moYUsj89fn6LirYmr1XgXxuhp9RceHM",
  "key6": "4gfC15UbwYSaxwuAJ2LKBAQ9FnrjX9GZjQwBr2TdHxqCqFPpN6yyh1M7j5Kyh6ZWkPofRnUQ9bv8SwT24Gay9bVv",
  "key7": "53Jx83jGQhRZ5zeakXxeYZwT2ca9VhwEEVf8SXnLGh1MAbH9L91xLUMgXzePebyfR9vy7ikYicg8Hp9WHPfcsrCS",
  "key8": "DyWjdR5veFjoVzrtcbfgXMuBP44S1DKRkYcpGpkKj5mUnCXQFBtYUUm29pVgbS8f8PRJGw99Qbr99F2N4mu14bd",
  "key9": "2ieG85NYsB9rju8QowEWQf1azZz54qWskfoXbSzoHXYKoo22gPRUf2zWyhHrZSeaG7qT2svwfsYZQW1asfZPipWi",
  "key10": "nfne3u7CjiWVppWZtUnXTAsLBFe94GNgzn2AoQYW1nzPcPwajgfdRVohTiGdnHKh7TKSeX6XLyQDyc59m3Gzk8J",
  "key11": "PKZqJrC8xSdhCHFFHEANXSqVMtXp4R3KBsmmdDDPbzT6Xa51Qx1uSkYSgJFyFzBX23imeMe85LWc6RBLpfcyUMY",
  "key12": "4yJ2jUP8jec8GHWukZyfRAmBYZCRH1ouDA724txKawgTMF713GechYLdTJczQQFQC6hNqP8opFL7Qa1X7vw3VJix",
  "key13": "3eAS1ta8KtbakYhk4YXUqJyzaGrn2pDCzctsMVxwbfcxQ85NYbhjq3nhcDaEKENBs9M6YYA6iektXSezqM3Wa7Dd",
  "key14": "8X6C3qCZKmxUptFcgYzwNExGoKiDZuoQoooDTRvArfx3YvSV3xBgdjGnf8EpRHjWHwnfdZ12uWQNBSgWkqvJm2o",
  "key15": "2tiHHzrHJzX1rmYkipWiebd5G2UKgjvHwygYPr6VxhFhYGpguVa132aWX7183hD8BBug5LtRQ7xjaTHvhZSyo2VZ",
  "key16": "4YMfx7iDy4ASzEB6A4AJ6BdGF41x8aenTxykb4AHmvUoohzhpcji9r2XRhBpvp7mEqvsPDcjPXpe1GsAxNy5hxEe",
  "key17": "4bebrVX1YYb51b3iGUJ2A6WAjxQJYCvwY2JqKwxGiFT61KtNjbhrmRjYdXgf95kPRucVrah9TgR8H5aF8Fc2zYeA",
  "key18": "5S8ZKc88jmZwZZheEUBWwN8JYUM2sZeGbpbKKWe3FZSyjZbcYLwzyFnjibw36JmQsa6cRkvbuNcyudjHKhECLNZF",
  "key19": "5286ioJPq7omRXpVqoFE8fDppujvwP5WUZr2wiiw8VC78VZw2FsB7bsbuZ2LVBMrvTFFAstrEZ94RmAxNGfRxZtx",
  "key20": "3eRfqMV3G8qYXx3sTvnEe9B9ze2uuR4fEU1Ypj8yJ1DcE5n8ACgPQ3HQFDZfgBCdaenoKynthaKCLq8bNko2TkDd",
  "key21": "5Vs3xK8WUWmZkicGG1RWwzcUtki7Y3xaeDbzBTs1r9j5NhPHEwKJgaJs54uB3f45FbNhBWmfXvfM3xx9zUTRVqF4",
  "key22": "XJK2rmVDTfHk13mFmZ1Uc55RLo9g7JxN5wsoGqLLgbTh8HpTAGmxUGeUpLrX4SKkhLnePjGQJQ3eRoZ5QRhSmi8",
  "key23": "5TfmjZTfGwMKEp2ut2MGuXke6TZVRszBSBxT9KhF8r5yNuKLWK3ZftrLiBPo3t5hDYbXz7TgcZJEcFcXyWbJCq46",
  "key24": "4Yp98kSoftd5hJhEQrwiRJz9nfyfMCxThhJR1mZSoQWNbBtMKjsWcbNnDpJ1ao7x65ZrXLvrVrEchDDSzj6fekLr",
  "key25": "YPuESKYV7G9o6Af8EoXD83cHhjzzLcEGkkPj71etqFY2Gwho4RthW51Q9gtn1UszqHaoGPipiQLAepQw1pf3Ghr",
  "key26": "3HZX4MxL1T7DJkNt9y74aHfWrg7R4V9eKSV9wZf3AFY7Hn85tginjcfrDzmZwiE4hHEHXit6nR3EXHDTZxUR6AU8",
  "key27": "3uymnYbgF91GbFk3WFwmCkjjeDGSF55k53CVgkavBnrQTUeSsrpWBwneaXurKtezP7zeST5TsWUPWT7uAgsioeys",
  "key28": "62L3uzcVHxRdPTx1xu4PdzaBvYykBQu4MGqr8brE45BiFrcHsy1QVs2yWVeaUV4kZuUjs6D6xm1RjLujk9788ZF6",
  "key29": "4Bm4a6GUMbK27PY4RC4DHQ7gbsRoZwm7N3dnbTDRt6WDJFhdQGkqgAtmH6tnVBEWwk2RamggXE5Y79UZ6DrSZKDX"
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

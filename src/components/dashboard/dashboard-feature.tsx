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
    "csqN1tMLGLSVMSRUZ5rAFg7K8qQ7EW2gF42DWnLDkwVfhJbqsMC3Jnkxg5vMgQ4xagTRT7B7XdhY2qWBorP4X3j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sqZFQWy9PeZX56hCL1htmL4oYqb4k8MNboHtP6U5nPoT6nLKTAXHXcosYr62NgZz5qznrWZre1eUrejunBaFXeC",
  "key1": "3ASEGiGXbdPC3SLdsLGmyqwfYscFcs4vCe6zwyDc8iUWL8fWf1gJkZ9QCdANUmzzRVQ8QQF3qqdAsJVBoJuCgX3C",
  "key2": "TNHTwEK1WkPYys6WQskfEzo6mELqX3WfRqfAXmuuabPbXFHSqc54e1JNth6hgjZhco7rcAmaWkEcgwTK71zY5RQ",
  "key3": "2frHoyVNWbQL19obvdF7ezKqfu8inHY7DYynxS3XQUUMzzMk3mmubQS3EFvm7mZCYtNLC2Ap3hhCFJ89nYutizGG",
  "key4": "2zidoQNqrp6ikSgSv3bQ6gXZL2RYe9DbMeMhbLMocxJCEunZmBuh7dDYeReUPJ9swntm9p1Mt42fhejGBDUxTM5n",
  "key5": "5ZErJhe6yTyYyUbAaAYxsPSgHd5pULjeoGho3xx4mH29AsWRFLWFAspHKHKaNZkgaAeURELHKu5DaJtbyrm2Baez",
  "key6": "jxD3qPGfVKY1QHKxU232SD7gzr3pj8c7y4HBjVrDrHxfyRH6WrhUUH8yttRAH7vSsvmBq38dAtkuWDfdUSkTXqn",
  "key7": "25PrcErwvSqG4FKBz3jbZdxWVhWdQ6CbHroN33hF28HdTAzBzJV4USPXDYJbWg4vJeWnqw7U5XB4ZQBLqBNZc4v3",
  "key8": "2pEBK3kkvucgXazXPNS98kpb2YpCWuiGtSJwRgRFdsNGvzmwXACdCuWDgbsasgrnALrbttvpuVvTvBZnnm95etZA",
  "key9": "5R3XecgwxZwDLfKhiiANPMk3tLT3SgBftBqyYjF7pte6RqhfVYxrsE9emBccDFYJ6iykMnoynaFWQx4FaMnGEkEq",
  "key10": "5uf5tgbb8yCjnaU5iUHhHekd5SbjLDNSTxd6X8qmnNGBVo5zUhM4bsbFhTRmRCDY2BFpDBo5qbuMD81ikAK3xS1P",
  "key11": "XapPMwR77u146JPWTX2zBeSY6QbcqNwHKm6AuhZpE6G6NiN59pX2qnDM9j2zmKrL3T43cVh7FqMKumQtbsFx3eA",
  "key12": "32dszmgvXMENwActwWpsdGJLRQiZLdmXxDzfhZ9BRYKzXg2kgbqzj4PB96RnGERg7hao814Dwdk7bs9X5YzxsPGZ",
  "key13": "44okBNuCRqJ29DqtkagxtJrPyDmAX1ztRVqW1uVtg5aBPEm76J1htFZF1iyutqp5WPytSMC4zC8d2F17Mk8XDAKT",
  "key14": "4VMWNB32iPt1YC8raD3opp4rUeacUPtKfmiE3AneMAWS6KjCkJnifAQsHjSjrnkFemJA5QWf3veN9JktGPYj4gfm",
  "key15": "5zJJ4sS5LQXSt6FzLFzW4afVTWima8NWaqnUMciPKMyDfxUrRekkC86ivhGY3zjaQeCcRCnTKmTa5BCdzFTaAdRF",
  "key16": "65AotqADq6xsvh6YVvpkwPMygMwfQKZ8a26uMW9E86kSGYi88ekbbYEdpysm5L4x2poWNLrPGcTSWFUuy25Tbz7",
  "key17": "5trzac83GkjdKwMwmaXopzsS3EGhcMCnRqfDw9qVXWQexDCb6rRRYe9RqHwWSGKUuKHpdLiebw1Zpgs3ACoy6gSy",
  "key18": "24qqxBgxzsW71ovT3XcfvXZCGvXouTvpPdcdf6cDCHrdsLsRahDvTDPqnMnZBYHscKRwQ3hmjfHgC9n91Tc7HGcx",
  "key19": "5uiLRXtDTQwiKhZgC7RgSUvZKg9dnDcBRkq8V92beAipjU2P2d4bEW5w7WjsNZqzbmYg2uwkzHBGYoH8pKJdbojG",
  "key20": "HnXQTNXiGhffMA1RtUX3739GTJVoTroqqq4SP34ZV46hBjEJhogrUmsofWo2yS3mYY7Bks5o6J9JdepoDX77vDE",
  "key21": "5sQcFsCCuSxcJk1vpJoADz7jEjXsPVXSufNHSHNLP7U3BVpcJPAM7nmDUnAnPyHRt1ku38zW7PytBChFegbUgmN7",
  "key22": "4BL5UnSz2H2GHzJTnzJSmqdbBLZHeh6yBENX6VHo75u8Y9fYsEwTBZcKmmnGMAthFakK7hY3tGaJj3zdxm4TQjCB",
  "key23": "5pGQjH6CWuZNHBkrz6jpCAiLnYJbqhAn3ggeGUhF9n1ifJDi3JwKGs4Kea1dfXVZtsGBuRMbTwbALpkuBS8pTmBm",
  "key24": "3BBTp7K2shzfU6EMwYyLqstUjDAB1MCMp8PM2oXuNSyLzh4gZj6TrZXya5r898FvhkuRrcsJrg7cNcWWK3SpANZg",
  "key25": "5EmWddkRh7kq7CQZ4e9gEHybqxWDgu7CDAyfMnsCjLnxXgncAhcgx3UrHWSPA9AU2dtKovA5AubnswcnDVWSzuj2",
  "key26": "2yBUUNWZ7BAT4M6qkgfc6Rpmyhfuhjn2dLLjxr9uhWArbjmv4LxrP2jtg9uaT3uP6MZokNRDH7dV6Rbf1MBBbTEq",
  "key27": "2t9DzUWdt2C6DDhGfJWuhSpWh4Hpor9osd5aacBbcqbwvbHBdBjArureZCccmnS7kxPpcSAeEtihiCp3bNGe6Rmj",
  "key28": "4AU6VkqAEsRXHCg7LDGHVQV62fcY8R6CBoHSA7PvkhgZN3cp8agyo7o51xJctWCEadCsutuaiB7hJkTta1XgcBFv",
  "key29": "3f8mWVt65Ax15ajdX8WALpNUkVLAuKwokPhUpQhqeSBaZnMJou5jTXapcsxBqVJdsxdYv18zmkrzBnhFBAhtZQfv",
  "key30": "3NiXbf1aH3ScaV9ENeXazrY2DNn6M424mZfmwtYB6jkdTSvBh8MUPd8m6BXe31oc6oWvi6XoeYZKyaL4GNfVGTLj",
  "key31": "63jRer1Yt4nTXNUuRzGCPMKRxMs9oU2xQU7oNEFCzCFxZ9V4uYNCdVsPrf57ATBV8bREArN2WmtyKn2UF2thMGkU",
  "key32": "5S5zk5x8F3anFKPFKh8sabPEfczp19fVhAHYuX5b6UKEBj5Qmq2XAaQKjQRvrb5rJAMCK5giQrdhuMyEgMsTmdec",
  "key33": "4kQox6k5Gf69h1X7qkMBf8oqMvMhv25oBarQmAhP5HYjbE6afXW5ttymgevhpqNRrQwEmBedXE7yN54ZWENg8rcT",
  "key34": "1q9hZbi8FUnhrHowCjWjddfCRmq4KLdvXWmiQzUGqHcQZyBhbkDeKktcybrLoVHRgvWpVqM1CTLCcGGiABfaiMe",
  "key35": "qXGF1SdZTMKMAeMgYqLFeyQs7DP3TCt7CYQbSpfjV5w1uQKeJ3i2dNkukyCK1QgVhmy7HCbWqP3ByTBRkEUeEr9",
  "key36": "4gtvAwGvQ4qHiM4HRFCCXjGNVmshbePxK2ExMM9q2sjSrrnjnAwdJz2cnh8aWgijvDpoymXX1ZHJ1uxuQpQ7GEzp",
  "key37": "273AbTjrBhnpyVvjctBn8Ki9iBrSSRrycseUn1qhhSt9aG6EkVNpqCpEfK5h4fXdbasTG4anJxdGYgpXs6pFpxeV",
  "key38": "5UBucFBYXveJHho9tSNPEcUTGqodXLEcdfEjPa1qWDD3DemhUaHbT1ootoBKzeC23zy2wXKCkFX3coG2avc6xKbn"
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

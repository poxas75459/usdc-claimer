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
    "3Jr5WqmxeCHDkkKLWiEUdaBEjLdupjA7zak6e2xPXx7FeLrjtfsoi8kNXFQGMAq5jtuFnorqfjgPpvmZ5YR3v1LW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ebLpexvBhQVuEebbWi2bsTDjtm6xnjjZZeb6dke24BSpMbc4j4iBr1gq8fp2DNUReFMR8WWjDmFpZ4QY1tKfPjf",
  "key1": "3hZ3gQgHKUvsDz8mhrV3p8o4iPA2Wkr3Zvt7e6UZU44sJTVbEFRjcTvKXJap8wicstiUeDQ4Er7Qor9KrKh6tdUc",
  "key2": "5fnCFa1ybtdykxhQu1tLUFyPft4UfKuJfzgq8yyrvjokaH1ncYFZdMzBNSEymEqbWW2nVtpFvVoHCpaNgTXqUbBz",
  "key3": "2hu2EzSuXziwu9B6WhnroQDiySGdGHLvLtdGBp6J3hXhK5MNCWXon7P67y8QjhQEA9yDkpRvQD8Jze3nhfKfYe9A",
  "key4": "3WejVAYYVwqgpPexMVDzDArfTNVJm7D4FCNbJ9Yf4JpNNLcUHGyymBPGEapeTuNW3JTXvKtoGFPoeNEa8ThtFRr2",
  "key5": "4cMg7mHK1ogdp6m9buWZxvmfJtaWAyn3F447ZuXRMi4h9iFcE7wE6MiAsUiW5zYw1mKA7pwDGWzu3NnuKKkDtPzf",
  "key6": "4ZMGVHopmzHRuuDYneeCwkryzFhqMb3j1cFNhnngmrn6pkFYo3cYVS5BXAs7DWfe1Jx46bV5bTJ3X5xXWcPADL8Z",
  "key7": "3jMW74UVNtnMKpm9DDhD8A6VJ1TM7B5hsrGYDsmUYRAwAjpQ3M9dYzWoAweVT2LKYLjaB6wsJdT1iPLXA1wbUQu6",
  "key8": "4vKaGd92s4Lsnk8LPQER5hW5sCDFVgTxijXet3RdNK4472QU9zHfWZXT1ssBevsUPmBs1zipynVjmCktvyFqE2ve",
  "key9": "2Ft8x1d4Rs7Cia8p8Dnihyb734hm27pDEgPKWbis9vFsJDucL1GkjQstPQDvZFwunBKzk47Lo2xhGfBSLJSWiq2u",
  "key10": "HK6MMYLSYm9LH3og7R5M19jMBRYJwv9hsMvw6Nb1Puqmtwn4KesfLXz4FNXKNMtX4umNZcHYzpj5fMBjbpa23NG",
  "key11": "59efUncCBR7tdL9ijhHEkAKtYWWjd34btwkdfgEVo6BeUAtt9VATBujKuTgD3WbfsX1UBSyr8b6df2yYLfyYpGc8",
  "key12": "4uf8CxjNx2vvgTmzRPsdmzqssespDVgHqa3AH64gRofmK9xRL8PSrViypmYHcFBSpZAAuHBBBHAvuWnB3jHLtiE8",
  "key13": "21mRkb8NhYFJzcQyFevY6Gjd7rhGusafuWRWkQrRcQ2ohsK8jJY4z8hb1ksAJJJeSpHe3QH24mx5kjVcWvwjRbKG",
  "key14": "4VPzac6ZFSLRXeum6zFfNYmWgfAqd8ttCS4sr9d17qUxVVmu7CrEpaWCg6KTSjYeAKhu3cTeEdLQnj2H12NjKe9a",
  "key15": "3Py3BrbH8nVYNFDtLAz2f4jBaX67aSkxtUhjQkZFRwkosbroVtCvVGi3qmdgkpAdShvcGZezxCPWs1CQQXchxbUk",
  "key16": "5QSdGw1S7qEiJLV4b2hES9SFTGr9NWtMVKTzRJSK3rbmyozKBnyXSBnWr5Hq1TwpfL7yaRzKxzaw1h6rJ3C4MKUA",
  "key17": "2TBWUhfDnSDo53rLoDfjw1JCWsrYLaYT13bai8gAPdEMow3HovsTtAyt69YpyMqoZouWTDBVH7hC7QXhUfFdngLb",
  "key18": "RxFwpoRufBCn7SQMpsigEJtCGra6Xk6C4HHD6RPKJswZav4JdTcNAK6KtsnDGXFNrQNpb8PeGNUNs2bGHZHruzP",
  "key19": "5G7EKXn71ob285cXj79Tq58XXWayFzLWMAuCiTD8YqhFwjYRZafqtuQpKxoMfnJXuqjJoAS1qwaGD2aVq5opa2ui",
  "key20": "5dyLz2XoG3aw6FGkiXm8XwFaX83Ri9F3n4rQbRfekQi7CrM9UVEPWUxM3Rg9dvdae8yFMjjQtzcY1pVucavriZdv",
  "key21": "XbMRiMZrevchYsATK8Kn7yan13PxWBPvDZhQvbv2KZgg5u4Wf9Avu6cTvJutrcJY2r9rZF2v2ieQnJQhMgDv2HH",
  "key22": "4tsLipgcx3pD26jUTeNFKz4s7UQQ8rpxhb2HGhM2AGcQB2WtijM7Te8Bs54sBhKt6i6r7oK3r8DD1kcVakxdsPCG",
  "key23": "3P1YfoPSaq2HW6vY2X2uz2UhDXc6whJ5S7T8XMYZpR4mnapyob14JFweW7MJ1KeFLN8guCQKGEq2yeRtybLdVKS8",
  "key24": "4cc34vpgh9eUNnuJZWdbPgEkR2esGM1hKckjVpjxAaD2NBtnXcFxpvD2vEYHXqtTRV47MFdpyek5hnAra53BR6sX",
  "key25": "5AN8WFhyb9VLFvzDsYm5ewr2NaMAr3RUe11EGdnbpBpmZucNHM1Qd9NRNQXrvk6xM8t4xqsLQEdem7CYFoF28xnx",
  "key26": "2h9JTgUYqz2K6kwCXKC11VwtaFjBc7t5Cb1mw6SNZeVE5Gp16FKoWgwFG3TnXNboBKb125xTiybFfiFCPTR2ZBx9",
  "key27": "3mV7QaEZ3uxegG9Z9De8bTgFQTnjbG6byuWBLi7V4gDva5fsSSZvmp8Ma8d3NHbhgSz4KZwFnYgbmgLkhzLvEEGV",
  "key28": "3VNAx1i2uPWgeP63YFCMT2L3cbraSbCaWtDHzCRy4HyBQ9cc64kBpUShpGvsk6ABDFxPvdDEi1nq1S1UdXqz23f8",
  "key29": "3ZhH49dw3UFgciyMRX4p9vFm2QfY6cCU6jsaLJwCrNE6Fpy6ofgFVyVn1SNpUoJhHrynJC4nZqaWP5gKHptAVFcQ",
  "key30": "XDCkdsqxwcpHxN2p5Egpf2SEZxPZvXifg2bzmcKTZrqhxFdhLWsogVCbs4kgWPf4kKDsx8nXoeiq85Q66DzMXZr"
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

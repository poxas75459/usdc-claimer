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
    "3B3VM8jYFye84x1JkrrDiq9kPej6HepVNvgnWzHN6gJqEbVWu5Hs2a24CTZnTpycxkESgvYvzp6BcMjA1jNzQr13"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xJSNiJQzEpv9LhmJNWuQDaURQn5ajuw4HnK32wCssx7f8LFxyYBeNg7GMzZafiJjyw5NFyFvsAW26qxukSDD5j6",
  "key1": "295WsXkbs264mdMrwgqve4iBwMzpjmm6s8E91wE1Yz3j8g4G2aP1Y4iwsQSQ5VJ4rm1rgxKE9fpzTJynCfRveMeC",
  "key2": "2WMQMFhu2m9p5k7YDDu2uA92YxYwswN7BHyXkDTNGwJvXjtMjFhab2Hqi7VWbvW3bTweWmdZLCzd5ULddrYn3q1G",
  "key3": "2GTrXhxRm7qgJsw2mRhR15XUc3q15EMh3UpAwhCQPFG3PNQeu5ZXyeanGaiGDbe2S5vNUwDVhKWN5RKy4FEdkBem",
  "key4": "5q4bDHFQdE1HmXRfwk5HQi5MdSNhXBW2162LVoskk1fTcshwVtdgWoh4qtBhjpT1reYZ32E7NJKxAEch3ftYcX9",
  "key5": "58BpAoqq4fSk8pQ6a34NnJ5ZfaELQJbTQj2iCu3w92QrDYYzc9ZuyzNnGJBKzDwsrPXZHyMu9o2FT9mmtfsJnSgK",
  "key6": "3A9PhamvtCpmztYm9dHgLFFTrHVJN22Ea3PTbG8houriqiVSVoGkWciSQ782VZdUQy3k6n4SXu1XtVyU8ZJ47R2P",
  "key7": "3g682hmnxUmRKqtDu2PXwZsdLFDPJoFrHyJrso9tN7WuakqCDbrYaxvtGwP1U3a7uyLaJBL2v8iLN1qALqJSRBcy",
  "key8": "5UFF8sDoYW4cBj3U5diE2cucCtBniMAhVZYiG57kx1XyyiAXZh6Vf3VbKoKdCSxGRA5hytKJHfh7pU5jicGa537M",
  "key9": "KT6fyvUrAZCiA2dtcQoReCndd5jZ62QEjJCEUPb293ahti62Ujp1Cc2aXdTFZXb2iK2f9vh8i2XLwDonu2LUDoG",
  "key10": "3N6HmHCchdDZSbJULyey5JMyuNfB3Vf4bdfi6PhdyC8YDGsHfNHErLaJyAPGRFFN4J1oWEtJawKmDFQCs18m4nr7",
  "key11": "28nv5Mm6xh8UAMk1vRXVudRYrLi7Don2fk4MeoJgP26zdTTCYJMx4aiUt4qq5BVxRBntTUmyn7EhnHrMocxUfzG4",
  "key12": "5AEcYw6U1oudXyNppPbkoBeAS24yZpsAS2QNNMaknZR82JHo5mPN9YhfZRNnLLbAMy3hz26S6Tjx13EASxbvXci6",
  "key13": "3Xb6QVCRpDjdtUJVtfT4hkytkqcQngU2dG3gvBhqfgWewDz2JeFddTJ7jEzBSLLuHvXd8eaRxZQZYgMLPv6sm3ty",
  "key14": "2TwS2PSpif81hU3i4HMZVxXMRfT97HH6N8KZfNoMEZmj39rU6PwYDMv7AAvrzuJd5wKoEpFvSJd2f569zXyt4VoV",
  "key15": "5phgpRNfjBdXsb67bMAY53AsNGcCAK475yzufwX91yLZpEreuUuaPjHg2xbABHHXDaijW7L67emuyqcjmfjpDQ6d",
  "key16": "5nR9sVGRAWuBPGZZBTTuenh9CuMqcqLP6Dw77hNgQR5fUVBvtyKisBUSEBPnXE9WpyzdaP9ndNBsTHdX7JGsDPDE",
  "key17": "2Qs3PcNpSvUKwUapfe1zWLi6Q54jYVDPYZzMnq3dCqjYJS5DEvye9BtoKeuYiZdbYt74RvBb474AU8EQeKFGkxiJ",
  "key18": "29yqxZQ4TksDnHwkKBw48NsRvWtYjap8Efh5BkiWZno1Rv98ZyKogpTfKVmxYmik4CFrncgj5uuDQRTs56YCEFNR",
  "key19": "4e3xEk9K1jnou2TSxPQUmT777FhTG3NwysJjUuvmdUe6Zfv4P1UAeH6Upa4kvGS4TAbL7sHa42f8uQoNcZq9YZyR",
  "key20": "3vynWCH5x1STEfnmNotyREd7vKQdBKo2Eyr6JazP9tfMD17L8KQgA7SfsHvr5emFzhqom2uWDdRUykAAnFJQ7nr8",
  "key21": "NKBnNt31wupSKRVHvnFRfkLcozpvr5kDza3J2QQZLUSxGRwctookLGY3cfoRyR1MRtSVfdrrMHWdQv8hM3PCUqm",
  "key22": "4RmGMLwQjC8fixcULnavaENh9nTbuzYWUPBvSZUN7sJY8rz19oG7SABf9xreew1T4cfu7FXZ4o7mkUzQPfqNgdeh",
  "key23": "4dE6ZNgkxPHpavYyEDHNybVgLAS39VUPdDVJYarAPFfyY1XQmZS96dik3BNwgnJWDcqvQgKkzzEtoRRNMw4Xioum",
  "key24": "5hVYwb6uKQB36MgDJUBsgLSLBMx6meNM5axYv7fBF5Yk9FDNrYamri8PwHumJHop5MoZ5u79ByDTPvbJVqmruVfj",
  "key25": "5g7ttYvfbcrjsNAAMvduXtgB3ZTNqbxEbRDUzmNEff2nN9jUqUBxC4HHZUxsbfChCcCcxMdqDbLWd75gk8uPCwbF",
  "key26": "djuqiA2B5TQNCXEJSGEtZ8o5Hfm5kCNhKoNSzHMwAuxN5DtrmN5JRJtfR9jW23qELKo6GbsiBrGmgau54giPz87",
  "key27": "51xB4Qk6hRmjuLdqkNUbr5LKRpsUem7Fk8aAs1PTGCJEtgRALdVyy8TL7fDrsguTQssnG6oHcg2FbyH2DoFqQXb",
  "key28": "3R5rVSYZW4j1famHUPiV6dbuVmPwzEJ6aa5GpCUXSsSMbLjW3m79wFHUz7UNumYURG6Zf3haS726aAp7jouvcBoa",
  "key29": "3kmwmsATZdg8FxZgmecjeUpGt9QLWnn9A6PJsFrB5TtFfirawyvxyrfpZ5HWEnk2e4NW2V3M61z6r1ANAygDrBp7",
  "key30": "2SbkaCAcgrCTxbPmnejE7X9C4naYV57gekFXLU2GiKZjeL2eskfu1Fa5bN3Z3HsjCVYHn77Gm3ej1C1s4oEeDr8q",
  "key31": "2A3cEn5S6gaVxYtk1ErhnWf6QTCGuKVxuSbDgxbn2yKActNBCPpTJavHe6TtQWLM4GvnReULmJyyNut4Qa5cGY6c",
  "key32": "4jwtT2xYKtBQWetrNqekuWUzitMSYKKEPC98BPnfpp3R5LUDp98g6DiLbdMa36LMKCVRsC1DgDchz4tUXJceS3ZN"
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

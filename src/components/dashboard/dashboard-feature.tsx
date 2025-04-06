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
    "3QYTUdN8vsS6zHrBwSEKVFfEiQarwNxb5GJF3wdXjMiuTgwoVBjh64CDYRiLUk1GkGHoSBkqBbMimB7QXjBu1QcV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MHWXDjhZeJ2man2iRMAVkA9aJgq7yTmyvqNjd8US2pYHsHmqo6t1GLZZodsRyYnLLEngd1PatBy8w1GZ8G1hSic",
  "key1": "37gvfwhc1ZUdXN44w84ysYWHy1KFJHdc8L9z8PmrCzZugeKzdp7X3iVQLVqEkmtYnc8f5ZLVp3Xy8fhu9rPnTfDu",
  "key2": "29LcfMBaGWCxzN7F4G22VcpBkgURgspSPNQ3G7oKavBjYY1NW9oXBK3hCcAM1HkZAKZNYuStAqYSPot9fJCKDqTb",
  "key3": "dS9cSCJwx6W97rCFY335ZZn7gBKmMTAmoY2UzmFzuLAQ9FisWsGEMBULZN8syt4NxugDjgwYwEAATZCiyEAA5Ue",
  "key4": "66u7xKAYNUkXMEkM3KwZfJ8MSNcEFoTjrp1u6DMN5kSxdBQYWMmGopAeU783oS8iyC6jXuviZbFnpCwdeDz3y2Mw",
  "key5": "3QNeGjuSS21j4bQPd6adQtfjjPEyWcX9w9i1BE2eHNRGWbHKon3AKrUEetbPXxHjUUPANcEjUAf2KZVvyUagheHW",
  "key6": "2hohDH5T4kmM8xGwfqU8wM4wKBpPJEqLLyFNTM2A84c2mqzFpF6MjDKraL8eCTXdzTGzUAa2i2kZS73pHLfgx91s",
  "key7": "4tTx8aFro2jQovPtsB9vpdpeRQK3axgLETpqBVW6A7a1R1gNykE7ubzdnStiXhwYuuwVZPyr3nxSbNmJMasjyJWp",
  "key8": "Yi71AZNQaBebFHzdMv9qY4ScHGz3SxxvMGLyn8kApYd9qbaevBjpcoEhNzind99oVQ12mbnCz8V58QJC7borfgw",
  "key9": "65iRHymzTCr8SUxyVvhGH18BYKfWqDjcBxTqUeHMach7DpJezNTs1R12utsQw3MHLxHEJy3J2rr4piD44bnvGAJt",
  "key10": "3zgceD7Smnwi9RZGgnxCwXMvVBHwy1fmFmv5ifrUEC6fGLkdrGS3eDXSTTfhfwEDK3tLbXPfhVkzL1vG7ebX3ha",
  "key11": "5huaBmKV4orqajvogz4hK5BVCw6vdEEXpycdvWcP5ocUAMHabeLAF73KVaeQyvcMvQXYCqrCMBJQzwQ9jc6Lrvke",
  "key12": "5PyMvRKWSKjDHWVqaRGALj7eHePSyu23sdfXGkHcTmUCGX8E6m7d5ZaT7KR5zHBRtU1BtvgouADDeLXpMpEsxm7h",
  "key13": "2nxTxSVBQj2LhcZHiUVEZ1DRALcYcWhnZJB95MUbe7fVttMt4wv3qsgaYfeHhzmeRMZokf2YJtsGn8dYaFy5NVFR",
  "key14": "4XN27N2Y4B2h12KfakPHCCekYRt78tZtXuDbQoPrw9AtqtgPUBnbkn5T5m4XNipUruo6RBvPEzXM3JCXfuv5j3ep",
  "key15": "NBfVr2w6YBJeozPMGVuVTDPwP1VFVtKNJek1vKvT7iaHCycgoTrQ6CjWVpmLMgdSxbVY75zVmMz1cWLuCiGoutX",
  "key16": "hBEggo3wJJ9AtT4z6tHjS79MDGUXxbXFBgX96sgEezyrx7gUxYwerAyKa4E1BQja9V6fjfFYJKNZFAwUXQU1aAD",
  "key17": "3Ygvnf6DejswYRoJPgc9utykv1FQ2xRRwiBFZq3EjGcrSAXKzKLTjYqdoX81d8ouJ5tDybvMzCxafsp9rxmYmivq",
  "key18": "naztVTGMrZiins4erXb7zx3VtJY9ANvgALZN7vMYVYmBouTywRhqbqkyFD43hgi6nUiEn8MYs99Sh12UbiqCn2i",
  "key19": "5cSos1Xuib6QADhRyRTez52Z3UR3wc8Rj8rMKGnQziL14Wtcf32F7g2NJi2HFmR1CFKnwCM14rK3cM7pmixPCabk",
  "key20": "4tfS51doGkSy3t7npPnpusmnFrAypiFJR2ev6LiKzpd318xtcBdCxMbfWUVeGXi3Tzn6YJiXBvSekR8FkN8t1Btt",
  "key21": "A81Q963LHFDvuoDt7zpbntBtYULs5z6R88EN8PD8yqbDmGKTjK14fMiSa4o6inTSS3idqh23NbypSEbNJzyE3JT",
  "key22": "64k9ey9t3xnWKRc9E8G3uzP4Z1GU7pPBoretLEXmmVnV78fPVwTt2faa54NhgZGBkh7MrYSDkroJ5zPZLHjoUSGo",
  "key23": "2e6k91WZkoUPTyL5X7Rut7BnpHZMY98tAqQPHNKsX8qXjiXQWc4tiCzzCcjxAU7e5bi7MsNx28GRMBRhvkVQGkHx",
  "key24": "4KMqH6FoRXNcfKbupGPL5E3ijmJ39WAf6X3c2Hc4DrPUhHZsHyaXojA3JsPgsaeV7jKnDVbfw2YAvCZ12YSWQw53",
  "key25": "4DqGWhwWY39JyVzFeo17YB1sezMPoTu9gJqedHSL6sdupbE2FqNpqp8LVoqUTZ58pWQfm6GUVGGop8SURxCeMoEu",
  "key26": "kSkFCwCej6fPzKWrzxgZtm3TL7FRsxqG7MmNH298LBqnCVudAnWJFNqmfR8wyQGcba8Nx9DtJFfM9RXkKBb9gw1",
  "key27": "xR2spDpUMKyaLcb3QX2H3uH9gM64J6mXV3feuwApaF6GYNEd7Zgfc7FRKptdU1Tba2bWLkKbxYzVgDPBT45Tedf",
  "key28": "3hhUbQtHV3ypkiGjkWFRz7Xa4EoyDGWSk3fmQFe7KzZryjuBEjaSHzvTnccL6v9dcr5uz7uScYCTtbs9NNNuExJx",
  "key29": "2QuSvYP3tsLauSEd4pwC5w6PM9Ae9juRpfcDJqePrs4PxcXPBJpsGw6DgBLCNf7dbPr7ciNisuut64aGLSJDXpG",
  "key30": "5MLF6EjDVtzDNYwATwfLQL9sWe9hi5dxoAH8ucXyVEpFk2FVn2VfRyPH84ySNRUahPmJQjRyPJ5j3oPhGiipNQn2"
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

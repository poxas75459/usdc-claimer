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
    "414zsFCYgBvrz3NyoetkyqAKYTJxTSwPqjJDLgUk8XGQBusbTvm9y3cTB8JgPFM1iK2mR3C6PbnX8aTGQ3XbzJZt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LLq4VyP8mVd7mCNJbRv7knMQgZduxXUstS5xsJp4nBqqffVwTRzDEeHFSsBT8zLYeCyVWyc9p2U7akrARxjn7GJ",
  "key1": "4TxC5hJBJrWYkkYhs6Nndq4BVec6AgVY8TLknC7MD617yoL9eioA6LhYjsZNPaq5XFjSEmwB9UmS7oTiDfoCd7sD",
  "key2": "3RjMAoeuZULsJuRGpqQngm58GqNtZBJJH3L2kLDfE2bhxu87d4S2gaEx7aK1TFZyRAU4cWKLV2c4Km5qsWjGmW2Z",
  "key3": "4BUJSj361hyv7F5WE81WqtpH6o7YAkd5qnirN8yYeFavg4TJDFXJBX1A8LUakkjPrFizLAP4DQQpPEzCkosDBJdD",
  "key4": "62pJVXsEWMjQwBYDCxNrm2K48nTKCWr9t6dbKbSwirYAraAcbnzsrMzMDZDxvWRoxMyWnUekAVTGE1khZvUA6M55",
  "key5": "uEZ2Eoy3G1xsdQPW1nbnNfQw9pypX2wHfrbfd5vPrX9HLPBMMLo8h1opB11cgtZ9mz1JyYh79YFnKPCnXUMC8oH",
  "key6": "124QCR8KaUkqmdv8JfveyaxWQEoAfuCXauYGC7hLoywd5GvzjGCRSMhcA7m4JKUWsWhPfmzQyJQhuFDh5cGmmDCe",
  "key7": "2CQnHZ8wWtFwpH9UpBdv5CqfEytjWYBJL2VU6dGpBfeQePLzPcQgrKNWBrHBe6EcBZwLtDJ71ZqhJGyoFNf6g5yr",
  "key8": "5C3YhXvGzENBppEtVeQ8LrYCRcG4Wy7BDd3TZ7LUVRTEn9xqnbWdjsSts1oEtAD4n5SeYaqjf5r9oQN1VnKRxVFi",
  "key9": "5QnHEtPNXqZu9RrLLa5W3xboDLfhD569qG1abFe8yEhxAay5o6DxvJq5zaxoKaBTgd9DpJngzFZb5JGr5LF6oC9V",
  "key10": "3ypGMxHxsX3S3S6h7bVcYm18yMYnQiLwpRSQad6EzpdFFmXEya1xGVerVAgNvBsgjwuzd2nMgxfrWAqyWyb3S2gg",
  "key11": "24wQX7FccnCRB4v6cRv2ZMc25Md49qqUsJPpPfvzHgZiLa5hxpHpGLL4rZyErAtrVExs1vwxAkr2hGECiBHigi7i",
  "key12": "4k8dWE62Gb8659Pijv6UGM8aJVJr9vi4748g21tx9nkYuAsoiseA6zUnfuzeTe1B2r3cAHhPbBFUotknVDm8nqn9",
  "key13": "4dE4qoyuqNmyxjJWwvqDUeDUDJd7ADL73VK1pPSEUWZLWyXMZwUWUb2qjy6o5rW35a31wmiLmX84L7eThVx1Vv6z",
  "key14": "34F1w7HPjD7U4mUb42rN1Bs5y2UE5PTWQLxmYVpbM2NbTwagC4yHAkg7SvEvP3CMuBGFosHfTkRs5AXjU8NofzKp",
  "key15": "s38rvJJhYfhLSMS1MR1PbkH5Y5YWSZjmEdnFWZjX8rZcZXY5LfLeTEMpeShTqZZd47C7PyMkaoutKSpKcCbSAvd",
  "key16": "5bg1MGPGeAF8pmZDcZR9j3M8YoGVKjdKLVgHQtzxWUjpjykXKq69sBp3kVN8AQtK9USPqqg8aqQzq94myvPLbWGu",
  "key17": "3oGERvG6CYQ2MRVmXh9AhxgqxbBj4fi7imnUJ3e4LQPoQ4BMNYDXpvQiigPn4o6qaNv2H8VFjH7g5YJS8fhgyCSs",
  "key18": "29E6JeihbKdSeJ7huN8KmeoJvT4stETsfMaqrL3jK6Sv9Pi1z6A3Mmp6eyMsUobzfLxgsHDejp8XGhS5m84pPnrf",
  "key19": "3URCfNx7EonNPhuavWqchBsZwRVHCRT1cCpvcBW1ZrHqaoWVYsSpcX4Ug3cgNHwvFGF3Q5Kkf7p9FK9y4dth6GGC",
  "key20": "5vVXwxQQ4YUh1JV5ccfHppRHjwam45otCxJMjD2vhBtGyawjkC1Bbt9pKAtbSCAxwoRgHku2sQSAZ6esL7Z6hhcp",
  "key21": "5e9g8qXHtmyHudLVNFYhpETBKsK1rXqJjtoFEA5Fs5vnD4r4oirjFkRzXH4e2hy8w8vqTfR7WPRR7Buec8NHE4Fi",
  "key22": "3nMGJcp3ALNGV6BShu9E9UFXDRbWsrNsDTzqMZJTne4L16rNx18T5eHeHN2tHEgWTdW4DQgVxo9RFspBoJV7gdxE",
  "key23": "5QiPg2yicj3T7x4pWuH2fvsNu9M95P1yYztraW8WVRCLotyYrxMmDU5gDj9tHwJoFo3EzxHwJte7dz8MLeeoSp5K",
  "key24": "4aRYikpVBH1RYXuwS8wBK2mdqjk3S7Hw3A4P6eQRALNeXTwun7SbMaUndntHUswoQWpMMA4JbiLjXDFwpJMYengg",
  "key25": "5wPb2FUmm8Fr8inURDnuCGPndE9RtN4D83PicAueYdGkHFS4tjytPPPTXPUV96a3on6g2ZfkWub9FKJeRavBC9US",
  "key26": "2QTiLNBiybT4Ushbqcir1VzzsSCA3ZaM57xLmTu1NYXc9gi3dHfX34UMzkqK61cRRzDCeqBFZzZVKPTS8ZKhNqR5",
  "key27": "3Uye8QK9WhSsKBVzp7Zoo6o4XPcyjkudPAA8sQNFXFCYPSroMiN9ENd8dmAxiF2Mtkhtxq8wQRCRuoHNUhgFuKWo",
  "key28": "36DeDzcY9dtbL9w4MCtRXrKNoBqE4rPaKs4xwihQfSKZnuqrh8ypxzPmK9oRd1DLpZAXMVWF99YWZrQX4jDe5za5",
  "key29": "2BEbTenKZtGmbqozQx4FQL6ZDE9QwmBpZBhgRRBxw86N9xtQidyWpU5AXJSL5HQBnDNL5e1AiZwLsRCudk2QK5kd",
  "key30": "5NLZxJvT4bt56akHSek3cs5ghNDgnzQqeGhXowD21oC3Q3K3P9SahdTYaS8mvxAfbMeeQWJCdaovHzJeuBvyTTJh",
  "key31": "5aH2mJA1UiiFPM2jenYF8Ge9MMceiEa6No88KwkL3Z8VSr7Eu1s8h26kFRhkf7gZmwAB1Xo3SHZSUx1vi2xMumrz",
  "key32": "3FwLrpuEPKGbNQtg91xN7gPXU6Q5sVcHF1rjnsWzHAoDr3m6xcPRbkuyMcsHuyEvtXg3mYoZfiHC3ZB5mxKD8FWy",
  "key33": "5LFjvs3nBxNGr2jf36iwS6TXtTP42aBkzBzXDriWNzH9pqRcoYviC4LmoPGBWiQUfCBSZFHG9YHnijbsTHrdRTLZ",
  "key34": "3CqYMCCExDkgAGDzKfCitFLV8feNfJb8NhTEcKWfMRRAYFXf38LTfx1ZVpQ5zWHSEdX77CKCKANmMA8SvtoiNLiF",
  "key35": "srq6LLEqY5wYfamziFW5L6kiMMAa753wqLLcR1r3ad4xwZy7GVhWLPJg4uazp9t5Rq39MTrXJDDiXyNmg1Jy5i9",
  "key36": "3g1NbBtTyDf5JEHNx9iUnkNdkh2x5AfbG5iBveTK2eHWUyaekzcnN6zFesmxPR6sMHRBLVyPzaV3auLaVXfJeDKF",
  "key37": "3EVkZqLW17kuYdt8VhAwg5fezidwKDxnLv2XDFuo9TjmDN2NY7m782dJdh8VQBEZyYFHGAmYUAYJW8bdexWTc8EZ",
  "key38": "67abCr8jNCcocUQbeudJWrhMDjk6vfubHfSFk2HUPkPou931EozYbHbgL6iz9wbkgf2mJR4LEEyybGaAHKN27YMX",
  "key39": "5B62d4mj1qui3VzcBPkNQdJXoPsBXSPWGxBbQxmhyBfbfKW44wNxVioYARQ6vNkyFTuYAAyCo3azNmx7VS9uFhsm",
  "key40": "2ur5aLVoH4rSr2s7W8rAGMznnqbrrS4rJ7LBs7oqKXHoTi8gEQ3y5ZZzUJDD3Lq8aL4X4HF1Dk4aSUMgGx8iwjLh",
  "key41": "5Grs6X1pfptuUPe5m8E3RFpEWEfqXNGzmNKiRLWyYHvLn6umnokpqCUQuPmAsoS54vYHuktZgPUj8V8jrxphBT8n"
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

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
    "j6hi4hBZQi1gFg9AQpJHbCTLi1zWSDvDwX6pYxQFV7gdj1nHtKpM96jPKZgeSN6bsMfVSLtt98x4HNUcN5LTNwA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NU3ifkHh4buip6zGHtMZUNUqCewwmbqkS2hJAWLhLW7z3cg9No4ZjcDryPnyCQKZnXxLzNeGrhkpT18crGGUd4j",
  "key1": "5pD9XhsBuofXy6t6HHUGfMaFP8dZHyJBaadL8dmgPZSxqvUmCypRyMRPk8xH682BwaSFH1QNZVvCFGzRLNPbWSD1",
  "key2": "4AeK1JiN9uH6Cw2nM8iYZ4v7BuWd84HUTF4XnuLjcUC2uvjVg5ZGphKnjNEf5JYqumBiEFTxrkmy8JHntyaSW14B",
  "key3": "3HFMk1UY4PDt9fySRzXFEgJoXY5qu1LPpwt59BWAqZLQThyFDiSRa27tkosX3xDAkk32iJwAgmgUWUCYdrdyosqo",
  "key4": "Yv7KQbWJnrkUvH8Rqvsr4zqn683WhtgrG1QJgrYd2wWGnCuVsBJ9Hqr6gLB66vWkMU9mVsG3WwgNAFHxpEQZEEo",
  "key5": "5mhePBE3GE4TraF4inYD98rBpHTsdMte61ybKrdRCLU4FfP841m76HBSsntCF9Kg3oK3d379kLav9pa4fKwpsb2Y",
  "key6": "KY6cns2dvdxFuYGdBzmA14ovR5U9tZEdugWf4SY6CdXBdN3n8iDD4uCc87T7gPFEEjzyyGtwzwpxjfk1MBo8ufo",
  "key7": "h8cAv6bGHdpAz7APzsMwyxd8oULUh66ShiRboAyR6ZgReT8UfuV5hKbf77Q2U155B89kpy8keKzY349YPFda3u1",
  "key8": "5AJ6vpFUBt676X9fY6FBBVG3XzGVXW1HkSgFTcCbCQj5tuMJve5f2oXGojAdtWye4C4T3MhoGYGBq94Sk8dsQMjo",
  "key9": "SePZUnBtR7tzLSVjJ2tfAfspY93vyUzQfKxqQ1bW9Br633rwimUmvVYthAebf5pz7oaMeaTYi6im4vSDLKcpFTp",
  "key10": "5ocESUgvxWYqqv3JwcABWbNY6x2xSK8MW1b4BaPQ9h5YJ5txhNG2WVDDoE7Ks9kYfZbf1fDMCJ6puqroCtXtCr7j",
  "key11": "5EjmBx1brGZ6LspC6L3FkMs7cWvSbQ5fDwfXNEezb7emRh6FVKxSwp84YSfFGo5HGFC5hakwQ3r9jVAjxSoyA6vh",
  "key12": "61QrZCKsbjNyxfMncRkdR3Mcrbiayi6LwokUg6PBZt2rbobjE2CkqPZJ9Jfvbeo1REoKnmEdcY8eWzx8fPSdd8n4",
  "key13": "bHVvMGQWRJAjkZAo8Zab8rjMXypMpJyiR4NE1UiWpULFekHKW9B7jXvYmedt83PNtWzhBMYjjwKoqqoUawNvews",
  "key14": "iqHqYX689yiqTWUZKxss5r2L7f9UEtqsuSa6foAonjHAW3SUDF36zkMkUjZmMXnd3tp3CPzSzbTa2oTt6mmpMxX",
  "key15": "7Hhg7yeV8xq97ZSGjVbz2Dc37w5gHgenhBVeS5LCSkqVemwNgjwaCswZCZLdCAkR5fg1EfcyT2F59K5YSb9ncc4",
  "key16": "67GGubEvN2ozkbAwtnLjzHfnHuVVStp6nUTtx99jsZpHE4xTcZoDWr5DKJWxMM7hZEaZT4Pf8S1TUygCtXK87e66",
  "key17": "2KKg56Mjz8WnJEvTWLk8LNQYVyNb8g9ZiD3QpC7P3vvcbRoyZiSEwPDPvyuC8cbD8JQ6br79d9WUfQyMRQg3JuCy",
  "key18": "3kaaQBcXM31zu8Rtp6RZnCbpmdACHJedD7fyPm59NAjd9fYroj9jzDNoCbpnvfzkiV3UiAgDQAfL5fzKgiQqrJ2g",
  "key19": "3DLpifCTHUiCaGYE4PHRUAsNYbS8gQ6a1Rk4rCWTUmhq55x7xoXhCBvyVjtSCpmHWTFKMf4vrTqvL2JzGjpZPgwu",
  "key20": "Uov9jAiJKvf2oT9226k5iEr89erXBfQ8BauLRiV34GJ4iJC43kEsHZurS81SFkZkstajTBMVAy4wWXsdwMshNDe",
  "key21": "if3TddQcdG6s8oaE22PDaQEnQYXC16jHpJo5zCCKwD7Ugmno19zPf9p823DZXTMHLfDCAr2oNXN92rriTiozrHq",
  "key22": "SD8r2zBSJfxsyy6Usmm58LmpxNpu3Jp6Rx2XkruZdWYwQnPcAfaGHmZLc2P3o243xf5cDgPjD1kgJwn3oFfEssx",
  "key23": "4wF5ibd2WihjYvUmoiCcZBQkf61P5s4EvHQQXGEmUERC2ZJdH51o84easbKA3swcU5DwU1aTapiFi7sC4tgGMvth",
  "key24": "5S3kgLYYayi13Vkpgpr3CiQUSRnde97zS8QpuVYSrhwNRrnEb91NZJ3QbmNgpWcAsrMi9j89kY9WBNHZwegSMz3y",
  "key25": "313ZYw35VWma4GTWJ3KFS8cv3sYVDzbRdaCDBGndLWDLj2i5UPubwPdwL5HQehnjNTSJhon9YaoY24VfZqNurxRj",
  "key26": "mqKV147B1VuGfzXgZHo7e7fEab36LZi4Wy2ri428PufJ3LeQ2jHSCwYFUG52KrktAJiWgNdnBgqTFXWx2BB4GWg",
  "key27": "3V1yPx14m21hziGiSVpGdx96fSZQ8QSe9MdqDWUQFQVz1DZET6vPpEncGksDuxK6p2mRJGhYTLgdyCJuKEGStyRf",
  "key28": "5Dzf7P3wFXotVcLq63xtGTxZRqdC6dup4Tf3hRLksnErVW9cHJJoYnv8hshUySSH65F1rHnYFUkTWhK25somLyiY",
  "key29": "5xjoGM3trdmCFF5S4d4v3WQtXC1XVHiNeKKL7ZJ3H7BumEFSmBaAbtXcD7TthJKnsmvDSX1KCxvVujjvZZiG3te7",
  "key30": "3edVGPswnYmGGWDRxvzQNTJnmrNNyMJ8DZCNtAFUd2zVbTMZDyviJbjp4DbkZvKrMqPiE2HGuUZFFNmXjx6u9xt9",
  "key31": "4GzgPUsJ6ACju8jMkbKemzF6eWmRpeiRKMY88dAtdHHiaU9hyDTTDDCEbP4hFEU1DPxyB8vragqVQnSzB9BBnmcT",
  "key32": "3iC8c7M67uNkkLdfDaQ3VKaSsR9C7fmUmXskc3wm8KAcUVB9kJrbD7ZwFK7766tQRczeBAmY8vZ6uNqjWWeF8BnP",
  "key33": "3uyySPAFKW6nXurRj8DdugqU7gXWiTYpUtVAgjBamCvtkxL84c4y2CLPDF95q2SzLvV94ui8GHurtoy1oVGEJtYe",
  "key34": "3bXGDNAhoBU55rhPDTTuNBcAxXNiDEpUCcu4uwYhvrhof7YyjW5CGWWXG8bnxDbTdYiqDqCS3YeifxbaEM3wNdFN",
  "key35": "Sx235AmEqjy7WJH8dnjq4ArBDPSowC3aXvvNU5Ar7xMXv5pUTbqRbKVauouSko4k9bRxghFTFpVDbn92MQrfZ7i",
  "key36": "2ZaxLCwfXRFk1inFytCuWu392U77hGsxqf8mZqzsXng2ADULQwLQDyxuxVVGKqYJrSexKXH541aAXDRXcPhmfqNk",
  "key37": "3sdtq1imet1X2QfZU6UUGeChFBwzSDfavAAjceG9AeT1NEsh9c3cE34EZbxMhHzJPgoRYwxWqLMCJjsnteogtU8Y",
  "key38": "63zbChwVddXbPixMDtjHahAqdRZpxeLXKrsNLB7HGYk1GxQizdS2h3zHhfX6JSbwYK7Y7drQGaevbk19PULRnAhJ",
  "key39": "2myoPsN8MofcevXLrzX3ZcoU2Tx4gjcepXZVPprpjKxDRCHoEGqoyQGj5kRE82oCr6ShFSDtVTXxo5ovREEgrZ6F",
  "key40": "JfnVhRpP3kkd933zA9esSykLkk2rSyEn1972vNgdRFiQWDZn4qjutmK2xDQN3uzpJvtr3PUEFVyB7qGDCFbVY9r",
  "key41": "3mGndPBGpauDyp1NpZHLU7E9yQ4zyJ7T8mBtV5BaLXqkUzskL6EHsuhUGC8d8JGK1amWerDrqd56ePBt4YBv89in",
  "key42": "4pDUroNVzvMbdSieSWUfYGnfryh6aXL3gyYgHX2Eg3ppk5PXnTKugwAamihrrsCj18giEzhFAW1NhRL89M6M8LFx",
  "key43": "DmAmntczFqDkXFDKaNMYCX782Fxn852PuGxAJJPvUS5vz917LbkTmCbWhMhepoLuMfLex95jRqyjkJdMhCXTGX3",
  "key44": "5si3ApVXanToPae8qftijQuND5nA1yDrSV5vFxWAVHURksgvswLsxoH8WERfWoT3t2ALCuUG4hmFkZqcaPLACs5K",
  "key45": "4jYdCPRxq4vXxat7rwnSJFKzGnm2vcP5z4tRFg9QX2zCN6HpHNg4RQNDPS7C385j2msGyJmMzua56Vjdo7CtRBMp",
  "key46": "5Egdc9wzyENPB5P9RazPRGW4Zc4pbFskGnnhCCs3NPBk3DCHLdJtMS9pzawNy3a5rSfxf4A4E3X7CJ6dJzHqn5sp",
  "key47": "4hK1YEViVuNKjK7adYRS4mLmaVZ2wvMMA6VGWSMvU2Rj3RuSrK8F2jRdLZikGYn2vTkfhyS1b2hkFd8Tqr8N95VG"
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

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
    "R6RUsUFL2jVkeoKtyMZetjW9YPyuaJR1TJ3aYbVNj1uWh4EXfQQodcoQYJAocdGNc7igfhNFaomrrNfKAnKbjwE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ABrrC9CdbPw6hv22c4XDGTTQyeMex6t5WSHBkfhrgbAWqJC1SArf334th35BnTPUmEiAfNQ85y5CY4mGLuwaVD6",
  "key1": "4BzovkRhD7bjLiHEsqJZ9cCFKhhXjtuCRC3G31PBqpDrTjDNfy93YoxbTiWRuDeHCHdWW5kpZM1bPhyF2XJTQXZG",
  "key2": "22ggprLUKEVxyvNiFDWDJTfqqDGEmpAGCvyrx4xy3Zqm1cQ4ATsw249HSgfHypoXSTHtsextKBCZqPEVS4L71vFB",
  "key3": "3CJZuZGzjx41jj6ZkE4grrTKb5GKYBe63LW1PWbsbS6Rw7gtmfU9RVK66okyqYbxzTWiRW5UgCra9EuP2bDSvgb2",
  "key4": "3vcQ37Cf3Jd43NxybSmd2TsuUfuyexppJucgg2xKwkjh6WN5hDJvH8s7UHp1NL4MzBnN7uwGfVDNGqNs7UkaS5R9",
  "key5": "4dUWSYNKHJLGYhivmyKdac3WsUtbBoobjQPxcCmAJc7tvNxDZQ2dZHfNrL3C5WnnnVBLGSPGqwKhrec5pBtUb7jY",
  "key6": "GsxBRgpeMcwefEuwvogjqiJAFaSVbHyr6Rnmd3EMfrpK3BNCLkCUnucGKQwvdveYSgz68dNsTHQCsTrUCdeb3fE",
  "key7": "2mVvskn1yZ5rwEDyjuwnAuHyRYrEnQBpXikRtzYeC9tC92e8FWBX1mUT2JfsLuRW3zkAsMBYWvyE7ExL3xnB6HHy",
  "key8": "3gprK1vhPMP5paNL9ZouxBjdcqtMBfFRg2RtRReq1EjGe6mLjBs4M9Fozq8yCdP4cHdD4JK8nGUSEQEC9UAB5xB1",
  "key9": "2q78dTVTBwPLHfLMGDQ7uxysRzzr3DJxTkqDDcq64WAMtu58spssYUFsH5yCYTD52qeS3Tj35NyeCUsU4w87XkCy",
  "key10": "5zQycNRTYtpuQd7pejwaWK6KrjbRKCcVR5WeptSRrCqHVRAqR2HdbD2kwrKARRFVLJEERE7jjHopCZhRuwptM6Cw",
  "key11": "4Mpj5ZUG6HiGGDNBXAaJ34inZJQeGcbk4GFWSfVvFvRt52i6X2mvf4Uh2bri7mopxJZAe4cv6aEGfTiPQgXFT4Ci",
  "key12": "6zUyo6rxfUKnDugkcaukFDnKX5zf5X67Jjc5qQE5kor4R4qKB9o52QtHfWBscdoKzCEmcrf43uLj4PbZmFgSVam",
  "key13": "2CPqDVv7ygxSooqEHuk4YXJVMb2dSAxCQwmrgvbXGAuSHAYUwpgVhjd4GCP8CSsWDmRSTqsA4sTUgjWKtwX6VCNz",
  "key14": "5a7caS5jqR8ptzTQupfDmVUVAETghkg4ygNJFaBC3jhuGpJibEhPfdLubmtsnNPPz8ovppnQtwwHgcJQ5X7epSfH",
  "key15": "4vAGf8KNQ42mUo3eRrf75aAb75c2fSVkrknMSPyPY2UF9FULyro5F15iXuMsbaqCBZHnwNo3UP4ieVc6cVBTtkfm",
  "key16": "2bnC52TYy98WNm57JLAJSJwnbjm34NnNNjp61btWULxDnjhAbQ25PbHtaHm2GmWFQTQjtXhVwo2b6EfXzWXrfNfz",
  "key17": "3heDTudWzsC1r6NfE8BWUgLrntTsn3M8WYm2fFrBruRhRkcpv6vjnfneikcqaBnHAfJYwLcGXLgBNcBN3V42GVjB",
  "key18": "3TJvKGiHyXHNXtERyozS3GwD98JxHooQGhUJgWFe1j6uXUVPkKzbFkFKNyzSpsv44TNrYLF3ZWeLGGPCgXyd1W5P",
  "key19": "Qw1mdZVJ1QNuWQzBcwTANKEJbLjrdAinHbdBzJjqH5EzJbmnsiYfM16688K5p3jwKVwKktR5e49wq47sQWK5mRW",
  "key20": "TtXFkVz9i3cFPEFtTvisHS3WQH79BQXBj5RkyP6yDpaQ2ELViHD1mdDF9M7UJMjTh1DCxMcR4TiRvffk19CWqg7",
  "key21": "5w4MfK1R4hDArHyPiEbyZbKNqf6BiAnY8HJYM2iqDMfdjR2o9E7HVkK89jNE3REfeygUbbSYMyZoKfrLZZSFdjHd",
  "key22": "3xq5imqYsqouNLNVR5xxyVVMSkxuz85TLnFNmyqWyF78LLqBEfj8BGFLgNNJXGxuzz3g5iuCcQ15dwm9cjjhgreG",
  "key23": "5xqEiGJ6rouZ5JbNm38wQEBHUCtseXV5uUiSwTspVB1z35NiNqs2bjavgxYtDBBqdR1KUxLK8BV8NjjCws5QstPL",
  "key24": "3YKrRawNfQYhUxGSFAsFghoYGDPBUhKce3CsAHHE2zy365gVCEwLEQLupxozhLJVNdzE53F3xm6m1au7GKZPPnWv",
  "key25": "f3nJaT75pXuyCXppSK24NABZGvSTEC3iH1a19LVp5yaZhGgER8LW91WTRRcS2C3bmW3R2hF5PV7Aph2mDj79pGa",
  "key26": "5YjF1n3xKcsTQHfKfMYoxDQdrsgmvYBzSTVCa3fEjzDrbAhES22YQP5bCmogPDiGayq8RMVjPxWjhAjhs153yHdJ",
  "key27": "2gy46aVfZkzNnsRHXkSZX8KtgQkq1CxnzT1smCAF66uQR5C5TpEQpLXQhTdVA2TrGrB1Qdz69kfa6zy9RwTBgfiV",
  "key28": "67BoXEGhwmf2xbSzw9T72ysgtGS1QMxnhgepTqJhF2SHk7vkCAmoeAxYK32EpCv3PniUvE4ksLNaA2NHPCHYbBqv",
  "key29": "4qt65PwRR6qkoXRkXjmYhjJPsThD3ojnmQeX7dkv9716Bw4euiwADgpyoV3RkYUi2zEbHvnbtiy85fVhg7u6JA84",
  "key30": "Reck7AKkLkNDHBchyj9GiRWUfdYmr9XnZhtZWqj8HywtJEN5R3eyKk6NWv8aZu4XUSuaFsiYaFtZygrwnGef87s",
  "key31": "jevuyYv9EToT4LY9KEiZYoQPaosEohPaiTb5wsBshvnjmcqYqYXkr23KauTyM7VzzhM5afGKYD279rxj3xSxqAa",
  "key32": "5W1Ys9SsM1ZfMKZadWJU7hQ58jUSkVmLAfVf716de2JTqkjYrTPJhagwfxZF4gu7ynPzx6gbLVqVmkaNMMPjpCDW",
  "key33": "4hKoLdUBafEKT1SijJqjQnAZKZ8mDupuYX3bCyNGz7EB6PaNCnDGCu2ZKNVoRgRBAN3Dos99vRvhvWWoRpm3qUXc",
  "key34": "uwu7xMgDDjCYJLM8tBXfmbUiiwFwQq5BcK8JmBQGG1VqzpP8fwt2RXFsnYc3xQzgkjMg7muero8SnKAZpyvDDpR",
  "key35": "5KaGHufdYjm9urAPm5kSp35yZ6VQoJJendLhrsfpSd5qWD5cKmeDAQDsdKZSZqg2R5YiGqrSTtmahJuDUm56hdzf",
  "key36": "5SyX7peiBv3FViCKM57VzMsPeXZm4CYNGZDt4KiavM7bJaw3GAUpfrJuGR1FT8PS3XDXL3JNQ78DCWfcrUPf67Ti",
  "key37": "YTqUDCrU4YCg523VbZxueZNV7wKEaNpDJc5WSZoA7sEYC47rUkzkuVPSkMcZFxq3C5pBi5guFYy7RC51orHhBgd",
  "key38": "3iWf4GtJGNqk7awHV7MMqXDqA57HJF9kTd67kCN4RHcLau6V2A9cBxxumf1wojh3bCTVgvu27JTkBaZ6ZEKac3DE",
  "key39": "3UHLLCZsEZhAUoga1MSDCriBd7Cpwung5zuJUxfpw1qQkyjUyDdUcwPFtVSjtKafV2ge16yr3XpcBG81KPu1hJz7",
  "key40": "24Pr2pB8NzV6MT3Qsnf2PYWXKjnSELhRkdvfbadQTZzVTXDeUGguVAKmJQHpbDXppTXaXAmnT8cDVx2wZgK96TkW",
  "key41": "3YdjGnWdbRoSLKTX39QueeGG5s7CmcKWqvnSDFRt8YVtbYPf2VDSLRyWmin9nywkzS5kzLLmv1JcggfGximeCDw7",
  "key42": "2vtQz9UxwU5g3j1fhyFRpy9ypd1UtZyc3XdpFdGkUkg2zEn8MXKBuCbiJaEkvJVj62wqiUE5juyckB2AmGFUxK1y",
  "key43": "etADksi8E83XUKiyEWMwycR2A8B7ZZmsBJpyxCYjPLWaTRjCvbS94ZEQyqspK3ySChqHG73otohF4XVs39UW4X6",
  "key44": "2rS5wUkPwNvDQbEQJuMX8nEGudyuNcfpdJxGz3tXH4WB7yaUJa2fDX6mgan4daF1nhCZfEvPgtktkTLsBYCgfn5o",
  "key45": "3A12KLfMgmtLe4E7yRAw2kLh6CFJAmjrAHaNZx7WP8jhox1BcsZC4VxrarxU7fRkwHnVYfisvVL6KT3sDWYVc57G",
  "key46": "5dfXDzQnJoLXtqbupKB9ZxEtMTbAdD79pEoXzS55GDcvftvtXYW2qkDzXAxfQuuRJkAe6Y21DnRXfjz47qFh8TKM",
  "key47": "5nMJCKr7a8GpKicS4ivxtJc8d7g7DxKWHkidkQ7WQhgs2DHGmpkn8H2V7HLWL58nWbvNUdTxcek6U357faHyjnkc",
  "key48": "5jmTtnNVg5miZZqmSFbwR7avg73yteSQ8TwPL1FSpRMvJj6PymuJp7Baaqx64F3GPV9B1rmiZ7TiyLDspVACahpm"
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

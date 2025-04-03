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
    "4RDqLYPdk7pZWeP5pDG2ZeSxYVjhmzWEbAtQStXfm1trdFB5tEtF5nHmeYPvRWqcnkutXnLKzPmgisynDxc23LLG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZMshfp5cnsEbqw2HRsvdmdoqzXKxGu2MfvwCLjuCuuNAyqChNget8sun12ehF5joCkuTRYyA8w89vRyJ558kzyj",
  "key1": "59pgQXEXYutFausmBLv4RFEh8pNjHShzH41mxq7vT4xu3fmz1Fr435BiHoNmqSqtNzj1PpnXD6exkP97hjB32pAU",
  "key2": "3dbQMaEnppXrgPF58GFJfRjW4Wrr3ocKYnJAWvU1Ntv2stdkXJALr8GvfyP5f3zhFP57Hanpxj8krMSpKtnthPF7",
  "key3": "4rnVgs2SbRZNCRXA3TcbGt4LQPe3LhBV9XJPFtBVYZBQwotoATBENs1wQh8x8pb3eYBkaXte4Jj8WoTbRPmqS7QZ",
  "key4": "2SY7kAdgDHfVphwyYNqiEc6wb9sXLgdWzRwbqokP3A8MNJT7CsDzK3RZtjyY357N2SKLCTb3XJ5DFpuiXAPoXgg3",
  "key5": "51QV8yNKUWPSYT1Jtqu2WTdUGMwCGRQpqBu9DoELYpLwLFnVPEo8mfbbXXqqwFV22txozYQkUttrjEH27QCgaRbp",
  "key6": "3W6St8BkYp6J1bKBiomnwSZNoaQg989osRxFU1GpqhwzMQErSB3gdhHVkkhKZn5EFPqACDKb2HvskyCCQn3XTm8u",
  "key7": "42tq6yteitRrTA8pWL5Wn42ipDw5zRj67MhtWtueGeKFCQ3omJ4gHUcy3Y3RqgtmyYdxTGvC7f8sRFTCSQ5Zpqyk",
  "key8": "2Q3euasUt5JmaRkJhktAWxzYPKGFoAUtzH2ywMGK6swkNHs4pKALymTn5YVuX8exoc7AMkSzjQqcXJu4Wi5kjme9",
  "key9": "5wRABzG5f33hDinZsrHHntSLiUAhczkDGLGTwahCyaiq5fzKjBRPLDAu28Dx5ecZi1J8WNsfXfvPu4Pykd9knVSG",
  "key10": "NiSTRprj4Wez7uiTXTJ58WiUUxGYVHvh7mG3bynogC541pn1GNdu5PpVwCnqtpkYQjHiASHuHhMDH9Lf17AzxGX",
  "key11": "65VGWSEGhSEVT6pZwatpL2CrBfrGPiC1SxMfiEGK3gY6HKqCRrmhMfGPbWzMci2QAB8pHQ8UV6Yvry5MiuWa9CKR",
  "key12": "2a7qGiaeAP8pdrVBpWCMPhTgtaLSj5Pdvm69TeEATCbcd83yczxxFmu49WSwHCYNx9epHtw2TQbZbDHDi9Zjc5mj",
  "key13": "669BE1GLtauymYig2yztWscfEf5TStr8UYUEZ5yDiUAHWGdwCXRPmzeLiLNSR2cFbxf9ChBuG68i8EkBHAd7KXco",
  "key14": "3LbaSXRCQ9aoxAowNRw9NWYeywLwnW34c5Qgmckstsk5HYW95Z6pM7HhsL2EAASXcU86Xdf8cAm7YedRReSPmYDv",
  "key15": "5TMurRtrtozDZWeNSpFvpA4jXucvkVAF3MA4v2N6zGFUDugBnZjX7JcwF7UuoEX9Z1MM13vkpxPbyFq7vBRfsuQt",
  "key16": "2r8HcCvQkUR7WPgbRyFQSL2sUu5uDNGcvF54dwH8DZP2TMYu1ZgZztF1XsRooXh2us9nP93BnTHBoEcp7nhsa7jY",
  "key17": "4G2wQRp53DHJxjU6Rr8DJvEzhgQp3c16BucPTz13SFTzfnspTxvJVBqsxoe4YyCeUG7NVzXHPubMs1C7Nx7AboYq",
  "key18": "5r5VWpEKBNaKxWCUAQ6K73PyVnqVntdDmdTkku2QxSHtPuaEdFXKu6sWMX1LLZTWydVNEfuhXUy4d8n3FNwd3kve",
  "key19": "67XU7PYeTqcUmxQeYcF52dX9HzQh7aCuSV9v488ugvsmmsz2qhdHumoeTF5RceqkbRp5STw1xiWHzDTo1pR2m11W",
  "key20": "3sqJmtFmkyta6GA17b2eVQM3kUrxoaAZehJqLpccBgLms6w6YA3gRagu2BtQY1QpgSEmvNoG9RDnABDjMhfG4oae",
  "key21": "3eRYmihKXHQfew8qr5ubMy3eQfFzmUtUhk5Qw1sZf7AhgaawEww7byPyVuUTHUsDzFdCwn8iczrXBTQHTVVe7Uss",
  "key22": "2QWxf87HjLXdBskEpR2hy4xinQqpJNPFwhid39gDkhY2uv48nkw1Si332DgMnB9zFJnZ3RSLFF2FMQi1suZKBLCX",
  "key23": "21UY6jNBAxMFAjqZvs5SJ1WTcncAnuLaocw2UmP6hBqYGi9QESHXsAaPkgDSsy12X1CK7Ja9PioadkN2TayFRv7x",
  "key24": "51ZKd8JaojLP45Mp4KKHwbsqxnH2GczcTurMbpWsquw9K69Xh1RDZoTDfcVULLmp55xPJsBG8Bj5tKY43UF64nrL",
  "key25": "4mf3UQ8tNqRpsExw19QUrEELj7zV6oapmio5xnn9LdhSF3NHgbZ8F3gpaFj4ebz8ftfQcRt5azTJ6LSTBf1iUbJQ",
  "key26": "292XxUtHm7HGJaRAchsjcs4ffZZY6cDberNkAb7WmLN836r4TM9kCgnh4xjkLnQJrnpi6bBdS6A7xDXjT3sfiRTT",
  "key27": "24HRAQtZ42JpsNktjgiLJDPBL867BEUADEcFyuBCRLY8r2Go8FpCq2xoBt3rkpyf3SRUPomfRYJxwRhM9iSgrRN7",
  "key28": "CpjK2YtNjEtmt1eN5f9WW8ERDQAJJMqoswU68FYGs97o4YcmmFkz3gDUvgRTcBUdTSD4CPVNcziPaDhcz4qyr5u",
  "key29": "tVhK5EJBYMMXqYjvQ5LJimucMiTEs9cwasMoudtw9frHVxjaFQSG7e5BTa38pGaHcJefmxxdMWzFMbLsgYi93C9",
  "key30": "5wA8v4FVUiQRs6FxGqvwXkE7BW6tQ3QUbYVNt7iXUqCagdDfptKc7orx45HrLTvBwDjQXWvUsz7tBd1P3zQh6akL",
  "key31": "PeKyzv51AVUafczk18fidrcmL6kL35xKFJxCGhbtkjg9dL88r3VCrYK5SE6oA4BfTGQNiCgUgkQY3Zo7KqY4CgF",
  "key32": "3ZyGWkA2E4EboVexC1wc2keQeV9g62YDnjH9CiSNv1wQTHuMt2xzkFM91ZZ5B7y4M6PbqrnFveR3rjpvMWKV3xu3",
  "key33": "5Ld5zip42c9Mg3q85YCxAdZK5CCoAbnEqHrfkEppv6PgRZCZKDynQenrkfzxhuCm4QhWc5ksWdSCXWD6TeXdkEie",
  "key34": "pfhRsPMqqYodkQ4VyMHeU3hUcYiGqDeFpMV32gympKd8SEK3cDrC2MhbLyMBPGQBRdZ9T6rPZpYAB6eNFNhV6SX",
  "key35": "2FVdVUxdUsRFifEuQfaHR8E13tKSo28mkr5WtLWq47EaYCZpZVgyan85jCEd4goX7bqyREu11tpRBHpdrXe7CmAv",
  "key36": "4AV982ZCb3FeNYaRJLEt6yhVeercvAcy4RiXgy9usPc6PkHX7hKjJm146LvKJiXEurzfvXyaFYKqWYRZqXLYNgN1",
  "key37": "8N6uoqhLHLwWnEfcbuakgbKTz2umGDVTzE2j5o2XbgJ6FqwDFCkX9oxg5fNA1278c6SvVzfD7tmPpGcSCTiL5fz",
  "key38": "6zx1d2ExaNh91mniaaFqQNctj93poBN1DBJTq2BiGw3o4CEJ3ESMnCcnQDBitKH32poAEwcZfSJhX9gZggE8H6N",
  "key39": "4HZg7vvmgU59EntTNt49ALMUikz8Gr7LEbpcTfGnjoxVcrizA85TxhwhVqqmomiTuT6arXQjCK334aGm6HricJ1q",
  "key40": "21hLUPLbKbhdrPT1a8ypqMi9J1ppa4z34k13hCr7HuYnJftCCmT4XNvGF6vjusLBp1g7SpZKJmqfNXWWnxmQpz23",
  "key41": "4peDS6vPEUwUhMTBKC3cc2Caj4UtFKQ2Rwx4Wg87cPnQiHf5XCVne97WFCzW7bjmykKc3vuh5rG365WAKLfpM4FS",
  "key42": "2tFc14HmistVjFyeNsTXeWR96m26qQR7BNxMMFceBsJpoYA12AL8MdkAxieg93SpgJQsaju29KL1QtdaRzs8QF3e",
  "key43": "2fT3WXg6VhNET5CMGuQ2jFs433ofR7NX3fkG2jup7R3dKrXixDVUTicW6SKDTfNcBSeY28L5oDZ6CuBevqVwTkQu",
  "key44": "29uNR52Fo9brwHCx6nA7pCg4gRky2bWSXwbDvdqWJbjUvgXVExpd6rKJR1UXmFmkbhWKYEysAVN8qV17R3E4Bof8",
  "key45": "CPF3ugaDCuLoJquYn15rnKaHi2JKvh1AA9696PxqB1gGJQXnYptWpvrWi6qBfZoYEgS6K4pagP8sZKuEn1v3eTJ"
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

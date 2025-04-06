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
    "5CGphczG48U23WKzDhP4HDQ99tm2RHU8zFhCLN34D5jjqPvBtcTEbR2mV4MnXCzVU81fY7RaUp4BMvcP8NyQJEQW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "229NTshPCDV9f6fjrtV95LLy3GzR4zwLCRdBBFC27vYtXkuyzYJgBUvEXMhr3sKd37d5LFv1ZPFFfoVER7y3UTkK",
  "key1": "33mpuDRCEAofmGk2hPrthDU1evBPYoz56tSgLLfFTEfbAU2z5amFUco1AETQqSvhLN86W7iDWYCZLPGMvXAyB2M9",
  "key2": "zxWazYJ7Sdz4Kj9isGnimbGQsVQ4GWTbsDnqEmtgJKDLDV5UdRTNBMNm96vFWbw7yYzb1o1qqf3bWwH1egewvJj",
  "key3": "2TdEf4H2JDD1kwfxgcHJQjMYkK8CDjqr76n9eTEky6D23JnZGZYm77L4CTDVsMfk5XYu6JySixLJmCjmgARF1vef",
  "key4": "38KLKd3FGEVzKV7vPqR9keJkH7iiCw7xcHd2bNDr1FrwQVhLTZ4Ji5PA8TtBvLM8kwWEZZT1smgJb2Q56Ew4jf8r",
  "key5": "62mRyEJJsGY7Pg7EjE2J9Zzde55Rih81R4XSJFCtCrt7qXqtavT2K7RuSinbcoqvadiua83VPg1w3aVdAtkELSKU",
  "key6": "o6jPPytMmMUEydbsnqfjixkWwLPJodmQDNC7zDyVGUQgo56DWc548QX6tUpt4JXxq4aNDVb1njpTXns4B5YpkfH",
  "key7": "4P6TMAhQEuVKcj7eKkjmJuURxv5c8He6Nv71CMRytkQ8Xma62Njru8KisrKZVR1DoHK1LyQxu2t1h49bctqdswKj",
  "key8": "Eg1vMvpDR1a6HbVYMEY8rBiaNK5dJf5ZQcaKH5V7MbYfpB2pmiTE6fnxSFhjKwePACJTbcxvB9BcSpi2Bn1m4HR",
  "key9": "4Yn1WufTM1XuXtNoV1esMGY957zmQ2SXKN6acyrnVcPqZWYvE7rzzYVQEief6eN1ZTeRDHBR4rLCgvyetWnDJccU",
  "key10": "4BAWX6ma8Wqwnpiy6kWqPd54JX7GgXNTbCmXDb7WFF6bFtZrCw6BxHRsUbSzW9Ty7w9BBL8eEFR4K7hNzFvgesqB",
  "key11": "4SwDLzxGFLXrgocBhHEExZcTtrbuqM7xiY3SLWAepKyMxehbEsbtCpjPXK6oQ85iKSPjdaVVQN3MrnaVxyJmLLdz",
  "key12": "436g2zthgzA3Ke3m7atRuPKAh1E8JAuSPm4dmMsugJLEUC71ARaRq72W3Vw86PsHmWw3CBpbCowTASvE7CKY6z95",
  "key13": "5jJbdx5rs3SvWvUAeYiWc1YQ8WavzHfAV5NSHFn4yVReXWMKfEXjFfPbXYVftfbds9GVeL2Aa9E6v9UvFTzPuf9q",
  "key14": "4i9aGRhmSWYokrGZGv9k4tHsgpBjhiFTzeprYEDTsjayrxkEmsGt5Mj4M7vatCDPpxZDohHumNV6c6pRgFk3FXUH",
  "key15": "4cRX3C12sNeafkYo9TPfvfacZEZGFjYeZVnifugRUtB83WGJxkfEKyBJ5Kx5ofkrxpTHjrPuSpwDjpa8ioSt6ToC",
  "key16": "2qpXsw3KKCuMzBrHk5tG5fuB2GMo4EVSvqGKfBt9aSZrMTAZRsMiZSxaE7u6cX9JZf7GqPajt5Z6Nf8SxkWw27R4",
  "key17": "fYFvJrkbHeH3hKSFhtGaPW1c9numK1p5SwUP4CnpBKVLrAWNNzaAxN3pCfKVzDqg8z2W2GfBEUv1TU5TSoxA7yd",
  "key18": "33RgeD6vMRT4jAYsG3p5XsqqRVFNZ6LfWmZueZ1AUcocPGd4Nw4gSmyaH7rr6T867gRcndfv1Lywe16Tn9tgCM7a",
  "key19": "3p9rZQrddrRBd6k7WmoUEMF8nEBuEbJszgTZc8G2mpipHV1awfe7fxjfK8BmCRQbFa8L2sKRhGmwKq8Cg7GQgVaa",
  "key20": "4bxzRnc6KyyGbu886UWsK7LkjygkKYH1fqG54EihRmBhEXLadkcQtexbGpoSm8CyN7Mnf4Jg1mQppruZDTEERDjZ",
  "key21": "3YcpnDTge23oonSf3Rf2Tit5SrcXqQxcFFFDVLafALfPv2tcAC65suwNiAbmPL2fngUx9AqFv12uwJNxPvFfi9ph",
  "key22": "2DrHJcxoe8SfQDE8zAf5ifDLU6KvmRKu8baDkCDRUpnxy7rQdxtUCh242KDE2KhPchMMM4c75TbuLhjNXeZMJQXt",
  "key23": "APQi2e8UoWPtiyTg8v68kUKHUTwp4iGvdmdgtkWbbwxEZqdRVpN39DjDNZSDLasnk5t42FawnqozhGViNhtDKCW",
  "key24": "2DSGEQc5rs5bAAhcsiMfbVECaHUnnwsX1iftnco2Mg2nDuNSjTpHby9UNR1JeboW3VkMg8RrEiGE4A32uF2dKgQc",
  "key25": "62RZecCVKCo9NSidSjDFbwMejz1c4QbeNF2wWhn47q1SnD8JXyq5fn7i87zCS4i1mehvi1G6ztTos4udYh1irxxH",
  "key26": "5Uh6F4pycm7GiYAfGU8iEibui6opufQNw38W9tWhoGj9UTZXGoK3KY5z87PdAmndLVdbfsro7dMouxf6R5uyyAAc",
  "key27": "4av8tzqkpAJSWftKsSny5kRnpkvtNNic3XY3vuigkDgyQbKfmtQhqpC8s6QzHmdkuhwzwLbRGHNQ1JZ5X3wMaNwj",
  "key28": "4oQgu9biW1du4BcH5fx84hzp7gHcBYbL1pgsrqapby9ChuZJTypnDXX6eDA2KYBaAghCqabGf3WUsCY6gQHT87T5",
  "key29": "4Gnu6qCF1P7Z182wSdz1i7U8nCMgBrg2XWXwvHhXCDizMxsScBUUBBnzWprmD4g8C7w4gBsLKd1FkYCNGFrMxCRM",
  "key30": "2BtdSeq6f91MfBU7MFiwMJctXanTH63d3JCrzBHFA67YqQVfZSg3C5qqY77WtkzKe9N1eZjgA79waPz8UUY3Y45c"
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

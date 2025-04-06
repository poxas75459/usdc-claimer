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
    "2Fer1wDATb3osB9DyPZ6v3Rtw33exakxAbqT7UmovQpB1gEq3YuovJZ4enh9NrPoNW6wjQFef3NidtckixoR5wP6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5R2LfNHBevksQitrWg34KWhWMxbgC3UanTJhP8et1howX4h5odvswYtUmZVeccsvJUXmeiS9ZkuNw46FERwt7F6c",
  "key1": "5EHk373N7wVEdCJpycyTdgurWvVG5ozuWq6ZMbi8rZMVNaMysj4BDnKdaoDrgGDNYpWbFFjq5n3qFGe8fnDkH3oJ",
  "key2": "396U59bYryaFBswH6cphL27pM5taKtsCsHb94kEKoVMjhpUZRHxj6ft6BT2WQbLTpvLyR1yDfCj1udzdDYmcYWNn",
  "key3": "5Gy4ChNeJGZ1Jd8LwoGqSY2TFryWRD67bWuwSxRrRjmXTgsgKWJWChvioaDxYDDoYkkf7T4LiR41SDyviYqjKxHi",
  "key4": "3bg896SZXoM15D4ccpknTUdADEjiZUwZPWv9HAW8P7QeCyxnqaBCvGpgBoc8LvYswJ2AzRZgYar8oiUAcD95Aeu4",
  "key5": "2TWBn8Z4D15kcoTuVo3iWvDcP7qTorKiSqmsjc8ypY3cggwu1u8ZQ2qmQS8VbuFoY6XTMLZCpJmwECNnphE7mjVE",
  "key6": "YchBYBqeZxFWr8bpXkqNZ1Rh8PCZTUu3SEvtA39q6TVtb8zw1Jv2qud8va1fiuYD6FwzVLPNmDLmSyEND3Yqu47",
  "key7": "3DstL5Sj8MWKjh8FGDgjHjpHDfdB4iYFXoQaKhZmUejbLUXxMG4zWfkjK1mQcgVz3GJa3eQnsHvaRWNSkLaQxZ2P",
  "key8": "2hfxEAP6LuNzGU6UrY2oEYDa5YRiZUGoyw9b6W1a8escXa1vkb5RMCUXKQAFcz4bmFRgrrEm23FXUM5KyvCdLcPF",
  "key9": "2Scu1yeoUT1WPtYFKTTG4K3aa36q4bqmNC8f7ja2yCQBg41JHhF5R8YuRWkfYnN5UPgyAwcPYBXqr1ds6R3mwGpE",
  "key10": "38vA7dDLK26B8MhRHG75t4HYs69TNSKZ6PtjNaeSKAR4giVXWJrmP2mmrTBVCwd1P3PsLuv2SGZa9K7h8s1a1jRW",
  "key11": "4aHVvrD5CYvZHcsREzGPC7LJ8A8BkMytJcBp8QEfv35rEqa7ch8LuDYDCLaEa3e2ygjMq8EjoGyExbWdSxyhG3T1",
  "key12": "4a8NRtkrFv4ZQAeFguz5iX6kERTiJRpq75MQCeCTv8kymkodxXDrofGfmSjzMdVatg48s3UfDzazjDNNNHmixn7W",
  "key13": "3SDQ4ASoAhbJkmyhc6CWTnhamVhkyyhMgjckyae7Xh37VmtaT2CTd7RqLEwruM9pdjYSagMT6e9KC78dGe1sSQBR",
  "key14": "fq1cso5bVMCtJPXxq5xun9jz68hUJnU2UxzALQojG7zr2Pfi28vbCsD2Tk9eQajuPwZeywjo4tndjsBN2fUomia",
  "key15": "zzuLFVMgwaSTX3wE28t6gPkp8jTB5Q8gSg5XuYR2vPmQKBRTTDs2nt1WEKYq67HFb2s7yoe98Xfvh9rAVjVPKPm",
  "key16": "2YwFEEYCnsKdeJLP5DkC9waxRde9doDssncBNVuuHKXpZUhHeUkUBqBeU7WE1RoapN2jPah23WhmQyNgZMn9eVur",
  "key17": "4WvbBfR69ZBfUvAPUTeCGiB8EGSuvmqi9ZkGSFLmmDiK14YsLvXpNFrXf5L1a4thBefRE4aFY1xVk4BSsVSZ9kwt",
  "key18": "xGNCrSXxHtVa5gzqt1dnU1NFS3tacRWZxgcfMimWEo7iADsoL99x9kMzqw4jzNLo6xQnyk9iUG4Zvna9hPDyF6Q",
  "key19": "24JcwxyTNrAoxeYywMnR5fM9GWkoQ6BWXEiLWgxbczYgA8KNFtsLyg8fSMAGEQjhVCxn8mYwRVxoBVeeUN93CK1B",
  "key20": "3tBnyYUUzopKCWwg9mFHhGMvzQThejeX9xaXvLXgevxxrRctxaptRJy8HJnSDvUurDmhFh51G933fwJhz1KVKMW1",
  "key21": "5jceVNbNMJA9xoF1ZZaGyh2bGtJvh5L2YPed82REttNDNnGa3sDtfLjTVQaqMaQLxfwuBMmQu7x6QNFAwyfz1GdA",
  "key22": "3hZMZDZ7hnun1FgPZjrZBL2Msjs7neKWGs94GzS56MiQc2JApxJAB84jVzXL8JnfrsPWMTy7oULtz9qNyEbHVMFx",
  "key23": "2gA8ymL6o424cknNspJgSwpx4LPzFrSCQcJb3fuUyaiMXhc5Lkwyyxcq817FdfC7JPEbGtkSs3EjFgnqKrq7j1CK",
  "key24": "4eZn48wuDNZP5FfyEX8onv1A4YTFLaC7z8fjaSi9gwPBhnq9FKhedHbqPjXti9duqWu4iVB1GCVc9a9pZmqP9ynz",
  "key25": "58wep1RcUB39C6TCsKRYnoq1MFNLGD4izr9CJ9zr9ketHccS38h6Jy8qCreQ3yXPDgDoc3pYB99BU5pYNNVMoRmL",
  "key26": "UoRSmHhMVkDCpAA8JtC6xBEtVdWub5H34o8Y6auFVonZ8bsEy6ntitM2VPH9QrqTUUfBPwfnAkquE893FhkNYXW",
  "key27": "2JqpKPzQA29DnASmwTnjMd2q5vtFzjL9RKQmHBCmArj8LfdPN6w1bmyfp5dfwWc3D6KMjc9BfgsC75PW2SmKx3CX",
  "key28": "4Fg9SPWyAtgGpiqzEsTHUzMqHirfRRAezvyt18swKDsLQSYq2hUrVEHZujHX8tJ9H741cXkrmj5FzfAsyfi3VbBP",
  "key29": "3LeBaMHwTXXnLX3ndB7UTDnm5PaZd2To5at3XDM38XAMmm1A8k5LnQRC313wEYzyZn8LjNroFXvFzouaW9KczJai",
  "key30": "YGHT5WakpPuJGiEBa8KNCAyannRNLdB7G5RpJDk316Z1u4wzxvvp1sSnfBJ4h6YLZ9uv9WifgRVbJfa6XHAmEsR",
  "key31": "fM6KJQ4MwsBgPAuZaFMeYpbtkKBTV21nP1eYxXRGMjAy2UyGD22rfwrQ7V9mUw3vH7s5aoRrrw4vfu5svjmCQsk",
  "key32": "54UuekJ9qAgmxykLdLdPs9f6FxK5oPErBmGwP8CU5gePdTy9t8N4GgZJ3XL5nPpyEMDfUUNjArG2C7TBsHUuyV6w",
  "key33": "5AsNqMUe6WfJyDJJB24WgKU38cBS7HVnUjmz7DH1nMcwng5YdicopVTjXKWYusgeQ5grcAkZJLEeUcnVfhXtLjH5",
  "key34": "2pEyhMsDG5jgoXEg1fuzRg4XKkPNHigqEBpJKEEoK75hyeLrejrvVqMVFumZpUNEC5RFVeb68bDidRJDJN4mjezZ",
  "key35": "5S8cDEh38VQgqzxBLUA4wZxBpM4yAA1hDmrKX5Y53oAPoQzX6Um8DbfuvnsCRMekaweM8x2wyDiM7yBhGzcxtGUJ",
  "key36": "4q21PzF8MyyUvtMZJjNbtAH4V3kYSwfNS2PqmV9DjmhF3BLAXSC4YfWU4yongQTzsb3SKm1w9YSh2q8gGXBU3ysm",
  "key37": "31nFeiSsxKZYvx2Qwe8cp5pQZ4e8h5TgwRQEMqWrHdES6SNgKTPLEQr5M8bSSatanDCYiJW1ekVnoTYTJqGwKHFB",
  "key38": "2ycks41VCvZhvChTMJJERBTSKS7bQPKGLk27gZew3fmwA5NbNj2Cpgux9z1J6izTjoqEGv6zc8DzMZU1WsZ83vV4",
  "key39": "65XQRnhrvjr7UJ8wHWT25o7C9AdurmaLcHdTNDZLNGnhjKtRoaRo4cTVSTy8S1eNnMDVQyCjv2zwruzuAJ92JWUm"
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

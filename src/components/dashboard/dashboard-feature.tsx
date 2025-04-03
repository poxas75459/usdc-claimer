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
    "4F9dNYm5KZtsoWeXcE2xx4CdSMVko3FNayTZRHvia1PtWt74AKk5FpLePGBDxm8xrmohpbJwWLzVYgNf8F8svWAE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JyePaFn2PWCzAVjZ6WVhY3ieYDAoPEdnKFPC1XjmC1S89qj3gZKWFcX2w63qiNL5noYBFxTXZ5oNxn9verEwcLw",
  "key1": "2YBLDMsSRCyXSqyWnzptBpsY5TLHM46s31NAo3TJiMW8GXrfGWxjnioHu8p4JwzwD4kmy9MK3DTHJEDu8DP15XiM",
  "key2": "2gMN2325bJYjESVQavM5zHbeALuudgpy8vTiZPTCzLGjNEzM7MhVGEcCME5Dik221JDzZUfAbvdHXKPLboommNfc",
  "key3": "5XErGRy7reZtFLRLsB7298HHYJ4i4FC9LSUJGezBrQL2NSYv78chTG9WEQQuyPDQFBwrpgrNvkGwd4CjdiZxq8VM",
  "key4": "2M2U3brKG8Q3gQEfZRUJenF9MtDpBWCzytzZ6N1oagAiSLXHZZD3rtUESxgehT9RzkSscftEhsNwRY2KDhTY3rHf",
  "key5": "3TyL3up5sgLhrst1a2gSQNhiDE9p5Fyp7BLwhEM4phnYBNc1tuv8EDMqLZJvF5qxmN9pyKsv2FPu36hK3bBjrEzW",
  "key6": "4EqNvDK2ZVJed5So1A1jyBqAXRQ1if4ZNbU8HtxVvyjjbAQfgGGC2DLaY62jWdMhrkPh77qt6vEzishpqrPcBr2h",
  "key7": "4TiCpjWn9FemKQ89kUdDKfVt4BrpRqDvyspxDoaXu5Bk7VqrrQzG31D3QkPGRDjpuKzrnbmKA1HSPWyPKhN8NtRd",
  "key8": "31uUpQyjVhNQioi5DL7krtwURBgKGwyZKacfjjCkG6xtP4GubddWAaAx3eHuTiVD5p23dE9uyE3NLAY8TyYY5Vai",
  "key9": "2ajwFjdwDuFv1sWocW9kHJxga4MyaV8dhByYaQPrrrsSn33TD5cXcHYvoX2MMRybB3WnVRA6yX3oXJc9qXsTiTLH",
  "key10": "249sJYbWQc1Vc5CfZ9pvcMPZ5q6Xz2Pr1yNK692CupNcbFgxeNQvaGcho72Dz95hiPKFGeBkgzMr6ufPoh3zZ1DX",
  "key11": "3FXVsipvj3E2GX6GLZSJspQbF14YUMCbJ9E7ZYS7Qo2fd8XS89Fz8uEzYn8FH1PhMimt1j2uofyDkUkK5bdZYExs",
  "key12": "44Wo3SrPh5UnKjvne9ps1jXw3T4rAtxzuwUAyx7bU4K6wTNhKwVqtUEdZ2UotYQw7pNDJcB1wfWTtdwMzkp2rPHV",
  "key13": "QxAUY1VGo2nnRp63GvaPfEyXTXoKT4xPXz3oFnEa7HtT7upZnyR79JoYekBGzbGAPDwaMTKJFy9JRyMV5hvuQfh",
  "key14": "5aeRyJPqX3AefeNy3QgvSUjQdD7UzLa1rL2MAAX36pQme8mPwhnUNntNTcroBaTFMjimizQNvCjnPXEvMReHa2xd",
  "key15": "5dbta7pnq1F9nwXqxHX44uJFKyG2yv2zARcBPd9YHub1q5zKKr42PXhwr3RtC4XuFcVkKkLqL3VdGWEGs1gX8Kvv",
  "key16": "Q1y5Lkr47fE77TG4V6EcQuTfVRySMR6QHY7DiVb2FhHGFKWmmcfmELw1RY6Wj9S19Xpk3Abde49fMDpXfdcNa4V",
  "key17": "3EaWsJAt5oHVMk7GBep8pPRHuzjaokE9yRYGhXXRvf3oVTRRsQfMK1BNCUE4MygEcBaWiWNHTzNx3Ah3YA72yiG3",
  "key18": "4f9SYmGsHULUrCCBZyg7qHNu3z8CcdSxqZ54CmqxVYubQ4FgdnyMeyLNLhi4tMChGSeSjAii5cREUa55mfLc5bGP",
  "key19": "5CmpPwsHGZUmn6xUiQer9De8LUhz7TXP4pJmZwgKNB85N2ud6ZB7KH3vMzAqws67GhRf1zFpg5CPb5aTE1QPnKEt",
  "key20": "65dqTQPq9KzN6s6uSwg8ux4E6Ku5CDDB8EbApEiJMfTfL5faJQPywQHWp4xZ6kB8by1Mq6N7EhzqWdMQudpY43ej",
  "key21": "7go6ygJPkUJ4S5Wdn6ZFtyfDz4RiDErgEfbd8rEYHP5ZLNNcMjSCwx8rxZpuR3Vf6c9fhe2SvSm8SCQPaXTqeSr",
  "key22": "4p9ZjN6E6rw7a3hrP8xMPLJHePPULuoVhojDTaPnANDUeXjRP5hCzUVCnVEew2gnybzgrtucj2kL5eH2UotQrKpu",
  "key23": "2vWWqChYnKRWSzyaqAFq7UEzp3wFNmgYzmqAWtFqt5SoZUQzRs8VFyhdHTm5A3rjrYy14ZuYWTux1QQeHKWi7HeB",
  "key24": "4NHtuESjuAJCSJTibXduJYCTbWzDNPydzBzekK2nJpRtpq76SGKG7xGX7Ho2PNJ8Fahb53FGDnXFZ6xdWC6F6FsQ",
  "key25": "EJYaCMEF21oy77vMezwbF9b55xPLigRZpoBjLRxqB6dGrmNNsg6APLnrKwVb4T3omDpqQwxQZY7sgu357q92Qnt",
  "key26": "288SdYvkdEWSmQSC1KydHHmKQwkqPQ7QfPzYf8wacFZ4JhkJ5Z3x8bis76deFbxnBhDKNF8KhcNyDX4gyswVehFr",
  "key27": "RUReEiPh45qotgWca5YKwfYfCZ7j9Ri2Bgw9FrCzPEoLJKEwhFSZNotFVHTiweM5C82URrCfo5Aaw5pNwd6Ai6J",
  "key28": "4dbbHgsngoetj6CaM9kcSPjpxeUvqmCSHJ9Ks6PwucwWLpvFUd3ScDhSXm1wL1mLCnjNm9UVjqk1B7NuDGkMZbnB",
  "key29": "4eB7CrKLz1Y8yvm41FyXNeinacVdmuUe6A5dWxvELTVbhETeDo73QFknHsqaYrFb8wDr2ZAwS3aLrvM57tCyPH5q",
  "key30": "rkkHFzSYhNUUykSg6vVpchwhfZtnMXrV322nYhz1PTeafAQjyRWjRyNmLJJmGeGjuhEhfG3NeTuuT6hpKV8ByhE",
  "key31": "jAgoF4kmi16wZe2UJEKpBS8aVVpj1GJ6zEwzEnzSmBU5eAAej6kzSXhDjMfuMg6HsLhE31uZHoUkq8ChCSw5Q8N",
  "key32": "4nFW8EzxhqTT9g6dkGFhoe3ov3tm1BKcp1w2s5koxtRRKvYXAknzU8bDLZJNQqZPR8o13TgVdn6FTfgoDDqXCWdn",
  "key33": "VPMgpi7dihgoDvkZy5FWaitzi7tiHTMpYVPAwYYQXrJXkBXKoyhGkPmbTvNLRKJsFR4QkjY9vufGNTgJBiUvH5g",
  "key34": "4nmveYiCNWaXnh3wB4wi2Y1LRM7EfJMHiS5KV6m6bgCvMcdtnP1sYyfXtMkCfu1MDJyryWdvHRxxNuWeT2gGTZKL",
  "key35": "2PJqZNN5pUtXqntdiYSozVs4Arcax7Urx6zdvV3xxJxdayh9ojiQ9TnYtWWQSei5sNoB5tZdwBD1CVcJzvZUkQVw",
  "key36": "3WH7NAE2wcDexW6gbuTTrrgSxZkbu6tDY3BHiVmA54BWRwrDtkNeWcsEXDSGuD6tpHAZpo9es5bLmYia7sju7ysh",
  "key37": "32VaFg8gmGhtf2N47kPMqLDmTTpKJawdkW4gsrY146wkZC4B5QzW9Wbp4itNbEgJSH3AbNyveCEvpAE8PEgEDpSD",
  "key38": "nAkzjYz2WRqcUnauTUZeW5QvnKEdmJ7kvhVZQPpHJnTEyNW2sbwf4fjepbwiU92WsxZFx8JKMCVc1q32Ft8RbhT",
  "key39": "28pmpaFzttmhPDDXPz539NqucAeZFHr8ecbQmJ5YHDRNqDowToVrq89VunsqCRYRSUKGky2yTvAi8ZqYF17yzvi3",
  "key40": "qynF4VWbLfQmRN9RMz3deU3w9gHmbLRzJzPspbMmN3QGECMuQRLdCm3sXn28ULz4spJUGpXcYMPdd65w6kyJCaM",
  "key41": "2zc1sRoMqHdVTinK28iq4BdMgScvzLjtMW1wnpuYjkHNtUBS8ApfgWmp8A77RPhABN3y8HQnXCyAnX1YJy6MMB37",
  "key42": "36SMYFjyfnetQGnKr6MmaJWwybH7LcZPUN6Y6UJkVJZxukSg2QoE4uMQMZZqs1aJ5RNzn8e1f7GdzsHiCtmiYRo6"
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

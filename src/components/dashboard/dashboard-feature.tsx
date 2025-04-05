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
    "5HdizBwtLVS5XtFnoauUoyCmFSKZjBdipUCsvgtcZy7CazNW1UAy2vFEw3W3cxMafW9ETBVWutqdGLVhUPavbT7z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e7VzdQ1o3YA697VbceAnvxqfqyXvn28sXaizVZscyMi3MFMdwJwPUhjzumFZnEhiEHsLW1it7fSexCzbgFXFH6w",
  "key1": "3rWwPSJ7akvka5NY6FcGtTFoHrAk4z82pGMsXWKGeLf4N5KK6tTMy6gwDpbKnrjQ369xwppn3TsTTvN3DXEZc13Z",
  "key2": "43ehL95xNwW4hLRVniUAv61FUdp34BaaJbHiGbpbyocRLe2J1f6RBrPms4kfmU2J1DvDmFxfk2KYBZFymai7qTcs",
  "key3": "4EVYn1VFFLoNToJ4h77wvsouxk6btfghkLXEYBM1BQTXt8ZseeXa7qZEgzT9pfagWY1JUa98KZGE86DJ1zG8HPoA",
  "key4": "5SaZairMeLTwFC6MbD44ru9XwX7SH3Xtg8iWQFPcsgRazVneReKmVmgyz4CuM2jcLgpmqzt5vmj72fzxCGHr5G7y",
  "key5": "VJqGW4fcJFgg1kHaE765TY86xLwRQGP6dPVFuKbu7fwG7qLBTNFuha2MXResVLNA464pCKie61PsNfMRytBSRJi",
  "key6": "2FAUkBWHHdk48pwHhn9SkMxxQ23LU2pqtsAwotVJdXaFAnk4gvuvytQBadHGUJ4H81iZbaiUrqsYLaSseu3A4RaU",
  "key7": "3WVueRMqV2chJXFhGXQM7y9m4HTfTgzJoAkz1YSbQ2Kd1UsBiUZooQ3LWrVuNwzRjuxmTYXdMCrsHB47RRDtdCit",
  "key8": "4GVEN4knJdyhHkHm6UHyNJk1yuxfiyAK8gNnd46BkFWSmmsv14nbFgscHoHTYnAuuA4BdJuusa6RvY3DqhdPRpr2",
  "key9": "4BuvcjVWuPZhKfpAakW2pQ5LYBGjpGhwCSPUS9XYCakHMXcrjHvvEwgmuQS8sSRNyqSrZpyuAwSb3UDuu7NtZFwc",
  "key10": "4egjbXaxZSk3CRo4pcieWXshxpGcEWmZ1V3i4Ac6ZrCbZ3qV9r6SsHe2HaPVqDWCyjzsg22p9YwHUJudEX4PxGKT",
  "key11": "2xYJTNnFUSa85NFMVxW678wmpkwpWJuK79Q3g14Wyy3vnuPDV1iKday6tn98UZGSQLmhrLEhmub8HJUvboAn7rHQ",
  "key12": "4iNzjcLgDTxzWaT9oRquBgWzE6jsYsg9TwCaSHKqZ72xkd2Q7gbT4pvXhCEcEUh9jBuHbuTxFapCnnkqF74hEcxE",
  "key13": "5NxwV3GzFgBS4rX4qm2qp4NpmjNkPtmmg2eHx5Dco4zDGwtJBgBbM8VVPP4Bdo8pvAVGyUtteMMSWbrWSaa1Ai41",
  "key14": "3hwxcL2sPACEyTbCrSXMYqFvdWHC5Q2sQSsaRrJLoKp6jLC51urVV64w79QzCYPxoTobGej7UihkDLGeWieo2qSm",
  "key15": "5LSuFpZKJV92JWayUGgTtBdYLgtVx3DksHJcQNNqeFpoEySoxo2Nk4ZNXKNXpkGAthQQZEbHEjqrMB7CXT6kYfWT",
  "key16": "3L3JmXp4CenBGuiMhLRZVRg1pawcUDKsn6PYbyJfM8iYXsgS5MtbZfcuiSEQ65hWdXBnAxvPmUBEmbiczkFk25pR",
  "key17": "4YH67XqupQPrET5oUkD4w44JAFH9nk4GhdBGHqtcs8JVsYZHFQMKtAov5dQ7CqovpizzHX62VG2AsywfqspoyUiQ",
  "key18": "2aZUTjgtgLvFrY39EdrfujNhrdHTsF6bSGEe32K7fqbwdrjpqKzJHvWK6zQKVWDmPYRjycTFAAbf36w9QTJaWUHn",
  "key19": "i7vRX2ZLXigU6CecdadMbKjw5P7sc3i81F62FbCmb5P3i2cNdGGahZJDb7JAMaeqmoK1hPX1kE8iEFgYAKnC4yC",
  "key20": "5kyKKvww4bvKwGgCWG7ZuETpwVG4y8L2cD3AY9FNFT3GGzgexQwXqkUTc4KUPP3oZNQ4STRNizWBESww4TQ77Spc",
  "key21": "3nuptvxKXdpk6uvpdvDJmGayXhxoUy7ejyfBN1cuZhKcg3kZCC9gRRhMeRUtkGFiMu71SsJ4LFkfknSua4dVt83T",
  "key22": "2WJymeptYxFWrkWgUKDy3Avaq94cWJzDYGS9j9BcyJh6oJphP7r2dXsjPep1UN4MiFU6ecov9AF5wjwYsCFwoVok",
  "key23": "5NwwFuVc6SnJ5qGp4N8CoT2MVcwyPRkopS61UyDtY4zYABPqtiVa81UgXMkcbAFAgGvAixrHFCvzbdwRiLYEMYbK",
  "key24": "34Nru2Xkj6DL42tgrasSqFmmdgb8h7iwgoSNXjSVYA27MKiy3W54kNzbme5vcEJ6a2g2gENek5RrQRaD3du6nQwX",
  "key25": "2HnyMXkKfEdTQQS5FnLnaRF3bM3HiNC6Z5yr99FvePmGgeWkv1JtSyxe1qUDnhwosPzFC2mMYNGSp7FZeZ17uUHw",
  "key26": "3aEycLcnf4mgP3Y4W7eVzNYg9PPYBimXU5AJUYCgp8bgFmyKxf7BnwpPG2jFdDSQeAsYo2ieRHqVLA6XB9a1u4Hm",
  "key27": "3MhY1YjLUpSi3d1jvUJtzRQrvwaBmrNRKnQX6LodUb6c8oX669ox4NY3F6N582XdqHytn2he3xsvj9iXdXnEDVWU",
  "key28": "kMBSoVEb9wvc2UM5u8JzqbmDLpLRiAKRReG3k5DrNcm1ThXfU3nPidY97eRaV2KjoxMqdFVgtWL5q9Xd6UPBYGV",
  "key29": "5T837d7j2axssSUk7B7au3k8AHqqZUJW1ZTBAgMYA6CkFWyarBguJFL62K8AXXdurVnc3HibYKtUB5r3JzadPAPu",
  "key30": "2FRkPHXjmaTDuW3WDXQE2otBtaczV3RV7B6LAw8LpjVDN2Ltm5jXkjYsMAnM5hazocq3xSL8hXWXZ31FPpZNj3Vs",
  "key31": "61AVQ28UDVuUDkmHGBPNGyA9reMrzMaokb7TwSHPDdLLxkmoDmS9ZG9MW7R6a5V5ZVxsLpGprwLG8HC5weW6fkCn",
  "key32": "2T6sA3BbArA3NBpkRTjqTnkT1bDdVqw19NR4xGggXmKVwDVHKnk1PS5vicU8i9tHP9SFCvNT6raNjFA12pJfCxSm",
  "key33": "63ZJPTk8iP13fjKCmATJkJ99iKFSVmhQEXvSX5q3gSvQk9d7ZYudrQJBYFMDdokfaPVfTwqJcf3U2msAeVfGSzz2",
  "key34": "BtaHfxJj9MfAc8JAwgVPuyKxfzG6G1jHB5DHQejofkmM7YqLXUJrZRzjKLz1nDFVxkEMn9qiKoawmkLoqiZtWu8",
  "key35": "4AXXdmcND1VamofbDwp1Gy1928yz15YEhJaMQk2UhxKdtFRbwHkXaZt9TD3R4YrXvFTjbyjCS6KbzK97vVpDZEFB",
  "key36": "2HpVZ6vNf9tawpsrakxKZNXeJSP1PjzhwPFJ7RkXnJwScn9kjN12fxWR4oPH46UdXzxCGxbRFd1RYiDj7kHU3q5t",
  "key37": "ERhERC6sk49qrUdmCT2poJep8T1rqauPC4bwLvYps2s4kzy2UbE1AChcziy9gpEuBiXqAJCqEkmfzWqjXuZGfov",
  "key38": "3ZVfyPTfWeKtJQEqqBScFeQDhS23bHhmHTdEDVd7VSnMkBMmFRdDFdeqqKVjYMR6bFT7qSrxsvdzJkQqSVqcVuFH",
  "key39": "2kEfUr3khBj4yhnCCccfqajdNb561gM8xvt2V6ZikAWLbRK2ajEfQZ9LZ3CiP4iq7kS3GpA7A8q4oKdc2Hmu15sf",
  "key40": "43W3h6jaRN1gTT4DH98iU3PT9UKgoDuZkjtyLMy5gC3dz3MHonbHXkJptDAZVZxTQ9tpLtWC89UKHGxUjt1THcPU",
  "key41": "54oBnydSTiK9dzSfhtMEtsscB6F2gsgav9FPbMcHhQ4HmfFoRgP3THo3eMHsJEQ3URUiPEDGPcYYv4Qzm7rDt6Ax",
  "key42": "WVxMkxnFJwiJwDU17r3zZqxkbMx42J1iR4QzX1n3p8Ri7g7UHm99Jo327eXFb6YsjdtAHrAyAa17vZyY8sNTgQV"
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

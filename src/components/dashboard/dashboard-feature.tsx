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
    "4KgcdJgwdBNjiUVm3uymSxDgdsReWoGnVCyHs8g1iXFZs7URsc77iP9uDR46dP2Nv1a1kb6pciZUuzLdbndkqbc9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9LoPhpqwqhiwWRVK5ViXf7dUfeGcNRo6jRMESU9dBRMFwFLVkW6yXvrAq3e38AbJHCUD4ioZoCRdQykSmh83FYU",
  "key1": "25ZiuuynnDBZSobLggf8SfKV3LFud4SNAWRN4SNyzGvCk9Am9TpkZYkVyruSg6DE859zdjV5hLCz3VFrEkLDvqPt",
  "key2": "3tXHRnWgCXxhktHWaw2eMawYF7tbzH1xydBFtABgqeZrbjzJgEjJsQbwWVo8ZqbKBz9UME4u2rg4fgLZbaU9LPB",
  "key3": "2iymYUpm5ZhMW17xc2tmp5CRcmxbmwNhMTAUk1zTSy1uSWUdCZm2fLuvxd6bdgGgLV2degkTEJUqb91Xh1R7j2bP",
  "key4": "Au4LUPwzPFMA25ct1aSR2ihawnSeuvf9FPKnWxBZkTbi3jBXKGwbh7aVTu2gQyLc1EFMYKtnmrYVzJXvwBxzGU4",
  "key5": "2QFLXwGnU5TExnASjoL7i8J4iur129hjX17BRNxSZwtrGhXj72R3Hmvi2LhKNbxdLjDYKGfuMBBxxX8pK9rofJkv",
  "key6": "5ovnPT5nhbZKottfbaSsgBqMoXXEgEd14dWKhgRcFpuBbWEChp7kZ66L3z88mLfh1FZuJrPsuDYF6FseNktgE4b6",
  "key7": "22YuL7CToFVQgsFLRuLzPk3b7Nh7qQUxHUx9RHTAiNyV2vmawbGGhRJDuFf3nybru4qQ5YGF3eLjZTaVgmXxJohC",
  "key8": "2GVt5VNMxekKQH5GVN9FTMpMqGbaPtJ3Dpg7cA6zbvWYjtbE5UsZJ7ymU5aw13TDwjkwECR8B3WUwLqFMstw7E77",
  "key9": "XMH9KihiQJ9aFfBy4uiKQR5iHLdxuREoPYzbth1fpKDnGkrfVD1r9NojJd77XxCA36QR4NtPTTja49JPxCkAanj",
  "key10": "3pkWTCcKb7P5VPaKfXmxUj4bYf2sBKVvsAEGNhvT9LF93dGJoFm4vkUsj15BpZKn45a5qNiCKnT7BgMAzBt8cNZb",
  "key11": "2YmZ9krCEaZQNqWFNp1CqkC42ios8V8VDMTYXUfEYsvYB6bJ3XCA7sisbebkEEQ99VXVPWWSJ5otMGd1iytB1j3p",
  "key12": "pctP7dwAS6rkgcPm76hu9UDZfaGrAFE1sqe8KFxDNihLaxok3ThfBJyzFTtHShs5LZ84ykACpDzcMQiMZWhxGs4",
  "key13": "64cAmWHmFDSa6q3gzghBCt5WezqETTQk9fNWVhrrm72LBV7z3663NiZZQE6ymCfb8UbN6UgbbMZB9vcGHDLQvAkq",
  "key14": "xeTE4KGffDyoKFYpCVr1pVSNSmPhok5xfVVGdKpvrMRiGNXuzBT5nvC46j78TLy3ptXQPLLEmib11rzUwJNKfpo",
  "key15": "3Hwj7ugJSPMQ36oETmeASRVpKNnyvDoKowocdTisx7gQhggKe9ETbgkiEHwfVV7hKr4SNUiycgCgdJfq42Nip3hT",
  "key16": "5dHpYqPbopQz3emN4v6vQ2dpCfpZAFpqJxKTGuzTY4RqKqFfn12ikv9Rzqq9tqwYbhWxuu1Kafh6mPszu651ZLzL",
  "key17": "37RqHTfsfPa3ocYVY43s5PgZ25uLfMWpxLmaWsFZrn4D2ywJM8oHFZ9tWTMyFJvTBNPXFkLYyz8CqFMXvEr9945m",
  "key18": "54ikGwA6ugesmvtPvUHpDM6RZ2nmHNefMBfFZqyEeDQGnThB2wEaqqSNwgVm5e7bNHrfzec5iG4KWoMiVuTptnWc",
  "key19": "4qygTTvP1dJrjVKyi1TLwxqag3GwrtB4n8SV4DbqQYBaUPoZhKqHd76XsvUJ5oztodTPTm8XxiGY31wSD1YQqkHv",
  "key20": "2PvDfrBFPiUEGW4kVBxZVuXfgK29McyWSq91jv6j6T514pmzZWUFr4gz6Wx3Q8RZgh12bmTWVUBny2k7yP2jYp8H",
  "key21": "5zQ4BhdkW61MktFD5X3z1RpQGR5gQqwJvVyjT4ai5z4TdUbQVMpH6gU7xC5a4NPj5f9BQNceR4cEA6AFpoWnGv7s",
  "key22": "2DdTKokA8hdm4sQm6fBLHd1h972awX7xauhitHTnK91BCUe8A7oaBb4megHgKfjm9ykfCy7x79Az37AWxeHqBF1Y",
  "key23": "HgQhEFpZ9d3dmqWmakKWhmZj97GgdVtFvDhrcP5DTD5hG2PBpwfop11oQJvGtFdXkv7xqBaKFYeoHs2hkvyiwRr",
  "key24": "6DGUv7KrpXqt4btg9HQ9LuHZc4x9Two5pKYRDfYvbyQseaqUFuRfxCCf1TbsLDJvkme4fkU3UhN57f9WdJBgzJF",
  "key25": "2AAWijBD5CsYwCuJtgEBQzDLDfTSyBUvYAgMKVg3TRSUtrEk1LDq5zFP9yBSsaM2ykjiLSJmRQFoN2EAEXCghYXQ",
  "key26": "3rpWetRzD6FqFYEVXjt3gKvEsm1Vm2wBrc4fQzd23jZA6jokYN3eN44ts4njPPESUoB9LScMBr3mKBYmHW6rBw4r",
  "key27": "H42tb3NfyRsQrCbEnkgDzWMDTfgj1hXtk9DyLMD9wAk4XKZocMwRp1mYPyoZ6P1rb9yiBRMUGhCo5o3qiGy152H",
  "key28": "qmb7j97CPY87GSGGWtCGssh1TiKZHPth9UdroyJ717PnWtkdu5hPqYkcRd2wbyRJsjuVuYVLUQUiGh3gUi2VTRW",
  "key29": "5gXuJGiU9RFp99s9qXhQ9Mu9JfLyewujfoUjcNTZhbHwwgc6ix2xBd4p2cF14VEhjcwtx5bFptCbEY7cEYm2F38C",
  "key30": "4EAd7uN7mcMfgPdhTD45tJvo4vh3gsaPihcLSgQemmxzYj2gm46teLTYftGijGrGx5L8HMTQtCuNBp8mauFg3aAY",
  "key31": "LkdtZenu5TH9B78xVwyBUTXEiAbj4Zxn6spZNCZjaazXUjuUWrq8yfczibxPkxht6CKrL9Gc6AQ14tQSVR2Tz83",
  "key32": "5wRiWr1FKUdjgZfTCfDiUP7SNJzj9pCwh642mjZJMNieXdyEiQHmjQbM8nb58C3fLuAbALgQMm5tTwCDdJNBEVrh",
  "key33": "4R7AC5gmQNXBF8irTSA6DbA6zA79wCwe89BKUX9xfL9qHSW6z1reuiQ8ezMHUNGSNtVduBS75xCVyoW27k6X7P1x",
  "key34": "4o5TLEDyg2ki3PmZh4ST5jPzPBSsQefQQ7qKaUmxkXV51AVp39GHXTtqq4FXsaNM22AJ1PW6Md8DnfApodZ1d4S5",
  "key35": "5ZnaR5PSWZEvUTsKrGGdngahPRUqVHcLUYP4Jw1eLAekigFgEVrhzsPz1DV4CnoFH2bB3K6KtUdZbYYpstrG5o8G",
  "key36": "2G4Q4VFw7PVFRd4VuvraUm2g8eXNMEJ57aeQnJVM6fG2h6rn9cSTQmc99vK1EEvhK4Co24MdmUsL85PmbPAsvRTA",
  "key37": "4UajiSdRYHn45DrwhWSY3himLM2sR87pwZogRb4iz7W2LuZboo8M1NNHtM4QkytN2ycfG46qYU5D911YMz7zYUX",
  "key38": "3WxN3dGqZskc5axrpJeBhYDat6DMDJQGSS4ZurGbKB6bNep4TgPWfj8zEmoq5ggksFXxySz7vM8cnArasi9tunWK",
  "key39": "2yNVdFdJFqbRQoSDJJ81tVkgffsaiym3rQ9WFQbrdKWPTGYKxTv7BkJHuAuPqtv7JxXyMu6pe3KMZ9DJ2uHMXYtU",
  "key40": "3uc7SLS9mXPiG3bNBHTjfaCUmzBx5pWs8XK3Cx9T2GwD78SF26SL89sGc3NXJoRz6Zi8NfhvriCXJ7yvM9vyHmvd",
  "key41": "3kyQDBPFkFWpu4dwMh7CT6zTQvWzT2A7YiyYRjEKvNqXM9fTUxTkm8R1iMzzZaYzZ3jCQwAMivH5SyTxbbv1tfPM"
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

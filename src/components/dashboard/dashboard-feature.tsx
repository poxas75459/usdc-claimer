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
    "5kdg74MtCWsQRgeyQQn4TPmy6CsbQ28Wy7YGm7U6SQjwTkLSpQ1EjFsdSySnWASTNGAaQQdQn3Gnu4BuUpzEww1M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j5zgn6dvFce6QBiKWmCVBL1kiEppvETs4vU1c2bVejSgDKvQJZeAkcAifp1YhYhH96dCG5mF8K7ohngHCUMka9w",
  "key1": "5fULSZD3bRoZUAKW7SMSUjAGQdzATdCJa7KJWHjCfHhfkZnCSRhjtFBk2PDxuA4x6WtQjW2goMxciDyaUCz6ttcK",
  "key2": "3V6a5tm9sumCmFcaQXSBn8cibeBcEKAqLxpvRUJfcMSYvgD11wB8NnE4CcumRJ4GX7CADrkxnNb2RXrh9AZMwMmZ",
  "key3": "3pGWr5xsKjAvdgX6sqVHwkLKM5CfEAtFctg6ZuPrWdPZn5pvS4kURgFA2fWaiMxz1AVBhZV4GSwGPSJfenMc4c16",
  "key4": "3mQADwRGiZrEBhsR652xDZNrCvJV3uc63jezhKWNrp7qrRXPycwwgPJQxmYFpGKPxRbJDSz8xjXCVRcqxzaiVkuU",
  "key5": "2vw8tZGQfpzM5rduiCa7vzzpZ6agvG4NuCjvwzSYPxZ7zqp8xXpXnRfEh2ybWfxUcR6RmBVnGjWBnSy8hhRfPqy5",
  "key6": "2cWK69a3vz7RzbsqzqweRo3Vuwqn73LCUXGsmYdPeDnLjbPGfEjKLAsMhh3qPuEFugmJq8cMa6Frh5xWMCwWVpqx",
  "key7": "4T6Hw1XLaiZhP6MssaXpNNyEEa94vBiFBtxg3LoVEx7g37mh4gaTfKWsqKXWdgCyy8u25ijqsk7h4p9y8pzQ71Vt",
  "key8": "5xjs7CeYQd8XFANktQFzp4vNfJJ8zkWEkX2yA774X9UeAZnsfKW6X3HA7h4NJC68FkogtjSdLMpWPmTU27MatGoN",
  "key9": "3GwdgdXiyJ7wCewqVt3w6A9yeVdiski6tyopnZNu5LPuDbbXNwr5rQMtc3DvXUKnCjAbF25AgjcD7rAsmUrj2TL",
  "key10": "2Ceo8PyjTc3Fegm7bA9NFQfcrmhA8m1dt51y97174A2WpGa2wdwAyCtRXonW7nH87oFKKNgxy92tKNQVYRXtTwLu",
  "key11": "52B8eHWjm2bTCzoNrF6C3q2QkiyfrwjCXw83MnuS8Ld4C2nncPAYpaqC3kxejTEwa2RwMoeYr9CtNzawUV3Q3Uzf",
  "key12": "5KaTDzNYFT2dXK3C4YwrncaGKQrdG94mLtGi6u5D5ahrm6rPjrbm5npFS7bA7D4Uzg8fARmScbjU3QBJHWXYphxr",
  "key13": "5JK3vvThFTQX2DBGHFHNJgHhWRQTg4zxfbVHpRwaqjSX4A9XkjWpftgv74ihgpxo2mrjgSVeWGX1nCnQahg9Tc1c",
  "key14": "57Hmnnx2K44vkk21493HDH9FMNsGEzWtMzuG4u7px8Er3VWSyiXmwTfDZ4EdkdWaUY7qZTCwDBnG9HJaPxTmbNkh",
  "key15": "24iPW7KPoaiFAgrWZWYZoSQQpfBwsYmN2sPgFjJ65D5JjMAJBE4hmNBydHVFCH4BHEhdhjf6jZRtk7XQLHb7tYga",
  "key16": "4UDtWiefZbqNdd1jMAyWaKnQuxkRZaDZJ1Yx2GQNJKppzLFtYik6MVgWNUQzcWbmaYYKjhzCvV2gXxWZxC6DHT1o",
  "key17": "4ZGU9Tazif5aMHQRQfBjEm88CcRm4fJw8bqJ38SWNboLhDDJqU4RD66YTkfbzmyTDb4Z3DYDqPEnV1nanSyEroBr",
  "key18": "4AJCumnMnsPXdhMYzdA1H16M16C2oUgUTxhx6XAYSRpq3yuYzt5939VrvJ1fbfjzPdrm3bpNnQCfMjGFXW4kuVjz",
  "key19": "2GumUsxrATnB7sZ6t5ZAggyG1enLQ2VN2sXk59f31PzLNXf7yjCQeeQjDq69D1Cnj7hhFSiqqL2BE5c719zC3tEX",
  "key20": "3NZy9EGAXrRkWyPDpbuTiGX3F3dim89K6MzVHdffehV5ZVQSE5T2QnzKLVyQQf9oBATKTtgJjdjw7pgKGttgV3zx",
  "key21": "34WxY6KXusq1p552PbkMtLvdSMzUsNqMaTsEbnGX8bK59BASgdpHFUHxYHyrUkjWgYsN46ErLrHmZh8Hoa7XEcsj",
  "key22": "3hBzKHyXphoYwApy13Qg8B99T6u5tyTToUKnPAe2gaabFew5hhyKof3ELiPypAHHGXEuvwPhbscPxffwJwa3iBfB",
  "key23": "5V19WVGvLZ6TJ3M2GRF7GZhALTGye4NmSvxuqBR9vLa6puk3AqsE2yGS6oEbqrd4WMtcGzKBuLL6NnDmxSZjwAS5",
  "key24": "46WbzwtdYKrSmN9gNCH4gKupRA6oXco53Fw6A66BiiiVvjRqqoD5yyaRoNcftpwozM2nv3GBekM8nMCqboNru1hn",
  "key25": "3RdpHumGfLgnBHGkzBHMdAC6KnCKMs8YevfDP7WtHq3PLVJ3fZDMD6ypiYC83jMiMiC8wXcefpYwFPjtz9Wiijs2",
  "key26": "2RDsQwbQRNQ2Q1Nt8dpppPXNzocPY1Nnc7MK6fQZfjUVnxFk6nvj9167y3KEws9ezzjzEmqmY4DAt1w4RYe9JBTL",
  "key27": "4ApZmNgKNu5fnfcNe38ZZPVCVYeEjdRK3PzDaAhqwWzSoCrcF48FReSNAiDDEyb4hZ93UXojauUtY753TtY2mhR5",
  "key28": "2xohqXqQgMguxs5AS4zf1Nucxx4zoc9u7S6aHx6irhcoLgRERcj9ZRZ8jhb4hbcDfuk1JFbYfvJ4YvENy9a1z1BP",
  "key29": "5v2ZzB4MCnciVv4TSrPbzcDFgQGNFGQLSPVB27RwSvibyHVZQdZjhUB1TxRy1iyBZBfWUu7crJHXcSiMSHZW121y",
  "key30": "4y8tH9CCDGtw7nQW6xuNsywQYw9sPJqCFrXuZbcsZaEW4vM9Hz6qjSQtgZxevKdKj1KUfdRsLjVbK5ZpX11z3oVH",
  "key31": "4Zvm7TbVb8NidRZcY9fBLYtkme5nxUffWVCqn1wd1taqebVTbtnNUdvgz2CAxcuaxEPBWy7WKuQnh2hScAWfiV1o",
  "key32": "38qXTHbfCE9zV3MYswrPTLWHfpweNu6wNKvPfj77t8iRK1dA4S5omFPUNhqTE78VmbuZ8622zXWQH9rxncgUh1Tk",
  "key33": "5vh5rLw31K8PNSLrvdiJ6ehJuffiedpDaVQKx4qCozH8FiSFq9CYJskCVze7EmU83jZsNEZ6MA1RVXHQkhmFMDtX",
  "key34": "2UkaiEy3jhpSHSewz9icG63EDhk4Mt97RrsLr3mJkwVe237J8BJoMxCpg3wvo3TvSJcZqcK7euMscGAkVpnC2nUw",
  "key35": "5rSB7Wwrw94WGzmMzD11Zr3hrbmm3xzn9vLfwoiE7GoHDmKR4YLGPhzwi8cEkkzAB3AhEGMkoCEZqbUgPHjkvv4i",
  "key36": "5aw98Jq5rbxDf4T83E7Ke4cmGpFCyaiV5zNi1tySciqK81zQiVV43usxUD5TNwkxxdcGP4bpYhAoPH8JZzZD5K97",
  "key37": "4SBxUhcNELoxL8MhfPNcPiU2iXiyKSMeDiCQMuJ7NTCuPxmogVftZ2kj4iupjsBU3BTctt5xEeo6xxTR7dGSVGeW",
  "key38": "2jvUyDPexh1xQTyVGdNVEG46Vs1GtwuCeBrBf6JwJDh2anUrTQ1cMU3r4jLz97BmCKiVj5T4UUMCytVd3RPMYTEm",
  "key39": "4JyComjeGWbuiSGazFX3LiHoJy9DtpTGVpChkLAGkVxeocKQojNWqXBkmS9borfps959BsbzLXbAz1o6agp5UuYb",
  "key40": "5NzDXRmvf6Aa8VGxsGbC6Z7Gfq6r6Fuqhmz8KrkMoRBBZmMtpKJHJDji71RTTxJirBaUSZgPcAowN49EVSvZRtV1",
  "key41": "5HVNbL3n3dWHgv8i4xHPpZoH5cnHEEyHUuYvJM9HYChnxNkKFtUaYsjocpXP29YP3bPfVvFxngboD43yqbsfQfP1",
  "key42": "3YZeoUXE76ozJtAbJjSpUDHKGxxXpHjsTLGvjvzPpi3dh1qAsJs7MVkEKi2LGj9PjPw65kkVBxuT9JLDbEwKTRrs",
  "key43": "UghsqmBsFzmjjRk76xoJsN2ch3By7ndeGgEf9zj7SoLcZW6fxv9tMisD77Xdjc1p7sSidsvNibEmitRjwKafHrR",
  "key44": "26VCpt58HA4AqTXwf8NhTNHL4vugpfQkqpx7fJMQeC4ku3xDNjVS18DqRDxYUyjoVrguSkZpnqkfcc4d7z81zBkh",
  "key45": "62kKmcpnLgCQ3tDVt92qGC3yTDAyLW5M1RDbKKw4MJdn58oWyyubxsXRfdFgcYc1fRaqVSPUt2ZbBudVjWwRgVEi",
  "key46": "32tmciq5fDvzVRpfwy59DBGmreMmwNTgDZyciAWN6emrqznHJ3dFxqpJmdTCa9EhNPHezvQNGcocqetS3PUcnYSX"
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

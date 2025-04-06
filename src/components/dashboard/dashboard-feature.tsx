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
    "3sjveQ3RSf7ahHAqMmM77PLCGTxdmExXfaG8UUzCuLkvXPRqZd7UyDBc4KnmZBYJFuZLSHuXBDxK3z7s3n2QfRDF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vZcEwHVr2ZKY4FfWBVyoy9BmEivBFSVDipUWCDFzzs6XHd2BEe1c73REKozbSdwvHNFMfgHAhoQMWXunDSwP18Y",
  "key1": "3XCZSmookupmopjeQwPJ6Jt2CLErjVXM1KVbGKZ5yCvjXB6fpmsLoa3ezEXPSNziG8SjjtkxpjdAT6uT8MLQP2Be",
  "key2": "2b8fzj2Qm5gt8XLpZLXpXJCVKwDAhC81ywgDe3sqaQHfQVY81d6SveB3rvV7wzYNu2XjVrFHLRHxonqDSqtd9nqX",
  "key3": "4SzvGBzM5agnnuJwkF8cHi5mfsgMM5bPQXRyxgsM8tEjX9ktrksAQwDEhGJoAoBQsY3Yuffm8Qq6TSgvAaYZTqtm",
  "key4": "C5pvPV4xscjLmEH9U7rY52mV59vJgcRANgx3wPbfTEJGEFd1TeRiA3sMYop7Ui13jnnPFVH391V9P7PwzUZTbLq",
  "key5": "3mDNBm2w254HV8nYAdTUJTVhnJM3wHVoE3nhsTihAsh78zm9emE8ETTZgXJMfjHJ3twjQtLkSmt86ne7C4vkFivn",
  "key6": "63Vz8xN68Rdn9pbQK1SAhPBGWqA5RWnT1sjdQYL668oDSX5Xm4HqB1u2KyezJqs6TtH7vF7LnDybtU1dWnRoVMP8",
  "key7": "3n2N2yjSUwrE7VUbQrbGsBdvFJmGmspUJsch6zECD1231oYXAb4rVgbA6wwCvDNQtMcxYxqJiVNTMNK5V3hT4bwH",
  "key8": "5YH851eB8AxJz13BaoeyA1mqzyUArh94WRGpp9pxHxXDcyUL6hgczZB1FAor486EFZxRjZrSESaW89c5mPrgAHs5",
  "key9": "4rfKT2ure6r8o4rGyTzDhC9M6ZM3W1Rz1FqwKd6fcdxLpxSPGppcT8oWtW35JHVKYnSfVuXNRCC6SQQUhPtbBEwQ",
  "key10": "3ASXiKwoEaHnM2wWxRn54Fc7mY76ngLQomHPEKP4Xs2VDo2F3J1f4eo8wXU7bmyxtmT6PkMfhJxUxZp9penEgGQq",
  "key11": "4pQrjCzD5XJat9KFMPmRhRCPC5mAJeA3v1vEC2RH918xEmJQnET3K4AQGsHzwCvFDLmBLH6nwVK5Xdx5ahGAY8yP",
  "key12": "5e6JGKNNH7DNFKr6sEC8fce3a2DSQ4k8Sxbz3dLhRZ8tMZaRzoCssD38XFfQ4R98A9HnhPC68kPbjJLVWTsVfCT8",
  "key13": "4PAg9e97x9NKunQQ4gzdVarVVDLV7sHKUcunvYRUKzbyLs7sgGNWLR2RZ2ns2D7rMycrEmpiUm1S6BN7eEAmY72z",
  "key14": "51gyXQX1zDrUNUrSKeLdFGTaUcBG68ri8856dZkqxRckzgAa2SsdaTqVfU8FkUVFNJeAB9YksEcBUX7sqJuspcov",
  "key15": "5XNu6NzAaLFhmwvXHGiTM2iyrhuqH45zm5Yc6nUxnhdHF8jRQFyruWmYSkjS6TkpXUpFQbRajWYCBAP1QaGFEJ9g",
  "key16": "3D3kG6qdaydNaZ6DgkLj9E6hvTAXmVSexqniUpdeuuzFYRBUe8qAkkExuRUHiqQkw8xzpu9AkMWiCRRyG74Dbdiy",
  "key17": "5G5eRVFtBdh8AsQiFmdqtSDmHtRnY976SRcJHeveeioX5Q5fQsLD83Ur3LtUyYm5mjYCStv146eezycs2xXjHgW1",
  "key18": "2tjAbwHdqBBaSBbaDVTvPhJsboUkyxPu3Y1UoSTmEy79dfgDFEACNZuNxbHz62zJjtJj6r7vEJ5fC4vbPuW3AaqK",
  "key19": "4JHbataemou8CK2H7nUSagB4RCEpEcydBDfxVuZTHKAubF5CduiUUZkY8TGi3SwrF1pNT2A2qHUYytSpEJzao4RW",
  "key20": "3dAzDikgJbohsx4baaVy7Q6B8WBgf46VY5aJkQiH6rMGhxbgdpGCaPogCYp9QxCPFa6HVX5bc9zZYe9nFmWzzyHF",
  "key21": "2ZG8Vf4fYKoM9jiU6KQds261WFhm6iyyMeNkUSr97bFQBNcZSt1FZkBKJYb1JVrMNxrjSk2NG1Dm2CexVZcD8DBg",
  "key22": "q4hdWLrJmKNXefRoinxE27TmsS38iHWwFv7ByiBRwpRGDdCVCqs5ahBe5LxpGZyZvV3EjEymBviXFa2iA34eZ5Y",
  "key23": "4odjssMo2fpAEaHvZnM5qMuu8kH1Fafe9B2Ac7JB5YEPzFURidFSY3MSYULfngEhtAwNpfeYbDqfgRnpYs11Y72",
  "key24": "ouZ54mETjhLN5BMxci3ogSBWk8zXNV6jFTWKRR3BA5wCiMV47oRPZsgiJj5BULaFuM1hob11dafUXF7VimohQT6",
  "key25": "35TFaRKGgrJTDsYUUTYCnHwbDHidtZEHyq34vaqMfEejNBSLreyYZXfDhdnkPVs2S6hAX6xLdWR8psshSGSYNoqf",
  "key26": "51htBYpRoHAj483KU1CyuHocyHD2Xw5wnJBEfdffMXDVj1bfFRkJmUZxCbBDLykfbJnUq1iLkMnSezpcgSjpJum7",
  "key27": "5Qmhg41GowEtcwW7dm7sgHb3h4ByL5Adqmzq7UUkBWGwDjD2uKqDMxC7AJ8dBCu8JLez4AgmhsSALeGVdT7kBm55",
  "key28": "4VYGJRrvtAgBVTi2m4kDxpVmMu4Y7c5wWFzJ2jPUjDnTyF9ZLAoTqqddbfw6zaSBSjjo1UHHtsuPGQtQN6ff6QHH",
  "key29": "2xs3WE9dXRQiN4uvZTzCubZc83ns29whwdXSKCrEMeeFZnaiDPyAUC4uJrLMciSPG5Xurhwb2DuKh9LPSuUR5LGn",
  "key30": "FzgdxohPARVvCsNhZNEonQDo15HkJmc2UZ85Rg4V1n72ofvTpvaCj4N7zVMdA8Dy5nDDF8cBDb9ybiq9F6tDkGD",
  "key31": "cD4kLSsF3ajU4ctKVvR34Ea6kurAxU7i1vMdmgy1PB6T9sQt8ZyxZ8CuLT2KPMbEtnRfjNvcGde6zhBCY9aF9si",
  "key32": "2W898X8EzgbvsjMtRgHj3NkmXtKKQbjznhMpEyo1vWxDsQsuVwkfqtwXGDotptottLCd5dJrMucpMXsgtqneCpoe",
  "key33": "9a1u5uVWwG6f3iwuRPXqfn878DdwrK2KbLuBNMddg49NuPjuB5yTQdJR8QVrNzB2m8GbJTcFkk7nBTc9yDBaBym",
  "key34": "3yPYDw9mdnQhvEYyPD4NmitxvCpwu4qJjj6t5MWodfypYBEuSCfeT8Fz978715dDu8RS9wHAtgvw4mZX4g5V2eaY",
  "key35": "2F1736NTi3FTtJb7uiNrviDoadAFtp9h2qEVbAPM1buxdie9Qynh7XUSmxVdgx2SzQVgTtCLKH7Gm5jiJuKtQVwA",
  "key36": "2GnahGLePrhr4xnz9MvR4hXbw5reLS84zyQczDcpVzvJXicQLJWBeuF8ayXVgHK3Ck7QxMuVtPMqHCLrHtGzM1m4",
  "key37": "2W1Bak9uK2nHEUUJe1NGJuXZQFtmVGqv5JCdrCsmMVq8yEh9cJfsp4fZ7iYkfFQAMKSSkWZJzJck4HfMUotZJFts",
  "key38": "2M4hRtTLnYnZa2MmQV2WPKQKaDLxPntaDi2TgTTqVe85AsjLuyYYC5Kma2JvP6rDjDRSyxC4XbwPHn4HG3xede3B",
  "key39": "PhrtQuDcuZoqUNTihQY4rDyAXxFUrY5ZAnduSGjw1MrJuWCJ6PDXexFue2AtPyKXNC1CC3AGroDWkQMiYqQVLWG",
  "key40": "33Y7o4Uea73efpRhfq7KUE7xTQxM8ioUgmXez96ZEmZfuawJkMYKvvqTjVU4H1T8DbcTKbgKAxdDbBAmRvMtbGRo",
  "key41": "2JG6k5NgDwgz1MNM4EHoDnyMomy6sGm5Tux8DgW5QYnDVB251TsLr1BfxjtXdkEB7opFpvsAr1oiVwWViJ2zCakf",
  "key42": "3w2Adv3wdTGXThb926amVXJwsBjBcKEpQusWSpyJdMuvs9ZTtZ5J9nu1GhATBdE8EtcwjMZjknyBMJUkmTVWcrDT",
  "key43": "2yGNy3C9E1CzxtZ6PKTPeXb1ZbKDYHVkGiVpnSPTsYAqpi1DTEQzXaeM4ZLsrmEpuum737xy7YniHya7X7KNBQbx",
  "key44": "3Xz7JtT94CvYokkcMJscTvLmGLT9afMvDkoLWRmECbpv2ms3aLfGWEyB3TQxoV7L53RF7pxJNjfXiGUKxZUknDAZ",
  "key45": "3MJ14UPnSe8CExR8t8Yj2n9cLnXsVJSo7iTrfjEzV5pUJofX7EcG5rxMfsZqk42ixupKdbJ7ZRDW7yHk6ECNnDCD",
  "key46": "3hpTaU74At5rMCTQajJfDbw1RfABvmGx5aX8YG5vw7CY5UjcPp6LqjQwkUogRHS3CUXC2hXu1nTcjxxQBGskgx9x",
  "key47": "3bKK8TL8VoCKuab52mrtqRYm7fB2AjoWYMcQBiw9efTbHhuTkV2K5gUiNbVKoXZJMJ4hMzQqLjkU9EX3dfqt1bSS",
  "key48": "378K1FnGGBJUXQbLR9WTYW2Xa9e3ajvX7fpXyZWEHpwZH9aphD6EnkseWXxjUzuLUGeLsxgQhqGRnYEERFEcz5k8"
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

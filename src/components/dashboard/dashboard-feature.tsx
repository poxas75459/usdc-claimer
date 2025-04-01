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
    "2KwX2Cnjh5BbBshdqz6Pi54skLQsk53hBsfvhAZ9AzdcaYRHzYrf9S2yF6k4BiYdRUDKv8Wo6Qp6KzXQNAgQssXa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Abv5G9rREQPYXsK34xWBetk11vtW7eiJf2P3KTMHffx8zMfMNj6V7hkiEfeaZDdjuq45iSskgUJ2confeQRuZij",
  "key1": "413kYRTGHcKRMy2YaJTYWQTJi6kXiiGX5SFae6hKrSyJSYpa8RVS6wCwYc58SvwwcZ7qC64R67JfqGRnK6PPRLuy",
  "key2": "127XrKy2jEq6MogrrSi3rBZ692d9XPa6oe6DhSVvzQRbaPfJmg7bMKAbKQk6r6BeAdtreU6NDoiU77Mdku9dx3iC",
  "key3": "4nsKCEv7AouRHGRT3rHV2a1iSVAze1Xt4LzXbaeUnhJuPwzzJecBDEuyWDgwJYv3A84QDtpLzwxkkiHGSxYRcYsf",
  "key4": "gjLhcp9pftiQmQpyaQbT2sFny5j683Wuwrdb6h1iswMxowb3jRezBJYRT7aToJwrqpxWyspmx5uuDmkdJoAqNLn",
  "key5": "3J8i8x4Z4eF4h3BHBskXrywmr2guU8pbNkQ618P6Ut86kfQSsUy1RXA3yDAcV9G23C3CKXVP3Pstzfk5btxUFPXt",
  "key6": "5WzXxzjJALg72MAf2FB98A7RWcvnU6xApnCPAZsUwQsDHXZgQcmAKKqvQWanRbtWXzSLcC26i9nU7z2HYmvX1beC",
  "key7": "yRQ3rjKhajQ3KGepB2pnztQRZCjD54oC3rXztcr71QrzxtwAw3fBfAoqphni3UC9cdQGJ7wZBMnvGM8VUvBptq7",
  "key8": "4beWQ3UxrkQsJebDK3MkVW3nXSHT5jYzNPS3dT4FWz69F1FRDqzj9eWXoQdytkKiLL56zovndkfV992og7rcmMWN",
  "key9": "65kehm2FtA1MfeCDoFs6i3jWaNv4Qtubi5D6S4BVELnxPWH2HWRg5x4KdLHRsM9ZN6vD3wLjryCkJTGYqoR4xZik",
  "key10": "4rYYAdPm8FMzFZLbmDRhB5r7B3GL3q68VWXgGuZzzZyPgREVyADPCQ1ZpnDmGsqua51ZjK7vqNH6GiAP7KQ9y68c",
  "key11": "5bn47Dm46DhGbVEDxUSX8orz6LLYyw158Cqhnz1SLDE2w6gwpCcw2MkaDRFsh7yuAi5FTd4erKZsVT33Mq3YdMkx",
  "key12": "3AMZQkKnD8ikqVMuBuExkjiq2nfCJejCCKP1rssrWVkZGr5AYyiCAeb69FXLmJJ4g8D13FQM58GrbUyQRd1yKud7",
  "key13": "5ZdBqHvgGuScky1f6kcCNPf6j32oqxi5BVb9hiuPut35iNoQfqxU5Y1dkuKjszYWJxBKMR6x8mCse448ZzERemnL",
  "key14": "Wu9KNMke3Ey9irg9ggmwooPsh1xSENxX5DgynVW5a1R9ZDgnAHCjrN9xgD9SChx2PrJDieFG5dYvcYJumrtxPNY",
  "key15": "3QNofQBTmdYCwYZer1AcWT33f7DHe7f5W42iLRUT8szukZgzFx6BK4nWu1U16hPdVaR1jA1STvQkUsYMipYy5f5m",
  "key16": "2bqoatZ2p6JMZGS1oAwvK8Tzkxm2JSKDveZvmpSnZ7ZFzrD4E8KAyoqFGwPLPCoMwcfzoJtMQFi1TD7L221d363u",
  "key17": "2xmG3Nz3ppwE33ooX7T2GQJioLRDtqDRxYS3VDpq3RGw1jr2LoGnhi6vB5ZG7Xdtigjq8e7atcPzAbFctWPPA4Dk",
  "key18": "5F1AbSEGZGyMTx1zCd5c56uywkypJM7ghvLm75mGFKXbgF7bigtvxuVvWh165mNBdgdw11rgFavDBS6AyUuQ5pnt",
  "key19": "5RfzDsvZ5GJhPXeXsvhsYadm58YVGEsKA8ZPxfJg9ZrpPGwN6csXdBXTdHiVjNi9tgnWoYi9Dj3i48Pdm4YqJwzE",
  "key20": "4uqYc8nKwkkbyvnpj9XcTWRsdT3HfN91khcLYdi4kWFhQ8GRsWibQGHmQVcMMEx16TdjEcnZiyGjGtu15xNvEtUM",
  "key21": "ZZbFSkovZxCb3zDhhjP6aretvuFptynKhn9AwZ886JXKLzgvW6U5AqcBMTeavXt6QsGUUEYZ2wnhC4mZD3Az88c",
  "key22": "622YGc1NG9py4eKXi4NjYWu3bQYeEmeLjwGrhoRKX5FCzxBfdVvjJAevCBih5V7dAmohyuYXXeTgdqhYxCMuW2Ze",
  "key23": "46Toaic7TunpG7K7yzPDSdjASSYJK5TSUKEUsFnYQG5Dx8iWzSA1jREx4KhEKkEUFNeXvpmxYWnfoSiHvhwrt8Rj",
  "key24": "5RSd5GhqjYo3ppyUVVVG1VHBeQFftnPLQcZoBumhzMN5K8PwbqzFhWeVV8GXF8RDgYYsVsv6Riyf4zbqkp94tADK",
  "key25": "3PXR1xaQvPkAcfYJJwQXES49SPsiWBz9Ru2VLeVvoa5hEkQr2vEGVcKoYgynDeQJutuHQ2CjN6Rb9USQs87U8m2X",
  "key26": "5rzCSoNjhYrQXmDxJjuohDm1vVJN81LUJnjm4aT2w66SJuGqxj1PMmwcVw113qmPrnC7tDx2q9w9GHZayLLieFa4",
  "key27": "2N2xjeRM9RZit4zWFMAEyf1gV2XCdfzmapb6kjaLexuQqWhFyBRydZ9VFKvCFnvsFmoNkc1hVhsdRyy1M47orsyk",
  "key28": "2WTSJMrURNULiJpC8fb5w8q7bfQUbe8bMmF9dfPuQBR8MecTaTemWc56TobPT4FdkZMuPyUwBMddMKciafihKh4i",
  "key29": "3EU4FcoRoL1uQ6bnYm8DwTyCKioWvd2JisZAmAPbNyXvZhperuBR9fjSEHUkZfwkxWKta2HpwpNhj8M65FRUu4ao",
  "key30": "H87Rsg4j6Fi8wRaHx6nyimmggyhDpsHyPNBTVqTrgwKSwGMoVSx32qsku51JWmhoLDmyMaM57PdXWZiHny7dyfz",
  "key31": "MUUbpsd3kvd71hPxhAVr4na3heWXqv6F7mDLg1LEYSkTQ5mPDosRLMpMhULa52fhMC3f9XYjjfeP8CPK4W7smkw",
  "key32": "CciVgfCmX9iiWoAmc4vEdQXm8uhLeUbzuWk8T4LxeyNzMRYWNXNPUZjgasLRx86iHoUbseX6L7Fka6WLYLbSndi",
  "key33": "2k3FY1pGSpXUWJmy1dLc32AsjFTAM4wmve3zxVffn7PhRpWNpS3HPnxyFMveLxX86YzCd43G2xLE5q52GAeQe7Us",
  "key34": "2eWjVCWZozxRQx2im37c6ULAsztT2upo9WUG3V2fBAKnavafeVU8CVTzTJvouPtAELwETHef339eXTWEzrYJdox4",
  "key35": "4FiutWtxWJnPTmd6ET43KZs95TgW3ETbReM4LhAkYjeWmwHc1TRLxvKubuE1DpQq5S31QJYommfHtdrfYhrPFcwZ",
  "key36": "2fmoMC9C2xbjZ5m4mzFC4dUpLrH6T1uCkHQRrUQMaUzM3dD7uNoBPYMCyyCk4sK3RzgVTWEGvQTigDoxqJJJL9fb",
  "key37": "67p1ZX64DQjBFJbkpSp9qiR9RLgRPEce8ErgvsVqZPW2SKziPecsao7LwqpvpKJGefCL5cPUmRL2QDyAjnRVkQfG",
  "key38": "64UmSSa2kfWE1PXYwirPV5bv74WNSXYyhiwKuR5FRqQHtJk9zcMoJQpL2u67SNkUtxciePLK7WH6vskFQvWeZ7gH",
  "key39": "peNEmkhF6VGQ7FHx7QzEqCV1bXHzkaGqB5mmqESriREh6RQwPYCW8uPzBhbq18snsKtKgFgwSaLbdHeVPUzvQBU",
  "key40": "2igiyGR515fFHmHKW6BNbhzUCKKiTVFmDpX4NBoTrRJ9iX2ry1tkj6GchThjQwqXkk4F6Dm5uMAwa3avyyX2538p",
  "key41": "4HXQeGqfY4BMtDCn2MinD85kPafqqntRnvNZ2VRy8FCwr1xJn8xJc6aVCPGsXybMyviZnNWsGyBq2RhJU1TAKTvi",
  "key42": "4fMzGmCVpm7bjpmNsA7zi9G5UbLttSAduAzMtGBZ75Ymrj7grHmBA8yHtqf3wGbQeqy44PtNkXQXCX2SxYZsa6je",
  "key43": "5ePjdvFQJ3YKzjpxWCfJgH1GuH7WNS9EzKomhDsjTQnqrpGJYnyKuWjC4MNasCHH7hDM5SJRb9reJZ5ye4zTcE2f",
  "key44": "QtR8DCZxPgiWvmkJXo3Bup9WkyZovMMmEp8TKR6HLNhu4hPiFxhbhRvYAEZN2ikDE1P9BmZ2bZxv8B3dokdvsdZ",
  "key45": "24w1vBRqTST67kUMVPzp4MSzo3gkpLGhwLryvbVMAERhJiVzyU4scx73GCYxpRiQXdsenxzRHJh3zDyh8DxSGZvm",
  "key46": "qHCxDZgB4yW1gYNZdx1EtsobRLRvtLCHjLJakRf3MAh3KQa58Ypyp3iy4XHpgZs7DtmJbJ73egiU864n2hF4ZX8",
  "key47": "677qSgMgC5H4KWZ6Nw67icHx8wwg1ZigmW4CtgvfwAHYkePpLGN1BwLLep7qdLXm4V6ADdMQSnB9peNE58n3kC8i"
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

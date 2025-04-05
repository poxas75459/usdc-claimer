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
    "3ALh17J3eHPyvDaMbJTdBXeZocYBbdbFyEDHocY8mat6MF8Dn61DUb7EATpEf6a5wWv7q3rm7br6mFc9aZzfJZuL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Jfan7jfS5r5ZM13q4kCUC5qJ6ogFpYvfRBW4YBFsNYTTPvm3pjsDw7FxLxhjfpnkCRdg5qTDWkyQPymRWcpfuXt",
  "key1": "29QqhPPxah8zumEMs2JXmWSZrpiGLyBRuop4cyJeYX7DV9RqjMiGuXx5ZPbAMuktuZAhLuxbmQ7sNoYDXVsPV7Si",
  "key2": "G91D6xbU7iNKjk57P6SKcogHB24MHfuzkqKJZhVn4V3eF69Ewi5NGdX356Zzee2grAcbRPPvzeXioSkk7f7v7yM",
  "key3": "4X8HDNw6CofAEavuWHAWGAFmvrLPfsYG9g6YhuENfX6Spj2kJS1bzLzKeRpb9K6obxJsv1FjKt9bPDERXCfsfbeH",
  "key4": "34f23YbVCiPrAfgFHgTmanaGUsUpXBhZt4hPvXWaEpBkX7Fx1uW1CeYPSX4Tvuztc9Q5uxdap4pika3Gxhjeaowe",
  "key5": "2udZodPUpYwb5UdtzaqBCiwBCxh1cM72F4cBFWgmVGcKpfh6mHDw7PFmCpTBELJjxLftqFU3T7TzXkHdQXgEPWDF",
  "key6": "2J61yyZkDt5j5HtFki6FLJW7dQdwWkCyBu1Ypb4r3PjGQLWbu9fhUDtvyqjtKMuJ2qp5g7apAFbi43NxWWATZwEF",
  "key7": "P93g3rmgueEHNJbjPCQ53bL9oZTfZK3VoBygGGm1jJpQQmv3GoYGvzofrrZQvT4XCFa2A3JPX4vdw75xYZmxBPK",
  "key8": "LEahqhnq3Tm7eXRCQTHYwQy7SAkYcGUwntyoXgi57WHLrGN4nWsise4q5BjE9pgdb3RjqzuseHr5ioq57UpKAMy",
  "key9": "3FqQ3zGZ8yE8eA7nMdkbXRPQMysPTVmiYnLgdAHrxJueg9YtsYnSZtLE2Lq54SgUa5r8y9NSAtGvRoZxKMECiTFG",
  "key10": "3vLCP5CBDmWmTp9RgyoWc3VHqXp7dEz3vqjHvHrN6UcCvxKtxicXBBpxqbsKPaZCBMJaqUYfBxAQxd3QnWXdMMTc",
  "key11": "rthKBvEWKPtfcafbPoCP7CddGaJ24BZEb8VRGRmYxYEk8mLJC1JT9tbRUjjd4gFFZi59gtmCoTpMhiNsspmhsxA",
  "key12": "2JU7PCZKbiYABp8Cdhn34c5avVpgwuHbB5k3ouDw87ybnxZ2kSnnYh9FfpwLYCbzUbotKCvsX9XXeugSuS9ENxpR",
  "key13": "3yXRHYM88Q48JF71bbmgMnB1Zk1AxaNFp3BbPwuYQH6gCpwKYWNXv8Rj9gEcH3iNH1DaAXUYR32jDfQxFsZ86uCF",
  "key14": "2jXHK3FEC8yrKrCL1QpuqHkDucUX4EzNpSc6Bnieb1Cwxiaz2S9mt1cMoTS5XvLhV4FAYFs2BgsPrkdQArPHwxs4",
  "key15": "3XJjkxM6pCPsVZEm21oEWNBwMHnRixcDRNLQcbunY3rHdxAEmgea1wcNxLcF9MkbrxwzDw1D9P1r2w67uJ1ptixJ",
  "key16": "229AmrZxgf3L4EqBTh8C6Qk58EPQeoHZMvXmyW4QFsjEFi3WK7fFdLbhUo4y35XUfvwx6UZP4PoVWjNcmVsCf1Zk",
  "key17": "613PT5CPuEAKW4F3dq8gWUdv7wGLdv35EhqScDN6doXwVYcyyX9Qo1zahEJyXFjthx3oYMNjthYcn68j9XaqWis4",
  "key18": "RZudX4j14zpDNrrHCoWQZhFTCXbxcaGEKqrScU938dNTpsKNmhbThQLZRaLzjGqGwJtU4UK6AWPeWjRve8zRyJy",
  "key19": "tQgvJ1UKxXT5ceXW7zorgu8zpbzJQqfd4TRnrtyWPPUxMUbLU2QRiZMhZuzGsqjbjepXS1YBiT8n34JtAs1nxm5",
  "key20": "bnb7t4Ke6imwNwqi6QKH9VMYkCHwR2ow14Jb78L8F4D5Eqm57WrKubVyKFNEeLQEcNPsudn8KnJBgqzNeVQfn56",
  "key21": "3qPmm7Lo7D22dgHYFHgWVMutfzbVkNAVVDR54vact88C743GmojSxPvPndXNKYENCWHMN7btLEd59dF3eem3mXPK",
  "key22": "59R2GbmKNvMGdBaj31yDwNCH2praEsVuJBEqUE4CWfgoZBHRyQTXsLfBkoPJ9sKKX3fLaXPWLA3Ycg9nSnCJuxnV",
  "key23": "3s5qUeqT26hY5foXqrQumamF1GnAmz8NB4ZWnKPf9ayBAHWDaJEEyx129QmNpCorYdPdeEnXtXAkJ8XKFU7MkDvK",
  "key24": "3EovY3f84q4NC7wTyUioScfnFHhVK43Wj9dcqwhbAVsXSVsuZ3xj9QYDCnxPRk1PJKsraA2YRpn2j2Y11qYWqAJT",
  "key25": "4PWBf1j2GRR4hGdGgyXx8XqDczGwr3SRLB6juQRsdtJ6s5Hrtu1QSyQrn52ASJV9sxgFQ9bwrXZtxKbMk5A2Q8BQ",
  "key26": "3qLDPJzKPqywvNfgsMYmB5Gx557WWLWW1zezd8MZKVG9yTCYBDuyiTh1pcijHSXhNiKUHFdhBt7LyBrgMBcDA8YL",
  "key27": "52BD1HgNqCkdDp9UUn2oDynGA63oekyfhraWcev1iPucQpsw2qpBNgfZBNyVezKheLvWc6d7Yk9AC6zVLRVbjCqp",
  "key28": "CHxmTE4uqtz7K8wUhjUeeoGQafV8yN9RtUeKASdDcVmWqpK8Fs2X7BccUbnEeSQLNv3pBxasGuzfH2YJ8dSVakQ",
  "key29": "4iZizRRPhz8tyBU2LEkMqJZRQYLBVbZPepSxeZk1HctxJWty1u5C6uUgAYxf3eVgU4F4BZot3h7iTvPPnCvbukJn",
  "key30": "5rzqroPrkTQHuaqGuZvGCzBrrQaLozBeh5Gdro2U1jLgGBHZsL1xNLzHoni4adF3tsv4QcPjBpiQnp6hHYUJLUAv",
  "key31": "5gEsDXb2J4i1EVPTe9shxnSW5iCzW4xtR8Ah8LSd5umNbASnid4hwadSsxpkTqLmvzQrikyichTeiPPqPmNLgbV",
  "key32": "3pkZKPRG1Bi6WaW4jVjarJ3QsHS1oytiRvPugQ1sSuGngCySeGTVxYBis7zoTRgXj2oYkgZiX3mW7r4ApWXbAwpp",
  "key33": "51K8XFsSyxVV11tfby9t5v7Kmc2n8KjgdXuA9cvRHq9nW1dehZmhDzuejhyvj7ooUV73xeLz95bCGquEws4Lf2a9",
  "key34": "5VesN4PSbrs7ij2Dv53LGqeqPRaaQJcXQQuC4Af3LE82YJPVYsDb2CTjTpwjrGkXR3fZ8dAUCqNDuh7hXdM2hAUh",
  "key35": "2vpjH4axr796evR3LA6zA4uSgMjG64RVY52JpsiirB6WLn9PqJkwXHWyPUDzcYMqWjCSB1151kpn21M5G9KHS1VE",
  "key36": "5QZ9orNT1KaXJNiGgwVKc4fsthq1rLU8Zzknx1yFscSq7bQ1fov6Phk4jrrCQTBEmx36frAip9ieJDa74VcrXs1R",
  "key37": "4hNQNg9sVMyNzn3WTgdjqkoiv73fLzwjWKY3xp4duVTBuqnWaKp3ovpV5je3jHVrqfNHyuez4M1JDjsXSoSdBUHo",
  "key38": "2C8HmgQ6pRZeqEVdhAmZCcCbo1SEu7CzcS4H7qzT8C26cws2VNhQTpaMz9NazN3gv8nAQxRosjQKSAitQtUNf3h4",
  "key39": "4VHZFtDRC7Ly856moZXzBNx4GxQ8Ps55m72tz6rpuMMqrTq8PtkvJdukL1uGG4kT96kQp1szPKikUEdzR4xQ3uLN",
  "key40": "5ZDV4RQtvjtgKehAW8A61c8m4C4U6GKRsvWstXyL6tZwBKjNFad17Y9zLHwmPW9cTcZjywC94X2JC1YqTKLcfeGu",
  "key41": "2cVHoy4oawmJnxQ7se4NwZBhiRs6QHGKrtMCh1b25SXPChQKFcH36pKjhMzN8boSY1VD2xmeDB7Sap24VdJ7eNR",
  "key42": "4myc4VL8thRa38F3EK8BJf3AXF3DVQ9TiYAMy7sWY15yRDUuBgzrzrvVpbiFSSCUccrx9VcSWr6RtpdBBa7mE3fk",
  "key43": "2coVYXfGjq22Hb5P4qcuU7L81AwrdhinKqYj6Fmv6yBRCTZEijoQGUmP5hAYkc2aikkbiihnvrNysxgHb5bFgXK",
  "key44": "4Cig3xiG5YMBxHGw5dXEx5CLwW7JFxNyMdY3aSnXspdyASsHtRCCZZGRbM6YfM855vr2k9viSURPtrtCN7kqXvih",
  "key45": "5qbT6hRp3bXvTWsKb8jzkZhkssikg9n4vYbp85TvjEpcpwB1kvYAXKHV7YKQFy9r2yY6k6TB7zTpCfpCLjk7SjBi",
  "key46": "4FoycmixR2n1KK5dCAEojezLRZ5RvavXDA78bVuRyELSPSyF249gCyixDqPjeSBBmYkEStELqNJVhD39vRd7xt5w",
  "key47": "4YM3R9RuAkG76rSyK1AA69HGfNux6uycGNc5WuNW7wHNAyAQtRvLZE1neQZmJRJEDV78b2SD2tb121apUMRiUgQF",
  "key48": "64t5Td7HY98U6WpeGG8gH6bBWbQivKBUyHyGuomqH8h4nPLBL1VofpK3GAGZEbnByT4QN3TXSe4kK2QeMSjHBbV5",
  "key49": "4PgST3Ncg69vMqGas89V5HgWf9MN7HLwUFD1oumZ29WyEznr214cQzizrcpeLD4xZkbhRKgxjRQryTu62c7BFQ4W"
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

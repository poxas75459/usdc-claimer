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
    "2E5dypx15C1Lyh6EYTGkktRPCESWyLoMYXgpWKuj4gbGo1sb2VuhmZ3GiQZsYtwywFF7DThfYkN9ZwiJpg97Y3vJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4L13fPBn9SAn87L3JtemRtvFBNAFczMXX1QsKfsJKKJwxYeiWjLz35Be1jerCWmD6J5i7yv53X1K4b8ASqFh9ddv",
  "key1": "4M3WX7fXriPsU3nJasjfmhhhszpJyCTm8VxH86ZScPaJeaYMEFxH7xeGRkLVWNKR5VhEf1TsfqfuoBvPDSx4raWA",
  "key2": "4jRWipHZFBftKSG8rcNm2BGDAzGvQUKzYxavQU8HjkdpYMHnjUDPJQcuB7hPYLSr8ArpLf1m8vv79xMurP6s2HKz",
  "key3": "58BVUmaUGR9jr7HsUFLMZG6n2pVGqrgSYMadZUU7WHhpz8Yb7dFaj4mXaE5xjk8mdsX986na3EVGE5F7NebfQzQB",
  "key4": "r1sdQCxVSNFAsrBvXWY8KDqZEESFqcLNuvSzQ9tCHXjptpVc87sjW9E4a7hYcGtDhvQWJf2npmkGsav8Q9FeNTg",
  "key5": "5MfLgseHGktcNmpz5aYYKPqzqDBiTuJssAC8meUGnhLVkyLnqmbVhURwCWcgVvPSDtqX7wtSEmSAmQtYVdFwFUNQ",
  "key6": "4Gsp4jxwZTWSYzap6bHmGLy3CzSi4w6cgL3qfoXYCQwAAbXEqr6WtS5L4AdZyf8xW3iBwq5ue47bYL5zk4ofzYPZ",
  "key7": "5BitJnxjoCU8SG4idjbkFmXMWYW7khCPKsmApwo2AC43UDZJtdFo7tEr8MfsL1Zj6Phfga5Z2LZDiHQHQ8e73iuU",
  "key8": "59CpZ2FMyXWm7Ms6rccFKBBPQBHCqD1mgebt4s72QpxqPuQQcAHtmMz33Jvc7UxizsEC6mz8E4R8XokLZjBxWceb",
  "key9": "3s3JF3dfEdZHKrw5Kpx2amZQNCkcCHLuC2Wg8p4Hih1NHNKW3P1dqPtaf5jAHrgvBaXj8myzSPr5icY84UQuvFwn",
  "key10": "YTRGzqxUWMdtkq56JoHeMRBFHTZEqASJX2foJkHBvqbeSMSZKXPaPgpRgentYQfAhsM5RbMdURP4WtfDTio558d",
  "key11": "3tYdLAEf3iY91c95vjoyf6kiMyJ7AqwpAd7AbL88jJ2sCyzbpDWDAXbQkt3auDZF4rwaE7YAEBouKN7XPQgr9JWe",
  "key12": "5rx7D35jinjh7YTn9iadiNS1EEdj8GALiHZbUQNVo45bo2mZVsrNi3CL6QuecsBrAvyoDrX21i6VPV6yRfZ4n6WA",
  "key13": "2JW2fBsstfvbJ9XKZxMC34KgvV95XVJcWNwMfA6XKScWMGyBaYAZSX42f1jJWHSgSjYCjCHTWToTifaECusPm9U2",
  "key14": "eh4hVVE6FxPGusG4GfynhpnYHTj5qnhVmNCJpLyrEBH5WhWSfynjFaN7LUYzsaRPEnpWjRVvePtY51pndZQhq8x",
  "key15": "REPhaRQFLXsaR7y8ciQMpje23YdcpbA9xNfB82p4T9FyqV4kxR5hY84iXsfLgZa9QfH2tc9uikCPGEQUJE7RWMe",
  "key16": "4DF2CkCUfYCi8ATbkkeww672Jft2EPmeCnBGVUrNsgCZvjqZkEpXPTxTqHMDc1ya4NLvboqvy4fP4PbERLpcof6L",
  "key17": "3KKxnV1U1vRHyvhuxaCbGDzunnqG2vm8zyj6GYnscDYQEiiq7YCyWpb8fKZfdJ1YfpmuqpA9TQAKGxe8sKtTL8uc",
  "key18": "2YR12VUZyAaa1cSSqdQw8hyR4R4LXatee77hwj2iq9mzHHiaQ9ER2kbjNAJosb7H7apFhr7KnUrbQbQZLRs2ELyF",
  "key19": "6ADQ2cz63EEsjEKMYmMyPsq2TpdQvZTn5TsN4JguFjvuXqToVyLXrfVWhCmdPpQ5zA72YnBGUd1BBJyBhnaYyk2",
  "key20": "3dsQZVE7jDn4Jn9PZKdmnFpGHeTMPW4z8GyXzpaEGzS4tTLida5utEMk458xA2FRmsCDMrxiABeAXChfTMQ6pGQB",
  "key21": "5xTbn4Bgnwxc62kYKjfjGDS9v3y7xGec8AJhhtiV4TUY4xmuHxoPRqB7cWGvPp4PXPdao8zLuzhQAx7RDqu8MDpV",
  "key22": "WXdG3SCPVWJEmbiS9EHseyjpKJE4kLtrjut5P2W3BDPug1oa8Fv3sT99huLi5RsnpfUvgQLV69HXa6bSocZKwHG",
  "key23": "4sKytChFjTacvvRrpWWvz8gk4CSgJEAfysRoWCdbPv8fmAWtVyHjyUACz7XzXrDUpUpMgNiqHaa7SDPMF5d7aGa9",
  "key24": "22m7Tumigi1vNX4ZeKRciwMLcHiFe6E4J3VsZqafB5ejkeYqjP9FztL4k98NeE1WdJMS1AiwRGsbnmpTpNUnhftB",
  "key25": "4cf8CkgsG7vMuzkyf5C6aAZEWzH6wG4yY86YByPRuEqD9fZapuknaH3CvZUaWKoCD2ouRP21Ai2KSA2qyopRgqu3",
  "key26": "9cHse6UQ1C8xfXPbRCJCGRwcUsLcwNvqYSrG5fSYD1qmEFCa9YJ6odjmeudXrraoH37ac73kqfE2vuoEmQ1dT1e",
  "key27": "63sYve6WA2WnYim8qLAeLXdVRt3anAfodqULr6JUH2RCzMBv55oRSkfYf1a6uZmCziV3RuLCy5ETMYhbX2iGWSHs",
  "key28": "Gbmqso7pjNJzp9vjXZcunHfC83UfqzJsozyoCRCqmRQusg95SRTUQ4SPpNEf95kz6yCdTsVot3cp37cWXuzj3BL",
  "key29": "3AGrmvytBQ2LcztWdfGtSFhXTTUAKBH1pza1HTwbZKXDP6LiUzvD9cpWftHuithjzje2dSvzM2eXaTVCK1sdzrEe",
  "key30": "4L5riB9wbpDDy6sCfumAZwdZpWzCkUCDrMfggAAbW3fCRsZhdEEGiE9furt6Khcp96eTmUWDYR4wci7bd2cBvjAE",
  "key31": "2MgAdr6FNTVoVT3LQJkGXDhqMk45xu25ZYkRQEStXLYwRDkBfQwwAoexYvg42f73UJSwVcevxyMBbJiCSKZsgT4S",
  "key32": "5UP9py1nFFFBAqb22aMk1SRNTAbQUzPQ2tCDZ2gRN6HKhH6u3b3pUUVFKqHgR2aU75YKrPg1pmPqpGjkuLM4dM2J",
  "key33": "4aXtQNPiPBpxp5nQDz3g3Zthmg7ovqXQqqYSmYdhiRzDqM3QezXbENBS4r1CiEzWKEySeBazSGZ1HX1TwqC7c5Ye",
  "key34": "34LxQYzCpSJ8rNNX4D7iu72FirsaBeahGcQkZo9YscEsDzXq4woRcfRMFqMNR4jPDoYfuwgXdkr7uZXnkjJp6Zcv",
  "key35": "5Ud99MGezocTAVmrp3d2nxrhTpKbLaZojRDbEiL4oeoaTBRQTQRhxLQBmcN6SFPvcm9xo5GeXKeMq6kdt7JLUjHE",
  "key36": "3XRYmPjJph6Utpm1pnQtQQuiWNmt2Cr6x9p8D9Yf13Vz9PAejgDZpyfw3Y2DiduZadJXnyKkoCzaLEtzjREVRtNE",
  "key37": "4DZbHWn3DffLRFKw8629vUhcfh95XKcsMtrNyUBfNZ9CLdpv8n3AuDaekTXatcxPdsKM9ZX3KiBQm3z2Ppvd9t8V",
  "key38": "6R46P28ihh5AGJjCzbyRKFkmhrAFys8CJCJF43j47FgGHy88Tx6Epm5GYX9owcvVQjB38PMpHjW6dcpxN5ZoxAN",
  "key39": "4PfCZwRfnLY8imhxcu89JMuFTe6mT55Rki8qDRArsG4B8ey56LbKeQYRpPHn7Jkg7EEEqLeXRGQfsJ9NEWcXUXQR",
  "key40": "4aCugTiCR82CHY41A2vCSWTPZYKBfc28QTBDzQVRpa4zHizQBsy67vNozKzV1P1y1sqUkVnZUg2W8rfcifMfk4wm",
  "key41": "5FzENMCebdmQSDHwEpDvJmtwSEpPuAMKvbKxm8VgnMdGvyYcoab3WErBQy2etBR1uMpwGJT7BiPGhiZkaVX4CugP",
  "key42": "486cP3Ff5sX64gDhVi3MSHhP8UVc2rco2bAQrgvmF6N5iwKhjhE51sKDp46a6rHyvkMnHQvrZ1EL5gswRWPYhD1N",
  "key43": "24UsRCeKKWg9A8n6Pfzy2NzJhhtSJbHC5RAo2NwxqN2ajWJpm248c1UbM1BwXaXTkaEUUn17eia856rLVHvSTDme",
  "key44": "4E7Pjg9gLikurJoA4NYv52RbTsRmg4aCPYoHtjz2Maz2XWzYFiWfKme69twYsNgTN4S16WrhcFbxcdMNafdbNfZs",
  "key45": "3M2QQ6GLqhDWjkEhRXKVdkT1LMLaSGb3psw3m9HUC6TLXiPHFmSVpp5TmY5eKksNvFsRGqvPyZxSuQmWXBH1kAKj",
  "key46": "HjSAJK9NcQtEDeRvkNAs3NLDy8aMMUKWqr2sd4G6KoLro22NBoRQUBy9aWFW2UNSgi8iyh1rFaFESeRghQgJgpb",
  "key47": "drhXzcBwJXmYniWTV5toVXTTzdqwwpdFiKLGHY1zdTjrrp3TQG3BFXCHUmB5WUe33KXP7W1Nd858QF8eKBvtPoN",
  "key48": "4aPumTme54omdAWXP5u93uhAL8KqEzDaXNSWnPiDVeNDMGaoej8EFJWYkcNYZ3yabXnD5iTzVtBqZS9A22RAM2op"
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

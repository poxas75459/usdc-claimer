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
    "VyeHDLB3TLNhG1JuNvMN1XiTwQSiNH6YEpeE2afi3FN3Q4yk6fwdD9YyJSwpj2jG8fWUEtozqhXku9Dp1YtCYqi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21E9mXJxkjLh7omoRBiVDBWBuPp2p5JFJDZG7q7YemDkHTQjYKsrYaan2tRi619q1kfw8Y3r9n8fzh7hHss3tpN6",
  "key1": "pbSWNmogYH1JEmqkw22LFnYvDpk2DnaAjmWc7Z64kUbiGVufs2GH4tCHXpfGXYJj59TJcZHPneB1AdXmdr4Q93y",
  "key2": "3fMqsj278VBC9kvQHxcGLSWSg8AhdpdGyrcJ99wf87wuh6MdgMeWzxF4t8x7nnzAFywj34PkoXziMdGHb6RyPVcr",
  "key3": "uhwd2k4RUAr2iAnuC1y4CmCdN1pRc2uWmkYoEEUH1GxxRGExkJUe7ioftELTA5uaE9HkbiSwEJ7F3qH9Fs9A35u",
  "key4": "rxeGMMtV5ttK6osK7awVqoK6uBCoz5XULq8RcJgMwSfhhHLUpx3wPmRG5z7uNkqickoBgm9FCgvqyLBxamSwj3H",
  "key5": "64BcMRH2X1KD4y2nM1mQSRS5i5C5pzHUtpwvJnC8MCRtK7DSNmVy8F1YjxhZ27EcDMMAeoSTfMW3eEXfaNax9MxB",
  "key6": "3EZwuMH7HU6YvgR3y5WdP6avQgLu9E6NqbxokayskSw8iEdQ9zfwT6iF3fag6uUxiJX6wTyNJcResxpwjfP6NVDZ",
  "key7": "3Vn7pCSvGcPvEDdnJfYhm9uVyyx3F54w3s1aLBcEFJErv6dBwD7dmrgiTM1DdyPvpSRSM8fg3CWGVEeBrDypSWpd",
  "key8": "2xYXNatuT4uPqbMzzxYpfCSd8WL6PgjwZXzxb9qWJtLaM93bZ2v6QrQpuLnuuxHLW8Fv83cBRsmcFSNFca7qDHDN",
  "key9": "xGfs9F3inG8N3beGrKQo6RUKgLg3gpjHoJ5zy5r9zHawHQuu1NaWJPriPnkJhwcKrxDHQWk8mpnHC2mzETiK38G",
  "key10": "4gSvWh2YY7oRbshL11SkhER7zLosjbCfTshE57SxVseYQ8LNXduyC7qEGHL4gUYSv4kwuvPZgAbeeKMjSwBbRzcn",
  "key11": "5nV6DAhqeMYxt9FDjb5xBcQV9mWJYmShwcAi1J74mys7S9d7LfX9qGJgvAWDscqhzP4ouTuwgg1AUcbodpgLkomy",
  "key12": "5LxAeiL7NqKf3ioeSaHAx4s9enVvRFhq4saFYipCwKeRC35PX9XyVU3JTom1snDngACxDnK8Z9v4SH4n2mpzCuxj",
  "key13": "XjWsVzmQtvyxwhi8vko96kg7djSFybXiRzmE7Nf2qDtBz8t9tcybY3aDT8xtL7cd4Kpi6XaQX9qeGTFeQ1GL4ti",
  "key14": "377xXdsYaZ5QGLxezYEEFBpL67HYL1hhLrfU525ZfAwPV8kD62zhUNinvSu8r4545oNWN8hjvKBGswHMmiqanyvV",
  "key15": "5Ytf1ju2mM3spmxE1TTU91i6HevCYvdkE9Akdm4nJVsfTEzLLqHBUEW5coNzqH6ywvd8HSEmmUH3Xv5NfTLHBUYj",
  "key16": "5gYDSzKg2kHSzBP3nEgKosNfE3SKTR7A7KFUaFrGjsiM3vkBUWJr64NcCWN7MJdRwS2drrCzu5gSRg5sVBFqMHvq",
  "key17": "FTSwQgk31gUiC2mwqzQStkycSH2EJMyzmFcHCGmG2kCvraDbbsrZNZuZ58bP2b76DtozjHYouahJB9CrPo5KuLv",
  "key18": "47xNT58ejWmkLKTp1AfMLBSYkfUoNQb2QgcDL5ikat9ChRfP2CWnL3e3Xm6nEkYTsdSS3ZWAxvLqscrtK9APFZ34",
  "key19": "25CZf1dGHzMGZCepen76iZ5jn5J2vnwTAj1Ds3ChJJBYm5P9BWGJFibubnNzUmJJkbexQsPZ5ryznqYci4Jv7yzK",
  "key20": "63haYqk8XySg1rMh17gB9XGWK5HuftfP9tSyUwRK4eqqAvgeKoAiytt1Hkk77cD8cecWXX38C7qx77Jb7qboCkFb",
  "key21": "4TRJcNAStkxjaPUCQhHN2HmQsQfk3KAVzx9CYqpCzzqAAtniCriSNq3i8RJ1NVjAKmanCjm7gGqgUj5W3ExRcQ4u",
  "key22": "2WgxbrX7dJfW82S9qAHc9CNYZqTjzJ8iVg8jpeEqXotnaCkJjTBg9ZaY6HveTX6sDjYWDhiPY8gyiSnRfu4XRwcE",
  "key23": "3Js4vzVf9zn29hA55bRprgHdK5PjHrEhzqDhzinC2fjoryqLEr2SsFaj2pX9NDfRBNEWfieNuz7jANy4WgWZmtH7",
  "key24": "3tdT4FQwospfrx5np7cYjZYm7TzSroVmVa3GS62MAYzJ42h4ZEtXCKHY1hbxA55HM6KS7a9q2mTNzUsh5wUQ2XcD",
  "key25": "8fhZTy39UVn5gJnhqNyPFugMeDBcpkXndSgjrndw936q3gNXUR9md15WCT3s1CMxQP38CYC765JsGPtWpLhP2F9",
  "key26": "25aCy4aCKmSR8vfdqrxjSWJFntvwER5xtoWYVngD6AvSBtxkykaNDavgjycsRPxpUufZ4kozwZoT4z3x3GQF5due",
  "key27": "59VQ46iegLcaPcjtYg8pknNRZZr7RYSB3Bd1qHyVB1aanfxTbbpTaWaEUopn6EpPq9gK5ELN4tcUbST2kon7kdrw",
  "key28": "wMj1fF32ng5CdnjqRgw9PyDRUmxsRVubTLTMWa1VwaHKHPuacep3ygCgCj2dvtATntFppqCyZw5Jn4QcmpFH5uH",
  "key29": "366fpTEijHbGVmwGdbUPotZqXyY9qZbENDG8pLDaXDa2phZAT4thyZyjVz6hnq2G2w1jrrAvZ9TiVikRJwLbRcUk",
  "key30": "WQ1dem6f8KNeaQZbdtUoHaSsq7Mp95vawJL7ZY4V9YvdLJ2jSxAZMsSSG3kLWHjmMcJYjMpioD1ojakGAnnXMck",
  "key31": "3d8nRdqei4jhVzFod3MaiRxPRrwAnS4GwfUaaR22xhiTCuo4dTGnRUr1L1pvipWcnCWvAJ4KjyvQf3fUm5u7SKdt",
  "key32": "5KPes2FnVxYU3wxJQsgAV6vuF2QS2YB14FY5TozmpAjKhAQePxdSk2Hyoct3HkRYSMRt5tPsphGWS7R2smtpLDJg",
  "key33": "23cdLS78rr9JsPDBnK73DysyJ5DAccTSbV3zrcAS3hK6zAWBZmx2NHDeNWuyFwuUM1aN7jwfEmbFngrrLc15cGxv",
  "key34": "5KXwCvENHb1beqZBic8EgXi3T1QRA96TEGBYVgY1Eer2C4kDzmgSrFmcQKDSV9iwEzxpvmRPKVLgVNc6KhR7Ajbd",
  "key35": "32Tyo4QfPik13KzkEDrU3g75bcUhrcvcPizCqX7maRBLmXinRU4Mgz6GQ99a7sL3zccCAPjyuj8EQAoZXEkGVsxB",
  "key36": "3NvZCPWbtRT85pAhpaHBwy9wxi91yiwtvDcgqmru3fteLWVTEpWXAeZaiS5A69GNBVVwtyC2U1F891jtLA9ddERT",
  "key37": "gShFbcforZsvgxDwa6gf9449s585UpZ4zgzQWssyPLFu8B9ZSmgnKZvogFR5wQq8ydqrXuqqvv3xQBGZgcsuvmP"
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

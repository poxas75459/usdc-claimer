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
    "39yLCuBJxs9Nx16e7cW4bbsoq8LxpMBTCCbe1nyciQz1p2B7WQUS1WGbbSSBEzvAe6yaxmkcB8LLi8pCREmEtuhX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xS3Nf1kWFQbC8sfij3XFyKRwQRyAwREnDGuiwpmheNDXt473iC7edh6seTyuYBxGJMeYpxTDRZeKtWGqTrXBR4u",
  "key1": "4oP3Yxw5bJLuNkyzoxLpZ7TpAJKwX3R7m6H4TtVBQz9knXLL9Hr8AaHRVufmktQEVzn2AjYSS5jSwwA7YtybdwNA",
  "key2": "5taqEL2ALqHXpd7diMncPZyKnsxf6wxQbokjkJXJzCXQdZc72kHpSWxtbWR1KjFQuZKbAy64g9tVb477JQoJwgvi",
  "key3": "645k3UDKKa9uZjdh8wXVRZq6bJ2Lp6HXEFVCM1HgkVi9mj1ocq4jmNhJSH4byV2ghYkeJ9abkCso4u8FEDtXK6HE",
  "key4": "oxj5jPVjywtgwgGFVP1oY58p4vHh4EkizDskg1HFRUWsYG8rJXaBzaS2wapCUiD7ZTgZXJXYcfaqSF7pWErUNwH",
  "key5": "5z8fuXqDAThBwjDQ35fpXNQXF27rEBib8zQs9cRKjGSDPPm72zMQEgWVjcfTm7zkzxdRQAAN5Qbe1FrjyQwaJvDs",
  "key6": "2aHJsr4CiaZWd796u3kZ1k4nvWrSdGRPDfPrsCRqK1jqX43sXnovkcLdT3g1jzwfCKL5AimHhhbppdqoRHNX12ez",
  "key7": "QZXtCg2PhL69p4EDRgSxdZth24hbYQZjjV5Pm84ZXdiYWuVxR7o6p2U4K3smhW1UFparzAJX4WxQLvFV8ZCnnCZ",
  "key8": "5JhKZgyuzbcNUYCu45wnwqXvriwhjaS9Ve92KXjbTZwVjyxrjiCUAPgZm95s2SVTsCfJBCEDXfCYF18NtfGV5v5x",
  "key9": "2oPmwRG17sYCsqA1XXfWq62Hww4oSwMojshf2fEwaCAd27hJsZTpbiE7ExdHEWjKNQDiUe4Jnwmq5PDGMZxkxAjG",
  "key10": "5p3ot73Jm78mmfCJJaA8QwPCpduXM6ru22QnEpE17zz7TKpuMgimaYed8wRdifEMvNgtveCA8KDXpCeJFA7pcWKS",
  "key11": "2tNAZMv4hWjkgCBwnSaBr91X4UVs1gX7XiTgYYpqPad9vBV8oZDj4T867BViy8QtMHT6X1e5AJ8cDCmvRFrx6Hzb",
  "key12": "3ZPMM9riu9MRs4a6DBUHH2UiJBm86NzzdFJZPNZX7v7CaG45DJ2J9VaNzTq2ehHsafYk3utUWoarwP6u4aPxr2R7",
  "key13": "5wXjaxgCYDSy9nnaY4a6weQBDLCE4TxE4FeRANvaTd5TmhDmTnT8ToBeKHt4KPtzgEP9haUxHcmx9vfTWRy2WFgL",
  "key14": "4gKUGKYhcLzViJc8c4bCJngWVKacuFgf5244RHnB5hYYANHFqiDD9mVocqwYn6W5DCK3wgtdGnuT3YZNnMNtpv1J",
  "key15": "2PrpwbJa5DcvopdSuzySK874cjyHxvPRYK7bqV37xWeqk5f9t2U5XKz91eK6Huf8CB4mWoUiqDf5gGVJp96ZPwvC",
  "key16": "4sCNYcJmAvundnMVwu49sDjTciCDA3yMoRcwGAYaSQPGFrFKTEn818gWVU4Gp461ayk9kzWF3hnNArhDokcoYXPA",
  "key17": "2PmcpRNrhEwTMFBwG7MrwiuCMTmXtWo63MggPuXjPJ8NNpfSsLgnCqeoQEM5SWbMyTbcbvtJrG2VH9qdTFyzwsHh",
  "key18": "58qnrFZG6uLZXUrtwUy1EPsFf7cabf9gATDAYYQkT8DzLg87c6i7HQYbRgSH11LsYAw7ZugNqmrniLFGmrJZ3Gvs",
  "key19": "34Dk6ukMFUfHkrRRdo2VDmmmFN2SnWwhtaxoHcYMdYYGr3hQEqWT7a9YP7L2tab1KKcn79jR2m9JnCdpgRedCMSz",
  "key20": "5z33q9k5tEsqigYmBzbDkQETq5Sb11MNShrTrRodNYRf2UxkBViX12tzmwRgmoUAySZGGB9Du8cUuDsSNgE99inN",
  "key21": "5fkEUpSbsSoFQxq3hvLg5oR2STFR8Fty4NJATM11RsCBZD6iuHsEkGMNqwccvRgQxrUB7PPQpKVdxeSCDHezbKtz",
  "key22": "4a76CnzcggVWjrLHBTPS3baWLfNDP1TcvNq9sGWhDLaLKAkJnWtBQETuEauBWbQHML9CTXZ5nPdt4qNmHZ3kECWV",
  "key23": "2KXyd2UsPTqY6dbzxU2pnPbNtigQ5DaafArM8mgRuo4vJVAorTkH1EnHak9z7Am9jiEQPMT7bW7cmPggYj4vgdK7",
  "key24": "3iWq9fV6LJD8BBJTNWz8YTCqmvqGaDyeDWA2AQruUcEofzPTSCgJuwFgTM5fg3wccCjPeygJc5pjnvFx8STjpKD6",
  "key25": "2uHr8uYtznj5MNLJFjjQWmiv6spQkCMTuHZvAYK7qQK7t8HJj4yCukeFgAdVbS2mZ7jMksGdwfd3URALwJ9iX8kT",
  "key26": "3wjcWmDEyLhE4rCMZ4RvCFqBgWkoV4nR9ugSuXD4UVSgsPZPVwLfMk1yW8FsnQiCvDRK67hbm359k7z2p1CoWKNW",
  "key27": "46aT35ohpZ12uTThKF5hCceEcEUMLXQ5vKQfCr9kfk51idsEwpH4SMMGTtrJfwrGatpGhkBKWuUyaX9SvDYVyAUg",
  "key28": "3DwY5dFuVNZCG6gebQuFj18uPdNBgSJYdUG6hZY8AqsZUdmDfzVj68RWojHRhcqwwGNtWaXo3CsmhfSZGU969UFp",
  "key29": "3wG36fMjvuLT8QgYNo3ch3sqM2WwcBcHWxKVZJyrgVqWnnGXN3jqZK2Riby4aYhvQM6UZwsJKUqfvoLTH2HTn7ud",
  "key30": "5Xa2vUXFQNhFgXDUw9e2RqzyxvPUn3DpFJbJkY2DmYRkfPrzQE4gQCrCZZRuafHSg81B93fd8mkFDQ8yny96YEj4",
  "key31": "641DjX6HsBnqRiiBoYTWtSNCdLR7j2UEbKSjNZwEzXbZj13fQJPuCFboTnAJ4bcarZWoRgkSTgpGb4kvvp9Y1TH6",
  "key32": "2csi7ExzSxJ3U6PvrZkokB88gZJxMrRnRvUxjMiyRwYTKU8Lxa4JPbrz6JDGKJDehgydjdhiccNy4XYFy8ExaBaX",
  "key33": "e6LSB88B75ecXwX3UGeZ5gjd3w8zkXJvzj8amkqfafxaqvKB6TZ8jyy4EQYWdXJc9sXku4YEnjJ541hZpkL6pUn",
  "key34": "4AvxrnVfoL7sPREmjKBJ1Uoni8qeyiuupHUSc1EjG8KWFFN9BPGLn4GbkL3FyAH4z5QShE19VmDHx1X4w9q7sNuQ",
  "key35": "3Q5Smtx4Jo581u9mdmnevuqzfa8Axn23ovEkYB9jxJG553r4Kt9nxRbtgybp4kuzxpAExTkXqXTYikBXwmhZzR9w",
  "key36": "4QiGfSnzqp1Ug5t2Vcaqe2WTYFnR7eFDzaywddUSiKqSrqhYhqySjSiRcArAN7N4oaxXLTm9jDga2HfqwTTjY1fV",
  "key37": "25GshM3oSpZ5KqyhRyiDk5uxXa8R3uUPa9YjtyS1NTJX6ve4N6Pq4w9mfoGUiV2Vh46JQgoV3vJWC55FweKEMZJW",
  "key38": "5ubRWu4YyDuahcjeasef3H4gkv4xTSk8FLBgrwQLz4mNcEtxVkD6eosQXGbF5ApoSfQp8Cb3Wn9Goz4GWPXyocn4"
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

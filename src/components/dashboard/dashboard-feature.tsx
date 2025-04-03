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
    "3gVV3SsJbQY1z4W9q5nxknzrdDKZSvgXhdF52uvh6yScNSryWDfEqoy2ibZ6HKNV5uUZqQA2Vsb4Ym6wM5FGz3db"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZRHngABuUDP5ud7GDQfPDo3fuXDf9Th4FoDiHgT84kVkEhPcAo3T3gBrd2vuAnEYrVYNDPvFqBSRJ1qYjTwMzfQ",
  "key1": "MEVWJEadpAdhMJKKsuETP3JxFKNEpqyU5eN5P7BhT28FU3eGKfbGN9kGBtbEzZPL9UyrpkgGC9Mgw3rbQPZX95p",
  "key2": "NZBpv8AqGMC6FfjZqRcHMJEG9tzfLCq5az6xBVQq5anqSLQmgBzcw7ULYQhMYP5MiJC1fG33qNBhYqwDUmb15rs",
  "key3": "2sG7FV1aXi1uVmJnMuq62iNCtfbtPqm8yaP9fSG1vkePamQhepUtmTP34JR8atKbechRN9vrSDY6xudLb2kEuQEc",
  "key4": "3dUQn3USgmFeLLY7kagFeSupBmvqmefRpW7PqePjamLceN7u5EVGBDe4NrraJ6jBQM6H9hfaEmw45yyXx84JjJah",
  "key5": "2ZAXdj5V56uhWvk5wXK7F7aCNBp5kHHNxxBefkBST8xWg5b1YQoUdDN7eCBr3KHD32R1ipH5AzndTZv3itQ5hhiF",
  "key6": "NrUpVTEvC4VkhiyPinR8WoFUJEzsGU1Kki89eN8ZqqspRyqmqDeD7aR6TiEodqLSLu6cQJu95GzP6SdMtxtx1EA",
  "key7": "fYEH5HjEQ5zAhWGt4SzLiTGmo1YrDE2h7NtFzdVhnscLS2UpTNv3vtn5XNgAbejavsExDWufAkKxdeHK4RBhq3P",
  "key8": "2ZvFbD92C4xKtBjfWKsyEHML25naHn2DXmjHqWsv8RyAnDWxo4ZmQzTZwdKd4Xjr6hV722y9CnqYtaeuDZPKbuEL",
  "key9": "VUFjwRr7bwnMfAzo1FQmVYbb2oHYPjGt4dfVK5ctUj8f3BuSNK3YjvGNqhtDnBhyyXZaJMQmg1VJiu84YZfK8jy",
  "key10": "4Ebotn86N5G8xWGAWHWB4zNyCuNgVF7ynHU8sTwQuLBhaUWQbexsEdyu8F4bDVsmxEdG7XHTsrPrZP76QEaNUaEB",
  "key11": "5oMefCvoSbmcvp2xKp7SGqPfz5kC6AvjfEMudo5X1UDpv5HVTMK9UrF2BnAjTdR8Z7uw6U8mNZP4fbFHZMV5XSNp",
  "key12": "33UHx3qDNpbTpbXtw7qWzDkT1aXdNpp4ybq4hpMFFUPEHieMGWsQepCef9by5s1Ts26KL6Qc3NjVk5STZxjmx6By",
  "key13": "3vV1BaUxXAVKVVBcwJZXBN9QGuf7sxrBPZPpYFspHbazNMVjf4nHeoepy6v2WbvohcPHxPNPEk8SE9kwT1iW2hGG",
  "key14": "5PpMqJWXiQmALZUiAyuJkRrhbtQyjoxRkzDBZSWH12fKvTb7qbHU34ispjovnxYmwahbj3UT8ocrdSaSqxU11pjU",
  "key15": "5A1t9f5MSD6rVNDL3RwdCXaFxavjSfksxXCY64ptVaBVm3YrnkT2KwSNkaQfKJLziE4kfL1K8QqgC862mamp8hhW",
  "key16": "57EzxeRJyZkiJEWcWHHmADkByrfiZqtAp6Fyt6FRv5M6FisCLZJTHp8UT5poShySRhDxHosyZ6uGzy4iszuQDA7B",
  "key17": "F1KRDFABnNPW43eJfQ2gGqnNZEmQg4W8RDeCJjefZ6f1UWqpNJuupp2auphQmhEHkkwMw1JbHm2FyPpajYZkPJN",
  "key18": "WiWayszdkwdP9gg7psHNXtpN4Ko17JrgLkSEYaXp3FHnkyGmHoUQGohexou1WBH4SZnrCsdYFishitopX1N3Qds",
  "key19": "43PCmkkMuKcUUikXQYSPd9KVGYYxexrfoYybLSGw31EgUjKtcnX1Nywmskp4dmkRmdzujpAbGk9cekvdHLVvPBQF",
  "key20": "4RRxr2EviC7H5cn6bAShBZzSLB4sg5rPqvChfK5p3meTjKd1ag7sEuBJGEghhj84YqCD9PBQb731uEthcKSVaBw8",
  "key21": "2x5NWLSHyztGrnriwTEJwZGTtQsoMiVRDG2noKqcGyG6GqxFhBZVPS9jZ2V3j9viBnwrQVCyuXLnBMZZkr99Xvpa",
  "key22": "5SzecmctLtNCTMECjQQm2NQ2H3qreUqznDfjoVuwCicm4iMMudLLrpZ6qB2y9g534JrjDLg7e4x3QbCbeh6vMw2c",
  "key23": "3dRDJXFZ4SpqKPxmktTfSygKasSHqgMKWUJFXecsnRt8nnCMXN1uLYUB5HmxSk1TRczTmArsrjudFaFnzPQLLNVv",
  "key24": "h5Ab3xkVUoTy6LK71fdHcExoy3jDXohk79AFph3JXkJgPyKbkGoKbetecffb7BTSa3bTS2CbEiWgGP4vPXKdUoh",
  "key25": "3VHiCL4qEM4iEagE3NMqunVy9F41GmYAw8VsX3vzST6bKHadMxCJaCsCUEPu8UXyfYtDqYJwhhHZ1BZs7HbdWD8x",
  "key26": "5RSzi487GNkkwXsqwDbpH1xpPLh4gTmY1jjZsNCgRuPxHGkcBq9x568NVyn8R76cEeTCYDgLGMCkQmXRKFDkiRDE",
  "key27": "4crepnUjQrZDJBLY7D85FgQbyyFxXVaYViLvJVuQBc2u1UHmpshwERr16vvEsZH3KXbRyUVhS4tXU9nH4Uh4nSXf",
  "key28": "35U5oa7ZnTHNBN9wvxUjNchv9ByBnEGfm9dLWo5vVHwnS96DiXtHa522CuWRdTdNHNqybbwNLhi89FNuHnxgdbXN",
  "key29": "3shKAikXmPMp5aYuMP32UgWFBJ5gdG5gAEdJxNxJwPJj1wSJwPFa9G1epPQZsyEuDYfuzzX2MVDiD9PVsvU6Dmqv",
  "key30": "3yq6YC7qeBxAMTr2qDDQiLYNjyREnnHLZVAuk82tcSk6P1zgTYVZGrj34y8D47iyVSk8zQSJahrcN3nzHPVyxPs2",
  "key31": "4fots36wJp2KMTEXWPeTgTEtdwkCKM2Jmo2WDHbZnFE74gvrGNS2T5s9Easoygo9sok9f7ssaygpWFJe99SdnS4P",
  "key32": "3EWbvs8UEZ1RVMV3Ao599tjGdjEF6BoXTb4ND6k46nPnByeecGH7eKU9MHvhh2oPyf6L8GLNnzHHrNReLQvYiLXi",
  "key33": "5Ef4GZxEV6ky2foBintfQJijH7yQLhnVC1wXwEevJ7CLVFJKTuyHBuubuDqcZJuNBUJtpfL8PtictRW3SssMyFh6",
  "key34": "3FUTT772EGGSYZXg7s6pm6Zv9PHhaRAF5VWDHMteHEzsKSyTz92xr1MGUMCzNN8BkGSCGWciyjMex5VmfzfEku3E",
  "key35": "rYXR55kQFp2yh7Dh7DgNsvRv4qeRjCY13xCowzsxjTeVP5Ejmszv2QuvbPezcHcKhFpoYUJ5X9EuKJKLNu9NaLD",
  "key36": "9ypv3GNwhX71oysmH3Z3SEhAokvFgsxryAeTYgPquRiPPMahDtgF4d77iaCVzXMb5HTUPwWUpR6K3Az85LEv6cw",
  "key37": "2iL2iUBz6XyA6M69f5HyW6bQrCg2h73MLUq2V6CRnSJmm9QDDDVD86auHnFXtbNC38YcLPSQuWhXG1CBfsgD8JwN",
  "key38": "NPGwH8AH2rYZJrkDuVpuQ63dhnjd3syH1Xbq2fz3BeiPoVhp6qxmp9RUFNznN8ZMLRZ9WJnFkXt2v8C5M7qitFw",
  "key39": "5hagvBYQntYAGXZ17nAgoLfWsADEaDzMMSiDZ7tGPVtPYXtz215A7r99AgNLWMXSosWypHe8T6XPWXkLq1jzvGJD",
  "key40": "itpVmW3rfBWjtJtAmZfLNVzAqEnPxwZC9TAoXTxwmVN2WSmZknrMTTyPU52W3EbyB41soE9vAUUKsYTkupLpH1Q",
  "key41": "4VvSMFd35M79uXNGvxe9Kjd5PCVrUrWRevKqdYgYW91d12rG3q7cXK9Z55indhSn49bn7WFNnRi1csHXEaKpeJjY",
  "key42": "62Tg5NkT4nLLKwwwjjNXTbxDrQ7da97m9T5Z5gXCbQvdZDkk4cJCR4fQttugCv5bAX3WJvtPcucZZg2F3t7KDjpz"
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

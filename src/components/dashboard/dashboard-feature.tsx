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
    "NcBsH4hYUb5VCPJE2E3Zehk78HQ2xosX1qGUmNQZwh8bsubp2kUAEh5jMzEod8iyQ9qrVNYJGhYeS5Zyx1YCZQr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wyCVrjJiVmZp1mYFgyVBzRdSZzeaQUDVSFeTqDpjyyfSsny46Jjsvs7nzVChwwzqytQvB4Qwx9xtXGBhtjuUKPC",
  "key1": "HhBMFxiHWzcNangTkxVZFwvphe1XVnNRNPBdE6ozsGgLQikK2fF1zadS8xSXrotHfENeqa1LfsjJYAgUnKVASM4",
  "key2": "3H2W6MC9MYNypYFfgqn1PG9FKsxUwaXfLB5rvGqi6bApWcshKxHFrGJCqnUnDkNU5ps7b7ZcfGYhrrfBGW1gEmPH",
  "key3": "66aRoUc4k2opRJ2G8x1Rvnbny4fcupXrG3Kwc86UkvBg5PmMkuxjDc7t8dimMQj556MYQUndUsJjPnKyJ7msEdU1",
  "key4": "43FFSbh5M4xFGNAGg8h82iPjcbQECVB1w2iBAd3ZarFGLxD973CqFPbjcDeoASDen88Xbs4noUMp9FKE5ukssyeM",
  "key5": "2isezbYSihs2fJx8mgdLJpS7XUeRQaKwjsJwQPwsRSQfu2pjJM54GYCQNCZoY8kozamhYUKx7vpJi986ryTUprQJ",
  "key6": "4mUG8yXEcgAF7SBVztwihrEJyaQjoLq9XJLhENa7TqNCjWqakBiVWau5SfMdLNh4mtVqNSCp1SCfUXNgiGeYP8J2",
  "key7": "5k4aNDCwBQZVkVMfq4BYDEkpbpxyq5skFVqfvGFzvuHm8DgeZ2kHi9VXWJqmUUKjwKNBwC7Bqj7rtU5pYrZ7hQDV",
  "key8": "4QnzrTfDR8i7Qig5BNYtRaxscEq9Mtgk1aRqsHBTenwwUGaB1k3DcykSZQWu4VAGgEMRyHymGgbR4tc8FjkayYBT",
  "key9": "5kDS1EjZfmnBBACCjV9gRR8zM22u2ehECpRiXiA8j78YPviZXTgHuRhM4tzUh6pQmnjLBaK2xf8xQ6HgCEeRBF9S",
  "key10": "2bMnsikacHSHQsoXMPbEbpLBbAC3fnqzkmzrp8Jzef1ixTr4AC2vG7jb9QJc2L78yY2E9rPTzKVdamQTvYuntcdK",
  "key11": "3YUim6qQ5rj3eZfyxL4Z8hb1EeMn6K4pZYXPZi9Mhew9MerVr4k9p1xkxxPvRncogPikgWyNZU6iZhJjdeLN1p9",
  "key12": "3KYLYffyKzgVzf943fEc6riboaUQfEFjNMhCF8t7xfHiSqJ4xufkxahd6xYTWW7W43VcPZEGR2qehbn3b7D7fCDM",
  "key13": "4AYfJCkjXsvu5RrdoZJevXrbpzbu3zRzzLLeskW5MheQY5HPn8aQdKKkucWz2iwbVgo1pLARMHg6yzdRFU1jK1Co",
  "key14": "fmJ1eGoVTNguXN53gj9aZ67fpYjV2PPGpAow8oNRd5jdcbT6CQwhtUosjH6eNAiRm8GaKeVWMYvs7qib6e1TYyS",
  "key15": "58Y4gg5KqsMrAHccoPGnQZ1FfeGGbUPogykFSKeA3DkZA8kyHJ9pf5UeGiV84hG9ZBSW4axL82QUufjiwT5N9MiA",
  "key16": "2nYz9ss4ZyhD9MFLiwJZZKUdBM1bEZznYSyTtFkbPXr5iaJnQK1Kzx37hEsR78vsLz9oQJCkfSBJTcr6r9yZcDa9",
  "key17": "8jqaSVmDEGiFXdk3L2FXEnk9PkznCUbNzVdBCvXs61VsRKN95iCNG9zbZLz59piZp4DJ5iKxJREBVQqxAHfbBKL",
  "key18": "44hb92K5KCEqMGnfggiTSd7qLC5T5sctzJy5PYpwLB6GmFqSLp9nn5VM7MsL3qSiZ1jtdaLj5XueQmGhpa7UUmRS",
  "key19": "2cZmRSP8pH6oXnaCNaG8JiV9uiJ72jzDETehUKrjSMbsMZZQs7wAuyHWUy9GpcBvh7R45HtnDjZACVZH3qraSzqc",
  "key20": "5TqFLXajTktChC7V8wxT762uTfb53Uj9tFSXqL7tNtf9rMPbnrHEtwpQf4dJeKiBH2oqxoWp43AFG8PeaodZor5o",
  "key21": "4kee7tpPhqJPBoPBb3GCcw1jSgKb5iZ6t9ACD3BmwGGXckaPo7BiowKxGXga18hmc2nE1noiZVvw7Fiw3woHSyAp",
  "key22": "ReZhqQ9cJXb9KTWnGeLm2a3RbAELwJTqStPcZ8TrgBiuEKoGeUZsmmNSpasjzk9sbAbzGw9JE1gU6X5N9PP6LqM",
  "key23": "5SCfF4z26612Fe9KKR359mG5GsQTS6LA7s47cmp6ERNKNN3P6BZ7uEvco54PusMFARVNJNvoFtRUhp3Jwxv25Rvd",
  "key24": "58A7awYYo9pujwttiDnEyiEhfqFrTrSJEXnTQic3DejSWa76CLGhTThyhopJPKh8Ee2kom2iDe2N2eDCtsGAcabJ",
  "key25": "5HRmF9jY25hyyHr2xVoRTXMWm5Ko97zVrhfdjtm8Uvy2p1zEdvTttTjV9xGXmqqPDC66awcs27jT8aUwV9nW8G1R",
  "key26": "54LfZkc1LuEdwPJa2Bgyc6SqVhmHRQkPZgAz4k89U6NRfjYzh5S2MVXbPscYAtWv3P5fMGCRZBAtqA7Koe9fC7fM",
  "key27": "2wBmwnzUenLNaTTttthJXLvvh9qZBm3Fcc7z3y2bzQBGnYeoun8UUNVJZbDKySm3fBrU29wEtuhuFreRtux2BRPJ",
  "key28": "gNj1CHdLcBYLBJu76J4JcFCzfxocjyw5U5VqMXZ7TeXbRo3X2UfRt48uKwgZKkoQX3gLGE47bdJCTFZ5T2wnd3z",
  "key29": "5VhMdCMLV36TVZyXucfcyiJrfLHMCnQZY6cT5hRNTUbaSoUP5SCf3qsAbnBC2skQr7NqMK8Yhtf7G54W4TE6vns8",
  "key30": "2RbBpuVwTujD4XS9qHUM6pXdkPMfSvL4VWPibgPgytedvrM4VikCQNvewjTmAtYB1f45FDjWqunUNdnnVvHLg2tP",
  "key31": "3Wry3h1Tt8MKN67kQdAofYfcECBRd8sGcAK5KX5LQigmacFGxt9jidHDB7ZmHYbrufaq4xH1oM2NQgsAUkExNzJC",
  "key32": "qJDiuf6QPJynuYho7WfrcoL71byYnJKX8MNTNZ7QV2RqfnwzSzEi2APdNSL5nPCUHBscQ1wmxZN5GukjShCkrvd",
  "key33": "2TictVxCnkBD1pDFMkKJw6AMoz7PEhBCHVLyBpc4VvyhBYKQNyTQwUfbzUMoH3ZWyskbFR5tea3u6m1gXkJ1JC2N",
  "key34": "2KVsyz6rorvdy8Cki9Xdcv9PQZoZGbAsPvMABuGsbTKp6Bqb5YDR5cqHAY3NXmYewJ85s2aWaoMrfDFWG9WFn4WH",
  "key35": "3x6UEBaYsa23gVURfGYrUCK5S1u5zh5zqV73Xbb2RrNoSiGaawD25WUakuKTY3f9mbrtNhVcpTFZ6jFFAiQhjS8d",
  "key36": "43kGztzE1xKK7R4WjC8Dt9z8KMBNbGWdH9QyNguYXBhLgEB3UM3iJpZuefHcN1wEJJBxir7dKvjwvqruNUH54gLZ",
  "key37": "rBc1cuCZRnWxCXjPsMjgi1QkTA84H98kiprhmzTbsFwAAxZNbPYSXrDJ3857c5oW22aeT94tJefhzdyR6TkvRw9",
  "key38": "uAzbLxADs5fyQVqXUq4uAeA4b5HLnuJNPVqhTFJ5teSMMujqiUXBsiUpVcp4C7ZheyNCqoK2u25gg5yudiknRBr",
  "key39": "4A88WLaGC55HikLSXC6v2EG519bnrmuNJ5Ndaupw3tgtqX9x6iBgwJbfpfjqnxE4egR6W3aBRH4anLGGxFAb6wJV",
  "key40": "3ei4S6cDzyNF83s88bjCzRZBvZXyzcTCTX41wC7RPsHx5TzKSSLHCfMfuXPQK79MYo6SZbBg21pchiWg4hahNzNe",
  "key41": "5VPBvynE8kbHmHeQhfiNLTfd4gaQ1REQTRNesP1aKULKwVCVMpA1jeE1WaKHLqJgcDU3vnmRPNznq8reG4YpPU59"
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

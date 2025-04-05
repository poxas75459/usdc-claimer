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
    "2BmLbdujWiUPQZpVibGbBCAjbHAQ7XtsJ5fG6DEVzKevDrnQ5Sw7gDQq3NGhRiSdSP1SMRCux7kUfeXn9VrGkpBn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BUUXJNwhygfNfnVmMpCcxkbaAs2FRSDMTEB583hdBktorPwPDBy7u63n3Qt9yLvkbDLSFn2g4PCYLSVsbK5Mzgy",
  "key1": "REh9yg7BptZHS8YCJd1guBVz5pMT9bXZ5BrJ96uaUPpJQU9SrsozQRtGGTZE9hooQcKbrSBtCMp8ae8ikknsm9b",
  "key2": "2dv4iyP7v6ApWZQcsq82yigKX1s79CAngwFNmKtetCVUx55e4QvHTZ8CoacfnWmHs1Uj785NHo3c8mMamExxmYM8",
  "key3": "5BVwc9UcKaTMbxoJtAgSKpndPw8tzWCtUexBv95mwv7pzQYrkrxDYe5qDVqPKRekKvwVebzzMGT3gdLHbvehwaC5",
  "key4": "QnDp167DeW8a1eKyU3XX96hd5qQbTKk6nKczTBWhYR6GbNcYFt7NBRQAK31PDmRgeLmKBwnZJZu6XzQrhQ4bY7C",
  "key5": "523i69zqzQNnfVDjZEgxjDfyG3pFgZnuxbDZBpEGjjP8YrmPWChxWtaJwyehVDJR7zYVzJvGB2VrHab9g5CtusC2",
  "key6": "3eteYZeXuJfEr3uKrWMMmXenSxevuVGSomycAnhWi7ZMrdC13fsbybQVcmNccX3xzvRU3hsMRBWjA98aFXPUwW1j",
  "key7": "3GzVZwVGAX2GoLuCayi5ndDimkT3cHkFU2qWsoAoztXjX3DeKx8NZFstBKsu9RnMwRMk5nkXpS9hfBvQhDczQGWW",
  "key8": "2Up2DkXCyA2EEHKNsZyDnbf7ZUdFAxdrr4vir8U7tJqxGkguepPwDwEz44VJtnUBPxtVm6gSYf92HD3pcNpdpiLS",
  "key9": "5tUoYt7jkGJJxxDUcn9WEWxf2oqWk4o3THGSueCn9GF8nYpE3sZoFifhyxCx8oTFJBeTFC3ggsY2qfhytExtgKzd",
  "key10": "5r13LfEL9BwqA5Pfy7T1CNmGcHXLL3cybmqitg4kEEAHeFLgrm78SMTmVGAVvMr89hWYSGuu4MJx7bgVjJtDxznK",
  "key11": "XCvKsxnzEd1bAi9XU44GzJQHpfzezC1XaAJh5SAvJGDxpqMaH6Du1466rFifYxS9YF8F45tZkfo9HjLceWPDVNa",
  "key12": "5VXptHpRKExgbkyu2bs69jeJ93KAg8U5NzyE76KpvXhZG2Gj4WDioKcXBYsHXRScYtSWm74KDEs3PoNP3GHE7dSY",
  "key13": "YMYAhsgqpD3VrNieexjVpbnd2zxcW2t1Tw3D8bdCkzHTUHVewzhKPwKZTcJYBKsVp9bQnyF5cr5MyX8CNKSHkZ1",
  "key14": "3YoCvbrtMQ7EKuNFM34aUHJJ1NYR4EUmb9dC7iygsUUsCu4hgAvjHwDCcHmffad8VpZEHV9XXZTYoSKV7daK5vyR",
  "key15": "4wYmrZdWdzccsVtFHctgTwgpVM6sdGhMaJgV74nMhiXw8Yg2GWaWQ6X3hgiZjZXCHefgj1WUKk4nxXNW7TUA1FUC",
  "key16": "JSxYkbt1kGUYpucLxJGQw5aivNNiU2qwYQxtVyznbAY2aQzEUDvisfaiicF6zeXqgYC2n2jSEV5eHbKuzqTDYqn",
  "key17": "4DrBoiDMZXEsFMUecQt1GghV4s9qUdfYHxSJhAwz56oiouj9u9v149F2D39HSZP4mUajXUrQWj6xRXC22osZjV8E",
  "key18": "3qNEzeBuE744REb5BYx2ciCvNUsWLV1Fhjc3CZaMk7FqLFVggaC9tDYY2gshpi6Ri9D4Pgd6igyugFZukpcdguAw",
  "key19": "3ZT24NsSVeBQZWWYU9Nuvg9Wn4pb1bjuuSp3yVNxY9dq5dzBW6B5G3aBZXs89c686vEaMFyH8pmQrJQWb2nLgUAN",
  "key20": "3GWRFWmY8c9vx3TUXJbnmpUPj7fiWGMz5sMKqLue2jkV9VPqWJ1RwLqwHP96p2aaGfangXPywzRuzV71ZuVF5a4V",
  "key21": "4ZoWiicx7aUyeXD7FWpteebepmzgkE1QtoFnmpKjsHpivK5XAhzs8V9PWFuPcHY9ZbxmC5RCdh1MQHFNHTYxiDHT",
  "key22": "55PDqBksWNrTuaXFk6VFHTcCbFgLgEys98GBk64APFsd3NwuGdu3quqH8KZDA4iSez9ELirQvrpmmssqWB1Ekokv",
  "key23": "2BjTbDw5BrzipMcSgbqS6rKLoL1127KwzV4CwmzdZ7pU8Ywr54W5fJbCofzfMGkPGHsw7Ubq1E7er7AtCct4beAp",
  "key24": "5FFACDN8CL7mSzgFgfDu8g5gLmtSFh7jv6va3CbEg7vb9pdF9YVafnxwN3WrnTVMTX9xrcYQgwYjfBcdPbcm5N99",
  "key25": "KtVNctoHenp8zisBBZ8YSTegcJakq5cwQidAaSpnehtD6XXnT3AheyuEYjR5YrJt7JFpnqbkX6NhFeXgtb9fszV",
  "key26": "53Vr38UK3Qm6RG16KvpuGhxbLSHbHAhnt8zNgpuRvaSxUkyXPpAz32JQZg4vheuFzQbH6m7z4eh5oPPiDAQ8DpPd",
  "key27": "2dKaZ3GxBDJzvPaVwyTAF19gjFkW5EtFs1ogQT8YLvzDsmezRjR7PLL7Gb8ceDW8LkespsLy2pjEzFvjpg7mAYZi",
  "key28": "2LorYrMPaiiwExobdJkuH5hDkow8NvATV1p5WYEUp4jiF7rhZw6kEiZj6g5JGp31zn4pqFkMrornZa2fYeiXEeiZ",
  "key29": "vdHJ8Vn4Uyrn5pVku9k7LxJ8BZ2k1PQZDa87JWyjNB4bmLbzbF75uemkFxWVAb1ugx4wvqL8QTDhdpvdqnNRtuh",
  "key30": "55mXZwdTRft2vbKf7qekmBMfvMHhxewEipUzW3gXQNFromhQBTz7gD9Fj3o9xZiyoW49heFxRUicY8XENhTmMPrw",
  "key31": "5bjqHURQ7rafAayARSCKBBEAdf13BLDA39xyz3yUnA15FL9kkp5fV6nxKGzwzAR6v8o37rWrD7RXkzndTkoVWBZr",
  "key32": "5xUdMe7N7svvivPAfkpJof9iMCDH4mBTbJTr8g6KyJFW9BgPwVMad6XTuJUn7kmmQgMUBaZ2ddBqXahzs8JggfWg",
  "key33": "2HcRSf7tYzpJ3PwSDYSVys7yLrzoYUK9tgGbEk4BsRzQnKcpn6pJiYuvb67jomWenesf23t8CCjjGCpMaw3W9s8v",
  "key34": "3XDtyquzGJWFiG3oNkWhR292FtzDG227sn6Mn4qxCeWC77mKPoacCHjDb6jtMuWL4fPynUtjgS7XqQkceRqWnmhF",
  "key35": "2gHQ5itsC4paJNZCwApy4QUU7hcixgNwfwqQBHjgFVxKmVTMgs9znq6a766uWL49dVLgELq2mYpebsPhzpsxXmHr",
  "key36": "3sHqmP8tCb1eJuFQqGcgSRx7WAXzZw7pt4BzCGxobkH5xM4VCWDZiFtDB3xRYBWpE8SnoE57UHcAfmGPiXis2zx5",
  "key37": "5C87Z8UDySMg2MLKFEt6V6NdYzT4g6TgCbM3LsVyAbSnxiVZXE61JjAzkkZ5Dwt5GDXeY7Hdbvbz2v9vVcfMoGpX"
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

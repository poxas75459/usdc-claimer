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
    "22ixTKtb4VbNLDkGgAKvFVD9ZBB3xJPEiFpSF8KQL9gsCr3K9B6SSoc7fzjsn7ouZKaYv3baUP9ztWyH9N4TGmKU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qkBchDW5ReUis6zQcsPRqpLxKRJ3i1HhAyxUpc7zmWP4VbuAbdGLiBYyNNK86DMeCe5uM1Tqdg5osGPmh2FtQF8",
  "key1": "4aJAs3Pt2noxcJ5Ldo3uXvHJSzKJArosdj7WcUcJUwQK9otxBgucApLcCkSFw9JeeQLBZ3nX7EzJvfXsugJAYHhg",
  "key2": "2yarsTjyarp25QgtyzvL84x77m6xnVnfHM7ytzUjnEzowsHmnPvtVWV97XkputiyKaLu2UAuTXLNipZF2EDmjKvq",
  "key3": "4sqjCxAfHByLMbVCt3fHrNMzkWWuopBTcE6BPWP54s9tQeFxtWevUXC6U4uwmktrqP4X65dzuKKtCXGWqc1zDi9V",
  "key4": "2aHf8zqUGHYaqyKu1cWWjD9dCuaZQ76F4kfwxTDfcmdyvciq7wS25xdRcM6nMHj4Kbv76wKuqBEeH7rZnHCf7DMU",
  "key5": "5nUhfDujthxnJhd57x3neyN3EFeDGAAtDQNti3qYF26W8bgWuk5MfHt8LhHNKAv6WivMoQb2cmwgkhLEGcvrXNiY",
  "key6": "4tgNEzVyVKvyyLdPdq7eenz9nVmbCoH8P63AJHhcrNvXSaf3xfp6MPLhrKdUevrv13je1N8FAVk2mFPdoygBqBYF",
  "key7": "5ZYHU9QvGoK49rVTADFZh1jcVqn3DkjuEQPPpdxrveyQCxbw2eyXtyK4G4gqzTdWWMt1tMMd4psYcL36cDDJrMBi",
  "key8": "1skVGdhbowXkJ5xoFJLBcqpgiyMc8kHqieTxBH6vHf9r3MVonB9AwhXMHhrKhJniUGMffJCz3wrg4SsTmZi5w1H",
  "key9": "4q7JV667wWj8XBNNzvH4kD44vvibG7g8qhuCEN1svgKj8HbUVCro9ktNeZX5sgvi8VNTncyVQt5XD1T4MhykPVJF",
  "key10": "2VDyfzNEmxfQLqqAyWc85aLxWdRKTTyKkxpGsdUasmJqckRg16Ym9wJ44q485WxE8W8aujXTcRqisqHEF8ZjYvk1",
  "key11": "65jvHuR7WeFudY3UyfYcL8sFC3qMdmjAbH4L29ZNSd3e7y3xLzVBgcfM6zyyWnk55B9uwgAKFsgYCCsASTNG6HFX",
  "key12": "61tyoYcXf7nZLnwmQQrhHtMrzVT2J31JGMwrCC8SHTFEt8498cJzvLGevDPVodskVvh6fB7XwVrZobmqpPtZH6WG",
  "key13": "4aDc5eXVzdxvKqZ4aUXbeijBCND9zeodpsn42wD3PTDGkwHBzkYjwbiG7yTjHf2ABHjUB8BZBgUmevJbt2Re9PFY",
  "key14": "3p29MiwxqeoFYF46NZdtiHvqiXBhdgAqhacPmCbg5oejEpch6gB427VAEgkKqEphonkrfzaw9m8MdPdq2j7999aD",
  "key15": "5EU6GPRKhbC3szxtwVD2mim3QkTX8CJTpcCoofLrvunhhdtUJsvLTjFwMWiAsCdVbUyr4PdaVrci311YBrt7Egcs",
  "key16": "3HzD2oxshuUfSwTvCWWCMAxhNzwCjHUiMEAw3oMKvvbWRycHfh5XrxmJysi9XBXPeL6uZaknj3Ac86fNDnTVDp6n",
  "key17": "5NZF4PFoT9uCfaBiPwSgoXQzYVvxcxtNQsNsWJ7LjYoT7sL2Tjp2jPHfCzGm9hR7skjLMPJoa8UZe4EWkdXy6Mfq",
  "key18": "3YEhu82jQibwpaQLAXSUB4LNxAqHyDRJ8TiWYktwUW2hnfn1n3PGUn2uZ47gmZFAXbt9tjjmgejg8B6GJsCQ9rTs",
  "key19": "aC5v89bGwVTmGiVo51C3CQKsrvPVo5kjAnvWUfVVDMv19zSXaX1AXaDFbExhR46Rk9CHuVGkUSeV6bJA8XbjncY",
  "key20": "5uMKzSueDHwn9trbcMkuG1cn7adcXtZHrhcPJnHHH9fZSdTZRYGTCizVYVEJ5mg6mXMUzuHDE5r33uo36bSWe13a",
  "key21": "3AFC6GACPvBcam21sKtUYcx1XH6kgaX64GyuGYEzinpi3BVTQdxFgyKuXUBGfcGX1hYy5uHtbpTwp6s4ssaESSR",
  "key22": "33ReXsKoBRAgth9gZvgyMD2t5mpooo6iCi1H6cM7karLCVFTDBSomVY53y8pYd1KTQbvcxdTMajqnn3xiyBLbQj",
  "key23": "YGjaFTQGeXMQ9aHxM45sGy8vtN8rok3CEzrGmjbdYhSuWcanGgeoTw216qbBDhH6yWNWia2Msjnpjrrwz9wWU8o",
  "key24": "2PdrEDdCx2DHJuEm7czkTdcsPZUAthjA2epjAi6NRkW9pX2siWHPJrqfFZYCSFBfVnUGdg4M9YbjdBq6Rvo7GMLB",
  "key25": "29dPLrh7sbtfyMNYBZNJnQeUQpBUC3krVnJgYt6Z1TJBrKzY3Bfp8o55uJxBGzNms3QtpNGpaqHSXqqWQML6F7uu",
  "key26": "48qKbPSQ4JDrAJ56xTZBfsXqUNUY1J4LTUtZCwvP2oBLSXtXuegZKf8sztDKq1N3TxUKxRhYGRVcWhiuepL6jKUs",
  "key27": "5CMJpSzeo5eJ3o44Kbq3ek7P64edidPaosMo15LrJEJZzWcTNqDN4bvqThQRPPYRn4bNH4DChUop6NBQnHxYQ31Q",
  "key28": "2x6XEmrewmUtoTbhgSU2psoE88Ph7Zb8tA5im2bYpMc9uNLMfsyzgtCRXDaQPvKKpAy5BgLqkJN3duxUXW3GMf4N",
  "key29": "5TdBwkV7YXRondaUpV4oY4DqBB2JoQwdm5c6mbw5fWrkyhckFoQ7QSufiRqWEhyQUh8kF4LoW4Zt6gY3bUARewXw",
  "key30": "4qjnMq9nK7NjZWh6btKijg8awVZSaGmP3cQYBCmaiWijjvpSkNQUyEpQqJTF9LDAQHJrTrmG5suVgH11R4zLajZr",
  "key31": "3pueQ6wMQ1YkFojDqE2L7sgEum2RGsX7kgQ2KwgB7Er6KQ5hBLBGPtkJaHsf8prW82qzbi72iCXFGnipNM34i8xZ",
  "key32": "4c8M7jfcAJdm93MeYnKFQYKmQbBCQxTUrHcBZj3R5G7VQfEkNPoZ9jJhtJFhXkeAcmf5XQvgWDGv2kzyhzPg7SVw",
  "key33": "52yqRvsJAsZC8VPQ91Pfdeu2SdS5wniwNXg9jwp43R1ojxgw5bDpSgVYPjKA8JWX8wNbXLocMWisqoBo3KEvP5A1",
  "key34": "irWGpY7qCWe5a2XqBFViYTVPx8NRpt9DDZSxEDNGEAPo1AZEHZXz4vWKNn2jnTNYoEy9ENcyEJnosngStQhp1Dy",
  "key35": "2k2cfEArLX9beS6eA3zNwcSguvgtb5Cvv8nRroXof3fGVs5Q8FQ5HqXDXeSSCkXWsdQEUEQDUZTx3FDyAqXdgTFm",
  "key36": "cg2AEPgHwNQorTM4TPE48dKFVoDLa5fV3spWfUajHckaMxLNDPcULVi4p3ZU8WwDQxg5wxxmfWkpJRwvMayzXx5",
  "key37": "447qzw3QUykof9wANudRau4uPn918dh8VEXWS4Y4NEh4cgsdhPuebigTmJYHbyMTFs3xBUkvL6X25AyN8JkLedP4",
  "key38": "2h3TuDc5GDJbhHTHFVTpPsLZfz6MtfNTyhvJACCfsKtFz4F56rctus6wSN73EKXTpHokrR782Whoo3nrypx4BhNa",
  "key39": "TqGb8Gg2PqAPrQwsSecnHC2etefpifMi7s1CzGeQxaW9ez7D3mchMMXTrSPEqU1nGqKvwZM85Ku2cohpuNqezBf",
  "key40": "2i2Edv2X6kuUZnRGxZmJyznvjhtrG3PvLnaCF6ErERCHLExuZ25nyrhmDNpFr6Bgj3qRmdTqXWfrPDkfkdWj39TT",
  "key41": "4nm8WEf3LYrNnRAJ33jF8yxHGFUUkCrTFmdNZbBvAgVCaS9avqsU2ohFJ5vBADwWVDpdMb82VFShxAuyoFF4JisS",
  "key42": "55siTaqfurqnuDjzNCVjhbRzAwQBc5nu5cTjrpQwLvF6PYLAcpU21xawUSMnhtJio7z7LZXKSY6ab5KPUufz5JX5",
  "key43": "3uKFt8zYCqPi6yqjXUH59kYbcuNuz1EeXRsjnzhoTApKKDXvDZ71XggNZBCHjcyX4yu47Q7XevY1UeKXSop7q6ie",
  "key44": "3SaM3VttbdkecFEZypY8zT9WoR28d8QhUPZLveacY5kH9PGWyLCMVZ7RcnEwbLRwEBrFUdrqXZZbb1ksq8RTRLae",
  "key45": "38c1e8zLPgSELR3mpNdJd236NEk81CgNeoXj8GoKDXF8HdV2U8E4vVVQNYzufknxYJebqyJoL1d1244ZeLFrmhyf",
  "key46": "2R7B86hssggFvTqYZ6hJisya4Bn68sHSag3t7Zu1ADeBtvWtfokA2EiXbwExi4DT7MqsJnmQKHteeSzCKBAwQW8f",
  "key47": "3TjV62ZUX1saD38r3V5NginTYoNRw2PirX66Zx4Qk8kYdztMkM7AeaL2ZPeWA7jP7ktWdJpTkrjrzHchMkuVhEnk",
  "key48": "3qQwk66ZLUu6sCdCmXidyZdiZyQPmBa5R7guzUZtLuf3piEx5fB4tF591WjBCGCr6uTHmTPLpguLKcz6sVxWHz8c",
  "key49": "3XHFNPVhPSFvSJUXNsMz7vWoB7MuUZEcTR9y76U6jXb2BRrc6imuoxbarDXAiGNXP6fsQ9hK37Ttnj3HEM76f9Z3"
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

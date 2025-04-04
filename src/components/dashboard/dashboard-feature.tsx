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
    "3zhpei7WewXPVLCNuN6KhpeKM5TnUYT3aJHB3pstdJ7ELG2NC7hxsQ79VbxEK7J7VPu9Q13Het4is2CNNV5piMwc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39qNMBRKmncQcgVJ3PjJN7HARa7DtDCnp7Wze2H4ESppVZWHLZ3eveKncn66LgydE7uGURpPCEukep9GmkLhBCCq",
  "key1": "3mr1Tu43iVpBs1Qx5zhhDnC64GgfFFfepdCJ6afbr6WK5gYpzHA8oUcVSDGn2hAcwL3mrjYXik4AYz8pVQfEKd9",
  "key2": "Dg5zX8DjnBv5MR2CCgnHTqE5dDyj6iwppnG7cLVZBzoFAL8UnT233TAAwTaMhjhNfbWJ1t6fxqQitVp5a8qcozw",
  "key3": "2BGPBgreWsBsqTzaF6iKgjk7ssjD4GpQkcm1P2QjtqDsCeEgJAS2A9MEZh6sLAwDELFReXYnfrJwNJEBYETJZDnX",
  "key4": "4VY9pBVcDqnDc5xCFnbdqSvxr7e46WfZ1PSbxC5gw1ZpHAa3yAsCU4MM5RKh2pbvXhTeB6u2dCFok9dASJTw7nbe",
  "key5": "2KNvgmfkS2kFNDN3hr9q3pJxp4rozNuD6WLBrgYLctNUj7d2afDGJbXxnXppJgf1Q1oG9m6kGjczoNdV3gWz1xX5",
  "key6": "ifvKdbsFFcYbdNiQGUvCHu2DwTz1mEBsNQxhY9UAzr7qZup5uRAfEim7aS2hFDmXfgiM5Xv7gCvjP11xA9h3AwW",
  "key7": "3tpWxLNr6WsWvazSHDLpWx7ScqNELQrLYrmsqyb3EMwdLW9qEGN4D4pCWBdtUUUpkWNE7UaMAmhf76J3S5RjMdfo",
  "key8": "UutdyyPVtDAdyVJ31oxVo9oCsCwZUACt2kL8rVmifkYrGXBpvVRiMzmoFceH65ZoMXNNmaBoYEY2j6HrSkZCQan",
  "key9": "3NKKP9gP3fXgN4PSfwwcCv9Reik3q2SADxnRFHibBcGibSdZDFbsa5KQrthxkgghu8T53fFpCyVaBi2pff8Y7ifQ",
  "key10": "3TcffWnQoDVm3MYgsutmjueLS973PgZUfxApqyZZWjkZCSxC9QXAMsA2fEQ1p9hAQahgqBsWNZLHRb2HHVXqMoQX",
  "key11": "3FfwqbqHwMsCv6smHKiWQWXQGzAF1CQfAYFX1puXRRTiV7B4isAads2eHP6jC6B81XddFfZXUWi9pUCPrQJTyNL7",
  "key12": "4MHNSTzA6nqaCzoyDQqkR5N8N8pe3kYmqQ3G7HNwZEykk5oedUD6VbXshPRBXiXPZziQ8YqhKYyB3cMje4rMjr9g",
  "key13": "46Syrtj5nhCg5oZvCZaC6NrSq47SGcoZfiwyLNK2rG2PPwqYYQsdF1efArsmZurrFd28qq6ZHruXKdsNrtZSaW5w",
  "key14": "3XqEDPvzvS2gdCADb1TrZiTb7rxjV2UqbeXyLidyA8yBSbgo2aoS9cmP4HFCUwtHs8bPaqAaQLYT4UjEn3fnWJUp",
  "key15": "5PGKntQsSzbZgE9a5q9duGPuxrmshs2qnt42Xz2EgqwE1QkjoM8vinuSNt14heUxfheR5ynTo95mmC5EyrRB2abS",
  "key16": "3YHwimkziSw7rnSvfqNhoJ9S6MjMCAWYTF6zfqCtpjSh2KCNRLkxh42Fehms7AVsdmgzGyguDajUsyi31vgevppc",
  "key17": "4QVLX4hgxg3yAtXbZPpwjCwsqUEsVmyerzkhWRt1uSnfJMTFXh92QZc8xve3erAUDExP527K1DUBgmFXkSVVCB5r",
  "key18": "2uoz8cA19emW4AaXM1pvc8wiNvNq71pDGWJwTPS3iEzYX37RERwQdkH3YhywXYTn8zVb49Nc2pCf2F9Q1viDzUbE",
  "key19": "61n3Nbs9FeKPypE6qVcELPUxYYRPdfpdHGCoy4f7c9jN4czRmBXi4xMLk7JbC5nCTksKX9ftGmz3Jg5zFU9YWezW",
  "key20": "2ys6r7nAsvWQGehGg2eBJqQAVHYivxs7JSQ1AuULCVtA8Mge5oZjQiXfnvDLNdJXyFzyvF3rfuJAmMcr8DD43J9c",
  "key21": "5jK3xLnEssKdmEqaF4GkQUjP1LS132aM4s1MBBcQibS8fYWXHB4r95Ecy3tMe7yfRh52RnciisYLh77RpgFMZz41",
  "key22": "5FgsVTi8C4joy7kVGb6soGUtoVTRCb9KCAN9ESA2Tnc5ZPfyDwokd37NWiqgYfAmLFJaPwcY8BUjy8GB6dHkn6Fr",
  "key23": "3Nwd2wAxQyxtGwg3zQnqwxLQ2WXpvcsLcFTJYQfpbBHbxe2ia2siU8BcGDLsPcYwmWLD1zsysuUqm7VkTNk3HMJE",
  "key24": "5eG17nzv12wNwze3xWmJKvadGNvZUCnpTjysc9pPPKqHx12MDbYu29NwkQNA1Q2XdNesQaB8T4gDqfBZLRmBQHJP",
  "key25": "2aftvf2WZ1ni7px92zpTdBDFyze2MP6vPrRbPtpA2xnTwLhsUmjrngm5JHeH6EhXvN3eky53Wb8UMRSDieU7v11T",
  "key26": "2GA8CSmrPV26EimqSe6e7wygUQuvKS5jxcmiGxW2aHpqdZbG6uvewGd1a1H2x2Lfbr3SSUQQHaCGBX8SFEG2FB7q",
  "key27": "2hSGKcobBz4Stm2BnxAVUGLUdpHzGgqx5xv4hPg8YWQkKdQyXrm2kb5RDZ5ftkDf8QraZSasuiPNn3u6nxoPCF5H",
  "key28": "48BxK9KdqTaxu6pFuyzhTpcqcuZ4KNdM8WP9tKqojwX5KCNvo72JqYMnava96CZwwgRgVJ5AuzpZLZ9QKTXtSN3S",
  "key29": "4rJfuF4TLZAiBPgcFCh3Nby3dRLvFNG9xXDjnnKrRnte1u8SLNfNH8acuyNSu1w4uCM5dRNurybYwWsaYEiNwVCB",
  "key30": "TKqwQFrezwCSrSCFxxcoKa47R2dMqUZdb5eBqZY5adghPLMbyXejj9mevvysSo9bVtbhcEj8JuXFRJHibU5N5jf",
  "key31": "3Nywu2Zq5uEBDozQmTsqNCLpQiaK5hCr8B46pVWfYLyE6zeEX38XvUYkuVohMk9kUS2PeLb9ikMNSg8EVBtSCivF",
  "key32": "45xdRePYKBAnqCGVbhdzJVqH1XwjPPoZX8cxtsvirC7LnXqRn5dLKpPA8pWKUzYZWYaWjmKJFDpU6bgA8Q6d32ys",
  "key33": "2qWX7aHG4cEPNgvnBZSDrbBeVzGa8P8JhdDXVyJyFYk95kqzcYRkEkRpaNjj9W5MDAw7Jfv4RL3pCUB1vvQU3xaQ",
  "key34": "5kUyhzyVcDP1zu9DeayoEHq4MBvhij5Bcxb1QVX2zG81pL6VkiXtiHija5mhvXC7vjpFMLhC1RZPjJx8JsGevoKb",
  "key35": "5cToUq8zUczaADbdvNsNnNyKpGPYbFHeFt1LcpaCCioSwjT4KGJvPR713125QDm6bpWbatS2EUwrcz6Jo8b6VMcP",
  "key36": "3qp9daQNGuvfmUMrjkuyVcZoEDEQ4BMaD4sSAQaxUUpzXFcddjh1aHeoXssgMj6aFPyCJvRRFDaMKAtrw5dHAuYv",
  "key37": "5ZZryW7wDVAVH11HPM2tmSYRTbNNoXWsu584G4J7exkU8H3d6361c4gEHdhtQoTL3NNTpRVwn7icSH47jSYoSX5y",
  "key38": "2VMA5xQVkTJznGAXuViF9k3h6hJGteHa6UFZHoYPZZgAT1HkUcjbUBuMhwr9ZvNBwNFo5FHKpCmp7ahpusRBZQpV",
  "key39": "3vU823nDKTsWvJ68sLPTFqxztdrPRuSGMPjPjWdD4EGHYUw6t627jMEpKiBKAVb7D9Fc2WLfAud3bScCJAwYXK8J",
  "key40": "4oHE9VaAeGTB6954WRBLWgmC1JDW314MBzzQuegvFDn2aTj9xmB9vR8shL4e7xKGcDhmCiYky9WtfeGAAdWNVjLv",
  "key41": "3u148LzcNtRuE3gVrQvxykrjjkmG2D6V6LevLXoR1qmVRfSCEFXDcDQxJcBbfULaFNbvghnH3wTeJoofrU1bpCKJ",
  "key42": "3K1ZCo8322eMnxV3iCqjBep9Dxvx46zb8mf9za3iNLqRaARkP8PoEyLZVJWbd3BJcLZ4i8Si4qwsUQE4ExixhYU5",
  "key43": "2rNKKxjTpacJFXE9hBUc366nGYMVuRJutHvBMrtLT2gGdWPs6sEjuNh32VkXNSwxknDEV68pmzMmdwvGCQ57fgVV"
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

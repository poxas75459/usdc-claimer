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
    "DRr4tPwdNHT85c8tjzfire7gnz5nZjSULUvZDYgfZT1kj2pPZc4hiLfnpfAurJVuPaDXXKxEoiweDkrb9GprAKb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SWS6ktszJPS1fQZEDzH7L4b9TSYfjEwZPF5zc6ksjL1vyhVDTJ4k7JJwyA3gn3B8wb2gCobxAFp6HBreinoKCjh",
  "key1": "2WHV65qJNStHChx695EUtqna26CXpTaChuFU3PzzbAniuSYvaM7UzpCXCTNQf4nu3YSRCdoHGHHW3jAMFnVCybqM",
  "key2": "63MFPd6iBpRCX68nBzXemJUxPbUxQSXV1JcaPW1Cnmm9bVxW8FU3j7a2QA8f27zc6vR8eBRzvmxmrkx4Si9dVD7M",
  "key3": "4MB4CZWB5LFsLom2kqfx4sGk5chsBLVRtaepLiPdkGt1XL9CjwarsL8u3rW4LvxjjqPni6JkC6z3YjbeF9tHiVB5",
  "key4": "5Yxu7KayzPpQmD2xcZJDAw6SCosznS2MeshJqLn7VLUhYpc3JP1j4FhSwcxAzhjqLjEEkrEHJ2eDP436HSrUbhrX",
  "key5": "37csSp2epMbGDxLt5CRDRVDnwihtAb2wgzbb9hp66qWdxDqXGwjVbHvWpi66Pd36A93wyUzcscQUCLeKiqoTtNyD",
  "key6": "JLuoG4JVc9Sjhb6XwQvUpqgiKSmSvqRgcxJsaAP2mjrKFCGqyn2KHCUxwJqSosi4KqdhZWSYsnvUjrS3CeG3s4g",
  "key7": "2K7eHhNrzFQkM3hv9F8dUrEhZuhBEZqbQ3w1hN1XDcgqDX97FZSawMAro49NEHHD5m4dm3hX9C42Mt2paWx2NGEF",
  "key8": "2juZmJnjeSpEa7Ybc5h5rsP71sGmguLu8PZ8ZaELQULP1krM851NUf3Qx1rCgBfeNowCD8MY1Btcr6apYvi7kk2w",
  "key9": "5Fed5fMdkvZ5qGZmSCVSjXzVzcxF7WLkRSmbV3roH8PMjLdqT3k3iDm1Zvao6LFDTJVrdyHdV1sGwcWfFyZzhanx",
  "key10": "5TqH5kwoNqBM2x4sSPBRs8D5o6afGdSqEPU8Agb27UVMMs2fLDntWuLe3tkYo3Rs8G6ZnPQTbyjU7jCDPToaNjTV",
  "key11": "4kruwoXqxvTKixrHqXdpHAmJGxbJs85MgMBqCujMkWXbZy44ZnFHY5XAXbboMmCAcLddHaovcrSdYjseaEy1gBA3",
  "key12": "5LiQxTXppyrv7ahdzVrkamQCeAyUwhxWYjNh76pWqhTecF9mSDv6F7crnU8jzvHq6YdwxHHogRitQZt91Pq7phqh",
  "key13": "hhzmvZzArvsfr5DvY9eiuDysufKU1F4BM4cCTwkQe3igxZaM7eowQeMohzH4p4pN6snHUyGuLkbiS3xcrJCW7VZ",
  "key14": "4EPSKQGtHsSBZ22rpAhwgamn5rL1RTaCM1G8ucwJMoea5qaizWPDH3msPFAEGrmNoke8We4fjv4fWm9gsozuiHGT",
  "key15": "4hgbpJ1eyKiioeejkbQo6F1LBsaM7rtCpMzLjbqXtr1oNJpZ6eMD97m9ZoqHTkQs6tXocCYh7Rq4n5c3CQ2cFc6f",
  "key16": "4sogCkZDXPiC2Pp9bWt5Zx5gqku2uBaNVcWZqYwVZX7Xu4YZF2cRcDWhQzFL9d4uxvGcS8oruDkTU6JGin2npmQu",
  "key17": "LanwYWWCWrp9sxjKSAMJ24sMaGkhBfijsZJwrrCcMmBM1yZFNhBXbaHNPNpHF5xpwRhyk9eAv4Pa36hnEvtZDyf",
  "key18": "a9pudiZMU77VswvVS3cZvL3AAAchGrpNZNXJ6UE2Fq35uNhhBsQqRsWECaTvYrC1puWeuvKfEXUrPqM3bTJH7MJ",
  "key19": "Pzv7cYBed1HiAqe4jRHMdrskrd1YEukLwm54Q897mik4KF8ATjYRxdwyduoCLtyWXHjXZqki2xxTiufmzu8Duoz",
  "key20": "3m8ysT51upGamGN8nic5NLx7VQ4hJCWYaXkLSwjRQbvHhLgvnrW6NxViKM6z69S41YgN5QE1434pVLxbxMQ9SvMT",
  "key21": "67hyFj85HL5hHSXjbXnpMRsgUenCTz5BeNPsEzma273GmRRgsG415zAewDHWdYhCnv5fbL7dNmQXndFFs8DhcLKM",
  "key22": "4rju3qf1GDEjvqpMQjaDf5S1a6oBFvur1w5Bz2A3FjDPaup5JHGPe1sB4ZPtMUvjrNgwA9WU8LgG1njNn7u45by9",
  "key23": "3pL1yRELekMjRUjqJvU8QWa6UtR57XmMjCRK4C7hyTiiAg6yfUUVw7anVBhxnr3NmjmLCJU4pr8zFs21gtaAkAF4",
  "key24": "3ygq7YytT55y9aYKA3xwcvTXvgfDK6TZtGumvfcqC1Pdc567xnj1jdCprRxz3aCXJEwUXoJikxAKQmfH5MMDNdz6",
  "key25": "5QhfB2KV3pD5NVyw4Zmy8oLgPVzyCwquMFDkLjqqFXaaCxf5iCEgw3wFkQsC5uUNPkfCjwHAqbXQ58k8VQRKVWcV",
  "key26": "4ioNeo1RkFsCgwgFY5mHRdoxBGfiZY1npZiDSyhcyiGaUQgifsCvgU5oQMmvWnn2MpDMG4ffA8mneJFaf4Ynt8My",
  "key27": "TjGqgTuVnf1VaZGPsMvaViaEMCBUtfo6qmnhJPYDJ6z8YfByzLw8tRxWRK2ikLFUhzV71Tw81cDkftZ6vnMc19o",
  "key28": "sxKL1fAzDz1gfWZW765GZ99hAmXqhGn4Md7LQSRNGSbGxTmYujCFM1qfhhArnkcGKJoVc2aiVLJXaMvnw8Yx2VF",
  "key29": "4qe25dwYX4MfEYYnG8GYA7kJXE82E89QcNwC7CeuX5ZnGWQv3iRFZEWrGBUJK84DnuQwywV5C59FsDvRCLT2at3H",
  "key30": "3RGPRrdm9d9yfLDRDL9up7W2G62W2oC1Gjs6zSKbZRAg5gpfh9DPH2p2VipBfa8JT7D7jhQtVX2rAy57BFnqNz5j",
  "key31": "2XTnvU67zhuKdbFdw7HVBzSXCDKVBLwHnHXiDenv2JaRpAXgnbNUhAsdTeWwgpbodAqGnDwB8EhcUxGUShkuQfRg",
  "key32": "4twakCHw1bg124VGWxQsKTMUG2sEdWVJB8pbWx3H9KhrcEPcnpCuvNV9hUSkPpDPZsGSYvd1bTVKkptWpaUwyT4j",
  "key33": "5gbXkCQpjoHe4FWYzkER2AdvDZeApWMxdg2NgKhY6iuyCBpLQzkNqyFaCC9sLJetJLRQCj2NB4fQqXzhHkmhm9JL",
  "key34": "58aoEYhiPdTB9LfixMApfeBswuTVs1KTfdpaZXBS1ibCx8SUvCc5kNBw3EmJsfduXYksAZSWEba1aGiXwMe3hNcm",
  "key35": "4CsgB27pqd8abGzHE8vBeR3bmPqQdHRJm2uS64fzqYzNt8bsC7Q9knCozUnzp6acGV2CdxN7dQZ5GfheWFLnLjqj"
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

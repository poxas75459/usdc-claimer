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
    "557Ap8eVXLtzacgDF816hcswctDDm527c1q54YzVJrJgU21KD4kZfJTR7r4dgoZsGW5PoFFMFFxxQGkpgmTsyqJo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SE3VotyHsmGAFF4qmGYPvsUNiqp3UeRbxKdpxdNd7DHegMiQEbGB853GHg42DCh4n5nhwCB7f7tCaD1HHTEFgtS",
  "key1": "31gYDAjVcsSxFpKDzLr351FL8zvDzJ4gPSfGaDUhmd2wC3E3mizrGLXhagw4hqhHhRKtj43S79rjCbVsvmV9QWUW",
  "key2": "49oqNdrCapCcsi3Mg6NUtyaHP8bi3QLvMfPdLsCGHRpWn3Dvvut9Lo2w2AUJfP1tq1E9WoHDEEjzPaPCWRfPvmmA",
  "key3": "52kjHmQtgsF9uCRN4wif1brJpkM8KGKTPZpcJe3xo324WM4J5ojRCEJnjuuwijdnEdsBjkTzw1ZdqKWBRJQ1LocA",
  "key4": "5TEgzr1wr2gN6HGxD1T5gbFUvgqCbv8yvSVVUzRwhi5B9iLxVj2wGnENLYjTB6FV2T2jB9TvbJazhjkB4nCZZPfd",
  "key5": "4CUZd1jiWcDLAWsDCZgx2jBXomSvexi8aNgQ8MLG62C9friF7cZHfRaZA61JcP6frGQ3zbyCM4QrJQxV2LrtADck",
  "key6": "Fkt8pLoWtzw93KN18CjR66WfvwjJLPmJXUTrtzmkMadP21eA8JGYE36so9Q7BMC7L3YFBpnJg5zwSLHubiccqnU",
  "key7": "59DPThvFB8cWgR2kwdNmXtYpPJGLGuNoPVa9sJzvShWwobWpfdv6aSM7wJpVxKZNPFvWS1Zr7EyxaSHMRbpmWQZQ",
  "key8": "2vpeQ4tPRws9BKm7zXCSGsHHo11D2GyfCReq4VxB5887QTmnbvRtTtbxqwT1C7RiTGHRoVSyqGF3wHBtDVXwyDrV",
  "key9": "RnFZJW5nEFgwK5VHSYvwkBDvKyfvhEU6Rq8eMq2yRZuJMgKnZB5Lxz6HynTkqunMdY3iHKAN6kpqMUABtcJAU1g",
  "key10": "2NS2Z7NZyib1J13fWLtKob6qGYNsr3NmmAk4wrYDGjWid9t4Kohwu5MfhLtXmSf8ZRmbJQK1x1RHWkuEhijQ171d",
  "key11": "4GCEcerKMsc3vdVQQufMLnnn87tSTzeg1jVyfv2emKLbP8zrmNsi5UEMJwKvxZkxRVsxqE42PhXoZBQZbLjGQ46H",
  "key12": "5n83Ui8KKXR27M7i6jZxN2VeUon3WaBpwGQvvEXa4VqSz5W2nzsCoLZH3UwYAAYbnTP9yi3wcCZJH9Pbdeqi4Fvv",
  "key13": "3csyMAtBqoJTce1Fwos411hSEXcgJjcTwYTsibEFmLZuE8UoVUSYRjbvAEXkxXiu5yng4mYfMz67WP8cSPWauuL7",
  "key14": "3mboNkuDsn4nckMv8RR6DhV8aMgTKQXn4Qf7BtGMJWpDtJmUdm81sCEVq4pS7AHXKntm8ogHrgg1R4NoG97Q7w1Q",
  "key15": "XWX9yMFaUpVUi9ZCPMeSAkZ4SrFPxsmqYqMPim8SyBJJpdZid8gN9kTVxNkvv4JZPXJvF5yUEey76F5yoKbWPwm",
  "key16": "3P2kRQ2TgMrgScR6NApg9fe4rgedBEcigUzkMW3tGYDz45rmEdWn5MuD2Vp94Kf52mfiDSUiFMEkJTjaT1HugHtU",
  "key17": "4zQjkHzBaYLAJbz3jdhg52qdD7FdGpuXyqtK3n5apDbcLbEZuCPTPE2CMKVgDqvEz6PddM2neqS3j7PArRDRmfec",
  "key18": "3kCbQG2GTw9mJ4G3HA1ensCsNLwH5JV8jAMYs3Hw66Dn7LZkHrsH7n3yNCU23qAt6eMVRErP3iQEsKP1iz2W2SBs",
  "key19": "2fS3QHcKMVXfciWtiQRMajJH84E5CV6dDPuZSevbeUGRxEahDwT8EJJj1c1PUZiRMHiEZjfJPpRZmVd3Tj9qdq3i",
  "key20": "3D7zd97jTvvpyUaGFuN7p3QfoRm2XuvqZquNK1kEq9ehN69ZNQ8G5HaEBdTT761pVHuq6zGwuNCsqndGUPwTaqAG",
  "key21": "4XnYxUNRUSdVhSNS28sGYLDcY5hp3VWCy6XUd2DKpdD6jhLxY9B7nVUbQ7KGJCrmP27GFnaqMtjv5vhrcUcZrSpc",
  "key22": "Rdj83RVjwMsNSN932oGimWc6oe1a1eXcT7DcEVuoZJVbqgetSswiZYTUPyC3ZWMr5rXWneVfKrybVMyW7vkRbgb",
  "key23": "3VXWPRoD63qPGWuecKUZndCK8dbLRiJaFRCQLRGaWqxJG4GRhyfjhoigbd9d6PoR9YUC2DpmpvtWLtL12jEXKPjQ",
  "key24": "222sQ7BuqJ1ApB9m9VxdSX4KdM8pHKhU8PsGnJoM4eMmW3BtRyiZWEjCn7VsX73M2EkJS6Y7D5E92wruKNYCqzKY",
  "key25": "owPtue5MapuGfQfVReNFSUyddW6MfChGqFL61PF6qKmuFVbfP2KUE2caghvG4oK4XmKnHmv4j165ca9nr854vd8",
  "key26": "48EH96BCpLQfr6eaBByKgk2k5yzYroTTQoChRjmWfAjZZ7zhJd8e8R7QiFopaTeFC8AFTnt7cTbPjA5r8miGMtvp",
  "key27": "5enrPx2WmizzqEYuUv3cAMkyFXdTsE95KgkVMkxakoLhwbSnKZdGKisp2jndr3pPHbAVTgkHW9139uSNhRsvGk4G",
  "key28": "qoAwfh1p1bfUpmoUiy5CG8XVaksankDniRmb5fi3UmcSoLNSzvhZr6Vxpjm8Jx8drUsHKKWrB1hvYE8AJSFXr2r",
  "key29": "3dSn7sUSYMW5UtjnxayC9SBGqsEunZ5MY5mcBp431a72H9TDJAaQpcF84VDuWZX24iW3uyJmxFUSe7uPwHFmzgoB",
  "key30": "5ALx7yK3VspPhRQQVUYMDCnnJbtmpBYUvijSynd9X8nuv2Nq7xDSJVUaCDH2sjUxLfT3vH3ggQDLLHqXeQttFrfZ",
  "key31": "3ZoN25Cuc6qpJY2jwJf5mZUa31XL94iNnaGuCN1QBXAUA4cYJT5jDiNmyDymY3ABNMMKBiHCwXVVZznhPKPSc7hf",
  "key32": "4oBG8Xpy678oX5ugQJhgjiJwK1qJzuM3fxdq8pwb8T4XQtLQHeZofQ6jcLV4qDWQasF3oCfGPsd8WGZAsmANFGcy",
  "key33": "38EUN8jyvtVLRtgJRzuK3wZTHcopdZ4ckAeLSkywwPsSzCBPWqsDoECgoyNkRcd2rsvrCF4w4m3YifTQ1iaBGwQq",
  "key34": "5pqtE4Wn8PaopKhiANgRvagQaY2CMM7qmnx3gyy9k4bAynM684Hm1U4VDRVoBxU5tfwWSX9XynQMGsGteuRq14oL",
  "key35": "3scaadaMTm1fLoVV9YU7wV48Wgt2ZY4KrbD2mNJeHhQowMYeQoGFihs2tPmALf3RUFPKuXddaHrfUfwPnLuax6o4",
  "key36": "3LACG56fqVs63LtxanekewqTFGJSTjivVxmLzzWtaAFssuBc6ejWF2gapoEnP2RZHuzBo48CiFHjkSA3ceyAfkSg",
  "key37": "576NTyREVgbixBCG55PeT51LrLxfa8utBZgn9QUSwsvhVoGW3FkJRpFU33GcDtbEN7ecx3dgFHuUB4ooNbQeeX6E",
  "key38": "4QRdboM5sPCRtsqondygNCzHgr3KfWigwHLDk8ZA3HjUxVZoimPbEpE4Cw8UriECbFKvqNMGA5AChFTxs8NesAzn",
  "key39": "5f3Ny6RLdYqCrPfBEXpThpB52pSnqg8MywkmWeGUEkZGRUofiXPtVgC5tLx3cXJ4DYyXvtVbnN4bbYog53VapTLm",
  "key40": "aGHA2TEnzFSADN64f7qjUNQGHQJGLRBSxP4vJK8fdJNPRAeQvLQvNSJ4Z7ExJBRWAaZsuS2SEMCmhm1nE5eNNuP",
  "key41": "2ZsAYJ4t46jiBmEVGxhCd9w1Tka8oPBQVbgn5roXaP2ELPsXPSMhyqcxnUuztxrf6sZBRwxANy5TswLQ5j8TubF1",
  "key42": "rHTmzqAnHSWEWf3jHFYKxxT5TpuSJRJqEPCV13PeZeHjodWtLKz5JYkGiE7ZKJpGQmnTdT7XtHC3bjDQmzdMKRM",
  "key43": "4nhaA1aZu2HYP9nLxKH7yftEMFws3ovJ1SetkeP1aedU6vHEz9dgSm6bPUs3oc2MmkFtri3r8w8jD1tVrfzKbauj",
  "key44": "5g15Vugop2qvqU7vsPk3KGbStFBX1QB8tGDRpsAxUQRFFHvb5sWX5zPGLmQAZeYCoVyJ2yVg3KRP9eWbm1NYo42t",
  "key45": "2ypeLy3ZS4TiepcLVqNnyLQWnJYHGhkNfDNZ4zcwuKZb9Fw5wRYvurPw1dM4apCcKzVJpAxJnR1gRG4cmh927Vyf",
  "key46": "NMsFjhY1HeSWY5WNhgwFVh3LXJA5exVd1u49E2oqYVLUEn5dSg9divyXQQKd6mNsD2bo31XGpLU1cDYLzbbNsAD"
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

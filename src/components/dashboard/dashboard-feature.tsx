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
    "4JjSguLXQF5uC9Ztp57pv2BaUayVWeD7SEXrPSBBBiwhR56m5S35xpnLD2qyCRk1AXckvQZfyE1NivSjGVincfnA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fF8c7LSMuBahJ41BjY3zCLAstZMuW1aJPVaAzaYC3x6f9FeYgPRDKHSCGVFUpbHGZaw3eiwT718uoMWRQpsr94x",
  "key1": "3KEkDXifZH1tkorDwyxeb1HswMXPXKHVqDcUbwnAAmXPHXCpofMX7QcF8LpF4SjiGT3W5W3KDGnV7L6ykQjzksD3",
  "key2": "4K9MrdY2QdNS7Uz6Sy7XRYTX9J3bbWSFv1YVs6bGCRgT6wapxRD1PeXRcMn4ZfkvDcWyqrFqTzJpQddYoKArUbpE",
  "key3": "2BQVLd17AtUtpYdpTSsHcdDC3gxDNPQnYoQURiEoedQzT2M8P8W7EEQzWMcYueNkMgxjcGyUvsTm2x88M4n4wByr",
  "key4": "2bLFgMPhYPPtgrDrRpf8eerFwM2knSGir1z3Sm8B9KDFTBBs7p97ErchDZ9jpjxt79KvifrMRkS7Cb4r9WWAoRJw",
  "key5": "4uZaxFspSc8VnwU1hUsh71EYcqqT5oqTKTk5MpZLFUkDiATix1xzLw6UQM2ZrqgN157iRiWsrQP3ZwLyFSJkBiyb",
  "key6": "TwBy6uiMD4VeLv2czHPPNwPoX5DX1oXWrqbYZAyRLbRx1g16uHufQbwLVoywr9qGBA7yXKeS2CrkyJLQUoLuKqY",
  "key7": "ozDDkumtAZE6bYcG1YDnetmMaAPrqWUovygYBhgmXFdDQ5BsTBgsUUX1MkoybMyDpTwn5kuHYQMVxBUZXKgyudN",
  "key8": "tXvgpLcZffnH1VyHwBxxqYxpNrPbxJR8fUVfQNmBb5vwAeAUVAEfNdbKLnLEn66AnKQX551W72F6f9jcATqiAAk",
  "key9": "3MBVWC77g5DYtyJEMVEieBdYipRwqjgYb8BSS1asC5mBezcFrrZwT2vhhgwqsgBPLfrrPqvtj52QHKuMBVCZx9zs",
  "key10": "359KFpng6QNYWdDuZzdkJzrNqkZVPgPoB2D2XzDo3u8emcn7Jj9rr7gjjwbFkv2xCfpxnEDacmHeLwiiHWK551Np",
  "key11": "2bT23Xm7DSmqcDXYecmi6CFF4WXBidG5FXRkXg3pVuuZzk9uTDztLRdJr2KZxEMLpTZkQYAxHfDV4paHuDK5xywy",
  "key12": "3X1DAetcypS2RTfaQ9z4vCMTvPUUmb1FXgpaojZTt2vgCamCtfUumjbSGnN7hWLS9s5eVwpR37dWk6kJqSRw5UeU",
  "key13": "4hZvoLE24ZjTEKazCyWxswszovntmV2HjoxSFoVt1uLqKKPYygf1ZYYnajKZqCAk4cecEyh7vDatf7nq48cwrbkT",
  "key14": "2jG2eaEPn9wEm8no4XFmCCtibqkEA9cr5QoMmgzaHcgzNXUWFdu5zMoeBhY4JAgq9KKoNdQLDu7S7oMVyHi92kVU",
  "key15": "PLVFmWpaLhXqRDB9JxxUVQ7pjSPvzUMMth8bVkUbEBuZ5oZyDPaDThhFyVzFvfMyVLqWtSJ8jvsn1e7FVAekJZS",
  "key16": "4dJQ1wfvhmbG7SiHqj5CYxJQYLLS43jBqmfS9u9KuK7DHDocPAndnuMuUobTbh4rNhiZP4fqSPNv7qEzfLozQcEf",
  "key17": "4Fu4wD2bHdPzoRReteTeVxubKVzAx8GNVhNqfj2yXQoUo2s6HvJwVVWSTL8ShjZCS8UefQfcVGTRu8So1vb85fVu",
  "key18": "5vKjSt5Yg8UQ3w8VBAPZJdoMqjcFm9NcNBsGzhLYAu3RvFEsg5XiB1xcrscrV7gwAxp1YxZpgL85GkJGj5fqf1nt",
  "key19": "3kpMc6tF6RtYiMTQnB9BdXC5Fhe19WT5u8TvcU8GhzQB57eoB2CGdPQ84N2jQ6Mc2dJ72PL1FXG7u3xJrtsj8xd2",
  "key20": "4W6PAE1gCxbuU1jh57YYnfKZGVQuvkLDY4BRLQr52Gs7g5KrGHEpErKp2kT3E2HEpZjL8DNhy46BPGUUJ8wy1asq",
  "key21": "5ECdgm1TDtn19ZPSRD5x8PDEHMuhfqh99k38XM3Y21em2ycy2fUDtvP2v88BoVYzask8rs6xsA7BApaXzVSbEhSy",
  "key22": "2fmJKdQRPCApDwBceg9Qf5PgqDLQDXGWjdxHRUKsU9gwJs1TbLzpC9jHnQKwSjSEg64r6z71a3evyBphZamzr9DK",
  "key23": "51DU6xwKbtcax16kpqL5ErCmLcKsQ4VFN49VGmNgXE6FgjQRo6PwLcupk2UGJsH7hoWq7tTvCJ8DndmrKZALqxCk",
  "key24": "UXciBTCQGV5KyJr6huu9vUwACg5Kqhoyxsg1ZUZDYD1Ai5SvogcyW7iHrysc5dMQpG5xmp1SPkZRkxMBcGrxr5K",
  "key25": "4iA1bxsgNno7CE8p7pcrJSbiDpnahnEByjqviEPoEQmT121Eu8DEstMQDfhL5tV6PVoGkcSQd3wzNjKk1ALzBtzP",
  "key26": "bZkq1fJtFxxj9qu7V6ygAtuoNiCqCoJcDM1ak8QztU2yxA3ftum8ReSZ17keTgn1HRnd3wLLgqy251bmS1yNMDp",
  "key27": "5vfRYDrTyFJuovkQ59jidEp56aVtykWdHqsFatf5H1hWSs4Vned9GPBuxm3KVidsZzrkpEg2uddUwTzSpuPMm1Sx",
  "key28": "4N6HEcVYJeSR4H25pdzd3QZDxJpFEs3JhY5xkF3CDv22UqApiCtZ5YiyAyrMMidyVhubpGtstRBXAgXS2TA4JZRf",
  "key29": "3uUz8WMSCiauTT8Y2Z9Bv6xPC6LquHcvgjRrmazyGfL5DATsKEKeu7CtBnFTaSG4edVr6tkndu5XbSZMmUTEUMdp"
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

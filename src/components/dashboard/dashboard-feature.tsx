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
    "3ywjFdTPiKrbe8h79DvG2MkHeBFKpYBVtigjFfmCqXpXFHwF1Z1RZtyMzr2rscpSTEHKZEBa5YDBbXtDHvHg4NAk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wbTg7gPo2WXhh9DjYkYwpXxMKeAMjnjbQYHPg7vxKzVfpeNGnm8oEpVq86hNZrAJE7UdVDKHjFYwdJ7UUgSbKDj",
  "key1": "3kR1mpzLRQcarswNDU5ScjBCA2N4JzFujyAres4GefsErLSpqmtRyNg3457GarW5rT8Chh7BwxdgoAD3YqQkZkyU",
  "key2": "5pAU36RPwT2ehTXzSfy1SZE98vf3XtQfMoUeJxd21Pb7ijUjPV3K9onXPVdG44fEqJpr7Ef5BKq6SjQYrtY97QB6",
  "key3": "38Te34GkrYXu6tZBDMtLUKA2GEpWGWK2qTUFsfdYXvmpFFM89341CLqECCdPkDYGWnEULejiqEK8oaxXzGj3fxbk",
  "key4": "adPCgivy7orYk7o4r65FfNQi3L5mAXeKK5pq6Myg3snVShaWjfr2qE4pzT7XcokqnusKJMv4dUG14hDcbUGx1CX",
  "key5": "3uEvZtJJsTyK54pTjD9DjQcioywyAbspNgFydP71BB8NzQjAqiNcRyKMruNM6ZyV8n6kfaT2rh1MQxxpX1AauMNd",
  "key6": "5gS2e8dsJJNotYJ8jqaGgw93A4SJzh1hpfqcZqa5XSdfgDGSpnr8b3TZaXJJrdJMBzD8zoMLhSGyGyV4chB1WY9U",
  "key7": "3QgfyLMXWqxH2cxrgjAc2nfAAqd5Wz4FQ9PXaVRvUgyPUTiCYyxGHbgAyR8qB4RoFZ44GUGZ9U1gLG4qf8iAXFkE",
  "key8": "d69FFfQ5UHhhJjMHArXf3kqebyd98MGWWikgoCwkUkz6Cw4mvvPXFgKbuvhvreQ9Q6s985AXQvXWxM8vDPzQJny",
  "key9": "5VJfERJHPdsPzvjw5ujnSU59m93CqrgMJ7Vb2ZyGE1CsCRnmqi21BC7381uSSu4wArdMB4rJMa5g55HvUU1We7Go",
  "key10": "32Y7JAFgYDf7EUoKWiQPMvDF2eo45pUpgHiW86VKwduhPz1JLX8Qked9mGtcDRMxLDF5PouxSqQwq13E8e8LpaBA",
  "key11": "4GU3RXbym1L4PjQJB8xB1KxSED1HJt3PjSsvAZcK1dBj12C1PSxKGU547ZQBg4ZcK13ktTke3qYVCvMBDD7gybXq",
  "key12": "2pAvEPhfDRRCMMVBrJA3sXpoZEMwvAAaBrcjTGouHbSdvTjh4gTCz7A3dLwYvMXwuYzCmtHBFg4PUZY5JbunqqT5",
  "key13": "3pD5eWhGYvcTmUFme7do7EpPtyLxSr3rUBquJykZQFkXWagXuFGQgVPhytZC1XnDmA9aEJNc36SyxRxuJG8ekeHT",
  "key14": "5TPHzec7yVtjWhQKhXzTYayGRJG8qWdW6VEAG1hrK59GB9ZDA2YEWzJxCQEHLjqPnzLzmFwaDFfT83SRBBeA1s99",
  "key15": "2SJ8nPSoS45U7sBiTLYQCmFsyfDxDPXuCDwm4YnGX3xGXakq48c23DzY6VEJHqLjmjRWsxRHE9EFWgUAHohp5LG8",
  "key16": "41FBnKE4rTzEeXBZgsTFQj3PQkwJPURd8HwhQ5PEHsVjBCpytpGepX52WLzUZohqnbMQ5FAVXs9txkDVF3AFXTer",
  "key17": "2LhjUghHB5iaaXp6isbps18LJacJitSyyP8TVUkZxH9x2FJvYyT3n5W8SnMw8QVfLj1z6QXi2sbfEDP18waC1VG8",
  "key18": "4NYcLMMunk9Yfz693c96dbr8KY7uLwxcSwUtSwUJGRYcBLwMuz9w5nxvc2e2b9en2hPEL8TN8QJphvbKGBXmv6gy",
  "key19": "iRxMGqpHUAYc489A5mY37i7xJThSUyFqDSEqT8ApjEGQaABbML2VoLDj7c3U3Prg8brM2pCiqmjhEeF2WybQtwU",
  "key20": "5jXfjHRMPRrJXvCFYaE3ZuL5qcV6icueyLq4e9zGqdBDodddJQGp74fg9J3Sic7YRQgG9MtPRosZs2CQskDbnr2r",
  "key21": "4cXfUVwNPDMHiTy7cGeaLUjM488bEq8u5zJ9benyWuZ3fBR9vHhEHYj2FuuLorycfqf5R23HAxmwcEXPM7QxMPHm",
  "key22": "5MFGb3h2u1GiRamMMMJ922a81yZteVi2cDx4y8T9sWKe8wBq1oH9ur6diD69Q6khNF8P77aK88j56ajuhcP24aDg",
  "key23": "26dV83rNATNc3CUAG9jAG9KbutyVNfhsX6HFFTZU1hGyPB1ttLgYEYekYLq5vj5ZSYc4v2fV7VUYGKYhjh2eAHr9",
  "key24": "5ThQ293xetEPDGqkPqaDNzSiN4E6aBikrRJcxSt5JQbfes7z2FzE3mEtVAqoec2Y9FrgiBWNqFxyrKmKPbxQe7Sx",
  "key25": "5VWAYkmZR2u5195QFLAhMKfztMLeVAwotbf8qyzCFxja9McmVKHBugFHYv3SVJjNT3dA9VqcKRbzcamoXCS3pZ79",
  "key26": "2vwPv3yM7e6R26sgEocHKJrMtLfdsix82cAYn9fFLwL5VUhtc7DXKVBLjG8kBnAbkMBhucvbHWs5zvoBg3q1CMVD",
  "key27": "564Mdn5pyV9oLVYTqDZ5r5DNhuq854TdHeGca411yTkW1nhfNYb67g4kAj7A4jvyh96w5j37h1Kb61fog8rxHWJd",
  "key28": "42Ef5G6fte5dd1D2yQpVyFo8V8ZWpRsEZ9mbsf9uA6CjggMqpUiRHmHtWWFWXFsTAmGgqohc3xDLJYgJZmk1iqjJ"
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

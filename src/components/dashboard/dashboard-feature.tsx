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
    "3RRzGw2C77E9swsGGdZQBPwm1N6Njj7sRey9rCV6WJz7JjRBqYjn99jer86Ffgzo7RxeZhwNv79SdTUoUv7FyX4g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25n4ozPPyH4HuYs4m6VEreQdmPRt2LYBsbr82kTycaK9DZyhyy74Ft1vhJmfp2enAUHVR8bKqhY59xeDtuGKfvZu",
  "key1": "3Q2r6nApDr6c7pte3UmS8BMnxzYWkdcr9m7w7Q3z8otw8PAg5Xx5qMXMfS19dzT3wZWzSHtZqhBiabfh3JRttaX7",
  "key2": "3EkxRim1PfbG4hbL6FDm8YpjXeBRGoVsqQiHD4qyYFLkqeXty9syLLHVezFFJhesZzD5rRVG9GhHrMcGkwHLbFpc",
  "key3": "2tpfvKvXGGucFspeEBAqwVMbcw8oQiLMP7GKFXvAMVgd7Lu5NxhwCJR1N8Ji9VHnyXWvWgskmQ7B1eoKgop4qiFG",
  "key4": "4EK6ozE7YDenV61sFWvBz63UwL52iV56uNfiJksonV6SVgnN1kZhyeuM7QAmL9itL9Nw8mufESohZmUYneb5TwG3",
  "key5": "nyCkXKwbG1jX9avbJ4DpR5w8fuRgfDLCkJp6UxVTVv69jc75FU7TzzDFj2DkQahXajnjsxRcGtYFfEW8zAJBB5W",
  "key6": "3aaaw2atxXdgG86v83gMxsEtYyaEt2nrAYBAvoGoBSrA16uncTH8ej8Ch5veH8XKYnE82ouQ4KsK9Tbj2FU9b1nT",
  "key7": "2jfhCu2tktKGhJZtvSa4ndye2QAgrvVYbLrq9JuBPe1LFeifxFnoPMjnCKA3GRCsNAKB3ZfQwcfyU4gq2WnTHpNu",
  "key8": "27658kpRGcctZhiNpPHDSmqGFysKJ9DvA57kjh9vki9JHzV4BknXAPZ54b8VmqaKSYZmLJACfXVrnWX8MKXXpadw",
  "key9": "MU8JojBRGxYHzYEMHpB9SNcBAE4jGBPW6FtBVwWFQLaKJxKzt1CPSUCsHs4JjnxdJGjgWiYSWuhMv4vJxfr12Qy",
  "key10": "3iViey6ePWix6icbi2Er9NPjMESByKJ6KmVST47bXreuwYkzyorKyvJ5W5LKFoPp4drHQvdVpuuH6fJXWZLVpXFC",
  "key11": "5jVXPUJKQBEJfMtjkRvTS9dVsBC33yQV3TittGkoyuveV2545DeLsvaM6ZnJyX24MfgJea8jqH3shPTY9jE1aTNj",
  "key12": "5pUkJeVFGkK9ft7wAanjgdbMdrgvduoP91SBDSUiCkdSkcrgZ6PEpKQaEaqBpPZEaRtwjT3JDDU3CytmLyGjA9Kc",
  "key13": "2QzExGmRfjkg9w3brqS9i6faXSQTLtqpgKhUXqnoJa3GB4ENZCN2w9oPXEF1L12hawwAPLLDtWu2gHF7iWTGZRZV",
  "key14": "cd944gNxUqZa3xWxFmSXsLqYrF8799aYDME8vT5B8p49ZaNhTQSC5WfwfY5TUihEAYDjRKHPLFB2znjNadJNJ4N",
  "key15": "2ztu3e1FAraBoNAi1YC5UDMfQxLE8MSntzFeVGXBrSDx6aADmiJP9dBG5x5WokUZ5PeExZdToXaMaE8jmE4Djpnb",
  "key16": "32JRzStQgUDnNe8aL5KY9AFWMphhVArFiUZmzV6qxL13roGE9eNxQFPBZxqWXYdYi1XaDwdBxS9Pw3tfAXLGxH7E",
  "key17": "V88dxAPyY6KQhM7AAVJntXM8ewuHKG8xGQngHP2NA3qprFHcgHYFESPuUJFYDKL4xE2NBxKV9euzy7M6Ld2vURi",
  "key18": "2icqsjRbUXhwXH1CUeychgKuTTE67qHdngxL1MYc69QZcwMGEZJBk1ozrLW8XMBsimgXgxzGpuKuzXoAPbyCmAB7",
  "key19": "3G7Xr7rS5VBdWvLHTa8Mmtra6DqrC95UbcT9rkHAiHgm2dtdN9FjJGTKvEqs7EemjnCUF2dFasv2J7gSK9dEdnEy",
  "key20": "5YNFiMuETCSRwXxoLbotVkmBY28CmLcKJb17Ff5GqDhKmdfX6HgRjiS3s5SZGqNbAdjiVKg6HrQt9hVJAWgxWz1G",
  "key21": "2dodWN56JZxtkVEe4XZ6FpFTpJLT1zaH3N8fAnvBrBBnkqKje95tUHN8fBA76SmvoZxuGaug68RKQG7SKythP9WU",
  "key22": "4bBnsZqZ6uSLJg6BBcuE67XpJiuhAsLcqNkNB6Wbi89xtCNHYsWGnkmhyYkr7tsKvFLVwenM3jkfHoQR2M8Ygfw1",
  "key23": "5EN9cSYmVWzTioQebQbiVRfTWVFSudgF8nwVij4M7yEjq3enkJHNS1QvSvfCph9xTMQXRafFx11j86WCD8AE7zxg",
  "key24": "58EuiXAM8mZP9y8Nf2v2F9Q3ChuWxS6SJYkwmRLUb3YJ5QeAVGqUuKPa1XcgcB5rtho7XGxqocVFpGwPNy2znNn",
  "key25": "3XNeb6QEj8qGMYMyHB634kALq931bMtV1txGysgRZZFe8wBMxTKLifBAyQVB6gBH8SQJpovuupBCouzxkuhFv9kF",
  "key26": "eAfp3Ag6eN2oAb5YDKA5Wng9ecMPy8XAD64nVmp6QQ5E8HYF2rHXLdA54yZZJv7uA3YWFcy3izwfo2cSgArv2c1",
  "key27": "suej99cAqDDncrEXi2qDjG5cSz3JPbAuZEWtzK3sjfqmR19NnnBCbxgBNuStBUqRpXvemh3Kn6MHeDGF5LJgFUZ",
  "key28": "58skRP8z2nnabw7vKC6QZg1Vvn8hyPHV95zaKvzbpfpoV2gAiiPWrrgYPHEKjnB1haJkJhpCxoXWeTpZjjcyzn3M",
  "key29": "r8Goxo8GvHdir9JA4aSqYzStv6ypJFb6Ua5cuyxKJDJR4WyNCXJdsuSfeBaf7XiL1YrxQyJGTmaF3hUU9bmDwFq",
  "key30": "8dJeHngpC75gCY9f39Sg6qysMGVCzBdVdThYRMoPrT1vKU8ivhexaEPKaN55iHtJoqbCXnVc3uK8rGKBUwKimfa",
  "key31": "4rA7Mo9BfFRzk1pGvLnoASxvorPUWa2mk5ysDH2UfuDYvH8uQoneN1ENKAAJGBTN8Q35XjRfTccFfe9dc1ro1Q3E",
  "key32": "4f2XomJ4H3zqmzbjjnfGFyw8Za5bN39oYqxNsGcCAXGZd3Q3jJTCfKwG3JFBiZ4eB9m3Do4byUhysAqufKkTPeV"
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

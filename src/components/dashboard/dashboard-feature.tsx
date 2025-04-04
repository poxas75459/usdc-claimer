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
    "FGBUFV91GcQKaYQyeBruErjpKUBmjgUqvvwFuKFVRoGrkbD4nyZypdFQLibFDxH4vvjYs4L1rejCNE8Xhgrmjoe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xZMoM1DncwwmeyuQ4GQbLV1kc4HhPxu7xcVjbPgjAbmDqucqyoQH5yk4MhExy6gMejPY9WG5S8tYsCP9XWmyj66",
  "key1": "Ay1x4gvjf4sRyQcbEVRv57YkQQUytbvYc37424Nzew85SBzAjkkHKGgz1XdcnLQGyYDYjdoBMEmZxDSS7gPSofC",
  "key2": "5QVTupjuQNr2aMvMrZLAGEJpHSw2BnLFee7C6iWUtdgDAUm5jqf6kbEwz1QKThbQsTr1Cs6A9yson5v6c86TEc7e",
  "key3": "3HmQhXRwSAcAnPekLghSXoUe71xbVa4ZUp8zcSznTgFbSfdVNgYYv6TYEm63uJWKESdNAbFEFRgHR9yg7RoybYyj",
  "key4": "5eRP9ieMaYv4dgcepVLTtftsFrWXiqAHFLo4z5GPtoXQYA3ytLTGfBcnbbrttQTfJwA5zHikxCcEPW9v7Mgd4L9D",
  "key5": "4yk4qWRq8KKeLkiCW8yEW4KAPrcZqQsazjyooHk2tpgCm5CaLvvnnRUAVaXnp5vmtPhd4t3e1CJujLnqkXQLU7bN",
  "key6": "34cLftaRVpmwvEtXQuAWuwcTDyEEVabahARM1MoZihQkJiTAe82rw3DZazRedeRwLXwk5HQoneMdCpJgZuCGcN4r",
  "key7": "FfBXXKfcDtt4jeyTBJStQPSB4YV1yNN9sRdSGacPbqdufuzQjHQ9qQvePiGoBwpEZ1mf87RHRbMDSW8QD4MZDhK",
  "key8": "5KhS9c1BrFEuffCDurQUgjD6QCMjFyBqQMw3gs86BayLiueXGJHpEibiB5XXGLve9T5vggD67mTFkj7jghWEHpTD",
  "key9": "4t7hUafszgvtnzBHcWFFSSds2JAmq8iVAZ32Au8HWmsyZmFGSRvgMKfJKzQyZYtM7WyuMuVdwPLVUiPkF9wJufah",
  "key10": "52DSwXKxkWrnLj7MboKEN44vMaT7ocfKTXdtAZmWm48gMPWXAHCLyGmHb6AnrnUy1BLjj5zPnCiRtKtrAg91rHAg",
  "key11": "2b7NyxjpKdAoq1Tb34a4fT3Jsnnpfx5xE4disLfAFYvCApqXUvgSHzDKStaf2qD6LHTZP7BLs8pz375PqYAcPWRv",
  "key12": "5uqC1dVukeDcB6tjxN23vzyQBjuM3bSjCT4TFTZy2zwtZpg4RDYYUNHWWAjDaaEEH6UZ5RPKaRhP8daE4JWhBHEB",
  "key13": "3B49SxnZ1cqTJJQPR9xLQ9oQ5rFZ7A9fKMzpkD1UTWjw1njj7bFeSQsdeaNCfFkUQKmqkGEg222M4Sz7PXczTPe5",
  "key14": "2gvS4nWQ6nsUg5tqXBoedm7RYqjDJBMUecM9GSDswtuSp3Jcq7ShKu3Px4tjiqZGMmdFqJ1PRobuGYmvGCkTpNyz",
  "key15": "2Cm83tjqSEdd978VzvuoSw6zSPKshFPqbRs9xobAd5YjPobaLCpttYbbaABmweC4H4gBuPKdknCdePuBBtUfahob",
  "key16": "5JMWXJfvmanYqRcYbumo6aobPRqR1wtBs9RXRGx6bdznC38gKy5VEHF4GzEeFVYNUfZf3W7B9T33PBipciNzHWdZ",
  "key17": "3nra9dxEHLVjmm2rmMkaQzosHTcE8dw9h1qhQNCZ6cU2PAc1tSuKhLcuQz9BEj541ZaaSCLAwqCj2kkds6BTjJmT",
  "key18": "3EF4VQruuh6wowHynJCapqZSvjhveShoNqszJvg91ffeHBys6qzVCUBWARqJAyZYjzTRdkGyQirqL567qCBpWFC3",
  "key19": "48Jny9w73hFd4pxdLaqY9AUKRgEZfjz62ggqNRbR5EhxDAkXTJBC4BTeXUfYGgwUDipuoWechyQpebt5YR5n7FAN",
  "key20": "ttfPvPvbRcLgmLwi9vvRRxWbxTRQV4ePNJavchMpxsnwVX83whnmYGNuZVXyFYXw7Er6Ay43HPUiapErJhU2LMA",
  "key21": "5zJgGbQ3RPpbkQipTh8hTT19KZSoha2oAEzwiQVNdNCjZQ5i4imngxmbBAfomDMoCJbwAdWAga3byC1SW4oPLy4V",
  "key22": "2VcjpEptmdGdpBCSuWETkUqnPCYres8feyoHrxaBnhfy2gPpJdWptAi8Vv9UbKY5TZtw5o5vLQSpj7voM5k7h8aP",
  "key23": "2higfCuUiMyuEKJ4XMfRZ4GFENhKuAeTFtvV17oBR4QBUuNcz3f6ZbBZ1wmpnV9qEnPcrjTrZUmUN6TBQCRrRWfE",
  "key24": "41eL682TVLTKvyAVBGM6QaKenSE1Bjg2b8LRP4QpbvHsgbiF44Sr7BQUHTkH17BwCRWuyBdYKi1ybFZAsLAfSP38",
  "key25": "4e8EwghqJLF8zanT3sxSkXVUUU7R5kADtLE5LL368vdMSG4iiE1iirSSThG974DgEsG1FP3RTHQUmDTi5eKPb5yi",
  "key26": "LU11H878S7ZbnZkdFa9dFzAyy4wFPRGm7d1CVQM3hxo3QCrnyqJ5dtfqsVF3F86hb5xMdVSw7TNSA7m3zoiopoh",
  "key27": "3UbQXvzLDqTwEtwHdkpHurxP2P93kQ8NoZWBjjCaGnyribbUjGvrkRZQo1kr5iyyJpsCfftTL4VdwRJpL8kur9nP",
  "key28": "f7ycU3on3JARhYfueYNHysVcEDjcpUe17xkCYUcXKHZhLFrTFAtHPgV12W9HJAc7AMXALnMrBjHaSpfB3AxnpnS"
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

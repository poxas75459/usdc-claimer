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
    "eHVhyJJRRRpVP5xXHpC8npEvij7jBpydG4V25BG2FVE6bF8CARkMbvN56n5coRtkJYeoPDKfChfDhAp63dFTszn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ifyrhwGk8nR8wwLov5iw7HCCjxp8mup1adV6zeN6oWVESzawbfGmSfsyf3LwimeyTsxvoC1Z7vHt77y6wXd9Yvq",
  "key1": "662ruH8u77Zc9wmuCWHRo3anrpGYYkXSSiV9gcti2Vc4XAhfgK65xiyeCQR7sFPc3vXfBq93AeUDPTrM9Q2LoKEv",
  "key2": "4JUawyZaEFzseVQW2GZoK84muDw1GgQLCV7oxTNP5ouYucVnddoX9adc3yLFkABEHbDc87FnCYM3zqCUA1PArVgw",
  "key3": "4AhhUAredemV6mhnNNfNACLfqKYt1gSoj6tYdJKb1wRwZUfZYdqmmTqUvi8pYY73FcE2EpzhGgXrjAPDjT8QagDE",
  "key4": "4bhnYZfmuUwwPEVfFYY3Yx2vs1MTSp6i93kTQwL93irpjpogP8acv5hw5YZ9M5mLmsPErXUjVkQcuGQi6MVtDrV",
  "key5": "5m37TUPrjLg2Fk9Kh7ZBuW3HdhqJW25HeNkRNedDYVruoijCq2M65Yin4zRPx4GNCWuxnTxzFNvnNDhcn81xnSdJ",
  "key6": "29HVd6ymnPunUS7SBCgXjEkq3jt1NkbRjsMHU7X24iH9rAXoF9q1ifmCRHtSjXQgJ1tsRzF9e4N1nFe7sEkPEHaw",
  "key7": "3X7GTF6AsguvnR11kT2LdewBxMBokdKtpnzwRtWB9kfxhb7WAaae3qg1XfZMGPMbCxbUpWKUo3d2DQFkeWZ1c3Jz",
  "key8": "aHrZ8YkwheT6VMwcGc6RKr2XqP84ukYY9RMoWZ9tRf4W5isbzmvJ9wtTJWqS5onpMwrBWueFAQmTm2NV4vkSwaW",
  "key9": "PKUjHacFtkCXZ2kXt4iM5mw8msQuJkWUSAP7kNqvJJQY8SXWnB39Vcbfe7dLLfQcxpwXYcEoqYDKoPSqXqL2wa2",
  "key10": "DWF6nrgiSoQpWeQvA9nBKtGDCwvhsA7GynNHhM82uUZ33CP33Jr7Ukdnx5G3qT1anJQ141zAGCuwRM36KBaUNQP",
  "key11": "4kEtgxhmFrzMTLzLcn2BpJ1bLuQLffJHq3EUH6fyvLfiunwYYMSea45sooadBPseT83un2WmQhFGmiEkHg87cUAZ",
  "key12": "2LHyXz9ZkNBcuwFz12bifnTvp64xC8gxWD6Vx5xFjRAn5nCHkRBJUHVtkGSLhZJMG1xEQyHS2vZXuT2sqk6CRju",
  "key13": "4HevdrgQuaCuj6o2pJwV4VqP6RqsMdU2fo4xsFkLG94ruPmvixeMuzFSxdq89A1kL6LtjoKdVzmnWAvBLpzkC7R7",
  "key14": "3x9qQDMvfTbhftCwM8WV7NZur2wgaWTmZFMnZJ1jK4LCFzQpJnr5RpwRzxMgmF8yxHSNgucKnaybzwNWY4CC9TYV",
  "key15": "2XmfkSZETR5vvPr24LHNbV7rfgPGbs2mZTbKQ8bHoGFQF33HDo46qbChgiN7ch58bVkFjCFqv1Hd8UFp9vpwKU6b",
  "key16": "3W6Hu9A3Hs5XT1LgoKupwt9U6raQU9TNSSYoxDRexYnm4NMuVNSDrxLL36EdZ15cVEKAkUi9pWBizLvyr9CferCX",
  "key17": "4GWENr2XoDW1jVLZYEhEx1artMz1qjiGhdziLNx4bD9o99fGAspaXsQTQpgQvQ1MJpRBGo7y918wMnsH31uJrM2s",
  "key18": "3iDPx7xg7vCoaaXrEsMy3bosiXqAHhFJhj5abk6i9LqEToHi1Q57oRqNCzwNHZ8EqXQJE9YjBWmKiHMcRkVwDC5J",
  "key19": "4JD22jMAFghtsP3fULND3Ca6y6c4Fkqf22Y7m7ErviWHLo7JTvuhhpFcDGGYN8xuTqZVYYZjddQucbbALLo2k78p",
  "key20": "4vCaNaw27hzFwMjG38LE77as9hnyHnHzi1iRjrrh5A3Bs2qpU2G6yExGL3buiYzQLcbJiWJqyTWGhJX1ELzofNmU",
  "key21": "53uMUk4vSQPcX5w6EL1LGU4XtCAjsxhVP1C3q82tZnfeuAwV92fpQ7MSG8wdANKdob3YHcUL1fzESUEiPPYtSKnK",
  "key22": "62JwhrsyBydFWrwQjg1tkkJwHiFveosYS9XVuwUvZjGBbVWdsv6n9TLywiVk2tJCwq5DyFbAAVBT4sEppZxKKmsD",
  "key23": "5Jnur7hLPqVRXTD3orM92zfFKXyA7dTA3cAZwR1Zw377rhWQEhT4YgEkk1WuBWo7AT2SYf7Pym4C2srNPbhh9jr8",
  "key24": "2X66iL2v6Whtx4VbrqUXzYSt1TtPKP9qG5ypnytdz5FP7vW5nbs5GVbQDLtFJk1g517oJYwWVJiCsybFCv7qHVcw",
  "key25": "2FTuz32YvQ8ZybKSZEricMGVf4b8x1gLG76wZqtYkkFMy6mhRYwjGherrizsUK9iXfx91ogbWinFDUrtxaG23mig",
  "key26": "3XfqYK7mSwDr36J5hP4vLwEKoji8x4wgWT3nbbDV1ShgrTZHEpLAizDVF5C1vFoZCKdrBRArdEVipD83ZF7KEiqf",
  "key27": "288bdi81EasyzsSxwr6RR2L9GaHriWsrbbPEwFAUD5xXowiLjG6iHsCWdocwwiJ8zRPugGK93s6VHGadZqUQqEqk",
  "key28": "uW4ZPUjGvTrUaL6sRrdQMZnFEJEZcvYYjW9MuhyLM8eCXa8piKj587HAKcrfz6xgZoqVNgXojh6FFTbDLQR7yQn",
  "key29": "2c9LvJeT7H8isJNnGrZ9XbsTUcUQoUXxyoVr298HJyChmqw2Gd6DhGwDeSrNHRA4AfJ4UsrPiGvDVHThbkC9aHVa",
  "key30": "2GF6iJhAabXJkrojMNYhfD7pTtgoZoCVNHD1Bv1eggWNBtty38Fhv8uF2xEmj8Ezxo4qf5mt2aDZk7ZCEchYhiUT",
  "key31": "63hRm2zTM6G7xRZcCvVut7PbGtxbX47NgAh5G93GQ4xU2SLXV1VHaR7MVqWRSuzMRrokqbkau5vgKCP4WEkBHfjG",
  "key32": "2bK9pruBxrBEQCSAz2mjMiLaNpjr5yUUcLijFu85nQjUMsTgGUnANvSebuhjLVEGkeHNAtQFxV3iMU1j4mJP8mfJ",
  "key33": "4spmXrCHsEo4kredHjKpHGhULnYQFCVqGuZpkmRquWKJywUfu8hzEizSFw58r6WXXzdBJxAs3FLAWtuNxLX1YtHo",
  "key34": "3sk9fYMVtJ2jgPS9tHawwcjjbDn1PkxGtibDhxyFFtcR5ZEAnnVuYRFSvig4fFniXNHWQ8fxHpEwxUBcRtusSpcE",
  "key35": "67UMimk7tqhfGticWj1F9hPWabL3situdLPHmdisiEMhmmvTjYRVTkZTfb3dkrHbGWYWKGsEG8DmLbmMkr4gezxM",
  "key36": "5MtcCThyHgERDc12iwAE5uuP39gum9wFqhEttV4YFA1vs2qGtr6qvHxwmQRucurp6yZqjzpJq4r4YhEVeKb1zVLH",
  "key37": "5adbGX6Giv4DtTp9fhphBKmUKmP7MLE5bxmeozUzrVYbKXEUf3hdnTySkaoexnD8Zio3xNaQZf9mmSHnbQtvaTWx",
  "key38": "4KK4tCKnA7k6iNB1waryNMU6iutuNzSXYBdbvDXoj26ABCAHqePGUaxh5TP7B349CQWDjfbHfrQFjBQ99VsPU63g",
  "key39": "2s6acXsh6uC8vUjYvy82A9rAPHSffK2KoRSDacWYUe5KXsAxjNf9Tys7FC8SxaArvS4xy2aSJ955G5VjH2cW2CXs",
  "key40": "3fGoQRk5fXSJm2ELMdPC91h6qftEcrqSzh8a6LmrUtSghGpstD95kiMdV8qDzNBYgqg3xs9fX5PpuWh377fZuAn8",
  "key41": "4rgr5qpiAQ5N7nDj6BVHCnR7xvaunRvqWq6NrNFkKV5CxSegB459cKZdZtoDEXbvuxjBSRC83RAbSWww1kZBXKTT",
  "key42": "4Ee8A3MiDrrLBogdRccQ4Xae3un9iuLcsR5kB4WF8w9jCU37d7yWRoZ3Ptp96JaP2yd7hG6rgCu1yehvDTSxAPm6"
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

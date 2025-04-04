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
    "5irv326CQoxFbzHtNKMaipznBcrtHsWVqEF1Gs4i35EqApYFM1q5C7rp1MKDWvLkniscziaDHjU9DukS6Mz2iMjS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xJqJFSqAdMqSBvPEUhWRqZJuXXQYozuDyqfzmutW2eotZSNRELHZ5Pco6Y2BQJNT9ZSjwa3ejG3y2xXajRqvM79",
  "key1": "4i7B2RU3DzRLVyUyypFqVBQAeEsSE3fqnfu6mADatoUqprZs3MPgSYhy6sLDxrnRN6d2xEEzTV2f36Ar7XkcMFZo",
  "key2": "56uTZN55W3rjwb1zYSeR3V2VbRNSwgArYpbiaeRnpti8Auo86WffhJ2yxJptp36H2U3ofXq8CuH4Zho25NDKyquW",
  "key3": "3KnjNGD8ZG2pSBvMFve6S4SujJ9YpFcqEGekQBh6sDb27rDpFT27RwpCAkfwWdh8j5tbLEFDMc2qs8BnWgrdrc69",
  "key4": "461KzhZMBC7kGZbtgKreLSJW3QBjgTKk7XofA2tV92NgAe9Vc2wH8Q9qmfbAupdDL8aaFqtdnqbBSUMx7mibsNbL",
  "key5": "5ZRmVkeqjFW4peU1JsRxwYKpBWBHNSucZdKxBtVtob8gMixjEbVPvH3qLodAJWoJnF3Z2xPTo8uoWrwaFHnTWU5N",
  "key6": "2zXerQdFFf6euwhmUSjPYJ95P1R6wzYx6ypNdD7YqpdWPJwdv3dtnf3Ct6B3e8bjCrExcdTttBNbFHHHW9SfwJxw",
  "key7": "4nRS5Y846rcckY4Qv4nccNTRJrbX5e6w1rQfLAyjngtRnmwyVVWWgMBfEaNUDYfQkNAP8zMHqatRTphbe4EMUJbF",
  "key8": "3mQ4eREfYMmMPKPwjX2uHBzu15eUDRBuvjPvnPDHz4cNeeLLBLmpJPL16HHzuMwymRDXbMBt5HtVyNXfbTdUQejw",
  "key9": "4xnBw3U8EfoG6Te69f2hehnfPhias19uxQeH4hoA2sLuKmG7g59dvbS5JnJHvUd7jKnY8p2DJLrSUWGaE2cAnC1S",
  "key10": "SMJzBLjRArNtjstEtJe9EBBiusdGVAv3TdFg8ikpVEU4QAhshb33kW8VtMyskKCsoAKsLQtsbiCGxhnzuevz3MR",
  "key11": "553CPsBFfnJyhpiUQ7o3g4xykBDv2KcGFHSrjovMzzPA13tdDcdhn9SnBrrFsMn1Webo6TwxUnrMRrLM3CkWN9kM",
  "key12": "3Q7mAYmg6d2o1xpni8f8Lo5PusxGTdKR2sNQc3uAobnEJUAiihb51n8F6ZWyj5wmSWCRRFqvZdE5b73GU5MGGAJL",
  "key13": "5ian1ZUn3HjiQGnqJZjQ1NeyaYbrsHDgHY8DBhF1hiUZLTKSi28oPjyg9h8dTuKJZdz4Fkrb7JB1G2nm8LQwqvAN",
  "key14": "3w5iPiw2KH8oPmHKgQA5p11zkVT8mNZZvFoy3fJaBG5MpyuqfVULA38KNrVA8E1YojVspECk13vXSC51xVb7UYVi",
  "key15": "5ovDj4ybwYbyxRhxQwVXmUF9LLCVN8KFMEaSacqGib9qSp4XMSPJHjnkxrJkUUZHyBRdUF3zSpqm7xdbhvN7bcAh",
  "key16": "LtEHE8J3fA4Gy6niP9YmhSb6VMbANb71UpL4DkrYDeXJftv7CuQDbfvFnrSXuNfcN7JtrwUHzehZzR5vCzsRwDa",
  "key17": "4AxhyfakZCAppKc4BKo9pDXi9mfYhCEV8a2aKSaLUfbWft6DW9kvSwSZZNUgUYu92V2wU2Tok21Moh8sEvgJNDhk",
  "key18": "5pBY2p7vGjkRrQ45QrHhJNNDDwdisTxw1z2PHLd5gPnNe8NW2bvidNh4N2zY4joHPzWnDMVfVr5fzUJhRrPdQg1u",
  "key19": "qVa8E3H6jAj2CB7pgfDJFhwELpGDj4jbS6Wo2ihT5JuBNhsmFB6ox1F2eXnRwDn4vqdMprYz3R4MP7Mn8qW1sLy",
  "key20": "6STpLeDyhezvGjEnBM3pRNQwyt721C9XZMjaAgsVH3Hd19GVsj7FEUEXM72owzNoetLFxb8ZVj6EF6p3tc96nmv",
  "key21": "2jRVQ94iBt2B5tnoi4pdXM4SSe7z57ZitfJvdC4V3VjBV6jTMCXaczPA7ncCL1JPf7PjoxDd44UWJTUZrhPhv8CN",
  "key22": "2TCUN7ze89sC3GAF2B8EFdScMmBe4o2eovTnp32725HRwqjV18c9KpPVjhfQacnM15btiahicgUjkHWKBETNHjgK",
  "key23": "3fQhWQq2i11xRL2WkTxkggFnv6by3QMzwRaehR4da3RLRiNjB8tEMsKzePmm5DLp1D9GwKWMJarWnpJuk27vCMcK",
  "key24": "2RZYFoms1NiAccrvyR3S3dEsqndnuBiX3uHuJQUoiWu47uV7g8XG82Vr8J2TsBkTPhCgYbFGvC8s85aWngQXJqer",
  "key25": "3pYjXrx6a2jPdhMvy6cqGGTrto5m5vn9WJH2GM8tzfGw9ixJwUrs4AbJVthy24RxVZi4AkwLebdp94DgP2dN5apM",
  "key26": "66Z1JgieRxqjAmjk3XFr6mgbGCrKhuqjMk3jLLZqQdeV1jhNht2iMLcFzGmEuvi4aQazwRTzo3wk9uT1MrCmN7sm",
  "key27": "3yuy2PkxyebHKkpW9nrHf6EyCcVVTPDse8A9zu2zEU65RvfGdmggZVppvQPLRWzGt9XSAMtGCYYLn2NeXcB2XTMB",
  "key28": "43TLHhtrehBRQbKa3VDzq1ZNsS9wLDJhjxaBpJYsgsycSghFhfKTNcmLZpgzR79nBxcsQkv4K1SEhno5FBZ4Z2R2",
  "key29": "ReVG6wVNjVeqXGGwWLgVsoxbHRaR9zwPkowsFjnu2dqm46j5MywhzBSp4QLahpBXgPdqLidZXFQeLBKxKwNkFca",
  "key30": "53ifHCMF1T2TCPKFQpbxRt1cGy6un5gSgnHmtnrGXhsnQ56E1xrTk2x5zQTRKJGcdc5fQGbgJyx4ZrrjU8x6zHau",
  "key31": "3TT8Muzzc4DGo9dsXWBBFQbBjFGJqR79Q51iWdiRT8JiLszXDrPMLmZmGh2kZvKUUQcfnTHsfZyMvvLCTE2s9WkW",
  "key32": "2Wxjq8yu8o32KftRtUJbEpgbwHUVSQTWfn779VEUp9xj2yaLjqMWRxFgQjW7tMU1MHYNHnyeRPWMW1BRGhnVoupy",
  "key33": "3vtPJgg4rns5kjqKwfT5jEUBWjCQPWCFtvJiYW9uHq9Te1FTo9tBMPExjs3BfFDqugYw4v9Mp3mtFtRuJbKrW6yM"
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

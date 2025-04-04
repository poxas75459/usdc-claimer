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
    "2NXxxgkcbH6b635VMSyCCLTbeNvXLM33vcNPGSZoFyP8C7Gcdd8wRLgVt2Lf3oNTW3uhdH6TpigSDwBuQbrC86zh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DKxoanTwsSqTHL73bfUKmc6nHgFrCDDMfa8D9mMNef7aMX2GBn2yTvwG8smHg1ttdeS7bp7RAgH1djoSpkA3qkV",
  "key1": "2wM58kVWSdYKf5xCCapXg8Fab7VPpbdy7t22MYtJ2ty9TouXcyNskejs9GgtGttSfrdmJV4j3G3NTqBPsPL7zJFA",
  "key2": "36YycxTKjMVRZwLCF1hqh9vhJrx5ewG95XvHUkAD9QxfuXHiwm9x147B18LvpLyeZvQexuYygrUuZ5BwfHYpxD3m",
  "key3": "24vt7TueME2vj8g8MeVaqwivzYyowq32NpR1wWKmtHgfLLxJjsfYKnxVSEQiDNocgjtU6HaF3NHCkLQ9iLEpfr2m",
  "key4": "4bTQSUdXFsKRd4LjztGDLywf5LyGGs6DdZburw4ZcSBWVsoryCRq5kgZWEx7ZVPvCVvMXoTdVehgjyHXt2Mx5exJ",
  "key5": "QFxgMqhqWgdiHfPz8Br7dN6SHY5DYQfhp7XnHR9JaMa4fNNBx84eGn74TaiqWaU6W2iCsbYhAbLQpbF2UHyD4op",
  "key6": "2KDBRWTKSfcSuKzqqLJu63FZT49R5XRpjaNtrUamRjR2bTnSQif9snDCmSYVx9wvJR1NPa3Zkkjmw4Sfzb5yLWh",
  "key7": "48NSfHHC1v1vYKA18afYV5Szb2TZoh8HsscWG1i3Dsex3Z4oYw6CZiuHoRCaDyFkYZeEUX1VnXLwTyGejbdSnEvC",
  "key8": "5nh92gEnEr1dVGeGmiJvwJoybwKQdxAEkgUj1hTaBByWGmtJuuLwyoTRs2rVo8sdVHjq6N9WgUTVZuNRMQrresKB",
  "key9": "328qL4vgiKSL5LW5f9vedbTDwE6YBvXkusCa3aJi36tQ9KDzj95c2N6n7VFvnSPvQoaJW6bSt6bcGtNeqSY23cPJ",
  "key10": "2FokYxn4mQV4d15ydPnzYM56WYfuW6uwfWrM4QK96hYoFiDx4pCqCVWag4uwppCvJnwQnTdayjykeNRvZHxL7zoP",
  "key11": "5ewVyFuZBJF6L4bnrHB3di8GdRiKBwhku9NurXpP5JgQCfD3tJzTNtCUXgRBDLuFKZdUx1nvAdzVrHxyAmvtscRy",
  "key12": "2tLz5h8Apx9obh4FXsHE94ESmXUHwsc1tuAva18CMo3wRR3XzEP81BHGGXwS4mceDJ9oBTaqXPbVvLKJs2ETWYkM",
  "key13": "3zkViWg3y9UwSrRrCRsdvasQCKGUPeaaAiWgT8PwDqspZrru7seuqruNJnnJr3bZm7XZakaqjvijnJVJbzGyCHbb",
  "key14": "3m29ft1kKDdjcCerrHPAYAEGjE3wMdiAF5jsnhL5CJugNNau1p7f2nGnzmczZjohQDXsB6r5yd9EqrdnxLJB6BXD",
  "key15": "5DrQBmd6YRcUGphM7SXvzg9czwALtD4S9ZXFXuGDvEgCbYDAuKVa9KbLyrVNEjsFHbLVKVGYdxCw1bBaNnwmFfy1",
  "key16": "abHceu6BXjFPriHnjAknS52WS1ahcJLLfr9U6sN2tuw55PKLLBGvLJ6y3U5iEXdsEpRZusURvrJzgUwM8RqqiFJ",
  "key17": "4EGHTVqCBACpUaekLu4fE2LqUYsTYTuEXE2e6hEmctq3NVGP2bLeDHeZ7UyDGLL1mJ9BEDXfWcFrp2otZZevyrYy",
  "key18": "2GfMVttHpH9dWSVe5mTNt5HXkJkgDh8K1bs1TspmZW5soAEqfJxJowQsZLsV95cXPrkZenyaqHq5jmPVXRKR7dXo",
  "key19": "AAp9ZmXMF7YzwZ4PNr8ebnRDimeUy14F7vhFqM1KihFnH8EN3EUof9PpCL1qhVmk6VtoavigPom7d4yjrT5ZdAE",
  "key20": "555Lzrxj5H6tDhxXJ7jrpA4mkjW5qcrqbpZday6recPo8dpL5UioMM3XwCS2fTaS21Lekh3gZ6t6V7o7KQASUfJn",
  "key21": "5y7PnxqSkadwSaBVDvZ1F2vT2L2MQ4pSoNhLGY7ny6tZxhMYRYG2ACbJgssbWD2DfxXYoqJDSSJ9F1kTmq3rrpk5",
  "key22": "5UiwNQ1jBYXgUS7iGrPusSYmMYpr6mYJh92VHTZnJRdm58SytN9zSL4uN1HTZm9dZiR8Mow8UjyZ7TBawrXGyNhB",
  "key23": "2rtA87i7z9GzoVtBKnKwab4qH9SsrxriWMc1bxJcyP3KwcfqKo4nMDSHJaC5Esgn3Zstw92bVBn1wiNwwiwoPfGJ",
  "key24": "4gAvc1q6ufz5autYwoC95xvvjYQm3vrwTPKQefLp6mDKRucMcNbFvwLrR5dWMuTjGitUPGvRynSig9Zt2qrP6SFQ",
  "key25": "4j4jmPLYUdCywVAvAKAn7ABFTn2PpZWj1WwVFVn48GacraU7MhpQvdFpRyuhiZjdKwddrxswYgfFFBoz562Spbo8",
  "key26": "3sRPoNNFokcJ2fJcLW2qsWshbv4D2xB9rXc1okqoNjmLxn9KmoZU19TH2TvkzM71U8s4f8JBNRKSYrdcsuKpfs8Z",
  "key27": "Wj46GZrxoT1c3bp8cDcCkzv6y1gqn7EGG8h8Cg6imhmAdiRh4aEU9cNVzUfMXRqSaRZ9B8GKbBmSABvs7iESMHj",
  "key28": "2rqVkrVdAC7xaq3mNr5iWELN326ws4R4QdTrhCkTS741uowAkPdgsFeseR7vEdXZt8FXSQskXyKbujcs6A5kX6jc",
  "key29": "3kUy9sv54bkM6GG5K7BZpmzoaFdZsEcTakaqwWfKRLopjpAhBJnXzFhXcWwbsdXM3FRSpqBCyxvKAw3xLVYAEBR",
  "key30": "2kZQwmf29oXHYLgtJygGwFEMktBYoarhXVHwbeh6sdopp7HJBcsmoabRMweNhkHaUv5Vrk8crgNrpeQoJ18rZecm",
  "key31": "2PverHtCc5DmZpSgyacAo2ouRGwKpPspiL9Uo93HS7LXJqoE2sfwzJ4Tc15xZfzkySG5Xtijh3MCPxJdSHUPVNXu",
  "key32": "3BmKSWm8bWB6vyGrihqJKsghQmkXBXNmA4UMznqvoi4y6CvBikWSnXgBR5gTotohLRpTy5PaW9X3d66vc3rrgWCg",
  "key33": "3oevyrxZQEEAMMsMU5yTK4qWBrYsnFTRQoEtgVccfqJpojy5ZaWC24EN7RzFnVra3FrEBiUVygC7ZRa58iZvj1gJ",
  "key34": "5AEqPbjeo9VvcWYgNJvn4tH9vgVf5i7onuV89E1J91m5VZW4NyM8dp8wdGeXJSmnNXi6vMWWYYV7bXnHFADPeXrn",
  "key35": "e9ygQ6bA6ozaFAd5FKxniKdQSBcZAfiqrqxuEzt4G8EKH1VN2SrGcRd4mS15HLGMyCV7nB4Vd618LdJUMYenGB1",
  "key36": "3rRkgWft927Aa6pDFcWgEYCMSChkCXhTDKY76HmFwHpfzPXr4Y2spMSpmYodnUCszjQTbsTYu393tue83EGmpsK",
  "key37": "3gS4yywXDBJYpUkV4n4NdLs4TvxzWwR8Fpwt43CW526dqusRuTD1eieSmFeBUNMDRWEhzRSgZB3j74S77Vpq9Yv3",
  "key38": "2T42dgpfymKsLTjPoD6fMbFcV5fYweSdFoih6e654dqzuFqb9uZWF2VtEvAqTzrMRSv2nb9FY21A6fgwkG1uqugb",
  "key39": "5RYkie55F4h5kyvLtSk7zXhiwYCiYerntU7DKFx4eMDst3KGVro4i2yE5DG5kFrW7KUwceB3BFvMd5bCkXD9ZpMz",
  "key40": "2D1dWLqc7mz3EJzc3YN8qcTACJ3yzy14oXETSfARE1Lo7KLJqBEcikVikttK4subY5SKo9edNEfhcuyZFaKQHRvn",
  "key41": "5nLd4c59ZCSL4tBU6XYMpaJFXHU4T2Nhjm558iW6KckPfJNk1xByhMjxii4V91Q2gxCsma46T7sHNjKx7rAT3ESU",
  "key42": "2uUAwSDvK3Lmvwgh1i6XUihXJtudhEEKNW3ibqv8mdmecayeZgfRgeJtH1TMkQp8kRv8sGRnSZHXqCtxWGVeLyho"
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

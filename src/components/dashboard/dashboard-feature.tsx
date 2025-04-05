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
    "2CNaZasPn3aqGHLGfd4N9SJ3ZGRvL9HYLZXS5nkmvCYxdUbCWVUDG91foEjwpruQGmYRuW5w3C3QYMi63Yjtasc4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3A3fWdT4J4QencwJmUwpcRkg2MR6ePkNshSyMZmbfYU8eQdk9YGmrsE2WaAfSudMW12Xx4rzUGhsWxbrj277JHhR",
  "key1": "w7zozfPDdEtrNmyfxxu3KYpGm6AWrsUhrX4HMz5JtK8BvFXWWanGZd1UNQvg3xrXBfPFWj1mp7ueajLdkm434bS",
  "key2": "4pBEzwKvbGYU6BpPhLEUn4cPcmiLaaunRwPXo9Yu2qVGbzKei8dnaP3a9LimXDknjP62BU7t987WMErx1z3votMM",
  "key3": "5qJQJHWd6jse8fBsbe7EtJhSbRLJDW3rXbfBMnhQQ8Ta4mpeydQsFpjPoypMCTiqfmYDkgFwrUREuGKnWALG6XzF",
  "key4": "3rAh4RLKfnsmANPbymHQ8CHcCoSqpFWm9ALmvzpdCjcSpfrvU3ncg1x3wivQCofvxHifTTWCT4WsJ5Tog8yTeJzB",
  "key5": "2vXuYhnkq6k6Sp9K41f41dDYii4TMnMB8RunhCmzG9btNvRHJyrzqGNioZTvW26VG4K4cDo2mwsZD3F1qUbhj1W",
  "key6": "3YL4Y9xKky4D8aQmxbdTKGYY5aAHonxoMYVYyA1pbGj8vu3aPFoUZzKEJqYK1Knup6RNCDappzkWEAtfhr6m5tMK",
  "key7": "3V8fRyoQ7aMkSirkw2pt16LsxymdaYyz8Qy7FnHKXABSdr8Nomk2ht2fVjncZ9TVZdFpRqnMurKUqW74ZHmTnPEM",
  "key8": "4GTZha2TMAyQM3ftLam9H9yCdr8SirZoFy33YiZyxG8P6ubQuMHX7YuavhuUoRFFpC9jxZLeTjxENAt2ijFfYFvC",
  "key9": "3PCtYnepwBkutGdibLLh9GVRPyZ5DCZCjEHcsukxRmA5RxDiY7huH8b4QaHNS2npRoAMwKUnsoA5Y12Vw4badVN1",
  "key10": "3hxUVwWCncpZVAjP88Gn6McVWvHek9qCvbfQJ5jbcDTasGTg35SGzhLGiXSNM4tNDcAupEsV1GGic2b4C561v12S",
  "key11": "59v4rLpMBfLexokfdwLcDHEXevnUw5gkDrbGXPSY2Pf86eFr4JF8S4BAje6x96JR8j2CwragdtdPLyqXoX514JE7",
  "key12": "2stUVLrUaqf9NyoHiKzAADigbbs3fdsGeoshCeeVzKnQa4pmU5MTrPT8ZAr3AoXuzQp9QFMZSYjnfr8baUeRWJ7w",
  "key13": "4JFFiCkpGmx532fnymKuNGst8o58fWdqscDD616CJ7GPPvtnEdiZZmUQEgP1qpC9n7jKvP8F3nkHkT2MgqHKs7Bf",
  "key14": "2U8mAd2J1voviwbUpHH3bY15LHfNs5b4qSNrDjjGP3fmFqqczMWeoQukgrtej1TGSbU5n42cWZc2TcjFwqcuwyf",
  "key15": "3sFzgJKtgUkiYzustNk382HpyejQPFcHuEZACHZC1Uv4ikt4UXyexK8q32KGTQQ7FcqLN5r1p5ySw97tZisg4Q76",
  "key16": "43KSs1xY1WrDGpNiVFb6aegKr49teNW9K8bKATbhdCn9wYjgacqWPKxYSNVyHvLF2cnq9q72dfD8Hw5LvLoUCfMj",
  "key17": "3w82KAvn9RN6PpdgYSL5zg5P4iXaAeCmC5UZ5cbZ7vtYLoNHcz1GrihwN1CKCycEBj8fgsRXxTpsUXvDQ1GC8ud6",
  "key18": "4o3e4TLiS2VREi6Faot6o9oqfvFwubFG3VkDp9tE6GSr9EX4Ufi8BuNeXJSAihQ1uPbX1YDrvacNKRWjNY62cFfr",
  "key19": "58jYFuXGYfgJ1jj3EHbr7ocpP3Bm3VKDq6Nc5jEM2ZjRtAfBqfAmME1jYRwTnR3gWkRiCTC95HpsJU83xg5SebEq",
  "key20": "5UqQVeYxSVp5nbCp6ZcLWdwUy6J3XHE2rQpFa9LJ8bz21UjoaYvU9TMJURb2tXkEG8SAcg7zfuVoZyDrimbeYixR",
  "key21": "5VtxejphKNS7mxvP7h16F4NgzMKy9Kkwp23RLiJCcdKZCtCxsZBhXid27suhaAqF4SZwS2m7oGfyoh71jrfTMgvt",
  "key22": "23EpX7b1J47a7TvPTHMFchXiPNnd7F683xziSqMA9bdHcngrXHeRMzo2Aexb4dan1qGTfogLiaJS9Vy2VyHefAXh",
  "key23": "2EmrLdkRo2B5zR25tVR1xaKezbMNfvD6v77oC4DvAjz9jwsoYnsUvZsJ2yKkiouKF38sowKHe4kxhtLunVKFT5iz",
  "key24": "5YJHwtvNiF5X24DtbYv7tKNDcL2LfxqvGAFR3bUGpwvfCAaV5m466fbZMAe1hxgUrmzb7vVXWT1wyiprhJSBo18F",
  "key25": "4evW6sgF7DMAPZgsTqwPWxyBMVYX7EPms6Dx4Q8e3MzdSnXnpMD7xtBpUYiwim8aDhhtwjTLi1QGyLsBAsamYSK6",
  "key26": "5s3YPBwH1BHHQEetzkrE6NMhrWDQ6Hu169cyzH2cNKCtVegMeFTsvtGBqf5AJUXAu4zsqVeEDsvkrSTWuZW9bcC",
  "key27": "n9a9LDwyZzQUc6fCHWuGNetGCraXfddQ2wqn3yyzWpszsj2nMTTANNZbEbcXRocWMt2A42AX3TRys87apypDXM1",
  "key28": "5pUDBCMaPVQTuteUu71PDVqyucR5VAtVoQahWPdEd1oGAEZze3bKhvXZjThSbjoG3ZTA1NKLgP4bhb1jQth2L4ip",
  "key29": "4WN8dsjiwTuHmrrEt1ZCXLMFrgNFUpjaGDJWZKmYgEKM8Lbnq2o7AH47Rzvtf9t3URSUcmNtydtkC4nTbddXaiLK",
  "key30": "2sqefDpEiPp6fmnKX4M7YAhE7PoFFbpe3eu4D9BgurHSRcR3f9Mcf5HTspmsSg9PUd5QAesJsBXZXT22bURvroC1",
  "key31": "3sHnGqy4mzq6zppuj5Gqs2ED9JXSYVzQ5k1btq4M74FGk1V5BsQMH4jBvmmpcqFGteudibkm49nBse4VYxZSSqNs",
  "key32": "2PYqLXtEnBcTWfDrcrFyHPP2P9uucs2A5Bz2LzS1kJ2MumgvJKeVuKqY2enGUbiGswjg4WZ78rn9krbViiGeWE2",
  "key33": "zSt2HEaXH7zz8SMZNfEPFfRGXkp7ApgRd3weu7Lz5vm1FL7Z6HNP9fBW7XwrVrkUHZz89tixcdsuPnesMPMa2SJ"
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

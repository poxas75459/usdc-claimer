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
    "3WwYWSKBkRRxbpZYAbpFdfAeNsjrEtwwMQg6497DdCS9uvqumzyJeKub4vsF1zva2sZMJW3DgzCjqjTyHiXjtXST"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KLx3nE68q5x4VHiCtn43vu81DtctFRWxGQ8djbycRULnVmMoGYktJALHced2XKJprWTAQ7gqNt2a4XnVNuBCta6",
  "key1": "2F6RzL43eaf1BsLTkW7GaJuNWXycvfp74gJDmQTMKn6QVKK17J2ZmURaJJFd2cZ7DiZEZnax9ZugCc9FShK8LPhP",
  "key2": "mKcKCoUHxXK259ZD6VTYJYovAmDzh2JuWSKRrwwJvXAeaPeaGYBFG1vHTS9iiWKBHLZTkMUjqMGpsGhYoEPZbkE",
  "key3": "XcDcr14QQK5WXGissDgTSreLZxKR53uKTwFKnGDLF65qF6cMSbm6zDWsJE5Si3KcRavu2bLRyEecqnuw2r4xTbZ",
  "key4": "5WnFE4iwEccaPLNfDYxERJynTyrMc63HLDX2CU6jNhbBZcQ2ZY1EQpY7U4ViWBbi7kSHoo4byuKzHPvdBoNzTBiU",
  "key5": "5dc75NNbY7prhr4R2ynftW2Q5HYRpg51t6c8crqnfD5MWjkdQLAHps1uHvkddmmTG7AagUEa2d9rZbf9ZXQV5XKa",
  "key6": "24Lv3Yg3fPRxDrQFY6b5Z8ASDv8DueBECNboK1WzfuF8xR2VicYaZppWePu9esJ7AQyHNZ7r4bGYbN3CiiXjJSXY",
  "key7": "2ZyuvUjomVMXxLNnUh7NRsy3hfk3eM5BjnfEGf8q1yv1vKGjWpKicVMP3mFYgvEPEiA6N953C6grJwg6dWU9NFGY",
  "key8": "3t1c5CTRUrRotVLDAyoGBcxJJQGNXUjg6F11uNfFiZViFyDB72CUAwpfi4MzvJTms37RmVPBiby2uNpm6hSHUHop",
  "key9": "p3YQtKjcYggkWTeD7kLGsd9gqoitzuSvbuhU7tGe7af244B4XZb6c5BhNmCD3cZopKAnXEmtdUvG3XT6beJyuvW",
  "key10": "sDkaQs2AC5rUwr6Hj6eY1ApyAtiYnMG8KdyaxpygC7b6n3uLBRBC3jBqBDCr4ntTXN4ayB8iS4SDKMGGrpK5ceL",
  "key11": "2NPpngoMKoNh2SuwNYJeFMzRffupEX2BANFVdSQ96hY62uTCAuzWzQet3NMfAmfdyzi5LUCdzPzvPhZ52uaCefgE",
  "key12": "5XoXaHg4nMRXsrPjq7YcQuRtvSqfVtvU1x4RxScskvTPbYG9KhgYkpHLuPkFt9tYzBp4hBLJX28QeC6kDy1AtUQQ",
  "key13": "5arFKNwdVYh9ZDJ1621T69yBdgfdtzGwZHJkGXQKsbFifz7Ayz7mD1H3n4WQimwLdih4jNFKRhuH3GZqWoRHJPta",
  "key14": "2QmoTo86x5mNKRg9F75T1LArJYYPhqiQj1uvfmYRt6iQs4vubbF92cjsQkCQWWBJcosohgDfvnagDGb4i3gneswc",
  "key15": "5AMivTFnw18378ioqHKVK7dTFNqQ81hT3nNFocc8ESezyStu5Jg6x4KH7cUEUb9NhQZGGgg86YfkZGc5tJckAALq",
  "key16": "RN51MizzoeJHaRWAQwECwAbYh8cRTC8oQ2ck3jCqmb9xwf2h9Sj9BeG6Nq66Fj2aUreZCs52sGBXDAeKRw4YZ9C",
  "key17": "2cesfFBzovSXTgDosM2yFZEGCvKLULgKcVoJLBgaEdwdXwj5paQ4bDjhXshZ3VEvZNuEuu5Z3rhAyDwiTGRYh9oQ",
  "key18": "2XntiGne8LZbnK8oAJQuoENJo1gdNaKG1EA1RAFXKeUUP7doLVccwxp3m1UzvLnpTYUir5ofQmViv24aXbFCeUfk",
  "key19": "5ho9LuizN4sx7pmG869iP7wpFJz2HurQjpjbabcLiYwtTi4XwTPuB1HNSVWB5dNKNF5UCrjcYA9PxcG9bEG1XLV4",
  "key20": "37arqQCdLuYJdff2macjAGMgpaFHu2HBrhzUdjXXbCeXJAzgN5vrBdMEMVWpFzzQjHbp899yqG7mq7LCWHHNjwra",
  "key21": "5SaJSs9jD5ZNCKS7Q8djyf96Eo8emLrkm3buLLvWf6YMhVuGfqCfGHNZsMiBqg4XSepzwFfZSFELU5sFnTcn4Uet",
  "key22": "5FHLsTbz5J2TNbrn8qJGxAez3YANPVmM32DP4JJvg77AjEbAMNzBr52oWfgMMsfBHHpG9iT9XwiWn1nQptkJ1w1W",
  "key23": "49i5LStTkgCVxWxporCa4bNcxzKtgNjgDRFtMYn8scdUpSpXaHFDKWUgt8ue5LyUDX8fPA1H8YsZDSHHmK1G2CA1",
  "key24": "2TRuFA8w41evropUxmY7G4t2BdiBiHJ7QsgGzYYW7FbinKEi5MTLicCkjETXrTHVcvvNDRGL13gGNEbrf3hiptRg"
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

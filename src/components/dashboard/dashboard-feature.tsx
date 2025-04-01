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
    "5xxHix33XB7cwyFQdiZ39ay2Vrvab1zv1GoyPYFQ7iFQ79uAmQc51WwXCsgrKNQfbpTTgvSESeheaRtfxJVw6fFv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o5Vi3UhSGDoRkLnqNhHvz2NaasJ17jGfGaxphv7K33Rxo2FMEcPScTRJ2DGJpH9jh4HGASR1pkVZnzyZf89jN1o",
  "key1": "3TPmjNPYf6gSKGNZPL6Hqnoxuy41oFcSg5XAKS3oJcaau2GuthjmiWMQuTcULWKMCMQLGqDKXPSiK5zW6u1Li9Uw",
  "key2": "7VALGM3sqSoXeoGBRAoxLHirMNikgRtCKkxiWXtmHPwsP45w8RyrTc3rf2zmt3mdoLcYv8undVvm2sv74xQmoxq",
  "key3": "5PjsWMVRycKQw6gpQVcFNsQvpyUL2A7LZPvPtk1i72QLBM3JZUyi1tFizJn8zHhZKXx3hJK4Yc6vEKHU848i9FMC",
  "key4": "3Nc3rtDaaSXrKUvFbfCM4dGzFSaUHHwi9NMVeoRp1gP1WHGVSdaTNk2fhy46Fd4aZE5kbx4g2pmGk7BJqmN3eJHg",
  "key5": "GNy66irKH46yGxeuTnHjyUYmbJaCU4V3SxhsppxKYvMoTPqCFYpSCPhiT1EERmmwCx9a48sXHNnqnSRE3yaw95K",
  "key6": "31oGv7FGsRt6ZFTEbpWdutLvRsGpZ57Ev5hKDAhTfeg2sRGkDg6c8Tw1RsUKZzW42jBpc6VFcBXKsPNa3QKfCz3u",
  "key7": "g2yaKgMoW59g27tkKMVZj5ZN6eTuj7qvbBLyRhnPCtmN62MhAzSSra9dqf7UbXaXqufZffgieNd51q2r18FroKU",
  "key8": "RZ3ckqpUb8e7CNn4gbdMbGKN9qGHK2UehMZuRN1zkZ5gX5EqEqXXczM2iWYYvK3uqXFRthvMhwQeb5vvfL2pmqk",
  "key9": "4c8k6kQud2huEXLRr197Dz18vhK2bs8JU8xh5ZgGK7HPmtX1P38VJaL4f8b5HRohSb7zRGbjWT4nvpmX794nmMGf",
  "key10": "3GBUicdGpZAtvBoAoXtV2aKvCMnxbuY35CiGjL47q4JdzEucDW92LNmGYg3Akw2BcAuZ4kQjGXNNJzhj1rxkJqMk",
  "key11": "5inQfFHcfD6ctYEJZNofrGCNKz2XQ5Gpdi1YMkPFWVjQDxYhEArJkmaK3mHmeG3mmEY4VpTYFhggpwpsLjeAj3Tb",
  "key12": "4tHgxG2uWqjjcVPsANFZPyD162tayt98SwaZ6KruxsQFEUqdwqdAi8m2jAh4hFiaJDN36TCHsiTjPY3VktQy5qaL",
  "key13": "5ZS1PRUJ38ew9Ja39fUWrY3G2e4fFSmExGaqyvDvD2sLpVTKCKSM5Lx1MzGdVwMGgKwFnKM6hFEj8Dbqbqr9QuLU",
  "key14": "3GG2Ckdic8U5Qni6oNwnM6RaCFnUjqE5frVmzb67DEmcRGbD9otRhQ4cRMg2Q1gQmirCDWuMqQzvZurVUsbeCcvh",
  "key15": "5gSWejN6fCjxybLU8H5c67i7MWQidjfJJUro2L5evVkureGYgkSVQhnXJmcjcu7gtg3CWMUhP5h1RUYpj2UiWDzy",
  "key16": "65Wz9a76oYDRUEJxrvCnXPTTufk1dekXyzD9JtxZb8ebVAYhPhR6VJRpjzxqquMmnGxc8wx9e5noDh8Gg2abo9C7",
  "key17": "31xDwj1uVfkgkWNCRbk79G72DsFvRT73eR8Tv6eiPh2ivKVkpJ2eQJsy2YSmix3UHw7fHHJih2ZNDSoh4LP1Xk2G",
  "key18": "25VeijMWnXWvCejSBeccVAmYQrFJvGpe6Dn9ty63YRymscqZcohQg7cMCMWhipwvGwDsqEBsY2NWFSQE33MG5dZy",
  "key19": "4CLpfCnNMX3y8DEmWtS9ah8pfSfsDNQd6Sa8YaLQd51q64hHtY4Ks7TPoF28TUkGWLHLzYxhv9UR2q2mSNZy2DYn",
  "key20": "4DtJD5qYjhFgVMgNop3wHuuHLc8Vkrs3BrGcwZUxFbFifTfunMkAV8hBzgDv7SFqM9GD6CQVzWEiEMiXFMJUzrhW",
  "key21": "2BSnGq2LMFy2pR6skEx9dhm9MWXAbJpCLCT811uL9dAf1YDcA5g7P7sKYsHSk5KwrToteqKEKPkv9441eJ9Bj6dK",
  "key22": "38LGbzmK5KLbqHAbrPwYBCRqjhmaCun4tzitzdY7aWKJmV72JHwWW3v4yr5t1368e64ttj3d3jyAk2tSqs3PK7os",
  "key23": "3tbcfXibRBkrbEJtjgARFbfXcb2pEJvLq1fCBzFnyn8NPS3p1CuJ861j9hg5xP1PWqGMTAvbynk32WuhpCHJwRvv",
  "key24": "49WKuneUS5E9C1cYx2uH2irGwJXsAQV4Hr3uAQoGvoe178eV7btZzrXBY1uGAiHBYmWd9117bVP7zE6S9yXmCCbV",
  "key25": "5miRzRanKo6faxeiv6ooQTjyC2FUURwj2pCC2LkZztY51VrjYQmiM8AN2ewNVZKnVVKfFwB4xxXQx6k5FNtHBa69",
  "key26": "5ebV1w4rVvcBVd6KmvQSahNAegQJMQuxVUt9iVwpXoJJjLUivrCXcvAKSeTniGsejiuzfn97hYyHP81RErbAB5z8"
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

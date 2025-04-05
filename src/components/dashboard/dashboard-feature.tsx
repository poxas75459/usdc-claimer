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
    "4YNRYzhSGAdCTLMEmY1795FLR3YjELdTkVA3i2crVBfaLnVsfzWxQ2mVdqMcCkaPHupGgBNFEYujHfc3PFsM78C2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GQ2jkyxmcYKR9YwWcD1BC8xpP9FM8UU43UwsMF41T336hDTtdaDx7vB7hdNjvRati3KXH6H1usXf2xagJob56hM",
  "key1": "5tnz2fCSU4bvHj7CDpNidcQS8Ug4Uh3sW753szKUfTJb7ZR3bATUsEULih9qNEx5gL2y5LgVDsYQ8jskR36Ae94G",
  "key2": "4HyLZo8NUoUQrBxW3QWMHMVBoh55nN2iowhURSKXUaWDLzrT1NNkZMbm6H9peB7qvws4vvusH96iiJLWg7jNDDCZ",
  "key3": "3RnQL1ZipDspgZdkRqc5MkfpkgJBzoHcsiHHaQDwah7mkuNgKrgbZ3W3KerjCUGitwT9H8cgq4KhJJemaKmGTPxe",
  "key4": "W4N8QgmgcWr2Zqmo8aQh5sBKx87eti9KA9GKTs85YGocQ3uw3jLk9hUWwKTsVcruYBLRpdiFCefGqC4xb4Vh2th",
  "key5": "6zdT1sy1WSJCbYeAjP54d5pNDFt7exLGFuzi8ZduJZb4zBDs1mEy2cokfVdtonk9g9aRhALADZoJkfGm4B7xRq5",
  "key6": "2q51XRyA1f4Xq2iDopWffnm3q9cub4E9xpCZrd8tzYuY1Btea86cyHYAKCPat8Cjj3W7ayuEF2EBpYNEqkrEsGuS",
  "key7": "3oS6HiPEcNK4NfqKuts78m4T98Peh4bcHNtzZNgDXtVkG15hvxGwvm651ZC8yd1fnVpM1zszzVVFojLpHgY2sfsH",
  "key8": "2nkvCZhTHTKSgJkYxTKuLU69HUxUwzpgRs7pm2dhrT69zt3eLyeR8uCxUC9ZdirdcktVrgY6qTJdbz4NBbnTXetq",
  "key9": "4KqF36VoynfMGM12KyTZgDcfwa6UXFzYryWYu34neZUc4WteCdGezPdVGjfpiXRzWTRntVjy9iJ3QDguFRwjUGBD",
  "key10": "CY7x8vm4f5r8H18x9868t7HufJMjt6uv68Q2mAXFwYcQB5ubz5rqirNdpvpe57cdLVs3F3FbwwVZ3ZCC5oqCCH1",
  "key11": "5A39RxM5biLZ1UPJozmHMDw6uoLdhXYxy4bC2oT29fVZauKh71pyBjrp73W3AK12rcTHRH9DrEXCxHQDFVjfj7T8",
  "key12": "28EjatCZUmwJedYz2bEk7xcpq93Bjmdz5x7CwGDR8Xqhj66N6xYo36NGMQTWhRv8WkNaYyJsD5XC6Bex9KhC8mDK",
  "key13": "3gwNFKcZJiBiuhVXSEV97kw6bbPgzCLf8Tsunn7aLwC8wkJ6ktMdfZVg7PM6kk3HMNfhs6iztAGXj8n9juaNvB7p",
  "key14": "3Y7YcSpEh9ZocSpuWh1eHVeyDJzwX9wj9hHYWCJwrbdHY4vESzjMhtvhEkvHwQy5Wcb8uf2cjPxRhjbkbe8G5MWz",
  "key15": "5MbcWj4Qk8RfsPbnW9WgSz5u4D6kwXibdsNebaQYH4cPeAUWJQwLbNQaR6Cs2HuPDhWNa6rRXBGLWT4CZWhLR4YS",
  "key16": "5ybGY4cmm5sK3un1XDBuTJKyShaRCoxf96AuGqCHA4UzBZU6SkNPW8AEPCt9osNKcPmPiGtr7f8K4dDuMq22Rg2k",
  "key17": "dN9EW5fVVn7J7PGhcANSRBU2eWqU6TakbdXNiffq5VzFt2v2RwcmgnzGeYZ2Sh4fKrvsdMuN1SvP6ghcuvYmvdU",
  "key18": "27EjPr5c1kyFqUUmDqgt8MSCHSfJJiPjBc28hxKEvxuqRY4FeuCzaRgaXdvMFo2sALuWg4JPcu11uNMUqWiiUXsY",
  "key19": "5LU4yjaf9psjM2s4f9iAY8gDG4337rxwHWGcAJAEJXtk3jNBKytcTSBpc4Ya77EWPQqTg16GsBaY1yH7XCWei9WX",
  "key20": "5YHpKWYvAa5fzL6hiD5qXsRK3V1de2Hr3BiaJbPKPoerFKqKZzYaWVLC4kGb8Zev7YPT3TQ86KSqW2RymUi4oniF",
  "key21": "4BZhgRxfMnj6gUcDNWUNCYSvoHYXCoWo2Zs3TX4pytbaiJfPdUzNvAKkzqf6WtqHUNuPB9ykSB3LrKkkm71ujHny",
  "key22": "YpQ4SqAQ6qHqLS1J2uhfze2oowrvP98nB51DfuHcdd2j2cBgxCtsDSnpugoBnQtkyUKUXLptw1P3gDkiM5XH7nH",
  "key23": "5SLbFk81Ub7dftTzeBHSgaHnT7Ppynm4xNTzrEns9nBM24xYSoM1F51HBQEuY6nvbnRrbY2jAXydxHajRErJond4",
  "key24": "5SQ4yLN9XhLFzZvv3gkhmkxRG9UrLqcpukVhXXAiT62vuyZMEUoS5shbPASxCcCLLBHFwMsNkWAHTtCq2wCEJ1U1",
  "key25": "5nPxwbjK3fgiZnH4g4hB3feNeK5qYMB8dPe5zbT5HGMPc9eyBUPHtpw6pF3wgcss2NrUbjmatgF5E3tyniWvrjJn",
  "key26": "ftt942UV9ZgosYTEbHJWbu9ogyA541dVjqv3998dU2yo6kgWEqMz9fAfrkkhckdGqZfuBj1kusn8JGpFTpyCuUC"
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

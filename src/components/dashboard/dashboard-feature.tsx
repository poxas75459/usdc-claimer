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
    "SkpPQaBqXHeA8d7yL1KKLAYSSxMtoJGwnkmt6Zkrd4faRwh8UXLsSye9uew9qLA6eDhjarfc6ETFYnH8DPuzTfK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DpJgGKkvLrNKhHJgxQcfDQZ3yaMqaCHknXz1dHATzBPTYdL1qNJA71HHhnirivQgaF9c3mQDWRyyeUUuUtKbpop",
  "key1": "3vFF68nLZn39SZkrDgoBFGxRTECCeEnm5gbFrhQc4crYuD8jDQmsvz5Ca5ezDcFjQbahxTfgFoCa2xR9esjD9pG9",
  "key2": "5rqVQYC9Dji3441pcyZNdrBjj13p43j7RDDkrYvKu2XxBWtGUScuWWoj27mboAEFoH5aVbzYAk3NgJ8wECyXKxM3",
  "key3": "4ycoAKmERqWxGViHXxspTnm4VzKCBxV2CbKaBRftcqhnQPqJ39QLYpGBmou66U9ZcBmRkaCx9eHbcRUtf6iN5PKd",
  "key4": "3vxTMkBTXoTmbo74JoLsRjmKvDmMseQ5ufDnqdsp79W6pDW2bactA4S77yYrYKMsnArjoeiaBjhkCayx4FawdtEy",
  "key5": "5HRDzGiAHuveYe4gsiYsoJy1LTp4ryiCh7Fb9uaAmn122VaBKGtaLRAyn1BazdpQpwSE7cezKidkTKcebwGbFr9V",
  "key6": "4pYndTxRPptHrFJHzG1yd1X7B2dGtHxCkrvfLzsJKkZ59DVcuX7axiFTFmAsmdhsXDEUbXiZEgtGYcVGf5uP87Vv",
  "key7": "65u6GyqZBEjBfbCBL4Mj1U1X3ayPtMQBuKbtTeGwLGk9gNT5oz6HiEDxCStgrevsB9JASa3KhuyWpyAV5gTDJmBn",
  "key8": "3ZNnMY7P97nQf2KzRFvyRyFSdL1chjhA9HB44QLFg21Va3cgKjMSS9H4QCzTta4nS6M8HNCptttkHrw7Cxj8nSx9",
  "key9": "CTnwgULix9WaGSMcpRCJ8FRDB4xJAxWtD17BMZU5HAkqAhStbvsD9KKuaG6QHftEVnwKfmR8BHdScJHgEp2dkRT",
  "key10": "sTkG7Qnp888rhxD7yUpj9CNy5Qw5fCjMjJkGSiHCqmFnD6T2xbSpDAnzVWEsE6Mb7UJQ2vABiz7q6MjZWufhQmt",
  "key11": "4bmX3RdYGPftZCezUwVmisrTYeENa7NqpeCdsZ1sPuDuokMhM3jEDWWzu6c64cqhAEzwDGjCmY2VxSZvDqrhZeXX",
  "key12": "5P6E6RRY7fSKGAFcQz5Wu36omsh4FatRztJg6LjsiJuQbT1tPW1drynt5v97D9hsxAYRZ4JnmSqKtD5rfZFzzjJf",
  "key13": "oG8B44odoK5WAQ3m3ogKFvndm9KSx53FquT5aYhieNC7222yJjAs1HQsgiAjYKYW6LLnzhao3oxy1CPqXxmz4t1",
  "key14": "G7eXPiqCmU1exAkyTWVUvQCPGU9MrVWjL5e768YSpUNggAZ5w1rLJCH5LhSfXbiyta4nMd9CthgCoabpQb5uhe8",
  "key15": "3yVxxA9njotioSSuaEWQheMcUMZ6Mmgo1pkb3BuzJsdrLdALDTiwEu2jHADAzzRgSKbtedz2ADJzLRUMufUsie8T",
  "key16": "2NrBE5syERzTekGtc6pYpxLghKrVVWiqLQysBoKMVGnUy4Y3faH3iF2GHbrkpZFY1nbboVZjmwEKGCsBV6vaEsA8",
  "key17": "37u16Ey5X7G57ZnVb6EYJosSgjfTWhfujxzLyBEFkm72um2No1kVWv92gBnXG5U15UanBYrvfEvajTNGPMr9sZYw",
  "key18": "3kXJBxQs6zdm59ehGnekDphCGzoBa2nQMYa8YDsQkPzHBndLsbehXVzUnLA47BCPnGPnGJEHisPDWm5qrrbcw3qK",
  "key19": "5Lwv7STQGwEHrm581W8hoaJGMACGbWxiHSetVFF1QV1tjYhHn7reEAeLDYAFHsysCzMgcYSvD35tA8mNbRxnWSSX",
  "key20": "4bZtqyGHLGndteXRYri15m7rDnhyEfZv37UGnK2aUXNA5qfrKb4H5QDKFbwcXvRzEjnAVMocuJcHzZJVhoV5mK38",
  "key21": "46UqwDwYGM3fZjuh1ckC4CCdHACDiKyRMa2crmG1f4P22HVbso7VPzwPrmsgepWH8X2JVpL2D77c5NgqSgbbQzYS",
  "key22": "39fzcnzY6my43XNBLuczfmNMDxiypUePnt1p2qpm2qHRk32sNUBf1oVsCxNJYQ6H5Bj9kK26fWYRfDPtEtqHRhth",
  "key23": "618PWCvKzmCrCq9x6A76NeAK4nMhynGdVszz7m6srxGR1ogXrKzqL4Q74bs79zxBdfXYdMwXrRHaxcsMGfxwVTdU",
  "key24": "67aNfhsA1CnFWtPy82Qk19B1kZWbwx7MPyigaeSjac5SJWXECZJ84J3mosh5uDmk52Sep2ASP5atCmb7aXzqeghg",
  "key25": "5KjFaHnnPbhfFcjQEmDXUeLCXdJwH1xyU7jkBwigvKqdn8D38k1o8VzDmkjTkhw7YZDkrDA9XESDwbdxeQKujvhF",
  "key26": "4Je6Zrto4RBQRnbRh11HGK492kVnb8RFt2hJ6gbCE2cDMv8jQcBJj4nx9djCCP6Vq4YLKK4UpSzQ3QUcdmojoxrY"
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

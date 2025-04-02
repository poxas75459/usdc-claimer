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
    "4ioCYDM9q7SDuc6a2JU7EjSH635YP7p1GKxVVFg2KFEwen6AccVavgMHAk36ebRKw7zzyB49fqwWfBRUVeqK5tEC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25NMAjMCz8Vjwk9VCduKzdeZsLzYmgYAfAEGpH8h1FRkNQi7AHC5Mo2LWRMvevtszA24YiBqBi2iZTeGEd3GotbC",
  "key1": "2yw99cHjqiL4p37xVBU9MjFNx5JYeTdvSwtrpEgCMFcHe9Rj3NXtHf5cBQJ4rM1ZzN4ow178RSk38LZZTkEUsiRs",
  "key2": "5cyT2X7CgyEs5Uw3gP5CSzXHREaM8aUon9LkUuzwW4aZvuEzcJHepYXxAMiqhHtANBdVqgMM86symEG5hWPoHvPD",
  "key3": "c6htR5aW9utQbYjkm5EbbL6c9ec4PpQR8ewM57TEr1ZcXNyqpS3YTsrrcs865Drhk2bqkiwgiD8nr5TJyxbj7EV",
  "key4": "5uYigNDpyCyuUWNW1sPy1ieK5gakLMwAF7xdpCH2qnvQMthA2XBJHZNmMbhAzhDszyXCMoNDxe2fvFBFi8jfsuwV",
  "key5": "XDAnLcDC8qVb8QEv5f4PxKN7mG1JZsHA66RHVHrNpKGF6KVFJsqxvKQhGf7X2j5Y6uHjntxP1Sh3VXtCCkexgUc",
  "key6": "2etD8vvkP1tdfEvj6qXzsfkzGnU1sGyRSas8EUG2D8syA48Wr1NxF8KN6xTsNkCMa7cp7ABwsyNsiUuynzKSpxra",
  "key7": "BCCcN6P34j1ebkjVXHWVuzNbCXVPMSvvcmzrL9JHBEuxEKB7dnAGSWoPgMV7VDL6dmwfb8bnSNcj1UwofgKk3aV",
  "key8": "mskDX3YysrQoQAemr7RXdDK9mxSKoiB4BbhjkMwVqVS1qszUV1fBuA4e8neDg6kBSU7r8mzX1qTPw2ETpda74m1",
  "key9": "4CLbqR3ZeXKMmVhkyS6knh5iFePK3rrZUPGkNm4Pw4WMsyiZc2dNnw528i8gcdccwgmkkczgxM63hFjboG7fQAGE",
  "key10": "GcjaqHwpFVj9fXaNKuRzrcKy7VQbtSUww3ddmzyjcS7V1AoAVqqrCfzuN2KoawwGiDNixJvstaAFGY7sLnAnCqN",
  "key11": "27h2TtUYUvmKq8PWCANLxfpopHfww6szwnZT7rRkRun8mRQPwuL144cv1iM2bVZw5DFiyVzzbwZ53fyp1dFQYJ7k",
  "key12": "2QMtV4J2Tv6KFzdmf4JxbMYNqM9KdE9YxRjcUv6eBmom14NZGD1FngQUeEheWcd5dbZryV2DJpoMiuBZ2T49hV1C",
  "key13": "2xwDCeX8jXxfDQzBy91T8JVECUJPnyhFiQC54CYmYymZU5quACmr5r8GiAQq8rW3i34o7iBoRHPz8CH8zPpLfCHN",
  "key14": "56HgYLj88FrVtBobH4MurGJT3PcEaeCRgxxkbJK9p5pz5MbaynefoAUMVtVDso7YUmCFQ5VSHPKqys1k3X9yxNMk",
  "key15": "3sXgPddvDdgrCmjkEtNptdZtvpfSVbT9gwdg137tZfn71UPSx21ZAjRoqtpX1HSCNKaYD27bweXf7jYa8j9mtHbJ",
  "key16": "2AGvDBLdC8kMoqVW8Usx7PKu2c66Vk2ML7izd9bW2UMQwtdVTVai9mHz8a8TSM7PMbJQK2uivHFNsvHXAPYudgrN",
  "key17": "3ivVZtH9ZiMANbXzLCtCqqzmsqZsf6d1oa92V2LXnDZBb1fMtyRze7xd6h7wQYYLjB2PkZ8nwUhLHdzB5oS71eQW",
  "key18": "3KSg53xMLaL6RwPpfSkJSbVFuq72SdqtQBKgAGjKYHqxMdKNA4n58oBsoxcNyD5tTK7z2ETnYDEe2epkrqGm1QR",
  "key19": "44RLE1UXoH9cTvfkW8Wgfa6KKz53YHkcsHesg9J7sMwGV3zurXo64YKrYkbNnUwkkPC618kUWaVoZXNkdaUcR48T",
  "key20": "3qRFVoze1LGhFs6e5apwaUNfoXmfdEYB7N1PjXTtZt83xQo2dmoYJxZ73KNKoqjdj1kqsVFfsktBGmToVGAF3BSr",
  "key21": "55ZLzWdHCqutz8ZhXLb4yjif4UsRfyYgDJ7sZhGaiRkL2UaEcy6HYigckrmfBUZjVyMGfGzKr536tmEREvPAQjnv",
  "key22": "2PBSna6MvxRjq7c7CthCmnEB5YCdNEQt7sF9XNedQfdRjCKGarVagxQYcjjZ3hHSAijotVDtaWtACTLxZSiLHX1p",
  "key23": "5ofRjpJYpxDEHqwBY4Bnfj9DCZTU6JZFh3A3r2hwSo1aAH9p37zEwPfp9NBRHmPoyRmBVyeaHtwZfmbcy9uyfmbZ",
  "key24": "43A7JDUXgJfCZAVbNaKKSUDucRuKEMPuzMxpHJLvw54QRJH8VKezNSgnzk9fjyjdfgRNZDrW6UQGwRUb8h3iD2eT",
  "key25": "5LsDaCDyVWoQsDv16zSFy2fPUmxkBGBRdMRUY7mRCZq1emc8Y8UXMcYXxdaAyyV125pu1Tyiuop62g9vRcyUFMGo",
  "key26": "3JW4ggW5fgH5Mo376kmpTt44cvWkAUgoTaSFc2JcjpQA4CjejdqDpLQUSB5NWv1h8cjYUbgQMYhmtYSKfaBcSscs",
  "key27": "2EGRQgq8SZshuiBNHwQKVNpujyFNsTZNNDpYjz13TnfTUNiLTjXK6Af98UN8fsQi1imw6HDDK5XAkwVpYfrzH5yQ"
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

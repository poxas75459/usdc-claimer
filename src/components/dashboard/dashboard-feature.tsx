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
    "2DAtMxZpjx5ggit745N2yJE9k66VYt6DyJKsJpnAa9MHFKGu7S5Wi9GWJ55ziDrfV7yytLNFyCKas4i14jAQcENq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pYRa6hTgfkMhehS6N3YGbtPaHyRmjeRwGcS5sTbu8dmNBcEWHqD6EuLTjptxToSHT43vVZmCGh52wmiixqtCaeo",
  "key1": "5n4xup2PbzaBhrf277bmNQwfPhCyBbse5LAsmcaGuPnRPpDcXcooxhhCaExWRZ6rRnnCnCm3H4Bv2mpyYUYQTZ6N",
  "key2": "4L7JXXiyD1V1xxgvR2JkvqoXq5bUQTnAqRseeztvRAKm5akCcmd5xmEKDUKznCSe9pHiSKL6jXWvHcwPe1Bmdttw",
  "key3": "5bHzxRgoDU8bGhtKBtCL4LMhozhTCYTQq4SAgTQfUUQQuirfAbpL2mkCknqoK1a6o9x1yNpqymSo4QASnUXaaEec",
  "key4": "2PFoyy1DunmEWXRmHoKVfceJQk3DE8jYVT4AGHPTYokcCUKE23JFk8r7KdEvewpP3VWv39Sn4Z4t6GE5RRp4Fwua",
  "key5": "3VVCAAWgmzsz5vPUSmNiC7tv39CSNZ6fftZ21HBL5TPdqKboqXM6vsftJQ7g1GogsdZeUk5t7wyCWbEdrDoxKfEx",
  "key6": "2xCcpq4KfW7kGW3QeLufR7caRPBrVCAr6PfgFSXiM5dfJUj8oeyrCqQK8yb1RwXzbHYPMe6Ss1nt3LW8DVY98U4p",
  "key7": "2y7QXRK7qdTyLjy9bRkYK5LSjrHTiAB79QLNvsaA2LWVoWbTdX8jYyeqzajJLvNaNYbfFih7zQcjKdWKGRnVJgHf",
  "key8": "2W8yyiiTUc8B1K4ihqCmmRhBRcVBfTXVf3wne3ZWn4tGzTTWutRH9vzoK7gJSNv1M5mmkmE5HpmHHGFNqyJJdzn3",
  "key9": "3in8d8eN671Qj8qgCboi4QWbNmPD7CSCMjpNnWzh2ankr6bExyEaEJDKdc11Y6RxfWVfxig3RG2AJ4VB1adXqoye",
  "key10": "389K4CySFZYK9EEcGidbNgVmafGdNKcR6Q79gFKbPFukRctJB1xRV2CThG6PTTkRnCbGZSEybomoMMuzCoN6CQ13",
  "key11": "2N2hZLs8kzCtMunegLDDeAf4nqkyDqUd4G3jF8vqosVx3EdLJ6vTCBUmzKJT3mhkvJ4UuFLqE2k3F54KzQW3MTGH",
  "key12": "tCe6vvsTF4qW8kV2i5YL8zi4QquF5w43d5DThfELwwvaByK4Y18EfzJZbpEMjhFmLQ8WVSupgpscXvNQNLGDcJ8",
  "key13": "3BJC5qYg7V2YjhFTQcVgf6cu5R7R3qsGbj1ikcWjwAAgBfD3wff6urkPMp4bZReCjqEJBexK5bdhxDNufyMHYmi",
  "key14": "48tGQvcSMhgEjaY89HVi7gcDHaqLaSUoPsB1zQYgGx9FTt4jG4spzKajA61RkZ8NKi3Hnno7zDZYnccj6DY6tNXi",
  "key15": "2xKrDJEYjH1VQLKSvKVZTqCCny4BuT9joTSmzXKcqLGLQfCw8jAwn92jF76B7mrgAhtYzrRqBK1Ny6eNw5VJ4V3p",
  "key16": "2aE6CeiSSCZ9fTyAL7GGSfbsNtdjPQgLsmHojwBxLW5ewHetVrDTBJkFTnPFg6rsZMwtzKtHyXhFegJoanuCJeGc",
  "key17": "2aGuLChihCjkzoRrAqZXd9sYkBLFt1N9KzQrodAuWzConysN38bx96MxZU6Jx4jexUdNuQQX2cuZUz2e6ikL5hjh",
  "key18": "2dKMqWwS1zZ4tkWjZfE7vMtFC3o8kvhou2n7YJBXToyJp4N3pp3Aheo8qMVDniMFsJNvTtJqsHSTTVoC9koSfiRt",
  "key19": "oNxpiNV9nQpZaTMJmoVhVFpR6UK9xCcEcPzKbyTAEM7w6oAWe9hCcT7o7Dvd6Vu4jHCeKkT9B95iZox73kWjADn",
  "key20": "387ajxGGkLvBveWFe9SBsNW1U6Yq7t7sD17MJ2No5yfe3okFNsfsQaCGHPaG94X1D5YiJJDLB4vQpFqHcxxVW3to",
  "key21": "3wrEgfUUeWNFXXMk5cmDdsyVV59FxbRwVwFyrJdCJbrpYJM5ueUojUmuDyKg6hwQoesnMZNH5FDaK82SiAj413xa",
  "key22": "QhPmpMAnhV6U58CSGveqwviU6nzGnCzHgo23zi5ZfBmtG5kezt23ViEdk8cTXuQ473ztMUS6QpQsVeCWQYRLDrz",
  "key23": "4Vw3DmPSJbVcDEvZQi7N6RrKQi22Z28XXnTRVMcYrCCXxkzuze5TwwEVj6SaSjjBoahTWeCEKTjjNHoJ4S7DEVp1",
  "key24": "5H3oQ4ythpg86VkJ6w9nxxRkAfebFpRaVLAEUWoSzTFCUK8smC3k3URQzgUNq3nkmRjomozdw5j5vJZNkrncgAe6",
  "key25": "4rLdW6rakS6fk475P3CNxoG4qfXRax4cZXbhgwdhSW6vTWjdPuJxaRGY31BGwLjLAJSXo5pnZgPxvrHUW6Z4MVR2",
  "key26": "2PhqVcAMt5GdLTNUXsS82anWrF8VvLKxU5x5dLzeHU8RxadvfcLg78vSSVyUVaqdMY9UWjEw9QUruTUANYFYXAd7",
  "key27": "2sdvmwSSTAi72KwPd6AvRdb2jNtkK51HaamsSRfkur9XeAFehBd6DrZXLAgsEQfqbFjJcGEC7avuMUZBXu9yE5Nz",
  "key28": "B5X4w2Nno9cXpHkfnnkesgd9mYjhGQ6PpaPaDkLYhdFPQ1qizRPdvhg6me8UHWfXBNMzj6Ts9HfTBeDaRf5RzZN",
  "key29": "4agyJLuRhZs9bRYhcRKWHNTcZNr35uYVeNpdtJYjd3HXC1VJWUsRHQJQ1n5LtoWQUXr9QVJfDVbd4gXXNNGfqn5P",
  "key30": "2hBW1byGk9sRFaXFChmjUGQi63fZBYd14Ez3i8Z9kpCxaimrGzuhdd9oLQ8E53atMCTLz31Lc466K6nx6JQ3WXAS",
  "key31": "4M7GujfEA8ULcRmCid38o3Hf8YwRrDVS1FrB222BapjQSfrTCAQt6spmgXh7d5hhGbZPtqNrmGmDk36ymYBc2hTP",
  "key32": "2VFNMCuMcpJP96sjn64dywt276BL5K3Ekyrf9DSXRnbVGDZ55FPJzVLyjnsBJ5VyzMkE83EDfacWKBfVWNLy3zTi",
  "key33": "5WGjZFyZM5DPzZN5VhFWQVRi2DpR8emN3M6U3etqR3fXefkjf29Y9QBVaCE6zkM89kSwxwGfYvFjZz93a4TN6fNn",
  "key34": "5Txc5BMdSQz3UmHLpiShBegXkER7JrkSeRKThEjWLAfJx2J5r2SSUNWP2im18k54v99KM5iu57NLqrgm2RNHyCES",
  "key35": "31KZZK5CX1UvY24WcrAai24y8qSagb5M8t1JkMZx7keFjtsKRy6Z2iXG28CUvjQEQ8TGG5KEiJKkfYJPF5wiqQvm",
  "key36": "3ESfG17iaXHoqwG6i3b3bZdtL3cxkyfEXafJ38HK2yjENG2cFiMc6NBvVaAwCRGBsjkkEqEXjHHxZ17TYq6fx1ay",
  "key37": "4P6TEX4YrBzbUxC6VePC3Hqyv5PxPafdAzLBt53haF3DFDbM5md2VTUDCbD2e9pne4qVgbZidCq5LxQJxrdkskoG",
  "key38": "5hNSfRu6Czm8qbsBZ3cvtj6Y9hgLyVxWETj3B1tQo2F4TYN1QXG8nDvGPJpGzbpEPcf2xNKCDRWhpvEA4xPyvjS5",
  "key39": "4jqQX5MbXHoCuqxXLrB29BoisoH7L3zBpkJgXRU4dsVNhQTnvNufUdEJZyKSXqyGU6LHxPSyfQpkaxtwGusHqWjn",
  "key40": "5fgf1wmaQ5uv41XQhY4W8BgAMmVrFpS3wwLmi3wVJomg6A6k4CJVdc52fmvdnpmZEDihF7GomjoooT1ofYgiW7jW",
  "key41": "3a8hbdbbmdR9EcS28P9PUJJ34MKg8X75tPfdh2p3sxCKtXVCCEPgdQoF2H2NYimV4tkuwEAZ2CJHDay2y4YYs7C4",
  "key42": "2nHrbwZgkBqmBgMYWc4WXXbJvuZjgv2iCz7yEqewD8Vt7bs4BxD8XHp1DH5tUcfsD9NFxniJPuJB9mS1PeNLWDDy",
  "key43": "DZ7hMKm9nxQ3DvYkdieCo7T93JuLSKWh9jEFy9XZgVha4SgGSfthSJo6brRnTjFnyp7QLzjUk1PoRXxEbAsizRF",
  "key44": "sEqgYDv2Zimnkk9FHhCWYxV45kjMvZQvjy46L9P3xnNZyPye8Q6guaCQxNugvY1w7cWhzZ8EMkG8P6sPcbQSj1k"
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

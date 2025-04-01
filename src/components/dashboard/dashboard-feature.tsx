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
    "3XgyFWhB4iQPuP2S4dUxr1mi6VUtNUDjgg6Vw3ZU2bzS3V2d8zcsNLkswxUFPJ7UFsjQCz2qvybRS22EYw9heJnZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fNNeHitSbQTdEHmPAXB1nnPsXhqJiURidnZ65TADiS4G6A68oy3R6t18vtwiJQdK1n4vGERuSEmLKNSKfGiCaNU",
  "key1": "4sEEG2iZuhbT9gz5zAkQ1uco9QrMrVEyRjyvsDQYRPoHbLzFHpzudRumYDku9KnonbuccZkDudKh7yTxzmP4PbUN",
  "key2": "3kgHnny15F6LjniT36uQcTBQndEqWcsUs2dAiqQUgA8HN8sJm1jz3a1n4hRRniaRCfbEjMcMWp48g6PQNjb2wBXr",
  "key3": "4RXNxD4CqjtRiYHoJJyZzAXsBJPcf3xSDvU4eNQKUCaJLWgnk5brnaCmG3YX9zH7uLNAoyCrC6h5CBXx3UE5DswN",
  "key4": "35Wu9WzfZyQhvcpiJRqvN3GSFfptkJJfiUDhGFWJdXKKapFhvQaoZWJgcWB3CC3X6HCbjcXyzMZ83EJjaDigdvwm",
  "key5": "2QD2a38UNpfEfE4NEGbiVzMWeg6h3CdtnYws2S2fxGacWwd9PKVC5pF1E7mjhjJJHeqtpYyhu3qtRCChxvkknmGn",
  "key6": "2VGYivqMLEMfd6MR6K5r7cCWsdLmXwp8G4kCYdvyD4qi62odaLSVWFekVHjVU3p25LTZp35fSQ9rT9dVcCGMY9g9",
  "key7": "HXmAy1Wt3iYueCbFGurdjGW6wwgJYCmj3oVpnTRq97mKEAEiH5yPDHPq4MJbvhnD1xZAermH1Rf7CkvvU8HkxZ4",
  "key8": "2KeRcNywg9jaQDTdEKfj2zRcUF61H4x8KeBJgShwMPNMxPDn2eWMxQEJvzY451DE1wPAs3cYpqkPep9tsq5GRdgT",
  "key9": "2J457KvWFnxntuFvM8A9hHtpt8qnut6yfJsBuYEkfg3ZdmQ693N7zs4amo3NPBTmU2Yc9VhWm5sD3P7b2DbNZfHQ",
  "key10": "LBCRQZ5pz6HZLNF3uDVhcsm98aBFyBPScT1Kd1bfLm4kbUsedRJnUMZMeqngmQNoCGHrkb2aJGssnwprhtcqT6F",
  "key11": "246uxVa9hnbGPjD3rWbw3omNzg8EFHQzHC1yBaFe1tkFVBjb3BzUnxxJfUPWxh9XC67pPqLsCJAP9p6DisTTgvcw",
  "key12": "25u1ytMpnYS3W9rg5YpEX8vGVuP22YExoKFgLZ4m3Q8eVgaUpkLJ6vkUVyjzBtfnfzprXngqyT8ibwz675Ac1hQd",
  "key13": "3hs44CugZC9FrYveUiipenFAdvfFEkKCiP5bnayToM99nzN6BQycvNGi67xz7FzLRDmED9zXzeuHfF2CSiKhuggi",
  "key14": "43FdFQaMhyN4qH8Jyhjn2t6WghDKiyEMUnbLv7TtCVxFhfP4nu7jy8gpi1h75CuG51jBQCguXn5UTQE2LUqspjvy",
  "key15": "5hFjRgBTLnr5ugBKYnpRDLrkz2QwhrZCPAvqBLHJDzvNBc7YUdJsohrdDB1qi5sDwBNCbkmasbE46aYrS3KxvuxM",
  "key16": "3ShJxhgF5c1nh4rPXqJNzc4Zr2uq4PpUw4LM9UFbVBGUaFEeWDLK4i18w42AcDDpFMh3fSs6sa8HB5vMf1bZ1ZJi",
  "key17": "EptfDt3Q7yHZf4c6k3W5YsdRgF9EEt2UcpgPobGzSBUVDvBqfg5agpCWaEQERCMTr13FVrXMyoExtgK5e3itFH1",
  "key18": "5gsiVj8VTReh6zi3azerYMLCGfbVVXuVEUvZwQ8GaW9xX1d8sxPq8G6mkDrzvRsPMH2HhxrPVH5nocaJhX5R5p87",
  "key19": "5un7cMh29cNbkjQcacgqFWu8QnskePUos9vkqeLuKVkEA2798xT5LNG5u5QneJ9QzHM5N9L8hpqDnkxLd8A3155J",
  "key20": "5XutJS6cBgG42uhmMY6o3geUnRKoVmDxvRYFXnYKZHdvA8JJyskxcDiHfaWWTVC5u9niXmxmneWM24xy6zY92ws5",
  "key21": "4mJoo8ubYXsiuPubUhZcVhdTagFChCVPAijanJMaKxovtPJkoUr1AeHY875XgWivbNEme2EUdz3VgjGToJybt5dW",
  "key22": "AC5nJTZ7KRQZzuKMBa8A3z41aNunkC9Lpv9aN7tzBFwZrndbYVcdd5ApAiPspnB4hdWa9jTQmVj5cq7xjm1wtYy",
  "key23": "2uRJxKaEa1EBbhp6idVNfyShF37cAzrodwRt7AZq81umhC5NiBoNs58k4Ae6A6wQMdBBaecbmRdSg9qc1EPPEcik",
  "key24": "5nyy1q3znwb6QMarcqHwZcPPLSLYEpPGKMS2yPPUAt3YCbooM9pvjQAtK5LPdpQj11Kx2nFsdh6Qm19H9gVNZiS3",
  "key25": "4k2t9JRLpRgDmceqj1yN7Zbq8nodVxHz9uXYQRuZvdrc15drVbZkzn6vhCX9noJ86e9L5Car9LegWMhn8Qf3p9yf",
  "key26": "2qppLb5gYUh12LfybLU1pcVx3jkc1A6jvH2k52oi8vRdwsmDQmkutL86EDTufs9XrcL84BvUS4BzrmVEnqKuPpet",
  "key27": "56nnSY5E4XuD8f14Pc4m6Ji3e7DpZifshv4SpxTiDrh4BFSQ7UHia3wqVAcw5C3uefYiQJQDMhbyDT9genC8y5dM",
  "key28": "4vkZYzrVEajuMFphdRPq8ihEiAy9UrhPzRcSA2yENHqdndGBJ3c1tKJyRW3VfNx3GnXqRsq4FhtudevQ2yXX4fRg",
  "key29": "5fLXSCrzr5tomK1GxpDBREThBUrHWcXPW25Vj5wDDwReeQddJBkDzqMxK2WwWzq1pSH6Y6tnQLbNpiojNBmaPBgu",
  "key30": "65FPYQUgp7XYhk1eotfQ3sUBPSokZHtwLqw2FkQN51Uhr44wWEskHL14raUQwPb7rWgKu3tqKANXC1iTz3NNgkDc",
  "key31": "5eFBzbwDEQYzC56TXmsbLRPbja6AZhAkNVYcDDXfN8bZXtNeKPM8shgQJhME2mLAhfanzjBH78kYq7X9HQzgfPwL"
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

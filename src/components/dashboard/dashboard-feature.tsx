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
    "5GLzF4NxJ5AH6XTvtqwX9Y2DpuBSZdj5y6LgDKRnphqWpMPSrNB7cJZPQz2Qxkw5jJVwXnVB588iJT7kCPmgLXDU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UWMKcaWsT62nntuNUj8tAmcni7fFX1nBETVvaUW6LRf62vDCFPHiWo6DkJNHftYjpks64ATPfQHDdy47GE6uMtf",
  "key1": "4NuTryJePjYcs2wZ8qaNVtFpmujQz4ap9CLnep1zjRsEvaTcGW1LzyKrMxbrr3BFihusVQqZBSjM79Av2FsQKjX9",
  "key2": "3z8gwzd9vnX7dcEHNWQejw32EyzyCNk81e14BiuxhGtfsixxg8FJwwNugVHWukr6M2kitfr2LjcrrZg92k2qJRWa",
  "key3": "5GxNm9zkRmetnUtMLFe7X7CSLEMjNoW6af7XcK3UBPXmfN3Su3gwZm7k6Wa71mbvQxpYYpubDWCNXpCirJbg9qeW",
  "key4": "2wAvzxbSFNchMTpr2Cpvmvn6VyDQLLbjTUNT499RpJPSQvenetXQwtDHcnF2X3MrM45kC8x1gfr7NF6dYmayxepw",
  "key5": "XyK6Qhhw161rgbu68sm29UeUjAxo4pBnP9uNveWkCHt4DA8By1ioZXjZRyLwdbDgU4fqXsSP9J39fdfidJz31XZ",
  "key6": "2YB6L5hfWpxck8uQZ4hpsMcexDyyHotWYFdV57weP74wawc3JtHdq63GBKN8HZNrR8mES68w7C2JA41GxfWzvHx5",
  "key7": "3oUV2S3Qg3dM9HwoWieurcybdb3BovXiPpBvnj3W4iQYiMvcT9Yf1mM1NEyZKnA6m2fQqG7kGSLr2xgwb7z5BPde",
  "key8": "2ezqcm2wXC58uLcbHMJYf3VFM7Lg726gWfrRLNurB5r8wjZoontfgRPpYyTZb5Kh99idFevoxmtvViKaLuHAbkss",
  "key9": "5CBDhhi9h5LAPbejAUkzhWvxHjRQBVB4NgPLsg2zgvzNvy6Pevuu8MWGN5Xw81vYNrPRUtjUm1JDBfALYdNZsrtH",
  "key10": "3DDe685gqyTZ9Wo9NRV6shjZjLc5bZSYnctFkE79rSHzyTnAK3W8rpdc21n6qkuLGuzg8u8UgbxN4fLKjmFrWmyV",
  "key11": "3s6iqntRm8pHXNXD7jmFWcoR6J87T6wFwr6ixkJSanWUAjeu4zGENL1Z3G4otZdEvEBLF6LhoqZCAG5D9MdRPi68",
  "key12": "5yQ5E1QJR2yrL8cHN8JySqzTLq4YwAMkGPTYwMyizVbhraG3EismQHJFCvjed7c5xyUYtTJeyJ71oTVDL6ZxrTLH",
  "key13": "5DiaofJWmeZAdFCAT175Gv9skGb85BtWidLbtrKcQ6EfoMFLLDmndGQQsssZmYksUc48xTCrwGMPL2V4DSnKmZ7s",
  "key14": "2bZFEi3zNMAU8B8A2C8BE6pohB95uqvQfmm1YUWHqMwxxshgHoS41GpDMKe5WhurdQDYSQoihf4F6wh6iCVP6sKs",
  "key15": "422wDFtMq7a7ni1gNVBEwoqbBj1isZWQqtF3xLUjeN2L2cg4tmHmb2XfokLeZYAhSQF1Nm44vaTT41PBmMWwpMuD",
  "key16": "3L8MNqwNtNmbjVBVUeBCV2WmYGELWgvCfAdYnvvXmT2DtDQhH5NLiFt3exvNH7Q1uvwUxQdaV8XiyRL79NmQ6LnZ",
  "key17": "2Nx3e6gXxk5MZeaQmh2wmVoNLRipqBe3aBWHkBnrFF4CR2GNopMjoyj5DRamFB7pDWcty6LuykZscHHpiFZ57WKn",
  "key18": "yzbziypcCpb9zPKrPDsrH4BbreMZRHqMmi261NTdZnMfiUrXpjdvEYRTw8SD4nRkqxpkDGiST7YTHsnQSekEWqZ",
  "key19": "NxBpUAQQTAT6DkqorBs84zjbRwLgWCBgno9aSEuTdVDujwpqbt7B9JYRbwyjHhSYi1VUZuD9uD71Hi2GQuxYZBq",
  "key20": "3PB1Q79iXD9g5g7NzLk5mgxRy2KEz3Z8tPknF4iSay5k3yN5CuXKtst3jdU5cgkcMUJLwRzRNhZYqSGrgZBFGerD",
  "key21": "TsiA4Hq1DxoLDRtzSr2W6R9PFYZqEWagkxWGbi8WyzydoA5Ns4QWJXazs8JLndPcC9iGEemhrySmCvwmb8aKJnW",
  "key22": "23co48L7DoWBiB7iHtbEVLy1iioaLafwy8DqyBbAwtgkpVpiutdWJQY9jzqsimTTFGFuTZ2grGhbZCVakoYhU2SP",
  "key23": "3AW1M51JMusWmePrT9GqqwuVPqqJQ2eoexJzGgH7dTRKX8gon4YmDQaKN172Sb9bd4kbAcHeDxjCfA7H3s1EZggQ",
  "key24": "3HF3yFTbZoPcHvHZ37vhFzDbjo1CXLHz4sztFahdCTZiFhwt3gcneGQx2GhV7WzsHgzxVNkJsPNSekBME39Kr44E",
  "key25": "3BV3KrXb9FixkoXi6tCt1vdLkrkWb8Qc4A8BSwMg9aoTPhVBxJvVFGiLMXPf2Kq1pWsafgvux7hUyhYEziYheie2",
  "key26": "5YySR43f9GEcxpsioJBXAHKKjmpMu1ChyFjG9PzZ6GFMpN3LeMVg9K8jaQHqCfvJzV45xgBc17m3hRCm69LbY3LW",
  "key27": "NuWL9mk149KsSQYQhgdSZePMZFCCBbWnEucRJPJL9dazQoc8cvh6hxYAHo2AhkGhuKY1YbfisNhZRkZLg7wPL99",
  "key28": "2MkKV1MtLMVFW1rjzHXcG8NkLV1yHFcdAbC8rC9CgrLGakZGjFAnGmjp9p7dLrV5tqSdhjrDu7eGLpET4XTSoRY5",
  "key29": "3FkjiMYcs4zhUbomVe1T4t3d9f7DRpU9gAiUyNaarWv16aHBVE6KTDnmH2rbFkbhPNPM86ePPgKfPv8amWVDHHz",
  "key30": "2uX2zvoMr4KASA4khmAgJRaPzKpxzLzQrcRDZR21jR6mgVHaW6nWmtUVmawiR1BWDV5HaUprVLWHCskgUgEZq1WR",
  "key31": "5p1vEeZJkAtUxQ72VgDm2JQhCqhLyg4JBKascigCGoxSwSRRy3cZpiZBEm7jYoepA3Xzxs9NipoQcPwGp67YNAsc",
  "key32": "3XMqZgc7A539jwibpG63dAe6oDE2FGWs6rXy8RZnA6qVuC3FRjJ2o686scR9pkqzBbi9ZFWQ1HEdpgfJbhmQq3Pg",
  "key33": "4drWJK1T75j6bapsHvZP7L1Q4bVdhDime5x63kNpBZ1KktKUBWiAfN8aVmHPEeUjgcdUhMSXUVH8P1yXmrzxPjVh"
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

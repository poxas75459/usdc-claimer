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
    "sFtMMS58HeC3PfJErBxnhRaNKjsr9EjrF4oG9wqu26eUMi1M33nnv5dSf5y7Rk3zViS7JfLsSbT6B98tdvagNcM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yrtfRsM2a2B2K8fNMychtK5Lxe7kkJLr5rMcgzzphacmhowNVr1EdeHdon9q1FgzZCPSiZ4Ff1LpyDZuT4vAhJE",
  "key1": "21ekFzLS66ofgKAiRgUW4eEU9aqRWkzSPPfE5jwJ5spEPwJ3UrbxW3J8SWRVg6pLXYwBnas5W8JcfZsD5egjRZrp",
  "key2": "4Ei3cEb1Bb2rjX7zPfH1pNStUYp1GG9KKuKocmu9Z3BPYM5xknarNDxVJHWV2HTRYWQsovbpTUskKQwFKkaKxvm4",
  "key3": "HC6i4D5r6dUBc998A6P4CZ17UcqxKxYaHJuKonACJHwU8PGvrV22DVLQ339HBmUpzAVvSA2h85bb2jftzUkBG2F",
  "key4": "4i4dzFRodtbfwdJYu5BTnPqQJxvQTRDnZcSA2gdAtan2TQpuhqa8wyuSchRkcysraHMD3fiUtRLicqRc14gCE6dM",
  "key5": "5cpLG7YAF1bkEPaqkLcP5FfCpnYn948bbXFz4v8EPGtoBPNDHNPW29K4cZuo2w4NCxhiQJuYGgKZwBeH8k933HrY",
  "key6": "4xwCs2xi2RG89CYgYFVvtyjtn3YRVLNh2hberQiNawQZ6k6YVrxBV8VSuYQFhCvndFsBao8Veg1C229wumTj36F7",
  "key7": "25btSY4pd3eS1M1gLkMkixuchgW9ViU4yGoCJbgqJLB6Xa8PTorDyQc5JRLvuTMUqvUSZJsXJdrfvFsDWokM3GxF",
  "key8": "4tHGjXL9j31fjCvAsSEnjVXj3BxfochSbLWPdTiKNe5EQkeM5qGffcFSpWfaCKo97uB69XhTbpf4TsdUH4VzqVez",
  "key9": "5FSsthuZMQsGM3NyN11rPWBvMSqV9Fk4BoSn8YdpW2goCKALVVbU1T4grKcnfGMD19FFTQoXMcYSaeLvZtaPDD3F",
  "key10": "29xb6AdTmzK4uUw5SJdfjcBu1ME3xkKhZeCGMJCt13EhrXBE9NFNdU2H25XNkSF3DyigTfB7cABTeMuwuiTxeNEB",
  "key11": "2D62dYn1xv8AKAHMyKq28KJVGvhK3P6kZRpq6CEZDET7n5GjMYST8E5iwu4MLwYxjFmyVvW7KwdPH89j6RNu5GXz",
  "key12": "hWFZcKNGcS4wYrXjycpfDA5o76N9j9aewM9BkB2NHKLXUxQCfp4xQ4aWSG34KiWb4kxgPSxsRF8fL5os7m4FWZq",
  "key13": "xCMAc9ZLtsnppnsgAd9rrys8rFAFdPHem9SkqngKNLWTjXKpRZfBzHFcyUP1tsywk8JKW4sQ2W8RHzC2ExCdxWx",
  "key14": "5QqkTGVay3H6zVbc7WSbdH7z9RgqGx9Euhg22z1VrqgNq33Ec38vQGa6EVQWAxFMcwDUkAaiTfvLc54tT3rkjKyD",
  "key15": "57WjoS2vDMvcgba2nbxoRzXqYYWcoJ3vQfcMYHUjAEZQMwnsAfZJq6s5vgbqDu48jCQwb822XA7QN1Bj1kY8KYRC",
  "key16": "57Ce62KbKXuRAM1EGXTywZHWugW3gAMCas2UdBX2NskH6qpTdCsgiXhC51w6jumeL5AhQnAgUvULJP2g6cti7uU",
  "key17": "3FRNjvES1kjouT9daXafvYTGiPwgMUDg5Ln1ev59jo2qMCXBCChENmQEL6CGVdmb269KdMYVHYQEzybvTkupqr2u",
  "key18": "DiyBo7XMjojHyJZyG9PZFmdE9Uxrb1niDQGxvja4KWNMSAoYGwT3oGEiFWyUZ6DMBri6gprtJvPH2u2fcKEtkM4",
  "key19": "5BYneZuXo9zGx8aHRx2gNm46ZogPV26Y1rwdUivhequcfXn9UcXNsgqpuoj9cEeu8e95rfgs3ai1RpKybq6FLmWf",
  "key20": "3juDntHG4dizuVJL7V2U41zgryaRooCxUdcFfmJTUERC9tvVRb1nRt1X6QamYQHs7vKrBMtwrrrk98hi9hdtMN3S",
  "key21": "3WDCePnSPRo4mLs8CvKx2U1A6v42mjWzA5YWPj2oThJUSx4NX37mketmM9gEHc7UMWbUc989k5PLmbhyKFRv3dco",
  "key22": "mYnQFFCU6rA7aKBRVTXeKavXJRG5PiWRyywLFEUVkBdWzpn2wgsk3yHx9TugoNUCbpmVqb94yFE43UFghoTnYog",
  "key23": "ZTui5oN3WVpCZD3zMkhioBiFmPZgwpDYz7EjXcDyqnZZWKqEwFENsb6eUgnhsdp6PHKRvJ3uAjXHFCVbFgP8L2q",
  "key24": "3EtnKL3DM3Az1mGGxdJQdGKHbxMr3X7CMfR2ynfi6W1DaAzWZHCsThqbaauLJpkoBzUBYEah2WppqjCafauXmhfY",
  "key25": "5e6N3oqs9iZ8MAoVsJR3PgwBobTYGVpac9RF2e4XHkpr4T6yNFE1oXeUu7MahcjmWWj8JJXSpjvTDbGSNGG7U25g",
  "key26": "3co5zVtzQ4MEMFYZxeUmdsFmPSbrkHMsbBeAK9tsqKFZv3Bjj46gC6UaBDZafBr4uszaPiWA9uSgqLSGjW86qbRo",
  "key27": "2xRwxbzhj3ez4TuH8cLMTDYajgjUYYoD117wczdQyDXW64Uyrw8MAF3mPLfjXG2GGFxGKD3hLNTALfDVY4B68WAZ",
  "key28": "3uHuYPiZXeVReFyFYjGitVrgUa48NFR4M6yX8aw9H5pTGa7iVSgvZr3iZ5LMohEB3RZ4TzDHuvzQ3VcLcxdrHakS"
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

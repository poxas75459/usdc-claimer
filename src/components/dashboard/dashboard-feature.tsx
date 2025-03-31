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
    "5jY3GnB12m5VikRxp1iwwHhvBZ6F3o25MoBk2r9RP8bmS53RZ7AEBpMR1NY6sdkGdFm6ibQBbBWxqpnDUR5spDju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q9KbvEs5V5BUXZ7kvKD9oosyyX7Q8JTis12ct3NUutNcJnh51TYGNVBLdKhxw8abYJPeTw1ncEwcQBJEY9tcnwu",
  "key1": "jGShxdPnrwF8FpMhPb8hxMavxxNDioYnn4wyihVNuuKX4QdrFXsQDRKfjHKejPSmUvo7ev4sw1oXrgRva7rtQR3",
  "key2": "FQ34Hx572ATB4Rk29oYTJ9JBDShabqWE8aVTFDnRnLKh8rmG1mG5gnh5yYJVrZ6J7WnzCgoyi8nAGxswgMuDuqo",
  "key3": "5o23jM7Bd7WcceZr29D68zYbA5wppbPADEu8L3rcMksZLFtw7sW77WaGYykid4uqJYLbKDpqBX1Dnforn8E8i7fj",
  "key4": "2ETVqXi6EgoXo5BWdG1pCbRiaVNNA2WNd9fi1ueJoCZeHoJ4fezypWMbFHxHNdKLu8JBdQUYhh43oac5XFgVZ4Dc",
  "key5": "2mC3bFgJJM2d8PGYn9qKTgwd6j8dAHFc1gnqwyFu2nfRJ6NajH5v4wNyzfYowLHgAa5sNbQiNP5pdhnLF5nVJEf1",
  "key6": "48gWLosBi8hNV2AbKjN7RURAWH51vEF5nmUyzKxhdwcnRAS5wKfFLU4QZA2PLCciERdUwPHQTjEDCLBT5LgUL4H9",
  "key7": "4MDioq8yNoT34tZSx3QJNCztZkKsKuu6BdnEB8xQi9kPYnv8633gUJa2LE8ssvvNSHnBTuRF6evBAUGrP99fuQj5",
  "key8": "3D8NN2SAUcnnXeYRxL99kr6PF8czZD14nbwH99TjiKS7Y4FHQpYaBwemZuP7QkR6sFt3un7DtLbRFrvEqEmU8SMA",
  "key9": "4dK2jRd19gqhw37cLvrTzZcE8hUGy7oV9cfMCuoB1ig3iGNShSzsMihND6hqawUgtFsDQ2TATjE7seJhYXBgyuT6",
  "key10": "56i5BiXKVGaeureWrYYPk6D4n2pMsx3MH7DQ2CNRh9Pkks4orffJ1W1Wy7JBaLWY9tvTvxxwSUwNLRuvJC1brmDy",
  "key11": "66FvJkB479xouG637LP8Fn9qp4oHGmF5QmNYErEq6KxVo8zoN34JWXPd85zhP9RosahUSirt5i3HSxLHrDVwZmyj",
  "key12": "365cZxdTDbqgBo81xW9ZLgNaMbwGpMrTucAPNEDVULEjeULh9SJvtdmYWxpdH5uSsKdUoB77tshq7yUSos5nx7sZ",
  "key13": "5aVyAqnvJZaWTuAt8MibXjdDhvwZqNtm3YmCRCpodk7dwxJzGVxUuoapEVDpNvSpAuqJHh4PAQi5mC3jEEMzdZ1d",
  "key14": "4X3ZF3ckkrQJRMGYzMCFwSAu9dkVJz1FnQwdPBsauwLjiV9Qfd71UXXaiT2DT3VMBkg1SgnS64ucr5sGpuRRcMjD",
  "key15": "FzukrFJuTaWaT2w36Qb66Rc9JvEt1FEcjqfr9rBWT4w5jf8ejPAa1BGheii6UmBMVtxA3bosWSZK3Daeu3VHuMN",
  "key16": "44rSNF4e5sKjqb7PviQXLqfAVTQSqSMDdEi42Vxj73cRq87pnB8pBAWtZaB25SrBpR9DUEYgDcYsiKdsYW8ddk4k",
  "key17": "4F4qazrM6jgvPVEi1EPraQD3xRwEUXCCEvKyVvZeKELjdD1SqZsxBDnfTfGQ1jBPx9zrLR81WhtaECWNzor2roEd",
  "key18": "mNkBPrhyLNBonTp89EsuH2QvGaYYFQ7AL6wvHv96JbjbwoS4iqn1h7wEnQF5BLgMvrnxVkfkg58mVoBd4vzR5Jk",
  "key19": "5tSuoG364jTzwYmLkUKcG2h5HXwPc5fRC6aJKVNAm1gNq5zjf5U9H6nVsicTZTNhsnJUEWuuTFSR5aENvz4GkKmy",
  "key20": "3HkpZ61Hpdds3QDsYBoSAxTnf5X9cUKJrUkZ1eDrCER9Stuwhm1VEwkQuqBMnGz9pup9FfaTeVGVBsEPehtf3oTi",
  "key21": "3UCDNgHQdmHsLhgTeB8qFecR2qTkMzCjuBWj5ydL7hyPPEDJKihhTLjNMzEGsZ1SUCCeNpZhQyqVNSibsJBRDWeS",
  "key22": "AqgJwDysxmE1PwBkZtL8Spv6rtz3n1kUoXfBXtwhh3bnDLQup5qqSUoMnr5EkJJopYzdhXQwXju9fTpqPXDHnop",
  "key23": "5dC6jiiiaCLyH9AsKkCodES9gkAmHyo3tyG3WJgsauRX6HmnhXB5JV2MW3XSnF1XgQV9yMxFVmhqHHEFS98qrCN3",
  "key24": "2aJUKioUe4csGGT6c55rFhky8uhF39op3kGUDrogz4xEPZHQ6YeCfJKYKPiTVmZfmUeX7ex4pkiDXpb6aCfNT991",
  "key25": "563dskeNZy6ctjCvgveTSRVj5iHeg4nKoZpZnQPgUpCqKmtNkLFBW8ovJDnbS2e7jX1vP6gFzzNxHgDqTEgsQuxd",
  "key26": "jGj8kGPmqJBMQjhfCmFgzugxHyrtDTh48Q36paFu9BXQKeUhkrAcNudtNf3L7Jskbj9pvW51wvkQzEFBgqZhbYv",
  "key27": "asm429d3Yn4sN54qQ38kunDXCx4vzMLMUdfCSd3wXdEhMfY66CBPAyMid2EVE3tfYxTZ7hN7ok3urBz5Y43wdbz",
  "key28": "3mmim2MFBEx1chntSKfmJ225trLW1dqxhNHTZ1aG2Ck9SxRXRAmsvFg2hZ1brSMecYDBxiu4Vct2JYtnTrgDP4s3",
  "key29": "5d28owXTTPrD8UEhuZ78w5D2rGhZ34F3QzX4X9YTSZsxQ8G9T3tYqbHcFLNxnN2Av4Bugjw5utUhQLqKh7otxe6V",
  "key30": "2xWewRYFxSupiqH3rYEXgrmXitFGUUR9S7tA2axgs25f5YxUSueoK43RzsMwuyqBci5h1HXcSKCmX77fXwg1BKKz",
  "key31": "bRCWtpKfDiSzq5upemZUomT16PJyxSdS5SYe6sVLk5Us3We646URkLLk2ZzbcQqKjfdDNGCAKY7a2w2GxqagVWL",
  "key32": "3u2X5CJNyJxDRHi4kCC2VQoDMNgLQPqj5hxHb9EMrhr1r8hso8s6RRgCcspudVPvqNv4BGyoxggK8cVaYeh5BjZz",
  "key33": "4G8R4EvqCPG87wzAfQhcK47aBftZe1huMA1iMFozwWTMfSPXk1J2SjyANPCvpLU3PnwFLDX2wQZAx8ZjXwe4Wya7",
  "key34": "4v9NpWnpkATuo2w7FXxZD86pRUUX8vfxKp45LD4epchE5ZsxBGVDjkCWBAbCi25gvi2V6bKPJYjArRViQvRopdq7",
  "key35": "4wWNfARtEiFowZ5o2n3jpXBQouHf3HMvFDAG1heLX5aduAX3Wk9vpkUnTSznC2SeVVmJjQMgL7T2oEjN15JkPc69",
  "key36": "4Nq3xGizP2oF95iTDkePN5SND5p8rByxiMgdGL33DFNKCaXuY3HQHVsUudUv6DNW8yVEntW5weuQdkkgkj6ghyof",
  "key37": "5F2NrWfAFnovxjvyDbKygkeVpWCJMV3fLZ1N54nhDBiPTewpKQuw95faWX3LHWou4JkkchnLT3pjCj3Mjn4pLgaC",
  "key38": "5Mih179NGpeyRAg3d2mcRzrrgpV59ukpqzMdHSU1wvkRvs9HWh6ukzvwCrbC87EirHB66DPm3EeAbFfkyeKLHoGb"
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

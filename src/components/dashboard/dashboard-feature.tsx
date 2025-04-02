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
    "5MHqzL2nDjiYsJAoFTkbu5HBXzSqyik9L6FyHQZfWhRU6hLbbpCyzCLc4ETHB6Bh5fQAayFgCTCb81Hv6c6TiDN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Rjy2j2K6BgDo6yJirT9aue2DriMPXd3jNNfw8mpVAtxnJ2RaZbSyTMT9LogPUSmhYihVyQwZPHexHuQouP93KpD",
  "key1": "29YzR9ET2V7SbBXyaMRj6z213b9VtEmm7ujDgfEp8nM2EwU7c1ebFAungzvf3YQ7f2vcHTt27Mf97RaGCVMfobhh",
  "key2": "ANcwR1Gw2ZLSH3xU2GBPAdXuUTPW8NBfsqQPPvSR47NKSFpS8Qqao67Kg4RsSpn6PCGP8MdntAm5m6QCHCquYuB",
  "key3": "5EdGANaY8YXR8bruGicwy42bFdxhBexbwrNH4jKxsE2xUmGQ9VCCJ85E2ENf9z55FvJftfZ73DfXxSJkwxcmS8zx",
  "key4": "2ee2XNZNm3pdyPTpGduzXyKitUEGVms1JU8dF2GvrUdKXXEQ8BQ63XLgTy1LCvejQReME7q5Uazqk9hFLVmGdqjs",
  "key5": "4K8LkTEvJaDH1EmQ54eifHPMN9FenTLh72ytycmnZGoMQ7QFP9A5Ce4Sm7b15rHkL9CeiS74BLgKDKoWPkaTWewr",
  "key6": "4A2UVbh7xGk6azfANoSKT5gZHVf9gzzJK6zYwZWUFTs6RGAmKHRHUobcw1C1YZhC3naEZkF9FFCiGF6edPWDF1Ce",
  "key7": "4Hqu71oVerM2UMxsuBtmnKVtL5vTAc3TquvEoNENJ8upkyC6oDxR7Y2qwpWbf55kq53jo4Dp3GPpg6zEbKgW9Nbk",
  "key8": "55BHXFPG2ZdALo425yRhtoX9CadXKtEPtjbmd3zvru1ejCBZwDy51toDaYMnkYxat3vf5LLSVVmHDPYJ23CpuUpF",
  "key9": "3WV3CS6gcjwE5G8vfxN9pwRyWKPJZyq7dB5aTfpW5qqZNgH5oEQBqsozgnEAVoYGkrYbpXQ7v5yEYAn9n7Sepr6N",
  "key10": "2JjC4gK5G76iFyP336oNKPdbyRytwwCCNv3tLs6MnoGMEAQhRDivgwNYebr5o1kEwvfZah3Tra1Lkezra9MRJh4b",
  "key11": "5eUy52Uru2g3QimKKoBQqJTsxMX8DweiNdfiF8JcRvXhNwAEXumbst7dgsGB2vxHUqekFqW7Wfkgey9XnuNPViVS",
  "key12": "5y6fYrqJ8smsGCMDfAjHxyu6zr4hkWhrRcJNE9KHrdb89YjUkhEcfHN4NLBZAdWVkA676wyp1uQ8YGj2C45iGxnK",
  "key13": "5TQqeissyR1BPZz2vpzqW2wpuSCPghw8jRva4DkjN7QKL1fG1Cv2jHGoB2bCRYksULssTPDFb9g58stgpCSLgFgB",
  "key14": "3ygDHhDrsbp9G32o8YQoGgkoeMFWgKj8UW7iCgFCF6VAqa3AUQoSBiANyjRNUUvdwiqwWA5k6HdgnVgheTsxicYc",
  "key15": "2GZUQmPPzciNxK31x5o2FCe6MmT6b5trTzePu8VWpQpvXeMZUvbaz3fbJRJtzdUPaqbJhJFDCZW3p2Pnzigt64VU",
  "key16": "5MniAYHTq5VHkTv3P3oNbw3g33DopsWNrMGVovvCbu11cnQzu6F5n3MYstc5sqUqdsQWk2K97SURdHsQDLn5f3BH",
  "key17": "6SX254ApiE222q1r9mCKUyHtK9kXaG2hmoH6PRrGnTn6KxqJyYh99Jp7SZ2oTu3B9LS9EUNW4TwPKcuT6o59h2R",
  "key18": "39ncRv8adSfs5FwDqXHM8sxvQ61vi2pZuxVhmokVih11MYyjtJvNckFRekD39ouRFZBrxEJ7QhPH75STpsspQ6wx",
  "key19": "61cdQkkEzCsMpsDYhuF289cTdDoApCwb71asgZoMCwjdVoi8ow8zAyG4166dLkmr3LLe5FQJEYT4d3Aq7GBJDhxa",
  "key20": "4UZcZGsQS49Yuwv8MdVzec3dyvuU92j6XzdvH8MjbsaerMeeWfAeyERZD1WmA9cBWWD35foFuSqRdkyRjPZ4AK1Y",
  "key21": "5i23X5dS5EriutNQnSN4Zh2UTvZ9K4HQv1eqNmGtHtSp1iVtbuD5LxKWUCPRVQ6VEVDN73Rn8WrnTjuzzvW3LFBq",
  "key22": "G5y2DKLs9NQ8YcvNR3oyboLMuZzHTPLXm1VftCYsEv5wBkFAwXorWpXuceqR5uGB2dHvawWmSikVzMenV7yo95Z",
  "key23": "54GR5gLX5xFZqZs64GbAU61Ubg7tasSSv8XC2tTcDtW4ZtwKt6vWwia8v4myBxnFtCTRhV18G8CkQSwAhm9NyLZn",
  "key24": "RaberrxZf7Ugk1NMqLwefCYUAVY5XoC49bEKGwV9DXLkxcLjGsyvKtPAkNN4uYi3421rtonqfd4bpm2DgXBJtWj",
  "key25": "2nrH4rxLysCv75doYSv1ppLDMFcfE3wnUXTSa7pf7zRddBLBjSa1bN1AhuNYLcg7oYhspuUFDu5Ym7rnT2nXZEf",
  "key26": "3rkHniG1LdHvXtg2fWSQZVPSxskZYFgWw8THSBgn5H3gVrUb4S4bco3UdNhXTcdxWu5fButEFhW7fkRS8s8GPGuj",
  "key27": "oGGrDw5EtD6A6d3U3aWmX4xBzvTUqp1GuoTb79uNQcsSQzzLgdCmyE5RikSKswYFZF5hiQ8TXCPcUjHSCJB7G8a",
  "key28": "5GwrZqR1Df4g4948nUkTpn1ChbMN7YE1X7AJsc6WHFvrZy62hwDgm7zDNgVt5rQSZ3MJReWtkzr7smHuKJuVpwiS",
  "key29": "5LanjQw6GEYp1DJBbmppQdLEfpqHWtXFfr7y81UvEoKwd7tPxaEHCzQN9UXCzQUEEPLCa7Z3NvXUeheq9APvR7yV",
  "key30": "9NkW5w834hAZgabdQtKmPdBqsvwurodxtVYGXiTXEaCwCUuELthwHCdAg2dAXExHeEkkMiZBi5Skbtpth3EZNtd",
  "key31": "4VLaSQqqyNWjav2iQAXuUXRKAsQz8xM6UjbEsigHQsTxhVRhGhynfDpYmqSyCmHVm5326yXWTfkeFu6DzyqVSxWt",
  "key32": "5MbU3nRR2EoGdgFsEW6xG6SvjpizLxsZcnTB7MFM6rAxffYChyNyDCxLuVysn4g5cjShTuCdmc4gBoSgFE5p9YfE",
  "key33": "5oK4sorvn1cvwv7YSgDtPFCS3rHCDpjSZcHPCkfNjapMfZ34arBrXtUDTudx5kn7gcUpY2zksQTF2Hx97zarBGsV",
  "key34": "2bVXtMAp94ekUUvdxmSbicBgbem8jDXmuo3PNwWrbWd2wdXVHBp16eB3hLdJgRrvScWTwxS19Rpb1B3gDUmF8mxQ",
  "key35": "3o7hr9A2D3T8QVdvaefZ5XfG3Vu8Vtm4SwNy7arQ5KA2yTsR9DcC5io43k8r6rR3BHaZgWaxG7mmq4vEbRRJRTC3",
  "key36": "2BKJvQFUNcWhoQyVG7vHLBqc7dK4GBBABuxVM5zYb6FGVGgs8NMoG64iPJ83Ln8MvAaJ4FbmzpKwtFAnBb54aBjK",
  "key37": "3N9vSRGemhNVmr76zpgsZrNroTNEGd9zZ6pwPuacxszeqhaxBCTGus682KMs1AX1hkgfW79ovyU6naf1UbDwkmHS",
  "key38": "5rToJ2BKhDTMyfqQCUwqiiZBmwrgviXM5nmf11a6VpznpMqmBALp9FyisTmJxr8Qua32NERFKgimefcGwYSZ6BmK",
  "key39": "wWVPUNJfsh7dV96QFm4kg5SmtAV4vmzd5zP9DtDXreQkZRScEYGMsXzwhZELH4YwQsekVvhhN8HvyHznuLSfdbK",
  "key40": "2aQqqwJyY5yBzHsW419WG5L7XnEi61Cu3u4JUSjkehxwkxYrukZaGz5Ac7ETG9V8UXTeoaaM9x418epQJVLUHVGx",
  "key41": "bJSFKKbPTR9MkDNRW2KZMpTTfk6NJZCp7nT9n7S7a5p3gacQiKxXbpfhSZeXhjysoS3nZiwtnrE5ZeMd4SiKVFu",
  "key42": "tCZnTH9GgGnb2cCAMP4xbxV4hkt55zUMaTg9EwmRQkbo6DkhZQmSyVcDZmMJ4PCNzqSXBYJ97DuRzkvNg8ZH85U",
  "key43": "2d36kNRGuYrkFtf33JVTmBCnNmvN16C2dtia952bhg5bZHdpW3ksK5VpeNY8iCUUyqKitLaehHmPcuxchnEaWfht"
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

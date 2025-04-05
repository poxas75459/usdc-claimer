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
    "NwdvE2eJWPjxysiLLWuPLWvdXXA6rg6zeiNUSYxKjfjVuohr5naEB7gkf41kCBNuYTC6qXEvCao3G4URBJxnFcQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4puXyGsetDfLR78VcVoyoc1ZEhmJW7YwJ9kjPjKXV3PaHAeeDtR2cqhsPGJNxCUnRi9PQ5nzGWRwbSP8bq9xSdSA",
  "key1": "2aNvEXQwUdBjG65AEB4zSqFfjqU3fkQMxYnn1tw8gMExq6Tx6oGh9Gn2UwFFsZepzY2cA9pWssmXEEEdhomAFS3D",
  "key2": "4gWTMhGEMTVzqWUv7UdynYw5sBA8jRgU3kFgbfMhohmvovMLA4BjgaExWLM14ZwkRqXSBiMQjjhaiohbi1HAnaB4",
  "key3": "4af155EHNxAs17VE6ChkGU74psAK6mZ1sAMjVoybeU4yRdK4dv7N8A7fwnoW4yFr3PwTYMWRVLEtupacVWw2hL76",
  "key4": "2vUroi4ddEUcstPuSzCd7BWZi2D3XdVeLkZkAbS3EQYpEwvF2rJTjFLhcR4dbYFg4gvtnfoVq3wzg29uxghRFbV7",
  "key5": "22hfcTAYBtmtQx174Vwct2gMKa2MbJ4NM1qA6DCCuxfmyP98pimVSrW4ANoaFVzgysbWosEqzyKUwaR3aYngMVy4",
  "key6": "3KTYyERpWjmDHxvoP7tfzKFFhFszFQGf6248LMFtrKGyPTzNndG9MY8QHiHHjx19xREWp2DVNyJj5B9hL1jyeSuQ",
  "key7": "2wtD5gSaJUprfSLYobouqfoh4iNQs8jXZ3m5nZwXUWYxargTzPepKH8auZrDrSSW3GVdAcj5RJtwPDFzSGN4w7rr",
  "key8": "MH4jdYZQfXccjHSWQ2QrJJqv9fMopEqGRHffjxsnKy2e7PZPcrzP3U42aPMjjJDuUDx1MHf3qghaLnr2uBrrsdn",
  "key9": "23oQMSkY5EcdiXsgedht5v3yV1ivY7J44DqvppRVQqxWsUfPJ7GWapN2Eu31wYqkEvGw7URLRBEwJvixeAhwW1Ab",
  "key10": "4By2NQmCEiECPZzDQ5L7xgBxG5mHMeuAetTcxa4kwZUpjCLXvMDqP5yxEFTyqVQNPWsUZDXcBVjnqJWGfq4951Sg",
  "key11": "GkExfe94baWaUsUC5XFXMReEPCAsK6bDPvJYkhmDDxQv7RJv5tULyjbPqCiXrnQAAqjTRNcC1g3PopXiBLeD78r",
  "key12": "2t5cb8ygQFpEmchj5kuSi2LhdhUbD9EpDUPc29ZLQ7TKx52YqmG4Vo6xCKpKQVbeKN2bG2YyUHh5p9z5uhgKJSkF",
  "key13": "5hgPsXUqY3mQTwaappUkbFp4qXVvd4JrbaCc8KgQtUaJRFf2iWurbsEhkc478Kr1dewBgrN6zHYVRKVCRKvKmsiM",
  "key14": "piHRYzgeFS4zMUDX6Wxri4q7J9S9A4fhjV27kfVkCsWXfzo72J1DrnQ1oe88HjAjojVjY54FjxmLhRUG2EEre4G",
  "key15": "APuJmxUCz2Mj4CpoPcUpcP34G5xSzPukzPKZVNmCQWR8BoArQooxMFN8MA9SdEAF32CXwheTpxiRpuLRf3KSBKj",
  "key16": "2R5VZmg4aHZNeRssdNpgBiEkdnq3RTyNMxrJ3UpWP5z2j8UHVosvtG5SBP3TnurJJfuTPnoUY3HYvf6rYkZyhALA",
  "key17": "2qCrTKAHYyytcTBYG1QDas4uj24XGKGq3pxkgpnWnNvX7k4R7duVsBmdFL3nZfzeZLY5iAhEqbczY6a4jy3qCTXc",
  "key18": "3AvjfA61iyB56kfUHihSoxMLJbymJwptoyj73nQSEuBBAqiZDJWGYKPLHaZ6qA6VdruBZWaF8oub8HcKu5TSBbBK",
  "key19": "3enYnfzM63sN4uJsoxKw357AZM25rYuec6wYJAXfXkoBiQiubhpG5YXXx51EnL2Jhx8oY2uzHhMUf1z12FfRC1j5",
  "key20": "2d8jhL4AzgUn6ihsC5bc8iBGD7SCKhVYHEokLNHbgsYnJjrXQsv6pKLV8NRo2NrHJyNpmJbppwKjD47NbYzwfPsr",
  "key21": "3nYFkm8wfXpDpxMaSzKtkMFke3ngHQvCfyPy9QsFTLfcrTJJahKVuGsqiFKncJuCwEjYaskH4VA33wfz8BwSbXd1",
  "key22": "3NoVRC3eLEMGAJhcYkrV244BVoKVs5TTwcXXU2bXQXtY1MTsgurFLKhNDWMsBPLMoY9tH5Rg8YLLxcan9VxHxCPv",
  "key23": "5rSk5ZBvqwBpSzFx6x4WzAsaTjhAiCsS7EWiSenB2xorKVGzk27guq8M4vynGbdjhdTYEAV2SUFG8dS8pcdn7b43",
  "key24": "36dfM9x3afKVXLPTwpMfwgFNCxMh4LeNNzpMCcnfhfkUDwRAjzagng3bz1tMqALSav5Cp7qTSz2cqGfQ8wXQYPUZ",
  "key25": "3FYA5MDnCYRCVJJwVGDybZSsP8BJU4K8KhxzorXV78euvaYhVEePiQGNYe6XirRdywwtWNpvvXJzVL879m4tHGnz",
  "key26": "61Wd9AAVtb1CTEwk4KWMFRHFGeTEFNqiM8UVyUxRawLw8t1kVAM1PeMFpfyikjd5jQQmPkcXbH38pjDqUKcK2TYT",
  "key27": "48LWiVWeAhrk8FTbGUjNvH34NPxSKMpUvbX7t9vttnyNa6SvTc7UnMeFHQMRZSZDbHKy2uspAKbPjxWhqNa8Uru9",
  "key28": "3G9GZdp9mmBtxCyacxbgpWEoorkXdvidvfeVBW9Y87ycwSxATLVkTU6EYTFVUiHfqs2FVguWV3ybHF4jaJnA9ECq",
  "key29": "5P7R9fwgnwPk1gyu2ppDH8UzUeXHnbPmxgUJL99StUG7qordVZVYE5WT7pM2Q27ECJR9enFKZQuZgveC11exo7jF",
  "key30": "3KNzFEVfNWSBTjGkZyzX21w72KDnFw3KgHHfo97PyArVftkjcmX3s3p41zWwT2DmhDTi1ki5kZ1PpPSPwpKrpqLi",
  "key31": "4yQtriev27z5ftAv1LoA5qFmBPms39HpvLvDTeXEBNFM2orwCNqD8ZZWLk5CzuYPVN8AiPBNhHYBEmCu7pEMGGBY",
  "key32": "3m1AXEE77gUW4bnEr38TXJupVbCVnD2gBJbCboNMTXepmqUeedGaTN2BctbPU9MV1HnvH868ZPNQzdScxsxKvYkz",
  "key33": "4Rf3Tf6mtL1f298cPvPYzCxdLVrrrFZdec3R1uShQr4LaccoEUKtacKKsPjKhSz1o8evW3oggwy91SihTyHRDWUp",
  "key34": "3WVoNKRKRZMa59hJQVCcH1RfTBhhiSFtyxPu7VcUhs6mNCBJQmxDw6GDWPxyxzTh8fgvFZRn96UgPk2tzMCxM1JL",
  "key35": "57buBLgfDCvfC5EUXVfAWT5UX2d53cDVGaAYNrVhYfuSQoyUDS2QfHwMbnRCTRK8UhgUYkMMotf7dMrQG1wG8Y3z",
  "key36": "48cZP91pQbtnvpSFLRauk1TY32iVuZL1G2Q4KsY4Lz78uTf4BzQKUEUKeVUGdvncCma8Zd69pA6Ay6Egwzf53fjs",
  "key37": "5Z8Y62WK5mjsnNREvEuTvTLY8hzFZM7Rfzkv2mV9tKTDvtEDoP8Sh8CEUfrAXBJhX7U4TEZdtn7f759vBK5zJayL",
  "key38": "2sfamHExpVSMaWxn1pH68GBEh6FTLDwHu683SeMLtoLfZqDFCeV99WGaLiQewsDo2fFF5yjBurn3ntqju1kDBXVq"
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

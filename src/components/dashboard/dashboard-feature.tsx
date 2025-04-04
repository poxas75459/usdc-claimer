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
    "3A6gBkjztkZAmmAPmbBkwTvPYaP8gFkn4r3xxZxfTa9WWmmsh3zqcWmTwnfNPAVLWqpj7JTJSTcEuapjv38jZDBC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KwveiWUBC8W6VWg5LbT8iTVHy2JWD1AQ2ejrR1kUx9gu8jnUXGmfaxF77bnvczgEcjUDnYYsGsXcpsgJHL3x3LZ",
  "key1": "5bRtHnkV4qwXF5FiFAf6rw9r9Sg4RfPb7q8WEv7ebaAm3SZSeiq4bmxy4XhYFcVGDxv2JDYeKSMFDmaQDodHjKYY",
  "key2": "gB6tjGbCXwrer6PP7fBwSz2sPduMKkujCcLyQD93wsBt2Qo2jZBE7qA2jSXUxbvZ3CS5BHGt8gbEnSWW6Knkm57",
  "key3": "3CpegemoQS5Hcxzu2s2ZUUcUHKRKYPtibj2dQwkGcDaL2zSJXjnUf4KqzPHJBzL8WRw1ygTiVK2j9WC6qjy2izag",
  "key4": "4ZYuUYgEAqhU5kxTiG2DDidDP6bnMUPZBRJc1bocFTr5WKDkKwF2sUpEhGmeBhfHMkEzC3shYMdGDBpAity9LMYe",
  "key5": "4sYdkoM437M7G5hwTPLWZzQ31FiJRFhucNLPSnVyY4qHz1KjYTHeXgQn1rK9Ei4rMp1NR5rntY9fKmzkUvKq7FtR",
  "key6": "5JDZ1cnCmz3TGBKnFMzRY1cgwUpMkq1cNMQhVeY619pVdkg3AJCnyXi6PUgmPzpAHGesq3MS4pPBbtrvnSsdePC9",
  "key7": "2ViRQrqoGjigJozLbYKWG1gPwNGQM7sTf8VC9KCwYvuDEbaLALRsxXh6aP6Q6j6QV6vDNa65FBGjaiQmrHNaG8iq",
  "key8": "4hifdQtmNBddBVPNvctio9PYM7FdZ7V4E7G2ZBTtxqn1sXEywkYbhbucaUoA5MVHLs29zwk1j9yVRyTxokzypWsJ",
  "key9": "NL6VKnW95fYcERiurss4JVZC9vsiXamQuFWwR7sDUHbm2kJaL5Rg4mwSpXDuU5GF3qdnHrX4SqpP2ZxteUP4tvo",
  "key10": "2QbdiqECjQFtuMXioBDAgeyjKEMSjYkwqZgMmWtLgMQh54dHXSWgqTKSoATgHNqiw6Vvmgt295VsM1mdvehbPhPS",
  "key11": "4GXeRvLF5FmrAL81Z37PUT1PS69Mx8DuGBUqdk7xQSvGKc4XT9kAjvWC14SCeH3pHvuNwT55bbbZDRKanSiBieon",
  "key12": "4vLUJwWWwDmNSaCTEewu9XLQnoduULCoVqV4Zcb8bmC2eSaiLJf8gPTeaC2NnBeC82zQrfCL5UBzgTHmboZvxd8j",
  "key13": "5BVP947wa3ZsAZt83Y7JQUT3fYCTLEgZ6wueLdNmXa3H1aAUvUZF1zoGyWygbDb93mVBkEtJyE5Knrr4t63iPmST",
  "key14": "R3cA5WBZJJW9Q9BT1s1g5tKxDV2eJKSufzYBUuESkNV4M3Q98UTvyUNL3JCvBHs7fX7Z8YUcprV3xZjdFWtBLha",
  "key15": "3nQEtkDQangVkZrY5YJJxNX1udYiiMWtuh4nVTbVd2HY9atenNtAY17xiaaX1eT25ACMcqPk2GfDT8HM8WkqjeYE",
  "key16": "5iznjbdFFMLedEoJ5aRNBUprjM3i9sFPwhZiBgskk9Ns3haFEhETdCj1NsF6QyjfWBk6or7kEjXrqPuPuSL5LYkb",
  "key17": "5S2mJUnAmJVD9ZRmDrEsZS5K9vinkryQpFWvWCu5FLmrb38cya7z2vsTxUM8uSdA5jdXMhpJRW2q3FXcK1CDCK2R",
  "key18": "3cEJ8mdVAfQ7yLc4wnLLDFruSG6WFeoeMRX2WMLnFU6ovjGbz31jhN8e8NtvYQtp2YRndos56QxnPC9zmPgWmnk9",
  "key19": "3GYhdNL27auMS7qAe14AxxF1cJWcfuBWnjzTy7eoaFt3QDSSHqHZQQh4dAVfT6PhLmTqXcACAinu4HGsWSZZKmsW",
  "key20": "4rHLU6qGKLDFDKv259CBChuANAa1enzAZLatUPEDYBF7XTXAHLtfyy9p5wq8ymK8dZHUro7KcxxTW3GAHXqs9wEm",
  "key21": "4ocp8QFSxjiZhTbFJusDSqsa1RCzco3XqZcoZMiSeerNb7uP2CmJLiKzardhgMuEaxy2gZv8evWQTfJR1J8fF43S",
  "key22": "3qdFPvAGrmg7yLXru3e4YPsCD6XC1NbNb26vRzVXYNVanG43ZfTs3K61RsexVFz72uepiGHSDXhUcJ4s4LjH3Ruc",
  "key23": "5chqM54EfHaprmfTCR4y9ZB7CRSPVJyzgBrcc19z29EHYSZRNvWiYpYTU6axwk399b5kdr8UU4GWNmc3ogxX2Suo",
  "key24": "4zCJjd53JA7SJGQPv51nGSyygS2sqcRo7kBXt4KqbB3oApHdjQN2HHnQUonwzuzE8Aqvho7VSzPvqnjYTbX1gbuA",
  "key25": "4QvR9PLRzaKc1MCW4xu2KFtuoH6SMv4ypV7xNssp3hjGGGCUY5RGSXtoEswYMmgcFxhdy5n7aqYntgMu78Ejyu3y",
  "key26": "4C3fNLa5PyTG23fFLMnStJjjyAyDDxnEBtsykBvRLidF63YPnwoSNESGv8mtVZG5etAANDPL3J2Je1R4uFoJxUtJ",
  "key27": "3ipdX8U3NMeZWRn647DBbPZCgjL3tfDyJibBb3d79evHTxbocXh6HzKWWWnMUaxCB63g9JsK1q4hgKUXmCr8Q5kw",
  "key28": "2txLvDunj9WuaTgtyaLZc28nqM2r57XL2YLt5eZJfS5zjQWeL4udL85eKQXBF2ia8bEriwfo61s97upFH4c639JL",
  "key29": "tnTFzLkfxdEZfHPC4LxLGmv2yb2BaBErNLjWHNqbBx2oApavaeUhxLChQshgtguxKTjzyYKg2cicJWrnQHqFtuQ",
  "key30": "5CxCwideQFK3v9w14YSTBKTh8ksu7wmoZCuv2ynYFsRSdxjNp4TDpcbBbcL4rYzc9uSQMNUEp4SqDunFTXWigWmX",
  "key31": "52M8dPJLwYHmYbSYuHFCKPmeCwzhaX2tSxtDymgdEMmJheLHmdVz5w23efDgGPC43VJyze9Hw4feyftAN2V9YART",
  "key32": "qnYzQYN4fro4rAjCd7RNffTEQF5R5m648VLXhzFoEMAX92ph5TggCYKnhpv6Qk3JLosU7GBMN8hYP5T4hEEGfvr",
  "key33": "2Gp1ksFVoZ5kRppJ69HVcN5QizWuaw2T2zwKMdW8WjJ5bzXhhBeiZ2ymP9dxF3hK4haxgDgkvdgLYHNLWYwkhCqV",
  "key34": "5GvqQkp6beDXiH6pACWXvMqaCS11WMBWnEqWLKobygDckfzuZ7AN1ehwaux1tyuz8nPj2s1e8bryWC6h8GzoP5bN",
  "key35": "sdGwa7s89xkXy3SLng4F28DvGbKyrvZiv3QmvYZL7NAdFpxKSthYg487mKtW7i15DSrKS2L94xAsgL2XX8p4pVN",
  "key36": "5dCkYk226VVTcMTiKP1SeyFig4HUoQC5dPGoZdnE3gtW2auZ4w9nrfvS3dcbYnJjF2cuDSBSoysugHeJmDeQ6ueb",
  "key37": "3w8ah2ApWAkuo7qDjuZnjYTu91QLJ9LGdXoGvEL3bZ9Tsh5bgyypiznbBL7uxKh2uBHrog54zUGZFjH31p82xxSD",
  "key38": "485W5w6scrfDzVU6HapUaiWgsGpivfcpJdvk5N6fJqVYBn46cdstPoZP7pWUA2f2XrLFqbrqcNZ5gB8zLVHErL1H",
  "key39": "3hRJxiooQReaxpznnaqTxA7UThJeUvRwqLLQD2QqwuVRBocGBVAZ3o4List5Tsanc5oQaHs2eSQTXB2zutpNKzFC",
  "key40": "2UAhJXrbgXqNVBE3LMMMLoayj7GmzG2Mb6s77FJCCzswUvq9mikFBhsfh5EZZ6Lwq1yxx5L68FZWNaxLZ5TAJ1Eo",
  "key41": "2cHRdmXg7NC8CJCWmUQfTuFsU74W533bs9nVGmSriKhXXqocy9SSgjT8zQzb4SXDwrQg2KEQzo13wGoRfa5xqbeN",
  "key42": "vRQAUXMRRs36Yu6ufRfTA4D7VES5HKnh4oLzzXCm3kifwrzU7s7gmzyXf9q4VooHNP6eptDCnGnDh6cpqeuadjx",
  "key43": "58vojxFHQTPRE7XgxJ6goLiD9hkmhatRZkTE95EjyFGqxxM8rkhEyksSTanBczhvLmqmjG3eUEixp5BEy7kLLhPz",
  "key44": "fJZL2mjrFduWnpJga4gkiDS8P6U7NjZs7WNS2hxQYP3E5LXm3B3BQm1ePXYYiT7xiXuWXgZ4Nad41wKLjZfnG2b",
  "key45": "3ki1atpGaVon3ABjYkYA52snFAYyisQA1N8dBW2zhF2FKMsejQ1u9U4op4MLnfhpFAuntHM1KfdRc4DqfZ9bb44X",
  "key46": "3jEQ6iuA6DkHgiT9NEs7vgcvi3tV8CifX9sJd4C3uYSX3dcPnnGSnLxZSzDVXM9ZDv273Hnzd3RFsVXQbmxWg589"
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

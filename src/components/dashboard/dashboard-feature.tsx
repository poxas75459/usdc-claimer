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
    "2jKDFzALrCWPJamzDpPMk3rwQnHgk2njQCeXrJu2peHRpFSSMSoadSbUxMnzA2QPcTFh1C4WSmPrUwzziPfBajgX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eB7udwNoetJwk9w1xVWRVgmC27vicdy4uSq8ggxGtfXHFFz1DgADQjJBbE9g3oCteevh71tiuE1A4Y3ekgAAoTv",
  "key1": "2iRA4LsTRQPAW5cAUUXihQz2epcMc8wCjBaXL7k34rpwhZ21UfoPmPhZUE9sDmFdRW6FPHFUnmk6ihvA5gEPqhNL",
  "key2": "34stF3VSoqjXqRiboX8NQNnzY8iziXtFhVgXzgEbCte8bxcGroDExMHq2dL9y587wL3usi3wX3CnmjvLn2eKSPxS",
  "key3": "2gPHoffFWNWcoSEiyisp6f334yMWFPqcYPSAT6W9VJydazoG4evcSRzfTpjvXPKGoMuQvHefCqv4nAUwzJAuJGZo",
  "key4": "5pm9W4L8DPMiVojGnYx79gqScexDaGg2h47R38LmwtEmQFddRDxfSPEk3SD64WuwzXZMeWDMAWedSPb3sPujxba1",
  "key5": "42TJ5j9dYkv5m3GqiSPKMfZ5FzttWgzTaaH5UdDZFYPAFu7K4TVGqGSxkwUbVhx2n1VGgpoNvSoqAL3VfrzLVCPQ",
  "key6": "1tjzBcMX4N6SGzdd2sYQXE3NVEg3LXd8BdGRfMU4JXkWwWwA1kiCo2yEvy8ex5uVCiiqDf26pyipfwwXYyXhyGm",
  "key7": "5sxW5LZ42aHDhHnEdEDyAqHsvseqKHDNAMikm49FaxYFuzNRoECuA1iGYz8ogvB91cNXcYGmTyeTov4j8C4HPsZ7",
  "key8": "4kfiCm2Z7oLmpfwdjFwZvqDVcESYTiELDpkAB5zN7CaPxmtaXETfjbrDbkT4UmjWxwoWCWhqM6oWWVr1mWvucM54",
  "key9": "3XqBZPUbGHeFN7svM78QirZefESSzWvFhSBmFStRWUeZrfvAuDkpEpA9GAQpXxr3cNaxUAhSrDjmEgFwULDMJgAZ",
  "key10": "5GBeQ3ozVroATEh5c7N29zwupnrEB9r1qQXCVnfF3DNd13tszieq4fHMRaQMQu4FMtwpknptPt895vVgASxzNhFB",
  "key11": "5LFzp89m7u5APLt79LYiLn83QUTn7h9dhpqedewYJoPyjNGg9frLgTYm5Svin4o75wNVcrnNfjdUp9GnzLUgabQM",
  "key12": "2djBsvDni9PjsLGjp3fPvCu1Wgyt8sCRChfxGH8LWEsHsf3ZY71cxHztZYp2oBBzZFXDr5PvRx3S4inZg3iZe6t1",
  "key13": "4J8QeY3BWHno9pLv5cenScm43Lx6Py59nvq2UFxeAeeV7gnwDYT23g1WSqRaYZ9mNqPKrsiFHWThppgYsvoLBoe",
  "key14": "4pq92vABZaVLrYsDSzLdPJGMUs2hQrwj3tJL4PDUzoUNQnDyAo3e6EPhNnd18TziPHvD6cKjyjjXv39EDJ9k9nHj",
  "key15": "JJdt8KwJsGDeMXNAGGTX6k8Z3Dtx15NxNwU8daow5BzAhqMM6WNN7SqzQR4VGjG9Dad9R4DSuWDuixzTUCnWRHi",
  "key16": "2GywVjby5U9jtXzKtrZqfr8ASvYbZKHnJmJCx5DPNaLDbD51g42QPiADpPs8UQPNhrFTsC4PopBYnBe3AY92Disf",
  "key17": "4y5d6S8A5rxxc42HZUvoxQVZAt5ZGV4pJYBX9XEVLvBKZy8asTDJ6wzbnzaGzPH7M9X4Pttta4Q4wo8sk7dZa5pG",
  "key18": "3EYPa4dizAffVL2YTJ3ChdyVurm7nnkTh4tPUU35veJvLFAytbyk4fw1jUPgPFTzcR9omeEwDP9kSt6GarQ14DA8",
  "key19": "4f1tKG7b7VBK1kTQhwS7br3uRje5jD5mvDPhRB36ejBzXFAA2fg5dDEzTa1NVDE7JeHHTqeohbjuefxnZyMvCrDo",
  "key20": "48iru1NhoaevUsp1pT32NJELFePGr5i7vPSXuumpgD6rda5UC71bAEGj5Ais3YqVuaq7rFfEZa2NbSYKHw6BN42S",
  "key21": "3YqPqFFwJbCtWVCcz6gKPPFgcDjXYvXr6UgHQGhu1TPXQfbWffhcB3zWsw1DTbyAtWMpRp1LLiCjaXLAxXfUaCPV",
  "key22": "286X3cqu76B2Ph2A4WJoRZ225FGShpYfKQhf2ehV1PctYxKsbiV6w4GrYX29BgpCk569JKB63CA3jnkqeKWRdJTi",
  "key23": "3R4K97YhAG1P5HE7HNtNGtVUUWJeAatFor3gjzYBofED92Ga7nXKnaEhqo3CHPZ5bLpCqFJ4bG36oGXmj85FTut8",
  "key24": "GXvF5Yv7yPXNFxh51WVMA8DxvkHnQABYgyr44RcsCQXKkCnLoDo9AkyJwuPLtgLoVPyW63DUGHraEY9twS7U7Y7",
  "key25": "4CLAGcdJDzVpjESuwvnBREdsCudL1z5GxhjbzApuHynwWkULhZsF7LSESRYgBHz9nb8dZozhaNUS9gmRnPmz2aov",
  "key26": "42PyC1yb91AfgrqxyHryWUtKzN9JEEekCdRsfJ8YoY2pdJ8cNkticqcatqMpUbCEUt4umyrP55nJrDap7sNSyDQL",
  "key27": "zq2m7LotsZkQzbcTDhmmvsXuivtt9W3UaWdYy4atA3GvUaAjat5BVWzjy9yfSkoTbVLuseQjbPz4jj46jh4YbKv",
  "key28": "3BApQ3ktKiRTX9nM7onMoTLS1Z5fpT5H5GRmvqDn6QGcPB1Z87pzufi2RH7KN28qNzbzJLAUdacL9jsE4Ye6HiC3",
  "key29": "3VFhYZdB9JF7siG61UmsCzwinXXyJXgTEUaXuoyt82kz1audhDdibeg2SoBYRHsgJdpve5XSnEWXuTFV7bmcfv91",
  "key30": "5jaEjBumS953T6KggcbZfdU48ApUKv8NhZiQb5DTtAhfJYn9Evon4g1BXsLkyNqWvNEeuHAYtU87ZehqraNSeU1C",
  "key31": "2jSzNDqZjXa3WiLxpM72ahJPJyaASnvWHhKSGVENrAYzyWMHSdYrtX51mWTjfbn2Ag3TqubtDtaSap2Enp2yGfTt",
  "key32": "4w9tPoA6uAecWuyJPhY1TqcVoVG6dhspGpXETiUk8y9qf6GkC5etfGit8rcX3z44jpT3hGru98iVfofkBg81uTzb",
  "key33": "4nGCavmYo37bxtXJdxyNmisyvvfJh5S9vbTu4H7PzQ2NbLry9nRxghPVQcZQGnEgck4JZsseNsE5z3Co5TJvWmDA",
  "key34": "43wuhNWjrekMDakR7fLjgC8dP2559ai2nvbBvEUo7js12aFc5ikB59dBypPciajA4uKemPwCzaaV8NqEqo2SPriW"
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

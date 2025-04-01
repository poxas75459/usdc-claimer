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
    "36p5GpTJs3mgUr1zP8XzJe1C473snA2vKKp9ZgDjZ2pbuaTgPtmwYH3wYahDcyXG2ctC8Ta1Pi9VsfCwenbGfTx3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QsVdNhpozA9FLAeCNXq8iPSBaFwzHLmHh8FeWHLJnXagG2h1NEXCjTucRm2pCQjtcJ4NLPdHUVJzXWQFc3wBkEh",
  "key1": "2kuYaMiXgrr7ezbQmRPtDzTyqJKAo8iiTpKHao86J6N2VPgpGkLX7ToW6eqMTcnXzziv14oQFLGqrRsTMdRRiDF6",
  "key2": "5b2w5LcpcibfiXcwHBPSpPYmUs9vn1MwGtGtw7ptVbSf4ELxyd5VQBgEhsbhjGeTZMNqBug2nNW71DqgeNAbHoDK",
  "key3": "4DgjRAtyfZdCXR7bcAxchBGsHCx7bS1MCptqkvU4eFnzfrrbpHK41dCfEtJoeXWwT13624DXwf1ihTAx7HTLLbvq",
  "key4": "4xuVFFXJGNAw3DaUEF3TtXLJJBFuRUNFicg83GzeMND5Nb9HmPmPz4dBDotxTAwYMUrGCHeTbBumCCqcbGWHQLG3",
  "key5": "5m4U27vPFJvgjkuzCwQrazUJw9LKZaa2HPXLguPHcxSgzYmMvqGWpqHVmDbvS7dyW7BfkEDy9M1Dy7XsQFdxdma4",
  "key6": "3oeipDoPiyALvi3MudixP2ytKgQGuNox165uHPZyQazUL6TZwYbh4YCRsCR7WazjDuMCTbqBQAY43WATAC18uRS",
  "key7": "5Q8TMeFFhzsVhu4yw7U9FWkWUW1c4ggwnfyePAUdssnRqy4qPUskdSSmPc2sZvz668kUGGBuhxUFkHJ1XFrFEfnn",
  "key8": "2xbCaKv6E9t33JPt1YUjiM2NG2jdRhoviAvNRKgTVFCh88PV1ke991kpasZoeQySwkXVNtrvKSBTRjhnVmfF5CnT",
  "key9": "3BRRj1D6dPHA6yPJiUNWWP4DosQLKbx6cTijBbAHDKtP3ua3cSocYXR7UDPebuhqSozGfjsaY2NYKCwqS7Cwp6ky",
  "key10": "3yHMRmPkCTPVxudcytQMyvfWmP5CdM9fxWhQ3aBSij7UHHNAfDBdZHc2oZMpjQvKXBdpRU4b7PZtWh916Tpuuhx6",
  "key11": "3F8HBwLuPv5bgn8bw5TqfvKpHJbhBJL8ML5AvFu44kAUNLkSmduj84Vbze2tTjPmhpW1ca4r3YoruUFKvNjMNTLL",
  "key12": "5Smqo1igqRvyJJKcm7eMBJ9NepmAZtqixBB4YGxv1cfBHEpGuTk6FJrdBGqi7SxZw2pEmQF5mQ4xdxGf8M24mTkY",
  "key13": "36WxLVDzuxDDira2vUJy2S9971o6t9sw2amwceLuj2usV6iTPmPHe7yec7JjPtzqVFHa53G8n64E1Lc1zcRYJ4dU",
  "key14": "5aNKJrVa4NSCfDDdVoxyzQ1MGKqyVJVVyWBAkHgAxYUrEcQsWSK7bxcNNRwehjnnHZkRBh2vFFWx68XZRSsvno9s",
  "key15": "4fsJZMBqRsWcK1mabA8uTvkcpvCmBDfadLeutT1o2Dxs1gxrtqisiz2h8zoucwrQqLdud4Biti2MJe1iWLVBDB5E",
  "key16": "5KkRYrcXVvfeksg4o74qjLHEBYX7PToDggRZsXgtCuA7BMW65EqbcHShks9yJKjwVZZRrMkLd7CVkTYf2uGBWuAr",
  "key17": "2E7kBRGFoJavxw5oeSynVVPsRg57vQUscCL9njZDMCm1DtPYCwUjwHeNWWwMv7am2fT8YtZrxRoDPrgmCLSo4tME",
  "key18": "ie5Fz7wEgrED4ryfVKwgcqBnC3TUHNNoUY8YRYXpSMKhzpJgGxXmf9sGQ9ipxtoUNp6TGsE395S3oQHgfa6xMJG",
  "key19": "2PsX8teSLDhoeukyS6cz1TagBEJCJexinpw4z3SdCiEovQyAuhstwH19F8KcqYRmEoosUe73KuwgVgySonADS2dc",
  "key20": "23xMGL5jTu6QuVfZyRvjwo7KCMemdF5hQnzMRweTbikWsPkAks1EbnUyvJAFVRNYbQLNvg1YdyESucc9tVnRBwsY",
  "key21": "5pf6jeb7mXCPRT4c9y6YrggqeuLNxmhF3sEfcVJkJrHZmmBXJ6RbGsvV4aw897jKHHnTpSP9CKQm36KVDdaAFcwv",
  "key22": "4Lp3yE9n3gFaE4dzzcbjWTxrCHwMv2HxgLfejEJ6sdKJPEVUxDq5wBD61GTxLAraRuwUwVihZq6mwNKKrmyfprgD",
  "key23": "46P66Hp77peQYkzkx4X8bPSPNi1J1bbKg5DJrQtT2RZqgJSaKsi6U5T46PHaNViHzyJXdqaAHDpFTyKQUQHSAeo2",
  "key24": "Q6okYGXGZ4eeGzxPsMVb6dZrcqCKphRz1gYNehRgor2q3rwbuq2DVEm9yU3PMTv5kqNRBBp4gk8R22yq54Gn3LF",
  "key25": "2E11RcChWD27AAWn9zN268FLjCRaTr31sVV3C9sLQefZPPKYX74JW32XufZPU3uC11u58aR98BA29FUKmciye91n",
  "key26": "5GwHDy72wu4jUgaDgXDbEqrpzSE7Hp81Mn4G1JKXfaDyrbieXqUVZisoHaYCzaDgjM5QUjyFdZweDNgSzkCSpQ2r",
  "key27": "3T4BxniZNNFq6uBdT6ijvDqdwkD8CPMoU8g8Zzgb5vFHZy2DbB7FWFZCNTkcH2sWAEp6gmvuDycMUwus9JMbd3W5",
  "key28": "4mPW12xzfB8QcumiLCDhRRzVN7KZLQXsTTQyNDVx5Mno3JMefnunjt8Yh6HtyJqGiLBbFmgjfyRwfK7xSodRfCVS",
  "key29": "2MnDFza1USNL78hRHBHbKf25PJsAPQRsJxeYnVmdWqaYgy6iAdEQMuoHbgu3Peua4A3KePbMeNPS6uxmcQHgxoSV",
  "key30": "4V6HSsZNciTcHNHcEBkZdAVYEMFqWL8d4DHWHhK8cgpzZfhXaaLM2S9gsJj1wgYaabe8RiACQ4xAMiBRHkako6v9",
  "key31": "3nGEDp7xqGiBShvjvKKstyB9Ne3aBrMovufsDvNwZSSxugtTB9CAvtExUgpxgUxH4XotAnFiVcYaaZnmuMjGHvAj",
  "key32": "E9VED4fvwCMELrCFMcPJJJVAuQPEWfLFuTGex4m6Tnq54vseVNPQzV8Zhi8i7HSU9YqJHXnBdDqMCFBnTpmA7jN",
  "key33": "3JYCRDgBCwBb38Ez9SbPATrUcwDSMp4AWFRxqyikGSUwsaVRot8X2stEQNTMwj6k2d44BNApt4nSUYikWb571EqS",
  "key34": "2eiSsH37gQyUVtJEX1AGQyrJ39o1gHtghRySge3Doq2fpzfzrmZcAo6cPtddVzyVtGFmA3u5FJaJzXVfhfP7GwG5",
  "key35": "3jzB6hGEimg7dkJaor1acs2PZcBhNdRWHXmtkP5w4ptHfX1TryYn9U8VLoUk2tcKMvK3tzHrLEVyKc3MqnGpfzbJ",
  "key36": "3mR66Dvg6QcutWZ8NB9iCLwsX1SLjdxnd2eGkrDxt2D9j3GRqpUfHyzjWKyBGk55rTnkiW2zhHGkzbLfKQQ7zp2e",
  "key37": "N9tbysFfWyojMgDNoLFTPhnGEGfKLdcJy27TouWi2o2n5NkGS4UtKXyDUxsBsXDADNAbbymDVPGG8rzhbawooey",
  "key38": "2z1MrWqEyLnoSWojstxxLfcXYFVt8r6x7WGTLarNnNq1fLPZqT7QWHAyUCEmSomCrQFai7EiqsH9vhbPbGx8F765",
  "key39": "3GGh5oreW7hcnZL4U9GUmdhkNjXitfQRVEs5v6TkHm7ibgjXz3BB2xtvbLZr3ypTdJurprf8kSENpGMV3hdQSFSY",
  "key40": "3XfmVxGzqoKqSfMTizR27PnZfQWBvw2WMEwAP2J12HR4AZ2K3DKMU4tWDEjQx6km1QgJyg812HN4BvR9PHCTjUKN",
  "key41": "4eo1qMNeDd82MizNWp9e2UdERYmXxie5Dv871B5Aq7G8cWXASFkp9Gx1Zdhf2B5Wdc4irvPz7mkhTCaTcXfs8cMk",
  "key42": "2uZsVfvStMTQ9wCq4Ng5pyaSAXzShCWQfYB8eyjSfQn4Cy1mi3WGCViaysrY93FSzUsLgeYYyiMcVJ6oHJw6GTyH",
  "key43": "1uRANknQGqNaYnpkPU1yr43W7irvVMQnXVMoj4v83jHRXKexbHEevBXDAEG2hjbnDmw9SmiKTp8S72uGgJ1pUgu",
  "key44": "2DoDToeNjZbDyanvKtj7vidF9Z3CZCKe5kVdjMBhAaQb4eY7F5SWTiffY16oZYVLVbKTGvmP6yAuvUPQabD4ZjAd",
  "key45": "AS1vZEkJEZezAvGT2kHgJt5J1sChG4kD5d6Hi6S4UKn4c5XC9sUUwo3Cx8fHNxMBQjW13KdFBnbrNi2qveEmezM",
  "key46": "TGAq5wfnRXRFjNz8V3F3iMhE456pQwRyCAZNuh5Tgnta3sy5zN2PekZSQQtBmWVrSNqMBMNEqN2rEtpbmKb3xtV"
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

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
    "d6cQXA4qFEg82SX17betrTquPxxKQa4YPhju7iATPF7caju3BvcSc8bSEpKjizoJxR7hFpcZZUhGwuY92aMbjnK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E1D6xvtGFMw2vsnbbgMn8bLac51kqq1jGv4VAAaDzbD5qon9pvEvWJygC2EhTNsiG8yKNagPXvYMoKnGq5RhcTs",
  "key1": "5ycbf1etcdYXgkHKFfstPEcVkjiPQSJxRPDKX1JdMhTnq5vQTfYvCAhTmuxbPUMyxc3Bgw8votSpsUU9yzDktHxb",
  "key2": "4D6SzqB8ko5KHXMhppeAbXbdQw7XL2BD8AobmWSkAAQpPEPyKZjiUinw2rM6UnXCApESEyioMhmKby8jX4oGSJZc",
  "key3": "5v13ggASXGCnhnMbtsPFxFCSDdgEmHhQN4BH6ZJZwDV8NyBcEjf2JhZvRT3RZyHtD4QxRzeZbzU58ubPdiTG9dV8",
  "key4": "3PtoMmdCAepWZ8ZeP1sdVGWmrNoaDhhvDSmy4UqZrMmYCXAJQ2SQr9wvVHaDEX1wGjY8PETH6uPxwdB1nrTErbXT",
  "key5": "4GX8V5W7K2Bb6Ss4HMHmEr6kPoKsz3quEQU6TfAncqz3AGD2DT8UazgGLuNyJcGYwnahfd8mc8KxkESzAMVx4eCy",
  "key6": "2AvMS3scG6cHgT2KeGn3oN5YYUFnfny1THbSGh8ocqScjCviX9Dz56PwqE4Fm1ejgt4Uk9DrE2Pn9oBc3ikfKK2W",
  "key7": "zWbqZpb3fPCyhJ5P2kmN2X3JJkn9z6MiGF7xMKLQ6p4Eo3iyqmimEuZacnY8n864z96BSejt3NRQzESMc4auaEZ",
  "key8": "3jPdvxryspprb1HeoVebyHXrmENRpWNVbyi2Yho28s8Z12XghsRLuQYPbzA2MfvvQd7KQ474zrzFtAbrWRRRASdM",
  "key9": "21Pu78YQV7EjN5co9dcRCiar2UyjbVUWbyXfrttX69xiDTFcGLyjsBLdiPsvjx1PbhnHcD5UVTZc8dyrxMBLZ7kJ",
  "key10": "5xBE5QZ3H1U6GJjGYmwKKEBhC2dSs1Q2DSDPDn4raM8zwEPoKAM6VkW4NrXmoyXatomAiu3zHHiRwYC7yAMJ4JMF",
  "key11": "4xGq5oeAqSbci6PePZ8wFWU3SQXUccSonhfDuoFi7LgLCLgR8BvYRDttspzSMiaCMKgowrKZThTNog9iJrjdWdL4",
  "key12": "5pNH6DcH4knM1H7eV8fkqw52pTAeHzNKh6vdYAfXn9TugvyF3anKvoz88TRWax9RGmrCmmgVfmG4r4xjYeHFCUmp",
  "key13": "GfTBzu1m7gFCWjhy4aGgoHYLYYpAcEtKW29zN7Un2inWXJXFJZLhHVddgbSGPj8Vfuw2ZPXdbtQKT7czrJvgprt",
  "key14": "4jtAB7mDqrCroCCW5ZCqT1uf3Ew2L6tWgSGxXMv5pWyhurruP3mexNorAG3YJ6G5HV1RoTPyvDDdNMW6oB6kzJ9a",
  "key15": "4xAneKQtGooRJXDQ5rELa3p1sWEyiswb4dFkUprndGL9pBLotSn9RHcGzTu96jPdKtZFEtzWit1rtCrgLrfVcgB7",
  "key16": "2ChqicCGXpXijR2HrTBQ3K3saKeDT15pqFwJgjYRqzXAMua4bJExzSnCf1Tg3wF1vjCWaWyqkcZhhjfK5duhgfMX",
  "key17": "5DtNMa83FKFihCKJepLEQFdfYSgeuRdyQTKxmPFb1GzLpd2JTnEs9Mod8pVu9YxJ1mpePh7GbHGxwmTphxBds96W",
  "key18": "4mxfEH1S5Ma7HYB1iGLao9f3sfEd316KUxjC3VFiLA1s5KWk4bwxzEhddAqLXDQjd74PwC2mu4rvVuyoPurW1o4j",
  "key19": "b8P8Zwwf1mbLxSRndjH2QeqHC593Lqv9zn11FSCP59YCKSSy9QwdfFgX94ySVik43Kesu9SN1ZNeeUzSGaKPX6j",
  "key20": "4BryFMx4SSFPZJwwJgSZrDBiwsLD8zSoCnYFtqL8Czx7sf5CV87mEErs43BGAdRaVaMet9EsFHwWudpYTnQ3PMht",
  "key21": "4nc63yLCqne49rab9g1kGDZFvsF2dK3wruSE9a9xnZHFENT6B4r5DwrKH9NSQcmVbPAdUhgcPRdudTo2CZZYYLww",
  "key22": "fEbZt9NMZjw784wzmHJ6BidDNtSTCAaWbEmkU6DqRaNnbAqGj8oEWjRaeMcknEKThugD83QJgpqtCNssZZfRkPm",
  "key23": "5EZp7y3BrLeCfHMqUEcTcsJVwshFvgCnM3QhN2FWaPXvTnGmJH5CTpM9LKxRjrRXdv8PswpVM7CivUsRTSTEUWrN",
  "key24": "iaQwrppbu9bCE9nPsamuJWpfaQvEjA7qUw6DGq6wXDKWX21qm3vbd2msnd2vnokKP7KhvA4QhuyySTbQ6KDZTJB",
  "key25": "3iusbGr6D7wa4E5vtbuHcrDJK61CiskEufMBJ4SbK4MBWVugGy8LST715oxLDN2L2zmSPR12Q7nSzs6MrfKa4Y48",
  "key26": "2GkMPugwxuxTaFdyjWHff2vhZMXdaVUZajJJTtsw2QrNF18oXBm9uTekf2qxNtfXBMxVnABDELB9NxpQuTVAuPkL",
  "key27": "4CKPp3FP7di3U2ED3caWoZkbzEYkTHoxoDMGZnPW4KCLg1sqPZCnMHe6URK74988sku7FidLN4sL8p4p4fu8bkhT",
  "key28": "3izvpuc5fzzohhyJfxbn3D4Zr9QLbCas2QpMzWM2MPD6Emvb8BXsNV5ExFvDhUjbapMpT5AUQQSb5JcPaf7AHKQo",
  "key29": "3v13pHo1Mby7KS29eKGmKGgpzX7CQpdHBwWaYgJpSgWH59wf73RKRadPtxdNMztKKqQkEf9gFPKCis9BUGY5omks",
  "key30": "3BaKxovBK9hT1JhZTjQozwn8B8ntMFbzNaNppy2tGxnPQBSJb1W7o7DPZZidWVnwCCEws1BMbvF3x97scggNLxpe",
  "key31": "Zoi6GLKSydmvhUhTfnmXfXminsXPchSZaGcF1FB11fqFPXTY7pRf7ZxMTaqwvpnunqibqWTponLLFmPjB364NKD",
  "key32": "TCZor8qkF1GnRCE9XMnAc28whnvmfwqa9m7aCxzkg6zqT7hC9H3fkHSAgiCKatqosRp7keeQtGJL8eHzqiwHXQs",
  "key33": "4iG9jEMDwbsF8VEBwFKsiwjQJ4CroNhHnocKX735ug87fnsSEMXFwHW8bfxP6LHszQRwpJgZpVhbEiJ3dZTDaPjt",
  "key34": "zQjpDsmHK8f3w2wZnGvtuLXoUgjmz4s7w128KNTi3GejW6FopvuBEZhhCoZdWPPNLLee1xha1DyrqPLQWnFmyuj",
  "key35": "mAgcNWkWPvgrpr7PuDmixgYftP6kM4ctxPWiFDF2nyfb2GNcwUbDjgqSaHbbAoyJkcPgJDJWtSX1aPoTFdP6smn",
  "key36": "2hTNCiABCTrnD9WKCNQKFHHq2D4kdmw1aVTtV2umYPCQWRctJEpNMtiwvGksKn2ksHgjqSS4mBcJaZL5v7M3mYns",
  "key37": "5exUc5Xg8QYTfJi6LG6ZLBALF7VjBpdJE3QAZnGg2EiWPpZFtiWYia6YB3LmceSbVZ7PV8b9vuToe7ZDmu7DkBi9",
  "key38": "nktqJtgAH8Zh1MkwcBVLcWKJZ6vVnMqKsPMGbtnJ1f4wG32K6Tvqjm6STbtnj654tKmxmMSCiQX1NReJy4Sh2mq",
  "key39": "4RGorTtx4xQPzXbYLGQ7fT71gzmqdVHJbrZicXoyxbagoQSoxjL59DCgdDYjL4bdwAv9Fe8ehbEKsBowbbqhk3Q4",
  "key40": "W6TVAR2XCCRWt5SLPYDgaV9cKj8xTByLRkMh6j3HsHAhXBdpNwnJxc37xekZsH3uxaHgkfbBKvXZ5maZ37T5gNw",
  "key41": "53GiPMCimD3cpyySkoZfPKvk7v4ePLioyNUGBpzahTajWLAn5KPV9eug1KUzueK9sRMkrrsRPm8bDbpA7N82NEHx",
  "key42": "2XR7XYYumNemWVV6toVC93JrtoxyqkZkRWaRFJFuXpuLqX69ejrikKinN1Vs47sVUs6gAWDzx1XYcpX6nRUSNLAh",
  "key43": "5D8LahmWuhKpRfRQxd86rpjxW8z2wMGWdNoFRuTayPuJi6GFGFaQ9BWAzXBRJRUxNkuyDuxrqFgB7UhbLFzrhCsj",
  "key44": "4cHE62yGv5cPa77og3C7zgeSxFUotmQfnRSh9d1dZsLchQE2FHNeXxzZZiZMGT1atgV2SvPgkBTxUn67mtHNRaXx",
  "key45": "4D7SHBwMX2SgWz9ojTiTkuY5gG7RxxRyDkd3GfRtGxZEtzzs2dfY4pLVnCSsTMVfQPvkeEu7NcUcskb88tAm9JhC",
  "key46": "3QtjPU7UA4JgXnXy7rDHArzJc1QHPAV2TXHyscqzW1dJoJTz2xGejGyoUy38ZRrC15554h7ckFzxTEhPnzJJQ7KH",
  "key47": "2Lubf8RM9ywhBkvEGTRC3jfjugkSZqLLomeedLezp8tKdz2RV3LisS29hDyKiU1WPDnhKVEEWikGQSnDCmPCfAem"
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

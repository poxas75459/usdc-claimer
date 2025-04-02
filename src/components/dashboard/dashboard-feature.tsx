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
    "4AnjRNdNAKDStsLByeKUDErXVtcBmu4wUYx2x6pBpSEicd78UKzhHWmhLVW173DTaqvuqgC9EvVHqPkrwTer6JAk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Mv34UGT3S76neKgfobt7SmKQrK2KVWGeLp92xb7kGCdaF6wpaXXB8h7UQcT15bhhdSy9tbyKABq1BnxdnaPTVR4",
  "key1": "5kHytRYhJftxdNiD6RJZAesve6C4wNB8RAxpnck7gcWJM2pY853BFjmS8P4TVbLkTSByS1RQBFk6WT7jZAiNtR5W",
  "key2": "23DPRaL27F6BKQYdNvkCHAqr67E976QC1fLEobf1acu6CVjADCRnxawuN8w6YC8sV22sYqixrh3fQC1YA5soVKxt",
  "key3": "2n6WChz72B55Qbj4rb7Rt7thkpn8hG1NpuRAgFNagVGbCvg4R61p1MBS1Q1DRw6ousv8Rz8FGBuWgMPKVBSFVyqG",
  "key4": "2yhwfAnurnG8JeCVR5aLzvyHSVY6NnDC75PeWVXm6zkzbcZbhKAFe8L4566tB7g8MUMb2ai3Azubi7R7NFD2Dq2T",
  "key5": "4p5UEX3tnrRFJ5sDZuUTKTTS6AfvWAhXB5wJDDHDRqRuxDFYd25ngaPgM1Fdb2Addc1pjgUPVPaqJYUW6s25ALin",
  "key6": "2oNpCBYUDUTuE5R2g7v1DekidxLyhmVceFxZmpNRJkPrZwSrz5ipJkrkDg5T4i62b7bMvXrGz59nqPCVGtArca16",
  "key7": "2hxzrYPCtyD2Azr2stRkPRcpZQmmdmgf1UuKsoDDXFC5VTugN1r7zpjRTpEreJf9XScxTpXK3UyvQcp8XNQG8LMc",
  "key8": "5nJ4FfRiJz8AFWs3owqrNeA8ucAZ1zSdmnR4sm3AW8SbAvHMLUNynENsyqSFuvFfW7rNcZ6a62QiM47RVV78QGs7",
  "key9": "2nfCfgCUT174UHS1b5VJFChbmmhUVv5vx1rCVyM74BvktwhmFLrB6KVweoZVQVoyhXjgzQWyUF6ewWRwreuJo5yB",
  "key10": "4XCaFsyM2wxafuSMGYtnhGrNZmtZaWBxK5wKRjRx3QZN3d1BuVNQdPQj6JnzGYrXJ9MLnYQLAAwNV9jQy6og4sBD",
  "key11": "kv6knEdoosK2qChs4g9iQgFqDHZch4SniCpQpK5pbHDVVi8TL1p92TR6VTdY1vUuWgLpSm5V2p2YYMergitSDkG",
  "key12": "56fsnKsw7SMifzNHybXq3SW2kDDTaxM7d6Zut6BG2X9bPsdySwTNXDLUYaH5H6p8GREqmjoFdaBBLQ9zeGy3dviS",
  "key13": "oY984K4iBEkXZh5pxzE13PhGXY2R3s4bPowJKfRaHihM2ub3Voxkvq5vdAmLnaXcsoBur8m5BMu5g4z2vKBfQ4r",
  "key14": "2Dd1J9DXZGNJXdpLTEn8eMasXJqwzbZhYSrfqds9jFR82jy5DkVmwywm9YGH3u8TGD8Hu1rAkuF8Vf7VJgaXWB3z",
  "key15": "2aRxZJ5SmQoBuRPVo1thEsdhwnT8sBDCnthGpmgMX8Zn23ZmXkpzwWvSndwesPYDr2LrD6PQdENCQLe9pGbfEgQa",
  "key16": "3eJEd1u4KWShy8f3zDBmke6SDELxygEnnpBHGVsERJpiFwQvFYb1BeP7vpXiMzEYTTDx5BDbPjN3YzPpoKFf1QYM",
  "key17": "2PTmWHjRkDMzPQxhikrrnT68LWGTsqfp4ExFt5uBnuoqso6m3Xdf8Qdm3VreKNcJ1uC26vppeZpZeAja274pVw8Q",
  "key18": "4efTp6mYZvG6DGassWVKhN1iomAdsNCGEmbWP4P74rmdcKTZpmiT7w7b2YNXBSmxmR4CA8Hcjwf3CwPr5cBEMy3q",
  "key19": "s7s4vi92oKMiCvo96jmLdWM5uCQz2qXvCcPiRk6BeSkz9d4inzih5XvCtSdocQDEeEK9nxLoEnqGvZwGUKpkUVe",
  "key20": "YFqLJDERnUrZSreGfdtZgucEfRGLxXJSo3gkwwiQxa18vayRM5ucYkwJoSkJM99bUeePCVgyKsH2ZApz9hoMfRW",
  "key21": "XGjQb7TcRxr44xuTi8b8xuCrYxFNHcK6qRe3e9KtHQyKLZTe6wiFN4Lvo756cZvkf4FVsSkR7xBUS4rxFPumXgA",
  "key22": "5HHDFc5GPtP4NZfFRkcMUc1SwEsKyKzZ6sf7GWUs81PBycJd8XjRryC5KxQP6eZMwsrSSNmNcTgGiB5LQYPsanCw",
  "key23": "4CKUssZw2T32H6ZgfeSABDUHak8o2cSUHBYqQ8S4XW49mg8jwhAUkdbwJMCbser4sDwP8Dh3D9bhfezKXZKZeUt6",
  "key24": "57L8Ey7z394zmDrBatGN8YTKzu2Kpc52p4EzC2fTTEiPase8V23Jqxpk7pfHRE2sBED7DtU8xjNXNfjULByCbysB",
  "key25": "5nMWBfk43sRvxNxKDshCvxRDxiwCXypnCFwg1i2pbn1WGL8EUcnALJomBWeYAxyEwL7wzQF8WwraDtkVYYeenJ46",
  "key26": "4EaWjDqFajnjWxYtADPF1puFRFzjCQ6WxUmq1uZUEsxbUvSC7fqn891VkZ3QujfBDp22GZVW5sqA6K31uPYWjzXy",
  "key27": "2vrmMcgQ6ueMxF86P9k7w26w4Ubz6j8KwhPnBCHPtkdgMWdviftZ6V8Z1RV2n14sr7ruVjB9k18cLhM9jXVafwbP",
  "key28": "5GnR7SYxZhGViR7M27TKfn5ZBsAiqearDRhVv1DCVi8Knjoz6XQW1GwZ2KkdqtAEjZj3u7Xe8tqgwjndQcCE6nM2",
  "key29": "5RTukUBKbAd4jTJvFDUvNC3t2NHQSKEPyCP8r1AfKTopfmxGYKV114KR3kCPSM6hvAwTwCTuE9H8U18fgp3Qioj3",
  "key30": "mqAiKKatyBaf7uWPnmoWLUAZchL7tNqG2v9L2M1m8UGHgcwL2Jdj3yLwZXKxJZajsesvRp8wj5GF6T3Zia1aLMr",
  "key31": "3Vhh1QJkEjx4ZA5hBf3jmxj9g7aVMKEkQjg26kTsv8XfHPf4M32b5fSg1VnUqcJqB8sSDEq4SrLDtb3XUQz8pkLa",
  "key32": "5yguAM9tudAc4R6wy2Lpu6N1jnYzZPBFwS8qaDTu3KzyvsqQe6vVCTFL5mqJr63PVGD1ZomCwbrmewAg8Wf7wfvq",
  "key33": "22aAdfEsJ9UFbvxSDhY8uCbicxzVzBvD8sGQswS5XnTNHYXPtJ1XEU6zy4bpoP3yBmbUK5ds3iaiAdf3LV9XFJu3",
  "key34": "LU1GNjguecDXR6xWGWDBeD2y499CJQy6CnYuAT75f4z1M7mbvqbU9A3xFWMEm6VJfxBPe95tKAsHGjzZVxZYgun",
  "key35": "kEmm9AagbUnrHCCUyYvXLNqWmHzgCmGg6n3ZZ64Khr6kyZzThZmcFy2FuG2pFgYWF5w4PVZitzCDKu84Yt2zR2W",
  "key36": "3VVJgNt2sY1dBM9titjczXFbhSCy4mG6P6kMHMXiaCtvgMD3TwaVepEmq6xHkT5qgPVKHWqL8NcFtQX4QT3HDK9P",
  "key37": "2A33K5HEhNvSU4QGjqZoY17c17Cmf8B575BqcNCP4T1huWjWp2SzBKAyze8eVoM7Y4wgnbs3zAEsj35TrMjsXjSh",
  "key38": "5D2QVVRrWtAu42UVphE3ffwJqCBtLiPA1oyLU2iVs815DnJHa36gzP1LdkRki7yiy1tsq7HDm4QCR2uZBRPtbabg",
  "key39": "BtL9qk5JJYRLhwui9Gm35RiyyLkHsiNKgB9dYMJNmrSFQsvYnd4STK8HUHYk8nTNydXd9xG5VT2LYKxurv6u8v7",
  "key40": "zJ9g2AjmJiweD5QQMeTaYDdFfUrw3aB27pBRCw9KCwPwExw6ZAYDZghDiiA1yxMGz1NRa3BfVb65XVrsUgSWXij",
  "key41": "3MUSDm2rAp4gAZfD5qtdZtZMMQ7BqWY1R2aSRkfLoDNWHEE64sFkaZnfABUgyw3uw47c3nSWHk3Ga4xpa8q8azRx",
  "key42": "2pLHRA6x1CsQogDRZFsiw55jbjXyrCJ7zVbss2DNfBb8JihRgyw7brt7tDhjW3TRAFMCSawEShVV5sc4hviA5CaP",
  "key43": "3MetdwgdnJUQqeeHAPGSRepMfjKY7r2MuSZVHYvt1Et98BPtii9BTaxozm6zvAhXYoGjkvY36MKhpdKgLmBdP9fm",
  "key44": "MvFjDFU3ie41peevp2VAGiEK97ZrwT6zq5FqaV2DjGVGEXi5L1tbPSXuZiqNHAHZidkh5wos3vgB6rz8sdDuiRk"
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

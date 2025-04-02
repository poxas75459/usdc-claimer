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
    "3hSPKnr16Trb8uWaxr4DdsKZhzBTzpzjeMMPwTMf1mekJWdTKzGy4QDxEcZT892ETBfL64KMc8KMW8pvQtCQvsQv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a5a12YyhrXY4sioFkeHmQZhmTCdmr4Po1zJqWEtxMqavTEWedqk5wCJ4iRwoH6Kx7Sn2czHo5SGVtGjm47RKdiJ",
  "key1": "2U21ATnWLqGfAhQ97FpQbLaKwTwF4dFt8YMX37AwYamZwksnDYXh246wwob3qmSGqBhC4iGjdmYowQMGKGXqSArn",
  "key2": "328k6CpQBtjGA42grftcjgWmSBTEnAK66ixxjYm3UUX4jxypBZuPjnq63tVz3H27y81aH6xBLuDj9ANwuQuLuCzy",
  "key3": "2EuSB64Qkh9b1caqjrxFU3uYHwUHaryDMGqMXLdgL3gZqvJv4sJSbiq4x6A7d1C5UMKF2b4ByKvd2BxGmxkPPYgc",
  "key4": "5YqUmANncWTULyJenEKNRAGRH1vGaTbwd5CyonqsdV8jBvDZ28zZChFmskgigWbpBS27cU5uRTb1jWDVhS6HDvWs",
  "key5": "3CT5SDC2KuBw3j65bCcBjLM8nCMEX21WKNwXHfpbXqE1C5FPCgGk7sfLFLF2Ngsaum19vba6Rc1ZBJz7JphSyito",
  "key6": "kPwghWFjsMAqqPBfVxbyce46idBB43R66iNbApihaFFfyq7sbkotEkdM5q6ChLVh5PtttKML1PSLyWEtkkmG2CE",
  "key7": "r3UZYX4hSiXo7CYMPkPLVUNf231XZ7Cri9TKXWT6Cq8knSkpKyD8Wk1qrn9JcspukbnHRLfaiffT3aUPwm7i17o",
  "key8": "4zEANJB6BnMTue1KsezDGrpGhwtZ3K46sTJey2wsWEGoeVGE1X45mKX7Etric2N8hF5PvsKeip53UQYi3AAhwzbe",
  "key9": "3xBa4fvve5WrpQbYpFyZVXcgSAfSbHBaT1iqLAPKGNE3iUCapYh7efMfKmNXJAMvL8maiSSKANQkH7tnsfTMYoJ8",
  "key10": "3aayMXuGs4vusuamBdQfaURp8xB2p58C2UvUomzzGHoDvZH2Rq5Eap29vi1P6Mvk5iFGvgz7UGuRWsgFARtjbXFV",
  "key11": "23N9UcnRARp7mK3ASDPn1i8jLtNmr2Q9FcRXLVASetqZHRGhwLpGnHadn8HppFbVaGMxo9xJxy25bGjW6ccM2JPJ",
  "key12": "31kxb3vzUnPRhAXARNQKSYmmbG29PejndqTQCVd1uHKbCgAaLddKG2PrrXodeRFRSPYpdq7ajnNKnXPqFHkdnRNh",
  "key13": "7WpdLPAM9QHP6DEyMacJBy9EoXwTvsMxYaw9Y185bKcdrq7k9XC8dgymxFofB1nhqXHDmyyiebLhJXsDSqad8VR",
  "key14": "3Pvff4FdiK6ESMyH9XdE4cqc8itWZ9z5HX3i9YeNKsAPY1cUAWNM9zZL8x5c2E6zcKNchavRYi2K1eU3DJPhfD7K",
  "key15": "eNBbV3YGd8dbgQMPGxYt3nhEAQinQZM4rNrbeAZvHopZ6gvYhVpYV8FBuFthTw6zmfn7ESHJxm9MCCTS9kDxFWN",
  "key16": "4w8GG5r54AYjN2opMCn5DQyjLR8dZpM28hTQqj2URCm3z4HKSxk4eQCrmVD6Nsuiivx6dnbe8wKfDxXFY9cqrDXG",
  "key17": "3ukz8EesTeq4HEymk8V5fcVADFTfCcnCrm6TM16uRfS51wQoidpicsin3oyzqvpZP7HsRNQhvkUrXioY6J9advKc",
  "key18": "3fhihjRozzPRp5QPBK93BvVS9xyQ9mE66pMVFE4eSx1a17zMwxfY3MgC8QyrfXXSE8NT5csMBJHTwpwdFZVJhSUT",
  "key19": "4tJzFCkpJ3Gxo7BYMhrchoTMJCnGmPS1xQHjW5FpD2BxAMN4P8PRB9XRaf4gB8me8wFxgo1dm5z46y7GnY8APNFe",
  "key20": "nBMXoDn8G8HsGorvzQMxfnDNphUDxtFKZLNpnp6yuJHqALAfK96gCVKpGLx4y6qFYZdvsUvL2crmQzFTsN571ys",
  "key21": "2K5GtkryAvVsoVWqiY2g3S4PrB7i1A21QVijGwdhLeBsrHBcCHtkFan4eRP8oUQUWpfALrxtCT2cihPhQjJRZdUD",
  "key22": "5bSnt3Fv6fwkaux2Y89pFDNxdHT8q8hY6HLWU34ieTGb6MmH1T7g15ux7Mu8bJb2XFZFb7kFXJf6iCUCxwKGrayR",
  "key23": "4UAhr8XBvMsP9PwsfuLsRneUpvWCiYwtiQGxd9hDqaywM1yE5iMpauhJYDf542Bkj1H2qVdqmyx6dSyurssboASt",
  "key24": "4WUVobRT6A8gAiSjqGQhvLkyAT1LGysegz5ShjRtcKLCkYJM2TB7J2YEaFYBGN2Ycdr44PoPBR9zFqNMmp4MApQz",
  "key25": "3EBT8DLbLhEmX3jt8VQRDixMLrGnfdkjRwuCkD1xaQcLWZ9ZzydDnxd1pc1kDKQ23XPsv3X7d9qaefNEXEFWcTSh",
  "key26": "3nZwquddZ4mBvJepXWwwD5m4urqUyTEfV99ayjTW5NB7E78cE9QqfX1V3Nqq6Vk6ntZKmeXTxghymQDohvSRVwLR",
  "key27": "3Vt5AuGXExkxeePCcNaZaoRWbt7y9Tq1nNSBTMPTgPug51uTbcmBFqdNRTxHnvFGBUfgQMprESK5rNGhYeFxBY2Z",
  "key28": "vAZobdV79yR22JrfuaYKmtCGDTrX6uz4iUaUEgA1yFnLTJXUuDXtpqUPkUg6rFr1SVJCzmFqWAw1JknaSyrZKEF",
  "key29": "2tnkmdnkHzck8iLoGJFbixCmcWiHNgcXwe4zdsgZ2yQBhcfJFVhvqysn7wiTawdJ5MAU8TBtLM3Vh2N9bi4GE28W",
  "key30": "3phroPDDLDKJfzNxLFavP7EkkABwWUG7CpAVSjySqKUVbgjyYJbX49cg9ZHL7BFfArHKQaUVfFiMhmSZz3GSRuP",
  "key31": "4NLVgk6ZcP3WWxKixaV1MYvMxdPzhtzkFvV4nUKRBk8M4gv7maE7Yx8xRqHjjor482fgdAE5SXFMnfTrzuWs5VLw",
  "key32": "3Es5fVk8SNfZoBVL1npK4bJzyvNy56UtQEJKjR9tpQe4yVzUEvz5ptvmTV6tmbXFb8UCZW1ksmcnGcvnM88kGpXa",
  "key33": "4TxxFF43d2vDpVEPjK8omqXRj9GGPYEDCgJetnePx26T2x963ugtNmXA13PCEG9WkYieBEXFs7QjQXbN3D3WdhMh"
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

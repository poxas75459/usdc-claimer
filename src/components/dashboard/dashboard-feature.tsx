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
    "2t1qhGeJ1FopH4aqHVaGhzciAAtDwPJvDmBer8NGFNuyLNkL7kQCegpFzrzvz36ArbqVu57mmb3LfAuKZzSPFJWc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GuyNYcQaKme6Y1RzU7RAk4cxVrb6Mb878kQmGRAb4HEbUD4pW2uVsMxvK3XppybgvPVSxWUDczgNybLU2WeGBo8",
  "key1": "5nQQEm74YsCkKqgj3A3FzKABw6aQdCZZ8rg6B4cm5krPRZruXMjW7wgUXht1TCv37NkwoAy8hYRyuUxgFZ497wZ1",
  "key2": "2RCrYHF4qK6CWcgAqrSwhm4xSMNH7bnNcW68mtTFfUZCoXrY1KbckbGegZ7QJGwZaPHGhcqZiG2hRmKk2RxoBxf7",
  "key3": "3qPHM2ddsU2PfuR21SnmZTogy3QdkjUNgFachGcPdxb26MGmnEUjg2dzNZwan9vh8kzDF3QhsE6Bc3Ek9Hvm7kGi",
  "key4": "52HhSGSaRfRy1jibvrUR4cEJ34reqPMfjt4zK2u7Z5xx2gPBQmz99bAT1wKvq9qWuVvR7Gie2uoP3HpBmG7bYwV7",
  "key5": "65sRGYxGF25fEyctAB3ufB2XDqxFwWG13RWu146h9SEcXZG6hbsAuJapK6jKGeEHkvy8VQ5appkpRhXHMSUtr6Hn",
  "key6": "4ZAMhuTrgNJG81qCQKzAyy9VwnA3D2NVWtTvu8ikpKFW9UK3Fnfdb32mfXwniWkLZyv37ufsC28N4Gaf3NCfWL7w",
  "key7": "hSX59rJmPLxmkPZfEkNktAvqbGDqDUPHK5KNMPibPTGdB438rLUs7rsAV5ZfJegLaAG2wZriRHMGhn4bDkLiGR3",
  "key8": "4DQhVYsk7XssTTbQwA8pzWtHHC5RuuDYYkjWbvjC8i3LNxZhUhN6ZqX8tqJH8oLCyUwRC4hjaLBHUc4ex4iqsRQL",
  "key9": "3HPM2PYMyuzGGPRNxJ2n2VGjdCRSQFSTxjHPgGxALtvd9x1ENHbxmadVQDrLn4qoDxLikweo3w5LnkLGPsFKuvjW",
  "key10": "4XzSf5Wn5PLLJtkX3PYCrJh9fKP97kx6EkMRhFeMV7F4ZwN4NemUeUCAsEuM4BBDgFJBb2dwqeKCcEm2r8LjvNwJ",
  "key11": "3esK4nTFAdBrMeqjP3wWZXkmrXPtoRinya7ZRXbZgWwXqiPG11fMZWGZDef2Be1vBQiBDFANXbJNfgkxPVxK51o7",
  "key12": "2yjrn3Lqeqno9t5BVHihF4B3KAf3RzEZzweFFEBAGuh63VZxAsC4FdirQyrexNzmR3mH7VTtRSNafdkHpY9rnEB4",
  "key13": "2y2dsoNQr5aHvtphUqcBJxykeLFCNcC1ZG2u8uApURWeFDJVq1b4Grrh84omzT2k9pfThAPubwHKm6P6BL6mXChr",
  "key14": "5ipTYKv5iSNyF4KpiM6NCDLexFDtcKT9tzxwoBrRE3bFUU5De648e1zUUHzjiU3YV1Z55EdkCXLUmwxzx8fCow8t",
  "key15": "4XUgVTHAPwxq7Swfasqc3AGrhMGFBF6mpJ6urhTWdXD8Hnv54fk22XhaxxBq2cDNrVMeJzeM2X3XXYDpJH8hRQ6T",
  "key16": "3Aa3MPXoQZWSPzVgWYZZQMCwgFUNVBc9mQYk7bE7AbDPmcPwnKNUu82oKBtcdNFFxEiD8cVV1WrEiZYoQQk7MyZ5",
  "key17": "2NBXNfigvpCPb9wx7QUAJmnGCFCwjbQUdzexLXhuFhJ6a8kRXChoauo9dqiNPwpDENBBMsvuxxk3W6gyrv5APZ4Y",
  "key18": "5B6qnmingXGpWGKZ2bPgWRxFDpecbLtFHa6oyfzcYKJfH5yPtiSV5FP7YjjyqRrUV6Vyhi3s83zBbcGRZpfEnqe7",
  "key19": "4tY5w3TVst4vKBQRkDLevDwM5bbBbohEovW87UZjgfXa2ZeYcDjcRg9hRqS8xpdW6Chsgst2SkCLgWunYW8vVmCc",
  "key20": "2aMoyjcn6RLJiHcruQmHvJErKDaEqBcZiQsr3uPh1Fa2xno6xJ2MnSgZL9yd2v77fs6ChxK1CdHhGQYNk5HpSJXA",
  "key21": "4gwh2uJgEWkvLcJzoLAbF6yjqxSK9vPizcgmQNCq3i5Ke788m7BNXykbtAcCDn3yR7snNkzjxUfrEcVeFt18nYFF",
  "key22": "34uxMGRPYpu87GCURHeCaf4fqSDQqenWqyDpMJFjPCaVujg3Uu5QGxWnUipk7zw2oJzWT9GivzEZFQ2y8vNrsCfA",
  "key23": "2Wy2HBy9CuPj37sLXdDwJB124jZ9QJCwgCPV5izyw5VmJCyL6jfYmakZybT3ooQrNZmeXFLBvJnhFZa3Yz3L1s7U",
  "key24": "4NopBLtWWz4n7YP8zAGeCkkTDo7PjV4du4U39ZYyCcJyvBgVqAsatictxY1W1bmntcijyJcVXFWxkFydnNZ56uyY",
  "key25": "3gwoyGQ4HeHWEUAUGx3vwpJYiCGwr4JL5GESeEsVCZ5F4mJC5qdqf3d9gzqhgnmg62qcYujYPntxZppHCyb7GZtT",
  "key26": "5vfLDEqgyXqquMogHfNF9z15wwphzh7KGTNyiS7z8U63SFadcxXpJQtPP3Kx2c4uvsp7NhSPP6bFFEXxeG8n8uEG",
  "key27": "5j3YYCwh76qxAbDaftcPrDAEPJ7HGPpEiKadFtfL52kpnezWd5kPzyuG5mt7joRwdTBpQKFU3Ke4D7FqhGuy5FPz",
  "key28": "RrR56CMh15wpBQdCKk3RzcpCkxX2xCYjRMVb74MJBzTV4RdYvW5EPVHQBGf9UNSqN64sihzKSkLGacbmiyDCQgY",
  "key29": "2aDx4XUjbuTRzJJdje3zPfH1oDrYB8kD5wHfudT1wccTooSaBjY37SdiV7LYtCZeSXy5njvnaLsCPp1uXMyWjXiq",
  "key30": "enJxxVzyo8RHhdiYUCiVjMMR8h1tHWxxVVPsEo5S1dNE4KenBXDc2sX7N9rCpuBhL1u7EUBYHVRRbDvTn2GvrCr",
  "key31": "4xD5GF6CWqbdZg1XDwAYozGJEScR3me8WzrVESbZHJD7QaZ8yFJWVPZAFhETCxw8PjA5omE43dx2PJxLcMy6G4bd",
  "key32": "2TQbt1bDPvo8UtNHyV6RjTprrtUXo5f4Hg2yCrMcWvPjvAVGs8F12ruwm3xpvVFyh3x32zdybthhef4Tpwt2iHos",
  "key33": "5pkQTQ65DywhbCSXoQPoX8cR2BL5wT3ufqiCoN3JmcuyndE6Uf16DLyARfP2Ud2aBa57hDc2KYjwfEEqpLHDc3GF",
  "key34": "3UALMZ3pk3MMv3pHcNR4McJYaaaj7kAt5nHJ7noQhirQwKyJ3Nz4ngrbDgEutqnLNmrwWfjD1xHJSjXnX3S1snBP",
  "key35": "DtZq2VSKv8zoaASPuV7FnkWeFciCdZLAanrKwssBzCmKrjaxVavfgkX2Qd1NfTv3inBfTG3YW5ae2x1jZqkjXAr",
  "key36": "4jDcK2RkEhfEUhPXm3pgfrFhG9t5PBrEgqgs9sZzDyTXHAb7dXCg2KAhK37uTT4bbLCEX6k6uBCVxtLG5dzK2QNd",
  "key37": "42WVTcuQKgXU98c4VpouxCdWbQhbNyN8AFsq7aq12xjHtt9ddLyURmpNnfKZLefUL4JrniGHX8PtqqPU5k8tv6Zi"
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

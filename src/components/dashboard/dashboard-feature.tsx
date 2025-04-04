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
    "4SuxCJxTHmLe1FEhkZ5aA4FRc43C5eS2BDt9pAbxLjZEcJKdPo7KiwGYfdQFWbvWr85ceGE6xcUcUazVCrGZHRAq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jwWZzjpC2e1rGjKfwm6qQ7Tf4JVfTdeZpgyHkJBg73hHVRMDFzFzCBzeRhwz5rxsZef4XxueXZ9wh32XsEsGAPv",
  "key1": "TJLfKG34SBgRvSZwpMf4r8o33grXrBCjuZ5vprky3HqT8HfHuiRYoHzSC56mzLRUbYvyYiTvwukgjx2AVyfTKsv",
  "key2": "5SLn8TpffVnLLYe2rR3LJb6ymK3qw3z2SDyuRZAhWCdLEJuRDrhRYbbEcLBzPga9ygfRmgrb7n3pvRF6LCwUdfEg",
  "key3": "2UULSHewSWtRs9QPQrzBEPyUMLsgjkfvBXnTr34MR2T1boKjGM5LSCKURRGjSsB29aGVSRJTTJ3JFpFbxDRdaCXM",
  "key4": "5TcwMX3CNSiFNK3v4Z72ouhFyssyNDTnayxWdtVZhzG96P9TxT1KmZJKphXxerLTo4VoGZ7akqPs7LaR8h4hNrWs",
  "key5": "2GR5QAoQQcPtWgqLCsnCJX8qbfVP2nt9njaGwHg2PK5kPiqR1BXyBegAHLJtKezR5wsFLquNF9mCK46K3xadDjpA",
  "key6": "5JcpEFzP5K3ep8eBH8hjxKuUwjDePYZtHYfDxWGVpJBY7Gw2kdk9UwCafWGvjtfeC2jesDLV1FhBQYTbjPkNYMvs",
  "key7": "24zF6jJeWDGi15KYYpQt2rBuZTT7pqvodGwKAo33CJS5N4bKiJSPGU1mMA4LyHu2fSAEBVrXh6YvNrYVtKbuj2jJ",
  "key8": "4jnq4UW6vjayrm9jG166XEYoMUSyhQ1qWhdUXPQf5z9kpTVjWVFo9xPqnoWFV9v78PBqA39a76Z42R5oHXLsKB8j",
  "key9": "3MrxUGMXsnwB9RR4PJXGc1jwkqT7vJxkmF1dz12KTntdVWbVEaJxPCjiruSxNXhiFycSYeRp8jR2jNLTuTJSvdCH",
  "key10": "3yte848VKPfjGiSpa3qhL46tkXpNWNAB3HD6ZeYh3t2F7TTkEtx7d2fuVWbn8XuK3GkR631H1iqD8TKM2Q4Rb6E2",
  "key11": "3rAiH3fZKmzBcJauAedZb3PpqaSdJRRSe17ha7m1e7JZ7sNEaXEou1RF1pRH4XYUnygxVhrwx9CSBdrJsfkjEqPr",
  "key12": "2dEqjjQQEKE5xBb8Y3zhFAruZxLo58AY3VbVAuAjSmGhU3S8N9WYCvkDFtzUyJNcsP7hME8DdsNK8Ej247RsAkHE",
  "key13": "3DfKG96iWL4PgCrSUPw9Pex9vDm8t57GsPnVoi3BBVZXeLG1wbUs2S1roXrakbqwmXCkKeemCiva1xCGE8Jv7Kab",
  "key14": "2rkYSoMmsnd2Cc7bxnbngCwhk1M5yYM3PYGzHygSNqbhsbd3ourxndvbQpX6sxcUHhqP6Q5xBN4LHo2T9Q1rmb8F",
  "key15": "rWHWTgbMZjSUZuVrmDynbcEfQ7H25m6rPnV4y6LNUpcuXYbhSQqEs2LiJLgZnKYE2ZBbrCEDCUbRfwM7iz5ZpcU",
  "key16": "4hkjNQCMNgW8taoL9JXBhqT5YTr8TKH4nMUVC8pAn3qckQfDatRL6sDGkmZVvsLW6zxos8UuU8ZsZah2UxnP1FES",
  "key17": "4pfdoZaDJ5Rco3xLKyKNPerQTpw1u7kfWRZPpekabbRTLVg8KkKG9918ve6BbFULdDA29ywKyGYivpLRi8QgQxwS",
  "key18": "spkD3q4BEL4HpDAZkpu9vBJwWLLA1yyMpHBkaggrxJSwZQzUoUjAVKyoLb6GcB7qdgaFE8dEVMsJcQoQmZ87jB7",
  "key19": "5aPdM3HDRQdHdvd7dDjBpHPX8jk3EQXHBUzkGsNTgqRpK882vhczUk2kb8LRoH46bBfqeRXoTD7RtCwgejJzXEPC",
  "key20": "3vKsxw4g1omNxeUzXRERibY5HiPRFR2iPwVKYTmL8XyFF8FZ1gekWf59Cn2fvRSJn2h6QfdFCrfvQDBviwuU9ohk",
  "key21": "1qY9QdPrN6UdVh1Pja95zWAjAHgeL8b7SBQCabwBtmHwkzk5P3xTVhTaTpAsZ8QLajE2bW8cWnr42KZSjoh98pC",
  "key22": "2DV3KDo7stRahUGfnRzGh4AySsLKKmfBhmp8JfgrT9ysdEpGEzNmpZwKG76XyxsNj9qgWoDxyLnSPYof7Dj2RLxv",
  "key23": "4sj8LgHh2nmNV6PjnfAFbzJ3LPTDv7ufUSsU3Gar6wXL6WnMCBdCGUVr75ho1pmHweyy2f1XLSAyhLFJh9G2KmEc",
  "key24": "5EStzNTRNDPpLjyZZkW7EFuei7a9V8wsBSpYUPwCVai5RCzZA25AvFq8DLHQCmv9kFtM5PSE2zEaDsM2KTwQWtGK",
  "key25": "33ihpeSwnjsLC1k3Cd8mtDaFYV771RDmXccrtHfK5uc4BDvoFYVZw4WU3SK2uZxodFUCYRZJ3sp6oMzfBNMFWNG5",
  "key26": "4KxEbR25BNdMefRtHw8NtEZXGqGUDGPhF2yZrUAHSJ8znFXRjZnmaL2aYvoWRkV7na8oMTNyMmmeUrgwVRQMS9Fx",
  "key27": "hHLCj13rh3kF9RtJ46Yp58mnXV4bhfq17iEYrQ69djdXpTufQQWafED2sTMKpDNbEekoLUZ79XtP8RKVx5sQ3uo",
  "key28": "2FqrvYfjVBTwxqrPRSTvG5M82GH4RaUGC9tKt2qsxoZYyKP5ADafQGzHZ3ZjqTtozvqTX3JbbuXiscXntJgHGqc3",
  "key29": "5TWc5aaTmxNC5vXoU2Nq7qNnFesmqq5Ya9XsFpGepZ8FCp1DXH6N26CMEaGCw26kuFC7bC1YSXsjfpEJJ8g65T8G",
  "key30": "45caEDFjqsb2aGzDaLrXbYJPRWNUsxjQjgDnfePGVW58dT2p7tnTgNmTserdNhNdR6LDDHkbdE4XsJowFYmn1nsh",
  "key31": "38uUBwW2oUZfVQonrUPbLBGNdp9NAB2QAPjciLZvadhkV3PUrsHws6vfEGJeZCqQfvSELx25Dmun4Po8akGYovmf",
  "key32": "znBEuADxfYs1oJG6NY6tMgfzJM57rSgFv4ETiBdPbzpHWrocLDZwExuBdvCNQ4fD5ByuG83um2z1xN9AEnfQgm7",
  "key33": "4eWKac7tUSSffRxhvgETfSzGok5gUGpkW4Zo93A1WyggyVYSavktAhBGew4TMHXTY8Sr4UXTQQ96LTNTJ8xg3KHA",
  "key34": "4yRk4AkdushJxjfWc3QvwVR83Ry85aNitzS5rbS3BJJYA37JoiRqjdvtEaMtGycmWoPxsh5nPfP7oSLoumRfNjK7",
  "key35": "8Uv5HQZN3aWAkdykghm9uyzQNoVGh7ZJKBafLcj6JuJ3M1PvXyJAbvWxPDP8ySr64dJhoe8AhWm46tHNdP2ebYk",
  "key36": "4hMnTXxdjEzMt4WHAkTjKJDkfeXoPw65ERZxFFDVDEG9M2tGhYULDpJhKVxKpugrj7zKdvHEPe6XWK1yTQEGP8XZ",
  "key37": "mtarUdD9bkG2AqR2LmZL1H5S9x5q9HB2aZeigck8qWvwLC5kupJnboJpTwMfN5bsvVa2gAsKtNnUMnWWMwzTRbk"
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

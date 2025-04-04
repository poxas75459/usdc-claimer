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
    "3hawJGaihvBLz3vUCXhvJbyBm3Y3gpLKyd9q9P29kRc72L2AsmqTXkXADkdekMTV35zucFUnWNKGuHZbhswEhw1n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TGes916W1kLEp6XNzQQDRuhgc5NeyRGnqXS7ErrKBezU2sJZLMmqcuzZWxTzhGanHuU5tu2nYyBE2x91gqVw4vD",
  "key1": "3sVTSfYJ7tAA1GD62HrBLtWsNiYzYbyzJwy6hLXfzocGcuzSj6vvtUmFrGdZXZazBX5E2q8Yf3xiqzymeBFpUWv9",
  "key2": "4GyynVTW7g4GYfeh5HVfrDzvUQYqzi49dgoC3kHHA3XDNa1vxVpep4wFjKTYcKbjeanwpJfgCDvU3zhfPMKEGoos",
  "key3": "3mi7zq9VnFgovsozKDExaMRbprM45Jz2DkAoPpTWWaQ6NrQ8G4pjJMxAbqnUr26W5286qhDkcXgNPzxijQmj4sEm",
  "key4": "N9Lsz6Z9XJr62s6mxcwuHnShfBufmUyN2BSWAM4bRMtZ74bC2677KQWj5DNPW46xMEVbe2VBrmZpCx9Fas9R7n4",
  "key5": "4HFkgrtrzUv88wnWMJewubquKLg94311e2RuDTy8UeHieeyTN3AJeZMuJxPgWemi8veyfsgpb6zWey8eVfp1fSQc",
  "key6": "Wca5CKZ3fKfXeYQNAyWTR37FDnD5VSVfUC5rfznEbMX8PVfAC8mZLnnskzmeEyFoJV3pjshUgYDDNdqxM7MoYme",
  "key7": "CMwtnwz51aQZZkPombL8yLmwgk9vcaBtr1zD2aVSMf1sHfxNP6jTfBu6Lodb1iKgM5vKujRo5fWRUFGQwnnMYsA",
  "key8": "4iWHDSPt3zhBB4pv9yfbTryQrrL4LQHFTdZpneiTsW2Juru4p6oYYYC9WBbfQk6h5V5dsPMqge1TxdH2oHhYK7H9",
  "key9": "3giA83FRDpbmH1dj95HSwzr8MRrjZjA3eQnpd2gttgKogi8gcu7SF8okmvQmD8zX4AEH6XpRAugs9HrZZ9y2Zzms",
  "key10": "4YdTETcXrFwzBsZDAQrJjT7pQdu6igViSSjUoaEZf3sRyZXFCQd4DVEqXE3f8safULjHQJ9y5sTsbB62VcRjDcjn",
  "key11": "45m3KCHciPqrRSpidh2p31LFwd6CU2FBqKEfDVLACLnooCbMtLfXkkcJFkb3yLm4oUTURiCnHRxrQ49thtmvRpj9",
  "key12": "2F2m39x5rty7wLtpqPTJaZDU1574LeZAaqdNzvjMZD2Df6ujHf2WfYX9RL5GmW1TPdb5hMJv3nd6MmMU33XNVp4f",
  "key13": "5s64vW9siYQ1vSh8pkcacLThWfzUXNErCmrrELN8QM2MQr5jrvGUrhxPEtPwDfPxyaZcS6FYaB7tEXtti2Jo5Eio",
  "key14": "3vC5znwyU4o5LSCFtSpMV3cGY9Cp5k7BQS1QxfzyPnCCfoEmu9ZNbW7aBULTTMw7Pit7drZLr3bnLJVnzK3kfBiu",
  "key15": "276m8TVaMkVDcWCCAdPNsYZH7zHXvM946LudyGM6nafVQwdF13c1zBpJdvCe3zVLYQRGUepRqesW1x1vaaLzYVWL",
  "key16": "2TKBr5FTV8pwURMyLjHcMRqWb6vrPfSr8BBHspUZpWxaqTxkrGhEiTomu81SdiobSKQ2jec2WJauKvmEgRipbAFj",
  "key17": "3LexdyL9H2EeHvG2NWcYdWUx2PYudSUq62vGvh6hFBX5WHqns8eSqpPMPfRekWHsyHCSUS8g92PjbsxoiwcEzRmS",
  "key18": "2uRWkiEYCfRyx11sU8SWC2kZu4iBW6sDWscP22waSpjdWRK1Hycxtmg9sigpNiQ7tQ5VtSWKFQSrMDq33A2jSRse",
  "key19": "46GuiHJRd34rK33vcW8uXYWHLwkEny3DbiHaQkPpvfnEbZ6wfhKiGkkKEwyoVJCzscb3y7EZMXnya1KLs1SoYbxU",
  "key20": "39DHeetJFyG128GEJjqvPPs3dMpb4QFpNmFHLtYHufViF8TPRKtsXzs6YPZDE16W2koSxj4mpvVXbGHttwQ4Vsgn",
  "key21": "4EXbREwXSCJVPyBfkFVQ6NxKaXtekFZm1YD4kfDzZXBqM8GeEAzniceCqFKus1wvxPRksoZoaYYTD27V2W9FZSWe",
  "key22": "4qSSxtZt7dmEnmxuD3TnBGttew7rMuAp5NxMEiVJzZ5PGUZ9RP2sdCgfeerLy7LC5b4LRHdnRb6Vd7hCmVgNekM3",
  "key23": "5fWUfT7ZNrSQnHKhgREaAeyw4hsYG6mhX4PK3a1UseP9pBLB31HRsrKNdQcPjJ4euEtvEmQoC9wdS2KgmAvTQpJU",
  "key24": "3VXCX6M2EuMo5RGVh3woNaQEgR48SXLfpzQ48jfGpd77U83XyuKMuU6Vpd8tsPHmR79uQbECQcUWi4iUYnvkVT18",
  "key25": "5gsFdmANxiwBXts2DiKAWYLEYoaq4BUoA4E5tw8sbxjoAaxNXR1jUeyTSpUHBJYYyck7iBPgVuhMrwY8ruj9UWw3",
  "key26": "mfMjoNMy8d3qwLPW65qaUB9HR1cjgVk5QmGmGknWbpc2rpbpAQyFbK8wtLatUGQmjmvsiJyRBPK5Yqs2e5WYRjQ",
  "key27": "61HXWiS4vNFLpafsTZLPeT89g5wER6xxx5p2RVyi86wPRFMTTassXgUeQg27aASEFrQV5nBv6VHJmrsViw6dJSjL",
  "key28": "4cFNMX4vD7g8xvDX66P7QW6qMhWWoT8LkQ5YV7aKLGyWCFzfEgm2VBfH5u4dTSNLaQu4Ch5DwThNZ1E2cKNNFEnq",
  "key29": "4R1bSdwuNEo3gvBzLTsCVJxpA3eX297yZKBLM1TWjuFywqsvUb1MrcWU26RczCsqETj3MHBtLeHi7KZnstR5X1M3",
  "key30": "4XwY7NZ5bUm1TC5YorwRtW8iw1fH1MfHvRwiuMAKofMUS8jXhQwnWccVS4x8ooWesR2vR2Z6Cod62cb195D9QeK8",
  "key31": "597pA7mA7JXfZfZUV8PzCkhMBKrjhHtPV7PHYteosyiwb9Ck8seaUWLhgpv8U7Fefg1nKHKvxyDmYzRGczK4gvEv",
  "key32": "23Vz2tiSbDrqyMjrSW6ADGukBQFoj3YtrNSrHEsqJk3vRwSVQUTkjykQ2Szpt8VDTDQ4wU3AEQPfRic3P7s4vaXe",
  "key33": "5bWnRN8vpHmJWWquerFLo67RB3KNBcPoxkQiXn5AA25AfZcfsjrACzyNauiAQR4Dd2oxqSXi2iPVy3xR1HVBvZrC",
  "key34": "61zN7iwR4C2PXNG72SdzTYGVBTAE6wE5ApS7JSntNqwSAKagC26NQXGAzTXmzwJq29i3FUN3jzyLiCe2wJEoTtc3",
  "key35": "FAZcy1pesA4W1Bi55jJ9KmjYCBFaKA9FHY3DZuFcpaSFEV4P2Rs3SAufRpYJpRG6CKrbmLmgL8spyqQYRYAutdP",
  "key36": "2m1W3n3BJsG6QVma65Y9Kb76GKRmgoaWTLvS34oQdUpq6D5J5kdQRkJY5PUJjbC6tEXBiRKyQjYSZVH1UTVEdPdB",
  "key37": "3rpzkFQidCWUHvnhxSsmoPowG45FYcue78Qu9ju9BRSTZURDWkesmnBoiVUGYcLpLRxe5YiuzQidfPnSkXb6Ppga",
  "key38": "3ZNVJyXtoGgBkEWFLrokTHrPN7csNdcptsJeCoz8gVrGdiAyZvupEGqJqGXJWigMqYkXcrmDXtbRcTTcB8UKBBP1",
  "key39": "2H5Z8W1tP4WV3wY1nnrKgGE5HisUZPF8x2mYLqmbandQPRGh2AjQtMf589TLUcuxQtLWbBY98ryfBpjCGAtuue6A",
  "key40": "tfM7Y5tA9zCJSp33niDTxRxi39nUx5D6FmiAs4nrKP8zBBtdG9BcDWyjJDqr9rKaSKa7yDjQoTZQNp6babqdJKW",
  "key41": "5vUPN8zPKCdcmMSax96oAznfxsG4T8i9h5osixEQirYr4cSSDseavLFn5mweVydmE3fCD6K71zff3t6D2o7cJ6oN",
  "key42": "488aSv981NDjTcMer85oqTSzDzqebTRYqxsChwepXKy2paJCQGGXSLnZvhPnhmS4ZyZuBQ8Zyk6rPhHwoeY8a5gs",
  "key43": "36JVpfjxf8ucfVFRTeUX5gNyEgi2rf6ZwRV9c5aDRcMFZJL1VUXRUgspHkc7HwotLnDHhUJEgnK7fnjWf5CuC3ra",
  "key44": "5VGAKoNyL6vUNQUXbBGpDGhFbV9ziEpdR4akZcRKjZngDUJLxX8QQND9Sr2DHeQZTeHGAQMS2Jmj9NWRrCpkZTbp",
  "key45": "7getb7NCFWYtT22mxV16ZkUmrYiuJaxjJBLrdB7r1WmHgXAffxtFMwxH9mGyN3p8mzcRZvvNA7tqF6fMBM3ibp3",
  "key46": "2ZdCfJ3S2vXXBkE8N9oF8FuHsMe7M5zx1xCCmo6u8rh1c189U1tYsdxbJBYZmTJZCwPgmNEXCZVSYJ3oFGGgt7bp",
  "key47": "5uKvastRyo2JCktd7tHc7F9ttyRfHMxU18gVb2BcvAUZSUigvrEEtL19bVeuRLmCbnQPpwR4JnxB811QuzhTrDES",
  "key48": "5s7DgMoB7mogQLdrvFJSBHfSgZ587SMmoi9xSTGyrK48NXcZez2thAQfkVhSW6aiYE8epbdHzrVRZpNCidrhJVHC"
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

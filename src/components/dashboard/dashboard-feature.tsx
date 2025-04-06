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
    "216MGEuoEoyJX5GHqQ4o8YibF3wDP6vgyAYTBmxGvmi4jB8EjAGK1XB1Ktmwo8FFhD42v5763tYzZCTaaTMz2rZD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WKHcZjtt2rj7594Z43TxtrzZMKzDdwRvYs2Yfagkk2NBKfAxuivcbihuqcw3DMfFAZWPXNedzPZYJgmhvBkfXPu",
  "key1": "4HkbsW3TcdtDpZnvwtfDwmfkBHWabjjKFv4as33xb9GUxSYdgWEcp6hYHK5Hhj3BAGy5ZaY3jYpVaWHK4gmzkLP",
  "key2": "5G3cYG7wRL1i9bvAQ1aDFxV5GhSkbv4RutfKxPezTsumSf4NcygD6H4MeDrPeQtwauP1bEfEizExPmMLF6Fq7bk7",
  "key3": "3McG98itCeFzAx7Pih4xmnAsUJgJrvDXrySt74AVqZXXW8uw1mGyLfETSVHEZppBiXryQQSiwFS4uAA6kjAkpBUc",
  "key4": "5it5AEnaxfjiGpKANsNPUwtTrg3S1ZkHcY615nLgcLbvpBfmh3J3xkGtp7TywUYdUvnSsUYaLHgqZmXLsXybDUoA",
  "key5": "2drEbT7WaGLL7NMBBGE9ir5b69X5tr8dw4SvzgWQciZEg9JWPHuQPBSjL2stVPH2HGw5XVekFMYzBGDQTYAdSnCS",
  "key6": "3LdMFN9ieYyXZP9HVZ6BgN4pibVctwdAf7LcnN2AnbbXscz4V4zJAfzT9jioPQDAPfQzL5nn9tYFKWfKZRUA5ywD",
  "key7": "UGnkhJmhMjQtr8hk7kaxEzJLq1QpoSg48HdqMXiYmEbZBFHWmn143fFBPvhVy4pDbdyqe3JmyBCVBbX5eKKXiTX",
  "key8": "4Y41W4MQsxGmGs5qMuVhKhWc9Pwr4pEp4iyn2HBcEnMPFF2x8NsiiYVDE2aJM4jEq4Rm4UhPiiQg5csDtkobwDmC",
  "key9": "5ifAheD7GSnzyZCWrrS2aBT7dghYx7LdvMBMZ76pEjGbMvtbGzca987zqGSHANjWSNTVbWsmTo2L9rA3VNx58N9s",
  "key10": "5ECaVB5W1SY9mqLdSR99to6We1AxCZopcApuu639akb8KQatMiR5Qsu2iC3iegKEYrW2gXRZ73NcHp739v666xiC",
  "key11": "5PF94FgtH8nKqviVdPBNaTJotTeGjvzaK3bXemz4nDTtCfukV3fVxqj6o8DAjca2gyMrHmVcGb3Sv5RfadX1aa9H",
  "key12": "4uCYq13547ZMigzqFf39nmsJUKG3J1CdZT2e35gGAoVkiTF3utA6otuQMDHA6Bi58tBUd1hLCa7Efej5Mjha6BCc",
  "key13": "WgUy9oi1ax3SEAAepkKXjZcQJ1Hf4B56nChUKaD6NKocu59KoSbf1ns6AaHsEGhsQ42CDeTk9xd6TVUd5ijvoqZ",
  "key14": "3D94R38TPfpQ4fjtmrUit7HYRcg3n5vw8kW7c3EjDTKGcFk8zxf5FyzGYcVzDzHZWWWrjBW56UJEyFBmdjuMUMtF",
  "key15": "38EmrqhZc431M3VKCzr3nZCwtFgxiZJ6L3W9sgkLWgV6rTkZxvrEXUZSw8e8RQMh7hjN3gL8g6eN7eNdmawb4oaS",
  "key16": "67GDrxmY4TW8ogJwRLYUbZYoq6wq4uLFCEEaQFcPT7G8Jpyq9EVxExCW6FSaBxKbnDeyP9DDK184Lt1HsNi3WMfo",
  "key17": "3iabztR7txmLZt6hvNakYfPedqzziVYPRoGAPAJdLyyXetLvdP2ND8bYyRUZS83MFvWjjDQp8DxzfwSAevJwkiiW",
  "key18": "4C3yShXQzUpmnSEzFAXbsBU8rrGnUQR1ENnnhvj5AJ1tCMcGKyK2smGsazvEP5mK6HaxWMEqJqx4ftoHsvq7Gn7N",
  "key19": "2QWHv2yfuivnbKR6QF1C4pLpQSVArzbnz46ekkHjoCmayE5CNnUUwLmxTkh6npmmrUT3BH72kAedsVNNATT6cpFv",
  "key20": "2Z8gTfuPgruuMht6Zr9LTfnS5TyvKcQJ5kv7wLXozH6TAMpX8Zkaz17GGkpS39hAHdqqeTJyr6k6BQiE6fSdZisP",
  "key21": "2DWgjrPsbfPQAJ9HCKPV2URWmH1YaGv1z1729Lz3u1HVPysyJ7TjuAakTM7H4wTebaxKDFp3CpifhJksCrSkGpCk",
  "key22": "2KMht68PzNPD2KVBeRrEuETaGngoDxN4hLC4ewvAGZ9fcvVF2ZUv5px8qn9D2CZLjLtH5fhF1J2ibB3o9Tx5De6A",
  "key23": "4KdAd2CgPT2ChtAEcKQPTWCDCaLeWpPfXsPvDq2ruLzGTEGmYehmA6aQWaWVb3BWQpkFw3PWQ8BBLJnpPWFVrywv",
  "key24": "drRh14YRhNqH4MKhsDyWqapHmSd7ASjLmH57NqKswKpsP6EWwChU8hpMbHCp3NSaXBfVyKYxqQFac8nyHdM1Ycb",
  "key25": "5foNeyS2eBqkjAEgSQP9HG24bRa9suTUBRkeCLysv7hphHCUSqsd1yD8HoABZcGc25Sxv5mKALWjAZZKoMpPTet3",
  "key26": "4m3Afqz1f5Czx5RAsvHQcnHdes31A3G3JzMtucTpcCwcp1g9gYWLWwJxoSKfioJwkAhozPQFtNM8GpnoLfYCQvKx",
  "key27": "nWfqzp6vdQhfeWoKPYoJ9bp9Hg7TfMDs3fDGW7JSjSrPx4EUNvuKKFdK67NFckWPCY43Wi7MRnKvwMLt7hLrpbj",
  "key28": "2GkfGHRfwYCcr43BjaPXCADrWFSt9TZ6Ay12gjrBK8MW4JXngrhyuwLVSm91tWUSNTAzMgwpTfn9jsgqx1tTqEQL",
  "key29": "3qwnQtUm1mJNoee6oud2zPMuzauNX99PM2jCMtdaZH5hQpA92tvvaGWXYAMVK9LGZTPEQxneGRUW6XGijv56741F",
  "key30": "v11Beku9E8e8RBz4Z9EDYeFc7vh68bjuY9M6ToAH6b42a2quMeweJy6Gx4tRbc9HBBv3t9SjRrbS2nJDnRjF7y7",
  "key31": "4yJZRXEJEsMjzEbnDXL7bpNM4vAoELyoVSxNmo4AFBcWXWDDKzM3nLHsTg9ZD7FuX5AkbxwM6phJQzmH2AKhCtfJ",
  "key32": "5MgpQAoKjfcLUxeFTsw3c22WUK78XrfVAYmauCyKKq7Nvk1Uu5bCVyakxYrTdBpR7nMsY5Xr7QHWYfCchjFBM39d",
  "key33": "5mNfqGQcTHhYF3ffgQWELzqCCeA9EeHWNB32nNnayJAPY4PuAYiFMUhfVAicB94jD5jzXYbfic9rhfDtWgdTcg5R",
  "key34": "2X8C2FWKXWb6Tv59X7YwR9zqudPXNt7HaD1EfifAZZf55oLrx9rP9zHkinVFPkbDGxtsUBZr5v7kAop8Gar6ZU7p",
  "key35": "22qNNC9v8nAns8Gk7huMDxexHauZxFBouEgJwHroXQ4wPAeDatUWjpSin1oRXfMMSMYDEoAdDJoFWGkHLUFFN5cm"
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

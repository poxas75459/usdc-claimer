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
    "5XCCaHRBnQ5GB6bbd2WXFqMJe5ZSwMU5sAXUGa1xvDgyjW44WTszV1Y7ym3oyp38YonrhhtA2RsfNgeMQvehf8Zr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jZSTryhd6G6dRFq4EqehHrj9yGXVgygvnvge3QqDU3MKHbmo5DeV9JkRtUrCtoM6qLEuzaMKecNsyCfWgx2dBM7",
  "key1": "3WrkbcATiitq1qTSRSL6264dV37RMVv2vQhEXfozRCgkfezLAH6fkxVASjWpn2qrSdibsjA18F7m8Yn4fq62n1Pb",
  "key2": "2K6CTSjYAJgBfgSk8RNNVYkgqEBvFGC8g9PAD3t33JEKGh6U2FNy12QU6b69H65WhiduF24jmQsrLCA1hHD8XzfU",
  "key3": "66zuW7eLYcMAKTkfW9PBptGQVm9rzYdJTT7Rb5TW29Xbt4TBc8BokiG4PfRpTbCT5dX6VWedixWEL1GwQF4U3DxD",
  "key4": "3WSfri2zky8xqphjfJwZSNaJdAB6yZ8nBfHDNQT7g142jU7R9vqCYTqskQJCVRNqSfsgUyAuQG1Ve1kuiH72TEUu",
  "key5": "51kfxFaaHFfAffnp7Bh7Mi7LPV3fZAbqdfNyDJusdza4V3R1SPBEYLqQ3tLYu9SaUoworkspMN4KR9fZ7h94TfB9",
  "key6": "5tHWdUCrTKsvVnovMcUXoJ8gNZ8c8wELsG1DxxyacHwaXRyto2psQMMz4His6CFjmtVr84m62Hbr3QakGRbnfmWU",
  "key7": "4YUR7kUzh9hcK2JGxzjKBMNykEa5d6g22vLzJbXhcxKcJkiV3kZkFpYbDdMimeNrs7d1oEsegXutyRateFcnDFfH",
  "key8": "4KSaiQH9Lr6VMFtXnhefjBW2ZAoZKAXQBeiTy4ayq3w55VhK2kc2Ytk8baxzL8tNg6seznbDSazxgKFRfTkYYkUX",
  "key9": "4b89ZXfJxejcNLmdCdMBcdKUfqSSR9f138gR6Bny6cRRNin32Da4D8NdBuiLs4mMi6Ck8zTZF2HxapPZrgmzk8LV",
  "key10": "jzWSN2AiTj5RbWubFNgq9EG7buVRGs65C9LYZrEyaGFeDdepgnoiEzuFC1Z2HJk8UNBBth2kUX2PFY4JKnCBzkD",
  "key11": "5ibb38TJEVpjeyLugQHyuwZ1GaSujQ52ZAze7JTqsuWiUnVKxHYa3jEsccHkW6hRCL2vkps4gdkbBshXuXbLTuzN",
  "key12": "46Ht82ynhT2CERv8JhQKAhAVr3tFjBr562DugNsp1FcbeymZ1a1vrTKmucPoQeUpbAyAaDdpD9sWMXDjppA4Xfxm",
  "key13": "4zmVBiTvhu57NgYDfYwiH5Km8iWhANMGwUtWiaGZCxbMsoAy8j1kR9eqEZeoHS6HK8rgzHBZj86rWG99U189HcdS",
  "key14": "2d7rTKbcgxdapFSKAF5XQGVoJydxL7QNi37YWrJj6stSJ2CLCoj5QLuZkbeAUfypRPm38SCUfjpgwf7Rn7VRFutD",
  "key15": "5rU8WphL4uKPgYQXWMtRaEgj93ZFPGBhT5Mas5q6kHRTVr93ycWer85yRqjX6vUaU7k3aiGxvwk7QaacFBjVqpsv",
  "key16": "4rB6xyerf6gvnPHzmEsHs2pofa3TLxMdTmsSLWUDx77oMTfnNYy7GRSDxWz6NiFDoFKRtvKTrbckfxiFM5jaAqSB",
  "key17": "3fvFUBoAiEmtSkdX2kdrYQn29j1vhMNrZrXzh6B6tAZwnck2tbbDRcHfqkyMudMdP6U43QE49VcaLfG8dnDyKWCc",
  "key18": "2SQvdZ13GMEhJMHNM1ZLJWUY14ogJP6SigzZxLDD7nujt2Y1XagVCujrh1Awh4HGhqoU6aqG7phMm7rhgVXSXknA",
  "key19": "XNw9GksJMiDBEN1tKDjQMPgtLmgNa4jpfKPh93c2MPGJbgsXwttFbPNwURDPtgnDFEn9kuECzcXp4ysNMeHEX2B",
  "key20": "43F7am61HAaxCuiw9qAd9J9nka37CDTeR5zK7f7eEpinzqbbCs3bJc3Xo9qfcKoVdQdhAEtnhWrtJof42YWLaZqb",
  "key21": "58dV54u28guKhnxU9T2h9pyndYinUC3TiYT6KT141QFtZFFoKpGbZgoTQVjF7aNAiU7mRHqj8yUa1ukMRJuKkvrx",
  "key22": "mFkhwJFqxzGG4Ar5DBaZbdR7gyszLoFz5qAmcGYF3xnMWzaZ5jtqpmFbbwWDD6mPsWp75K7CWynHK8PrwyyVYtF",
  "key23": "2HKpGZLDv3MT93epPJsLtGm9gDecxbdSMt5UzVv2vvNMbdGcSfyxwCQLRkMfbx4LT6DB8ibhRkcGPkaYybMcBqjD",
  "key24": "CRf3EAo9buBLf4CoN3ytNRj8EubaHq9Vu6bLC6usSjESQRpDnYy5YpZyDLQULR92HCb2WXVbLTA7mUFa2tcLmVF",
  "key25": "3JdWj1N7nUZVkbZpRvGasJmnYUqeW8gZayHQeSPSCFmYp9xcCDzaDrE3huHtY3ETtUcz6n4pysYKpCYN8GzSRwR9",
  "key26": "fut82so55XFMtSktJaXcuxoeEhaAgFudjkxkipQXzNNEpcHBwq7KaHCSHRBuneCCj11rwKEmk6fKNgEojQXZQCT",
  "key27": "gpeWahkQy6Mcv8wm6qj1veGYhSbxb9Spw9ZBQrry9eZ4mHbSDmTzZnzNNZLHTNT52gjMDfU2Cm1o3NWYGySFcNr",
  "key28": "286oQApbRegwnSom3BXQUQPeXZzfHxW1jrtWXQiogwQeR2qy8EA5Xb9A8Pp6X364c35rL31aa4Vzk4CFQbc7ZnQ2",
  "key29": "3873YwtBBeHBs7gtwERQVfwMUcjQx7Raxe1bpL8USqoeHjsP1uWee7WfANj5NZcfceF8uyYZnpZoHpX56NVsMY2Z",
  "key30": "ihVd6JqnXBkeZ2QUjbZ4ZWJuGQ7QiA9Q5Z1cwqNwSQ2jyfmyD3n6UryCo5ptdGBSh8QhNZV9oELoPJZn61SuCHY",
  "key31": "Xw3eH1Eq6XQhTpdGmRrTPcZvytn3hgfiRT5Ljv2rCkDP51V8KCeAxnZxogcFon3RZt9m8tg68FFHubaP7QyryRq",
  "key32": "3mTeQWnZbTLAPzGWksqXBCPr5nEY2M1edWALQbY8KQhEkWePjpqVSvBPd9q5r1tjzsCQhz9UJfJf6tVscWC5jySr",
  "key33": "5h5jRn7ShkvWqxgDibfW8QHeNowv3LLcZTKQ6kWB5CvT4DVze3ZH4f2HZqVJ8ySgEa5L9x6J5ufxBNNCKciN9EUN",
  "key34": "2bThJxsRbKR9tP7PRbU4z8qa1kxrDePk923C1tGniFAwfksCc8mLVrHXaeN1Nf9QNJ7LYstCfS6pWJ5TdsWDYqn9",
  "key35": "2oENKPaDFdDi9F4nCHa4N67v6B3YaBsEE5uoHUP8ZqguWtTPKhnwQ7tYep1BaM37iJdH84p1XrCy8x7HnKfMcT9k",
  "key36": "4iR2bv9YSkNucrQdoPAxtBSz8f4yGQgEdjrrwoVoe2q9zWaTt1Fz9JLEj1FHFJrNELWsXmC1wZBBpJepDUMFyeV3",
  "key37": "3Aw9BNNpnhvM2cp3ApmuKNUpdAiZ1LhfrVQZ28mB7psTD1TP7W2c9aiSpphgNUwmLbpzYnhtfbmAYWB8sc8vmp66",
  "key38": "q56cKUqWMCDrAd714T181wLfdSe41ug2nPD8GfH4q71dK2fBJKUQSWegQD3b2oapDQMbUH7KeMyT5QNf2Avxz4w",
  "key39": "3H5sAdZMUoFXNB4cbJuG3zBw4Zvrcmh4HB1z873EpS1YBJAkjYiSRkBmbTEUdoHJvGfM7otsM7gk9FgqpFCzY4E6",
  "key40": "3C77dDggodp743pEJ5QkE7xX4k8MePxBrk8zRsm7LwELNXVpJCBDfHVVEXsf5Es8Cr6HXYeXCVW9ZNB1vHT4g22w",
  "key41": "5agBnzZdhRgF4eV7HrvFmQdtxmXSFyNWgQgsn9T4CMbKtUKUuYoEKLJKj2w3E4cKhWyMrS29rTPgrsPWNGnEWL4W"
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

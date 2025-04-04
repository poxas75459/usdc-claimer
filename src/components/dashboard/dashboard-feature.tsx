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
    "3stSTwcEzTShdsFdLQ784MHZ66MkHBXKF5tRNhJSF1Qh74yo4KvGxBU4WJMphKxy7q8VFzJCYSaw9WneYTW26NNY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EWimDn9AWBQaAJFBX1V2c31dhzYrSNwd2ggNunqYxCwGi7623T5XdVzXHbCs9ApdF2xgdKFXMd9nFA3cNzyJKa4",
  "key1": "3HutTEpdbbwRvmiX8CyjftwLqAxdzGt6mysnrRhAWwKkAwZ43hkHoRi8MsQhFLUWdravqS8XfoNQfduo6kcPXwfX",
  "key2": "5MLzpZ8NXfRPK4c1XE114WG9FXjp8TEzMF9nexmAnCTwFerU9EvmNteR2cLaZXr1W4MZaaS6uSiBHYCYNE7fxE85",
  "key3": "556xxqJ9oLeweq8JpCqYpYNWUwfFbUgP9M6UgP6YadYE1royeQV3V4jam2JAXPZfKygXKRgLcNsBwvCpahG5LmMJ",
  "key4": "3qC4BmuuC5JYsxcvboy97YzSc4LTeCPGj5yAWVtH4TPEsi1j3YvzYFWLMThkUa8ndKom7GobZtMi3TnxpGmDPGMP",
  "key5": "4Z3ob4uv9QNZAbZ4XuwcpAayyo2L5Rka7D93q6pf5RUxo5JH2JrLgQBr74k3P5pMkCx2xe3CvYUHR3pB2cdxxdJe",
  "key6": "4Bz1sV3TefTjwPbLh7XH9ymvXmp3UjRTx8vtAJNjBJS6J1SVYsYubhkisU9iXTsgnMndeddnnGhjHrvE8uQsXa5e",
  "key7": "4yAc3DZXKWBSQPtjaoqbK2KKUbx1UveH3448s7aUQpvD6sKef75rKDKi8yrnN8tcyrUP7ziXUwNanm5UUgX3SxzD",
  "key8": "63MRCCZcy4pNUtTLLxW3G8T5ybmoJTZLyPGM38fQGXDTG9d56K3XiSiNwHcD5BDGXvBjMggBMe31pSdCkphA21gF",
  "key9": "4DQbX6HUCj6U9dyWQd7ZmGWRc1Wx8YbRSjKG2ovrgH7ZYTK84AzQoQ66Ei4XzM5G3dsz3YxmLJUWYa9RwHxwGsbe",
  "key10": "63RE4umSrjCqX12DDNEU3ZTgiLKSWz52QcHUPzNheNcbHJWpYjrVTCySbFkL6LDn7hgWn99oK4rywTAXapdbsyko",
  "key11": "51hpy15oF5YQpC3g5Ag5Lw3AdXzTdaueiiJRxCs2g18PwFehHfR6HmP46w3oeLVWRzJAdkvbkQd4WubGLKVi9Yw9",
  "key12": "2tNZZKdCSFXKbQKwnBAdYbueuCUo3Zn7GKQCXPEZkgnsEEa71E9HK2TMT61Nb4ckbFCWosz44gFCzNxabqx5yz2D",
  "key13": "LNeQzGpa1igXuT9C9xrH6rSG3HFFncVraCtFY3dJC8L1Vde8b9PhPcuUd7mJxMEN5tZBLy8eHkYcGAARfM1Tt7D",
  "key14": "4hQL6NNfwmSeJWzCx9ffG7T1JqmTRQptxkH2BKo4yRHAYZxVKjWYYyny3n9qJbFsBvfsksvSNGmCfiYNeib6o3Ka",
  "key15": "4huEL2UDeyMqzkUzWRvSr28sMLa4jP2V4gC3oaGoEGPcDE8fu9qERvCBSQ44ARrzTcX7LNSTjuuy4iG4jxd29v7C",
  "key16": "2nUt9FbrHENu7FdMKkqJxmkyhRDtrFMGLPJQ8cnJ1ZbVGHQKoFSskzVRTaotXkEEVNLU8QXqXyrW7astxggBvAg8",
  "key17": "5d3JzQDKEjs7rYtdREjhvz6HfLgvNVvQnEQ2qNsMwQD3PuPBZm6H8XvqBr2hXxCkvnzSNbADq2oD4SQ3MibUJyBa",
  "key18": "44MVLYZ6G8p8CoP4K5Abd7kFewPz2imvD5tgEzDvQe1f61bu7dKATLG1DETmHbxs3Q7LPUWPc1rBk4mt3huHcoSe",
  "key19": "1PgJeLJDQhoEA37kdR67fsC9AUzwZreNTnsTJggRFg2Z21P6rGAbvQCcuvUJfdmW8iKgw2xLNRSbgM9tTqDbtvV",
  "key20": "28pPH8eBbgMErwjpXL4xr4ymfQ2v2UPACwUX8aczxbTQZpeVBDJ7Jb3aenjzutp3CDJkZcFKyorEDHUY7AyWsF2P",
  "key21": "5udM7RhXT1dQZaRW7vgZJL9ze1oq74HRwZdeLa1dFAnnQLMkZiwu2MzSvDCB2rrCKhEPnKKYDXZ4BBkKbT4UTS7G",
  "key22": "4AJaM48DoULea5GW2XE68Ug4kDyGRJ6cAkkBzG6KMMtxoU8VQB9MZwL1n3moSaHjwGS53svquinyzhc6s6R3RXjt",
  "key23": "3RqgdhNJX9CgTUcGnNGyhdVLRPMKEx6kyVppFVdo9gmKuF6F7GdBiqGTLCczDrC1wEHMHFyGmFmsSy1gKGgyqzyy",
  "key24": "2ugMotR9uDBFm7oHVwWZ4A6EXrdDuNkpBrpzVn3MfwruirCzvZ2bwCV1XTZ1uBnQVyXQuEwGpxa568arxCLJrTNN",
  "key25": "3DvXbuWmH1GMavbzjfreyGUE8ezgBd5CDiTY6TeeqqnJd4T9xaug1PGSfMjCE4WThsmQSsHX2isj5pEivKg5pedQ",
  "key26": "5JCxutuosKbTXbt2Ki7VeN8EtP1eYnyugyakuzzb9jb72W27H66aVTRK7GG7x3RmQwCGDV9Uh4ihbXBw34dnWQby",
  "key27": "4gfaHLC7Hk7iVmWmSsqWTCUFgFTNupjv8MkaNciZYmMJyAJgKQBwAsN8id1X86gjQR3pTfHqQGteT2g2YiPY8Dn5",
  "key28": "3t5waHiXbjPHV2SGiwjsjEaECXzdjsY7LnvysqznvN399Jw3qceAa619VyzC8X6fU66D3FPAgGEJpMS1fJGSupFa",
  "key29": "4opaFt46NkTzBcmfWUEoV53vAEEJmWFx6siPNZo1TKqk4PQPPuMnWTzzd8zSizCY2R8vJpFHgLGwrywSgkd88UU9",
  "key30": "5XyKZ7ZrpZCfLc4NjFWP6wkyGuhUvkSeVvuxkwPspgD3H9ZTL9evcahnCHhEWWrotkY6g78z2bpahwGHdTLo5teu",
  "key31": "tjFbJccZsbBPUYUHAJwTuf7Aev4d4PL4DHhmE5gi7rWJ4akgrsgvL6LL3KrKXwfXznju6xvzUhwKTz8c2EcJsMb",
  "key32": "D2M2SK81rhCsDcMq8txy5SLxdsahaT9UARUJ1DNG41XkaPHCiBnS58wgdCiMyZQfKMbBvWgk3G5GSrzPffdmGSj",
  "key33": "4M3gbVorZqTFsps2rR3gkyTBpmyyEsFBocXTYTStYiFFyQ81NNHm1uERoJ5Un1ayxJAEehBn5pNgox4p7kBRSEPo",
  "key34": "42DjDaH3rDPPXeaqR5YRBmQouNCqdsBqjrngwawTEaSRWY27qcdNB3CecpkWvo3HAynBs5VJsGp923eJqXy29xoG",
  "key35": "2a6HgrCrY9MN4fQx9hNMYfyW41aZ7oPCfQgPBbNRZpfzeUckh88jX9KuwGiCmkgHRbvB8JevGBJ3nqt3dLph88cr",
  "key36": "3pFqBBkiPw79jrFB4QWoczhqFMXJYqMM3xTa77nJDaDo9hyHBKo3h6Y16rYRmc8A7HSoJj93m5PPnd4VsERYJEUv",
  "key37": "3dRFQUej3sL8Uz7XGutMa8iosVAeqLRYz4b8rFVmbXJr2VgSqA6u8X1r2DG8NqnroMiCwiZcrhPJH8AYqdggfLAV",
  "key38": "uu47nbS2QuhottyY3RJLJTqSTgasWqrUnR9hiuVM2TaCDmKpD6xXQXtWEgYWTMwkQhigV1iKpJjqtE7i3Sqk6EB",
  "key39": "2dLDhJJ9rKHpuhzmDXgsQ275NbB3NH3RjudcKUqZ7q2Ncve7nvHxJZkyJbBmb9z56uWD6x6u4amk4fTA8spBLGsK",
  "key40": "1M6mBVd8BmQL2i4UG9qJdSxNLYUYAaUWxarV1vv8KNDx7WUMsbAgRSU1CADbTToyudsaLgdcpuQ5BE4cwmNcC38",
  "key41": "5KHK8zxKaT4r7ET49JLyjGyXWStQYmGzPqoTUPwLcD1iksGpitEJjYFdmF4Ap7tUw1DDmwMtv9WfeWuoaUg4gfQH"
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

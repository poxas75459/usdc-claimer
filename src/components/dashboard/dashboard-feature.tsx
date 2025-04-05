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
    "54cSPAJhFFjJwtCJbysNscdyo5BCevcZ8fmyjrS68SCryAT2n75YFaNxvddmwTQVN6FLNXmUWZsu27BNhwy5BTy6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51FNewuRjraNjbQgqpmU4cVWwbi3AobMceuykF7W327NCmUHc7dnYR1j47XHup82JzXkxPJvoMx86xWV3c2RCf3T",
  "key1": "5T99tMgtPCvjrVPjsN2JWQv92otENpHGSu4DA7naBLFcYCHFz1rz7A6ETBzCL6tDjmWSwBucZMvXY2rZRvV1nWd3",
  "key2": "2HaJpbAitfXuCCdc3ZfTxcvuFTGi8zK19TV9Ptw2w8XqPoPqqyC7pczuHyk6d5hPkqGL6wuDe8SLaQyQfjGXtzdn",
  "key3": "wiXGBz1C7hPVxiAHUhtWWEcJbMCj2Z6CQiWCBWEBhMKh6A4hAD9LKbbHaGW6UWJFAChTto7L8trpGhJrortUWXM",
  "key4": "3KDEccNBUeH2NNZUX9Fx3MFFLKwkrQeXpSB2pH3dHwjDVYhdvm1zvF6423KzGf9sy8YZkayBWmW9xXMaDBjdvSJE",
  "key5": "33Z6vPPRK1qRYYFUxgiQ7PBQYXrQyjCeMkwCGwP6CGS7z9jG6E5xvGEpr4axZJd96QW2PyBrAaAzkHN56SxLUQJu",
  "key6": "5h4c9hELjwozeyxvc75w7EgP24ao1fLEKcYYJxnimXsLw262RfG2NWx9bSVeBgKozfPGSDGK8cds2Tw54t8EYhZ9",
  "key7": "5dTrEVbRnoLXyScHKuSuP6f3R1cwiFUiUscasTFjzV5RCyaKEaEaK1Fb3KUKzrWb2p5G2tHhQN9AZoPAgQwD1vFP",
  "key8": "52MAyH59oDioZbr5sX3JnwsiJv1mmyjmAQB1y1QiBsaJu49NutarTQWYTRDtqTH4peMDXxpRaah3tsc1YdX4hKh5",
  "key9": "4TCSzouz3itmVLyPKBZwCKVVtyfQcjTuWV3LuPwBJV687ZpVGmArK2BDeSQFzvDJay9a1iLArwsxJFsXuxVe5EkG",
  "key10": "3XdBceYao2CJAf4mJY8p8xGkQd2Dwywi8bsWHr9Eb2uXMXdmJgdDaERQXCMK5jQFnCks7B8mUrFhsRmVCdHZzHzE",
  "key11": "46fqs1sq8oW8bcfnRzK4qZ75ejJm8TPMzXaV7rBU2KYy8wbgihr1TbvsCDu5tYi63jDbeEV3p1qj1nRhkSFtqduW",
  "key12": "5feADfDTJekJeUMHRPyjSaApb1kqZkm7pwQm2BgvUNcrUZqJDeFraDbUVR1TwN7yXVXFzphDFekAU2xwuKDSGuZ9",
  "key13": "3Uw1XoYN8H9vc7wm3SZRzQQQzRKZFwQmiFs3QyXK7Hu618nxD9rH5kPpVMhPoz3Gef2AGthVTcKZ4VNyZsfVSBiC",
  "key14": "5d3V8M3idwobwgJsLFK2LG54m7j7CuTmFUdxLtTy4i21bcJV4YuoqPzSxhjXAxt8pBs8W9Pe16wiR8s63bD4VXiT",
  "key15": "5K8651xRq1LXFZxF2qZcNqA5J7u6dbV2iNzGqTDu388evG54Nq7864BWzofBAxm5Endn7kJNSYazH65C2KUEEtYJ",
  "key16": "56exatQS4kcYJLJjA4f7ZytSxVwd4PresdMddXE9JnHqryrwMBtU212ivL8USDEE7uEpztTVkKwVhS7kw1HzYRx1",
  "key17": "5g29YcsPjmY2Tjqec8WAWqAGRWRBnTwHbtP3LGwvDMcNzhWPTxpP7MG5iaNWMHyQSJXbN1FYnPJT8MNNwzFvwXbe",
  "key18": "4nxR9KxoA6Gvv7bZJtQJP7wNZwMFADipP16ifbRghdguPXs3c9QSdFAprCwDC8rHhFjw3fpGyhsA4RBUtxmK5nfT",
  "key19": "3KAJPiiAcchKjnBhxgTfzsmen7CtA2K6VsZmLECy3yiP92iNTGuZ8F55C3DNxkVUR1GPZC4i48AdzggBBy7e7D9d",
  "key20": "5neUZHv5fDqL5bsmmw6mk5Ctc9cuFSmLYo6Pfrak21Uhdkx19NkPXXrDzWqXfxWQyuCZgynvERQryeXAtcjfCETd",
  "key21": "55ofnSXSgp88xvaMzRWKrqEgbAYUmAhD7F4T2c7KpLtTFWGB56HFYdk18rk76WbkRS2dSbNQQ27BrEcryNjruhpB",
  "key22": "5ZhrzVVo75RAN8AVHWeDYkVpir6vZie7GwCDL9wVPRgi8em2cnzHvDGSiuhQHCpEYkb3YP8rDFJQvBNJgkQzy1Nf",
  "key23": "3tFQp118TcaSDqXrjwpTsMZFqQpD2hZcPFsRbp1oKt4TJ8SB5XwoW8PMpQVXACPZfSouw1szrBfwuWgpow5MCWey",
  "key24": "9TVWFCT1XJPfUegd1vzW3PvqpSysYsBTU41tpx3YGMEYYAPG4Fu1VVxvhMkZcqNuAtN2DeuDSN3BdpSqdthKprm",
  "key25": "5bYd3aJeFCkAHXt8Gp711MGp8cNZVG39B6GWW5aN2EqXggadPDcrXP8rmAq39HxQngLevQb5NaQWVrN3w6urcVy4",
  "key26": "3NM4yTJvmGaCV8bn7JBsi2PFEgd7393SBxJpbkiW3buXaS4Zgeg3jxazD67mdfVh1RqT598uUnHznpep8S9ewU9Z",
  "key27": "eMZiiBiUzLq2bGSotTWwp8gCPkJAb7xXVSt8RWf62V4PUfkdZ3me4kHWCm3WKQ1Lfxh82eFuxzy9HG3VEERjjZ6",
  "key28": "5DEhoJEqsZJR8BE6aDVdp4cUhMQtWNbCbopmQbNyTXFa4cVPGKQkheisW3ZAPGU4dKHfKe1riA714ZP2uHHknpwH",
  "key29": "sLjuiTuG2bTcA8PNyz6BpXE2kv9ZesPUw3PA3pfCpzoRngUoxtp7Knd9DNeBrxfnn7sB9RDUvbNeg462eU443Ty",
  "key30": "kTjwJVvKHPdq8FWsN5NapheV7FfZKa7r5MtjbKCoEgjce6MciTgH2trMG7x7RUpLJh7y8fkwpY2JBDxtUwmJ6Jf",
  "key31": "8rLUHDd1HEdgaBziphLvb9NXJB7WxGEs2uMwncwMXZB2rJNhfP5j9tjFqXfqPdKj5qh1FmV2CxKnNQJeKBR35pD",
  "key32": "zRaZKmtouNiA7mZy1zWgARCpYWGQ5pwcUbMUFr4ZyqcbQ7f99ED8So2ygTJfUH9dMVNqUu5VpBJuPZ8PkDHXDiV",
  "key33": "38qWo5KuKhxgaZVC4PUcyJbBdohSRyYbdujQ7NAmsoRsQVpZzmkVT75q6i8sD1wbaBfvKw32ujgtH5kGvQcNeHxd",
  "key34": "5FYibbju4vLQJtvAH2HvnxECsfxFRpXHj58rd76fVX1tJ8bJEFSTa9qMnKsxZF3aJuGgEVQV8fppyUyzPyk6uXyf",
  "key35": "5PNkkZa6VXQK79RKgzXV9JEwvjvY7kzmJC2ZAqSwuWXQ6opBjV5v1SWUVWRKorqHaAyaetZ1ZdBmQx5Rms5yN4ge",
  "key36": "3CewYKM7vkeFm7yttb6B3Ho2vvMTfaHaVqSKP7f4WUsVPXaUa5EMEWmtbp1xUk6iPLQioT4yqu6j9nDSeW1F998f",
  "key37": "5TeANbmkGg3f6m4M8CJXifeksngzSAFYtUZK2Yvv6R3gJNdevKzWHY7J1vUKDDpp2Xv7csxMw6uQfG4A6f75xNZg",
  "key38": "2dtHVn7n23kBUQYNu1aPXGDwz3Qk771Z6yL9eDYix6HYDpHXq9uMjUKggCCu9MWb52BZwENQ7ANjd9YWAUy9xvqB",
  "key39": "3TjEGxpRxiv6CavSybYu135EZMqdmJy9nyZmhCbHRRtDyhMadweoCSq6CLYqZs8gJwWRj4XTpqM4qGuocyapbGuK",
  "key40": "5wVMf78dDk4VRs3xVrSeYhrDrUfuKZuguYk1Y8gcXnQycNfi9z31mdhNeGWtx5RnzHbHiFoBv2ogsKRmiT7Q8Ynr",
  "key41": "NeJ52f1KpBbeWd9abZv6we56fFD1UDgTAqPPkKupYLbM4Qc5ndwmGEdRusLC5dapcvi55LX5tm7c8Kyn4q31oLg",
  "key42": "2P2c3ssDn4f84qtGpe9AKFBLBeaiAd371ZGJE5PGCKovn6XNcATWTWS2hcJDJVcu651hNHk1cHe3i4of2sadCVF2",
  "key43": "4xL2idD7y4DHmeredXsZVYaqUiQjVfWXUGe6niEoLc6a5nLJF851Srddx3MYWmM41HNDMS2c48tBi7WnSz6DQaiR",
  "key44": "48eNvkkRMvfnoKWHqkpqeQgVYYdjfELBsaWW8yEMTzpmFaLDu8EdHDoJQTzBLggsc8YHpUT4F5ag4Ajgkubie97",
  "key45": "BoPQTZtPxQCvPKVVXV8YgXwE5jr4fG8nVuwacBd1ZJQqyTqyQpgaBi9v42i9fmkrBU4zuf4N755vZT5Vu8daBbw"
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

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
    "5UWRsRBmFGKcsRAKx2ayAyWHg1JLBzuPP9zwZK71u9YR75pJSg4zxWQWDYQsWtyWgTNBfTqYkEPN6frbgFd3ZzGF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ttxgAZtyPchEdVqkTRiz3fASMRrR3i424WxfFQm2977iLT1hYjcSDx29ymWT8uUHiHJGVr4vzUVqgkqzVWTzYnS",
  "key1": "3vVQGexA8hGcTZYkRjGvYSTKNh9ZWcUtzW5BujeqMxc2WyvASdT8eoRzLUoP1avHMj1ycPT7SiuEZ9smKent7WcB",
  "key2": "3DZBbcjQZnFi9UzEu7HdysVz5mF9NQLVRoVhfQoAccZczPyhCwGvD7yWWpnfEDHWYawBhCyUBEM25Yk7LEQxDzv7",
  "key3": "39Qw1iHTiAYbYrbZYhR3apoANTDTBoY34Cs56UbF7BQVc4taoZRrMRj4paRD3LfDFCGEXoTafpfdAahrB63Ygzwi",
  "key4": "65UDELR6fUcFyhVmaLcrZEzAPjmXCGR5ZXutbEZfsdkgB6FB777AgNyPKu5Jo8wUoNmP3QBPvYkHQueoA4vT3pUo",
  "key5": "ErQfGoRArjnndmrvM1ogWDAP53Yr3fWXY2Sd2D9etSDALguVVwXW4m5EGX3WYNKfWF41B1EVW5EENMD3QwqTHhR",
  "key6": "5L1cm3poknGKjfjTD2qCVREYKiKwpWwPKZvXju12KK6sqSQCqDKacZySXnJdprf9NW5YRfGHBQZtdGtP3LLAMUiA",
  "key7": "4U6HiSGDptR3J6423bSuXN1DmaWtz3cKgmQfVphs9hiXR6jLYyS3Dc6NVyzoWfFP4tfdvcC9UrGgi2GhvdC4pQkm",
  "key8": "31WoXXCL1i6qv6Fibe3xXjMRkTyCM4aHcon8FdUbPQLKtqsZVHcRsJaZFT43vmRiSxbgGgEEwLn2BALpyvqxMHq8",
  "key9": "GPi8hdb6iphx7VMgcxRm3yfEpn7GA6ZWvEedetKE31HpzEcPckEZzK2pF8SRtJL83emg7vXkPwaQemJ8PLUhvoG",
  "key10": "3Z5zeHikaG5BvxtwNtb8AUb1Ep1cvsmm7s1SQxNM97CHv5BigT31gmkF4JXzmC2TSL9PkpXA6mfpNzGP4YuyugYh",
  "key11": "58fJ8YUcxynqTxcciZFSPDb3cV95vEKK4JwSmz9CgrTPuoa86kmjpztyyFsPUxCmoc7q3a1B9nyPottxPaZRthFr",
  "key12": "5v756Kv8vXB3G2gLBTPU8Y8Wd539bM5K8VtGJ76gnfdzuA2ikQaW2ysLZpqngYENnUiUumvgw4UWQAUkmtySh7aw",
  "key13": "5T257jtgkdBemuwpnSXh1DU4o9T2r2nBLJMrWbBQ1jZ5YBNVuMGES2Gdjnq7F4SEnLoMCt5SXa1xCPgtX9u4Cogt",
  "key14": "5SS9ZiR95dxVYDoh7RaKg6KBi956WyLTZVRdG54v8QMFck8g8KHSAb18MrLTwSyfEGLhXZu1vWsUECdv7Z4tyiom",
  "key15": "4sK4KB3SS1yZzLKsGg41AES6d9g2jAsqnW92NzWyamT8vnNdM6RKUPUBoxKkp59SraY39WBtB9Trhxh88mz7ukEq",
  "key16": "3Wn5mDTZAMnPcVLDW2S5PmhCJBsfLndRPALNze9LajbFr9nhP2jAzzRZJNGJyAwpHSyTKwcu3ZF7Mck54MAUSXaH",
  "key17": "55BiZ3obpA4E4DFyayW8zbY69Zx2j9gMR4nNrgXeZWY9FKuaW3CJGpsERT7KGWSuA2mzYtGyC1edvCM83Da1bNLz",
  "key18": "2ZMrXZDTiQCFrAZt5qcCCCeMHTU458gCe2z69yGRHumzYL7gGkW2M97UNbfg7yT4C3Zoj92ZaZFQEEuQJwuM3pyN",
  "key19": "2CqiyboUVqbppPXsNxjqNhiqzsvFhvQfqQzytZgsFQUiNXiJyPiDrtXq3h3sZHtmyjZ6vcwFaG54FLjzFLnoKTM2",
  "key20": "4VFr8oiTVvCdHzwonYSLaGx2mepuraodpdPyqvv63PkQQdA18Bxe6Dnk4SEeHcR2oTJLDzoKesyBtzUptMtneKCY",
  "key21": "4rhKmjxnTnLwC9xbUTHZwJ9peXUHSYKon1g1BX6RWLzJqSGZX33r7xMA8sGV3x7aTJ3shMV7VHZ3jzWqodfZK4k5",
  "key22": "5XNWmb2etaKY2k5iuJ71pYwn3Y6775ExGCYGudZgbpDRjxJFGii9WYZzvHxkGXPBxyPtWCbbfyrsPgpTDFaUsBfH",
  "key23": "3SGJK7T5HTgNmSVWFBZ1cqgcmTPgWC2daeYoLxa2oGx3UutmRxd5vpA9UyTTcxkUUvs4Pvbn8SinnC3Dq3s5dq7j",
  "key24": "JjXFVEUVE2zuGT116yBy6FShCakYGoCu92A32X6T7UuYkASMPpz2KEDeYRBXdhXtVD7ukSufL9tCyDDpWwEfmfC",
  "key25": "3s88cJAZS2CADmHqRDcdQfCFB3DkrUrpTvgprfzN4XNbGpPsuypYJ9dzEjs5RfmNTUbHAWbip3cefkMnyUZXaVbX",
  "key26": "4qBRK6TrSF6ERnLNesCgijrsAarwgV1uuyW8rq93osJYUpSPGSN74h9DmjRUdVMKMNYo9r7XCJieJDWqHjkksHyC",
  "key27": "2Mu9vWEkWXEm8TE5PtRa6BmZAGVCoUjFgFG7Njgnr1ALCXhQ2Tenp9MBXUGjFxPAEPnZRV4f4BmY7XfiYNTuWVLM",
  "key28": "xLYGuFRuCBEPyc6R566xtofHLxceJqSYSmybLoPwiTvxJ4L63avouAQGS34yf3et16t3z1cktd4aFzp6j2jHWDz",
  "key29": "4cDvy3i78aD8h5VCF6KyoC7YDvVvP6jnN8j3Tu7x5ViMAN9GLfMfJuDpCpgCYaetZNqbLyv2u5YfY3tNFBE7xMwh",
  "key30": "4zCm7qkpjKLs6JRvdfxnagoD5cPTy53YaFhd1ZrX6DS4gLdnAFxEaNffqm8WBjMdnkkSQF6kAH57BVhGiGb9edPC",
  "key31": "2c79ZTtj4YaPHTQ3xPN1cBJrLuZBsFqXtz5gSY1Ef3TF41z74rmSBRJgGbcC56frS7Trj2oFXHM4cikkdffVumF3",
  "key32": "4cukFeaCbW47N9KZX9EFEi8cZBgwnxXAvLqu5KwSGmuSBt6fj1nuhnQSYWPZzPXENvHwjw4VnqpZo8RxTrnwV3iX",
  "key33": "2trk2FYtwPf1Ud1dqyQ4xhMMFf9R6pZexwdBw2FHfTogwmbJ6YMpqGDsQYjAqhWT2zTQ1FdqARCVRuKFLRZUbgSf",
  "key34": "5CkTEudmVrXKpqapL65GYZC9Lcrqb69npm2ijD7appFypUgpuJfZzPv8aeye6ohdYNSbgJA7xPn4uWSQcjhPwkmJ",
  "key35": "2eqHw1KHohxQ5UBhx36SDnZUjwFfhMaGY1RPvjhyrPyPox5J2HdZEdDAF8gL3c6BHLtTqxweF1nxLxaPYZT4LLSM",
  "key36": "3yWk4Hu1K3FZ6iigi7pc5zXZYQLK327puEc1jfo5NTfdsbQbJW5bJ5za8ZBU5UYmF7NY5SHFMpVt5eDRYR3nER3h",
  "key37": "49bVgdLC6yNwPkqkJvyF2fD7Awk8V3Z6WDfypoQa1ZibCgY3dv3cdf5C3doGk7HzDFcGp88Pv7uUUKQ6FiDNSFxs",
  "key38": "2wGUMMEhNkHqfjQp1j4RUc5RD98HfYf71YotcVx7NWTQXaLnkuQ1iRuqGFjFewiCTVgUQVnj1ZkNV14zSYwjJLyG"
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

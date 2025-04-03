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
    "21rLEtPiedSCExt5tUeoh1wWjJL1pubN5BUq2QRMtEM8UJCJf3rasgozHu2robYrG1795i71KCtpeUfkNkzGCEV9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ya2zuVnuf88D1RRnAYWaMUH9VJdShAJYadVXtrvfGbEew67T8s2p2hSGBHZdt976B7vGXuBRMZNsuC9kZXGNnVf",
  "key1": "2w8xGMpZp3mN6RESKTKnXh3y9wMyfvHy61ugnTMufizbxfucsdPBdFHYKBr5g8gbYGTKSo57rWtbHo4Z9ZU6pj2F",
  "key2": "67YBpDKZbueRhqnZyFnahobMJSvkdFXkK1Sg1m2T8T1gkcaiGQJyuNZWjgz8pXWSikNVpb3KYCSN3ewYmAyB3mPj",
  "key3": "53LY9JnCDdVA8mLHsoaitpGpeWc4168tSWK52JeK9xNkcx8RLNBefK35HWL9xPmfqYevm7VCTDvWewWDsfTVKQGa",
  "key4": "iEn1DMzmznqQC5LnEyDXMiP1X9SiVbJx2eTPpRd3JtzdLEzfiuVf5QxKD8ZHjBJEMjfwyZQbJVoYaaL7hrsWHe2",
  "key5": "NTx1ZmN46pRPYYYCTEoAb3HvSbJ3nDL2w9bvq7LFC4wJgbxigZ5PGhVegxW3QPx6ULzNjRrsmd8hjxHK6zXd92D",
  "key6": "5Qq6ZwXrTvRQNwtNWdmK1EKiBALYjJ1uJKEt9uWFajJNbBXqumue9zMzXe6jPk2mLCK1htS4rqJq6PYvLvooUKoK",
  "key7": "5dbYh8BkTunUrxHemHhxnQxVoorYW17g5HMYVnuNuLK6X35nZmQAJKSx2HdVZFfCYbPKcFd7C8qpZaTSHzSZU4Vy",
  "key8": "5UQQcoD83wSJKyNdLnY9hLcL2h5WhkunzoMkMfg4L3oxVKZxKJV7P2AZoRSpmJ6GSRHumZnmbLaLWPou4VjR8rZ5",
  "key9": "q1Ug1QzMgdCpw3ef45ikMJdhnbY2fHxjibeGvykWuqeYK6AzWxRjDoMCtJsc2EMVFJ3LpvLnvg3sVFpTu72EZti",
  "key10": "4DHae4LcfSSNHNdyPj4smGRy5vkKxTYJFd5xnSwGGVC6NXJXcWpWiLg7kH1LA8rzQr9foWVNAdgbb2jhwdENJW9L",
  "key11": "62vxjFjow2esrzAFEajWWx93VNGnndDgmK9WcPgfWtbGaboFZrdteLiTy19kFEmx5VnERx4EPMh6xRxoLXgHCn3E",
  "key12": "yEDEUG3GBEdw8bqUMH8QYWdnPkgVeheDQHGBi1acmJ8oyxwMWZWd3WCW8xTQ8tddNDcfwFnoEdco6C55rskL2LU",
  "key13": "5erycS53mRMG6nhsiieXwGV1PqoDkX5zLPZo5u27tq5ssETbQPWzScmbizykKXsYd3DL5c7abpkc5DmhhABUbzVW",
  "key14": "2D2LmaaoZypMdC4fRfxwUfo9k2PE7S2SKr4Bb8s6ATM2U7JjcTL2BN39DrCtk8TS2Vn9uYEcNbXP8jq6c3zqSVB3",
  "key15": "61wUX4ejK9GFZYF6FtNnmCZhjM4CwCskZw8e2jbSU2DmmfJXCrXaMcxs8Zo2PXyW6WsQguHMyLqZxQNkkDW2ciE2",
  "key16": "24BAwcCTfYrAQrY8yMChbPsV437gNr5SgELwiYvyxrb2bdCK87YzxgbGQkHvmWdQF47n9vDytZsJbVcgLjuaqbsS",
  "key17": "43tjfehiY3B463o1pvntN8LToi2aYmsbzGjZ1BWBZbQAsfEbtLckVspv1LGiswvLnC5KWJotaAPCGwTFA2sPeFbd",
  "key18": "2GD2hebETn7bmkwz3GtrbDZj3uyUXhVex4Je3C9icgKDsDtiUbKSFxUVMCAzf1Ae76AFYTnr39bEYKESj46tA3oe",
  "key19": "4vEd4vBYg2HiZjDC1vexx7Apd4yHWpHgLPD9phWmC7L41X3NnDaEib3zCYoo6qjD1oDPMQropWozAAa6ZDqN2Czh",
  "key20": "4coBaPKCK53MEuU3eFdhGk6gq62GtwqDc3Xr6PkDaearCxws3AVY9zJTYKaHEtqUFxBUiN3KZ9nWPD7jFREFwrdB",
  "key21": "2Wmaq2b1bP5DPpzkxxGMVxuVjAvxwrRrrs4ae2u9Q2cEDSuUQFe2381M6oRN6pf5j6eRH78ARurfsqoWJyc1mB6o",
  "key22": "59Hfgfxp828b7nwuGNMdHMrKV3p5Em4AXgyAmsYXU4nLPBAaAG3Nq2yQX9YSBaQaaUJqWW48HqJcaZYNunAXXDSo",
  "key23": "cXT2wGCkrpDUn39abNyNG59EPdMFUcAYSAMAG9kMMrNyjwdAeTHL38GTCkrmNCUKT7zgN7fLBZnpgFpiEVvHPje",
  "key24": "2w6RhHZzLweTYGxNz6m2hqAAithHrrM6QUb6CFNBGbNT887eRg9Dz2Dn4XS1dUUS9FavRyja2sCX7PnDX2vJ7s7X",
  "key25": "4danoNg2tNmrTAkAfPYAtQQYDmq3iCkvH3y45cmSrTrMjecoF56UrxhV9KiCLW5M6scB3GQQha4juG6RWiWTZtVW",
  "key26": "eo849CEft9qiXSn6JzV6BjkpZu6f9ZT7hpESNL5nyVj8CXBWDm5px5vRm9K77kZHs5LegxgFw8VdYm6yDYwZEd1",
  "key27": "5gJMWUQAgeNMEMhooQb2VT7u39nrgPNtdk9ne8FkiWK64X25DR1zz7QrPbYEaFVBMUL19TKYq6Hd5YstcrnFK2no",
  "key28": "2yahaSRim4cyYQCxwGZ8DhcdV6HjB6nsEspSdbE6ZnMcVm1YKV7ADyoQu4e8NMoeYANADDGfypLK5CR5weFwQGFS",
  "key29": "2ffiACpFykKHBNwT2TpAfRZLhV7rZpDGTjWSkcr6k6xBG9AMG6mUYN2f2YZWrsmwu2vc4JbX8EAwaHRzGLzPRkKT",
  "key30": "dEzwf673W5EzFFUENupKnafK1YwzuMaRp6Mbm1E6tr68vaHhJZgGwASef3ZYVwC8BLXy25jCeaoM3N8u2AqMDHx",
  "key31": "5VKX2ZNuf4LQ6zw5KNUgYwnjyznfJ98fKooVFATzzBnFiMaXYkxZAAaLumtDC6vt2UmrA2aNojBwfEkRzhY1xQr3",
  "key32": "2LqkvdaZMJDFfHjAWh1aDtwHzwEiNBZabw5k4Xmp97VdaSmgwYF3FqFGA2DWZURC3Z85J6eeXVaZkN42TU83WKgT",
  "key33": "5rtmE5mdJ684B3Gz41czvduDLmDKtMkN42M4voohCNLmragyhypY7atV5bNVPS9M2U55e5ARbo8wFx65ZetqWEpV",
  "key34": "4wtLYZvD5BFrzUrvKekq4SvAQtGRaags48WPgEcNLixx53TaDAwVHdvNS78vaEavM6CwQDzU3eyhgKbzZn6uyYEG",
  "key35": "Cp6EznCSRPTpV7m887CDGvLYPVit1YtC6eiC9Ehss32WJ7sdxqjc8ivCreNKqFpbqyZ5u31DQ85EkcfHaASukg7"
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

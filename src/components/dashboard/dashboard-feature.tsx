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
    "3dq4nXoEWGYXk43RoYe2NmHNUypN7wYtxW2Ai4uX9p3t2EZN8VRR3acfVQF5ET4HHhuj6KDhQfSyC2th5feCnKoB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p5yLpoUz1gefwJx4oaNaUjAcHDM38KtdoxZyL9pcjMuS9uyj7niUErcMNQP5WJQQ5nLYptzVgxmYcaWfaaJKUky",
  "key1": "7uxXRRasBmvQPAUBR8SHYyHV2nrNo4Kni9unZhFPoKSG6t3N72Wh4HHqvHFe4n394yNgVcMBnQrnAp5iYVGeSW2",
  "key2": "2vTxtH5rkg5R2AcAnfXn38shmM2oYqWvDXs27KQgChoR8p9UcW3VUWULJcAywcCyVfkGGDojT5VGhyVVxFRS727f",
  "key3": "4XFTHG6GonryLPD5iYfoyJoFEomGyAUj7Lur22m8yDwPvq1p3L1GqtuqrdPCvbV9ZE2GRo6CAiHC8GjcgWAskNi4",
  "key4": "5FujoGx1tznpdNQDqSEWoHopz88pS6rx857CPQ4o64X4ACFSywnf3RPheEoRTaTKqy4YKsfRyiavxEXt5n548PCK",
  "key5": "C3Vtqu3Xw13xkcKfGgEvbC6ebetnHq5QqWNe6J8aPn5naBBx6kaSHZDTwd3zhR43oVD4psz2SspPiJaZs6EumtL",
  "key6": "4FkY6AcyNJ82RR61DFWm99KPMqqzHoK1MNT3cSPGQRfq1PaXFxXbaRCLSAdnUNYHCWiLnBzwxPyvB9YYrGdYJdXR",
  "key7": "4WF3N2ZE7EJxkkm1SeGiSkU3AKRke1K9f4kCq1t1rKW9oG3kYaMVxot6J3BnKbFsavWjxVGnv9hVtoRTtE4T4cFw",
  "key8": "v18NBimDU24ofWRNL6rgmBLNb6e6N7dVSWeVGvxVcipbHA31UWoH3Tr9q84h4bWzwr1i4YtR5GAb14uLGJPvT6H",
  "key9": "3sFC5Pc9fxxFuAbmXJYFzi96HdTDHhLnrbS7NDzSoQjSKXNbmTnH4EfZjCDwufPk2bMqYfg3WWPcToA7L1c8nDDQ",
  "key10": "4VQwDM2YMvBb1vezVyfsLWUJAnpnDqLRi4WHsprG7cvjRjk86yFNXWBQ5fRL1smoLnSkso9yg9Nqkd3zNE9TP68F",
  "key11": "5Fdxn3AjNJTF4hSyNrWUWDzCQgMGcVTsTSpfaViJgL3TukGWbwKJQtF9djLFHqmbNbTQgdrBFKC1F3KLu9nBAEtM",
  "key12": "4HztVWvhy5RMpcfkKsbuTCgonXWqkLrtj68VyEFS2aCgqPxCEEpa2Td9mrvMU8SoxKwnT4g4LPRqEAUWx2oKiCmW",
  "key13": "5VGWUGQpwWqWhs4KYHdMe5meEvooR9Xgpk1mqsYjZCdjxMrApuZUnvXHzFFyKEfiKozLmPqXU84SXP6BFgupuXGD",
  "key14": "LGs66y7LHhGqT5zVPEbbJ7Vy8Z8FHYCT25SieZNDvAmAJDfKgKFPYSQzd76XJ3szvVBf3fCoyhcQXSHZTtnAVy7",
  "key15": "4YF1UJySxvaex3qTysugJdmVMJ5M1g821azyjGagDmQm2rfGM52EQCkvav9T1XZpR4NpE5Q4sKP9XzhUVPDAuJEp",
  "key16": "2umQzDqnzcWJJMztHqM2zcrT2zcSU1zYhBxrHErnehNNcHt3X7peZvA5MkjaGwXKUgvu2GNxxKx7Y34oJrworqTg",
  "key17": "3Upsqv6nquL3qRGLCUrF7QC84WqA1mDaSkdJquqMvJo2uVL8wcRAWZcrc879cZmvafDDHUQrEaXhYLPJqqaZWw37",
  "key18": "272ZPkYxunvGsaP6HPTZNVZEyBogrekidM6EE32Wg7DL8SL3soRtUeQ8cYtp3RCwyZ1TvUEZ8yFrRR26pobNV5WJ",
  "key19": "3c9Dr8VmthagQpakXZaoqLz7mfU5T7KhhFFbDx5zwQFEmNvX5FP9FMKiujQETdbkYdJaKHyF5i7kMVxriW6EMwo3",
  "key20": "hQZ2m8cjZKj1Zmt1XkFc4jo1fqjvuXnYi4cWgKwMhbe1G182zrRP4bZbnDgT8zdiAuXdgJUsWqXNsGsT4KviyHR",
  "key21": "3qtr1hkSrVxoxa1pwwR3gKgnRU4Xj1wz78rYZE2KDe34tFvD5CzxPHDeFMSpDMHwvmS7oqHQGQGACbNeLAoBNhS2",
  "key22": "3fM8u2cJhxFz5xEtdLLb5f9YBi4QU7DeibsXv933GMeFZYS47nrYbaZmkFMHBgdwd5e2BGGCqMD6yNcrfbrqL3Lt",
  "key23": "2fgNsLQUqW3dkEqeeUB5yFBydPYrR8jMEgQEicAsBQ5oFRykjhQP56nnsCWfu1ToeiHePRvF6PQn5c5c4ie7X4cw",
  "key24": "2dGcHJvjWqz6faqbEaepRhkEYRTCPv8kYya3E8eT1E8Py92GEAfY8iW2Z3EUocWPLJv179DgQa54dVVWEU7kawB9",
  "key25": "4QSGAa7CFm11iSampU1HjwTjWBZ5QwRQusc5jkaY8Cbz8PLGKWmjtFcTWB67RpHm6nKE81YiL6vHiG1xossKJSMp",
  "key26": "4xGRTduWBoioT3754iuVELEhT5gMYLBXionxSiKXMMJkkzhibfcQ4D9dBBgDLTign5Jy6tJTpbtQyzA19Gs23kRg",
  "key27": "4Rprtz9TDqzsK6WR2pwm54Wsm7AtJsDxRppQoz4JnqNc9822GXKhq8aPLFyREx5W8cVsi3pVGKqeTAonp7C26MyA",
  "key28": "2bCTSTbk38SGinyfQ8nyLGw7SiPvmqzrQ7KvyAr6bDL3aGbCXj6yHUwrDNi6Qt1Dx6y5Qcm7eHkbufDLL7cSN5xT",
  "key29": "3CLzVxx7p2JkJQRn7xdwkLp4WJYcKSmKPs6rxqvqrG9yNCQ2tq3sqrviBsHvAvCYcsh8VmoyQ9HSV51jnTUFBcQf",
  "key30": "hKByjWT8zcLfV47Jgh69NbAmwssGacaMGmygoMEez8D3Kf5eeHUymWeYQGSJ5zGXLW6tDH2ErKbvRCbex3iv29a",
  "key31": "2TL1Q9Xr397b5Upb6SvsX5eU1ex79BHSC843LYJBfVqLQujiEduDwfpDZ6u1Xbj3X3e3MfyauLANeLd3ei1ZaViA",
  "key32": "4ZAGLvsuT11uTaKdmqF5DdJu6Bm8WvW5SAGCsqddcEfxnJTUJXSbrbLvAz1FwcfD4UakcxoszuzBiCJSxrJQGywa",
  "key33": "57aTegwkzj4NP4owEi52svVGXacwG44RPhuewH6ewY2RtHYmLLWwYSZ6iHSrEDdyoGPQ2M6v6QPurGAm4U7273U7"
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

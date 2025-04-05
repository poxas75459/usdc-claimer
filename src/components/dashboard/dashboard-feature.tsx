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
    "MaEMnWpAsyhfqRQZbmEVjjbFGh3Ap3forMvSsVy3EWGbB6DjAaJ4oex7dSGryyhCp9r2oHPV2MMdFgFu8HfNqCB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gZH7gWMzmvH9SSaZB5wp5xEm6MpP17EqdEzSpJwLYePrgoDb39ppP7MBoXvuET5hDaLpr8EceWwoYqmCcMnz3DX",
  "key1": "2a3d2mro4EtHz8SgkRXSjwSrbcyr1XocCaKrkPn9T5xJjFp83X3A21EE344uw4gBsat3fegWrjJVAHEpZwtXfkJX",
  "key2": "5oigZahABvCToVBcz1SDxU8X1uVb5XEVxdE7pNa8ybNdTGjSFN4SeJghqX4zWbGsK7J7Ffyr9HUNCdvKEPR551bm",
  "key3": "28pggLE9jY3UN38WCZiW6iDeiJNrCuuKBYDaAWLpYaJ39djkAGCN2d2DiGMzNgmsDcQCFVWTH61hLNyTELygwKLX",
  "key4": "5SLR8tvcAuXZWCD61Di3iiqHVKWKtzVurbG8adxtKnMHD1y64sxRimjmVVRArPF5mdLZu7uiotEUS1k4RqSAWirx",
  "key5": "281HyyKna7k6dqkiHG9EHic2umMvvjGZLFHjY67KMkpP8P6jFMkFZhNJCSsAkefxKWBu1nRVZn56E89Y3NgrBYaF",
  "key6": "2TPPzp2hom6Phx8ZCi8zrjDBuydwqoWMBWUwQgXu7HWR92ZpQtMwZJYPSgEbCHp9DycRhRDfCf5gCYXQxZZMHsmL",
  "key7": "37QTx7sxt6axJTXmsFjn1daWxePGjAmtaruoX6eWD3DAWo9jBkcW3iBX7U2uSR9Tn275mFu9EmSoAhV44GfaCabA",
  "key8": "2oLhxzpfvntjPe47iCNtd7K2JwmcHiDXPpUYifuQX4kL5KPTir98BmmXDMDjUFUr77Phvr6GYubavhedzT3SWxaK",
  "key9": "TKYCMieyNhApQk9Y54KME1dG5NsFheu1CjgWodrbpTi4Ktu7RF4pqMyTasNuHGKs6gFkobxoQuymN8MXQWVZ7bM",
  "key10": "4KqFGSUKYtdpPg1nGoxVwqn5GtCk3UzLACnn6fCqjodDi7S7iPaDbWhnPdzKQXMcdxsuaf3ctD4qCKZKmrUFSWLY",
  "key11": "2KBkaUZnCxhgqhwnqe5uHXVk2HyFDSTkeXeaFtcfdiHThD7yE58H4dz58kyiwB2KUZRJqSSnvpm6KpTNHm1v9TUF",
  "key12": "3Uppkbv3PMoWaW2vzTrH81QUpBrYXbJ2jV55b1j8gViFi6D13cv5AxKWWM33kZFjZ6qBfBYrxueif3Ekj28SHMFE",
  "key13": "2Ut4FutJ3TUC8eoFmnvQPbw2KaXdAxGLqf5wLRVDHxWVG64Gf38crZ4AtJThpwswg9pSrHUQPd9318YZ2uqdQfJp",
  "key14": "HM4Y94DmRgUSvpZSqXvYy6gixcT6LhfcS2kDShdFMq2n3ByDhJpCwZtVamyaDUJ66JDRrU29dGxk8sUHMEmYm7U",
  "key15": "2BB2BA587etvcfg7maQNRuR2HaVkqHa2AYad1VLmJLpf3odWvFDaCniBpuPJ18f9AXdraJXKMJqSm5oUCfWbMJ6k",
  "key16": "3iEKKnvwe3GE8KQJe7KEYg28ZgbHJ2geTr7cKYJRF1ux7yFyM9N1Q5wXL5KyhyWbVHGNRpVqXJk5yyQRyMDKhyZs",
  "key17": "3uh2mXGiJyRDVj28WD5diBMdW8jiySubFUtPpct7F4jXZtxBEUFwy8dKhwYrAawiqKj4MjLLPNX5NKyTNrbJRRnN",
  "key18": "3MdKW3ZGuf4KPY1jRzew8D6wTy6iAcBSdLsZM13cmyjBJnqnPyGqyxxrPyTycMofC5pgMnh7DZuWZm1tYGhZoxDc",
  "key19": "5qrBgkGPuCRUBxdDyP5gwLzNBF22EBYWG2KNfDbEdTHg6LcGvNU24iPy7KWyeZfrYjGzrAYJPeprRUgea21YnTtK",
  "key20": "5GXJUF1D6BxRkFcDY2fEbFEe2oBvocX1FaXa3qQBS9sd3HWyitaGEo45mJa9UhJbsjpCme5et2RCThPKqmFKtNqJ",
  "key21": "5ejmSYV71Mtrtw2mFTGsgcrBSbs86erMC1CJxn55uJM3SyQ62tJc4QmWHqzru6J45BBYFZf5w67aSmcg7MsbNQrJ",
  "key22": "CiDzd18fkP3yrfig9PYzTYT7Ki5oGyTHiEA77bH9XoZvY2GgJYsRh3EtDY7y9aCEAnRtsin9Em1Ajgjd48zhM13",
  "key23": "4E69WQoTq7swMkYCKMtTCFYuusbmFGhkZR8FHAw4Tja1gXAfEsAUcREUqYmwQjT5dFGQacEVNbHBjUsCCfpdbikm",
  "key24": "5aQ3oRNDPUPj4t2esYBdCCEzpnC7jZ8KHmX8d9VgddQ5ufKaqLwTs74HEx16W2yaXFTrASQ3MDpKuV58EQn8mrUT",
  "key25": "3hnKrZQsJVqJ84QnAPcdxzDetUJv5yacrHgMrkUUzzbSwQayibQf558SNv2hWsrHGYCzafCZZmkHzuWUzWwYDWY",
  "key26": "GQnbx2nfK8kvKGwPn3TaVzcqdWoAPQ2XbECVZhx5WjxBTvKxN8ZptUosYcPphKE2xUw89qWc2PoJeZpFDCCw4Uu",
  "key27": "5EXstLxdQyJYcW7ZPvtkMxy852JZyFmFJ2batb5UoVpPFZXV3U8MxfjNanPJQcyL4LEStyDVfxiWGrE5PjcT5B5j",
  "key28": "5M1JjUQs5b7135aDy4iQ2DsRhcPwBG2NAyRE4tMG5WCVgwwVZVBjfBQLVvCKPEpWWs9N39c5j7hhFJs9njRjs6Wn",
  "key29": "b57N7dL6aA63rGrwx2i2gJrXq2K7eDrQm7cw6tRrsLmBedWDavjS4NZD6M32Pu2K4ie8F1Bipx8Uzu96EjzS2hn",
  "key30": "3aTNjr6kPVGpZcn2PcJVCKiVbVNFpmfWdbWsYXpvS5BUf2nasJsDJK3rMExwAbuMun54JmPdeyVKjcPhYcCAwFiv",
  "key31": "4xKYdJxhv9HXSqV1vieha9KgDs1aWRjQk2eCmCArpb2gxBtBHCeBii5SoxdMJfv28nZdxT9iBcAHvo4UuTqXwVeU",
  "key32": "3wzMmR5vxWMvn1pcup6GFyLTXwUXUt821xYQgf1RuJJjp1GSH9ypZgP62pQbJGXHt539DsqXgnPCbd33tdDK2mpX",
  "key33": "pfhPTXuBvdZad7cSsh3raPpi36kEBQFhCxj3dcEtmf1Vhsv9gLQuwiozTAKv48J2ytMnxwY8gYmcA95nfzZTf2E",
  "key34": "EX8uAzPvYstJmQsozZGWoepoLDz2RgzhGUT8fdksdEk1oxQskNvH68AgEsKYDN7PD5CdNxCvcEggYNWDCErXKap"
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

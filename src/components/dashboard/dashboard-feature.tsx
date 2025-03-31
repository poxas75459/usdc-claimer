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
    "5K26iywdR5AJ6QW8Wr97R5TNt2xj5et9Xe49Aiq2dFPeXrYrjJx2CWDcWDVwXaYsWYFJt5XeanfyDckoQx4thudU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "abNYngtVdn6ttNCCFU9nkrJpyAc8ScNhBUZ4WEn4XR1pcSZ97hyyDyuDy38CShTE3tRbxE8KhiAy1dZ7RCPJfdT",
  "key1": "3ZzpJ7smCt5bh3AJdkVYBrEhDN4QKDJgCtVxKgqqjD7HRCTp8NoMYJ4hgkbd8dnpXuj6ThBnRRt8EqqURVSqhuXZ",
  "key2": "3vv3ghUWGNFSvNCCGHtkeTereVhSdmzpvWs5yQ5DeVZXrc3wAfmBxdtLcRvnX14RxY96t2kdr6mM9oAm4MFyCFb",
  "key3": "4xJvPkkrWjcp1pp5mcR6HNGpyxRC6iFng8Rry4EcQHjrjZCaJhC9qtRhQ3qAKF7BuWSMqMc4PK1ZXE2iu5zXVjRY",
  "key4": "4ebCzjUJPNbNcRHpESziA9vPtskaL2nkzFF63uUnioACvZJQBomexzG8fujBMzQNB1zRhXHY7fY8UcTwa2BnRwzH",
  "key5": "2jcfj2hTcnpRCLkgMJaCPoaXQygwWditMiRcwsbGfGP1ptgVgXQmtqzG36PN4eyBscHSKnHS4P5zpka5DHs6LMEe",
  "key6": "4QqvGwT45fqSDi2PV3HxnjbekLofa4deeF4vkYjsZGaGiGSf24N98rcrjaqBiwi6hm82iEoAqKZ2o5pU2DYZDxjq",
  "key7": "5yhhaa6L9PggKu5yaWV8nyWWirnWxqDtv9gtajFnN65w15i9TyCn63WG4Nsc2LZdBh7ehts9YDW1Rebog3VQgAcX",
  "key8": "LBH9KYHiD1qfW76Vtd56oGZkZvS6f7BVRSv8cBkukciEfrTqao7rnHuNpJiGxrrh5tNLDV18bUuh2zhBZLSS1h2",
  "key9": "QEuNfeWKjZrrLMe527G9DvTHKw8fNcewE2T9oxxSxZkuwnMZ5d5GYZSRXQ3u6xFWv8Jq1vPMAPUmchDoiMGFzPu",
  "key10": "24YDXzd5PoVL2DPCEZbPpoceqsrCzMEoUWHrzdRoqL8As9B2HBbHX64CHc8ZSMiTnBPLKpAsxo8urdrSTNXZFQjU",
  "key11": "57Hyn2DRyf5dm7m3dUD9kwZb2xcBUwRoVLhmxsbBAy8jK5BebmcaiuT3yN4CifEzF5P9Cg7AouoogRdJjbt8rPQx",
  "key12": "63vXh4rTNjdgbn89XWwNjtuQZ3e5Jjj8eSW5rqiSiZB2kpDhGmud6A22BGcqAjMh1hv2Rjt3wzf9N4CexuM1RxF4",
  "key13": "16J1tWHgnt9zNZFUb6H3sLJRMvoLZNhD18vYVZxghkuxZY4NdRoFkiT5nU7VMdRfSYUe46ghjVJirrufrRFyCdF",
  "key14": "2EKYx5ab6SCvHvD6WLHwBzwymPfwUodAJ1sEoMsHVFMD1eA9qpXEcRtXVnxKMkHmzNMFBbwgcWN25YHJnmBKmryM",
  "key15": "2Yyp6gF5VbLGF3kb4Fhzyf5HwNRenEyAaNxnsLYNHCzgskCLiB4n4vdRSY9cjzhw87XtovY3QFbP2NAHLsHN667H",
  "key16": "iDQhWpLtLQS8jvbpyCV6J5tSdKQCBSB9mxNCX9dJ6MAikYyviWfpaBfBhTELyYr5m3QtEMqzQnvCw4QM39EaMSj",
  "key17": "47FrtPQL5WKSpDVWUKp2YgVzYBmqouKQBveHookgotTGY7gD8sBA2foTZuhMgh5x67pnD61CyfnPMENTPg66qecd",
  "key18": "5sZsfc1HMWj281VmHpbwBQ1bT6yiFR2XAV6jJtmErqgpmQ4EfYfcxVckV5vC26qQYh3xrL6V6D2NeKc6VhybhFby",
  "key19": "4cTHKjxjm45pPezbhWMVGXSRCLHJrQTrSPzymgiSy3z2NRCT8bWprG24sn2gguLdWYcQFhs5Fb7YzmQKa5N6HhzD",
  "key20": "5iKRKWSzh9sDuYBtTpvch2ihVitPXy4iKR7J7TcQTxmHkqFUxWCoRtN9rqr8cRX1WSs559uRKcPu6ossMLYvKWAK",
  "key21": "2n8HoUdmQzKuL9WnnWMvePTtnq7cFPfLaZZyZf3wwBfURb4SUxhJoSiARpmWexnY83TbW7r8wXUj3Gu4pmG8teMy",
  "key22": "qX8diJNdzam3rrpVBpZFwvRHp4BhG6zFHhvYjzNdFu1jyEShyfSVjky3at6b5h9Mwov3DSRRWmQUv3Kmirbsuit",
  "key23": "ZNPj7JiyhiXVFTVDTTdtKvzgBR3qURC1JwwTBdGhu8u7d7YhW9CNPxZuMyWZKCMpepfduSCKS62Kbta6aDcLLyx",
  "key24": "3VnFharCigPhjy9K7fXquYzi3aVXsD3HnzqWfVJcHsShaEziYxVCcTaWL86kw6WVqg34a56MuR8Y7dLFsxSBATpp",
  "key25": "26RvBhsq8NAA28rSVPbkxixP2JJTJZggnJ9b2Kr7B8naf4Z7VfuGsWCP3kFvhER2iz2pFrJsKRAgz1ztqR6bEcEM",
  "key26": "283ryZJCQCTHzc9ZLrVL8eerSkAynwKtFkrv6zAVS7SDxHPAibbV2WqJHJjrQqumUT4KL32u5zWRsRkLGBFdjnJo",
  "key27": "4mQQeCpVnaZ7jQWeAUpkSRL2SwEx7QMbEzQSkM3MKQmTWvg1iYXnFkBbnBKMvfwsmHZnXqmqsSyt39pq2TNscD94",
  "key28": "5QfR2bGLQ5PD4FRjtC75ZhjGJjqbTRQi2bpJLFUcCHF4kB3YhuaWt5wAj5swA467rTiiaXCm1qr1wYBEaMhNh75f",
  "key29": "3LKa5Zf7vpJfG79qzVTuo46oeUVhcPXEL5V8w9qckTcgXXj383PvfhJszY8a25jfyihMttqjKTuaF97CosTcNnaW",
  "key30": "pVpuU8hDB2So24Ah318jMyaRkzecpcHAdjSHEjnMcN3oCCZz4xVRvohiXtzQJZjHUv8YJzUo4WWGnk3PmPNip88",
  "key31": "2J17PEjWuJb4L3xok6jeBeQgio8KADFxyQwUtZDQ3E3mWutHbAXMrfqtmGxRggRVy1HVqT7Wexqfh9sApTtERynh",
  "key32": "toGjKYzytbNsXkVNibH9RRLAkh5Rpc2qCMw1wYC5UQftrbRMUZUdLNXZcVDnvCuoJdshi9Ziv4y72FCr4dMs1V3",
  "key33": "5G4LBUaB1PJcT87B4rKWM4PbRcNSLdTJ3MjwTmvHJuJFtM3BhExCuQUhPE8pmKzaDsGPxUQhHbeaFQCh9Dm8q6FR",
  "key34": "56VAVgLixyEWZau8o2RFhrXHz8c7bZKSKcyucHyokB7A7z6ArXPFueUNwS63VBjGwJLn4Mhc8xSnN63Uya3WUsTk"
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

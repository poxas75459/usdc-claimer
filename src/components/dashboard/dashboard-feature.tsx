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
    "4TBeLEMBBjP7hrgopnATG5ap9sYpHK1vGGfGSM6vprBv9WQq7Y7BL72qkhi3rrHGpUn2sU3paQy1oWiT3XRTxsNP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x84Hgc9VT8pnRnn5jTHRYZg8Wk7Rgj9bfnSjYDPeaT7h3knxUR5fvnvRU98Zvd5fG6Wy9rohdUpnYRj78NKdgUh",
  "key1": "3DKgd23tBmShrU7AHovwKnoe99fpwSEPK3A3x6L76EAwxVSfzp7we5DriJrEuzStHRGe9gE9JynjpK3uPMG8TujU",
  "key2": "ZGYaoc3vYFvSVpfYwvMRr4PgJHFYyP5LDZtY3WEmiYY9gcx3DLC7Nev7keS8hjEL45jfe4gwFQoUwERo4wbqdAW",
  "key3": "2Pmna26ivcM17Vbn1zJhchCeSNnWot3C1X2b8iaNACwyzSZqcNie7criwyUdotHcuqdwV78g1PH7n8kptAHv3V1a",
  "key4": "Vv53AeZBzYrsbudK8o2ePJyJ8gup8sX7zBXYzk5xk3fnVLmWFgdUxEMrJfqyHAG4mEnuhsCsSyxxsFrt89FGAXu",
  "key5": "1X4iVz4sCR6UYKStuPEXXngThUzPNTcYu2748M6Z9V489XtQcKyr1fdH74LeEn8rxTeRm9cfsrw1m55qvvzu9o",
  "key6": "4tZJGw8XzbLmpGxvgdskd2sAfDRLSKuMQ9k1GTdHec3dG1XZpJCTPx785BhtMLf89B5H5hEDEaN9Wc1XyLhuvokY",
  "key7": "2sSGMTLrGd4zJRxgU39usWcZiiZRigwDd1Y7cQ4xq6pmb8bK7juRFcr5xe4HuBbZCwRxchdHv3jLvdA8YnLBQyao",
  "key8": "4481YphJ8DkDBaveoN9mPsXzE9ypohtDSr1Zo36ft1Cx9VLcfzCDndibNdm5ovJhoKwrwMUrqfzzEoFyN8V69J6t",
  "key9": "Xr3b5u4x3icZAtGXmK1Yd77JBTeEoVPa7kW8B6xGiJjX5mAWT9LfFJUv4g3Tc4WBMPqRS9zXPd5kFmSfdr9SE6K",
  "key10": "2DtGiiQLK6fegQZPG6DFQsFwsA62oBjtrBzfCFz5VNeCNaAe1eDEJumGMCykXwsjr9XvqsaA7EsnXcsMi26Uqr6n",
  "key11": "5MnakQH1eXhpc9KvYGDkmTg8cK3gJZCefkiL1k2BNSg1v1ECNtFhJU4FzNnmhwKbF4nDSB22HNZAXCjroBPCDa8F",
  "key12": "5Z7kfEtXhs6A1crVipxzCkuLnjHhUvrtDb79W5A2amnQGoZM3QYWB5kXgsggk4GrMpmFRgtSMDg1aBSRoY7opP67",
  "key13": "3D4BQWQuXR28pMe262HqAaisB9Np5C3m7ktkHCizSQZW4cs16cELPnV8owt8sC5H1MXHmT7Pxo9vGGfFREPf5UiP",
  "key14": "3m6H5M7rXVRm7StSaKB1tGBhe1FWNAsfq4r2sXCBSDgWP4QamTqZyeDHnzVyxCmLDsauL7gUg5jT4DNNoXhGz9Vr",
  "key15": "ts7rmqPKu3fLzcupH6DqG1fA7zwyxiGoWfgMzsscW4xb3vxtxFj4uHnnrdKJYnrRZErXfRXXBhhksiDWbMxFjrq",
  "key16": "3EMiDTNpJZdnE7vcfk8NTDCepwFuxwxiyqRLjph4xn8D4phjrGHtXkcSTnYwyGWehZRkzcT4JgL1SQDZvNE3Sxbi",
  "key17": "18yv5mWXoXdsZNGWLG65vvoSa6v3LVWy7QvdFzSRw6a957DTyecRxTh1hKe2jdP3c4ejvG7vNDHxt8YGcYVDWQs",
  "key18": "3okgHG2JtfgXtxs1WUnY6jRt9hbmsrgRAxJuSyjpCrPVzaREGVrBua1WJE7H75DN34E5627WMaWWDVtMnJ7aFfdr",
  "key19": "m5wjTUGZnr4yFskNXJX4YV9ZssrpswHe42rJ9JeP2GghCTaobQiWppcVZd74AViYBNUPLAQTi1pkranaHVbxr8k",
  "key20": "2cx2fHkmpEf9kUwnLdnZpK1kkbzAhmXFFMszp8hFSG5T71AXHVnLLc8NXCfesaETbjTMJ1Jw9jg9CfzwViCFqvbz",
  "key21": "4EED3Xq6cnf89wWH5Ae3aeYkooc1i14xGobLPJo94SefgZz23W4h4FnjadCyYdV2S2qPLrRXvoNLGtxJTym6qCHk",
  "key22": "5n7VxTjidZyGffWrnorNYae9zgQY8gsMY9STC7SpWiNr7D1zvQhaTS8QkRbgiA4kNA9qmiL2XbPvFsfcNnKJpLud",
  "key23": "3DtUHZPq5fnvWn6wocMhbmizDRs59BhcKdHpyTVQ6KFpgRX8ghsqvEkwSnR3AiDKkCWuG3rtwN4oUSaDeS9x6Wbe",
  "key24": "2sbT22BsEoYTGzgNUxrybaLuN5LDiiCXxGYfV44QcATdKqNvkm7GKQkYpwAa91vr8WmqhSqjnCcu3uD9shotB3d6",
  "key25": "3piHa4dwXVSsDq1Ls3rJkvRRuWXCHcUoLVKRLahNMD8gqB23ijDyam9Asds56fqpfRUqMFmN2n1duEgHBYZaM6Ve",
  "key26": "55yKD3HNoAiHKxt8ZXMNCQm8sUXMWMTjQdzftsAeMS3cRRDLGT83LgqDD7bue525ST43xySqMAhLycTb1XdzpoGM",
  "key27": "4sXBGqTXdnaYGqr7K1vYYHK5aZUL1eoFGREdBxVrTCS2zk1UG6Kz7Jp1fTcPv3iZjMiyHAai5CbjkFb3S95N4rY",
  "key28": "3i1DqY8kzQNrWnqhtmGALWzuuzuFthymyoZUqrQ2Wn2j8NNP84YvPD5ipa7JdkSuQvcTLL7xVRAidUosCsKTkApD",
  "key29": "4Mjk2cz35T4G3UJSaw71p1BBEqtmw3w95P5Zkgdnc7ojxZWLsfv9EqYJr4eMjGJuXp7QWxhicgmePLdDAjhWUzRV",
  "key30": "spaG3pcfe1oR87mKsrd3UMTLFBt2iRyLw4SBMXmnve4Gv3UAVAQCZiVCPBY8ihjmXvfB444JH2eKVxzxYq7dkqg",
  "key31": "3KHPn2yLfHnw44KGDEp2PKhFK1D8nbKbZgwnwWvpbea7Jn2krHbdraR4q9QS5J7aiHZZFn5PtTvXSatxEiJRsgnt",
  "key32": "4iqwZUe6baZrA8JscihBMde7b7yxwjoB3YttGqpCyFo2FadkaAxKNbpgUuPhT8erXFyFqagMGzJsSPt135kJTbMz",
  "key33": "5jjEvpavi3mVFhLhxnGZrsrTyPT47uuQ9VT5ZbwP52xXZCqLWXJFmt6tme43rgfM1hTgr8nZNtjaV25spQq9PbAQ",
  "key34": "4XsKKkEm73DHopkPZLDs7JbQxgBY51deZdpMd3TZ8Xu3VfNtJ5scpqEYUupi35CALoGaPdDs3uvmVVVtdcKsD71g",
  "key35": "3mk37rffWwwXNn2srtgDNNgB7ko34p53vQfrNyyhebbwvdwismczK9ddHN3dxv9LHCsLDgXNpKBfp6mENNutWzU6",
  "key36": "4XBRWgRmq3r9ZDuaMm3kEccrR2Xra3zsdCAzMFKqiMoF8sXtM2Kvq7TB1SjChfwQueGxJeHHGcHaSM31TVg9nPtV",
  "key37": "22TzGNn3821EhB4kGhLgX6mu4F7TVz4GrNQ9fC5v1F154MVGmsjCmEsCLZNZEQe6zJGPEBTCpkb884fyURqRhG51",
  "key38": "3uRzKFyta8NWDwqfTStASKhtAabuJE5X9XVLfuPSke3zm7CasQuaXnvDoBjr8ECSLW8JgHyZuc7Su64E6TBDKw7m",
  "key39": "2PDWKkffPaD98xm5MbGcg1uxkobsSdUMuXK66XdhDoisSkkkFx1BavHB9XrV12Q1rD1v2zCKGySHaJJC6nNxfzw1",
  "key40": "4qvFCxD625Kpif7ejv4gWKghWAo3gXt1PHZqg3HvDqYR8iekSb4mG6jej4jQ6Ab9g7PAfmDSHsUXfT8cj3EkcQz1",
  "key41": "BvByMouWkgx6726TtjQqr8SxbpbxdxT9dhEp6x9ALdrxUFVFaiuGrqFg8KKYa1rnKHWHMrqebYavW1VxhjKHinR",
  "key42": "2Pu3nbcFoeH4yjd5mPc7QSrZT7gXQMCQvzxby8atyVgsk7hWgMqoLM4WYxk1jBb41nKzWXEFgduMeCuALQcteJjY",
  "key43": "5L52Mt8SmkYcDrLLFnxN2TTCEx74sYzBtTNrkyHG4J3LghhyxsyVCSHvKDJv3Cpv3rtC2Tw1QkYvVvLgsiGMfERU",
  "key44": "23bbc76azmDAvYqPSLyPdHqnMsPfFC63uYFPSVd3pN3wgEhhZMUALi781MjRzJqKpMDWFwgSeoaoEXPqZqPkkLAo",
  "key45": "58fYw6313NuU5gDRNwBmk4sqb5teZsQLXPJTn3zqieDSGnVkMmaNxLREpJDrBkUib3mCbtKVNuK1wYTQq7vhG3mP",
  "key46": "jPzAYXgxWduqb7zKdRX3Mgu2zSBNnE8PbxB63fVjr3kjeVTVAeriaV2oAZNCHx1AFhs1Ae11Lr65nSzyVdYSFJA"
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

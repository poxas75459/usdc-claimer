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
    "42hfeVV5DbCLzRmyKJDvehfqMGby9TsZt57EPE4QzdE41ESxat3BcFPbLpheDSmFW13UJhiQpRqy9qKLDgs8LA5i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VD1m48F25UnfbQ7NzjjnbaeEF1aT6DBJ7rbC2QEWkwa3skHWpy5udtgB85BGucc8XdwHDp9posU7xPTkRwk3apy",
  "key1": "3Pe7y3G2XQpsYhHwf4tip5TmZqzNDeKW8pta94YzY2ohqQFuafq6hmbJvH457r4UkExY1ohSiFDw6vhPWgczjpWk",
  "key2": "4go8Wgi9L1T4y5R8fpriGo2ivSXQHW9WSMsatdRPnJp7246VpDwpHUtXRCcm24rGV1ihusnFXzUGBDGi5vn8USrc",
  "key3": "CjD8MyweNherjpuszS3LDutm95LugHNY8ScXamcJM4PbtdCe2tBXQbCKeJBrxAoJoLd5uUErecwmyU7Y2h79K32",
  "key4": "2ErLseQKQhr5x1zp18sTzTtyMwMhfrj5b9dYeS8o3QDhEd99H7VR7DDGEVR9Aj6w4WyvZKmmHUS1FF7cDZfd3FRU",
  "key5": "4vBs84DEGeBuAjzrXoU6wzzUxhLEApCZjrSWza1F9Zs7EHCRULV9mzukRzjXG9cVKZnb9jY79AjSp17TKuATnDK6",
  "key6": "5zdmkekMKEQgtVrqaqT2KJFcMh6gBmN21mP53NPkBJ16Ai19KKDWK8LMjdPanDQxHQCxmJtsFixzu72UwwiCRYJx",
  "key7": "5PUC3VXYfKApv2YqgmuYA658wAKx2qjNf6cGnDv1k13vAV9ZJuNmZXwuqGFw49ZjtrGnEH7TjFPWdDj1QT6PGYmH",
  "key8": "3LMSLUja3BvTZfNFZbM3qSFJZSwktKgenR4hkV1X5R79oKwEa6yRCqvG8rTgwgQNo9HjSRh5YeE5f3BLRDYidgB4",
  "key9": "3pUN9uqX584ewrrDsN1Zdvqg78d54FUMKFLQ6GzJJdccM12xxUd2AGw483Bmi3W8M4TmZU6j4hJ5zku9XV6vpfUT",
  "key10": "282Huxu9NwexQvRKmPfZW3pycBstmTEtmTMLvDpcquDhb29vJUwgD6PCc3BW3DdtEiYVnav1bdVeuvwm2FPTMa5X",
  "key11": "2ccZuPSmaKFfRVA1BgXMZtRR7MhVxCKe6SX4Xy1VhAFEo7nGYUtjLDXh4p99zt2Ed91vdXjNFNPFFZ4Ar2UsGdEE",
  "key12": "3YMBHiQ6FjCDakCTu1TyxX9YzA7dPD2nUKviut6kP5zM3Ny8HEw7qnvM6K9eoP1wYLC4RmiSAsMimuKmg19jJpsQ",
  "key13": "4mv6FB9aKrKsx3jrkQMm3xdH4R7Mz4FzrEQkbwGDDhC7doBivnGmyjZ2YvbQNMxogc2LoJEKqrA4pE45QyGKpHJH",
  "key14": "2rVKwg9yRZv5jLNrgdW51Z6dKXnAmJPqbnPwvHh1gMKWUPpwmMUs5M9QXiYZqEha8XozM4UujxVb73owjgkMGi4w",
  "key15": "51XWbHXm7PNXWjmEuHadCeLDtKcnBHt6P3BNd1JLvK3AdTsmxxV8sgUQTQ1W7eZiyZ8Qj7DWv9MqmCtQMN7GyFeu",
  "key16": "2UkUzbK6dDAhrWrxcgMumxZHfqPcWU5tpoeynrP8bUHkLTz1maddWqTr7YJRUxQkHWn8vjfSaMJGzaxbyPymBVWi",
  "key17": "2AQ6fw2KDjQoUxutbYnLPgkKGGg9tZ4yQNdxbdBiY3q9Ev1jA9kwuRv9tTbK1KJNskPnUSfxL2xJwAG8FN6pBTDp",
  "key18": "rQ6yxgke9zpJ5wo9VQNDrehyqontJzcEzx9n7yMm6g98qFXtAEXgsj7rAvBqvdfGSroa9x7KUWfqdaso4s7DCtg",
  "key19": "5yepv1R75U97mw4yCtPheh4vyNBaaVKA71MgRir1VAHw32WEyFhGtiHPG2wZvgHEtCteCii5U5RcKWDjeE3SQv3h",
  "key20": "jMqeoHf3qYtmtUUj7HQ4eFuANdZgkYXPfmDVc9yQFzby3Dsgi9ReqxXpwK7yomZ2eboYCZsn8tYaNHC41TA5p7f",
  "key21": "4CpiE745RGFbMsyyMWQ98XABP4wqtiGdPpSBR8XbdjXHkmVdXnh3t3toNW8sd5XfmC4koXovEfQbXFF7DLd4wdQh",
  "key22": "ceW5JAGspZN9LNfftHH3SDSJYR4ntq1FS6rRKkAvkswrFVMrMfoWp1y7kixnyvEn1Cao8QRKVzSDhFxraZcEZtb",
  "key23": "UmcseF6GYoRRTLo34ut9ZgqsTrrZCN55puMwBmJGQeiLNFYxksGeHzLw419efkGdyjduzgRotMnCV7xg6w7pk3d",
  "key24": "3sTAbsYHv4z9dF2vbfYSsdmJqaFDHvm4jwVsP5anSeKvifDTmpavv9pLoDGAuGMWx7icnDDrgGbBMSnM8abXHazz",
  "key25": "4QVytKH9kJTdnihj5A25uVEEe8oAbsyNwFyJ4VKy3GcVpfuBnKES5xmp7BVSyEkBXRH4EJe6SnZXJGe29EnYPsJq",
  "key26": "2spS9bpi3BdxmKM6FHf2hMtAfDzcCSrCsKbAzsqeR5hG2Mqa65pd9Z33nayFFybs664ZH82vPGuNqn3Bg7bPHLB7",
  "key27": "5mow7Yzj3vcNVGcXDSmfUh6rrLuPeZoDZdpqQL7m74fgoaum3nJdYhWoQ2Z9UmpdxVRSyixjuBcXX4Vg4UY8VZHF",
  "key28": "5GRhteaFsKiarsRHWprkzp2U9XQxsR1voZV9RqMsZFATnAfys9hEEK8jN52vzadXEqNoJJGUEPSebCSYNDxA8QtK",
  "key29": "2kxYzKKNso8JdrKDzmMWLXWpmYtoN9ZGx5FTQbFzxUGYd1QxBs1bumiHD98vH4WrHwUKgCfzTof5g2MyBiJrWSpz",
  "key30": "3AHjjUe46nSMZYEhQME2H2heXGBWs1ms9qpHHhBqkytMMTqLXnbUu5PZU2PHBUo9h2vNFPfDomXEv3QEDsnHXDdL",
  "key31": "5YzhWA2r6JboBJvgDuqQcsWmLuESJReyKXGVFhYq8Bqqf2K3VnTPvd86nkeq8tqQQhCNnyX2a5X6VhF55oPTS2G6",
  "key32": "33aJ7qufx3iGySNkrW5cykLQYmSfvufdVJx7V1K2jdp77ex8nCnxegKqZkmzGYfHG12eCcQfcrhri6AzJzHYUNVN",
  "key33": "5NWcwja8Tm3siw93qcPLwPrZbwfP8yQAn7fdBpENDnznt5Av9jGLcqi4xy8VH8FCpYswVfryj1Dhw4qKfop7pBdD",
  "key34": "2b5naNivrJEKcNgtYe4nEUhqgR5M4WpSL6kAdjYjBv7tDZHDnTTuggQp6LGVsbWT4hfCFinjDQKV9b77ou3Lisxv",
  "key35": "2XDT7s6eaT2kqS4KpsD35kAtosbFS9KGJCKzem917EoSkcnXrAforATTQaoR4FRdmeM5tW1kCmzAw2idWqfDeXyk",
  "key36": "3dvtN6ceSeuCNtKVt5Gd6bkGeGqhwUgm6FCa4YHSxVkwspLhDcfmEHEt4XpvoapkeU92VJce9GY8sMHPZ1wGznsT"
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

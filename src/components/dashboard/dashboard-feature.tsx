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
    "tRxS2j5tU69BR8uMsTEsPBNoigDdfUm8AoZJHRtggrHbDY4juM2iZwg1VoqG2aahfsUDmB1rqFRLvyA98BEvdLj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mgvNgr2xGFNUnqeXtqGY3An4aRRNVeCamXgVduu3nUAnAZ2uAeBijtCqDcwaNxrrWWWC1smESWSrCvkwdWNiVqB",
  "key1": "2B4YEBT8UaCPP55VzBCpabT6s6i2UUQ2CKtPtB1BaBqyxBAJFe8eC8gRMsdM7zDRGCZNKiYpAWf8LTCPGwGp5USd",
  "key2": "4zZ7x8LUsFNV5fFp7atJNzvA4fRTQKwGDhrGGuZYMt38pAU4rc2fLf6AMWbX1rVLDjxuYtftd6Jgew3E3k9Chf2S",
  "key3": "2R4ZU44dmhTJpWJFghB7oRjde9GTCEcXMHVg2PaCTGvKLP2nrvk6ZonFwphfRhLeiHgBH5rZWsLXc2gvKCgLRdzD",
  "key4": "2i6Eti8yCovC8zShCjNSQXz5odMWXnQXd4UbWMpta4aCFb38weGquqLmeHvRUVTbnqpe4VuVUam1njxXCQrFmMwi",
  "key5": "3kAp1gotEbzLxb8ardkiWUduHooNLV1fM2GAtMhnx6LHGErgybF8FnKGKNQWzYSYzvmQmoiLnqjBSFJ82mSydJ18",
  "key6": "2sGQrAMiKZ9Kvx8hoo1SPiJdgesJo1hFbP7gaacLyAvezaVkD7nZVGzKw11FWSdBW3uJjAHyH1w4NqXUqzjgxxwb",
  "key7": "5GYf5aXCPTBUZnAkBBdXbwyc8VXPk1NYDaNDvLLo4M4m3uoxdoJJVWyAj6vmetaQ5fVBKL1aXqvg1NHPra8McFg2",
  "key8": "5gwZYtzarsfkQMeQqi6Z1hSFgjc8UrLAKoSs2r69WhAn9Ui9tKkeTf8r9ZNPgnM6WwoEA7xRgfNKk7UxA9BX1men",
  "key9": "3MjGVPUpYStZkSUujF7SE97zVPD5DxcjEoT2Rys26DcfP5JtdLSwgTaJUHzbc5UDm4DEkyAydAGaRreHgQsbdtvt",
  "key10": "5vjKsBZDK5XNzxdAw744KQKrxgu84TJL1n9f4CACb68tZxuh1m3hsfSx3TeoXtB1D41aRuU183hkeZxV7tPXTpXe",
  "key11": "5UwgyAPkdzhz4oRycUTQXxwt4hF5mJb5VfMitCu3gcMy7v9HRyL4w13oig1zqqm4ZiUYnBxfxuCUMBJEJCNhGrmb",
  "key12": "3hhDLdtXt41jPjG7jYBbfbUutCCczsFSmDCZN75Yo5NfNmwHVmZ4gdpf1ZEuZT4DvEJ6FYugSakGb6RdNzAq3Hd1",
  "key13": "5xB1Sex7bq8yQ5HgizP8MLBkxSUnQeSWnYD7PkGdyTM1E2jns1yEiPgUXk4fkpK188ids2czfAUAKqUbpgNmWtSF",
  "key14": "4qiNtFXcT4Y5g5hPgENMo2wqzvnY1nLbxMVnGctrgYERKRmsupeciAK6LheGrk4a8Bf8JdsMwqzAegWvy7ZeYBt4",
  "key15": "49NYbgLCYTEYWe2z55R4BGQYkujoSdFj993Bw2oK82t4fgAiayfLmDz9Rc5HabhhHmwKsopMtLNEEzbAQvycWytq",
  "key16": "3dagpnydyR8etBxnfk79Du5eeVxfHXscMvXcfud31TnbSUfVxXHuVWJQHU1SP9QBu2Jxoj4BjXone4EvssFGw1Gy",
  "key17": "sAD6aH5xi3Txi3GHGSj6CkiF4DVa9RwEaaXhN3MkgGcZ7PNafofB2Kr96urQp8g1mxVqVuikkv1fHgUvjsDWs9t",
  "key18": "3he5GF4tuJ4nVUAJWZ6X3YJvrAi1LGUz12TJtRnx5VvC8zH49mvsuSTa7YPXB7CbeLFbk6Ez4jbvrqHyhTLMZVVe",
  "key19": "57h5spD25bsxr8hwBecY5VYW4KK5AcfVVacRDByusNRwrHH7cPtZJ4WUfyNXuQmCGbkbqm7sLYF7K8ZNG85qUYpT",
  "key20": "5ktoeAumcL9cjDf7Xcu1N3hEtip161gQrZAoWrJJPinuf51YyxxuH552wiZ8GVfLtoyjZN568Vn9y3n2EcM5UhMe",
  "key21": "4Pe2Ya3iZQ7BnjNoDvGJNfUwGKJicWoHu4URRjJz6Zoe3eP9mWugPzeKyUHcjUrrjtmAT4zzZJsZGzzCKNfzaeni",
  "key22": "3unTQboNRe8HfSz7Yd4Lx1E7KnKVKLg6Xec3ARMq6amcmvYmM2496nJr4SExqgM4cQC3SUynWv3yQsWrVxjsJF3R",
  "key23": "4NDmvrGDmu4tbnCLt8zjrckZ3bi1jexrWf6gSTysUDfGndbxsFSp1R2oEcFVAfnP6Lc2obKbsQPcnfF4wuESLVr3",
  "key24": "2VNXLEoVNZ1oHP4Ko1VFfLjQ7KfYdY1piQujcod2u17u4qzzp5TCTzR9iEQzvPUReFDrr1EJoht96o9JRhfXYUme",
  "key25": "2GVR2LVb8wbCAMXtnxirjR7gv5XMYjEgPMxT4ViSiVMYv2RjNA9BDS2VQxZYGYQPf2Uzfp32n1tMmjFn7MdS74Lg",
  "key26": "5txFCPNACPCANkDs96WV8aaqfMkbHpCzKeEEj2ybTb1GZDA6CfDX9uJXb2EjkD6sXgx2nXxNyosvqmngP1B6ruWA",
  "key27": "5Yc4eHM2Bc39cZBLdipboAbSxVWyMLHnSeo4iupHMDotmQGo22Y9tvKZG9xbFbgZUttsZ6uZ7ZRbbwWfyz3xTStX",
  "key28": "551e48CvJ7P2e8tzk8L2mAS47bQ1ge8wKVixHe5Gs4g3yuBYi8cfSoHqdoHJuTJJDAsybkg97C7ixHJqgd3hhjTM",
  "key29": "3gehgLuk61QyAs8MWqSBa3Y6YezTKQMReRH364zhy3gtmBbJPa9yq4WZsycfjsju12Ekr3tD9UwLDJhFynqUVSLU",
  "key30": "4SDuJVVHkDx8vPDDW4uNZzJYaEWxJRDjDiMiFJ1gdFxHzruXQRbD1ND827wLdrd6vj9nrBpveqq1YpBv5s8Mpc6p",
  "key31": "23C3JHsLeUxmAryVgZFCqitHLg5wnexPYr4TguDwTjXjAe18d1bZhAjoCPN9ppznMpheLLASNDT8md3jffxQa95M",
  "key32": "3jifJqyhQjqv7863FcXMP3SX36McXFNKPhPDc6f5FkYSDMWo4c4PomF5gEbSA2H42RY7eYLgYRk2nxeoPM5cDJ4w",
  "key33": "3vZhqAN7nC3U4MmLWo3wm214vd926vozyxLF8u5hEjPZgruJYeASLDRAqciParrAKSnfkRducnGjB4vP7iqe52QJ",
  "key34": "3ijp8LT7zFXcbGgcRHBDmuH8FpZDqNWgP5nHnxhoQhQoscBQcGGj4dRPGtBH2CWihgcuVfFkv8RUC9L95yAEgJu7",
  "key35": "wT6N925ZQpFx2W7tiV6RefntjRECzxHGmw9GbtHQet5NkGLAogBcLXwU6ceUN8sUTATthyZayA1BnMeNw8P4Vuu",
  "key36": "uQoxd1t8sNofHGN41pkGJY3LvMVMuohHhG7A8KSmGyFkEJko2qQUJGp9bkmezp1xXWR9RtxXiWX2cM3jbLZfsDx",
  "key37": "3aP26wbwAFTrDcVU64CXAYLLNPW6ZtRPHTXsafui1BmHFaBCz8n45R3N7AE9Xd3Yrma9rw137q5KW73C5mnuRM6U",
  "key38": "2WZVHyzt9k5RGDtn6b3nPXLBSyAcMM4YGvx8DUV5tzYLkH3tvz6WJAcTHDZekuqTNsvWKB9ikqFHyG2jqco7m3yw",
  "key39": "4q9MeYU9WZzTitLbE71ReJbkiVv2p1HjtgiiPbABwunTMiuqMNU8iMQsumz9qR19QxCBnbhDqbX2BkPxQ7Dm3k2t",
  "key40": "vrkGKgZ5wqdcHaJJTtgY17JJUcBthE8A31ssPDjmsa1gUGRSHbPgH7RTndriyjeP3cPLKF8wZ64AuTagKeNU66G",
  "key41": "36fpATUH6rYhWp1zmtjvPNWpeWEqa4mR3GJ9xddZKQFrxkmdC8PkKvHZiZqK64iDRMRY1Rzdtiw7gYSsGLWw42DA",
  "key42": "5MRZaLzpkT6FaGhNEL7Wvdg5sQ8y1x5EVzBfRpBDdVUJwaYZVjKxizQahCegA6JH727Vt93J6Kd5v3yGT4BzdyA7",
  "key43": "4gDw5EFkjDC89QmD4gvEQTzRBMqa75XJzgzCV7i2RG1Wmv4RGMAX3aYB8jrAdvVwZLgSvHBPi7qbgdjDbiUUTQBb",
  "key44": "CEYarcrzCouHEe6vCtXPsvtnEAFfye168rNnRFxLHYMCyxqBW7kPVC7ZPcBk6muciBzZgiShA8QhGgqJz5PszTo",
  "key45": "3kT781tA7KBVYH6E8MEMgJ9pr7kthFpQFCdpFUh9ZtUSji25fA8CtMrY5UapZ9xADAAnHVyR7Y8i4T8jnZjgymUB",
  "key46": "4mc7MY2ekQbnNADYpiUfTgZ25EQNksLSxmi5f4TV3RZAeB1tt3dxfhD6sSdgZEwx4rqUER6Uw79sztiP2TDGZq8y",
  "key47": "3ThSBSRUUWoefjW21umW1zsE7GNrMN33vUZ2BMdqiygtKGh8mxhMt8P3iiRuLFhVpaCexBfTwdZ2JM1CUBvyHxvP"
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

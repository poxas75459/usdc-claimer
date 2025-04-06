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
    "5YxTZZ7Z8UugMeh5RzJ3BiRDcA8Pp9eQbvbPCfRBDwZk3UZ1z8wBsSNfGX9P3dJUr24eu4S6P9N7RcPam9Bje5zB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RDpMsxPqH5Pjq699mbc7TJM5AuNgozr6z9RSu5tcHESEzvu8YGx5xg5NHHJFppLpYWYw6zswUCSnKBSkzxxcH7m",
  "key1": "38YoAr1mpGhnBUAz2VGKDzCE4Zd1nSUsFqUcToHshtUDiMYimMnUHDJTysqeLqSQe8TzNKCA2R4Vi4NeDRYSXrn5",
  "key2": "2287KKMhGF1ca3np3aBHs27u1Qr4mkEws5BgnCXsNvu2887yjJmgAp3bTck1Z7dXHFTeB2m4evAVZZ9QHvvKU2Wb",
  "key3": "2M999Hm1QBnVdEK3DCrnKtP7DjkoTuaemFXqNrmBWdWKUYnpLbWjaXaXCtyJDzEEvrnozr3B8d3uKJGQC5VfadRM",
  "key4": "4tYvD2fHjbQtZR2NZ7zJYFjJ62VywuuBqHQUXcarEJPsNuE3snVChChMEwhaFi7PVuJuYiDhg2AjtwfCzegUXwXE",
  "key5": "3HnFa4vGuATpo6szxy5Pcgrb9Kw5Uot2o5Nu6wchWhpEuhwWDLQCJDke9Pb3kbmDzupBkQcapGU8DvSZJwaLto1x",
  "key6": "54BExAY6Kyf7cL3hiQkfDhjaKzeA33tyKHoNQuwxQFTGm34Jv9fmhijyrARf4KQ3ZeTjckfSqbpKypU84wKCRj8T",
  "key7": "3ZdwUSDJ4iEq4hBvRrNVN8KrdyAKegUB4sq7tHGnj1eRveKzanT557wNUpGv9at3MKcgTByM3m2NxZmQnvjDbvVF",
  "key8": "3yDJapSyyU4Wdh2DT14BMas6L9QtHxsVuPj61Cx7qqa46LTFDUK8qiqXoEstJLdifLDBZz4Y5qevYttQrRvqvFVv",
  "key9": "RXpL5rhye89Cq81LBLCsrpNMEMTro89zakF5eCGDgqMuXZ8pCgVjwE1cfrHXZ9UT2QvYJ24HmvtD5Z6h2LbGVfv",
  "key10": "472JCDvYbMjgfbRQzz7T7kWfWZkrR9nvkUX9QEBBccp41Nz7bZ12Bk9KvxHp4JrNPWx7FF9a8LmuAyFwYmeonwAB",
  "key11": "4Qo2puVQAtPrc7BvakmADZvbLJWHpduzR2FSK1fxbKgm7zVQFwN6pvfcjoWWovJZYAL3uuxzcWgduFBW6kV4Y8WE",
  "key12": "3aW8KU5KLNr2doVZhUUYbB4xjmWjUSwuhPbNjFiUkP2F5f6HoH7VDAPpjvSxW33BxTL3G818wJT5bDpcW9Bgf7LD",
  "key13": "34mLQu35TsGyb64o7H7Fawr3N5VEW8PWPgDNEfJy6L9qhY65T3mvg9vtPAcNL2e3uobypjWpob7SeFmL1hNqdXHZ",
  "key14": "43EEcgb6NrtB1dd46bN7HrBVvde6KbW2MqW2FC4pHZzNPhdQkqBFcdiiZKjVTNETWT6R2Ng3vzke3qxZpkHjC5VL",
  "key15": "62TH1BZa15ELxm29wxETXNj8evSKmXRN2w3hMLouivj1FgKep5kNfyjJ2xTX3v1DQ1J5QNB8FBDHoEqaZ62p7viU",
  "key16": "4TbwXZEbPjcrxtdxWNCZGVtUpEmrywMG2FKRTDAH4bCsbjQBoqVTrQciVsNKh1piFf3RfowosMKsDYZq4mWUfeUC",
  "key17": "GCg2UuT5ELhtkc6HksFwXhu9HaRAAmUWNEu6sDNezR22AK5qUEb1QGRqfzwQvsfiGUJKTaP4sUDJndKKiLmLoiu",
  "key18": "48xYXjH83oi1AeE2PSjquNTeqqey44zj7xoddoM8ENouG8LJ9jX21fkejo9TUMZhijcq8f7XdX1rwJEEch5njw7E",
  "key19": "35EGu7pCE3i8MKdqzNLzBDrCjkVjAqtuhFFav5UaSf4QkmNkXft6h4VGyZXaCLTey2xWKyo42Tb3r3wZtZC2okxh",
  "key20": "2kd7okWipvRsfhiqzSi1uPn7wu8SJyZzW9tBcKTfQzKZKq1JeQKQawojt1E4gjFF8yQqMqZJnmSa3fnaDpgAVnu9",
  "key21": "2mrxTDv5n4BNMbidbEpKx1sXzE5QvwK1avGrh7Fx43fLKLjNxekvHSfiX8RLwKje57MuTtmU6PPgvA6Nhi2ngvxQ",
  "key22": "44MeandUENJ9T5r4DdEEzC2BSHtckmrWuSzdoNAQRv3f1r7GNqN73ZXCcrCpQyszb9XtHQ3jBzberRocpnYQfgPc",
  "key23": "QZ74Dk31tCvwmyFRTuBDPTvU27N5wxjQrmokkmsDRRDWePHVhpBrX2kpB9rEZpWTPdHpJtR6WNUapJwcuxQwUUy",
  "key24": "5rVZeh1DY6AZVAwwjsEpEJuBwoBNeqGbcFJHwiE99TSfEENijSLvDQo3nTsm6aKyFrCVMsFcPkuB7vzF4ct4Jnsk",
  "key25": "13toxYANq2qoxtxpTrQFh1rpbk6cj5qpF6Brm8LsnnjgnFXL7y6BG4aUybZX8TUdfzJAFHsLarHF7Q5DHX8oax6",
  "key26": "B6o8rccuKWtbAQyHD6vup2gtqFoddA9LGfngACromeF4EWzFTyG9s3Smg7eUtsSQ2j2AD9zr2TCiMpj7Zvr2C75",
  "key27": "2WQVhG1CAk4LGLP3SoCd59jP7wzFqcFF9k2MtMPjAKmCDV2Gyi4PGQq5NaacYJ4KD7NRqLQeVnXvzSHrkm5a5CBR",
  "key28": "5jjfj2AJek7amLv4NZXvdYgMhqPUh2MNb3yphjVryE6pLv4GgAb1ks8KPbVE4Db6uBWnju8wMBmFzxJyUAP9DuMu",
  "key29": "4x1ZWmWAwhLzVUnLLrHZfTNEADt8cwyMYgvmoEoVwroWAb4PAacFyH1YuAHNwcixUS4xCopGuLcQwzjESEusuafu",
  "key30": "5JPJ7NCEajFazZw98A2wnehSfw6TsgQzNj9yFq5Tf6BvTgBCtx6FnoeTfwWBMSdvjseJEvqjKDFAAtNFBAeLijru",
  "key31": "44Zki2dChgmV7uDcvECUue4SEdTsHUXqpra4kHoax3wCQDC1E5rAqa3PD4WMrQFcZEy8Ator4S3Bmse656VmiPFh",
  "key32": "67Vz4Y83KDDBfw8AViNKBGg49Q36LxMiYQYZARk6feN3aUZCSmDEBRkA1KJX5McbjXbMurMSiHhm4mPxXgM7qmLa",
  "key33": "sFZ5YV5rBwcad2eBjVVixg8svJj4a8BzV1Y8AzGASFgpMops8bT8vXAnpFa4BNJDjkyjRE6NxiA6ZJy9mNAeABo",
  "key34": "cfnNJGBbAaq173MkhSXN6t7YnbiE2E2g1Bbiy7qf8kzEcRj4BEnFqh1mkrwqSNZvCqEnU6Nttz5zmngMwRrPUPE",
  "key35": "2V1eh9PejFdY86NkJ5jbgw5EiY6AvExwLoYnykAHCF9rMXYbEHtRAaGMH6dCTYHpJpH5dnEb9Ecwjy8ubZLtMtLz",
  "key36": "4o6v9ihfsrJQU6t1rLZUubebjxXMcv3fPZo9FzY42B9HpuNDC2nKE9GJfJYYJVMtnq2g6AA1LcTi1wPxY2o3RQ7q",
  "key37": "iTJHpMpdx52uBHTrAYyiXB951XRjqXYCWcxAw2r1v6u5de1GRMYDVZ5ZSoMw6SsMCp2Pc3FAeqDkfVzq8nt33Cs",
  "key38": "3saA98EBKcoMKUvKCzbzhF2qnQU4c9eUh1cRVBQdp9YjKKSj8JaEywsz3W58ELDEKJoRabeN4wLxXUzGndyFuRKj",
  "key39": "EFRbjTZTyaUkEUwBMDnXXvP5SRox2v6DqJLWr7vwmoiBxw6n5W26ejV9Ec9A4uYQAAbs9P8CD1hbqkGd2Jw6YZV",
  "key40": "2rnpp7SafXDQWMzawQUWW1SkNQNE8pXAA3fbyZgzKxwQ37GEjw7qDHVwN65JXJAsnsbiZ7dZ1nCxCu5A3w3AipH2",
  "key41": "5xzQQM1Xb53Snpa6kM5Za7DWC1QjhV8ShfE6Uo8Fgkfr5uH2dqZfzLBBmPyfGbZ25uYhff6bNt3gcNerpcSYiP1G",
  "key42": "66JW23yHzic7tzYC9H26Vm3auDutF8hmtZhpwsmyy9UABn1sHj81mPnGM8oQ4yt7HRc1G2GrhKgoKHaxPxh6EoHn",
  "key43": "2zuyRhyXNPrB11m3WQbCzCTKKsF3eeJCmRXy55JSxu1XXkqWCJDHFmMZoQoLXeVCsB2aRZsoLn63FdmMEiqSZ8eT",
  "key44": "2myonBPYBTh2Mt41nk65LtRn4CQgopM8Xf9mxLG7w6YH1yovHa7ZvFYBcqSCvuCEsLiEaa6B2HaqTN4NqFCDkutC",
  "key45": "64TDCSwR9aKehAzQhxs1nrmsSdxb3WRLoMaNXbyQRQJxZDco26BB9QYXXA6JQ9zGaYGn9i8pXE7SdjKscZVfg3tG",
  "key46": "zELNnhDHLQQb34p7w1bUn4VWeGLZr1t9oCRnT1Yxjn3qFwcpG2MWTeHPC3j8N7XoCGjQCXYQsrey1mPTpBeYUif",
  "key47": "2fQyQVoWS5eLCH22kWzkcYt9T5tvg18R5nWooJrd947d9G4kss4htMdfQ7kejXgC4W39P5SEa2f1xKaNjjJXRY67"
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

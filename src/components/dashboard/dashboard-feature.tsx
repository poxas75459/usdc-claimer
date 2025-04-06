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
    "4jrtPvQREzKj9hXVNwPxSGv7QAPLV2UbV5obJH5jytAFAB49yvq1V5Lh4k13rmsHC4UKrxEcK3ukHBrSGpW4yXGN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BJU73NNoWNmmGf4UppkHwGkaDovGv4hhmHj9UTRJUdv47VAPoG1URb3kjWsK7gq25phbh3VCfLw6iz9jLrhQ2bZ",
  "key1": "3iZMy2UWKJhvX5sxV2LYZfjkWjmakYhbFFo7frDYxwxhdDn1ZiQpaoZdiy67W78DSmCp3wd5gSidLrYsQ9fQyMyk",
  "key2": "4dQYHxn52AtRKg8aymsJVTYugUVuhZLEyvb4oJXwzjy6LiSmLrrAJTFmiEhcqxFQzbst2dVBRgH9BuXhSyB9vvaN",
  "key3": "hJYKfsYbo5bLt4xj1ygAFkDVmGTgzeugDhJH7kFtwmSo4tEpD4apbg7JUTdvVvKf2bTR4nPnbpmhPCci2SjVgfs",
  "key4": "vZ1QGEJMPtKgh6cJV6djbpBRDJ5QPhs8znL2mKeDjWHdALuURFbTYFmZ2mGg4fMGxCWidKzG8T5UTBx6fKrbdou",
  "key5": "C9umg1YJzNuhsFZVvkwC2LsNz6GXy5o6rDSA1LAYGd56nXEy9fFkoCKo8uR5P66UnLhKG1UF2pwBteeufDhg6Ww",
  "key6": "555DyDiGwxwhpHbGDDqw3sEHwam2UVBoMiBZUaEzQWmLYx4aoW8Ynd7dANMMmf2RcV4mdBxTum3NfGaYSqrLvJs9",
  "key7": "2qyCGroK9g2kA8ahDjQvSqVTgdrsXiEokYsnUfZd6fNkprB5HMqPZezqvFMvNLJSywmK2TBDkSe2GAt86tiWA2U",
  "key8": "2os7EZacd2kd2KGmrkk7QMKdSNAmXR9zybmBj42NHJ7AGmeULZowVBQRFYSkZX9HXDryiouipLM1QG5E7Rkx5qqs",
  "key9": "3C7HLMcJwv3gGSeENQ4mJnntFXeXWiZ6MRMZNC38FwCJrMMjLB2CAJVPNzY99mgRL67KU1Amk97uRQES4LNuDYQp",
  "key10": "5KZN9gdgptvDCfQ1VGpLQdkk71h8xQv82tyZVdUWRTx4GvNa7gDx3PQ1tN4h9xzMRVfssWtksQ51g6pTdqjr5MSj",
  "key11": "swSNZF8kiNoSZL8zX7QWk4soCt7uv4u6gtsoV3zbTrjUCzZZdfhxUg3C1qCBWogcTqxiXagjkNzM1MWjkg7o63M",
  "key12": "42ioa6Uv7itYrEJuKCiowXr3LYJaiCA5g5eLCxAuL1U5EVyn1BbDmZTU3pH6xeHHhkGvnW9ZonYH9Gidr7R2mZhn",
  "key13": "4sdeg7oEouwk7gkCJuoMc4gqvgnwDU2YfCM4Kez8bjkRSheJLNXE9sU1KMwTAh5Az4mSLb4FAdbD3t1wgkd2qzyx",
  "key14": "5MpenFseiJhmRdw7ex5Gb6kA9p3k5VRb9ufGocRsFhzqMzYEPRmHT2fnhUST1aPXXYTocPWwJkpgAp1biX8uPNCq",
  "key15": "tgZwfLAe9wzbTQsnYQ8EsscXR4dingSCEWGiiXJq4qdXkNErXoRLLguf6DYfmGeBmzcQDqyk6g4zeTstLbdESet",
  "key16": "2SSyojKkYKvqvh6zdaaczNxcP1Y7oTy1A98LHaBFVJF3CCPXwUFtao3vcz4h864zzNzB25BHkkSMD4ZtVwnfJDYp",
  "key17": "5ertqtYciwbA3dBesNgv3Lx1cqn9bJ9ydGUUmFz4xiHtSBmXtYWCNVGjZmxQ5UEeZP37xC5oNo9T5C48rvGuFhai",
  "key18": "uLuzydCRNpMES1Qd2gdyX2x2CR3s6PYByCKyn1d6q9bbcyUx7qLNpkdkk8BjRDawg9yAZkndAgHtCta9BiTr6M8",
  "key19": "5kR8ExtZdRr38JMLSuqK6ju4KyfpMcA5B5zkT4LxgC6AhNqWzhcEXqftYtXaJKPrCMrxJm5qmSpnkeymyxJkdBjJ",
  "key20": "2pyNvaiE9wY1YFm1QogH9N1kiCGKBVc2XeyFc62aFiKoeGmM4z1HH9Wv3XAsZECbGeUBFqA8ohJGgvpxeWHPL47Y",
  "key21": "WCeyitrCMAw8QKnRPgS66HYoq6rpKBQN3Pi9d1SXfc8oxueA5FouJyYDqJCC7Ac6bSrLLbY8rkjoLuCisK5ek48",
  "key22": "5FMZ2W86c7JXoTioLCy16hN5rn7cfQntf2Jhmrg6HukG3a7R2XeofmQ9KCU3odz5sfeEqZpabdWV6EFwHRf3qZww",
  "key23": "5nkpW1aUMySssGS8STmRmqubwFQaHB7i6TBK9EzZj8Yf4h6NHE13xvYMJt1JwNd7T5TNipZ4Ey3k6PEt6k3S5SSL",
  "key24": "2r3P3sYdVTzNifVwggpqTfumUGJa7ZWb9x4BfrUETHNnZZrt3xS2XPZrEkGyWFZfyUBDQiXmeZVEHPhwkgHULyhT",
  "key25": "1HcgQMfGHwapd4sxT3HoRrnCcmZdxgxdiNorYbR2LA4ikDs3StQHBnSbuT2SbXLaW4TeNDDdck3nC6ZqgLTQCHr",
  "key26": "2zJjSamXWiRqa5ws6TACtHvTFBr3RtGKA35BBvWsdQG2cnGKyRpSU9EEj7fLRbwBtAhaxmVD3pbNySbn4Wzbco4f",
  "key27": "4QjY4DspALWWBCKbnsWggmstiP98zLidutmDyjzjB7wUmY51c9SdzDn6WLiAUQXJ9h8ceA7P14vWtJsDMy8q8WUD",
  "key28": "4oKq3LgKm9sS6ttVFrRt7tajRGxMpZmifzBcYwTKLADA9224b4gQ4v68bTJJjF9zCdniznYArZQRY5bkj2SVzo1",
  "key29": "3m24mSgdxzXLU2fEr8EPGZpnji6tpgFHuBpMWAhrqoY8WEoPF6vxmDQnDZGHwciQvU2qP1Ea7KYctMjodpRYobZJ",
  "key30": "5N1zbnKRkF9iRBskhYyv4SALtWhgBU4aorGhbB3dZswRkmmSa9JzQwQopyKoZNx76upsxToZiXX5HJf2UxRnRwd5",
  "key31": "3dF8TDYa3iskLiHoXfXo1LLPuKtZkRZSLTpmfmgSw8cZZCedaxuX5PjmJhDXSjQx9QqQhKPeto6F3cJzHBKERjLX",
  "key32": "39UFe2uvoCUH9vaKwmEdLkyHq6F9tQx3EQKkJcTPYZS3iambSusAePaAEmh61raowWyb5phqe81qntTt2XwELRgU",
  "key33": "4zNSyczsGCP6FtEXtpeL2aSr2gnqUaXz7DxvKMN4TFVVL6Mj5MicbHdRkvDyMRo9ASW3ZzPzrHLaVs6Vp8bdzgVz",
  "key34": "F9gKb5Nipo5JzCTvyJssHec3tN9r19CBGhubKpzdvJkQ7nsSHXydxaBL56Zf7jbWVjeUqrDmBZmEEc3qyDN8tCf",
  "key35": "45qDD6CEa3NgRi3MLVhqrk9DZv7PeV1BJe7jiCSYQz22Z6nvEH8VzDpwmvy8EWGo7VKSRhMU8SGUWBguK4gGFHG6",
  "key36": "3idZey6iummkGmtGrbCagY1xvVX4ZXn6qThzAqKD797qK1M8xm7F3Rwsur9zCVW8WN5MXg7GZKbi9EATzfpiX1Pj",
  "key37": "243153gF9TJ4N3keUr1hmSW2mCQzAdsa9TaGdUSzd4nkT2nk8hmu528kYdgGhoLGkxiAN5ixoeiq9HrcKij7pYTy",
  "key38": "4vNiD9qptEDfH9f7efJJjRgCWfiYcKTTrTDxux5ntNjR9pw5HXMFPP9ZaivagbRnRFt9Wn6RA68To6raM5pUbptB",
  "key39": "4axWipyXiEDJtdWhj86gsS8ENAtmkhCKHyDuSrqetDYwceZHYV3ca3YG1JccVUUeQUA71mRg9afmKs6ghRHtijNn",
  "key40": "2Akf4aywUQtpKhWyukR2FozGztYV8aqeenGwp9WHjSbduASR2mw8qLjjgWkPGMPcKNPKtVZqw3Stm6CY4zMWPCTs",
  "key41": "4225NsEqgHNXBJEL3gqDeRynq6dj9vTL4ZUsXiZCthzFxDnxMbphXRgREeEdLNnFRZeRHxt1mfRztCEYTAmCyaAj",
  "key42": "E44YWLZY2YEdoZWtqyfm3puH7RoAoDz872V7eAFLFrweDfSxaodBuUk2Gc78bgy29ba4vL3aRuvBhvTSVYWx4oX",
  "key43": "FmWnXKwz4dkSkERYjxfxzi2Mj99cFpFVDuASKXsTCFpA26upn8x63axQtuaJyXEJpzDKZPs4BT23eV8tMgYV4dh"
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

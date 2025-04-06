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
    "4P9AsmHrRRXjuwDkJmgfSzxJrP4bC1ZV1k8TtSAkU1BrTABr2rWXgeuaEAHhvgDb6WF4QnRn84sggUG2q3FmNwM9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33PmMPEDhQcccBZEtGUogr8WxoVBwgQDzRpFP3D3Puybm9N4tB7L8p6skEAfaBGYrBPYBS56dvAMHwjcLbwYsVqf",
  "key1": "2YB4yuBqothBrHpb5NKPhXjYLiu58bDG7J9i6YMjmXmfJiud89HHrZTFjYSuT3sRNX5Gu9rzJghQ4vrbH9MJP2Rf",
  "key2": "3FwMgJcWpqJ5H8Ws7FaX7jZgvk2yEjU1UMh5zRuhTjGJbRrBhW6WxB3EbcDiLXu31nUrbhydqctpM4otWtab2Ad9",
  "key3": "2ukER2XeZH1oBEmqqv7hnE52MueYrFJC3iFhJavTddaZBZmPduZW6hADBjjr9PmEurpST1xesTWMe2sbeA1HFHuq",
  "key4": "3uUgB1YAyqSq8VAC7MeveBSYsqoRdU9NgC7DNCg76GnhNQvQEapYAyCaga4X8Cmy578MBTed7azrX5aYPy4MAfBx",
  "key5": "5Do4fwCdGA7eaUQgd1TC41ws8WKcjYeRxiafJLDwKMuG6LBa8FVt4hhBxWJ7MLa4rXsGjshLuhzqsTta4xaVSbkv",
  "key6": "26GCRkhs6adKtDhzincaN7Nqjsq8sChuGDbnmLCm9FEcrra6DdrAbWY7vsSAKkdqUftDcELsRReJhQyoJmbK3CsD",
  "key7": "4x9GSRfoKfvtmbFFgCxsNF5Fi16WHeYcaCwCmcnDHzZJHp1v8dJZmo7rKWzkMozcNaP2mg8nEoiq86P6K8SwE98X",
  "key8": "4w1MJnk3AY4jmCxjutA2or5kUXwk3fuUeqK6EaE8CdANzRd34bjh6LKxBGuEapD2eS36Qq1HFiqDJd9zDWaFUG2n",
  "key9": "59CHgsAEaa2g2TCamH56EoEZTjpH9ptAWwXRSV454skbnsm7JipQHThRiL7vBinTKS5gRbmUGYr9EGhs38zaCCzf",
  "key10": "42M5gqvZcTQRCYJ9oR9gkHz6DtqjEeACXmhSU5on5pmbsuZPrY7YcKQwx98sTUputjSraWDZG8Y6G8cqFbEmHCe7",
  "key11": "4GM2Mp3xiMTAkhEATY3tH3pHtBCNKfGJPxKfLcfiRZNsDJxTqvnBtzvafFcDkDfyjrUJpFXn1qxcueLqDuusYL7m",
  "key12": "2yLyPPCDqTLnyAj8uHW87PFW2J5koqPRjN3ZFeHwxnFBRtqnZ7hzYHFYKWmqAhTXjYEB1MAyUKfLu48mRmnqFmwf",
  "key13": "4AGt7WSYPPwkuU3JjMPWRWsxtP5Kk1b1r3boP6EU48Lw6Syb7tH1Je7bJ4RNgeE9Uz3JnZUYhLGcpogELHrnsvEb",
  "key14": "ibMyETxn8jTHL8fANtoobHXptvExM35jmbcQujz3Lypv3ymsHszZfkXygYN6MvDmxaXkGx8Jukybo4v4j8tJNZP",
  "key15": "4zx4s6pqZqj5KCfCp4dQFUWC9oyqpgEubDgmZPmNzf2sGCyToJHP6qKhuggrmb52s6EetVNDz3ye63a2xnbzbmqh",
  "key16": "3q7kVptn3hNDyTcWqe7PPJjwpDATz3zD9RTNaAmqBMTjALNEo4J2dCpEFbMbx2coJX29Nam6aj2UqgmCPekr7tsU",
  "key17": "2RixEkAagpg2sgNwFHjBhsqYg65xc9drjQyK5ACCCpB1sty1Tn87hw3tqDS1DBgAhPtU7Dxu9PdRTA5MjvcPXbGw",
  "key18": "5Uo8uBvyDKpYtExfSiGdb5eenbA3nnhsT3NoC7kDymaPGJEjhXdimCgNLUBSybB9PiBHDSNnPhx7nb6BCddwu3BY",
  "key19": "LqaKT3LYXrSjHo1UCRWMbm7MQxJrX7yqiPv2CmjrqM39e92Eth1UK3Q2hoMJHeRwwFjNodZxn5RSmsL42BZyKBm",
  "key20": "52NugXYSwMrLkigNpf7kTbQhJbJcyX8E5sn3Jj74VjAYNXehKpCp9wSb6Dupott8txDf9vkD9dBzKvgy1fYZRNEj",
  "key21": "DiuHB3Vf7NqjsMma91UpqEvWJFqQtx8oYVcecX4Vtj2tMNsXyWmx65YGZBxt1d7nbVx2fLUfXdcB2ibieQDssd4",
  "key22": "5Nnb7ecAbJZaVg34LbMGdMgJ8vnDm4Mu4pivS7Uu32zZqAKdjT9A5nqZoCek1Fp3m4EQ5cd337xZfFTCYtY3AUnd",
  "key23": "3Tpou14cFPBfVFfpwPy7G4wmro9BQcjsoaxbe47XWt3PtXnuumiHM1yJoaKZCN2Vh5bKfnnNhA4caU2xi1c3g8tB",
  "key24": "5dDJ3ygiatg3mpKbXbKBBUx1Yh2KJNmWMVqf66MbMpP3fiKoiLhGfp5gdmKyDrrivNrEwcX2NJaCsfSjaaWd12UB",
  "key25": "2AcYPbiU7EY78e1P5EMXk5GygJYoLaikZepqPuTLmr1nfhvbQm11TFHF9fDUsckrnxvwngjjUtZv8u6r227u6W21",
  "key26": "Ehhodr3uLmFRvNWfx43PMprmDMN1QxiTKUYnnxdTgrVoiRUGDFh19vcyDosBxALrtYHDJ5ZBeRhAG6HhmJakzmZ",
  "key27": "4YURDz2Q7UPLzLhBvD4nPG9WvqH8dLVeGD9sAiFqdMCqbtkZqVRuPp57baRFvSgvewkpmMgUiukkhtX9kMD2zczb",
  "key28": "4G2rfM4WtkPj1kbq4vsMPv6h52KwUXP6uunbTmD4YpJ5N3qXLj1nUan4L5yn5Day26hF9NAyVntAmaeGwayPW9Uj",
  "key29": "2T9gcsb9MjCH3DMP22neDTDDPnp5rsZk6d3XAfPCnTJV9AHLND2fZVmZxQxBP6w15pgJdq9wV7Huy6mwq972KVM5",
  "key30": "3T7gpeFt474x9PXXmA6XwCRKz2o3PyoKzn69DXFXkmEQXKVLHpvzTwmS7qzoQtqXmTHSE42NXYZdv5qaN1QbxH8W",
  "key31": "4h8AVG5NxqiqVrAzgrs2GKGA6rBgThTpgYgBTmnAB5qU8SYw6VzXSpZptnxNH7g8cXK1Kfnv1mmjfR7sRqjnoVro",
  "key32": "43LGofgUuPq7GimSeXefRE6kwg1d4KzmCd3q2dMNFcveLWrqSTKpGY3dALhGaJDeUmw2eYGNSY3VmdBxLpEgE4wq",
  "key33": "38WtM1GmtmCmDznqtUvL5i5NL2awECi9Cf9LmNq1dnzwhehfZeAXHbeJE6KuXenxfra4RMieoswCmnYy7gyuA4Yi",
  "key34": "3MWeEjtKadtCAneHTGe96w68gniCm4Lgv2MpwBDVs6e7ayieusCubVWYYQBUPHMywcB1dtDbX9auH6zzrtzkEqv4",
  "key35": "2EWG6MfD5AJp87JN6szc1fEDTHyxx8hYs8rJRe3PrcxZ6NiHQqKPUcKcMb34Vku7U6ipF2pWD9TWZkv3J7oHygwP",
  "key36": "3Qyz8rPGiEKqwY5EiychHbvpheyMnoiWDXJetweLijeCvTbriS2n7DqJ6tSPuFBW1Q6CcXHstRvLG9yMKHHgb39w",
  "key37": "4A5wqVVsjJoNB8SkUapk1Wsm4HGxqrV99ej9cXmhdYMHMrCdRBv3z4R5nzxWFU4neZMH4q59gAJ5xSRh9pdrmmUA",
  "key38": "32LefBUcoeJfzJAM1PdBWdTcx1TTQUmwJBWvVh1Q7e45EUwWSUXsJRgYRK7BjZtSF8rZk4ffn4A82TPzYpxd39x5",
  "key39": "4Rc7VpEZg5gekvKqFSqf8K8hXS23gQWsjiHu4DoN5qJG5sy6pFN27kr2ixjBEUGJCdCSZu8RDUs3RyrZY9bVKBUn",
  "key40": "2ZqxCwH3JNwuoATeaWBdgbtJEAEHkktt2jPMzGHGyK4EChm1sLHAHFZWVj5SKMnzaqTDEfUbU7YeqYe1wezPDxeu",
  "key41": "gMHd7Gb9776dTyv3zhaezzBg4VqSxCoKZkypCtbY3267MgGHQodKEzjLrjMfv8g2fhpCudAV3WzdzQQn57AEWYC"
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

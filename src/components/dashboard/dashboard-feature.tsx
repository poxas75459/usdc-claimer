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
    "4sYQfKtgesKpwkG1HJnsQwxmag1VRWFQGybHJGdnKtUdhrikk47UVCP4FT8q22cj397fENjtyBm31FAxAbGWpxQL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dzB4nDBSDuwiP9oSiuNZwnPemBmckazwi2GmJ3tmKmSRDy5kL5FZUAQbMSrXpVhqiu5x9HQnxf67DJvXpuggN8C",
  "key1": "4EYKhpjpRXZkWGxci5zaW8aJNapYySX2FiqnaYJT6n29Dx4S3uB3LcpjSiSAdPVZUbH6NQDaXtmpRFfNt8Thz9e8",
  "key2": "4dVWnTQBeYn2VZh4y5QzkiscQdBBH4j4MPY8wnFxXAdZsc67uCKyVsfVStKUcHXBxhvJNNK3HWoqa3SFa1Y3dCrL",
  "key3": "3RAGuRqVjHE38qoZ9XQ49a1C3NT84WoGcCXTcnsHCxo1YcSbqqErkCiMWqcoC7rdwGhAR6Nta2jST3D95rGhAhnS",
  "key4": "p3qzo2Hu7vUs9Y28zXJc9kWMVXeTdFED7dXeV1xTMY4UAq7NcVuiBHEMCNpbvca7Xp8Mrzo1szjFNed3Q4ZXu8a",
  "key5": "29PMKW2BDHUjc3Vkv5ntrpN2jeTQE3VAuqXR1ePKhWEBHMrRtw4Qf7WPf1av7DvgbWesziPUUYDGuHrBhPUnz1Lx",
  "key6": "3Ncfpn5TK14sj4o9DtA6TSooFxwZWdRhdoqaJEMBsFLamx5nU4EPKkMD9mzhhpjX9NckP4YcRGcMwkuaujUApKfG",
  "key7": "2MaUfVoKsX6qer73xWEBDHQb3eC84Ce6JbXu6kRG6pykP5fGnYZffqYZX71gQocfcNtNUcemVHvigGVVHAoSDcuf",
  "key8": "4TdFHXrBgeavDoiMENGfF3FCSj4xsXYhs3VD6z1Ks2MBJQ5eL7gpv6CNgoERmQ9sVtiZuuA45F58fnYkBM5usFfH",
  "key9": "5tbwPLjvLqRBT862ygHR3yjuuf6QuRJNiNusRsF3UTxSuDXSqvpU4RFY7g3MV9KhqxxNTtQdeLsLPTk8vuwRyigG",
  "key10": "5d8hddAdnaNPhkcbLxiXvc6BkgYxS7nVvKE2buVLxvY9XyvtADnNz5Rb2FsfguCxs1J3bFNzQUkHYXD5Adme7zcH",
  "key11": "3eG9LBPzSyGgJqUbaNj1NxGFgsri4683aYC2EibAcBhfPRMaArfcvqQHPhb1so1b64vm7p4aVe8gD7AG18HMvfAT",
  "key12": "3gmjnCBE3KMpWd8rw2CHSSMjaXiYPnPsyM4Xm2zWS1inqmLGkMM77tXntgJQGR6GeMnRkGphJFXx58Pm9pomcsZD",
  "key13": "2W3Lf4DtAHd2Y4yuf3agwVERR9FDJ1VSUFsDsZnrpv81EDyFBH7s9518YRzB6WM8M1MaWGqcwrfjQS6iy96y5BWk",
  "key14": "2SaJFiUE3NMHiL9h6ydXyEA3H5pANSAjXXrW26BSvPVz39qiXt4UaCfuonVntaH17rB56XD9AWg2cS8qVNud8yMK",
  "key15": "2ZAVD81AbAKMWNRhCP1KD9nTXxiA9PeaRhsUcb23dgD2YTfKm5pTzQ9XfBgDtWBdkGd1KZwEyLTNyFLr3XAQgGzx",
  "key16": "3vqRkBtunToh5WRyFf8kpjN7DsH57DGcVEzckfJYuLvuVvYHct62VmgNQALbU8nHcz9tBYzLEw54KWjKe2sp4fsX",
  "key17": "yDx7BJAPk9r6JUHZSeCQMSWfWRUyZ4aEfcRzR1F4XYA9UazgqygWcVTBmPAZvv5iFiKzziAyAemBcGsxqqrZkVp",
  "key18": "37SkvH7iJh4XKdftjNH35QxiHXskLZ3X8mDcYgrtaYfJWGKpGCt3ikNKG2W5EzqQ7uHR6gVVaXAb49kjmgASMuwz",
  "key19": "Y8Q7WheAbJFVYEQrZNVfwY7T5PDBgbehwRUBgqq1ZYhL8Af57kRxe3X24fpChmsFAteaVpQdikn46MKJU9ZvwtM",
  "key20": "2CBeQJE8Q5N84ejjHaHrUi9w3RZSKD4LqGG4vckaLgQvTg46YxcGJdt1k2Ss7aW2K5VbHjj7DnzGmoAnuTzwMKde",
  "key21": "4PtsXVicjuz6uJ9C8sjnHjYL5QhDy77MRfikT7JqxSoycy4YJztUPUhbcrBxV83VqRKTgEWfqnYAGYPPM3gtBnLd",
  "key22": "2w8t2JpxpdHLi5CMB1gT4tokkUvArbuEoArJ1LvXuT3nkbEN27SeLq3vchGLRm5oBnehzRXrUN5wKbnHMG3ET8pP",
  "key23": "BKhMuaZdjsW6ceHqauNzrsPz3kuvtPzonj7kGubGw3zR35Kdsvij8ijSHVn3YxMVmJg7zFMtwuYPLwR6YUyL6XB",
  "key24": "528ke55k6fCEoqyP2iU6kyH2M9KfyecSqmvPUULe4WbyuhdG3aGDksouvpjRCapPqkfYvm2d9kZ1953JUPE1RGsu",
  "key25": "5StnzvETBdt3uwAQMieAtQLpoqBsQuy3mN29VjyEVDRW8jXpnMwdCHTwEh7igjEKhwY23rA3cz3C3sB68aEJXdRi",
  "key26": "4SL17nQKiA4uEU9zw8S6kakb6Nasp1cczDQW3EEGFvefPaXx1wn1N4LU2phNTakwqbDuPxSL9TA8TFd8aAPNVwzo",
  "key27": "57L8vu6PiwUNt6po83zXN9B8SCFoE7WqtaZK3fcXMQ7EqLnviSLc3spEDWajbixz9SxzZTZKgQCosTcJttu1LqZu",
  "key28": "2jT4ihLD4mAY4MbScBSTJuSPk5QC5G91vfvVLfhbPiiQo9ypTdxpZMckxdGwfbjCoUffk9U4zNKKLLpfzeBW6WV5",
  "key29": "4P9KFfKP9a5BJf19LgxW3GsQ3QMyrRDwn3xPaW7VoUNcPXyJPudjVzAvGmiRPiwmG7FJxpfyxuPnnfZ9QejvT1HH",
  "key30": "3anQmRqfSHaStdkSzqio9hPLNUx4Ca6CucvVkvQvvw1jsKffX8mdGpfse7dY6BiM1kcK8u4cSfRd9nvj5JTKmwvr",
  "key31": "qjLMkQzJBfQmSHJjNQ9kiQgy94bCizYgojq9N5e1GaG9UVDf5MZjNrcc7rc9AC7Vqsmm4yT7v2TNVW74w2f2GxR",
  "key32": "4cN8pyZBKjdqSiUgSLviAQouPfTPU3Tw5dyLKFw76j3PVZE1qgxmPus9cHcoxCm6sCkW58BFuj7j9yWg4cdVw6ys",
  "key33": "25xfdNmPH3ArojtVW43tmWr3vHutHVS7nMiazNXn31gCPVNSo6dMw3wHNnFP3MmV2vXnkbjzWff1ytb7FnLy6hud",
  "key34": "36C6VXGaQrF7xWmDWZF5r7rz4UgnYGXbBU3por3L2RYEHhtyv9Pq64VQ7nszVV5tWVLx1JfBcL5VHSEec6FWTrVx",
  "key35": "5h6WPPcXTUdz72oLXbDHTrm5XNSiHm79ZXZRYkMB9KuAtPtkUm5fi359zapXiqysUjfKBqmdURvcb6bTV3Z2Czxa",
  "key36": "5WJ4asUgGk2MJBAtdt35WyVxnymNxRKvbTGUMurMYoCNiYzbiTapFHnueBXzA9jvjsZygszTnJCRzmHh3faoVqUT",
  "key37": "44ku4ibEzvePkQRkTDtVdNgY4GYXPZJ11pHRfxa4cRHfzXChejojH5CZskYmSmNAYiqbdQui2ApK5Eq2Hia3R7S2",
  "key38": "3RDjkvtB7QvXMLRicDKaTuZjo1tSfS4yE2BuYL6Q6eTuAXa12BoWcToS6iFmSzrAGqH4x1iGuZrFsgVHX3NnMtgc"
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

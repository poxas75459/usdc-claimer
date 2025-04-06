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
    "3sjAgws4WiPuhSm9uuxBTeTkpG4FtUzioYTrokTxxyJV1SLZ2o6sY8CvqT8SdEcu59yEoa5NUkefJZdXLyWd1vAB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PETULerZCURkii4a1NScstzxRwE7roFcb4LgnonuxZiFAJ7eU6Yn3HBfBFMSqypQc4SckGZ5qSdqLztJ8Ep4wBK",
  "key1": "556ZYbUEwtTC5L2gQhARdnX5ZCCbTTRm6NzCLLzapWRsh5sEkUkZi26N7TDFMFaVwtS8RmVctxR8nvnWzWirybrs",
  "key2": "5dBH5K67zZeuyFZWKeGpCGb3PJvHkKrNPP86SMB8yRWLLNYqVkJQMfyDR9anDe1hmcHx9ugVUKvAmAXQDxMBPGcU",
  "key3": "65keiCsqP9Gpw4X2FYkmpq38GmctGEh2qTo8zkHyk1gdKKANqcJGJXshNjxGUiXDaPAgZHRGPpyNASEhPg2WbUgp",
  "key4": "3pa7noiJc8jovPyEub6oo5TQjQUPoQSSQVCgYKskTM38cVmr3KHKZuayWQq2UmADvkk6Roayqu2JEJbGHxpAUHx5",
  "key5": "575gmsgyd97f529pncVUufxde8aGj6ke2Nm4h5upiUaRyEyDeDFnpAUhDWWc8zfXfcDTTDF4d1gRXY1shDnFP5ea",
  "key6": "4EhtmTtDxW2D4F4feTByutoJfCTycSZCBdMfr5h4e23dwEsPvHjoYWChiLSFoxrJyhdvu1avdoRzdNMtWuBXNQHu",
  "key7": "3AD8SRUqtb14H7K9Tj8Fc7YP9UfqV3fUM5n1sZspevzv2haFis1e5GV8Kw2fJxLEecQXjSZeNd3GohGPt9E3qdaM",
  "key8": "5b1gKvmdFcPVQhLr5gEbQysr6gdrAaXDZSCHr33hKFivtQ6ae3Y3j9Ys3SGMDVnQ3owNbmKPCw9MoFSaXNLHRref",
  "key9": "3GeTpqbJj46A592dENck9kfcdVYK1XKZBExQTV2gZjZhm9pk7hW8oaZrmR9jxGsd1JGDG3VECgQYZnGUzAjstNLn",
  "key10": "Bxb7vg1T8yZifNgWJHKQRj1NEckjWEJVX5U6b4aweGbpratdD6YD2ZpeEi6qJuVpX4VtwWV3qSmMnFLiRHrR4Qe",
  "key11": "2GXgUyW1WkUWhdm9WaTQdxPPHZJXxccsSffny965yqmrv3XVHCpxmWifLqak7MeLSWudzAp28herTVfWMih7QJ9i",
  "key12": "5kEH9nYzzkQ15F8CkNCUEWCySpGhpSMq4WwpWLpMZZHaUMQpPaCeYAgU5hr92EJmybwRumqZ5daG3f6wvVi7TwS1",
  "key13": "5Sun8sARPkLr5kWaLnVZPhoRYScCiUtn53BR57ehFrArCwU79xGKrfS2zHP1vjEQBnooedPD9EfQAiwejMEJGwZx",
  "key14": "34b9mjx4U7E8RpqY2ELpHm9jM7htg7C5kE6Pt4sEN54E1cXyhhJce9NCJ1q8tpAgMcYB4Vm5Kby4SeNGKmpYjf5m",
  "key15": "5NjSm6DZHNmaqEiNE1Br7WUZcK8SvmUpBg88wc73G2Hb2yexodd2XPrWSW9n7nKv1UtJPBjCRoYgzuioYE4zoSrB",
  "key16": "5yGAuPADWMHMWm8K3B3Qpa43cYQU2eu1exQj5xBwZPiMwiTLvg7yxF5Rm9LPe6zUv8qmRfzfaE7nLEro9fSmFboJ",
  "key17": "5AqPhjv5Vk597ibgj3SAM5RQyDeG2jDKBoRYLZjCV4K2pS8GGv42GhNRoA8nYNFHfDv7SR9qfGCFeVPwFeBb7p1Y",
  "key18": "TFfakHmhoVXrd1VR8UDPKYc9AfMjQhP21gVtmFxWnrHiLpBUbUphAXDx35r4Hcu2WpLDngdET62HqY2ky5BN9No",
  "key19": "53NSPSNs3ZzteehxRMbABJ9MUDUVgeQSXQtAjw9ANcRJUiBaiMtZSuDECEU9X9Q6koz4gey1xy7PfitEZHuFieyj",
  "key20": "xHsaFyvTYzMqWAjdj3xTm1dUNEPi8kthTymJxJjSbGGdQ9ee7izrtbNjQuDvjvJ3yKazbxz41v8Mp5H9dQbZDX7",
  "key21": "3dajPZKvXkikmxUMDdidV6o4EckKY3znSoPyPMexzU1aXwyDCRzSTFJ3cty2N8EAm1ZDdVYJzpFZUdm6vyKSSWN7",
  "key22": "5rbvxbWnLtCvHKG9JYpKCNCz1WQyYc4hgqEb3WTYVxrswQDGSnSYmBSs9hHFQdqXEata5Sd7tj5YuEa75BLJBo7C",
  "key23": "4983mtNJMXEpY2mYHtjBVc2aSya6UNPPdYzQ2VFpKZMnvH32XJuPh8TMDJSG9ip7T9mXGFwYtghDiTESpJP8fxqo",
  "key24": "5XrdD4ToWuq3r6wtoTu3Cn8SMCnkRGM4n9Z7duDDs3sFL7WTCBUof68u4DeNmqxVCcdMbupkCurL87CRfgpDwiNr",
  "key25": "2VAMy9X5Ejbaux9w6E4cSk4AJs6XYpWJpoyz6ay3bnn7KwwfZ6ySVeo8LSAuobDF4Gvc2j3waE8iiUDeuVxnP1NF",
  "key26": "4FEob3f8Nv67oHZkJ7TFgcqd2nAVkWm8t9LBEYJaxuUaXnFGs3UMP73wAmSLF25QAkh4r75JERC72fc8cbNuARRX",
  "key27": "5QLgyBf1zc5a4PzAcyYeAZs9awtU8hKuVSVDcnTjtvvoQ1aHa6rxsfczcijMZo1Ped7pFpQDuB3x8AC5i7Tt7CJE",
  "key28": "fo95YkvDKSy8ZLZaoYdCdcxsmtbg2r6QZMBqGSchQqzwVk56KrHL3QM3vTFZNDXSa5RpArYRRocBvaPTgHjgnaR",
  "key29": "3WGU5tunf5BbUY38DcGgjkLxTy4FxdythkhKJCpLz7VuEjTfrHFH76YP6DvaiUpcRpRabfBNMZWyKT7hj5JFQvLH",
  "key30": "54vEFZmrSjyTW3ZQhTLny37nZqoFcEjn9PSsbCrdjDMn1EzZGJLd5yvYByK1QMurDJPS4gbD7LGVhDBfpzydfzpf",
  "key31": "3eSmpzSCXSUSJUXRtuMuabsA33wkBuYpULCpDFZEHSva3rEow1yZWmx4yP3UiqzWMuqFCyJHm346fkqz7A1QjU6n",
  "key32": "28YgthfdFLZg7cPJpTeVE3igG5KodYB2PjWQbxKvQ18AfiR7QC2ZxTJ65vakHacM5sEnoKsUbhHhYnai3KbrjvY5",
  "key33": "egjDMMNfkvkP12hZ18qbaEVKYKWZkQ6cWmsVubjhN4z29EZ5naj8V1pBeUZ8REJaafpxMBqXHwXGe6vFCse4Ma4",
  "key34": "2SP9wR2rMhRWWcqiBTH1MkFqnzft6p9hyVKU2RWF1j9qCYeypQfqted7VB2Wcu42Gz2XFTZBgHat1i58inQd7sqp",
  "key35": "3pPG9vAAuiTGaPWxY7YH4piirTjtkr3N2ECq7LKLohr8ZgXhPk3p2uHouSYW5FNP3MWao6gftaPACDHQ9gJa43gw",
  "key36": "pUbQhdksGMPkFvMwU47c4WvWB3wA9QRD8s1UxuSL8w6dqopdjeK9u4mkXcTpDkNa4gShm3neiMJv34hkR8MFQLk",
  "key37": "5ns9JWz6FA2oXUaP4HzR68iMr9TodMxUhpkfge5cCGW5HJuzAjuVXUx6L5UxX4xTuhBNenvtnrH6WG42z7aR7xTi",
  "key38": "KoYE9zJG4SWw7VRoqvK5pfTt1RAHE55d9yeEPKQ49YKyVtP8mPKZGSv5oJwzYTcdWfToTSpATHDQTMVt1Uw5t7v",
  "key39": "5LviqKfrCGfDbvt6JoQGbF3gERNGfaWo6Eo1sxCLXmqokHchbbdc2qDZ5UeJomSWiDyVNcPPaBVqn3NfxmTMGZfz",
  "key40": "4BmdpVgXmCjpZ9ESZV8y6Gffqte6fkCukScdpUtwitC9b2iKDN3xjs6Dc7aoNzAHtFRo55K6scaqkAuRkPHqWCfj",
  "key41": "3G99Zr3GrkpsWYAcZkkRyA9Ge9saa6TkP7vwpR1ymSdfVqsaj4DiQbdRRzaUQAoHQWBZE7ApjQgsS3qMsTjyFzaU",
  "key42": "5gCFp7cT3X3PQaUYhfFerU8fAczavpU4H5hgHg5xEpyL55G4qfyaSYiNAmnTpjLGgj4Whb6k7wZUeFWPHL2cCTFy",
  "key43": "5pM15uvYz2sf7T559Nyiemt7wmLZ7xBxSRKLTG4m4fJV5t86pmj3wmTwXr2qFsMVk1jU7VkAPKmrx9e1qifkbuZM",
  "key44": "4d3sRUaJY62yXtgAgNBL6HS83QWA72uCKuVgNp5hpSwMczrkiLEPAhdZVrjF51vbos4Z4cGkAqFg37nx1i44jsj7",
  "key45": "hkcnVHehWdpvWJSgpsy7Kd8LEStH3bMT8f97vtKYusWhhKhntu746i1gkjkNMSxMend6KEnaPP9S2EDkfAAby76",
  "key46": "axwzmXk8TQT2cHJWeJbekMwZGDze3dQ68YiKwFgWQ2xSBaZJe7ikS7UJUxqQrRdYj413ixKoWUGXHVAXThFGmRZ",
  "key47": "4KacAc6YKzb4EWmG3v3EAF8fQVwxNoUN77g5KpNvJPbUKuPVwDpDi38RayxgWdFmYb8DNu5mzkaKQjZBBekEnHhQ"
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

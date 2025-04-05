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
    "BYhAJY3VWsPTBxQrWPcrczkSrwjjB8kNW1Cr9yhDxeqQPd4uu5SaD9urPirLvQTAYgv3vVT5wDbsefQQ8Nsr65H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i1sdszMA9dme4VKoAGNUtjav5ksDQYvg5i1sB9j1WC69NNkFMFpVLNEkr7zVUJuxQ7JLdovCy5gF7R5dqFDr38g",
  "key1": "2cQvxsHnVKRZKb2KB55pkYyCve6phSbvL4RXnp88BJdaC4NxG1QtnHU9SvkcgtMMx3KXwNVCqR3eiSCyQgcB86x5",
  "key2": "XnE7mWbV1S6wmp9R7MvXRprJcU9qoNJFNry474rKGN7ZTCWkFk4jsT1EFjRuy8QcaWhf9aiV4V2FjKaKHpa7TVo",
  "key3": "5ET9m7wXdbSA7szdLJeDQ5mTpiCSsuAAySCivyRWUJgeG3cF8qpuK7ko8NJnV59vfri285UMzt13ej6uvkhqHMrX",
  "key4": "XoQvzZWUJZ5KeEyS2NzAMD9Ec4EipzGXBeBMAA19xzNu56XVVAeBN9pTJdVsAsjSiSbbFkU7K38yhCJua8Y5nW2",
  "key5": "3BgE2D2KHDuotos6GWp95AUNxqkD4u3JNY6oxJFUQeGbZUnmoSu9TCrp4kBndUyRTp94WhYkBAgEqDcz6atHvEx9",
  "key6": "4eteqgpuXuUyo7Qe5Tyxs4qPQ6fCProTrZE85YXDo3FSHL61MsHenHgRpPmfPj68TCyqgipvzCr54e21c5pmiDa4",
  "key7": "4ryok27L3FqYh4PpPKuA9dotSioJAGoGuLp9cA3jShntJ5M4JLGEu8AAawv6NSHoo5MVEUSpc6TUuHvM468HSsss",
  "key8": "3mwQxQrjzPc2Lh3rGMgVjqjKjuHz4jeGvadDBWbah6hVr95TDqXs5PCuzbusjZcimEuS5GE8qjJXDLnXu1eqZTYC",
  "key9": "4Y6a4axwrJCJNVmsGHjRBz4LbdVAS5WyyofpaXJVrHd4e4P8De9FvxJs3MGza9W6TNby4ZEzNkeBxnyMwYBmSEa7",
  "key10": "3qCrTt9eA5jbZR8Um5Q8GV44TJ3jeabkoQYZugSxJGD6LWsHYKkN4fB2W4jY3PXT87pfA5KtUAM5Jt7r28ybyatG",
  "key11": "5yASFVwmrbyUDdDptBn8xTnW4DC4wj5BfDij4Xx2Ysy8aGeLsPHqVCjf1ZYjjeXBqDBSyLqkPJfLGLDPQy77n87n",
  "key12": "62zeGcFVQNcXncKuPgE5bJ9UgQwFgjWmp8HKc2VwNXuD8UBdunZZ6dbLvk3Yr7Co8Mmkj7sToWbXvZADUDVEvkYQ",
  "key13": "rkgGckLRL2Zz31qqN7okajPuHGPcTbU5A7YezM2DdPweGD7SqeReRhVS2RBTnmS5KKzhjVHUgEnwhUkiLEGzAEZ",
  "key14": "3QNdmsrXzsExj91RcYgtVxkCVCpfsFRF295skjubY1k5zeqDynxhGyA1y94uN2uN2R1oH9J81RfPAMBjLKrEfLVF",
  "key15": "5Niq9NZeYzMUT5kaw6sSuakQwtZMvHaUssnqvjDnBhkUgf9i1BFv5TT9vDktLcKGCJoDQgSB1tkTqkWoas8HKPT6",
  "key16": "25xrMAvDwNdZiarh9LhJwgPcu2GhbyGduG9oyqHET7vbSzTdwUyY88V1RCnm24hn4gUQUSPyAATfCUWPcBxU4uat",
  "key17": "4KvoXR9pwe76kj8E1uVsw6nC7L4M2vqzi4u2TDtvZKfTj17Rrn8pvE39QiShU8kny81ZTv5hUYDpSoJc2pZPbZjL",
  "key18": "9Wh2LfYJNYxC9AGKNFern8yGQLFmHeEoeeYSCp6MSHGxKuv1e1fgWn4LpPUCXiDC9GtFtbVt7dXWn7XMnsqkfzb",
  "key19": "444u7UJQymFLCjWbrVFXE1VxeM1hDLEvPBxVJJQ7EaZNnuiT8ePwmNkfvgS34A4XzkrpbHpU63fTTrBSzhS5k5JQ",
  "key20": "59QpFt6Z9URCUkV3NmWdkgxRtknGs9uqoeVtZpdV8c5BJqHQCUa1CaKxNjRjc2mPeDvpNQqodxJsJZf2T5EWuop6",
  "key21": "6ovkPyX9ynUxXk1V1poM9BiZiUSMmw3EVrtpJpjXHqEQkPqRc9goVdC2z49T4PSPiiV1YtfHCVLWa6Fu5qTLQGf",
  "key22": "3AxK8emjLCmcd6ibX2YND5H5pxJMeDeZ4688M4WsKLKUeKAwbvSJnMvpgMeuSEWmYX4bSzueTjiAELLYvftptxZE",
  "key23": "63oNUwyABVBCvPNa8jNm9qvdq2FznU6x5uvnvCgSjBs4sLFFDJw4q8BMnNZu8vr9RtpzUYhs5kwaDjTjr8CWRN6W",
  "key24": "2V1Jv8aFDUvh1yBafiwqyP9iWAqgvyPs1kwcm3nZ7JuAcDChtgrUFXpHj8udU6GMJUkFGysPmmmAdXejvaoZBMwj",
  "key25": "KEsySYBqR4PEKeNZdmGdFHJhokjxJgoRpBXbwKbcwBfAEFM5MAjT2jEud58qPobns9YM5RVXXeLhS6r16AUaqaU",
  "key26": "PUqKxFMv2yWzh3XvKvWGcikMVnGZb78vimoiS5FUH42QCaB1bbZ9VeJFgHFmcgHN1CHTvz9RjAMPHorjXUT543k",
  "key27": "3SiuqHFDydRVUp24r8ZxvfU4bzSZ7588wW11DA4gzqAkAvtroAQ4HEAUmWWTDfp69oKXMFRVygRbsxLwdbfgDngG",
  "key28": "WjxBDkEQuvgVo7i9mCNNnZC6ygtvinre6cMuDFi3kNV25kvKFnA33rt6sYqrjRcAafo2FDQx16AJYkEdxft4JRX",
  "key29": "oZRWrz1qW5aGeQEmWZR2Cba9RgtyyqEaK8R79Atnp275Cc9R1A73iCFnYfz54UBoozqRHULKWNvrVTQy7gahBrV",
  "key30": "31dn6QnX4ctwToCvqBZ4qepsJHZX229FUJ1srpjN1eCjeUP4pSBVdDL5W8XRPVjYNauuoq6Lgin2ZYuzdgfzPtjZ",
  "key31": "cKuqv5CB286tNuFrCajbQUturDx1ZegPLF4mbsPrzAyD9QCQQbirpgHVBMUji4WxMD91Sv7e6UWKvFebw76hAKN",
  "key32": "ZoSYniGPbxD9yjnRL1GrDURH8QhNPPotgfSGqQhR1danaPR22fy5y6CrmBTU7nFiRHWze1ZPS9q3jpruBc3r7iA",
  "key33": "4eGoxbHemZvT47w4RF28CT2c5SnCDHKxGo4KeMouMzsAtCh7WN6AVsJLjmQeEM8SLdhzdBXi9fJSdbkyboJpoe2i",
  "key34": "3iqxrSL26R9Dq4V8T9pHobT7UpNNXRc4Nrxqhc3QCaZh14Rvibg5zrvcMDPkZZnx7Hkrdu3E8u1E1VLAXBeqZoMQ",
  "key35": "54jsVty4M86zjdo7JnxxjTkbVjYMzhjbLzUofGHEFFr1KmY19fz8fcTqyQ1jwfstFPwawnFMZTLbfiWfihm2J8o7",
  "key36": "5H8vNjWm31nhHATfTBF1DCAEskbFysmwbEXhrCofK3YwLSKpkwUm8XRoTriQmjkcYSgDRLJ783q2hu9hpNbDWHr9",
  "key37": "G2WkLjGz6Rrhz9iMZoZfJEp3kMY7KFf9W97nTrm4g6rbz2JwR5XJ62bMKSdFsRdeAJc2Kox3uaN4eC8Vedgbq8x",
  "key38": "9dP1KeXV6oC6Yp1mpmPqQuuJUi2QjcWdEdSsyxALSfd4oKvPKP25WytxDVGWHk4xegRS7PrGz2sKyGiSZ1XGwe6",
  "key39": "sJvyuuqErb5xFmoWWRm97judEfFnMhzV4pNX59aHnCkDvinNegc6rzNtehuT4fzovRPz56jbcSBacWLYKXrdwzG"
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

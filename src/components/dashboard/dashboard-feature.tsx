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
    "dwTfvem7mWMgmZWQqpbM8urc1dFoagfr7N7ougS2XjtALn2kt6PdfMK17cUZFGeeS9kugAhXpvXTpsyyQqQSmN2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kkbSymL7CBWLgRGUDELuYXM8r7A32Nc7R48RqdW5gSTr5HtDuobdu1SsyvmxsWB8ZCQdTBzfZ5cnaPPHTYU6z1j",
  "key1": "2FhUJZhmmc2Qhrqency8hCyLa5eLFjnF9YJshSD6tX9U9CBiHLDzwz6dWLwjAHxCzeFuXNY51yZAzsJFYqUarRx8",
  "key2": "57yD9UYr4P4gb4eDk7kpVtihUR1aBcGh3PH2t2Rsvhhi9GwTm8ArCnoW9TbzSTVQn2DVMQDZp9937fU67kpQyw6D",
  "key3": "4mR2Q7z5f3QLgo943mRUGhwTP5BZUYHPtk7nc18KDRA5Na8CaYwnyjJsxrcYQAp4E7LpZmM9a3xd8MFU4FHKXqJ",
  "key4": "rNMhBNX4zmC1Gge2fApSTvo7WdK66dy1D5GZWW2443qdh4BJvpHoSoCruXVjtgXroWrCmGhomRwU8C1QuiVScTU",
  "key5": "sVqpqa57RGHzp1aGPvWe5nUtVzQb5dedgo31P1ryxF5btXj3oDjrdgyA3EfN9rmDnxnuBdrtsgYKT5BBRxBkDMQ",
  "key6": "3W1mSsjt2SAZK6uFyQjNLEr8aWYoDf1uCt48GmagydFAagdUh2SAjbDnp2qAxx2UPjEXqRJhyUv8jr1uuUQsykMF",
  "key7": "yWYTEprKJFamhC7L3aLak9mZdygvpQo52oKDkNmva8gz9azxJsWf6cYDXAd4XAaw97vupGzEueut4sgJuGasFXy",
  "key8": "2fnbvVr3ZGj7J1Zr7UPguApnfnV75SHfFggDjaLArsxJpCcbkf8i4oFGjjtPs1cBB419dpEKVwNsFvnVRFDsi4m7",
  "key9": "CDvuv76wDNkbem5fxTvrrvAosASqbYAv9bUGJzEpkWLpUGaSrKNQLYryx2omiBLHg7sFAc2ixnA3r3U2JDbfjh3",
  "key10": "2i97DV6mZvVmpc4amQm3Lon44MwbqwYFvtBg6tDw8yTwreWMuKoecNmKAVhkEB8ciz5QqZsSnhCD2xGwkask7Wgo",
  "key11": "38vJXP1uqheWy1s7AL1Et9JhbHHKTpHWJen8oY2kmAVBZ2VE4oWvqz7zGsHWprcFAHyhgukYe4HMj1dgCEHQ4u4u",
  "key12": "2hQimwV7qCdRhWnDK8iiCe7L7K1QKGdryUdjX1zB3y8qh9auHgwqt8eHDvK5pzXnAMBQxcZsUmBZMJjZcMh4V1NQ",
  "key13": "3QjNkXH2aAt2pRxGuzeSdtaXAokWr9yMhff2iVGqQVwZ1LNoVa5GK1tHpLQiwSGxwHQHuqhrgH9U4NEZcHXRGBpB",
  "key14": "3vNzeFwFUiPzYiMzR9AQay5NHGjXF4TJKvxu1hDYhahugsjAZxRXdGSc51rvCuYpYJPnNW4QJSW9iX4fNAvoLDYh",
  "key15": "q1RRDK5dSwh1DjFBGkKjvN18o23DuXjDXVcguSSrAbCyfrRTCNzyG5yhrPuW7CPez6g4cRVMcm376DRQ8xC6HEx",
  "key16": "5DsXdEw9kMKebwJNz8yv2bfAsfAPEcS2nMtUWq1ELJTh23aduTisu4RTBgvcje6mfZZJQqP94Fn2GxDnPgsMeRge",
  "key17": "dHFteHqKhdoquyB6LG2k4mQC4kvh3QAfLmu6dZ5AARWwaBD9WHQ5pvguTb4wRYQTv1WrG6x1w1RvNBmBdvJwgG6",
  "key18": "2epduWrWACPvXSsMx4281B9qPSs5CKEMAxw89a5MEb1jC7T5Sw6JizgJPAKvyApP2J7gyfdC53Pd4dHekAPWEgsg",
  "key19": "Ho6iauJvBJPQAyXRdw3KZtswDUn8HwrswV8yJwfze8DYhVxHQk1CbuYFySYBd7tFjU2kGMgZ6n1Y7k2tnkbT4EQ",
  "key20": "3iw9RmaG2LjBMkgq1cvrb8TybzzrzeYXsFw13deXLqcVnTaWUNLbut24nizsynbL4GiaKwBX8rPavQqsdUiaxjZ8",
  "key21": "4Za2KGcr7FVqWrPxZTNQvTcGeuWEwNomtL3iuQLebXdxpBm5z7ZxGnyj5PVw52roxgtow6PZodotuLXEdKuwC2KE",
  "key22": "4S9boPYTVuKkabdwYzxCMzG8U1ZeEUavKTeTGAK8hnKPqkg9dHHrVdJwbrVUtkRqcHM3Y4spp6tXihsZsbB3gHEx",
  "key23": "M6NutiEC7vX6BTxB375mxRRVF1wfN38bMNZVaScxLcbMksiTvEVTwZB3jACZpdypP6ej7Ajv3zzRBLRw2ndWbC6",
  "key24": "5S5eYrMpDoo9vQeKUhEYP1Eutb38VMPqGvUprp63M2AyvsbxUtNJ25RJeojXqHwAHzRSWmv125rr6swg1CBZxp19",
  "key25": "RLctf5BoAqkEcCRowmiGv6VWzzizK9ATtWpci9gdnSbjLChrJBfFaDLCCT9BS1GFhFVZ9nZDpi6N6x8U87cXEN4",
  "key26": "WYq57wX5LGkxdw17tNoJ61wdzBwDzUnwEUfa3N4X7Wj3ZA7pAJNup8qD8nqaxAGRKbqyv2uDr9hyng5PWKBLVmS",
  "key27": "66io38XJqA7KDGswvdjaJMuaG4VjwnuNgASt7N2nVjaJhfHQJoL4sPtivsZLTy4idWeTivFPBXrMRyRaDWNWVxfh",
  "key28": "2PrMpnbnctVrz9NjxSLGwfNB2Y8XmyuVHHLvU3fYQcW9n4fiSYHSzbqjqtecdaLaBZi88HXGJ6mt7WMYLFm3pHZu",
  "key29": "5qaeKRbT2FaF8xc8rCZezjfsCU2qmS9xL8YpTwgmrq4mUx2v5D5CUk7WPM1SiekcpYweRwjEEpBA4JfKQRmx46XX",
  "key30": "f8wNF1iaKJ3fjnLyMC3krgnDz9gGUXxVa1388tKMBXKSTJz4TbPfPTNYyTMBFJxVmZojQd2w4n6HZzWv6urux62",
  "key31": "3vRRbEnFokmcMSR8FtwsMnnf27Ki6KaHbDhfAEVXD7LhiWz2qqkGGy29y9Dz3GXAfZqiSnjE3w7hpccLd6tVdspt",
  "key32": "5h66NdCp2E3tUEi3qsPiRRcQvJJ6vWAXYUhHxsw1BSLV7MXJHWsE6zTk9tL5GcPUCQFxJhtRhFwzyzroAVZ7qpXe",
  "key33": "4wiC8ybrE67Fs4LposmwwMp9RtNMfDJgsTjW9xRSnevdDvhpnvcsoRF7LqgLoZZSu2Q4C7fFUkBMta3p2Hw4wwvM",
  "key34": "WLcYELf9e67qUMe1US1ewebcNnFkWUZ61g6nHmzJ6mZyifvU8YCGE2JJxXyENtdzPvazAvivtqZ3V3cdFwGyZ4P",
  "key35": "5LQ4KYYAXAWJkvwZpjcuDtz2xYJrWuD7ENL95iSJnwuAX9q5kBr4gkaEktZTNQBQjEM1oYxNLcLyhwRJaNR7kesT",
  "key36": "3ADBk56htUyXR1kLfzv2KqSazQgoSECV7RqDKXYC3WgWHzpr9v2MrthX7FrHs4FvFdNAoMJTB77aAM1uUzysmMqv",
  "key37": "2vHNX63nvg6NomWPJstXhicGYVG4Aakpb7B4jomfgsC3dNatjrefQgaqZ92nVktjPfQj5iEWxM1nXNZwV3stpAdg",
  "key38": "5DJt5aCX6QBsQh1Qd2sRXzgEoWBhxtCr5dUGPVqu1sAX5Txd9YbyUhVSH8Tw26QuRLehWs8Y22xfhDovWhYpWd5q",
  "key39": "2czcdjNK2dFfL5PPmXZe7FZf1oK52jiP2E9nunSUyMCqAPKRzQ34Ms8WyZ5xMdXCFhZrTXt8FLSXPFTyWqfcT2Xp",
  "key40": "5pJC5s4dSPWrVh1bSgpPC7zLc6PNHUPjcbPdLmfpSykYH1UVjQDy5ZiG6vfzrM1UAhvGSBH3WQR1aqoHZZeP3pCL"
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

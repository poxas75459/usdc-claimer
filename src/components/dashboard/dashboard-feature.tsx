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
    "5Gqvv8P6ncG3c9cSQ1qp2n7wGCwKKHx7pa9FEvAnwYqtNtLmqP6LGcGL8HwvBjm771uu4UnAsRUzAW2JF3WvYYY1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NZipyhPjyoKsj35fKjkmskL7VquT28z8MdXJPkhtqbaZnZho7SBwwYpNtuZYxQpfAZq5fvD2p6MVCw4tDCpuKyW",
  "key1": "61AxbgMRnpPywPFqv9X7YD8bnJDs4AUGb9NrL6DSdDgh2rXc6HHMeRBQRjZFoYduX55eHxPtn1GpsKAuVeE75qD8",
  "key2": "46EdFaPPBhVaUWyFZjR4SNudNz8d93KG5iEVvGK8PcPx3aKtfYUJX4JEutaKDuCu5yu8ncKkGkFBGNoETomdBncL",
  "key3": "5gnCMRk3UmcAGb8AQ8JujE8rY21ab2h5sMCJgnH743B7EvQy6BdTkXgoS8RYKuM98PU9WTgnqgxowQfCNFZQAZ5Z",
  "key4": "qVhG9u8qar6afmo5Ri41RwFp2wYpNsggYB7ivH1jEdkBmtkoHXCWAtmvepzvuF8kTTKqssVHPBBaMFoPrwgGuNM",
  "key5": "2rP3h7TLAW9MSBa4fBbCtEFEE28VLKza1WhRQj3HWNzkkCHEQqtc6MkVJrwJ3v7d2o6UcGoVNcZYYudFguBLbS2C",
  "key6": "2wM4fZ9Hz5LE6MGgizcNgzmdb4HbQ2wiNmtY1bPSjiSYb4CjUDdpbMjUdTFAbay7WoS85wogVcXZD6XXKdpNJBw8",
  "key7": "61HjYknaXBNZVVZBW5omm12VuWHLbu73oK4d34bwWioh8AW4PMJsrSgXiUnPE8fw8pLCjjpyqdp3xm4UZ2okkFpe",
  "key8": "8oX4CYkiCTdsRBx67gWFJFZbbCgFXqD7g1wynAUSM6cJzuECwg5VHwC6Sh7uoR56nmwuoyNW4B77wPy7uammVMi",
  "key9": "3XNMAouz6ujSw8uHDqA4nTJxm57uque6HRPj2gAyNJ82V6mnRhfYXEehTpRovW9jebvmyKwvXYyH2GjiHZr3WoK8",
  "key10": "2nP6gMwQrugSqET2MXajdvwpuZpEQAvZvgnhWadcQ797HwMUKz1o5Q2H68f5smsFTiLngomcpjDaiGf7qScL5eb9",
  "key11": "L7j74Y9sT8wxioSxQdXP6ss5keHbaow6PFbomSSt4xQg35NSuo9fdXSZZ9mbQX38js9e4yEpZRhx8nU85MfpNhF",
  "key12": "56uGN9p19gBqAVyJ8zAE94KZphwjBf73Ar7gEumB9r3QDKdSWB2irUmGkDnqG2DVmS8zVBb8RSZ8iWU522jbNZkG",
  "key13": "5n9F1y6ULBen2LooCzypNS3n5AUrrKnkoRHXZnzo5qaW8frwH7NXfe7dJUttiS9JynRc7gB8CbdihJ1tovDboKmL",
  "key14": "5reY5CNiDAqqXyKChqii869V7nb1yDiHqz9bnGCghYvC8T4zJTTMEY6K1GD7DGjh5xhWsSM8Hw7SU2kKUhCXJ1fa",
  "key15": "4pzRcwaSbsFNmBZ33dQC86Vj6DePSdNUSGqARkGdfyDMP26Z2WhEmBF1jR152KDTQPuawngx7LBGqg9aK8eqqGxV",
  "key16": "nB8waYUi9cSYWEkXez3afkMfdRqb4iWiPivJ4m3cM8yAoDx1VGTtaWcurqBsvFn1eTHBaq3XfKvFh2N1y8dDhbm",
  "key17": "2g3EJsLD8HdSMzoHfeEoS1D2xXRruJhS3t3opwdLVVHexBgVmDgcjJ87m2hwPnHC1x3rjj1KkuLvbmR8pfCx4LNL",
  "key18": "3s5qZF83wU5cHViN346M4YDfNYBQpGEESmy9CfWr9nLDR6jcGFtHZGKfTjiQMsuxKvbCHDHCZ9kggcv2AaGrDj8y",
  "key19": "3N8yQdzJ7BE2oMKz3uXhskeYUz99aiyuubSvahFrxLASbBeNRPcFnhtRFhvgmkKucYKMTuUefHhtD9AWemKT6jky",
  "key20": "3JuJnJaEkvb7mTrrPadKbyRAH2xRUQwATaXns6kVjnCyz793HtYuPLnzMLYjNKJv2vKB32RRKnkxZcrFewwqv5tu",
  "key21": "4wiMMZDCcQkipdCMBqBzwFFjDu3d8pDpqqg23kz1styhWBNBGoK7ypE9r4BJBZsdiWPobmDmXnPKxmeGqexPtsJY",
  "key22": "Fmdu1CAuseRJMhk7a4mAPUBqutLyqNxXz45RFW7FGaGh843MHEGgT15cZzRj7aPtuBSfxuaZQoa72m2vfQ7jLpE",
  "key23": "4CVCGnBQLHq97Mn55nqFG1hy18J7SJiUWz8D3fiSVJpj1eFpTrFRj2HR75XGaLvv3YkAgvb9oKiZCYhLV7w743o3",
  "key24": "4HdRBHydZox3UATGmbVKDtCKpb99xK46VY36JsmVbxq3oK9Vfzu4NsYPYNAZLd5uejNfab3v19XLy4A1eJ71hvhW",
  "key25": "5Bvyfva9EiCx5X4rhB3ZDpynL1nPaRQSDDBnwNEHeCkPX8T7jGashpkTpjwm7rS6eaPiGdSYGvVW56v9dyHRsnaR",
  "key26": "5XAfRm6b4KwwG4viHU4XeBho42XGKUtd9fYWdZz4tqKMUtpfVKhFZCEjsQDbZzq8fHiSq8apkFwPYPm6yFrE6QgL",
  "key27": "4qfZW9WydJxHSGYuqiG4pE93bhEgixKVWeYWQzCRm3afPgCJCepws6QjvRX4DFMcu4qcp2n41tmaafm7zJHUTvKs",
  "key28": "3asEfYJ3fnQfbxzvkWYH6KTboVHbSvRYHb5f12ZUip4dDNcAgZpxdSxdjmta7pvsm6MdUFbVPp1s2HX24oW2sEU7",
  "key29": "2bU51P8VDv51NEXY8AfEf1Lga7rKwTBRNnsdAf7m2qvEz2DCE6yYEN6aKZQmf9LnTVW6PCvbCN4rZBCvTGQDcDFy",
  "key30": "4zWa14ictY62cnQNF8GgHMuRNYBcm8naNYfUXaHMjnz45mM1pcLN19pXqvtwxoNUozXmRAbyiEu3ifB1UFP15eq8"
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

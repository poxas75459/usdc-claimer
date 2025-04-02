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
    "hF6QjoT8FkxMisoz33x8CNsFyvtYpR9sNY3sfn3hxyteaBoNpJ2NDYovyCuT6bCint55wNFpcaH1LkYfEWtxDMz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EZeKWabAFLuNFMMnoucQzbQHRyCK4yndGbYTrk981euyK6fAakr3vY2QDaiN4iSqLURovXrFmLrXWvxd3UWQ9nf",
  "key1": "4BFNvSFGSaKaPXH8fs2ktLDjWA5C3QxFdT18ofXrwEmS41tcdcjKBpZAnyGuPpwH48pKYJCGArUXvi3msqqeWy6E",
  "key2": "5rwKvgFT5jj1xkYViMKHS68aq7eobZcrZXV4PRWhbavGNouMKFKJN33baPP1sCKgea2Gmn1Y8cxeBdnrQWmXMwqi",
  "key3": "236vsintRV4DfokAnJ66VVBb8sU1BDrzsg4MqnSbWQ7Xftimpehib6j4DtEq8n6p4CSvjofAk6ZCteVfHF8KvWCx",
  "key4": "4LShPVu68Ppy9SApR46FTTcPSG7rLG6kTX14Dn1URMr6i5Vkhk9JpkhhYMSeGfYud3QFTcGBa5Vnbsn5ZzTfGuCz",
  "key5": "3uBVuYr2Eqt2bWgiXNcjeJ5dduoWJhWEM2BSNECnuwwfsku9xW5BpUw2hcMV9ocQmFJ7zCp9J5Dx3V5hH3GPUVPx",
  "key6": "41rgvhQce1QchjF9HHchyp57cKLxN7rHztHc5bNVyKNRtJkszycimp4vPG3ByN2DbopEqtjEbYSSo3tw9WD1N3wc",
  "key7": "5Uft3Y9HfnWkMwASRzqPsjmeg14ywvhvrKxBHPHKs2cz2Aj9dRn6qZJ1LvbyWKW9vajS7nRNtySG7ouAG1podum7",
  "key8": "3SCBbkAkcRXLYm3QuZbPwsMbekwSoFM77uD68oX3Z2q8iLyhYnbrKFJtgLfF52sQhLkFeGiFyr3rxd9hCPimHMWK",
  "key9": "3MuKotz4DZ3cp1Xw5srFNW3LEfgRyzojCTpLzuebpU1Le3sSRNyWEqfdyU2eMtWUAa8MkrnUxRynWU1bUfah1VRV",
  "key10": "3DCUEExpAkaPY16N5x7WYFiTNgw3EA4xZ9vu5gjud2LEW4UpYxiGJcPZtur182J7PCiLyyns2LJYLVgECzv7Fp8V",
  "key11": "56RSZQ4bMwntnjGtSJ1hfGzQp8WKDE3PNY5kbadeA5Mf57P3b9G7NxW9ScxHBzTQW2sMciJcGXzDopCP6mQYmjYj",
  "key12": "2FYzcNaBzQQNZRmJxqXjtLeGyVmXkhXtDqCUiz1nzeHjQyU2Pst26jWhXCeR6YjFFQto7TttYEcSJufuS5FXnXPL",
  "key13": "4xGief53EfgqzPTdrhFXtDpPzYmXMwiHzEyo7cksTPVbpkWA8eg5yWrS4r4dbZH1uGVbCbXa8J7J3TwtzsZJbe2m",
  "key14": "5tYb2n1UjFp812kQqZ3bn3xSKKm5XbjfuhY1xPruXfTff9ngcusgbPk9ykvVVRyNMzSMW6kYrEDohNNAAQHAfq6M",
  "key15": "3jTQ6EaV2ANauH9XYbjzMd6ngWEHEs8MaFsEVUFnmoZJe8wwuaqzkpNuyL5YdJzrsVPfME8VPcfVMS7rnRieo1yv",
  "key16": "7DTB2gyA22E8j4sJ4ngJTkdzu7s8PE3tyat1MxSjNErSpcJRTGvgmRMyFxdmWCffo37mpXmMGfTuzpG8E4xpLTk",
  "key17": "3NncCz56Zb2G9FeSg3gU4sQeZ5jUj7aUVytPVUswnij8QDidrocaErQ3FjWtFgMtoYMWuwbHjj9sTA4Ua217A221",
  "key18": "SaCyRcYQtTh3hGZStjcCkTUPPbXBYgggY2aKL2RY1C1ra8xPQZ7VFhHwrVQefSDZzkEwaGPGPqfFiH8NoYcJSJV",
  "key19": "VmJ2evvWMtVdwsoHbL9eytSHUY156P2mC4nKCJnsHDVuE5KDvWPkC1XcfWFpBLBJxvZUiKGz89fzJ9SY6HTmA9n",
  "key20": "2gE2CnksPk38PTADvD6Z7CHTW7HbAE17xykKrp5fT85mMtBom9J2jgfcuFfacr5sHCx646V6QrT9ZLofwu7xeWsj",
  "key21": "MwMuW2t3sPeBcKwQqEtFbb7k1nEJokUsL9R4ZdFn9S89UMQ5xFSabQjJsKawiza3J7ydNQoguj9ws7k3RQK6tiS",
  "key22": "2Rb85m9AAFSNztfey5DmDdPxZmvAftpAKbteFJof867Hxc2yComxrwxSGyeiG8nQpCRe5Cr8u8RjA8Tfz9ivNGwe",
  "key23": "4uWyAQ2px9L9iJRLFghRYvWwLwmuk652fQHniUWc8KPXz5fFmk2vevYefC1gGHZoYEVRTfzKUxKP6yXHuPEtx5AX",
  "key24": "61c1GsVXMhFwuRMgYhF3j3jdz9xPHBqk4UfxgcZuvCkm4gXBbz6GGV1xPB1Hqa8WpRVo1uWynL3i1PFZTNZjQ4px",
  "key25": "4sHMgeN11xSRwKSrVfLfeektKceStbvgu8BMhV3uiN6JFEVxCDEgkdeY1ygDiFBsswVDeEUbTZvprjYpbF9R1uJ1",
  "key26": "4dW5BQMLkKajBzUKd3nVQQUX5i34csMS9s9HMWh9guMZHWt7FZRX8nbxMiaWS36VDFqLdg8SNaGK9ZePCZE2iAGu",
  "key27": "4hzUZCSpFeuKuq7fvoMCLFv9KZfT96pGsbxY4AYemjoovtGAP1wu1BBHKeW8vSp7z6jikemgJr21HQmiy2JusUo7",
  "key28": "3hitwLoEgtJaPnukbEh4Bh6tv5GJffRVAuoy7iFjg35xnB655MNesg8cb5bsmyMmMviqEjVYDCiUV7oNr96qxnKG",
  "key29": "3umZStW6EtarVV7mLfvPcBcvjaCte4Z7G1CCHhwRX19wcYbjQm72xpfv14YtsffRHK9oKFXKjR2ZWrLeSrPaCkwg",
  "key30": "AHqXi7TVFojXK8FCjTc1x7esnsJ1vWLK7t53fYAzEf3mS235XYHTzUrRSN9Cai7LrmcSkNjUcYA6yXE6dnyzumb",
  "key31": "44G6ykCbZDXB5ZCSzCn5sJp8sSEySp224J38daLEGdiByCzRe2CAEVdTdKSxSWMk8Lsy5n64m7EbMzbCvuX17Re7",
  "key32": "g1LRnrEsLKxaLZ4WDsmrjwho5kbwJW3CsNbaXdJUNDPGHSgh7WuumvTjgfL1e21xeYegYEh8hy7tKhQaRc8X3X5"
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

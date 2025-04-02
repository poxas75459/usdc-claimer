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
    "4S2J1ZQ3iHyfchnwwVK1nQJTtLeSse1uNBeVdxrdk65EuvWeGGcFoDNCSFVzKWwMcWZQCbEzAXnjU66ur2mLmVEo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dBzxW1XRhNmKJdHvqpSqYonBbcu8qUZgTBU6WhkxHzcjkcmTc5d6MMKNe2Aw3MWig5EABUqr2UWv9aKVomFovAV",
  "key1": "5V22YXpRqV7WEF7sSAagRCkMkbWmXXmCfqqcaPoGGPKcd8CQ4gj7N4Gda4SiN5wPrpSGZFykDiUaeYJqF2Vmxnxq",
  "key2": "2ZN3KmQWvWnEYVTKftMQnPMkYuiXNqy47mEFpeeCJ2juKKVU1QN6yLmDAmxQwViM6C5PR9Z7CxZtkboQ5xz3A5Ah",
  "key3": "475eRr9S47BAfTLNcPWj9YvrU8mc7J5sqF3yMhb6kjKvo41sV1chn9Htsic7w5RYSc881S7qzFSLLCnJ5ih4ryfa",
  "key4": "33RrPdReE2BgWkrPkBezy7im9uSV8adXbdfxUWSDUMKbDpLYbk2mHyVZFgPQ712zodYwfUR55vJPJQQ6tUbBajMw",
  "key5": "3Y8YKQ4osL7QJq4p54RBjFWTEeauNxbRQCmdVjQzkT4fkvEgbcVwnAZpreuqaBYd2DeT3i6CvaZinWkngvy7C4yB",
  "key6": "2u5utFigYBowv1pjm97XwnoHPtr5MWUZp1SvDVN5JNATDnpJ3sq9sxr5rZ7k1F6PkQGqmYrDMCd7ZKAPTYAUJirH",
  "key7": "XGKwEDkJmw2LPQXodALnsQbSbwTQVYJc7TSjWtysMndGMeYNm6fAp2quZMfvmdRfMXEkH79b3t5z77sW2p9BR8g",
  "key8": "2CDUQo6jb7ga9vxXqrsasn6jgY6fiSP6sdMZg9VrC3wR74kRvddsh5RhwgSekSgmp4gwbLmPvmT9UpMtDH64VZtS",
  "key9": "2WAtvjXPqwMiYJvzGW9cESLdRMvb9it4r61iM7LBxDsX3FwLyYvGRn1A9BC6SxLHBWuSpXQAuzD9YrdigWvCRNbj",
  "key10": "4jpXBELDofnUUyQLBNBrgitw6rYNcLAKigVm14RYR2cK14YT1aqgAQh6uZ2KEQvNduJVdQn5qFLJvnBYFGf3oMyi",
  "key11": "3Pdn8G4Lowf7vLfwxYpwMtchpm1qcFgotTVf9Y6RSkt2WWCVJTRGA3pS8xC3c5QRpqvpH9iTfQczqTRFJjRAJABU",
  "key12": "2TnjjReJu9SuChatU3ih32x1E11A4QnKaWUfMcnhrs6QUjU9XFCaN41TtPLpYXAr3VG2wEZbR7wgASVc7VSi2N2K",
  "key13": "3BoXtaV6XDXrVkLT8CWVgstDX6HR96cQvAvBfqyHYXY51eCwuzrTmt6fKtHMapmZuS3qM2Afd86W6UPwFEpXUFWn",
  "key14": "5hDJL2ypv3JrYF86A4rUPSzxcPGyXfH1YroK7owccayo6X3yBeWQiXup7UfMyC8BDCyb8XW48b8EMS7q9WmxkMW1",
  "key15": "42ZfQkJcefiTNdFu9uMZv14ZH8rqXzM5ze72voDzY79dmrnEzMQxkErQg4f3Pno5jVt6pn3wHFNRf5FaKxd3ZFTH",
  "key16": "55fREmprm3pMKC7Ve8dw7pKzAjzT8yUMyTCh2gLrcDwru5LVyYggwQgzHm1zRM42DVtsx7SwQdnA7F2vrBSrL3Yu",
  "key17": "4Y3exRHyxq7yM1UX6Wm37zhwUrCyoDAJLdiNKiL9gRJNbFmnGnDwGFDkcgwrTijJfsKKa3ZVNFZEPjqsuGiGaPQK",
  "key18": "5erQ1xHCycKquSUX2ZUt7vPAKXbbDJ1RwhiY5Af4eMbE5manRUnVRvGsc9wQnToTcPDt4DWu9v7VCZQen3nsPboN",
  "key19": "3qxe1DBC7abrLUNATZMqe27NgUDKHo4UBcE1kaTB5cNMGDSoxVHe1jiqAu4DVac19Tk5fxZ1KzbQFbMfdYmwfyyx",
  "key20": "3AdgoZ2MJAc8pVve4HnYKNuUUmhDeUsQ2CTi3VRwy5hLkbr3D4S49PwedrsoTZr9puMYoc46gkZ9sRz3HoH6xt24",
  "key21": "3PFCgbxyEfDaNY67dYAZSZRsakXLBepuSvsZ1YPU7yzoZ4GWWMQnGm1PmvFY2Yd8ZKQTiLHpPpa28UjyvHUU9i4e",
  "key22": "5Lnfc4YzeMDZ8C5QrxWTvaPat34HA38C5hMFuqK3vzb6CfZ4YvBotrVKVMsjn2FvsVCojwhWwNWh1AXLbciwMBFS",
  "key23": "5xtAgeZmRctAC9tM2Aj24YtyQnC3oPWsXapKEuNRDFVk4114ywPPYW7KiRniu2hiaDRePFJpBDndyB9SynmbF17a",
  "key24": "2xngRBLUFtB88Wckqvv2Tbh9YohWH9RGAjZu8AtBEazGqPQz8nxQot2hTLaHpEDh6ucH6RfU7a13TM848Y8oYXvu",
  "key25": "4nrCayvRLtzxnT4iVhVsawDi2rUtiUx3Q8BJQeK8ybBC5qq2oCZpTohSgXPa7HshBTxjKZu2CHXvSRVe5BkhyKb8",
  "key26": "DKokHj9dLVDEQCu2FWmpj52DAhdfVUNidUhtt6LuYrLpxbhd35zjbZWVjbq2DVG7nrpbufkbPkSLYaokJz7UVzM",
  "key27": "3ayk4oed4soMo1p9iMVSA5rnAGD33m3ANAFTth3kjT4XUfwjic6TkefrZJfkK3SzK7YfW4GKwNmS1xt5TF7zmuuf",
  "key28": "5WMH94ss6iu9Cdm6LcnnxPu6dZfwQW4Vi1PfohtFFmHYM6DnxKMToY7Y7M3JgX1zE2zapjCjuMRn5hbcdup2tviz",
  "key29": "EU3NChA6cguMsGtMhy1hiKhyrnwD9rDCrRLyvBzF4vPEEV4ZoqNvEVu71DrDj6th2jvE9cLWkGsKWQzGmK8FubL",
  "key30": "5ywTS4qJRXDekGrKVSX3dBgAj8w12aidTUo3VEopxNJVZTwiKBw9uxvvJuohvFDCxQatSgGm6a4gBaRJ8BtWjFbC",
  "key31": "tAJLD92FJ1rgxgT6iLY4savYHn1fBnaoVHYCG9rcjuCguJGQ7v5SKFHTBUcuUcVxMHHm3spWbGSZuMzLBKzMKVK",
  "key32": "38C6p1q3BsywW9njcjxnRRfWWDPdzmrYioTRnpURHr8PgkfEKWsjAwqwQWoQwdVe3hxfPERo1Tejsd8X8Cu1cHnh",
  "key33": "4WAQzEVpz1FkYba7CMuvdYCViug1WFNsQMPz1dWdMJg6NwhrET8v7xidEtMwT4NdY15JkHoN6cHofLtSxXxm22q1",
  "key34": "3Uza8ZQrqxk49yKvHfkpY5Jgik9dZAgpU59oXEtM121egozqH7sHwUUwCvK3iFSu1LezroUUgdPGvLN18awTVvMe",
  "key35": "3bEr9QgPdhh9mpvUsNQTeYgD97EW52eKvhuaWzMknFYGmnmvEycSvAzZ9udoNekfmKbEu8tU64egNvLZAbcNP2S7",
  "key36": "3LYwp6bH62KnD3M89DDzNAVQKmWtC4i6gTsHLWgeKr6uJjaqeRCiPKQX5PKjiSwo587C4obehV6RPtLyFD7tVRY",
  "key37": "5NgzUM21KxSzx4jGKfnGHBQKBCx6vbh2TSg2RwjU2Gv8pSxTyxvjqsNgppvXax5hTFxqGc938fbEVG4iFi1uQfdW",
  "key38": "4NnAgfE9zxmQeLq18BWfS63gC2Cetcu2KYoF9xqU8cBDBRkPsH3gGAEXnRy9hVggjaDd2TG3SVr6wBzLUrQ7p6zp",
  "key39": "5nTNg4PBKEvfKKdEpTMMTQHz1wSeRir2vCTKt75Zw5xMDy3pzRhhDWPSAbAEvCNt1hQhnSDpmC9QoDED7XHuqJQs",
  "key40": "DnoxNN8Fuc1wb3aMmFubFjyGsC52TujmXY3iz4AjbiuBwsaLwo7bwewTYfE5Ah6nZS5v2gaqhgq4352H9AcpDAx"
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

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
    "3mN7MStRNJSAXSLtVLEv6i4E4YDioFMxa8XrTEvNa3RKH4uE7YRtjAFkYttB8ZHT6JydwKP5fSvoLE2HPWY8JSgX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34vp8PCDrQ58F1jpSCobrpyUi2cpuTC12hREKxBsmRAXygqzmWXJTeb9RimfYpWJF7uWSWFamesX8KK4pyz59pV4",
  "key1": "T8aTG73Wr45TKDC9344bjsEu916Skenh77dLeZXi3JpqLyPRmntYxUXkKGndY6STwqnMhNFbmWHf17CwmmE9nnk",
  "key2": "5mLhSnQVF5yZ7XqHk5dpNwgAm49E9vo35vtrzN8JBbesRr1m1SJs9ZvZ1q1mLBSg3pVFhmjijv2ZHbLjZymBV8eh",
  "key3": "64ytY6RZa75FkMMu3ED3UZ5kmmiAPjFXQUkCWn5BDDNdryNEtLLXAvkEuxThYc1kXohnFPcz777sWcZYEyscCAkT",
  "key4": "4QUJKPi5PRwjA6Lva7b1iPPirWBk97XET91SyRaLx7oGFcgxF56pPjZ2CJTvLG6kU25snmd4Xsi9YrziKXfazpir",
  "key5": "3GECVWs2RJoEo6gk9qonoHqsm3NWC2j74cPrmVtCLwfCZTz5dUeG3hUrYdXHgVTMWJuCYAVi3E7B9PpxHBmKHoUo",
  "key6": "46Bgi365oXPLepL5MyNHHSik67iTUhmXWdJ2CZT44FQhH5JrzLuYTVgbtBZbK19JumjQHUxgEYQjrJfs6RjAMt32",
  "key7": "3TMmqzzkqQbEc6xDWTmY74nPq6vjGcRgYjtU9DeT44WFdPkRokNBoi4is8RcB3xmRuRHpcqPnT97sAbPCw9s3gtP",
  "key8": "5EyyMw8LFeZeVsSo49pVcpZ642DnbVJzDVkoEbg7ntkyQuKtS4QmtSgtvikziaLftUL6g9AHTaynfSWXDYJccrJA",
  "key9": "5z6mPKCL4smEPnx5v1AdDwRqwaU9gL1MtBxGSiLPJ9mBiknK8s5JUGFSjSGXxHjBUrDjEghtFVjkeDUhAZFvrMUH",
  "key10": "66N2gwaoQjcSLEMhQSxhin88w6Ffwn7YLhLQ49UToDmotY4XgKmuZNgLwXY9EMHa7abyKWcxHM5emGrnSo6apw3q",
  "key11": "638zVZjapLJHzjq1dWBYG9RSUv1eGBTaPuvWPxoksFi8veXnzsfD9JQoFfnpUZS6hHuT6EF4L3RLuu2HX9PSqu75",
  "key12": "4KUAFf6G4oehY8sH8eu8KZy1PknPbDqGfx5B8fpTFFPYiPV6Mbz9wF1QeR9N7C45d7C6yCW6WF5kUpaRYzhkyNw9",
  "key13": "3HX7UUFeAdwv923sLK6dQ7EJgDCD2DtSnCL5jB5LHejVfs2TBBzUeVdxK3g4hYN8BWxnBB6eugXxXWruqCg61gt1",
  "key14": "2zk74pms1SfkCqiziqfunkyDQ6rFev7jpK5FUB7ahRixFFbzcBLSXptXBTNyFTSNfbjnums349aUZhtnHhX4BoLW",
  "key15": "4p5NECdSzc14xCLc1rmQZs32gkdSocvAktRstTbL6VycjJ4WhpjdwmjuUYayTFy4xWbGx7M2UFGYLmTTeLsM3LR6",
  "key16": "2Myiteeh6NSxM2RPgHmjcf2gDt31uDCDcqUfs95ejkdyKupMC2KzyaX7W9k8o3P8idj2eDSTfL1ABGF49wAeQbnc",
  "key17": "3FxqXGYGaxSWfeeynBNWmAeujxHsiZkTakRxUcWTNpvus91NZSVcVJkK7FCKRCjaQcoSpz3d3BZPU4db4nVMysXi",
  "key18": "3c31nerC4cWdRMXRoknPa4Sm1PtrncQurVMu98zz52j35R6hvPkr9Fh3a21VRxq26gq5uWEEMJma6KJEBfg4TsPj",
  "key19": "4WH4XvRWtEafHASjWaywnKEtZc52jUBENNtdmKoWTuRY8FbJNcah9T6seGBt33vmkeV7zV2myFQrwxGbJ4NhU1W",
  "key20": "zMfJ36imuaKTNDeZR5BQHzo7L3VNMZyqEupN9pSLtyCeJFiCe7nPp77EU26TqRGSMJzVFp74xmhm1y94v7G4Kbg",
  "key21": "5Xgr9QebCQj3bZFkBoAqWAnA9MdPheySLT1HNVFGkBSmykj2ykKArKj7jFAuzeatJ3TVUptZyPuzHeqP9NFEYiEG",
  "key22": "5fdt9tWh2Q8p96UeurnRGefVZQprZo1DXmGR3NxKVmFNNkMyBt9aehNeCvk56978RBP9tTjUyDXv3ZevuQaoEgpA",
  "key23": "2MrSahe2eCm8heRhP7Xz7thcRYqdhvSMRiKbUpds7UCYCBauWnuDgRCeGWeddkNu8geufdHfmGMZv5RT7Wo9wufu",
  "key24": "2qLvkHbzKQPi1rVGg1VQk1zjKvC78fmmnEFxWY13Cg5WYiRP7NKsXEof7uy3ajYTJBq2oNVrg774qTupNrhtxVM8",
  "key25": "3gmW5qzM2D47y4AcqRwRaZuwEqFvvsWsEmxUUsab1SzD7Ms2KcDnGmU3MqBECcggaXCa9kmKMxbq8agNeXJ4CEUK",
  "key26": "32mFGZW9MKfggdV7NgwBX7fB9Qjydmo5TU3ft2TH5SkVYTkHFKH9jwHxWzmtbMQjmaXNA7Z3dTmrSUgoGoxQaEdA",
  "key27": "2gmovoH4De1ADEzXzCoiL8RGX3cPDYem8H7ZvE4DirUZcLW2dpj16FbHjd1UdmCodTcErcicv3DxLVBMrTp847yH"
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

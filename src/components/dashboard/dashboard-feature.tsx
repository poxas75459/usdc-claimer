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
    "3LJ2kVud463YR7vQtCLBsafFxdBGmNtyoGeQfyyysC2qKu7rr9XX24TqVfFa4UM4nygZdhc28LA9AFzHdtJFb9kV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6KFd9fEHhPnfFhgLetDTGdyfvzKtR7eggMzoe927pXA5fp867ToDGWSbYPkWacqQJY83k593G13VVFKjNPKQduQ",
  "key1": "4y7ciGbZsRtLMva4vwLC7PGJomUz1pgA65ddyfMmKRyZ35AE7jL2agknTLo2FaKU3srjd5v7AFsCtbvDo8ZikxFC",
  "key2": "5uiBJrXxykH76FdTdsPTi28Z3Y9W7Dqc221EC9njaaj3GXxnwV36rAqHJaNFWRFgixssQtDoBYxgM4xzsY4XyAuH",
  "key3": "3vhpLHG8GFFQ21tdTwH9sgzWrtXuwQwtRNLi4vPAabVpFCdKk9fsey3GngmEDV3USiAfHkzGq98sCtsY9pjvzkfm",
  "key4": "2LjSdxXVWvP6jmCeE3sYkTi8EcvxQhzmUiW99s1WeFCm1k8oSiC6PmxEcPGbvwfqZYuP6NVMiSobcnBQPPhmzGvw",
  "key5": "5NMqgesFTwmmGuC3H26osCbV6tzUBAiyK2drjQM4PkpHGBiQgkokhPVxnYAu8GBNkcV3ghPr8sGjmkdiWdLoc7nC",
  "key6": "4Xsij6fPYKzSuqoqDw29GLZSPPugfuKk413PhvLbFxREgqfm1CfsKCjeAWE4o1ARMef3K8NBHZDgUrP31237uwMn",
  "key7": "xgC5sorSL2cmWyZXd6m9MsfRFz2wUnNgKesB3TYYCwcJskrXwqViJQsWUneL4nxmarAA8QaAWuX7PjWfH6ehY4v",
  "key8": "gA89gDZiHAiauTJaZ75dBfhkjajRVzAjEKRFt7AgV2cHCCqpgaAbikeAGC2NaJLr9AyTruSawFiAR8KxRD2ipuP",
  "key9": "dCmX4ZpN8wLqZ5Mg511pYyYRs365SAseFVsujSUGNyVUCYrSapaxcYqQSoTRXVajU1CisH6uJf5hWukFrWpmVmv",
  "key10": "58xFEkBCC6Vs9pmaVs9qpTnT2wqY8n2ZiSrvxA9HQuXiqpbEE6rz1MoMRBDRGHPs3qYkCz4v87kS5djPWABqKhPb",
  "key11": "4qyj2oe95ViPXtN98GtAUHACo6XN3Bto9deDfWvxzpXtwDMaPWvs4qdCW8yjZmHJRAUnBeyzsU1fZBsn2ZZAcLZV",
  "key12": "3KqRGgd2cvkVLYwJFRVscTrWDz22gTqLMdW7mbe3mX7bhzj5QvhW6Fuq9VbaNRn9eeqX1Wy3GRw5vHtCda6NMiU8",
  "key13": "FfioZZHKnJKohXCSUBQbvyTSx82xSZVtnfvT9qozh2QJqAmg24z6kjhtdNeYB6S2RjLMWr7g1wbGTCyNkhk3kio",
  "key14": "2hGyJSB5zR4twNjackeuWchU1ehULVT34uTsNuSKkGaqPDjx94DbMhbejTPx9TfMsAQGLVVUQzNW3NxMgn3tH9QS",
  "key15": "4sWUULtaBFFh2KBG38XSNfDBsYZkaL6jPubCqSjLn8ScBJ3HBRznUUBBmjYonWmnXud7PuXhhgXUANT1wt9UMDen",
  "key16": "644qvGCwZRQuuPmgv368ZrkBiGbSKbYK8Vbn8eM75JPNvbC6PoUt7ztUaXhD9MVu2RziVYaNfPLVDxaKiKh46PFv",
  "key17": "2SD19DP75t7ZepRn9vqZAskjrK9yvFHtWyizmk1BNGdKV5nJdWnMgx83VmtpJMdFFAmunGt94CAaaNSom3iEWVmG",
  "key18": "2nFarKFQMyPe5BJC4g5BLBwi9egJfGeP16dwvcYuUyDmsKrnbY8AWBjfZHvDyMpdXqPKGQ2Q1wbQGj75FTLXxrRr",
  "key19": "3rtWiVJSkgVtWpiJsaYfQmckzm9mUxdMPQvYoDc6KGdmpRLp88aNFzMeuFQhs52gkVV5QygtfFfrFn7gk5nX3Fqj",
  "key20": "5tTFwGQPBRxBH8Qyf5kHaPc4iJeFycWxg5EZv8RWg696ppocLHvts4DH1tZp7GAdmzvidziFqUjC17We3x1qwakh",
  "key21": "4BVNJQ7bMevk2SVehtbBy4f6A9Jox19CyMLJuUuxu6ZFkKW9f19yQ3s8dHD5K33S9XrGUiiL9hbRsCZpSyUUH5rj",
  "key22": "27Sus6EvksinuhAhLNNR4vRKsr1LUUU7QGDFpS4gUHQ3hERXmLjiwtcxGjdeLVxJcrwwiPNNf8RNP7ziYNDyygs2",
  "key23": "DaH5J6wMTEbvfxiSpMfYXL3UTgX368HQQcofFETEJCeZAQmqWYdaGYA9VwqyEvXDC2coV8qEFyzEtvpQTabbYTj",
  "key24": "2EyyZ47e8pwSLKvqweVgxzQDGSBNqrB3KszE3H7cQgNVZM1dbaNfKfaKAgbZpKjQSp6gyqmW9JeUfitg8b7xsytf",
  "key25": "3NQd3kwZcKypKyJ5384HuRfPjvXgb1tkBv3pFFeyufdwAutGC3HwWeCDwGze92J773ypjBXvpcgYJquZ79gkUeRs",
  "key26": "5MhDCiKwA3Mgd5ptdc5Hmbh2ioWJ8s7pwpECCu9wAS2DXoH21iY9rPPhQhRfUABN42sDcsQ2Qsj1onCdQ2AvDYfK",
  "key27": "5ANsm3rTZbpJo11mLwTS9a2D7e71spy8WoL8minUCjHQG4yHcsLnm6TMpNu2UZKq8BVm3mgciMC9Rc5sFAH8Bc5D",
  "key28": "bs7c2aRnEPyzRSAgdP7GVdYj9wbXugjCaW6bZSwNFXSKMYXBFVKrnMjUyetZXmzZRMjR4FEPx7SysDHbAkgRp5i"
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

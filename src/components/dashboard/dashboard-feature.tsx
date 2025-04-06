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
    "jXrEiTHDns3Yx6kLohMG3NdPJLm4g7Wvfbaz7iixw3uY8LTNoxdC6vM2m1Jmjp2FXPqzUDUx5BvCXksi9wBUjxf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CNpsXXhaT2zWT6gwMyert5u9YMqXiUGL4hxhkyAeecMQXcQC24J8zHU1rF84JK5BLJ4mNdM6kKFq9bqeWx5m1xJ",
  "key1": "4ojHgjpEQHCsRkUftjQCcXEbi31HseDCoEU4KekdWeqrx6J8Ht2RERxLmMsY8ZrYaWeLYoCErxkRoSa7UhgQDYKU",
  "key2": "2uUgbYX1aZp2WkRUvYotoAton7KMW9y6GFMi56omdYq6PVjZeA85UExmBoRSvqDmtoTLLWESt4K5YuupkfHdeukm",
  "key3": "JoAswy8TZJscCQpUjsG5Tymn5CV9A7LeEEjrBqQkRcUo2dqs8a19DfUC8Jkm5m3VHkVFMaQLc1XweGufQfm7Bsb",
  "key4": "39DwzcJhon7AspFvxKwh2EpPBVj7Fbn6iPRqoTGvZX479p79htCnrqswZpnSXfGHMUeWHVvBjTuCYuuaTfrzDuAD",
  "key5": "5MzhTUAs4qHfmv3Qik3nTrbbewjGEQQ4o7S29whJ7nvoVGFEGYpAUtCbJSq4jaE5YXVtZPoAU4PxqwCTkExwpNSe",
  "key6": "3fHvrBKwj4XeMTnKkPSnxo4ecnD2kjedEJEm6UoJaagDJBuay2LAXncDuk2VPsSW4PRwYq4BD92eb8o2JrK5xrsu",
  "key7": "4CFnTtsFRWv44wNjbZxxbXy31hvDCPR1tMLL4Z78EUjMXvpn3a3Mi32AiEwZLLD8DrzTUYNgMV3gSczpKEFR5LA3",
  "key8": "2XzhcBbKWim6HmzhvTBmfHqCFgidWdzMXCTJt5DPFPVAwd7ACKcVUquZdmXLEnfe5CSf42zdzHrFgBZkcu3EYGqs",
  "key9": "4jkCYeuKCzusCAnPeQnFWSjYkx7i8hnNLFAzgTwJNqDEMiveS4LJ8F7TZnUXzVeBStS8m2StY7wKBdezrMnfUvgb",
  "key10": "3fbXMmmmGckBKsXEmgrFPPGPPPVyxfG3p4baj1u7GEfkdRaTxehrNhnULwJUmkqVbaUiV2gQJmR6yMq1Ag1JS2tv",
  "key11": "58WVKboGAKDJSGeaRnboDaB9wbaCyrCPrThygneJKweTh9pgMUBoxruxLkk1DDuoYk9FhcjJ9ec6yFsN8P46sRt2",
  "key12": "2QjEpsFwfoYks7xrFurBU6TaWxpnVyPcH76iSxZwypUhCFUqSVt7uFM6UEGK2of9EQRcUVJpqvziBvwyBU3e4Bs4",
  "key13": "4ov4mPBR4dDir65xL96koxjZZnZLWJ8DqX6iRSsar44PWpdxCDpUMg6o4if4y59F3aa8FtWgN3KWd7mEDrkd3ve7",
  "key14": "2Jy23RdUMKif5dQ6HZfT7F4WwugCx4jukGiwc2eWhNH39mztutK2NUCEXruLPrH1fTU7zyD53ezmcwJNhvwCLnf5",
  "key15": "54zqmFDNEj5qjdJLzbFxLQF5CMrVei1PADeCHWhGKz63844aemGWXSNEpKsiSeHHfEnCCnJxhjL8rdECF4K5MojG",
  "key16": "5mF4cwYqJNLgtritaGUTnvoCcqixb7ReNPpvFECHgwBvKv4SPXy5Wu5EMQUny53rKca7UzqvjbxRfBz575czGn3R",
  "key17": "4zDT7zgDDHzgJApU9PJixK1ZzdeMusQrvTokuDZ457jwWLmEkbeom7Xg1AGW61E1TehQTkQq2ksNJDka2WXtHcfE",
  "key18": "oYFBrSyvyaBeVQAoX8sC4BK6YCWUnd5WqTbNR2Vmp63LmXEefXs7niv37ycfodLZEwcTS4yiGACHbMPAwMt9PJA",
  "key19": "2WEWrpfgwp7QDKTiVF48jyhr13SgacsXkU87MJaSkzMCYkyH7B9drtr4TaPz8K3xR3uWqhpkRCewnbb47LARYAdX",
  "key20": "tkYYh8MFhk6i4R3VmxJogxJvobkm9jKHQLsSYS1nMdvs37CC7doMuxnnYbH1PjiwijmzfMUC84QJwiQrgn5Vvty",
  "key21": "2cBqMixA8ud2eZmCqLYXWT2MRNmbQQJ853dFhNv2MirrrHfFq1DspeJfrsJmL2NoHDYByDdJEZTqAsafJyRZS5ZM",
  "key22": "2KLaCHzRw1LENZw2VZHgt5cx8cuumYF799cqU8eg7Ec12v69PHKSAsxcSWatMdxY4adJbmhbJpH9KVKt5ePQ5z4A",
  "key23": "65QfummxfZ9MXwAubkuyn6AYcDCZkk7wMmgbbHHWcLxPyqDyDFWsK2wNaS3tfWgJkPDCetPSF12ZNNrCfh5qPeEW",
  "key24": "2r4TATpoEQqJpBNvTmtbJDBpkcaVtxrX78oNYxcHaHJqeevEnJ8tGTineqg1oL5KLLsMNC1QCMZFjxfxHzASD3rC"
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

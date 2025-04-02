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
    "25jHxqursD1hqrNgJTTCFQTBYaXekKfVwAWF8Uof8JzvnJdeL8JG95jR1iKjqW2vTXtc3qe4GmritSJh6pFoYYUw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qMUPDw3KrRM4BZpWvvxFxKW4Jv2vfKAMyqY6PD3h3e9N75gUmEwcFPtSeydb5oaPWdTVhow2uu2P5KUvDNHvcyo",
  "key1": "5q7TqJrqBomifc5to39GkTDddevXV3WnwYjPVcnoj9J1uXGHAjRmb9ohtB4YLMPVehVm3CfDctChRpXi2nqA8mVi",
  "key2": "2VokkCsv8bmo4wMNqpdqL5aeb3Cvjz5xPykPHZo1iCh8mamFtoWS687Tp5zs2GpsRSiuWBbZypsGEdRn441KSJJ",
  "key3": "2Wzu9oQNtgjvovryUV2k1vHDz2zTFPhQcBAtAmYWpptSEG2mvmSQCSoW8YExv3npzRFyoLZb1LnuKqZvzFokZFXA",
  "key4": "2hskxMPe5eV98xjfif6PJP2P12KhczjHCgVAcxscSzMR5P8fFvCsit4QkPVE4vqHD9EipXPbN6t4DLDPgMb4CRVA",
  "key5": "4PeYvC2o9g2coySUMkpHL7qAUX9mZ6wVtrxUju7bXrPX83CKBWkxeDRE7Z5UcprQvWaenCCkgkAG1dgZoxwUV293",
  "key6": "3GECMRhLEK34H8iiq9DGzeCtMm7MZouyExYXRqbv7f4VDvNiX7xffcx9HAo3WRmxJCYVQ2TkoEDmPrAFwBi5BV8a",
  "key7": "3YTzLaTw1D37hTxf1wctYuvUk1V7tmBqHeKns3erp2iyNnMtumetThrxJ4akWZzGNzLXBvAcmFUA8M19EEpXcst3",
  "key8": "5e8h8Mg4s4cwhc1oSE2RqD4Cug9NeMQZq5NFAJUK3W4XD6Qz1hi7HjLns5At3erfkEAaiJEvh2PStdoNi5L5FLsR",
  "key9": "5z1xntn3x3QaMLutSTuL9YmjJHTakdWhW9bqj3Pd8YRTDbQTvDFSEhNfcQcRSbfW7u7woGoD5sReQkdi3G6GRW6R",
  "key10": "KHjScHhmELQA4AM5Xgr4z3LBpHjx5BUPyakXiDfn1fLVwS4WMyRrWr2JhuMmGH6TYWfFkEQ4MqFRge2QabX24NH",
  "key11": "3DQkRpX41b3qKzfVvHF6ur26RXNh6G6i8zsU7gJe6jaJ2d8pYrd4mi5JUnAoEGRtBSuqaLVL1BUvRWd5ugAwsnYp",
  "key12": "5NBoHxHH9CgBp1y5rS4pGqfJxHfXPD2PdbfEcw9LqbsfVEaffLndDeo7V2x6iaQUnxrbobsMDGQx9YviqkCFS4ZF",
  "key13": "3KzECqZifm2v7aw3ceg7X15CgPyECE9qN9KRZjmNE6cQSufhQd8fRHJgDoTsuAUvbb6MciNHZX6q1FSGDvgAv8mN",
  "key14": "HXPgfCnwSpX3ixFbgvnoSYFwQoqBhXZtjrmwedWARjLwVdVYE6WdXzU9nTtG6AUVXACuA7qbi3Xe8kZx6EYpEoc",
  "key15": "sY2vBSV4uaCDYkK69W4Kkj4qTNYqDRoNdEpggSJmQCenN34PhNqQRm2s2XkgsLe8PWGEX7rAd9cMSB9aMzezYbJ",
  "key16": "2Ui9kd18zmmFqqocnE3q9VKSeiuCzQoRuXj5BfbbGfHJUMN6sxHanNEMit2ZbCkZQVTJXnTj8ZqhSXpfTrWUvTQ7",
  "key17": "CtQsnND1Bbd3Ra1VdqnbaS3GbP62R25irUCtpgN3FmFcUPS4azimtNDPLurXcCeVuMJac3t8Q49nT1Ns8z33x5s",
  "key18": "9irnxsreKCN5A2rJUo547nexcfSZFudr3hK6vv3ttZnghkyVNmdN1bTXm6UVbkkhbobMCbmYm1JZRRTFZMgxBLw",
  "key19": "3sH2hK8M3AAYWPiux2DMQt8ngiN9DFUUtc4GTe9uFRZaFtP4ajscowFwGysxq6FAD2s3cu8egqL2rxP9cjtDMV4q",
  "key20": "41xMaGqRV5z3VoRUQndGgdFib152tK4oTScR7dFMr5XFpLJW2eHdAB9ktfKw9uHLnS3bLu1u4Arx1DtvJTC6UnaL",
  "key21": "29FipwWinjs4cfY1nTV6Raj7RjxQxqqfj81EjH4Nde7T4SLUoQY149KAeGs9HLNjRrnpoECw4Mgzjk2tHyKFaFvk",
  "key22": "sUWse6Z1HiTTPntsKoTKC3RBHnCMokF1t6NS7qURX3EyA4AP9PXZ9B6t7J5zMSMyvNtB3p5hcvDpt64WuhKNdYH",
  "key23": "2yQWGRNWxm6npuiXzaHe4ZVpY49WTszB5qjQLBn521P6tUyVkuQbXAFGBwP2R3gTieLBJorAJh5S2HHVtfg4YiQd",
  "key24": "4nhfBP4e2D7xSs3jbDdGpBYVBy5YejY86j38yJtvXrf9J1FjKdt2a7DEhWg2XAMq1Q7UuCsE4qgTzFkycxVkk7pT",
  "key25": "5Zatq4WAeoFakRVPmsz5F99qPvV4VRZPLbSwYCHU8fp4gaVZvwLwGyEbctMkbRqVgWfQ8nau5aKSXRoyZsSz1r9D",
  "key26": "4HM2JQTjfaPot4qFgfj9ZhiArdceeFTy9n1bHqvxJJv7s3KunfQvC9R2WufdKTXYySTmFL2GqtwWXBNreRLkmoaP",
  "key27": "q6bK3mSAjFYcv6Wap83Ku3siavABwRYzVUo1GehhQypXhpn364ewxHTsb5sNsVL4XAjoDBqd4kdF1DK2YotCNUe",
  "key28": "268nXF9JEupXXNz26VfZ8DndRaXbexsphho8PJLRyfoM2Bqi31pL2BFdc9p6WxD1KXnqhKuPwJhmNBtDN33wfVuk",
  "key29": "4VYWCU671k7pEL4np5NPFFwbLnZLYSUYPbrYrrbQkkCe98GBdXarGoDMJVV3kNXspk6suZEeZcJ1GUi4NciMiQ6Y",
  "key30": "3qE4kHQgVNhLmeGNbGQeqxgBR1UMnp53y1ciWxSxdd1kL4XJ1xzhTb9CN1QJrAc22jyWLnQh33DB2dH59Jzpz41v",
  "key31": "4yNkmCdaneC2x6Na86jjgq83kVqFdn954tcXMVcRnh68GA1q1GTqDaSrzZ4k3P6sYSEDtTnpZKYeJNA1XB3UVTXc",
  "key32": "4nznKNtEH6nzNeQGKXHMych4wQXYukmSspZhUhyYKFYe9Nyk4FPGVHTEezwmK7haX9kSbpirnJntMBj1WgonzL3p",
  "key33": "4MULyT1YC1HwuZttBnw4eDS26mG9JgE5kheEnnCiz1keP1nqqLhLHsB35UxnazD7T1bEZ71ke2cd7nVg4jrQyYuV",
  "key34": "5wanAD4eDsQLg3z4bwoBTTetvr6mdk87HuE4ADbSqxRM6wE8YUY2Z2wuSkwrNhtePM3nhJr1XYAab4sSmSLQM8xL"
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

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
    "SrepSrSWMLHNu4mgGn4y4QPRVrtCebsa51VY3LrwoNCHrxgr9RAGA4rxTC87FDTf7KN12HJLFriyoVMLJB4bbkm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gaTPuAPfzsVegLfxHFbNuA2f8jWXyQ8SHp6p4h6uVYrg2n3NDuGyWfzywsShiXxJYGaVtDNWJQ8S5KgVkBUkMtf",
  "key1": "2zD2bYhR6gzYsERxmph5AcD1YqF4b8EnCDL8E6EGLfuVfKmkg8CpNFbxTRrGesx1Zt42WgD6eYYCAvR9bVB9K487",
  "key2": "4eACEtBe7ptmidcLXbxfncDhyQQhkweSLsa3gRk8UeMyEn1FX8zxSyxC4ST228tF6AVKsgxVRqMXVxtR96rJWRbd",
  "key3": "4Zst7uWhvnca3KWcSfm2kkyoYbky3RXjCwhrh6XPd4ec8LYPFsRWBh5yE8JasvKGB9q6cLJma3fNddYpugacAfY6",
  "key4": "3x3cJWxMv3YqogW2SpAL6Bp4EgPcBobr4abYjmEJucvDM4R8RSFRuWAkJw13KcmbdPWmG6mLotVUnywjfecbfNyv",
  "key5": "61WibdbzHcPvm4cBoWQomSMxSNVqt6njtFZ4emD5n4pWxBgbZL3vTykwAf5bX3RggJquEXcnskSyjcWCFUUsYSGg",
  "key6": "2e3KtZZRjVdbHeNa3bphXL5e3RyNXHiUzXA5ujPm7PPmjXd15oUaMySMfGtKSCFY8CZbeFRv72g85yPYiGv5bhe2",
  "key7": "2SbAZPgxm3T3xiUicJHF2KsTbyMj5QUjwan9P7uaNnQXDtKpuavMhmVFu1dQsqu1PuFD64FKruAeHWR1ftqV7oSM",
  "key8": "4wCThmkDigZR2SwXppXQM8ZQEXLpKpdzV41eP2LbbKHPsVPNYfPhFrz4hQhvmJy6J8gVyzhYxpz2BqhtSgdgUW7H",
  "key9": "5LwsDLntkDfdPX3uiUNy2751XXDuJDwUnWD1gXbPFFBXVrUUQmiaHcEiiGJ1PEfL95VN6yVi4xwV1pMfBNNpPDkh",
  "key10": "51GWntietG2cy7k9uG2MPSgjw95KYb3niWKjxTCMAyRqVNn7UQ3gQpcuAmPWj936K4U2UT3zLbwGvGAGcN9EFjnk",
  "key11": "554Fv3JuTTMVdtLSZ21inxMJvgBhTRMUnvtKR9GNY5axXcPuuvTHBt7U3romcidTCex6wqpe374MKjzRnXYhi7Xf",
  "key12": "2AgB1QNCU6j4CZbTtRqY7Ns9cHme8SNwZVHfPP8jJS2XcgNXxbtaGcJGhP8Gj2P8vo9vaHwo9gWC2zhWMRV74Moa",
  "key13": "5DwPjFhNn9X6Yr9R3ehz9ooSypVKhvvK8FMrgfFYmwW166bVuWMi7e4bhFHMpzy2WTQPUxo3WpbTDYCBWA1Bn5Nh",
  "key14": "4TsAfJngdoLtK2tGyFyXTcoXd3J1erzEeBrARxtevE24QYnP3nCVZ2VQTt62urhZmyAE5vXY1zPtWJMtnGv5nVTJ",
  "key15": "2tWvV8zq5U64vFoqBE59EtRcq1dR1j8SQ9ZvuWDEUtiKgJC7aTaxsjWpzn7HkSmkU2XKw2rwv9LgjTY6RYwzjzjs",
  "key16": "3moeDzVjqkDop5JgGaKWxE8pvceB82dEZD1Y5UDqgNAB8FuVrQtFV781KKyuNgkaVbRvFmMHkJ6ThawtRe4bh6Ue",
  "key17": "4F2JwZn6RVRkV2ysqN9tkgnsUau1rjrNkUex2Wg6DisXFPbJD4dCTvbm9DfQC7CP1sYHD4DCWB9tuzczGmRz9WZw",
  "key18": "4pGzkTDTE7mjzGZUFkjo8hq631Myd2Ju4H9Y8BpvKJAyfxtYN2KBu1fAd9MnMd9uLoxHgicRZCX7p9JqwHQ7sXb4",
  "key19": "4QqEGgDRCKcPsKLprSY6eiVPumvNK7gQwXqx7ciFtwsM9pMfmyzgCt7yrcYQe32yBQ5CwvzsZoYtot9cntukQMP7",
  "key20": "5UhZB83xm6aev44AVSF3d9adNzZt9NSExVZaP22EUYqeV8ApQ2tV2VYeA3XavA6FkBsxxSLiLMXirV7MUGK7ZZHM",
  "key21": "4a2QRs8aum3feRDhq6rNikLhqXkVkiE3MSoFs7mkXyhtZcP8K8v2DrgV1Xd3NFnFbwycsSvqcGETf8CSZrgAx7s6",
  "key22": "485VbxVmR1xnaunAHnjpbRESQkeC9UEDf5AyX7grYUDra7satGCHKNSNuKEzZnN1ZL7xdzW1Gq6qqMJBMiUD6HP1",
  "key23": "dvboZmoHx43W8e7jjgcbJSWZRUSrevGj2Qb1aZkFnJsQNSQtBajzDAmSrYYDTdkrDfDNZDF8NgpupVgFAorunrT",
  "key24": "45n2j2EvfdzS7XcB9oK9rstNmsVZh6Fwz5MV1qNnhZXsws5CkNQAf6ZkCF4hLd4gWDhsKcJ9DKU6yMB8XECyEyb",
  "key25": "65hjQ9sETM27CjWpjTDgbGa7VqpxACrUX45Eni2VRg94LHFfhyTrFhESR6n6RaRKKWnqeU7noAyEsfnKbfRawB8G",
  "key26": "2cmrtryv3x9hrJDVaUKFX8T44SKgvs5egw8nf6XZi3UHQuQkhoVo9TSW4st68QzWSCAEkzfZAnhNCof6xihMnzi8"
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

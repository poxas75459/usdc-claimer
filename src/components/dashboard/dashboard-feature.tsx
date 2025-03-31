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
    "6G6e73jDVCBQGVaH7FzcmKHmn14UzXRWaj5JXmVoUiNencaMFTpXb4tBExU6mGmPSwY45QjCjZWENU37hNMDCY5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H1UoQ5thGb25APaQSBK9U6SdM1aNzo4nfDvqSio6GpYWmRHrRW7JjNF3uH8cJxnq94ssgH4ARAJfRqYQikQveLi",
  "key1": "2fMkQc6dhTkp9cX5FZNNUiRwA8pRt1kq7LQ2iwUyUNECFio5LTYDZgtYGovvDdARexadSCzmQX35edRrDgbwtKRA",
  "key2": "2wUquftFiUY3HLcrhDf2NaLMfMaN1bqrLNaL3NxmP4qJ8VtFetkuYJQJzpC5DkF9r1TV3Q61UPZfjGA7wTze8jPc",
  "key3": "5h7zQ5yRbfYpzuNRCDrjNE383BjbUStGoWY6vadNKH4JAvKXMEv5bhxZ5NqBw3euZg3A9ZpBZbqCQwiTpzuvS2Qt",
  "key4": "7rtLP1zkhnXuGhdKJXgeLHd52M1j13JyXBBnZXsZka5F8tXJxh1gB84wXxL9RnznQsKEmGPykwzeBew38asi2QR",
  "key5": "27NziUCAGk8WY9muxZCN1dHHPvea2pkNTDnHmyvv4JYXJrE6efCq7H5AxfaeWqBRQqH1nJfP1eJbyur5GsjxQ7Um",
  "key6": "uzfSTxY7o429ToTVwkgKhRh3qxfxD4gVu67uegFVWP21cS1jHumdakjquX8SDArtL79VTTrAbvNtryKr6rX2hpb",
  "key7": "QAuY9iHECEZwDHGXeXh5jnq9gfSgKBdMWwcXzGbuF2iMqW8U9kfp9wD4tYvmzYd6YDmEA4cDgoDw8D3JD6PP8BG",
  "key8": "B81XSGqachd4LdBDpne6ptdjNRVLM1VBVVJ1eMawQoPRnxsEg1ZnVcNBUS99mwTTxxcvPrmWJfoBXYGRdHKkBL9",
  "key9": "25DmR5A4ypp1ydrMgWMs396crs4UzGG8hS827axZrm77fYqyeCtWj6ABAPGodtibQULhWmnFLEA2AgvK67uKxSVx",
  "key10": "h4gSBYBWEMFa45KG7D3rbrre3wyFWcwjUL359uegfQt8uioXVyeH6YWvc1eqn61NUwJSTuXBuKfJFeMmMSNTUpN",
  "key11": "4q5MgQpwNbtrDx12n6ha4BeaMsk5kAvMP7AHZkV697PUq4DrteKoN7CjLJ515ktXDzwaW7C5eE9Hk8Gy7VRGZdtu",
  "key12": "4PJoX43bphmcNmfD8tYgvCverKwgCsPsA4vcuCR19JKVwVb8uJPufatq89JwZf7499BKGG8H4oxZi3DLSgRxgs4D",
  "key13": "23jDZqyoPikHduJtdddn2zdS7M43fUpWfah6ZHG6tMYacQzoK3BsSVhyJiZroqHvpGXiYhD5MCBZAezgLQJZEwZv",
  "key14": "32AojipgaauLpG9jZL6Bp2KFqBFgyKUEDMdHEQUGTu7dMykkQLX6HMyTFzkrJdBjeMyzf2c9w6XPj8HvrZ4SDeG1",
  "key15": "121LJCVNuVxtX3NufMwsFf3EXLZ6WTAxcyhEmkqqtAXKMDUCsvRxtbmAqBB6ES9ZHxSyy7Xr6jEW2Q67BYajzHL1",
  "key16": "3Y4Avb9QVmeuo7kCeFyh1pKY5ggut3eDAxpF7CGWmYgiMBjGnzGDsc1AknbhvKU4WbiBaCnmVUjiuMZewXBM4VTa",
  "key17": "2NRKifSSCnKuxyXzzZGwNc2P59A1E3RTmYvpSQEWombqR9QgM1LCDVcsaSyAuD9dRW418B6iBxkjA7txXfuwosc9",
  "key18": "5in7PrWCvnkyh75ux6skh2fBQsy9VuVoK6aBmVrQwESJgZPXHimvBGiT1LFLP8kakWmk3CK8PmmbtNRVQPNNveNp",
  "key19": "5wasCpohfajHUnzG3Hk2RYVzWdBJcrZQgLfjY4FqbJebKZyn7S1FJuAcu3oUwy195sk4SwiNXxUpWrtkrUtMmC6H",
  "key20": "2EUVXAb8eBDDZb1hbitiGaRjErsevS3WWQFWj65ySemGiuyN1FwYmNoQ6tFque4CK4r1DLyE2ncAtJ1GudnQ58Kf",
  "key21": "5rZQiGUTz8HkH22fqbVuxgKHPGtQhpX24fDQzQe12tCHwNvtNSUsvU2tSLK74D32GcrGMQ8JGsABV1BnX3gEmbBF",
  "key22": "3Hwt52vvi7hMYJ3uG39qJVZy1JCM6mthSoHH7HLuxYynnZbp5JUXZ6aqHH3j3MC4VQH29Hy8PS2QZyvW53hPTYmd",
  "key23": "ty16jmXPtbzgXB8ymxZMisRztg24uPkJPb7xvNCvAMAB6MFkuFtH9MWodddWmkY31Xh4PSBdX2WcufciX9zvnu7",
  "key24": "2R3sFKf4AirxMmTzSw8QfjPxYBRGdSE1iHpSejAgsAEiLzNMWrjnXYWqzVTdGUadnecFSG9Zo1kMe1aWHq4ygjAP",
  "key25": "3gTDi5P12r8UU1nKBNwTaxriwejqffMCvYVPR57UunZpTMoxT7z27jnte1xsp18qPWgrPBUjoBU5b1NjnbaP6nXZ",
  "key26": "5kBqMv7rbnn29xMz8sz63hfHV1Z7imkEgsUiEgsP9C54WHvbhxrtaMi5vs7UEtPgffyJRwyv2KCaffHfs7HD77rp",
  "key27": "D88bKwsxgohKhxtdKT8CDZdvAfN63ZNJwtPHkDbK3mB5Ee6PaZGFUVf23mEwgcJmEA4RystP7YPNrj3d3G5vVei",
  "key28": "3KnpCi7sYMZsPh25pNKEeUhCmTLUi6QDc49NwEArn4vmj9NowLyohqmUMZY82KxxVRFppMYXKSjRi5KZAYJY8g5j",
  "key29": "4ChZmxbJAhmrjBd4d6uBmvqdRSH8MP6H4nPzTWy65WrtaH4LBLuQfic2Y7eeBDFUcqjCysqxNXkTHbb1Rwjs6CsQ",
  "key30": "4kRM4i1swTdWPimMRVJj4n7CMnyoamJxZY5PPexvczqW1xabhYixhfgAmKgXRqTz2ETGQP77chPg4HmtJJXQMs87",
  "key31": "5F1Cmet33mFvkLjMDTp6qJNx2AqV45iAvryrS1qtpM3aUPXUK2wF58zDtso6noApyU3MhwKHZVMNgBLTPJwNMtXY",
  "key32": "3AoGskBW9tG1URvbuDcKF1vULq5etTZvopXcERmLpTKyx7QvU4c1XEq5DbBJFiU383pjmsZTNgfgd8gX82FtdcVb",
  "key33": "29KeFmaQ9nvT8d9xgCGoYA9mbui9yCZe4NqkFQKvPie4RJjPoHMrdZg6JJRYkQKK5i7J1XYr22XdVQWcPyGWFtYe",
  "key34": "oaT718RZcexea9HMLJjYjTwXSNcyFeFguZNVxg5YEwVgYuJk67t2VY6q6hUDQWKuhHqEfrP6AGUp8qL38UDQvch",
  "key35": "2KCCibThrrVVf2L9HjKop1rnEfoNaZJYKzHFDSUagV9Djd45JpyWQMgCoS9kmyLLXWmjSq7jpKF7GqbkKEWGxpuT",
  "key36": "5UryfZ2LSwpGat314RJ8dh5PDophNZ1M5T7KXZ5og4JtPwx4hdTr8htvJitPzV3nMmQwVxtBsGv3MB1cSrDqex3F",
  "key37": "64CRcEiEJVCxWzwLd9p8jgrcSYxPisTgDGCTYmJRaAY766sN1tfDNBRmfpHMpbJLaPq2CeQJmgDpkcde2n6CCmfG",
  "key38": "f2irdBJ4XyHh4AizBdCgBoN57TNteDMnkxRgC7BYvo7YZPo7qm6UNtcvbL3FywPuj6WTh2XjUCzUULNANrqH2aV",
  "key39": "2Ni6MfgpBeaqMyAN4HDnuSLCXiujEEKNsvRnQMH7Txijtp1B6vNZD5rHqcwfT68PMNC6PfYCaBAaCWRfVtChx99g",
  "key40": "5hD8YSJcy7zojFBCFHPahaJw3MJhd3Ude3VYBeBgq67kN4TyNzRAN1eA7f7kLS1PPdZHHKNwJxr6zRMfz3a8D8c5",
  "key41": "4FpTrBS9JJooGboJFKpxRX4HnaMZHC5XJAsHgtP3tZsjMJccjLVBTRSLPQDMNQgjBpM79NjvLQkUgigqNH4SWPcx",
  "key42": "5of3QiKxgBfW1f4jMj2J5nrfxWwooRhVz4J5476pDydcP7ZqsrTeQPPERbyMrSHNybE6LTMubjRiH8h8yNf4RJQV",
  "key43": "5BVxycC72gLeq9wwR1tpgqChzc5ioDrCi1EHNRaP1LgfcWwMsasKg5M88G2bk3Aj8Uj6qnJvbf6EkAaX6jUN4G8E",
  "key44": "98nRf9QhJrijyZNi4vipLW8AANsDfH5WFaawfC1aJpPuE5LkmiwRg2L6kbCneqAXgkBy8jQSVUXcwjN95PMRHeh",
  "key45": "3Qd6aMxP2Eiujcop8k2jmmPJQ5z8vDFC2zKAprKhKMqGyGqYbkiQLVNB5iviDuHrK71kyqaagfUoUCn3yPZpBsVC"
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

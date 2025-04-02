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
    "2B1Wq6ZG8PyxpDWcygKRhQJz2Lg7TjLRFLa3F57EJUNZdc2khYEr9yKNE4ZgyT7kRWEpgQ7EcL9kNzDpeeCTR1tt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36NiPVjFwF1s4Xbzz6Mks3gnRKoPnL1ZWePUi6ednRcSwLVXAyFrBF9ASAvKtpW5BGpirGG2XT24EmfR2uC3129r",
  "key1": "Bt4eHWixwRk3Hj3vh6pvmcV8W4HfjbDNazGBoHk6m8r1zSfKW145gmcRP34Muf4Xy7JxXBiRZjN4tYsUBMTdd8L",
  "key2": "5ziMhYjwEG9VspM6kLP5p6Kd9eSug2SbzFq12Hmo93fHDBCWDE2dyiLDEDbESrdZdXKLraiafVU3ia6gyEfisdmK",
  "key3": "5MePpdASoyS9i5LtXnXVJknshnGSbqiPAsG86URGczra2Fp5Amd4fyPSctxJQ2TedeoXD9uf2QXYjuf27XPSzWRg",
  "key4": "2a5A5nzUHCYBZRvgoaQkQwoYdNyij6Lj7TMai7GpvB9MY33DpEoxYrFy17AzcErxYtwvyh2JpwterDDQPQyMm799",
  "key5": "4gUxdK7ebv3okVfdmyzXPghfTq2SN5nmZyqxSDjYu63UzJwfnrck3nEsbYViPE3MxLjT3LdzYTFSWgFesB629L4g",
  "key6": "4ALoL7GQEwAY3pM5AYGEdNAPFfKYWFTBTaXdiSZfMv3LTtjX7kDKswEoWCG7sVecdvAtPpwAG3NhpssgMCs96Fbn",
  "key7": "4mRCCMaA631KqR1GwmrH8PzoETTXgag7Z3juEyoXQnNFtwJrTZEy4nWY4p7bnZoEatEpWYMtW1ujAwtD9xiPzLn2",
  "key8": "4Kcpi6yMVReYTtiGjLmSjsxuEooJbxLM48cEeWYDLciWJawhbgNXemWjJtYrnAjwiZG78G9QZZkedv2ATMaHWcNh",
  "key9": "CUgncoDGrWvkCfASDwfpXWbehhSkK2B9REAvjxiZCkVqwoi4WesXefFEfmDb8Tzwag6EFE13CaNZkCKFHHyg4UY",
  "key10": "22bnX2ZcjpAGkKeNP1fPWhmbxHM6FvyTymAPmw4FENZVzfZGnRLER5ToHYi2BnpAM2V3sVa1FJTAre1C5qkfMw3n",
  "key11": "331gaTzv128cNouBiEB4psVKixQQye2NcgGcG46UgstM7dndV1tv2uSZ63Cip94Yb9zQFme3RQ2tqvVthNBTRvLX",
  "key12": "5RoaMkcFUUxiakBvFLS9faCpZ1r7DcEb2MkbUmbCDGTkEk3jARY9WWzaPkhbQP47RhQyJpSRd9MviaS7sAHsTssj",
  "key13": "CocZGBM8KAk1rx9Cd3nqpNVYdbr6UNwk5sTdCgqVjhdTwtBmnL7tsipgcfxMJ14iGQHiZUaPwpZ7TBTSu7YXBki",
  "key14": "5JPKvb11FdEyChJepJ7TB92LRiJLt6L3v5MQxaw7dxYX9TH1n4B3zFtHvd9k8PPP3g9pCEH3fWRLP8wubLghZPks",
  "key15": "4bM7E1MJrpyurmWB9sSasRKethd8BBuukoU2Bp9ymhxqESr59kn1k2dpBGHTgNe2rWcZEABPpnnkMpXDYCkz7X9D",
  "key16": "5qvcwxAuzSSVRkq7ho2Ja2VFduj8aWpMcUPDpGoJQLihSRWXeeSZ2BozQ2NFmU48dRugD21kCGHXtxNro33P1GXW",
  "key17": "4Twq8BTFKiBQg7sGgnB5cKob2g4AW6HCMN1Z4w8Wq3zzjCNU2u7YE3s1qiZYY4y8kLjLFmepk7SF3JmMFmgCFNbE",
  "key18": "61gDsu31qD6G524cfpfAVHS66B9ynujTKKQ7BW8GQGd8aVSsQ3xmdWykfJRRsfNm91hcUiWvWq4UzZ2vMMFEKBpk",
  "key19": "54XvfxN1Dw6TbqJoVFLKxc6ByfDszAj3aFn8KCAhSqBjY8tPX2rWpw7Dh2fpTwkENkmP3bStYeGFYo8jntZbQogx",
  "key20": "51aiB7D38NeuuVk2dAHqzsJrj5MaZjhX6WeaCzwSzLCuAfP64W1VWKyQFWB65DSd5AkBs7PiRzUSAt4PfkZRcoMP",
  "key21": "2HaasKLvgLCTWYXM3gFASuNaWdvkfixfcyNfgoBpeW2a4UzB3a9i4exEBtDtsMDhuRVc7QkcJNuAvAS3E6SfgBhV",
  "key22": "2wAzKhU7uM94L86ECYXM1We9JYtMxZv33eLB5qysoMXqbZ5VroaGS3JFPXC6vL8TVWEdhTXL6gyEBkDkKrz62owt",
  "key23": "ZFAyxHYAX4jFidQ2qPTy3RRnTmYzE482tQH5CbKcPmfgmBvUE3iYb42V7tZGybot7RAZGUupJTiNrcsA9DGPjdw",
  "key24": "4sX1kimZqxs39WPawkDDFFtUxVgpenjYietrhd1GRmxjKK9JEh8K37L7N3GRwGqUPLEfX6gaLSPuqQvSD1npX8hr",
  "key25": "34aFxBVJhEscaeeBXChbmQsBnQLKSY5SFNNhm5jgAm6TqkgEA7qrNeVTRvmKzJgFnbrHY5ShApTkGRDNTFtKevhM",
  "key26": "5DDopZufKLHn7n8FoWxrfM8KRtaWhTNNS9JUs5E7EPyeXbSr9zuwngFZ1ZteVEhJhbeeQX6v3Rjy2eAfJrY58vLQ",
  "key27": "FT8Ezy6igoe3u1Eb8FCknnorzqLhqbpeJV6UoPkE7MpEKe2p8qTQro5CF62rDgEE5g397sCuEmmskNCbZtHAC7y",
  "key28": "J8npFUuCr71opAFzLuXjd3TrVbuySg1xJSmBdA8M5Cyv7qkBuHUS2dwVachcGkEvuT8H4nNGqAyWsTxxUHxFqkA",
  "key29": "2yTajhr3ZmZbmAjj66HYUv3bMswk2hR3KUTFWhdjGngrQ12YFKxusZnm9MtB4Ue9ksH3Dw6b5Cz59sRfAp7vMG31",
  "key30": "3fWKZbC6YjHCsN3Gk1duy747kgLDeHZm2UXDG89nuAWGU95UrZrtp8beg3VfyWGddyMcfkk9gcvKkMJjbKiCt5P7"
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

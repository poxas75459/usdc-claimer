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
    "5JAT47MztJFJxG4TZJx898RVGUqL9rFAgr61TtogLApVYE3wV8DdFqVeDA1J8GFgeuCQiwmVRsgujTWdaL4LGCUR"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "5pAKFw7crTHXasXHTsmHuCtKpH5HiTwQm4jhJfd6rmyN8dCBdpnrjHirYSsEWsy8mCWdLdFSH1z1toNP6c6oE1tk",
  "decoyKey1": "5UpwGvx6ZQ3NZPHhjkZpM77moaAQezKSiZac4Dpkqu8ruGQGY7zzPMkdcCwWmtyhnopPuAMLWJTyrXMXF7CFieDW",
  "decoyKey2": "52QysK7rXNakRfiC4per739JaL779rivFWMbjbysAAKrLiFpmXWfXhuSsvRNVhNLBpQtdFQoeKwhq19fTH6n3Uf7",
  "decoyKey3": "3vHuL1HH81QPVhFWjgcKymPvH6s4vx5qL6qDZ3qRoQi5DGkKH3uJDngBH6ByTVBYWDpbuYzqAJZixcAbXc5vW31k",
  "decoyKey4": "3Qnzibrra9Ckm96ASpRrDeaXUvfBThrrMJPtNkX9aYftenitBC3SgvPkjfWRArHvh478FDTKBR6ySyeo2i8e6DDh",
  "decoyKey5": "3cT49qE7XadFSpjHsL9aoHiGbs4YjqMHxcW3GnfTj2BJyzp1wpGAB5KH395ZdoUBcuhq7TwHx7yYxoesd2N8uMxn",
  "decoyKey6": "3DNMMGvhPQtrupC49LeFVdARiXM1sU7Uy2ZeKnccDe38peKjZTaRCYWwRfKxBmz96cWkUutnGyzJf8x8kNibLbVE",
  "decoyKey7": "2ieM4ZgXgeft5HP7Jco6GeBBYE5H6AvdW4ytaxwVQi5HXmJtNJ85UvQe6R9RxVsaMvvpheMrASk34PdrTavY3XJC",
  "decoyKey8": "2stjFjnMeFqehBK2QLtao2YCwhCf5P8epVNgXuX6zS1pWKGhfCJvBYy4Jq9d622fmxmfqDJf51oWsNizLbArCadD",
  "decoyKey9": "hEFiwf7TpZZUGwibgxyj8jouki4izuYrTe6ZR3rDnq6bZxSsoXsLuirYR24dgkNfFtH2UdCYagEsbxmaFNFLBSR",
  "decoyKey10": "4PeFsv4eYyEi9LFYKjhdrE9jN3VPmWayGdjjfWCzvfPLAf6WoFvHihy1LyhiBqkwNNuWFoVLL5ADi9qzgRw9U6H",
  "decoyKey11": "5GVgRRKZP6qAA1oGqZAPotVPGyGf3NBq4AkeRoHbg8Qg9iWKH8KYyQdSg3Fy3c5Jt1u23ETg6zpi5xbaVz1ig1aM",
  "decoyKey12": "5rFkvCtWCK4S6mxy8wnd5j7ArdoamTRsRKq669kP8Tj2HfYvU11QWH5KNNMPE1jQr5HATLrYCAkVUAdTuBeukrX6",
  "decoyKey13": "JgKwdtYcPR4t7ZLV1vq1dm8UnRhYqtzjJL1hq2j6rsduLBqhtNtrLB16rHCGxEKG3THcWsvnR42qY4rfJYeNu6Z",
  "decoyKey14": "4xS9kZJ6ghdBD4NDoTq4HK2V1ry1a6JVqd3zDw3ZSa9Qtw9jHk55neMwYRiRfB7Q5ZV4KFv9wn5DDCNzy6Z1JRG2",
  "decoyKey15": "zd7FFZD9iwhUZGZyxPSFSbapNxRtw99zrHbQS9v9PFVDcRssBdzdM52CmxVkb4mMGduPz9jdAEMguH8NMibgjVh",
  "decoyKey16": "tXNPDG5CEQKoHVXRdWm1xvRb1AuAF7AjH2kZBvyCKVcmwr8pewzM8CfVYvmxNkSfNoFCmpqursymMfpMPjBV7jM",
  "decoyKey17": "4uJPiCsrNzkWXV2wqhWuMW6n7EL1jAGYRrfACai3vbcdXFQ5zv9FZanTcJnJsiY2ccPU9gTCCGVoEZYXFrNqtweP",
  "decoyKey18": "iFGbcU1GPfmpcCPoYHRsGthLEvRRTYrUz7AZKasWfTtbXYDFXTEnbCz7XUNTsq3e4Lt1Hr9YMVNjEBMDw69mTKF",
  "decoyKey19": "5p9EoagxB51rAMYAdfCiDFLKs7B66qRo8HQLnWG3J3HcQnr99FZSD5u55QJ4c52EFHGQ7WQTFL9XVTv4K7GkH3mz",
  "decoyKey20": "RX3QDWVAhDJEaUe2pPiqtvXWYL6Vn7pEorrJ3azNg4LwF9mThTfLPYxhG1gTxA4iAbijUg3JgSVZegjJXfQ7P9z",
  "decoyKey21": "3Kn2umpAifVaXW13K5DexREp2h9qnG5e6TyF4JwTg5LwEkULchctXQH6xcPpL45ufGHKGHi7LigZxXWUFD45HCmk",
  "decoyKey22": "5wdBBVS8FK4nUWTKxejurMiFpt5mh6D3DwXY3x5WGVoU123Gwp2QXs14Bxdz9rp1Gx82iG2gHfxgrAx1mMUihkS6",
  "decoyKey23": "4ovBkDuzRnnp1PuboWgGL2rJ8NG7bmFkKjSqmSCSC4KnpRhEh2BkwvbUAk2RMrMnPYsJcLz1E5AsmixJLc24xtWU",
  "decoyKey24": "3YBGcAzPuBhkNURCeDCojvXEDrckFFWwkq2sbEvwyjVzx8mG3sC9DbGaxzmPPqg6ERd5RBoAt2XfM1c6SxrDXCTD",
  "decoyKey25": "5Y1WdWioXFmhiFEmK3Y2rWRZwfQCjHkfBsczZ8JTFzAhAa4dFMgUV2TPiFdaSnzu6E2KaVaNwfKr7zZEAtahF8PV",
  "decoyKey26": "3QCYKUqPUiQRHsvmtcV4mgR4uuNx5UTN53z7hMhoW1KuV1RdrhU35RybREHtfAaCcKHifNGw5XpFYwzswZoLa9o4",
  "decoyKey27": "5N9i6jj9x7cxPmxrMsKV3ANM7jiRXttpJvJRNYepzWzKsUQYkZK2m6W4kbpWyU7oMiC5uJyn8XpWZLJjgyB5fDZs",
  "decoyKey28": "5HLCTeEYTP62sj38PQh3pT1KsSQarhqQQMBbPrxZJvFLeqo86dc4qjzaoErtWMc86e7884YdUX28xSHbrwrFPZCF",
  "decoyKey29": "ABjyxGoySAa6Jy63vQC6SRywdppRvBJiJdXZB4Aqf18gDxHEs8YCvWpbapxFUXDsEBnZhuwjd2ikGwbimFRAJPd",
  "decoyKey30": "4A4CEmzt3qZFEb2zimhBzZnN7LX3UnXSsJvEnWxEwYq868yeWYPkZ32mo4ys1zQu5uVyAVJbUkuWGFDVpGmwX8fT",
  "decoyKey31": "67aVEnhEHhuZShgEy9ZjeZN3nkyX6NzruPMi493pUctqqNXs6njXpM4rCz6RLJppCFQWSDD4XCR1ye6xRoLQsz4f",
  "decoyKey32": "qEbc1xWwBc7s4KLWmLDG7jx4xje2aHUs9d2xhoUxsCtpaoMnCRt1XQgfC2revfJeT1BBDg8JVqjEgkw7iWtjSR4",
  "decoyKey33": "3H54khKpnxSpcc5VtFGNMhbpHg5Hf72jeQxuMBi8DUCiN9912MZyTr5sPrKReAcxxe1ah5ZCiJh92hZx2phdfxFb",
  "decoyKey34": "27JiruwKVdyWSHvZCJoZFbg7iB69hLC9ZfA2SrZfxepcYy6drCj3mJoCUxYQCDgF4LyVnHGzbQ1si2b3LEbZMqqV",
  "decoyKey35": "2fjQwVfYYGcnthC2kmWZnQ5QHZUBdngri8ZJpkBvVLWVq5cT2sEo47ZyRPbp7VHs1gX2dSmhWifHNqz2Mxtnu5PS",
  "decoyKey36": "2PN1ypmSQYM4jgkjJdFc62xdBLJxdM8nMQkJ3PmQYhEemLauXEmLFmE5Mnm6Z8WbtQ6o4c5FMSPGFZt8tVYeTWL7",
  "decoyKey37": "Y2LGiXGeb4yP9ZJ38Uf6NMzTq3dESpfvHV3ngngU7ruig3NJWcXU38TodRi8Kb11uGTEEs3qNjWpGyi1dztirY6",
  "decoyKey38": "3HjbkchN9xxVf77bjripdB45NvxYRBQYE4NdC6ShdCyGrqiaNn1zE2xRvN2oCteKC2KET91PX9Zyq7W7MtaEui52",
  "decoyKey39": "5wsBMwAsMqNvYfh7GBTFkPT36QUKTX5ZcrSzcGUXa427vkxESSNBjaEiWDvw1TzfQSaGgciW1rw8xy3ogDzZGHJh",
  "decoyKey40": "2P8JLzUW9Rpg6jgjuq4mozvxRipEULSMGDimyj3qVZrje5tWzBRMeBjiHfRTWHVkjoyLSiB5jH2s8r1ttrLeQXUr",
  "decoyKey41": "36cpSYbAykuTEbiocxa8nJWvQxcoFoax3YCAJ6xqWgy3NfmEnrJ4VyV5iHyQbFkMc6xSHrPLh7DWiSejLL289QBC",
  "decoyKey42": "5T7eeGmqdxx38MoLDF5BPrfmwRWGx9HCHeLWz84dvrUqXHC846TRxd1gvaCXoBfPfwANDD5fWV6bfU897EZqzA8w",
  "decoyKey43": "2LHG7Vf2y4J6TdzXNh7zzW62ueBvxdK8kC3BqSCuGdhHFvjwirzC2imFgrsPdpN6KfXajXfSM1DpfKymJy8DEskQ",
  "decoyKey44": "63cGXZZ7gdvsoihUAwKTQcnaf9CJtuoRUPBR2PW228vsHkBe8mJB5L33nTF3ppmUZAJkSvrDogMRssBP1ZHTSa6d",
  "decoyKey45": "2L6m6Jjp6jtWrLsvGgxzZFjxy7GhDV96K2WT3ExgBVnhz84GTtNckudSDRLpCKcJQTNdi9LokxysksFhcoAGaU3i",
  "decoyKey46": "4DLomxTDCwv9U1iubgszVizP66RLf4BuddJ4GaPYGibuUaUfGUEBHrk6pF2ZURqRntfdxVWeKoadkn1MpQw2uDRn",
  "decoyKey47": "2ajgUCMSwkvthaECzKr3sGyWRc1of4z8cNveoWSyH5MaLNUx65hPhsPo6rVnTXwryQhNa4dLb92UF8wwu9EgPhgZ"
};
// DECOY_KEYS_END
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
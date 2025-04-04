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
    "AXy5WNBb262rgtMV54dM3F2bQUV7TWDnLrVW2eUzid7LDC47WgkNDhtdt38pDL44p8rZLgw4Q4aw2HpS6fPcCUZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cyTdWHAnGqBvfdjeSLhqmaxVR36gfkDKz4UAiK2PAfR2zSFAuZLsWeLghPM7DWkfHsSmoAf9tChFvASe5t5gb3d",
  "key1": "4T5bPGmkj3otapqemFdCL22HUjgKgXbcWpG1x7G1Us6UtEKhF9NzfNABt8saozW5CHVnbg7okRcSxdMhJidQ537J",
  "key2": "4hwza15wMMirMEFR1m4qySmTNakaQUgrh73q4TeC52aVB5iwpkzcx6Enuaxb8YBFv2ig7p2TYtiHbeSgYjTwCBwb",
  "key3": "JK6uDipmqbbtBgLGsXHBan64DmtdH1xA1niAcamEQ5Hk7mSzacwc3qiMhdbQYGXtuF99wNL8fLNzS96A6grQqD4",
  "key4": "3u5hd5QjdMAFGhMrwSuAB2mHRVDBeedzw9n4zAQRqg2rBYWhRHjXQ7diEYzwNbrar8MUUSTvt3Nvv6e8WVK4wrb9",
  "key5": "2GfySArctqqECcPzoFTD95Gnmd1C6MvxkbQLZuRQztEyPzZE1uMMKvpbWUh2rMvCJSALdXEhU18LLTJ5fNy1Nqdk",
  "key6": "3bxrU2dGVXiUaGxUaimTHzFvyys85omBHaS7bPpUL4azze5rzKPh7yxTVhc81UXbKYnEXtdstcKeHRKgNso9vhpL",
  "key7": "4CE5LChhZGYNabqEXKgpg7b1WG3etANvTtyG2CjbcZ27SQf8PcaUDprNEEPAFmPDWH38d665zCr91RsKXZ57wytR",
  "key8": "aw9paEsn2moLB2Vj7JhgULHmjNobNrEWgteUc9XdrSj8pqHcTzQN3FsqpjqSg2gkC41JGie4FR13Xqi2Bdogkq5",
  "key9": "3B69M5gDbL8b1tzmdkJYPxGqhbYetz6s7haAih3TjL8nokPtVs3RNk4Utx7iihFSd3tVR2z6HhbQy8ybgbSSgPVU",
  "key10": "wsTm6zKukQycC1v3Nc4eDML6LahDFUaf1YGJi3FGYNxwXjT3yDEuqaZzob1NQDUbznJqGrPvJiiXv5oJdL7snYW",
  "key11": "4reN3VpLTTEC2UU7bwhKFejVBaCwmZ21KpY4trj6VdGc9DaQk4bQWLme6JThn5QTgnKcfhdBbGPKRrwtai1i4L7z",
  "key12": "23nA1GkTCBMGPZ2RDXo73G8W5mqXmAVhJndacR1Vke9JBfsCDPdW9i7WrQat3Lbp7qU76xep5e55nrMukkYTxERj",
  "key13": "27g4YQtxZEbfwc4ustcbGRFBrzZ9yAZkxAo1KbeawsfmztwrzYeFcdu9nWKY2V7HoTqGFrjwhFzZryuVTyKzGA5W",
  "key14": "5AM8NAvqY4xRwnwbUY68zEo1ZbngV3RZdxaDePLf382n5PMbC53xX6T5qbcGzPuEYAJGhpjWhqGoW1wZLCGDCDSU",
  "key15": "5oq4ZKKcvvXUtNdpDaepPXGNPPGjif1WxgPrsQYYNpf1w3NHsFFMfPu8k9TYrxgsE7VZfzNjaghytKw9c7cs75Pa",
  "key16": "3tXa2u8uhUoMKNXLMRM1GaegTGWzwtQhHVQRgyALGKE5fqUtrzu65HAiZbyBFuGEbw4dzZigraBr7gmdZcYgyuLZ",
  "key17": "4QZCzC7HH8xVQXPdk9hq7n6UHuw7B2Vjk31HHiFe3HmX9SwbHKHZz2T6Dm57YGCdaxcwuqphyGrAQFoEMii8xXw8",
  "key18": "o6qpwbPZEavGnsnNgvjRmLYoD1CBn9cSbfssyLTTPy8WzGkGxNtYSFuZVAYaSXiXjSv2ooZpLpB9tYWtWhTvpxB",
  "key19": "wXgoLDLpbtT3F32uJrvb3D5viNJEqQBYZCzi4UgKKTVRvRPyHuJTk3vaCVHVAKUk1eefP59FsGdFdHMtNB2jaCU",
  "key20": "4PdKTzZUpKfgAn1tkmLQumaNjWV4QFW9LJDTkxbTgbFJL4GupVCcMPf8Xv3tHNYe4rJAY5WBf2BQtR2m5cBHarv9",
  "key21": "5g1DoB7z6bNFBbMCoaFcPApWfoJ1JX9uiqMeiu3NghQk8pPGrYmpr1B7Y8UTpi6RujepUXRyqoXV4qnsGbiXeXGx",
  "key22": "31f9fJrTVNB7mcW5NXPQkwyUzBj3R7Agk2uajczS5TFDPFQAoifkFRjqTgBsoZSPX9QABWScA312Rr8EtEBfGTQh",
  "key23": "h9T6gGjoTKyKLweqkJNTPM4T69e1ufyDXmzjbCAc1MBWxpPNnoFhmdTXfNJYF65rZFnLVhimhB2NH4SAHtyZp7A",
  "key24": "byKcuXZJBKXJB7dftZ1wz6FWC7P6r3uLenUwnWCSsxmeBhEVGN4oJe18qaYmeVrxZN8wmUXLDxDUBGkkyTRAs2e",
  "key25": "25AvJD7GuX7KsqvH4H3wRZzkgGHtfcjYRbNywPitwtXqA8kmCdrKVBbgf7TCXXucGAXnXdE9hq9HTMHNrjSYAwPd"
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

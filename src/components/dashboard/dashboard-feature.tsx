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
    "r8SB5dPiDcNPZPzeAgPwn8RGq413z9fVqx4WbF3vuctDSxPeQfPrCbmDcqZoPvojhuw6MWsu2tX3w3K2FzQubuq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F3imkt1qhrkdij8arcVBJTzXhCCwU9feDy4Tmn53s4tTMCAAHmtnKxK3boPvW31HE3X1SQ2vii5NELu4zXzcHGF",
  "key1": "24vB9fKvBsr3gykgh7Y9wHwKEfiKZAKTi5onX95AaH8PRJxdsvTVrpfUsJeh9PB3CMXvqEnrjjAkcXVRyvGg9qDo",
  "key2": "cMH9mJ4L9FWcArBQBKHS3KU7njJqAgQdzcF7KUKuBsQRr5H6duZZBaX3GnzdFV8dnK6MYGvze8HgAR6v4aBMxAe",
  "key3": "64t26J3tdvSX47hPEo6dkgvLRFTR9JHuxLpxSVe46LcsxZ1KAwAdN5S1eqtRps6gNuYXxzUXiSTqCQjBJUAhyfhV",
  "key4": "5fd8Q1yF1iSnkQxdeP5bmVaUZePpcUipm9GcRrRQKR4WFxrgAgVxQCoSZVAjdfyhDmzPMgvoi63vTJ3ssJoLaAM9",
  "key5": "4xeaRiFQugRsf5wXR3Yef2tVbbzW6YvcYrEekAHmwbfwDxaphVMDn6yE7333pdf5Wq1CvJvMdPFDAY68zMJdzc6b",
  "key6": "21iug3BHa5CMQPBQV3VPHHL9x6JcHA7pN8uvBrFvVa3wWf56dbM3CD1Zs9ZbenNvFncZou9ZPVmYY9NbCYuP87cW",
  "key7": "66vhoon6CxuDt1VtFMJyYFLas1ZYALQui7mzwDWfAtUcrbRVruAD9ehZuyfVo8PXTC2Gg5jJJTfaXDcs5ewChxDS",
  "key8": "67RymKyhnR99F7MixvphRsS7HA4feWp3tgXiR2mppu4k31ABRxSximzGHLg2NAR19XVYULeMGWGVjjMZwww8CNke",
  "key9": "2XbjhM6k5a8L15XHyoyNnpcEY1PrVJViEToFj8e6FrXS1cPrRVv5QkervMV8B7Lp7HTpb3deHXyAxFyiCsbLnNjT",
  "key10": "4YMsapqJyDGsSy3HfZ3wkh21d5iqn2noX5H1TCPkFFNPjwfW5SkyYc3HZDKPk4aUTjQE38NFGn9CYBWKw5GEXtx3",
  "key11": "5dMDnHNCNy7pTHrGExBR3qFbWpEYX8jo6P46HG5XoWa1aeqes6sBkC4FsKsNfF8gBbVeHJ4VVff9nv9pERfzSwir",
  "key12": "tD5iSFZb5DHWecCHcJPeozbgRTNUGp4C7MRJBtu4F8xkvWNjHfsT3RGBVAEp41f4dozoh5qKgPSgHjPFJEipzT9",
  "key13": "4yEms39mEdFm6UfYpcGrAx2q3Y8jcb2zQB2sCWD7wTH5xsAt8vrxBpfyHk4XMiL7c7B47BfSJKKQdGJDw31YR3pw",
  "key14": "3b6fDssAFKNAVTRJh3ScqRWt452SgT9bfRUg5FfSvHDCnZz2cwrJZUjYrqhyAC2psBvH6hzj5NhQJyp3mho4UG4e",
  "key15": "mkVLk5sjnamFNh71sYks4VurNueCXUyD3xhfpUEAftAcUNqhKJd7uvgT7EUVX4hXJTYmoVG1uarHg3ApEPWnbKK",
  "key16": "pNnD7zDbLjQxtLEvejKyLateKtZGLHQWE7Lsnv48wtTCircCytxuGMUwZ28wsaxCU9yEBFgBbANHzBh1YZjLYg6",
  "key17": "4Dub3v2cRCS3f9uFCJgRbBuLzwBTYDW4FRZtPTqYFKjQVn6p3eHqjcaX25GTNN9qQYLHVmQbfRTxEdZBcLGaWF7b",
  "key18": "4zWPqPtepRwWpo74wkhnXENDHQt5x55y8y6L1jgkSQrFafDDyvfA2TnH8dA2vmPj55r1JMdu7Ub6ctHVkoHEG9g8",
  "key19": "5vqtU2A65PHcFKXC4dDMkD4D4fBiDh9n2AQz1YEZxhrUMhPYPcnjmEqz3QeYfRbRdfjZ24XJgFP3u1cDhWMro5Za",
  "key20": "3aR9rjc4S4csxTAMKPqps5QG6B7jb6TPLekXLbDdNeuwKtQZbubmGwrQguRxoVk5TdXJcHKZc15JR1yRP4ZPgvgT",
  "key21": "5WgxfqG7jwYJm64toN1VDbbm9svxxw2Ng3udRp3Ea5GUkMPQnn4Bp8Qzbg9qLcvHqcTwD4CxXAM5vJ9NrmvX1XEx",
  "key22": "3PsZi8UNv4Bxqpeb8JJP41S2rqmXHTRN7S8Kk7Spb1uXMfZxAjESdc4sznML8TZekp4exAKjGnUrg6mnWQJjA6Vf",
  "key23": "5DcneNmo7npttBFdaaCwQp5AMZoG1cUiyd3z7TaJ8ff5heZHFK5K4xzuM4J9Zfg1KrMkSMYhXtaBh2tFDnvqmuKA",
  "key24": "R99ihvJrNWTWyxhwUSmyPAWfFSUN7AfYY55dn96wxNSh6JK7MAycNWgyA3ZpcswESNhHMMn81YwQeX2RiwnunFF",
  "key25": "2LgppuCdKYqjBg1rzykMpZkQkQLfsMhYoPiAMdgRx7pxCYxrrCa4kaaaoEU1eBhPeLYXgqVcXietiUzGLWZHmp9f",
  "key26": "4BtvmqB7eDMpichhUNcHadu9bsnyYxBL83GQmfwf9TgaFMyTWoaZukAHZqzg5gkhat1JQtnBCWa1EBg2fMph2YKA",
  "key27": "4x3S5rtvDjc77fGv3yPvFGNWvX93ihAobJdM6aZmckpV2Lkyx9uRa7WcjomSPPU3MS2sbJW5mTmbNJD5obLtgLcj",
  "key28": "63Winheg8hviQe4AkwbF6YPjj6zYMqnaXkASnWsiecwN6XeBAGAmdd5KKDMeLCzRK3kdYoqoYTxxAm3U8Nm2N8iu"
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

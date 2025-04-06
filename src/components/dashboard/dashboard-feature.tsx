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
    "4xefhdcDN5zUXJpqgCbb29i7iqNrYYkHmaQMEXzJmzURbX32QQy9U1KeRxNtYnfVF1MZgydkuQhWFrPw63ovwjC1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yLq7Mftaw4QAd1q9BThtG7kWSzkdT7VDAQXgix3HdV3YSFXpoyQEh3G9iBJccVmKVy2KuebYwbp8roS5LcLHCkm",
  "key1": "4nSHc8e5dqkLyRNZM8vnLZR6UUVMju58Dk7G21nxmCLa3vkHDDSJT7yXwtpvqBxbiJY6fxAffwrtGzSNe5sy6BWA",
  "key2": "47g4zdoSrjxVPeYA4x7SKJedCdsXfzaCyuY4HLFwTqhriq4Lr1xLUdEPEUBh8EsH5WYZmNVgAZb1tbsn6Dk1n39n",
  "key3": "4EsxM2kba6PaRh2JohYNb3iyK3fBJcRBRFjx7WNkNiS1ozfV4bF8L6WBhX6WTA1xhJWp1npPnzFM3ktTieRLHzFr",
  "key4": "47ccVGB1c3Y5d9ZasQECeesNUN58BKdXhfGs71eUau4YMqq6s1mbXfj7zvKrke2yqVcA1kpgL8HmjL8NZCWGoZin",
  "key5": "2QjUDPK2giDZ7mdmhtKF5GR4AoXCyuzhQUhf4Jw3PPoz4Jb8NmXcfAWgVYk18WPsbsQ425je4fUsfzptmbYug33j",
  "key6": "29xae18bxfYNb1Y548BeCVDwJg3Fqrxh3kK2C6yYBGu1nnSqqEh5H44fSAxoNf8g4AJShWoCQUci9E6BquTZ2hLQ",
  "key7": "5CMApjbpzLp7NRUxQJdDRWrUfYqv3kMTXveVyodVQyURsygT9omPUgfomScudiF9c1YAcpTERe5p6XuF5QGttxjs",
  "key8": "5mSxm69yEKVA6jj9qvfgR18xzkUTU64GACLH7TLLwNKEtGnJ8twvzBfJQj4A7LCe7rXC5tMRxcxRiJCZdJMCosRt",
  "key9": "4TVZJMmNCgVKFxoxgofMQTy5e2JQNdWvJj2eUcG7EejxRQDrBooozZU6k2SvPwKxLVmtkiBnFhc6JjDBqF1A9wqR",
  "key10": "5vuGEMmGwamp33PegeUisubEwAnufCXgzA61gsVyLCEmPtQSMHgbATBsA22r2k9pz17wYDPDrrd8eH9kwdcoaC26",
  "key11": "5XeBcdNWBS9iYotKYsp95zZt6Mfm2XNbr8s7ZXkKotah4Hg4pFTB1RMtcYYDV8dsJAoAqWDSjDRVki64GDoSDytk",
  "key12": "61xzyiGY4YsP9gnqpaeQALDTutqMtfESNngSg2tarSScU4tERL8T22ZBEraUeAz64yHC2wUabq4A7LNzcPoV9YUP",
  "key13": "2hcatbxdnYneULReJ5p4wdVMn42ydTdsDHhZBwASNFoG9Xqzy4wLy5eZm36vAM7c7adKkLgJw24Nt65xrS54Agcv",
  "key14": "57Z412KcyShVjSvgMpHp2DP9f4RcNEzi6oQN47exwWEHYC98DqjJbdVq9surG5pwpFfvsBVZKMqsdMpuV67uCVca",
  "key15": "5hufZo69MUwfSzbHcvLskvnGgswBKrmFq1gTiQVZNMU7A2QHafdd2yQEga8NxHBUEXbryZaVpoZFmJCcj2jSv4SW",
  "key16": "WGoDac591z78PFqjNGNMhH7HDWcBnaADG1rvqhWWBaaGakHoXuGzSmhNWSqAmGrsdwt9uJhJrrFmwABXEzPZYVQ",
  "key17": "4X6xmQe9MbrfZQt2p892MrRk12DAvkDKQAJGrb6FJpJD2R4gPTzHmoAe6SuHpwm9sTiQSSru9jfjurxtdcmFPUPF",
  "key18": "emzALYdkLbSa1hJBkRfsjzHhTkNH5NGedL6vcnzCMT2rUKim87HJkvKU2Kqe1uwaD5hBev94JoZNio8urcLTLLk",
  "key19": "2g3YPxrbnEZshdt5QyeGjMpLgpZYV4hkHxH5G55GkmhCZmpVXDeqBrvxdwBgzpJZz2drf4p6N6ohEpVJwvv2Z9QW",
  "key20": "cFa1ieip62nu8YoZfEz26ZYM12Y5DwnQv3qJYmgecLYEfGEu6Z4B8qffJagWJEkRYE5E5ELUAXkScfbnMdfmLu1",
  "key21": "5LcfyUcMkTiymAbdFQSyrCKEZbgEnGycnx1FJSMHgVZMJ96khj5SiDrcTYWkTan5wrRCRNjtN5nNBDXsLQzgvcbe",
  "key22": "2FSfuFgfPVVwJE1Effoi8rqUfhVTeFfK9GsPxBsSHoiZ4U4oV5HWSVCWP6VLBjoYrUrSvcsFQAV8aZsveszp5cCM",
  "key23": "3kGyFFMuUCraDyvgYCdWyz4QHZkG8rmbEk1X5JHY8qQPpD75qPG532Exe433HdgDwrmUYz6dgYs6biC24CUdWnXm",
  "key24": "58C9aYTBy2nzfCWLNh6aoP2WRTGhbHn2qerBLL3VvwP6gW2kigd9DSAtkuLD7geX4ZJmadYCjyJ1BoLnGmbywAA8",
  "key25": "4hqznD2KqTkPZdmqoQ4ZdPYLPsXNMsQQWgvzokNJLYsBJasczwR1b7oejSkZ4sKMkCFCf1qbuEegFSezDiPtu2bq",
  "key26": "44dHSiGm1k3qCZXSEoDR1JSpdjrEumEJD7zM6TiUM2dXf2xy4fKNbghzKQmGs3xw4mHuZseNB9skhzwERrfzxU7c",
  "key27": "21vRrtNCs6dJcedFQzSfgjvV2PHFqvFvswbxDueusK6Sg4b3kGAntZnmAVvUBCKGeLrZrzecVkG2kmaveCh9BnoH",
  "key28": "3iHCTBivaseHtsLweWG4DmLqafiJ7pGDAD1FMADPTaBkMMkAfZTALKtuJajvc3odB56Z2yA21Ws6Fi1SfhSZL7JR",
  "key29": "2EZ3g8RtFSq7xyzWu5WniFsdwFPeDb1gYRVkgGTdt6ypXevxqYTK3s5vc3veShzLsRKoTpQPXHLKjBqaXrp7MW5s",
  "key30": "2wv8RXCyM1pEQQAUwR6vZNoh4e3Eae9BgVyHq2ktjdazKu9u7J7FEGT86hs4T69cRYH4wJHthnapjqj77MSyFE7z",
  "key31": "5XHh1yGsT154frWg8x534pKwBETZFbVxttg2Yrk633kMuposgDYpmKH4eRHVW4uayMzyndie3ZKF7EmNi483rpai",
  "key32": "5UWdwTYjpyJAdqeAfE67XTN8YAZZhRV1EP8LcU6KqDhZyvTGx6Da6kKnEf7YyXuBKJpAh6aYtmrWGzprpdYo7LU8"
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

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
    "5Gy5FPU4gz7dm5ah8iSxA1J4o5wxpgvuvJ2vQXW4nJ5UuqzvEhKsVBZSEU8qntmL1JunhwyCA76T9nzt2hcgnGfF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PQDeRKtscNun93APbZypERTSuB1SrBYHuv3RKnXDB2emdQ2c4vsZ47ryfCGpoEchNmnJnuEHYyVFnvMJBeHK25a",
  "key1": "QSVNCrHAAVL2VAhbErHfbfXSpKbz5x8LHZ6kVToWgeiy6FtUMv3f2qNN5XirJKEADmXvgWvtQ8TaETf7dta6XKK",
  "key2": "67c5xTXkHJP1xCqxCGkFUwXDgqCN7SF5zgx8KV1TnSHNwP15BcauCFPq4VnAASRYvCMoMXZidKohmqVhtFjkoAz1",
  "key3": "5TiYgBKgKanCXAeBxmp2qwMqCqtRAUywm8YU2b6UUtbGn8qxG1eFzvjPKTF4KoPsam4vXvVUi6pSFPtyUuCfZiCW",
  "key4": "4D9CU9ATY7NAbZSFzGV6Z34Drj3bd3oouJNBb6Sr9mdeb5C74gwaJgX8e7EeB2P2LKLyLYtJBrBMRmHepKWeJaDf",
  "key5": "2VJX9afmE2x3dUTGfwXaP3XPgZReCkJByKQSnsyf4ys7DTz4aHwXnR7d6upsLXYjZKx6T2ZcsWo3u7yfuNYcKEBU",
  "key6": "3x2xdUuC3Rcj6XL8ura2MHjkyqKH2QefF1pBrJcbFp7EU9gHp91Gkj1vUzvw4TbfwehDBBniTeSp9rD2FvPm8Vz9",
  "key7": "5SrUeuo9UGUPfzfChFx4PCw2AyaDvfFzEKbNKmMiUSAnVJRdMis5vpmh3gZtKPqqDyYSQmzhhXX3Mx22MjzVQee5",
  "key8": "F8yGY4HbvMk8sJuBw88kj3dSugYteSxnRSU9f74wMBNrDTUSrjrUNrRmx84hMZAtEn4noieernVAqxoecLnphii",
  "key9": "3bmhgMk9ZDhAvwgLvtukUnkc1wNBoH9cTYhaaQXdpcfh8J8EfWjcH6SuP5T28sjY65WyuGjkxFU7kGiy1h851Ng6",
  "key10": "2X15A1fwNdCVcfUeHB9x7Cwr7WnvNnVejat8dcMfW67uFmbosvsXfqQJcPR9N47v7Xcxo9GvyPsmWtJKBhCVY1Wa",
  "key11": "mZzLHQsWAfQfbfzahU1grHPZ6e42RAWagpzssKHDSzYj4KuDuMGGbp8fzxBNZdM15m9ywKLvtfyrp9wJse9WuQW",
  "key12": "4fVmF11c1Vy4bZdZJtF473w1anDQGiCxyGMdHLPrrxT8WbZqUJ4DEUfQmk5C62Jsuzo1wFmeivbXWmAjbx5mUe8s",
  "key13": "4bLrCsUDDowWqhZusxq6TaaMMSS2oS9jesVmVdhdFXSoaKjma2qsrj9rTFk1NNbPdUuvPhwc6eQ6DNhWnoj7kCRJ",
  "key14": "3pvqFSCeQ8Aq4Hm39w4x5Se3oStXDU9VXicFaSks8eiH8MehcJLfzhHf2mdPXPGRs9PDYwA3pXjEp4SVzg26LGq2",
  "key15": "67c665MMrQPNwYsKGJYXHNFhXz4TieXG6W3dUDjRipnZ1nSBSeJ1s3QaSiEfTxUdAVEbDEkP9nzbCb8nRdaEZjFt",
  "key16": "4VdVcnoZhRzSQFQpGQyRjTSJCS3F1EW1xaQ7UF8UBAHrFk5DgngqdAFhnYde8cqxUEnFHJyW3UPcP4FYZZWy1uMV",
  "key17": "2QXyH4EyFwCHMQr2eN2nhaNMPbN5WtesjcFV4mw8DQWn9RPAHkQHWTqdtNhUWrSRvjvshmq5xAqcE4tCUb7uyd75",
  "key18": "2weMP7YKaicPHH3BMR6MC8199VUVGcn8qKCqawqpWzEs524tNFWZGhXR9fL81NHCRdHCQkVDXvAm2WptRhyqWvir",
  "key19": "3zzpEmCrPHAk66FGf7CuqiVHo46hVMQyUUusuXfGVqUCc5qwcAKAHPM6sTQHdFPMoVgMazBxxy2koRzZP5vF1Q2b",
  "key20": "3UEG92EQkCg2smoEfGpAjufHoT62FS1YZWiKfh6iHKzvz54G3JxMaS6gB5neDV1NNV9JvTe1s4MLChsx6Z91T6Z",
  "key21": "4ipB1nXrcZ5giNhp13kPHJJcwn9R1bf2sxuGYfPo4qn218hZbW8ENRccfeFVPuNgTqmFdWnnRTTmBttLLWxNsPvc",
  "key22": "3dweuWb4zzZNaARGHNwNdJmQUDXK8kcK55Pij52HMiY3U2JJ3Vq8Yg6oS3Vp9uCZjnDeznAjMgUTM7xXg4Me5ZEt",
  "key23": "4kabypypgDCQiReZ6iNZPMi2Fn7crGgrRM1s8J3ULimWrNe7mEN2zEFsJLwi1vDSyK7pVeJPtqiznAQoPqYtQNK4",
  "key24": "2GhP4jpz6L5eYUZGAE9GGpS41VAWGJ334drYqUGwxTjYKpL2PBCQDc7TUUGhQEtjA6hopfPck56q6Je14BKJQS3u",
  "key25": "4exatEMgU2ddaiWSqCfrDRtZ7P36jRjgWxF2UYEbUJff9NXyXo2SiWamghgKYjAxDpouYZa1FsSTjKvj5xJUmut8",
  "key26": "52jMkuCJrC7PVyzodeDnZKM3a3wLJDZTE8LHkoRtQyHPixMZH9Bj673sPKRmX4dGKZHFMq39eyfV1dd7EapGYyYz",
  "key27": "4tTd28Acbcbz1GrXqhZkMxggtjt5GiTZoCbXwjuorbkmYChNmFAEC8nWh6ZdEvJ6vnUQZPAyCzWqGzsWT2N7JP2z",
  "key28": "3twWniHjcJW4nk7w7NHUBj3nFMjRdyEjdjS3smURFUfrSSRW6ZD9cDuRuHTDgm6sd7PCn6cvuQSA6v2kFaWbQJah",
  "key29": "3pWTaGYfxjLAoPdPTSUruXKxsjs3utkPrNTfuhqD29UuMVETcckDT8Wm3YqSs2iQ1ZSSwHbjjp3CiP232Tq3HkR2",
  "key30": "5BRWA9UAgiBNjrpiGFXw4j5p2DEdrD22PvUq9dfLYNx9Xg1g3zxwcgoM3R4X7FRPDsFhG4RkakqvngrgYAKH3VhC",
  "key31": "2kWvkuDqCJUiNC1WYmMKVGcbFykj9DXPdqc8iX6ZQbRqKbe6ZPnNi8g8TVcjbxfC97ip8uJEW7i3Rx7jGaxgd1BB",
  "key32": "3dCua7b8FNJFiL8QoGKapeurD5WkAfrwYDD78jcVLFPDjhQDyUsPwcRKhwALyMro32L7tosK4wDSCpkytkmVn9Ey",
  "key33": "A9PAhVueu83P14gHLxMBJHGErpMvxemP7ygrQePcLwA2V6TNjdAKkRMjdYayKExD3zdCCaT8KaEtTeRV8KS2Teu"
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

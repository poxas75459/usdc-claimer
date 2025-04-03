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
    "4r3SBu5dc1DigbaEQkqnYCjXaZ38auEKi2AcAyt5yYQ72cGdd4Jgfx4wT5z7KLsDV5ZE2hS2KqBDu8S4rCzC5Hdm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ggs7n8LXNfKCNJNtDwexcfebsv6gvkzTT2sfLcwe3Bgeg3kWu3CJAZuJr82SMzVn9w6Wx5ASip8zAaguPFBKXT7",
  "key1": "2aCb9mtHdAuPWtrwMKAXF7QuLhP6NSQwD8A8FLLi3tXv3uAyi41WGneFYTuqsr8LGNxTyg9k4rPUErLhdriCkqpz",
  "key2": "UpYGz7pRwW5xUBDXw5dF3NgJ1BpnNo9F1KbdmkxqfQHYe8YbVAvXcSp8cRARXRoraU4n57CwMNTnfvsrnPZyprT",
  "key3": "4swRiNMBH3NnyfX3qSfUJz8TAwd8VKYbFixi6WHCSi2X1M9k3ufbFSiB7CfYeEr3cCkD1tDYZKvzzZ3MpTaNUxqW",
  "key4": "Y1zUKUN9gsC7UkgXu88Bqpdb4QFBgYmTXSRZp6UoySiEiArKBAphkTsRkYD2V7grxHjgTMkYzznLNUficmJJJ7p",
  "key5": "5gMFx7PWtj1p8uqk21SWbqTj4G8oSNiWEdjcvBYwdmoE71orgSmRce3bnUGoaS43YVeam6K6Sfawm3RkEqQmABAV",
  "key6": "3Wq7bUcPstTLPTjcfhXam6hD4WScFyxzHbyWaVhJcscCsELC8oFkmzmb3yMTxMPaAwCpFXbYkTe2HJN6MdKbdzrH",
  "key7": "2eCdKYk3HJzoC9sgs4j1KBpoJk1ssPtRnKGE2aHVVg5vqEpszUEqSufB7Lt483wZ9vD2E9LSdbESJ7CupDDh5AFr",
  "key8": "9HVTTn74nMQyBx4ps7xcYY3vph2ms9Hna9haN5gY3Kem5P678bZ4yNuDZNbaab9Eh8DMVQjKdi3idKMSHcdBqLp",
  "key9": "5mTyz4QQHrG7wqCEiBVEDpM85speivsC61WBTfgcS529QMVkNfdcio4LdxWhhATBpFjAcAJoAqw3eTJ9ULpa4waK",
  "key10": "35VMHzhFUo6gwvKGzSvedrapPhZn2afo1YHMbVkesgaDzJimHfeof5CRytBjpGGqz21pDK9nuMeYCUWNc667k1Np",
  "key11": "4UdSyq7r9PSFF9oJmi3ZTkkp5q9cGXQArJzVPpkibdWvv27UqEUcwv556w7iWFyg7pC4ieEBT94patytvpCP7n4C",
  "key12": "5nEY98bX3sLN4kyhBGFQwfyEXZ6wFABQr6PdFCaNVibLbMJjG2kbTHCe23etLxhPEDHyqF2cHkP7YNreMPTWhEhX",
  "key13": "3i8B2uHRbUHnDdAE2AvHxzY3Z1hUb77betev4NYSVghThx2RhGUpiggJE2PkAHPiLbCebimukfxQVT22cmvJrPNH",
  "key14": "54H6BdBuuf89TZVDP6yjCyirjSWPMAyVbWG273UczdMtRuGHP12wKBW3ztAiEye854gvSMkpJockNwGRdvBoDWUJ",
  "key15": "3N3hobNmj9zXxHTgM6ruknvffygNCdNxwVAmPHbqqK2smz1aoZor6bRE354u45KkJePhcgu8RC67bsbmDSRxsiyE",
  "key16": "4a15nZLjMFfvycRdm52ESBBt8ZwgUyHzkmi367yEL1BnYEVVVBqQXzDd7gKjoqXoCEvyRrAWjFxn33KLi3dddikr",
  "key17": "3Q2xKbxKEdTyRYAR4e6dhirJbJazSy5qbrpr4WspssUnc7u1tCRMEnSSr7CovdbnC9SK1ZWQvPzH2dkREhDUaYwa",
  "key18": "tjxqG1CYcKda8djJhdrJBnzWYmuVAUsoA96trkVYgeMvaf7iyMXkb3EfNdeQJtZAB1M2FB66w6WYvcRbGAAMn58",
  "key19": "3wzkDmGcMVPZakkPwk8zJYXRMfa1i9ayCaHA2eYsQD1djxFdSyocpYncAd82tV6a7NSi5bz7pMCqahGa4VM9yTiP",
  "key20": "58USJefxfGdpF5fWPTeN3mD67BzD9j2ApZzdbJBbmtDXoSW4a1X31ifGsa9YDiRVxCW55tu1wnUX4f87x9niiLML",
  "key21": "4mALqgS1p5irJg1mtXdAC5kuryyBkyTKhNTjW27UZBsjFpoKc7VW9KDRoqYoEbmFpqewxhS2dayWQhgFDEkNiCMd",
  "key22": "2wLziPrWTUqwRe7ZvtshJUXddeiDHjA1WtaWBFU5sMQbBdoe5NHThN6Q4GnGFBzPREDVGhJ92RQpXtExVoYggCuo",
  "key23": "3G82Zn9snbiGLfAAb1NqzbqijkwUnKvQ6FPTE8ehhjPT1HhiJS8ioBFuL29G5cdvQjUih3UyYU7eYZPQNyHhFRYU",
  "key24": "32pkkMLu6KiPCegE1PrfrL6TrvrPt6GGfNpYJGQFXUdv2oRYMp2toMSBZqYoctrQHVrgCNBEmZjK8DLMVPfGhJc",
  "key25": "ZhQM2CGFkf7o2drAbhbe6Lv7RuZGgiMwsst5CJrGJtx6wv3H8f77aa86PcyW6ivcpwQzHCnaztcM5gdG6dkPp8L",
  "key26": "334HCVLzpx67nguwL4NbhN8PQsosPfEpwF3wErQftLnWU3PvBrT7LSidAxTtaxSbDTnW2NmwE7LVW6e8YzN5e2t",
  "key27": "5Pv32tj5DqbcqWjTa2UPqunt8AsDRdryWFV4CLxuWT5eWAEQT31xHL6wz5gAoxXDy8PLeNrQbEh9xPZX8CaCQqN",
  "key28": "5zzBRP3aJTgA51bjV5gQwyB8R2X4RzvJFruVooxsGDjkNECmqzqtQEuiLy1D9m7GsNhv51D9wijBvs5QR79VXZPc",
  "key29": "33SkvfEBmfhmrAPzq5hh6ZeA6kxZDuYczTdZTqB5BM6eLQAnNkd3pN6NgHmBQUhXx2JyxASaySr13NdzxpQH563k",
  "key30": "i4e1wV11LgA5qgag45ph5obRRkZTKpk2RBQGZmhu6RujA86Ph4qm779pv2C1VU5tCeFPDWMkL1Fmu5bRneJeDYQ",
  "key31": "4BSDZsbFcs5VzdbquSEuehsaQcJVWdT96e5rFtyGCQB6GuFs7H4bo716UBS795idAx4wU513W7Q3bUosQqsMF6tf",
  "key32": "4owVkyPVggeYTqzRFMCaMwkDiGhJDZudtzfqzNdsuCvbJbpGGBWD6dvnHjTfsYSP1PoRtNj4NU4CTYb7PvShzwu8",
  "key33": "39uc3f9GP3owNgFUGvC9nCop2AW3eckexcm9e65d7vJReF1dC4j8JWMUBe6Bwo8aBx4AwPrpULQeJW6Ee4NunBw4",
  "key34": "54EYcvNKCg15S7NBXYbFtDzfTiJxkwwjsXG8ex41NquExBC8iwgCKzuAiWm2rgMCqtcTHBMUVHuR5pHRa8NRFPCN",
  "key35": "hsCAmdGM3ECjKqJtK5ymyMX61DcDZCUuouyYPSAhXsWoXXgfZN53zfGuEKSqZuTjEUQESvCYQYj1JgDpF8yfK1w",
  "key36": "2s9VegSKsksGdAtaLci7dyJitfY4i6ZyZTDJRj5DwBADb5JS9De4MYhf9TfYmsSMh8TFEr39LjfQwCLRZxreSHRU",
  "key37": "5Kh3fvSxh3MMEiNfeFEcb4oJiFqP1doKm8RHEcncW56kL9TTxDXthJJB68WWRSQZXDbHSzY4SfpUas67RTgYDRMR",
  "key38": "3uxmn2uuKF7sq6PheD9KQTa3bBNJJWrNHZMdLzqoSuwv8F76b73GDiCeXdGHWUukvMdw6KCt9XYRJFWoXppGqzbb"
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

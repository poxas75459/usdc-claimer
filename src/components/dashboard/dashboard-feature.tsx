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
    "T7bxSNrHfk29FQv4SX2XbD2DHLYso5TPs8GcL48QBe5YoaeqWpuKLd55CUWksLPByArxGCnW8VLTayxm8bxnt6a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZT71pahaoQNbQFGiR7j1FiMzLjGYWgSsnummGpxUjEVL3bppC95uZJWqUGuUn5JTkdVCP4EwxoAwT77fnotHe3h",
  "key1": "44aTMARGgg4kUm2ee6nDCLzwDiHtoV7E8utD3UV5PYkZg6cQMpELuHhEcZpCdrhzJyLdFFECLr2cdWPKtuyGhRhR",
  "key2": "anRkhwJRAqkyEeAvTVFd8dQFBbE7QSC3WZZuEiqeQbCfP4snWt7domULbeLBA7xToN315rXqj7a7TToMwGtV5Pm",
  "key3": "5TLXPAWzbjK5PTQdSeoXQ6jX7rdPDAKatx3tAL72Hee2JT7axZwykJHpujExDUUyXJ8tMMqw7yUXhdCBcfdawVUD",
  "key4": "3xmdaC7wzajgLGQAhtyZ3EK5PZqHkgaVerWR15fmeduTbGPKMxWTCjc4CdcFdeV2eWcN7rw34u42dTbw4nmvTnFt",
  "key5": "2bYqoTKQqsW3YFTQJmiRA4vdWdVREFzK8BUA2hX4mtQqDyqXhM1XdkRTjEQABSbptNb7vmn7JuYPdYVBzDLE6jps",
  "key6": "61EE8H8M8ERLGz3qZ38Nue19QUAUYuAUMUJWXsSUJ6432XEFnxK7mTqoMaHWkv4DnfSuGtGKYNM4bNeYLQw6Vj9c",
  "key7": "ivBCEv4ZrH9E5mYooY1SPX91jBfUUuoWzHgiUBoc7wy8HVabLr9GBC7BAVReBrwFoJ3kt4Wm2JbuZQWqebsDBNa",
  "key8": "4NRLqFk87t3jpbhPDeU9dm4XG5KsdJNA2rym6ebCEAhoJPTudubnsUhK51uh3efMBw1EWZgKHRQpLZR47WSgNZq1",
  "key9": "5efSNvxPYKoG2vqjtextz7q4GQCG253hJXsYoaYdNd8KoZ1uBA6seGQtWSB5oBdATtZxKDrdZX6LJCVTshd9csQz",
  "key10": "64QxTZGQ53ajBinHebogtFcdhDkYpW19os6T7AqrzUc61RZJ55PyaL1cXsqVhyBPrKkjVTVAkkgiqD1LdG51a5hi",
  "key11": "5JKctcN6YnWnwffWSi2ZejRea8pH7D7twGdLtnyKy2vkhnVLqEfEUB4oVMmXLqP775qiMp4NJCej7wcJaExvpLkQ",
  "key12": "2etDocPyB9Rds1pCPeLuw4RkmiWbuDe7CGrm5kyAjehmLUhggXCgyXSRoNqNPTyfQiKp2mroPsCcxHib8ij2bGBq",
  "key13": "G51y4zUAeG9c99txQLGcosZEXdtWMoX56BEPRwm5WDWAFq2gXo5P4npQna415k1EpiytVZTWYB6gyNJsmoXQ4Xy",
  "key14": "2Fj24H8e8vEiyDneLHdtfuc845LGutr6WwkTSswhsb9c3Dgw4aFu86JPTdJAjEApqYSPpGSW4UUgiA6hWY2ZTMgb",
  "key15": "39LjwTrfPkYX4WXx2ySAh4q7QwpiLAQujc9oGVJsdqYNximTX4n7Cd9WoYgEdtHsBnE7iGKN6JtQXwVeriLj83V8",
  "key16": "ZQwQTzmqtnzAvs38jrG4bXoGE2ib8qzus4aAsbRrbg6U3WCnECx34Fb5qufunKZe2qQGM9aVCS1QpS1fXpFhehN",
  "key17": "bGCCp72yFYo3bu7jr2zDs47fqu156QtoMXtBRrknavmbdBLEdNyK2QH6ZLM2kZCBwKZwU7QMYgRZg458b2dor83",
  "key18": "DqwFUJiVYm8EuoUxs1j4wgSvro8j58Ey6pDHyFHj3C2Mieevw4M4Td3KpqVa1TJ8d3J7szo5AfaP5XUExMSaa1A",
  "key19": "p3kLehhiakqgAQZxn9FAcJ5mFFRSX3UWmGj6FVskhbpUVBnYv2hTGN177G4dBkL7iwkfgum8RwJ4teCuv37gdm4",
  "key20": "4q4jauHB5gDSA18ZDEYSmxSfJE2JeSbkC2wRJH9iQg93JavNwxR2CF6jyTMVBpjAxrM9DiXzNPuDdZAifdBcstNA",
  "key21": "5dyJVkmvbxFxv3v6myDEWW4faxMNTZxMQ5BjwnJ7fWu6FjYyR4f4vRroYk373d68WCzfsXaoDpcA8LSqabUzjMaz",
  "key22": "4pkvGVeAaUGZibdGpYSqgZrnbpEuAw66vcuMk6uBF2aiBLcpcmHcR98ad6AEfGanZdC28VYtGJpFdXkPxBp15cP4",
  "key23": "5S69RhgJM6VcK4Rr69GYv2VSdsMLKaQP8PEWQFtEXVXGFkm9g7itZfgPvv4yw4B2yQGmwuLUueHbTLEACFpvrU2P",
  "key24": "34Fd2qzopLJCUnGvKJk9QUNfjbmKLeYWXWtk5rdKNn84fQ5XFr3QhG2GYn7anxEB1qf1zvAfDzPKtQGbz9CTcmyn",
  "key25": "4QWwgrdjaQ1PKGTtfwsjRKUqhsQLNbfygdsfBbj17KH37vocLEvbxDARaqdX1srGX1twqwNfMu5yMkVfitr4gVZX",
  "key26": "44u4EbpvL1n1iAd1se2qQ3D6QMRvNm3RK4PiCDYcWnmYEoC9srwB1ThJAC2u8BqE93EMgXcBuATDbt4rAkx4z5sn",
  "key27": "5khu55A2QfpPEbtTYz21PV88DaXvFHPMv7DxJTTRREdkZtR8GqyUMUiiBeg2QsVAxnzUCYb5tfGC8eQL1fU5gNb2",
  "key28": "2JxHw2rPRdpRU7AsRALFdV92i19NSbhNAC41rnP3y1VrwqeSaRS2K8MQYY5LWeEwtL7dkUYyr24mpLLtqUqgaSuB",
  "key29": "3kU8Yea9f9rLoUmGh5gY5ee3CiTRorjke52MHu49rFsWoWv3SVgS1aBBpDBMjSeTTbddP6pDdCuxyJ9zzTLuBeeK",
  "key30": "4GqXhaKYCAAnBCeqb5TdmXcSqBwQAymSwdrmFL1CGErqbLU5mPotLp36Xn9Uao7o4Kwka9PY7dP4s9A3fCw1hrmZ",
  "key31": "AFXeHYL8x8WS1RAiMk5jC4dW6Zw9scxsVbqjWDX4ToASVwmy5DxbGwFwRkoXv7c83B1rjRDQY9pRaBWz1xM1mU7",
  "key32": "2TBbfAnCWAxVaNqLBxcbwLMbkGbuNs4oCCTzU1BKSbgu9PPApBhcKPYroa4vxSMNzEAe2so8geffMLS7JhjqnpNr"
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

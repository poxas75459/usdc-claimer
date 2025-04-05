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
    "3SuVY9mmvP4s1ksBWaFttn6gs9xDXKBSVT2RMbjYhZtjThGhustQxT2crc9mhPKfUhW1iNPvhvTgvnq6PFNoPiJ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W2THXhxHkT6vSobRWYoFdhK9kFQHsB4soNx2aYbHGVmoDnhDMih4ogbk52fpBg8LH7WhYN1uE96Kr74tyGRa6Bw",
  "key1": "5qCytCKmUDeEFSyzdxRVVB6u99pUND7SMCe8fWt4dk9fRpWCGvCWqGSTwdP1NsY61ZWvsgHEMxBqMMY8iUy4fU3B",
  "key2": "5zmE5KZVft9dh9DUDs6tL7ZrE6MZZZdu7H4nKYX9uVRDdnVDo9aBVfMfAUuapVHRx78NoNXgtFarTdWa7VxxgmJT",
  "key3": "3bFjrvUuY1nsY2nXTuKCqBxDQD89BbDR9UCWCPvXt6mEN1byYdC8xV21HFkydLqfjWXhL7RqyuRgw5YqcV4et6FT",
  "key4": "RRVMcEHFWsbUsw6h7dWBF7A2T44zSawTNWwpiZYMwhnKBY9A49VajtKpBn9j5Fk3AQVhaL5A8fZAjrjBjRo2LKc",
  "key5": "2J2rLpzRXedWNywdWrcaCZCmUvHptFfLZWoLKKoTKpsgS6yJD9DoP2PxmxRc7fDZbcjXBzDBaubdesXTy1QTSdfJ",
  "key6": "oGNVwTRyeAsg73xQB7H8Wvh2s2qgfkkeQR4mkMDabZUrbqaTFVzubo4WV3A3cKW26MYvrNB4uZUxDbQtdSgeFGd",
  "key7": "13EnhqCMNDL9Man2g8ziVdnX37kd33WZodVC9BTWqVjdqK84xUaQkdbSEoNmd66MH6qMiHnUSK5rK2FNKtR1Myw",
  "key8": "2QVAMB6jpu7eUKX39U6HycttidmKDKRqDvHSdftjWa1w4b4wyZEosPvE8bujoABUtxZ1M5UjiRNhgenw673yigyH",
  "key9": "514PpDT1WysSdU2xX14ntCZrvk2cjxnnRzk8D63xFxn8zWqnK8ToVvWbXecQtT5dNYP7bNM7YeLu69FzSBsFq7qd",
  "key10": "51URHp6HZCRrxiqDeukFL3VrdaBZGU5BDkKECmxN224qE8ymTwMZTw759fqmKzYe7hjTk5gufUCB8YV1zzpnx8wP",
  "key11": "DnweFS8KH42o4aCztqXKfg6MtsngKPP5hS2w7vRYPowDNoxbbBAduVDjrwRSSGxF2s2B9pkfvNpEeVjq1Ra8H6J",
  "key12": "V19NPuGGesbRUDN9EHGx5SaU16ztA8WSNMQ1Y3M4PYxdNdQKiEYgs9Yy6fnToSL9jrWDrbNF2s4aKtXkkbt3PQj",
  "key13": "5sCrJHHiNGA2iQJoGpPrFPHCcFxrg2LPyStYFB7pjeRBoSYgtpbHkQiE6NVYeaWBK1UF6a49WEFLQZkyF4koP6Be",
  "key14": "2Cf9fSUxcNRx6Wn3CNYkTMb2UsX6FwvMmwgbPSESi37EqhucKuNtDSS4HE5mWabWDgj17D1XGB7Mr22hNoijDock",
  "key15": "5F4e2614qG3TRaPn3EVMJutZK7QfQXbdsQq12uDuafi9tcjK15XUtuVExzhc2PKUPXjm9XjWmRTRpeysgehbFvWT",
  "key16": "4cT15RJY65DdzdK6RpVznhyEc4vdtxotMEf9wYu8QPGS1L7PcJYcLMTzs77aTq8REEmn5RL2hWyNycV6xn2QGx26",
  "key17": "5v9MqeukdJ94yjnx33bFKBthQNb9NTk8dBzXUhpQGs88pVm3C4KvzR2R7JgYMeE1jvhpo986tpwzhFAUaQnebS5F",
  "key18": "2URxxVvbuqSTkVVyctP56Mgsho4L1SniCSd71eDoENHVUoJDRJqLezAGeEDPwL6QbLqYf6rZ1yfrtA1ceHCxQA9u",
  "key19": "5FtrSHvU4jsoDxA9BhppMYK2zLiVGFamMVoatSgjBmqqN2p8micYgfWAbsyhh9PTeAv6FtEGEzdn3eJMtsZkz5Ao",
  "key20": "31fPhsFHw3y2sBpgC8Z8eJTrvJYG3TBQLMxMfEMtPRfc86rGBFUxWEpf6z7DggWfKYP8PBuivyd4YcbFyYFRNWcQ",
  "key21": "26S1x7HvxXdwLDnVx82UxFDheaDyHgHieacffWMbU63MQo3rHrDbjne2NgMyxeiKxGzJqzMRvTohuvFqsUcuDG2B",
  "key22": "5RTWhgUyPSWyWiFKYrbxvLnyhHGNQVS8eP3UmArX1K33nq4hEKCrYgKbtWWsTqfdsyevFWRArkdzFhSym6wJ5t5g",
  "key23": "4TN7W5PqE56wm4Ph3CJR6RFq566QoZZ8mhNXx2P7FDUA9nixdzCXJp38rEazZ8SCSsCN6is6Q4dcB7Lrq3LEPsKG",
  "key24": "7WXnpSB78VfChCPZy54bc2jyBm23D8GzWbY4Qu6en9YPeuidbXfwyXgCoKN4LZzSjNJ5UoFjtH9uey3KWdFiqxo",
  "key25": "4GdkWQqNUWRw3eyCPvapfs3G2rpNx4YmdH6vScbmdYgmxp8jzivQMhmFDM4VhnxVvVTVDRtCuVuRvxC6VsvCUcRJ",
  "key26": "4QDbCV4bdu1Py1aqgXyjoNdnq5yazcMAfrTkVqxU1H7jkcErXSayq91roQwGbeJENd8hKj9MeSYBGQDAb8s5RBLm",
  "key27": "4RbuPhCTJhpjjmU9LAk8CT8SKg1Umrq7CXinQQvELF5ieypzw5e2o2F4DrGtuSLyyP9bmNr2MJM9VFyyXJYYmCEG",
  "key28": "5huvfrJuJewoYVCiTLJQTFuZomisGDegeNaSNwr8fqrNJJGDJpvsvTV8uMa6prJaYimf2knTfBYPGsVJgbRt1GtH",
  "key29": "3UycQt7ZCjM1S3dC58iGw2XXSmM3Nn4Ps6yRWrsXDbAywwvsiKMCNe8A6SBt3Sxhdb6LZ45VB3gU7aEjw98VE7NB",
  "key30": "UpJkCEQDbeV4PXj5WqbcPaE2UZur7htzrHZTyLunPFPRAK8FGUuqTfCvTsbNt2Vu3QD8Fg6oHQXtHfvtvGtddGz",
  "key31": "5PFoB9EosjsqWp65a9Ufrxs4GKdLtVhCKc2CoMFhTQWneBLt9S56PktAaypJjzfMEvW9yBzYzko1VD8WJc46M5ad",
  "key32": "39yJByhJTPvEAuxXgReNgPqJ9Wewifvhj8kXpmHt8cJQRZNWyhXzX8ZfLeymZbercFPStiCctPyPp6VjwmypEpes",
  "key33": "3aQrw7StcDn2CxCtTDsF1LDocShZpc9S3JcaQ7m4jGhVqcCx6PGu815XqXXpDRMFed2pR4CGuXa3ot5qf9qSDK3f",
  "key34": "44XYZp2xALuEba6xnidF3hNLsz3GCYemtAdb11NJKn8KSEZ9tLPW9cvTeBzFeLhPnv3ZG5b9FmKb1wyZfEkJYtnk",
  "key35": "5GEo2RHYgzcovrmdZ7xALw36z1vpLvVcRQgDmVmZJEgL7Z2WZ5By4TYfhctey2hsDLcuy2Ei1Eyx6Po33jq6UZwR",
  "key36": "3KXfdMukawsVigk1eEZvzpysMtmScYZGEiYffK9b3UFM6HPcayVoX279ct6rT4YvZtKGCZ5B6jRCjtWvQLBpNTP1",
  "key37": "2EXvaUggjLpHbNZSZfqjsQo6ReFCSSUnCYFMVpKrHcs6MQkxwQjzCfeh8XUmWwqvCCVvB5LBLeriPt8FnJZnssZ7",
  "key38": "2qQpC345Kf3SVU3PMGsgjQReHPnMqUZDAausbqD2FMhFWRThcFPLXRrUFU3nHC9Z1V15Ce8YFGaAwryv6xa9R4dM",
  "key39": "5LrWtga1yQc9VFyQwW2WrkCV1ABrGZ4ZQ3fhzFkg3Zm4D3fGe9N26ZpLpv2aBnQjqSSuoP9MYyrj3d31W4JkDZhL",
  "key40": "3Bn75C5zHHWXPaCStFKrBKtqw3ozieTQ8asYpomwv2RE8LxDkgUWz7T1tjhcL1ovp3JVWw2ESEvMYCviMccZzBFq"
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

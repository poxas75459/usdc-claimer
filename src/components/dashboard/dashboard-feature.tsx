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
    "4i94LFoWBTGnH6Euudj7NARPMYSizieFcutn8YHAqzYpo7wSodz5FGjySQhH5ovtHm4ZX3k1iENPEBBDZgn53u7X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5K5E1ucXUSJTd9U3jwmC4QaLQeex6dh52cTu6kMG1NKvbTjn2p54Ectnmi612ASiUbikwGV21JgULiSaFURjYKfE",
  "key1": "4XWyhHm9hMnFkreFDMiKmyzFbKDYWMR3ubtTEgbpk2N44wdSYxdtFcj1LgcVqzsk48edBTRNvsowCPsBWgBgkCB3",
  "key2": "g6gu3yacnBzoFPggj2qewp7E8eQkx8s9CoitAXffFccB1URDKDCSDodBVwDwjZf9fH88CZhiL8TyggD5ravvCHy",
  "key3": "4rwXw4sYDrmoUXsX9Awsh5be7EHDBs5kMy2Zmwg7YPi9UaTJRDHtM6KxAGbemPVZhwyvcxEM2ffDrq3WcmKuk1AU",
  "key4": "YryJ1gctppjjah1SFBtMQBE13pcxH4DdPLm6iv8RcqgohcRbJwBUyrfXj1EisPCjxQ7vsi8UkVBKziuSMd9S5HY",
  "key5": "5MrqrGqZwGG7zEJfojrLJXrNHp3wM1wwiSzdaXZaV9BmVNxo1TTJg5XrV9Asfce5FC4NsVb3o4wKTLXbYG4aBmsD",
  "key6": "wG7SodG2GBW4fLGKzaSJkPgr5mCijMEbbBFzc6auVLkF8Z8ifZUgos9vt6t232yVDK5LRzWsaeKjqKMGN52FYqb",
  "key7": "3311YqzVgeu1ku33sH5ojBF4kChzMsGnaKEr2x5mNJ53hFdv7C8SyjnQyWJBaSPEYwYLVHFoWTccmFWNYSbrLMgb",
  "key8": "3x85uTQmWgqEAA2xSHCtoKq6qRPymLzcpbxm2w6GjA5ptQaDTJF6qBVDW6F5ShzHu44aEZZEcivZuymuWGamaPWL",
  "key9": "2xG8gckxPKxZknaVvXpFZjb1LN4cAKhe2fCkm97bbcTt97tSYFD27CePHuVZDLe2b9rjnLBJHsd8fv64DciD5haS",
  "key10": "2NDvrNzxD44t4oJyE7Fg7QqL5Nr5k28YsCYXQaeWry6DEmTCPppwAa9jGUUdJN1uEaZKaxExsa4x19iST4Bp7P2X",
  "key11": "5nQmqCwYDC9gDufPKLJByVwXTew48LuaXVpzKq8F1Bd9s6ExhgSZwT7v34w2NsnMvM4wBs5PfmXfUkgeKzBsAQKU",
  "key12": "3dFbn1zZuE1c7ZKp8buo6DJjmeBpmAT4bCyRr5z45iFkSZ9HWicMHyfZf6Eet3s8ezDxAHmcfP3R4pfrcG4Y3MZH",
  "key13": "4xQC99gVCpbGigytVesCzripW7uK7t2gc87sa1hSdmDBDyh8ViXGSWUfKjJZmtWN8BvMsJadbRvyhge7cxM5TwWB",
  "key14": "3M13d8u8xAmMmmHjAv1XWqQPfYe4hQWDXbs9u58WC8UsYgLVMXb1XSmbC9Z1pF5Bkr97NKDGb8Xi8fsqR74mUk9K",
  "key15": "UwyfZiuT451LXHXUq55oKdRfXk628gN8N61K2KSumgRPHZWW45bBk1LwdaPLWNxqh1TyvVentqmPcFuhquHz4cx",
  "key16": "PgSwB8jwDg6iuhvWbkQyMvRdzZvmEtL1QCWvJ3EHUFzsMAShs98JFkDN6XohQ2FPiDo7WYaapNqgAxw1T1jpfxC",
  "key17": "3LP7D5MNqHVrnSG5PFZusczgbPuRdSdtaErZhHSZ8Q9JpBRsVx5itFHjuGr24rq8zCpCoAHXsjRYp2ovo5rEfTm6",
  "key18": "67ZiT1HBmGNoREvnwLxW5tJGP5W5NfxmFPBjkNKJNpBi1bQoqasqipj9QfQBUWA5anfLQxztS6d7XwVH88dFh7Qh",
  "key19": "42ocJdtL1nA1ZuGsnhJiRC99hR9YAU2AERx9GnYioEKQFWgNKcdwUWhRuRDBQ7UR4QjhLa9q6Azf392Njp522dcF",
  "key20": "H5GouY7mvyKBpSJA7f74H6YFSDJHmRPs8ta8E2nEyzxGBX15xbHUhKrMKEZyCTyHTY3uZpxqwuTTsZNz7c7wbon",
  "key21": "3C7efmJ32BW2oX2PW4ERrB1ePXbdesPieboecQGGRWFPyMQLz61YnggHVweSxFqpMMWQwCzCZ1t9zjW8dvBfc6CU",
  "key22": "4uHkoByo176UVqZAj65XX8KHQvEUqnWeor3J3XQAZRXpgt3AWfKSrJycmbnYvfAKuw74FuhPgXTZDSypnXa37rNw",
  "key23": "4EnyNbxqok3HkNjuQuDLoARtTiM2NGpPL7siuDx17zqd2heh8MxhsjjRqmi12NVLwTe3guMSosYm9UFcSBJaPRfg",
  "key24": "4oBEqaKkxhyinQsNLVhoxg1KJUX9LaJ3iZGPcQoG3zX9UqHbAeE1gefLKRytXjQ9qa4o6Xa2Bxcu2aw2DAgqQMpd",
  "key25": "2qVwLrSDdTx4Q183SwJ1Kxv6gadanHp9hkF8WmAva5avbubYnSoJkmRv1xRbbJyc1FWn717uzoQdUg1sgJtAUEis",
  "key26": "2S1WvEkDMpwGhttM91nf9BkVLqvtgWvmi7HN3gX7RXgBe4EKECJXdLZUqip4zdAtZNSS9QAd8WVeTi1zYyJrf6Rf",
  "key27": "WbM9ZiL3R3gb4qcifaS9Qv4mXCzxD6Ya43i2GV6WteUsEHXSiD5vPDKKx16YjyZpjRsvEtMz67AbauJ3EZ4inHv",
  "key28": "4pc5reTkd4bw4iuu1rUHQrCySpnP67vVu27KqDbn7LNy5zU1ftiBpjTRFTD5EXV3oUWAJ6VTMoZm1SFbycJzJtyg",
  "key29": "xSmwRhAqMpSkoMuSffWnWsHaJ9kEP3v99CbkNoRf43pNR1kjfh8Dx3vvdtMWutunQFkXLhNR8CPd4r2e3mcRiqj",
  "key30": "ypVu2EvNzLHWdLDekuAZhEYiSFc6XuKDi1ukLSk2LAYpDgi8D6mtqjisainRzFJmFPYFd39DgE9u4r9igjCmuaq",
  "key31": "3quAAvgCg6iDQQiA1YoXnwuU7wznKfVfmCgcgT3HZJAoRhbzazScninG66TY61xSbnuTSstmeTd4mbcTyVqr174X",
  "key32": "3iLxD1KTaSkaAQsQWWvUAbUXSqz5vD5eANm8xJ4EwxMCRrZxkELRfbBMuCvG44fWMqveH4Ua3owesJ24h7ryQkkF",
  "key33": "W235L1DReZPNXXcVVVnzg8PfxnxYF6zpcSUCPb7QFDqDreNQGD46Dhzxgk6TYpVQxXHEf4q8QY6HwiNt4gtt1Fe",
  "key34": "PoNdGPNNyo2bFYEUsWVqDQBaxdzUc3UzQsD9apVGnHSrYMmAMHzuJRaxsai8Jzmew8eZygpu4mjf29kkEnYxo7c",
  "key35": "323q9oXk6cjidV6CaDA6Lrqt15zNVjybhNneJQxSVx3YxtzBXgp1xRcx9H3YeiyKqjebsJ1UauG68qWhf9pLs1um",
  "key36": "4ahZGE4rmfE9MAZSKzuu1SAVoxsvGJBWeqwsmSLoTXgeXftsFaJMvjZZuN8BKV83g4BSZnU6YGzk8DCrKaXF2KnV",
  "key37": "HVzaei5x4rZV1tLoJgvwekG8pYKVfVnpN6BZSwGkQwGwfdQVRw1e9UHG1rykJWze5xsLN6Q2AEg9a2TM892W2gt",
  "key38": "4dAtXGfytNgjpCipQJCUZ9gyqwdHuWLpwwYFEvKksJjuKZs5NTRbCtFdTHyDzBARceA9UuA1GEzEm6w8gLh8Ap4q"
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

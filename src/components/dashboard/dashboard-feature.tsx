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
    "4faJaPw1sFycrViLprjzGkcUMqDVnFjsjQjXf45t9SrT69bjcjzvQoDq8c78JhJn2yByDA17P5xn72UYA7jjmPro"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fvx1LAMQmL2ST99nhYkz67NGZzRLFvjjBtQhRAiV2soUgNN4epACemZqLqrki3qQvyK7jciRFv8H2DXfT3UjHx9",
  "key1": "5P1xQVN8qRQT7ceVrs18VRXyJAPbcEQaaNdQpc4Phrg79AF8AGGquQuMVGuRcLTioBKsksa5KV235uCWmTmpPwB4",
  "key2": "CvZ9fJetpzXNEi3F7CA49w1XtYY5K64vT1u4F4qU3zWZYi8hg4EH2o1Uy6PCSikrZSkA8oX8G4kjr5bzmGtZ6e4",
  "key3": "2VVQocRXbQoL6b4B45BdSUY9n3eRLksBHYDpRVzfeDTwJyXzrUV6kBXZSVrKnmnRi7n7NWKSCaXXFcV9crMtUYuQ",
  "key4": "3ABrppwwfuiqUuQe8wiDPBvxRG2Lt5BDXRYMpQhgtnzj6hPXovWLHED9Cqt8Vx5nPd2uCcA5U7ERUh3sA1pvbG7e",
  "key5": "4xm2t5fKV7pGXDqLLTVqigU5Rue2ZkbipUMCRbPVUUNURH2F6h1bNUHKKa8TB1P1CdkvLCkgsqdbtTFjq13zXT4T",
  "key6": "4DucgfWfsDst52zxwuhSLciHdRqqHQS4uvCUX7i7a72xcWsvpJiNekjhS2eD7ose1Sj6LCcxEX5bGaLkwWWg4K5i",
  "key7": "4CmAjXZzxRCcmCvABjc2uNtYhzGUrpjyDf8wHY3MnLt4BW1gsw5L6Nh9LwECYfwee7G4ASV82JmvmTPK4Rs6VRvz",
  "key8": "33PN6a56c2dHcKpHPPFxe4zrmfpNx6uRLsxVnwfACqJUG4Nq4SJEWjvmQxrfEBQV4NQazZhFhJstsgSEQUjgwwEy",
  "key9": "5E8emRqdXtS8nxSNeRGRJkGR1tgYVTYCjmS3EXrHptphP1sCFa1RysLCgN796XSHNeykZ22mcB3p8csfV8UUHfVq",
  "key10": "5pkkSF3cMix3xEw7o6LSSi9DAQ3RP1UkP5osHzYCubmpHAhL6vTVM6mcjFrcx1iMqu2c2qeGFPyrHVBz8zi5fsYZ",
  "key11": "5R1m5NuZRVC6ibKSHrLMKhKcekL5sg87WNc2vg9g5W2QRdukrzC9LytoNv7vdZBtbPYxmV6NfZLwi4sn4x1UgyaW",
  "key12": "LRLsY5s6usP969JHBHy3fSFLcgRBz5g3afxs3GK9p2ZiqiMyjPRVZDxvdmDDCNxXLuKrpKgvoLB7dkAnf4Q7jnP",
  "key13": "3vZVTbz5ph63WBc6pG6zTorCQkzSSYvrmgqHWugabqpb9hVKKbVtxg3L7FtypsGayTEv1h9KUsrNgQgMpHhJkqdK",
  "key14": "LKB2mnvpZCD73P99Zy5erRQpietVCXuvv2m2RU3pkHT8k8P67Ajxvk5w6YMxNGddEf43yNJJqLrS5RKLWbq7VsS",
  "key15": "5vcNkMhqxV4DXLv9KGEpg4oqqUpAMqpMrqiWqou718TDPJFF7cCJVTNkcyfpsbT7kZDBasMWb29Xfr8pAG8VB9Uw",
  "key16": "m8Zt792ipwsLMC3mG6kFBfKyFF95GSzvxY2wVWFLDcQKjkoN8EyuwgibXAVLNpN5aF9x9qZ8nFLu8ZtvD4B6Xux",
  "key17": "2pMftaM8iBcPzNmoEaidn5G4nMxpGSLkE2oDxcTws8wUPkFbem2UmVqfLTAmAMvdaqYtRNpVJAjEFfGbGS1Ggofj",
  "key18": "2KVq8UFQkD9aoESr372t2cmmCNpDGSRRm2zKRwLCKTG1xp23q2KZohw16Kc88AkcnnsXhEEq6hc6J8eTQkLZn8xS",
  "key19": "3Zp8FWeUxtcvF8P8tLdCtpDkdxLSL99kRS4Fgq7R75HFH5BKWZbYcr7UkEptcyT96vN1yw1Gs7B1ECsgdF3esxs9",
  "key20": "65Hzyk4USpd6Q58BZyKXPsPRtqjKeUp35vZ2VcxBCnfYy8MGKSf3MnDs7ikXKbYB2k2DZY14PTRN7s96N3DJADMt",
  "key21": "3fRwHTyhSdrrivn6CU9mT4fmBfNGDd2zgy6NAy2Q7hqP5hSmvh2ZnwTFFcuSZVf1bJatk8q4iXarkpdiEDrA9HEo",
  "key22": "63G1QWoP1wSRF4H7mS39AyZtMSyxfaYc1rmwo9WEYyMCtBgttJHT4LQpHnfdizVds3GojhWVECVSjY9YSBzpJb8",
  "key23": "9K6FGY3tkRE5MaFsWFUirDucEZdNUGoRRv9ALq1xp7cXMEAae8d9Fa5Gwx2BCfDYxuQqj3xK5zyRnRguoEPxqRG",
  "key24": "56A2R4djyVNktZCERZeyYeyT3eQepfamJxgoyDk6Mb1vtCncB2MvZ8Z47xWCpiBHEdKSsEFC5bs7XLAGZwJsnSTv",
  "key25": "5qMcfRniZNUyoRjkmf4mCTz3eZRxekqH8jLTtUsjMpuzSKXTavDgGrR6YiHwMWHvoEDneGqXmdSwJAHnaob1yzn8",
  "key26": "EXmrWsyXr3chYHxJVKe3W9E33dnNAiu3f2qkpTLBg7FKa8Td5V89fMTPKeyKVGuVFLiNppvjpxeZ9y3pR224GLP",
  "key27": "3xiy89AvsbcVdTtkRZryqc1A4KrcUeur7BgmZA9WevtPwSSVen98RtfUNbrLkJZEh8AHvdhi4gLovJDrdPST7SRB",
  "key28": "2i5PxMFrNnYzbHZpbiFrSYFFPpQd5eGG1GjCwyEqjyMRZdkWP5YTcx9GRRD8inumqveXhwSDN63tnVZbzsV7Dj2F",
  "key29": "2Ndsys5SekYUsj8M1nRF6hpSC9q2SqDFzXrqsg5v1B5fPmVNEJdMX8cv6whg24u2xTTdCe2tD47LE78CN7amu5Cf",
  "key30": "5LoD9N1DwgLkLdBpjiwNCmxwkuS3tPr5FyToXs8bbh6gp88aBELTX9tUPPzCGC7juQd7KUqSBiXjRUrG1yAB2LSa",
  "key31": "35sjyw9YLh4RwUQGmxi2VCYurHwZLe61bEkHSiAhesZnm1wQ49mpHvKoWGb48oZrSPDL72YVucs6u2jSDj5zNRNQ",
  "key32": "PmaK5mDswYtX5FAZAUFmuFmCFyaMAui1ewqcWhFQUcNi6zmiFQy8LB6eYCKWeUhtmmRqDKAA51Ec8frXyjN5EBs",
  "key33": "2xNFjidWEVYiftx7w1b6nbjzte1UGasGUyXifxw2tbv2f3UU7gajxSzZUmzCp9KvJMwDVHT6spfxsm4UUaTjFkYV",
  "key34": "SUwnEp2FS4aWLxmL1Kymf7sjuNnsEZWVjnruFUm6ssV6NYTr78myT5spDonRsN7qoSHtHyM5N1k86Lm9GpbhFpU"
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

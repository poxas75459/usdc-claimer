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
    "2fnEAQPkEUUmfR298fnVaWwQ1tvCZz2YKGyFdc73ADJTrr4riTQayeK7yobR2LwyxsAUkFpAfFbUxaHEcVvBp9Hc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E482cK3itdNek5WwPCpTi3jkVMPwRMzKGiq2KTRXxkd2q8qU5cDABD6Rbkp2iDPGKCdTHunNZeyiBM63ADGcmLm",
  "key1": "3fwMHvx1aoTibuQtdqeqYfnLUaCwPi77ghbNhtDsrvy9GYuH9RYMQjYNuTR56916GLj1BHQgnkEboAzxgyDd4dKK",
  "key2": "3kcr6HDXxfVErFpQVuB1sMDHAXky5t6vUBT48rAD6vxM5Swzb55YgtE44R36VtmdthCMQGhveChxQmjipi2vM3A2",
  "key3": "3eympFKrKx2jwtFYC2syrpqC3yrTzKijKCRCuK9GN9z43HmBHJFAYPDn8rPVqWdyoJXYPJKUh67WG38feHp2xy58",
  "key4": "3eufHYpJGGzeCC9ZBM3BQ3hxszxEZURR7AwhPA8tzULwoJartrQX4JbsfWDZsbYyc2Pn1zc8gSChLVnAnbAfERps",
  "key5": "2FJBBBQXyuWSFnCHaNgSEeWhC5gZ8xucV8uVe67hefXAdc76A4JPiXz8fLw8Wr9fWMPa5Wox8FmeuK7kpERNViq4",
  "key6": "4kDQYyw2f6f56nPfzV3NbS7XZ8BZsugq6QjPKuwDPyGAPWu7USAanuV8vzLVfsXWKuefj5Ldws1aAWQxSKHVFH7k",
  "key7": "66XMzwoVEEbp8zctvK1udcHPuxRac2XmwsGcy9qZfPY92fHBHit6mtd6hyjvc4HWvbYqqahHAn9iq4ax8XhiXBEm",
  "key8": "EJLZ58u1YH7E2eTCvDsXkKZncN5bKURen93EvVvwoA3xPqK8HihQ69b23Y4bVYse9G9s3gBgzDLBex2W4dkPyuC",
  "key9": "4QXfWGV3ZPHJYcKUD4x3fwY4EjwVn4kEiFmw8Y7sDhc2ozbNS41wp7A7JdGovAuHXYniF9UTwddCMLMJumX2DVU5",
  "key10": "364FVd64bqi9Fj5Lm1cyQD188ouvGGDXVVfBDbSzgfYm7NDzz2YWbsJJtU1CPH59EMSUndUoLD6Q8JapW1gqZtwX",
  "key11": "2Gy6Ekg4JXHBLfX9aWLbumqs4kFNzz1ntoyyfkEmxvuhTBV4bY87iCmEstPVo4Z5JMLxmbSeC2FJD7TTydSokdtX",
  "key12": "5ENUH9jBBhgzK9ANKL8uRQbBBXDMeVS2qboqNwW5ouyyH2EfowjcjunABLZgAcM1h74LcWaecDcGoArKmVpR22SH",
  "key13": "4bD1qCodk6ZQgFbAuWJnD45evtKYxzyVHSVr41u5AGdeGAb3br2ga3sXrpHZNnGsZhg6yctoQ8M6c62wRM4aByCt",
  "key14": "cBVWjMvu9AThgracdSkj2Dtb73NunmaLxBopwvbN3wNhAetaWkdda8sjEhtWcheZM8QyEC6VsJdqaNcGq5E1YDj",
  "key15": "2HrmcemYhaWMyBNQVbiLuiuWDWhPfu93hde1tTiRvim3MFdWg2rhgfjAvEKpEzQw3JzdpJfvnnLnCEbHpL3aj8AC",
  "key16": "2HLrSYSMM4BLPmRhweiY3HSChE4E4yNZ8rwaZcgzMMURoA66oEGZte3aUqbwPhuBQMFAVastSq9cZRFtH9162eDs",
  "key17": "Q5hAw7mVBHptze4SWwtJBfNuhcJ2cw7i5w3wsug9b8MeMqdbFHzsYsPyxYuHpHBVKHwnsQXp8o5hEu6iLnxaiLV",
  "key18": "2PPLkm55818kk3EhMT8B1b9kLdL7hmfubvLEWr5ckh89LFzgGofgYkDKSjf44zCmGEVHKvp6vC3jLifvTauUwGou",
  "key19": "2RpHkggCXoVEK8h8ynx6gMtjyzfxuFyT5gt7niJiSkmuH9nHDVCGXNMYQYWxpMNxw9EamPq4SQVS6mHX8DqWXL9G",
  "key20": "3TNTj55AaEcNiZto3HLXPx8mYUX35b4XD4orPHJD8J6vVLcnP5GeooMrumDSVRWF9kAexqivDKJVCd87oqYRf4ed",
  "key21": "KRAvYsSLEACuPcMtwKVcxsM2dLbBDfN14Rk82BGkXv6H86mGdPgj3S7fuKVMbMJcAeNugskPVP4EGo9FXFV9D6m",
  "key22": "4m36shMcYG5WGfX4H74jYhLCgcut5wEUbjUGnJm6YjReZAvgJKyJ1GU4iowA5cd2CuzPveomjCUGKnn8VMmVp5b5",
  "key23": "5zCL8eCQk8WYEivaAzZ5NP4NAujSZvfC3tsNT4mUP7GwwSc5Y5wL8LYyEheJESHNGEXjwy2ZSALXYLziUpCeBUfa",
  "key24": "5YGQ1ynPrt7Me3Ecv7Dyp5BQYxY9H24ZDiFhRCAko2bUGVR89jzHVBbmKxXD3m9Yiq7gqMjAtyT4FdEkqQqTwQ44",
  "key25": "QgtkCKZratnsS7T3Wd85eGsxDXnM7iBuAPL44MVmUeieWq51vVk8QWA9fkPjnmAwL4pK6jSHtRniAP7iZ6e37fm",
  "key26": "36K8fCM1HhgWsEUBypWr8TiMohDNkGLuCD38gEpx72DdoKucbzXKrKiwEuVPyHQsYZ4euGBGtbFTsuJArSjoNEpC",
  "key27": "er6XzXCC259qb5RGyWh4iScaDRYZznJ1p9ENNnLBtEdzXB2xKubHHuuTmj5ejaMLxjqUsEBoFsELbWx6ona1inT"
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

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
    "5qYqwVLnvoP79KKtcgUU8yqJnE9Z6ei54HjJQwda59BjgCV5NUHYGVGW4SKujDVPmPGCgdJL5gpZnaeE5LnM2P54"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5h9cakFvG2a6Eb3nt9TLcP8n9Z6FCPGgVA62uQdZZetVcSiDGzyxAVmUtjt82qJE4xq1GVjKmKSW2Yc3kEtVFts9",
  "key1": "4dTLSUVvNmodLRKpW5PzC8TeFXTbaB6kckMyHcSPYHtpQ84jGynhFY1shEHNPMYwY5tmWfpNu8pCBaSup1Mz8Piw",
  "key2": "42jS431ATnBzFrDo1wTwPf2nwTR6HRJMgKzLpDfA47cEpBnjottXt6YFzEeewDSsuyFP6EZQbkqH3GDSh5bVJQAQ",
  "key3": "UA9skDxvrzaYagGsLH4Po5kKhhgmgv9kjJE3o1PArGoEeGQXDf3yUhgjaW9kMDv4ccmfpPhL2zsgTJYycTAno6Z",
  "key4": "3uXVg35GxvNipWM1T1UJuEjRvKwVSr52BBn4CoPPZYfq52sX1fobjmiop4YSsFjMijeqvYhL2ZQu9ZHwAzAivKP5",
  "key5": "2iw2nKEfZJJShGqjLb83awu71zxqFedMkMYVJGQEor4yNQgzfW7SUDRDPpdDS8PhjzYKnAizyt9NcSZaThuv51rF",
  "key6": "3UcZVHGeYMP8vsVkkytEDZvLq5ryxLBq8Vp1yugahnadbYPS3CMVXoAUTo7ArCMVn2BpKPNZEmagFmT7T7MVoNM1",
  "key7": "2DnQS6DCVTa39FAg2JeJmyhYBPsRobo3aHGNfFQEQAL91SDqutihR2kXuyxUZUxd7yjrejamBL916ytTpbgAhc58",
  "key8": "282iBgN5m9TCv7erNyjmfvz7X9XD5FHYd8iE2UKxP4bx33KTLrxNUNUqPbBBe4ahCPBcVqyDzJ7zaX1qtKwLUiTN",
  "key9": "3jPYJvyAJ3rrNqE56wZtakmh6D7JiFHFWbEAUiKAaLZCEP3ZMgVzvxu83urrvrsvoD9obneCqkPw7yedLnYsEVic",
  "key10": "3VLDojDatvmmXGgsLvK37GCkBQ5PLP1YYZ8L8rMUM7jxTpen1EG1eFPfK9kGrdexA4jsR2eo7WSpxeieBPcNympK",
  "key11": "2ozQEYpwDJzxtTPteBKem7bg2ibKggv3aWRRVUTRoNMQ5oovmSdCKE1eY4F8ZPP3Lp4F7XUn7kBNX2fErDpsa3az",
  "key12": "4eJjUKzrzn318wubq4o2sRDXeLQsS96FPSx3VAiCdYVM4keSnArxiNMBxGafsrBLmdiAqZRrbyjXBteTfhbsPKc6",
  "key13": "2yYKooHuG4DQxeZx9Mxs1gYaFcUXo1rMXUSqw8eTdyMhBdnKHLVYZCigkmTH8P1EeCpSqpj7kwfZhttxe8VmmYfG",
  "key14": "5g2jVrM27PWx2vjSKAztKpvphTTMTCvwCMHRrRRX66KCbfXkftxyjgiJwPFPhgLxvbJnUpoM34bSiB6e6FJLw8oj",
  "key15": "21TpNu7aszLguJZQG1P7SaoPHWfw9vnRzyr7Tg2AkaZCMpkEtHHUwzhUGPUr7H9fcV1wbXzkdDtSpQJMBhi9KZW7",
  "key16": "2ZDAvpJTCZUExY1hrJ1xY5JEjXiN1Mipy1kqR1b9DdCE81MtgXjLXa6DRSLHhdrDfR2LZvJ2raHjTjuY2HpXY7BP",
  "key17": "21PZ3TD1YrMvpLZoQEQLizrncw4Ki1QhVMgzMWbPNZXUYENzJ9KmHnm2XmB6NDDCdMpLDpCDm154tsEMZMbmGTFi",
  "key18": "36T2iFCBfv6fGxHPq1gHnaJkxyAHroVMgN4BzDgkvH5ox9r2yUPskDsFAPRPXLVj9diJ8a5YjArDHaVyw6zxHBmH",
  "key19": "HTHMkwYECUBmpLcsFfQsLqdsmE7WzmVBKGN3r58Qk9KcrDJdWM8zcpG8v5ovTAL6QQB9sPAadeFK7ZS8po78Lag",
  "key20": "Ld9m6ouybHr25YDWe2ADmJMMiwFmExqtmap4CgqNV3N5rHfUA4ACXzS2DAF9HZ2GXoX9h3riZiRsEQQdGpyhzVC",
  "key21": "vmQXAsSYuAGnsKPK4wtYrGAvro11US4dL361uG6FuWSwmr65Er8x5eXoxEbpwSYD1kn1duWiTRsktyeCUtPW2iQ",
  "key22": "2dA8CTv4DYXhvy4E5uPRdyj2r4AaVEaRvahLuZjLxPQ1rknm8jgxHtP363wH6HztdfaHZjYkbwMBimHwQA3kFCd4",
  "key23": "7zXowAjkb9G19zrYuimqRuMUEYtY7sRzmeNxh9R7MQs5m6VBBHpvfsJs357dSMrcxSNtMHKCNwtpSSTHTfK7kNp",
  "key24": "3YtJcwU3iGJeuGomp3ovnX5BGPA5RKcAv2c3KATcUWPDpSJb9tLcqJjX8QQXP3RdukfaBbDhZnfZWSPsXsutUYYh",
  "key25": "t8ReiwJeFhN4MbrruZbiFjCwEDqA8Nmt8t7St8hjYVyxdzoQCxt3MktGKFeRuqyjbGyodXjG1sKc1stWzH5MFg7",
  "key26": "5GQfF4vuNj8uo6P8TUra6kvmAvW1TRnvJah2H4wwu2JKj7fzrdTp91PKun2gScsgh1aKREjqCRs5TrgDRME68Jzf",
  "key27": "21aXZ2D84HSksvwXzq3MZoYR88a1SPET433UuE5LfupwzJD2NWkSquXDtw2XepmU4iofGNBdU8A68usXaSdx1ZFF",
  "key28": "LrrDx2Mem7pHZ57FGapwSP6W9vi8589FMNYXPhjBja9iRyMsC8Ev8U983Xm3C2cdddaMVzukwyB2WJTQKvUEgw4",
  "key29": "59MP565xFRmNSupnYNaizJHuWs6Rw5szJbyKWLpHusKUbUofe9bMpySQbFYYiJVBy9wtxaX97GzpbRuWzz9bWvUD",
  "key30": "5eFrFmQ5HLu1JTaVrysAQ2JjN8uZ4EdUdhMcKdgC6so9LNPLKbUKf1h1jVyCKASgHjLoxwXASatLXpoqz2gLCaF6",
  "key31": "3indsXPUpVFk55XPcrDZx9HaJTGjJwrWfi8b6GxK37PM8viUWDtURnjyZCMVMokTukaMu9kuXt427g88ZpcqgpLd",
  "key32": "4utwFrC2SNXxj5JFh5CfHMBrwNvsH3jxZdkHUgWSnDcBvrdBCVdWGkB59d5LXjkXYqtUvA17YgadZxo5sR8T6d22",
  "key33": "5oJuhNP1Ryzdooq7NsrGjY8faZNYVWmoZ8DAbnMMGcQ3qy8w3TZkTtwr1XkTegogpXwJpGVZDdqYo5F5MuFQg8jL",
  "key34": "47SYnT9LsrU1dyEHyQBnWyERxTUw1KQJjiUYunX3zMDgyPGVByS4MspxtGM6MnqZCRBwEfSynrAY7hJ5ftqPHqH2"
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

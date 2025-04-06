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
    "5iLSSCu1S135NeNDWKJ82QYaYW3dDXdD8CCPduxe1CJdfJF3B53cw443TumT7RwkBvco4dSZXwWXmH3ZZr5LCcDJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42Zoo5LX434Wj3KeJrhK6Rsa9CqTFAfEGFn7Tmu49M5LY4fYHSXdsmDUridjRhCAVpwy3uxJyitSXZ1dcaw1Z9ke",
  "key1": "4gWPRgnXmCyupPRqSGz5MZggGguQgPh9SWehuq7YN2ZJ5vwdydBPWAs2tpuFjBt6pucUzqB8RKmt8guoRhD2ij4E",
  "key2": "2RWPogidFkmHyWNBSdjtneLFgPazpQQv4zuNBMg8cVztUUQTKno8gP2msr4JABWiN3HUNGgeEqj95pku7mGThdrn",
  "key3": "51NVk8hi1LECMgEUa7aojJb5eDyXb2pcZgRut8fgpmYVjQCTXmveRsi3oDD6egfGAFp9jE92rG1f6kgNLpEVDhkL",
  "key4": "3ULY8s3FJHfP8fNG7GLkqjBj9w6kmBwsGCGA3Z4PCspwcTpTfwy6PMszf847ZQSp6o2skciGTSuYZTjt6nrj9FbB",
  "key5": "qB9WnHDfjgrPXoRhCXKvLoPB1jXWfrcQk357htsD5qx5z2ZTFnNCQQimpjd8BWste6k3wSggbPUqsb37yZT9WDU",
  "key6": "3EU2imFS8p4bFy4UNPf6Y9QC9m2G2YWrLkkDJkJcQQmayFFgGePVj4LTgoegLv5bDG15jxpKupxdjhoFTTEMf2oJ",
  "key7": "3TGMwriFYgUZbNztryKMepgYmMzgPUG2DjuMBQd3efh4eN62c5tPV3oYLoN63tmNghmbHJG5oP8u7oPpDx6LTZvx",
  "key8": "3wBcfinsNFTgXgwLQs87qtd3tbaH4pbcEGMzFKPEp1HjbocKEDAQsKdRq4q4qZUs4cE1dFfbFdG5j2jPozaizFev",
  "key9": "4kugHJUPWXGDT794hjKQi298Jc4fKfnnVyPZe8SicJ862yzcFUcyPtBRxQ5ZJdVDdpAqbAhKoSKpriSLJc5FL8bp",
  "key10": "9wB6rArXEeG3k8wE75GVXCoy2ZZtVoaWjeTbrihjDUezUBB6uaVsiGmeGGDsAyqcads4StUwB6ntxKzhMrVcow8",
  "key11": "3whC3dzpV3qA7NEdH84S8JmKLkctUYTYhyi6Lc682D7VT47y765HBt1AhWPAAPK667wgQQ5ieQ44Zv8NswoLhYvA",
  "key12": "PULDhTCvbtKms5R8CLV4jPvepbQAzfeXeWDgTndYJUyW1KhWYWqND153av8XYQRbJAKT2WHaD2vLA2eyeW2fQSu",
  "key13": "2ciNFsxCJzwG9h61pZYLyceBY8aMZyHyU8UDSMry6aULQ7CNxTyASFsjfttZDKen5U9xbZ3jEqfWBaaVUEfm5sa8",
  "key14": "5Le6dN6uGNQyPMLZtKkUvJsio5QEsBz6ZMMWB5E2qugnhGt4ZTtP1XDpyQi51hGkxwvbNXDzNXtHLZMrDYQCym7v",
  "key15": "P5g16YNV9As3Q5j3YvhyxxLkbzwPmEqdtT4T2oZNeg62Jh6U8WEQo1oGJYDDdw4nqJsyWrZtehRyW16J4RWWSgd",
  "key16": "Nmf4ZLvZwBU2SMzjBz8nxEqHp4RDTWaijah6LBgMeuBoVFXEQRN14C3SgviNPCcvBQZxpGYvfxC4Z9WEJ7Meah3",
  "key17": "GKQdcgZT75UjmS9wQMkvy45AcAKD5xbPZ39PnwLLt7WfbiueFck5kEPtwWniuFo2LystRVtpWyiRHgrCCVJRtXW",
  "key18": "5UoC8tG6boP9wVLV7DkbPh2Cag7bQP7EsVHYnE4AiPvuAzQ1EdrEzswzoiW39F3mxMznCkmWmPyzrhibkfZEBDJq",
  "key19": "4JXYz3gMm3tbZ8anW9Y4GdodVmYsgvByQYkZyASjytnuK1U8uyTPrQhqJGQAGrk2cgg8HzZHUc22hYEBFNsVideJ",
  "key20": "3mm4xhYAKDtpAmzPhBMpSWG1xP44AX7Wk6CRr85mGN5ZxfMKth2m1Q6kNEpHsz1Prjp841Mj5b881xrj6DhL9C4b",
  "key21": "3h8DgiVJo4ChwDVjUHhfmnt4ZYDntsMvHpHrBLuxKMQEvU8L3PNzSWh1jkHQUQo5VUtKJqSNZRqsj4r7TmwJy4D",
  "key22": "5FY2KZoT2ZJo8DWHmVxZETYpPzcZrqpvefQ3DzEzurqAb6EsuvPaCMSLe9c6bq5sVr3xo1RsdqTuTgR4C2gdAyue",
  "key23": "2XTbwJNNQV8prv7FsfvgvwTM92o2ruMef57tzs6yGi93Wv3rX26d9Q6LBDEXj3knrvDvyNhuf7CtXNthaEqj793S",
  "key24": "4HHfgKXZRbD9Jg9iXNuwTNr3Q1o1govX1u8YPNQsJZBBM8BpzwAmJyYJyreWEcK7GfVeYrVNBnyLHCqkS8pjo4qW",
  "key25": "4ZxEFjfXPoWkn5rWRvAMc6oYo85RKqyxmBVXVRTeEyhXwUF65Mg71anoG7fuoznFeHo85KfiXWwA2mxNZJkxKnit",
  "key26": "5tivBXVbbg3aoJbVLr8KvXxX3MxCqckZauvNZiDbz74cmPg7DFNcnb2Ha4FHWxL267BGcSHjoCcjfrB3mGi8buoV",
  "key27": "33dzZM3AQKnMa5iMTMBKfcdjKJa3WYMJs77tJLXw6L3oDK7EfWxFU5cGgpRRhZGjCzVTMPtPN7CFCXLaGQECVE1o",
  "key28": "2zUbGTr5cPwA7mVqb1r34wGTB4f8xRTNxMfUWFrxSsHJFxUvQ3wFJJgCL3wyfLSY1C4bjh9QPoGUCsBawrai3eZ1",
  "key29": "2QhNF2DmJrjE5pbxBwqKRMSbQR41GSG1fkKVbwVov2nk88w6LXnKAGFb1C3vh5fGXDW2N5FRmxY58MzvurhTWDNp",
  "key30": "LDQFGnCuRbByxwiKSFa6b64DtdrpN9EgtWfdHmktAopr8NiGz4i2TdgD8hxu558qeanALHsSNZvzeFKCgtJG2rC",
  "key31": "4Xwye1FsF6ugA92KniDGJqDjRuHe875TFexcHNi3G36AWa2ShiUmRgmt47tX3X6g9iZHhy6oJK6Ym9UaYijDAPzd"
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

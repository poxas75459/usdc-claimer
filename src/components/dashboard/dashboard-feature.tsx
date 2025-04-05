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
    "3yH6ZZk3YR95iZyiYhwRWw1HgD3KSLzgYdCSNRLwsXF6mVkhDH7tHeJ22B668oVHfpdvxiJ9CYVndTzJGB2HaXv2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26ua6RrPrgKszpEdfsiUEpxhWSmScx9Uqr6gLHXtw4VJbbgKn4qtHuNbnuiDKDd4TqVVddP9D2FSbvx93MBw5sD2",
  "key1": "52Z7TNQcSgz5ZN3dx3mmPGfBGwMi5Y31eAg6eH6oH22WF8dUVpa8Zo8DgAvo22Aq5NdocGYpJwY3bnqzbR6Y1yoz",
  "key2": "uY7jYqoGEXnbeaLo9AwwuF7QLUQMmbbWPPVCwTcYeq1PLucJ1SFYTmQwdt8BUa7MBuf7M4A6ig2yuZ7v8NzF1AH",
  "key3": "34TQqUsXyPN8Xbcq9r3TbzdHB4kdLoL4ECr3yozFyfuzyXdNenUk6wZUPsxoWNDzbkcXLJnuf53C5kBpyWzFbyc3",
  "key4": "4VjLzEVu7tGiCyFR8rDsMsh1e3V9L6J9S5w6CJaKufDPCdBFRBouEunpZp71t9aupEJ4bKBzu5hgu2o3xJ6Kxs75",
  "key5": "4ME551eLc8bCw2cQG77A7Y7hayeUtJ4LHnAK3kRwKb7b66zrHp37Vzspi9Y1vEfSitabJR8T5fNSf78rSqMbiMDa",
  "key6": "36snMZUn9VE4qA9vCiaoiG51XDboTcDJdPWu6JmCRzucwH8CCbs4zuJ8KugEtLHL7dxmsFKD6zDSUrPMQzHra9S3",
  "key7": "5GEi851QBphj61j1TTAdJsLzrFLWDmSAsbnHdCbMPtLvhpbpA4U9Y4CSjcngZBYWYjmJ4RSXWe2nid71772dnPS9",
  "key8": "2ky4YzEdazg9RjqdG2XZF6gxE9Gb2L4tKe24p25hfxTBS32YoJjLsJW6dJaxfLjjF3q9or1dxaKCC8FxUMB3KEyM",
  "key9": "TYVJFujPY1JzKMcQvinXYMkwc4ZXnLfF8Mjxd6DXEqwB759u95sypXDuej2smD8EwUjPFnkLVTcW9CG8DKAARjr",
  "key10": "r1LPrhHcY8qzPpqB1RnVsAtCBWFZGD3v2AfMaqacVMn5XmBzfowvoDJLQ5ibWkJw1TfMYTbDSBdJvtscCembR9g",
  "key11": "56jthC2uvuTv5EaxKiWutc3MQR5kLhh2xUWJ3oa8Qs7aMFZknYs7RkReNZocrp5LhrqXAhTxWN6n7MoypQ6B65gv",
  "key12": "3orZnUXXAwzzEVa3BPKQEh1JvhwN4JdqP44tQ9y3LcFdYAPA2rU2YKJTUitVT1CXXTUzzT4a1K4kHSYLtZwpZPLM",
  "key13": "JYaL7h1pPz8NZCjL4VBvqytaWJSNGFz46FMQuY4PhYTvr11CksJkvsyA5oFAAS6NBY5FKi5YcnBeAHpr3NYBfUW",
  "key14": "2idosauFdPEMEvVVUjrsHqkGXekMC9yHZg1rhc81dKer18NzsJnkuHM4sCuYrQ5EG7rCZURcAPpFkWkHeC15Adc",
  "key15": "62HpYVRc35LvfUoW7yCreKqsTg9cnWCJmy8hc9NjgAdREsnEk6tQLJsJXmS1gWZ1oFDJHVZ9xrur3cN384HqhqJK",
  "key16": "VLdYwDTNvQoiobSF9pzjJJWCuiBNdpze2REmDZMiFZftpHqbq9P926Yg8VHnqeUcxK7mxsXALEytzFTZnad6BWr",
  "key17": "2rDPBKpSjPhDmHyUqZNbGxqWwoF3L9jBQMSm5SfYayYT6Qg7G1UL2xtLxT686WN3GSZBmzRVKxmr3PE7kSQ5HBdx",
  "key18": "3N5CB8cwmSd7nGzkVCxyGZ6LqMXoHf25aGNe6WT62nYcWRamkkC8wpp3M2hiYzHJcPJcLuSqygvc4CSwKnrdmLUa",
  "key19": "kE95apmU36bnmhfYc9fRMXf4NCPVVXut3eq4dvRFfs7sHsmmTpKs9HCCzcmCfMTv1HnjgXxV9hyj3H5cbFasrQ6",
  "key20": "2422EgLXx8isZiHdjagV1NUxsDvDc3W4e9RgE3tov3C5aSF4G31EjJuKMbQrQoCtJR33Py5KFg1c9gUkLfqRXTs7",
  "key21": "mXJEmKvb7eLvNYrCXz8c91SBj4SHZ8whteaYHTh27WCFEGDs5tSpEhsiv8cJv58NL6B6Lh7hirUsmYt6Em6McUK",
  "key22": "51wAtSCHwEx3o6onViZi114tLcYVBaUVi5Px2TxJAnWn8oZuEtEKqz13qcBokmFzrVdsNQywHoxFQ9zFaJq19Un9",
  "key23": "3zWTAFt8GmYzeLqjtQU1eUU5LFDf6g4D2q78c3To4ZrNj1cnLgX3EFsPd9q5GHmUqFj5o35a13Sjup1S4TuBtErK",
  "key24": "2drpu3z8EADrJikWCnoSLtGgEpbYP32MpeefEyxhMHEkUHp1rVPRXTtca4bPRGrtmVanXpqtyY5zi2kPwXHWLfnK",
  "key25": "45wYsM1fPj6ug9BDXSU3GGAFZfRopbdyKDoXZCNA7LJKVZKPh8mDbtuuvpYj5Hm3K4QfqfPbM7psRczMxc44FvRV",
  "key26": "s1yLxje5DGztXdRkKwDi3rGsLz4guauhjJXXLWFq8zjAC2twvC1ZMerSFvUTX9MAMCXefcjPSdnrwSKDgfhv2EB",
  "key27": "5Bx6ERFu4XkEcar1bpe95iTWmmtpTD7ySSMoHwoHS38f5DwDm4QcKCa9cikBM11aqEkiGtFnrGGPEti1XqFmA1tA",
  "key28": "2NLLQnqGZ4VyGn5VDwLa92ZkHcELjNRr1mYpwvdWtFpS9Q3vdaA5KpM39X2tXZQ6jqUy2M7rYYRdzEkVJMWoVYor",
  "key29": "4JtayJHxjuRRtxiXFchKBJ6Gq93J1n6AV1FKE1kMneVakLyhd1HaT9YuL38HAoz36QJYF2sz9YPGbWZZPTu5jQ4R",
  "key30": "2uYgp37orVY95KzJHwf3k1bh9beXhuQfoStdPMLHKEeXBGoNLwy77KYrFStX6bdzxoW6yrBBkVXiVgcZcq5rNxxm"
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

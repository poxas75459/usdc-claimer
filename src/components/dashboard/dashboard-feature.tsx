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
    "39MNZbt3RptYMmTH1nDcZYVFWQ8nvEkurt2oN5DxeEWvP3iUefyrkoohf1ajRg28GvWX4hLvqeHLG1bFUh2oFcmV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y4Nzip6raoYdotiLsGdewEuavfZ3hmPDf3QTKH54S59cvrXyik8H2KmhWQMx8zrZbgsaRWgWaFFxxFHXhwazfBZ",
  "key1": "4TC1yrj8ygCAejogTBBsiwzkAnH4V7ngQBkG7rhpfTGJoGRo9SDqAmKd1SNmpTpkBkad9VoDUFa9soAzWdUC6PXr",
  "key2": "3n45sB8C8GKy6C2J5uDMtGzMuwXYFhVubJDeyby9avuMv2VRGyMbtkbm9rgsynvpRf5D8F6Lw3igaJjehqRcErLT",
  "key3": "4Hhm5SN4LbSPQz2ueD1mg3xL3KGmWw4cjCUELoGJDzoJJubZUg7kWjsDnaCgigoABELKEfoUpVruWi2y3cWZ4jtH",
  "key4": "pr98vmBe6txR6yJE1W5K3U4ZZCw3Kj2mRMHYd9Kx19h2NK9b6dVBLNEu9ZBMsfZpB69Le1K5zAMEDc6C7HrPAG5",
  "key5": "D66bJyX2v4cvGr122gZxY5kPmxQ9nDwYAAqLgYa1AqG21Pz8LuKWUWNnrFxhdbSVpjQZRedRaJckc8TF4gRErmd",
  "key6": "546xWpBkpeJzLD2fhLMk8YAZC1qbeKH2dUq3XwMn61r9JtMZL8hc1JQxq6B9GsYZAhPrn7Bn9GGbMMfb665TVycn",
  "key7": "4gsmTs7emq25ABFLoru2xHBmQeBf55rBL9HME3bdxgUJHgNHuqwCcXm6DSTHxvKhaW3Re7QbkPxbNJg75RCGiE9C",
  "key8": "4SRiZK9LHapmB83x24ZmJsatFomikQPsTBBpxWGm4o21upEqwPVxqRUR81MvFajNpqm3L9pQGBtS1faqTjRehDm9",
  "key9": "31iTo6ZsLtsyCtAPAmp1mkjj8wMbZykYRxVYzBFSsXLZqxTsEQFbJ9Lw3MfdTyS2mHE3dCa9qK4mPFuKq7JDnWhj",
  "key10": "5W2bAUCTLKXHevWyXW4qz3Aq3Xo3y4jtuTZaMWFaM3qaf43dMDxmJauXBkqS6cB3FLkeDeLgVbbMgV3yCqgqk1hW",
  "key11": "4yGUt8pNt5XJTWeA1FYBpP8Rby6dSnWvYz4Y9qbVqMYpwimdZ3E4JJg1DxC1nb8hFr3pQ4YCNLt8ucq4MxtSiWWQ",
  "key12": "56YQkPchbdSujrxNL3WMjNahZXB2GmftriRX6n87BdGvLkhgrtYZBgxGdVFNC6v348YY1S1DGPiKQG8HF7pLWGyZ",
  "key13": "2TiPCZs1XYn3vn8dLu9JhstaU9XEgyASD3ZGGGimpfRd8VS8oPGiBJwcJCNmQeWgnL1h9wSN4fQRF83ijTrcGJ8s",
  "key14": "5tpXNigWwEbz8mT4mcUtfeJcdDH6NYXE1EnNLszxJxnuYMyfFXYjmHEfpzzFw4H2DqYyTbStQaeGQBWsZAujGCL8",
  "key15": "66XdFCQwacTvHG7VqAcY5uKWPNGywfYuD6vVFpVyL3gcFuk6UNYkYgAjbQsUikZoK6NpDn3PTxqVWE7dDdWri61C",
  "key16": "rShU6tgeBhexumQEGTJ3j81jqrmiz5xcEBCvX8eW9aCWa5B8xmdeEGndS5bwtvJ16WDEaqBFRf1Bxb4WvSUmvmQ",
  "key17": "k9BTpSkaNWwhXuASHRj9zdLDB5TnPKnP1CC4y7xQQ1aFyAboYYL4HRT4mb82wBTyww4646fgfD5npatT2kyPKZL",
  "key18": "5Jvbcpfo8yH1vFtJFgdS41LmosEN2v6RRDgps1eNk7sU9W51Dk6qEissnfwgCofoRJfuSNR2WooPcWoZTKri25pB",
  "key19": "57Lx5nBaqrr9D3WhiBQVhUwPF3kSX28ez1PruJYSFjDooDv7HATngtrE9FVWELgmxdFkzCZpNZsc5MuKhQjxKvE6",
  "key20": "4GS9qo2N4YwKygzzS6sLcYjuwhm7gT1E7K7Nuy2YYnbKnfTBoGXrd6oCvUk8Sd3BtEMAenYuZrGyujA2KyAqAvhf",
  "key21": "45AdUdHATfaBDRd1hUnBmjT3bBBMbWT8FNgey2DUSdDnvAaTWEaBD19bGBkddmTXjoQLsftX9RE4VxnaimYPyT7A",
  "key22": "bLjFpdp5JzYSKoQkkzDDeS8xQ6eaFbiRexfor4p75FVZgo8gBUCqQRWgPKNJjgHjdbiAmmTwqQcXdHiGG5oSeL2",
  "key23": "3xgEhcqEtf5fYeTtksVJ2fXuG4oLxtKxpnwozB5nXPJDHumiFf6CtQbCG1WAcNk4YP9xNrkDBM7S4MGyNgxnZFoh",
  "key24": "48CNfqqeePysKcqnNT3ijRtJKk9YxhQJkJdxYLJpZVX5ccotaryeypg5Hkea675f6wiDUu3AWqs7TdB1tunbRv2c",
  "key25": "43gKy7o4r3rstfkdFp3tuKtENVWikme6SfS8EqU8dEjLHGhAYyFTHVABh2LZMvS8K36i2fdSvT5CvFwpzB2u8ssM",
  "key26": "52RvfX5kbCMCSpZX3BDJLVzNJgtdMRXYdRydfQzgZvMr2HpvV3RwB9dAPJNKyF1RrM1zttQPUxKtaTmKX9d4ZDbi",
  "key27": "2qHNmjnngizu48Bp5vsvBxfCSSE8KWuCSxfjSZMdQFH3CDXnxno3fsPmMV1kn6EPawxZouMjEhnrdoSN78pKqe6m",
  "key28": "46MckyDnFi3TLHKSZ1oXXvbSoyWtoT9uYMwLy8EhMHp9dKUtnV1odZFkRagW9PDZc7pciu65m3PFGsVG98mnLWbz",
  "key29": "34RDy9oKg6JTcE4JibFQmtDRSuKZAdn3W5J9WTbSxmDoJs3zRpth16tfdwSPhtJuVzf7f6fwjwim6ftuGx9je8DW",
  "key30": "65zfDHeN6AeHN4rVXAKGuo2ga7kXS5agD6KKjQr7ctTh1ZQim18D1GNgqixoV6Qpm3RCqCsMTtDR4Y8JVJW8CJNM",
  "key31": "4cSScv8K7teDe7NWCzaHvCd5U8cLXyHgHNzEHKTVvDuV1Ly3h24oVsVch1bDjcUi62Vw43WTYPyH9og3eYi8QuXo",
  "key32": "kC3dTrk67vWUWvP4S2rXWeNnRpcmxNVmrtUJdjfbqLL1dBsBGeGwgMGx6jn8m96M2h61KC36a9uepbHTM7mkeeY",
  "key33": "5mtzbUJLLKEupR7PqAj1tkfEKASSQmRkGgDbLbqtBkVCQ3d1okRzkQCPcyRPiUfSAsjzPrRQfu9dfTPaFL7EUWz6",
  "key34": "2sovzo84evHiQmcdtfgV7TU594EjVTBs1PgXBFowskjqcs9yHxvAaNqDzeLpmnghAAHSfdiai1jBHx19H7Axz8K5",
  "key35": "2ZwhXvr9M3EgzrsvKA8qXew5caZ1yJJdHYFcn6KDV5mPgRaXdxhyYgPd6Rh97JQkc7AxNS2yJv7L4ACesh3X5Qi5",
  "key36": "4az9Sx3jbHR5GGgk96JcPZz4GDUyFR7ioWDkH8gZ43TBVxxuLKqLqXEnwQbMdEFRTk9LSNP7VVLE6bsCEdr988XA",
  "key37": "3Sw4vhqYxH28pGd12CSZQnc4MAwDqSBE8Sj6ajdbAJZXxLDP8xqhztLVeJvGHafFiYCGHn9i59WL26eigdsVCQPw",
  "key38": "3MCLMNzQRgDNgEbLgFn5UpZJ7qonhVJpiGerQDDwNWzf8JrEArWLB3KXted1o7sZY1ns23mykBRAE4JordJoUhwn",
  "key39": "2cEBPnyVweHtRjwnSL7Caid5DaswYCr6bfijAP8iaCAeUtHP7WUKDPAEkCeXu4HHQRHLRqWDXmAUhdM9s61kHe6e",
  "key40": "3n8Vzrp75jad1Q8YCm3aorirrg7bqe2XhCwfp2mFPajrqxb8yrnfLmqAfrPyxu55a8i8DcDvyn33uAbeUVa3XG3W",
  "key41": "64Bo3WCp3TgmGvZx3hHSxpuE5WYsNUPPEnhZCvMJHbMGy3MLKMT6izHVQAF942njHVDqccymz3akaZ8bkeNS2XJX",
  "key42": "2LVvmJs9RMH51nybxrn7HUQaPwds3qC9V97Kdds3ZqS5bMUkjQNo6rCUWGYY58pB5HCBwTw9spnFtVghNvxo32pE"
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

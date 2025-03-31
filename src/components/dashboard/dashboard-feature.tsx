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
    "PwB7qnpJKfHbMqBm36adHpz7y8con965cAzjAu3Zxy9aXP2a9yRgzHrBsuFn5KFSnwQNefkcybWxBSZfmEXSHDE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ahoAhc7ebBW845YmHiBEp1V1Gu5udLZiM8BmapWaJCwy9TnADEFFBmDDZ8TbAXySfBcDunwKEC1duucbsEJN1X9",
  "key1": "5cEErTqS7ExVYs4YN4MfbdCAyt3LJaUUHCoh5AWv7nmwGgotk76g6ZUxN5ipWyeN2BtUyZfx2oW3s4dV4MYZbc11",
  "key2": "5e3k8tL9oscbYsxf9upzw6aRrXub6ncBS3KjydctDaFeP4uvAy61dKsTTfeM4s7JZJFwNRLTpuQqeNpTiAd5K5ox",
  "key3": "5n1P32fjahpbWm6i7VwpCPMJtJWvs9fxX2TuxPk2xE7gG5KmsAkvqrb8ECWcZYX2vXRdc3ZLBDGZJcbKje4RdXKx",
  "key4": "5k2moLwhr4VHzF8oBsQk2dJnfMohDPBuJeoWh8b1gsyJEPaEp9n17M8iojba7DSH6nVGd1gKyRx4dyF2AuCDZ1x1",
  "key5": "RpgK1wpa4zNGU8edBLhZXVtnrbwhfYkyQ7wZSaEJuuYdazSuE8Xwwwynme1LThdUQGa4dRn3gZ564GH2vNdXE3N",
  "key6": "5HiS9HDjQwoLMuqwSCAMUgf7j1nwJMsbKGP3SSFPXVkhdHpG9YdM2pkLSwhZfXZzzxBa7u7fCo4CrnudkWQo8GBg",
  "key7": "5t25wmvRqkVQGdrMGkbbsQ5zYY3nntRnihvtcLfXUWJ4vS46HMcJoGfB3YoXNsDUXhNsaLuu1vrS98vexZg4ZRag",
  "key8": "5yCrtaCrssHSAEm4eYUAyf7QQRzabcDoLAfbbiG9GsN82zmHVZzWYz6WZBwtUyEqAqXX31N3Y9fRwGaJRY4h7Qza",
  "key9": "3zawF4fBsoZTitfUBZB43Ac2M7CTrod581XCeMbgjmFdgu839rcRxNSAfWdpweGZv27aTZ4qiez858fFM87mCjQg",
  "key10": "2VWx7L5DWR6Npnz1RBDBeA76JXP1PatAZXPhyXvvbjHzNCuuC4B5A1My8hUqTkycddRc2TWuCMYMkeoQkEFAG83h",
  "key11": "2t2FhMzUUuey4Ty5aZmYDWmEN45fvvDDHq8J3tavJdmUCKYXBTzzD3HorimiULELMaAHMpqwrZuqTdPK1TpDyUqx",
  "key12": "4ZBiL42RRQw9PFWsRVdXgBvmjjauPMWf715EDz85RixV8Ko94L96gaxrfFkuRW67eyegdcLPFjWkvL4sxiuXrdDZ",
  "key13": "dxGDW63KSyKYHhV5M1hbq4nPYHrjfmF9Low5biowf8eJBRQYntNLnstmfcZ7XtF7cgbygd1tX1STpjzgTBs6aTZ",
  "key14": "4Y7tngNAzwJwx15zdhBFf7gmHeHwTKNLzkPbdqaggVmqKEctcKjNFbQbADN6FUhQVwMuSRF4MC2vPij6ueeQwHYq",
  "key15": "48EqcQy6hq6d55UoZsBgtSxUZMhVQ58kKeF1ewUEQWe1LdWK3BRf6oG9svVwKCvCe4sbmcAFB57cFnKbTR72vcan",
  "key16": "5PKtMWq9kcah6CBtcWHMeQVTMmY3SguPmWsLiZ8ceVkYa9dAxN7xNzgqBhNt2cLrHtneaCewyXw8CRoTVdTTBQJ6",
  "key17": "4MVVJwWYsak7983D6ZHzewf66tAw88b8taf7MEwVF76oXC1adKD7FrXdz3jmnnGe213UBqVwrYGjTU1EoqXENhRG",
  "key18": "Y6YdPeFtwGGe2V4uLF29JKRZ892jEBVRqHDZaP8EmeEEWoBte9cnPTRKjPotfd1U2n81KQtRQKxwXTa8LEopSRR",
  "key19": "3rZXCvsTsmkNxESWFVu64gacnFXsz9syBdYirB6VSG3WqtSbDVCucvrnNrA6HTJbRQ21Q4RLeBRyRRMsHZD9tmuT",
  "key20": "5a7hkYkBnrihCoGFXtQic8d8BbffZdyZEdsFipNQiR21CsPyk9qndh3bGVmkuhRMumqhC9dx5xekah2she4kVe4y",
  "key21": "XLQ54gLMDSJwj18hWu1rc6xm6fkoZAVmtF4vsCRwfayTdmajecyYYp4icze1hQxw6hguH9cVfyVLKpFrhRnyhhB",
  "key22": "2PubgHxLWJmFPVe6ZBDGfcaY56Ut51FaJqNWWtKfMxUKLah53sfhV3MW1pRxrFgD7TTjVKYjqQXaoFwcNiFqqahV",
  "key23": "56FUoxFZjmJPJ3EXkDxpxF1d82iBdbtgC8rbn2eUDdUXKDJDvL1VhnghGdJqBu9Tesvikg88o3u4VHiMQvSHBLKj",
  "key24": "4GT5pWdKQUrJemd2ogr8RDhYu7pHHBHp4rGngpwaERVBaAqLCCBE3Vi1XBhGH94Gj65eHVaoE85d8BaDHcQuWEHA",
  "key25": "XQtk4DbfK235XF34vhdJHHRiSWnh1WmwszEHiG2oDqKyqi3cxwFhz5wcJ2W22xszFGthzQhj9q8Z13vs3MCXKbJ",
  "key26": "27m6M6PBGrknE1vJ1qQHUjiLg29dmyi9bDYaqGJX3E8TKdKeNY1Lw6CKznQoL3peiCp1EPnQ7wExRVzGEQpieAdC",
  "key27": "64SZmNGZY9UWLwd7E1MjXECKntRnTWT7ZMPvpzd7NtHFyChYkXRFZg5GXLBkP1rig5a9PsVAbLWZbdf81DD6d2rU",
  "key28": "5UP1kEXRTG9uaLib9wZuJwcw87Khme2HYj4A8wHDFvPxBRi3cPmSYL2NrxwHRq2FWBqoDy8Y7VXaZ5jT36Kx6jHC",
  "key29": "5dtEZJTtF5NaUBQVEnCFt5FqnpjRxeadnDpduZX8NqBSHLxAzRn3Q4oGt7QMJ2FWDbtevHpQnGCqKpi86T2Cw8cG",
  "key30": "Zfx1CLV5TsZiQWXeJ4FGj7Dbb9DxEG3K9tvTRbriR83rNW2LQkxWhfJT7w81ZgPpcjFcYzWRi4yy8mud3zKECE3",
  "key31": "341MDgresZJNBn9JoWtYHwTvUG6EbGuaACHwjEox1wqqoUSXohgUtunKgwGka5X3SZ39PA5qG2phvAAhdpicxTnL",
  "key32": "4TCGcM1esCbP7cACpNhpdpxK4MRhF7bpYAgPyZ4jRXzqdzKuYYLvSRrRsKP3bRKaCYeccM5W7PcMf7u2GqUFjPb",
  "key33": "3ZTPWLU5aQ7RHrgQs3KVkPLHXwSRdY4PgSmcSZfacFzbYnm8hzpkW5rrCPagLz6yJi7W4h96TPbVBEV5aj5Ytjjy",
  "key34": "4zBTzYV7k5DjHzJM4BK1GHcQEvJEggA3rPTxknwrLH8v5KKpBUWG9ukiaAUmpE1FKPuRnvhRga8BbQ1UtxzWTXG1",
  "key35": "5CsrLYJoMxk3Nkn16Z39MkPgSTJmNbBihGjWoZESsMMrv5H3dwaYeBCmrCC7Hqkpy7K81NRuy1SGdTwdp9cdggh9",
  "key36": "2TvQkRDwuDgTKnNwS3bjZQMtRME8QZEzEkRWqHjmdFao8JhdRSK4LBULRA5Ynz5gwUETHbB26fgA8qNfcp5571Ms",
  "key37": "35czgRo2n5oNxUSqZnnQYT3VWJJtvpWhXKk5qUJHtqFv27Mxnp18Ga81ychoZ2AeLq736w24FtJbAo1JrXFsV5sz",
  "key38": "49HubExLSHP8Jj6fS1ALRdmFQCg8cnJPveVGGF57YJ8DQEkrXzQx9zdEkkB3eN7iF7YiNxdWpDuWncYPRsAq8Xuc",
  "key39": "4unC8TtTX2ECsG9MYi5ByxLJfLEkRGTdo9qu63GNzK1JGRUhiMZCNZgrMZhhWsgBnBQzxncKvUMyyvNyViB3xYQq",
  "key40": "2pLk6s3mzFRUaR4peZHxYH7em8uDbo87j9SkxGSnCGbit3WgdGugqUQdYNDqQtX3EFZ3F3h2d8aDkJJezazdPfRk",
  "key41": "uy4fMbfATVxvU3sfNtKUXF4qZTp4hZgm5YJ6sGwqRhVSGqyqPMiZy5k1KnJfp4DwdCHp7bSvr25kXBbEUKrHmvq"
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

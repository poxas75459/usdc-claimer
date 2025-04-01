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
    "4RrN5cN8ys2f1F2oLPTCcuzAoy8RDxw75wyh8RfG9Xs4MZrCvAqEtLUHz3kZhAr2o3pEse4TdciqW4wZydHpbWpC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XMW9qNkAGrjRj7ZSoi4MzPPuK8jmeNgt11hPgbbPWdf6ByYVhFQ3nH3hJpz7d6CNCbw9TPRKKe2RCoSP4j68PxR",
  "key1": "bzy6CSt3ZY4h3QpNM7RNjZpPEu4CyD6HAeVg7sw4mV3mTckfUQFjWFvD2jKbDebrCkk5erXafpVhJsLB7bQQNYZ",
  "key2": "2yJGseiycBaFtE323Q4DaCBwgDfTo3XwDYbxZCZkiaYDWVBqK8ULaQWXdHs39FAjMwQnusTQGzoYVepGWpKoej2g",
  "key3": "4UbNovBt9PBv1vusYBGEWhCUnWjQuose9ohjwhUSE2yGHHM1KTA5rc9yUBPP4jADzsdpwhFuXhWTrNohMmc2mkrJ",
  "key4": "2VFdnbZ5exbBDC9tdXsiKzZsne9PcwLGSjrP3NwjkcNZm3Kprvw9TweAUSAd8RxoqFUX4R2PBaq8yzywhytJjdP6",
  "key5": "5i7GpR5UxfPaedWWKtAQL6LPvRETPrMGdQhUG4J6Cvaz7NCX5voTmUttKieFi1Q8kwHXWz2S54xkvGDYKkWzyY3a",
  "key6": "2wfQfgxaxezFUVuvgRUnRk2cP1VvKsuAdV5pcZCNyWQzkE9Fk24vckqxsrLDULNLaufLRkaHk1J1oR7jFmudKnAS",
  "key7": "2gRsCiSukHY2FrAuCLXTVveD4waPkYpWjfEBkV3hZLv6Qgee6o6RTP1JVjcskWLCidNLER5W3pjVBRdFuFz4y2CE",
  "key8": "2cYYHhf66EtHLXzQ3Ac1RzsAWrYGFLG99pcv9fKSMkPyPAwVVKaxsMirtJfoiK12EuLqFesa3ACinACJpmi4WpqA",
  "key9": "5mF9G8VRQfzUppn4zibE25AekMxaxfq8Pk6gWvoBGqyAbaGkMt9dX8RESj4vZdDNpuX6UH7kxkp2EYwBrJQmopq7",
  "key10": "VQWDK2mhFG7K9MjS7LjrgfrQFCctKyBdABr31ZYP2DLQnvwf8X33D8TaLZPPADUJC5gqUZfSjPKhGt6nwBAzFkV",
  "key11": "2aUgKw8JX8tagjMd6e4Fjz79Zz7xDnPVWMvJGm3Pda6dr8e2qspfTTFsqetaCGrxkpKTtQGjFqYjcYswDxBowMgi",
  "key12": "4oMbVvok8aisSwg91nFTaNfhyfcYef7VP3F7LzmjNR2YVpw1EUYBy6xq7Zdx2rbX3293agjMRRnGCqJnYomz2FPw",
  "key13": "3nsuwi9uaVpXNa5FtgUC9L8mLMP84e27QFqbB8nqwi5SZUp1MHEKviF5Z9TEXFJ7Gg1jpkxBKUe7FYk8cAUbavkY",
  "key14": "3mGgPYrQNLv7PZVrnJiDhPSu1SShw5dov2g372GirNUGqWQUUsUgw6MFbqD3xdBuDFcU4FGB24ZeQ8RgcJRcuU94",
  "key15": "2xDSUvShcH38he1iWdzjNYZBAaBRwwmDun5nzLa9D25Jp7qcjDrdhfLDHKyRPxXKBYCzaxA782MFvBWUJGC3qXpT",
  "key16": "5rbUwQTmxQS1bNQuNZHp59h8r6D8zkPFhaKJNxfg4n3XeiQGrjgykMq6EGGkYS97S4U3TiJvxUUwX3a5ZdvPqWCQ",
  "key17": "5oeJsVxA8keaEhsVEaHCQHhEcgKXh6KzwNCvsVddQys9sWdoYfHG3P97PBijJj7WUvvb6NyxV5dSbVxxMgaevnU1",
  "key18": "2BbkRUUkDn8HpPCuZ8cac8rxfsumr4y5xygybtXfwSitFDqekpQG6RxJRV73Q1adv2syiyRin8TVGpTZCTfRaE4t",
  "key19": "66WMUxgr1Q1d2WNZup3wVd3MBPwdNkwtQpQr9KPxAGQ49ZS3NFfpEkriF3FF86xemvyRY6GtC1Z72kor6WrxM3Jt",
  "key20": "4XBXTBahSWrAbtZexJ5234yLCHJVRCxmHM9fNxvnRH61Q2tb2Fn3cVzXkwi86X7GWFFEkGkmH3hUT1czth2E52Fb",
  "key21": "5nNBzF7RYbNJXUH59nSYcVVb32CvzcyqQtpxKQPxxTWAnhw5aoTHuNHNTYF6jZkseNKPkYzWi2X7ZFcSH6icHsGs",
  "key22": "mkSnFvEM5GQq5e791LF525f7tiChH6RX4U1L2ntYTg8VUigxivEuuutcLYaNbaLzVoDcscqRuZup67Sg1iTzwsU",
  "key23": "2bVjgjFL2gFxuzWJgExuqhtjBvPiBFEaBXWxCzFQek4kRBQeEJvuvoN1nhPvykJX2Wm7upWwAMt6gZ9QETD3r55a",
  "key24": "4NQR2qFMKTPUrEHDHpKKXbAfBtakhSj1Qn7mYHk28r8qitAtZdsuebjb7tTsbq43G4w88oenCHyxEuvstq3La6nv",
  "key25": "XJqJ6Wrj4isqZqcScP82LhyJYDBia6KCFAx7r45iycRQWD1v2so1fvbe6rfxWXs5jvAvk6KGtkQMC9Ay7MXJjoj",
  "key26": "2GDg4RrhdLd8UW8uMkana8JpipeW8SHRkKS53JwtPmJ5G8JAkhzNK5zwKZAA9QgoZ9snbo6pp7ALkuc4a6waZ6cU",
  "key27": "GxStbvXXbtZ6x4WmKbXpk1i3H5AiHYXqbUt2DkjUUzSpK5dMM8q2cBsgUcT6EzSyUprUnEEiTymURDb4t9n6KGA",
  "key28": "2QTEZtQ1ozUtWUC3K5TC8WfibgoBe5sKrqSAPUPkbYYJerAC1dLcvEqS1SRCbXEq5AgxWNg9CCemrxvAERrighQY",
  "key29": "NhFfYdfF8NZ6wpeGWhneCERW3xxCsMMjTQDnE9MCVqZQhh1ph2QBQzdRVTxo96FtBne4RkAp7QxtuBw9LDdcvgW",
  "key30": "3pdWmoNSV9H72JGmoNzosZTFEwHr7NGBNS6XUArdSYrMDJVmBcazjiyfGmvUkoYQqG6kBYhnR4Uv89PqQuk9HZNt",
  "key31": "2XDwF2mbL1YxvoA4xKVduHmbjHuNAFb3u7Y4XeH7KjqeUANVkBpNe9Vn3AncEMTihLx2TeA9TaPiCXwA1ppAKqwj",
  "key32": "c3bwedPPH18STZFdxSDGN88qBGmSXekPEVoCoRHdhdjQd49LLQ5zvdK1VVHE99UsLj7oW1CAUYA1ptpbBkcm7Et",
  "key33": "4BmyMoVWZMvQGfMdLFDLnWs7LkAjP1RwNhSk7y3iZz85SPRbFd7KB3fEeFEjLv4w6Ws4vXw3aZEqoyL58FyewaSw",
  "key34": "23q7g5aAvZgTberZzVgMJAviw6TsgsQfLWHtZXjjPg6Py41w67nPotcMQHCnZeCm7uSEpca9RRyw4oZXyw5bLmCu",
  "key35": "4NdeJrDyv9cKkUicx31gTgVcxbVXbGSpCwBCzQQCqS4nPs66WjQi3y6kQt3TgeBrpaQ8SF4ZFe8pugkFX2DyiQet"
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

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
    "5bKr7kP9ACNfxgtaFv4Xvbt7pm9RsxAQjtFDMDJvGETUZyGwE825EV2LCAkPNE6zVKw3Tta1T5ypyLHqTyEmAuJT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xJqVHWKjLT2bhwhGxm3YmYNtrkUCiiLAAnPHLi516MspatD4vB4zCKxmRCz5GW1vUELpXdZzHXgaEjXHmBQEgRW",
  "key1": "51WhJWf1B1nxRDcKmUDmVtLWq2Y7dBiwAxGGXGUBo46JiwcFTMguUKCrvYFcmaFJzoJGJbemnQsiKWMR9CwtMysF",
  "key2": "2QsZfTpMkGdhk6Caf2Y4tCbTwBGorbZupLZvwtyMVaK1ZspnAeQqfVGPdPNZ8WpYkUArgmsdCtjrC3EKkXUATrGP",
  "key3": "56M3fiG9imPjBFZXfJAhLVXdqokincnULpczNS3UG3y2FBJvejQyT4VCyD3RCBDzrj7XW6HEivyZuV26nQnGQTxc",
  "key4": "2G1fk1PnNuZrByztRwDNwgk6T6AXgofewA5XmcMe9ddV9ufQnUXtaJYUZHnPiW2vJkmG9a26yhRP6svT28ysC7Sr",
  "key5": "5nyUwk3fnWTsviHF1Kw3FFaK9bNnRqcLMZH4eV6pEKnxNn3YmPtw1R1acsLxmwz6ZGKkQEJ6antUz3Dq4WbF8PYM",
  "key6": "5E7thrRxYtr9wtirQxzEgdzL1pq9WkjdBbLByfGAYNvswRjdVQxcXHJj7mTrnpj9NrwvDN7pL4JA32Wx62QLMhyy",
  "key7": "2z3qtTtGGiMNJYgHRbynh1ufjTYETVyxpGYfmEgwBmS4wQhv787Z9jyB56gkpAdeYQoRkf2LTLmeinH7F87UQ5Zw",
  "key8": "2pzjmABgj39mLCLMceGnNqZbYDiY73Dx4eWXTZEe4bxaFuiK5TJZF5Yn3Ka6aHJSCtEYyTDCwhwY3VehXEh3ULgc",
  "key9": "ZtUy427DpGCwza5XKvPNC5vfe2nK8HkSYPumhHu9vxWmj1tNSN8PcBRXS1GpGwNGCgL7t2nFPqhwv7E3mdzQgYz",
  "key10": "4aMr8oUu3rbQiCvhc94bMeQ8pjcyDXbJjeEs2DeFuMXPj1JSSwtiz2t1h6gw7zu9tdvWykTzEKwbb1K6S4mQBFKS",
  "key11": "1uk6NqGEByUCx8FVg2wQ4pFoMDGZX7wwML4XqMFx6ZfKmEDdVdkC5cBm974cksj2JFT5pupUBva2M8LiRy2Hn53",
  "key12": "UG1MfMgbZb5HyK2ATnfihjBHnVhp7LsF6wHChPGcrrwTpWRGQfkQgYxQiFv5w4WMq43F3uqvwnpofnz3SurxBK7",
  "key13": "LWAdNh316mpKVhGeYnbuxvy47yYu3TSasHxNdqqDkp3SNcp6iZnrQEaY93KmshHmS4cwMXasmgYt96AgV9QHmou",
  "key14": "t8grjF9cNqQhcsEETj4FnYsdNPh4eEDqGqt1u7sqL7RTkJEe2yZ4whVJpa9ND1nxCGaFp8ztZkgpBKsX2nEMybj",
  "key15": "MT6o3sMgnN7bTNTvCEXf1ZhhVMYUHKnKWC17HomtPhSJmsyc1xSSpswGjtuwp5n2PSpW1GhYZbbEozspWvBmgWy",
  "key16": "3h8C772RzunY1MiFrYsgZUYsKuEp1G2yNWDdckccoTQmjVZbWsKcBsJAfMgJQUWRHd54kEitJga72DZyzfziTAuE",
  "key17": "CevzsL7uTghmXGPA68vpcJdXwHXV8RTzx5KgBPuVXj82JS21DXMpsqokDD7RapZe46ZArCydYXT3KNm5VEV1Xch",
  "key18": "2DntWgSMt9u88VqCZmYMkCAT3cvx8zwGP9qiNbUN1aBv9NakRSCy4u4TZ5aAakafExVaWmTj7Fp4GUP42eYtF5H3",
  "key19": "23kF1i5TzprGgUGktAo5j4R74beTLDiSZr1wLY17p4mUXyd94nqMceSo4V6DYBtvtx6EssiEzkHvppbn7SU57WCA",
  "key20": "4gv2RAf5ABE1aoRAop5eJyfZjgmPBUE61mfnhVHDbJ6ghS6EEc4oGaYhAyCFbLdWMf6ap4ntt3j7apVUsYj86Rc9",
  "key21": "2P5goTAQUq6dKpSXUXyvHRahzE8AAATt3SqNviQ7wuzkH5JZX2oa6yHEhrV5xrKhv6wAiGPhGgF2oFXJwTXg7WA2",
  "key22": "3QqVXJcBJ3iyjYjZ4FsaHj2K1JB3Sn5aC6r8xFLagJN5GyGhY2Gxdh9HpoZFWq8kCQ6Fb68HXGsULLvckumoDUWi",
  "key23": "3o1PTehpuGwjVMFt18fxJDLzmagnNHN7TrMZbLtPXStn9thJn5kVazdRehXBjV7rhZPwUjhMo8f52twK9GVwooEt",
  "key24": "39LqZvw15nR7vpugcbxivhuzNCK8NxVtMGXZsibf6shVbD7YFFkhbMph3cmgLGWQmaEsgHb8mjw7rX1QoGWAYA5c",
  "key25": "asYdpPFAfKMqwfJkkVh5RrYYS6iZenqxVEkzDjaW151ogaVKeh7GbtmgihVGgqm2HWchfXKWZQiMoq2AhTVQj8b",
  "key26": "3pRwviDfE2RtkUsuGimRBGmWw5M3geW7N3LpRaKWBjQGpfmtp697K5NaSNVGjVk5PnECcNwGW2CAmGMLztFyshyA",
  "key27": "2gxQbd5quL5RRupeh4fQtLPWX7hyXfnd7eQxcPNBnnUKEDfP4GP6JqDueaN3TXxv2ZB6bhNyARUa5nVirUJ4FZS9",
  "key28": "4tbKiDqVxi9BKcsU33zxr9Xw7718Cm6pkH3LAYEvqx1eNkRBQy6JVHJM8vQLZvbaPJCTuFEcuFkkAtMV1JvvtXqh",
  "key29": "3LLJ4ZvU1grDsoDYS95qaSrUPxheXx55e6fagTnH2ZqnYpK97c7Krq2wdpwWQADJ4bNpsSXXR34oWMUtQWL2naP6",
  "key30": "2u32YFY1GQkxQUv9mVBGi3VTdQ8EZzxBSWoskfYjG5LRvWF2E8hLTXnWrkhEFurAxLyiqRsCN16aVGswPjuh5EET",
  "key31": "UnQV3pyVp2P9LZtUT1KtVAYKHAWUVgDSJpLLbAhtS4pFtF4LGUcwmN61Q9PLipwdDH8noJoHa7d3KEcbCCi62nR",
  "key32": "3Q7z3H6mJhpwcfJim9wSkpGGAVAH7UGZaH9SNJ3ELZMvSyACinvw96JNyjuvppQRZV8HvqaA442sjSkKWW28P8xW",
  "key33": "Prs15exw83UjNeLu6nHVCah8T95JRpQi2d2nbR5H2LQDzA9qeaexvyhVMSEZCabT9Up2gFsLFAMA5gHktTiCD46",
  "key34": "3P1kX4PTaiUyHurJeEAVstxnpDQGccJnGe1HYEtn8E5nvBc8xzudNibdn1TAz85ZSfYgCVjATKYGwG8Gm9fdDzsa",
  "key35": "5khswSmxXakc7dG8XoMoSSyzX9ftgpD5mr6SduGqnXxMhiVEMjiQ7ygCErbxAPQnhpX4o5htzQGG6e3MsTRVKWpA",
  "key36": "3ryzoKjrv3YuaasmWm6WbTvhsBSzgG5XJCPkcdoJMdgMaap8LoMcbvbyZXDJYd95uzJ9xG7TgBYpU4WkoiUbAzYC",
  "key37": "4ada9fHMJPHR7dAFtKdsMCMWTJ7qG1oCbEM4tP4VUPax7aE8EzRgTMEyTGVHgd1Gtw4jBk35nsnKjqbUrNixBrcT",
  "key38": "2zWWzSvmfdRysbNj9Wndwox4im8deMRiie3xgozep9yLTkkFQdpfR5XKsxsvCW9kWfuC2Lpkv3ip5cEtAoRhxWv4",
  "key39": "5gLWzDjmgzVkmyUB4H8PXDDQcekACiPdQPWTY9dN1aEYgPoYUo5ubDSoGZFs6bHiWiZ17rxpkJNfZkkAKh4gr6LR",
  "key40": "V9GqjgBs9HRBHhrvQmq4xLWCazz8ewB8C5KYrzosdLFNcoPAZMoxxWJFXFVingtSVNUdyevVgBKR9RxJUeY24j6",
  "key41": "3L6VRuwexhUiCswmTf4vizi1v9WJHshLLqgV1p2EyG6VpAdUTfRQXWLMpR74Z1MFoJwkL6FnSqQjh9TWiW1iaBxX"
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

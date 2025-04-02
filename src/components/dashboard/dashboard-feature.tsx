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
    "5xwf2wjdxQhfzFPBTiB5TUkoaHCcMvo6Ti5m7CQDYF1ZqTGCVHoZStXES9JcUpW3at8nnP3Qh2vj82D6DKaXpmN6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PrxiDC6ZkTjGungKwtVwwEAmMUA4G4ijNw7ck8NdNafFqTr8Cca1PKBABMRMzCv6Jmggh7jppY9wCx3YMJNu1cu",
  "key1": "3N6zS565yXy2gKENWukGDSoDCXmTWNoe9Ev2qRVtyErjkrgHpx4R5rgCbyDKpaGr1SnuEusLhPCsjyc6emp4o7pM",
  "key2": "4ZAuRMZtGsNtkQpX2SE72JwYG4yUZ4eRPgZrfZYtbqPJCFPMtTgWhDxSq2km6vx9yTZXQoeTNLwhwQLV3wLctkP4",
  "key3": "4bQPH26UN8DthaQU72g9GhZrTABMSfMXJf1Z6faMXb1iq1Gsku4C9Prt52TH6oBsepTGBX1PAFFcmRpybAgkYVqB",
  "key4": "3dfPx834hPDR5q3q8VqX9u8FNb4gRi1yYmTd8sFvdetv4RVtpxAsBpGPneBQNfYGYUY9mKF88xNzHxDCHYamvXci",
  "key5": "2Ds6z8KAS1FNLKa4eJqmJ42HMRagDu4peyy9BD1sJa3dhbrL96sBVQCKW2opNRZdmVzagZjAgr6zsVK3HQ9f3Qau",
  "key6": "2yfeRv8kSUP2ijXSCH2sKpPhZRMud2pgjesUrupe62Sd7HsXWK65rHH1XWkNcmpguuExVPhpHY9jP7qrYNKk87Ja",
  "key7": "38pmf26WcVQX5mUy5caSutn3k7pHA9ivjXabvgQZbpxC62h1JwtPBUH6kyLpbyREBGg1Ru2vwgcDN4NwM57x79Dz",
  "key8": "5i2WsTNnckykKB8MY6nxvVzJAVx9ry1fZdwZqgHetqkcQsMscM3kKDn4imHBfyjf6Goc9QV72ABgBxtijmfNGe3g",
  "key9": "36oEXUym2DGd9Ayuf36B1DsHsq9S726qV1wqbd1JA3u3VurB8hdXFTZWyP62qhtnrwFsvNoo21SvyrsHBWnUqLmL",
  "key10": "2UxifQFaJm19mP41BowtJRQpUx1xYGR9yVdCgzLy747Qr7FThugA4woVFNpcBCZuLRCWAgJrEd3sH7DqrrTa7ggT",
  "key11": "SBi1SgvqhAfwoLTpouPvaxNuhiRpcTbYyJwihazwa77SvDaS3jz3vhXSGZwJ65vGuFEn9gYhpfBTAeWNSovwwxW",
  "key12": "3kAQbaMz5JCHS7DnDd1rdXxHSA2njRRm3yZk8Bq43Ff52ZztS6vXbMdyyBvWBJBrE7RFkgFjAMP8NXQspzYZyAYd",
  "key13": "3P8m9piuV3Zkyqb8w9Hki3dsj44sS6gUNhieFCVAbxCtjm88qeQ8KrA9g1F79m2sRzWrSEswMpxbFPnWenzieQKj",
  "key14": "2Hi68dRjEqFU37o6VnxyjXfd9XhcB5PVSc6ciosXwPKJYrWagp6s9QD9Lvzb1H5q7fk56ymeDVGSRYbqSpu9djvX",
  "key15": "aZ2zN1vgvcLeJ29tw5KY4PVLcYb3FXHxNzppSSSV92sKNTjM7UZLd2eHUSgSQBMaHfckuS37zxHPJ51Sqidh2EU",
  "key16": "pajXXeowNBoxbs6AatdU9H1htPMw4pnGawPTLX4utQsmj6Yp92kKcC6nPDEH16eEMuMmHmvsvA586WYducZBXhV",
  "key17": "3cH2bYs9R7R1Vk49Ts8wxeDhifA9YmUbinrDFWdaJdsj1U1uBoqb8NTXcYnWHTQN5oSfFh47bCRSNmLZBvrRryPE",
  "key18": "2zcUNUA7weBvbsC4gfbbeYAMJQYEoEEYFA1CJUQtjP86WnnBkLvhxh8rdnjN4KA85cXCU7qQoeRDBcuY7sM1sT62",
  "key19": "5XyySpfpNkQJM3AtbjeDJ6HzZvSayGoBg6NF1iYtWv6CtZhuF64vFhWNMQVSuxQqRPh9u3TEBXUmXPzFDLGYNy8g",
  "key20": "WmAHuaWjq3RCHFuxbFRGK3VPHXfL9Ct4MMmG2UieCuFh5uLSTNBAJeZkM4QuzdFaodDC7eTdss7z1bCN5XRhqik",
  "key21": "zL2DTffiJm8vfHbcEBbM24AZYzNXv7yDxxCq4gMjztkEFTEcQKvUjqi4iSkLJkndo3ACEqCT3KQzehz7ZGpQky2",
  "key22": "5hkWjtxys4xpVWfAjGiyNRqj8BgrKd6mgAvfBwQWEvz1jNepHynF9rKCeK4Cb8EtX5u1KV3z2RpSpPzQNp52ZzDF",
  "key23": "4QmXXTKNWha29KAvW2S5iYvphoZ4LKFkwg21KLSVkuePJTYCTMPa5fmBiQvdZgQ4smpkws4L6FaabM8K4mhwGWu5",
  "key24": "2pMoLVJrFt1tLsPVFANefX2LyZdHGnRcRZjfUc1AiqNDrjASZygSZRZoGvc2CsjtMWfGoJhzbdpywGYhBymw15tf",
  "key25": "5jeAuWPp7r4LV8BY88mPCPzVmDHtfgFuCKm3RH7dmpBu3mDZZA2yfNQPSRRqDJaBbbSg75wycLKsLvUuzbBzAtXf",
  "key26": "3TtR6bBCgGqaDSx171rfowgvLyM9Ve4APGt9p5ccePdZmBFmEbeRJuau9UtdqHMK7NpG5SVy3J4jZZb4aYbo6knn",
  "key27": "555TSheoc58iV6VDDw77DmFnbdQDTwoHMnTpra2Jzv3s1upzYFrQWGZcWa7WiWbb8azvzxoG6UmPy2o1g1YV5Po8",
  "key28": "dibX5ijXT3Ba5DdECNPqCbkfdb19yygo8mBDQqXZJmPCrmtKbFkh7RRJr63QjeTTUxYao4T9hrBBFgET3rdiuEG",
  "key29": "5eHg7sx9Fs7kdPAomA3KBaKqwuGs2bXvC9nmZrvsNt5YURu8r6iFGsprSVztr2mYieeT3pjgEc2pVMi1xoxQGfMn",
  "key30": "568MRGB7jQaU4hBTsWQT1Dz5aRnj3XnFBTjyqDsxz3Da5qFn5wd3E8s8U9XVnzCxrk9GjoEmXaC56ptMMEMp5yBt",
  "key31": "vCBRvHfppKRkgU5xMp3zEwwJuk1XBCncnuuL4kRKZhB1DFLiGkgGfMa2v3ByjEKdYH7Tt8nCkSCXvAxijAWuA4U",
  "key32": "47DPdN5cYZxNjPUSipVgysSxt1CwgvVZ85s7EDc4cyXhDybgtya5X9vruiqSmpSgzvWk8xyopQd8aVbiM8YwcCFJ",
  "key33": "3CMza1ucBWArYXqsdbMzJeqw27DpZiGwE9f4b8eLDuA8cFoHxAZ4LMCMJYU9rF9nQjSs7jFztsoHbZQ6AZHtCpGm",
  "key34": "59GWc1RpHZnH5Ysd7J6HPo2LmE4XB5uv84Tg4obSW825fqZQj82wHPbSrq7RKNStvnyFiUChWYLU1PcnTYo62eMP",
  "key35": "3tyxy7xhf4enLdwujxL9i34HAYTeEQRv1NaFR474G5qvmEuLzxQJHCxHuaFhgw8bMJAHGdWvDyeMQJtGkRhE2rUt",
  "key36": "5i2zTzBmzRkmSkWpMTTh4MPjiArtfJZptvW6hHxfTpjBnZRNNgSFAdourwqaytPtF6eMLbWc9jvG9VLtApNWPvex",
  "key37": "64Wvcx1qs3AhimBh6rJJZ3X4y7K1FVav3eVeUHw4ENKdd25zR2XxrqxFkHPoRnXFHJxuiDqSWuNRoYLZZHbXWAAL",
  "key38": "2sTggv8vkUJPLMPwFX84D8zkaLAdk7fbT45W7e7eHrXbNfZcPQ5A7PoCJYjNby272CzLCatuvsi1kJr5DyVt6BRk",
  "key39": "4SZurKF63k3wauxF2ZfnSigPKR7QzhyZ39Yso68zzgTayYwFE1kGKDUVuqWv77NNSEwFcM2DThz2ktLLeSi5Qokp",
  "key40": "2FhR5f8FrnzmJqXGTARdCuNfQBFPLxkPbXiKTLakUbYmGX2WZHFCWweekh5ivQs9iVestoGkmn1RZ9dFY24brWqY",
  "key41": "pkh6yuV6zw1TLWoT7p5vYyH5nC3n6bipqdpyM3VVux8pKuZiW6WZpc4marDdwCvhSuFPaZw1j5JqxHjRm3vacnj",
  "key42": "5ehmbWG4mstVeKwh4tW6jv4eYGUYNGHwug3cYqxvD6s6oHAAU2GoYCu9MGDk9puKd7tqG3WLbhwWaiF6Goc9Ntht"
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

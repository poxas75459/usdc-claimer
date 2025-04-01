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
    "4YQNo8coiG3jMek4EoioLx8t5fkexvafomJ4RYrzeKFZ4bPNhp1ySCTaqZewN6H61tpaXfhtuBk9Z7gu3ndgaHES"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aTH9axqSNJEyBDY9U9f7kzbitfU7KP9CoC2PjjFv2mG1cSLRSLfGuR4eEYaoRpdojgSQgVUzrAsbrkGr5fb9NY1",
  "key1": "2SQnHccqNovaQraT2oN58Tr67Wgwvd2KTmX1WRBhtQCmfASp2EYogEs2TCwNqGQR4GRcJc3w8dW3vgpEGGfw2iDP",
  "key2": "4kyz9ZFzPysRt4xzFvNc867nvADZ9pTy3fxafH77G7bVLBY5kNSiguUjT21PpPVMdRKAkNGhwumt3z4mLQZkREwG",
  "key3": "4oa7uduceBAFtZCPkD5J72vVte84JtHqtAz3EBrmjtcw3cWKsQvzcs9mt1MFe9jyLcSgy2EcqEYdbA6vRDbLudRc",
  "key4": "3DMK1bRxcjKhcX59z9bYkiKbC4WRACKiG7yMGDhUc9fTvnp2nGes4FDYyUNPuiQyum42qTPxrQfhhJc3SEuHfueL",
  "key5": "2xE6NosqppeKrU1oiyknyjQouEeEGAfzkonQUFeFnoQUX9bJ9R7FK1vFcYrcMBpy7gTcbKBHeijLuhYzxEANQbjP",
  "key6": "39Bzndk1bBguPwkDsYBsbvekL9DKE7TtSLnmYWpGERF97ShfmR2jZmDjFYjutfRjPY9ALFevF38ytEmcBYKASYje",
  "key7": "322ymKzdt2yehYWCeFixfkCQGLpZMhJzZvByezcgn45V5zkRwv9uZUS38LrUeJ4gZom4qngbE6oeNDFJoorgtXnX",
  "key8": "65QfKJ9kbvUYzjGUXrSNuciPQpSGQSQDgRMcpTLz4Q9HG8sQckxEKJtBuYiZ4q3jg1vjSwcQqEfy27ADTW71mC7N",
  "key9": "55yNbTtpE5TMRe9Lo5dLpHAaSL3exHupLaU9c2CA9zDniGn2pbxyDDS2FrvKwHstAFTzGFZygnyQjCUGYy7ootLJ",
  "key10": "2GJzxcAbzM2Yoxrz42hxbvfpMCu6pzTExu4CcweKh2v2ZK6ig4RXEA3hhQ8iqoWzf96tg8EwjLajhcSSWv17axD7",
  "key11": "2DAP5VCPiCMnRMdtNZqWMqq1SCwZ1P8V25gX4bNxZoF5dPis5aZf5c8yye9Yxu6x5PtfmuWFDqmzGQe6X5hEHA3X",
  "key12": "5G5M437DJDut1LhsUNfiZiXKm9pAgkBauHZyzruYLRj83JGVupohXCoHM4DFbP4H9MYXjGazgGEXMB5CQ28t2Bny",
  "key13": "5XZAa7PcaR3arqiMRsik2rmtzo58swoBobw9JrH4FjSsacZc1Vx2KRXqJNyMJTYjdcfb8c88fWfmu3mm5fPbCs8q",
  "key14": "4tEdw6Wki1T9f2k4eM7Ry8mxkKsZHBpRs5oKRozpsB8xStGwmM6qj4o9oFRRMqJieXRDdjNmYwnWJBuY5sMgkGar",
  "key15": "2L8JVyse7PnoYPvzhgBn1fccPfb4yB2jF4qRqxLPZthmypqvW8KUhXd1H97bE3jU4Q6SoXXdWCwUinGzGpydp3Bs",
  "key16": "b29LgTztW8bRLh58p2ghN5XtLJSkcjA3Ry1ggcTyheaMJZPmjnRpjKfgsELjSVWiGmKLFZqnhMbM4LHSToV1cCZ",
  "key17": "ZSoJQkEiHKHSD9AJxqsujtxvovHCy4DJBSQELif4dAUFp6smtMxFbTaZpxvhMRN54VmQ4GLAtacsCSaUoPkZR4m",
  "key18": "VnkTM548iHogh9WeMCyXiqYe7Vjzn8BJbQqy6PoTHCqc35YNvxzWPUDaePwkXB2MxgT1AHSmvht9EAa7C5169za",
  "key19": "4tNCGeHBPg2tvKJUv2DRA4x7wH6zj53HYDxRnF4D61jhwDHo9ueriRKWB3YFQJcqxKnvCQMTZutW9jjw4wvm4XMJ",
  "key20": "21zZSsMg7JxP3eSwRL8xNZi1QH8mux1DUXEdt4agqqWyfGNCFMHYFuZP17dUAZf5mgGBkeUk7LLscrm6RG3qx6nM",
  "key21": "3pvybqZwPaaZWuMrcCRRwY576sKojtXMQ1f9Mht3NhV3tV5JG9BQRBZkZuVyyvqGQfpm8krLTc8V6XAi31hiyiPX",
  "key22": "4UuXfPvyMEQoWvGyi1aG8EnLHpvteFXqJyGpqosDddAPYyXNrx7bmn5CtU4veSsjdYT7mQErnJbp58owmcydoJx6",
  "key23": "4ukNoJQNUwjeoeVfm7P2uj4VQDiS8jgzHbjLVC9oEQN1H3KGjE1Zy6m4vZqrgoxyUWquDWYg2LDimiXwEkZ4v9ur",
  "key24": "x4pm7nX7biWPXR9u1m9wrDxoBmScvxhCuaip3DxJEaPn9mEMJ6uJWFVwreLTYcntx3uMBcWhPcebHuuqxPh9qM1",
  "key25": "3WnbmmKpJproJA8vX25dQVBHS3dSpzGEo3XkSUBtvcq3Tganzg7zmUoMo2phNpAAA9ZdTU8aTwTU6vrc2TKyH1iZ",
  "key26": "3Crb2GdoL2dihmtTHC3uKa4hn5PUwT6XJ9gDwcrSf4wzwhjFmywg4hqXFterYUE3HjGBRnyYfRsKoYKgodozrTht",
  "key27": "2CB7s7LVCoGVpu8iWv73QqiwjV8YgxiYwP3AXd3DZ8G7VJDFEprV884JdgVNfWVz8UAXyo5THFxsHkysQR8LUYGz",
  "key28": "3zwfT5Z1uXzzfjFir6ndXcp1H5bXJi4F7mKFcx8DtxA192Pe7DvVXQV4stDiJZxYvFbpcp2Edyh5THX8dgwHvSt",
  "key29": "5yv1t2Gm1NdWTqsB5hNc4k9WEWtfTXX2pmCybcdhLu3B1Jfu37tZG776zKUAZ4LzbrKt93cNjFm9cAtJ4ScLxupV",
  "key30": "3cjEJpTfZhYqXpi8CMLoBqH3GvDLkjNJGLPj5BuicYPFFBxyPSKuH4M1rQqfcBMhYETxj58tsTSus5rmGDcgD79f",
  "key31": "3DGthDK8WSCbcu2ez5Rfad7HwQthMZRNrwq8R6E9viDtUqzVvEavT82NVLWv56cTToUAC6zx6xj1Fm5ijYmgyVo7",
  "key32": "4Ezs4Ljv5RdUh46QhuysMEFPrAFYiEk4dK6qZgUfaM6PoD482droL3TCijQtYUDA8WPB9Hctrx8eoHKcvmMA7jw4",
  "key33": "5kHPj5Tbitax5yPQeRtVx38Y8mrQKfM4skEVyPmKSn4gSow42hQYJRnSNCK9J8G1KkXk53bTwet8z4pUuZBfDe6S",
  "key34": "3J9bosC2CgK9TvpEoFMcERhs53n8hPgXshLhcTjQU2T7ku1WuVqkUTvby9UPiHrFxxuBWCnnqW7Q2iYmbUKrm3sf",
  "key35": "43GTyzH24Cu5xzgfgC3CguoBWziHpFg2K7vgdvn3Gp66Yv8cDKTJiFW3cKPCTkbb5e9m7XVBzYnPp22xKDfLv3Tn",
  "key36": "2Qxrczxjpy6B62u2rYrdx3drPAAi1RzLvoBw2WvQeWdKZZPTUqo93AS8SyW3RYSDSTmmiw4AbhyCakTMcN7Wfpow",
  "key37": "5NH8aRg5JVnQiGaaF7ftGUkeftZZtDA3BhwNj1Cks31VohAy3gYmTEtTLRBXF4jma8cazrVdxsSZFE6CfYUvPCck",
  "key38": "5XnjxLS2rEXrkEjMRwNbix81B7tBL7TJyuqnPrnTpi21VxMP8sMfkCL5Xj53pUv8kwkU4rAR3nqvLEScmLHwQ4vh",
  "key39": "cEffWYNdwksDHgTwXF31ZVLA6YTRW9DSHdCQBY9LZyai1TTh2QuBoAUyj5ozNddZTVRHUqK9AZWtEKobeqXTGWN",
  "key40": "22bJZTD44XeZ3nTPcHMvEqJcu6idVqevcps3K44xCutWdxR7tBVhYDqbx2cRff8MTaNrNtQUmTrZGEm4Nk4tQkRK"
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

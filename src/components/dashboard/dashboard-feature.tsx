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
    "5ykaeLUCEHTAvRBkH7pV2gXtqrqCPCt6mLUYB9zLXoM7ip4R3Jh6XsdY83U2mAkH6QQ3EhPQpbqQRabWWN6TwgTv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NWxhEFM2BxVmf48cs14Ew2371LYVb9iLdmLyu3J8rbsysz35B4sbtbGQp7Gy1nE9eb9chJwvsiCrA9DrSJsrTcU",
  "key1": "5sDVyBjqeBEgwAtiZ1Yf34rTaVaK6kKdaM1Rtv5ox2JDc91VkJM6YSaf1YPuTg6boHbwq9BNjnf34x4mWML3uKmH",
  "key2": "3ewtdcvW4SpWiXfi7bG1826a94RNQFooF6MGVzbDAMDgRub1dZFtWfnoBHBr5abjTxAVUSizVBJ7f97dNMDbcGeh",
  "key3": "2dvD1cTUUgEkZjkvQswGvVKFhQpJRq3y3gUXuVjjGk3Zfa4uNRitWBPk9SJcGUKyQm5VAaXzstrYNmFVaZDuCaiH",
  "key4": "3eE5kuUD8YosPoVipPNTVtFHht5afLPA6PvqAqLqkLthjTHzk6FYaqn46iQhLPcDZVTJhDVnW7TU2xhxtQEAjSMs",
  "key5": "5DubFe98CWSYehpTwwiJtvPxXgmfsXM9vbPBynrH1aZmbdBE56LpufC3LeqSVumdqDAh4fp2Lae2A72j8p3YkB6S",
  "key6": "HP5U3JHDV2M96Pu9Fdq76BDk4u8X6JcE6v6ntQyv9NC8cXZTto7FJVJSAvkgypbTBbLx1NLJGVtt7oL696jQq5k",
  "key7": "5uHbpykRBf3gfeQG9cer7n8TDSqGxNERg1tsSnEKegGsYk5acHYWiKxzo69V5BWhQ6JReSWMBMtcRdycuGTNdLEN",
  "key8": "5fYZAnanJvWUGC9Wo1eAvysWm46RHJFfZqPJwiY9LaGAaSEuCwNuPFCNXnkoGQaoM8nppaMWLf5YbaVg8b4MkM66",
  "key9": "39Tcf35QdWHZymJDfH3mD9HGeor3dLzeTy9qgkQ7PajkcR1CTGyQPye46fEwuwKENmxFN3PCm9BgsP3MprMTV3he",
  "key10": "3pnDRmNEcWbXzG9fpfU4wFFiB23LPbwUSD2LnmqfmUYo37sUJ733c3Tigoe7AbkAw1Gk9CuPwmSsY7CGieJp3oR6",
  "key11": "66YyHD58ypfdhgEfRePLM64eaPFE1sovYC7nDZWRdRXcpVckDXTD1GrGAz7wGLJHqbtcKrixiubbLfiJpTksWaBV",
  "key12": "4eGfmsUtSThxbxok7eLyjmLSUv9Y8WZwzNfdwTn82vv2nMw4ByCJxxkwsCCKKE1DYgUywFxfrDVQbkLMuryMLMwk",
  "key13": "3xrLpKgzubpr7pTNMYoKaYCLdTEwM7XWw1ChQnumChtSpmLN2S8PbbY2yFY6sn5ak4WQ1PdAptZPd6x4ii7y47m3",
  "key14": "3zNab7nyLBhsJPcocc4g8nNGwqhnXdmhWDPPwthbekaweDF5pTfTQ83WPkw7rfBVtHZ353SD58qB6DhnoVgfyoFj",
  "key15": "z1PKf4Kemt8ZAaSinSHdQZsqbx3CDJgj7SAAP4PWmjdzfccS7UEF9dHw9sZorrz3kp5fSbCWyhDWjbpNWx6Z1LF",
  "key16": "vCRg8oFmQKEtiRk4FqbtJS9sCPjY7WH2ifVKGpvWc3kCxr61idMAgrSpdNtPDNHWANoakwpE4Gxi6Z2gqq3bVzf",
  "key17": "SgvovVVXLbamSwQrwFiuxuWUbBQLLposZe2VBH8wCkvQi5CSVTKB2S78wD26sSusgxrPhKnVbsxLiopELjnquTj",
  "key18": "kWFqTLWbTkwZjf6oPk4DN1Fr4MHUvtzKj9LWCeAEhkExF2WhsY14XvmCNHrtVpntnQ2oUwdHWorV3yqXdAf63DD",
  "key19": "gBw86Fyd6FbKhnFuk2u81BKfXdsoWJ1ZP3C7q66TZ2gAdLaFRgBBQ7UNAjmd125vdS3y5gd4wGWXMa7FB8FpUJT",
  "key20": "28edAWu4XVrkRrHvsZLnoZAybF685iBciZh3mkEkpx3GHN7edhKg6qwXJAhfQovnKqyTFstUrJxCD7wy3GEMiNhD",
  "key21": "CbVNzB39j2B8BynSeCiACrmGiCgzFuy9xr8G1Yyn1DKLfyJedvTMc9bMTpMnQnwVYBsQ6cAp7WD2CT29z3MzbYh",
  "key22": "659bec77QnhMomvRNcnGyuBrmxgzat3bVG5ePAwKswkjufFYLhNEy2W9X37XCy1zyLQcUNBcXrWaY9DbEojAAkY9",
  "key23": "3PKDmnH6fy1aRk7FwsDuzExnVo844LHXBSUjfxRX6SrBceTJzhq14qr554CavXapjHB1ydmya5n6EEu69sXcGbK1",
  "key24": "2KS1FLcMafWDMNqgKBkMJun2r2wbNt6JqBCk5fAoJSR8sq7CJCraUbvEiFPVDtcWFa8ft7zDR3RBNH8U648479Gk",
  "key25": "5kMtzT4ySa19zK828m4Cx5ToogXPwHJ3uiSyEveaQPgTPWBuxVk9m6dQoEh5V1yo11QCSPCt52KyTtaJWyDu5Xs7",
  "key26": "2jNHfnAzjkCwsR6mpfx2gLxrGhU6YutWHAGTW2j5FEBDaUZu2ZRuC15aM656TjoekK74EcJJQCzW8SiXi8bo8gU2",
  "key27": "4oWcTGscdK6nJxqQY2EZVeCQ8urkFDzkSuU5fwmvZZiVJ4t1akNLdGEo46Dy1qp85BFNMgsxFutnUGT9NiLE2Smo",
  "key28": "5WuwaGJoVEeGWLPRdv7Ks4WH2Nox5FqNqA5YbPjJz6Qgwe1eE31cd5DgjjkuQC5Gyhxv5EajYYw2Ypz3VkSRRvTQ",
  "key29": "5mdyKjLa28qPRoTK4xcNrYiMzuBhkwEjRuCrZp62KrMwqzqTpCze3nymnnQk1DoEv95FDJqVn4aS6g68BEg15LiM",
  "key30": "4cSSfX3r3uTctF3v7ZBTbK86yWgWczR1xvNMTqUg67MPJua3Z2hcx9e2FZNpqKZL9MQPGrrDx5GkA3YeNYKYpLCm",
  "key31": "2L8DS6TXnH8HD5xcESNM3nHYRkpPp5uKYtiLKfigXxLhXDkkmotQWJDjdq2noqekKLeg2YEHgJrtRktAeAzQUESR",
  "key32": "5NNawZp4HZEhchUMXrr2kpYHZHt1iV4DbthSyDtM72i1mpsRFVMj7hXgeaxnfNinqCidomiidnTh2VsiLhqPhd2y",
  "key33": "5QdGuBsPVmByUNwBuWgfEFP5VRDo8Cwryi6uj1dHPfyfGRAdgUEBYKKc4DF7RWTWCA8MRhsthsU8X34tyc13h7Nm",
  "key34": "6aDLnVUXyphzYRER4ShRBu7z73sSQjj6am8VPoQhGzP65DWSpVwJ6GNaJ5ueZRQoTzAEV1jfqq842UhaqJxKHqZ",
  "key35": "3VDDNo7HjLmyPvEr1pMSVhDvzgRyrJaeszK6FCekbBySeMM47nCYPTJL24LAHJucYj4Ry6ovGxaQqXSchjRRWEpQ"
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

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
    "5ECLUcyUxfjuYi92BkvzwYkXeDiNcStBacvYkwi2j7omKwHcBVhwTfJtDzKd4U9GEnxmUyQQUMhrgfuB5PZY7eoc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eNgvEcWLjgBTm3LCF8BcLzL136v2oBDQQD9GZZwufHUMAtXCMtcqW9eTSSgZzkWeNpgTAypnL21mEdCA3QKPGaS",
  "key1": "2eUaNs263EJ31ARhTeYWw5RUrPbgDdLytFP17uRKqetesoCnL9Pxun73173iMenZ5Rn9aXoLxNS2UNkn6KLWxshF",
  "key2": "5Z9bknx7ygFpL4LhAWcep9zb9jDCbd11A6KmheknkkWPdpfU6m4ALnt5iV4vFKgWGp6EgAg2ZsFV8C4fd9c8WCA6",
  "key3": "5upmzQK7ZC6i62DTt9qySnjv7xnifA88rY6So94jDsRUxRcmLMe728uSNSNeBSmhYD1NRMoUxLYHTc6r2pwW2mGd",
  "key4": "3HZ7PrNz3cju5bovu7WJ4nFmwNTLJ6Sj1q4BRdBN2oFQNXeW1qu4SH6uWmrnMpRLFPhNWxj5FVZmoaERfb4kSfZM",
  "key5": "2Vckbe6DrYqj5CED84fQRbUTczC61FAgBSCRtovew9vEzNXMerwPfzGsmpHuFYu7AikaCHEP1mgDTfBgPhep8g4A",
  "key6": "4KYa2DrSSzziUXAjFgnpXVdfm1Efw1ucADWvMMp72rcwsxubzPuqbYnAaAsGos61aHCAEZuHk8PCU9toYu2dE89Y",
  "key7": "3bqgcRcqrLbD9X13rNaC62ST4x4toysb2bS8W9QbZSt5xGdSKA19XmWoRT45ax4A1zZKzrCPrS8Vxw5CL1BcvATw",
  "key8": "2MfyLsLxovMEPbHSjx46TTmZAvBhXtXC8HaytzfeeENGkEBPrkAhWHFqh2DKmRpnsmqP3EwMXHoqGg5G3VRoq6cd",
  "key9": "dzDteWxVbcNsuaB4LyQf9hdhvrtVCGxUr38XaQxuKy2J7sn91von2ouPoNVbEuFE87aDdd3ardX9LttTU56suGX",
  "key10": "67738oeuhyqLLz8qKUsYVL5n6FvkSQFTPZSQuQEGfQn2KV4nEey1awWzeECa6Nk43Xic8NBEpANnJHVm5zXkxdvm",
  "key11": "eLaiB4Yw5U8BpEXTeRKjaFniyvAK5sPm9MKcHTm4atzPKtVZSd2vwY3nLupJrBqkhTfzZR1HqsG2G9Y82ExDhpb",
  "key12": "3GMmyz6Nvo5KmLbTgM17q7dCLjNpE3RNq4o59mhCZxS3EJap2UTmrpksPiTMFHiEJQZ6gdtnEZ5HRGMBKHyUDZfF",
  "key13": "62u2XUDFUr9PXDxGQyiAx4eMuz31yk9rq1yc8HMranZ2JWggtqg26qqgSkQP1Sd4Czpws3dRYcppadUa5gyE7YLC",
  "key14": "3wnu45pQxhcfdPL1NTyK4rhz9DzPmKnYq6f3xMnndYFLzsCEeb7dU4Lt7TNrhbd6JufVhzSgxifw36H6Qm5Cu9CU",
  "key15": "2pvgmLe1ZAQAo1JbjUgHcnmx1q4kWniWujwP6FvRYpEMS2c3AVJH8sVb31Y8kGQWaCLKdLiL49Yz67V6TU7ZyXYy",
  "key16": "66jPp6UStksm2CEsJxKvKwHqXoJEBTXc8ik6UsRsH8So6vnRxj8gusAFLicWa4WwkVUKeaQotBvqE5yGcgaZqvb3",
  "key17": "27ckSr9G5tjrUdFtaxSfxQAMbU9uUcygzHwkedYvE3ZfJnLipTiRnDQ6tjGniRsA1KGW9SAkV1TPKW6h2CnkV54p",
  "key18": "2sqQZdGVuKmHMh3KdzuZZ8Qeghyx7efE6N1MNfxZQoy4q7s3BmiJEap6tg3ncrRBhXgKLditvD2TZHu8ZqFNSYwS",
  "key19": "p1tovDY5Ux3EShXfGyP6N1tE4fUVRMiqSSTbmXJMdxKay1souyLWw9d6SMnjYTvuz2VEjGMyWQeS5wGpDBvnr6M",
  "key20": "2f8nxGUeXUrajqcMFmNiTGTZsDgLiei7fEj6ESQU2VCy9u91NUPgB6MpNKcXSSKWr5ndD1APKpTSggbkiiqp1GAs",
  "key21": "5ivjgQdRyvS2rCazasuVU5yVpTiTpABmw1GJFAszJc8eW9Kein7CvyxgLX3754brRhwvUdwEqDnNgm2bnEpZGHZV",
  "key22": "2QSYuUuDfyu18ufxiqafDbGXRCGncFaNJrst7nWqnZB2r3XiwRbidRHUA3bAwadRPPszoh8yNgra591jJE9naxS6",
  "key23": "4y8vfMxvQz1HJ44cougfP1PKLUFcduVa284jcMBKXggczD2Z838t5pus84UdXxbb6G7VEu9uTGuhxXM1oxjAVNSh",
  "key24": "38TG13ScfJfuaLY4k3cui3rPWof5eFAm3gQB2V884AQ6HGGBxzpuNqoB5Zf38DFc4L7s2cenNpK8Bhxy6smD4Jrv",
  "key25": "5upZ7sjsLW3jhzGgjx5is1dMmJFbaq8n9T5cZktkWNnfwZs1kNzx9VBajsHroG28sktPdNAoMLn9gNbEyhtYy7xq",
  "key26": "2AZ2XaJQm1UconUf5hLPnEvPXa81FxhXvqaG7naop7x5XR1r65nDuwZxQwwFwatb8JtTnSHkX2do9AdYZgCqdyQ9",
  "key27": "6NgiSpzTRieftxeSuoCErJWMqvM9Eeda3B4iLijhbkdKoSEXHxJi5ZRRM1Pb7C359EUdmREwzoa15bg8n4JPEkV",
  "key28": "5RS93YWRfuDz3nJTVWe6MChE7Y8vRFRkzZekzFXYfgkGdcmDUgDUTG4FQb4GQhXnf5xD4MnsoMYJmiGQ2hTqj2LN",
  "key29": "4uRn4WJwqQt1KDMthrT2xeprCP47aZPEVuJ3MiJB9jpBgVPteEhTbYPX5iXnXyPLWVphTBkphRxWkbDCtC8TcpKz",
  "key30": "4J4iFvt3mnJpqFtEnLqTFgdnT9kbguuUzvtoN9R5e4sQVLBw8BodKCCnGo4pWPWc6B3x7YEpCqZd1ik1dMgijyBL",
  "key31": "HFcmX1GCvxUAdFEyYZj5xt5MnLtpDenkMP4XSsh5BL74nTjqobaaHbc1coiYNBBx4jZAQprtanSpbR3iQeQgAfX",
  "key32": "5YvH2Ut8HhxjSzpebwX7A1GFRPtspT8mqHPU12xcNAs1Nbu9FGhYR1xaAZYBr41qZVFq5DiQTFspyvU8vMP9t2H9",
  "key33": "BTMLioiy153KtFh3kbbDBnpwoscZF2xx8BwnwNvapjTqafiThkMRU6bmvVZChMxhMkzbvRaeqLBeg1qdmJt54zS",
  "key34": "yGDZ3Dzhzkfdajj6YF68q82MJns1Hi2seQfTyAghNLh6XyGwyLJ4wfNteUvCEGoxqh8r21NMcJMRcvAxX4CbtXt",
  "key35": "2WZ4cTc8h23vC64gsDR8DJzxUFJqiGJooxLkr2bPe8iAfyd3azRY5uEU32rxEfiHVNr1TZEn5kfuEduN2KNgCc4e",
  "key36": "61FgaiV3qbstEK2woVbWK1nhrV86ou99PnJjfedsxYbsareTqfrucsd3F67cMwhcZgvpB7RWreAaZUwLz2kuWHWx",
  "key37": "4p29NLdPzSU3YgQf47jFbVGef3hxrbiLE9br3VNR5ZaV7M537gkHHRYmAvNNo8Mp6S5ZrXVMmZSsipPL9iKJAi17",
  "key38": "2ZqKGjgWyVEV2TjpDvG5MAfU2NrbgBtWndGYnTb7D3mD6LUDJ3KvZK16EyjkQodRcJut3mccaYvJfsa3bpeYAQut",
  "key39": "3ZnyRJW62UYYhkfe2Z54GYKRoMbbdwgzThnWxH7FhpfdbbQ7NDUthYTsy5iBrxCo944TPvP3qNJcsg8WdMc4bdjd",
  "key40": "2nwttzELUnZEmno4qwmuhJZMcGLxxJXc7EcEi2kfTNi7h6VJiug4M8wuVqbiG7uanba6aqJSJgaorXi1JKeAbc48",
  "key41": "44hV2cy1wLYfpJPRy9pDpQrfJ1dP8gGdSYUnjUG3woysBxuCw3e3abCvb9E83GcoggYsJSmtAcdK6VQ59LguSBi5",
  "key42": "32pux9rbs21ykco8XHucYWLeLS61VnRR847H33xP5fyfWGgFJsFXJXH3QUhtMp7uTW1v5gTqqzRPMTF4uEnj9G4D",
  "key43": "WjeUvg1ksD28osfpkUbi3nUaJ2aRkuQtT9TmQ74qwUMmLTH3eCukjsNAuDkcWGoVdorSGxdKezDUwGVTyEstYa1",
  "key44": "5ePJwa1uoEpzCkUht8pzh3Sc85kGw7s1xVWNEjbji3DZJHaXSxaKmDaZzcERosZo1uJGfqdzqAzr1CzzhLTWw4VZ",
  "key45": "ZHegaoCN2htZ4vHEJqGJbQyWadCeaMxz84YBMoFHJimUbaZKXGQrKPU6ACCJxehCYCgnswir4j8V56CrYKHQQF1",
  "key46": "PoHEfawKbJHXVRvri9MV71ZuDXaZsvukNLqzFoSNeA62z7m9GfGyvLnzKSAP6siaP2znRpc4xZ4Tgiuu8CUXR53"
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

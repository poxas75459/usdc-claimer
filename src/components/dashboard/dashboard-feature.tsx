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
    "L81CBaJuSVY1nd1XW9Qa3eFLk4iqWwmKb1kkyuR9RcZouz3SeXQgacp2ZMwzw2Gn2QBFTd3PrrJdKSaGBojLuh8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k3eWzbeQyPoNCwbBdXTPZ9KytNZdAFbozX51mCBMWwCHvaLjzrb6SUQfP2T8XXkDNkQogjAh18nFSDHe3Mcd7Z4",
  "key1": "5xhMxGWxjudv1LJt55xTqUVXdss6CPWcPxDkLuHAJ8Uit9NJmA5r2zMjEBEbVo72Zzb46uT4vmz56sfhc9LpuBUC",
  "key2": "5TbYos6tPqBfASZbcvrfwFgUZAapFsaq7NbMTigGghS3on2iT76ajPP3cWwYhFqSUcGTL4hNqvsyGqq5VbLeRifP",
  "key3": "55q6Jq5uGD7suFdn4Y5e5NKSWfecGBueVkrEv6fT9HfecjK3k9g5YKBdb1LVYvPyDpqEVKxfssvZgvtCw7nE9fPN",
  "key4": "JQibH1TRH7jtjhRkqWvqCqF3mWUFCNcvJE5WzHcd4LYkzFh6WuNNfVrGwuuZbxGMqMXdYP92YUkGFn2PpswCaxt",
  "key5": "5c1rYTTJpdgiKwWYh6ruaisv1jzBi3eBH7ZNWXT38rDit4qeEYskLAKfam7WvjaxvWo7LypdqKtKESxrRuYk1j8E",
  "key6": "4HiSSjvQ8SFWTqp133jKH9rjUEW3nJEy23tw2JUhCiFe2gPjR9QGxBwGXc9Eb7XdyC1UhmpQXuA86cTn2bJCwHbD",
  "key7": "2fyzzTuMfgT864zdkhsSDQqddoRttcyQepi1Q4rBRsZWfE38qq4HpUdpjXQtvQJJARrqxVymsGzQs4vq6E6iHtB6",
  "key8": "5mJ1bGpFongQpvYnasAsCPGbj6CqnYhyfwV6Yk361QHZJFoGmFwFpMfZj8HrnsQdK2g3kXkGyykJH2mG4GZBq9cV",
  "key9": "31YfxEP7e382XfMVs4cRi176iAcTaz62LkNwzFiD8Ebh5k4ZYsywJ12eKZaQXCCkBMCBZRXkPGJXj4jeS8ACYTWq",
  "key10": "3MVDKUH6JDwpUGyrCZ7P3DDwz3VEe4xVdAhr2EzsTQSYJdRJLSdDps4zZAupFEtqvJ1CskN89KA7Mh4WozZmFAj5",
  "key11": "2FBLD1G9kEeLQ7RAnxsfeXGsQeZEiDDYBbD2zNEE3ZJHZaABgAW6eYk7YB5XD5zRjtBdjxHXAUVokAKaaPV6k4vE",
  "key12": "3mg9RAGQba1LuC241nE51KtRAc4zumSPntwHwrNeHA8bcaiqVqCUtEvwCjpcQFzhfZVMexc1L4gd52Wp3dRu9UEz",
  "key13": "3FU4ae1ntDm2DGuDVGCKsZfWUHdgnrsipx9Y9z9J5bFyRG1mC1RcHNZvuYUXHDaqrEMaJPaWhRERADMcBoGwAjie",
  "key14": "4DdJuVMDsEhdVPwD56jcTTe5d4mLMbVeixhBJQ6DjU8zuYT7z9NCVmfKG5bJnqxYfqZerJ6pLQW6Kg56XQZTKZNY",
  "key15": "3sfW5cEicRfHrxNwC6FCkmCRgzpSe2cEjVhczATrjPfVHfTnmjNzDt2XDYBL4rT9NpWWThxDinWNUWzofokxa3Cc",
  "key16": "3J9ofKBsPK51KPKzSAGBquenrusr2DQxax9CRLqBpHP8LPTt5pQR8UPhvNLB5ZcTLtXvFu2Pogsk7fk5hbfmB9r7",
  "key17": "1Qr21orumerNzTQQ9zZU3dC6hWbq2KrRLXpdEZZM8rVPQ3LYjvbbXGJmHDGq475NsX14Mx94hfjBF4ENvME82Zd",
  "key18": "2GZiMV3VCZpZhquggfLmN6onFdneUL7RMtN48ctTbHStZfVhcuwpYNhwFGWEXHrmi2EAy65gE8buadMLCouyTWNQ",
  "key19": "47WEjXLjhXUJV1u6rhgV6VoccuNBnE1XiqZH4fPjLCyNVdhEKmqZZ3LSMVH3T1DzuXGdd9azfxu76vrndYd7QudA",
  "key20": "5JXGYZWSmVdqtRw3JWnSk9D4cRjQy9Z9ygY94dvaaat2ma9ikYNfVDCC7eQbKLxee6ggfXAEo5PRGp6RSfN9eZL9",
  "key21": "3gRHy4gBZHu3pboFbPamwMKR1VshCRkkZEnGvshuSvcAvrK1Gbvn5fy1QW5zdxGcmFcxsPYBj2DCMRRZ8KKAPsgX",
  "key22": "2Be5smv2qCzRmN2scmYnJtn9u7WXGpY9ccBxYDBPkGSdCF5KRcEKutmdHYLrUpYKuaFJGPwcLXFxUtu3wWxSHdqb",
  "key23": "48fA7TGtSvfn3U9rSf2ucJVJogGn6wCrmq3k1Ly2cgFVGSvcVtzZKQFFNnSwFjy2oPS6xRaGta7NwzwPncJEUXLK",
  "key24": "4yA3JVf12ABG2kW5DD6Tr2WGBb8j2VhpUAZKxru9k6g3mRyZfCR3PBTbQd2zkUMux2dPD9X9gJpA3i8HUcQcR13X",
  "key25": "5sL2rZdi2L6MBxgUkBHLk1T1PusMrPze6nF5HmaRE32KcbXZRwrsL1A9ykZU5Jaat8MLKQia2zWAJEJXY6mevWxS",
  "key26": "DYP1TRarkEZ6S7fEPXdw1JkqN7C93bgxLsVnkKnRw1ZgmcrtytpamQGTRCQEA9kq5C12YaXbfwGicDztRkp72qt",
  "key27": "5qeBz2J1fwjG1zF6qzGdkbFuEhkYbUvdCvh9n5AiXhTf8cXbSSXXtwggz5ggYWCaqbnhmkJY1NkbRABvJCsfKQ2B",
  "key28": "SBhy1tXgNZDdF8QrD4snmpNYSzqi5q6NzHZHLtnwPSF5eu58TT616eWRqKGx9PRgqNiHXRtDqhzrbvuRt7b6dxR",
  "key29": "49BfZU2oFQ3SYywPamHmadVE17juYy6koQrpoAqaot7FmXnH3fqKQFrj2bdfThsB94dzTe8DdY1opRK9Fi4ZVmJB",
  "key30": "2geeApf9sU9tAWUL5RWsHA1sWRFY1FpeeWzSFy9oiUi3tEULgn28fhZ1b4xYbHdfuDUqeSPnSGzY2pHGhWZyRUSh",
  "key31": "5Pmc1Joha72vxuGatqYtXXxCHCTjf4wxND64TB1muRqJ8XpDsZ6jDBVPDMibjSAJfaoQGSB7w4bwbqpinBiXATHw",
  "key32": "ft8jnkiArY5NVnDhzQjrQyZdEaRpwh8kAExLeREsiyD6Cm7zgXnjXGeuWHjkAuWiSwky2cAvarSUBJoDVGjBuwA",
  "key33": "FmoPtA6CWg3gB2tTcAhT2kubyb7jK88b4zZewaRaido8N6Cx83CeTrCP6du1Swex5oDdWo6FCacd947jmADnTbF",
  "key34": "4rBeP88BzEHXXjByMTnq1wdyDMS7W9HZS8EzVhViuhMieSbeBNi3Bv1WRHH1BbjR1m9swa1kBQ5wavNYMojBBoTP",
  "key35": "58HGYSh4kFVtzj1PDa5mzKi5DMCkmdZqs2gDFtnNvVGVXvCzDmnYFwz61twHEtFytX7NnUpMkZJhoKVKptSAjtCo"
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

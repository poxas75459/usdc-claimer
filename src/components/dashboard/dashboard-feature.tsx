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
    "4VFZXTgbdhAjA4moUfPG2gNg6vLgBN54RpepVqNkqs9pBW8Hi1kpdLG9FVPDHR7fcRSbenuMDcAxXDe5hsEQJM3i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oJ5ChXzmPjVuafC7px7yn4fG3dZjXLv5ayd4MFLif375Ry1FEVvxsmogmrVWJB7bPtK7wA8LmGmSCRh8rSh2PZd",
  "key1": "2pmR5TX4ngySQY8TK2LsMFfyE7q1KjGU4fSqt4sM9gHzd7ws5fF1gEYPu3a9Rj8kG7i4UE84q389hLxjweHQW6U4",
  "key2": "5FSL2tamEx4T2pCieLbQ5psKV852wx8ZZNZ1sRUZgb6ri4JrPkrRyFWfwHHwWM99REqUXJu316S4Jwmw86gmd7C6",
  "key3": "2M284HJtxptygUFufKtB79S2pcL2eVdB6TmwkRo9dYcLPDAjY4Q1KfCJFzBkTD44Lt54YPEJ259977mAHeFGR8h9",
  "key4": "4G7BMEPtGhTRf6DDyGxxinyhqJqJUvU5h6YrMuQhP33UdEhELQADWmcQHh7VAewRJTiUAdbWp774jx1DwboApM1F",
  "key5": "5jnXzcaCdCLy7TcsmLJ3xq4cr3U4M2HXTcSoi9hBjiVatM6mXFsNomrVskyc2B1Pw8WDcYshoucb6qwTezW9xTsd",
  "key6": "2XAzU4Pz6b7sYTLVjsmLDFvM1kW4bJvcE9hjD1fpJ8EMApzrDHadYjCpBjGsk6dXs5Ejbr3o5uoRjH3GqNabJoBh",
  "key7": "2CZvSW8Ld4dDMEZQZM82pyfWyyLf2egA8Kspowur7j7iHCx93WCSbrJRuJBE5aitxWaJ61xaHZXt8RyqiYuLubKh",
  "key8": "JtEUMJsszpMLwWTTdXevtpFukXz4hYSpBUKsLexo3oCd4ZExsS7Vanud6WVm2p1FTZgtSByR55haritLjMxdVZw",
  "key9": "4LAo28KTwvZa3PDMqY2c2asxFk7HqpKM879VhEF5o2SGphx5UTfhMJtQeR9RU2VW9bcgt9P37YbEUJDMNAPh8gms",
  "key10": "JmcoQd3EnfJFvd6bZW5K3vY9NDiL21jy8fY1WNEymH3cVJiHQyEoaUNV2boavyFa5MuX4pJ6AQLaW2UMB3NWFRE",
  "key11": "3AopHSqhgc8otiTidVmfm4nG1Ma9g6rFi2XQAVAMmQiQJymSKngvsykHHENMnYsew1Pg7x9EGZp7e3WhPvhM6niy",
  "key12": "3NWewvuPDjNBTDU82FgWci2en4pddzzugRAkP4RXBVcvnXX7QWJpNZCFMpwQRFbdaUbsEsNGu9UV2CBop7V4qCN1",
  "key13": "62pEqT8hHiwEhbVE5Bp6SQhXff1dvw2mHeYeXEQRvUUd6UgMxitX4GAxWejX9uTfFK5k5rdXB9RSRtLb6Qx7aPYj",
  "key14": "2gQy378GFExwNmtMHaUVHDJL4DkgeJ3uGWa2XZkPpZuxTTJksDh5rQJ2QE4xCFG8XcfGCeZLcRyUZ5pUbZg2MfHA",
  "key15": "3tjTvTkuQyezhDms1rCLDhaBMHouG22fWywgLRnHPxh76JzfqACRWXwcusWxo2xGPAuzKyE4RNyvGjkCoZt32Z7r",
  "key16": "3hA8xXBQAxg5xtj7gvQrsiE26fUkRfFhvzDHu4RU6Mi8RZSrApwMdtT4RiTFKDi9DPrwLKkzuYfTJaCViMrWpT7p",
  "key17": "4pRtDGoe6RAqaxQoXygZWwkAi9BwqUovRTUNLvZK3zzpJpGpAuPC5heCGcXNv4dJUSJqBKFETUcWgwUup8MSw7ct",
  "key18": "3aRKUqPw6EWkAoqFkNPxnakGk42BWwR3R3qfdJt5dWKTYhq5jv9XD4MvmFwoeLHc4GcBiEBaxKiQ648pdC4bdiPJ",
  "key19": "w5VWWnJwM7GMFx79zmu4atuDQ4hGTKF4V7B47LyvKgpuWSotsKBhMCPjgRjKPPyrGkYThynNBsTtue2YFLqTNzd",
  "key20": "5UaJWMZYBvmeUt3mGjJBUfZnwyEZmu9xoG8avLrzFh1NVxtBW3xsL8Ku1ZyFvmdDkaAobnwB6prTMxxCVqggN88t",
  "key21": "5QtaD6t8TpJUMa4tZjHS5FAu3V5EickRXQrwjdfG8pf7ER98sHo8BZd3EwHMw9n4a3zQATg93deUoXCNDixAENka",
  "key22": "2shiippz5kE7uHNFftvQXmQEzVRuWFNCteZnw131SjQpYVbkS2JnRe27wnhJDzTHTTfaqVPXPTQcUt8hGSmEdh9Y",
  "key23": "2LsZt51YGvqcDKy4WSWrRGXQMZ5XqbS4m1tPHTbXD1vGSFfk8sqkZrCz61hfemEymvfbup8ccnEoBMvWpAUFyaLq",
  "key24": "35usgpQvjUzueWxeGZ5Km3N5HqiQuTud5SgYkvE2Zt92vPHGkaJpcNkpzPE4VKMSraq3B14cCiisQsntyRTaNQtf",
  "key25": "4Yf7PmTAhFh4C4qXi3Cars2xgS9YeHRKUVWJka2SXsPS8CfWNGnHNkmw6k2GEBBhcHFcdYcEqcUShoGmgBQM3Ahw",
  "key26": "3BQKdmZUxxyRaF6t7XdUcpGaFrsCFmWF3XM4KCxZte5YuSTyzMN5NfNsmFmG7Ph2LMBtKjnsVBPrnwMZBx7MaHMK",
  "key27": "49vzUHNTdT6QqtjUewuuH2SbZXeh2zGoeCtrga8qdUG1zkP38DoKWBSBjq1znFg2BSMK9SoKMedjM2JAuP7ECYWT",
  "key28": "2hQovUTKymRXXSXx9js9Aeg3epFeZSf4saBTAfwquBHVEM2C46P1c3xTAAPdMSQRS2Z3HxKWaErSPY9a98qiGBNF",
  "key29": "55Q9qzsZxQUKhPkpwBEjQSF12BJ5hgKC7w3JnRwCXMJikAGSAWzDytKcLUvRjxT2AVZfjUpjAomTPJRJTJzLRsU3",
  "key30": "53BW8aSKPD68zwRHQpn6tffRtto5BpAFjXVMeCbeA57sLhTrpbbxbUTmMGJT258CMmyXuMKDCuGeFubNMvAKBKyG",
  "key31": "518SuAHUh8GYgC97yCbjEHUWDNeo2neeRibFdL8DwmSGzUmcDsC4oyB3wNUcByyC7Ff9v8YekvWxFkkKULgkVjyN",
  "key32": "5GFgva6tEkcjzYoKijVw9LNMxAwY5FAC66FwaKsiH91vqsnEX8Q9gzPpMZgxNkJgsPUrt4tVZt5qsQANUwGVWZXC",
  "key33": "3tjEqDRCos1J4LqNLeRDoSgSdugD1iVuSzu7zKub93ByHCGRihiJqqdCQ4yFRSQafio3sRxy4XwTirjNXAoitswn",
  "key34": "4LXMaqhvNsdqj5855Gbz1iAaysMusZmrgKtjSSwQ5qZDpeWenWUtkSqHvRfhd2AHniBiYbHBwzBrwNGqCeuDn8cw",
  "key35": "5ThTxRLGT75UDHZu1g9WHz88PfGGbwMVJALkDiChcM5w8w7ksr3nEvT73nA2GcRt76DpQxV8Hmr7ZzMMVdVRU3AL",
  "key36": "5CZ7wjtXvn7wKRywLfKi9QTpLKd1FrdR1SoD4juCpttt3mh2Exuyom4aMMsbBzBFB36vcxrDZRy7u4p9xfacCdpJ",
  "key37": "3YjWqxHwupAesTuw6upe2jLhRzwtmEuNPXP6pEc1gYKvypQ1ctq9ixcuG3xMaRy4eLDL2fP9q4Dfn5beHBuqwdpP"
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

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
    "4zuVr1MDzi4hQHQz7M7Yuc5BMa6Pwv5BzuLVzFeTAJsEh9Pbfch6ofRDrUzXsMPF3GL3Gs84Jyn1rGJzR4rLr1ow"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NTzh4QF9GTPjEuJohTXeWovCF46EBoddFWsxVzxLqmt23a8YYYaXXJSeghUkaAmgaNhuzXdW2PPoseUbgRe4qiX",
  "key1": "creuusRAC15thHQ8oEAqLbUATUQ1PMe71JnebmQiVH5hMuj1J3fNJhrja6PYMz7TT56YTq2GPFPu8nB2xoxfVpj",
  "key2": "3DGLdC431gixgEJpdPXueAbNb1mXjbc1TpcG3HDYaHG37uYjtCxokFwTKX4YAL2Lxxv5y54NtTTvdkzNeYk9257X",
  "key3": "Pec5bzCHA1iCKxxR6jvxtJ4CfKNuxSUfY6WuxnACS9h4XFhABuaweTvGb6Nk5KmVxyTUqXVGaynqmgpvZW98med",
  "key4": "5FYLH8wmA2gK7Utd6m8GM5Xax2qddJyPRuucXbsZHxu34aNRZktJcs1rxN4NCaZ1QKQUbuXsFAQvdsT9X3XwTpgM",
  "key5": "dZzbMochirPX8zAztfj28cML6aoAgAp8SnHwyuNKBvUeXyDomZ3Dtj4gJzUyLdBeaSyko1TYxGahd29nGnBJXpi",
  "key6": "kryyXwKkMEucNXaVubXt49hm4CRT7JL5UDP1WJyDvtM78n1ctKeAmdXW64KHMFXzaCp7GjgD8xrQ3uNcfCgnQNE",
  "key7": "4ZZwqzBxptZLUDCnU2QoEYE4rS3azPV7imKMKdSf3aBzz6hv47Ah58qB3vhnKtYoakrqmK45ydbq5qJ5PwERQ5Pw",
  "key8": "3JHU4xAFAo3rGJ33sUUgpZF5vwo57G3WbS4ahJCkRW2VkYsqCY1pfRwaF3nq7w49UU5sBgRiUdsUHgxDxQURerGC",
  "key9": "UejKXonrhXJjGb3r3mUAzdk9922sCk9RhLajdNm7eYgRnaMHVVpaPhwiKVfPUCfXKaAHouY9xmwvC2oVAJwqBrQ",
  "key10": "qP97pEr5uiDtKutUSPGBDa5F5ndBR4KYgdCEuB9vRoSHUGZJ7obw9sKoSQYeXxsGrNJENTJXoQdUNT12Hvmo5Sf",
  "key11": "2vseXw5o29qzo8C1soHhk5hnWQ33j2bhiMJyXRvE3kSyiSJuDWCQPFrYqs4p12DpXurdSMLqLDjgwiRaVY4Uc2Sd",
  "key12": "4gYFdBnEF7acREmn9JBRWAxgn43iaMJVaPNU3tRUR6kQFPPbfJnrm2xefyozw79tvZvszw67BTduVyEKZKzcHu6",
  "key13": "GnS3xLhVfygVG4ASmmrMyrufrcoAqBMJfbjokWtrkfTM9BtcfcFgJZ69xTWrQ8kHCn5mKfe7xjVhVyzqKKM5tPg",
  "key14": "2xQBhrDHsVmuNKgwVwVueiKyRUh13jJCjFbWAwfEnG1VGAi5bkT1h3Ecf4cAA3987bp4iwRfLFrtrZtLR5h18jYH",
  "key15": "3KE1xJB5a33NdeYQZ4DLwxeCe2CFNqVd1DCeEhBwvBnR7tz2smin8xDSvmkfB73KKLdf7FJts8yHSoPWp7pypjQG",
  "key16": "vXjWRVyKNPDB795mDGrf42Sbmf7JK7EzVRigwXJUgu7gcrZfAu7mxF7KYyEsAgAWfcp4vGurjeXH4CFDe8bnCyp",
  "key17": "4zuaDLw741HJAGNsrjHMzoBpwkFrGMBjpDZMMbS3hbqxDgmjKuRzgDzBc3wjrExRohxSBPZXVZf5FTtVfDLDu3D3",
  "key18": "3WcTiP8M49sLJy1GzS7b3k3Z7rQHGE38gU637WBfmwx2aKMYXHQ56NWrL3FJtcwp9jCmq4F1rfV9rcp9C1tMs8Px",
  "key19": "5hpCjBRU2EdX11eb9bdYxtmt6YgCjV7SzAePNK8JrcfpTP5dmMoHtNbGAzhnqFFu4cYUaPFUpfajMUhFUJzYjPmv",
  "key20": "4CWCkJvwDoM1gfuPRkfzkauM1QRkKxAmcruRJv1YadEpoY4mPFxDqzvULaUTKuvz5WSn8h7EdZ4Mndatit9cbACs",
  "key21": "2FMEeyETAPu149XcX99ynagQn4PR93MhXDCQ9GjZwC1YVRhAhQYN43r8WzSd99wm2V5oQSsTjScnDKcfow3qhcUQ",
  "key22": "5JxThuAYm2TV5aFNLZLxYGqPgABG4sLhqTupYjSEHtkaBmE9ARUVUzNCv93qCchhWHtmJLp5UbsbC5gMsBixB3yv",
  "key23": "3zDmx4NK4WXUQpWd2gMEYRaubuctPjx8xoXHQftftJkVLviY2kgptnr1fxgDPbQQCTHVnHzPy6EwxC1Lm7rs1VFP",
  "key24": "5iStYaqaJoswQxMkUTGtYYyabbvMXMr1qEsnfp5ki9zE2BRFDz9BmiuNP73Q2TcXgzJCRqk5R2qacL3E49sywoUg",
  "key25": "4AKF2fTvnPHjemAFxETWRJ5hgntuFowNg5C4LkidGL4NeS6pWHAz2hJUnjABz6hdDvSosoEZP2SA43ZVoKhCNems",
  "key26": "3mZ2sMhd4MEhZXQup6GnkVcTpt14atZaEkZAFk6F3UpFevKz95S4ghQziWijYc8EM1HGWonW4a7m6TgpAoJN47Nv",
  "key27": "EA1Fh7TJrUQ56af2qhH3P2xqCoEwGLrRQDYrJEAqAkuZdVUihvqXs58gUqkvdgR5VJXCFBA1evfRRHVp6kMXjYn",
  "key28": "5S11thypFASCujVePgRjRmYZgTtJUm3tfBtjuuCNixUPtkenqUGBbMBxjgGegeAddUATtE2ETtjvBttcJ2KfMqCp",
  "key29": "HguiibkpGoPvaeMwfRy3zyRM3p9pJtogGKRccjQHAGCKodtGZwSHgz18M77w2BB47PZFpsaKQ8suaaLyPzhvWkd",
  "key30": "4RspZf4VjpHhYPJkqp1a1Prr7k922J72nN4EKmAqNiUpv2rYKnBCctcYxVoy7w6P5YKwTpZ45Car2ww8P2mk3Kni",
  "key31": "627orJiTHoeKfsJ4jKnM62NraNm8hipjTd2ewifAv4ovgfyE1i6Btt8znkj1NfEnDJhuDLL3PG8BW6sSKVde3pc4",
  "key32": "4aSTSdt1rMLWUmzTKcmL3mu9zSs14gu68tRV4hnMuQ6esyFdYGFaRto8jyXfUVA96tCorRjHaKkX97E2m9hrGv9Z",
  "key33": "4J8rCVSj6ChAfZGoT4rei26bUqSmAiLE6V5uMT77hAmtm4JuiKez3VJ5xw8ioEgrRj9FP1Pb6TzNad8m36X7esrH",
  "key34": "3gCa5UhdAztPyVMhqrXvrSmx2Zyi2kQVfR3pyxKathWdmnSxvoncWrKE2vGsAnnKjgPBPnDykwDRKjpDmBj6WUzR",
  "key35": "2fYrL5b6fyotrqhJMwxZJ9mkoUrQCwQ9mrz5zLsRdNmX5r1UErjQEjmk7gD3qrDcehRcH2QdDitK2SWuTp84USFx",
  "key36": "3kyQ7Rbn3uapPCGmPCotKpD3Te3npHEfDZFMCsvVwFkTNQd8sBXsT9Vfuo3jSNYWaVtqMSMT1hDD22nNG61ZD1So",
  "key37": "2rifM8LJ9FmMAmzD6HSq2p7CRhpvThqn2dPPRnjLmrVKB1bJAwPr2HZvcyEbhhk6D4s1CvcJ8mqKzeLWE9oukW4G",
  "key38": "5J4aziqVohKuL3gDGVacKaoBksHQo66eeHHcJTMZAxQveXeNYWopWoymx2LkxSDoFpthaAowSrQRyLjN7D86RRGj"
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

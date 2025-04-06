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
    "4HAe3QEpUe2DCa4tLu3d6nh6WXZxFQtqXp6e7fZ5RVrRreDTaZ6c33DSu25BEC8fNFuscJnrvPxZsgjhTEMkgFo9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NVhsS9KyTZdyrpCsXQQGgiefjVJ7eNoCkLD9FomrdJZE9i2dCBM8xhUxzMPnXFSU4TiV8EokaXcf6wbnuNCvwAH",
  "key1": "21X2DXxREjt1d2JKSJGJFnaGW9afxRW6PAkjrvhQg6bYVTRgW7fC78CVxmBwtgmHM5htErQwoTAhay7BMdNYv2Ki",
  "key2": "znCKpa2pLGJpk4smSS8GXH6KHMiXDCQnFmE6m4sbL7SiZ3T4N9Nxuhh7JARZCdpya3uR81voDjx1KLsH6iNmRoK",
  "key3": "2iDuJ5hAjMcqu3ZGBfANGVXHiwNFMsK7RmoeAjdnSzM3G58tXLtioUAoaJoUKSujcX7c8sEzNhxV5bET83Anxuwt",
  "key4": "5g83tgnbVM6BEryyvBUDfkyQGSCKN4PKGsNFWFKtyDncCYaFKH6uP12doYZqD52rS76haahY6oLZ1dfM88tsGZvu",
  "key5": "2RrtnZjucLXN8xhgCnVFEBXB9pi4W4whnGrUFtPprpgXVKkivpofW9PMgSudWWFQL798RMmk3ajtPwS3Lmp58sF9",
  "key6": "38qzMAnhZ4e2VN7yjPAu8Drq5uoDZRAH7ncEsRGGeqyC9NuoA71jbNg9D6jPsLLaJj2m9TeZXwSHayFEwdZK7CoQ",
  "key7": "5oRiAPoSDM7LuW3Ze8Pm7L8Yhn9E5oy9HTNkrCLQccbBhDN9Y8LZ2kcYxqAnw3MdK6PWSHvjugRRUGognfbCUhh9",
  "key8": "2qhh3fSvkA2n2CUFNpwofj5JhKff6X4eWn2tVxSv51iEmkq7pCqAx9xuS3z7BErjxaLDte1TXjqAB6mUwaXSzHib",
  "key9": "3sg5D7n5iB6YbuaeGpvsY4yHiEbEAnSCXueEgxTjpdV6pL1A4TNscjT2CdkfRcjX8Lx7wzrpcaBLMrSNqGzMammf",
  "key10": "3AdLhZCc7TZzVYrGgBpveF9vhec3RoxT2c2WA6HV6y8ez7p3vj4jcF3nVymNR1hpBjbJQV4MfNHGrhEgFa2862wX",
  "key11": "2aEq15NjPXnkKzqBt7M3P1mRnMZZDyRqsa4XxBRhzNx7Zz7y9wdxDzRdYPadGq1CAXwpgp6NLDgWRAbifSHnChZh",
  "key12": "22CSfPNFG1LtM19rSzf51ss7wcog2mVzhjhVG4jJVzBZ2YfYRvuDce6oKzdXUVA2EvFZxNA9B4oxKkmMSwCDvjZV",
  "key13": "54Hnhe6ZScy4qnQGzSN99hwr8JscegRHNF3z326zwyMnYGuAvnkb1By6HtS4zKCwd8mURWnzMNf1VXs89d3xoaxe",
  "key14": "3pydTRkDhvrSjPrQtFWKeezYEt1gQjv64f3pSXjUGKmE4jqdpH7ZdSEQyA8fvHQ4NT8sbCUNRJ914sYR41SKX5mr",
  "key15": "3U4FGgzvg71U7kEchWx8yfjN8WprVddtyV3bvVL8z5usmQwAQGMCaCDM22n9UobZcW27nqxEXajy7JSYji4Miq6v",
  "key16": "21HK7s2EZVBWS4sfRUYGTtM4eZujkUkf63uz2t1kHuqAcyjYL8tWqnrPiEGmT2Juac6NxP8AeRsjRUNzzy9PF21u",
  "key17": "4CCMAHbNNG4mtmdiNnJZMDQ9gxzUqdFUkk43F4J7qo1HxZRfAaTwDddtTjqyTA5nt6mt4UgbCRKCe1Vdy8xZsfss",
  "key18": "WYV3b1k2qM34as6MmEdqKRLhZa7WoAS6ZpdS3cNTeFiUUvaGPVYcnyq8AxiU7xkW8fMwCtg7nxVqxyWRU5jRkJa",
  "key19": "4bqPCt1hRX6NADQP1JsMEfNUmbubvYMijmYN8TJUd8tztaD44hbAbB4fQXT11o88fCgpziCbmUKv4hBFKv5SdxrB",
  "key20": "5JvV56dBjTAvaNHNH42ZkVfJbC3VUw8LSKht9bwvJtHbZYGKWX752BUp8gZvWfYzZq1vpHVdiCrDFHjfUum3BfGj",
  "key21": "3BFMBugvCYYosCD9hYxdTcQS9WYvvnUxttKsb2Hu5S4uNnMrWCzuWLSSvCFkf2Esg6kt1LjGUadvgxocQQetFqRk",
  "key22": "2JiKzZUkZ85MwabKPUPNaPjrwS8Je8aGyAxhaaxeSiAW12RDW1S5VC6NXuuPFE8E8SRTbfzMP4g84Sc3ok9K5o6B",
  "key23": "2ioRtY2gjkqEzTY5DXLQmH7vuTvbF41N7nubA1knTAtqZgE1Cd5rWBDkbb44c8HcxUpDtnb9R7Zr3StCzPPBRGgC",
  "key24": "5811kdUD9jN3pHLUtoANWJpgjeMP219DYr4E9pCR5PbDyWSrwvvqrj5S6P5dUwNfkGT1QEvgw91q91SbexTXqEkU",
  "key25": "3BeM2ttpYvmYjDTr8kdkKGjuWDxkGkQeMxuWJ3McnEaSoYAGpf961yWxQpP9caCzhmyiWyjtBACgRiv1HrUviDr9",
  "key26": "2rivqACpg1ctXktfPzMs9NRCXcbgD9hAjqBQBLcynER5znZw5F2CVKC8NJhCA6QSw9HHySWPKnmPuBikYtLqgsKm",
  "key27": "4XBanRXv9tDAM6szDABKmJWPCELkzsjhDcn1TmbMdvCfAv3ZJc48T8BoebqocSx5pcz1vJsKG3g7wYgEMgbmioaV",
  "key28": "4seGP6piHwKe94M3NaDFrt1U8SaDpdfHHBeR8Hver2TadpGWfZ5AgnLuY8aJWWhxC1fAuXvGsCgT9YpmjMD4dqVA",
  "key29": "54DBcEPj466G2Fzi3ShtzEFnDMY8JH2HBkakBg9sBiduDZSgBKpwqkiNuuY4gqhJh4gX2r8cqdEmFfa8pcSXdy4e",
  "key30": "3Gc163emuQUk1erxULkUGpNt9GSGcQf3PiTEDKfUcKnV4jAJ1QJXbx8cheGoueTUUAaQzv1hAhiriLWeovnxRFax",
  "key31": "4KFVb3iNNbqmfNzTrTh3ps4HAMYVirdD2tL3cECohvAy7UVhEHZ5sjBdDqsQbCZCcREH3RjatUzYtMwPQjZfmKtK",
  "key32": "31xrwteGdiLWDs7GEFGjrmT6xfR9zM9XDctn4AzSCqPUNidrft3Xo6sGoYLvYuZJZuq2GuX12yBpMMxxfycX7FvG",
  "key33": "4qVdUyi5bLriFBfUD4WFPHKALuUTcZeLaS6zGFse8S7iFaDgQggVaMSaSKUHvKmB9SsB8TWGjde19M8f6RzewnCh",
  "key34": "3LXZeV1tiiCTz6DpCps5vZKed7MyFNsUGtyeAywnXVZbL9Sxn8FXng4nHL646LhfXMSuGNP3rDH5n8rjg524Hrgk"
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

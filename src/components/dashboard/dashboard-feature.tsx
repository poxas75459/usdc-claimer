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
    "4f8wEbayFqwycAvxYQ4DAyjirz6mSeobLDCzfcxA5hvfadhwMWjfQpbXuYfcfMBmkLYE2nWtWZBqbatGHavyZuwg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PqroeBnshuk1ZEh9yfFSA4AkSHgxR5m2vn7ZvpFk4miGyacox95VtPPQjCr8ydgA1jo47Vn3FUfPjF9VESYutAQ",
  "key1": "4R3P4iMMpwZpQ78n6aPTC8wmzhPcCqJyPCMBbDLNCEV7heAGXj27FMtUidTJtSauBp88AKQUnz89hcmd9td2AZe6",
  "key2": "5NHRcD18YZLc1DyuyxKjMwa6m9Fx56GDqudommz3gNBwUsD5w5Yx5gPcvT3bpiyyQuLfvYztKy7WtNPxY9Wq2dwg",
  "key3": "Z8osEwDHU39DHGYrGqEXq21Rh8qFAXDDqMx2pojLGEzmHqDJYKgPdEKYXjVJPmCYeEoyW2SAfUy4vggZdLzVJcm",
  "key4": "3RQRQeTXGqj6JCvMCr2fjKebWCHpiNu917dYQqA2HccJgDmpccbGv5VQvcosjPhebKHavYsrgBaKpWmNDwEWho2e",
  "key5": "3A2tZYeiYPixjyyzcFJJGoPNAtfZacZwS9hWxxGQEFfSUpeR46Ehv6K5SfgFYNxycMg9S6fTMBittqcCc1uYS9B6",
  "key6": "2wLkssVSrT8oTgp1fgZxLhqsri1taz47atyNW6FXzPzTKKeV6bTVpHnVSSoYVUYYYnVGSHgi5pNBL8gKjQqCmfrZ",
  "key7": "2Xs1cL8sp8Xt2GnjtnmPs47CTXYdSs6UqoXDjaPQLxcwRhBD13UnodnpnFWaSG3ziJdfkrd3YZ5XFsj4Mf4g9TYb",
  "key8": "26tbTtJm2sSXmdU33HPemvgSfizeR8DHzLK3kHLPnFXbPvMg1R5e83Jj5qoxqW1eSoXiXuBfadkhFp6Ub5f1JJE1",
  "key9": "2Fctknz6JDcCydo6tj2n9Mn1fYRKYGhDieMCsgbjtBaBw7n6C86NmCdoBZidzuEMhsoWp7hNpbnvLnoi6wQcfDFZ",
  "key10": "2JzKuAbRUwdASJVEwSqbdv1C55XdWriKwFwJdCCDZbPkZbdr9nkEebg8rjCfQtgEn9S6S6D2wZCX5cFVVUtrazSt",
  "key11": "3Rkzxrhr2vPNfFMEpMRSnVydKcWmVyvXo6Eze7xpaJA4mW7jeXERhhztrPyVbrBs9LX3UBM1NrzQ5enuwntQLUhW",
  "key12": "3KrMMKagG9NB2PLrwSzqtXgaYeu3xJJn5PzS3EE2sqL6S4KdtzT5Z38xX6vpJckU5ZwgHwF7Yk9Png8NxxB3c26p",
  "key13": "3nB3h7fWYEjPzmBr7ibxhWyo3TMPBo8MvJe31m5mbYSY4g3vZr1FP5kxrguLTQgw4Qy2nbWezRCQPV9cpo4C1keL",
  "key14": "4bdLLjQpaGzvKoqc8XfV7pRTYRGqhsqRMvXTtg2vP2kqSzh2z2CfzbYTESfRuoMENvUgU55Dz7w9hRzTHWDNzwPf",
  "key15": "2iXrZEyFH8Sa4HnyczGCLoLjqnh6oG329xsLc3cmhivLfeWTPcw1hgQSriHfULACQ21QHfM6PkBWa6MY5VGTQMPu",
  "key16": "57WpYHGZjyvcJuyG3jsg4U5N5V2iUNy725jdoXXZMmWaqBaB5XpJaSj4e6yM6mHQ3TMzrJdKY2HvTYfChqWPhmZa",
  "key17": "HG7Rodnsw27kAg7fyuUpC3uw7LmALZa4Fm75cdi6fSSS1iDK2FJtzVmSQmnAbohWPyAmMfA61ETPD2XYvp2pc6u",
  "key18": "5Knfnxy2QN5kidBixfH5hnq4rsVfgdXa49SKs92BffMadoS9aKNMshSQ8cxNfXh65rvBfNknKL5gchkj7HEc9dkp",
  "key19": "4tf6aaQ9BxUDusRMaAD2UMucR48tZiT6FCsB8m6gJ9RzDSAUTVSnvBSLz9Ajnmer3NLS5B2ZF38bUR2QoYH1nkYm",
  "key20": "5fozdrhdLhMqsy8ubrjD5y8NyGTBrcmwmexxfy3stm54BTxN8NqvGpFXBnX3tEvbpedGLwkPLkSRc9CvRLoNo84k",
  "key21": "2PET5NWBhnYHTmGoxxfaB1mL283Fho535zD4rKnhQG4u14vX3EpL2rULqYr6kZPr11gigzCnmCNrpgrJ4DYbB3Gq",
  "key22": "5TYAXpQjk5qevu34oEDk7ds3nGiPoo1j59xDkPgxGJoagGkhZKhrQ6ZSiCx463n1BFVaYnUTPijp1WyjwKtMb8cg",
  "key23": "5E5W49LXTwebDSbrkRH3rPQZDNbBw9nwmGh1skVhXxjZNdRrfnyHMci77P7QXzsksHa5TUQ76yNRn1Bz8dwxUKm2",
  "key24": "4oVtCgnR5Z5wXmHmAXJjYEjV1tewrkSjkjEgJ2nNgPwPVfkgeS6aGZvnFb6JwwdrixcxkT3WZDXRZ9NpEarc5a4E",
  "key25": "3PGqGuBw1HiUQvf7cnKaMzfmm18QJjAioSQFJa2DEAmb95czLC4Bp6tS34wLs1JAwKm7pPAFN4D2HTNgAzSevjCq",
  "key26": "2ReeVQ9V5pRqpUyi2zMxAhe2DXf4TfKjdm6CTnUHg6KJVVrWgJNWf2gd2QkAViiw74GrZgvWGuyBsTujTE7oDZAt"
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

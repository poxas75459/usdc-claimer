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
    "21rJvKFz14cvaraYpfBnSLxBH51PWggTp1ZjEtxHNZH23gAL3y8ENcqUQTNKNeLDT3PzfThWoaeBq6w24HZ7edxn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LyNFRP1o73G3k3GnV73owF29rzhroPfwHUhBzs16XBq6Y4hMpTZXW6VqdfiUBruVuse8womyUzmRDA86Q1uHYa4",
  "key1": "3616ijFfztF7e5m1x93QreWqbuujh9PPwu2UCin6R7fVn2Fxnuh3Ym3PV8ZH9PyPYUCYqNaPzskiLHSty1Gyv6MS",
  "key2": "4KXcHU2dFkU45n7Wsnmy4JVnjyEWthqk8TzR4fyRXyGWUEK4DqNoub3Xk8HQku31EMTebiHEAWmu8UcUftvv2APn",
  "key3": "4vRAxBi9jYC3REt1auM3GcNyXc5dpgUzxtsDa5DiZafp2aeJQQNAL6d1ifEpjs3MrFxczVMjzf7Z22nhhse3p36E",
  "key4": "5Lzh59Lsct9GmF84vfjiR9cXQWKSup9BwmCDJuq5ADoevtpqqKsts7QQSgM1ixGUdAR6UBYdjEtJxPAUm7oUGBDc",
  "key5": "2bVorNgepanaehSg4nfDeAmhVUzQhDeEPirstQjYoEi1PkvgxtfDrHb7eAfjBKtGcA3CknqK9ZbtSw1VBjS6M4nW",
  "key6": "BFfx9ZaGSk4Vo1zBT6LdQkmk2hAdn2K28HrBvmYQ47xi7t17u5ZtReFuyQ84u4vrUSGUmENpjMQWMoTX1HnzjcB",
  "key7": "Djjm79gkFcq7cVqRUHCbQW47UzjZePr9NZHC1jobCd6t9nxYh1xeXph1LmU4RQCwfsPGzun4c8TwZue637qK8sJ",
  "key8": "2t6pYKvd6cprqxfY6moWs1EXU4KCqQ7kWqgbenx44GRYSyuWJ7EqdNMtX2wYuSqS2vHBt4deURFPrfssSvFaA5RJ",
  "key9": "33FhX2C2SiG3Fyw68uMAwJxC4GZQjGBgh5CsddQD1cKrdGnECFPEgK91PPhcq28TUupF9tmNqzLPf88HHJjstF7M",
  "key10": "GJ7SiTVHsQtGpa1Kb7x2hxvvYDTSYUK2xqQn1XwySnrgvBPK3gLT8jqpEVRytYnwKUnkEgCcDe1CMZAMDLbQBkD",
  "key11": "36MRQZgHthEbYot8XRLEyiFideepcYD3ihhmuDi1GojGHP4rYdi8W6KVkYMvCaVhf6p18W6f8mnS7Gawmfdcv5Aw",
  "key12": "3hy5unfs8UmYXZxNFxNcR6UgNmyE8hrjXoHmhoXwY2FWvhB4hZuy5ge3ybPDNdyRt7u1VUVbkBi4SNvwDJWajx61",
  "key13": "WrqNrV7Q2MRKsEV5cF496KHMHKTyWrLGD93bD4Fb8noX4227cD1etwyWxAxx7Qu7xKsSVxTdUhQsEyAKtyMPZMk",
  "key14": "4nZ49HoWysLBtzJde12M9QzfzL559nrGW8mmsZbrH6d1DaHhv3VpTe3CrmnhUsC5nhn9hwCTrWhez1Ag37zvbtFb",
  "key15": "5KFCCAkbdsbotShACBeT84ekHbL7wHW1Z1WX8MfdMiq1KpVqQaKYLYAz9WVbLzKEuVpTw2qUupNeuoi9w4C37187",
  "key16": "sv9JZFwAKYjSSwjFBbJUMUsXbEZBtfvfseAQB7PFvaZ4aj3grA7eRRoioRRoxmsYuynmUzfbxePPY94tMSY4eDr",
  "key17": "hP93rDZ9PPsdqBvrzUa2tnsbGfskLFyiuCWaTz6doJQAp3QjHREhPuLGkdfajzWdi5J8ANbXRcyAtQULVFut2aS",
  "key18": "2en2pKsDB7MwVzXZMJGrVUemNG5GPHxuJFaLRKwahBkQZZom924i4scXVKjT9sHXzsrMauroajfeZHcAiE84iehy",
  "key19": "nddWtxDYBv88niK56TrjhSFi9m5At8JstoMmzLFGK3NqznDwucX4SjrkDid2ExLXjYR8EuRBciTTnnuPNm79rpK",
  "key20": "4pLZGPeLgMuvqtzPTGAtFYRktvZzkg84jcp5oJoPVddznszADRmmuLsZNAn1zD13LWeC6z9uykYTtfJgn7Y8VpYK",
  "key21": "4BCitSynaZuXDDwq392wvkHzTQQWmdbSdZtXZazKCdwwcf6dXBwEGfjwvZFAKBN8CXJaiixVF8orXLhXdHFT3iUf",
  "key22": "54oMySEAuziMvFdGVidKPNsY8m22LBENHencEevMzcKr1qCNTwchHWtx8C5aPRHYKxGWBYAXxgKcjpdAFMtPi3Yo",
  "key23": "bKQftYZ86RrJggzNTWTRtCDnfiPVyHN27ArqNVo1rzNADw5NUUvaWWv8gPR3tEbwzDzzceQnctPxsULHEbmy7uy",
  "key24": "52v6PfKC3eev1ThusS2QL5Ut7wLWMvh9gDjy1hTYURkVEqDabBjEHsLQeYMjPKm7WtchPMnHG6SmCQgG9p2Sqh5T",
  "key25": "5jsvDxoqdYvmizDxacnxPRFMjLdY3qHYrbDBJ3uXMXJSSHEASXezgFoCXSsD4BQCC13ff7T9FZn8eBRfaJEBK5Eb",
  "key26": "2RSXNFmo6bPgqra7g6nnR5aDwgQSiiRivcFVJDP8M8WLcN5qbWSUsK322X9zK8kE3yGqFydM39941xabjVtzaAS3",
  "key27": "3rsmxjAUTBqZmE1hfu76WxCXaAKK6aLLhxdu1E4SNn8up7Eb8iQY7QNXzjd23wv94bAzHrv3qtt69rSvva4RRtL",
  "key28": "cJpKEYeyUdxNcaDRjms2j6op6yFigHt4yGZ5HAsciw3kpnkNSTjmPHrnXAY3zg3qcjhf1tPogTjjKTJ2MkpxxPS",
  "key29": "54GDq7N8G4VGiBB4uCJu143zqWBhJfx2kso8zDXi1GDxSQ8AGNEcbBhVWSUySMLuybFL1BNSfPpCYzT52pBNKUSa",
  "key30": "5bymmrrj2X7XMRsXj51T9zPUhcHV33iB9TAZkcrb7jXECSFSJxPL9t76JwCEwqTjFnVBBMaVVoGqRxdou9pnBVjY"
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

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
    "3EHhrtYpWRT68Bxd1LW6zj5AfY92cm8TLwrBETBgtEsVCWUFjyDUHGEEipJra9pUqpgp96HUNFSsMtA5Z8kHnUNA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x9vvrMk9rj8S1PBkvLQDNMeW57BVpBTG88ipejZnavLv12nRR9yBuv4eyCNsYmrPXDgKMAXZS1L4CbvsfpYQptH",
  "key1": "3XawR2ASSxdYvqXPTh3zhAepD4r5i8MpHMWpgTgp7vQfQn23GxtJWDxgHBTBdToG5tftnyayriX4fZM2ELNEEhim",
  "key2": "4Fw6uACrAPKZTDLhSpjP3e3hYmoXJruj11bgAMTxwt51ZjvRS26yqC87zUPwhDT24kDuJKoywpjdH8CAamzbvVFT",
  "key3": "234bnVzX5MN8wmFcB9iLopyfLx1bif1ixknmDJ1SZU55GiQGqMyV2qfRHKkngdnLuMJMRLAQCdmWRkzJs5VJqb2g",
  "key4": "21cm6sSKCSgocYGhrc1WLbcanFqRMAtu8zo8Wp5mG3zC1kdkNw6ChiGHHAX5Qfq7qMeGjreyPq9PaqTMHNaCwtdZ",
  "key5": "5XcxHK2gE7E1ezwpHHLodnFhRJmJ7ALwKBBvQsAh8foUAfEv9YtvzMCCGao56H2ETzmyPwZ1ejA67AmhxRpX7EF8",
  "key6": "3CUu6vBhFC1YMxtQynGKY5Mswkbujxvu8PeKQ3r6BzB3z1cXBaGg3SJgyDN1jdLjTtoWkhGVmTS3KJhv89xifNVZ",
  "key7": "3doh3mM9HbCsyZT8nq6tF4twNfiAYLGFdue2BPrRa9cScQic2p9DzYqtoSfF6DsbxAEtiou3cmMC1BugLxqKVcLg",
  "key8": "4tVA4CVafUqXFPcu1Duci26qsRedsMpSG9K2bNQUPfSeTJbkyfZ1syPWbS3K2skxGdvwGcJrjqyfYFpj4e6Dnpzr",
  "key9": "387AhUgHLVGMG4ur7bE5iXnQ8uwrYYLnAf6S334A8cDE9ZoxpYAfmQb42M7EkCZcBKFy7m22vgAuZew6C73QLvXk",
  "key10": "5GD1QGsQ3uZXFBPFsyTg6s8rn7H5gKA5fjnKw5wwbrcsbc3geECkHngpn1NegjRctx9MAtGMJwwnEQD4Rn4B2nxT",
  "key11": "2xcAcb4Y36k4ctvyupMHiveff6r81ztqk4A6swLUPHgmnRYF1t3PLrVSRHMnd8cwkEDZWGLqcaKb8iKNmSC76Rdq",
  "key12": "2aELHrWJKFup5JBNVJNax4Ypn84GZZ5MThcAYjNV9CLDRpTgpsCDNaffTF1iq2N2tXDBohHY9vEpLhayebuBHW5M",
  "key13": "g4695XVctqKUhCU8KwfXhjjz1gvQMnXe2udp85wnLfqb2MVAbiU6khu6nxMchneCnVxQKhtjViYP8ati3vCpQPy",
  "key14": "5anrU2E9qVitbSr21kfp7NGkV6pS9KzMTSJR39kna2ofunKhwCLH5bFW7H8PP9dsmjrugYmkGjP7Gx4R8qmH1Ko9",
  "key15": "5ZQURm7P1CpFgdiXoLxPBAB7YAWZRqMEU82E8E13MN32EbypMFrg4GeRrv39Vhpe9P1YDkFYQLByhaqndtVJBU2X",
  "key16": "67h9eBG8KoDQLHpEz6cQrGZP2k3hfqkVLDTNUCcinJSFdyJoV84EvN9YGobHKH4CQykkH4dwToc3WTN4BaaNqTx3",
  "key17": "3MJBkP2PY5z2jsXj4R2u3D3VuxCHVpbYMr3HCUy39U7L88x3pXY3vMWPxX4BBQcjKj9wvWpibtWJxHpe9snHwCtU",
  "key18": "497Ued1vaiGCGvkpmiVB19UBsfRo3ctmhSy6UT1joAEcFm2DywwYqjUbinc9b8jeDQ8mGaKL8yNKYTsYRNvCntw4",
  "key19": "3zNQqAAidmNgAhy6MhY83pMJ2GfRFrTGHtfeoupiCqsCdk2JeGdttHfKbpwu4ZPkv97suRMeKVafQsU93phNZYKK",
  "key20": "3NEWf3fm9SnVMHVj6Bwg35xzztWmvkDJ8QzhEvLyZXosFQVkS4JBNhEjhjxqexDrUfr2vt1GLZCk5NGv5riHiXiM",
  "key21": "3fnKMLVYUCVR7jtRXAG42hccThQA7n2VdGuny6gFYpacbcuUUvkCAQfAmY6wdCB9AUdzuET3R5NjTgha7yMHKP1d",
  "key22": "5dPct1773SXgUbp4BiHgqxfxptWGZfd2L9WkUg7VQVzGAszd6RHoysTiDB8sWGBSXbPUpUKmnjqytRQHVVBKbwGf",
  "key23": "5sFucrdsLJJvayAzAsYJzdwhfpk27DNcNrEJ1bSxZLi5y1vQQq3b752kTj82MguNx7rMQn1QNZjEPA9ZGo3To26A",
  "key24": "MECEN4Qoym6pKSMMngoCD3saqRFte6Sx4CTLt84Dpzim7mfaCszxhGjpxv33oMDoC1YKuhoY9tJTguCXFHWui1Y",
  "key25": "4wGfzkY2djkgSTtc1zyZ5fspEUKH8kmubdxz4JRVNJwriwdFDUSK7tRTmuQHeSgk7C9wBaShxMdz85Pd6pS5Eq3K",
  "key26": "33Qs7RX9eRBt4chdMjgqGckTWXF8aWABvmfi2LVY6YENZEWtDv1Ptq2KDMr9Srfki632i4K8A5PPQeFJeUxhBkRA",
  "key27": "3wzPmzK57EkaR4fWi77nMCa1y9MwzF32wyd3SBT8ufwqBhrf67T7BQEShfzxKRD4YfdGeQko2gEF6oXLP992gxad"
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

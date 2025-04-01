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
    "45zKWyc8BgxrzpnqHWhe17vBiBS1bk1PFumCbo4q9kp4PPNUtcSWvfMj5c6o9czknWR5aZUTc17Vc8FMVskBd29D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58x4Ti6hqAFTip26pvTb3zpKFGctPSwcfQVuZpzZZdL59pv1e9GNGy4GpVdomvK4gpqHZvDNfgxGaEUnt33gbiwR",
  "key1": "3dKveUUaPtDxSqqH1APFk661ZEhkaNJhiMU9YVHmzjZrFrytEwrUhsXF6Kzp9NepvEKWjsJZ7ctvyBvjLAe6EfxZ",
  "key2": "3q8nz8xfq7Hmv9x73xmgDR1TFccwg2pYWcR3irkunVfrLyyry7sNUfB9UikCcmDhr7XmBdz6E15vG5A7mxGMtbh1",
  "key3": "659Jv4ovKixa1ecG4eMY89WhqemNsZX3rc8kJNzwA7cE1bEo4H8uMYCj49vQ6h6SbXsXCsKR34fzTtmwzHVR7f5i",
  "key4": "62yHbgmDLeVRq9mPjAnGSUUeA5xoEwWqM5rSHUwiWAZRKDMMZxrkyJXPG4J6vcnpk39hCNPWLyQuQYiL2DTkdCL",
  "key5": "WzbCHpoCDy1viG8t5cPrgFwDVidUPryhyDutH7tsnw1DH5ehAveXxu4w9P1ZoUyqNKSHHs5SCcHyC4BvHKGPqVR",
  "key6": "39XRfHj7Vt2pLWkydcfeyJKtUfD77PsEPiUSxsrDJZAdyvtmMi3hMn27FQ3gpLgcpZ1KarwztCZXHH2u7QhFasSF",
  "key7": "4xqFq8uXAkSV6949jM3wiyRgF5SBv8tJ3veGPFgLCLucjiVTnwD1ukigB5UAqYCmUe1FixZ2hBm9GqgepztbWUxc",
  "key8": "WE426aytqMpjA3bjskzW46r4HH9LxUiThzX8URQMiR6cZQu3BS1ihTzWxG9MbvXXWeDsuTHJP2MkkAWGoQcAUTi",
  "key9": "EkEsfjqjv1UpVhneKTdTBPRTvw3CzUTmt6kvWP3gm61vXyg7UcLjDNaUh9aPkL8ffX2teGDwvbog4P7UFMm86Vi",
  "key10": "5rtKee2xPHqEUeXdVJtBzur4pKWA8QmMRPPtVqJD6a7A1Jx1qFD4ak9VbmCQgu4agga54KEUfGcei81432oGmAik",
  "key11": "2Lo5W4DB2WZLcayNxz5NJ8u2hFR75WPrt9f3NQyzp7cUp6GrNtQmeqL9D2yvc4sL4s4HY6pEZmQyAqxyEhvHzNSA",
  "key12": "3zeFiPtTjpega7BmwnNYjW1WdxLurXRfvUpFgFMqJhacCqFt4qaqfD6APMdJLAFZTq5qe9p4a3g3H1LqV2P1kKyw",
  "key13": "4eMC6LG2Wa5C3tAr5WR2ax43vhPVxS1d6GCpWbpnzgYGq2boxz6f8BhVv9AsRzwW3C8VG64ajJnQscFbk1N1LCfj",
  "key14": "66364dFcp4acnU3YkQn19FaEAjZMGmt32xP7rep2Ega8AaDrXoxmgmcfFNjx8YVZCaMTCGqoA9ujcsmjpY7nYRup",
  "key15": "2Lm5iKwSNzwggFGgcR3H1efijg14EPXUjdJp6AQtEpr3JJ5QsvCwkMTCsXfwMezv23YEkqBrBKGbPr8ZvSkQkaiw",
  "key16": "2Re7PzPJbbFbuCmkhBMMhEHybDoMgsaWeUndHQUoUS9d9gfy1NDQnuxQKSWE985EXynsszKAQzjVKjdhV5EDXXWk",
  "key17": "59bYMHrj8xZjdUFTuYBz9B4UrSGDE3qvxtiHLXvi9mVEbCa41p3NXBEFmReder3pyTLxEFzfCnB5fAD5M6C7B9xu",
  "key18": "2rxn844dU8oTwfYXSRY7TK3nMmTRsLqK9MfZwuAsz16iwumUVDv6Z2gtf8cq8EdkXToCQUBg9cd75rpPrYcGdBNJ",
  "key19": "ibesckq31gRFnaUsUvn4f5zqWTcQUNUvK1YhYthtTmAiPuoPKKH1s1PDc68NkDEpwM1ViampPhyk4i4g8GPr7Wu",
  "key20": "3XLCHvnAjEzMDPY7hFnquBBMPiw1cNSeiMvwjiw9vQAJuXMi1MtJr2iF5G5KLzYuVJAXjrwiw2ffjsHWrEFAStbq",
  "key21": "1YXk4ixs6s7KRQBZ62vEqv7eQThEskrdyvWXnoA99nPAZ4SNjiMYemT86kWCtWjeTydjJwyNXMRxqvYDE5Lo7HD",
  "key22": "YuMbxsUVmSpkmuUY86hAF1bwsjVHFc1D8EaFMaWFQkK9gPjkrj1NbdDzm6vzV5RFJiKEpUp2RGs314KFcMvx3h1",
  "key23": "3o263p8simBDMBvQ44wJFs6kqTFcRZZETpnFQ8KAHqtBr6nEyHKLKTmjQk7nMS4nW8MXcwxDWoyjHF7HH8ivM6RW",
  "key24": "49R2NuVAJNJZmKj5kQ18PcqVaRwT9XrzyPzJfr2ACa1MtbAe5Ed2RMcS8n3MnPyTGyiwA4eLUdrJqVzNqKjoH5PE",
  "key25": "5Pgy1vtC2p7TyfCqCUJJr6JJZMJNUBm2C2ZicJ6tAG1roFubpKNtCcFy964hW7VDR4VGUQRMkNivKE75MSSMRgJa",
  "key26": "5jFZwMJnEzWSSXLEy5rNfFQpdogvym2jPzCt5QLmLWfKzi4iGNuBteztqh82Kzrkvwk5b4Gd2qHS7TLgRNQRA491",
  "key27": "47h9tbvRA6dtJtT8mgEg6yL7sZehkJWt8yvgJZi1YxYztVmD9HiAhxf72L36Zh1z6cJW2B6dZXtnWVdbH9B3N4PZ",
  "key28": "3HyWkZDW9gFDhWHn9U9W98mWf5WhgDJRxUozFt4EG5PA38JSXb8KHcvJo6CvB4yTT2ZL7mhgE9ZftPfq3G4XJ9ak",
  "key29": "3v7kZvisATSPExrfGiAEf7QvxYz1RxnQP32qGAf2UNK6RHcBiwHP22trtZf9vHDHJwmjycxr5wi9kjJ3K6Fv5n8j",
  "key30": "2puJpdgzRN7ig8V9L7stqVF8wdPkoRPZVxkUfgVHs8rmYuWv5hkXWHWE5egbHdXmUiXajZ8x2guKFvu7kSPnfsBq",
  "key31": "3qbFX7n8rY4eMWBizr4LSUakMEBKQht8rGWx88eLiCPNpSTVdyquGWcerpkLVerNzsh1zCshRYmJFybEKJrLis16",
  "key32": "ehnFWKq9P1AfqLUfFH3wsmVygYH7B9Zzm3WEF1PAJxtiMqd13yTL1TgTgKS4DJhi8863me9AEgJ24HC6NeMcNvG",
  "key33": "4uhdqxbRugMLkW21MVaR1VzPd31vJjAMxgoTCNoPdFPF9kh4wUmyogFHfxVUR5vQLhh3NpKem24rZWLrBWGzFg8d",
  "key34": "2FWcvrNduawLsrvaYBbJ4YbsaiW5v7jrWR3ECXm8Y4eVFgdMfd2u72T6yWAnur8amjJPh3wCSuwBbnBVHLmn5ZJP",
  "key35": "2pwhWDUxb3wsjtbEcYioApSAVt4gbcsXKo1fkrZohTfixPpkoEbaHQ6nLmRjoebhbphkK9aS3MM172ecsBmqNnYJ",
  "key36": "3gxK244ddrRcbEf7kDTyYcX7jF6HrhEqyV8bFHw7tAXaEUtiNZAVvdBSiVUHwtRvyqUKs3u8SxyLGNqjQaxn68fq",
  "key37": "3L8oqFRL5wahW1kJZCRfTLu6pLa1axb7Ue1AgN232hLhej9Qf1GPX6UvNFJmwGVQNYur43wCEPKjyTnqC9hPVMdF",
  "key38": "brnRN59w754QkWrpLzpMk61g8QEpbf2XLr62buHU5oquAcA5U7xPooMqxivWadHC2v5AviAczwjFqaeMx3r5tNu",
  "key39": "4PoQg1hq9YvDqSZAibRjezrZEyhSSDZCZErrRgeEAsMASSZ7e9w3yZ93xRRDcEZ497vxaa9kZKxksrjMqnZTAcXr",
  "key40": "3zuBRifFVvZ5SBgS9XKytiDYwbdtwazvvA8hAS4dMsSdXAbZAszY5vT5sGGDoNtWaUANmw4PxoyzriH2tT9FF44Z",
  "key41": "kPsosewgdWptJWAocKUVxZHryGPPs1BkNvAiC9ximiajMv6XgRL4F4MZhrxBWW6Muxzi7YsbQ2L5z3mTKZ6x2Li",
  "key42": "4mCyVRFy2vEFpePjB6FZLQ5J1bkGth165YR3th4yrTkLABanUi1KSxemwHLAgCBqrFZi6xDfvSLF3rBcrrR9tesw",
  "key43": "23A5n5tCA9jEVmvW7L5q8eHNCBxTFaxR1hsy2XNLg5MoMZPDvJc3aHAULrLa2L8kTXo1do4aYiKDP5bFoGcdhPa1",
  "key44": "5zL1fe8h5d2s7G3RP91USHwfxPwqah4136qZmYbQSbVQmNTJmsDmtkpqdmsHgvpeJBJBK9nBcBEbZDraDEeAvLKU",
  "key45": "51YqShpR3XdC9HFMdHrhoRTfqHBsu2w4gdN3w7ZdcJBPEJ1iXH2JNdZwqqXqPnZBHgELeq6aEg86BTTpumDDBHsc",
  "key46": "5EJc4rRLPNXQkE2SPbeFJe1Nxx3nmG3YoeefbrgJHtXg4h4ujpDDxkqGCMCw2Leh3QUxahu3p6GmGtB4jJUGeW1r"
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

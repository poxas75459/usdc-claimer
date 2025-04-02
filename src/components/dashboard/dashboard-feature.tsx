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
    "N1c2n7dFQnhACr5cSjksHZ18oNvvD1NYL9h46kbR7Jhg4FDVYKRnPvmRbmd2ANQhxHQMmkDaXdbwCaQHVEazygH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZMiH2bgSmLtB6UJqhwAtk1Fabj2ty9GS6dWyt7gfQXmzKpP8emM7i3baTTRZwdaYHujbrVngs7jyixvh8iysfTu",
  "key1": "3yzvAfwSjCyF5frqWi68GzDTkcNkVgACsth1TjqdfaHrFN6JC6GuAmxKgg4wMjJBPCAmk4GaKmCb3ACzxCGdxvwg",
  "key2": "27HNJsM7D5gzdXkQft4dNq3mbrnYTjyzYELfNMBrFHmYMNKAwkVCTF4LCDzCuRxmF7NVvWmVAffvAow61hHgPfB1",
  "key3": "3gbgxASdoySfCwA2JUeY54x4W7svifzhaMCbedGU4x8mfxQUbSJWxrh2WynGfzb4WEe9fvDWKMLByfNPcHgvsUCC",
  "key4": "45tVndAPnmPoNCKeCb49ocEUsYFKen32JSqreEPCsjHXJK8ZW45SFtzvdmt69nLysTqpLdyVr8Uu1UJC3WDwG8Yu",
  "key5": "32N3yR6Yhw47pdYYFsUY2KcppaFgMfkUriSp45VT3MuP8EwjdojizFc9LquhCP4z4u1MPCKeczubbJmmYfbQgZbe",
  "key6": "2MR7PYYngg2zRK6TTY61HntrLjGAy49rXw3N6CFsioWfg68h6ik8VMS7YXJL7FqP49M95zPqvwoyVDdZrUURoDQ6",
  "key7": "5hNTBKfVBQAbSuBeiycNciDzrroYYRpvxvqAjD8DEtchC1XWdSgjSwHDH6yzFX8CEC6r3AXjusUetMCLCN9iaYXB",
  "key8": "2aGLwCApaNpjAgRa8bwDyAccA78Z9tdBwraSbmanfcgJeCnpRdto5MJukypZDWeGK3MXgWz6AZsVMKMoTcwJfjLU",
  "key9": "ZUwpKVT5V9Cow7KpDgKgXo6Ft7MGYWhGXx193aqYyMhMH3FMMU2rnZ9vbMLG9BH6QSWfkXiE2hP4CeLRv8SvRai",
  "key10": "4bhoHL353Qws4zFRzAJWREUv7oxUnmB2oC7GARbsff8aCbW5at62eY3RZhdjaeAVvWXgyjM4GEoRZeRV7Px5LHoV",
  "key11": "37upjrs1hioQHVAo26cEc1tRyUeXbopYaruDFhL2jdWHWoPA3YHe7SB74qtjPRUgKypEWLLPeJUZSjWYu5W19vKW",
  "key12": "CJXtBqpDA6QMNSxSE1tG3k7NZm4ssobLGAA2XNyiZcUhxEKzNodYnxQFbuayeRpPfgwSNRu6LT1jEb2Xjh6EiTm",
  "key13": "2YreZdRCsntf44CgHfnm4bqTegTAJGKpwbp662hFwYWs7ioZpt2E8N2V7vTjrmb2uuBkutHxVQgbqSBheV7i5YRt",
  "key14": "2WTZkVjosy5XpEcV5pmkaNuBBCBKDWaQYtdjt1LQ9QkMVLrUGJNPUXf5joeheptZonHhTsL8mfHkEfcxdzmpVjER",
  "key15": "3Dn4Xmj26b64QjSrFpfF3PeJvc98k5bENubb4wnDgiyEWhnuSFNgbNZrJjAR1L6D5NNV4Pb9u5Fg8YVwRsrhpce1",
  "key16": "2b65uL5EHvhjEqcdAKhMdj9AExwyCK4yqN78bsomxR2UseNZxPFdih5yvKVi3XD2sDNSeMaDgP2P9EbeL2ohe8SM",
  "key17": "63sSLXGHmp1o4RgjHiWknttyvGEKAbE4rnNmNeuZ4s8X3gbTEhWqGX1Kum7m6ub9Mgkj8XxevuPx1t8FFEx24vTz",
  "key18": "4cWnBteZLfghggmvR4uSqZrgGos1eBzsKgMC9sz8qWYFjh8SdqTKwgSnuAU3mn9EaM6qPGqAdgDNk2EX6Po9LQaG",
  "key19": "5VqSGCVk7dtzrs8f3gkn87UuL13RAYEGX8pyDWNz9uXZhb7RJsTxvdZaYTEJQ4tKYgqYaEGa1sPmRKw954kgwpZt",
  "key20": "2sENGzACxvJZG8FvKC5DmPCjAxdiBeERhsufvhQ4kTgnL5kmas1QXGRKgVTg9Naicjuvs39Va9KbpkvFPmraamcP",
  "key21": "4DZaD6zxbjkmQQBLRrAd8VEVdEj9AwaVmdCWAU4aAwyK3wvrBvJsD9cnDviHzRBhZaQ8ywN1X3wt8s2sLCboTePQ",
  "key22": "4jKumrAQV19KtxK891d4gUXBVJzqSnp5BGBhivkY4hSwRBeUK4cQxk26uZfQFTqnXQEECXzbujGDCpjJTtTACfQL",
  "key23": "5xMFfKgZWDpVkVhRsMZXcnUFdUNpRreW3ypqtaT5BwviaTSa7N8sCuF1sHTt8VJ7X9imczWC6Zh3Vo7EpacygvK7",
  "key24": "5rYNub1nDDRQoKWhEELzo1L5HYbixSxCCKq1b1rHscJAgwaf8GXXmFm6GzsPMZCGUQKhPKdk6UKUGQoCCfDoV39b",
  "key25": "xR98zvVbJcBAzfav1uFZ5FuorL8fnFxYx4EK5CeWHwAm8Bkq32jqZ7DnXbB66EphrFSMvJagkAy25ugrjmL7tvE",
  "key26": "CFXDqKbzAU1JezCaoS3aBwJWJmsfd7MkxiuSedpKZVQnZdu7YJuEy3E9Rp9d6wmZdCntigRtR2HdnEPJPH2SJCF",
  "key27": "34DzWi2Pmib6o4jEjbPjHjEHHMMoLKhdf5E9NoDeG1ad1PhJkchc4W7nBJzeGctdXRkzinu1imbw558P1h7aSTKK",
  "key28": "5GdCPcEMkfcCWEP2uvTs8objb3P3jv1dRUKdy8VGwQEJPACRnXvG6RdhC4fsXPbRc7t9jqfgMkLwBpKPjbxPMVT6",
  "key29": "2vNmuq9r6Rea9ssyUpDkFtNGewMbB82JqFr5VMEuoiKGLMbxKfMcCHzpacNAjXuk7NnNmgLBw5m51FXS3qVjuvWs",
  "key30": "2aAvg8bQaedr5qWo3ygBpfC6uScb6jqsMU6hcB8apj2oZL472GzPwU8XZg2rxG3S56V2c8npaufGvVAexoPRP9za",
  "key31": "59RGDftTZcVAv9LTtpBJMxZqgS4fcdpDHiCuY7Rf4utzw5gZjeUfN6Q7f7do8c7kZqAbrgeYvs9Up8W1VPynWRLY",
  "key32": "2fNDofKNyjQpoQH5Z8Zohc6YtYLWyjy3Hxv5UGULdCgmQ8L7mUe3atm7JD6YYhh8ro9CiV4t87Q9Mex3ucVPqW8",
  "key33": "2qFTtra4pcXq48gM17cQmZwqWcBEe2EGjz2c3ZpMVFPBzuUHPQo7aMBt7dV1wBZDxJyCuaVajikqpiqaUUvPVMG9",
  "key34": "4uV514vw52yTNtwLRM3ucp1BjK7A8SaFx8G8JrNyUM993rBoAYFGiJwuZu2dwZxMbnxcCqBJzhUACXpNa6QB7kSg",
  "key35": "4thUMGmh2HjYvr7XLsvRT1aNpY3G4d6PEcL1va7WswbFUzizhX228qQMPJKRF9K9QUjfyK3dBiWKxtKzXW2r4JBN",
  "key36": "1hnAiFMqZnHaQumgpGYsn4YjuB731NFVoM4zfieXYFRNg39uS2c1UzomwwEbLLshHwtMTzSfhsFh1H5d8S9yWkf",
  "key37": "4E8XmyXNjJSipzAjbaigrvv8F35kJAC5arxQoeXk9o1H3WYbVgmb8vkZ7Q5LyhjkzAbcuNVFDF7Aw2urPGehjjZM",
  "key38": "2AfoYFVsbzaEycGUVesFfB3dwa5xpiNCvmkWAzHBGjxbQqyFmhU97xBx9xLmpB6NDgzhVJSnbsVHSPu4nMFEY1Jx",
  "key39": "3ycDzAgnYjoPDmSzvLCrT2TtQeBtqdKhrXTHMa69R289uSm4CNeFUPwGbybur4r65hzDPYfSuQGFaBkYt18ZqHbm",
  "key40": "2fyN44ZEtvzi2RY4S7qDrnmXRK8WMiWPDWTmdujbwq6xYyiuTmvdeMJdCUbpxm8qdYvE77oiAdWvduVkTp2GE1u7",
  "key41": "2f53yVbYsVVEdCrybRrimomJx1zhVEuBMkUrvoYG7jSYuf6ZBVK9BaixrxyfFSBSLK4HKa1zUS39mZ4zSYjpvGvA",
  "key42": "4KaGF87AtjHy36j7Wz21TcibMMoQtqSaY8HUzYhqKKoePm3K2ciy2pAfbwkB7zn4fFysFfherWqNRFfGSZNkaymE",
  "key43": "4eWb8ai5oQHaoAGeG5dxkVoVrm3gzTyDx1JTsS12DvbuNnADH3dfHgXcHSG7GvhDBVdGyHsgt49qjXp7B8bKY72J"
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

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
    "4RJ1AmkL7m4FkgJ77KpmWyVyEwZ281owbMgkTongLzFwm2FnDhoDJtdoJzLgsAHpYpnSdnAiSGwp52sGvc7T8Fie"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qVGVfg3TDoG5XWLHRjkF6sKBaTmPz2Dx9GxGDr42wcHAYUfYZhUACYNGUouTV8CpxjzNtgVwx9kSKeDXF7TBf5Q",
  "key1": "4Xn9ntxzvrR2NdEr6MoxGcpctF57gqxQ9HwipgXjWaJdjcM1bxuhBoFDK8SbVaBGKGeGXNEHEPysYubLBiAhpsDy",
  "key2": "4Cw2msLHuDh4nHRCQtRtMZwkw9PxUcL9bseAXM52gkXe9c4Jefp3bPKhFS9x3scZYnLggLicKFjs8ExtrCqNv8dV",
  "key3": "4Fpp4kfNTsFq8Vxy2cFzJHjxJ8RLq77DhKrJWXXQN92VEAwh2aMZkz5Rw2BSbyAoBBfgJPv33bfgGTEtbSSyDSVY",
  "key4": "2iBTWQAbJscwZj8bnyBsKzcPottC5wsttGCnCEq6gCKQnQmSqxsWbMoUDnrx127Ut1BLejJEgMXy6jnMcpPvnje3",
  "key5": "jmFu9v8r4HJEZPDbkjut8f2uEjPpgPzZ9AtnskXfYU3AApVbs4NkP66NGAfeF4k7V9jLib9eM52s4QHC9Nrjo5h",
  "key6": "2fAakfGbPqvut3r3kGY2S4jJwmaDefj75UdGMMf3p74oo3Wkkpria1QY5MKgocPVuoYZ4vaJZckBYYYarFEKdxwd",
  "key7": "2wNeAneckCjRf5dva75RRv9bLSPBq9tGLr8b8kpk2KzFrzT4w1YBHAfsG7Ttp6a26GHdyeEQKdUgv4CLgM8fThWs",
  "key8": "whJbQhoZvfM1ALz7QgJsci8YogjhfLs3iUGKBQK2jWw2P5Var1wXwkDpKniCvCQiVZbhkGpgxiXsNiphKexUFNi",
  "key9": "4ivcFWY7VKvgNdCBEqDq3i9sLT2p7gSWkfm5kCT7zCamJrfE3wrWY6CWCoMbbCALT1MqcvCSaSq68b6eD3Jv5bo",
  "key10": "4ShVxYbwJGEnkZoyFoR1RaV4kjwTZANd1U4QFsHDnFwyopHNcaBEyUSe626HU8WwJbdkDDJ9g3aMAZQFig3ox4Lz",
  "key11": "Ehszh5WLTnPYTtpi2i1V5ZeFuC9QTuLc5gssc5FBuaVE519Hi8S5QDorXTBhHfxzvKKHGkaBRA9PcyhRv2jxLas",
  "key12": "55dh63GniDhhuB7aSBX8xATbqf58tTMpz6wtX1Mbe1FkHTAQcd6bZCpuML3FeYEmGaAWtdYCiC77K4JeLdyvoLEL",
  "key13": "2prP3GDDNv9rXMK7qW1fq6D2jGy3Uf23xUEwcBESG78E6q6gb9YEt3rj4eP3qqUL2L9NyBPP5eoz7JUdJsPUZ7nr",
  "key14": "4RHCHFq9jVUwQejDjDByGyA2dFBYqfmBSks3nFjui9zU4S3y1eZ7xxfJYnFTqCeKVswuAhWVyV6rTVRKExgyfkNa",
  "key15": "w157J6cxKjafGZxtLEZxja4PqMHNP5kWhYnosqzeqFYFojgQBi3iccNaiFPoVHeG8bT3v5wZPBqhLdRFU5LW6sG",
  "key16": "47CRq2HrGXvpMHQ12sMvuHA4AwfzArVcH13dBGYXoeLQz9jXYzStFv9wUVmwzp3z8qLMNuXuu3bzvB9TBsPxwAPb",
  "key17": "2L9Z94UA2KpRPCtgj5Kuuuogx9D8U7U6hMr21LgmoGhTEx8eZo7ZPY478yv3mMzb7CUQeDX1b3tZgz3vWbhDqEYA",
  "key18": "NJ3oerx8kU2CTVTS13uaHTVDjkGvAxWu9LFCRNmaort6u18i5FRH1ZzqhwGhZabuFptBqbdkh7oTtbbWg3KY4um",
  "key19": "5CtSobSG9ptB1D4gWktVDUDrPWRkfospuAjmR2m1TnLKiYHS4UyBAgnuufY1Sbrf72NMUsU4LseCC8cJz7cYTK5y",
  "key20": "4M9akSoPNbdMQAMTitwX7FgU3pVjhZ7xepdFJR8UskStRQTHFvxVB1fPaJWTePuH4g3FR5pme2X1doECfGhQicPW",
  "key21": "f72JZai6ADvHbxDG1XkMvPr1WVGQJ4EDW7wfQz2BQQ8jkjrMfoUWERxmdcJHFCMDwt7LQ52UNQyng4w4MmE1UKU",
  "key22": "3HFUGdkFyd3ZywtEGmc2kpkdvFppziYo5rvenrbmN8i1vdQWTsLaoZqZ9Qk9TzyfGUJBRBmNsFopRVvk6coy4Sdn",
  "key23": "5H7nbC3gsLUvmqAqiR1JAuwhinumkgEXsVC2pPUpzgHAEXC1r9URGqp2XSBZv4HKSAqjSvs7YZNYCdRkY32LXSMG",
  "key24": "3HSmMBFZdfpY4BhKxe2y3Ac1r5zNkMdwoqdBPzwwRMKt4e5tDNRGcpFtYTWDCHBT7asMw7jCHa1ckPvaiCWAUxeU",
  "key25": "2ZRFPPFNAHmp25CTrpde1WsAqy9bU9DERdYJcFg9rnsPQxQTqPCEuzyiWrsAZpHpfWXzwNxrBggVYsdn597y9WAs",
  "key26": "55E2ba9yXuxnpy6nbGYuab9aAgouEeGhfbTJiYRqeVrsYjGFZ4io43yBkHJnVs9C7xn9jC7ojeUiDz3nTD9PmvEg",
  "key27": "5EpwrMEQUwmGubMBp4GzvskMgti5WK3rUvsKnxEF6oFnecYUSx4Jvmdgiaj1bduZB8JMQTTMBzwMdpZboYv2tE1b",
  "key28": "5KAAGWYvgtXNR2sJPQP5neGtwEwcrzG7ZeGZrKhDXhsDgwMeSt5SRSYzUArqTWuAuPmi76E3xeViC9VeA538ia7C",
  "key29": "651gVMaR2jByQVgrVU8JqPLMPHFVeHktgqKBqMvLc6xAANVd7HvqsYQAi5rULpRLbjjuChtUcT4VgSaFMr39KU2u",
  "key30": "4BkL7rKj4E9sAFe9UfsgASQgZ1BB7KHn3fmEKRWqESWnyRV265hJyGeUDY1KDgfPJ2NasVqKsT5E8Up8pn6t91iA",
  "key31": "2uDhjFfYujEpSeKCB4oqqdRGHwAnsJfKbJLXqZt4wjH8DpWeZpycm3hzPhTf6nikaFLVYn4rPHgPBuWnUFS7QmuW",
  "key32": "3Dpg3SH1q7upxLR2Hmsr2nADJkB2je8Df5nLdkZhivLyx5t88Vu43LjiDWvaoodwD5Zgs1jv1hv8dnqU8hBvuNGN",
  "key33": "2qCqjcRo8H5DhFMJKpNU93XRdhMG6ypUnKohZZYQ3UwxoVoqdivsgzS8tciuTfwQ5Lwu1caHsmuNoHDPR6AGk8UC",
  "key34": "4h2HJUUAvHLSu7gYkRVDhrtKGab2ELWnCpnyPkzzXvqt2yg87ctDB784EyGuuUQgmJd4h3Kn8qQC1V315mJqmchU",
  "key35": "3vz1CkMjjnDRy3BQ8sMvkS1E8p7RybjZw75Tn1XghRrwMJ2CS6PK8vaDL7Su4PnbtsadTjL2NUc2RuJsyCaPPFFx",
  "key36": "5n63eZMDVLfsdWkWxS6wZY4XMTp8gAVPYENBYtJjgk5fYAYq4niVyqhhJDQzQe1m8Bp2gPCRW9wpNVJdyJiQx43y",
  "key37": "2S8VvhbwCVjmEEhsBU3nYtytonstpDyR3pMN9tJQ5eUuv3UG21Ud1Bfay3SW2eoEMyqmzmAEj747NMJ71prVas17",
  "key38": "4x1upR45sf1GxiF74FjrSLLxZbdAzKBAbPqZykc3yUVFoVoatXMdi7cNM6zPEkCj2Cd1KsSuKJmTqatD9vZxVrF",
  "key39": "2DuFythJD4VQd6xB1w6MgoYtQue5B2usySpraiE73weHVqTdEsi3Wh7KKeDLjU4w5k7ACUaXp1EvXXBybcNTYaJF",
  "key40": "5Cz4hAkFJZvLH2bgTdzPQkaXFY5bHuaxswSBxe4ooQDThPzF4Bj9rK1Dpioai61whFgm643A49cGN1guW26119GM",
  "key41": "x5A6DtMDARWkfZMu2nsgkTNVKbabd7zPKiSQ8VpTcR45AWAMrWo8YMZX2pqotQ5qW6e1gm1y1iaAjd9WKqmB5cd",
  "key42": "64f5CVztNZq5puPmj5YcVzDBQ6Ddohq3TQoHLJAVdgbawePY38K4gUyEy9Rrc6ARGgBgB7zrM7xgHdgSYeu2kej1",
  "key43": "3ZUGc9SeSQCUV1uzp4pHe64MEynFz5FvaSwH8TXY7oqErU2WFYrDKvYFL3yoK7rQZvGRCGG9tZ7rKAubqjLf4pdz",
  "key44": "4KZfN3wgS2RJJYmTarUdAUzunSKje3y1WxbyTa94ZbX8iNhv3uC46U3MdNpUjhejTEHc7iyVXC5GQv7kNpsHn6Cv",
  "key45": "55U4Xmf8pekUaRUaNnSUQC7qYetEH1LVJRNPE9ahZ1eKRoczzmQPmHmqGEhtLqftR7nRZkcK5uKU7p8bqjWhoUr6",
  "key46": "4ondnub94DD29Fq5TVM6oUkARFzMsGpRH4XKbvABuStN1z37RfkdmnZKUWxdKuSWcKKXGHYKsqAykj9pUVRfa8ND",
  "key47": "4BcyWakZVp9KiCN33iXGr4Fbg6Q679vCjman8RgaL2wUpNZ9BYvGQT1pNn91Gs2p1fey6CYUjTTkxtZ6PumkHi9N",
  "key48": "2eTpRHeswdcS5WJL3HuYhBx3WV4sytd9BZvu6SqDjYqT6VJnWHKW9L1BfbTLoNNTtNmEXM7kVYK2tnTvu322XkAT",
  "key49": "2uCHzLgJVFzbD2kPpbq2MSa5EjtJ8Sn25CgRDxnm7w7FjYqovu69vRWntCBckM4ptyk7VjuSMKeVrXHTwjLd6uHr"
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

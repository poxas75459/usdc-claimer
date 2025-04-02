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
    "5qHMiCJbsbjVyo9pYHSTMtcdJp1QQAMNH6CmSpVA73kKYpSjZjaoKCC8bbgcvwfeYY99DHkAXEdxovKM4APRJGNE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zhkoaRPixVLSMt7ebiDHQMpVxeRC1mUV5JSfQz1Y6aFiFKbkg4tHq67oHZboeer5EJcmPiovBXF5ZQSqQ3Jpfi4",
  "key1": "yBG7waSjq2ZJcjRvuKrTDfABTjPnFBoGBZn96q6K9qDmToXGv6rdD6JAq9y4nBgeLD9bUcxg6rZZdxNfsvm38X1",
  "key2": "4YL3M2ta21CKZAMECqjBUer4y7uLsr9yt87VmX79DbqRkdNj951d5MfZ3BuHMENbiQWiTcwdp7FKwtCnLTTHo7dA",
  "key3": "cxDeamn2P6g9fbtaetM3CK1W6fYpMHYxZVkDN7XrwZthKymyu2k9WxdtfmmjGYGeBu6gtozYmxwb5VkjhfjaqbW",
  "key4": "5KT4Gb71VUH597JPHvAg4dXJ1Gx9yP4Twei1JfQMND1jBP9y3oE2amD4yDxCUtdWq5gnqMexUEqLRX2goqfENWDq",
  "key5": "YDWhm15fkcwf9aSWpSRRxKjuiEkK5fWNQpQy7r8jhhmtDJF28JHTRxsHHPzMGL9RUmNLBKDXSPHT6N5mdrK6t1g",
  "key6": "4yMWyCPyVFb2wBsdCantVAKrpuRx5P73pr5e9CnCtuweVnpD1BvsUfBHaesTFAr1qHR3x52LowZafstoJNcHsiDR",
  "key7": "zZcR4pQCGog54yURDrRtu9fDR5hxng5kGXTzVS7cFBy3UdB54gTP4s9HQwXpnRTXxehiwKSdvoqusyKeDmM3kY4",
  "key8": "2LoNgg74197ssXRCt5sGHzD1mxiej7BB9929QgcHVCY3rxKGxHGebZ24rcX659hFv1rfLCrwsYXgjB5xMxHAf96J",
  "key9": "4uSHdvVYKmzC7VxT2G2g4tedwcLXqziPeqqjrRofuUamUqSgVixhcUF5ezY28MEaAfiabEDX5afPD7f9JXYus7kW",
  "key10": "SETFWg7cBr2wZT7r2Dch6UntVX42QyGeFCYrr13Sv31YApei39jgicCnBwyKdxgNBGmrhyHgFMZjbNB2FwCnQJb",
  "key11": "5LhwzjTWH278vo57sy4DFmgQzLTyBeEs7ZRQmyf71uRd7XkwZqMDgc18NFmCYUYgfYwKV6K7zCsJd576Jwue2tXU",
  "key12": "63ZvNoAwPMzApxUHvB5xPc35U8sX4yhhHQmuCUsQMaeXf6GmkL6BHXvzXJVUFBm2NjeVeiHXHbGnQuuvR6eft1Ac",
  "key13": "5bv7KunxKb5RZPi5oo1xDQGEXDz6q9E8sXKE49MqnKJ7yi3MQGuCfpdudSASD1Pqyff5AHGMyTu9bJX8RoFZujsG",
  "key14": "5KumbfmzE1Wf6vP5sJphmrM48giRhYpfBYNMkur5Fc43W5TC4itf1K5r4gqau8GKuCHTLdiPQ89fCBj7qJSFGd5J",
  "key15": "XJVQXFPTJgHxFToUTZdyCxkPdLohCZ2ZTYjf4gHYZvg9Cnm48XBjxtSXdvLH6UMspzDb4EniRk2p5RGbgDdhzNV",
  "key16": "3oL64D6qf78pxEEKxutafhcHnCJeCmVcohVzYbAh5eu6XegEef8UMSReFBKDp9WNQWUpJsKpa26NAH5eVe8tR4kc",
  "key17": "5Dk1WSXuaMye5KT3UFCt3pRDCyfjH3k57JRG48LHpWp4wBxYdMCZ4p3on71dgGUzgRd4B4iqXXT44u5vNPhuRafv",
  "key18": "5KC8ucfRU71Y9KK8tAiNfMUcCwFoMXT7SDuB3J1HKvhS2rx78B7jdivfmnH5UuDTf2yKkMysyazpCu5VCJm4oRoT",
  "key19": "2oP6BvW1oAiS8xfW4DJf4cpG4XPPFSm7LWLA4jifQ4mkhoEc5vNdmCMKTidGFz6SeTL3AehpXWMdTSG97g31LVMF",
  "key20": "5JSbG1wLL9oubQJecPt1R6pWZmo8kzpRfywCoownqMSV8e6TbNzPBNgU9iJnMmof6ecdoYbDqEhW69MAKAsLXZ5u",
  "key21": "2gDU3XKprzUpVorXP38KrcMzNLCdQd1cNiqJfcBeUpk6gwgKSgrhoE3rHSEeQB7BnUuhB2eaAGi9EndVxRxYMzqn",
  "key22": "2voYjvzKv6RgfJZ6otTLSxuGw2w4RU9kNDtNYebLWNmbX9a16EJk7G7qbG7zs233cdBYCUcDNfLr6bayRkzZUPfQ",
  "key23": "2aT22x8NXtqxfNKfcsCgRt7oWAouHs6Ej4GV6mFeq71Ve5QaQNSDjzV9TPC2fTzpbBMie2bZYznemh6ZgZfsoVUk",
  "key24": "5q6Tmjx7c7uJjkiLp9BycWPL6X628EZ24MkVdQYfjGuGGs9XthWDkrRKjVR5SVYHg9epSKZi7TKKUy1PbDpceWYt",
  "key25": "5vpJBvQfztDFG8mTwWCDzcZCDmTW593as7NZ4sp5G4GdsuR7m2fehZdmqWpiVHbc92RRiZqZR1FZMULijxHeTDer",
  "key26": "2MLW7Qe2j92ALzDBgctRt9cHpp3tUE7XbY3Y1uW44tqfKZVMrdcuESha3aZWJuF3hSgTGbgnpntzT3tZk5Jqy2Yv",
  "key27": "3sPWcv8Qhn7MbSrkeh8cnKKUUCf5QjLSx6dkT7E9RnK1ow3DJ8H2oZdP7VRCpYyespxvM9d5eRuo2Rvs1XDgvTAw",
  "key28": "4MMpjBNxQ7i2yZy9NNjLjeTFwfU3N6sTDiKCHPN2eJU6hyEgUBfv5qzxPFz1ECyxxoWUAdoYo65G5cG1DXV6zwXB",
  "key29": "4syrzyrXifHwW2UUNsmWRLkQgEaNnVHjGsKhrsbipT4hsjabw3QTYHQyQQqrUKqwxF7rT36NKPSNsyLu6obNgK94",
  "key30": "2EdusUM9fZfAqtihowxjjkT23VuULbSVg63NUviP3gCWcskoaXxioc44bDKvWxW2woXwdpHrqyJEbcRKPhAGYrXw",
  "key31": "3hEajvzkqN8Cou2RvBoDQWgBsyUAQqxn746XWgW2q1JYHApu9TbJse2R2YH5N5Zsuibpznsf98EHjKoV4BgrRZ86",
  "key32": "3DXBG4NqFrrERFPWcHyeQ5VUp8xH4na66dnNwko5adZ4Hdi7MRv3XNKZZXirjDrHZ6M7j2bvEyoRNBY19XsLRoAi",
  "key33": "34mv8SiS8UR57D6JGq9TrP1rxTV59AHavVbct3gArpiLxUnkH6Y5Gko7Bjhy2NgdjfFqb6QEvwKSaNWVwn7c31s6",
  "key34": "46ZiEpDFog5SXF5VbH4nfzbZ2TJmWiZ4SizAW3ybCAtyD4NdBXRNEM4D4LN86TSoCyqADJnAPTTyL2uicPjGmWxq",
  "key35": "3Q99ck7Y6kKMwnFcjqEDoD7WhVUQLWU2nuWZ3oWr2pcaUq1tkyHXP8hcAbBiWwrEdhsZMZrpiQ1mSck8du4Z53qv",
  "key36": "5kgqykPE4UQYCJsHwDqnbnbEL1ZsWT3ubAM6spxb8xm4toY9Ai6KqYTU86LFhkYQXhL3aMNVSfLeLEgktUHHr4bX",
  "key37": "3m1QcmjDvc8dpDHLidKweD3cQAHxQEkbxBSq2XjuuRefMWxf2s3htXoQFjyy2k98hvQ5uPnp32VMUu8rPvFd3Stm",
  "key38": "5Ko8Yv6zFSBHnSVMqwTU7vcAitgzy12PMLxH237BfyMgd6yKPPUB5PL9ug1knNdxjtM5eKiWFKWVkbQ3QksrH9w7",
  "key39": "vj2N9c1hySPob2pCn4F5zCrmNGnJCXD3HtD5gykDXahvtBySmh5F39dnwFURqNgXJB14v7keTxKFuy2hWiv9FSX",
  "key40": "2o7c3QT4MtJUSFN8rTPSWBdukvuPvVZY94KGXVRXhWbdGYtyehorzpFKdzmu3GmVYgE7UjHLeS9ybg4KK4DDrVAB",
  "key41": "wTWrASRHLtXfeKXs9jMuW1qBmaiyV7A1cd2jgbvGZJAbvK1n82a3YjKyUr4C2vG45yyiR4Jb7mJzVsQWCzQujDE"
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

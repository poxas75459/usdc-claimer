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
    "4u6Cyd8QCPdUyNbK599ngZKuaRC13m276usDiH3iwhXuu6N8vbSUsLNnDYPx85VxufvM2wRnyPG3kcZa2mMvKrks"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rM4MmprDgVn7GMmM6DQJLKhjinz2AGNsj1q3nEmQbC9FCT4QQapvhAXM9g7ENTrJfCjUnZ6JTdz5nutDB1Mknpw",
  "key1": "4ByxYGDFfxtkkdRPdg473PQQeTNAPLeSUX3Up4rqAnxXVbRHifSBo88DLzwix4NEhadyN3KGFYQrB1VMmpwbgLgP",
  "key2": "5FzfhXgjKoYmrvvcEMdusLJQ3jUBgEpzoNkZpxJ24zB7Ssr8cVzuzNv6eAbWHBsdxKFskoh2fZTNqn4dFv5R5GKa",
  "key3": "4aWF4Pqtbbo6NPHw7muHfMpUzsCyGBQssyc59B7AwCvjomiXYGWizrEZzqok345y7GAqpR6RKkEpounnRiskt39p",
  "key4": "4YqTZXbn1ksEUG7EAQZ9Jc8cWr228NwiL2UaXN2g3ipQaFjadQy3RwJaursHA38N19gVMHSPXAxQAXgBYp14nwnv",
  "key5": "4dP5ebUhvNkF1v7jRVUu81KscLrPjXv7vh853mDGRs8dCNH8hw3jtqNQDQgo1CcRE3JLcWczZoJv7jiMCCEhvxnc",
  "key6": "aECUj34oPecLUC6vWBzLD2pE91tpDk3BY1VY2QpJuYqv2yNFb5WLDHvFZqv3jfmoLVPaBBJ3fSrmU1b2xtuvxqh",
  "key7": "5nnBpp8kSBmnt1YGdFcDjXg8EFys8yjjMTVdsdjEiHyvmpEadgekJymUnGWUyz47xY2X9jhTTBkRX8qbRkx6b8sa",
  "key8": "4tVGTTq4zHeFJzvguLSBiAvNray4AFptjqepFHFTZcw7T2GefPvWEoUQcXkcAHSJMNJr9WWWPsJf2eRSk16BcdpX",
  "key9": "jL7ygsxgmcPPAmXwcDF5V6FPtmhNPoNrbzEMfqoYDcMmfxG89chtp7xefMrhrLfPFQGvXgDjxGHKwRxZF5ozNQk",
  "key10": "26TWeuih55dBZ6Zrmjz4qbQyN6XMfyUjeUagCiGKUdevvm7pAY9zQQQc1RkxPaQmLV1LsBpHnPPTk8vYCibjnToU",
  "key11": "jvvtcwMC5RzVPZ9kWLNUFgyBSnLP26oNM583HuKfcKLE7uVE8WJdmRqdaE1TdWXXv3bHMn34jC5vNZpsYgkP1tj",
  "key12": "yXayS6dSphYweeqNjTz9o1Q2b4JkKkW1cA6G8wP5icwypz82JUkuTXSrDJLuuBfsZBJ9CzKwmbwRttWeggkMGfh",
  "key13": "5QTZE4EjHRC6oWbK2e8C1JKbvrAyzEtokzdPj4UX9R3yFwhZrweJAx9kKDnC7wEEgoai2gfErkhs3VMi1EoiYnTY",
  "key14": "4ftkiv7hStWRSbBZmKsf3weN4CadR9sSimCSxGUDgMk79zbXENWo3wxYFqWti9cTDxaC2hktnn9PXc9R8KJxb58Z",
  "key15": "5Rezz4VkAphDJGx3AfVAsxaN15TnQq5exD2rR8xAqmqYBqYBtgwD28hMN54BmqiDbLegvK4xGvqjpPBR2siPe5Qf",
  "key16": "4UEBnzt2UWLs1P2Bv96UqZ93hpJJ5SQLKLyokJaurRcdpkszHwY85rgYHFkY7UngoNciAWqMzjabo8Not4n1uWoK",
  "key17": "KpcJ4dE4KtWGwRzMNfi5UL1cLs24RT6x4iyyzGKudtqSC6DS4zaDeg5vsbBb6PKmaKjV8Qg4dehHaMq5kEpRPRR",
  "key18": "5K4QdATvEEvgsXruye2wb7RpgfKjK6nZbASQMVbKnE12jfXArxVEPjwKRtopdWB19MBxdESkmZ7vZBT6CeDoYA4X",
  "key19": "2PNxF4LFQUVz2Sf5wbKTLDyvEAKMyMYqmTS5EcCttLZeVwMnwPhzt25KiAm4wXVUEqtN82AVRGokgzcnTkXHGRVU",
  "key20": "5TgW6Pnh323N1xQGMeVGtC5HqqMUFYn2A242hBEGr9bYAMBSzyHAjZaH8uiKYWVop7BCLNbiYgP335dRf2hRfjXV",
  "key21": "56NpiKg5J7Pd5q2kLJkFNYGbKMDJq22ZzdEQ1BbTSGm6AVqqLK8CKFmkP8BSZo64MQHTYJEN4phAfLwLpYkCcfB1",
  "key22": "61dqP4eDWMze4zGpDTzdTLkewBhTNFW6TnaBvxB9UEQwURhJam74qKudz4VKJW5NLzMudfcquKmHhNzxcpbDYnEr",
  "key23": "58gRsf6NM1G95EnpkvknSJGMywCaJeQV1ZkVcxEUTFCtftp8NiQJFUzKmUEgujnNmpMXPknLgeaD5C7fJwATwpLd",
  "key24": "2ULMzCeiD6bKKeLWwHh2HqtdFv6Kh3L5t2Z1QRfJBKb6cYYywCVcSnwCq4AT4F9MNmkPcKL7pUTyaQaNsGuDYE9r",
  "key25": "3nztHRVY3Jkh3PKMRvqwCW1Ve5SQiHjfEW2VRiNULrh5oYxotDtHknKtMEuxC7iRYA1E87wKmZt1YF5CkoiSsb8B",
  "key26": "52z6MeYC4quJ2XUn8qTFJKjA7c2vzhuMyVNewuRqtbWwrjysk69iUFL8fu27TZctLdC8Q8PaH5mh52CG1UakD1tg",
  "key27": "4tPrHYUGgxc5Tw9J9ANndosmu1qtHoRj2zCThsnq5vvucQWQxXVknT8XjLSgVADFWsGExFDcpe7NtZXsZzvo4LC2",
  "key28": "2yFfXR864sP7yqDA42xreqcJw5xL72EY5acTnbX1NtmAtmY4pNrDzqqmx8naztLdG8btuWGbnd2pfmgUcpeJPMdd",
  "key29": "5j5GarRfRSKKa2a7Px8mxB6quxCoA3k2WnWKJimbonGudsgwUpK7udXvGHxwZgm2eHrSTFyztTupDhUtzTSUFzrt",
  "key30": "2v5MQFvfGEcSqurWJ5o8zJV8HTF6xkGqc4gL8YVq5w2thZFjcvvUZKtyrdK14XPwCx7wPve1WqaxJyNzxsQDjTf",
  "key31": "3T9nMx2SfyVixAYwwj22Qa4fMg7mkpFtZTaPTwHsN43PaiqmNF6BANaSpi5eKh7H1tjkCJiXKJAnYeMExQvKNEAb",
  "key32": "3yQAXZHw5Vnm2ajtAHTtKqqNymKRLs28qN4LggW7FCx3nK1uPZSYvM4k4w1Y1evA5pTC3nceu4EmBDsJZRmsCeHg",
  "key33": "33TwNaKJQRRUncvyR4A4T145JSZMWtiHgaurnNkxEdCZx3t8YVdDuS1ZnQ4zQvoam5QfgKmgx4VjYMZVRhszpW7r",
  "key34": "2Fim2XkzR4xvMCJPVgVd1JyVexHyK8fXm7f8s5Ywt6jpnDRw8ZHmvzhE8DJiKyRdX1gkYCy6hkuaMrMv4gXoLzPW",
  "key35": "TAPQP5EgHBo2qioMnb8QmwPLxabtSmxKk1XtGtRsCRR9jgnGrCLi23pgVb1xYcmN9KyDqrybzBJW83MQoPXNiv4",
  "key36": "4cPt9tXhrjzkFMh5oSeCtdC25a5vbdMEZcRcbvVUEds8tfiomXg1Tet8PgPbzTdhpoKKY6H473vTbcL1TM1GbawA",
  "key37": "3utEAnr4B91uopvHjqkV9fuoHMtyXPqEto6iFjN7or5CcoDEqQBfVaYGUBXkMfSAdWP1Ep36A1yacJrCs8zFChtj",
  "key38": "4xWEYuLbAJ7zdgiw1udqRzCwfjbKAyULezuCtFWfQzBMEXzzDwvFyyV7TbmhXG18uJwXdFV3gzWc3D55wXi8FPKz",
  "key39": "FxmWYHg1zrrn4omnMYCyh94KZ7JAAJkudx6h7Fr3oS374RFH6WeegFM66XMzR1PxHD2oXRTpiXsTqKaNKek1Nv4",
  "key40": "3UPF1oZ9NSuGgqNkhp2u2uoJM7K7XZDqUws3wyGGNSFjY9F7GGRdBWsdzPDPmVW7f8MxomWwRJszsyD2SCo1ZJEk",
  "key41": "3mv4FDEhEDsLZtXKGaJP9Qyhb1RbGSBFUKMa16fRbtQByKkYToKU23HBaBHa5wZBjbA85aXu4fVQYDCRnRucfDw6",
  "key42": "wMaT6Je27USgx1C6XApKuFAJa1kB1oBtYuaZqn9JkQe4SqNYAdQGdtVCeMNiHfNmJ37C8FKNGbQz8qJXiCsRGqx",
  "key43": "k1FRmkryMB5Jyqpe3EuqtGrZZheFzpHRGhVaDMTyQUFFqqHXxgfa4ejYPmN6UW8zytTtpTrrJCoccXzZFaTd4SG",
  "key44": "5RqJ6TddMCqvSucoH9cR4VFHEs2qGc5jdwwaQx8iEurFRKhNEBXwC4pYzQr6XMmzpsta23bm6xC4saXkGbmb5gUC",
  "key45": "H9jGb27DPmbao6z5zn8uwHJ9AaiLuU2UujxyYaCcyVD1KnxpeyYvU8gdtLztRtsyT8t2Q2WpBhiNNLfW8seCRru",
  "key46": "3GyKbJ4P4p5GJio2FYyqkLeKiTujfi3Ytkh4XAYYefEEFCdvfAZvrf9c4h9Jz8wqfg6TTVdqofaWk14u62jnzNui",
  "key47": "2THXhtUWvZBYLNiKX9qMAMZTwTd3JDYLKY1xV2SxyuJAx4Vcfgn4FpR9TwyhcrMqSJcda2G6YWcuQWWs9KebZnGB"
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

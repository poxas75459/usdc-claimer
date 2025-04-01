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
    "4LvyMg7ytkQec3LVQVK47qtsgNuHTVmq7moWtMeFUGm6ppKMhbby67fdL1SonXJ5wctY7b8R7236PHMCzqHb2exk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "128zyrGN6TH9dy2t92HVpubuv24RkZUEPMLkEoXdDYtXGD4NXF5vHX6iP2A79mSduGWUhKgUKHbKG7TBWcAxwSdD",
  "key1": "2caizP8V16fXNMrhyk4FUd3ssAtvqUVq8TPMFAgSP1Gj1B3PFbZYBWev4aTj7rhRFqQag61sM2Y4B5x16VVpUYpq",
  "key2": "61dAE3WoNz91uu8Kj9YkF6bksxqcoerTAYSJi42Ampdk82krEpbPYmPtJ5S9fbSt5KzmWFEoBLWRC14Xrame5JwC",
  "key3": "S7fXxHrVZMzfDTAz49iJ8n4Dtgkox5SuaqbgJQMztS7GpXh3MdrzQzv1Zcd4JdCvedF6bViTNnxDsLgnDYLgxho",
  "key4": "4QJRYrzNZUpy4UyVRcWEhb2S8gKE6xd3Z9gCZpF5rm48vvLrPNHtrrMe5d8kcVQrTsYYS1414gbYkirYWT3QV3hs",
  "key5": "3Xiatz9Z7JVGbqPyfpFZUhimwVcvxH1dY3z7pH3ywdyT6bVERNuPaYT1XvT5Dpp7j13ysbSgM6SD1YPtKgR2HQjX",
  "key6": "27gmKW8vSJwPNhpkEg8s8wPk7TecT1J9h2kUBDw9S6jshepXgZ4wcyLuYWs3aWue659jigwoZaf5HkoyQCC4CJMM",
  "key7": "pHy4DXkCBDuKDXPb4gdL5oYhrogvvFrgaejL8vZc3dRxuGDLGM3Q8i8ecNMbDoL3Zu35YwPuhs2A4bGD6jRgx2e",
  "key8": "33rV4yGoXgUWh8Q5eWkDMj8oziGUJE8hdiLzcLRG96KMyrdxp1xzukKSU4R7vB64XyqsDhaxXxtTX75to6TYt5HE",
  "key9": "2mLJff2my3Mf2Y3sdZEfYirmCrdSbH9j3PRZRGVJ4rSwxa7sB8nDXNdXAnfcR9o2rwTUcTJBFARtCYM6k3uzbVYo",
  "key10": "4Z7xnunvK8m99c25CRu1W5v2EMWvK7MccWPmaXyAkhMGnE45HTvyA7LqFdVJoupPXyeSFdfLN5KuEupnAQqsFemT",
  "key11": "5cjyktU8Ap9WTH2ZcUcw8nYUv4z8m5qD1h7v7ZWxZ9JrvbAxY2Q9vAdhQRrCYyzDqPMmEfry6ibWoQ7e49bq5Htb",
  "key12": "4Cmexp15vZYUxYDqB2xuWokNVHdC1enPRtfJZBAXehLy3duHme3D4GfiCvsrYQ12sSzeJYejUmzqVtz2KdoYXFnr",
  "key13": "83MRCVXSiyt7nJ2EBhubEsyiixWmATofQQcU1yD38DZfXyhnzfu19a5424W5hawEkTFT4c8gZ3yYVQFxcKod9Qe",
  "key14": "5xeLU7BMYkiui4E4PK7xNWfTMwAjDBLJPDg2eWHRppN5Ywu3amYaZLnTD3WfxnEXCiqetxg9VFAdwSAhoPMMLkoJ",
  "key15": "3ANQFc2dj1YYCAnSLSJFSYB8Mto4GARKFLcYgygWGVfjuvkaxEPwGgLXHTyU6LQxwJ9GgdWFh166xWQDMh6BbZ8A",
  "key16": "4t16vhWKY1ksPfgYHLCaMToW9FHXw3j3vQAvsjSvSc2AKNabh1bSQjkp1iMAyY1orKGWkVeF2zETYhcbREJgtT7d",
  "key17": "2ePRDKwf6aUN2Ps5XWLmqavZNiaSaPewzAscKti39jcW6muJUQ3L7T38AXZR6cRxyVEiqFRx28aezneuTC2W2Lrw",
  "key18": "2Qt14hwevrXVwComgzL5cFeSmShqasHfgZemoeMmBPy6kZhrKw4QTmLjZxhpJbiazPh8CqpunxZksdQBidjwLqJY",
  "key19": "2LkUHFNAUMS6PdCQqci4BS3KB73wBzWobe7oJKE2NPkqgRpsw57vNUiAc3owVNmUBJnq4bCpVbG9Z3hBSife1Gq6",
  "key20": "4y3tp3xL41RJed7TLHGzoK5rgrwsTg8m8VNwydAZ4DfzgxaQR3LPz29aAdxeVaxeFcLU8uMWjfwroeUbCtWsEy1Z",
  "key21": "WENUVPxoL2QmamzeBdKZ11YMxPizjjn3vrEr2zf323ozehVipKuwmKrghmb1KuHEgpnPWfryQT8EZy6RuY47P5H",
  "key22": "66pzbhUEeVDZaGrPs4drGkkDJUd2sVuXVo6Ab1vMq5R5p938sZdRoXNtBCcodeTc4nAsX51YrhHtQ5Fx9xzk2Za",
  "key23": "57YMYWw4s37LJw3e17bPgryquj32khJFAbrDrzDAmVV3LrKvKnEYbP1ptMiXhT1NoBJEk71qT8CTDWkS64edcZH6",
  "key24": "3AuT4n1yiTjdMMquboGpP3BtG15WdKdKuMdBWVs11xUyG6EPQndTuoi2bUxbw3hrQioFLKFTqpQEsUHmHKicb4YL",
  "key25": "3DrWjcUmvw9BwynR7P7hcK5LLzkrjFkkfyNVme7Rm5boPD3HfPxKAvvNsb99p5FYnxpQ6iCDTGS7Bv5mCRVfCtSV",
  "key26": "2YDsBbNwVmVtkibPDWxtsosHtjd2Up2ZLeYvpkLAs9PBie1imaywgE7afkmxQXiLFePxQodec7hZLYozRf15yn2R",
  "key27": "5yKkc5Eh3BhB9z5jwyqk6XTbJKMjMbvewmA3QsYHVtm2Fpg9M6Q9nBnS6MyMNw2tvHXVEqb78SB567EnaJfkQZ7D",
  "key28": "5ZKxXGtJaozsgH3JVPy89YrKBXqzCuoKmEn3cxuLAYK8C9GzXzAL8qyHzoz81qBecey3gvspyhmyCE5Vhy1ndL3M",
  "key29": "5o7mm9x9GA3KiHx8xJf4rbbb3u9BtL4Xrybx8miBUp3A5SwU5CF6CQ7TVb2twsHwNcqvG9KhHL3HMyUyE24qcP3B",
  "key30": "2Ak1RtVkZQJszuu67xcDs5A1meni1AkuXkCjq8bzCVG1HRrYYA3mdLXjpJ6RnDM5N9dr4DSMW8fGq2UkAHqY76Sr",
  "key31": "2F645Mk9efDT3r2KgvacZ67psZsvaGyC3sx8a4EUMrsMRSRMV5BY6EdDVFq9sLrMqUkuyCwar4G2x3TmBpfgfxG8",
  "key32": "5JwoZjzLTL4k8XPKuyHzkiZefnBQ4K3msEmtAfZfir2UL9NkCfgVisFeLwhvMfaDcjG5hpZNVKy8AbyBQ1nfST53",
  "key33": "3Zce83WzYQbyx5zLo9935geYiw3ZQnfGPkJ22p8PZeSNmAvdhk8KGokjkWbFnB9wsqZvo3sa836VM7Wo9PKx67hW",
  "key34": "2E6VFz5ZNbtodxLdFP7413rLtSpS8SSej5rtsecJZv37zy7HwTGbSzXAjaEVPefbGUbrrmeH7ut7BgUSJ9zZmi1e",
  "key35": "Bbr4PJ9rwKToiZ6xtj9gZhsmMQ4CQ6iqwfefoSYn4q5hybf5eDhpdcDPszJAdQ9vXse4G91sXUKthCiEZWkVCtY",
  "key36": "5k8R8hQFaABSxBSWcaZNG6EHfBbpJ1uWjHEiVk57xwWFDbcpPe5qfVPun65xHzvuDaWVGNfzbrmmZUdoFW4YQsCM",
  "key37": "5PEMXfqonj1T194WFikPX7oYw8fFzyPDbNQ83Vmg5vbwNgFypouxu9ByrEdvhPEwoNQN1PozBsp4V4owc7hoLzzx",
  "key38": "26NQacr6WZNy1ck4jEYDGZR29QdnckKraw1EwHhCzTG3HHqnULAjNZRtJQeF983iyWRLW52gBsL36Y1LtjpjHBJT",
  "key39": "ybqpuwuG2gPgjQHmfjgvQn2GVbwcs421VeuyrEv5BWbEctJhmZ6NRYwWZeSzbGRFynjKNxx4Z57XthbzRa3dGtG",
  "key40": "4A13Z7zkzj4GkXfWPERJox6YcY4iYQdQ89xNDVLopsBcXQ81YEkysZAYjFSVyJhpewB3Xgdr2XjD2ukps5hbZr6E",
  "key41": "38GNXijWLRC7MSUYfnQxvbeh9fcV4ZmPwBCqq8Pf39b3WcTRJZYU96yMZW3SJN4YzMKgysh3gXawy23HvAasERS4"
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

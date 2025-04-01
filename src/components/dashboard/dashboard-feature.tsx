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
    "5mqZUxGRRkRRE3F57wY79LwFrh7syNNtUyLcVP4J81KKeVWshVrhtrvLxv66SCkNjKc4arkg1McVwgW3KzPd2WZt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "437wYnmK8qXRRh2fXtonSV3UaWkPjUZycAtf8mcn6H1wHpzsw4dPUnCDEQSU1sZqMfBNE4xE4W6uwV1LahsTHu8S",
  "key1": "Eyxy7pzsa1JbSB5CCMkGPBPFFi9odDbRjmVVedNLQTQXZuVSQuJ7c6YYyjuWpPE4M3HakU5rqbZH14QabSmsTwb",
  "key2": "4kCoiD6gB8YCXVmDU7r7557saUUyqXV2wKmMM5t818bEQquwQVeZe8yYk9j3PFYj9cCKf1gFEDWoQ8PqGYRraon",
  "key3": "5ixGs2Kkca5JqN5r9D3Snzit9VPRNLZYxmNNwthp7zdhqzDVxd2vGVuC4tC4R56LakBHiC3ft6XtJTzxxo1tEyXe",
  "key4": "53zhhBHi9VnaoBWnLJ6qrBPhT3pFWjU3CScSrMAH27EJkKEzJeDmemMxKx15EfrVJk86hEtFPZRWNk71c8mbLsmq",
  "key5": "DpaoPv4wChXZFfTAkkRnKGYLyuJTjTnfM2RPpbnHZ93i9NcT3cZ2rBRCBoYmqZ1n37BwqhwPDChqPVRH8a9f8uP",
  "key6": "51gab6ZmqRdKY9bZ8WJXdPv96G8jToS97dHtA132ta9cYvCX3dYqaZHdhpayTYwzSpsVAi3iNiy6Utwm7BQcTkzR",
  "key7": "2QcWHNrWeex8y39gSsNWZgKGhYQh7mcmiS32xgR8USZG5v7P4J2N1WCqGHgqaF2sDS43q4b8fEiXGaJpYThZLGEt",
  "key8": "2C46B5YQh62GLXhbnTED8nTbM8Fj9sgv5exfBfyzKKgFCSTWqwoap2asrTtiV7C3tDmf8xucyreke31zYBmEQVHb",
  "key9": "4rDegvXaF8VjN3S78RXk56DJQNCQmCT1LNozG6xbgWCicWMTAdzRqHu85WkLs47keL7sEwRDUjxtEW6Vx1sGQQf6",
  "key10": "2X2atSvW7oA6FisWNVPB5JSHeXwqgPuMDUAmonZeUtrFRpWxhLhAQHWX8wePaSPjqTKB486F3B711TW5gCFjASEj",
  "key11": "4WqSDhDyuGWL9XHAVFr7KEa2i3wXVQ9nPUDdv12hY1rbDbRJMd9YZSqkGpn4nY5Sng7ddeXwVp2rxCQNZib6d93o",
  "key12": "4jmKSfcacBLmtMMG4mknbWpNy5hMXu86fNkASwJSAMAwSwTZsVR3PRL67tJoMVvRGBxtGH52cL1RhabEgcEi4rwU",
  "key13": "5w4PSm5BWrgkVtgej4ZUJFMvHFWJD8H3rBGtQmBdapNm38uU5jmtjgUBxpfWVGyrPWC8Tu6TG6Fi9M2NqWCnkmVM",
  "key14": "5RwftdXb5PWzEPvLyHtz5DxiMjgV3t76Q52rPS83X4PptPuzAqgxD7nvq3p1awzd1PdRRvsRkCUWkSJjcgJS5aCk",
  "key15": "4Z7PUu8RnP6Wys3tcPuspaNhr8hV727hK1zY6Zcj9mjkA1zpbPrrBUV2m83bpwZnSNJ8XhAkuVsGCcQRPwMGqZCf",
  "key16": "4y7ZDuJWQ2XMhSDyMAS8bvjyZfXVijnGD9ytzWiMPPKPE7xdGoupQ8dbqWuBwwm95G69ppFxNAYxJGv8RJMG6Tyn",
  "key17": "2LmkvgevzE3MSXypvY2kNp157K5jebeCeorDcuraDRcbEpZx4TMD2o1UiQZUi6WUZAKe1eKbLRP2xVpV8peA1hTM",
  "key18": "2YXGf6tCwZK7fpRSkJEnzsUPGagTF2bRbjZ2GwVQJW2N4PPt43qWQNS5WxdCcEpwsnmieEgSi5wAVLBB1yZYHtvP",
  "key19": "5EvEsHxPDPH6RSGzvb7qYzog8CoEP1GLpHPmZCHRDpfTjHmysPNLPAAUHYcFtoq7hHqYkdwwLLXHhepRbWKGMN2C",
  "key20": "5smyt7hcw6A9671ceBVsYiCFv81CHSg6JoGExsziVTMCexE39vs4mPNrvBjiTc27Xa7axvCi51ueub4g89HPnHz1",
  "key21": "9b5bq1ozecoXVS7uMRukWHBETSvNLWS5fx9eeJHcsM5vFuok22mWRafT3eL16snkfzsXpU7qtSCULxnHofNvWQJ",
  "key22": "5ougstu7Jb5wZM9eNPNKHWgTBL7FB6ertCtD1T2rZq4QSbhfaytobySxFfRYuG6X46UuR9Czuc7rHXC2cdXv2wgj",
  "key23": "4JMLT5hfPK3akg5Esw9sNpi5RhSWKqbGCUV4i3vvM1NpRutvJ5FNW98a4tr4NJmjbaMr9QH4kbk6biU5abC5ydHX",
  "key24": "4E86avio6H9HXfT81he3dMHzHR2ZwiSAyZTeXxqzwC6q99ReSJ5BL66uxdGii5etHgjEEdpD3HV5vfEpZp57Q8M3",
  "key25": "Sdf2diKmRmiAeDhRW3yL3u3gwxEKZEh8ChvYdE3tEhPzjx9hqPkDoCpmsdAxSqSntnyudBF3bSZfTRV24sotxik",
  "key26": "Xs2jsqZD74KGrcx32D7TVBKRwe624AWCmYoe2Mqrv47358zk4Bx7BKZBnBepxevMsoJDBNhoqgKDX7ZY583yAs5",
  "key27": "3fNL7mQQwQVXaW7rjwq1nGrd3ANSSBz6BzkYoinwibCLtDpqCQ7iSxQEMRmhxB6fwRT5yDEgPs1Lshoh1SWMGYod",
  "key28": "3u92ejuJAMByweYCuRNAkqL83GZb736XRUwwkAYjkLaqmmBRhJr5mijGSg2MXPEFfMeZsBPPsTWvuwrV1mL5nahC",
  "key29": "2JWiK388u8upauJiaYzanBvWHqUG9xsCP2N27MA26iS8ifFizPWCKQ76QHNRWUqmz84HWYSke6kN99L3cRJCpTWg",
  "key30": "3Xm47cZFpGeZEAr5UrQVsYnU62EAk2YDqnt5EYGKX3mJT3uwp78Q5de8Uxmd7GrpSgm1p3Nv24x3Ren3RaaRLAYo",
  "key31": "48XfCAxBf1NKaFvv2tyMDLwdzYx8qC8LR3E82NfbjX6hRV68UsVJ8FwMpCsv3kvyctdNv8WMmjFwhSSqdtRYuXAa",
  "key32": "xcpjvMjczK7ny2Seuy4hgoJs41yw2mUr2dUgTPdrpfBR2DbT87di4NknY7qHPBVqTQCyXLwo8d2MAnE36pCN5AM",
  "key33": "3DaEQcdxD8E2BJfAHiPXEmJAvHRtfpJhcfuzDt2kMdZGy3mMc1QcCPCQ14vdqaX3bvVbzNg1uG3PfsW8rMsp1QSt",
  "key34": "hfoDdy3LEDeNqDsbStGW42qXtS1LvhR9VcUs3C4RidkKDvq4VpnhWKyBNnk15WK1AJUTPAx5T2Wq47Wsqtg52og",
  "key35": "4wV1oH6P7PE5TBC21LPTkNbpzLj6Pet7qxMDBuS2fhx6UBWzQwXnDqGVq3oSvRfkCDjdqZufpRYTWPn3Y38QwW4T",
  "key36": "528qeX12KTEJGu2TkmnM4EX5zmDLxVEDTkVCYoqv39wGFpBMQcw37y8YJq1YZ4fXz2mAyYSKov48THiK3vcDuLo4",
  "key37": "437ydbe7mspHG5vcP5SD6SYdLChp8udZ2Lt5CPHejUBGxfqwAdFRSyeGkvQKaG21gSUAKtEskYCxtY5vs6BHaq6b",
  "key38": "66VJoRx2wU8jYz362RMVUQj7RBgsxcWeZ3mgCka8HNyPyeNpHxKuyjzhCaXCFZHRa1WAMwE9r9bwnt3192Gbde84"
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

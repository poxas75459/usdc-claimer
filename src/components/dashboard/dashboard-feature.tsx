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
    "41HyJ2g5C62RDSNYepNrptSwnEPtwdN7wLJTrMAiwyw1y4F2JDAiG4wDmYXnc2n37xjxPHNAjmNoR6vzLsb9pfAh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ST293zQg1jpXatR8pA2M9GDdvpuBjYduSjZ4Q3CdX6Gvsmmj2Rwqui32kznDwH2Kh8r9se5eDiELypRehYskkDb",
  "key1": "7xxAe15nNNuxwVkGibjJmbLzAoYTpXoWfR4chUv9y9qTQiAXPJvvU8RokUn1y363mg4ZSYbArJtx1A3vhZHC3YG",
  "key2": "2e3oQbn7u36DNwSFdUwmM1nHRrPtUkJLYWjFw3TwhNrtp6BPSV6zMsmqg1yTjdxQj2YiZfbWGKdYHLgRJJ58DwGZ",
  "key3": "2Rug546LmQ5AjD4kkpfpYAjxZ3krbw8DuN4Pcd8M9ZeHQ4uxLFAmK4srSzj3fXVLppREKpdsstY3b5swvWJCt8Fs",
  "key4": "3BkquVvV9gpYxhaLCtDWz5YubV6dMUgThsk1GpC75nRtEAkopxEx8M3KMmKiMVryWrCU48kvWjqn3hg6F25bZ7Vb",
  "key5": "4htpuqVstAeHKpKaA68KDMAFdYA7eqB8WSE3HyJ2NcKjBGNqmWyDRVzPVCiMq3NwTsZfDNwHeFbAeLR1wGSM1iJZ",
  "key6": "JsbzwM15CC6j4SsPKjhsgUs4JwiEMGaFRAq7AxRZqN8n2GfwjdqkNGxwd2q48dsZzP11LcepJuUenbDMxg5JghP",
  "key7": "iJSqMkyFU174mQCspJMJCCg2a1wvj75kGtA7s6GfGQTHDNdt8wQ45E5c2Gfdf2w6TiwEzNtKdvGQLUjuTB6sDYi",
  "key8": "2hDuwLuFAFGwhqS8K87XzDxPaPyBMQrYV3Jb7kAjDsVNucnh6pSyQdimKsPYeyanjdrzEnDa85DiwKxFYJhhBE1E",
  "key9": "2Yj16rntfmajJnfRB51DZJsT6ikJe8Fb3Z1Vp1uXKFHz6wMXLuHKQjFzfn4WtKJse33pRKfPDRx5LU5xnXFk9pUZ",
  "key10": "4ynQBjVQCNkAtS6JxJ5CS8PAzzZiMKeBnn6wKMJZNL5bzbnUgKY8qwcCd6Rqy7eitYkB5gu1xMcMp8H9WmbiS293",
  "key11": "3qi1shvHBjxdg5SDD1kBVNbMiYHb9k6kiHVdLvHyhieX2hdg5Wj3EQNeJAYVnh7A3eVvVg8LsK5dJKUP7sFuPrEL",
  "key12": "2DRPEK97bj5B2RtF8gLogBQid7cELkKsvsyxVbCMMyQQiq2m69K8BvLDh8a6r75MJq1s6gi52ndy55bVGMQsnxbz",
  "key13": "5rWDYGhCe2fd3a9FShbTJhSZ6uQfPGF63zUNN9Af8MRAW6m7ekJEffBZ4L8mot2Dju8xfnWy7sxXtkFrJfApZoFN",
  "key14": "5mm6GgfqDFR5YRdjoUrHZ4a1diUbs4tsfn31hYcvzSR7rXwAz9eqUJCwfcDp9GJw2KZHWBULUKbvL5H8GSsTeZKD",
  "key15": "4YKpV34Y2RHYP7u8PvtFD4prcARrzdJtHvo5XACz2uLLmmvJqSdfDAkt9J2WRHtaXko3xAgR5wTyGWnbGSbVgGFB",
  "key16": "2ngfYcXFRiGU8GXSxvkDTnbWkjKZQe71E9bED1DfMy8LFyVYkXSNouevq29YtBTBCqXFtwUKAsp64q3BcD8oo8T9",
  "key17": "3uBaNZUAxATH6Njq7Rf3GmPCk3VxGLirj4ffbKenh9fxPkdqcskmFJJGLcnjYRU1Fcg3bqgAjtX3TJtoRMUKJeno",
  "key18": "2jeaT9krDvqvtUxkSqHKP3CmeSqggV6Z9HL3bXMUsWLk1AXwmCePLWMrXZj2cueX8huDWZpazNp23UjasZp6aPdq",
  "key19": "2YV4FHGuuc1Pdkd4HuJGYCB2VnFhR4MhxriVFN1VfAtGnQ57ZckuUivi2yLhMEL8wuaxxmccyf89wrZZ8rbDNEBm",
  "key20": "2oxPQdf4qekm9GKLfAhewbjB3fJmoXeaK7Y4HuJ9bSW2NVCbR5V1ogzvH5pkXLiWbGchkURYMv4RgV2KV5WNeuLM",
  "key21": "NhTVK9dyT4RZiW8iSwSeAmnN5sceWGt6mDvgXk1WaWEP5vSenjTMaQZeHhZZxAaNHJt4nzoPZyHVbwXskzPqu7h",
  "key22": "33Uor4MZechbvz5PbzY4FW7ZD6KAXBVHRyfHDXMhk9VGZcfuyZW6i3vMpKZNVH7TDxGWwEHbchMzCLkpL14qj6uo",
  "key23": "D5q7ii7kdoFkraoWpv7ibFgyNE9MfdzPMJkQWXdDfSB9jSSwdNVt42LUwpzvguehAzusP74sPukeVtL4Ns6SvPq",
  "key24": "4ee1czUUZPu3BCJUsUFizgVSGXwuvYzLvsoCQedwMf8UeUNPEaKWCfk1QoGKjAzEZzyqLan1NAdvhhUQ1HmVtpH6",
  "key25": "4Q9SnLSNtnbTF5xjjpLEubuN73jRL1kfinmcrE7dg2tNKZeorMYbhAc8fWtQkek5YULvyvZkc5i8BUP4WYehfeny",
  "key26": "5feVRHrEQhktsWtfRY5hQsTRpkRRLt1JoeNBGE8Jm9wHfTXRAhofHSB2nLcTd3Fc2LKoH3LfFYZk8z9beLqH91Sc",
  "key27": "39Q4eAaNYQZ5RpnvgiXYuLaU7TCFJnf9XbmrZHf33dR75hgcMZbSVWCLS1rCK6PHzWBPd9HUfuJHpKV1tvBo6hR6",
  "key28": "2A5ka5AJreMnSyb4N2M7BZeri7P8HPn8GHUMDDTr4YSyCT9n8hwJSzEMNhTivT3Juh8yA8aLYpep4T21dBzWKNGn",
  "key29": "EXBwXLrH42mymwzDeqJh6MU2TEUQQVLzW9XLvaJLhHv2es178sPq97pg95rmnureuTiLzmMErjhPtRDZ8fSESr1",
  "key30": "3223vyHiPNssam5ipvxVNNZo7wWHHyHixeDYJPPkfUZVi4yNrw3BnMEbti1TdpJNyxMck2X69yXPQ1Z3XsQ1nwss",
  "key31": "61ukmUDPx1qwtZNYaXxUiPYwwF5y1er5842KBNze2jPyxVLoCQ55tjPtvuPEbed9LKyrbtevDfCtHmKxipHbTKFG",
  "key32": "3eDXfYyN8dAixnEA8j14H5Rnb31riwU2VmwYr23DPsNwwJnS3QEeExHJNCd88R39TaGd4xXhYxjoZWZmy4v3bt4q",
  "key33": "4REPNureKtkzWEvAJFN4XFe2NsuwRbzvUyqRFA2Tmugkt8yybrVTp9UqFa6LSNY65xw2JhUrmei9w1BmpVwr9z13",
  "key34": "2Sh89MV9MDqrGGTghrwUXAnnBFDj9Y9NThEUd9P7kwNuLv8Pt7zvj5DQq3Z1JExE1H2KQo7f9B6zhpzsEr1TRoFo",
  "key35": "4yv7kVQUHayF51p5sjGbXtbsknpYMvFtaDKyAa3eG5WnS4GrDFFpvbWuLPP5LLa1NQWiUejCRkq796UUn9wF3Sky",
  "key36": "4LCn4mautxLyE4XSBHoZs79ub6vAenmkpMdUSu8qxorZEtfNUz8wwfV7vZBCcEodGPqNZ2jYSMWNea6wnsXCTkiN",
  "key37": "32CYmwcmsKM39Y81KwqwtKmF7efDT6FspjqUYsvyKdfoVYvX8dXRaD4914meCtmvANwku8ygUt8pb5xkQ3PLLgu2",
  "key38": "3XuWjiewFDnSxw97rPxxQd3hKYXpx5TVwv9AhaU5J9WBF4iXG1CCMcV882kURn4dQzq8tkFJfJm8cu2wAHGsTfi3",
  "key39": "54tc1V8hAZtZKnZqUw66jCPLmxTgfXmsGT1JxxHYXBCnN9vMCELzZbLjJLGJUQ81qAW3k2wcbqjCTibDqE5qbx5s",
  "key40": "91KHhamkxtpBGaZzEKFg1WFVSc6E71y9yyptg3NLBABUbv8DJRmZGoup1YS8cmXLA8jjvKxzaMkRY4fT4sW8or6",
  "key41": "2tGezziPBG9KrhbwQixR2Wis1wvKX7hWaM2CvoQUjbaXE1JCWcUKLDkYfLvHpkV8fxAum4esJ6Q7FtmyM1RzXUwY",
  "key42": "5gdLcVaecC12ApFMac2Qoi4eoSaEvzCc5LvxjbVonMbmLQubrxYmtSeyjQyHT36ZFQHjR74PNi54wmCVLL8MEW28",
  "key43": "4axinKKua99mUNdA48VcnDvawpTFJCLkXzCwjDvY2vy7obNgxRTL3gSNt6yG1SB63jdaFeVAe7S6vzoeqZDqqect",
  "key44": "4Nd2WeZ2DLfydeBwgpNJMtk8cZHa8w6XnDv6M7N9wUshwyBZ2ecu7ZWSNYLZhMJdiEYAXHrNpXQGpJ85FHSxZNz",
  "key45": "5VukpyVDKLGtN9mtGFMQDseZKxq3Cyhdq4MAamZzRpSdbG6UW9p72UgAYrrBx8VghhuZqLsU7c4dXAHGEwtGZWJ5",
  "key46": "4wi7Lekyc74VqKbvCmLtmfV8TMYAhAaJqq58VnaXiq6W5X9b9xVUS1xk9ZaKN9YvKpYh1ncbgAJvb2Q6JXQRomA8",
  "key47": "4PZBv32ZhpRj9yqYZs93nBHgFiDDYXKVsoefxzK4ze5dGVB5mdWPV6kZAksbQ8xsNxaSSUW9WsHqjx5QqLVp43fN"
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

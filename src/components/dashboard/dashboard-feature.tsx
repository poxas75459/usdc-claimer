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
    "3yN23is5dW9zhVrEz6F8qCPXBLDpY1fC5xenxg7t9wFiQfWf7wKpyknTJH5axfUGEZbJ7adWpTm2vvzjrJJSWvZG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ddKhxcQQ5Z3PVzhXBJHtovkYURnW3FAGLCkfWDJY9ddvsC4vjUdfbdipKGBBCdaTtTddbMfw51DKy1Nx59rjohC",
  "key1": "2dT6MyM8yHwbYBPnBVdXqcuAYXXV9vE4NFQ4nEs9wGXhoEAhku5re1uazJ1LgU718Vrb2wQHyEHtvN757XTkxDST",
  "key2": "3UGpTAPeuuP5XcnbdpcQnQLM4XaCSK8F3xu1mQFgoLmGP1QY8yKGMc7NHT6HRRaomU8dNxyK3AHRtNwzig6axu3v",
  "key3": "ukWe22vGivEbC5TA8Eiy4FeqcZj9apW4pE82sMWQHrijebE92A7pm2FmtDG7CsHfxvbNptgL2waNpUYcheiCRob",
  "key4": "5cAbK3GbmnXsytFoj3FyeGEKQsuv83irGVA1TsnCmwgND9ZPs3tQWtYitHe7vpM18rAnnLWEMeib2NcKV1rEq7gi",
  "key5": "3iNaFYi9PDssN4emixZLkZhLySaMXmQXMrmLfq7Gk1DabPSRiGSDKhBQDvVe6QY1JxkeC5XmcgSUXH8Cp3T3WMgt",
  "key6": "4ziVQqLVZbtcDP9Cy9cxJ29yMBkofk8iCyvkcoSDs7s1i8yNgeHLycrYYdpkAh8sGb3ttqikZ5xn3sXDLeHbV3hH",
  "key7": "3Biunf4fzkJhcj8Rvnt2L5uMVNPEGcTUdyT1LuuwHyYhr9zBPDJy2mEWhUu4WpTPPWF7dWDwrE7K4vGqca8ykWY",
  "key8": "71ZdkVaodJvsEHhiiQoke1gAWndLi4fxJFQTYaJUDj8XESBfC776k2ZTziLJwyuCm5ZwyQfD8RYWLQBz2tT6jDw",
  "key9": "2fa6XrW85hFuNaXb5dKLTftEkZDFwHLu5jLPYFMi1Vna4HmBsSeM7tbgjBqN9Dk4GvbSGfRtA23v9r6CpoKBaw2V",
  "key10": "46PSnSD4YjcXKXqeo6eAjdUumKY9Tz6WjdLMQWkKLG7mPZ2QgHiNXdjwcpVEFpCUMnJA2ArY9TRJxjKHkfERaV2t",
  "key11": "9czDWUvUxNzi1EPL5UsXZ3Xy5BpT1ARYieR2SXVVZeN7Cni4pHDUb5r32irsqxUdJwqrYFbxdRX1hJVYSA4eGA2",
  "key12": "4ogNrRrByux3pUSFE3af9R1YFqVDjWmEgNFyz9pAs8tqcWKApZN1zEcfxH5fyqcYmmCH4AxrfBjMYqusMk5WGU69",
  "key13": "3PbzHPVtrMbBTxoVkV1GBZ8psdW5FMKnRhbmgPboeaCicK8323wUK7C3XTmsF6etaynjGj9Z3hRb6mVMZB8R8vng",
  "key14": "2AUvJ3gPD1YFM8e2ba3UjGnXNW1LE2TxrU4QBr7jtfmYiMEJNJVaNd2aYPxKYNgYafJCDA9RufrVSmyiz1VsirCL",
  "key15": "3XuAigdDWdWFeKzDErYsxT3RDw7PpvA7yLLCinkLqUsJTAPQUT1f8AX3HM5tJ4xTVr648MxEa24dzrbgCVhE32Jj",
  "key16": "4QTNKB6NA656QUpvCSATFuEW4ojQamooaCZU2CTsAd3wZgFUdamdMhFzQpwyN1pT4BAKu23MBut4Gid8h16wo54S",
  "key17": "4TA6bZsb5sHqCWUvUPFhuiHu4CxMuteLWtNdTPN87JaebFWtaerm2WvMcLzfq5dxa5hvnXw9bNAHyEb7aeimfrk6",
  "key18": "5HNtoVufn62PxkELMiT4ShUfSmgDeXP2wRRdrso7YhDEsRmDmYgNeiAPHkvefhpSHu6RNL74Vxuo9DCr48t7TZqN",
  "key19": "64m61h9fdApCYnBsR8g8uZJwK2v4qXxAtiwdpuUcNwsRcMLxJvaNvRw4JejeSFxTrc4qDKeCdv2tJHUA2sr78zrW",
  "key20": "39gqbogQyp5TygSzXqXLDFK1m8fGmtbnEMPHQpLfenbaYYeZVG9f5MiABUc6NDxdH3raHb2KvMErS6rKDFbhxwjD",
  "key21": "4ZENrUjzzWw1CqobARBLK6jtsyfW1N2UpvehWQmAPjakQJRyhPpPsbxmssJoXCj99HpVEbSSFyozpaeok4z1NRu5",
  "key22": "2gUSuw3khNy833yfrcnYV2pJMRwwNkoZA9PDt5EtWqCW5sDvWxtJmsEXQViJ1UNx7Y6fzcBJ198xsZyJ4zRZwdZo",
  "key23": "3UkLqi7R7oPC9Gfx4JM7qCY499YkjpbBvwBMNMxP5c9uDpD3nBssdoQzmdVVKCZHWD95DWrQHsmHJgtqETdJy33u",
  "key24": "ZoKpSzzA1uXCPTB7ixRrFpX7rvSmvqmAj4r1X5HTB8TvCJ6MX7zDsgffM43zdhuceGJ2DK1Bb9sqDNJ5MYv9mP7",
  "key25": "2S9WQ3Bq1SysbzLvPyoLaX5E8mrRjomQHpHf1cTmRoqnXqNRVtQCmHMoW7Z3BeWo93MAM6ACf64V7DTbvbGHweQM",
  "key26": "5nw5x35q7CX6U1VGjBRJyM5hNgnzU6GJKJf9ahDcuNwoGcWqQc1DAKPohbinaEWjCJygYoqmNU1dQt3BNiCcy7XW",
  "key27": "GV1k8zD1Ee4UZ2hC3n3saqDHwbvfygnqCtfpjs5U7cYDXDfmCLP2Sri9t2vfTNUgrP2zwyPca2Tw6vkhWNtHrJQ",
  "key28": "4cpWh2vGqRQU4xdRnvVfNdabd9oRadfnmE3Spwaqf2WKZjQBeEE9Ktfnh9UwzDo4YyqSSGrazpNk8FBjxTP3CTZM",
  "key29": "3qnDvUXDTuEzbcoWAkW3ECdaeewgTVV9Ga9vqPuARQYxTdek5JdoWUHhGHUs9uiS6vCo2TmpYouMpcBdFs4KWVuD",
  "key30": "277suTys6Q9edwWsoqu5Pm4DShWmuApMAXLoDnAaD1rZqiD2w4KiWC48uxXx9j4DQDQ8VeMv21B4gmbtrVaom8Tu",
  "key31": "fAU4wiDsHtGX8n3NqwV2z4yjRJAevogGYusB7dWqYb28E8WAunt6w2N3PEK5nAmfXvhtBs3cBG6qfLmcY4wXW6T",
  "key32": "4KkPwgYbgvyriMms1KAwJ4V77B2sybUfggWLK2yws6Arkw3G8JWn1CEp5up6jJLryqPaNveYFn1iVu2rPLd6oCUc",
  "key33": "5Ks1fJ8dwqRPKiEPDGM2JJp2Wff4T4U9vCSVfppaJPdjbsSkLKorB3Xk1zrve31VDTV8wauJQ3wSFyoJPjVSiQVt",
  "key34": "5iCJ8ostnp6hh1zdamH7aPUiKbQXXD29yyUMwW3FCHC7KxohQBn7qoPGiWJcLayeRLu2PD9W2VMPCCifAo8F2oZp",
  "key35": "4A6xvEPU47ZEisThPJ2MHtKKR1GqFQmSPof3RUxW91PxTsmbmpTEP6bYcQaWLJq6bFedaU3vG8a5TEWc8Yz2z2n7",
  "key36": "3ePRtRgp3RH2ab3ya3Uaqx3y9YfioY16UkK7t7jugR4BPMTZW7q4QHkqsgKfhzQFJDUe9c5XfFdESqp12FbbUWbb",
  "key37": "5PCXLED8QqjsgNnjtw9jfbh3nw63qRBuDudgbGZ6iR5221sheaiBh7Hk12fuQFSt6i5mgGdJNA2jEdksL2L1a4fp",
  "key38": "4rc7Y3uWJcp83vyrCJzjPUGYqFUS2BisSMLqLxTcPtiZJSu3h1prmSJwBiJuQQxBqVjKmpne8RX98akoNXd8gfPF",
  "key39": "52Lx4csmZsHcyuv5Wo8G9oU6FBxzn9g173JYQzVjkMNAandfNzGRFsMQfMzu1RWXxBnRrf6AWFXLWv5XzL3YPU3o",
  "key40": "4veHkkLCamRPhAX9Wa7pGDXPztFUDZNPpuDpLY4GVMbKXTuhR1bZv71eHcgygujobXZHkSxkZDaHfA8WvZjPkTEk",
  "key41": "3tyQu7XAFnPhCh4gTfNvmSnGVDqLCnuouNxBT3E7LuKJn4uCyppSXFzHNVuuSeNQcYgAXWu22kyE3r9M42PrAyAA",
  "key42": "oyYqAQ82oz817QQ8pXb2pRXBFT6QvPEHpRS5VRxsT1AZDHCVYGkk1Gs8Cs3KPiJ4cCPR9sV9GdpBW94d3yfge8E",
  "key43": "54Qin34YfLW163FzqgqzVyAX1EpNFxZu9EgAbACQpRRVjpinXk3fojYfLUT5hNmprjzGFMYabg6cTSZYcNr2jAfs",
  "key44": "4A9XdD4xgs5xdi179pajwejke5VEtRpBySieTZtQZUMKgHax3KAxKfc34BSGWZvmVtv6QP3yZczjuLmnJh41m8gy",
  "key45": "61x2ST6m8TmQwzVGUgESJbvAUPaVGNUnq1PML6ujYQR8FwZ6deJZGayZu5jGopdNBbsJuWuKTNEB4eWfKzzx8cwG",
  "key46": "5LBGahGvU5GF5mfnd6ZSY3EVuFRDRLKT6D1CMhsKQenGUvyCaPxSb1dgUa7TJuBLEiMxYnCrAEMpYTT9vbzxFxAU"
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

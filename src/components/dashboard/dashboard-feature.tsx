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
    "4qdniEvmU6TPSRRhc5daRoUjzfStiR4CgmFNmwh2MZGA1Mmf1zhZiHTrJKfagaCttZ4QCEmBuEqmyjx6Z5rc1zxA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ApUAikRJLzgTkkDo5dVEq78gcBoiCycxnrv7Kr64xcBGRvejk7gBj4kX3qkKATNHtufE33TgCfKHwUqX7XdZ97h",
  "key1": "4jZxTxrVwYMQgJqkTE5JdDk2pAA1riVx4bquhnZ5geDRLCmTnqaF3nwULZDvFMo2orpybGX15s3u3NSWi6Dngwdz",
  "key2": "2KjmvK3wbQgXKoY1xwGBhVWintzwb89M2u33XaLctztGhUkGCy5mhMrJumcrNTx1pkxC7jacLNaRhkPyYZYgsTJ1",
  "key3": "2ssqrG43foZZBGgvyk73RhG9xe4VrWSYUJAHvfPCZ2VUnthDsD96uqVvCScQMnn5M4TLQBvHdAYJGaPeysg6F143",
  "key4": "2QdsUKMTynskvJL2jMvTVZNQ98aWyLkMG7w9kex8rLYpknTyGab1Sevi5hcp86Wkz7WDz4gLhZ6LYSe9Dy5Btuiq",
  "key5": "4FJLbP5qj2iiS3ybTy5VbudoHxUkGZeGN6CR6hxuoCi6gy5ob4d8c4V9avzSjFxzsCkRzy9wUWtd17GBBzt7o3z9",
  "key6": "uFagGjuCrdCPrHpJWBWvjCRCyVoJMPSDEouCXEjU7qqedT6f4Q8ZsnDXNYvQWGx7zt9eBjRDomJhakiyFUT5Kv5",
  "key7": "4ChbY4PQ6fuqBuQqf6du2eMpifCBSViedymrpfth9nC1RFsoTjrrHeVwLb4Li7mwT55biWo51QK11kFjQDaUbYCP",
  "key8": "4u6GhZ6HHSKXofFJBAF38pZqebTxe877AgD7Ng3kvwhSnVqWrch2vtrv6FtQEEkrFFYgypgY2WgbrE8L3SLDsxkS",
  "key9": "49Hw67z518s7wQssGTv9duHwhfqrC91pP8cMJTdf3bYjrHj5Ka8dfsUs8p7g4SxwpoqcXk7E8gnq2p43qfekzJTK",
  "key10": "3pX1wWG48H8WCDuWvkM4RLfXEqP13TDgzKHkC5MGFz82Z7eiKgDphoPwkGLfzm5FupqzaWNP9FHzFTR1S4PNDGrh",
  "key11": "4P4nYWywJ8u8tsLRqCExK2iGeA6M7zUVbjV7coo5Stshi4uMhTXhcCqTfj1xYGmR8hWVEcBCs4ULmSBBoFSy58Gh",
  "key12": "2i5VeKPo1jq8LEbbeaXiNRd1EM2Upjb3tEPuPHj7kWvtTfTMtxk3kMA3qoPnnSLNYYSffi4zPHb2Rrtb5HSnhHd4",
  "key13": "5StrmJ6mahRkEXCfo8iSAWDog4zRAmqkE74QqoJGJFkKWVeBSaDp17u59NfX9gm7ZLpRWpMurN8dRPYtdr2GEFyx",
  "key14": "4HjUHwDLaVPANrwm8icDtQYz2VPmUvY54hjoeBKWeqpayu8FbRCV8giL45CMgfbUPXueuE2pmofYpJv6jRWttRF7",
  "key15": "b5BLaTcgwK6aaVafMGPVj5civzBNqYDDEgs8c8DxoGkp6WqnFPzyF5HscAC182wmnjMvc55y7CYJxjS9NrZW83Q",
  "key16": "Vih4pJmpcPynDU2KYNiC6gRLP1WNHoF3LP9VmqZMku2wAUnPxqE8HHAu8HqRxx1ukHZPHeg8AwXbxxheuH4VfoP",
  "key17": "E1wRpGP8A52QTHNNwwa6vUbWCnQZjGKRgPe3NRr7BRzbWNLjGko7Mysy15osht9P7KAbHihvnrRUQWhrXeSgasW",
  "key18": "62oajrP3GMH78RDrYtbtvBmEjT361Tf2iBMPHnDqtPMYbntC1wVaKfr8woiYf5A4CXWWpWRNBJgpZdh81tgpUYDW",
  "key19": "2ySF7P1HbQePzcjA3AFWWLJLvNPWmddHTqg8H21wTjctyPvXed4ijtRy2egjj62VyvLfqMdvPUSSazupbvA4dg9C",
  "key20": "iYyDoBv5sJGnVzNdKtEQzkQrtRZVkaxZx17RU3aAp2cVApGq9MNFdp3N5N9Ugq41XN3PmhKZ9SdZSbXiCTekpXb",
  "key21": "2iKuzunWwcdHPo8ga5SBNxvwDQucVnzBZA77LvaHMowf1S9VE36iLvGmmVZ9F8oqM1yWqcHfyGhiCgwkJTM9PTi6",
  "key22": "3YAhRkWwT4gXdn6DmoCn3y3xCTEFQvuYMadoeqDK8vdvJ8o4R2jQEXKkDtD6PAQMuNXw2u1jgJF6senmtJ1b2JM5",
  "key23": "5zN6GxN7oCv4xMa8Lt9B8m2GPDQXxc4MHgzR3Buhv3B7n6ZrAjhEe7umW8yajWFtwJrQcezQnxWH6AyPmpynSyb9",
  "key24": "5mjtjQYDvCkPz2T3SaCxCNSoZp84PWYRGRoHjCFaP1uEExnbQbvnuNNbaR9kWmoEXNermaznngHCwUHQ6crhUnCe",
  "key25": "5JrxpPzq4okCvkRcCX68XEFTepiWrNkKLx6dQMkYcv9M56vDRJ7hxtitefi2LvP8nGmopXBRLpLadYxM22xUmRWm",
  "key26": "3qTyGsBeC66HVstZ5BfdfhxE58yUA9rYqQGC3RvAgT1y2zq2HHGdW2moZeBCi7cjUqSFLgNqF7gCii4oRKmzWybv",
  "key27": "5wR6W3ZJfPHUytRyRs8ZxSQkMX9YSDMirQyBhK55oYF1mNUi1MDd6gqUShA7oZydJkamuN62EMGoyfnKiGw232Mz",
  "key28": "4n173uz6qJ3xUzadWQi31FrbEqhGDtuzsRyb7b5yWiLheTkgh36vjDAp55yzrnarpdeGtLzZsEhAgNg837mtbr5s",
  "key29": "56bVXgJiXbBvkidEoQQyjZuk9y5Sv6xKQviS2DYSjsEyedp8CJ3oKqevtRDjrHu6CZwUNz2YBdanBgAHC2yQDynw",
  "key30": "4KPvGVtkyaqVFGY3Ccxkzfb6n3RdbbdqcKoWMCYbz5XtnzEU9UiiktgBoywpbWR4LSqW21y6tQt3GkKJCLRkrk8d",
  "key31": "5uZsTeMzWNGjMqb2nNxXmjkMfpS2ePrXvC4VTrZi2MPNSFkd92B3xPiN68TvA5ndaiqoAhgFFnN1YEqzbTLMxXbW",
  "key32": "3Fyjsc9QRdDDUy7wutrkrKByVMEF7zbLLKafnMw1PjyRthNdh85WSCHnBt8DgfCVta2RBacXYjoW2PcXiG3D6aDs",
  "key33": "24EQt94bzAKcoacsYQ9eQuBfjDxVqh2G4TRajzaDA5PpFeFfpyfXJirKYttPjrFUGJoDzjrvYDpMZVasxPiqBooX",
  "key34": "idY59SXAGRZPwUTyizxjJsXHfdEWtkHHY4ypQEcQbG1vnyfDifrJTBBbc9HagkCYt2h6yDcTNfKJdMyhfpvKdyo",
  "key35": "2sLS2HqtDG6LRNo4SBDJo3Wh66nCs2N7whL7xrNNurHe4XxCrXhoJgf4SUKBAxnGF4M1qiAR61iTY3zo6aFNs2T",
  "key36": "5gbWA8mhM7NvyPMq1owzecm1S3Qn8N4c4fFdibmcimQ9SbX2H6UCMXt3QpLysg7XrR92SSgisoo3stsf1SXH8LtN",
  "key37": "kAJApZLJHNSXP5r21fUMuhz3d4nJG1eSG6yqGJyS2ZD814jaPHAnMe6LweSH5Hd1Ts97XrYbb8giZFkjJp9ZZV4",
  "key38": "JTyULZLQDgy2wxV1SnXcWV6qHz4iVT4vimwupYmRSKnjrC1gS2KKRofxkAXaZhoqEeebCJoVkBC8NvhFvFJtAZ7",
  "key39": "5frJJjgRzM7rVhQaQESJjTC6keE2SccG3FoXH5XCbi6HFtsBZXaiWom1VfhvFeNDPqMntxpTDrZXAEg1DgpzuaEe",
  "key40": "4uL52ePyqZU9z9FoNw7hvBT1mT1RLGS7MaH8apErYsrgnG5LiDQDCxkap3zhEh7Sjr1zhikgAgbybs1WoFMdUGie",
  "key41": "2WLVRGoRUr9XMBnjt7Y9i6htmCrSFEks9tJLrXVU2Sn88LTn8GB7xwUf28fLyam5AQeb9nFa5t4SFSaMGs8oAVEA",
  "key42": "5ZYEZqvvq3u71q5gmqXDp5T7nt8qeipVgJyA1k1sixChL8izyuZ4bh4phDzt5ceodwS8d67nVEF6G5X7mbND7HQh",
  "key43": "cLrm1nG41CmKXxnQJqRWN518uN4dXFdocBRXHLuiTuqwu12a3w7PFXeDhiazsFwwBU8ABPfo5nqoiKGivE2xdFL",
  "key44": "3KYdGPdAtF7g52E5BmXVP5FkBqV2S6z2ZhnGuLBsrZy2YkNpq5uuuNyu82iWGWSsVmyrWo7pfnwwNTgfbgRvnJwo",
  "key45": "4nuGTgmnjC3sgo9HaDofTbYjtfiQoDWrVE7PAJhB3wbDWbR5VUXp3GvA2quVLvwQByJo6Awgd8QgaSRKiXfJUKvb",
  "key46": "qNTs4iCSHBHBsAwuwCnfumfxMfwfUASafoqXEF3HyrxG2CnACJcCX5vNbLXpmKjxxWyHY63qCCEB5ct6m6VA2Se"
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

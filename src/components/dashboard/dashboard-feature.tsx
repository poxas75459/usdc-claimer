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
    "24DkHR6MVfa7KrsJM1mcocv3yqtv5qFEJdNYu5bUU1dFBa1C4UAabXAVqheey2Pe3ixARHpwggXyyR59MhzSFVZZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YJNojZdYXW2rEBqhTrtJyZ1Bkdovqczn7Vn5DQZ6M1NKJDtexSajhzyAvCaG72UmuSAUoLbgE7pjYaYt9U6UCoG",
  "key1": "29DEaeA5VsVeFxGX82PAEBqbL4dcHuXSibbnnPPQp3XVqqHmwWsbqrt1a84bWYsYrCkPeX4m6QbofYyeVcgVniFj",
  "key2": "nELhWnrcionadXUycCRk8GFnfmgvF3cFo5Lw6EkoYE2pxnNGsGHHQc9q1BJoUgEyLusbtuTZVRacXTFqVHHzoPT",
  "key3": "23xUG7NJuKBs6KhF6p9vGGBEtUPTEyqMnXpDtG3K9mxSjyxr9VFTDtdw4Dx9iSorr9SYQ57jqGKqKrFV3TRjGmPH",
  "key4": "Z5aMNzBUZZR7nnrSKRgKWErQSRdxHavX734iun2cBQqTVmFTuCoZNGAWpRVNVjXBVbzGs27SJBHKVfmHfZdq5yR",
  "key5": "P6ajXhuThSP1chkAC2PT83hGjoLFubCJbzeGzJJ1tudqxstGYfZYcVmUxjmGAX493BKJcFmP8N56mh1HhrCkxh6",
  "key6": "2kCrXL2CdwRSpTGrxwMDGw77iqGZU3ZsxV98mX7dZPjFKHtfoVZ7WskFARcksAp4HyhaFEVKgW4kpQNHdnyr3T6D",
  "key7": "3nxGQ5aSc6pvVMR2kCzkN3jmo67gxASghTBRKfhLVnnwccnJxisqRUAjd1w7AHS4Ef9nZeK8iMQEChDjGbgMjcJZ",
  "key8": "5odkEtPxn8qLy1KSEEdiGazrYZMrJ7CHtJGGvP97hz6PFAwXL5csvLwmzTNXUHJ9wzAGPoGYFQ4PQ3sHo8jKLbsa",
  "key9": "2LzeKGK9mFEtisLYj5dAYZ5UmATV6X9kis9jPE3uFCKP6qjb12SMd9BY51vFp4x5BTSjnP3azVGibBHy8YTAPPYN",
  "key10": "4T6Gbrbo5M69g8wvxf1BRF2cuAYgiQbtiwGgjugVuYaXWfMghmPkTBtcu5yUbyXCpV7QHhrRk9L8imbNDoJiTeSW",
  "key11": "1WBjud2u72MRjvEcZaUHtjJCfwG87e79fAK3U7UycNMm1vH7xnejQLbPNLauHExyaG1eLxvNaWDtDexyQSddHcf",
  "key12": "AXypMNEU7hSyTEcbpn1bPnzxQ1GRmMS8FGhnqVU8taeqMd3WaQvXbvCxV3dXf2exdg6ECdMmt8Zm44nB1CY5HmV",
  "key13": "4y2x7Wz6V5p84PaQezwFZBs3cL6dZTsFaA9ZVaEdf2LvteT9aYMmnGKuRLhrbwxSd3cezvJw9PYrLGFsiw9iAGYm",
  "key14": "5yc2dvKEJx9vsMKS2MN4yaeAd5tBphpF3uKpUCUeajL3FnFoDuQEbEUAVbVmDASTHEkX8bPmb3X7EkdrDL6EnpwD",
  "key15": "3ugsRwD334xfFi4QcW3m36hK6kizeq2GsPAox1bv5ZEFY25y5pET9rS1SXrVAoARe1n7pKbpUXcg2f4pizVRWgUP",
  "key16": "2tGzHFJToFNDwdFRMyGYUFgS1xZ4y5JNpytNVCHJ3ZunAshFEpbh284QZU2sWda43sSKDzXjo6bbMKjRHuRKzYeR",
  "key17": "4Jyjj86vAiqg3apM3ocyu8FuXn6JQ3TYtZ7ymrPGYsZ8YzwG93YySRgjfMvAVmS9N1cp6gZkGvWGxokjzoTehZtY",
  "key18": "4oy4i9maACB3Ny72r1169xArSyVra2ryE3cZmHAFKBK1x42aS7MebGtLNek2k1W2Q2YqrjdU9iJQswTLny1SJthh",
  "key19": "AobvS2QgHe5Nm29rPTtshQDWq9mveLoq16D5zYB1k92dVQ629HFEXYbBLdqGGAqnrDx1tt889DKcPVdw3ahtSNK",
  "key20": "5oMsN7maDFidvEbUurcJ3jKCN6XgwJRCAowmNc5kLvgvf4Cgo8dqNyAgyzBVBMD8kFje3dyLyUVKvsC85L1F8xGD",
  "key21": "5gNdemg9aM2t6YveNwGtypFBhtgKSBbEKy3BccFgqSkYbLsjpXNkyjr71XqephCvozGRujufHNa9BBzEWHpZJ5Me",
  "key22": "5XtwrzeVGDXozn3rUWUFfcfdt45FYaZCjYvYcqQzF52RJyx8fQYTf3nge8gLG8WX3QHM1XvQRUqYx5EWxYXR35qK",
  "key23": "5YtMZ2ybij8YBpg9oiMrCqa2VeVdruKTDix9RcBoNazJQHJPc1T7LuXkKkmPj46ixeVNTRydQzuRUWhZ9U1ELCNT",
  "key24": "2UFLHGdHZP4FoEvQ66dQfSyaq1o1URCV4s7CCakCxkBbG3a99m1mrkVHGx5G3V1uTa4Q5QhFWFEbgSngfM3mhGi1",
  "key25": "332m3f439n8L4qFPFog9ApS1GWVsdzHYwU7xhNvEY2V3AzLyzvNna7tzDoRWbhkDcy79qXh588VxDuS72JhMouKM",
  "key26": "5XYnSP8xoVjKvRV3VMGnxPkZciHn1NyyLkFrWijc3LHdpE5ozzKfWta2t1MypsQhsReZvqemymaQSF59FcaoTpMv",
  "key27": "5rVC9vuAHyKEkfEe1FPbES1M9DsUsinNBguBYo25j6i3FYcJ8x8eduhKzJHWMi8bY2W5EiZ5Qu5jfZaXnUn1NHsd",
  "key28": "65j8hrG4tUNwpDa6jNWKvcXHWX8d5wnUn4q7ptYNKnzLBW7Fxtp55pQ2yXemLmVKcVCyNEDb65fC1vpzYLGJg2iS",
  "key29": "5PvZMHoA1a7TcT39D7vfureyXUURKnfJ3hH2HuHVUaYqayqoFoumwTJ3T6THCGYZFwKTMHRbscwjT2PisgCjcUro",
  "key30": "4nArTvg8UKA6BvFKK4oZcJ5eKn8tirdDAxigorogb8FSuX33x7m2hMV7LCHkmVehxMvnNqxRGfWJC261auj7pwv7",
  "key31": "24vksiqc9b8werEXK2JNgs9Ms7JAwBDPZ7H9JeqTsf5kbRx71rKaa3RtGJdUNEJAYHpR6PJb5JE7GsRc1upqodCm",
  "key32": "ss5bFMkn9b1HFdFgTmEBBS1W2D1qTJJ2WwAk5qu8FSPGH9vfaFy2WrLGzzJQFWbjVy9w54igSAahohzVYC6t9Nb",
  "key33": "4YJqjwobEhk1BGsK3LZTiFnB5JRts6bFPokeUJD9StmaSEM3kMuPB2xM3XY86PuD69yXY72YyhWicFCAPs8KAKnc",
  "key34": "2HvEja8jH5bDSJGBgYFLSkFLNA3jmVgddaAQqXyCFeSUSnoeUGfYYBgN9hsJ2397KTcC7zUCWViBPrwkK2qsWopu"
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

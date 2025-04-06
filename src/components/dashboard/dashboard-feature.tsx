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
    "52bD129nGB6b8vjU5QvRfAEtkCdsFrqzPYMimxDL7iocHjaJ34mzk5EDJpZmCoxnDxynQX7iYW7DTRa5dh8C3pri"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iz6T34LKehmTdMnU5GgnWvMtzDxuMF62JtuYBdhLw6QdYxECGXzcfbXVPvwz4u8XNkgrZQKnM4GCkpzAroWws6E",
  "key1": "nskSba9FCmVSHrbwoDo9VLGAecGoQTDWfkFPDgxUjdivBVzFQo8UWB41jgX1ywiusUUgorVk8AwE2bVKj75eyW1",
  "key2": "46kMEVSznK1puY6ndtoTUuKdhWtZFyhh5zUghnWUXuRj1UhESEWjje7rVMCnKMXB7LDXDVhikgC4mN972XCmAWTg",
  "key3": "btLEdypA4ujWnjWtutFTRxN3w5ETf6vnaPLbCSYagSKn5556L6j6uApP1rkAeiqHQpf3iRFW88puctAxrR7meD5",
  "key4": "3AnWqNG7PaNkad3fMzVtJC5gJ6may9LEeD4ocgRjQywnXahobm7654DaXqdH34QtLKyHwBG1fKUv9AMaZ4zjuTWp",
  "key5": "3DmL2ZcTssvVPEtH93dWTnkFQb9v4c4N8nmvMSiDumeTihDFaBDfEwwJwFoNoj114wdoQSPqXf4f1rQyzM9k3KxE",
  "key6": "LTJunBYSKu3RPvK2yXxP9DD5GhbepsHcejx67mgLQuKxj75CyJMgqZkocw9APRBVfR9txEn8jnndK5U9yCsaTFo",
  "key7": "5u4ASr9Fcn4AP6FDZEoTynTnxjb4jCNfMcw18RvkoqxXxEBC3nL62Bcr2BCN3ZaoZTbdFbh6hLN5sSMd2oAxRTgZ",
  "key8": "3E33Q5vWhygGtXEq7AspFfHU9NAxYZBKJsFN88CW3TiQvQqq18bRkXWiwEK9ipr7f5MQeJdnz1g2oNarexEUSmAX",
  "key9": "5LdcdiAN6B71xB4YTbA6xXRYv78RPyPXDoSVENKbD5G37pLPFS1cS1owx4DemRomxdPA2fT8bo7DPHCExc4jJvBp",
  "key10": "4CXq3emT3D2ePABDQp7oBLpYRyf5NzEueukavVjUT3Qb7JzThweN2aMdtzEtYBr3RrJES7rNm9xKj94fkSswV1bX",
  "key11": "3Z9cuJKx89nkv3yCr2S2MQckZzm6rLE2nzP66pAS7TgjoSonmVT2FDcsYY1VbnN4bs9uBFU7ke2zwCVQ5Zh3TACU",
  "key12": "3ghfJitL4HfDNYoieutJBP7q5EGxLftpSfWiPS8fyAHERNyJAfWW2gd5jVL6kz4AXnA5tS4PbActKxt1popHABax",
  "key13": "3a5uyMdtmQmZxaCfdHYseXEArh2h244XPnhZy9kgxy8GSm2aQrjpaNc6QwwhnLDiyFXQtAW99ETs6nH7eRAki8f1",
  "key14": "uydXAY3gPfxiRGhSkTdr3LMPvfbCaYj4YeoxXEmsGC8mdD993McHnhmyPSwSB1iyHBWCD5zhUXN3E2MENNCfuLX",
  "key15": "4DzwPoNDn615gNJ5DbEASko6iVwKgtrF1ZpuCVKXVYYSKGmS7gVRxPGD1mgT9yYH8V18n7DuyJx3XzngW1emYpio",
  "key16": "2GQAcvNrMqtDMYpr92KqKNEVjYXD8t3Epinf3Eq9YMLtRiFTfKy1ckNhcurjPKQ58Wd5WjcAuEoou1PgEQbH4gAp",
  "key17": "217SftdfrFApCTabMJ2fsommcNzYsffrhGMfGUfsRnAHWUzKNgkAdxD1dZcNMFvAdqL14hnfNqM1Bjm1A39S6jys",
  "key18": "34BqaV4cVMGCbdP55LsfazCSWvrVkQyHqTLWCyLw8pqoN6frzP2gNtkr3YsA3R9powksTRe4je3Pd2pwV6PgPcQJ",
  "key19": "oFqT2CB4VCNhBoUiV1kczb2Rdb3H7PKjUGpmY1jo9dsvmaDU7XeBXu8578YwusvinMRpnY2VZCQEWZZ1SeM3cAa",
  "key20": "5T6xr3apbvMHfwmVrthqga7mUDqzZNDL4EPeKeGEK9EgDKpPSYZUNjg8ZDUKQLFVQvePLjHkAL5a8DFuwNrj242u",
  "key21": "w9YfSZfU98iNxfoNAHb24tmRzkF2EvCmgYcJqaGepsLt1Pesb7RQihnUW42XYFH889UG88DQQsKDSyUFNKXtWdA",
  "key22": "Bg9azetgkhmtW21BGRtQZuFY7jRAite7BymBDmR5HicEJLtSjJ1CzZQPncen6QsZ8dnVvrHMfXk77JBeEbCidYc",
  "key23": "3HBT8o6QK6gciPLpagndfk6LKM62wtswhgNEQzQPLq5WYGNybDikXTpQJsuMikRu4mjfKMv7kEku31MXxxNUwo7a",
  "key24": "4CuVn7gz6r4uubMPbEKVJycq1btU1G1CXfmK2LBarEDdNCybvt9DDWvXswqBrwnJ2pNqzheD6AWi3tDHZbfuiFcB",
  "key25": "3VNnTQyua3wbv1WL545N2BjA1ErZWfiHUePFPAMsqY7pHxebQGrwhzJYQUNX95vYHLqpx8v7YR8zrVHRhiz6eDin",
  "key26": "g8HzNDn9vFWw5bW2m46YECuuL3Czhk7FwVN7HFYwTkANbvhek6odScKLagTxXd2eG1VqHJLvCe2WehcXSP85yPT",
  "key27": "3vhpddf5i6RmwDvjuwCfcQkRL23nmj8vQP4bCGQEVfTYSC1qxsCfSvgCFXzAYzaMrhbwSAzpz46tPvrQfhFGATjk",
  "key28": "4jRuMvSVFNrxHFNjE2ZwedcAj3ADmjYBwFT5qhHy7PFd3j8pA82cbcB2KG88ju8gDEdYP4kUWNkc8A51HTV5b2MC",
  "key29": "315ziWYCP5DidhoNWrDY4ENuEeTV8Wek9YAdBHFdVuPwAPjtrnYdbUhev142S785Et54M6VR3vdEPJ8NTvL2vc4T"
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

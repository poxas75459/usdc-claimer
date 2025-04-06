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
    "4k4z6KWU1UcgXpNA6rEzAAbdRAkNhEr1B33xBPaqVVTykrzhczUER7DoUVSBuwTtDojL2MwQ2S1X8GVCCcV61DYQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X76u4WzBPcuuE2qqLk2b5qNSvd4n3W7UVJN4vMLk23BTqjBdrS5bPdvrhX1mvKd3X7ah1ohbXw72GoFmaDq29ZN",
  "key1": "2pK7acLbPUJEUmszFJuhC1gN5QnXEv2duCSYHNiJNixXR1BRmUjwa1jewH68e7jTR7qSR4mFXcF7J6Xs7grAesXU",
  "key2": "5kazLGyAUSyGX1H3ozSMsaDCiNrxitwJcH4AfHr9WvUuVbdRKnaYZzk5iuxsuifmgvCN3icpBN4DUqwcwmEvApsD",
  "key3": "23G1jMa6qH56LmmTyHJRMTdWGXHCVahN6px3ED8ctWuCBBYzwK2rK56t2zeeLRKf1ffr5HpYygvZ4cCEvHy4dURe",
  "key4": "2CKmQNyd8xEf4vVKRfziPVmm4QsDbntgczub29qZwq1aJs4J62rjbvPu2eyfgkJtyVcT9vM4yEVuh35bjStsFuys",
  "key5": "4Vj5UH8FthuQX1qvSUwca5KEDRtB5zc3cGuTnGzmHEWhTPB5QHmDyyBiUfHwzxjHShN2y7df4BJvfpdpfoMQ7QY2",
  "key6": "3Kh8BZWXwp3bE7Vpa98dJj2eKs3Ezert5QQ28Ep28pdrBrECu4e28wpU9eneQ1YCoFrjB2pGafaEF52RuWaWQesj",
  "key7": "2mAQC2QpRXMkoaJYui1y7J1mkj9YPFagkSePoGzFqDBApJMcSt3yTrMAKPAZSnUwZv7UCfsMN9GHnJPQ7jgyze8J",
  "key8": "npii7doWibnUYgzFeuQBGpxygdMtSCPAwuAbP2qz1BRMxDxdPYqokagMaHw3d3vnmqzRx8jfHiHjxp1Gb6hxb57",
  "key9": "2BBLkCknLoYg6B9oSWfsPD4eZZRmegnQPkuB46GRiCGCv8sv8XxHf8ZSXB7KbDCt6iV9xWuN54iKRjSb6jmzHbu9",
  "key10": "48ugp5E6nL5T4p5QMygbVLfT12si3Z5Ai3fFfdZRQ3cLwHLG7H2CZcnXSeu2ubCdHgxbVsfX4HZ62xhSBdNyLcDn",
  "key11": "3n1taCZHVqp4Fd8fh3niKcJkDqAYn3mgdvT62fMbRb5khYNmmN6VKP2qXsjrE79tRaYjGpPHFbGJMSQyUZWkD6bp",
  "key12": "398V79vm1X8ZC1AgcUzG4q2Umas16MxE6tdxEPREQpPNnq44WHjQFkmkS7z34zibaWFKkAYWXcfZq9cNHam4YYE5",
  "key13": "4VAaFCjqyka6kGqBrVLEHC59FhWUsutqAQfyD4o19aWPFPZ5zKtdG1pEja46TBA45Q3wkoKctji9oMU8kn7xsB5o",
  "key14": "2ngtYxEjdZJboKQSJWCxuhgwsJ9GyV4SMCnwXqH6mDgCH5EKyC3YPGM7WZxryBPck1VtUtGtLf8K2ho3bmkMSu96",
  "key15": "o8dZWbfoxDqbpiCCcQvgF1rK7FQPZJdZqME6vrzDsdSi8Hwq1bRXN3JV5i33fJJKBtB2FQ7GC3NK8wqUDN2hFua",
  "key16": "3oRdFP9or9aumEDGDhyG24ZX8YTY8c8jy9LPqkA8DWan7cT39TXGzKAcsgYp3fK7RjpWyN9ucZhHTdzcaTuKLbG7",
  "key17": "5puGFkHt3HSP8cCE4FXknLeasT7K4aqykg4KXqobxTSEf1pY1np4P9KupKiMRiRGQxT3o3wyAipJHQ6ftVg9S7gD",
  "key18": "36MzGRmdUxbZcQond5UJtE94WJejgks5ChaCNDggsWXzDbyuEvSBahyos8nUJv9YfJjX4W4RqnBZUXw4F1AWrQbw",
  "key19": "4ViQGfZ3pjA5rykgjKcmcSvfSKYJQbsrAwyz8bpQwVnZeZk3iDNyb328pE3rYPgh8LahuCs4rAtXeniyr9y2hPW2",
  "key20": "2475dqFhYhfg6opjrzSyeFjHD1pRcaWYL6Z71wBVXVuqw9kUahECUffqdRmaS72cDed2rJupzHpu18DxMDR1db1t",
  "key21": "4XxQEhTWYKBpJjHVPrYo5KZEU75kCRLUggUipWPwdtNQRmxEVBCgbZDx6AUctuPfpwErTG9N7WHLrtHisZeNeeBH",
  "key22": "2QexzpRMYb4SmFuzruodrdz9921ea3L2UiQDBT3m4ECJPwUQDahjr7FAqEH74TZJLa2rUWBWmD5TVs33caJTkPUk",
  "key23": "5jStA9iEKnNFNAYmDR6HWhpvLfLh8JQTAAaqdJzux2ygRCFPRZKBuTMGJNFBV7PbwtLeVYm9ATnit4HNRCAcN1BY",
  "key24": "59H9ZpRRYK94JDAMEp6jnfR7eV5zdi1a8JraLLhmuhtSRC4CygqWkoaL8Lf1ED3UarU5E59ZGtQikJWrEGAv2Vb3",
  "key25": "4LgcHjv2yA9p8C2AZ952qwQFkwmhB39sdtcEShDreZPWjvm6pTk68PJTwJfqhToVNsj4jpvAJhBpvhd8a7qEmNXN",
  "key26": "4avE8Fvd3xNwwfSnXKudeQHxiGBipeGwxiSaZs3CXfAVSLNuNyasD7fZHwtG5m5Zac7g2fDRYANf1qpQVEaURiAQ",
  "key27": "5Xs8QsVngBBmSiQyHUtgthzszdDp2URUc8eDQ3igetQHfc3Z8PSPGMAFmRqDerTFhGUWQJuostyTh4LLuxhJnrkN",
  "key28": "3iK1w14H5VDiptARfouCxQyTn7SF4fLPrEoKgueraprxVbZfeRq97MNJFrz3atAYNEs9XNAEKMKPTa3NoZxLbjVz",
  "key29": "2YpmYM5RJRqhpu3dHqn6jqXDkSdxHEGyYgSU9gjAo1VnasvToFnypPWmEpRNfcjQsUiBuTCDU2vzcWyypUP8xpcv",
  "key30": "4ezp3C1GeT71Kmq9vGoYDiJ9h1FgavUksB7AR4akWLpp3LAECvzcMeYrKxuiBaB9Si4nZGMexMjyej7mkUEtgn4f",
  "key31": "5iDFARFfNRjoyRq34Vdfwv1RUczNRkXGFT9odApH74NkZkbB1HrDF915peiV66EUN4LZE1eHwBDXNjd8BQZWqPfU",
  "key32": "5KpFkvn7VzaezTER19p4sgah9rJnHnpurSiS1v9DTtb45zZHLvBHxQqLXFTVEf5gSrSGKtrL7LTxpXuepxJNebTT"
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

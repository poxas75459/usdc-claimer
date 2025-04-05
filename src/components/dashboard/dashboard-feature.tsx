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
    "2vxKgNxbqV725fME8d7cccc1D2RMHCb1ZsXUVHEawU35nPDRMV25Q5cpoSPEYPwm7x1MsCkzA8rFjBp83exesU5K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34ixLfrc9Se3iHZ4LvfHBNLnY4cmWSYBFng79XhHX7TXTCsd4Tt69eWYbWYFVZSHYyoKtnLuyhBTpCXAQ6pXENjc",
  "key1": "ryJ1giRfAeiirJ9NMZ97rceP3VopjFFBBxwMGmTBCMrfg5b3ebwq67G6yKAAG8YBN3VHgJ81kymskAnt8FSjeRM",
  "key2": "5Sgr7zNpzV8sfrRwcrRdCgfa4JhJ3TB4s4SSGUy46GJaQ9xB8RnqRry19KPYTiTZvgqWYzgNV1nYuQx7qaa6PBRC",
  "key3": "3GdfQpYRWnr3aX2oEtfXvXhGTLYE8Lc9FEgTL1fEAdck7fCX9PBsKUUiWH8ZRifdqpAG55xVr7vYppphAAf8ogHq",
  "key4": "MVc24gCKyoiWdz8F5HcJh73C7jjin9mntJdNJhdAQ54d2CgG4vbjAbRDHv4Jn9GU9BcDV8dyyp2bvksGj3K4ypA",
  "key5": "3FYE93fZWcV1CqsX927rRFuVCiYjt8Ek3VuTCkoSUiaxywmUZ4ncot1nEdiPE8pHPrex7i5bRTNTBL3fpdpDznnU",
  "key6": "2ebX5V9H1JggYAW2nEPSsSiybwotE12wuEX1kiKqQgVpPfpEnGpdL46WpUAP1GJ34oZZMi3ZSHP8R6nKdFz54uQh",
  "key7": "5ziGR2kTKH1u61EAANKnQ9kMNXwLLXXyScoQ23P7BfFU9gbfESdLNZgaoM9VXnrNmHkos5NCjrtGPsatGHqUv8Xo",
  "key8": "1ZusurMpxq12GV646o24C47YFqg2jyEekFPMXNuuvF8pSe2qPMh95kFNrWs3d8LvcFK4RSmC5EJiHrA9kPyixcG",
  "key9": "VzTaYNLRmEo2Nf2uqZyQsQsVgjiAQzjDuBrJSEjNQuhVXib5kDLw1JyQgCDKPvg7iSoeS8PcEf5MWyNwY3RPufw",
  "key10": "5VUVxB6aGaAuygyQg7Q3GYw7Mu1uMAVVZi1BpgzA8p3oMKQ3Fh64Tpbos96ALT8ThYg4orvC3wRTyW7GTmSX7RGS",
  "key11": "53ReghgBU2JgNy2SRGmfd9ujRQDWYBy2qM3oSexGz1iZg4aVUCF8otxi6Gz88rdeMUZDA1PNYCnq8r3nkDswTwSc",
  "key12": "5PyGCm1NQEmdDNZwbfNZMQ4p5p74V6wmeTk6e7jbZ8eXf8bMNtV2r7y7BmYhn7ZoUmoFmLXErsbVxgk8RJ4xjR3V",
  "key13": "5JB1dkzkn5ddNbLgAyFQ67HSG9r4e5tjGKrs13AY5XtBw1ZUW1XNFi2mCYMVSFU18xmurrCd6euCRTJEGsfssGzJ",
  "key14": "5WNJyiMNw6cQNSjaPTtXtVdWfZyvRyVEWv4sRyForWWAkLmfvWNwky6nKEqk3aZ8P8pBLitzgE1v6QDbwK2wePcL",
  "key15": "bwiZjyi9rKh6uGR1FPLDQCVJB1s7LQuhQxF38sXSxo9p1hiHY1UDXDuH4GbRnddagb8SGNeJz63qRDWrAjohdaE",
  "key16": "23nEK3NMusphGzNX7xD5HP4oXVdgZWx7GENnWRW1VrUw5pxzpq45tPd5ZMhDVDV1R92EV56XSPUmz6vgJMUCCS2j",
  "key17": "5CVPd7zQLUxLZcTUwVjjaobnFQCQLQsdyXXc1CoT71ShrydDQGGCXAmarKq3XuNUnZtrGbC4K4Vveq4UKvAZgmTF",
  "key18": "48uXmVXRerBbwSUEGvDHfYxWE2kFFiZkJ5AT3UpGqXaBnz9EgrPwUixBiofu2kfja6UtfWZ36JNiLYbmgtaU2eNy",
  "key19": "4tX63zdFGUCPA8gT57gKyPDNnsvSS8Qn3Stmf5YwHo7LJRcyz4WCYA5QuytyAFC7ikT2M9oG9AZBnqXDDBGigEW7",
  "key20": "XfKU2suxMy4o2egDtiwNmF9JouBrsBX2rTZodGsUCxkpCfzcToEf7oTiJJUupXEHuYGfSzduLVhTMooQRr7zRVJ",
  "key21": "5YkWzAHRfkafKwumZJAE2TytreLgsrUrKNcE87w55sJEkb4iGieZYKYFcDHYByrSqKDmELpQo6thUs4gupGfN9ss",
  "key22": "jr3REdGkvuatKkoLkApwsshfkpPwWR6vxnDHiNKhftBUZ6ZTrs2GyrntzcUdnjGUkwT7DKeu4xCfBEwRyV7cD2K",
  "key23": "hykr19N2nbJAXZiVfH5oB2tqiB3GShCdwDzDidYgdGu8npPAx2LJvKTDcA3nMC5tvyJZiuVGD58tSy9p5DVwUeS",
  "key24": "aJWxWPTEJzLaf2moP8BRRNwNucKaKBh13LWPab3Gmb29fdFr2zSvYXceYiWoT5R579bsJGGDmrEk3jynaBZtA9a",
  "key25": "2fMG1Nu2QkHHCDHPBznumXvXoYRvWSFZA84674vAJKBsNSeQtG9VE8g1yc6uG8DeCHCkFNRypgkAV8gq6MvUpVnR",
  "key26": "3v2QxFKoBf7aLzTh9Htmi29fB59PTVgd5YHGZDEgd29xDvct8m4kstxxk8yR6aGDKF69XMEssJkHjKR4rPsiGdu7",
  "key27": "eSQn8nKgKsoHCjZcMSw6yKKMPYMNiPGVEy7xR6Wq5mjiHaQW7HQXDwcDQSFjXjVbxpd9ehMCUhqTRmHatpNM225",
  "key28": "4LzTmiwNA6QXxCBuQidCNjJbtiyY6QUvDat1VDHEug1JB3QFzJurSG1mutfTYgL8ewKkZXCGG9KvSRAdZoBGEWCd",
  "key29": "HSFTyA4kuz6dnz6X8GGraeMu3yaYAj1oVLS61PyQpr6vGtwRmH7aHEL9oh65Nw8TFAbnitxjf7NYqz19e9npK1L",
  "key30": "2ShPrMqfGTC8HjPRoV1rh7wdfomh7Vjp5wuMzfcPJXaaRjdbTYmUYhXofTUWJjSYKrkxuXVemNxP1DYhKGtSk1hC",
  "key31": "668pU42tCebpCmLZViycMJzHULj1hBD4uiU2boxCJFixAaTmpADvuLAxYSYyHpCprUvc5ka5mBhTNfZYKZ5V8KSH",
  "key32": "4t3XC76ZHAYb5sU48QKJVXbVF9H9RK1t3qZDMad3b4rvY3AWAP2FuTuLrFvDtVMPNhP87QAD36RnevTvwzxoTSca",
  "key33": "3Dk2FFSwqP8qckMNNCUs5jZG8pxvVLFSbo45ZrXifQvGzunVyPxxmU3bbnFvfUJypkMPxtn5nNnPUWK86e5B3duS"
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

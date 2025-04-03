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
    "2vVbb6CEAETUNbDYiNweupDdHvc2iKHyqJowybjrnGvft2gghY7ukdkBsVBMVS1dqQXDnXLsy3H28MYostMU2o4V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qrHtKmWS212VfJyr5qTkVxZR2wRjjC7WTPBmb6ZELoR1LYXgKM6urafUnydjQ4FAS8YaQ4NZLAyBSvRqANpi6mv",
  "key1": "2gxac3cCjVLGn6xT28ntVApkaePqgbn2GYpJS7vUUeznonZbRLBHhhBVERX8eV7VYojjZVaepFVWDirAiDTtGLkt",
  "key2": "5uE9EHeT6UFHGbLoSGSe9AYPJz2VMVYLAigfYDcDzvHDGwxtemfHGzNV4tci2sS7EqpfHPj8Hk1EapvoMUAm5cXe",
  "key3": "2KRr34MQi5aPRosd5EzoQwzuaUnd11em9na8PW8KsE3LwYxwK99QDm7YSFTyvrrVQg88GVDa2xkCQj1HhcZQbhSt",
  "key4": "GJqUjWEb1pEy5GaCdx4krXDdp5BwWVgcdNUakFk4yc9KBfdzwysywxgwsoaxsLQ1fekRFHSCSf1aZSa4AEdL1ET",
  "key5": "2moixsTKrKMwwP4ECcx2PSwPBjg3cmk1fV4vpNZDjSJUhAN4RrYgkPkVMchz8Ww7swCQwKcRUAwoRDnNFdsG1Fgd",
  "key6": "3EreuAUZLKLGyZc5AytQQCxpH8tPyMFejTkmn8THGGKxBhj5aLxFyh4kokYxFXK84oHYrBgvC5bDzgGsTZqSjioh",
  "key7": "5Dn7MDkQ61vki2L6pAaWeNXoyZSUosKZ7kYMGrGLcjoN3RQW6Uij9kDV2TEoQE92QTa3XDHecy4pVCECzBmStaKK",
  "key8": "fMgJbnJVLuaqoBz5VDbf5HtEDQgT65DTg4XKSkThxyKx2QEDNSs4Udy2TRKPTJV6TbWJUwkiWUUDjgZRnPe41wY",
  "key9": "5bUvCcapCNCzTittFNHPMXCeHf4zpTrQL3XSLCKaozGD8J4PVX7wUgnMnxocoRKVBVM3bMjqQKMd6YVyk1oEMjzD",
  "key10": "58QsyG595CWXekF24sYZvio63G41H78gmMh7mmopsQaeVRt5Ge6EJFBSSVsNQ3KGiRS53ccWnRtyVBVMH5oaK8g2",
  "key11": "ZGJMjQ96dYQAajuUjye8kceAFdbLHckCgFmsSd8yeYkh3uNBc54Yc6tMmHzbWgq3X6iLRkR4hd6SUgk12nZtW7x",
  "key12": "4LAE24VuCtRmePdAP8hGJ4gNS4cwP6xnRdLzGv8tGV9XAZTcRpPs9PTV9iJLvCCCAzyYrdcQXbz1eT2Du6MhEEDU",
  "key13": "FN8kVLjbAnFbJjK1KCT9xFHfh8P5oBuQo8aL4oojhzkskuainjGzsoT35jCeDwanX7YnijR365faxysPCnW3uX9",
  "key14": "4EDfipcmqBhEjFBVntjHdDvow7RuEbTa8TKHUse6PTmEJZ9axSQ824xKa6f9bfXcWBEM1hPLtjVSHsLiUh3qysWx",
  "key15": "3MJtxt5KUzpYRLicjRCLpSKUbb7y2CbmeSBVPtVWpHJbwzahVBt9vQrSP1Z8PtWsd4UrWJbsVTsoXSC4F9Lb4cV9",
  "key16": "27mmcQLHCfpnZSmgjJwA5zKYAwaZDERQ2NM4qMaxuXAQrdCcu7VsTDs2VRn4RHDLmHx9rxsE53hAkqUZrD5jedZz",
  "key17": "fyJjVfxaW8f81MYe8hZz6V8qsSUadfJFYKHCGJvPgFChNui6BYfHnyEez9Czu9XofgagBaWkttpyLMZaJEE8peY",
  "key18": "qs2y3bzHppsNnvc18HqwAyxjRx1eb25Q4sAa68CyzXf5ptDG2F1xotAsQjkAkuScBdZiBzzbHiqCWF1ZrTLzfjJ",
  "key19": "495TJ8B3o12R77vQye3moaE8QWYapmEDgMCA2orNJRjqDLLgVW3ztMKLydWUHS3uMPi7bPcgfVfUrsuVBw2REPw",
  "key20": "3J9NhDcMqLUTUJrbhtpEgyFCA3Xi5bSBk1EjSKziXbnYdQjuhLyKmUPLAf6GqJaRrvh2nJY8ndLLhcysqpQHwTRr",
  "key21": "3pG2HwDZEECq5KvdGwUsyJLxY5hMawhcJvSYBQz3nmdZKnsCc4cZf3oJqBnzj25DfvtUqurxQb1RUAFHGS9g61hm",
  "key22": "K6YNuP3E6rBHbiQjypYymm99xM57SswjtEZjnrineW94QB5HYdSXwcZYu6jCaYvohX2R2Uo9mK1j4QgxL2iwMW4",
  "key23": "55MmguNhouwoXGfs66G8K2vowbGep7486wSL4sCtdHCuKis4VZ4TjJysTqcAQZSPinBNxL8V4xMjQhjufu3fJno2",
  "key24": "3aTL4ZrfFDW4waCpZg4ZA1X6pxksxxKwMDFjqoZuHM82xUijYEDMqsjj4dB4wZwVuYhmJ1Swaj27edxuq19mNwYQ",
  "key25": "33Tbad77qoAZZPbWrxhwbQVneEATp2PT8mXtQPxrUdCaqEaoqHWWLQyPeSzELsPXqRfPimNEQ5WccY1ig2WKV22V",
  "key26": "QXvSesDQnzbXi4nZuoah5V9pdQ4RhW5Ed1E7VRYeApvdiacyh97vFKVsD4Nx6xcCEJ2CnQtMGGeoWSsozAZ5S9N",
  "key27": "2J92fA36bpoQnAx6yxiazG4q2P57FJsDnCNp8C7EekF1RZ4eB46D9efMEhfbfJpcvxW8xUtFHBawj65PN2Dwz47v",
  "key28": "4xyWRKLiBM2cDhiFouDR9F6kus45iCLHwRHuf2ZhxfWgvtpgq8MUHwFEzvZsm6DzjDKQcf6JFnERNbi5YdwXLMrC",
  "key29": "3Vc9yfYvTMKYYuHbPb9peQLN3egKz1xSMfE3iAiXVdFmNEwiqALuLBok9J9w3oxEuFPWjyMA3EbeYPq3ryvSrVcK",
  "key30": "247QtW9Yu5uo8owDFQqtUC7RwCiitkCsaE93pEMCnSJpF39rVz6a3yMng6WYxB1SzysaCDyHQRPGxAZrqZZNhTX5"
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

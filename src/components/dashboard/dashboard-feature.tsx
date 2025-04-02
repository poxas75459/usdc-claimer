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
    "CF5XsAVhipkot3nFVQ4SdiJPcmdxbCtVcZjPfV2gzuAEvSLCEy5oTMJYViqPgcCkn33R7SB4JGwwHTfPoHXKo7e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NStmA64Ke9DfTDDRvXub6AykxedPvMwiwq6a9TafJC2yvjFc861xJU6FoTTChxsaN5HseWmeiTjjjYKcuP4F26i",
  "key1": "3d1WCFicc4CQxQnQRSMxVFDHg9vWyctdatbRfYbrRC1yKwr88xjMBi7ScF449dxJ5RSurNj5U4QbRASRtnS7LNnF",
  "key2": "2ceb4pr7bt5T6qMMpWWEv8nryGUvTHwB859uX6F3uH3pc8Cg9PFyoaVx8L6R3L9z75bXSauQncy4cdRGKVLcwMrv",
  "key3": "4GtK3WCbUuMc4DqPYmiQjvxKYiFf3rc2gvR9wys3g8sRPMBR65fKNyuvehaujVG6rF37YaV8z8otU2AkGok7pVxf",
  "key4": "2vjPFbwSKKVNNitkzhRBjfK7RxML39sbed7erJshXug7mMTusZJ38exAHXF3rrWhuDcndYJ9tGD4i9FUs8fsGT9d",
  "key5": "yHC9vv7YRoVRDSUGmYqaRsrhtByHLSn9m4NRgGHejio6jHXxwGNqGRJ4nco5Aenvec8DUACxQ4GjVjHu1FNWB2K",
  "key6": "gdzADNxxa3skjFEEHYGdUQXM3rTkx3qQcN3bHGeHw46Ko3NzHXLrbR1cDaYb5cxSxnYpGSekQ7ncfXDaR1k6fKj",
  "key7": "4kbYXKUJEDHkKmgMzsVp8tQN9BeNvSktuKLtpGQe1UPP1eXXuGjVJqv5yJa7xHd9GpRfK6Keady4V4R4XVoCrpzD",
  "key8": "2XTbQMCDGFWSCyvYgDo7cjA3ckzNriDYBUBq9jV5f4yrTJToWAjjCzq1i3voX3zNTsEkkXWPHKqjBtJ2k9w28eWX",
  "key9": "4o49B1SWiBY7tsUhiji9tEdRmWyfgD6v2ExQ87B9mrRUJt5BhzjJXWUoyzbKy1bRPjFPxDxJQB2j6F79XwSg17zm",
  "key10": "4yRtLp5A9fqNCJFS95zmwHLd8cAJwPz5a8ABP4EfnzRna9aeoijNY1opN6Ko3Gm9xkQ4mibi3cG2ahZiAWoL27eC",
  "key11": "2hPuLgopXnXvYZJ3nGVXCCNkt2CLpLK3t8ZVy5aAm4cyt6XabHifxEBCV2gvRtavZv73fq85yETCmniuhGqZZvS9",
  "key12": "49FJb3vdRqYm3ZeoM7gwN3Q7trGn4LDfVsfnLTjY8DwmwmWU4bXoKqhvqFdyMkuY58GT8MkMPfEhu87SH3dwoaGa",
  "key13": "QNdT3ZAEHx91Ph999o26z1zPiCvoDhh7vSXRxgCV4Ce3s9A4w7KvDRombhpfEG6z2Ui6uhFomPemRyP5NSXuVf4",
  "key14": "5vFY1D5HpHJm8yfqqNFae3kqu7UQoY4WwPozrtDd8QHZTYhVFmZGbKJaPTSXyQx1MZXW3KpC8Qo8ZMyYA4ergrf9",
  "key15": "47xrHSeKmiuChtjZF91fAxoMsGBiwHb7Yr8DMhu5R7zZ9pMu1YzjAbYe7nyxkGr1V3ZHNXu2VNFmFe9dUxvg7WVW",
  "key16": "3ZenKCs5Z9rTXvrhFi8gTzxRj3ykg3dCWnvseyx2vT3CgkXjarTndZgx5oCXMphu1ZDsoyRHXhvLPgGyZmMWt5Se",
  "key17": "4zEV4QqKUWA2c1i3aq7phmjEV8xdddAr7DznH6jUGtdFLa3xgWyM3r9NQhDm99WdpGAejJUJR8pZNdavp6y2fANx",
  "key18": "1bQ6xDVaqhBFgU4nkxTLEzd4juVwPK9BE3z3WZvZqKttaT4fgDE2VdoYJ5CEW2UUDjtMzbUsV9GhdJn2fsZxkm4",
  "key19": "2Vnrg1yWSyABmSUYcZGTHRCxtRdv56Gu1w6hTDfmSB5CsBNXLSafRupFwFPDmrNyUUSPVaMHbeRU4QdrqSWLeZdF",
  "key20": "4BJAvCE8bEpTRvjUre3iMj5m4iTotbr3TdzMzMRQ1NHBtP5uYCBJKNfDBeJE8FvBEVFHQy58kCLusWEjiw9JHgkL",
  "key21": "7ki6P27cipekugjCuhLAiAUsTapBdL7xMtnvPZuMinMWsWBjSXLTcNki7rfYFgV1euvSbYKnn7uJuVToERoEcdN",
  "key22": "2G8bQGBMytT3MzHoUpsSmP3JwD9u64pwgTMFB9yCAG4tDAj9BFaMubeGUPvKgzWiKJfVmX5xNPzUngFVKUqMGguR",
  "key23": "5GEMfFRZfDnyr2kReLyPFstQ8NoJ7qrxuWJ9wif134EowucJxwcBteHuXmoEaUfVDouFbspWnNH2eVV6zAa1o6df",
  "key24": "5Q4B8pgUxGZuJzBDzsrUpCmFvoF5727Hpr6kPdURTRVNBPCyrVDfT3V44qK4i6e74Y5WYNJoasUvYpJqEcbTTSYZ",
  "key25": "5yJfuycrwX6jvmf3A9NxACw3KJdxoscDm1NsAdh2j5MHqrN1VN24SUDK2c1jDgg3U1dUvp9Bx1mJiw66EPLkvWCQ",
  "key26": "2MPHZLyn4iKGmAkfJsZ5rtzrRK87T9pZfUZKhz87ZDmuER2prbGXB498AAq6G3deNTwFoWDFmvsSWkbyWNNegP8U",
  "key27": "4wGoPY1DWBep4gwq1NyuKXZi1kwFxRyBFWYxABLZFmAQgq6yRFkx6sCd4uQCynjRRv3sjVor15bH72QfsuEnaq7x",
  "key28": "5aiLXBSEAKTeRn97QrHpeKf5E3kzn6HkgYGTQZmQCWyQMKZuYReeRhV8TR9QLN6ZYv8xtXAopH9JxmDJTZoUv7Zm",
  "key29": "XDhMs1fA12D5ZKaKebJxD4mksa4r4gJZiNtjNtrbcyrb6PtiMnR2xNR7SqAks1RMv64hXTM4rPag6YVSvpyDnCG",
  "key30": "5Fmx7BnQ1kGktriEmX6odxRyyruiEgxNU6jqmSCHyMEx6oJvyozGEN9feoSQECDR1gEd4rx5PEj9v4f99w2k517d",
  "key31": "4Tv9KyW1wdsep7sBpWiymtSeUZfGQP8EichiY5zVJ8z4N3sSCdh2D5ak9hwDFAYMoVRHKMTe1Xbb1GrXc5jpidwd",
  "key32": "rbMp5pEDWH7tQPSDUeGrTZR5oN9TwS6pD8cETiMEWcu7V3MKFKE6V3ESRooaTroZoPwS7foy16YdQXqiv8CBn98",
  "key33": "4ZLEa5hRk4NAW2mWbWuu87Yct35TrLJHztCeRUbzBqq28Vem7o1h12fEABAXBZGh7NchPT6KfAp4xarw9vFSgwRw",
  "key34": "3EAbi7XjT9D1y1ga7HcjvTTP7BfnJc7cfJmcN28TrwqdMK3qWnmGTEcnyKvvtjWoCUCX8ezb9RVVVUrAQFF6cBDS",
  "key35": "3e1hTQ2ySSPYswaZBC8uhhFS8cPdV7PaTTum7Y1CTiZ6Y4gaR17VLrXxcJ77kC3oTmqaCvTVxu5qY4UG4nZGxZxK",
  "key36": "4MzwQNFpjzT8AEEsGooRRtd1BUNg3hXCRKLsci1x5oiH33HFXUSktATW5u1i9VDHd3SjUSby9DsyorN6kPcGnSDT",
  "key37": "4DP8aV7fEPReJNPuVSFdqs4eSCBFWACCXnC4N83sFk6p4wKcjgLDwU9njby7LjeYYg4H7XuxfCxKpYcGud5ePsAU",
  "key38": "4yFNW79hMk9RTscHTcdX3ZeehcqkKQ86J3pzrBVWXZshZBfoL4bHnUW1CfeibeuSyKxXxDjt3kR2e6QsNLPmzYfz",
  "key39": "2vUaPYZPT97Ng63YXJ4vjhLATJ9RG7YDKS6gMHHcF3N7ADBVgfgikeAWkQGH6Z5Fq81kZrQN9kHuTioGL7ohUQvJ",
  "key40": "5JHoDW8CVNQVzPhWdHdX3P84AgdzWmZjjDJNYrL1uaux5vwznKJqW2b8sLhencsFJHBFTRBTdbna5Cn4xNxV4e5G",
  "key41": "59AQew7Si14sL6He1mP76FfsAUFafupi8ocKohWUNdvX9DCQvdjnd7RFam3axaAcvjUsK8N38k37uJgx3NJpmcf6",
  "key42": "4CD92ZnTaX3NRKXJDZMfpafp4SNP6DoZQesEz2WSCRjwhKu834qC5iE1w7nAmpWQygp6gQT6vXjKktvBSbbwzppk",
  "key43": "P6kBq5Qa1XCN8S2J2PDpJS2kT92TnKk6Eydzu8EKUCygk1FFpMbAceSAJ1k83osGEjFdLVVwe7tNnwyAWWKpQdy",
  "key44": "4Hfz2rg6SJGXuuUwyZKe5e8Eddtm8w2pmrADiRQKLBpb7uSawzUCmX99B9tHsrrD1M2q72hQQYq2ETYuUykKYW8n",
  "key45": "519qPSVP46zLfXYZ6YwWPHoePa9RnCsAxmZLZogTvRqrytF4AQozsPzX83FmWMBbkza9uPbuHXADkNTn85vnti6i",
  "key46": "3X1ntgzAvT51esEhwFw4TCxwPVJLzUvZgjN8mMTWFeNcAEL2HJ8Ko4fiAy48sBzdn37riVKHgdcyhsKuZsAoHwyb",
  "key47": "kdxWnjbByqxkg1zKPKVSCzk9bUGbrrRLLmxrLUhisbf947Kutgfo4Zejp26VeRVkAbdozDrEJti6p29nNyw3oyN",
  "key48": "3RkTLeEssG5HRPVGrTKHDbTQ6xmWomK8TZhwzi3JZjdTsfZf6RtfoDDFdQshh3zK2aTznodgdj38k3m3z5VwMWo7"
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

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
    "VqJmeDM6Ph88TG8WUB9HhFDhce4vAJnnPEjvxSj7KqsMggQWMgM124XEJm9KLDRNeDqiMpSCMB4KBtxjvQn1zJU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z952gJPyMVvqnz3ukH8Zs4XNJSge3owevdo1Z5WbzcUALh9uB81e2CiAAkEZ7JcwGjRhDawJRceD9JWn4npFoeM",
  "key1": "535eAtV3G4v2ea3G3f6qi897TGhHifngbijZWT74o5UYWFTA3s9WYgaYcAj6itojuJwd2QrrCGUh9cBnFEFrjT64",
  "key2": "3jNmsHmLmipND1f6i3k9y2TDxJ3L4vtHH8PR7c66pbjmFWQhUutPwZhn2z1d1k8KX29dn87JkNBLzySF9vLgBBkT",
  "key3": "2qW6i1aS7vuq2iN7ce5kgGKbrBpqVBuZiu6KVUE532zzspRmKQvrrdLAu7B6BtShgyAyHsx6WUx1r85ZqjaH1amR",
  "key4": "p7jxsuEKcL4PA42YXwWeG5QLVUxSnp1CDMTxTVsk66mypNNrnKhAYnpAzPzwEMk3CHPusVpJhay6TdHwCqXGM8n",
  "key5": "27qR22nD68c1dJAicwdKaKgXX3Ghmh938QL9EUstjpVZ86s2BiGz4vkV6mSy9JMKuXmAuhYgCgv6TFdxE718fCEg",
  "key6": "4mdgD59J2cupKiVZK6aKpMw9cfGQgDyTfN65LfnqDB8f275RrcrfWrJ1PsSUpwH2JDN199Moq1ZSjCXBL2aVnofC",
  "key7": "36x45szEEksRGpH8EK5y5iJDLGne5K653Tyqca3XvGKZiaA7RjSQsMDwgMjpHdpn6ccbB1sFCYkbRjMLWv2SeLTQ",
  "key8": "2kY4aT3e861zQeUY1SysiDq71VwLhhjUaRKwuw1Y6vTRfaaXvv92qXUFM21Qiyz6eieHyF3atg4vdYH3uzzAisbd",
  "key9": "XsHmfzWrzdM625mLufSjUQUjEncB59cZN8H3g9g9CEpcpEsqC6DiRCo7DQvctdDcM9nNBBgJKoRQSkJf3zcAeA8",
  "key10": "57DeR2rbZqSPcMFoM3kHyCzdKLFbgB1HjjkPo5Z5sUSKiNRVaaV8eCbSA2hTNfUyRYQTu1NRCWPryPH9pW1nfGsH",
  "key11": "4uy57KTKB3yf2TsgEJ2rjxHuwMC9dVtTS5rAjVcSFerTMNJ6ei5cBygS439gvyaEuYnKHsDymUAAEokBuovYCehS",
  "key12": "5tLSAypHhEdgZRdx8yLNQoUNDPLWuUhPNwmqropS4VdQhiYS6PPLUfgpK9R1DfGiraLzfLoCyqfxHtxT5jdTV7Mv",
  "key13": "hK8RQVFzPNPZAhe8BrZyJ9s4tH9YbHbQg65XYR9FfQxSAvXQAouCLqE4jg3CpEEBbTRUw62sXdYsve8XfsJWY6R",
  "key14": "61Vm9JkPcut2ZuJdcSTfhstmgfQDNejx3e3y96BccPXKpwnRh6XjwPAikPsrzf5vqyVZhqMm86MnzeC8A271CU9n",
  "key15": "2hDtNSHymTPxyQzki5V3s9Ge46fNFiJQfhc4FyQr5f84A437hRx9t6JqJHPDgfkVCTfPrdtSQZrYxg5MK3KXzVLu",
  "key16": "jGpCbzPGuqtN28Khr2k6a5g35jrZXN2n7azNRpgT89tRMUh7sBSZWQiweVurQxH9weUGSWrSWRv3Q7Tpij8t6dm",
  "key17": "3te3noz6Lnr1TjwqdgSv4QvXBW243ENpCY1ZGmsprLDxY3xg2rhMaTdLLavSdLTAWxBHqfpHLvtdtVn28LiHQZ4S",
  "key18": "4iGdpRSKTHwXMrKkD58WnfYkF4wP1rD2Udpm2NqgZ4XWaMYETLQb4uckQXzZQ7MvmN71CHdx7hsEBHVa1yqcyiQw",
  "key19": "2xpD95D6mSmRqws7XZAwFd7LncPChQ9C4o5ofNd4GLBQ4AjWWAnn8VXojCztgEakyc4bSvUkVy2SZRAM5dXPK8yf",
  "key20": "2EUs4ZPourguq9aYzYbJVA4XHTZSVwgo3iMZhTwxoDpEDKkuYemTDK2unrrAfcDkuAjyhRT6BWs545FtkvRbaCB6",
  "key21": "3Z7sD9fexBJeFxrMccQdBCz69oyv8q3j41zfwT1MQVhttD67ZCSQdXMEXjrFCc55fvKxA25TZbshzrka7ig4y32t",
  "key22": "nSzKKmMtzyXvdyjBjG44zXPuKATKDmtcnxmdkLg9MMuUjEZgDCPYQKRsc3bhGFrBsD3S7raZv4xWPRn4c539ihm",
  "key23": "2ndjzxhjBWd9mLYG79fyNpYK1h2o6fpJpBd9sPAMnsX55BHffUK1bFnTN5uj4TJbzqP8ZchRVVT2uzvbxubQUhmh",
  "key24": "3bJqVzz6YZHoP5ucUnDBcxf5tyeNqg6bVqjbTh1RPeHAY25EyUkXKkd5PLDMxBGKJuUkSzQ29fTk74DY6NG2BJB1",
  "key25": "2fV9kPyjfHSycDBpqcA2LuB5Euo3aWuavgs4gF5NjAg3bSnPNVGWo1rRMUtv8dzC7qS9FzY9ywqZyBqTvueo3aat",
  "key26": "4gVa1LCcKu2vLSU2qA6dNyr1dMUq2YmuM3d7vUPfHuxdHsytca9j8xXNHxFXAjosvU237ciFMc6vL83TGCzDzX9v",
  "key27": "2ye5PzbyXp8qgjdGrp56WtifRoon2XPq9CVBn8ydsCs7vs6wtWDXMXNL1EzfBtnyYywfTDAds2eztR2mj59Rsho8",
  "key28": "2knkKUMMcQAFahFzYHfTmvvfGXjACsFbqsPowEhFPH8GpA1UDE39h5SCSDWFmSXNdpj5UYz5FuZPAUPYiwTBzav3",
  "key29": "s6A2oLhWV8cqrFsTmpErKJuXWvaRJC6P28f1aDu6L1LB1BKiUEhpEnXvhDkUDX3Xwgxu2Vf6mqZrjskWaSnwrbg",
  "key30": "5Evt4LMzhUcZnV88azfDpbHVKdmskPfxJEWS8PQPhX2UrdyjisaQXbA1jtXWCG7Vk8jtbuWDYz5UVHn3CyRD8WVm",
  "key31": "4Kb4Ja84ibuaLk2swqFcgTGgMc5Dqom6iXaVMMeXqSczs4sRnnQDqKjV5DAsfARq3fTpqnpsGtF5E4oWM1FFd4nQ"
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

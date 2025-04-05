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
    "dEUyPcr3JLTRggH7526mBytyjTdBftgPDYxCL4k3KSA9eT15ihXK8HyfFde2cmtqBVX4Rni13rXty1ggcHp9Qxs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PaSZmXSoCu2rzM4XttwzGDGYNvkSQQqE7CdfG4UDyzDXpKxyiVPC6Rvxm3rzoBdT5RHpeR1seMXjMjBpcH7DqMY",
  "key1": "5PGEWaAqo5fVasZbAwGvgiMBYpKubt5FK3dWa5wcSDhA1zWUMN3PfrnqiwuQSkn9joJHKy8Jm35WJq1K8ZDuBTyR",
  "key2": "4ZcrQsqet8tTXimtMygtPqBTNYTvMUwHHksigRG9v5a3mjBYCCT4rhMByrrX5sHsRPoYpnBgTMZUJPwU9jy9ntCV",
  "key3": "3xsjEm4dni1gYhsAFtucQo1kixDTXPpGHqoUGqLvvTLfJF1QUK9wMfTSRP4y4P2CXgwSCUSBNmUqzfhoMThFefND",
  "key4": "4kpwTAtjLsiBgdQwd5NYnkLYD9Pxqkcm48rCiQLFQQ5f58sDn1uemjbyNvDN7wcpfjuV8S3SvoZS8xmyMSQ94EP1",
  "key5": "4e8njsaMMLC6JZPN94dZst3tc7Dht7tyLLFi8ak3aSN82csQjGzh6UPbYnQKq15Dq8A4zCrzka6tnW6qVHbbH3R1",
  "key6": "4o7fJRNnU4k3njKZfaJbEaqdfha29taXQsqeHvRodRSbM5UxYvnnz2nN2CCFxMPYcMcCHb3AKCdL7XDsjECTrR6o",
  "key7": "5BEmB9sfJRsoFWmTXEchVYX1FinVeWptjGWftx98LBpvQ3HCrorsTULrE7mdm85HbpkP41wk6hfThbrJB1eVxCAW",
  "key8": "49aPCfKx3upGEHTuCeWsgbq8TSJmVLzKB5aeS5eNLdkfY8R49KCP8Les9hBvmPfiKbQhffDvM7BGsF32HLZgJCmp",
  "key9": "2Ar8HAKJHqgiVBaFo8dP4VyWSuNmgebReY9aHaNbGaphXVn1DXnD1nZsCqFjXbES73mDsRErt9PcM458Bjn9AqmY",
  "key10": "5KrU5TUfntRN12TBP9ibrjC7oBGhCctHVcZaNgwsq7bndnSb3Nei3tJQs5Zoah5oSwjWvEUTuMu2yv38bRtv2VG2",
  "key11": "3fGsx4ruYXAKniZpAyTY5ZAhwfLWzKgoBgDK7h9LXnnczPKVvG5UJcpWycuuQutuDE1QEhGwXzMQ3fnwEuaX8dKg",
  "key12": "2RZi6GxpCacbWEde4xScTCw75RW7pcQtNFJzq4BaLbTGH2PeNQfevPJURykVYfsCjhaueL3ngX8wPhdLamLznX2R",
  "key13": "31H7Dt6Vi6G8CVCNACBJyDddbgDV6B1SEoVARw3Vvdt5euo2CXgsh87MnXNyGGQisbbnAc31F9iD5wRvvQE3cyD",
  "key14": "P9yCRyR54139AWnNKXNdJHL8HSNqg5snFA81sDEzkP619wpwkStfCY4SYRyfctm5qgxeZefvwgTLe1E5ektSqaj",
  "key15": "3vrfYMv5SCyaDe8uVSqWU8Mahe4vGK7XA3pUXbGkeQdb56s22Y45MyvDRMvSTFmpB53ZewnwfQuFScsnpg5NQvix",
  "key16": "WaBXwACZkHfaXqM4kG8igYRd1jFUWvdm6yJZsv4ELYM3S7p6G3WVc1NfRGemkcBXhLCcaexyKhKfRzcU17suuRx",
  "key17": "51BGMDMNM3SJeDDPqJUPHLdWgVg7kAooTj8hcRyyb8ggR8dUp5N7feeaG6fvzyx3T7rgPcCBDKpYcfqg8woAZt2t",
  "key18": "5FkMBmQx21dcjGjQDdiTgHKphhLRtPJp65k24R3kAvW4LmQ541kqWWyZqvHnnp2mgvWKWyHgYm7J7C3Np5HoLm5p",
  "key19": "JKTzK88Zjke4MXxKRuo6Uq5rwVRhHgDiFnMgtTDPMtLCr2NvgyptNe8JGjQ5TpjXGTJyeYNdAoWxksr8KscSUTj",
  "key20": "3p34w6q6cM5CRsSc7xjSyZvWjVPnajtogor4LFkDPfKbxwX6Aeji2RQ6wLndycEWwjJy7kc6D8ZikMzqqJxFurkb",
  "key21": "QBzYXkYaBFKD7gzeHobJj8H7JraXgpVJqCcHizZbSawjrgh6XLFLV8qYZAT28vR67dPVF1sLjv3fNnrcHNNGivn",
  "key22": "ae55ZMNca5kiK8NGEr4hfG5TWTH2NbrFkjSR8HYBozLLsbC9grh4qZ6qEDABd6Z9ozCgqJtN7GNdZ68PEH2iFNz",
  "key23": "2RsjcaaxpDq8DhHUi9FewPDLnRHCcQxvk1YFTyd5Kz6QG12tqLhqFMzQXmTrTtKTZzaLCEpDXASz3fhuzBt6maqr",
  "key24": "357LqpyNjTd8QLQysNUxqxrnNiaJYWyjVpdEqQ5w7LaybSTzuLZqM58m7qQwTaAJeLKZg1uL7wLGySmzeAdudiXJ",
  "key25": "3BuvpcsudM48C8mxtuT5gUDbvgVdjeyx3iSE6e3zfYHtREGKdFVnwrGhku6cTGSyRkAmtCxDtTBEmP4oA8PZEbnL",
  "key26": "2jQrDUKSHAbCVq1Zp6ynocZNkgvN1sduQdhLAPNfM1mBNgEdXu3ua3jSmTuA83LxaNUMtDWr3E7xnw3FXuhruUjG",
  "key27": "5oJaUP719P6ZC49TtxAXFe2kEZHDHvFtpEDRp1C6jj8cyhzTB2RY4B5U9Ucg5HDA9cMGSGvhzXyWkusW4ezGhuAi",
  "key28": "2wczr7cWYRgw87uzcAs2qKSfsR3nBDZYsFhGDg53xAj2m2sAzcdL8ovsNrqfPk51LfmgzDbwokPh6vb1ywew3gwk",
  "key29": "3mTZmbStN6cH91mFL86hpaNVzP1bqd3xEQyxpmHiPp2GvPU4nt3Y42owaK4inBfnxbRf7zVmu35S8mRFR9EfcDFb",
  "key30": "4qmMQes4bP3Je6bvhaLXvhXw5k5MbeLRF2Raa3ybH4d59u5UTPhSVSkaGiRq2UYyefWLF9yYdyWX3cKQwZeYSztM"
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
